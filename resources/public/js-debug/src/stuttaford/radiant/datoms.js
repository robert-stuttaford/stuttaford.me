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
stuttaford.radiant.datoms.component_status = (function component_status(p__45568,component_values,component,value){var vec__45571 = p__45568;var c_one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45571,(0),null);var c_two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45571,(1),null);if(cljs.core.truth_(value))
{return "success";
} else
{var vec__45572 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$,component_values);var one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45572,(0),null);var two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45572,(1),null);var three = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45572,(2),null);if(cljs.core.truth_((function (){var and__19335__auto__ = cljs.core.not(one);if(and__19335__auto__)
{var and__19335__auto____$1 = (function (){var or__19357__auto__ = two;if(cljs.core.truth_(or__19357__auto__))
{return or__19357__auto__;
} else
{return three;
}
})();if(cljs.core.truth_(and__19335__auto____$1))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,c_one);
} else
{return and__19335__auto____$1;
}
} else
{return and__19335__auto__;
}
})()))
{return "error";
} else
{if(cljs.core.truth_((function (){var and__19335__auto__ = cljs.core.not(two);if(and__19335__auto__)
{var and__19335__auto____$1 = three;if(cljs.core.truth_(and__19335__auto____$1))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component,c_two);
} else
{return and__19335__auto____$1;
}
} else
{return and__19335__auto__;
}
})()))
{return "error";
} else
{return null;

}
}
}
});
stuttaford.radiant.datoms.index_input = (function index_input(c,current_datoms_index){return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(3)], null),cljs.core.array_seq([om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20735__auto__ = (function iter__45583(s__45584){return (new cljs.core.LazySeq(null,(function (){var s__45584__$1 = s__45584;while(true){
var temp__4126__auto__ = cljs.core.seq(s__45584__$1);if(temp__4126__auto__)
{var s__45584__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__45584__$2))
{var c__20733__auto__ = cljs.core.chunk_first(s__45584__$2);var size__20734__auto__ = cljs.core.count(c__20733__auto__);var b__45586 = cljs.core.chunk_buffer(size__20734__auto__);if((function (){var i__45585 = (0);while(true){
if((i__45585 < size__20734__auto__))
{var index = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20733__auto__,i__45585);cljs.core.chunk_append(b__45586,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__45591 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__45585,index,c__20733__auto__,size__20734__auto__,b__45586,s__45584__$2,temp__4126__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-index","set-datoms-index",-683154215),index], null));
});})(i__45585,index,c__20733__auto__,size__20734__auto__,b__45586,s__45584__$2,temp__4126__auto__))
], null);var G__45591__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,current_datoms_index))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45591,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__45591);return G__45591__$1;
})(),cljs.core.array_seq([clojure.string.upper_case(cljs.core.name(index))], 0)));
{
var G__45593 = (i__45585 + (1));
i__45585 = G__45593;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__45586),iter__45583(cljs.core.chunk_rest(s__45584__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__45586),null);
}
} else
{var index = cljs.core.first(s__45584__$2);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__45592 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (index,s__45584__$2,temp__4126__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-index","set-datoms-index",-683154215),index], null));
});})(index,s__45584__$2,temp__4126__auto__))
], null);var G__45592__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,current_datoms_index))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45592,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__45592);return G__45592__$1;
})(),cljs.core.array_seq([clojure.string.upper_case(cljs.core.name(index))], 0)),iter__45583(cljs.core.rest(s__45584__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20735__auto__(stuttaford.radiant.model.indexes);
})()], 0))], 0));
});
stuttaford.radiant.datoms.component_input = (function component_input(c,components,current_datoms_components,component){return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),(3),new cljs.core.Keyword(null,"class","class",-2030961996),"datoms-components-inputs"], null),cljs.core.array_seq([om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),true,new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),clojure.string.upper_case(cljs.core.name(component)),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),stuttaford.radiant.datoms.component_status(components,cljs.core.map.cljs$core$IFn$_invoke$arity$2(current_datoms_components,components),component,(function (){var G__45597 = current_datoms_components;return (component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(G__45597) : component.call(null,G__45597));
})()),new cljs.core.Keyword(null,"value","value",305978217),(function (){var G__45598 = current_datoms_components;return (component.cljs$core$IFn$_invoke$arity$1 ? component.cljs$core$IFn$_invoke$arity$1(G__45598) : component.call(null,G__45598));
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__45594_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,p1__45594_SHARP_.target.value], null)], null));
})], null))], 0));
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.datoms.inputs = (function() { 
var inputs__delegate = function (data__24172__auto__,owner45599,p__45601){var vec__45623 = p__45601;var opts__24173__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45623,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema45627 = schema.core.Any;var input_schema45628 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628)),schema.core.Any,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map45624","map45624",556260999,null))], null);var input_checker45629 = schema.core.checker(input_schema45628);var output_checker45630 = schema.core.checker(output_schema45627);return schema.core.schematize_fn(((function (ufv__,output_schema45627,input_schema45628,input_checker45629,output_checker45630,vec__45623,opts__24173__auto__){
return (function fnk45626(G__45631){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___45644 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__45631], null);var temp__4126__auto___45645 = (function (){var G__45638 = args__838__auto___45644;return (input_checker45629.cljs$core$IFn$_invoke$arity$1 ? input_checker45629.cljs$core$IFn$_invoke$arity$1(G__45638) : input_checker45629.call(null,G__45638));
})();if(cljs.core.truth_(temp__4126__auto___45645))
{var error__839__auto___45646 = temp__4126__auto___45645;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk45626","fnk45626",-1735375089,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___45646], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema45628,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___45644,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___45646], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map45624 = G__45631;while(true){
if(cljs.core.map_QMARK_(map45624))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map45624], 0))));
}
var map45625 = plumbing.fnk.schema.safe_get(map45624,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var current_datoms_index = plumbing.fnk.schema.safe_get(map45625,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_datoms_components = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map45625,new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628),null);var owner = plumbing.fnk.schema.safe_get(map45624,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datoms.t45639 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datoms.t45639 = (function (owner,opts__24173__auto__,map45624,vec__45623,input_checker45629,current_datoms_index,output_schema45627,input_schema45628,fnk45626,data__24172__auto__,p__45601,map45625,current_datoms_components,output_checker45630,G__45631,inputs,validate__837__auto__,owner45599,ufv__,meta45640){
this.owner = owner;
this.opts__24173__auto__ = opts__24173__auto__;
this.map45624 = map45624;
this.vec__45623 = vec__45623;
this.input_checker45629 = input_checker45629;
this.current_datoms_index = current_datoms_index;
this.output_schema45627 = output_schema45627;
this.input_schema45628 = input_schema45628;
this.fnk45626 = fnk45626;
this.data__24172__auto__ = data__24172__auto__;
this.p__45601 = p__45601;
this.map45625 = map45625;
this.current_datoms_components = current_datoms_components;
this.output_checker45630 = output_checker45630;
this.G__45631 = G__45631;
this.inputs = inputs;
this.validate__837__auto__ = validate__837__auto__;
this.owner45599 = owner45599;
this.ufv__ = ufv__;
this.meta45640 = meta45640;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datoms.t45639.cljs$lang$type = true;
stuttaford.radiant.datoms.t45639.cljs$lang$ctorStr = "stuttaford.radiant.datoms/t45639";
stuttaford.radiant.datoms.t45639.cljs$lang$ctorPrWriter = ((function (owner,current_datoms_components,current_datoms_index,map45625,validate__837__auto__,ufv__,output_schema45627,input_schema45628,input_checker45629,output_checker45630,vec__45623,opts__24173__auto__){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"stuttaford.radiant.datoms/t45639");
});})(owner,current_datoms_components,current_datoms_index,map45625,validate__837__auto__,ufv__,output_schema45627,input_schema45628,input_checker45629,output_checker45630,vec__45623,opts__24173__auto__))
;
stuttaford.radiant.datoms.t45639.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datoms.t45639.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,current_datoms_components,current_datoms_index,map45625,validate__837__auto__,ufv__,output_schema45627,input_schema45628,input_checker45629,output_checker45630,vec__45623,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "inputs";
});})(owner,current_datoms_components,current_datoms_index,map45625,validate__837__auto__,ufv__,output_schema45627,input_schema45628,input_checker45629,output_checker45630,vec__45623,opts__24173__auto__))
;
stuttaford.radiant.datoms.t45639.prototype.om$core$IRender$ = true;
stuttaford.radiant.datoms.t45639.prototype.om$core$IRender$render$arity$1 = ((function (owner,current_datoms_components,current_datoms_index,map45625,validate__837__auto__,ufv__,output_schema45627,input_schema45628,input_checker45629,output_checker45630,vec__45623,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([stuttaford.radiant.datoms.index_input(c,self__.current_datoms_index),(function (){var components = (function (){var G__45642 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__45642) {
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
});})(owner,current_datoms_components,current_datoms_index,map45625,validate__837__auto__,ufv__,output_schema45627,input_schema45628,input_checker45629,output_checker45630,vec__45623,opts__24173__auto__))
;
stuttaford.radiant.datoms.t45639.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,current_datoms_components,current_datoms_index,map45625,validate__837__auto__,ufv__,output_schema45627,input_schema45628,input_checker45629,output_checker45630,vec__45623,opts__24173__auto__){
return (function (_45641){var self__ = this;
var _45641__$1 = this;return self__.meta45640;
});})(owner,current_datoms_components,current_datoms_index,map45625,validate__837__auto__,ufv__,output_schema45627,input_schema45628,input_checker45629,output_checker45630,vec__45623,opts__24173__auto__))
;
stuttaford.radiant.datoms.t45639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,current_datoms_components,current_datoms_index,map45625,validate__837__auto__,ufv__,output_schema45627,input_schema45628,input_checker45629,output_checker45630,vec__45623,opts__24173__auto__){
return (function (_45641,meta45640__$1){var self__ = this;
var _45641__$1 = this;return (new stuttaford.radiant.datoms.t45639(self__.owner,self__.opts__24173__auto__,self__.map45624,self__.vec__45623,self__.input_checker45629,self__.current_datoms_index,self__.output_schema45627,self__.input_schema45628,self__.fnk45626,self__.data__24172__auto__,self__.p__45601,self__.map45625,self__.current_datoms_components,self__.output_checker45630,self__.G__45631,self__.inputs,self__.validate__837__auto__,self__.owner45599,self__.ufv__,meta45640__$1));
});})(owner,current_datoms_components,current_datoms_index,map45625,validate__837__auto__,ufv__,output_schema45627,input_schema45628,input_checker45629,output_checker45630,vec__45623,opts__24173__auto__))
;
stuttaford.radiant.datoms.__GT_t45639 = ((function (owner,current_datoms_components,current_datoms_index,map45625,validate__837__auto__,ufv__,output_schema45627,input_schema45628,input_checker45629,output_checker45630,vec__45623,opts__24173__auto__){
return (function __GT_t45639(owner__$1,opts__24173__auto____$1,map45624__$1,vec__45623__$1,input_checker45629__$1,current_datoms_index__$1,output_schema45627__$1,input_schema45628__$1,fnk45626__$1,data__24172__auto____$1,p__45601__$1,map45625__$1,current_datoms_components__$1,output_checker45630__$1,G__45631__$1,inputs__$1,validate__837__auto____$1,owner45599__$1,ufv____$1,meta45640){return (new stuttaford.radiant.datoms.t45639(owner__$1,opts__24173__auto____$1,map45624__$1,vec__45623__$1,input_checker45629__$1,current_datoms_index__$1,output_schema45627__$1,input_schema45628__$1,fnk45626__$1,data__24172__auto____$1,p__45601__$1,map45625__$1,current_datoms_components__$1,output_checker45630__$1,G__45631__$1,inputs__$1,validate__837__auto____$1,owner45599__$1,ufv____$1,meta45640));
});})(owner,current_datoms_components,current_datoms_index,map45625,validate__837__auto__,ufv__,output_schema45627,input_schema45628,input_checker45629,output_checker45630,vec__45623,opts__24173__auto__))
;
}
return (new stuttaford.radiant.datoms.t45639(owner,opts__24173__auto__,map45624,vec__45623,input_checker45629,current_datoms_index,output_schema45627,input_schema45628,fnk45626,data__24172__auto__,p__45601,map45625,current_datoms_components,output_checker45630,G__45631,inputs,validate__837__auto__,owner45599,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___45648 = (function (){var G__45643 = o__840__auto__;return (output_checker45630.cljs$core$IFn$_invoke$arity$1 ? output_checker45630.cljs$core$IFn$_invoke$arity$1(G__45643) : output_checker45630.call(null,G__45643));
})();if(cljs.core.truth_(temp__4126__auto___45648))
{var error__839__auto___45649 = temp__4126__auto___45648;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk45626","fnk45626",-1735375089,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___45649], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema45627,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___45649], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema45627,input_schema45628,input_checker45629,output_checker45630,vec__45623,opts__24173__auto__))
,schema.core.make_fn_schema(output_schema45627,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema45628], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24173__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner45599,new cljs.core.Keyword(null,"data","data",-232669377),data__24172__auto__], null));
};
var inputs = function (data__24172__auto__,owner45599,var_args){
var p__45601 = null;if (arguments.length > 2) {
  p__45601 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return inputs__delegate.call(this,data__24172__auto__,owner45599,p__45601);};
inputs.cljs$lang$maxFixedArity = 2;
inputs.cljs$lang$applyTo = (function (arglist__45650){
var data__24172__auto__ = cljs.core.first(arglist__45650);
arglist__45650 = cljs.core.next(arglist__45650);
var owner45599 = cljs.core.first(arglist__45650);
var p__45601 = cljs.core.rest(arglist__45650);
return inputs__delegate(data__24172__auto__,owner45599,p__45601);
});
inputs.cljs$core$IFn$_invoke$arity$variadic = inputs__delegate;
return inputs;
})()
;
stuttaford.radiant.datoms.__GT_inputs = (function() {
var __GT_inputs = null;
var __GT_inputs__1 = (function (cursor__24141__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.inputs,cursor__24141__auto__);
});
var __GT_inputs__2 = (function (cursor__24141__auto__,m45600){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datoms.inputs,cursor__24141__auto__,m45600);
});
__GT_inputs = function(cursor__24141__auto__,m45600){
switch(arguments.length){
case 1:
return __GT_inputs__1.call(this,cursor__24141__auto__);
case 2:
return __GT_inputs__2.call(this,cursor__24141__auto__,m45600);
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
var value__delegate = function (data__24172__auto__,owner45651,p__45653){var vec__45678 = p__45653;var opts__24173__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45678,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema45683 = schema.core.Any;var input_schema45684 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component","component",1555936782),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"value","value",305978217),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map45679","map45679",1571077158,null))], null);var input_checker45685 = schema.core.checker(input_schema45684);var output_checker45686 = schema.core.checker(output_schema45683);return schema.core.schematize_fn(((function (ufv__,output_schema45683,input_schema45684,input_checker45685,output_checker45686,vec__45678,opts__24173__auto__){
return (function fnk45682(G__45687){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___45702 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__45687], null);var temp__4126__auto___45703 = (function (){var G__45695 = args__838__auto___45702;return (input_checker45685.cljs$core$IFn$_invoke$arity$1 ? input_checker45685.cljs$core$IFn$_invoke$arity$1(G__45695) : input_checker45685.call(null,G__45695));
})();if(cljs.core.truth_(temp__4126__auto___45703))
{var error__839__auto___45704 = temp__4126__auto___45703;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk45682","fnk45682",746976798,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___45704], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema45684,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___45702,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___45704], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map45679 = G__45687;while(true){
if(cljs.core.map_QMARK_(map45679))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map45679], 0))));
}
var map45681 = plumbing.fnk.schema.safe_get(map45679,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var value__$1 = plumbing.fnk.schema.safe_get(map45681,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map45679,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map45680 = plumbing.fnk.schema.safe_get(map45679,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component = plumbing.fnk.schema.safe_get(map45680,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));if(typeof stuttaford.radiant.datoms.t45696 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datoms.t45696 = (function (owner45651,output_checker45686,vec__45678,owner,opts__24173__auto__,output_schema45683,input_schema45684,map45679,G__45687,data__24172__auto__,value,component,p__45653,input_checker45685,map45680,validate__837__auto__,ufv__,map45681,fnk45682,meta45697){
this.owner45651 = owner45651;
this.output_checker45686 = output_checker45686;
this.vec__45678 = vec__45678;
this.owner = owner;
this.opts__24173__auto__ = opts__24173__auto__;
this.output_schema45683 = output_schema45683;
this.input_schema45684 = input_schema45684;
this.map45679 = map45679;
this.G__45687 = G__45687;
this.data__24172__auto__ = data__24172__auto__;
this.value = value;
this.component = component;
this.p__45653 = p__45653;
this.input_checker45685 = input_checker45685;
this.map45680 = map45680;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.map45681 = map45681;
this.fnk45682 = fnk45682;
this.meta45697 = meta45697;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datoms.t45696.cljs$lang$type = true;
stuttaford.radiant.datoms.t45696.cljs$lang$ctorStr = "stuttaford.radiant.datoms/t45696";
stuttaford.radiant.datoms.t45696.cljs$lang$ctorPrWriter = ((function (component,map45680,owner,value__$1,map45681,validate__837__auto__,ufv__,output_schema45683,input_schema45684,input_checker45685,output_checker45686,vec__45678,opts__24173__auto__){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"stuttaford.radiant.datoms/t45696");
});})(component,map45680,owner,value__$1,map45681,validate__837__auto__,ufv__,output_schema45683,input_schema45684,input_checker45685,output_checker45686,vec__45678,opts__24173__auto__))
;
stuttaford.radiant.datoms.t45696.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datoms.t45696.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (component,map45680,owner,value__$1,map45681,validate__837__auto__,ufv__,output_schema45683,input_schema45684,input_checker45685,output_checker45686,vec__45678,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "value";
});})(component,map45680,owner,value__$1,map45681,validate__837__auto__,ufv__,output_schema45683,input_schema45684,input_checker45685,output_checker45686,vec__45678,opts__24173__auto__))
;
stuttaford.radiant.datoms.t45696.prototype.om$core$IRender$ = true;
stuttaford.radiant.datoms.t45696.prototype.om$core$IRender$render$arity$1 = ((function (component,map45680,owner,value__$1,map45681,validate__837__auto__,ufv__,output_schema45683,input_schema45684,input_checker45685,output_checker45686,vec__45678,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var G__45699 = {"href": "javascript:", "onClick": ((function (c,___$1,component,map45680,owner,value__$1,map45681,validate__837__auto__,ufv__,output_schema45683,input_schema45684,input_checker45685,output_checker45686,vec__45678,opts__24173__auto__){
return (function (){cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([c,stuttaford.om.common.control_chan(self__.owner),self__.component,self__.value], 0));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.component,self__.value], null)], null));
});})(c,___$1,component,map45680,owner,value__$1,map45681,validate__837__auto__,ufv__,output_schema45683,input_schema45684,input_checker45685,output_checker45686,vec__45678,opts__24173__auto__))
};var G__45700 = sablono.interpreter.interpret(self__.value);return React.DOM.a(G__45699,G__45700);
});})(component,map45680,owner,value__$1,map45681,validate__837__auto__,ufv__,output_schema45683,input_schema45684,input_checker45685,output_checker45686,vec__45678,opts__24173__auto__))
;
stuttaford.radiant.datoms.t45696.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (component,map45680,owner,value__$1,map45681,validate__837__auto__,ufv__,output_schema45683,input_schema45684,input_checker45685,output_checker45686,vec__45678,opts__24173__auto__){
return (function (_45698){var self__ = this;
var _45698__$1 = this;return self__.meta45697;
});})(component,map45680,owner,value__$1,map45681,validate__837__auto__,ufv__,output_schema45683,input_schema45684,input_checker45685,output_checker45686,vec__45678,opts__24173__auto__))
;
stuttaford.radiant.datoms.t45696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (component,map45680,owner,value__$1,map45681,validate__837__auto__,ufv__,output_schema45683,input_schema45684,input_checker45685,output_checker45686,vec__45678,opts__24173__auto__){
return (function (_45698,meta45697__$1){var self__ = this;
var _45698__$1 = this;return (new stuttaford.radiant.datoms.t45696(self__.owner45651,self__.output_checker45686,self__.vec__45678,self__.owner,self__.opts__24173__auto__,self__.output_schema45683,self__.input_schema45684,self__.map45679,self__.G__45687,self__.data__24172__auto__,self__.value,self__.component,self__.p__45653,self__.input_checker45685,self__.map45680,self__.validate__837__auto__,self__.ufv__,self__.map45681,self__.fnk45682,meta45697__$1));
});})(component,map45680,owner,value__$1,map45681,validate__837__auto__,ufv__,output_schema45683,input_schema45684,input_checker45685,output_checker45686,vec__45678,opts__24173__auto__))
;
stuttaford.radiant.datoms.__GT_t45696 = ((function (component,map45680,owner,value__$1,map45681,validate__837__auto__,ufv__,output_schema45683,input_schema45684,input_checker45685,output_checker45686,vec__45678,opts__24173__auto__){
return (function __GT_t45696(owner45651__$1,output_checker45686__$1,vec__45678__$1,owner__$1,opts__24173__auto____$1,output_schema45683__$1,input_schema45684__$1,map45679__$1,G__45687__$1,data__24172__auto____$1,value__$2,component__$1,p__45653__$1,input_checker45685__$1,map45680__$1,validate__837__auto____$1,ufv____$1,map45681__$1,fnk45682__$1,meta45697){return (new stuttaford.radiant.datoms.t45696(owner45651__$1,output_checker45686__$1,vec__45678__$1,owner__$1,opts__24173__auto____$1,output_schema45683__$1,input_schema45684__$1,map45679__$1,G__45687__$1,data__24172__auto____$1,value__$2,component__$1,p__45653__$1,input_checker45685__$1,map45680__$1,validate__837__auto____$1,ufv____$1,map45681__$1,fnk45682__$1,meta45697));
});})(component,map45680,owner,value__$1,map45681,validate__837__auto__,ufv__,output_schema45683,input_schema45684,input_checker45685,output_checker45686,vec__45678,opts__24173__auto__))
;
}
return (new stuttaford.radiant.datoms.t45696(owner45651,output_checker45686,vec__45678,owner,opts__24173__auto__,output_schema45683,input_schema45684,map45679,G__45687,data__24172__auto__,value__$1,component,p__45653,input_checker45685,map45680,validate__837__auto__,ufv__,map45681,fnk45682,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___45705 = (function (){var G__45701 = o__840__auto__;return (output_checker45686.cljs$core$IFn$_invoke$arity$1 ? output_checker45686.cljs$core$IFn$_invoke$arity$1(G__45701) : output_checker45686.call(null,G__45701));
})();if(cljs.core.truth_(temp__4126__auto___45705))
{var error__839__auto___45706 = temp__4126__auto___45705;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk45682","fnk45682",746976798,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___45706], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema45683,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___45706], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema45683,input_schema45684,input_checker45685,output_checker45686,vec__45678,opts__24173__auto__))
,schema.core.make_fn_schema(output_schema45683,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema45684], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24173__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner45651,new cljs.core.Keyword(null,"data","data",-232669377),data__24172__auto__], null));
};
var value = function (data__24172__auto__,owner45651,var_args){
var p__45653 = null;if (arguments.length > 2) {
  p__45653 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return value__delegate.call(this,data__24172__auto__,owner45651,p__45653);};
value.cljs$lang$maxFixedArity = 2;
value.cljs$lang$applyTo = (function (arglist__45707){
var data__24172__auto__ = cljs.core.first(arglist__45707);
arglist__45707 = cljs.core.next(arglist__45707);
var owner45651 = cljs.core.first(arglist__45707);
var p__45653 = cljs.core.rest(arglist__45707);
return value__delegate(data__24172__auto__,owner45651,p__45653);
});
value.cljs$core$IFn$_invoke$arity$variadic = value__delegate;
return value;
})()
;
stuttaford.radiant.datoms.__GT_value = (function() {
var __GT_value = null;
var __GT_value__1 = (function (cursor__24141__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.value,cursor__24141__auto__);
});
var __GT_value__2 = (function (cursor__24141__auto__,m45652){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datoms.value,cursor__24141__auto__,m45652);
});
__GT_value = function(cursor__24141__auto__,m45652){
switch(arguments.length){
case 1:
return __GT_value__1.call(this,cursor__24141__auto__);
case 2:
return __GT_value__2.call(this,cursor__24141__auto__,m45652);
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
var datoms__delegate = function (data__24172__auto__,owner45708,p__45710){var vec__45767 = p__45710;var opts__24173__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45767,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema45770 = schema.core.Any;var input_schema45771 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-db","current-db",213667882)),schema.core.Any,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map45768","map45768",-1221803324,null))], null);var input_checker45772 = schema.core.checker(input_schema45771);var output_checker45773 = schema.core.checker(output_schema45770);return schema.core.schematize_fn(((function (ufv__,output_schema45770,input_schema45771,input_checker45772,output_checker45773,vec__45767,opts__24173__auto__){
return (function fnk45769(G__45774){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___45823 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__45774], null);var temp__4126__auto___45824 = (function (){var G__45799 = args__838__auto___45823;return (input_checker45772.cljs$core$IFn$_invoke$arity$1 ? input_checker45772.cljs$core$IFn$_invoke$arity$1(G__45799) : input_checker45772.call(null,G__45799));
})();if(cljs.core.truth_(temp__4126__auto___45824))
{var error__839__auto___45825 = temp__4126__auto___45824;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk45769","fnk45769",1324631236,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___45825], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema45771,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___45823,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___45825], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map45768 = G__45774;while(true){
if(cljs.core.map_QMARK_(map45768))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map45768], 0))));
}
var data = plumbing.fnk.schema.safe_get(map45768,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var current_datoms_index = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_db = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-db","current-db",213667882),null);var current_datoms_components = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628),null);var owner = plumbing.fnk.schema.safe_get(map45768,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datoms.t45800 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datoms.t45800 = (function (G__45774,input_schema45771,fnk45769,owner,map45768,owner45708,opts__24173__auto__,datoms,data,p__45710,current_datoms_index,input_checker45772,data__24172__auto__,output_schema45770,current_db,current_datoms_components,vec__45767,output_checker45773,validate__837__auto__,ufv__,meta45801){
this.G__45774 = G__45774;
this.input_schema45771 = input_schema45771;
this.fnk45769 = fnk45769;
this.owner = owner;
this.map45768 = map45768;
this.owner45708 = owner45708;
this.opts__24173__auto__ = opts__24173__auto__;
this.datoms = datoms;
this.data = data;
this.p__45710 = p__45710;
this.current_datoms_index = current_datoms_index;
this.input_checker45772 = input_checker45772;
this.data__24172__auto__ = data__24172__auto__;
this.output_schema45770 = output_schema45770;
this.current_db = current_db;
this.current_datoms_components = current_datoms_components;
this.vec__45767 = vec__45767;
this.output_checker45773 = output_checker45773;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.meta45801 = meta45801;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datoms.t45800.cljs$lang$type = true;
stuttaford.radiant.datoms.t45800.cljs$lang$ctorStr = "stuttaford.radiant.datoms/t45800";
stuttaford.radiant.datoms.t45800.cljs$lang$ctorPrWriter = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema45770,input_schema45771,input_checker45772,output_checker45773,vec__45767,opts__24173__auto__){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"stuttaford.radiant.datoms/t45800");
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema45770,input_schema45771,input_checker45772,output_checker45773,vec__45767,opts__24173__auto__))
;
stuttaford.radiant.datoms.t45800.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datoms.t45800.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema45770,input_schema45771,input_checker45772,output_checker45773,vec__45767,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "datoms";
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema45770,input_schema45771,input_checker45772,output_checker45773,vec__45767,opts__24173__auto__))
;
stuttaford.radiant.datoms.t45800.prototype.om$core$IRender$ = true;
stuttaford.radiant.datoms.t45800.prototype.om$core$IRender$render$arity$1 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema45770,input_schema45771,input_checker45772,output_checker45773,vec__45767,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var attrs45803 = stuttaford.radiant.datoms.__GT_inputs.cljs$core$IFn$_invoke$arity$1(self__.data);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs45803))?sablono.interpreter.attributes(attrs45803):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs45803))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45808 = null;return React.DOM.hr(G__45808);
})(),sablono.interpreter.interpret((cljs.core.truth_(self__.current_db)?(function (){var order_fn = (function (){var G__45809 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__45809) {
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
})();var components = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),(function (){var G__45810 = stuttaford.radiant.model.ensure_components(self__.current_datoms_components);return (order_fn.cljs$core$IFn$_invoke$arity$1 ? order_fn.cljs$core$IFn$_invoke$arity$1(G__45810) : order_fn.call(null,G__45810));
})());var datoms__$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.datoms,self__.current_db,self__.current_datoms_index,components);return stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),(function (){var G__45811 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__45811) {
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
})(),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (order_fn,components,datoms__$2,attrs45803,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema45770,input_schema45771,input_checker45772,output_checker45773,vec__45767,opts__24173__auto__){
return (function (p__45812){var map__45813 = p__45812;var map__45813__$1 = ((cljs.core.seq_QMARK_(map__45813))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45813):map__45813);var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45813__$1,new cljs.core.Keyword(null,"v","v",21465059));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45813__$1,new cljs.core.Keyword(null,"a","a",-2123407586));var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45813__$1,new cljs.core.Keyword(null,"e","e",1381269198));var G__45814 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__45814) {
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
});})(order_fn,components,datoms__$2,attrs45803,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema45770,input_schema45771,input_checker45772,output_checker45773,vec__45767,opts__24173__auto__))
,datoms__$2)], null));
})():null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs45803),(function (){var G__45815 = null;return React.DOM.hr(G__45815);
})(),sablono.interpreter.interpret((cljs.core.truth_(self__.current_db)?(function (){var order_fn = (function (){var G__45816 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__45816) {
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
})();var components = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),(function (){var G__45817 = stuttaford.radiant.model.ensure_components(self__.current_datoms_components);return (order_fn.cljs$core$IFn$_invoke$arity$1 ? order_fn.cljs$core$IFn$_invoke$arity$1(G__45817) : order_fn.call(null,G__45817));
})());var datoms__$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.datoms,self__.current_db,self__.current_datoms_index,components);return stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),(function (){var G__45818 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__45818) {
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
})(),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (order_fn,components,datoms__$2,attrs45803,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema45770,input_schema45771,input_checker45772,output_checker45773,vec__45767,opts__24173__auto__){
return (function (p__45819){var map__45820 = p__45819;var map__45820__$1 = ((cljs.core.seq_QMARK_(map__45820))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45820):map__45820);var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45820__$1,new cljs.core.Keyword(null,"v","v",21465059));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45820__$1,new cljs.core.Keyword(null,"a","a",-2123407586));var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45820__$1,new cljs.core.Keyword(null,"e","e",1381269198));var G__45821 = (((self__.current_datoms_index instanceof cljs.core.Keyword))?self__.current_datoms_index.fqn:null);switch (G__45821) {
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
});})(order_fn,components,datoms__$2,attrs45803,___$1,owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema45770,input_schema45771,input_checker45772,output_checker45773,vec__45767,opts__24173__auto__))
,datoms__$2)], null));
})():null))], null))));
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema45770,input_schema45771,input_checker45772,output_checker45773,vec__45767,opts__24173__auto__))
;
stuttaford.radiant.datoms.t45800.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema45770,input_schema45771,input_checker45772,output_checker45773,vec__45767,opts__24173__auto__){
return (function (_45802){var self__ = this;
var _45802__$1 = this;return self__.meta45801;
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema45770,input_schema45771,input_checker45772,output_checker45773,vec__45767,opts__24173__auto__))
;
stuttaford.radiant.datoms.t45800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema45770,input_schema45771,input_checker45772,output_checker45773,vec__45767,opts__24173__auto__){
return (function (_45802,meta45801__$1){var self__ = this;
var _45802__$1 = this;return (new stuttaford.radiant.datoms.t45800(self__.G__45774,self__.input_schema45771,self__.fnk45769,self__.owner,self__.map45768,self__.owner45708,self__.opts__24173__auto__,self__.datoms,self__.data,self__.p__45710,self__.current_datoms_index,self__.input_checker45772,self__.data__24172__auto__,self__.output_schema45770,self__.current_db,self__.current_datoms_components,self__.vec__45767,self__.output_checker45773,self__.validate__837__auto__,self__.ufv__,meta45801__$1));
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema45770,input_schema45771,input_checker45772,output_checker45773,vec__45767,opts__24173__auto__))
;
stuttaford.radiant.datoms.__GT_t45800 = ((function (owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema45770,input_schema45771,input_checker45772,output_checker45773,vec__45767,opts__24173__auto__){
return (function __GT_t45800(G__45774__$1,input_schema45771__$1,fnk45769__$1,owner__$1,map45768__$1,owner45708__$1,opts__24173__auto____$1,datoms__$1,data__$1,p__45710__$1,current_datoms_index__$1,input_checker45772__$1,data__24172__auto____$1,output_schema45770__$1,current_db__$1,current_datoms_components__$1,vec__45767__$1,output_checker45773__$1,validate__837__auto____$1,ufv____$1,meta45801){return (new stuttaford.radiant.datoms.t45800(G__45774__$1,input_schema45771__$1,fnk45769__$1,owner__$1,map45768__$1,owner45708__$1,opts__24173__auto____$1,datoms__$1,data__$1,p__45710__$1,current_datoms_index__$1,input_checker45772__$1,data__24172__auto____$1,output_schema45770__$1,current_db__$1,current_datoms_components__$1,vec__45767__$1,output_checker45773__$1,validate__837__auto____$1,ufv____$1,meta45801));
});})(owner,current_datoms_components,current_db,current_datoms_index,data,validate__837__auto__,ufv__,output_schema45770,input_schema45771,input_checker45772,output_checker45773,vec__45767,opts__24173__auto__))
;
}
return (new stuttaford.radiant.datoms.t45800(G__45774,input_schema45771,fnk45769,owner,map45768,owner45708,opts__24173__auto__,datoms,data,p__45710,current_datoms_index,input_checker45772,data__24172__auto__,output_schema45770,current_db,current_datoms_components,vec__45767,output_checker45773,validate__837__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___45832 = (function (){var G__45822 = o__840__auto__;return (output_checker45773.cljs$core$IFn$_invoke$arity$1 ? output_checker45773.cljs$core$IFn$_invoke$arity$1(G__45822) : output_checker45773.call(null,G__45822));
})();if(cljs.core.truth_(temp__4126__auto___45832))
{var error__839__auto___45833 = temp__4126__auto___45832;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk45769","fnk45769",1324631236,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___45833], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema45770,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___45833], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema45770,input_schema45771,input_checker45772,output_checker45773,vec__45767,opts__24173__auto__))
,schema.core.make_fn_schema(output_schema45770,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema45771], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24173__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner45708,new cljs.core.Keyword(null,"data","data",-232669377),data__24172__auto__], null));
};
var datoms = function (data__24172__auto__,owner45708,var_args){
var p__45710 = null;if (arguments.length > 2) {
  p__45710 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datoms__delegate.call(this,data__24172__auto__,owner45708,p__45710);};
datoms.cljs$lang$maxFixedArity = 2;
datoms.cljs$lang$applyTo = (function (arglist__45834){
var data__24172__auto__ = cljs.core.first(arglist__45834);
arglist__45834 = cljs.core.next(arglist__45834);
var owner45708 = cljs.core.first(arglist__45834);
var p__45710 = cljs.core.rest(arglist__45834);
return datoms__delegate(data__24172__auto__,owner45708,p__45710);
});
datoms.cljs$core$IFn$_invoke$arity$variadic = datoms__delegate;
return datoms;
})()
;
stuttaford.radiant.datoms.__GT_datoms = (function() {
var __GT_datoms = null;
var __GT_datoms__1 = (function (cursor__24141__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datoms.datoms,cursor__24141__auto__);
});
var __GT_datoms__2 = (function (cursor__24141__auto__,m45709){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datoms.datoms,cursor__24141__auto__,m45709);
});
__GT_datoms = function(cursor__24141__auto__,m45709){
switch(arguments.length){
case 1:
return __GT_datoms__1.call(this,cursor__24141__auto__);
case 2:
return __GT_datoms__2.call(this,cursor__24141__auto__,m45709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_datoms.cljs$core$IFn$_invoke$arity$1 = __GT_datoms__1;
__GT_datoms.cljs$core$IFn$_invoke$arity$2 = __GT_datoms__2;
return __GT_datoms;
})()
;
//# sourceMappingURL=datoms.js.map