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
stuttaford.radiant.model.data_source_label = (function data_source_label(data_sources,id){return ("Data source"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(id)?(": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1((function (){var G__49572 = data_sources;return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__49572) : id.call(null,G__49572));
})()))):null)));
});
stuttaford.radiant.model.data_source = (function data_source(data_sources,id){var G__49575 = data_sources;var G__49575__$1 = (((G__49575 == null))?null:(function (){var G__49576 = G__49575;return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__49576) : id.call(null,G__49576));
})());var G__49575__$2 = (((G__49575__$1 == null))?null:new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(G__49575__$1));return G__49575__$2;
});
datascript.core.DB.prototype.om$core$IToCursor$ = true;
datascript.core.DB.prototype.om$core$IToCursor$_to_cursor$arity$2 = (function (this$,_){var this$__$1 = this;return this$__$1;
});
datascript.core.DB.prototype.om$core$IToCursor$_to_cursor$arity$3 = (function (this$,_,___$1){var this$__$1 = this;return this$__$1;
});
stuttaford.radiant.model.make_db_from_datoms = (function make_db_from_datoms(datoms){var conn = datascript.create_conn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("link","category","link/category",-596283622),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword("link","tags","link/tags",1765991695),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)], null)], 0));datascript.transact_BANG_(conn,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (conn){
return (function (p__49580){var vec__49581 = p__49580;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49581,(0),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49581,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49581,(2),null);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e,a,v], null);
});})(conn))
,datoms));
var G__49582 = conn;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__49582) : cljs.core.deref.call(null,G__49582));
});
stuttaford.radiant.model.schema_for_attr = (function schema_for_attr(schema__$1,attr){return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__19289__auto__ = (function (){var G__49586 = schema__$1;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__49586) : attr.call(null,G__49586));
})();if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
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
stuttaford.radiant.model.e_fn = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema49588 = schema.core.Any;var input_schema49589 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"e","e",1381269198),schema.core.Any], true, false),new cljs.core.Symbol(null,"map49587","map49587",-15489172,null))], null);var input_checker49590 = schema.core.checker(input_schema49589);var output_checker49591 = schema.core.checker(output_schema49588);return schema.core.schematize_fn(((function (ufv__,output_schema49588,input_schema49589,input_checker49590,output_checker49591){
return (function e_fn(G__49592){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49597 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49592], null);var temp__4126__auto___49598 = (function (){var G__49595 = args__838__auto___49597;return (input_checker49590.cljs$core$IFn$_invoke$arity$1 ? input_checker49590.cljs$core$IFn$_invoke$arity$1(G__49595) : input_checker49590.call(null,G__49595));
})();if(cljs.core.truth_(temp__4126__auto___49598))
{var error__839__auto___49599 = temp__4126__auto___49598;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"e-fn","e-fn",1768020781,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49599], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49589,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49597,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49599], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map49587 = G__49592;while(true){
if(cljs.core.map_QMARK_(map49587))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map49587], 0))));
}
var e = plumbing.fnk.schema.safe_get(map49587,new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.PersistentVector.EMPTY);if(typeof e === 'number')
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
{var temp__4126__auto___49600 = (function (){var G__49596 = o__840__auto__;return (output_checker49591.cljs$core$IFn$_invoke$arity$1 ? output_checker49591.cljs$core$IFn$_invoke$arity$1(G__49596) : output_checker49591.call(null,G__49596));
})();if(cljs.core.truth_(temp__4126__auto___49600))
{var error__839__auto___49601 = temp__4126__auto___49600;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"e-fn","e-fn",1768020781,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49601], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49588,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49601], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema49588,input_schema49589,input_checker49590,output_checker49591))
,schema.core.make_fn_schema(output_schema49588,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49589], null)));
})();
stuttaford.radiant.model.a_fn = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema49603 = schema.core.Any;var input_schema49604 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"a","a",-2123407586),schema.core.Any], true, false),new cljs.core.Symbol(null,"map49602","map49602",266762288,null))], null);var input_checker49605 = schema.core.checker(input_schema49604);var output_checker49606 = schema.core.checker(output_schema49603);return schema.core.schematize_fn(((function (ufv__,output_schema49603,input_schema49604,input_checker49605,output_checker49606){
return (function a_fn(G__49607){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49614 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49607], null);var temp__4126__auto___49615 = (function (){var G__49611 = args__838__auto___49614;return (input_checker49605.cljs$core$IFn$_invoke$arity$1 ? input_checker49605.cljs$core$IFn$_invoke$arity$1(G__49611) : input_checker49605.call(null,G__49611));
})();if(cljs.core.truth_(temp__4126__auto___49615))
{var error__839__auto___49616 = temp__4126__auto___49615;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"a-fn","a-fn",661366254,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49616], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49604,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49614,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49616], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map49602 = G__49607;while(true){
if(cljs.core.map_QMARK_(map49602))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map49602], 0))));
}
var a = plumbing.fnk.schema.safe_get(map49602,new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.PersistentVector.EMPTY);if(cljs.core.seq(a))
{try{return cljs.reader.read_string(a);
}catch (e49612){var e = e49612;return null;
}} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49617 = (function (){var G__49613 = o__840__auto__;return (output_checker49606.cljs$core$IFn$_invoke$arity$1 ? output_checker49606.cljs$core$IFn$_invoke$arity$1(G__49613) : output_checker49606.call(null,G__49613));
})();if(cljs.core.truth_(temp__4126__auto___49617))
{var error__839__auto___49618 = temp__4126__auto___49617;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"a-fn","a-fn",661366254,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49618], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49603,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49618], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema49603,input_schema49604,input_checker49605,output_checker49606))
,schema.core.make_fn_schema(output_schema49603,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49604], null)));
})();
stuttaford.radiant.model.v_fn = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema49620 = schema.core.Any;var input_schema49621 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"v","v",21465059),schema.core.Any], true, false),new cljs.core.Symbol(null,"map49619","map49619",-469117779,null))], null);var input_checker49622 = schema.core.checker(input_schema49621);var output_checker49623 = schema.core.checker(output_schema49620);return schema.core.schematize_fn(((function (ufv__,output_schema49620,input_schema49621,input_checker49622,output_checker49623){
return (function v_fn(G__49624){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49631 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49624], null);var temp__4126__auto___49632 = (function (){var G__49628 = args__838__auto___49631;return (input_checker49622.cljs$core$IFn$_invoke$arity$1 ? input_checker49622.cljs$core$IFn$_invoke$arity$1(G__49628) : input_checker49622.call(null,G__49628));
})();if(cljs.core.truth_(temp__4126__auto___49632))
{var error__839__auto___49633 = temp__4126__auto___49632;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"v-fn","v-fn",912341789,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49633], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49621,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49631,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49633], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map49619 = G__49624;while(true){
if(cljs.core.map_QMARK_(map49619))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map49619], 0))));
}
var v = plumbing.fnk.schema.safe_get(map49619,new cljs.core.Keyword(null,"v","v",21465059),cljs.core.PersistentVector.EMPTY);if(typeof v === 'number')
{return v;
} else
{if((typeof v === 'string') && (cljs.core.seq(v)))
{try{var v_as_long = cljs.core.long$(v);if(cljs.core.truth_(v_as_long.isNaN()))
{return v;
} else
{return v_as_long;
}
}catch (e49629){var e = e49629;return v;
}} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49634 = (function (){var G__49630 = o__840__auto__;return (output_checker49623.cljs$core$IFn$_invoke$arity$1 ? output_checker49623.cljs$core$IFn$_invoke$arity$1(G__49630) : output_checker49623.call(null,G__49630));
})();if(cljs.core.truth_(temp__4126__auto___49634))
{var error__839__auto___49635 = temp__4126__auto___49634;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"v-fn","v-fn",912341789,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49635], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49620,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49635], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema49620,input_schema49621,input_checker49622,output_checker49623))
,schema.core.make_fn_schema(output_schema49620,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49621], null)));
})();
stuttaford.radiant.model.order_fn = (function order_fn(index){var G__49637 = (((index instanceof cljs.core.Keyword))?index.fqn:null);switch (G__49637) {
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
stuttaford.radiant.model.components = (function components(index){var G__49640 = (((index instanceof cljs.core.Keyword))?index.fqn:null);switch (G__49640) {
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
stuttaford.radiant.model.cols = (function cols(index){var G__49643 = (((index instanceof cljs.core.Keyword))?index.fqn:null);switch (G__49643) {
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