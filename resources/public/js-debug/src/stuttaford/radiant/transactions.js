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
var transactions__delegate = function (data__24144__auto__,owner78664,p__78666){var vec__78736 = p__78666;var opts__24145__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78736,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema78741 = schema.core.Any;var input_schema78742 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map78738","map78738",-1268367291,null))], null);var input_checker78743 = schema.core.checker(input_schema78742);var output_checker78744 = schema.core.checker(output_schema78741);return schema.core.schematize_fn(((function (ufv__,output_schema78741,input_schema78742,input_checker78743,output_checker78744,vec__78736,opts__24145__auto__){
return (function fnk78739(G__78745){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___78834 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__78745], null);var temp__4126__auto___78835 = (function (){var G__78782 = args__838__auto___78834;return (input_checker78743.cljs$core$IFn$_invoke$arity$1 ? input_checker78743.cljs$core$IFn$_invoke$arity$1(G__78782) : input_checker78743.call(null,G__78782));
})();if(cljs.core.truth_(temp__4126__auto___78835))
{var error__839__auto___78841 = temp__4126__auto___78835;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk78739","fnk78739",1940659708,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___78841], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema78742,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___78834,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___78841], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map78738 = G__78745;while(true){
if(cljs.core.map_QMARK_(map78738))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map78738], 0))));
}
var data = plumbing.fnk.schema.safe_get(map78738,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map78738,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.transactions.t78787 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.transactions.t78787 = (function (output_schema78741,output_checker78744,transactions,owner,map78738,data,data__24144__auto__,vec__78736,opts__24145__auto__,input_schema78742,owner78664,G__78745,validate__837__auto__,p__78666,fnk78739,ufv__,input_checker78743,meta78788){
this.output_schema78741 = output_schema78741;
this.output_checker78744 = output_checker78744;
this.transactions = transactions;
this.owner = owner;
this.map78738 = map78738;
this.data = data;
this.data__24144__auto__ = data__24144__auto__;
this.vec__78736 = vec__78736;
this.opts__24145__auto__ = opts__24145__auto__;
this.input_schema78742 = input_schema78742;
this.owner78664 = owner78664;
this.G__78745 = G__78745;
this.validate__837__auto__ = validate__837__auto__;
this.p__78666 = p__78666;
this.fnk78739 = fnk78739;
this.ufv__ = ufv__;
this.input_checker78743 = input_checker78743;
this.meta78788 = meta78788;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.transactions.t78787.cljs$lang$type = true;
stuttaford.radiant.transactions.t78787.cljs$lang$ctorStr = "stuttaford.radiant.transactions/t78787";
stuttaford.radiant.transactions.t78787.cljs$lang$ctorPrWriter = ((function (owner,data,validate__837__auto__,ufv__,output_schema78741,input_schema78742,input_checker78743,output_checker78744,vec__78736,opts__24145__auto__){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"stuttaford.radiant.transactions/t78787");
});})(owner,data,validate__837__auto__,ufv__,output_schema78741,input_schema78742,input_checker78743,output_checker78744,vec__78736,opts__24145__auto__))
;
stuttaford.radiant.transactions.t78787.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.transactions.t78787.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema78741,input_schema78742,input_checker78743,output_checker78744,vec__78736,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "transactions";
});})(owner,data,validate__837__auto__,ufv__,output_schema78741,input_schema78742,input_checker78743,output_checker78744,vec__78736,opts__24145__auto__))
;
stuttaford.radiant.transactions.t78787.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.transactions.t78787.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema78741,input_schema78742,input_checker78743,output_checker78744,vec__78736,opts__24145__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var G__78807 = null;var G__78808 = "Transactions";return React.DOM.div(G__78807,G__78808);
});})(owner,data,validate__837__auto__,ufv__,output_schema78741,input_schema78742,input_checker78743,output_checker78744,vec__78736,opts__24145__auto__))
;
stuttaford.radiant.transactions.t78787.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema78741,input_schema78742,input_checker78743,output_checker78744,vec__78736,opts__24145__auto__){
return (function (_78789){var self__ = this;
var _78789__$1 = this;return self__.meta78788;
});})(owner,data,validate__837__auto__,ufv__,output_schema78741,input_schema78742,input_checker78743,output_checker78744,vec__78736,opts__24145__auto__))
;
stuttaford.radiant.transactions.t78787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema78741,input_schema78742,input_checker78743,output_checker78744,vec__78736,opts__24145__auto__){
return (function (_78789,meta78788__$1){var self__ = this;
var _78789__$1 = this;return (new stuttaford.radiant.transactions.t78787(self__.output_schema78741,self__.output_checker78744,self__.transactions,self__.owner,self__.map78738,self__.data,self__.data__24144__auto__,self__.vec__78736,self__.opts__24145__auto__,self__.input_schema78742,self__.owner78664,self__.G__78745,self__.validate__837__auto__,self__.p__78666,self__.fnk78739,self__.ufv__,self__.input_checker78743,meta78788__$1));
});})(owner,data,validate__837__auto__,ufv__,output_schema78741,input_schema78742,input_checker78743,output_checker78744,vec__78736,opts__24145__auto__))
;
stuttaford.radiant.transactions.__GT_t78787 = ((function (owner,data,validate__837__auto__,ufv__,output_schema78741,input_schema78742,input_checker78743,output_checker78744,vec__78736,opts__24145__auto__){
return (function __GT_t78787(output_schema78741__$1,output_checker78744__$1,transactions__$1,owner__$1,map78738__$1,data__$1,data__24144__auto____$1,vec__78736__$1,opts__24145__auto____$1,input_schema78742__$1,owner78664__$1,G__78745__$1,validate__837__auto____$1,p__78666__$1,fnk78739__$1,ufv____$1,input_checker78743__$1,meta78788){return (new stuttaford.radiant.transactions.t78787(output_schema78741__$1,output_checker78744__$1,transactions__$1,owner__$1,map78738__$1,data__$1,data__24144__auto____$1,vec__78736__$1,opts__24145__auto____$1,input_schema78742__$1,owner78664__$1,G__78745__$1,validate__837__auto____$1,p__78666__$1,fnk78739__$1,ufv____$1,input_checker78743__$1,meta78788));
});})(owner,data,validate__837__auto__,ufv__,output_schema78741,input_schema78742,input_checker78743,output_checker78744,vec__78736,opts__24145__auto__))
;
}
return (new stuttaford.radiant.transactions.t78787(output_schema78741,output_checker78744,transactions,owner,map78738,data,data__24144__auto__,vec__78736,opts__24145__auto__,input_schema78742,owner78664,G__78745,validate__837__auto__,p__78666,fnk78739,ufv__,input_checker78743,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___78899 = (function (){var G__78814 = o__840__auto__;return (output_checker78744.cljs$core$IFn$_invoke$arity$1 ? output_checker78744.cljs$core$IFn$_invoke$arity$1(G__78814) : output_checker78744.call(null,G__78814));
})();if(cljs.core.truth_(temp__4126__auto___78899))
{var error__839__auto___78900 = temp__4126__auto___78899;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk78739","fnk78739",1940659708,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___78900], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema78741,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___78900], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema78741,input_schema78742,input_checker78743,output_checker78744,vec__78736,opts__24145__auto__))
,schema.core.make_fn_schema(output_schema78741,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema78742], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner78664,new cljs.core.Keyword(null,"data","data",-232669377),data__24144__auto__], null));
};
var transactions = function (data__24144__auto__,owner78664,var_args){
var p__78666 = null;if (arguments.length > 2) {
  p__78666 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return transactions__delegate.call(this,data__24144__auto__,owner78664,p__78666);};
transactions.cljs$lang$maxFixedArity = 2;
transactions.cljs$lang$applyTo = (function (arglist__78901){
var data__24144__auto__ = cljs.core.first(arglist__78901);
arglist__78901 = cljs.core.next(arglist__78901);
var owner78664 = cljs.core.first(arglist__78901);
var p__78666 = cljs.core.rest(arglist__78901);
return transactions__delegate(data__24144__auto__,owner78664,p__78666);
});
transactions.cljs$core$IFn$_invoke$arity$variadic = transactions__delegate;
return transactions;
})()
;
stuttaford.radiant.transactions.__GT_transactions = (function() {
var __GT_transactions = null;
var __GT_transactions__1 = (function (cursor__24113__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.transactions.transactions,cursor__24113__auto__);
});
var __GT_transactions__2 = (function (cursor__24113__auto__,m78665){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.transactions.transactions,cursor__24113__auto__,m78665);
});
__GT_transactions = function(cursor__24113__auto__,m78665){
switch(arguments.length){
case 1:
return __GT_transactions__1.call(this,cursor__24113__auto__);
case 2:
return __GT_transactions__2.call(this,cursor__24113__auto__,m78665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_transactions.cljs$core$IFn$_invoke$arity$1 = __GT_transactions__1;
__GT_transactions.cljs$core$IFn$_invoke$arity$2 = __GT_transactions__2;
return __GT_transactions;
})()
;
//# sourceMappingURL=transactions.js.map