goog.provide('stuttaford.codex');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('stuttaford.om.common');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
goog.require('stuttaford.om.common');
goog.require('cljs.reader');
goog.require('cljs.reader');
stuttaford.codex.name_sort = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.sort_by,new cljs.core.Keyword(null,"name","name",1843675177));
stuttaford.codex.regex = (function regex(search_term){return (new RegExp(search_term,"i"));
});
stuttaford.codex.search_items = (function search_items(keys,search_term,items){if(cljs.core.truth_(search_term))
{var has_value_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.re_find,stuttaford.codex.regex(search_term));return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (has_value_QMARK_){
return (function (item){return cljs.core.boolean$(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(has_value_QMARK_,cljs.core.vals(cljs.core.select_keys(item,keys)))));
});})(has_value_QMARK_))
,items);
} else
{return items;
}
});
/**
* @param {...*} var_args
*/
stuttaford.codex.tag_item = (function() { 
var tag_item__delegate = function (data__24427__auto__,owner55967,p__55969){var vec__55997 = p__55969;var opts__24428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55997,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema56001 = schema.core.Any;var input_schema56002 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map55998","map55998",359754380,null))], null);var input_checker56003 = schema.core.checker(input_schema56002);var output_checker56004 = schema.core.checker(output_schema56001);return schema.core.schematize_fn(((function (ufv__,output_schema56001,input_schema56002,input_checker56003,output_checker56004,vec__55997,opts__24428__auto__){
return (function fnk56000(G__56005){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56024 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__56005], null);var temp__4126__auto___56025 = (function (){var G__56015 = args__838__auto___56024;return (input_checker56003.cljs$core$IFn$_invoke$arity$1 ? input_checker56003.cljs$core$IFn$_invoke$arity$1(G__56015) : input_checker56003.call(null,G__56015));
})();if(cljs.core.truth_(temp__4126__auto___56025))
{var error__839__auto___56026 = temp__4126__auto___56025;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk56000","fnk56000",2080603489,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56026], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56002,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56024,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56026], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map55998 = G__56005;while(true){
if(cljs.core.map_QMARK_(map55998))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map55998], 0))));
}
var map55999 = plumbing.fnk.schema.safe_get(map55998,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var name = plumbing.fnk.schema.safe_get(map55999,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map55998,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t56016 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t56016 = (function (fnk56000,owner55967,map55999,owner,G__56005,output_schema56001,map55998,name,vec__55997,input_schema56002,p__55969,validate__837__auto__,input_checker56003,data__24427__auto__,ufv__,tag_item,output_checker56004,opts__24428__auto__,meta56017){
this.fnk56000 = fnk56000;
this.owner55967 = owner55967;
this.map55999 = map55999;
this.owner = owner;
this.G__56005 = G__56005;
this.output_schema56001 = output_schema56001;
this.map55998 = map55998;
this.name = name;
this.vec__55997 = vec__55997;
this.input_schema56002 = input_schema56002;
this.p__55969 = p__55969;
this.validate__837__auto__ = validate__837__auto__;
this.input_checker56003 = input_checker56003;
this.data__24427__auto__ = data__24427__auto__;
this.ufv__ = ufv__;
this.tag_item = tag_item;
this.output_checker56004 = output_checker56004;
this.opts__24428__auto__ = opts__24428__auto__;
this.meta56017 = meta56017;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t56016.cljs$lang$type = true;
stuttaford.codex.t56016.cljs$lang$ctorStr = "stuttaford.codex/t56016";
stuttaford.codex.t56016.cljs$lang$ctorPrWriter = ((function (owner,name,map55999,validate__837__auto__,ufv__,output_schema56001,input_schema56002,input_checker56003,output_checker56004,vec__55997,opts__24428__auto__){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"stuttaford.codex/t56016");
});})(owner,name,map55999,validate__837__auto__,ufv__,output_schema56001,input_schema56002,input_checker56003,output_checker56004,vec__55997,opts__24428__auto__))
;
stuttaford.codex.t56016.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t56016.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,name,map55999,validate__837__auto__,ufv__,output_schema56001,input_schema56002,input_checker56003,output_checker56004,vec__55997,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-item";
});})(owner,name,map55999,validate__837__auto__,ufv__,output_schema56001,input_schema56002,input_checker56003,output_checker56004,vec__55997,opts__24428__auto__))
;
stuttaford.codex.t56016.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t56016.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,name,map55999,validate__837__auto__,ufv__,output_schema56001,input_schema56002,input_checker56003,output_checker56004,vec__55997,opts__24428__auto__){
return (function (_,p__56019){var self__ = this;
var map__56020 = p__56019;var map__56020__$1 = ((cljs.core.seq_QMARK_(map__56020))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56020):map__56020);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56020__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var ___$1 = this;var class$ = (cljs.core.truth_((function (){var and__19564__auto__ = cljs.core.seq(search_term);if(and__19564__auto__)
{return cljs.core.re_find(stuttaford.codex.regex(search_term),self__.name);
} else
{return and__19564__auto__;
}
})())?"tag active":"tag");var G__56021 = {"className": class$, "onClick": ((function (class$,___$1,map__56020,map__56020__$1,search_term,owner,name,map55999,validate__837__auto__,ufv__,output_schema56001,input_schema56002,input_checker56003,output_checker56004,vec__55997,opts__24428__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"search-chan","search-chan",962868037)),self__.name);
});})(class$,___$1,map__56020,map__56020__$1,search_term,owner,name,map55999,validate__837__auto__,ufv__,output_schema56001,input_schema56002,input_checker56003,output_checker56004,vec__55997,opts__24428__auto__))
};var G__56022 = sablono.interpreter.interpret(self__.name);return React.DOM.a(G__56021,G__56022);
});})(owner,name,map55999,validate__837__auto__,ufv__,output_schema56001,input_schema56002,input_checker56003,output_checker56004,vec__55997,opts__24428__auto__))
;
stuttaford.codex.t56016.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,name,map55999,validate__837__auto__,ufv__,output_schema56001,input_schema56002,input_checker56003,output_checker56004,vec__55997,opts__24428__auto__){
return (function (_56018){var self__ = this;
var _56018__$1 = this;return self__.meta56017;
});})(owner,name,map55999,validate__837__auto__,ufv__,output_schema56001,input_schema56002,input_checker56003,output_checker56004,vec__55997,opts__24428__auto__))
;
stuttaford.codex.t56016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,name,map55999,validate__837__auto__,ufv__,output_schema56001,input_schema56002,input_checker56003,output_checker56004,vec__55997,opts__24428__auto__){
return (function (_56018,meta56017__$1){var self__ = this;
var _56018__$1 = this;return (new stuttaford.codex.t56016(self__.fnk56000,self__.owner55967,self__.map55999,self__.owner,self__.G__56005,self__.output_schema56001,self__.map55998,self__.name,self__.vec__55997,self__.input_schema56002,self__.p__55969,self__.validate__837__auto__,self__.input_checker56003,self__.data__24427__auto__,self__.ufv__,self__.tag_item,self__.output_checker56004,self__.opts__24428__auto__,meta56017__$1));
});})(owner,name,map55999,validate__837__auto__,ufv__,output_schema56001,input_schema56002,input_checker56003,output_checker56004,vec__55997,opts__24428__auto__))
;
stuttaford.codex.__GT_t56016 = ((function (owner,name,map55999,validate__837__auto__,ufv__,output_schema56001,input_schema56002,input_checker56003,output_checker56004,vec__55997,opts__24428__auto__){
return (function __GT_t56016(fnk56000__$1,owner55967__$1,map55999__$1,owner__$1,G__56005__$1,output_schema56001__$1,map55998__$1,name__$1,vec__55997__$1,input_schema56002__$1,p__55969__$1,validate__837__auto____$1,input_checker56003__$1,data__24427__auto____$1,ufv____$1,tag_item__$1,output_checker56004__$1,opts__24428__auto____$1,meta56017){return (new stuttaford.codex.t56016(fnk56000__$1,owner55967__$1,map55999__$1,owner__$1,G__56005__$1,output_schema56001__$1,map55998__$1,name__$1,vec__55997__$1,input_schema56002__$1,p__55969__$1,validate__837__auto____$1,input_checker56003__$1,data__24427__auto____$1,ufv____$1,tag_item__$1,output_checker56004__$1,opts__24428__auto____$1,meta56017));
});})(owner,name,map55999,validate__837__auto__,ufv__,output_schema56001,input_schema56002,input_checker56003,output_checker56004,vec__55997,opts__24428__auto__))
;
}
return (new stuttaford.codex.t56016(fnk56000,owner55967,map55999,owner,G__56005,output_schema56001,map55998,name,vec__55997,input_schema56002,p__55969,validate__837__auto__,input_checker56003,data__24427__auto__,ufv__,tag_item,output_checker56004,opts__24428__auto__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56027 = (function (){var G__56023 = o__840__auto__;return (output_checker56004.cljs$core$IFn$_invoke$arity$1 ? output_checker56004.cljs$core$IFn$_invoke$arity$1(G__56023) : output_checker56004.call(null,G__56023));
})();if(cljs.core.truth_(temp__4126__auto___56027))
{var error__839__auto___56028 = temp__4126__auto___56027;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk56000","fnk56000",2080603489,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56028], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56001,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56028], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema56001,input_schema56002,input_checker56003,output_checker56004,vec__55997,opts__24428__auto__))
,schema.core.make_fn_schema(output_schema56001,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56002], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24428__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner55967,new cljs.core.Keyword(null,"data","data",-232669377),data__24427__auto__], null));
};
var tag_item = function (data__24427__auto__,owner55967,var_args){
var p__55969 = null;if (arguments.length > 2) {
  p__55969 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_item__delegate.call(this,data__24427__auto__,owner55967,p__55969);};
tag_item.cljs$lang$maxFixedArity = 2;
tag_item.cljs$lang$applyTo = (function (arglist__56029){
var data__24427__auto__ = cljs.core.first(arglist__56029);
arglist__56029 = cljs.core.next(arglist__56029);
var owner55967 = cljs.core.first(arglist__56029);
var p__55969 = cljs.core.rest(arglist__56029);
return tag_item__delegate(data__24427__auto__,owner55967,p__55969);
});
tag_item.cljs$core$IFn$_invoke$arity$variadic = tag_item__delegate;
return tag_item;
})()
;
stuttaford.codex.__GT_tag_item = (function() {
var __GT_tag_item = null;
var __GT_tag_item__1 = (function (cursor__24396__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.tag_item,cursor__24396__auto__);
});
var __GT_tag_item__2 = (function (cursor__24396__auto__,m55968){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.tag_item,cursor__24396__auto__,m55968);
});
__GT_tag_item = function(cursor__24396__auto__,m55968){
switch(arguments.length){
case 1:
return __GT_tag_item__1.call(this,cursor__24396__auto__);
case 2:
return __GT_tag_item__2.call(this,cursor__24396__auto__,m55968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_item.cljs$core$IFn$_invoke$arity$1 = __GT_tag_item__1;
__GT_tag_item.cljs$core$IFn$_invoke$arity$2 = __GT_tag_item__2;
return __GT_tag_item;
})()
;
/**
* @param {...*} var_args
*/
stuttaford.codex.link_item = (function() { 
var link_item__delegate = function (data__24427__auto__,owner56030,p__56032){var vec__56068 = p__56032;var opts__24428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56068,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema56072 = schema.core.Any;var input_schema56073 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"tags","tags",1771418977)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"image","image",-58725096)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"description","description",-1428560544)),schema.core.Any,new cljs.core.Keyword(null,"uri","uri",-774711847),schema.core.Any,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map56069","map56069",-1995006054,null))], null);var input_checker56074 = schema.core.checker(input_schema56073);var output_checker56075 = schema.core.checker(output_schema56072);return schema.core.schematize_fn(((function (ufv__,output_schema56072,input_schema56073,input_checker56074,output_checker56075,vec__56068,opts__24428__auto__){
return (function fnk56071(G__56076){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56103 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__56076], null);var temp__4126__auto___56104 = (function (){var G__56090 = args__838__auto___56103;return (input_checker56074.cljs$core$IFn$_invoke$arity$1 ? input_checker56074.cljs$core$IFn$_invoke$arity$1(G__56090) : input_checker56074.call(null,G__56090));
})();if(cljs.core.truth_(temp__4126__auto___56104))
{var error__839__auto___56105 = temp__4126__auto___56104;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk56071","fnk56071",392864862,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56105], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56073,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56103,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56105], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map56069 = G__56076;while(true){
if(cljs.core.map_QMARK_(map56069))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map56069], 0))));
}
var map56070 = plumbing.fnk.schema.safe_get(map56069,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var name = plumbing.fnk.schema.safe_get(map56070,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var uri = plumbing.fnk.schema.safe_get(map56070,new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var description = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map56070,new cljs.core.Keyword(null,"description","description",-1428560544),null);var image = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map56070,new cljs.core.Keyword(null,"image","image",-58725096),null);var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map56070,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map56069,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t56091 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t56091 = (function (vec__56068,uri,owner,description,tags,map56070,owner56030,input_schema56073,G__56076,p__56032,name,input_checker56074,output_schema56072,map56069,validate__837__auto__,output_checker56075,data__24427__auto__,ufv__,fnk56071,link_item,opts__24428__auto__,image,meta56092){
this.vec__56068 = vec__56068;
this.uri = uri;
this.owner = owner;
this.description = description;
this.tags = tags;
this.map56070 = map56070;
this.owner56030 = owner56030;
this.input_schema56073 = input_schema56073;
this.G__56076 = G__56076;
this.p__56032 = p__56032;
this.name = name;
this.input_checker56074 = input_checker56074;
this.output_schema56072 = output_schema56072;
this.map56069 = map56069;
this.validate__837__auto__ = validate__837__auto__;
this.output_checker56075 = output_checker56075;
this.data__24427__auto__ = data__24427__auto__;
this.ufv__ = ufv__;
this.fnk56071 = fnk56071;
this.link_item = link_item;
this.opts__24428__auto__ = opts__24428__auto__;
this.image = image;
this.meta56092 = meta56092;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t56091.cljs$lang$type = true;
stuttaford.codex.t56091.cljs$lang$ctorStr = "stuttaford.codex/t56091";
stuttaford.codex.t56091.cljs$lang$ctorPrWriter = ((function (owner,tags,image,description,uri,name,map56070,validate__837__auto__,ufv__,output_schema56072,input_schema56073,input_checker56074,output_checker56075,vec__56068,opts__24428__auto__){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"stuttaford.codex/t56091");
});})(owner,tags,image,description,uri,name,map56070,validate__837__auto__,ufv__,output_schema56072,input_schema56073,input_checker56074,output_checker56075,vec__56068,opts__24428__auto__))
;
stuttaford.codex.t56091.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t56091.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,tags,image,description,uri,name,map56070,validate__837__auto__,ufv__,output_schema56072,input_schema56073,input_checker56074,output_checker56075,vec__56068,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "link-item";
});})(owner,tags,image,description,uri,name,map56070,validate__837__auto__,ufv__,output_schema56072,input_schema56073,input_checker56074,output_checker56075,vec__56068,opts__24428__auto__))
;
stuttaford.codex.t56091.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t56091.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,tags,image,description,uri,name,map56070,validate__837__auto__,ufv__,output_schema56072,input_schema56073,input_checker56074,output_checker56075,vec__56068,opts__24428__auto__){
return (function (_,p__56094){var self__ = this;
var map__56095 = p__56094;var map__56095__$1 = ((cljs.core.seq_QMARK_(map__56095))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56095):map__56095);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56095__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var ___$1 = this;var G__56096 = {"className": "link"};var G__56097 = (function (){var G__56099 = {"href": self__.uri};var G__56100 = sablono.interpreter.interpret(self__.name);return React.DOM.a(G__56099,G__56100);
})();var G__56098 = sablono.interpreter.interpret(om.core.build_all.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.tag_item,(function (){var G__56101 = self__.tags;return (stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1 ? stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1(G__56101) : stuttaford.codex.name_sort.call(null,G__56101));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177)], null)));return React.DOM.li(G__56096,G__56097,G__56098);
});})(owner,tags,image,description,uri,name,map56070,validate__837__auto__,ufv__,output_schema56072,input_schema56073,input_checker56074,output_checker56075,vec__56068,opts__24428__auto__))
;
stuttaford.codex.t56091.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,tags,image,description,uri,name,map56070,validate__837__auto__,ufv__,output_schema56072,input_schema56073,input_checker56074,output_checker56075,vec__56068,opts__24428__auto__){
return (function (_56093){var self__ = this;
var _56093__$1 = this;return self__.meta56092;
});})(owner,tags,image,description,uri,name,map56070,validate__837__auto__,ufv__,output_schema56072,input_schema56073,input_checker56074,output_checker56075,vec__56068,opts__24428__auto__))
;
stuttaford.codex.t56091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,tags,image,description,uri,name,map56070,validate__837__auto__,ufv__,output_schema56072,input_schema56073,input_checker56074,output_checker56075,vec__56068,opts__24428__auto__){
return (function (_56093,meta56092__$1){var self__ = this;
var _56093__$1 = this;return (new stuttaford.codex.t56091(self__.vec__56068,self__.uri,self__.owner,self__.description,self__.tags,self__.map56070,self__.owner56030,self__.input_schema56073,self__.G__56076,self__.p__56032,self__.name,self__.input_checker56074,self__.output_schema56072,self__.map56069,self__.validate__837__auto__,self__.output_checker56075,self__.data__24427__auto__,self__.ufv__,self__.fnk56071,self__.link_item,self__.opts__24428__auto__,self__.image,meta56092__$1));
});})(owner,tags,image,description,uri,name,map56070,validate__837__auto__,ufv__,output_schema56072,input_schema56073,input_checker56074,output_checker56075,vec__56068,opts__24428__auto__))
;
stuttaford.codex.__GT_t56091 = ((function (owner,tags,image,description,uri,name,map56070,validate__837__auto__,ufv__,output_schema56072,input_schema56073,input_checker56074,output_checker56075,vec__56068,opts__24428__auto__){
return (function __GT_t56091(vec__56068__$1,uri__$1,owner__$1,description__$1,tags__$1,map56070__$1,owner56030__$1,input_schema56073__$1,G__56076__$1,p__56032__$1,name__$1,input_checker56074__$1,output_schema56072__$1,map56069__$1,validate__837__auto____$1,output_checker56075__$1,data__24427__auto____$1,ufv____$1,fnk56071__$1,link_item__$1,opts__24428__auto____$1,image__$1,meta56092){return (new stuttaford.codex.t56091(vec__56068__$1,uri__$1,owner__$1,description__$1,tags__$1,map56070__$1,owner56030__$1,input_schema56073__$1,G__56076__$1,p__56032__$1,name__$1,input_checker56074__$1,output_schema56072__$1,map56069__$1,validate__837__auto____$1,output_checker56075__$1,data__24427__auto____$1,ufv____$1,fnk56071__$1,link_item__$1,opts__24428__auto____$1,image__$1,meta56092));
});})(owner,tags,image,description,uri,name,map56070,validate__837__auto__,ufv__,output_schema56072,input_schema56073,input_checker56074,output_checker56075,vec__56068,opts__24428__auto__))
;
}
return (new stuttaford.codex.t56091(vec__56068,uri,owner,description,tags,map56070,owner56030,input_schema56073,G__56076,p__56032,name,input_checker56074,output_schema56072,map56069,validate__837__auto__,output_checker56075,data__24427__auto__,ufv__,fnk56071,link_item,opts__24428__auto__,image,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56106 = (function (){var G__56102 = o__840__auto__;return (output_checker56075.cljs$core$IFn$_invoke$arity$1 ? output_checker56075.cljs$core$IFn$_invoke$arity$1(G__56102) : output_checker56075.call(null,G__56102));
})();if(cljs.core.truth_(temp__4126__auto___56106))
{var error__839__auto___56107 = temp__4126__auto___56106;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk56071","fnk56071",392864862,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56107], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56072,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56107], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema56072,input_schema56073,input_checker56074,output_checker56075,vec__56068,opts__24428__auto__))
,schema.core.make_fn_schema(output_schema56072,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56073], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24428__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner56030,new cljs.core.Keyword(null,"data","data",-232669377),data__24427__auto__], null));
};
var link_item = function (data__24427__auto__,owner56030,var_args){
var p__56032 = null;if (arguments.length > 2) {
  p__56032 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return link_item__delegate.call(this,data__24427__auto__,owner56030,p__56032);};
link_item.cljs$lang$maxFixedArity = 2;
link_item.cljs$lang$applyTo = (function (arglist__56108){
var data__24427__auto__ = cljs.core.first(arglist__56108);
arglist__56108 = cljs.core.next(arglist__56108);
var owner56030 = cljs.core.first(arglist__56108);
var p__56032 = cljs.core.rest(arglist__56108);
return link_item__delegate(data__24427__auto__,owner56030,p__56032);
});
link_item.cljs$core$IFn$_invoke$arity$variadic = link_item__delegate;
return link_item;
})()
;
stuttaford.codex.__GT_link_item = (function() {
var __GT_link_item = null;
var __GT_link_item__1 = (function (cursor__24396__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.link_item,cursor__24396__auto__);
});
var __GT_link_item__2 = (function (cursor__24396__auto__,m56031){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.link_item,cursor__24396__auto__,m56031);
});
__GT_link_item = function(cursor__24396__auto__,m56031){
switch(arguments.length){
case 1:
return __GT_link_item__1.call(this,cursor__24396__auto__);
case 2:
return __GT_link_item__2.call(this,cursor__24396__auto__,m56031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_link_item.cljs$core$IFn$_invoke$arity$1 = __GT_link_item__1;
__GT_link_item.cljs$core$IFn$_invoke$arity$2 = __GT_link_item__2;
return __GT_link_item;
})()
;
/**
* @param {...*} var_args
*/
stuttaford.codex.category_item = (function() { 
var category_item__delegate = function (data__24427__auto__,owner56109,p__56111){var vec__56146 = p__56111;var opts__24428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56146,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema56149 = schema.core.Any;var input_schema56150 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"links","links",-654507394),schema.core.Any,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map56147","map56147",1630218614,null))], null);var input_checker56151 = schema.core.checker(input_schema56150);var output_checker56152 = schema.core.checker(output_schema56149);return schema.core.schematize_fn(((function (ufv__,output_schema56149,input_schema56150,input_checker56151,output_checker56152,vec__56146,opts__24428__auto__){
return (function fnk56148(G__56153){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56180 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__56153], null);var temp__4126__auto___56181 = (function (){var G__56167 = args__838__auto___56180;return (input_checker56151.cljs$core$IFn$_invoke$arity$1 ? input_checker56151.cljs$core$IFn$_invoke$arity$1(G__56167) : input_checker56151.call(null,G__56167));
})();if(cljs.core.truth_(temp__4126__auto___56181))
{var error__839__auto___56182 = temp__4126__auto___56181;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk56148","fnk56148",-57729680,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56182], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56150,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56180,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56182], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map56147 = G__56153;while(true){
if(cljs.core.map_QMARK_(map56147))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map56147], 0))));
}
var data = plumbing.fnk.schema.safe_get(map56147,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var name = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var links = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map56147,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t56168 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t56168 = (function (owner,links,data,owner56109,output_schema56149,input_checker56151,vec__56146,G__56153,fnk56148,name,output_checker56152,p__56111,map56147,input_schema56150,category_item,validate__837__auto__,data__24427__auto__,ufv__,opts__24428__auto__,meta56169){
this.owner = owner;
this.links = links;
this.data = data;
this.owner56109 = owner56109;
this.output_schema56149 = output_schema56149;
this.input_checker56151 = input_checker56151;
this.vec__56146 = vec__56146;
this.G__56153 = G__56153;
this.fnk56148 = fnk56148;
this.name = name;
this.output_checker56152 = output_checker56152;
this.p__56111 = p__56111;
this.map56147 = map56147;
this.input_schema56150 = input_schema56150;
this.category_item = category_item;
this.validate__837__auto__ = validate__837__auto__;
this.data__24427__auto__ = data__24427__auto__;
this.ufv__ = ufv__;
this.opts__24428__auto__ = opts__24428__auto__;
this.meta56169 = meta56169;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t56168.cljs$lang$type = true;
stuttaford.codex.t56168.cljs$lang$ctorStr = "stuttaford.codex/t56168";
stuttaford.codex.t56168.cljs$lang$ctorPrWriter = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema56149,input_schema56150,input_checker56151,output_checker56152,vec__56146,opts__24428__auto__){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"stuttaford.codex/t56168");
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema56149,input_schema56150,input_checker56151,output_checker56152,vec__56146,opts__24428__auto__))
;
stuttaford.codex.t56168.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t56168.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema56149,input_schema56150,input_checker56151,output_checker56152,vec__56146,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "category-item";
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema56149,input_schema56150,input_checker56151,output_checker56152,vec__56146,opts__24428__auto__))
;
stuttaford.codex.t56168.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t56168.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema56149,input_schema56150,input_checker56151,output_checker56152,vec__56146,opts__24428__auto__){
return (function (_,p__56171){var self__ = this;
var map__56172 = p__56171;var map__56172__$1 = ((cljs.core.seq_QMARK_(map__56172))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56172):map__56172);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56172__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var ___$1 = this;var temp__4126__auto__ = cljs.core.seq((function (){var G__56173 = stuttaford.codex.search_items(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"tags-string","tags-string",-736299316)], null),search_term,self__.links);return (stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1 ? stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1(G__56173) : stuttaford.codex.name_sort.call(null,G__56173));
})());if(temp__4126__auto__)
{var links__$2 = temp__4126__auto__;var G__56176 = null;var G__56177 = (function (){var attrs56174 = self__.name;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs56174))?sablono.interpreter.attributes(attrs56174):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs56174))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs56174)], null))));
})();var G__56178 = (function (){var attrs56175 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.link_item,links__$2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177)], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.ul,((cljs.core.map_QMARK_(attrs56175))?sablono.interpreter.attributes(attrs56175):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs56175))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs56175)], null))));
})();return React.DOM.div(G__56176,G__56177,G__56178);
} else
{return null;
}
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema56149,input_schema56150,input_checker56151,output_checker56152,vec__56146,opts__24428__auto__))
;
stuttaford.codex.t56168.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema56149,input_schema56150,input_checker56151,output_checker56152,vec__56146,opts__24428__auto__){
return (function (_56170){var self__ = this;
var _56170__$1 = this;return self__.meta56169;
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema56149,input_schema56150,input_checker56151,output_checker56152,vec__56146,opts__24428__auto__))
;
stuttaford.codex.t56168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema56149,input_schema56150,input_checker56151,output_checker56152,vec__56146,opts__24428__auto__){
return (function (_56170,meta56169__$1){var self__ = this;
var _56170__$1 = this;return (new stuttaford.codex.t56168(self__.owner,self__.links,self__.data,self__.owner56109,self__.output_schema56149,self__.input_checker56151,self__.vec__56146,self__.G__56153,self__.fnk56148,self__.name,self__.output_checker56152,self__.p__56111,self__.map56147,self__.input_schema56150,self__.category_item,self__.validate__837__auto__,self__.data__24427__auto__,self__.ufv__,self__.opts__24428__auto__,meta56169__$1));
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema56149,input_schema56150,input_checker56151,output_checker56152,vec__56146,opts__24428__auto__))
;
stuttaford.codex.__GT_t56168 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema56149,input_schema56150,input_checker56151,output_checker56152,vec__56146,opts__24428__auto__){
return (function __GT_t56168(owner__$1,links__$1,data__$1,owner56109__$1,output_schema56149__$1,input_checker56151__$1,vec__56146__$1,G__56153__$1,fnk56148__$1,name__$1,output_checker56152__$1,p__56111__$1,map56147__$1,input_schema56150__$1,category_item__$1,validate__837__auto____$1,data__24427__auto____$1,ufv____$1,opts__24428__auto____$1,meta56169){return (new stuttaford.codex.t56168(owner__$1,links__$1,data__$1,owner56109__$1,output_schema56149__$1,input_checker56151__$1,vec__56146__$1,G__56153__$1,fnk56148__$1,name__$1,output_checker56152__$1,p__56111__$1,map56147__$1,input_schema56150__$1,category_item__$1,validate__837__auto____$1,data__24427__auto____$1,ufv____$1,opts__24428__auto____$1,meta56169));
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema56149,input_schema56150,input_checker56151,output_checker56152,vec__56146,opts__24428__auto__))
;
}
return (new stuttaford.codex.t56168(owner,links,data,owner56109,output_schema56149,input_checker56151,vec__56146,G__56153,fnk56148,name,output_checker56152,p__56111,map56147,input_schema56150,category_item,validate__837__auto__,data__24427__auto__,ufv__,opts__24428__auto__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56183 = (function (){var G__56179 = o__840__auto__;return (output_checker56152.cljs$core$IFn$_invoke$arity$1 ? output_checker56152.cljs$core$IFn$_invoke$arity$1(G__56179) : output_checker56152.call(null,G__56179));
})();if(cljs.core.truth_(temp__4126__auto___56183))
{var error__839__auto___56184 = temp__4126__auto___56183;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk56148","fnk56148",-57729680,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56184], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56149,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56184], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema56149,input_schema56150,input_checker56151,output_checker56152,vec__56146,opts__24428__auto__))
,schema.core.make_fn_schema(output_schema56149,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56150], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24428__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner56109,new cljs.core.Keyword(null,"data","data",-232669377),data__24427__auto__], null));
};
var category_item = function (data__24427__auto__,owner56109,var_args){
var p__56111 = null;if (arguments.length > 2) {
  p__56111 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return category_item__delegate.call(this,data__24427__auto__,owner56109,p__56111);};
category_item.cljs$lang$maxFixedArity = 2;
category_item.cljs$lang$applyTo = (function (arglist__56185){
var data__24427__auto__ = cljs.core.first(arglist__56185);
arglist__56185 = cljs.core.next(arglist__56185);
var owner56109 = cljs.core.first(arglist__56185);
var p__56111 = cljs.core.rest(arglist__56185);
return category_item__delegate(data__24427__auto__,owner56109,p__56111);
});
category_item.cljs$core$IFn$_invoke$arity$variadic = category_item__delegate;
return category_item;
})()
;
stuttaford.codex.__GT_category_item = (function() {
var __GT_category_item = null;
var __GT_category_item__1 = (function (cursor__24396__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.category_item,cursor__24396__auto__);
});
var __GT_category_item__2 = (function (cursor__24396__auto__,m56110){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.category_item,cursor__24396__auto__,m56110);
});
__GT_category_item = function(cursor__24396__auto__,m56110){
switch(arguments.length){
case 1:
return __GT_category_item__1.call(this,cursor__24396__auto__);
case 2:
return __GT_category_item__2.call(this,cursor__24396__auto__,m56110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_category_item.cljs$core$IFn$_invoke$arity$1 = __GT_category_item__1;
__GT_category_item.cljs$core$IFn$_invoke$arity$2 = __GT_category_item__2;
return __GT_category_item;
})()
;
/**
* @param {...*} var_args
*/
stuttaford.codex.app_view = (function() { 
var app_view__delegate = function (data__24427__auto__,owner56187,p__56189){var vec__56297 = p__56189;var opts__24428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56297,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema56301 = schema.core.Any;var input_schema56302 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"categories","categories",178386610),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map56298","map56298",492043036,null))], null);var input_checker56303 = schema.core.checker(input_schema56302);var output_checker56304 = schema.core.checker(output_schema56301);return schema.core.schematize_fn(((function (ufv__,output_schema56301,input_schema56302,input_checker56303,output_checker56304,vec__56297,opts__24428__auto__){
return (function fnk56300(G__56305){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56404 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__56305], null);var temp__4126__auto___56405 = (function (){var G__56355 = args__838__auto___56404;return (input_checker56303.cljs$core$IFn$_invoke$arity$1 ? input_checker56303.cljs$core$IFn$_invoke$arity$1(G__56355) : input_checker56303.call(null,G__56355));
})();if(cljs.core.truth_(temp__4126__auto___56405))
{var error__839__auto___56406 = temp__4126__auto___56405;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk56300","fnk56300",-956921304,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56406], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56302,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56404,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56406], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map56298 = G__56305;while(true){
if(cljs.core.map_QMARK_(map56298))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map56298], 0))));
}
var map56299 = plumbing.fnk.schema.safe_get(map56298,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var categories = plumbing.fnk.schema.safe_get(map56299,new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map56298,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t56356 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t56356 = (function (vec__56297,app_view,G__56305,owner,input_checker56303,fnk56300,output_checker56304,input_schema56302,categories,validate__837__auto__,map56299,map56298,data__24427__auto__,owner56187,ufv__,p__56189,opts__24428__auto__,output_schema56301,meta56357){
this.vec__56297 = vec__56297;
this.app_view = app_view;
this.G__56305 = G__56305;
this.owner = owner;
this.input_checker56303 = input_checker56303;
this.fnk56300 = fnk56300;
this.output_checker56304 = output_checker56304;
this.input_schema56302 = input_schema56302;
this.categories = categories;
this.validate__837__auto__ = validate__837__auto__;
this.map56299 = map56299;
this.map56298 = map56298;
this.data__24427__auto__ = data__24427__auto__;
this.owner56187 = owner56187;
this.ufv__ = ufv__;
this.p__56189 = p__56189;
this.opts__24428__auto__ = opts__24428__auto__;
this.output_schema56301 = output_schema56301;
this.meta56357 = meta56357;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t56356.cljs$lang$type = true;
stuttaford.codex.t56356.cljs$lang$ctorStr = "stuttaford.codex/t56356";
stuttaford.codex.t56356.cljs$lang$ctorPrWriter = ((function (owner,categories,map56299,validate__837__auto__,ufv__,output_schema56301,input_schema56302,input_checker56303,output_checker56304,vec__56297,opts__24428__auto__){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"stuttaford.codex/t56356");
});})(owner,categories,map56299,validate__837__auto__,ufv__,output_schema56301,input_schema56302,input_checker56303,output_checker56304,vec__56297,opts__24428__auto__))
;
stuttaford.codex.t56356.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t56356.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,categories,map56299,validate__837__auto__,ufv__,output_schema56301,input_schema56302,input_checker56303,output_checker56304,vec__56297,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "app-view";
});})(owner,categories,map56299,validate__837__auto__,ufv__,output_schema56301,input_schema56302,input_checker56303,output_checker56304,vec__56297,opts__24428__auto__))
;
stuttaford.codex.t56356.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t56356.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,categories,map56299,validate__837__auto__,ufv__,output_schema56301,input_schema56302,input_checker56303,output_checker56304,vec__56297,opts__24428__auto__){
return (function (_,p__56359){var self__ = this;
var map__56360 = p__56359;var map__56360__$1 = ((cljs.core.seq_QMARK_(map__56360))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56360):map__56360);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56360__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var search_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56360__$1,new cljs.core.Keyword(null,"search-chan","search-chan",962868037));var ___$1 = this;var G__56361 = null;var G__56362 = (function (){var G__56364 = {"id": "search", "type": "text", "placeholder": "Search for link", "autoFocus": "autofocus", "value": search_term, "onChange": ((function (G__56361,___$1,map__56360,map__56360__$1,search_term,search_chan,owner,categories,map56299,validate__837__auto__,ufv__,output_schema56301,input_schema56302,input_checker56303,output_checker56304,vec__56297,opts__24428__auto__){
return (function (p1__56186_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(search_chan,p1__56186_SHARP_.target.value);
});})(G__56361,___$1,map__56360,map__56360__$1,search_term,search_chan,owner,categories,map56299,validate__837__auto__,ufv__,output_schema56301,input_schema56302,input_checker56303,output_checker56304,vec__56297,opts__24428__auto__))
};return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__56364) : sablono.interpreter.input.call(null,G__56364));
})();var G__56363 = sablono.interpreter.interpret(om.core.build_all.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.category_item,(function (){var G__56365 = self__.categories;return (stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1 ? stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1(G__56365) : stuttaford.codex.name_sort.call(null,G__56365));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177)], null)));return React.DOM.div(G__56361,G__56362,G__56363);
});})(owner,categories,map56299,validate__837__auto__,ufv__,output_schema56301,input_schema56302,input_checker56303,output_checker56304,vec__56297,opts__24428__auto__))
;
stuttaford.codex.t56356.prototype.om$core$IWillMount$ = true;
stuttaford.codex.t56356.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (owner,categories,map56299,validate__837__auto__,ufv__,output_schema56301,input_schema56302,input_checker56303,output_checker56304,vec__56297,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var search_chan = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"search-chan","search-chan",962868037));var c__22972__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22972__auto__,search_chan,___$1,owner,categories,map56299,validate__837__auto__,ufv__,output_schema56301,input_schema56302,input_checker56303,output_checker56304,vec__56297,opts__24428__auto__){
return (function (){var f__22973__auto__ = (function (){var switch__22957__auto__ = ((function (c__22972__auto__,search_chan,___$1,owner,categories,map56299,validate__837__auto__,ufv__,output_schema56301,input_schema56302,input_checker56303,output_checker56304,vec__56297,opts__24428__auto__){
return (function (state_56382){var state_val_56383 = (state_56382[(1)]);if((state_val_56383 === (7)))
{var inst_56369 = (state_56382[(7)]);var inst_56369__$1 = (state_56382[(2)]);var state_56382__$1 = (function (){var statearr_56384 = state_56382;(statearr_56384[(7)] = inst_56369__$1);
return statearr_56384;
})();if(cljs.core.truth_(inst_56369__$1))
{var statearr_56385_56407 = state_56382__$1;(statearr_56385_56407[(1)] = (8));
} else
{var statearr_56386_56408 = state_56382__$1;(statearr_56386_56408[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56383 === (1)))
{var state_56382__$1 = state_56382;var statearr_56387_56409 = state_56382__$1;(statearr_56387_56409[(2)] = null);
(statearr_56387_56409[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56383 === (4)))
{var state_56382__$1 = state_56382;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56382__$1,(7),search_chan);
} else
{if((state_val_56383 === (6)))
{var inst_56378 = (state_56382[(2)]);var state_56382__$1 = state_56382;var statearr_56388_56410 = state_56382__$1;(statearr_56388_56410[(2)] = inst_56378);
(statearr_56388_56410[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56383 === (3)))
{var inst_56380 = (state_56382[(2)]);var state_56382__$1 = state_56382;return cljs.core.async.impl.ioc_helpers.return_chan(state_56382__$1,inst_56380);
} else
{if((state_val_56383 === (2)))
{var state_56382__$1 = state_56382;var statearr_56389_56411 = state_56382__$1;(statearr_56389_56411[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56383 === (9)))
{var state_56382__$1 = state_56382;var statearr_56391_56412 = state_56382__$1;(statearr_56391_56412[(2)] = null);
(statearr_56391_56412[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56383 === (5)))
{var state_56382__$1 = state_56382;var statearr_56392_56413 = state_56382__$1;(statearr_56392_56413[(2)] = null);
(statearr_56392_56413[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56383 === (10)))
{var inst_56374 = (state_56382[(2)]);var state_56382__$1 = (function (){var statearr_56393 = state_56382;(statearr_56393[(8)] = inst_56374);
return statearr_56393;
})();var statearr_56394_56414 = state_56382__$1;(statearr_56394_56414[(2)] = null);
(statearr_56394_56414[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56383 === (8)))
{var inst_56369 = (state_56382[(7)]);var inst_56371 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"search-term","search-term",356193544),inst_56369);var state_56382__$1 = state_56382;var statearr_56395_56415 = state_56382__$1;(statearr_56395_56415[(2)] = inst_56371);
(statearr_56395_56415[(1)] = (10));
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
});})(c__22972__auto__,search_chan,___$1,owner,categories,map56299,validate__837__auto__,ufv__,output_schema56301,input_schema56302,input_checker56303,output_checker56304,vec__56297,opts__24428__auto__))
;return ((function (switch__22957__auto__,c__22972__auto__,search_chan,___$1,owner,categories,map56299,validate__837__auto__,ufv__,output_schema56301,input_schema56302,input_checker56303,output_checker56304,vec__56297,opts__24428__auto__){
return (function() {
var state_machine__22958__auto__ = null;
var state_machine__22958__auto____0 = (function (){var statearr_56399 = [null,null,null,null,null,null,null,null,null];(statearr_56399[(0)] = state_machine__22958__auto__);
(statearr_56399[(1)] = (1));
return statearr_56399;
});
var state_machine__22958__auto____1 = (function (state_56382){while(true){
var ret_value__22959__auto__ = (function (){try{while(true){
var result__22960__auto__ = switch__22957__auto__(state_56382);if(cljs.core.keyword_identical_QMARK_(result__22960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22960__auto__;
}
break;
}
}catch (e56400){if((e56400 instanceof Object))
{var ex__22961__auto__ = e56400;var statearr_56401_56416 = state_56382;(statearr_56401_56416[(5)] = ex__22961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_56382);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e56400;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56417 = state_56382;
state_56382 = G__56417;
continue;
}
} else
{return ret_value__22959__auto__;
}
break;
}
});
state_machine__22958__auto__ = function(state_56382){
switch(arguments.length){
case 0:
return state_machine__22958__auto____0.call(this);
case 1:
return state_machine__22958__auto____1.call(this,state_56382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22958__auto____0;
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22958__auto____1;
return state_machine__22958__auto__;
})()
;})(switch__22957__auto__,c__22972__auto__,search_chan,___$1,owner,categories,map56299,validate__837__auto__,ufv__,output_schema56301,input_schema56302,input_checker56303,output_checker56304,vec__56297,opts__24428__auto__))
})();var state__22974__auto__ = (function (){var statearr_56402 = (function (){return (f__22973__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22973__auto__.cljs$core$IFn$_invoke$arity$0() : f__22973__auto__.call(null));
})();(statearr_56402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22972__auto__);
return statearr_56402;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22974__auto__);
});})(c__22972__auto__,search_chan,___$1,owner,categories,map56299,validate__837__auto__,ufv__,output_schema56301,input_schema56302,input_checker56303,output_checker56304,vec__56297,opts__24428__auto__))
);
return c__22972__auto__;
});})(owner,categories,map56299,validate__837__auto__,ufv__,output_schema56301,input_schema56302,input_checker56303,output_checker56304,vec__56297,opts__24428__auto__))
;
stuttaford.codex.t56356.prototype.om$core$IInitState$ = true;
stuttaford.codex.t56356.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,categories,map56299,validate__837__auto__,ufv__,output_schema56301,input_schema56302,input_checker56303,output_checker56304,vec__56297,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-chan","search-chan",962868037),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0()], null);
});})(owner,categories,map56299,validate__837__auto__,ufv__,output_schema56301,input_schema56302,input_checker56303,output_checker56304,vec__56297,opts__24428__auto__))
;
stuttaford.codex.t56356.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,categories,map56299,validate__837__auto__,ufv__,output_schema56301,input_schema56302,input_checker56303,output_checker56304,vec__56297,opts__24428__auto__){
return (function (_56358){var self__ = this;
var _56358__$1 = this;return self__.meta56357;
});})(owner,categories,map56299,validate__837__auto__,ufv__,output_schema56301,input_schema56302,input_checker56303,output_checker56304,vec__56297,opts__24428__auto__))
;
stuttaford.codex.t56356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,categories,map56299,validate__837__auto__,ufv__,output_schema56301,input_schema56302,input_checker56303,output_checker56304,vec__56297,opts__24428__auto__){
return (function (_56358,meta56357__$1){var self__ = this;
var _56358__$1 = this;return (new stuttaford.codex.t56356(self__.vec__56297,self__.app_view,self__.G__56305,self__.owner,self__.input_checker56303,self__.fnk56300,self__.output_checker56304,self__.input_schema56302,self__.categories,self__.validate__837__auto__,self__.map56299,self__.map56298,self__.data__24427__auto__,self__.owner56187,self__.ufv__,self__.p__56189,self__.opts__24428__auto__,self__.output_schema56301,meta56357__$1));
});})(owner,categories,map56299,validate__837__auto__,ufv__,output_schema56301,input_schema56302,input_checker56303,output_checker56304,vec__56297,opts__24428__auto__))
;
stuttaford.codex.__GT_t56356 = ((function (owner,categories,map56299,validate__837__auto__,ufv__,output_schema56301,input_schema56302,input_checker56303,output_checker56304,vec__56297,opts__24428__auto__){
return (function __GT_t56356(vec__56297__$1,app_view__$1,G__56305__$1,owner__$1,input_checker56303__$1,fnk56300__$1,output_checker56304__$1,input_schema56302__$1,categories__$1,validate__837__auto____$1,map56299__$1,map56298__$1,data__24427__auto____$1,owner56187__$1,ufv____$1,p__56189__$1,opts__24428__auto____$1,output_schema56301__$1,meta56357){return (new stuttaford.codex.t56356(vec__56297__$1,app_view__$1,G__56305__$1,owner__$1,input_checker56303__$1,fnk56300__$1,output_checker56304__$1,input_schema56302__$1,categories__$1,validate__837__auto____$1,map56299__$1,map56298__$1,data__24427__auto____$1,owner56187__$1,ufv____$1,p__56189__$1,opts__24428__auto____$1,output_schema56301__$1,meta56357));
});})(owner,categories,map56299,validate__837__auto__,ufv__,output_schema56301,input_schema56302,input_checker56303,output_checker56304,vec__56297,opts__24428__auto__))
;
}
return (new stuttaford.codex.t56356(vec__56297,app_view,G__56305,owner,input_checker56303,fnk56300,output_checker56304,input_schema56302,categories,validate__837__auto__,map56299,map56298,data__24427__auto__,owner56187,ufv__,p__56189,opts__24428__auto__,output_schema56301,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56418 = (function (){var G__56403 = o__840__auto__;return (output_checker56304.cljs$core$IFn$_invoke$arity$1 ? output_checker56304.cljs$core$IFn$_invoke$arity$1(G__56403) : output_checker56304.call(null,G__56403));
})();if(cljs.core.truth_(temp__4126__auto___56418))
{var error__839__auto___56419 = temp__4126__auto___56418;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk56300","fnk56300",-956921304,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56419], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56301,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56419], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema56301,input_schema56302,input_checker56303,output_checker56304,vec__56297,opts__24428__auto__))
,schema.core.make_fn_schema(output_schema56301,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56302], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24428__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner56187,new cljs.core.Keyword(null,"data","data",-232669377),data__24427__auto__], null));
};
var app_view = function (data__24427__auto__,owner56187,var_args){
var p__56189 = null;if (arguments.length > 2) {
  p__56189 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_view__delegate.call(this,data__24427__auto__,owner56187,p__56189);};
app_view.cljs$lang$maxFixedArity = 2;
app_view.cljs$lang$applyTo = (function (arglist__56420){
var data__24427__auto__ = cljs.core.first(arglist__56420);
arglist__56420 = cljs.core.next(arglist__56420);
var owner56187 = cljs.core.first(arglist__56420);
var p__56189 = cljs.core.rest(arglist__56420);
return app_view__delegate(data__24427__auto__,owner56187,p__56189);
});
app_view.cljs$core$IFn$_invoke$arity$variadic = app_view__delegate;
return app_view;
})()
;
stuttaford.codex.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__24396__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.app_view,cursor__24396__auto__);
});
var __GT_app_view__2 = (function (cursor__24396__auto__,m56188){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.app_view,cursor__24396__auto__,m56188);
});
__GT_app_view = function(cursor__24396__auto__,m56188){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__24396__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__24396__auto__,m56188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_app_view.cljs$core$IFn$_invoke$arity$1 = __GT_app_view__1;
__GT_app_view.cljs$core$IFn$_invoke$arity$2 = __GT_app_view__2;
return __GT_app_view;
})()
;
stuttaford.codex.init = (function init(app_id,state_id,debug_QMARK_){return stuttaford.om.common.start.cljs$core$IFn$_invoke$arity$5(app_id,state_id,stuttaford.codex.app_view,cljs.core.PersistentArrayMap.EMPTY,debug_QMARK_);
});
goog.exportSymbol('stuttaford.codex.init', stuttaford.codex.init);
//# sourceMappingURL=codex.js.map