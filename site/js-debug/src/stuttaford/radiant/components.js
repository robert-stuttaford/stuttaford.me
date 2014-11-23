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
stuttaford.radiant.components.data_source_dropdown = (function data_source_dropdown(c,data_sources,current_data_source){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om_bootstrap.button.dropdown,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),stuttaford.radiant.model.data_source_label(data_sources,current_data_source)], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var iter__21069__auto__ = (function iter__77202(s__77203){return (new cljs.core.LazySeq(null,(function (){var s__77203__$1 = s__77203;while(true){
var temp__4126__auto__ = cljs.core.seq(s__77203__$1);if(temp__4126__auto__)
{var s__77203__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__77203__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__77203__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__77205 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__77204 = (0);while(true){
if((i__77204 < size__21068__auto__))
{var map__77210 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__77204);var map__77210__$1 = ((cljs.core.seq_QMARK_(map__77210))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77210):map__77210);var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77210__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77210__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append(b__77205,stuttaford.radiant.components.data_source_item(c,id,label));
{
var G__77212 = (i__77204 + (1));
i__77204 = G__77212;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__77205),iter__77202(cljs.core.chunk_rest(s__77203__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__77205),null);
}
} else
{var map__77211 = cljs.core.first(s__77203__$2);var map__77211__$1 = ((cljs.core.seq_QMARK_(map__77211))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77211):map__77211);var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77211__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77211__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons(stuttaford.radiant.components.data_source_item(c,id,label),iter__77202(cljs.core.rest(s__77203__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__21069__auto__(cljs.core.vals(data_sources));
})()));
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.components.schema = (function() { 
var schema__$1__delegate = function (data__24582__auto__,owner77213,p__77215){var vec__77281 = p__77215;var opts__24583__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77281,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema77285 = schema.core.Any;var input_schema77286 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-db","current-db",213667882)),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map77282","map77282",1574184454,null))], null);var input_checker77287 = schema.core.checker(input_schema77286);var output_checker77288 = schema.core.checker(output_schema77285);return schema.core.schematize_fn(((function (ufv__,output_schema77285,input_schema77286,input_checker77287,output_checker77288,vec__77281,opts__24583__auto__){
return (function fnk77284(G__77289){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___77346 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__77289], null);var temp__4126__auto___77347 = (function (){var G__77318 = args__838__auto___77346;return (input_checker77287.cljs$core$IFn$_invoke$arity$1 ? input_checker77287.cljs$core$IFn$_invoke$arity$1(G__77318) : input_checker77287.call(null,G__77318));
})();if(cljs.core.truth_(temp__4126__auto___77347))
{var error__839__auto___77348 = temp__4126__auto___77347;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk77284","fnk77284",887539325,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77348], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema77286,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___77346,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77348], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map77282 = G__77289;while(true){
if(cljs.core.map_QMARK_(map77282))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map77282], 0))));
}
var map77283 = plumbing.fnk.schema.safe_get(map77282,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var current_db = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map77283,new cljs.core.Keyword(null,"current-db","current-db",213667882),null);var owner = plumbing.fnk.schema.safe_get(map77282,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.components.t77319 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.components.t77319 = (function (p__77215,G__77289,opts__24583__auto__,owner,map77282,output_checker77288,input_schema77286,schema,current_db,data__24582__auto__,input_checker77287,map77283,validate__837__auto__,owner77213,ufv__,fnk77284,output_schema77285,vec__77281,meta77320){
this.p__77215 = p__77215;
this.G__77289 = G__77289;
this.opts__24583__auto__ = opts__24583__auto__;
this.owner = owner;
this.map77282 = map77282;
this.output_checker77288 = output_checker77288;
this.input_schema77286 = input_schema77286;
this.schema = schema;
this.current_db = current_db;
this.data__24582__auto__ = data__24582__auto__;
this.input_checker77287 = input_checker77287;
this.map77283 = map77283;
this.validate__837__auto__ = validate__837__auto__;
this.owner77213 = owner77213;
this.ufv__ = ufv__;
this.fnk77284 = fnk77284;
this.output_schema77285 = output_schema77285;
this.vec__77281 = vec__77281;
this.meta77320 = meta77320;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.components.t77319.cljs$lang$type = true;
stuttaford.radiant.components.t77319.cljs$lang$ctorStr = "stuttaford.radiant.components/t77319";
stuttaford.radiant.components.t77319.cljs$lang$ctorPrWriter = ((function (owner,current_db,map77283,validate__837__auto__,ufv__,output_schema77285,input_schema77286,input_checker77287,output_checker77288,vec__77281,opts__24583__auto__){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"stuttaford.radiant.components/t77319");
});})(owner,current_db,map77283,validate__837__auto__,ufv__,output_schema77285,input_schema77286,input_checker77287,output_checker77288,vec__77281,opts__24583__auto__))
;
stuttaford.radiant.components.t77319.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.components.t77319.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,current_db,map77283,validate__837__auto__,ufv__,output_schema77285,input_schema77286,input_checker77287,output_checker77288,vec__77281,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "schema";
});})(owner,current_db,map77283,validate__837__auto__,ufv__,output_schema77285,input_schema77286,input_checker77287,output_checker77288,vec__77281,opts__24583__auto__))
;
stuttaford.radiant.components.t77319.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.components.t77319.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,current_db,map77283,validate__837__auto__,ufv__,output_schema77285,input_schema77286,input_checker77287,output_checker77288,vec__77281,opts__24583__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),"Schema"], null),cljs.core.array_seq([(cljs.core.truth_(self__.current_db)?cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__21069__auto__ = ((function (___$1,owner,current_db,map77283,validate__837__auto__,ufv__,output_schema77285,input_schema77286,input_checker77287,output_checker77288,vec__77281,opts__24583__auto__){
return (function iter__77323(s__77324){return (new cljs.core.LazySeq(null,((function (___$1,owner,current_db,map77283,validate__837__auto__,ufv__,output_schema77285,input_schema77286,input_checker77287,output_checker77288,vec__77281,opts__24583__auto__){
return (function (){var s__77324__$1 = s__77324;while(true){
var temp__4126__auto__ = cljs.core.seq(s__77324__$1);if(temp__4126__auto__)
{var s__77324__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__77324__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__77324__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__77326 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__77325 = (0);while(true){
if((i__77325 < size__21068__auto__))
{var schema__$3 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__77325);cljs.core.chunk_append(b__77326,(function (){var G__77337 = {"className": "schema"};var G__77338 = (function (){var attrs77322 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(schema__$3)], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs77322))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ident"], null)], null),attrs77322], 0))):{"className": "ident"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs77322))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs77322)], null))));
})();var G__77339 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["REF"], 0)):null));var G__77340 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["MANY"], 0)):null));return React.DOM.span(G__77337,G__77338,G__77339,G__77340);
})());
{
var G__77349 = (i__77325 + (1));
i__77325 = G__77349;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__77326),iter__77323(cljs.core.chunk_rest(s__77324__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__77326),null);
}
} else
{var schema__$3 = cljs.core.first(s__77324__$2);return cljs.core.cons((function (){var G__77341 = {"className": "schema"};var G__77342 = (function (){var attrs77322 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(schema__$3)], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs77322))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ident"], null)], null),attrs77322], 0))):{"className": "ident"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs77322))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs77322)], null))));
})();var G__77343 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["REF"], 0)):null));var G__77344 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["MANY"], 0)):null));return React.DOM.span(G__77341,G__77342,G__77343,G__77344);
})(),iter__77323(cljs.core.rest(s__77324__$2)));
}
} else
{return null;
}
break;
}
});})(___$1,owner,current_db,map77283,validate__837__auto__,ufv__,output_schema77285,input_schema77286,input_checker77287,output_checker77288,vec__77281,opts__24583__auto__))
,null,null));
});})(___$1,owner,current_db,map77283,validate__837__auto__,ufv__,output_schema77285,input_schema77286,input_checker77287,output_checker77288,vec__77281,opts__24583__auto__))
;return iter__21069__auto__(stuttaford.radiant.model.schema_for_db(self__.current_db));
})()):"No database.")], 0));
});})(owner,current_db,map77283,validate__837__auto__,ufv__,output_schema77285,input_schema77286,input_checker77287,output_checker77288,vec__77281,opts__24583__auto__))
;
stuttaford.radiant.components.t77319.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,current_db,map77283,validate__837__auto__,ufv__,output_schema77285,input_schema77286,input_checker77287,output_checker77288,vec__77281,opts__24583__auto__){
return (function (_77321){var self__ = this;
var _77321__$1 = this;return self__.meta77320;
});})(owner,current_db,map77283,validate__837__auto__,ufv__,output_schema77285,input_schema77286,input_checker77287,output_checker77288,vec__77281,opts__24583__auto__))
;
stuttaford.radiant.components.t77319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,current_db,map77283,validate__837__auto__,ufv__,output_schema77285,input_schema77286,input_checker77287,output_checker77288,vec__77281,opts__24583__auto__){
return (function (_77321,meta77320__$1){var self__ = this;
var _77321__$1 = this;return (new stuttaford.radiant.components.t77319(self__.p__77215,self__.G__77289,self__.opts__24583__auto__,self__.owner,self__.map77282,self__.output_checker77288,self__.input_schema77286,self__.schema,self__.current_db,self__.data__24582__auto__,self__.input_checker77287,self__.map77283,self__.validate__837__auto__,self__.owner77213,self__.ufv__,self__.fnk77284,self__.output_schema77285,self__.vec__77281,meta77320__$1));
});})(owner,current_db,map77283,validate__837__auto__,ufv__,output_schema77285,input_schema77286,input_checker77287,output_checker77288,vec__77281,opts__24583__auto__))
;
stuttaford.radiant.components.__GT_t77319 = ((function (owner,current_db,map77283,validate__837__auto__,ufv__,output_schema77285,input_schema77286,input_checker77287,output_checker77288,vec__77281,opts__24583__auto__){
return (function __GT_t77319(p__77215__$1,G__77289__$1,opts__24583__auto____$1,owner__$1,map77282__$1,output_checker77288__$1,input_schema77286__$1,schema__$2,current_db__$1,data__24582__auto____$1,input_checker77287__$1,map77283__$1,validate__837__auto____$1,owner77213__$1,ufv____$1,fnk77284__$1,output_schema77285__$1,vec__77281__$1,meta77320){return (new stuttaford.radiant.components.t77319(p__77215__$1,G__77289__$1,opts__24583__auto____$1,owner__$1,map77282__$1,output_checker77288__$1,input_schema77286__$1,schema__$2,current_db__$1,data__24582__auto____$1,input_checker77287__$1,map77283__$1,validate__837__auto____$1,owner77213__$1,ufv____$1,fnk77284__$1,output_schema77285__$1,vec__77281__$1,meta77320));
});})(owner,current_db,map77283,validate__837__auto__,ufv__,output_schema77285,input_schema77286,input_checker77287,output_checker77288,vec__77281,opts__24583__auto__))
;
}
return (new stuttaford.radiant.components.t77319(p__77215,G__77289,opts__24583__auto__,owner,map77282,output_checker77288,input_schema77286,schema__$1,current_db,data__24582__auto__,input_checker77287,map77283,validate__837__auto__,owner77213,ufv__,fnk77284,output_schema77285,vec__77281,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___77350 = (function (){var G__77345 = o__840__auto__;return (output_checker77288.cljs$core$IFn$_invoke$arity$1 ? output_checker77288.cljs$core$IFn$_invoke$arity$1(G__77345) : output_checker77288.call(null,G__77345));
})();if(cljs.core.truth_(temp__4126__auto___77350))
{var error__839__auto___77351 = temp__4126__auto___77350;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk77284","fnk77284",887539325,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77351], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema77285,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77351], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema77285,input_schema77286,input_checker77287,output_checker77288,vec__77281,opts__24583__auto__))
,schema.core.make_fn_schema(output_schema77285,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema77286], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24583__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner77213,new cljs.core.Keyword(null,"data","data",-232669377),data__24582__auto__], null));
};
var schema__$1 = function (data__24582__auto__,owner77213,var_args){
var p__77215 = null;if (arguments.length > 2) {
  p__77215 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return schema__$1__delegate.call(this,data__24582__auto__,owner77213,p__77215);};
schema__$1.cljs$lang$maxFixedArity = 2;
schema__$1.cljs$lang$applyTo = (function (arglist__77352){
var data__24582__auto__ = cljs.core.first(arglist__77352);
arglist__77352 = cljs.core.next(arglist__77352);
var owner77213 = cljs.core.first(arglist__77352);
var p__77215 = cljs.core.rest(arglist__77352);
return schema__$1__delegate(data__24582__auto__,owner77213,p__77215);
});
schema__$1.cljs$core$IFn$_invoke$arity$variadic = schema__$1__delegate;
return schema__$1;
})()
;
stuttaford.radiant.components.__GT_schema = (function() {
var __GT_schema = null;
var __GT_schema__1 = (function (cursor__24551__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.schema,cursor__24551__auto__);
});
var __GT_schema__2 = (function (cursor__24551__auto__,m77214){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.components.schema,cursor__24551__auto__,m77214);
});
__GT_schema = function(cursor__24551__auto__,m77214){
switch(arguments.length){
case 1:
return __GT_schema__1.call(this,cursor__24551__auto__);
case 2:
return __GT_schema__2.call(this,cursor__24551__auto__,m77214);
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
var top_nav__delegate = function (data__24582__auto__,owner77353,p__77355){var vec__77422 = p__77355;var opts__24583__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77422,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema77427 = schema.core.Any;var input_schema77428 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684)),schema.core.Any,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map77423","map77423",-342904087,null))], null);var input_checker77429 = schema.core.checker(input_schema77428);var output_checker77430 = schema.core.checker(output_schema77427);return schema.core.schematize_fn(((function (ufv__,output_schema77427,input_schema77428,input_checker77429,output_checker77430,vec__77422,opts__24583__auto__){
return (function fnk77426(G__77431){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___77488 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__77431], null);var temp__4126__auto___77489 = (function (){var G__77460 = args__838__auto___77488;return (input_checker77429.cljs$core$IFn$_invoke$arity$1 ? input_checker77429.cljs$core$IFn$_invoke$arity$1(G__77460) : input_checker77429.call(null,G__77460));
})();if(cljs.core.truth_(temp__4126__auto___77489))
{var error__839__auto___77490 = temp__4126__auto___77489;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk77426","fnk77426",-1124374824,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77490], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema77428,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___77488,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77490], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map77423 = G__77431;while(true){
if(cljs.core.map_QMARK_(map77423))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map77423], 0))));
}
var map77425 = plumbing.fnk.schema.safe_get(map77423,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(map77425,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var data_sources = plumbing.fnk.schema.safe_get(map77425,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map77425,new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684),null);var schema_visible_QMARK_ = plumbing.fnk.schema.safe_get(map77425,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map77423,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map77424 = plumbing.fnk.schema.safe_get(map77423,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var nav_items = plumbing.fnk.schema.safe_get(map77424,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));if(typeof stuttaford.radiant.components.t77461 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.components.t77461 = (function (opts__24583__auto__,current_data_source,owner,vec__77422,view,output_checker77430,schema_visible_QMARK_,map77423,owner77353,G__77431,nav_items,p__77355,input_checker77429,map77424,data_sources,data__24582__auto__,top_nav,map77425,fnk77426,output_schema77427,validate__837__auto__,ufv__,input_schema77428,meta77462){
this.opts__24583__auto__ = opts__24583__auto__;
this.current_data_source = current_data_source;
this.owner = owner;
this.vec__77422 = vec__77422;
this.view = view;
this.output_checker77430 = output_checker77430;
this.schema_visible_QMARK_ = schema_visible_QMARK_;
this.map77423 = map77423;
this.owner77353 = owner77353;
this.G__77431 = G__77431;
this.nav_items = nav_items;
this.p__77355 = p__77355;
this.input_checker77429 = input_checker77429;
this.map77424 = map77424;
this.data_sources = data_sources;
this.data__24582__auto__ = data__24582__auto__;
this.top_nav = top_nav;
this.map77425 = map77425;
this.fnk77426 = fnk77426;
this.output_schema77427 = output_schema77427;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.input_schema77428 = input_schema77428;
this.meta77462 = meta77462;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.components.t77461.cljs$lang$type = true;
stuttaford.radiant.components.t77461.cljs$lang$ctorStr = "stuttaford.radiant.components/t77461";
stuttaford.radiant.components.t77461.cljs$lang$ctorPrWriter = ((function (nav_items,map77424,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77425,validate__837__auto__,ufv__,output_schema77427,input_schema77428,input_checker77429,output_checker77430,vec__77422,opts__24583__auto__){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"stuttaford.radiant.components/t77461");
});})(nav_items,map77424,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77425,validate__837__auto__,ufv__,output_schema77427,input_schema77428,input_checker77429,output_checker77430,vec__77422,opts__24583__auto__))
;
stuttaford.radiant.components.t77461.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.components.t77461.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (nav_items,map77424,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77425,validate__837__auto__,ufv__,output_schema77427,input_schema77428,input_checker77429,output_checker77430,vec__77422,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "top-nav";
});})(nav_items,map77424,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77425,validate__837__auto__,ufv__,output_schema77427,input_schema77428,input_checker77429,output_checker77430,vec__77422,opts__24583__auto__))
;
stuttaford.radiant.components.t77461.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.components.t77461.prototype.om$core$IRenderState$render_state$arity$2 = ((function (nav_items,map77424,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77425,validate__837__auto__,ufv__,output_schema77427,input_schema77428,input_checker77429,output_checker77430,vec__77422,opts__24583__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var G__77466 = {"className": "radiant"};var G__77467 = "RADIANT";return React.DOM.div(G__77466,G__77467);
})(),om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__21069__auto__ = ((function (c,___$1,nav_items,map77424,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77425,validate__837__auto__,ufv__,output_schema77427,input_schema77428,input_checker77429,output_checker77430,vec__77422,opts__24583__auto__){
return (function iter__77468(s__77469){return (new cljs.core.LazySeq(null,((function (c,___$1,nav_items,map77424,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77425,validate__837__auto__,ufv__,output_schema77427,input_schema77428,input_checker77429,output_checker77430,vec__77422,opts__24583__auto__){
return (function (){var s__77469__$1 = s__77469;while(true){
var temp__4126__auto__ = cljs.core.seq(s__77469__$1);if(temp__4126__auto__)
{var s__77469__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__77469__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__77469__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__77471 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__77470 = (0);while(true){
if((i__77470 < size__21068__auto__))
{var vec__77480 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__77470);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77480,(0),null);var vec__77481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77480,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77481,(0),null);cljs.core.chunk_append(b__77471,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__77482 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__77470,vec__77480,id,vec__77481,label,c__21067__auto__,size__21068__auto__,b__77471,s__77469__$2,temp__4126__auto__,c,___$1,nav_items,map77424,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77425,validate__837__auto__,ufv__,output_schema77427,input_schema77428,input_checker77429,output_checker77430,vec__77422,opts__24583__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__77470,vec__77480,id,vec__77481,label,c__21067__auto__,size__21068__auto__,b__77471,s__77469__$2,temp__4126__auto__,c,___$1,nav_items,map77424,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77425,validate__837__auto__,ufv__,output_schema77427,input_schema77428,input_checker77429,output_checker77430,vec__77422,opts__24583__auto__))
], null);var G__77482__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77482,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__77482);return G__77482__$1;
})(),cljs.core.array_seq([label], 0)));
{
var G__77491 = (i__77470 + (1));
i__77470 = G__77491;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__77471),iter__77468(cljs.core.chunk_rest(s__77469__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__77471),null);
}
} else
{var vec__77483 = cljs.core.first(s__77469__$2);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77483,(0),null);var vec__77484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77483,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77484,(0),null);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__77485 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__77483,id,vec__77484,label,s__77469__$2,temp__4126__auto__,c,___$1,nav_items,map77424,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77425,validate__837__auto__,ufv__,output_schema77427,input_schema77428,input_checker77429,output_checker77430,vec__77422,opts__24583__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(vec__77483,id,vec__77484,label,s__77469__$2,temp__4126__auto__,c,___$1,nav_items,map77424,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77425,validate__837__auto__,ufv__,output_schema77427,input_schema77428,input_checker77429,output_checker77430,vec__77422,opts__24583__auto__))
], null);var G__77485__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77485,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__77485);return G__77485__$1;
})(),cljs.core.array_seq([label], 0)),iter__77468(cljs.core.rest(s__77469__$2)));
}
} else
{return null;
}
break;
}
});})(c,___$1,nav_items,map77424,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77425,validate__837__auto__,ufv__,output_schema77427,input_schema77428,input_checker77429,output_checker77430,vec__77422,opts__24583__auto__))
,null,null));
});})(c,___$1,nav_items,map77424,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77425,validate__837__auto__,ufv__,output_schema77427,input_schema77428,input_checker77429,output_checker77430,vec__77422,opts__24583__auto__))
;return iter__21069__auto__(self__.nav_items);
})()], 0)),stuttaford.radiant.components.data_source_dropdown(c,self__.data_sources,self__.current_data_source),om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__77486 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (c,___$1,nav_items,map77424,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77425,validate__837__auto__,ufv__,output_schema77427,input_schema77428,input_checker77429,output_checker77430,vec__77422,opts__24583__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-schema-visible","set-schema-visible",-1408939033),cljs.core.not(self__.schema_visible_QMARK_)], null));
});})(c,___$1,nav_items,map77424,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77425,validate__837__auto__,ufv__,output_schema77427,input_schema77428,input_checker77429,output_checker77430,vec__77422,opts__24583__auto__))
], null);var G__77486__$1 = (cljs.core.truth_(self__.schema_visible_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77486,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__77486);return G__77486__$1;
})(),cljs.core.array_seq(["Show schema"], 0))], 0));
});})(nav_items,map77424,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77425,validate__837__auto__,ufv__,output_schema77427,input_schema77428,input_checker77429,output_checker77430,vec__77422,opts__24583__auto__))
;
stuttaford.radiant.components.t77461.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (nav_items,map77424,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77425,validate__837__auto__,ufv__,output_schema77427,input_schema77428,input_checker77429,output_checker77430,vec__77422,opts__24583__auto__){
return (function (_77463){var self__ = this;
var _77463__$1 = this;return self__.meta77462;
});})(nav_items,map77424,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77425,validate__837__auto__,ufv__,output_schema77427,input_schema77428,input_checker77429,output_checker77430,vec__77422,opts__24583__auto__))
;
stuttaford.radiant.components.t77461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (nav_items,map77424,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77425,validate__837__auto__,ufv__,output_schema77427,input_schema77428,input_checker77429,output_checker77430,vec__77422,opts__24583__auto__){
return (function (_77463,meta77462__$1){var self__ = this;
var _77463__$1 = this;return (new stuttaford.radiant.components.t77461(self__.opts__24583__auto__,self__.current_data_source,self__.owner,self__.vec__77422,self__.view,self__.output_checker77430,self__.schema_visible_QMARK_,self__.map77423,self__.owner77353,self__.G__77431,self__.nav_items,self__.p__77355,self__.input_checker77429,self__.map77424,self__.data_sources,self__.data__24582__auto__,self__.top_nav,self__.map77425,self__.fnk77426,self__.output_schema77427,self__.validate__837__auto__,self__.ufv__,self__.input_schema77428,meta77462__$1));
});})(nav_items,map77424,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77425,validate__837__auto__,ufv__,output_schema77427,input_schema77428,input_checker77429,output_checker77430,vec__77422,opts__24583__auto__))
;
stuttaford.radiant.components.__GT_t77461 = ((function (nav_items,map77424,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77425,validate__837__auto__,ufv__,output_schema77427,input_schema77428,input_checker77429,output_checker77430,vec__77422,opts__24583__auto__){
return (function __GT_t77461(opts__24583__auto____$1,current_data_source__$1,owner__$1,vec__77422__$1,view__$1,output_checker77430__$1,schema_visible_QMARK___$1,map77423__$1,owner77353__$1,G__77431__$1,nav_items__$1,p__77355__$1,input_checker77429__$1,map77424__$1,data_sources__$1,data__24582__auto____$1,top_nav__$1,map77425__$1,fnk77426__$1,output_schema77427__$1,validate__837__auto____$1,ufv____$1,input_schema77428__$1,meta77462){return (new stuttaford.radiant.components.t77461(opts__24583__auto____$1,current_data_source__$1,owner__$1,vec__77422__$1,view__$1,output_checker77430__$1,schema_visible_QMARK___$1,map77423__$1,owner77353__$1,G__77431__$1,nav_items__$1,p__77355__$1,input_checker77429__$1,map77424__$1,data_sources__$1,data__24582__auto____$1,top_nav__$1,map77425__$1,fnk77426__$1,output_schema77427__$1,validate__837__auto____$1,ufv____$1,input_schema77428__$1,meta77462));
});})(nav_items,map77424,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map77425,validate__837__auto__,ufv__,output_schema77427,input_schema77428,input_checker77429,output_checker77430,vec__77422,opts__24583__auto__))
;
}
return (new stuttaford.radiant.components.t77461(opts__24583__auto__,current_data_source,owner,vec__77422,view,output_checker77430,schema_visible_QMARK_,map77423,owner77353,G__77431,nav_items,p__77355,input_checker77429,map77424,data_sources,data__24582__auto__,top_nav,map77425,fnk77426,output_schema77427,validate__837__auto__,ufv__,input_schema77428,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___77492 = (function (){var G__77487 = o__840__auto__;return (output_checker77430.cljs$core$IFn$_invoke$arity$1 ? output_checker77430.cljs$core$IFn$_invoke$arity$1(G__77487) : output_checker77430.call(null,G__77487));
})();if(cljs.core.truth_(temp__4126__auto___77492))
{var error__839__auto___77493 = temp__4126__auto___77492;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk77426","fnk77426",-1124374824,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77493], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema77427,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77493], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema77427,input_schema77428,input_checker77429,output_checker77430,vec__77422,opts__24583__auto__))
,schema.core.make_fn_schema(output_schema77427,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema77428], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24583__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner77353,new cljs.core.Keyword(null,"data","data",-232669377),data__24582__auto__], null));
};
var top_nav = function (data__24582__auto__,owner77353,var_args){
var p__77355 = null;if (arguments.length > 2) {
  p__77355 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return top_nav__delegate.call(this,data__24582__auto__,owner77353,p__77355);};
top_nav.cljs$lang$maxFixedArity = 2;
top_nav.cljs$lang$applyTo = (function (arglist__77494){
var data__24582__auto__ = cljs.core.first(arglist__77494);
arglist__77494 = cljs.core.next(arglist__77494);
var owner77353 = cljs.core.first(arglist__77494);
var p__77355 = cljs.core.rest(arglist__77494);
return top_nav__delegate(data__24582__auto__,owner77353,p__77355);
});
top_nav.cljs$core$IFn$_invoke$arity$variadic = top_nav__delegate;
return top_nav;
})()
;
stuttaford.radiant.components.__GT_top_nav = (function() {
var __GT_top_nav = null;
var __GT_top_nav__1 = (function (cursor__24551__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.top_nav,cursor__24551__auto__);
});
var __GT_top_nav__2 = (function (cursor__24551__auto__,m77354){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.components.top_nav,cursor__24551__auto__,m77354);
});
__GT_top_nav = function(cursor__24551__auto__,m77354){
switch(arguments.length){
case 1:
return __GT_top_nav__1.call(this,cursor__24551__auto__);
case 2:
return __GT_top_nav__2.call(this,cursor__24551__auto__,m77354);
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
stuttaford.radiant.components.paginate_label = (function paginate_label(current_page,rows){var start = (stuttaford.radiant.components.PAGE_SIZE * current_page);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((start + (1)))+" - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__20331__auto__ = (start + stuttaford.radiant.components.PAGE_SIZE);var y__20332__auto__ = cljs.core.count(rows);return ((x__20331__auto__ < y__20332__auto__) ? x__20331__auto__ : y__20332__auto__);
})()));
});
stuttaford.radiant.components.sort_rows = (function sort_rows(sort_col,rows){return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__77495_SHARP_){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__77495_SHARP_,sort_col);
}),rows);
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.components.result_table = (function() { 
var result_table__delegate = function (data__24582__auto__,owner77496,p__77498){var vec__77649 = p__77498;var opts__24583__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77649,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema77654 = schema.core.Any;var input_schema77655 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260)),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"rows","rows",850049680),schema.core.Any,new cljs.core.Keyword(null,"cols","cols",-1914801295),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map77650","map77650",-1409324412,null))], null);var input_checker77656 = schema.core.checker(input_schema77655);var output_checker77657 = schema.core.checker(output_schema77654);return schema.core.schematize_fn(((function (ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__){
return (function fnk77653(G__77658){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___77799 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__77658], null);var temp__4126__auto___77800 = (function (){var G__77729 = args__838__auto___77799;return (input_checker77656.cljs$core$IFn$_invoke$arity$1 ? input_checker77656.cljs$core$IFn$_invoke$arity$1(G__77729) : input_checker77656.call(null,G__77729));
})();if(cljs.core.truth_(temp__4126__auto___77800))
{var error__839__auto___77801 = temp__4126__auto___77800;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk77653","fnk77653",-1147582656,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77801], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema77655,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___77799,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77801], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map77650 = G__77658;while(true){
if(cljs.core.map_QMARK_(map77650))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map77650], 0))));
}
var map77652 = plumbing.fnk.schema.safe_get(map77650,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var cols = plumbing.fnk.schema.safe_get(map77652,new cljs.core.Keyword(null,"cols","cols",-1914801295),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var rows = plumbing.fnk.schema.safe_get(map77652,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map77650,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map77651 = plumbing.fnk.schema.safe_get(map77650,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var allow_sorting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map77651,new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),false);if(typeof stuttaford.radiant.components.t77730 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.components.t77730 = (function (map77651,fnk77653,opts__24583__auto__,owner,map77650,output_checker77657,map77652,result_table,allow_sorting_QMARK_,data__24582__auto__,input_schema77655,owner77496,rows,vec__77649,cols,p__77498,output_schema77654,G__77658,validate__837__auto__,ufv__,input_checker77656,meta77731){
this.map77651 = map77651;
this.fnk77653 = fnk77653;
this.opts__24583__auto__ = opts__24583__auto__;
this.owner = owner;
this.map77650 = map77650;
this.output_checker77657 = output_checker77657;
this.map77652 = map77652;
this.result_table = result_table;
this.allow_sorting_QMARK_ = allow_sorting_QMARK_;
this.data__24582__auto__ = data__24582__auto__;
this.input_schema77655 = input_schema77655;
this.owner77496 = owner77496;
this.rows = rows;
this.vec__77649 = vec__77649;
this.cols = cols;
this.p__77498 = p__77498;
this.output_schema77654 = output_schema77654;
this.G__77658 = G__77658;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.input_checker77656 = input_checker77656;
this.meta77731 = meta77731;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.components.t77730.cljs$lang$type = true;
stuttaford.radiant.components.t77730.cljs$lang$ctorStr = "stuttaford.radiant.components/t77730";
stuttaford.radiant.components.t77730.cljs$lang$ctorPrWriter = ((function (allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"stuttaford.radiant.components/t77730");
});})(allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__))
;
stuttaford.radiant.components.t77730.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.components.t77730.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "result-table";
});})(allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__))
;
stuttaford.radiant.components.t77730.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.components.t77730.prototype.om$core$IRenderState$render_state$arity$2 = ((function (allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__){
return (function (_,p__77733){var self__ = this;
var map__77734 = p__77733;var map__77734__$1 = ((cljs.core.seq_QMARK_(map__77734))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77734):map__77734);var current_page = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77734__$1,new cljs.core.Keyword(null,"current-page","current-page",-101294180),(0));var sort_col = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77734__$1,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882),(0));var ___$1 = this;var page_count = cljs.core.count(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.PAGE_SIZE,self__.rows));var paginate_QMARK_ = (page_count > (1));var G__77736 = null;var G__77737 = (function (){var G__77739 = {"className": "result-pagination"};var G__77740 = (function (){var attrs77735 = cljs.core.count(self__.rows);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs77735))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-count"], null)], null),attrs77735], 0))):{"className": "item-count"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs77735))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" items",sablono.interpreter.interpret(((paginate_QMARK_)?(" \u00B7 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(stuttaford.radiant.components.paginate_label(current_page,self__.rows))):null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs77735)," items",sablono.interpreter.interpret(((paginate_QMARK_)?(" \u00B7 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(stuttaford.radiant.components.paginate_label(current_page,self__.rows))):null))], null))));
})();var G__77741 = sablono.interpreter.interpret(((paginate_QMARK_)?om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__21069__auto__ = ((function (G__77739,G__77740,G__77736,page_count,paginate_QMARK_,___$1,map__77734,map__77734__$1,current_page,sort_col,allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__){
return (function iter__77742(s__77743){return (new cljs.core.LazySeq(null,((function (G__77739,G__77740,G__77736,page_count,paginate_QMARK_,___$1,map__77734,map__77734__$1,current_page,sort_col,allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__){
return (function (){var s__77743__$1 = s__77743;while(true){
var temp__4126__auto__ = cljs.core.seq(s__77743__$1);if(temp__4126__auto__)
{var s__77743__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__77743__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__77743__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__77745 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__77744 = (0);while(true){
if((i__77744 < size__21068__auto__))
{var page = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__77744);cljs.core.chunk_append(b__77745,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__77750 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__77744,page,c__21067__auto__,size__21068__auto__,b__77745,s__77743__$2,temp__4126__auto__,G__77739,G__77740,G__77736,page_count,paginate_QMARK_,___$1,map__77734,map__77734__$1,current_page,sort_col,allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page);
});})(i__77744,page,c__21067__auto__,size__21068__auto__,b__77745,s__77743__$2,temp__4126__auto__,G__77739,G__77740,G__77736,page_count,paginate_QMARK_,___$1,map__77734,map__77734__$1,current_page,sort_col,allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__))
], null);var G__77750__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77750,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__77750);return G__77750__$1;
})(),cljs.core.array_seq([(page + (1))], 0)));
{
var G__77802 = (i__77744 + (1));
i__77744 = G__77802;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__77745),iter__77742(cljs.core.chunk_rest(s__77743__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__77745),null);
}
} else
{var page = cljs.core.first(s__77743__$2);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__77751 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (page,s__77743__$2,temp__4126__auto__,G__77739,G__77740,G__77736,page_count,paginate_QMARK_,___$1,map__77734,map__77734__$1,current_page,sort_col,allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page);
});})(page,s__77743__$2,temp__4126__auto__,G__77739,G__77740,G__77736,page_count,paginate_QMARK_,___$1,map__77734,map__77734__$1,current_page,sort_col,allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__))
], null);var G__77751__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77751,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__77751);return G__77751__$1;
})(),cljs.core.array_seq([(page + (1))], 0)),iter__77742(cljs.core.rest(s__77743__$2)));
}
} else
{return null;
}
break;
}
});})(G__77739,G__77740,G__77736,page_count,paginate_QMARK_,___$1,map__77734,map__77734__$1,current_page,sort_col,allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__))
,null,null));
});})(G__77739,G__77740,G__77736,page_count,paginate_QMARK_,___$1,map__77734,map__77734__$1,current_page,sort_col,allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__))
;return iter__21069__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(page_count));
})()], 0)):null));return React.DOM.div(G__77739,G__77740,G__77741);
})();var G__77738 = sablono.interpreter.interpret(om_bootstrap.table.table.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"striped?","striped?",-797214979),true,new cljs.core.Keyword(null,"bordered?","bordered?",562358476),true,new cljs.core.Keyword(null,"condensed?","condensed?",-109797520),true,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),true], null),cljs.core.array_seq([cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__77756 = null;var G__77757 = (function (){var attrs77754 = cljs.core.map_indexed(((function (G__77756,G__77736,G__77737,page_count,paginate_QMARK_,___$1,map__77734,map__77734__$1,current_page,sort_col,allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__){
return (function (i,v){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),(cljs.core.truth_(self__.allow_sorting_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__77756,G__77736,G__77737,page_count,paginate_QMARK_,___$1,map__77734,map__77734__$1,current_page,sort_col,allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882),i);
});})(G__77756,G__77736,G__77737,page_count,paginate_QMARK_,___$1,map__77734,map__77734__$1,current_page,sort_col,allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__))
], null):null),v,(cljs.core.truth_((function (){var and__19697__auto__ = self__.allow_sorting_QMARK_;if(cljs.core.truth_(and__19697__auto__))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,sort_col);
} else
{return and__19697__auto__;
}
})())?cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-chevron-down","span.glyphicon.glyphicon-chevron-down",-62425995)], null))," "):null)], null);
});})(G__77756,G__77736,G__77737,page_count,paginate_QMARK_,___$1,map__77734,map__77734__$1,current_page,sort_col,allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__))
,self__.cols);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tr,((cljs.core.map_QMARK_(attrs77754))?sablono.interpreter.attributes(attrs77754):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs77754))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs77754)], null))));
})();return React.DOM.thead(G__77756,G__77757);
})(),(function (){var G__77758 = null;var G__77759 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__21069__auto__ = ((function (G__77758,G__77736,G__77737,page_count,paginate_QMARK_,___$1,map__77734,map__77734__$1,current_page,sort_col,allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__){
return (function iter__77760(s__77761){return (new cljs.core.LazySeq(null,((function (G__77758,G__77736,G__77737,page_count,paginate_QMARK_,___$1,map__77734,map__77734__$1,current_page,sort_col,allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__){
return (function (){var s__77761__$1 = s__77761;while(true){
var temp__4126__auto__ = cljs.core.seq(s__77761__$1);if(temp__4126__auto__)
{var s__77761__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__77761__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__77761__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__77763 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__77762 = (0);while(true){
if((i__77762 < size__21068__auto__))
{var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__77762);cljs.core.chunk_append(b__77763,(function (){var G__77782 = null;var G__77783 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__21069__auto__ = ((function (i__77762,G__77782,row,c__21067__auto__,size__21068__auto__,b__77763,s__77761__$2,temp__4126__auto__,G__77758,G__77736,G__77737,page_count,paginate_QMARK_,___$1,map__77734,map__77734__$1,current_page,sort_col,allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__){
return (function iter__77784(s__77785){return (new cljs.core.LazySeq(null,((function (i__77762,G__77782,row,c__21067__auto__,size__21068__auto__,b__77763,s__77761__$2,temp__4126__auto__,G__77758,G__77736,G__77737,page_count,paginate_QMARK_,___$1,map__77734,map__77734__$1,current_page,sort_col,allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__){
return (function (){var s__77785__$1 = s__77785;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__77785__$1);if(temp__4126__auto____$1)
{var s__77785__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__77785__$2))
{var c__21067__auto____$1 = cljs.core.chunk_first(s__77785__$2);var size__21068__auto____$1 = cljs.core.count(c__21067__auto____$1);var b__77787 = cljs.core.chunk_buffer(size__21068__auto____$1);if((function (){var i__77786 = (0);while(true){
if((i__77786 < size__21068__auto____$1))
{var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto____$1,i__77786);cljs.core.chunk_append(b__77787,(function (){var attrs77755 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs77755))?sablono.interpreter.attributes(attrs77755):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs77755))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs77755)], null))));
})());
{
var G__77803 = (i__77786 + (1));
i__77786 = G__77803;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__77787),iter__77784(cljs.core.chunk_rest(s__77785__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__77787),null);
}
} else
{var value = cljs.core.first(s__77785__$2);return cljs.core.cons((function (){var attrs77755 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs77755))?sablono.interpreter.attributes(attrs77755):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs77755))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs77755)], null))));
})(),iter__77784(cljs.core.rest(s__77785__$2)));
}
} else
{return null;
}
break;
}
});})(i__77762,G__77782,row,c__21067__auto__,size__21068__auto__,b__77763,s__77761__$2,temp__4126__auto__,G__77758,G__77736,G__77737,page_count,paginate_QMARK_,___$1,map__77734,map__77734__$1,current_page,sort_col,allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__))
,null,null));
});})(i__77762,G__77782,row,c__21067__auto__,size__21068__auto__,b__77763,s__77761__$2,temp__4126__auto__,G__77758,G__77736,G__77737,page_count,paginate_QMARK_,___$1,map__77734,map__77734__$1,current_page,sort_col,allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__))
;return iter__21069__auto__(row);
})());return React.DOM.tr(G__77782,G__77783);
})());
{
var G__77804 = (i__77762 + (1));
i__77762 = G__77804;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__77763),iter__77760(cljs.core.chunk_rest(s__77761__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__77763),null);
}
} else
{var row = cljs.core.first(s__77761__$2);return cljs.core.cons((function (){var G__77790 = null;var G__77791 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__21069__auto__ = ((function (G__77790,row,s__77761__$2,temp__4126__auto__,G__77758,G__77736,G__77737,page_count,paginate_QMARK_,___$1,map__77734,map__77734__$1,current_page,sort_col,allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__){
return (function iter__77792(s__77793){return (new cljs.core.LazySeq(null,((function (G__77790,row,s__77761__$2,temp__4126__auto__,G__77758,G__77736,G__77737,page_count,paginate_QMARK_,___$1,map__77734,map__77734__$1,current_page,sort_col,allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__){
return (function (){var s__77793__$1 = s__77793;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__77793__$1);if(temp__4126__auto____$1)
{var s__77793__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__77793__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__77793__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__77795 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__77794 = (0);while(true){
if((i__77794 < size__21068__auto__))
{var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__77794);cljs.core.chunk_append(b__77795,(function (){var attrs77755 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs77755))?sablono.interpreter.attributes(attrs77755):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs77755))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs77755)], null))));
})());
{
var G__77805 = (i__77794 + (1));
i__77794 = G__77805;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__77795),iter__77792(cljs.core.chunk_rest(s__77793__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__77795),null);
}
} else
{var value = cljs.core.first(s__77793__$2);return cljs.core.cons((function (){var attrs77755 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs77755))?sablono.interpreter.attributes(attrs77755):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs77755))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs77755)], null))));
})(),iter__77792(cljs.core.rest(s__77793__$2)));
}
} else
{return null;
}
break;
}
});})(G__77790,row,s__77761__$2,temp__4126__auto__,G__77758,G__77736,G__77737,page_count,paginate_QMARK_,___$1,map__77734,map__77734__$1,current_page,sort_col,allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__))
,null,null));
});})(G__77790,row,s__77761__$2,temp__4126__auto__,G__77758,G__77736,G__77737,page_count,paginate_QMARK_,___$1,map__77734,map__77734__$1,current_page,sort_col,allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__))
;return iter__21069__auto__(row);
})());return React.DOM.tr(G__77790,G__77791);
})(),iter__77760(cljs.core.rest(s__77761__$2)));
}
} else
{return null;
}
break;
}
});})(G__77758,G__77736,G__77737,page_count,paginate_QMARK_,___$1,map__77734,map__77734__$1,current_page,sort_col,allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__))
,null,null));
});})(G__77758,G__77736,G__77737,page_count,paginate_QMARK_,___$1,map__77734,map__77734__$1,current_page,sort_col,allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__))
;return iter__21069__auto__(stuttaford.radiant.components.sort_rows(sort_col,stuttaford.radiant.components.paginate(current_page,self__.rows)));
})());return React.DOM.tbody(G__77758,G__77759);
})()], null))], 0)));return React.DOM.div(G__77736,G__77737,G__77738);
});})(allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__))
;
stuttaford.radiant.components.t77730.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__){
return (function (_77732){var self__ = this;
var _77732__$1 = this;return self__.meta77731;
});})(allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__))
;
stuttaford.radiant.components.t77730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__){
return (function (_77732,meta77731__$1){var self__ = this;
var _77732__$1 = this;return (new stuttaford.radiant.components.t77730(self__.map77651,self__.fnk77653,self__.opts__24583__auto__,self__.owner,self__.map77650,self__.output_checker77657,self__.map77652,self__.result_table,self__.allow_sorting_QMARK_,self__.data__24582__auto__,self__.input_schema77655,self__.owner77496,self__.rows,self__.vec__77649,self__.cols,self__.p__77498,self__.output_schema77654,self__.G__77658,self__.validate__837__auto__,self__.ufv__,self__.input_checker77656,meta77731__$1));
});})(allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__))
;
stuttaford.radiant.components.__GT_t77730 = ((function (allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__){
return (function __GT_t77730(map77651__$1,fnk77653__$1,opts__24583__auto____$1,owner__$1,map77650__$1,output_checker77657__$1,map77652__$1,result_table__$1,allow_sorting_QMARK___$1,data__24582__auto____$1,input_schema77655__$1,owner77496__$1,rows__$1,vec__77649__$1,cols__$1,p__77498__$1,output_schema77654__$1,G__77658__$1,validate__837__auto____$1,ufv____$1,input_checker77656__$1,meta77731){return (new stuttaford.radiant.components.t77730(map77651__$1,fnk77653__$1,opts__24583__auto____$1,owner__$1,map77650__$1,output_checker77657__$1,map77652__$1,result_table__$1,allow_sorting_QMARK___$1,data__24582__auto____$1,input_schema77655__$1,owner77496__$1,rows__$1,vec__77649__$1,cols__$1,p__77498__$1,output_schema77654__$1,G__77658__$1,validate__837__auto____$1,ufv____$1,input_checker77656__$1,meta77731));
});})(allow_sorting_QMARK_,map77651,owner,rows,cols,map77652,validate__837__auto__,ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__))
;
}
return (new stuttaford.radiant.components.t77730(map77651,fnk77653,opts__24583__auto__,owner,map77650,output_checker77657,map77652,result_table,allow_sorting_QMARK_,data__24582__auto__,input_schema77655,owner77496,rows,vec__77649,cols,p__77498,output_schema77654,G__77658,validate__837__auto__,ufv__,input_checker77656,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___77806 = (function (){var G__77798 = o__840__auto__;return (output_checker77657.cljs$core$IFn$_invoke$arity$1 ? output_checker77657.cljs$core$IFn$_invoke$arity$1(G__77798) : output_checker77657.call(null,G__77798));
})();if(cljs.core.truth_(temp__4126__auto___77806))
{var error__839__auto___77807 = temp__4126__auto___77806;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk77653","fnk77653",-1147582656,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77807], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema77654,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77807], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema77654,input_schema77655,input_checker77656,output_checker77657,vec__77649,opts__24583__auto__))
,schema.core.make_fn_schema(output_schema77654,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema77655], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24583__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner77496,new cljs.core.Keyword(null,"data","data",-232669377),data__24582__auto__], null));
};
var result_table = function (data__24582__auto__,owner77496,var_args){
var p__77498 = null;if (arguments.length > 2) {
  p__77498 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return result_table__delegate.call(this,data__24582__auto__,owner77496,p__77498);};
result_table.cljs$lang$maxFixedArity = 2;
result_table.cljs$lang$applyTo = (function (arglist__77808){
var data__24582__auto__ = cljs.core.first(arglist__77808);
arglist__77808 = cljs.core.next(arglist__77808);
var owner77496 = cljs.core.first(arglist__77808);
var p__77498 = cljs.core.rest(arglist__77808);
return result_table__delegate(data__24582__auto__,owner77496,p__77498);
});
result_table.cljs$core$IFn$_invoke$arity$variadic = result_table__delegate;
return result_table;
})()
;
stuttaford.radiant.components.__GT_result_table = (function() {
var __GT_result_table = null;
var __GT_result_table__1 = (function (cursor__24551__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.result_table,cursor__24551__auto__);
});
var __GT_result_table__2 = (function (cursor__24551__auto__,m77497){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.components.result_table,cursor__24551__auto__,m77497);
});
__GT_result_table = function(cursor__24551__auto__,m77497){
switch(arguments.length){
case 1:
return __GT_result_table__1.call(this,cursor__24551__auto__);
case 2:
return __GT_result_table__2.call(this,cursor__24551__auto__,m77497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_result_table.cljs$core$IFn$_invoke$arity$1 = __GT_result_table__1;
__GT_result_table.cljs$core$IFn$_invoke$arity$2 = __GT_result_table__2;
return __GT_result_table;
})()
;
//# sourceMappingURL=components.js.map