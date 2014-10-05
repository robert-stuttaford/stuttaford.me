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
stuttaford.radiant.components.data_source_dropdown = (function data_source_dropdown(c,data_sources,current_data_source){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om_bootstrap.button.dropdown,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),stuttaford.radiant.model.data_source_label(data_sources,current_data_source)], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var iter__20684__auto__ = (function iter__50038(s__50039){return (new cljs.core.LazySeq(null,(function (){var s__50039__$1 = s__50039;while(true){
var temp__4126__auto__ = cljs.core.seq(s__50039__$1);if(temp__4126__auto__)
{var s__50039__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__50039__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__50039__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__50041 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__50040 = (0);while(true){
if((i__50040 < size__20683__auto__))
{var map__50046 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__50040);var map__50046__$1 = ((cljs.core.seq_QMARK_(map__50046))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50046):map__50046);var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50046__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50046__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append(b__50041,stuttaford.radiant.components.data_source_item(c,id,label));
{
var G__50048 = (i__50040 + (1));
i__50040 = G__50048;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__50041),iter__50038(cljs.core.chunk_rest(s__50039__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__50041),null);
}
} else
{var map__50047 = cljs.core.first(s__50039__$2);var map__50047__$1 = ((cljs.core.seq_QMARK_(map__50047))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50047):map__50047);var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50047__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50047__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons(stuttaford.radiant.components.data_source_item(c,id,label),iter__50038(cljs.core.rest(s__50039__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20684__auto__(cljs.core.vals(data_sources));
})()));
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.components.schema = (function() { 
var schema__$1__delegate = function (data__24197__auto__,owner50049,p__50051){var vec__50117 = p__50051;var opts__24198__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50117,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema50121 = schema.core.Any;var input_schema50122 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-db","current-db",213667882)),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map50118","map50118",-915843369,null))], null);var input_checker50123 = schema.core.checker(input_schema50122);var output_checker50124 = schema.core.checker(output_schema50121);return schema.core.schematize_fn(((function (ufv__,output_schema50121,input_schema50122,input_checker50123,output_checker50124,vec__50117,opts__24198__auto__){
return (function fnk50120(G__50125){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___50182 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50125], null);var temp__4126__auto___50183 = (function (){var G__50154 = args__838__auto___50182;return (input_checker50123.cljs$core$IFn$_invoke$arity$1 ? input_checker50123.cljs$core$IFn$_invoke$arity$1(G__50154) : input_checker50123.call(null,G__50154));
})();if(cljs.core.truth_(temp__4126__auto___50183))
{var error__839__auto___50184 = temp__4126__auto___50183;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk50120","fnk50120",807143764,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50184], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50122,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___50182,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50184], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map50118 = G__50125;while(true){
if(cljs.core.map_QMARK_(map50118))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map50118], 0))));
}
var map50119 = plumbing.fnk.schema.safe_get(map50118,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var current_db = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map50119,new cljs.core.Keyword(null,"current-db","current-db",213667882),null);var owner = plumbing.fnk.schema.safe_get(map50118,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.components.t50155 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.components.t50155 = (function (input_checker50123,data__24197__auto__,vec__50117,owner,G__50125,output_schema50121,schema,output_checker50124,p__50051,opts__24198__auto__,current_db,fnk50120,map50118,input_schema50122,owner50049,validate__837__auto__,ufv__,map50119,meta50156){
this.input_checker50123 = input_checker50123;
this.data__24197__auto__ = data__24197__auto__;
this.vec__50117 = vec__50117;
this.owner = owner;
this.G__50125 = G__50125;
this.output_schema50121 = output_schema50121;
this.schema = schema;
this.output_checker50124 = output_checker50124;
this.p__50051 = p__50051;
this.opts__24198__auto__ = opts__24198__auto__;
this.current_db = current_db;
this.fnk50120 = fnk50120;
this.map50118 = map50118;
this.input_schema50122 = input_schema50122;
this.owner50049 = owner50049;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.map50119 = map50119;
this.meta50156 = meta50156;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.components.t50155.cljs$lang$type = true;
stuttaford.radiant.components.t50155.cljs$lang$ctorStr = "stuttaford.radiant.components/t50155";
stuttaford.radiant.components.t50155.cljs$lang$ctorPrWriter = ((function (owner,current_db,map50119,validate__837__auto__,ufv__,output_schema50121,input_schema50122,input_checker50123,output_checker50124,vec__50117,opts__24198__auto__){
return (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"stuttaford.radiant.components/t50155");
});})(owner,current_db,map50119,validate__837__auto__,ufv__,output_schema50121,input_schema50122,input_checker50123,output_checker50124,vec__50117,opts__24198__auto__))
;
stuttaford.radiant.components.t50155.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.components.t50155.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,current_db,map50119,validate__837__auto__,ufv__,output_schema50121,input_schema50122,input_checker50123,output_checker50124,vec__50117,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "schema";
});})(owner,current_db,map50119,validate__837__auto__,ufv__,output_schema50121,input_schema50122,input_checker50123,output_checker50124,vec__50117,opts__24198__auto__))
;
stuttaford.radiant.components.t50155.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.components.t50155.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,current_db,map50119,validate__837__auto__,ufv__,output_schema50121,input_schema50122,input_checker50123,output_checker50124,vec__50117,opts__24198__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),"Schema"], null),cljs.core.array_seq([(cljs.core.truth_(self__.current_db)?cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20684__auto__ = ((function (___$1,owner,current_db,map50119,validate__837__auto__,ufv__,output_schema50121,input_schema50122,input_checker50123,output_checker50124,vec__50117,opts__24198__auto__){
return (function iter__50159(s__50160){return (new cljs.core.LazySeq(null,((function (___$1,owner,current_db,map50119,validate__837__auto__,ufv__,output_schema50121,input_schema50122,input_checker50123,output_checker50124,vec__50117,opts__24198__auto__){
return (function (){var s__50160__$1 = s__50160;while(true){
var temp__4126__auto__ = cljs.core.seq(s__50160__$1);if(temp__4126__auto__)
{var s__50160__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__50160__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__50160__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__50162 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__50161 = (0);while(true){
if((i__50161 < size__20683__auto__))
{var schema__$3 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__50161);cljs.core.chunk_append(b__50162,(function (){var G__50173 = {"className": "schema"};var G__50174 = (function (){var attrs50158 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(schema__$3)], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs50158))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ident"], null)], null),attrs50158], 0))):{"className": "ident"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs50158))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs50158)], null))));
})();var G__50175 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["REF"], 0)):null));var G__50176 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["MANY"], 0)):null));return React.DOM.span(G__50173,G__50174,G__50175,G__50176);
})());
{
var G__50185 = (i__50161 + (1));
i__50161 = G__50185;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__50162),iter__50159(cljs.core.chunk_rest(s__50160__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__50162),null);
}
} else
{var schema__$3 = cljs.core.first(s__50160__$2);return cljs.core.cons((function (){var G__50177 = {"className": "schema"};var G__50178 = (function (){var attrs50158 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(schema__$3)], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs50158))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ident"], null)], null),attrs50158], 0))):{"className": "ident"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs50158))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs50158)], null))));
})();var G__50179 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["REF"], 0)):null));var G__50180 = sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(schema__$3)))?om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary"], null),cljs.core.array_seq(["MANY"], 0)):null));return React.DOM.span(G__50177,G__50178,G__50179,G__50180);
})(),iter__50159(cljs.core.rest(s__50160__$2)));
}
} else
{return null;
}
break;
}
});})(___$1,owner,current_db,map50119,validate__837__auto__,ufv__,output_schema50121,input_schema50122,input_checker50123,output_checker50124,vec__50117,opts__24198__auto__))
,null,null));
});})(___$1,owner,current_db,map50119,validate__837__auto__,ufv__,output_schema50121,input_schema50122,input_checker50123,output_checker50124,vec__50117,opts__24198__auto__))
;return iter__20684__auto__(stuttaford.radiant.model.schema_for_db(self__.current_db));
})()):"No database.")], 0));
});})(owner,current_db,map50119,validate__837__auto__,ufv__,output_schema50121,input_schema50122,input_checker50123,output_checker50124,vec__50117,opts__24198__auto__))
;
stuttaford.radiant.components.t50155.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,current_db,map50119,validate__837__auto__,ufv__,output_schema50121,input_schema50122,input_checker50123,output_checker50124,vec__50117,opts__24198__auto__){
return (function (_50157){var self__ = this;
var _50157__$1 = this;return self__.meta50156;
});})(owner,current_db,map50119,validate__837__auto__,ufv__,output_schema50121,input_schema50122,input_checker50123,output_checker50124,vec__50117,opts__24198__auto__))
;
stuttaford.radiant.components.t50155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,current_db,map50119,validate__837__auto__,ufv__,output_schema50121,input_schema50122,input_checker50123,output_checker50124,vec__50117,opts__24198__auto__){
return (function (_50157,meta50156__$1){var self__ = this;
var _50157__$1 = this;return (new stuttaford.radiant.components.t50155(self__.input_checker50123,self__.data__24197__auto__,self__.vec__50117,self__.owner,self__.G__50125,self__.output_schema50121,self__.schema,self__.output_checker50124,self__.p__50051,self__.opts__24198__auto__,self__.current_db,self__.fnk50120,self__.map50118,self__.input_schema50122,self__.owner50049,self__.validate__837__auto__,self__.ufv__,self__.map50119,meta50156__$1));
});})(owner,current_db,map50119,validate__837__auto__,ufv__,output_schema50121,input_schema50122,input_checker50123,output_checker50124,vec__50117,opts__24198__auto__))
;
stuttaford.radiant.components.__GT_t50155 = ((function (owner,current_db,map50119,validate__837__auto__,ufv__,output_schema50121,input_schema50122,input_checker50123,output_checker50124,vec__50117,opts__24198__auto__){
return (function __GT_t50155(input_checker50123__$1,data__24197__auto____$1,vec__50117__$1,owner__$1,G__50125__$1,output_schema50121__$1,schema__$2,output_checker50124__$1,p__50051__$1,opts__24198__auto____$1,current_db__$1,fnk50120__$1,map50118__$1,input_schema50122__$1,owner50049__$1,validate__837__auto____$1,ufv____$1,map50119__$1,meta50156){return (new stuttaford.radiant.components.t50155(input_checker50123__$1,data__24197__auto____$1,vec__50117__$1,owner__$1,G__50125__$1,output_schema50121__$1,schema__$2,output_checker50124__$1,p__50051__$1,opts__24198__auto____$1,current_db__$1,fnk50120__$1,map50118__$1,input_schema50122__$1,owner50049__$1,validate__837__auto____$1,ufv____$1,map50119__$1,meta50156));
});})(owner,current_db,map50119,validate__837__auto__,ufv__,output_schema50121,input_schema50122,input_checker50123,output_checker50124,vec__50117,opts__24198__auto__))
;
}
return (new stuttaford.radiant.components.t50155(input_checker50123,data__24197__auto__,vec__50117,owner,G__50125,output_schema50121,schema__$1,output_checker50124,p__50051,opts__24198__auto__,current_db,fnk50120,map50118,input_schema50122,owner50049,validate__837__auto__,ufv__,map50119,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___50186 = (function (){var G__50181 = o__840__auto__;return (output_checker50124.cljs$core$IFn$_invoke$arity$1 ? output_checker50124.cljs$core$IFn$_invoke$arity$1(G__50181) : output_checker50124.call(null,G__50181));
})();if(cljs.core.truth_(temp__4126__auto___50186))
{var error__839__auto___50187 = temp__4126__auto___50186;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk50120","fnk50120",807143764,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50187], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50121,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50187], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema50121,input_schema50122,input_checker50123,output_checker50124,vec__50117,opts__24198__auto__))
,schema.core.make_fn_schema(output_schema50121,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50122], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24198__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner50049,new cljs.core.Keyword(null,"data","data",-232669377),data__24197__auto__], null));
};
var schema__$1 = function (data__24197__auto__,owner50049,var_args){
var p__50051 = null;if (arguments.length > 2) {
  p__50051 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return schema__$1__delegate.call(this,data__24197__auto__,owner50049,p__50051);};
schema__$1.cljs$lang$maxFixedArity = 2;
schema__$1.cljs$lang$applyTo = (function (arglist__50188){
var data__24197__auto__ = cljs.core.first(arglist__50188);
arglist__50188 = cljs.core.next(arglist__50188);
var owner50049 = cljs.core.first(arglist__50188);
var p__50051 = cljs.core.rest(arglist__50188);
return schema__$1__delegate(data__24197__auto__,owner50049,p__50051);
});
schema__$1.cljs$core$IFn$_invoke$arity$variadic = schema__$1__delegate;
return schema__$1;
})()
;
stuttaford.radiant.components.__GT_schema = (function() {
var __GT_schema = null;
var __GT_schema__1 = (function (cursor__24166__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.schema,cursor__24166__auto__);
});
var __GT_schema__2 = (function (cursor__24166__auto__,m50050){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.components.schema,cursor__24166__auto__,m50050);
});
__GT_schema = function(cursor__24166__auto__,m50050){
switch(arguments.length){
case 1:
return __GT_schema__1.call(this,cursor__24166__auto__);
case 2:
return __GT_schema__2.call(this,cursor__24166__auto__,m50050);
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
var top_nav__delegate = function (data__24197__auto__,owner50189,p__50191){var vec__50258 = p__50191;var opts__24198__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50258,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema50263 = schema.core.Any;var input_schema50264 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684)),schema.core.Any,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map50259","map50259",774479612,null))], null);var input_checker50265 = schema.core.checker(input_schema50264);var output_checker50266 = schema.core.checker(output_schema50263);return schema.core.schematize_fn(((function (ufv__,output_schema50263,input_schema50264,input_checker50265,output_checker50266,vec__50258,opts__24198__auto__){
return (function fnk50262(G__50267){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___50324 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50267], null);var temp__4126__auto___50325 = (function (){var G__50296 = args__838__auto___50324;return (input_checker50265.cljs$core$IFn$_invoke$arity$1 ? input_checker50265.cljs$core$IFn$_invoke$arity$1(G__50296) : input_checker50265.call(null,G__50296));
})();if(cljs.core.truth_(temp__4126__auto___50325))
{var error__839__auto___50326 = temp__4126__auto___50325;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk50262","fnk50262",-78925241,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50326], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50264,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___50324,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50326], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map50259 = G__50267;while(true){
if(cljs.core.map_QMARK_(map50259))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map50259], 0))));
}
var map50261 = plumbing.fnk.schema.safe_get(map50259,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(map50261,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var data_sources = plumbing.fnk.schema.safe_get(map50261,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map50261,new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684),null);var schema_visible_QMARK_ = plumbing.fnk.schema.safe_get(map50261,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map50259,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map50260 = plumbing.fnk.schema.safe_get(map50259,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var nav_items = plumbing.fnk.schema.safe_get(map50260,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));if(typeof stuttaford.radiant.components.t50297 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.components.t50297 = (function (data__24197__auto__,current_data_source,owner,view,G__50267,input_schema50264,fnk50262,schema_visible_QMARK_,nav_items,vec__50258,opts__24198__auto__,input_checker50265,data_sources,map50261,output_checker50266,top_nav,p__50191,map50260,output_schema50263,validate__837__auto__,owner50189,map50259,ufv__,meta50298){
this.data__24197__auto__ = data__24197__auto__;
this.current_data_source = current_data_source;
this.owner = owner;
this.view = view;
this.G__50267 = G__50267;
this.input_schema50264 = input_schema50264;
this.fnk50262 = fnk50262;
this.schema_visible_QMARK_ = schema_visible_QMARK_;
this.nav_items = nav_items;
this.vec__50258 = vec__50258;
this.opts__24198__auto__ = opts__24198__auto__;
this.input_checker50265 = input_checker50265;
this.data_sources = data_sources;
this.map50261 = map50261;
this.output_checker50266 = output_checker50266;
this.top_nav = top_nav;
this.p__50191 = p__50191;
this.map50260 = map50260;
this.output_schema50263 = output_schema50263;
this.validate__837__auto__ = validate__837__auto__;
this.owner50189 = owner50189;
this.map50259 = map50259;
this.ufv__ = ufv__;
this.meta50298 = meta50298;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.components.t50297.cljs$lang$type = true;
stuttaford.radiant.components.t50297.cljs$lang$ctorStr = "stuttaford.radiant.components/t50297";
stuttaford.radiant.components.t50297.cljs$lang$ctorPrWriter = ((function (nav_items,map50260,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map50261,validate__837__auto__,ufv__,output_schema50263,input_schema50264,input_checker50265,output_checker50266,vec__50258,opts__24198__auto__){
return (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"stuttaford.radiant.components/t50297");
});})(nav_items,map50260,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map50261,validate__837__auto__,ufv__,output_schema50263,input_schema50264,input_checker50265,output_checker50266,vec__50258,opts__24198__auto__))
;
stuttaford.radiant.components.t50297.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.components.t50297.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (nav_items,map50260,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map50261,validate__837__auto__,ufv__,output_schema50263,input_schema50264,input_checker50265,output_checker50266,vec__50258,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "top-nav";
});})(nav_items,map50260,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map50261,validate__837__auto__,ufv__,output_schema50263,input_schema50264,input_checker50265,output_checker50266,vec__50258,opts__24198__auto__))
;
stuttaford.radiant.components.t50297.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.components.t50297.prototype.om$core$IRenderState$render_state$arity$2 = ((function (nav_items,map50260,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map50261,validate__837__auto__,ufv__,output_schema50263,input_schema50264,input_checker50265,output_checker50266,vec__50258,opts__24198__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var G__50302 = {"className": "radiant"};var G__50303 = "RADIANT";return React.DOM.div(G__50302,G__50303);
})(),om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20684__auto__ = ((function (c,___$1,nav_items,map50260,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map50261,validate__837__auto__,ufv__,output_schema50263,input_schema50264,input_checker50265,output_checker50266,vec__50258,opts__24198__auto__){
return (function iter__50304(s__50305){return (new cljs.core.LazySeq(null,((function (c,___$1,nav_items,map50260,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map50261,validate__837__auto__,ufv__,output_schema50263,input_schema50264,input_checker50265,output_checker50266,vec__50258,opts__24198__auto__){
return (function (){var s__50305__$1 = s__50305;while(true){
var temp__4126__auto__ = cljs.core.seq(s__50305__$1);if(temp__4126__auto__)
{var s__50305__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__50305__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__50305__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__50307 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__50306 = (0);while(true){
if((i__50306 < size__20683__auto__))
{var vec__50316 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__50306);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50316,(0),null);var vec__50317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50316,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50317,(0),null);cljs.core.chunk_append(b__50307,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__50318 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__50306,vec__50316,id,vec__50317,label,c__20682__auto__,size__20683__auto__,b__50307,s__50305__$2,temp__4126__auto__,c,___$1,nav_items,map50260,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map50261,validate__837__auto__,ufv__,output_schema50263,input_schema50264,input_checker50265,output_checker50266,vec__50258,opts__24198__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__50306,vec__50316,id,vec__50317,label,c__20682__auto__,size__20683__auto__,b__50307,s__50305__$2,temp__4126__auto__,c,___$1,nav_items,map50260,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map50261,validate__837__auto__,ufv__,output_schema50263,input_schema50264,input_checker50265,output_checker50266,vec__50258,opts__24198__auto__))
], null);var G__50318__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50318,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__50318);return G__50318__$1;
})(),cljs.core.array_seq([label], 0)));
{
var G__50327 = (i__50306 + (1));
i__50306 = G__50327;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__50307),iter__50304(cljs.core.chunk_rest(s__50305__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__50307),null);
}
} else
{var vec__50319 = cljs.core.first(s__50305__$2);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50319,(0),null);var vec__50320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50319,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50320,(0),null);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__50321 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__50319,id,vec__50320,label,s__50305__$2,temp__4126__auto__,c,___$1,nav_items,map50260,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map50261,validate__837__auto__,ufv__,output_schema50263,input_schema50264,input_checker50265,output_checker50266,vec__50258,opts__24198__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(vec__50319,id,vec__50320,label,s__50305__$2,temp__4126__auto__,c,___$1,nav_items,map50260,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map50261,validate__837__auto__,ufv__,output_schema50263,input_schema50264,input_checker50265,output_checker50266,vec__50258,opts__24198__auto__))
], null);var G__50321__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50321,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__50321);return G__50321__$1;
})(),cljs.core.array_seq([label], 0)),iter__50304(cljs.core.rest(s__50305__$2)));
}
} else
{return null;
}
break;
}
});})(c,___$1,nav_items,map50260,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map50261,validate__837__auto__,ufv__,output_schema50263,input_schema50264,input_checker50265,output_checker50266,vec__50258,opts__24198__auto__))
,null,null));
});})(c,___$1,nav_items,map50260,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map50261,validate__837__auto__,ufv__,output_schema50263,input_schema50264,input_checker50265,output_checker50266,vec__50258,opts__24198__auto__))
;return iter__20684__auto__(self__.nav_items);
})()], 0)),stuttaford.radiant.components.data_source_dropdown(c,self__.data_sources,self__.current_data_source),om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__50322 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (c,___$1,nav_items,map50260,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map50261,validate__837__auto__,ufv__,output_schema50263,input_schema50264,input_checker50265,output_checker50266,vec__50258,opts__24198__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-schema-visible","set-schema-visible",-1408939033),cljs.core.not(self__.schema_visible_QMARK_)], null));
});})(c,___$1,nav_items,map50260,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map50261,validate__837__auto__,ufv__,output_schema50263,input_schema50264,input_checker50265,output_checker50266,vec__50258,opts__24198__auto__))
], null);var G__50322__$1 = (cljs.core.truth_(self__.schema_visible_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50322,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__50322);return G__50322__$1;
})(),cljs.core.array_seq(["Show schema"], 0))], 0));
});})(nav_items,map50260,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map50261,validate__837__auto__,ufv__,output_schema50263,input_schema50264,input_checker50265,output_checker50266,vec__50258,opts__24198__auto__))
;
stuttaford.radiant.components.t50297.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (nav_items,map50260,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map50261,validate__837__auto__,ufv__,output_schema50263,input_schema50264,input_checker50265,output_checker50266,vec__50258,opts__24198__auto__){
return (function (_50299){var self__ = this;
var _50299__$1 = this;return self__.meta50298;
});})(nav_items,map50260,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map50261,validate__837__auto__,ufv__,output_schema50263,input_schema50264,input_checker50265,output_checker50266,vec__50258,opts__24198__auto__))
;
stuttaford.radiant.components.t50297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (nav_items,map50260,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map50261,validate__837__auto__,ufv__,output_schema50263,input_schema50264,input_checker50265,output_checker50266,vec__50258,opts__24198__auto__){
return (function (_50299,meta50298__$1){var self__ = this;
var _50299__$1 = this;return (new stuttaford.radiant.components.t50297(self__.data__24197__auto__,self__.current_data_source,self__.owner,self__.view,self__.G__50267,self__.input_schema50264,self__.fnk50262,self__.schema_visible_QMARK_,self__.nav_items,self__.vec__50258,self__.opts__24198__auto__,self__.input_checker50265,self__.data_sources,self__.map50261,self__.output_checker50266,self__.top_nav,self__.p__50191,self__.map50260,self__.output_schema50263,self__.validate__837__auto__,self__.owner50189,self__.map50259,self__.ufv__,meta50298__$1));
});})(nav_items,map50260,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map50261,validate__837__auto__,ufv__,output_schema50263,input_schema50264,input_checker50265,output_checker50266,vec__50258,opts__24198__auto__))
;
stuttaford.radiant.components.__GT_t50297 = ((function (nav_items,map50260,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map50261,validate__837__auto__,ufv__,output_schema50263,input_schema50264,input_checker50265,output_checker50266,vec__50258,opts__24198__auto__){
return (function __GT_t50297(data__24197__auto____$1,current_data_source__$1,owner__$1,view__$1,G__50267__$1,input_schema50264__$1,fnk50262__$1,schema_visible_QMARK___$1,nav_items__$1,vec__50258__$1,opts__24198__auto____$1,input_checker50265__$1,data_sources__$1,map50261__$1,output_checker50266__$1,top_nav__$1,p__50191__$1,map50260__$1,output_schema50263__$1,validate__837__auto____$1,owner50189__$1,map50259__$1,ufv____$1,meta50298){return (new stuttaford.radiant.components.t50297(data__24197__auto____$1,current_data_source__$1,owner__$1,view__$1,G__50267__$1,input_schema50264__$1,fnk50262__$1,schema_visible_QMARK___$1,nav_items__$1,vec__50258__$1,opts__24198__auto____$1,input_checker50265__$1,data_sources__$1,map50261__$1,output_checker50266__$1,top_nav__$1,p__50191__$1,map50260__$1,output_schema50263__$1,validate__837__auto____$1,owner50189__$1,map50259__$1,ufv____$1,meta50298));
});})(nav_items,map50260,owner,schema_visible_QMARK_,current_data_source,data_sources,view,map50261,validate__837__auto__,ufv__,output_schema50263,input_schema50264,input_checker50265,output_checker50266,vec__50258,opts__24198__auto__))
;
}
return (new stuttaford.radiant.components.t50297(data__24197__auto__,current_data_source,owner,view,G__50267,input_schema50264,fnk50262,schema_visible_QMARK_,nav_items,vec__50258,opts__24198__auto__,input_checker50265,data_sources,map50261,output_checker50266,top_nav,p__50191,map50260,output_schema50263,validate__837__auto__,owner50189,map50259,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___50328 = (function (){var G__50323 = o__840__auto__;return (output_checker50266.cljs$core$IFn$_invoke$arity$1 ? output_checker50266.cljs$core$IFn$_invoke$arity$1(G__50323) : output_checker50266.call(null,G__50323));
})();if(cljs.core.truth_(temp__4126__auto___50328))
{var error__839__auto___50329 = temp__4126__auto___50328;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk50262","fnk50262",-78925241,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50329], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50263,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50329], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema50263,input_schema50264,input_checker50265,output_checker50266,vec__50258,opts__24198__auto__))
,schema.core.make_fn_schema(output_schema50263,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50264], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24198__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner50189,new cljs.core.Keyword(null,"data","data",-232669377),data__24197__auto__], null));
};
var top_nav = function (data__24197__auto__,owner50189,var_args){
var p__50191 = null;if (arguments.length > 2) {
  p__50191 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return top_nav__delegate.call(this,data__24197__auto__,owner50189,p__50191);};
top_nav.cljs$lang$maxFixedArity = 2;
top_nav.cljs$lang$applyTo = (function (arglist__50330){
var data__24197__auto__ = cljs.core.first(arglist__50330);
arglist__50330 = cljs.core.next(arglist__50330);
var owner50189 = cljs.core.first(arglist__50330);
var p__50191 = cljs.core.rest(arglist__50330);
return top_nav__delegate(data__24197__auto__,owner50189,p__50191);
});
top_nav.cljs$core$IFn$_invoke$arity$variadic = top_nav__delegate;
return top_nav;
})()
;
stuttaford.radiant.components.__GT_top_nav = (function() {
var __GT_top_nav = null;
var __GT_top_nav__1 = (function (cursor__24166__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.top_nav,cursor__24166__auto__);
});
var __GT_top_nav__2 = (function (cursor__24166__auto__,m50190){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.components.top_nav,cursor__24166__auto__,m50190);
});
__GT_top_nav = function(cursor__24166__auto__,m50190){
switch(arguments.length){
case 1:
return __GT_top_nav__1.call(this,cursor__24166__auto__);
case 2:
return __GT_top_nav__2.call(this,cursor__24166__auto__,m50190);
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
stuttaford.radiant.components.paginate_label = (function paginate_label(current_page,rows){var start = (stuttaford.radiant.components.PAGE_SIZE * current_page);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((start + (1)))+" - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__19896__auto__ = (start + stuttaford.radiant.components.PAGE_SIZE);var y__19897__auto__ = cljs.core.count(rows);return ((x__19896__auto__ < y__19897__auto__) ? x__19896__auto__ : y__19897__auto__);
})()));
});
stuttaford.radiant.components.sort_rows = (function sort_rows(sort_col,rows){return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__50331_SHARP_){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__50331_SHARP_,sort_col);
}),rows);
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.components.result_table = (function() { 
var result_table__delegate = function (data__24197__auto__,owner50332,p__50334){var vec__50485 = p__50334;var opts__24198__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50485,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema50490 = schema.core.Any;var input_schema50491 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260)),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"rows","rows",850049680),schema.core.Any,new cljs.core.Keyword(null,"cols","cols",-1914801295),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map50486","map50486",-2074847834,null))], null);var input_checker50492 = schema.core.checker(input_schema50491);var output_checker50493 = schema.core.checker(output_schema50490);return schema.core.schematize_fn(((function (ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__){
return (function fnk50489(G__50494){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___50635 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50494], null);var temp__4126__auto___50636 = (function (){var G__50565 = args__838__auto___50635;return (input_checker50492.cljs$core$IFn$_invoke$arity$1 ? input_checker50492.cljs$core$IFn$_invoke$arity$1(G__50565) : input_checker50492.call(null,G__50565));
})();if(cljs.core.truth_(temp__4126__auto___50636))
{var error__839__auto___50637 = temp__4126__auto___50636;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk50489","fnk50489",-1572991318,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50637], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50491,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___50635,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50637], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map50486 = G__50494;while(true){
if(cljs.core.map_QMARK_(map50486))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map50486], 0))));
}
var map50488 = plumbing.fnk.schema.safe_get(map50486,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var cols = plumbing.fnk.schema.safe_get(map50488,new cljs.core.Keyword(null,"cols","cols",-1914801295),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var rows = plumbing.fnk.schema.safe_get(map50488,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map50486,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map50487 = plumbing.fnk.schema.safe_get(map50486,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var allow_sorting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map50487,new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),false);if(typeof stuttaford.radiant.components.t50566 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.components.t50566 = (function (input_checker50492,data__24197__auto__,owner,map50486,vec__50485,G__50494,fnk50489,result_table,allow_sorting_QMARK_,opts__24198__auto__,owner50332,output_schema50490,map50487,output_checker50493,rows,cols,input_schema50491,validate__837__auto__,map50488,ufv__,p__50334,meta50567){
this.input_checker50492 = input_checker50492;
this.data__24197__auto__ = data__24197__auto__;
this.owner = owner;
this.map50486 = map50486;
this.vec__50485 = vec__50485;
this.G__50494 = G__50494;
this.fnk50489 = fnk50489;
this.result_table = result_table;
this.allow_sorting_QMARK_ = allow_sorting_QMARK_;
this.opts__24198__auto__ = opts__24198__auto__;
this.owner50332 = owner50332;
this.output_schema50490 = output_schema50490;
this.map50487 = map50487;
this.output_checker50493 = output_checker50493;
this.rows = rows;
this.cols = cols;
this.input_schema50491 = input_schema50491;
this.validate__837__auto__ = validate__837__auto__;
this.map50488 = map50488;
this.ufv__ = ufv__;
this.p__50334 = p__50334;
this.meta50567 = meta50567;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.components.t50566.cljs$lang$type = true;
stuttaford.radiant.components.t50566.cljs$lang$ctorStr = "stuttaford.radiant.components/t50566";
stuttaford.radiant.components.t50566.cljs$lang$ctorPrWriter = ((function (allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__){
return (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"stuttaford.radiant.components/t50566");
});})(allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__))
;
stuttaford.radiant.components.t50566.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.components.t50566.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "result-table";
});})(allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__))
;
stuttaford.radiant.components.t50566.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.components.t50566.prototype.om$core$IRenderState$render_state$arity$2 = ((function (allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__){
return (function (_,p__50569){var self__ = this;
var map__50570 = p__50569;var map__50570__$1 = ((cljs.core.seq_QMARK_(map__50570))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50570):map__50570);var current_page = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50570__$1,new cljs.core.Keyword(null,"current-page","current-page",-101294180),(0));var sort_col = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50570__$1,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882),(0));var ___$1 = this;var page_count = cljs.core.count(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.PAGE_SIZE,self__.rows));var paginate_QMARK_ = (page_count > (1));var G__50572 = null;var G__50573 = (function (){var G__50575 = {"className": "result-pagination"};var G__50576 = (function (){var attrs50571 = cljs.core.count(self__.rows);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs50571))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-count"], null)], null),attrs50571], 0))):{"className": "item-count"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs50571))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" items",sablono.interpreter.interpret(((paginate_QMARK_)?(" \u00B7 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(stuttaford.radiant.components.paginate_label(current_page,self__.rows))):null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs50571)," items",sablono.interpreter.interpret(((paginate_QMARK_)?(" \u00B7 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(stuttaford.radiant.components.paginate_label(current_page,self__.rows))):null))], null))));
})();var G__50577 = sablono.interpreter.interpret(((paginate_QMARK_)?om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20684__auto__ = ((function (G__50575,G__50576,G__50572,page_count,paginate_QMARK_,___$1,map__50570,map__50570__$1,current_page,sort_col,allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__){
return (function iter__50578(s__50579){return (new cljs.core.LazySeq(null,((function (G__50575,G__50576,G__50572,page_count,paginate_QMARK_,___$1,map__50570,map__50570__$1,current_page,sort_col,allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__){
return (function (){var s__50579__$1 = s__50579;while(true){
var temp__4126__auto__ = cljs.core.seq(s__50579__$1);if(temp__4126__auto__)
{var s__50579__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__50579__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__50579__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__50581 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__50580 = (0);while(true){
if((i__50580 < size__20683__auto__))
{var page = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__50580);cljs.core.chunk_append(b__50581,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__50586 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__50580,page,c__20682__auto__,size__20683__auto__,b__50581,s__50579__$2,temp__4126__auto__,G__50575,G__50576,G__50572,page_count,paginate_QMARK_,___$1,map__50570,map__50570__$1,current_page,sort_col,allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page);
});})(i__50580,page,c__20682__auto__,size__20683__auto__,b__50581,s__50579__$2,temp__4126__auto__,G__50575,G__50576,G__50572,page_count,paginate_QMARK_,___$1,map__50570,map__50570__$1,current_page,sort_col,allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__))
], null);var G__50586__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50586,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__50586);return G__50586__$1;
})(),cljs.core.array_seq([(page + (1))], 0)));
{
var G__50638 = (i__50580 + (1));
i__50580 = G__50638;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__50581),iter__50578(cljs.core.chunk_rest(s__50579__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__50581),null);
}
} else
{var page = cljs.core.first(s__50579__$2);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__50587 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (page,s__50579__$2,temp__4126__auto__,G__50575,G__50576,G__50572,page_count,paginate_QMARK_,___$1,map__50570,map__50570__$1,current_page,sort_col,allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page);
});})(page,s__50579__$2,temp__4126__auto__,G__50575,G__50576,G__50572,page_count,paginate_QMARK_,___$1,map__50570,map__50570__$1,current_page,sort_col,allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__))
], null);var G__50587__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,current_page))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50587,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__50587);return G__50587__$1;
})(),cljs.core.array_seq([(page + (1))], 0)),iter__50578(cljs.core.rest(s__50579__$2)));
}
} else
{return null;
}
break;
}
});})(G__50575,G__50576,G__50572,page_count,paginate_QMARK_,___$1,map__50570,map__50570__$1,current_page,sort_col,allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__))
,null,null));
});})(G__50575,G__50576,G__50572,page_count,paginate_QMARK_,___$1,map__50570,map__50570__$1,current_page,sort_col,allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__))
;return iter__20684__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(page_count));
})()], 0)):null));return React.DOM.div(G__50575,G__50576,G__50577);
})();var G__50574 = sablono.interpreter.interpret(om_bootstrap.table.table.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"striped?","striped?",-797214979),true,new cljs.core.Keyword(null,"bordered?","bordered?",562358476),true,new cljs.core.Keyword(null,"condensed?","condensed?",-109797520),true,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),true], null),cljs.core.array_seq([cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50592 = null;var G__50593 = (function (){var attrs50590 = cljs.core.map_indexed(((function (G__50592,G__50572,G__50573,page_count,paginate_QMARK_,___$1,map__50570,map__50570__$1,current_page,sort_col,allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__){
return (function (i,v){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),(cljs.core.truth_(self__.allow_sorting_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__50592,G__50572,G__50573,page_count,paginate_QMARK_,___$1,map__50570,map__50570__$1,current_page,sort_col,allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__){
return (function (){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882),i);
});})(G__50592,G__50572,G__50573,page_count,paginate_QMARK_,___$1,map__50570,map__50570__$1,current_page,sort_col,allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__))
], null):null),v,(cljs.core.truth_((function (){var and__19277__auto__ = self__.allow_sorting_QMARK_;if(cljs.core.truth_(and__19277__auto__))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,sort_col);
} else
{return and__19277__auto__;
}
})())?cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-chevron-down","span.glyphicon.glyphicon-chevron-down",-62425995)], null))," "):null)], null);
});})(G__50592,G__50572,G__50573,page_count,paginate_QMARK_,___$1,map__50570,map__50570__$1,current_page,sort_col,allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__))
,self__.cols);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tr,((cljs.core.map_QMARK_(attrs50590))?sablono.interpreter.attributes(attrs50590):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs50590))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs50590)], null))));
})();return React.DOM.thead(G__50592,G__50593);
})(),(function (){var G__50594 = null;var G__50595 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20684__auto__ = ((function (G__50594,G__50572,G__50573,page_count,paginate_QMARK_,___$1,map__50570,map__50570__$1,current_page,sort_col,allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__){
return (function iter__50596(s__50597){return (new cljs.core.LazySeq(null,((function (G__50594,G__50572,G__50573,page_count,paginate_QMARK_,___$1,map__50570,map__50570__$1,current_page,sort_col,allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__){
return (function (){var s__50597__$1 = s__50597;while(true){
var temp__4126__auto__ = cljs.core.seq(s__50597__$1);if(temp__4126__auto__)
{var s__50597__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__50597__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__50597__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__50599 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__50598 = (0);while(true){
if((i__50598 < size__20683__auto__))
{var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__50598);cljs.core.chunk_append(b__50599,(function (){var G__50618 = null;var G__50619 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20684__auto__ = ((function (i__50598,G__50618,row,c__20682__auto__,size__20683__auto__,b__50599,s__50597__$2,temp__4126__auto__,G__50594,G__50572,G__50573,page_count,paginate_QMARK_,___$1,map__50570,map__50570__$1,current_page,sort_col,allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__){
return (function iter__50620(s__50621){return (new cljs.core.LazySeq(null,((function (i__50598,G__50618,row,c__20682__auto__,size__20683__auto__,b__50599,s__50597__$2,temp__4126__auto__,G__50594,G__50572,G__50573,page_count,paginate_QMARK_,___$1,map__50570,map__50570__$1,current_page,sort_col,allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__){
return (function (){var s__50621__$1 = s__50621;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__50621__$1);if(temp__4126__auto____$1)
{var s__50621__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__50621__$2))
{var c__20682__auto____$1 = cljs.core.chunk_first(s__50621__$2);var size__20683__auto____$1 = cljs.core.count(c__20682__auto____$1);var b__50623 = cljs.core.chunk_buffer(size__20683__auto____$1);if((function (){var i__50622 = (0);while(true){
if((i__50622 < size__20683__auto____$1))
{var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto____$1,i__50622);cljs.core.chunk_append(b__50623,(function (){var attrs50591 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs50591))?sablono.interpreter.attributes(attrs50591):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs50591))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs50591)], null))));
})());
{
var G__50639 = (i__50622 + (1));
i__50622 = G__50639;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__50623),iter__50620(cljs.core.chunk_rest(s__50621__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__50623),null);
}
} else
{var value = cljs.core.first(s__50621__$2);return cljs.core.cons((function (){var attrs50591 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs50591))?sablono.interpreter.attributes(attrs50591):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs50591))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs50591)], null))));
})(),iter__50620(cljs.core.rest(s__50621__$2)));
}
} else
{return null;
}
break;
}
});})(i__50598,G__50618,row,c__20682__auto__,size__20683__auto__,b__50599,s__50597__$2,temp__4126__auto__,G__50594,G__50572,G__50573,page_count,paginate_QMARK_,___$1,map__50570,map__50570__$1,current_page,sort_col,allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__))
,null,null));
});})(i__50598,G__50618,row,c__20682__auto__,size__20683__auto__,b__50599,s__50597__$2,temp__4126__auto__,G__50594,G__50572,G__50573,page_count,paginate_QMARK_,___$1,map__50570,map__50570__$1,current_page,sort_col,allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__))
;return iter__20684__auto__(row);
})());return React.DOM.tr(G__50618,G__50619);
})());
{
var G__50640 = (i__50598 + (1));
i__50598 = G__50640;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__50599),iter__50596(cljs.core.chunk_rest(s__50597__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__50599),null);
}
} else
{var row = cljs.core.first(s__50597__$2);return cljs.core.cons((function (){var G__50626 = null;var G__50627 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20684__auto__ = ((function (G__50626,row,s__50597__$2,temp__4126__auto__,G__50594,G__50572,G__50573,page_count,paginate_QMARK_,___$1,map__50570,map__50570__$1,current_page,sort_col,allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__){
return (function iter__50628(s__50629){return (new cljs.core.LazySeq(null,((function (G__50626,row,s__50597__$2,temp__4126__auto__,G__50594,G__50572,G__50573,page_count,paginate_QMARK_,___$1,map__50570,map__50570__$1,current_page,sort_col,allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__){
return (function (){var s__50629__$1 = s__50629;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__50629__$1);if(temp__4126__auto____$1)
{var s__50629__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__50629__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__50629__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__50631 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__50630 = (0);while(true){
if((i__50630 < size__20683__auto__))
{var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__50630);cljs.core.chunk_append(b__50631,(function (){var attrs50591 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs50591))?sablono.interpreter.attributes(attrs50591):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs50591))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs50591)], null))));
})());
{
var G__50641 = (i__50630 + (1));
i__50630 = G__50641;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__50631),iter__50628(cljs.core.chunk_rest(s__50629__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__50631),null);
}
} else
{var value = cljs.core.first(s__50629__$2);return cljs.core.cons((function (){var attrs50591 = (((value instanceof cljs.core.Keyword))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)):value);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs50591))?sablono.interpreter.attributes(attrs50591):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs50591))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs50591)], null))));
})(),iter__50628(cljs.core.rest(s__50629__$2)));
}
} else
{return null;
}
break;
}
});})(G__50626,row,s__50597__$2,temp__4126__auto__,G__50594,G__50572,G__50573,page_count,paginate_QMARK_,___$1,map__50570,map__50570__$1,current_page,sort_col,allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__))
,null,null));
});})(G__50626,row,s__50597__$2,temp__4126__auto__,G__50594,G__50572,G__50573,page_count,paginate_QMARK_,___$1,map__50570,map__50570__$1,current_page,sort_col,allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__))
;return iter__20684__auto__(row);
})());return React.DOM.tr(G__50626,G__50627);
})(),iter__50596(cljs.core.rest(s__50597__$2)));
}
} else
{return null;
}
break;
}
});})(G__50594,G__50572,G__50573,page_count,paginate_QMARK_,___$1,map__50570,map__50570__$1,current_page,sort_col,allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__))
,null,null));
});})(G__50594,G__50572,G__50573,page_count,paginate_QMARK_,___$1,map__50570,map__50570__$1,current_page,sort_col,allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__))
;return iter__20684__auto__(stuttaford.radiant.components.sort_rows(sort_col,stuttaford.radiant.components.paginate(current_page,self__.rows)));
})());return React.DOM.tbody(G__50594,G__50595);
})()], null))], 0)));return React.DOM.div(G__50572,G__50573,G__50574);
});})(allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__))
;
stuttaford.radiant.components.t50566.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__){
return (function (_50568){var self__ = this;
var _50568__$1 = this;return self__.meta50567;
});})(allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__))
;
stuttaford.radiant.components.t50566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__){
return (function (_50568,meta50567__$1){var self__ = this;
var _50568__$1 = this;return (new stuttaford.radiant.components.t50566(self__.input_checker50492,self__.data__24197__auto__,self__.owner,self__.map50486,self__.vec__50485,self__.G__50494,self__.fnk50489,self__.result_table,self__.allow_sorting_QMARK_,self__.opts__24198__auto__,self__.owner50332,self__.output_schema50490,self__.map50487,self__.output_checker50493,self__.rows,self__.cols,self__.input_schema50491,self__.validate__837__auto__,self__.map50488,self__.ufv__,self__.p__50334,meta50567__$1));
});})(allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__))
;
stuttaford.radiant.components.__GT_t50566 = ((function (allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__){
return (function __GT_t50566(input_checker50492__$1,data__24197__auto____$1,owner__$1,map50486__$1,vec__50485__$1,G__50494__$1,fnk50489__$1,result_table__$1,allow_sorting_QMARK___$1,opts__24198__auto____$1,owner50332__$1,output_schema50490__$1,map50487__$1,output_checker50493__$1,rows__$1,cols__$1,input_schema50491__$1,validate__837__auto____$1,map50488__$1,ufv____$1,p__50334__$1,meta50567){return (new stuttaford.radiant.components.t50566(input_checker50492__$1,data__24197__auto____$1,owner__$1,map50486__$1,vec__50485__$1,G__50494__$1,fnk50489__$1,result_table__$1,allow_sorting_QMARK___$1,opts__24198__auto____$1,owner50332__$1,output_schema50490__$1,map50487__$1,output_checker50493__$1,rows__$1,cols__$1,input_schema50491__$1,validate__837__auto____$1,map50488__$1,ufv____$1,p__50334__$1,meta50567));
});})(allow_sorting_QMARK_,map50487,owner,rows,cols,map50488,validate__837__auto__,ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__))
;
}
return (new stuttaford.radiant.components.t50566(input_checker50492,data__24197__auto__,owner,map50486,vec__50485,G__50494,fnk50489,result_table,allow_sorting_QMARK_,opts__24198__auto__,owner50332,output_schema50490,map50487,output_checker50493,rows,cols,input_schema50491,validate__837__auto__,map50488,ufv__,p__50334,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___50642 = (function (){var G__50634 = o__840__auto__;return (output_checker50493.cljs$core$IFn$_invoke$arity$1 ? output_checker50493.cljs$core$IFn$_invoke$arity$1(G__50634) : output_checker50493.call(null,G__50634));
})();if(cljs.core.truth_(temp__4126__auto___50642))
{var error__839__auto___50643 = temp__4126__auto___50642;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk50489","fnk50489",-1572991318,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50643], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50490,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50643], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema50490,input_schema50491,input_checker50492,output_checker50493,vec__50485,opts__24198__auto__))
,schema.core.make_fn_schema(output_schema50490,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50491], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24198__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner50332,new cljs.core.Keyword(null,"data","data",-232669377),data__24197__auto__], null));
};
var result_table = function (data__24197__auto__,owner50332,var_args){
var p__50334 = null;if (arguments.length > 2) {
  p__50334 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return result_table__delegate.call(this,data__24197__auto__,owner50332,p__50334);};
result_table.cljs$lang$maxFixedArity = 2;
result_table.cljs$lang$applyTo = (function (arglist__50644){
var data__24197__auto__ = cljs.core.first(arglist__50644);
arglist__50644 = cljs.core.next(arglist__50644);
var owner50332 = cljs.core.first(arglist__50644);
var p__50334 = cljs.core.rest(arglist__50644);
return result_table__delegate(data__24197__auto__,owner50332,p__50334);
});
result_table.cljs$core$IFn$_invoke$arity$variadic = result_table__delegate;
return result_table;
})()
;
stuttaford.radiant.components.__GT_result_table = (function() {
var __GT_result_table = null;
var __GT_result_table__1 = (function (cursor__24166__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.components.result_table,cursor__24166__auto__);
});
var __GT_result_table__2 = (function (cursor__24166__auto__,m50333){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.components.result_table,cursor__24166__auto__,m50333);
});
__GT_result_table = function(cursor__24166__auto__,m50333){
switch(arguments.length){
case 1:
return __GT_result_table__1.call(this,cursor__24166__auto__);
case 2:
return __GT_result_table__2.call(this,cursor__24166__auto__,m50333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_result_table.cljs$core$IFn$_invoke$arity$1 = __GT_result_table__1;
__GT_result_table.cljs$core$IFn$_invoke$arity$2 = __GT_result_table__2;
return __GT_result_table;
})()
;
//# sourceMappingURL=components.js.map