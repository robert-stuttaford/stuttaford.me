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
stuttaford.radiant.datoms.component_status = (function component_status(p__41894,component_values,component,value){var vec__41897 = p__41894;var c_one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41897,(0),null);var c_two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41897,(1),null);if(cljs.core.truth_(value))
{return "success";
} else
{var vec__41898 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$,component_values);var one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41898,(0),null);var two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41898,(1),null);var three = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41898,(2),null);if(cljs.core.truth_((function (){var and__19621__auto__ = cljs.core.not(one);if(and__19621__auto__)
{var and__19621__auto____$1 = (function (){var or__19663__auto__ = two;if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return three;
}
})();if(cljs.core.truth_(and__19621__auto____$1))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,c_one);
} else
{return and__19621__auto____$1;
}
} else
{return and__19621__auto__;
}
})()))
{return "error";
} else
{if(cljs.core.truth_((function (){var and__19621__auto__ = cljs.core.not(two);if(and__19621__auto__)
{var and__19621__auto____$1 = three;if(cljs.core.truth_(and__19621__auto____$1))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,c_two);
} else
{return and__19621__auto____$1;
}
} else
{return and__19621__auto__;
}
})()))
{return "error";
} else
{return null;

}
}
}
});
stuttaford.radiant.datoms.index_input = (function index_input(c,current_datoms_index){return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__21074__auto__ = (function iter__41909(s__41910){return (new cljs.core.LazySeq(null,(function (){var s__41910__$1 = s__41910;while(true){
var temp__4126__auto__ = cljs.core.seq(s__41910__$1);if(temp__4126__auto__)
{var s__41910__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__41910__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__41910__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__41912 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__41911 = (0);while(true){
if((i__41911 < size__21073__auto__))
{var index = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__41911);cljs.core.chunk_append(b__41912,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__41917 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__41911,index,c__21072__auto__,size__21073__auto__,b__41912,s__41910__$2,temp__4126__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-index","set-datoms-index",-683154215),index], null));
});})(i__41911,index,c__21072__auto__,size__21073__auto__,b__41912,s__41910__$2,temp__4126__auto__))
], null);var G__41917__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,current_datoms_index))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41917,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__41917);return G__41917__$1;
})(),cljs.core.array_seq([clojure.string.upper_case(cljs.core.name(index))], 0)));
{
var G__41919 = (i__41911 + (1));
i__41911 = G__41919;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__41912),iter__41909(cljs.core.chunk_rest(s__41910__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__41912),null);
}
} else
{var index = cljs.core.first(s__41910__$2);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__41918 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (index,s__41910__$2,temp__4126__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-index","set-datoms-index",-683154215),index], null));
});})(index,s__41910__$2,temp__4126__auto__))
], null);var G__41918__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,current_datoms_index))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41918,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__41918);return G__41918__$1;
})(),cljs.core.array_seq([clojure.string.upper_case(cljs.core.name(index))], 0)),iter__41909(cljs.core.rest(s__41910__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__21074__auto__(stuttaford.radiant.model.indexes);
})()], 0)),om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),null], null)], null));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),null], null)], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059),null], null)], null));
})], null),cljs.core.array_seq(["Clear"], 0))], 0));
});
stuttaford.radiant.datoms.component_input = (function component_input(c,components,current_datoms_components,component){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__41930 = {"href": "javascript:", "onClick": (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,null], null)], null));
})};var G__41931 = (function (){var G__41932 = {"className": "glyphicon glyphicon-remove"};return React.DOM.span(G__41932);
})();return React.DOM.a(G__41930,G__41931);
})()),om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),true,new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),clojure.string.upper_case(cljs.core.name(component)),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),stuttaford.radiant.datoms.component_status(components,cljs.core.map.cljs$core$IFn$_invoke$arity$2(current_datoms_components,components),component,(function (){var G__41933 = current_datoms_components;return (component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(G__41933) : component.call(null,G__41933));
})()),new cljs.core.Keyword(null,"value","value",305978217),(function (){var G__41934 = current_datoms_components;return (component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(G__41934) : component.call(null,G__41934));
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__41920_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,p1__41920_SHARP_.target.value], null)], null));
})], null)));
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.datoms.inputs = (function() { 
var inputs__delegate = function (data__24441__auto__,owner41935,p__41937){var vec__41959 = p__41937;var opts__24442__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41959,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema41963 = schema.core.Any;var input_schema41964 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628)),schema.core.Any,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map41960","map41960",-839910161,null))], null);var input_checker41965 = schema.core.checker(input_schema41964);var output_checker41966 = schema.core.checker(output_schema41963);return schema.core.schematize_fn(((function (ufv__,output_schema41963,input_schema41964,input_checker41965,output_checker41966,vec__41959,opts__24442__auto__){
return (function fnk41962(G__41967){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___41980 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__41967], null);var temp__4126__auto___41981 = (function (){var G__41974 = args__838__auto___41980;return (input_checker41965.cljs$core$IFn$_invoke$arity$1 ? input_checker41965.cljs$core$IFn$_invoke$arity$1(G__41974) : input_checker41965.call(null,G__41974));
})();if(cljs.core.truth_(temp__4126__auto___41981))
{var error__839__auto___41982 = temp__4126__auto___41981;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk41962","fnk41962",383264429,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41982], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema41964,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___41980,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41982], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map41960 = G__41967;while(true){
if(cljs.core.map_QMARK_(map41960))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map41960], 0))));
}
var map41961 = plumbing.fnk.schema.safe_get(map41960,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var current_datoms_index = plumbing.fnk.schema.safe_get(map41961,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_datoms_components = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map41961,new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628),cljs.core.PersistentArrayMap.EMPTY);var owner = plumbing.fnk.schema.safe_get(map41960,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datoms.t41975 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datoms.t41975 = (function (output_schema41963,map41961,owner,output_checker41966,G__41967,input_schema41964,p__41937,fnk41962,current_datoms_index,vec__41959,owner41935,map41960,data__24441__auto__,current_datoms_components,inputs,opts__24442__auto__,validate__837__auto__,input_checker41965,ufv__,meta41976){
this.output_schema41963 = output_schema41963;
this.map41961 = map41961;
this.owner = owner;
this.output_checker41966 = output_checker41966;
this.G__41967 = G__41967;
this.input_schema41964 = input_schema41964;
this.p__41937 = p__41937;
this.fnk41962 = fnk41962;
this.current_datoms_index = current_datoms_index;
this.vec__41959 = vec__41959;
this.owner41935 = owner41935;
this.map41960 = map41960;
this.data__24441__auto__ = data__24441__auto__;
this.current_datoms_components = current_datoms_components;
this.inputs = inputs;
this.opts__24442__auto__ = opts__24442__auto__;
this.validate__837__auto__ = validate__837__auto__;
this.input_checker41965 = input_checker41965;
this.ufv__ = ufv__;
this.meta41976 = meta41976;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datoms.t41975.cljs$lang$type = true;
stuttaford.radiant.datoms.t41975.cljs$lang$ctorStr = "stuttaford.radiant.datoms/t41975";
stuttaford.radiant.datoms.t41975.cljs$lang$ctorPrWriter = ((function (owner,current_datoms_components,current_datoms_index,map41961,validate__837__auto__,ufv__,output_schema41963,input_schema41964,input_checker41965,output_checker41966,vec__41959,opts__24442__auto__){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"stuttaford.radiant.datoms/t41975");
});})(owner,current_datoms_components,current_datoms_index,map41961,validate__837__auto__,ufv__,output_schema41963,input_schema41964,input_checker41965,output_checker41966,vec__41959,opts__24442__auto__))
;
stuttaford.radiant.datoms.t41975.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datoms.t41975.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,current_datoms_components,current_datoms_index,map41961,validate__837__auto__,ufv__,output_schema41963,input_schema41964,input_checker41965,output_checker41966,vec__41959,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "inputs";
});})(owner,current_datoms_components,current_datoms_index,map41961,validate__837__auto__,ufv__,output_schema41963,input_schema41964,input_checker41965,output_checker41966,vec__41959,opts__24442__auto__))
;
stuttaford.radiant.datoms.t41975.prototype.om$core$IRender$ = true;
stuttaford.radiant.datoms.t41975.prototype.om$core$IRender$render$arity$1 = ((function (owner,current_datoms_components,current_datoms_index,map41961,validate__837__auto__,ufv__,output_schema41963,input_schema41964,input_checker41965,output_checker41966,vec__41959,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var components = stuttaford.radiant.model.components(self__.current_datoms_index);var vec__41978 = components;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41978,(0),null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41978,(1),null);var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41978,(2),null);return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"datoms-components-inputs"], null),cljs.core.array_seq([om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),cljs.core.array_seq([stuttaford.radiant.datoms.index_input(c,self__.current_datoms_index)], 0)),om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),cljs.core.array_seq([stuttaford.radiant.datoms.component_input(c,components,self__.current_datoms_components,x)], 0)),om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),cljs.core.array_seq([stuttaford.radiant.datoms.component_input(c,components,self__.current_datoms_components,y)], 0)),om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),cljs.core.array_seq([stuttaford.radiant.datoms.component_input(c,components,self__.current_datoms_components,z)], 0))], 0));
});})(owner,current_datoms_components,current_datoms_index,map41961,validate__837__auto__,ufv__,output_schema41963,input_schema41964,input_checker41965,output_checker41966,vec__41959,opts__24442__auto__))
;
stuttaford.radiant.datoms.t41975.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,current_datoms_components,current_datoms_index,map41961,validate__837__auto__,ufv__,output_schema41963,input_schema41964,input_checker41965,output_checker41966,vec__41959,opts__24442__auto__){
return (function (_41977){var self__ = this;
var _41977__$1 = this;return self__.meta41976;
});})(owner,current_datoms_components,current_datoms_index,map41961,validate__837__auto__,ufv__,output_schema41963,input_schema41964,input_checker41965,output_checker41966,vec__41959,opts__24442__auto__))
;
stuttaford.radiant.datoms.t41975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,current_datoms_components,current_datoms_index,map41961,validate__837__auto__,ufv__,output_schema41963,input_schema41964,input_checker41965,output_checker41966,vec__41959,opts__24442__auto__){
return (function (_41977,meta41976__$1){var self__ = this;
var _41977__$1 = this;return (new stuttaford.radiant.datoms.t41975(self__.output_schema41963,self__.map41961,self__.owner,self__.output_checker41966,self__.G__41967,self__.input_schema41964,self__.p__41937,self__.fnk41962,self__.current_datoms_index,self__.vec__41959,self__.owner41935,self__.map41960,self__.data__24441__auto__,self__.current_datoms_components,self__.inputs,self__.opts__24442__auto__,self__.validate__837__auto__,self__.input_checker41965,self__.ufv__,meta41976__$1));
});})(owner,current_datoms_components,current_datoms_index,map41961,validate__837__auto__,ufv__,output_schema41963,input_schema41964,input_checker41965,output_checker41966,vec__41959,opts__24442__auto__))
;
stuttaford.radiant.datoms.__GT_t41975 = ((function (owner,current_datoms_components,current_datoms_index,map41961,validate__837__auto__,ufv__,output_schema41963,input_schema41964,input_checker41965,output_checker41966,vec__41959,opts__24442__auto__){
return (function __GT_t41975(output_schema41963__$1,map41961__$1,owner__$1,output_checker41966__$1,G__41967__$1,input_schema41964__$1,p__41937__$1,fnk41962__$1,current_datoms_index__$1,vec__41959__$1,owner41935__$1,map41960__$1,data__24441__auto____$1,current_datoms_components__$1,inputs__$1,opts__24442__auto____$1,validate__837__auto____$1,input_checker41965__$1,ufv____$1,meta41976){return (new stuttaford.radiant.datoms.t41975(output_schema41963__$1,map41961__$1,owner__$1,output_checker41966__$1,G__41967__$1,input_schema41964__$1,p__41937__$1,fnk41962__$1,current_datoms_index__$1,vec__41959__$1,owner41935__$1,map41960__$1,data__24441__auto____$1,current_datoms_components__$1,inputs__$1,opts__24442__auto____$1,validate__837__auto____$1,input_checker41965__$1,ufv____$1,meta41976));
});})(owner,current_datoms_components,current_datoms_index,map41961,validate__837__auto__,ufv__,output_schema41963,input_schema41964,input_checker41965,output_checker41966,vec__41959,opts__24442__auto__))
;
}
return (new stuttaford.radiant.datoms.t41975(output_schema41963,map41961,owner,output_checker41966,G__41967,input_schema41964,p__41937,fnk41962,current_datoms_index,vec__41959,owner41935,map41960,data__24441__auto__,current_datoms_components,inputs,opts__24442__auto__,validate__837__auto__,input_checker41965,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___41983 = (function (){var G__41979 = o__840__auto__;return (output_checker41966.cljs$core$IFn$_invoke$arity$1 ? output_checker41966.cljs$core$IFn$_invoke$arity$1(G__41979) : output_checker41966.call(null,G__41979));
})();if(cljs.core.truth_(temp__4126__auto___41983))
{var error__839__auto___41984 = temp__4126__auto___41983;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk41962","fnk41962",383264429,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41984], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema41963,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41984], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema41963,input_schema41964,input_checker41965,output_checker41966,vec__41959,opts__24442__auto__))
,schema.core.make_fn_schema(output_schema41963,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema41964], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24442__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner41935,new cljs.core.Keyword(null,"data","data",-232669377),data__24441__auto__], null));
};
var inputs = function (data__24441__auto__,owner41935,var_args){
var p__41937 = null;if (arguments.length > 2) {
  p__41937 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return inputs__delegate.call(this,data__24441__auto__,owner41935,p__41937);};
inputs.cljs$lang$maxFixedArity = 2;
inputs.cljs$lang$applyTo = (function (arglist__41985){
var data__24441__auto__ = cljs.core.first(arglist__41985);
arglist__41985 = cljs.core.next(arglist__41985);
var owner41935 = cljs.core.first(arglist__41985);
var p__41937 = cljs.core.rest(arglist__41985);
return inputs__delegate(data__24441__auto__,owner41935,p__41937);
});
inputs.cljs$core$IFn$_invoke$arity$variadic = inputs__delegate;
return inputs;
})()
;
stuttaford.radiant.datoms.__GT_inputs = (function() {
var __GT_inputs = null;
var __GT_inputs__1 = (function (cursor__24410__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.inputs,cursor__24410__auto__);
});
var __GT_inputs__2 = (function (cursor__24410__auto__,m41936){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datoms.inputs,cursor__24410__auto__,m41936);
});
__GT_inputs = function(cursor__24410__auto__,m41936){
switch(arguments.length){
case 1:
return __GT_inputs__1.call(this,cursor__24410__auto__);
case 2:
return __GT_inputs__2.call(this,cursor__24410__auto__,m41936);
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
var value__delegate = function (data__24441__auto__,owner41986,p__41988){var vec__42013 = p__41988;var opts__24442__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42013,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema42018 = schema.core.Any;var input_schema42019 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component","component",1555936782),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"value","value",305978217),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map42014","map42014",1725102400,null))], null);var input_checker42020 = schema.core.checker(input_schema42019);var output_checker42021 = schema.core.checker(output_schema42018);return schema.core.schematize_fn(((function (ufv__,output_schema42018,input_schema42019,input_checker42020,output_checker42021,vec__42013,opts__24442__auto__){
return (function fnk42017(G__42022){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___42037 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__42022], null);var temp__4126__auto___42038 = (function (){var G__42030 = args__838__auto___42037;return (input_checker42020.cljs$core$IFn$_invoke$arity$1 ? input_checker42020.cljs$core$IFn$_invoke$arity$1(G__42030) : input_checker42020.call(null,G__42030));
})();if(cljs.core.truth_(temp__4126__auto___42038))
{var error__839__auto___42039 = temp__4126__auto___42038;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk42017","fnk42017",849230402,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___42039], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema42019,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___42037,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___42039], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map42014 = G__42022;while(true){
if(cljs.core.map_QMARK_(map42014))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map42014], 0))));
}
var map42016 = plumbing.fnk.schema.safe_get(map42014,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var value__$1 = plumbing.fnk.schema.safe_get(map42016,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map42014,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map42015 = plumbing.fnk.schema.safe_get(map42014,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component = plumbing.fnk.schema.safe_get(map42015,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));if(typeof stuttaford.radiant.datoms.t42031 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datoms.t42031 = (function (map42014,input_schema42019,fnk42017,owner,map42015,p__41988,owner41986,data__24441__auto__,G__42022,input_checker42020,value,component,map42016,vec__42013,output_schema42018,opts__24442__auto__,output_checker42021,validate__837__auto__,ufv__,meta42032){
this.map42014 = map42014;
this.input_schema42019 = input_schema42019;
this.fnk42017 = fnk42017;
this.owner = owner;
this.map42015 = map42015;
this.p__41988 = p__41988;
this.owner41986 = owner41986;
this.data__24441__auto__ = data__24441__auto__;
this.G__42022 = G__42022;
this.input_checker42020 = input_checker42020;
this.value = value;
this.component = component;
this.map42016 = map42016;
this.vec__42013 = vec__42013;
this.output_schema42018 = output_schema42018;
this.opts__24442__auto__ = opts__24442__auto__;
this.output_checker42021 = output_checker42021;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.meta42032 = meta42032;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datoms.t42031.cljs$lang$type = true;
stuttaford.radiant.datoms.t42031.cljs$lang$ctorStr = "stuttaford.radiant.datoms/t42031";
stuttaford.radiant.datoms.t42031.cljs$lang$ctorPrWriter = ((function (component,map42015,owner,value__$1,map42016,validate__837__auto__,ufv__,output_schema42018,input_schema42019,input_checker42020,output_checker42021,vec__42013,opts__24442__auto__){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"stuttaford.radiant.datoms/t42031");
});})(component,map42015,owner,value__$1,map42016,validate__837__auto__,ufv__,output_schema42018,input_schema42019,input_checker42020,output_checker42021,vec__42013,opts__24442__auto__))
;
stuttaford.radiant.datoms.t42031.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datoms.t42031.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (component,map42015,owner,value__$1,map42016,validate__837__auto__,ufv__,output_schema42018,input_schema42019,input_checker42020,output_checker42021,vec__42013,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "value";
});})(component,map42015,owner,value__$1,map42016,validate__837__auto__,ufv__,output_schema42018,input_schema42019,input_checker42020,output_checker42021,vec__42013,opts__24442__auto__))
;
stuttaford.radiant.datoms.t42031.prototype.om$core$IRender$ = true;
stuttaford.radiant.datoms.t42031.prototype.om$core$IRender$render$arity$1 = ((function (component,map42015,owner,value__$1,map42016,validate__837__auto__,ufv__,output_schema42018,input_schema42019,input_checker42020,output_checker42021,vec__42013,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var G__42034 = {"href": "javascript:", "onClick": ((function (c,___$1,component,map42015,owner,value__$1,map42016,validate__837__auto__,ufv__,output_schema42018,input_schema42019,input_checker42020,output_checker42021,vec__42013,opts__24442__auto__){
return (function (){console.log(self__.owner,c,stuttaford.om.common.control_chan(self__.owner));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.component,self__.value], null)], null));
});})(c,___$1,component,map42015,owner,value__$1,map42016,validate__837__auto__,ufv__,output_schema42018,input_schema42019,input_checker42020,output_checker42021,vec__42013,opts__24442__auto__))
};var G__42035 = sablono.interpreter.interpret(self__.value);return React.DOM.a(G__42034,G__42035);
});})(component,map42015,owner,value__$1,map42016,validate__837__auto__,ufv__,output_schema42018,input_schema42019,input_checker42020,output_checker42021,vec__42013,opts__24442__auto__))
;
stuttaford.radiant.datoms.t42031.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (component,map42015,owner,value__$1,map42016,validate__837__auto__,ufv__,output_schema42018,input_schema42019,input_checker42020,output_checker42021,vec__42013,opts__24442__auto__){
return (function (_42033){var self__ = this;
var _42033__$1 = this;return self__.meta42032;
});})(component,map42015,owner,value__$1,map42016,validate__837__auto__,ufv__,output_schema42018,input_schema42019,input_checker42020,output_checker42021,vec__42013,opts__24442__auto__))
;
stuttaford.radiant.datoms.t42031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (component,map42015,owner,value__$1,map42016,validate__837__auto__,ufv__,output_schema42018,input_schema42019,input_checker42020,output_checker42021,vec__42013,opts__24442__auto__){
return (function (_42033,meta42032__$1){var self__ = this;
var _42033__$1 = this;return (new stuttaford.radiant.datoms.t42031(self__.map42014,self__.input_schema42019,self__.fnk42017,self__.owner,self__.map42015,self__.p__41988,self__.owner41986,self__.data__24441__auto__,self__.G__42022,self__.input_checker42020,self__.value,self__.component,self__.map42016,self__.vec__42013,self__.output_schema42018,self__.opts__24442__auto__,self__.output_checker42021,self__.validate__837__auto__,self__.ufv__,meta42032__$1));
});})(component,map42015,owner,value__$1,map42016,validate__837__auto__,ufv__,output_schema42018,input_schema42019,input_checker42020,output_checker42021,vec__42013,opts__24442__auto__))
;
stuttaford.radiant.datoms.__GT_t42031 = ((function (component,map42015,owner,value__$1,map42016,validate__837__auto__,ufv__,output_schema42018,input_schema42019,input_checker42020,output_checker42021,vec__42013,opts__24442__auto__){
return (function __GT_t42031(map42014__$1,input_schema42019__$1,fnk42017__$1,owner__$1,map42015__$1,p__41988__$1,owner41986__$1,data__24441__auto____$1,G__42022__$1,input_checker42020__$1,value__$2,component__$1,map42016__$1,vec__42013__$1,output_schema42018__$1,opts__24442__auto____$1,output_checker42021__$1,validate__837__auto____$1,ufv____$1,meta42032){return (new stuttaford.radiant.datoms.t42031(map42014__$1,input_schema42019__$1,fnk42017__$1,owner__$1,map42015__$1,p__41988__$1,owner41986__$1,data__24441__auto____$1,G__42022__$1,input_checker42020__$1,value__$2,component__$1,map42016__$1,vec__42013__$1,output_schema42018__$1,opts__24442__auto____$1,output_checker42021__$1,validate__837__auto____$1,ufv____$1,meta42032));
});})(component,map42015,owner,value__$1,map42016,validate__837__auto__,ufv__,output_schema42018,input_schema42019,input_checker42020,output_checker42021,vec__42013,opts__24442__auto__))
;
}
return (new stuttaford.radiant.datoms.t42031(map42014,input_schema42019,fnk42017,owner,map42015,p__41988,owner41986,data__24441__auto__,G__42022,input_checker42020,value__$1,component,map42016,vec__42013,output_schema42018,opts__24442__auto__,output_checker42021,validate__837__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___42040 = (function (){var G__42036 = o__840__auto__;return (output_checker42021.cljs$core$IFn$_invoke$arity$1 ? output_checker42021.cljs$core$IFn$_invoke$arity$1(G__42036) : output_checker42021.call(null,G__42036));
})();if(cljs.core.truth_(temp__4126__auto___42040))
{var error__839__auto___42041 = temp__4126__auto___42040;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk42017","fnk42017",849230402,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___42041], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema42018,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___42041], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema42018,input_schema42019,input_checker42020,output_checker42021,vec__42013,opts__24442__auto__))
,schema.core.make_fn_schema(output_schema42018,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema42019], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24442__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner41986,new cljs.core.Keyword(null,"data","data",-232669377),data__24441__auto__], null));
};
var value = function (data__24441__auto__,owner41986,var_args){
var p__41988 = null;if (arguments.length > 2) {
  p__41988 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return value__delegate.call(this,data__24441__auto__,owner41986,p__41988);};
value.cljs$lang$maxFixedArity = 2;
value.cljs$lang$applyTo = (function (arglist__42042){
var data__24441__auto__ = cljs.core.first(arglist__42042);
arglist__42042 = cljs.core.next(arglist__42042);
var owner41986 = cljs.core.first(arglist__42042);
var p__41988 = cljs.core.rest(arglist__42042);
return value__delegate(data__24441__auto__,owner41986,p__41988);
});
value.cljs$core$IFn$_invoke$arity$variadic = value__delegate;
return value;
})()
;
stuttaford.radiant.datoms.__GT_value = (function() {
var __GT_value = null;
var __GT_value__1 = (function (cursor__24410__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.value,cursor__24410__auto__);
});
var __GT_value__2 = (function (cursor__24410__auto__,m41987){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datoms.value,cursor__24410__auto__,m41987);
});
__GT_value = function(cursor__24410__auto__,m41987){
switch(arguments.length){
case 1:
return __GT_value__1.call(this,cursor__24410__auto__);
case 2:
return __GT_value__2.call(this,cursor__24410__auto__,m41987);
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
stuttaford.radiant.datoms.a_value = (function a_value(p1__42043_SHARP_){return stuttaford.radiant.datoms.value_STAR_(new cljs.core.Keyword(null,"a","a",-2123407586),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42043_SHARP_)));
});
stuttaford.radiant.datoms.v_value = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.value_STAR_,new cljs.core.Keyword(null,"v","v",21465059));
/**
* @param {...*} var_args
*/
stuttaford.radiant.datoms.datoms = (function() { 
var datoms__delegate = function (data__24441__auto__,owner42044,p__42046){var vec__42119 = p__42046;var opts__24442__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42119,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema42122 = schema.core.Any;var input_schema42123 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-db","current-db",213667882)),schema.core.Any,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map42120","map42120",1927079852,null))], null);var input_checker42124 = schema.core.checker(input_schema42123);var output_checker42125 = schema.core.checker(output_schema42122);return schema.core.schematize_fn(((function (ufv__,output_schema42122,input_schema42123,input_checker42124,output_checker42125,vec__42119,opts__24442__auto__){
return (function fnk42121(G__42126){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___42191 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__42126], null);var temp__4126__auto___42192 = (function (){var G__42159 = args__838__auto___42191;return (input_checker42124.cljs$core$IFn$_invoke$arity$1 ? input_checker42124.cljs$core$IFn$_invoke$arity$1(G__42159) : input_checker42124.call(null,G__42159));
})();if(cljs.core.truth_(temp__4126__auto___42192))
{var error__839__auto___42193 = temp__4126__auto___42192;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk42121","fnk42121",1522150498,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___42193], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema42123,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___42191,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___42193], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map42120 = G__42126;while(true){
if(cljs.core.map_QMARK_(map42120))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map42120], 0))));
}
var data = plumbing.fnk.schema.safe_get(map42120,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var current_datoms_index = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_db = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-db","current-db",213667882),null);var current_datoms_components = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628),cljs.core.PersistentArrayMap.EMPTY);var owner = plumbing.fnk.schema.safe_get(map42120,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datoms.t42160 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datoms.t42160 = (function (vec__42119,fnk42121,owner,datoms,data,map42120,current_datoms_index,owner42044,data__24441__auto__,p__42046,output_schema42122,current_db,output_checker42125,current_datoms_components,input_schema42123,opts__24442__auto__,validate__837__auto__,G__42126,input_checker42124,ufv__,meta42161){
this.vec__42119 = vec__42119;
this.fnk42121 = fnk42121;
this.owner = owner;
this.datoms = datoms;
this.data = data;
this.map42120 = map42120;
this.current_datoms_index = current_datoms_index;
this.owner42044 = owner42044;
this.data__24441__auto__ = data__24441__auto__;
this.p__42046 = p__42046;
this.output_schema42122 = output_schema42122;
this.current_db = current_db;
this.output_checker42125 = output_checker42125;
this.current_datoms_components = current_datoms_components;
this.input_schema42123 = input_schema42123;
this.opts__24442__auto__ = opts__24442__auto__;
this.validate__837__auto__ = validate__837__auto__;
this.G__42126 = G__42126;
this.input_checker42124 = input_checker42124;
this.ufv__ = ufv__;
this.meta42161 = meta42161;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datoms.t42160.cljs$lang$type = true;
stuttaford.radiant.datoms.t42160.cljs$lang$ctorStr = "stuttaford.radiant.datoms/t42160";
stuttaford.radiant.datoms.t42160.cljs$lang$ctorPrWriter = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema42122,input_schema42123,input_checker42124,output_checker42125,vec__42119,opts__24442__auto__){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"stuttaford.radiant.datoms/t42160");
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema42122,input_schema42123,input_checker42124,output_checker42125,vec__42119,opts__24442__auto__))
;
stuttaford.radiant.datoms.t42160.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datoms.t42160.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema42122,input_schema42123,input_checker42124,output_checker42125,vec__42119,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "datoms";
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema42122,input_schema42123,input_checker42124,output_checker42125,vec__42119,opts__24442__auto__))
;
stuttaford.radiant.datoms.t42160.prototype.om$core$IRender$ = true;
stuttaford.radiant.datoms.t42160.prototype.om$core$IRender$render$arity$1 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema42122,input_schema42123,input_checker42124,output_checker42125,vec__42119,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var attrs42163 = stuttaford.radiant.datoms.__GT_inputs.cljs$core$IFn$_invoke$arity$1(self__.data);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs42163))?sablono.interpreter.attributes(attrs42163):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs42163))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__42168 = null;return React.DOM.hr(G__42168);
})(),sablono.interpreter.interpret((cljs.core.truth_(self__.current_db)?(function (){var order_fn = stuttaford.radiant.model.order_fn(self__.current_datoms_index);var components = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),(function (){var G__42169 = stuttaford.radiant.model.ensure_components(self__.current_datoms_components);return (order_fn.cljs$core$IFn$_invoke$arity$1 ? order_fn.cljs$core$IFn$_invoke$arity$1(G__42169) : order_fn.call(null,G__42169));
})());var datoms__$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.datoms,self__.current_db,self__.current_datoms_index,components);return stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),stuttaford.radiant.model.cols(self__.current_datoms_index),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (order_fn,components,datoms__$2,attrs42163,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema42122,input_schema42123,input_checker42124,output_checker42125,vec__42119,opts__24442__auto__){
return (function (p__42170){var map__42171 = p__42170;var map__42171__$1 = ((cljs.core.seq_QMARK_(map__42171))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42171):map__42171);var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42171__$1,new cljs.core.Keyword(null,"v","v",21465059));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42171__$1,new cljs.core.Keyword(null,"a","a",-2123407586));var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42171__$1,new cljs.core.Keyword(null,"e","e",1381269198));var G__42172 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__42172) {
case "avet":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.datoms.a_value(a),(function (){var G__42173 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__42173) : stuttaford.radiant.datoms.v_value.call(null,G__42173));
})(),(function (){var G__42174 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__42174) : stuttaford.radiant.datoms.e_value.call(null,G__42174));
})()], null);

