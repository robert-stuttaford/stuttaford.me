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
var tag_item__delegate = function (data__24172__auto__,owner37722,p__37724){var vec__37752 = p__37724;var opts__24173__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37752,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema37756 = schema.core.Any;var input_schema37757 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map37753","map37753",470807987,null))], null);var input_checker37758 = schema.core.checker(input_schema37757);var output_checker37759 = schema.core.checker(output_schema37756);return schema.core.schematize_fn(((function (ufv__,output_schema37756,input_schema37757,input_checker37758,output_checker37759,vec__37752,opts__24173__auto__){
return (function fnk37755(G__37760){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___37779 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37760], null);var temp__4126__auto___37780 = (function (){var G__37770 = args__838__auto___37779;return (input_checker37758.cljs$core$IFn$_invoke$arity$1 ? input_checker37758.cljs$core$IFn$_invoke$arity$1(G__37770) : input_checker37758.call(null,G__37770));
})();if(cljs.core.truth_(temp__4126__auto___37780))
{var error__839__auto___37781 = temp__4126__auto___37780;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk37755","fnk37755",17036606,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___37781], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37757,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___37779,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___37781], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map37753 = G__37760;while(true){
if(cljs.core.map_QMARK_(map37753))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map37753], 0))));
}
var map37754 = plumbing.fnk.schema.safe_get(map37753,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var name = plumbing.fnk.schema.safe_get(map37754,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map37753,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t37771 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t37771 = (function (p__37724,owner,opts__24173__auto__,owner37722,data__24172__auto__,name,input_checker37758,output_checker37759,map37753,G__37760,map37754,output_schema37756,vec__37752,validate__837__auto__,ufv__,tag_item,fnk37755,input_schema37757,meta37772){
this.p__37724 = p__37724;
this.owner = owner;
this.opts__24173__auto__ = opts__24173__auto__;
this.owner37722 = owner37722;
this.data__24172__auto__ = data__24172__auto__;
this.name = name;
this.input_checker37758 = input_checker37758;
this.output_checker37759 = output_checker37759;
this.map37753 = map37753;
this.G__37760 = G__37760;
this.map37754 = map37754;
this.output_schema37756 = output_schema37756;
this.vec__37752 = vec__37752;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.tag_item = tag_item;
this.fnk37755 = fnk37755;
this.input_schema37757 = input_schema37757;
this.meta37772 = meta37772;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t37771.cljs$lang$type = true;
stuttaford.codex.t37771.cljs$lang$ctorStr = "stuttaford.codex/t37771";
stuttaford.codex.t37771.cljs$lang$ctorPrWriter = ((function (owner,name,map37754,validate__837__auto__,ufv__,output_schema37756,input_schema37757,input_checker37758,output_checker37759,vec__37752,opts__24173__auto__){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"stuttaford.codex/t37771");
});})(owner,name,map37754,validate__837__auto__,ufv__,output_schema37756,input_schema37757,input_checker37758,output_checker37759,vec__37752,opts__24173__auto__))
;
stuttaford.codex.t37771.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t37771.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,name,map37754,validate__837__auto__,ufv__,output_schema37756,input_schema37757,input_checker37758,output_checker37759,vec__37752,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-item";
});})(owner,name,map37754,validate__837__auto__,ufv__,output_schema37756,input_schema37757,input_checker37758,output_checker37759,vec__37752,opts__24173__auto__))
;
stuttaford.codex.t37771.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t37771.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,name,map37754,validate__837__auto__,ufv__,output_schema37756,input_schema37757,input_checker37758,output_checker37759,vec__37752,opts__24173__auto__){
return (function (_,p__37774){var self__ = this;
var map__37775 = p__37774;var map__37775__$1 = ((cljs.core.seq_QMARK_(map__37775))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37775):map__37775);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37775__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var ___$1 = this;var class$ = (cljs.core.truth_((function (){var and__19325__auto__ = cljs.core.seq(search_term);if(and__19325__auto__)
{return cljs.core.re_find(stuttaford.codex.regex(search_term),self__.name);
} else
{return and__19325__auto__;
}
})())?"tag active":"tag");var G__37776 = {"className": class$, "onClick": ((function (class$,___$1,map__37775,map__37775__$1,search_term,owner,name,map37754,validate__837__auto__,ufv__,output_schema37756,input_schema37757,input_checker37758,output_checker37759,vec__37752,opts__24173__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"search-chan","search-chan",962868037)),self__.name);
});})(class$,___$1,map__37775,map__37775__$1,search_term,owner,name,map37754,validate__837__auto__,ufv__,output_schema37756,input_schema37757,input_checker37758,output_checker37759,vec__37752,opts__24173__auto__))
};var G__37777 = sablono.interpreter.interpret(self__.name);return React.DOM.a(G__37776,G__37777);
});})(owner,name,map37754,validate__837__auto__,ufv__,output_schema37756,input_schema37757,input_checker37758,output_checker37759,vec__37752,opts__24173__auto__))
;
stuttaford.codex.t37771.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,name,map37754,validate__837__auto__,ufv__,output_schema37756,input_schema37757,input_checker37758,output_checker37759,vec__37752,opts__24173__auto__){
return (function (_37773){var self__ = this;
var _37773__$1 = this;return self__.meta37772;
});})(owner,name,map37754,validate__837__auto__,ufv__,output_schema37756,input_schema37757,input_checker37758,output_checker37759,vec__37752,opts__24173__auto__))
;
stuttaford.codex.t37771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,name,map37754,validate__837__auto__,ufv__,output_schema37756,input_schema37757,input_checker37758,output_checker37759,vec__37752,opts__24173__auto__){
return (function (_37773,meta37772__$1){var self__ = this;
var _37773__$1 = this;return (new stuttaford.codex.t37771(self__.p__37724,self__.owner,self__.opts__24173__auto__,self__.owner37722,self__.data__24172__auto__,self__.name,self__.input_checker37758,self__.output_checker37759,self__.map37753,self__.G__37760,self__.map37754,self__.output_schema37756,self__.vec__37752,self__.validate__837__auto__,self__.ufv__,self__.tag_item,self__.fnk37755,self__.input_schema37757,meta37772__$1));
});})(owner,name,map37754,validate__837__auto__,ufv__,output_schema37756,input_schema37757,input_checker37758,output_checker37759,vec__37752,opts__24173__auto__))
;
stuttaford.codex.__GT_t37771 = ((function (owner,name,map37754,validate__837__auto__,ufv__,output_schema37756,input_schema37757,input_checker37758,output_checker37759,vec__37752,opts__24173__auto__){
return (function __GT_t37771(p__37724__$1,owner__$1,opts__24173__auto____$1,owner37722__$1,data__24172__auto____$1,name__$1,input_checker37758__$1,output_checker37759__$1,map37753__$1,G__37760__$1,map37754__$1,output_schema37756__$1,vec__37752__$1,validate__837__auto____$1,ufv____$1,tag_item__$1,fnk37755__$1,input_schema37757__$1,meta37772){return (new stuttaford.codex.t37771(p__37724__$1,owner__$1,opts__24173__auto____$1,owner37722__$1,data__24172__auto____$1,name__$1,input_checker37758__$1,output_checker37759__$1,map37753__$1,G__37760__$1,map37754__$1,output_schema37756__$1,vec__37752__$1,validate__837__auto____$1,ufv____$1,tag_item__$1,fnk37755__$1,input_schema37757__$1,meta37772));
});})(owner,name,map37754,validate__837__auto__,ufv__,output_schema37756,input_schema37757,input_checker37758,output_checker37759,vec__37752,opts__24173__auto__))
;
}
return (new stuttaford.codex.t37771(p__37724,owner,opts__24173__auto__,owner37722,data__24172__auto__,name,input_checker37758,output_checker37759,map37753,G__37760,map37754,output_schema37756,vec__37752,validate__837__auto__,ufv__,tag_item,fnk37755,input_schema37757,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___37782 = (function (){var G__37778 = o__840__auto__;return (output_checker37759.cljs$core$IFn$_invoke$arity$1 ? output_checker37759.cljs$core$IFn$_invoke$arity$1(G__37778) : output_checker37759.call(null,G__37778));
})();if(cljs.core.truth_(temp__4126__auto___37782))
{var error__839__auto___37783 = temp__4126__auto___37782;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk37755","fnk37755",17036606,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___37783], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37756,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___37783], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema37756,input_schema37757,input_checker37758,output_checker37759,vec__37752,opts__24173__auto__))
,schema.core.make_fn_schema(output_schema37756,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37757], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24173__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner37722,new cljs.core.Keyword(null,"data","data",-232669377),data__24172__auto__], null));
};
var tag_item = function (data__24172__auto__,owner37722,var_args){
var p__37724 = null;if (arguments.length > 2) {
  p__37724 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_item__delegate.call(this,data__24172__auto__,owner37722,p__37724);};
tag_item.cljs$lang$maxFixedArity = 2;
tag_item.cljs$lang$applyTo = (function (arglist__37784){
var data__24172__auto__ = cljs.core.first(arglist__37784);
arglist__37784 = cljs.core.next(arglist__37784);
var owner37722 = cljs.core.first(arglist__37784);
var p__37724 = cljs.core.rest(arglist__37784);
return tag_item__delegate(data__24172__auto__,owner37722,p__37724);
});
tag_item.cljs$core$IFn$_invoke$arity$variadic = tag_item__delegate;
return tag_item;
})()
;
stuttaford.codex.__GT_tag_item = (function() {
var __GT_tag_item = null;
var __GT_tag_item__1 = (function (cursor__24141__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.tag_item,cursor__24141__auto__);
});
var __GT_tag_item__2 = (function (cursor__24141__auto__,m37723){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.tag_item,cursor__24141__auto__,m37723);
});
__GT_tag_item = function(cursor__24141__auto__,m37723){
switch(arguments.length){
case 1:
return __GT_tag_item__1.call(this,cursor__24141__auto__);
case 2:
return __GT_tag_item__2.call(this,cursor__24141__auto__,m37723);
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
var link_item__delegate = function (data__24172__auto__,owner37785,p__37787){var vec__37823 = p__37787;var opts__24173__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37823,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema37827 = schema.core.Any;var input_schema37828 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"tags","tags",1771418977)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"image","image",-58725096)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"description","description",-1428560544)),schema.core.Any,new cljs.core.Keyword(null,"uri","uri",-774711847),schema.core.Any,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map37824","map37824",65708134,null))], null);var input_checker37829 = schema.core.checker(input_schema37828);var output_checker37830 = schema.core.checker(output_schema37827);return schema.core.schematize_fn(((function (ufv__,output_schema37827,input_schema37828,input_checker37829,output_checker37830,vec__37823,opts__24173__auto__){
return (function fnk37826(G__37831){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___37858 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37831], null);var temp__4126__auto___37859 = (function (){var G__37845 = args__838__auto___37858;return (input_checker37829.cljs$core$IFn$_invoke$arity$1 ? input_checker37829.cljs$core$IFn$_invoke$arity$1(G__37845) : input_checker37829.call(null,G__37845));
})();if(cljs.core.truth_(temp__4126__auto___37859))
{var error__839__auto___37860 = temp__4126__auto___37859;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk37826","fnk37826",1467237721,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___37860], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37828,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___37858,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___37860], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map37824 = G__37831;while(true){
if(cljs.core.map_QMARK_(map37824))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map37824], 0))));
}
var map37825 = plumbing.fnk.schema.safe_get(map37824,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var name = plumbing.fnk.schema.safe_get(map37825,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var uri = plumbing.fnk.schema.safe_get(map37825,new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var description = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map37825,new cljs.core.Keyword(null,"description","description",-1428560544),null);var image = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map37825,new cljs.core.Keyword(null,"image","image",-58725096),null);var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map37825,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map37824,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t37846 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t37846 = (function (uri,map37825,owner,opts__24173__auto__,map37824,description,output_schema37827,tags,input_schema37828,output_checker37830,vec__37823,owner37785,G__37831,data__24172__auto__,name,input_checker37829,p__37787,fnk37826,validate__837__auto__,ufv__,link_item,image,meta37847){
this.uri = uri;
this.map37825 = map37825;
this.owner = owner;
this.opts__24173__auto__ = opts__24173__auto__;
this.map37824 = map37824;
this.description = description;
this.output_schema37827 = output_schema37827;
this.tags = tags;
this.input_schema37828 = input_schema37828;
this.output_checker37830 = output_checker37830;
this.vec__37823 = vec__37823;
this.owner37785 = owner37785;
this.G__37831 = G__37831;
this.data__24172__auto__ = data__24172__auto__;
this.name = name;
this.input_checker37829 = input_checker37829;
this.p__37787 = p__37787;
this.fnk37826 = fnk37826;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.link_item = link_item;
this.image = image;
this.meta37847 = meta37847;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t37846.cljs$lang$type = true;
stuttaford.codex.t37846.cljs$lang$ctorStr = "stuttaford.codex/t37846";
stuttaford.codex.t37846.cljs$lang$ctorPrWriter = ((function (owner,tags,image,description,uri,name,map37825,validate__837__auto__,ufv__,output_schema37827,input_schema37828,input_checker37829,output_checker37830,vec__37823,opts__24173__auto__){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"stuttaford.codex/t37846");
});})(owner,tags,image,description,uri,name,map37825,validate__837__auto__,ufv__,output_schema37827,input_schema37828,input_checker37829,output_checker37830,vec__37823,opts__24173__auto__))
;
stuttaford.codex.t37846.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t37846.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,tags,image,description,uri,name,map37825,validate__837__auto__,ufv__,output_schema37827,input_schema37828,input_checker37829,output_checker37830,vec__37823,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "link-item";
});})(owner,tags,image,description,uri,name,map37825,validate__837__auto__,ufv__,output_schema37827,input_schema37828,input_checker37829,output_checker37830,vec__37823,opts__24173__auto__))
;
stuttaford.codex.t37846.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t37846.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,tags,image,description,uri,name,map37825,validate__837__auto__,ufv__,output_schema37827,input_schema37828,input_checker37829,output_checker37830,vec__37823,opts__24173__auto__){
return (function (_,p__37849){var self__ = this;
var map__37850 = p__37849;var map__37850__$1 = ((cljs.core.seq_QMARK_(map__37850))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37850):map__37850);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37850__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var ___$1 = this;var G__37851 = {"className": "link"};var G__37852 = (function (){var G__37854 = {"href": self__.uri};var G__37855 = sablono.interpreter.interpret(self__.name);return React.DOM.a(G__37854,G__37855);
})();var G__37853 = sablono.interpreter.interpret(om.core.build_all.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.tag_item,(function (){var G__37856 = self__.tags;return (stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1 ? stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1(G__37856) : stuttaford.codex.name_sort.call(null,G__37856));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177)], null)));return React.DOM.li(G__37851,G__37852,G__37853);
});})(owner,tags,image,description,uri,name,map37825,validate__837__auto__,ufv__,output_schema37827,input_schema37828,input_checker37829,output_checker37830,vec__37823,opts__24173__auto__))
;
stuttaford.codex.t37846.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,tags,image,description,uri,name,map37825,validate__837__auto__,ufv__,output_schema37827,input_schema37828,input_checker37829,output_checker37830,vec__37823,opts__24173__auto__){
return (function (_37848){var self__ = this;
var _37848__$1 = this;return self__.meta37847;
});})(owner,tags,image,description,uri,name,map37825,validate__837__auto__,ufv__,output_schema37827,input_schema37828,input_checker37829,output_checker37830,vec__37823,opts__24173__auto__))
;
stuttaford.codex.t37846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,tags,image,description,uri,name,map37825,validate__837__auto__,ufv__,output_schema37827,input_schema37828,input_checker37829,output_checker37830,vec__37823,opts__24173__auto__){
return (function (_37848,meta37847__$1){var self__ = this;
var _37848__$1 = this;return (new stuttaford.codex.t37846(self__.uri,self__.map37825,self__.owner,self__.opts__24173__auto__,self__.map37824,self__.description,self__.output_schema37827,self__.tags,self__.input_schema37828,self__.output_checker37830,self__.vec__37823,self__.owner37785,self__.G__37831,self__.data__24172__auto__,self__.name,self__.input_checker37829,self__.p__37787,self__.fnk37826,self__.validate__837__auto__,self__.ufv__,self__.link_item,self__.image,meta37847__$1));
});})(owner,tags,image,description,uri,name,map37825,validate__837__auto__,ufv__,output_schema37827,input_schema37828,input_checker37829,output_checker37830,vec__37823,opts__24173__auto__))
;
stuttaford.codex.__GT_t37846 = ((function (owner,tags,image,description,uri,name,map37825,validate__837__auto__,ufv__,output_schema37827,input_schema37828,input_checker37829,output_checker37830,vec__37823,opts__24173__auto__){
return (function __GT_t37846(uri__$1,map37825__$1,owner__$1,opts__24173__auto____$1,map37824__$1,description__$1,output_schema37827__$1,tags__$1,input_schema37828__$1,output_checker37830__$1,vec__37823__$1,owner37785__$1,G__37831__$1,data__24172__auto____$1,name__$1,input_checker37829__$1,p__37787__$1,fnk37826__$1,validate__837__auto____$1,ufv____$1,link_item__$1,image__$1,meta37847){return (new stuttaford.codex.t37846(uri__$1,map37825__$1,owner__$1,opts__24173__auto____$1,map37824__$1,description__$1,output_schema37827__$1,tags__$1,input_schema37828__$1,output_checker37830__$1,vec__37823__$1,owner37785__$1,G__37831__$1,data__24172__auto____$1,name__$1,input_checker37829__$1,p__37787__$1,fnk37826__$1,validate__837__auto____$1,ufv____$1,link_item__$1,image__$1,meta37847));
});})(owner,tags,image,description,uri,name,map37825,validate__837__auto__,ufv__,output_schema37827,input_schema37828,input_checker37829,output_checker37830,vec__37823,opts__24173__auto__))
;
}
return (new stuttaford.codex.t37846(uri,map37825,owner,opts__24173__auto__,map37824,description,output_schema37827,tags,input_schema37828,output_checker37830,vec__37823,owner37785,G__37831,data__24172__auto__,name,input_checker37829,p__37787,fnk37826,validate__837__auto__,ufv__,link_item,image,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___37861 = (function (){var G__37857 = o__840__auto__;return (output_checker37830.cljs$core$IFn$_invoke$arity$1 ? output_checker37830.cljs$core$IFn$_invoke$arity$1(G__37857) : output_checker37830.call(null,G__37857));
})();if(cljs.core.truth_(temp__4126__auto___37861))
{var error__839__auto___37862 = temp__4126__auto___37861;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk37826","fnk37826",1467237721,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___37862], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37827,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___37862], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema37827,input_schema37828,input_checker37829,output_checker37830,vec__37823,opts__24173__auto__))
,schema.core.make_fn_schema(output_schema37827,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37828], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24173__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner37785,new cljs.core.Keyword(null,"data","data",-232669377),data__24172__auto__], null));
};
var link_item = function (data__24172__auto__,owner37785,var_args){
var p__37787 = null;if (arguments.length > 2) {
  p__37787 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return link_item__delegate.call(this,data__24172__auto__,owner37785,p__37787);};
link_item.cljs$lang$maxFixedArity = 2;
link_item.cljs$lang$applyTo = (function (arglist__37863){
var data__24172__auto__ = cljs.core.first(arglist__37863);
arglist__37863 = cljs.core.next(arglist__37863);
var owner37785 = cljs.core.first(arglist__37863);
var p__37787 = cljs.core.rest(arglist__37863);
return link_item__delegate(data__24172__auto__,owner37785,p__37787);
});
link_item.cljs$core$IFn$_invoke$arity$variadic = link_item__delegate;
return link_item;
})()
;
stuttaford.codex.__GT_link_item = (function() {
var __GT_link_item = null;
var __GT_link_item__1 = (function (cursor__24141__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.link_item,cursor__24141__auto__);
});
var __GT_link_item__2 = (function (cursor__24141__auto__,m37786){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.link_item,cursor__24141__auto__,m37786);
});
__GT_link_item = function(cursor__24141__auto__,m37786){
switch(arguments.length){
case 1:
return __GT_link_item__1.call(this,cursor__24141__auto__);
case 2:
return __GT_link_item__2.call(this,cursor__24141__auto__,m37786);
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
var category_item__delegate = function (data__24172__auto__,owner37864,p__37866){var vec__37901 = p__37866;var opts__24173__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37901,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema37904 = schema.core.Any;var input_schema37905 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"links","links",-654507394),schema.core.Any,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map37902","map37902",143957385,null))], null);var input_checker37906 = schema.core.checker(input_schema37905);var output_checker37907 = schema.core.checker(output_schema37904);return schema.core.schematize_fn(((function (ufv__,output_schema37904,input_schema37905,input_checker37906,output_checker37907,vec__37901,opts__24173__auto__){
return (function fnk37903(G__37908){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___37935 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37908], null);var temp__4126__auto___37936 = (function (){var G__37922 = args__838__auto___37935;return (input_checker37906.cljs$core$IFn$_invoke$arity$1 ? input_checker37906.cljs$core$IFn$_invoke$arity$1(G__37922) : input_checker37906.call(null,G__37922));
})();if(cljs.core.truth_(temp__4126__auto___37936))
{var error__839__auto___37937 = temp__4126__auto___37936;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk37903","fnk37903",-39002956,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___37937], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37905,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___37935,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___37937], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map37902 = G__37908;while(true){
if(cljs.core.map_QMARK_(map37902))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map37902], 0))));
}
var data = plumbing.fnk.schema.safe_get(map37902,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var name = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var links = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map37902,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t37923 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t37923 = (function (owner,links,opts__24173__auto__,data,map37902,p__37866,output_schema37904,data__24172__auto__,name,output_checker37907,vec__37901,fnk37903,input_schema37905,G__37908,owner37864,category_item,validate__837__auto__,ufv__,input_checker37906,meta37924){
this.owner = owner;
this.links = links;
this.opts__24173__auto__ = opts__24173__auto__;
this.data = data;
this.map37902 = map37902;
this.p__37866 = p__37866;
this.output_schema37904 = output_schema37904;
this.data__24172__auto__ = data__24172__auto__;
this.name = name;
this.output_checker37907 = output_checker37907;
this.vec__37901 = vec__37901;
this.fnk37903 = fnk37903;
this.input_schema37905 = input_schema37905;
this.G__37908 = G__37908;
this.owner37864 = owner37864;
this.category_item = category_item;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.input_checker37906 = input_checker37906;
this.meta37924 = meta37924;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t37923.cljs$lang$type = true;
stuttaford.codex.t37923.cljs$lang$ctorStr = "stuttaford.codex/t37923";
stuttaford.codex.t37923.cljs$lang$ctorPrWriter = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema37904,input_schema37905,input_checker37906,output_checker37907,vec__37901,opts__24173__auto__){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"stuttaford.codex/t37923");
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema37904,input_schema37905,input_checker37906,output_checker37907,vec__37901,opts__24173__auto__))
;
stuttaford.codex.t37923.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t37923.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema37904,input_schema37905,input_checker37906,output_checker37907,vec__37901,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "category-item";
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema37904,input_schema37905,input_checker37906,output_checker37907,vec__37901,opts__24173__auto__))
;
stuttaford.codex.t37923.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t37923.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema37904,input_schema37905,input_checker37906,output_checker37907,vec__37901,opts__24173__auto__){
return (function (_,p__37926){var self__ = this;
var map__37927 = p__37926;var map__37927__$1 = ((cljs.core.seq_QMARK_(map__37927))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37927):map__37927);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37927__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var ___$1 = this;var temp__4126__auto__ = cljs.core.seq((function (){var G__37928 = stuttaford.codex.search_items(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"tags-string","tags-string",-736299316)], null),search_term,self__.links);return (stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1 ? stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1(G__37928) : stuttaford.codex.name_sort.call(null,G__37928));
})());if(temp__4126__auto__)
{var links__$2 = temp__4126__auto__;var G__37931 = null;var G__37932 = (function (){var attrs37929 = self__.name;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs37929))?sablono.interpreter.attributes(attrs37929):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37929))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37929)], null))));
})();var G__37933 = (function (){var attrs37930 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.link_item,links__$2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177)], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.ul,((cljs.core.map_QMARK_(attrs37930))?sablono.interpreter.attributes(attrs37930):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37930))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37930)], null))));
})();return React.DOM.div(G__37931,G__37932,G__37933);
} else
{return null;
}
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema37904,input_schema37905,input_checker37906,output_checker37907,vec__37901,opts__24173__auto__))
;
stuttaford.codex.t37923.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema37904,input_schema37905,input_checker37906,output_checker37907,vec__37901,opts__24173__auto__){
return (function (_37925){var self__ = this;
var _37925__$1 = this;return self__.meta37924;
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema37904,input_schema37905,input_checker37906,output_checker37907,vec__37901,opts__24173__auto__))
;
stuttaford.codex.t37923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema37904,input_schema37905,input_checker37906,output_checker37907,vec__37901,opts__24173__auto__){
return (function (_37925,meta37924__$1){var self__ = this;
var _37925__$1 = this;return (new stuttaford.codex.t37923(self__.owner,self__.links,self__.opts__24173__auto__,self__.data,self__.map37902,self__.p__37866,self__.output_schema37904,self__.data__24172__auto__,self__.name,self__.output_checker37907,self__.vec__37901,self__.fnk37903,self__.input_schema37905,self__.G__37908,self__.owner37864,self__.category_item,self__.validate__837__auto__,self__.ufv__,self__.input_checker37906,meta37924__$1));
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema37904,input_schema37905,input_checker37906,output_checker37907,vec__37901,opts__24173__auto__))
;
stuttaford.codex.__GT_t37923 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema37904,input_schema37905,input_checker37906,output_checker37907,vec__37901,opts__24173__auto__){
return (function __GT_t37923(owner__$1,links__$1,opts__24173__auto____$1,data__$1,map37902__$1,p__37866__$1,output_schema37904__$1,data__24172__auto____$1,name__$1,output_checker37907__$1,vec__37901__$1,fnk37903__$1,input_schema37905__$1,G__37908__$1,owner37864__$1,category_item__$1,validate__837__auto____$1,ufv____$1,input_checker37906__$1,meta37924){return (new stuttaford.codex.t37923(owner__$1,links__$1,opts__24173__auto____$1,data__$1,map37902__$1,p__37866__$1,output_schema37904__$1,data__24172__auto____$1,name__$1,output_checker37907__$1,vec__37901__$1,fnk37903__$1,input_schema37905__$1,G__37908__$1,owner37864__$1,category_item__$1,validate__837__auto____$1,ufv____$1,input_checker37906__$1,meta37924));
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema37904,input_schema37905,input_checker37906,output_checker37907,vec__37901,opts__24173__auto__))
;
}
return (new stuttaford.codex.t37923(owner,links,opts__24173__auto__,data,map37902,p__37866,output_schema37904,data__24172__auto__,name,output_checker37907,vec__37901,fnk37903,input_schema37905,G__37908,owner37864,category_item,validate__837__auto__,ufv__,input_checker37906,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___37938 = (function (){var G__37934 = o__840__auto__;return (output_checker37907.cljs$core$IFn$_invoke$arity$1 ? output_checker37907.cljs$core$IFn$_invoke$arity$1(G__37934) : output_checker37907.call(null,G__37934));
})();if(cljs.core.truth_(temp__4126__auto___37938))
{var error__839__auto___37939 = temp__4126__auto___37938;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk37903","fnk37903",-39002956,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___37939], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37904,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___37939], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema37904,input_schema37905,input_checker37906,output_checker37907,vec__37901,opts__24173__auto__))
,schema.core.make_fn_schema(output_schema37904,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37905], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24173__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner37864,new cljs.core.Keyword(null,"data","data",-232669377),data__24172__auto__], null));
};
var category_item = function (data__24172__auto__,owner37864,var_args){
var p__37866 = null;if (arguments.length > 2) {
  p__37866 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return category_item__delegate.call(this,data__24172__auto__,owner37864,p__37866);};
category_item.cljs$lang$maxFixedArity = 2;
category_item.cljs$lang$applyTo = (function (arglist__37940){
var data__24172__auto__ = cljs.core.first(arglist__37940);
arglist__37940 = cljs.core.next(arglist__37940);
var owner37864 = cljs.core.first(arglist__37940);
var p__37866 = cljs.core.rest(arglist__37940);
return category_item__delegate(data__24172__auto__,owner37864,p__37866);
});
category_item.cljs$core$IFn$_invoke$arity$variadic = category_item__delegate;
return category_item;
})()
;
stuttaford.codex.__GT_category_item = (function() {
var __GT_category_item = null;
var __GT_category_item__1 = (function (cursor__24141__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.category_item,cursor__24141__auto__);
});
var __GT_category_item__2 = (function (cursor__24141__auto__,m37865){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.category_item,cursor__24141__auto__,m37865);
});
__GT_category_item = function(cursor__24141__auto__,m37865){
switch(arguments.length){
case 1:
return __GT_category_item__1.call(this,cursor__24141__auto__);
case 2:
return __GT_category_item__2.call(this,cursor__24141__auto__,m37865);
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
var app_view__delegate = function (data__24172__auto__,owner37942,p__37944){var vec__38052 = p__37944;var opts__24173__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38052,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema38056 = schema.core.Any;var input_schema38057 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"categories","categories",178386610),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map38053","map38053",1787616965,null))], null);var input_checker38058 = schema.core.checker(input_schema38057);var output_checker38059 = schema.core.checker(output_schema38056);return schema.core.schematize_fn(((function (ufv__,output_schema38056,input_schema38057,input_checker38058,output_checker38059,vec__38052,opts__24173__auto__){
return (function fnk38055(G__38060){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38159 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38060], null);var temp__4126__auto___38160 = (function (){var G__38110 = args__838__auto___38159;return (input_checker38058.cljs$core$IFn$_invoke$arity$1 ? input_checker38058.cljs$core$IFn$_invoke$arity$1(G__38110) : input_checker38058.call(null,G__38110));
})();if(cljs.core.truth_(temp__4126__auto___38160))
{var error__839__auto___38161 = temp__4126__auto___38160;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk38055","fnk38055",1369836601,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38161], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38057,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38159,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38161], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map38053 = G__38060;while(true){
if(cljs.core.map_QMARK_(map38053))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map38053], 0))));
}
var map38054 = plumbing.fnk.schema.safe_get(map38053,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var categories = plumbing.fnk.schema.safe_get(map38054,new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map38053,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t38111 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t38111 = (function (app_view,owner,opts__24173__auto__,map38053,input_checker38058,map38054,G__38060,data__24172__auto__,vec__38052,fnk38055,owner37942,categories,validate__837__auto__,output_checker38059,p__37944,output_schema38056,ufv__,input_schema38057,meta38112){
this.app_view = app_view;
this.owner = owner;
this.opts__24173__auto__ = opts__24173__auto__;
this.map38053 = map38053;
this.input_checker38058 = input_checker38058;
this.map38054 = map38054;
this.G__38060 = G__38060;
this.data__24172__auto__ = data__24172__auto__;
this.vec__38052 = vec__38052;
this.fnk38055 = fnk38055;
this.owner37942 = owner37942;
this.categories = categories;
this.validate__837__auto__ = validate__837__auto__;
this.output_checker38059 = output_checker38059;
this.p__37944 = p__37944;
this.output_schema38056 = output_schema38056;
this.ufv__ = ufv__;
this.input_schema38057 = input_schema38057;
this.meta38112 = meta38112;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t38111.cljs$lang$type = true;
stuttaford.codex.t38111.cljs$lang$ctorStr = "stuttaford.codex/t38111";
stuttaford.codex.t38111.cljs$lang$ctorPrWriter = ((function (owner,categories,map38054,validate__837__auto__,ufv__,output_schema38056,input_schema38057,input_checker38058,output_checker38059,vec__38052,opts__24173__auto__){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"stuttaford.codex/t38111");
});})(owner,categories,map38054,validate__837__auto__,ufv__,output_schema38056,input_schema38057,input_checker38058,output_checker38059,vec__38052,opts__24173__auto__))
;
stuttaford.codex.t38111.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t38111.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,categories,map38054,validate__837__auto__,ufv__,output_schema38056,input_schema38057,input_checker38058,output_checker38059,vec__38052,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "app-view";
});})(owner,categories,map38054,validate__837__auto__,ufv__,output_schema38056,input_schema38057,input_checker38058,output_checker38059,vec__38052,opts__24173__auto__))
;
stuttaford.codex.t38111.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t38111.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,categories,map38054,validate__837__auto__,ufv__,output_schema38056,input_schema38057,input_checker38058,output_checker38059,vec__38052,opts__24173__auto__){
return (function (_,p__38114){var self__ = this;
var map__38115 = p__38114;var map__38115__$1 = ((cljs.core.seq_QMARK_(map__38115))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38115):map__38115);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38115__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var search_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38115__$1,new cljs.core.Keyword(null,"search-chan","search-chan",962868037));var ___$1 = this;var G__38116 = null;var G__38117 = (function (){var G__38119 = {"id": "search", "type": "text", "placeholder": "Search for link", "autoFocus": "autofocus", "value": search_term, "onChange": ((function (G__38116,___$1,map__38115,map__38115__$1,search_term,search_chan,owner,categories,map38054,validate__837__auto__,ufv__,output_schema38056,input_schema38057,input_checker38058,output_checker38059,vec__38052,opts__24173__auto__){
return (function (p1__37941_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(search_chan,p1__37941_SHARP_.target.value);
});})(G__38116,___$1,map__38115,map__38115__$1,search_term,search_chan,owner,categories,map38054,validate__837__auto__,ufv__,output_schema38056,input_schema38057,input_checker38058,output_checker38059,vec__38052,opts__24173__auto__))
};return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__38119) : sablono.interpreter.input.call(null,G__38119));
})();var G__38118 = sablono.interpreter.interpret(om.core.build_all.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.category_item,(function (){var G__38120 = self__.categories;return (stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1 ? stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1(G__38120) : stuttaford.codex.name_sort.call(null,G__38120));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177)], null)));return React.DOM.div(G__38116,G__38117,G__38118);
});})(owner,categories,map38054,validate__837__auto__,ufv__,output_schema38056,input_schema38057,input_checker38058,output_checker38059,vec__38052,opts__24173__auto__))
;
stuttaford.codex.t38111.prototype.om$core$IWillMount$ = true;
stuttaford.codex.t38111.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (owner,categories,map38054,validate__837__auto__,ufv__,output_schema38056,input_schema38057,input_checker38058,output_checker38059,vec__38052,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var search_chan = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"search-chan","search-chan",962868037));var c__22717__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22717__auto__,search_chan,___$1,owner,categories,map38054,validate__837__auto__,ufv__,output_schema38056,input_schema38057,input_checker38058,output_checker38059,vec__38052,opts__24173__auto__){
return (function (){var f__22718__auto__ = (function (){var switch__22702__auto__ = ((function (c__22717__auto__,search_chan,___$1,owner,categories,map38054,validate__837__auto__,ufv__,output_schema38056,input_schema38057,input_checker38058,output_checker38059,vec__38052,opts__24173__auto__){
return (function (state_38137){var state_val_38138 = (state_38137[(1)]);if((state_val_38138 === (7)))
{var inst_38124 = (state_38137[(7)]);var inst_38124__$1 = (state_38137[(2)]);var state_38137__$1 = (function (){var statearr_38139 = state_38137;(statearr_38139[(7)] = inst_38124__$1);
return statearr_38139;
})();if(cljs.core.truth_(inst_38124__$1))
{var statearr_38140_38162 = state_38137__$1;(statearr_38140_38162[(1)] = (8));
} else
{var statearr_38141_38163 = state_38137__$1;(statearr_38141_38163[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38138 === (1)))
{var state_38137__$1 = state_38137;var statearr_38142_38164 = state_38137__$1;(statearr_38142_38164[(2)] = null);
(statearr_38142_38164[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38138 === (4)))
{var state_38137__$1 = state_38137;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38137__$1,(7),search_chan);
} else
{if((state_val_38138 === (6)))
{var inst_38133 = (state_38137[(2)]);var state_38137__$1 = state_38137;var statearr_38143_38165 = state_38137__$1;(statearr_38143_38165[(2)] = inst_38133);
(statearr_38143_38165[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38138 === (3)))
{var inst_38135 = (state_38137[(2)]);var state_38137__$1 = state_38137;return cljs.core.async.impl.ioc_helpers.return_chan(state_38137__$1,inst_38135);
} else
{if((state_val_38138 === (2)))
{var state_38137__$1 = state_38137;var statearr_38144_38166 = state_38137__$1;(statearr_38144_38166[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38138 === (9)))
{var state_38137__$1 = state_38137;var statearr_38146_38167 = state_38137__$1;(statearr_38146_38167[(2)] = null);
(statearr_38146_38167[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38138 === (5)))
{var state_38137__$1 = state_38137;var statearr_38147_38168 = state_38137__$1;(statearr_38147_38168[(2)] = null);
(statearr_38147_38168[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38138 === (10)))
{var inst_38129 = (state_38137[(2)]);var state_38137__$1 = (function (){var statearr_38148 = state_38137;(statearr_38148[(8)] = inst_38129);
return statearr_38148;
})();var statearr_38149_38169 = state_38137__$1;(statearr_38149_38169[(2)] = null);
(statearr_38149_38169[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38138 === (8)))
{var inst_38124 = (state_38137[(7)]);var inst_38126 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"search-term","search-term",356193544),inst_38124);var state_38137__$1 = state_38137;var statearr_38150_38170 = state_38137__$1;(statearr_38150_38170[(2)] = inst_38126);
(statearr_38150_38170[(1)] = (10));
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
});})(c__22717__auto__,search_chan,___$1,owner,categories,map38054,validate__837__auto__,ufv__,output_schema38056,input_schema38057,input_checker38058,output_checker38059,vec__38052,opts__24173__auto__))
;return ((function (switch__22702__auto__,c__22717__auto__,search_chan,___$1,owner,categories,map38054,validate__837__auto__,ufv__,output_schema38056,input_schema38057,input_checker38058,output_checker38059,vec__38052,opts__24173__auto__){
return (function() {
var state_machine__22703__auto__ = null;
var state_machine__22703__auto____0 = (function (){var statearr_38154 = [null,null,null,null,null,null,null,null,null];(statearr_38154[(0)] = state_machine__22703__auto__);
(statearr_38154[(1)] = (1));
return statearr_38154;
});
var state_machine__22703__auto____1 = (function (state_38137){while(true){
var ret_value__22704__auto__ = (function (){try{while(true){
var result__22705__auto__ = switch__22702__auto__(state_38137);if(cljs.core.keyword_identical_QMARK_(result__22705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22705__auto__;
}
break;
}
}catch (e38155){if((e38155 instanceof Object))
{var ex__22706__auto__ = e38155;var statearr_38156_38171 = state_38137;(statearr_38156_38171[(5)] = ex__22706__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38137);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38155;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38172 = state_38137;
state_38137 = G__38172;
continue;
}
} else
{return ret_value__22704__auto__;
}
break;
}
});
state_machine__22703__auto__ = function(state_38137){
switch(arguments.length){
case 0:
return state_machine__22703__auto____0.call(this);
case 1:
return state_machine__22703__auto____1.call(this,state_38137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22703__auto____0;
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22703__auto____1;
return state_machine__22703__auto__;
})()
;})(switch__22702__auto__,c__22717__auto__,search_chan,___$1,owner,categories,map38054,validate__837__auto__,ufv__,output_schema38056,input_schema38057,input_checker38058,output_checker38059,vec__38052,opts__24173__auto__))
})();var state__22719__auto__ = (function (){var statearr_38157 = (function (){return (f__22718__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22718__auto__.cljs$core$IFn$_invoke$arity$0() : f__22718__auto__.call(null));
})();(statearr_38157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22717__auto__);
return statearr_38157;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22719__auto__);
});})(c__22717__auto__,search_chan,___$1,owner,categories,map38054,validate__837__auto__,ufv__,output_schema38056,input_schema38057,input_checker38058,output_checker38059,vec__38052,opts__24173__auto__))
);
return c__22717__auto__;
});})(owner,categories,map38054,validate__837__auto__,ufv__,output_schema38056,input_schema38057,input_checker38058,output_checker38059,vec__38052,opts__24173__auto__))
;
stuttaford.codex.t38111.prototype.om$core$IInitState$ = true;
stuttaford.codex.t38111.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,categories,map38054,validate__837__auto__,ufv__,output_schema38056,input_schema38057,input_checker38058,output_checker38059,vec__38052,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-chan","search-chan",962868037),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0()], null);
});})(owner,categories,map38054,validate__837__auto__,ufv__,output_schema38056,input_schema38057,input_checker38058,output_checker38059,vec__38052,opts__24173__auto__))
;
stuttaford.codex.t38111.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,categories,map38054,validate__837__auto__,ufv__,output_schema38056,input_schema38057,input_checker38058,output_checker38059,vec__38052,opts__24173__auto__){
return (function (_38113){var self__ = this;
var _38113__$1 = this;return self__.meta38112;
});})(owner,categories,map38054,validate__837__auto__,ufv__,output_schema38056,input_schema38057,input_checker38058,output_checker38059,vec__38052,opts__24173__auto__))
;
stuttaford.codex.t38111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,categories,map38054,validate__837__auto__,ufv__,output_schema38056,input_schema38057,input_checker38058,output_checker38059,vec__38052,opts__24173__auto__){
return (function (_38113,meta38112__$1){var self__ = this;
var _38113__$1 = this;return (new stuttaford.codex.t38111(self__.app_view,self__.owner,self__.opts__24173__auto__,self__.map38053,self__.input_checker38058,self__.map38054,self__.G__38060,self__.data__24172__auto__,self__.vec__38052,self__.fnk38055,self__.owner37942,self__.categories,self__.validate__837__auto__,self__.output_checker38059,self__.p__37944,self__.output_schema38056,self__.ufv__,self__.input_schema38057,meta38112__$1));
});})(owner,categories,map38054,validate__837__auto__,ufv__,output_schema38056,input_schema38057,input_checker38058,output_checker38059,vec__38052,opts__24173__auto__))
;
stuttaford.codex.__GT_t38111 = ((function (owner,categories,map38054,validate__837__auto__,ufv__,output_schema38056,input_schema38057,input_checker38058,output_checker38059,vec__38052,opts__24173__auto__){
return (function __GT_t38111(app_view__$1,owner__$1,opts__24173__auto____$1,map38053__$1,input_checker38058__$1,map38054__$1,G__38060__$1,data__24172__auto____$1,vec__38052__$1,fnk38055__$1,owner37942__$1,categories__$1,validate__837__auto____$1,output_checker38059__$1,p__37944__$1,output_schema38056__$1,ufv____$1,input_schema38057__$1,meta38112){return (new stuttaford.codex.t38111(app_view__$1,owner__$1,opts__24173__auto____$1,map38053__$1,input_checker38058__$1,map38054__$1,G__38060__$1,data__24172__auto____$1,vec__38052__$1,fnk38055__$1,owner37942__$1,categories__$1,validate__837__auto____$1,output_checker38059__$1,p__37944__$1,output_schema38056__$1,ufv____$1,input_schema38057__$1,meta38112));
});})(owner,categories,map38054,validate__837__auto__,ufv__,output_schema38056,input_schema38057,input_checker38058,output_checker38059,vec__38052,opts__24173__auto__))
;
}
return (new stuttaford.codex.t38111(app_view,owner,opts__24173__auto__,map38053,input_checker38058,map38054,G__38060,data__24172__auto__,vec__38052,fnk38055,owner37942,categories,validate__837__auto__,output_checker38059,p__37944,output_schema38056,ufv__,input_schema38057,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38173 = (function (){var G__38158 = o__840__auto__;return (output_checker38059.cljs$core$IFn$_invoke$arity$1 ? output_checker38059.cljs$core$IFn$_invoke$arity$1(G__38158) : output_checker38059.call(null,G__38158));
})();if(cljs.core.truth_(temp__4126__auto___38173))
{var error__839__auto___38174 = temp__4126__auto___38173;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk38055","fnk38055",1369836601,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38174], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38056,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38174], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema38056,input_schema38057,input_checker38058,output_checker38059,vec__38052,opts__24173__auto__))
,schema.core.make_fn_schema(output_schema38056,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38057], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24173__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner37942,new cljs.core.Keyword(null,"data","data",-232669377),data__24172__auto__], null));
};
var app_view = function (data__24172__auto__,owner37942,var_args){
var p__37944 = null;if (arguments.length > 2) {
  p__37944 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_view__delegate.call(this,data__24172__auto__,owner37942,p__37944);};
app_view.cljs$lang$maxFixedArity = 2;
app_view.cljs$lang$applyTo = (function (arglist__38175){
var data__24172__auto__ = cljs.core.first(arglist__38175);
arglist__38175 = cljs.core.next(arglist__38175);
var owner37942 = cljs.core.first(arglist__38175);
var p__37944 = cljs.core.rest(arglist__38175);
return app_view__delegate(data__24172__auto__,owner37942,p__37944);
});
app_view.cljs$core$IFn$_invoke$arity$variadic = app_view__delegate;
return app_view;
})()
;
stuttaford.codex.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__24141__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.app_view,cursor__24141__auto__);
});
var __GT_app_view__2 = (function (cursor__24141__auto__,m37943){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.app_view,cursor__24141__auto__,m37943);
});
__GT_app_view = function(cursor__24141__auto__,m37943){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__24141__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__24141__auto__,m37943);
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