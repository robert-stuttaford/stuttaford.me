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
stuttaford.radiant.datoms.component_status = (function component_status(p__57801,component_values,component,value){var vec__57804 = p__57801;var c_one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57804,(0),null);var c_two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57804,(1),null);if(cljs.core.seq(value))
{return "success";
} else
{var vec__57805 = component_values;var one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57805,(0),null);var two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57805,(1),null);var three = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57805,(2),null);var one__$1 = cljs.core.boolean$(cljs.core.seq(one));var two__$1 = cljs.core.boolean$(cljs.core.seq(two));var three__$1 = cljs.core.boolean$(cljs.core.seq(three));if((!(one__$1)) && ((two__$1) || (three__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,c_one)))
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
/**
* @param {...*} var_args
*/
stuttaford.radiant.datoms.datoms = (function() { 
var datoms__delegate = function (data__24144__auto__,owner57810,p__57812){var vec__57928 = p__57812;var opts__24145__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57928,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema57932 = schema.core.Any;var input_schema57933 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628)),schema.core.Any,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-db","current-db",213667882)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684)),schema.core.Any,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map57929","map57929",-2127617028,null))], null);var input_checker57934 = schema.core.checker(input_schema57933);var output_checker57935 = schema.core.checker(output_schema57932);return schema.core.schematize_fn(((function (ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__){
return (function fnk57931(G__57936){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___58043 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57936], null);var temp__4126__auto___58044 = (function (){var G__57990 = args__838__auto___58043;return (input_checker57934.cljs$core$IFn$_invoke$arity$1 ? input_checker57934.cljs$core$IFn$_invoke$arity$1(G__57990) : input_checker57934.call(null,G__57990));
})();if(cljs.core.truth_(temp__4126__auto___58044))
{var error__839__auto___58045 = temp__4126__auto___58044;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk57931","fnk57931",192526810,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___58045], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57933,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___58043,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___58045], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map57929 = G__57936;while(true){
if(cljs.core.map_QMARK_(map57929))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map57929], 0))));
}
var map57930 = plumbing.fnk.schema.safe_get(map57929,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var data_sources = plumbing.fnk.schema.safe_get(map57930,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map57930,new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684),null);var current_db = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map57930,new cljs.core.Keyword(null,"current-db","current-db",213667882),null);var current_datoms_index = plumbing.fnk.schema.safe_get(map57930,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_datoms_components = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map57930,new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"e","e",1381269198),null,new cljs.core.Keyword(null,"a","a",-2123407586),null,new cljs.core.Keyword(null,"v","v",21465059),null], null));var owner = plumbing.fnk.schema.safe_get(map57929,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datoms.t57991 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datoms.t57991 = (function (owner57810,current_data_source,owner,input_schema57933,p__57812,datoms,output_schema57932,data__24144__auto__,input_checker57934,opts__24145__auto__,current_datoms_index,data_sources,current_db,output_checker57935,current_datoms_components,fnk57931,validate__837__auto__,map57930,vec__57928,map57929,ufv__,G__57936,meta57992){
this.owner57810 = owner57810;
this.current_data_source = current_data_source;
this.owner = owner;
this.input_schema57933 = input_schema57933;
this.p__57812 = p__57812;
this.datoms = datoms;
this.output_schema57932 = output_schema57932;
this.data__24144__auto__ = data__24144__auto__;
this.input_checker57934 = input_checker57934;
this.opts__24145__auto__ = opts__24145__auto__;
this.current_datoms_index = current_datoms_index;
this.data_sources = data_sources;
this.current_db = current_db;
this.output_checker57935 = output_checker57935;
this.current_datoms_components = current_datoms_components;
this.fnk57931 = fnk57931;
this.validate__837__auto__ = validate__837__auto__;
this.map57930 = map57930;
this.vec__57928 = vec__57928;
this.map57929 = map57929;
this.ufv__ = ufv__;
this.G__57936 = G__57936;
this.meta57992 = meta57992;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datoms.t57991.cljs$lang$type = true;
stuttaford.radiant.datoms.t57991.cljs$lang$ctorStr = "stuttaford.radiant.datoms/t57991";
stuttaford.radiant.datoms.t57991.cljs$lang$ctorPrWriter = ((function (owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"stuttaford.radiant.datoms/t57991");
});})(owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__))
;
stuttaford.radiant.datoms.t57991.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datoms.t57991.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "datoms";
});})(owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__))
;
stuttaford.radiant.datoms.t57991.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.datoms.t57991.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var attrs57994 = om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),cljs.core.array_seq([om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20686__auto__ = ((function (c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__){
return (function iter__57999(s__58000){return (new cljs.core.LazySeq(null,((function (c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__){
return (function (){var s__58000__$1 = s__58000;while(true){
var temp__4126__auto__ = cljs.core.seq(s__58000__$1);if(temp__4126__auto__)
{var s__58000__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__58000__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__58000__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__58002 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__58001 = (0);while(true){
if((i__58001 < size__20685__auto__))
{var index = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__58001);cljs.core.chunk_append(b__58002,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__58007 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58001,index,c__20683__auto__,size__20685__auto__,b__58002,s__58000__$2,temp__4126__auto__,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-index","set-datoms-index",-683154215),index], null));
});})(i__58001,index,c__20683__auto__,size__20685__auto__,b__58002,s__58000__$2,temp__4126__auto__,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__))
], null);var G__58007__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,self__.current_datoms_index))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58007,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__58007);return G__58007__$1;
})(),cljs.core.array_seq([clojure.string.upper_case(cljs.core.name(index))], 0)));
{
var G__58046 = (i__58001 + (1));
i__58001 = G__58046;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__58002),iter__57999(cljs.core.chunk_rest(s__58000__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__58002),null);
}
} else
{var index = cljs.core.first(s__58000__$2);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__58008 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (index,s__58000__$2,temp__4126__auto__,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-index","set-datoms-index",-683154215),index], null));
});})(index,s__58000__$2,temp__4126__auto__,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__))
], null);var G__58008__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,self__.current_datoms_index))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58008,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__58008);return G__58008__$1;
})(),cljs.core.array_seq([clojure.string.upper_case(cljs.core.name(index))], 0)),iter__57999(cljs.core.rest(s__58000__$2)));
}
} else
{return null;
}
break;
}
});})(c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__))
,null,null));
});})(c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__))
;return iter__20686__auto__(stuttaford.radiant.model.indexes);
})()], 0))], 0)),(function (){var components = (function (){var G__58009 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__58009) {
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
})();var iter__20686__auto__ = ((function (components,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__){
return (function iter__58010(s__58011){return (new cljs.core.LazySeq(null,((function (components,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__){
return (function (){var s__58011__$1 = s__58011;while(true){
var temp__4126__auto__ = cljs.core.seq(s__58011__$1);if(temp__4126__auto__)
{var s__58011__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__58011__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__58011__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__58013 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__58012 = (0);while(true){
if((i__58012 < size__20685__auto__))
{var component = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__58012);cljs.core.chunk_append(b__58013,om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),(3),new cljs.core.Keyword(null,"class","class",-2030961996),"datoms-components-inputs"], null),cljs.core.array_seq([om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),true,new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),clojure.string.upper_case(cljs.core.name(component)),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),stuttaford.radiant.datoms.component_status(components,cljs.core.map.cljs$core$IFn$_invoke$arity$2(self__.current_datoms_components,components),component,(function (){var G__58020 = self__.current_datoms_components;return (component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(G__58020) : component.call(null,G__58020));
})()),new cljs.core.Keyword(null,"value","value",305978217),(function (){var G__58021 = self__.current_datoms_components;return (component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(G__58021) : component.call(null,G__58021));
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__58012,component,c__20683__auto__,size__20685__auto__,b__58013,s__58011__$2,temp__4126__auto__,components,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__){
return (function (p1__57806_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,p1__57806_SHARP_.target.value], null)], null));
});})(i__58012,component,c__20683__auto__,size__20685__auto__,b__58013,s__58011__$2,temp__4126__auto__,components,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__))
], null))], 0)));
{
var G__58048 = (i__58012 + (1));
i__58012 = G__58048;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__58013),iter__58010(cljs.core.chunk_rest(s__58011__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__58013),null);
}
} else
{var component = cljs.core.first(s__58011__$2);return cljs.core.cons(om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),(3),new cljs.core.Keyword(null,"class","class",-2030961996),"datoms-components-inputs"], null),cljs.core.array_seq([om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),true,new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),clojure.string.upper_case(cljs.core.name(component)),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),stuttaford.radiant.datoms.component_status(components,cljs.core.map.cljs$core$IFn$_invoke$arity$2(self__.current_datoms_components,components),component,(function (){var G__58022 = self__.current_datoms_components;return (component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(G__58022) : component.call(null,G__58022));
})()),new cljs.core.Keyword(null,"value","value",305978217),(function (){var G__58023 = self__.current_datoms_components;return (component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(G__58023) : component.call(null,G__58023));
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (component,s__58011__$2,temp__4126__auto__,components,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__){
return (function (p1__57806_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,p1__57806_SHARP_.target.value], null)], null));
});})(component,s__58011__$2,temp__4126__auto__,components,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__))
], null))], 0)),iter__58010(cljs.core.rest(s__58011__$2)));
}
} else
{return null;
}
break;
}
});})(components,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__))
,null,null));
});})(components,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__))
;return iter__20686__auto__(components);
})()], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs57994))?sablono.interpreter.attributes(attrs57994):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs57994))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58024 = null;return React.DOM.hr(G__58024);
})(),sablono.interpreter.interpret((cljs.core.truth_(self__.current_db)?(function (){var e_fn = ((function (attrs57994,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__){
return (function (p1__57807_SHARP_){var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(p1__57807_SHARP_);if(cljs.core.seq(e))
{return cljs.core.long$(e);
} else
{return null;
}
});})(attrs57994,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__))
;var a_fn = ((function (e_fn,attrs57994,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__){
return (function (p1__57808_SHARP_){var a = new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(p1__57808_SHARP_);if(cljs.core.seq(a))
{try{return cljs.reader.read_string(a);
}catch (e58025){var e = e58025;return null;
}} else
{return null;
}
});})(e_fn,attrs57994,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__))
;var v_fn = ((function (e_fn,a_fn,attrs57994,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__){
return (function (p1__57809_SHARP_){var v = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(p1__57809_SHARP_);if(cljs.core.seq(v))
{try{var v_as_long = cljs.core.long$(v);if(cljs.core.truth_(v_as_long.isNaN()))
{return v;
} else
{return v_as_long;
}
}catch (e58026){var e = e58026;return v;
}} else
{return null;
}
});})(e_fn,a_fn,attrs57994,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__))
;var components_in_order_fn = (function (){var G__58027 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__58027) {
case "avet":
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(a_fn,v_fn,e_fn);

break;
case "aevt":
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(a_fn,e_fn,v_fn);

break;
case "eavt":
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(e_fn,a_fn,v_fn);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.current_datoms_index))));

}
})();var components = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),(function (){var G__58028 = self__.current_datoms_components;return (components_in_order_fn.cljs$core$IFn$_invoke$arity$1 ? components_in_order_fn.cljs$core$IFn$_invoke$arity$1(G__58028) : components_in_order_fn.call(null,G__58028));
})());var datoms__$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.datoms,self__.current_db,self__.current_datoms_index,components);return cljs.core._conj(cljs.core.List.EMPTY,stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),(function (){var G__58029 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__58029) {
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
})(),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (e_fn,a_fn,v_fn,components_in_order_fn,components,datoms__$2,attrs57994,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__){
return (function (p__58030){var map__58031 = p__58030;var map__58031__$1 = ((cljs.core.seq_QMARK_(map__58031))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58031):map__58031);var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58031__$1,new cljs.core.Keyword(null,"v","v",21465059));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58031__$1,new cljs.core.Keyword(null,"a","a",-2123407586));var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58031__$1,new cljs.core.Keyword(null,"e","e",1381269198));var G__58032 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__58032) {
case "avet":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)),v,e], null);

