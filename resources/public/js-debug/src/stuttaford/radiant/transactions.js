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
var transactions__delegate = function (data__24175__auto__,owner40544,p__40546){var vec__40573 = p__40546;var opts__24176__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40573,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema40576 = schema.core.Any;var input_schema40577 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map40574","map40574",1667343375,null))], null);var input_checker40578 = schema.core.checker(input_schema40577);var output_checker40579 = schema.core.checker(output_schema40576);return schema.core.schematize_fn(((function (ufv__,output_schema40576,input_schema40577,input_checker40578,output_checker40579,vec__40573,opts__24176__auto__){
return (function fnk40575(G__40580){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40599 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40580], null);var temp__4126__auto___40600 = (function (){var G__40590 = args__838__auto___40599;return (input_checker40578.cljs$core$IFn$_invoke$arity$1 ? input_checker40578.cljs$core$IFn$_invoke$arity$1(G__40590) : input_checker40578.call(null,G__40590));
})();if(cljs.core.truth_(temp__4126__auto___40600))
{var error__839__auto___40601 = temp__4126__auto___40600;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk40575","fnk40575",-268538401,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40601], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40577,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40599,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40601], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map40574 = G__40580;while(true){
if(cljs.core.map_QMARK_(map40574))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map40574], 0))));
}
var data = plumbing.fnk.schema.safe_get(map40574,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map40574,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.transactions.t40591 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.transactions.t40591 = (function (owner40544,transactions,owner,output_checker40579,data,map40574,vec__40573,data__24175__auto__,input_checker40578,G__40580,p__40546,output_schema40576,opts__24176__auto__,validate__837__auto__,input_schema40577,ufv__,fnk40575,meta40592){
this.owner40544 = owner40544;
this.transactions = transactions;
this.owner = owner;
this.output_checker40579 = output_checker40579;
this.data = data;
this.map40574 = map40574;
this.vec__40573 = vec__40573;
this.data__24175__auto__ = data__24175__auto__;
this.input_checker40578 = input_checker40578;
this.G__40580 = G__40580;
this.p__40546 = p__40546;
this.output_schema40576 = output_schema40576;
this.opts__24176__auto__ = opts__24176__auto__;
this.validate__837__auto__ = validate__837__auto__;
this.input_schema40577 = input_schema40577;
this.ufv__ = ufv__;
this.fnk40575 = fnk40575;
this.meta40592 = meta40592;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.transactions.t40591.cljs$lang$type = true;
stuttaford.radiant.transactions.t40591.cljs$lang$ctorStr = "stuttaford.radiant.transactions/t40591";
stuttaford.radiant.transactions.t40591.cljs$lang$ctorPrWriter = ((function (owner,data,validate__837__auto__,ufv__,output_schema40576,input_schema40577,input_checker40578,output_checker40579,vec__40573,opts__24176__auto__){
return (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"stuttaford.radiant.transactions/t40591");
});})(owner,data,validate__837__auto__,ufv__,output_schema40576,input_schema40577,input_checker40578,output_checker40579,vec__40573,opts__24176__auto__))
;
stuttaford.radiant.transactions.t40591.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.transactions.t40591.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema40576,input_schema40577,input_checker40578,output_checker40579,vec__40573,opts__24176__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "transactions";
});})(owner,data,validate__837__auto__,ufv__,output_schema40576,input_schema40577,input_checker40578,output_checker40579,vec__40573,opts__24176__auto__))
;
stuttaford.radiant.transactions.t40591.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.transactions.t40591.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema40576,input_schema40577,input_checker40578,output_checker40579,vec__40573,opts__24176__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var G__40596 = null;var G__40597 = "Transactions";return React.DOM.div(G__40596,G__40597);
});})(owner,data,validate__837__auto__,ufv__,output_schema40576,input_schema40577,input_checker40578,output_checker40579,vec__40573,opts__24176__auto__))
;
stuttaford.radiant.transactions.t40591.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema40576,input_schema40577,input_checker40578,output_checker40579,vec__40573,opts__24176__auto__){
return (function (_40593){var self__ = this;
var _40593__$1 = this;return self__.meta40592;
});})(owner,data,validate__837__auto__,ufv__,output_schema40576,input_schema40577,input_checker40578,output_checker40579,vec__40573,opts__24176__auto__))
;
stuttaford.radiant.transactions.t40591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema40576,input_schema40577,input_checker40578,output_checker40579,vec__40573,opts__24176__auto__){
return (function (_40593,meta40592__$1){var self__ = this;
var _40593__$1 = this;return (new stuttaford.radiant.transactions.t40591(self__.owner40544,self__.transactions,self__.owner,self__.output_checker40579,self__.data,self__.map40574,self__.vec__40573,self__.data__24175__auto__,self__.input_checker40578,self__.G__40580,self__.p__40546,self__.output_schema40576,self__.opts__24176__auto__,self__.validate__837__auto__,self__.input_schema40577,self__.ufv__,self__.fnk40575,meta40592__$1));
});})(owner,data,validate__837__auto__,ufv__,output_schema40576,input_schema40577,input_checker40578,output_checker40579,vec__40573,opts__24176__auto__))
;
stuttaford.radiant.transactions.__GT_t40591 = ((function (owner,data,validate__837__auto__,ufv__,output_schema40576,input_schema40577,input_checker40578,output_checker40579,vec__40573,opts__24176__auto__){
return (function __GT_t40591(owner40544__$1,transactions__$1,owner__$1,output_checker40579__$1,data__$1,map40574__$1,vec__40573__$1,data__24175__auto____$1,input_checker40578__$1,G__40580__$1,p__40546__$1,output_schema40576__$1,opts__24176__auto____$1,validate__837__auto____$1,input_schema40577__$1,ufv____$1,fnk40575__$1,meta40592){return (new stuttaford.radiant.transactions.t40591(owner40544__$1,transactions__$1,owner__$1,output_checker40579__$1,data__$1,map40574__$1,vec__40573__$1,data__24175__auto____$1,input_checker40578__$1,G__40580__$1,p__40546__$1,output_schema40576__$1,opts__24176__auto____$1,validate__837__auto____$1,input_schema40577__$1,ufv____$1,fnk40575__$1,meta40592));
});})(owner,data,validate__837__auto__,ufv__,output_schema40576,input_schema40577,input_checker40578,output_checker40579,vec__40573,opts__24176__auto__))
;
}
return (new stuttaford.radiant.transactions.t40591(owner40544,transactions,owner,output_checker40579,data,map40574,vec__40573,data__24175__auto__,input_checker40578,G__40580,p__40546,output_schema40576,opts__24176__auto__,validate__837__auto__,input_schema40577,ufv__,fnk40575,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40602 = (function (){var G__40598 = o__840__auto__;return (output_checker40579.cljs$core$IFn$_invoke$arity$1 ? output_checker40579.cljs$core$IFn$_invoke$arity$1(G__40598) : output_checker40579.call(null,G__40598));
})();if(cljs.core.truth_(temp__4126__auto___40602))
{var error__839__auto___40603 = temp__4126__auto___40602;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk40575","fnk40575",-268538401,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40603], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40576,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40603], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema40576,input_schema40577,input_checker40578,output_checker40579,vec__40573,opts__24176__auto__))
,schema.core.make_fn_schema(output_schema40576,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40577], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24176__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner40544,new cljs.core.Keyword(null,"data","data",-232669377),data__24175__auto__], null));
};
var transactions = function (data__24175__auto__,owner40544,var_args){
var p__40546 = null;if (arguments.length > 2) {
  p__40546 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return transactions__delegate.call(this,data__24175__auto__,owner40544,p__40546);};
transactions.cljs$lang$maxFixedArity = 2;
transactions.cljs$lang$applyTo = (function (arglist__40604){
var data__24175__auto__ = cljs.core.first(arglist__40604);
arglist__40604 = cljs.core.next(arglist__40604);
var owner40544 = cljs.core.first(arglist__40604);
var p__40546 = cljs.core.rest(arglist__40604);
return transactions__delegate(data__24175__auto__,owner40544,p__40546);
});
transactions.cljs$core$IFn$_invoke$arity$variadic = transactions__delegate;
return transactions;
})()
;
stuttaford.radiant.transactions.__GT_transactions = (function() {
var __GT_transactions = null;
var __GT_transactions__1 = (function (cursor__24144__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.transactions.transactions,cursor__24144__auto__);
});
var __GT_transactions__2 = (function (cursor__24144__auto__,m40545){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.transactions.transactions,cursor__24144__auto__,m40545);
});
__GT_transactions = function(cursor__24144__auto__,m40545){
switch(arguments.length){
case 1:
return __GT_transactions__1.call(this,cursor__24144__auto__);
case 2:
return __GT_transactions__2.call(this,cursor__24144__auto__,m40545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_transactions.cljs$core$IFn$_invoke$arity$1 = __GT_transactions__1;
__GT_transactions.cljs$core$IFn$_invoke$arity$2 = __GT_transactions__2;
return __GT_transactions;
})()
;
//# sourceMappingURL=transactions.js.map