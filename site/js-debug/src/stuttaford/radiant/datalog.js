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
stuttaford.radiant.datalog.maybe_parse_query = (function maybe_parse_query(s){try{var G__78099 = s;var G__78099__$1 = (((G__78099 == null))?null:cljs.reader.read_string(G__78099));var G__78099__$2 = (((G__78099__$1 == null))?null:datascript.query.parse_query(G__78099__$1));return G__78099__$2;
}catch (e78098){var e = e78098;return null;
}});
stuttaford.radiant.datalog.handle_query_input_change = (function handle_query_input_change(data,owner){var input = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"input");var text = input.value;return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"query","query",-1288509510),text);
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.datalog.query_input = (function() { 
var query_input__delegate = function (data__24144__auto__,owner78100,p__78102){var vec__78146 = p__78102;var opts__24145__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78146,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema78149 = schema.core.Any;var input_schema78150 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map78147","map78147",-1713819774,null))], null);var input_checker78151 = schema.core.checker(input_schema78150);var output_checker78152 = schema.core.checker(output_schema78149);return schema.core.schematize_fn(((function (ufv__,output_schema78149,input_schema78150,input_checker78151,output_checker78152,vec__78146,opts__24145__auto__){
return (function fnk78148(G__78153){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___78246 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__78153], null);var temp__4126__auto___78249 = (function (){var G__78195 = args__838__auto___78246;return (input_checker78151.cljs$core$IFn$_invoke$arity$1 ? input_checker78151.cljs$core$IFn$_invoke$arity$1(G__78195) : input_checker78151.call(null,G__78195));
})();if(cljs.core.truth_(temp__4126__auto___78249))
{var error__839__auto___78250 = temp__4126__auto___78249;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk78148","fnk78148",27853645,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___78250], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema78150,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___78246,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___78250], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map78147 = G__78153;while(true){
if(cljs.core.map_QMARK_(map78147))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map78147], 0))));
}
var data = plumbing.fnk.schema.safe_get(map78147,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var query = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map78147,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datalog.t78200 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datalog.t78200 = (function (query,map78147,owner,query_input,data,data__24144__auto__,opts__24145__auto__,output_schema78149,vec__78146,fnk78148,p__78102,G__78153,output_checker78152,input_schema78150,validate__837__auto__,ufv__,input_checker78151,owner78100,meta78201){
this.query = query;
this.map78147 = map78147;
this.owner = owner;
this.query_input = query_input;
this.data = data;
this.data__24144__auto__ = data__24144__auto__;
this.opts__24145__auto__ = opts__24145__auto__;
this.output_schema78149 = output_schema78149;
this.vec__78146 = vec__78146;
this.fnk78148 = fnk78148;
this.p__78102 = p__78102;
this.G__78153 = G__78153;
this.output_checker78152 = output_checker78152;
this.input_schema78150 = input_schema78150;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.input_checker78151 = input_checker78151;
this.owner78100 = owner78100;
this.meta78201 = meta78201;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datalog.t78200.cljs$lang$type = true;
stuttaford.radiant.datalog.t78200.cljs$lang$ctorStr = "stuttaford.radiant.datalog/t78200";
stuttaford.radiant.datalog.t78200.cljs$lang$ctorPrWriter = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema78149,input_schema78150,input_checker78151,output_checker78152,vec__78146,opts__24145__auto__){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"stuttaford.radiant.datalog/t78200");
});})(owner,query,data,validate__837__auto__,ufv__,output_schema78149,input_schema78150,input_checker78151,output_checker78152,vec__78146,opts__24145__auto__))
;
stuttaford.radiant.datalog.t78200.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datalog.t78200.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema78149,input_schema78150,input_checker78151,output_checker78152,vec__78146,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "query-input";
});})(owner,query,data,validate__837__auto__,ufv__,output_schema78149,input_schema78150,input_checker78151,output_checker78152,vec__78146,opts__24145__auto__))
;
stuttaford.radiant.datalog.t78200.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.datalog.t78200.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema78149,input_schema78150,input_checker78151,output_checker78152,vec__78146,opts__24145__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"query-input"], null),cljs.core.array_seq([om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(6)], null),cljs.core.array_seq([om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),true,new cljs.core.Keyword(null,"rows","rows",850049680),(8),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"[:find ?e ?v :in $ :where [?e :attr ?v]]",new cljs.core.Keyword(null,"value","value",305978217),self__.query,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),((cljs.core.seq(self__.query))?(cljs.core.truth_(stuttaford.radiant.datalog.maybe_parse_query(self__.query))?"success":"error"):null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (___$1,owner,query,data,validate__837__auto__,ufv__,output_schema78149,input_schema78150,input_checker78151,output_checker78152,vec__78146,opts__24145__auto__){
return (function (){return stuttaford.radiant.datalog.handle_query_input_change(self__.data,self__.owner);
});})(___$1,owner,query,data,validate__837__auto__,ufv__,output_schema78149,input_schema78150,input_checker78151,output_checker78152,vec__78146,opts__24145__auto__))
], null))], 0)),om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(6)], null),cljs.core.array_seq([(function (){var attrs78213 = (function (){var temp__4124__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4124__auto__))
{var parsed_query = temp__4124__auto__;var map__78216 = parsed_query;var map__78216__$1 = ((cljs.core.seq_QMARK_(map__78216))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78216):map__78216);var where = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78216__$1,new cljs.core.Keyword(null,"where","where",-2044795965));var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78216__$1,new cljs.core.Keyword(null,"in","in",-1531184865));var find = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78216__$1,new cljs.core.Keyword(null,"find","find",496279456));return ("[:find "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",find)))+"\n :in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",in$)))+"\n :where\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose("\n ",where)))+"]");
} else
{return "Not a valid query.";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.pre,((cljs.core.map_QMARK_(attrs78213))?sablono.interpreter.attributes(attrs78213):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs78213))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs78213)], null))));
})()], 0))], 0));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema78149,input_schema78150,input_checker78151,output_checker78152,vec__78146,opts__24145__auto__))
;
stuttaford.radiant.datalog.t78200.prototype.om$core$IInitState$ = true;
stuttaford.radiant.datalog.t78200.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema78149,input_schema78150,input_checker78151,output_checker78152,vec__78146,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),""], null);
});})(owner,query,data,validate__837__auto__,ufv__,output_schema78149,input_schema78150,input_checker78151,output_checker78152,vec__78146,opts__24145__auto__))
;
stuttaford.radiant.datalog.t78200.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema78149,input_schema78150,input_checker78151,output_checker78152,vec__78146,opts__24145__auto__){
return (function (_78202){var self__ = this;
var _78202__$1 = this;return self__.meta78201;
});})(owner,query,data,validate__837__auto__,ufv__,output_schema78149,input_schema78150,input_checker78151,output_checker78152,vec__78146,opts__24145__auto__))
;
stuttaford.radiant.datalog.t78200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema78149,input_schema78150,input_checker78151,output_checker78152,vec__78146,opts__24145__auto__){
return (function (_78202,meta78201__$1){var self__ = this;
var _78202__$1 = this;return (new stuttaford.radiant.datalog.t78200(self__.query,self__.map78147,self__.owner,self__.query_input,self__.data,self__.data__24144__auto__,self__.opts__24145__auto__,self__.output_schema78149,self__.vec__78146,self__.fnk78148,self__.p__78102,self__.G__78153,self__.output_checker78152,self__.input_schema78150,self__.validate__837__auto__,self__.ufv__,self__.input_checker78151,self__.owner78100,meta78201__$1));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema78149,input_schema78150,input_checker78151,output_checker78152,vec__78146,opts__24145__auto__))
;
stuttaford.radiant.datalog.__GT_t78200 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema78149,input_schema78150,input_checker78151,output_checker78152,vec__78146,opts__24145__auto__){
return (function __GT_t78200(query__$1,map78147__$1,owner__$1,query_input__$1,data__$1,data__24144__auto____$1,opts__24145__auto____$1,output_schema78149__$1,vec__78146__$1,fnk78148__$1,p__78102__$1,G__78153__$1,output_checker78152__$1,input_schema78150__$1,validate__837__auto____$1,ufv____$1,input_checker78151__$1,owner78100__$1,meta78201){return (new stuttaford.radiant.datalog.t78200(query__$1,map78147__$1,owner__$1,query_input__$1,data__$1,data__24144__auto____$1,opts__24145__auto____$1,output_schema78149__$1,vec__78146__$1,fnk78148__$1,p__78102__$1,G__78153__$1,output_checker78152__$1,input_schema78150__$1,validate__837__auto____$1,ufv____$1,input_checker78151__$1,owner78100__$1,meta78201));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema78149,input_schema78150,input_checker78151,output_checker78152,vec__78146,opts__24145__auto__))
;
}
return (new stuttaford.radiant.datalog.t78200(query,map78147,owner,query_input,data,data__24144__auto__,opts__24145__auto__,output_schema78149,vec__78146,fnk78148,p__78102,G__78153,output_checker78152,input_schema78150,validate__837__auto__,ufv__,input_checker78151,owner78100,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___78274 = (function (){var G__78230 = o__840__auto__;return (output_checker78152.cljs$core$IFn$_invoke$arity$1 ? output_checker78152.cljs$core$IFn$_invoke$arity$1(G__78230) : output_checker78152.call(null,G__78230));
})();if(cljs.core.truth_(temp__4126__auto___78274))
{var error__839__auto___78277 = temp__4126__auto___78274;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk78148","fnk78148",27853645,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___78277], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema78149,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___78277], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema78149,input_schema78150,input_checker78151,output_checker78152,vec__78146,opts__24145__auto__))
,schema.core.make_fn_schema(output_schema78149,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema78150], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner78100,new cljs.core.Keyword(null,"data","data",-232669377),data__24144__auto__], null));
};
var query_input = function (data__24144__auto__,owner78100,var_args){
var p__78102 = null;if (arguments.length > 2) {
  p__78102 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return query_input__delegate.call(this,data__24144__auto__,owner78100,p__78102);};
query_input.cljs$lang$maxFixedArity = 2;
query_input.cljs$lang$applyTo = (function (arglist__78280){
var data__24144__auto__ = cljs.core.first(arglist__78280);
arglist__78280 = cljs.core.next(arglist__78280);
var owner78100 = cljs.core.first(arglist__78280);
var p__78102 = cljs.core.rest(arglist__78280);
return query_input__delegate(data__24144__auto__,owner78100,p__78102);
});
query_input.cljs$core$IFn$_invoke$arity$variadic = query_input__delegate;
return query_input;
})()
;
stuttaford.radiant.datalog.__GT_query_input = (function() {
var __GT_query_input = null;
var __GT_query_input__1 = (function (cursor__24113__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datalog.query_input,cursor__24113__auto__);
});
var __GT_query_input__2 = (function (cursor__24113__auto__,m78101){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datalog.query_input,cursor__24113__auto__,m78101);
});
__GT_query_input = function(cursor__24113__auto__,m78101){
switch(arguments.length){
case 1:
return __GT_query_input__1.call(this,cursor__24113__auto__);
case 2:
return __GT_query_input__2.call(this,cursor__24113__auto__,m78101);
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
var datalog__delegate = function (data__24144__auto__,owner78285,p__78288){var vec__78386 = p__78288;var opts__24145__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78386,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema78392 = schema.core.Any;var input_schema78393 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"query","query",-1288509510)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-db","current-db",213667882)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684)),schema.core.Any,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map78388","map78388",999812939,null))], null);var input_checker78394 = schema.core.checker(input_schema78393);var output_checker78395 = schema.core.checker(output_schema78392);return schema.core.schematize_fn(((function (ufv__,output_schema78392,input_schema78393,input_checker78394,output_checker78395,vec__78386,opts__24145__auto__){
return (function fnk78390(G__78396){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___78503 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__78396], null);var temp__4126__auto___78505 = (function (){var G__78448 = args__838__auto___78503;return (input_checker78394.cljs$core$IFn$_invoke$arity$1 ? input_checker78394.cljs$core$IFn$_invoke$arity$1(G__78448) : input_checker78394.call(null,G__78448));
})();if(cljs.core.truth_(temp__4126__auto___78505))
{var error__839__auto___78508 = temp__4126__auto___78505;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk78390","fnk78390",1078435462,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___78508], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema78393,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___78503,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___78508], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map78388 = G__78396;while(true){
if(cljs.core.map_QMARK_(map78388))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map78388], 0))));
}
var data = plumbing.fnk.schema.safe_get(map78388,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var data_sources = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684),null);var current_db = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-db","current-db",213667882),null);var query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"query","query",-1288509510),"");var owner = plumbing.fnk.schema.safe_get(map78388,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datalog.t78456 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datalog.t78456 = (function (output_checker78395,query,datalog,current_data_source,owner,data,fnk78390,data__24144__auto__,owner78285,opts__24145__auto__,map78388,G__78396,data_sources,current_db,vec__78386,input_checker78394,input_schema78393,p__78288,validate__837__auto__,ufv__,output_schema78392,meta78457){
this.output_checker78395 = output_checker78395;
this.query = query;
this.datalog = datalog;
this.current_data_source = current_data_source;
this.owner = owner;
this.data = data;
this.fnk78390 = fnk78390;
this.data__24144__auto__ = data__24144__auto__;
this.owner78285 = owner78285;
this.opts__24145__auto__ = opts__24145__auto__;
this.map78388 = map78388;
this.G__78396 = G__78396;
this.data_sources = data_sources;
this.current_db = current_db;
this.vec__78386 = vec__78386;
this.input_checker78394 = input_checker78394;
this.input_schema78393 = input_schema78393;
this.p__78288 = p__78288;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.output_schema78392 = output_schema78392;
this.meta78457 = meta78457;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datalog.t78456.cljs$lang$type = true;
stuttaford.radiant.datalog.t78456.cljs$lang$ctorStr = "stuttaford.radiant.datalog/t78456";
stuttaford.radiant.datalog.t78456.cljs$lang$ctorPrWriter = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema78392,input_schema78393,input_checker78394,output_checker78395,vec__78386,opts__24145__auto__){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"stuttaford.radiant.datalog/t78456");
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema78392,input_schema78393,input_checker78394,output_checker78395,vec__78386,opts__24145__auto__))
;
stuttaford.radiant.datalog.t78456.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datalog.t78456.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema78392,input_schema78393,input_checker78394,output_checker78395,vec__78386,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "datalog";
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema78392,input_schema78393,input_checker78394,output_checker78395,vec__78386,opts__24145__auto__))
;
stuttaford.radiant.datalog.t78456.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.datalog.t78456.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema78392,input_schema78393,input_checker78394,output_checker78395,vec__78386,opts__24145__auto__){
return (function (_,p__78466){var self__ = this;
var map__78468 = p__78466;var map__78468__$1 = ((cljs.core.seq_QMARK_(map__78468))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78468):map__78468);var sort = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__78468__$1,new cljs.core.Keyword(null,"sort","sort",953465918),(0));var ___$1 = this;var attrs78470 = stuttaford.radiant.datalog.__GT_query_input.cljs$core$IFn$_invoke$arity$1(self__.data);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs78470))?sablono.interpreter.attributes(attrs78470):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs78470))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var temp__4126__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4126__auto__))
{var query__$2 = temp__4126__auto__;return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(query__$2)),new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var G__78475 = query__$2;var G__78476 = self__.current_db;return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__78475,G__78476) : datascript.q.call(null,G__78475,G__78476));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),true], null)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null));
} else
{return null;
}
})())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs78470),sablono.interpreter.interpret((function (){var temp__4126__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4126__auto__))
{var query__$2 = temp__4126__auto__;return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(query__$2)),new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var G__78480 = query__$2;var G__78481 = self__.current_db;return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__78480,G__78481) : datascript.q.call(null,G__78480,G__78481));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),true], null)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null));
} else
{return null;
}
})())], null))));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema78392,input_schema78393,input_checker78394,output_checker78395,vec__78386,opts__24145__auto__))
;
stuttaford.radiant.datalog.t78456.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema78392,input_schema78393,input_checker78394,output_checker78395,vec__78386,opts__24145__auto__){
return (function (_78458){var self__ = this;
var _78458__$1 = this;return self__.meta78457;
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema78392,input_schema78393,input_checker78394,output_checker78395,vec__78386,opts__24145__auto__))
;
stuttaford.radiant.datalog.t78456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema78392,input_schema78393,input_checker78394,output_checker78395,vec__78386,opts__24145__auto__){
return (function (_78458,meta78457__$1){var self__ = this;
var _78458__$1 = this;return (new stuttaford.radiant.datalog.t78456(self__.output_checker78395,self__.query,self__.datalog,self__.current_data_source,self__.owner,self__.data,self__.fnk78390,self__.data__24144__auto__,self__.owner78285,self__.opts__24145__auto__,self__.map78388,self__.G__78396,self__.data_sources,self__.current_db,self__.vec__78386,self__.input_checker78394,self__.input_schema78393,self__.p__78288,self__.validate__837__auto__,self__.ufv__,self__.output_schema78392,meta78457__$1));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema78392,input_schema78393,input_checker78394,output_checker78395,vec__78386,opts__24145__auto__))
;
stuttaford.radiant.datalog.__GT_t78456 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema78392,input_schema78393,input_checker78394,output_checker78395,vec__78386,opts__24145__auto__){
return (function __GT_t78456(output_checker78395__$1,query__$1,datalog__$1,current_data_source__$1,owner__$1,data__$1,fnk78390__$1,data__24144__auto____$1,owner78285__$1,opts__24145__auto____$1,map78388__$1,G__78396__$1,data_sources__$1,current_db__$1,vec__78386__$1,input_checker78394__$1,input_schema78393__$1,p__78288__$1,validate__837__auto____$1,ufv____$1,output_schema78392__$1,meta78457){return (new stuttaford.radiant.datalog.t78456(output_checker78395__$1,query__$1,datalog__$1,current_data_source__$1,owner__$1,data__$1,fnk78390__$1,data__24144__auto____$1,owner78285__$1,opts__24145__auto____$1,map78388__$1,G__78396__$1,data_sources__$1,current_db__$1,vec__78386__$1,input_checker78394__$1,input_schema78393__$1,p__78288__$1,validate__837__auto____$1,ufv____$1,output_schema78392__$1,meta78457));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema78392,input_schema78393,input_checker78394,output_checker78395,vec__78386,opts__24145__auto__))
;
}
return (new stuttaford.radiant.datalog.t78456(output_checker78395,query,datalog,current_data_source,owner,data,fnk78390,data__24144__auto__,owner78285,opts__24145__auto__,map78388,G__78396,data_sources,current_db,vec__78386,input_checker78394,input_schema78393,p__78288,validate__837__auto__,ufv__,output_schema78392,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___78633 = (function (){var G__78488 = o__840__auto__;return (output_checker78395.cljs$core$IFn$_invoke$arity$1 ? output_checker78395.cljs$core$IFn$_invoke$arity$1(G__78488) : output_checker78395.call(null,G__78488));
})();if(cljs.core.truth_(temp__4126__auto___78633))
{var error__839__auto___78639 = temp__4126__auto___78633;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk78390","fnk78390",1078435462,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___78639], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema78392,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___78639], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema78392,input_schema78393,input_checker78394,output_checker78395,vec__78386,opts__24145__auto__))
,schema.core.make_fn_schema(output_schema78392,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema78393], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner78285,new cljs.core.Keyword(null,"data","data",-232669377),data__24144__auto__], null));
};
var datalog = function (data__24144__auto__,owner78285,var_args){
var p__78288 = null;if (arguments.length > 2) {
  p__78288 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datalog__delegate.call(this,data__24144__auto__,owner78285,p__78288);};
datalog.cljs$lang$maxFixedArity = 2;
datalog.cljs$lang$applyTo = (function (arglist__78655){
var data__24144__auto__ = cljs.core.first(arglist__78655);
arglist__78655 = cljs.core.next(arglist__78655);
var owner78285 = cljs.core.first(arglist__78655);
var p__78288 = cljs.core.rest(arglist__78655);
return datalog__delegate(data__24144__auto__,owner78285,p__78288);
});
datalog.cljs$core$IFn$_invoke$arity$variadic = datalog__delegate;
return datalog;
})()
;
stuttaford.radiant.datalog.__GT_datalog = (function() {
var __GT_datalog = null;
var __GT_datalog__1 = (function (cursor__24113__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datalog.datalog,cursor__24113__auto__);
});
var __GT_datalog__2 = (function (cursor__24113__auto__,m78286){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datalog.datalog,cursor__24113__auto__,m78286);
});
__GT_datalog = function(cursor__24113__auto__,m78286){
switch(arguments.length){
case 1:
return __GT_datalog__1.call(this,cursor__24113__auto__);
case 2:
return __GT_datalog__2.call(this,cursor__24113__auto__,m78286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_datalog.cljs$core$IFn$_invoke$arity$1 = __GT_datalog__1;
__GT_datalog.cljs$core$IFn$_invoke$arity$2 = __GT_datalog__2;
return __GT_datalog;
})()
;
//# sourceMappingURL=datalog.js.map