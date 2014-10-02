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
stuttaford.radiant.datoms.component_status = (function component_status(p__69916,component_values,component,value){var vec__69919 = p__69916;var c_one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69919,(0),null);var c_two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69919,(1),null);if(cljs.core.seq(value))
{return "success";
} else
{var vec__69920 = component_values;var one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69920,(0),null);var two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69920,(1),null);var three = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69920,(2),null);var one__$1 = cljs.core.boolean$(cljs.core.seq(one));var two__$1 = cljs.core.boolean$(cljs.core.seq(two));var three__$1 = cljs.core.boolean$(cljs.core.seq(three));if((!(one__$1)) && ((two__$1) || (three__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,c_one)))
{return "error";
} else
{if((!(two__$1)) && (three__$1) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,c_two)))
{return "error";
} else
{return null;

}
}
}
});
stuttaford.radiant.datoms.index_input = (function index_input(c,current_datoms_index){return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),cljs.core.array_seq([om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20763__auto__ = (function iter__69931(s__69932){return (new cljs.core.LazySeq(null,(function (){var s__69932__$1 = s__69932;while(true){
var temp__4126__auto__ = cljs.core.seq(s__69932__$1);if(temp__4126__auto__)
{var s__69932__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__69932__$2))
{var c__20761__auto__ = cljs.core.chunk_first(s__69932__$2);var size__20762__auto__ = cljs.core.count(c__20761__auto__);var b__69934 = cljs.core.chunk_buffer(size__20762__auto__);if((function (){var i__69933 = (0);while(true){
if((i__69933 < size__20762__auto__))
{var index = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20761__auto__,i__69933);cljs.core.chunk_append(b__69934,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__69939 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__69933,index,c__20761__auto__,size__20762__auto__,b__69934,s__69932__$2,temp__4126__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-index","set-datoms-index",-683154215),index], null));
});})(i__69933,index,c__20761__auto__,size__20762__auto__,b__69934,s__69932__$2,temp__4126__auto__))
], null);var G__69939__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,current_datoms_index))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69939,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__69939);return G__69939__$1;
})(),cljs.core.array_seq([clojure.string.upper_case(cljs.core.name(index))], 0)));
{
var G__69941 = (i__69933 + (1));
i__69933 = G__69941;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__69934),iter__69931(cljs.core.chunk_rest(s__69932__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__69934),null);
}
} else
{var index = cljs.core.first(s__69932__$2);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__69940 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (index,s__69932__$2,temp__4126__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-index","set-datoms-index",-683154215),index], null));
});})(index,s__69932__$2,temp__4126__auto__))
], null);var G__69940__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,current_datoms_index))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69940,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__69940);return G__69940__$1;
})(),cljs.core.array_seq([clojure.string.upper_case(cljs.core.name(index))], 0)),iter__69931(cljs.core.rest(s__69932__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20763__auto__(stuttaford.radiant.model.indexes);
})()], 0))], 0));
});
stuttaford.radiant.datoms.component_input = (function component_input(c,components,current_datoms_components,component){return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),(3),new cljs.core.Keyword(null,"class","class",-2030961996),"datoms-components-inputs"], null),cljs.core.array_seq([om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),true,new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),clojure.string.upper_case(cljs.core.name(component)),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),stuttaford.radiant.datoms.component_status(components,cljs.core.map.cljs$core$IFn$_invoke$arity$2(current_datoms_components,components),component,(function (){var G__69945 = current_datoms_components;return (component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(G__69945) : component.call(null,G__69945));
})()),new cljs.core.Keyword(null,"value","value",305978217),(function (){var G__69946 = current_datoms_components;return (component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(G__69946) : component.call(null,G__69946));
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__69942_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,p1__69942_SHARP_.target.value], null)], null));
})], null))], 0));
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.datoms.inputs = (function() { 
var inputs__delegate = function (data__24172__auto__,owner69947,p__69949){var vec__69971 = p__69949;var opts__24173__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69971,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema69975 = schema.core.Any;var input_schema69976 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628)),schema.core.Any,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map69972","map69972",-1755386167,null))], null);var input_checker69977 = schema.core.checker(input_schema69976);var output_checker69978 = schema.core.checker(output_schema69975);return schema.core.schematize_fn(((function (ufv__,output_schema69975,input_schema69976,input_checker69977,output_checker69978,vec__69971,opts__24173__auto__){
return (function fnk69974(G__69979){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___69992 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__69979], null);var temp__4126__auto___69993 = (function (){var G__69986 = args__838__auto___69992;return (input_checker69977.cljs$core$IFn$_invoke$arity$1 ? input_checker69977.cljs$core$IFn$_invoke$arity$1(G__69986) : input_checker69977.call(null,G__69986));
})();if(cljs.core.truth_(temp__4126__auto___69993))
{var error__839__auto___69994 = temp__4126__auto___69993;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk69974","fnk69974",598924740,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___69994], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema69976,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___69992,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___69994], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map69972 = G__69979;while(true){
if(cljs.core.map_QMARK_(map69972))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map69972], 0))));
}
var map69973 = plumbing.fnk.schema.safe_get(map69972,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var current_datoms_index = plumbing.fnk.schema.safe_get(map69973,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_datoms_components = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map69973,new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"e","e",1381269198),null,new cljs.core.Keyword(null,"a","a",-2123407586),null,new cljs.core.Keyword(null,"v","v",21465059),null], null));var owner = plumbing.fnk.schema.safe_get(map69972,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datoms.t69987 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datoms.t69987 = (function (input_schema69976,fnk69974,owner,opts__24173__auto__,output_checker69978,map69972,G__69979,current_datoms_index,p__69949,data__24172__auto__,input_checker69977,current_datoms_components,output_schema69975,vec__69971,inputs,validate__837__auto__,ufv__,map69973,owner69947,meta69988){
this.input_schema69976 = input_schema69976;
this.fnk69974 = fnk69974;
this.owner = owner;
this.opts__24173__auto__ = opts__24173__auto__;
this.output_checker69978 = output_checker69978;
this.map69972 = map69972;
this.G__69979 = G__69979;
this.current_datoms_index = current_datoms_index;
this.p__69949 = p__69949;
this.data__24172__auto__ = data__24172__auto__;
this.input_checker69977 = input_checker69977;
this.current_datoms_components = current_datoms_components;
this.output_schema69975 = output_schema69975;
this.vec__69971 = vec__69971;
this.inputs = inputs;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.map69973 = map69973;
this.owner69947 = owner69947;
this.meta69988 = meta69988;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datoms.t69987.cljs$lang$type = true;
stuttaford.radiant.datoms.t69987.cljs$lang$ctorStr = "stuttaford.radiant.datoms/t69987";
stuttaford.radiant.datoms.t69987.cljs$lang$ctorPrWriter = ((function (owner,current_datoms_components,current_datoms_index,map69973,validate__837__auto__,ufv__,output_schema69975,input_schema69976,input_checker69977,output_checker69978,vec__69971,opts__24173__auto__){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"stuttaford.radiant.datoms/t69987");
});})(owner,current_datoms_components,current_datoms_index,map69973,validate__837__auto__,ufv__,output_schema69975,input_schema69976,input_checker69977,output_checker69978,vec__69971,opts__24173__auto__))
;
stuttaford.radiant.datoms.t69987.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datoms.t69987.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,current_datoms_components,current_datoms_index,map69973,validate__837__auto__,ufv__,output_schema69975,input_schema69976,input_checker69977,output_checker69978,vec__69971,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "inputs";
});})(owner,current_datoms_components,current_datoms_index,map69973,validate__837__auto__,ufv__,output_schema69975,input_schema69976,input_checker69977,output_checker69978,vec__69971,opts__24173__auto__))
;
stuttaford.radiant.datoms.t69987.prototype.om$core$IRender$ = true;
stuttaford.radiant.datoms.t69987.prototype.om$core$IRender$render$arity$1 = ((function (owner,current_datoms_components,current_datoms_index,map69973,validate__837__auto__,ufv__,output_schema69975,input_schema69976,input_checker69977,output_checker69978,vec__69971,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([stuttaford.radiant.datoms.index_input(c,self__.current_datoms_index),(function (){var components = (function (){var G__69990 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__69990) {
case "avet":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"e","e",1381269198)], null);

break;
case "aevt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"v","v",21465059)], null);

break;
case "eavt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"v","v",21465059)], null);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.current_datoms_index))));

}
})();return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(stuttaford.radiant.datoms.component_input,c,components,self__.current_datoms_components),components);
})()], 0));
});})(owner,current_datoms_components,current_datoms_index,map69973,validate__837__auto__,ufv__,output_schema69975,input_schema69976,input_checker69977,output_checker69978,vec__69971,opts__24173__auto__))
;
stuttaford.radiant.datoms.t69987.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,current_datoms_components,current_datoms_index,map69973,validate__837__auto__,ufv__,output_schema69975,input_schema69976,input_checker69977,output_checker69978,vec__69971,opts__24173__auto__){
return (function (_69989){var self__ = this;
var _69989__$1 = this;return self__.meta69988;
});})(owner,current_datoms_components,current_datoms_index,map69973,validate__837__auto__,ufv__,output_schema69975,input_schema69976,input_checker69977,output_checker69978,vec__69971,opts__24173__auto__))
;
stuttaford.radiant.datoms.t69987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,current_datoms_components,current_datoms_index,map69973,validate__837__auto__,ufv__,output_schema69975,input_schema69976,input_checker69977,output_checker69978,vec__69971,opts__24173__auto__){
return (function (_69989,meta69988__$1){var self__ = this;
var _69989__$1 = this;return (new stuttaford.radiant.datoms.t69987(self__.input_schema69976,self__.fnk69974,self__.owner,self__.opts__24173__auto__,self__.output_checker69978,self__.map69972,self__.G__69979,self__.current_datoms_index,self__.p__69949,self__.data__24172__auto__,self__.input_checker69977,self__.current_datoms_components,self__.output_schema69975,self__.vec__69971,self__.inputs,self__.validate__837__auto__,self__.ufv__,self__.map69973,self__.owner69947,meta69988__$1));
});})(owner,current_datoms_components,current_datoms_index,map69973,validate__837__auto__,ufv__,output_schema69975,input_schema69976,input_checker69977,output_checker69978,vec__69971,opts__24173__auto__))
;
stuttaford.radiant.datoms.__GT_t69987 = ((function (owner,current_datoms_components,current_datoms_index,map69973,validate__837__auto__,ufv__,output_schema69975,input_schema69976,input_checker69977,output_checker69978,vec__69971,opts__24173__auto__){
return (function __GT_t69987(input_schema69976__$1,fnk69974__$1,owner__$1,opts__24173__auto____$1,output_checker69978__$1,map69972__$1,G__69979__$1,current_datoms_index__$1,p__69949__$1,data__24172__auto____$1,input_checker69977__$1,current_datoms_components__$1,output_schema69975__$1,vec__69971__$1,inputs__$1,validate__837__auto____$1,ufv____$1,map69973__$1,owner69947__$1,meta69988){return (new stuttaford.radiant.datoms.t69987(input_schema69976__$1,fnk69974__$1,owner__$1,opts__24173__auto____$1,output_checker69978__$1,map69972__$1,G__69979__$1,current_datoms_index__$1,p__69949__$1,data__24172__auto____$1,input_checker69977__$1,current_datoms_components__$1,output_schema69975__$1,vec__69971__$1,inputs__$1,validate__837__auto____$1,ufv____$1,map69973__$1,owner69947__$1,meta69988));
});})(owner,current_datoms_components,current_datoms_index,map69973,validate__837__auto__,ufv__,output_schema69975,input_schema69976,input_checker69977,output_checker69978,vec__69971,opts__24173__auto__))
;
}
return (new stuttaford.radiant.datoms.t69987(input_schema69976,fnk69974,owner,opts__24173__auto__,output_checker69978,map69972,G__69979,current_datoms_index,p__69949,data__24172__auto__,input_checker69977,current_datoms_components,output_schema69975,vec__69971,inputs,validate__837__auto__,ufv__,map69973,owner69947,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___69996 = (function (){var G__69991 = o__840__auto__;return (output_checker69978.cljs$core$IFn$_invoke$arity$1 ? output_checker69978.cljs$core$IFn$_invoke$arity$1(G__69991) : output_checker69978.call(null,G__69991));
})();if(cljs.core.truth_(temp__4126__auto___69996))
{var error__839__auto___69997 = temp__4126__auto___69996;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk69974","fnk69974",598924740,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___69997], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema69975,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___69997], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema69975,input_schema69976,input_checker69977,output_checker69978,vec__69971,opts__24173__auto__))
,schema.core.make_fn_schema(output_schema69975,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema69976], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24173__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner69947,new cljs.core.Keyword(null,"data","data",-232669377),data__24172__auto__], null));
};
var inputs = function (data__24172__auto__,owner69947,var_args){
var p__69949 = null;if (arguments.length > 2) {
  p__69949 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return inputs__delegate.call(this,data__24172__auto__,owner69947,p__69949);};
inputs.cljs$lang$maxFixedArity = 2;
inputs.cljs$lang$applyTo = (function (arglist__69998){
var data__24172__auto__ = cljs.core.first(arglist__69998);
arglist__69998 = cljs.core.next(arglist__69998);
var owner69947 = cljs.core.first(arglist__69998);
var p__69949 = cljs.core.rest(arglist__69998);
return inputs__delegate(data__24172__auto__,owner69947,p__69949);
});
inputs.cljs$core$IFn$_invoke$arity$variadic = inputs__delegate;
return inputs;
})()
;
stuttaford.radiant.datoms.__GT_inputs = (function() {
var __GT_inputs = null;
var __GT_inputs__1 = (function (cursor__24141__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.inputs,cursor__24141__auto__);
});
var __GT_inputs__2 = (function (cursor__24141__auto__,m69948){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datoms.inputs,cursor__24141__auto__,m69948);
});
__GT_inputs = function(cursor__24141__auto__,m69948){
switch(arguments.length){
case 1:
return __GT_inputs__1.call(this,cursor__24141__auto__);
case 2:
return __GT_inputs__2.call(this,cursor__24141__auto__,m69948);
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
var value__delegate = function (data__24172__auto__,owner69999,p__70001){var vec__70026 = p__70001;var opts__24173__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70026,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema70031 = schema.core.Any;var input_schema70032 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component","component",1555936782),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"value","value",305978217),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map70027","map70027",1990484182,null))], null);var input_checker70033 = schema.core.checker(input_schema70032);var output_checker70034 = schema.core.checker(output_schema70031);return schema.core.schematize_fn(((function (ufv__,output_schema70031,input_schema70032,input_checker70033,output_checker70034,vec__70026,opts__24173__auto__){
return (function fnk70030(G__70035){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___70050 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__70035], null);var temp__4126__auto___70051 = (function (){var G__70043 = args__838__auto___70050;return (input_checker70033.cljs$core$IFn$_invoke$arity$1 ? input_checker70033.cljs$core$IFn$_invoke$arity$1(G__70043) : input_checker70033.call(null,G__70043));
})();if(cljs.core.truth_(temp__4126__auto___70051))
{var error__839__auto___70052 = temp__4126__auto___70051;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk70030","fnk70030",890827523,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___70052], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema70032,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___70050,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___70052], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map70027 = G__70035;while(true){
if(cljs.core.map_QMARK_(map70027))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map70027], 0))));
}
var map70029 = plumbing.fnk.schema.safe_get(map70027,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var value__$1 = plumbing.fnk.schema.safe_get(map70029,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map70027,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map70028 = plumbing.fnk.schema.safe_get(map70027,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component = plumbing.fnk.schema.safe_get(map70028,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));if(typeof stuttaford.radiant.datoms.t70044 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datoms.t70044 = (function (output_checker70034,owner69999,fnk70030,owner,p__70001,opts__24173__auto__,map70028,vec__70026,output_schema70031,data__24172__auto__,value,input_checker70033,component,input_schema70032,map70027,map70029,validate__837__auto__,ufv__,G__70035,meta70045){
this.output_checker70034 = output_checker70034;
this.owner69999 = owner69999;
this.fnk70030 = fnk70030;
this.owner = owner;
this.p__70001 = p__70001;
this.opts__24173__auto__ = opts__24173__auto__;
this.map70028 = map70028;
this.vec__70026 = vec__70026;
this.output_schema70031 = output_schema70031;
this.data__24172__auto__ = data__24172__auto__;
this.value = value;
this.input_checker70033 = input_checker70033;
this.component = component;
this.input_schema70032 = input_schema70032;
this.map70027 = map70027;
this.map70029 = map70029;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.G__70035 = G__70035;
this.meta70045 = meta70045;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datoms.t70044.cljs$lang$type = true;
stuttaford.radiant.datoms.t70044.cljs$lang$ctorStr = "stuttaford.radiant.datoms/t70044";
stuttaford.radiant.datoms.t70044.cljs$lang$ctorPrWriter = ((function (component,map70028,owner,value__$1,map70029,validate__837__auto__,ufv__,output_schema70031,input_schema70032,input_checker70033,output_checker70034,vec__70026,opts__24173__auto__){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"stuttaford.radiant.datoms/t70044");
});})(component,map70028,owner,value__$1,map70029,validate__837__auto__,ufv__,output_schema70031,input_schema70032,input_checker70033,output_checker70034,vec__70026,opts__24173__auto__))
;
stuttaford.radiant.datoms.t70044.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datoms.t70044.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (component,map70028,owner,value__$1,map70029,validate__837__auto__,ufv__,output_schema70031,input_schema70032,input_checker70033,output_checker70034,vec__70026,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "value";
});})(component,map70028,owner,value__$1,map70029,validate__837__auto__,ufv__,output_schema70031,input_schema70032,input_checker70033,output_checker70034,vec__70026,opts__24173__auto__))
;
stuttaford.radiant.datoms.t70044.prototype.om$core$IRender$ = true;
stuttaford.radiant.datoms.t70044.prototype.om$core$IRender$render$arity$1 = ((function (component,map70028,owner,value__$1,map70029,validate__837__auto__,ufv__,output_schema70031,input_schema70032,input_checker70033,output_checker70034,vec__70026,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var G__70047 = {"href": "#", "onClick": ((function (c,___$1,component,map70028,owner,value__$1,map70029,validate__837__auto__,ufv__,output_schema70031,input_schema70032,input_checker70033,output_checker70034,vec__70026,opts__24173__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.component,self__.value], null)], null));
});})(c,___$1,component,map70028,owner,value__$1,map70029,validate__837__auto__,ufv__,output_schema70031,input_schema70032,input_checker70033,output_checker70034,vec__70026,opts__24173__auto__))
};var G__70048 = sablono.interpreter.interpret(self__.value);return React.DOM.a(G__70047,G__70048);
});})(component,map70028,owner,value__$1,map70029,validate__837__auto__,ufv__,output_schema70031,input_schema70032,input_checker70033,output_checker70034,vec__70026,opts__24173__auto__))
;
stuttaford.radiant.datoms.t70044.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (component,map70028,owner,value__$1,map70029,validate__837__auto__,ufv__,output_schema70031,input_schema70032,input_checker70033,output_checker70034,vec__70026,opts__24173__auto__){
return (function (_70046){var self__ = this;
var _70046__$1 = this;return self__.meta70045;
});})(component,map70028,owner,value__$1,map70029,validate__837__auto__,ufv__,output_schema70031,input_schema70032,input_checker70033,output_checker70034,vec__70026,opts__24173__auto__))
;
stuttaford.radiant.datoms.t70044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (component,map70028,owner,value__$1,map70029,validate__837__auto__,ufv__,output_schema70031,input_schema70032,input_checker70033,output_checker70034,vec__70026,opts__24173__auto__){
return (function (_70046,meta70045__$1){var self__ = this;
var _70046__$1 = this;return (new stuttaford.radiant.datoms.t70044(self__.output_checker70034,self__.owner69999,self__.fnk70030,self__.owner,self__.p__70001,self__.opts__24173__auto__,self__.map70028,self__.vec__70026,self__.output_schema70031,self__.data__24172__auto__,self__.value,self__.input_checker70033,self__.component,self__.input_schema70032,self__.map70027,self__.map70029,self__.validate__837__auto__,self__.ufv__,self__.G__70035,meta70045__$1));
});})(component,map70028,owner,value__$1,map70029,validate__837__auto__,ufv__,output_schema70031,input_schema70032,input_checker70033,output_checker70034,vec__70026,opts__24173__auto__))
;
stuttaford.radiant.datoms.__GT_t70044 = ((function (component,map70028,owner,value__$1,map70029,validate__837__auto__,ufv__,output_schema70031,input_schema70032,input_checker70033,output_checker70034,vec__70026,opts__24173__auto__){
return (function __GT_t70044(output_checker70034__$1,owner69999__$1,fnk70030__$1,owner__$1,p__70001__$1,opts__24173__auto____$1,map70028__$1,vec__70026__$1,output_schema70031__$1,data__24172__auto____$1,value__$2,input_checker70033__$1,component__$1,input_schema70032__$1,map70027__$1,map70029__$1,validate__837__auto____$1,ufv____$1,G__70035__$1,meta70045){return (new stuttaford.radiant.datoms.t70044(output_checker70034__$1,owner69999__$1,fnk70030__$1,owner__$1,p__70001__$1,opts__24173__auto____$1,map70028__$1,vec__70026__$1,output_schema70031__$1,data__24172__auto____$1,value__$2,input_checker70033__$1,component__$1,input_schema70032__$1,map70027__$1,map70029__$1,validate__837__auto____$1,ufv____$1,G__70035__$1,meta70045));
});})(component,map70028,owner,value__$1,map70029,validate__837__auto__,ufv__,output_schema70031,input_schema70032,input_checker70033,output_checker70034,vec__70026,opts__24173__auto__))
;
}
return (new stuttaford.radiant.datoms.t70044(output_checker70034,owner69999,fnk70030,owner,p__70001,opts__24173__auto__,map70028,vec__70026,output_schema70031,data__24172__auto__,value__$1,input_checker70033,component,input_schema70032,map70027,map70029,validate__837__auto__,ufv__,G__70035,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___70053 = (function (){var G__70049 = o__840__auto__;return (output_checker70034.cljs$core$IFn$_invoke$arity$1 ? output_checker70034.cljs$core$IFn$_invoke$arity$1(G__70049) : output_checker70034.call(null,G__70049));
})();if(cljs.core.truth_(temp__4126__auto___70053))
{var error__839__auto___70054 = temp__4126__auto___70053;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk70030","fnk70030",890827523,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___70054], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema70031,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___70054], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema70031,input_schema70032,input_checker70033,output_checker70034,vec__70026,opts__24173__auto__))
,schema.core.make_fn_schema(output_schema70031,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema70032], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24173__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner69999,new cljs.core.Keyword(null,"data","data",-232669377),data__24172__auto__], null));
};
var value = function (data__24172__auto__,owner69999,var_args){
var p__70001 = null;if (arguments.length > 2) {
  p__70001 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return value__delegate.call(this,data__24172__auto__,owner69999,p__70001);};
value.cljs$lang$maxFixedArity = 2;
value.cljs$lang$applyTo = (function (arglist__70055){
var data__24172__auto__ = cljs.core.first(arglist__70055);
arglist__70055 = cljs.core.next(arglist__70055);
var owner69999 = cljs.core.first(arglist__70055);
var p__70001 = cljs.core.rest(arglist__70055);
return value__delegate(data__24172__auto__,owner69999,p__70001);
});
value.cljs$core$IFn$_invoke$arity$variadic = value__delegate;
return value;
})()
;
stuttaford.radiant.datoms.__GT_value = (function() {
var __GT_value = null;
var __GT_value__1 = (function (cursor__24141__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.value,cursor__24141__auto__);
});
var __GT_value__2 = (function (cursor__24141__auto__,m70000){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datoms.value,cursor__24141__auto__,m70000);
});
__GT_value = function(cursor__24141__auto__,m70000){
switch(arguments.length){
case 1:
return __GT_value__1.call(this,cursor__24141__auto__);
case 2:
return __GT_value__2.call(this,cursor__24141__auto__,m70000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_value.cljs$core$IFn$_invoke$arity$1 = __GT_value__1;
__GT_value.cljs$core$IFn$_invoke$arity$2 = __GT_value__2;
return __GT_value;
})()
;
/**
* @param {...*} var_args
*/
stuttaford.radiant.datoms.datoms = (function() { 
var datoms__delegate = function (data__24172__auto__,owner70056,p__70058){var vec__70115 = p__70058;var opts__24173__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70115,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema70118 = schema.core.Any;var input_schema70119 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-db","current-db",213667882)),schema.core.Any,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map70116","map70116",431925923,null))], null);var input_checker70120 = schema.core.checker(input_schema70119);var output_checker70121 = schema.core.checker(output_schema70118);return schema.core.schematize_fn(((function (ufv__,output_schema70118,input_schema70119,input_checker70120,output_checker70121,vec__70115,opts__24173__auto__){
return (function fnk70117(G__70122){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___70171 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__70122], null);var temp__4126__auto___70172 = (function (){var G__70147 = args__838__auto___70171;return (input_checker70120.cljs$core$IFn$_invoke$arity$1 ? input_checker70120.cljs$core$IFn$_invoke$arity$1(G__70147) : input_checker70120.call(null,G__70147));
})();if(cljs.core.truth_(temp__4126__auto___70172))
{var error__839__auto___70173 = temp__4126__auto___70172;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk70117","fnk70117",1425763711,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___70173], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema70119,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___70171,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___70173], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map70116 = G__70122;while(true){
if(cljs.core.map_QMARK_(map70116))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map70116], 0))));
}
var data = plumbing.fnk.schema.safe_get(map70116,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var current_datoms_index = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_db = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-db","current-db",213667882),null);var current_datoms_components = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"e","e",1381269198),null,new cljs.core.Keyword(null,"a","a",-2123407586),null,new cljs.core.Keyword(null,"v","v",21465059),null], null));var owner = plumbing.fnk.schema.safe_get(map70116,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datoms.t70148 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datoms.t70148 = (function (output_schema70118,map70116,owner,opts__24173__auto__,datoms,owner70056,data,output_checker70121,vec__70115,p__70058,current_datoms_index,input_schema70119,data__24172__auto__,input_checker70120,current_db,current_datoms_components,G__70122,validate__837__auto__,ufv__,fnk70117,meta70149){
this.output_schema70118 = output_schema70118;
this.map70116 = map70116;
this.owner = owner;
this.opts__24173__auto__ = opts__24173__auto__;
this.datoms = datoms;
this.owner70056 = owner70056;
this.data = data;
this.output_checker70121 = output_checker70121;
this.vec__70115 = vec__70115;
this.p__70058 = p__70058;
this.current_datoms_index = current_datoms_index;
this.input_schema70119 = input_schema70119;
this.data__24172__auto__ = data__24172__auto__;
this.input_checker70120 = input_checker70120;
this.current_db = current_db;
this.current_datoms_components = current_datoms_components;
this.G__70122 = G__70122;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.fnk70117 = fnk70117;
this.meta70149 = meta70149;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datoms.t70148.cljs$lang$type = true;
stuttaford.radiant.datoms.t70148.cljs$lang$ctorStr = "stuttaford.radiant.datoms/t70148";
stuttaford.radiant.datoms.t70148.cljs$lang$ctorPrWriter = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema70118,input_schema70119,input_checker70120,output_checker70121,vec__70115,opts__24173__auto__){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"stuttaford.radiant.datoms/t70148");
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema70118,input_schema70119,input_checker70120,output_checker70121,vec__70115,opts__24173__auto__))
;
stuttaford.radiant.datoms.t70148.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datoms.t70148.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema70118,input_schema70119,input_checker70120,output_checker70121,vec__70115,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "datoms";
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema70118,input_schema70119,input_checker70120,output_checker70121,vec__70115,opts__24173__auto__))
;
stuttaford.radiant.datoms.t70148.prototype.om$core$IRender$ = true;
stuttaford.radiant.datoms.t70148.prototype.om$core$IRender$render$arity$1 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema70118,input_schema70119,input_checker70120,output_checker70121,vec__70115,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var attrs70151 = stuttaford.radiant.datoms.__GT_inputs.cljs$core$IFn$_invoke$arity$1(self__.data);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs70151))?sablono.interpreter.attributes(attrs70151):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs70151))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__70156 = null;return React.DOM.hr(G__70156);
})(),sablono.interpreter.interpret((cljs.core.truth_(self__.current_db)?(function (){var order_fn = (function (){var G__70157 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__70157) {
case "avet":
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.model.a_fn,stuttaford.radiant.model.v_fn,stuttaford.radiant.model.e_fn);

break;
case "aevt":
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.model.a_fn,stuttaford.radiant.model.e_fn,stuttaford.radiant.model.v_fn);

break;
case "eavt":
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.model.e_fn,stuttaford.radiant.model.a_fn,stuttaford.radiant.model.v_fn);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.current_datoms_index))));

}
})();var components = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),(function (){var G__70158 = self__.current_datoms_components;return (order_fn.cljs$core$IFn$_invoke$arity$1 ? order_fn.cljs$core$IFn$_invoke$arity$1(G__70158) : order_fn.call(null,G__70158));
})());var datoms__$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.datoms,self__.current_db,self__.current_datoms_index,components);return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),(function (){var G__70159 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__70159) {
case "avet":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","V","E"], null);

break;
case "aevt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","E","V"], null);