break;
case "aevt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)),e,v], null);

break;
case "eavt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)),v], null);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.current_datoms_index))));

}
});})(e_fn,a_fn,v_fn,components_in_order_fn,components,datoms__$2,attrs57994,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__))
,datoms__$2)], null)));
})():null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs57994),(function (){var G__58033 = null;return React.DOM.hr(G__58033);
})(),sablono.interpreter.interpret((cljs.core.truth_(self__.current_db)?(function (){var e_fn = ((function (attrs57994,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__){
return (function (p1__57807_SHARP_){var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(p1__57807_SHARP_);if(cljs.core.seq(e))
{return cljs.core.long$(e);
} else
{return null;
}
});})(attrs57994,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__))
;var a_fn = ((function (e_fn,attrs57994,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__){
return (function (p1__57808_SHARP_){var a = new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(p1__57808_SHARP_);if(cljs.core.seq(a))
{try{return cljs.reader.read_string(a);
}catch (e58034){var e = e58034;return null;
}} else
{return null;
}
});})(e_fn,attrs57994,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__))
;var v_fn = ((function (e_fn,a_fn,attrs57994,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__){
return (function (p1__57809_SHARP_){var v = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(p1__57809_SHARP_);if(cljs.core.seq(v))
{try{var v_as_long = cljs.core.long$(v);if(cljs.core.truth_(v_as_long.isNaN()))
{return v;
} else
{return v_as_long;
}
}catch (e58035){var e = e58035;return v;
}} else
{return null;
}
});})(e_fn,a_fn,attrs57994,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__))
;var components_in_order_fn = (function (){var G__58036 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__58036) {
case "avet":
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(a_fn,v_fn,e_fn);

break;
case "aevt":
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(a_fn,e_fn,v_fn);

break;
case "eavt":
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(e_fn,a_fn,v_fn);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.current_datoms_index))));

}
})();var components = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),(function (){var G__58037 = self__.current_datoms_components;return (components_in_order_fn.cljs$core$IFn$_invoke$arity$1 ? components_in_order_fn.cljs$core$IFn$_invoke$arity$1(G__58037) : components_in_order_fn.call(null,G__58037));
})());var datoms__$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.datoms,self__.current_db,self__.current_datoms_index,components);return cljs.core._conj(cljs.core.List.EMPTY,stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),(function (){var G__58038 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__58038) {
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
})(),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (e_fn,a_fn,v_fn,components_in_order_fn,components,datoms__$2,attrs57994,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__){
return (function (p__58039){var map__58040 = p__58039;var map__58040__$1 = ((cljs.core.seq_QMARK_(map__58040))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58040):map__58040);var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58040__$1,new cljs.core.Keyword(null,"v","v",21465059));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58040__$1,new cljs.core.Keyword(null,"a","a",-2123407586));var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58040__$1,new cljs.core.Keyword(null,"e","e",1381269198));var G__58041 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__58041) {
case "avet":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)),v,e], null);

