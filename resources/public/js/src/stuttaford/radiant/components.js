goog.provide('stuttaford.radiant.components');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om_bootstrap.random');
goog.require('stuttaford.om.common');
goog.require('om_bootstrap.table');
goog.require('om_bootstrap.panel');
goog.require('stuttaford.radiant.model');
goog.require('sablono.core');
goog.require('stuttaford.radiant.model');
goog.require('om_bootstrap.grid');
goog.require('om_tools.core');
goog.require('om_bootstrap.panel');
goog.require('stuttaford.om.common');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
goog.require('stuttaford.om.common');
goog.require('om_bootstrap.grid');
goog.require('om_bootstrap.button');
goog.require('om_bootstrap.table');
goog.require('om_bootstrap.button');
goog.require('om_bootstrap.random');
stuttaford.radiant.components.data_source_item = (function data_source_item(c,id,label){return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"on-select","on-select",-192407950),(function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-data-source","set-data-source",-1371173368),id], null));
})], null),cljs.core.array_seq([label], 0));
});
stuttaford.radiant.components.data_source_dropdown = (function data_source_dropdown(c,data_sources,current_data_source){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om_bootstrap.button.dropdown,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),stuttaford.radiant.model.data_source_label(data_sources,current_data_source)], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var iter__20763__auto__ = (function iter__39302(s__39303){return (new cljs.core.LazySeq(null,(function (){var s__39303__$1 = s__39303;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39303__$1);if(temp__4126__auto__)
{var s__39303__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39303__$2))
{var c__20761__auto__ = cljs.core.chunk_first(s__39303__$2);var size__20762__auto__ = cljs.core.count(c__20761__auto__);var b__39305 = cljs.core.chunk_buffer(size__20762__auto__);if((function (){var i__39304 = (0);while(true){
if((i__39304 < size__20762__auto__))
{var map__39310 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20761__auto__,i__39304);var map__39310__$1 = ((cljs.core.seq_QMARK_(map__39310))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39310):map__39310);var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39310__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39310__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append(b__39305,stuttaford.radiant.components.data_source_item(c,id,label));
{
var G__39312 = (i__39304 + (1));
i__39304 = G__39312;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39305),iter__39302(cljs.core.chunk_rest(s__39303__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39305),null);
}
} else
{var map__39311 = cljs.core.first(s__39303__$2);var map__39311__$1 = ((cljs.core.seq_QMARK_(map__39311))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39311):map__39311);var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39311__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39311__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons(stuttaford.radiant.components.data_source_item(c,id,label),iter__39302(cljs.core.rest(s__39303__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20763__auto__(cljs.core.vals(data_sources));
})()));
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.components.schema = (function() { 
var schema__$1__delegate = function (data__24172__auto__,owner39313,p__39315){var vec__39381 = p__39315;var opts__24173__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39381,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema39385 = schema.core.Any;var input_schema39386 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-db","current-db",213667882)),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map39382","map39382",-1980055544,null))], null);var input_checker39387 = schema.core.checker(input_schema39386);var output_checker39388 = schema.core.checker(output_schema39385);return schema.core.schematize_fn(((function (ufv__,output_schema39385,input_schema39386,input_checker39387,output_checker39388,vec__39381,opts__24173__auto__){
return (function fnk39384(G__39389){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39446 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39389], null);var temp__4126__auto___39447 = (function (){var G__39418 = args__838__auto___39446;return (input_checker39387.cljs$core$IFn$_invoke$arity$1 ? input_checker39387.cljs$core$IFn$_invoke$arity$1(G__39418) : input_checker39387.call(null,G__39418));
})();if(cljs.core.truth_(temp__4126__auto___39447))
{var error__839__auto___39448 = temp__4126__auto___39447;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39384","fnk39384",-1060100099,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39448], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39386,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39446,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39448], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map39382 = G__39389;while(true){
if(cljs.core.map_QMARK_(map39382))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map39382], 0))));
}
var map39383 = plumbing.fnk.schema.safe_get(map39382,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var current_db = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map39383,new cljs.core.Keyword(null,"current-db","current-db",213667882),null);var owner = plumbing.fnk.schema.safe_get(map39382,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.components.t39419 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.components.t39419 = (function (output_schema39385,owner,vec__39381,opts__24173__auto__,G__39389,map39382,schema,owner39313,data__24172__auto__,p__39315,current_db,input_checker39387,map39383,validate__837__auto__,output_checker39388,input_schema39386,ufv__,fnk39384,meta39420){
this.output_schema39385 = output_schema39385;
this.owner = owner;
this.vec__39381 = vec__39381;
this.opts__24173__auto__ = opts__24173__auto__;
this.G__39389 = G__39389;
this.map39382 = map39382;
this.schema = schema;
this.owner39313 = owner39313;
this.data__24172__auto__ = data__24172__auto__;
this.p__39315 = p__39315;
this.current_db = current_db;
this.input_checker39387 = input_checker39387;
this.map39383 = map39383;
this.validate__837__auto__ = validate__837__auto__;
this.output_checker39388 = output_checker39388;
this.input_schema39386 = input_schema39386;
this.ufv__ = ufv__;
this.fnk39384 = fnk39384;
this.meta39420 = meta39420;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.components.t39419.cljs$lang$type = true;
stuttaford.radiant.components.t39419.cljs$lang$ctorStr = "stuttaford.radiant.components/t39419";
stuttaford.radiant.components.t39419.cljs$lang$ctorPrWriter = ((function (owner,current_db,map39383,validate__837__auto__,ufv__,output_schema39385,input_schema39386,input_checker39387,output_checker39388,vec__39381,opts__24173__auto__){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"stuttaford.radiant.components/t39419");
});})(owner,current_db,map39383,validate__837__auto__,ufv__,output_schema39385,input_schema39386,input_checker39387,output_checker39388,vec__39381,opts__24173__auto__))
;
stuttaford.radiant.components.t39419.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.components.t39419.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,current_db,map39383,validate__837__auto__,ufv__,output_schema39385,input_schema39386,input_checker39387,output_checker39388,vec__39381,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "schema";
});})(owner,current_db,map39383,validate__837__auto__,ufv__,output_schema39385,input_schema39386,input_checker39387,output_checker39388,vec__39381,opts__24173__auto__))
;
stuttaford.radiant.components.t39419.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.components.t39419.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,current_db,map39383,validate__837__auto__,ufv__,output_schema39385,input_schema39386,input_checker39387,output_checker39388,vec__39381,opts__24173__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),"Schema"], null),cljs.core.array_seq([(cljs.core.truth_(self__.current_db)?cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20763__auto__ = ((function (___$1,owner,current_db,map39383,validate__837__auto__,ufv__,output_schema39385,input_schema39386,input_checker39387,output_checker39388,vec__39381,opts__24173__auto__){
return (function iter__39423(s__39424){return (new cljs.core.LazySeq(null,((function (___$1,owner,current_db,map39383,validate__837__auto__,ufv__,output_schema39385,input_schema39386,input_checker39387,output_checker39388,vec__39381,opts__24173__auto__){
return (function (){var s__39424__$1 = s__39424;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39424__$1);if(temp__4126__auto__)
{var s__39424__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39424__$2))
{var c__20761__auto__ = cljs.core.chunk_first(s__39424__$2);var size__20762__auto__ = cljs.core.count(c__20761__auto__);var b__39426 = cljs.core.chunk_buffer(size__20762__auto__);if((function (){var i__39425 = (0);while(true){
if((i__39425 < size__20762__auto__))
{var schema__$3 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20761__auto__,i__39425);cljs.core.chunk_append(b__39426,(function (){var G__39437 = {"className": "schema"};var G__39438 = (function (){var attrs39422 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(schema__$3)], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs39422))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ident"], null)], null),attrs39422], 0))):{"className": "ident"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39422))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39422)], null))));
})();var G__39439 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["REF"], 0)):null));var G__39440 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["MANY"], 0)):null));return React.DOM.span(G__39437,G__39438,G__39439,G__39440);
})());
{
var G__39449 = (i__39425 + (1));
i__39425 = G__39449;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39426),iter__39423(cljs.core.chunk_rest(s__39424__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39426),null);
}
} else
{var schema__$3 = cljs.core.first(s__39424__$2);return cljs.core.cons((function (){var G__39441 = {"className": "schema"};var G__39442 = (function (){var attrs39422 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(schema__$3)], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs39422))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ident"], null)], null),attrs39422], 0))):{"className": "ident"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39422))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39422)], null))));
})();var G__39443 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["REF"], 0)):null));var G__39444 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["MANY"], 0)):null));return React.DOM.span(G__39441,G__39442,G__39443,G__39444);
})(),iter__39423(cljs.core.rest(s__39424__$2)));
}
} else
{return null;
}
break;
}
});})(___$1,owner,current_db,map39383,validate__837__auto__,ufv__,output_schema39385,input_schema39386,input_checker39387,output_checker39388,vec__39381,opts__24173__auto__))
,null,null));
});})(___$1,owner,current_db,map39383,validate__837__auto__,ufv__,output_schema39385,input_schema39386,input_checker39387,output_checker39388,vec__39381,opts__24173__auto__))
;return iter__20763__auto__(stuttaford.radiant.model.schema_for_db(self__.current_db));
})()):"No database.")], 0));
});})(owner,current_db,map39383,validate__837__auto__,ufv__,output_schema39385,input_schema39386,input_checker39387,output_checker39388,vec__39381,opts__24173__auto__))
;
stuttaford.radiant.components.t39419.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,current_db,map39383,validate__837__auto__,ufv__,output_schema39385,input_schema39386,input_checker39387,output_checker39388,vec__39381,opts__24173__auto__){
return (function (_39421){var self__ = this;
var _39421__$1 = this;return self__.meta39420;
});})(owner,current_db,map39383,validate__837__auto__,ufv__,output_schema39385,input_schema39386,input_checker39387,output_checker39388,vec__39381,opts__24173__auto__))
;
stuttaford.radiant.components.t39419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,current_db,map39383,validate__837__auto__,ufv__,output_schema39385,input_schema39386,input_checker39387,output_checker39388,vec__39381,opts__24173__auto__){
return (function (_39421,meta39420__$1){var self__ = this;
var _39421__$1 = this;return (new stuttaford.radiant.components.t39419(self__.output_schema39385,self__.owner,self__.vec__39381,self__.opts__24173__auto__,self__.G__39389,self__.map39382,self__.schema,self__.owner39313,self__.data__24172__auto__,self__.p__39315,self__.current_db,self__.input_checker39387,self__.map39383,self__.validate__837__auto__,self__.output_checker39388,self__.input_schema39386,self__.ufv__,self__.fnk39384,meta39420__$1));
});})(owner,current_db,map39383,validate__837__auto__,ufv__,output_schema39385,input_schema39386,input_checker39387,output_checker39388,vec__39381,opts__24173__auto__))
;
stuttaford.radiant.components.__GT_t39419 = ((function (owner,current_db,map39383,validate__837__auto__,ufv__,output_schema39385,input_schema39386,input_checker39387,output_checker39388,vec__39381,opts__24173__auto__){
return (function __GT_t39419(output_schema39385__$1,owner__$1,vec__39381__$1,opts__24173__auto____$1,G__39389__$1,map39382__$1,schema__$2,owner39313__$1,data__24172__auto____$1,p__39315__$1,current_db__$1,input_checker39387__$1,map39383__$1,validate__837__auto____$1,output_checker39388__$1,input_schema39386__$1,ufv____$1,fnk39384__$1,meta39420){return (new stuttaford.radiant.components.t39419(output_schema39385__$1,owner__$1,vec__39381__$1,opts__24173__auto____$1,G__39389__$1,map39382__$1,schema__$2,owner39313__$1,data__24172__auto____$1,p__39315__$1,current_db__$1,input_checker39387__$1,map39383__$1,validate__837__auto____$1,output_checker39388__$1,input_schema39386__$1,ufv____$1,fnk39384__$1,meta39420));
});})(owner,current_db,map39383,validate__837__auto__,ufv__,output_schema39385,input_schema39386,input_checker39387,output_checker39388,vec__39381,opts__24173__auto__))
;
}
return (new stuttaford.radiant.components.t39419(output_schema39385,owner,vec__39381,opts__24173__auto__,G__39389,map39382,schema__$1,owner39313,data__24172__auto__,p__39315,current_db,input_checker39387,map39383,validate__837__auto__,output_checker39388,input_schema39386,ufv__,fnk39384,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39450 = (function (){var G__39445 = o__840__auto__;return (output_checker39388.cljs$core$IFn$_invoke$arity$1 ? output_checker39388.cljs$core$IFn$_invoke$arity$1(G__39445) : output_checker39388.call(null,G__39445));
})();if(cljs.core.truth_(temp__4126__auto___39450))
{var error__839__auto___39451 = temp__4126__auto___39450;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39384","fnk39384",-1060100099,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39451], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39385,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39451], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema39385,input_schema39386,input_checker39387,output_checker39388,vec__39381,opts__24173__auto__))
,schema.core.make_fn_schema(output_schema39385,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39386], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24173__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner39313,new cljs.core.Keyword(null,"data","data",-232669377),data__24172__auto__], null));
};
var schema__$1 = function (data__24172__auto__,owner39313,var_args){
var p__39315 = null;if (arguments.length > 2) {
  p__39315 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return schema__$1__delegate.call(this,data__24172__auto__,owner39313,p__39315);};
schema__$1.cljs$lang$maxFixedArity = 2;
schema__$1.cljs$lang$applyTo = (function (arglist__39452){
var data__24172__auto__ = cljs.core.first(arglist__39452);
arglist__39452 = cljs.core.next(arglist__39452);
var owner39313 = cljs.core.first(arglist__39452);
var p__39315 = cljs.core.rest(arglist__39452);
return schema__$1__delegate(data__24172__auto__,owner39313,p__39315);
});
schema__$1.cljs$core$IFn$_invoke$arity$variadic = schema__$1__delegate;
return schema__$1;
})()
;
stuttaford.radiant.components.__GT_schema = (function() {
var __GT_schema = null;
var __GT_schema__1 = (function (cursor__24141__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.schema,cursor__24141__auto__);
});
var __GT_schema__2 = (function (cursor__24141__auto__,m39314){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.components.schema,cursor__24141__auto__,m39314);
});
__GT_schema = function(cursor__24141__auto__,m39314){
switch(arguments.length){
case 1:
return __GT_schema__1.call(this,cursor__24141__auto__);
case 2:
return __GT_schema__2.call(this,cursor__24141__auto__,m39314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_schema.cljs$core$IFn$_invoke$arity$1 = __GT_schema__1;
__GT_schema.cljs$core$IFn$_invoke$arity$2 = __GT_schema__2;
return __GT_schema;
})()
;
/**
* @param {...*} var_args
*/
stuttaford.radiant.components.top_nav = (function() { 
var top_nav__delegate = function (data__24172__auto__,owner39453,p__39455){var vec__39522 = p__39455;var opts__24173__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39522,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema39527 = schema.core.Any;var input_schema39528 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684)),schema.core.Any,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map39523","map39523",-591706396,null))], null);var input_checker39529 = schema.core.checker(input_schema39528);var output_checker39530 = schema.core.checker(output_schema39527);return schema.core.schematize_fn(((function (ufv__,output_schema39527,input_schema39528,input_checker39529,output_checker39530,vec__39522,opts__24173__auto__){
return (function fnk39526(G__39531){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39588 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39531], null);var temp__4126__auto___39589 = (function (){var G__39560 = args__838__auto___39588;return (input_checker39529.cljs$core$IFn$_invoke$arity$1 ? input_checker39529.cljs$core$IFn$_invoke$arity$1(G__39560) : input_checker39529.call(null,G__39560));
})();if(cljs.core.truth_(temp__4126__auto___39589))
{var error__839__auto___39590 = temp__4126__auto___39589;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39526","fnk39526",-1475877475,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39590], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39528,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39588,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39590], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map39523 = G__39531;while(true){
if(cljs.core.map_QMARK_(map39523))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map39523], 0))));
}
var map39525 = plumbing.fnk.schema.safe_get(map39523,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(map39525,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var data_sources = plumbing.fnk.schema.safe_get(map39525,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map39525,new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684),null);var schema_visible_QMARK_ = plumbing.fnk.schema.safe_get(map39525,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map39523,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map39524 = plumbing.fnk.schema.safe_get(map39523,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var nav_items = plumbing.fnk.schema.safe_get(map39524,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));if(typeof stuttaford.radiant.components.t39561 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.components.t39561 = (function (current_data_source,owner,map39523,opts__24173__auto__,view,schema_visible_QMARK_,input_checker39529,nav_items,input_schema39528,vec__39522,p__39455,map39524,data__24172__auto__,G__39531,data_sources,output_schema39527,top_nav,map39525,output_checker39530,validate__837__auto__,fnk39526,ufv__,owner39453,meta39562){
this.current_data_source = current_data_source;
this.owner = owner;
this.map39523 = map39523;
this.opts__24173__auto__ = opts__24173__auto__;
this.view = view;
this.schema_visible_QMARK_ = schema_visible_QMARK_;
this.input_checker39529 = input_checker39529;
this.nav_items = nav_items;
this.input_schema39528 = input_schema39528;
this.vec__39522 = vec__39522;
this.p__39455 = p__39455;
this.map39524 = map39524;
this.data__24172__auto__ = data__24172__auto__;
this.G__39531 = G__39531;
this.data_sources = data_sources;
this.output_schema39527 = output_schema39527;
this.top_nav = top_nav;
this.map39525 = map39525;
this.output_checker39530 = output_checker39530;
this.validate__837__auto__ = validate__837__auto__;
this.fnk39526 = fnk39526;
this.ufv__ = ufv__;
this.owner39453 = owner39453;
this.meta39562 = meta39562;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.components.t39561.cljs$lang$type = true;
stuttaford.radiant.components.t39561.cljs$lang$ctorStr = "stuttaford.radiant.components/t39561";
stuttaford.radiant.components.t39561.cljs$lang$ctorPrWriter = ((function (nav_items,map39524,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39525,validate__837__auto__,ufv__,output_schema39527,input_schema39528,input_checker39529,output_checker39530,vec__39522,opts__24173__auto__){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"stuttaford.radiant.components/t39561");
});})(nav_items,map39524,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39525,validate__837__auto__,ufv__,output_schema39527,input_schema39528,input_checker39529,output_checker39530,vec__39522,opts__24173__auto__))
;
stuttaford.radiant.components.t39561.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.components.t39561.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (nav_items,map39524,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39525,validate__837__auto__,ufv__,output_schema39527,input_schema39528,input_checker39529,output_checker39530,vec__39522,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "top-nav";
});})(nav_items,map39524,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39525,validate__837__auto__,ufv__,output_schema39527,input_schema39528,input_checker39529,output_checker39530,vec__39522,opts__24173__auto__))
;
stuttaford.radiant.components.t39561.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.components.t39561.prototype.om$core$IRenderState$render_state$arity$2 = ((function (nav_items,map39524,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39525,validate__837__auto__,ufv__,output_schema39527,input_schema39528,input_checker39529,output_checker39530,vec__39522,opts__24173__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var G__39566 = {"className": "radiant"};var G__39567 = "RADIANT";return React.DOM.div(G__39566,G__39567);
})(),om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20763__auto__ = ((function (c,___$1,nav_items,map39524,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39525,validate__837__auto__,ufv__,output_schema39527,input_schema39528,input_checker39529,output_checker39530,vec__39522,opts__24173__auto__){
return (function iter__39568(s__39569){return (new cljs.core.LazySeq(null,((function (c,___$1,nav_items,map39524,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39525,validate__837__auto__,ufv__,output_schema39527,input_schema39528,input_checker39529,output_checker39530,vec__39522,opts__24173__auto__){
return (function (){var s__39569__$1 = s__39569;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39569__$1);if(temp__4126__auto__)
{var s__39569__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39569__$2))
{var c__20761__auto__ = cljs.core.chunk_first(s__39569__$2);var size__20762__auto__ = cljs.core.count(c__20761__auto__);var b__39571 = cljs.core.chunk_buffer(size__20762__auto__);if((function (){var i__39570 = (0);while(true){
if((i__39570 < size__20762__auto__))
{var vec__39580 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20761__auto__,i__39570);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39580,(0),null);var vec__39581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39580,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39581,(0),null);cljs.core.chunk_append(b__39571,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__39582 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__39570,vec__39580,id,vec__39581,label,c__20761__auto__,size__20762__auto__,b__39571,s__39569__$2,temp__4126__auto__,c,___$1,nav_items,map39524,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39525,validate__837__auto__,ufv__,output_schema39527,input_schema39528,input_checker39529,output_checker39530,vec__39522,opts__24173__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__39570,vec__39580,id,vec__39581,label,c__20761__auto__,size__20762__auto__,b__39571,s__39569__$2,temp__4126__auto__,c,___$1,nav_items,map39524,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39525,validate__837__auto__,ufv__,output_schema39527,input_schema39528,input_checker39529,output_checker39530,vec__39522,opts__24173__auto__))
], null);var G__39582__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39582,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__39582);return G__39582__$1;
})(),cljs.core.array_seq([label], 0)));
{
var G__39591 = (i__39570 + (1));
i__39570 = G__39591;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39571),iter__39568(cljs.core.chunk_rest(s__39569__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39571),null);
}
} else
{var vec__39583 = cljs.core.first(s__39569__$2);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39583,(0),null);var vec__39584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39583,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39584,(0),null);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__39585 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__39583,id,vec__39584,label,s__39569__$2,temp__4126__auto__,c,___$1,nav_items,map39524,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39525,validate__837__auto__,ufv__,output_schema39527,input_schema39528,input_checker39529,output_checker39530,vec__39522,opts__24173__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(vec__39583,id,vec__39584,label,s__39569__$2,temp__4126__auto__,c,___$1,nav_items,map39524,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39525,validate__837__auto__,ufv__,output_schema39527,input_schema39528,input_checker39529,output_checker39530,vec__39522,opts__24173__auto__))
], null);var G__39585__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39585,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__39585);return G__39585__$1;
})(),cljs.core.array_seq([label], 0)),iter__39568(cljs.core.rest(s__39569__$2)));
}
} else
{return null;
}
break;
}
});})(c,___$1,nav_items,map39524,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39525,validate__837__auto__,ufv__,output_schema39527,input_schema39528,input_checker39529,output_checker39530,vec__39522,opts__24173__auto__))
,null,null));
});})(c,___$1,nav_items,map39524,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39525,validate__837__auto__,ufv__,output_schema39527,input_schema39528,input_checker39529,output_checker39530,vec__39522,opts__24173__auto__))
;return iter__20763__auto__(self__.nav_items);
})()], 0)),stuttaford.radiant.components.data_source_dropdown(c,self__.data_sources,self__.current_data_source),om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__39586 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (c,___$1,nav_items,map39524,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39525,validate__837__auto__,ufv__,output_schema39527,input_schema39528,input_checker39529,output_checker39530,vec__39522,opts__24173__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-schema-visible","set-schema-visible",-1408939033),cljs.core.not(self__.schema_visible_QMARK_)], null));
});})(c,___$1,nav_items,map39524,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39525,validate__837__auto__,ufv__,output_schema39527,input_schema39528,input_checker39529,output_checker39530,vec__39522,opts__24173__auto__))
], null);var G__39586__$1 = (cljs.core.truth_(self__.schema_visible_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39586,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__39586);return G__39586__$1;
})(),cljs.core.array_seq(["Show schema"], 0))], 0));
});})(nav_items,map39524,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39525,validate__837__auto__,ufv__,output_schema39527,input_schema39528,input_checker39529,output_checker39530,vec__39522,opts__24173__auto__))
;
stuttaford.radiant.components.t39561.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (nav_items,map39524,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39525,validate__837__auto__,ufv__,output_schema39527,input_schema39528,input_checker39529,output_checker39530,vec__39522,opts__24173__auto__){
return (function (_39563){var self__ = this;
var _39563__$1 = this;return self__.meta39562;
});})(nav_items,map39524,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39525,validate__837__auto__,ufv__,output_schema39527,input_schema39528,input_checker39529,output_checker39530,vec__39522,opts__24173__auto__))
;
stuttaford.radiant.components.t39561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (nav_items,map39524,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39525,validate__837__auto__,ufv__,output_schema39527,input_schema39528,input_checker39529,output_checker39530,vec__39522,opts__24173__auto__){
return (function (_39563,meta39562__$1){var self__ = this;
var _39563__$1 = this;return (new stuttaford.radiant.components.t39561(self__.current_data_source,self__.owner,self__.map39523,self__.opts__24173__auto__,self__.view,self__.schema_visible_QMARK_,self__.input_checker39529,self__.nav_items,self__.input_schema39528,self__.vec__39522,self__.p__39455,self__.map39524,self__.data__24172__auto__,self__.G__39531,self__.data_sources,self__.output_schema39527,self__.top_nav,self__.map39525,self__.output_checker39530,self__.validate__837__auto__,self__.fnk39526,self__.ufv__,self__.owner39453,meta39562__$1));
});})(nav_items,map39524,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39525,validate__837__auto__,ufv__,output_schema39527,input_schema39528,input_checker39529,output_checker39530,vec__39522,opts__24173__auto__))
;
stuttaford.radiant.components.__GT_t39561 = ((function (nav_items,map39524,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39525,validate__837__auto__,ufv__,output_schema39527,input_schema39528,input_checker39529,output_checker39530,vec__39522,opts__24173__auto__){
return (function __GT_t39561(current_data_source__$1,owner__$1,map39523__$1,opts__24173__auto____$1,view__$1,schema_visible_QMARK___$1,input_checker39529__$1,nav_items__$1,input_schema39528__$1,vec__39522__$1,p__39455__$1,map39524__$1,data__24172__auto____$1,G__39531__$1,data_sources__$1,output_schema39527__$1,top_nav__$1,map39525__$1,output_checker39530__$1,validate__837__auto____$1,fnk39526__$1,ufv____$1,owner39453__$1,meta39562){return (new stuttaford.radiant.components.t39561(current_data_source__$1,owner__$1,map39523__$1,opts__24173__auto____$1,view__$1,schema_visible_QMARK___$1,input_checker39529__$1,nav_items__$1,input_schema39528__$1,vec__39522__$1,p__39455__$1,map39524__$1,data__24172__auto____$1,G__39531__$1,data_sources__$1,output_schema39527__$1,top_nav__$1,map39525__$1,output_checker39530__$1,validate__837__auto____$1,fnk39526__$1,ufv____$1,owner39453__$1,meta39562));
});})(nav_items,map39524,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39525,validate__837__auto__,ufv__,output_schema39527,input_schema39528,input_checker39529,output_checker39530,vec__39522,opts__24173__auto__))
;
}
return (new stuttaford.radiant.components.t39561(current_data_source,owner,map39523,opts__24173__auto__,view,schema_visible_QMARK_,input_checker39529,nav_items,input_schema39528,vec__39522,p__39455,map39524,data__24172__auto__,G__39531,data_sources,output_schema39527,top_nav,map39525,output_checker39530,validate__837__auto__,fnk39526,ufv__,owner39453,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39592 = (function (){var G__39587 = o__840__auto__;return (output_checker39530.cljs$core$IFn$_invoke$arity$1 ? output_checker39530.cljs$core$IFn$_invoke$arity$1(G__39587) : output_checker39530.call(null,G__39587));
})();if(cljs.core.truth_(temp__4126__auto___39592))
{var error__839__auto___39593 = temp__4126__auto___39592;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39526","fnk39526",-1475877475,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39593], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39527,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39593], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema39527,input_schema39528,input_checker39529,output_checker39530,vec__39522,opts__24173__auto__))
,schema.core.make_fn_schema(output_schema39527,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39528], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24173__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner39453,new cljs.core.Keyword(null,"data","data",-232669377),data__24172__auto__], null));
};
var top_nav = function (data__24172__auto__,owner39453,var_args){
var p__39455 = null;if (arguments.length > 2) {
  p__39455 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return top_nav__delegate.call(this,data__24172__auto__,owner39453,p__39455);};
top_nav.cljs$lang$maxFixedArity = 2;
top_nav.cljs$lang$applyTo = (function (arglist__39594){
var data__24172__auto__ = cljs.core.first(arglist__39594);
arglist__39594 = cljs.core.next(arglist__39594);
var owner39453 = cljs.core.first(arglist__39594);
var p__39455 = cljs.core.rest(arglist__39594);
return top_nav__delegate(data__24172__auto__,owner39453,p__39455);
});
top_nav.cljs$core$IFn$_invoke$arity$variadic = top_nav__delegate;
return top_nav;
})()
;
stuttaford.radiant.components.__GT_top_nav = (function() {
var __GT_top_nav = null;
var __GT_top_nav__1 = (function (cursor__24141__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.top_nav,cursor__24141__auto__);
});
var __GT_top_nav__2 = (function (cursor__24141__auto__,m39454){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.components.top_nav,cursor__24141__auto__,m39454);
});
__GT_top_nav = function(cursor__24141__auto__,m39454){
switch(arguments.length){
case 1:
return __GT_top_nav__1.call(this,cursor__24141__auto__);
case 2:
return __GT_top_nav__2.call(this,cursor__24141__auto__,m39454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_top_nav.cljs$core$IFn$_invoke$arity$1 = __GT_top_nav__1;
__GT_top_nav.cljs$core$IFn$_invoke$arity$2 = __GT_top_nav__2;
return __GT_top_nav;
})()
;
stuttaford.radiant.components.PAGE_SIZE = (50);
stuttaford.radiant.components.paginate = (function paginate(current_page,rows){return cljs.core.take.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.PAGE_SIZE,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((stuttaford.radiant.components.PAGE_SIZE * current_page),rows));
});
stuttaford.radiant.components.paginate_label = (function paginate_label(current_page,rows){var start = (stuttaford.radiant.components.PAGE_SIZE * current_page);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((start + (1)))+" - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__19982__auto__ = (start + stuttaford.radiant.components.PAGE_SIZE);var y__19984__auto__ = cljs.core.count(rows);return ((x__19982__auto__ < y__19984__auto__) ? x__19982__auto__ : y__19984__auto__);
})()));
});
stuttaford.radiant.components.sort_rows = (function sort_rows(sort_col,rows){return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__39595_SHARP_){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__39595_SHARP_,sort_col);
}),rows);
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.components.result_table = (function() { 
var result_table__delegate = function (data__24172__auto__,owner39596,p__39598){var vec__39749 = p__39598;var opts__24173__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39749,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema39754 = schema.core.Any;var input_schema39755 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260)),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"rows","rows",850049680),schema.core.Any,new cljs.core.Keyword(null,"cols","cols",-1914801295),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map39750","map39750",-1826422374,null))], null);var input_checker39756 = schema.core.checker(input_schema39755);var output_checker39757 = schema.core.checker(output_schema39754);return schema.core.schematize_fn(((function (ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__){
return (function fnk39753(G__39758){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39899 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39758], null);var temp__4126__auto___39900 = (function (){var G__39829 = args__838__auto___39899;return (input_checker39756.cljs$core$IFn$_invoke$arity$1 ? input_checker39756.cljs$core$IFn$_invoke$arity$1(G__39829) : input_checker39756.call(null,G__39829));
})();if(cljs.core.truth_(temp__4126__auto___39900))
{var error__839__auto___39901 = temp__4126__auto___39900;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39753","fnk39753",-1775122802,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39901], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39755,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39899,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39901], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map39750 = G__39758;while(true){
if(cljs.core.map_QMARK_(map39750))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map39750], 0))));
}
var map39752 = plumbing.fnk.schema.safe_get(map39750,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var cols = plumbing.fnk.schema.safe_get(map39752,new cljs.core.Keyword(null,"cols","cols",-1914801295),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var rows = plumbing.fnk.schema.safe_get(map39752,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map39750,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map39751 = plumbing.fnk.schema.safe_get(map39750,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var allow_sorting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map39751,new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),false);if(typeof stuttaford.radiant.components.t39830 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.components.t39830 = (function (G__39758,owner,opts__24173__auto__,result_table,owner39596,allow_sorting_QMARK_,output_schema39754,fnk39753,vec__39749,data__24172__auto__,map39751,map39752,input_schema39755,rows,p__39598,cols,map39750,validate__837__auto__,output_checker39757,input_checker39756,ufv__,meta39831){
this.G__39758 = G__39758;
this.owner = owner;
this.opts__24173__auto__ = opts__24173__auto__;
this.result_table = result_table;
this.owner39596 = owner39596;
this.allow_sorting_QMARK_ = allow_sorting_QMARK_;
this.output_schema39754 = output_schema39754;
this.fnk39753 = fnk39753;
this.vec__39749 = vec__39749;
this.data__24172__auto__ = data__24172__auto__;
this.map39751 = map39751;
this.map39752 = map39752;
this.input_schema39755 = input_schema39755;
this.rows = rows;
this.p__39598 = p__39598;
this.cols = cols;
this.map39750 = map39750;
this.validate__837__auto__ = validate__837__auto__;
this.output_checker39757 = output_checker39757;
this.input_checker39756 = input_checker39756;
this.ufv__ = ufv__;
this.meta39831 = meta39831;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.components.t39830.cljs$lang$type = true;
stuttaford.radiant.components.t39830.cljs$lang$ctorStr = "stuttaford.radiant.components/t39830";
stuttaford.radiant.components.t39830.cljs$lang$ctorPrWriter = ((function (allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"stuttaford.radiant.components/t39830");
});})(allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__))
;
stuttaford.radiant.components.t39830.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.components.t39830.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "result-table";
});})(allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__))
;
stuttaford.radiant.components.t39830.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.components.t39830.prototype.om$core$IRenderState$render_state$arity$2 = ((function (allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__){
return (function (_,p__39833){var self__ = this;
var map__39834 = p__39833;var map__39834__$1 = ((cljs.core.seq_QMARK_(map__39834))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39834):map__39834);var current_page = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39834__$1,new cljs.core.Keyword(null,"current-page","current-page",-101294180),(0));var sort_col = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39834__$1,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882),(0));var ___$1 = this;var page_count = cljs.core.count(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.PAGE_SIZE,self__.rows));var paginate_QMARK_ = (page_count > (1));var G__39836 = null;var G__39837 = (function (){var G__39839 = {"className": "result-pagination"};var G__39840 = (function (){var attrs39835 = cljs.core.count(self__.rows);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs39835))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-count"], null)], null),attrs39835], 0))):{"className": "item-count"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39835))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" items",sablono.interpreter.interpret(((paginate_QMARK_)?(" \u00B7 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(stuttaford.radiant.components.paginate_label(current_page,self__.rows))):null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39835)," items",sablono.interpreter.interpret(((paginate_QMARK_)?(" \u00B7 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(stuttaford.radiant.components.paginate_label(current_page,self__.rows))):null))], null))));
})();var G__39841 = sablono.interpreter.interpret(((paginate_QMARK_)?om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20763__auto__ = ((function (G__39839,G__39840,G__39836,page_count,paginate_QMARK_,___$1,map__39834,map__39834__$1,current_page,sort_col,allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__){
return (function iter__39842(s__39843){return (new cljs.core.LazySeq(null,((function (G__39839,G__39840,G__39836,page_count,paginate_QMARK_,___$1,map__39834,map__39834__$1,current_page,sort_col,allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__){
return (function (){var s__39843__$1 = s__39843;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39843__$1);if(temp__4126__auto__)
{var s__39843__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39843__$2))
{var c__20761__auto__ = cljs.core.chunk_first(s__39843__$2);var size__20762__auto__ = cljs.core.count(c__20761__auto__);var b__39845 = cljs.core.chunk_buffer(size__20762__auto__);if((function (){var i__39844 = (0);while(true){
if((i__39844 < size__20762__auto__))
{var page = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20761__auto__,i__39844);cljs.core.chunk_append(b__39845,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__39850 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__39844,page,c__20761__auto__,size__20762__auto__,b__39845,s__39843__$2,temp__4126__auto__,G__39839,G__39840,G__39836,page_count,paginate_QMARK_,___$1,map__39834,map__39834__$1,current_page,sort_col,allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page);
});})(i__39844,page,c__20761__auto__,size__20762__auto__,b__39845,s__39843__$2,temp__4126__auto__,G__39839,G__39840,G__39836,page_count,paginate_QMARK_,___$1,map__39834,map__39834__$1,current_page,sort_col,allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__))
], null);var G__39850__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39850,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__39850);return G__39850__$1;
})(),cljs.core.array_seq([(page + (1))], 0)));
{
var G__39902 = (i__39844 + (1));
i__39844 = G__39902;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39845),iter__39842(cljs.core.chunk_rest(s__39843__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39845),null);
}
} else
{var page = cljs.core.first(s__39843__$2);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__39851 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (page,s__39843__$2,temp__4126__auto__,G__39839,G__39840,G__39836,page_count,paginate_QMARK_,___$1,map__39834,map__39834__$1,current_page,sort_col,allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page);
});})(page,s__39843__$2,temp__4126__auto__,G__39839,G__39840,G__39836,page_count,paginate_QMARK_,___$1,map__39834,map__39834__$1,current_page,sort_col,allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__))
], null);var G__39851__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39851,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__39851);return G__39851__$1;
})(),cljs.core.array_seq([(page + (1))], 0)),iter__39842(cljs.core.rest(s__39843__$2)));
}
} else
{return null;
}
break;
}
});})(G__39839,G__39840,G__39836,page_count,paginate_QMARK_,___$1,map__39834,map__39834__$1,current_page,sort_col,allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__))
,null,null));
});})(G__39839,G__39840,G__39836,page_count,paginate_QMARK_,___$1,map__39834,map__39834__$1,current_page,sort_col,allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__))
;return iter__20763__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(page_count));
})()], 0)):null));return React.DOM.div(G__39839,G__39840,G__39841);
})();var G__39838 = sablono.interpreter.interpret(om_bootstrap.table.table.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"striped?","striped?",-797214979),true,new cljs.core.Keyword(null,"bordered?","bordered?",562358476),true,new cljs.core.Keyword(null,"condensed?","condensed?",-109797520),true,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),true], null),cljs.core.array_seq([cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39856 = null;var G__39857 = (function (){var attrs39854 = cljs.core.map_indexed(((function (G__39856,G__39836,G__39837,page_count,paginate_QMARK_,___$1,map__39834,map__39834__$1,current_page,sort_col,allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__){
return (function (i,v){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),(cljs.core.truth_(self__.allow_sorting_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__39856,G__39836,G__39837,page_count,paginate_QMARK_,___$1,map__39834,map__39834__$1,current_page,sort_col,allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882),i);
});})(G__39856,G__39836,G__39837,page_count,paginate_QMARK_,___$1,map__39834,map__39834__$1,current_page,sort_col,allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__))
], null):null),v,(cljs.core.truth_((function (){var and__19325__auto__ = self__.allow_sorting_QMARK_;if(cljs.core.truth_(and__19325__auto__))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,sort_col);
} else
{return and__19325__auto__;
}
})())?cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-chevron-down","span.glyphicon.glyphicon-chevron-down",-62425995)], null))," "):null)], null);
});})(G__39856,G__39836,G__39837,page_count,paginate_QMARK_,___$1,map__39834,map__39834__$1,current_page,sort_col,allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__))
,self__.cols);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tr,((cljs.core.map_QMARK_(attrs39854))?sablono.interpreter.attributes(attrs39854):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39854))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39854)], null))));
})();return React.DOM.thead(G__39856,G__39857);
})(),(function (){var G__39858 = null;var G__39859 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20763__auto__ = ((function (G__39858,G__39836,G__39837,page_count,paginate_QMARK_,___$1,map__39834,map__39834__$1,current_page,sort_col,allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__){
return (function iter__39860(s__39861){return (new cljs.core.LazySeq(null,((function (G__39858,G__39836,G__39837,page_count,paginate_QMARK_,___$1,map__39834,map__39834__$1,current_page,sort_col,allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__){
return (function (){var s__39861__$1 = s__39861;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39861__$1);if(temp__4126__auto__)
{var s__39861__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39861__$2))
{var c__20761__auto__ = cljs.core.chunk_first(s__39861__$2);var size__20762__auto__ = cljs.core.count(c__20761__auto__);var b__39863 = cljs.core.chunk_buffer(size__20762__auto__);if((function (){var i__39862 = (0);while(true){
if((i__39862 < size__20762__auto__))
{var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20761__auto__,i__39862);cljs.core.chunk_append(b__39863,(function (){var G__39882 = null;var G__39883 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20763__auto__ = ((function (i__39862,G__39882,row,c__20761__auto__,size__20762__auto__,b__39863,s__39861__$2,temp__4126__auto__,G__39858,G__39836,G__39837,page_count,paginate_QMARK_,___$1,map__39834,map__39834__$1,current_page,sort_col,allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__){
return (function iter__39884(s__39885){return (new cljs.core.LazySeq(null,((function (i__39862,G__39882,row,c__20761__auto__,size__20762__auto__,b__39863,s__39861__$2,temp__4126__auto__,G__39858,G__39836,G__39837,page_count,paginate_QMARK_,___$1,map__39834,map__39834__$1,current_page,sort_col,allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__){
return (function (){var s__39885__$1 = s__39885;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__39885__$1);if(temp__4126__auto____$1)
{var s__39885__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__39885__$2))
{var c__20761__auto____$1 = cljs.core.chunk_first(s__39885__$2);var size__20762__auto____$1 = cljs.core.count(c__20761__auto____$1);var b__39887 = cljs.core.chunk_buffer(size__20762__auto____$1);if((function (){var i__39886 = (0);while(true){
if((i__39886 < size__20762__auto____$1))
{var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20761__auto____$1,i__39886);cljs.core.chunk_append(b__39887,(function (){var attrs39855 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs39855))?sablono.interpreter.attributes(attrs39855):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39855))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39855)], null))));
})());
{
var G__39903 = (i__39886 + (1));
i__39886 = G__39903;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39887),iter__39884(cljs.core.chunk_rest(s__39885__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39887),null);
}
} else
{var value = cljs.core.first(s__39885__$2);return cljs.core.cons((function (){var attrs39855 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs39855))?sablono.interpreter.attributes(attrs39855):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39855))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39855)], null))));
})(),iter__39884(cljs.core.rest(s__39885__$2)));
}
} else
{return null;
}
break;
}
});})(i__39862,G__39882,row,c__20761__auto__,size__20762__auto__,b__39863,s__39861__$2,temp__4126__auto__,G__39858,G__39836,G__39837,page_count,paginate_QMARK_,___$1,map__39834,map__39834__$1,current_page,sort_col,allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__))
,null,null));
});})(i__39862,G__39882,row,c__20761__auto__,size__20762__auto__,b__39863,s__39861__$2,temp__4126__auto__,G__39858,G__39836,G__39837,page_count,paginate_QMARK_,___$1,map__39834,map__39834__$1,current_page,sort_col,allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__))
;return iter__20763__auto__(row);
})());return React.DOM.tr(G__39882,G__39883);
})());
{
var G__39904 = (i__39862 + (1));
i__39862 = G__39904;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39863),iter__39860(cljs.core.chunk_rest(s__39861__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39863),null);
}
} else
{var row = cljs.core.first(s__39861__$2);return cljs.core.cons((function (){var G__39890 = null;var G__39891 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20763__auto__ = ((function (G__39890,row,s__39861__$2,temp__4126__auto__,G__39858,G__39836,G__39837,page_count,paginate_QMARK_,___$1,map__39834,map__39834__$1,current_page,sort_col,allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__){
return (function iter__39892(s__39893){return (new cljs.core.LazySeq(null,((function (G__39890,row,s__39861__$2,temp__4126__auto__,G__39858,G__39836,G__39837,page_count,paginate_QMARK_,___$1,map__39834,map__39834__$1,current_page,sort_col,allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__){
return (function (){var s__39893__$1 = s__39893;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__39893__$1);if(temp__4126__auto____$1)
{var s__39893__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__39893__$2))
{var c__20761__auto__ = cljs.core.chunk_first(s__39893__$2);var size__20762__auto__ = cljs.core.count(c__20761__auto__);var b__39895 = cljs.core.chunk_buffer(size__20762__auto__);if((function (){var i__39894 = (0);while(true){
if((i__39894 < size__20762__auto__))
{var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20761__auto__,i__39894);cljs.core.chunk_append(b__39895,(function (){var attrs39855 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs39855))?sablono.interpreter.attributes(attrs39855):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39855))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39855)], null))));
})());
{
var G__39905 = (i__39894 + (1));
i__39894 = G__39905;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39895),iter__39892(cljs.core.chunk_rest(s__39893__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39895),null);
}
} else
{var value = cljs.core.first(s__39893__$2);return cljs.core.cons((function (){var attrs39855 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs39855))?sablono.interpreter.attributes(attrs39855):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39855))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39855)], null))));
})(),iter__39892(cljs.core.rest(s__39893__$2)));
}
} else
{return null;
}
break;
}
});})(G__39890,row,s__39861__$2,temp__4126__auto__,G__39858,G__39836,G__39837,page_count,paginate_QMARK_,___$1,map__39834,map__39834__$1,current_page,sort_col,allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__))
,null,null));
});})(G__39890,row,s__39861__$2,temp__4126__auto__,G__39858,G__39836,G__39837,page_count,paginate_QMARK_,___$1,map__39834,map__39834__$1,current_page,sort_col,allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__))
;return iter__20763__auto__(row);
})());return React.DOM.tr(G__39890,G__39891);
})(),iter__39860(cljs.core.rest(s__39861__$2)));
}
} else
{return null;
}
break;
}
});})(G__39858,G__39836,G__39837,page_count,paginate_QMARK_,___$1,map__39834,map__39834__$1,current_page,sort_col,allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__))
,null,null));
});})(G__39858,G__39836,G__39837,page_count,paginate_QMARK_,___$1,map__39834,map__39834__$1,current_page,sort_col,allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__))
;return iter__20763__auto__(stuttaford.radiant.components.sort_rows(sort_col,stuttaford.radiant.components.paginate(current_page,self__.rows)));
})());return React.DOM.tbody(G__39858,G__39859);
})()], null))], 0)));return React.DOM.div(G__39836,G__39837,G__39838);
});})(allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__))
;
stuttaford.radiant.components.t39830.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__){
return (function (_39832){var self__ = this;
var _39832__$1 = this;return self__.meta39831;
});})(allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__))
;
stuttaford.radiant.components.t39830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__){
return (function (_39832,meta39831__$1){var self__ = this;
var _39832__$1 = this;return (new stuttaford.radiant.components.t39830(self__.G__39758,self__.owner,self__.opts__24173__auto__,self__.result_table,self__.owner39596,self__.allow_sorting_QMARK_,self__.output_schema39754,self__.fnk39753,self__.vec__39749,self__.data__24172__auto__,self__.map39751,self__.map39752,self__.input_schema39755,self__.rows,self__.p__39598,self__.cols,self__.map39750,self__.validate__837__auto__,self__.output_checker39757,self__.input_checker39756,self__.ufv__,meta39831__$1));
});})(allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__))
;
stuttaford.radiant.components.__GT_t39830 = ((function (allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__){
return (function __GT_t39830(G__39758__$1,owner__$1,opts__24173__auto____$1,result_table__$1,owner39596__$1,allow_sorting_QMARK___$1,output_schema39754__$1,fnk39753__$1,vec__39749__$1,data__24172__auto____$1,map39751__$1,map39752__$1,input_schema39755__$1,rows__$1,p__39598__$1,cols__$1,map39750__$1,validate__837__auto____$1,output_checker39757__$1,input_checker39756__$1,ufv____$1,meta39831){return (new stuttaford.radiant.components.t39830(G__39758__$1,owner__$1,opts__24173__auto____$1,result_table__$1,owner39596__$1,allow_sorting_QMARK___$1,output_schema39754__$1,fnk39753__$1,vec__39749__$1,data__24172__auto____$1,map39751__$1,map39752__$1,input_schema39755__$1,rows__$1,p__39598__$1,cols__$1,map39750__$1,validate__837__auto____$1,output_checker39757__$1,input_checker39756__$1,ufv____$1,meta39831));
});})(allow_sorting_QMARK_,map39751,owner,rows,cols,map39752,validate__837__auto__,ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__))
;
}
return (new stuttaford.radiant.components.t39830(G__39758,owner,opts__24173__auto__,result_table,owner39596,allow_sorting_QMARK_,output_schema39754,fnk39753,vec__39749,data__24172__auto__,map39751,map39752,input_schema39755,rows,p__39598,cols,map39750,validate__837__auto__,output_checker39757,input_checker39756,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39906 = (function (){var G__39898 = o__840__auto__;return (output_checker39757.cljs$core$IFn$_invoke$arity$1 ? output_checker39757.cljs$core$IFn$_invoke$arity$1(G__39898) : output_checker39757.call(null,G__39898));
})();if(cljs.core.truth_(temp__4126__auto___39906))
{var error__839__auto___39907 = temp__4126__auto___39906;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39753","fnk39753",-1775122802,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39907], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39754,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39907], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema39754,input_schema39755,input_checker39756,output_checker39757,vec__39749,opts__24173__auto__))
,schema.core.make_fn_schema(output_schema39754,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39755], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24173__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner39596,new cljs.core.Keyword(null,"data","data",-232669377),data__24172__auto__], null));
};
var result_table = function (data__24172__auto__,owner39596,var_args){
var p__39598 = null;if (arguments.length > 2) {
  p__39598 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return result_table__delegate.call(this,data__24172__auto__,owner39596,p__39598);};
result_table.cljs$lang$maxFixedArity = 2;
result_table.cljs$lang$applyTo = (function (arglist__39908){
var data__24172__auto__ = cljs.core.first(arglist__39908);
arglist__39908 = cljs.core.next(arglist__39908);
var owner39596 = cljs.core.first(arglist__39908);
var p__39598 = cljs.core.rest(arglist__39908);
return result_table__delegate(data__24172__auto__,owner39596,p__39598);
});
result_table.cljs$core$IFn$_invoke$arity$variadic = result_table__delegate;
return result_table;
})()
;
stuttaford.radiant.components.__GT_result_table = (function() {
var __GT_result_table = null;
var __GT_result_table__1 = (function (cursor__24141__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.result_table,cursor__24141__auto__);
});
var __GT_result_table__2 = (function (cursor__24141__auto__,m39597){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.components.result_table,cursor__24141__auto__,m39597);
});
__GT_result_table = function(cursor__24141__auto__,m39597){
switch(arguments.length){
case 1:
return __GT_result_table__1.call(this,cursor__24141__auto__);
case 2:
return __GT_result_table__2.call(this,cursor__24141__auto__,m39597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_result_table.cljs$core$IFn$_invoke$arity$1 = __GT_result_table__1;
__GT_result_table.cljs$core$IFn$_invoke$arity$2 = __GT_result_table__2;
return __GT_result_table;
})()
;
//# sourceMappingURL=components.js.map