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
var transactions__delegate = function (data__24172__auto__,owner40474,p__40476){var vec__40503 = p__40476;var opts__24173__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40503,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema40506 = schema.core.Any;var input_schema40507 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map40504","map40504",1170764480,null))], null);var input_checker40508 = schema.core.checker(input_schema40507);var output_checker40509 = schema.core.checker(output_schema40506);return schema.core.schematize_fn(((function (ufv__,output_schema40506,input_schema40507,input_checker40508,output_checker40509,vec__40503,opts__24173__auto__){
return (function fnk40505(G__40510){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40529 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40510], null);var temp__4126__auto___40530 = (function (){var G__40520 = args__838__auto___40529;return (input_checker40508.cljs$core$IFn$_invoke$arity$1 ? input_checker40508.cljs$core$IFn$_invoke$arity$1(G__40520) : input_checker40508.call(null,G__40520));
})();if(cljs.core.truth_(temp__4126__auto___40530))
{var error__839__auto___40531 = temp__4126__auto___40530;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk40505","fnk40505",-1144867342,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40531], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40507,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40529,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40531], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map40504 = G__40510;while(true){
if(cljs.core.map_QMARK_(map40504))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map40504], 0))));
}
var data = plumbing.fnk.schema.safe_get(map40504,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map40504,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.transactions.t40521 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.transactions.t40521 = (function (map40504,transactions,owner,input_checker40508,opts__24173__auto__,data,p__40476,owner40474,output_checker40509,data__24172__auto__,G__40510,fnk40505,input_schema40507,output_schema40506,validate__837__auto__,vec__40503,ufv__,meta40522){
this.map40504 = map40504;
this.transactions = transactions;
this.owner = owner;
this.input_checker40508 = input_checker40508;
this.opts__24173__auto__ = opts__24173__auto__;
this.data = data;
this.p__40476 = p__40476;
this.owner40474 = owner40474;
this.output_checker40509 = output_checker40509;
this.data__24172__auto__ = data__24172__auto__;
this.G__40510 = G__40510;
this.fnk40505 = fnk40505;
this.input_schema40507 = input_schema40507;
this.output_schema40506 = output_schema40506;
this.validate__837__auto__ = validate__837__auto__;
this.vec__40503 = vec__40503;
this.ufv__ = ufv__;
this.meta40522 = meta40522;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.transactions.t40521.cljs$lang$type = true;
stuttaford.radiant.transactions.t40521.cljs$lang$ctorStr = "stuttaford.radiant.transactions/t40521";
stuttaford.radiant.transactions.t40521.cljs$lang$ctorPrWriter = ((function (owner,data,validate__837__auto__,ufv__,output_schema40506,input_schema40507,input_checker40508,output_checker40509,vec__40503,opts__24173__auto__){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"stuttaford.radiant.transactions/t40521");
});})(owner,data,validate__837__auto__,ufv__,output_schema40506,input_schema40507,input_checker40508,output_checker40509,vec__40503,opts__24173__auto__))
;
stuttaford.radiant.transactions.t40521.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.transactions.t40521.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema40506,input_schema40507,input_checker40508,output_checker40509,vec__40503,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "transactions";
});})(owner,data,validate__837__auto__,ufv__,output_schema40506,input_schema40507,input_checker40508,output_checker40509,vec__40503,opts__24173__auto__))
;
stuttaford.radiant.transactions.t40521.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.transactions.t40521.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema40506,input_schema40507,input_checker40508,output_checker40509,vec__40503,opts__24173__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var G__40526 = null;var G__40527 = "Transactions";return React.DOM.div(G__40526,G__40527);
});})(owner,data,validate__837__auto__,ufv__,output_schema40506,input_schema40507,input_checker40508,output_checker40509,vec__40503,opts__24173__auto__))
;
stuttaford.radiant.transactions.t40521.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema40506,input_schema40507,input_checker40508,output_checker40509,vec__40503,opts__24173__auto__){
return (function (_40523){var self__ = this;
var _40523__$1 = this;return self__.meta40522;
});})(owner,data,validate__837__auto__,ufv__,output_schema40506,input_schema40507,input_checker40508,output_checker40509,vec__40503,opts__24173__auto__))
;
stuttaford.radiant.transactions.t40521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema40506,input_schema40507,input_checker40508,output_checker40509,vec__40503,opts__24173__auto__){
return (function (_40523,meta40522__$1){var self__ = this;
var _40523__$1 = this;return (new stuttaford.radiant.transactions.t40521(self__.map40504,self__.transactions,self__.owner,self__.input_checker40508,self__.opts__24173__auto__,self__.data,self__.p__40476,self__.owner40474,self__.output_checker40509,self__.data__24172__auto__,self__.G__40510,self__.fnk40505,self__.input_schema40507,self__.output_schema40506,self__.validate__837__auto__,self__.vec__40503,self__.ufv__,meta40522__$1));
});})(owner,data,validate__837__auto__,ufv__,output_schema40506,input_schema40507,input_checker40508,output_checker40509,vec__40503,opts__24173__auto__))
;
stuttaford.radiant.transactions.__GT_t40521 = ((function (owner,data,validate__837__auto__,ufv__,output_schema40506,input_schema40507,input_checker40508,output_checker40509,vec__40503,opts__24173__auto__){
return (function __GT_t40521(map40504__$1,transactions__$1,owner__$1,input_checker40508__$1,opts__24173__auto____$1,data__$1,p__40476__$1,owner40474__$1,output_checker40509__$1,data__24172__auto____$1,G__40510__$1,fnk40505__$1,input_schema40507__$1,output_schema40506__$1,validate__837__auto____$1,vec__40503__$1,ufv____$1,meta40522){return (new stuttaford.radiant.transactions.t40521(map40504__$1,transactions__$1,owner__$1,input_checker40508__$1,opts__24173__auto____$1,data__$1,p__40476__$1,owner40474__$1,output_checker40509__$1,data__24172__auto____$1,G__40510__$1,fnk40505__$1,input_schema40507__$1,output_schema40506__$1,validate__837__auto____$1,vec__40503__$1,ufv____$1,meta40522));
});})(owner,data,validate__837__auto__,ufv__,output_schema40506,input_schema40507,input_checker40508,output_checker40509,vec__40503,opts__24173__auto__))
;
}
return (new stuttaford.radiant.transactions.t40521(map40504,transactions,owner,input_checker40508,opts__24173__auto__,data,p__40476,owner40474,output_checker40509,data__24172__auto__,G__40510,fnk40505,input_schema40507,output_schema40506,validate__837__auto__,vec__40503,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40532 = (function (){var G__40528 = o__840__auto__;return (output_checker40509.cljs$core$IFn$_invoke$arity$1 ? output_checker40509.cljs$core$IFn$_invoke$arity$1(G__40528) : output_checker40509.call(null,G__40528));
})();if(cljs.core.truth_(temp__4126__auto___40532))
{var error__839__auto___40533 = temp__4126__auto___40532;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk40505","fnk40505",-1144867342,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40533], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40506,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40533], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema40506,input_schema40507,input_checker40508,output_checker40509,vec__40503,opts__24173__auto__))
,schema.core.make_fn_schema(output_schema40506,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40507], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24173__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner40474,new cljs.core.Keyword(null,"data","data",-232669377),data__24172__auto__], null));
};
var transactions = function (data__24172__auto__,owner40474,var_args){
var p__40476 = null;if (arguments.length > 2) {
  p__40476 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return transactions__delegate.call(this,data__24172__auto__,owner40474,p__40476);};
transactions.cljs$lang$maxFixedArity = 2;
transactions.cljs$lang$applyTo = (function (arglist__40534){
var data__24172__auto__ = cljs.core.first(arglist__40534);
arglist__40534 = cljs.core.next(arglist__40534);
var owner40474 = cljs.core.first(arglist__40534);
var p__40476 = cljs.core.rest(arglist__40534);
return transactions__delegate(data__24172__auto__,owner40474,p__40476);
});
transactions.cljs$core$IFn$_invoke$arity$variadic = transactions__delegate;
return transactions;
})()
;
stuttaford.radiant.transactions.__GT_transactions = (function() {
var __GT_transactions = null;
var __GT_transactions__1 = (function (cursor__24141__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.transactions.transactions,cursor__24141__auto__);
});
var __GT_transactions__2 = (function (cursor__24141__auto__,m40475){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.transactions.transactions,cursor__24141__auto__,m40475);
});
__GT_transactions = function(cursor__24141__auto__,m40475){
switch(arguments.length){
case 1:
return __GT_transactions__1.call(this,cursor__24141__auto__);
case 2:
return __GT_transactions__2.call(this,cursor__24141__auto__,m40475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_transactions.cljs$core$IFn$_invoke$arity$1 = __GT_transactions__1;
__GT_transactions.cljs$core$IFn$_invoke$arity$2 = __GT_transactions__2;
return __GT_transactions;
})()
;
//# sourceMappingURL=transactions.js.map