break;
case "aevt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)),e,v], null);

break;
case "eavt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)),v], null);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.current_datoms_index))));

}
});})(e_fn,a_fn,v_fn,components_in_order_fn,components,datoms__$2,attrs57994,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__))
,datoms__$2)], null)));
})():null))], null))));
});})(owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__))
;
stuttaford.radiant.datoms.t57991.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__){
return (function (_57993){var self__ = this;
var _57993__$1 = this;return self__.meta57992;
});})(owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__))
;
stuttaford.radiant.datoms.t57991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__){
return (function (_57993,meta57992__$1){var self__ = this;
var _57993__$1 = this;return (new stuttaford.radiant.datoms.t57991(self__.owner57810,self__.current_data_source,self__.owner,self__.input_schema57933,self__.p__57812,self__.datoms,self__.output_schema57932,self__.data__24144__auto__,self__.input_checker57934,self__.opts__24145__auto__,self__.current_datoms_index,self__.data_sources,self__.current_db,self__.output_checker57935,self__.current_datoms_components,self__.fnk57931,self__.validate__837__auto__,self__.map57930,self__.vec__57928,self__.map57929,self__.ufv__,self__.G__57936,meta57992__$1));
});})(owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__))
;
stuttaford.radiant.datoms.__GT_t57991 = ((function (owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__){
return (function __GT_t57991(owner57810__$1,current_data_source__$1,owner__$1,input_schema57933__$1,p__57812__$1,datoms__$1,output_schema57932__$1,data__24144__auto____$1,input_checker57934__$1,opts__24145__auto____$1,current_datoms_index__$1,data_sources__$1,current_db__$1,output_checker57935__$1,current_datoms_components__$1,fnk57931__$1,validate__837__auto____$1,map57930__$1,vec__57928__$1,map57929__$1,ufv____$1,G__57936__$1,meta57992){return (new stuttaford.radiant.datoms.t57991(owner57810__$1,current_data_source__$1,owner__$1,input_schema57933__$1,p__57812__$1,datoms__$1,output_schema57932__$1,data__24144__auto____$1,input_checker57934__$1,opts__24145__auto____$1,current_datoms_index__$1,data_sources__$1,current_db__$1,output_checker57935__$1,current_datoms_components__$1,fnk57931__$1,validate__837__auto____$1,map57930__$1,vec__57928__$1,map57929__$1,ufv____$1,G__57936__$1,meta57992));
});})(owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map57930,validate__837__auto__,ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__))
;
}
return (new stuttaford.radiant.datoms.t57991(owner57810,current_data_source,owner,input_schema57933,p__57812,datoms,output_schema57932,data__24144__auto__,input_checker57934,opts__24145__auto__,current_datoms_index,data_sources,current_db,output_checker57935,current_datoms_components,fnk57931,validate__837__auto__,map57930,vec__57928,map57929,ufv__,G__57936,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___58055 = (function (){var G__58042 = o__840__auto__;return (output_checker57935.cljs$core$IFn$_invoke$arity$1 ? output_checker57935.cljs$core$IFn$_invoke$arity$1(G__58042) : output_checker57935.call(null,G__58042));
})();if(cljs.core.truth_(temp__4126__auto___58055))
{var error__839__auto___58056 = temp__4126__auto___58055;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk57931","fnk57931",192526810,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___58056], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57932,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___58056], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema57932,input_schema57933,input_checker57934,output_checker57935,vec__57928,opts__24145__auto__))
,schema.core.make_fn_schema(output_schema57932,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57933], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner57810,new cljs.core.Keyword(null,"data","data",-232669377),data__24144__auto__], null));
};
var datoms = function (data__24144__auto__,owner57810,var_args){
var p__57812 = null;if (arguments.length > 2) {
  p__57812 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datoms__delegate.call(this,data__24144__auto__,owner57810,p__57812);};
datoms.cljs$lang$maxFixedArity = 2;
datoms.cljs$lang$applyTo = (function (arglist__58057){
var data__24144__auto__ = cljs.core.first(arglist__58057);
arglist__58057 = cljs.core.next(arglist__58057);
var owner57810 = cljs.core.first(arglist__58057);
var p__57812 = cljs.core.rest(arglist__58057);
return datoms__delegate(data__24144__auto__,owner57810,p__57812);
});
datoms.cljs$core$IFn$_invoke$arity$variadic = datoms__delegate;
return datoms;
})()
;
stuttaford.radiant.datoms.__GT_datoms = (function() {
var __GT_datoms = null;
var __GT_datoms__1 = (function (cursor__24113__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.datoms,cursor__24113__auto__);
});
var __GT_datoms__2 = (function (cursor__24113__auto__,m57811){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datoms.datoms,cursor__24113__auto__,m57811);
});
__GT_datoms = function(cursor__24113__auto__,m57811){
switch(arguments.length){
case 1:
return __GT_datoms__1.call(this,cursor__24113__auto__);
case 2:
return __GT_datoms__2.call(this,cursor__24113__auto__,m57811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_datoms.cljs$core$IFn$_invoke$arity$1 = __GT_datoms__1;
__GT_datoms.cljs$core$IFn$_invoke$arity$2 = __GT_datoms__2;
return __GT_datoms;
})()
;
//# sourceMappingURL=datoms.js.map