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
stuttaford.radiant.datoms.component_status = (function component_status(p__78008,component_values,component,value){var vec__78011 = p__78008;var c_one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78011,(0),null);var c_two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78011,(1),null);if(cljs.core.truth_(value))
{return "success";
} else
{var vec__78012 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$,component_values);var one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78012,(0),null);var two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78012,(1),null);var three = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78012,(2),null);if(cljs.core.truth_((function (){var and__19697__auto__ = cljs.core.not(one);if(and__19697__auto__)
{var and__19697__auto____$1 = (function (){var or__19711__auto__ = two;if(cljs.core.truth_(or__19711__auto__))
{return or__19711__auto__;
} else
{return three;
}
})();if(cljs.core.truth_(and__19697__auto____$1))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,c_one);
} else
{return and__19697__auto____$1;
}
} else
{return and__19697__auto__;
}
})()))
{return "error";
} else
{if(cljs.core.truth_((function (){var and__19697__auto__ = cljs.core.not(two);if(and__19697__auto__)
{var and__19697__auto____$1 = three;if(cljs.core.truth_(and__19697__auto____$1))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,c_two);
} else
{return and__19697__auto____$1;
}
} else
{return and__19697__auto__;
}
})()))
{return "error";
} else
{return null;

}
}
}
});
stuttaford.radiant.datoms.index_input = (function index_input(c,current_datoms_index){return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__21069__auto__ = (function iter__78023(s__78024){return (new cljs.core.LazySeq(null,(function (){var s__78024__$1 = s__78024;while(true){
var temp__4126__auto__ = cljs.core.seq(s__78024__$1);if(temp__4126__auto__)
{var s__78024__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__78024__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__78024__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__78026 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__78025 = (0);while(true){
if((i__78025 < size__21068__auto__))
{var index = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__78025);cljs.core.chunk_append(b__78026,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__78031 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__78025,index,c__21067__auto__,size__21068__auto__,b__78026,s__78024__$2,temp__4126__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-index","set-datoms-index",-683154215),index], null));
});})(i__78025,index,c__21067__auto__,size__21068__auto__,b__78026,s__78024__$2,temp__4126__auto__))
], null);var G__78031__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,current_datoms_index))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78031,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__78031);return G__78031__$1;
})(),cljs.core.array_seq([clojure.string.upper_case(cljs.core.name(index))], 0)));
{
var G__78033 = (i__78025 + (1));
i__78025 = G__78033;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__78026),iter__78023(cljs.core.chunk_rest(s__78024__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__78026),null);
}
} else
{var index = cljs.core.first(s__78024__$2);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__78032 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (index,s__78024__$2,temp__4126__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-index","set-datoms-index",-683154215),index], null));
});})(index,s__78024__$2,temp__4126__auto__))
], null);var G__78032__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,current_datoms_index))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78032,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__78032);return G__78032__$1;
})(),cljs.core.array_seq([clojure.string.upper_case(cljs.core.name(index))], 0)),iter__78023(cljs.core.rest(s__78024__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__21069__auto__(stuttaford.radiant.model.indexes);
})()], 0)),om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),null], null)], null));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),null], null)], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059),null], null)], null));
})], null),cljs.core.array_seq(["Clear"], 0))], 0));
});
stuttaford.radiant.datoms.component_input = (function component_input(c,components,current_datoms_components,component){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__78044 = {"href": "javascript:", "onClick": (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,null], null)], null));
})};var G__78045 = (function (){var G__78046 = {"className": "glyphicon glyphicon-remove"};return React.DOM.span(G__78046);
})();return React.DOM.a(G__78044,G__78045);
})()),om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),true,new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),clojure.string.upper_case(cljs.core.name(component)),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),stuttaford.radiant.datoms.component_status(components,cljs.core.map.cljs$core$IFn$_invoke$arity$2(current_datoms_components,components),component,(function (){var G__78047 = current_datoms_components;return (component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(G__78047) : component.call(null,G__78047));
})()),new cljs.core.Keyword(null,"value","value",305978217),(function (){var G__78048 = current_datoms_components;return (component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(G__78048) : component.call(null,G__78048));
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__78034_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,p1__78034_SHARP_.target.value], null)], null));
})], null)));
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.datoms.inputs = (function() { 
var inputs__delegate = function (data__24582__auto__,owner78049,p__78051){var vec__78073 = p__78051;var opts__24583__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78073,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema78077 = schema.core.Any;var input_schema78078 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628)),schema.core.Any,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map78074","map78074",-1033525191,null))], null);var input_checker78079 = schema.core.checker(input_schema78078);var output_checker78080 = schema.core.checker(output_schema78077);return schema.core.schematize_fn(((function (ufv__,output_schema78077,input_schema78078,input_checker78079,output_checker78080,vec__78073,opts__24583__auto__){
return (function fnk78076(G__78081){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___78094 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__78081], null);var temp__4126__auto___78095 = (function (){var G__78088 = args__838__auto___78094;return (input_checker78079.cljs$core$IFn$_invoke$arity$1 ? input_checker78079.cljs$core$IFn$_invoke$arity$1(G__78088) : input_checker78079.call(null,G__78088));
})();if(cljs.core.truth_(temp__4126__auto___78095))
{var error__839__auto___78096 = temp__4126__auto___78095;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk78076","fnk78076",1690663453,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___78096], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema78078,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___78094,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___78096], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map78074 = G__78081;while(true){
if(cljs.core.map_QMARK_(map78074))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map78074], 0))));
}
var map78075 = plumbing.fnk.schema.safe_get(map78074,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var current_datoms_index = plumbing.fnk.schema.safe_get(map78075,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_datoms_components = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map78075,new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628),cljs.core.PersistentArrayMap.EMPTY);var owner = plumbing.fnk.schema.safe_get(map78074,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datoms.t78089 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datoms.t78089 = (function (p__78051,vec__78073,G__78081,opts__24583__auto__,owner,output_checker78080,current_datoms_index,input_checker78079,map78075,data__24582__auto__,current_datoms_components,input_schema78078,map78074,inputs,validate__837__auto__,output_schema78077,ufv__,fnk78076,owner78049,meta78090){
this.p__78051 = p__78051;
this.vec__78073 = vec__78073;
this.G__78081 = G__78081;
this.opts__24583__auto__ = opts__24583__auto__;
this.owner = owner;
this.output_checker78080 = output_checker78080;
this.current_datoms_index = current_datoms_index;
this.input_checker78079 = input_checker78079;
this.map78075 = map78075;
this.data__24582__auto__ = data__24582__auto__;
this.current_datoms_components = current_datoms_components;
this.input_schema78078 = input_schema78078;
this.map78074 = map78074;
this.inputs = inputs;
this.validate__837__auto__ = validate__837__auto__;
this.output_schema78077 = output_schema78077;
this.ufv__ = ufv__;
this.fnk78076 = fnk78076;
this.owner78049 = owner78049;
this.meta78090 = meta78090;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datoms.t78089.cljs$lang$type = true;
stuttaford.radiant.datoms.t78089.cljs$lang$ctorStr = "stuttaford.radiant.datoms/t78089";
stuttaford.radiant.datoms.t78089.cljs$lang$ctorPrWriter = ((function (owner,current_datoms_components,current_datoms_index,map78075,validate__837__auto__,ufv__,output_schema78077,input_schema78078,input_checker78079,output_checker78080,vec__78073,opts__24583__auto__){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"stuttaford.radiant.datoms/t78089");
});})(owner,current_datoms_components,current_datoms_index,map78075,validate__837__auto__,ufv__,output_schema78077,input_schema78078,input_checker78079,output_checker78080,vec__78073,opts__24583__auto__))
;
stuttaford.radiant.datoms.t78089.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datoms.t78089.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,current_datoms_components,current_datoms_index,map78075,validate__837__auto__,ufv__,output_schema78077,input_schema78078,input_checker78079,output_checker78080,vec__78073,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "inputs";
});})(owner,current_datoms_components,current_datoms_index,map78075,validate__837__auto__,ufv__,output_schema78077,input_schema78078,input_checker78079,output_checker78080,vec__78073,opts__24583__auto__))
;
stuttaford.radiant.datoms.t78089.prototype.om$core$IRender$ = true;
stuttaford.radiant.datoms.t78089.prototype.om$core$IRender$render$arity$1 = ((function (owner,current_datoms_components,current_datoms_index,map78075,validate__837__auto__,ufv__,output_schema78077,input_schema78078,input_checker78079,output_checker78080,vec__78073,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var components = stuttaford.radiant.model.components(self__.current_datoms_index);var vec__78092 = components;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78092,(0),null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78092,(1),null);var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78092,(2),null);return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"datoms-components-inputs"], null),cljs.core.array_seq([om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),cljs.core.array_seq([stuttaford.radiant.datoms.index_input(c,self__.current_datoms_index)], 0)),om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),cljs.core.array_seq([stuttaford.radiant.datoms.component_input(c,components,self__.current_datoms_components,x)], 0)),om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),cljs.core.array_seq([stuttaford.radiant.datoms.component_input(c,components,self__.current_datoms_components,y)], 0)),om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),cljs.core.array_seq([stuttaford.radiant.datoms.component_input(c,components,self__.current_datoms_components,z)], 0))], 0));
});})(owner,current_datoms_components,current_datoms_index,map78075,validate__837__auto__,ufv__,output_schema78077,input_schema78078,input_checker78079,output_checker78080,vec__78073,opts__24583__auto__))
;
stuttaford.radiant.datoms.t78089.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,current_datoms_components,current_datoms_index,map78075,validate__837__auto__,ufv__,output_schema78077,input_schema78078,input_checker78079,output_checker78080,vec__78073,opts__24583__auto__){
return (function (_78091){var self__ = this;
var _78091__$1 = this;return self__.meta78090;
});})(owner,current_datoms_components,current_datoms_index,map78075,validate__837__auto__,ufv__,output_schema78077,input_schema78078,input_checker78079,output_checker78080,vec__78073,opts__24583__auto__))
;
stuttaford.radiant.datoms.t78089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,current_datoms_components,current_datoms_index,map78075,validate__837__auto__,ufv__,output_schema78077,input_schema78078,input_checker78079,output_checker78080,vec__78073,opts__24583__auto__){
return (function (_78091,meta78090__$1){var self__ = this;
var _78091__$1 = this;return (new stuttaford.radiant.datoms.t78089(self__.p__78051,self__.vec__78073,self__.G__78081,self__.opts__24583__auto__,self__.owner,self__.output_checker78080,self__.current_datoms_index,self__.input_checker78079,self__.map78075,self__.data__24582__auto__,self__.current_datoms_components,self__.input_schema78078,self__.map78074,self__.inputs,self__.validate__837__auto__,self__.output_schema78077,self__.ufv__,self__.fnk78076,self__.owner78049,meta78090__$1));
});})(owner,current_datoms_components,current_datoms_index,map78075,validate__837__auto__,ufv__,output_schema78077,input_schema78078,input_checker78079,output_checker78080,vec__78073,opts__24583__auto__))
;
stuttaford.radiant.datoms.__GT_t78089 = ((function (owner,current_datoms_components,current_datoms_index,map78075,validate__837__auto__,ufv__,output_schema78077,input_schema78078,input_checker78079,output_checker78080,vec__78073,opts__24583__auto__){
return (function __GT_t78089(p__78051__$1,vec__78073__$1,G__78081__$1,opts__24583__auto____$1,owner__$1,output_checker78080__$1,current_datoms_index__$1,input_checker78079__$1,map78075__$1,data__24582__auto____$1,current_datoms_components__$1,input_schema78078__$1,map78074__$1,inputs__$1,validate__837__auto____$1,output_schema78077__$1,ufv____$1,fnk78076__$1,owner78049__$1,meta78090){return (new stuttaford.radiant.datoms.t78089(p__78051__$1,vec__78073__$1,G__78081__$1,opts__24583__auto____$1,owner__$1,output_checker78080__$1,current_datoms_index__$1,input_checker78079__$1,map78075__$1,data__24582__auto____$1,current_datoms_components__$1,input_schema78078__$1,map78074__$1,inputs__$1,validate__837__auto____$1,output_schema78077__$1,ufv____$1,fnk78076__$1,owner78049__$1,meta78090));
});})(owner,current_datoms_components,current_datoms_index,map78075,validate__837__auto__,ufv__,output_schema78077,input_schema78078,input_checker78079,output_checker78080,vec__78073,opts__24583__auto__))
;
}
return (new stuttaford.radiant.datoms.t78089(p__78051,vec__78073,G__78081,opts__24583__auto__,owner,output_checker78080,current_datoms_index,input_checker78079,map78075,data__24582__auto__,current_datoms_components,input_schema78078,map78074,inputs,validate__837__auto__,output_schema78077,ufv__,fnk78076,owner78049,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___78097 = (function (){var G__78093 = o__840__auto__;return (output_checker78080.cljs$core$IFn$_invoke$arity$1 ? output_checker78080.cljs$core$IFn$_invoke$arity$1(G__78093) : output_checker78080.call(null,G__78093));
})();if(cljs.core.truth_(temp__4126__auto___78097))
{var error__839__auto___78098 = temp__4126__auto___78097;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk78076","fnk78076",1690663453,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___78098], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema78077,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___78098], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema78077,input_schema78078,input_checker78079,output_checker78080,vec__78073,opts__24583__auto__))
,schema.core.make_fn_schema(output_schema78077,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema78078], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24583__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner78049,new cljs.core.Keyword(null,"data","data",-232669377),data__24582__auto__], null));
};
var inputs = function (data__24582__auto__,owner78049,var_args){
var p__78051 = null;if (arguments.length > 2) {
  p__78051 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return inputs__delegate.call(this,data__24582__auto__,owner78049,p__78051);};
inputs.cljs$lang$maxFixedArity = 2;
inputs.cljs$lang$applyTo = (function (arglist__78099){
var data__24582__auto__ = cljs.core.first(arglist__78099);
arglist__78099 = cljs.core.next(arglist__78099);
var owner78049 = cljs.core.first(arglist__78099);
var p__78051 = cljs.core.rest(arglist__78099);
return inputs__delegate(data__24582__auto__,owner78049,p__78051);
});
inputs.cljs$core$IFn$_invoke$arity$variadic = inputs__delegate;
return inputs;
})()
;
stuttaford.radiant.datoms.__GT_inputs = (function() {
var __GT_inputs = null;
var __GT_inputs__1 = (function (cursor__24551__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.inputs,cursor__24551__auto__);
});
var __GT_inputs__2 = (function (cursor__24551__auto__,m78050){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datoms.inputs,cursor__24551__auto__,m78050);
});
__GT_inputs = function(cursor__24551__auto__,m78050){
switch(arguments.length){
case 1:
return __GT_inputs__1.call(this,cursor__24551__auto__);
case 2:
return __GT_inputs__2.call(this,cursor__24551__auto__,m78050);
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
var value__delegate = function (data__24582__auto__,owner78100,p__78102){var vec__78127 = p__78102;var opts__24583__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78127,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema78132 = schema.core.Any;var input_schema78133 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component","component",1555936782),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"value","value",305978217),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map78128","map78128",650265013,null))], null);var input_checker78134 = schema.core.checker(input_schema78133);var output_checker78135 = schema.core.checker(output_schema78132);return schema.core.schematize_fn(((function (ufv__,output_schema78132,input_schema78133,input_checker78134,output_checker78135,vec__78127,opts__24583__auto__){
return (function fnk78131(G__78136){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___78151 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__78136], null);var temp__4126__auto___78152 = (function (){var G__78144 = args__838__auto___78151;return (input_checker78134.cljs$core$IFn$_invoke$arity$1 ? input_checker78134.cljs$core$IFn$_invoke$arity$1(G__78144) : input_checker78134.call(null,G__78144));
})();if(cljs.core.truth_(temp__4126__auto___78152))
{var error__839__auto___78153 = temp__4126__auto___78152;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk78131","fnk78131",-1726065275,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___78153], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema78133,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___78151,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___78153], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map78128 = G__78136;while(true){
if(cljs.core.map_QMARK_(map78128))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map78128], 0))));
}
var map78130 = plumbing.fnk.schema.safe_get(map78128,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var value__$1 = plumbing.fnk.schema.safe_get(map78130,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map78128,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map78129 = plumbing.fnk.schema.safe_get(map78128,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component = plumbing.fnk.schema.safe_get(map78129,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));if(typeof stuttaford.radiant.datoms.t78145 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datoms.t78145 = (function (G__78136,opts__24583__auto__,owner,vec__78127,fnk78131,output_schema78132,map78130,p__78102,input_schema78133,value,data__24582__auto__,output_checker78135,component,map78128,map78129,input_checker78134,validate__837__auto__,ufv__,owner78100,meta78146){
this.G__78136 = G__78136;
this.opts__24583__auto__ = opts__24583__auto__;
this.owner = owner;
this.vec__78127 = vec__78127;
this.fnk78131 = fnk78131;
this.output_schema78132 = output_schema78132;
this.map78130 = map78130;
this.p__78102 = p__78102;
this.input_schema78133 = input_schema78133;
this.value = value;
this.data__24582__auto__ = data__24582__auto__;
this.output_checker78135 = output_checker78135;
this.component = component;
this.map78128 = map78128;
this.map78129 = map78129;
this.input_checker78134 = input_checker78134;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.owner78100 = owner78100;
this.meta78146 = meta78146;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datoms.t78145.cljs$lang$type = true;
stuttaford.radiant.datoms.t78145.cljs$lang$ctorStr = "stuttaford.radiant.datoms/t78145";
stuttaford.radiant.datoms.t78145.cljs$lang$ctorPrWriter = ((function (component,map78129,owner,value__$1,map78130,validate__837__auto__,ufv__,output_schema78132,input_schema78133,input_checker78134,output_checker78135,vec__78127,opts__24583__auto__){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"stuttaford.radiant.datoms/t78145");
});})(component,map78129,owner,value__$1,map78130,validate__837__auto__,ufv__,output_schema78132,input_schema78133,input_checker78134,output_checker78135,vec__78127,opts__24583__auto__))
;
stuttaford.radiant.datoms.t78145.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datoms.t78145.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (component,map78129,owner,value__$1,map78130,validate__837__auto__,ufv__,output_schema78132,input_schema78133,input_checker78134,output_checker78135,vec__78127,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "value";
});})(component,map78129,owner,value__$1,map78130,validate__837__auto__,ufv__,output_schema78132,input_schema78133,input_checker78134,output_checker78135,vec__78127,opts__24583__auto__))
;
stuttaford.radiant.datoms.t78145.prototype.om$core$IRender$ = true;
stuttaford.radiant.datoms.t78145.prototype.om$core$IRender$render$arity$1 = ((function (component,map78129,owner,value__$1,map78130,validate__837__auto__,ufv__,output_schema78132,input_schema78133,input_checker78134,output_checker78135,vec__78127,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var G__78148 = {"href": "javascript:", "onClick": ((function (c,___$1,component,map78129,owner,value__$1,map78130,validate__837__auto__,ufv__,output_schema78132,input_schema78133,input_checker78134,output_checker78135,vec__78127,opts__24583__auto__){
return (function (){console.log(self__.owner,c,stuttaford.om.common.control_chan(self__.owner));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.component,self__.value], null)], null));
});})(c,___$1,component,map78129,owner,value__$1,map78130,validate__837__auto__,ufv__,output_schema78132,input_schema78133,input_checker78134,output_checker78135,vec__78127,opts__24583__auto__))
};var G__78149 = sablono.interpreter.interpret(self__.value);return React.DOM.a(G__78148,G__78149);
});})(component,map78129,owner,value__$1,map78130,validate__837__auto__,ufv__,output_schema78132,input_schema78133,input_checker78134,output_checker78135,vec__78127,opts__24583__auto__))
;
stuttaford.radiant.datoms.t78145.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (component,map78129,owner,value__$1,map78130,validate__837__auto__,ufv__,output_schema78132,input_schema78133,input_checker78134,output_checker78135,vec__78127,opts__24583__auto__){
return (function (_78147){var self__ = this;
var _78147__$1 = this;return self__.meta78146;
});})(component,map78129,owner,value__$1,map78130,validate__837__auto__,ufv__,output_schema78132,input_schema78133,input_checker78134,output_checker78135,vec__78127,opts__24583__auto__))
;
stuttaford.radiant.datoms.t78145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (component,map78129,owner,value__$1,map78130,validate__837__auto__,ufv__,output_schema78132,input_schema78133,input_checker78134,output_checker78135,vec__78127,opts__24583__auto__){
return (function (_78147,meta78146__$1){var self__ = this;
var _78147__$1 = this;return (new stuttaford.radiant.datoms.t78145(self__.G__78136,self__.opts__24583__auto__,self__.owner,self__.vec__78127,self__.fnk78131,self__.output_schema78132,self__.map78130,self__.p__78102,self__.input_schema78133,self__.value,self__.data__24582__auto__,self__.output_checker78135,self__.component,self__.map78128,self__.map78129,self__.input_checker78134,self__.validate__837__auto__,self__.ufv__,self__.owner78100,meta78146__$1));
});})(component,map78129,owner,value__$1,map78130,validate__837__auto__,ufv__,output_schema78132,input_schema78133,input_checker78134,output_checker78135,vec__78127,opts__24583__auto__))
;
stuttaford.radiant.datoms.__GT_t78145 = ((function (component,map78129,owner,value__$1,map78130,validate__837__auto__,ufv__,output_schema78132,input_schema78133,input_checker78134,output_checker78135,vec__78127,opts__24583__auto__){
return (function __GT_t78145(G__78136__$1,opts__24583__auto____$1,owner__$1,vec__78127__$1,fnk78131__$1,output_schema78132__$1,map78130__$1,p__78102__$1,input_schema78133__$1,value__$2,data__24582__auto____$1,output_checker78135__$1,component__$1,map78128__$1,map78129__$1,input_checker78134__$1,validate__837__auto____$1,ufv____$1,owner78100__$1,meta78146){return (new stuttaford.radiant.datoms.t78145(G__78136__$1,opts__24583__auto____$1,owner__$1,vec__78127__$1,fnk78131__$1,output_schema78132__$1,map78130__$1,p__78102__$1,input_schema78133__$1,value__$2,data__24582__auto____$1,output_checker78135__$1,component__$1,map78128__$1,map78129__$1,input_checker78134__$1,validate__837__auto____$1,ufv____$1,owner78100__$1,meta78146));
});})(component,map78129,owner,value__$1,map78130,validate__837__auto__,ufv__,output_schema78132,input_schema78133,input_checker78134,output_checker78135,vec__78127,opts__24583__auto__))
;
}
return (new stuttaford.radiant.datoms.t78145(G__78136,opts__24583__auto__,owner,vec__78127,fnk78131,output_schema78132,map78130,p__78102,input_schema78133,value__$1,data__24582__auto__,output_checker78135,component,map78128,map78129,input_checker78134,validate__837__auto__,ufv__,owner78100,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___78154 = (function (){var G__78150 = o__840__auto__;return (output_checker78135.cljs$core$IFn$_invoke$arity$1 ? output_checker78135.cljs$core$IFn$_invoke$arity$1(G__78150) : output_checker78135.call(null,G__78150));
})();if(cljs.core.truth_(temp__4126__auto___78154))
{var error__839__auto___78155 = temp__4126__auto___78154;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk78131","fnk78131",-1726065275,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___78155], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema78132,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___78155], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema78132,input_schema78133,input_checker78134,output_checker78135,vec__78127,opts__24583__auto__))
,schema.core.make_fn_schema(output_schema78132,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema78133], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24583__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner78100,new cljs.core.Keyword(null,"data","data",-232669377),data__24582__auto__], null));
};
var value = function (data__24582__auto__,owner78100,var_args){
var p__78102 = null;if (arguments.length > 2) {
  p__78102 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return value__delegate.call(this,data__24582__auto__,owner78100,p__78102);};
value.cljs$lang$maxFixedArity = 2;
value.cljs$lang$applyTo = (function (arglist__78156){
var data__24582__auto__ = cljs.core.first(arglist__78156);
arglist__78156 = cljs.core.next(arglist__78156);
var owner78100 = cljs.core.first(arglist__78156);
var p__78102 = cljs.core.rest(arglist__78156);
return value__delegate(data__24582__auto__,owner78100,p__78102);
});
value.cljs$core$IFn$_invoke$arity$variadic = value__delegate;
return value;
})()
;
stuttaford.radiant.datoms.__GT_value = (function() {
var __GT_value = null;
var __GT_value__1 = (function (cursor__24551__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.value,cursor__24551__auto__);
});
var __GT_value__2 = (function (cursor__24551__auto__,m78101){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datoms.value,cursor__24551__auto__,m78101);
});
__GT_value = function(cursor__24551__auto__,m78101){
switch(arguments.length){
case 1:
return __GT_value__1.call(this,cursor__24551__auto__);
case 2:
return __GT_value__2.call(this,cursor__24551__auto__,m78101);
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
stuttaford.radiant.datoms.a_value = (function a_value(p1__78157_SHARP_){return stuttaford.radiant.datoms.value_STAR_(new cljs.core.Keyword(null,"a","a",-2123407586),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__78157_SHARP_)));
});
stuttaford.radiant.datoms.v_value = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.value_STAR_,new cljs.core.Keyword(null,"v","v",21465059));
/**
* @param {...*} var_args
*/
stuttaford.radiant.datoms.datoms = (function() { 
var datoms__delegate = function (data__24582__auto__,owner78158,p__78160){var vec__78233 = p__78160;var opts__24583__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78233,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema78236 = schema.core.Any;var input_schema78237 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-db","current-db",213667882)),schema.core.Any,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map78234","map78234",-1997220030,null))], null);var input_checker78238 = schema.core.checker(input_schema78237);var output_checker78239 = schema.core.checker(output_schema78236);return schema.core.schematize_fn(((function (ufv__,output_schema78236,input_schema78237,input_checker78238,output_checker78239,vec__78233,opts__24583__auto__){
return (function fnk78235(G__78240){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___78305 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__78240], null);var temp__4126__auto___78306 = (function (){var G__78273 = args__838__auto___78305;return (input_checker78238.cljs$core$IFn$_invoke$arity$1 ? input_checker78238.cljs$core$IFn$_invoke$arity$1(G__78273) : input_checker78238.call(null,G__78273));
})();if(cljs.core.truth_(temp__4126__auto___78306))
{var error__839__auto___78307 = temp__4126__auto___78306;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk78235","fnk78235",1105755695,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___78307], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema78237,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___78305,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___78307], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map78234 = G__78240;while(true){
if(cljs.core.map_QMARK_(map78234))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map78234], 0))));
}
var data = plumbing.fnk.schema.safe_get(map78234,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var current_datoms_index = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_db = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-db","current-db",213667882),null);var current_datoms_components = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628),cljs.core.PersistentArrayMap.EMPTY);var owner = plumbing.fnk.schema.safe_get(map78234,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datoms.t78274 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datoms.t78274 = (function (owner78158,map78234,opts__24583__auto__,owner,datoms,output_schema78236,output_checker78239,vec__78233,data,current_datoms_index,fnk78235,current_db,data__24582__auto__,current_datoms_components,input_schema78237,p__78160,validate__837__auto__,ufv__,G__78240,input_checker78238,meta78275){
this.owner78158 = owner78158;
this.map78234 = map78234;
this.opts__24583__auto__ = opts__24583__auto__;
this.owner = owner;
this.datoms = datoms;
this.output_schema78236 = output_schema78236;
this.output_checker78239 = output_checker78239;
this.vec__78233 = vec__78233;
this.data = data;
this.current_datoms_index = current_datoms_index;
this.fnk78235 = fnk78235;
this.current_db = current_db;
this.data__24582__auto__ = data__24582__auto__;
this.current_datoms_components = current_datoms_components;
this.input_schema78237 = input_schema78237;
this.p__78160 = p__78160;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.G__78240 = G__78240;
this.input_checker78238 = input_checker78238;
this.meta78275 = meta78275;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datoms.t78274.cljs$lang$type = true;
stuttaford.radiant.datoms.t78274.cljs$lang$ctorStr = "stuttaford.radiant.datoms/t78274";
stuttaford.radiant.datoms.t78274.cljs$lang$ctorPrWriter = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema78236,input_schema78237,input_checker78238,output_checker78239,vec__78233,opts__24583__auto__){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"stuttaford.radiant.datoms/t78274");
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema78236,input_schema78237,input_checker78238,output_checker78239,vec__78233,opts__24583__auto__))
;
stuttaford.radiant.datoms.t78274.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datoms.t78274.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema78236,input_schema78237,input_checker78238,output_checker78239,vec__78233,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "datoms";
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema78236,input_schema78237,input_checker78238,output_checker78239,vec__78233,opts__24583__auto__))
;
stuttaford.radiant.datoms.t78274.prototype.om$core$IRender$ = true;
stuttaford.radiant.datoms.t78274.prototype.om$core$IRender$render$arity$1 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema78236,input_schema78237,input_checker78238,output_checker78239,vec__78233,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var attrs78277 = stuttaford.radiant.datoms.__GT_inputs.cljs$core$IFn$_invoke$arity$1(self__.data);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs78277))?sablono.interpreter.attributes(attrs78277):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs78277))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__78282 = null;return React.DOM.hr(G__78282);
})(),sablono.interpreter.interpret((cljs.core.truth_(self__.current_db)?(function (){var order_fn = stuttaford.radiant.model.order_fn(self__.current_datoms_index);var components = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),(function (){var G__78283 = stuttaford.radiant.model.ensure_components(self__.current_datoms_components);return (order_fn.cljs$core$IFn$_invoke$arity$1 ? order_fn.cljs$core$IFn$_invoke$arity$1(G__78283) : order_fn.call(null,G__78283));
})());var datoms__$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.datoms,self__.current_db,self__.current_datoms_index,components);return stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),stuttaford.radiant.model.cols(self__.current_datoms_index),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (order_fn,components,datoms__$2,attrs78277,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema78236,input_schema78237,input_checker78238,output_checker78239,vec__78233,opts__24583__auto__){
return (function (p__78284){var map__78285 = p__78284;var map__78285__$1 = ((cljs.core.seq_QMARK_(map__78285))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78285):map__78285);var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78285__$1,new cljs.core.Keyword(null,"v","v",21465059));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78285__$1,new cljs.core.Keyword(null,"a","a",-2123407586));var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78285__$1,new cljs.core.Keyword(null,"e","e",1381269198));var G__78286 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__78286) {
case "avet":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.datoms.a_value(a),(function (){var G__78287 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__78287) : stuttaford.radiant.datoms.v_value.call(null,G__78287));
})(),(function (){var G__78288 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__78288) : stuttaford.radiant.datoms.e_value.call(null,G__78288));
})()], null);

