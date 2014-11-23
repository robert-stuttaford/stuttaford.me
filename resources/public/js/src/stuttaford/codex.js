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
var tag_item__delegate = function (data__24441__auto__,owner39502,p__39504){var vec__39532 = p__39504;var opts__24442__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39532,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema39536 = schema.core.Any;var input_schema39537 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map39533","map39533",-1078135694,null))], null);var input_checker39538 = schema.core.checker(input_schema39537);var output_checker39539 = schema.core.checker(output_schema39536);return schema.core.schematize_fn(((function (ufv__,output_schema39536,input_schema39537,input_checker39538,output_checker39539,vec__39532,opts__24442__auto__){
return (function fnk39535(G__39540){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39559 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39540], null);var temp__4126__auto___39560 = (function (){var G__39550 = args__838__auto___39559;return (input_checker39538.cljs$core$IFn$_invoke$arity$1 ? input_checker39538.cljs$core$IFn$_invoke$arity$1(G__39550) : input_checker39538.call(null,G__39550));
})();if(cljs.core.truth_(temp__4126__auto___39560))
{var error__839__auto___39561 = temp__4126__auto___39560;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39535","fnk39535",-595336241,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39561], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39537,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39559,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39561], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map39533 = G__39540;while(true){
if(cljs.core.map_QMARK_(map39533))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map39533], 0))));
}
var map39534 = plumbing.fnk.schema.safe_get(map39533,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var name = plumbing.fnk.schema.safe_get(map39534,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map39533,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t39551 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t39551 = (function (p__39504,owner,vec__39532,output_checker39539,input_checker39538,output_schema39536,owner39502,input_schema39537,data__24441__auto__,fnk39535,name,map39534,map39533,opts__24442__auto__,G__39540,validate__837__auto__,ufv__,tag_item,meta39552){
this.p__39504 = p__39504;
this.owner = owner;
this.vec__39532 = vec__39532;
this.output_checker39539 = output_checker39539;
this.input_checker39538 = input_checker39538;
this.output_schema39536 = output_schema39536;
this.owner39502 = owner39502;
this.input_schema39537 = input_schema39537;
this.data__24441__auto__ = data__24441__auto__;
this.fnk39535 = fnk39535;
this.name = name;
this.map39534 = map39534;
this.map39533 = map39533;
this.opts__24442__auto__ = opts__24442__auto__;
this.G__39540 = G__39540;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.tag_item = tag_item;
this.meta39552 = meta39552;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t39551.cljs$lang$type = true;
stuttaford.codex.t39551.cljs$lang$ctorStr = "stuttaford.codex/t39551";
stuttaford.codex.t39551.cljs$lang$ctorPrWriter = ((function (owner,name,map39534,validate__837__auto__,ufv__,output_schema39536,input_schema39537,input_checker39538,output_checker39539,vec__39532,opts__24442__auto__){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"stuttaford.codex/t39551");
});})(owner,name,map39534,validate__837__auto__,ufv__,output_schema39536,input_schema39537,input_checker39538,output_checker39539,vec__39532,opts__24442__auto__))
;
stuttaford.codex.t39551.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t39551.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,name,map39534,validate__837__auto__,ufv__,output_schema39536,input_schema39537,input_checker39538,output_checker39539,vec__39532,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-item";
});})(owner,name,map39534,validate__837__auto__,ufv__,output_schema39536,input_schema39537,input_checker39538,output_checker39539,vec__39532,opts__24442__auto__))
;
stuttaford.codex.t39551.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t39551.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,name,map39534,validate__837__auto__,ufv__,output_schema39536,input_schema39537,input_checker39538,output_checker39539,vec__39532,opts__24442__auto__){
return (function (_,p__39554){var self__ = this;
var map__39555 = p__39554;var map__39555__$1 = ((cljs.core.seq_QMARK_(map__39555))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39555):map__39555);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39555__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var ___$1 = this;var class$ = (cljs.core.truth_((function (){var and__19621__auto__ = cljs.core.seq(search_term);if(and__19621__auto__)
{return cljs.core.re_find(stuttaford.codex.regex(search_term),self__.name);
} else
{return and__19621__auto__;
}
})())?"tag active":"tag");var G__39556 = {"className": class$, "onClick": ((function (class$,___$1,map__39555,map__39555__$1,search_term,owner,name,map39534,validate__837__auto__,ufv__,output_schema39536,input_schema39537,input_checker39538,output_checker39539,vec__39532,opts__24442__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"search-chan","search-chan",962868037)),self__.name);
});})(class$,___$1,map__39555,map__39555__$1,search_term,owner,name,map39534,validate__837__auto__,ufv__,output_schema39536,input_schema39537,input_checker39538,output_checker39539,vec__39532,opts__24442__auto__))
};var G__39557 = sablono.interpreter.interpret(self__.name);return React.DOM.a(G__39556,G__39557);
});})(owner,name,map39534,validate__837__auto__,ufv__,output_schema39536,input_schema39537,input_checker39538,output_checker39539,vec__39532,opts__24442__auto__))
;
stuttaford.codex.t39551.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,name,map39534,validate__837__auto__,ufv__,output_schema39536,input_schema39537,input_checker39538,output_checker39539,vec__39532,opts__24442__auto__){
return (function (_39553){var self__ = this;
var _39553__$1 = this;return self__.meta39552;
});})(owner,name,map39534,validate__837__auto__,ufv__,output_schema39536,input_schema39537,input_checker39538,output_checker39539,vec__39532,opts__24442__auto__))
;
stuttaford.codex.t39551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,name,map39534,validate__837__auto__,ufv__,output_schema39536,input_schema39537,input_checker39538,output_checker39539,vec__39532,opts__24442__auto__){
return (function (_39553,meta39552__$1){var self__ = this;
var _39553__$1 = this;return (new stuttaford.codex.t39551(self__.p__39504,self__.owner,self__.vec__39532,self__.output_checker39539,self__.input_checker39538,self__.output_schema39536,self__.owner39502,self__.input_schema39537,self__.data__24441__auto__,self__.fnk39535,self__.name,self__.map39534,self__.map39533,self__.opts__24442__auto__,self__.G__39540,self__.validate__837__auto__,self__.ufv__,self__.tag_item,meta39552__$1));
});})(owner,name,map39534,validate__837__auto__,ufv__,output_schema39536,input_schema39537,input_checker39538,output_checker39539,vec__39532,opts__24442__auto__))
;
stuttaford.codex.__GT_t39551 = ((function (owner,name,map39534,validate__837__auto__,ufv__,output_schema39536,input_schema39537,input_checker39538,output_checker39539,vec__39532,opts__24442__auto__){
return (function __GT_t39551(p__39504__$1,owner__$1,vec__39532__$1,output_checker39539__$1,input_checker39538__$1,output_schema39536__$1,owner39502__$1,input_schema39537__$1,data__24441__auto____$1,fnk39535__$1,name__$1,map39534__$1,map39533__$1,opts__24442__auto____$1,G__39540__$1,validate__837__auto____$1,ufv____$1,tag_item__$1,meta39552){return (new stuttaford.codex.t39551(p__39504__$1,owner__$1,vec__39532__$1,output_checker39539__$1,input_checker39538__$1,output_schema39536__$1,owner39502__$1,input_schema39537__$1,data__24441__auto____$1,fnk39535__$1,name__$1,map39534__$1,map39533__$1,opts__24442__auto____$1,G__39540__$1,validate__837__auto____$1,ufv____$1,tag_item__$1,meta39552));
});})(owner,name,map39534,validate__837__auto__,ufv__,output_schema39536,input_schema39537,input_checker39538,output_checker39539,vec__39532,opts__24442__auto__))
;
}
return (new stuttaford.codex.t39551(p__39504,owner,vec__39532,output_checker39539,input_checker39538,output_schema39536,owner39502,input_schema39537,data__24441__auto__,fnk39535,name,map39534,map39533,opts__24442__auto__,G__39540,validate__837__auto__,ufv__,tag_item,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39562 = (function (){var G__39558 = o__840__auto__;return (output_checker39539.cljs$core$IFn$_invoke$arity$1 ? output_checker39539.cljs$core$IFn$_invoke$arity$1(G__39558) : output_checker39539.call(null,G__39558));
})();if(cljs.core.truth_(temp__4126__auto___39562))
{var error__839__auto___39563 = temp__4126__auto___39562;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39535","fnk39535",-595336241,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39563], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39536,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39563], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema39536,input_schema39537,input_checker39538,output_checker39539,vec__39532,opts__24442__auto__))
,schema.core.make_fn_schema(output_schema39536,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39537], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24442__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner39502,new cljs.core.Keyword(null,"data","data",-232669377),data__24441__auto__], null));
};
var tag_item = function (data__24441__auto__,owner39502,var_args){
var p__39504 = null;if (arguments.length > 2) {
  p__39504 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_item__delegate.call(this,data__24441__auto__,owner39502,p__39504);};
tag_item.cljs$lang$maxFixedArity = 2;
tag_item.cljs$lang$applyTo = (function (arglist__39564){
var data__24441__auto__ = cljs.core.first(arglist__39564);
arglist__39564 = cljs.core.next(arglist__39564);
var owner39502 = cljs.core.first(arglist__39564);
var p__39504 = cljs.core.rest(arglist__39564);
return tag_item__delegate(data__24441__auto__,owner39502,p__39504);
});
tag_item.cljs$core$IFn$_invoke$arity$variadic = tag_item__delegate;
return tag_item;
})()
;
stuttaford.codex.__GT_tag_item = (function() {
var __GT_tag_item = null;
var __GT_tag_item__1 = (function (cursor__24410__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.tag_item,cursor__24410__auto__);
});
var __GT_tag_item__2 = (function (cursor__24410__auto__,m39503){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.tag_item,cursor__24410__auto__,m39503);
});
__GT_tag_item = function(cursor__24410__auto__,m39503){
switch(arguments.length){
case 1:
return __GT_tag_item__1.call(this,cursor__24410__auto__);
case 2:
return __GT_tag_item__2.call(this,cursor__24410__auto__,m39503);
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
var link_item__delegate = function (data__24441__auto__,owner39565,p__39567){var vec__39603 = p__39567;var opts__24442__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39603,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema39607 = schema.core.Any;var input_schema39608 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"tags","tags",1771418977)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"image","image",-58725096)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"description","description",-1428560544)),schema.core.Any,new cljs.core.Keyword(null,"uri","uri",-774711847),schema.core.Any,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map39604","map39604",2084022346,null))], null);var input_checker39609 = schema.core.checker(input_schema39608);var output_checker39610 = schema.core.checker(output_schema39607);return schema.core.schematize_fn(((function (ufv__,output_schema39607,input_schema39608,input_checker39609,output_checker39610,vec__39603,opts__24442__auto__){
return (function fnk39606(G__39611){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39638 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39611], null);var temp__4126__auto___39639 = (function (){var G__39625 = args__838__auto___39638;return (input_checker39609.cljs$core$IFn$_invoke$arity$1 ? input_checker39609.cljs$core$IFn$_invoke$arity$1(G__39625) : input_checker39609.call(null,G__39625));
})();if(cljs.core.truth_(temp__4126__auto___39639))
{var error__839__auto___39640 = temp__4126__auto___39639;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39606","fnk39606",773611239,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39640], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39608,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39638,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39640], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map39604 = G__39611;while(true){
if(cljs.core.map_QMARK_(map39604))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map39604], 0))));
}
var map39605 = plumbing.fnk.schema.safe_get(map39604,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var name = plumbing.fnk.schema.safe_get(map39605,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var uri = plumbing.fnk.schema.safe_get(map39605,new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var description = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map39605,new cljs.core.Keyword(null,"description","description",-1428560544),null);var image = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map39605,new cljs.core.Keyword(null,"image","image",-58725096),null);var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map39605,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map39604,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t39626 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t39626 = (function (uri,owner,vec__39603,fnk39606,description,p__39567,tags,owner39565,map39604,G__39611,data__24441__auto__,input_schema39608,output_schema39607,name,map39605,input_checker39609,output_checker39610,opts__24442__auto__,validate__837__auto__,ufv__,link_item,image,meta39627){
this.uri = uri;
this.owner = owner;
this.vec__39603 = vec__39603;
this.fnk39606 = fnk39606;
this.description = description;
this.p__39567 = p__39567;
this.tags = tags;
this.owner39565 = owner39565;
this.map39604 = map39604;
this.G__39611 = G__39611;
this.data__24441__auto__ = data__24441__auto__;
this.input_schema39608 = input_schema39608;
this.output_schema39607 = output_schema39607;
this.name = name;
this.map39605 = map39605;
this.input_checker39609 = input_checker39609;
this.output_checker39610 = output_checker39610;
this.opts__24442__auto__ = opts__24442__auto__;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.link_item = link_item;
this.image = image;
this.meta39627 = meta39627;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t39626.cljs$lang$type = true;
stuttaford.codex.t39626.cljs$lang$ctorStr = "stuttaford.codex/t39626";
stuttaford.codex.t39626.cljs$lang$ctorPrWriter = ((function (owner,tags,image,description,uri,name,map39605,validate__837__auto__,ufv__,output_schema39607,input_schema39608,input_checker39609,output_checker39610,vec__39603,opts__24442__auto__){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"stuttaford.codex/t39626");
});})(owner,tags,image,description,uri,name,map39605,validate__837__auto__,ufv__,output_schema39607,input_schema39608,input_checker39609,output_checker39610,vec__39603,opts__24442__auto__))
;
stuttaford.codex.t39626.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t39626.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,tags,image,description,uri,name,map39605,validate__837__auto__,ufv__,output_schema39607,input_schema39608,input_checker39609,output_checker39610,vec__39603,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "link-item";
});})(owner,tags,image,description,uri,name,map39605,validate__837__auto__,ufv__,output_schema39607,input_schema39608,input_checker39609,output_checker39610,vec__39603,opts__24442__auto__))
;
stuttaford.codex.t39626.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t39626.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,tags,image,description,uri,name,map39605,validate__837__auto__,ufv__,output_schema39607,input_schema39608,input_checker39609,output_checker39610,vec__39603,opts__24442__auto__){
return (function (_,p__39629){var self__ = this;
var map__39630 = p__39629;var map__39630__$1 = ((cljs.core.seq_QMARK_(map__39630))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39630):map__39630);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39630__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var ___$1 = this;var G__39631 = {"className": "link"};var G__39632 = (function (){var G__39634 = {"href": self__.uri};var G__39635 = sablono.interpreter.interpret(self__.name);return React.DOM.a(G__39634,G__39635);
})();var G__39633 = sablono.interpreter.interpret(om.core.build_all.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.tag_item,(function (){var G__39636 = self__.tags;return (stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1 ? stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1(G__39636) : stuttaford.codex.name_sort.call(null,G__39636));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177)], null)));return React.DOM.li(G__39631,G__39632,G__39633);
});})(owner,tags,image,description,uri,name,map39605,validate__837__auto__,ufv__,output_schema39607,input_schema39608,input_checker39609,output_checker39610,vec__39603,opts__24442__auto__))
;
stuttaford.codex.t39626.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,tags,image,description,uri,name,map39605,validate__837__auto__,ufv__,output_schema39607,input_schema39608,input_checker39609,output_checker39610,vec__39603,opts__24442__auto__){
return (function (_39628){var self__ = this;
var _39628__$1 = this;return self__.meta39627;
});})(owner,tags,image,description,uri,name,map39605,validate__837__auto__,ufv__,output_schema39607,input_schema39608,input_checker39609,output_checker39610,vec__39603,opts__24442__auto__))
;
stuttaford.codex.t39626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,tags,image,description,uri,name,map39605,validate__837__auto__,ufv__,output_schema39607,input_schema39608,input_checker39609,output_checker39610,vec__39603,opts__24442__auto__){
return (function (_39628,meta39627__$1){var self__ = this;
var _39628__$1 = this;return (new stuttaford.codex.t39626(self__.uri,self__.owner,self__.vec__39603,self__.fnk39606,self__.description,self__.p__39567,self__.tags,self__.owner39565,self__.map39604,self__.G__39611,self__.data__24441__auto__,self__.input_schema39608,self__.output_schema39607,self__.name,self__.map39605,self__.input_checker39609,self__.output_checker39610,self__.opts__24442__auto__,self__.validate__837__auto__,self__.ufv__,self__.link_item,self__.image,meta39627__$1));
});})(owner,tags,image,description,uri,name,map39605,validate__837__auto__,ufv__,output_schema39607,input_schema39608,input_checker39609,output_checker39610,vec__39603,opts__24442__auto__))
;
stuttaford.codex.__GT_t39626 = ((function (owner,tags,image,description,uri,name,map39605,validate__837__auto__,ufv__,output_schema39607,input_schema39608,input_checker39609,output_checker39610,vec__39603,opts__24442__auto__){
return (function __GT_t39626(uri__$1,owner__$1,vec__39603__$1,fnk39606__$1,description__$1,p__39567__$1,tags__$1,owner39565__$1,map39604__$1,G__39611__$1,data__24441__auto____$1,input_schema39608__$1,output_schema39607__$1,name__$1,map39605__$1,input_checker39609__$1,output_checker39610__$1,opts__24442__auto____$1,validate__837__auto____$1,ufv____$1,link_item__$1,image__$1,meta39627){return (new stuttaford.codex.t39626(uri__$1,owner__$1,vec__39603__$1,fnk39606__$1,description__$1,p__39567__$1,tags__$1,owner39565__$1,map39604__$1,G__39611__$1,data__24441__auto____$1,input_schema39608__$1,output_schema39607__$1,name__$1,map39605__$1,input_checker39609__$1,output_checker39610__$1,opts__24442__auto____$1,validate__837__auto____$1,ufv____$1,link_item__$1,image__$1,meta39627));
});})(owner,tags,image,description,uri,name,map39605,validate__837__auto__,ufv__,output_schema39607,input_schema39608,input_checker39609,output_checker39610,vec__39603,opts__24442__auto__))
;
}
return (new stuttaford.codex.t39626(uri,owner,vec__39603,fnk39606,description,p__39567,tags,owner39565,map39604,G__39611,data__24441__auto__,input_schema39608,output_schema39607,name,map39605,input_checker39609,output_checker39610,opts__24442__auto__,validate__837__auto__,ufv__,link_item,image,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39641 = (function (){var G__39637 = o__840__auto__;return (output_checker39610.cljs$core$IFn$_invoke$arity$1 ? output_checker39610.cljs$core$IFn$_invoke$arity$1(G__39637) : output_checker39610.call(null,G__39637));
})();if(cljs.core.truth_(temp__4126__auto___39641))
{var error__839__auto___39642 = temp__4126__auto___39641;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39606","fnk39606",773611239,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39642], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39607,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39642], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema39607,input_schema39608,input_checker39609,output_checker39610,vec__39603,opts__24442__auto__))
,schema.core.make_fn_schema(output_schema39607,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39608], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24442__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner39565,new cljs.core.Keyword(null,"data","data",-232669377),data__24441__auto__], null));
};
var link_item = function (data__24441__auto__,owner39565,var_args){
var p__39567 = null;if (arguments.length > 2) {
  p__39567 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return link_item__delegate.call(this,data__24441__auto__,owner39565,p__39567);};
link_item.cljs$lang$maxFixedArity = 2;
link_item.cljs$lang$applyTo = (function (arglist__39643){
var data__24441__auto__ = cljs.core.first(arglist__39643);
arglist__39643 = cljs.core.next(arglist__39643);
var owner39565 = cljs.core.first(arglist__39643);
var p__39567 = cljs.core.rest(arglist__39643);
return link_item__delegate(data__24441__auto__,owner39565,p__39567);
});
link_item.cljs$core$IFn$_invoke$arity$variadic = link_item__delegate;
return link_item;
})()
;
stuttaford.codex.__GT_link_item = (function() {
var __GT_link_item = null;
var __GT_link_item__1 = (function (cursor__24410__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.link_item,cursor__24410__auto__);
});
var __GT_link_item__2 = (function (cursor__24410__auto__,m39566){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.link_item,cursor__24410__auto__,m39566);
});
__GT_link_item = function(cursor__24410__auto__,m39566){
switch(arguments.length){
case 1:
return __GT_link_item__1.call(this,cursor__24410__auto__);
case 2:
return __GT_link_item__2.call(this,cursor__24410__auto__,m39566);
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
var category_item__delegate = function (data__24441__auto__,owner39644,p__39646){var vec__39681 = p__39646;var opts__24442__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39681,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema39684 = schema.core.Any;var input_schema39685 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"links","links",-654507394),schema.core.Any,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map39682","map39682",652837454,null))], null);var input_checker39686 = schema.core.checker(input_schema39685);var output_checker39687 = schema.core.checker(output_schema39684);return schema.core.schematize_fn(((function (ufv__,output_schema39684,input_schema39685,input_checker39686,output_checker39687,vec__39681,opts__24442__auto__){
return (function fnk39683(G__39688){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39715 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39688], null);var temp__4126__auto___39716 = (function (){var G__39702 = args__838__auto___39715;return (input_checker39686.cljs$core$IFn$_invoke$arity$1 ? input_checker39686.cljs$core$IFn$_invoke$arity$1(G__39702) : input_checker39686.call(null,G__39702));
})();if(cljs.core.truth_(temp__4126__auto___39716))
{var error__839__auto___39717 = temp__4126__auto___39716;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39683","fnk39683",612846883,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39717], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39685,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39715,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39717], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map39682 = G__39688;while(true){
if(cljs.core.map_QMARK_(map39682))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map39682], 0))));
}
var data = plumbing.fnk.schema.safe_get(map39682,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var name = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var links = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map39682,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t39703 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t39703 = (function (fnk39683,p__39646,G__39688,owner,links,data,map39682,data__24441__auto__,input_schema39685,name,input_checker39686,output_checker39687,opts__24442__auto__,category_item,validate__837__auto__,output_schema39684,ufv__,vec__39681,owner39644,meta39704){
this.fnk39683 = fnk39683;
this.p__39646 = p__39646;
this.G__39688 = G__39688;
this.owner = owner;
this.links = links;
this.data = data;
this.map39682 = map39682;
this.data__24441__auto__ = data__24441__auto__;
this.input_schema39685 = input_schema39685;
this.name = name;
this.input_checker39686 = input_checker39686;
this.output_checker39687 = output_checker39687;
this.opts__24442__auto__ = opts__24442__auto__;
this.category_item = category_item;
this.validate__837__auto__ = validate__837__auto__;
this.output_schema39684 = output_schema39684;
this.ufv__ = ufv__;
this.vec__39681 = vec__39681;
this.owner39644 = owner39644;
this.meta39704 = meta39704;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t39703.cljs$lang$type = true;
stuttaford.codex.t39703.cljs$lang$ctorStr = "stuttaford.codex/t39703";
stuttaford.codex.t39703.cljs$lang$ctorPrWriter = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema39684,input_schema39685,input_checker39686,output_checker39687,vec__39681,opts__24442__auto__){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"stuttaford.codex/t39703");
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema39684,input_schema39685,input_checker39686,output_checker39687,vec__39681,opts__24442__auto__))
;
stuttaford.codex.t39703.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t39703.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema39684,input_schema39685,input_checker39686,output_checker39687,vec__39681,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "category-item";
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema39684,input_schema39685,input_checker39686,output_checker39687,vec__39681,opts__24442__auto__))
;
stuttaford.codex.t39703.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t39703.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema39684,input_schema39685,input_checker39686,output_checker39687,vec__39681,opts__24442__auto__){
return (function (_,p__39706){var self__ = this;
var map__39707 = p__39706;var map__39707__$1 = ((cljs.core.seq_QMARK_(map__39707))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39707):map__39707);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39707__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var ___$1 = this;var temp__4126__auto__ = cljs.core.seq((function (){var G__39708 = stuttaford.codex.search_items(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"tags-string","tags-string",-736299316)], null),search_term,self__.links);return (stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1 ? stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1(G__39708) : stuttaford.codex.name_sort.call(null,G__39708));
})());if(temp__4126__auto__)
{var links__$2 = temp__4126__auto__;var G__39711 = null;var G__39712 = (function (){var attrs39709 = self__.name;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs39709))?sablono.interpreter.attributes(attrs39709):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39709))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39709)], null))));
})();var G__39713 = (function (){var attrs39710 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.link_item,links__$2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177)], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.ul,((cljs.core.map_QMARK_(attrs39710))?sablono.interpreter.attributes(attrs39710):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39710))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39710)], null))));
})();return React.DOM.div(G__39711,G__39712,G__39713);
} else
{return null;
}
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema39684,input_schema39685,input_checker39686,output_checker39687,vec__39681,opts__24442__auto__))
;
stuttaford.codex.t39703.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema39684,input_schema39685,input_checker39686,output_checker39687,vec__39681,opts__24442__auto__){
return (function (_39705){var self__ = this;
var _39705__$1 = this;return self__.meta39704;
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema39684,input_schema39685,input_checker39686,output_checker39687,vec__39681,opts__24442__auto__))
;
stuttaford.codex.t39703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema39684,input_schema39685,input_checker39686,output_checker39687,vec__39681,opts__24442__auto__){
return (function (_39705,meta39704__$1){var self__ = this;
var _39705__$1 = this;return (new stuttaford.codex.t39703(self__.fnk39683,self__.p__39646,self__.G__39688,self__.owner,self__.links,self__.data,self__.map39682,self__.data__24441__auto__,self__.input_schema39685,self__.name,self__.input_checker39686,self__.output_checker39687,self__.opts__24442__auto__,self__.category_item,self__.validate__837__auto__,self__.output_schema39684,self__.ufv__,self__.vec__39681,self__.owner39644,meta39704__$1));
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema39684,input_schema39685,input_checker39686,output_checker39687,vec__39681,opts__24442__auto__))
;
stuttaford.codex.__GT_t39703 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema39684,input_schema39685,input_checker39686,output_checker39687,vec__39681,opts__24442__auto__){
return (function __GT_t39703(fnk39683__$1,p__39646__$1,G__39688__$1,owner__$1,links__$1,data__$1,map39682__$1,data__24441__auto____$1,input_schema39685__$1,name__$1,input_checker39686__$1,output_checker39687__$1,opts__24442__auto____$1,category_item__$1,validate__837__auto____$1,output_schema39684__$1,ufv____$1,vec__39681__$1,owner39644__$1,meta39704){return (new stuttaford.codex.t39703(fnk39683__$1,p__39646__$1,G__39688__$1,owner__$1,links__$1,data__$1,map39682__$1,data__24441__auto____$1,input_schema39685__$1,name__$1,input_checker39686__$1,output_checker39687__$1,opts__24442__auto____$1,category_item__$1,validate__837__auto____$1,output_schema39684__$1,ufv____$1,vec__39681__$1,owner39644__$1,meta39704));
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema39684,input_schema39685,input_checker39686,output_checker39687,vec__39681,opts__24442__auto__))
;
}
return (new stuttaford.codex.t39703(fnk39683,p__39646,G__39688,owner,links,data,map39682,data__24441__auto__,input_schema39685,name,input_checker39686,output_checker39687,opts__24442__auto__,category_item,validate__837__auto__,output_schema39684,ufv__,vec__39681,owner39644,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39718 = (function (){var G__39714 = o__840__auto__;return (output_checker39687.cljs$core$IFn$_invoke$arity$1 ? output_checker39687.cljs$core$IFn$_invoke$arity$1(G__39714) : output_checker39687.call(null,G__39714));
})();if(cljs.core.truth_(temp__4126__auto___39718))
{var error__839__auto___39719 = temp__4126__auto___39718;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39683","fnk39683",612846883,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39719], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39684,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39719], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema39684,input_schema39685,input_checker39686,output_checker39687,vec__39681,opts__24442__auto__))
,schema.core.make_fn_schema(output_schema39684,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39685], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24442__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner39644,new cljs.core.Keyword(null,"data","data",-232669377),data__24441__auto__], null));
};
var category_item = function (data__24441__auto__,owner39644,var_args){
var p__39646 = null;if (arguments.length > 2) {
  p__39646 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return category_item__delegate.call(this,data__24441__auto__,owner39644,p__39646);};
category_item.cljs$lang$maxFixedArity = 2;
category_item.cljs$lang$applyTo = (function (arglist__39720){
var data__24441__auto__ = cljs.core.first(arglist__39720);
arglist__39720 = cljs.core.next(arglist__39720);
var owner39644 = cljs.core.first(arglist__39720);
var p__39646 = cljs.core.rest(arglist__39720);
return category_item__delegate(data__24441__auto__,owner39644,p__39646);
});
category_item.cljs$core$IFn$_invoke$arity$variadic = category_item__delegate;
return category_item;
})()
;
stuttaford.codex.__GT_category_item = (function() {
var __GT_category_item = null;
var __GT_category_item__1 = (function (cursor__24410__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.category_item,cursor__24410__auto__);
});
var __GT_category_item__2 = (function (cursor__24410__auto__,m39645){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.category_item,cursor__24410__auto__,m39645);
});
__GT_category_item = function(cursor__24410__auto__,m39645){
switch(arguments.length){
case 1:
return __GT_category_item__1.call(this,cursor__24410__auto__);
case 2:
return __GT_category_item__2.call(this,cursor__24410__auto__,m39645);
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
var app_view__delegate = function (data__24441__auto__,owner39722,p__39724){var vec__39832 = p__39724;var opts__24442__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39832,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema39836 = schema.core.Any;var input_schema39837 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"categories","categories",178386610),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map39833","map39833",375250568,null))], null);var input_checker39838 = schema.core.checker(input_schema39837);var output_checker39839 = schema.core.checker(output_schema39836);return schema.core.schematize_fn(((function (ufv__,output_schema39836,input_schema39837,input_checker39838,output_checker39839,vec__39832,opts__24442__auto__){
return (function fnk39835(G__39840){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39939 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39840], null);var temp__4126__auto___39940 = (function (){var G__39890 = args__838__auto___39939;return (input_checker39838.cljs$core$IFn$_invoke$arity$1 ? input_checker39838.cljs$core$IFn$_invoke$arity$1(G__39890) : input_checker39838.call(null,G__39890));
})();if(cljs.core.truth_(temp__4126__auto___39940))
{var error__839__auto___39941 = temp__4126__auto___39940;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39835","fnk39835",552443100,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39941], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39837,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39939,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39941], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map39833 = G__39840;while(true){
if(cljs.core.map_QMARK_(map39833))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map39833], 0))));
}
var map39834 = plumbing.fnk.schema.safe_get(map39833,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var categories = plumbing.fnk.schema.safe_get(map39834,new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map39833,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t39891 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t39891 = (function (app_view,owner,p__39724,output_schema39836,output_checker39839,map39833,vec__39832,data__24441__auto__,input_schema39837,map39834,categories,opts__24442__auto__,validate__837__auto__,fnk39835,owner39722,G__39840,input_checker39838,ufv__,meta39892){
this.app_view = app_view;
this.owner = owner;
this.p__39724 = p__39724;
this.output_schema39836 = output_schema39836;
this.output_checker39839 = output_checker39839;
this.map39833 = map39833;
this.vec__39832 = vec__39832;
this.data__24441__auto__ = data__24441__auto__;
this.input_schema39837 = input_schema39837;
this.map39834 = map39834;
this.categories = categories;
this.opts__24442__auto__ = opts__24442__auto__;
this.validate__837__auto__ = validate__837__auto__;
this.fnk39835 = fnk39835;
this.owner39722 = owner39722;
this.G__39840 = G__39840;
this.input_checker39838 = input_checker39838;
this.ufv__ = ufv__;
this.meta39892 = meta39892;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t39891.cljs$lang$type = true;
stuttaford.codex.t39891.cljs$lang$ctorStr = "stuttaford.codex/t39891";
stuttaford.codex.t39891.cljs$lang$ctorPrWriter = ((function (owner,categories,map39834,validate__837__auto__,ufv__,output_schema39836,input_schema39837,input_checker39838,output_checker39839,vec__39832,opts__24442__auto__){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"stuttaford.codex/t39891");
});})(owner,categories,map39834,validate__837__auto__,ufv__,output_schema39836,input_schema39837,input_checker39838,output_checker39839,vec__39832,opts__24442__auto__))
;
stuttaford.codex.t39891.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t39891.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,categories,map39834,validate__837__auto__,ufv__,output_schema39836,input_schema39837,input_checker39838,output_checker39839,vec__39832,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "app-view";
});})(owner,categories,map39834,validate__837__auto__,ufv__,output_schema39836,input_schema39837,input_checker39838,output_checker39839,vec__39832,opts__24442__auto__))
;
stuttaford.codex.t39891.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t39891.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,categories,map39834,validate__837__auto__,ufv__,output_schema39836,input_schema39837,input_checker39838,output_checker39839,vec__39832,opts__24442__auto__){
return (function (_,p__39894){var self__ = this;
var map__39895 = p__39894;var map__39895__$1 = ((cljs.core.seq_QMARK_(map__39895))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39895):map__39895);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39895__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var search_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39895__$1,new cljs.core.Keyword(null,"search-chan","search-chan",962868037));var ___$1 = this;var G__39896 = null;var G__39897 = (function (){var G__39899 = {"id": "search", "type": "text", "placeholder": "Search for link", "autoFocus": "autofocus", "value": search_term, "onChange": ((function (G__39896,___$1,map__39895,map__39895__$1,search_term,search_chan,owner,categories,map39834,validate__837__auto__,ufv__,output_schema39836,input_schema39837,input_checker39838,output_checker39839,vec__39832,opts__24442__auto__){
return (function (p1__39721_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(search_chan,p1__39721_SHARP_.target.value);
});})(G__39896,___$1,map__39895,map__39895__$1,search_term,search_chan,owner,categories,map39834,validate__837__auto__,ufv__,output_schema39836,input_schema39837,input_checker39838,output_checker39839,vec__39832,opts__24442__auto__))
};return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__39899) : sablono.interpreter.input.call(null,G__39899));
})();var G__39898 = sablono.interpreter.interpret(om.core.build_all.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.category_item,(function (){var G__39900 = self__.categories;return (stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1 ? stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1(G__39900) : stuttaford.codex.name_sort.call(null,G__39900));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177)], null)));return React.DOM.div(G__39896,G__39897,G__39898);
});})(owner,categories,map39834,validate__837__auto__,ufv__,output_schema39836,input_schema39837,input_checker39838,output_checker39839,vec__39832,opts__24442__auto__))
;
stuttaford.codex.t39891.prototype.om$core$IWillMount$ = true;
stuttaford.codex.t39891.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (owner,categories,map39834,validate__837__auto__,ufv__,output_schema39836,input_schema39837,input_checker39838,output_checker39839,vec__39832,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var search_chan = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"search-chan","search-chan",962868037));var c__22986__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22986__auto__,search_chan,___$1,owner,categories,map39834,validate__837__auto__,ufv__,output_schema39836,input_schema39837,input_checker39838,output_checker39839,vec__39832,opts__24442__auto__){
return (function (){var f__22987__auto__ = (function (){var switch__22971__auto__ = ((function (c__22986__auto__,search_chan,___$1,owner,categories,map39834,validate__837__auto__,ufv__,output_schema39836,input_schema39837,input_checker39838,output_checker39839,vec__39832,opts__24442__auto__){
return (function (state_39917){var state_val_39918 = (state_39917[(1)]);if((state_val_39918 === (7)))
{var inst_39904 = (state_39917[(7)]);var inst_39904__$1 = (state_39917[(2)]);var state_39917__$1 = (function (){var statearr_39919 = state_39917;(statearr_39919[(7)] = inst_39904__$1);
return statearr_39919;
})();if(cljs.core.truth_(inst_39904__$1))
{var statearr_39920_39942 = state_39917__$1;(statearr_39920_39942[(1)] = (8));
} else
{var statearr_39921_39943 = state_39917__$1;(statearr_39921_39943[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39918 === (1)))
{var state_39917__$1 = state_39917;var statearr_39922_39944 = state_39917__$1;(statearr_39922_39944[(2)] = null);
(statearr_39922_39944[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39918 === (4)))
{var state_39917__$1 = state_39917;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39917__$1,(7),search_chan);
} else
{if((state_val_39918 === (6)))
{var inst_39913 = (state_39917[(2)]);var state_39917__$1 = state_39917;var statearr_39923_39945 = state_39917__$1;(statearr_39923_39945[(2)] = inst_39913);
(statearr_39923_39945[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39918 === (3)))
{var inst_39915 = (state_39917[(2)]);var state_39917__$1 = state_39917;return cljs.core.async.impl.ioc_helpers.return_chan(state_39917__$1,inst_39915);
} else
{if((state_val_39918 === (2)))
{var state_39917__$1 = state_39917;var statearr_39924_39946 = state_39917__$1;(statearr_39924_39946[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39918 === (9)))
{var state_39917__$1 = state_39917;var statearr_39926_39947 = state_39917__$1;(statearr_39926_39947[(2)] = null);
(statearr_39926_39947[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39918 === (5)))
{var state_39917__$1 = state_39917;var statearr_39927_39948 = state_39917__$1;(statearr_39927_39948[(2)] = null);
(statearr_39927_39948[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39918 === (10)))
{var inst_39909 = (state_39917[(2)]);var state_39917__$1 = (function (){var statearr_39928 = state_39917;(statearr_39928[(8)] = inst_39909);
return statearr_39928;
})();var statearr_39929_39949 = state_39917__$1;(statearr_39929_39949[(2)] = null);
(statearr_39929_39949[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39918 === (8)))
{var inst_39904 = (state_39917[(7)]);var inst_39906 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"search-term","search-term",356193544),inst_39904);var state_39917__$1 = state_39917;var statearr_39930_39950 = state_39917__$1;(statearr_39930_39950[(2)] = inst_39906);
(statearr_39930_39950[(1)] = (10));
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
});})(c__22986__auto__,search_chan,___$1,owner,categories,map39834,validate__837__auto__,ufv__,output_schema39836,input_schema39837,input_checker39838,output_checker39839,vec__39832,opts__24442__auto__))
;return ((function (switch__22971__auto__,c__22986__auto__,search_chan,___$1,owner,categories,map39834,validate__837__auto__,ufv__,output_schema39836,input_schema39837,input_checker39838,output_checker39839,vec__39832,opts__24442__auto__){
return (function() {
var state_machine__22972__auto__ = null;
var state_machine__22972__auto____0 = (function (){var statearr_39934 = [null,null,null,null,null,null,null,null,null];(statearr_39934[(0)] = state_machine__22972__auto__);
(statearr_39934[(1)] = (1));
return statearr_39934;
});
var state_machine__22972__auto____1 = (function (state_39917){while(true){
var ret_value__22973__auto__ = (function (){try{while(true){
var result__22974__auto__ = switch__22971__auto__(state_39917);if(cljs.core.keyword_identical_QMARK_(result__22974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22974__auto__;
}
break;
}
}catch (e39935){if((e39935 instanceof Object))
{var ex__22975__auto__ = e39935;var statearr_39936_39951 = state_39917;(statearr_39936_39951[(5)] = ex__22975__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39917);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e39935;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__39952 = state_39917;
state_39917 = G__39952;
continue;
}
} else
{return ret_value__22973__auto__;
}
break;
}
});
state_machine__22972__auto__ = function(state_39917){
switch(arguments.length){
case 0:
return state_machine__22972__auto____0.call(this);
case 1:
return state_machine__22972__auto____1.call(this,state_39917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22972__auto____0;
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22972__auto____1;
return state_machine__22972__auto__;
})()
;})(switch__22971__auto__,c__22986__auto__,search_chan,___$1,owner,categories,map39834,validate__837__auto__,ufv__,output_schema39836,input_schema39837,input_checker39838,output_checker39839,vec__39832,opts__24442__auto__))
})();var state__22988__auto__ = (function (){var statearr_39937 = (function (){return (f__22987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22987__auto__.cljs$core$IFn$_invoke$arity$0() : f__22987__auto__.call(null));
})();(statearr_39937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22986__auto__);
return statearr_39937;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22988__auto__);
});})(c__22986__auto__,search_chan,___$1,owner,categories,map39834,validate__837__auto__,ufv__,output_schema39836,input_schema39837,input_checker39838,output_checker39839,vec__39832,opts__24442__auto__))
);
return c__22986__auto__;
});})(owner,categories,map39834,validate__837__auto__,ufv__,output_schema39836,input_schema39837,input_checker39838,output_checker39839,vec__39832,opts__24442__auto__))
;
stuttaford.codex.t39891.prototype.om$core$IInitState$ = true;
stuttaford.codex.t39891.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,categories,map39834,validate__837__auto__,ufv__,output_schema39836,input_schema39837,input_checker39838,output_checker39839,vec__39832,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-chan","search-chan",962868037),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0()], null);
});})(owner,categories,map39834,validate__837__auto__,ufv__,output_schema39836,input_schema39837,input_checker39838,output_checker39839,vec__39832,opts__24442__auto__))
;
stuttaford.codex.t39891.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,categories,map39834,validate__837__auto__,ufv__,output_schema39836,input_schema39837,input_checker39838,output_checker39839,vec__39832,opts__24442__auto__){
return (function (_39893){var self__ = this;
var _39893__$1 = this;return self__.meta39892;
});})(owner,categories,map39834,validate__837__auto__,ufv__,output_schema39836,input_schema39837,input_checker39838,output_checker39839,vec__39832,opts__24442__auto__))
;
stuttaford.codex.t39891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,categories,map39834,validate__837__auto__,ufv__,output_schema39836,input_schema39837,input_checker39838,output_checker39839,vec__39832,opts__24442__auto__){
return (function (_39893,meta39892__$1){var self__ = this;
var _39893__$1 = this;return (new stuttaford.codex.t39891(self__.app_view,self__.owner,self__.p__39724,self__.output_schema39836,self__.output_checker39839,self__.map39833,self__.vec__39832,self__.data__24441__auto__,self__.input_schema39837,self__.map39834,self__.categories,self__.opts__24442__auto__,self__.validate__837__auto__,self__.fnk39835,self__.owner39722,self__.G__39840,self__.input_checker39838,self__.ufv__,meta39892__$1));
});})(owner,categories,map39834,validate__837__auto__,ufv__,output_schema39836,input_schema39837,input_checker39838,output_checker39839,vec__39832,opts__24442__auto__))
;
stuttaford.codex.__GT_t39891 = ((function (owner,categories,map39834,validate__837__auto__,ufv__,output_schema39836,input_schema39837,input_checker39838,output_checker39839,vec__39832,opts__24442__auto__){
return (function __GT_t39891(app_view__$1,owner__$1,p__39724__$1,output_schema39836__$1,output_checker39839__$1,map39833__$1,vec__39832__$1,data__24441__auto____$1,input_schema39837__$1,map39834__$1,categories__$1,opts__24442__auto____$1,validate__837__auto____$1,fnk39835__$1,owner39722__$1,G__39840__$1,input_checker39838__$1,ufv____$1,meta39892){return (new stuttaford.codex.t39891(app_view__$1,owner__$1,p__39724__$1,output_schema39836__$1,output_checker39839__$1,map39833__$1,vec__39832__$1,data__24441__auto____$1,input_schema39837__$1,map39834__$1,categories__$1,opts__24442__auto____$1,validate__837__auto____$1,fnk39835__$1,owner39722__$1,G__39840__$1,input_checker39838__$1,ufv____$1,meta39892));
});})(owner,categories,map39834,validate__837__auto__,ufv__,output_schema39836,input_schema39837,input_checker39838,output_checker39839,vec__39832,opts__24442__auto__))
;
}
return (new stuttaford.codex.t39891(app_view,owner,p__39724,output_schema39836,output_checker39839,map39833,vec__39832,data__24441__auto__,input_schema39837,map39834,categories,opts__24442__auto__,validate__837__auto__,fnk39835,owner39722,G__39840,input_checker39838,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39953 = (function (){var G__39938 = o__840__auto__;return (output_checker39839.cljs$core$IFn$_invoke$arity$1 ? output_checker39839.cljs$core$IFn$_invoke$arity$1(G__39938) : output_checker39839.call(null,G__39938));
})();if(cljs.core.truth_(temp__4126__auto___39953))
{var error__839__auto___39954 = temp__4126__auto___39953;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39835","fnk39835",552443100,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39954], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39836,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39954], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema39836,input_schema39837,input_checker39838,output_checker39839,vec__39832,opts__24442__auto__))
,schema.core.make_fn_schema(output_schema39836,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39837], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24442__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner39722,new cljs.core.Keyword(null,"data","data",-232669377),data__24441__auto__], null));
};
var app_view = function (data__24441__auto__,owner39722,var_args){
var p__39724 = null;if (arguments.length > 2) {
  p__39724 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_view__delegate.call(this,data__24441__auto__,owner39722,p__39724);};
app_view.cljs$lang$maxFixedArity = 2;
app_view.cljs$lang$applyTo = (function (arglist__39955){
var data__24441__auto__ = cljs.core.first(arglist__39955);
arglist__39955 = cljs.core.next(arglist__39955);
var owner39722 = cljs.core.first(arglist__39955);
var p__39724 = cljs.core.rest(arglist__39955);
return app_view__delegate(data__24441__auto__,owner39722,p__39724);
});
app_view.cljs$core$IFn$_invoke$arity$variadic = app_view__delegate;
return app_view;
})()
;
stuttaford.codex.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__24410__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.app_view,cursor__24410__auto__);
});
var __GT_app_view__2 = (function (cursor__24410__auto__,m39723){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.app_view,cursor__24410__auto__,m39723);
});
__GT_app_view = function(cursor__24410__auto__,m39723){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__24410__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__24410__auto__,m39723);
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