break;
case "eavt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["E","A","V"], null);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.current_datoms_index))));

}
})(),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (order_fn,components,datoms__$2,attrs70151,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema70118,input_schema70119,input_checker70120,output_checker70121,vec__70115,opts__24173__auto__){
return (function (p__70160){var map__70161 = p__70160;var map__70161__$1 = ((cljs.core.seq_QMARK_(map__70161))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70161):map__70161);var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70161__$1,new cljs.core.Keyword(null,"v","v",21465059));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70161__$1,new cljs.core.Keyword(null,"a","a",-2123407586));var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70161__$1,new cljs.core.Keyword(null,"e","e",1381269198));var G__70162 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__70162) {
case "avet":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.datoms.__GT_value.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"a","a",-2123407586)], null)], null)),stuttaford.radiant.datoms.__GT_value.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"v","v",21465059)], null)], null)),stuttaford.radiant.datoms.__GT_value.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),e], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"e","e",1381269198)], null)], null))], null);

break;
case "aevt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.datoms.__GT_value.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"a","a",-2123407586)], null)], null)),stuttaford.radiant.datoms.__GT_value.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),e], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"e","e",1381269198)], null)], null)),stuttaford.radiant.datoms.__GT_value.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"v","v",21465059)], null)], null))], null);

break;
case "eavt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.datoms.__GT_value.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),e], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"e","e",1381269198)], null)], null)),stuttaford.radiant.datoms.__GT_value.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"a","a",-2123407586)], null)], null)),stuttaford.radiant.datoms.__GT_value.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"v","v",21465059)], null)], null))], null);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.current_datoms_index))));

}
});})(order_fn,components,datoms__$2,attrs70151,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema70118,input_schema70119,input_checker70120,output_checker70121,vec__70115,opts__24173__auto__))
,datoms__$2)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.current_datoms_index,components], 0))], null));
})():null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs70151),(function (){var G__70163 = null;return React.DOM.hr(G__70163);
})(),sablono.interpreter.interpret((cljs.core.truth_(self__.current_db)?(function (){var order_fn = (function (){var G__70164 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__70164) {
case "avet":
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.model.a_fn,stuttaford.radiant.model.v_fn,stuttaford.radiant.model.e_fn);

break;
case "aevt":
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.model.a_fn,stuttaford.radiant.model.e_fn,stuttaford.radiant.model.v_fn);

break;
case "eavt":
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.model.e_fn,stuttaford.radiant.model.a_fn,stuttaford.radiant.model.v_fn);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.current_datoms_index))));

}
})();var components = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),(function (){var G__70165 = self__.current_datoms_components;return (order_fn.cljs$core$IFn$_invoke$arity$1 ? order_fn.cljs$core$IFn$_invoke$arity$1(G__70165) : order_fn.call(null,G__70165));
})());var datoms__$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.datoms,self__.current_db,self__.current_datoms_index,components);return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),(function (){var G__70166 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__70166) {
case "avet":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","V","E"], null);

break;
case "aevt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","E","V"], null);

