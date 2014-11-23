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
stuttaford.radiant.model.data_source_label = (function data_source_label(data_sources,id){return ("Data source"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(id)?(": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1((function (){var G__40911 = data_sources;return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__40911) : id.call(null,G__40911));
})()))):null)));
});
stuttaford.radiant.model.data_source = (function data_source(data_sources,id){var G__40914 = data_sources;var G__40914__$1 = (((G__40914 == null))?null:(function (){var G__40915 = G__40914;return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__40915) : id.call(null,G__40915));
})());var G__40914__$2 = (((G__40914__$1 == null))?null:new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(G__40914__$1));return G__40914__$2;
});
datascript.core.DB.prototype.om$core$IToCursor$ = true;
datascript.core.DB.prototype.om$core$IToCursor$_to_cursor$arity$2 = (function (this$,_){var this$__$1 = this;return this$__$1;
});
datascript.core.DB.prototype.om$core$IToCursor$_to_cursor$arity$3 = (function (this$,_,___$1){var this$__$1 = this;return this$__$1;
});
stuttaford.radiant.model.make_db_from_datoms = (function make_db_from_datoms(datoms){var conn = datascript.create_conn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("link","category","link/category",-596283622),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword("link","tags","link/tags",1765991695),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)], null)], 0));datascript.transact_BANG_(conn,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (conn){
return (function (p__40919){var vec__40920 = p__40919;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40920,(0),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40920,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40920,(2),null);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e,a,v], null);
});})(conn))
,datoms));
var G__40921 = conn;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40921) : cljs.core.deref.call(null,G__40921));
});
stuttaford.radiant.model.schema_for_attr = (function schema_for_attr(schema__$1,attr){return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__19663__auto__ = (function (){var G__40925 = schema__$1;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__40925) : attr.call(null,G__40925));
})();if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
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
stuttaford.radiant.model.e_fn = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema40927 = schema.core.Any;var input_schema40928 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"e","e",1381269198),schema.core.Any], true, false),new cljs.core.Symbol(null,"map40926","map40926",1628602910,null))], null);var input_checker40929 = schema.core.checker(input_schema40928);var output_checker40930 = schema.core.checker(output_schema40927);return schema.core.schematize_fn(((function (ufv__,output_schema40927,input_schema40928,input_checker40929,output_checker40930){
return (function e_fn(G__40931){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40936 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40931], null);var temp__4126__auto___40937 = (function (){var G__40934 = args__838__auto___40936;return (input_checker40929.cljs$core$IFn$_invoke$arity$1 ? input_checker40929.cljs$core$IFn$_invoke$arity$1(G__40934) : input_checker40929.call(null,G__40934));
})();if(cljs.core.truth_(temp__4126__auto___40937))
{var error__839__auto___40938 = temp__4126__auto___40937;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"e-fn","e-fn",1768020781,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40938], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40928,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40936,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40938], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map40926 = G__40931;while(true){
if(cljs.core.map_QMARK_(map40926))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map40926], 0))));
}
var e = plumbing.fnk.schema.safe_get(map40926,new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.PersistentVector.EMPTY);if(typeof e === 'number')
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
{var temp__4126__auto___40939 = (function (){var G__40935 = o__840__auto__;return (output_checker40930.cljs$core$IFn$_invoke$arity$1 ? output_checker40930.cljs$core$IFn$_invoke$arity$1(G__40935) : output_checker40930.call(null,G__40935));
})();if(cljs.core.truth_(temp__4126__auto___40939))
{var error__839__auto___40940 = temp__4126__auto___40939;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"e-fn","e-fn",1768020781,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40940], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40927,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40940], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema40927,input_schema40928,input_checker40929,output_checker40930))
,schema.core.make_fn_schema(output_schema40927,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40928], null)));
})();
stuttaford.radiant.model.a_fn = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema40942 = schema.core.Any;var input_schema40943 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"a","a",-2123407586),schema.core.Any], true, false),new cljs.core.Symbol(null,"map40941","map40941",-677035691,null))], null);var input_checker40944 = schema.core.checker(input_schema40943);var output_checker40945 = schema.core.checker(output_schema40942);return schema.core.schematize_fn(((function (ufv__,output_schema40942,input_schema40943,input_checker40944,output_checker40945){
return (function a_fn(G__40946){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40953 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40946], null);var temp__4126__auto___40954 = (function (){var G__40950 = args__838__auto___40953;return (input_checker40944.cljs$core$IFn$_invoke$arity$1 ? input_checker40944.cljs$core$IFn$_invoke$arity$1(G__40950) : input_checker40944.call(null,G__40950));
})();if(cljs.core.truth_(temp__4126__auto___40954))
{var error__839__auto___40955 = temp__4126__auto___40954;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"a-fn","a-fn",661366254,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40955], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40943,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40953,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40955], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map40941 = G__40946;while(true){
if(cljs.core.map_QMARK_(map40941))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map40941], 0))));
}
var a = plumbing.fnk.schema.safe_get(map40941,new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.PersistentVector.EMPTY);if(cljs.core.seq(a))
{try{return cljs.reader.read_string(a);
}catch (e40951){var e = e40951;return null;
}} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40956 = (function (){var G__40952 = o__840__auto__;return (output_checker40945.cljs$core$IFn$_invoke$arity$1 ? output_checker40945.cljs$core$IFn$_invoke$arity$1(G__40952) : output_checker40945.call(null,G__40952));
})();if(cljs.core.truth_(temp__4126__auto___40956))
{var error__839__auto___40957 = temp__4126__auto___40956;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"a-fn","a-fn",661366254,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40957], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40942,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40957], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema40942,input_schema40943,input_checker40944,output_checker40945))
,schema.core.make_fn_schema(output_schema40942,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40943], null)));
})();
stuttaford.radiant.model.v_fn = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema40959 = schema.core.Any;var input_schema40960 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"v","v",21465059),schema.core.Any], true, false),new cljs.core.Symbol(null,"map40958","map40958",-1050697852,null))], null);var input_checker40961 = schema.core.checker(input_schema40960);var output_checker40962 = schema.core.checker(output_schema40959);return schema.core.schematize_fn(((function (ufv__,output_schema40959,input_schema40960,input_checker40961,output_checker40962){
return (function v_fn(G__40963){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40970 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40963], null);var temp__4126__auto___40971 = (function (){var G__40967 = args__838__auto___40970;return (input_checker40961.cljs$core$IFn$_invoke$arity$1 ? input_checker40961.cljs$core$IFn$_invoke$arity$1(G__40967) : input_checker40961.call(null,G__40967));
})();if(cljs.core.truth_(temp__4126__auto___40971))
{var error__839__auto___40972 = temp__4126__auto___40971;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"v-fn","v-fn",912341789,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40972], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40960,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40970,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40972], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map40958 = G__40963;while(true){
if(cljs.core.map_QMARK_(map40958))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map40958], 0))));
}
var v = plumbing.fnk.schema.safe_get(map40958,new cljs.core.Keyword(null,"v","v",21465059),cljs.core.PersistentVector.EMPTY);if(typeof v === 'number')
{return v;
} else
{if((typeof v === 'string') && (cljs.core.seq(v)))
{try{var v_as_long = cljs.core.long$(v);if(cljs.core.truth_(v_as_long.isNaN()))
{return v;
} else
{return v_as_long;
}
}catch (e40968){var e = e40968;return v;
}} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40973 = (function (){var G__40969 = o__840__auto__;return (output_checker40962.cljs$core$IFn$_invoke$arity$1 ? output_checker40962.cljs$core$IFn$_invoke$arity$1(G__40969) : output_checker40962.call(null,G__40969));
})();if(cljs.core.truth_(temp__4126__auto___40973))
{var error__839__auto___40974 = temp__4126__auto___40973;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"v-fn","v-fn",912341789,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40974], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40959,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40974], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema40959,input_schema40960,input_checker40961,output_checker40962))
,schema.core.make_fn_schema(output_schema40959,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40960], null)));
})();
stuttaford.radiant.model.order_fn = (function order_fn(index){var G__40976 = (((index instanceof cljs.core.Keyword))?index.fqn:null);switch (G__40976) {
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
stuttaford.radiant.model.components = (function components(index){var G__40979 = (((index instanceof cljs.core.Keyword))?index.fqn:null);switch (G__40979) {
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
stuttaford.radiant.model.cols = (function cols(index){var G__40982 = (((index instanceof cljs.core.Keyword))?index.fqn:null);switch (G__40982) {
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