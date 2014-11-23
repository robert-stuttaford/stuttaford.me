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
stuttaford.radiant.components.data_source_dropdown = (function data_source_dropdown(c,data_sources,current_data_source){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om_bootstrap.button.dropdown,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),stuttaford.radiant.model.data_source_label(data_sources,current_data_source)], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var iter__21074__auto__ = (function iter__41088(s__41089){return (new cljs.core.LazySeq(null,(function (){var s__41089__$1 = s__41089;while(true){
var temp__4126__auto__ = cljs.core.seq(s__41089__$1);if(temp__4126__auto__)
{var s__41089__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__41089__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__41089__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__41091 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__41090 = (0);while(true){
if((i__41090 < size__21073__auto__))
{var map__41096 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__41090);var map__41096__$1 = ((cljs.core.seq_QMARK_(map__41096))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41096):map__41096);var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41096__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41096__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append(b__41091,stuttaford.radiant.components.data_source_item(c,id,label));
{
var G__41098 = (i__41090 + (1));
i__41090 = G__41098;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__41091),iter__41088(cljs.core.chunk_rest(s__41089__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__41091),null);
}
} else
{var map__41097 = cljs.core.first(s__41089__$2);var map__41097__$1 = ((cljs.core.seq_QMARK_(map__41097))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41097):map__41097);var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41097__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41097__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons(stuttaford.radiant.components.data_source_item(c,id,label),iter__41088(cljs.core.rest(s__41089__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__21074__auto__(cljs.core.vals(data_sources));
})()));
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.components.schema = (function() { 
var schema__$1__delegate = function (data__24441__auto__,owner41099,p__41101){var vec__41167 = p__41101;var opts__24442__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41167,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema41171 = schema.core.Any;var input_schema41172 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-db","current-db",213667882)),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map41168","map41168",535264826,null))], null);var input_checker41173 = schema.core.checker(input_schema41172);var output_checker41174 = schema.core.checker(output_schema41171);return schema.core.schematize_fn(((function (ufv__,output_schema41171,input_schema41172,input_checker41173,output_checker41174,vec__41167,opts__24442__auto__){
return (function fnk41170(G__41175){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___41232 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__41175], null);var temp__4126__auto___41233 = (function (){var G__41204 = args__838__auto___41232;return (input_checker41173.cljs$core$IFn$_invoke$arity$1 ? input_checker41173.cljs$core$IFn$_invoke$arity$1(G__41204) : input_checker41173.call(null,G__41204));
})();if(cljs.core.truth_(temp__4126__auto___41233))
{var error__839__auto___41234 = temp__4126__auto___41233;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk41170","fnk41170",-41823859,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41234], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema41172,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___41232,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41234], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map41168 = G__41175;while(true){
if(cljs.core.map_QMARK_(map41168))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map41168], 0))));
}
var map41169 = plumbing.fnk.schema.safe_get(map41168,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var current_db = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map41169,new cljs.core.Keyword(null,"current-db","current-db",213667882),null);var owner = plumbing.fnk.schema.safe_get(map41168,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.components.t41205 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.components.t41205 = (function (input_checker41173,owner,map41169,schema,input_schema41172,fnk41170,G__41175,owner41099,p__41101,data__24441__auto__,current_db,output_checker41174,vec__41167,opts__24442__auto__,map41168,validate__837__auto__,output_schema41171,ufv__,meta41206){
this.input_checker41173 = input_checker41173;
this.owner = owner;
this.map41169 = map41169;
this.schema = schema;
this.input_schema41172 = input_schema41172;
this.fnk41170 = fnk41170;
this.G__41175 = G__41175;
this.owner41099 = owner41099;
this.p__41101 = p__41101;
this.data__24441__auto__ = data__24441__auto__;
this.current_db = current_db;
this.output_checker41174 = output_checker41174;
this.vec__41167 = vec__41167;
this.opts__24442__auto__ = opts__24442__auto__;
this.map41168 = map41168;
this.validate__837__auto__ = validate__837__auto__;
this.output_schema41171 = output_schema41171;
this.ufv__ = ufv__;
this.meta41206 = meta41206;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.components.t41205.cljs$lang$type = true;
stuttaford.radiant.components.t41205.cljs$lang$ctorStr = "stuttaford.radiant.components/t41205";
stuttaford.radiant.components.t41205.cljs$lang$ctorPrWriter = ((function (owner,current_db,map41169,validate__837__auto__,ufv__,output_schema41171,input_schema41172,input_checker41173,output_checker41174,vec__41167,opts__24442__auto__){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"stuttaford.radiant.components/t41205");
});})(owner,current_db,map41169,validate__837__auto__,ufv__,output_schema41171,input_schema41172,input_checker41173,output_checker41174,vec__41167,opts__24442__auto__))
;
stuttaford.radiant.components.t41205.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.components.t41205.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,current_db,map41169,validate__837__auto__,ufv__,output_schema41171,input_schema41172,input_checker41173,output_checker41174,vec__41167,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "schema";
});})(owner,current_db,map41169,validate__837__auto__,ufv__,output_schema41171,input_schema41172,input_checker41173,output_checker41174,vec__41167,opts__24442__auto__))
;
stuttaford.radiant.components.t41205.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.components.t41205.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,current_db,map41169,validate__837__auto__,ufv__,output_schema41171,input_schema41172,input_checker41173,output_checker41174,vec__41167,opts__24442__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),"Schema"], null),cljs.core.array_seq([(cljs.core.truth_(self__.current_db)?cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__21074__auto__ = ((function (___$1,owner,current_db,map41169,validate__837__auto__,ufv__,output_schema41171,input_schema41172,input_checker41173,output_checker41174,vec__41167,opts__24442__auto__){
return (function iter__41209(s__41210){return (new cljs.core.LazySeq(null,((function (___$1,owner,current_db,map41169,validate__837__auto__,ufv__,output_schema41171,input_schema41172,input_checker41173,output_checker41174,vec__41167,opts__24442__auto__){
return (function (){var s__41210__$1 = s__41210;while(true){
var temp__4126__auto__ = cljs.core.seq(s__41210__$1);if(temp__4126__auto__)
{var s__41210__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__41210__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__41210__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__41212 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__41211 = (0);while(true){
if((i__41211 < size__21073__auto__))
{var schema__$3 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__41211);cljs.core.chunk_append(b__41212,(function (){var G__41223 = {"className": "schema"};var G__41224 = (function (){var attrs41208 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(schema__$3)], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs41208))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ident"], null)], null),attrs41208], 0))):{"className": "ident"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs41208))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs41208)], null))));
})();var G__41225 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["REF"], 0)):null));var G__41226 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["MANY"], 0)):null));return React.DOM.span(G__41223,G__41224,G__41225,G__41226);
})());
{
var G__41235 = (i__41211 + (1));
i__41211 = G__41235;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__41212),iter__41209(cljs.core.chunk_rest(s__41210__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__41212),null);
}
} else
{var schema__$3 = cljs.core.first(s__41210__$2);return cljs.core.cons((function (){var G__41227 = {"className": "schema"};var G__41228 = (function (){var attrs41208 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(schema__$3)], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs41208))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ident"], null)], null),attrs41208], 0))):{"className": "ident"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs41208))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs41208)], null))));
})();var G__41229 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["REF"], 0)):null));var G__41230 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["MANY"], 0)):null));return React.DOM.span(G__41227,G__41228,G__41229,G__41230);
})(),iter__41209(cljs.core.rest(s__41210__$2)));
}
} else
{return null;
}
break;
}
});})(___$1,owner,current_db,map41169,validate__837__auto__,ufv__,output_schema41171,input_schema41172,input_checker41173,output_checker41174,vec__41167,opts__24442__auto__))
,null,null));
});})(___$1,owner,current_db,map41169,validate__837__auto__,ufv__,output_schema41171,input_schema41172,input_checker41173,output_checker41174,vec__41167,opts__24442__auto__))
;return iter__21074__auto__(stuttaford.radiant.model.schema_for_db(self__.current_db));
})()):"No database.")], 0));
});})(owner,current_db,map41169,validate__837__auto__,ufv__,output_schema41171,input_schema41172,input_checker41173,output_checker41174,vec__41167,opts__24442__auto__))
;
stuttaford.radiant.components.t41205.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,current_db,map41169,validate__837__auto__,ufv__,output_schema41171,input_schema41172,input_checker41173,output_checker41174,vec__41167,opts__24442__auto__){
return (function (_41207){var self__ = this;
var _41207__$1 = this;return self__.meta41206;
});})(owner,current_db,map41169,validate__837__auto__,ufv__,output_schema41171,input_schema41172,input_checker41173,output_checker41174,vec__41167,opts__24442__auto__))
;
stuttaford.radiant.components.t41205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,current_db,map41169,validate__837__auto__,ufv__,output_schema41171,input_schema41172,input_checker41173,output_checker41174,vec__41167,opts__24442__auto__){
return (function (_41207,meta41206__$1){var self__ = this;
var _41207__$1 = this;return (new stuttaford.radiant.components.t41205(self__.input_checker41173,self__.owner,self__.map41169,self__.schema,self__.input_schema41172,self__.fnk41170,self__.G__41175,self__.owner41099,self__.p__41101,self__.data__24441__auto__,self__.current_db,self__.output_checker41174,self__.vec__41167,self__.opts__24442__auto__,self__.map41168,self__.validate__837__auto__,self__.output_schema41171,self__.ufv__,meta41206__$1));
});})(owner,current_db,map41169,validate__837__auto__,ufv__,output_schema41171,input_schema41172,input_checker41173,output_checker41174,vec__41167,opts__24442__auto__))
;
stuttaford.radiant.components.__GT_t41205 = ((function (owner,current_db,map41169,validate__837__auto__,ufv__,output_schema41171,input_schema41172,input_checker41173,output_checker41174,vec__41167,opts__24442__auto__){
return (function __GT_t41205(input_checker41173__$1,owner__$1,map41169__$1,schema__$2,input_schema41172__$1,fnk41170__$1,G__41175__$1,owner41099__$1,p__41101__$1,data__24441__auto____$1,current_db__$1,output_checker41174__$1,vec__41167__$1,opts__24442__auto____$1,map41168__$1,validate__837__auto____$1,output_schema41171__$1,ufv____$1,meta41206){return (new stuttaford.radiant.components.t41205(input_checker41173__$1,owner__$1,map41169__$1,schema__$2,input_schema41172__$1,fnk41170__$1,G__41175__$1,owner41099__$1,p__41101__$1,data__24441__auto____$1,current_db__$1,output_checker41174__$1,vec__41167__$1,opts__24442__auto____$1,map41168__$1,validate__837__auto____$1,output_schema41171__$1,ufv____$1,meta41206));
});})(owner,current_db,map41169,validate__837__auto__,ufv__,output_schema41171,input_schema41172,input_checker41173,output_checker41174,vec__41167,opts__24442__auto__))
;
}
return (new stuttaford.radiant.components.t41205(input_checker41173,owner,map41169,schema__$1,input_schema41172,fnk41170,G__41175,owner41099,p__41101,data__24441__auto__,current_db,output_checker41174,vec__41167,opts__24442__auto__,map41168,validate__837__auto__,output_schema41171,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___41236 = (function (){var G__41231 = o__840__auto__;return (output_checker41174.cljs$core$IFn$_invoke$arity$1 ? output_checker41174.cljs$core$IFn$_invoke$arity$1(G__41231) : output_checker41174.call(null,G__41231));
})();if(cljs.core.truth_(temp__4126__auto___41236))
{var error__839__auto___41237 = temp__4126__auto___41236;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk41170","fnk41170",-41823859,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41237], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema41171,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41237], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema41171,input_schema41172,input_checker41173,output_checker41174,vec__41167,opts__24442__auto__))
,schema.core.make_fn_schema(output_schema41171,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema41172], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24442__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner41099,new cljs.core.Keyword(null,"data","data",-232669377),data__24441__auto__], null));
};
var schema__$1 = function (data__24441__auto__,owner41099,var_args){
var p__41101 = null;if (arguments.length > 2) {
  p__41101 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return schema__$1__delegate.call(this,data__24441__auto__,owner41099,p__41101);};
schema__$1.cljs$lang$maxFixedArity = 2;
schema__$1.cljs$lang$applyTo = (function (arglist__41238){
var data__24441__auto__ = cljs.core.first(arglist__41238);
arglist__41238 = cljs.core.next(arglist__41238);
var owner41099 = cljs.core.first(arglist__41238);
var p__41101 = cljs.core.rest(arglist__41238);
return schema__$1__delegate(data__24441__auto__,owner41099,p__41101);
});
schema__$1.cljs$core$IFn$_invoke$arity$variadic = schema__$1__delegate;
return schema__$1;
})()
;
stuttaford.radiant.components.__GT_schema = (function() {
var __GT_schema = null;
var __GT_schema__1 = (function (cursor__24410__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.schema,cursor__24410__auto__);
});
var __GT_schema__2 = (function (cursor__24410__auto__,m41100){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.components.schema,cursor__24410__auto__,m41100);
});
__GT_schema = function(cursor__24410__auto__,m41100){
switch(arguments.length){
case 1:
return __GT_schema__1.call(this,cursor__24410__auto__);
case 2:
return __GT_schema__2.call(this,cursor__24410__auto__,m41100);
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
var top_nav__delegate = function (data__24441__auto__,owner41239,p__41241){var vec__41308 = p__41241;var opts__24442__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41308,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema41313 = schema.core.Any;var input_schema41314 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684)),schema.core.Any,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map41309","map41309",-289620826,null))], null);var input_checker41315 = schema.core.checker(input_schema41314);var output_checker41316 = schema.core.checker(output_schema41313);return schema.core.schematize_fn(((function (ufv__,output_schema41313,input_schema41314,input_checker41315,output_checker41316,vec__41308,opts__24442__auto__){
return (function fnk41312(G__41317){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___41374 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__41317], null);var temp__4126__auto___41375 = (function (){var G__41346 = args__838__auto___41374;return (input_checker41315.cljs$core$IFn$_invoke$arity$1 ? input_checker41315.cljs$core$IFn$_invoke$arity$1(G__41346) : input_checker41315.call(null,G__41346));
})();if(cljs.core.truth_(temp__4126__auto___41375))
{var error__839__auto___41376 = temp__4126__auto___41375;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk41312","fnk41312",1978324326,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41376], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema41314,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___41374,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41376], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map41309 = G__41317;while(true){
if(cljs.core.map_QMARK_(map41309))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map41309], 0))));
}
var map41311 = plumbing.fnk.schema.safe_get(map41309,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(map41311,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var data_sources = plumbing.fnk.schema.safe_get(map41311,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map41311,new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684),null);var schema_visible_QMARK_ = plumbing.fnk.schema.safe_get(map41311,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map41309,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map41310 = plumbing.fnk.schema.safe_get(map41309,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var nav_items = plumbing.fnk.schema.safe_get(map41310,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));if(typeof stuttaford.radiant.components.t41347 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.components.t41347 = (function (current_data_source,map41311,owner,view,owner41239,map41309,fnk41312,schema_visible_QMARK_,p__41241,nav_items,output_checker41316,data__24441__auto__,data_sources,top_nav,output_schema41313,input_schema41314,input_checker41315,opts__24442__auto__,validate__837__auto__,vec__41308,ufv__,G__41317,map41310,meta41348){
this.current_data_source = current_data_source;
this.map41311 = map41311;
this.owner = owner;
this.view = view;
this.owner41239 = owner41239;
this.map41309 = map41309;
this.fnk41312 = fnk41312;
this.schema_visible_QMARK_ = schema_visible_QMARK_;
this.p__41241 = p__41241;
this.nav_items = nav_items;
this.output_checker41316 = output_checker41316;
this.data__24441__auto__ = data__24441__auto__;
this.data_sources = data_sources;
this.top_nav = top_nav;
this.output_schema41313 = output_schema41313;
this.input_schema41314 = input_schema41314;
this.input_checker41315 = input_checker41315;
this.opts__24442__auto__ = opts__24442__auto__;
this.validate__837__auto__ = validate__837__auto__;
this.vec__41308 = vec__41308;
this.ufv__ = ufv__;
this.G__41317 = G__41317;
this.map41310 = map41310;
this.meta41348 = meta41348;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.components.t41347.cljs$lang$type = true;
stuttaford.radiant.components.t41347.cljs$lang$ctorStr = "stuttaford.radiant.components/t41347";
stuttaford.radiant.components.t41347.cljs$lang$ctorPrWriter = ((function (nav_items,map41310,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map41311,validate__837__auto__,ufv__,output_schema41313,input_schema41314,input_checker41315,output_checker41316,vec__41308,opts__24442__auto__){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"stuttaford.radiant.components/t41347");
});})(nav_items,map41310,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map41311,validate__837__auto__,ufv__,output_schema41313,input_schema41314,input_checker41315,output_checker41316,vec__41308,opts__24442__auto__))
;
stuttaford.radiant.components.t41347.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.components.t41347.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (nav_items,map41310,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map41311,validate__837__auto__,ufv__,output_schema41313,input_schema41314,input_checker41315,output_checker41316,vec__41308,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "top-nav";
});})(nav_items,map41310,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map41311,validate__837__auto__,ufv__,output_schema41313,input_schema41314,input_checker41315,output_checker41316,vec__41308,opts__24442__auto__))
;
stuttaford.radiant.components.t41347.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.components.t41347.prototype.om$core$IRenderState$render_state$arity$2 = ((function (nav_items,map41310,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map41311,validate__837__auto__,ufv__,output_schema41313,input_schema41314,input_checker41315,output_checker41316,vec__41308,opts__24442__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var G__41352 = {"className": "radiant"};var G__41353 = "RADIANT";return React.DOM.div(G__41352,G__41353);
})(),om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__21074__auto__ = ((function (c,___$1,nav_items,map41310,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map41311,validate__837__auto__,ufv__,output_schema41313,input_schema41314,input_checker41315,output_checker41316,vec__41308,opts__24442__auto__){
return (function iter__41354(s__41355){return (new cljs.core.LazySeq(null,((function (c,___$1,nav_items,map41310,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map41311,validate__837__auto__,ufv__,output_schema41313,input_schema41314,input_checker41315,output_checker41316,vec__41308,opts__24442__auto__){
return (function (){var s__41355__$1 = s__41355;while(true){
var temp__4126__auto__ = cljs.core.seq(s__41355__$1);if(temp__4126__auto__)
{var s__41355__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__41355__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__41355__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__41357 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__41356 = (0);while(true){
if((i__41356 < size__21073__auto__))
{var vec__41366 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__41356);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41366,(0),null);var vec__41367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41366,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41367,(0),null);cljs.core.chunk_append(b__41357,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__41368 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__41356,vec__41366,id,vec__41367,label,c__21072__auto__,size__21073__auto__,b__41357,s__41355__$2,temp__4126__auto__,c,___$1,nav_items,map41310,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map41311,validate__837__auto__,ufv__,output_schema41313,input_schema41314,input_checker41315,output_checker41316,vec__41308,opts__24442__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__41356,vec__41366,id,vec__41367,label,c__21072__auto__,size__21073__auto__,b__41357,s__41355__$2,temp__4126__auto__,c,___$1,nav_items,map41310,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map41311,validate__837__auto__,ufv__,output_schema41313,input_schema41314,input_checker41315,output_checker41316,vec__41308,opts__24442__auto__))
], null);var G__41368__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41368,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__41368);return G__41368__$1;
})(),cljs.core.array_seq([label], 0)));
{
var G__41377 = (i__41356 + (1));
i__41356 = G__41377;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__41357),iter__41354(cljs.core.chunk_rest(s__41355__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__41357),null);
}
} else
{var vec__41369 = cljs.core.first(s__41355__$2);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41369,(0),null);var vec__41370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41369,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41370,(0),null);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__41371 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__41369,id,vec__41370,label,s__41355__$2,temp__4126__auto__,c,___$1,nav_items,map41310,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map41311,validate__837__auto__,ufv__,output_schema41313,input_schema41314,input_checker41315,output_checker41316,vec__41308,opts__24442__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(vec__41369,id,vec__41370,label,s__41355__$2,temp__4126__auto__,c,___$1,nav_items,map41310,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map41311,validate__837__auto__,ufv__,output_schema41313,input_schema41314,input_checker41315,output_checker41316,vec__41308,opts__24442__auto__))
], null);var G__41371__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41371,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__41371);return G__41371__$1;
})(),cljs.core.array_seq([label], 0)),iter__41354(cljs.core.rest(s__41355__$2)));
}
} else
{return null;
}
break;
}
});})(c,___$1,nav_items,map41310,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map41311,validate__837__auto__,ufv__,output_schema41313,input_schema41314,input_checker41315,output_checker41316,vec__41308,opts__24442__auto__))
,null,null));
});})(c,___$1,nav_items,map41310,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map41311,validate__837__auto__,ufv__,output_schema41313,input_schema41314,input_checker41315,output_checker41316,vec__41308,opts__24442__auto__))
;return iter__21074__auto__(self__.nav_items);
})()], 0)),stuttaford.radiant.components.data_source_dropdown(c,self__.data_sources,self__.current_data_source),om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__41372 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (c,___$1,nav_items,map41310,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map41311,validate__837__auto__,ufv__,output_schema41313,input_schema41314,input_checker41315,output_checker41316,vec__41308,opts__24442__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-schema-visible","set-schema-visible",-1408939033),cljs.core.not(self__.schema_visible_QMARK_)], null));
});})(c,___$1,nav_items,map41310,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map41311,validate__837__auto__,ufv__,output_schema41313,input_schema41314,input_checker41315,output_checker41316,vec__41308,opts__24442__auto__))
], null);var G__41372__$1 = (cljs.core.truth_(self__.schema_visible_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41372,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__41372);return G__41372__$1;
})(),cljs.core.array_seq(["Show schema"], 0))], 0));
});})(nav_items,map41310,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map41311,validate__837__auto__,ufv__,output_schema41313,input_schema41314,input_checker41315,output_checker41316,vec__41308,opts__24442__auto__))
;
stuttaford.radiant.components.t41347.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (nav_items,map41310,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map41311,validate__837__auto__,ufv__,output_schema41313,input_schema41314,input_checker41315,output_checker41316,vec__41308,opts__24442__auto__){
return (function (_41349){var self__ = this;
var _41349__$1 = this;return self__.meta41348;
});})(nav_items,map41310,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map41311,validate__837__auto__,ufv__,output_schema41313,input_schema41314,input_checker41315,output_checker41316,vec__41308,opts__24442__auto__))
;
stuttaford.radiant.components.t41347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (nav_items,map41310,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map41311,validate__837__auto__,ufv__,output_schema41313,input_schema41314,input_checker41315,output_checker41316,vec__41308,opts__24442__auto__){
return (function (_41349,meta41348__$1){var self__ = this;
var _41349__$1 = this;return (new stuttaford.radiant.components.t41347(self__.current_data_source,self__.map41311,self__.owner,self__.view,self__.owner41239,self__.map41309,self__.fnk41312,self__.schema_visible_QMARK_,self__.p__41241,self__.nav_items,self__.output_checker41316,self__.data__24441__auto__,self__.data_sources,self__.top_nav,self__.output_schema41313,self__.input_schema41314,self__.input_checker41315,self__.opts__24442__auto__,self__.validate__837__auto__,self__.vec__41308,self__.ufv__,self__.G__41317,self__.map41310,meta41348__$1));
});})(nav_items,map41310,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map41311,validate__837__auto__,ufv__,output_schema41313,input_schema41314,input_checker41315,output_checker41316,vec__41308,opts__24442__auto__))
;
stuttaford.radiant.components.__GT_t41347 = ((function (nav_items,map41310,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map41311,validate__837__auto__,ufv__,output_schema41313,input_schema41314,input_checker41315,output_checker41316,vec__41308,opts__24442__auto__){
return (function __GT_t41347(current_data_source__$1,map41311__$1,owner__$1,view__$1,owner41239__$1,map41309__$1,fnk41312__$1,schema_visible_QMARK___$1,p__41241__$1,nav_items__$1,output_checker41316__$1,data__24441__auto____$1,data_sources__$1,top_nav__$1,output_schema41313__$1,input_schema41314__$1,input_checker41315__$1,opts__24442__auto____$1,validate__837__auto____$1,vec__41308__$1,ufv____$1,G__41317__$1,map41310__$1,meta41348){return (new stuttaford.radiant.components.t41347(current_data_source__$1,map41311__$1,owner__$1,view__$1,owner41239__$1,map41309__$1,fnk41312__$1,schema_visible_QMARK___$1,p__41241__$1,nav_items__$1,output_checker41316__$1,data__24441__auto____$1,data_sources__$1,top_nav__$1,output_schema41313__$1,input_schema41314__$1,input_checker41315__$1,opts__24442__auto____$1,validate__837__auto____$1,vec__41308__$1,ufv____$1,G__41317__$1,map41310__$1,meta41348));
});})(nav_items,map41310,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map41311,validate__837__auto__,ufv__,output_schema41313,input_schema41314,input_checker41315,output_checker41316,vec__41308,opts__24442__auto__))
;
}
return (new stuttaford.radiant.components.t41347(current_data_source,map41311,owner,view,owner41239,map41309,fnk41312,schema_visible_QMARK_,p__41241,nav_items,output_checker41316,data__24441__auto__,data_sources,top_nav,output_schema41313,input_schema41314,input_checker41315,opts__24442__auto__,validate__837__auto__,vec__41308,ufv__,G__41317,map41310,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___41378 = (function (){var G__41373 = o__840__auto__;return (output_checker41316.cljs$core$IFn$_invoke$arity$1 ? output_checker41316.cljs$core$IFn$_invoke$arity$1(G__41373) : output_checker41316.call(null,G__41373));
})();if(cljs.core.truth_(temp__4126__auto___41378))
{var error__839__auto___41379 = temp__4126__auto___41378;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk41312","fnk41312",1978324326,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41379], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema41313,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41379], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema41313,input_schema41314,input_checker41315,output_checker41316,vec__41308,opts__24442__auto__))
,schema.core.make_fn_schema(output_schema41313,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema41314], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24442__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner41239,new cljs.core.Keyword(null,"data","data",-232669377),data__24441__auto__], null));
};
var top_nav = function (data__24441__auto__,owner41239,var_args){
var p__41241 = null;if (arguments.length > 2) {
  p__41241 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return top_nav__delegate.call(this,data__24441__auto__,owner41239,p__41241);};
top_nav.cljs$lang$maxFixedArity = 2;
top_nav.cljs$lang$applyTo = (function (arglist__41380){
var data__24441__auto__ = cljs.core.first(arglist__41380);
arglist__41380 = cljs.core.next(arglist__41380);
var owner41239 = cljs.core.first(arglist__41380);
var p__41241 = cljs.core.rest(arglist__41380);
return top_nav__delegate(data__24441__auto__,owner41239,p__41241);
});
top_nav.cljs$core$IFn$_invoke$arity$variadic = top_nav__delegate;
return top_nav;
})()
;
stuttaford.radiant.components.__GT_top_nav = (function() {
var __GT_top_nav = null;
var __GT_top_nav__1 = (function (cursor__24410__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.top_nav,cursor__24410__auto__);
});
var __GT_top_nav__2 = (function (cursor__24410__auto__,m41240){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.components.top_nav,cursor__24410__auto__,m41240);
});
__GT_top_nav = function(cursor__24410__auto__,m41240){
switch(arguments.length){
case 1:
return __GT_top_nav__1.call(this,cursor__24410__auto__);
case 2:
return __GT_top_nav__2.call(this,cursor__24410__auto__,m41240);
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
stuttaford.radiant.components.paginate_label = (function paginate_label(current_page,rows){var start = (stuttaford.radiant.components.PAGE_SIZE * current_page);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((start + (1)))+" - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__20315__auto__ = (start + stuttaford.radiant.components.PAGE_SIZE);var y__20316__auto__ = cljs.core.count(rows);return ((x__20315__auto__ < y__20316__auto__) ? x__20315__auto__ : y__20316__auto__);
})()));
});
stuttaford.radiant.components.sort_rows = (function sort_rows(sort_col,rows){return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__41381_SHARP_){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__41381_SHARP_,sort_col);
}),rows);
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.components.result_table = (function() { 
var result_table__delegate = function (data__24441__auto__,owner41382,p__41384){var vec__41535 = p__41384;var opts__24442__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41535,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema41540 = schema.core.Any;var input_schema41541 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260)),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"rows","rows",850049680),schema.core.Any,new cljs.core.Keyword(null,"cols","cols",-1914801295),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map41536","map41536",681381024,null))], null);var input_checker41542 = schema.core.checker(input_schema41541);var output_checker41543 = schema.core.checker(output_schema41540);return schema.core.schematize_fn(((function (ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__){
return (function fnk41539(G__41544){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___41685 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__41544], null);var temp__4126__auto___41686 = (function (){var G__41615 = args__838__auto___41685;return (input_checker41542.cljs$core$IFn$_invoke$arity$1 ? input_checker41542.cljs$core$IFn$_invoke$arity$1(G__41615) : input_checker41542.call(null,G__41615));
})();if(cljs.core.truth_(temp__4126__auto___41686))
{var error__839__auto___41687 = temp__4126__auto___41686;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk41539","fnk41539",1092553406,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41687], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema41541,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___41685,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41687], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map41536 = G__41544;while(true){
if(cljs.core.map_QMARK_(map41536))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map41536], 0))));
}
var map41538 = plumbing.fnk.schema.safe_get(map41536,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var cols = plumbing.fnk.schema.safe_get(map41538,new cljs.core.Keyword(null,"cols","cols",-1914801295),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var rows = plumbing.fnk.schema.safe_get(map41538,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map41536,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map41537 = plumbing.fnk.schema.safe_get(map41536,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var allow_sorting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map41537,new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),false);if(typeof stuttaford.radiant.components.t41616 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.components.t41616 = (function (map41536,owner,vec__41535,output_schema41540,output_checker41543,result_table,owner41382,allow_sorting_QMARK_,data__24441__auto__,map41537,input_schema41541,rows,cols,p__41384,opts__24442__auto__,validate__837__auto__,ufv__,input_checker41542,fnk41539,G__41544,map41538,meta41617){
this.map41536 = map41536;
this.owner = owner;
this.vec__41535 = vec__41535;
this.output_schema41540 = output_schema41540;
this.output_checker41543 = output_checker41543;
this.result_table = result_table;
this.owner41382 = owner41382;
this.allow_sorting_QMARK_ = allow_sorting_QMARK_;
this.data__24441__auto__ = data__24441__auto__;
this.map41537 = map41537;
this.input_schema41541 = input_schema41541;
this.rows = rows;
this.cols = cols;
this.p__41384 = p__41384;
this.opts__24442__auto__ = opts__24442__auto__;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.input_checker41542 = input_checker41542;
this.fnk41539 = fnk41539;
this.G__41544 = G__41544;
this.map41538 = map41538;
this.meta41617 = meta41617;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.components.t41616.cljs$lang$type = true;
stuttaford.radiant.components.t41616.cljs$lang$ctorStr = "stuttaford.radiant.components/t41616";
stuttaford.radiant.components.t41616.cljs$lang$ctorPrWriter = ((function (allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"stuttaford.radiant.components/t41616");
});})(allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__))
;
stuttaford.radiant.components.t41616.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.components.t41616.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "result-table";
});})(allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__))
;
stuttaford.radiant.components.t41616.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.components.t41616.prototype.om$core$IRenderState$render_state$arity$2 = ((function (allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__){
return (function (_,p__41619){var self__ = this;
var map__41620 = p__41619;var map__41620__$1 = ((cljs.core.seq_QMARK_(map__41620))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41620):map__41620);var current_page = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41620__$1,new cljs.core.Keyword(null,"current-page","current-page",-101294180),(0));var sort_col = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41620__$1,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882),(0));var ___$1 = this;var page_count = cljs.core.count(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.PAGE_SIZE,self__.rows));var paginate_QMARK_ = (page_count > (1));var G__41622 = null;var G__41623 = (function (){var G__41625 = {"className": "result-pagination"};var G__41626 = (function (){var attrs41621 = cljs.core.count(self__.rows);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs41621))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-count"], null)], null),attrs41621], 0))):{"className": "item-count"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs41621))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" items",sablono.interpreter.interpret(((paginate_QMARK_)?(" \u00B7 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(stuttaford.radiant.components.paginate_label(current_page,self__.rows))):null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs41621)," items",sablono.interpreter.interpret(((paginate_QMARK_)?(" \u00B7 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(stuttaford.radiant.components.paginate_label(current_page,self__.rows))):null))], null))));
})();var G__41627 = sablono.interpreter.interpret(((paginate_QMARK_)?om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__21074__auto__ = ((function (G__41625,G__41626,G__41622,page_count,paginate_QMARK_,___$1,map__41620,map__41620__$1,current_page,sort_col,allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__){
return (function iter__41628(s__41629){return (new cljs.core.LazySeq(null,((function (G__41625,G__41626,G__41622,page_count,paginate_QMARK_,___$1,map__41620,map__41620__$1,current_page,sort_col,allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__){
return (function (){var s__41629__$1 = s__41629;while(true){
var temp__4126__auto__ = cljs.core.seq(s__41629__$1);if(temp__4126__auto__)
{var s__41629__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__41629__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__41629__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__41631 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__41630 = (0);while(true){
if((i__41630 < size__21073__auto__))
{var page = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__41630);cljs.core.chunk_append(b__41631,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__41636 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__41630,page,c__21072__auto__,size__21073__auto__,b__41631,s__41629__$2,temp__4126__auto__,G__41625,G__41626,G__41622,page_count,paginate_QMARK_,___$1,map__41620,map__41620__$1,current_page,sort_col,allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page);
});})(i__41630,page,c__21072__auto__,size__21073__auto__,b__41631,s__41629__$2,temp__4126__auto__,G__41625,G__41626,G__41622,page_count,paginate_QMARK_,___$1,map__41620,map__41620__$1,current_page,sort_col,allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__))
], null);var G__41636__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41636,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__41636);return G__41636__$1;
})(),cljs.core.array_seq([(page + (1))], 0)));
{
var G__41688 = (i__41630 + (1));
i__41630 = G__41688;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__41631),iter__41628(cljs.core.chunk_rest(s__41629__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__41631),null);
}
} else
{var page = cljs.core.first(s__41629__$2);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__41637 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (page,s__41629__$2,temp__4126__auto__,G__41625,G__41626,G__41622,page_count,paginate_QMARK_,___$1,map__41620,map__41620__$1,current_page,sort_col,allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page);
});})(page,s__41629__$2,temp__4126__auto__,G__41625,G__41626,G__41622,page_count,paginate_QMARK_,___$1,map__41620,map__41620__$1,current_page,sort_col,allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__))
], null);var G__41637__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41637,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__41637);return G__41637__$1;
})(),cljs.core.array_seq([(page + (1))], 0)),iter__41628(cljs.core.rest(s__41629__$2)));
}
} else
{return null;
}
break;
}
});})(G__41625,G__41626,G__41622,page_count,paginate_QMARK_,___$1,map__41620,map__41620__$1,current_page,sort_col,allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__))
,null,null));
});})(G__41625,G__41626,G__41622,page_count,paginate_QMARK_,___$1,map__41620,map__41620__$1,current_page,sort_col,allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__))
;return iter__21074__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(page_count));
})()], 0)):null));return React.DOM.div(G__41625,G__41626,G__41627);
})();var G__41624 = sablono.interpreter.interpret(om_bootstrap.table.table.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"striped?","striped?",-797214979),true,new cljs.core.Keyword(null,"bordered?","bordered?",562358476),true,new cljs.core.Keyword(null,"condensed?","condensed?",-109797520),true,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),true], null),cljs.core.array_seq([cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__41642 = null;var G__41643 = (function (){var attrs41640 = cljs.core.map_indexed(((function (G__41642,G__41622,G__41623,page_count,paginate_QMARK_,___$1,map__41620,map__41620__$1,current_page,sort_col,allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__){
return (function (i,v){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),(cljs.core.truth_(self__.allow_sorting_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__41642,G__41622,G__41623,page_count,paginate_QMARK_,___$1,map__41620,map__41620__$1,current_page,sort_col,allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882),i);
});})(G__41642,G__41622,G__41623,page_count,paginate_QMARK_,___$1,map__41620,map__41620__$1,current_page,sort_col,allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__))
], null):null),v,(cljs.core.truth_((function (){var and__19621__auto__ = self__.allow_sorting_QMARK_;if(cljs.core.truth_(and__19621__auto__))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,sort_col);
} else
{return and__19621__auto__;
}
})())?cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-chevron-down","span.glyphicon.glyphicon-chevron-down",-62425995)], null))," "):null)], null);
});})(G__41642,G__41622,G__41623,page_count,paginate_QMARK_,___$1,map__41620,map__41620__$1,current_page,sort_col,allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__))
,self__.cols);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tr,((cljs.core.map_QMARK_(attrs41640))?sablono.interpreter.attributes(attrs41640):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs41640))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs41640)], null))));
})();return React.DOM.thead(G__41642,G__41643);
})(),(function (){var G__41644 = null;var G__41645 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__21074__auto__ = ((function (G__41644,G__41622,G__41623,page_count,paginate_QMARK_,___$1,map__41620,map__41620__$1,current_page,sort_col,allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__){
return (function iter__41646(s__41647){return (new cljs.core.LazySeq(null,((function (G__41644,G__41622,G__41623,page_count,paginate_QMARK_,___$1,map__41620,map__41620__$1,current_page,sort_col,allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__){
return (function (){var s__41647__$1 = s__41647;while(true){
var temp__4126__auto__ = cljs.core.seq(s__41647__$1);if(temp__4126__auto__)
{var s__41647__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__41647__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__41647__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__41649 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__41648 = (0);while(true){
if((i__41648 < size__21073__auto__))
{var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__41648);cljs.core.chunk_append(b__41649,(function (){var G__41668 = null;var G__41669 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__21074__auto__ = ((function (i__41648,G__41668,row,c__21072__auto__,size__21073__auto__,b__41649,s__41647__$2,temp__4126__auto__,G__41644,G__41622,G__41623,page_count,paginate_QMARK_,___$1,map__41620,map__41620__$1,current_page,sort_col,allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__){
return (function iter__41670(s__41671){return (new cljs.core.LazySeq(null,((function (i__41648,G__41668,row,c__21072__auto__,size__21073__auto__,b__41649,s__41647__$2,temp__4126__auto__,G__41644,G__41622,G__41623,page_count,paginate_QMARK_,___$1,map__41620,map__41620__$1,current_page,sort_col,allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__){
return (function (){var s__41671__$1 = s__41671;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__41671__$1);if(temp__4126__auto____$1)
{var s__41671__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__41671__$2))
{var c__21072__auto____$1 = cljs.core.chunk_first(s__41671__$2);var size__21073__auto____$1 = cljs.core.count(c__21072__auto____$1);var b__41673 = cljs.core.chunk_buffer(size__21073__auto____$1);if((function (){var i__41672 = (0);while(true){
if((i__41672 < size__21073__auto____$1))
{var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto____$1,i__41672);cljs.core.chunk_append(b__41673,(function (){var attrs41641 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs41641))?sablono.interpreter.attributes(attrs41641):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs41641))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs41641)], null))));
})());
{
var G__41689 = (i__41672 + (1));
i__41672 = G__41689;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__41673),iter__41670(cljs.core.chunk_rest(s__41671__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__41673),null);
}
} else
{var value = cljs.core.first(s__41671__$2);return cljs.core.cons((function (){var attrs41641 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs41641))?sablono.interpreter.attributes(attrs41641):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs41641))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs41641)], null))));
})(),iter__41670(cljs.core.rest(s__41671__$2)));
}
} else
{return null;
}
break;
}
});})(i__41648,G__41668,row,c__21072__auto__,size__21073__auto__,b__41649,s__41647__$2,temp__4126__auto__,G__41644,G__41622,G__41623,page_count,paginate_QMARK_,___$1,map__41620,map__41620__$1,current_page,sort_col,allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__))
,null,null));
});})(i__41648,G__41668,row,c__21072__auto__,size__21073__auto__,b__41649,s__41647__$2,temp__4126__auto__,G__41644,G__41622,G__41623,page_count,paginate_QMARK_,___$1,map__41620,map__41620__$1,current_page,sort_col,allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__))
;return iter__21074__auto__(row);
})());return React.DOM.tr(G__41668,G__41669);
})());
{
var G__41690 = (i__41648 + (1));
i__41648 = G__41690;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__41649),iter__41646(cljs.core.chunk_rest(s__41647__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__41649),null);
}
} else
{var row = cljs.core.first(s__41647__$2);return cljs.core.cons((function (){var G__41676 = null;var G__41677 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__21074__auto__ = ((function (G__41676,row,s__41647__$2,temp__4126__auto__,G__41644,G__41622,G__41623,page_count,paginate_QMARK_,___$1,map__41620,map__41620__$1,current_page,sort_col,allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__){
return (function iter__41678(s__41679){return (new cljs.core.LazySeq(null,((function (G__41676,row,s__41647__$2,temp__4126__auto__,G__41644,G__41622,G__41623,page_count,paginate_QMARK_,___$1,map__41620,map__41620__$1,current_page,sort_col,allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__){
return (function (){var s__41679__$1 = s__41679;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__41679__$1);if(temp__4126__auto____$1)
{var s__41679__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__41679__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__41679__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__41681 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__41680 = (0);while(true){
if((i__41680 < size__21073__auto__))
{var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__41680);cljs.core.chunk_append(b__41681,(function (){var attrs41641 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs41641))?sablono.interpreter.attributes(attrs41641):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs41641))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs41641)], null))));
})());
{
var G__41691 = (i__41680 + (1));
i__41680 = G__41691;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__41681),iter__41678(cljs.core.chunk_rest(s__41679__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__41681),null);
}
} else
{var value = cljs.core.first(s__41679__$2);return cljs.core.cons((function (){var attrs41641 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs41641))?sablono.interpreter.attributes(attrs41641):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs41641))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs41641)], null))));
})(),iter__41678(cljs.core.rest(s__41679__$2)));
}
} else
{return null;
}
break;
}
});})(G__41676,row,s__41647__$2,temp__4126__auto__,G__41644,G__41622,G__41623,page_count,paginate_QMARK_,___$1,map__41620,map__41620__$1,current_page,sort_col,allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__))
,null,null));
});})(G__41676,row,s__41647__$2,temp__4126__auto__,G__41644,G__41622,G__41623,page_count,paginate_QMARK_,___$1,map__41620,map__41620__$1,current_page,sort_col,allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__))
;return iter__21074__auto__(row);
})());return React.DOM.tr(G__41676,G__41677);
})(),iter__41646(cljs.core.rest(s__41647__$2)));
}
} else
{return null;
}
break;
}
});})(G__41644,G__41622,G__41623,page_count,paginate_QMARK_,___$1,map__41620,map__41620__$1,current_page,sort_col,allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__))
,null,null));
});})(G__41644,G__41622,G__41623,page_count,paginate_QMARK_,___$1,map__41620,map__41620__$1,current_page,sort_col,allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__))
;return iter__21074__auto__(stuttaford.radiant.components.sort_rows(sort_col,stuttaford.radiant.components.paginate(current_page,self__.rows)));
})());return React.DOM.tbody(G__41644,G__41645);
})()], null))], 0)));return React.DOM.div(G__41622,G__41623,G__41624);
});})(allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__))
;
stuttaford.radiant.components.t41616.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__){
return (function (_41618){var self__ = this;
var _41618__$1 = this;return self__.meta41617;
});})(allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__))
;
stuttaford.radiant.components.t41616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__){
return (function (_41618,meta41617__$1){var self__ = this;
var _41618__$1 = this;return (new stuttaford.radiant.components.t41616(self__.map41536,self__.owner,self__.vec__41535,self__.output_schema41540,self__.output_checker41543,self__.result_table,self__.owner41382,self__.allow_sorting_QMARK_,self__.data__24441__auto__,self__.map41537,self__.input_schema41541,self__.rows,self__.cols,self__.p__41384,self__.opts__24442__auto__,self__.validate__837__auto__,self__.ufv__,self__.input_checker41542,self__.fnk41539,self__.G__41544,self__.map41538,meta41617__$1));
});})(allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__))
;
stuttaford.radiant.components.__GT_t41616 = ((function (allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__){
return (function __GT_t41616(map41536__$1,owner__$1,vec__41535__$1,output_schema41540__$1,output_checker41543__$1,result_table__$1,owner41382__$1,allow_sorting_QMARK___$1,data__24441__auto____$1,map41537__$1,input_schema41541__$1,rows__$1,cols__$1,p__41384__$1,opts__24442__auto____$1,validate__837__auto____$1,ufv____$1,input_checker41542__$1,fnk41539__$1,G__41544__$1,map41538__$1,meta41617){return (new stuttaford.radiant.components.t41616(map41536__$1,owner__$1,vec__41535__$1,output_schema41540__$1,output_checker41543__$1,result_table__$1,owner41382__$1,allow_sorting_QMARK___$1,data__24441__auto____$1,map41537__$1,input_schema41541__$1,rows__$1,cols__$1,p__41384__$1,opts__24442__auto____$1,validate__837__auto____$1,ufv____$1,input_checker41542__$1,fnk41539__$1,G__41544__$1,map41538__$1,meta41617));
});})(allow_sorting_QMARK_,map41537,owner,rows,cols,map41538,validate__837__auto__,ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__))
;
}
return (new stuttaford.radiant.components.t41616(map41536,owner,vec__41535,output_schema41540,output_checker41543,result_table,owner41382,allow_sorting_QMARK_,data__24441__auto__,map41537,input_schema41541,rows,cols,p__41384,opts__24442__auto__,validate__837__auto__,ufv__,input_checker41542,fnk41539,G__41544,map41538,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___41692 = (function (){var G__41684 = o__840__auto__;return (output_checker41543.cljs$core$IFn$_invoke$arity$1 ? output_checker41543.cljs$core$IFn$_invoke$arity$1(G__41684) : output_checker41543.call(null,G__41684));
})();if(cljs.core.truth_(temp__4126__auto___41692))
{var error__839__auto___41693 = temp__4126__auto___41692;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk41539","fnk41539",1092553406,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41693], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema41540,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41693], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema41540,input_schema41541,input_checker41542,output_checker41543,vec__41535,opts__24442__auto__))
,schema.core.make_fn_schema(output_schema41540,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema41541], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24442__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner41382,new cljs.core.Keyword(null,"data","data",-232669377),data__24441__auto__], null));
};
var result_table = function (data__24441__auto__,owner41382,var_args){
var p__41384 = null;if (arguments.length > 2) {
  p__41384 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return result_table__delegate.call(this,data__24441__auto__,owner41382,p__41384);};
result_table.cljs$lang$maxFixedArity = 2;
result_table.cljs$lang$applyTo = (function (arglist__41694){
var data__24441__auto__ = cljs.core.first(arglist__41694);
arglist__41694 = cljs.core.next(arglist__41694);
var owner41382 = cljs.core.first(arglist__41694);
var p__41384 = cljs.core.rest(arglist__41694);
return result_table__delegate(data__24441__auto__,owner41382,p__41384);
});
result_table.cljs$core$IFn$_invoke$arity$variadic = result_table__delegate;
return result_table;
})()
;
stuttaford.radiant.components.__GT_result_table = (function() {
var __GT_result_table = null;
var __GT_result_table__1 = (function (cursor__24410__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.result_table,cursor__24410__auto__);
});
var __GT_result_table__2 = (function (cursor__24410__auto__,m41383){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.components.result_table,cursor__24410__auto__,m41383);
});
__GT_result_table = function(cursor__24410__auto__,m41383){
switch(arguments.length){
case 1:
return __GT_result_table__1.call(this,cursor__24410__auto__);
case 2:
return __GT_result_table__2.call(this,cursor__24410__auto__,m41383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_result_table.cljs$core$IFn$_invoke$arity$1 = __GT_result_table__1;
__GT_result_table.cljs$core$IFn$_invoke$arity$2 = __GT_result_table__2;
return __GT_result_table;
})()
;
//# sourceMappingURL=components.js.map