goog.provide('stuttaford.radiant.transactions');
goog.require('cljs.core');
goog.require('stuttaford.radiant.components');
goog.require('stuttaford.radiant.components');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('datascript');
goog.require('datascript');
/**
* @param {...*} var_args
*/
stuttaford.radiant.transactions.transactions = (function() { 
var transactions__delegate = function (data__24427__auto__,owner58037,p__58039){var vec__58066 = p__58039;var opts__24428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58066,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema58069 = schema.core.Any;var input_schema58070 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map58067","map58067",572496698,null))], null);var input_checker58071 = schema.core.checker(input_schema58070);var output_checker58072 = schema.core.checker(output_schema58069);return schema.core.schematize_fn(((function (ufv__,output_schema58069,input_schema58070,input_checker58071,output_checker58072,vec__58066,opts__24428__auto__){
return (function fnk58068(G__58073){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___58092 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__58073], null);var temp__4126__auto___58093 = (function (){var G__58083 = args__838__auto___58092;return (input_checker58071.cljs$core$IFn$_invoke$arity$1 ? input_checker58071.cljs$core$IFn$_invoke$arity$1(G__58083) : input_checker58071.call(null,G__58083));
})();if(cljs.core.truth_(temp__4126__auto___58093))
{var error__839__auto___58094 = temp__4126__auto___58093;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk58068","fnk58068",-919414066,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___58094], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema58070,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___58092,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___58094], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map58067 = G__58073;while(true){
if(cljs.core.map_QMARK_(map58067))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map58067], 0))));
}
var data = plumbing.fnk.schema.safe_get(map58067,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map58067,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.transactions.t58084 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.transactions.t58084 = (function (owner58037,transactions,input_checker58071,owner,data,G__58073,vec__58066,fnk58068,output_checker58072,input_schema58070,output_schema58069,p__58039,map58067,validate__837__auto__,data__24427__auto__,ufv__,opts__24428__auto__,meta58085){
this.owner58037 = owner58037;
this.transactions = transactions;
this.input_checker58071 = input_checker58071;
this.owner = owner;
this.data = data;
this.G__58073 = G__58073;
this.vec__58066 = vec__58066;
this.fnk58068 = fnk58068;
this.output_checker58072 = output_checker58072;
this.input_schema58070 = input_schema58070;
this.output_schema58069 = output_schema58069;
this.p__58039 = p__58039;
this.map58067 = map58067;
this.validate__837__auto__ = validate__837__auto__;
this.data__24427__auto__ = data__24427__auto__;
this.ufv__ = ufv__;
this.opts__24428__auto__ = opts__24428__auto__;
this.meta58085 = meta58085;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.transactions.t58084.cljs$lang$type = true;
stuttaford.radiant.transactions.t58084.cljs$lang$ctorStr = "stuttaford.radiant.transactions/t58084";
stuttaford.radiant.transactions.t58084.cljs$lang$ctorPrWriter = ((function (owner,data,validate__837__auto__,ufv__,output_schema58069,input_schema58070,input_checker58071,output_checker58072,vec__58066,opts__24428__auto__){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"stuttaford.radiant.transactions/t58084");
});})(owner,data,validate__837__auto__,ufv__,output_schema58069,input_schema58070,input_checker58071,output_checker58072,vec__58066,opts__24428__auto__))
;
stuttaford.radiant.transactions.t58084.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.transactions.t58084.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema58069,input_schema58070,input_checker58071,output_checker58072,vec__58066,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "transactions";
});})(owner,data,validate__837__auto__,ufv__,output_schema58069,input_schema58070,input_checker58071,output_checker58072,vec__58066,opts__24428__auto__))
;
stuttaford.radiant.transactions.t58084.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.transactions.t58084.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema58069,input_schema58070,input_checker58071,output_checker58072,vec__58066,opts__24428__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var G__58089 = null;var G__58090 = "Transactions";return React.DOM.div(G__58089,G__58090);
});})(owner,data,validate__837__auto__,ufv__,output_schema58069,input_schema58070,input_checker58071,output_checker58072,vec__58066,opts__24428__auto__))
;
stuttaford.radiant.transactions.t58084.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema58069,input_schema58070,input_checker58071,output_checker58072,vec__58066,opts__24428__auto__){
return (function (_58086){var self__ = this;
var _58086__$1 = this;return self__.meta58085;
});})(owner,data,validate__837__auto__,ufv__,output_schema58069,input_schema58070,input_checker58071,output_checker58072,vec__58066,opts__24428__auto__))
;
stuttaford.radiant.transactions.t58084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema58069,input_schema58070,input_checker58071,output_checker58072,vec__58066,opts__24428__auto__){
return (function (_58086,meta58085__$1){var self__ = this;
var _58086__$1 = this;return (new stuttaford.radiant.transactions.t58084(self__.owner58037,self__.transactions,self__.input_checker58071,self__.owner,self__.data,self__.G__58073,self__.vec__58066,self__.fnk58068,self__.output_checker58072,self__.input_schema58070,self__.output_schema58069,self__.p__58039,self__.map58067,self__.validate__837__auto__,self__.data__24427__auto__,self__.ufv__,self__.opts__24428__auto__,meta58085__$1));
});})(owner,data,validate__837__auto__,ufv__,output_schema58069,input_schema58070,input_checker58071,output_checker58072,vec__58066,opts__24428__auto__))
;
stuttaford.radiant.transactions.__GT_t58084 = ((function (owner,data,validate__837__auto__,ufv__,output_schema58069,input_schema58070,input_checker58071,output_checker58072,vec__58066,opts__24428__auto__){
return (function __GT_t58084(owner58037__$1,transactions__$1,input_checker58071__$1,owner__$1,data__$1,G__58073__$1,vec__58066__$1,fnk58068__$1,output_checker58072__$1,input_schema58070__$1,output_schema58069__$1,p__58039__$1,map58067__$1,validate__837__auto____$1,data__24427__auto____$1,ufv____$1,opts__24428__auto____$1,meta58085){return (new stuttaford.radiant.transactions.t58084(owner58037__$1,transactions__$1,input_checker58071__$1,owner__$1,data__$1,G__58073__$1,vec__58066__$1,fnk58068__$1,output_checker58072__$1,input_schema58070__$1,output_schema58069__$1,p__58039__$1,map58067__$1,validate__837__auto____$1,data__24427__auto____$1,ufv____$1,opts__24428__auto____$1,meta58085));
});})(owner,data,validate__837__auto__,ufv__,output_schema58069,input_schema58070,input_checker58071,output_checker58072,vec__58066,opts__24428__auto__))
;
}
return (new stuttaford.radiant.transactions.t58084(owner58037,transactions,input_checker58071,owner,data,G__58073,vec__58066,fnk58068,output_checker58072,input_schema58070,output_schema58069,p__58039,map58067,validate__837__auto__,data__24427__auto__,ufv__,opts__24428__auto__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___58095 = (function (){var G__58091 = o__840__auto__;return (output_checker58072.cljs$core$IFn$_invoke$arity$1 ? output_checker58072.cljs$core$IFn$_invoke$arity$1(G__58091) : output_checker58072.call(null,G__58091));
})();if(cljs.core.truth_(temp__4126__auto___58095))
{var error__839__auto___58096 = temp__4126__auto___58095;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk58068","fnk58068",-919414066,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___58096], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema58069,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___58096], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema58069,input_schema58070,input_checker58071,output_checker58072,vec__58066,opts__24428__auto__))
,schema.core.make_fn_schema(output_schema58069,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema58070], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24428__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner58037,new cljs.core.Keyword(null,"data","data",-232669377),data__24427__auto__], null));
};
var transactions = function (data__24427__auto__,owner58037,var_args){
var p__58039 = null;if (arguments.length > 2) {
  p__58039 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return transactions__delegate.call(this,data__24427__auto__,owner58037,p__58039);};
transactions.cljs$lang$maxFixedArity = 2;
transactions.cljs$lang$applyTo = (function (arglist__58097){
var data__24427__auto__ = cljs.core.first(arglist__58097);
arglist__58097 = cljs.core.next(arglist__58097);
var owner58037 = cljs.core.first(arglist__58097);
var p__58039 = cljs.core.rest(arglist__58097);
return transactions__delegate(data__24427__auto__,owner58037,p__58039);
});
transactions.cljs$core$IFn$_invoke$arity$variadic = transactions__delegate;
return transactions;
})()
;
stuttaford.radiant.transactions.__GT_transactions = (function() {
var __GT_transactions = null;
var __GT_transactions__1 = (function (cursor__24396__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.transactions.transactions,cursor__24396__auto__);
});
var __GT_transactions__2 = (function (cursor__24396__auto__,m58038){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.transactions.transactions,cursor__24396__auto__,m58038);
});
__GT_transactions = function(cursor__24396__auto__,m58038){
switch(arguments.length){
case 1:
return __GT_transactions__1.call(this,cursor__24396__auto__);
case 2:
return __GT_transactions__2.call(this,cursor__24396__auto__,m58038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_transactions.cljs$core$IFn$_invoke$arity$1 = __GT_transactions__1;
__GT_transactions.cljs$core$IFn$_invoke$arity$2 = __GT_transactions__2;
return __GT_transactions;
})()
;
//# sourceMappingURL=transactions.js.map