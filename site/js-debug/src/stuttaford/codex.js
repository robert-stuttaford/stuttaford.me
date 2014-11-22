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
var tag_item__delegate = function (data__24457__auto__,owner47289,p__47291){var vec__47319 = p__47291;var opts__24458__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47319,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema47323 = schema.core.Any;var input_schema47324 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map47320","map47320",318841824,null))], null);var input_checker47325 = schema.core.checker(input_schema47324);var output_checker47326 = schema.core.checker(output_schema47323);return schema.core.schematize_fn(((function (ufv__,output_schema47323,input_schema47324,input_checker47325,output_checker47326,vec__47319,opts__24458__auto__){
return (function fnk47322(G__47327){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___47346 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__47327], null);var temp__4126__auto___47347 = (function (){var G__47337 = args__838__auto___47346;return (input_checker47325.cljs$core$IFn$_invoke$arity$1 ? input_checker47325.cljs$core$IFn$_invoke$arity$1(G__47337) : input_checker47325.call(null,G__47337));
})();if(cljs.core.truth_(temp__4126__auto___47347))
{var error__839__auto___47348 = temp__4126__auto___47347;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk47322","fnk47322",1192463914,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___47348], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema47324,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___47346,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___47348], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map47320 = G__47327;while(true){
if(cljs.core.map_QMARK_(map47320))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map47320], 0))));
}
var map47321 = plumbing.fnk.schema.safe_get(map47320,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var name = plumbing.fnk.schema.safe_get(map47321,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map47320,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t47338 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t47338 = (function (map47320,owner,p__47291,fnk47322,input_schema47324,map47321,G__47327,name,opts__24458__auto__,output_schema47323,vec__47319,validate__837__auto__,owner47289,ufv__,data__24457__auto__,input_checker47325,tag_item,output_checker47326,meta47339){
this.map47320 = map47320;
this.owner = owner;
this.p__47291 = p__47291;
this.fnk47322 = fnk47322;
this.input_schema47324 = input_schema47324;
this.map47321 = map47321;
this.G__47327 = G__47327;
this.name = name;
this.opts__24458__auto__ = opts__24458__auto__;
this.output_schema47323 = output_schema47323;
this.vec__47319 = vec__47319;
this.validate__837__auto__ = validate__837__auto__;
this.owner47289 = owner47289;
this.ufv__ = ufv__;
this.data__24457__auto__ = data__24457__auto__;
this.input_checker47325 = input_checker47325;
this.tag_item = tag_item;
this.output_checker47326 = output_checker47326;
this.meta47339 = meta47339;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t47338.cljs$lang$type = true;
stuttaford.codex.t47338.cljs$lang$ctorStr = "stuttaford.codex/t47338";
stuttaford.codex.t47338.cljs$lang$ctorPrWriter = ((function (owner,name,map47321,validate__837__auto__,ufv__,output_schema47323,input_schema47324,input_checker47325,output_checker47326,vec__47319,opts__24458__auto__){
return (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"stuttaford.codex/t47338");
});})(owner,name,map47321,validate__837__auto__,ufv__,output_schema47323,input_schema47324,input_checker47325,output_checker47326,vec__47319,opts__24458__auto__))
;
stuttaford.codex.t47338.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t47338.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,name,map47321,validate__837__auto__,ufv__,output_schema47323,input_schema47324,input_checker47325,output_checker47326,vec__47319,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-item";
});})(owner,name,map47321,validate__837__auto__,ufv__,output_schema47323,input_schema47324,input_checker47325,output_checker47326,vec__47319,opts__24458__auto__))
;
stuttaford.codex.t47338.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t47338.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,name,map47321,validate__837__auto__,ufv__,output_schema47323,input_schema47324,input_checker47325,output_checker47326,vec__47319,opts__24458__auto__){
return (function (_,p__47341){var self__ = this;
var map__47342 = p__47341;var map__47342__$1 = ((cljs.core.seq_QMARK_(map__47342))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47342):map__47342);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47342__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var ___$1 = this;var class$ = (cljs.core.truth_((function (){var and__19670__auto__ = cljs.core.seq(search_term);if(and__19670__auto__)
{return cljs.core.re_find(stuttaford.codex.regex(search_term),self__.name);
} else
{return and__19670__auto__;
}
})())?"tag active":"tag");var G__47343 = {"className": class$, "onClick": ((function (class$,___$1,map__47342,map__47342__$1,search_term,owner,name,map47321,validate__837__auto__,ufv__,output_schema47323,input_schema47324,input_checker47325,output_checker47326,vec__47319,opts__24458__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"search-chan","search-chan",962868037)),self__.name);
});})(class$,___$1,map__47342,map__47342__$1,search_term,owner,name,map47321,validate__837__auto__,ufv__,output_schema47323,input_schema47324,input_checker47325,output_checker47326,vec__47319,opts__24458__auto__))
};var G__47344 = sablono.interpreter.interpret(self__.name);return React.DOM.a(G__47343,G__47344);
});})(owner,name,map47321,validate__837__auto__,ufv__,output_schema47323,input_schema47324,input_checker47325,output_checker47326,vec__47319,opts__24458__auto__))
;
stuttaford.codex.t47338.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,name,map47321,validate__837__auto__,ufv__,output_schema47323,input_schema47324,input_checker47325,output_checker47326,vec__47319,opts__24458__auto__){
return (function (_47340){var self__ = this;
var _47340__$1 = this;return self__.meta47339;
});})(owner,name,map47321,validate__837__auto__,ufv__,output_schema47323,input_schema47324,input_checker47325,output_checker47326,vec__47319,opts__24458__auto__))
;
stuttaford.codex.t47338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,name,map47321,validate__837__auto__,ufv__,output_schema47323,input_schema47324,input_checker47325,output_checker47326,vec__47319,opts__24458__auto__){
return (function (_47340,meta47339__$1){var self__ = this;
var _47340__$1 = this;return (new stuttaford.codex.t47338(self__.map47320,self__.owner,self__.p__47291,self__.fnk47322,self__.input_schema47324,self__.map47321,self__.G__47327,self__.name,self__.opts__24458__auto__,self__.output_schema47323,self__.vec__47319,self__.validate__837__auto__,self__.owner47289,self__.ufv__,self__.data__24457__auto__,self__.input_checker47325,self__.tag_item,self__.output_checker47326,meta47339__$1));
});})(owner,name,map47321,validate__837__auto__,ufv__,output_schema47323,input_schema47324,input_checker47325,output_checker47326,vec__47319,opts__24458__auto__))
;
stuttaford.codex.__GT_t47338 = ((function (owner,name,map47321,validate__837__auto__,ufv__,output_schema47323,input_schema47324,input_checker47325,output_checker47326,vec__47319,opts__24458__auto__){
return (function __GT_t47338(map47320__$1,owner__$1,p__47291__$1,fnk47322__$1,input_schema47324__$1,map47321__$1,G__47327__$1,name__$1,opts__24458__auto____$1,output_schema47323__$1,vec__47319__$1,validate__837__auto____$1,owner47289__$1,ufv____$1,data__24457__auto____$1,input_checker47325__$1,tag_item__$1,output_checker47326__$1,meta47339){return (new stuttaford.codex.t47338(map47320__$1,owner__$1,p__47291__$1,fnk47322__$1,input_schema47324__$1,map47321__$1,G__47327__$1,name__$1,opts__24458__auto____$1,output_schema47323__$1,vec__47319__$1,validate__837__auto____$1,owner47289__$1,ufv____$1,data__24457__auto____$1,input_checker47325__$1,tag_item__$1,output_checker47326__$1,meta47339));
});})(owner,name,map47321,validate__837__auto__,ufv__,output_schema47323,input_schema47324,input_checker47325,output_checker47326,vec__47319,opts__24458__auto__))
;
}
return (new stuttaford.codex.t47338(map47320,owner,p__47291,fnk47322,input_schema47324,map47321,G__47327,name,opts__24458__auto__,output_schema47323,vec__47319,validate__837__auto__,owner47289,ufv__,data__24457__auto__,input_checker47325,tag_item,output_checker47326,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___47349 = (function (){var G__47345 = o__840__auto__;return (output_checker47326.cljs$core$IFn$_invoke$arity$1 ? output_checker47326.cljs$core$IFn$_invoke$arity$1(G__47345) : output_checker47326.call(null,G__47345));
})();if(cljs.core.truth_(temp__4126__auto___47349))
{var error__839__auto___47350 = temp__4126__auto___47349;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk47322","fnk47322",1192463914,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___47350], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema47323,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___47350], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema47323,input_schema47324,input_checker47325,output_checker47326,vec__47319,opts__24458__auto__))
,schema.core.make_fn_schema(output_schema47323,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema47324], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24458__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner47289,new cljs.core.Keyword(null,"data","data",-232669377),data__24457__auto__], null));
};
var tag_item = function (data__24457__auto__,owner47289,var_args){
var p__47291 = null;if (arguments.length > 2) {
  p__47291 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_item__delegate.call(this,data__24457__auto__,owner47289,p__47291);};
tag_item.cljs$lang$maxFixedArity = 2;
tag_item.cljs$lang$applyTo = (function (arglist__47351){
var data__24457__auto__ = cljs.core.first(arglist__47351);
arglist__47351 = cljs.core.next(arglist__47351);
var owner47289 = cljs.core.first(arglist__47351);
var p__47291 = cljs.core.rest(arglist__47351);
return tag_item__delegate(data__24457__auto__,owner47289,p__47291);
});
tag_item.cljs$core$IFn$_invoke$arity$variadic = tag_item__delegate;
return tag_item;
})()
;
stuttaford.codex.__GT_tag_item = (function() {
var __GT_tag_item = null;
var __GT_tag_item__1 = (function (cursor__24426__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.tag_item,cursor__24426__auto__);
});
var __GT_tag_item__2 = (function (cursor__24426__auto__,m47290){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.tag_item,cursor__24426__auto__,m47290);
});
__GT_tag_item = function(cursor__24426__auto__,m47290){
switch(arguments.length){
case 1:
return __GT_tag_item__1.call(this,cursor__24426__auto__);
case 2:
return __GT_tag_item__2.call(this,cursor__24426__auto__,m47290);
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
var link_item__delegate = function (data__24457__auto__,owner47352,p__47354){var vec__47390 = p__47354;var opts__24458__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47390,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema47394 = schema.core.Any;var input_schema47395 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"tags","tags",1771418977)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"image","image",-58725096)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"description","description",-1428560544)),schema.core.Any,new cljs.core.Keyword(null,"uri","uri",-774711847),schema.core.Any,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map47391","map47391",1769187895,null))], null);var input_checker47396 = schema.core.checker(input_schema47395);var output_checker47397 = schema.core.checker(output_schema47394);return schema.core.schematize_fn(((function (ufv__,output_schema47394,input_schema47395,input_checker47396,output_checker47397,vec__47390,opts__24458__auto__){
return (function fnk47393(G__47398){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___47425 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__47398], null);var temp__4126__auto___47426 = (function (){var G__47412 = args__838__auto___47425;return (input_checker47396.cljs$core$IFn$_invoke$arity$1 ? input_checker47396.cljs$core$IFn$_invoke$arity$1(G__47412) : input_checker47396.call(null,G__47412));
})();if(cljs.core.truth_(temp__4126__auto___47426))
{var error__839__auto___47427 = temp__4126__auto___47426;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk47393","fnk47393",-1144861673,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___47427], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema47395,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___47425,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___47427], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map47391 = G__47398;while(true){
if(cljs.core.map_QMARK_(map47391))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map47391], 0))));
}
var map47392 = plumbing.fnk.schema.safe_get(map47391,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var name = plumbing.fnk.schema.safe_get(map47392,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var uri = plumbing.fnk.schema.safe_get(map47392,new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var description = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map47392,new cljs.core.Keyword(null,"description","description",-1428560544),null);var image = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map47392,new cljs.core.Keyword(null,"image","image",-58725096),null);var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map47392,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map47391,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t47413 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t47413 = (function (uri,input_schema47395,input_checker47396,owner,description,vec__47390,tags,owner47352,output_checker47397,name,output_schema47394,opts__24458__auto__,fnk47393,map47391,G__47398,p__47354,validate__837__auto__,map47392,ufv__,data__24457__auto__,link_item,image,meta47414){
this.uri = uri;
this.input_schema47395 = input_schema47395;
this.input_checker47396 = input_checker47396;
this.owner = owner;
this.description = description;
this.vec__47390 = vec__47390;
this.tags = tags;
this.owner47352 = owner47352;
this.output_checker47397 = output_checker47397;
this.name = name;
this.output_schema47394 = output_schema47394;
this.opts__24458__auto__ = opts__24458__auto__;
this.fnk47393 = fnk47393;
this.map47391 = map47391;
this.G__47398 = G__47398;
this.p__47354 = p__47354;
this.validate__837__auto__ = validate__837__auto__;
this.map47392 = map47392;
this.ufv__ = ufv__;
this.data__24457__auto__ = data__24457__auto__;
this.link_item = link_item;
this.image = image;
this.meta47414 = meta47414;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t47413.cljs$lang$type = true;
stuttaford.codex.t47413.cljs$lang$ctorStr = "stuttaford.codex/t47413";
stuttaford.codex.t47413.cljs$lang$ctorPrWriter = ((function (owner,tags,image,description,uri,name,map47392,validate__837__auto__,ufv__,output_schema47394,input_schema47395,input_checker47396,output_checker47397,vec__47390,opts__24458__auto__){
return (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"stuttaford.codex/t47413");
});})(owner,tags,image,description,uri,name,map47392,validate__837__auto__,ufv__,output_schema47394,input_schema47395,input_checker47396,output_checker47397,vec__47390,opts__24458__auto__))
;
stuttaford.codex.t47413.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t47413.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,tags,image,description,uri,name,map47392,validate__837__auto__,ufv__,output_schema47394,input_schema47395,input_checker47396,output_checker47397,vec__47390,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "link-item";
});})(owner,tags,image,description,uri,name,map47392,validate__837__auto__,ufv__,output_schema47394,input_schema47395,input_checker47396,output_checker47397,vec__47390,opts__24458__auto__))
;
stuttaford.codex.t47413.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t47413.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,tags,image,description,uri,name,map47392,validate__837__auto__,ufv__,output_schema47394,input_schema47395,input_checker47396,output_checker47397,vec__47390,opts__24458__auto__){
return (function (_,p__47416){var self__ = this;
var map__47417 = p__47416;var map__47417__$1 = ((cljs.core.seq_QMARK_(map__47417))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47417):map__47417);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47417__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var ___$1 = this;var G__47418 = {"className": "link"};var G__47419 = (function (){var G__47421 = {"href": self__.uri};var G__47422 = sablono.interpreter.interpret(self__.name);return React.DOM.a(G__47421,G__47422);
})();var G__47420 = sablono.interpreter.interpret(om.core.build_all.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.tag_item,(function (){var G__47423 = self__.tags;return (stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1 ? stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1(G__47423) : stuttaford.codex.name_sort.call(null,G__47423));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177)], null)));return React.DOM.li(G__47418,G__47419,G__47420);
});})(owner,tags,image,description,uri,name,map47392,validate__837__auto__,ufv__,output_schema47394,input_schema47395,input_checker47396,output_checker47397,vec__47390,opts__24458__auto__))
;
stuttaford.codex.t47413.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,tags,image,description,uri,name,map47392,validate__837__auto__,ufv__,output_schema47394,input_schema47395,input_checker47396,output_checker47397,vec__47390,opts__24458__auto__){
return (function (_47415){var self__ = this;
var _47415__$1 = this;return self__.meta47414;
});})(owner,tags,image,description,uri,name,map47392,validate__837__auto__,ufv__,output_schema47394,input_schema47395,input_checker47396,output_checker47397,vec__47390,opts__24458__auto__))
;
stuttaford.codex.t47413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,tags,image,description,uri,name,map47392,validate__837__auto__,ufv__,output_schema47394,input_schema47395,input_checker47396,output_checker47397,vec__47390,opts__24458__auto__){
return (function (_47415,meta47414__$1){var self__ = this;
var _47415__$1 = this;return (new stuttaford.codex.t47413(self__.uri,self__.input_schema47395,self__.input_checker47396,self__.owner,self__.description,self__.vec__47390,self__.tags,self__.owner47352,self__.output_checker47397,self__.name,self__.output_schema47394,self__.opts__24458__auto__,self__.fnk47393,self__.map47391,self__.G__47398,self__.p__47354,self__.validate__837__auto__,self__.map47392,self__.ufv__,self__.data__24457__auto__,self__.link_item,self__.image,meta47414__$1));
});})(owner,tags,image,description,uri,name,map47392,validate__837__auto__,ufv__,output_schema47394,input_schema47395,input_checker47396,output_checker47397,vec__47390,opts__24458__auto__))
;
stuttaford.codex.__GT_t47413 = ((function (owner,tags,image,description,uri,name,map47392,validate__837__auto__,ufv__,output_schema47394,input_schema47395,input_checker47396,output_checker47397,vec__47390,opts__24458__auto__){
return (function __GT_t47413(uri__$1,input_schema47395__$1,input_checker47396__$1,owner__$1,description__$1,vec__47390__$1,tags__$1,owner47352__$1,output_checker47397__$1,name__$1,output_schema47394__$1,opts__24458__auto____$1,fnk47393__$1,map47391__$1,G__47398__$1,p__47354__$1,validate__837__auto____$1,map47392__$1,ufv____$1,data__24457__auto____$1,link_item__$1,image__$1,meta47414){return (new stuttaford.codex.t47413(uri__$1,input_schema47395__$1,input_checker47396__$1,owner__$1,description__$1,vec__47390__$1,tags__$1,owner47352__$1,output_checker47397__$1,name__$1,output_schema47394__$1,opts__24458__auto____$1,fnk47393__$1,map47391__$1,G__47398__$1,p__47354__$1,validate__837__auto____$1,map47392__$1,ufv____$1,data__24457__auto____$1,link_item__$1,image__$1,meta47414));
});})(owner,tags,image,description,uri,name,map47392,validate__837__auto__,ufv__,output_schema47394,input_schema47395,input_checker47396,output_checker47397,vec__47390,opts__24458__auto__))
;
}
return (new stuttaford.codex.t47413(uri,input_schema47395,input_checker47396,owner,description,vec__47390,tags,owner47352,output_checker47397,name,output_schema47394,opts__24458__auto__,fnk47393,map47391,G__47398,p__47354,validate__837__auto__,map47392,ufv__,data__24457__auto__,link_item,image,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___47428 = (function (){var G__47424 = o__840__auto__;return (output_checker47397.cljs$core$IFn$_invoke$arity$1 ? output_checker47397.cljs$core$IFn$_invoke$arity$1(G__47424) : output_checker47397.call(null,G__47424));
})();if(cljs.core.truth_(temp__4126__auto___47428))
{var error__839__auto___47429 = temp__4126__auto___47428;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk47393","fnk47393",-1144861673,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___47429], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema47394,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___47429], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema47394,input_schema47395,input_checker47396,output_checker47397,vec__47390,opts__24458__auto__))
,schema.core.make_fn_schema(output_schema47394,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema47395], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24458__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner47352,new cljs.core.Keyword(null,"data","data",-232669377),data__24457__auto__], null));
};
var link_item = function (data__24457__auto__,owner47352,var_args){
var p__47354 = null;if (arguments.length > 2) {
  p__47354 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return link_item__delegate.call(this,data__24457__auto__,owner47352,p__47354);};
link_item.cljs$lang$maxFixedArity = 2;
link_item.cljs$lang$applyTo = (function (arglist__47430){
var data__24457__auto__ = cljs.core.first(arglist__47430);
arglist__47430 = cljs.core.next(arglist__47430);
var owner47352 = cljs.core.first(arglist__47430);
var p__47354 = cljs.core.rest(arglist__47430);
return link_item__delegate(data__24457__auto__,owner47352,p__47354);
});
link_item.cljs$core$IFn$_invoke$arity$variadic = link_item__delegate;
return link_item;
})()
;
stuttaford.codex.__GT_link_item = (function() {
var __GT_link_item = null;
var __GT_link_item__1 = (function (cursor__24426__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.link_item,cursor__24426__auto__);
});
var __GT_link_item__2 = (function (cursor__24426__auto__,m47353){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.link_item,cursor__24426__auto__,m47353);
});
__GT_link_item = function(cursor__24426__auto__,m47353){
switch(arguments.length){
case 1:
return __GT_link_item__1.call(this,cursor__24426__auto__);
case 2:
return __GT_link_item__2.call(this,cursor__24426__auto__,m47353);
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
var category_item__delegate = function (data__24457__auto__,owner47431,p__47433){var vec__47468 = p__47433;var opts__24458__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47468,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema47471 = schema.core.Any;var input_schema47472 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"links","links",-654507394),schema.core.Any,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map47469","map47469",-139844538,null))], null);var input_checker47473 = schema.core.checker(input_schema47472);var output_checker47474 = schema.core.checker(output_schema47471);return schema.core.schematize_fn(((function (ufv__,output_schema47471,input_schema47472,input_checker47473,output_checker47474,vec__47468,opts__24458__auto__){
return (function fnk47470(G__47475){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___47502 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__47475], null);var temp__4126__auto___47503 = (function (){var G__47489 = args__838__auto___47502;return (input_checker47473.cljs$core$IFn$_invoke$arity$1 ? input_checker47473.cljs$core$IFn$_invoke$arity$1(G__47489) : input_checker47473.call(null,G__47489));
})();if(cljs.core.truth_(temp__4126__auto___47503))
{var error__839__auto___47504 = temp__4126__auto___47503;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk47470","fnk47470",1401523575,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___47504], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema47472,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___47502,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___47504], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map47469 = G__47475;while(true){
if(cljs.core.map_QMARK_(map47469))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map47469], 0))));
}
var data = plumbing.fnk.schema.safe_get(map47469,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var name = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var links = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map47469,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t47490 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t47490 = (function (p__47433,owner,links,map47469,data,owner47431,input_checker47473,name,G__47475,output_checker47474,input_schema47472,opts__24458__auto__,fnk47470,vec__47468,category_item,validate__837__auto__,output_schema47471,ufv__,data__24457__auto__,meta47491){
this.p__47433 = p__47433;
this.owner = owner;
this.links = links;
this.map47469 = map47469;
this.data = data;
this.owner47431 = owner47431;
this.input_checker47473 = input_checker47473;
this.name = name;
this.G__47475 = G__47475;
this.output_checker47474 = output_checker47474;
this.input_schema47472 = input_schema47472;
this.opts__24458__auto__ = opts__24458__auto__;
this.fnk47470 = fnk47470;
this.vec__47468 = vec__47468;
this.category_item = category_item;
this.validate__837__auto__ = validate__837__auto__;
this.output_schema47471 = output_schema47471;
this.ufv__ = ufv__;
this.data__24457__auto__ = data__24457__auto__;
this.meta47491 = meta47491;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t47490.cljs$lang$type = true;
stuttaford.codex.t47490.cljs$lang$ctorStr = "stuttaford.codex/t47490";
stuttaford.codex.t47490.cljs$lang$ctorPrWriter = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema47471,input_schema47472,input_checker47473,output_checker47474,vec__47468,opts__24458__auto__){
return (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"stuttaford.codex/t47490");
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema47471,input_schema47472,input_checker47473,output_checker47474,vec__47468,opts__24458__auto__))
;
stuttaford.codex.t47490.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t47490.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema47471,input_schema47472,input_checker47473,output_checker47474,vec__47468,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "category-item";
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema47471,input_schema47472,input_checker47473,output_checker47474,vec__47468,opts__24458__auto__))
;
stuttaford.codex.t47490.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t47490.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema47471,input_schema47472,input_checker47473,output_checker47474,vec__47468,opts__24458__auto__){
return (function (_,p__47493){var self__ = this;
var map__47494 = p__47493;var map__47494__$1 = ((cljs.core.seq_QMARK_(map__47494))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47494):map__47494);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47494__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var ___$1 = this;var temp__4126__auto__ = cljs.core.seq((function (){var G__47495 = stuttaford.codex.search_items(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"tags-string","tags-string",-736299316)], null),search_term,self__.links);return (stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1 ? stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1(G__47495) : stuttaford.codex.name_sort.call(null,G__47495));
})());if(temp__4126__auto__)
{var links__$2 = temp__4126__auto__;var G__47498 = null;var G__47499 = (function (){var attrs47496 = self__.name;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs47496))?sablono.interpreter.attributes(attrs47496):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47496))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47496)], null))));
})();var G__47500 = (function (){var attrs47497 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.link_item,links__$2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177)], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.ul,((cljs.core.map_QMARK_(attrs47497))?sablono.interpreter.attributes(attrs47497):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47497))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47497)], null))));
})();return React.DOM.div(G__47498,G__47499,G__47500);
} else
{return null;
}
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema47471,input_schema47472,input_checker47473,output_checker47474,vec__47468,opts__24458__auto__))
;
stuttaford.codex.t47490.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema47471,input_schema47472,input_checker47473,output_checker47474,vec__47468,opts__24458__auto__){
return (function (_47492){var self__ = this;
var _47492__$1 = this;return self__.meta47491;
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema47471,input_schema47472,input_checker47473,output_checker47474,vec__47468,opts__24458__auto__))
;
stuttaford.codex.t47490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema47471,input_schema47472,input_checker47473,output_checker47474,vec__47468,opts__24458__auto__){
return (function (_47492,meta47491__$1){var self__ = this;
var _47492__$1 = this;return (new stuttaford.codex.t47490(self__.p__47433,self__.owner,self__.links,self__.map47469,self__.data,self__.owner47431,self__.input_checker47473,self__.name,self__.G__47475,self__.output_checker47474,self__.input_schema47472,self__.opts__24458__auto__,self__.fnk47470,self__.vec__47468,self__.category_item,self__.validate__837__auto__,self__.output_schema47471,self__.ufv__,self__.data__24457__auto__,meta47491__$1));
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema47471,input_schema47472,input_checker47473,output_checker47474,vec__47468,opts__24458__auto__))
;
stuttaford.codex.__GT_t47490 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema47471,input_schema47472,input_checker47473,output_checker47474,vec__47468,opts__24458__auto__){
return (function __GT_t47490(p__47433__$1,owner__$1,links__$1,map47469__$1,data__$1,owner47431__$1,input_checker47473__$1,name__$1,G__47475__$1,output_checker47474__$1,input_schema47472__$1,opts__24458__auto____$1,fnk47470__$1,vec__47468__$1,category_item__$1,validate__837__auto____$1,output_schema47471__$1,ufv____$1,data__24457__auto____$1,meta47491){return (new stuttaford.codex.t47490(p__47433__$1,owner__$1,links__$1,map47469__$1,data__$1,owner47431__$1,input_checker47473__$1,name__$1,G__47475__$1,output_checker47474__$1,input_schema47472__$1,opts__24458__auto____$1,fnk47470__$1,vec__47468__$1,category_item__$1,validate__837__auto____$1,output_schema47471__$1,ufv____$1,data__24457__auto____$1,meta47491));
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema47471,input_schema47472,input_checker47473,output_checker47474,vec__47468,opts__24458__auto__))
;
}
return (new stuttaford.codex.t47490(p__47433,owner,links,map47469,data,owner47431,input_checker47473,name,G__47475,output_checker47474,input_schema47472,opts__24458__auto__,fnk47470,vec__47468,category_item,validate__837__auto__,output_schema47471,ufv__,data__24457__auto__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___47505 = (function (){var G__47501 = o__840__auto__;return (output_checker47474.cljs$core$IFn$_invoke$arity$1 ? output_checker47474.cljs$core$IFn$_invoke$arity$1(G__47501) : output_checker47474.call(null,G__47501));
})();if(cljs.core.truth_(temp__4126__auto___47505))
{var error__839__auto___47506 = temp__4126__auto___47505;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk47470","fnk47470",1401523575,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___47506], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema47471,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___47506], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema47471,input_schema47472,input_checker47473,output_checker47474,vec__47468,opts__24458__auto__))
,schema.core.make_fn_schema(output_schema47471,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema47472], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24458__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner47431,new cljs.core.Keyword(null,"data","data",-232669377),data__24457__auto__], null));
};
var category_item = function (data__24457__auto__,owner47431,var_args){
var p__47433 = null;if (arguments.length > 2) {
  p__47433 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return category_item__delegate.call(this,data__24457__auto__,owner47431,p__47433);};
category_item.cljs$lang$maxFixedArity = 2;
category_item.cljs$lang$applyTo = (function (arglist__47507){
var data__24457__auto__ = cljs.core.first(arglist__47507);
arglist__47507 = cljs.core.next(arglist__47507);
var owner47431 = cljs.core.first(arglist__47507);
var p__47433 = cljs.core.rest(arglist__47507);
return category_item__delegate(data__24457__auto__,owner47431,p__47433);
});
category_item.cljs$core$IFn$_invoke$arity$variadic = category_item__delegate;
return category_item;
})()
;
stuttaford.codex.__GT_category_item = (function() {
var __GT_category_item = null;
var __GT_category_item__1 = (function (cursor__24426__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.category_item,cursor__24426__auto__);
});
var __GT_category_item__2 = (function (cursor__24426__auto__,m47432){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.category_item,cursor__24426__auto__,m47432);
});
__GT_category_item = function(cursor__24426__auto__,m47432){
switch(arguments.length){
case 1:
return __GT_category_item__1.call(this,cursor__24426__auto__);
case 2:
return __GT_category_item__2.call(this,cursor__24426__auto__,m47432);
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
var app_view__delegate = function (data__24457__auto__,owner47509,p__47511){var vec__47619 = p__47511;var opts__24458__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47619,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema47623 = schema.core.Any;var input_schema47624 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"categories","categories",178386610),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map47620","map47620",-32392088,null))], null);var input_checker47625 = schema.core.checker(input_schema47624);var output_checker47626 = schema.core.checker(output_schema47623);return schema.core.schematize_fn(((function (ufv__,output_schema47623,input_schema47624,input_checker47625,output_checker47626,vec__47619,opts__24458__auto__){
return (function fnk47622(G__47627){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___47726 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__47627], null);var temp__4126__auto___47727 = (function (){var G__47677 = args__838__auto___47726;return (input_checker47625.cljs$core$IFn$_invoke$arity$1 ? input_checker47625.cljs$core$IFn$_invoke$arity$1(G__47677) : input_checker47625.call(null,G__47677));
})();if(cljs.core.truth_(temp__4126__auto___47727))
{var error__839__auto___47728 = temp__4126__auto___47727;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk47622","fnk47622",1403321158,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___47728], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema47624,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___47726,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___47728], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map47620 = G__47627;while(true){
if(cljs.core.map_QMARK_(map47620))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map47620], 0))));
}
var map47621 = plumbing.fnk.schema.safe_get(map47620,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var categories = plumbing.fnk.schema.safe_get(map47621,new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map47620,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t47678 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t47678 = (function (app_view,owner,fnk47622,map47620,p__47511,input_schema47624,output_schema47623,output_checker47626,G__47627,map47621,opts__24458__auto__,vec__47619,owner47509,categories,validate__837__auto__,ufv__,data__24457__auto__,input_checker47625,meta47679){
this.app_view = app_view;
this.owner = owner;
this.fnk47622 = fnk47622;
this.map47620 = map47620;
this.p__47511 = p__47511;
this.input_schema47624 = input_schema47624;
this.output_schema47623 = output_schema47623;
this.output_checker47626 = output_checker47626;
this.G__47627 = G__47627;
this.map47621 = map47621;
this.opts__24458__auto__ = opts__24458__auto__;
this.vec__47619 = vec__47619;
this.owner47509 = owner47509;
this.categories = categories;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.data__24457__auto__ = data__24457__auto__;
this.input_checker47625 = input_checker47625;
this.meta47679 = meta47679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t47678.cljs$lang$type = true;
stuttaford.codex.t47678.cljs$lang$ctorStr = "stuttaford.codex/t47678";
stuttaford.codex.t47678.cljs$lang$ctorPrWriter = ((function (owner,categories,map47621,validate__837__auto__,ufv__,output_schema47623,input_schema47624,input_checker47625,output_checker47626,vec__47619,opts__24458__auto__){
return (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"stuttaford.codex/t47678");
});})(owner,categories,map47621,validate__837__auto__,ufv__,output_schema47623,input_schema47624,input_checker47625,output_checker47626,vec__47619,opts__24458__auto__))
;
stuttaford.codex.t47678.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t47678.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,categories,map47621,validate__837__auto__,ufv__,output_schema47623,input_schema47624,input_checker47625,output_checker47626,vec__47619,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "app-view";
});})(owner,categories,map47621,validate__837__auto__,ufv__,output_schema47623,input_schema47624,input_checker47625,output_checker47626,vec__47619,opts__24458__auto__))
;
stuttaford.codex.t47678.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t47678.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,categories,map47621,validate__837__auto__,ufv__,output_schema47623,input_schema47624,input_checker47625,output_checker47626,vec__47619,opts__24458__auto__){
return (function (_,p__47681){var self__ = this;
var map__47682 = p__47681;var map__47682__$1 = ((cljs.core.seq_QMARK_(map__47682))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47682):map__47682);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47682__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var search_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47682__$1,new cljs.core.Keyword(null,"search-chan","search-chan",962868037));var ___$1 = this;var G__47683 = null;var G__47684 = (function (){var G__47686 = {"id": "search", "type": "text", "placeholder": "Search for link", "autoFocus": "autofocus", "value": search_term, "onChange": ((function (G__47683,___$1,map__47682,map__47682__$1,search_term,search_chan,owner,categories,map47621,validate__837__auto__,ufv__,output_schema47623,input_schema47624,input_checker47625,output_checker47626,vec__47619,opts__24458__auto__){
return (function (p1__47508_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(search_chan,p1__47508_SHARP_.target.value);
});})(G__47683,___$1,map__47682,map__47682__$1,search_term,search_chan,owner,categories,map47621,validate__837__auto__,ufv__,output_schema47623,input_schema47624,input_checker47625,output_checker47626,vec__47619,opts__24458__auto__))
};return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__47686) : sablono.interpreter.input.call(null,G__47686));
})();var G__47685 = sablono.interpreter.interpret(om.core.build_all.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.category_item,(function (){var G__47687 = self__.categories;return (stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1 ? stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1(G__47687) : stuttaford.codex.name_sort.call(null,G__47687));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177)], null)));return React.DOM.div(G__47683,G__47684,G__47685);
});})(owner,categories,map47621,validate__837__auto__,ufv__,output_schema47623,input_schema47624,input_checker47625,output_checker47626,vec__47619,opts__24458__auto__))
;
stuttaford.codex.t47678.prototype.om$core$IWillMount$ = true;
stuttaford.codex.t47678.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (owner,categories,map47621,validate__837__auto__,ufv__,output_schema47623,input_schema47624,input_checker47625,output_checker47626,vec__47619,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var search_chan = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"search-chan","search-chan",962868037));var c__23002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23002__auto__,search_chan,___$1,owner,categories,map47621,validate__837__auto__,ufv__,output_schema47623,input_schema47624,input_checker47625,output_checker47626,vec__47619,opts__24458__auto__){
return (function (){var f__23003__auto__ = (function (){var switch__22987__auto__ = ((function (c__23002__auto__,search_chan,___$1,owner,categories,map47621,validate__837__auto__,ufv__,output_schema47623,input_schema47624,input_checker47625,output_checker47626,vec__47619,opts__24458__auto__){
return (function (state_47704){var state_val_47705 = (state_47704[(1)]);if((state_val_47705 === (7)))
{var inst_47691 = (state_47704[(7)]);var inst_47691__$1 = (state_47704[(2)]);var state_47704__$1 = (function (){var statearr_47706 = state_47704;(statearr_47706[(7)] = inst_47691__$1);
return statearr_47706;
})();if(cljs.core.truth_(inst_47691__$1))
{var statearr_47707_47729 = state_47704__$1;(statearr_47707_47729[(1)] = (8));
} else
{var statearr_47708_47730 = state_47704__$1;(statearr_47708_47730[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47705 === (1)))
{var state_47704__$1 = state_47704;var statearr_47709_47731 = state_47704__$1;(statearr_47709_47731[(2)] = null);
(statearr_47709_47731[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47705 === (4)))
{var state_47704__$1 = state_47704;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47704__$1,(7),search_chan);
} else
{if((state_val_47705 === (6)))
{var inst_47700 = (state_47704[(2)]);var state_47704__$1 = state_47704;var statearr_47710_47732 = state_47704__$1;(statearr_47710_47732[(2)] = inst_47700);
(statearr_47710_47732[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47705 === (3)))
{var inst_47702 = (state_47704[(2)]);var state_47704__$1 = state_47704;return cljs.core.async.impl.ioc_helpers.return_chan(state_47704__$1,inst_47702);
} else
{if((state_val_47705 === (2)))
{var state_47704__$1 = state_47704;var statearr_47711_47733 = state_47704__$1;(statearr_47711_47733[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47705 === (9)))
{var state_47704__$1 = state_47704;var statearr_47713_47734 = state_47704__$1;(statearr_47713_47734[(2)] = null);
(statearr_47713_47734[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47705 === (5)))
{var state_47704__$1 = state_47704;var statearr_47714_47735 = state_47704__$1;(statearr_47714_47735[(2)] = null);
(statearr_47714_47735[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47705 === (10)))
{var inst_47696 = (state_47704[(2)]);var state_47704__$1 = (function (){var statearr_47715 = state_47704;(statearr_47715[(8)] = inst_47696);
return statearr_47715;
})();var statearr_47716_47736 = state_47704__$1;(statearr_47716_47736[(2)] = null);
(statearr_47716_47736[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_47705 === (8)))
{var inst_47691 = (state_47704[(7)]);var inst_47693 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"search-term","search-term",356193544),inst_47691);var state_47704__$1 = state_47704;var statearr_47717_47737 = state_47704__$1;(statearr_47717_47737[(2)] = inst_47693);
(statearr_47717_47737[(1)] = (10));
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
});})(c__23002__auto__,search_chan,___$1,owner,categories,map47621,validate__837__auto__,ufv__,output_schema47623,input_schema47624,input_checker47625,output_checker47626,vec__47619,opts__24458__auto__))
;return ((function (switch__22987__auto__,c__23002__auto__,search_chan,___$1,owner,categories,map47621,validate__837__auto__,ufv__,output_schema47623,input_schema47624,input_checker47625,output_checker47626,vec__47619,opts__24458__auto__){
return (function() {
var state_machine__22988__auto__ = null;
var state_machine__22988__auto____0 = (function (){var statearr_47721 = [null,null,null,null,null,null,null,null,null];(statearr_47721[(0)] = state_machine__22988__auto__);
(statearr_47721[(1)] = (1));
return statearr_47721;
});
var state_machine__22988__auto____1 = (function (state_47704){while(true){
var ret_value__22989__auto__ = (function (){try{while(true){
var result__22990__auto__ = switch__22987__auto__(state_47704);if(cljs.core.keyword_identical_QMARK_(result__22990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22990__auto__;
}
break;
}
}catch (e47722){if((e47722 instanceof Object))
{var ex__22991__auto__ = e47722;var statearr_47723_47738 = state_47704;(statearr_47723_47738[(5)] = ex__22991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_47704);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e47722;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__47739 = state_47704;
state_47704 = G__47739;
continue;
}
} else
{return ret_value__22989__auto__;
}
break;
}
});
state_machine__22988__auto__ = function(state_47704){
switch(arguments.length){
case 0:
return state_machine__22988__auto____0.call(this);
case 1:
return state_machine__22988__auto____1.call(this,state_47704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22988__auto____0;
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22988__auto____1;
return state_machine__22988__auto__;
})()
;})(switch__22987__auto__,c__23002__auto__,search_chan,___$1,owner,categories,map47621,validate__837__auto__,ufv__,output_schema47623,input_schema47624,input_checker47625,output_checker47626,vec__47619,opts__24458__auto__))
})();var state__23004__auto__ = (function (){var statearr_47724 = (function (){return (f__23003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23003__auto__.cljs$core$IFn$_invoke$arity$0() : f__23003__auto__.call(null));
})();(statearr_47724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23002__auto__);
return statearr_47724;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23004__auto__);
});})(c__23002__auto__,search_chan,___$1,owner,categories,map47621,validate__837__auto__,ufv__,output_schema47623,input_schema47624,input_checker47625,output_checker47626,vec__47619,opts__24458__auto__))
);
return c__23002__auto__;
});})(owner,categories,map47621,validate__837__auto__,ufv__,output_schema47623,input_schema47624,input_checker47625,output_checker47626,vec__47619,opts__24458__auto__))
;
stuttaford.codex.t47678.prototype.om$core$IInitState$ = true;
stuttaford.codex.t47678.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,categories,map47621,validate__837__auto__,ufv__,output_schema47623,input_schema47624,input_checker47625,output_checker47626,vec__47619,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-chan","search-chan",962868037),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0()], null);
});})(owner,categories,map47621,validate__837__auto__,ufv__,output_schema47623,input_schema47624,input_checker47625,output_checker47626,vec__47619,opts__24458__auto__))
;
stuttaford.codex.t47678.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,categories,map47621,validate__837__auto__,ufv__,output_schema47623,input_schema47624,input_checker47625,output_checker47626,vec__47619,opts__24458__auto__){
return (function (_47680){var self__ = this;
var _47680__$1 = this;return self__.meta47679;
});})(owner,categories,map47621,validate__837__auto__,ufv__,output_schema47623,input_schema47624,input_checker47625,output_checker47626,vec__47619,opts__24458__auto__))
;
stuttaford.codex.t47678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,categories,map47621,validate__837__auto__,ufv__,output_schema47623,input_schema47624,input_checker47625,output_checker47626,vec__47619,opts__24458__auto__){
return (function (_47680,meta47679__$1){var self__ = this;
var _47680__$1 = this;return (new stuttaford.codex.t47678(self__.app_view,self__.owner,self__.fnk47622,self__.map47620,self__.p__47511,self__.input_schema47624,self__.output_schema47623,self__.output_checker47626,self__.G__47627,self__.map47621,self__.opts__24458__auto__,self__.vec__47619,self__.owner47509,self__.categories,self__.validate__837__auto__,self__.ufv__,self__.data__24457__auto__,self__.input_checker47625,meta47679__$1));
});})(owner,categories,map47621,validate__837__auto__,ufv__,output_schema47623,input_schema47624,input_checker47625,output_checker47626,vec__47619,opts__24458__auto__))
;
stuttaford.codex.__GT_t47678 = ((function (owner,categories,map47621,validate__837__auto__,ufv__,output_schema47623,input_schema47624,input_checker47625,output_checker47626,vec__47619,opts__24458__auto__){
return (function __GT_t47678(app_view__$1,owner__$1,fnk47622__$1,map47620__$1,p__47511__$1,input_schema47624__$1,output_schema47623__$1,output_checker47626__$1,G__47627__$1,map47621__$1,opts__24458__auto____$1,vec__47619__$1,owner47509__$1,categories__$1,validate__837__auto____$1,ufv____$1,data__24457__auto____$1,input_checker47625__$1,meta47679){return (new stuttaford.codex.t47678(app_view__$1,owner__$1,fnk47622__$1,map47620__$1,p__47511__$1,input_schema47624__$1,output_schema47623__$1,output_checker47626__$1,G__47627__$1,map47621__$1,opts__24458__auto____$1,vec__47619__$1,owner47509__$1,categories__$1,validate__837__auto____$1,ufv____$1,data__24457__auto____$1,input_checker47625__$1,meta47679));
});})(owner,categories,map47621,validate__837__auto__,ufv__,output_schema47623,input_schema47624,input_checker47625,output_checker47626,vec__47619,opts__24458__auto__))
;
}
return (new stuttaford.codex.t47678(app_view,owner,fnk47622,map47620,p__47511,input_schema47624,output_schema47623,output_checker47626,G__47627,map47621,opts__24458__auto__,vec__47619,owner47509,categories,validate__837__auto__,ufv__,data__24457__auto__,input_checker47625,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___47740 = (function (){var G__47725 = o__840__auto__;return (output_checker47626.cljs$core$IFn$_invoke$arity$1 ? output_checker47626.cljs$core$IFn$_invoke$arity$1(G__47725) : output_checker47626.call(null,G__47725));
})();if(cljs.core.truth_(temp__4126__auto___47740))
{var error__839__auto___47741 = temp__4126__auto___47740;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk47622","fnk47622",1403321158,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___47741], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema47623,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___47741], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema47623,input_schema47624,input_checker47625,output_checker47626,vec__47619,opts__24458__auto__))
,schema.core.make_fn_schema(output_schema47623,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema47624], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24458__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner47509,new cljs.core.Keyword(null,"data","data",-232669377),data__24457__auto__], null));
};
var app_view = function (data__24457__auto__,owner47509,var_args){
var p__47511 = null;if (arguments.length > 2) {
  p__47511 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_view__delegate.call(this,data__24457__auto__,owner47509,p__47511);};
app_view.cljs$lang$maxFixedArity = 2;
app_view.cljs$lang$applyTo = (function (arglist__47742){
var data__24457__auto__ = cljs.core.first(arglist__47742);
arglist__47742 = cljs.core.next(arglist__47742);
var owner47509 = cljs.core.first(arglist__47742);
var p__47511 = cljs.core.rest(arglist__47742);
return app_view__delegate(data__24457__auto__,owner47509,p__47511);
});
app_view.cljs$core$IFn$_invoke$arity$variadic = app_view__delegate;
return app_view;
})()
;
stuttaford.codex.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__24426__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.app_view,cursor__24426__auto__);
});
var __GT_app_view__2 = (function (cursor__24426__auto__,m47510){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.app_view,cursor__24426__auto__,m47510);
});
__GT_app_view = function(cursor__24426__auto__,m47510){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__24426__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__24426__auto__,m47510);
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