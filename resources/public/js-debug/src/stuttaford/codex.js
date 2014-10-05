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
var tag_item__delegate = function (data__24197__auto__,owner49117,p__49119){var vec__49147 = p__49119;var opts__24198__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49147,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema49151 = schema.core.Any;var input_schema49152 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map49148","map49148",651348255,null))], null);var input_checker49153 = schema.core.checker(input_schema49152);var output_checker49154 = schema.core.checker(output_schema49151);return schema.core.schematize_fn(((function (ufv__,output_schema49151,input_schema49152,input_checker49153,output_checker49154,vec__49147,opts__24198__auto__){
return (function fnk49150(G__49155){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49174 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49155], null);var temp__4126__auto___49175 = (function (){var G__49165 = args__838__auto___49174;return (input_checker49153.cljs$core$IFn$_invoke$arity$1 ? input_checker49153.cljs$core$IFn$_invoke$arity$1(G__49165) : input_checker49153.call(null,G__49165));
})();if(cljs.core.truth_(temp__4126__auto___49175))
{var error__839__auto___49176 = temp__4126__auto___49175;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk49150","fnk49150",-2015618704,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49176], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49152,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49174,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49176], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map49148 = G__49155;while(true){
if(cljs.core.map_QMARK_(map49148))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map49148], 0))));
}
var map49149 = plumbing.fnk.schema.safe_get(map49148,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var name = plumbing.fnk.schema.safe_get(map49149,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map49148,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t49166 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t49166 = (function (G__49155,data__24197__auto__,owner49117,owner,output_schema49151,map49149,opts__24198__auto__,fnk49150,name,p__49119,vec__49147,input_schema49152,input_checker49153,validate__837__auto__,output_checker49154,ufv__,tag_item,map49148,meta49167){
this.G__49155 = G__49155;
this.data__24197__auto__ = data__24197__auto__;
this.owner49117 = owner49117;
this.owner = owner;
this.output_schema49151 = output_schema49151;
this.map49149 = map49149;
this.opts__24198__auto__ = opts__24198__auto__;
this.fnk49150 = fnk49150;
this.name = name;
this.p__49119 = p__49119;
this.vec__49147 = vec__49147;
this.input_schema49152 = input_schema49152;
this.input_checker49153 = input_checker49153;
this.validate__837__auto__ = validate__837__auto__;
this.output_checker49154 = output_checker49154;
this.ufv__ = ufv__;
this.tag_item = tag_item;
this.map49148 = map49148;
this.meta49167 = meta49167;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t49166.cljs$lang$type = true;
stuttaford.codex.t49166.cljs$lang$ctorStr = "stuttaford.codex/t49166";
stuttaford.codex.t49166.cljs$lang$ctorPrWriter = ((function (owner,name,map49149,validate__837__auto__,ufv__,output_schema49151,input_schema49152,input_checker49153,output_checker49154,vec__49147,opts__24198__auto__){
return (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"stuttaford.codex/t49166");
});})(owner,name,map49149,validate__837__auto__,ufv__,output_schema49151,input_schema49152,input_checker49153,output_checker49154,vec__49147,opts__24198__auto__))
;
stuttaford.codex.t49166.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t49166.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,name,map49149,validate__837__auto__,ufv__,output_schema49151,input_schema49152,input_checker49153,output_checker49154,vec__49147,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-item";
});})(owner,name,map49149,validate__837__auto__,ufv__,output_schema49151,input_schema49152,input_checker49153,output_checker49154,vec__49147,opts__24198__auto__))
;
stuttaford.codex.t49166.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t49166.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,name,map49149,validate__837__auto__,ufv__,output_schema49151,input_schema49152,input_checker49153,output_checker49154,vec__49147,opts__24198__auto__){
return (function (_,p__49169){var self__ = this;
var map__49170 = p__49169;var map__49170__$1 = ((cljs.core.seq_QMARK_(map__49170))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49170):map__49170);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49170__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var ___$1 = this;var class$ = (cljs.core.truth_((function (){var and__19277__auto__ = cljs.core.seq(search_term);if(and__19277__auto__)
{return cljs.core.re_find(stuttaford.codex.regex(search_term),self__.name);
} else
{return and__19277__auto__;
}
})())?"tag active":"tag");var G__49171 = {"className": class$, "onClick": ((function (class$,___$1,map__49170,map__49170__$1,search_term,owner,name,map49149,validate__837__auto__,ufv__,output_schema49151,input_schema49152,input_checker49153,output_checker49154,vec__49147,opts__24198__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"search-chan","search-chan",962868037)),self__.name);
});})(class$,___$1,map__49170,map__49170__$1,search_term,owner,name,map49149,validate__837__auto__,ufv__,output_schema49151,input_schema49152,input_checker49153,output_checker49154,vec__49147,opts__24198__auto__))
};var G__49172 = sablono.interpreter.interpret(self__.name);return React.DOM.a(G__49171,G__49172);
});})(owner,name,map49149,validate__837__auto__,ufv__,output_schema49151,input_schema49152,input_checker49153,output_checker49154,vec__49147,opts__24198__auto__))
;
stuttaford.codex.t49166.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,name,map49149,validate__837__auto__,ufv__,output_schema49151,input_schema49152,input_checker49153,output_checker49154,vec__49147,opts__24198__auto__){
return (function (_49168){var self__ = this;
var _49168__$1 = this;return self__.meta49167;
});})(owner,name,map49149,validate__837__auto__,ufv__,output_schema49151,input_schema49152,input_checker49153,output_checker49154,vec__49147,opts__24198__auto__))
;
stuttaford.codex.t49166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,name,map49149,validate__837__auto__,ufv__,output_schema49151,input_schema49152,input_checker49153,output_checker49154,vec__49147,opts__24198__auto__){
return (function (_49168,meta49167__$1){var self__ = this;
var _49168__$1 = this;return (new stuttaford.codex.t49166(self__.G__49155,self__.data__24197__auto__,self__.owner49117,self__.owner,self__.output_schema49151,self__.map49149,self__.opts__24198__auto__,self__.fnk49150,self__.name,self__.p__49119,self__.vec__49147,self__.input_schema49152,self__.input_checker49153,self__.validate__837__auto__,self__.output_checker49154,self__.ufv__,self__.tag_item,self__.map49148,meta49167__$1));
});})(owner,name,map49149,validate__837__auto__,ufv__,output_schema49151,input_schema49152,input_checker49153,output_checker49154,vec__49147,opts__24198__auto__))
;
stuttaford.codex.__GT_t49166 = ((function (owner,name,map49149,validate__837__auto__,ufv__,output_schema49151,input_schema49152,input_checker49153,output_checker49154,vec__49147,opts__24198__auto__){
return (function __GT_t49166(G__49155__$1,data__24197__auto____$1,owner49117__$1,owner__$1,output_schema49151__$1,map49149__$1,opts__24198__auto____$1,fnk49150__$1,name__$1,p__49119__$1,vec__49147__$1,input_schema49152__$1,input_checker49153__$1,validate__837__auto____$1,output_checker49154__$1,ufv____$1,tag_item__$1,map49148__$1,meta49167){return (new stuttaford.codex.t49166(G__49155__$1,data__24197__auto____$1,owner49117__$1,owner__$1,output_schema49151__$1,map49149__$1,opts__24198__auto____$1,fnk49150__$1,name__$1,p__49119__$1,vec__49147__$1,input_schema49152__$1,input_checker49153__$1,validate__837__auto____$1,output_checker49154__$1,ufv____$1,tag_item__$1,map49148__$1,meta49167));
});})(owner,name,map49149,validate__837__auto__,ufv__,output_schema49151,input_schema49152,input_checker49153,output_checker49154,vec__49147,opts__24198__auto__))
;
}
return (new stuttaford.codex.t49166(G__49155,data__24197__auto__,owner49117,owner,output_schema49151,map49149,opts__24198__auto__,fnk49150,name,p__49119,vec__49147,input_schema49152,input_checker49153,validate__837__auto__,output_checker49154,ufv__,tag_item,map49148,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49177 = (function (){var G__49173 = o__840__auto__;return (output_checker49154.cljs$core$IFn$_invoke$arity$1 ? output_checker49154.cljs$core$IFn$_invoke$arity$1(G__49173) : output_checker49154.call(null,G__49173));
})();if(cljs.core.truth_(temp__4126__auto___49177))
{var error__839__auto___49178 = temp__4126__auto___49177;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk49150","fnk49150",-2015618704,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49178], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49151,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49178], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema49151,input_schema49152,input_checker49153,output_checker49154,vec__49147,opts__24198__auto__))
,schema.core.make_fn_schema(output_schema49151,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49152], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24198__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner49117,new cljs.core.Keyword(null,"data","data",-232669377),data__24197__auto__], null));
};
var tag_item = function (data__24197__auto__,owner49117,var_args){
var p__49119 = null;if (arguments.length > 2) {
  p__49119 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_item__delegate.call(this,data__24197__auto__,owner49117,p__49119);};
tag_item.cljs$lang$maxFixedArity = 2;
tag_item.cljs$lang$applyTo = (function (arglist__49179){
var data__24197__auto__ = cljs.core.first(arglist__49179);
arglist__49179 = cljs.core.next(arglist__49179);
var owner49117 = cljs.core.first(arglist__49179);
var p__49119 = cljs.core.rest(arglist__49179);
return tag_item__delegate(data__24197__auto__,owner49117,p__49119);
});
tag_item.cljs$core$IFn$_invoke$arity$variadic = tag_item__delegate;
return tag_item;
})()
;
stuttaford.codex.__GT_tag_item = (function() {
var __GT_tag_item = null;
var __GT_tag_item__1 = (function (cursor__24166__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.tag_item,cursor__24166__auto__);
});
var __GT_tag_item__2 = (function (cursor__24166__auto__,m49118){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.tag_item,cursor__24166__auto__,m49118);
});
__GT_tag_item = function(cursor__24166__auto__,m49118){
switch(arguments.length){
case 1:
return __GT_tag_item__1.call(this,cursor__24166__auto__);
case 2:
return __GT_tag_item__2.call(this,cursor__24166__auto__,m49118);
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
var link_item__delegate = function (data__24197__auto__,owner49180,p__49182){var vec__49218 = p__49182;var opts__24198__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49218,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema49222 = schema.core.Any;var input_schema49223 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"tags","tags",1771418977)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"image","image",-58725096)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"description","description",-1428560544)),schema.core.Any,new cljs.core.Keyword(null,"uri","uri",-774711847),schema.core.Any,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map49219","map49219",-1781890723,null))], null);var input_checker49224 = schema.core.checker(input_schema49223);var output_checker49225 = schema.core.checker(output_schema49222);return schema.core.schematize_fn(((function (ufv__,output_schema49222,input_schema49223,input_checker49224,output_checker49225,vec__49218,opts__24198__auto__){
return (function fnk49221(G__49226){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49253 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49226], null);var temp__4126__auto___49254 = (function (){var G__49240 = args__838__auto___49253;return (input_checker49224.cljs$core$IFn$_invoke$arity$1 ? input_checker49224.cljs$core$IFn$_invoke$arity$1(G__49240) : input_checker49224.call(null,G__49240));
})();if(cljs.core.truth_(temp__4126__auto___49254))
{var error__839__auto___49255 = temp__4126__auto___49254;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk49221","fnk49221",-1891852534,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49255], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49223,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49253,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49255], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map49219 = G__49226;while(true){
if(cljs.core.map_QMARK_(map49219))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map49219], 0))));
}
var map49220 = plumbing.fnk.schema.safe_get(map49219,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var name = plumbing.fnk.schema.safe_get(map49220,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var uri = plumbing.fnk.schema.safe_get(map49220,new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var description = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map49220,new cljs.core.Keyword(null,"description","description",-1428560544),null);var image = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map49220,new cljs.core.Keyword(null,"image","image",-58725096),null);var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map49220,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map49219,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t49241 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t49241 = (function (uri,G__49226,input_checker49224,data__24197__auto__,vec__49218,owner,output_checker49225,input_schema49223,map49220,description,tags,fnk49221,opts__24198__auto__,name,output_schema49222,p__49182,validate__837__auto__,owner49180,map49219,ufv__,link_item,image,meta49242){
this.uri = uri;
this.G__49226 = G__49226;
this.input_checker49224 = input_checker49224;
this.data__24197__auto__ = data__24197__auto__;
this.vec__49218 = vec__49218;
this.owner = owner;
this.output_checker49225 = output_checker49225;
this.input_schema49223 = input_schema49223;
this.map49220 = map49220;
this.description = description;
this.tags = tags;
this.fnk49221 = fnk49221;
this.opts__24198__auto__ = opts__24198__auto__;
this.name = name;
this.output_schema49222 = output_schema49222;
this.p__49182 = p__49182;
this.validate__837__auto__ = validate__837__auto__;
this.owner49180 = owner49180;
this.map49219 = map49219;
this.ufv__ = ufv__;
this.link_item = link_item;
this.image = image;
this.meta49242 = meta49242;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t49241.cljs$lang$type = true;
stuttaford.codex.t49241.cljs$lang$ctorStr = "stuttaford.codex/t49241";
stuttaford.codex.t49241.cljs$lang$ctorPrWriter = ((function (owner,tags,image,description,uri,name,map49220,validate__837__auto__,ufv__,output_schema49222,input_schema49223,input_checker49224,output_checker49225,vec__49218,opts__24198__auto__){
return (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"stuttaford.codex/t49241");
});})(owner,tags,image,description,uri,name,map49220,validate__837__auto__,ufv__,output_schema49222,input_schema49223,input_checker49224,output_checker49225,vec__49218,opts__24198__auto__))
;
stuttaford.codex.t49241.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t49241.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,tags,image,description,uri,name,map49220,validate__837__auto__,ufv__,output_schema49222,input_schema49223,input_checker49224,output_checker49225,vec__49218,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "link-item";
});})(owner,tags,image,description,uri,name,map49220,validate__837__auto__,ufv__,output_schema49222,input_schema49223,input_checker49224,output_checker49225,vec__49218,opts__24198__auto__))
;
stuttaford.codex.t49241.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t49241.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,tags,image,description,uri,name,map49220,validate__837__auto__,ufv__,output_schema49222,input_schema49223,input_checker49224,output_checker49225,vec__49218,opts__24198__auto__){
return (function (_,p__49244){var self__ = this;
var map__49245 = p__49244;var map__49245__$1 = ((cljs.core.seq_QMARK_(map__49245))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49245):map__49245);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49245__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var ___$1 = this;var G__49246 = {"className": "link"};var G__49247 = (function (){var G__49249 = {"href": self__.uri};var G__49250 = sablono.interpreter.interpret(self__.name);return React.DOM.a(G__49249,G__49250);
})();var G__49248 = sablono.interpreter.interpret(om.core.build_all.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.tag_item,(function (){var G__49251 = self__.tags;return (stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1 ? stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1(G__49251) : stuttaford.codex.name_sort.call(null,G__49251));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177)], null)));return React.DOM.li(G__49246,G__49247,G__49248);
});})(owner,tags,image,description,uri,name,map49220,validate__837__auto__,ufv__,output_schema49222,input_schema49223,input_checker49224,output_checker49225,vec__49218,opts__24198__auto__))
;
stuttaford.codex.t49241.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,tags,image,description,uri,name,map49220,validate__837__auto__,ufv__,output_schema49222,input_schema49223,input_checker49224,output_checker49225,vec__49218,opts__24198__auto__){
return (function (_49243){var self__ = this;
var _49243__$1 = this;return self__.meta49242;
});})(owner,tags,image,description,uri,name,map49220,validate__837__auto__,ufv__,output_schema49222,input_schema49223,input_checker49224,output_checker49225,vec__49218,opts__24198__auto__))
;
stuttaford.codex.t49241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,tags,image,description,uri,name,map49220,validate__837__auto__,ufv__,output_schema49222,input_schema49223,input_checker49224,output_checker49225,vec__49218,opts__24198__auto__){
return (function (_49243,meta49242__$1){var self__ = this;
var _49243__$1 = this;return (new stuttaford.codex.t49241(self__.uri,self__.G__49226,self__.input_checker49224,self__.data__24197__auto__,self__.vec__49218,self__.owner,self__.output_checker49225,self__.input_schema49223,self__.map49220,self__.description,self__.tags,self__.fnk49221,self__.opts__24198__auto__,self__.name,self__.output_schema49222,self__.p__49182,self__.validate__837__auto__,self__.owner49180,self__.map49219,self__.ufv__,self__.link_item,self__.image,meta49242__$1));
});})(owner,tags,image,description,uri,name,map49220,validate__837__auto__,ufv__,output_schema49222,input_schema49223,input_checker49224,output_checker49225,vec__49218,opts__24198__auto__))
;
stuttaford.codex.__GT_t49241 = ((function (owner,tags,image,description,uri,name,map49220,validate__837__auto__,ufv__,output_schema49222,input_schema49223,input_checker49224,output_checker49225,vec__49218,opts__24198__auto__){
return (function __GT_t49241(uri__$1,G__49226__$1,input_checker49224__$1,data__24197__auto____$1,vec__49218__$1,owner__$1,output_checker49225__$1,input_schema49223__$1,map49220__$1,description__$1,tags__$1,fnk49221__$1,opts__24198__auto____$1,name__$1,output_schema49222__$1,p__49182__$1,validate__837__auto____$1,owner49180__$1,map49219__$1,ufv____$1,link_item__$1,image__$1,meta49242){return (new stuttaford.codex.t49241(uri__$1,G__49226__$1,input_checker49224__$1,data__24197__auto____$1,vec__49218__$1,owner__$1,output_checker49225__$1,input_schema49223__$1,map49220__$1,description__$1,tags__$1,fnk49221__$1,opts__24198__auto____$1,name__$1,output_schema49222__$1,p__49182__$1,validate__837__auto____$1,owner49180__$1,map49219__$1,ufv____$1,link_item__$1,image__$1,meta49242));
});})(owner,tags,image,description,uri,name,map49220,validate__837__auto__,ufv__,output_schema49222,input_schema49223,input_checker49224,output_checker49225,vec__49218,opts__24198__auto__))
;
}
return (new stuttaford.codex.t49241(uri,G__49226,input_checker49224,data__24197__auto__,vec__49218,owner,output_checker49225,input_schema49223,map49220,description,tags,fnk49221,opts__24198__auto__,name,output_schema49222,p__49182,validate__837__auto__,owner49180,map49219,ufv__,link_item,image,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49256 = (function (){var G__49252 = o__840__auto__;return (output_checker49225.cljs$core$IFn$_invoke$arity$1 ? output_checker49225.cljs$core$IFn$_invoke$arity$1(G__49252) : output_checker49225.call(null,G__49252));
})();if(cljs.core.truth_(temp__4126__auto___49256))
{var error__839__auto___49257 = temp__4126__auto___49256;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk49221","fnk49221",-1891852534,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49257], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49222,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49257], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema49222,input_schema49223,input_checker49224,output_checker49225,vec__49218,opts__24198__auto__))
,schema.core.make_fn_schema(output_schema49222,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49223], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24198__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner49180,new cljs.core.Keyword(null,"data","data",-232669377),data__24197__auto__], null));
};
var link_item = function (data__24197__auto__,owner49180,var_args){
var p__49182 = null;if (arguments.length > 2) {
  p__49182 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return link_item__delegate.call(this,data__24197__auto__,owner49180,p__49182);};
link_item.cljs$lang$maxFixedArity = 2;
link_item.cljs$lang$applyTo = (function (arglist__49258){
var data__24197__auto__ = cljs.core.first(arglist__49258);
arglist__49258 = cljs.core.next(arglist__49258);
var owner49180 = cljs.core.first(arglist__49258);
var p__49182 = cljs.core.rest(arglist__49258);
return link_item__delegate(data__24197__auto__,owner49180,p__49182);
});
link_item.cljs$core$IFn$_invoke$arity$variadic = link_item__delegate;
return link_item;
})()
;
stuttaford.codex.__GT_link_item = (function() {
var __GT_link_item = null;
var __GT_link_item__1 = (function (cursor__24166__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.link_item,cursor__24166__auto__);
});
var __GT_link_item__2 = (function (cursor__24166__auto__,m49181){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.link_item,cursor__24166__auto__,m49181);
});
__GT_link_item = function(cursor__24166__auto__,m49181){
switch(arguments.length){
case 1:
return __GT_link_item__1.call(this,cursor__24166__auto__);
case 2:
return __GT_link_item__2.call(this,cursor__24166__auto__,m49181);
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
var category_item__delegate = function (data__24197__auto__,owner49259,p__49261){var vec__49296 = p__49261;var opts__24198__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49296,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema49299 = schema.core.Any;var input_schema49300 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"links","links",-654507394),schema.core.Any,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map49297","map49297",-71671039,null))], null);var input_checker49301 = schema.core.checker(input_schema49300);var output_checker49302 = schema.core.checker(output_schema49299);return schema.core.schematize_fn(((function (ufv__,output_schema49299,input_schema49300,input_checker49301,output_checker49302,vec__49296,opts__24198__auto__){
return (function fnk49298(G__49303){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49330 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49303], null);var temp__4126__auto___49331 = (function (){var G__49317 = args__838__auto___49330;return (input_checker49301.cljs$core$IFn$_invoke$arity$1 ? input_checker49301.cljs$core$IFn$_invoke$arity$1(G__49317) : input_checker49301.call(null,G__49317));
})();if(cljs.core.truth_(temp__4126__auto___49331))
{var error__839__auto___49332 = temp__4126__auto___49331;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk49298","fnk49298",-2078591779,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49332], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49300,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49330,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49332], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map49297 = G__49303;while(true){
if(cljs.core.map_QMARK_(map49297))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map49297], 0))));
}
var data = plumbing.fnk.schema.safe_get(map49297,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var name = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var links = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map49297,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t49318 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t49318 = (function (map49297,data__24197__auto__,G__49303,output_checker49302,owner,links,data,p__49261,input_schema49300,input_checker49301,owner49259,opts__24198__auto__,name,output_schema49299,vec__49296,category_item,validate__837__auto__,fnk49298,ufv__,meta49319){
this.map49297 = map49297;
this.data__24197__auto__ = data__24197__auto__;
this.G__49303 = G__49303;
this.output_checker49302 = output_checker49302;
this.owner = owner;
this.links = links;
this.data = data;
this.p__49261 = p__49261;
this.input_schema49300 = input_schema49300;
this.input_checker49301 = input_checker49301;
this.owner49259 = owner49259;
this.opts__24198__auto__ = opts__24198__auto__;
this.name = name;
this.output_schema49299 = output_schema49299;
this.vec__49296 = vec__49296;
this.category_item = category_item;
this.validate__837__auto__ = validate__837__auto__;
this.fnk49298 = fnk49298;
this.ufv__ = ufv__;
this.meta49319 = meta49319;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t49318.cljs$lang$type = true;
stuttaford.codex.t49318.cljs$lang$ctorStr = "stuttaford.codex/t49318";
stuttaford.codex.t49318.cljs$lang$ctorPrWriter = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema49299,input_schema49300,input_checker49301,output_checker49302,vec__49296,opts__24198__auto__){
return (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"stuttaford.codex/t49318");
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema49299,input_schema49300,input_checker49301,output_checker49302,vec__49296,opts__24198__auto__))
;
stuttaford.codex.t49318.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t49318.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema49299,input_schema49300,input_checker49301,output_checker49302,vec__49296,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "category-item";
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema49299,input_schema49300,input_checker49301,output_checker49302,vec__49296,opts__24198__auto__))
;
stuttaford.codex.t49318.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t49318.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema49299,input_schema49300,input_checker49301,output_checker49302,vec__49296,opts__24198__auto__){
return (function (_,p__49321){var self__ = this;
var map__49322 = p__49321;var map__49322__$1 = ((cljs.core.seq_QMARK_(map__49322))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49322):map__49322);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49322__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var ___$1 = this;var temp__4126__auto__ = cljs.core.seq((function (){var G__49323 = stuttaford.codex.search_items(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"tags-string","tags-string",-736299316)], null),search_term,self__.links);return (stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1 ? stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1(G__49323) : stuttaford.codex.name_sort.call(null,G__49323));
})());if(temp__4126__auto__)
{var links__$2 = temp__4126__auto__;var G__49326 = null;var G__49327 = (function (){var attrs49324 = self__.name;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs49324))?sablono.interpreter.attributes(attrs49324):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs49324))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs49324)], null))));
})();var G__49328 = (function (){var attrs49325 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.link_item,links__$2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177)], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.ul,((cljs.core.map_QMARK_(attrs49325))?sablono.interpreter.attributes(attrs49325):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs49325))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs49325)], null))));
})();return React.DOM.div(G__49326,G__49327,G__49328);
} else
{return null;
}
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema49299,input_schema49300,input_checker49301,output_checker49302,vec__49296,opts__24198__auto__))
;
stuttaford.codex.t49318.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema49299,input_schema49300,input_checker49301,output_checker49302,vec__49296,opts__24198__auto__){
return (function (_49320){var self__ = this;
var _49320__$1 = this;return self__.meta49319;
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema49299,input_schema49300,input_checker49301,output_checker49302,vec__49296,opts__24198__auto__))
;
stuttaford.codex.t49318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema49299,input_schema49300,input_checker49301,output_checker49302,vec__49296,opts__24198__auto__){
return (function (_49320,meta49319__$1){var self__ = this;
var _49320__$1 = this;return (new stuttaford.codex.t49318(self__.map49297,self__.data__24197__auto__,self__.G__49303,self__.output_checker49302,self__.owner,self__.links,self__.data,self__.p__49261,self__.input_schema49300,self__.input_checker49301,self__.owner49259,self__.opts__24198__auto__,self__.name,self__.output_schema49299,self__.vec__49296,self__.category_item,self__.validate__837__auto__,self__.fnk49298,self__.ufv__,meta49319__$1));
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema49299,input_schema49300,input_checker49301,output_checker49302,vec__49296,opts__24198__auto__))
;
stuttaford.codex.__GT_t49318 = ((function (owner,links,name,data,validate__837__auto__,ufv__,output_schema49299,input_schema49300,input_checker49301,output_checker49302,vec__49296,opts__24198__auto__){
return (function __GT_t49318(map49297__$1,data__24197__auto____$1,G__49303__$1,output_checker49302__$1,owner__$1,links__$1,data__$1,p__49261__$1,input_schema49300__$1,input_checker49301__$1,owner49259__$1,opts__24198__auto____$1,name__$1,output_schema49299__$1,vec__49296__$1,category_item__$1,validate__837__auto____$1,fnk49298__$1,ufv____$1,meta49319){return (new stuttaford.codex.t49318(map49297__$1,data__24197__auto____$1,G__49303__$1,output_checker49302__$1,owner__$1,links__$1,data__$1,p__49261__$1,input_schema49300__$1,input_checker49301__$1,owner49259__$1,opts__24198__auto____$1,name__$1,output_schema49299__$1,vec__49296__$1,category_item__$1,validate__837__auto____$1,fnk49298__$1,ufv____$1,meta49319));
});})(owner,links,name,data,validate__837__auto__,ufv__,output_schema49299,input_schema49300,input_checker49301,output_checker49302,vec__49296,opts__24198__auto__))
;
}
return (new stuttaford.codex.t49318(map49297,data__24197__auto__,G__49303,output_checker49302,owner,links,data,p__49261,input_schema49300,input_checker49301,owner49259,opts__24198__auto__,name,output_schema49299,vec__49296,category_item,validate__837__auto__,fnk49298,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49333 = (function (){var G__49329 = o__840__auto__;return (output_checker49302.cljs$core$IFn$_invoke$arity$1 ? output_checker49302.cljs$core$IFn$_invoke$arity$1(G__49329) : output_checker49302.call(null,G__49329));
})();if(cljs.core.truth_(temp__4126__auto___49333))
{var error__839__auto___49334 = temp__4126__auto___49333;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk49298","fnk49298",-2078591779,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49334], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49299,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49334], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema49299,input_schema49300,input_checker49301,output_checker49302,vec__49296,opts__24198__auto__))
,schema.core.make_fn_schema(output_schema49299,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49300], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24198__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner49259,new cljs.core.Keyword(null,"data","data",-232669377),data__24197__auto__], null));
};
var category_item = function (data__24197__auto__,owner49259,var_args){
var p__49261 = null;if (arguments.length > 2) {
  p__49261 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return category_item__delegate.call(this,data__24197__auto__,owner49259,p__49261);};
category_item.cljs$lang$maxFixedArity = 2;
category_item.cljs$lang$applyTo = (function (arglist__49335){
var data__24197__auto__ = cljs.core.first(arglist__49335);
arglist__49335 = cljs.core.next(arglist__49335);
var owner49259 = cljs.core.first(arglist__49335);
var p__49261 = cljs.core.rest(arglist__49335);
return category_item__delegate(data__24197__auto__,owner49259,p__49261);
});
category_item.cljs$core$IFn$_invoke$arity$variadic = category_item__delegate;
return category_item;
})()
;
stuttaford.codex.__GT_category_item = (function() {
var __GT_category_item = null;
var __GT_category_item__1 = (function (cursor__24166__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.category_item,cursor__24166__auto__);
});
var __GT_category_item__2 = (function (cursor__24166__auto__,m49260){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.category_item,cursor__24166__auto__,m49260);
});
__GT_category_item = function(cursor__24166__auto__,m49260){
switch(arguments.length){
case 1:
return __GT_category_item__1.call(this,cursor__24166__auto__);
case 2:
return __GT_category_item__2.call(this,cursor__24166__auto__,m49260);
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
var app_view__delegate = function (data__24197__auto__,owner49337,p__49339){var vec__49447 = p__49339;var opts__24198__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49447,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema49451 = schema.core.Any;var input_schema49452 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"categories","categories",178386610),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map49448","map49448",1116283020,null))], null);var input_checker49453 = schema.core.checker(input_schema49452);var output_checker49454 = schema.core.checker(output_schema49451);return schema.core.schematize_fn(((function (ufv__,output_schema49451,input_schema49452,input_checker49453,output_checker49454,vec__49447,opts__24198__auto__){
return (function fnk49450(G__49455){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49554 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49455], null);var temp__4126__auto___49555 = (function (){var G__49505 = args__838__auto___49554;return (input_checker49453.cljs$core$IFn$_invoke$arity$1 ? input_checker49453.cljs$core$IFn$_invoke$arity$1(G__49505) : input_checker49453.call(null,G__49505));
})();if(cljs.core.truth_(temp__4126__auto___49555))
{var error__839__auto___49556 = temp__4126__auto___49555;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk49450","fnk49450",-1118095785,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49556], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49452,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49554,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49556], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map49448 = G__49455;while(true){
if(cljs.core.map_QMARK_(map49448))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map49448], 0))));
}
var map49449 = plumbing.fnk.schema.safe_get(map49448,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var categories = plumbing.fnk.schema.safe_get(map49449,new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map49448,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.codex.t49506 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.codex.t49506 = (function (map49449,data__24197__auto__,app_view,owner,output_checker49454,p__49339,vec__49447,map49448,G__49455,input_schema49452,opts__24198__auto__,output_schema49451,fnk49450,owner49337,categories,validate__837__auto__,input_checker49453,ufv__,meta49507){
this.map49449 = map49449;
this.data__24197__auto__ = data__24197__auto__;
this.app_view = app_view;
this.owner = owner;
this.output_checker49454 = output_checker49454;
this.p__49339 = p__49339;
this.vec__49447 = vec__49447;
this.map49448 = map49448;
this.G__49455 = G__49455;
this.input_schema49452 = input_schema49452;
this.opts__24198__auto__ = opts__24198__auto__;
this.output_schema49451 = output_schema49451;
this.fnk49450 = fnk49450;
this.owner49337 = owner49337;
this.categories = categories;
this.validate__837__auto__ = validate__837__auto__;
this.input_checker49453 = input_checker49453;
this.ufv__ = ufv__;
this.meta49507 = meta49507;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.codex.t49506.cljs$lang$type = true;
stuttaford.codex.t49506.cljs$lang$ctorStr = "stuttaford.codex/t49506";
stuttaford.codex.t49506.cljs$lang$ctorPrWriter = ((function (owner,categories,map49449,validate__837__auto__,ufv__,output_schema49451,input_schema49452,input_checker49453,output_checker49454,vec__49447,opts__24198__auto__){
return (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"stuttaford.codex/t49506");
});})(owner,categories,map49449,validate__837__auto__,ufv__,output_schema49451,input_schema49452,input_checker49453,output_checker49454,vec__49447,opts__24198__auto__))
;
stuttaford.codex.t49506.prototype.om$core$IDisplayName$ = true;
stuttaford.codex.t49506.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,categories,map49449,validate__837__auto__,ufv__,output_schema49451,input_schema49452,input_checker49453,output_checker49454,vec__49447,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "app-view";
});})(owner,categories,map49449,validate__837__auto__,ufv__,output_schema49451,input_schema49452,input_checker49453,output_checker49454,vec__49447,opts__24198__auto__))
;
stuttaford.codex.t49506.prototype.om$core$IRenderState$ = true;
stuttaford.codex.t49506.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,categories,map49449,validate__837__auto__,ufv__,output_schema49451,input_schema49452,input_checker49453,output_checker49454,vec__49447,opts__24198__auto__){
return (function (_,p__49509){var self__ = this;
var map__49510 = p__49509;var map__49510__$1 = ((cljs.core.seq_QMARK_(map__49510))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49510):map__49510);var search_term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49510__$1,new cljs.core.Keyword(null,"search-term","search-term",356193544));var search_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49510__$1,new cljs.core.Keyword(null,"search-chan","search-chan",962868037));var ___$1 = this;var G__49511 = null;var G__49512 = (function (){var G__49514 = {"id": "search", "type": "text", "placeholder": "Search for link", "autoFocus": "autofocus", "value": search_term, "onChange": ((function (G__49511,___$1,map__49510,map__49510__$1,search_term,search_chan,owner,categories,map49449,validate__837__auto__,ufv__,output_schema49451,input_schema49452,input_checker49453,output_checker49454,vec__49447,opts__24198__auto__){
return (function (p1__49336_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(search_chan,p1__49336_SHARP_.target.value);
});})(G__49511,___$1,map__49510,map__49510__$1,search_term,search_chan,owner,categories,map49449,validate__837__auto__,ufv__,output_schema49451,input_schema49452,input_checker49453,output_checker49454,vec__49447,opts__24198__auto__))
};return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__49514) : sablono.interpreter.input.call(null,G__49514));
})();var G__49513 = sablono.interpreter.interpret(om.core.build_all.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.category_item,(function (){var G__49515 = self__.categories;return (stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1 ? stuttaford.codex.name_sort.cljs$core$IFn$_invoke$arity$1(G__49515) : stuttaford.codex.name_sort.call(null,G__49515));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177)], null)));return React.DOM.div(G__49511,G__49512,G__49513);
});})(owner,categories,map49449,validate__837__auto__,ufv__,output_schema49451,input_schema49452,input_checker49453,output_checker49454,vec__49447,opts__24198__auto__))
;
stuttaford.codex.t49506.prototype.om$core$IWillMount$ = true;
stuttaford.codex.t49506.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (owner,categories,map49449,validate__837__auto__,ufv__,output_schema49451,input_schema49452,input_checker49453,output_checker49454,vec__49447,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var search_chan = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"search-chan","search-chan",962868037));var c__22742__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22742__auto__,search_chan,___$1,owner,categories,map49449,validate__837__auto__,ufv__,output_schema49451,input_schema49452,input_checker49453,output_checker49454,vec__49447,opts__24198__auto__){
return (function (){var f__22743__auto__ = (function (){var switch__22727__auto__ = ((function (c__22742__auto__,search_chan,___$1,owner,categories,map49449,validate__837__auto__,ufv__,output_schema49451,input_schema49452,input_checker49453,output_checker49454,vec__49447,opts__24198__auto__){
return (function (state_49532){var state_val_49533 = (state_49532[(1)]);if((state_val_49533 === (7)))
{var inst_49519 = (state_49532[(7)]);var inst_49519__$1 = (state_49532[(2)]);var state_49532__$1 = (function (){var statearr_49534 = state_49532;(statearr_49534[(7)] = inst_49519__$1);
return statearr_49534;
})();if(cljs.core.truth_(inst_49519__$1))
{var statearr_49535_49557 = state_49532__$1;(statearr_49535_49557[(1)] = (8));
} else
{var statearr_49536_49558 = state_49532__$1;(statearr_49536_49558[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49533 === (1)))
{var state_49532__$1 = state_49532;var statearr_49537_49559 = state_49532__$1;(statearr_49537_49559[(2)] = null);
(statearr_49537_49559[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49533 === (4)))
{var state_49532__$1 = state_49532;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49532__$1,(7),search_chan);
} else
{if((state_val_49533 === (6)))
{var inst_49528 = (state_49532[(2)]);var state_49532__$1 = state_49532;var statearr_49538_49560 = state_49532__$1;(statearr_49538_49560[(2)] = inst_49528);
(statearr_49538_49560[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49533 === (3)))
{var inst_49530 = (state_49532[(2)]);var state_49532__$1 = state_49532;return cljs.core.async.impl.ioc_helpers.return_chan(state_49532__$1,inst_49530);
} else
{if((state_val_49533 === (2)))
{var state_49532__$1 = state_49532;var statearr_49539_49561 = state_49532__$1;(statearr_49539_49561[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49533 === (9)))
{var state_49532__$1 = state_49532;var statearr_49541_49562 = state_49532__$1;(statearr_49541_49562[(2)] = null);
(statearr_49541_49562[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49533 === (5)))
{var state_49532__$1 = state_49532;var statearr_49542_49563 = state_49532__$1;(statearr_49542_49563[(2)] = null);
(statearr_49542_49563[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49533 === (10)))
{var inst_49524 = (state_49532[(2)]);var state_49532__$1 = (function (){var statearr_49543 = state_49532;(statearr_49543[(8)] = inst_49524);
return statearr_49543;
})();var statearr_49544_49564 = state_49532__$1;(statearr_49544_49564[(2)] = null);
(statearr_49544_49564[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49533 === (8)))
{var inst_49519 = (state_49532[(7)]);var inst_49521 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"search-term","search-term",356193544),inst_49519);var state_49532__$1 = state_49532;var statearr_49545_49565 = state_49532__$1;(statearr_49545_49565[(2)] = inst_49521);
(statearr_49545_49565[(1)] = (10));
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
});})(c__22742__auto__,search_chan,___$1,owner,categories,map49449,validate__837__auto__,ufv__,output_schema49451,input_schema49452,input_checker49453,output_checker49454,vec__49447,opts__24198__auto__))
;return ((function (switch__22727__auto__,c__22742__auto__,search_chan,___$1,owner,categories,map49449,validate__837__auto__,ufv__,output_schema49451,input_schema49452,input_checker49453,output_checker49454,vec__49447,opts__24198__auto__){
return (function() {
var state_machine__22728__auto__ = null;
var state_machine__22728__auto____0 = (function (){var statearr_49549 = [null,null,null,null,null,null,null,null,null];(statearr_49549[(0)] = state_machine__22728__auto__);
(statearr_49549[(1)] = (1));
return statearr_49549;
});
var state_machine__22728__auto____1 = (function (state_49532){while(true){
var ret_value__22729__auto__ = (function (){try{while(true){
var result__22730__auto__ = switch__22727__auto__(state_49532);if(cljs.core.keyword_identical_QMARK_(result__22730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22730__auto__;
}
break;
}
}catch (e49550){if((e49550 instanceof Object))
{var ex__22731__auto__ = e49550;var statearr_49551_49566 = state_49532;(statearr_49551_49566[(5)] = ex__22731__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49532);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e49550;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49567 = state_49532;
state_49532 = G__49567;
continue;
}
} else
{return ret_value__22729__auto__;
}
break;
}
});
state_machine__22728__auto__ = function(state_49532){
switch(arguments.length){
case 0:
return state_machine__22728__auto____0.call(this);
case 1:
return state_machine__22728__auto____1.call(this,state_49532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22728__auto____0;
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22728__auto____1;
return state_machine__22728__auto__;
})()
;})(switch__22727__auto__,c__22742__auto__,search_chan,___$1,owner,categories,map49449,validate__837__auto__,ufv__,output_schema49451,input_schema49452,input_checker49453,output_checker49454,vec__49447,opts__24198__auto__))
})();var state__22744__auto__ = (function (){var statearr_49552 = (function (){return (f__22743__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22743__auto__.cljs$core$IFn$_invoke$arity$0() : f__22743__auto__.call(null));
})();(statearr_49552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22742__auto__);
return statearr_49552;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22744__auto__);
});})(c__22742__auto__,search_chan,___$1,owner,categories,map49449,validate__837__auto__,ufv__,output_schema49451,input_schema49452,input_checker49453,output_checker49454,vec__49447,opts__24198__auto__))
);
return c__22742__auto__;
});})(owner,categories,map49449,validate__837__auto__,ufv__,output_schema49451,input_schema49452,input_checker49453,output_checker49454,vec__49447,opts__24198__auto__))
;
stuttaford.codex.t49506.prototype.om$core$IInitState$ = true;
stuttaford.codex.t49506.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,categories,map49449,validate__837__auto__,ufv__,output_schema49451,input_schema49452,input_checker49453,output_checker49454,vec__49447,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-chan","search-chan",962868037),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0()], null);
});})(owner,categories,map49449,validate__837__auto__,ufv__,output_schema49451,input_schema49452,input_checker49453,output_checker49454,vec__49447,opts__24198__auto__))
;
stuttaford.codex.t49506.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,categories,map49449,validate__837__auto__,ufv__,output_schema49451,input_schema49452,input_checker49453,output_checker49454,vec__49447,opts__24198__auto__){
return (function (_49508){var self__ = this;
var _49508__$1 = this;return self__.meta49507;
});})(owner,categories,map49449,validate__837__auto__,ufv__,output_schema49451,input_schema49452,input_checker49453,output_checker49454,vec__49447,opts__24198__auto__))
;
stuttaford.codex.t49506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,categories,map49449,validate__837__auto__,ufv__,output_schema49451,input_schema49452,input_checker49453,output_checker49454,vec__49447,opts__24198__auto__){
return (function (_49508,meta49507__$1){var self__ = this;
var _49508__$1 = this;return (new stuttaford.codex.t49506(self__.map49449,self__.data__24197__auto__,self__.app_view,self__.owner,self__.output_checker49454,self__.p__49339,self__.vec__49447,self__.map49448,self__.G__49455,self__.input_schema49452,self__.opts__24198__auto__,self__.output_schema49451,self__.fnk49450,self__.owner49337,self__.categories,self__.validate__837__auto__,self__.input_checker49453,self__.ufv__,meta49507__$1));
});})(owner,categories,map49449,validate__837__auto__,ufv__,output_schema49451,input_schema49452,input_checker49453,output_checker49454,vec__49447,opts__24198__auto__))
;
stuttaford.codex.__GT_t49506 = ((function (owner,categories,map49449,validate__837__auto__,ufv__,output_schema49451,input_schema49452,input_checker49453,output_checker49454,vec__49447,opts__24198__auto__){
return (function __GT_t49506(map49449__$1,data__24197__auto____$1,app_view__$1,owner__$1,output_checker49454__$1,p__49339__$1,vec__49447__$1,map49448__$1,G__49455__$1,input_schema49452__$1,opts__24198__auto____$1,output_schema49451__$1,fnk49450__$1,owner49337__$1,categories__$1,validate__837__auto____$1,input_checker49453__$1,ufv____$1,meta49507){return (new stuttaford.codex.t49506(map49449__$1,data__24197__auto____$1,app_view__$1,owner__$1,output_checker49454__$1,p__49339__$1,vec__49447__$1,map49448__$1,G__49455__$1,input_schema49452__$1,opts__24198__auto____$1,output_schema49451__$1,fnk49450__$1,owner49337__$1,categories__$1,validate__837__auto____$1,input_checker49453__$1,ufv____$1,meta49507));
});})(owner,categories,map49449,validate__837__auto__,ufv__,output_schema49451,input_schema49452,input_checker49453,output_checker49454,vec__49447,opts__24198__auto__))
;
}
return (new stuttaford.codex.t49506(map49449,data__24197__auto__,app_view,owner,output_checker49454,p__49339,vec__49447,map49448,G__49455,input_schema49452,opts__24198__auto__,output_schema49451,fnk49450,owner49337,categories,validate__837__auto__,input_checker49453,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49568 = (function (){var G__49553 = o__840__auto__;return (output_checker49454.cljs$core$IFn$_invoke$arity$1 ? output_checker49454.cljs$core$IFn$_invoke$arity$1(G__49553) : output_checker49454.call(null,G__49553));
})();if(cljs.core.truth_(temp__4126__auto___49568))
{var error__839__auto___49569 = temp__4126__auto___49568;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk49450","fnk49450",-1118095785,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49569], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49451,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49569], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema49451,input_schema49452,input_checker49453,output_checker49454,vec__49447,opts__24198__auto__))
,schema.core.make_fn_schema(output_schema49451,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49452], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24198__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner49337,new cljs.core.Keyword(null,"data","data",-232669377),data__24197__auto__], null));
};
var app_view = function (data__24197__auto__,owner49337,var_args){
var p__49339 = null;if (arguments.length > 2) {
  p__49339 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_view__delegate.call(this,data__24197__auto__,owner49337,p__49339);};
app_view.cljs$lang$maxFixedArity = 2;
app_view.cljs$lang$applyTo = (function (arglist__49570){
var data__24197__auto__ = cljs.core.first(arglist__49570);
arglist__49570 = cljs.core.next(arglist__49570);
var owner49337 = cljs.core.first(arglist__49570);
var p__49339 = cljs.core.rest(arglist__49570);
return app_view__delegate(data__24197__auto__,owner49337,p__49339);
});
app_view.cljs$core$IFn$_invoke$arity$variadic = app_view__delegate;
return app_view;
})()
;
stuttaford.codex.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__24166__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.codex.app_view,cursor__24166__auto__);
});
var __GT_app_view__2 = (function (cursor__24166__auto__,m49338){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.codex.app_view,cursor__24166__auto__,m49338);
});
__GT_app_view = function(cursor__24166__auto__,m49338){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__24166__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__24166__auto__,m49338);
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