break;
case "aevt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.datoms.a_value(a),(function (){var G__42175 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__42175) : stuttaford.radiant.datoms.e_value.call(null,G__42175));
})(),(function (){var G__42176 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__42176) : stuttaford.radiant.datoms.v_value.call(null,G__42176));
})()], null);

break;
case "eavt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__42177 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__42177) : stuttaford.radiant.datoms.e_value.call(null,G__42177));
})(),stuttaford.radiant.datoms.a_value(a),(function (){var G__42178 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__42178) : stuttaford.radiant.datoms.v_value.call(null,G__42178));
})()], null);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.current_datoms_index))));

}
});})(order_fn,components,datoms__$2,attrs42163,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema42122,input_schema42123,input_checker42124,output_checker42125,vec__42119,opts__24442__auto__))
,datoms__$2)], null));
})():null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs42163),(function (){var G__42179 = null;return React.DOM.hr(G__42179);
})(),sablono.interpreter.interpret((cljs.core.truth_(self__.current_db)?(function (){var order_fn = stuttaford.radiant.model.order_fn(self__.current_datoms_index);var components = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),(function (){var G__42180 = stuttaford.radiant.model.ensure_components(self__.current_datoms_components);return (order_fn.cljs$core$IFn$_invoke$arity$1 ? order_fn.cljs$core$IFn$_invoke$arity$1(G__42180) : order_fn.call(null,G__42180));
})());var datoms__$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.datoms,self__.current_db,self__.current_datoms_index,components);return stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),stuttaford.radiant.model.cols(self__.current_datoms_index),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (order_fn,components,datoms__$2,attrs42163,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema42122,input_schema42123,input_checker42124,output_checker42125,vec__42119,opts__24442__auto__){
return (function (p__42181){var map__42182 = p__42181;var map__42182__$1 = ((cljs.core.seq_QMARK_(map__42182))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42182):map__42182);var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42182__$1,new cljs.core.Keyword(null,"v","v",21465059));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42182__$1,new cljs.core.Keyword(null,"a","a",-2123407586));var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42182__$1,new cljs.core.Keyword(null,"e","e",1381269198));var G__42183 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__42183) {
case "avet":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.datoms.a_value(a),(function (){var G__42184 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__42184) : stuttaford.radiant.datoms.v_value.call(null,G__42184));
})(),(function (){var G__42185 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__42185) : stuttaford.radiant.datoms.e_value.call(null,G__42185));
})()], null);

