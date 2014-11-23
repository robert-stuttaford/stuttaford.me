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
stuttaford.radiant.datalog.maybe_parse_query = (function maybe_parse_query(s){try{var G__41706 = s;var G__41706__$1 = (((G__41706 == null))?null:cljs.reader.read_string(G__41706));var G__41706__$2 = (((G__41706__$1 == null))?null:datascript.query.parse_query(G__41706__$1));return G__41706__$2;
}catch (e41705){var e = e41705;return null;
}});
stuttaford.radiant.datalog.handle_query_input_change = (function handle_query_input_change(data,owner){var input = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"input");var text = input.value;return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"query","query",-1288509510),text);
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.datalog.query_input = (function() { 
var query_input__delegate = function (data__24441__auto__,owner41707,p__41709){var vec__41732 = p__41709;var opts__24442__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41732,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema41735 = schema.core.Any;var input_schema41736 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map41733","map41733",737018695,null))], null);var input_checker41737 = schema.core.checker(input_schema41736);var output_checker41738 = schema.core.checker(output_schema41735);return schema.core.schematize_fn(((function (ufv__,output_schema41735,input_schema41736,input_checker41737,output_checker41738,vec__41732,opts__24442__auto__){
return (function fnk41734(G__41739){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___41754 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__41739], null);var temp__4126__auto___41755 = (function (){var G__41747 = args__838__auto___41754;return (input_checker41737.cljs$core$IFn$_invoke$arity$1 ? input_checker41737.cljs$core$IFn$_invoke$arity$1(G__41747) : input_checker41737.call(null,G__41747));
})();if(cljs.core.truth_(temp__4126__auto___41755))
{var error__839__auto___41756 = temp__4126__auto___41755;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk41734","fnk41734",-984314318,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41756], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema41736,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___41754,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41756], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map41733 = G__41739;while(true){
if(cljs.core.map_QMARK_(map41733))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map41733], 0))));
}
var data = plumbing.fnk.schema.safe_get(map41733,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var query = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map41733,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datalog.t41748 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datalog.t41748 = (function (query,owner,query_input,data,map41733,G__41739,data__24441__auto__,output_checker41738,fnk41734,output_schema41735,owner41707,p__41709,opts__24442__auto__,validate__837__auto__,vec__41732,input_checker41737,ufv__,input_schema41736,meta41749){
this.query = query;
this.owner = owner;
this.query_input = query_input;
this.data = data;
this.map41733 = map41733;
this.G__41739 = G__41739;
this.data__24441__auto__ = data__24441__auto__;
this.output_checker41738 = output_checker41738;
this.fnk41734 = fnk41734;
this.output_schema41735 = output_schema41735;
this.owner41707 = owner41707;
this.p__41709 = p__41709;
this.opts__24442__auto__ = opts__24442__auto__;
this.validate__837__auto__ = validate__837__auto__;
this.vec__41732 = vec__41732;
this.input_checker41737 = input_checker41737;
this.ufv__ = ufv__;
this.input_schema41736 = input_schema41736;
this.meta41749 = meta41749;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datalog.t41748.cljs$lang$type = true;
stuttaford.radiant.datalog.t41748.cljs$lang$ctorStr = "stuttaford.radiant.datalog/t41748";
stuttaford.radiant.datalog.t41748.cljs$lang$ctorPrWriter = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema41735,input_schema41736,input_checker41737,output_checker41738,vec__41732,opts__24442__auto__){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"stuttaford.radiant.datalog/t41748");
});})(owner,query,data,validate__837__auto__,ufv__,output_schema41735,input_schema41736,input_checker41737,output_checker41738,vec__41732,opts__24442__auto__))
;
stuttaford.radiant.datalog.t41748.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datalog.t41748.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema41735,input_schema41736,input_checker41737,output_checker41738,vec__41732,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "query-input";
});})(owner,query,data,validate__837__auto__,ufv__,output_schema41735,input_schema41736,input_checker41737,output_checker41738,vec__41732,opts__24442__auto__))
;
stuttaford.radiant.datalog.t41748.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.datalog.t41748.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema41735,input_schema41736,input_checker41737,output_checker41738,vec__41732,opts__24442__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"query-input"], null),cljs.core.array_seq([om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(6)], null),cljs.core.array_seq([om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),true,new cljs.core.Keyword(null,"rows","rows",850049680),(8),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"[:find ?e ?v :in $ :where [?e :attr ?v]]",new cljs.core.Keyword(null,"value","value",305978217),self__.query,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),((cljs.core.seq(self__.query))?(cljs.core.truth_(stuttaford.radiant.datalog.maybe_parse_query(self__.query))?"success":"error"):null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (___$1,owner,query,data,validate__837__auto__,ufv__,output_schema41735,input_schema41736,input_checker41737,output_checker41738,vec__41732,opts__24442__auto__){
return (function (){return stuttaford.radiant.datalog.handle_query_input_change(self__.data,self__.owner);
});})(___$1,owner,query,data,validate__837__auto__,ufv__,output_schema41735,input_schema41736,input_checker41737,output_checker41738,vec__41732,opts__24442__auto__))
], null))], 0)),om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(6)], null),cljs.core.array_seq([(function (){var attrs41751 = (function (){var temp__4124__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4124__auto__))
{var parsed_query = temp__4124__auto__;var map__41752 = parsed_query;var map__41752__$1 = ((cljs.core.seq_QMARK_(map__41752))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41752):map__41752);var where = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41752__$1,new cljs.core.Keyword(null,"where","where",-2044795965));var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41752__$1,new cljs.core.Keyword(null,"in","in",-1531184865));var find = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41752__$1,new cljs.core.Keyword(null,"find","find",496279456));return ("[:find "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",find)))+"\n :in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",in$)))+"\n :where\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose("\n ",where)))+"]");
} else
{return "Not a valid query.";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.pre,((cljs.core.map_QMARK_(attrs41751))?sablono.interpreter.attributes(attrs41751):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs41751))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs41751)], null))));
})()], 0))], 0));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema41735,input_schema41736,input_checker41737,output_checker41738,vec__41732,opts__24442__auto__))
;
stuttaford.radiant.datalog.t41748.prototype.om$core$IInitState$ = true;
stuttaford.radiant.datalog.t41748.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema41735,input_schema41736,input_checker41737,output_checker41738,vec__41732,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),""], null);
});})(owner,query,data,validate__837__auto__,ufv__,output_schema41735,input_schema41736,input_checker41737,output_checker41738,vec__41732,opts__24442__auto__))
;
stuttaford.radiant.datalog.t41748.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema41735,input_schema41736,input_checker41737,output_checker41738,vec__41732,opts__24442__auto__){
return (function (_41750){var self__ = this;
var _41750__$1 = this;return self__.meta41749;
});})(owner,query,data,validate__837__auto__,ufv__,output_schema41735,input_schema41736,input_checker41737,output_checker41738,vec__41732,opts__24442__auto__))
;
stuttaford.radiant.datalog.t41748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema41735,input_schema41736,input_checker41737,output_checker41738,vec__41732,opts__24442__auto__){
return (function (_41750,meta41749__$1){var self__ = this;
var _41750__$1 = this;return (new stuttaford.radiant.datalog.t41748(self__.query,self__.owner,self__.query_input,self__.data,self__.map41733,self__.G__41739,self__.data__24441__auto__,self__.output_checker41738,self__.fnk41734,self__.output_schema41735,self__.owner41707,self__.p__41709,self__.opts__24442__auto__,self__.validate__837__auto__,self__.vec__41732,self__.input_checker41737,self__.ufv__,self__.input_schema41736,meta41749__$1));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema41735,input_schema41736,input_checker41737,output_checker41738,vec__41732,opts__24442__auto__))
;
stuttaford.radiant.datalog.__GT_t41748 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema41735,input_schema41736,input_checker41737,output_checker41738,vec__41732,opts__24442__auto__){
return (function __GT_t41748(query__$1,owner__$1,query_input__$1,data__$1,map41733__$1,G__41739__$1,data__24441__auto____$1,output_checker41738__$1,fnk41734__$1,output_schema41735__$1,owner41707__$1,p__41709__$1,opts__24442__auto____$1,validate__837__auto____$1,vec__41732__$1,input_checker41737__$1,ufv____$1,input_schema41736__$1,meta41749){return (new stuttaford.radiant.datalog.t41748(query__$1,owner__$1,query_input__$1,data__$1,map41733__$1,G__41739__$1,data__24441__auto____$1,output_checker41738__$1,fnk41734__$1,output_schema41735__$1,owner41707__$1,p__41709__$1,opts__24442__auto____$1,validate__837__auto____$1,vec__41732__$1,input_checker41737__$1,ufv____$1,input_schema41736__$1,meta41749));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema41735,input_schema41736,input_checker41737,output_checker41738,vec__41732,opts__24442__auto__))
;
}
return (new stuttaford.radiant.datalog.t41748(query,owner,query_input,data,map41733,G__41739,data__24441__auto__,output_checker41738,fnk41734,output_schema41735,owner41707,p__41709,opts__24442__auto__,validate__837__auto__,vec__41732,input_checker41737,ufv__,input_schema41736,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___41757 = (function (){var G__41753 = o__840__auto__;return (output_checker41738.cljs$core$IFn$_invoke$arity$1 ? output_checker41738.cljs$core$IFn$_invoke$arity$1(G__41753) : output_checker41738.call(null,G__41753));
})();if(cljs.core.truth_(temp__4126__auto___41757))
{var error__839__auto___41758 = temp__4126__auto___41757;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk41734","fnk41734",-984314318,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41758], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema41735,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41758], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema41735,input_schema41736,input_checker41737,output_checker41738,vec__41732,opts__24442__auto__))
,schema.core.make_fn_schema(output_schema41735,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema41736], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24442__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner41707,new cljs.core.Keyword(null,"data","data",-232669377),data__24441__auto__], null));
};
var query_input = function (data__24441__auto__,owner41707,var_args){
var p__41709 = null;if (arguments.length > 2) {
  p__41709 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return query_input__delegate.call(this,data__24441__auto__,owner41707,p__41709);};
query_input.cljs$lang$maxFixedArity = 2;
query_input.cljs$lang$applyTo = (function (arglist__41759){
var data__24441__auto__ = cljs.core.first(arglist__41759);
arglist__41759 = cljs.core.next(arglist__41759);
var owner41707 = cljs.core.first(arglist__41759);
var p__41709 = cljs.core.rest(arglist__41759);
return query_input__delegate(data__24441__auto__,owner41707,p__41709);
});
query_input.cljs$core$IFn$_invoke$arity$variadic = query_input__delegate;
return query_input;
})()
;
stuttaford.radiant.datalog.__GT_query_input = (function() {
var __GT_query_input = null;
var __GT_query_input__1 = (function (cursor__24410__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datalog.query_input,cursor__24410__auto__);
});
var __GT_query_input__2 = (function (cursor__24410__auto__,m41708){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datalog.query_input,cursor__24410__auto__,m41708);
});
__GT_query_input = function(cursor__24410__auto__,m41708){
switch(arguments.length){
case 1:
return __GT_query_input__1.call(this,cursor__24410__auto__);
case 2:
return __GT_query_input__2.call(this,cursor__24410__auto__,m41708);
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
var datalog__delegate = function (data__24441__auto__,owner41760,p__41762){var vec__41795 = p__41762;var opts__24442__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41795,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema41798 = schema.core.Any;var input_schema41799 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"query","query",-1288509510)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-db","current-db",213667882)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684)),schema.core.Any,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map41796","map41796",-260461441,null))], null);var input_checker41800 = schema.core.checker(input_schema41799);var output_checker41801 = schema.core.checker(output_schema41798);return schema.core.schematize_fn(((function (ufv__,output_schema41798,input_schema41799,input_checker41800,output_checker41801,vec__41795,opts__24442__auto__){
return (function fnk41797(G__41802){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___41827 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__41802], null);var temp__4126__auto___41828 = (function (){var G__41815 = args__838__auto___41827;return (input_checker41800.cljs$core$IFn$_invoke$arity$1 ? input_checker41800.cljs$core$IFn$_invoke$arity$1(G__41815) : input_checker41800.call(null,G__41815));
})();if(cljs.core.truth_(temp__4126__auto___41828))
{var error__839__auto___41829 = temp__4126__auto___41828;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk41797","fnk41797",-1364620628,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41829], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema41799,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___41827,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41829], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map41796 = G__41802;while(true){
if(cljs.core.map_QMARK_(map41796))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map41796], 0))));
}
var data = plumbing.fnk.schema.safe_get(map41796,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var data_sources = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684),null);var current_db = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-db","current-db",213667882),null);var query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"query","query",-1288509510),"");var owner = plumbing.fnk.schema.safe_get(map41796,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datalog.t41816 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datalog.t41816 = (function (query,p__41762,G__41802,datalog,current_data_source,owner,data,output_schema41798,fnk41797,data__24441__auto__,output_checker41801,data_sources,current_db,owner41760,input_schema41799,vec__41795,input_checker41800,opts__24442__auto__,validate__837__auto__,ufv__,map41796,meta41817){
this.query = query;
this.p__41762 = p__41762;
this.G__41802 = G__41802;
this.datalog = datalog;
this.current_data_source = current_data_source;
this.owner = owner;
this.data = data;
this.output_schema41798 = output_schema41798;
this.fnk41797 = fnk41797;
this.data__24441__auto__ = data__24441__auto__;
this.output_checker41801 = output_checker41801;
this.data_sources = data_sources;
this.current_db = current_db;
this.owner41760 = owner41760;
this.input_schema41799 = input_schema41799;
this.vec__41795 = vec__41795;
this.input_checker41800 = input_checker41800;
this.opts__24442__auto__ = opts__24442__auto__;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.map41796 = map41796;
this.meta41817 = meta41817;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datalog.t41816.cljs$lang$type = true;
stuttaford.radiant.datalog.t41816.cljs$lang$ctorStr = "stuttaford.radiant.datalog/t41816";
stuttaford.radiant.datalog.t41816.cljs$lang$ctorPrWriter = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41798,input_schema41799,input_checker41800,output_checker41801,vec__41795,opts__24442__auto__){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"stuttaford.radiant.datalog/t41816");
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41798,input_schema41799,input_checker41800,output_checker41801,vec__41795,opts__24442__auto__))
;
stuttaford.radiant.datalog.t41816.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datalog.t41816.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41798,input_schema41799,input_checker41800,output_checker41801,vec__41795,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "datalog";
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41798,input_schema41799,input_checker41800,output_checker41801,vec__41795,opts__24442__auto__))
;
stuttaford.radiant.datalog.t41816.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.datalog.t41816.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41798,input_schema41799,input_checker41800,output_checker41801,vec__41795,opts__24442__auto__){
return (function (_,p__41819){var self__ = this;
var map__41820 = p__41819;var map__41820__$1 = ((cljs.core.seq_QMARK_(map__41820))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41820):map__41820);var sort = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41820__$1,new cljs.core.Keyword(null,"sort","sort",953465918),(0));var ___$1 = this;var attrs41821 = stuttaford.radiant.datalog.__GT_query_input.cljs$core$IFn$_invoke$arity$1(self__.data);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs41821))?sablono.interpreter.attributes(attrs41821):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs41821))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var temp__4126__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4126__auto__))
{var query__$2 = temp__4126__auto__;return stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(query__$2)),new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var G__41822 = query__$2;var G__41823 = self__.current_db;return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__41822,G__41823) : datascript.q.call(null,G__41822,G__41823));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),true], null)], null));
} else
{return null;
}
})())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs41821),sablono.interpreter.interpret((function (){var temp__4126__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4126__auto__))
{var query__$2 = temp__4126__auto__;return stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(query__$2)),new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var G__41824 = query__$2;var G__41825 = self__.current_db;return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__41824,G__41825) : datascript.q.call(null,G__41824,G__41825));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),true], null)], null));
} else
{return null;
}
})())], null))));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41798,input_schema41799,input_checker41800,output_checker41801,vec__41795,opts__24442__auto__))
;
stuttaford.radiant.datalog.t41816.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41798,input_schema41799,input_checker41800,output_checker41801,vec__41795,opts__24442__auto__){
return (function (_41818){var self__ = this;
var _41818__$1 = this;return self__.meta41817;
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41798,input_schema41799,input_checker41800,output_checker41801,vec__41795,opts__24442__auto__))
;
stuttaford.radiant.datalog.t41816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41798,input_schema41799,input_checker41800,output_checker41801,vec__41795,opts__24442__auto__){
return (function (_41818,meta41817__$1){var self__ = this;
var _41818__$1 = this;return (new stuttaford.radiant.datalog.t41816(self__.query,self__.p__41762,self__.G__41802,self__.datalog,self__.current_data_source,self__.owner,self__.data,self__.output_schema41798,self__.fnk41797,self__.data__24441__auto__,self__.output_checker41801,self__.data_sources,self__.current_db,self__.owner41760,self__.input_schema41799,self__.vec__41795,self__.input_checker41800,self__.opts__24442__auto__,self__.validate__837__auto__,self__.ufv__,self__.map41796,meta41817__$1));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41798,input_schema41799,input_checker41800,output_checker41801,vec__41795,opts__24442__auto__))
;
stuttaford.radiant.datalog.__GT_t41816 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41798,input_schema41799,input_checker41800,output_checker41801,vec__41795,opts__24442__auto__){
return (function __GT_t41816(query__$1,p__41762__$1,G__41802__$1,datalog__$1,current_data_source__$1,owner__$1,data__$1,output_schema41798__$1,fnk41797__$1,data__24441__auto____$1,output_checker41801__$1,data_sources__$1,current_db__$1,owner41760__$1,input_schema41799__$1,vec__41795__$1,input_checker41800__$1,opts__24442__auto____$1,validate__837__auto____$1,ufv____$1,map41796__$1,meta41817){return (new stuttaford.radiant.datalog.t41816(query__$1,p__41762__$1,G__41802__$1,datalog__$1,current_data_source__$1,owner__$1,data__$1,output_schema41798__$1,fnk41797__$1,data__24441__auto____$1,output_checker41801__$1,data_sources__$1,current_db__$1,owner41760__$1,input_schema41799__$1,vec__41795__$1,input_checker41800__$1,opts__24442__auto____$1,validate__837__auto____$1,ufv____$1,map41796__$1,meta41817));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema41798,input_schema41799,input_checker41800,output_checker41801,vec__41795,opts__24442__auto__))
;
}
return (new stuttaford.radiant.datalog.t41816(query,p__41762,G__41802,datalog,current_data_source,owner,data,output_schema41798,fnk41797,data__24441__auto__,output_checker41801,data_sources,current_db,owner41760,input_schema41799,vec__41795,input_checker41800,opts__24442__auto__,validate__837__auto__,ufv__,map41796,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___41830 = (function (){var G__41826 = o__840__auto__;return (output_checker41801.cljs$core$IFn$_invoke$arity$1 ? output_checker41801.cljs$core$IFn$_invoke$arity$1(G__41826) : output_checker41801.call(null,G__41826));
})();if(cljs.core.truth_(temp__4126__auto___41830))
{var error__839__auto___41831 = temp__4126__auto___41830;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk41797","fnk41797",-1364620628,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41831], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema41798,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41831], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema41798,input_schema41799,input_checker41800,output_checker41801,vec__41795,opts__24442__auto__))
,schema.core.make_fn_schema(output_schema41798,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema41799], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24442__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner41760,new cljs.core.Keyword(null,"data","data",-232669377),data__24441__auto__], null));
};
var datalog = function (data__24441__auto__,owner41760,var_args){
var p__41762 = null;if (arguments.length > 2) {
  p__41762 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datalog__delegate.call(this,data__24441__auto__,owner41760,p__41762);};
datalog.cljs$lang$maxFixedArity = 2;
datalog.cljs$lang$applyTo = (function (arglist__41832){
var data__24441__auto__ = cljs.core.first(arglist__41832);
arglist__41832 = cljs.core.next(arglist__41832);
var owner41760 = cljs.core.first(arglist__41832);
var p__41762 = cljs.core.rest(arglist__41832);
return datalog__delegate(data__24441__auto__,owner41760,p__41762);
});
datalog.cljs$core$IFn$_invoke$arity$variadic = datalog__delegate;
return datalog;
})()
;
stuttaford.radiant.datalog.__GT_datalog = (function() {
var __GT_datalog = null;
var __GT_datalog__1 = (function (cursor__24410__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datalog.datalog,cursor__24410__auto__);
});
var __GT_datalog__2 = (function (cursor__24410__auto__,m41761){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datalog.datalog,cursor__24410__auto__,m41761);
});
__GT_datalog = function(cursor__24410__auto__,m41761){
switch(arguments.length){
case 1:
return __GT_datalog__1.call(this,cursor__24410__auto__);
case 2:
return __GT_datalog__2.call(this,cursor__24410__auto__,m41761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_datalog.cljs$core$IFn$_invoke$arity$1 = __GT_datalog__1;
__GT_datalog.cljs$core$IFn$_invoke$arity$2 = __GT_datalog__2;
return __GT_datalog;
})()
;
//# sourceMappingURL=datalog.js.map