break;
case "eavt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["E","A","V"], null);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.current_datoms_index))));

}
})(),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (order_fn,components,datoms__$2,attrs70151,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema70118,input_schema70119,input_checker70120,output_checker70121,vec__70115,opts__24173__auto__){
return (function (p__70167){var map__70168 = p__70167;var map__70168__$1 = ((cljs.core.seq_QMARK_(map__70168))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70168):map__70168);var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70168__$1,new cljs.core.Keyword(null,"v","v",21465059));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70168__$1,new cljs.core.Keyword(null,"a","a",-2123407586));var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70168__$1,new cljs.core.Keyword(null,"e","e",1381269198));var G__70169 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__70169) {
case "avet":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.datoms.__GT_value.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"a","a",-2123407586)], null)], null)),stuttaford.radiant.datoms.__GT_value.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"v","v",21465059)], null)], null)),stuttaford.radiant.datoms.__GT_value.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),e], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"e","e",1381269198)], null)], null))], null);

break;
case "aevt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.datoms.__GT_value.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"a","a",-2123407586)], null)], null)),stuttaford.radiant.datoms.__GT_value.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),e], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"e","e",1381269198)], null)], null)),stuttaford.radiant.datoms.__GT_value.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"v","v",21465059)], null)], null))], null);

break;
case "eavt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.datoms.__GT_value.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),e], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"e","e",1381269198)], null)], null)),stuttaford.radiant.datoms.__GT_value.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"a","a",-2123407586)], null)], null)),stuttaford.radiant.datoms.__GT_value.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"v","v",21465059)], null)], null))], null);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.current_datoms_index))));

}
});})(order_fn,components,datoms__$2,attrs70151,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema70118,input_schema70119,input_checker70120,output_checker70121,vec__70115,opts__24173__auto__))
,datoms__$2)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.current_datoms_index,components], 0))], null));
})():null))], null))));
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema70118,input_schema70119,input_checker70120,output_checker70121,vec__70115,opts__24173__auto__))
;
stuttaford.radiant.datoms.t70148.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema70118,input_schema70119,input_checker70120,output_checker70121,vec__70115,opts__24173__auto__){
return (function (_70150){var self__ = this;
var _70150__$1 = this;return self__.meta70149;
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema70118,input_schema70119,input_checker70120,output_checker70121,vec__70115,opts__24173__auto__))
;
stuttaford.radiant.datoms.t70148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema70118,input_schema70119,input_checker70120,output_checker70121,vec__70115,opts__24173__auto__){
return (function (_70150,meta70149__$1){var self__ = this;
var _70150__$1 = this;return (new stuttaford.radiant.datoms.t70148(self__.output_schema70118,self__.map70116,self__.owner,self__.opts__24173__auto__,self__.datoms,self__.owner70056,self__.data,self__.output_checker70121,self__.vec__70115,self__.p__70058,self__.current_datoms_index,self__.input_schema70119,self__.data__24172__auto__,self__.input_checker70120,self__.current_db,self__.current_datoms_components,self__.G__70122,self__.validate__837__auto__,self__.ufv__,self__.fnk70117,meta70149__$1));
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema70118,input_schema70119,input_checker70120,output_checker70121,vec__70115,opts__24173__auto__))
;
stuttaford.radiant.datoms.__GT_t70148 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema70118,input_schema70119,input_checker70120,output_checker70121,vec__70115,opts__24173__auto__){
return (function __GT_t70148(output_schema70118__$1,map70116__$1,owner__$1,opts__24173__auto____$1,datoms__$1,owner70056__$1,data__$1,output_checker70121__$1,vec__70115__$1,p__70058__$1,current_datoms_index__$1,input_schema70119__$1,data__24172__auto____$1,input_checker70120__$1,current_db__$1,current_datoms_components__$1,G__70122__$1,validate__837__auto____$1,ufv____$1,fnk70117__$1,meta70149){return (new stuttaford.radiant.datoms.t70148(output_schema70118__$1,map70116__$1,owner__$1,opts__24173__auto____$1,datoms__$1,owner70056__$1,data__$1,output_checker70121__$1,vec__70115__$1,p__70058__$1,current_datoms_index__$1,input_schema70119__$1,data__24172__auto____$1,input_checker70120__$1,current_db__$1,current_datoms_components__$1,G__70122__$1,validate__837__auto____$1,ufv____$1,fnk70117__$1,meta70149));
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema70118,input_schema70119,input_checker70120,output_checker70121,vec__70115,opts__24173__auto__))
;
}
return (new stuttaford.radiant.datoms.t70148(output_schema70118,map70116,owner,opts__24173__auto__,datoms,owner70056,data,output_checker70121,vec__70115,p__70058,current_datoms_index,input_schema70119,data__24172__auto__,input_checker70120,current_db,current_datoms_components,G__70122,validate__837__auto__,ufv__,fnk70117,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___70180 = (function (){var G__70170 = o__840__auto__;return (output_checker70121.cljs$core$IFn$_invoke$arity$1 ? output_checker70121.cljs$core$IFn$_invoke$arity$1(G__70170) : output_checker70121.call(null,G__70170));
})();if(cljs.core.truth_(temp__4126__auto___70180))
{var error__839__auto___70181 = temp__4126__auto___70180;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk70117","fnk70117",1425763711,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___70181], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema70118,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___70181], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema70118,input_schema70119,input_checker70120,output_checker70121,vec__70115,opts__24173__auto__))
,schema.core.make_fn_schema(output_schema70118,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema70119], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24173__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner70056,new cljs.core.Keyword(null,"data","data",-232669377),data__24172__auto__], null));
};
var datoms = function (data__24172__auto__,owner70056,var_args){
var p__70058 = null;if (arguments.length > 2) {
  p__70058 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datoms__delegate.call(this,data__24172__auto__,owner70056,p__70058);};
datoms.cljs$lang$maxFixedArity = 2;
datoms.cljs$lang$applyTo = (function (arglist__70182){
var data__24172__auto__ = cljs.core.first(arglist__70182);
arglist__70182 = cljs.core.next(arglist__70182);
var owner70056 = cljs.core.first(arglist__70182);
var p__70058 = cljs.core.rest(arglist__70182);
return datoms__delegate(data__24172__auto__,owner70056,p__70058);
});
datoms.cljs$core$IFn$_invoke$arity$variadic = datoms__delegate;
return datoms;
})()
;
stuttaford.radiant.datoms.__GT_datoms = (function() {
var __GT_datoms = null;
var __GT_datoms__1 = (function (cursor__24141__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.datoms,cursor__24141__auto__);
});
var __GT_datoms__2 = (function (cursor__24141__auto__,m70057){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datoms.datoms,cursor__24141__auto__,m70057);
});
__GT_datoms = function(cursor__24141__auto__,m70057){
switch(arguments.length){
case 1:
return __GT_datoms__1.call(this,cursor__24141__auto__);
case 2:
return __GT_datoms__2.call(this,cursor__24141__auto__,m70057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_datoms.cljs$core$IFn$_invoke$arity$1 = __GT_datoms__1;
__GT_datoms.cljs$core$IFn$_invoke$arity$2 = __GT_datoms__2;
return __GT_datoms;
})()
;
//# sourceMappingURL=datoms.js.map