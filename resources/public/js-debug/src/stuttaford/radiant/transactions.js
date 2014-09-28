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
var transactions__delegate = function (data__24144__auto__,owner57740,p__57742){var vec__57769 = p__57742;var opts__24145__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57769,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema57772 = schema.core.Any;var input_schema57773 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map57770","map57770",1601715095,null))], null);var input_checker57774 = schema.core.checker(input_schema57773);var output_checker57775 = schema.core.checker(output_schema57772);return schema.core.schematize_fn(((function (ufv__,output_schema57772,input_schema57773,input_checker57774,output_checker57775,vec__57769,opts__24145__auto__){
return (function fnk57771(G__57776){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___57795 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__57776], null);var temp__4126__auto___57796 = (function (){var G__57786 = args__838__auto___57795;return (input_checker57774.cljs$core$IFn$_invoke$arity$1 ? input_checker57774.cljs$core$IFn$_invoke$arity$1(G__57786) : input_checker57774.call(null,G__57786));
})();if(cljs.core.truth_(temp__4126__auto___57796))
{var error__839__auto___57797 = temp__4126__auto___57796;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk57771","fnk57771",-1097366654,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57797], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema57773,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___57795,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57797], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map57770 = G__57776;while(true){
if(cljs.core.map_QMARK_(map57770))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map57770], 0))));
}
var data = plumbing.fnk.schema.safe_get(map57770,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map57770,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.transactions.t57787 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.transactions.t57787 = (function (transactions,G__57776,fnk57771,owner,data,p__57742,input_checker57774,data__24144__auto__,opts__24145__auto__,output_checker57775,output_schema57772,owner57740,input_schema57773,map57770,vec__57769,validate__837__auto__,ufv__,meta57788){
this.transactions = transactions;
this.G__57776 = G__57776;
this.fnk57771 = fnk57771;
this.owner = owner;
this.data = data;
this.p__57742 = p__57742;
this.input_checker57774 = input_checker57774;
this.data__24144__auto__ = data__24144__auto__;
this.opts__24145__auto__ = opts__24145__auto__;
this.output_checker57775 = output_checker57775;
this.output_schema57772 = output_schema57772;
this.owner57740 = owner57740;
this.input_schema57773 = input_schema57773;
this.map57770 = map57770;
this.vec__57769 = vec__57769;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.meta57788 = meta57788;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.transactions.t57787.cljs$lang$type = true;
stuttaford.radiant.transactions.t57787.cljs$lang$ctorStr = "stuttaford.radiant.transactions/t57787";
stuttaford.radiant.transactions.t57787.cljs$lang$ctorPrWriter = ((function (owner,data,validate__837__auto__,ufv__,output_schema57772,input_schema57773,input_checker57774,output_checker57775,vec__57769,opts__24145__auto__){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"stuttaford.radiant.transactions/t57787");
});})(owner,data,validate__837__auto__,ufv__,output_schema57772,input_schema57773,input_checker57774,output_checker57775,vec__57769,opts__24145__auto__))
;
stuttaford.radiant.transactions.t57787.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.transactions.t57787.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema57772,input_schema57773,input_checker57774,output_checker57775,vec__57769,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "transactions";
});})(owner,data,validate__837__auto__,ufv__,output_schema57772,input_schema57773,input_checker57774,output_checker57775,vec__57769,opts__24145__auto__))
;
stuttaford.radiant.transactions.t57787.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.transactions.t57787.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema57772,input_schema57773,input_checker57774,output_checker57775,vec__57769,opts__24145__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var G__57792 = null;var G__57793 = "Transactions";return React.DOM.div(G__57792,G__57793);
});})(owner,data,validate__837__auto__,ufv__,output_schema57772,input_schema57773,input_checker57774,output_checker57775,vec__57769,opts__24145__auto__))
;
stuttaford.radiant.transactions.t57787.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema57772,input_schema57773,input_checker57774,output_checker57775,vec__57769,opts__24145__auto__){
return (function (_57789){var self__ = this;
var _57789__$1 = this;return self__.meta57788;
});})(owner,data,validate__837__auto__,ufv__,output_schema57772,input_schema57773,input_checker57774,output_checker57775,vec__57769,opts__24145__auto__))
;
stuttaford.radiant.transactions.t57787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema57772,input_schema57773,input_checker57774,output_checker57775,vec__57769,opts__24145__auto__){
return (function (_57789,meta57788__$1){var self__ = this;
var _57789__$1 = this;return (new stuttaford.radiant.transactions.t57787(self__.transactions,self__.G__57776,self__.fnk57771,self__.owner,self__.data,self__.p__57742,self__.input_checker57774,self__.data__24144__auto__,self__.opts__24145__auto__,self__.output_checker57775,self__.output_schema57772,self__.owner57740,self__.input_schema57773,self__.map57770,self__.vec__57769,self__.validate__837__auto__,self__.ufv__,meta57788__$1));
});})(owner,data,validate__837__auto__,ufv__,output_schema57772,input_schema57773,input_checker57774,output_checker57775,vec__57769,opts__24145__auto__))
;
stuttaford.radiant.transactions.__GT_t57787 = ((function (owner,data,validate__837__auto__,ufv__,output_schema57772,input_schema57773,input_checker57774,output_checker57775,vec__57769,opts__24145__auto__){
return (function __GT_t57787(transactions__$1,G__57776__$1,fnk57771__$1,owner__$1,data__$1,p__57742__$1,input_checker57774__$1,data__24144__auto____$1,opts__24145__auto____$1,output_checker57775__$1,output_schema57772__$1,owner57740__$1,input_schema57773__$1,map57770__$1,vec__57769__$1,validate__837__auto____$1,ufv____$1,meta57788){return (new stuttaford.radiant.transactions.t57787(transactions__$1,G__57776__$1,fnk57771__$1,owner__$1,data__$1,p__57742__$1,input_checker57774__$1,data__24144__auto____$1,opts__24145__auto____$1,output_checker57775__$1,output_schema57772__$1,owner57740__$1,input_schema57773__$1,map57770__$1,vec__57769__$1,validate__837__auto____$1,ufv____$1,meta57788));
});})(owner,data,validate__837__auto__,ufv__,output_schema57772,input_schema57773,input_checker57774,output_checker57775,vec__57769,opts__24145__auto__))
;
}
return (new stuttaford.radiant.transactions.t57787(transactions,G__57776,fnk57771,owner,data,p__57742,input_checker57774,data__24144__auto__,opts__24145__auto__,output_checker57775,output_schema57772,owner57740,input_schema57773,map57770,vec__57769,validate__837__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___57798 = (function (){var G__57794 = o__840__auto__;return (output_checker57775.cljs$core$IFn$_invoke$arity$1 ? output_checker57775.cljs$core$IFn$_invoke$arity$1(G__57794) : output_checker57775.call(null,G__57794));
})();if(cljs.core.truth_(temp__4126__auto___57798))
{var error__839__auto___57799 = temp__4126__auto___57798;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk57771","fnk57771",-1097366654,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___57799], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema57772,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___57799], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema57772,input_schema57773,input_checker57774,output_checker57775,vec__57769,opts__24145__auto__))
,schema.core.make_fn_schema(output_schema57772,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema57773], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner57740,new cljs.core.Keyword(null,"data","data",-232669377),data__24144__auto__], null));
};
var transactions = function (data__24144__auto__,owner57740,var_args){
var p__57742 = null;if (arguments.length > 2) {
  p__57742 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return transactions__delegate.call(this,data__24144__auto__,owner57740,p__57742);};
transactions.cljs$lang$maxFixedArity = 2;
transactions.cljs$lang$applyTo = (function (arglist__57800){
var data__24144__auto__ = cljs.core.first(arglist__57800);
arglist__57800 = cljs.core.next(arglist__57800);
var owner57740 = cljs.core.first(arglist__57800);
var p__57742 = cljs.core.rest(arglist__57800);
return transactions__delegate(data__24144__auto__,owner57740,p__57742);
});
transactions.cljs$core$IFn$_invoke$arity$variadic = transactions__delegate;
return transactions;
})()
;
stuttaford.radiant.transactions.__GT_transactions = (function() {
var __GT_transactions = null;
var __GT_transactions__1 = (function (cursor__24113__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.transactions.transactions,cursor__24113__auto__);
});
var __GT_transactions__2 = (function (cursor__24113__auto__,m57741){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.transactions.transactions,cursor__24113__auto__,m57741);
});
__GT_transactions = function(cursor__24113__auto__,m57741){
switch(arguments.length){
case 1:
return __GT_transactions__1.call(this,cursor__24113__auto__);
case 2:
return __GT_transactions__2.call(this,cursor__24113__auto__,m57741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_transactions.cljs$core$IFn$_invoke$arity$1 = __GT_transactions__1;
__GT_transactions.cljs$core$IFn$_invoke$arity$2 = __GT_transactions__2;
return __GT_transactions;
})()
;
//# sourceMappingURL=transactions.js.map