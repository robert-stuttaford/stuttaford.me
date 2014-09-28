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
stuttaford.radiant.datalog.maybe_parse_query = (function maybe_parse_query(s){try{var G__57613 = s;var G__57613__$1 = (((G__57613 == null))?null:cljs.reader.read_string(G__57613));var G__57613__$2 = (((G__57613__$1 == null))?null:datascript.query.parse_query(G__57613__$1));return G__57613__$2;
}catch (e57612){var e = e57612;return null;
}});
stuttaford.radiant.datalog.handle_query_input_change = (function handle_query_input_change(data,owner){var input = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"input");var text = input.value;return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"query","query",-1288509510),text);
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.datalog.query_input = (function() { 
var query_input__delegate = function (data__24144__auto__,owner57614,p__57616){var vec__57639 = p__57616;var opts__24145__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57639,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema57642 = schema.core.Any;var input_schema57643 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map57640","map57640",424915720,null))], null);var input_checker57644 = schema.core.checker(input_schema57643);var output_checker57645 = schema.core.checker(output_schema57642);return schema.core.schematize_fn(((function (ufv__,output_schema57642,input_schema57643,input_checker57644,output_checker57645,vec__57639,opts__24145__auto__){
return (function fnk57641(G__57646){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57661 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57646], null);var temp__4126__auto___57662 = (function (){var G__57654 = args__838__auto___57661;return (input_checker57644.cljs$core$IFn$_invoke$arity$1 ? input_checker57644.cljs$core$IFn$_invoke$arity$1(G__57654) : input_checker57644.call(null,G__57654));
})();if(cljs.core.truth_(temp__4126__auto___57662))
{var error__839__auto___57663 = temp__4126__auto___57662;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk57641","fnk57641",323803017,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57663], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57643,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57661,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57663], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map57640 = G__57646;while(true){
if(cljs.core.map_QMARK_(map57640))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map57640], 0))));
}
var data = plumbing.fnk.schema.safe_get(map57640,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var query = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map57640,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datalog.t57655 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datalog.t57655 = (function (query,owner57614,owner,query_input,data,p__57616,input_checker57644,map57640,data__24144__auto__,fnk57641,opts__24145__auto__,input_schema57643,output_checker57645,vec__57639,output_schema57642,validate__837__auto__,G__57646,ufv__,meta57656){
this.query = query;
this.owner57614 = owner57614;
this.owner = owner;
this.query_input = query_input;
this.data = data;
this.p__57616 = p__57616;
this.input_checker57644 = input_checker57644;
this.map57640 = map57640;
this.data__24144__auto__ = data__24144__auto__;
this.fnk57641 = fnk57641;
this.opts__24145__auto__ = opts__24145__auto__;
this.input_schema57643 = input_schema57643;
this.output_checker57645 = output_checker57645;
this.vec__57639 = vec__57639;
this.output_schema57642 = output_schema57642;
this.validate__837__auto__ = validate__837__auto__;
this.G__57646 = G__57646;
this.ufv__ = ufv__;
this.meta57656 = meta57656;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datalog.t57655.cljs$lang$type = true;
stuttaford.radiant.datalog.t57655.cljs$lang$ctorStr = "stuttaford.radiant.datalog/t57655";
stuttaford.radiant.datalog.t57655.cljs$lang$ctorPrWriter = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema57642,input_schema57643,input_checker57644,output_checker57645,vec__57639,opts__24145__auto__){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"stuttaford.radiant.datalog/t57655");
});})(owner,query,data,validate__837__auto__,ufv__,output_schema57642,input_schema57643,input_checker57644,output_checker57645,vec__57639,opts__24145__auto__))
;
stuttaford.radiant.datalog.t57655.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datalog.t57655.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema57642,input_schema57643,input_checker57644,output_checker57645,vec__57639,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "query-input";
});})(owner,query,data,validate__837__auto__,ufv__,output_schema57642,input_schema57643,input_checker57644,output_checker57645,vec__57639,opts__24145__auto__))
;
stuttaford.radiant.datalog.t57655.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.datalog.t57655.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema57642,input_schema57643,input_checker57644,output_checker57645,vec__57639,opts__24145__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"query-input"], null),cljs.core.array_seq([om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(6)], null),cljs.core.array_seq([om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),true,new cljs.core.Keyword(null,"rows","rows",850049680),(8),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"[:find ?e ?v :in $ :where [?e :attr ?v]]",new cljs.core.Keyword(null,"value","value",305978217),self__.query,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),((cljs.core.seq(self__.query))?(cljs.core.truth_(stuttaford.radiant.datalog.maybe_parse_query(self__.query))?"success":"error"):null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (___$1,owner,query,data,validate__837__auto__,ufv__,output_schema57642,input_schema57643,input_checker57644,output_checker57645,vec__57639,opts__24145__auto__){
return (function (){return stuttaford.radiant.datalog.handle_query_input_change(self__.data,self__.owner);
});})(___$1,owner,query,data,validate__837__auto__,ufv__,output_schema57642,input_schema57643,input_checker57644,output_checker57645,vec__57639,opts__24145__auto__))
], null))], 0)),om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(6)], null),cljs.core.array_seq([(function (){var attrs57658 = (function (){var temp__4124__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4124__auto__))
{var parsed_query = temp__4124__auto__;var map__57659 = parsed_query;var map__57659__$1 = ((cljs.core.seq_QMARK_(map__57659))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57659):map__57659);var where = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57659__$1,new cljs.core.Keyword(null,"where","where",-2044795965));var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57659__$1,new cljs.core.Keyword(null,"in","in",-1531184865));var find = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57659__$1,new cljs.core.Keyword(null,"find","find",496279456));return ("[:find "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",find)))+"\n :in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",in$)))+"\n :where\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose("\n ",where)))+"]");
} else
{return "Not a valid query.";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.pre,((cljs.core.map_QMARK_(attrs57658))?sablono.interpreter.attributes(attrs57658):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs57658))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs57658)], null))));
})()], 0))], 0));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema57642,input_schema57643,input_checker57644,output_checker57645,vec__57639,opts__24145__auto__))
;
stuttaford.radiant.datalog.t57655.prototype.om$core$IInitState$ = true;
stuttaford.radiant.datalog.t57655.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema57642,input_schema57643,input_checker57644,output_checker57645,vec__57639,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),""], null);
});})(owner,query,data,validate__837__auto__,ufv__,output_schema57642,input_schema57643,input_checker57644,output_checker57645,vec__57639,opts__24145__auto__))
;
stuttaford.radiant.datalog.t57655.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema57642,input_schema57643,input_checker57644,output_checker57645,vec__57639,opts__24145__auto__){
return (function (_57657){var self__ = this;
var _57657__$1 = this;return self__.meta57656;
});})(owner,query,data,validate__837__auto__,ufv__,output_schema57642,input_schema57643,input_checker57644,output_checker57645,vec__57639,opts__24145__auto__))
;
stuttaford.radiant.datalog.t57655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema57642,input_schema57643,input_checker57644,output_checker57645,vec__57639,opts__24145__auto__){
return (function (_57657,meta57656__$1){var self__ = this;
var _57657__$1 = this;return (new stuttaford.radiant.datalog.t57655(self__.query,self__.owner57614,self__.owner,self__.query_input,self__.data,self__.p__57616,self__.input_checker57644,self__.map57640,self__.data__24144__auto__,self__.fnk57641,self__.opts__24145__auto__,self__.input_schema57643,self__.output_checker57645,self__.vec__57639,self__.output_schema57642,self__.validate__837__auto__,self__.G__57646,self__.ufv__,meta57656__$1));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema57642,input_schema57643,input_checker57644,output_checker57645,vec__57639,opts__24145__auto__))
;
stuttaford.radiant.datalog.__GT_t57655 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema57642,input_schema57643,input_checker57644,output_checker57645,vec__57639,opts__24145__auto__){
return (function __GT_t57655(query__$1,owner57614__$1,owner__$1,query_input__$1,data__$1,p__57616__$1,input_checker57644__$1,map57640__$1,data__24144__auto____$1,fnk57641__$1,opts__24145__auto____$1,input_schema57643__$1,output_checker57645__$1,vec__57639__$1,output_schema57642__$1,validate__837__auto____$1,G__57646__$1,ufv____$1,meta57656){return (new stuttaford.radiant.datalog.t57655(query__$1,owner57614__$1,owner__$1,query_input__$1,data__$1,p__57616__$1,input_checker57644__$1,map57640__$1,data__24144__auto____$1,fnk57641__$1,opts__24145__auto____$1,input_schema57643__$1,output_checker57645__$1,vec__57639__$1,output_schema57642__$1,validate__837__auto____$1,G__57646__$1,ufv____$1,meta57656));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema57642,input_schema57643,input_checker57644,output_checker57645,vec__57639,opts__24145__auto__))
;
}
return (new stuttaford.radiant.datalog.t57655(query,owner57614,owner,query_input,data,p__57616,input_checker57644,map57640,data__24144__auto__,fnk57641,opts__24145__auto__,input_schema57643,output_checker57645,vec__57639,output_schema57642,validate__837__auto__,G__57646,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57664 = (function (){var G__57660 = o__840__auto__;return (output_checker57645.cljs$core$IFn$_invoke$arity$1 ? output_checker57645.cljs$core$IFn$_invoke$arity$1(G__57660) : output_checker57645.call(null,G__57660));
})();if(cljs.core.truth_(temp__4126__auto___57664))
{var error__839__auto___57665 = temp__4126__auto___57664;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk57641","fnk57641",323803017,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57665], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57642,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57665], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema57642,input_schema57643,input_checker57644,output_checker57645,vec__57639,opts__24145__auto__))
,schema.core.make_fn_schema(output_schema57642,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57643], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner57614,new cljs.core.Keyword(null,"data","data",-232669377),data__24144__auto__], null));
};
var query_input = function (data__24144__auto__,owner57614,var_args){
var p__57616 = null;if (arguments.length > 2) {
  p__57616 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return query_input__delegate.call(this,data__24144__auto__,owner57614,p__57616);};
query_input.cljs$lang$maxFixedArity = 2;
query_input.cljs$lang$applyTo = (function (arglist__57666){
var data__24144__auto__ = cljs.core.first(arglist__57666);
arglist__57666 = cljs.core.next(arglist__57666);
var owner57614 = cljs.core.first(arglist__57666);
var p__57616 = cljs.core.rest(arglist__57666);
return query_input__delegate(data__24144__auto__,owner57614,p__57616);
});
query_input.cljs$core$IFn$_invoke$arity$variadic = query_input__delegate;
return query_input;
})()
;
stuttaford.radiant.datalog.__GT_query_input = (function() {
var __GT_query_input = null;
var __GT_query_input__1 = (function (cursor__24113__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datalog.query_input,cursor__24113__auto__);
});
var __GT_query_input__2 = (function (cursor__24113__auto__,m57615){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datalog.query_input,cursor__24113__auto__,m57615);
});
__GT_query_input = function(cursor__24113__auto__,m57615){
switch(arguments.length){
case 1:
return __GT_query_input__1.call(this,cursor__24113__auto__);
case 2:
return __GT_query_input__2.call(this,cursor__24113__auto__,m57615);
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
var datalog__delegate = function (data__24144__auto__,owner57667,p__57669){var vec__57702 = p__57669;var opts__24145__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57702,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema57705 = schema.core.Any;var input_schema57706 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"query","query",-1288509510)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-db","current-db",213667882)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684)),schema.core.Any,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map57703","map57703",-895634457,null))], null);var input_checker57707 = schema.core.checker(input_schema57706);var output_checker57708 = schema.core.checker(output_schema57705);return schema.core.schematize_fn(((function (ufv__,output_schema57705,input_schema57706,input_checker57707,output_checker57708,vec__57702,opts__24145__auto__){
return (function fnk57704(G__57709){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57734 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57709], null);var temp__4126__auto___57735 = (function (){var G__57722 = args__838__auto___57734;return (input_checker57707.cljs$core$IFn$_invoke$arity$1 ? input_checker57707.cljs$core$IFn$_invoke$arity$1(G__57722) : input_checker57707.call(null,G__57722));
})();if(cljs.core.truth_(temp__4126__auto___57735))
{var error__839__auto___57736 = temp__4126__auto___57735;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk57704","fnk57704",-1754495980,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57736], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57706,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57734,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57736], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map57703 = G__57709;while(true){
if(cljs.core.map_QMARK_(map57703))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map57703], 0))));
}
var data = plumbing.fnk.schema.safe_get(map57703,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var data_sources = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684),null);var current_db = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-db","current-db",213667882),null);var query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"query","query",-1288509510),"");var owner = plumbing.fnk.schema.safe_get(map57703,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datalog.t57723 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datalog.t57723 = (function (query,datalog,current_data_source,owner,data,map57703,data__24144__auto__,opts__24145__auto__,G__57709,p__57669,data_sources,current_db,fnk57704,output_checker57708,owner57667,output_schema57705,vec__57702,input_checker57707,validate__837__auto__,input_schema57706,ufv__,meta57724){
this.query = query;
this.datalog = datalog;
this.current_data_source = current_data_source;
this.owner = owner;
this.data = data;
this.map57703 = map57703;
this.data__24144__auto__ = data__24144__auto__;
this.opts__24145__auto__ = opts__24145__auto__;
this.G__57709 = G__57709;
this.p__57669 = p__57669;
this.data_sources = data_sources;
this.current_db = current_db;
this.fnk57704 = fnk57704;
this.output_checker57708 = output_checker57708;
this.owner57667 = owner57667;
this.output_schema57705 = output_schema57705;
this.vec__57702 = vec__57702;
this.input_checker57707 = input_checker57707;
this.validate__837__auto__ = validate__837__auto__;
this.input_schema57706 = input_schema57706;
this.ufv__ = ufv__;
this.meta57724 = meta57724;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datalog.t57723.cljs$lang$type = true;
stuttaford.radiant.datalog.t57723.cljs$lang$ctorStr = "stuttaford.radiant.datalog/t57723";
stuttaford.radiant.datalog.t57723.cljs$lang$ctorPrWriter = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema57705,input_schema57706,input_checker57707,output_checker57708,vec__57702,opts__24145__auto__){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"stuttaford.radiant.datalog/t57723");
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema57705,input_schema57706,input_checker57707,output_checker57708,vec__57702,opts__24145__auto__))
;
stuttaford.radiant.datalog.t57723.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datalog.t57723.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema57705,input_schema57706,input_checker57707,output_checker57708,vec__57702,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "datalog";
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema57705,input_schema57706,input_checker57707,output_checker57708,vec__57702,opts__24145__auto__))
;
stuttaford.radiant.datalog.t57723.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.datalog.t57723.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema57705,input_schema57706,input_checker57707,output_checker57708,vec__57702,opts__24145__auto__){
return (function (_,p__57726){var self__ = this;
var map__57727 = p__57726;var map__57727__$1 = ((cljs.core.seq_QMARK_(map__57727))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57727):map__57727);var sort = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57727__$1,new cljs.core.Keyword(null,"sort","sort",953465918),(0));var ___$1 = this;var attrs57728 = stuttaford.radiant.datalog.__GT_query_input.cljs$core$IFn$_invoke$arity$1(self__.data);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs57728))?sablono.interpreter.attributes(attrs57728):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs57728))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var temp__4126__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4126__auto__))
{var query__$2 = temp__4126__auto__;return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(query__$2)),new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var G__57729 = query__$2;var G__57730 = self__.current_db;return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__57729,G__57730) : datascript.q.call(null,G__57729,G__57730));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),true], null)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null));
} else
{return null;
}
})())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs57728),sablono.interpreter.interpret((function (){var temp__4126__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4126__auto__))
{var query__$2 = temp__4126__auto__;return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(query__$2)),new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var G__57731 = query__$2;var G__57732 = self__.current_db;return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__57731,G__57732) : datascript.q.call(null,G__57731,G__57732));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),true], null)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null));
} else
{return null;
}
})())], null))));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema57705,input_schema57706,input_checker57707,output_checker57708,vec__57702,opts__24145__auto__))
;
stuttaford.radiant.datalog.t57723.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema57705,input_schema57706,input_checker57707,output_checker57708,vec__57702,opts__24145__auto__){
return (function (_57725){var self__ = this;
var _57725__$1 = this;return self__.meta57724;
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema57705,input_schema57706,input_checker57707,output_checker57708,vec__57702,opts__24145__auto__))
;
stuttaford.radiant.datalog.t57723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema57705,input_schema57706,input_checker57707,output_checker57708,vec__57702,opts__24145__auto__){
return (function (_57725,meta57724__$1){var self__ = this;
var _57725__$1 = this;return (new stuttaford.radiant.datalog.t57723(self__.query,self__.datalog,self__.current_data_source,self__.owner,self__.data,self__.map57703,self__.data__24144__auto__,self__.opts__24145__auto__,self__.G__57709,self__.p__57669,self__.data_sources,self__.current_db,self__.fnk57704,self__.output_checker57708,self__.owner57667,self__.output_schema57705,self__.vec__57702,self__.input_checker57707,self__.validate__837__auto__,self__.input_schema57706,self__.ufv__,meta57724__$1));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema57705,input_schema57706,input_checker57707,output_checker57708,vec__57702,opts__24145__auto__))
;
stuttaford.radiant.datalog.__GT_t57723 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema57705,input_schema57706,input_checker57707,output_checker57708,vec__57702,opts__24145__auto__){
return (function __GT_t57723(query__$1,datalog__$1,current_data_source__$1,owner__$1,data__$1,map57703__$1,data__24144__auto____$1,opts__24145__auto____$1,G__57709__$1,p__57669__$1,data_sources__$1,current_db__$1,fnk57704__$1,output_checker57708__$1,owner57667__$1,output_schema57705__$1,vec__57702__$1,input_checker57707__$1,validate__837__auto____$1,input_schema57706__$1,ufv____$1,meta57724){return (new stuttaford.radiant.datalog.t57723(query__$1,datalog__$1,current_data_source__$1,owner__$1,data__$1,map57703__$1,data__24144__auto____$1,opts__24145__auto____$1,G__57709__$1,p__57669__$1,data_sources__$1,current_db__$1,fnk57704__$1,output_checker57708__$1,owner57667__$1,output_schema57705__$1,vec__57702__$1,input_checker57707__$1,validate__837__auto____$1,input_schema57706__$1,ufv____$1,meta57724));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema57705,input_schema57706,input_checker57707,output_checker57708,vec__57702,opts__24145__auto__))
;
}
return (new stuttaford.radiant.datalog.t57723(query,datalog,current_data_source,owner,data,map57703,data__24144__auto__,opts__24145__auto__,G__57709,p__57669,data_sources,current_db,fnk57704,output_checker57708,owner57667,output_schema57705,vec__57702,input_checker57707,validate__837__auto__,input_schema57706,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57737 = (function (){var G__57733 = o__840__auto__;return (output_checker57708.cljs$core$IFn$_invoke$arity$1 ? output_checker57708.cljs$core$IFn$_invoke$arity$1(G__57733) : output_checker57708.call(null,G__57733));
})();if(cljs.core.truth_(temp__4126__auto___57737))
{var error__839__auto___57738 = temp__4126__auto___57737;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk57704","fnk57704",-1754495980,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57738], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57705,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57738], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema57705,input_schema57706,input_checker57707,output_checker57708,vec__57702,opts__24145__auto__))
,schema.core.make_fn_schema(output_schema57705,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57706], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner57667,new cljs.core.Keyword(null,"data","data",-232669377),data__24144__auto__], null));
};
var datalog = function (data__24144__auto__,owner57667,var_args){
var p__57669 = null;if (arguments.length > 2) {
  p__57669 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datalog__delegate.call(this,data__24144__auto__,owner57667,p__57669);};
datalog.cljs$lang$maxFixedArity = 2;
datalog.cljs$lang$applyTo = (function (arglist__57739){
var data__24144__auto__ = cljs.core.first(arglist__57739);
arglist__57739 = cljs.core.next(arglist__57739);
var owner57667 = cljs.core.first(arglist__57739);
var p__57669 = cljs.core.rest(arglist__57739);
return datalog__delegate(data__24144__auto__,owner57667,p__57669);
});
datalog.cljs$core$IFn$_invoke$arity$variadic = datalog__delegate;
return datalog;
})()
;
stuttaford.radiant.datalog.__GT_datalog = (function() {
var __GT_datalog = null;
var __GT_datalog__1 = (function (cursor__24113__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datalog.datalog,cursor__24113__auto__);
});
var __GT_datalog__2 = (function (cursor__24113__auto__,m57668){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datalog.datalog,cursor__24113__auto__,m57668);
});
__GT_datalog = function(cursor__24113__auto__,m57668){
switch(arguments.length){
case 1:
return __GT_datalog__1.call(this,cursor__24113__auto__);
case 2:
return __GT_datalog__2.call(this,cursor__24113__auto__,m57668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_datalog.cljs$core$IFn$_invoke$arity$1 = __GT_datalog__1;
__GT_datalog.cljs$core$IFn$_invoke$arity$2 = __GT_datalog__2;
return __GT_datalog;
})()
;
//# sourceMappingURL=datalog.js.map