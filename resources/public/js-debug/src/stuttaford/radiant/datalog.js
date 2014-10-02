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
stuttaford.radiant.datalog.maybe_parse_query = (function maybe_parse_query(s){try{var G__40331 = s;var G__40331__$1 = (((G__40331 == null))?null:cljs.reader.read_string(G__40331));var G__40331__$2 = (((G__40331__$1 == null))?null:datascript.query.parse_query(G__40331__$1));return G__40331__$2;
}catch (e40330){var e = e40330;return null;
}});
stuttaford.radiant.datalog.handle_query_input_change = (function handle_query_input_change(data,owner){var input = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"input");var text = input.value;return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"query","query",-1288509510),text);
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.datalog.query_input = (function() { 
var query_input__delegate = function (data__24172__auto__,owner40332,p__40334){var vec__40357 = p__40334;var opts__24173__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40357,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema40360 = schema.core.Any;var input_schema40361 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map40358","map40358",-1958652365,null))], null);var input_checker40362 = schema.core.checker(input_schema40361);var output_checker40363 = schema.core.checker(output_schema40360);return schema.core.schematize_fn(((function (ufv__,output_schema40360,input_schema40361,input_checker40362,output_checker40363,vec__40357,opts__24173__auto__){
return (function fnk40359(G__40364){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40379 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40364], null);var temp__4126__auto___40380 = (function (){var G__40372 = args__838__auto___40379;return (input_checker40362.cljs$core$IFn$_invoke$arity$1 ? input_checker40362.cljs$core$IFn$_invoke$arity$1(G__40372) : input_checker40362.call(null,G__40372));
})();if(cljs.core.truth_(temp__4126__auto___40380))
{var error__839__auto___40381 = temp__4126__auto___40380;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk40359","fnk40359",-1785224540,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40381], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40361,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40379,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40381], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map40358 = G__40364;while(true){
if(cljs.core.map_QMARK_(map40358))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map40358], 0))));
}
var data = plumbing.fnk.schema.safe_get(map40358,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var query = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map40358,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datalog.t40373 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datalog.t40373 = (function (query,owner,fnk40359,opts__24173__auto__,query_input,data,input_schema40361,G__40364,output_checker40363,data__24172__auto__,map40358,vec__40357,owner40332,validate__837__auto__,output_schema40360,p__40334,input_checker40362,ufv__,meta40374){
this.query = query;
this.owner = owner;
this.fnk40359 = fnk40359;
this.opts__24173__auto__ = opts__24173__auto__;
this.query_input = query_input;
this.data = data;
this.input_schema40361 = input_schema40361;
this.G__40364 = G__40364;
this.output_checker40363 = output_checker40363;
this.data__24172__auto__ = data__24172__auto__;
this.map40358 = map40358;
this.vec__40357 = vec__40357;
this.owner40332 = owner40332;
this.validate__837__auto__ = validate__837__auto__;
this.output_schema40360 = output_schema40360;
this.p__40334 = p__40334;
this.input_checker40362 = input_checker40362;
this.ufv__ = ufv__;
this.meta40374 = meta40374;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datalog.t40373.cljs$lang$type = true;
stuttaford.radiant.datalog.t40373.cljs$lang$ctorStr = "stuttaford.radiant.datalog/t40373";
stuttaford.radiant.datalog.t40373.cljs$lang$ctorPrWriter = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema40360,input_schema40361,input_checker40362,output_checker40363,vec__40357,opts__24173__auto__){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"stuttaford.radiant.datalog/t40373");
});})(owner,query,data,validate__837__auto__,ufv__,output_schema40360,input_schema40361,input_checker40362,output_checker40363,vec__40357,opts__24173__auto__))
;
stuttaford.radiant.datalog.t40373.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datalog.t40373.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema40360,input_schema40361,input_checker40362,output_checker40363,vec__40357,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "query-input";
});})(owner,query,data,validate__837__auto__,ufv__,output_schema40360,input_schema40361,input_checker40362,output_checker40363,vec__40357,opts__24173__auto__))
;
stuttaford.radiant.datalog.t40373.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.datalog.t40373.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema40360,input_schema40361,input_checker40362,output_checker40363,vec__40357,opts__24173__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"query-input"], null),cljs.core.array_seq([om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(6)], null),cljs.core.array_seq([om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),true,new cljs.core.Keyword(null,"rows","rows",850049680),(8),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"[:find ?e ?v :in $ :where [?e :attr ?v]]",new cljs.core.Keyword(null,"value","value",305978217),self__.query,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),((cljs.core.seq(self__.query))?(cljs.core.truth_(stuttaford.radiant.datalog.maybe_parse_query(self__.query))?"success":"error"):null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (___$1,owner,query,data,validate__837__auto__,ufv__,output_schema40360,input_schema40361,input_checker40362,output_checker40363,vec__40357,opts__24173__auto__){
return (function (){return stuttaford.radiant.datalog.handle_query_input_change(self__.data,self__.owner);
});})(___$1,owner,query,data,validate__837__auto__,ufv__,output_schema40360,input_schema40361,input_checker40362,output_checker40363,vec__40357,opts__24173__auto__))
], null))], 0)),om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(6)], null),cljs.core.array_seq([(function (){var attrs40376 = (function (){var temp__4124__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4124__auto__))
{var parsed_query = temp__4124__auto__;var map__40377 = parsed_query;var map__40377__$1 = ((cljs.core.seq_QMARK_(map__40377))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40377):map__40377);var where = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40377__$1,new cljs.core.Keyword(null,"where","where",-2044795965));var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40377__$1,new cljs.core.Keyword(null,"in","in",-1531184865));var find = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40377__$1,new cljs.core.Keyword(null,"find","find",496279456));return ("[:find "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",find)))+"\n :in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",in$)))+"\n :where\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose("\n ",where)))+"]");
} else
{return "Not a valid query.";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.pre,((cljs.core.map_QMARK_(attrs40376))?sablono.interpreter.attributes(attrs40376):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs40376))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs40376)], null))));
})()], 0))], 0));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema40360,input_schema40361,input_checker40362,output_checker40363,vec__40357,opts__24173__auto__))
;
stuttaford.radiant.datalog.t40373.prototype.om$core$IInitState$ = true;
stuttaford.radiant.datalog.t40373.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema40360,input_schema40361,input_checker40362,output_checker40363,vec__40357,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),""], null);
});})(owner,query,data,validate__837__auto__,ufv__,output_schema40360,input_schema40361,input_checker40362,output_checker40363,vec__40357,opts__24173__auto__))
;
stuttaford.radiant.datalog.t40373.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema40360,input_schema40361,input_checker40362,output_checker40363,vec__40357,opts__24173__auto__){
return (function (_40375){var self__ = this;
var _40375__$1 = this;return self__.meta40374;
});})(owner,query,data,validate__837__auto__,ufv__,output_schema40360,input_schema40361,input_checker40362,output_checker40363,vec__40357,opts__24173__auto__))
;
stuttaford.radiant.datalog.t40373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema40360,input_schema40361,input_checker40362,output_checker40363,vec__40357,opts__24173__auto__){
return (function (_40375,meta40374__$1){var self__ = this;
var _40375__$1 = this;return (new stuttaford.radiant.datalog.t40373(self__.query,self__.owner,self__.fnk40359,self__.opts__24173__auto__,self__.query_input,self__.data,self__.input_schema40361,self__.G__40364,self__.output_checker40363,self__.data__24172__auto__,self__.map40358,self__.vec__40357,self__.owner40332,self__.validate__837__auto__,self__.output_schema40360,self__.p__40334,self__.input_checker40362,self__.ufv__,meta40374__$1));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema40360,input_schema40361,input_checker40362,output_checker40363,vec__40357,opts__24173__auto__))
;
stuttaford.radiant.datalog.__GT_t40373 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema40360,input_schema40361,input_checker40362,output_checker40363,vec__40357,opts__24173__auto__){
return (function __GT_t40373(query__$1,owner__$1,fnk40359__$1,opts__24173__auto____$1,query_input__$1,data__$1,input_schema40361__$1,G__40364__$1,output_checker40363__$1,data__24172__auto____$1,map40358__$1,vec__40357__$1,owner40332__$1,validate__837__auto____$1,output_schema40360__$1,p__40334__$1,input_checker40362__$1,ufv____$1,meta40374){return (new stuttaford.radiant.datalog.t40373(query__$1,owner__$1,fnk40359__$1,opts__24173__auto____$1,query_input__$1,data__$1,input_schema40361__$1,G__40364__$1,output_checker40363__$1,data__24172__auto____$1,map40358__$1,vec__40357__$1,owner40332__$1,validate__837__auto____$1,output_schema40360__$1,p__40334__$1,input_checker40362__$1,ufv____$1,meta40374));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema40360,input_schema40361,input_checker40362,output_checker40363,vec__40357,opts__24173__auto__))
;
}
return (new stuttaford.radiant.datalog.t40373(query,owner,fnk40359,opts__24173__auto__,query_input,data,input_schema40361,G__40364,output_checker40363,data__24172__auto__,map40358,vec__40357,owner40332,validate__837__auto__,output_schema40360,p__40334,input_checker40362,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40382 = (function (){var G__40378 = o__840__auto__;return (output_checker40363.cljs$core$IFn$_invoke$arity$1 ? output_checker40363.cljs$core$IFn$_invoke$arity$1(G__40378) : output_checker40363.call(null,G__40378));
})();if(cljs.core.truth_(temp__4126__auto___40382))
{var error__839__auto___40383 = temp__4126__auto___40382;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk40359","fnk40359",-1785224540,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40383], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40360,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40383], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema40360,input_schema40361,input_checker40362,output_checker40363,vec__40357,opts__24173__auto__))
,schema.core.make_fn_schema(output_schema40360,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40361], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24173__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner40332,new cljs.core.Keyword(null,"data","data",-232669377),data__24172__auto__], null));
};
var query_input = function (data__24172__auto__,owner40332,var_args){
var p__40334 = null;if (arguments.length > 2) {
  p__40334 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return query_input__delegate.call(this,data__24172__auto__,owner40332,p__40334);};
query_input.cljs$lang$maxFixedArity = 2;
query_input.cljs$lang$applyTo = (function (arglist__40384){
var data__24172__auto__ = cljs.core.first(arglist__40384);
arglist__40384 = cljs.core.next(arglist__40384);
var owner40332 = cljs.core.first(arglist__40384);
var p__40334 = cljs.core.rest(arglist__40384);
return query_input__delegate(data__24172__auto__,owner40332,p__40334);
});
query_input.cljs$core$IFn$_invoke$arity$variadic = query_input__delegate;
return query_input;
})()
;
stuttaford.radiant.datalog.__GT_query_input = (function() {
var __GT_query_input = null;
var __GT_query_input__1 = (function (cursor__24141__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datalog.query_input,cursor__24141__auto__);
});
var __GT_query_input__2 = (function (cursor__24141__auto__,m40333){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datalog.query_input,cursor__24141__auto__,m40333);
});
__GT_query_input = function(cursor__24141__auto__,m40333){
switch(arguments.length){
case 1:
return __GT_query_input__1.call(this,cursor__24141__auto__);
case 2:
return __GT_query_input__2.call(this,cursor__24141__auto__,m40333);
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
var datalog__delegate = function (data__24172__auto__,owner40385,p__40387){var vec__40428 = p__40387;var opts__24173__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40428,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema40431 = schema.core.Any;var input_schema40432 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"query","query",-1288509510)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-db","current-db",213667882)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684)),schema.core.Any,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map40429","map40429",-1637313142,null))], null);var input_checker40433 = schema.core.checker(input_schema40432);var output_checker40434 = schema.core.checker(output_schema40431);return schema.core.schematize_fn(((function (ufv__,output_schema40431,input_schema40432,input_checker40433,output_checker40434,vec__40428,opts__24173__auto__){
return (function fnk40430(G__40435){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40468 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40435], null);var temp__4126__auto___40469 = (function (){var G__40452 = args__838__auto___40468;return (input_checker40433.cljs$core$IFn$_invoke$arity$1 ? input_checker40433.cljs$core$IFn$_invoke$arity$1(G__40452) : input_checker40433.call(null,G__40452));
})();if(cljs.core.truth_(temp__4126__auto___40469))
{var error__839__auto___40470 = temp__4126__auto___40469;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk40430","fnk40430",-634506520,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40470], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40432,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40468,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40470], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map40429 = G__40435;while(true){
if(cljs.core.map_QMARK_(map40429))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map40429], 0))));
}
var data = plumbing.fnk.schema.safe_get(map40429,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var data_sources = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684),null);var current_db = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-db","current-db",213667882),null);var query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"query","query",-1288509510),"");var owner = plumbing.fnk.schema.safe_get(map40429,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datalog.t40453 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datalog.t40453 = (function (query,G__40435,datalog,current_data_source,owner40385,owner,opts__24173__auto__,data,fnk40430,map40429,data__24172__auto__,data_sources,current_db,output_checker40434,input_checker40433,validate__837__auto__,input_schema40432,vec__40428,ufv__,p__40387,output_schema40431,meta40454){
this.query = query;
this.G__40435 = G__40435;
this.datalog = datalog;
this.current_data_source = current_data_source;
this.owner40385 = owner40385;
this.owner = owner;
this.opts__24173__auto__ = opts__24173__auto__;
this.data = data;
this.fnk40430 = fnk40430;
this.map40429 = map40429;
this.data__24172__auto__ = data__24172__auto__;
this.data_sources = data_sources;
this.current_db = current_db;
this.output_checker40434 = output_checker40434;
this.input_checker40433 = input_checker40433;
this.validate__837__auto__ = validate__837__auto__;
this.input_schema40432 = input_schema40432;
this.vec__40428 = vec__40428;
this.ufv__ = ufv__;
this.p__40387 = p__40387;
this.output_schema40431 = output_schema40431;
this.meta40454 = meta40454;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datalog.t40453.cljs$lang$type = true;
stuttaford.radiant.datalog.t40453.cljs$lang$ctorStr = "stuttaford.radiant.datalog/t40453";
stuttaford.radiant.datalog.t40453.cljs$lang$ctorPrWriter = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema40431,input_schema40432,input_checker40433,output_checker40434,vec__40428,opts__24173__auto__){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"stuttaford.radiant.datalog/t40453");
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema40431,input_schema40432,input_checker40433,output_checker40434,vec__40428,opts__24173__auto__))
;
stuttaford.radiant.datalog.t40453.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datalog.t40453.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema40431,input_schema40432,input_checker40433,output_checker40434,vec__40428,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "datalog";
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema40431,input_schema40432,input_checker40433,output_checker40434,vec__40428,opts__24173__auto__))
;
stuttaford.radiant.datalog.t40453.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.datalog.t40453.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema40431,input_schema40432,input_checker40433,output_checker40434,vec__40428,opts__24173__auto__){
return (function (_,p__40456){var self__ = this;
var map__40457 = p__40456;var map__40457__$1 = ((cljs.core.seq_QMARK_(map__40457))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40457):map__40457);var sort = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40457__$1,new cljs.core.Keyword(null,"sort","sort",953465918),(0));var ___$1 = this;var attrs40458 = stuttaford.radiant.datalog.__GT_query_input.cljs$core$IFn$_invoke$arity$1(self__.data);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs40458))?sablono.interpreter.attributes(attrs40458):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs40458))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var temp__4126__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4126__auto__))
{var query__$2 = temp__4126__auto__;return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(query__$2)),new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var G__40459 = query__$2;var G__40460 = self__.current_db;return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__40459,G__40460) : datascript.q.call(null,G__40459,G__40460));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),true], null)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null)),((cljs.core.not(stuttaford.radiant.datalog.debug_QMARK_))?cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__40461 = query__$2;var G__40462 = self__.current_db;return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__40461,G__40462) : datascript.q.call(null,G__40461,G__40462));
})()], 0))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.current_db], 0))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([query__$2], 0))], null)):null));
} else
{return null;
}
})())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs40458),sablono.interpreter.interpret((function (){var temp__4126__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4126__auto__))
{var query__$2 = temp__4126__auto__;return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(query__$2)),new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var G__40463 = query__$2;var G__40464 = self__.current_db;return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__40463,G__40464) : datascript.q.call(null,G__40463,G__40464));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),true], null)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null)),((cljs.core.not(stuttaford.radiant.datalog.debug_QMARK_))?cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__40465 = query__$2;var G__40466 = self__.current_db;return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__40465,G__40466) : datascript.q.call(null,G__40465,G__40466));
})()], 0))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.current_db], 0))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([query__$2], 0))], null)):null));
} else
{return null;
}
})())], null))));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema40431,input_schema40432,input_checker40433,output_checker40434,vec__40428,opts__24173__auto__))
;
stuttaford.radiant.datalog.t40453.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema40431,input_schema40432,input_checker40433,output_checker40434,vec__40428,opts__24173__auto__){
return (function (_40455){var self__ = this;
var _40455__$1 = this;return self__.meta40454;
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema40431,input_schema40432,input_checker40433,output_checker40434,vec__40428,opts__24173__auto__))
;
stuttaford.radiant.datalog.t40453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema40431,input_schema40432,input_checker40433,output_checker40434,vec__40428,opts__24173__auto__){
return (function (_40455,meta40454__$1){var self__ = this;
var _40455__$1 = this;return (new stuttaford.radiant.datalog.t40453(self__.query,self__.G__40435,self__.datalog,self__.current_data_source,self__.owner40385,self__.owner,self__.opts__24173__auto__,self__.data,self__.fnk40430,self__.map40429,self__.data__24172__auto__,self__.data_sources,self__.current_db,self__.output_checker40434,self__.input_checker40433,self__.validate__837__auto__,self__.input_schema40432,self__.vec__40428,self__.ufv__,self__.p__40387,self__.output_schema40431,meta40454__$1));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema40431,input_schema40432,input_checker40433,output_checker40434,vec__40428,opts__24173__auto__))
;
stuttaford.radiant.datalog.__GT_t40453 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema40431,input_schema40432,input_checker40433,output_checker40434,vec__40428,opts__24173__auto__){
return (function __GT_t40453(query__$1,G__40435__$1,datalog__$1,current_data_source__$1,owner40385__$1,owner__$1,opts__24173__auto____$1,data__$1,fnk40430__$1,map40429__$1,data__24172__auto____$1,data_sources__$1,current_db__$1,output_checker40434__$1,input_checker40433__$1,validate__837__auto____$1,input_schema40432__$1,vec__40428__$1,ufv____$1,p__40387__$1,output_schema40431__$1,meta40454){return (new stuttaford.radiant.datalog.t40453(query__$1,G__40435__$1,datalog__$1,current_data_source__$1,owner40385__$1,owner__$1,opts__24173__auto____$1,data__$1,fnk40430__$1,map40429__$1,data__24172__auto____$1,data_sources__$1,current_db__$1,output_checker40434__$1,input_checker40433__$1,validate__837__auto____$1,input_schema40432__$1,vec__40428__$1,ufv____$1,p__40387__$1,output_schema40431__$1,meta40454));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema40431,input_schema40432,input_checker40433,output_checker40434,vec__40428,opts__24173__auto__))
;
}
return (new stuttaford.radiant.datalog.t40453(query,G__40435,datalog,current_data_source,owner40385,owner,opts__24173__auto__,data,fnk40430,map40429,data__24172__auto__,data_sources,current_db,output_checker40434,input_checker40433,validate__837__auto__,input_schema40432,vec__40428,ufv__,p__40387,output_schema40431,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40471 = (function (){var G__40467 = o__840__auto__;return (output_checker40434.cljs$core$IFn$_invoke$arity$1 ? output_checker40434.cljs$core$IFn$_invoke$arity$1(G__40467) : output_checker40434.call(null,G__40467));
})();if(cljs.core.truth_(temp__4126__auto___40471))
{var error__839__auto___40472 = temp__4126__auto___40471;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk40430","fnk40430",-634506520,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40472], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40431,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40472], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema40431,input_schema40432,input_checker40433,output_checker40434,vec__40428,opts__24173__auto__))
,schema.core.make_fn_schema(output_schema40431,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40432], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24173__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner40385,new cljs.core.Keyword(null,"data","data",-232669377),data__24172__auto__], null));
};
var datalog = function (data__24172__auto__,owner40385,var_args){
var p__40387 = null;if (arguments.length > 2) {
  p__40387 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datalog__delegate.call(this,data__24172__auto__,owner40385,p__40387);};
datalog.cljs$lang$maxFixedArity = 2;
datalog.cljs$lang$applyTo = (function (arglist__40473){
var data__24172__auto__ = cljs.core.first(arglist__40473);
arglist__40473 = cljs.core.next(arglist__40473);
var owner40385 = cljs.core.first(arglist__40473);
var p__40387 = cljs.core.rest(arglist__40473);
return datalog__delegate(data__24172__auto__,owner40385,p__40387);
});
datalog.cljs$core$IFn$_invoke$arity$variadic = datalog__delegate;
return datalog;
})()
;
stuttaford.radiant.datalog.__GT_datalog = (function() {
var __GT_datalog = null;
var __GT_datalog__1 = (function (cursor__24141__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datalog.datalog,cursor__24141__auto__);
});
var __GT_datalog__2 = (function (cursor__24141__auto__,m40386){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datalog.datalog,cursor__24141__auto__,m40386);
});
__GT_datalog = function(cursor__24141__auto__,m40386){
switch(arguments.length){
case 1:
return __GT_datalog__1.call(this,cursor__24141__auto__);
case 2:
return __GT_datalog__2.call(this,cursor__24141__auto__,m40386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_datalog.cljs$core$IFn$_invoke$arity$1 = __GT_datalog__1;
__GT_datalog.cljs$core$IFn$_invoke$arity$2 = __GT_datalog__2;
return __GT_datalog;
})()
;
//# sourceMappingURL=datalog.js.map