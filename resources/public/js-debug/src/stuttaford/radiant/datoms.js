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
stuttaford.radiant.datoms.component_status = (function component_status(p__51248,component_values,component,value){var vec__51251 = p__51248;var c_one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51251,(0),null);var c_two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51251,(1),null);if(cljs.core.truth_(value))
{return "success";
} else
{var vec__51252 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$,component_values);var one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51252,(0),null);var two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51252,(1),null);var three = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51252,(2),null);if(cljs.core.truth_((function (){var and__19277__auto__ = cljs.core.not(one);if(and__19277__auto__)
{var and__19277__auto____$1 = (function (){var or__19289__auto__ = two;if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return three;
}
})();if(cljs.core.truth_(and__19277__auto____$1))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,c_one);
} else
{return and__19277__auto____$1;
}
} else
{return and__19277__auto__;
}
})()))
{return "error";
} else
{if(cljs.core.truth_((function (){var and__19277__auto__ = cljs.core.not(two);if(and__19277__auto__)
{var and__19277__auto____$1 = three;if(cljs.core.truth_(and__19277__auto____$1))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,c_two);
} else
{return and__19277__auto____$1;
}
} else
{return and__19277__auto__;
}
})()))
{return "error";
} else
{return null;

}
}
}
});
stuttaford.radiant.datoms.index_input = (function index_input(c,current_datoms_index){return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20684__auto__ = (function iter__51263(s__51264){return (new cljs.core.LazySeq(null,(function (){var s__51264__$1 = s__51264;while(true){
var temp__4126__auto__ = cljs.core.seq(s__51264__$1);if(temp__4126__auto__)
{var s__51264__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__51264__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__51264__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__51266 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__51265 = (0);while(true){
if((i__51265 < size__20683__auto__))
{var index = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__51265);cljs.core.chunk_append(b__51266,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__51271 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__51265,index,c__20682__auto__,size__20683__auto__,b__51266,s__51264__$2,temp__4126__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-index","set-datoms-index",-683154215),index], null));
});})(i__51265,index,c__20682__auto__,size__20683__auto__,b__51266,s__51264__$2,temp__4126__auto__))
], null);var G__51271__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,current_datoms_index))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51271,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__51271);return G__51271__$1;
})(),cljs.core.array_seq([clojure.string.upper_case(cljs.core.name(index))], 0)));
{
var G__51273 = (i__51265 + (1));
i__51265 = G__51273;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__51266),iter__51263(cljs.core.chunk_rest(s__51264__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__51266),null);
}
} else
{var index = cljs.core.first(s__51264__$2);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__51272 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (index,s__51264__$2,temp__4126__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-index","set-datoms-index",-683154215),index], null));
});})(index,s__51264__$2,temp__4126__auto__))
], null);var G__51272__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,current_datoms_index))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51272,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__51272);return G__51272__$1;
})(),cljs.core.array_seq([clojure.string.upper_case(cljs.core.name(index))], 0)),iter__51263(cljs.core.rest(s__51264__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20684__auto__(stuttaford.radiant.model.indexes);
})()], 0)),om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),null], null)], null));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),null], null)], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059),null], null)], null));
})], null),cljs.core.array_seq(["Clear"], 0))], 0));
});
stuttaford.radiant.datoms.component_input = (function component_input(c,components,current_datoms_components,component){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__51284 = {"href": "javascript:", "onClick": (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,null], null)], null));
})};var G__51285 = (function (){var G__51286 = {"className": "glyphicon glyphicon-remove"};return React.DOM.span(G__51286);
})();return React.DOM.a(G__51284,G__51285);
})()),om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),true,new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),clojure.string.upper_case(cljs.core.name(component)),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),stuttaford.radiant.datoms.component_status(components,cljs.core.map.cljs$core$IFn$_invoke$arity$2(current_datoms_components,components),component,(function (){var G__51287 = current_datoms_components;return (component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(G__51287) : component.call(null,G__51287));
})()),new cljs.core.Keyword(null,"value","value",305978217),(function (){var G__51288 = current_datoms_components;return (component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(G__51288) : component.call(null,G__51288));
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__51274_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,p1__51274_SHARP_.target.value], null)], null));
})], null)));
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.datoms.inputs = (function() { 
var inputs__delegate = function (data__24197__auto__,owner51289,p__51291){var vec__51313 = p__51291;var opts__24198__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51313,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema51317 = schema.core.Any;var input_schema51318 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628)),schema.core.Any,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map51314","map51314",-1492982218,null))], null);var input_checker51319 = schema.core.checker(input_schema51318);var output_checker51320 = schema.core.checker(output_schema51317);return schema.core.schematize_fn(((function (ufv__,output_schema51317,input_schema51318,input_checker51319,output_checker51320,vec__51313,opts__24198__auto__){
return (function fnk51316(G__51321){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___51334 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__51321], null);var temp__4126__auto___51335 = (function (){var G__51328 = args__838__auto___51334;return (input_checker51319.cljs$core$IFn$_invoke$arity$1 ? input_checker51319.cljs$core$IFn$_invoke$arity$1(G__51328) : input_checker51319.call(null,G__51328));
})();if(cljs.core.truth_(temp__4126__auto___51335))
{var error__839__auto___51336 = temp__4126__auto___51335;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk51316","fnk51316",1559016494,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___51336], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema51318,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___51334,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___51336], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map51314 = G__51321;while(true){
if(cljs.core.map_QMARK_(map51314))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map51314], 0))));
}
var map51315 = plumbing.fnk.schema.safe_get(map51314,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var current_datoms_index = plumbing.fnk.schema.safe_get(map51315,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_datoms_components = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map51315,new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628),cljs.core.PersistentArrayMap.EMPTY);var owner = plumbing.fnk.schema.safe_get(map51314,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datoms.t51329 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datoms.t51329 = (function (output_schema51317,data__24197__auto__,map51315,owner,owner51289,vec__51313,output_checker51320,fnk51316,current_datoms_index,opts__24198__auto__,p__51291,input_schema51318,current_datoms_components,map51314,input_checker51319,inputs,validate__837__auto__,G__51321,ufv__,meta51330){
this.output_schema51317 = output_schema51317;
this.data__24197__auto__ = data__24197__auto__;
this.map51315 = map51315;
this.owner = owner;
this.owner51289 = owner51289;
this.vec__51313 = vec__51313;
this.output_checker51320 = output_checker51320;
this.fnk51316 = fnk51316;
this.current_datoms_index = current_datoms_index;
this.opts__24198__auto__ = opts__24198__auto__;
this.p__51291 = p__51291;
this.input_schema51318 = input_schema51318;
this.current_datoms_components = current_datoms_components;
this.map51314 = map51314;
this.input_checker51319 = input_checker51319;
this.inputs = inputs;
this.validate__837__auto__ = validate__837__auto__;
this.G__51321 = G__51321;
this.ufv__ = ufv__;
this.meta51330 = meta51330;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datoms.t51329.cljs$lang$type = true;
stuttaford.radiant.datoms.t51329.cljs$lang$ctorStr = "stuttaford.radiant.datoms/t51329";
stuttaford.radiant.datoms.t51329.cljs$lang$ctorPrWriter = ((function (owner,current_datoms_components,current_datoms_index,map51315,validate__837__auto__,ufv__,output_schema51317,input_schema51318,input_checker51319,output_checker51320,vec__51313,opts__24198__auto__){
return (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"stuttaford.radiant.datoms/t51329");
});})(owner,current_datoms_components,current_datoms_index,map51315,validate__837__auto__,ufv__,output_schema51317,input_schema51318,input_checker51319,output_checker51320,vec__51313,opts__24198__auto__))
;
stuttaford.radiant.datoms.t51329.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datoms.t51329.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,current_datoms_components,current_datoms_index,map51315,validate__837__auto__,ufv__,output_schema51317,input_schema51318,input_checker51319,output_checker51320,vec__51313,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "inputs";
});})(owner,current_datoms_components,current_datoms_index,map51315,validate__837__auto__,ufv__,output_schema51317,input_schema51318,input_checker51319,output_checker51320,vec__51313,opts__24198__auto__))
;
stuttaford.radiant.datoms.t51329.prototype.om$core$IRender$ = true;
stuttaford.radiant.datoms.t51329.prototype.om$core$IRender$render$arity$1 = ((function (owner,current_datoms_components,current_datoms_index,map51315,validate__837__auto__,ufv__,output_schema51317,input_schema51318,input_checker51319,output_checker51320,vec__51313,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var components = stuttaford.radiant.model.components(self__.current_datoms_index);var vec__51332 = components;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51332,(0),null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51332,(1),null);var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51332,(2),null);return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"datoms-components-inputs"], null),cljs.core.array_seq([om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),cljs.core.array_seq([stuttaford.radiant.datoms.index_input(c,self__.current_datoms_index)], 0)),om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),cljs.core.array_seq([stuttaford.radiant.datoms.component_input(c,components,self__.current_datoms_components,x)], 0)),om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),cljs.core.array_seq([stuttaford.radiant.datoms.component_input(c,components,self__.current_datoms_components,y)], 0)),om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),cljs.core.array_seq([stuttaford.radiant.datoms.component_input(c,components,self__.current_datoms_components,z)], 0))], 0));
});})(owner,current_datoms_components,current_datoms_index,map51315,validate__837__auto__,ufv__,output_schema51317,input_schema51318,input_checker51319,output_checker51320,vec__51313,opts__24198__auto__))
;
stuttaford.radiant.datoms.t51329.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,current_datoms_components,current_datoms_index,map51315,validate__837__auto__,ufv__,output_schema51317,input_schema51318,input_checker51319,output_checker51320,vec__51313,opts__24198__auto__){
return (function (_51331){var self__ = this;
var _51331__$1 = this;return self__.meta51330;
});})(owner,current_datoms_components,current_datoms_index,map51315,validate__837__auto__,ufv__,output_schema51317,input_schema51318,input_checker51319,output_checker51320,vec__51313,opts__24198__auto__))
;
stuttaford.radiant.datoms.t51329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,current_datoms_components,current_datoms_index,map51315,validate__837__auto__,ufv__,output_schema51317,input_schema51318,input_checker51319,output_checker51320,vec__51313,opts__24198__auto__){
return (function (_51331,meta51330__$1){var self__ = this;
var _51331__$1 = this;return (new stuttaford.radiant.datoms.t51329(self__.output_schema51317,self__.data__24197__auto__,self__.map51315,self__.owner,self__.owner51289,self__.vec__51313,self__.output_checker51320,self__.fnk51316,self__.current_datoms_index,self__.opts__24198__auto__,self__.p__51291,self__.input_schema51318,self__.current_datoms_components,self__.map51314,self__.input_checker51319,self__.inputs,self__.validate__837__auto__,self__.G__51321,self__.ufv__,meta51330__$1));
});})(owner,current_datoms_components,current_datoms_index,map51315,validate__837__auto__,ufv__,output_schema51317,input_schema51318,input_checker51319,output_checker51320,vec__51313,opts__24198__auto__))
;
stuttaford.radiant.datoms.__GT_t51329 = ((function (owner,current_datoms_components,current_datoms_index,map51315,validate__837__auto__,ufv__,output_schema51317,input_schema51318,input_checker51319,output_checker51320,vec__51313,opts__24198__auto__){
return (function __GT_t51329(output_schema51317__$1,data__24197__auto____$1,map51315__$1,owner__$1,owner51289__$1,vec__51313__$1,output_checker51320__$1,fnk51316__$1,current_datoms_index__$1,opts__24198__auto____$1,p__51291__$1,input_schema51318__$1,current_datoms_components__$1,map51314__$1,input_checker51319__$1,inputs__$1,validate__837__auto____$1,G__51321__$1,ufv____$1,meta51330){return (new stuttaford.radiant.datoms.t51329(output_schema51317__$1,data__24197__auto____$1,map51315__$1,owner__$1,owner51289__$1,vec__51313__$1,output_checker51320__$1,fnk51316__$1,current_datoms_index__$1,opts__24198__auto____$1,p__51291__$1,input_schema51318__$1,current_datoms_components__$1,map51314__$1,input_checker51319__$1,inputs__$1,validate__837__auto____$1,G__51321__$1,ufv____$1,meta51330));
});})(owner,current_datoms_components,current_datoms_index,map51315,validate__837__auto__,ufv__,output_schema51317,input_schema51318,input_checker51319,output_checker51320,vec__51313,opts__24198__auto__))
;
}
return (new stuttaford.radiant.datoms.t51329(output_schema51317,data__24197__auto__,map51315,owner,owner51289,vec__51313,output_checker51320,fnk51316,current_datoms_index,opts__24198__auto__,p__51291,input_schema51318,current_datoms_components,map51314,input_checker51319,inputs,validate__837__auto__,G__51321,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___51337 = (function (){var G__51333 = o__840__auto__;return (output_checker51320.cljs$core$IFn$_invoke$arity$1 ? output_checker51320.cljs$core$IFn$_invoke$arity$1(G__51333) : output_checker51320.call(null,G__51333));
})();if(cljs.core.truth_(temp__4126__auto___51337))
{var error__839__auto___51338 = temp__4126__auto___51337;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk51316","fnk51316",1559016494,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___51338], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema51317,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___51338], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema51317,input_schema51318,input_checker51319,output_checker51320,vec__51313,opts__24198__auto__))
,schema.core.make_fn_schema(output_schema51317,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema51318], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24198__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner51289,new cljs.core.Keyword(null,"data","data",-232669377),data__24197__auto__], null));
};
var inputs = function (data__24197__auto__,owner51289,var_args){
var p__51291 = null;if (arguments.length > 2) {
  p__51291 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return inputs__delegate.call(this,data__24197__auto__,owner51289,p__51291);};
inputs.cljs$lang$maxFixedArity = 2;
inputs.cljs$lang$applyTo = (function (arglist__51339){
var data__24197__auto__ = cljs.core.first(arglist__51339);
arglist__51339 = cljs.core.next(arglist__51339);
var owner51289 = cljs.core.first(arglist__51339);
var p__51291 = cljs.core.rest(arglist__51339);
return inputs__delegate(data__24197__auto__,owner51289,p__51291);
});
inputs.cljs$core$IFn$_invoke$arity$variadic = inputs__delegate;
return inputs;
})()
;
stuttaford.radiant.datoms.__GT_inputs = (function() {
var __GT_inputs = null;
var __GT_inputs__1 = (function (cursor__24166__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.inputs,cursor__24166__auto__);
});
var __GT_inputs__2 = (function (cursor__24166__auto__,m51290){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datoms.inputs,cursor__24166__auto__,m51290);
});
__GT_inputs = function(cursor__24166__auto__,m51290){
switch(arguments.length){
case 1:
return __GT_inputs__1.call(this,cursor__24166__auto__);
case 2:
return __GT_inputs__2.call(this,cursor__24166__auto__,m51290);
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
var value__delegate = function (data__24197__auto__,owner51340,p__51342){var vec__51367 = p__51342;var opts__24198__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51367,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema51372 = schema.core.Any;var input_schema51373 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component","component",1555936782),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"value","value",305978217),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map51368","map51368",-1445344844,null))], null);var input_checker51374 = schema.core.checker(input_schema51373);var output_checker51375 = schema.core.checker(output_schema51372);return schema.core.schematize_fn(((function (ufv__,output_schema51372,input_schema51373,input_checker51374,output_checker51375,vec__51367,opts__24198__auto__){
return (function fnk51371(G__51376){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___51391 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__51376], null);var temp__4126__auto___51392 = (function (){var G__51384 = args__838__auto___51391;return (input_checker51374.cljs$core$IFn$_invoke$arity$1 ? input_checker51374.cljs$core$IFn$_invoke$arity$1(G__51384) : input_checker51374.call(null,G__51384));
})();if(cljs.core.truth_(temp__4126__auto___51392))
{var error__839__auto___51393 = temp__4126__auto___51392;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk51371","fnk51371",453126591,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___51393], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema51373,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___51391,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___51393], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map51368 = G__51376;while(true){
if(cljs.core.map_QMARK_(map51368))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map51368], 0))));
}
var map51370 = plumbing.fnk.schema.safe_get(map51368,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var value__$1 = plumbing.fnk.schema.safe_get(map51370,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map51368,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map51369 = plumbing.fnk.schema.safe_get(map51368,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component = plumbing.fnk.schema.safe_get(map51369,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));if(typeof stuttaford.radiant.datoms.t51385 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datoms.t51385 = (function (owner51340,data__24197__auto__,p__51342,owner,output_schema51372,output_checker51375,map51370,opts__24198__auto__,map51369,value,map51368,component,G__51376,input_checker51374,validate__837__auto__,vec__51367,ufv__,input_schema51373,fnk51371,meta51386){
this.owner51340 = owner51340;
this.data__24197__auto__ = data__24197__auto__;
this.p__51342 = p__51342;
this.owner = owner;
this.output_schema51372 = output_schema51372;
this.output_checker51375 = output_checker51375;
this.map51370 = map51370;
this.opts__24198__auto__ = opts__24198__auto__;
this.map51369 = map51369;
this.value = value;
this.map51368 = map51368;
this.component = component;
this.G__51376 = G__51376;
this.input_checker51374 = input_checker51374;
this.validate__837__auto__ = validate__837__auto__;
this.vec__51367 = vec__51367;
this.ufv__ = ufv__;
this.input_schema51373 = input_schema51373;
this.fnk51371 = fnk51371;
this.meta51386 = meta51386;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datoms.t51385.cljs$lang$type = true;
stuttaford.radiant.datoms.t51385.cljs$lang$ctorStr = "stuttaford.radiant.datoms/t51385";
stuttaford.radiant.datoms.t51385.cljs$lang$ctorPrWriter = ((function (component,map51369,owner,value__$1,map51370,validate__837__auto__,ufv__,output_schema51372,input_schema51373,input_checker51374,output_checker51375,vec__51367,opts__24198__auto__){
return (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"stuttaford.radiant.datoms/t51385");
});})(component,map51369,owner,value__$1,map51370,validate__837__auto__,ufv__,output_schema51372,input_schema51373,input_checker51374,output_checker51375,vec__51367,opts__24198__auto__))
;
stuttaford.radiant.datoms.t51385.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datoms.t51385.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (component,map51369,owner,value__$1,map51370,validate__837__auto__,ufv__,output_schema51372,input_schema51373,input_checker51374,output_checker51375,vec__51367,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "value";
});})(component,map51369,owner,value__$1,map51370,validate__837__auto__,ufv__,output_schema51372,input_schema51373,input_checker51374,output_checker51375,vec__51367,opts__24198__auto__))
;
stuttaford.radiant.datoms.t51385.prototype.om$core$IRender$ = true;
stuttaford.radiant.datoms.t51385.prototype.om$core$IRender$render$arity$1 = ((function (component,map51369,owner,value__$1,map51370,validate__837__auto__,ufv__,output_schema51372,input_schema51373,input_checker51374,output_checker51375,vec__51367,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var G__51388 = {"href": "javascript:", "onClick": ((function (c,___$1,component,map51369,owner,value__$1,map51370,validate__837__auto__,ufv__,output_schema51372,input_schema51373,input_checker51374,output_checker51375,vec__51367,opts__24198__auto__){
return (function (){console.log(self__.owner,c,stuttaford.om.common.control_chan(self__.owner));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.component,self__.value], null)], null));
});})(c,___$1,component,map51369,owner,value__$1,map51370,validate__837__auto__,ufv__,output_schema51372,input_schema51373,input_checker51374,output_checker51375,vec__51367,opts__24198__auto__))
};var G__51389 = sablono.interpreter.interpret(self__.value);return React.DOM.a(G__51388,G__51389);
});})(component,map51369,owner,value__$1,map51370,validate__837__auto__,ufv__,output_schema51372,input_schema51373,input_checker51374,output_checker51375,vec__51367,opts__24198__auto__))
;
stuttaford.radiant.datoms.t51385.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (component,map51369,owner,value__$1,map51370,validate__837__auto__,ufv__,output_schema51372,input_schema51373,input_checker51374,output_checker51375,vec__51367,opts__24198__auto__){
return (function (_51387){var self__ = this;
var _51387__$1 = this;return self__.meta51386;
});})(component,map51369,owner,value__$1,map51370,validate__837__auto__,ufv__,output_schema51372,input_schema51373,input_checker51374,output_checker51375,vec__51367,opts__24198__auto__))
;
stuttaford.radiant.datoms.t51385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (component,map51369,owner,value__$1,map51370,validate__837__auto__,ufv__,output_schema51372,input_schema51373,input_checker51374,output_checker51375,vec__51367,opts__24198__auto__){
return (function (_51387,meta51386__$1){var self__ = this;
var _51387__$1 = this;return (new stuttaford.radiant.datoms.t51385(self__.owner51340,self__.data__24197__auto__,self__.p__51342,self__.owner,self__.output_schema51372,self__.output_checker51375,self__.map51370,self__.opts__24198__auto__,self__.map51369,self__.value,self__.map51368,self__.component,self__.G__51376,self__.input_checker51374,self__.validate__837__auto__,self__.vec__51367,self__.ufv__,self__.input_schema51373,self__.fnk51371,meta51386__$1));
});})(component,map51369,owner,value__$1,map51370,validate__837__auto__,ufv__,output_schema51372,input_schema51373,input_checker51374,output_checker51375,vec__51367,opts__24198__auto__))
;
stuttaford.radiant.datoms.__GT_t51385 = ((function (component,map51369,owner,value__$1,map51370,validate__837__auto__,ufv__,output_schema51372,input_schema51373,input_checker51374,output_checker51375,vec__51367,opts__24198__auto__){
return (function __GT_t51385(owner51340__$1,data__24197__auto____$1,p__51342__$1,owner__$1,output_schema51372__$1,output_checker51375__$1,map51370__$1,opts__24198__auto____$1,map51369__$1,value__$2,map51368__$1,component__$1,G__51376__$1,input_checker51374__$1,validate__837__auto____$1,vec__51367__$1,ufv____$1,input_schema51373__$1,fnk51371__$1,meta51386){return (new stuttaford.radiant.datoms.t51385(owner51340__$1,data__24197__auto____$1,p__51342__$1,owner__$1,output_schema51372__$1,output_checker51375__$1,map51370__$1,opts__24198__auto____$1,map51369__$1,value__$2,map51368__$1,component__$1,G__51376__$1,input_checker51374__$1,validate__837__auto____$1,vec__51367__$1,ufv____$1,input_schema51373__$1,fnk51371__$1,meta51386));
});})(component,map51369,owner,value__$1,map51370,validate__837__auto__,ufv__,output_schema51372,input_schema51373,input_checker51374,output_checker51375,vec__51367,opts__24198__auto__))
;
}
return (new stuttaford.radiant.datoms.t51385(owner51340,data__24197__auto__,p__51342,owner,output_schema51372,output_checker51375,map51370,opts__24198__auto__,map51369,value__$1,map51368,component,G__51376,input_checker51374,validate__837__auto__,vec__51367,ufv__,input_schema51373,fnk51371,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___51394 = (function (){var G__51390 = o__840__auto__;return (output_checker51375.cljs$core$IFn$_invoke$arity$1 ? output_checker51375.cljs$core$IFn$_invoke$arity$1(G__51390) : output_checker51375.call(null,G__51390));
})();if(cljs.core.truth_(temp__4126__auto___51394))
{var error__839__auto___51395 = temp__4126__auto___51394;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk51371","fnk51371",453126591,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___51395], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema51372,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___51395], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema51372,input_schema51373,input_checker51374,output_checker51375,vec__51367,opts__24198__auto__))
,schema.core.make_fn_schema(output_schema51372,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema51373], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24198__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner51340,new cljs.core.Keyword(null,"data","data",-232669377),data__24197__auto__], null));
};
var value = function (data__24197__auto__,owner51340,var_args){
var p__51342 = null;if (arguments.length > 2) {
  p__51342 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return value__delegate.call(this,data__24197__auto__,owner51340,p__51342);};
value.cljs$lang$maxFixedArity = 2;
value.cljs$lang$applyTo = (function (arglist__51396){
var data__24197__auto__ = cljs.core.first(arglist__51396);
arglist__51396 = cljs.core.next(arglist__51396);
var owner51340 = cljs.core.first(arglist__51396);
var p__51342 = cljs.core.rest(arglist__51396);
return value__delegate(data__24197__auto__,owner51340,p__51342);
});
value.cljs$core$IFn$_invoke$arity$variadic = value__delegate;
return value;
})()
;
stuttaford.radiant.datoms.__GT_value = (function() {
var __GT_value = null;
var __GT_value__1 = (function (cursor__24166__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.value,cursor__24166__auto__);
});
var __GT_value__2 = (function (cursor__24166__auto__,m51341){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datoms.value,cursor__24166__auto__,m51341);
});
__GT_value = function(cursor__24166__auto__,m51341){
switch(arguments.length){
case 1:
return __GT_value__1.call(this,cursor__24166__auto__);
case 2:
return __GT_value__2.call(this,cursor__24166__auto__,m51341);
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
stuttaford.radiant.datoms.a_value = (function a_value(p1__51397_SHARP_){return stuttaford.radiant.datoms.value_STAR_(new cljs.core.Keyword(null,"a","a",-2123407586),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51397_SHARP_)));
});
stuttaford.radiant.datoms.v_value = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.value_STAR_,new cljs.core.Keyword(null,"v","v",21465059));
/**
* @param {...*} var_args
*/
stuttaford.radiant.datoms.datoms = (function() { 
var datoms__delegate = function (data__24197__auto__,owner51398,p__51400){var vec__51473 = p__51400;var opts__24198__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51473,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema51476 = schema.core.Any;var input_schema51477 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-db","current-db",213667882)),schema.core.Any,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map51474","map51474",543839006,null))], null);var input_checker51478 = schema.core.checker(input_schema51477);var output_checker51479 = schema.core.checker(output_schema51476);return schema.core.schematize_fn(((function (ufv__,output_schema51476,input_schema51477,input_checker51478,output_checker51479,vec__51473,opts__24198__auto__){
return (function fnk51475(G__51480){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___51545 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__51480], null);var temp__4126__auto___51546 = (function (){var G__51513 = args__838__auto___51545;return (input_checker51478.cljs$core$IFn$_invoke$arity$1 ? input_checker51478.cljs$core$IFn$_invoke$arity$1(G__51513) : input_checker51478.call(null,G__51513));
})();if(cljs.core.truth_(temp__4126__auto___51546))
{var error__839__auto___51547 = temp__4126__auto___51546;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk51475","fnk51475",-50338392,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___51547], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema51477,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___51545,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___51547], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map51474 = G__51480;while(true){
if(cljs.core.map_QMARK_(map51474))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map51474], 0))));
}
var data = plumbing.fnk.schema.safe_get(map51474,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var current_datoms_index = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_db = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-db","current-db",213667882),null);var current_datoms_components = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628),cljs.core.PersistentArrayMap.EMPTY);var owner = plumbing.fnk.schema.safe_get(map51474,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datoms.t51514 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datoms.t51514 = (function (data__24197__auto__,p__51400,owner,datoms,data,fnk51475,input_schema51477,current_datoms_index,owner51398,opts__24198__auto__,current_db,output_checker51479,output_schema51476,current_datoms_components,vec__51473,G__51480,input_checker51478,validate__837__auto__,ufv__,map51474,meta51515){
this.data__24197__auto__ = data__24197__auto__;
this.p__51400 = p__51400;
this.owner = owner;
this.datoms = datoms;
this.data = data;
this.fnk51475 = fnk51475;
this.input_schema51477 = input_schema51477;
this.current_datoms_index = current_datoms_index;
this.owner51398 = owner51398;
this.opts__24198__auto__ = opts__24198__auto__;
this.current_db = current_db;
this.output_checker51479 = output_checker51479;
this.output_schema51476 = output_schema51476;
this.current_datoms_components = current_datoms_components;
this.vec__51473 = vec__51473;
this.G__51480 = G__51480;
this.input_checker51478 = input_checker51478;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.map51474 = map51474;
this.meta51515 = meta51515;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datoms.t51514.cljs$lang$type = true;
stuttaford.radiant.datoms.t51514.cljs$lang$ctorStr = "stuttaford.radiant.datoms/t51514";
stuttaford.radiant.datoms.t51514.cljs$lang$ctorPrWriter = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema51476,input_schema51477,input_checker51478,output_checker51479,vec__51473,opts__24198__auto__){
return (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"stuttaford.radiant.datoms/t51514");
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema51476,input_schema51477,input_checker51478,output_checker51479,vec__51473,opts__24198__auto__))
;
stuttaford.radiant.datoms.t51514.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datoms.t51514.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema51476,input_schema51477,input_checker51478,output_checker51479,vec__51473,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "datoms";
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema51476,input_schema51477,input_checker51478,output_checker51479,vec__51473,opts__24198__auto__))
;
stuttaford.radiant.datoms.t51514.prototype.om$core$IRender$ = true;
stuttaford.radiant.datoms.t51514.prototype.om$core$IRender$render$arity$1 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema51476,input_schema51477,input_checker51478,output_checker51479,vec__51473,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var attrs51517 = stuttaford.radiant.datoms.__GT_inputs.cljs$core$IFn$_invoke$arity$1(self__.data);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs51517))?sablono.interpreter.attributes(attrs51517):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs51517))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51522 = null;return React.DOM.hr(G__51522);
})(),sablono.interpreter.interpret((cljs.core.truth_(self__.current_db)?(function (){var order_fn = stuttaford.radiant.model.order_fn(self__.current_datoms_index);var components = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),(function (){var G__51523 = stuttaford.radiant.model.ensure_components(self__.current_datoms_components);return (order_fn.cljs$core$IFn$_invoke$arity$1 ? order_fn.cljs$core$IFn$_invoke$arity$1(G__51523) : order_fn.call(null,G__51523));
})());var datoms__$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.datoms,self__.current_db,self__.current_datoms_index,components);return stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),stuttaford.radiant.model.cols(self__.current_datoms_index),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (order_fn,components,datoms__$2,attrs51517,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema51476,input_schema51477,input_checker51478,output_checker51479,vec__51473,opts__24198__auto__){
return (function (p__51524){var map__51525 = p__51524;var map__51525__$1 = ((cljs.core.seq_QMARK_(map__51525))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51525):map__51525);var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51525__$1,new cljs.core.Keyword(null,"v","v",21465059));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51525__$1,new cljs.core.Keyword(null,"a","a",-2123407586));var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51525__$1,new cljs.core.Keyword(null,"e","e",1381269198));var G__51526 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__51526) {
case "avet":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.datoms.a_value(a),(function (){var G__51527 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__51527) : stuttaford.radiant.datoms.v_value.call(null,G__51527));
})(),(function (){var G__51528 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__51528) : stuttaford.radiant.datoms.e_value.call(null,G__51528));
})()], null);

