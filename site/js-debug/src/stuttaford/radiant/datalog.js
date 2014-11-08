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
stuttaford.radiant.datalog.maybe_parse_query = (function maybe_parse_query(s){try{var G__76981 = s;var G__76981__$1 = (((G__76981 == null))?null:cljs.reader.read_string(G__76981));var G__76981__$2 = (((G__76981__$1 == null))?null:datascript.query.parse_query(G__76981__$1));return G__76981__$2;
}catch (e76979){var e = e76979;return null;
}});
stuttaford.radiant.datalog.handle_query_input_change = (function handle_query_input_change(data,owner){var input = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"input");var text = input.value;return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"query","query",-1288509510),text);
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.datalog.query_input = (function() { 
var query_input__delegate = function (data__24427__auto__,owner76991,p__76993){var vec__77047 = p__76993;var opts__24428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77047,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema77051 = schema.core.Any;var input_schema77052 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map77048","map77048",-1579702182,null))], null);var input_checker77053 = schema.core.checker(input_schema77052);var output_checker77054 = schema.core.checker(output_schema77051);return schema.core.schematize_fn(((function (ufv__,output_schema77051,input_schema77052,input_checker77053,output_checker77054,vec__77047,opts__24428__auto__){
return (function fnk77050(G__77055){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___77095 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__77055], null);var temp__4126__auto___77096 = (function (){var G__77078 = args__838__auto___77095;return (input_checker77053.cljs$core$IFn$_invoke$arity$1 ? input_checker77053.cljs$core$IFn$_invoke$arity$1(G__77078) : input_checker77053.call(null,G__77078));
})();if(cljs.core.truth_(temp__4126__auto___77096))
{var error__839__auto___77098 = temp__4126__auto___77096;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk77050","fnk77050",-1980910183,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77098], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema77052,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___77095,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77098], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map77048 = G__77055;while(true){
if(cljs.core.map_QMARK_(map77048))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map77048], 0))));
}
var data = plumbing.fnk.schema.safe_get(map77048,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var query = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map77048,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datalog.t77079 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datalog.t77079 = (function (query,owner,output_checker77054,query_input,data,input_checker77053,owner76991,G__77055,input_schema77052,output_schema77051,vec__77047,fnk77050,map77048,validate__837__auto__,p__76993,data__24427__auto__,ufv__,opts__24428__auto__,meta77080){
this.query = query;
this.owner = owner;
this.output_checker77054 = output_checker77054;
this.query_input = query_input;
this.data = data;
this.input_checker77053 = input_checker77053;
this.owner76991 = owner76991;
this.G__77055 = G__77055;
this.input_schema77052 = input_schema77052;
this.output_schema77051 = output_schema77051;
this.vec__77047 = vec__77047;
this.fnk77050 = fnk77050;
this.map77048 = map77048;
this.validate__837__auto__ = validate__837__auto__;
this.p__76993 = p__76993;
this.data__24427__auto__ = data__24427__auto__;
this.ufv__ = ufv__;
this.opts__24428__auto__ = opts__24428__auto__;
this.meta77080 = meta77080;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datalog.t77079.cljs$lang$type = true;
stuttaford.radiant.datalog.t77079.cljs$lang$ctorStr = "stuttaford.radiant.datalog/t77079";
stuttaford.radiant.datalog.t77079.cljs$lang$ctorPrWriter = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema77051,input_schema77052,input_checker77053,output_checker77054,vec__77047,opts__24428__auto__){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"stuttaford.radiant.datalog/t77079");
});})(owner,query,data,validate__837__auto__,ufv__,output_schema77051,input_schema77052,input_checker77053,output_checker77054,vec__77047,opts__24428__auto__))
;
stuttaford.radiant.datalog.t77079.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datalog.t77079.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema77051,input_schema77052,input_checker77053,output_checker77054,vec__77047,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "query-input";
});})(owner,query,data,validate__837__auto__,ufv__,output_schema77051,input_schema77052,input_checker77053,output_checker77054,vec__77047,opts__24428__auto__))
;
stuttaford.radiant.datalog.t77079.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.datalog.t77079.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema77051,input_schema77052,input_checker77053,output_checker77054,vec__77047,opts__24428__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"query-input"], null),cljs.core.array_seq([om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(6)], null),cljs.core.array_seq([om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),true,new cljs.core.Keyword(null,"rows","rows",850049680),(8),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"[:find ?e ?v :in $ :where [?e :attr ?v]]",new cljs.core.Keyword(null,"value","value",305978217),self__.query,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),((cljs.core.seq(self__.query))?(cljs.core.truth_(stuttaford.radiant.datalog.maybe_parse_query(self__.query))?"success":"error"):null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (___$1,owner,query,data,validate__837__auto__,ufv__,output_schema77051,input_schema77052,input_checker77053,output_checker77054,vec__77047,opts__24428__auto__){
return (function (){return stuttaford.radiant.datalog.handle_query_input_change(self__.data,self__.owner);
});})(___$1,owner,query,data,validate__837__auto__,ufv__,output_schema77051,input_schema77052,input_checker77053,output_checker77054,vec__77047,opts__24428__auto__))
], null))], 0)),om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(6)], null),cljs.core.array_seq([(function (){var attrs77087 = (function (){var temp__4124__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4124__auto__))
{var parsed_query = temp__4124__auto__;var map__77090 = parsed_query;var map__77090__$1 = ((cljs.core.seq_QMARK_(map__77090))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77090):map__77090);var where = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77090__$1,new cljs.core.Keyword(null,"where","where",-2044795965));var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77090__$1,new cljs.core.Keyword(null,"in","in",-1531184865));var find = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77090__$1,new cljs.core.Keyword(null,"find","find",496279456));return ("[:find "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",find)))+"\n :in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",in$)))+"\n :where\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose("\n ",where)))+"]");
} else
{return "Not a valid query.";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.pre,((cljs.core.map_QMARK_(attrs77087))?sablono.interpreter.attributes(attrs77087):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs77087))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs77087)], null))));
})()], 0))], 0));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema77051,input_schema77052,input_checker77053,output_checker77054,vec__77047,opts__24428__auto__))
;
stuttaford.radiant.datalog.t77079.prototype.om$core$IInitState$ = true;
stuttaford.radiant.datalog.t77079.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema77051,input_schema77052,input_checker77053,output_checker77054,vec__77047,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),""], null);
});})(owner,query,data,validate__837__auto__,ufv__,output_schema77051,input_schema77052,input_checker77053,output_checker77054,vec__77047,opts__24428__auto__))
;
stuttaford.radiant.datalog.t77079.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema77051,input_schema77052,input_checker77053,output_checker77054,vec__77047,opts__24428__auto__){
return (function (_77081){var self__ = this;
var _77081__$1 = this;return self__.meta77080;
});})(owner,query,data,validate__837__auto__,ufv__,output_schema77051,input_schema77052,input_checker77053,output_checker77054,vec__77047,opts__24428__auto__))
;
stuttaford.radiant.datalog.t77079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema77051,input_schema77052,input_checker77053,output_checker77054,vec__77047,opts__24428__auto__){
return (function (_77081,meta77080__$1){var self__ = this;
var _77081__$1 = this;return (new stuttaford.radiant.datalog.t77079(self__.query,self__.owner,self__.output_checker77054,self__.query_input,self__.data,self__.input_checker77053,self__.owner76991,self__.G__77055,self__.input_schema77052,self__.output_schema77051,self__.vec__77047,self__.fnk77050,self__.map77048,self__.validate__837__auto__,self__.p__76993,self__.data__24427__auto__,self__.ufv__,self__.opts__24428__auto__,meta77080__$1));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema77051,input_schema77052,input_checker77053,output_checker77054,vec__77047,opts__24428__auto__))
;
stuttaford.radiant.datalog.__GT_t77079 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema77051,input_schema77052,input_checker77053,output_checker77054,vec__77047,opts__24428__auto__){
return (function __GT_t77079(query__$1,owner__$1,output_checker77054__$1,query_input__$1,data__$1,input_checker77053__$1,owner76991__$1,G__77055__$1,input_schema77052__$1,output_schema77051__$1,vec__77047__$1,fnk77050__$1,map77048__$1,validate__837__auto____$1,p__76993__$1,data__24427__auto____$1,ufv____$1,opts__24428__auto____$1,meta77080){return (new stuttaford.radiant.datalog.t77079(query__$1,owner__$1,output_checker77054__$1,query_input__$1,data__$1,input_checker77053__$1,owner76991__$1,G__77055__$1,input_schema77052__$1,output_schema77051__$1,vec__77047__$1,fnk77050__$1,map77048__$1,validate__837__auto____$1,p__76993__$1,data__24427__auto____$1,ufv____$1,opts__24428__auto____$1,meta77080));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema77051,input_schema77052,input_checker77053,output_checker77054,vec__77047,opts__24428__auto__))
;
}
return (new stuttaford.radiant.datalog.t77079(query,owner,output_checker77054,query_input,data,input_checker77053,owner76991,G__77055,input_schema77052,output_schema77051,vec__77047,fnk77050,map77048,validate__837__auto__,p__76993,data__24427__auto__,ufv__,opts__24428__auto__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___77099 = (function (){var G__77092 = o__840__auto__;return (output_checker77054.cljs$core$IFn$_invoke$arity$1 ? output_checker77054.cljs$core$IFn$_invoke$arity$1(G__77092) : output_checker77054.call(null,G__77092));
})();if(cljs.core.truth_(temp__4126__auto___77099))
{var error__839__auto___77100 = temp__4126__auto___77099;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk77050","fnk77050",-1980910183,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77100], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema77051,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77100], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema77051,input_schema77052,input_checker77053,output_checker77054,vec__77047,opts__24428__auto__))
,schema.core.make_fn_schema(output_schema77051,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema77052], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24428__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner76991,new cljs.core.Keyword(null,"data","data",-232669377),data__24427__auto__], null));
};
var query_input = function (data__24427__auto__,owner76991,var_args){
var p__76993 = null;if (arguments.length > 2) {
  p__76993 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return query_input__delegate.call(this,data__24427__auto__,owner76991,p__76993);};
query_input.cljs$lang$maxFixedArity = 2;
query_input.cljs$lang$applyTo = (function (arglist__77103){
var data__24427__auto__ = cljs.core.first(arglist__77103);
arglist__77103 = cljs.core.next(arglist__77103);
var owner76991 = cljs.core.first(arglist__77103);
var p__76993 = cljs.core.rest(arglist__77103);
return query_input__delegate(data__24427__auto__,owner76991,p__76993);
});
query_input.cljs$core$IFn$_invoke$arity$variadic = query_input__delegate;
return query_input;
})()
;
stuttaford.radiant.datalog.__GT_query_input = (function() {
var __GT_query_input = null;
var __GT_query_input__1 = (function (cursor__24396__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datalog.query_input,cursor__24396__auto__);
});
var __GT_query_input__2 = (function (cursor__24396__auto__,m76992){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datalog.query_input,cursor__24396__auto__,m76992);
});
__GT_query_input = function(cursor__24396__auto__,m76992){
switch(arguments.length){
case 1:
return __GT_query_input__1.call(this,cursor__24396__auto__);
case 2:
return __GT_query_input__2.call(this,cursor__24396__auto__,m76992);
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
var datalog__delegate = function (data__24427__auto__,owner77105,p__77107){var vec__77140 = p__77107;var opts__24428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77140,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema77143 = schema.core.Any;var input_schema77144 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"query","query",-1288509510)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-db","current-db",213667882)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684)),schema.core.Any,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map77141","map77141",-1189239730,null))], null);var input_checker77145 = schema.core.checker(input_schema77144);var output_checker77146 = schema.core.checker(output_schema77143);return schema.core.schematize_fn(((function (ufv__,output_schema77143,input_schema77144,input_checker77145,output_checker77146,vec__77140,opts__24428__auto__){
return (function fnk77142(G__77147){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___77172 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__77147], null);var temp__4126__auto___77173 = (function (){var G__77160 = args__838__auto___77172;return (input_checker77145.cljs$core$IFn$_invoke$arity$1 ? input_checker77145.cljs$core$IFn$_invoke$arity$1(G__77160) : input_checker77145.call(null,G__77160));
})();if(cljs.core.truth_(temp__4126__auto___77173))
{var error__839__auto___77174 = temp__4126__auto___77173;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk77142","fnk77142",1904313205,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77174], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema77144,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___77172,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77174], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map77141 = G__77147;while(true){
if(cljs.core.map_QMARK_(map77141))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map77141], 0))));
}
var data = plumbing.fnk.schema.safe_get(map77141,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var data_sources = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684),null);var current_db = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-db","current-db",213667882),null);var query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"query","query",-1288509510),"");var owner = plumbing.fnk.schema.safe_get(map77141,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datalog.t77161 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datalog.t77161 = (function (query,G__77147,output_checker77146,datalog,current_data_source,owner,input_schema77144,data,map77141,data_sources,current_db,vec__77140,p__77107,fnk77142,validate__837__auto__,owner77105,input_checker77145,data__24427__auto__,ufv__,output_schema77143,opts__24428__auto__,meta77162){
this.query = query;
this.G__77147 = G__77147;
this.output_checker77146 = output_checker77146;
this.datalog = datalog;
this.current_data_source = current_data_source;
this.owner = owner;
this.input_schema77144 = input_schema77144;
this.data = data;
this.map77141 = map77141;
this.data_sources = data_sources;
this.current_db = current_db;
this.vec__77140 = vec__77140;
this.p__77107 = p__77107;
this.fnk77142 = fnk77142;
this.validate__837__auto__ = validate__837__auto__;
this.owner77105 = owner77105;
this.input_checker77145 = input_checker77145;
this.data__24427__auto__ = data__24427__auto__;
this.ufv__ = ufv__;
this.output_schema77143 = output_schema77143;
this.opts__24428__auto__ = opts__24428__auto__;
this.meta77162 = meta77162;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datalog.t77161.cljs$lang$type = true;
stuttaford.radiant.datalog.t77161.cljs$lang$ctorStr = "stuttaford.radiant.datalog/t77161";
stuttaford.radiant.datalog.t77161.cljs$lang$ctorPrWriter = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77143,input_schema77144,input_checker77145,output_checker77146,vec__77140,opts__24428__auto__){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"stuttaford.radiant.datalog/t77161");
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77143,input_schema77144,input_checker77145,output_checker77146,vec__77140,opts__24428__auto__))
;
stuttaford.radiant.datalog.t77161.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datalog.t77161.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77143,input_schema77144,input_checker77145,output_checker77146,vec__77140,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "datalog";
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77143,input_schema77144,input_checker77145,output_checker77146,vec__77140,opts__24428__auto__))
;
stuttaford.radiant.datalog.t77161.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.datalog.t77161.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77143,input_schema77144,input_checker77145,output_checker77146,vec__77140,opts__24428__auto__){
return (function (_,p__77164){var self__ = this;
var map__77165 = p__77164;var map__77165__$1 = ((cljs.core.seq_QMARK_(map__77165))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77165):map__77165);var sort = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77165__$1,new cljs.core.Keyword(null,"sort","sort",953465918),(0));var ___$1 = this;var attrs77166 = stuttaford.radiant.datalog.__GT_query_input.cljs$core$IFn$_invoke$arity$1(self__.data);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs77166))?sablono.interpreter.attributes(attrs77166):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs77166))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var temp__4126__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4126__auto__))
{var query__$2 = temp__4126__auto__;return stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(query__$2)),new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var G__77167 = query__$2;var G__77168 = self__.current_db;return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__77167,G__77168) : datascript.q.call(null,G__77167,G__77168));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),true], null)], null));
} else
{return null;
}
})())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs77166),sablono.interpreter.interpret((function (){var temp__4126__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4126__auto__))
{var query__$2 = temp__4126__auto__;return stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(query__$2)),new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var G__77169 = query__$2;var G__77170 = self__.current_db;return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__77169,G__77170) : datascript.q.call(null,G__77169,G__77170));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),true], null)], null));
} else
{return null;
}
})())], null))));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77143,input_schema77144,input_checker77145,output_checker77146,vec__77140,opts__24428__auto__))
;
stuttaford.radiant.datalog.t77161.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77143,input_schema77144,input_checker77145,output_checker77146,vec__77140,opts__24428__auto__){
return (function (_77163){var self__ = this;
var _77163__$1 = this;return self__.meta77162;
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77143,input_schema77144,input_checker77145,output_checker77146,vec__77140,opts__24428__auto__))
;
stuttaford.radiant.datalog.t77161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77143,input_schema77144,input_checker77145,output_checker77146,vec__77140,opts__24428__auto__){
return (function (_77163,meta77162__$1){var self__ = this;
var _77163__$1 = this;return (new stuttaford.radiant.datalog.t77161(self__.query,self__.G__77147,self__.output_checker77146,self__.datalog,self__.current_data_source,self__.owner,self__.input_schema77144,self__.data,self__.map77141,self__.data_sources,self__.current_db,self__.vec__77140,self__.p__77107,self__.fnk77142,self__.validate__837__auto__,self__.owner77105,self__.input_checker77145,self__.data__24427__auto__,self__.ufv__,self__.output_schema77143,self__.opts__24428__auto__,meta77162__$1));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77143,input_schema77144,input_checker77145,output_checker77146,vec__77140,opts__24428__auto__))
;
stuttaford.radiant.datalog.__GT_t77161 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77143,input_schema77144,input_checker77145,output_checker77146,vec__77140,opts__24428__auto__){
return (function __GT_t77161(query__$1,G__77147__$1,output_checker77146__$1,datalog__$1,current_data_source__$1,owner__$1,input_schema77144__$1,data__$1,map77141__$1,data_sources__$1,current_db__$1,vec__77140__$1,p__77107__$1,fnk77142__$1,validate__837__auto____$1,owner77105__$1,input_checker77145__$1,data__24427__auto____$1,ufv____$1,output_schema77143__$1,opts__24428__auto____$1,meta77162){return (new stuttaford.radiant.datalog.t77161(query__$1,G__77147__$1,output_checker77146__$1,datalog__$1,current_data_source__$1,owner__$1,input_schema77144__$1,data__$1,map77141__$1,data_sources__$1,current_db__$1,vec__77140__$1,p__77107__$1,fnk77142__$1,validate__837__auto____$1,owner77105__$1,input_checker77145__$1,data__24427__auto____$1,ufv____$1,output_schema77143__$1,opts__24428__auto____$1,meta77162));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77143,input_schema77144,input_checker77145,output_checker77146,vec__77140,opts__24428__auto__))
;
}
return (new stuttaford.radiant.datalog.t77161(query,G__77147,output_checker77146,datalog,current_data_source,owner,input_schema77144,data,map77141,data_sources,current_db,vec__77140,p__77107,fnk77142,validate__837__auto__,owner77105,input_checker77145,data__24427__auto__,ufv__,output_schema77143,opts__24428__auto__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___77175 = (function (){var G__77171 = o__840__auto__;return (output_checker77146.cljs$core$IFn$_invoke$arity$1 ? output_checker77146.cljs$core$IFn$_invoke$arity$1(G__77171) : output_checker77146.call(null,G__77171));
})();if(cljs.core.truth_(temp__4126__auto___77175))
{var error__839__auto___77176 = temp__4126__auto___77175;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk77142","fnk77142",1904313205,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77176], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema77143,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77176], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema77143,input_schema77144,input_checker77145,output_checker77146,vec__77140,opts__24428__auto__))
,schema.core.make_fn_schema(output_schema77143,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema77144], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24428__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner77105,new cljs.core.Keyword(null,"data","data",-232669377),data__24427__auto__], null));
};
var datalog = function (data__24427__auto__,owner77105,var_args){
var p__77107 = null;if (arguments.length > 2) {
  p__77107 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datalog__delegate.call(this,data__24427__auto__,owner77105,p__77107);};
datalog.cljs$lang$maxFixedArity = 2;
datalog.cljs$lang$applyTo = (function (arglist__77177){
var data__24427__auto__ = cljs.core.first(arglist__77177);
arglist__77177 = cljs.core.next(arglist__77177);
var owner77105 = cljs.core.first(arglist__77177);
var p__77107 = cljs.core.rest(arglist__77177);
return datalog__delegate(data__24427__auto__,owner77105,p__77107);
});
datalog.cljs$core$IFn$_invoke$arity$variadic = datalog__delegate;
return datalog;
})()
;
stuttaford.radiant.datalog.__GT_datalog = (function() {
var __GT_datalog = null;
var __GT_datalog__1 = (function (cursor__24396__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datalog.datalog,cursor__24396__auto__);
});
var __GT_datalog__2 = (function (cursor__24396__auto__,m77106){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datalog.datalog,cursor__24396__auto__,m77106);
});
__GT_datalog = function(cursor__24396__auto__,m77106){
switch(arguments.length){
case 1:
return __GT_datalog__1.call(this,cursor__24396__auto__);
case 2:
return __GT_datalog__2.call(this,cursor__24396__auto__,m77106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_datalog.cljs$core$IFn$_invoke$arity$1 = __GT_datalog__1;
__GT_datalog.cljs$core$IFn$_invoke$arity$2 = __GT_datalog__2;
return __GT_datalog;
})()
;
//# sourceMappingURL=datalog.js.map