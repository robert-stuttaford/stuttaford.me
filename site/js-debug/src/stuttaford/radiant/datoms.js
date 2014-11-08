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
stuttaford.radiant.datoms.component_status = (function component_status(p__58098,component_values,component,value){var vec__58101 = p__58098;var c_one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58101,(0),null);var c_two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58101,(1),null);if(cljs.core.truth_(value))
{return "success";
} else
{var vec__58102 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$,component_values);var one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58102,(0),null);var two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58102,(1),null);var three = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58102,(2),null);if(cljs.core.truth_((function (){var and__19564__auto__ = cljs.core.not(one);if(and__19564__auto__)
{var and__19564__auto____$1 = (function (){var or__19586__auto__ = two;if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{return three;
}
})();if(cljs.core.truth_(and__19564__auto____$1))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,c_one);
} else
{return and__19564__auto____$1;
}
} else
{return and__19564__auto__;
}
})()))
{return "error";
} else
{if(cljs.core.truth_((function (){var and__19564__auto__ = cljs.core.not(two);if(and__19564__auto__)
{var and__19564__auto____$1 = three;if(cljs.core.truth_(and__19564__auto____$1))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,c_two);
} else
{return and__19564__auto____$1;
}
} else
{return and__19564__auto__;
}
})()))
{return "error";
} else
{return null;

}
}
}
});
stuttaford.radiant.datoms.index_input = (function index_input(c,current_datoms_index){return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20990__auto__ = (function iter__58113(s__58114){return (new cljs.core.LazySeq(null,(function (){var s__58114__$1 = s__58114;while(true){
var temp__4126__auto__ = cljs.core.seq(s__58114__$1);if(temp__4126__auto__)
{var s__58114__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__58114__$2))
{var c__20988__auto__ = cljs.core.chunk_first(s__58114__$2);var size__20989__auto__ = cljs.core.count(c__20988__auto__);var b__58116 = cljs.core.chunk_buffer(size__20989__auto__);if((function (){var i__58115 = (0);while(true){
if((i__58115 < size__20989__auto__))
{var index = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto__,i__58115);cljs.core.chunk_append(b__58116,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__58121 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58115,index,c__20988__auto__,size__20989__auto__,b__58116,s__58114__$2,temp__4126__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-index","set-datoms-index",-683154215),index], null));
});})(i__58115,index,c__20988__auto__,size__20989__auto__,b__58116,s__58114__$2,temp__4126__auto__))
], null);var G__58121__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,current_datoms_index))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58121,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__58121);return G__58121__$1;
})(),cljs.core.array_seq([clojure.string.upper_case(cljs.core.name(index))], 0)));
{
var G__58123 = (i__58115 + (1));
i__58115 = G__58123;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__58116),iter__58113(cljs.core.chunk_rest(s__58114__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__58116),null);
}
} else
{var index = cljs.core.first(s__58114__$2);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__58122 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (index,s__58114__$2,temp__4126__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-index","set-datoms-index",-683154215),index], null));
});})(index,s__58114__$2,temp__4126__auto__))
], null);var G__58122__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,current_datoms_index))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58122,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__58122);return G__58122__$1;
})(),cljs.core.array_seq([clojure.string.upper_case(cljs.core.name(index))], 0)),iter__58113(cljs.core.rest(s__58114__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20990__auto__(stuttaford.radiant.model.indexes);
})()], 0)),om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),null], null)], null));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),null], null)], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059),null], null)], null));
})], null),cljs.core.array_seq(["Clear"], 0))], 0));
});
stuttaford.radiant.datoms.component_input = (function component_input(c,components,current_datoms_components,component){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__58134 = {"href": "javascript:", "onClick": (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,null], null)], null));
})};var G__58135 = (function (){var G__58136 = {"className": "glyphicon glyphicon-remove"};return React.DOM.span(G__58136);
})();return React.DOM.a(G__58134,G__58135);
})()),om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),true,new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),clojure.string.upper_case(cljs.core.name(component)),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),stuttaford.radiant.datoms.component_status(components,cljs.core.map.cljs$core$IFn$_invoke$arity$2(current_datoms_components,components),component,(function (){var G__58137 = current_datoms_components;return (component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(G__58137) : component.call(null,G__58137));
})()),new cljs.core.Keyword(null,"value","value",305978217),(function (){var G__58138 = current_datoms_components;return (component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(G__58138) : component.call(null,G__58138));
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__58124_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,p1__58124_SHARP_.target.value], null)], null));
})], null)));
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.datoms.inputs = (function() { 
var inputs__delegate = function (data__24427__auto__,owner58139,p__58141){var vec__58163 = p__58141;var opts__24428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58163,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema58167 = schema.core.Any;var input_schema58168 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628)),schema.core.Any,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map58164","map58164",687829612,null))], null);var input_checker58169 = schema.core.checker(input_schema58168);var output_checker58170 = schema.core.checker(output_schema58167);return schema.core.schematize_fn(((function (ufv__,output_schema58167,input_schema58168,input_checker58169,output_checker58170,vec__58163,opts__24428__auto__){
return (function fnk58166(G__58171){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___58184 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__58171], null);var temp__4126__auto___58185 = (function (){var G__58178 = args__838__auto___58184;return (input_checker58169.cljs$core$IFn$_invoke$arity$1 ? input_checker58169.cljs$core$IFn$_invoke$arity$1(G__58178) : input_checker58169.call(null,G__58178));
})();if(cljs.core.truth_(temp__4126__auto___58185))
{var error__839__auto___58186 = temp__4126__auto___58185;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk58166","fnk58166",-1911638172,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___58186], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema58168,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___58184,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___58186], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map58164 = G__58171;while(true){
if(cljs.core.map_QMARK_(map58164))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map58164], 0))));
}
var map58165 = plumbing.fnk.schema.safe_get(map58164,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var current_datoms_index = plumbing.fnk.schema.safe_get(map58165,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_datoms_components = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map58165,new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628),cljs.core.PersistentArrayMap.EMPTY);var owner = plumbing.fnk.schema.safe_get(map58164,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datoms.t58179 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datoms.t58179 = (function (owner,fnk58166,vec__58163,input_checker58169,output_schema58167,map58164,input_schema58168,current_datoms_index,G__58171,current_datoms_components,output_checker58170,inputs,validate__837__auto__,p__58141,data__24427__auto__,owner58139,ufv__,map58165,opts__24428__auto__,meta58180){
this.owner = owner;
this.fnk58166 = fnk58166;
this.vec__58163 = vec__58163;
this.input_checker58169 = input_checker58169;
this.output_schema58167 = output_schema58167;
this.map58164 = map58164;
this.input_schema58168 = input_schema58168;
this.current_datoms_index = current_datoms_index;
this.G__58171 = G__58171;
this.current_datoms_components = current_datoms_components;
this.output_checker58170 = output_checker58170;
this.inputs = inputs;
this.validate__837__auto__ = validate__837__auto__;
this.p__58141 = p__58141;
this.data__24427__auto__ = data__24427__auto__;
this.owner58139 = owner58139;
this.ufv__ = ufv__;
this.map58165 = map58165;
this.opts__24428__auto__ = opts__24428__auto__;
this.meta58180 = meta58180;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datoms.t58179.cljs$lang$type = true;
stuttaford.radiant.datoms.t58179.cljs$lang$ctorStr = "stuttaford.radiant.datoms/t58179";
stuttaford.radiant.datoms.t58179.cljs$lang$ctorPrWriter = ((function (owner,current_datoms_components,current_datoms_index,map58165,validate__837__auto__,ufv__,output_schema58167,input_schema58168,input_checker58169,output_checker58170,vec__58163,opts__24428__auto__){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"stuttaford.radiant.datoms/t58179");
});})(owner,current_datoms_components,current_datoms_index,map58165,validate__837__auto__,ufv__,output_schema58167,input_schema58168,input_checker58169,output_checker58170,vec__58163,opts__24428__auto__))
;
stuttaford.radiant.datoms.t58179.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datoms.t58179.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,current_datoms_components,current_datoms_index,map58165,validate__837__auto__,ufv__,output_schema58167,input_schema58168,input_checker58169,output_checker58170,vec__58163,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "inputs";
});})(owner,current_datoms_components,current_datoms_index,map58165,validate__837__auto__,ufv__,output_schema58167,input_schema58168,input_checker58169,output_checker58170,vec__58163,opts__24428__auto__))
;
stuttaford.radiant.datoms.t58179.prototype.om$core$IRender$ = true;
stuttaford.radiant.datoms.t58179.prototype.om$core$IRender$render$arity$1 = ((function (owner,current_datoms_components,current_datoms_index,map58165,validate__837__auto__,ufv__,output_schema58167,input_schema58168,input_checker58169,output_checker58170,vec__58163,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var components = stuttaford.radiant.model.components(self__.current_datoms_index);var vec__58182 = components;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58182,(0),null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58182,(1),null);var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58182,(2),null);return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"datoms-components-inputs"], null),cljs.core.array_seq([om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),cljs.core.array_seq([stuttaford.radiant.datoms.index_input(c,self__.current_datoms_index)], 0)),om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),cljs.core.array_seq([stuttaford.radiant.datoms.component_input(c,components,self__.current_datoms_components,x)], 0)),om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),cljs.core.array_seq([stuttaford.radiant.datoms.component_input(c,components,self__.current_datoms_components,y)], 0)),om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),cljs.core.array_seq([stuttaford.radiant.datoms.component_input(c,components,self__.current_datoms_components,z)], 0))], 0));
});})(owner,current_datoms_components,current_datoms_index,map58165,validate__837__auto__,ufv__,output_schema58167,input_schema58168,input_checker58169,output_checker58170,vec__58163,opts__24428__auto__))
;
stuttaford.radiant.datoms.t58179.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,current_datoms_components,current_datoms_index,map58165,validate__837__auto__,ufv__,output_schema58167,input_schema58168,input_checker58169,output_checker58170,vec__58163,opts__24428__auto__){
return (function (_58181){var self__ = this;
var _58181__$1 = this;return self__.meta58180;
});})(owner,current_datoms_components,current_datoms_index,map58165,validate__837__auto__,ufv__,output_schema58167,input_schema58168,input_checker58169,output_checker58170,vec__58163,opts__24428__auto__))
;
stuttaford.radiant.datoms.t58179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,current_datoms_components,current_datoms_index,map58165,validate__837__auto__,ufv__,output_schema58167,input_schema58168,input_checker58169,output_checker58170,vec__58163,opts__24428__auto__){
return (function (_58181,meta58180__$1){var self__ = this;
var _58181__$1 = this;return (new stuttaford.radiant.datoms.t58179(self__.owner,self__.fnk58166,self__.vec__58163,self__.input_checker58169,self__.output_schema58167,self__.map58164,self__.input_schema58168,self__.current_datoms_index,self__.G__58171,self__.current_datoms_components,self__.output_checker58170,self__.inputs,self__.validate__837__auto__,self__.p__58141,self__.data__24427__auto__,self__.owner58139,self__.ufv__,self__.map58165,self__.opts__24428__auto__,meta58180__$1));
});})(owner,current_datoms_components,current_datoms_index,map58165,validate__837__auto__,ufv__,output_schema58167,input_schema58168,input_checker58169,output_checker58170,vec__58163,opts__24428__auto__))
;
stuttaford.radiant.datoms.__GT_t58179 = ((function (owner,current_datoms_components,current_datoms_index,map58165,validate__837__auto__,ufv__,output_schema58167,input_schema58168,input_checker58169,output_checker58170,vec__58163,opts__24428__auto__){
return (function __GT_t58179(owner__$1,fnk58166__$1,vec__58163__$1,input_checker58169__$1,output_schema58167__$1,map58164__$1,input_schema58168__$1,current_datoms_index__$1,G__58171__$1,current_datoms_components__$1,output_checker58170__$1,inputs__$1,validate__837__auto____$1,p__58141__$1,data__24427__auto____$1,owner58139__$1,ufv____$1,map58165__$1,opts__24428__auto____$1,meta58180){return (new stuttaford.radiant.datoms.t58179(owner__$1,fnk58166__$1,vec__58163__$1,input_checker58169__$1,output_schema58167__$1,map58164__$1,input_schema58168__$1,current_datoms_index__$1,G__58171__$1,current_datoms_components__$1,output_checker58170__$1,inputs__$1,validate__837__auto____$1,p__58141__$1,data__24427__auto____$1,owner58139__$1,ufv____$1,map58165__$1,opts__24428__auto____$1,meta58180));
});})(owner,current_datoms_components,current_datoms_index,map58165,validate__837__auto__,ufv__,output_schema58167,input_schema58168,input_checker58169,output_checker58170,vec__58163,opts__24428__auto__))
;
}
return (new stuttaford.radiant.datoms.t58179(owner,fnk58166,vec__58163,input_checker58169,output_schema58167,map58164,input_schema58168,current_datoms_index,G__58171,current_datoms_components,output_checker58170,inputs,validate__837__auto__,p__58141,data__24427__auto__,owner58139,ufv__,map58165,opts__24428__auto__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___58187 = (function (){var G__58183 = o__840__auto__;return (output_checker58170.cljs$core$IFn$_invoke$arity$1 ? output_checker58170.cljs$core$IFn$_invoke$arity$1(G__58183) : output_checker58170.call(null,G__58183));
})();if(cljs.core.truth_(temp__4126__auto___58187))
{var error__839__auto___58188 = temp__4126__auto___58187;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk58166","fnk58166",-1911638172,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___58188], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema58167,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___58188], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema58167,input_schema58168,input_checker58169,output_checker58170,vec__58163,opts__24428__auto__))
,schema.core.make_fn_schema(output_schema58167,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema58168], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24428__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner58139,new cljs.core.Keyword(null,"data","data",-232669377),data__24427__auto__], null));
};
var inputs = function (data__24427__auto__,owner58139,var_args){
var p__58141 = null;if (arguments.length > 2) {
  p__58141 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return inputs__delegate.call(this,data__24427__auto__,owner58139,p__58141);};
inputs.cljs$lang$maxFixedArity = 2;
inputs.cljs$lang$applyTo = (function (arglist__58189){
var data__24427__auto__ = cljs.core.first(arglist__58189);
arglist__58189 = cljs.core.next(arglist__58189);
var owner58139 = cljs.core.first(arglist__58189);
var p__58141 = cljs.core.rest(arglist__58189);
return inputs__delegate(data__24427__auto__,owner58139,p__58141);
});
inputs.cljs$core$IFn$_invoke$arity$variadic = inputs__delegate;
return inputs;
})()
;
stuttaford.radiant.datoms.__GT_inputs = (function() {
var __GT_inputs = null;
var __GT_inputs__1 = (function (cursor__24396__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.inputs,cursor__24396__auto__);
});
var __GT_inputs__2 = (function (cursor__24396__auto__,m58140){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datoms.inputs,cursor__24396__auto__,m58140);
});
__GT_inputs = function(cursor__24396__auto__,m58140){
switch(arguments.length){
case 1:
return __GT_inputs__1.call(this,cursor__24396__auto__);
case 2:
return __GT_inputs__2.call(this,cursor__24396__auto__,m58140);
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
var value__delegate = function (data__24427__auto__,owner58190,p__58192){var vec__58217 = p__58192;var opts__24428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58217,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema58222 = schema.core.Any;var input_schema58223 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component","component",1555936782),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"value","value",305978217),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map58218","map58218",1033713324,null))], null);var input_checker58224 = schema.core.checker(input_schema58223);var output_checker58225 = schema.core.checker(output_schema58222);return schema.core.schematize_fn(((function (ufv__,output_schema58222,input_schema58223,input_checker58224,output_checker58225,vec__58217,opts__24428__auto__){
return (function fnk58221(G__58226){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___58241 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__58226], null);var temp__4126__auto___58242 = (function (){var G__58234 = args__838__auto___58241;return (input_checker58224.cljs$core$IFn$_invoke$arity$1 ? input_checker58224.cljs$core$IFn$_invoke$arity$1(G__58234) : input_checker58224.call(null,G__58234));
})();if(cljs.core.truth_(temp__4126__auto___58242))
{var error__839__auto___58243 = temp__4126__auto___58242;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk58221","fnk58221",1382113565,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___58243], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema58223,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___58241,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___58243], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map58218 = G__58226;while(true){
if(cljs.core.map_QMARK_(map58218))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map58218], 0))));
}
var map58220 = plumbing.fnk.schema.safe_get(map58218,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var value__$1 = plumbing.fnk.schema.safe_get(map58220,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map58218,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map58219 = plumbing.fnk.schema.safe_get(map58218,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component = plumbing.fnk.schema.safe_get(map58219,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));if(typeof stuttaford.radiant.datoms.t58235 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datoms.t58235 = (function (owner,G__58226,output_checker58225,map58218,vec__58217,map58219,value,p__58192,owner58190,component,map58220,input_schema58223,validate__837__auto__,output_schema58222,data__24427__auto__,fnk58221,input_checker58224,ufv__,opts__24428__auto__,meta58236){
this.owner = owner;
this.G__58226 = G__58226;
this.output_checker58225 = output_checker58225;
this.map58218 = map58218;
this.vec__58217 = vec__58217;
this.map58219 = map58219;
this.value = value;
this.p__58192 = p__58192;
this.owner58190 = owner58190;
this.component = component;
this.map58220 = map58220;
this.input_schema58223 = input_schema58223;
this.validate__837__auto__ = validate__837__auto__;
this.output_schema58222 = output_schema58222;
this.data__24427__auto__ = data__24427__auto__;
this.fnk58221 = fnk58221;
this.input_checker58224 = input_checker58224;
this.ufv__ = ufv__;
this.opts__24428__auto__ = opts__24428__auto__;
this.meta58236 = meta58236;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datoms.t58235.cljs$lang$type = true;
stuttaford.radiant.datoms.t58235.cljs$lang$ctorStr = "stuttaford.radiant.datoms/t58235";
stuttaford.radiant.datoms.t58235.cljs$lang$ctorPrWriter = ((function (component,map58219,owner,value__$1,map58220,validate__837__auto__,ufv__,output_schema58222,input_schema58223,input_checker58224,output_checker58225,vec__58217,opts__24428__auto__){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"stuttaford.radiant.datoms/t58235");
});})(component,map58219,owner,value__$1,map58220,validate__837__auto__,ufv__,output_schema58222,input_schema58223,input_checker58224,output_checker58225,vec__58217,opts__24428__auto__))
;
stuttaford.radiant.datoms.t58235.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datoms.t58235.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (component,map58219,owner,value__$1,map58220,validate__837__auto__,ufv__,output_schema58222,input_schema58223,input_checker58224,output_checker58225,vec__58217,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "value";
});})(component,map58219,owner,value__$1,map58220,validate__837__auto__,ufv__,output_schema58222,input_schema58223,input_checker58224,output_checker58225,vec__58217,opts__24428__auto__))
;
stuttaford.radiant.datoms.t58235.prototype.om$core$IRender$ = true;
stuttaford.radiant.datoms.t58235.prototype.om$core$IRender$render$arity$1 = ((function (component,map58219,owner,value__$1,map58220,validate__837__auto__,ufv__,output_schema58222,input_schema58223,input_checker58224,output_checker58225,vec__58217,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var G__58238 = {"href": "javascript:", "onClick": ((function (c,___$1,component,map58219,owner,value__$1,map58220,validate__837__auto__,ufv__,output_schema58222,input_schema58223,input_checker58224,output_checker58225,vec__58217,opts__24428__auto__){
return (function (){console.log(self__.owner,c,stuttaford.om.common.control_chan(self__.owner));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.component,self__.value], null)], null));
});})(c,___$1,component,map58219,owner,value__$1,map58220,validate__837__auto__,ufv__,output_schema58222,input_schema58223,input_checker58224,output_checker58225,vec__58217,opts__24428__auto__))
};var G__58239 = sablono.interpreter.interpret(self__.value);return React.DOM.a(G__58238,G__58239);
});})(component,map58219,owner,value__$1,map58220,validate__837__auto__,ufv__,output_schema58222,input_schema58223,input_checker58224,output_checker58225,vec__58217,opts__24428__auto__))
;
stuttaford.radiant.datoms.t58235.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (component,map58219,owner,value__$1,map58220,validate__837__auto__,ufv__,output_schema58222,input_schema58223,input_checker58224,output_checker58225,vec__58217,opts__24428__auto__){
return (function (_58237){var self__ = this;
var _58237__$1 = this;return self__.meta58236;
});})(component,map58219,owner,value__$1,map58220,validate__837__auto__,ufv__,output_schema58222,input_schema58223,input_checker58224,output_checker58225,vec__58217,opts__24428__auto__))
;
stuttaford.radiant.datoms.t58235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (component,map58219,owner,value__$1,map58220,validate__837__auto__,ufv__,output_schema58222,input_schema58223,input_checker58224,output_checker58225,vec__58217,opts__24428__auto__){
return (function (_58237,meta58236__$1){var self__ = this;
var _58237__$1 = this;return (new stuttaford.radiant.datoms.t58235(self__.owner,self__.G__58226,self__.output_checker58225,self__.map58218,self__.vec__58217,self__.map58219,self__.value,self__.p__58192,self__.owner58190,self__.component,self__.map58220,self__.input_schema58223,self__.validate__837__auto__,self__.output_schema58222,self__.data__24427__auto__,self__.fnk58221,self__.input_checker58224,self__.ufv__,self__.opts__24428__auto__,meta58236__$1));
});})(component,map58219,owner,value__$1,map58220,validate__837__auto__,ufv__,output_schema58222,input_schema58223,input_checker58224,output_checker58225,vec__58217,opts__24428__auto__))
;
stuttaford.radiant.datoms.__GT_t58235 = ((function (component,map58219,owner,value__$1,map58220,validate__837__auto__,ufv__,output_schema58222,input_schema58223,input_checker58224,output_checker58225,vec__58217,opts__24428__auto__){
return (function __GT_t58235(owner__$1,G__58226__$1,output_checker58225__$1,map58218__$1,vec__58217__$1,map58219__$1,value__$2,p__58192__$1,owner58190__$1,component__$1,map58220__$1,input_schema58223__$1,validate__837__auto____$1,output_schema58222__$1,data__24427__auto____$1,fnk58221__$1,input_checker58224__$1,ufv____$1,opts__24428__auto____$1,meta58236){return (new stuttaford.radiant.datoms.t58235(owner__$1,G__58226__$1,output_checker58225__$1,map58218__$1,vec__58217__$1,map58219__$1,value__$2,p__58192__$1,owner58190__$1,component__$1,map58220__$1,input_schema58223__$1,validate__837__auto____$1,output_schema58222__$1,data__24427__auto____$1,fnk58221__$1,input_checker58224__$1,ufv____$1,opts__24428__auto____$1,meta58236));
});})(component,map58219,owner,value__$1,map58220,validate__837__auto__,ufv__,output_schema58222,input_schema58223,input_checker58224,output_checker58225,vec__58217,opts__24428__auto__))
;
}
return (new stuttaford.radiant.datoms.t58235(owner,G__58226,output_checker58225,map58218,vec__58217,map58219,value__$1,p__58192,owner58190,component,map58220,input_schema58223,validate__837__auto__,output_schema58222,data__24427__auto__,fnk58221,input_checker58224,ufv__,opts__24428__auto__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___58244 = (function (){var G__58240 = o__840__auto__;return (output_checker58225.cljs$core$IFn$_invoke$arity$1 ? output_checker58225.cljs$core$IFn$_invoke$arity$1(G__58240) : output_checker58225.call(null,G__58240));
})();if(cljs.core.truth_(temp__4126__auto___58244))
{var error__839__auto___58245 = temp__4126__auto___58244;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk58221","fnk58221",1382113565,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___58245], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema58222,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___58245], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema58222,input_schema58223,input_checker58224,output_checker58225,vec__58217,opts__24428__auto__))
,schema.core.make_fn_schema(output_schema58222,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema58223], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24428__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner58190,new cljs.core.Keyword(null,"data","data",-232669377),data__24427__auto__], null));
};
var value = function (data__24427__auto__,owner58190,var_args){
var p__58192 = null;if (arguments.length > 2) {
  p__58192 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return value__delegate.call(this,data__24427__auto__,owner58190,p__58192);};
value.cljs$lang$maxFixedArity = 2;
value.cljs$lang$applyTo = (function (arglist__58246){
var data__24427__auto__ = cljs.core.first(arglist__58246);
arglist__58246 = cljs.core.next(arglist__58246);
var owner58190 = cljs.core.first(arglist__58246);
var p__58192 = cljs.core.rest(arglist__58246);
return value__delegate(data__24427__auto__,owner58190,p__58192);
});
value.cljs$core$IFn$_invoke$arity$variadic = value__delegate;
return value;
})()
;
stuttaford.radiant.datoms.__GT_value = (function() {
var __GT_value = null;
var __GT_value__1 = (function (cursor__24396__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.value,cursor__24396__auto__);
});
var __GT_value__2 = (function (cursor__24396__auto__,m58191){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datoms.value,cursor__24396__auto__,m58191);
});
__GT_value = function(cursor__24396__auto__,m58191){
switch(arguments.length){
case 1:
return __GT_value__1.call(this,cursor__24396__auto__);
case 2:
return __GT_value__2.call(this,cursor__24396__auto__,m58191);
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
stuttaford.radiant.datoms.a_value = (function a_value(p1__58247_SHARP_){return stuttaford.radiant.datoms.value_STAR_(new cljs.core.Keyword(null,"a","a",-2123407586),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__58247_SHARP_)));
});
stuttaford.radiant.datoms.v_value = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.value_STAR_,new cljs.core.Keyword(null,"v","v",21465059));
/**
* @param {...*} var_args
*/
stuttaford.radiant.datoms.datoms = (function() { 
var datoms__delegate = function (data__24427__auto__,owner58248,p__58250){var vec__58323 = p__58250;var opts__24428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58323,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema58326 = schema.core.Any;var input_schema58327 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-db","current-db",213667882)),schema.core.Any,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map58324","map58324",-1401041792,null))], null);var input_checker58328 = schema.core.checker(input_schema58327);var output_checker58329 = schema.core.checker(output_schema58326);return schema.core.schematize_fn(((function (ufv__,output_schema58326,input_schema58327,input_checker58328,output_checker58329,vec__58323,opts__24428__auto__){
return (function fnk58325(G__58330){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___58395 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__58330], null);var temp__4126__auto___58396 = (function (){var G__58363 = args__838__auto___58395;return (input_checker58328.cljs$core$IFn$_invoke$arity$1 ? input_checker58328.cljs$core$IFn$_invoke$arity$1(G__58363) : input_checker58328.call(null,G__58363));
})();if(cljs.core.truth_(temp__4126__auto___58396))
{var error__839__auto___58397 = temp__4126__auto___58396;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk58325","fnk58325",-1731098160,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___58397], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema58327,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___58395,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___58397], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map58324 = G__58330;while(true){
if(cljs.core.map_QMARK_(map58324))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map58324], 0))));
}
var data = plumbing.fnk.schema.safe_get(map58324,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var current_datoms_index = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_db = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-db","current-db",213667882),null);var current_datoms_components = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628),cljs.core.PersistentArrayMap.EMPTY);var owner = plumbing.fnk.schema.safe_get(map58324,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datoms.t58364 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datoms.t58364 = (function (map58324,G__58330,owner,datoms,data,owner58248,vec__58323,current_datoms_index,input_checker58328,fnk58325,current_db,output_schema58326,p__58250,input_schema58327,current_datoms_components,output_checker58329,validate__837__auto__,data__24427__auto__,ufv__,opts__24428__auto__,meta58365){
this.map58324 = map58324;
this.G__58330 = G__58330;
this.owner = owner;
this.datoms = datoms;
this.data = data;
this.owner58248 = owner58248;
this.vec__58323 = vec__58323;
this.current_datoms_index = current_datoms_index;
this.input_checker58328 = input_checker58328;
this.fnk58325 = fnk58325;
this.current_db = current_db;
this.output_schema58326 = output_schema58326;
this.p__58250 = p__58250;
this.input_schema58327 = input_schema58327;
this.current_datoms_components = current_datoms_components;
this.output_checker58329 = output_checker58329;
this.validate__837__auto__ = validate__837__auto__;
this.data__24427__auto__ = data__24427__auto__;
this.ufv__ = ufv__;
this.opts__24428__auto__ = opts__24428__auto__;
this.meta58365 = meta58365;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datoms.t58364.cljs$lang$type = true;
stuttaford.radiant.datoms.t58364.cljs$lang$ctorStr = "stuttaford.radiant.datoms/t58364";
stuttaford.radiant.datoms.t58364.cljs$lang$ctorPrWriter = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema58326,input_schema58327,input_checker58328,output_checker58329,vec__58323,opts__24428__auto__){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"stuttaford.radiant.datoms/t58364");
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema58326,input_schema58327,input_checker58328,output_checker58329,vec__58323,opts__24428__auto__))
;
stuttaford.radiant.datoms.t58364.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datoms.t58364.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema58326,input_schema58327,input_checker58328,output_checker58329,vec__58323,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "datoms";
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema58326,input_schema58327,input_checker58328,output_checker58329,vec__58323,opts__24428__auto__))
;
stuttaford.radiant.datoms.t58364.prototype.om$core$IRender$ = true;
stuttaford.radiant.datoms.t58364.prototype.om$core$IRender$render$arity$1 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema58326,input_schema58327,input_checker58328,output_checker58329,vec__58323,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var attrs58367 = stuttaford.radiant.datoms.__GT_inputs.cljs$core$IFn$_invoke$arity$1(self__.data);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs58367))?sablono.interpreter.attributes(attrs58367):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs58367))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58372 = null;return React.DOM.hr(G__58372);
})(),sablono.interpreter.interpret((cljs.core.truth_(self__.current_db)?(function (){var order_fn = stuttaford.radiant.model.order_fn(self__.current_datoms_index);var components = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),(function (){var G__58373 = stuttaford.radiant.model.ensure_components(self__.current_datoms_components);return (order_fn.cljs$core$IFn$_invoke$arity$1 ? order_fn.cljs$core$IFn$_invoke$arity$1(G__58373) : order_fn.call(null,G__58373));
})());var datoms__$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.datoms,self__.current_db,self__.current_datoms_index,components);return stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),stuttaford.radiant.model.cols(self__.current_datoms_index),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (order_fn,components,datoms__$2,attrs58367,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema58326,input_schema58327,input_checker58328,output_checker58329,vec__58323,opts__24428__auto__){
return (function (p__58374){var map__58375 = p__58374;var map__58375__$1 = ((cljs.core.seq_QMARK_(map__58375))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58375):map__58375);var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58375__$1,new cljs.core.Keyword(null,"v","v",21465059));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58375__$1,new cljs.core.Keyword(null,"a","a",-2123407586));var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58375__$1,new cljs.core.Keyword(null,"e","e",1381269198));var G__58376 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__58376) {
case "avet":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.datoms.a_value(a),(function (){var G__58377 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__58377) : stuttaford.radiant.datoms.v_value.call(null,G__58377));
})(),(function (){var G__58378 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__58378) : stuttaford.radiant.datoms.e_value.call(null,G__58378));
})()], null);

