goog.provide('stuttaford.dive_into_datomic.actions');
goog.require('cljs.core');
goog.require('stuttaford.radiant.model');
goog.require('stuttaford.radiant.model');
goog.require('om.core');
goog.require('om.core');
stuttaford.dive_into_datomic.actions.perform_action = (function (){var method_table__21128__auto__ = (function (){var G__41159 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41159) : cljs.core.atom.call(null,G__41159));
})();var prefer_table__21129__auto__ = (function (){var G__41160 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41160) : cljs.core.atom.call(null,G__41160));
})();var method_cache__21130__auto__ = (function (){var G__41161 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41161) : cljs.core.atom.call(null,G__41161));
})();var cached_hierarchy__21131__auto__ = (function (){var G__41162 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41162) : cljs.core.atom.call(null,G__41162));
})();var hierarchy__21132__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("perform-action",((function (method_table__21128__auto__,prefer_table__21129__auto__,method_cache__21130__auto__,cached_hierarchy__21131__auto__,hierarchy__21132__auto__){
return (function (cursor,op,value,debug_QMARK_){if(cljs.core.truth_(debug_QMARK_))
{cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["ACTION:",op,value], 0));
} else
{}
return op;
});})(method_table__21128__auto__,prefer_table__21129__auto__,method_cache__21130__auto__,cached_hierarchy__21131__auto__,hierarchy__21132__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21132__auto__,method_table__21128__auto__,prefer_table__21129__auto__,method_cache__21130__auto__,cached_hierarchy__21131__auto__));
})();
stuttaford.dive_into_datomic.actions.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (cursor,op,value){throw ("Missing perform-method op: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(op));
}));
stuttaford.dive_into_datomic.actions.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-view","set-view",356827761),(function (cursor,op,value){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(cursor,new cljs.core.Keyword(null,"view","view",1247994814),value);
}));
//# sourceMappingURL=actions.js.map