break;
case "aevt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.datoms.a_value(a),(function (){var G__51529 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__51529) : stuttaford.radiant.datoms.e_value.call(null,G__51529));
})(),(function (){var G__51530 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__51530) : stuttaford.radiant.datoms.v_value.call(null,G__51530));
})()], null);

break;
case "eavt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51531 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__51531) : stuttaford.radiant.datoms.e_value.call(null,G__51531));
})(),stuttaford.radiant.datoms.a_value(a),(function (){var G__51532 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__51532) : stuttaford.radiant.datoms.v_value.call(null,G__51532));
})()], null);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.current_datoms_index))));

}
});})(order_fn,components,datoms__$2,attrs51517,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema51476,input_schema51477,input_checker51478,output_checker51479,vec__51473,opts__24198__auto__))
,datoms__$2)], null));
})():null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs51517),(function (){var G__51533 = null;return React.DOM.hr(G__51533);
})(),sablono.interpreter.interpret((cljs.core.truth_(self__.current_db)?(function (){var order_fn = stuttaford.radiant.model.order_fn(self__.current_datoms_index);var components = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),(function (){var G__51534 = stuttaford.radiant.model.ensure_components(self__.current_datoms_components);return (order_fn.cljs$core$IFn$_invoke$arity$1 ? order_fn.cljs$core$IFn$_invoke$arity$1(G__51534) : order_fn.call(null,G__51534));
})());var datoms__$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.datoms,self__.current_db,self__.current_datoms_index,components);return stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),stuttaford.radiant.model.cols(self__.current_datoms_index),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (order_fn,components,datoms__$2,attrs51517,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema51476,input_schema51477,input_checker51478,output_checker51479,vec__51473,opts__24198__auto__){
return (function (p__51535){var map__51536 = p__51535;var map__51536__$1 = ((cljs.core.seq_QMARK_(map__51536))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51536):map__51536);var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51536__$1,new cljs.core.Keyword(null,"v","v",21465059));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51536__$1,new cljs.core.Keyword(null,"a","a",-2123407586));var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51536__$1,new cljs.core.Keyword(null,"e","e",1381269198));var G__51537 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__51537) {
case "avet":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.datoms.a_value(a),(function (){var G__51538 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__51538) : stuttaford.radiant.datoms.v_value.call(null,G__51538));
})(),(function (){var G__51539 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__51539) : stuttaford.radiant.datoms.e_value.call(null,G__51539));
})()], null);

