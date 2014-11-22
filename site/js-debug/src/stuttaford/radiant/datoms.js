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
stuttaford.radiant.datoms.component_status = (function component_status(p__49660,component_values,component,value){var vec__49663 = p__49660;var c_one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49663,(0),null);var c_two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49663,(1),null);if(cljs.core.truth_(value))
{return "success";
} else
{var vec__49664 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$,component_values);var one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49664,(0),null);var two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49664,(1),null);var three = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49664,(2),null);if(cljs.core.truth_((function (){var and__19670__auto__ = cljs.core.not(one);if(and__19670__auto__)
{var and__19670__auto____$1 = (function (){var or__19687__auto__ = two;if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
} else
{return three;
}
})();if(cljs.core.truth_(and__19670__auto____$1))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,c_one);
} else
{return and__19670__auto____$1;
}
} else
{return and__19670__auto__;
}
})()))
{return "error";
} else
{if(cljs.core.truth_((function (){var and__19670__auto__ = cljs.core.not(two);if(and__19670__auto__)
{var and__19670__auto____$1 = three;if(cljs.core.truth_(and__19670__auto____$1))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,c_two);
} else
{return and__19670__auto____$1;
}
} else
{return and__19670__auto__;
}
})()))
{return "error";
} else
{return null;

}
}
}
});
stuttaford.radiant.datoms.index_input = (function index_input(c,current_datoms_index){return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20913__auto__ = (function iter__49675(s__49676){return (new cljs.core.LazySeq(null,(function (){var s__49676__$1 = s__49676;while(true){
var temp__4126__auto__ = cljs.core.seq(s__49676__$1);if(temp__4126__auto__)
{var s__49676__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__49676__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__49676__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__49678 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__49677 = (0);while(true){
if((i__49677 < size__20912__auto__))
{var index = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__49677);cljs.core.chunk_append(b__49678,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__49683 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__49677,index,c__20911__auto__,size__20912__auto__,b__49678,s__49676__$2,temp__4126__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-index","set-datoms-index",-683154215),index], null));
});})(i__49677,index,c__20911__auto__,size__20912__auto__,b__49678,s__49676__$2,temp__4126__auto__))
], null);var G__49683__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,current_datoms_index))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49683,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__49683);return G__49683__$1;
})(),cljs.core.array_seq([clojure.string.upper_case(cljs.core.name(index))], 0)));
{
var G__49685 = (i__49677 + (1));
i__49677 = G__49685;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__49678),iter__49675(cljs.core.chunk_rest(s__49676__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__49678),null);
}
} else
{var index = cljs.core.first(s__49676__$2);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__49684 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (index,s__49676__$2,temp__4126__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-index","set-datoms-index",-683154215),index], null));
});})(index,s__49676__$2,temp__4126__auto__))
], null);var G__49684__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,current_datoms_index))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49684,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__49684);return G__49684__$1;
})(),cljs.core.array_seq([clojure.string.upper_case(cljs.core.name(index))], 0)),iter__49675(cljs.core.rest(s__49676__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20913__auto__(stuttaford.radiant.model.indexes);
})()], 0)),om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),null], null)], null));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),null], null)], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059),null], null)], null));
})], null),cljs.core.array_seq(["Clear"], 0))], 0));
});
stuttaford.radiant.datoms.component_input = (function component_input(c,components,current_datoms_components,component){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__49696 = {"href": "javascript:", "onClick": (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,null], null)], null));
})};var G__49697 = (function (){var G__49698 = {"className": "glyphicon glyphicon-remove"};return React.DOM.span(G__49698);
})();return React.DOM.a(G__49696,G__49697);
})()),om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),true,new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),clojure.string.upper_case(cljs.core.name(component)),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),stuttaford.radiant.datoms.component_status(components,cljs.core.map.cljs$core$IFn$_invoke$arity$2(current_datoms_components,components),component,(function (){var G__49699 = current_datoms_components;return (component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(G__49699) : component.call(null,G__49699));
})()),new cljs.core.Keyword(null,"value","value",305978217),(function (){var G__49700 = current_datoms_components;return (component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(G__49700) : component.call(null,G__49700));
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__49686_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,p1__49686_SHARP_.target.value], null)], null));
})], null)));
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.datoms.inputs = (function() { 
var inputs__delegate = function (data__24457__auto__,owner49701,p__49703){var vec__49725 = p__49703;var opts__24458__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49725,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema49729 = schema.core.Any;var input_schema49730 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628)),schema.core.Any,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map49726","map49726",138871733,null))], null);var input_checker49731 = schema.core.checker(input_schema49730);var output_checker49732 = schema.core.checker(output_schema49729);return schema.core.schematize_fn(((function (ufv__,output_schema49729,input_schema49730,input_checker49731,output_checker49732,vec__49725,opts__24458__auto__){
return (function fnk49728(G__49733){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49746 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49733], null);var temp__4126__auto___49747 = (function (){var G__49740 = args__838__auto___49746;return (input_checker49731.cljs$core$IFn$_invoke$arity$1 ? input_checker49731.cljs$core$IFn$_invoke$arity$1(G__49740) : input_checker49731.call(null,G__49740));
})();if(cljs.core.truth_(temp__4126__auto___49747))
{var error__839__auto___49748 = temp__4126__auto___49747;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk49728","fnk49728",450829828,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49748], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49730,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49746,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49748], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map49726 = G__49733;while(true){
if(cljs.core.map_QMARK_(map49726))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map49726], 0))));
}
var map49727 = plumbing.fnk.schema.safe_get(map49726,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var current_datoms_index = plumbing.fnk.schema.safe_get(map49727,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_datoms_components = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map49727,new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628),cljs.core.PersistentArrayMap.EMPTY);var owner = plumbing.fnk.schema.safe_get(map49726,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datoms.t49741 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datoms.t49741 = (function (p__49703,owner,fnk49728,output_checker49732,vec__49725,input_schema49730,current_datoms_index,input_checker49731,current_datoms_components,map49726,opts__24458__auto__,inputs,output_schema49729,G__49733,validate__837__auto__,owner49701,ufv__,data__24457__auto__,map49727,meta49742){
this.p__49703 = p__49703;
this.owner = owner;
this.fnk49728 = fnk49728;
this.output_checker49732 = output_checker49732;
this.vec__49725 = vec__49725;
this.input_schema49730 = input_schema49730;
this.current_datoms_index = current_datoms_index;
this.input_checker49731 = input_checker49731;
this.current_datoms_components = current_datoms_components;
this.map49726 = map49726;
this.opts__24458__auto__ = opts__24458__auto__;
this.inputs = inputs;
this.output_schema49729 = output_schema49729;
this.G__49733 = G__49733;
this.validate__837__auto__ = validate__837__auto__;
this.owner49701 = owner49701;
this.ufv__ = ufv__;
this.data__24457__auto__ = data__24457__auto__;
this.map49727 = map49727;
this.meta49742 = meta49742;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datoms.t49741.cljs$lang$type = true;
stuttaford.radiant.datoms.t49741.cljs$lang$ctorStr = "stuttaford.radiant.datoms/t49741";
stuttaford.radiant.datoms.t49741.cljs$lang$ctorPrWriter = ((function (owner,current_datoms_components,current_datoms_index,map49727,validate__837__auto__,ufv__,output_schema49729,input_schema49730,input_checker49731,output_checker49732,vec__49725,opts__24458__auto__){
return (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"stuttaford.radiant.datoms/t49741");
});})(owner,current_datoms_components,current_datoms_index,map49727,validate__837__auto__,ufv__,output_schema49729,input_schema49730,input_checker49731,output_checker49732,vec__49725,opts__24458__auto__))
;
stuttaford.radiant.datoms.t49741.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datoms.t49741.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,current_datoms_components,current_datoms_index,map49727,validate__837__auto__,ufv__,output_schema49729,input_schema49730,input_checker49731,output_checker49732,vec__49725,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "inputs";
});})(owner,current_datoms_components,current_datoms_index,map49727,validate__837__auto__,ufv__,output_schema49729,input_schema49730,input_checker49731,output_checker49732,vec__49725,opts__24458__auto__))
;
stuttaford.radiant.datoms.t49741.prototype.om$core$IRender$ = true;
stuttaford.radiant.datoms.t49741.prototype.om$core$IRender$render$arity$1 = ((function (owner,current_datoms_components,current_datoms_index,map49727,validate__837__auto__,ufv__,output_schema49729,input_schema49730,input_checker49731,output_checker49732,vec__49725,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var components = stuttaford.radiant.model.components(self__.current_datoms_index);var vec__49744 = components;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49744,(0),null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49744,(1),null);var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49744,(2),null);return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"datoms-components-inputs"], null),cljs.core.array_seq([om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),cljs.core.array_seq([stuttaford.radiant.datoms.index_input(c,self__.current_datoms_index)], 0)),om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),cljs.core.array_seq([stuttaford.radiant.datoms.component_input(c,components,self__.current_datoms_components,x)], 0)),om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),cljs.core.array_seq([stuttaford.radiant.datoms.component_input(c,components,self__.current_datoms_components,y)], 0)),om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),cljs.core.array_seq([stuttaford.radiant.datoms.component_input(c,components,self__.current_datoms_components,z)], 0))], 0));
});})(owner,current_datoms_components,current_datoms_index,map49727,validate__837__auto__,ufv__,output_schema49729,input_schema49730,input_checker49731,output_checker49732,vec__49725,opts__24458__auto__))
;
stuttaford.radiant.datoms.t49741.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,current_datoms_components,current_datoms_index,map49727,validate__837__auto__,ufv__,output_schema49729,input_schema49730,input_checker49731,output_checker49732,vec__49725,opts__24458__auto__){
return (function (_49743){var self__ = this;
var _49743__$1 = this;return self__.meta49742;
});})(owner,current_datoms_components,current_datoms_index,map49727,validate__837__auto__,ufv__,output_schema49729,input_schema49730,input_checker49731,output_checker49732,vec__49725,opts__24458__auto__))
;
stuttaford.radiant.datoms.t49741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,current_datoms_components,current_datoms_index,map49727,validate__837__auto__,ufv__,output_schema49729,input_schema49730,input_checker49731,output_checker49732,vec__49725,opts__24458__auto__){
return (function (_49743,meta49742__$1){var self__ = this;
var _49743__$1 = this;return (new stuttaford.radiant.datoms.t49741(self__.p__49703,self__.owner,self__.fnk49728,self__.output_checker49732,self__.vec__49725,self__.input_schema49730,self__.current_datoms_index,self__.input_checker49731,self__.current_datoms_components,self__.map49726,self__.opts__24458__auto__,self__.inputs,self__.output_schema49729,self__.G__49733,self__.validate__837__auto__,self__.owner49701,self__.ufv__,self__.data__24457__auto__,self__.map49727,meta49742__$1));
});})(owner,current_datoms_components,current_datoms_index,map49727,validate__837__auto__,ufv__,output_schema49729,input_schema49730,input_checker49731,output_checker49732,vec__49725,opts__24458__auto__))
;
stuttaford.radiant.datoms.__GT_t49741 = ((function (owner,current_datoms_components,current_datoms_index,map49727,validate__837__auto__,ufv__,output_schema49729,input_schema49730,input_checker49731,output_checker49732,vec__49725,opts__24458__auto__){
return (function __GT_t49741(p__49703__$1,owner__$1,fnk49728__$1,output_checker49732__$1,vec__49725__$1,input_schema49730__$1,current_datoms_index__$1,input_checker49731__$1,current_datoms_components__$1,map49726__$1,opts__24458__auto____$1,inputs__$1,output_schema49729__$1,G__49733__$1,validate__837__auto____$1,owner49701__$1,ufv____$1,data__24457__auto____$1,map49727__$1,meta49742){return (new stuttaford.radiant.datoms.t49741(p__49703__$1,owner__$1,fnk49728__$1,output_checker49732__$1,vec__49725__$1,input_schema49730__$1,current_datoms_index__$1,input_checker49731__$1,current_datoms_components__$1,map49726__$1,opts__24458__auto____$1,inputs__$1,output_schema49729__$1,G__49733__$1,validate__837__auto____$1,owner49701__$1,ufv____$1,data__24457__auto____$1,map49727__$1,meta49742));
});})(owner,current_datoms_components,current_datoms_index,map49727,validate__837__auto__,ufv__,output_schema49729,input_schema49730,input_checker49731,output_checker49732,vec__49725,opts__24458__auto__))
;
}
return (new stuttaford.radiant.datoms.t49741(p__49703,owner,fnk49728,output_checker49732,vec__49725,input_schema49730,current_datoms_index,input_checker49731,current_datoms_components,map49726,opts__24458__auto__,inputs,output_schema49729,G__49733,validate__837__auto__,owner49701,ufv__,data__24457__auto__,map49727,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49749 = (function (){var G__49745 = o__840__auto__;return (output_checker49732.cljs$core$IFn$_invoke$arity$1 ? output_checker49732.cljs$core$IFn$_invoke$arity$1(G__49745) : output_checker49732.call(null,G__49745));
})();if(cljs.core.truth_(temp__4126__auto___49749))
{var error__839__auto___49750 = temp__4126__auto___49749;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk49728","fnk49728",450829828,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49750], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49729,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49750], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema49729,input_schema49730,input_checker49731,output_checker49732,vec__49725,opts__24458__auto__))
,schema.core.make_fn_schema(output_schema49729,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49730], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24458__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner49701,new cljs.core.Keyword(null,"data","data",-232669377),data__24457__auto__], null));
};
var inputs = function (data__24457__auto__,owner49701,var_args){
var p__49703 = null;if (arguments.length > 2) {
  p__49703 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return inputs__delegate.call(this,data__24457__auto__,owner49701,p__49703);};
inputs.cljs$lang$maxFixedArity = 2;
inputs.cljs$lang$applyTo = (function (arglist__49751){
var data__24457__auto__ = cljs.core.first(arglist__49751);
arglist__49751 = cljs.core.next(arglist__49751);
var owner49701 = cljs.core.first(arglist__49751);
var p__49703 = cljs.core.rest(arglist__49751);
return inputs__delegate(data__24457__auto__,owner49701,p__49703);
});
inputs.cljs$core$IFn$_invoke$arity$variadic = inputs__delegate;
return inputs;
})()
;
stuttaford.radiant.datoms.__GT_inputs = (function() {
var __GT_inputs = null;
var __GT_inputs__1 = (function (cursor__24426__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.inputs,cursor__24426__auto__);
});
var __GT_inputs__2 = (function (cursor__24426__auto__,m49702){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datoms.inputs,cursor__24426__auto__,m49702);
});
__GT_inputs = function(cursor__24426__auto__,m49702){
switch(arguments.length){
case 1:
return __GT_inputs__1.call(this,cursor__24426__auto__);
case 2:
return __GT_inputs__2.call(this,cursor__24426__auto__,m49702);
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
var value__delegate = function (data__24457__auto__,owner49752,p__49754){var vec__49779 = p__49754;var opts__24458__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49779,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema49784 = schema.core.Any;var input_schema49785 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component","component",1555936782),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"value","value",305978217),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map49780","map49780",1874933857,null))], null);var input_checker49786 = schema.core.checker(input_schema49785);var output_checker49787 = schema.core.checker(output_schema49784);return schema.core.schematize_fn(((function (ufv__,output_schema49784,input_schema49785,input_checker49786,output_checker49787,vec__49779,opts__24458__auto__){
return (function fnk49783(G__49788){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49803 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49788], null);var temp__4126__auto___49804 = (function (){var G__49796 = args__838__auto___49803;return (input_checker49786.cljs$core$IFn$_invoke$arity$1 ? input_checker49786.cljs$core$IFn$_invoke$arity$1(G__49796) : input_checker49786.call(null,G__49796));
})();if(cljs.core.truth_(temp__4126__auto___49804))
{var error__839__auto___49805 = temp__4126__auto___49804;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk49783","fnk49783",-2137032310,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49805], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49785,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49803,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49805], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map49780 = G__49788;while(true){
if(cljs.core.map_QMARK_(map49780))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map49780], 0))));
}
var map49782 = plumbing.fnk.schema.safe_get(map49780,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var value__$1 = plumbing.fnk.schema.safe_get(map49782,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map49780,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map49781 = plumbing.fnk.schema.safe_get(map49780,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component = plumbing.fnk.schema.safe_get(map49781,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));if(typeof stuttaford.radiant.datoms.t49797 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datoms.t49797 = (function (map49780,p__49754,G__49788,owner,output_schema49784,input_checker49786,map49782,output_checker49787,fnk49783,value,owner49752,map49781,vec__49779,component,opts__24458__auto__,validate__837__auto__,ufv__,data__24457__auto__,input_schema49785,meta49798){
this.map49780 = map49780;
this.p__49754 = p__49754;
this.G__49788 = G__49788;
this.owner = owner;
this.output_schema49784 = output_schema49784;
this.input_checker49786 = input_checker49786;
this.map49782 = map49782;
this.output_checker49787 = output_checker49787;
this.fnk49783 = fnk49783;
this.value = value;
this.owner49752 = owner49752;
this.map49781 = map49781;
this.vec__49779 = vec__49779;
this.component = component;
this.opts__24458__auto__ = opts__24458__auto__;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.data__24457__auto__ = data__24457__auto__;
this.input_schema49785 = input_schema49785;
this.meta49798 = meta49798;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datoms.t49797.cljs$lang$type = true;
stuttaford.radiant.datoms.t49797.cljs$lang$ctorStr = "stuttaford.radiant.datoms/t49797";
stuttaford.radiant.datoms.t49797.cljs$lang$ctorPrWriter = ((function (component,map49781,owner,value__$1,map49782,validate__837__auto__,ufv__,output_schema49784,input_schema49785,input_checker49786,output_checker49787,vec__49779,opts__24458__auto__){
return (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"stuttaford.radiant.datoms/t49797");
});})(component,map49781,owner,value__$1,map49782,validate__837__auto__,ufv__,output_schema49784,input_schema49785,input_checker49786,output_checker49787,vec__49779,opts__24458__auto__))
;
stuttaford.radiant.datoms.t49797.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datoms.t49797.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (component,map49781,owner,value__$1,map49782,validate__837__auto__,ufv__,output_schema49784,input_schema49785,input_checker49786,output_checker49787,vec__49779,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "value";
});})(component,map49781,owner,value__$1,map49782,validate__837__auto__,ufv__,output_schema49784,input_schema49785,input_checker49786,output_checker49787,vec__49779,opts__24458__auto__))
;
stuttaford.radiant.datoms.t49797.prototype.om$core$IRender$ = true;
stuttaford.radiant.datoms.t49797.prototype.om$core$IRender$render$arity$1 = ((function (component,map49781,owner,value__$1,map49782,validate__837__auto__,ufv__,output_schema49784,input_schema49785,input_checker49786,output_checker49787,vec__49779,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var G__49800 = {"href": "javascript:", "onClick": ((function (c,___$1,component,map49781,owner,value__$1,map49782,validate__837__auto__,ufv__,output_schema49784,input_schema49785,input_checker49786,output_checker49787,vec__49779,opts__24458__auto__){
return (function (){console.log(self__.owner,c,stuttaford.om.common.control_chan(self__.owner));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.component,self__.value], null)], null));
});})(c,___$1,component,map49781,owner,value__$1,map49782,validate__837__auto__,ufv__,output_schema49784,input_schema49785,input_checker49786,output_checker49787,vec__49779,opts__24458__auto__))
};var G__49801 = sablono.interpreter.interpret(self__.value);return React.DOM.a(G__49800,G__49801);
});})(component,map49781,owner,value__$1,map49782,validate__837__auto__,ufv__,output_schema49784,input_schema49785,input_checker49786,output_checker49787,vec__49779,opts__24458__auto__))
;
stuttaford.radiant.datoms.t49797.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (component,map49781,owner,value__$1,map49782,validate__837__auto__,ufv__,output_schema49784,input_schema49785,input_checker49786,output_checker49787,vec__49779,opts__24458__auto__){
return (function (_49799){var self__ = this;
var _49799__$1 = this;return self__.meta49798;
});})(component,map49781,owner,value__$1,map49782,validate__837__auto__,ufv__,output_schema49784,input_schema49785,input_checker49786,output_checker49787,vec__49779,opts__24458__auto__))
;
stuttaford.radiant.datoms.t49797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (component,map49781,owner,value__$1,map49782,validate__837__auto__,ufv__,output_schema49784,input_schema49785,input_checker49786,output_checker49787,vec__49779,opts__24458__auto__){
return (function (_49799,meta49798__$1){var self__ = this;
var _49799__$1 = this;return (new stuttaford.radiant.datoms.t49797(self__.map49780,self__.p__49754,self__.G__49788,self__.owner,self__.output_schema49784,self__.input_checker49786,self__.map49782,self__.output_checker49787,self__.fnk49783,self__.value,self__.owner49752,self__.map49781,self__.vec__49779,self__.component,self__.opts__24458__auto__,self__.validate__837__auto__,self__.ufv__,self__.data__24457__auto__,self__.input_schema49785,meta49798__$1));
});})(component,map49781,owner,value__$1,map49782,validate__837__auto__,ufv__,output_schema49784,input_schema49785,input_checker49786,output_checker49787,vec__49779,opts__24458__auto__))
;
stuttaford.radiant.datoms.__GT_t49797 = ((function (component,map49781,owner,value__$1,map49782,validate__837__auto__,ufv__,output_schema49784,input_schema49785,input_checker49786,output_checker49787,vec__49779,opts__24458__auto__){
return (function __GT_t49797(map49780__$1,p__49754__$1,G__49788__$1,owner__$1,output_schema49784__$1,input_checker49786__$1,map49782__$1,output_checker49787__$1,fnk49783__$1,value__$2,owner49752__$1,map49781__$1,vec__49779__$1,component__$1,opts__24458__auto____$1,validate__837__auto____$1,ufv____$1,data__24457__auto____$1,input_schema49785__$1,meta49798){return (new stuttaford.radiant.datoms.t49797(map49780__$1,p__49754__$1,G__49788__$1,owner__$1,output_schema49784__$1,input_checker49786__$1,map49782__$1,output_checker49787__$1,fnk49783__$1,value__$2,owner49752__$1,map49781__$1,vec__49779__$1,component__$1,opts__24458__auto____$1,validate__837__auto____$1,ufv____$1,data__24457__auto____$1,input_schema49785__$1,meta49798));
});})(component,map49781,owner,value__$1,map49782,validate__837__auto__,ufv__,output_schema49784,input_schema49785,input_checker49786,output_checker49787,vec__49779,opts__24458__auto__))
;
}
return (new stuttaford.radiant.datoms.t49797(map49780,p__49754,G__49788,owner,output_schema49784,input_checker49786,map49782,output_checker49787,fnk49783,value__$1,owner49752,map49781,vec__49779,component,opts__24458__auto__,validate__837__auto__,ufv__,data__24457__auto__,input_schema49785,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49806 = (function (){var G__49802 = o__840__auto__;return (output_checker49787.cljs$core$IFn$_invoke$arity$1 ? output_checker49787.cljs$core$IFn$_invoke$arity$1(G__49802) : output_checker49787.call(null,G__49802));
})();if(cljs.core.truth_(temp__4126__auto___49806))
{var error__839__auto___49807 = temp__4126__auto___49806;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk49783","fnk49783",-2137032310,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49807], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49784,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49807], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema49784,input_schema49785,input_checker49786,output_checker49787,vec__49779,opts__24458__auto__))
,schema.core.make_fn_schema(output_schema49784,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49785], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24458__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner49752,new cljs.core.Keyword(null,"data","data",-232669377),data__24457__auto__], null));
};
var value = function (data__24457__auto__,owner49752,var_args){
var p__49754 = null;if (arguments.length > 2) {
  p__49754 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return value__delegate.call(this,data__24457__auto__,owner49752,p__49754);};
value.cljs$lang$maxFixedArity = 2;
value.cljs$lang$applyTo = (function (arglist__49808){
var data__24457__auto__ = cljs.core.first(arglist__49808);
arglist__49808 = cljs.core.next(arglist__49808);
var owner49752 = cljs.core.first(arglist__49808);
var p__49754 = cljs.core.rest(arglist__49808);
return value__delegate(data__24457__auto__,owner49752,p__49754);
});
value.cljs$core$IFn$_invoke$arity$variadic = value__delegate;
return value;
})()
;
stuttaford.radiant.datoms.__GT_value = (function() {
var __GT_value = null;
var __GT_value__1 = (function (cursor__24426__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.value,cursor__24426__auto__);
});
var __GT_value__2 = (function (cursor__24426__auto__,m49753){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datoms.value,cursor__24426__auto__,m49753);
});
__GT_value = function(cursor__24426__auto__,m49753){
switch(arguments.length){
case 1:
return __GT_value__1.call(this,cursor__24426__auto__);
case 2:
return __GT_value__2.call(this,cursor__24426__auto__,m49753);
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
stuttaford.radiant.datoms.a_value = (function a_value(p1__49809_SHARP_){return stuttaford.radiant.datoms.value_STAR_(new cljs.core.Keyword(null,"a","a",-2123407586),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49809_SHARP_)));
});
stuttaford.radiant.datoms.v_value = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.value_STAR_,new cljs.core.Keyword(null,"v","v",21465059));
/**
* @param {...*} var_args
*/
stuttaford.radiant.datoms.datoms = (function() { 
var datoms__delegate = function (data__24457__auto__,owner49810,p__49812){var vec__49885 = p__49812;var opts__24458__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49885,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema49888 = schema.core.Any;var input_schema49889 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-db","current-db",213667882)),schema.core.Any,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map49886","map49886",-1584252503,null))], null);var input_checker49890 = schema.core.checker(input_schema49889);var output_checker49891 = schema.core.checker(output_schema49888);return schema.core.schematize_fn(((function (ufv__,output_schema49888,input_schema49889,input_checker49890,output_checker49891,vec__49885,opts__24458__auto__){
return (function fnk49887(G__49892){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49957 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49892], null);var temp__4126__auto___49958 = (function (){var G__49925 = args__838__auto___49957;return (input_checker49890.cljs$core$IFn$_invoke$arity$1 ? input_checker49890.cljs$core$IFn$_invoke$arity$1(G__49925) : input_checker49890.call(null,G__49925));
})();if(cljs.core.truth_(temp__4126__auto___49958))
{var error__839__auto___49959 = temp__4126__auto___49958;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk49887","fnk49887",-858818772,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49959], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49889,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49957,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49959], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map49886 = G__49892;while(true){
if(cljs.core.map_QMARK_(map49886))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map49886], 0))));
}
var data = plumbing.fnk.schema.safe_get(map49886,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var current_datoms_index = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_db = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-db","current-db",213667882),null);var current_datoms_components = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628),cljs.core.PersistentArrayMap.EMPTY);var owner = plumbing.fnk.schema.safe_get(map49886,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datoms.t49926 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datoms.t49926 = (function (vec__49885,output_schema49888,owner,datoms,data,G__49892,map49886,fnk49887,current_datoms_index,current_db,current_datoms_components,output_checker49891,opts__24458__auto__,owner49810,validate__837__auto__,input_checker49890,input_schema49889,ufv__,data__24457__auto__,p__49812,meta49927){
this.vec__49885 = vec__49885;
this.output_schema49888 = output_schema49888;
this.owner = owner;
this.datoms = datoms;
this.data = data;
this.G__49892 = G__49892;
this.map49886 = map49886;
this.fnk49887 = fnk49887;
this.current_datoms_index = current_datoms_index;
this.current_db = current_db;
this.current_datoms_components = current_datoms_components;
this.output_checker49891 = output_checker49891;
this.opts__24458__auto__ = opts__24458__auto__;
this.owner49810 = owner49810;
this.validate__837__auto__ = validate__837__auto__;
this.input_checker49890 = input_checker49890;
this.input_schema49889 = input_schema49889;
this.ufv__ = ufv__;
this.data__24457__auto__ = data__24457__auto__;
this.p__49812 = p__49812;
this.meta49927 = meta49927;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datoms.t49926.cljs$lang$type = true;
stuttaford.radiant.datoms.t49926.cljs$lang$ctorStr = "stuttaford.radiant.datoms/t49926";
stuttaford.radiant.datoms.t49926.cljs$lang$ctorPrWriter = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema49888,input_schema49889,input_checker49890,output_checker49891,vec__49885,opts__24458__auto__){
return (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"stuttaford.radiant.datoms/t49926");
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema49888,input_schema49889,input_checker49890,output_checker49891,vec__49885,opts__24458__auto__))
;
stuttaford.radiant.datoms.t49926.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datoms.t49926.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema49888,input_schema49889,input_checker49890,output_checker49891,vec__49885,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "datoms";
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema49888,input_schema49889,input_checker49890,output_checker49891,vec__49885,opts__24458__auto__))
;
stuttaford.radiant.datoms.t49926.prototype.om$core$IRender$ = true;
stuttaford.radiant.datoms.t49926.prototype.om$core$IRender$render$arity$1 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema49888,input_schema49889,input_checker49890,output_checker49891,vec__49885,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var attrs49929 = stuttaford.radiant.datoms.__GT_inputs.cljs$core$IFn$_invoke$arity$1(self__.data);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs49929))?sablono.interpreter.attributes(attrs49929):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs49929))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49934 = null;return React.DOM.hr(G__49934);
})(),sablono.interpreter.interpret((cljs.core.truth_(self__.current_db)?(function (){var order_fn = stuttaford.radiant.model.order_fn(self__.current_datoms_index);var components = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),(function (){var G__49935 = stuttaford.radiant.model.ensure_components(self__.current_datoms_components);return (order_fn.cljs$core$IFn$_invoke$arity$1 ? order_fn.cljs$core$IFn$_invoke$arity$1(G__49935) : order_fn.call(null,G__49935));
})());var datoms__$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.datoms,self__.current_db,self__.current_datoms_index,components);return stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),stuttaford.radiant.model.cols(self__.current_datoms_index),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (order_fn,components,datoms__$2,attrs49929,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema49888,input_schema49889,input_checker49890,output_checker49891,vec__49885,opts__24458__auto__){
return (function (p__49936){var map__49937 = p__49936;var map__49937__$1 = ((cljs.core.seq_QMARK_(map__49937))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49937):map__49937);var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49937__$1,new cljs.core.Keyword(null,"v","v",21465059));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49937__$1,new cljs.core.Keyword(null,"a","a",-2123407586));var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49937__$1,new cljs.core.Keyword(null,"e","e",1381269198));var G__49938 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__49938) {
case "avet":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.datoms.a_value(a),(function (){var G__49939 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__49939) : stuttaford.radiant.datoms.v_value.call(null,G__49939));
})(),(function (){var G__49940 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__49940) : stuttaford.radiant.datoms.e_value.call(null,G__49940));
})()], null);

