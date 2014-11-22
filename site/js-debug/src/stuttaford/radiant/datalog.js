goog.provide('stuttaford.radiant.datalog');
goog.require('cljs.core');
goog.require('stuttaford.om.common');
goog.require('stuttaford.radiant.components');
goog.require('om_bootstrap.input');
goog.require('sablono.core');
goog.require('datascript.query');
goog.require('om_bootstrap.grid');
goog.require('om_tools.core');
goog.require('stuttaford.om.common');
goog.require('datascript');
goog.require('sablono.core');
goog.require('datascript.query');
goog.require('om.core');
goog.require('om.core');
goog.require('stuttaford.om.common');
goog.require('om_bootstrap.grid');
goog.require('stuttaford.radiant.components');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('om_bootstrap.input');
goog.require('datascript');
stuttaford.radiant.datalog.maybe_parse_query = (function maybe_parse_query(s){try{var G__49472 = s;var G__49472__$1 = (((G__49472 == null))?null:cljs.reader.read_string(G__49472));var G__49472__$2 = (((G__49472__$1 == null))?null:datascript.query.parse_query(G__49472__$1));return G__49472__$2;
}catch (e49471){var e = e49471;return null;
}});
stuttaford.radiant.datalog.handle_query_input_change = (function handle_query_input_change(data,owner){var input = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"input");var text = input.value;return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"query","query",-1288509510),text);
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.datalog.query_input = (function() { 
var query_input__delegate = function (data__24457__auto__,owner49473,p__49475){var vec__49498 = p__49475;var opts__24458__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49498,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema49501 = schema.core.Any;var input_schema49502 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map49499","map49499",-1408219943,null))], null);var input_checker49503 = schema.core.checker(input_schema49502);var output_checker49504 = schema.core.checker(output_schema49501);return schema.core.schematize_fn(((function (ufv__,output_schema49501,input_schema49502,input_checker49503,output_checker49504,vec__49498,opts__24458__auto__){
return (function fnk49500(G__49505){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49520 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49505], null);var temp__4126__auto___49521 = (function (){var G__49513 = args__838__auto___49520;return (input_checker49503.cljs$core$IFn$_invoke$arity$1 ? input_checker49503.cljs$core$IFn$_invoke$arity$1(G__49513) : input_checker49503.call(null,G__49513));
})();if(cljs.core.truth_(temp__4126__auto___49521))
{var error__839__auto___49522 = temp__4126__auto___49521;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk49500","fnk49500",1374308907,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49522], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49502,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49520,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49522], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map49499 = G__49505;while(true){
if(cljs.core.map_QMARK_(map49499))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map49499], 0))));
}
var data = plumbing.fnk.schema.safe_get(map49499,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var query = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map49499,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datalog.t49514 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datalog.t49514 = (function (output_schema49501,query,input_schema49502,input_checker49503,owner,query_input,data,G__49505,fnk49500,owner49473,p__49475,opts__24458__auto__,map49499,validate__837__auto__,vec__49498,ufv__,data__24457__auto__,output_checker49504,meta49515){
this.output_schema49501 = output_schema49501;
this.query = query;
this.input_schema49502 = input_schema49502;
this.input_checker49503 = input_checker49503;
this.owner = owner;
this.query_input = query_input;
this.data = data;
this.G__49505 = G__49505;
this.fnk49500 = fnk49500;
this.owner49473 = owner49473;
this.p__49475 = p__49475;
this.opts__24458__auto__ = opts__24458__auto__;
this.map49499 = map49499;
this.validate__837__auto__ = validate__837__auto__;
this.vec__49498 = vec__49498;
this.ufv__ = ufv__;
this.data__24457__auto__ = data__24457__auto__;
this.output_checker49504 = output_checker49504;
this.meta49515 = meta49515;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datalog.t49514.cljs$lang$type = true;
stuttaford.radiant.datalog.t49514.cljs$lang$ctorStr = "stuttaford.radiant.datalog/t49514";
stuttaford.radiant.datalog.t49514.cljs$lang$ctorPrWriter = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema49501,input_schema49502,input_checker49503,output_checker49504,vec__49498,opts__24458__auto__){
return (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"stuttaford.radiant.datalog/t49514");
});})(owner,query,data,validate__837__auto__,ufv__,output_schema49501,input_schema49502,input_checker49503,output_checker49504,vec__49498,opts__24458__auto__))
;
stuttaford.radiant.datalog.t49514.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datalog.t49514.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema49501,input_schema49502,input_checker49503,output_checker49504,vec__49498,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "query-input";
});})(owner,query,data,validate__837__auto__,ufv__,output_schema49501,input_schema49502,input_checker49503,output_checker49504,vec__49498,opts__24458__auto__))
;
stuttaford.radiant.datalog.t49514.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.datalog.t49514.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema49501,input_schema49502,input_checker49503,output_checker49504,vec__49498,opts__24458__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"query-input"], null),cljs.core.array_seq([om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(6)], null),cljs.core.array_seq([om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),true,new cljs.core.Keyword(null,"rows","rows",850049680),(8),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"[:find ?e ?v :in $ :where [?e :attr ?v]]",new cljs.core.Keyword(null,"value","value",305978217),self__.query,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),((cljs.core.seq(self__.query))?(cljs.core.truth_(stuttaford.radiant.datalog.maybe_parse_query(self__.query))?"success":"error"):null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (___$1,owner,query,data,validate__837__auto__,ufv__,output_schema49501,input_schema49502,input_checker49503,output_checker49504,vec__49498,opts__24458__auto__){
return (function (){return stuttaford.radiant.datalog.handle_query_input_change(self__.data,self__.owner);
});})(___$1,owner,query,data,validate__837__auto__,ufv__,output_schema49501,input_schema49502,input_checker49503,output_checker49504,vec__49498,opts__24458__auto__))
], null))], 0)),om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(6)], null),cljs.core.array_seq([(function (){var attrs49517 = (function (){var temp__4124__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4124__auto__))
{var parsed_query = temp__4124__auto__;var map__49518 = parsed_query;var map__49518__$1 = ((cljs.core.seq_QMARK_(map__49518))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49518):map__49518);var where = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49518__$1,new cljs.core.Keyword(null,"where","where",-2044795965));var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49518__$1,new cljs.core.Keyword(null,"in","in",-1531184865));var find = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49518__$1,new cljs.core.Keyword(null,"find","find",496279456));return ("[:find "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",find)))+"\n :in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",in$)))+"\n :where\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose("\n ",where)))+"]");
} else
{return "Not a valid query.";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.pre,((cljs.core.map_QMARK_(attrs49517))?sablono.interpreter.attributes(attrs49517):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs49517))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs49517)], null))));
})()], 0))], 0));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema49501,input_schema49502,input_checker49503,output_checker49504,vec__49498,opts__24458__auto__))
;
stuttaford.radiant.datalog.t49514.prototype.om$core$IInitState$ = true;
stuttaford.radiant.datalog.t49514.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema49501,input_schema49502,input_checker49503,output_checker49504,vec__49498,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),""], null);
});})(owner,query,data,validate__837__auto__,ufv__,output_schema49501,input_schema49502,input_checker49503,output_checker49504,vec__49498,opts__24458__auto__))
;
stuttaford.radiant.datalog.t49514.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema49501,input_schema49502,input_checker49503,output_checker49504,vec__49498,opts__24458__auto__){
return (function (_49516){var self__ = this;
var _49516__$1 = this;return self__.meta49515;
});})(owner,query,data,validate__837__auto__,ufv__,output_schema49501,input_schema49502,input_checker49503,output_checker49504,vec__49498,opts__24458__auto__))
;
stuttaford.radiant.datalog.t49514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema49501,input_schema49502,input_checker49503,output_checker49504,vec__49498,opts__24458__auto__){
return (function (_49516,meta49515__$1){var self__ = this;
var _49516__$1 = this;return (new stuttaford.radiant.datalog.t49514(self__.output_schema49501,self__.query,self__.input_schema49502,self__.input_checker49503,self__.owner,self__.query_input,self__.data,self__.G__49505,self__.fnk49500,self__.owner49473,self__.p__49475,self__.opts__24458__auto__,self__.map49499,self__.validate__837__auto__,self__.vec__49498,self__.ufv__,self__.data__24457__auto__,self__.output_checker49504,meta49515__$1));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema49501,input_schema49502,input_checker49503,output_checker49504,vec__49498,opts__24458__auto__))
;
stuttaford.radiant.datalog.__GT_t49514 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema49501,input_schema49502,input_checker49503,output_checker49504,vec__49498,opts__24458__auto__){
return (function __GT_t49514(output_schema49501__$1,query__$1,input_schema49502__$1,input_checker49503__$1,owner__$1,query_input__$1,data__$1,G__49505__$1,fnk49500__$1,owner49473__$1,p__49475__$1,opts__24458__auto____$1,map49499__$1,validate__837__auto____$1,vec__49498__$1,ufv____$1,data__24457__auto____$1,output_checker49504__$1,meta49515){return (new stuttaford.radiant.datalog.t49514(output_schema49501__$1,query__$1,input_schema49502__$1,input_checker49503__$1,owner__$1,query_input__$1,data__$1,G__49505__$1,fnk49500__$1,owner49473__$1,p__49475__$1,opts__24458__auto____$1,map49499__$1,validate__837__auto____$1,vec__49498__$1,ufv____$1,data__24457__auto____$1,output_checker49504__$1,meta49515));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema49501,input_schema49502,input_checker49503,output_checker49504,vec__49498,opts__24458__auto__))
;
}
return (new stuttaford.radiant.datalog.t49514(output_schema49501,query,input_schema49502,input_checker49503,owner,query_input,data,G__49505,fnk49500,owner49473,p__49475,opts__24458__auto__,map49499,validate__837__auto__,vec__49498,ufv__,data__24457__auto__,output_checker49504,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49523 = (function (){var G__49519 = o__840__auto__;return (output_checker49504.cljs$core$IFn$_invoke$arity$1 ? output_checker49504.cljs$core$IFn$_invoke$arity$1(G__49519) : output_checker49504.call(null,G__49519));
})();if(cljs.core.truth_(temp__4126__auto___49523))
{var error__839__auto___49524 = temp__4126__auto___49523;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk49500","fnk49500",1374308907,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49524], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49501,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49524], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema49501,input_schema49502,input_checker49503,output_checker49504,vec__49498,opts__24458__auto__))
,schema.core.make_fn_schema(output_schema49501,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49502], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24458__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner49473,new cljs.core.Keyword(null,"data","data",-232669377),data__24457__auto__], null));
};
var query_input = function (data__24457__auto__,owner49473,var_args){
var p__49475 = null;if (arguments.length > 2) {
  p__49475 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return query_input__delegate.call(this,data__24457__auto__,owner49473,p__49475);};
query_input.cljs$lang$maxFixedArity = 2;
query_input.cljs$lang$applyTo = (function (arglist__49525){
var data__24457__auto__ = cljs.core.first(arglist__49525);
arglist__49525 = cljs.core.next(arglist__49525);
var owner49473 = cljs.core.first(arglist__49525);
var p__49475 = cljs.core.rest(arglist__49525);
return query_input__delegate(data__24457__auto__,owner49473,p__49475);
});
query_input.cljs$core$IFn$_invoke$arity$variadic = query_input__delegate;
return query_input;
})()
;
stuttaford.radiant.datalog.__GT_query_input = (function() {
var __GT_query_input = null;
var __GT_query_input__1 = (function (cursor__24426__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datalog.query_input,cursor__24426__auto__);
});
var __GT_query_input__2 = (function (cursor__24426__auto__,m49474){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datalog.query_input,cursor__24426__auto__,m49474);
});
__GT_query_input = function(cursor__24426__auto__,m49474){
switch(arguments.length){
case 1:
return __GT_query_input__1.call(this,cursor__24426__auto__);
case 2:
return __GT_query_input__2.call(this,cursor__24426__auto__,m49474);
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
var datalog__delegate = function (data__24457__auto__,owner49526,p__49528){var vec__49561 = p__49528;var opts__24458__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49561,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema49564 = schema.core.Any;var input_schema49565 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"query","query",-1288509510)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-db","current-db",213667882)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684)),schema.core.Any,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map49562","map49562",-2142978745,null))], null);var input_checker49566 = schema.core.checker(input_schema49565);var output_checker49567 = schema.core.checker(output_schema49564);return schema.core.schematize_fn(((function (ufv__,output_schema49564,input_schema49565,input_checker49566,output_checker49567,vec__49561,opts__24458__auto__){
return (function fnk49563(G__49568){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49593 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49568], null);var temp__4126__auto___49594 = (function (){var G__49581 = args__838__auto___49593;return (input_checker49566.cljs$core$IFn$_invoke$arity$1 ? input_checker49566.cljs$core$IFn$_invoke$arity$1(G__49581) : input_checker49566.call(null,G__49581));
})();if(cljs.core.truth_(temp__4126__auto___49594))
{var error__839__auto___49595 = temp__4126__auto___49594;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk49563","fnk49563",-852494822,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49595], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49565,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49593,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49595], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map49562 = G__49568;while(true){
if(cljs.core.map_QMARK_(map49562))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map49562], 0))));
}
var data = plumbing.fnk.schema.safe_get(map49562,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var data_sources = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684),null);var current_db = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-db","current-db",213667882),null);var query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"query","query",-1288509510),"");var owner = plumbing.fnk.schema.safe_get(map49562,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datalog.t49582 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datalog.t49582 = (function (query,datalog,current_data_source,input_checker49566,output_checker49567,owner,output_schema49564,data,map49562,vec__49561,p__49528,input_schema49565,data_sources,current_db,opts__24458__auto__,owner49526,fnk49563,validate__837__auto__,G__49568,ufv__,data__24457__auto__,meta49583){
this.query = query;
this.datalog = datalog;
this.current_data_source = current_data_source;
this.input_checker49566 = input_checker49566;
this.output_checker49567 = output_checker49567;
this.owner = owner;
this.output_schema49564 = output_schema49564;
this.data = data;
this.map49562 = map49562;
this.vec__49561 = vec__49561;
this.p__49528 = p__49528;
this.input_schema49565 = input_schema49565;
this.data_sources = data_sources;
this.current_db = current_db;
this.opts__24458__auto__ = opts__24458__auto__;
this.owner49526 = owner49526;
this.fnk49563 = fnk49563;
this.validate__837__auto__ = validate__837__auto__;
this.G__49568 = G__49568;
this.ufv__ = ufv__;
this.data__24457__auto__ = data__24457__auto__;
this.meta49583 = meta49583;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datalog.t49582.cljs$lang$type = true;
stuttaford.radiant.datalog.t49582.cljs$lang$ctorStr = "stuttaford.radiant.datalog/t49582";
stuttaford.radiant.datalog.t49582.cljs$lang$ctorPrWriter = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema49564,input_schema49565,input_checker49566,output_checker49567,vec__49561,opts__24458__auto__){
return (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"stuttaford.radiant.datalog/t49582");
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema49564,input_schema49565,input_checker49566,output_checker49567,vec__49561,opts__24458__auto__))
;
stuttaford.radiant.datalog.t49582.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datalog.t49582.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema49564,input_schema49565,input_checker49566,output_checker49567,vec__49561,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "datalog";
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema49564,input_schema49565,input_checker49566,output_checker49567,vec__49561,opts__24458__auto__))
;
stuttaford.radiant.datalog.t49582.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.datalog.t49582.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema49564,input_schema49565,input_checker49566,output_checker49567,vec__49561,opts__24458__auto__){
return (function (_,p__49585){var self__ = this;
var map__49586 = p__49585;var map__49586__$1 = ((cljs.core.seq_QMARK_(map__49586))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49586):map__49586);var sort = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49586__$1,new cljs.core.Keyword(null,"sort","sort",953465918),(0));var ___$1 = this;var attrs49587 = stuttaford.radiant.datalog.__GT_query_input.cljs$core$IFn$_invoke$arity$1(self__.data);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs49587))?sablono.interpreter.attributes(attrs49587):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs49587))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var temp__4126__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4126__auto__))
{var query__$2 = temp__4126__auto__;return stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(query__$2)),new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var G__49588 = query__$2;var G__49589 = self__.current_db;return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__49588,G__49589) : datascript.q.call(null,G__49588,G__49589));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),true], null)], null));
} else
{return null;
}
})())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs49587),sablono.interpreter.interpret((function (){var temp__4126__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4126__auto__))
{var query__$2 = temp__4126__auto__;return stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(query__$2)),new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var G__49590 = query__$2;var G__49591 = self__.current_db;return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__49590,G__49591) : datascript.q.call(null,G__49590,G__49591));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),true], null)], null));
} else
{return null;
}
})())], null))));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema49564,input_schema49565,input_checker49566,output_checker49567,vec__49561,opts__24458__auto__))
;
stuttaford.radiant.datalog.t49582.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema49564,input_schema49565,input_checker49566,output_checker49567,vec__49561,opts__24458__auto__){
return (function (_49584){var self__ = this;
var _49584__$1 = this;return self__.meta49583;
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema49564,input_schema49565,input_checker49566,output_checker49567,vec__49561,opts__24458__auto__))
;
stuttaford.radiant.datalog.t49582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema49564,input_schema49565,input_checker49566,output_checker49567,vec__49561,opts__24458__auto__){
return (function (_49584,meta49583__$1){var self__ = this;
var _49584__$1 = this;return (new stuttaford.radiant.datalog.t49582(self__.query,self__.datalog,self__.current_data_source,self__.input_checker49566,self__.output_checker49567,self__.owner,self__.output_schema49564,self__.data,self__.map49562,self__.vec__49561,self__.p__49528,self__.input_schema49565,self__.data_sources,self__.current_db,self__.opts__24458__auto__,self__.owner49526,self__.fnk49563,self__.validate__837__auto__,self__.G__49568,self__.ufv__,self__.data__24457__auto__,meta49583__$1));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema49564,input_schema49565,input_checker49566,output_checker49567,vec__49561,opts__24458__auto__))
;
stuttaford.radiant.datalog.__GT_t49582 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema49564,input_schema49565,input_checker49566,output_checker49567,vec__49561,opts__24458__auto__){
return (function __GT_t49582(query__$1,datalog__$1,current_data_source__$1,input_checker49566__$1,output_checker49567__$1,owner__$1,output_schema49564__$1,data__$1,map49562__$1,vec__49561__$1,p__49528__$1,input_schema49565__$1,data_sources__$1,current_db__$1,opts__24458__auto____$1,owner49526__$1,fnk49563__$1,validate__837__auto____$1,G__49568__$1,ufv____$1,data__24457__auto____$1,meta49583){return (new stuttaford.radiant.datalog.t49582(query__$1,datalog__$1,current_data_source__$1,input_checker49566__$1,output_checker49567__$1,owner__$1,output_schema49564__$1,data__$1,map49562__$1,vec__49561__$1,p__49528__$1,input_schema49565__$1,data_sources__$1,current_db__$1,opts__24458__auto____$1,owner49526__$1,fnk49563__$1,validate__837__auto____$1,G__49568__$1,ufv____$1,data__24457__auto____$1,meta49583));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema49564,input_schema49565,input_checker49566,output_checker49567,vec__49561,opts__24458__auto__))
;
}
return (new stuttaford.radiant.datalog.t49582(query,datalog,current_data_source,input_checker49566,output_checker49567,owner,output_schema49564,data,map49562,vec__49561,p__49528,input_schema49565,data_sources,current_db,opts__24458__auto__,owner49526,fnk49563,validate__837__auto__,G__49568,ufv__,data__24457__auto__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49596 = (function (){var G__49592 = o__840__auto__;return (output_checker49567.cljs$core$IFn$_invoke$arity$1 ? output_checker49567.cljs$core$IFn$_invoke$arity$1(G__49592) : output_checker49567.call(null,G__49592));
})();if(cljs.core.truth_(temp__4126__auto___49596))
{var error__839__auto___49597 = temp__4126__auto___49596;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk49563","fnk49563",-852494822,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49597], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49564,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49597], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema49564,input_schema49565,input_checker49566,output_checker49567,vec__49561,opts__24458__auto__))
,schema.core.make_fn_schema(output_schema49564,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49565], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24458__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner49526,new cljs.core.Keyword(null,"data","data",-232669377),data__24457__auto__], null));
};
var datalog = function (data__24457__auto__,owner49526,var_args){
var p__49528 = null;if (arguments.length > 2) {
  p__49528 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datalog__delegate.call(this,data__24457__auto__,owner49526,p__49528);};
datalog.cljs$lang$maxFixedArity = 2;
datalog.cljs$lang$applyTo = (function (arglist__49598){
var data__24457__auto__ = cljs.core.first(arglist__49598);
arglist__49598 = cljs.core.next(arglist__49598);
var owner49526 = cljs.core.first(arglist__49598);
var p__49528 = cljs.core.rest(arglist__49598);
return datalog__delegate(data__24457__auto__,owner49526,p__49528);
});
datalog.cljs$core$IFn$_invoke$arity$variadic = datalog__delegate;
return datalog;
})()
;
stuttaford.radiant.datalog.__GT_datalog = (function() {
var __GT_datalog = null;
var __GT_datalog__1 = (function (cursor__24426__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datalog.datalog,cursor__24426__auto__);
});
var __GT_datalog__2 = (function (cursor__24426__auto__,m49527){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datalog.datalog,cursor__24426__auto__,m49527);
});
__GT_datalog = function(cursor__24426__auto__,m49527){
switch(arguments.length){
case 1:
return __GT_datalog__1.call(this,cursor__24426__auto__);
case 2:
return __GT_datalog__2.call(this,cursor__24426__auto__,m49527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_datalog.cljs$core$IFn$_invoke$arity$1 = __GT_datalog__1;
__GT_datalog.cljs$core$IFn$_invoke$arity$2 = __GT_datalog__2;
return __GT_datalog;
})()
;
//# sourceMappingURL=datalog.js.map