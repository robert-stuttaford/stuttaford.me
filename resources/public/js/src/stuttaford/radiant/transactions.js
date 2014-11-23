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
var transactions__delegate = function (data__24441__auto__,owner41833,p__41835){var vec__41862 = p__41835;var opts__24442__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41862,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema41865 = schema.core.Any;var input_schema41866 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map41863","map41863",1666878201,null))], null);var input_checker41867 = schema.core.checker(input_schema41866);var output_checker41868 = schema.core.checker(output_schema41865);return schema.core.schematize_fn(((function (ufv__,output_schema41865,input_schema41866,input_checker41867,output_checker41868,vec__41862,opts__24442__auto__){
return (function fnk41864(G__41869){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___41888 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__41869], null);var temp__4126__auto___41889 = (function (){var G__41879 = args__838__auto___41888;return (input_checker41867.cljs$core$IFn$_invoke$arity$1 ? input_checker41867.cljs$core$IFn$_invoke$arity$1(G__41879) : input_checker41867.call(null,G__41879));
})();if(cljs.core.truth_(temp__4126__auto___41889))
{var error__839__auto___41890 = temp__4126__auto___41889;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk41864","fnk41864",1333354091,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41890], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema41866,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___41888,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41890], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map41863 = G__41869;while(true){
if(cljs.core.map_QMARK_(map41863))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map41863], 0))));
}
var data = plumbing.fnk.schema.safe_get(map41863,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map41863,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.transactions.t41880 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.transactions.t41880 = (function (output_checker41868,transactions,owner,input_schema41866,data,fnk41864,data__24441__auto__,vec__41862,owner41833,G__41869,map41863,opts__24442__auto__,validate__837__auto__,output_schema41865,input_checker41867,p__41835,ufv__,meta41881){
this.output_checker41868 = output_checker41868;
this.transactions = transactions;
this.owner = owner;
this.input_schema41866 = input_schema41866;
this.data = data;
this.fnk41864 = fnk41864;
this.data__24441__auto__ = data__24441__auto__;
this.vec__41862 = vec__41862;
this.owner41833 = owner41833;
this.G__41869 = G__41869;
this.map41863 = map41863;
this.opts__24442__auto__ = opts__24442__auto__;
this.validate__837__auto__ = validate__837__auto__;
this.output_schema41865 = output_schema41865;
this.input_checker41867 = input_checker41867;
this.p__41835 = p__41835;
this.ufv__ = ufv__;
this.meta41881 = meta41881;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.transactions.t41880.cljs$lang$type = true;
stuttaford.radiant.transactions.t41880.cljs$lang$ctorStr = "stuttaford.radiant.transactions/t41880";
stuttaford.radiant.transactions.t41880.cljs$lang$ctorPrWriter = ((function (owner,data,validate__837__auto__,ufv__,output_schema41865,input_schema41866,input_checker41867,output_checker41868,vec__41862,opts__24442__auto__){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"stuttaford.radiant.transactions/t41880");
});})(owner,data,validate__837__auto__,ufv__,output_schema41865,input_schema41866,input_checker41867,output_checker41868,vec__41862,opts__24442__auto__))
;
stuttaford.radiant.transactions.t41880.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.transactions.t41880.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema41865,input_schema41866,input_checker41867,output_checker41868,vec__41862,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "transactions";
});})(owner,data,validate__837__auto__,ufv__,output_schema41865,input_schema41866,input_checker41867,output_checker41868,vec__41862,opts__24442__auto__))
;
stuttaford.radiant.transactions.t41880.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.transactions.t41880.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema41865,input_schema41866,input_checker41867,output_checker41868,vec__41862,opts__24442__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var G__41885 = null;var G__41886 = "Transactions";return React.DOM.div(G__41885,G__41886);
});})(owner,data,validate__837__auto__,ufv__,output_schema41865,input_schema41866,input_checker41867,output_checker41868,vec__41862,opts__24442__auto__))
;
stuttaford.radiant.transactions.t41880.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema41865,input_schema41866,input_checker41867,output_checker41868,vec__41862,opts__24442__auto__){
return (function (_41882){var self__ = this;
var _41882__$1 = this;return self__.meta41881;
});})(owner,data,validate__837__auto__,ufv__,output_schema41865,input_schema41866,input_checker41867,output_checker41868,vec__41862,opts__24442__auto__))
;
stuttaford.radiant.transactions.t41880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema41865,input_schema41866,input_checker41867,output_checker41868,vec__41862,opts__24442__auto__){
return (function (_41882,meta41881__$1){var self__ = this;
var _41882__$1 = this;return (new stuttaford.radiant.transactions.t41880(self__.output_checker41868,self__.transactions,self__.owner,self__.input_schema41866,self__.data,self__.fnk41864,self__.data__24441__auto__,self__.vec__41862,self__.owner41833,self__.G__41869,self__.map41863,self__.opts__24442__auto__,self__.validate__837__auto__,self__.output_schema41865,self__.input_checker41867,self__.p__41835,self__.ufv__,meta41881__$1));
});})(owner,data,validate__837__auto__,ufv__,output_schema41865,input_schema41866,input_checker41867,output_checker41868,vec__41862,opts__24442__auto__))
;
stuttaford.radiant.transactions.__GT_t41880 = ((function (owner,data,validate__837__auto__,ufv__,output_schema41865,input_schema41866,input_checker41867,output_checker41868,vec__41862,opts__24442__auto__){
return (function __GT_t41880(output_checker41868__$1,transactions__$1,owner__$1,input_schema41866__$1,data__$1,fnk41864__$1,data__24441__auto____$1,vec__41862__$1,owner41833__$1,G__41869__$1,map41863__$1,opts__24442__auto____$1,validate__837__auto____$1,output_schema41865__$1,input_checker41867__$1,p__41835__$1,ufv____$1,meta41881){return (new stuttaford.radiant.transactions.t41880(output_checker41868__$1,transactions__$1,owner__$1,input_schema41866__$1,data__$1,fnk41864__$1,data__24441__auto____$1,vec__41862__$1,owner41833__$1,G__41869__$1,map41863__$1,opts__24442__auto____$1,validate__837__auto____$1,output_schema41865__$1,input_checker41867__$1,p__41835__$1,ufv____$1,meta41881));
});})(owner,data,validate__837__auto__,ufv__,output_schema41865,input_schema41866,input_checker41867,output_checker41868,vec__41862,opts__24442__auto__))
;
}
return (new stuttaford.radiant.transactions.t41880(output_checker41868,transactions,owner,input_schema41866,data,fnk41864,data__24441__auto__,vec__41862,owner41833,G__41869,map41863,opts__24442__auto__,validate__837__auto__,output_schema41865,input_checker41867,p__41835,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___41891 = (function (){var G__41887 = o__840__auto__;return (output_checker41868.cljs$core$IFn$_invoke$arity$1 ? output_checker41868.cljs$core$IFn$_invoke$arity$1(G__41887) : output_checker41868.call(null,G__41887));
})();if(cljs.core.truth_(temp__4126__auto___41891))
{var error__839__auto___41892 = temp__4126__auto___41891;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk41864","fnk41864",1333354091,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41892], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema41865,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41892], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema41865,input_schema41866,input_checker41867,output_checker41868,vec__41862,opts__24442__auto__))
,schema.core.make_fn_schema(output_schema41865,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema41866], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24442__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner41833,new cljs.core.Keyword(null,"data","data",-232669377),data__24441__auto__], null));
};
var transactions = function (data__24441__auto__,owner41833,var_args){
var p__41835 = null;if (arguments.length > 2) {
  p__41835 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return transactions__delegate.call(this,data__24441__auto__,owner41833,p__41835);};
transactions.cljs$lang$maxFixedArity = 2;
transactions.cljs$lang$applyTo = (function (arglist__41893){
var data__24441__auto__ = cljs.core.first(arglist__41893);
arglist__41893 = cljs.core.next(arglist__41893);
var owner41833 = cljs.core.first(arglist__41893);
var p__41835 = cljs.core.rest(arglist__41893);
return transactions__delegate(data__24441__auto__,owner41833,p__41835);
});
transactions.cljs$core$IFn$_invoke$arity$variadic = transactions__delegate;
return transactions;
})()
;
stuttaford.radiant.transactions.__GT_transactions = (function() {
var __GT_transactions = null;
var __GT_transactions__1 = (function (cursor__24410__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.transactions.transactions,cursor__24410__auto__);
});
var __GT_transactions__2 = (function (cursor__24410__auto__,m41834){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.transactions.transactions,cursor__24410__auto__,m41834);
});
__GT_transactions = function(cursor__24410__auto__,m41834){
switch(arguments.length){
case 1:
return __GT_transactions__1.call(this,cursor__24410__auto__);
case 2:
return __GT_transactions__2.call(this,cursor__24410__auto__,m41834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_transactions.cljs$core$IFn$_invoke$arity$1 = __GT_transactions__1;
__GT_transactions.cljs$core$IFn$_invoke$arity$2 = __GT_transactions__2;
return __GT_transactions;
})()
;
//# sourceMappingURL=transactions.js.map