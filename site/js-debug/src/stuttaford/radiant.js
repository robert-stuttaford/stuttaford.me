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
var app_view__delegate = function (data__24144__auto__,owner79697,p__79699){var vec__79821 = p__79699;var opts__24145__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79821,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema79824 = schema.core.Any;var input_schema79825 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map79822","map79822",1476064477,null))], null);var input_checker79826 = schema.core.checker(input_schema79825);var output_checker79827 = schema.core.checker(output_schema79824);return schema.core.schematize_fn(((function (ufv__,output_schema79824,input_schema79825,input_checker79826,output_checker79827,vec__79821,opts__24145__auto__){
return (function fnk79823(G__79828){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___79939 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__79828], null);var temp__4126__auto___79940 = (function (){var G__79884 = args__838__auto___79939;return (input_checker79826.cljs$core$IFn$_invoke$arity$1 ? input_checker79826.cljs$core$IFn$_invoke$arity$1(G__79884) : input_checker79826.call(null,G__79884));
})();if(cljs.core.truth_(temp__4126__auto___79940))
{var error__839__auto___79941 = temp__4126__auto___79940;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk79823","fnk79823",1785660971,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___79941], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema79825,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___79939,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___79941], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map79822 = G__79828;while(true){
if(cljs.core.map_QMARK_(map79822))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map79822], 0))));
}
var data = plumbing.fnk.schema.safe_get(map79822,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var schema_visible_QMARK_ = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map79822,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.t79885 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.t79885 = (function (p__79699,app_view,owner,view,data,schema_visible_QMARK_,data__24144__auto__,opts__24145__auto__,fnk79823,vec__79821,output_schema79824,output_checker79827,owner79697,input_schema79825,G__79828,input_checker79826,validate__837__auto__,map79822,ufv__,meta79886){
this.p__79699 = p__79699;
this.app_view = app_view;
this.owner = owner;
this.view = view;
this.data = data;
this.schema_visible_QMARK_ = schema_visible_QMARK_;
this.data__24144__auto__ = data__24144__auto__;
this.opts__24145__auto__ = opts__24145__auto__;
this.fnk79823 = fnk79823;
this.vec__79821 = vec__79821;
this.output_schema79824 = output_schema79824;
this.output_checker79827 = output_checker79827;
this.owner79697 = owner79697;
this.input_schema79825 = input_schema79825;
this.G__79828 = G__79828;
this.input_checker79826 = input_checker79826;
this.validate__837__auto__ = validate__837__auto__;
this.map79822 = map79822;
this.ufv__ = ufv__;
this.meta79886 = meta79886;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.t79885.cljs$lang$type = true;
stuttaford.radiant.t79885.cljs$lang$ctorStr = "stuttaford.radiant/t79885";
stuttaford.radiant.t79885.cljs$lang$ctorPrWriter = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema79824,input_schema79825,input_checker79826,output_checker79827,vec__79821,opts__24145__auto__){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"stuttaford.radiant/t79885");
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema79824,input_schema79825,input_checker79826,output_checker79827,vec__79821,opts__24145__auto__))
;
stuttaford.radiant.t79885.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.t79885.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema79824,input_schema79825,input_checker79826,output_checker79827,vec__79821,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "app-view";
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema79824,input_schema79825,input_checker79826,output_checker79827,vec__79821,opts__24145__auto__))
;
stuttaford.radiant.t79885.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.t79885.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema79824,input_schema79825,input_checker79826,output_checker79827,vec__79821,opts__24145__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret((function (){var vec__79888 = (function (){var G__79889 = stuttaford.radiant.nav_items;return (self__.view.cljs$core$IFn$_invoke$arity$1 ? self__.view.cljs$core$IFn$_invoke$arity$1(G__79889) : self__.view.call(null,G__79889));
})();var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79888,(0),null);var view_component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79888,(1),null);return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),stuttaford.radiant.components.__GT_top_nav.cljs$core$IFn$_invoke$arity$2(self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),stuttaford.radiant.nav_items], null)], null))], null),cljs.core.array_seq([(cljs.core.truth_(self__.schema_visible_QMARK_)?stuttaford.radiant.components.__GT_schema.cljs$core$IFn$_invoke$arity$1(self__.data):null),(cljs.core.truth_(view_component)?om.core.build.cljs$core$IFn$_invoke$arity$2(view_component,self__.data):(function (){var G__79892 = null;return React.DOM.div(G__79892);
})())], 0));
})());
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema79824,input_schema79825,input_checker79826,output_checker79827,vec__79821,opts__24145__auto__))
;
stuttaford.radiant.t79885.prototype.om$core$IWillMount$ = true;
stuttaford.radiant.t79885.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema79824,input_schema79825,input_checker79826,output_checker79827,vec__79821,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var c__22689__auto___79942 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22689__auto___79942,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema79824,input_schema79825,input_checker79826,output_checker79827,vec__79821,opts__24145__auto__){
return (function (){var f__22690__auto__ = (function (){var switch__22674__auto__ = ((function (c__22689__auto___79942,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema79824,input_schema79825,input_checker79826,output_checker79827,vec__79821,opts__24145__auto__){
return (function (state_79913){var state_val_79914 = (state_79913[(1)]);if((state_val_79914 === (7)))
{var inst_79896 = (state_79913[(7)]);var inst_79896__$1 = (state_79913[(2)]);var state_79913__$1 = (function (){var statearr_79915 = state_79913;(statearr_79915[(7)] = inst_79896__$1);
return statearr_79915;
})();if(cljs.core.truth_(inst_79896__$1))
{var statearr_79916_79943 = state_79913__$1;(statearr_79916_79943[(1)] = (8));
} else
{var statearr_79917_79944 = state_79913__$1;(statearr_79917_79944[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79914 === (1)))
{var state_79913__$1 = state_79913;var statearr_79918_79945 = state_79913__$1;(statearr_79918_79945[(2)] = null);
(statearr_79918_79945[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79914 === (4)))
{var state_79913__$1 = state_79913;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79913__$1,(7),c);
} else
{if((state_val_79914 === (6)))
{var inst_79909 = (state_79913[(2)]);var state_79913__$1 = state_79913;var statearr_79919_79946 = state_79913__$1;(statearr_79919_79946[(2)] = inst_79909);
(statearr_79919_79946[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79914 === (3)))
{var inst_79911 = (state_79913[(2)]);var state_79913__$1 = state_79913;return cljs.core.async.impl.ioc_helpers.return_chan(state_79913__$1,inst_79911);
} else
{if((state_val_79914 === (2)))
{var state_79913__$1 = state_79913;var statearr_79920_79947 = state_79913__$1;(statearr_79920_79947[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79914 === (9)))
{var state_79913__$1 = state_79913;var statearr_79922_79948 = state_79913__$1;(statearr_79922_79948[(2)] = null);
(statearr_79922_79948[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79914 === (5)))
{var state_79913__$1 = state_79913;var statearr_79923_79949 = state_79913__$1;(statearr_79923_79949[(2)] = null);
(statearr_79923_79949[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79914 === (10)))
{var inst_79905 = (state_79913[(2)]);var state_79913__$1 = (function (){var statearr_79924 = state_79913;(statearr_79924[(8)] = inst_79905);
return statearr_79924;
})();var statearr_79925_79950 = state_79913__$1;(statearr_79925_79950[(2)] = null);
(statearr_79925_79950[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_79914 === (8)))
{var inst_79896 = (state_79913[(7)]);var inst_79899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_79896,(0),null);var inst_79900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_79896,(1),null);var inst_79901 = stuttaford.om.common.config.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"debug?","debug?",-1831756173));var inst_79902 = (function (){var G__79926 = self__.data;var G__79927 = inst_79899;var G__79928 = inst_79900;var G__79929 = inst_79901;return (stuttaford.radiant.actions.perform_action.cljs$core$IFn$_invoke$arity$4 ? stuttaford.radiant.actions.perform_action.cljs$core$IFn$_invoke$arity$4(G__79926,G__79927,G__79928,G__79929) : stuttaford.radiant.actions.perform_action.call(null,G__79926,G__79927,G__79928,G__79929));
})();var state_79913__$1 = state_79913;var statearr_79930_79951 = state_79913__$1;(statearr_79930_79951[(2)] = inst_79902);
(statearr_79930_79951[(1)] = (10));
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
});})(c__22689__auto___79942,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema79824,input_schema79825,input_checker79826,output_checker79827,vec__79821,opts__24145__auto__))
;return ((function (switch__22674__auto__,c__22689__auto___79942,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema79824,input_schema79825,input_checker79826,output_checker79827,vec__79821,opts__24145__auto__){
return (function() {
var state_machine__22675__auto__ = null;
var state_machine__22675__auto____0 = (function (){var statearr_79934 = [null,null,null,null,null,null,null,null,null];(statearr_79934[(0)] = state_machine__22675__auto__);
(statearr_79934[(1)] = (1));
return statearr_79934;
});
var state_machine__22675__auto____1 = (function (state_79913){while(true){
var ret_value__22676__auto__ = (function (){try{while(true){
var result__22677__auto__ = switch__22674__auto__(state_79913);if(cljs.core.keyword_identical_QMARK_(result__22677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22677__auto__;
}
break;
}
}catch (e79935){if((e79935 instanceof Object))
{var ex__22678__auto__ = e79935;var statearr_79936_79952 = state_79913;(statearr_79936_79952[(5)] = ex__22678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_79913);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e79935;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__79953 = state_79913;
state_79913 = G__79953;
continue;
}
} else
{return ret_value__22676__auto__;
}
break;
}
});
state_machine__22675__auto__ = function(state_79913){
switch(arguments.length){
case 0:
return state_machine__22675__auto____0.call(this);
case 1:
return state_machine__22675__auto____1.call(this,state_79913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22675__auto____0;
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22675__auto____1;
return state_machine__22675__auto__;
})()
;})(switch__22674__auto__,c__22689__auto___79942,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema79824,input_schema79825,input_checker79826,output_checker79827,vec__79821,opts__24145__auto__))
})();var state__22691__auto__ = (function (){var statearr_79937 = (function (){return (f__22690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22690__auto__.cljs$core$IFn$_invoke$arity$0() : f__22690__auto__.call(null));
})();(statearr_79937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22689__auto___79942);
return statearr_79937;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22691__auto__);
});})(c__22689__auto___79942,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema79824,input_schema79825,input_checker79826,output_checker79827,vec__79821,opts__24145__auto__))
);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-data-source","set-data-source",-1371173368),cljs.core.ffirst(new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574).cljs$core$IFn$_invoke$arity$1(self__.data))], null));
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema79824,input_schema79825,input_checker79826,output_checker79827,vec__79821,opts__24145__auto__))
;
stuttaford.radiant.t79885.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema79824,input_schema79825,input_checker79826,output_checker79827,vec__79821,opts__24145__auto__){
return (function (_79887){var self__ = this;
var _79887__$1 = this;return self__.meta79886;
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema79824,input_schema79825,input_checker79826,output_checker79827,vec__79821,opts__24145__auto__))
;
stuttaford.radiant.t79885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema79824,input_schema79825,input_checker79826,output_checker79827,vec__79821,opts__24145__auto__){
return (function (_79887,meta79886__$1){var self__ = this;
var _79887__$1 = this;return (new stuttaford.radiant.t79885(self__.p__79699,self__.app_view,self__.owner,self__.view,self__.data,self__.schema_visible_QMARK_,self__.data__24144__auto__,self__.opts__24145__auto__,self__.fnk79823,self__.vec__79821,self__.output_schema79824,self__.output_checker79827,self__.owner79697,self__.input_schema79825,self__.G__79828,self__.input_checker79826,self__.validate__837__auto__,self__.map79822,self__.ufv__,meta79886__$1));
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema79824,input_schema79825,input_checker79826,output_checker79827,vec__79821,opts__24145__auto__))
;
stuttaford.radiant.__GT_t79885 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema79824,input_schema79825,input_checker79826,output_checker79827,vec__79821,opts__24145__auto__){
return (function __GT_t79885(p__79699__$1,app_view__$1,owner__$1,view__$1,data__$1,schema_visible_QMARK___$1,data__24144__auto____$1,opts__24145__auto____$1,fnk79823__$1,vec__79821__$1,output_schema79824__$1,output_checker79827__$1,owner79697__$1,input_schema79825__$1,G__79828__$1,input_checker79826__$1,validate__837__auto____$1,map79822__$1,ufv____$1,meta79886){return (new stuttaford.radiant.t79885(p__79699__$1,app_view__$1,owner__$1,view__$1,data__$1,schema_visible_QMARK___$1,data__24144__auto____$1,opts__24145__auto____$1,fnk79823__$1,vec__79821__$1,output_schema79824__$1,output_checker79827__$1,owner79697__$1,input_schema79825__$1,G__79828__$1,input_checker79826__$1,validate__837__auto____$1,map79822__$1,ufv____$1,meta79886));
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema79824,input_schema79825,input_checker79826,output_checker79827,vec__79821,opts__24145__auto__))
;
}
return (new stuttaford.radiant.t79885(p__79699,app_view,owner,view,data,schema_visible_QMARK_,data__24144__auto__,opts__24145__auto__,fnk79823,vec__79821,output_schema79824,output_checker79827,owner79697,input_schema79825,G__79828,input_checker79826,validate__837__auto__,map79822,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___79954 = (function (){var G__79938 = o__840__auto__;return (output_checker79827.cljs$core$IFn$_invoke$arity$1 ? output_checker79827.cljs$core$IFn$_invoke$arity$1(G__79938) : output_checker79827.call(null,G__79938));
})();if(cljs.core.truth_(temp__4126__auto___79954))
{var error__839__auto___79955 = temp__4126__auto___79954;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk79823","fnk79823",1785660971,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___79955], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema79824,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___79955], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema79824,input_schema79825,input_checker79826,output_checker79827,vec__79821,opts__24145__auto__))
,schema.core.make_fn_schema(output_schema79824,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema79825], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner79697,new cljs.core.Keyword(null,"data","data",-232669377),data__24144__auto__], null));
};
var app_view = function (data__24144__auto__,owner79697,var_args){
var p__79699 = null;if (arguments.length > 2) {
  p__79699 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_view__delegate.call(this,data__24144__auto__,owner79697,p__79699);};
app_view.cljs$lang$maxFixedArity = 2;
app_view.cljs$lang$applyTo = (function (arglist__79956){
var data__24144__auto__ = cljs.core.first(arglist__79956);
arglist__79956 = cljs.core.next(arglist__79956);
var owner79697 = cljs.core.first(arglist__79956);
var p__79699 = cljs.core.rest(arglist__79956);
return app_view__delegate(data__24144__auto__,owner79697,p__79699);
});
app_view.cljs$core$IFn$_invoke$arity$variadic = app_view__delegate;
return app_view;
})()
;
stuttaford.radiant.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__24113__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.app_view,cursor__24113__auto__);
});
var __GT_app_view__2 = (function (cursor__24113__auto__,m79698){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.app_view,cursor__24113__auto__,m79698);
});
__GT_app_view = function(cursor__24113__auto__,m79698){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__24113__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__24113__auto__,m79698);
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