break;
case "aevt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.datoms.a_value(a),(function (){var G__58379 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__58379) : stuttaford.radiant.datoms.e_value.call(null,G__58379));
})(),(function (){var G__58380 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__58380) : stuttaford.radiant.datoms.v_value.call(null,G__58380));
})()], null);

break;
case "eavt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58381 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__58381) : stuttaford.radiant.datoms.e_value.call(null,G__58381));
})(),stuttaford.radiant.datoms.a_value(a),(function (){var G__58382 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__58382) : stuttaford.radiant.datoms.v_value.call(null,G__58382));
})()], null);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.current_datoms_index))));

}
});})(order_fn,components,datoms__$2,attrs58367,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema58326,input_schema58327,input_checker58328,output_checker58329,vec__58323,opts__24428__auto__))
,datoms__$2)], null));
})():null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs58367),(function (){var G__58383 = null;return React.DOM.hr(G__58383);
})(),sablono.interpreter.interpret((cljs.core.truth_(self__.current_db)?(function (){var order_fn = stuttaford.radiant.model.order_fn(self__.current_datoms_index);var components = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),(function (){var G__58384 = stuttaford.radiant.model.ensure_components(self__.current_datoms_components);return (order_fn.cljs$core$IFn$_invoke$arity$1 ? order_fn.cljs$core$IFn$_invoke$arity$1(G__58384) : order_fn.call(null,G__58384));
})());var datoms__$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.datoms,self__.current_db,self__.current_datoms_index,components);return stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),stuttaford.radiant.model.cols(self__.current_datoms_index),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (order_fn,components,datoms__$2,attrs58367,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema58326,input_schema58327,input_checker58328,output_checker58329,vec__58323,opts__24428__auto__){
return (function (p__58385){var map__58386 = p__58385;var map__58386__$1 = ((cljs.core.seq_QMARK_(map__58386))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58386):map__58386);var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58386__$1,new cljs.core.Keyword(null,"v","v",21465059));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58386__$1,new cljs.core.Keyword(null,"a","a",-2123407586));var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58386__$1,new cljs.core.Keyword(null,"e","e",1381269198));var G__58387 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__58387) {
case "avet":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.datoms.a_value(a),(function (){var G__58388 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__58388) : stuttaford.radiant.datoms.v_value.call(null,G__58388));
})(),(function (){var G__58389 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__58389) : stuttaford.radiant.datoms.e_value.call(null,G__58389));
})()], null);

