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
stuttaford.radiant.components.data_source_dropdown = (function data_source_dropdown(c,data_sources,current_data_source){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om_bootstrap.button.dropdown,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),stuttaford.radiant.model.data_source_label(data_sources,current_data_source)], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var iter__20990__auto__ = (function iter__56888(s__56889){return (new cljs.core.LazySeq(null,(function (){var s__56889__$1 = s__56889;while(true){
var temp__4126__auto__ = cljs.core.seq(s__56889__$1);if(temp__4126__auto__)
{var s__56889__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__56889__$2))
{var c__20988__auto__ = cljs.core.chunk_first(s__56889__$2);var size__20989__auto__ = cljs.core.count(c__20988__auto__);var b__56891 = cljs.core.chunk_buffer(size__20989__auto__);if((function (){var i__56890 = (0);while(true){
if((i__56890 < size__20989__auto__))
{var map__56896 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto__,i__56890);var map__56896__$1 = ((cljs.core.seq_QMARK_(map__56896))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56896):map__56896);var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56896__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56896__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append(b__56891,stuttaford.radiant.components.data_source_item(c,id,label));
{
var G__56898 = (i__56890 + (1));
i__56890 = G__56898;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__56891),iter__56888(cljs.core.chunk_rest(s__56889__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__56891),null);
}
} else
{var map__56897 = cljs.core.first(s__56889__$2);var map__56897__$1 = ((cljs.core.seq_QMARK_(map__56897))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56897):map__56897);var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56897__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56897__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons(stuttaford.radiant.components.data_source_item(c,id,label),iter__56888(cljs.core.rest(s__56889__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20990__auto__(cljs.core.vals(data_sources));
})()));
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.components.schema = (function() { 
var schema__$1__delegate = function (data__24427__auto__,owner56899,p__56901){var vec__56967 = p__56901;var opts__24428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56967,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema56971 = schema.core.Any;var input_schema56972 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-db","current-db",213667882)),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map56968","map56968",-2055871540,null))], null);var input_checker56973 = schema.core.checker(input_schema56972);var output_checker56974 = schema.core.checker(output_schema56971);return schema.core.schematize_fn(((function (ufv__,output_schema56971,input_schema56972,input_checker56973,output_checker56974,vec__56967,opts__24428__auto__){
return (function fnk56970(G__56975){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57032 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__56975], null);var temp__4126__auto___57033 = (function (){var G__57004 = args__838__auto___57032;return (input_checker56973.cljs$core$IFn$_invoke$arity$1 ? input_checker56973.cljs$core$IFn$_invoke$arity$1(G__57004) : input_checker56973.call(null,G__57004));
})();if(cljs.core.truth_(temp__4126__auto___57033))
{var error__839__auto___57034 = temp__4126__auto___57033;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk56970","fnk56970",-495335027,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57034], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56972,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57032,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57034], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map56968 = G__56975;while(true){
if(cljs.core.map_QMARK_(map56968))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map56968], 0))));
}
var map56969 = plumbing.fnk.schema.safe_get(map56968,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var current_db = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map56969,new cljs.core.Keyword(null,"current-db","current-db",213667882),null);var owner = plumbing.fnk.schema.safe_get(map56968,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.components.t57005 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.components.t57005 = (function (input_schema56972,owner,output_checker56974,schema,map56969,map56968,fnk56970,p__56901,current_db,G__56975,vec__56967,input_checker56973,output_schema56971,owner56899,validate__837__auto__,data__24427__auto__,ufv__,opts__24428__auto__,meta57006){
this.input_schema56972 = input_schema56972;
this.owner = owner;
this.output_checker56974 = output_checker56974;
this.schema = schema;
this.map56969 = map56969;
this.map56968 = map56968;
this.fnk56970 = fnk56970;
this.p__56901 = p__56901;
this.current_db = current_db;
this.G__56975 = G__56975;
this.vec__56967 = vec__56967;
this.input_checker56973 = input_checker56973;
this.output_schema56971 = output_schema56971;
this.owner56899 = owner56899;
this.validate__837__auto__ = validate__837__auto__;
this.data__24427__auto__ = data__24427__auto__;
this.ufv__ = ufv__;
this.opts__24428__auto__ = opts__24428__auto__;
this.meta57006 = meta57006;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.components.t57005.cljs$lang$type = true;
stuttaford.radiant.components.t57005.cljs$lang$ctorStr = "stuttaford.radiant.components/t57005";
stuttaford.radiant.components.t57005.cljs$lang$ctorPrWriter = ((function (owner,current_db,map56969,validate__837__auto__,ufv__,output_schema56971,input_schema56972,input_checker56973,output_checker56974,vec__56967,opts__24428__auto__){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"stuttaford.radiant.components/t57005");
});})(owner,current_db,map56969,validate__837__auto__,ufv__,output_schema56971,input_schema56972,input_checker56973,output_checker56974,vec__56967,opts__24428__auto__))
;
stuttaford.radiant.components.t57005.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.components.t57005.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,current_db,map56969,validate__837__auto__,ufv__,output_schema56971,input_schema56972,input_checker56973,output_checker56974,vec__56967,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "schema";
});})(owner,current_db,map56969,validate__837__auto__,ufv__,output_schema56971,input_schema56972,input_checker56973,output_checker56974,vec__56967,opts__24428__auto__))
;
stuttaford.radiant.components.t57005.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.components.t57005.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,current_db,map56969,validate__837__auto__,ufv__,output_schema56971,input_schema56972,input_checker56973,output_checker56974,vec__56967,opts__24428__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),"Schema"], null),cljs.core.array_seq([(cljs.core.truth_(self__.current_db)?cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20990__auto__ = ((function (___$1,owner,current_db,map56969,validate__837__auto__,ufv__,output_schema56971,input_schema56972,input_checker56973,output_checker56974,vec__56967,opts__24428__auto__){
return (function iter__57009(s__57010){return (new cljs.core.LazySeq(null,((function (___$1,owner,current_db,map56969,validate__837__auto__,ufv__,output_schema56971,input_schema56972,input_checker56973,output_checker56974,vec__56967,opts__24428__auto__){
return (function (){var s__57010__$1 = s__57010;while(true){
var temp__4126__auto__ = cljs.core.seq(s__57010__$1);if(temp__4126__auto__)
{var s__57010__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__57010__$2))
{var c__20988__auto__ = cljs.core.chunk_first(s__57010__$2);var size__20989__auto__ = cljs.core.count(c__20988__auto__);var b__57012 = cljs.core.chunk_buffer(size__20989__auto__);if((function (){var i__57011 = (0);while(true){
if((i__57011 < size__20989__auto__))
{var schema__$3 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto__,i__57011);cljs.core.chunk_append(b__57012,(function (){var G__57023 = {"className": "schema"};var G__57024 = (function (){var attrs57008 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(schema__$3)], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs57008))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ident"], null)], null),attrs57008], 0))):{"className": "ident"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs57008))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs57008)], null))));
})();var G__57025 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["REF"], 0)):null));var G__57026 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["MANY"], 0)):null));return React.DOM.span(G__57023,G__57024,G__57025,G__57026);
})());
{
var G__57035 = (i__57011 + (1));
i__57011 = G__57035;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__57012),iter__57009(cljs.core.chunk_rest(s__57010__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__57012),null);
}
} else
{var schema__$3 = cljs.core.first(s__57010__$2);return cljs.core.cons((function (){var G__57027 = {"className": "schema"};var G__57028 = (function (){var attrs57008 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(schema__$3)], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs57008))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ident"], null)], null),attrs57008], 0))):{"className": "ident"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs57008))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs57008)], null))));
})();var G__57029 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["REF"], 0)):null));var G__57030 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["MANY"], 0)):null));return React.DOM.span(G__57027,G__57028,G__57029,G__57030);
})(),iter__57009(cljs.core.rest(s__57010__$2)));
}
} else
{return null;
}
break;
}
});})(___$1,owner,current_db,map56969,validate__837__auto__,ufv__,output_schema56971,input_schema56972,input_checker56973,output_checker56974,vec__56967,opts__24428__auto__))
,null,null));
});})(___$1,owner,current_db,map56969,validate__837__auto__,ufv__,output_schema56971,input_schema56972,input_checker56973,output_checker56974,vec__56967,opts__24428__auto__))
;return iter__20990__auto__(stuttaford.radiant.model.schema_for_db(self__.current_db));
})()):"No database.")], 0));
});})(owner,current_db,map56969,validate__837__auto__,ufv__,output_schema56971,input_schema56972,input_checker56973,output_checker56974,vec__56967,opts__24428__auto__))
;
stuttaford.radiant.components.t57005.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,current_db,map56969,validate__837__auto__,ufv__,output_schema56971,input_schema56972,input_checker56973,output_checker56974,vec__56967,opts__24428__auto__){
return (function (_57007){var self__ = this;
var _57007__$1 = this;return self__.meta57006;
});})(owner,current_db,map56969,validate__837__auto__,ufv__,output_schema56971,input_schema56972,input_checker56973,output_checker56974,vec__56967,opts__24428__auto__))
;
stuttaford.radiant.components.t57005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,current_db,map56969,validate__837__auto__,ufv__,output_schema56971,input_schema56972,input_checker56973,output_checker56974,vec__56967,opts__24428__auto__){
return (function (_57007,meta57006__$1){var self__ = this;
var _57007__$1 = this;return (new stuttaford.radiant.components.t57005(self__.input_schema56972,self__.owner,self__.output_checker56974,self__.schema,self__.map56969,self__.map56968,self__.fnk56970,self__.p__56901,self__.current_db,self__.G__56975,self__.vec__56967,self__.input_checker56973,self__.output_schema56971,self__.owner56899,self__.validate__837__auto__,self__.data__24427__auto__,self__.ufv__,self__.opts__24428__auto__,meta57006__$1));
});})(owner,current_db,map56969,validate__837__auto__,ufv__,output_schema56971,input_schema56972,input_checker56973,output_checker56974,vec__56967,opts__24428__auto__))
;
stuttaford.radiant.components.__GT_t57005 = ((function (owner,current_db,map56969,validate__837__auto__,ufv__,output_schema56971,input_schema56972,input_checker56973,output_checker56974,vec__56967,opts__24428__auto__){
return (function __GT_t57005(input_schema56972__$1,owner__$1,output_checker56974__$1,schema__$2,map56969__$1,map56968__$1,fnk56970__$1,p__56901__$1,current_db__$1,G__56975__$1,vec__56967__$1,input_checker56973__$1,output_schema56971__$1,owner56899__$1,validate__837__auto____$1,data__24427__auto____$1,ufv____$1,opts__24428__auto____$1,meta57006){return (new stuttaford.radiant.components.t57005(input_schema56972__$1,owner__$1,output_checker56974__$1,schema__$2,map56969__$1,map56968__$1,fnk56970__$1,p__56901__$1,current_db__$1,G__56975__$1,vec__56967__$1,input_checker56973__$1,output_schema56971__$1,owner56899__$1,validate__837__auto____$1,data__24427__auto____$1,ufv____$1,opts__24428__auto____$1,meta57006));
});})(owner,current_db,map56969,validate__837__auto__,ufv__,output_schema56971,input_schema56972,input_checker56973,output_checker56974,vec__56967,opts__24428__auto__))
;
}
return (new stuttaford.radiant.components.t57005(input_schema56972,owner,output_checker56974,schema__$1,map56969,map56968,fnk56970,p__56901,current_db,G__56975,vec__56967,input_checker56973,output_schema56971,owner56899,validate__837__auto__,data__24427__auto__,ufv__,opts__24428__auto__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57036 = (function (){var G__57031 = o__840__auto__;return (output_checker56974.cljs$core$IFn$_invoke$arity$1 ? output_checker56974.cljs$core$IFn$_invoke$arity$1(G__57031) : output_checker56974.call(null,G__57031));
})();if(cljs.core.truth_(temp__4126__auto___57036))
{var error__839__auto___57037 = temp__4126__auto___57036;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk56970","fnk56970",-495335027,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57037], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56971,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57037], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema56971,input_schema56972,input_checker56973,output_checker56974,vec__56967,opts__24428__auto__))
,schema.core.make_fn_schema(output_schema56971,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56972], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24428__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner56899,new cljs.core.Keyword(null,"data","data",-232669377),data__24427__auto__], null));
};
var schema__$1 = function (data__24427__auto__,owner56899,var_args){
var p__56901 = null;if (arguments.length > 2) {
  p__56901 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return schema__$1__delegate.call(this,data__24427__auto__,owner56899,p__56901);};
schema__$1.cljs$lang$maxFixedArity = 2;
schema__$1.cljs$lang$applyTo = (function (arglist__57038){
var data__24427__auto__ = cljs.core.first(arglist__57038);
arglist__57038 = cljs.core.next(arglist__57038);
var owner56899 = cljs.core.first(arglist__57038);
var p__56901 = cljs.core.rest(arglist__57038);
return schema__$1__delegate(data__24427__auto__,owner56899,p__56901);
});
schema__$1.cljs$core$IFn$_invoke$arity$variadic = schema__$1__delegate;
return schema__$1;
})()
;
stuttaford.radiant.components.__GT_schema = (function() {
var __GT_schema = null;
var __GT_schema__1 = (function (cursor__24396__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.schema,cursor__24396__auto__);
});
var __GT_schema__2 = (function (cursor__24396__auto__,m56900){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.components.schema,cursor__24396__auto__,m56900);
});
__GT_schema = function(cursor__24396__auto__,m56900){
switch(arguments.length){
case 1:
return __GT_schema__1.call(this,cursor__24396__auto__);
case 2:
return __GT_schema__2.call(this,cursor__24396__auto__,m56900);
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
var top_nav__delegate = function (data__24427__auto__,owner57039,p__57041){var vec__57108 = p__57041;var opts__24428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57108,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema57113 = schema.core.Any;var input_schema57114 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684)),schema.core.Any,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map57109","map57109",-1215219109,null))], null);var input_checker57115 = schema.core.checker(input_schema57114);var output_checker57116 = schema.core.checker(output_schema57113);return schema.core.schematize_fn(((function (ufv__,output_schema57113,input_schema57114,input_checker57115,output_checker57116,vec__57108,opts__24428__auto__){
return (function fnk57112(G__57117){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57174 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57117], null);var temp__4126__auto___57175 = (function (){var G__57146 = args__838__auto___57174;return (input_checker57115.cljs$core$IFn$_invoke$arity$1 ? input_checker57115.cljs$core$IFn$_invoke$arity$1(G__57146) : input_checker57115.call(null,G__57146));
})();if(cljs.core.truth_(temp__4126__auto___57175))
{var error__839__auto___57176 = temp__4126__auto___57175;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk57112","fnk57112",94354624,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57176], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57114,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57174,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57176], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map57109 = G__57117;while(true){
if(cljs.core.map_QMARK_(map57109))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map57109], 0))));
}
var map57111 = plumbing.fnk.schema.safe_get(map57109,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(map57111,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var data_sources = plumbing.fnk.schema.safe_get(map57111,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map57111,new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684),null);var schema_visible_QMARK_ = plumbing.fnk.schema.safe_get(map57111,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map57109,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map57110 = plumbing.fnk.schema.safe_get(map57109,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var nav_items = plumbing.fnk.schema.safe_get(map57110,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));if(typeof stuttaford.radiant.components.t57147 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.components.t57147 = (function (fnk57112,current_data_source,owner,view,schema_visible_QMARK_,map57111,nav_items,p__57041,output_schema57113,G__57117,data_sources,input_checker57115,top_nav,owner57039,validate__837__auto__,input_schema57114,map57109,output_checker57116,data__24427__auto__,ufv__,opts__24428__auto__,vec__57108,map57110,meta57148){
this.fnk57112 = fnk57112;
this.current_data_source = current_data_source;
this.owner = owner;
this.view = view;
this.schema_visible_QMARK_ = schema_visible_QMARK_;
this.map57111 = map57111;
this.nav_items = nav_items;
this.p__57041 = p__57041;
this.output_schema57113 = output_schema57113;
this.G__57117 = G__57117;
this.data_sources = data_sources;
this.input_checker57115 = input_checker57115;
this.top_nav = top_nav;
this.owner57039 = owner57039;
this.validate__837__auto__ = validate__837__auto__;
this.input_schema57114 = input_schema57114;
this.map57109 = map57109;
this.output_checker57116 = output_checker57116;
this.data__24427__auto__ = data__24427__auto__;
this.ufv__ = ufv__;
this.opts__24428__auto__ = opts__24428__auto__;
this.vec__57108 = vec__57108;
this.map57110 = map57110;
this.meta57148 = meta57148;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.components.t57147.cljs$lang$type = true;
stuttaford.radiant.components.t57147.cljs$lang$ctorStr = "stuttaford.radiant.components/t57147";
stuttaford.radiant.components.t57147.cljs$lang$ctorPrWriter = ((function (nav_items,map57110,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map57111,validate__837__auto__,ufv__,output_schema57113,input_schema57114,input_checker57115,output_checker57116,vec__57108,opts__24428__auto__){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"stuttaford.radiant.components/t57147");
});})(nav_items,map57110,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map57111,validate__837__auto__,ufv__,output_schema57113,input_schema57114,input_checker57115,output_checker57116,vec__57108,opts__24428__auto__))
;
stuttaford.radiant.components.t57147.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.components.t57147.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (nav_items,map57110,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map57111,validate__837__auto__,ufv__,output_schema57113,input_schema57114,input_checker57115,output_checker57116,vec__57108,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "top-nav";
});})(nav_items,map57110,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map57111,validate__837__auto__,ufv__,output_schema57113,input_schema57114,input_checker57115,output_checker57116,vec__57108,opts__24428__auto__))
;
stuttaford.radiant.components.t57147.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.components.t57147.prototype.om$core$IRenderState$render_state$arity$2 = ((function (nav_items,map57110,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map57111,validate__837__auto__,ufv__,output_schema57113,input_schema57114,input_checker57115,output_checker57116,vec__57108,opts__24428__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var G__57152 = {"className": "radiant"};var G__57153 = "RADIANT";return React.DOM.div(G__57152,G__57153);
})(),om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20990__auto__ = ((function (c,___$1,nav_items,map57110,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map57111,validate__837__auto__,ufv__,output_schema57113,input_schema57114,input_checker57115,output_checker57116,vec__57108,opts__24428__auto__){
return (function iter__57154(s__57155){return (new cljs.core.LazySeq(null,((function (c,___$1,nav_items,map57110,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map57111,validate__837__auto__,ufv__,output_schema57113,input_schema57114,input_checker57115,output_checker57116,vec__57108,opts__24428__auto__){
return (function (){var s__57155__$1 = s__57155;while(true){
var temp__4126__auto__ = cljs.core.seq(s__57155__$1);if(temp__4126__auto__)
{var s__57155__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__57155__$2))
{var c__20988__auto__ = cljs.core.chunk_first(s__57155__$2);var size__20989__auto__ = cljs.core.count(c__20988__auto__);var b__57157 = cljs.core.chunk_buffer(size__20989__auto__);if((function (){var i__57156 = (0);while(true){
if((i__57156 < size__20989__auto__))
{var vec__57166 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto__,i__57156);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57166,(0),null);var vec__57167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57166,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57167,(0),null);cljs.core.chunk_append(b__57157,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__57168 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57156,vec__57166,id,vec__57167,label,c__20988__auto__,size__20989__auto__,b__57157,s__57155__$2,temp__4126__auto__,c,___$1,nav_items,map57110,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map57111,validate__837__auto__,ufv__,output_schema57113,input_schema57114,input_checker57115,output_checker57116,vec__57108,opts__24428__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__57156,vec__57166,id,vec__57167,label,c__20988__auto__,size__20989__auto__,b__57157,s__57155__$2,temp__4126__auto__,c,___$1,nav_items,map57110,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map57111,validate__837__auto__,ufv__,output_schema57113,input_schema57114,input_checker57115,output_checker57116,vec__57108,opts__24428__auto__))
], null);var G__57168__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57168,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__57168);return G__57168__$1;
})(),cljs.core.array_seq([label], 0)));
{
var G__57177 = (i__57156 + (1));
i__57156 = G__57177;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__57157),iter__57154(cljs.core.chunk_rest(s__57155__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__57157),null);
}
} else
{var vec__57169 = cljs.core.first(s__57155__$2);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57169,(0),null);var vec__57170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57169,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57170,(0),null);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__57171 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__57169,id,vec__57170,label,s__57155__$2,temp__4126__auto__,c,___$1,nav_items,map57110,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map57111,validate__837__auto__,ufv__,output_schema57113,input_schema57114,input_checker57115,output_checker57116,vec__57108,opts__24428__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(vec__57169,id,vec__57170,label,s__57155__$2,temp__4126__auto__,c,___$1,nav_items,map57110,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map57111,validate__837__auto__,ufv__,output_schema57113,input_schema57114,input_checker57115,output_checker57116,vec__57108,opts__24428__auto__))
], null);var G__57171__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57171,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__57171);return G__57171__$1;
})(),cljs.core.array_seq([label], 0)),iter__57154(cljs.core.rest(s__57155__$2)));
}
} else
{return null;
}
break;
}
});})(c,___$1,nav_items,map57110,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map57111,validate__837__auto__,ufv__,output_schema57113,input_schema57114,input_checker57115,output_checker57116,vec__57108,opts__24428__auto__))
,null,null));
});})(c,___$1,nav_items,map57110,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map57111,validate__837__auto__,ufv__,output_schema57113,input_schema57114,input_checker57115,output_checker57116,vec__57108,opts__24428__auto__))
;return iter__20990__auto__(self__.nav_items);
})()], 0)),stuttaford.radiant.components.data_source_dropdown(c,self__.data_sources,self__.current_data_source),om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__57172 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (c,___$1,nav_items,map57110,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map57111,validate__837__auto__,ufv__,output_schema57113,input_schema57114,input_checker57115,output_checker57116,vec__57108,opts__24428__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-schema-visible","set-schema-visible",-1408939033),cljs.core.not(self__.schema_visible_QMARK_)], null));
});})(c,___$1,nav_items,map57110,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map57111,validate__837__auto__,ufv__,output_schema57113,input_schema57114,input_checker57115,output_checker57116,vec__57108,opts__24428__auto__))
], null);var G__57172__$1 = (cljs.core.truth_(self__.schema_visible_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57172,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__57172);return G__57172__$1;
})(),cljs.core.array_seq(["Show schema"], 0))], 0));
});})(nav_items,map57110,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map57111,validate__837__auto__,ufv__,output_schema57113,input_schema57114,input_checker57115,output_checker57116,vec__57108,opts__24428__auto__))
;
stuttaford.radiant.components.t57147.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (nav_items,map57110,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map57111,validate__837__auto__,ufv__,output_schema57113,input_schema57114,input_checker57115,output_checker57116,vec__57108,opts__24428__auto__){
return (function (_57149){var self__ = this;
var _57149__$1 = this;return self__.meta57148;
});})(nav_items,map57110,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map57111,validate__837__auto__,ufv__,output_schema57113,input_schema57114,input_checker57115,output_checker57116,vec__57108,opts__24428__auto__))
;
stuttaford.radiant.components.t57147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (nav_items,map57110,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map57111,validate__837__auto__,ufv__,output_schema57113,input_schema57114,input_checker57115,output_checker57116,vec__57108,opts__24428__auto__){
return (function (_57149,meta57148__$1){var self__ = this;
var _57149__$1 = this;return (new stuttaford.radiant.components.t57147(self__.fnk57112,self__.current_data_source,self__.owner,self__.view,self__.schema_visible_QMARK_,self__.map57111,self__.nav_items,self__.p__57041,self__.output_schema57113,self__.G__57117,self__.data_sources,self__.input_checker57115,self__.top_nav,self__.owner57039,self__.validate__837__auto__,self__.input_schema57114,self__.map57109,self__.output_checker57116,self__.data__24427__auto__,self__.ufv__,self__.opts__24428__auto__,self__.vec__57108,self__.map57110,meta57148__$1));
});})(nav_items,map57110,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map57111,validate__837__auto__,ufv__,output_schema57113,input_schema57114,input_checker57115,output_checker57116,vec__57108,opts__24428__auto__))
;
stuttaford.radiant.components.__GT_t57147 = ((function (nav_items,map57110,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map57111,validate__837__auto__,ufv__,output_schema57113,input_schema57114,input_checker57115,output_checker57116,vec__57108,opts__24428__auto__){
return (function __GT_t57147(fnk57112__$1,current_data_source__$1,owner__$1,view__$1,schema_visible_QMARK___$1,map57111__$1,nav_items__$1,p__57041__$1,output_schema57113__$1,G__57117__$1,data_sources__$1,input_checker57115__$1,top_nav__$1,owner57039__$1,validate__837__auto____$1,input_schema57114__$1,map57109__$1,output_checker57116__$1,data__24427__auto____$1,ufv____$1,opts__24428__auto____$1,vec__57108__$1,map57110__$1,meta57148){return (new stuttaford.radiant.components.t57147(fnk57112__$1,current_data_source__$1,owner__$1,view__$1,schema_visible_QMARK___$1,map57111__$1,nav_items__$1,p__57041__$1,output_schema57113__$1,G__57117__$1,data_sources__$1,input_checker57115__$1,top_nav__$1,owner57039__$1,validate__837__auto____$1,input_schema57114__$1,map57109__$1,output_checker57116__$1,data__24427__auto____$1,ufv____$1,opts__24428__auto____$1,vec__57108__$1,map57110__$1,meta57148));
});})(nav_items,map57110,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map57111,validate__837__auto__,ufv__,output_schema57113,input_schema57114,input_checker57115,output_checker57116,vec__57108,opts__24428__auto__))
;
}
return (new stuttaford.radiant.components.t57147(fnk57112,current_data_source,owner,view,schema_visible_QMARK_,map57111,nav_items,p__57041,output_schema57113,G__57117,data_sources,input_checker57115,top_nav,owner57039,validate__837__auto__,input_schema57114,map57109,output_checker57116,data__24427__auto__,ufv__,opts__24428__auto__,vec__57108,map57110,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57178 = (function (){var G__57173 = o__840__auto__;return (output_checker57116.cljs$core$IFn$_invoke$arity$1 ? output_checker57116.cljs$core$IFn$_invoke$arity$1(G__57173) : output_checker57116.call(null,G__57173));
})();if(cljs.core.truth_(temp__4126__auto___57178))
{var error__839__auto___57179 = temp__4126__auto___57178;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk57112","fnk57112",94354624,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57179], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57113,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57179], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema57113,input_schema57114,input_checker57115,output_checker57116,vec__57108,opts__24428__auto__))
,schema.core.make_fn_schema(output_schema57113,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57114], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24428__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner57039,new cljs.core.Keyword(null,"data","data",-232669377),data__24427__auto__], null));
};
var top_nav = function (data__24427__auto__,owner57039,var_args){
var p__57041 = null;if (arguments.length > 2) {
  p__57041 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return top_nav__delegate.call(this,data__24427__auto__,owner57039,p__57041);};
top_nav.cljs$lang$maxFixedArity = 2;
top_nav.cljs$lang$applyTo = (function (arglist__57180){
var data__24427__auto__ = cljs.core.first(arglist__57180);
arglist__57180 = cljs.core.next(arglist__57180);
var owner57039 = cljs.core.first(arglist__57180);
var p__57041 = cljs.core.rest(arglist__57180);
return top_nav__delegate(data__24427__auto__,owner57039,p__57041);
});
top_nav.cljs$core$IFn$_invoke$arity$variadic = top_nav__delegate;
return top_nav;
})()
;
stuttaford.radiant.components.__GT_top_nav = (function() {
var __GT_top_nav = null;
var __GT_top_nav__1 = (function (cursor__24396__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.top_nav,cursor__24396__auto__);
});
var __GT_top_nav__2 = (function (cursor__24396__auto__,m57040){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.components.top_nav,cursor__24396__auto__,m57040);
});
__GT_top_nav = function(cursor__24396__auto__,m57040){
switch(arguments.length){
case 1:
return __GT_top_nav__1.call(this,cursor__24396__auto__);
case 2:
return __GT_top_nav__2.call(this,cursor__24396__auto__,m57040);
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
stuttaford.radiant.components.paginate_label = (function paginate_label(current_page,rows){var start = (stuttaford.radiant.components.PAGE_SIZE * current_page);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((start + (1)))+" - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__20191__auto__ = (start + stuttaford.radiant.components.PAGE_SIZE);var y__20192__auto__ = cljs.core.count(rows);return ((x__20191__auto__ < y__20192__auto__) ? x__20191__auto__ : y__20192__auto__);
})()));
});
stuttaford.radiant.components.sort_rows = (function sort_rows(sort_col,rows){return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__57181_SHARP_){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__57181_SHARP_,sort_col);
}),rows);
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.components.result_table = (function() { 
var result_table__delegate = function (data__24427__auto__,owner57182,p__57184){var vec__57335 = p__57184;var opts__24428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57335,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema57340 = schema.core.Any;var input_schema57341 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260)),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"rows","rows",850049680),schema.core.Any,new cljs.core.Keyword(null,"cols","cols",-1914801295),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map57336","map57336",-1581496140,null))], null);var input_checker57342 = schema.core.checker(input_schema57341);var output_checker57343 = schema.core.checker(output_schema57340);return schema.core.schematize_fn(((function (ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__){
return (function fnk57339(G__57344){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57485 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57344], null);var temp__4126__auto___57486 = (function (){var G__57415 = args__838__auto___57485;return (input_checker57342.cljs$core$IFn$_invoke$arity$1 ? input_checker57342.cljs$core$IFn$_invoke$arity$1(G__57415) : input_checker57342.call(null,G__57415));
})();if(cljs.core.truth_(temp__4126__auto___57486))
{var error__839__auto___57487 = temp__4126__auto___57486;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk57339","fnk57339",-1667188121,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57487], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57341,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57485,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57487], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map57336 = G__57344;while(true){
if(cljs.core.map_QMARK_(map57336))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map57336], 0))));
}
var map57338 = plumbing.fnk.schema.safe_get(map57336,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var cols = plumbing.fnk.schema.safe_get(map57338,new cljs.core.Keyword(null,"cols","cols",-1914801295),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var rows = plumbing.fnk.schema.safe_get(map57338,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map57336,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map57337 = plumbing.fnk.schema.safe_get(map57336,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var allow_sorting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map57337,new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),false);if(typeof stuttaford.radiant.components.t57416 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.components.t57416 = (function (input_checker57342,map57337,owner,map57338,owner57182,input_schema57341,fnk57339,result_table,allow_sorting_QMARK_,output_checker57343,output_schema57340,map57336,G__57344,rows,p__57184,vec__57335,cols,validate__837__auto__,data__24427__auto__,ufv__,opts__24428__auto__,meta57417){
this.input_checker57342 = input_checker57342;
this.map57337 = map57337;
this.owner = owner;
this.map57338 = map57338;
this.owner57182 = owner57182;
this.input_schema57341 = input_schema57341;
this.fnk57339 = fnk57339;
this.result_table = result_table;
this.allow_sorting_QMARK_ = allow_sorting_QMARK_;
this.output_checker57343 = output_checker57343;
this.output_schema57340 = output_schema57340;
this.map57336 = map57336;
this.G__57344 = G__57344;
this.rows = rows;
this.p__57184 = p__57184;
this.vec__57335 = vec__57335;
this.cols = cols;
this.validate__837__auto__ = validate__837__auto__;
this.data__24427__auto__ = data__24427__auto__;
this.ufv__ = ufv__;
this.opts__24428__auto__ = opts__24428__auto__;
this.meta57417 = meta57417;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.components.t57416.cljs$lang$type = true;
stuttaford.radiant.components.t57416.cljs$lang$ctorStr = "stuttaford.radiant.components/t57416";
stuttaford.radiant.components.t57416.cljs$lang$ctorPrWriter = ((function (allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"stuttaford.radiant.components/t57416");
});})(allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__))
;
stuttaford.radiant.components.t57416.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.components.t57416.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "result-table";
});})(allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__))
;
stuttaford.radiant.components.t57416.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.components.t57416.prototype.om$core$IRenderState$render_state$arity$2 = ((function (allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__){
return (function (_,p__57419){var self__ = this;
var map__57420 = p__57419;var map__57420__$1 = ((cljs.core.seq_QMARK_(map__57420))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57420):map__57420);var current_page = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57420__$1,new cljs.core.Keyword(null,"current-page","current-page",-101294180),(0));var sort_col = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57420__$1,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882),(0));var ___$1 = this;var page_count = cljs.core.count(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.PAGE_SIZE,self__.rows));var paginate_QMARK_ = (page_count > (1));var G__57422 = null;var G__57423 = (function (){var G__57425 = {"className": "result-pagination"};var G__57426 = (function (){var attrs57421 = cljs.core.count(self__.rows);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs57421))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-count"], null)], null),attrs57421], 0))):{"className": "item-count"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs57421))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" items",sablono.interpreter.interpret(((paginate_QMARK_)?(" \u00B7 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(stuttaford.radiant.components.paginate_label(current_page,self__.rows))):null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs57421)," items",sablono.interpreter.interpret(((paginate_QMARK_)?(" \u00B7 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(stuttaford.radiant.components.paginate_label(current_page,self__.rows))):null))], null))));
})();var G__57427 = sablono.interpreter.interpret(((paginate_QMARK_)?om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20990__auto__ = ((function (G__57425,G__57426,G__57422,page_count,paginate_QMARK_,___$1,map__57420,map__57420__$1,current_page,sort_col,allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__){
return (function iter__57428(s__57429){return (new cljs.core.LazySeq(null,((function (G__57425,G__57426,G__57422,page_count,paginate_QMARK_,___$1,map__57420,map__57420__$1,current_page,sort_col,allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__){
return (function (){var s__57429__$1 = s__57429;while(true){
var temp__4126__auto__ = cljs.core.seq(s__57429__$1);if(temp__4126__auto__)
{var s__57429__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__57429__$2))
{var c__20988__auto__ = cljs.core.chunk_first(s__57429__$2);var size__20989__auto__ = cljs.core.count(c__20988__auto__);var b__57431 = cljs.core.chunk_buffer(size__20989__auto__);if((function (){var i__57430 = (0);while(true){
if((i__57430 < size__20989__auto__))
{var page = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto__,i__57430);cljs.core.chunk_append(b__57431,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__57436 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57430,page,c__20988__auto__,size__20989__auto__,b__57431,s__57429__$2,temp__4126__auto__,G__57425,G__57426,G__57422,page_count,paginate_QMARK_,___$1,map__57420,map__57420__$1,current_page,sort_col,allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page);
});})(i__57430,page,c__20988__auto__,size__20989__auto__,b__57431,s__57429__$2,temp__4126__auto__,G__57425,G__57426,G__57422,page_count,paginate_QMARK_,___$1,map__57420,map__57420__$1,current_page,sort_col,allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__))
], null);var G__57436__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57436,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__57436);return G__57436__$1;
})(),cljs.core.array_seq([(page + (1))], 0)));
{
var G__57488 = (i__57430 + (1));
i__57430 = G__57488;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__57431),iter__57428(cljs.core.chunk_rest(s__57429__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__57431),null);
}
} else
{var page = cljs.core.first(s__57429__$2);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__57437 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (page,s__57429__$2,temp__4126__auto__,G__57425,G__57426,G__57422,page_count,paginate_QMARK_,___$1,map__57420,map__57420__$1,current_page,sort_col,allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page);
});})(page,s__57429__$2,temp__4126__auto__,G__57425,G__57426,G__57422,page_count,paginate_QMARK_,___$1,map__57420,map__57420__$1,current_page,sort_col,allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__))
], null);var G__57437__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57437,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__57437);return G__57437__$1;
})(),cljs.core.array_seq([(page + (1))], 0)),iter__57428(cljs.core.rest(s__57429__$2)));
}
} else
{return null;
}
break;
}
});})(G__57425,G__57426,G__57422,page_count,paginate_QMARK_,___$1,map__57420,map__57420__$1,current_page,sort_col,allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__))
,null,null));
});})(G__57425,G__57426,G__57422,page_count,paginate_QMARK_,___$1,map__57420,map__57420__$1,current_page,sort_col,allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__))
;return iter__20990__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(page_count));
})()], 0)):null));return React.DOM.div(G__57425,G__57426,G__57427);
})();var G__57424 = sablono.interpreter.interpret(om_bootstrap.table.table.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"striped?","striped?",-797214979),true,new cljs.core.Keyword(null,"bordered?","bordered?",562358476),true,new cljs.core.Keyword(null,"condensed?","condensed?",-109797520),true,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),true], null),cljs.core.array_seq([cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57442 = null;var G__57443 = (function (){var attrs57440 = cljs.core.map_indexed(((function (G__57442,G__57422,G__57423,page_count,paginate_QMARK_,___$1,map__57420,map__57420__$1,current_page,sort_col,allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__){
return (function (i,v){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),(cljs.core.truth_(self__.allow_sorting_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__57442,G__57422,G__57423,page_count,paginate_QMARK_,___$1,map__57420,map__57420__$1,current_page,sort_col,allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882),i);
});})(G__57442,G__57422,G__57423,page_count,paginate_QMARK_,___$1,map__57420,map__57420__$1,current_page,sort_col,allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__))
], null):null),v,(cljs.core.truth_((function (){var and__19564__auto__ = self__.allow_sorting_QMARK_;if(cljs.core.truth_(and__19564__auto__))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,sort_col);
} else
{return and__19564__auto__;
}
})())?cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-chevron-down","span.glyphicon.glyphicon-chevron-down",-62425995)], null))," "):null)], null);
});})(G__57442,G__57422,G__57423,page_count,paginate_QMARK_,___$1,map__57420,map__57420__$1,current_page,sort_col,allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__))
,self__.cols);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tr,((cljs.core.map_QMARK_(attrs57440))?sablono.interpreter.attributes(attrs57440):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs57440))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs57440)], null))));
})();return React.DOM.thead(G__57442,G__57443);
})(),(function (){var G__57444 = null;var G__57445 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20990__auto__ = ((function (G__57444,G__57422,G__57423,page_count,paginate_QMARK_,___$1,map__57420,map__57420__$1,current_page,sort_col,allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__){
return (function iter__57446(s__57447){return (new cljs.core.LazySeq(null,((function (G__57444,G__57422,G__57423,page_count,paginate_QMARK_,___$1,map__57420,map__57420__$1,current_page,sort_col,allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__){
return (function (){var s__57447__$1 = s__57447;while(true){
var temp__4126__auto__ = cljs.core.seq(s__57447__$1);if(temp__4126__auto__)
{var s__57447__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__57447__$2))
{var c__20988__auto__ = cljs.core.chunk_first(s__57447__$2);var size__20989__auto__ = cljs.core.count(c__20988__auto__);var b__57449 = cljs.core.chunk_buffer(size__20989__auto__);if((function (){var i__57448 = (0);while(true){
if((i__57448 < size__20989__auto__))
{var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto__,i__57448);cljs.core.chunk_append(b__57449,(function (){var G__57468 = null;var G__57469 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20990__auto__ = ((function (i__57448,G__57468,row,c__20988__auto__,size__20989__auto__,b__57449,s__57447__$2,temp__4126__auto__,G__57444,G__57422,G__57423,page_count,paginate_QMARK_,___$1,map__57420,map__57420__$1,current_page,sort_col,allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__){
return (function iter__57470(s__57471){return (new cljs.core.LazySeq(null,((function (i__57448,G__57468,row,c__20988__auto__,size__20989__auto__,b__57449,s__57447__$2,temp__4126__auto__,G__57444,G__57422,G__57423,page_count,paginate_QMARK_,___$1,map__57420,map__57420__$1,current_page,sort_col,allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__){
return (function (){var s__57471__$1 = s__57471;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__57471__$1);if(temp__4126__auto____$1)
{var s__57471__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__57471__$2))
{var c__20988__auto____$1 = cljs.core.chunk_first(s__57471__$2);var size__20989__auto____$1 = cljs.core.count(c__20988__auto____$1);var b__57473 = cljs.core.chunk_buffer(size__20989__auto____$1);if((function (){var i__57472 = (0);while(true){
if((i__57472 < size__20989__auto____$1))
{var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto____$1,i__57472);cljs.core.chunk_append(b__57473,(function (){var attrs57441 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs57441))?sablono.interpreter.attributes(attrs57441):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs57441))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs57441)], null))));
})());
{
var G__57489 = (i__57472 + (1));
i__57472 = G__57489;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__57473),iter__57470(cljs.core.chunk_rest(s__57471__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__57473),null);
}
} else
{var value = cljs.core.first(s__57471__$2);return cljs.core.cons((function (){var attrs57441 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs57441))?sablono.interpreter.attributes(attrs57441):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs57441))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs57441)], null))));
})(),iter__57470(cljs.core.rest(s__57471__$2)));
}
} else
{return null;
}
break;
}
});})(i__57448,G__57468,row,c__20988__auto__,size__20989__auto__,b__57449,s__57447__$2,temp__4126__auto__,G__57444,G__57422,G__57423,page_count,paginate_QMARK_,___$1,map__57420,map__57420__$1,current_page,sort_col,allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__))
,null,null));
});})(i__57448,G__57468,row,c__20988__auto__,size__20989__auto__,b__57449,s__57447__$2,temp__4126__auto__,G__57444,G__57422,G__57423,page_count,paginate_QMARK_,___$1,map__57420,map__57420__$1,current_page,sort_col,allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__))
;return iter__20990__auto__(row);
})());return React.DOM.tr(G__57468,G__57469);
})());
{
var G__57490 = (i__57448 + (1));
i__57448 = G__57490;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__57449),iter__57446(cljs.core.chunk_rest(s__57447__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__57449),null);
}
} else
{var row = cljs.core.first(s__57447__$2);return cljs.core.cons((function (){var G__57476 = null;var G__57477 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20990__auto__ = ((function (G__57476,row,s__57447__$2,temp__4126__auto__,G__57444,G__57422,G__57423,page_count,paginate_QMARK_,___$1,map__57420,map__57420__$1,current_page,sort_col,allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__){
return (function iter__57478(s__57479){return (new cljs.core.LazySeq(null,((function (G__57476,row,s__57447__$2,temp__4126__auto__,G__57444,G__57422,G__57423,page_count,paginate_QMARK_,___$1,map__57420,map__57420__$1,current_page,sort_col,allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__){
return (function (){var s__57479__$1 = s__57479;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__57479__$1);if(temp__4126__auto____$1)
{var s__57479__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__57479__$2))
{var c__20988__auto__ = cljs.core.chunk_first(s__57479__$2);var size__20989__auto__ = cljs.core.count(c__20988__auto__);var b__57481 = cljs.core.chunk_buffer(size__20989__auto__);if((function (){var i__57480 = (0);while(true){
if((i__57480 < size__20989__auto__))
{var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto__,i__57480);cljs.core.chunk_append(b__57481,(function (){var attrs57441 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs57441))?sablono.interpreter.attributes(attrs57441):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs57441))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs57441)], null))));
})());
{
var G__57491 = (i__57480 + (1));
i__57480 = G__57491;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__57481),iter__57478(cljs.core.chunk_rest(s__57479__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__57481),null);
}
} else
{var value = cljs.core.first(s__57479__$2);return cljs.core.cons((function (){var attrs57441 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs57441))?sablono.interpreter.attributes(attrs57441):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs57441))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs57441)], null))));
})(),iter__57478(cljs.core.rest(s__57479__$2)));
}
} else
{return null;
}
break;
}
});})(G__57476,row,s__57447__$2,temp__4126__auto__,G__57444,G__57422,G__57423,page_count,paginate_QMARK_,___$1,map__57420,map__57420__$1,current_page,sort_col,allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__))
,null,null));
});})(G__57476,row,s__57447__$2,temp__4126__auto__,G__57444,G__57422,G__57423,page_count,paginate_QMARK_,___$1,map__57420,map__57420__$1,current_page,sort_col,allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__))
;return iter__20990__auto__(row);
})());return React.DOM.tr(G__57476,G__57477);
})(),iter__57446(cljs.core.rest(s__57447__$2)));
}
} else
{return null;
}
break;
}
});})(G__57444,G__57422,G__57423,page_count,paginate_QMARK_,___$1,map__57420,map__57420__$1,current_page,sort_col,allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__))
,null,null));
});})(G__57444,G__57422,G__57423,page_count,paginate_QMARK_,___$1,map__57420,map__57420__$1,current_page,sort_col,allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__))
;return iter__20990__auto__(stuttaford.radiant.components.sort_rows(sort_col,stuttaford.radiant.components.paginate(current_page,self__.rows)));
})());return React.DOM.tbody(G__57444,G__57445);
})()], null))], 0)));return React.DOM.div(G__57422,G__57423,G__57424);
});})(allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__))
;
stuttaford.radiant.components.t57416.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__){
return (function (_57418){var self__ = this;
var _57418__$1 = this;return self__.meta57417;
});})(allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__))
;
stuttaford.radiant.components.t57416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__){
return (function (_57418,meta57417__$1){var self__ = this;
var _57418__$1 = this;return (new stuttaford.radiant.components.t57416(self__.input_checker57342,self__.map57337,self__.owner,self__.map57338,self__.owner57182,self__.input_schema57341,self__.fnk57339,self__.result_table,self__.allow_sorting_QMARK_,self__.output_checker57343,self__.output_schema57340,self__.map57336,self__.G__57344,self__.rows,self__.p__57184,self__.vec__57335,self__.cols,self__.validate__837__auto__,self__.data__24427__auto__,self__.ufv__,self__.opts__24428__auto__,meta57417__$1));
});})(allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__))
;
stuttaford.radiant.components.__GT_t57416 = ((function (allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__){
return (function __GT_t57416(input_checker57342__$1,map57337__$1,owner__$1,map57338__$1,owner57182__$1,input_schema57341__$1,fnk57339__$1,result_table__$1,allow_sorting_QMARK___$1,output_checker57343__$1,output_schema57340__$1,map57336__$1,G__57344__$1,rows__$1,p__57184__$1,vec__57335__$1,cols__$1,validate__837__auto____$1,data__24427__auto____$1,ufv____$1,opts__24428__auto____$1,meta57417){return (new stuttaford.radiant.components.t57416(input_checker57342__$1,map57337__$1,owner__$1,map57338__$1,owner57182__$1,input_schema57341__$1,fnk57339__$1,result_table__$1,allow_sorting_QMARK___$1,output_checker57343__$1,output_schema57340__$1,map57336__$1,G__57344__$1,rows__$1,p__57184__$1,vec__57335__$1,cols__$1,validate__837__auto____$1,data__24427__auto____$1,ufv____$1,opts__24428__auto____$1,meta57417));
});})(allow_sorting_QMARK_,map57337,owner,rows,cols,map57338,validate__837__auto__,ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__))
;
}
return (new stuttaford.radiant.components.t57416(input_checker57342,map57337,owner,map57338,owner57182,input_schema57341,fnk57339,result_table,allow_sorting_QMARK_,output_checker57343,output_schema57340,map57336,G__57344,rows,p__57184,vec__57335,cols,validate__837__auto__,data__24427__auto__,ufv__,opts__24428__auto__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57492 = (function (){var G__57484 = o__840__auto__;return (output_checker57343.cljs$core$IFn$_invoke$arity$1 ? output_checker57343.cljs$core$IFn$_invoke$arity$1(G__57484) : output_checker57343.call(null,G__57484));
})();if(cljs.core.truth_(temp__4126__auto___57492))
{var error__839__auto___57493 = temp__4126__auto___57492;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk57339","fnk57339",-1667188121,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57493], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57340,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57493], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema57340,input_schema57341,input_checker57342,output_checker57343,vec__57335,opts__24428__auto__))
,schema.core.make_fn_schema(output_schema57340,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57341], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24428__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner57182,new cljs.core.Keyword(null,"data","data",-232669377),data__24427__auto__], null));
};
var result_table = function (data__24427__auto__,owner57182,var_args){
var p__57184 = null;if (arguments.length > 2) {
  p__57184 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return result_table__delegate.call(this,data__24427__auto__,owner57182,p__57184);};
result_table.cljs$lang$maxFixedArity = 2;
result_table.cljs$lang$applyTo = (function (arglist__57494){
var data__24427__auto__ = cljs.core.first(arglist__57494);
arglist__57494 = cljs.core.next(arglist__57494);
var owner57182 = cljs.core.first(arglist__57494);
var p__57184 = cljs.core.rest(arglist__57494);
return result_table__delegate(data__24427__auto__,owner57182,p__57184);
});
result_table.cljs$core$IFn$_invoke$arity$variadic = result_table__delegate;
return result_table;
})()
;
stuttaford.radiant.components.__GT_result_table = (function() {
var __GT_result_table = null;
var __GT_result_table__1 = (function (cursor__24396__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.result_table,cursor__24396__auto__);
});
var __GT_result_table__2 = (function (cursor__24396__auto__,m57183){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.components.result_table,cursor__24396__auto__,m57183);
});
__GT_result_table = function(cursor__24396__auto__,m57183){
switch(arguments.length){
case 1:
return __GT_result_table__1.call(this,cursor__24396__auto__);
case 2:
return __GT_result_table__2.call(this,cursor__24396__auto__,m57183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_result_table.cljs$core$IFn$_invoke$arity$1 = __GT_result_table__1;
__GT_result_table.cljs$core$IFn$_invoke$arity$2 = __GT_result_table__2;
return __GT_result_table;
})()
;
//# sourceMappingURL=components.js.map