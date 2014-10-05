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
stuttaford.radiant.datalog.maybe_parse_query = (function maybe_parse_query(s){try{var G__51044 = s;var G__51044__$1 = (((G__51044 == null))?null:cljs.reader.read_string(G__51044));var G__51044__$2 = (((G__51044__$1 == null))?null:datascript.query.parse_query(G__51044__$1));return G__51044__$2;
}catch (e51043){var e = e51043;return null;
}});
stuttaford.radiant.datalog.handle_query_input_change = (function handle_query_input_change(data,owner){var input = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"input");var text = input.value;return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"query","query",-1288509510),text);
});
/**
* @param {...*} var_args
*/
stuttaford.radiant.datalog.query_input = (function() { 
var query_input__delegate = function (data__24197__auto__,owner51045,p__51047){var vec__51070 = p__51047;var opts__24198__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51070,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema51073 = schema.core.Any;var input_schema51074 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map51071","map51071",-1532981128,null))], null);var input_checker51075 = schema.core.checker(input_schema51074);var output_checker51076 = schema.core.checker(output_schema51073);return schema.core.schematize_fn(((function (ufv__,output_schema51073,input_schema51074,input_checker51075,output_checker51076,vec__51070,opts__24198__auto__){
return (function fnk51072(G__51077){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___51092 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__51077], null);var temp__4126__auto___51093 = (function (){var G__51085 = args__838__auto___51092;return (input_checker51075.cljs$core$IFn$_invoke$arity$1 ? input_checker51075.cljs$core$IFn$_invoke$arity$1(G__51085) : input_checker51075.call(null,G__51085));
})();if(cljs.core.truth_(temp__4126__auto___51093))
{var error__839__auto___51094 = temp__4126__auto___51093;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk51072","fnk51072",-392237509,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___51094], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema51074,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___51092,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___51094], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map51071 = G__51077;while(true){
if(cljs.core.map_QMARK_(map51071))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map51071], 0))));
}
var data = plumbing.fnk.schema.safe_get(map51071,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var query = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map51071,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datalog.t51086 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datalog.t51086 = (function (query,output_schema51073,data__24197__auto__,owner,query_input,data,input_schema51074,input_checker51075,vec__51070,opts__24198__auto__,output_checker51076,map51071,validate__837__auto__,fnk51072,p__51047,G__51077,owner51045,ufv__,meta51087){
this.query = query;
this.output_schema51073 = output_schema51073;
this.data__24197__auto__ = data__24197__auto__;
this.owner = owner;
this.query_input = query_input;
this.data = data;
this.input_schema51074 = input_schema51074;
this.input_checker51075 = input_checker51075;
this.vec__51070 = vec__51070;
this.opts__24198__auto__ = opts__24198__auto__;
this.output_checker51076 = output_checker51076;
this.map51071 = map51071;
this.validate__837__auto__ = validate__837__auto__;
this.fnk51072 = fnk51072;
this.p__51047 = p__51047;
this.G__51077 = G__51077;
this.owner51045 = owner51045;
this.ufv__ = ufv__;
this.meta51087 = meta51087;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datalog.t51086.cljs$lang$type = true;
stuttaford.radiant.datalog.t51086.cljs$lang$ctorStr = "stuttaford.radiant.datalog/t51086";
stuttaford.radiant.datalog.t51086.cljs$lang$ctorPrWriter = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema51073,input_schema51074,input_checker51075,output_checker51076,vec__51070,opts__24198__auto__){
return (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"stuttaford.radiant.datalog/t51086");
});})(owner,query,data,validate__837__auto__,ufv__,output_schema51073,input_schema51074,input_checker51075,output_checker51076,vec__51070,opts__24198__auto__))
;
stuttaford.radiant.datalog.t51086.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datalog.t51086.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema51073,input_schema51074,input_checker51075,output_checker51076,vec__51070,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "query-input";
});})(owner,query,data,validate__837__auto__,ufv__,output_schema51073,input_schema51074,input_checker51075,output_checker51076,vec__51070,opts__24198__auto__))
;
stuttaford.radiant.datalog.t51086.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.datalog.t51086.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema51073,input_schema51074,input_checker51075,output_checker51076,vec__51070,opts__24198__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"query-input"], null),cljs.core.array_seq([om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(6)], null),cljs.core.array_seq([om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),true,new cljs.core.Keyword(null,"rows","rows",850049680),(8),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"[:find ?e ?v :in $ :where [?e :attr ?v]]",new cljs.core.Keyword(null,"value","value",305978217),self__.query,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),((cljs.core.seq(self__.query))?(cljs.core.truth_(stuttaford.radiant.datalog.maybe_parse_query(self__.query))?"success":"error"):null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (___$1,owner,query,data,validate__837__auto__,ufv__,output_schema51073,input_schema51074,input_checker51075,output_checker51076,vec__51070,opts__24198__auto__){
return (function (){return stuttaford.radiant.datalog.handle_query_input_change(self__.data,self__.owner);
});})(___$1,owner,query,data,validate__837__auto__,ufv__,output_schema51073,input_schema51074,input_checker51075,output_checker51076,vec__51070,opts__24198__auto__))
], null))], 0)),om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(6)], null),cljs.core.array_seq([(function (){var attrs51089 = (function (){var temp__4124__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4124__auto__))
{var parsed_query = temp__4124__auto__;var map__51090 = parsed_query;var map__51090__$1 = ((cljs.core.seq_QMARK_(map__51090))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51090):map__51090);var where = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51090__$1,new cljs.core.Keyword(null,"where","where",-2044795965));var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51090__$1,new cljs.core.Keyword(null,"in","in",-1531184865));var find = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51090__$1,new cljs.core.Keyword(null,"find","find",496279456));return ("[:find "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",find)))+"\n :in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",in$)))+"\n :where\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose("\n ",where)))+"]");
} else
{return "Not a valid query.";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.pre,((cljs.core.map_QMARK_(attrs51089))?sablono.interpreter.attributes(attrs51089):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs51089))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs51089)], null))));
})()], 0))], 0));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema51073,input_schema51074,input_checker51075,output_checker51076,vec__51070,opts__24198__auto__))
;
stuttaford.radiant.datalog.t51086.prototype.om$core$IInitState$ = true;
stuttaford.radiant.datalog.t51086.prototype.om$core$IInitState$init_state$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema51073,input_schema51074,input_checker51075,output_checker51076,vec__51070,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),""], null);
});})(owner,query,data,validate__837__auto__,ufv__,output_schema51073,input_schema51074,input_checker51075,output_checker51076,vec__51070,opts__24198__auto__))
;
stuttaford.radiant.datalog.t51086.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema51073,input_schema51074,input_checker51075,output_checker51076,vec__51070,opts__24198__auto__){
return (function (_51088){var self__ = this;
var _51088__$1 = this;return self__.meta51087;
});})(owner,query,data,validate__837__auto__,ufv__,output_schema51073,input_schema51074,input_checker51075,output_checker51076,vec__51070,opts__24198__auto__))
;
stuttaford.radiant.datalog.t51086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema51073,input_schema51074,input_checker51075,output_checker51076,vec__51070,opts__24198__auto__){
return (function (_51088,meta51087__$1){var self__ = this;
var _51088__$1 = this;return (new stuttaford.radiant.datalog.t51086(self__.query,self__.output_schema51073,self__.data__24197__auto__,self__.owner,self__.query_input,self__.data,self__.input_schema51074,self__.input_checker51075,self__.vec__51070,self__.opts__24198__auto__,self__.output_checker51076,self__.map51071,self__.validate__837__auto__,self__.fnk51072,self__.p__51047,self__.G__51077,self__.owner51045,self__.ufv__,meta51087__$1));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema51073,input_schema51074,input_checker51075,output_checker51076,vec__51070,opts__24198__auto__))
;
stuttaford.radiant.datalog.__GT_t51086 = ((function (owner,query,data,validate__837__auto__,ufv__,output_schema51073,input_schema51074,input_checker51075,output_checker51076,vec__51070,opts__24198__auto__){
return (function __GT_t51086(query__$1,output_schema51073__$1,data__24197__auto____$1,owner__$1,query_input__$1,data__$1,input_schema51074__$1,input_checker51075__$1,vec__51070__$1,opts__24198__auto____$1,output_checker51076__$1,map51071__$1,validate__837__auto____$1,fnk51072__$1,p__51047__$1,G__51077__$1,owner51045__$1,ufv____$1,meta51087){return (new stuttaford.radiant.datalog.t51086(query__$1,output_schema51073__$1,data__24197__auto____$1,owner__$1,query_input__$1,data__$1,input_schema51074__$1,input_checker51075__$1,vec__51070__$1,opts__24198__auto____$1,output_checker51076__$1,map51071__$1,validate__837__auto____$1,fnk51072__$1,p__51047__$1,G__51077__$1,owner51045__$1,ufv____$1,meta51087));
});})(owner,query,data,validate__837__auto__,ufv__,output_schema51073,input_schema51074,input_checker51075,output_checker51076,vec__51070,opts__24198__auto__))
;
}
return (new stuttaford.radiant.datalog.t51086(query,output_schema51073,data__24197__auto__,owner,query_input,data,input_schema51074,input_checker51075,vec__51070,opts__24198__auto__,output_checker51076,map51071,validate__837__auto__,fnk51072,p__51047,G__51077,owner51045,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___51095 = (function (){var G__51091 = o__840__auto__;return (output_checker51076.cljs$core$IFn$_invoke$arity$1 ? output_checker51076.cljs$core$IFn$_invoke$arity$1(G__51091) : output_checker51076.call(null,G__51091));
})();if(cljs.core.truth_(temp__4126__auto___51095))
{var error__839__auto___51096 = temp__4126__auto___51095;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk51072","fnk51072",-392237509,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___51096], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema51073,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___51096], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema51073,input_schema51074,input_checker51075,output_checker51076,vec__51070,opts__24198__auto__))
,schema.core.make_fn_schema(output_schema51073,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema51074], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24198__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner51045,new cljs.core.Keyword(null,"data","data",-232669377),data__24197__auto__], null));
};
var query_input = function (data__24197__auto__,owner51045,var_args){
var p__51047 = null;if (arguments.length > 2) {
  p__51047 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return query_input__delegate.call(this,data__24197__auto__,owner51045,p__51047);};
query_input.cljs$lang$maxFixedArity = 2;
query_input.cljs$lang$applyTo = (function (arglist__51097){
var data__24197__auto__ = cljs.core.first(arglist__51097);
arglist__51097 = cljs.core.next(arglist__51097);
var owner51045 = cljs.core.first(arglist__51097);
var p__51047 = cljs.core.rest(arglist__51097);
return query_input__delegate(data__24197__auto__,owner51045,p__51047);
});
query_input.cljs$core$IFn$_invoke$arity$variadic = query_input__delegate;
return query_input;
})()
;
stuttaford.radiant.datalog.__GT_query_input = (function() {
var __GT_query_input = null;
var __GT_query_input__1 = (function (cursor__24166__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datalog.query_input,cursor__24166__auto__);
});
var __GT_query_input__2 = (function (cursor__24166__auto__,m51046){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datalog.query_input,cursor__24166__auto__,m51046);
});
__GT_query_input = function(cursor__24166__auto__,m51046){
switch(arguments.length){
case 1:
return __GT_query_input__1.call(this,cursor__24166__auto__);
case 2:
return __GT_query_input__2.call(this,cursor__24166__auto__,m51046);
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
var datalog__delegate = function (data__24197__auto__,owner51098,p__51100){var vec__51141 = p__51100;var opts__24198__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51141,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema51144 = schema.core.Any;var input_schema51145 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"query","query",-1288509510)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-db","current-db",213667882)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684)),schema.core.Any,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map51142","map51142",2007900977,null))], null);var input_checker51146 = schema.core.checker(input_schema51145);var output_checker51147 = schema.core.checker(output_schema51144);return schema.core.schematize_fn(((function (ufv__,output_schema51144,input_schema51145,input_checker51146,output_checker51147,vec__51141,opts__24198__auto__){
return (function fnk51143(G__51148){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___51181 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__51148], null);var temp__4126__auto___51182 = (function (){var G__51165 = args__838__auto___51181;return (input_checker51146.cljs$core$IFn$_invoke$arity$1 ? input_checker51146.cljs$core$IFn$_invoke$arity$1(G__51165) : input_checker51146.call(null,G__51165));
})();if(cljs.core.truth_(temp__4126__auto___51182))
{var error__839__auto___51183 = temp__4126__auto___51182;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk51143","fnk51143",-214636808,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___51183], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema51145,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___51181,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___51183], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map51142 = G__51148;while(true){
if(cljs.core.map_QMARK_(map51142))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map51142], 0))));
}
var data = plumbing.fnk.schema.safe_get(map51142,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var data_sources = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var current_data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-data-source","current-data-source",-103499684),null);var current_db = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"current-db","current-db",213667882),null);var query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"query","query",-1288509510),"");var owner = plumbing.fnk.schema.safe_get(map51142,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.datalog.t51166 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.datalog.t51166 = (function (query,data__24197__auto__,datalog,current_data_source,owner,data,owner51098,G__51148,output_schema51144,p__51100,opts__24198__auto__,output_checker51147,vec__51141,input_schema51145,data_sources,current_db,map51142,fnk51143,input_checker51146,validate__837__auto__,ufv__,meta51167){
this.query = query;
this.data__24197__auto__ = data__24197__auto__;
this.datalog = datalog;
this.current_data_source = current_data_source;
this.owner = owner;
this.data = data;
this.owner51098 = owner51098;
this.G__51148 = G__51148;
this.output_schema51144 = output_schema51144;
this.p__51100 = p__51100;
this.opts__24198__auto__ = opts__24198__auto__;
this.output_checker51147 = output_checker51147;
this.vec__51141 = vec__51141;
this.input_schema51145 = input_schema51145;
this.data_sources = data_sources;
this.current_db = current_db;
this.map51142 = map51142;
this.fnk51143 = fnk51143;
this.input_checker51146 = input_checker51146;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.meta51167 = meta51167;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.datalog.t51166.cljs$lang$type = true;
stuttaford.radiant.datalog.t51166.cljs$lang$ctorStr = "stuttaford.radiant.datalog/t51166";
stuttaford.radiant.datalog.t51166.cljs$lang$ctorPrWriter = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema51144,input_schema51145,input_checker51146,output_checker51147,vec__51141,opts__24198__auto__){
return (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"stuttaford.radiant.datalog/t51166");
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema51144,input_schema51145,input_checker51146,output_checker51147,vec__51141,opts__24198__auto__))
;
stuttaford.radiant.datalog.t51166.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.datalog.t51166.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema51144,input_schema51145,input_checker51146,output_checker51147,vec__51141,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "datalog";
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema51144,input_schema51145,input_checker51146,output_checker51147,vec__51141,opts__24198__auto__))
;
stuttaford.radiant.datalog.t51166.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.datalog.t51166.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema51144,input_schema51145,input_checker51146,output_checker51147,vec__51141,opts__24198__auto__){
return (function (_,p__51169){var self__ = this;
var map__51170 = p__51169;var map__51170__$1 = ((cljs.core.seq_QMARK_(map__51170))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51170):map__51170);var sort = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51170__$1,new cljs.core.Keyword(null,"sort","sort",953465918),(0));var ___$1 = this;var attrs51171 = stuttaford.radiant.datalog.__GT_query_input.cljs$core$IFn$_invoke$arity$1(self__.data);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs51171))?sablono.interpreter.attributes(attrs51171):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs51171))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var temp__4126__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4126__auto__))
{var query__$2 = temp__4126__auto__;return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(query__$2)),new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var G__51172 = query__$2;var G__51173 = self__.current_db;return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__51172,G__51173) : datascript.q.call(null,G__51172,G__51173));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),true], null)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null)),((cljs.core.not(stuttaford.om.common.config.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"debug?","debug?",-1831756173))))?cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__51174 = query__$2;var G__51175 = self__.current_db;return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__51174,G__51175) : datascript.q.call(null,G__51174,G__51175));
})()], 0))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.current_db], 0))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([query__$2], 0))], null)):null));
} else
{return null;
}
})())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs51171),sablono.interpreter.interpret((function (){var temp__4126__auto__ = stuttaford.radiant.datalog.maybe_parse_query(self__.query);if(cljs.core.truth_(temp__4126__auto__))
{var query__$2 = temp__4126__auto__;return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,stuttaford.radiant.components.__GT_result_table.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(query__$2)),new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var G__51176 = query__$2;var G__51177 = self__.current_db;return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__51176,G__51177) : datascript.q.call(null,G__51176,G__51177));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-sorting?","allow-sorting?",-479215260),true], null)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null)),((cljs.core.not(stuttaford.om.common.config.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"debug?","debug?",-1831756173))))?cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__51178 = query__$2;var G__51179 = self__.current_db;return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__51178,G__51179) : datascript.q.call(null,G__51178,G__51179));
})()], 0))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.current_db], 0))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([query__$2], 0))], null)):null));
} else
{return null;
}
})())], null))));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema51144,input_schema51145,input_checker51146,output_checker51147,vec__51141,opts__24198__auto__))
;
stuttaford.radiant.datalog.t51166.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema51144,input_schema51145,input_checker51146,output_checker51147,vec__51141,opts__24198__auto__){
return (function (_51168){var self__ = this;
var _51168__$1 = this;return self__.meta51167;
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema51144,input_schema51145,input_checker51146,output_checker51147,vec__51141,opts__24198__auto__))
;
stuttaford.radiant.datalog.t51166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema51144,input_schema51145,input_checker51146,output_checker51147,vec__51141,opts__24198__auto__){
return (function (_51168,meta51167__$1){var self__ = this;
var _51168__$1 = this;return (new stuttaford.radiant.datalog.t51166(self__.query,self__.data__24197__auto__,self__.datalog,self__.current_data_source,self__.owner,self__.data,self__.owner51098,self__.G__51148,self__.output_schema51144,self__.p__51100,self__.opts__24198__auto__,self__.output_checker51147,self__.vec__51141,self__.input_schema51145,self__.data_sources,self__.current_db,self__.map51142,self__.fnk51143,self__.input_checker51146,self__.validate__837__auto__,self__.ufv__,meta51167__$1));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema51144,input_schema51145,input_checker51146,output_checker51147,vec__51141,opts__24198__auto__))
;
stuttaford.radiant.datalog.__GT_t51166 = ((function (owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema51144,input_schema51145,input_checker51146,output_checker51147,vec__51141,opts__24198__auto__){
return (function __GT_t51166(query__$1,data__24197__auto____$1,datalog__$1,current_data_source__$1,owner__$1,data__$1,owner51098__$1,G__51148__$1,output_schema51144__$1,p__51100__$1,opts__24198__auto____$1,output_checker51147__$1,vec__51141__$1,input_schema51145__$1,data_sources__$1,current_db__$1,map51142__$1,fnk51143__$1,input_checker51146__$1,validate__837__auto____$1,ufv____$1,meta51167){return (new stuttaford.radiant.datalog.t51166(query__$1,data__24197__auto____$1,datalog__$1,current_data_source__$1,owner__$1,data__$1,owner51098__$1,G__51148__$1,output_schema51144__$1,p__51100__$1,opts__24198__auto____$1,output_checker51147__$1,vec__51141__$1,input_schema51145__$1,data_sources__$1,current_db__$1,map51142__$1,fnk51143__$1,input_checker51146__$1,validate__837__auto____$1,ufv____$1,meta51167));
});})(owner,query,current_db,current_data_source,data_sources,data,validate__837__auto__,ufv__,output_schema51144,input_schema51145,input_checker51146,output_checker51147,vec__51141,opts__24198__auto__))
;
}
return (new stuttaford.radiant.datalog.t51166(query,data__24197__auto__,datalog,current_data_source,owner,data,owner51098,G__51148,output_schema51144,p__51100,opts__24198__auto__,output_checker51147,vec__51141,input_schema51145,data_sources,current_db,map51142,fnk51143,input_checker51146,validate__837__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___51184 = (function (){var G__51180 = o__840__auto__;return (output_checker51147.cljs$core$IFn$_invoke$arity$1 ? output_checker51147.cljs$core$IFn$_invoke$arity$1(G__51180) : output_checker51147.call(null,G__51180));
})();if(cljs.core.truth_(temp__4126__auto___51184))
{var error__839__auto___51185 = temp__4126__auto___51184;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk51143","fnk51143",-214636808,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___51185], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema51144,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___51185], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema51144,input_schema51145,input_checker51146,output_checker51147,vec__51141,opts__24198__auto__))
,schema.core.make_fn_schema(output_schema51144,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema51145], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24198__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner51098,new cljs.core.Keyword(null,"data","data",-232669377),data__24197__auto__], null));
};
var datalog = function (data__24197__auto__,owner51098,var_args){
var p__51100 = null;if (arguments.length > 2) {
  p__51100 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datalog__delegate.call(this,data__24197__auto__,owner51098,p__51100);};
datalog.cljs$lang$maxFixedArity = 2;
datalog.cljs$lang$applyTo = (function (arglist__51186){
var data__24197__auto__ = cljs.core.first(arglist__51186);
arglist__51186 = cljs.core.next(arglist__51186);
var owner51098 = cljs.core.first(arglist__51186);
var p__51100 = cljs.core.rest(arglist__51186);
return datalog__delegate(data__24197__auto__,owner51098,p__51100);
});
datalog.cljs$core$IFn$_invoke$arity$variadic = datalog__delegate;
return datalog;
})()
;
stuttaford.radiant.datalog.__GT_datalog = (function() {
var __GT_datalog = null;
var __GT_datalog__1 = (function (cursor__24166__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.datalog.datalog,cursor__24166__auto__);
});
var __GT_datalog__2 = (function (cursor__24166__auto__,m51099){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.datalog.datalog,cursor__24166__auto__,m51099);
});
__GT_datalog = function(cursor__24166__auto__,m51099){
switch(arguments.length){
case 1:
return __GT_datalog__1.call(this,cursor__24166__auto__);
case 2:
return __GT_datalog__2.call(this,cursor__24166__auto__,m51099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_datalog.cljs$core$IFn$_invoke$arity$1 = __GT_datalog__1;
__GT_datalog.cljs$core$IFn$_invoke$arity$2 = __GT_datalog__2;
return __GT_datalog;
})()
;
//# sourceMappingURL=datalog.js.map