break;
case "aevt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.datoms.a_value(a),(function (){var G__51540 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__51540) : stuttaford.radiant.datoms.e_value.call(null,G__51540));
})(),(function (){var G__51541 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__51541) : stuttaford.radiant.datoms.v_value.call(null,G__51541));
})()], null);

break;
case "eavt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51542 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__51542) : stuttaford.radiant.datoms.e_value.call(null,G__51542));
})(),stuttaford.radiant.datoms.a_value(a),(function (){var G__51543 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__51543) : stuttaford.radiant.datoms.v_value.call(null,G__51543));
})()], null);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.current_datoms_index))));

}
});})(order_fn,components,datoms__$2,attrs51517,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema51476,input_schema51477,input_checker51478,output_checker51479,vec__51473,opts__24198__auto__))
,datoms__$2)], null));
})():null))], null))));
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema51476,input_schema51477,input_checker51478,output_checker51479,vec__51473,opts__24198__auto__))
;
stuttaford.radiant.datoms.t51514.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema51476,input_schema51477,input_checker51478,output_checker51479,vec__51473,opts__24198__auto__){
return (function (_51516){var self__ = this;
var _51516__$1 = this;return self__.meta51515;
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema51476,input_schema51477,input_checker51478,output_checker51479,vec__51473,opts__24198__auto__))
;
stuttaford.radiant.datoms.t51514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema51476,input_schema51477,input_checker51478,output_checker51479,vec__51473,opts__24198__auto__){
return (function (_51516,meta51515__$1){var self__ = this;
var _51516__$1 = this;return (new stuttaford.radiant.datoms.t51514(self__.data__24197__auto__,self__.p__51400,self__.owner,self__.datoms,self__.data,self__.fnk51475,self__.input_schema51477,self__.current_datoms_index,self__.owner51398,self__.opts__24198__auto__,self__.current_db,self__.output_checker51479,self__.output_schema51476,self__.current_datoms_components,self__.vec__51473,self__.G__51480,self__.input_checker51478,self__.validate__837__auto__,self__.ufv__,self__.map51474,meta51515__$1));
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema51476,input_schema51477,input_checker51478,output_checker51479,vec__51473,opts__24198__auto__))
;
stuttaford.radiant.datoms.__GT_t51514 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema51476,input_schema51477,input_checker51478,output_checker51479,vec__51473,opts__24198__auto__){
return (function __GT_t51514(data__24197__auto____$1,p__51400__$1,owner__$1,datoms__$1,data__$1,fnk51475__$1,input_schema51477__$1,current_datoms_index__$1,owner51398__$1,opts__24198__auto____$1,current_db__$1,output_checker51479__$1,output_schema51476__$1,current_datoms_components__$1,vec__51473__$1,G__51480__$1,input_checker51478__$1,validate__837__auto____$1,ufv____$1,map51474__$1,meta51515){return (new stuttaford.radiant.datoms.t51514(data__24197__auto____$1,p__51400__$1,owner__$1,datoms__$1,data__$1,fnk51475__$1,input_schema51477__$1,current_datoms_index__$1,owner51398__$1,opts__24198__auto____$1,current_db__$1,output_checker51479__$1,output_schema51476__$1,current_datoms_components__$1,vec__51473__$1,G__51480__$1,input_checker51478__$1,validate__837__auto____$1,ufv____$1,map51474__$1,meta51515));
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema51476,input_schema51477,input_checker51478,output_checker51479,vec__51473,opts__24198__auto__))
;
}
return (new stuttaford.radiant.datoms.t51514(data__24197__auto__,p__51400,owner,datoms,data,fnk51475,input_schema51477,current_datoms_index,owner51398,opts__24198__auto__,current_db,output_checker51479,output_schema51476,current_datoms_components,vec__51473,G__51480,input_checker51478,validate__837__auto__,ufv__,map51474,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___51550 = (function (){var G__51544 = o__840__auto__;return (output_checker51479.cljs$core$IFn$_invoke$arity$1 ? output_checker51479.cljs$core$IFn$_invoke$arity$1(G__51544) : output_checker51479.call(null,G__51544));
})();if(cljs.core.truth_(temp__4126__auto___51550))
{var error__839__auto___51551 = temp__4126__auto___51550;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk51475","fnk51475",-50338392,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___51551], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema51476,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___51551], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema51476,input_schema51477,input_checker51478,output_checker51479,vec__51473,opts__24198__auto__))
,schema.core.make_fn_schema(output_schema51476,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema51477], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24198__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner51398,new cljs.core.Keyword(null,"data","data",-232669377),data__24197__auto__], null));
};
var datoms = function (data__24197__auto__,owner51398,var_args){
var p__51400 = null;if (arguments.length > 2) {
  p__51400 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datoms__delegate.call(this,data__24197__auto__,owner51398,p__51400);};
datoms.cljs$lang$maxFixedArity = 2;
datoms.cljs$lang$applyTo = (function (arglist__51552){
var data__24197__auto__ = cljs.core.first(arglist__51552);
arglist__51552 = cljs.core.next(arglist__51552);
var owner51398 = cljs.core.first(arglist__51552);
var p__51400 = cljs.core.rest(arglist__51552);
return datoms__delegate(data__24197__auto__,owner51398,p__51400);
});
datoms.cljs$core$IFn$_invoke$arity$variadic = datoms__delegate;
return datoms;
})()
;
stuttaford.radiant.datoms.__GT_datoms = (function() {
var __GT_datoms = null;
var __GT_datoms__1 = (function (cursor__24166__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.datoms,cursor__24166__auto__);
});
var __GT_datoms__2 = (function (cursor__24166__auto__,m51399){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datoms.datoms,cursor__24166__auto__,m51399);
});
__GT_datoms = function(cursor__24166__auto__,m51399){
switch(arguments.length){
case 1:
return __GT_datoms__1.call(this,cursor__24166__auto__);
case 2:
return __GT_datoms__2.call(this,cursor__24166__auto__,m51399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_datoms.cljs$core$IFn$_invoke$arity$1 = __GT_datoms__1;
__GT_datoms.cljs$core$IFn$_invoke$arity$2 = __GT_datoms__2;
return __GT_datoms;
})()
;
//# sourceMappingURL=datoms.js.map