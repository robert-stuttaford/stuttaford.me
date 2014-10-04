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
var app_view__delegate = function (data__24175__auto__,owner40872,p__40874){var vec__40993 = p__40874;var opts__24176__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40993,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema40996 = schema.core.Any;var input_schema40997 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map40994","map40994",-304144856,null))], null);var input_checker40998 = schema.core.checker(input_schema40997);var output_checker40999 = schema.core.checker(output_schema40996);return schema.core.schematize_fn(((function (ufv__,output_schema40996,input_schema40997,input_checker40998,output_checker40999,vec__40993,opts__24176__auto__){
return (function fnk40995(G__41000){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___41111 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__41000], null);var temp__4126__auto___41112 = (function (){var G__41056 = args__838__auto___41111;return (input_checker40998.cljs$core$IFn$_invoke$arity$1 ? input_checker40998.cljs$core$IFn$_invoke$arity$1(G__41056) : input_checker40998.call(null,G__41056));
})();if(cljs.core.truth_(temp__4126__auto___41112))
{var error__839__auto___41113 = temp__4126__auto___41112;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk40995","fnk40995",2109638856,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41113], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40997,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___41111,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41113], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map40994 = G__41000;while(true){
if(cljs.core.map_QMARK_(map40994))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map40994], 0))));
}
var data = plumbing.fnk.schema.safe_get(map40994,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var schema_visible_QMARK_ = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map40994,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.t41057 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.t41057 = (function (output_schema40996,app_view,owner,view,output_checker40999,data,fnk40995,map40994,schema_visible_QMARK_,p__40874,owner40872,G__41000,data__24175__auto__,input_schema40997,opts__24176__auto__,validate__837__auto__,vec__40993,ufv__,input_checker40998,meta41058){
this.output_schema40996 = output_schema40996;
this.app_view = app_view;
this.owner = owner;
this.view = view;
this.output_checker40999 = output_checker40999;
this.data = data;
this.fnk40995 = fnk40995;
this.map40994 = map40994;
this.schema_visible_QMARK_ = schema_visible_QMARK_;
this.p__40874 = p__40874;
this.owner40872 = owner40872;
this.G__41000 = G__41000;
this.data__24175__auto__ = data__24175__auto__;
this.input_schema40997 = input_schema40997;
this.opts__24176__auto__ = opts__24176__auto__;
this.validate__837__auto__ = validate__837__auto__;
this.vec__40993 = vec__40993;
this.ufv__ = ufv__;
this.input_checker40998 = input_checker40998;
this.meta41058 = meta41058;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.t41057.cljs$lang$type = true;
stuttaford.radiant.t41057.cljs$lang$ctorStr = "stuttaford.radiant/t41057";
stuttaford.radiant.t41057.cljs$lang$ctorPrWriter = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40996,input_schema40997,input_checker40998,output_checker40999,vec__40993,opts__24176__auto__){
return (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"stuttaford.radiant/t41057");
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40996,input_schema40997,input_checker40998,output_checker40999,vec__40993,opts__24176__auto__))
;
stuttaford.radiant.t41057.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.t41057.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40996,input_schema40997,input_checker40998,output_checker40999,vec__40993,opts__24176__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "app-view";
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40996,input_schema40997,input_checker40998,output_checker40999,vec__40993,opts__24176__auto__))
;
stuttaford.radiant.t41057.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.t41057.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40996,input_schema40997,input_checker40998,output_checker40999,vec__40993,opts__24176__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret((function (){var vec__41060 = (function (){var G__41061 = stuttaford.radiant.nav_items;return (self__.view.cljs$core$IFn$_invoke$arity$1 ? self__.view.cljs$core$IFn$_invoke$arity$1(G__41061) : self__.view.call(null,G__41061));
})();var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41060,(0),null);var view_component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41060,(1),null);return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),stuttaford.radiant.components.__GT_top_nav.cljs$core$IFn$_invoke$arity$2(self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),stuttaford.radiant.nav_items], null)], null))], null),cljs.core.array_seq([(cljs.core.truth_(self__.schema_visible_QMARK_)?stuttaford.radiant.components.__GT_schema.cljs$core$IFn$_invoke$arity$1(self__.data):null),(cljs.core.truth_(view_component)?om.core.build.cljs$core$IFn$_invoke$arity$2(view_component,self__.data):(function (){var G__41064 = null;return React.DOM.div(G__41064);
})())], 0));
})());
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40996,input_schema40997,input_checker40998,output_checker40999,vec__40993,opts__24176__auto__))
;
stuttaford.radiant.t41057.prototype.om$core$IWillMount$ = true;
stuttaford.radiant.t41057.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40996,input_schema40997,input_checker40998,output_checker40999,vec__40993,opts__24176__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var c__22720__auto___41114 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22720__auto___41114,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40996,input_schema40997,input_checker40998,output_checker40999,vec__40993,opts__24176__auto__){
return (function (){var f__22721__auto__ = (function (){var switch__22705__auto__ = ((function (c__22720__auto___41114,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40996,input_schema40997,input_checker40998,output_checker40999,vec__40993,opts__24176__auto__){
return (function (state_41085){var state_val_41086 = (state_41085[(1)]);if((state_val_41086 === (7)))
{var inst_41068 = (state_41085[(7)]);var inst_41068__$1 = (state_41085[(2)]);var state_41085__$1 = (function (){var statearr_41087 = state_41085;(statearr_41087[(7)] = inst_41068__$1);
return statearr_41087;
})();if(cljs.core.truth_(inst_41068__$1))
{var statearr_41088_41115 = state_41085__$1;(statearr_41088_41115[(1)] = (8));
} else
{var statearr_41089_41116 = state_41085__$1;(statearr_41089_41116[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41086 === (1)))
{var state_41085__$1 = state_41085;var statearr_41090_41117 = state_41085__$1;(statearr_41090_41117[(2)] = null);
(statearr_41090_41117[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41086 === (4)))
{var state_41085__$1 = state_41085;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41085__$1,(7),c);
} else
{if((state_val_41086 === (6)))
{var inst_41081 = (state_41085[(2)]);var state_41085__$1 = state_41085;var statearr_41091_41118 = state_41085__$1;(statearr_41091_41118[(2)] = inst_41081);
(statearr_41091_41118[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41086 === (3)))
{var inst_41083 = (state_41085[(2)]);var state_41085__$1 = state_41085;return cljs.core.async.impl.ioc_helpers.return_chan(state_41085__$1,inst_41083);
} else
{if((state_val_41086 === (2)))
{var state_41085__$1 = state_41085;var statearr_41092_41119 = state_41085__$1;(statearr_41092_41119[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41086 === (9)))
{var state_41085__$1 = state_41085;var statearr_41094_41120 = state_41085__$1;(statearr_41094_41120[(2)] = null);
(statearr_41094_41120[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41086 === (5)))
{var state_41085__$1 = state_41085;var statearr_41095_41121 = state_41085__$1;(statearr_41095_41121[(2)] = null);
(statearr_41095_41121[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41086 === (10)))
{var inst_41077 = (state_41085[(2)]);var state_41085__$1 = (function (){var statearr_41096 = state_41085;(statearr_41096[(8)] = inst_41077);
return statearr_41096;
})();var statearr_41097_41122 = state_41085__$1;(statearr_41097_41122[(2)] = null);
(statearr_41097_41122[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41086 === (8)))
{var inst_41068 = (state_41085[(7)]);var inst_41071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41068,(0),null);var inst_41072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41068,(1),null);var inst_41073 = stuttaford.om.common.config.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"debug?","debug?",-1831756173));var inst_41074 = (function (){var G__41098 = self__.data;var G__41099 = inst_41071;var G__41100 = inst_41072;var G__41101 = inst_41073;return (stuttaford.radiant.actions.perform_action.cljs$core$IFn$_invoke$arity$4 ? stuttaford.radiant.actions.perform_action.cljs$core$IFn$_invoke$arity$4(G__41098,G__41099,G__41100,G__41101) : stuttaford.radiant.actions.perform_action.call(null,G__41098,G__41099,G__41100,G__41101));
})();var state_41085__$1 = state_41085;var statearr_41102_41123 = state_41085__$1;(statearr_41102_41123[(2)] = inst_41074);
(statearr_41102_41123[(1)] = (10));
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
});})(c__22720__auto___41114,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40996,input_schema40997,input_checker40998,output_checker40999,vec__40993,opts__24176__auto__))
;return ((function (switch__22705__auto__,c__22720__auto___41114,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40996,input_schema40997,input_checker40998,output_checker40999,vec__40993,opts__24176__auto__){
return (function() {
var state_machine__22706__auto__ = null;
var state_machine__22706__auto____0 = (function (){var statearr_41106 = [null,null,null,null,null,null,null,null,null];(statearr_41106[(0)] = state_machine__22706__auto__);
(statearr_41106[(1)] = (1));
return statearr_41106;
});
var state_machine__22706__auto____1 = (function (state_41085){while(true){
var ret_value__22707__auto__ = (function (){try{while(true){
var result__22708__auto__ = switch__22705__auto__(state_41085);if(cljs.core.keyword_identical_QMARK_(result__22708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22708__auto__;
}
break;
}
}catch (e41107){if((e41107 instanceof Object))
{var ex__22709__auto__ = e41107;var statearr_41108_41124 = state_41085;(statearr_41108_41124[(5)] = ex__22709__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41085);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e41107;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__41125 = state_41085;
state_41085 = G__41125;
continue;
}
} else
{return ret_value__22707__auto__;
}
break;
}
});
state_machine__22706__auto__ = function(state_41085){
switch(arguments.length){
case 0:
return state_machine__22706__auto____0.call(this);
case 1:
return state_machine__22706__auto____1.call(this,state_41085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22706__auto____0;
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22706__auto____1;
return state_machine__22706__auto__;
})()
;})(switch__22705__auto__,c__22720__auto___41114,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40996,input_schema40997,input_checker40998,output_checker40999,vec__40993,opts__24176__auto__))
})();var state__22722__auto__ = (function (){var statearr_41109 = (function (){return (f__22721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22721__auto__.cljs$core$IFn$_invoke$arity$0() : f__22721__auto__.call(null));
})();(statearr_41109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22720__auto___41114);
return statearr_41109;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22722__auto__);
});})(c__22720__auto___41114,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40996,input_schema40997,input_checker40998,output_checker40999,vec__40993,opts__24176__auto__))
);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-data-source","set-data-source",-1371173368),cljs.core.ffirst(new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574).cljs$core$IFn$_invoke$arity$1(self__.data))], null));
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40996,input_schema40997,input_checker40998,output_checker40999,vec__40993,opts__24176__auto__))
;
stuttaford.radiant.t41057.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40996,input_schema40997,input_checker40998,output_checker40999,vec__40993,opts__24176__auto__){
return (function (_41059){var self__ = this;
var _41059__$1 = this;return self__.meta41058;
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40996,input_schema40997,input_checker40998,output_checker40999,vec__40993,opts__24176__auto__))
;
stuttaford.radiant.t41057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40996,input_schema40997,input_checker40998,output_checker40999,vec__40993,opts__24176__auto__){
return (function (_41059,meta41058__$1){var self__ = this;
var _41059__$1 = this;return (new stuttaford.radiant.t41057(self__.output_schema40996,self__.app_view,self__.owner,self__.view,self__.output_checker40999,self__.data,self__.fnk40995,self__.map40994,self__.schema_visible_QMARK_,self__.p__40874,self__.owner40872,self__.G__41000,self__.data__24175__auto__,self__.input_schema40997,self__.opts__24176__auto__,self__.validate__837__auto__,self__.vec__40993,self__.ufv__,self__.input_checker40998,meta41058__$1));
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40996,input_schema40997,input_checker40998,output_checker40999,vec__40993,opts__24176__auto__))
;
stuttaford.radiant.__GT_t41057 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40996,input_schema40997,input_checker40998,output_checker40999,vec__40993,opts__24176__auto__){
return (function __GT_t41057(output_schema40996__$1,app_view__$1,owner__$1,view__$1,output_checker40999__$1,data__$1,fnk40995__$1,map40994__$1,schema_visible_QMARK___$1,p__40874__$1,owner40872__$1,G__41000__$1,data__24175__auto____$1,input_schema40997__$1,opts__24176__auto____$1,validate__837__auto____$1,vec__40993__$1,ufv____$1,input_checker40998__$1,meta41058){return (new stuttaford.radiant.t41057(output_schema40996__$1,app_view__$1,owner__$1,view__$1,output_checker40999__$1,data__$1,fnk40995__$1,map40994__$1,schema_visible_QMARK___$1,p__40874__$1,owner40872__$1,G__41000__$1,data__24175__auto____$1,input_schema40997__$1,opts__24176__auto____$1,validate__837__auto____$1,vec__40993__$1,ufv____$1,input_checker40998__$1,meta41058));
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40996,input_schema40997,input_checker40998,output_checker40999,vec__40993,opts__24176__auto__))
;
}
return (new stuttaford.radiant.t41057(output_schema40996,app_view,owner,view,output_checker40999,data,fnk40995,map40994,schema_visible_QMARK_,p__40874,owner40872,G__41000,data__24175__auto__,input_schema40997,opts__24176__auto__,validate__837__auto__,vec__40993,ufv__,input_checker40998,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___41126 = (function (){var G__41110 = o__840__auto__;return (output_checker40999.cljs$core$IFn$_invoke$arity$1 ? output_checker40999.cljs$core$IFn$_invoke$arity$1(G__41110) : output_checker40999.call(null,G__41110));
})();if(cljs.core.truth_(temp__4126__auto___41126))
{var error__839__auto___41127 = temp__4126__auto___41126;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk40995","fnk40995",2109638856,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41127], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40996,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41127], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema40996,input_schema40997,input_checker40998,output_checker40999,vec__40993,opts__24176__auto__))
,schema.core.make_fn_schema(output_schema40996,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40997], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24176__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner40872,new cljs.core.Keyword(null,"data","data",-232669377),data__24175__auto__], null));
};
var app_view = function (data__24175__auto__,owner40872,var_args){
var p__40874 = null;if (arguments.length > 2) {
  p__40874 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_view__delegate.call(this,data__24175__auto__,owner40872,p__40874);};
app_view.cljs$lang$maxFixedArity = 2;
app_view.cljs$lang$applyTo = (function (arglist__41128){
var data__24175__auto__ = cljs.core.first(arglist__41128);
arglist__41128 = cljs.core.next(arglist__41128);
var owner40872 = cljs.core.first(arglist__41128);
var p__40874 = cljs.core.rest(arglist__41128);
return app_view__delegate(data__24175__auto__,owner40872,p__40874);
});
app_view.cljs$core$IFn$_invoke$arity$variadic = app_view__delegate;
return app_view;
})()
;
stuttaford.radiant.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__24144__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.app_view,cursor__24144__auto__);
});
var __GT_app_view__2 = (function (cursor__24144__auto__,m40873){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.app_view,cursor__24144__auto__,m40873);
});
__GT_app_view = function(cursor__24144__auto__,m40873){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__24144__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__24144__auto__,m40873);
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