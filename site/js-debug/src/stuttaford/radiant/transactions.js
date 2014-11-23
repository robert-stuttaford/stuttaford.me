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
var transactions__delegate = function (data__24582__auto__,owner77947,p__77949){var vec__77976 = p__77949;var opts__24583__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77976,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema77979 = schema.core.Any;var input_schema77980 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map77977","map77977",-1739690909,null))], null);var input_checker77981 = schema.core.checker(input_schema77980);var output_checker77982 = schema.core.checker(output_schema77979);return schema.core.schematize_fn(((function (ufv__,output_schema77979,input_schema77980,input_checker77981,output_checker77982,vec__77976,opts__24583__auto__){
return (function fnk77978(G__77983){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___78002 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__77983], null);var temp__4126__auto___78003 = (function (){var G__77993 = args__838__auto___78002;return (input_checker77981.cljs$core$IFn$_invoke$arity$1 ? input_checker77981.cljs$core$IFn$_invoke$arity$1(G__77993) : input_checker77981.call(null,G__77993));
})();if(cljs.core.truth_(temp__4126__auto___78003))
{var error__839__auto___78004 = temp__4126__auto___78003;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk77978","fnk77978",-677850682,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___78004], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema77980,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___78002,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___78004], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map77977 = G__77983;while(true){
if(cljs.core.map_QMARK_(map77977))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map77977], 0))));
}
var data = plumbing.fnk.schema.safe_get(map77977,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map77977,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.transactions.t77994 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.transactions.t77994 = (function (transactions,opts__24583__auto__,map77977,input_checker77981,owner,data,fnk77978,p__77949,data__24582__auto__,output_schema77979,output_checker77982,input_schema77980,vec__77976,validate__837__auto__,owner77947,G__77983,ufv__,meta77995){
this.transactions = transactions;
this.opts__24583__auto__ = opts__24583__auto__;
this.map77977 = map77977;
this.input_checker77981 = input_checker77981;
this.owner = owner;
this.data = data;
this.fnk77978 = fnk77978;
this.p__77949 = p__77949;
this.data__24582__auto__ = data__24582__auto__;
this.output_schema77979 = output_schema77979;
this.output_checker77982 = output_checker77982;
this.input_schema77980 = input_schema77980;
this.vec__77976 = vec__77976;
this.validate__837__auto__ = validate__837__auto__;
this.owner77947 = owner77947;
this.G__77983 = G__77983;
this.ufv__ = ufv__;
this.meta77995 = meta77995;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.transactions.t77994.cljs$lang$type = true;
stuttaford.radiant.transactions.t77994.cljs$lang$ctorStr = "stuttaford.radiant.transactions/t77994";
stuttaford.radiant.transactions.t77994.cljs$lang$ctorPrWriter = ((function (owner,data,validate__837__auto__,ufv__,output_schema77979,input_schema77980,input_checker77981,output_checker77982,vec__77976,opts__24583__auto__){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"stuttaford.radiant.transactions/t77994");
});})(owner,data,validate__837__auto__,ufv__,output_schema77979,input_schema77980,input_checker77981,output_checker77982,vec__77976,opts__24583__auto__))
;
stuttaford.radiant.transactions.t77994.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.transactions.t77994.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema77979,input_schema77980,input_checker77981,output_checker77982,vec__77976,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "transactions";
});})(owner,data,validate__837__auto__,ufv__,output_schema77979,input_schema77980,input_checker77981,output_checker77982,vec__77976,opts__24583__auto__))
;
stuttaford.radiant.transactions.t77994.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.transactions.t77994.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema77979,input_schema77980,input_checker77981,output_checker77982,vec__77976,opts__24583__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var G__77999 = null;var G__78000 = "Transactions";return React.DOM.div(G__77999,G__78000);
});})(owner,data,validate__837__auto__,ufv__,output_schema77979,input_schema77980,input_checker77981,output_checker77982,vec__77976,opts__24583__auto__))
;
stuttaford.radiant.transactions.t77994.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema77979,input_schema77980,input_checker77981,output_checker77982,vec__77976,opts__24583__auto__){
return (function (_77996){var self__ = this;
var _77996__$1 = this;return self__.meta77995;
});})(owner,data,validate__837__auto__,ufv__,output_schema77979,input_schema77980,input_checker77981,output_checker77982,vec__77976,opts__24583__auto__))
;
stuttaford.radiant.transactions.t77994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema77979,input_schema77980,input_checker77981,output_checker77982,vec__77976,opts__24583__auto__){
return (function (_77996,meta77995__$1){var self__ = this;
var _77996__$1 = this;return (new stuttaford.radiant.transactions.t77994(self__.transactions,self__.opts__24583__auto__,self__.map77977,self__.input_checker77981,self__.owner,self__.data,self__.fnk77978,self__.p__77949,self__.data__24582__auto__,self__.output_schema77979,self__.output_checker77982,self__.input_schema77980,self__.vec__77976,self__.validate__837__auto__,self__.owner77947,self__.G__77983,self__.ufv__,meta77995__$1));
});})(owner,data,validate__837__auto__,ufv__,output_schema77979,input_schema77980,input_checker77981,output_checker77982,vec__77976,opts__24583__auto__))
;
stuttaford.radiant.transactions.__GT_t77994 = ((function (owner,data,validate__837__auto__,ufv__,output_schema77979,input_schema77980,input_checker77981,output_checker77982,vec__77976,opts__24583__auto__){
return (function __GT_t77994(transactions__$1,opts__24583__auto____$1,map77977__$1,input_checker77981__$1,owner__$1,data__$1,fnk77978__$1,p__77949__$1,data__24582__auto____$1,output_schema77979__$1,output_checker77982__$1,input_schema77980__$1,vec__77976__$1,validate__837__auto____$1,owner77947__$1,G__77983__$1,ufv____$1,meta77995){return (new stuttaford.radiant.transactions.t77994(transactions__$1,opts__24583__auto____$1,map77977__$1,input_checker77981__$1,owner__$1,data__$1,fnk77978__$1,p__77949__$1,data__24582__auto____$1,output_schema77979__$1,output_checker77982__$1,input_schema77980__$1,vec__77976__$1,validate__837__auto____$1,owner77947__$1,G__77983__$1,ufv____$1,meta77995));
});})(owner,data,validate__837__auto__,ufv__,output_schema77979,input_schema77980,input_checker77981,output_checker77982,vec__77976,opts__24583__auto__))
;
}
return (new stuttaford.radiant.transactions.t77994(transactions,opts__24583__auto__,map77977,input_checker77981,owner,data,fnk77978,p__77949,data__24582__auto__,output_schema77979,output_checker77982,input_schema77980,vec__77976,validate__837__auto__,owner77947,G__77983,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___78005 = (function (){var G__78001 = o__840__auto__;return (output_checker77982.cljs$core$IFn$_invoke$arity$1 ? output_checker77982.cljs$core$IFn$_invoke$arity$1(G__78001) : output_checker77982.call(null,G__78001));
})();if(cljs.core.truth_(temp__4126__auto___78005))
{var error__839__auto___78006 = temp__4126__auto___78005;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk77978","fnk77978",-677850682,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___78006], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema77979,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___78006], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema77979,input_schema77980,input_checker77981,output_checker77982,vec__77976,opts__24583__auto__))
,schema.core.make_fn_schema(output_schema77979,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema77980], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24583__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner77947,new cljs.core.Keyword(null,"data","data",-232669377),data__24582__auto__], null));
};
var transactions = function (data__24582__auto__,owner77947,var_args){
var p__77949 = null;if (arguments.length > 2) {
  p__77949 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return transactions__delegate.call(this,data__24582__auto__,owner77947,p__77949);};
transactions.cljs$lang$maxFixedArity = 2;
transactions.cljs$lang$applyTo = (function (arglist__78007){
var data__24582__auto__ = cljs.core.first(arglist__78007);
arglist__78007 = cljs.core.next(arglist__78007);
var owner77947 = cljs.core.first(arglist__78007);
var p__77949 = cljs.core.rest(arglist__78007);
return transactions__delegate(data__24582__auto__,owner77947,p__77949);
});
transactions.cljs$core$IFn$_invoke$arity$variadic = transactions__delegate;
return transactions;
})()
;
stuttaford.radiant.transactions.__GT_transactions = (function() {
var __GT_transactions = null;
var __GT_transactions__1 = (function (cursor__24551__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.transactions.transactions,cursor__24551__auto__);
});
var __GT_transactions__2 = (function (cursor__24551__auto__,m77948){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.transactions.transactions,cursor__24551__auto__,m77948);
});
__GT_transactions = function(cursor__24551__auto__,m77948){
switch(arguments.length){
case 1:
return __GT_transactions__1.call(this,cursor__24551__auto__);
case 2:
return __GT_transactions__2.call(this,cursor__24551__auto__,m77948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_transactions.cljs$core$IFn$_invoke$arity$1 = __GT_transactions__1;
__GT_transactions.cljs$core$IFn$_invoke$arity$2 = __GT_transactions__2;
return __GT_transactions;
})()
;
//# sourceMappingURL=transactions.js.map