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
stuttaford.radiant.model.data_source_label = (function data_source_label(data_sources,id){return ("Data source"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(id)?(": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1((function (){var G__56422 = data_sources;return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__56422) : id.call(null,G__56422));
})()))):null)));
});
stuttaford.radiant.model.data_source = (function data_source(data_sources,id){var G__56425 = data_sources;var G__56425__$1 = (((G__56425 == null))?null:(function (){var G__56426 = G__56425;return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__56426) : id.call(null,G__56426));
})());var G__56425__$2 = (((G__56425__$1 == null))?null:new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(G__56425__$1));return G__56425__$2;
});
datascript.core.DB.prototype.om$core$IToCursor$ = true;
datascript.core.DB.prototype.om$core$IToCursor$_to_cursor$arity$2 = (function (this$,_){var this$__$1 = this;return this$__$1;
});
datascript.core.DB.prototype.om$core$IToCursor$_to_cursor$arity$3 = (function (this$,_,___$1){var this$__$1 = this;return this$__$1;
});
stuttaford.radiant.model.make_db_from_datoms = (function make_db_from_datoms(datoms){var conn = datascript.create_conn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("link","category","link/category",-596283622),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword("link","tags","link/tags",1765991695),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)], null)], 0));datascript.transact_BANG_(conn,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (conn){
return (function (p__56430){var vec__56431 = p__56430;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56431,(0),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56431,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56431,(2),null);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e,a,v], null);
});})(conn))
,datoms));
var G__56432 = conn;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__56432) : cljs.core.deref.call(null,G__56432));
});
stuttaford.radiant.model.schema_for_attr = (function schema_for_attr(schema__$1,attr){return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__19586__auto__ = (function (){var G__56436 = schema__$1;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__56436) : attr.call(null,G__56436));
})();if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
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
stuttaford.radiant.model.e_fn = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema56438 = schema.core.Any;var input_schema56439 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"e","e",1381269198),schema.core.Any], true, false),new cljs.core.Symbol(null,"map56437","map56437",1469049800,null))], null);var input_checker56440 = schema.core.checker(input_schema56439);var output_checker56441 = schema.core.checker(output_schema56438);return schema.core.schematize_fn(((function (ufv__,output_schema56438,input_schema56439,input_checker56440,output_checker56441){
return (function e_fn(G__56442){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56447 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__56442], null);var temp__4126__auto___56448 = (function (){var G__56445 = args__838__auto___56447;return (input_checker56440.cljs$core$IFn$_invoke$arity$1 ? input_checker56440.cljs$core$IFn$_invoke$arity$1(G__56445) : input_checker56440.call(null,G__56445));
})();if(cljs.core.truth_(temp__4126__auto___56448))
{var error__839__auto___56449 = temp__4126__auto___56448;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"e-fn","e-fn",1768020781,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56449], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56439,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56447,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56449], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map56437 = G__56442;while(true){
if(cljs.core.map_QMARK_(map56437))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map56437], 0))));
}
var e = plumbing.fnk.schema.safe_get(map56437,new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.PersistentVector.EMPTY);if(typeof e === 'number')
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
{var temp__4126__auto___56450 = (function (){var G__56446 = o__840__auto__;return (output_checker56441.cljs$core$IFn$_invoke$arity$1 ? output_checker56441.cljs$core$IFn$_invoke$arity$1(G__56446) : output_checker56441.call(null,G__56446));
})();if(cljs.core.truth_(temp__4126__auto___56450))
{var error__839__auto___56451 = temp__4126__auto___56450;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"e-fn","e-fn",1768020781,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56451], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56438,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56451], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema56438,input_schema56439,input_checker56440,output_checker56441))
,schema.core.make_fn_schema(output_schema56438,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56439], null)));
})();
stuttaford.radiant.model.a_fn = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema56453 = schema.core.Any;var input_schema56454 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"a","a",-2123407586),schema.core.Any], true, false),new cljs.core.Symbol(null,"map56452","map56452",431536671,null))], null);var input_checker56455 = schema.core.checker(input_schema56454);var output_checker56456 = schema.core.checker(output_schema56453);return schema.core.schematize_fn(((function (ufv__,output_schema56453,input_schema56454,input_checker56455,output_checker56456){
return (function a_fn(G__56457){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56464 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__56457], null);var temp__4126__auto___56465 = (function (){var G__56461 = args__838__auto___56464;return (input_checker56455.cljs$core$IFn$_invoke$arity$1 ? input_checker56455.cljs$core$IFn$_invoke$arity$1(G__56461) : input_checker56455.call(null,G__56461));
})();if(cljs.core.truth_(temp__4126__auto___56465))
{var error__839__auto___56466 = temp__4126__auto___56465;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"a-fn","a-fn",661366254,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56466], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56454,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56464,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56466], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map56452 = G__56457;while(true){
if(cljs.core.map_QMARK_(map56452))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map56452], 0))));
}
var a = plumbing.fnk.schema.safe_get(map56452,new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.PersistentVector.EMPTY);if(cljs.core.seq(a))
{try{return cljs.reader.read_string(a);
}catch (e56462){var e = e56462;return null;
}} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56467 = (function (){var G__56463 = o__840__auto__;return (output_checker56456.cljs$core$IFn$_invoke$arity$1 ? output_checker56456.cljs$core$IFn$_invoke$arity$1(G__56463) : output_checker56456.call(null,G__56463));
})();if(cljs.core.truth_(temp__4126__auto___56467))
{var error__839__auto___56468 = temp__4126__auto___56467;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"a-fn","a-fn",661366254,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56468], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56453,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56468], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema56453,input_schema56454,input_checker56455,output_checker56456))
,schema.core.make_fn_schema(output_schema56453,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56454], null)));
})();
stuttaford.radiant.model.v_fn = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema56470 = schema.core.Any;var input_schema56471 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"v","v",21465059),schema.core.Any], true, false),new cljs.core.Symbol(null,"map56469","map56469",1484792012,null))], null);var input_checker56472 = schema.core.checker(input_schema56471);var output_checker56473 = schema.core.checker(output_schema56470);return schema.core.schematize_fn(((function (ufv__,output_schema56470,input_schema56471,input_checker56472,output_checker56473){
return (function v_fn(G__56474){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56481 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__56474], null);var temp__4126__auto___56482 = (function (){var G__56478 = args__838__auto___56481;return (input_checker56472.cljs$core$IFn$_invoke$arity$1 ? input_checker56472.cljs$core$IFn$_invoke$arity$1(G__56478) : input_checker56472.call(null,G__56478));
})();if(cljs.core.truth_(temp__4126__auto___56482))
{var error__839__auto___56483 = temp__4126__auto___56482;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"v-fn","v-fn",912341789,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56483], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56471,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56481,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56483], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map56469 = G__56474;while(true){
if(cljs.core.map_QMARK_(map56469))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map56469], 0))));
}
var v = plumbing.fnk.schema.safe_get(map56469,new cljs.core.Keyword(null,"v","v",21465059),cljs.core.PersistentVector.EMPTY);if(typeof v === 'number')
{return v;
} else
{if((typeof v === 'string') && (cljs.core.seq(v)))
{try{var v_as_long = cljs.core.long$(v);if(cljs.core.truth_(v_as_long.isNaN()))
{return v;
} else
{return v_as_long;
}
}catch (e56479){var e = e56479;return v;
}} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56484 = (function (){var G__56480 = o__840__auto__;return (output_checker56473.cljs$core$IFn$_invoke$arity$1 ? output_checker56473.cljs$core$IFn$_invoke$arity$1(G__56480) : output_checker56473.call(null,G__56480));
})();if(cljs.core.truth_(temp__4126__auto___56484))
{var error__839__auto___56485 = temp__4126__auto___56484;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"v-fn","v-fn",912341789,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56485], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56470,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56485], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema56470,input_schema56471,input_checker56472,output_checker56473))
,schema.core.make_fn_schema(output_schema56470,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56471], null)));
})();
stuttaford.radiant.model.order_fn = (function order_fn(index){var G__56487 = (((index instanceof cljs.core.Keyword))?index.fqn:null);switch (G__56487) {
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
stuttaford.radiant.model.components = (function components(index){var G__56490 = (((index instanceof cljs.core.Keyword))?index.fqn:null);switch (G__56490) {
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
stuttaford.radiant.model.cols = (function cols(index){var G__56493 = (((index instanceof cljs.core.Keyword))?index.fqn:null);switch (G__56493) {
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