break;
case "aevt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.datoms.a_value(a),(function (){var G__78289 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__78289) : stuttaford.radiant.datoms.e_value.call(null,G__78289));
})(),(function (){var G__78290 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__78290) : stuttaford.radiant.datoms.v_value.call(null,G__78290));
})()], null);

break;
case "eavt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__78291 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__78291) : stuttaford.radiant.datoms.e_value.call(null,G__78291));
})(),stuttaford.radiant.datoms.a_value(a),(function (){var G__78292 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__78292) : stuttaford.radiant.datoms.v_value.call(null,G__78292));
})()], null);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.current_datoms_index))));

}
});})(order_fn,components,datoms__$2,attrs78277,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema78236,input_schema78237,input_checker78238,output_checker78239,vec__78233,opts__24583__auto__))
,datoms__$2)], null));
})():null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs78277),(function (){var G__78293 = null;return React.DOM.hr(G__78293);
})(),sablono.interpreter.interpret((cljs.core.truth_(self__.current_db)?(function (){var order_fn = stuttaford.radiant.model.order_fn(self__.current_datoms_index);var components = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),(function (){var G__78294 = stuttaford.radiant.model.ensure_components(self__.current_datoms_components);return (order_fn.cljs$core$IFn$_invoke$arity$1 ? order_fn.cljs$core$IFn$_invoke$arity$1(G__78294) : order_fn.call(null,G__78294));
})());var datoms__$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.datoms,self__.current_db,self__.current_datoms_index,components);return stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),stuttaford.radiant.model.cols(self__.current_datoms_index),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (order_fn,components,datoms__$2,attrs78277,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema78236,input_schema78237,input_checker78238,output_checker78239,vec__78233,opts__24583__auto__){
return (function (p__78295){var map__78296 = p__78295;var map__78296__$1 = ((cljs.core.seq_QMARK_(map__78296))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78296):map__78296);var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78296__$1,new cljs.core.Keyword(null,"v","v",21465059));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78296__$1,new cljs.core.Keyword(null,"a","a",-2123407586));var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78296__$1,new cljs.core.Keyword(null,"e","e",1381269198));var G__78297 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__78297) {
case "avet":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.datoms.a_value(a),(function (){var G__78298 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__78298) : stuttaford.radiant.datoms.v_value.call(null,G__78298));
})(),(function (){var G__78299 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__78299) : stuttaford.radiant.datoms.e_value.call(null,G__78299));
})()], null);

