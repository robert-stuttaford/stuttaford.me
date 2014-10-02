goog.provide('stuttaford.radiant.datalog');
goog.require('cljs.core');
goog.require('stuttaford.radiant.components');
goog.require('om_bootstrap.input');
goog.require('sablono.core');
goog.require('datascript.query');
goog.require('om_bootstrap.grid');
goog.require('om_tools.core');
goog.require('datascript');
goog.require('sablono.core');
goog.require('datascript.query');
goog.require('om.core');
goog.require('om.core');
goog.require('om_bootstrap.grid');
goog.require('stuttaford.radiant.components');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('om_bootstrap.input');
goog.require('datascript');
stuttaford.radiant.datalog.maybe_parse_query = (function maybe_parse_query(s){try{var G__41316 = s;var G__41316__$1 = (((G__41316 == null))?null:cljs.reader.read_string(G__41316));var G__41316__$2 = (((G__41316__$1 == null))?null:datascript.query.parse_query(G__41316__$1));return G__41316__$2;
}catch (e41315){var e = e41315;return null;
}});
stuttaford.radiant.datalog.handle_query_input_change = (function handle_query_input_change(data,owner){var input = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"input");var text = input.value;return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"query","query",-1288509510),text);
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.datalog.query_input = (function() { 
var query_input__delegate = function (data__24172__auto__,owner41317,p__41319){var vec__41342 = p__41319;var opts__24173__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41342,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema41345 = schema.core.Any;var input_schema41346 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map41343","map41343",-1313943070,null))], null);var input_checker41347 = schema.core.checker(input_schema41346);var output_checker41348 = schema.core.checker(output_schema41345);return schema.core.schematize_fn(((function (ufv__,output_schema41345,input_schema41346,input_checker41347,output_checker41348,vec__41342,opts__24173__auto__){
return (function fnk41344(G__41349){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___41364 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__41349], null);var temp__4126__auto___41365 = (function (){var G__41357 = args__838__auto___41364;return (input_checker41347.cljs$core$IFn$_invoke$arity$1 ? input_checker41347.cljs$core$IFn$_invoke$arity$1(G__41357) : input_checker41347.call(null,G__41357));
})();if(cljs.core.truth_(temp__4126__auto___41365))
{var error__839__auto___41366 = temp__4126__auto___41365;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk41344","fnk41344",927556900,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41366], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema41346,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___41364,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41366], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map41343 = G__41349;while(true){
if(cljs.core.map_QMARK_(map41343))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map41343], 0))));
}
var data = plumbing.fnk.schema.safe_get(map41343,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var query = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map41343,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datalog.t41358 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datalog.t41358 = (function (query,map41343,fnk41344,input_checker41347,input_schema41346,owner,opts__24173__auto__,query_input,data,output_schema41345,G__41349,p__41319,data__24172__auto__,output_checker41348,owner41317,vec__41342,validate__837__auto__,ufv__,meta41359){
this.query = query;
this.map41343 = map41343;
this.fnk41344 = fnk41344;
this.input_checker41347 = input_checker41347;
this.input_schema41346 = input_schema41346;
this.owner = owner;
this.opts__24173__auto__ = opts__24173__auto__;
this.query_input = query_input;
this.data = data;
this.output_schema41345 = output_schema41345;
this.G__41349 = G__41349;
this.p__41319 = p__41319;
this.data__24172__auto__ = data__24172__auto__;
this.output_checker41348 = output_checker41348;
this.owner41317 = owner41317;
this.vec__41342 = vec__41342;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.meta41359 = meta41359;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datalog.t41358.cljs$lang$type = true;
stuttaford.radiant.datalog.t41358.cljs$lang$ctorStr = "stuttaford.radiant.datalog/t41358";
stuttaford.radiant.datalog.t41358.cljs$lang$ctorPrWriter = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema41345,input_schema41346,input_checker41347,output_checker41348,vec__41342,opts__24173__auto__){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"stuttaford.radiant.datalog/t41358");
});})(owner,query,data,validate__837__auto__,ufv__,output_schema41345,input_schema41346,input_checker41347,output_checker41348,vec__41342,opts__24173__auto__))
;
stuttaford.radiant.datalog.t41358.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datalog.t41358.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema41345,input_schema41346,input_checker41347,output_checker41348,vec__41342,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "query-input";
});})(owner,query,data,validate__837__auto__,ufv__,output_schema41345,input_schema41346,input_checker41347,output_checker41348,vec__41342,opts__24173__auto__))
;
stuttaford.radiant.datalog.t41358.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.datalog.t41358.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema41345,input_schema41346,input_checker41347,output_checker41348,vec__41342,opts__24173__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"query-input"], null),cljs.core.array_seq([om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(6)], null),cljs.core.array_seq([om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),true,new cljs.core.Keyword(null,"rows","rows",850049680),(8),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"[:find ?e ?v :in $ :where [?e :attr ?v]]",new cljs.core.Keyword(null,"value","value",305978217),self__.query,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),((cljs.core.seq(self__.query))?(cljs.core.truth_(stuttaford.radiant.datalog.maybe_parse_query(self__.query))?"success":"error"):null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (___$1,owner,query,data,validate__837__auto__,ufv__,output_schema41345,input_schema41346,input_checker41347,output_checker41348,vec__41342,opts__24173__auto__){
return (function (){return stuttaford.radiant.datalog.handle_query_input_change(self__.data,self__.owner);
});})(___$1,owner,query,data,validate__837__auto__,ufv__,output_schema41345,input_schema41346,input_checker41347,output_checker41348,vec__41342,opts__24173__auto__))
], null))], 0)),om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(6)], null),cljs.core.array_seq([(function (){var attrs41361 = (function (){var temp__4124__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4124__auto__))
{var parsed_query = temp__4124__auto__;var map__41362 = parsed_query;var map__41362__$1 = ((cljs.core.seq_QMARK_(map__41362))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41362):map__41362);var where = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41362__$1,new cljs.core.Keyword(null,"where","where",-2044795965));var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41362__$1,new cljs.core.Keyword(null,"in","in",-1531184865));var find = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41362__$1,new cljs.core.Keyword(null,"find","find",496279456));return ("[:find "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",find)))+"\n :in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",in$)))+"\n :where\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose("\n ",where)))+"]");
} else
{return "Not a valid query.";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.pre,((cljs.core.map_QMARK_(attrs41361))?sablono.interpreter.attributes(attrs41361):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs41361))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs41361)], null))));
})()], 0))], 0));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema41345,input_schema41346,input_checker41347,output_checker41348,vec__41342,opts__24173__auto__))
;
stuttaford.radiant.datalog.t41358.prototype.om$core$IInitState$ = true;
stuttaford.radiant.datalog.t41358.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema41345,input_schema41346,input_checker41347,output_checker41348,vec__41342,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),""], null);
});})(owner,query,data,validate__837__auto__,ufv__,output_schema41345,input_schema41346,input_checker41347,output_checker41348,vec__41342,opts__24173__auto__))
;
stuttaford.radiant.datalog.t41358.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema41345,input_schema41346,input_checker41347,output_checker41348,vec__41342,opts__24173__auto__){
return (function (_41360){var self__ = this;
var _41360__$1 = this;return self__.meta41359;
});})(owner,query,data,validate__837__auto__,ufv__,output_schema41345,input_schema41346,input_checker41347,output_checker41348,vec__41342,opts__24173__auto__))
;
stuttaford.radiant.datalog.t41358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema41345,input_schema41346,input_checker41347,output_checker41348,vec__41342,opts__24173__auto__){
return (function (_41360,meta41359__$1){var self__ = this;
var _41360__$1 = this;return (new stuttaford.radiant.datalog.t41358(self__.query,self__.map41343,self__.fnk41344,self__.input_checker41347,self__.input_schema41346,self__.owner,self__.opts__24173__auto__,self__.query_input,self__.data,self__.output_schema41345,self__.G__41349,self__.p__41319,self__.data__24172__auto__,self__.output_checker41348,self__.owner41317,self__.vec__41342,self__.validate__837__auto__,self__.ufv__,meta41359__$1));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema41345,input_schema41346,input_checker41347,output_checker41348,vec__41342,opts__24173__auto__))
;
stuttaford.radiant.datalog.__GT_t41358 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema41345,input_schema41346,input_checker41347,output_checker41348,vec__41342,opts__24173__auto__){
return (function __GT_t41358(query__$1,map41343__$1,fnk41344__$1,input_checker41347__$1,input_schema41346__$1,owner__$1,opts__24173__auto____$1,query_input__$1,data__$1,output_schema41345__$1,G__41349__$1,p__41319__$1,data__24172__auto____$1,output_checker41348__$1,owner41317__$1,vec__41342__$1,validate__837__auto____$1,ufv____$1,meta41359){return (new stuttaford.radiant.datalog.t41358(query__$1,map41343__$1,fnk41344__$1,input_checker41347__$1,input_schema41346__$1,owner__$1,opts__24173__auto____$1,query_input__$1,data__$1,output_schema41345__$1,G__41349__$1,p__41319__$1,data__24172__auto____$1,output_checker41348__$1,owner41317__$1,vec__41342__$1,validate__837__auto____$1,ufv____$1,meta41359));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema41345,input_schema41346,input_checker41347,output_checker41348,vec__41342,opts__24173__auto__))
;
}
return (new stuttaford.radiant.datalog.t41358(query,map41343,fnk41344,input_checker41347,input_schema41346,owner,opts__24173__auto__,query_input,data,output_schema41345,G__41349,p__41319,data__24172__auto__,output_checker41348,owner41317,vec__41342,validate__837__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___41367 = (function (){var G__41363 = o__840__auto__;return (output_checker41348.cljs$core$IFn$_invoke$arity$1 ? output_checker41348.cljs$core$IFn$_invoke$arity$1(G__41363) : output_checker41348.call(null,G__41363));
})();if(cljs.core.truth_(temp__4126__auto___41367))
{var error__839__auto___41368 = temp__4126__auto___41367;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk41344","fnk41344",927556900,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41368], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema41345,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41368], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema41345,input_schema41346,input_checker41347,output_checker41348,vec__41342,opts__24173__auto__))
,schema.core.make_fn_schema(output_schema41345,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema41346], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24173__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner41317,new cljs.core.Keyword(null,"data","data",-232669377),data__24172__auto__], null));
};
var query_input = function (data__24172__auto__,owner41317,var_args){
var p__41319 = null;if (arguments.length > 2) {
  p__41319 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return query_input__delegate.call(this,data__24172__auto__,owner41317,p__41319);};
query_input.cljs$lang$maxFixedArity = 2;
query_input.cljs$lang$applyTo = (function (arglist__41369){
var data__24172__auto__ = cljs.core.first(arglist__41369);
arglist__41369 = cljs.core.next(arglist__41369);
var owner41317 = cljs.core.first(arglist__41369);
var p__41319 = cljs.core.rest(arglist__41369);
return query_input__delegate(data__24172__auto__,owner41317,p__41319);
});
query_input.cljs$core$IFn$_invoke$arity$variadic = query_input__delegate;
return query_input;
})()
;
stuttaford.radiant.datalog.__GT_query_input = (function() {
var __GT_query_input = null;
var __GT_query_input__1 = (function (cursor__24141__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datalog.query_input,cursor__24141__auto__);
});
var __GT_query_input__2 = (function (cursor__24141__auto__,m41318){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datalog.query_input,cursor__24141__auto__,m41318);
});
__GT_query_input = function(cursor__24141__auto__,m41318){
switch(arguments.length){
case 1:
return __GT_query_input__1.call(this,cursor__24141__auto__);
case 2:
return __GT_query_input__2.call(this,cursor__24141__auto__,m41318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_query_input.cljs$core$IFn$_invoke$arity$1 = __GT_query_input__1;
__GT_query_input.cljs$core$IFn$_invoke$arity$2 = __GT_query_input__2;
return __GT_query_input;
})()
;
/**
* @param {...*} var_args
*/
stuttaford.radiant.datalog.datalog = (function() { 
var datalog__delegate = function (data__24172__auto__,owner41370,p__41372){var vec__41413 = p__41372;var opts__24173__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41413,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema41416 = schema.core.Any;var input_schema41417 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"query","query",-1288509510)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-db","current-db",213667882)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684)),schema.core.Any,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map41414","map41414",644429923,null))], null);var input_checker41418 = schema.core.checker(input_schema41417);var output_checker41419 = schema.core.checker(output_schema41416);return schema.core.schematize_fn(((function (ufv__,output_schema41416,input_schema41417,input_checker41418,output_checker41419,vec__41413,opts__24173__auto__){
return (function fnk41415(G__41420){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___41453 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__41420], null);var temp__4126__auto___41454 = (function (){var G__41437 = args__838__auto___41453;return (input_checker41418.cljs$core$IFn$_invoke$arity$1 ? input_checker41418.cljs$core$IFn$_invoke$arity$1(G__41437) : input_checker41418.call(null,G__41437));
})();if(cljs.core.truth_(temp__4126__auto___41454))
{var error__839__auto___41455 = temp__4126__auto___41454;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk41415","fnk41415",418831081,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41455], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema41417,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___41453,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41455], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map41414 = G__41420;while(true){
if(cljs.core.map_QMARK_(map41414))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map41414], 0))));
}
var data = plumbing.fnk.schema.safe_get(map41414,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var data_sources = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684),null);var current_db = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-db","current-db",213667882),null);var query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"query","query",-1288509510),"");var owner = plumbing.fnk.schema.safe_get(map41414,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datalog.t41438 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datalog.t41438 = (function (query,map41414,datalog,current_data_source,owner,opts__24173__auto__,output_schema41416,data,input_checker41418,fnk41415,p__41372,G__41420,owner41370,data__24172__auto__,data_sources,current_db,output_checker41419,input_schema41417,validate__837__auto__,ufv__,vec__41413,meta41439){
this.query = query;
this.map41414 = map41414;
this.datalog = datalog;
this.current_data_source = current_data_source;
this.owner = owner;
this.opts__24173__auto__ = opts__24173__auto__;
this.output_schema41416 = output_schema41416;
this.data = data;
this.input_checker41418 = input_checker41418;
this.fnk41415 = fnk41415;
this.p__41372 = p__41372;
this.G__41420 = G__41420;
this.owner41370 = owner41370;
this.data__24172__auto__ = data__24172__auto__;
this.data_sources = data_sources;
this.current_db = current_db;
this.output_checker41419 = output_checker41419;
this.input_schema41417 = input_schema41417;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.vec__41413 = vec__41413;
this.meta41439 = meta41439;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datalog.t41438.cljs$lang$type = true;
stuttaford.radiant.datalog.t41438.cljs$lang$ctorStr = "stuttaford.radiant.datalog/t41438";
stuttaford.radiant.datalog.t41438.cljs$lang$ctorPrWriter = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41416,input_schema41417,input_checker41418,output_checker41419,vec__41413,opts__24173__auto__){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"stuttaford.radiant.datalog/t41438");
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41416,input_schema41417,input_checker41418,output_checker41419,vec__41413,opts__24173__auto__))
;
stuttaford.radiant.datalog.t41438.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datalog.t41438.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41416,input_schema41417,input_checker41418,output_checker41419,vec__41413,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "datalog";
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41416,input_schema41417,input_checker41418,output_checker41419,vec__41413,opts__24173__auto__))
;
stuttaford.radiant.datalog.t41438.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.datalog.t41438.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41416,input_schema41417,input_checker41418,output_checker41419,vec__41413,opts__24173__auto__){
return (function (_,p__41441){var self__ = this;
var map__41442 = p__41441;var map__41442__$1 = ((cljs.core.seq_QMARK_(map__41442))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41442):map__41442);var sort = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41442__$1,new cljs.core.Keyword(null,"sort","sort",953465918),(0));var ___$1 = this;var attrs41443 = stuttaford.radiant.datalog.__GT_query_input.cljs$core$IFn$_invoke$arity$1(self__.data);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs41443))?sablono.interpreter.attributes(attrs41443):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs41443))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var temp__4126__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4126__auto__))
{var query__$2 = temp__4126__auto__;return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(query__$2)),new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var G__41444 = query__$2;var G__41445 = self__.current_db;return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__41444,G__41445) : datascript.q.call(null,G__41444,G__41445));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),true], null)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null)),((cljs.core.not(stuttaford.radiant.datalog.debug_QMARK_))?cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__41446 = query__$2;var G__41447 = self__.current_db;return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__41446,G__41447) : datascript.q.call(null,G__41446,G__41447));
})()], 0))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.current_db], 0))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([query__$2], 0))], null)):null));
} else
{return null;
}
})())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs41443),sablono.interpreter.interpret((function (){var temp__4126__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4126__auto__))
{var query__$2 = temp__4126__auto__;return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(query__$2)),new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var G__41448 = query__$2;var G__41449 = self__.current_db;return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__41448,G__41449) : datascript.q.call(null,G__41448,G__41449));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),true], null)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null)),((cljs.core.not(stuttaford.radiant.datalog.debug_QMARK_))?cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__41450 = query__$2;var G__41451 = self__.current_db;return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__41450,G__41451) : datascript.q.call(null,G__41450,G__41451));
})()], 0))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.current_db], 0))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([query__$2], 0))], null)):null));
} else
{return null;
}
})())], null))));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41416,input_schema41417,input_checker41418,output_checker41419,vec__41413,opts__24173__auto__))
;
stuttaford.radiant.datalog.t41438.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41416,input_schema41417,input_checker41418,output_checker41419,vec__41413,opts__24173__auto__){
return (function (_41440){var self__ = this;
var _41440__$1 = this;return self__.meta41439;
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41416,input_schema41417,input_checker41418,output_checker41419,vec__41413,opts__24173__auto__))
;
stuttaford.radiant.datalog.t41438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41416,input_schema41417,input_checker41418,output_checker41419,vec__41413,opts__24173__auto__){
return (function (_41440,meta41439__$1){var self__ = this;
var _41440__$1 = this;return (new stuttaford.radiant.datalog.t41438(self__.query,self__.map41414,self__.datalog,self__.current_data_source,self__.owner,self__.opts__24173__auto__,self__.output_schema41416,self__.data,self__.input_checker41418,self__.fnk41415,self__.p__41372,self__.G__41420,self__.owner41370,self__.data__24172__auto__,self__.data_sources,self__.current_db,self__.output_checker41419,self__.input_schema41417,self__.validate__837__auto__,self__.ufv__,self__.vec__41413,meta41439__$1));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41416,input_schema41417,input_checker41418,output_checker41419,vec__41413,opts__24173__auto__))
;
stuttaford.radiant.datalog.__GT_t41438 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41416,input_schema41417,input_checker41418,output_checker41419,vec__41413,opts__24173__auto__){
return (function __GT_t41438(query__$1,map41414__$1,datalog__$1,current_data_source__$1,owner__$1,opts__24173__auto____$1,output_schema41416__$1,data__$1,input_checker41418__$1,fnk41415__$1,p__41372__$1,G__41420__$1,owner41370__$1,data__24172__auto____$1,data_sources__$1,current_db__$1,output_checker41419__$1,input_schema41417__$1,validate__837__auto____$1,ufv____$1,vec__41413__$1,meta41439){return (new stuttaford.radiant.datalog.t41438(query__$1,map41414__$1,datalog__$1,current_data_source__$1,owner__$1,opts__24173__auto____$1,output_schema41416__$1,data__$1,input_checker41418__$1,fnk41415__$1,p__41372__$1,G__41420__$1,owner41370__$1,data__24172__auto____$1,data_sources__$1,current_db__$1,output_checker41419__$1,input_schema41417__$1,validate__837__auto____$1,ufv____$1,vec__41413__$1,meta41439));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41416,input_schema41417,input_checker41418,output_checker41419,vec__41413,opts__24173__auto__))
;
}
return (new stuttaford.radiant.datalog.t41438(query,map41414,datalog,current_data_source,owner,opts__24173__auto__,output_schema41416,data,input_checker41418,fnk41415,p__41372,G__41420,owner41370,data__24172__auto__,data_sources,current_db,output_checker41419,input_schema41417,validate__837__auto__,ufv__,vec__41413,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___41456 = (function (){var G__41452 = o__840__auto__;return (output_checker41419.cljs$core$IFn$_invoke$arity$1 ? output_checker41419.cljs$core$IFn$_invoke$arity$1(G__41452) : output_checker41419.call(null,G__41452));
})();if(cljs.core.truth_(temp__4126__auto___41456))
{var error__839__auto___41457 = temp__4126__auto___41456;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk41415","fnk41415",418831081,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41457], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema41416,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41457], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema41416,input_schema41417,input_checker41418,output_checker41419,vec__41413,opts__24173__auto__))
,schema.core.make_fn_schema(output_schema41416,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema41417], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24173__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner41370,new cljs.core.Keyword(null,"data","data",-232669377),data__24172__auto__], null));
};
var datalog = function (data__24172__auto__,owner41370,var_args){
var p__41372 = null;if (arguments.length > 2) {
  p__41372 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datalog__delegate.call(this,data__24172__auto__,owner41370,p__41372);};
datalog.cljs$lang$maxFixedArity = 2;
datalog.cljs$lang$applyTo = (function (arglist__41458){
var data__24172__auto__ = cljs.core.first(arglist__41458);
arglist__41458 = cljs.core.next(arglist__41458);
var owner41370 = cljs.core.first(arglist__41458);
var p__41372 = cljs.core.rest(arglist__41458);
return datalog__delegate(data__24172__auto__,owner41370,p__41372);
});
datalog.cljs$core$IFn$_invoke$arity$variadic = datalog__delegate;
return datalog;
})()
;
stuttaford.radiant.datalog.__GT_datalog = (function() {
var __GT_datalog = null;
var __GT_datalog__1 = (function (cursor__24141__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datalog.datalog,cursor__24141__auto__);
});
var __GT_datalog__2 = (function (cursor__24141__auto__,m41371){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datalog.datalog,cursor__24141__auto__,m41371);
});
__GT_datalog = function(cursor__24141__auto__,m41371){
switch(arguments.length){
case 1:
return __GT_datalog__1.call(this,cursor__24141__auto__);
case 2:
return __GT_datalog__2.call(this,cursor__24141__auto__,m41371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_datalog.cljs$core$IFn$_invoke$arity$1 = __GT_datalog__1;
__GT_datalog.cljs$core$IFn$_invoke$arity$2 = __GT_datalog__2;
return __GT_datalog;
})()
;
//# sourceMappingURL=datalog.js.map