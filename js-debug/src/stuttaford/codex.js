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
var tag_item__delegate = function (data__24144__auto__,owner55027,p__55029){var vec__55057 = p__55029;var opts__24145__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55057,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema55061 = schema.core.Any;var input_schema55062 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map55058","map55058",-933855195,null))], null);var input_checker55063 = schema.core.checker(input_schema55062);var output_checker55064 = schema.core.checker(output_schema55061);return schema.core.schematize_fn(((function (ufv__,output_schema55061,input_schema55062,input_checker55063,output_checker55064,vec__55057,opts__24145__auto__){
return (function fnk55060(G__55065){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___55084 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55065], null);var temp__4126__auto___55085 = (function (){var G__55075 = args__838__auto___55084;return (input_checker55063.cljs$core$IFn$_invoke$arity$1 ? input_checker55063.cljs$core$IFn$_invoke$arity$1(G__55075) : input_checker55063.call(null,G__55075));
})();if(cljs.core.truth_(temp__4126__auto___55085))
{var error__839__auto___55086 = temp__4126__auto___55085;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk55060","fnk55060",1470322388,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55086], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55062,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___55084,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55086], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map55058 = G__55065;while(true){
if(cljs.core.map_QMARK_(map55058))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map55058], 0))));
}
var map55059 = plumbing.fnk.schema.safe_get(map55058,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var name = plumbing.fnk.schema.safe_get(map55059,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map55058,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t55076 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t55076 = (function (owner,p__55029,vec__55057,map55058,output_schema55061,data__24144__auto__,opts__24145__auto__,input_checker55063,G__55065,name,fnk55060,output_checker55064,map55059,input_schema55062,owner55027,validate__837__auto__,ufv__,tag_item,meta55077){
this.owner = owner;
this.p__55029 = p__55029;
this.vec__55057 = vec__55057;
this.map55058 = map55058;
this.output_schema55061 = output_schema55061;
this.data__24144__auto__ = data__24144__auto__;
this.opts__24145__auto__ = opts__24145__auto__;
this.input_checker55063 = input_checker55063;
this.G__55065 = G__55065;
this.name = name;
this.fnk55060 = fnk55060;
this.output_checker55064 = output_checker55064;
this.map55059 = map55059;
this.input_schema55062 = input_schema55062;
this.owner55027 = owner55027;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.tag_item = tag_item;
this.meta55077 = meta55077;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t55076.cljs$lang$type = true;
stuttaford.codex.t55076.cljs$lang$ctorStr = "stuttaford.codex/t55076";
stuttaford.codex.t55076.cljs$lang$ctorPrWriter = ((function (owner,name,map55059,validate__837__auto__,ufv__,output_schema55061,input_schema55062,input_checker55063,output_checker55064,vec__55057,opts__24145__auto__){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"stuttaford.codex/t55076");
});})(owner,name,map55059,validate__837__auto__,ufv__,output_schema55061,input_schema55062,input_checker55063,output_checker55064,vec__55057,opts__24145__auto__))
;
stuttaford.codex.t55076.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t55076.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,name,map55059,validate__837__auto__,ufv__,output_schema55061,input_schema55062,input_checker55063,output_checker55064,vec__55057,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-item";
});})(owner,name,map55059,validate__837__auto__,ufv__,output_schema55061,input_schema55062,input_checker55063,output_checker55064,vec__55057,opts__24145__auto__))
;
stuttaford.codex.t55076.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t55076.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,name,map55059,validate__837__auto__,ufv__,output_schema55061,input_schema55062,input_checker55063,output_checker55064,vec__55057,opts__24145__auto__){
return (function (_,p__55079){var self__ = this;
var map__55080 = p__55079;var map__55080__$1 = ((cljs.core.seq_QMARK_(map__55080))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55080):map__55080);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55080__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var ___$1 = this;var class$ = (cljs.core.truth_((function (){var and__19267__auto__ = cljs.core.seq(search_term);if(and__19267__auto__)
{return cljs.core.re_find(stuttaford.codex.regex(search_term),self__.name);
} else
{return and__19267__auto__;
}
})())?"tag active":"tag");var G__55081 = {"className": class$, "onClick": ((function (class$,___$1,map__55080,map__55080__$1,search_term,owner,name,map55059,validate__837__auto__,ufv__,output_schema55061,input_schema55062,input_checker55063,output_checker55064,vec__55057,opts__24145__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"search-chan","search-chan",962868037)),self__.name);
});})(class$,___$1,map__55080,map__55080__$1,search_term,owner,name,map55059,validate__837__auto__,ufv__,output_schema55061,input_schema55062,input_checker55063,output_checker55064,vec__55057,opts__24145__auto__))
};var G__55082 = sablono.interpreter.interpret(self__.name);return React.DOM.a(G__55081,G__55082);
});})(owner,name,map55059,validate__837__auto__,ufv__,output_schema55061,input_schema55062,input_checker55063,output_checker55064,vec__55057,opts__24145__auto__))
;
stuttaford.codex.t55076.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,name,map55059,validate__837__auto__,ufv__,output_schema55061,input_schema55062,input_checker55063,output_checker55064,vec__55057,opts__24145__auto__){
return (function (_55078){var self__ = this;
var _55078__$1 = this;return self__.meta55077;
});})(owner,name,map55059,validate__837__auto__,ufv__,output_schema55061,input_schema55062,input_checker55063,output_checker55064,vec__55057,opts__24145__auto__))
;
stuttaford.codex.t55076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,name,map55059,validate__837__auto__,ufv__,output_schema55061,input_schema55062,input_checker55063,output_checker55064,vec__55057,opts__24145__auto__){
return (function (_55078,meta55077__$1){var self__ = this;
var _55078__$1 = this;return (new stuttaford.codex.t55076(self__.owner,self__.p__55029,self__.vec__55057,self__.map55058,self__.output_schema55061,self__.data__24144__auto__,self__.opts__24145__auto__,self__.input_checker55063,self__.G__55065,self__.name,self__.fnk55060,self__.output_checker55064,self__.map55059,self__.input_schema55062,self__.owner55027,self__.validate__837__auto__,self__.ufv__,self__.tag_item,meta55077__$1));
});})(owner,name,map55059,validate__837__auto__,ufv__,output_schema55061,input_schema55062,input_checker55063,output_checker55064,vec__55057,opts__24145__auto__))
;
stuttaford.codex.__GT_t55076 = ((function (owner,name,map55059,validate__837__auto__,ufv__,output_schema55061,input_schema55062,input_checker55063,output_checker55064,vec__55057,opts__24145__auto__){
return (function __GT_t55076(owner__$1,p__55029__$1,vec__55057__$1,map55058__$1,output_schema55061__$1,data__24144__auto____$1,opts__24145__auto____$1,input_checker55063__$1,G__55065__$1,name__$1,fnk55060__$1,output_checker55064__$1,map55059__$1,input_schema55062__$1,owner55027__$1,validate__837__auto____$1,ufv____$1,tag_item__$1,meta55077){return (new stuttaford.codex.t55076(owner__$1,p__55029__$1,vec__55057__$1,map55058__$1,output_schema55061__$1,data__24144__auto____$1,opts__24145__auto____$1,input_checker55063__$1,G__55065__$1,name__$1,fnk55060__$1,output_checker55064__$1,map55059__$1,input_schema55062__$1,owner55027__$1,validate__837__auto____$1,ufv____$1,tag_item__$1,meta55077));
});})(owner,name,map55059,validate__837__auto__,ufv__,output_schema55061,input_schema55062,input_checker55063,output_checker55064,vec__55057,opts__24145__auto__))
;
}
return (new stuttaford.codex.t55076(owner,p__55029,vec__55057,map55058,output_schema55061,data__24144__auto__,opts__24145__auto__,input_checker55063,G__55065,name,fnk55060,output_checker55064,map55059,input_schema55062,owner55027,validate__837__auto__,ufv__,tag_item,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___55087 = (function (){var G__55083 = o__840__auto__;return (output_checker55064.cljs$core$IFn$_invoke$arity$1 ? output_checker55064.cljs$core$IFn$_invoke$arity$1(G__55083) : output_checker55064.call(null,G__55083));
})();if(cljs.core.truth_(temp__4126__auto___55087))
{var error__839__auto___55088 = temp__4126__auto___55087;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk55060","fnk55060",1470322388,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55088], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55061,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55088], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema55061,input_schema55062,input_checker55063,output_checker55064,vec__55057,opts__24145__auto__))
,schema.core.make_fn_schema(output_schema55061,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55062], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner55027,new cljs.core.Keyword(null,"data","data",-232669377),data__24144__auto__], null));
};
var tag_item = function (data__24144__auto__,owner55027,var_args){
var p__55029 = null;if (arguments.length > 2) {
  p__55029 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_item__delegate.call(this,data__24144__auto__,owner55027,p__55029);};
tag_item.cljs$lang$maxFixedArity = 2;
tag_item.cljs$lang$applyTo = (function (arglist__55089){
var data__24144__auto__ = cljs.core.first(arglist__55089);
arglist__55089 = cljs.core.next(arglist__55089);
var owner55027 = cljs.core.first(arglist__55089);
var p__55029 = cljs.core.rest(arglist__55089);
return tag_item__delegate(data__24144__auto__,owner55027,p__55029);
});
tag_item.cljs$core$IFn$_invoke$arity$variadic = tag_item__delegate;
return tag_item;
})()
;
stuttaford.codex.__GT_tag_item = (function() {
var __GT_tag_item = null;
var __GT_tag_item__1 = (function (cursor__24113__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.tag_item,cursor__24113__auto__);
});
var __GT_tag_item__2 = (function (cursor__24113__auto__,m55028){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.tag_item,cursor__24113__auto__,m55028);
});
__GT_tag_item = function(cursor__24113__auto__,m55028){
switch(arguments.length){
case 1:
return __GT_tag_item__1.call(this,cursor__24113__auto__);
case 2:
return __GT_tag_item__2.call(this,cursor__24113__auto__,m55028);
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
var link_item__delegate = function (data__24144__auto__,owner55090,p__55092){var vec__55128 = p__55092;var opts__24145__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55128,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema55132 = schema.core.Any;var input_schema55133 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"tags","tags",1771418977)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"image","image",-58725096)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"description","description",-1428560544)),schema.core.Any,new cljs.core.Keyword(null,"uri","uri",-774711847),schema.core.Any,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map55129","map55129",-650356090,null))], null);var input_checker55134 = schema.core.checker(input_schema55133);var output_checker55135 = schema.core.checker(output_schema55132);return schema.core.schematize_fn(((function (ufv__,output_schema55132,input_schema55133,input_checker55134,output_checker55135,vec__55128,opts__24145__auto__){
return (function fnk55131(G__55136){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___55163 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55136], null);var temp__4126__auto___55164 = (function (){var G__55150 = args__838__auto___55163;return (input_checker55134.cljs$core$IFn$_invoke$arity$1 ? input_checker55134.cljs$core$IFn$_invoke$arity$1(G__55150) : input_checker55134.call(null,G__55150));
})();if(cljs.core.truth_(temp__4126__auto___55164))
{var error__839__auto___55165 = temp__4126__auto___55164;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk55131","fnk55131",-337965719,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55165], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55133,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___55163,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55165], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map55129 = G__55136;while(true){
if(cljs.core.map_QMARK_(map55129))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map55129], 0))));
}
var map55130 = plumbing.fnk.schema.safe_get(map55129,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var name = plumbing.fnk.schema.safe_get(map55130,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var uri = plumbing.fnk.schema.safe_get(map55130,new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var description = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map55130,new cljs.core.Keyword(null,"description","description",-1428560544),null);var image = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map55130,new cljs.core.Keyword(null,"image","image",-58725096),null);var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map55130,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map55129,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t55151 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t55151 = (function (uri,owner,map55130,map55129,description,tags,fnk55131,data__24144__auto__,opts__24145__auto__,G__55136,output_schema55132,name,owner55090,input_checker55134,vec__55128,output_checker55135,validate__837__auto__,ufv__,p__55092,link_item,input_schema55133,image,meta55152){
this.uri = uri;
this.owner = owner;
this.map55130 = map55130;
this.map55129 = map55129;
this.description = description;
this.tags = tags;
this.fnk55131 = fnk55131;
this.data__24144__auto__ = data__24144__auto__;
this.opts__24145__auto__ = opts__24145__auto__;
this.G__55136 = G__55136;
this.output_schema55132 = output_schema55132;
this.name = name;
this.owner55090 = owner55090;
this.input_checker55134 = input_checker55134;
this.vec__55128 = vec__55128;
this.output_checker55135 = output_checker55135;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.p__55092 = p__55092;
this.link_item = link_item;
this.input_schema55133 = input_schema55133;
this.image = image;
this.meta55152 = meta55152;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t55151.cljs$lang$type = true;
stuttaford.codex.t55151.cljs$lang$ctorStr = "stuttaford.codex/t55151";
stuttaford.codex.t55151.cljs$lang$ctorPrWriter = ((function (owner,tags,image,description,uri,name,map55130,validate__837__auto__,ufv__,output_schema55132,input_schema55133,input_checker55134,output_checker55135,vec__55128,opts__24145__auto__){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"stuttaford.codex/t55151");
});})(owner,tags,image,description,uri,name,map55130,validate__837__auto__,ufv__,output_schema55132,input_schema55133,input_checker55134,output_checker55135,vec__55128,opts__24145__auto__))
;
stuttaford.codex.t55151.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t55151.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,tags,image,description,uri,name,map55130,validate__837__auto__,ufv__,output_schema55132,input_schema55133,input_checker55134,output_checker55135,vec__55128,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "link-item";
});})(owner,tags,image,description,uri,name,map55130,validate__837__auto__,ufv__,output_schema55132,input_schema55133,input_checker55134,output_checker55135,vec__55128,opts__24145__auto__))
;
stuttaford.codex.t55151.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t55151.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,tags,image,description,uri,name,map55130,validate__837__auto__,ufv__,output_schema55132,input_schema55133,input_checker55134,output_checker55135,vec__55128,opts__24145__auto__){
return (function (_,p__55154){var self__ = this;
var map__55155 = p__55154;var map__55155__$1 = ((cljs.core.seq_QMARK_(map__55155))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55155):map__55155);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55155__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var ___$1 = this;var G__55156 = {"className": "link"};var G__55157 = (function (){var G__55159 = {"href": self__.uri};var G__55160 = sablono.interpreter.interpret(self__.name);return React.DOM.a(G__55159,G__55160);
})();var G__55158 = sablono.interpreter.interpret(om.core.build_all.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.tag_item,(function (){var G__55161 = self__.tags;return (stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1 ? stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1(G__55161) : stuttaford.codex.name_sort.call(null,G__55161));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177)], null)));return React.DOM.li(G__55156,G__55157,G__55158);
});})(owner,tags,image,description,uri,name,map55130,validate__837__auto__,ufv__,output_schema55132,input_schema55133,input_checker55134,output_checker55135,vec__55128,opts__24145__auto__))
;
stuttaford.codex.t55151.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,tags,image,description,uri,name,map55130,validate__837__auto__,ufv__,output_schema55132,input_schema55133,input_checker55134,output_checker55135,vec__55128,opts__24145__auto__){
return (function (_55153){var self__ = this;
var _55153__$1 = this;return self__.meta55152;
});})(owner,tags,image,description,uri,name,map55130,validate__837__auto__,ufv__,output_schema55132,input_schema55133,input_checker55134,output_checker55135,vec__55128,opts__24145__auto__))
;
stuttaford.codex.t55151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,tags,image,description,uri,name,map55130,validate__837__auto__,ufv__,output_schema55132,input_schema55133,input_checker55134,output_checker55135,vec__55128,opts__24145__auto__){
return (function (_55153,meta55152__$1){var self__ = this;
var _55153__$1 = this;return (new stuttaford.codex.t55151(self__.uri,self__.owner,self__.map55130,self__.map55129,self__.description,self__.tags,self__.fnk55131,self__.data__24144__auto__,self__.opts__24145__auto__,self__.G__55136,self__.output_schema55132,self__.name,self__.owner55090,self__.input_checker55134,self__.vec__55128,self__.output_checker55135,self__.validate__837__auto__,self__.ufv__,self__.p__55092,self__.link_item,self__.input_schema55133,self__.image,meta55152__$1));
});})(owner,tags,image,description,uri,name,map55130,validate__837__auto__,ufv__,output_schema55132,input_schema55133,input_checker55134,output_checker55135,vec__55128,opts__24145__auto__))
;
stuttaford.codex.__GT_t55151 = ((function (owner,tags,image,description,uri,name,map55130,validate__837__auto__,ufv__,output_schema55132,input_schema55133,input_checker55134,output_checker55135,vec__55128,opts__24145__auto__){
return (function __GT_t55151(uri__$1,owner__$1,map55130__$1,map55129__$1,description__$1,tags__$1,fnk55131__$1,data__24144__auto____$1,opts__24145__auto____$1,G__55136__$1,output_schema55132__$1,name__$1,owner55090__$1,input_checker55134__$1,vec__55128__$1,output_checker55135__$1,validate__837__auto____$1,ufv____$1,p__55092__$1,link_item__$1,input_schema55133__$1,image__$1,meta55152){return (new stuttaford.codex.t55151(uri__$1,owner__$1,map55130__$1,map55129__$1,description__$1,tags__$1,fnk55131__$1,data__24144__auto____$1,opts__24145__auto____$1,G__55136__$1,output_schema55132__$1,name__$1,owner55090__$1,input_checker55134__$1,vec__55128__$1,output_checker55135__$1,validate__837__auto____$1,ufv____$1,p__55092__$1,link_item__$1,input_schema55133__$1,image__$1,meta55152));
});})(owner,tags,image,description,uri,name,map55130,validate__837__auto__,ufv__,output_schema55132,input_schema55133,input_checker55134,output_checker55135,vec__55128,opts__24145__auto__))
;
}
return (new stuttaford.codex.t55151(uri,owner,map55130,map55129,description,tags,fnk55131,data__24144__auto__,opts__24145__auto__,G__55136,output_schema55132,name,owner55090,input_checker55134,vec__55128,output_checker55135,validate__837__auto__,ufv__,p__55092,link_item,input_schema55133,image,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___55166 = (function (){var G__55162 = o__840__auto__;return (output_checker55135.cljs$core$IFn$_invoke$arity$1 ? output_checker55135.cljs$core$IFn$_invoke$arity$1(G__55162) : output_checker55135.call(null,G__55162));
})();if(cljs.core.truth_(temp__4126__auto___55166))
{var error__839__auto___55167 = temp__4126__auto___55166;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk55131","fnk55131",-337965719,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55167], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55132,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55167], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema55132,input_schema55133,input_checker55134,output_checker55135,vec__55128,opts__24145__auto__))
,schema.core.make_fn_schema(output_schema55132,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55133], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner55090,new cljs.core.Keyword(null,"data","data",-232669377),data__24144__auto__], null));
};
var link_item = function (data__24144__auto__,owner55090,var_args){
var p__55092 = null;if (arguments.length > 2) {
  p__55092 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return link_item__delegate.call(this,data__24144__auto__,owner55090,p__55092);};
link_item.cljs$lang$maxFixedArity = 2;
link_item.cljs$lang$applyTo = (function (arglist__55168){
var data__24144__auto__ = cljs.core.first(arglist__55168);
arglist__55168 = cljs.core.next(arglist__55168);
var owner55090 = cljs.core.first(arglist__55168);
var p__55092 = cljs.core.rest(arglist__55168);
return link_item__delegate(data__24144__auto__,owner55090,p__55092);
});
link_item.cljs$core$IFn$_invoke$arity$variadic = link_item__delegate;
return link_item;
})()
;
stuttaford.codex.__GT_link_item = (function() {
var __GT_link_item = null;
var __GT_link_item__1 = (function (cursor__24113__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.link_item,cursor__24113__auto__);
});
var __GT_link_item__2 = (function (cursor__24113__auto__,m55091){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.link_item,cursor__24113__auto__,m55091);
});
__GT_link_item = function(cursor__24113__auto__,m55091){
switch(arguments.length){
case 1:
return __GT_link_item__1.call(this,cursor__24113__auto__);
case 2:
return __GT_link_item__2.call(this,cursor__24113__auto__,m55091);
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
var category_item__delegate = function (data__24144__auto__,owner55169,p__55171){var vec__55206 = p__55171;var opts__24145__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55206,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema55209 = schema.core.Any;var input_schema55210 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"links","links",-654507394),schema.core.Any,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map55207","map55207",-1976422505,null))], null);var input_checker55211 = schema.core.checker(input_schema55210);var output_checker55212 = schema.core.checker(output_schema55209);return schema.core.schematize_fn(((function (ufv__,output_schema55209,input_schema55210,input_checker55211,output_checker55212,vec__55206,opts__24145__auto__){
return (function fnk55208(G__55213){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___55240 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55213], null);var temp__4126__auto___55241 = (function (){var G__55227 = args__838__auto___55240;return (input_checker55211.cljs$core$IFn$_invoke$arity$1 ? input_checker55211.cljs$core$IFn$_invoke$arity$1(G__55227) : input_checker55211.call(null,G__55227));
})();if(cljs.core.truth_(temp__4126__auto___55241))
{var error__839__auto___55242 = temp__4126__auto___55241;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk55208","fnk55208",225600065,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55242], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55210,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___55240,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55242], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map55207 = G__55213;while(true){
if(cljs.core.map_QMARK_(map55207))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map55207], 0))));
}
var data = plumbing.fnk.schema.safe_get(map55207,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var name = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var links = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map55207,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t55228 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t55228 = (function (output_schema55209,fnk55208,owner,links,data,owner55169,input_schema55210,data__24144__auto__,vec__55206,opts__24145__auto__,p__55171,name,map55207,output_checker55212,input_checker55211,category_item,validate__837__auto__,G__55213,ufv__,meta55229){
this.output_schema55209 = output_schema55209;
this.fnk55208 = fnk55208;
this.owner = owner;
this.links = links;
this.data = data;
this.owner55169 = owner55169;
this.input_schema55210 = input_schema55210;
this.data__24144__auto__ = data__24144__auto__;
this.vec__55206 = vec__55206;
this.opts__24145__auto__ = opts__24145__auto__;
this.p__55171 = p__55171;
this.name = name;
this.map55207 = map55207;
this.output_checker55212 = output_checker55212;
this.input_checker55211 = input_checker55211;
this.category_item = category_item;
this.validate__837__auto__ = validate__837__auto__;
this.G__55213 = G__55213;
this.ufv__ = ufv__;
this.meta55229 = meta55229;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t55228.cljs$lang$type = true;
stuttaford.codex.t55228.cljs$lang$ctorStr = "stuttaford.codex/t55228";
stuttaford.codex.t55228.cljs$lang$ctorPrWriter = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema55209,input_schema55210,input_checker55211,output_checker55212,vec__55206,opts__24145__auto__){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"stuttaford.codex/t55228");
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema55209,input_schema55210,input_checker55211,output_checker55212,vec__55206,opts__24145__auto__))
;
stuttaford.codex.t55228.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t55228.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema55209,input_schema55210,input_checker55211,output_checker55212,vec__55206,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "category-item";
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema55209,input_schema55210,input_checker55211,output_checker55212,vec__55206,opts__24145__auto__))
;
stuttaford.codex.t55228.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t55228.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema55209,input_schema55210,input_checker55211,output_checker55212,vec__55206,opts__24145__auto__){
return (function (_,p__55231){var self__ = this;
var map__55232 = p__55231;var map__55232__$1 = ((cljs.core.seq_QMARK_(map__55232))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55232):map__55232);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55232__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var ___$1 = this;var temp__4126__auto__ = cljs.core.seq((function (){var G__55233 = stuttaford.codex.search_items(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"tags-string","tags-string",-736299316)], null),search_term,self__.links);return (stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1 ? stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1(G__55233) : stuttaford.codex.name_sort.call(null,G__55233));
})());if(temp__4126__auto__)
{var links__$2 = temp__4126__auto__;var G__55236 = null;var G__55237 = (function (){var attrs55234 = self__.name;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs55234))?sablono.interpreter.attributes(attrs55234):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs55234))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs55234)], null))));
})();var G__55238 = (function (){var attrs55235 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.link_item,links__$2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177)], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.ul,((cljs.core.map_QMARK_(attrs55235))?sablono.interpreter.attributes(attrs55235):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs55235))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs55235)], null))));
})();return React.DOM.div(G__55236,G__55237,G__55238);
} else
{return null;
}
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema55209,input_schema55210,input_checker55211,output_checker55212,vec__55206,opts__24145__auto__))
;
stuttaford.codex.t55228.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema55209,input_schema55210,input_checker55211,output_checker55212,vec__55206,opts__24145__auto__){
return (function (_55230){var self__ = this;
var _55230__$1 = this;return self__.meta55229;
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema55209,input_schema55210,input_checker55211,output_checker55212,vec__55206,opts__24145__auto__))
;
stuttaford.codex.t55228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema55209,input_schema55210,input_checker55211,output_checker55212,vec__55206,opts__24145__auto__){
return (function (_55230,meta55229__$1){var self__ = this;
var _55230__$1 = this;return (new stuttaford.codex.t55228(self__.output_schema55209,self__.fnk55208,self__.owner,self__.links,self__.data,self__.owner55169,self__.input_schema55210,self__.data__24144__auto__,self__.vec__55206,self__.opts__24145__auto__,self__.p__55171,self__.name,self__.map55207,self__.output_checker55212,self__.input_checker55211,self__.category_item,self__.validate__837__auto__,self__.G__55213,self__.ufv__,meta55229__$1));
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema55209,input_schema55210,input_checker55211,output_checker55212,vec__55206,opts__24145__auto__))
;
stuttaford.codex.__GT_t55228 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema55209,input_schema55210,input_checker55211,output_checker55212,vec__55206,opts__24145__auto__){
return (function __GT_t55228(output_schema55209__$1,fnk55208__$1,owner__$1,links__$1,data__$1,owner55169__$1,input_schema55210__$1,data__24144__auto____$1,vec__55206__$1,opts__24145__auto____$1,p__55171__$1,name__$1,map55207__$1,output_checker55212__$1,input_checker55211__$1,category_item__$1,validate__837__auto____$1,G__55213__$1,ufv____$1,meta55229){return (new stuttaford.codex.t55228(output_schema55209__$1,fnk55208__$1,owner__$1,links__$1,data__$1,owner55169__$1,input_schema55210__$1,data__24144__auto____$1,vec__55206__$1,opts__24145__auto____$1,p__55171__$1,name__$1,map55207__$1,output_checker55212__$1,input_checker55211__$1,category_item__$1,validate__837__auto____$1,G__55213__$1,ufv____$1,meta55229));
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema55209,input_schema55210,input_checker55211,output_checker55212,vec__55206,opts__24145__auto__))
;
}
return (new stuttaford.codex.t55228(output_schema55209,fnk55208,owner,links,data,owner55169,input_schema55210,data__24144__auto__,vec__55206,opts__24145__auto__,p__55171,name,map55207,output_checker55212,input_checker55211,category_item,validate__837__auto__,G__55213,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___55243 = (function (){var G__55239 = o__840__auto__;return (output_checker55212.cljs$core$IFn$_invoke$arity$1 ? output_checker55212.cljs$core$IFn$_invoke$arity$1(G__55239) : output_checker55212.call(null,G__55239));
})();if(cljs.core.truth_(temp__4126__auto___55243))
{var error__839__auto___55244 = temp__4126__auto___55243;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk55208","fnk55208",225600065,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55244], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55209,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55244], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema55209,input_schema55210,input_checker55211,output_checker55212,vec__55206,opts__24145__auto__))
,schema.core.make_fn_schema(output_schema55209,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55210], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner55169,new cljs.core.Keyword(null,"data","data",-232669377),data__24144__auto__], null));
};
var category_item = function (data__24144__auto__,owner55169,var_args){
var p__55171 = null;if (arguments.length > 2) {
  p__55171 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return category_item__delegate.call(this,data__24144__auto__,owner55169,p__55171);};
category_item.cljs$lang$maxFixedArity = 2;
category_item.cljs$lang$applyTo = (function (arglist__55245){
var data__24144__auto__ = cljs.core.first(arglist__55245);
arglist__55245 = cljs.core.next(arglist__55245);
var owner55169 = cljs.core.first(arglist__55245);
var p__55171 = cljs.core.rest(arglist__55245);
return category_item__delegate(data__24144__auto__,owner55169,p__55171);
});
category_item.cljs$core$IFn$_invoke$arity$variadic = category_item__delegate;
return category_item;
})()
;
stuttaford.codex.__GT_category_item = (function() {
var __GT_category_item = null;
var __GT_category_item__1 = (function (cursor__24113__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.category_item,cursor__24113__auto__);
});
var __GT_category_item__2 = (function (cursor__24113__auto__,m55170){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.category_item,cursor__24113__auto__,m55170);
});
__GT_category_item = function(cursor__24113__auto__,m55170){
switch(arguments.length){
case 1:
return __GT_category_item__1.call(this,cursor__24113__auto__);
case 2:
return __GT_category_item__2.call(this,cursor__24113__auto__,m55170);
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
var app_view__delegate = function (data__24144__auto__,owner55247,p__55249){var vec__55357 = p__55249;var opts__24145__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55357,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema55361 = schema.core.Any;var input_schema55362 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"categories","categories",178386610),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map55358","map55358",303640574,null))], null);var input_checker55363 = schema.core.checker(input_schema55362);var output_checker55364 = schema.core.checker(output_schema55361);return schema.core.schematize_fn(((function (ufv__,output_schema55361,input_schema55362,input_checker55363,output_checker55364,vec__55357,opts__24145__auto__){
return (function fnk55360(G__55365){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___55464 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55365], null);var temp__4126__auto___55465 = (function (){var G__55415 = args__838__auto___55464;return (input_checker55363.cljs$core$IFn$_invoke$arity$1 ? input_checker55363.cljs$core$IFn$_invoke$arity$1(G__55415) : input_checker55363.call(null,G__55415));
})();if(cljs.core.truth_(temp__4126__auto___55465))
{var error__839__auto___55466 = temp__4126__auto___55465;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk55360","fnk55360",2078622139,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55466], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55362,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___55464,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55466], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map55358 = G__55365;while(true){
if(cljs.core.map_QMARK_(map55358))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map55358], 0))));
}
var map55359 = plumbing.fnk.schema.safe_get(map55358,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var categories = plumbing.fnk.schema.safe_get(map55359,new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map55358,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t55416 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t55416 = (function (output_schema55361,output_checker55364,app_view,input_checker55363,owner,data__24144__auto__,opts__24145__auto__,G__55365,input_schema55362,p__55249,categories,vec__55357,map55359,validate__837__auto__,fnk55360,ufv__,owner55247,map55358,meta55417){
this.output_schema55361 = output_schema55361;
this.output_checker55364 = output_checker55364;
this.app_view = app_view;
this.input_checker55363 = input_checker55363;
this.owner = owner;
this.data__24144__auto__ = data__24144__auto__;
this.opts__24145__auto__ = opts__24145__auto__;
this.G__55365 = G__55365;
this.input_schema55362 = input_schema55362;
this.p__55249 = p__55249;
this.categories = categories;
this.vec__55357 = vec__55357;
this.map55359 = map55359;
this.validate__837__auto__ = validate__837__auto__;
this.fnk55360 = fnk55360;
this.ufv__ = ufv__;
this.owner55247 = owner55247;
this.map55358 = map55358;
this.meta55417 = meta55417;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t55416.cljs$lang$type = true;
stuttaford.codex.t55416.cljs$lang$ctorStr = "stuttaford.codex/t55416";
stuttaford.codex.t55416.cljs$lang$ctorPrWriter = ((function (owner,categories,map55359,validate__837__auto__,ufv__,output_schema55361,input_schema55362,input_checker55363,output_checker55364,vec__55357,opts__24145__auto__){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"stuttaford.codex/t55416");
});})(owner,categories,map55359,validate__837__auto__,ufv__,output_schema55361,input_schema55362,input_checker55363,output_checker55364,vec__55357,opts__24145__auto__))
;
stuttaford.codex.t55416.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t55416.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,categories,map55359,validate__837__auto__,ufv__,output_schema55361,input_schema55362,input_checker55363,output_checker55364,vec__55357,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "app-view";
});})(owner,categories,map55359,validate__837__auto__,ufv__,output_schema55361,input_schema55362,input_checker55363,output_checker55364,vec__55357,opts__24145__auto__))
;
stuttaford.codex.t55416.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t55416.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,categories,map55359,validate__837__auto__,ufv__,output_schema55361,input_schema55362,input_checker55363,output_checker55364,vec__55357,opts__24145__auto__){
return (function (_,p__55419){var self__ = this;
var map__55420 = p__55419;var map__55420__$1 = ((cljs.core.seq_QMARK_(map__55420))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55420):map__55420);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55420__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var search_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55420__$1,new cljs.core.Keyword(null,"search-chan","search-chan",962868037));var ___$1 = this;var G__55421 = null;var G__55422 = (function (){var G__55424 = {"id": "search", "type": "text", "placeholder": "Search for link", "autoFocus": "autofocus", "value": search_term, "onChange": ((function (G__55421,___$1,map__55420,map__55420__$1,search_term,search_chan,owner,categories,map55359,validate__837__auto__,ufv__,output_schema55361,input_schema55362,input_checker55363,output_checker55364,vec__55357,opts__24145__auto__){
return (function (p1__55246_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(search_chan,p1__55246_SHARP_.target.value);
});})(G__55421,___$1,map__55420,map__55420__$1,search_term,search_chan,owner,categories,map55359,validate__837__auto__,ufv__,output_schema55361,input_schema55362,input_checker55363,output_checker55364,vec__55357,opts__24145__auto__))
};return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__55424) : sablono.interpreter.input.call(null,G__55424));
})();var G__55423 = sablono.interpreter.interpret(om.core.build_all.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.category_item,(function (){var G__55425 = self__.categories;return (stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1 ? stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1(G__55425) : stuttaford.codex.name_sort.call(null,G__55425));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177)], null)));return React.DOM.div(G__55421,G__55422,G__55423);
});})(owner,categories,map55359,validate__837__auto__,ufv__,output_schema55361,input_schema55362,input_checker55363,output_checker55364,vec__55357,opts__24145__auto__))
;
stuttaford.codex.t55416.prototype.om$core$IWillMount$ = true;
stuttaford.codex.t55416.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (owner,categories,map55359,validate__837__auto__,ufv__,output_schema55361,input_schema55362,input_checker55363,output_checker55364,vec__55357,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var search_chan = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"search-chan","search-chan",962868037));var c__22689__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22689__auto__,search_chan,___$1,owner,categories,map55359,validate__837__auto__,ufv__,output_schema55361,input_schema55362,input_checker55363,output_checker55364,vec__55357,opts__24145__auto__){
return (function (){var f__22690__auto__ = (function (){var switch__22674__auto__ = ((function (c__22689__auto__,search_chan,___$1,owner,categories,map55359,validate__837__auto__,ufv__,output_schema55361,input_schema55362,input_checker55363,output_checker55364,vec__55357,opts__24145__auto__){
return (function (state_55442){var state_val_55443 = (state_55442[(1)]);if((state_val_55443 === (7)))
{var inst_55429 = (state_55442[(7)]);var inst_55429__$1 = (state_55442[(2)]);var state_55442__$1 = (function (){var statearr_55444 = state_55442;(statearr_55444[(7)] = inst_55429__$1);
return statearr_55444;
})();if(cljs.core.truth_(inst_55429__$1))
{var statearr_55445_55467 = state_55442__$1;(statearr_55445_55467[(1)] = (8));
} else
{var statearr_55446_55468 = state_55442__$1;(statearr_55446_55468[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55443 === (1)))
{var state_55442__$1 = state_55442;var statearr_55447_55469 = state_55442__$1;(statearr_55447_55469[(2)] = null);
(statearr_55447_55469[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55443 === (4)))
{var state_55442__$1 = state_55442;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55442__$1,(7),search_chan);
} else
{if((state_val_55443 === (6)))
{var inst_55438 = (state_55442[(2)]);var state_55442__$1 = state_55442;var statearr_55448_55470 = state_55442__$1;(statearr_55448_55470[(2)] = inst_55438);
(statearr_55448_55470[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55443 === (3)))
{var inst_55440 = (state_55442[(2)]);var state_55442__$1 = state_55442;return cljs.core.async.impl.ioc_helpers.return_chan(state_55442__$1,inst_55440);
} else
{if((state_val_55443 === (2)))
{var state_55442__$1 = state_55442;var statearr_55449_55471 = state_55442__$1;(statearr_55449_55471[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55443 === (9)))
{var state_55442__$1 = state_55442;var statearr_55451_55472 = state_55442__$1;(statearr_55451_55472[(2)] = null);
(statearr_55451_55472[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55443 === (5)))
{var state_55442__$1 = state_55442;var statearr_55452_55473 = state_55442__$1;(statearr_55452_55473[(2)] = null);
(statearr_55452_55473[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55443 === (10)))
{var inst_55434 = (state_55442[(2)]);var state_55442__$1 = (function (){var statearr_55453 = state_55442;(statearr_55453[(8)] = inst_55434);
return statearr_55453;
})();var statearr_55454_55474 = state_55442__$1;(statearr_55454_55474[(2)] = null);
(statearr_55454_55474[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_55443 === (8)))
{var inst_55429 = (state_55442[(7)]);var inst_55431 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"search-term","search-term",356193544),inst_55429);var state_55442__$1 = state_55442;var statearr_55455_55475 = state_55442__$1;(statearr_55455_55475[(2)] = inst_55431);
(statearr_55455_55475[(1)] = (10));
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
});})(c__22689__auto__,search_chan,___$1,owner,categories,map55359,validate__837__auto__,ufv__,output_schema55361,input_schema55362,input_checker55363,output_checker55364,vec__55357,opts__24145__auto__))
;return ((function (switch__22674__auto__,c__22689__auto__,search_chan,___$1,owner,categories,map55359,validate__837__auto__,ufv__,output_schema55361,input_schema55362,input_checker55363,output_checker55364,vec__55357,opts__24145__auto__){
return (function() {
var state_machine__22675__auto__ = null;
var state_machine__22675__auto____0 = (function (){var statearr_55459 = [null,null,null,null,null,null,null,null,null];(statearr_55459[(0)] = state_machine__22675__auto__);
(statearr_55459[(1)] = (1));
return statearr_55459;
});
var state_machine__22675__auto____1 = (function (state_55442){while(true){
var ret_value__22676__auto__ = (function (){try{while(true){
var result__22677__auto__ = switch__22674__auto__(state_55442);if(cljs.core.keyword_identical_QMARK_(result__22677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22677__auto__;
}
break;
}
}catch (e55460){if((e55460 instanceof Object))
{var ex__22678__auto__ = e55460;var statearr_55461_55476 = state_55442;(statearr_55461_55476[(5)] = ex__22678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_55442);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e55460;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__55477 = state_55442;
state_55442 = G__55477;
continue;
}
} else
{return ret_value__22676__auto__;
}
break;
}
});
state_machine__22675__auto__ = function(state_55442){
switch(arguments.length){
case 0:
return state_machine__22675__auto____0.call(this);
case 1:
return state_machine__22675__auto____1.call(this,state_55442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22675__auto____0;
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22675__auto____1;
return state_machine__22675__auto__;
})()
;})(switch__22674__auto__,c__22689__auto__,search_chan,___$1,owner,categories,map55359,validate__837__auto__,ufv__,output_schema55361,input_schema55362,input_checker55363,output_checker55364,vec__55357,opts__24145__auto__))
})();var state__22691__auto__ = (function (){var statearr_55462 = (function (){return (f__22690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22690__auto__.cljs$core$IFn$_invoke$arity$0() : f__22690__auto__.call(null));
})();(statearr_55462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22689__auto__);
return statearr_55462;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22691__auto__);
});})(c__22689__auto__,search_chan,___$1,owner,categories,map55359,validate__837__auto__,ufv__,output_schema55361,input_schema55362,input_checker55363,output_checker55364,vec__55357,opts__24145__auto__))
);
return c__22689__auto__;
});})(owner,categories,map55359,validate__837__auto__,ufv__,output_schema55361,input_schema55362,input_checker55363,output_checker55364,vec__55357,opts__24145__auto__))
;
stuttaford.codex.t55416.prototype.om$core$IInitState$ = true;
stuttaford.codex.t55416.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,categories,map55359,validate__837__auto__,ufv__,output_schema55361,input_schema55362,input_checker55363,output_checker55364,vec__55357,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-chan","search-chan",962868037),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0()], null);
});})(owner,categories,map55359,validate__837__auto__,ufv__,output_schema55361,input_schema55362,input_checker55363,output_checker55364,vec__55357,opts__24145__auto__))
;
stuttaford.codex.t55416.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,categories,map55359,validate__837__auto__,ufv__,output_schema55361,input_schema55362,input_checker55363,output_checker55364,vec__55357,opts__24145__auto__){
return (function (_55418){var self__ = this;
var _55418__$1 = this;return self__.meta55417;
});})(owner,categories,map55359,validate__837__auto__,ufv__,output_schema55361,input_schema55362,input_checker55363,output_checker55364,vec__55357,opts__24145__auto__))
;
stuttaford.codex.t55416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,categories,map55359,validate__837__auto__,ufv__,output_schema55361,input_schema55362,input_checker55363,output_checker55364,vec__55357,opts__24145__auto__){
return (function (_55418,meta55417__$1){var self__ = this;
var _55418__$1 = this;return (new stuttaford.codex.t55416(self__.output_schema55361,self__.output_checker55364,self__.app_view,self__.input_checker55363,self__.owner,self__.data__24144__auto__,self__.opts__24145__auto__,self__.G__55365,self__.input_schema55362,self__.p__55249,self__.categories,self__.vec__55357,self__.map55359,self__.validate__837__auto__,self__.fnk55360,self__.ufv__,self__.owner55247,self__.map55358,meta55417__$1));
});})(owner,categories,map55359,validate__837__auto__,ufv__,output_schema55361,input_schema55362,input_checker55363,output_checker55364,vec__55357,opts__24145__auto__))
;
stuttaford.codex.__GT_t55416 = ((function (owner,categories,map55359,validate__837__auto__,ufv__,output_schema55361,input_schema55362,input_checker55363,output_checker55364,vec__55357,opts__24145__auto__){
return (function __GT_t55416(output_schema55361__$1,output_checker55364__$1,app_view__$1,input_checker55363__$1,owner__$1,data__24144__auto____$1,opts__24145__auto____$1,G__55365__$1,input_schema55362__$1,p__55249__$1,categories__$1,vec__55357__$1,map55359__$1,validate__837__auto____$1,fnk55360__$1,ufv____$1,owner55247__$1,map55358__$1,meta55417){return (new stuttaford.codex.t55416(output_schema55361__$1,output_checker55364__$1,app_view__$1,input_checker55363__$1,owner__$1,data__24144__auto____$1,opts__24145__auto____$1,G__55365__$1,input_schema55362__$1,p__55249__$1,categories__$1,vec__55357__$1,map55359__$1,validate__837__auto____$1,fnk55360__$1,ufv____$1,owner55247__$1,map55358__$1,meta55417));
});})(owner,categories,map55359,validate__837__auto__,ufv__,output_schema55361,input_schema55362,input_checker55363,output_checker55364,vec__55357,opts__24145__auto__))
;
}
return (new stuttaford.codex.t55416(output_schema55361,output_checker55364,app_view,input_checker55363,owner,data__24144__auto__,opts__24145__auto__,G__55365,input_schema55362,p__55249,categories,vec__55357,map55359,validate__837__auto__,fnk55360,ufv__,owner55247,map55358,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___55478 = (function (){var G__55463 = o__840__auto__;return (output_checker55364.cljs$core$IFn$_invoke$arity$1 ? output_checker55364.cljs$core$IFn$_invoke$arity$1(G__55463) : output_checker55364.call(null,G__55463));
})();if(cljs.core.truth_(temp__4126__auto___55478))
{var error__839__auto___55479 = temp__4126__auto___55478;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk55360","fnk55360",2078622139,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55479], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55361,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55479], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema55361,input_schema55362,input_checker55363,output_checker55364,vec__55357,opts__24145__auto__))
,schema.core.make_fn_schema(output_schema55361,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55362], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner55247,new cljs.core.Keyword(null,"data","data",-232669377),data__24144__auto__], null));
};
var app_view = function (data__24144__auto__,owner55247,var_args){
var p__55249 = null;if (arguments.length > 2) {
  p__55249 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_view__delegate.call(this,data__24144__auto__,owner55247,p__55249);};
app_view.cljs$lang$maxFixedArity = 2;
app_view.cljs$lang$applyTo = (function (arglist__55480){
var data__24144__auto__ = cljs.core.first(arglist__55480);
arglist__55480 = cljs.core.next(arglist__55480);
var owner55247 = cljs.core.first(arglist__55480);
var p__55249 = cljs.core.rest(arglist__55480);
return app_view__delegate(data__24144__auto__,owner55247,p__55249);
});
app_view.cljs$core$IFn$_invoke$arity$variadic = app_view__delegate;
return app_view;
})()
;
stuttaford.codex.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__24113__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.app_view,cursor__24113__auto__);
});
var __GT_app_view__2 = (function (cursor__24113__auto__,m55248){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.app_view,cursor__24113__auto__,m55248);
});
__GT_app_view = function(cursor__24113__auto__,m55248){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__24113__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__24113__auto__,m55248);
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