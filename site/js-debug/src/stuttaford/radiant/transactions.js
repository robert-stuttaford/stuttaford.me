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
var transactions__delegate = function (data__24457__auto__,owner49599,p__49601){var vec__49628 = p__49601;var opts__24458__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49628,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema49631 = schema.core.Any;var input_schema49632 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map49629","map49629",-1778354894,null))], null);var input_checker49633 = schema.core.checker(input_schema49632);var output_checker49634 = schema.core.checker(output_schema49631);return schema.core.schematize_fn(((function (ufv__,output_schema49631,input_schema49632,input_checker49633,output_checker49634,vec__49628,opts__24458__auto__){
return (function fnk49630(G__49635){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___49654 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__49635], null);var temp__4126__auto___49655 = (function (){var G__49645 = args__838__auto___49654;return (input_checker49633.cljs$core$IFn$_invoke$arity$1 ? input_checker49633.cljs$core$IFn$_invoke$arity$1(G__49645) : input_checker49633.call(null,G__49645));
})();if(cljs.core.truth_(temp__4126__auto___49655))
{var error__839__auto___49656 = temp__4126__auto___49655;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk49630","fnk49630",1038034554,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49656], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema49632,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___49654,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49656], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map49629 = G__49635;while(true){
if(cljs.core.map_QMARK_(map49629))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map49629], 0))));
}
var data = plumbing.fnk.schema.safe_get(map49629,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map49629,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.transactions.t49646 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.transactions.t49646 = (function (transactions,owner,output_checker49634,data,owner49599,input_checker49633,output_schema49631,map49629,G__49635,vec__49628,opts__24458__auto__,input_schema49632,fnk49630,validate__837__auto__,ufv__,data__24457__auto__,p__49601,meta49647){
this.transactions = transactions;
this.owner = owner;
this.output_checker49634 = output_checker49634;
this.data = data;
this.owner49599 = owner49599;
this.input_checker49633 = input_checker49633;
this.output_schema49631 = output_schema49631;
this.map49629 = map49629;
this.G__49635 = G__49635;
this.vec__49628 = vec__49628;
this.opts__24458__auto__ = opts__24458__auto__;
this.input_schema49632 = input_schema49632;
this.fnk49630 = fnk49630;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.data__24457__auto__ = data__24457__auto__;
this.p__49601 = p__49601;
this.meta49647 = meta49647;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.transactions.t49646.cljs$lang$type = true;
stuttaford.radiant.transactions.t49646.cljs$lang$ctorStr = "stuttaford.radiant.transactions/t49646";
stuttaford.radiant.transactions.t49646.cljs$lang$ctorPrWriter = ((function (owner,data,validate__837__auto__,ufv__,output_schema49631,input_schema49632,input_checker49633,output_checker49634,vec__49628,opts__24458__auto__){
return (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"stuttaford.radiant.transactions/t49646");
});})(owner,data,validate__837__auto__,ufv__,output_schema49631,input_schema49632,input_checker49633,output_checker49634,vec__49628,opts__24458__auto__))
;
stuttaford.radiant.transactions.t49646.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.transactions.t49646.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema49631,input_schema49632,input_checker49633,output_checker49634,vec__49628,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "transactions";
});})(owner,data,validate__837__auto__,ufv__,output_schema49631,input_schema49632,input_checker49633,output_checker49634,vec__49628,opts__24458__auto__))
;
stuttaford.radiant.transactions.t49646.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.transactions.t49646.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema49631,input_schema49632,input_checker49633,output_checker49634,vec__49628,opts__24458__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var G__49651 = null;var G__49652 = "Transactions";return React.DOM.div(G__49651,G__49652);
});})(owner,data,validate__837__auto__,ufv__,output_schema49631,input_schema49632,input_checker49633,output_checker49634,vec__49628,opts__24458__auto__))
;
stuttaford.radiant.transactions.t49646.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema49631,input_schema49632,input_checker49633,output_checker49634,vec__49628,opts__24458__auto__){
return (function (_49648){var self__ = this;
var _49648__$1 = this;return self__.meta49647;
});})(owner,data,validate__837__auto__,ufv__,output_schema49631,input_schema49632,input_checker49633,output_checker49634,vec__49628,opts__24458__auto__))
;
stuttaford.radiant.transactions.t49646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema49631,input_schema49632,input_checker49633,output_checker49634,vec__49628,opts__24458__auto__){
return (function (_49648,meta49647__$1){var self__ = this;
var _49648__$1 = this;return (new stuttaford.radiant.transactions.t49646(self__.transactions,self__.owner,self__.output_checker49634,self__.data,self__.owner49599,self__.input_checker49633,self__.output_schema49631,self__.map49629,self__.G__49635,self__.vec__49628,self__.opts__24458__auto__,self__.input_schema49632,self__.fnk49630,self__.validate__837__auto__,self__.ufv__,self__.data__24457__auto__,self__.p__49601,meta49647__$1));
});})(owner,data,validate__837__auto__,ufv__,output_schema49631,input_schema49632,input_checker49633,output_checker49634,vec__49628,opts__24458__auto__))
;
stuttaford.radiant.transactions.__GT_t49646 = ((function (owner,data,validate__837__auto__,ufv__,output_schema49631,input_schema49632,input_checker49633,output_checker49634,vec__49628,opts__24458__auto__){
return (function __GT_t49646(transactions__$1,owner__$1,output_checker49634__$1,data__$1,owner49599__$1,input_checker49633__$1,output_schema49631__$1,map49629__$1,G__49635__$1,vec__49628__$1,opts__24458__auto____$1,input_schema49632__$1,fnk49630__$1,validate__837__auto____$1,ufv____$1,data__24457__auto____$1,p__49601__$1,meta49647){return (new stuttaford.radiant.transactions.t49646(transactions__$1,owner__$1,output_checker49634__$1,data__$1,owner49599__$1,input_checker49633__$1,output_schema49631__$1,map49629__$1,G__49635__$1,vec__49628__$1,opts__24458__auto____$1,input_schema49632__$1,fnk49630__$1,validate__837__auto____$1,ufv____$1,data__24457__auto____$1,p__49601__$1,meta49647));
});})(owner,data,validate__837__auto__,ufv__,output_schema49631,input_schema49632,input_checker49633,output_checker49634,vec__49628,opts__24458__auto__))
;
}
return (new stuttaford.radiant.transactions.t49646(transactions,owner,output_checker49634,data,owner49599,input_checker49633,output_schema49631,map49629,G__49635,vec__49628,opts__24458__auto__,input_schema49632,fnk49630,validate__837__auto__,ufv__,data__24457__auto__,p__49601,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___49657 = (function (){var G__49653 = o__840__auto__;return (output_checker49634.cljs$core$IFn$_invoke$arity$1 ? output_checker49634.cljs$core$IFn$_invoke$arity$1(G__49653) : output_checker49634.call(null,G__49653));
})();if(cljs.core.truth_(temp__4126__auto___49657))
{var error__839__auto___49658 = temp__4126__auto___49657;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk49630","fnk49630",1038034554,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___49658], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema49631,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___49658], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema49631,input_schema49632,input_checker49633,output_checker49634,vec__49628,opts__24458__auto__))
,schema.core.make_fn_schema(output_schema49631,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema49632], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24458__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner49599,new cljs.core.Keyword(null,"data","data",-232669377),data__24457__auto__], null));
};
var transactions = function (data__24457__auto__,owner49599,var_args){
var p__49601 = null;if (arguments.length > 2) {
  p__49601 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return transactions__delegate.call(this,data__24457__auto__,owner49599,p__49601);};
transactions.cljs$lang$maxFixedArity = 2;
transactions.cljs$lang$applyTo = (function (arglist__49659){
var data__24457__auto__ = cljs.core.first(arglist__49659);
arglist__49659 = cljs.core.next(arglist__49659);
var owner49599 = cljs.core.first(arglist__49659);
var p__49601 = cljs.core.rest(arglist__49659);
return transactions__delegate(data__24457__auto__,owner49599,p__49601);
});
transactions.cljs$core$IFn$_invoke$arity$variadic = transactions__delegate;
return transactions;
})()
;
stuttaford.radiant.transactions.__GT_transactions = (function() {
var __GT_transactions = null;
var __GT_transactions__1 = (function (cursor__24426__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.transactions.transactions,cursor__24426__auto__);
});
var __GT_transactions__2 = (function (cursor__24426__auto__,m49600){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.transactions.transactions,cursor__24426__auto__,m49600);
});
__GT_transactions = function(cursor__24426__auto__,m49600){
switch(arguments.length){
case 1:
return __GT_transactions__1.call(this,cursor__24426__auto__);
case 2:
return __GT_transactions__2.call(this,cursor__24426__auto__,m49600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_transactions.cljs$core$IFn$_invoke$arity$1 = __GT_transactions__1;
__GT_transactions.cljs$core$IFn$_invoke$arity$2 = __GT_transactions__2;
return __GT_transactions;
})()
;
//# sourceMappingURL=transactions.js.map