break;
case "aevt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.datoms.a_value(a),(function (){var G__49941 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__49941) : stuttaford.radiant.datoms.e_value.call(null,G__49941));
})(),(function (){var G__49942 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__49942) : stuttaford.radiant.datoms.v_value.call(null,G__49942));
})()], null);

break;
case "eavt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49943 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__49943) : stuttaford.radiant.datoms.e_value.call(null,G__49943));
})(),stuttaford.radiant.datoms.a_value(a),(function (){var G__49944 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__49944) : stuttaford.radiant.datoms.v_value.call(null,G__49944));
})()], null);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.current_datoms_index))));

}
});})(order_fn,components,datoms__$2,attrs49929,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema49888,input_schema49889,input_checker49890,output_checker49891,vec__49885,opts__24458__auto__))
,datoms__$2)], null));
})():null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs49929),(function (){var G__49945 = null;return React.DOM.hr(G__49945);
})(),sablono.interpreter.interpret((cljs.core.truth_(self__.current_db)?(function (){var order_fn = stuttaford.radiant.model.order_fn(self__.current_datoms_index);var components = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),(function (){var G__49946 = stuttaford.radiant.model.ensure_components(self__.current_datoms_components);return (order_fn.cljs$core$IFn$_invoke$arity$1 ? order_fn.cljs$core$IFn$_invoke$arity$1(G__49946) : order_fn.call(null,G__49946));
})());var datoms__$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.datoms,self__.current_db,self__.current_datoms_index,components);return stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),stuttaford.radiant.model.cols(self__.current_datoms_index),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (order_fn,components,datoms__$2,attrs49929,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema49888,input_schema49889,input_checker49890,output_checker49891,vec__49885,opts__24458__auto__){
return (function (p__49947){var map__49948 = p__49947;var map__49948__$1 = ((cljs.core.seq_QMARK_(map__49948))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49948):map__49948);var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49948__$1,new cljs.core.Keyword(null,"v","v",21465059));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49948__$1,new cljs.core.Keyword(null,"a","a",-2123407586));var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49948__$1,new cljs.core.Keyword(null,"e","e",1381269198));var G__49949 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__49949) {
case "avet":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.datoms.a_value(a),(function (){var G__49950 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__49950) : stuttaford.radiant.datoms.v_value.call(null,G__49950));
})(),(function (){var G__49951 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__49951) : stuttaford.radiant.datoms.e_value.call(null,G__49951));
})()], null);

