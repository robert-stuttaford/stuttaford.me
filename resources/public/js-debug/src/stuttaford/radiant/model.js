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
stuttaford.radiant.model.data_source_label = (function data_source_label(data_sources,id){return ("Data source"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(id)?(": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1((function (){var G__44703 = data_sources;return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__44703) : id.call(null,G__44703));
})()))):null)));
});
stuttaford.radiant.model.data_source = (function data_source(data_sources,id){var G__44706 = data_sources;var G__44706__$1 = (((G__44706 == null))?null:(function (){var G__44707 = G__44706;return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__44707) : id.call(null,G__44707));
})());var G__44706__$2 = (((G__44706__$1 == null))?null:new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(G__44706__$1));return G__44706__$2;
});
datascript.core.DB.prototype.om$core$IToCursor$ = true;
datascript.core.DB.prototype.om$core$IToCursor$_to_cursor$arity$2 = (function (this$,_){var this$__$1 = this;return this$__$1;
});
datascript.core.DB.prototype.om$core$IToCursor$_to_cursor$arity$3 = (function (this$,_,___$1){var this$__$1 = this;return this$__$1;
});
stuttaford.radiant.model.make_db_from_datoms = (function make_db_from_datoms(datoms){var conn = datascript.create_conn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("link","category","link/category",-596283622),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword("link","tags","link/tags",1765991695),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)], null)], 0));datascript.transact_BANG_(conn,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (conn){
return (function (p__44711){var vec__44712 = p__44711;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44712,(0),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44712,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44712,(2),null);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e,a,v], null);
});})(conn))
,datoms));
var G__44713 = conn;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__44713) : cljs.core.deref.call(null,G__44713));
});
stuttaford.radiant.model.schema_for_attr = (function schema_for_attr(schema__$1,attr){return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__19357__auto__ = (function (){var G__44717 = schema__$1;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__44717) : attr.call(null,G__44717));
})();if(cljs.core.truth_(or__19357__auto__))
{return or__19357__auto__;
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
stuttaford.radiant.model.e_fn = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema44719 = schema.core.Any;var input_schema44720 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"e","e",1381269198),schema.core.Any], true, false),new cljs.core.Symbol(null,"map44718","map44718",29237321,null))], null);var input_checker44721 = schema.core.checker(input_schema44720);var output_checker44722 = schema.core.checker(output_schema44719);return schema.core.schematize_fn(((function (ufv__,output_schema44719,input_schema44720,input_checker44721,output_checker44722){
return (function e_fn(G__44723){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___44728 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__44723], null);var temp__4126__auto___44729 = (function (){var G__44726 = args__838__auto___44728;return (input_checker44721.cljs$core$IFn$_invoke$arity$1 ? input_checker44721.cljs$core$IFn$_invoke$arity$1(G__44726) : input_checker44721.call(null,G__44726));
})();if(cljs.core.truth_(temp__4126__auto___44729))
{var error__839__auto___44730 = temp__4126__auto___44729;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"e-fn","e-fn",1768020781,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___44730], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema44720,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___44728,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___44730], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map44718 = G__44723;while(true){
if(cljs.core.map_QMARK_(map44718))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map44718], 0))));
}
var e = plumbing.fnk.schema.safe_get(map44718,new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.PersistentVector.EMPTY);if(cljs.core.seq(e))
{return cljs.core.long$(e);
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___44731 = (function (){var G__44727 = o__840__auto__;return (output_checker44722.cljs$core$IFn$_invoke$arity$1 ? output_checker44722.cljs$core$IFn$_invoke$arity$1(G__44727) : output_checker44722.call(null,G__44727));
})();if(cljs.core.truth_(temp__4126__auto___44731))
{var error__839__auto___44732 = temp__4126__auto___44731;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"e-fn","e-fn",1768020781,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___44732], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema44719,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___44732], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema44719,input_schema44720,input_checker44721,output_checker44722))
,schema.core.make_fn_schema(output_schema44719,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema44720], null)));
})();
stuttaford.radiant.model.a_fn = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema44734 = schema.core.Any;var input_schema44735 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"a","a",-2123407586),schema.core.Any], true, false),new cljs.core.Symbol(null,"map44733","map44733",748661406,null))], null);var input_checker44736 = schema.core.checker(input_schema44735);var output_checker44737 = schema.core.checker(output_schema44734);return schema.core.schematize_fn(((function (ufv__,output_schema44734,input_schema44735,input_checker44736,output_checker44737){
return (function a_fn(G__44738){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___44745 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__44738], null);var temp__4126__auto___44746 = (function (){var G__44742 = args__838__auto___44745;return (input_checker44736.cljs$core$IFn$_invoke$arity$1 ? input_checker44736.cljs$core$IFn$_invoke$arity$1(G__44742) : input_checker44736.call(null,G__44742));
})();if(cljs.core.truth_(temp__4126__auto___44746))
{var error__839__auto___44747 = temp__4126__auto___44746;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"a-fn","a-fn",661366254,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___44747], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema44735,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___44745,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___44747], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map44733 = G__44738;while(true){
if(cljs.core.map_QMARK_(map44733))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map44733], 0))));
}
var a = plumbing.fnk.schema.safe_get(map44733,new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.PersistentVector.EMPTY);if(cljs.core.seq(a))
{try{return cljs.reader.read_string(a);
}catch (e44743){var e = e44743;return null;
}} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___44748 = (function (){var G__44744 = o__840__auto__;return (output_checker44737.cljs$core$IFn$_invoke$arity$1 ? output_checker44737.cljs$core$IFn$_invoke$arity$1(G__44744) : output_checker44737.call(null,G__44744));
})();if(cljs.core.truth_(temp__4126__auto___44748))
{var error__839__auto___44749 = temp__4126__auto___44748;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"a-fn","a-fn",661366254,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___44749], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema44734,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___44749], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema44734,input_schema44735,input_checker44736,output_checker44737))
,schema.core.make_fn_schema(output_schema44734,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema44735], null)));
})();
stuttaford.radiant.model.v_fn = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema44751 = schema.core.Any;var input_schema44752 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"v","v",21465059),schema.core.Any], true, false),new cljs.core.Symbol(null,"map44750","map44750",1568858047,null))], null);var input_checker44753 = schema.core.checker(input_schema44752);var output_checker44754 = schema.core.checker(output_schema44751);return schema.core.schematize_fn(((function (ufv__,output_schema44751,input_schema44752,input_checker44753,output_checker44754){
return (function v_fn(G__44755){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___44762 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__44755], null);var temp__4126__auto___44763 = (function (){var G__44759 = args__838__auto___44762;return (input_checker44753.cljs$core$IFn$_invoke$arity$1 ? input_checker44753.cljs$core$IFn$_invoke$arity$1(G__44759) : input_checker44753.call(null,G__44759));
})();if(cljs.core.truth_(temp__4126__auto___44763))
{var error__839__auto___44764 = temp__4126__auto___44763;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"v-fn","v-fn",912341789,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___44764], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema44752,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___44762,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___44764], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map44750 = G__44755;while(true){
if(cljs.core.map_QMARK_(map44750))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map44750], 0))));
}
var v = plumbing.fnk.schema.safe_get(map44750,new cljs.core.Keyword(null,"v","v",21465059),cljs.core.PersistentVector.EMPTY);if(typeof v === 'number')
{return v;
} else
{if(cljs.core.seq(v))
{try{var v_as_long = cljs.core.long$(v);if(cljs.core.truth_(v_as_long.isNaN()))
{return v;
} else
{return v_as_long;
}
}catch (e44760){var e = e44760;return v;
}} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___44765 = (function (){var G__44761 = o__840__auto__;return (output_checker44754.cljs$core$IFn$_invoke$arity$1 ? output_checker44754.cljs$core$IFn$_invoke$arity$1(G__44761) : output_checker44754.call(null,G__44761));
})();if(cljs.core.truth_(temp__4126__auto___44765))
{var error__839__auto___44766 = temp__4126__auto___44765;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"v-fn","v-fn",912341789,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___44766], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema44751,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___44766], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema44751,input_schema44752,input_checker44753,output_checker44754))
,schema.core.make_fn_schema(output_schema44751,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema44752], null)));
})();
//# sourceMappingURL=model.js.map