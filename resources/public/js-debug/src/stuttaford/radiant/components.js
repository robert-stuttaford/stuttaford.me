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
stuttaford.radiant.components.data_source_dropdown = (function data_source_dropdown(c,data_sources,current_data_source){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om_bootstrap.button.dropdown,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),stuttaford.radiant.model.data_source_label(data_sources,current_data_source)], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var iter__20686__auto__ = (function iter__56607(s__56608){return (new cljs.core.LazySeq(null,(function (){var s__56608__$1 = s__56608;while(true){
var temp__4126__auto__ = cljs.core.seq(s__56608__$1);if(temp__4126__auto__)
{var s__56608__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__56608__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__56608__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__56610 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__56609 = (0);while(true){
if((i__56609 < size__20685__auto__))
{var map__56615 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__56609);var map__56615__$1 = ((cljs.core.seq_QMARK_(map__56615))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56615):map__56615);var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56615__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56615__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append(b__56610,stuttaford.radiant.components.data_source_item(c,id,label));
{
var G__56617 = (i__56609 + (1));
i__56609 = G__56617;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__56610),iter__56607(cljs.core.chunk_rest(s__56608__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__56610),null);
}
} else
{var map__56616 = cljs.core.first(s__56608__$2);var map__56616__$1 = ((cljs.core.seq_QMARK_(map__56616))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56616):map__56616);var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56616__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56616__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons(stuttaford.radiant.components.data_source_item(c,id,label),iter__56607(cljs.core.rest(s__56608__$2)));
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
var schema__$1__delegate = function (data__24144__auto__,owner56618,p__56620){var vec__56686 = p__56620;var opts__24145__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56686,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema56690 = schema.core.Any;var input_schema56691 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-db","current-db",213667882)),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map56687","map56687",-2143638722,null))], null);var input_checker56692 = schema.core.checker(input_schema56691);var output_checker56693 = schema.core.checker(output_schema56690);return schema.core.schematize_fn(((function (ufv__,output_schema56690,input_schema56691,input_checker56692,output_checker56693,vec__56686,opts__24145__auto__){
return (function fnk56689(G__56694){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56751 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__56694], null);var temp__4126__auto___56752 = (function (){var G__56723 = args__838__auto___56751;return (input_checker56692.cljs$core$IFn$_invoke$arity$1 ? input_checker56692.cljs$core$IFn$_invoke$arity$1(G__56723) : input_checker56692.call(null,G__56723));
})();if(cljs.core.truth_(temp__4126__auto___56752))
{var error__839__auto___56753 = temp__4126__auto___56752;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk56689","fnk56689",2054299596,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56753], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56691,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56751,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56753], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map56687 = G__56694;while(true){
if(cljs.core.map_QMARK_(map56687))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map56687], 0))));
}
var map56688 = plumbing.fnk.schema.safe_get(map56687,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var current_db = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map56688,new cljs.core.Keyword(null,"current-db","current-db",213667882),null);var owner = plumbing.fnk.schema.safe_get(map56687,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.components.t56724 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.components.t56724 = (function (owner,map56688,owner56618,schema,data__24144__auto__,opts__24145__auto__,fnk56689,input_schema56691,G__56694,current_db,input_checker56692,p__56620,output_schema56690,output_checker56693,validate__837__auto__,vec__56686,ufv__,map56687,meta56725){
this.owner = owner;
this.map56688 = map56688;
this.owner56618 = owner56618;
this.schema = schema;
this.data__24144__auto__ = data__24144__auto__;
this.opts__24145__auto__ = opts__24145__auto__;
this.fnk56689 = fnk56689;
this.input_schema56691 = input_schema56691;
this.G__56694 = G__56694;
this.current_db = current_db;
this.input_checker56692 = input_checker56692;
this.p__56620 = p__56620;
this.output_schema56690 = output_schema56690;
this.output_checker56693 = output_checker56693;
this.validate__837__auto__ = validate__837__auto__;
this.vec__56686 = vec__56686;
this.ufv__ = ufv__;
this.map56687 = map56687;
this.meta56725 = meta56725;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.components.t56724.cljs$lang$type = true;
stuttaford.radiant.components.t56724.cljs$lang$ctorStr = "stuttaford.radiant.components/t56724";
stuttaford.radiant.components.t56724.cljs$lang$ctorPrWriter = ((function (owner,current_db,map56688,validate__837__auto__,ufv__,output_schema56690,input_schema56691,input_checker56692,output_checker56693,vec__56686,opts__24145__auto__){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"stuttaford.radiant.components/t56724");
});})(owner,current_db,map56688,validate__837__auto__,ufv__,output_schema56690,input_schema56691,input_checker56692,output_checker56693,vec__56686,opts__24145__auto__))
;
stuttaford.radiant.components.t56724.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.components.t56724.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,current_db,map56688,validate__837__auto__,ufv__,output_schema56690,input_schema56691,input_checker56692,output_checker56693,vec__56686,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "schema";
});})(owner,current_db,map56688,validate__837__auto__,ufv__,output_schema56690,input_schema56691,input_checker56692,output_checker56693,vec__56686,opts__24145__auto__))
;
stuttaford.radiant.components.t56724.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.components.t56724.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,current_db,map56688,validate__837__auto__,ufv__,output_schema56690,input_schema56691,input_checker56692,output_checker56693,vec__56686,opts__24145__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),"Schema"], null),cljs.core.array_seq([(cljs.core.truth_(self__.current_db)?cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20686__auto__ = ((function (___$1,owner,current_db,map56688,validate__837__auto__,ufv__,output_schema56690,input_schema56691,input_checker56692,output_checker56693,vec__56686,opts__24145__auto__){
return (function iter__56728(s__56729){return (new cljs.core.LazySeq(null,((function (___$1,owner,current_db,map56688,validate__837__auto__,ufv__,output_schema56690,input_schema56691,input_checker56692,output_checker56693,vec__56686,opts__24145__auto__){
return (function (){var s__56729__$1 = s__56729;while(true){
var temp__4126__auto__ = cljs.core.seq(s__56729__$1);if(temp__4126__auto__)
{var s__56729__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__56729__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__56729__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__56731 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__56730 = (0);while(true){
if((i__56730 < size__20685__auto__))
{var schema__$3 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__56730);cljs.core.chunk_append(b__56731,(function (){var G__56742 = {"className": "schema"};var G__56743 = (function (){var attrs56727 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(schema__$3)], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs56727))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ident"], null)], null),attrs56727], 0))):{"className": "ident"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs56727))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs56727)], null))));
})();var G__56744 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["REF"], 0)):null));var G__56745 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["MANY"], 0)):null));return React.DOM.span(G__56742,G__56743,G__56744,G__56745);
})());
{
var G__56754 = (i__56730 + (1));
i__56730 = G__56754;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__56731),iter__56728(cljs.core.chunk_rest(s__56729__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__56731),null);
}
} else
{var schema__$3 = cljs.core.first(s__56729__$2);return cljs.core.cons((function (){var G__56746 = {"className": "schema"};var G__56747 = (function (){var attrs56727 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(schema__$3)], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs56727))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ident"], null)], null),attrs56727], 0))):{"className": "ident"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs56727))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs56727)], null))));
})();var G__56748 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["REF"], 0)):null));var G__56749 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["MANY"], 0)):null));return React.DOM.span(G__56746,G__56747,G__56748,G__56749);
})(),iter__56728(cljs.core.rest(s__56729__$2)));
}
} else
{return null;
}
break;
}
});})(___$1,owner,current_db,map56688,validate__837__auto__,ufv__,output_schema56690,input_schema56691,input_checker56692,output_checker56693,vec__56686,opts__24145__auto__))
,null,null));
});})(___$1,owner,current_db,map56688,validate__837__auto__,ufv__,output_schema56690,input_schema56691,input_checker56692,output_checker56693,vec__56686,opts__24145__auto__))
;return iter__20686__auto__(stuttaford.radiant.model.schema_for_db(self__.current_db));
})()):"No database.")], 0));
});})(owner,current_db,map56688,validate__837__auto__,ufv__,output_schema56690,input_schema56691,input_checker56692,output_checker56693,vec__56686,opts__24145__auto__))
;
stuttaford.radiant.components.t56724.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,current_db,map56688,validate__837__auto__,ufv__,output_schema56690,input_schema56691,input_checker56692,output_checker56693,vec__56686,opts__24145__auto__){
return (function (_56726){var self__ = this;
var _56726__$1 = this;return self__.meta56725;
});})(owner,current_db,map56688,validate__837__auto__,ufv__,output_schema56690,input_schema56691,input_checker56692,output_checker56693,vec__56686,opts__24145__auto__))
;
stuttaford.radiant.components.t56724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,current_db,map56688,validate__837__auto__,ufv__,output_schema56690,input_schema56691,input_checker56692,output_checker56693,vec__56686,opts__24145__auto__){
return (function (_56726,meta56725__$1){var self__ = this;
var _56726__$1 = this;return (new stuttaford.radiant.components.t56724(self__.owner,self__.map56688,self__.owner56618,self__.schema,self__.data__24144__auto__,self__.opts__24145__auto__,self__.fnk56689,self__.input_schema56691,self__.G__56694,self__.current_db,self__.input_checker56692,self__.p__56620,self__.output_schema56690,self__.output_checker56693,self__.validate__837__auto__,self__.vec__56686,self__.ufv__,self__.map56687,meta56725__$1));
});})(owner,current_db,map56688,validate__837__auto__,ufv__,output_schema56690,input_schema56691,input_checker56692,output_checker56693,vec__56686,opts__24145__auto__))
;
stuttaford.radiant.components.__GT_t56724 = ((function (owner,current_db,map56688,validate__837__auto__,ufv__,output_schema56690,input_schema56691,input_checker56692,output_checker56693,vec__56686,opts__24145__auto__){
return (function __GT_t56724(owner__$1,map56688__$1,owner56618__$1,schema__$2,data__24144__auto____$1,opts__24145__auto____$1,fnk56689__$1,input_schema56691__$1,G__56694__$1,current_db__$1,input_checker56692__$1,p__56620__$1,output_schema56690__$1,output_checker56693__$1,validate__837__auto____$1,vec__56686__$1,ufv____$1,map56687__$1,meta56725){return (new stuttaford.radiant.components.t56724(owner__$1,map56688__$1,owner56618__$1,schema__$2,data__24144__auto____$1,opts__24145__auto____$1,fnk56689__$1,input_schema56691__$1,G__56694__$1,current_db__$1,input_checker56692__$1,p__56620__$1,output_schema56690__$1,output_checker56693__$1,validate__837__auto____$1,vec__56686__$1,ufv____$1,map56687__$1,meta56725));
});})(owner,current_db,map56688,validate__837__auto__,ufv__,output_schema56690,input_schema56691,input_checker56692,output_checker56693,vec__56686,opts__24145__auto__))
;
}
return (new stuttaford.radiant.components.t56724(owner,map56688,owner56618,schema__$1,data__24144__auto__,opts__24145__auto__,fnk56689,input_schema56691,G__56694,current_db,input_checker56692,p__56620,output_schema56690,output_checker56693,validate__837__auto__,vec__56686,ufv__,map56687,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56755 = (function (){var G__56750 = o__840__auto__;return (output_checker56693.cljs$core$IFn$_invoke$arity$1 ? output_checker56693.cljs$core$IFn$_invoke$arity$1(G__56750) : output_checker56693.call(null,G__56750));
})();if(cljs.core.truth_(temp__4126__auto___56755))
{var error__839__auto___56756 = temp__4126__auto___56755;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk56689","fnk56689",2054299596,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56756], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56690,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56756], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema56690,input_schema56691,input_checker56692,output_checker56693,vec__56686,opts__24145__auto__))
,schema.core.make_fn_schema(output_schema56690,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56691], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner56618,new cljs.core.Keyword(null,"data","data",-232669377),data__24144__auto__], null));
};
var schema__$1 = function (data__24144__auto__,owner56618,var_args){
var p__56620 = null;if (arguments.length > 2) {
  p__56620 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return schema__$1__delegate.call(this,data__24144__auto__,owner56618,p__56620);};
schema__$1.cljs$lang$maxFixedArity = 2;
schema__$1.cljs$lang$applyTo = (function (arglist__56757){
var data__24144__auto__ = cljs.core.first(arglist__56757);
arglist__56757 = cljs.core.next(arglist__56757);
var owner56618 = cljs.core.first(arglist__56757);
var p__56620 = cljs.core.rest(arglist__56757);
return schema__$1__delegate(data__24144__auto__,owner56618,p__56620);
});
schema__$1.cljs$core$IFn$_invoke$arity$variadic = schema__$1__delegate;
return schema__$1;
})()
;
stuttaford.radiant.components.__GT_schema = (function() {
var __GT_schema = null;
var __GT_schema__1 = (function (cursor__24113__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.schema,cursor__24113__auto__);
});
var __GT_schema__2 = (function (cursor__24113__auto__,m56619){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.components.schema,cursor__24113__auto__,m56619);
});
__GT_schema = function(cursor__24113__auto__,m56619){
switch(arguments.length){
case 1:
return __GT_schema__1.call(this,cursor__24113__auto__);
case 2:
return __GT_schema__2.call(this,cursor__24113__auto__,m56619);
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
var top_nav__delegate = function (data__24144__auto__,owner56758,p__56760){var vec__56827 = p__56760;var opts__24145__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56827,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema56832 = schema.core.Any;var input_schema56833 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684)),schema.core.Any,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map56828","map56828",-398466129,null))], null);var input_checker56834 = schema.core.checker(input_schema56833);var output_checker56835 = schema.core.checker(output_schema56832);return schema.core.schematize_fn(((function (ufv__,output_schema56832,input_schema56833,input_checker56834,output_checker56835,vec__56827,opts__24145__auto__){
return (function fnk56831(G__56836){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56893 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__56836], null);var temp__4126__auto___56894 = (function (){var G__56865 = args__838__auto___56893;return (input_checker56834.cljs$core$IFn$_invoke$arity$1 ? input_checker56834.cljs$core$IFn$_invoke$arity$1(G__56865) : input_checker56834.call(null,G__56865));
})();if(cljs.core.truth_(temp__4126__auto___56894))
{var error__839__auto___56895 = temp__4126__auto___56894;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk56831","fnk56831",645016460,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56895], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56833,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56893,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56895], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map56828 = G__56836;while(true){
if(cljs.core.map_QMARK_(map56828))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map56828], 0))));
}
var map56830 = plumbing.fnk.schema.safe_get(map56828,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(map56830,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var data_sources = plumbing.fnk.schema.safe_get(map56830,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map56830,new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684),null);var schema_visible_QMARK_ = plumbing.fnk.schema.safe_get(map56830,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map56828,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map56829 = plumbing.fnk.schema.safe_get(map56828,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var nav_items = plumbing.fnk.schema.safe_get(map56829,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));if(typeof stuttaford.radiant.components.t56866 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.components.t56866 = (function (vec__56827,current_data_source,owner,view,p__56760,G__56836,schema_visible_QMARK_,output_schema56832,data__24144__auto__,opts__24145__auto__,owner56758,nav_items,fnk56831,map56828,data_sources,output_checker56835,top_nav,input_schema56833,input_checker56834,map56829,validate__837__auto__,map56830,ufv__,meta56867){
this.vec__56827 = vec__56827;
this.current_data_source = current_data_source;
this.owner = owner;
this.view = view;
this.p__56760 = p__56760;
this.G__56836 = G__56836;
this.schema_visible_QMARK_ = schema_visible_QMARK_;
this.output_schema56832 = output_schema56832;
this.data__24144__auto__ = data__24144__auto__;
this.opts__24145__auto__ = opts__24145__auto__;
this.owner56758 = owner56758;
this.nav_items = nav_items;
this.fnk56831 = fnk56831;
this.map56828 = map56828;
this.data_sources = data_sources;
this.output_checker56835 = output_checker56835;
this.top_nav = top_nav;
this.input_schema56833 = input_schema56833;
this.input_checker56834 = input_checker56834;
this.map56829 = map56829;
this.validate__837__auto__ = validate__837__auto__;
this.map56830 = map56830;
this.ufv__ = ufv__;
this.meta56867 = meta56867;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.components.t56866.cljs$lang$type = true;
stuttaford.radiant.components.t56866.cljs$lang$ctorStr = "stuttaford.radiant.components/t56866";
stuttaford.radiant.components.t56866.cljs$lang$ctorPrWriter = ((function (nav_items,map56829,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map56830,validate__837__auto__,ufv__,output_schema56832,input_schema56833,input_checker56834,output_checker56835,vec__56827,opts__24145__auto__){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"stuttaford.radiant.components/t56866");
});})(nav_items,map56829,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map56830,validate__837__auto__,ufv__,output_schema56832,input_schema56833,input_checker56834,output_checker56835,vec__56827,opts__24145__auto__))
;
stuttaford.radiant.components.t56866.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.components.t56866.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (nav_items,map56829,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map56830,validate__837__auto__,ufv__,output_schema56832,input_schema56833,input_checker56834,output_checker56835,vec__56827,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "top-nav";
});})(nav_items,map56829,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map56830,validate__837__auto__,ufv__,output_schema56832,input_schema56833,input_checker56834,output_checker56835,vec__56827,opts__24145__auto__))
;
stuttaford.radiant.components.t56866.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.components.t56866.prototype.om$core$IRenderState$render_state$arity$2 = ((function (nav_items,map56829,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map56830,validate__837__auto__,ufv__,output_schema56832,input_schema56833,input_checker56834,output_checker56835,vec__56827,opts__24145__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var G__56871 = {"className": "radiant"};var G__56872 = "RADIANT";return React.DOM.div(G__56871,G__56872);
})(),om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20686__auto__ = ((function (c,___$1,nav_items,map56829,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map56830,validate__837__auto__,ufv__,output_schema56832,input_schema56833,input_checker56834,output_checker56835,vec__56827,opts__24145__auto__){
return (function iter__56873(s__56874){return (new cljs.core.LazySeq(null,((function (c,___$1,nav_items,map56829,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map56830,validate__837__auto__,ufv__,output_schema56832,input_schema56833,input_checker56834,output_checker56835,vec__56827,opts__24145__auto__){
return (function (){var s__56874__$1 = s__56874;while(true){
var temp__4126__auto__ = cljs.core.seq(s__56874__$1);if(temp__4126__auto__)
{var s__56874__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__56874__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__56874__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__56876 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__56875 = (0);while(true){
if((i__56875 < size__20685__auto__))
{var vec__56885 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__56875);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56885,(0),null);var vec__56886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56885,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56886,(0),null);cljs.core.chunk_append(b__56876,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__56887 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__56875,vec__56885,id,vec__56886,label,c__20683__auto__,size__20685__auto__,b__56876,s__56874__$2,temp__4126__auto__,c,___$1,nav_items,map56829,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map56830,validate__837__auto__,ufv__,output_schema56832,input_schema56833,input_checker56834,output_checker56835,vec__56827,opts__24145__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__56875,vec__56885,id,vec__56886,label,c__20683__auto__,size__20685__auto__,b__56876,s__56874__$2,temp__4126__auto__,c,___$1,nav_items,map56829,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map56830,validate__837__auto__,ufv__,output_schema56832,input_schema56833,input_checker56834,output_checker56835,vec__56827,opts__24145__auto__))
], null);var G__56887__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56887,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__56887);return G__56887__$1;
})(),cljs.core.array_seq([label], 0)));
{
var G__56896 = (i__56875 + (1));
i__56875 = G__56896;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__56876),iter__56873(cljs.core.chunk_rest(s__56874__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__56876),null);
}
} else
{var vec__56888 = cljs.core.first(s__56874__$2);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56888,(0),null);var vec__56889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56888,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56889,(0),null);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__56890 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__56888,id,vec__56889,label,s__56874__$2,temp__4126__auto__,c,___$1,nav_items,map56829,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map56830,validate__837__auto__,ufv__,output_schema56832,input_schema56833,input_checker56834,output_checker56835,vec__56827,opts__24145__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(vec__56888,id,vec__56889,label,s__56874__$2,temp__4126__auto__,c,___$1,nav_items,map56829,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map56830,validate__837__auto__,ufv__,output_schema56832,input_schema56833,input_checker56834,output_checker56835,vec__56827,opts__24145__auto__))
], null);var G__56890__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56890,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__56890);return G__56890__$1;
})(),cljs.core.array_seq([label], 0)),iter__56873(cljs.core.rest(s__56874__$2)));
}
} else
{return null;
}
break;
}
});})(c,___$1,nav_items,map56829,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map56830,validate__837__auto__,ufv__,output_schema56832,input_schema56833,input_checker56834,output_checker56835,vec__56827,opts__24145__auto__))
,null,null));
});})(c,___$1,nav_items,map56829,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map56830,validate__837__auto__,ufv__,output_schema56832,input_schema56833,input_checker56834,output_checker56835,vec__56827,opts__24145__auto__))
;return iter__20686__auto__(self__.nav_items);
})()], 0)),stuttaford.radiant.components.data_source_dropdown(c,self__.data_sources,self__.current_data_source),om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__56891 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (c,___$1,nav_items,map56829,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map56830,validate__837__auto__,ufv__,output_schema56832,input_schema56833,input_checker56834,output_checker56835,vec__56827,opts__24145__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-schema-visible","set-schema-visible",-1408939033),cljs.core.not(self__.schema_visible_QMARK_)], null));
});})(c,___$1,nav_items,map56829,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map56830,validate__837__auto__,ufv__,output_schema56832,input_schema56833,input_checker56834,output_checker56835,vec__56827,opts__24145__auto__))
], null);var G__56891__$1 = (cljs.core.truth_(self__.schema_visible_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56891,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__56891);return G__56891__$1;
})(),cljs.core.array_seq(["Show schema"], 0))], 0));
});})(nav_items,map56829,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map56830,validate__837__auto__,ufv__,output_schema56832,input_schema56833,input_checker56834,output_checker56835,vec__56827,opts__24145__auto__))
;
stuttaford.radiant.components.t56866.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (nav_items,map56829,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map56830,validate__837__auto__,ufv__,output_schema56832,input_schema56833,input_checker56834,output_checker56835,vec__56827,opts__24145__auto__){
return (function (_56868){var self__ = this;
var _56868__$1 = this;return self__.meta56867;
});})(nav_items,map56829,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map56830,validate__837__auto__,ufv__,output_schema56832,input_schema56833,input_checker56834,output_checker56835,vec__56827,opts__24145__auto__))
;
stuttaford.radiant.components.t56866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (nav_items,map56829,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map56830,validate__837__auto__,ufv__,output_schema56832,input_schema56833,input_checker56834,output_checker56835,vec__56827,opts__24145__auto__){
return (function (_56868,meta56867__$1){var self__ = this;
var _56868__$1 = this;return (new stuttaford.radiant.components.t56866(self__.vec__56827,self__.current_data_source,self__.owner,self__.view,self__.p__56760,self__.G__56836,self__.schema_visible_QMARK_,self__.output_schema56832,self__.data__24144__auto__,self__.opts__24145__auto__,self__.owner56758,self__.nav_items,self__.fnk56831,self__.map56828,self__.data_sources,self__.output_checker56835,self__.top_nav,self__.input_schema56833,self__.input_checker56834,self__.map56829,self__.validate__837__auto__,self__.map56830,self__.ufv__,meta56867__$1));
});})(nav_items,map56829,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map56830,validate__837__auto__,ufv__,output_schema56832,input_schema56833,input_checker56834,output_checker56835,vec__56827,opts__24145__auto__))
;
stuttaford.radiant.components.__GT_t56866 = ((function (nav_items,map56829,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map56830,validate__837__auto__,ufv__,output_schema56832,input_schema56833,input_checker56834,output_checker56835,vec__56827,opts__24145__auto__){
return (function __GT_t56866(vec__56827__$1,current_data_source__$1,owner__$1,view__$1,p__56760__$1,G__56836__$1,schema_visible_QMARK___$1,output_schema56832__$1,data__24144__auto____$1,opts__24145__auto____$1,owner56758__$1,nav_items__$1,fnk56831__$1,map56828__$1,data_sources__$1,output_checker56835__$1,top_nav__$1,input_schema56833__$1,input_checker56834__$1,map56829__$1,validate__837__auto____$1,map56830__$1,ufv____$1,meta56867){return (new stuttaford.radiant.components.t56866(vec__56827__$1,current_data_source__$1,owner__$1,view__$1,p__56760__$1,G__56836__$1,schema_visible_QMARK___$1,output_schema56832__$1,data__24144__auto____$1,opts__24145__auto____$1,owner56758__$1,nav_items__$1,fnk56831__$1,map56828__$1,data_sources__$1,output_checker56835__$1,top_nav__$1,input_schema56833__$1,input_checker56834__$1,map56829__$1,validate__837__auto____$1,map56830__$1,ufv____$1,meta56867));
});})(nav_items,map56829,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map56830,validate__837__auto__,ufv__,output_schema56832,input_schema56833,input_checker56834,output_checker56835,vec__56827,opts__24145__auto__))
;
}
return (new stuttaford.radiant.components.t56866(vec__56827,current_data_source,owner,view,p__56760,G__56836,schema_visible_QMARK_,output_schema56832,data__24144__auto__,opts__24145__auto__,owner56758,nav_items,fnk56831,map56828,data_sources,output_checker56835,top_nav,input_schema56833,input_checker56834,map56829,validate__837__auto__,map56830,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56897 = (function (){var G__56892 = o__840__auto__;return (output_checker56835.cljs$core$IFn$_invoke$arity$1 ? output_checker56835.cljs$core$IFn$_invoke$arity$1(G__56892) : output_checker56835.call(null,G__56892));
})();if(cljs.core.truth_(temp__4126__auto___56897))
{var error__839__auto___56898 = temp__4126__auto___56897;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk56831","fnk56831",645016460,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56898], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56832,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56898], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema56832,input_schema56833,input_checker56834,output_checker56835,vec__56827,opts__24145__auto__))
,schema.core.make_fn_schema(output_schema56832,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56833], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner56758,new cljs.core.Keyword(null,"data","data",-232669377),data__24144__auto__], null));
};
var top_nav = function (data__24144__auto__,owner56758,var_args){
var p__56760 = null;if (arguments.length > 2) {
  p__56760 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return top_nav__delegate.call(this,data__24144__auto__,owner56758,p__56760);};
top_nav.cljs$lang$maxFixedArity = 2;
top_nav.cljs$lang$applyTo = (function (arglist__56899){
var data__24144__auto__ = cljs.core.first(arglist__56899);
arglist__56899 = cljs.core.next(arglist__56899);
var owner56758 = cljs.core.first(arglist__56899);
var p__56760 = cljs.core.rest(arglist__56899);
return top_nav__delegate(data__24144__auto__,owner56758,p__56760);
});
top_nav.cljs$core$IFn$_invoke$arity$variadic = top_nav__delegate;
return top_nav;
})()
;
stuttaford.radiant.components.__GT_top_nav = (function() {
var __GT_top_nav = null;
var __GT_top_nav__1 = (function (cursor__24113__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.top_nav,cursor__24113__auto__);
});
var __GT_top_nav__2 = (function (cursor__24113__auto__,m56759){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.components.top_nav,cursor__24113__auto__,m56759);
});
__GT_top_nav = function(cursor__24113__auto__,m56759){
switch(arguments.length){
case 1:
return __GT_top_nav__1.call(this,cursor__24113__auto__);
case 2:
return __GT_top_nav__2.call(this,cursor__24113__auto__,m56759);
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
stuttaford.radiant.components.sort_rows = (function sort_rows(sort_col,rows){return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__56900_SHARP_){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__56900_SHARP_,sort_col);
}),rows);
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.components.result_table = (function() { 
var result_table__delegate = function (data__24144__auto__,owner56901,p__56903){var vec__57054 = p__56903;var opts__24145__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57054,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema57059 = schema.core.Any;var input_schema57060 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260)),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"rows","rows",850049680),schema.core.Any,new cljs.core.Keyword(null,"cols","cols",-1914801295),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map57055","map57055",-32640240,null))], null);var input_checker57061 = schema.core.checker(input_schema57060);var output_checker57062 = schema.core.checker(output_schema57059);return schema.core.schematize_fn(((function (ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__){
return (function fnk57058(G__57063){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57204 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57063], null);var temp__4126__auto___57205 = (function (){var G__57134 = args__838__auto___57204;return (input_checker57061.cljs$core$IFn$_invoke$arity$1 ? input_checker57061.cljs$core$IFn$_invoke$arity$1(G__57134) : input_checker57061.call(null,G__57134));
})();if(cljs.core.truth_(temp__4126__auto___57205))
{var error__839__auto___57206 = temp__4126__auto___57205;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk57058","fnk57058",-1392665093,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57206], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57060,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57204,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57206], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map57055 = G__57063;while(true){
if(cljs.core.map_QMARK_(map57055))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map57055], 0))));
}
var map57057 = plumbing.fnk.schema.safe_get(map57055,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var cols = plumbing.fnk.schema.safe_get(map57057,new cljs.core.Keyword(null,"cols","cols",-1914801295),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var rows = plumbing.fnk.schema.safe_get(map57057,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map57055,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map57056 = plumbing.fnk.schema.safe_get(map57055,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var allow_sorting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map57056,new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),false);if(typeof stuttaford.radiant.components.t57135 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.components.t57135 = (function (map57057,owner,map57056,output_checker57062,data__24144__auto__,output_schema57059,opts__24145__auto__,result_table,allow_sorting_QMARK_,map57055,G__57063,rows,input_checker57061,cols,validate__837__auto__,fnk57058,ufv__,input_schema57060,owner56901,vec__57054,p__56903,meta57136){
this.map57057 = map57057;
this.owner = owner;
this.map57056 = map57056;
this.output_checker57062 = output_checker57062;
this.data__24144__auto__ = data__24144__auto__;
this.output_schema57059 = output_schema57059;
this.opts__24145__auto__ = opts__24145__auto__;
this.result_table = result_table;
this.allow_sorting_QMARK_ = allow_sorting_QMARK_;
this.map57055 = map57055;
this.G__57063 = G__57063;
this.rows = rows;
this.input_checker57061 = input_checker57061;
this.cols = cols;
this.validate__837__auto__ = validate__837__auto__;
this.fnk57058 = fnk57058;
this.ufv__ = ufv__;
this.input_schema57060 = input_schema57060;
this.owner56901 = owner56901;
this.vec__57054 = vec__57054;
this.p__56903 = p__56903;
this.meta57136 = meta57136;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.components.t57135.cljs$lang$type = true;
stuttaford.radiant.components.t57135.cljs$lang$ctorStr = "stuttaford.radiant.components/t57135";
stuttaford.radiant.components.t57135.cljs$lang$ctorPrWriter = ((function (allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"stuttaford.radiant.components/t57135");
});})(allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__))
;
stuttaford.radiant.components.t57135.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.components.t57135.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "result-table";
});})(allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__))
;
stuttaford.radiant.components.t57135.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.components.t57135.prototype.om$core$IRenderState$render_state$arity$2 = ((function (allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__){
return (function (_,p__57138){var self__ = this;
var map__57139 = p__57138;var map__57139__$1 = ((cljs.core.seq_QMARK_(map__57139))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57139):map__57139);var current_page = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57139__$1,new cljs.core.Keyword(null,"current-page","current-page",-101294180),(0));var sort_col = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57139__$1,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882),(0));var ___$1 = this;var page_count = cljs.core.count(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.PAGE_SIZE,self__.rows));var paginate_QMARK_ = (page_count > (1));var G__57141 = null;var G__57142 = (function (){var G__57144 = {"className": "result-pagination"};var G__57145 = (function (){var attrs57140 = cljs.core.count(self__.rows);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs57140))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-count"], null)], null),attrs57140], 0))):{"className": "item-count"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs57140))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" items",sablono.interpreter.interpret(((paginate_QMARK_)?(" \u00B7 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(stuttaford.radiant.components.paginate_label(current_page,self__.rows))):null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs57140)," items",sablono.interpreter.interpret(((paginate_QMARK_)?(" \u00B7 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(stuttaford.radiant.components.paginate_label(current_page,self__.rows))):null))], null))));
})();var G__57146 = sablono.interpreter.interpret(((paginate_QMARK_)?om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20686__auto__ = ((function (G__57144,G__57145,G__57141,page_count,paginate_QMARK_,___$1,map__57139,map__57139__$1,current_page,sort_col,allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__){
return (function iter__57147(s__57148){return (new cljs.core.LazySeq(null,((function (G__57144,G__57145,G__57141,page_count,paginate_QMARK_,___$1,map__57139,map__57139__$1,current_page,sort_col,allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__){
return (function (){var s__57148__$1 = s__57148;while(true){
var temp__4126__auto__ = cljs.core.seq(s__57148__$1);if(temp__4126__auto__)
{var s__57148__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__57148__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__57148__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__57150 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__57149 = (0);while(true){
if((i__57149 < size__20685__auto__))
{var page = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__57149);cljs.core.chunk_append(b__57150,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__57155 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57149,page,c__20683__auto__,size__20685__auto__,b__57150,s__57148__$2,temp__4126__auto__,G__57144,G__57145,G__57141,page_count,paginate_QMARK_,___$1,map__57139,map__57139__$1,current_page,sort_col,allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page);
});})(i__57149,page,c__20683__auto__,size__20685__auto__,b__57150,s__57148__$2,temp__4126__auto__,G__57144,G__57145,G__57141,page_count,paginate_QMARK_,___$1,map__57139,map__57139__$1,current_page,sort_col,allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__))
], null);var G__57155__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57155,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__57155);return G__57155__$1;
})(),cljs.core.array_seq([(page + (1))], 0)));
{
var G__57207 = (i__57149 + (1));
i__57149 = G__57207;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__57150),iter__57147(cljs.core.chunk_rest(s__57148__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__57150),null);
}
} else
{var page = cljs.core.first(s__57148__$2);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__57156 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (page,s__57148__$2,temp__4126__auto__,G__57144,G__57145,G__57141,page_count,paginate_QMARK_,___$1,map__57139,map__57139__$1,current_page,sort_col,allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page);
});})(page,s__57148__$2,temp__4126__auto__,G__57144,G__57145,G__57141,page_count,paginate_QMARK_,___$1,map__57139,map__57139__$1,current_page,sort_col,allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__))
], null);var G__57156__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57156,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__57156);return G__57156__$1;
})(),cljs.core.array_seq([(page + (1))], 0)),iter__57147(cljs.core.rest(s__57148__$2)));
}
} else
{return null;
}
break;
}
});})(G__57144,G__57145,G__57141,page_count,paginate_QMARK_,___$1,map__57139,map__57139__$1,current_page,sort_col,allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__))
,null,null));
});})(G__57144,G__57145,G__57141,page_count,paginate_QMARK_,___$1,map__57139,map__57139__$1,current_page,sort_col,allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__))
;return iter__20686__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(page_count));
})()], 0)):null));return React.DOM.div(G__57144,G__57145,G__57146);
})();var G__57143 = sablono.interpreter.interpret(om_bootstrap.table.table.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"striped?","striped?",-797214979),true,new cljs.core.Keyword(null,"bordered?","bordered?",562358476),true,new cljs.core.Keyword(null,"condensed?","condensed?",-109797520),true,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),true], null),cljs.core.array_seq([cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57161 = null;var G__57162 = (function (){var attrs57159 = cljs.core.map_indexed(((function (G__57161,G__57141,G__57142,page_count,paginate_QMARK_,___$1,map__57139,map__57139__$1,current_page,sort_col,allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__){
return (function (i,v){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),(cljs.core.truth_(self__.allow_sorting_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__57161,G__57141,G__57142,page_count,paginate_QMARK_,___$1,map__57139,map__57139__$1,current_page,sort_col,allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882),i);
});})(G__57161,G__57141,G__57142,page_count,paginate_QMARK_,___$1,map__57139,map__57139__$1,current_page,sort_col,allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__))
], null):null),v,(cljs.core.truth_((function (){var and__19267__auto__ = self__.allow_sorting_QMARK_;if(cljs.core.truth_(and__19267__auto__))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,sort_col);
} else
{return and__19267__auto__;
}
})())?cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-chevron-down","span.glyphicon.glyphicon-chevron-down",-62425995)], null))," "):null)], null);
});})(G__57161,G__57141,G__57142,page_count,paginate_QMARK_,___$1,map__57139,map__57139__$1,current_page,sort_col,allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__))
,self__.cols);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tr,((cljs.core.map_QMARK_(attrs57159))?sablono.interpreter.attributes(attrs57159):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs57159))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs57159)], null))));
})();return React.DOM.thead(G__57161,G__57162);
})(),(function (){var G__57163 = null;var G__57164 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20686__auto__ = ((function (G__57163,G__57141,G__57142,page_count,paginate_QMARK_,___$1,map__57139,map__57139__$1,current_page,sort_col,allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__){
return (function iter__57165(s__57166){return (new cljs.core.LazySeq(null,((function (G__57163,G__57141,G__57142,page_count,paginate_QMARK_,___$1,map__57139,map__57139__$1,current_page,sort_col,allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__){
return (function (){var s__57166__$1 = s__57166;while(true){
var temp__4126__auto__ = cljs.core.seq(s__57166__$1);if(temp__4126__auto__)
{var s__57166__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__57166__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__57166__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__57168 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__57167 = (0);while(true){
if((i__57167 < size__20685__auto__))
{var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__57167);cljs.core.chunk_append(b__57168,(function (){var G__57187 = null;var G__57188 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20686__auto__ = ((function (i__57167,G__57187,row,c__20683__auto__,size__20685__auto__,b__57168,s__57166__$2,temp__4126__auto__,G__57163,G__57141,G__57142,page_count,paginate_QMARK_,___$1,map__57139,map__57139__$1,current_page,sort_col,allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__){
return (function iter__57189(s__57190){return (new cljs.core.LazySeq(null,((function (i__57167,G__57187,row,c__20683__auto__,size__20685__auto__,b__57168,s__57166__$2,temp__4126__auto__,G__57163,G__57141,G__57142,page_count,paginate_QMARK_,___$1,map__57139,map__57139__$1,current_page,sort_col,allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__){
return (function (){var s__57190__$1 = s__57190;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__57190__$1);if(temp__4126__auto____$1)
{var s__57190__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__57190__$2))
{var c__20683__auto____$1 = cljs.core.chunk_first(s__57190__$2);var size__20685__auto____$1 = cljs.core.count(c__20683__auto____$1);var b__57192 = cljs.core.chunk_buffer(size__20685__auto____$1);if((function (){var i__57191 = (0);while(true){
if((i__57191 < size__20685__auto____$1))
{var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto____$1,i__57191);cljs.core.chunk_append(b__57192,(function (){var attrs57160 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs57160))?sablono.interpreter.attributes(attrs57160):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs57160))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs57160)], null))));
})());
{
var G__57208 = (i__57191 + (1));
i__57191 = G__57208;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__57192),iter__57189(cljs.core.chunk_rest(s__57190__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__57192),null);
}
} else
{var value = cljs.core.first(s__57190__$2);return cljs.core.cons((function (){var attrs57160 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs57160))?sablono.interpreter.attributes(attrs57160):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs57160))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs57160)], null))));
})(),iter__57189(cljs.core.rest(s__57190__$2)));
}
} else
{return null;
}
break;
}
});})(i__57167,G__57187,row,c__20683__auto__,size__20685__auto__,b__57168,s__57166__$2,temp__4126__auto__,G__57163,G__57141,G__57142,page_count,paginate_QMARK_,___$1,map__57139,map__57139__$1,current_page,sort_col,allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__))
,null,null));
});})(i__57167,G__57187,row,c__20683__auto__,size__20685__auto__,b__57168,s__57166__$2,temp__4126__auto__,G__57163,G__57141,G__57142,page_count,paginate_QMARK_,___$1,map__57139,map__57139__$1,current_page,sort_col,allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__))
;return iter__20686__auto__(row);
})());return React.DOM.tr(G__57187,G__57188);
})());
{
var G__57209 = (i__57167 + (1));
i__57167 = G__57209;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__57168),iter__57165(cljs.core.chunk_rest(s__57166__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__57168),null);
}
} else
{var row = cljs.core.first(s__57166__$2);return cljs.core.cons((function (){var G__57195 = null;var G__57196 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20686__auto__ = ((function (G__57195,row,s__57166__$2,temp__4126__auto__,G__57163,G__57141,G__57142,page_count,paginate_QMARK_,___$1,map__57139,map__57139__$1,current_page,sort_col,allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__){
return (function iter__57197(s__57198){return (new cljs.core.LazySeq(null,((function (G__57195,row,s__57166__$2,temp__4126__auto__,G__57163,G__57141,G__57142,page_count,paginate_QMARK_,___$1,map__57139,map__57139__$1,current_page,sort_col,allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__){
return (function (){var s__57198__$1 = s__57198;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__57198__$1);if(temp__4126__auto____$1)
{var s__57198__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__57198__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__57198__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__57200 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__57199 = (0);while(true){
if((i__57199 < size__20685__auto__))
{var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__57199);cljs.core.chunk_append(b__57200,(function (){var attrs57160 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs57160))?sablono.interpreter.attributes(attrs57160):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs57160))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs57160)], null))));
})());
{
var G__57210 = (i__57199 + (1));
i__57199 = G__57210;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__57200),iter__57197(cljs.core.chunk_rest(s__57198__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__57200),null);
}
} else
{var value = cljs.core.first(s__57198__$2);return cljs.core.cons((function (){var attrs57160 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs57160))?sablono.interpreter.attributes(attrs57160):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs57160))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs57160)], null))));
})(),iter__57197(cljs.core.rest(s__57198__$2)));
}
} else
{return null;
}
break;
}
});})(G__57195,row,s__57166__$2,temp__4126__auto__,G__57163,G__57141,G__57142,page_count,paginate_QMARK_,___$1,map__57139,map__57139__$1,current_page,sort_col,allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__))
,null,null));
});})(G__57195,row,s__57166__$2,temp__4126__auto__,G__57163,G__57141,G__57142,page_count,paginate_QMARK_,___$1,map__57139,map__57139__$1,current_page,sort_col,allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__))
;return iter__20686__auto__(row);
})());return React.DOM.tr(G__57195,G__57196);
})(),iter__57165(cljs.core.rest(s__57166__$2)));
}
} else
{return null;
}
break;
}
});})(G__57163,G__57141,G__57142,page_count,paginate_QMARK_,___$1,map__57139,map__57139__$1,current_page,sort_col,allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__))
,null,null));
});})(G__57163,G__57141,G__57142,page_count,paginate_QMARK_,___$1,map__57139,map__57139__$1,current_page,sort_col,allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__))
;return iter__20686__auto__(stuttaford.radiant.components.sort_rows(sort_col,stuttaford.radiant.components.paginate(current_page,self__.rows)));
})());return React.DOM.tbody(G__57163,G__57164);
})()], null))], 0)));return React.DOM.div(G__57141,G__57142,G__57143);
});})(allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__))
;
stuttaford.radiant.components.t57135.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__){
return (function (_57137){var self__ = this;
var _57137__$1 = this;return self__.meta57136;
});})(allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__))
;
stuttaford.radiant.components.t57135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__){
return (function (_57137,meta57136__$1){var self__ = this;
var _57137__$1 = this;return (new stuttaford.radiant.components.t57135(self__.map57057,self__.owner,self__.map57056,self__.output_checker57062,self__.data__24144__auto__,self__.output_schema57059,self__.opts__24145__auto__,self__.result_table,self__.allow_sorting_QMARK_,self__.map57055,self__.G__57063,self__.rows,self__.input_checker57061,self__.cols,self__.validate__837__auto__,self__.fnk57058,self__.ufv__,self__.input_schema57060,self__.owner56901,self__.vec__57054,self__.p__56903,meta57136__$1));
});})(allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__))
;
stuttaford.radiant.components.__GT_t57135 = ((function (allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__){
return (function __GT_t57135(map57057__$1,owner__$1,map57056__$1,output_checker57062__$1,data__24144__auto____$1,output_schema57059__$1,opts__24145__auto____$1,result_table__$1,allow_sorting_QMARK___$1,map57055__$1,G__57063__$1,rows__$1,input_checker57061__$1,cols__$1,validate__837__auto____$1,fnk57058__$1,ufv____$1,input_schema57060__$1,owner56901__$1,vec__57054__$1,p__56903__$1,meta57136){return (new stuttaford.radiant.components.t57135(map57057__$1,owner__$1,map57056__$1,output_checker57062__$1,data__24144__auto____$1,output_schema57059__$1,opts__24145__auto____$1,result_table__$1,allow_sorting_QMARK___$1,map57055__$1,G__57063__$1,rows__$1,input_checker57061__$1,cols__$1,validate__837__auto____$1,fnk57058__$1,ufv____$1,input_schema57060__$1,owner56901__$1,vec__57054__$1,p__56903__$1,meta57136));
});})(allow_sorting_QMARK_,map57056,owner,rows,cols,map57057,validate__837__auto__,ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__))
;
}
return (new stuttaford.radiant.components.t57135(map57057,owner,map57056,output_checker57062,data__24144__auto__,output_schema57059,opts__24145__auto__,result_table,allow_sorting_QMARK_,map57055,G__57063,rows,input_checker57061,cols,validate__837__auto__,fnk57058,ufv__,input_schema57060,owner56901,vec__57054,p__56903,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57211 = (function (){var G__57203 = o__840__auto__;return (output_checker57062.cljs$core$IFn$_invoke$arity$1 ? output_checker57062.cljs$core$IFn$_invoke$arity$1(G__57203) : output_checker57062.call(null,G__57203));
})();if(cljs.core.truth_(temp__4126__auto___57211))
{var error__839__auto___57212 = temp__4126__auto___57211;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk57058","fnk57058",-1392665093,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57212], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57059,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57212], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema57059,input_schema57060,input_checker57061,output_checker57062,vec__57054,opts__24145__auto__))
,schema.core.make_fn_schema(output_schema57059,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57060], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner56901,new cljs.core.Keyword(null,"data","data",-232669377),data__24144__auto__], null));
};
var result_table = function (data__24144__auto__,owner56901,var_args){
var p__56903 = null;if (arguments.length > 2) {
  p__56903 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return result_table__delegate.call(this,data__24144__auto__,owner56901,p__56903);};
result_table.cljs$lang$maxFixedArity = 2;
result_table.cljs$lang$applyTo = (function (arglist__57213){
var data__24144__auto__ = cljs.core.first(arglist__57213);
arglist__57213 = cljs.core.next(arglist__57213);
var owner56901 = cljs.core.first(arglist__57213);
var p__56903 = cljs.core.rest(arglist__57213);
return result_table__delegate(data__24144__auto__,owner56901,p__56903);
});
result_table.cljs$core$IFn$_invoke$arity$variadic = result_table__delegate;
return result_table;
})()
;
stuttaford.radiant.components.__GT_result_table = (function() {
var __GT_result_table = null;
var __GT_result_table__1 = (function (cursor__24113__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.result_table,cursor__24113__auto__);
});
var __GT_result_table__2 = (function (cursor__24113__auto__,m56902){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.components.result_table,cursor__24113__auto__,m56902);
});
__GT_result_table = function(cursor__24113__auto__,m56902){
switch(arguments.length){
case 1:
return __GT_result_table__1.call(this,cursor__24113__auto__);
case 2:
return __GT_result_table__2.call(this,cursor__24113__auto__,m56902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_result_table.cljs$core$IFn$_invoke$arity$1 = __GT_result_table__1;
__GT_result_table.cljs$core$IFn$_invoke$arity$2 = __GT_result_table__2;
return __GT_result_table;
})()
;
//# sourceMappingURL=components.js.map