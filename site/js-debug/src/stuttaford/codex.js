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
var tag_item__delegate = function (data__24582__auto__,owner75616,p__75618){var vec__75646 = p__75618;var opts__24583__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75646,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema75650 = schema.core.Any;var input_schema75651 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map75647","map75647",-737582384,null))], null);var input_checker75652 = schema.core.checker(input_schema75651);var output_checker75653 = schema.core.checker(output_schema75650);return schema.core.schematize_fn(((function (ufv__,output_schema75650,input_schema75651,input_checker75652,output_checker75653,vec__75646,opts__24583__auto__){
return (function fnk75649(G__75654){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___75673 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__75654], null);var temp__4126__auto___75674 = (function (){var G__75664 = args__838__auto___75673;return (input_checker75652.cljs$core$IFn$_invoke$arity$1 ? input_checker75652.cljs$core$IFn$_invoke$arity$1(G__75664) : input_checker75652.call(null,G__75664));
})();if(cljs.core.truth_(temp__4126__auto___75674))
{var error__839__auto___75675 = temp__4126__auto___75674;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk75649","fnk75649",-663418714,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75675], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema75651,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___75673,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75675], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map75647 = G__75654;while(true){
if(cljs.core.map_QMARK_(map75647))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map75647], 0))));
}
var map75648 = plumbing.fnk.schema.safe_get(map75647,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var name = plumbing.fnk.schema.safe_get(map75648,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map75647,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t75665 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t75665 = (function (owner75616,opts__24583__auto__,owner,fnk75649,p__75618,vec__75646,G__75654,name,map75647,data__24582__auto__,input_schema75651,output_schema75650,input_checker75652,output_checker75653,map75648,validate__837__auto__,ufv__,tag_item,meta75666){
this.owner75616 = owner75616;
this.opts__24583__auto__ = opts__24583__auto__;
this.owner = owner;
this.fnk75649 = fnk75649;
this.p__75618 = p__75618;
this.vec__75646 = vec__75646;
this.G__75654 = G__75654;
this.name = name;
this.map75647 = map75647;
this.data__24582__auto__ = data__24582__auto__;
this.input_schema75651 = input_schema75651;
this.output_schema75650 = output_schema75650;
this.input_checker75652 = input_checker75652;
this.output_checker75653 = output_checker75653;
this.map75648 = map75648;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.tag_item = tag_item;
this.meta75666 = meta75666;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t75665.cljs$lang$type = true;
stuttaford.codex.t75665.cljs$lang$ctorStr = "stuttaford.codex/t75665";
stuttaford.codex.t75665.cljs$lang$ctorPrWriter = ((function (owner,name,map75648,validate__837__auto__,ufv__,output_schema75650,input_schema75651,input_checker75652,output_checker75653,vec__75646,opts__24583__auto__){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"stuttaford.codex/t75665");
});})(owner,name,map75648,validate__837__auto__,ufv__,output_schema75650,input_schema75651,input_checker75652,output_checker75653,vec__75646,opts__24583__auto__))
;
stuttaford.codex.t75665.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t75665.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,name,map75648,validate__837__auto__,ufv__,output_schema75650,input_schema75651,input_checker75652,output_checker75653,vec__75646,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-item";
});})(owner,name,map75648,validate__837__auto__,ufv__,output_schema75650,input_schema75651,input_checker75652,output_checker75653,vec__75646,opts__24583__auto__))
;
stuttaford.codex.t75665.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t75665.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,name,map75648,validate__837__auto__,ufv__,output_schema75650,input_schema75651,input_checker75652,output_checker75653,vec__75646,opts__24583__auto__){
return (function (_,p__75668){var self__ = this;
var map__75669 = p__75668;var map__75669__$1 = ((cljs.core.seq_QMARK_(map__75669))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75669):map__75669);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75669__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var ___$1 = this;var class$ = (cljs.core.truth_((function (){var and__19697__auto__ = cljs.core.seq(search_term);if(and__19697__auto__)
{return cljs.core.re_find(stuttaford.codex.regex(search_term),self__.name);
} else
{return and__19697__auto__;
}
})())?"tag active":"tag");var G__75670 = {"className": class$, "onClick": ((function (class$,___$1,map__75669,map__75669__$1,search_term,owner,name,map75648,validate__837__auto__,ufv__,output_schema75650,input_schema75651,input_checker75652,output_checker75653,vec__75646,opts__24583__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"search-chan","search-chan",962868037)),self__.name);
});})(class$,___$1,map__75669,map__75669__$1,search_term,owner,name,map75648,validate__837__auto__,ufv__,output_schema75650,input_schema75651,input_checker75652,output_checker75653,vec__75646,opts__24583__auto__))
};var G__75671 = sablono.interpreter.interpret(self__.name);return React.DOM.a(G__75670,G__75671);
});})(owner,name,map75648,validate__837__auto__,ufv__,output_schema75650,input_schema75651,input_checker75652,output_checker75653,vec__75646,opts__24583__auto__))
;
stuttaford.codex.t75665.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,name,map75648,validate__837__auto__,ufv__,output_schema75650,input_schema75651,input_checker75652,output_checker75653,vec__75646,opts__24583__auto__){
return (function (_75667){var self__ = this;
var _75667__$1 = this;return self__.meta75666;
});})(owner,name,map75648,validate__837__auto__,ufv__,output_schema75650,input_schema75651,input_checker75652,output_checker75653,vec__75646,opts__24583__auto__))
;
stuttaford.codex.t75665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,name,map75648,validate__837__auto__,ufv__,output_schema75650,input_schema75651,input_checker75652,output_checker75653,vec__75646,opts__24583__auto__){
return (function (_75667,meta75666__$1){var self__ = this;
var _75667__$1 = this;return (new stuttaford.codex.t75665(self__.owner75616,self__.opts__24583__auto__,self__.owner,self__.fnk75649,self__.p__75618,self__.vec__75646,self__.G__75654,self__.name,self__.map75647,self__.data__24582__auto__,self__.input_schema75651,self__.output_schema75650,self__.input_checker75652,self__.output_checker75653,self__.map75648,self__.validate__837__auto__,self__.ufv__,self__.tag_item,meta75666__$1));
});})(owner,name,map75648,validate__837__auto__,ufv__,output_schema75650,input_schema75651,input_checker75652,output_checker75653,vec__75646,opts__24583__auto__))
;
stuttaford.codex.__GT_t75665 = ((function (owner,name,map75648,validate__837__auto__,ufv__,output_schema75650,input_schema75651,input_checker75652,output_checker75653,vec__75646,opts__24583__auto__){
return (function __GT_t75665(owner75616__$1,opts__24583__auto____$1,owner__$1,fnk75649__$1,p__75618__$1,vec__75646__$1,G__75654__$1,name__$1,map75647__$1,data__24582__auto____$1,input_schema75651__$1,output_schema75650__$1,input_checker75652__$1,output_checker75653__$1,map75648__$1,validate__837__auto____$1,ufv____$1,tag_item__$1,meta75666){return (new stuttaford.codex.t75665(owner75616__$1,opts__24583__auto____$1,owner__$1,fnk75649__$1,p__75618__$1,vec__75646__$1,G__75654__$1,name__$1,map75647__$1,data__24582__auto____$1,input_schema75651__$1,output_schema75650__$1,input_checker75652__$1,output_checker75653__$1,map75648__$1,validate__837__auto____$1,ufv____$1,tag_item__$1,meta75666));
});})(owner,name,map75648,validate__837__auto__,ufv__,output_schema75650,input_schema75651,input_checker75652,output_checker75653,vec__75646,opts__24583__auto__))
;
}
return (new stuttaford.codex.t75665(owner75616,opts__24583__auto__,owner,fnk75649,p__75618,vec__75646,G__75654,name,map75647,data__24582__auto__,input_schema75651,output_schema75650,input_checker75652,output_checker75653,map75648,validate__837__auto__,ufv__,tag_item,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___75676 = (function (){var G__75672 = o__840__auto__;return (output_checker75653.cljs$core$IFn$_invoke$arity$1 ? output_checker75653.cljs$core$IFn$_invoke$arity$1(G__75672) : output_checker75653.call(null,G__75672));
})();if(cljs.core.truth_(temp__4126__auto___75676))
{var error__839__auto___75677 = temp__4126__auto___75676;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk75649","fnk75649",-663418714,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75677], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema75650,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75677], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema75650,input_schema75651,input_checker75652,output_checker75653,vec__75646,opts__24583__auto__))
,schema.core.make_fn_schema(output_schema75650,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema75651], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24583__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner75616,new cljs.core.Keyword(null,"data","data",-232669377),data__24582__auto__], null));
};
var tag_item = function (data__24582__auto__,owner75616,var_args){
var p__75618 = null;if (arguments.length > 2) {
  p__75618 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_item__delegate.call(this,data__24582__auto__,owner75616,p__75618);};
tag_item.cljs$lang$maxFixedArity = 2;
tag_item.cljs$lang$applyTo = (function (arglist__75678){
var data__24582__auto__ = cljs.core.first(arglist__75678);
arglist__75678 = cljs.core.next(arglist__75678);
var owner75616 = cljs.core.first(arglist__75678);
var p__75618 = cljs.core.rest(arglist__75678);
return tag_item__delegate(data__24582__auto__,owner75616,p__75618);
});
tag_item.cljs$core$IFn$_invoke$arity$variadic = tag_item__delegate;
return tag_item;
})()
;
stuttaford.codex.__GT_tag_item = (function() {
var __GT_tag_item = null;
var __GT_tag_item__1 = (function (cursor__24551__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.tag_item,cursor__24551__auto__);
});
var __GT_tag_item__2 = (function (cursor__24551__auto__,m75617){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.tag_item,cursor__24551__auto__,m75617);
});
__GT_tag_item = function(cursor__24551__auto__,m75617){
switch(arguments.length){
case 1:
return __GT_tag_item__1.call(this,cursor__24551__auto__);
case 2:
return __GT_tag_item__2.call(this,cursor__24551__auto__,m75617);
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
var link_item__delegate = function (data__24582__auto__,owner75679,p__75681){var vec__75717 = p__75681;var opts__24583__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75717,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema75721 = schema.core.Any;var input_schema75722 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"tags","tags",1771418977)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"image","image",-58725096)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"description","description",-1428560544)),schema.core.Any,new cljs.core.Keyword(null,"uri","uri",-774711847),schema.core.Any,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map75718","map75718",104275388,null))], null);var input_checker75723 = schema.core.checker(input_schema75722);var output_checker75724 = schema.core.checker(output_schema75721);return schema.core.schematize_fn(((function (ufv__,output_schema75721,input_schema75722,input_checker75723,output_checker75724,vec__75717,opts__24583__auto__){
return (function fnk75720(G__75725){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___75752 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__75725], null);var temp__4126__auto___75753 = (function (){var G__75739 = args__838__auto___75752;return (input_checker75723.cljs$core$IFn$_invoke$arity$1 ? input_checker75723.cljs$core$IFn$_invoke$arity$1(G__75739) : input_checker75723.call(null,G__75739));
})();if(cljs.core.truth_(temp__4126__auto___75753))
{var error__839__auto___75754 = temp__4126__auto___75753;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk75720","fnk75720",1075494738,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75754], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema75722,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___75752,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75754], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map75718 = G__75725;while(true){
if(cljs.core.map_QMARK_(map75718))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map75718], 0))));
}
var map75719 = plumbing.fnk.schema.safe_get(map75718,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var name = plumbing.fnk.schema.safe_get(map75719,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var uri = plumbing.fnk.schema.safe_get(map75719,new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var description = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map75719,new cljs.core.Keyword(null,"description","description",-1428560544),null);var image = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map75719,new cljs.core.Keyword(null,"image","image",-58725096),null);var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map75719,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map75718,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t75740 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t75740 = (function (uri,p__75681,opts__24583__auto__,vec__75717,owner,description,map75719,tags,G__75725,input_schema75722,name,data__24582__auto__,fnk75720,output_checker75724,input_checker75723,output_schema75721,validate__837__auto__,owner75679,map75718,ufv__,link_item,image,meta75741){
this.uri = uri;
this.p__75681 = p__75681;
this.opts__24583__auto__ = opts__24583__auto__;
this.vec__75717 = vec__75717;
this.owner = owner;
this.description = description;
this.map75719 = map75719;
this.tags = tags;
this.G__75725 = G__75725;
this.input_schema75722 = input_schema75722;
this.name = name;
this.data__24582__auto__ = data__24582__auto__;
this.fnk75720 = fnk75720;
this.output_checker75724 = output_checker75724;
this.input_checker75723 = input_checker75723;
this.output_schema75721 = output_schema75721;
this.validate__837__auto__ = validate__837__auto__;
this.owner75679 = owner75679;
this.map75718 = map75718;
this.ufv__ = ufv__;
this.link_item = link_item;
this.image = image;
this.meta75741 = meta75741;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t75740.cljs$lang$type = true;
stuttaford.codex.t75740.cljs$lang$ctorStr = "stuttaford.codex/t75740";
stuttaford.codex.t75740.cljs$lang$ctorPrWriter = ((function (owner,tags,image,description,uri,name,map75719,validate__837__auto__,ufv__,output_schema75721,input_schema75722,input_checker75723,output_checker75724,vec__75717,opts__24583__auto__){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"stuttaford.codex/t75740");
});})(owner,tags,image,description,uri,name,map75719,validate__837__auto__,ufv__,output_schema75721,input_schema75722,input_checker75723,output_checker75724,vec__75717,opts__24583__auto__))
;
stuttaford.codex.t75740.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t75740.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,tags,image,description,uri,name,map75719,validate__837__auto__,ufv__,output_schema75721,input_schema75722,input_checker75723,output_checker75724,vec__75717,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "link-item";
});})(owner,tags,image,description,uri,name,map75719,validate__837__auto__,ufv__,output_schema75721,input_schema75722,input_checker75723,output_checker75724,vec__75717,opts__24583__auto__))
;
stuttaford.codex.t75740.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t75740.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,tags,image,description,uri,name,map75719,validate__837__auto__,ufv__,output_schema75721,input_schema75722,input_checker75723,output_checker75724,vec__75717,opts__24583__auto__){
return (function (_,p__75743){var self__ = this;
var map__75744 = p__75743;var map__75744__$1 = ((cljs.core.seq_QMARK_(map__75744))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75744):map__75744);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75744__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var ___$1 = this;var G__75745 = {"className": "link"};var G__75746 = (function (){var G__75748 = {"href": self__.uri};var G__75749 = sablono.interpreter.interpret(self__.name);return React.DOM.a(G__75748,G__75749);
})();var G__75747 = sablono.interpreter.interpret(om.core.build_all.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.tag_item,(function (){var G__75750 = self__.tags;return (stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1 ? stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1(G__75750) : stuttaford.codex.name_sort.call(null,G__75750));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177)], null)));return React.DOM.li(G__75745,G__75746,G__75747);
});})(owner,tags,image,description,uri,name,map75719,validate__837__auto__,ufv__,output_schema75721,input_schema75722,input_checker75723,output_checker75724,vec__75717,opts__24583__auto__))
;
stuttaford.codex.t75740.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,tags,image,description,uri,name,map75719,validate__837__auto__,ufv__,output_schema75721,input_schema75722,input_checker75723,output_checker75724,vec__75717,opts__24583__auto__){
return (function (_75742){var self__ = this;
var _75742__$1 = this;return self__.meta75741;
});})(owner,tags,image,description,uri,name,map75719,validate__837__auto__,ufv__,output_schema75721,input_schema75722,input_checker75723,output_checker75724,vec__75717,opts__24583__auto__))
;
stuttaford.codex.t75740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,tags,image,description,uri,name,map75719,validate__837__auto__,ufv__,output_schema75721,input_schema75722,input_checker75723,output_checker75724,vec__75717,opts__24583__auto__){
return (function (_75742,meta75741__$1){var self__ = this;
var _75742__$1 = this;return (new stuttaford.codex.t75740(self__.uri,self__.p__75681,self__.opts__24583__auto__,self__.vec__75717,self__.owner,self__.description,self__.map75719,self__.tags,self__.G__75725,self__.input_schema75722,self__.name,self__.data__24582__auto__,self__.fnk75720,self__.output_checker75724,self__.input_checker75723,self__.output_schema75721,self__.validate__837__auto__,self__.owner75679,self__.map75718,self__.ufv__,self__.link_item,self__.image,meta75741__$1));
});})(owner,tags,image,description,uri,name,map75719,validate__837__auto__,ufv__,output_schema75721,input_schema75722,input_checker75723,output_checker75724,vec__75717,opts__24583__auto__))
;
stuttaford.codex.__GT_t75740 = ((function (owner,tags,image,description,uri,name,map75719,validate__837__auto__,ufv__,output_schema75721,input_schema75722,input_checker75723,output_checker75724,vec__75717,opts__24583__auto__){
return (function __GT_t75740(uri__$1,p__75681__$1,opts__24583__auto____$1,vec__75717__$1,owner__$1,description__$1,map75719__$1,tags__$1,G__75725__$1,input_schema75722__$1,name__$1,data__24582__auto____$1,fnk75720__$1,output_checker75724__$1,input_checker75723__$1,output_schema75721__$1,validate__837__auto____$1,owner75679__$1,map75718__$1,ufv____$1,link_item__$1,image__$1,meta75741){return (new stuttaford.codex.t75740(uri__$1,p__75681__$1,opts__24583__auto____$1,vec__75717__$1,owner__$1,description__$1,map75719__$1,tags__$1,G__75725__$1,input_schema75722__$1,name__$1,data__24582__auto____$1,fnk75720__$1,output_checker75724__$1,input_checker75723__$1,output_schema75721__$1,validate__837__auto____$1,owner75679__$1,map75718__$1,ufv____$1,link_item__$1,image__$1,meta75741));
});})(owner,tags,image,description,uri,name,map75719,validate__837__auto__,ufv__,output_schema75721,input_schema75722,input_checker75723,output_checker75724,vec__75717,opts__24583__auto__))
;
}
return (new stuttaford.codex.t75740(uri,p__75681,opts__24583__auto__,vec__75717,owner,description,map75719,tags,G__75725,input_schema75722,name,data__24582__auto__,fnk75720,output_checker75724,input_checker75723,output_schema75721,validate__837__auto__,owner75679,map75718,ufv__,link_item,image,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___75755 = (function (){var G__75751 = o__840__auto__;return (output_checker75724.cljs$core$IFn$_invoke$arity$1 ? output_checker75724.cljs$core$IFn$_invoke$arity$1(G__75751) : output_checker75724.call(null,G__75751));
})();if(cljs.core.truth_(temp__4126__auto___75755))
{var error__839__auto___75756 = temp__4126__auto___75755;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk75720","fnk75720",1075494738,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75756], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema75721,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75756], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema75721,input_schema75722,input_checker75723,output_checker75724,vec__75717,opts__24583__auto__))
,schema.core.make_fn_schema(output_schema75721,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema75722], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24583__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner75679,new cljs.core.Keyword(null,"data","data",-232669377),data__24582__auto__], null));
};
var link_item = function (data__24582__auto__,owner75679,var_args){
var p__75681 = null;if (arguments.length > 2) {
  p__75681 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return link_item__delegate.call(this,data__24582__auto__,owner75679,p__75681);};
link_item.cljs$lang$maxFixedArity = 2;
link_item.cljs$lang$applyTo = (function (arglist__75757){
var data__24582__auto__ = cljs.core.first(arglist__75757);
arglist__75757 = cljs.core.next(arglist__75757);
var owner75679 = cljs.core.first(arglist__75757);
var p__75681 = cljs.core.rest(arglist__75757);
return link_item__delegate(data__24582__auto__,owner75679,p__75681);
});
link_item.cljs$core$IFn$_invoke$arity$variadic = link_item__delegate;
return link_item;
})()
;
stuttaford.codex.__GT_link_item = (function() {
var __GT_link_item = null;
var __GT_link_item__1 = (function (cursor__24551__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.link_item,cursor__24551__auto__);
});
var __GT_link_item__2 = (function (cursor__24551__auto__,m75680){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.link_item,cursor__24551__auto__,m75680);
});
__GT_link_item = function(cursor__24551__auto__,m75680){
switch(arguments.length){
case 1:
return __GT_link_item__1.call(this,cursor__24551__auto__);
case 2:
return __GT_link_item__2.call(this,cursor__24551__auto__,m75680);
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
var category_item__delegate = function (data__24582__auto__,owner75758,p__75760){var vec__75795 = p__75760;var opts__24583__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75795,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema75798 = schema.core.Any;var input_schema75799 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"links","links",-654507394),schema.core.Any,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map75796","map75796",-2005634793,null))], null);var input_checker75800 = schema.core.checker(input_schema75799);var output_checker75801 = schema.core.checker(output_schema75798);return schema.core.schematize_fn(((function (ufv__,output_schema75798,input_schema75799,input_checker75800,output_checker75801,vec__75795,opts__24583__auto__){
return (function fnk75797(G__75802){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___75829 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__75802], null);var temp__4126__auto___75830 = (function (){var G__75816 = args__838__auto___75829;return (input_checker75800.cljs$core$IFn$_invoke$arity$1 ? input_checker75800.cljs$core$IFn$_invoke$arity$1(G__75816) : input_checker75800.call(null,G__75816));
})();if(cljs.core.truth_(temp__4126__auto___75830))
{var error__839__auto___75831 = temp__4126__auto___75830;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk75797","fnk75797",1378054064,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75831], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema75799,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___75829,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75831], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map75796 = G__75802;while(true){
if(cljs.core.map_QMARK_(map75796))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map75796], 0))));
}
var data = plumbing.fnk.schema.safe_get(map75796,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var name = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var links = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map75796,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t75817 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t75817 = (function (opts__24583__auto__,owner,links,output_schema75798,data,p__75760,name,fnk75797,vec__75795,data__24582__auto__,owner75758,G__75802,map75796,category_item,validate__837__auto__,output_checker75801,ufv__,input_checker75800,input_schema75799,meta75818){
this.opts__24583__auto__ = opts__24583__auto__;
this.owner = owner;
this.links = links;
this.output_schema75798 = output_schema75798;
this.data = data;
this.p__75760 = p__75760;
this.name = name;
this.fnk75797 = fnk75797;
this.vec__75795 = vec__75795;
this.data__24582__auto__ = data__24582__auto__;
this.owner75758 = owner75758;
this.G__75802 = G__75802;
this.map75796 = map75796;
this.category_item = category_item;
this.validate__837__auto__ = validate__837__auto__;
this.output_checker75801 = output_checker75801;
this.ufv__ = ufv__;
this.input_checker75800 = input_checker75800;
this.input_schema75799 = input_schema75799;
this.meta75818 = meta75818;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t75817.cljs$lang$type = true;
stuttaford.codex.t75817.cljs$lang$ctorStr = "stuttaford.codex/t75817";
stuttaford.codex.t75817.cljs$lang$ctorPrWriter = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema75798,input_schema75799,input_checker75800,output_checker75801,vec__75795,opts__24583__auto__){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"stuttaford.codex/t75817");
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema75798,input_schema75799,input_checker75800,output_checker75801,vec__75795,opts__24583__auto__))
;
stuttaford.codex.t75817.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t75817.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema75798,input_schema75799,input_checker75800,output_checker75801,vec__75795,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "category-item";
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema75798,input_schema75799,input_checker75800,output_checker75801,vec__75795,opts__24583__auto__))
;
stuttaford.codex.t75817.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t75817.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema75798,input_schema75799,input_checker75800,output_checker75801,vec__75795,opts__24583__auto__){
return (function (_,p__75820){var self__ = this;
var map__75821 = p__75820;var map__75821__$1 = ((cljs.core.seq_QMARK_(map__75821))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75821):map__75821);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75821__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var ___$1 = this;var temp__4126__auto__ = cljs.core.seq((function (){var G__75822 = stuttaford.codex.search_items(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"tags-string","tags-string",-736299316)], null),search_term,self__.links);return (stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1 ? stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1(G__75822) : stuttaford.codex.name_sort.call(null,G__75822));
})());if(temp__4126__auto__)
{var links__$2 = temp__4126__auto__;var G__75825 = null;var G__75826 = (function (){var attrs75823 = self__.name;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs75823))?sablono.interpreter.attributes(attrs75823):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs75823))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs75823)], null))));
})();var G__75827 = (function (){var attrs75824 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.link_item,links__$2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177)], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.ul,((cljs.core.map_QMARK_(attrs75824))?sablono.interpreter.attributes(attrs75824):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs75824))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs75824)], null))));
})();return React.DOM.div(G__75825,G__75826,G__75827);
} else
{return null;
}
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema75798,input_schema75799,input_checker75800,output_checker75801,vec__75795,opts__24583__auto__))
;
stuttaford.codex.t75817.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema75798,input_schema75799,input_checker75800,output_checker75801,vec__75795,opts__24583__auto__){
return (function (_75819){var self__ = this;
var _75819__$1 = this;return self__.meta75818;
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema75798,input_schema75799,input_checker75800,output_checker75801,vec__75795,opts__24583__auto__))
;
stuttaford.codex.t75817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema75798,input_schema75799,input_checker75800,output_checker75801,vec__75795,opts__24583__auto__){
return (function (_75819,meta75818__$1){var self__ = this;
var _75819__$1 = this;return (new stuttaford.codex.t75817(self__.opts__24583__auto__,self__.owner,self__.links,self__.output_schema75798,self__.data,self__.p__75760,self__.name,self__.fnk75797,self__.vec__75795,self__.data__24582__auto__,self__.owner75758,self__.G__75802,self__.map75796,self__.category_item,self__.validate__837__auto__,self__.output_checker75801,self__.ufv__,self__.input_checker75800,self__.input_schema75799,meta75818__$1));
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema75798,input_schema75799,input_checker75800,output_checker75801,vec__75795,opts__24583__auto__))
;
stuttaford.codex.__GT_t75817 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema75798,input_schema75799,input_checker75800,output_checker75801,vec__75795,opts__24583__auto__){
return (function __GT_t75817(opts__24583__auto____$1,owner__$1,links__$1,output_schema75798__$1,data__$1,p__75760__$1,name__$1,fnk75797__$1,vec__75795__$1,data__24582__auto____$1,owner75758__$1,G__75802__$1,map75796__$1,category_item__$1,validate__837__auto____$1,output_checker75801__$1,ufv____$1,input_checker75800__$1,input_schema75799__$1,meta75818){return (new stuttaford.codex.t75817(opts__24583__auto____$1,owner__$1,links__$1,output_schema75798__$1,data__$1,p__75760__$1,name__$1,fnk75797__$1,vec__75795__$1,data__24582__auto____$1,owner75758__$1,G__75802__$1,map75796__$1,category_item__$1,validate__837__auto____$1,output_checker75801__$1,ufv____$1,input_checker75800__$1,input_schema75799__$1,meta75818));
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema75798,input_schema75799,input_checker75800,output_checker75801,vec__75795,opts__24583__auto__))
;
}
return (new stuttaford.codex.t75817(opts__24583__auto__,owner,links,output_schema75798,data,p__75760,name,fnk75797,vec__75795,data__24582__auto__,owner75758,G__75802,map75796,category_item,validate__837__auto__,output_checker75801,ufv__,input_checker75800,input_schema75799,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___75832 = (function (){var G__75828 = o__840__auto__;return (output_checker75801.cljs$core$IFn$_invoke$arity$1 ? output_checker75801.cljs$core$IFn$_invoke$arity$1(G__75828) : output_checker75801.call(null,G__75828));
})();if(cljs.core.truth_(temp__4126__auto___75832))
{var error__839__auto___75833 = temp__4126__auto___75832;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk75797","fnk75797",1378054064,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75833], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema75798,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75833], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema75798,input_schema75799,input_checker75800,output_checker75801,vec__75795,opts__24583__auto__))
,schema.core.make_fn_schema(output_schema75798,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema75799], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24583__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner75758,new cljs.core.Keyword(null,"data","data",-232669377),data__24582__auto__], null));
};
var category_item = function (data__24582__auto__,owner75758,var_args){
var p__75760 = null;if (arguments.length > 2) {
  p__75760 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return category_item__delegate.call(this,data__24582__auto__,owner75758,p__75760);};
category_item.cljs$lang$maxFixedArity = 2;
category_item.cljs$lang$applyTo = (function (arglist__75834){
var data__24582__auto__ = cljs.core.first(arglist__75834);
arglist__75834 = cljs.core.next(arglist__75834);
var owner75758 = cljs.core.first(arglist__75834);
var p__75760 = cljs.core.rest(arglist__75834);
return category_item__delegate(data__24582__auto__,owner75758,p__75760);
});
category_item.cljs$core$IFn$_invoke$arity$variadic = category_item__delegate;
return category_item;
})()
;
stuttaford.codex.__GT_category_item = (function() {
var __GT_category_item = null;
var __GT_category_item__1 = (function (cursor__24551__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.category_item,cursor__24551__auto__);
});
var __GT_category_item__2 = (function (cursor__24551__auto__,m75759){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.category_item,cursor__24551__auto__,m75759);
});
__GT_category_item = function(cursor__24551__auto__,m75759){
switch(arguments.length){
case 1:
return __GT_category_item__1.call(this,cursor__24551__auto__);
case 2:
return __GT_category_item__2.call(this,cursor__24551__auto__,m75759);
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
var app_view__delegate = function (data__24582__auto__,owner75836,p__75838){var vec__75946 = p__75838;var opts__24583__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75946,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema75950 = schema.core.Any;var input_schema75951 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"categories","categories",178386610),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map75947","map75947",-1545635663,null))], null);var input_checker75952 = schema.core.checker(input_schema75951);var output_checker75953 = schema.core.checker(output_schema75950);return schema.core.schematize_fn(((function (ufv__,output_schema75950,input_schema75951,input_checker75952,output_checker75953,vec__75946,opts__24583__auto__){
return (function fnk75949(G__75954){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___76053 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__75954], null);var temp__4126__auto___76054 = (function (){var G__76004 = args__838__auto___76053;return (input_checker75952.cljs$core$IFn$_invoke$arity$1 ? input_checker75952.cljs$core$IFn$_invoke$arity$1(G__76004) : input_checker75952.call(null,G__76004));
})();if(cljs.core.truth_(temp__4126__auto___76054))
{var error__839__auto___76055 = temp__4126__auto___76054;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk75949","fnk75949",-459692381,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___76055], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema75951,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___76053,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___76055], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map75947 = G__75954;while(true){
if(cljs.core.map_QMARK_(map75947))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map75947], 0))));
}
var map75948 = plumbing.fnk.schema.safe_get(map75947,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var categories = plumbing.fnk.schema.safe_get(map75948,new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map75947,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t76005 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t76005 = (function (G__75954,map75948,app_view,opts__24583__auto__,fnk75949,owner,p__75838,input_checker75952,input_schema75951,owner75836,map75947,data__24582__auto__,vec__75946,output_schema75950,categories,output_checker75953,validate__837__auto__,ufv__,meta76006){
this.G__75954 = G__75954;
this.map75948 = map75948;
this.app_view = app_view;
this.opts__24583__auto__ = opts__24583__auto__;
this.fnk75949 = fnk75949;
this.owner = owner;
this.p__75838 = p__75838;
this.input_checker75952 = input_checker75952;
this.input_schema75951 = input_schema75951;
this.owner75836 = owner75836;
this.map75947 = map75947;
this.data__24582__auto__ = data__24582__auto__;
this.vec__75946 = vec__75946;
this.output_schema75950 = output_schema75950;
this.categories = categories;
this.output_checker75953 = output_checker75953;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.meta76006 = meta76006;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t76005.cljs$lang$type = true;
stuttaford.codex.t76005.cljs$lang$ctorStr = "stuttaford.codex/t76005";
stuttaford.codex.t76005.cljs$lang$ctorPrWriter = ((function (owner,categories,map75948,validate__837__auto__,ufv__,output_schema75950,input_schema75951,input_checker75952,output_checker75953,vec__75946,opts__24583__auto__){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"stuttaford.codex/t76005");
});})(owner,categories,map75948,validate__837__auto__,ufv__,output_schema75950,input_schema75951,input_checker75952,output_checker75953,vec__75946,opts__24583__auto__))
;
stuttaford.codex.t76005.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t76005.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,categories,map75948,validate__837__auto__,ufv__,output_schema75950,input_schema75951,input_checker75952,output_checker75953,vec__75946,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "app-view";
});})(owner,categories,map75948,validate__837__auto__,ufv__,output_schema75950,input_schema75951,input_checker75952,output_checker75953,vec__75946,opts__24583__auto__))
;
stuttaford.codex.t76005.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t76005.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,categories,map75948,validate__837__auto__,ufv__,output_schema75950,input_schema75951,input_checker75952,output_checker75953,vec__75946,opts__24583__auto__){
return (function (_,p__76008){var self__ = this;
var map__76009 = p__76008;var map__76009__$1 = ((cljs.core.seq_QMARK_(map__76009))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76009):map__76009);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76009__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var search_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76009__$1,new cljs.core.Keyword(null,"search-chan","search-chan",962868037));var ___$1 = this;var G__76010 = null;var G__76011 = (function (){var G__76013 = {"id": "search", "type": "text", "placeholder": "Search for link", "autoFocus": "autofocus", "value": search_term, "onChange": ((function (G__76010,___$1,map__76009,map__76009__$1,search_term,search_chan,owner,categories,map75948,validate__837__auto__,ufv__,output_schema75950,input_schema75951,input_checker75952,output_checker75953,vec__75946,opts__24583__auto__){
return (function (p1__75835_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(search_chan,p1__75835_SHARP_.target.value);
});})(G__76010,___$1,map__76009,map__76009__$1,search_term,search_chan,owner,categories,map75948,validate__837__auto__,ufv__,output_schema75950,input_schema75951,input_checker75952,output_checker75953,vec__75946,opts__24583__auto__))
};return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__76013) : sablono.interpreter.input.call(null,G__76013));
})();var G__76012 = sablono.interpreter.interpret(om.core.build_all.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.category_item,(function (){var G__76014 = self__.categories;return (stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1 ? stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1(G__76014) : stuttaford.codex.name_sort.call(null,G__76014));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177)], null)));return React.DOM.div(G__76010,G__76011,G__76012);
});})(owner,categories,map75948,validate__837__auto__,ufv__,output_schema75950,input_schema75951,input_checker75952,output_checker75953,vec__75946,opts__24583__auto__))
;
stuttaford.codex.t76005.prototype.om$core$IWillMount$ = true;
stuttaford.codex.t76005.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (owner,categories,map75948,validate__837__auto__,ufv__,output_schema75950,input_schema75951,input_checker75952,output_checker75953,vec__75946,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var search_chan = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"search-chan","search-chan",962868037));var c__23127__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23127__auto__,search_chan,___$1,owner,categories,map75948,validate__837__auto__,ufv__,output_schema75950,input_schema75951,input_checker75952,output_checker75953,vec__75946,opts__24583__auto__){
return (function (){var f__23128__auto__ = (function (){var switch__23112__auto__ = ((function (c__23127__auto__,search_chan,___$1,owner,categories,map75948,validate__837__auto__,ufv__,output_schema75950,input_schema75951,input_checker75952,output_checker75953,vec__75946,opts__24583__auto__){
return (function (state_76031){var state_val_76032 = (state_76031[(1)]);if((state_val_76032 === (7)))
{var inst_76018 = (state_76031[(7)]);var inst_76018__$1 = (state_76031[(2)]);var state_76031__$1 = (function (){var statearr_76033 = state_76031;(statearr_76033[(7)] = inst_76018__$1);
return statearr_76033;
})();if(cljs.core.truth_(inst_76018__$1))
{var statearr_76034_76056 = state_76031__$1;(statearr_76034_76056[(1)] = (8));
} else
{var statearr_76035_76057 = state_76031__$1;(statearr_76035_76057[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76032 === (1)))
{var state_76031__$1 = state_76031;var statearr_76036_76058 = state_76031__$1;(statearr_76036_76058[(2)] = null);
(statearr_76036_76058[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76032 === (4)))
{var state_76031__$1 = state_76031;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76031__$1,(7),search_chan);
} else
{if((state_val_76032 === (6)))
{var inst_76027 = (state_76031[(2)]);var state_76031__$1 = state_76031;var statearr_76037_76059 = state_76031__$1;(statearr_76037_76059[(2)] = inst_76027);
(statearr_76037_76059[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76032 === (3)))
{var inst_76029 = (state_76031[(2)]);var state_76031__$1 = state_76031;return cljs.core.async.impl.ioc_helpers.return_chan(state_76031__$1,inst_76029);
} else
{if((state_val_76032 === (2)))
{var state_76031__$1 = state_76031;var statearr_76038_76060 = state_76031__$1;(statearr_76038_76060[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76032 === (9)))
{var state_76031__$1 = state_76031;var statearr_76040_76061 = state_76031__$1;(statearr_76040_76061[(2)] = null);
(statearr_76040_76061[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76032 === (5)))
{var state_76031__$1 = state_76031;var statearr_76041_76062 = state_76031__$1;(statearr_76041_76062[(2)] = null);
(statearr_76041_76062[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76032 === (10)))
{var inst_76023 = (state_76031[(2)]);var state_76031__$1 = (function (){var statearr_76042 = state_76031;(statearr_76042[(8)] = inst_76023);
return statearr_76042;
})();var statearr_76043_76063 = state_76031__$1;(statearr_76043_76063[(2)] = null);
(statearr_76043_76063[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76032 === (8)))
{var inst_76018 = (state_76031[(7)]);var inst_76020 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"search-term","search-term",356193544),inst_76018);var state_76031__$1 = state_76031;var statearr_76044_76064 = state_76031__$1;(statearr_76044_76064[(2)] = inst_76020);
(statearr_76044_76064[(1)] = (10));
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
});})(c__23127__auto__,search_chan,___$1,owner,categories,map75948,validate__837__auto__,ufv__,output_schema75950,input_schema75951,input_checker75952,output_checker75953,vec__75946,opts__24583__auto__))
;return ((function (switch__23112__auto__,c__23127__auto__,search_chan,___$1,owner,categories,map75948,validate__837__auto__,ufv__,output_schema75950,input_schema75951,input_checker75952,output_checker75953,vec__75946,opts__24583__auto__){
return (function() {
var state_machine__23113__auto__ = null;
var state_machine__23113__auto____0 = (function (){var statearr_76048 = [null,null,null,null,null,null,null,null,null];(statearr_76048[(0)] = state_machine__23113__auto__);
(statearr_76048[(1)] = (1));
return statearr_76048;
});
var state_machine__23113__auto____1 = (function (state_76031){while(true){
var ret_value__23114__auto__ = (function (){try{while(true){
var result__23115__auto__ = switch__23112__auto__(state_76031);if(cljs.core.keyword_identical_QMARK_(result__23115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__23115__auto__;
}
break;
}
}catch (e76049){if((e76049 instanceof Object))
{var ex__23116__auto__ = e76049;var statearr_76050_76065 = state_76031;(statearr_76050_76065[(5)] = ex__23116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_76031);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e76049;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__23114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__76066 = state_76031;
state_76031 = G__76066;
continue;
}
} else
{return ret_value__23114__auto__;
}
break;
}
});
state_machine__23113__auto__ = function(state_76031){
switch(arguments.length){
case 0:
return state_machine__23113__auto____0.call(this);
case 1:
return state_machine__23113__auto____1.call(this,state_76031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23113__auto____0;
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23113__auto____1;
return state_machine__23113__auto__;
})()
;})(switch__23112__auto__,c__23127__auto__,search_chan,___$1,owner,categories,map75948,validate__837__auto__,ufv__,output_schema75950,input_schema75951,input_checker75952,output_checker75953,vec__75946,opts__24583__auto__))
})();var state__23129__auto__ = (function (){var statearr_76051 = (function (){return (f__23128__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23128__auto__.cljs$core$IFn$_invoke$arity$0() : f__23128__auto__.call(null));
})();(statearr_76051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23127__auto__);
return statearr_76051;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23129__auto__);
});})(c__23127__auto__,search_chan,___$1,owner,categories,map75948,validate__837__auto__,ufv__,output_schema75950,input_schema75951,input_checker75952,output_checker75953,vec__75946,opts__24583__auto__))
);
return c__23127__auto__;
});})(owner,categories,map75948,validate__837__auto__,ufv__,output_schema75950,input_schema75951,input_checker75952,output_checker75953,vec__75946,opts__24583__auto__))
;
stuttaford.codex.t76005.prototype.om$core$IInitState$ = true;
stuttaford.codex.t76005.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,categories,map75948,validate__837__auto__,ufv__,output_schema75950,input_schema75951,input_checker75952,output_checker75953,vec__75946,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-chan","search-chan",962868037),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0()], null);
});})(owner,categories,map75948,validate__837__auto__,ufv__,output_schema75950,input_schema75951,input_checker75952,output_checker75953,vec__75946,opts__24583__auto__))
;
stuttaford.codex.t76005.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,categories,map75948,validate__837__auto__,ufv__,output_schema75950,input_schema75951,input_checker75952,output_checker75953,vec__75946,opts__24583__auto__){
return (function (_76007){var self__ = this;
var _76007__$1 = this;return self__.meta76006;
});})(owner,categories,map75948,validate__837__auto__,ufv__,output_schema75950,input_schema75951,input_checker75952,output_checker75953,vec__75946,opts__24583__auto__))
;
stuttaford.codex.t76005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,categories,map75948,validate__837__auto__,ufv__,output_schema75950,input_schema75951,input_checker75952,output_checker75953,vec__75946,opts__24583__auto__){
return (function (_76007,meta76006__$1){var self__ = this;
var _76007__$1 = this;return (new stuttaford.codex.t76005(self__.G__75954,self__.map75948,self__.app_view,self__.opts__24583__auto__,self__.fnk75949,self__.owner,self__.p__75838,self__.input_checker75952,self__.input_schema75951,self__.owner75836,self__.map75947,self__.data__24582__auto__,self__.vec__75946,self__.output_schema75950,self__.categories,self__.output_checker75953,self__.validate__837__auto__,self__.ufv__,meta76006__$1));
});})(owner,categories,map75948,validate__837__auto__,ufv__,output_schema75950,input_schema75951,input_checker75952,output_checker75953,vec__75946,opts__24583__auto__))
;
stuttaford.codex.__GT_t76005 = ((function (owner,categories,map75948,validate__837__auto__,ufv__,output_schema75950,input_schema75951,input_checker75952,output_checker75953,vec__75946,opts__24583__auto__){
return (function __GT_t76005(G__75954__$1,map75948__$1,app_view__$1,opts__24583__auto____$1,fnk75949__$1,owner__$1,p__75838__$1,input_checker75952__$1,input_schema75951__$1,owner75836__$1,map75947__$1,data__24582__auto____$1,vec__75946__$1,output_schema75950__$1,categories__$1,output_checker75953__$1,validate__837__auto____$1,ufv____$1,meta76006){return (new stuttaford.codex.t76005(G__75954__$1,map75948__$1,app_view__$1,opts__24583__auto____$1,fnk75949__$1,owner__$1,p__75838__$1,input_checker75952__$1,input_schema75951__$1,owner75836__$1,map75947__$1,data__24582__auto____$1,vec__75946__$1,output_schema75950__$1,categories__$1,output_checker75953__$1,validate__837__auto____$1,ufv____$1,meta76006));
});})(owner,categories,map75948,validate__837__auto__,ufv__,output_schema75950,input_schema75951,input_checker75952,output_checker75953,vec__75946,opts__24583__auto__))
;
}
return (new stuttaford.codex.t76005(G__75954,map75948,app_view,opts__24583__auto__,fnk75949,owner,p__75838,input_checker75952,input_schema75951,owner75836,map75947,data__24582__auto__,vec__75946,output_schema75950,categories,output_checker75953,validate__837__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___76067 = (function (){var G__76052 = o__840__auto__;return (output_checker75953.cljs$core$IFn$_invoke$arity$1 ? output_checker75953.cljs$core$IFn$_invoke$arity$1(G__76052) : output_checker75953.call(null,G__76052));
})();if(cljs.core.truth_(temp__4126__auto___76067))
{var error__839__auto___76068 = temp__4126__auto___76067;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk75949","fnk75949",-459692381,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___76068], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema75950,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___76068], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema75950,input_schema75951,input_checker75952,output_checker75953,vec__75946,opts__24583__auto__))
,schema.core.make_fn_schema(output_schema75950,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema75951], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24583__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner75836,new cljs.core.Keyword(null,"data","data",-232669377),data__24582__auto__], null));
};
var app_view = function (data__24582__auto__,owner75836,var_args){
var p__75838 = null;if (arguments.length > 2) {
  p__75838 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_view__delegate.call(this,data__24582__auto__,owner75836,p__75838);};
app_view.cljs$lang$maxFixedArity = 2;
app_view.cljs$lang$applyTo = (function (arglist__76069){
var data__24582__auto__ = cljs.core.first(arglist__76069);
arglist__76069 = cljs.core.next(arglist__76069);
var owner75836 = cljs.core.first(arglist__76069);
var p__75838 = cljs.core.rest(arglist__76069);
return app_view__delegate(data__24582__auto__,owner75836,p__75838);
});
app_view.cljs$core$IFn$_invoke$arity$variadic = app_view__delegate;
return app_view;
})()
;
stuttaford.codex.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__24551__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.app_view,cursor__24551__auto__);
});
var __GT_app_view__2 = (function (cursor__24551__auto__,m75837){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.app_view,cursor__24551__auto__,m75837);
});
__GT_app_view = function(cursor__24551__auto__,m75837){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__24551__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__24551__auto__,m75837);
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