break;
case "aevt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.datoms.a_value(a),(function (){var G__58390 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__58390) : stuttaford.radiant.datoms.e_value.call(null,G__58390));
})(),(function (){var G__58391 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__58391) : stuttaford.radiant.datoms.v_value.call(null,G__58391));
})()], null);

break;
case "eavt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58392 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__58392) : stuttaford.radiant.datoms.e_value.call(null,G__58392));
})(),stuttaford.radiant.datoms.a_value(a),(function (){var G__58393 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__58393) : stuttaford.radiant.datoms.v_value.call(null,G__58393));
})()], null);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.current_datoms_index))));

}
});})(order_fn,components,datoms__$2,attrs58367,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema58326,input_schema58327,input_checker58328,output_checker58329,vec__58323,opts__24428__auto__))
,datoms__$2)], null));
})():null))], null))));
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema58326,input_schema58327,input_checker58328,output_checker58329,vec__58323,opts__24428__auto__))
;
stuttaford.radiant.datoms.t58364.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema58326,input_schema58327,input_checker58328,output_checker58329,vec__58323,opts__24428__auto__){
return (function (_58366){var self__ = this;
var _58366__$1 = this;return self__.meta58365;
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema58326,input_schema58327,input_checker58328,output_checker58329,vec__58323,opts__24428__auto__))
;
stuttaford.radiant.datoms.t58364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema58326,input_schema58327,input_checker58328,output_checker58329,vec__58323,opts__24428__auto__){
return (function (_58366,meta58365__$1){var self__ = this;
var _58366__$1 = this;return (new stuttaford.radiant.datoms.t58364(self__.map58324,self__.G__58330,self__.owner,self__.datoms,self__.data,self__.owner58248,self__.vec__58323,self__.current_datoms_index,self__.input_checker58328,self__.fnk58325,self__.current_db,self__.output_schema58326,self__.p__58250,self__.input_schema58327,self__.current_datoms_components,self__.output_checker58329,self__.validate__837__auto__,self__.data__24427__auto__,self__.ufv__,self__.opts__24428__auto__,meta58365__$1));
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema58326,input_schema58327,input_checker58328,output_checker58329,vec__58323,opts__24428__auto__))
;
stuttaford.radiant.datoms.__GT_t58364 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema58326,input_schema58327,input_checker58328,output_checker58329,vec__58323,opts__24428__auto__){
return (function __GT_t58364(map58324__$1,G__58330__$1,owner__$1,datoms__$1,data__$1,owner58248__$1,vec__58323__$1,current_datoms_index__$1,input_checker58328__$1,fnk58325__$1,current_db__$1,output_schema58326__$1,p__58250__$1,input_schema58327__$1,current_datoms_components__$1,output_checker58329__$1,validate__837__auto____$1,data__24427__auto____$1,ufv____$1,opts__24428__auto____$1,meta58365){return (new stuttaford.radiant.datoms.t58364(map58324__$1,G__58330__$1,owner__$1,datoms__$1,data__$1,owner58248__$1,vec__58323__$1,current_datoms_index__$1,input_checker58328__$1,fnk58325__$1,current_db__$1,output_schema58326__$1,p__58250__$1,input_schema58327__$1,current_datoms_components__$1,output_checker58329__$1,validate__837__auto____$1,data__24427__auto____$1,ufv____$1,opts__24428__auto____$1,meta58365));
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema58326,input_schema58327,input_checker58328,output_checker58329,vec__58323,opts__24428__auto__))
;
}
return (new stuttaford.radiant.datoms.t58364(map58324,G__58330,owner,datoms,data,owner58248,vec__58323,current_datoms_index,input_checker58328,fnk58325,current_db,output_schema58326,p__58250,input_schema58327,current_datoms_components,output_checker58329,validate__837__auto__,data__24427__auto__,ufv__,opts__24428__auto__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___58400 = (function (){var G__58394 = o__840__auto__;return (output_checker58329.cljs$core$IFn$_invoke$arity$1 ? output_checker58329.cljs$core$IFn$_invoke$arity$1(G__58394) : output_checker58329.call(null,G__58394));
})();if(cljs.core.truth_(temp__4126__auto___58400))
{var error__839__auto___58401 = temp__4126__auto___58400;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk58325","fnk58325",-1731098160,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___58401], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema58326,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___58401], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema58326,input_schema58327,input_checker58328,output_checker58329,vec__58323,opts__24428__auto__))
,schema.core.make_fn_schema(output_schema58326,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema58327], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24428__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner58248,new cljs.core.Keyword(null,"data","data",-232669377),data__24427__auto__], null));
};
var datoms = function (data__24427__auto__,owner58248,var_args){
var p__58250 = null;if (arguments.length > 2) {
  p__58250 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datoms__delegate.call(this,data__24427__auto__,owner58248,p__58250);};
datoms.cljs$lang$maxFixedArity = 2;
datoms.cljs$lang$applyTo = (function (arglist__58402){
var data__24427__auto__ = cljs.core.first(arglist__58402);
arglist__58402 = cljs.core.next(arglist__58402);
var owner58248 = cljs.core.first(arglist__58402);
var p__58250 = cljs.core.rest(arglist__58402);
return datoms__delegate(data__24427__auto__,owner58248,p__58250);
});
datoms.cljs$core$IFn$_invoke$arity$variadic = datoms__delegate;
return datoms;
})()
;
stuttaford.radiant.datoms.__GT_datoms = (function() {
var __GT_datoms = null;
var __GT_datoms__1 = (function (cursor__24396__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.datoms,cursor__24396__auto__);
});
var __GT_datoms__2 = (function (cursor__24396__auto__,m58249){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datoms.datoms,cursor__24396__auto__,m58249);
});
__GT_datoms = function(cursor__24396__auto__,m58249){
switch(arguments.length){
case 1:
return __GT_datoms__1.call(this,cursor__24396__auto__);
case 2:
return __GT_datoms__2.call(this,cursor__24396__auto__,m58249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_datoms.cljs$core$IFn$_invoke$arity$1 = __GT_datoms__1;
__GT_datoms.cljs$core$IFn$_invoke$arity$2 = __GT_datoms__2;
return __GT_datoms;
})()
;
//# sourceMappingURL=datoms.js.map