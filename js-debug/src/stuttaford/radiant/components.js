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
stuttaford.radiant.components.data_source_dropdown = (function data_source_dropdown(c,data_sources,current_data_source){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om_bootstrap.button.dropdown,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),stuttaford.radiant.model.data_source_label(data_sources,current_data_source)], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var iter__20686__auto__ = (function iter__76570(s__76571){return (new cljs.core.LazySeq(null,(function (){var s__76571__$1 = s__76571;while(true){
var temp__4126__auto__ = cljs.core.seq(s__76571__$1);if(temp__4126__auto__)
{var s__76571__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__76571__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__76571__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__76573 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__76572 = (0);while(true){
if((i__76572 < size__20685__auto__))
{var map__76580 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__76572);var map__76580__$1 = ((cljs.core.seq_QMARK_(map__76580))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76580):map__76580);var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76580__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76580__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append(b__76573,stuttaford.radiant.components.data_source_item(c,id,label));
{
var G__76585 = (i__76572 + (1));
i__76572 = G__76585;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__76573),iter__76570(cljs.core.chunk_rest(s__76571__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__76573),null);
}
} else
{var map__76581 = cljs.core.first(s__76571__$2);var map__76581__$1 = ((cljs.core.seq_QMARK_(map__76581))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76581):map__76581);var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76581__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76581__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons(stuttaford.radiant.components.data_source_item(c,id,label),iter__76570(cljs.core.rest(s__76571__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20686__auto__(cljs.core.vals(data_sources));
})()));
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.components.schema = (function() { 
var schema__$1__delegate = function (data__24144__auto__,owner76586,p__76588){var vec__76655 = p__76588;var opts__24145__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76655,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema76659 = schema.core.Any;var input_schema76660 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-db","current-db",213667882)),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map76656","map76656",-442813934,null))], null);var input_checker76661 = schema.core.checker(input_schema76660);var output_checker76662 = schema.core.checker(output_schema76659);return schema.core.schematize_fn(((function (ufv__,output_schema76659,input_schema76660,input_checker76661,output_checker76662,vec__76655,opts__24145__auto__){
return (function fnk76658(G__76663){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___76752 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__76663], null);var temp__4126__auto___76753 = (function (){var G__76696 = args__838__auto___76752;return (input_checker76661.cljs$core$IFn$_invoke$arity$1 ? input_checker76661.cljs$core$IFn$_invoke$arity$1(G__76696) : input_checker76661.call(null,G__76696));
})();if(cljs.core.truth_(temp__4126__auto___76753))
{var error__839__auto___76755 = temp__4126__auto___76753;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk76658","fnk76658",1348528621,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___76755], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema76660,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___76752,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___76755], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map76656 = G__76663;while(true){
if(cljs.core.map_QMARK_(map76656))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map76656], 0))));
}
var map76657 = plumbing.fnk.schema.safe_get(map76656,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var current_db = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map76657,new cljs.core.Keyword(null,"current-db","current-db",213667882),null);var owner = plumbing.fnk.schema.safe_get(map76656,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.components.t76697 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.components.t76697 = (function (output_schema76659,p__76588,owner,schema,data__24144__auto__,opts__24145__auto__,fnk76658,current_db,map76656,vec__76655,input_schema76660,map76657,validate__837__auto__,input_checker76661,ufv__,G__76663,output_checker76662,owner76586,meta76698){
this.output_schema76659 = output_schema76659;
this.p__76588 = p__76588;
this.owner = owner;
this.schema = schema;
this.data__24144__auto__ = data__24144__auto__;
this.opts__24145__auto__ = opts__24145__auto__;
this.fnk76658 = fnk76658;
this.current_db = current_db;
this.map76656 = map76656;
this.vec__76655 = vec__76655;
this.input_schema76660 = input_schema76660;
this.map76657 = map76657;
this.validate__837__auto__ = validate__837__auto__;
this.input_checker76661 = input_checker76661;
this.ufv__ = ufv__;
this.G__76663 = G__76663;
this.output_checker76662 = output_checker76662;
this.owner76586 = owner76586;
this.meta76698 = meta76698;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.components.t76697.cljs$lang$type = true;
stuttaford.radiant.components.t76697.cljs$lang$ctorStr = "stuttaford.radiant.components/t76697";
stuttaford.radiant.components.t76697.cljs$lang$ctorPrWriter = ((function (owner,current_db,map76657,validate__837__auto__,ufv__,output_schema76659,input_schema76660,input_checker76661,output_checker76662,vec__76655,opts__24145__auto__){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"stuttaford.radiant.components/t76697");
});})(owner,current_db,map76657,validate__837__auto__,ufv__,output_schema76659,input_schema76660,input_checker76661,output_checker76662,vec__76655,opts__24145__auto__))
;
stuttaford.radiant.components.t76697.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.components.t76697.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,current_db,map76657,validate__837__auto__,ufv__,output_schema76659,input_schema76660,input_checker76661,output_checker76662,vec__76655,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "schema";
});})(owner,current_db,map76657,validate__837__auto__,ufv__,output_schema76659,input_schema76660,input_checker76661,output_checker76662,vec__76655,opts__24145__auto__))
;
stuttaford.radiant.components.t76697.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.components.t76697.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,current_db,map76657,validate__837__auto__,ufv__,output_schema76659,input_schema76660,input_checker76661,output_checker76662,vec__76655,opts__24145__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),"Schema"], null),cljs.core.array_seq([(cljs.core.truth_(self__.current_db)?cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20686__auto__ = ((function (___$1,owner,current_db,map76657,validate__837__auto__,ufv__,output_schema76659,input_schema76660,input_checker76661,output_checker76662,vec__76655,opts__24145__auto__){
return (function iter__76701(s__76702){return (new cljs.core.LazySeq(null,((function (___$1,owner,current_db,map76657,validate__837__auto__,ufv__,output_schema76659,input_schema76660,input_checker76661,output_checker76662,vec__76655,opts__24145__auto__){
return (function (){var s__76702__$1 = s__76702;while(true){
var temp__4126__auto__ = cljs.core.seq(s__76702__$1);if(temp__4126__auto__)
{var s__76702__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__76702__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__76702__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__76704 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__76703 = (0);while(true){
if((i__76703 < size__20685__auto__))
{var schema__$3 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__76703);cljs.core.chunk_append(b__76704,(function (){var G__76715 = {"className": "schema"};var G__76716 = (function (){var attrs76700 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(schema__$3)], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs76700))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ident"], null)], null),attrs76700], 0))):{"className": "ident"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs76700))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs76700)], null))));
})();var G__76717 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["REF"], 0)):null));var G__76718 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["MANY"], 0)):null));return React.DOM.span(G__76715,G__76716,G__76717,G__76718);
})());
{
var G__76842 = (i__76703 + (1));
i__76703 = G__76842;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__76704),iter__76701(cljs.core.chunk_rest(s__76702__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__76704),null);
}
} else
{var schema__$3 = cljs.core.first(s__76702__$2);return cljs.core.cons((function (){var G__76719 = {"className": "schema"};var G__76720 = (function (){var attrs76700 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(schema__$3)], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs76700))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ident"], null)], null),attrs76700], 0))):{"className": "ident"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs76700))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs76700)], null))));
})();var G__76721 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["REF"], 0)):null));var G__76722 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["MANY"], 0)):null));return React.DOM.span(G__76719,G__76720,G__76721,G__76722);
})(),iter__76701(cljs.core.rest(s__76702__$2)));
}
} else
{return null;
}
break;
}
});})(___$1,owner,current_db,map76657,validate__837__auto__,ufv__,output_schema76659,input_schema76660,input_checker76661,output_checker76662,vec__76655,opts__24145__auto__))
,null,null));
});})(___$1,owner,current_db,map76657,validate__837__auto__,ufv__,output_schema76659,input_schema76660,input_checker76661,output_checker76662,vec__76655,opts__24145__auto__))
;return iter__20686__auto__(stuttaford.radiant.model.schema_for_db(self__.current_db));
})()):"No database.")], 0));
});})(owner,current_db,map76657,validate__837__auto__,ufv__,output_schema76659,input_schema76660,input_checker76661,output_checker76662,vec__76655,opts__24145__auto__))
;
stuttaford.radiant.components.t76697.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,current_db,map76657,validate__837__auto__,ufv__,output_schema76659,input_schema76660,input_checker76661,output_checker76662,vec__76655,opts__24145__auto__){
return (function (_76699){var self__ = this;
var _76699__$1 = this;return self__.meta76698;
});})(owner,current_db,map76657,validate__837__auto__,ufv__,output_schema76659,input_schema76660,input_checker76661,output_checker76662,vec__76655,opts__24145__auto__))
;
stuttaford.radiant.components.t76697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,current_db,map76657,validate__837__auto__,ufv__,output_schema76659,input_schema76660,input_checker76661,output_checker76662,vec__76655,opts__24145__auto__){
return (function (_76699,meta76698__$1){var self__ = this;
var _76699__$1 = this;return (new stuttaford.radiant.components.t76697(self__.output_schema76659,self__.p__76588,self__.owner,self__.schema,self__.data__24144__auto__,self__.opts__24145__auto__,self__.fnk76658,self__.current_db,self__.map76656,self__.vec__76655,self__.input_schema76660,self__.map76657,self__.validate__837__auto__,self__.input_checker76661,self__.ufv__,self__.G__76663,self__.output_checker76662,self__.owner76586,meta76698__$1));
});})(owner,current_db,map76657,validate__837__auto__,ufv__,output_schema76659,input_schema76660,input_checker76661,output_checker76662,vec__76655,opts__24145__auto__))
;
stuttaford.radiant.components.__GT_t76697 = ((function (owner,current_db,map76657,validate__837__auto__,ufv__,output_schema76659,input_schema76660,input_checker76661,output_checker76662,vec__76655,opts__24145__auto__){
return (function __GT_t76697(output_schema76659__$1,p__76588__$1,owner__$1,schema__$2,data__24144__auto____$1,opts__24145__auto____$1,fnk76658__$1,current_db__$1,map76656__$1,vec__76655__$1,input_schema76660__$1,map76657__$1,validate__837__auto____$1,input_checker76661__$1,ufv____$1,G__76663__$1,output_checker76662__$1,owner76586__$1,meta76698){return (new stuttaford.radiant.components.t76697(output_schema76659__$1,p__76588__$1,owner__$1,schema__$2,data__24144__auto____$1,opts__24145__auto____$1,fnk76658__$1,current_db__$1,map76656__$1,vec__76655__$1,input_schema76660__$1,map76657__$1,validate__837__auto____$1,input_checker76661__$1,ufv____$1,G__76663__$1,output_checker76662__$1,owner76586__$1,meta76698));
});})(owner,current_db,map76657,validate__837__auto__,ufv__,output_schema76659,input_schema76660,input_checker76661,output_checker76662,vec__76655,opts__24145__auto__))
;
}
return (new stuttaford.radiant.components.t76697(output_schema76659,p__76588,owner,schema__$1,data__24144__auto__,opts__24145__auto__,fnk76658,current_db,map76656,vec__76655,input_schema76660,map76657,validate__837__auto__,input_checker76661,ufv__,G__76663,output_checker76662,owner76586,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___76912 = (function (){var G__76737 = o__840__auto__;return (output_checker76662.cljs$core$IFn$_invoke$arity$1 ? output_checker76662.cljs$core$IFn$_invoke$arity$1(G__76737) : output_checker76662.call(null,G__76737));
})();if(cljs.core.truth_(temp__4126__auto___76912))
{var error__839__auto___76918 = temp__4126__auto___76912;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk76658","fnk76658",1348528621,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___76918], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema76659,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___76918], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema76659,input_schema76660,input_checker76661,output_checker76662,vec__76655,opts__24145__auto__))
,schema.core.make_fn_schema(output_schema76659,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema76660], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner76586,new cljs.core.Keyword(null,"data","data",-232669377),data__24144__auto__], null));
};
var schema__$1 = function (data__24144__auto__,owner76586,var_args){
var p__76588 = null;if (arguments.length > 2) {
  p__76588 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return schema__$1__delegate.call(this,data__24144__auto__,owner76586,p__76588);};
schema__$1.cljs$lang$maxFixedArity = 2;
schema__$1.cljs$lang$applyTo = (function (arglist__76941){
var data__24144__auto__ = cljs.core.first(arglist__76941);
arglist__76941 = cljs.core.next(arglist__76941);
var owner76586 = cljs.core.first(arglist__76941);
var p__76588 = cljs.core.rest(arglist__76941);
return schema__$1__delegate(data__24144__auto__,owner76586,p__76588);
});
schema__$1.cljs$core$IFn$_invoke$arity$variadic = schema__$1__delegate;
return schema__$1;
})()
;
stuttaford.radiant.components.__GT_schema = (function() {
var __GT_schema = null;
var __GT_schema__1 = (function (cursor__24113__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.schema,cursor__24113__auto__);
});
var __GT_schema__2 = (function (cursor__24113__auto__,m76587){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.components.schema,cursor__24113__auto__,m76587);
});
__GT_schema = function(cursor__24113__auto__,m76587){
switch(arguments.length){
case 1:
return __GT_schema__1.call(this,cursor__24113__auto__);
case 2:
return __GT_schema__2.call(this,cursor__24113__auto__,m76587);
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
var top_nav__delegate = function (data__24144__auto__,owner76951,p__76953){var vec__77125 = p__76953;var opts__24145__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77125,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema77130 = schema.core.Any;var input_schema77131 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684)),schema.core.Any,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map77126","map77126",-921108655,null))], null);var input_checker77132 = schema.core.checker(input_schema77131);var output_checker77133 = schema.core.checker(output_schema77130);return schema.core.schematize_fn(((function (ufv__,output_schema77130,input_schema77131,input_checker77132,output_checker77133,vec__77125,opts__24145__auto__){
return (function fnk77129(G__77134){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___77329 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__77134], null);var temp__4126__auto___77336 = (function (){var G__77233 = args__838__auto___77329;return (input_checker77132.cljs$core$IFn$_invoke$arity$1 ? input_checker77132.cljs$core$IFn$_invoke$arity$1(G__77233) : input_checker77132.call(null,G__77233));
})();if(cljs.core.truth_(temp__4126__auto___77336))
{var error__839__auto___77337 = temp__4126__auto___77336;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk77129","fnk77129",-1293971548,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77337], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema77131,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___77329,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77337], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map77126 = G__77134;while(true){
if(cljs.core.map_QMARK_(map77126))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map77126], 0))));
}
var map77128 = plumbing.fnk.schema.safe_get(map77126,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(map77128,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var data_sources = plumbing.fnk.schema.safe_get(map77128,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map77128,new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684),null);var schema_visible_QMARK_ = plumbing.fnk.schema.safe_get(map77128,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map77126,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map77127 = plumbing.fnk.schema.safe_get(map77126,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var nav_items = plumbing.fnk.schema.safe_get(map77127,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));if(typeof stuttaford.radiant.components.t77240 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.components.t77240 = (function (owner76951,current_data_source,owner,fnk77129,view,input_schema77131,schema_visible_QMARK_,data__24144__auto__,opts__24145__auto__,nav_items,output_schema77130,vec__77125,p__76953,data_sources,map77126,top_nav,output_checker77133,map77127,validate__837__auto__,G__77134,ufv__,map77128,input_checker77132,meta77241){
this.owner76951 = owner76951;
this.current_data_source = current_data_source;
this.owner = owner;
this.fnk77129 = fnk77129;
this.view = view;
this.input_schema77131 = input_schema77131;
this.schema_visible_QMARK_ = schema_visible_QMARK_;
this.data__24144__auto__ = data__24144__auto__;
this.opts__24145__auto__ = opts__24145__auto__;
this.nav_items = nav_items;
this.output_schema77130 = output_schema77130;
this.vec__77125 = vec__77125;
this.p__76953 = p__76953;
this.data_sources = data_sources;
this.map77126 = map77126;
this.top_nav = top_nav;
this.output_checker77133 = output_checker77133;
this.map77127 = map77127;
this.validate__837__auto__ = validate__837__auto__;
this.G__77134 = G__77134;
this.ufv__ = ufv__;
this.map77128 = map77128;
this.input_checker77132 = input_checker77132;
this.meta77241 = meta77241;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.components.t77240.cljs$lang$type = true;
stuttaford.radiant.components.t77240.cljs$lang$ctorStr = "stuttaford.radiant.components/t77240";
stuttaford.radiant.components.t77240.cljs$lang$ctorPrWriter = ((function (nav_items,map77127,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77128,validate__837__auto__,ufv__,output_schema77130,input_schema77131,input_checker77132,output_checker77133,vec__77125,opts__24145__auto__){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"stuttaford.radiant.components/t77240");
});})(nav_items,map77127,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77128,validate__837__auto__,ufv__,output_schema77130,input_schema77131,input_checker77132,output_checker77133,vec__77125,opts__24145__auto__))
;
stuttaford.radiant.components.t77240.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.components.t77240.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (nav_items,map77127,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77128,validate__837__auto__,ufv__,output_schema77130,input_schema77131,input_checker77132,output_checker77133,vec__77125,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "top-nav";
});})(nav_items,map77127,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77128,validate__837__auto__,ufv__,output_schema77130,input_schema77131,input_checker77132,output_checker77133,vec__77125,opts__24145__auto__))
;
stuttaford.radiant.components.t77240.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.components.t77240.prototype.om$core$IRenderState$render_state$arity$2 = ((function (nav_items,map77127,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77128,validate__837__auto__,ufv__,output_schema77130,input_schema77131,input_checker77132,output_checker77133,vec__77125,opts__24145__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var G__77261 = {"className": "radiant"};var G__77262 = "RADIANT";return React.DOM.div(G__77261,G__77262);
})(),om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20686__auto__ = ((function (c,___$1,nav_items,map77127,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77128,validate__837__auto__,ufv__,output_schema77130,input_schema77131,input_checker77132,output_checker77133,vec__77125,opts__24145__auto__){
return (function iter__77265(s__77266){return (new cljs.core.LazySeq(null,((function (c,___$1,nav_items,map77127,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77128,validate__837__auto__,ufv__,output_schema77130,input_schema77131,input_checker77132,output_checker77133,vec__77125,opts__24145__auto__){
return (function (){var s__77266__$1 = s__77266;while(true){
var temp__4126__auto__ = cljs.core.seq(s__77266__$1);if(temp__4126__auto__)
{var s__77266__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__77266__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__77266__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__77268 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__77267 = (0);while(true){
if((i__77267 < size__20685__auto__))
{var vec__77293 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__77267);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77293,(0),null);var vec__77294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77293,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77294,(0),null);cljs.core.chunk_append(b__77268,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__77295 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__77267,vec__77293,id,vec__77294,label,c__20683__auto__,size__20685__auto__,b__77268,s__77266__$2,temp__4126__auto__,c,___$1,nav_items,map77127,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77128,validate__837__auto__,ufv__,output_schema77130,input_schema77131,input_checker77132,output_checker77133,vec__77125,opts__24145__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__77267,vec__77293,id,vec__77294,label,c__20683__auto__,size__20685__auto__,b__77268,s__77266__$2,temp__4126__auto__,c,___$1,nav_items,map77127,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77128,validate__837__auto__,ufv__,output_schema77130,input_schema77131,input_checker77132,output_checker77133,vec__77125,opts__24145__auto__))
], null);var G__77295__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77295,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__77295);return G__77295__$1;
})(),cljs.core.array_seq([label], 0)));
{
var G__77471 = (i__77267 + (1));
i__77267 = G__77471;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__77268),iter__77265(cljs.core.chunk_rest(s__77266__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__77268),null);
}
} else
{var vec__77296 = cljs.core.first(s__77266__$2);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77296,(0),null);var vec__77297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77296,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77297,(0),null);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__77298 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__77296,id,vec__77297,label,s__77266__$2,temp__4126__auto__,c,___$1,nav_items,map77127,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77128,validate__837__auto__,ufv__,output_schema77130,input_schema77131,input_checker77132,output_checker77133,vec__77125,opts__24145__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(vec__77296,id,vec__77297,label,s__77266__$2,temp__4126__auto__,c,___$1,nav_items,map77127,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77128,validate__837__auto__,ufv__,output_schema77130,input_schema77131,input_checker77132,output_checker77133,vec__77125,opts__24145__auto__))
], null);var G__77298__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77298,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__77298);return G__77298__$1;
})(),cljs.core.array_seq([label], 0)),iter__77265(cljs.core.rest(s__77266__$2)));
}
} else
{return null;
}
break;
}
});})(c,___$1,nav_items,map77127,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77128,validate__837__auto__,ufv__,output_schema77130,input_schema77131,input_checker77132,output_checker77133,vec__77125,opts__24145__auto__))
,null,null));
});})(c,___$1,nav_items,map77127,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77128,validate__837__auto__,ufv__,output_schema77130,input_schema77131,input_checker77132,output_checker77133,vec__77125,opts__24145__auto__))
;return iter__20686__auto__(self__.nav_items);
})()], 0)),stuttaford.radiant.components.data_source_dropdown(c,self__.data_sources,self__.current_data_source),om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__77299 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (c,___$1,nav_items,map77127,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77128,validate__837__auto__,ufv__,output_schema77130,input_schema77131,input_checker77132,output_checker77133,vec__77125,opts__24145__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-schema-visible","set-schema-visible",-1408939033),cljs.core.not(self__.schema_visible_QMARK_)], null));
});})(c,___$1,nav_items,map77127,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77128,validate__837__auto__,ufv__,output_schema77130,input_schema77131,input_checker77132,output_checker77133,vec__77125,opts__24145__auto__))
], null);var G__77299__$1 = (cljs.core.truth_(self__.schema_visible_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77299,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__77299);return G__77299__$1;
})(),cljs.core.array_seq(["Show schema"], 0))], 0));
});})(nav_items,map77127,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77128,validate__837__auto__,ufv__,output_schema77130,input_schema77131,input_checker77132,output_checker77133,vec__77125,opts__24145__auto__))
;
stuttaford.radiant.components.t77240.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (nav_items,map77127,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77128,validate__837__auto__,ufv__,output_schema77130,input_schema77131,input_checker77132,output_checker77133,vec__77125,opts__24145__auto__){
return (function (_77242){var self__ = this;
var _77242__$1 = this;return self__.meta77241;
});})(nav_items,map77127,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77128,validate__837__auto__,ufv__,output_schema77130,input_schema77131,input_checker77132,output_checker77133,vec__77125,opts__24145__auto__))
;
stuttaford.radiant.components.t77240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (nav_items,map77127,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77128,validate__837__auto__,ufv__,output_schema77130,input_schema77131,input_checker77132,output_checker77133,vec__77125,opts__24145__auto__){
return (function (_77242,meta77241__$1){var self__ = this;
var _77242__$1 = this;return (new stuttaford.radiant.components.t77240(self__.owner76951,self__.current_data_source,self__.owner,self__.fnk77129,self__.view,self__.input_schema77131,self__.schema_visible_QMARK_,self__.data__24144__auto__,self__.opts__24145__auto__,self__.nav_items,self__.output_schema77130,self__.vec__77125,self__.p__76953,self__.data_sources,self__.map77126,self__.top_nav,self__.output_checker77133,self__.map77127,self__.validate__837__auto__,self__.G__77134,self__.ufv__,self__.map77128,self__.input_checker77132,meta77241__$1));
});})(nav_items,map77127,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77128,validate__837__auto__,ufv__,output_schema77130,input_schema77131,input_checker77132,output_checker77133,vec__77125,opts__24145__auto__))
;
stuttaford.radiant.components.__GT_t77240 = ((function (nav_items,map77127,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77128,validate__837__auto__,ufv__,output_schema77130,input_schema77131,input_checker77132,output_checker77133,vec__77125,opts__24145__auto__){
return (function __GT_t77240(owner76951__$1,current_data_source__$1,owner__$1,fnk77129__$1,view__$1,input_schema77131__$1,schema_visible_QMARK___$1,data__24144__auto____$1,opts__24145__auto____$1,nav_items__$1,output_schema77130__$1,vec__77125__$1,p__76953__$1,data_sources__$1,map77126__$1,top_nav__$1,output_checker77133__$1,map77127__$1,validate__837__auto____$1,G__77134__$1,ufv____$1,map77128__$1,input_checker77132__$1,meta77241){return (new stuttaford.radiant.components.t77240(owner76951__$1,current_data_source__$1,owner__$1,fnk77129__$1,view__$1,input_schema77131__$1,schema_visible_QMARK___$1,data__24144__auto____$1,opts__24145__auto____$1,nav_items__$1,output_schema77130__$1,vec__77125__$1,p__76953__$1,data_sources__$1,map77126__$1,top_nav__$1,output_checker77133__$1,map77127__$1,validate__837__auto____$1,G__77134__$1,ufv____$1,map77128__$1,input_checker77132__$1,meta77241));
});})(nav_items,map77127,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77128,validate__837__auto__,ufv__,output_schema77130,input_schema77131,input_checker77132,output_checker77133,vec__77125,opts__24145__auto__))
;
}
return (new stuttaford.radiant.components.t77240(owner76951,current_data_source,owner,fnk77129,view,input_schema77131,schema_visible_QMARK_,data__24144__auto__,opts__24145__auto__,nav_items,output_schema77130,vec__77125,p__76953,data_sources,map77126,top_nav,output_checker77133,map77127,validate__837__auto__,G__77134,ufv__,map77128,input_checker77132,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___77487 = (function (){var G__77315 = o__840__auto__;return (output_checker77133.cljs$core$IFn$_invoke$arity$1 ? output_checker77133.cljs$core$IFn$_invoke$arity$1(G__77315) : output_checker77133.call(null,G__77315));
})();if(cljs.core.truth_(temp__4126__auto___77487))
{var error__839__auto___77488 = temp__4126__auto___77487;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk77129","fnk77129",-1293971548,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77488], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema77130,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77488], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema77130,input_schema77131,input_checker77132,output_checker77133,vec__77125,opts__24145__auto__))
,schema.core.make_fn_schema(output_schema77130,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema77131], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner76951,new cljs.core.Keyword(null,"data","data",-232669377),data__24144__auto__], null));
};
var top_nav = function (data__24144__auto__,owner76951,var_args){
var p__76953 = null;if (arguments.length > 2) {
  p__76953 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return top_nav__delegate.call(this,data__24144__auto__,owner76951,p__76953);};
top_nav.cljs$lang$maxFixedArity = 2;
top_nav.cljs$lang$applyTo = (function (arglist__77489){
var data__24144__auto__ = cljs.core.first(arglist__77489);
arglist__77489 = cljs.core.next(arglist__77489);
var owner76951 = cljs.core.first(arglist__77489);
var p__76953 = cljs.core.rest(arglist__77489);
return top_nav__delegate(data__24144__auto__,owner76951,p__76953);
});
top_nav.cljs$core$IFn$_invoke$arity$variadic = top_nav__delegate;
return top_nav;
})()
;
stuttaford.radiant.components.__GT_top_nav = (function() {
var __GT_top_nav = null;
var __GT_top_nav__1 = (function (cursor__24113__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.top_nav,cursor__24113__auto__);
});
var __GT_top_nav__2 = (function (cursor__24113__auto__,m76952){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.components.top_nav,cursor__24113__auto__,m76952);
});
__GT_top_nav = function(cursor__24113__auto__,m76952){
switch(arguments.length){
case 1:
return __GT_top_nav__1.call(this,cursor__24113__auto__);
case 2:
return __GT_top_nav__2.call(this,cursor__24113__auto__,m76952);
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
stuttaford.radiant.components.paginate_label = (function paginate_label(current_page,rows){var start = (stuttaford.radiant.components.PAGE_SIZE * current_page);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((start + (1)))+" - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__19914__auto__ = (start + stuttaford.radiant.components.PAGE_SIZE);var y__19915__auto__ = cljs.core.count(rows);return ((x__19914__auto__ < y__19915__auto__) ? x__19914__auto__ : y__19915__auto__);
})()));
});
stuttaford.radiant.components.sort_rows = (function sort_rows(sort_col,rows){return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__77490_SHARP_){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__77490_SHARP_,sort_col);
}),rows);
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.components.result_table = (function() { 
var result_table__delegate = function (data__24144__auto__,owner77491,p__77493){var vec__77648 = p__77493;var opts__24145__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77648,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema77654 = schema.core.Any;var input_schema77655 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260)),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"rows","rows",850049680),schema.core.Any,new cljs.core.Keyword(null,"cols","cols",-1914801295),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map77649","map77649",1831869324,null))], null);var input_checker77656 = schema.core.checker(input_schema77655);var output_checker77657 = schema.core.checker(output_schema77654);return schema.core.schematize_fn(((function (ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__){
return (function fnk77653(G__77658){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___77884 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__77658], null);var temp__4126__auto___77885 = (function (){var G__77741 = args__838__auto___77884;return (input_checker77656.cljs$core$IFn$_invoke$arity$1 ? input_checker77656.cljs$core$IFn$_invoke$arity$1(G__77741) : input_checker77656.call(null,G__77741));
})();if(cljs.core.truth_(temp__4126__auto___77885))
{var error__839__auto___77888 = temp__4126__auto___77885;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk77653","fnk77653",-1147582656,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77888], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema77655,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___77884,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77888], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map77649 = G__77658;while(true){
if(cljs.core.map_QMARK_(map77649))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map77649], 0))));
}
var map77652 = plumbing.fnk.schema.safe_get(map77649,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var cols = plumbing.fnk.schema.safe_get(map77652,new cljs.core.Keyword(null,"cols","cols",-1914801295),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var rows = plumbing.fnk.schema.safe_get(map77652,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map77649,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map77650 = plumbing.fnk.schema.safe_get(map77649,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var allow_sorting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map77650,new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),false);if(typeof stuttaford.radiant.components.t77742 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.components.t77742 = (function (fnk77653,owner77491,owner,map77650,output_checker77657,data__24144__auto__,opts__24145__auto__,map77652,result_table,allow_sorting_QMARK_,map77649,vec__77648,p__77493,input_schema77655,rows,cols,output_schema77654,G__77658,validate__837__auto__,ufv__,input_checker77656,meta77743){
this.fnk77653 = fnk77653;
this.owner77491 = owner77491;
this.owner = owner;
this.map77650 = map77650;
this.output_checker77657 = output_checker77657;
this.data__24144__auto__ = data__24144__auto__;
this.opts__24145__auto__ = opts__24145__auto__;
this.map77652 = map77652;
this.result_table = result_table;
this.allow_sorting_QMARK_ = allow_sorting_QMARK_;
this.map77649 = map77649;
this.vec__77648 = vec__77648;
this.p__77493 = p__77493;
this.input_schema77655 = input_schema77655;
this.rows = rows;
this.cols = cols;
this.output_schema77654 = output_schema77654;
this.G__77658 = G__77658;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.input_checker77656 = input_checker77656;
this.meta77743 = meta77743;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.components.t77742.cljs$lang$type = true;
stuttaford.radiant.components.t77742.cljs$lang$ctorStr = "stuttaford.radiant.components/t77742";
stuttaford.radiant.components.t77742.cljs$lang$ctorPrWriter = ((function (allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"stuttaford.radiant.components/t77742");
});})(allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__))
;
stuttaford.radiant.components.t77742.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.components.t77742.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "result-table";
});})(allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__))
;
stuttaford.radiant.components.t77742.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.components.t77742.prototype.om$core$IRenderState$render_state$arity$2 = ((function (allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__){
return (function (_,p__77745){var self__ = this;
var map__77746 = p__77745;var map__77746__$1 = ((cljs.core.seq_QMARK_(map__77746))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77746):map__77746);var current_page = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77746__$1,new cljs.core.Keyword(null,"current-page","current-page",-101294180),(0));var sort_col = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77746__$1,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882),(0));var ___$1 = this;var page_count = cljs.core.count(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.PAGE_SIZE,self__.rows));var paginate_QMARK_ = (page_count > (1));var G__77748 = null;var G__77749 = (function (){var G__77751 = {"className": "result-pagination"};var G__77752 = (function (){var attrs77747 = cljs.core.count(self__.rows);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs77747))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-count"], null)], null),attrs77747], 0))):{"className": "item-count"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs77747))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" items",sablono.interpreter.interpret(((paginate_QMARK_)?(" \u00B7 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(stuttaford.radiant.components.paginate_label(current_page,self__.rows))):null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs77747)," items",sablono.interpreter.interpret(((paginate_QMARK_)?(" \u00B7 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(stuttaford.radiant.components.paginate_label(current_page,self__.rows))):null))], null))));
})();var G__77753 = sablono.interpreter.interpret(((paginate_QMARK_)?om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20686__auto__ = ((function (G__77751,G__77752,G__77748,page_count,paginate_QMARK_,___$1,map__77746,map__77746__$1,current_page,sort_col,allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__){
return (function iter__77754(s__77755){return (new cljs.core.LazySeq(null,((function (G__77751,G__77752,G__77748,page_count,paginate_QMARK_,___$1,map__77746,map__77746__$1,current_page,sort_col,allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__){
return (function (){var s__77755__$1 = s__77755;while(true){
var temp__4126__auto__ = cljs.core.seq(s__77755__$1);if(temp__4126__auto__)
{var s__77755__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__77755__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__77755__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__77757 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__77756 = (0);while(true){
if((i__77756 < size__20685__auto__))
{var page = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__77756);cljs.core.chunk_append(b__77757,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__77765 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__77756,page,c__20683__auto__,size__20685__auto__,b__77757,s__77755__$2,temp__4126__auto__,G__77751,G__77752,G__77748,page_count,paginate_QMARK_,___$1,map__77746,map__77746__$1,current_page,sort_col,allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page);
});})(i__77756,page,c__20683__auto__,size__20685__auto__,b__77757,s__77755__$2,temp__4126__auto__,G__77751,G__77752,G__77748,page_count,paginate_QMARK_,___$1,map__77746,map__77746__$1,current_page,sort_col,allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__))
], null);var G__77765__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77765,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__77765);return G__77765__$1;
})(),cljs.core.array_seq([(page + (1))], 0)));
{
var G__77935 = (i__77756 + (1));
i__77756 = G__77935;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__77757),iter__77754(cljs.core.chunk_rest(s__77755__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__77757),null);
}
} else
{var page = cljs.core.first(s__77755__$2);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__77766 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (page,s__77755__$2,temp__4126__auto__,G__77751,G__77752,G__77748,page_count,paginate_QMARK_,___$1,map__77746,map__77746__$1,current_page,sort_col,allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page);
});})(page,s__77755__$2,temp__4126__auto__,G__77751,G__77752,G__77748,page_count,paginate_QMARK_,___$1,map__77746,map__77746__$1,current_page,sort_col,allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__))
], null);var G__77766__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77766,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__77766);return G__77766__$1;
})(),cljs.core.array_seq([(page + (1))], 0)),iter__77754(cljs.core.rest(s__77755__$2)));
}
} else
{return null;
}
break;
}
});})(G__77751,G__77752,G__77748,page_count,paginate_QMARK_,___$1,map__77746,map__77746__$1,current_page,sort_col,allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__))
,null,null));
});})(G__77751,G__77752,G__77748,page_count,paginate_QMARK_,___$1,map__77746,map__77746__$1,current_page,sort_col,allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__))
;return iter__20686__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(page_count));
})()], 0)):null));return React.DOM.div(G__77751,G__77752,G__77753);
})();var G__77750 = sablono.interpreter.interpret(om_bootstrap.table.table.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"striped?","striped?",-797214979),true,new cljs.core.Keyword(null,"bordered?","bordered?",562358476),true,new cljs.core.Keyword(null,"condensed?","condensed?",-109797520),true,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),true], null),cljs.core.array_seq([cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__77771 = null;var G__77772 = (function (){var attrs77769 = cljs.core.map_indexed(((function (G__77771,G__77748,G__77749,page_count,paginate_QMARK_,___$1,map__77746,map__77746__$1,current_page,sort_col,allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__){
return (function (i,v){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),(cljs.core.truth_(self__.allow_sorting_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__77771,G__77748,G__77749,page_count,paginate_QMARK_,___$1,map__77746,map__77746__$1,current_page,sort_col,allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882),i);
});})(G__77771,G__77748,G__77749,page_count,paginate_QMARK_,___$1,map__77746,map__77746__$1,current_page,sort_col,allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__))
], null):null),v,(cljs.core.truth_((function (){var and__19267__auto__ = self__.allow_sorting_QMARK_;if(cljs.core.truth_(and__19267__auto__))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,sort_col);
} else
{return and__19267__auto__;
}
})())?cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-chevron-down","span.glyphicon.glyphicon-chevron-down",-62425995)], null))," "):null)], null);
});})(G__77771,G__77748,G__77749,page_count,paginate_QMARK_,___$1,map__77746,map__77746__$1,current_page,sort_col,allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__))
,self__.cols);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tr,((cljs.core.map_QMARK_(attrs77769))?sablono.interpreter.attributes(attrs77769):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs77769))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs77769)], null))));
})();return React.DOM.thead(G__77771,G__77772);
})(),(function (){var G__77773 = null;var G__77774 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20686__auto__ = ((function (G__77773,G__77748,G__77749,page_count,paginate_QMARK_,___$1,map__77746,map__77746__$1,current_page,sort_col,allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__){
return (function iter__77775(s__77776){return (new cljs.core.LazySeq(null,((function (G__77773,G__77748,G__77749,page_count,paginate_QMARK_,___$1,map__77746,map__77746__$1,current_page,sort_col,allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__){
return (function (){var s__77776__$1 = s__77776;while(true){
var temp__4126__auto__ = cljs.core.seq(s__77776__$1);if(temp__4126__auto__)
{var s__77776__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__77776__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__77776__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__77778 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__77777 = (0);while(true){
if((i__77777 < size__20685__auto__))
{var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__77777);cljs.core.chunk_append(b__77778,(function (){var G__77821 = null;var G__77822 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20686__auto__ = ((function (i__77777,G__77821,row,c__20683__auto__,size__20685__auto__,b__77778,s__77776__$2,temp__4126__auto__,G__77773,G__77748,G__77749,page_count,paginate_QMARK_,___$1,map__77746,map__77746__$1,current_page,sort_col,allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__){
return (function iter__77823(s__77824){return (new cljs.core.LazySeq(null,((function (i__77777,G__77821,row,c__20683__auto__,size__20685__auto__,b__77778,s__77776__$2,temp__4126__auto__,G__77773,G__77748,G__77749,page_count,paginate_QMARK_,___$1,map__77746,map__77746__$1,current_page,sort_col,allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__){
return (function (){var s__77824__$1 = s__77824;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__77824__$1);if(temp__4126__auto____$1)
{var s__77824__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__77824__$2))
{var c__20683__auto____$1 = cljs.core.chunk_first(s__77824__$2);var size__20685__auto____$1 = cljs.core.count(c__20683__auto____$1);var b__77826 = cljs.core.chunk_buffer(size__20685__auto____$1);if((function (){var i__77825 = (0);while(true){
if((i__77825 < size__20685__auto____$1))
{var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto____$1,i__77825);cljs.core.chunk_append(b__77826,(function (){var attrs77770 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs77770))?sablono.interpreter.attributes(attrs77770):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs77770))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs77770)], null))));
})());
{
var G__77969 = (i__77825 + (1));
i__77825 = G__77969;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__77826),iter__77823(cljs.core.chunk_rest(s__77824__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__77826),null);
}
} else
{var value = cljs.core.first(s__77824__$2);return cljs.core.cons((function (){var attrs77770 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs77770))?sablono.interpreter.attributes(attrs77770):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs77770))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs77770)], null))));
})(),iter__77823(cljs.core.rest(s__77824__$2)));
}
} else
{return null;
}
break;
}
});})(i__77777,G__77821,row,c__20683__auto__,size__20685__auto__,b__77778,s__77776__$2,temp__4126__auto__,G__77773,G__77748,G__77749,page_count,paginate_QMARK_,___$1,map__77746,map__77746__$1,current_page,sort_col,allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__))
,null,null));
});})(i__77777,G__77821,row,c__20683__auto__,size__20685__auto__,b__77778,s__77776__$2,temp__4126__auto__,G__77773,G__77748,G__77749,page_count,paginate_QMARK_,___$1,map__77746,map__77746__$1,current_page,sort_col,allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__))
;return iter__20686__auto__(row);
})());return React.DOM.tr(G__77821,G__77822);
})());
{
var G__77990 = (i__77777 + (1));
i__77777 = G__77990;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__77778),iter__77775(cljs.core.chunk_rest(s__77776__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__77778),null);
}
} else
{var row = cljs.core.first(s__77776__$2);return cljs.core.cons((function (){var G__77837 = null;var G__77838 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20686__auto__ = ((function (G__77837,row,s__77776__$2,temp__4126__auto__,G__77773,G__77748,G__77749,page_count,paginate_QMARK_,___$1,map__77746,map__77746__$1,current_page,sort_col,allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__){
return (function iter__77840(s__77841){return (new cljs.core.LazySeq(null,((function (G__77837,row,s__77776__$2,temp__4126__auto__,G__77773,G__77748,G__77749,page_count,paginate_QMARK_,___$1,map__77746,map__77746__$1,current_page,sort_col,allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__){
return (function (){var s__77841__$1 = s__77841;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__77841__$1);if(temp__4126__auto____$1)
{var s__77841__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__77841__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__77841__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__77843 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__77842 = (0);while(true){
if((i__77842 < size__20685__auto__))
{var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__77842);cljs.core.chunk_append(b__77843,(function (){var attrs77770 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs77770))?sablono.interpreter.attributes(attrs77770):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs77770))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs77770)], null))));
})());
{
var G__78021 = (i__77842 + (1));
i__77842 = G__78021;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__77843),iter__77840(cljs.core.chunk_rest(s__77841__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__77843),null);
}
} else
{var value = cljs.core.first(s__77841__$2);return cljs.core.cons((function (){var attrs77770 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs77770))?sablono.interpreter.attributes(attrs77770):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs77770))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs77770)], null))));
})(),iter__77840(cljs.core.rest(s__77841__$2)));
}
} else
{return null;
}
break;
}
});})(G__77837,row,s__77776__$2,temp__4126__auto__,G__77773,G__77748,G__77749,page_count,paginate_QMARK_,___$1,map__77746,map__77746__$1,current_page,sort_col,allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__))
,null,null));
});})(G__77837,row,s__77776__$2,temp__4126__auto__,G__77773,G__77748,G__77749,page_count,paginate_QMARK_,___$1,map__77746,map__77746__$1,current_page,sort_col,allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__))
;return iter__20686__auto__(row);
})());return React.DOM.tr(G__77837,G__77838);
})(),iter__77775(cljs.core.rest(s__77776__$2)));
}
} else
{return null;
}
break;
}
});})(G__77773,G__77748,G__77749,page_count,paginate_QMARK_,___$1,map__77746,map__77746__$1,current_page,sort_col,allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__))
,null,null));
});})(G__77773,G__77748,G__77749,page_count,paginate_QMARK_,___$1,map__77746,map__77746__$1,current_page,sort_col,allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__))
;return iter__20686__auto__(stuttaford.radiant.components.sort_rows(sort_col,stuttaford.radiant.components.paginate(current_page,self__.rows)));
})());return React.DOM.tbody(G__77773,G__77774);
})()], null))], 0)));return React.DOM.div(G__77748,G__77749,G__77750);
});})(allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__))
;
stuttaford.radiant.components.t77742.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__){
return (function (_77744){var self__ = this;
var _77744__$1 = this;return self__.meta77743;
});})(allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__))
;
stuttaford.radiant.components.t77742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__){
return (function (_77744,meta77743__$1){var self__ = this;
var _77744__$1 = this;return (new stuttaford.radiant.components.t77742(self__.fnk77653,self__.owner77491,self__.owner,self__.map77650,self__.output_checker77657,self__.data__24144__auto__,self__.opts__24145__auto__,self__.map77652,self__.result_table,self__.allow_sorting_QMARK_,self__.map77649,self__.vec__77648,self__.p__77493,self__.input_schema77655,self__.rows,self__.cols,self__.output_schema77654,self__.G__77658,self__.validate__837__auto__,self__.ufv__,self__.input_checker77656,meta77743__$1));
});})(allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__))
;
stuttaford.radiant.components.__GT_t77742 = ((function (allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__){
return (function __GT_t77742(fnk77653__$1,owner77491__$1,owner__$1,map77650__$1,output_checker77657__$1,data__24144__auto____$1,opts__24145__auto____$1,map77652__$1,result_table__$1,allow_sorting_QMARK___$1,map77649__$1,vec__77648__$1,p__77493__$1,input_schema77655__$1,rows__$1,cols__$1,output_schema77654__$1,G__77658__$1,validate__837__auto____$1,ufv____$1,input_checker77656__$1,meta77743){return (new stuttaford.radiant.components.t77742(fnk77653__$1,owner77491__$1,owner__$1,map77650__$1,output_checker77657__$1,data__24144__auto____$1,opts__24145__auto____$1,map77652__$1,result_table__$1,allow_sorting_QMARK___$1,map77649__$1,vec__77648__$1,p__77493__$1,input_schema77655__$1,rows__$1,cols__$1,output_schema77654__$1,G__77658__$1,validate__837__auto____$1,ufv____$1,input_checker77656__$1,meta77743));
});})(allow_sorting_QMARK_,map77650,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__))
;
}
return (new stuttaford.radiant.components.t77742(fnk77653,owner77491,owner,map77650,output_checker77657,data__24144__auto__,opts__24145__auto__,map77652,result_table,allow_sorting_QMARK_,map77649,vec__77648,p__77493,input_schema77655,rows,cols,output_schema77654,G__77658,validate__837__auto__,ufv__,input_checker77656,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___78071 = (function (){var G__77867 = o__840__auto__;return (output_checker77657.cljs$core$IFn$_invoke$arity$1 ? output_checker77657.cljs$core$IFn$_invoke$arity$1(G__77867) : output_checker77657.call(null,G__77867));
})();if(cljs.core.truth_(temp__4126__auto___78071))
{var error__839__auto___78072 = temp__4126__auto___78071;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk77653","fnk77653",-1147582656,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___78072], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema77654,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___78072], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77648,opts__24145__auto__))
,schema.core.make_fn_schema(output_schema77654,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema77655], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner77491,new cljs.core.Keyword(null,"data","data",-232669377),data__24144__auto__], null));
};
var result_table = function (data__24144__auto__,owner77491,var_args){
var p__77493 = null;if (arguments.length > 2) {
  p__77493 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return result_table__delegate.call(this,data__24144__auto__,owner77491,p__77493);};
result_table.cljs$lang$maxFixedArity = 2;
result_table.cljs$lang$applyTo = (function (arglist__78084){
var data__24144__auto__ = cljs.core.first(arglist__78084);
arglist__78084 = cljs.core.next(arglist__78084);
var owner77491 = cljs.core.first(arglist__78084);
var p__77493 = cljs.core.rest(arglist__78084);
return result_table__delegate(data__24144__auto__,owner77491,p__77493);
});
result_table.cljs$core$IFn$_invoke$arity$variadic = result_table__delegate;
return result_table;
})()
;
stuttaford.radiant.components.__GT_result_table = (function() {
var __GT_result_table = null;
var __GT_result_table__1 = (function (cursor__24113__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.result_table,cursor__24113__auto__);
});
var __GT_result_table__2 = (function (cursor__24113__auto__,m77492){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.components.result_table,cursor__24113__auto__,m77492);
});
__GT_result_table = function(cursor__24113__auto__,m77492){
switch(arguments.length){
case 1:
return __GT_result_table__1.call(this,cursor__24113__auto__);
case 2:
return __GT_result_table__2.call(this,cursor__24113__auto__,m77492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_result_table.cljs$core$IFn$_invoke$arity$1 = __GT_result_table__1;
__GT_result_table.cljs$core$IFn$_invoke$arity$2 = __GT_result_table__2;
return __GT_result_table;
})()
;
//# sourceMappingURL=components.js.map