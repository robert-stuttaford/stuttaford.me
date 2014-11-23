goog.provide('stuttaford.radiant.actions');
goog.require('cljs.core');
goog.require('stuttaford.radiant.model');
goog.require('stuttaford.radiant.model');
goog.require('om.core');
goog.require('om.core');
stuttaford.radiant.actions.perform_action = (function (){var method_table__21360__auto__ = (function (){var G__41695 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41695) : cljs.core.atom.call(null,G__41695));
})();var prefer_table__21361__auto__ = (function (){var G__41696 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41696) : cljs.core.atom.call(null,G__41696));
})();var method_cache__21362__auto__ = (function (){var G__41697 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41697) : cljs.core.atom.call(null,G__41697));
})();var cached_hierarchy__21363__auto__ = (function (){var G__41698 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41698) : cljs.core.atom.call(null,G__41698));
})();var hierarchy__21364__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("perform-action",((function (method_table__21360__auto__,prefer_table__21361__auto__,method_cache__21362__auto__,cached_hierarchy__21363__auto__,hierarchy__21364__auto__){
return (function (cursor,op,value,debug_QMARK_){if(cljs.core.truth_(debug_QMARK_))
{cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["ACTION:",op,value], 0));
} else
{}
return op;
});})(method_table__21360__auto__,prefer_table__21361__auto__,method_cache__21362__auto__,cached_hierarchy__21363__auto__,hierarchy__21364__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21364__auto__,method_table__21360__auto__,prefer_table__21361__auto__,method_cache__21362__auto__,cached_hierarchy__21363__auto__));
})();
stuttaford.radiant.actions.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (cursor,op,value){throw ("Missing perform-method op: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(op));
}));
stuttaford.radiant.actions.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-view","set-view",356827761),(function (cursor,op,value){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(cursor,new cljs.core.Keyword(null,"view","view",1247994814),value);
}));
stuttaford.radiant.actions.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-data-source","set-data-source",-1371173368),(function (cursor,op,value){om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(cursor,new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684),value);
var map__41699 = (function (){var G__41700 = cursor;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41700) : cljs.core.deref.call(null,G__41700));
})();var map__41699__$1 = ((cljs.core.seq_QMARK_(map__41699))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41699):map__41699);var current_data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41699__$1,new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684));var data_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41699__$1,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574));var temp__4126__auto__ = stuttaford.radiant.model.data_source(data_sources,current_data_source);if(cljs.core.truth_(temp__4126__auto__))
{var datoms = temp__4126__auto__;return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(cursor,new cljs.core.Keyword(null,"current-db","current-db",213667882),stuttaford.radiant.model.make_db_from_datoms(datoms));
} else
{return null;
}
}));
stuttaford.radiant.actions.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-schema-visible","set-schema-visible",-1408939033),(function (cursor,op,value){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(cursor,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),value);
}));
stuttaford.radiant.actions.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-datoms-index","set-datoms-index",-683154215),(function (cursor,op,value){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(cursor,new cljs.core.Keyword(null,"current-datoms-index","current-datoms-index",-2105231673),value);
}));
stuttaford.radiant.actions.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-datoms-component","set-datoms-component",1418887496),(function (cursor,op,p__41701){var vec__41702 = p__41701;var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41702,(0),null);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41702,(1),null);return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-datoms-components","current-datoms-components",-702648628),component], null),value);
}));
//# sourceMappingURL=actions.js.map