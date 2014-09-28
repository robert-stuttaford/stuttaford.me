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
stuttaford.radiant.datoms.component_status = (function component_status(p__78905,component_values,component,value){var vec__78908 = p__78905;var c_one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78908,(0),null);var c_two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78908,(1),null);if(cljs.core.seq(value))
{return "success";
} else
{var vec__78909 = component_values;var one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78909,(0),null);var two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78909,(1),null);var three = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78909,(2),null);var one__$1 = cljs.core.boolean$(cljs.core.seq(one));var two__$1 = cljs.core.boolean$(cljs.core.seq(two));var three__$1 = cljs.core.boolean$(cljs.core.seq(three));if((!(one__$1)) && ((two__$1) || (three__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,c_one)))
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
var datoms__delegate = function (data__24144__auto__,owner78914,p__78916){var vec__79039 = p__78916;var opts__24145__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79039,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema79043 = schema.core.Any;var input_schema79044 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628)),schema.core.Any,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-db","current-db",213667882)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684)),schema.core.Any,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map79040","map79040",-403286820,null))], null);var input_checker79045 = schema.core.checker(input_schema79044);var output_checker79046 = schema.core.checker(output_schema79043);return schema.core.schematize_fn(((function (ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__){
return (function fnk79042(G__79047){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___79183 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__79047], null);var temp__4126__auto___79184 = (function (){var G__79108 = args__838__auto___79183;return (input_checker79045.cljs$core$IFn$_invoke$arity$1 ? input_checker79045.cljs$core$IFn$_invoke$arity$1(G__79108) : input_checker79045.call(null,G__79108));
})();if(cljs.core.truth_(temp__4126__auto___79184))
{var error__839__auto___79188 = temp__4126__auto___79184;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk79042","fnk79042",1771335899,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___79188], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema79044,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___79183,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___79188], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map79040 = G__79047;while(true){
if(cljs.core.map_QMARK_(map79040))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map79040], 0))));
}
var map79041 = plumbing.fnk.schema.safe_get(map79040,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var data_sources = plumbing.fnk.schema.safe_get(map79041,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map79041,new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684),null);var current_db = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map79041,new cljs.core.Keyword(null,"current-db","current-db",213667882),null);var current_datoms_index = plumbing.fnk.schema.safe_get(map79041,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_datoms_components = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map79041,new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"e","e",1381269198),null,new cljs.core.Keyword(null,"a","a",-2123407586),null,new cljs.core.Keyword(null,"v","v",21465059),null], null));var owner = plumbing.fnk.schema.safe_get(map79040,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datoms.t79110 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datoms.t79110 = (function (input_checker79045,current_data_source,owner,datoms,owner78914,map79041,data__24144__auto__,opts__24145__auto__,output_schema79043,current_datoms_index,data_sources,current_db,current_datoms_components,output_checker79046,fnk79042,validate__837__auto__,p__78916,map79040,ufv__,input_schema79044,G__79047,vec__79039,meta79111){
this.input_checker79045 = input_checker79045;
this.current_data_source = current_data_source;
this.owner = owner;
this.datoms = datoms;
this.owner78914 = owner78914;
this.map79041 = map79041;
this.data__24144__auto__ = data__24144__auto__;
this.opts__24145__auto__ = opts__24145__auto__;
this.output_schema79043 = output_schema79043;
this.current_datoms_index = current_datoms_index;
this.data_sources = data_sources;
this.current_db = current_db;
this.current_datoms_components = current_datoms_components;
this.output_checker79046 = output_checker79046;
this.fnk79042 = fnk79042;
this.validate__837__auto__ = validate__837__auto__;
this.p__78916 = p__78916;
this.map79040 = map79040;
this.ufv__ = ufv__;
this.input_schema79044 = input_schema79044;
this.G__79047 = G__79047;
this.vec__79039 = vec__79039;
this.meta79111 = meta79111;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datoms.t79110.cljs$lang$type = true;
stuttaford.radiant.datoms.t79110.cljs$lang$ctorStr = "stuttaford.radiant.datoms/t79110";
stuttaford.radiant.datoms.t79110.cljs$lang$ctorPrWriter = ((function (owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"stuttaford.radiant.datoms/t79110");
});})(owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__))
;
stuttaford.radiant.datoms.t79110.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datoms.t79110.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "datoms";
});})(owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__))
;
stuttaford.radiant.datoms.t79110.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.datoms.t79110.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var attrs79113 = om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),cljs.core.array_seq([om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20686__auto__ = ((function (c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__){
return (function iter__79118(s__79119){return (new cljs.core.LazySeq(null,((function (c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__){
return (function (){var s__79119__$1 = s__79119;while(true){
var temp__4126__auto__ = cljs.core.seq(s__79119__$1);if(temp__4126__auto__)
{var s__79119__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__79119__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__79119__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__79121 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__79120 = (0);while(true){
if((i__79120 < size__20685__auto__))
{var index = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__79120);cljs.core.chunk_append(b__79121,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__79126 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__79120,index,c__20683__auto__,size__20685__auto__,b__79121,s__79119__$2,temp__4126__auto__,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-index","set-datoms-index",-683154215),index], null));
});})(i__79120,index,c__20683__auto__,size__20685__auto__,b__79121,s__79119__$2,temp__4126__auto__,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__))
], null);var G__79126__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,self__.current_datoms_index))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79126,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__79126);return G__79126__$1;
})(),cljs.core.array_seq([clojure.string.upper_case(cljs.core.name(index))], 0)));
{
var G__79477 = (i__79120 + (1));
i__79120 = G__79477;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__79121),iter__79118(cljs.core.chunk_rest(s__79119__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__79121),null);
}
} else
{var index = cljs.core.first(s__79119__$2);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__79128 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (index,s__79119__$2,temp__4126__auto__,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-index","set-datoms-index",-683154215),index], null));
});})(index,s__79119__$2,temp__4126__auto__,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__))
], null);var G__79128__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,self__.current_datoms_index))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79128,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__79128);return G__79128__$1;
})(),cljs.core.array_seq([clojure.string.upper_case(cljs.core.name(index))], 0)),iter__79118(cljs.core.rest(s__79119__$2)));
}
} else
{return null;
}
break;
}
});})(c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__))
,null,null));
});})(c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__))
;return iter__20686__auto__(stuttaford.radiant.model.indexes);
})()], 0))], 0)),(function (){var components = (function (){var G__79129 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__79129) {
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
})();var iter__20686__auto__ = ((function (components,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__){
return (function iter__79130(s__79131){return (new cljs.core.LazySeq(null,((function (components,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__){
return (function (){var s__79131__$1 = s__79131;while(true){
var temp__4126__auto__ = cljs.core.seq(s__79131__$1);if(temp__4126__auto__)
{var s__79131__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__79131__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__79131__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__79133 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__79132 = (0);while(true){
if((i__79132 < size__20685__auto__))
{var component = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__79132);cljs.core.chunk_append(b__79133,om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),(3),new cljs.core.Keyword(null,"class","class",-2030961996),"datoms-components-inputs"], null),cljs.core.array_seq([om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),true,new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),clojure.string.upper_case(cljs.core.name(component)),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),stuttaford.radiant.datoms.component_status(components,cljs.core.map.cljs$core$IFn$_invoke$arity$2(self__.current_datoms_components,components),component,(function (){var G__79142 = self__.current_datoms_components;return (component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(G__79142) : component.call(null,G__79142));
})()),new cljs.core.Keyword(null,"value","value",305978217),(function (){var G__79143 = self__.current_datoms_components;return (component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(G__79143) : component.call(null,G__79143));
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__79132,component,c__20683__auto__,size__20685__auto__,b__79133,s__79131__$2,temp__4126__auto__,components,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__){
return (function (p1__78910_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,p1__78910_SHARP_.target.value], null)], null));
});})(i__79132,component,c__20683__auto__,size__20685__auto__,b__79133,s__79131__$2,temp__4126__auto__,components,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__))
], null))], 0)));
{
var G__79598 = (i__79132 + (1));
i__79132 = G__79598;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__79133),iter__79130(cljs.core.chunk_rest(s__79131__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__79133),null);
}
} else
{var component = cljs.core.first(s__79131__$2);return cljs.core.cons(om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),(3),new cljs.core.Keyword(null,"class","class",-2030961996),"datoms-components-inputs"], null),cljs.core.array_seq([om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),true,new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),clojure.string.upper_case(cljs.core.name(component)),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),stuttaford.radiant.datoms.component_status(components,cljs.core.map.cljs$core$IFn$_invoke$arity$2(self__.current_datoms_components,components),component,(function (){var G__79145 = self__.current_datoms_components;return (component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(G__79145) : component.call(null,G__79145));
})()),new cljs.core.Keyword(null,"value","value",305978217),(function (){var G__79146 = self__.current_datoms_components;return (component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(G__79146) : component.call(null,G__79146));
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (component,s__79131__$2,temp__4126__auto__,components,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__){
return (function (p1__78910_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,p1__78910_SHARP_.target.value], null)], null));
});})(component,s__79131__$2,temp__4126__auto__,components,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__))
], null))], 0)),iter__79130(cljs.core.rest(s__79131__$2)));
}
} else
{return null;
}
break;
}
});})(components,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__))
,null,null));
});})(components,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__))
;return iter__20686__auto__(components);
})()], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs79113))?sablono.interpreter.attributes(attrs79113):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs79113))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__79147 = null;return React.DOM.hr(G__79147);
})(),sablono.interpreter.interpret((cljs.core.truth_(self__.current_db)?(function (){var e_fn = ((function (attrs79113,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__){
return (function (p1__78911_SHARP_){var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(p1__78911_SHARP_);if(cljs.core.seq(e))
{return cljs.core.long$(e);
} else
{return null;
}
});})(attrs79113,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__))
;var a_fn = ((function (e_fn,attrs79113,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__){
return (function (p1__78912_SHARP_){var a = new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(p1__78912_SHARP_);if(cljs.core.seq(a))
{try{return cljs.reader.read_string(a);
}catch (e79148){var e = e79148;return null;
}} else
{return null;
}
});})(e_fn,attrs79113,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__))
;var v_fn = ((function (e_fn,a_fn,attrs79113,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__){
return (function (p1__78913_SHARP_){var v = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(p1__78913_SHARP_);if(cljs.core.seq(v))
{try{var v_as_long = cljs.core.long$(v);if(cljs.core.truth_(v_as_long.isNaN()))
{return v;
} else
{return v_as_long;
}
}catch (e79149){var e = e79149;return v;
}} else
{return null;
}
});})(e_fn,a_fn,attrs79113,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__))
;var components_in_order_fn = (function (){var G__79150 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__79150) {
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
})();var components = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),(function (){var G__79151 = self__.current_datoms_components;return (components_in_order_fn.cljs$core$IFn$_invoke$arity$1 ? components_in_order_fn.cljs$core$IFn$_invoke$arity$1(G__79151) : components_in_order_fn.call(null,G__79151));
})());var datoms__$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.datoms,self__.current_db,self__.current_datoms_index,components);return cljs.core._conj(cljs.core.List.EMPTY,stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),(function (){var G__79152 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__79152) {
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
})(),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (e_fn,a_fn,v_fn,components_in_order_fn,components,datoms__$2,attrs79113,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__){
return (function (p__79153){var map__79154 = p__79153;var map__79154__$1 = ((cljs.core.seq_QMARK_(map__79154))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79154):map__79154);var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79154__$1,new cljs.core.Keyword(null,"v","v",21465059));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79154__$1,new cljs.core.Keyword(null,"a","a",-2123407586));var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79154__$1,new cljs.core.Keyword(null,"e","e",1381269198));var G__79155 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__79155) {
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
});})(e_fn,a_fn,v_fn,components_in_order_fn,components,datoms__$2,attrs79113,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__))
,datoms__$2)], null)));
})():null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs79113),(function (){var G__79157 = null;return React.DOM.hr(G__79157);
})(),sablono.interpreter.interpret((cljs.core.truth_(self__.current_db)?(function (){var e_fn = ((function (attrs79113,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__){
return (function (p1__78911_SHARP_){var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(p1__78911_SHARP_);if(cljs.core.seq(e))
{return cljs.core.long$(e);
} else
{return null;
}
});})(attrs79113,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__))
;var a_fn = ((function (e_fn,attrs79113,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__){
return (function (p1__78912_SHARP_){var a = new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(p1__78912_SHARP_);if(cljs.core.seq(a))
{try{return cljs.reader.read_string(a);
}catch (e79159){var e = e79159;return null;
}} else
{return null;
}
});})(e_fn,attrs79113,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__))
;var v_fn = ((function (e_fn,a_fn,attrs79113,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__){
return (function (p1__78913_SHARP_){var v = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(p1__78913_SHARP_);if(cljs.core.seq(v))
{try{var v_as_long = cljs.core.long$(v);if(cljs.core.truth_(v_as_long.isNaN()))
{return v;
} else
{return v_as_long;
}
}catch (e79160){var e = e79160;return v;
}} else
{return null;
}
});})(e_fn,a_fn,attrs79113,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__))
;var components_in_order_fn = (function (){var G__79161 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__79161) {
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
})();var components = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),(function (){var G__79162 = self__.current_datoms_components;return (components_in_order_fn.cljs$core$IFn$_invoke$arity$1 ? components_in_order_fn.cljs$core$IFn$_invoke$arity$1(G__79162) : components_in_order_fn.call(null,G__79162));
})());var datoms__$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.datoms,self__.current_db,self__.current_datoms_index,components);return cljs.core._conj(cljs.core.List.EMPTY,stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),(function (){var G__79163 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__79163) {
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
})(),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (e_fn,a_fn,v_fn,components_in_order_fn,components,datoms__$2,attrs79113,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__){
return (function (p__79164){var map__79165 = p__79164;var map__79165__$1 = ((cljs.core.seq_QMARK_(map__79165))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79165):map__79165);var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79165__$1,new cljs.core.Keyword(null,"v","v",21465059));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79165__$1,new cljs.core.Keyword(null,"a","a",-2123407586));var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79165__$1,new cljs.core.Keyword(null,"e","e",1381269198));var G__79166 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__79166) {
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
});})(e_fn,a_fn,v_fn,components_in_order_fn,components,datoms__$2,attrs79113,c,___$1,owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__))
,datoms__$2)], null)));
})():null))], null))));
});})(owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__))
;
stuttaford.radiant.datoms.t79110.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__){
return (function (_79112){var self__ = this;
var _79112__$1 = this;return self__.meta79111;
});})(owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__))
;
stuttaford.radiant.datoms.t79110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__){
return (function (_79112,meta79111__$1){var self__ = this;
var _79112__$1 = this;return (new stuttaford.radiant.datoms.t79110(self__.input_checker79045,self__.current_data_source,self__.owner,self__.datoms,self__.owner78914,self__.map79041,self__.data__24144__auto__,self__.opts__24145__auto__,self__.output_schema79043,self__.current_datoms_index,self__.data_sources,self__.current_db,self__.current_datoms_components,self__.output_checker79046,self__.fnk79042,self__.validate__837__auto__,self__.p__78916,self__.map79040,self__.ufv__,self__.input_schema79044,self__.G__79047,self__.vec__79039,meta79111__$1));
});})(owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__))
;
stuttaford.radiant.datoms.__GT_t79110 = ((function (owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__){
return (function __GT_t79110(input_checker79045__$1,current_data_source__$1,owner__$1,datoms__$1,owner78914__$1,map79041__$1,data__24144__auto____$1,opts__24145__auto____$1,output_schema79043__$1,current_datoms_index__$1,data_sources__$1,current_db__$1,current_datoms_components__$1,output_checker79046__$1,fnk79042__$1,validate__837__auto____$1,p__78916__$1,map79040__$1,ufv____$1,input_schema79044__$1,G__79047__$1,vec__79039__$1,meta79111){return (new stuttaford.radiant.datoms.t79110(input_checker79045__$1,current_data_source__$1,owner__$1,datoms__$1,owner78914__$1,map79041__$1,data__24144__auto____$1,opts__24145__auto____$1,output_schema79043__$1,current_datoms_index__$1,data_sources__$1,current_db__$1,current_datoms_components__$1,output_checker79046__$1,fnk79042__$1,validate__837__auto____$1,p__78916__$1,map79040__$1,ufv____$1,input_schema79044__$1,G__79047__$1,vec__79039__$1,meta79111));
});})(owner,current_datoms_components,current_datoms_index,current_db,current_data_source,data_sources,map79041,validate__837__auto__,ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__))
;
}
return (new stuttaford.radiant.datoms.t79110(input_checker79045,current_data_source,owner,datoms,owner78914,map79041,data__24144__auto__,opts__24145__auto__,output_schema79043,current_datoms_index,data_sources,current_db,current_datoms_components,output_checker79046,fnk79042,validate__837__auto__,p__78916,map79040,ufv__,input_schema79044,G__79047,vec__79039,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___79692 = (function (){var G__79167 = o__840__auto__;return (output_checker79046.cljs$core$IFn$_invoke$arity$1 ? output_checker79046.cljs$core$IFn$_invoke$arity$1(G__79167) : output_checker79046.call(null,G__79167));
})();if(cljs.core.truth_(temp__4126__auto___79692))
{var error__839__auto___79694 = temp__4126__auto___79692;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk79042","fnk79042",1771335899,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___79694], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema79043,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___79694], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema79043,input_schema79044,input_checker79045,output_checker79046,vec__79039,opts__24145__auto__))
,schema.core.make_fn_schema(output_schema79043,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema79044], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner78914,new cljs.core.Keyword(null,"data","data",-232669377),data__24144__auto__], null));
};
var datoms = function (data__24144__auto__,owner78914,var_args){
var p__78916 = null;if (arguments.length > 2) {
  p__78916 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datoms__delegate.call(this,data__24144__auto__,owner78914,p__78916);};
datoms.cljs$lang$maxFixedArity = 2;
datoms.cljs$lang$applyTo = (function (arglist__79695){
var data__24144__auto__ = cljs.core.first(arglist__79695);
arglist__79695 = cljs.core.next(arglist__79695);
var owner78914 = cljs.core.first(arglist__79695);
var p__78916 = cljs.core.rest(arglist__79695);
return datoms__delegate(data__24144__auto__,owner78914,p__78916);
});
datoms.cljs$core$IFn$_invoke$arity$variadic = datoms__delegate;
return datoms;
})()
;
stuttaford.radiant.datoms.__GT_datoms = (function() {
var __GT_datoms = null;
var __GT_datoms__1 = (function (cursor__24113__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.datoms,cursor__24113__auto__);
});
var __GT_datoms__2 = (function (cursor__24113__auto__,m78915){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datoms.datoms,cursor__24113__auto__,m78915);
});
__GT_datoms = function(cursor__24113__auto__,m78915){
switch(arguments.length){
case 1:
return __GT_datoms__1.call(this,cursor__24113__auto__);
case 2:
return __GT_datoms__2.call(this,cursor__24113__auto__,m78915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_datoms.cljs$core$IFn$_invoke$arity$1 = __GT_datoms__1;
__GT_datoms.cljs$core$IFn$_invoke$arity$2 = __GT_datoms__2;
return __GT_datoms;
})()
;
//# sourceMappingURL=datoms.js.map