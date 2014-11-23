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
stuttaford.radiant.model.data_source_label = (function data_source_label(data_sources,id){return ("Data source"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(id)?(": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1((function (){var G__77025 = data_sources;return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__77025) : id.call(null,G__77025));
})()))):null)));
});
stuttaford.radiant.model.data_source = (function data_source(data_sources,id){var G__77028 = data_sources;var G__77028__$1 = (((G__77028 == null))?null:(function (){var G__77029 = G__77028;return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__77029) : id.call(null,G__77029));
})());var G__77028__$2 = (((G__77028__$1 == null))?null:new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(G__77028__$1));return G__77028__$2;
});
datascript.core.DB.prototype.om$core$IToCursor$ = true;
datascript.core.DB.prototype.om$core$IToCursor$_to_cursor$arity$2 = (function (this$,_){var this$__$1 = this;return this$__$1;
});
datascript.core.DB.prototype.om$core$IToCursor$_to_cursor$arity$3 = (function (this$,_,___$1){var this$__$1 = this;return this$__$1;
});
stuttaford.radiant.model.make_db_from_datoms = (function make_db_from_datoms(datoms){var conn = datascript.create_conn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("link","category","link/category",-596283622),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword("link","tags","link/tags",1765991695),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)], null)], 0));datascript.transact_BANG_(conn,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (conn){
return (function (p__77033){var vec__77034 = p__77033;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77034,(0),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77034,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77034,(2),null);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e,a,v], null);
});})(conn))
,datoms));
var G__77035 = conn;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__77035) : cljs.core.deref.call(null,G__77035));
});
stuttaford.radiant.model.schema_for_attr = (function schema_for_attr(schema__$1,attr){return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__19711__auto__ = (function (){var G__77039 = schema__$1;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__77039) : attr.call(null,G__77039));
})();if(cljs.core.truth_(or__19711__auto__))
{return or__19711__auto__;
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
stuttaford.radiant.model.e_fn = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema77041 = schema.core.Any;var input_schema77042 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"e","e",1381269198),schema.core.Any], true, false),new cljs.core.Symbol(null,"map77040","map77040",1787710886,null))], null);var input_checker77043 = schema.core.checker(input_schema77042);var output_checker77044 = schema.core.checker(output_schema77041);return schema.core.schematize_fn(((function (ufv__,output_schema77041,input_schema77042,input_checker77043,output_checker77044){
return (function e_fn(G__77045){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___77050 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__77045], null);var temp__4126__auto___77051 = (function (){var G__77048 = args__838__auto___77050;return (input_checker77043.cljs$core$IFn$_invoke$arity$1 ? input_checker77043.cljs$core$IFn$_invoke$arity$1(G__77048) : input_checker77043.call(null,G__77048));
})();if(cljs.core.truth_(temp__4126__auto___77051))
{var error__839__auto___77052 = temp__4126__auto___77051;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"e-fn","e-fn",1768020781,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77052], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema77042,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___77050,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77052], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map77040 = G__77045;while(true){
if(cljs.core.map_QMARK_(map77040))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map77040], 0))));
}
var e = plumbing.fnk.schema.safe_get(map77040,new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.PersistentVector.EMPTY);if(typeof e === 'number')
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
{var temp__4126__auto___77053 = (function (){var G__77049 = o__840__auto__;return (output_checker77044.cljs$core$IFn$_invoke$arity$1 ? output_checker77044.cljs$core$IFn$_invoke$arity$1(G__77049) : output_checker77044.call(null,G__77049));
})();if(cljs.core.truth_(temp__4126__auto___77053))
{var error__839__auto___77054 = temp__4126__auto___77053;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"e-fn","e-fn",1768020781,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77054], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema77041,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77054], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema77041,input_schema77042,input_checker77043,output_checker77044))
,schema.core.make_fn_schema(output_schema77041,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema77042], null)));
})();
stuttaford.radiant.model.a_fn = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema77056 = schema.core.Any;var input_schema77057 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"a","a",-2123407586),schema.core.Any], true, false),new cljs.core.Symbol(null,"map77055","map77055",409512327,null))], null);var input_checker77058 = schema.core.checker(input_schema77057);var output_checker77059 = schema.core.checker(output_schema77056);return schema.core.schematize_fn(((function (ufv__,output_schema77056,input_schema77057,input_checker77058,output_checker77059){
return (function a_fn(G__77060){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___77067 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__77060], null);var temp__4126__auto___77068 = (function (){var G__77064 = args__838__auto___77067;return (input_checker77058.cljs$core$IFn$_invoke$arity$1 ? input_checker77058.cljs$core$IFn$_invoke$arity$1(G__77064) : input_checker77058.call(null,G__77064));
})();if(cljs.core.truth_(temp__4126__auto___77068))
{var error__839__auto___77069 = temp__4126__auto___77068;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"a-fn","a-fn",661366254,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77069], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema77057,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___77067,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77069], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map77055 = G__77060;while(true){
if(cljs.core.map_QMARK_(map77055))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map77055], 0))));
}
var a = plumbing.fnk.schema.safe_get(map77055,new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.PersistentVector.EMPTY);if(cljs.core.seq(a))
{try{return cljs.reader.read_string(a);
}catch (e77065){var e = e77065;return null;
}} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___77070 = (function (){var G__77066 = o__840__auto__;return (output_checker77059.cljs$core$IFn$_invoke$arity$1 ? output_checker77059.cljs$core$IFn$_invoke$arity$1(G__77066) : output_checker77059.call(null,G__77066));
})();if(cljs.core.truth_(temp__4126__auto___77070))
{var error__839__auto___77071 = temp__4126__auto___77070;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"a-fn","a-fn",661366254,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77071], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema77056,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77071], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema77056,input_schema77057,input_checker77058,output_checker77059))
,schema.core.make_fn_schema(output_schema77056,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema77057], null)));
})();
stuttaford.radiant.model.v_fn = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema77073 = schema.core.Any;var input_schema77074 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"v","v",21465059),schema.core.Any], true, false),new cljs.core.Symbol(null,"map77072","map77072",-2115920319,null))], null);var input_checker77075 = schema.core.checker(input_schema77074);var output_checker77076 = schema.core.checker(output_schema77073);return schema.core.schematize_fn(((function (ufv__,output_schema77073,input_schema77074,input_checker77075,output_checker77076){
return (function v_fn(G__77077){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___77084 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__77077], null);var temp__4126__auto___77085 = (function (){var G__77081 = args__838__auto___77084;return (input_checker77075.cljs$core$IFn$_invoke$arity$1 ? input_checker77075.cljs$core$IFn$_invoke$arity$1(G__77081) : input_checker77075.call(null,G__77081));
})();if(cljs.core.truth_(temp__4126__auto___77085))
{var error__839__auto___77086 = temp__4126__auto___77085;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"v-fn","v-fn",912341789,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77086], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema77074,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___77084,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77086], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map77072 = G__77077;while(true){
if(cljs.core.map_QMARK_(map77072))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map77072], 0))));
}
var v = plumbing.fnk.schema.safe_get(map77072,new cljs.core.Keyword(null,"v","v",21465059),cljs.core.PersistentVector.EMPTY);if(typeof v === 'number')
{return v;
} else
{if((typeof v === 'string') && (cljs.core.seq(v)))
{try{var v_as_long = cljs.core.long$(v);if(cljs.core.truth_(v_as_long.isNaN()))
{return v;
} else
{return v_as_long;
}
}catch (e77082){var e = e77082;return v;
}} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___77087 = (function (){var G__77083 = o__840__auto__;return (output_checker77076.cljs$core$IFn$_invoke$arity$1 ? output_checker77076.cljs$core$IFn$_invoke$arity$1(G__77083) : output_checker77076.call(null,G__77083));
})();if(cljs.core.truth_(temp__4126__auto___77087))
{var error__839__auto___77088 = temp__4126__auto___77087;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"v-fn","v-fn",912341789,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77088], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema77073,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77088], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema77073,input_schema77074,input_checker77075,output_checker77076))
,schema.core.make_fn_schema(output_schema77073,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema77074], null)));
})();
stuttaford.radiant.model.order_fn = (function order_fn(index){var G__77090 = (((index instanceof cljs.core.Keyword))?index.fqn:null);switch (G__77090) {
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
stuttaford.radiant.model.components = (function components(index){var G__77093 = (((index instanceof cljs.core.Keyword))?index.fqn:null);switch (G__77093) {
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
stuttaford.radiant.model.cols = (function cols(index){var G__77096 = (((index instanceof cljs.core.Keyword))?index.fqn:null);switch (G__77096) {
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