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
stuttaford.radiant.datalog.maybe_parse_query = (function maybe_parse_query(s){try{var G__77240 = s;var G__77240__$1 = (((G__77240 == null))?null:cljs.reader.read_string(G__77240));var G__77240__$2 = (((G__77240__$1 == null))?null:datascript.query.parse_query(G__77240__$1));return G__77240__$2;
}catch (e77239){var e = e77239;return null;
}});
stuttaford.radiant.datalog.handle_query_input_change = (function handle_query_input_change(data,owner){var input = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"input");var text = input.value;return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"query","query",-1288509510),text);
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.datalog.query_input = (function() { 
var query_input__delegate = function (data__24427__auto__,owner77241,p__77243){var vec__77266 = p__77243;var opts__24428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77266,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema77269 = schema.core.Any;var input_schema77270 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map77267","map77267",759270807,null))], null);var input_checker77271 = schema.core.checker(input_schema77270);var output_checker77272 = schema.core.checker(output_schema77269);return schema.core.schematize_fn(((function (ufv__,output_schema77269,input_schema77270,input_checker77271,output_checker77272,vec__77266,opts__24428__auto__){
return (function fnk77268(G__77273){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___77288 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__77273], null);var temp__4126__auto___77289 = (function (){var G__77281 = args__838__auto___77288;return (input_checker77271.cljs$core$IFn$_invoke$arity$1 ? input_checker77271.cljs$core$IFn$_invoke$arity$1(G__77281) : input_checker77271.call(null,G__77281));
})();if(cljs.core.truth_(temp__4126__auto___77289))
{var error__839__auto___77290 = temp__4126__auto___77289;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk77268","fnk77268",-1837427473,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77290], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema77270,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___77288,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77290], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map77267 = G__77273;while(true){
if(cljs.core.map_QMARK_(map77267))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map77267], 0))));
}
var data = plumbing.fnk.schema.safe_get(map77267,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var query = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map77267,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datalog.t77282 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datalog.t77282 = (function (query,vec__77266,owner,query_input,data,input_checker77271,fnk77268,input_schema77270,owner77241,map77267,output_checker77272,output_schema77269,G__77273,validate__837__auto__,p__77243,data__24427__auto__,ufv__,opts__24428__auto__,meta77283){
this.query = query;
this.vec__77266 = vec__77266;
this.owner = owner;
this.query_input = query_input;
this.data = data;
this.input_checker77271 = input_checker77271;
this.fnk77268 = fnk77268;
this.input_schema77270 = input_schema77270;
this.owner77241 = owner77241;
this.map77267 = map77267;
this.output_checker77272 = output_checker77272;
this.output_schema77269 = output_schema77269;
this.G__77273 = G__77273;
this.validate__837__auto__ = validate__837__auto__;
this.p__77243 = p__77243;
this.data__24427__auto__ = data__24427__auto__;
this.ufv__ = ufv__;
this.opts__24428__auto__ = opts__24428__auto__;
this.meta77283 = meta77283;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datalog.t77282.cljs$lang$type = true;
stuttaford.radiant.datalog.t77282.cljs$lang$ctorStr = "stuttaford.radiant.datalog/t77282";
stuttaford.radiant.datalog.t77282.cljs$lang$ctorPrWriter = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema77269,input_schema77270,input_checker77271,output_checker77272,vec__77266,opts__24428__auto__){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"stuttaford.radiant.datalog/t77282");
});})(owner,query,data,validate__837__auto__,ufv__,output_schema77269,input_schema77270,input_checker77271,output_checker77272,vec__77266,opts__24428__auto__))
;
stuttaford.radiant.datalog.t77282.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datalog.t77282.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema77269,input_schema77270,input_checker77271,output_checker77272,vec__77266,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "query-input";
});})(owner,query,data,validate__837__auto__,ufv__,output_schema77269,input_schema77270,input_checker77271,output_checker77272,vec__77266,opts__24428__auto__))
;
stuttaford.radiant.datalog.t77282.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.datalog.t77282.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema77269,input_schema77270,input_checker77271,output_checker77272,vec__77266,opts__24428__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"query-input"], null),cljs.core.array_seq([om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(6)], null),cljs.core.array_seq([om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),true,new cljs.core.Keyword(null,"rows","rows",850049680),(8),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"[:find ?e ?v :in $ :where [?e :attr ?v]]",new cljs.core.Keyword(null,"value","value",305978217),self__.query,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),((cljs.core.seq(self__.query))?(cljs.core.truth_(stuttaford.radiant.datalog.maybe_parse_query(self__.query))?"success":"error"):null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (___$1,owner,query,data,validate__837__auto__,ufv__,output_schema77269,input_schema77270,input_checker77271,output_checker77272,vec__77266,opts__24428__auto__){
return (function (){return stuttaford.radiant.datalog.handle_query_input_change(self__.data,self__.owner);
});})(___$1,owner,query,data,validate__837__auto__,ufv__,output_schema77269,input_schema77270,input_checker77271,output_checker77272,vec__77266,opts__24428__auto__))
], null))], 0)),om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(6)], null),cljs.core.array_seq([(function (){var attrs77285 = (function (){var temp__4124__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4124__auto__))
{var parsed_query = temp__4124__auto__;var map__77286 = parsed_query;var map__77286__$1 = ((cljs.core.seq_QMARK_(map__77286))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77286):map__77286);var where = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77286__$1,new cljs.core.Keyword(null,"where","where",-2044795965));var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77286__$1,new cljs.core.Keyword(null,"in","in",-1531184865));var find = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77286__$1,new cljs.core.Keyword(null,"find","find",496279456));return ("[:find "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",find)))+"\n :in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",in$)))+"\n :where\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose("\n ",where)))+"]");
} else
{return "Not a valid query.";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.pre,((cljs.core.map_QMARK_(attrs77285))?sablono.interpreter.attributes(attrs77285):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs77285))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs77285)], null))));
})()], 0))], 0));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema77269,input_schema77270,input_checker77271,output_checker77272,vec__77266,opts__24428__auto__))
;
stuttaford.radiant.datalog.t77282.prototype.om$core$IInitState$ = true;
stuttaford.radiant.datalog.t77282.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema77269,input_schema77270,input_checker77271,output_checker77272,vec__77266,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),""], null);
});})(owner,query,data,validate__837__auto__,ufv__,output_schema77269,input_schema77270,input_checker77271,output_checker77272,vec__77266,opts__24428__auto__))
;
stuttaford.radiant.datalog.t77282.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema77269,input_schema77270,input_checker77271,output_checker77272,vec__77266,opts__24428__auto__){
return (function (_77284){var self__ = this;
var _77284__$1 = this;return self__.meta77283;
});})(owner,query,data,validate__837__auto__,ufv__,output_schema77269,input_schema77270,input_checker77271,output_checker77272,vec__77266,opts__24428__auto__))
;
stuttaford.radiant.datalog.t77282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema77269,input_schema77270,input_checker77271,output_checker77272,vec__77266,opts__24428__auto__){
return (function (_77284,meta77283__$1){var self__ = this;
var _77284__$1 = this;return (new stuttaford.radiant.datalog.t77282(self__.query,self__.vec__77266,self__.owner,self__.query_input,self__.data,self__.input_checker77271,self__.fnk77268,self__.input_schema77270,self__.owner77241,self__.map77267,self__.output_checker77272,self__.output_schema77269,self__.G__77273,self__.validate__837__auto__,self__.p__77243,self__.data__24427__auto__,self__.ufv__,self__.opts__24428__auto__,meta77283__$1));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema77269,input_schema77270,input_checker77271,output_checker77272,vec__77266,opts__24428__auto__))
;
stuttaford.radiant.datalog.__GT_t77282 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema77269,input_schema77270,input_checker77271,output_checker77272,vec__77266,opts__24428__auto__){
return (function __GT_t77282(query__$1,vec__77266__$1,owner__$1,query_input__$1,data__$1,input_checker77271__$1,fnk77268__$1,input_schema77270__$1,owner77241__$1,map77267__$1,output_checker77272__$1,output_schema77269__$1,G__77273__$1,validate__837__auto____$1,p__77243__$1,data__24427__auto____$1,ufv____$1,opts__24428__auto____$1,meta77283){return (new stuttaford.radiant.datalog.t77282(query__$1,vec__77266__$1,owner__$1,query_input__$1,data__$1,input_checker77271__$1,fnk77268__$1,input_schema77270__$1,owner77241__$1,map77267__$1,output_checker77272__$1,output_schema77269__$1,G__77273__$1,validate__837__auto____$1,p__77243__$1,data__24427__auto____$1,ufv____$1,opts__24428__auto____$1,meta77283));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema77269,input_schema77270,input_checker77271,output_checker77272,vec__77266,opts__24428__auto__))
;
}
return (new stuttaford.radiant.datalog.t77282(query,vec__77266,owner,query_input,data,input_checker77271,fnk77268,input_schema77270,owner77241,map77267,output_checker77272,output_schema77269,G__77273,validate__837__auto__,p__77243,data__24427__auto__,ufv__,opts__24428__auto__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___77332 = (function (){var G__77287 = o__840__auto__;return (output_checker77272.cljs$core$IFn$_invoke$arity$1 ? output_checker77272.cljs$core$IFn$_invoke$arity$1(G__77287) : output_checker77272.call(null,G__77287));
})();if(cljs.core.truth_(temp__4126__auto___77332))
{var error__839__auto___77334 = temp__4126__auto___77332;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk77268","fnk77268",-1837427473,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77334], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema77269,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77334], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema77269,input_schema77270,input_checker77271,output_checker77272,vec__77266,opts__24428__auto__))
,schema.core.make_fn_schema(output_schema77269,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema77270], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24428__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner77241,new cljs.core.Keyword(null,"data","data",-232669377),data__24427__auto__], null));
};
var query_input = function (data__24427__auto__,owner77241,var_args){
var p__77243 = null;if (arguments.length > 2) {
  p__77243 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return query_input__delegate.call(this,data__24427__auto__,owner77241,p__77243);};
query_input.cljs$lang$maxFixedArity = 2;
query_input.cljs$lang$applyTo = (function (arglist__77338){
var data__24427__auto__ = cljs.core.first(arglist__77338);
arglist__77338 = cljs.core.next(arglist__77338);
var owner77241 = cljs.core.first(arglist__77338);
var p__77243 = cljs.core.rest(arglist__77338);
return query_input__delegate(data__24427__auto__,owner77241,p__77243);
});
query_input.cljs$core$IFn$_invoke$arity$variadic = query_input__delegate;
return query_input;
})()
;
stuttaford.radiant.datalog.__GT_query_input = (function() {
var __GT_query_input = null;
var __GT_query_input__1 = (function (cursor__24396__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datalog.query_input,cursor__24396__auto__);
});
var __GT_query_input__2 = (function (cursor__24396__auto__,m77242){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datalog.query_input,cursor__24396__auto__,m77242);
});
__GT_query_input = function(cursor__24396__auto__,m77242){
switch(arguments.length){
case 1:
return __GT_query_input__1.call(this,cursor__24396__auto__);
case 2:
return __GT_query_input__2.call(this,cursor__24396__auto__,m77242);
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
var datalog__delegate = function (data__24427__auto__,owner77343,p__77345){var vec__77383 = p__77345;var opts__24428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77383,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema77386 = schema.core.Any;var input_schema77387 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"query","query",-1288509510)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-db","current-db",213667882)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684)),schema.core.Any,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map77384","map77384",14229519,null))], null);var input_checker77388 = schema.core.checker(input_schema77387);var output_checker77389 = schema.core.checker(output_schema77386);return schema.core.schematize_fn(((function (ufv__,output_schema77386,input_schema77387,input_checker77388,output_checker77389,vec__77383,opts__24428__auto__){
return (function fnk77385(G__77390){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___77415 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__77390], null);var temp__4126__auto___77416 = (function (){var G__77403 = args__838__auto___77415;return (input_checker77388.cljs$core$IFn$_invoke$arity$1 ? input_checker77388.cljs$core$IFn$_invoke$arity$1(G__77403) : input_checker77388.call(null,G__77403));
})();if(cljs.core.truth_(temp__4126__auto___77416))
{var error__839__auto___77417 = temp__4126__auto___77416;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk77385","fnk77385",-484236276,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77417], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema77387,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___77415,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77417], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map77384 = G__77390;while(true){
if(cljs.core.map_QMARK_(map77384))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map77384], 0))));
}
var data = plumbing.fnk.schema.safe_get(map77384,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var data_sources = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684),null);var current_db = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-db","current-db",213667882),null);var query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"query","query",-1288509510),"");var owner = plumbing.fnk.schema.safe_get(map77384,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datalog.t77404 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datalog.t77404 = (function (query,output_checker77389,datalog,current_data_source,input_checker77388,owner,data,vec__77383,fnk77385,p__77345,G__77390,map77384,owner77343,data_sources,current_db,output_schema77386,validate__837__auto__,data__24427__auto__,ufv__,opts__24428__auto__,input_schema77387,meta77405){
this.query = query;
this.output_checker77389 = output_checker77389;
this.datalog = datalog;
this.current_data_source = current_data_source;
this.input_checker77388 = input_checker77388;
this.owner = owner;
this.data = data;
this.vec__77383 = vec__77383;
this.fnk77385 = fnk77385;
this.p__77345 = p__77345;
this.G__77390 = G__77390;
this.map77384 = map77384;
this.owner77343 = owner77343;
this.data_sources = data_sources;
this.current_db = current_db;
this.output_schema77386 = output_schema77386;
this.validate__837__auto__ = validate__837__auto__;
this.data__24427__auto__ = data__24427__auto__;
this.ufv__ = ufv__;
this.opts__24428__auto__ = opts__24428__auto__;
this.input_schema77387 = input_schema77387;
this.meta77405 = meta77405;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datalog.t77404.cljs$lang$type = true;
stuttaford.radiant.datalog.t77404.cljs$lang$ctorStr = "stuttaford.radiant.datalog/t77404";
stuttaford.radiant.datalog.t77404.cljs$lang$ctorPrWriter = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77386,input_schema77387,input_checker77388,output_checker77389,vec__77383,opts__24428__auto__){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"stuttaford.radiant.datalog/t77404");
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77386,input_schema77387,input_checker77388,output_checker77389,vec__77383,opts__24428__auto__))
;
stuttaford.radiant.datalog.t77404.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datalog.t77404.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77386,input_schema77387,input_checker77388,output_checker77389,vec__77383,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "datalog";
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77386,input_schema77387,input_checker77388,output_checker77389,vec__77383,opts__24428__auto__))
;
stuttaford.radiant.datalog.t77404.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.datalog.t77404.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77386,input_schema77387,input_checker77388,output_checker77389,vec__77383,opts__24428__auto__){
return (function (_,p__77407){var self__ = this;
var map__77408 = p__77407;var map__77408__$1 = ((cljs.core.seq_QMARK_(map__77408))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77408):map__77408);var sort = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77408__$1,new cljs.core.Keyword(null,"sort","sort",953465918),(0));var ___$1 = this;var attrs77409 = stuttaford.radiant.datalog.__GT_query_input.cljs$core$IFn$_invoke$arity$1(self__.data);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs77409))?sablono.interpreter.attributes(attrs77409):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs77409))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var temp__4126__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4126__auto__))
{var query__$2 = temp__4126__auto__;return stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(query__$2)),new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var G__77410 = query__$2;var G__77411 = self__.current_db;return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__77410,G__77411) : datascript.q.call(null,G__77410,G__77411));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),true], null)], null));
} else
{return null;
}
})())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs77409),sablono.interpreter.interpret((function (){var temp__4126__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4126__auto__))
{var query__$2 = temp__4126__auto__;return stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(query__$2)),new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var G__77412 = query__$2;var G__77413 = self__.current_db;return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__77412,G__77413) : datascript.q.call(null,G__77412,G__77413));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),true], null)], null));
} else
{return null;
}
})())], null))));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77386,input_schema77387,input_checker77388,output_checker77389,vec__77383,opts__24428__auto__))
;
stuttaford.radiant.datalog.t77404.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77386,input_schema77387,input_checker77388,output_checker77389,vec__77383,opts__24428__auto__){
return (function (_77406){var self__ = this;
var _77406__$1 = this;return self__.meta77405;
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77386,input_schema77387,input_checker77388,output_checker77389,vec__77383,opts__24428__auto__))
;
stuttaford.radiant.datalog.t77404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77386,input_schema77387,input_checker77388,output_checker77389,vec__77383,opts__24428__auto__){
return (function (_77406,meta77405__$1){var self__ = this;
var _77406__$1 = this;return (new stuttaford.radiant.datalog.t77404(self__.query,self__.output_checker77389,self__.datalog,self__.current_data_source,self__.input_checker77388,self__.owner,self__.data,self__.vec__77383,self__.fnk77385,self__.p__77345,self__.G__77390,self__.map77384,self__.owner77343,self__.data_sources,self__.current_db,self__.output_schema77386,self__.validate__837__auto__,self__.data__24427__auto__,self__.ufv__,self__.opts__24428__auto__,self__.input_schema77387,meta77405__$1));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77386,input_schema77387,input_checker77388,output_checker77389,vec__77383,opts__24428__auto__))
;
stuttaford.radiant.datalog.__GT_t77404 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77386,input_schema77387,input_checker77388,output_checker77389,vec__77383,opts__24428__auto__){
return (function __GT_t77404(query__$1,output_checker77389__$1,datalog__$1,current_data_source__$1,input_checker77388__$1,owner__$1,data__$1,vec__77383__$1,fnk77385__$1,p__77345__$1,G__77390__$1,map77384__$1,owner77343__$1,data_sources__$1,current_db__$1,output_schema77386__$1,validate__837__auto____$1,data__24427__auto____$1,ufv____$1,opts__24428__auto____$1,input_schema77387__$1,meta77405){return (new stuttaford.radiant.datalog.t77404(query__$1,output_checker77389__$1,datalog__$1,current_data_source__$1,input_checker77388__$1,owner__$1,data__$1,vec__77383__$1,fnk77385__$1,p__77345__$1,G__77390__$1,map77384__$1,owner77343__$1,data_sources__$1,current_db__$1,output_schema77386__$1,validate__837__auto____$1,data__24427__auto____$1,ufv____$1,opts__24428__auto____$1,input_schema77387__$1,meta77405));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77386,input_schema77387,input_checker77388,output_checker77389,vec__77383,opts__24428__auto__))
;
}
return (new stuttaford.radiant.datalog.t77404(query,output_checker77389,datalog,current_data_source,input_checker77388,owner,data,vec__77383,fnk77385,p__77345,G__77390,map77384,owner77343,data_sources,current_db,output_schema77386,validate__837__auto__,data__24427__auto__,ufv__,opts__24428__auto__,input_schema77387,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___77475 = (function (){var G__77414 = o__840__auto__;return (output_checker77389.cljs$core$IFn$_invoke$arity$1 ? output_checker77389.cljs$core$IFn$_invoke$arity$1(G__77414) : output_checker77389.call(null,G__77414));
})();if(cljs.core.truth_(temp__4126__auto___77475))
{var error__839__auto___77476 = temp__4126__auto___77475;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk77385","fnk77385",-484236276,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77476], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema77386,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77476], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema77386,input_schema77387,input_checker77388,output_checker77389,vec__77383,opts__24428__auto__))
,schema.core.make_fn_schema(output_schema77386,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema77387], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24428__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner77343,new cljs.core.Keyword(null,"data","data",-232669377),data__24427__auto__], null));
};
var datalog = function (data__24427__auto__,owner77343,var_args){
var p__77345 = null;if (arguments.length > 2) {
  p__77345 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datalog__delegate.call(this,data__24427__auto__,owner77343,p__77345);};
datalog.cljs$lang$maxFixedArity = 2;
datalog.cljs$lang$applyTo = (function (arglist__77482){
var data__24427__auto__ = cljs.core.first(arglist__77482);
arglist__77482 = cljs.core.next(arglist__77482);
var owner77343 = cljs.core.first(arglist__77482);
var p__77345 = cljs.core.rest(arglist__77482);
return datalog__delegate(data__24427__auto__,owner77343,p__77345);
});
datalog.cljs$core$IFn$_invoke$arity$variadic = datalog__delegate;
return datalog;
})()
;
stuttaford.radiant.datalog.__GT_datalog = (function() {
var __GT_datalog = null;
var __GT_datalog__1 = (function (cursor__24396__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datalog.datalog,cursor__24396__auto__);
});
var __GT_datalog__2 = (function (cursor__24396__auto__,m77344){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datalog.datalog,cursor__24396__auto__,m77344);
});
__GT_datalog = function(cursor__24396__auto__,m77344){
switch(arguments.length){
case 1:
return __GT_datalog__1.call(this,cursor__24396__auto__);
case 2:
return __GT_datalog__2.call(this,cursor__24396__auto__,m77344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_datalog.cljs$core$IFn$_invoke$arity$1 = __GT_datalog__1;
__GT_datalog.cljs$core$IFn$_invoke$arity$2 = __GT_datalog__2;
return __GT_datalog;
})()
;
//# sourceMappingURL=datalog.js.map