break;
case "aevt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.datoms.a_value(a),(function (){var G__49952 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__49952) : stuttaford.radiant.datoms.e_value.call(null,G__49952));
})(),(function (){var G__49953 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__49953) : stuttaford.radiant.datoms.v_value.call(null,G__49953));
})()], null);

break;
case "eavt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49954 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__49954) : stuttaford.radiant.datoms.e_value.call(null,G__49954));
})(),stuttaford.radiant.datoms.a_value(a),(function (){var G__49955 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__49955) : stuttaford.radiant.datoms.v_value.call(null,G__49955));
})()], null);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.current_datoms_index))));

}
});})(order_fn,components,datoms__$2,attrs49929,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema49888,input_schema49889,input_checker49890,output_checker49891,vec__49885,opts__24458__auto__))
,datoms__$2)], null));
})():null))], null))));
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema49888,input_schema49889,input_checker49890,output_checker49891,vec__49885,opts__24458__auto__))
;
stuttaford.radiant.datoms.t49926.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema49888,input_schema49889,input_checker49890,output_checker49891,vec__49885,opts__24458__auto__){
return (function (_49928){var self__ = this;
var _49928__$1 = this;return self__.meta49927;
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema49888,input_schema49889,input_checker49890,output_checker49891,vec__49885,opts__24458__auto__))
;
stuttaford.radiant.datoms.t49926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema49888,input_schema49889,input_checker49890,output_checker49891,vec__49885,opts__24458__auto__){
return (function (_49928,meta49927__$1){var self__ = this;
var _49928__$1 = this;return (new stuttaford.radiant.datoms.t49926(self__.vec__49885,self__.output_schema49888,self__.owner,self__.datoms,self__.data,self__.G__49892,self__.map49886,self__.fnk49887,self__.current_datoms_index,self__.current_db,self__.current_datoms_components,self__.output_checker49891,self__.opts__24458__auto__,self__.owner49810,self__.validate__837__auto__,self__.input_checker49890,self__.input_schema49889,self__.ufv__,self__.data__24457__auto__,self__.p__49812,meta49927__$1));
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema49888,input_schema49889,input_checker49890,output_checker49891,vec__49885,opts__24458__auto__))
;
stuttaford.radiant.datoms.__GT_t49926 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema49888,input_schema49889,input_checker49890,output_checker49891,vec__49885,opts__24458__auto__){
return (function __GT_t49926(vec__49885__$1,output_schema49888__$1,owner__$1,datoms__$1,data__$1,G__49892__$1,map49886__$1,fnk49887__$1,current_datoms_index__$1,current_db__$1,current_datoms_components__$1,output_checker49891__$1,opts__24458__auto____$1,owner49810__$1,validate__837__auto____$1,input_checker49890__$1,input_schema49889__$1,ufv____$1,data__24457__auto____$1,p__49812__$1,meta49927){return (new stuttaford.radiant.datoms.t49926(vec__49885__$1,output_schema49888__$1,owner__$1,datoms__$1,data__$1,G__49892__$1,map49886__$1,fnk49887__$1,current_datoms_index__$1,current_db__$1,current_datoms_components__$1,output_checker49891__$1,opts__24458__auto____$1,owner49810__$1,validate__837__auto____$1,input_checker49890__$1,input_schema49889__$1,ufv____$1,data__24457__auto____$1,p__49812__$1,meta49927));
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema49888,input_schema49889,input_checker49890,output_checker49891,vec__49885,opts__24458__auto__))
;
}
return (new stuttaford.radiant.datoms.t49926(vec__49885,output_schema49888,owner,datoms,data,G__49892,map49886,fnk49887,current_datoms_index,current_db,current_datoms_components,output_checker49891,opts__24458__auto__,owner49810,validate__837__auto__,input_checker49890,input_schema49889,ufv__,data__24457__auto__,p__49812,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49962 = (function (){var G__49956 = o__840__auto__;return (output_checker49891.cljs$core$IFn$_invoke$arity$1 ? output_checker49891.cljs$core$IFn$_invoke$arity$1(G__49956) : output_checker49891.call(null,G__49956));
})();if(cljs.core.truth_(temp__4126__auto___49962))
{var error__839__auto___49963 = temp__4126__auto___49962;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk49887","fnk49887",-858818772,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49963], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49888,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49963], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema49888,input_schema49889,input_checker49890,output_checker49891,vec__49885,opts__24458__auto__))
,schema.core.make_fn_schema(output_schema49888,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49889], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24458__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner49810,new cljs.core.Keyword(null,"data","data",-232669377),data__24457__auto__], null));
};
var datoms = function (data__24457__auto__,owner49810,var_args){
var p__49812 = null;if (arguments.length > 2) {
  p__49812 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datoms__delegate.call(this,data__24457__auto__,owner49810,p__49812);};
datoms.cljs$lang$maxFixedArity = 2;
datoms.cljs$lang$applyTo = (function (arglist__49964){
var data__24457__auto__ = cljs.core.first(arglist__49964);
arglist__49964 = cljs.core.next(arglist__49964);
var owner49810 = cljs.core.first(arglist__49964);
var p__49812 = cljs.core.rest(arglist__49964);
return datoms__delegate(data__24457__auto__,owner49810,p__49812);
});
datoms.cljs$core$IFn$_invoke$arity$variadic = datoms__delegate;
return datoms;
})()
;
stuttaford.radiant.datoms.__GT_datoms = (function() {
var __GT_datoms = null;
var __GT_datoms__1 = (function (cursor__24426__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.datoms,cursor__24426__auto__);
});
var __GT_datoms__2 = (function (cursor__24426__auto__,m49811){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datoms.datoms,cursor__24426__auto__,m49811);
});
__GT_datoms = function(cursor__24426__auto__,m49811){
switch(arguments.length){
case 1:
return __GT_datoms__1.call(this,cursor__24426__auto__);
case 2:
return __GT_datoms__2.call(this,cursor__24426__auto__,m49811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_datoms.cljs$core$IFn$_invoke$arity$1 = __GT_datoms__1;
__GT_datoms.cljs$core$IFn$_invoke$arity$2 = __GT_datoms__2;
return __GT_datoms;
})()
;
//# sourceMappingURL=datoms.js.map