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
stuttaford.radiant.datalog.maybe_parse_query = (function maybe_parse_query(s){try{var G__77820 = s;var G__77820__$1 = (((G__77820 == null))?null:cljs.reader.read_string(G__77820));var G__77820__$2 = (((G__77820__$1 == null))?null:datascript.query.parse_query(G__77820__$1));return G__77820__$2;
}catch (e77819){var e = e77819;return null;
}});
stuttaford.radiant.datalog.handle_query_input_change = (function handle_query_input_change(data,owner){var input = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"input");var text = input.value;return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"query","query",-1288509510),text);
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.datalog.query_input = (function() { 
var query_input__delegate = function (data__24582__auto__,owner77821,p__77823){var vec__77846 = p__77823;var opts__24583__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77846,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema77849 = schema.core.Any;var input_schema77850 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map77847","map77847",-374816515,null))], null);var input_checker77851 = schema.core.checker(input_schema77850);var output_checker77852 = schema.core.checker(output_schema77849);return schema.core.schematize_fn(((function (ufv__,output_schema77849,input_schema77850,input_checker77851,output_checker77852,vec__77846,opts__24583__auto__){
return (function fnk77848(G__77853){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___77868 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__77853], null);var temp__4126__auto___77869 = (function (){var G__77861 = args__838__auto___77868;return (input_checker77851.cljs$core$IFn$_invoke$arity$1 ? input_checker77851.cljs$core$IFn$_invoke$arity$1(G__77861) : input_checker77851.call(null,G__77861));
})();if(cljs.core.truth_(temp__4126__auto___77869))
{var error__839__auto___77870 = temp__4126__auto___77869;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk77848","fnk77848",-205252737,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77870], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema77850,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___77868,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77870], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map77847 = G__77853;while(true){
if(cljs.core.map_QMARK_(map77847))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map77847], 0))));
}
var data = plumbing.fnk.schema.safe_get(map77847,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var query = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map77847,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datalog.t77862 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datalog.t77862 = (function (query,output_checker77852,opts__24583__auto__,owner,p__77823,G__77853,query_input,data,owner77821,vec__77846,data__24582__auto__,output_schema77849,input_checker77851,input_schema77850,validate__837__auto__,map77847,ufv__,fnk77848,meta77863){
this.query = query;
this.output_checker77852 = output_checker77852;
this.opts__24583__auto__ = opts__24583__auto__;
this.owner = owner;
this.p__77823 = p__77823;
this.G__77853 = G__77853;
this.query_input = query_input;
this.data = data;
this.owner77821 = owner77821;
this.vec__77846 = vec__77846;
this.data__24582__auto__ = data__24582__auto__;
this.output_schema77849 = output_schema77849;
this.input_checker77851 = input_checker77851;
this.input_schema77850 = input_schema77850;
this.validate__837__auto__ = validate__837__auto__;
this.map77847 = map77847;
this.ufv__ = ufv__;
this.fnk77848 = fnk77848;
this.meta77863 = meta77863;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datalog.t77862.cljs$lang$type = true;
stuttaford.radiant.datalog.t77862.cljs$lang$ctorStr = "stuttaford.radiant.datalog/t77862";
stuttaford.radiant.datalog.t77862.cljs$lang$ctorPrWriter = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema77849,input_schema77850,input_checker77851,output_checker77852,vec__77846,opts__24583__auto__){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"stuttaford.radiant.datalog/t77862");
});})(owner,query,data,validate__837__auto__,ufv__,output_schema77849,input_schema77850,input_checker77851,output_checker77852,vec__77846,opts__24583__auto__))
;
stuttaford.radiant.datalog.t77862.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datalog.t77862.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema77849,input_schema77850,input_checker77851,output_checker77852,vec__77846,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "query-input";
});})(owner,query,data,validate__837__auto__,ufv__,output_schema77849,input_schema77850,input_checker77851,output_checker77852,vec__77846,opts__24583__auto__))
;
stuttaford.radiant.datalog.t77862.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.datalog.t77862.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema77849,input_schema77850,input_checker77851,output_checker77852,vec__77846,opts__24583__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"query-input"], null),cljs.core.array_seq([om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(6)], null),cljs.core.array_seq([om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),true,new cljs.core.Keyword(null,"rows","rows",850049680),(8),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"[:find ?e ?v :in $ :where [?e :attr ?v]]",new cljs.core.Keyword(null,"value","value",305978217),self__.query,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),((cljs.core.seq(self__.query))?(cljs.core.truth_(stuttaford.radiant.datalog.maybe_parse_query(self__.query))?"success":"error"):null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (___$1,owner,query,data,validate__837__auto__,ufv__,output_schema77849,input_schema77850,input_checker77851,output_checker77852,vec__77846,opts__24583__auto__){
return (function (){return stuttaford.radiant.datalog.handle_query_input_change(self__.data,self__.owner);
});})(___$1,owner,query,data,validate__837__auto__,ufv__,output_schema77849,input_schema77850,input_checker77851,output_checker77852,vec__77846,opts__24583__auto__))
], null))], 0)),om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(6)], null),cljs.core.array_seq([(function (){var attrs77865 = (function (){var temp__4124__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4124__auto__))
{var parsed_query = temp__4124__auto__;var map__77866 = parsed_query;var map__77866__$1 = ((cljs.core.seq_QMARK_(map__77866))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77866):map__77866);var where = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77866__$1,new cljs.core.Keyword(null,"where","where",-2044795965));var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77866__$1,new cljs.core.Keyword(null,"in","in",-1531184865));var find = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77866__$1,new cljs.core.Keyword(null,"find","find",496279456));return ("[:find "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",find)))+"\n :in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",in$)))+"\n :where\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose("\n ",where)))+"]");
} else
{return "Not a valid query.";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.pre,((cljs.core.map_QMARK_(attrs77865))?sablono.interpreter.attributes(attrs77865):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs77865))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs77865)], null))));
})()], 0))], 0));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema77849,input_schema77850,input_checker77851,output_checker77852,vec__77846,opts__24583__auto__))
;
stuttaford.radiant.datalog.t77862.prototype.om$core$IInitState$ = true;
stuttaford.radiant.datalog.t77862.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema77849,input_schema77850,input_checker77851,output_checker77852,vec__77846,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),""], null);
});})(owner,query,data,validate__837__auto__,ufv__,output_schema77849,input_schema77850,input_checker77851,output_checker77852,vec__77846,opts__24583__auto__))
;
stuttaford.radiant.datalog.t77862.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema77849,input_schema77850,input_checker77851,output_checker77852,vec__77846,opts__24583__auto__){
return (function (_77864){var self__ = this;
var _77864__$1 = this;return self__.meta77863;
});})(owner,query,data,validate__837__auto__,ufv__,output_schema77849,input_schema77850,input_checker77851,output_checker77852,vec__77846,opts__24583__auto__))
;
stuttaford.radiant.datalog.t77862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema77849,input_schema77850,input_checker77851,output_checker77852,vec__77846,opts__24583__auto__){
return (function (_77864,meta77863__$1){var self__ = this;
var _77864__$1 = this;return (new stuttaford.radiant.datalog.t77862(self__.query,self__.output_checker77852,self__.opts__24583__auto__,self__.owner,self__.p__77823,self__.G__77853,self__.query_input,self__.data,self__.owner77821,self__.vec__77846,self__.data__24582__auto__,self__.output_schema77849,self__.input_checker77851,self__.input_schema77850,self__.validate__837__auto__,self__.map77847,self__.ufv__,self__.fnk77848,meta77863__$1));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema77849,input_schema77850,input_checker77851,output_checker77852,vec__77846,opts__24583__auto__))
;
stuttaford.radiant.datalog.__GT_t77862 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema77849,input_schema77850,input_checker77851,output_checker77852,vec__77846,opts__24583__auto__){
return (function __GT_t77862(query__$1,output_checker77852__$1,opts__24583__auto____$1,owner__$1,p__77823__$1,G__77853__$1,query_input__$1,data__$1,owner77821__$1,vec__77846__$1,data__24582__auto____$1,output_schema77849__$1,input_checker77851__$1,input_schema77850__$1,validate__837__auto____$1,map77847__$1,ufv____$1,fnk77848__$1,meta77863){return (new stuttaford.radiant.datalog.t77862(query__$1,output_checker77852__$1,opts__24583__auto____$1,owner__$1,p__77823__$1,G__77853__$1,query_input__$1,data__$1,owner77821__$1,vec__77846__$1,data__24582__auto____$1,output_schema77849__$1,input_checker77851__$1,input_schema77850__$1,validate__837__auto____$1,map77847__$1,ufv____$1,fnk77848__$1,meta77863));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema77849,input_schema77850,input_checker77851,output_checker77852,vec__77846,opts__24583__auto__))
;
}
return (new stuttaford.radiant.datalog.t77862(query,output_checker77852,opts__24583__auto__,owner,p__77823,G__77853,query_input,data,owner77821,vec__77846,data__24582__auto__,output_schema77849,input_checker77851,input_schema77850,validate__837__auto__,map77847,ufv__,fnk77848,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___77871 = (function (){var G__77867 = o__840__auto__;return (output_checker77852.cljs$core$IFn$_invoke$arity$1 ? output_checker77852.cljs$core$IFn$_invoke$arity$1(G__77867) : output_checker77852.call(null,G__77867));
})();if(cljs.core.truth_(temp__4126__auto___77871))
{var error__839__auto___77872 = temp__4126__auto___77871;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk77848","fnk77848",-205252737,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77872], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema77849,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77872], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema77849,input_schema77850,input_checker77851,output_checker77852,vec__77846,opts__24583__auto__))
,schema.core.make_fn_schema(output_schema77849,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema77850], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24583__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner77821,new cljs.core.Keyword(null,"data","data",-232669377),data__24582__auto__], null));
};
var query_input = function (data__24582__auto__,owner77821,var_args){
var p__77823 = null;if (arguments.length > 2) {
  p__77823 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return query_input__delegate.call(this,data__24582__auto__,owner77821,p__77823);};
query_input.cljs$lang$maxFixedArity = 2;
query_input.cljs$lang$applyTo = (function (arglist__77873){
var data__24582__auto__ = cljs.core.first(arglist__77873);
arglist__77873 = cljs.core.next(arglist__77873);
var owner77821 = cljs.core.first(arglist__77873);
var p__77823 = cljs.core.rest(arglist__77873);
return query_input__delegate(data__24582__auto__,owner77821,p__77823);
});
query_input.cljs$core$IFn$_invoke$arity$variadic = query_input__delegate;
return query_input;
})()
;
stuttaford.radiant.datalog.__GT_query_input = (function() {
var __GT_query_input = null;
var __GT_query_input__1 = (function (cursor__24551__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datalog.query_input,cursor__24551__auto__);
});
var __GT_query_input__2 = (function (cursor__24551__auto__,m77822){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datalog.query_input,cursor__24551__auto__,m77822);
});
__GT_query_input = function(cursor__24551__auto__,m77822){
switch(arguments.length){
case 1:
return __GT_query_input__1.call(this,cursor__24551__auto__);
case 2:
return __GT_query_input__2.call(this,cursor__24551__auto__,m77822);
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
var datalog__delegate = function (data__24582__auto__,owner77874,p__77876){var vec__77909 = p__77876;var opts__24583__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77909,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema77912 = schema.core.Any;var input_schema77913 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"query","query",-1288509510)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-db","current-db",213667882)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684)),schema.core.Any,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map77910","map77910",1655530252,null))], null);var input_checker77914 = schema.core.checker(input_schema77913);var output_checker77915 = schema.core.checker(output_schema77912);return schema.core.schematize_fn(((function (ufv__,output_schema77912,input_schema77913,input_checker77914,output_checker77915,vec__77909,opts__24583__auto__){
return (function fnk77911(G__77916){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___77941 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__77916], null);var temp__4126__auto___77942 = (function (){var G__77929 = args__838__auto___77941;return (input_checker77914.cljs$core$IFn$_invoke$arity$1 ? input_checker77914.cljs$core$IFn$_invoke$arity$1(G__77929) : input_checker77914.call(null,G__77929));
})();if(cljs.core.truth_(temp__4126__auto___77942))
{var error__839__auto___77943 = temp__4126__auto___77942;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk77911","fnk77911",1827031560,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77943], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema77913,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___77941,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77943], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map77910 = G__77916;while(true){
if(cljs.core.map_QMARK_(map77910))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map77910], 0))));
}
var data = plumbing.fnk.schema.safe_get(map77910,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var data_sources = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684),null);var current_db = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-db","current-db",213667882),null);var query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"query","query",-1288509510),"");var owner = plumbing.fnk.schema.safe_get(map77910,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datalog.t77930 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datalog.t77930 = (function (vec__77909,query,opts__24583__auto__,datalog,current_data_source,p__77876,owner,data,G__77916,output_schema77912,fnk77911,output_checker77915,map77910,data_sources,current_db,data__24582__auto__,owner77874,input_schema77913,validate__837__auto__,ufv__,input_checker77914,meta77931){
this.vec__77909 = vec__77909;
this.query = query;
this.opts__24583__auto__ = opts__24583__auto__;
this.datalog = datalog;
this.current_data_source = current_data_source;
this.p__77876 = p__77876;
this.owner = owner;
this.data = data;
this.G__77916 = G__77916;
this.output_schema77912 = output_schema77912;
this.fnk77911 = fnk77911;
this.output_checker77915 = output_checker77915;
this.map77910 = map77910;
this.data_sources = data_sources;
this.current_db = current_db;
this.data__24582__auto__ = data__24582__auto__;
this.owner77874 = owner77874;
this.input_schema77913 = input_schema77913;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.input_checker77914 = input_checker77914;
this.meta77931 = meta77931;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datalog.t77930.cljs$lang$type = true;
stuttaford.radiant.datalog.t77930.cljs$lang$ctorStr = "stuttaford.radiant.datalog/t77930";
stuttaford.radiant.datalog.t77930.cljs$lang$ctorPrWriter = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77912,input_schema77913,input_checker77914,output_checker77915,vec__77909,opts__24583__auto__){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"stuttaford.radiant.datalog/t77930");
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77912,input_schema77913,input_checker77914,output_checker77915,vec__77909,opts__24583__auto__))
;
stuttaford.radiant.datalog.t77930.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datalog.t77930.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77912,input_schema77913,input_checker77914,output_checker77915,vec__77909,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "datalog";
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77912,input_schema77913,input_checker77914,output_checker77915,vec__77909,opts__24583__auto__))
;
stuttaford.radiant.datalog.t77930.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.datalog.t77930.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77912,input_schema77913,input_checker77914,output_checker77915,vec__77909,opts__24583__auto__){
return (function (_,p__77933){var self__ = this;
var map__77934 = p__77933;var map__77934__$1 = ((cljs.core.seq_QMARK_(map__77934))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77934):map__77934);var sort = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77934__$1,new cljs.core.Keyword(null,"sort","sort",953465918),(0));var ___$1 = this;var attrs77935 = stuttaford.radiant.datalog.__GT_query_input.cljs$core$IFn$_invoke$arity$1(self__.data);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs77935))?sablono.interpreter.attributes(attrs77935):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs77935))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var temp__4126__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4126__auto__))
{var query__$2 = temp__4126__auto__;return stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(query__$2)),new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var G__77936 = query__$2;var G__77937 = self__.current_db;return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__77936,G__77937) : datascript.q.call(null,G__77936,G__77937));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),true], null)], null));
} else
{return null;
}
})())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs77935),sablono.interpreter.interpret((function (){var temp__4126__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4126__auto__))
{var query__$2 = temp__4126__auto__;return stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(query__$2)),new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var G__77938 = query__$2;var G__77939 = self__.current_db;return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__77938,G__77939) : datascript.q.call(null,G__77938,G__77939));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),true], null)], null));
} else
{return null;
}
})())], null))));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77912,input_schema77913,input_checker77914,output_checker77915,vec__77909,opts__24583__auto__))
;
stuttaford.radiant.datalog.t77930.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77912,input_schema77913,input_checker77914,output_checker77915,vec__77909,opts__24583__auto__){
return (function (_77932){var self__ = this;
var _77932__$1 = this;return self__.meta77931;
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77912,input_schema77913,input_checker77914,output_checker77915,vec__77909,opts__24583__auto__))
;
stuttaford.radiant.datalog.t77930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77912,input_schema77913,input_checker77914,output_checker77915,vec__77909,opts__24583__auto__){
return (function (_77932,meta77931__$1){var self__ = this;
var _77932__$1 = this;return (new stuttaford.radiant.datalog.t77930(self__.vec__77909,self__.query,self__.opts__24583__auto__,self__.datalog,self__.current_data_source,self__.p__77876,self__.owner,self__.data,self__.G__77916,self__.output_schema77912,self__.fnk77911,self__.output_checker77915,self__.map77910,self__.data_sources,self__.current_db,self__.data__24582__auto__,self__.owner77874,self__.input_schema77913,self__.validate__837__auto__,self__.ufv__,self__.input_checker77914,meta77931__$1));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77912,input_schema77913,input_checker77914,output_checker77915,vec__77909,opts__24583__auto__))
;
stuttaford.radiant.datalog.__GT_t77930 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77912,input_schema77913,input_checker77914,output_checker77915,vec__77909,opts__24583__auto__){
return (function __GT_t77930(vec__77909__$1,query__$1,opts__24583__auto____$1,datalog__$1,current_data_source__$1,p__77876__$1,owner__$1,data__$1,G__77916__$1,output_schema77912__$1,fnk77911__$1,output_checker77915__$1,map77910__$1,data_sources__$1,current_db__$1,data__24582__auto____$1,owner77874__$1,input_schema77913__$1,validate__837__auto____$1,ufv____$1,input_checker77914__$1,meta77931){return (new stuttaford.radiant.datalog.t77930(vec__77909__$1,query__$1,opts__24583__auto____$1,datalog__$1,current_data_source__$1,p__77876__$1,owner__$1,data__$1,G__77916__$1,output_schema77912__$1,fnk77911__$1,output_checker77915__$1,map77910__$1,data_sources__$1,current_db__$1,data__24582__auto____$1,owner77874__$1,input_schema77913__$1,validate__837__auto____$1,ufv____$1,input_checker77914__$1,meta77931));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema77912,input_schema77913,input_checker77914,output_checker77915,vec__77909,opts__24583__auto__))
;
}
return (new stuttaford.radiant.datalog.t77930(vec__77909,query,opts__24583__auto__,datalog,current_data_source,p__77876,owner,data,G__77916,output_schema77912,fnk77911,output_checker77915,map77910,data_sources,current_db,data__24582__auto__,owner77874,input_schema77913,validate__837__auto__,ufv__,input_checker77914,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___77944 = (function (){var G__77940 = o__840__auto__;return (output_checker77915.cljs$core$IFn$_invoke$arity$1 ? output_checker77915.cljs$core$IFn$_invoke$arity$1(G__77940) : output_checker77915.call(null,G__77940));
})();if(cljs.core.truth_(temp__4126__auto___77944))
{var error__839__auto___77945 = temp__4126__auto___77944;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk77911","fnk77911",1827031560,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77945], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema77912,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77945], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema77912,input_schema77913,input_checker77914,output_checker77915,vec__77909,opts__24583__auto__))
,schema.core.make_fn_schema(output_schema77912,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema77913], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24583__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner77874,new cljs.core.Keyword(null,"data","data",-232669377),data__24582__auto__], null));
};
var datalog = function (data__24582__auto__,owner77874,var_args){
var p__77876 = null;if (arguments.length > 2) {
  p__77876 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datalog__delegate.call(this,data__24582__auto__,owner77874,p__77876);};
datalog.cljs$lang$maxFixedArity = 2;
datalog.cljs$lang$applyTo = (function (arglist__77946){
var data__24582__auto__ = cljs.core.first(arglist__77946);
arglist__77946 = cljs.core.next(arglist__77946);
var owner77874 = cljs.core.first(arglist__77946);
var p__77876 = cljs.core.rest(arglist__77946);
return datalog__delegate(data__24582__auto__,owner77874,p__77876);
});
datalog.cljs$core$IFn$_invoke$arity$variadic = datalog__delegate;
return datalog;
})()
;
stuttaford.radiant.datalog.__GT_datalog = (function() {
var __GT_datalog = null;
var __GT_datalog__1 = (function (cursor__24551__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datalog.datalog,cursor__24551__auto__);
});
var __GT_datalog__2 = (function (cursor__24551__auto__,m77875){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datalog.datalog,cursor__24551__auto__,m77875);
});
__GT_datalog = function(cursor__24551__auto__,m77875){
switch(arguments.length){
case 1:
return __GT_datalog__1.call(this,cursor__24551__auto__);
case 2:
return __GT_datalog__2.call(this,cursor__24551__auto__,m77875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_datalog.cljs$core$IFn$_invoke$arity$1 = __GT_datalog__1;
__GT_datalog.cljs$core$IFn$_invoke$arity$2 = __GT_datalog__2;
return __GT_datalog;
})()
;
//# sourceMappingURL=datalog.js.map