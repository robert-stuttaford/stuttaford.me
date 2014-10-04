goog.provide('stuttaford.radiant.model');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.core');
goog.require('plumbing.core');
goog.require('datascript.core');
goog.require('datascript.core');
goog.require('datascript');
goog.require('datascript');
goog.require('cljs.reader');
goog.require('cljs.reader');
stuttaford.radiant.model.data_source_label = (function data_source_label(data_sources,id){return ("Data source"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(id)?(": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1((function (){var G__45944 = data_sources;return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__45944) : id.call(null,G__45944));
})()))):null)));
});
stuttaford.radiant.model.data_source = (function data_source(data_sources,id){var G__45947 = data_sources;var G__45947__$1 = (((G__45947 == null))?null:(function (){var G__45948 = G__45947;return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__45948) : id.call(null,G__45948));
})());var G__45947__$2 = (((G__45947__$1 == null))?null:new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(G__45947__$1));return G__45947__$2;
});
datascript.core.DB.prototype.om$core$IToCursor$ = true;
datascript.core.DB.prototype.om$core$IToCursor$_to_cursor$arity$2 = (function (this$,_){var this$__$1 = this;return this$__$1;
});
datascript.core.DB.prototype.om$core$IToCursor$_to_cursor$arity$3 = (function (this$,_,___$1){var this$__$1 = this;return this$__$1;
});
stuttaford.radiant.model.make_db_from_datoms = (function make_db_from_datoms(datoms){var conn = datascript.create_conn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("link","category","link/category",-596283622),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword("link","tags","link/tags",1765991695),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)], null)], 0));datascript.transact_BANG_(conn,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (conn){
return (function (p__45952){var vec__45953 = p__45952;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45953,(0),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45953,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45953,(2),null);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e,a,v], null);
});})(conn))
,datoms));
var G__45954 = conn;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__45954) : cljs.core.deref.call(null,G__45954));
});
stuttaford.radiant.model.schema_for_attr = (function schema_for_attr(schema__$1,attr){return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__19267__auto__ = (function (){var G__45958 = schema__$1;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__45958) : attr.call(null,G__45958));
})();if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),attr], null));
});
stuttaford.radiant.model.schema_for_db = (function schema_for_db(db){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.model.schema_for_attr,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(db)),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.distinct(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"a","a",-2123407586),datascript.datoms(db,new cljs.core.Keyword(null,"aevt","aevt",-585148059))))));
});
stuttaford.radiant.model.indexes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032)], null);
stuttaford.radiant.model.ensure_components = (function ensure_components(components){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"e","e",1381269198),null,new cljs.core.Keyword(null,"a","a",-2123407586),null,new cljs.core.Keyword(null,"v","v",21465059),null], null),components], 0));
});
stuttaford.radiant.model.e_fn = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema45960 = schema.core.Any;var input_schema45961 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"e","e",1381269198),schema.core.Any], true, false),new cljs.core.Symbol(null,"map45959","map45959",2132527952,null))], null);var input_checker45962 = schema.core.checker(input_schema45961);var output_checker45963 = schema.core.checker(output_schema45960);return schema.core.schematize_fn(((function (ufv__,output_schema45960,input_schema45961,input_checker45962,output_checker45963){
return (function e_fn(G__45964){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___45969 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__45964], null);var temp__4126__auto___45970 = (function (){var G__45967 = args__838__auto___45969;return (input_checker45962.cljs$core$IFn$_invoke$arity$1 ? input_checker45962.cljs$core$IFn$_invoke$arity$1(G__45967) : input_checker45962.call(null,G__45967));
})();if(cljs.core.truth_(temp__4126__auto___45970))
{var error__839__auto___45971 = temp__4126__auto___45970;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"e-fn","e-fn",1768020781,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___45971], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema45961,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___45969,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___45971], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map45959 = G__45964;while(true){
if(cljs.core.map_QMARK_(map45959))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map45959], 0))));
}
var e = plumbing.fnk.schema.safe_get(map45959,new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.PersistentVector.EMPTY);if(typeof e === 'number')
{return e;
} else
{if((typeof e === 'string') && (cljs.core.seq(e)))
{return cljs.core.long$(e);
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___45972 = (function (){var G__45968 = o__840__auto__;return (output_checker45963.cljs$core$IFn$_invoke$arity$1 ? output_checker45963.cljs$core$IFn$_invoke$arity$1(G__45968) : output_checker45963.call(null,G__45968));
})();if(cljs.core.truth_(temp__4126__auto___45972))
{var error__839__auto___45973 = temp__4126__auto___45972;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"e-fn","e-fn",1768020781,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___45973], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema45960,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___45973], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema45960,input_schema45961,input_checker45962,output_checker45963))
,schema.core.make_fn_schema(output_schema45960,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema45961], null)));
})();
stuttaford.radiant.model.a_fn = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema45975 = schema.core.Any;var input_schema45976 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"a","a",-2123407586),schema.core.Any], true, false),new cljs.core.Symbol(null,"map45974","map45974",-2132762694,null))], null);var input_checker45977 = schema.core.checker(input_schema45976);var output_checker45978 = schema.core.checker(output_schema45975);return schema.core.schematize_fn(((function (ufv__,output_schema45975,input_schema45976,input_checker45977,output_checker45978){
return (function a_fn(G__45979){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___45986 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__45979], null);var temp__4126__auto___45987 = (function (){var G__45983 = args__838__auto___45986;return (input_checker45977.cljs$core$IFn$_invoke$arity$1 ? input_checker45977.cljs$core$IFn$_invoke$arity$1(G__45983) : input_checker45977.call(null,G__45983));
})();if(cljs.core.truth_(temp__4126__auto___45987))
{var error__839__auto___45988 = temp__4126__auto___45987;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"a-fn","a-fn",661366254,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___45988], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema45976,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___45986,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___45988], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map45974 = G__45979;while(true){
if(cljs.core.map_QMARK_(map45974))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map45974], 0))));
}
var a = plumbing.fnk.schema.safe_get(map45974,new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.PersistentVector.EMPTY);if(cljs.core.seq(a))
{try{return cljs.reader.read_string(a);
}catch (e45984){var e = e45984;return null;
}} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___45989 = (function (){var G__45985 = o__840__auto__;return (output_checker45978.cljs$core$IFn$_invoke$arity$1 ? output_checker45978.cljs$core$IFn$_invoke$arity$1(G__45985) : output_checker45978.call(null,G__45985));
})();if(cljs.core.truth_(temp__4126__auto___45989))
{var error__839__auto___45990 = temp__4126__auto___45989;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"a-fn","a-fn",661366254,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___45990], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema45975,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___45990], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema45975,input_schema45976,input_checker45977,output_checker45978))
,schema.core.make_fn_schema(output_schema45975,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema45976], null)));
})();
stuttaford.radiant.model.v_fn = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema45992 = schema.core.Any;var input_schema45993 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"v","v",21465059),schema.core.Any], true, false),new cljs.core.Symbol(null,"map45991","map45991",-761965940,null))], null);var input_checker45994 = schema.core.checker(input_schema45993);var output_checker45995 = schema.core.checker(output_schema45992);return schema.core.schematize_fn(((function (ufv__,output_schema45992,input_schema45993,input_checker45994,output_checker45995){
return (function v_fn(G__45996){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___46003 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__45996], null);var temp__4126__auto___46004 = (function (){var G__46000 = args__838__auto___46003;return (input_checker45994.cljs$core$IFn$_invoke$arity$1 ? input_checker45994.cljs$core$IFn$_invoke$arity$1(G__46000) : input_checker45994.call(null,G__46000));
})();if(cljs.core.truth_(temp__4126__auto___46004))
{var error__839__auto___46005 = temp__4126__auto___46004;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"v-fn","v-fn",912341789,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___46005], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema45993,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___46003,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___46005], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map45991 = G__45996;while(true){
if(cljs.core.map_QMARK_(map45991))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map45991], 0))));
}
var v = plumbing.fnk.schema.safe_get(map45991,new cljs.core.Keyword(null,"v","v",21465059),cljs.core.PersistentVector.EMPTY);if(typeof v === 'number')
{return v;
} else
{if((typeof v === 'string') && (cljs.core.seq(v)))
{try{var v_as_long = cljs.core.long$(v);if(cljs.core.truth_(v_as_long.isNaN()))
{return v;
} else
{return v_as_long;
}
}catch (e46001){var e = e46001;return v;
}} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___46006 = (function (){var G__46002 = o__840__auto__;return (output_checker45995.cljs$core$IFn$_invoke$arity$1 ? output_checker45995.cljs$core$IFn$_invoke$arity$1(G__46002) : output_checker45995.call(null,G__46002));
})();if(cljs.core.truth_(temp__4126__auto___46006))
{var error__839__auto___46007 = temp__4126__auto___46006;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"v-fn","v-fn",912341789,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___46007], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema45992,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___46007], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema45992,input_schema45993,input_checker45994,output_checker45995))
,schema.core.make_fn_schema(output_schema45992,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema45993], null)));
})();
stuttaford.radiant.model.order_fn = (function order_fn(index){var G__46009 = (((index instanceof cljs.core.Keyword))?index.fqn:null);switch (G__46009) {
case "avet":
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.model.a_fn,stuttaford.radiant.model.v_fn,stuttaford.radiant.model.e_fn);

break;
case "aevt":
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.model.a_fn,stuttaford.radiant.model.e_fn,stuttaford.radiant.model.v_fn);

break;
case "eavt":
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.model.e_fn,stuttaford.radiant.model.a_fn,stuttaford.radiant.model.v_fn);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index))));

}
});
stuttaford.radiant.model.components = (function components(index){var G__46012 = (((index instanceof cljs.core.Keyword))?index.fqn:null);switch (G__46012) {
case "avet":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"e","e",1381269198)], null);

break;
case "aevt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"v","v",21465059)], null);

break;
case "eavt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"v","v",21465059)], null);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index))));

}
});
stuttaford.radiant.model.cols = (function cols(index){var G__46015 = (((index instanceof cljs.core.Keyword))?index.fqn:null);switch (G__46015) {
case "avet":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","V","E"], null);

break;
case "aevt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","E","V"], null);

break;
case "eavt":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["E","A","V"], null);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index))));

}
});
//# sourceMappingURL=model.js.map