break;
case "aevt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.datoms.a_value(a),(function (){var G__78300 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__78300) : stuttaford.radiant.datoms.e_value.call(null,G__78300));
})(),(function (){var G__78301 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__78301) : stuttaford.radiant.datoms.v_value.call(null,G__78301));
})()], null);

break;
case "eavt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__78302 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__78302) : stuttaford.radiant.datoms.e_value.call(null,G__78302));
})(),stuttaford.radiant.datoms.a_value(a),(function (){var G__78303 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__78303) : stuttaford.radiant.datoms.v_value.call(null,G__78303));
})()], null);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.current_datoms_index))));

}
});})(order_fn,components,datoms__$2,attrs78277,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema78236,input_schema78237,input_checker78238,output_checker78239,vec__78233,opts__24583__auto__))
,datoms__$2)], null));
})():null))], null))));
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema78236,input_schema78237,input_checker78238,output_checker78239,vec__78233,opts__24583__auto__))
;
stuttaford.radiant.datoms.t78274.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema78236,input_schema78237,input_checker78238,output_checker78239,vec__78233,opts__24583__auto__){
return (function (_78276){var self__ = this;
var _78276__$1 = this;return self__.meta78275;
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema78236,input_schema78237,input_checker78238,output_checker78239,vec__78233,opts__24583__auto__))
;
stuttaford.radiant.datoms.t78274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema78236,input_schema78237,input_checker78238,output_checker78239,vec__78233,opts__24583__auto__){
return (function (_78276,meta78275__$1){var self__ = this;
var _78276__$1 = this;return (new stuttaford.radiant.datoms.t78274(self__.owner78158,self__.map78234,self__.opts__24583__auto__,self__.owner,self__.datoms,self__.output_schema78236,self__.output_checker78239,self__.vec__78233,self__.data,self__.current_datoms_index,self__.fnk78235,self__.current_db,self__.data__24582__auto__,self__.current_datoms_components,self__.input_schema78237,self__.p__78160,self__.validate__837__auto__,self__.ufv__,self__.G__78240,self__.input_checker78238,meta78275__$1));
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema78236,input_schema78237,input_checker78238,output_checker78239,vec__78233,opts__24583__auto__))
;
stuttaford.radiant.datoms.__GT_t78274 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema78236,input_schema78237,input_checker78238,output_checker78239,vec__78233,opts__24583__auto__){
return (function __GT_t78274(owner78158__$1,map78234__$1,opts__24583__auto____$1,owner__$1,datoms__$1,output_schema78236__$1,output_checker78239__$1,vec__78233__$1,data__$1,current_datoms_index__$1,fnk78235__$1,current_db__$1,data__24582__auto____$1,current_datoms_components__$1,input_schema78237__$1,p__78160__$1,validate__837__auto____$1,ufv____$1,G__78240__$1,input_checker78238__$1,meta78275){return (new stuttaford.radiant.datoms.t78274(owner78158__$1,map78234__$1,opts__24583__auto____$1,owner__$1,datoms__$1,output_schema78236__$1,output_checker78239__$1,vec__78233__$1,data__$1,current_datoms_index__$1,fnk78235__$1,current_db__$1,data__24582__auto____$1,current_datoms_components__$1,input_schema78237__$1,p__78160__$1,validate__837__auto____$1,ufv____$1,G__78240__$1,input_checker78238__$1,meta78275));
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema78236,input_schema78237,input_checker78238,output_checker78239,vec__78233,opts__24583__auto__))
;
}
return (new stuttaford.radiant.datoms.t78274(owner78158,map78234,opts__24583__auto__,owner,datoms,output_schema78236,output_checker78239,vec__78233,data,current_datoms_index,fnk78235,current_db,data__24582__auto__,current_datoms_components,input_schema78237,p__78160,validate__837__auto__,ufv__,G__78240,input_checker78238,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___78310 = (function (){var G__78304 = o__840__auto__;return (output_checker78239.cljs$core$IFn$_invoke$arity$1 ? output_checker78239.cljs$core$IFn$_invoke$arity$1(G__78304) : output_checker78239.call(null,G__78304));
})();if(cljs.core.truth_(temp__4126__auto___78310))
{var error__839__auto___78311 = temp__4126__auto___78310;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk78235","fnk78235",1105755695,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___78311], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema78236,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___78311], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema78236,input_schema78237,input_checker78238,output_checker78239,vec__78233,opts__24583__auto__))
,schema.core.make_fn_schema(output_schema78236,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema78237], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24583__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner78158,new cljs.core.Keyword(null,"data","data",-232669377),data__24582__auto__], null));
};
var datoms = function (data__24582__auto__,owner78158,var_args){
var p__78160 = null;if (arguments.length > 2) {
  p__78160 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datoms__delegate.call(this,data__24582__auto__,owner78158,p__78160);};
datoms.cljs$lang$maxFixedArity = 2;
datoms.cljs$lang$applyTo = (function (arglist__78312){
var data__24582__auto__ = cljs.core.first(arglist__78312);
arglist__78312 = cljs.core.next(arglist__78312);
var owner78158 = cljs.core.first(arglist__78312);
var p__78160 = cljs.core.rest(arglist__78312);
return datoms__delegate(data__24582__auto__,owner78158,p__78160);
});
datoms.cljs$core$IFn$_invoke$arity$variadic = datoms__delegate;
return datoms;
})()
;
stuttaford.radiant.datoms.__GT_datoms = (function() {
var __GT_datoms = null;
var __GT_datoms__1 = (function (cursor__24551__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.datoms,cursor__24551__auto__);
});
var __GT_datoms__2 = (function (cursor__24551__auto__,m78159){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datoms.datoms,cursor__24551__auto__,m78159);
});
__GT_datoms = function(cursor__24551__auto__,m78159){
switch(arguments.length){
case 1:
return __GT_datoms__1.call(this,cursor__24551__auto__);
case 2:
return __GT_datoms__2.call(this,cursor__24551__auto__,m78159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_datoms.cljs$core$IFn$_invoke$arity$1 = __GT_datoms__1;
__GT_datoms.cljs$core$IFn$_invoke$arity$2 = __GT_datoms__2;
return __GT_datoms;
})()
;
//# sourceMappingURL=datoms.js.map