break;
case "aevt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.datoms.a_value(a),(function (){var G__42186 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__42186) : stuttaford.radiant.datoms.e_value.call(null,G__42186));
})(),(function (){var G__42187 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__42187) : stuttaford.radiant.datoms.v_value.call(null,G__42187));
})()], null);

break;
case "eavt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__42188 = e;return (stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.e_value.cljs$core$IFn$_invoke$arity$1(G__42188) : stuttaford.radiant.datoms.e_value.call(null,G__42188));
})(),stuttaford.radiant.datoms.a_value(a),(function (){var G__42189 = v;return (stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1 ? stuttaford.radiant.datoms.v_value.cljs$core$IFn$_invoke$arity$1(G__42189) : stuttaford.radiant.datoms.v_value.call(null,G__42189));
})()], null);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.current_datoms_index))));

}
});})(order_fn,components,datoms__$2,attrs42163,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema42122,input_schema42123,input_checker42124,output_checker42125,vec__42119,opts__24442__auto__))
,datoms__$2)], null));
})():null))], null))));
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema42122,input_schema42123,input_checker42124,output_checker42125,vec__42119,opts__24442__auto__))
;
stuttaford.radiant.datoms.t42160.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema42122,input_schema42123,input_checker42124,output_checker42125,vec__42119,opts__24442__auto__){
return (function (_42162){var self__ = this;
var _42162__$1 = this;return self__.meta42161;
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema42122,input_schema42123,input_checker42124,output_checker42125,vec__42119,opts__24442__auto__))
;
stuttaford.radiant.datoms.t42160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema42122,input_schema42123,input_checker42124,output_checker42125,vec__42119,opts__24442__auto__){
return (function (_42162,meta42161__$1){var self__ = this;
var _42162__$1 = this;return (new stuttaford.radiant.datoms.t42160(self__.vec__42119,self__.fnk42121,self__.owner,self__.datoms,self__.data,self__.map42120,self__.current_datoms_index,self__.owner42044,self__.data__24441__auto__,self__.p__42046,self__.output_schema42122,self__.current_db,self__.output_checker42125,self__.current_datoms_components,self__.input_schema42123,self__.opts__24442__auto__,self__.validate__837__auto__,self__.G__42126,self__.input_checker42124,self__.ufv__,meta42161__$1));
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema42122,input_schema42123,input_checker42124,output_checker42125,vec__42119,opts__24442__auto__))
;
stuttaford.radiant.datoms.__GT_t42160 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema42122,input_schema42123,input_checker42124,output_checker42125,vec__42119,opts__24442__auto__){
return (function __GT_t42160(vec__42119__$1,fnk42121__$1,owner__$1,datoms__$1,data__$1,map42120__$1,current_datoms_index__$1,owner42044__$1,data__24441__auto____$1,p__42046__$1,output_schema42122__$1,current_db__$1,output_checker42125__$1,current_datoms_components__$1,input_schema42123__$1,opts__24442__auto____$1,validate__837__auto____$1,G__42126__$1,input_checker42124__$1,ufv____$1,meta42161){return (new stuttaford.radiant.datoms.t42160(vec__42119__$1,fnk42121__$1,owner__$1,datoms__$1,data__$1,map42120__$1,current_datoms_index__$1,owner42044__$1,data__24441__auto____$1,p__42046__$1,output_schema42122__$1,current_db__$1,output_checker42125__$1,current_datoms_components__$1,input_schema42123__$1,opts__24442__auto____$1,validate__837__auto____$1,G__42126__$1,input_checker42124__$1,ufv____$1,meta42161));
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema42122,input_schema42123,input_checker42124,output_checker42125,vec__42119,opts__24442__auto__))
;
}
return (new stuttaford.radiant.datoms.t42160(vec__42119,fnk42121,owner,datoms,data,map42120,current_datoms_index,owner42044,data__24441__auto__,p__42046,output_schema42122,current_db,output_checker42125,current_datoms_components,input_schema42123,opts__24442__auto__,validate__837__auto__,G__42126,input_checker42124,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___42196 = (function (){var G__42190 = o__840__auto__;return (output_checker42125.cljs$core$IFn$_invoke$arity$1 ? output_checker42125.cljs$core$IFn$_invoke$arity$1(G__42190) : output_checker42125.call(null,G__42190));
})();if(cljs.core.truth_(temp__4126__auto___42196))
{var error__839__auto___42197 = temp__4126__auto___42196;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk42121","fnk42121",1522150498,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___42197], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema42122,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___42197], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema42122,input_schema42123,input_checker42124,output_checker42125,vec__42119,opts__24442__auto__))
,schema.core.make_fn_schema(output_schema42122,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema42123], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24442__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner42044,new cljs.core.Keyword(null,"data","data",-232669377),data__24441__auto__], null));
};
var datoms = function (data__24441__auto__,owner42044,var_args){
var p__42046 = null;if (arguments.length > 2) {
  p__42046 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datoms__delegate.call(this,data__24441__auto__,owner42044,p__42046);};
datoms.cljs$lang$maxFixedArity = 2;
datoms.cljs$lang$applyTo = (function (arglist__42198){
var data__24441__auto__ = cljs.core.first(arglist__42198);
arglist__42198 = cljs.core.next(arglist__42198);
var owner42044 = cljs.core.first(arglist__42198);
var p__42046 = cljs.core.rest(arglist__42198);
return datoms__delegate(data__24441__auto__,owner42044,p__42046);
});
datoms.cljs$core$IFn$_invoke$arity$variadic = datoms__delegate;
return datoms;
})()
;
stuttaford.radiant.datoms.__GT_datoms = (function() {
var __GT_datoms = null;
var __GT_datoms__1 = (function (cursor__24410__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.datoms,cursor__24410__auto__);
});
var __GT_datoms__2 = (function (cursor__24410__auto__,m42045){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datoms.datoms,cursor__24410__auto__,m42045);
});
__GT_datoms = function(cursor__24410__auto__,m42045){
switch(arguments.length){
case 1:
return __GT_datoms__1.call(this,cursor__24410__auto__);
case 2:
return __GT_datoms__2.call(this,cursor__24410__auto__,m42045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_datoms.cljs$core$IFn$_invoke$arity$1 = __GT_datoms__1;
__GT_datoms.cljs$core$IFn$_invoke$arity$2 = __GT_datoms__2;
return __GT_datoms;
})()
;
//# sourceMappingURL=datoms.js.map