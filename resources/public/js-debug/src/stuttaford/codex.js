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
var tag_item__delegate = function (data__24175__auto__,owner37764,p__37766){var vec__37794 = p__37766;var opts__24176__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37794,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema37798 = schema.core.Any;var input_schema37799 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map37795","map37795",-1722845708,null))], null);var input_checker37800 = schema.core.checker(input_schema37799);var output_checker37801 = schema.core.checker(output_schema37798);return schema.core.schematize_fn(((function (ufv__,output_schema37798,input_schema37799,input_checker37800,output_checker37801,vec__37794,opts__24176__auto__){
return (function fnk37797(G__37802){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___37821 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37802], null);var temp__4126__auto___37822 = (function (){var G__37812 = args__838__auto___37821;return (input_checker37800.cljs$core$IFn$_invoke$arity$1 ? input_checker37800.cljs$core$IFn$_invoke$arity$1(G__37812) : input_checker37800.call(null,G__37812));
})();if(cljs.core.truth_(temp__4126__auto___37822))
{var error__839__auto___37823 = temp__4126__auto___37822;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk37797","fnk37797",-749776885,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___37823], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37799,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___37821,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___37823], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map37795 = G__37802;while(true){
if(cljs.core.map_QMARK_(map37795))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map37795], 0))));
}
var map37796 = plumbing.fnk.schema.safe_get(map37795,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var name = plumbing.fnk.schema.safe_get(map37796,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map37795,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t37813 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t37813 = (function (G__37802,owner,output_checker37801,fnk37797,owner37764,input_schema37799,name,vec__37794,data__24175__auto__,map37795,output_schema37798,opts__24176__auto__,validate__837__auto__,p__37766,ufv__,tag_item,map37796,input_checker37800,meta37814){
this.G__37802 = G__37802;
this.owner = owner;
this.output_checker37801 = output_checker37801;
this.fnk37797 = fnk37797;
this.owner37764 = owner37764;
this.input_schema37799 = input_schema37799;
this.name = name;
this.vec__37794 = vec__37794;
this.data__24175__auto__ = data__24175__auto__;
this.map37795 = map37795;
this.output_schema37798 = output_schema37798;
this.opts__24176__auto__ = opts__24176__auto__;
this.validate__837__auto__ = validate__837__auto__;
this.p__37766 = p__37766;
this.ufv__ = ufv__;
this.tag_item = tag_item;
this.map37796 = map37796;
this.input_checker37800 = input_checker37800;
this.meta37814 = meta37814;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t37813.cljs$lang$type = true;
stuttaford.codex.t37813.cljs$lang$ctorStr = "stuttaford.codex/t37813";
stuttaford.codex.t37813.cljs$lang$ctorPrWriter = ((function (owner,name,map37796,validate__837__auto__,ufv__,output_schema37798,input_schema37799,input_checker37800,output_checker37801,vec__37794,opts__24176__auto__){
return (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"stuttaford.codex/t37813");
});})(owner,name,map37796,validate__837__auto__,ufv__,output_schema37798,input_schema37799,input_checker37800,output_checker37801,vec__37794,opts__24176__auto__))
;
stuttaford.codex.t37813.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t37813.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,name,map37796,validate__837__auto__,ufv__,output_schema37798,input_schema37799,input_checker37800,output_checker37801,vec__37794,opts__24176__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-item";
});})(owner,name,map37796,validate__837__auto__,ufv__,output_schema37798,input_schema37799,input_checker37800,output_checker37801,vec__37794,opts__24176__auto__))
;
stuttaford.codex.t37813.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t37813.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,name,map37796,validate__837__auto__,ufv__,output_schema37798,input_schema37799,input_checker37800,output_checker37801,vec__37794,opts__24176__auto__){
return (function (_,p__37816){var self__ = this;
var map__37817 = p__37816;var map__37817__$1 = ((cljs.core.seq_QMARK_(map__37817))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37817):map__37817);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37817__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var ___$1 = this;var class$ = (cljs.core.truth_((function (){var and__19255__auto__ = cljs.core.seq(search_term);if(and__19255__auto__)
{return cljs.core.re_find(stuttaford.codex.regex(search_term),self__.name);
} else
{return and__19255__auto__;
}
})())?"tag active":"tag");var G__37818 = {"className": class$, "onClick": ((function (class$,___$1,map__37817,map__37817__$1,search_term,owner,name,map37796,validate__837__auto__,ufv__,output_schema37798,input_schema37799,input_checker37800,output_checker37801,vec__37794,opts__24176__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"search-chan","search-chan",962868037)),self__.name);
});})(class$,___$1,map__37817,map__37817__$1,search_term,owner,name,map37796,validate__837__auto__,ufv__,output_schema37798,input_schema37799,input_checker37800,output_checker37801,vec__37794,opts__24176__auto__))
};var G__37819 = sablono.interpreter.interpret(self__.name);return React.DOM.a(G__37818,G__37819);
});})(owner,name,map37796,validate__837__auto__,ufv__,output_schema37798,input_schema37799,input_checker37800,output_checker37801,vec__37794,opts__24176__auto__))
;
stuttaford.codex.t37813.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,name,map37796,validate__837__auto__,ufv__,output_schema37798,input_schema37799,input_checker37800,output_checker37801,vec__37794,opts__24176__auto__){
return (function (_37815){var self__ = this;
var _37815__$1 = this;return self__.meta37814;
});})(owner,name,map37796,validate__837__auto__,ufv__,output_schema37798,input_schema37799,input_checker37800,output_checker37801,vec__37794,opts__24176__auto__))
;
stuttaford.codex.t37813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,name,map37796,validate__837__auto__,ufv__,output_schema37798,input_schema37799,input_checker37800,output_checker37801,vec__37794,opts__24176__auto__){
return (function (_37815,meta37814__$1){var self__ = this;
var _37815__$1 = this;return (new stuttaford.codex.t37813(self__.G__37802,self__.owner,self__.output_checker37801,self__.fnk37797,self__.owner37764,self__.input_schema37799,self__.name,self__.vec__37794,self__.data__24175__auto__,self__.map37795,self__.output_schema37798,self__.opts__24176__auto__,self__.validate__837__auto__,self__.p__37766,self__.ufv__,self__.tag_item,self__.map37796,self__.input_checker37800,meta37814__$1));
});})(owner,name,map37796,validate__837__auto__,ufv__,output_schema37798,input_schema37799,input_checker37800,output_checker37801,vec__37794,opts__24176__auto__))
;
stuttaford.codex.__GT_t37813 = ((function (owner,name,map37796,validate__837__auto__,ufv__,output_schema37798,input_schema37799,input_checker37800,output_checker37801,vec__37794,opts__24176__auto__){
return (function __GT_t37813(G__37802__$1,owner__$1,output_checker37801__$1,fnk37797__$1,owner37764__$1,input_schema37799__$1,name__$1,vec__37794__$1,data__24175__auto____$1,map37795__$1,output_schema37798__$1,opts__24176__auto____$1,validate__837__auto____$1,p__37766__$1,ufv____$1,tag_item__$1,map37796__$1,input_checker37800__$1,meta37814){return (new stuttaford.codex.t37813(G__37802__$1,owner__$1,output_checker37801__$1,fnk37797__$1,owner37764__$1,input_schema37799__$1,name__$1,vec__37794__$1,data__24175__auto____$1,map37795__$1,output_schema37798__$1,opts__24176__auto____$1,validate__837__auto____$1,p__37766__$1,ufv____$1,tag_item__$1,map37796__$1,input_checker37800__$1,meta37814));
});})(owner,name,map37796,validate__837__auto__,ufv__,output_schema37798,input_schema37799,input_checker37800,output_checker37801,vec__37794,opts__24176__auto__))
;
}
return (new stuttaford.codex.t37813(G__37802,owner,output_checker37801,fnk37797,owner37764,input_schema37799,name,vec__37794,data__24175__auto__,map37795,output_schema37798,opts__24176__auto__,validate__837__auto__,p__37766,ufv__,tag_item,map37796,input_checker37800,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___37824 = (function (){var G__37820 = o__840__auto__;return (output_checker37801.cljs$core$IFn$_invoke$arity$1 ? output_checker37801.cljs$core$IFn$_invoke$arity$1(G__37820) : output_checker37801.call(null,G__37820));
})();if(cljs.core.truth_(temp__4126__auto___37824))
{var error__839__auto___37825 = temp__4126__auto___37824;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk37797","fnk37797",-749776885,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___37825], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37798,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___37825], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema37798,input_schema37799,input_checker37800,output_checker37801,vec__37794,opts__24176__auto__))
,schema.core.make_fn_schema(output_schema37798,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37799], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24176__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner37764,new cljs.core.Keyword(null,"data","data",-232669377),data__24175__auto__], null));
};
var tag_item = function (data__24175__auto__,owner37764,var_args){
var p__37766 = null;if (arguments.length > 2) {
  p__37766 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_item__delegate.call(this,data__24175__auto__,owner37764,p__37766);};
tag_item.cljs$lang$maxFixedArity = 2;
tag_item.cljs$lang$applyTo = (function (arglist__37826){
var data__24175__auto__ = cljs.core.first(arglist__37826);
arglist__37826 = cljs.core.next(arglist__37826);
var owner37764 = cljs.core.first(arglist__37826);
var p__37766 = cljs.core.rest(arglist__37826);
return tag_item__delegate(data__24175__auto__,owner37764,p__37766);
});
tag_item.cljs$core$IFn$_invoke$arity$variadic = tag_item__delegate;
return tag_item;
})()
;
stuttaford.codex.__GT_tag_item = (function() {
var __GT_tag_item = null;
var __GT_tag_item__1 = (function (cursor__24144__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.tag_item,cursor__24144__auto__);
});
var __GT_tag_item__2 = (function (cursor__24144__auto__,m37765){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.tag_item,cursor__24144__auto__,m37765);
});
__GT_tag_item = function(cursor__24144__auto__,m37765){
switch(arguments.length){
case 1:
return __GT_tag_item__1.call(this,cursor__24144__auto__);
case 2:
return __GT_tag_item__2.call(this,cursor__24144__auto__,m37765);
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
var link_item__delegate = function (data__24175__auto__,owner37827,p__37829){var vec__37865 = p__37829;var opts__24176__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37865,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema37869 = schema.core.Any;var input_schema37870 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"tags","tags",1771418977)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"image","image",-58725096)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"description","description",-1428560544)),schema.core.Any,new cljs.core.Keyword(null,"uri","uri",-774711847),schema.core.Any,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map37866","map37866",-1965894784,null))], null);var input_checker37871 = schema.core.checker(input_schema37870);var output_checker37872 = schema.core.checker(output_schema37869);return schema.core.schematize_fn(((function (ufv__,output_schema37869,input_schema37870,input_checker37871,output_checker37872,vec__37865,opts__24176__auto__){
return (function fnk37868(G__37873){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___37900 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37873], null);var temp__4126__auto___37901 = (function (){var G__37887 = args__838__auto___37900;return (input_checker37871.cljs$core$IFn$_invoke$arity$1 ? input_checker37871.cljs$core$IFn$_invoke$arity$1(G__37887) : input_checker37871.call(null,G__37887));
})();if(cljs.core.truth_(temp__4126__auto___37901))
{var error__839__auto___37902 = temp__4126__auto___37901;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk37868","fnk37868",-1759253949,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___37902], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37870,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___37900,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___37902], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map37866 = G__37873;while(true){
if(cljs.core.map_QMARK_(map37866))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map37866], 0))));
}
var map37867 = plumbing.fnk.schema.safe_get(map37866,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var name = plumbing.fnk.schema.safe_get(map37867,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var uri = plumbing.fnk.schema.safe_get(map37867,new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var description = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map37867,new cljs.core.Keyword(null,"description","description",-1428560544),null);var image = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map37867,new cljs.core.Keyword(null,"image","image",-58725096),null);var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map37867,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map37866,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t37888 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t37888 = (function (uri,map37866,input_checker37871,vec__37865,p__37829,fnk37868,owner,owner37827,description,tags,input_schema37870,name,map37867,data__24175__auto__,output_checker37872,output_schema37869,opts__24176__auto__,validate__837__auto__,G__37873,ufv__,link_item,image,meta37889){
this.uri = uri;
this.map37866 = map37866;
this.input_checker37871 = input_checker37871;
this.vec__37865 = vec__37865;
this.p__37829 = p__37829;
this.fnk37868 = fnk37868;
this.owner = owner;
this.owner37827 = owner37827;
this.description = description;
this.tags = tags;
this.input_schema37870 = input_schema37870;
this.name = name;
this.map37867 = map37867;
this.data__24175__auto__ = data__24175__auto__;
this.output_checker37872 = output_checker37872;
this.output_schema37869 = output_schema37869;
this.opts__24176__auto__ = opts__24176__auto__;
this.validate__837__auto__ = validate__837__auto__;
this.G__37873 = G__37873;
this.ufv__ = ufv__;
this.link_item = link_item;
this.image = image;
this.meta37889 = meta37889;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t37888.cljs$lang$type = true;
stuttaford.codex.t37888.cljs$lang$ctorStr = "stuttaford.codex/t37888";
stuttaford.codex.t37888.cljs$lang$ctorPrWriter = ((function (owner,tags,image,description,uri,name,map37867,validate__837__auto__,ufv__,output_schema37869,input_schema37870,input_checker37871,output_checker37872,vec__37865,opts__24176__auto__){
return (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"stuttaford.codex/t37888");
});})(owner,tags,image,description,uri,name,map37867,validate__837__auto__,ufv__,output_schema37869,input_schema37870,input_checker37871,output_checker37872,vec__37865,opts__24176__auto__))
;
stuttaford.codex.t37888.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t37888.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,tags,image,description,uri,name,map37867,validate__837__auto__,ufv__,output_schema37869,input_schema37870,input_checker37871,output_checker37872,vec__37865,opts__24176__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "link-item";
});})(owner,tags,image,description,uri,name,map37867,validate__837__auto__,ufv__,output_schema37869,input_schema37870,input_checker37871,output_checker37872,vec__37865,opts__24176__auto__))
;
stuttaford.codex.t37888.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t37888.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,tags,image,description,uri,name,map37867,validate__837__auto__,ufv__,output_schema37869,input_schema37870,input_checker37871,output_checker37872,vec__37865,opts__24176__auto__){
return (function (_,p__37891){var self__ = this;
var map__37892 = p__37891;var map__37892__$1 = ((cljs.core.seq_QMARK_(map__37892))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37892):map__37892);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37892__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var ___$1 = this;var G__37893 = {"className": "link"};var G__37894 = (function (){var G__37896 = {"href": self__.uri};var G__37897 = sablono.interpreter.interpret(self__.name);return React.DOM.a(G__37896,G__37897);
})();var G__37895 = sablono.interpreter.interpret(om.core.build_all.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.tag_item,(function (){var G__37898 = self__.tags;return (stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1 ? stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1(G__37898) : stuttaford.codex.name_sort.call(null,G__37898));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177)], null)));return React.DOM.li(G__37893,G__37894,G__37895);
});})(owner,tags,image,description,uri,name,map37867,validate__837__auto__,ufv__,output_schema37869,input_schema37870,input_checker37871,output_checker37872,vec__37865,opts__24176__auto__))
;
stuttaford.codex.t37888.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,tags,image,description,uri,name,map37867,validate__837__auto__,ufv__,output_schema37869,input_schema37870,input_checker37871,output_checker37872,vec__37865,opts__24176__auto__){
return (function (_37890){var self__ = this;
var _37890__$1 = this;return self__.meta37889;
});})(owner,tags,image,description,uri,name,map37867,validate__837__auto__,ufv__,output_schema37869,input_schema37870,input_checker37871,output_checker37872,vec__37865,opts__24176__auto__))
;
stuttaford.codex.t37888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,tags,image,description,uri,name,map37867,validate__837__auto__,ufv__,output_schema37869,input_schema37870,input_checker37871,output_checker37872,vec__37865,opts__24176__auto__){
return (function (_37890,meta37889__$1){var self__ = this;
var _37890__$1 = this;return (new stuttaford.codex.t37888(self__.uri,self__.map37866,self__.input_checker37871,self__.vec__37865,self__.p__37829,self__.fnk37868,self__.owner,self__.owner37827,self__.description,self__.tags,self__.input_schema37870,self__.name,self__.map37867,self__.data__24175__auto__,self__.output_checker37872,self__.output_schema37869,self__.opts__24176__auto__,self__.validate__837__auto__,self__.G__37873,self__.ufv__,self__.link_item,self__.image,meta37889__$1));
});})(owner,tags,image,description,uri,name,map37867,validate__837__auto__,ufv__,output_schema37869,input_schema37870,input_checker37871,output_checker37872,vec__37865,opts__24176__auto__))
;
stuttaford.codex.__GT_t37888 = ((function (owner,tags,image,description,uri,name,map37867,validate__837__auto__,ufv__,output_schema37869,input_schema37870,input_checker37871,output_checker37872,vec__37865,opts__24176__auto__){
return (function __GT_t37888(uri__$1,map37866__$1,input_checker37871__$1,vec__37865__$1,p__37829__$1,fnk37868__$1,owner__$1,owner37827__$1,description__$1,tags__$1,input_schema37870__$1,name__$1,map37867__$1,data__24175__auto____$1,output_checker37872__$1,output_schema37869__$1,opts__24176__auto____$1,validate__837__auto____$1,G__37873__$1,ufv____$1,link_item__$1,image__$1,meta37889){return (new stuttaford.codex.t37888(uri__$1,map37866__$1,input_checker37871__$1,vec__37865__$1,p__37829__$1,fnk37868__$1,owner__$1,owner37827__$1,description__$1,tags__$1,input_schema37870__$1,name__$1,map37867__$1,data__24175__auto____$1,output_checker37872__$1,output_schema37869__$1,opts__24176__auto____$1,validate__837__auto____$1,G__37873__$1,ufv____$1,link_item__$1,image__$1,meta37889));
});})(owner,tags,image,description,uri,name,map37867,validate__837__auto__,ufv__,output_schema37869,input_schema37870,input_checker37871,output_checker37872,vec__37865,opts__24176__auto__))
;
}
return (new stuttaford.codex.t37888(uri,map37866,input_checker37871,vec__37865,p__37829,fnk37868,owner,owner37827,description,tags,input_schema37870,name,map37867,data__24175__auto__,output_checker37872,output_schema37869,opts__24176__auto__,validate__837__auto__,G__37873,ufv__,link_item,image,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___37903 = (function (){var G__37899 = o__840__auto__;return (output_checker37872.cljs$core$IFn$_invoke$arity$1 ? output_checker37872.cljs$core$IFn$_invoke$arity$1(G__37899) : output_checker37872.call(null,G__37899));
})();if(cljs.core.truth_(temp__4126__auto___37903))
{var error__839__auto___37904 = temp__4126__auto___37903;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk37868","fnk37868",-1759253949,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___37904], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37869,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___37904], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema37869,input_schema37870,input_checker37871,output_checker37872,vec__37865,opts__24176__auto__))
,schema.core.make_fn_schema(output_schema37869,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37870], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24176__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner37827,new cljs.core.Keyword(null,"data","data",-232669377),data__24175__auto__], null));
};
var link_item = function (data__24175__auto__,owner37827,var_args){
var p__37829 = null;if (arguments.length > 2) {
  p__37829 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return link_item__delegate.call(this,data__24175__auto__,owner37827,p__37829);};
link_item.cljs$lang$maxFixedArity = 2;
link_item.cljs$lang$applyTo = (function (arglist__37905){
var data__24175__auto__ = cljs.core.first(arglist__37905);
arglist__37905 = cljs.core.next(arglist__37905);
var owner37827 = cljs.core.first(arglist__37905);
var p__37829 = cljs.core.rest(arglist__37905);
return link_item__delegate(data__24175__auto__,owner37827,p__37829);
});
link_item.cljs$core$IFn$_invoke$arity$variadic = link_item__delegate;
return link_item;
})()
;
stuttaford.codex.__GT_link_item = (function() {
var __GT_link_item = null;
var __GT_link_item__1 = (function (cursor__24144__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.link_item,cursor__24144__auto__);
});
var __GT_link_item__2 = (function (cursor__24144__auto__,m37828){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.link_item,cursor__24144__auto__,m37828);
});
__GT_link_item = function(cursor__24144__auto__,m37828){
switch(arguments.length){
case 1:
return __GT_link_item__1.call(this,cursor__24144__auto__);
case 2:
return __GT_link_item__2.call(this,cursor__24144__auto__,m37828);
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
var category_item__delegate = function (data__24175__auto__,owner37906,p__37908){var vec__37943 = p__37908;var opts__24176__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37943,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema37946 = schema.core.Any;var input_schema37947 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"links","links",-654507394),schema.core.Any,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map37944","map37944",1915730465,null))], null);var input_checker37948 = schema.core.checker(input_schema37947);var output_checker37949 = schema.core.checker(output_schema37946);return schema.core.schematize_fn(((function (ufv__,output_schema37946,input_schema37947,input_checker37948,output_checker37949,vec__37943,opts__24176__auto__){
return (function fnk37945(G__37950){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___37977 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37950], null);var temp__4126__auto___37978 = (function (){var G__37964 = args__838__auto___37977;return (input_checker37948.cljs$core$IFn$_invoke$arity$1 ? input_checker37948.cljs$core$IFn$_invoke$arity$1(G__37964) : input_checker37948.call(null,G__37964));
})();if(cljs.core.truth_(temp__4126__auto___37978))
{var error__839__auto___37979 = temp__4126__auto___37978;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk37945","fnk37945",-1022969024,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___37979], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37947,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___37977,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___37979], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map37944 = G__37950;while(true){
if(cljs.core.map_QMARK_(map37944))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map37944], 0))));
}
var data = plumbing.fnk.schema.safe_get(map37944,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var name = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var links = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map37944,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t37965 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t37965 = (function (fnk37945,G__37950,map37944,output_checker37949,owner,links,p__37908,data,name,input_schema37947,owner37906,data__24175__auto__,vec__37943,category_item,opts__24176__auto__,validate__837__auto__,output_schema37946,ufv__,input_checker37948,meta37966){
this.fnk37945 = fnk37945;
this.G__37950 = G__37950;
this.map37944 = map37944;
this.output_checker37949 = output_checker37949;
this.owner = owner;
this.links = links;
this.p__37908 = p__37908;
this.data = data;
this.name = name;
this.input_schema37947 = input_schema37947;
this.owner37906 = owner37906;
this.data__24175__auto__ = data__24175__auto__;
this.vec__37943 = vec__37943;
this.category_item = category_item;
this.opts__24176__auto__ = opts__24176__auto__;
this.validate__837__auto__ = validate__837__auto__;
this.output_schema37946 = output_schema37946;
this.ufv__ = ufv__;
this.input_checker37948 = input_checker37948;
this.meta37966 = meta37966;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t37965.cljs$lang$type = true;
stuttaford.codex.t37965.cljs$lang$ctorStr = "stuttaford.codex/t37965";
stuttaford.codex.t37965.cljs$lang$ctorPrWriter = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema37946,input_schema37947,input_checker37948,output_checker37949,vec__37943,opts__24176__auto__){
return (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"stuttaford.codex/t37965");
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema37946,input_schema37947,input_checker37948,output_checker37949,vec__37943,opts__24176__auto__))
;
stuttaford.codex.t37965.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t37965.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema37946,input_schema37947,input_checker37948,output_checker37949,vec__37943,opts__24176__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "category-item";
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema37946,input_schema37947,input_checker37948,output_checker37949,vec__37943,opts__24176__auto__))
;
stuttaford.codex.t37965.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t37965.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema37946,input_schema37947,input_checker37948,output_checker37949,vec__37943,opts__24176__auto__){
return (function (_,p__37968){var self__ = this;
var map__37969 = p__37968;var map__37969__$1 = ((cljs.core.seq_QMARK_(map__37969))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37969):map__37969);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37969__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var ___$1 = this;var temp__4126__auto__ = cljs.core.seq((function (){var G__37970 = stuttaford.codex.search_items(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"tags-string","tags-string",-736299316)], null),search_term,self__.links);return (stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1 ? stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1(G__37970) : stuttaford.codex.name_sort.call(null,G__37970));
})());if(temp__4126__auto__)
{var links__$2 = temp__4126__auto__;var G__37973 = null;var G__37974 = (function (){var attrs37971 = self__.name;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs37971))?sablono.interpreter.attributes(attrs37971):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37971))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37971)], null))));
})();var G__37975 = (function (){var attrs37972 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.link_item,links__$2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177)], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.ul,((cljs.core.map_QMARK_(attrs37972))?sablono.interpreter.attributes(attrs37972):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37972))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37972)], null))));
})();return React.DOM.div(G__37973,G__37974,G__37975);
} else
{return null;
}
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema37946,input_schema37947,input_checker37948,output_checker37949,vec__37943,opts__24176__auto__))
;
stuttaford.codex.t37965.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema37946,input_schema37947,input_checker37948,output_checker37949,vec__37943,opts__24176__auto__){
return (function (_37967){var self__ = this;
var _37967__$1 = this;return self__.meta37966;
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema37946,input_schema37947,input_checker37948,output_checker37949,vec__37943,opts__24176__auto__))
;
stuttaford.codex.t37965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema37946,input_schema37947,input_checker37948,output_checker37949,vec__37943,opts__24176__auto__){
return (function (_37967,meta37966__$1){var self__ = this;
var _37967__$1 = this;return (new stuttaford.codex.t37965(self__.fnk37945,self__.G__37950,self__.map37944,self__.output_checker37949,self__.owner,self__.links,self__.p__37908,self__.data,self__.name,self__.input_schema37947,self__.owner37906,self__.data__24175__auto__,self__.vec__37943,self__.category_item,self__.opts__24176__auto__,self__.validate__837__auto__,self__.output_schema37946,self__.ufv__,self__.input_checker37948,meta37966__$1));
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema37946,input_schema37947,input_checker37948,output_checker37949,vec__37943,opts__24176__auto__))
;
stuttaford.codex.__GT_t37965 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema37946,input_schema37947,input_checker37948,output_checker37949,vec__37943,opts__24176__auto__){
return (function __GT_t37965(fnk37945__$1,G__37950__$1,map37944__$1,output_checker37949__$1,owner__$1,links__$1,p__37908__$1,data__$1,name__$1,input_schema37947__$1,owner37906__$1,data__24175__auto____$1,vec__37943__$1,category_item__$1,opts__24176__auto____$1,validate__837__auto____$1,output_schema37946__$1,ufv____$1,input_checker37948__$1,meta37966){return (new stuttaford.codex.t37965(fnk37945__$1,G__37950__$1,map37944__$1,output_checker37949__$1,owner__$1,links__$1,p__37908__$1,data__$1,name__$1,input_schema37947__$1,owner37906__$1,data__24175__auto____$1,vec__37943__$1,category_item__$1,opts__24176__auto____$1,validate__837__auto____$1,output_schema37946__$1,ufv____$1,input_checker37948__$1,meta37966));
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema37946,input_schema37947,input_checker37948,output_checker37949,vec__37943,opts__24176__auto__))
;
}
return (new stuttaford.codex.t37965(fnk37945,G__37950,map37944,output_checker37949,owner,links,p__37908,data,name,input_schema37947,owner37906,data__24175__auto__,vec__37943,category_item,opts__24176__auto__,validate__837__auto__,output_schema37946,ufv__,input_checker37948,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___37980 = (function (){var G__37976 = o__840__auto__;return (output_checker37949.cljs$core$IFn$_invoke$arity$1 ? output_checker37949.cljs$core$IFn$_invoke$arity$1(G__37976) : output_checker37949.call(null,G__37976));
})();if(cljs.core.truth_(temp__4126__auto___37980))
{var error__839__auto___37981 = temp__4126__auto___37980;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk37945","fnk37945",-1022969024,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___37981], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37946,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___37981], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema37946,input_schema37947,input_checker37948,output_checker37949,vec__37943,opts__24176__auto__))
,schema.core.make_fn_schema(output_schema37946,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37947], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24176__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner37906,new cljs.core.Keyword(null,"data","data",-232669377),data__24175__auto__], null));
};
var category_item = function (data__24175__auto__,owner37906,var_args){
var p__37908 = null;if (arguments.length > 2) {
  p__37908 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return category_item__delegate.call(this,data__24175__auto__,owner37906,p__37908);};
category_item.cljs$lang$maxFixedArity = 2;
category_item.cljs$lang$applyTo = (function (arglist__37982){
var data__24175__auto__ = cljs.core.first(arglist__37982);
arglist__37982 = cljs.core.next(arglist__37982);
var owner37906 = cljs.core.first(arglist__37982);
var p__37908 = cljs.core.rest(arglist__37982);
return category_item__delegate(data__24175__auto__,owner37906,p__37908);
});
category_item.cljs$core$IFn$_invoke$arity$variadic = category_item__delegate;
return category_item;
})()
;
stuttaford.codex.__GT_category_item = (function() {
var __GT_category_item = null;
var __GT_category_item__1 = (function (cursor__24144__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.category_item,cursor__24144__auto__);
});
var __GT_category_item__2 = (function (cursor__24144__auto__,m37907){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.category_item,cursor__24144__auto__,m37907);
});
__GT_category_item = function(cursor__24144__auto__,m37907){
switch(arguments.length){
case 1:
return __GT_category_item__1.call(this,cursor__24144__auto__);
case 2:
return __GT_category_item__2.call(this,cursor__24144__auto__,m37907);
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
var app_view__delegate = function (data__24175__auto__,owner37984,p__37986){var vec__38094 = p__37986;var opts__24176__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38094,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema38098 = schema.core.Any;var input_schema38099 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"categories","categories",178386610),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map38095","map38095",977088632,null))], null);var input_checker38100 = schema.core.checker(input_schema38099);var output_checker38101 = schema.core.checker(output_schema38098);return schema.core.schematize_fn(((function (ufv__,output_schema38098,input_schema38099,input_checker38100,output_checker38101,vec__38094,opts__24176__auto__){
return (function fnk38097(G__38102){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38201 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38102], null);var temp__4126__auto___38202 = (function (){var G__38152 = args__838__auto___38201;return (input_checker38100.cljs$core$IFn$_invoke$arity$1 ? input_checker38100.cljs$core$IFn$_invoke$arity$1(G__38152) : input_checker38100.call(null,G__38152));
})();if(cljs.core.truth_(temp__4126__auto___38202))
{var error__839__auto___38203 = temp__4126__auto___38202;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk38097","fnk38097",271783194,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38203], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38099,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38201,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38203], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map38095 = G__38102;while(true){
if(cljs.core.map_QMARK_(map38095))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map38095], 0))));
}
var map38096 = plumbing.fnk.schema.safe_get(map38095,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var categories = plumbing.fnk.schema.safe_get(map38096,new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map38095,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t38153 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t38153 = (function (app_view,owner,map38096,G__38102,output_schema38098,input_checker38100,owner37984,output_checker38101,data__24175__auto__,map38095,categories,vec__38094,fnk38097,opts__24176__auto__,validate__837__auto__,input_schema38099,p__37986,ufv__,meta38154){
this.app_view = app_view;
this.owner = owner;
this.map38096 = map38096;
this.G__38102 = G__38102;
this.output_schema38098 = output_schema38098;
this.input_checker38100 = input_checker38100;
this.owner37984 = owner37984;
this.output_checker38101 = output_checker38101;
this.data__24175__auto__ = data__24175__auto__;
this.map38095 = map38095;
this.categories = categories;
this.vec__38094 = vec__38094;
this.fnk38097 = fnk38097;
this.opts__24176__auto__ = opts__24176__auto__;
this.validate__837__auto__ = validate__837__auto__;
this.input_schema38099 = input_schema38099;
this.p__37986 = p__37986;
this.ufv__ = ufv__;
this.meta38154 = meta38154;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t38153.cljs$lang$type = true;
stuttaford.codex.t38153.cljs$lang$ctorStr = "stuttaford.codex/t38153";
stuttaford.codex.t38153.cljs$lang$ctorPrWriter = ((function (owner,categories,map38096,validate__837__auto__,ufv__,output_schema38098,input_schema38099,input_checker38100,output_checker38101,vec__38094,opts__24176__auto__){
return (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"stuttaford.codex/t38153");
});})(owner,categories,map38096,validate__837__auto__,ufv__,output_schema38098,input_schema38099,input_checker38100,output_checker38101,vec__38094,opts__24176__auto__))
;
stuttaford.codex.t38153.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t38153.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,categories,map38096,validate__837__auto__,ufv__,output_schema38098,input_schema38099,input_checker38100,output_checker38101,vec__38094,opts__24176__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "app-view";
});})(owner,categories,map38096,validate__837__auto__,ufv__,output_schema38098,input_schema38099,input_checker38100,output_checker38101,vec__38094,opts__24176__auto__))
;
stuttaford.codex.t38153.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t38153.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,categories,map38096,validate__837__auto__,ufv__,output_schema38098,input_schema38099,input_checker38100,output_checker38101,vec__38094,opts__24176__auto__){
return (function (_,p__38156){var self__ = this;
var map__38157 = p__38156;var map__38157__$1 = ((cljs.core.seq_QMARK_(map__38157))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38157):map__38157);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38157__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var search_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38157__$1,new cljs.core.Keyword(null,"search-chan","search-chan",962868037));var ___$1 = this;var G__38158 = null;var G__38159 = (function (){var G__38161 = {"id": "search", "type": "text", "placeholder": "Search for link", "autoFocus": "autofocus", "value": search_term, "onChange": ((function (G__38158,___$1,map__38157,map__38157__$1,search_term,search_chan,owner,categories,map38096,validate__837__auto__,ufv__,output_schema38098,input_schema38099,input_checker38100,output_checker38101,vec__38094,opts__24176__auto__){
return (function (p1__37983_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(search_chan,p1__37983_SHARP_.target.value);
});})(G__38158,___$1,map__38157,map__38157__$1,search_term,search_chan,owner,categories,map38096,validate__837__auto__,ufv__,output_schema38098,input_schema38099,input_checker38100,output_checker38101,vec__38094,opts__24176__auto__))
};return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__38161) : sablono.interpreter.input.call(null,G__38161));
})();var G__38160 = sablono.interpreter.interpret(om.core.build_all.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.category_item,(function (){var G__38162 = self__.categories;return (stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1 ? stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1(G__38162) : stuttaford.codex.name_sort.call(null,G__38162));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177)], null)));return React.DOM.div(G__38158,G__38159,G__38160);
});})(owner,categories,map38096,validate__837__auto__,ufv__,output_schema38098,input_schema38099,input_checker38100,output_checker38101,vec__38094,opts__24176__auto__))
;
stuttaford.codex.t38153.prototype.om$core$IWillMount$ = true;
stuttaford.codex.t38153.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (owner,categories,map38096,validate__837__auto__,ufv__,output_schema38098,input_schema38099,input_checker38100,output_checker38101,vec__38094,opts__24176__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var search_chan = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"search-chan","search-chan",962868037));var c__22720__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22720__auto__,search_chan,___$1,owner,categories,map38096,validate__837__auto__,ufv__,output_schema38098,input_schema38099,input_checker38100,output_checker38101,vec__38094,opts__24176__auto__){
return (function (){var f__22721__auto__ = (function (){var switch__22705__auto__ = ((function (c__22720__auto__,search_chan,___$1,owner,categories,map38096,validate__837__auto__,ufv__,output_schema38098,input_schema38099,input_checker38100,output_checker38101,vec__38094,opts__24176__auto__){
return (function (state_38179){var state_val_38180 = (state_38179[(1)]);if((state_val_38180 === (7)))
{var inst_38166 = (state_38179[(7)]);var inst_38166__$1 = (state_38179[(2)]);var state_38179__$1 = (function (){var statearr_38181 = state_38179;(statearr_38181[(7)] = inst_38166__$1);
return statearr_38181;
})();if(cljs.core.truth_(inst_38166__$1))
{var statearr_38182_38204 = state_38179__$1;(statearr_38182_38204[(1)] = (8));
} else
{var statearr_38183_38205 = state_38179__$1;(statearr_38183_38205[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38180 === (1)))
{var state_38179__$1 = state_38179;var statearr_38184_38206 = state_38179__$1;(statearr_38184_38206[(2)] = null);
(statearr_38184_38206[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38180 === (4)))
{var state_38179__$1 = state_38179;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38179__$1,(7),search_chan);
} else
{if((state_val_38180 === (6)))
{var inst_38175 = (state_38179[(2)]);var state_38179__$1 = state_38179;var statearr_38185_38207 = state_38179__$1;(statearr_38185_38207[(2)] = inst_38175);
(statearr_38185_38207[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38180 === (3)))
{var inst_38177 = (state_38179[(2)]);var state_38179__$1 = state_38179;return cljs.core.async.impl.ioc_helpers.return_chan(state_38179__$1,inst_38177);
} else
{if((state_val_38180 === (2)))
{var state_38179__$1 = state_38179;var statearr_38186_38208 = state_38179__$1;(statearr_38186_38208[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38180 === (9)))
{var state_38179__$1 = state_38179;var statearr_38188_38209 = state_38179__$1;(statearr_38188_38209[(2)] = null);
(statearr_38188_38209[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38180 === (5)))
{var state_38179__$1 = state_38179;var statearr_38189_38210 = state_38179__$1;(statearr_38189_38210[(2)] = null);
(statearr_38189_38210[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38180 === (10)))
{var inst_38171 = (state_38179[(2)]);var state_38179__$1 = (function (){var statearr_38190 = state_38179;(statearr_38190[(8)] = inst_38171);
return statearr_38190;
})();var statearr_38191_38211 = state_38179__$1;(statearr_38191_38211[(2)] = null);
(statearr_38191_38211[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38180 === (8)))
{var inst_38166 = (state_38179[(7)]);var inst_38168 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"search-term","search-term",356193544),inst_38166);var state_38179__$1 = state_38179;var statearr_38192_38212 = state_38179__$1;(statearr_38192_38212[(2)] = inst_38168);
(statearr_38192_38212[(1)] = (10));
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
});})(c__22720__auto__,search_chan,___$1,owner,categories,map38096,validate__837__auto__,ufv__,output_schema38098,input_schema38099,input_checker38100,output_checker38101,vec__38094,opts__24176__auto__))
;return ((function (switch__22705__auto__,c__22720__auto__,search_chan,___$1,owner,categories,map38096,validate__837__auto__,ufv__,output_schema38098,input_schema38099,input_checker38100,output_checker38101,vec__38094,opts__24176__auto__){
return (function() {
var state_machine__22706__auto__ = null;
var state_machine__22706__auto____0 = (function (){var statearr_38196 = [null,null,null,null,null,null,null,null,null];(statearr_38196[(0)] = state_machine__22706__auto__);
(statearr_38196[(1)] = (1));
return statearr_38196;
});
var state_machine__22706__auto____1 = (function (state_38179){while(true){
var ret_value__22707__auto__ = (function (){try{while(true){
var result__22708__auto__ = switch__22705__auto__(state_38179);if(cljs.core.keyword_identical_QMARK_(result__22708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22708__auto__;
}
break;
}
}catch (e38197){if((e38197 instanceof Object))
{var ex__22709__auto__ = e38197;var statearr_38198_38213 = state_38179;(statearr_38198_38213[(5)] = ex__22709__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38179);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38197;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38214 = state_38179;
state_38179 = G__38214;
continue;
}
} else
{return ret_value__22707__auto__;
}
break;
}
});
state_machine__22706__auto__ = function(state_38179){
switch(arguments.length){
case 0:
return state_machine__22706__auto____0.call(this);
case 1:
return state_machine__22706__auto____1.call(this,state_38179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22706__auto____0;
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22706__auto____1;
return state_machine__22706__auto__;
})()
;})(switch__22705__auto__,c__22720__auto__,search_chan,___$1,owner,categories,map38096,validate__837__auto__,ufv__,output_schema38098,input_schema38099,input_checker38100,output_checker38101,vec__38094,opts__24176__auto__))
})();var state__22722__auto__ = (function (){var statearr_38199 = (function (){return (f__22721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22721__auto__.cljs$core$IFn$_invoke$arity$0() : f__22721__auto__.call(null));
})();(statearr_38199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22720__auto__);
return statearr_38199;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22722__auto__);
});})(c__22720__auto__,search_chan,___$1,owner,categories,map38096,validate__837__auto__,ufv__,output_schema38098,input_schema38099,input_checker38100,output_checker38101,vec__38094,opts__24176__auto__))
);
return c__22720__auto__;
});})(owner,categories,map38096,validate__837__auto__,ufv__,output_schema38098,input_schema38099,input_checker38100,output_checker38101,vec__38094,opts__24176__auto__))
;
stuttaford.codex.t38153.prototype.om$core$IInitState$ = true;
stuttaford.codex.t38153.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,categories,map38096,validate__837__auto__,ufv__,output_schema38098,input_schema38099,input_checker38100,output_checker38101,vec__38094,opts__24176__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-chan","search-chan",962868037),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0()], null);
});})(owner,categories,map38096,validate__837__auto__,ufv__,output_schema38098,input_schema38099,input_checker38100,output_checker38101,vec__38094,opts__24176__auto__))
;
stuttaford.codex.t38153.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,categories,map38096,validate__837__auto__,ufv__,output_schema38098,input_schema38099,input_checker38100,output_checker38101,vec__38094,opts__24176__auto__){
return (function (_38155){var self__ = this;
var _38155__$1 = this;return self__.meta38154;
});})(owner,categories,map38096,validate__837__auto__,ufv__,output_schema38098,input_schema38099,input_checker38100,output_checker38101,vec__38094,opts__24176__auto__))
;
stuttaford.codex.t38153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,categories,map38096,validate__837__auto__,ufv__,output_schema38098,input_schema38099,input_checker38100,output_checker38101,vec__38094,opts__24176__auto__){
return (function (_38155,meta38154__$1){var self__ = this;
var _38155__$1 = this;return (new stuttaford.codex.t38153(self__.app_view,self__.owner,self__.map38096,self__.G__38102,self__.output_schema38098,self__.input_checker38100,self__.owner37984,self__.output_checker38101,self__.data__24175__auto__,self__.map38095,self__.categories,self__.vec__38094,self__.fnk38097,self__.opts__24176__auto__,self__.validate__837__auto__,self__.input_schema38099,self__.p__37986,self__.ufv__,meta38154__$1));
});})(owner,categories,map38096,validate__837__auto__,ufv__,output_schema38098,input_schema38099,input_checker38100,output_checker38101,vec__38094,opts__24176__auto__))
;
stuttaford.codex.__GT_t38153 = ((function (owner,categories,map38096,validate__837__auto__,ufv__,output_schema38098,input_schema38099,input_checker38100,output_checker38101,vec__38094,opts__24176__auto__){
return (function __GT_t38153(app_view__$1,owner__$1,map38096__$1,G__38102__$1,output_schema38098__$1,input_checker38100__$1,owner37984__$1,output_checker38101__$1,data__24175__auto____$1,map38095__$1,categories__$1,vec__38094__$1,fnk38097__$1,opts__24176__auto____$1,validate__837__auto____$1,input_schema38099__$1,p__37986__$1,ufv____$1,meta38154){return (new stuttaford.codex.t38153(app_view__$1,owner__$1,map38096__$1,G__38102__$1,output_schema38098__$1,input_checker38100__$1,owner37984__$1,output_checker38101__$1,data__24175__auto____$1,map38095__$1,categories__$1,vec__38094__$1,fnk38097__$1,opts__24176__auto____$1,validate__837__auto____$1,input_schema38099__$1,p__37986__$1,ufv____$1,meta38154));
});})(owner,categories,map38096,validate__837__auto__,ufv__,output_schema38098,input_schema38099,input_checker38100,output_checker38101,vec__38094,opts__24176__auto__))
;
}
return (new stuttaford.codex.t38153(app_view,owner,map38096,G__38102,output_schema38098,input_checker38100,owner37984,output_checker38101,data__24175__auto__,map38095,categories,vec__38094,fnk38097,opts__24176__auto__,validate__837__auto__,input_schema38099,p__37986,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38215 = (function (){var G__38200 = o__840__auto__;return (output_checker38101.cljs$core$IFn$_invoke$arity$1 ? output_checker38101.cljs$core$IFn$_invoke$arity$1(G__38200) : output_checker38101.call(null,G__38200));
})();if(cljs.core.truth_(temp__4126__auto___38215))
{var error__839__auto___38216 = temp__4126__auto___38215;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk38097","fnk38097",271783194,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38216], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38098,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38216], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema38098,input_schema38099,input_checker38100,output_checker38101,vec__38094,opts__24176__auto__))
,schema.core.make_fn_schema(output_schema38098,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38099], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24176__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner37984,new cljs.core.Keyword(null,"data","data",-232669377),data__24175__auto__], null));
};
var app_view = function (data__24175__auto__,owner37984,var_args){
var p__37986 = null;if (arguments.length > 2) {
  p__37986 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_view__delegate.call(this,data__24175__auto__,owner37984,p__37986);};
app_view.cljs$lang$maxFixedArity = 2;
app_view.cljs$lang$applyTo = (function (arglist__38217){
var data__24175__auto__ = cljs.core.first(arglist__38217);
arglist__38217 = cljs.core.next(arglist__38217);
var owner37984 = cljs.core.first(arglist__38217);
var p__37986 = cljs.core.rest(arglist__38217);
return app_view__delegate(data__24175__auto__,owner37984,p__37986);
});
app_view.cljs$core$IFn$_invoke$arity$variadic = app_view__delegate;
return app_view;
})()
;
stuttaford.codex.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__24144__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.app_view,cursor__24144__auto__);
});
var __GT_app_view__2 = (function (cursor__24144__auto__,m37985){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.app_view,cursor__24144__auto__,m37985);
});
__GT_app_view = function(cursor__24144__auto__,m37985){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__24144__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__24144__auto__,m37985);
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