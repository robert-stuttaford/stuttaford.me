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
var transactions__delegate = function (data__24197__auto__,owner51187,p__51189){var vec__51216 = p__51189;var opts__24198__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51216,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema51219 = schema.core.Any;var input_schema51220 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map51217","map51217",171147800,null))], null);var input_checker51221 = schema.core.checker(input_schema51220);var output_checker51222 = schema.core.checker(output_schema51219);return schema.core.schematize_fn(((function (ufv__,output_schema51219,input_schema51220,input_checker51221,output_checker51222,vec__51216,opts__24198__auto__){
return (function fnk51218(G__51223){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___51242 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__51223], null);var temp__4126__auto___51243 = (function (){var G__51233 = args__838__auto___51242;return (input_checker51221.cljs$core$IFn$_invoke$arity$1 ? input_checker51221.cljs$core$IFn$_invoke$arity$1(G__51233) : input_checker51221.call(null,G__51233));
})();if(cljs.core.truth_(temp__4126__auto___51243))
{var error__839__auto___51244 = temp__4126__auto___51243;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk51218","fnk51218",711550773,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___51244], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema51220,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___51242,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___51244], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map51217 = G__51223;while(true){
if(cljs.core.map_QMARK_(map51217))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map51217], 0))));
}
var data = plumbing.fnk.schema.safe_get(map51217,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map51217,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.transactions.t51234 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.transactions.t51234 = (function (owner51187,transactions,data__24197__auto__,p__51189,owner,data,input_schema51220,output_schema51219,opts__24198__auto__,G__51223,fnk51218,output_checker51222,map51217,validate__837__auto__,input_checker51221,vec__51216,ufv__,meta51235){
this.owner51187 = owner51187;
this.transactions = transactions;
this.data__24197__auto__ = data__24197__auto__;
this.p__51189 = p__51189;
this.owner = owner;
this.data = data;
this.input_schema51220 = input_schema51220;
this.output_schema51219 = output_schema51219;
this.opts__24198__auto__ = opts__24198__auto__;
this.G__51223 = G__51223;
this.fnk51218 = fnk51218;
this.output_checker51222 = output_checker51222;
this.map51217 = map51217;
this.validate__837__auto__ = validate__837__auto__;
this.input_checker51221 = input_checker51221;
this.vec__51216 = vec__51216;
this.ufv__ = ufv__;
this.meta51235 = meta51235;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.transactions.t51234.cljs$lang$type = true;
stuttaford.radiant.transactions.t51234.cljs$lang$ctorStr = "stuttaford.radiant.transactions/t51234";
stuttaford.radiant.transactions.t51234.cljs$lang$ctorPrWriter = ((function (owner,data,validate__837__auto__,ufv__,output_schema51219,input_schema51220,input_checker51221,output_checker51222,vec__51216,opts__24198__auto__){
return (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"stuttaford.radiant.transactions/t51234");
});})(owner,data,validate__837__auto__,ufv__,output_schema51219,input_schema51220,input_checker51221,output_checker51222,vec__51216,opts__24198__auto__))
;
stuttaford.radiant.transactions.t51234.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.transactions.t51234.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema51219,input_schema51220,input_checker51221,output_checker51222,vec__51216,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "transactions";
});})(owner,data,validate__837__auto__,ufv__,output_schema51219,input_schema51220,input_checker51221,output_checker51222,vec__51216,opts__24198__auto__))
;
stuttaford.radiant.transactions.t51234.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.transactions.t51234.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema51219,input_schema51220,input_checker51221,output_checker51222,vec__51216,opts__24198__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var G__51239 = null;var G__51240 = "Transactions";return React.DOM.div(G__51239,G__51240);
});})(owner,data,validate__837__auto__,ufv__,output_schema51219,input_schema51220,input_checker51221,output_checker51222,vec__51216,opts__24198__auto__))
;
stuttaford.radiant.transactions.t51234.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,data,validate__837__auto__,ufv__,output_schema51219,input_schema51220,input_checker51221,output_checker51222,vec__51216,opts__24198__auto__){
return (function (_51236){var self__ = this;
var _51236__$1 = this;return self__.meta51235;
});})(owner,data,validate__837__auto__,ufv__,output_schema51219,input_schema51220,input_checker51221,output_checker51222,vec__51216,opts__24198__auto__))
;
stuttaford.radiant.transactions.t51234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,data,validate__837__auto__,ufv__,output_schema51219,input_schema51220,input_checker51221,output_checker51222,vec__51216,opts__24198__auto__){
return (function (_51236,meta51235__$1){var self__ = this;
var _51236__$1 = this;return (new stuttaford.radiant.transactions.t51234(self__.owner51187,self__.transactions,self__.data__24197__auto__,self__.p__51189,self__.owner,self__.data,self__.input_schema51220,self__.output_schema51219,self__.opts__24198__auto__,self__.G__51223,self__.fnk51218,self__.output_checker51222,self__.map51217,self__.validate__837__auto__,self__.input_checker51221,self__.vec__51216,self__.ufv__,meta51235__$1));
});})(owner,data,validate__837__auto__,ufv__,output_schema51219,input_schema51220,input_checker51221,output_checker51222,vec__51216,opts__24198__auto__))
;
stuttaford.radiant.transactions.__GT_t51234 = ((function (owner,data,validate__837__auto__,ufv__,output_schema51219,input_schema51220,input_checker51221,output_checker51222,vec__51216,opts__24198__auto__){
return (function __GT_t51234(owner51187__$1,transactions__$1,data__24197__auto____$1,p__51189__$1,owner__$1,data__$1,input_schema51220__$1,output_schema51219__$1,opts__24198__auto____$1,G__51223__$1,fnk51218__$1,output_checker51222__$1,map51217__$1,validate__837__auto____$1,input_checker51221__$1,vec__51216__$1,ufv____$1,meta51235){return (new stuttaford.radiant.transactions.t51234(owner51187__$1,transactions__$1,data__24197__auto____$1,p__51189__$1,owner__$1,data__$1,input_schema51220__$1,output_schema51219__$1,opts__24198__auto____$1,G__51223__$1,fnk51218__$1,output_checker51222__$1,map51217__$1,validate__837__auto____$1,input_checker51221__$1,vec__51216__$1,ufv____$1,meta51235));
});})(owner,data,validate__837__auto__,ufv__,output_schema51219,input_schema51220,input_checker51221,output_checker51222,vec__51216,opts__24198__auto__))
;
}
return (new stuttaford.radiant.transactions.t51234(owner51187,transactions,data__24197__auto__,p__51189,owner,data,input_schema51220,output_schema51219,opts__24198__auto__,G__51223,fnk51218,output_checker51222,map51217,validate__837__auto__,input_checker51221,vec__51216,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___51245 = (function (){var G__51241 = o__840__auto__;return (output_checker51222.cljs$core$IFn$_invoke$arity$1 ? output_checker51222.cljs$core$IFn$_invoke$arity$1(G__51241) : output_checker51222.call(null,G__51241));
})();if(cljs.core.truth_(temp__4126__auto___51245))
{var error__839__auto___51246 = temp__4126__auto___51245;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk51218","fnk51218",711550773,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___51246], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema51219,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___51246], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema51219,input_schema51220,input_checker51221,output_checker51222,vec__51216,opts__24198__auto__))
,schema.core.make_fn_schema(output_schema51219,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema51220], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24198__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner51187,new cljs.core.Keyword(null,"data","data",-232669377),data__24197__auto__], null));
};
var transactions = function (data__24197__auto__,owner51187,var_args){
var p__51189 = null;if (arguments.length > 2) {
  p__51189 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return transactions__delegate.call(this,data__24197__auto__,owner51187,p__51189);};
transactions.cljs$lang$maxFixedArity = 2;
transactions.cljs$lang$applyTo = (function (arglist__51247){
var data__24197__auto__ = cljs.core.first(arglist__51247);
arglist__51247 = cljs.core.next(arglist__51247);
var owner51187 = cljs.core.first(arglist__51247);
var p__51189 = cljs.core.rest(arglist__51247);
return transactions__delegate(data__24197__auto__,owner51187,p__51189);
});
transactions.cljs$core$IFn$_invoke$arity$variadic = transactions__delegate;
return transactions;
})()
;
stuttaford.radiant.transactions.__GT_transactions = (function() {
var __GT_transactions = null;
var __GT_transactions__1 = (function (cursor__24166__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.transactions.transactions,cursor__24166__auto__);
});
var __GT_transactions__2 = (function (cursor__24166__auto__,m51188){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.transactions.transactions,cursor__24166__auto__,m51188);
});
__GT_transactions = function(cursor__24166__auto__,m51188){
switch(arguments.length){
case 1:
return __GT_transactions__1.call(this,cursor__24166__auto__);
case 2:
return __GT_transactions__2.call(this,cursor__24166__auto__,m51188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_transactions.cljs$core$IFn$_invoke$arity$1 = __GT_transactions__1;
__GT_transactions.cljs$core$IFn$_invoke$arity$2 = __GT_transactions__2;
return __GT_transactions;
})()
;
//# sourceMappingURL=transactions.js.map