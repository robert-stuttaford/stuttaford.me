goog.provide('stuttaford.radiant.datoms');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('stuttaford.om.common');
goog.require('stuttaford.radiant.components');
goog.require('om_bootstrap.input');
goog.require('stuttaford.radiant.model');
goog.require('sablono.core');
goog.require('stuttaford.radiant.model');
goog.require('om_bootstrap.grid');
goog.require('om_tools.core');
goog.require('stuttaford.om.common');
goog.require('datascript');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clojure.string');
goog.require('stuttaford.om.common');
goog.require('om_bootstrap.grid');
goog.require('stuttaford.radiant.components');
goog.require('om_bootstrap.button');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('om_bootstrap.button');
goog.require('om_bootstrap.input');
goog.require('datascript');
stuttaford.radiant.datoms.component_status = (function component_status(p__47237,component_values,component,value){var vec__47240 = p__47237;var c_one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47240,(0),null);var c_two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47240,(1),null);if(cljs.core.truth_(value))
{return "success";
} else
{var vec__47241 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$,component_values);var one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47241,(0),null);var two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47241,(1),null);var three = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47241,(2),null);if(cljs.core.truth_((function (){var and__19255__auto__ = cljs.core.not(one);if(and__19255__auto__)
{var and__19255__auto____$1 = (function (){var or__19267__auto__ = two;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return three;
}
})();if(cljs.core.truth_(and__19255__auto____$1))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,c_one);
} else
{return and__19255__auto____$1;
}
} else
{return and__19255__auto__;
}
})()))
{return "error";
} else
{if(cljs.core.truth_((function (){var and__19255__auto__ = cljs.core.not(two);if(and__19255__auto__)
{var and__19255__auto____$1 = three;if(cljs.core.truth_(and__19255__auto____$1))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,c_two);
} else
{return and__19255__auto____$1;
}
} else
{return and__19255__auto__;
}
})()))
{return "error";
} else
{return null;

}
}
}
});
stuttaford.radiant.datoms.index_input = (function index_input(c,current_datoms_index){return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20662__auto__ = (function iter__47252(s__47253){return (new cljs.core.LazySeq(null,(function (){var s__47253__$1 = s__47253;while(true){
var temp__4126__auto__ = cljs.core.seq(s__47253__$1);if(temp__4126__auto__)
{var s__47253__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__47253__$2))
{var c__20660__auto__ = cljs.core.chunk_first(s__47253__$2);var size__20661__auto__ = cljs.core.count(c__20660__auto__);var b__47255 = cljs.core.chunk_buffer(size__20661__auto__);if((function (){var i__47254 = (0);while(true){
if((i__47254 < size__20661__auto__))
{var index = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20660__auto__,i__47254);cljs.core.chunk_append(b__47255,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__47260 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__47254,index,c__20660__auto__,size__20661__auto__,b__47255,s__47253__$2,temp__4126__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-index","set-datoms-index",-683154215),index], null));
});})(i__47254,index,c__20660__auto__,size__20661__auto__,b__47255,s__47253__$2,temp__4126__auto__))
], null);var G__47260__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,current_datoms_index))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47260,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__47260);return G__47260__$1;
})(),cljs.core.array_seq([clojure.string.upper_case(cljs.core.name(index))], 0)));
{
var G__47262 = (i__47254 + (1));
i__47254 = G__47262;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__47255),iter__47252(cljs.core.chunk_rest(s__47253__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__47255),null);
}
} else
{var index = cljs.core.first(s__47253__$2);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__47261 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (index,s__47253__$2,temp__4126__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-index","set-datoms-index",-683154215),index], null));
});})(index,s__47253__$2,temp__4126__auto__))
], null);var G__47261__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,current_datoms_index))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47261,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__47261);return G__47261__$1;
})(),cljs.core.array_seq([clojure.string.upper_case(cljs.core.name(index))], 0)),iter__47252(cljs.core.rest(s__47253__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20662__auto__(stuttaford.radiant.model.indexes);
})()], 0)),om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),null], null)], null));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),null], null)], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059),null], null)], null));
})], null),cljs.core.array_seq(["Clear"], 0))], 0));
});
stuttaford.radiant.datoms.component_input = (function component_input(c,components,current_datoms_components,component){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__47273 = {"href": "javascript:", "onClick": (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,null], null)], null));
})};var G__47274 = (function (){var G__47275 = {"className": "glyphicon glyphicon-remove"};return React.DOM.span(G__47275);
})();return React.DOM.a(G__47273,G__47274);
})()),om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),true,new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),clojure.string.upper_case(cljs.core.name(component)),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),stuttaford.radiant.datoms.component_status(components,cljs.core.map.cljs$core$IFn$_invoke$arity$2(current_datoms_components,components),component,(function (){var G__47276 = current_datoms_components;return (component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(G__47276) : component.call(null,G__47276));
})()),new cljs.core.Keyword(null,"value","value",305978217),(function (){var G__47277 = current_datoms_components;return (component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(G__47277) : component.call(null,G__47277));
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__47263_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,p1__47263_SHARP_.target.value], null)], null));
})], null)));
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.datoms.inputs = (function() { 
var inputs__delegate = function (data__24175__auto__,owner47278,p__47280){var vec__47302 = p__47280;var opts__24176__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47302,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema47306 = schema.core.Any;var input_schema47307 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628)),schema.core.Any,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map47303","map47303",-509072674,null))], null);var input_checker47308 = schema.core.checker(input_schema47307);var output_checker47309 = schema.core.checker(output_schema47306);return schema.core.schematize_fn(((function (ufv__,output_schema47306,input_schema47307,input_checker47308,output_checker47309,vec__47302,opts__24176__auto__){
return (function fnk47305(G__47310){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___47323 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__47310], null);var temp__4126__auto___47324 = (function (){var G__47317 = args__838__auto___47323;return (input_checker47308.cljs$core$IFn$_invoke$arity$1 ? input_checker47308.cljs$core$IFn$_invoke$arity$1(G__47317) : input_checker47308.call(null,G__47317));
})();if(cljs.core.truth_(temp__4126__auto___47324))
{var error__839__auto___47325 = temp__4126__auto___47324;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk47305","fnk47305",1630981802,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___47325], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema47307,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___47323,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___47325], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map47303 = G__47310;while(true){
if(cljs.core.map_QMARK_(map47303))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map47303], 0))));
}
var map47304 = plumbing.fnk.schema.safe_get(map47303,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var current_datoms_index = plumbing.fnk.schema.safe_get(map47304,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_datoms_components = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map47304,new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628),cljs.core.PersistentArrayMap.EMPTY);var owner = plumbing.fnk.schema.safe_get(map47303,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datoms.t47318 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datoms.t47318 = (function (p__47280,input_checker47308,owner,input_schema47307,fnk47305,current_datoms_index,map47304,owner47278,vec__47302,current_datoms_components,data__24175__auto__,output_checker47309,inputs,output_schema47306,opts__24176__auto__,G__47310,validate__837__auto__,ufv__,map47303,meta47319){
this.p__47280 = p__47280;
this.input_checker47308 = input_checker47308;
this.owner = owner;
this.input_schema47307 = input_schema47307;
this.fnk47305 = fnk47305;
this.current_datoms_index = current_datoms_index;
this.map47304 = map47304;
this.owner47278 = owner47278;
this.vec__47302 = vec__47302;
this.current_datoms_components = current_datoms_components;
this.data__24175__auto__ = data__24175__auto__;
this.output_checker47309 = output_checker47309;
this.inputs = inputs;
this.output_schema47306 = output_schema47306;
this.opts__24176__auto__ = opts__24176__auto__;
this.G__47310 = G__47310;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.map47303 = map47303;
this.meta47319 = meta47319;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datoms.t47318.cljs$lang$type = true;
stuttaford.radiant.datoms.t47318.cljs$lang$ctorStr = "stuttaford.radiant.datoms/t47318";
stuttaford.radiant.datoms.t47318.cljs$lang$ctorPrWriter = ((function (owner,current_datoms_components,current_datoms_index,map47304,validate__837__auto__,ufv__,output_schema47306,input_schema47307,input_checker47308,output_checker47309,vec__47302,opts__24176__auto__){
return (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"stuttaford.radiant.datoms/t47318");
});})(owner,current_datoms_components,current_datoms_index,map47304,validate__837__auto__,ufv__,output_schema47306,input_schema47307,input_checker47308,output_checker47309,vec__47302,opts__24176__auto__))
;
stuttaford.radiant.datoms.t47318.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datoms.t47318.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,current_datoms_components,current_datoms_index,map47304,validate__837__auto__,ufv__,output_schema47306,input_schema47307,input_checker47308,output_checker47309,vec__47302,opts__24176__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "inputs";
});})(owner,current_datoms_components,current_datoms_index,map47304,validate__837__auto__,ufv__,output_schema47306,input_schema47307,input_checker47308,output_checker47309,vec__47302,opts__24176__auto__))
;
stuttaford.radiant.datoms.t47318.prototype.om$core$IRender$ = true;
stuttaford.radiant.datoms.t47318.prototype.om$core$IRender$render$arity$1 = ((function (owner,current_datoms_components,current_datoms_index,map47304,validate__837__auto__,ufv__,output_schema47306,input_schema47307,input_checker47308,output_checker47309,vec__47302,opts__24176__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var components = stuttaford.radiant.model.components(self__.current_datoms_index);var vec__47321 = components;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47321,(0),null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47321,(1),null);var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47321,(2),null);return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"datoms-components-inputs"], null),cljs.core.array_seq([om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),cljs.core.array_seq([stuttaford.radiant.datoms.index_input(c,self__.current_datoms_index)], 0)),om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),cljs.core.array_seq([stuttaford.radiant.datoms.component_input(c,components,self__.current_datoms_components,x)], 0)),om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),cljs.core.array_seq([stuttaford.radiant.datoms.component_input(c,components,self__.current_datoms_components,y)], 0)),om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),cljs.core.array_seq([stuttaford.radiant.datoms.component_input(c,components,self__.current_datoms_components,z)], 0))], 0));
});})(owner,current_datoms_components,current_datoms_index,map47304,validate__837__auto__,ufv__,output_schema47306,input_schema47307,input_checker47308,output_checker47309,vec__47302,opts__24176__auto__))
;
stuttaford.radiant.datoms.t47318.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,current_datoms_components,current_datoms_index,map47304,validate__837__auto__,ufv__,output_schema47306,input_schema47307,input_checker47308,output_checker47309,vec__47302,opts__24176__auto__){
return (function (_47320){var self__ = this;
var _47320__$1 = this;return self__.meta47319;
});})(owner,current_datoms_components,current_datoms_index,map47304,validate__837__auto__,ufv__,output_schema47306,input_schema47307,input_checker47308,output_checker47309,vec__47302,opts__24176__auto__))
;
stuttaford.radiant.datoms.t47318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,current_datoms_components,current_datoms_index,map47304,validate__837__auto__,ufv__,output_schema47306,input_schema47307,input_checker47308,output_checker47309,vec__47302,opts__24176__auto__){
return (function (_47320,meta47319__$1){var self__ = this;
var _47320__$1 = this;return (new stuttaford.radiant.datoms.t47318(self__.p__47280,self__.input_checker47308,self__.owner,self__.input_schema47307,self__.fnk47305,self__.current_datoms_index,self__.map47304,self__.owner47278,self__.vec__47302,self__.current_datoms_components,self__.data__24175__auto__,self__.output_checker47309,self__.inputs,self__.output_schema47306,self__.opts__24176__auto__,self__.G__47310,self__.validate__837__auto__,self__.ufv__,self__.map47303,meta47319__$1));
});})(owner,current_datoms_components,current_datoms_index,map47304,validate__837__auto__,ufv__,output_schema47306,input_schema47307,input_checker47308,output_checker47309,vec__47302,opts__24176__auto__))
;
stuttaford.radiant.datoms.__GT_t47318 = ((function (owner,current_datoms_components,current_datoms_index,map47304,validate__837__auto__,ufv__,output_schema47306,input_schema47307,input_checker47308,output_checker47309,vec__47302,opts__24176__auto__){
return (function __GT_t47318(p__47280__$1,input_checker47308__$1,owner__$1,input_schema47307__$1,fnk47305__$1,current_datoms_index__$1,map47304__$1,owner47278__$1,vec__47302__$1,current_datoms_components__$1,data__24175__auto____$1,output_checker47309__$1,inputs__$1,output_schema47306__$1,opts__24176__auto____$1,G__47310__$1,validate__837__auto____$1,ufv____$1,map47303__$1,meta47319){return (new stuttaford.radiant.datoms.t47318(p__47280__$1,input_checker47308__$1,owner__$1,input_schema47307__$1,fnk47305__$1,current_datoms_index__$1,map47304__$1,owner47278__$1,vec__47302__$1,current_datoms_components__$1,data__24175__auto____$1,output_checker47309__$1,inputs__$1,output_schema47306__$1,opts__24176__auto____$1,G__47310__$1,validate__837__auto____$1,ufv____$1,map47303__$1,meta47319));
});})(owner,current_datoms_components,current_datoms_index,map47304,validate__837__auto__,ufv__,output_schema47306,input_schema47307,input_checker47308,output_checker47309,vec__47302,opts__24176__auto__))
;
}
return (new stuttaford.radiant.datoms.t47318(p__47280,input_checker47308,owner,input_schema47307,fnk47305,current_datoms_index,map47304,owner47278,vec__47302,current_datoms_components,data__24175__auto__,output_checker47309,inputs,output_schema47306,opts__24176__auto__,G__47310,validate__837__auto__,ufv__,map47303,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___47326 = (function (){var G__47322 = o__840__auto__;return (output_checker47309.cljs$core$IFn$_invoke$arity$1 ? output_checker47309.cljs$core$IFn$_invoke$arity$1(G__47322) : output_checker47309.call(null,G__47322));
})();if(cljs.core.truth_(temp__4126__auto___47326))
{var error__839__auto___47327 = temp__4126__auto___47326;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk47305","fnk47305",1630981802,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___47327], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema47306,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___47327], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema47306,input_schema47307,input_checker47308,output_checker47309,vec__47302,opts__24176__auto__))
,schema.core.make_fn_schema(output_schema47306,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema47307], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24176__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner47278,new cljs.core.Keyword(null,"data","data",-232669377),data__24175__auto__], null));
};
var inputs = function (data__24175__auto__,owner47278,var_args){
var p__47280 = null;if (arguments.length > 2) {
  p__47280 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return inputs__delegate.call(this,data__24175__auto__,owner47278,p__47280);};
inputs.cljs$lang$maxFixedArity = 2;
inputs.cljs$lang$applyTo = (function (arglist__47328){
var data__24175__auto__ = cljs.core.first(arglist__47328);
arglist__47328 = cljs.core.next(arglist__47328);
var owner47278 = cljs.core.first(arglist__47328);
var p__47280 = cljs.core.rest(arglist__47328);
return inputs__delegate(data__24175__auto__,owner47278,p__47280);
});
inputs.cljs$core$IFn$_invoke$arity$variadic = inputs__delegate;
return inputs;
})()
;
stuttaford.radiant.datoms.__GT_inputs = (function() {
var __GT_inputs = null;
var __GT_inputs__1 = (function (cursor__24144__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.inputs,cursor__24144__auto__);
});
var __GT_inputs__2 = (function (cursor__24144__auto__,m47279){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datoms.inputs,cursor__24144__auto__,m47279);
});
__GT_inputs = function(cursor__24144__auto__,m47279){
switch(arguments.length){
case 1:
return __GT_inputs__1.call(this,cursor__24144__auto__);
case 2:
return __GT_inputs__2.call(this,cursor__24144__auto__,m47279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_inputs.cljs$core$IFn$_invoke$arity$1 = __GT_inputs__1;
__GT_inputs.cljs$core$IFn$_invoke$arity$2 = __GT_inputs__2;
return __GT_inputs;
})()
;
/**
* @param {...*} var_args
*/
stuttaford.radiant.datoms.value = (function() { 
var value__delegate = function (data__24175__auto__,owner47329,p__47331){var vec__47356 = p__47331;var opts__24176__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47356,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema47361 = schema.core.Any;var input_schema47362 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component","component",1555936782),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"value","value",305978217),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map47357","map47357",1816561361,null))], null);var input_checker47363 = schema.core.checker(input_schema47362);var output_checker47364 = schema.core.checker(output_schema47361);return schema.core.schematize_fn(((function (ufv__,output_schema47361,input_schema47362,input_checker47363,output_checker47364,vec__47356,opts__24176__auto__){
return (function fnk47360(G__47365){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___47380 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__47365], null);var temp__4126__auto___47381 = (function (){var G__47373 = args__838__auto___47380;return (input_checker47363.cljs$core$IFn$_invoke$arity$1 ? input_checker47363.cljs$core$IFn$_invoke$arity$1(G__47373) : input_checker47363.call(null,G__47373));
})();if(cljs.core.truth_(temp__4126__auto___47381))
{var error__839__auto___47382 = temp__4126__auto___47381;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk47360","fnk47360",625831244,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___47382], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema47362,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___47380,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___47382], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map47357 = G__47365;while(true){
if(cljs.core.map_QMARK_(map47357))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map47357], 0))));
}
var map47359 = plumbing.fnk.schema.safe_get(map47357,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var value__$1 = plumbing.fnk.schema.safe_get(map47359,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map47357,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map47358 = plumbing.fnk.schema.safe_get(map47357,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component = plumbing.fnk.schema.safe_get(map47358,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));if(typeof stuttaford.radiant.datoms.t47374 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datoms.t47374 = (function (input_schema47362,owner,output_schema47361,p__47331,fnk47360,owner47329,value,vec__47356,map47357,map47359,map47358,output_checker47364,data__24175__auto__,component,G__47365,input_checker47363,opts__24176__auto__,validate__837__auto__,ufv__,meta47375){
this.input_schema47362 = input_schema47362;
this.owner = owner;
this.output_schema47361 = output_schema47361;
this.p__47331 = p__47331;
this.fnk47360 = fnk47360;
this.owner47329 = owner47329;
this.value = value;
this.vec__47356 = vec__47356;
this.map47357 = map47357;
this.map47359 = map47359;
this.map47358 = map47358;
this.output_checker47364 = output_checker47364;
this.data__24175__auto__ = data__24175__auto__;
this.component = component;
this.G__47365 = G__47365;
this.input_checker47363 = input_checker47363;
this.opts__24176__auto__ = opts__24176__auto__;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.meta47375 = meta47375;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datoms.t47374.cljs$lang$type = true;
stuttaford.radiant.datoms.t47374.cljs$lang$ctorStr = "stuttaford.radiant.datoms/t47374";
stuttaford.radiant.datoms.t47374.cljs$lang$ctorPrWriter = ((function (component,map47358,owner,value__$1,map47359,validate__837__auto__,ufv__,output_schema47361,input_schema47362,input_checker47363,output_checker47364,vec__47356,opts__24176__auto__){
return (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"stuttaford.radiant.datoms/t47374");
});})(component,map47358,owner,value__$1,map47359,validate__837__auto__,ufv__,output_schema47361,input_schema47362,input_checker47363,output_checker47364,vec__47356,opts__24176__auto__))
;
stuttaford.radiant.datoms.t47374.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datoms.t47374.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (component,map47358,owner,value__$1,map47359,validate__837__auto__,ufv__,output_schema47361,input_schema47362,input_checker47363,output_checker47364,vec__47356,opts__24176__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "value";
});})(component,map47358,owner,value__$1,map47359,validate__837__auto__,ufv__,output_schema47361,input_schema47362,input_checker47363,output_checker47364,vec__47356,opts__24176__auto__))
;
stuttaford.radiant.datoms.t47374.prototype.om$core$IRender$ = true;
stuttaford.radiant.datoms.t47374.prototype.om$core$IRender$render$arity$1 = ((function (component,map47358,owner,value__$1,map47359,validate__837__auto__,ufv__,output_schema47361,input_schema47362,input_checker47363,output_checker47364,vec__47356,opts__24176__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var G__47377 = {"href": "javascript:", "onClick": ((function (c,___$1,component,map47358,owner,value__$1,map47359,validate__837__auto__,ufv__,output_schema47361,input_schema47362,input_checker47363,output_checker47364,vec__47356,opts__24176__auto__){
return (function (){console.log(self__.owner,c,stuttaford.om.common.control_chan(self__.owner));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.component,self__.value], null)], null));
});})(c,___$1,component,map47358,owner,value__$1,map47359,validate__837__auto__,ufv__,output_schema47361,input_schema47362,input_checker47363,output_checker47364,vec__47356,opts__24176__auto__))
};var G__47378 = sablono.interpreter.interpret(self__.value);return React.DOM.a(G__47377,G__47378);
});})(component,map47358,owner,value__$1,map47359,validate__837__auto__,ufv__,output_schema47361,input_schema47362,input_checker47363,output_checker47364,vec__47356,opts__24176__auto__))
;
stuttaford.radiant.datoms.t47374.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (component,map47358,owner,value__$1,map47359,validate__837__auto__,ufv__,output_schema47361,input_schema47362,input_checker47363,output_checker47364,vec__47356,opts__24176__auto__){
return (function (_47376){var self__ = this;
var _47376__$1 = this;return self__.meta47375;
});})(component,map47358,owner,value__$1,map47359,validate__837__auto__,ufv__,output_schema47361,input_schema47362,input_checker47363,output_checker47364,vec__47356,opts__24176__auto__))
;
stuttaford.radiant.datoms.t47374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (component,map47358,owner,value__$1,map47359,validate__837__auto__,ufv__,output_schema47361,input_schema47362,input_checker47363,output_checker47364,vec__47356,opts__24176__auto__){
return (function (_47376,meta47375__$1){var self__ = this;
var _47376__$1 = this;return (new stuttaford.radiant.datoms.t47374(self__.input_schema47362,self__.owner,self__.output_schema47361,self__.p__47331,self__.fnk47360,self__.owner47329,self__.value,self__.vec__47356,self__.map47357,self__.map47359,self__.map47358,self__.output_checker47364,self__.data__24175__auto__,self__.component,self__.G__47365,self__.input_checker47363,self__.opts__24176__auto__,self__.validate__837__auto__,self__.ufv__,meta47375__$1));
});})(component,map47358,owner,value__$1,map47359,validate__837__auto__,ufv__,output_schema47361,input_schema47362,input_checker47363,output_checker47364,vec__47356,opts__24176__auto__))
;
stuttaford.radiant.datoms.__GT_t47374 = ((function (component,map47358,owner,value__$1,map47359,validate__837__auto__,ufv__,output_schema47361,input_schema47362,input_checker47363,output_checker47364,vec__47356,opts__24176__auto__){
return (function __GT_t47374(input_schema47362__$1,owner__$1,output_schema47361__$1,p__47331__$1,fnk47360__$1,owner47329__$1,value__$2,vec__47356__$1,map47357__$1,map47359__$1,map47358__$1,output_checker47364__$1,data__24175__auto____$1,component__$1,G__47365__$1,input_checker47363__$1,opts__24176__auto____$1,validate__837__auto____$1,ufv____$1,meta47375){return (new stuttaford.radiant.datoms.t47374(input_schema47362__$1,owner__$1,output_schema47361__$1,p__47331__$1,fnk47360__$1,owner47329__$1,value__$2,vec__47356__$1,map47357__$1,map47359__$1,map47358__$1,output_checker47364__$1,data__24175__auto____$1,component__$1,G__47365__$1,input_checker47363__$1,opts__24176__auto____$1,validate__837__auto____$1,ufv____$1,meta47375));
});})(component,map47358,owner,value__$1,map47359,validate__837__auto__,ufv__,output_schema47361,input_schema47362,input_checker47363,output_checker47364,vec__47356,opts__24176__auto__))
;
}
return (new stuttaford.radiant.datoms.t47374(input_schema47362,owner,output_schema47361,p__47331,fnk47360,owner47329,value__$1,vec__47356,map47357,map47359,map47358,output_checker47364,data__24175__auto__,component,G__47365,input_checker47363,opts__24176__auto__,validate__837__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___47383 = (function (){var G__47379 = o__840__auto__;return (output_checker47364.cljs$core$IFn$_invoke$arity$1 ? output_checker47364.cljs$core$IFn$_invoke$arity$1(G__47379) : output_checker47364.call(null,G__47379));
})();if(cljs.core.truth_(temp__4126__auto___47383))
{var error__839__auto___47384 = temp__4126__auto___47383;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk47360","fnk47360",625831244,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___47384], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema47361,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___47384], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema47361,input_schema47362,input_checker47363,output_checker47364,vec__47356,opts__24176__auto__))
,schema.core.make_fn_schema(output_schema47361,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema47362], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24176__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner47329,new cljs.core.Keyword(null,"data","data",-232669377),data__24175__auto__], null));
};
var value = function (data__24175__auto__,owner47329,var_args){
var p__47331 = null;if (arguments.length > 2) {
  p__47331 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return value__delegate.call(this,data__24175__auto__,owner47329,p__47331);};
value.cljs$lang$maxFixedArity = 2;
value.cljs$lang$applyTo = (function (arglist__47385){
var data__24175__auto__ = cljs.core.first(arglist__47385);
arglist__47385 = cljs.core.next(arglist__47385);
var owner47329 = cljs.core.first(arglist__47385);
var p__47331 = cljs.core.rest(arglist__47385);
return value__delegate(data__24175__auto__,owner47329,p__47331);
});
value.cljs$core$IFn$_invoke$arity$variadic = value__delegate;
return value;
})()
;
stuttaford.radiant.datoms.__GT_value = (function() {
var __GT_value = null;
var __GT_value__1 = (function (cursor__24144__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.value,cursor__24144__auto__);
});
var __GT_value__2 = (function (cursor__24144__auto__,m47330){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datoms.value,cursor__24144__auto__,m47330);
});
__GT_value = function(cursor__24144__auto__,m47330){
switch(arguments.length){
case 1:
return __GT_value__1.call(this,cursor__24144__auto__);
case 2:
return __GT_value__2.call(this,cursor__24144__auto__,m47330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_value.cljs$core$IFn$_invoke$arity$1 = __GT_value__1;
__GT_value.cljs$core$IFn$_invoke$arity$2 = __GT_value__2;
return __GT_value;
})()
;
stuttaford.radiant.datoms.value_STAR_ = (function value_STAR_(component,value){return stuttaford.radiant.datoms.__GT_value.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)], null));
});
stuttaford.radiant.datoms.e_value = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.value_STAR_,new cljs.core.Keyword(null,"e","e",1381269198));
stuttaford.radiant.datoms.a_value = (function a_value(p1__47386_SHARP_){return stuttaford.radiant.datoms.value_STAR_(new cljs.core.Keyword(null,"a","a",-2123407586),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47386_SHARP_)));
});
stuttaford.radiant.datoms.v_value = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.value_STAR_,new cljs.core.Keyword(null,"v","v",21465059));
/**
* @param {...*} var_args
*/
stuttaford.radiant.datoms.datoms = (function() { 
var datoms__delegate = function (data__24175__auto__,owner47387,p__47389){var vec__47462 = p__47389;var opts__24176__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47462,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema47465 = schema.core.Any;var input_schema47466 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-db","current-db",213667882)),schema.core.Any,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map47463","map47463",-1420187583,null))], null);var input_checker47467 = schema.core.checker(input_schema47466);var output_checker47468 = schema.core.checker(output_schema47465);return schema.core.schematize_fn(((function (ufv__,output_schema47465,input_schema47466,input_checker47467,output_checker47468,vec__47462,opts__24176__auto__){
return (function fnk47464(G__47469){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___47534 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__47469], null);var temp__4126__auto___47535 = (function (){var G__47502 = args__838__auto___47534;return (input_checker47467.cljs$core$IFn$_invoke$arity$1 ? input_checker47467.cljs$core$IFn$_invoke$arity$1(G__47502) : input_checker47467.call(null,G__47502));
})();if(cljs.core.truth_(temp__4126__auto___47535))
{var error__839__auto___47536 = temp__4126__auto___47535;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk47464","fnk47464",-40832462,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___47536], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema47466,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___47534,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___47536], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map47463 = G__47469;while(true){
if(cljs.core.map_QMARK_(map47463))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map47463], 0))));
}
var data = plumbing.fnk.schema.safe_get(map47463,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var current_datoms_index = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_db = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-db","current-db",213667882),null);var current_datoms_components = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628),cljs.core.PersistentArrayMap.EMPTY);var owner = plumbing.fnk.schema.safe_get(map47463,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datoms.t47503 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datoms.t47503 = (function (input_schema47466,map47463,vec__47462,output_schema47465,owner,output_checker47468,datoms,data,p__47389,input_checker47467,current_datoms_index,owner47387,current_db,G__47469,fnk47464,current_datoms_components,data__24175__auto__,opts__24176__auto__,validate__837__auto__,ufv__,meta47504){
this.input_schema47466 = input_schema47466;
this.map47463 = map47463;
this.vec__47462 = vec__47462;
this.output_schema47465 = output_schema47465;
this.owner = owner;
this.output_checker47468 = output_checker47468;
this.datoms = datoms;
this.data = data;
this.p__47389 = p__47389;
this.input_checker47467 = input_checker47467;
this.current_datoms_index = current_datoms_index;
this.owner47387 = owner47387;
this.current_db = current_db;
this.G__47469 = G__47469;
this.fnk47464 = fnk47464;
this.current_datoms_components = current_datoms_components;
this.data__24175__auto__ = data__24175__auto__;
this.opts__24176__auto__ = opts__24176__auto__;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.meta47504 = meta47504;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datoms.t47503.cljs$lang$type = true;
stuttaford.radiant.datoms.t47503.cljs$lang$ctorStr = "stuttaford.radiant.datoms/t47503";
stuttaford.radiant.datoms.t47503.cljs$lang$ctorPrWriter = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema47465,input_schema47466,input_checker47467,output_checker47468,vec__47462,opts__24176__auto__){
return (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"stuttaford.radiant.datoms/t47503");
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema47465,input_schema47466,input_checker47467,output_checker47468,vec__47462,opts__24176__auto__))
;
stuttaford.radiant.datoms.t47503.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datoms.t47503.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema47465,input_schema47466,input_checker47467,output_checker47468,vec__47462,opts__24176__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "datoms";
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema47465,input_schema47466,input_checker47467,output_checker47468,vec__47462,opts__24176__auto__))
;
stuttaford.radiant.datoms.t47503.prototype.om$core$IRender$ = true;
stuttaford.radiant.datoms.t47503.prototype.om$core$IRender$render$arity$1 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema47465,input_schema47466,input_checker47467,output_checker47468,vec__47462,opts__24176__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var attrs47506 = stuttaford.radiant.datoms.__GT_inputs.cljs$core$IFn$_invoke$arity$1(self__.data);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs47506))?sablono.interpreter.attributes(attrs47506):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47506))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47511 = null;return React.DOM.hr(G__47511);
})(),sablono.interpreter.interpret((cljs.core.truth_(self__.current_db)?(function (){var order_fn = stuttaford.radiant.model.order_fn(self__.current_datoms_index);var components = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),(function (){var G__47512 = stuttaford.radiant.model.ensure_components(self__.current_datoms_components);return (order_fn.cljs$core$IFn$_invoke$arity$1 ? order_fn.cljs$core$IFn$_invoke$arity$1(G__47512) : order_fn.call(null,G__47512));
})());var datoms__$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.datoms,self__.current_db,self__.current_datoms_index,components);return stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),stuttaford.radiant.model.cols(self__.current_datoms_index),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (order_fn,components,datoms__$2,attrs47506,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema47465,input_schema47466,input_checker47467,output_checker47468,vec__47462,opts__24176__auto__){
return (function (p__47513){var map__47514 = p__47513;var map__47514__$1 = ((cljs.core.seq_QMARK_(map__47514))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47514):map__47514);var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47514__$1,new cljs.core.Keyword(null,"v","v",21465059));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47514__$1,new cljs.core.Keyword(null,"a","a",-2123407586));var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47514__$1,new cljs.core.Keyword(null,"e","e",1381269198));var G__47515 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__47515) {
case "avet":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.datoms.a_value(a),(function (){var G__47516 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__47516) : stuttaford.radiant.datoms.v_value.call(null,G__47516));
})(),(function (){var G__47517 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__47517) : stuttaford.radiant.datoms.e_value.call(null,G__47517));
})()], null);

