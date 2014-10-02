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
var transactions__delegate = function (data__24172__auto__,owner40435,p__40437){var vec__40464 = p__40437;var opts__24173__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40464,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema40467 = schema.core.Any;var input_schema40468 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map40465","map40465",-1752883927,null))], null);var input_checker40469 = schema.core.checker(input_schema40468);var output_checker40470 = schema.core.checker(output_schema40467);return schema.core.schematize_fn(((function (ufv__,output_schema40467,input_schema40468,input_checker40469,output_checker40470,vec__40464,opts__24173__auto__){
return (function fnk40466(G__40471){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40490 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40471], null);var temp__4126__auto___40491 = (function (){var G__40481 = args__838__auto___40490;return (input_checker40469.cljs$core$IFn$_invoke$arity$1 ? input_checker40469.cljs$core$IFn$_invoke$arity$1(G__40481) : input_checker40469.call(null,G__40481));
})();if(cljs.core.truth_(temp__4126__auto___40491))
{var error__839__auto___40492 = temp__4126__auto___40491;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk40466","fnk40466",1917901014,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40492], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40468,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40490,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40492], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map40465 = G__40471;while(true){
if(cljs.core.map_QMARK_(map40465))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map40465], 0))));
}
var data = plumbing.fnk.schema.safe_get(map40465,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map40465,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.transactions.t40482 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.transactions.t40482 = (function (input_checker40469,output_checker40470,transactions,input_schema40468,owner,vec__40464,opts__24173__auto__,data,G__40471,map40465,data__24172__auto__,output_schema40467,owner40435,fnk40466,p__40437,validate__837__auto__,ufv__,meta40483){
this.input_checker40469 = input_checker40469;
this.output_checker40470 = output_checker40470;
this.transactions = transactions;
this.input_schema40468 = input_schema40468;
this.owner = owner;
this.vec__40464 = vec__40464;
this.opts__24173__auto__ = opts__24173__auto__;
this.data = data;
this.G__40471 = G__40471;
this.map40465 = map40465;
this.data__24172__auto__ = data__24172__auto__;
this.output_schema40467 = output_schema40467;
this.owner40435 = owner40435;
this.fnk40466 = fnk40466;
this.p__40437 = p__40437;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.meta40483 = meta40483;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.transactions.t40482.cljs$lang$type = true;
stuttaford.radiant.transactions.t40482.cljs$lang$ctorStr = "stuttaford.radiant.transactions/t40482";
stuttaford.radiant.transactions.t40482.cljs$lang$ctorPrWriter = ((function (owner,data,validate__837__auto__,ufv__,output_schema40467,input_schema40468,input_checker40469,output_checker40470,vec__40464,opts__24173__auto__){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"stuttaford.radiant.transactions/t40482");
});})(owner,data,validate__837__auto__,ufv__,output_schema40467,input_schema40468,input_checker40469,output_checker40470,vec__40464,opts__24173__auto__))
;
stuttaford.radiant.transactions.t40482.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.transactions.t40482.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema40467,input_schema40468,input_checker40469,output_checker40470,vec__40464,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "transactions";
});})(owner,data,validate__837__auto__,ufv__,output_schema40467,input_schema40468,input_checker40469,output_checker40470,vec__40464,opts__24173__auto__))
;
stuttaford.radiant.transactions.t40482.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.transactions.t40482.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema40467,input_schema40468,input_checker40469,output_checker40470,vec__40464,opts__24173__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var G__40487 = null;var G__40488 = "Transactions";return React.DOM.div(G__40487,G__40488);
});})(owner,data,validate__837__auto__,ufv__,output_schema40467,input_schema40468,input_checker40469,output_checker40470,vec__40464,opts__24173__auto__))
;
stuttaford.radiant.transactions.t40482.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema40467,input_schema40468,input_checker40469,output_checker40470,vec__40464,opts__24173__auto__){
return (function (_40484){var self__ = this;
var _40484__$1 = this;return self__.meta40483;
});})(owner,data,validate__837__auto__,ufv__,output_schema40467,input_schema40468,input_checker40469,output_checker40470,vec__40464,opts__24173__auto__))
;
stuttaford.radiant.transactions.t40482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema40467,input_schema40468,input_checker40469,output_checker40470,vec__40464,opts__24173__auto__){
return (function (_40484,meta40483__$1){var self__ = this;
var _40484__$1 = this;return (new stuttaford.radiant.transactions.t40482(self__.input_checker40469,self__.output_checker40470,self__.transactions,self__.input_schema40468,self__.owner,self__.vec__40464,self__.opts__24173__auto__,self__.data,self__.G__40471,self__.map40465,self__.data__24172__auto__,self__.output_schema40467,self__.owner40435,self__.fnk40466,self__.p__40437,self__.validate__837__auto__,self__.ufv__,meta40483__$1));
});})(owner,data,validate__837__auto__,ufv__,output_schema40467,input_schema40468,input_checker40469,output_checker40470,vec__40464,opts__24173__auto__))
;
stuttaford.radiant.transactions.__GT_t40482 = ((function (owner,data,validate__837__auto__,ufv__,output_schema40467,input_schema40468,input_checker40469,output_checker40470,vec__40464,opts__24173__auto__){
return (function __GT_t40482(input_checker40469__$1,output_checker40470__$1,transactions__$1,input_schema40468__$1,owner__$1,vec__40464__$1,opts__24173__auto____$1,data__$1,G__40471__$1,map40465__$1,data__24172__auto____$1,output_schema40467__$1,owner40435__$1,fnk40466__$1,p__40437__$1,validate__837__auto____$1,ufv____$1,meta40483){return (new stuttaford.radiant.transactions.t40482(input_checker40469__$1,output_checker40470__$1,transactions__$1,input_schema40468__$1,owner__$1,vec__40464__$1,opts__24173__auto____$1,data__$1,G__40471__$1,map40465__$1,data__24172__auto____$1,output_schema40467__$1,owner40435__$1,fnk40466__$1,p__40437__$1,validate__837__auto____$1,ufv____$1,meta40483));
});})(owner,data,validate__837__auto__,ufv__,output_schema40467,input_schema40468,input_checker40469,output_checker40470,vec__40464,opts__24173__auto__))
;
}
return (new stuttaford.radiant.transactions.t40482(input_checker40469,output_checker40470,transactions,input_schema40468,owner,vec__40464,opts__24173__auto__,data,G__40471,map40465,data__24172__auto__,output_schema40467,owner40435,fnk40466,p__40437,validate__837__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40493 = (function (){var G__40489 = o__840__auto__;return (output_checker40470.cljs$core$IFn$_invoke$arity$1 ? output_checker40470.cljs$core$IFn$_invoke$arity$1(G__40489) : output_checker40470.call(null,G__40489));
})();if(cljs.core.truth_(temp__4126__auto___40493))
{var error__839__auto___40494 = temp__4126__auto___40493;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk40466","fnk40466",1917901014,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40494], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40467,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40494], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema40467,input_schema40468,input_checker40469,output_checker40470,vec__40464,opts__24173__auto__))
,schema.core.make_fn_schema(output_schema40467,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40468], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24173__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner40435,new cljs.core.Keyword(null,"data","data",-232669377),data__24172__auto__], null));
};
var transactions = function (data__24172__auto__,owner40435,var_args){
var p__40437 = null;if (arguments.length > 2) {
  p__40437 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return transactions__delegate.call(this,data__24172__auto__,owner40435,p__40437);};
transactions.cljs$lang$maxFixedArity = 2;
transactions.cljs$lang$applyTo = (function (arglist__40495){
var data__24172__auto__ = cljs.core.first(arglist__40495);
arglist__40495 = cljs.core.next(arglist__40495);
var owner40435 = cljs.core.first(arglist__40495);
var p__40437 = cljs.core.rest(arglist__40495);
return transactions__delegate(data__24172__auto__,owner40435,p__40437);
});
transactions.cljs$core$IFn$_invoke$arity$variadic = transactions__delegate;
return transactions;
})()
;
stuttaford.radiant.transactions.__GT_transactions = (function() {
var __GT_transactions = null;
var __GT_transactions__1 = (function (cursor__24141__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.transactions.transactions,cursor__24141__auto__);
});
var __GT_transactions__2 = (function (cursor__24141__auto__,m40436){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.transactions.transactions,cursor__24141__auto__,m40436);
});
__GT_transactions = function(cursor__24141__auto__,m40436){
switch(arguments.length){
case 1:
return __GT_transactions__1.call(this,cursor__24141__auto__);
case 2:
return __GT_transactions__2.call(this,cursor__24141__auto__,m40436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_transactions.cljs$core$IFn$_invoke$arity$1 = __GT_transactions__1;
__GT_transactions.cljs$core$IFn$_invoke$arity$2 = __GT_transactions__2;
return __GT_transactions;
})()
;
//# sourceMappingURL=transactions.js.map