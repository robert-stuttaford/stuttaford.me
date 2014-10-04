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
stuttaford.radiant.datalog.maybe_parse_query = (function maybe_parse_query(s){try{var G__41278 = s;var G__41278__$1 = (((G__41278 == null))?null:cljs.reader.read_string(G__41278));var G__41278__$2 = (((G__41278__$1 == null))?null:datascript.query.parse_query(G__41278__$1));return G__41278__$2;
}catch (e41277){var e = e41277;return null;
}});
stuttaford.radiant.datalog.handle_query_input_change = (function handle_query_input_change(data,owner){var input = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"input");var text = input.value;return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"query","query",-1288509510),text);
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.datalog.query_input = (function() { 
var query_input__delegate = function (data__24175__auto__,owner41279,p__41281){var vec__41304 = p__41281;var opts__24176__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41304,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema41307 = schema.core.Any;var input_schema41308 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map41305","map41305",1874189232,null))], null);var input_checker41309 = schema.core.checker(input_schema41308);var output_checker41310 = schema.core.checker(output_schema41307);return schema.core.schematize_fn(((function (ufv__,output_schema41307,input_schema41308,input_checker41309,output_checker41310,vec__41304,opts__24176__auto__){
return (function fnk41306(G__41311){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___41326 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__41311], null);var temp__4126__auto___41327 = (function (){var G__41319 = args__838__auto___41326;return (input_checker41309.cljs$core$IFn$_invoke$arity$1 ? input_checker41309.cljs$core$IFn$_invoke$arity$1(G__41319) : input_checker41309.call(null,G__41319));
})();if(cljs.core.truth_(temp__4126__auto___41327))
{var error__839__auto___41328 = temp__4126__auto___41327;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk41306","fnk41306",-829406996,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41328], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema41308,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___41326,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41328], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map41305 = G__41311;while(true){
if(cljs.core.map_QMARK_(map41305))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map41305], 0))));
}
var data = plumbing.fnk.schema.safe_get(map41305,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var query = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map41305,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datalog.t41320 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datalog.t41320 = (function (query,owner,query_input,data,input_schema41308,output_checker41310,p__41281,fnk41306,output_schema41307,owner41279,input_checker41309,G__41311,map41305,data__24175__auto__,vec__41304,opts__24176__auto__,validate__837__auto__,ufv__,meta41321){
this.query = query;
this.owner = owner;
this.query_input = query_input;
this.data = data;
this.input_schema41308 = input_schema41308;
this.output_checker41310 = output_checker41310;
this.p__41281 = p__41281;
this.fnk41306 = fnk41306;
this.output_schema41307 = output_schema41307;
this.owner41279 = owner41279;
this.input_checker41309 = input_checker41309;
this.G__41311 = G__41311;
this.map41305 = map41305;
this.data__24175__auto__ = data__24175__auto__;
this.vec__41304 = vec__41304;
this.opts__24176__auto__ = opts__24176__auto__;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.meta41321 = meta41321;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datalog.t41320.cljs$lang$type = true;
stuttaford.radiant.datalog.t41320.cljs$lang$ctorStr = "stuttaford.radiant.datalog/t41320";
stuttaford.radiant.datalog.t41320.cljs$lang$ctorPrWriter = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema41307,input_schema41308,input_checker41309,output_checker41310,vec__41304,opts__24176__auto__){
return (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"stuttaford.radiant.datalog/t41320");
});})(owner,query,data,validate__837__auto__,ufv__,output_schema41307,input_schema41308,input_checker41309,output_checker41310,vec__41304,opts__24176__auto__))
;
stuttaford.radiant.datalog.t41320.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datalog.t41320.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema41307,input_schema41308,input_checker41309,output_checker41310,vec__41304,opts__24176__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "query-input";
});})(owner,query,data,validate__837__auto__,ufv__,output_schema41307,input_schema41308,input_checker41309,output_checker41310,vec__41304,opts__24176__auto__))
;
stuttaford.radiant.datalog.t41320.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.datalog.t41320.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema41307,input_schema41308,input_checker41309,output_checker41310,vec__41304,opts__24176__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"query-input"], null),cljs.core.array_seq([om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(6)], null),cljs.core.array_seq([om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),true,new cljs.core.Keyword(null,"rows","rows",850049680),(8),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"[:find ?e ?v :in $ :where [?e :attr ?v]]",new cljs.core.Keyword(null,"value","value",305978217),self__.query,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),((cljs.core.seq(self__.query))?(cljs.core.truth_(stuttaford.radiant.datalog.maybe_parse_query(self__.query))?"success":"error"):null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (___$1,owner,query,data,validate__837__auto__,ufv__,output_schema41307,input_schema41308,input_checker41309,output_checker41310,vec__41304,opts__24176__auto__){
return (function (){return stuttaford.radiant.datalog.handle_query_input_change(self__.data,self__.owner);
});})(___$1,owner,query,data,validate__837__auto__,ufv__,output_schema41307,input_schema41308,input_checker41309,output_checker41310,vec__41304,opts__24176__auto__))
], null))], 0)),om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(6)], null),cljs.core.array_seq([(function (){var attrs41323 = (function (){var temp__4124__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4124__auto__))
{var parsed_query = temp__4124__auto__;var map__41324 = parsed_query;var map__41324__$1 = ((cljs.core.seq_QMARK_(map__41324))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41324):map__41324);var where = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41324__$1,new cljs.core.Keyword(null,"where","where",-2044795965));var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41324__$1,new cljs.core.Keyword(null,"in","in",-1531184865));var find = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41324__$1,new cljs.core.Keyword(null,"find","find",496279456));return ("[:find "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",find)))+"\n :in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",in$)))+"\n :where\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose("\n ",where)))+"]");
} else
{return "Not a valid query.";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.pre,((cljs.core.map_QMARK_(attrs41323))?sablono.interpreter.attributes(attrs41323):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs41323))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs41323)], null))));
})()], 0))], 0));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema41307,input_schema41308,input_checker41309,output_checker41310,vec__41304,opts__24176__auto__))
;
stuttaford.radiant.datalog.t41320.prototype.om$core$IInitState$ = true;
stuttaford.radiant.datalog.t41320.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema41307,input_schema41308,input_checker41309,output_checker41310,vec__41304,opts__24176__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),""], null);
});})(owner,query,data,validate__837__auto__,ufv__,output_schema41307,input_schema41308,input_checker41309,output_checker41310,vec__41304,opts__24176__auto__))
;
stuttaford.radiant.datalog.t41320.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema41307,input_schema41308,input_checker41309,output_checker41310,vec__41304,opts__24176__auto__){
return (function (_41322){var self__ = this;
var _41322__$1 = this;return self__.meta41321;
});})(owner,query,data,validate__837__auto__,ufv__,output_schema41307,input_schema41308,input_checker41309,output_checker41310,vec__41304,opts__24176__auto__))
;
stuttaford.radiant.datalog.t41320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema41307,input_schema41308,input_checker41309,output_checker41310,vec__41304,opts__24176__auto__){
return (function (_41322,meta41321__$1){var self__ = this;
var _41322__$1 = this;return (new stuttaford.radiant.datalog.t41320(self__.query,self__.owner,self__.query_input,self__.data,self__.input_schema41308,self__.output_checker41310,self__.p__41281,self__.fnk41306,self__.output_schema41307,self__.owner41279,self__.input_checker41309,self__.G__41311,self__.map41305,self__.data__24175__auto__,self__.vec__41304,self__.opts__24176__auto__,self__.validate__837__auto__,self__.ufv__,meta41321__$1));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema41307,input_schema41308,input_checker41309,output_checker41310,vec__41304,opts__24176__auto__))
;
stuttaford.radiant.datalog.__GT_t41320 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema41307,input_schema41308,input_checker41309,output_checker41310,vec__41304,opts__24176__auto__){
return (function __GT_t41320(query__$1,owner__$1,query_input__$1,data__$1,input_schema41308__$1,output_checker41310__$1,p__41281__$1,fnk41306__$1,output_schema41307__$1,owner41279__$1,input_checker41309__$1,G__41311__$1,map41305__$1,data__24175__auto____$1,vec__41304__$1,opts__24176__auto____$1,validate__837__auto____$1,ufv____$1,meta41321){return (new stuttaford.radiant.datalog.t41320(query__$1,owner__$1,query_input__$1,data__$1,input_schema41308__$1,output_checker41310__$1,p__41281__$1,fnk41306__$1,output_schema41307__$1,owner41279__$1,input_checker41309__$1,G__41311__$1,map41305__$1,data__24175__auto____$1,vec__41304__$1,opts__24176__auto____$1,validate__837__auto____$1,ufv____$1,meta41321));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema41307,input_schema41308,input_checker41309,output_checker41310,vec__41304,opts__24176__auto__))
;
}
return (new stuttaford.radiant.datalog.t41320(query,owner,query_input,data,input_schema41308,output_checker41310,p__41281,fnk41306,output_schema41307,owner41279,input_checker41309,G__41311,map41305,data__24175__auto__,vec__41304,opts__24176__auto__,validate__837__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___41329 = (function (){var G__41325 = o__840__auto__;return (output_checker41310.cljs$core$IFn$_invoke$arity$1 ? output_checker41310.cljs$core$IFn$_invoke$arity$1(G__41325) : output_checker41310.call(null,G__41325));
})();if(cljs.core.truth_(temp__4126__auto___41329))
{var error__839__auto___41330 = temp__4126__auto___41329;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk41306","fnk41306",-829406996,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41330], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema41307,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41330], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema41307,input_schema41308,input_checker41309,output_checker41310,vec__41304,opts__24176__auto__))
,schema.core.make_fn_schema(output_schema41307,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema41308], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24176__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner41279,new cljs.core.Keyword(null,"data","data",-232669377),data__24175__auto__], null));
};
var query_input = function (data__24175__auto__,owner41279,var_args){
var p__41281 = null;if (arguments.length > 2) {
  p__41281 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return query_input__delegate.call(this,data__24175__auto__,owner41279,p__41281);};
query_input.cljs$lang$maxFixedArity = 2;
query_input.cljs$lang$applyTo = (function (arglist__41331){
var data__24175__auto__ = cljs.core.first(arglist__41331);
arglist__41331 = cljs.core.next(arglist__41331);
var owner41279 = cljs.core.first(arglist__41331);
var p__41281 = cljs.core.rest(arglist__41331);
return query_input__delegate(data__24175__auto__,owner41279,p__41281);
});
query_input.cljs$core$IFn$_invoke$arity$variadic = query_input__delegate;
return query_input;
})()
;
stuttaford.radiant.datalog.__GT_query_input = (function() {
var __GT_query_input = null;
var __GT_query_input__1 = (function (cursor__24144__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datalog.query_input,cursor__24144__auto__);
});
var __GT_query_input__2 = (function (cursor__24144__auto__,m41280){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datalog.query_input,cursor__24144__auto__,m41280);
});
__GT_query_input = function(cursor__24144__auto__,m41280){
switch(arguments.length){
case 1:
return __GT_query_input__1.call(this,cursor__24144__auto__);
case 2:
return __GT_query_input__2.call(this,cursor__24144__auto__,m41280);
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
var datalog__delegate = function (data__24175__auto__,owner41332,p__41334){var vec__41375 = p__41334;var opts__24176__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41375,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema41378 = schema.core.Any;var input_schema41379 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"query","query",-1288509510)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-db","current-db",213667882)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684)),schema.core.Any,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map41376","map41376",-2060777504,null))], null);var input_checker41380 = schema.core.checker(input_schema41379);var output_checker41381 = schema.core.checker(output_schema41378);return schema.core.schematize_fn(((function (ufv__,output_schema41378,input_schema41379,input_checker41380,output_checker41381,vec__41375,opts__24176__auto__){
return (function fnk41377(G__41382){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___41415 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__41382], null);var temp__4126__auto___41416 = (function (){var G__41399 = args__838__auto___41415;return (input_checker41380.cljs$core$IFn$_invoke$arity$1 ? input_checker41380.cljs$core$IFn$_invoke$arity$1(G__41399) : input_checker41380.call(null,G__41399));
})();if(cljs.core.truth_(temp__4126__auto___41416))
{var error__839__auto___41417 = temp__4126__auto___41416;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk41377","fnk41377",1400694834,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41417], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema41379,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___41415,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41417], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map41376 = G__41382;while(true){
if(cljs.core.map_QMARK_(map41376))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map41376], 0))));
}
var data = plumbing.fnk.schema.safe_get(map41376,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var data_sources = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684),null);var current_db = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-db","current-db",213667882),null);var query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"query","query",-1288509510),"");var owner = plumbing.fnk.schema.safe_get(map41376,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datalog.t41400 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datalog.t41400 = (function (map41376,owner41332,query,G__41382,datalog,output_schema41378,current_data_source,owner,output_checker41381,data,input_checker41380,input_schema41379,data_sources,current_db,fnk41377,data__24175__auto__,vec__41375,opts__24176__auto__,validate__837__auto__,ufv__,p__41334,meta41401){
this.map41376 = map41376;
this.owner41332 = owner41332;
this.query = query;
this.G__41382 = G__41382;
this.datalog = datalog;
this.output_schema41378 = output_schema41378;
this.current_data_source = current_data_source;
this.owner = owner;
this.output_checker41381 = output_checker41381;
this.data = data;
this.input_checker41380 = input_checker41380;
this.input_schema41379 = input_schema41379;
this.data_sources = data_sources;
this.current_db = current_db;
this.fnk41377 = fnk41377;
this.data__24175__auto__ = data__24175__auto__;
this.vec__41375 = vec__41375;
this.opts__24176__auto__ = opts__24176__auto__;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.p__41334 = p__41334;
this.meta41401 = meta41401;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datalog.t41400.cljs$lang$type = true;
stuttaford.radiant.datalog.t41400.cljs$lang$ctorStr = "stuttaford.radiant.datalog/t41400";
stuttaford.radiant.datalog.t41400.cljs$lang$ctorPrWriter = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41378,input_schema41379,input_checker41380,output_checker41381,vec__41375,opts__24176__auto__){
return (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"stuttaford.radiant.datalog/t41400");
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41378,input_schema41379,input_checker41380,output_checker41381,vec__41375,opts__24176__auto__))
;
stuttaford.radiant.datalog.t41400.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datalog.t41400.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41378,input_schema41379,input_checker41380,output_checker41381,vec__41375,opts__24176__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "datalog";
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41378,input_schema41379,input_checker41380,output_checker41381,vec__41375,opts__24176__auto__))
;
stuttaford.radiant.datalog.t41400.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.datalog.t41400.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41378,input_schema41379,input_checker41380,output_checker41381,vec__41375,opts__24176__auto__){
return (function (_,p__41403){var self__ = this;
var map__41404 = p__41403;var map__41404__$1 = ((cljs.core.seq_QMARK_(map__41404))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41404):map__41404);var sort = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41404__$1,new cljs.core.Keyword(null,"sort","sort",953465918),(0));var ___$1 = this;var attrs41405 = stuttaford.radiant.datalog.__GT_query_input.cljs$core$IFn$_invoke$arity$1(self__.data);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs41405))?sablono.interpreter.attributes(attrs41405):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs41405))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var temp__4126__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4126__auto__))
{var query__$2 = temp__4126__auto__;return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(query__$2)),new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var G__41406 = query__$2;var G__41407 = self__.current_db;return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__41406,G__41407) : datascript.q.call(null,G__41406,G__41407));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),true], null)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null)),((cljs.core.not(stuttaford.om.common.config.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"debug?","debug?",-1831756173))))?cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__41408 = query__$2;var G__41409 = self__.current_db;return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__41408,G__41409) : datascript.q.call(null,G__41408,G__41409));
})()], 0))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.current_db], 0))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([query__$2], 0))], null)):null));
} else
{return null;
}
})())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs41405),sablono.interpreter.interpret((function (){var temp__4126__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4126__auto__))
{var query__$2 = temp__4126__auto__;return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(query__$2)),new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var G__41410 = query__$2;var G__41411 = self__.current_db;return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__41410,G__41411) : datascript.q.call(null,G__41410,G__41411));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),true], null)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null)),((cljs.core.not(stuttaford.om.common.config.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"debug?","debug?",-1831756173))))?cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__41412 = query__$2;var G__41413 = self__.current_db;return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__41412,G__41413) : datascript.q.call(null,G__41412,G__41413));
})()], 0))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.current_db], 0))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([query__$2], 0))], null)):null));
} else
{return null;
}
})())], null))));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41378,input_schema41379,input_checker41380,output_checker41381,vec__41375,opts__24176__auto__))
;
stuttaford.radiant.datalog.t41400.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41378,input_schema41379,input_checker41380,output_checker41381,vec__41375,opts__24176__auto__){
return (function (_41402){var self__ = this;
var _41402__$1 = this;return self__.meta41401;
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41378,input_schema41379,input_checker41380,output_checker41381,vec__41375,opts__24176__auto__))
;
stuttaford.radiant.datalog.t41400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41378,input_schema41379,input_checker41380,output_checker41381,vec__41375,opts__24176__auto__){
return (function (_41402,meta41401__$1){var self__ = this;
var _41402__$1 = this;return (new stuttaford.radiant.datalog.t41400(self__.map41376,self__.owner41332,self__.query,self__.G__41382,self__.datalog,self__.output_schema41378,self__.current_data_source,self__.owner,self__.output_checker41381,self__.data,self__.input_checker41380,self__.input_schema41379,self__.data_sources,self__.current_db,self__.fnk41377,self__.data__24175__auto__,self__.vec__41375,self__.opts__24176__auto__,self__.validate__837__auto__,self__.ufv__,self__.p__41334,meta41401__$1));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41378,input_schema41379,input_checker41380,output_checker41381,vec__41375,opts__24176__auto__))
;
stuttaford.radiant.datalog.__GT_t41400 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41378,input_schema41379,input_checker41380,output_checker41381,vec__41375,opts__24176__auto__){
return (function __GT_t41400(map41376__$1,owner41332__$1,query__$1,G__41382__$1,datalog__$1,output_schema41378__$1,current_data_source__$1,owner__$1,output_checker41381__$1,data__$1,input_checker41380__$1,input_schema41379__$1,data_sources__$1,current_db__$1,fnk41377__$1,data__24175__auto____$1,vec__41375__$1,opts__24176__auto____$1,validate__837__auto____$1,ufv____$1,p__41334__$1,meta41401){return (new stuttaford.radiant.datalog.t41400(map41376__$1,owner41332__$1,query__$1,G__41382__$1,datalog__$1,output_schema41378__$1,current_data_source__$1,owner__$1,output_checker41381__$1,data__$1,input_checker41380__$1,input_schema41379__$1,data_sources__$1,current_db__$1,fnk41377__$1,data__24175__auto____$1,vec__41375__$1,opts__24176__auto____$1,validate__837__auto____$1,ufv____$1,p__41334__$1,meta41401));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41378,input_schema41379,input_checker41380,output_checker41381,vec__41375,opts__24176__auto__))
;
}
return (new stuttaford.radiant.datalog.t41400(map41376,owner41332,query,G__41382,datalog,output_schema41378,current_data_source,owner,output_checker41381,data,input_checker41380,input_schema41379,data_sources,current_db,fnk41377,data__24175__auto__,vec__41375,opts__24176__auto__,validate__837__auto__,ufv__,p__41334,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___41418 = (function (){var G__41414 = o__840__auto__;return (output_checker41381.cljs$core$IFn$_invoke$arity$1 ? output_checker41381.cljs$core$IFn$_invoke$arity$1(G__41414) : output_checker41381.call(null,G__41414));
})();if(cljs.core.truth_(temp__4126__auto___41418))
{var error__839__auto___41419 = temp__4126__auto___41418;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk41377","fnk41377",1400694834,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41419], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema41378,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41419], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema41378,input_schema41379,input_checker41380,output_checker41381,vec__41375,opts__24176__auto__))
,schema.core.make_fn_schema(output_schema41378,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema41379], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24176__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner41332,new cljs.core.Keyword(null,"data","data",-232669377),data__24175__auto__], null));
};
var datalog = function (data__24175__auto__,owner41332,var_args){
var p__41334 = null;if (arguments.length > 2) {
  p__41334 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datalog__delegate.call(this,data__24175__auto__,owner41332,p__41334);};
datalog.cljs$lang$maxFixedArity = 2;
datalog.cljs$lang$applyTo = (function (arglist__41420){
var data__24175__auto__ = cljs.core.first(arglist__41420);
arglist__41420 = cljs.core.next(arglist__41420);
var owner41332 = cljs.core.first(arglist__41420);
var p__41334 = cljs.core.rest(arglist__41420);
return datalog__delegate(data__24175__auto__,owner41332,p__41334);
});
datalog.cljs$core$IFn$_invoke$arity$variadic = datalog__delegate;
return datalog;
})()
;
stuttaford.radiant.datalog.__GT_datalog = (function() {
var __GT_datalog = null;
var __GT_datalog__1 = (function (cursor__24144__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datalog.datalog,cursor__24144__auto__);
});
var __GT_datalog__2 = (function (cursor__24144__auto__,m41333){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datalog.datalog,cursor__24144__auto__,m41333);
});
__GT_datalog = function(cursor__24144__auto__,m41333){
switch(arguments.length){
case 1:
return __GT_datalog__1.call(this,cursor__24144__auto__);
case 2:
return __GT_datalog__2.call(this,cursor__24144__auto__,m41333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_datalog.cljs$core$IFn$_invoke$arity$1 = __GT_datalog__1;
__GT_datalog.cljs$core$IFn$_invoke$arity$2 = __GT_datalog__2;
return __GT_datalog;
})()
;
//# sourceMappingURL=datalog.js.map