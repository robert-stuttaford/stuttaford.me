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
var tag_item__delegate = function (data__24144__auto__,owner74966,p__74968){var vec__75022 = p__74968;var opts__24145__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75022,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema75026 = schema.core.Any;var input_schema75027 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map75023","map75023",-1562984453,null))], null);var input_checker75028 = schema.core.checker(input_schema75027);var output_checker75029 = schema.core.checker(output_schema75026);return schema.core.schematize_fn(((function (ufv__,output_schema75026,input_schema75027,input_checker75028,output_checker75029,vec__75022,opts__24145__auto__){
return (function fnk75025(G__75030){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___75112 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__75030], null);var temp__4126__auto___75113 = (function (){var G__75051 = args__838__auto___75112;return (input_checker75028.cljs$core$IFn$_invoke$arity$1 ? input_checker75028.cljs$core$IFn$_invoke$arity$1(G__75051) : input_checker75028.call(null,G__75051));
})();if(cljs.core.truth_(temp__4126__auto___75113))
{var error__839__auto___75117 = temp__4126__auto___75113;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk75025","fnk75025",361729308,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75117], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema75027,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___75112,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75117], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map75023 = G__75030;while(true){
if(cljs.core.map_QMARK_(map75023))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map75023], 0))));
}
var map75024 = plumbing.fnk.schema.safe_get(map75023,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var name = plumbing.fnk.schema.safe_get(map75024,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map75023,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t75060 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t75060 = (function (G__75030,owner,data__24144__auto__,opts__24145__auto__,output_checker75029,p__74968,name,input_checker75028,vec__75022,input_schema75027,owner74966,validate__837__auto__,map75023,fnk75025,output_schema75026,map75024,ufv__,tag_item,meta75061){
this.G__75030 = G__75030;
this.owner = owner;
this.data__24144__auto__ = data__24144__auto__;
this.opts__24145__auto__ = opts__24145__auto__;
this.output_checker75029 = output_checker75029;
this.p__74968 = p__74968;
this.name = name;
this.input_checker75028 = input_checker75028;
this.vec__75022 = vec__75022;
this.input_schema75027 = input_schema75027;
this.owner74966 = owner74966;
this.validate__837__auto__ = validate__837__auto__;
this.map75023 = map75023;
this.fnk75025 = fnk75025;
this.output_schema75026 = output_schema75026;
this.map75024 = map75024;
this.ufv__ = ufv__;
this.tag_item = tag_item;
this.meta75061 = meta75061;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t75060.cljs$lang$type = true;
stuttaford.codex.t75060.cljs$lang$ctorStr = "stuttaford.codex/t75060";
stuttaford.codex.t75060.cljs$lang$ctorPrWriter = ((function (owner,name,map75024,validate__837__auto__,ufv__,output_schema75026,input_schema75027,input_checker75028,output_checker75029,vec__75022,opts__24145__auto__){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"stuttaford.codex/t75060");
});})(owner,name,map75024,validate__837__auto__,ufv__,output_schema75026,input_schema75027,input_checker75028,output_checker75029,vec__75022,opts__24145__auto__))
;
stuttaford.codex.t75060.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t75060.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,name,map75024,validate__837__auto__,ufv__,output_schema75026,input_schema75027,input_checker75028,output_checker75029,vec__75022,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-item";
});})(owner,name,map75024,validate__837__auto__,ufv__,output_schema75026,input_schema75027,input_checker75028,output_checker75029,vec__75022,opts__24145__auto__))
;
stuttaford.codex.t75060.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t75060.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,name,map75024,validate__837__auto__,ufv__,output_schema75026,input_schema75027,input_checker75028,output_checker75029,vec__75022,opts__24145__auto__){
return (function (_,p__75064){var self__ = this;
var map__75065 = p__75064;var map__75065__$1 = ((cljs.core.seq_QMARK_(map__75065))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75065):map__75065);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75065__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var ___$1 = this;var class$ = (cljs.core.truth_((function (){var and__19267__auto__ = cljs.core.seq(search_term);if(and__19267__auto__)
{return cljs.core.re_find(stuttaford.codex.regex(search_term),self__.name);
} else
{return and__19267__auto__;
}
})())?"tag active":"tag");var G__75069 = {"className": class$, "onClick": ((function (class$,___$1,map__75065,map__75065__$1,search_term,owner,name,map75024,validate__837__auto__,ufv__,output_schema75026,input_schema75027,input_checker75028,output_checker75029,vec__75022,opts__24145__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"search-chan","search-chan",962868037)),self__.name);
});})(class$,___$1,map__75065,map__75065__$1,search_term,owner,name,map75024,validate__837__auto__,ufv__,output_schema75026,input_schema75027,input_checker75028,output_checker75029,vec__75022,opts__24145__auto__))
};var G__75070 = sablono.interpreter.interpret(self__.name);return React.DOM.a(G__75069,G__75070);
});})(owner,name,map75024,validate__837__auto__,ufv__,output_schema75026,input_schema75027,input_checker75028,output_checker75029,vec__75022,opts__24145__auto__))
;
stuttaford.codex.t75060.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,name,map75024,validate__837__auto__,ufv__,output_schema75026,input_schema75027,input_checker75028,output_checker75029,vec__75022,opts__24145__auto__){
return (function (_75062){var self__ = this;
var _75062__$1 = this;return self__.meta75061;
});})(owner,name,map75024,validate__837__auto__,ufv__,output_schema75026,input_schema75027,input_checker75028,output_checker75029,vec__75022,opts__24145__auto__))
;
stuttaford.codex.t75060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,name,map75024,validate__837__auto__,ufv__,output_schema75026,input_schema75027,input_checker75028,output_checker75029,vec__75022,opts__24145__auto__){
return (function (_75062,meta75061__$1){var self__ = this;
var _75062__$1 = this;return (new stuttaford.codex.t75060(self__.G__75030,self__.owner,self__.data__24144__auto__,self__.opts__24145__auto__,self__.output_checker75029,self__.p__74968,self__.name,self__.input_checker75028,self__.vec__75022,self__.input_schema75027,self__.owner74966,self__.validate__837__auto__,self__.map75023,self__.fnk75025,self__.output_schema75026,self__.map75024,self__.ufv__,self__.tag_item,meta75061__$1));
});})(owner,name,map75024,validate__837__auto__,ufv__,output_schema75026,input_schema75027,input_checker75028,output_checker75029,vec__75022,opts__24145__auto__))
;
stuttaford.codex.__GT_t75060 = ((function (owner,name,map75024,validate__837__auto__,ufv__,output_schema75026,input_schema75027,input_checker75028,output_checker75029,vec__75022,opts__24145__auto__){
return (function __GT_t75060(G__75030__$1,owner__$1,data__24144__auto____$1,opts__24145__auto____$1,output_checker75029__$1,p__74968__$1,name__$1,input_checker75028__$1,vec__75022__$1,input_schema75027__$1,owner74966__$1,validate__837__auto____$1,map75023__$1,fnk75025__$1,output_schema75026__$1,map75024__$1,ufv____$1,tag_item__$1,meta75061){return (new stuttaford.codex.t75060(G__75030__$1,owner__$1,data__24144__auto____$1,opts__24145__auto____$1,output_checker75029__$1,p__74968__$1,name__$1,input_checker75028__$1,vec__75022__$1,input_schema75027__$1,owner74966__$1,validate__837__auto____$1,map75023__$1,fnk75025__$1,output_schema75026__$1,map75024__$1,ufv____$1,tag_item__$1,meta75061));
});})(owner,name,map75024,validate__837__auto__,ufv__,output_schema75026,input_schema75027,input_checker75028,output_checker75029,vec__75022,opts__24145__auto__))
;
}
return (new stuttaford.codex.t75060(G__75030,owner,data__24144__auto__,opts__24145__auto__,output_checker75029,p__74968,name,input_checker75028,vec__75022,input_schema75027,owner74966,validate__837__auto__,map75023,fnk75025,output_schema75026,map75024,ufv__,tag_item,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___75231 = (function (){var G__75079 = o__840__auto__;return (output_checker75029.cljs$core$IFn$_invoke$arity$1 ? output_checker75029.cljs$core$IFn$_invoke$arity$1(G__75079) : output_checker75029.call(null,G__75079));
})();if(cljs.core.truth_(temp__4126__auto___75231))
{var error__839__auto___75235 = temp__4126__auto___75231;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk75025","fnk75025",361729308,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75235], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema75026,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75235], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema75026,input_schema75027,input_checker75028,output_checker75029,vec__75022,opts__24145__auto__))
,schema.core.make_fn_schema(output_schema75026,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema75027], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner74966,new cljs.core.Keyword(null,"data","data",-232669377),data__24144__auto__], null));
};
var tag_item = function (data__24144__auto__,owner74966,var_args){
var p__74968 = null;if (arguments.length > 2) {
  p__74968 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_item__delegate.call(this,data__24144__auto__,owner74966,p__74968);};
tag_item.cljs$lang$maxFixedArity = 2;
tag_item.cljs$lang$applyTo = (function (arglist__75282){
var data__24144__auto__ = cljs.core.first(arglist__75282);
arglist__75282 = cljs.core.next(arglist__75282);
var owner74966 = cljs.core.first(arglist__75282);
var p__74968 = cljs.core.rest(arglist__75282);
return tag_item__delegate(data__24144__auto__,owner74966,p__74968);
});
tag_item.cljs$core$IFn$_invoke$arity$variadic = tag_item__delegate;
return tag_item;
})()
;
stuttaford.codex.__GT_tag_item = (function() {
var __GT_tag_item = null;
var __GT_tag_item__1 = (function (cursor__24113__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.tag_item,cursor__24113__auto__);
});
var __GT_tag_item__2 = (function (cursor__24113__auto__,m74967){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.tag_item,cursor__24113__auto__,m74967);
});
__GT_tag_item = function(cursor__24113__auto__,m74967){
switch(arguments.length){
case 1:
return __GT_tag_item__1.call(this,cursor__24113__auto__);
case 2:
return __GT_tag_item__2.call(this,cursor__24113__auto__,m74967);
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
var link_item__delegate = function (data__24144__auto__,owner75294,p__75296){var vec__75430 = p__75296;var opts__24145__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75430,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema75435 = schema.core.Any;var input_schema75436 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"tags","tags",1771418977)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"image","image",-58725096)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"description","description",-1428560544)),schema.core.Any,new cljs.core.Keyword(null,"uri","uri",-774711847),schema.core.Any,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map75432","map75432",-2077205281,null))], null);var input_checker75437 = schema.core.checker(input_schema75436);var output_checker75438 = schema.core.checker(output_schema75435);return schema.core.schematize_fn(((function (ufv__,output_schema75435,input_schema75436,input_checker75437,output_checker75438,vec__75430,opts__24145__auto__){
return (function fnk75434(G__75439){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___75526 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__75439], null);var temp__4126__auto___75527 = (function (){var G__75476 = args__838__auto___75526;return (input_checker75437.cljs$core$IFn$_invoke$arity$1 ? input_checker75437.cljs$core$IFn$_invoke$arity$1(G__75476) : input_checker75437.call(null,G__75476));
})();if(cljs.core.truth_(temp__4126__auto___75527))
{var error__839__auto___75528 = temp__4126__auto___75527;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk75434","fnk75434",-477530166,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75528], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema75436,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___75526,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75528], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map75432 = G__75439;while(true){
if(cljs.core.map_QMARK_(map75432))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map75432], 0))));
}
var map75433 = plumbing.fnk.schema.safe_get(map75432,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var name = plumbing.fnk.schema.safe_get(map75433,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var uri = plumbing.fnk.schema.safe_get(map75433,new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var description = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map75433,new cljs.core.Keyword(null,"description","description",-1428560544),null);var image = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map75433,new cljs.core.Keyword(null,"image","image",-58725096),null);var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map75433,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map75432,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t75493 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t75493 = (function (uri,G__75439,owner,output_checker75438,output_schema75435,description,tags,data__24144__auto__,opts__24145__auto__,map75433,fnk75434,input_checker75437,name,input_schema75436,p__75296,vec__75430,validate__837__auto__,owner75294,ufv__,link_item,map75432,image,meta75494){
this.uri = uri;
this.G__75439 = G__75439;
this.owner = owner;
this.output_checker75438 = output_checker75438;
this.output_schema75435 = output_schema75435;
this.description = description;
this.tags = tags;
this.data__24144__auto__ = data__24144__auto__;
this.opts__24145__auto__ = opts__24145__auto__;
this.map75433 = map75433;
this.fnk75434 = fnk75434;
this.input_checker75437 = input_checker75437;
this.name = name;
this.input_schema75436 = input_schema75436;
this.p__75296 = p__75296;
this.vec__75430 = vec__75430;
this.validate__837__auto__ = validate__837__auto__;
this.owner75294 = owner75294;
this.ufv__ = ufv__;
this.link_item = link_item;
this.map75432 = map75432;
this.image = image;
this.meta75494 = meta75494;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t75493.cljs$lang$type = true;
stuttaford.codex.t75493.cljs$lang$ctorStr = "stuttaford.codex/t75493";
stuttaford.codex.t75493.cljs$lang$ctorPrWriter = ((function (owner,tags,image,description,uri,name,map75433,validate__837__auto__,ufv__,output_schema75435,input_schema75436,input_checker75437,output_checker75438,vec__75430,opts__24145__auto__){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"stuttaford.codex/t75493");
});})(owner,tags,image,description,uri,name,map75433,validate__837__auto__,ufv__,output_schema75435,input_schema75436,input_checker75437,output_checker75438,vec__75430,opts__24145__auto__))
;
stuttaford.codex.t75493.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t75493.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,tags,image,description,uri,name,map75433,validate__837__auto__,ufv__,output_schema75435,input_schema75436,input_checker75437,output_checker75438,vec__75430,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "link-item";
});})(owner,tags,image,description,uri,name,map75433,validate__837__auto__,ufv__,output_schema75435,input_schema75436,input_checker75437,output_checker75438,vec__75430,opts__24145__auto__))
;
stuttaford.codex.t75493.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t75493.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,tags,image,description,uri,name,map75433,validate__837__auto__,ufv__,output_schema75435,input_schema75436,input_checker75437,output_checker75438,vec__75430,opts__24145__auto__){
return (function (_,p__75500){var self__ = this;
var map__75502 = p__75500;var map__75502__$1 = ((cljs.core.seq_QMARK_(map__75502))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75502):map__75502);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75502__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var ___$1 = this;var G__75504 = {"className": "link"};var G__75505 = (function (){var G__75507 = {"href": self__.uri};var G__75508 = sablono.interpreter.interpret(self__.name);return React.DOM.a(G__75507,G__75508);
})();var G__75506 = sablono.interpreter.interpret(om.core.build_all.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.tag_item,(function (){var G__75510 = self__.tags;return (stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1 ? stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1(G__75510) : stuttaford.codex.name_sort.call(null,G__75510));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177)], null)));return React.DOM.li(G__75504,G__75505,G__75506);
});})(owner,tags,image,description,uri,name,map75433,validate__837__auto__,ufv__,output_schema75435,input_schema75436,input_checker75437,output_checker75438,vec__75430,opts__24145__auto__))
;
stuttaford.codex.t75493.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,tags,image,description,uri,name,map75433,validate__837__auto__,ufv__,output_schema75435,input_schema75436,input_checker75437,output_checker75438,vec__75430,opts__24145__auto__){
return (function (_75495){var self__ = this;
var _75495__$1 = this;return self__.meta75494;
});})(owner,tags,image,description,uri,name,map75433,validate__837__auto__,ufv__,output_schema75435,input_schema75436,input_checker75437,output_checker75438,vec__75430,opts__24145__auto__))
;
stuttaford.codex.t75493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,tags,image,description,uri,name,map75433,validate__837__auto__,ufv__,output_schema75435,input_schema75436,input_checker75437,output_checker75438,vec__75430,opts__24145__auto__){
return (function (_75495,meta75494__$1){var self__ = this;
var _75495__$1 = this;return (new stuttaford.codex.t75493(self__.uri,self__.G__75439,self__.owner,self__.output_checker75438,self__.output_schema75435,self__.description,self__.tags,self__.data__24144__auto__,self__.opts__24145__auto__,self__.map75433,self__.fnk75434,self__.input_checker75437,self__.name,self__.input_schema75436,self__.p__75296,self__.vec__75430,self__.validate__837__auto__,self__.owner75294,self__.ufv__,self__.link_item,self__.map75432,self__.image,meta75494__$1));
});})(owner,tags,image,description,uri,name,map75433,validate__837__auto__,ufv__,output_schema75435,input_schema75436,input_checker75437,output_checker75438,vec__75430,opts__24145__auto__))
;
stuttaford.codex.__GT_t75493 = ((function (owner,tags,image,description,uri,name,map75433,validate__837__auto__,ufv__,output_schema75435,input_schema75436,input_checker75437,output_checker75438,vec__75430,opts__24145__auto__){
return (function __GT_t75493(uri__$1,G__75439__$1,owner__$1,output_checker75438__$1,output_schema75435__$1,description__$1,tags__$1,data__24144__auto____$1,opts__24145__auto____$1,map75433__$1,fnk75434__$1,input_checker75437__$1,name__$1,input_schema75436__$1,p__75296__$1,vec__75430__$1,validate__837__auto____$1,owner75294__$1,ufv____$1,link_item__$1,map75432__$1,image__$1,meta75494){return (new stuttaford.codex.t75493(uri__$1,G__75439__$1,owner__$1,output_checker75438__$1,output_schema75435__$1,description__$1,tags__$1,data__24144__auto____$1,opts__24145__auto____$1,map75433__$1,fnk75434__$1,input_checker75437__$1,name__$1,input_schema75436__$1,p__75296__$1,vec__75430__$1,validate__837__auto____$1,owner75294__$1,ufv____$1,link_item__$1,map75432__$1,image__$1,meta75494));
});})(owner,tags,image,description,uri,name,map75433,validate__837__auto__,ufv__,output_schema75435,input_schema75436,input_checker75437,output_checker75438,vec__75430,opts__24145__auto__))
;
}
return (new stuttaford.codex.t75493(uri,G__75439,owner,output_checker75438,output_schema75435,description,tags,data__24144__auto__,opts__24145__auto__,map75433,fnk75434,input_checker75437,name,input_schema75436,p__75296,vec__75430,validate__837__auto__,owner75294,ufv__,link_item,map75432,image,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___75584 = (function (){var G__75515 = o__840__auto__;return (output_checker75438.cljs$core$IFn$_invoke$arity$1 ? output_checker75438.cljs$core$IFn$_invoke$arity$1(G__75515) : output_checker75438.call(null,G__75515));
})();if(cljs.core.truth_(temp__4126__auto___75584))
{var error__839__auto___75586 = temp__4126__auto___75584;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk75434","fnk75434",-477530166,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75586], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema75435,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75586], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema75435,input_schema75436,input_checker75437,output_checker75438,vec__75430,opts__24145__auto__))
,schema.core.make_fn_schema(output_schema75435,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema75436], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner75294,new cljs.core.Keyword(null,"data","data",-232669377),data__24144__auto__], null));
};
var link_item = function (data__24144__auto__,owner75294,var_args){
var p__75296 = null;if (arguments.length > 2) {
  p__75296 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return link_item__delegate.call(this,data__24144__auto__,owner75294,p__75296);};
link_item.cljs$lang$maxFixedArity = 2;
link_item.cljs$lang$applyTo = (function (arglist__75588){
var data__24144__auto__ = cljs.core.first(arglist__75588);
arglist__75588 = cljs.core.next(arglist__75588);
var owner75294 = cljs.core.first(arglist__75588);
var p__75296 = cljs.core.rest(arglist__75588);
return link_item__delegate(data__24144__auto__,owner75294,p__75296);
});
link_item.cljs$core$IFn$_invoke$arity$variadic = link_item__delegate;
return link_item;
})()
;
stuttaford.codex.__GT_link_item = (function() {
var __GT_link_item = null;
var __GT_link_item__1 = (function (cursor__24113__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.link_item,cursor__24113__auto__);
});
var __GT_link_item__2 = (function (cursor__24113__auto__,m75295){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.link_item,cursor__24113__auto__,m75295);
});
__GT_link_item = function(cursor__24113__auto__,m75295){
switch(arguments.length){
case 1:
return __GT_link_item__1.call(this,cursor__24113__auto__);
case 2:
return __GT_link_item__2.call(this,cursor__24113__auto__,m75295);
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
var category_item__delegate = function (data__24144__auto__,owner75592,p__75594){var vec__75633 = p__75594;var opts__24145__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75633,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema75636 = schema.core.Any;var input_schema75637 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"links","links",-654507394),schema.core.Any,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map75634","map75634",866386304,null))], null);var input_checker75638 = schema.core.checker(input_schema75637);var output_checker75639 = schema.core.checker(output_schema75636);return schema.core.schematize_fn(((function (ufv__,output_schema75636,input_schema75637,input_checker75638,output_checker75639,vec__75633,opts__24145__auto__){
return (function fnk75635(G__75640){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___75695 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__75640], null);var temp__4126__auto___75696 = (function (){var G__75670 = args__838__auto___75695;return (input_checker75638.cljs$core$IFn$_invoke$arity$1 ? input_checker75638.cljs$core$IFn$_invoke$arity$1(G__75670) : input_checker75638.call(null,G__75670));
})();if(cljs.core.truth_(temp__4126__auto___75696))
{var error__839__auto___75697 = temp__4126__auto___75696;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk75635","fnk75635",-1992291028,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75697], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema75637,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___75695,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75697], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map75634 = G__75640;while(true){
if(cljs.core.map_QMARK_(map75634))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map75634], 0))));
}
var data = plumbing.fnk.schema.safe_get(map75634,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var name = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var links = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map75634,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t75674 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t75674 = (function (map75634,owner,links,p__75594,data,data__24144__auto__,opts__24145__auto__,fnk75635,output_schema75636,name,input_schema75637,vec__75633,output_checker75639,owner75592,G__75640,category_item,validate__837__auto__,input_checker75638,ufv__,meta75675){
this.map75634 = map75634;
this.owner = owner;
this.links = links;
this.p__75594 = p__75594;
this.data = data;
this.data__24144__auto__ = data__24144__auto__;
this.opts__24145__auto__ = opts__24145__auto__;
this.fnk75635 = fnk75635;
this.output_schema75636 = output_schema75636;
this.name = name;
this.input_schema75637 = input_schema75637;
this.vec__75633 = vec__75633;
this.output_checker75639 = output_checker75639;
this.owner75592 = owner75592;
this.G__75640 = G__75640;
this.category_item = category_item;
this.validate__837__auto__ = validate__837__auto__;
this.input_checker75638 = input_checker75638;
this.ufv__ = ufv__;
this.meta75675 = meta75675;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t75674.cljs$lang$type = true;
stuttaford.codex.t75674.cljs$lang$ctorStr = "stuttaford.codex/t75674";
stuttaford.codex.t75674.cljs$lang$ctorPrWriter = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema75636,input_schema75637,input_checker75638,output_checker75639,vec__75633,opts__24145__auto__){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"stuttaford.codex/t75674");
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema75636,input_schema75637,input_checker75638,output_checker75639,vec__75633,opts__24145__auto__))
;
stuttaford.codex.t75674.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t75674.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema75636,input_schema75637,input_checker75638,output_checker75639,vec__75633,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "category-item";
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema75636,input_schema75637,input_checker75638,output_checker75639,vec__75633,opts__24145__auto__))
;
stuttaford.codex.t75674.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t75674.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema75636,input_schema75637,input_checker75638,output_checker75639,vec__75633,opts__24145__auto__){
return (function (_,p__75678){var self__ = this;
var map__75679 = p__75678;var map__75679__$1 = ((cljs.core.seq_QMARK_(map__75679))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75679):map__75679);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75679__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var ___$1 = this;var temp__4126__auto__ = cljs.core.seq((function (){var G__75682 = stuttaford.codex.search_items(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"tags-string","tags-string",-736299316)], null),search_term,self__.links);return (stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1 ? stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1(G__75682) : stuttaford.codex.name_sort.call(null,G__75682));
})());if(temp__4126__auto__)
{var links__$2 = temp__4126__auto__;var G__75687 = null;var G__75688 = (function (){var attrs75685 = self__.name;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs75685))?sablono.interpreter.attributes(attrs75685):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs75685))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs75685)], null))));
})();var G__75689 = (function (){var attrs75686 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.link_item,links__$2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177)], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.ul,((cljs.core.map_QMARK_(attrs75686))?sablono.interpreter.attributes(attrs75686):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs75686))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs75686)], null))));
})();return React.DOM.div(G__75687,G__75688,G__75689);
} else
{return null;
}
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema75636,input_schema75637,input_checker75638,output_checker75639,vec__75633,opts__24145__auto__))
;
stuttaford.codex.t75674.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema75636,input_schema75637,input_checker75638,output_checker75639,vec__75633,opts__24145__auto__){
return (function (_75676){var self__ = this;
var _75676__$1 = this;return self__.meta75675;
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema75636,input_schema75637,input_checker75638,output_checker75639,vec__75633,opts__24145__auto__))
;
stuttaford.codex.t75674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema75636,input_schema75637,input_checker75638,output_checker75639,vec__75633,opts__24145__auto__){
return (function (_75676,meta75675__$1){var self__ = this;
var _75676__$1 = this;return (new stuttaford.codex.t75674(self__.map75634,self__.owner,self__.links,self__.p__75594,self__.data,self__.data__24144__auto__,self__.opts__24145__auto__,self__.fnk75635,self__.output_schema75636,self__.name,self__.input_schema75637,self__.vec__75633,self__.output_checker75639,self__.owner75592,self__.G__75640,self__.category_item,self__.validate__837__auto__,self__.input_checker75638,self__.ufv__,meta75675__$1));
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema75636,input_schema75637,input_checker75638,output_checker75639,vec__75633,opts__24145__auto__))
;
stuttaford.codex.__GT_t75674 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema75636,input_schema75637,input_checker75638,output_checker75639,vec__75633,opts__24145__auto__){
return (function __GT_t75674(map75634__$1,owner__$1,links__$1,p__75594__$1,data__$1,data__24144__auto____$1,opts__24145__auto____$1,fnk75635__$1,output_schema75636__$1,name__$1,input_schema75637__$1,vec__75633__$1,output_checker75639__$1,owner75592__$1,G__75640__$1,category_item__$1,validate__837__auto____$1,input_checker75638__$1,ufv____$1,meta75675){return (new stuttaford.codex.t75674(map75634__$1,owner__$1,links__$1,p__75594__$1,data__$1,data__24144__auto____$1,opts__24145__auto____$1,fnk75635__$1,output_schema75636__$1,name__$1,input_schema75637__$1,vec__75633__$1,output_checker75639__$1,owner75592__$1,G__75640__$1,category_item__$1,validate__837__auto____$1,input_checker75638__$1,ufv____$1,meta75675));
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema75636,input_schema75637,input_checker75638,output_checker75639,vec__75633,opts__24145__auto__))
;
}
return (new stuttaford.codex.t75674(map75634,owner,links,p__75594,data,data__24144__auto__,opts__24145__auto__,fnk75635,output_schema75636,name,input_schema75637,vec__75633,output_checker75639,owner75592,G__75640,category_item,validate__837__auto__,input_checker75638,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___75788 = (function (){var G__75690 = o__840__auto__;return (output_checker75639.cljs$core$IFn$_invoke$arity$1 ? output_checker75639.cljs$core$IFn$_invoke$arity$1(G__75690) : output_checker75639.call(null,G__75690));
})();if(cljs.core.truth_(temp__4126__auto___75788))
{var error__839__auto___75795 = temp__4126__auto___75788;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk75635","fnk75635",-1992291028,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___75795], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema75636,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___75795], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema75636,input_schema75637,input_checker75638,output_checker75639,vec__75633,opts__24145__auto__))
,schema.core.make_fn_schema(output_schema75636,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema75637], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner75592,new cljs.core.Keyword(null,"data","data",-232669377),data__24144__auto__], null));
};
var category_item = function (data__24144__auto__,owner75592,var_args){
var p__75594 = null;if (arguments.length > 2) {
  p__75594 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return category_item__delegate.call(this,data__24144__auto__,owner75592,p__75594);};
category_item.cljs$lang$maxFixedArity = 2;
category_item.cljs$lang$applyTo = (function (arglist__75814){
var data__24144__auto__ = cljs.core.first(arglist__75814);
arglist__75814 = cljs.core.next(arglist__75814);
var owner75592 = cljs.core.first(arglist__75814);
var p__75594 = cljs.core.rest(arglist__75814);
return category_item__delegate(data__24144__auto__,owner75592,p__75594);
});
category_item.cljs$core$IFn$_invoke$arity$variadic = category_item__delegate;
return category_item;
})()
;
stuttaford.codex.__GT_category_item = (function() {
var __GT_category_item = null;
var __GT_category_item__1 = (function (cursor__24113__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.category_item,cursor__24113__auto__);
});
var __GT_category_item__2 = (function (cursor__24113__auto__,m75593){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.category_item,cursor__24113__auto__,m75593);
});
__GT_category_item = function(cursor__24113__auto__,m75593){
switch(arguments.length){
case 1:
return __GT_category_item__1.call(this,cursor__24113__auto__);
case 2:
return __GT_category_item__2.call(this,cursor__24113__auto__,m75593);
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
var app_view__delegate = function (data__24144__auto__,owner75823,p__75825){var vec__76038 = p__75825;var opts__24145__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76038,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema76042 = schema.core.Any;var input_schema76043 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"categories","categories",178386610),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map76039","map76039",-37509814,null))], null);var input_checker76044 = schema.core.checker(input_schema76043);var output_checker76045 = schema.core.checker(output_schema76042);return schema.core.schematize_fn(((function (ufv__,output_schema76042,input_schema76043,input_checker76044,output_checker76045,vec__76038,opts__24145__auto__){
return (function fnk76041(G__76046){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___76232 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__76046], null);var temp__4126__auto___76233 = (function (){var G__76142 = args__838__auto___76232;return (input_checker76044.cljs$core$IFn$_invoke$arity$1 ? input_checker76044.cljs$core$IFn$_invoke$arity$1(G__76142) : input_checker76044.call(null,G__76142));
})();if(cljs.core.truth_(temp__4126__auto___76233))
{var error__839__auto___76235 = temp__4126__auto___76233;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk76041","fnk76041",903542689,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___76235], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema76043,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___76232,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___76235], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map76039 = G__76046;while(true){
if(cljs.core.map_QMARK_(map76039))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map76039], 0))));
}
var map76040 = plumbing.fnk.schema.safe_get(map76039,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var categories = plumbing.fnk.schema.safe_get(map76040,new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map76039,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t76144 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t76144 = (function (input_checker76044,fnk76041,app_view,owner,p__75825,input_schema76043,data__24144__auto__,map76039,opts__24145__auto__,owner75823,output_schema76042,G__76046,map76040,output_checker76045,categories,vec__76038,validate__837__auto__,ufv__,meta76145){
this.input_checker76044 = input_checker76044;
this.fnk76041 = fnk76041;
this.app_view = app_view;
this.owner = owner;
this.p__75825 = p__75825;
this.input_schema76043 = input_schema76043;
this.data__24144__auto__ = data__24144__auto__;
this.map76039 = map76039;
this.opts__24145__auto__ = opts__24145__auto__;
this.owner75823 = owner75823;
this.output_schema76042 = output_schema76042;
this.G__76046 = G__76046;
this.map76040 = map76040;
this.output_checker76045 = output_checker76045;
this.categories = categories;
this.vec__76038 = vec__76038;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.meta76145 = meta76145;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t76144.cljs$lang$type = true;
stuttaford.codex.t76144.cljs$lang$ctorStr = "stuttaford.codex/t76144";
stuttaford.codex.t76144.cljs$lang$ctorPrWriter = ((function (owner,categories,map76040,validate__837__auto__,ufv__,output_schema76042,input_schema76043,input_checker76044,output_checker76045,vec__76038,opts__24145__auto__){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"stuttaford.codex/t76144");
});})(owner,categories,map76040,validate__837__auto__,ufv__,output_schema76042,input_schema76043,input_checker76044,output_checker76045,vec__76038,opts__24145__auto__))
;
stuttaford.codex.t76144.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t76144.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,categories,map76040,validate__837__auto__,ufv__,output_schema76042,input_schema76043,input_checker76044,output_checker76045,vec__76038,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "app-view";
});})(owner,categories,map76040,validate__837__auto__,ufv__,output_schema76042,input_schema76043,input_checker76044,output_checker76045,vec__76038,opts__24145__auto__))
;
stuttaford.codex.t76144.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t76144.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,categories,map76040,validate__837__auto__,ufv__,output_schema76042,input_schema76043,input_checker76044,output_checker76045,vec__76038,opts__24145__auto__){
return (function (_,p__76150){var self__ = this;
var map__76151 = p__76150;var map__76151__$1 = ((cljs.core.seq_QMARK_(map__76151))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76151):map__76151);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76151__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var search_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76151__$1,new cljs.core.Keyword(null,"search-chan","search-chan",962868037));var ___$1 = this;var G__76157 = null;var G__76158 = (function (){var G__76160 = {"id": "search", "type": "text", "placeholder": "Search for link", "autoFocus": "autofocus", "value": search_term, "onChange": ((function (G__76157,___$1,map__76151,map__76151__$1,search_term,search_chan,owner,categories,map76040,validate__837__auto__,ufv__,output_schema76042,input_schema76043,input_checker76044,output_checker76045,vec__76038,opts__24145__auto__){
return (function (p1__75822_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(search_chan,p1__75822_SHARP_.target.value);
});})(G__76157,___$1,map__76151,map__76151__$1,search_term,search_chan,owner,categories,map76040,validate__837__auto__,ufv__,output_schema76042,input_schema76043,input_checker76044,output_checker76045,vec__76038,opts__24145__auto__))
};return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__76160) : sablono.interpreter.input.call(null,G__76160));
})();var G__76159 = sablono.interpreter.interpret(om.core.build_all.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.category_item,(function (){var G__76165 = self__.categories;return (stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1 ? stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1(G__76165) : stuttaford.codex.name_sort.call(null,G__76165));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177)], null)));return React.DOM.div(G__76157,G__76158,G__76159);
});})(owner,categories,map76040,validate__837__auto__,ufv__,output_schema76042,input_schema76043,input_checker76044,output_checker76045,vec__76038,opts__24145__auto__))
;
stuttaford.codex.t76144.prototype.om$core$IWillMount$ = true;
stuttaford.codex.t76144.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (owner,categories,map76040,validate__837__auto__,ufv__,output_schema76042,input_schema76043,input_checker76044,output_checker76045,vec__76038,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var search_chan = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"search-chan","search-chan",962868037));var c__22689__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22689__auto__,search_chan,___$1,owner,categories,map76040,validate__837__auto__,ufv__,output_schema76042,input_schema76043,input_checker76044,output_checker76045,vec__76038,opts__24145__auto__){
return (function (){var f__22690__auto__ = (function (){var switch__22674__auto__ = ((function (c__22689__auto__,search_chan,___$1,owner,categories,map76040,validate__837__auto__,ufv__,output_schema76042,input_schema76043,input_checker76044,output_checker76045,vec__76038,opts__24145__auto__){
return (function (state_76187){var state_val_76188 = (state_76187[(1)]);if((state_val_76188 === (7)))
{var inst_76169 = (state_76187[(7)]);var inst_76169__$1 = (state_76187[(2)]);var state_76187__$1 = (function (){var statearr_76190 = state_76187;(statearr_76190[(7)] = inst_76169__$1);
return statearr_76190;
})();if(cljs.core.truth_(inst_76169__$1))
{var statearr_76191_76270 = state_76187__$1;(statearr_76191_76270[(1)] = (8));
} else
{var statearr_76192_76271 = state_76187__$1;(statearr_76192_76271[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76188 === (1)))
{var state_76187__$1 = state_76187;var statearr_76193_76272 = state_76187__$1;(statearr_76193_76272[(2)] = null);
(statearr_76193_76272[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76188 === (4)))
{var state_76187__$1 = state_76187;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76187__$1,(7),search_chan);
} else
{if((state_val_76188 === (6)))
{var inst_76183 = (state_76187[(2)]);var state_76187__$1 = state_76187;var statearr_76198_76275 = state_76187__$1;(statearr_76198_76275[(2)] = inst_76183);
(statearr_76198_76275[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76188 === (3)))
{var inst_76185 = (state_76187[(2)]);var state_76187__$1 = state_76187;return cljs.core.async.impl.ioc_helpers.return_chan(state_76187__$1,inst_76185);
} else
{if((state_val_76188 === (2)))
{var state_76187__$1 = state_76187;var statearr_76199_76279 = state_76187__$1;(statearr_76199_76279[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76188 === (9)))
{var state_76187__$1 = state_76187;var statearr_76201_76280 = state_76187__$1;(statearr_76201_76280[(2)] = null);
(statearr_76201_76280[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76188 === (5)))
{var state_76187__$1 = state_76187;var statearr_76202_76281 = state_76187__$1;(statearr_76202_76281[(2)] = null);
(statearr_76202_76281[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76188 === (10)))
{var inst_76179 = (state_76187[(2)]);var state_76187__$1 = (function (){var statearr_76203 = state_76187;(statearr_76203[(8)] = inst_76179);
return statearr_76203;
})();var statearr_76204_76290 = state_76187__$1;(statearr_76204_76290[(2)] = null);
(statearr_76204_76290[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76188 === (8)))
{var inst_76169 = (state_76187[(7)]);var inst_76172 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"search-term","search-term",356193544),inst_76169);var state_76187__$1 = state_76187;var statearr_76209_76299 = state_76187__$1;(statearr_76209_76299[(2)] = inst_76172);
(statearr_76209_76299[(1)] = (10));
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
});})(c__22689__auto__,search_chan,___$1,owner,categories,map76040,validate__837__auto__,ufv__,output_schema76042,input_schema76043,input_checker76044,output_checker76045,vec__76038,opts__24145__auto__))
;return ((function (switch__22674__auto__,c__22689__auto__,search_chan,___$1,owner,categories,map76040,validate__837__auto__,ufv__,output_schema76042,input_schema76043,input_checker76044,output_checker76045,vec__76038,opts__24145__auto__){
return (function() {
var state_machine__22675__auto__ = null;
var state_machine__22675__auto____0 = (function (){var statearr_76213 = [null,null,null,null,null,null,null,null,null];(statearr_76213[(0)] = state_machine__22675__auto__);
(statearr_76213[(1)] = (1));
return statearr_76213;
});
var state_machine__22675__auto____1 = (function (state_76187){while(true){
var ret_value__22676__auto__ = (function (){try{while(true){
var result__22677__auto__ = switch__22674__auto__(state_76187);if(cljs.core.keyword_identical_QMARK_(result__22677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22677__auto__;
}
break;
}
}catch (e76214){if((e76214 instanceof Object))
{var ex__22678__auto__ = e76214;var statearr_76215_76307 = state_76187;(statearr_76215_76307[(5)] = ex__22678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_76187);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e76214;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__76309 = state_76187;
state_76187 = G__76309;
continue;
}
} else
{return ret_value__22676__auto__;
}
break;
}
});
state_machine__22675__auto__ = function(state_76187){
switch(arguments.length){
case 0:
return state_machine__22675__auto____0.call(this);
case 1:
return state_machine__22675__auto____1.call(this,state_76187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22675__auto____0;
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22675__auto____1;
return state_machine__22675__auto__;
})()
;})(switch__22674__auto__,c__22689__auto__,search_chan,___$1,owner,categories,map76040,validate__837__auto__,ufv__,output_schema76042,input_schema76043,input_checker76044,output_checker76045,vec__76038,opts__24145__auto__))
})();var state__22691__auto__ = (function (){var statearr_76216 = (function (){return (f__22690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22690__auto__.cljs$core$IFn$_invoke$arity$0() : f__22690__auto__.call(null));
})();(statearr_76216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22689__auto__);
return statearr_76216;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22691__auto__);
});})(c__22689__auto__,search_chan,___$1,owner,categories,map76040,validate__837__auto__,ufv__,output_schema76042,input_schema76043,input_checker76044,output_checker76045,vec__76038,opts__24145__auto__))
);
return c__22689__auto__;
});})(owner,categories,map76040,validate__837__auto__,ufv__,output_schema76042,input_schema76043,input_checker76044,output_checker76045,vec__76038,opts__24145__auto__))
;
stuttaford.codex.t76144.prototype.om$core$IInitState$ = true;
stuttaford.codex.t76144.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,categories,map76040,validate__837__auto__,ufv__,output_schema76042,input_schema76043,input_checker76044,output_checker76045,vec__76038,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-chan","search-chan",962868037),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0()], null);
});})(owner,categories,map76040,validate__837__auto__,ufv__,output_schema76042,input_schema76043,input_checker76044,output_checker76045,vec__76038,opts__24145__auto__))
;
stuttaford.codex.t76144.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,categories,map76040,validate__837__auto__,ufv__,output_schema76042,input_schema76043,input_checker76044,output_checker76045,vec__76038,opts__24145__auto__){
return (function (_76146){var self__ = this;
var _76146__$1 = this;return self__.meta76145;
});})(owner,categories,map76040,validate__837__auto__,ufv__,output_schema76042,input_schema76043,input_checker76044,output_checker76045,vec__76038,opts__24145__auto__))
;
stuttaford.codex.t76144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,categories,map76040,validate__837__auto__,ufv__,output_schema76042,input_schema76043,input_checker76044,output_checker76045,vec__76038,opts__24145__auto__){
return (function (_76146,meta76145__$1){var self__ = this;
var _76146__$1 = this;return (new stuttaford.codex.t76144(self__.input_checker76044,self__.fnk76041,self__.app_view,self__.owner,self__.p__75825,self__.input_schema76043,self__.data__24144__auto__,self__.map76039,self__.opts__24145__auto__,self__.owner75823,self__.output_schema76042,self__.G__76046,self__.map76040,self__.output_checker76045,self__.categories,self__.vec__76038,self__.validate__837__auto__,self__.ufv__,meta76145__$1));
});})(owner,categories,map76040,validate__837__auto__,ufv__,output_schema76042,input_schema76043,input_checker76044,output_checker76045,vec__76038,opts__24145__auto__))
;
stuttaford.codex.__GT_t76144 = ((function (owner,categories,map76040,validate__837__auto__,ufv__,output_schema76042,input_schema76043,input_checker76044,output_checker76045,vec__76038,opts__24145__auto__){
return (function __GT_t76144(input_checker76044__$1,fnk76041__$1,app_view__$1,owner__$1,p__75825__$1,input_schema76043__$1,data__24144__auto____$1,map76039__$1,opts__24145__auto____$1,owner75823__$1,output_schema76042__$1,G__76046__$1,map76040__$1,output_checker76045__$1,categories__$1,vec__76038__$1,validate__837__auto____$1,ufv____$1,meta76145){return (new stuttaford.codex.t76144(input_checker76044__$1,fnk76041__$1,app_view__$1,owner__$1,p__75825__$1,input_schema76043__$1,data__24144__auto____$1,map76039__$1,opts__24145__auto____$1,owner75823__$1,output_schema76042__$1,G__76046__$1,map76040__$1,output_checker76045__$1,categories__$1,vec__76038__$1,validate__837__auto____$1,ufv____$1,meta76145));
});})(owner,categories,map76040,validate__837__auto__,ufv__,output_schema76042,input_schema76043,input_checker76044,output_checker76045,vec__76038,opts__24145__auto__))
;
}
return (new stuttaford.codex.t76144(input_checker76044,fnk76041,app_view,owner,p__75825,input_schema76043,data__24144__auto__,map76039,opts__24145__auto__,owner75823,output_schema76042,G__76046,map76040,output_checker76045,categories,vec__76038,validate__837__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___76368 = (function (){var G__76218 = o__840__auto__;return (output_checker76045.cljs$core$IFn$_invoke$arity$1 ? output_checker76045.cljs$core$IFn$_invoke$arity$1(G__76218) : output_checker76045.call(null,G__76218));
})();if(cljs.core.truth_(temp__4126__auto___76368))
{var error__839__auto___76369 = temp__4126__auto___76368;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk76041","fnk76041",903542689,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___76369], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema76042,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___76369], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema76042,input_schema76043,input_checker76044,output_checker76045,vec__76038,opts__24145__auto__))
,schema.core.make_fn_schema(output_schema76042,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema76043], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner75823,new cljs.core.Keyword(null,"data","data",-232669377),data__24144__auto__], null));
};
var app_view = function (data__24144__auto__,owner75823,var_args){
var p__75825 = null;if (arguments.length > 2) {
  p__75825 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_view__delegate.call(this,data__24144__auto__,owner75823,p__75825);};
app_view.cljs$lang$maxFixedArity = 2;
app_view.cljs$lang$applyTo = (function (arglist__76399){
var data__24144__auto__ = cljs.core.first(arglist__76399);
arglist__76399 = cljs.core.next(arglist__76399);
var owner75823 = cljs.core.first(arglist__76399);
var p__75825 = cljs.core.rest(arglist__76399);
return app_view__delegate(data__24144__auto__,owner75823,p__75825);
});
app_view.cljs$core$IFn$_invoke$arity$variadic = app_view__delegate;
return app_view;
})()
;
stuttaford.codex.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__24113__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.app_view,cursor__24113__auto__);
});
var __GT_app_view__2 = (function (cursor__24113__auto__,m75824){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.app_view,cursor__24113__auto__,m75824);
});
__GT_app_view = function(cursor__24113__auto__,m75824){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__24113__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__24113__auto__,m75824);
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