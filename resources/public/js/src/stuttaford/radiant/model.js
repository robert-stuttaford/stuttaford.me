goog.provide('stuttaford.radiant.model');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.core');
goog.require('datascript.core');
goog.require('datascript.core');
goog.require('datascript');
goog.require('datascript');
stuttaford.radiant.model.data_source_label = (function data_source_label(data_sources,id){return ("Data source"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(id)?(": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1((function (){var G__70184 = data_sources;return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__70184) : id.call(null,G__70184));
})()))):null)));
});
stuttaford.radiant.model.data_source = (function data_source(data_sources,id){var G__70187 = data_sources;var G__70187__$1 = (((G__70187 == null))?null:(function (){var G__70188 = G__70187;return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__70188) : id.call(null,G__70188));
})());var G__70187__$2 = (((G__70187__$1 == null))?null:new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(G__70187__$1));return G__70187__$2;
});
datascript.core.DB.prototype.om$core$IToCursor$ = true;
datascript.core.DB.prototype.om$core$IToCursor$_to_cursor$arity$2 = (function (this$,_){var this$__$1 = this;return this$__$1;
});
datascript.core.DB.prototype.om$core$IToCursor$_to_cursor$arity$3 = (function (this$,_,___$1){var this$__$1 = this;return this$__$1;
});
stuttaford.radiant.model.make_db_from_datoms = (function make_db_from_datoms(datoms){var conn = datascript.create_conn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("link","category","link/category",-596283622),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword("link","tags","link/tags",1765991695),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)], null)], 0));datascript.transact_BANG_(conn,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (conn){
return (function (p__70192){var vec__70193 = p__70192;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70193,(0),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70193,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70193,(2),null);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e,a,v], null);
});})(conn))
,datoms));
var G__70194 = conn;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70194) : cljs.core.deref.call(null,G__70194));
});
stuttaford.radiant.model.schema_for_attr = (function schema_for_attr(schema__$1,attr){return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__19347__auto__ = (function (){var G__70198 = schema__$1;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__70198) : attr.call(null,G__70198));
})();if(cljs.core.truth_(or__19347__auto__))
{return or__19347__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),attr], null));
});
stuttaford.radiant.model.schema_for_db = (function schema_for_db(db){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.model.schema_for_attr,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(db)),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.distinct(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"a","a",-2123407586),datascript.datoms(db,new cljs.core.Keyword(null,"aevt","aevt",-585148059))))));
});
stuttaford.radiant.model.indexes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032)], null);
var G__70204_70208 = stuttaford.radiant.model.e_fn;var G__70205_70209 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.model.e], null);var G__70206_70210 = (function (){var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(stuttaford.radiant.model.datom);if(cljs.core.seq(e))
{return cljs.core.long$(e);
} else
{return null;
}
})();(stuttaford.radiant.model.defnk.cljs$core$IFn$_invoke$arity$3 ? stuttaford.radiant.model.defnk.cljs$core$IFn$_invoke$arity$3(G__70204_70208,G__70205_70209,G__70206_70210) : stuttaford.radiant.model.defnk.call(null,G__70204_70208,G__70205_70209,G__70206_70210));
var G__70211_70216 = stuttaford.radiant.model.a_fn;var G__70212_70217 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.model.a], null);var G__70213_70218 = ((cljs.core.seq(stuttaford.radiant.model.a))?(function (){try{var G__70215 = stuttaford.radiant.model.a;return (edn.read_string.cljs$core$IFn$_invoke$arity$1 ? edn.read_string.cljs$core$IFn$_invoke$arity$1(G__70215) : edn.read_string.call(null,G__70215));
}catch (e70214){var e = e70214;return null;
}})():null);(stuttaford.radiant.model.defnk.cljs$core$IFn$_invoke$arity$3 ? stuttaford.radiant.model.defnk.cljs$core$IFn$_invoke$arity$3(G__70211_70216,G__70212_70217,G__70213_70218) : stuttaford.radiant.model.defnk.call(null,G__70211_70216,G__70212_70217,G__70213_70218));
var G__70224_70229 = stuttaford.radiant.model.v_fn;var G__70225_70230 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stuttaford.radiant.model.v], null);var G__70226_70231 = ((cljs.core.seq(stuttaford.radiant.model.v))?(function (){try{var v_as_long = cljs.core.long$(stuttaford.radiant.model.v);if(cljs.core.truth_(v_as_long.isNaN()))
{return stuttaford.radiant.model.v;
} else
{return v_as_long;
}
}catch (e70228){var e = e70228;return stuttaford.radiant.model.v;
}})():null);(stuttaford.radiant.model.defnk.cljs$core$IFn$_invoke$arity$3 ? stuttaford.radiant.model.defnk.cljs$core$IFn$_invoke$arity$3(G__70224_70229,G__70225_70230,G__70226_70231) : stuttaford.radiant.model.defnk.call(null,G__70224_70229,G__70225_70230,G__70226_70231));
//# sourceMappingURL=model.js.map