break;
case "aevt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.datoms.a_value(a),(function (){var G__47518 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__47518) : stuttaford.radiant.datoms.e_value.call(null,G__47518));
})(),(function (){var G__47519 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__47519) : stuttaford.radiant.datoms.v_value.call(null,G__47519));
})()], null);

break;
case "eavt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47520 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__47520) : stuttaford.radiant.datoms.e_value.call(null,G__47520));
})(),stuttaford.radiant.datoms.a_value(a),(function (){var G__47521 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__47521) : stuttaford.radiant.datoms.v_value.call(null,G__47521));
})()], null);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.current_datoms_index))));

}
});})(order_fn,components,datoms__$2,attrs47506,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema47465,input_schema47466,input_checker47467,output_checker47468,vec__47462,opts__24176__auto__))
,datoms__$2)], null));
})():null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47506),(function (){var G__47522 = null;return React.DOM.hr(G__47522);
})(),sablono.interpreter.interpret((cljs.core.truth_(self__.current_db)?(function (){var order_fn = stuttaford.radiant.model.order_fn(self__.current_datoms_index);var components = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),(function (){var G__47523 = stuttaford.radiant.model.ensure_components(self__.current_datoms_components);return (order_fn.cljs$core$IFn$_invoke$arity$1 ? order_fn.cljs$core$IFn$_invoke$arity$1(G__47523) : order_fn.call(null,G__47523));
})());var datoms__$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.datoms,self__.current_db,self__.current_datoms_index,components);return stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),stuttaford.radiant.model.cols(self__.current_datoms_index),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (order_fn,components,datoms__$2,attrs47506,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema47465,input_schema47466,input_checker47467,output_checker47468,vec__47462,opts__24176__auto__){
return (function (p__47524){var map__47525 = p__47524;var map__47525__$1 = ((cljs.core.seq_QMARK_(map__47525))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47525):map__47525);var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47525__$1,new cljs.core.Keyword(null,"v","v",21465059));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47525__$1,new cljs.core.Keyword(null,"a","a",-2123407586));var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47525__$1,new cljs.core.Keyword(null,"e","e",1381269198));var G__47526 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__47526) {
case "avet":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.datoms.a_value(a),(function (){var G__47527 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__47527) : stuttaford.radiant.datoms.v_value.call(null,G__47527));
})(),(function (){var G__47528 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__47528) : stuttaford.radiant.datoms.e_value.call(null,G__47528));
})()], null);

