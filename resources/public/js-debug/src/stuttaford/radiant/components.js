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
stuttaford.radiant.components.data_source_dropdown = (function data_source_dropdown(c,data_sources,current_data_source){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om_bootstrap.button.dropdown,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),stuttaford.radiant.model.data_source_label(data_sources,current_data_source)], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var iter__20735__auto__ = (function iter__39325(s__39326){return (new cljs.core.LazySeq(null,(function (){var s__39326__$1 = s__39326;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39326__$1);if(temp__4126__auto__)
{var s__39326__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39326__$2))
{var c__20733__auto__ = cljs.core.chunk_first(s__39326__$2);var size__20734__auto__ = cljs.core.count(c__20733__auto__);var b__39328 = cljs.core.chunk_buffer(size__20734__auto__);if((function (){var i__39327 = (0);while(true){
if((i__39327 < size__20734__auto__))
{var map__39333 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20733__auto__,i__39327);var map__39333__$1 = ((cljs.core.seq_QMARK_(map__39333))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39333):map__39333);var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39333__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39333__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append(b__39328,stuttaford.radiant.components.data_source_item(c,id,label));
{
var G__39335 = (i__39327 + (1));
i__39327 = G__39335;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39328),iter__39325(cljs.core.chunk_rest(s__39326__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39328),null);
}
} else
{var map__39334 = cljs.core.first(s__39326__$2);var map__39334__$1 = ((cljs.core.seq_QMARK_(map__39334))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39334):map__39334);var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39334__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39334__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons(stuttaford.radiant.components.data_source_item(c,id,label),iter__39325(cljs.core.rest(s__39326__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20735__auto__(cljs.core.vals(data_sources));
})()));
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.components.schema = (function() { 
var schema__$1__delegate = function (data__24172__auto__,owner39336,p__39338){var vec__39404 = p__39338;var opts__24173__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39404,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema39408 = schema.core.Any;var input_schema39409 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-db","current-db",213667882)),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map39405","map39405",1804155773,null))], null);var input_checker39410 = schema.core.checker(input_schema39409);var output_checker39411 = schema.core.checker(output_schema39408);return schema.core.schematize_fn(((function (ufv__,output_schema39408,input_schema39409,input_checker39410,output_checker39411,vec__39404,opts__24173__auto__){
return (function fnk39407(G__39412){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39469 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39412], null);var temp__4126__auto___39470 = (function (){var G__39441 = args__838__auto___39469;return (input_checker39410.cljs$core$IFn$_invoke$arity$1 ? input_checker39410.cljs$core$IFn$_invoke$arity$1(G__39441) : input_checker39410.call(null,G__39441));
})();if(cljs.core.truth_(temp__4126__auto___39470))
{var error__839__auto___39471 = temp__4126__auto___39470;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39407","fnk39407",1764065456,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39471], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39409,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39469,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39471], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map39405 = G__39412;while(true){
if(cljs.core.map_QMARK_(map39405))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map39405], 0))));
}
var map39406 = plumbing.fnk.schema.safe_get(map39405,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var current_db = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map39406,new cljs.core.Keyword(null,"current-db","current-db",213667882),null);var owner = plumbing.fnk.schema.safe_get(map39405,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.components.t39442 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.components.t39442 = (function (input_schema39409,owner,opts__24173__auto__,vec__39404,G__39412,owner39336,schema,p__39338,output_checker39411,fnk39407,data__24172__auto__,current_db,input_checker39410,output_schema39408,map39406,validate__837__auto__,ufv__,map39405,meta39443){
this.input_schema39409 = input_schema39409;
this.owner = owner;
this.opts__24173__auto__ = opts__24173__auto__;
this.vec__39404 = vec__39404;
this.G__39412 = G__39412;
this.owner39336 = owner39336;
this.schema = schema;
this.p__39338 = p__39338;
this.output_checker39411 = output_checker39411;
this.fnk39407 = fnk39407;
this.data__24172__auto__ = data__24172__auto__;
this.current_db = current_db;
this.input_checker39410 = input_checker39410;
this.output_schema39408 = output_schema39408;
this.map39406 = map39406;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.map39405 = map39405;
this.meta39443 = meta39443;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.components.t39442.cljs$lang$type = true;
stuttaford.radiant.components.t39442.cljs$lang$ctorStr = "stuttaford.radiant.components/t39442";
stuttaford.radiant.components.t39442.cljs$lang$ctorPrWriter = ((function (owner,current_db,map39406,validate__837__auto__,ufv__,output_schema39408,input_schema39409,input_checker39410,output_checker39411,vec__39404,opts__24173__auto__){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"stuttaford.radiant.components/t39442");
});})(owner,current_db,map39406,validate__837__auto__,ufv__,output_schema39408,input_schema39409,input_checker39410,output_checker39411,vec__39404,opts__24173__auto__))
;
stuttaford.radiant.components.t39442.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.components.t39442.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,current_db,map39406,validate__837__auto__,ufv__,output_schema39408,input_schema39409,input_checker39410,output_checker39411,vec__39404,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "schema";
});})(owner,current_db,map39406,validate__837__auto__,ufv__,output_schema39408,input_schema39409,input_checker39410,output_checker39411,vec__39404,opts__24173__auto__))
;
stuttaford.radiant.components.t39442.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.components.t39442.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,current_db,map39406,validate__837__auto__,ufv__,output_schema39408,input_schema39409,input_checker39410,output_checker39411,vec__39404,opts__24173__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),"Schema"], null),cljs.core.array_seq([(cljs.core.truth_(self__.current_db)?cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20735__auto__ = ((function (___$1,owner,current_db,map39406,validate__837__auto__,ufv__,output_schema39408,input_schema39409,input_checker39410,output_checker39411,vec__39404,opts__24173__auto__){
return (function iter__39446(s__39447){return (new cljs.core.LazySeq(null,((function (___$1,owner,current_db,map39406,validate__837__auto__,ufv__,output_schema39408,input_schema39409,input_checker39410,output_checker39411,vec__39404,opts__24173__auto__){
return (function (){var s__39447__$1 = s__39447;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39447__$1);if(temp__4126__auto__)
{var s__39447__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39447__$2))
{var c__20733__auto__ = cljs.core.chunk_first(s__39447__$2);var size__20734__auto__ = cljs.core.count(c__20733__auto__);var b__39449 = cljs.core.chunk_buffer(size__20734__auto__);if((function (){var i__39448 = (0);while(true){
if((i__39448 < size__20734__auto__))
{var schema__$3 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20733__auto__,i__39448);cljs.core.chunk_append(b__39449,(function (){var G__39460 = {"className": "schema"};var G__39461 = (function (){var attrs39445 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(schema__$3)], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs39445))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ident"], null)], null),attrs39445], 0))):{"className": "ident"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39445))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39445)], null))));
})();var G__39462 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["REF"], 0)):null));var G__39463 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["MANY"], 0)):null));return React.DOM.span(G__39460,G__39461,G__39462,G__39463);
})());
{
var G__39472 = (i__39448 + (1));
i__39448 = G__39472;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39449),iter__39446(cljs.core.chunk_rest(s__39447__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39449),null);
}
} else
{var schema__$3 = cljs.core.first(s__39447__$2);return cljs.core.cons((function (){var G__39464 = {"className": "schema"};var G__39465 = (function (){var attrs39445 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(schema__$3)], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs39445))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ident"], null)], null),attrs39445], 0))):{"className": "ident"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39445))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39445)], null))));
})();var G__39466 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["REF"], 0)):null));var G__39467 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["MANY"], 0)):null));return React.DOM.span(G__39464,G__39465,G__39466,G__39467);
})(),iter__39446(cljs.core.rest(s__39447__$2)));
}
} else
{return null;
}
break;
}
});})(___$1,owner,current_db,map39406,validate__837__auto__,ufv__,output_schema39408,input_schema39409,input_checker39410,output_checker39411,vec__39404,opts__24173__auto__))
,null,null));
});})(___$1,owner,current_db,map39406,validate__837__auto__,ufv__,output_schema39408,input_schema39409,input_checker39410,output_checker39411,vec__39404,opts__24173__auto__))
;return iter__20735__auto__(stuttaford.radiant.model.schema_for_db(self__.current_db));
})()):"No database.")], 0));
});})(owner,current_db,map39406,validate__837__auto__,ufv__,output_schema39408,input_schema39409,input_checker39410,output_checker39411,vec__39404,opts__24173__auto__))
;
stuttaford.radiant.components.t39442.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,current_db,map39406,validate__837__auto__,ufv__,output_schema39408,input_schema39409,input_checker39410,output_checker39411,vec__39404,opts__24173__auto__){
return (function (_39444){var self__ = this;
var _39444__$1 = this;return self__.meta39443;
});})(owner,current_db,map39406,validate__837__auto__,ufv__,output_schema39408,input_schema39409,input_checker39410,output_checker39411,vec__39404,opts__24173__auto__))
;
stuttaford.radiant.components.t39442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,current_db,map39406,validate__837__auto__,ufv__,output_schema39408,input_schema39409,input_checker39410,output_checker39411,vec__39404,opts__24173__auto__){
return (function (_39444,meta39443__$1){var self__ = this;
var _39444__$1 = this;return (new stuttaford.radiant.components.t39442(self__.input_schema39409,self__.owner,self__.opts__24173__auto__,self__.vec__39404,self__.G__39412,self__.owner39336,self__.schema,self__.p__39338,self__.output_checker39411,self__.fnk39407,self__.data__24172__auto__,self__.current_db,self__.input_checker39410,self__.output_schema39408,self__.map39406,self__.validate__837__auto__,self__.ufv__,self__.map39405,meta39443__$1));
});})(owner,current_db,map39406,validate__837__auto__,ufv__,output_schema39408,input_schema39409,input_checker39410,output_checker39411,vec__39404,opts__24173__auto__))
;
stuttaford.radiant.components.__GT_t39442 = ((function (owner,current_db,map39406,validate__837__auto__,ufv__,output_schema39408,input_schema39409,input_checker39410,output_checker39411,vec__39404,opts__24173__auto__){
return (function __GT_t39442(input_schema39409__$1,owner__$1,opts__24173__auto____$1,vec__39404__$1,G__39412__$1,owner39336__$1,schema__$2,p__39338__$1,output_checker39411__$1,fnk39407__$1,data__24172__auto____$1,current_db__$1,input_checker39410__$1,output_schema39408__$1,map39406__$1,validate__837__auto____$1,ufv____$1,map39405__$1,meta39443){return (new stuttaford.radiant.components.t39442(input_schema39409__$1,owner__$1,opts__24173__auto____$1,vec__39404__$1,G__39412__$1,owner39336__$1,schema__$2,p__39338__$1,output_checker39411__$1,fnk39407__$1,data__24172__auto____$1,current_db__$1,input_checker39410__$1,output_schema39408__$1,map39406__$1,validate__837__auto____$1,ufv____$1,map39405__$1,meta39443));
});})(owner,current_db,map39406,validate__837__auto__,ufv__,output_schema39408,input_schema39409,input_checker39410,output_checker39411,vec__39404,opts__24173__auto__))
;
}
return (new stuttaford.radiant.components.t39442(input_schema39409,owner,opts__24173__auto__,vec__39404,G__39412,owner39336,schema__$1,p__39338,output_checker39411,fnk39407,data__24172__auto__,current_db,input_checker39410,output_schema39408,map39406,validate__837__auto__,ufv__,map39405,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39473 = (function (){var G__39468 = o__840__auto__;return (output_checker39411.cljs$core$IFn$_invoke$arity$1 ? output_checker39411.cljs$core$IFn$_invoke$arity$1(G__39468) : output_checker39411.call(null,G__39468));
})();if(cljs.core.truth_(temp__4126__auto___39473))
{var error__839__auto___39474 = temp__4126__auto___39473;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39407","fnk39407",1764065456,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39474], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39408,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39474], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema39408,input_schema39409,input_checker39410,output_checker39411,vec__39404,opts__24173__auto__))
,schema.core.make_fn_schema(output_schema39408,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39409], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24173__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner39336,new cljs.core.Keyword(null,"data","data",-232669377),data__24172__auto__], null));
};
var schema__$1 = function (data__24172__auto__,owner39336,var_args){
var p__39338 = null;if (arguments.length > 2) {
  p__39338 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return schema__$1__delegate.call(this,data__24172__auto__,owner39336,p__39338);};
schema__$1.cljs$lang$maxFixedArity = 2;
schema__$1.cljs$lang$applyTo = (function (arglist__39475){
var data__24172__auto__ = cljs.core.first(arglist__39475);
arglist__39475 = cljs.core.next(arglist__39475);
var owner39336 = cljs.core.first(arglist__39475);
var p__39338 = cljs.core.rest(arglist__39475);
return schema__$1__delegate(data__24172__auto__,owner39336,p__39338);
});
schema__$1.cljs$core$IFn$_invoke$arity$variadic = schema__$1__delegate;
return schema__$1;
})()
;
stuttaford.radiant.components.__GT_schema = (function() {
var __GT_schema = null;
var __GT_schema__1 = (function (cursor__24141__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.schema,cursor__24141__auto__);
});
var __GT_schema__2 = (function (cursor__24141__auto__,m39337){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.components.schema,cursor__24141__auto__,m39337);
});
__GT_schema = function(cursor__24141__auto__,m39337){
switch(arguments.length){
case 1:
return __GT_schema__1.call(this,cursor__24141__auto__);
case 2:
return __GT_schema__2.call(this,cursor__24141__auto__,m39337);
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
var top_nav__delegate = function (data__24172__auto__,owner39476,p__39478){var vec__39545 = p__39478;var opts__24173__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39545,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema39550 = schema.core.Any;var input_schema39551 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684)),schema.core.Any,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map39546","map39546",2083656309,null))], null);var input_checker39552 = schema.core.checker(input_schema39551);var output_checker39553 = schema.core.checker(output_schema39550);return schema.core.schematize_fn(((function (ufv__,output_schema39550,input_schema39551,input_checker39552,output_checker39553,vec__39545,opts__24173__auto__){
return (function fnk39549(G__39554){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39611 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39554], null);var temp__4126__auto___39612 = (function (){var G__39583 = args__838__auto___39611;return (input_checker39552.cljs$core$IFn$_invoke$arity$1 ? input_checker39552.cljs$core$IFn$_invoke$arity$1(G__39583) : input_checker39552.call(null,G__39583));
})();if(cljs.core.truth_(temp__4126__auto___39612))
{var error__839__auto___39613 = temp__4126__auto___39612;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39549","fnk39549",1608733864,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39613], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39551,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39611,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39613], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map39546 = G__39554;while(true){
if(cljs.core.map_QMARK_(map39546))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map39546], 0))));
}
var map39548 = plumbing.fnk.schema.safe_get(map39546,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(map39548,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var data_sources = plumbing.fnk.schema.safe_get(map39548,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map39548,new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684),null);var schema_visible_QMARK_ = plumbing.fnk.schema.safe_get(map39548,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map39546,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map39547 = plumbing.fnk.schema.safe_get(map39546,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var nav_items = plumbing.fnk.schema.safe_get(map39547,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));if(typeof stuttaford.radiant.components.t39584 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.components.t39584 = (function (p__39478,input_schema39551,current_data_source,G__39554,map39547,owner,opts__24173__auto__,view,input_checker39552,fnk39549,schema_visible_QMARK_,nav_items,data__24172__auto__,data_sources,top_nav,map39548,map39546,output_schema39550,owner39476,vec__39545,validate__837__auto__,output_checker39553,ufv__,meta39585){
this.p__39478 = p__39478;
this.input_schema39551 = input_schema39551;
this.current_data_source = current_data_source;
this.G__39554 = G__39554;
this.map39547 = map39547;
this.owner = owner;
this.opts__24173__auto__ = opts__24173__auto__;
this.view = view;
this.input_checker39552 = input_checker39552;
this.fnk39549 = fnk39549;
this.schema_visible_QMARK_ = schema_visible_QMARK_;
this.nav_items = nav_items;
this.data__24172__auto__ = data__24172__auto__;
this.data_sources = data_sources;
this.top_nav = top_nav;
this.map39548 = map39548;
this.map39546 = map39546;
this.output_schema39550 = output_schema39550;
this.owner39476 = owner39476;
this.vec__39545 = vec__39545;
this.validate__837__auto__ = validate__837__auto__;
this.output_checker39553 = output_checker39553;
this.ufv__ = ufv__;
this.meta39585 = meta39585;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.components.t39584.cljs$lang$type = true;
stuttaford.radiant.components.t39584.cljs$lang$ctorStr = "stuttaford.radiant.components/t39584";
stuttaford.radiant.components.t39584.cljs$lang$ctorPrWriter = ((function (nav_items,map39547,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39548,validate__837__auto__,ufv__,output_schema39550,input_schema39551,input_checker39552,output_checker39553,vec__39545,opts__24173__auto__){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"stuttaford.radiant.components/t39584");
});})(nav_items,map39547,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39548,validate__837__auto__,ufv__,output_schema39550,input_schema39551,input_checker39552,output_checker39553,vec__39545,opts__24173__auto__))
;
stuttaford.radiant.components.t39584.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.components.t39584.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (nav_items,map39547,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39548,validate__837__auto__,ufv__,output_schema39550,input_schema39551,input_checker39552,output_checker39553,vec__39545,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "top-nav";
});})(nav_items,map39547,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39548,validate__837__auto__,ufv__,output_schema39550,input_schema39551,input_checker39552,output_checker39553,vec__39545,opts__24173__auto__))
;
stuttaford.radiant.components.t39584.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.components.t39584.prototype.om$core$IRenderState$render_state$arity$2 = ((function (nav_items,map39547,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39548,validate__837__auto__,ufv__,output_schema39550,input_schema39551,input_checker39552,output_checker39553,vec__39545,opts__24173__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var G__39589 = {"className": "radiant"};var G__39590 = "RADIANT";return React.DOM.div(G__39589,G__39590);
})(),om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20735__auto__ = ((function (c,___$1,nav_items,map39547,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39548,validate__837__auto__,ufv__,output_schema39550,input_schema39551,input_checker39552,output_checker39553,vec__39545,opts__24173__auto__){
return (function iter__39591(s__39592){return (new cljs.core.LazySeq(null,((function (c,___$1,nav_items,map39547,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39548,validate__837__auto__,ufv__,output_schema39550,input_schema39551,input_checker39552,output_checker39553,vec__39545,opts__24173__auto__){
return (function (){var s__39592__$1 = s__39592;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39592__$1);if(temp__4126__auto__)
{var s__39592__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39592__$2))
{var c__20733__auto__ = cljs.core.chunk_first(s__39592__$2);var size__20734__auto__ = cljs.core.count(c__20733__auto__);var b__39594 = cljs.core.chunk_buffer(size__20734__auto__);if((function (){var i__39593 = (0);while(true){
if((i__39593 < size__20734__auto__))
{var vec__39603 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20733__auto__,i__39593);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39603,(0),null);var vec__39604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39603,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39604,(0),null);cljs.core.chunk_append(b__39594,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__39605 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__39593,vec__39603,id,vec__39604,label,c__20733__auto__,size__20734__auto__,b__39594,s__39592__$2,temp__4126__auto__,c,___$1,nav_items,map39547,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39548,validate__837__auto__,ufv__,output_schema39550,input_schema39551,input_checker39552,output_checker39553,vec__39545,opts__24173__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__39593,vec__39603,id,vec__39604,label,c__20733__auto__,size__20734__auto__,b__39594,s__39592__$2,temp__4126__auto__,c,___$1,nav_items,map39547,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39548,validate__837__auto__,ufv__,output_schema39550,input_schema39551,input_checker39552,output_checker39553,vec__39545,opts__24173__auto__))
], null);var G__39605__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39605,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__39605);return G__39605__$1;
})(),cljs.core.array_seq([label], 0)));
{
var G__39614 = (i__39593 + (1));
i__39593 = G__39614;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39594),iter__39591(cljs.core.chunk_rest(s__39592__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39594),null);
}
} else
{var vec__39606 = cljs.core.first(s__39592__$2);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39606,(0),null);var vec__39607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39606,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39607,(0),null);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__39608 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__39606,id,vec__39607,label,s__39592__$2,temp__4126__auto__,c,___$1,nav_items,map39547,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39548,validate__837__auto__,ufv__,output_schema39550,input_schema39551,input_checker39552,output_checker39553,vec__39545,opts__24173__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(vec__39606,id,vec__39607,label,s__39592__$2,temp__4126__auto__,c,___$1,nav_items,map39547,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39548,validate__837__auto__,ufv__,output_schema39550,input_schema39551,input_checker39552,output_checker39553,vec__39545,opts__24173__auto__))
], null);var G__39608__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39608,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__39608);return G__39608__$1;
})(),cljs.core.array_seq([label], 0)),iter__39591(cljs.core.rest(s__39592__$2)));
}
} else
{return null;
}
break;
}
});})(c,___$1,nav_items,map39547,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39548,validate__837__auto__,ufv__,output_schema39550,input_schema39551,input_checker39552,output_checker39553,vec__39545,opts__24173__auto__))
,null,null));
});})(c,___$1,nav_items,map39547,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39548,validate__837__auto__,ufv__,output_schema39550,input_schema39551,input_checker39552,output_checker39553,vec__39545,opts__24173__auto__))
;return iter__20735__auto__(self__.nav_items);
})()], 0)),stuttaford.radiant.components.data_source_dropdown(c,self__.data_sources,self__.current_data_source),om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__39609 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (c,___$1,nav_items,map39547,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39548,validate__837__auto__,ufv__,output_schema39550,input_schema39551,input_checker39552,output_checker39553,vec__39545,opts__24173__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-schema-visible","set-schema-visible",-1408939033),cljs.core.not(self__.schema_visible_QMARK_)], null));
});})(c,___$1,nav_items,map39547,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39548,validate__837__auto__,ufv__,output_schema39550,input_schema39551,input_checker39552,output_checker39553,vec__39545,opts__24173__auto__))
], null);var G__39609__$1 = (cljs.core.truth_(self__.schema_visible_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39609,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__39609);return G__39609__$1;
})(),cljs.core.array_seq(["Show schema"], 0))], 0));
});})(nav_items,map39547,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39548,validate__837__auto__,ufv__,output_schema39550,input_schema39551,input_checker39552,output_checker39553,vec__39545,opts__24173__auto__))
;
stuttaford.radiant.components.t39584.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (nav_items,map39547,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39548,validate__837__auto__,ufv__,output_schema39550,input_schema39551,input_checker39552,output_checker39553,vec__39545,opts__24173__auto__){
return (function (_39586){var self__ = this;
var _39586__$1 = this;return self__.meta39585;
});})(nav_items,map39547,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39548,validate__837__auto__,ufv__,output_schema39550,input_schema39551,input_checker39552,output_checker39553,vec__39545,opts__24173__auto__))
;
stuttaford.radiant.components.t39584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (nav_items,map39547,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39548,validate__837__auto__,ufv__,output_schema39550,input_schema39551,input_checker39552,output_checker39553,vec__39545,opts__24173__auto__){
return (function (_39586,meta39585__$1){var self__ = this;
var _39586__$1 = this;return (new stuttaford.radiant.components.t39584(self__.p__39478,self__.input_schema39551,self__.current_data_source,self__.G__39554,self__.map39547,self__.owner,self__.opts__24173__auto__,self__.view,self__.input_checker39552,self__.fnk39549,self__.schema_visible_QMARK_,self__.nav_items,self__.data__24172__auto__,self__.data_sources,self__.top_nav,self__.map39548,self__.map39546,self__.output_schema39550,self__.owner39476,self__.vec__39545,self__.validate__837__auto__,self__.output_checker39553,self__.ufv__,meta39585__$1));
});})(nav_items,map39547,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39548,validate__837__auto__,ufv__,output_schema39550,input_schema39551,input_checker39552,output_checker39553,vec__39545,opts__24173__auto__))
;
stuttaford.radiant.components.__GT_t39584 = ((function (nav_items,map39547,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39548,validate__837__auto__,ufv__,output_schema39550,input_schema39551,input_checker39552,output_checker39553,vec__39545,opts__24173__auto__){
return (function __GT_t39584(p__39478__$1,input_schema39551__$1,current_data_source__$1,G__39554__$1,map39547__$1,owner__$1,opts__24173__auto____$1,view__$1,input_checker39552__$1,fnk39549__$1,schema_visible_QMARK___$1,nav_items__$1,data__24172__auto____$1,data_sources__$1,top_nav__$1,map39548__$1,map39546__$1,output_schema39550__$1,owner39476__$1,vec__39545__$1,validate__837__auto____$1,output_checker39553__$1,ufv____$1,meta39585){return (new stuttaford.radiant.components.t39584(p__39478__$1,input_schema39551__$1,current_data_source__$1,G__39554__$1,map39547__$1,owner__$1,opts__24173__auto____$1,view__$1,input_checker39552__$1,fnk39549__$1,schema_visible_QMARK___$1,nav_items__$1,data__24172__auto____$1,data_sources__$1,top_nav__$1,map39548__$1,map39546__$1,output_schema39550__$1,owner39476__$1,vec__39545__$1,validate__837__auto____$1,output_checker39553__$1,ufv____$1,meta39585));
});})(nav_items,map39547,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39548,validate__837__auto__,ufv__,output_schema39550,input_schema39551,input_checker39552,output_checker39553,vec__39545,opts__24173__auto__))
;
}
return (new stuttaford.radiant.components.t39584(p__39478,input_schema39551,current_data_source,G__39554,map39547,owner,opts__24173__auto__,view,input_checker39552,fnk39549,schema_visible_QMARK_,nav_items,data__24172__auto__,data_sources,top_nav,map39548,map39546,output_schema39550,owner39476,vec__39545,validate__837__auto__,output_checker39553,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39615 = (function (){var G__39610 = o__840__auto__;return (output_checker39553.cljs$core$IFn$_invoke$arity$1 ? output_checker39553.cljs$core$IFn$_invoke$arity$1(G__39610) : output_checker39553.call(null,G__39610));
})();if(cljs.core.truth_(temp__4126__auto___39615))
{var error__839__auto___39616 = temp__4126__auto___39615;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39549","fnk39549",1608733864,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39616], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39550,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39616], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema39550,input_schema39551,input_checker39552,output_checker39553,vec__39545,opts__24173__auto__))
,schema.core.make_fn_schema(output_schema39550,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39551], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24173__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner39476,new cljs.core.Keyword(null,"data","data",-232669377),data__24172__auto__], null));
};
var top_nav = function (data__24172__auto__,owner39476,var_args){
var p__39478 = null;if (arguments.length > 2) {
  p__39478 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return top_nav__delegate.call(this,data__24172__auto__,owner39476,p__39478);};
top_nav.cljs$lang$maxFixedArity = 2;
top_nav.cljs$lang$applyTo = (function (arglist__39617){
var data__24172__auto__ = cljs.core.first(arglist__39617);
arglist__39617 = cljs.core.next(arglist__39617);
var owner39476 = cljs.core.first(arglist__39617);
var p__39478 = cljs.core.rest(arglist__39617);
return top_nav__delegate(data__24172__auto__,owner39476,p__39478);
});
top_nav.cljs$core$IFn$_invoke$arity$variadic = top_nav__delegate;
return top_nav;
})()
;
stuttaford.radiant.components.__GT_top_nav = (function() {
var __GT_top_nav = null;
var __GT_top_nav__1 = (function (cursor__24141__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.top_nav,cursor__24141__auto__);
});
var __GT_top_nav__2 = (function (cursor__24141__auto__,m39477){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.components.top_nav,cursor__24141__auto__,m39477);
});
__GT_top_nav = function(cursor__24141__auto__,m39477){
switch(arguments.length){
case 1:
return __GT_top_nav__1.call(this,cursor__24141__auto__);
case 2:
return __GT_top_nav__2.call(this,cursor__24141__auto__,m39477);
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
stuttaford.radiant.components.paginate_label = (function paginate_label(current_page,rows){var start = (stuttaford.radiant.components.PAGE_SIZE * current_page);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((start + (1)))+" - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__19982__auto__ = (start + stuttaford.radiant.components.PAGE_SIZE);var y__19983__auto__ = cljs.core.count(rows);return ((x__19982__auto__ < y__19983__auto__) ? x__19982__auto__ : y__19983__auto__);
})()));
});
stuttaford.radiant.components.sort_rows = (function sort_rows(sort_col,rows){return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__39618_SHARP_){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__39618_SHARP_,sort_col);
}),rows);
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.components.result_table = (function() { 
var result_table__delegate = function (data__24172__auto__,owner39619,p__39621){var vec__39772 = p__39621;var opts__24173__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39772,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema39777 = schema.core.Any;var input_schema39778 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260)),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"rows","rows",850049680),schema.core.Any,new cljs.core.Keyword(null,"cols","cols",-1914801295),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map39773","map39773",-283852244,null))], null);var input_checker39779 = schema.core.checker(input_schema39778);var output_checker39780 = schema.core.checker(output_schema39777);return schema.core.schematize_fn(((function (ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__){
return (function fnk39776(G__39781){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39922 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39781], null);var temp__4126__auto___39923 = (function (){var G__39852 = args__838__auto___39922;return (input_checker39779.cljs$core$IFn$_invoke$arity$1 ? input_checker39779.cljs$core$IFn$_invoke$arity$1(G__39852) : input_checker39779.call(null,G__39852));
})();if(cljs.core.truth_(temp__4126__auto___39923))
{var error__839__auto___39924 = temp__4126__auto___39923;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39776","fnk39776",-1590154158,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39924], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39778,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39922,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39924], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map39773 = G__39781;while(true){
if(cljs.core.map_QMARK_(map39773))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map39773], 0))));
}
var map39775 = plumbing.fnk.schema.safe_get(map39773,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var cols = plumbing.fnk.schema.safe_get(map39775,new cljs.core.Keyword(null,"cols","cols",-1914801295),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var rows = plumbing.fnk.schema.safe_get(map39775,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map39773,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map39774 = plumbing.fnk.schema.safe_get(map39773,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var allow_sorting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map39774,new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),false);if(typeof stuttaford.radiant.components.t39853 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.components.t39853 = (function (map39774,p__39621,owner,opts__24173__auto__,result_table,allow_sorting_QMARK_,map39773,output_schema39777,vec__39772,data__24172__auto__,fnk39776,G__39781,owner39619,rows,map39775,input_schema39778,cols,output_checker39780,validate__837__auto__,ufv__,input_checker39779,meta39854){
this.map39774 = map39774;
this.p__39621 = p__39621;
this.owner = owner;
this.opts__24173__auto__ = opts__24173__auto__;
this.result_table = result_table;
this.allow_sorting_QMARK_ = allow_sorting_QMARK_;
this.map39773 = map39773;
this.output_schema39777 = output_schema39777;
this.vec__39772 = vec__39772;
this.data__24172__auto__ = data__24172__auto__;
this.fnk39776 = fnk39776;
this.G__39781 = G__39781;
this.owner39619 = owner39619;
this.rows = rows;
this.map39775 = map39775;
this.input_schema39778 = input_schema39778;
this.cols = cols;
this.output_checker39780 = output_checker39780;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.input_checker39779 = input_checker39779;
this.meta39854 = meta39854;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.components.t39853.cljs$lang$type = true;
stuttaford.radiant.components.t39853.cljs$lang$ctorStr = "stuttaford.radiant.components/t39853";
stuttaford.radiant.components.t39853.cljs$lang$ctorPrWriter = ((function (allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"stuttaford.radiant.components/t39853");
});})(allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__))
;
stuttaford.radiant.components.t39853.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.components.t39853.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "result-table";
});})(allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__))
;
stuttaford.radiant.components.t39853.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.components.t39853.prototype.om$core$IRenderState$render_state$arity$2 = ((function (allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__){
return (function (_,p__39856){var self__ = this;
var map__39857 = p__39856;var map__39857__$1 = ((cljs.core.seq_QMARK_(map__39857))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39857):map__39857);var current_page = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39857__$1,new cljs.core.Keyword(null,"current-page","current-page",-101294180),(0));var sort_col = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39857__$1,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882),(0));var ___$1 = this;var page_count = cljs.core.count(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.PAGE_SIZE,self__.rows));var paginate_QMARK_ = (page_count > (1));var G__39859 = null;var G__39860 = (function (){var G__39862 = {"className": "result-pagination"};var G__39863 = (function (){var attrs39858 = cljs.core.count(self__.rows);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs39858))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-count"], null)], null),attrs39858], 0))):{"className": "item-count"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39858))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" items",sablono.interpreter.interpret(((paginate_QMARK_)?(" \u00B7 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(stuttaford.radiant.components.paginate_label(current_page,self__.rows))):null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39858)," items",sablono.interpreter.interpret(((paginate_QMARK_)?(" \u00B7 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(stuttaford.radiant.components.paginate_label(current_page,self__.rows))):null))], null))));
})();var G__39864 = sablono.interpreter.interpret(((paginate_QMARK_)?om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20735__auto__ = ((function (G__39862,G__39863,G__39859,page_count,paginate_QMARK_,___$1,map__39857,map__39857__$1,current_page,sort_col,allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__){
return (function iter__39865(s__39866){return (new cljs.core.LazySeq(null,((function (G__39862,G__39863,G__39859,page_count,paginate_QMARK_,___$1,map__39857,map__39857__$1,current_page,sort_col,allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__){
return (function (){var s__39866__$1 = s__39866;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39866__$1);if(temp__4126__auto__)
{var s__39866__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39866__$2))
{var c__20733__auto__ = cljs.core.chunk_first(s__39866__$2);var size__20734__auto__ = cljs.core.count(c__20733__auto__);var b__39868 = cljs.core.chunk_buffer(size__20734__auto__);if((function (){var i__39867 = (0);while(true){
if((i__39867 < size__20734__auto__))
{var page = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20733__auto__,i__39867);cljs.core.chunk_append(b__39868,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__39873 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__39867,page,c__20733__auto__,size__20734__auto__,b__39868,s__39866__$2,temp__4126__auto__,G__39862,G__39863,G__39859,page_count,paginate_QMARK_,___$1,map__39857,map__39857__$1,current_page,sort_col,allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page);
});})(i__39867,page,c__20733__auto__,size__20734__auto__,b__39868,s__39866__$2,temp__4126__auto__,G__39862,G__39863,G__39859,page_count,paginate_QMARK_,___$1,map__39857,map__39857__$1,current_page,sort_col,allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__))
], null);var G__39873__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39873,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__39873);return G__39873__$1;
})(),cljs.core.array_seq([(page + (1))], 0)));
{
var G__39925 = (i__39867 + (1));
i__39867 = G__39925;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39868),iter__39865(cljs.core.chunk_rest(s__39866__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39868),null);
}
} else
{var page = cljs.core.first(s__39866__$2);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__39874 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (page,s__39866__$2,temp__4126__auto__,G__39862,G__39863,G__39859,page_count,paginate_QMARK_,___$1,map__39857,map__39857__$1,current_page,sort_col,allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page);
});})(page,s__39866__$2,temp__4126__auto__,G__39862,G__39863,G__39859,page_count,paginate_QMARK_,___$1,map__39857,map__39857__$1,current_page,sort_col,allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__))
], null);var G__39874__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39874,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__39874);return G__39874__$1;
})(),cljs.core.array_seq([(page + (1))], 0)),iter__39865(cljs.core.rest(s__39866__$2)));
}
} else
{return null;
}
break;
}
});})(G__39862,G__39863,G__39859,page_count,paginate_QMARK_,___$1,map__39857,map__39857__$1,current_page,sort_col,allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__))
,null,null));
});})(G__39862,G__39863,G__39859,page_count,paginate_QMARK_,___$1,map__39857,map__39857__$1,current_page,sort_col,allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__))
;return iter__20735__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(page_count));
})()], 0)):null));return React.DOM.div(G__39862,G__39863,G__39864);
})();var G__39861 = sablono.interpreter.interpret(om_bootstrap.table.table.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"striped?","striped?",-797214979),true,new cljs.core.Keyword(null,"bordered?","bordered?",562358476),true,new cljs.core.Keyword(null,"condensed?","condensed?",-109797520),true,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),true], null),cljs.core.array_seq([cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39879 = null;var G__39880 = (function (){var attrs39877 = cljs.core.map_indexed(((function (G__39879,G__39859,G__39860,page_count,paginate_QMARK_,___$1,map__39857,map__39857__$1,current_page,sort_col,allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__){
return (function (i,v){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),(cljs.core.truth_(self__.allow_sorting_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__39879,G__39859,G__39860,page_count,paginate_QMARK_,___$1,map__39857,map__39857__$1,current_page,sort_col,allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882),i);
});})(G__39879,G__39859,G__39860,page_count,paginate_QMARK_,___$1,map__39857,map__39857__$1,current_page,sort_col,allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__))
], null):null),v,(cljs.core.truth_((function (){var and__19335__auto__ = self__.allow_sorting_QMARK_;if(cljs.core.truth_(and__19335__auto__))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,sort_col);
} else
{return and__19335__auto__;
}
})())?cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-chevron-down","span.glyphicon.glyphicon-chevron-down",-62425995)], null))," "):null)], null);
});})(G__39879,G__39859,G__39860,page_count,paginate_QMARK_,___$1,map__39857,map__39857__$1,current_page,sort_col,allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__))
,self__.cols);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tr,((cljs.core.map_QMARK_(attrs39877))?sablono.interpreter.attributes(attrs39877):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39877))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39877)], null))));
})();return React.DOM.thead(G__39879,G__39880);
})(),(function (){var G__39881 = null;var G__39882 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20735__auto__ = ((function (G__39881,G__39859,G__39860,page_count,paginate_QMARK_,___$1,map__39857,map__39857__$1,current_page,sort_col,allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__){
return (function iter__39883(s__39884){return (new cljs.core.LazySeq(null,((function (G__39881,G__39859,G__39860,page_count,paginate_QMARK_,___$1,map__39857,map__39857__$1,current_page,sort_col,allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__){
return (function (){var s__39884__$1 = s__39884;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39884__$1);if(temp__4126__auto__)
{var s__39884__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39884__$2))
{var c__20733__auto__ = cljs.core.chunk_first(s__39884__$2);var size__20734__auto__ = cljs.core.count(c__20733__auto__);var b__39886 = cljs.core.chunk_buffer(size__20734__auto__);if((function (){var i__39885 = (0);while(true){
if((i__39885 < size__20734__auto__))
{var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20733__auto__,i__39885);cljs.core.chunk_append(b__39886,(function (){var G__39905 = null;var G__39906 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20735__auto__ = ((function (i__39885,G__39905,row,c__20733__auto__,size__20734__auto__,b__39886,s__39884__$2,temp__4126__auto__,G__39881,G__39859,G__39860,page_count,paginate_QMARK_,___$1,map__39857,map__39857__$1,current_page,sort_col,allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__){
return (function iter__39907(s__39908){return (new cljs.core.LazySeq(null,((function (i__39885,G__39905,row,c__20733__auto__,size__20734__auto__,b__39886,s__39884__$2,temp__4126__auto__,G__39881,G__39859,G__39860,page_count,paginate_QMARK_,___$1,map__39857,map__39857__$1,current_page,sort_col,allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__){
return (function (){var s__39908__$1 = s__39908;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__39908__$1);if(temp__4126__auto____$1)
{var s__39908__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__39908__$2))
{var c__20733__auto____$1 = cljs.core.chunk_first(s__39908__$2);var size__20734__auto____$1 = cljs.core.count(c__20733__auto____$1);var b__39910 = cljs.core.chunk_buffer(size__20734__auto____$1);if((function (){var i__39909 = (0);while(true){
if((i__39909 < size__20734__auto____$1))
{var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20733__auto____$1,i__39909);cljs.core.chunk_append(b__39910,(function (){var attrs39878 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs39878))?sablono.interpreter.attributes(attrs39878):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39878))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39878)], null))));
})());
{
var G__39926 = (i__39909 + (1));
i__39909 = G__39926;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39910),iter__39907(cljs.core.chunk_rest(s__39908__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39910),null);
}
} else
{var value = cljs.core.first(s__39908__$2);return cljs.core.cons((function (){var attrs39878 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs39878))?sablono.interpreter.attributes(attrs39878):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39878))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39878)], null))));
})(),iter__39907(cljs.core.rest(s__39908__$2)));
}
} else
{return null;
}
break;
}
});})(i__39885,G__39905,row,c__20733__auto__,size__20734__auto__,b__39886,s__39884__$2,temp__4126__auto__,G__39881,G__39859,G__39860,page_count,paginate_QMARK_,___$1,map__39857,map__39857__$1,current_page,sort_col,allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__))
,null,null));
});})(i__39885,G__39905,row,c__20733__auto__,size__20734__auto__,b__39886,s__39884__$2,temp__4126__auto__,G__39881,G__39859,G__39860,page_count,paginate_QMARK_,___$1,map__39857,map__39857__$1,current_page,sort_col,allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__))
;return iter__20735__auto__(row);
})());return React.DOM.tr(G__39905,G__39906);
})());
{
var G__39927 = (i__39885 + (1));
i__39885 = G__39927;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39886),iter__39883(cljs.core.chunk_rest(s__39884__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39886),null);
}
} else
{var row = cljs.core.first(s__39884__$2);return cljs.core.cons((function (){var G__39913 = null;var G__39914 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20735__auto__ = ((function (G__39913,row,s__39884__$2,temp__4126__auto__,G__39881,G__39859,G__39860,page_count,paginate_QMARK_,___$1,map__39857,map__39857__$1,current_page,sort_col,allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__){
return (function iter__39915(s__39916){return (new cljs.core.LazySeq(null,((function (G__39913,row,s__39884__$2,temp__4126__auto__,G__39881,G__39859,G__39860,page_count,paginate_QMARK_,___$1,map__39857,map__39857__$1,current_page,sort_col,allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__){
return (function (){var s__39916__$1 = s__39916;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__39916__$1);if(temp__4126__auto____$1)
{var s__39916__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__39916__$2))
{var c__20733__auto__ = cljs.core.chunk_first(s__39916__$2);var size__20734__auto__ = cljs.core.count(c__20733__auto__);var b__39918 = cljs.core.chunk_buffer(size__20734__auto__);if((function (){var i__39917 = (0);while(true){
if((i__39917 < size__20734__auto__))
{var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20733__auto__,i__39917);cljs.core.chunk_append(b__39918,(function (){var attrs39878 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs39878))?sablono.interpreter.attributes(attrs39878):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39878))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39878)], null))));
})());
{
var G__39928 = (i__39917 + (1));
i__39917 = G__39928;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39918),iter__39915(cljs.core.chunk_rest(s__39916__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39918),null);
}
} else
{var value = cljs.core.first(s__39916__$2);return cljs.core.cons((function (){var attrs39878 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs39878))?sablono.interpreter.attributes(attrs39878):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39878))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39878)], null))));
})(),iter__39915(cljs.core.rest(s__39916__$2)));
}
} else
{return null;
}
break;
}
});})(G__39913,row,s__39884__$2,temp__4126__auto__,G__39881,G__39859,G__39860,page_count,paginate_QMARK_,___$1,map__39857,map__39857__$1,current_page,sort_col,allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__))
,null,null));
});})(G__39913,row,s__39884__$2,temp__4126__auto__,G__39881,G__39859,G__39860,page_count,paginate_QMARK_,___$1,map__39857,map__39857__$1,current_page,sort_col,allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__))
;return iter__20735__auto__(row);
})());return React.DOM.tr(G__39913,G__39914);
})(),iter__39883(cljs.core.rest(s__39884__$2)));
}
} else
{return null;
}
break;
}
});})(G__39881,G__39859,G__39860,page_count,paginate_QMARK_,___$1,map__39857,map__39857__$1,current_page,sort_col,allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__))
,null,null));
});})(G__39881,G__39859,G__39860,page_count,paginate_QMARK_,___$1,map__39857,map__39857__$1,current_page,sort_col,allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__))
;return iter__20735__auto__(stuttaford.radiant.components.sort_rows(sort_col,stuttaford.radiant.components.paginate(current_page,self__.rows)));
})());return React.DOM.tbody(G__39881,G__39882);
})()], null))], 0)));return React.DOM.div(G__39859,G__39860,G__39861);
});})(allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__))
;
stuttaford.radiant.components.t39853.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__){
return (function (_39855){var self__ = this;
var _39855__$1 = this;return self__.meta39854;
});})(allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__))
;
stuttaford.radiant.components.t39853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__){
return (function (_39855,meta39854__$1){var self__ = this;
var _39855__$1 = this;return (new stuttaford.radiant.components.t39853(self__.map39774,self__.p__39621,self__.owner,self__.opts__24173__auto__,self__.result_table,self__.allow_sorting_QMARK_,self__.map39773,self__.output_schema39777,self__.vec__39772,self__.data__24172__auto__,self__.fnk39776,self__.G__39781,self__.owner39619,self__.rows,self__.map39775,self__.input_schema39778,self__.cols,self__.output_checker39780,self__.validate__837__auto__,self__.ufv__,self__.input_checker39779,meta39854__$1));
});})(allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__))
;
stuttaford.radiant.components.__GT_t39853 = ((function (allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__){
return (function __GT_t39853(map39774__$1,p__39621__$1,owner__$1,opts__24173__auto____$1,result_table__$1,allow_sorting_QMARK___$1,map39773__$1,output_schema39777__$1,vec__39772__$1,data__24172__auto____$1,fnk39776__$1,G__39781__$1,owner39619__$1,rows__$1,map39775__$1,input_schema39778__$1,cols__$1,output_checker39780__$1,validate__837__auto____$1,ufv____$1,input_checker39779__$1,meta39854){return (new stuttaford.radiant.components.t39853(map39774__$1,p__39621__$1,owner__$1,opts__24173__auto____$1,result_table__$1,allow_sorting_QMARK___$1,map39773__$1,output_schema39777__$1,vec__39772__$1,data__24172__auto____$1,fnk39776__$1,G__39781__$1,owner39619__$1,rows__$1,map39775__$1,input_schema39778__$1,cols__$1,output_checker39780__$1,validate__837__auto____$1,ufv____$1,input_checker39779__$1,meta39854));
});})(allow_sorting_QMARK_,map39774,owner,rows,cols,map39775,validate__837__auto__,ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__))
;
}
return (new stuttaford.radiant.components.t39853(map39774,p__39621,owner,opts__24173__auto__,result_table,allow_sorting_QMARK_,map39773,output_schema39777,vec__39772,data__24172__auto__,fnk39776,G__39781,owner39619,rows,map39775,input_schema39778,cols,output_checker39780,validate__837__auto__,ufv__,input_checker39779,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39929 = (function (){var G__39921 = o__840__auto__;return (output_checker39780.cljs$core$IFn$_invoke$arity$1 ? output_checker39780.cljs$core$IFn$_invoke$arity$1(G__39921) : output_checker39780.call(null,G__39921));
})();if(cljs.core.truth_(temp__4126__auto___39929))
{var error__839__auto___39930 = temp__4126__auto___39929;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39776","fnk39776",-1590154158,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39930], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39777,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39930], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema39777,input_schema39778,input_checker39779,output_checker39780,vec__39772,opts__24173__auto__))
,schema.core.make_fn_schema(output_schema39777,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39778], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24173__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner39619,new cljs.core.Keyword(null,"data","data",-232669377),data__24172__auto__], null));
};
var result_table = function (data__24172__auto__,owner39619,var_args){
var p__39621 = null;if (arguments.length > 2) {
  p__39621 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return result_table__delegate.call(this,data__24172__auto__,owner39619,p__39621);};
result_table.cljs$lang$maxFixedArity = 2;
result_table.cljs$lang$applyTo = (function (arglist__39931){
var data__24172__auto__ = cljs.core.first(arglist__39931);
arglist__39931 = cljs.core.next(arglist__39931);
var owner39619 = cljs.core.first(arglist__39931);
var p__39621 = cljs.core.rest(arglist__39931);
return result_table__delegate(data__24172__auto__,owner39619,p__39621);
});
result_table.cljs$core$IFn$_invoke$arity$variadic = result_table__delegate;
return result_table;
})()
;
stuttaford.radiant.components.__GT_result_table = (function() {
var __GT_result_table = null;
var __GT_result_table__1 = (function (cursor__24141__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.result_table,cursor__24141__auto__);
});
var __GT_result_table__2 = (function (cursor__24141__auto__,m39620){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.components.result_table,cursor__24141__auto__,m39620);
});
__GT_result_table = function(cursor__24141__auto__,m39620){
switch(arguments.length){
case 1:
return __GT_result_table__1.call(this,cursor__24141__auto__);
case 2:
return __GT_result_table__2.call(this,cursor__24141__auto__,m39620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_result_table.cljs$core$IFn$_invoke$arity$1 = __GT_result_table__1;
__GT_result_table.cljs$core$IFn$_invoke$arity$2 = __GT_result_table__2;
return __GT_result_table;
})()
;
//# sourceMappingURL=components.js.map