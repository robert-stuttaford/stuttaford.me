goog.provide('stuttaford.radiant');
goog.require('cljs.core');
goog.require('stuttaford.om.common');
goog.require('stuttaford.radiant.actions');
goog.require('stuttaford.radiant.datoms');
goog.require('cljs.core.async');
goog.require('stuttaford.radiant.datalog');
goog.require('stuttaford.radiant.transactions');
goog.require('stuttaford.radiant.components');
goog.require('om_bootstrap.panel');
goog.require('stuttaford.radiant.actions');
goog.require('stuttaford.radiant.datalog');
goog.require('stuttaford.radiant.transactions');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('stuttaford.radiant.datoms');
goog.require('om_bootstrap.panel');
goog.require('stuttaford.om.common');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
goog.require('stuttaford.om.common');
goog.require('stuttaford.radiant.components');
stuttaford.radiant.nav_items = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datalog","datalog",-1248728420),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Datalog",stuttaford.radiant.datalog.datalog], null),new cljs.core.Keyword(null,"datoms","datoms",-290874434),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Datoms",stuttaford.radiant.datoms.datoms], null)], null);
/**
* @param {...*} var_args
*/
stuttaford.radiant.app_view = (function() { 
var app_view__delegate = function (data__24441__auto__,owner42199,p__42201){var vec__42320 = p__42201;var opts__24442__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42320,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema42323 = schema.core.Any;var input_schema42324 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map42321","map42321",863652754,null))], null);var input_checker42325 = schema.core.checker(input_schema42324);var output_checker42326 = schema.core.checker(output_schema42323);return schema.core.schematize_fn(((function (ufv__,output_schema42323,input_schema42324,input_checker42325,output_checker42326,vec__42320,opts__24442__auto__){
return (function fnk42322(G__42327){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___42438 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__42327], null);var temp__4126__auto___42439 = (function (){var G__42383 = args__838__auto___42438;return (input_checker42325.cljs$core$IFn$_invoke$arity$1 ? input_checker42325.cljs$core$IFn$_invoke$arity$1(G__42383) : input_checker42325.call(null,G__42383));
})();if(cljs.core.truth_(temp__4126__auto___42439))
{var error__839__auto___42440 = temp__4126__auto___42439;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk42322","fnk42322",1915996268,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___42440], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema42324,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___42438,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___42440], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map42321 = G__42327;while(true){
if(cljs.core.map_QMARK_(map42321))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map42321], 0))));
}
var data = plumbing.fnk.schema.safe_get(map42321,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var schema_visible_QMARK_ = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map42321,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.t42384 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.t42384 = (function (owner42199,app_view,output_schema42323,output_checker42326,owner,view,input_schema42324,data,schema_visible_QMARK_,p__42201,fnk42322,data__24441__auto__,input_checker42325,map42321,vec__42320,opts__24442__auto__,validate__837__auto__,ufv__,G__42327,meta42385){
this.owner42199 = owner42199;
this.app_view = app_view;
this.output_schema42323 = output_schema42323;
this.output_checker42326 = output_checker42326;
this.owner = owner;
this.view = view;
this.input_schema42324 = input_schema42324;
this.data = data;
this.schema_visible_QMARK_ = schema_visible_QMARK_;
this.p__42201 = p__42201;
this.fnk42322 = fnk42322;
this.data__24441__auto__ = data__24441__auto__;
this.input_checker42325 = input_checker42325;
this.map42321 = map42321;
this.vec__42320 = vec__42320;
this.opts__24442__auto__ = opts__24442__auto__;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.G__42327 = G__42327;
this.meta42385 = meta42385;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.t42384.cljs$lang$type = true;
stuttaford.radiant.t42384.cljs$lang$ctorStr = "stuttaford.radiant/t42384";
stuttaford.radiant.t42384.cljs$lang$ctorPrWriter = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema42323,input_schema42324,input_checker42325,output_checker42326,vec__42320,opts__24442__auto__){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"stuttaford.radiant/t42384");
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema42323,input_schema42324,input_checker42325,output_checker42326,vec__42320,opts__24442__auto__))
;
stuttaford.radiant.t42384.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.t42384.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema42323,input_schema42324,input_checker42325,output_checker42326,vec__42320,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "app-view";
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema42323,input_schema42324,input_checker42325,output_checker42326,vec__42320,opts__24442__auto__))
;
stuttaford.radiant.t42384.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.t42384.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema42323,input_schema42324,input_checker42325,output_checker42326,vec__42320,opts__24442__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret((function (){var vec__42387 = (function (){var G__42388 = stuttaford.radiant.nav_items;return (self__.view.cljs$core$IFn$_invoke$arity$1 ? self__.view.cljs$core$IFn$_invoke$arity$1(G__42388) : self__.view.call(null,G__42388));
})();var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42387,(0),null);var view_component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42387,(1),null);return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),stuttaford.radiant.components.__GT_top_nav.cljs$core$IFn$_invoke$arity$2(self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),stuttaford.radiant.nav_items], null)], null))], null),cljs.core.array_seq([(cljs.core.truth_(self__.schema_visible_QMARK_)?stuttaford.radiant.components.__GT_schema.cljs$core$IFn$_invoke$arity$1(self__.data):null),(cljs.core.truth_(view_component)?om.core.build.cljs$core$IFn$_invoke$arity$2(view_component,self__.data):(function (){var G__42391 = null;return React.DOM.div(G__42391);
})())], 0));
})());
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema42323,input_schema42324,input_checker42325,output_checker42326,vec__42320,opts__24442__auto__))
;
stuttaford.radiant.t42384.prototype.om$core$IWillMount$ = true;
stuttaford.radiant.t42384.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema42323,input_schema42324,input_checker42325,output_checker42326,vec__42320,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var c__22986__auto___42441 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22986__auto___42441,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema42323,input_schema42324,input_checker42325,output_checker42326,vec__42320,opts__24442__auto__){
return (function (){var f__22987__auto__ = (function (){var switch__22971__auto__ = ((function (c__22986__auto___42441,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema42323,input_schema42324,input_checker42325,output_checker42326,vec__42320,opts__24442__auto__){
return (function (state_42412){var state_val_42413 = (state_42412[(1)]);if((state_val_42413 === (7)))
{var inst_42395 = (state_42412[(7)]);var inst_42395__$1 = (state_42412[(2)]);var state_42412__$1 = (function (){var statearr_42414 = state_42412;(statearr_42414[(7)] = inst_42395__$1);
return statearr_42414;
})();if(cljs.core.truth_(inst_42395__$1))
{var statearr_42415_42442 = state_42412__$1;(statearr_42415_42442[(1)] = (8));
} else
{var statearr_42416_42443 = state_42412__$1;(statearr_42416_42443[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42413 === (1)))
{var state_42412__$1 = state_42412;var statearr_42417_42444 = state_42412__$1;(statearr_42417_42444[(2)] = null);
(statearr_42417_42444[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42413 === (4)))
{var state_42412__$1 = state_42412;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42412__$1,(7),c);
} else
{if((state_val_42413 === (6)))
{var inst_42408 = (state_42412[(2)]);var state_42412__$1 = state_42412;var statearr_42418_42445 = state_42412__$1;(statearr_42418_42445[(2)] = inst_42408);
(statearr_42418_42445[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42413 === (3)))
{var inst_42410 = (state_42412[(2)]);var state_42412__$1 = state_42412;return cljs.core.async.impl.ioc_helpers.return_chan(state_42412__$1,inst_42410);
} else
{if((state_val_42413 === (2)))
{var state_42412__$1 = state_42412;var statearr_42419_42446 = state_42412__$1;(statearr_42419_42446[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42413 === (9)))
{var state_42412__$1 = state_42412;var statearr_42421_42447 = state_42412__$1;(statearr_42421_42447[(2)] = null);
(statearr_42421_42447[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42413 === (5)))
{var state_42412__$1 = state_42412;var statearr_42422_42448 = state_42412__$1;(statearr_42422_42448[(2)] = null);
(statearr_42422_42448[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42413 === (10)))
{var inst_42404 = (state_42412[(2)]);var state_42412__$1 = (function (){var statearr_42423 = state_42412;(statearr_42423[(8)] = inst_42404);
return statearr_42423;
})();var statearr_42424_42449 = state_42412__$1;(statearr_42424_42449[(2)] = null);
(statearr_42424_42449[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42413 === (8)))
{var inst_42395 = (state_42412[(7)]);var inst_42398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42395,(0),null);var inst_42399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42395,(1),null);var inst_42400 = stuttaford.om.common.config.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"debug?","debug?",-1831756173));var inst_42401 = (function (){var G__42425 = self__.data;var G__42426 = inst_42398;var G__42427 = inst_42399;var G__42428 = inst_42400;return (stuttaford.radiant.actions.perform_action.cljs$core$IFn$_invoke$arity$4 ? stuttaford.radiant.actions.perform_action.cljs$core$IFn$_invoke$arity$4(G__42425,G__42426,G__42427,G__42428) : stuttaford.radiant.actions.perform_action.call(null,G__42425,G__42426,G__42427,G__42428));
})();var state_42412__$1 = state_42412;var statearr_42429_42450 = state_42412__$1;(statearr_42429_42450[(2)] = inst_42401);
(statearr_42429_42450[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__22986__auto___42441,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema42323,input_schema42324,input_checker42325,output_checker42326,vec__42320,opts__24442__auto__))
;return ((function (switch__22971__auto__,c__22986__auto___42441,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema42323,input_schema42324,input_checker42325,output_checker42326,vec__42320,opts__24442__auto__){
return (function() {
var state_machine__22972__auto__ = null;
var state_machine__22972__auto____0 = (function (){var statearr_42433 = [null,null,null,null,null,null,null,null,null];(statearr_42433[(0)] = state_machine__22972__auto__);
(statearr_42433[(1)] = (1));
return statearr_42433;
});
var state_machine__22972__auto____1 = (function (state_42412){while(true){
var ret_value__22973__auto__ = (function (){try{while(true){
var result__22974__auto__ = switch__22971__auto__(state_42412);if(cljs.core.keyword_identical_QMARK_(result__22974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22974__auto__;
}
break;
}
}catch (e42434){if((e42434 instanceof Object))
{var ex__22975__auto__ = e42434;var statearr_42435_42451 = state_42412;(statearr_42435_42451[(5)] = ex__22975__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42412);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e42434;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__42452 = state_42412;
state_42412 = G__42452;
continue;
}
} else
{return ret_value__22973__auto__;
}
break;
}
});
state_machine__22972__auto__ = function(state_42412){
switch(arguments.length){
case 0:
return state_machine__22972__auto____0.call(this);
case 1:
return state_machine__22972__auto____1.call(this,state_42412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22972__auto____0;
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22972__auto____1;
return state_machine__22972__auto__;
})()
;})(switch__22971__auto__,c__22986__auto___42441,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema42323,input_schema42324,input_checker42325,output_checker42326,vec__42320,opts__24442__auto__))
})();var state__22988__auto__ = (function (){var statearr_42436 = (function (){return (f__22987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22987__auto__.cljs$core$IFn$_invoke$arity$0() : f__22987__auto__.call(null));
})();(statearr_42436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22986__auto___42441);
return statearr_42436;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22988__auto__);
});})(c__22986__auto___42441,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema42323,input_schema42324,input_checker42325,output_checker42326,vec__42320,opts__24442__auto__))
);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-data-source","set-data-source",-1371173368),cljs.core.ffirst(new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574).cljs$core$IFn$_invoke$arity$1(self__.data))], null));
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema42323,input_schema42324,input_checker42325,output_checker42326,vec__42320,opts__24442__auto__))
;
stuttaford.radiant.t42384.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema42323,input_schema42324,input_checker42325,output_checker42326,vec__42320,opts__24442__auto__){
return (function (_42386){var self__ = this;
var _42386__$1 = this;return self__.meta42385;
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema42323,input_schema42324,input_checker42325,output_checker42326,vec__42320,opts__24442__auto__))
;
stuttaford.radiant.t42384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema42323,input_schema42324,input_checker42325,output_checker42326,vec__42320,opts__24442__auto__){
return (function (_42386,meta42385__$1){var self__ = this;
var _42386__$1 = this;return (new stuttaford.radiant.t42384(self__.owner42199,self__.app_view,self__.output_schema42323,self__.output_checker42326,self__.owner,self__.view,self__.input_schema42324,self__.data,self__.schema_visible_QMARK_,self__.p__42201,self__.fnk42322,self__.data__24441__auto__,self__.input_checker42325,self__.map42321,self__.vec__42320,self__.opts__24442__auto__,self__.validate__837__auto__,self__.ufv__,self__.G__42327,meta42385__$1));
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema42323,input_schema42324,input_checker42325,output_checker42326,vec__42320,opts__24442__auto__))
;
stuttaford.radiant.__GT_t42384 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema42323,input_schema42324,input_checker42325,output_checker42326,vec__42320,opts__24442__auto__){
return (function __GT_t42384(owner42199__$1,app_view__$1,output_schema42323__$1,output_checker42326__$1,owner__$1,view__$1,input_schema42324__$1,data__$1,schema_visible_QMARK___$1,p__42201__$1,fnk42322__$1,data__24441__auto____$1,input_checker42325__$1,map42321__$1,vec__42320__$1,opts__24442__auto____$1,validate__837__auto____$1,ufv____$1,G__42327__$1,meta42385){return (new stuttaford.radiant.t42384(owner42199__$1,app_view__$1,output_schema42323__$1,output_checker42326__$1,owner__$1,view__$1,input_schema42324__$1,data__$1,schema_visible_QMARK___$1,p__42201__$1,fnk42322__$1,data__24441__auto____$1,input_checker42325__$1,map42321__$1,vec__42320__$1,opts__24442__auto____$1,validate__837__auto____$1,ufv____$1,G__42327__$1,meta42385));
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema42323,input_schema42324,input_checker42325,output_checker42326,vec__42320,opts__24442__auto__))
;
}
return (new stuttaford.radiant.t42384(owner42199,app_view,output_schema42323,output_checker42326,owner,view,input_schema42324,data,schema_visible_QMARK_,p__42201,fnk42322,data__24441__auto__,input_checker42325,map42321,vec__42320,opts__24442__auto__,validate__837__auto__,ufv__,G__42327,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___42453 = (function (){var G__42437 = o__840__auto__;return (output_checker42326.cljs$core$IFn$_invoke$arity$1 ? output_checker42326.cljs$core$IFn$_invoke$arity$1(G__42437) : output_checker42326.call(null,G__42437));
})();if(cljs.core.truth_(temp__4126__auto___42453))
{var error__839__auto___42454 = temp__4126__auto___42453;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk42322","fnk42322",1915996268,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___42454], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema42323,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___42454], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema42323,input_schema42324,input_checker42325,output_checker42326,vec__42320,opts__24442__auto__))
,schema.core.make_fn_schema(output_schema42323,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema42324], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24442__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner42199,new cljs.core.Keyword(null,"data","data",-232669377),data__24441__auto__], null));
};
var app_view = function (data__24441__auto__,owner42199,var_args){
var p__42201 = null;if (arguments.length > 2) {
  p__42201 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_view__delegate.call(this,data__24441__auto__,owner42199,p__42201);};
app_view.cljs$lang$maxFixedArity = 2;
app_view.cljs$lang$applyTo = (function (arglist__42455){
var data__24441__auto__ = cljs.core.first(arglist__42455);
arglist__42455 = cljs.core.next(arglist__42455);
var owner42199 = cljs.core.first(arglist__42455);
var p__42201 = cljs.core.rest(arglist__42455);
return app_view__delegate(data__24441__auto__,owner42199,p__42201);
});
app_view.cljs$core$IFn$_invoke$arity$variadic = app_view__delegate;
return app_view;
})()
;
stuttaford.radiant.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__24410__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.app_view,cursor__24410__auto__);
});
var __GT_app_view__2 = (function (cursor__24410__auto__,m42200){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.app_view,cursor__24410__auto__,m42200);
});
__GT_app_view = function(cursor__24410__auto__,m42200){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__24410__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__24410__auto__,m42200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_app_view.cljs$core$IFn$_invoke$arity$1 = __GT_app_view__1;
__GT_app_view.cljs$core$IFn$_invoke$arity$2 = __GT_app_view__2;
return __GT_app_view;
})()
;
stuttaford.radiant.init = (function init(app_id,state_id,debug_QMARK_){return stuttaford.om.common.start.cljs$core$IFn$_invoke$arity$5(app_id,state_id,stuttaford.radiant.app_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"control-chan","control-chan",-1773911405),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0()], null)], null),debug_QMARK_);
});
goog.exportSymbol('stuttaford.radiant.init', stuttaford.radiant.init);
//# sourceMappingURL=radiant.js.map