break;
case "aevt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.datoms.a_value(a),(function (){var G__47529 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__47529) : stuttaford.radiant.datoms.e_value.call(null,G__47529));
})(),(function (){var G__47530 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__47530) : stuttaford.radiant.datoms.v_value.call(null,G__47530));
})()], null);

break;
case "eavt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47531 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__47531) : stuttaford.radiant.datoms.e_value.call(null,G__47531));
})(),stuttaford.radiant.datoms.a_value(a),(function (){var G__47532 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__47532) : stuttaford.radiant.datoms.v_value.call(null,G__47532));
})()], null);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.current_datoms_index))));

}
});})(order_fn,components,datoms__$2,attrs47506,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema47465,input_schema47466,input_checker47467,output_checker47468,vec__47462,opts__24176__auto__))
,datoms__$2)], null));
})():null))], null))));
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema47465,input_schema47466,input_checker47467,output_checker47468,vec__47462,opts__24176__auto__))
;
stuttaford.radiant.datoms.t47503.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema47465,input_schema47466,input_checker47467,output_checker47468,vec__47462,opts__24176__auto__){
return (function (_47505){var self__ = this;
var _47505__$1 = this;return self__.meta47504;
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema47465,input_schema47466,input_checker47467,output_checker47468,vec__47462,opts__24176__auto__))
;
stuttaford.radiant.datoms.t47503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema47465,input_schema47466,input_checker47467,output_checker47468,vec__47462,opts__24176__auto__){
return (function (_47505,meta47504__$1){var self__ = this;
var _47505__$1 = this;return (new stuttaford.radiant.datoms.t47503(self__.input_schema47466,self__.map47463,self__.vec__47462,self__.output_schema47465,self__.owner,self__.output_checker47468,self__.datoms,self__.data,self__.p__47389,self__.input_checker47467,self__.current_datoms_index,self__.owner47387,self__.current_db,self__.G__47469,self__.fnk47464,self__.current_datoms_components,self__.data__24175__auto__,self__.opts__24176__auto__,self__.validate__837__auto__,self__.ufv__,meta47504__$1));
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema47465,input_schema47466,input_checker47467,output_checker47468,vec__47462,opts__24176__auto__))
;
stuttaford.radiant.datoms.__GT_t47503 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema47465,input_schema47466,input_checker47467,output_checker47468,vec__47462,opts__24176__auto__){
return (function __GT_t47503(input_schema47466__$1,map47463__$1,vec__47462__$1,output_schema47465__$1,owner__$1,output_checker47468__$1,datoms__$1,data__$1,p__47389__$1,input_checker47467__$1,current_datoms_index__$1,owner47387__$1,current_db__$1,G__47469__$1,fnk47464__$1,current_datoms_components__$1,data__24175__auto____$1,opts__24176__auto____$1,validate__837__auto____$1,ufv____$1,meta47504){return (new stuttaford.radiant.datoms.t47503(input_schema47466__$1,map47463__$1,vec__47462__$1,output_schema47465__$1,owner__$1,output_checker47468__$1,datoms__$1,data__$1,p__47389__$1,input_checker47467__$1,current_datoms_index__$1,owner47387__$1,current_db__$1,G__47469__$1,fnk47464__$1,current_datoms_components__$1,data__24175__auto____$1,opts__24176__auto____$1,validate__837__auto____$1,ufv____$1,meta47504));
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema47465,input_schema47466,input_checker47467,output_checker47468,vec__47462,opts__24176__auto__))
;
}
return (new stuttaford.radiant.datoms.t47503(input_schema47466,map47463,vec__47462,output_schema47465,owner,output_checker47468,datoms,data,p__47389,input_checker47467,current_datoms_index,owner47387,current_db,G__47469,fnk47464,current_datoms_components,data__24175__auto__,opts__24176__auto__,validate__837__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___47539 = (function (){var G__47533 = o__840__auto__;return (output_checker47468.cljs$core$IFn$_invoke$arity$1 ? output_checker47468.cljs$core$IFn$_invoke$arity$1(G__47533) : output_checker47468.call(null,G__47533));
})();if(cljs.core.truth_(temp__4126__auto___47539))
{var error__839__auto___47540 = temp__4126__auto___47539;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk47464","fnk47464",-40832462,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___47540], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema47465,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___47540], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema47465,input_schema47466,input_checker47467,output_checker47468,vec__47462,opts__24176__auto__))
,schema.core.make_fn_schema(output_schema47465,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema47466], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24176__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner47387,new cljs.core.Keyword(null,"data","data",-232669377),data__24175__auto__], null));
};
var datoms = function (data__24175__auto__,owner47387,var_args){
var p__47389 = null;if (arguments.length > 2) {
  p__47389 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datoms__delegate.call(this,data__24175__auto__,owner47387,p__47389);};
datoms.cljs$lang$maxFixedArity = 2;
datoms.cljs$lang$applyTo = (function (arglist__47541){
var data__24175__auto__ = cljs.core.first(arglist__47541);
arglist__47541 = cljs.core.next(arglist__47541);
var owner47387 = cljs.core.first(arglist__47541);
var p__47389 = cljs.core.rest(arglist__47541);
return datoms__delegate(data__24175__auto__,owner47387,p__47389);
});
datoms.cljs$core$IFn$_invoke$arity$variadic = datoms__delegate;
return datoms;
})()
;
stuttaford.radiant.datoms.__GT_datoms = (function() {
var __GT_datoms = null;
var __GT_datoms__1 = (function (cursor__24144__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.datoms,cursor__24144__auto__);
});
var __GT_datoms__2 = (function (cursor__24144__auto__,m47388){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datoms.datoms,cursor__24144__auto__,m47388);
});
__GT_datoms = function(cursor__24144__auto__,m47388){
switch(arguments.length){
case 1:
return __GT_datoms__1.call(this,cursor__24144__auto__);
case 2:
return __GT_datoms__2.call(this,cursor__24144__auto__,m47388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_datoms.cljs$core$IFn$_invoke$arity$1 = __GT_datoms__1;
__GT_datoms.cljs$core$IFn$_invoke$arity$2 = __GT_datoms__2;
return __GT_datoms;
})()
;
//# sourceMappingURL=datoms.js.map