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
stuttaford.radiant.components.data_source_dropdown = (function data_source_dropdown(c,data_sources,current_data_source){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om_bootstrap.button.dropdown,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),stuttaford.radiant.model.data_source_label(data_sources,current_data_source)], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var iter__20662__auto__ = (function iter__39395(s__39396){return (new cljs.core.LazySeq(null,(function (){var s__39396__$1 = s__39396;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39396__$1);if(temp__4126__auto__)
{var s__39396__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39396__$2))
{var c__20660__auto__ = cljs.core.chunk_first(s__39396__$2);var size__20661__auto__ = cljs.core.count(c__20660__auto__);var b__39398 = cljs.core.chunk_buffer(size__20661__auto__);if((function (){var i__39397 = (0);while(true){
if((i__39397 < size__20661__auto__))
{var map__39403 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20660__auto__,i__39397);var map__39403__$1 = ((cljs.core.seq_QMARK_(map__39403))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39403):map__39403);var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39403__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39403__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append(b__39398,stuttaford.radiant.components.data_source_item(c,id,label));
{
var G__39405 = (i__39397 + (1));
i__39397 = G__39405;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39398),iter__39395(cljs.core.chunk_rest(s__39396__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39398),null);
}
} else
{var map__39404 = cljs.core.first(s__39396__$2);var map__39404__$1 = ((cljs.core.seq_QMARK_(map__39404))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39404):map__39404);var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39404__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39404__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons(stuttaford.radiant.components.data_source_item(c,id,label),iter__39395(cljs.core.rest(s__39396__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20662__auto__(cljs.core.vals(data_sources));
})()));
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.components.schema = (function() { 
var schema__$1__delegate = function (data__24175__auto__,owner39406,p__39408){var vec__39474 = p__39408;var opts__24176__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39474,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema39478 = schema.core.Any;var input_schema39479 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-db","current-db",213667882)),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map39475","map39475",1385089046,null))], null);var input_checker39480 = schema.core.checker(input_schema39479);var output_checker39481 = schema.core.checker(output_schema39478);return schema.core.schematize_fn(((function (ufv__,output_schema39478,input_schema39479,input_checker39480,output_checker39481,vec__39474,opts__24176__auto__){
return (function fnk39477(G__39482){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39539 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39482], null);var temp__4126__auto___39540 = (function (){var G__39511 = args__838__auto___39539;return (input_checker39480.cljs$core$IFn$_invoke$arity$1 ? input_checker39480.cljs$core$IFn$_invoke$arity$1(G__39511) : input_checker39480.call(null,G__39511));
})();if(cljs.core.truth_(temp__4126__auto___39540))
{var error__839__auto___39541 = temp__4126__auto___39540;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39477","fnk39477",-1128419063,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39541], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39479,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39539,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39541], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map39475 = G__39482;while(true){
if(cljs.core.map_QMARK_(map39475))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map39475], 0))));
}
var map39476 = plumbing.fnk.schema.safe_get(map39475,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var current_db = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map39476,new cljs.core.Keyword(null,"current-db","current-db",213667882),null);var owner = plumbing.fnk.schema.safe_get(map39475,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.components.t39512 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.components.t39512 = (function (map39476,owner,p__39408,input_checker39480,schema,fnk39477,output_checker39481,current_db,input_schema39479,output_schema39478,data__24175__auto__,map39475,G__39482,vec__39474,opts__24176__auto__,owner39406,validate__837__auto__,ufv__,meta39513){
this.map39476 = map39476;
this.owner = owner;
this.p__39408 = p__39408;
this.input_checker39480 = input_checker39480;
this.schema = schema;
this.fnk39477 = fnk39477;
this.output_checker39481 = output_checker39481;
this.current_db = current_db;
this.input_schema39479 = input_schema39479;
this.output_schema39478 = output_schema39478;
this.data__24175__auto__ = data__24175__auto__;
this.map39475 = map39475;
this.G__39482 = G__39482;
this.vec__39474 = vec__39474;
this.opts__24176__auto__ = opts__24176__auto__;
this.owner39406 = owner39406;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.meta39513 = meta39513;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.components.t39512.cljs$lang$type = true;
stuttaford.radiant.components.t39512.cljs$lang$ctorStr = "stuttaford.radiant.components/t39512";
stuttaford.radiant.components.t39512.cljs$lang$ctorPrWriter = ((function (owner,current_db,map39476,validate__837__auto__,ufv__,output_schema39478,input_schema39479,input_checker39480,output_checker39481,vec__39474,opts__24176__auto__){
return (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"stuttaford.radiant.components/t39512");
});})(owner,current_db,map39476,validate__837__auto__,ufv__,output_schema39478,input_schema39479,input_checker39480,output_checker39481,vec__39474,opts__24176__auto__))
;
stuttaford.radiant.components.t39512.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.components.t39512.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,current_db,map39476,validate__837__auto__,ufv__,output_schema39478,input_schema39479,input_checker39480,output_checker39481,vec__39474,opts__24176__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "schema";
});})(owner,current_db,map39476,validate__837__auto__,ufv__,output_schema39478,input_schema39479,input_checker39480,output_checker39481,vec__39474,opts__24176__auto__))
;
stuttaford.radiant.components.t39512.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.components.t39512.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,current_db,map39476,validate__837__auto__,ufv__,output_schema39478,input_schema39479,input_checker39480,output_checker39481,vec__39474,opts__24176__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),"Schema"], null),cljs.core.array_seq([(cljs.core.truth_(self__.current_db)?cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20662__auto__ = ((function (___$1,owner,current_db,map39476,validate__837__auto__,ufv__,output_schema39478,input_schema39479,input_checker39480,output_checker39481,vec__39474,opts__24176__auto__){
return (function iter__39516(s__39517){return (new cljs.core.LazySeq(null,((function (___$1,owner,current_db,map39476,validate__837__auto__,ufv__,output_schema39478,input_schema39479,input_checker39480,output_checker39481,vec__39474,opts__24176__auto__){
return (function (){var s__39517__$1 = s__39517;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39517__$1);if(temp__4126__auto__)
{var s__39517__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39517__$2))
{var c__20660__auto__ = cljs.core.chunk_first(s__39517__$2);var size__20661__auto__ = cljs.core.count(c__20660__auto__);var b__39519 = cljs.core.chunk_buffer(size__20661__auto__);if((function (){var i__39518 = (0);while(true){
if((i__39518 < size__20661__auto__))
{var schema__$3 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20660__auto__,i__39518);cljs.core.chunk_append(b__39519,(function (){var G__39530 = {"className": "schema"};var G__39531 = (function (){var attrs39515 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(schema__$3)], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs39515))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ident"], null)], null),attrs39515], 0))):{"className": "ident"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39515))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39515)], null))));
})();var G__39532 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["REF"], 0)):null));var G__39533 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["MANY"], 0)):null));return React.DOM.span(G__39530,G__39531,G__39532,G__39533);
})());
{
var G__39542 = (i__39518 + (1));
i__39518 = G__39542;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39519),iter__39516(cljs.core.chunk_rest(s__39517__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39519),null);
}
} else
{var schema__$3 = cljs.core.first(s__39517__$2);return cljs.core.cons((function (){var G__39534 = {"className": "schema"};var G__39535 = (function (){var attrs39515 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(schema__$3)], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs39515))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ident"], null)], null),attrs39515], 0))):{"className": "ident"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39515))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39515)], null))));
})();var G__39536 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["REF"], 0)):null));var G__39537 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["MANY"], 0)):null));return React.DOM.span(G__39534,G__39535,G__39536,G__39537);
})(),iter__39516(cljs.core.rest(s__39517__$2)));
}
} else
{return null;
}
break;
}
});})(___$1,owner,current_db,map39476,validate__837__auto__,ufv__,output_schema39478,input_schema39479,input_checker39480,output_checker39481,vec__39474,opts__24176__auto__))
,null,null));
});})(___$1,owner,current_db,map39476,validate__837__auto__,ufv__,output_schema39478,input_schema39479,input_checker39480,output_checker39481,vec__39474,opts__24176__auto__))
;return iter__20662__auto__(stuttaford.radiant.model.schema_for_db(self__.current_db));
})()):"No database.")], 0));
});})(owner,current_db,map39476,validate__837__auto__,ufv__,output_schema39478,input_schema39479,input_checker39480,output_checker39481,vec__39474,opts__24176__auto__))
;
stuttaford.radiant.components.t39512.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,current_db,map39476,validate__837__auto__,ufv__,output_schema39478,input_schema39479,input_checker39480,output_checker39481,vec__39474,opts__24176__auto__){
return (function (_39514){var self__ = this;
var _39514__$1 = this;return self__.meta39513;
});})(owner,current_db,map39476,validate__837__auto__,ufv__,output_schema39478,input_schema39479,input_checker39480,output_checker39481,vec__39474,opts__24176__auto__))
;
stuttaford.radiant.components.t39512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,current_db,map39476,validate__837__auto__,ufv__,output_schema39478,input_schema39479,input_checker39480,output_checker39481,vec__39474,opts__24176__auto__){
return (function (_39514,meta39513__$1){var self__ = this;
var _39514__$1 = this;return (new stuttaford.radiant.components.t39512(self__.map39476,self__.owner,self__.p__39408,self__.input_checker39480,self__.schema,self__.fnk39477,self__.output_checker39481,self__.current_db,self__.input_schema39479,self__.output_schema39478,self__.data__24175__auto__,self__.map39475,self__.G__39482,self__.vec__39474,self__.opts__24176__auto__,self__.owner39406,self__.validate__837__auto__,self__.ufv__,meta39513__$1));
});})(owner,current_db,map39476,validate__837__auto__,ufv__,output_schema39478,input_schema39479,input_checker39480,output_checker39481,vec__39474,opts__24176__auto__))
;
stuttaford.radiant.components.__GT_t39512 = ((function (owner,current_db,map39476,validate__837__auto__,ufv__,output_schema39478,input_schema39479,input_checker39480,output_checker39481,vec__39474,opts__24176__auto__){
return (function __GT_t39512(map39476__$1,owner__$1,p__39408__$1,input_checker39480__$1,schema__$2,fnk39477__$1,output_checker39481__$1,current_db__$1,input_schema39479__$1,output_schema39478__$1,data__24175__auto____$1,map39475__$1,G__39482__$1,vec__39474__$1,opts__24176__auto____$1,owner39406__$1,validate__837__auto____$1,ufv____$1,meta39513){return (new stuttaford.radiant.components.t39512(map39476__$1,owner__$1,p__39408__$1,input_checker39480__$1,schema__$2,fnk39477__$1,output_checker39481__$1,current_db__$1,input_schema39479__$1,output_schema39478__$1,data__24175__auto____$1,map39475__$1,G__39482__$1,vec__39474__$1,opts__24176__auto____$1,owner39406__$1,validate__837__auto____$1,ufv____$1,meta39513));
});})(owner,current_db,map39476,validate__837__auto__,ufv__,output_schema39478,input_schema39479,input_checker39480,output_checker39481,vec__39474,opts__24176__auto__))
;
}
return (new stuttaford.radiant.components.t39512(map39476,owner,p__39408,input_checker39480,schema__$1,fnk39477,output_checker39481,current_db,input_schema39479,output_schema39478,data__24175__auto__,map39475,G__39482,vec__39474,opts__24176__auto__,owner39406,validate__837__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39543 = (function (){var G__39538 = o__840__auto__;return (output_checker39481.cljs$core$IFn$_invoke$arity$1 ? output_checker39481.cljs$core$IFn$_invoke$arity$1(G__39538) : output_checker39481.call(null,G__39538));
})();if(cljs.core.truth_(temp__4126__auto___39543))
{var error__839__auto___39544 = temp__4126__auto___39543;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39477","fnk39477",-1128419063,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39544], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39478,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39544], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema39478,input_schema39479,input_checker39480,output_checker39481,vec__39474,opts__24176__auto__))
,schema.core.make_fn_schema(output_schema39478,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39479], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24176__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner39406,new cljs.core.Keyword(null,"data","data",-232669377),data__24175__auto__], null));
};
var schema__$1 = function (data__24175__auto__,owner39406,var_args){
var p__39408 = null;if (arguments.length > 2) {
  p__39408 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return schema__$1__delegate.call(this,data__24175__auto__,owner39406,p__39408);};
schema__$1.cljs$lang$maxFixedArity = 2;
schema__$1.cljs$lang$applyTo = (function (arglist__39545){
var data__24175__auto__ = cljs.core.first(arglist__39545);
arglist__39545 = cljs.core.next(arglist__39545);
var owner39406 = cljs.core.first(arglist__39545);
var p__39408 = cljs.core.rest(arglist__39545);
return schema__$1__delegate(data__24175__auto__,owner39406,p__39408);
});
schema__$1.cljs$core$IFn$_invoke$arity$variadic = schema__$1__delegate;
return schema__$1;
})()
;
stuttaford.radiant.components.__GT_schema = (function() {
var __GT_schema = null;
var __GT_schema__1 = (function (cursor__24144__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.schema,cursor__24144__auto__);
});
var __GT_schema__2 = (function (cursor__24144__auto__,m39407){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.components.schema,cursor__24144__auto__,m39407);
});
__GT_schema = function(cursor__24144__auto__,m39407){
switch(arguments.length){
case 1:
return __GT_schema__1.call(this,cursor__24144__auto__);
case 2:
return __GT_schema__2.call(this,cursor__24144__auto__,m39407);
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
var top_nav__delegate = function (data__24175__auto__,owner39546,p__39548){var vec__39615 = p__39548;var opts__24176__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39615,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema39620 = schema.core.Any;var input_schema39621 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684)),schema.core.Any,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map39616","map39616",1381455614,null))], null);var input_checker39622 = schema.core.checker(input_schema39621);var output_checker39623 = schema.core.checker(output_schema39620);return schema.core.schematize_fn(((function (ufv__,output_schema39620,input_schema39621,input_checker39622,output_checker39623,vec__39615,opts__24176__auto__){
return (function fnk39619(G__39624){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39681 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39624], null);var temp__4126__auto___39682 = (function (){var G__39653 = args__838__auto___39681;return (input_checker39622.cljs$core$IFn$_invoke$arity$1 ? input_checker39622.cljs$core$IFn$_invoke$arity$1(G__39653) : input_checker39622.call(null,G__39653));
})();if(cljs.core.truth_(temp__4126__auto___39682))
{var error__839__auto___39683 = temp__4126__auto___39682;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39619","fnk39619",76748549,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39683], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39621,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39681,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39683], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map39616 = G__39624;while(true){
if(cljs.core.map_QMARK_(map39616))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map39616], 0))));
}
var map39618 = plumbing.fnk.schema.safe_get(map39616,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(map39618,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var data_sources = plumbing.fnk.schema.safe_get(map39618,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map39618,new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684),null);var schema_visible_QMARK_ = plumbing.fnk.schema.safe_get(map39618,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map39616,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map39617 = plumbing.fnk.schema.safe_get(map39616,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var nav_items = plumbing.fnk.schema.safe_get(map39617,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));if(typeof stuttaford.radiant.components.t39654 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.components.t39654 = (function (map39618,current_data_source,vec__39615,owner,view,fnk39619,map39617,schema_visible_QMARK_,nav_items,output_schema39620,input_checker39622,data_sources,input_schema39621,top_nav,data__24175__auto__,p__39548,opts__24176__auto__,output_checker39623,validate__837__auto__,ufv__,G__39624,map39616,owner39546,meta39655){
this.map39618 = map39618;
this.current_data_source = current_data_source;
this.vec__39615 = vec__39615;
this.owner = owner;
this.view = view;
this.fnk39619 = fnk39619;
this.map39617 = map39617;
this.schema_visible_QMARK_ = schema_visible_QMARK_;
this.nav_items = nav_items;
this.output_schema39620 = output_schema39620;
this.input_checker39622 = input_checker39622;
this.data_sources = data_sources;
this.input_schema39621 = input_schema39621;
this.top_nav = top_nav;
this.data__24175__auto__ = data__24175__auto__;
this.p__39548 = p__39548;
this.opts__24176__auto__ = opts__24176__auto__;
this.output_checker39623 = output_checker39623;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.G__39624 = G__39624;
this.map39616 = map39616;
this.owner39546 = owner39546;
this.meta39655 = meta39655;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.components.t39654.cljs$lang$type = true;
stuttaford.radiant.components.t39654.cljs$lang$ctorStr = "stuttaford.radiant.components/t39654";
stuttaford.radiant.components.t39654.cljs$lang$ctorPrWriter = ((function (nav_items,map39617,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39618,validate__837__auto__,ufv__,output_schema39620,input_schema39621,input_checker39622,output_checker39623,vec__39615,opts__24176__auto__){
return (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"stuttaford.radiant.components/t39654");
});})(nav_items,map39617,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39618,validate__837__auto__,ufv__,output_schema39620,input_schema39621,input_checker39622,output_checker39623,vec__39615,opts__24176__auto__))
;
stuttaford.radiant.components.t39654.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.components.t39654.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (nav_items,map39617,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39618,validate__837__auto__,ufv__,output_schema39620,input_schema39621,input_checker39622,output_checker39623,vec__39615,opts__24176__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "top-nav";
});})(nav_items,map39617,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39618,validate__837__auto__,ufv__,output_schema39620,input_schema39621,input_checker39622,output_checker39623,vec__39615,opts__24176__auto__))
;
stuttaford.radiant.components.t39654.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.components.t39654.prototype.om$core$IRenderState$render_state$arity$2 = ((function (nav_items,map39617,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39618,validate__837__auto__,ufv__,output_schema39620,input_schema39621,input_checker39622,output_checker39623,vec__39615,opts__24176__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var G__39659 = {"className": "radiant"};var G__39660 = "RADIANT";return React.DOM.div(G__39659,G__39660);
})(),om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20662__auto__ = ((function (c,___$1,nav_items,map39617,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39618,validate__837__auto__,ufv__,output_schema39620,input_schema39621,input_checker39622,output_checker39623,vec__39615,opts__24176__auto__){
return (function iter__39661(s__39662){return (new cljs.core.LazySeq(null,((function (c,___$1,nav_items,map39617,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39618,validate__837__auto__,ufv__,output_schema39620,input_schema39621,input_checker39622,output_checker39623,vec__39615,opts__24176__auto__){
return (function (){var s__39662__$1 = s__39662;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39662__$1);if(temp__4126__auto__)
{var s__39662__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39662__$2))
{var c__20660__auto__ = cljs.core.chunk_first(s__39662__$2);var size__20661__auto__ = cljs.core.count(c__20660__auto__);var b__39664 = cljs.core.chunk_buffer(size__20661__auto__);if((function (){var i__39663 = (0);while(true){
if((i__39663 < size__20661__auto__))
{var vec__39673 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20660__auto__,i__39663);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39673,(0),null);var vec__39674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39673,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39674,(0),null);cljs.core.chunk_append(b__39664,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__39675 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__39663,vec__39673,id,vec__39674,label,c__20660__auto__,size__20661__auto__,b__39664,s__39662__$2,temp__4126__auto__,c,___$1,nav_items,map39617,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39618,validate__837__auto__,ufv__,output_schema39620,input_schema39621,input_checker39622,output_checker39623,vec__39615,opts__24176__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__39663,vec__39673,id,vec__39674,label,c__20660__auto__,size__20661__auto__,b__39664,s__39662__$2,temp__4126__auto__,c,___$1,nav_items,map39617,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39618,validate__837__auto__,ufv__,output_schema39620,input_schema39621,input_checker39622,output_checker39623,vec__39615,opts__24176__auto__))
], null);var G__39675__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39675,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__39675);return G__39675__$1;
})(),cljs.core.array_seq([label], 0)));
{
var G__39684 = (i__39663 + (1));
i__39663 = G__39684;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39664),iter__39661(cljs.core.chunk_rest(s__39662__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39664),null);
}
} else
{var vec__39676 = cljs.core.first(s__39662__$2);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39676,(0),null);var vec__39677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39676,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39677,(0),null);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__39678 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__39676,id,vec__39677,label,s__39662__$2,temp__4126__auto__,c,___$1,nav_items,map39617,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39618,validate__837__auto__,ufv__,output_schema39620,input_schema39621,input_checker39622,output_checker39623,vec__39615,opts__24176__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(vec__39676,id,vec__39677,label,s__39662__$2,temp__4126__auto__,c,___$1,nav_items,map39617,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39618,validate__837__auto__,ufv__,output_schema39620,input_schema39621,input_checker39622,output_checker39623,vec__39615,opts__24176__auto__))
], null);var G__39678__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39678,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__39678);return G__39678__$1;
})(),cljs.core.array_seq([label], 0)),iter__39661(cljs.core.rest(s__39662__$2)));
}
} else
{return null;
}
break;
}
});})(c,___$1,nav_items,map39617,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39618,validate__837__auto__,ufv__,output_schema39620,input_schema39621,input_checker39622,output_checker39623,vec__39615,opts__24176__auto__))
,null,null));
});})(c,___$1,nav_items,map39617,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39618,validate__837__auto__,ufv__,output_schema39620,input_schema39621,input_checker39622,output_checker39623,vec__39615,opts__24176__auto__))
;return iter__20662__auto__(self__.nav_items);
})()], 0)),stuttaford.radiant.components.data_source_dropdown(c,self__.data_sources,self__.current_data_source),om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__39679 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (c,___$1,nav_items,map39617,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39618,validate__837__auto__,ufv__,output_schema39620,input_schema39621,input_checker39622,output_checker39623,vec__39615,opts__24176__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-schema-visible","set-schema-visible",-1408939033),cljs.core.not(self__.schema_visible_QMARK_)], null));
});})(c,___$1,nav_items,map39617,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39618,validate__837__auto__,ufv__,output_schema39620,input_schema39621,input_checker39622,output_checker39623,vec__39615,opts__24176__auto__))
], null);var G__39679__$1 = (cljs.core.truth_(self__.schema_visible_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39679,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__39679);return G__39679__$1;
})(),cljs.core.array_seq(["Show schema"], 0))], 0));
});})(nav_items,map39617,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39618,validate__837__auto__,ufv__,output_schema39620,input_schema39621,input_checker39622,output_checker39623,vec__39615,opts__24176__auto__))
;
stuttaford.radiant.components.t39654.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (nav_items,map39617,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39618,validate__837__auto__,ufv__,output_schema39620,input_schema39621,input_checker39622,output_checker39623,vec__39615,opts__24176__auto__){
return (function (_39656){var self__ = this;
var _39656__$1 = this;return self__.meta39655;
});})(nav_items,map39617,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39618,validate__837__auto__,ufv__,output_schema39620,input_schema39621,input_checker39622,output_checker39623,vec__39615,opts__24176__auto__))
;
stuttaford.radiant.components.t39654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (nav_items,map39617,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39618,validate__837__auto__,ufv__,output_schema39620,input_schema39621,input_checker39622,output_checker39623,vec__39615,opts__24176__auto__){
return (function (_39656,meta39655__$1){var self__ = this;
var _39656__$1 = this;return (new stuttaford.radiant.components.t39654(self__.map39618,self__.current_data_source,self__.vec__39615,self__.owner,self__.view,self__.fnk39619,self__.map39617,self__.schema_visible_QMARK_,self__.nav_items,self__.output_schema39620,self__.input_checker39622,self__.data_sources,self__.input_schema39621,self__.top_nav,self__.data__24175__auto__,self__.p__39548,self__.opts__24176__auto__,self__.output_checker39623,self__.validate__837__auto__,self__.ufv__,self__.G__39624,self__.map39616,self__.owner39546,meta39655__$1));
});})(nav_items,map39617,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39618,validate__837__auto__,ufv__,output_schema39620,input_schema39621,input_checker39622,output_checker39623,vec__39615,opts__24176__auto__))
;
stuttaford.radiant.components.__GT_t39654 = ((function (nav_items,map39617,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39618,validate__837__auto__,ufv__,output_schema39620,input_schema39621,input_checker39622,output_checker39623,vec__39615,opts__24176__auto__){
return (function __GT_t39654(map39618__$1,current_data_source__$1,vec__39615__$1,owner__$1,view__$1,fnk39619__$1,map39617__$1,schema_visible_QMARK___$1,nav_items__$1,output_schema39620__$1,input_checker39622__$1,data_sources__$1,input_schema39621__$1,top_nav__$1,data__24175__auto____$1,p__39548__$1,opts__24176__auto____$1,output_checker39623__$1,validate__837__auto____$1,ufv____$1,G__39624__$1,map39616__$1,owner39546__$1,meta39655){return (new stuttaford.radiant.components.t39654(map39618__$1,current_data_source__$1,vec__39615__$1,owner__$1,view__$1,fnk39619__$1,map39617__$1,schema_visible_QMARK___$1,nav_items__$1,output_schema39620__$1,input_checker39622__$1,data_sources__$1,input_schema39621__$1,top_nav__$1,data__24175__auto____$1,p__39548__$1,opts__24176__auto____$1,output_checker39623__$1,validate__837__auto____$1,ufv____$1,G__39624__$1,map39616__$1,owner39546__$1,meta39655));
});})(nav_items,map39617,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map39618,validate__837__auto__,ufv__,output_schema39620,input_schema39621,input_checker39622,output_checker39623,vec__39615,opts__24176__auto__))
;
}
return (new stuttaford.radiant.components.t39654(map39618,current_data_source,vec__39615,owner,view,fnk39619,map39617,schema_visible_QMARK_,nav_items,output_schema39620,input_checker39622,data_sources,input_schema39621,top_nav,data__24175__auto__,p__39548,opts__24176__auto__,output_checker39623,validate__837__auto__,ufv__,G__39624,map39616,owner39546,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39685 = (function (){var G__39680 = o__840__auto__;return (output_checker39623.cljs$core$IFn$_invoke$arity$1 ? output_checker39623.cljs$core$IFn$_invoke$arity$1(G__39680) : output_checker39623.call(null,G__39680));
})();if(cljs.core.truth_(temp__4126__auto___39685))
{var error__839__auto___39686 = temp__4126__auto___39685;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39619","fnk39619",76748549,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39686], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39620,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39686], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema39620,input_schema39621,input_checker39622,output_checker39623,vec__39615,opts__24176__auto__))
,schema.core.make_fn_schema(output_schema39620,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39621], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24176__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner39546,new cljs.core.Keyword(null,"data","data",-232669377),data__24175__auto__], null));
};
var top_nav = function (data__24175__auto__,owner39546,var_args){
var p__39548 = null;if (arguments.length > 2) {
  p__39548 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return top_nav__delegate.call(this,data__24175__auto__,owner39546,p__39548);};
top_nav.cljs$lang$maxFixedArity = 2;
top_nav.cljs$lang$applyTo = (function (arglist__39687){
var data__24175__auto__ = cljs.core.first(arglist__39687);
arglist__39687 = cljs.core.next(arglist__39687);
var owner39546 = cljs.core.first(arglist__39687);
var p__39548 = cljs.core.rest(arglist__39687);
return top_nav__delegate(data__24175__auto__,owner39546,p__39548);
});
top_nav.cljs$core$IFn$_invoke$arity$variadic = top_nav__delegate;
return top_nav;
})()
;
stuttaford.radiant.components.__GT_top_nav = (function() {
var __GT_top_nav = null;
var __GT_top_nav__1 = (function (cursor__24144__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.top_nav,cursor__24144__auto__);
});
var __GT_top_nav__2 = (function (cursor__24144__auto__,m39547){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.components.top_nav,cursor__24144__auto__,m39547);
});
__GT_top_nav = function(cursor__24144__auto__,m39547){
switch(arguments.length){
case 1:
return __GT_top_nav__1.call(this,cursor__24144__auto__);
case 2:
return __GT_top_nav__2.call(this,cursor__24144__auto__,m39547);
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
stuttaford.radiant.components.paginate_label = (function paginate_label(current_page,rows){var start = (stuttaford.radiant.components.PAGE_SIZE * current_page);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((start + (1)))+" - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__19809__auto__ = (start + stuttaford.radiant.components.PAGE_SIZE);var y__19810__auto__ = cljs.core.count(rows);return ((x__19809__auto__ < y__19810__auto__) ? x__19809__auto__ : y__19810__auto__);
})()));
});
stuttaford.radiant.components.sort_rows = (function sort_rows(sort_col,rows){return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__39688_SHARP_){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__39688_SHARP_,sort_col);
}),rows);
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.components.result_table = (function() { 
var result_table__delegate = function (data__24175__auto__,owner39689,p__39691){var vec__39842 = p__39691;var opts__24176__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39842,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema39847 = schema.core.Any;var input_schema39848 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260)),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"rows","rows",850049680),schema.core.Any,new cljs.core.Keyword(null,"cols","cols",-1914801295),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map39843","map39843",-194804465,null))], null);var input_checker39849 = schema.core.checker(input_schema39848);var output_checker39850 = schema.core.checker(output_schema39847);return schema.core.schematize_fn(((function (ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__){
return (function fnk39846(G__39851){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39992 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39851], null);var temp__4126__auto___39993 = (function (){var G__39922 = args__838__auto___39992;return (input_checker39849.cljs$core$IFn$_invoke$arity$1 ? input_checker39849.cljs$core$IFn$_invoke$arity$1(G__39922) : input_checker39849.call(null,G__39922));
})();if(cljs.core.truth_(temp__4126__auto___39993))
{var error__839__auto___39994 = temp__4126__auto___39993;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39846","fnk39846",-1537604886,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39994], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39848,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39992,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39994], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map39843 = G__39851;while(true){
if(cljs.core.map_QMARK_(map39843))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map39843], 0))));
}
var map39845 = plumbing.fnk.schema.safe_get(map39843,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var cols = plumbing.fnk.schema.safe_get(map39845,new cljs.core.Keyword(null,"cols","cols",-1914801295),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var rows = plumbing.fnk.schema.safe_get(map39845,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map39843,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map39844 = plumbing.fnk.schema.safe_get(map39843,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var allow_sorting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map39844,new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),false);if(typeof stuttaford.radiant.components.t39923 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.components.t39923 = (function (G__39851,output_checker39850,owner,input_checker39849,map39844,output_schema39847,fnk39846,result_table,map39845,allow_sorting_QMARK_,p__39691,map39843,data__24175__auto__,vec__39842,input_schema39848,owner39689,rows,cols,opts__24176__auto__,validate__837__auto__,ufv__,meta39924){
this.G__39851 = G__39851;
this.output_checker39850 = output_checker39850;
this.owner = owner;
this.input_checker39849 = input_checker39849;
this.map39844 = map39844;
this.output_schema39847 = output_schema39847;
this.fnk39846 = fnk39846;
this.result_table = result_table;
this.map39845 = map39845;
this.allow_sorting_QMARK_ = allow_sorting_QMARK_;
this.p__39691 = p__39691;
this.map39843 = map39843;
this.data__24175__auto__ = data__24175__auto__;
this.vec__39842 = vec__39842;
this.input_schema39848 = input_schema39848;
this.owner39689 = owner39689;
this.rows = rows;
this.cols = cols;
this.opts__24176__auto__ = opts__24176__auto__;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.meta39924 = meta39924;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.components.t39923.cljs$lang$type = true;
stuttaford.radiant.components.t39923.cljs$lang$ctorStr = "stuttaford.radiant.components/t39923";
stuttaford.radiant.components.t39923.cljs$lang$ctorPrWriter = ((function (allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__){
return (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"stuttaford.radiant.components/t39923");
});})(allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__))
;
stuttaford.radiant.components.t39923.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.components.t39923.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "result-table";
});})(allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__))
;
stuttaford.radiant.components.t39923.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.components.t39923.prototype.om$core$IRenderState$render_state$arity$2 = ((function (allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__){
return (function (_,p__39926){var self__ = this;
var map__39927 = p__39926;var map__39927__$1 = ((cljs.core.seq_QMARK_(map__39927))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39927):map__39927);var current_page = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39927__$1,new cljs.core.Keyword(null,"current-page","current-page",-101294180),(0));var sort_col = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39927__$1,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882),(0));var ___$1 = this;var page_count = cljs.core.count(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.PAGE_SIZE,self__.rows));var paginate_QMARK_ = (page_count > (1));var G__39929 = null;var G__39930 = (function (){var G__39932 = {"className": "result-pagination"};var G__39933 = (function (){var attrs39928 = cljs.core.count(self__.rows);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs39928))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-count"], null)], null),attrs39928], 0))):{"className": "item-count"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39928))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" items",sablono.interpreter.interpret(((paginate_QMARK_)?(" \u00B7 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(stuttaford.radiant.components.paginate_label(current_page,self__.rows))):null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39928)," items",sablono.interpreter.interpret(((paginate_QMARK_)?(" \u00B7 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(stuttaford.radiant.components.paginate_label(current_page,self__.rows))):null))], null))));
})();var G__39934 = sablono.interpreter.interpret(((paginate_QMARK_)?om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20662__auto__ = ((function (G__39932,G__39933,G__39929,page_count,paginate_QMARK_,___$1,map__39927,map__39927__$1,current_page,sort_col,allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__){
return (function iter__39935(s__39936){return (new cljs.core.LazySeq(null,((function (G__39932,G__39933,G__39929,page_count,paginate_QMARK_,___$1,map__39927,map__39927__$1,current_page,sort_col,allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__){
return (function (){var s__39936__$1 = s__39936;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39936__$1);if(temp__4126__auto__)
{var s__39936__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39936__$2))
{var c__20660__auto__ = cljs.core.chunk_first(s__39936__$2);var size__20661__auto__ = cljs.core.count(c__20660__auto__);var b__39938 = cljs.core.chunk_buffer(size__20661__auto__);if((function (){var i__39937 = (0);while(true){
if((i__39937 < size__20661__auto__))
{var page = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20660__auto__,i__39937);cljs.core.chunk_append(b__39938,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__39943 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__39937,page,c__20660__auto__,size__20661__auto__,b__39938,s__39936__$2,temp__4126__auto__,G__39932,G__39933,G__39929,page_count,paginate_QMARK_,___$1,map__39927,map__39927__$1,current_page,sort_col,allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page);
});})(i__39937,page,c__20660__auto__,size__20661__auto__,b__39938,s__39936__$2,temp__4126__auto__,G__39932,G__39933,G__39929,page_count,paginate_QMARK_,___$1,map__39927,map__39927__$1,current_page,sort_col,allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__))
], null);var G__39943__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39943,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__39943);return G__39943__$1;
})(),cljs.core.array_seq([(page + (1))], 0)));
{
var G__39995 = (i__39937 + (1));
i__39937 = G__39995;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39938),iter__39935(cljs.core.chunk_rest(s__39936__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39938),null);
}
} else
{var page = cljs.core.first(s__39936__$2);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__39944 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (page,s__39936__$2,temp__4126__auto__,G__39932,G__39933,G__39929,page_count,paginate_QMARK_,___$1,map__39927,map__39927__$1,current_page,sort_col,allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page);
});})(page,s__39936__$2,temp__4126__auto__,G__39932,G__39933,G__39929,page_count,paginate_QMARK_,___$1,map__39927,map__39927__$1,current_page,sort_col,allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__))
], null);var G__39944__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39944,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__39944);return G__39944__$1;
})(),cljs.core.array_seq([(page + (1))], 0)),iter__39935(cljs.core.rest(s__39936__$2)));
}
} else
{return null;
}
break;
}
});})(G__39932,G__39933,G__39929,page_count,paginate_QMARK_,___$1,map__39927,map__39927__$1,current_page,sort_col,allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__))
,null,null));
});})(G__39932,G__39933,G__39929,page_count,paginate_QMARK_,___$1,map__39927,map__39927__$1,current_page,sort_col,allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__))
;return iter__20662__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(page_count));
})()], 0)):null));return React.DOM.div(G__39932,G__39933,G__39934);
})();var G__39931 = sablono.interpreter.interpret(om_bootstrap.table.table.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"striped?","striped?",-797214979),true,new cljs.core.Keyword(null,"bordered?","bordered?",562358476),true,new cljs.core.Keyword(null,"condensed?","condensed?",-109797520),true,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),true], null),cljs.core.array_seq([cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39949 = null;var G__39950 = (function (){var attrs39947 = cljs.core.map_indexed(((function (G__39949,G__39929,G__39930,page_count,paginate_QMARK_,___$1,map__39927,map__39927__$1,current_page,sort_col,allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__){
return (function (i,v){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),(cljs.core.truth_(self__.allow_sorting_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__39949,G__39929,G__39930,page_count,paginate_QMARK_,___$1,map__39927,map__39927__$1,current_page,sort_col,allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882),i);
});})(G__39949,G__39929,G__39930,page_count,paginate_QMARK_,___$1,map__39927,map__39927__$1,current_page,sort_col,allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__))
], null):null),v,(cljs.core.truth_((function (){var and__19255__auto__ = self__.allow_sorting_QMARK_;if(cljs.core.truth_(and__19255__auto__))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,sort_col);
} else
{return and__19255__auto__;
}
})())?cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-chevron-down","span.glyphicon.glyphicon-chevron-down",-62425995)], null))," "):null)], null);
});})(G__39949,G__39929,G__39930,page_count,paginate_QMARK_,___$1,map__39927,map__39927__$1,current_page,sort_col,allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__))
,self__.cols);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tr,((cljs.core.map_QMARK_(attrs39947))?sablono.interpreter.attributes(attrs39947):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39947))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39947)], null))));
})();return React.DOM.thead(G__39949,G__39950);
})(),(function (){var G__39951 = null;var G__39952 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20662__auto__ = ((function (G__39951,G__39929,G__39930,page_count,paginate_QMARK_,___$1,map__39927,map__39927__$1,current_page,sort_col,allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__){
return (function iter__39953(s__39954){return (new cljs.core.LazySeq(null,((function (G__39951,G__39929,G__39930,page_count,paginate_QMARK_,___$1,map__39927,map__39927__$1,current_page,sort_col,allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__){
return (function (){var s__39954__$1 = s__39954;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39954__$1);if(temp__4126__auto__)
{var s__39954__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39954__$2))
{var c__20660__auto__ = cljs.core.chunk_first(s__39954__$2);var size__20661__auto__ = cljs.core.count(c__20660__auto__);var b__39956 = cljs.core.chunk_buffer(size__20661__auto__);if((function (){var i__39955 = (0);while(true){
if((i__39955 < size__20661__auto__))
{var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20660__auto__,i__39955);cljs.core.chunk_append(b__39956,(function (){var G__39975 = null;var G__39976 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20662__auto__ = ((function (i__39955,G__39975,row,c__20660__auto__,size__20661__auto__,b__39956,s__39954__$2,temp__4126__auto__,G__39951,G__39929,G__39930,page_count,paginate_QMARK_,___$1,map__39927,map__39927__$1,current_page,sort_col,allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__){
return (function iter__39977(s__39978){return (new cljs.core.LazySeq(null,((function (i__39955,G__39975,row,c__20660__auto__,size__20661__auto__,b__39956,s__39954__$2,temp__4126__auto__,G__39951,G__39929,G__39930,page_count,paginate_QMARK_,___$1,map__39927,map__39927__$1,current_page,sort_col,allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__){
return (function (){var s__39978__$1 = s__39978;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__39978__$1);if(temp__4126__auto____$1)
{var s__39978__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__39978__$2))
{var c__20660__auto____$1 = cljs.core.chunk_first(s__39978__$2);var size__20661__auto____$1 = cljs.core.count(c__20660__auto____$1);var b__39980 = cljs.core.chunk_buffer(size__20661__auto____$1);if((function (){var i__39979 = (0);while(true){
if((i__39979 < size__20661__auto____$1))
{var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20660__auto____$1,i__39979);cljs.core.chunk_append(b__39980,(function (){var attrs39948 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs39948))?sablono.interpreter.attributes(attrs39948):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39948))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39948)], null))));
})());
{
var G__39996 = (i__39979 + (1));
i__39979 = G__39996;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39980),iter__39977(cljs.core.chunk_rest(s__39978__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39980),null);
}
} else
{var value = cljs.core.first(s__39978__$2);return cljs.core.cons((function (){var attrs39948 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs39948))?sablono.interpreter.attributes(attrs39948):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39948))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39948)], null))));
})(),iter__39977(cljs.core.rest(s__39978__$2)));
}
} else
{return null;
}
break;
}
});})(i__39955,G__39975,row,c__20660__auto__,size__20661__auto__,b__39956,s__39954__$2,temp__4126__auto__,G__39951,G__39929,G__39930,page_count,paginate_QMARK_,___$1,map__39927,map__39927__$1,current_page,sort_col,allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__))
,null,null));
});})(i__39955,G__39975,row,c__20660__auto__,size__20661__auto__,b__39956,s__39954__$2,temp__4126__auto__,G__39951,G__39929,G__39930,page_count,paginate_QMARK_,___$1,map__39927,map__39927__$1,current_page,sort_col,allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__))
;return iter__20662__auto__(row);
})());return React.DOM.tr(G__39975,G__39976);
})());
{
var G__39997 = (i__39955 + (1));
i__39955 = G__39997;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39956),iter__39953(cljs.core.chunk_rest(s__39954__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39956),null);
}
} else
{var row = cljs.core.first(s__39954__$2);return cljs.core.cons((function (){var G__39983 = null;var G__39984 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20662__auto__ = ((function (G__39983,row,s__39954__$2,temp__4126__auto__,G__39951,G__39929,G__39930,page_count,paginate_QMARK_,___$1,map__39927,map__39927__$1,current_page,sort_col,allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__){
return (function iter__39985(s__39986){return (new cljs.core.LazySeq(null,((function (G__39983,row,s__39954__$2,temp__4126__auto__,G__39951,G__39929,G__39930,page_count,paginate_QMARK_,___$1,map__39927,map__39927__$1,current_page,sort_col,allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__){
return (function (){var s__39986__$1 = s__39986;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__39986__$1);if(temp__4126__auto____$1)
{var s__39986__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__39986__$2))
{var c__20660__auto__ = cljs.core.chunk_first(s__39986__$2);var size__20661__auto__ = cljs.core.count(c__20660__auto__);var b__39988 = cljs.core.chunk_buffer(size__20661__auto__);if((function (){var i__39987 = (0);while(true){
if((i__39987 < size__20661__auto__))
{var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20660__auto__,i__39987);cljs.core.chunk_append(b__39988,(function (){var attrs39948 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs39948))?sablono.interpreter.attributes(attrs39948):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39948))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39948)], null))));
})());
{
var G__39998 = (i__39987 + (1));
i__39987 = G__39998;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39988),iter__39985(cljs.core.chunk_rest(s__39986__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39988),null);
}
} else
{var value = cljs.core.first(s__39986__$2);return cljs.core.cons((function (){var attrs39948 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs39948))?sablono.interpreter.attributes(attrs39948):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39948))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39948)], null))));
})(),iter__39985(cljs.core.rest(s__39986__$2)));
}
} else
{return null;
}
break;
}
});})(G__39983,row,s__39954__$2,temp__4126__auto__,G__39951,G__39929,G__39930,page_count,paginate_QMARK_,___$1,map__39927,map__39927__$1,current_page,sort_col,allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__))
,null,null));
});})(G__39983,row,s__39954__$2,temp__4126__auto__,G__39951,G__39929,G__39930,page_count,paginate_QMARK_,___$1,map__39927,map__39927__$1,current_page,sort_col,allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__))
;return iter__20662__auto__(row);
})());return React.DOM.tr(G__39983,G__39984);
})(),iter__39953(cljs.core.rest(s__39954__$2)));
}
} else
{return null;
}
break;
}
});})(G__39951,G__39929,G__39930,page_count,paginate_QMARK_,___$1,map__39927,map__39927__$1,current_page,sort_col,allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__))
,null,null));
});})(G__39951,G__39929,G__39930,page_count,paginate_QMARK_,___$1,map__39927,map__39927__$1,current_page,sort_col,allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__))
;return iter__20662__auto__(stuttaford.radiant.components.sort_rows(sort_col,stuttaford.radiant.components.paginate(current_page,self__.rows)));
})());return React.DOM.tbody(G__39951,G__39952);
})()], null))], 0)));return React.DOM.div(G__39929,G__39930,G__39931);
});})(allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__))
;
stuttaford.radiant.components.t39923.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__){
return (function (_39925){var self__ = this;
var _39925__$1 = this;return self__.meta39924;
});})(allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__))
;
stuttaford.radiant.components.t39923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__){
return (function (_39925,meta39924__$1){var self__ = this;
var _39925__$1 = this;return (new stuttaford.radiant.components.t39923(self__.G__39851,self__.output_checker39850,self__.owner,self__.input_checker39849,self__.map39844,self__.output_schema39847,self__.fnk39846,self__.result_table,self__.map39845,self__.allow_sorting_QMARK_,self__.p__39691,self__.map39843,self__.data__24175__auto__,self__.vec__39842,self__.input_schema39848,self__.owner39689,self__.rows,self__.cols,self__.opts__24176__auto__,self__.validate__837__auto__,self__.ufv__,meta39924__$1));
});})(allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__))
;
stuttaford.radiant.components.__GT_t39923 = ((function (allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__){
return (function __GT_t39923(G__39851__$1,output_checker39850__$1,owner__$1,input_checker39849__$1,map39844__$1,output_schema39847__$1,fnk39846__$1,result_table__$1,map39845__$1,allow_sorting_QMARK___$1,p__39691__$1,map39843__$1,data__24175__auto____$1,vec__39842__$1,input_schema39848__$1,owner39689__$1,rows__$1,cols__$1,opts__24176__auto____$1,validate__837__auto____$1,ufv____$1,meta39924){return (new stuttaford.radiant.components.t39923(G__39851__$1,output_checker39850__$1,owner__$1,input_checker39849__$1,map39844__$1,output_schema39847__$1,fnk39846__$1,result_table__$1,map39845__$1,allow_sorting_QMARK___$1,p__39691__$1,map39843__$1,data__24175__auto____$1,vec__39842__$1,input_schema39848__$1,owner39689__$1,rows__$1,cols__$1,opts__24176__auto____$1,validate__837__auto____$1,ufv____$1,meta39924));
});})(allow_sorting_QMARK_,map39844,owner,rows,cols,map39845,validate__837__auto__,ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__))
;
}
return (new stuttaford.radiant.components.t39923(G__39851,output_checker39850,owner,input_checker39849,map39844,output_schema39847,fnk39846,result_table,map39845,allow_sorting_QMARK_,p__39691,map39843,data__24175__auto__,vec__39842,input_schema39848,owner39689,rows,cols,opts__24176__auto__,validate__837__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39999 = (function (){var G__39991 = o__840__auto__;return (output_checker39850.cljs$core$IFn$_invoke$arity$1 ? output_checker39850.cljs$core$IFn$_invoke$arity$1(G__39991) : output_checker39850.call(null,G__39991));
})();if(cljs.core.truth_(temp__4126__auto___39999))
{var error__839__auto___40000 = temp__4126__auto___39999;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39846","fnk39846",-1537604886,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40000], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39847,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40000], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema39847,input_schema39848,input_checker39849,output_checker39850,vec__39842,opts__24176__auto__))
,schema.core.make_fn_schema(output_schema39847,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39848], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24176__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner39689,new cljs.core.Keyword(null,"data","data",-232669377),data__24175__auto__], null));
};
var result_table = function (data__24175__auto__,owner39689,var_args){
var p__39691 = null;if (arguments.length > 2) {
  p__39691 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return result_table__delegate.call(this,data__24175__auto__,owner39689,p__39691);};
result_table.cljs$lang$maxFixedArity = 2;
result_table.cljs$lang$applyTo = (function (arglist__40001){
var data__24175__auto__ = cljs.core.first(arglist__40001);
arglist__40001 = cljs.core.next(arglist__40001);
var owner39689 = cljs.core.first(arglist__40001);
var p__39691 = cljs.core.rest(arglist__40001);
return result_table__delegate(data__24175__auto__,owner39689,p__39691);
});
result_table.cljs$core$IFn$_invoke$arity$variadic = result_table__delegate;
return result_table;
})()
;
stuttaford.radiant.components.__GT_result_table = (function() {
var __GT_result_table = null;
var __GT_result_table__1 = (function (cursor__24144__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.result_table,cursor__24144__auto__);
});
var __GT_result_table__2 = (function (cursor__24144__auto__,m39690){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.components.result_table,cursor__24144__auto__,m39690);
});
__GT_result_table = function(cursor__24144__auto__,m39690){
switch(arguments.length){
case 1:
return __GT_result_table__1.call(this,cursor__24144__auto__);
case 2:
return __GT_result_table__2.call(this,cursor__24144__auto__,m39690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_result_table.cljs$core$IFn$_invoke$arity$1 = __GT_result_table__1;
__GT_result_table.cljs$core$IFn$_invoke$arity$2 = __GT_result_table__2;
return __GT_result_table;
})()
;
//# sourceMappingURL=components.js.map