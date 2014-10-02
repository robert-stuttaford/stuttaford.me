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
var app_view__delegate = function (data__24172__auto__,owner40753,p__40755){var vec__40874 = p__40755;var opts__24173__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40874,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema40877 = schema.core.Any;var input_schema40878 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map40875","map40875",-1245886691,null))], null);var input_checker40879 = schema.core.checker(input_schema40878);var output_checker40880 = schema.core.checker(output_schema40877);return schema.core.schematize_fn(((function (ufv__,output_schema40877,input_schema40878,input_checker40879,output_checker40880,vec__40874,opts__24173__auto__){
return (function fnk40876(G__40881){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40992 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40881], null);var temp__4126__auto___40993 = (function (){var G__40937 = args__838__auto___40992;return (input_checker40879.cljs$core$IFn$_invoke$arity$1 ? input_checker40879.cljs$core$IFn$_invoke$arity$1(G__40937) : input_checker40879.call(null,G__40937));
})();if(cljs.core.truth_(temp__4126__auto___40993))
{var error__839__auto___40994 = temp__4126__auto___40993;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk40876","fnk40876",-581801838,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40994], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40878,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40992,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40994], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map40875 = G__40881;while(true){
if(cljs.core.map_QMARK_(map40875))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map40875], 0))));
}
var data = plumbing.fnk.schema.safe_get(map40875,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var schema_visible_QMARK_ = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map40875,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.t40938 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.t40938 = (function (app_view,owner40753,owner,opts__24173__auto__,view,G__40881,data,schema_visible_QMARK_,p__40755,output_schema40877,data__24172__auto__,fnk40876,input_checker40879,vec__40874,input_schema40878,validate__837__auto__,ufv__,map40875,output_checker40880,meta40939){
this.app_view = app_view;
this.owner40753 = owner40753;
this.owner = owner;
this.opts__24173__auto__ = opts__24173__auto__;
this.view = view;
this.G__40881 = G__40881;
this.data = data;
this.schema_visible_QMARK_ = schema_visible_QMARK_;
this.p__40755 = p__40755;
this.output_schema40877 = output_schema40877;
this.data__24172__auto__ = data__24172__auto__;
this.fnk40876 = fnk40876;
this.input_checker40879 = input_checker40879;
this.vec__40874 = vec__40874;
this.input_schema40878 = input_schema40878;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.map40875 = map40875;
this.output_checker40880 = output_checker40880;
this.meta40939 = meta40939;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.t40938.cljs$lang$type = true;
stuttaford.radiant.t40938.cljs$lang$ctorStr = "stuttaford.radiant/t40938";
stuttaford.radiant.t40938.cljs$lang$ctorPrWriter = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40877,input_schema40878,input_checker40879,output_checker40880,vec__40874,opts__24173__auto__){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"stuttaford.radiant/t40938");
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40877,input_schema40878,input_checker40879,output_checker40880,vec__40874,opts__24173__auto__))
;
stuttaford.radiant.t40938.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.t40938.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40877,input_schema40878,input_checker40879,output_checker40880,vec__40874,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "app-view";
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40877,input_schema40878,input_checker40879,output_checker40880,vec__40874,opts__24173__auto__))
;
stuttaford.radiant.t40938.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.t40938.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40877,input_schema40878,input_checker40879,output_checker40880,vec__40874,opts__24173__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret((function (){var vec__40941 = (function (){var G__40942 = stuttaford.radiant.nav_items;return (self__.view.cljs$core$IFn$_invoke$arity$1 ? self__.view.cljs$core$IFn$_invoke$arity$1(G__40942) : self__.view.call(null,G__40942));
})();var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40941,(0),null);var view_component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40941,(1),null);return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),stuttaford.radiant.components.__GT_top_nav.cljs$core$IFn$_invoke$arity$2(self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),stuttaford.radiant.nav_items], null)], null))], null),cljs.core.array_seq([(cljs.core.truth_(self__.schema_visible_QMARK_)?stuttaford.radiant.components.__GT_schema.cljs$core$IFn$_invoke$arity$1(self__.data):null),(cljs.core.truth_(view_component)?om.core.build.cljs$core$IFn$_invoke$arity$2(view_component,self__.data):(function (){var G__40945 = null;return React.DOM.div(G__40945);
})())], 0));
})());
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40877,input_schema40878,input_checker40879,output_checker40880,vec__40874,opts__24173__auto__))
;
stuttaford.radiant.t40938.prototype.om$core$IWillMount$ = true;
stuttaford.radiant.t40938.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40877,input_schema40878,input_checker40879,output_checker40880,vec__40874,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var c__22717__auto___40995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22717__auto___40995,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40877,input_schema40878,input_checker40879,output_checker40880,vec__40874,opts__24173__auto__){
return (function (){var f__22718__auto__ = (function (){var switch__22702__auto__ = ((function (c__22717__auto___40995,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40877,input_schema40878,input_checker40879,output_checker40880,vec__40874,opts__24173__auto__){
return (function (state_40966){var state_val_40967 = (state_40966[(1)]);if((state_val_40967 === (7)))
{var inst_40949 = (state_40966[(7)]);var inst_40949__$1 = (state_40966[(2)]);var state_40966__$1 = (function (){var statearr_40968 = state_40966;(statearr_40968[(7)] = inst_40949__$1);
return statearr_40968;
})();if(cljs.core.truth_(inst_40949__$1))
{var statearr_40969_40996 = state_40966__$1;(statearr_40969_40996[(1)] = (8));
} else
{var statearr_40970_40997 = state_40966__$1;(statearr_40970_40997[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40967 === (1)))
{var state_40966__$1 = state_40966;var statearr_40971_40998 = state_40966__$1;(statearr_40971_40998[(2)] = null);
(statearr_40971_40998[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40967 === (4)))
{var state_40966__$1 = state_40966;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40966__$1,(7),c);
} else
{if((state_val_40967 === (6)))
{var inst_40962 = (state_40966[(2)]);var state_40966__$1 = state_40966;var statearr_40972_40999 = state_40966__$1;(statearr_40972_40999[(2)] = inst_40962);
(statearr_40972_40999[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40967 === (3)))
{var inst_40964 = (state_40966[(2)]);var state_40966__$1 = state_40966;return cljs.core.async.impl.ioc_helpers.return_chan(state_40966__$1,inst_40964);
} else
{if((state_val_40967 === (2)))
{var state_40966__$1 = state_40966;var statearr_40973_41000 = state_40966__$1;(statearr_40973_41000[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40967 === (9)))
{var state_40966__$1 = state_40966;var statearr_40975_41001 = state_40966__$1;(statearr_40975_41001[(2)] = null);
(statearr_40975_41001[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40967 === (5)))
{var state_40966__$1 = state_40966;var statearr_40976_41002 = state_40966__$1;(statearr_40976_41002[(2)] = null);
(statearr_40976_41002[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40967 === (10)))
{var inst_40958 = (state_40966[(2)]);var state_40966__$1 = (function (){var statearr_40977 = state_40966;(statearr_40977[(8)] = inst_40958);
return statearr_40977;
})();var statearr_40978_41003 = state_40966__$1;(statearr_40978_41003[(2)] = null);
(statearr_40978_41003[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40967 === (8)))
{var inst_40949 = (state_40966[(7)]);var inst_40952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40949,(0),null);var inst_40953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40949,(1),null);var inst_40954 = stuttaford.om.common.config.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"debug?","debug?",-1831756173));var inst_40955 = (function (){var G__40979 = self__.data;var G__40980 = inst_40952;var G__40981 = inst_40953;var G__40982 = inst_40954;return (stuttaford.radiant.actions.perform_action.cljs$core$IFn$_invoke$arity$4 ? stuttaford.radiant.actions.perform_action.cljs$core$IFn$_invoke$arity$4(G__40979,G__40980,G__40981,G__40982) : stuttaford.radiant.actions.perform_action.call(null,G__40979,G__40980,G__40981,G__40982));
})();var state_40966__$1 = state_40966;var statearr_40983_41004 = state_40966__$1;(statearr_40983_41004[(2)] = inst_40955);
(statearr_40983_41004[(1)] = (10));
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
});})(c__22717__auto___40995,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40877,input_schema40878,input_checker40879,output_checker40880,vec__40874,opts__24173__auto__))
;return ((function (switch__22702__auto__,c__22717__auto___40995,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40877,input_schema40878,input_checker40879,output_checker40880,vec__40874,opts__24173__auto__){
return (function() {
var state_machine__22703__auto__ = null;
var state_machine__22703__auto____0 = (function (){var statearr_40987 = [null,null,null,null,null,null,null,null,null];(statearr_40987[(0)] = state_machine__22703__auto__);
(statearr_40987[(1)] = (1));
return statearr_40987;
});
var state_machine__22703__auto____1 = (function (state_40966){while(true){
var ret_value__22704__auto__ = (function (){try{while(true){
var result__22705__auto__ = switch__22702__auto__(state_40966);if(cljs.core.keyword_identical_QMARK_(result__22705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22705__auto__;
}
break;
}
}catch (e40988){if((e40988 instanceof Object))
{var ex__22706__auto__ = e40988;var statearr_40989_41005 = state_40966;(statearr_40989_41005[(5)] = ex__22706__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40966);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e40988;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__41006 = state_40966;
state_40966 = G__41006;
continue;
}
} else
{return ret_value__22704__auto__;
}
break;
}
});
state_machine__22703__auto__ = function(state_40966){
switch(arguments.length){
case 0:
return state_machine__22703__auto____0.call(this);
case 1:
return state_machine__22703__auto____1.call(this,state_40966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22703__auto____0;
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22703__auto____1;
return state_machine__22703__auto__;
})()
;})(switch__22702__auto__,c__22717__auto___40995,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40877,input_schema40878,input_checker40879,output_checker40880,vec__40874,opts__24173__auto__))
})();var state__22719__auto__ = (function (){var statearr_40990 = (function (){return (f__22718__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22718__auto__.cljs$core$IFn$_invoke$arity$0() : f__22718__auto__.call(null));
})();(statearr_40990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22717__auto___40995);
return statearr_40990;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22719__auto__);
});})(c__22717__auto___40995,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40877,input_schema40878,input_checker40879,output_checker40880,vec__40874,opts__24173__auto__))
);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-data-source","set-data-source",-1371173368),cljs.core.ffirst(new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574).cljs$core$IFn$_invoke$arity$1(self__.data))], null));
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40877,input_schema40878,input_checker40879,output_checker40880,vec__40874,opts__24173__auto__))
;
stuttaford.radiant.t40938.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40877,input_schema40878,input_checker40879,output_checker40880,vec__40874,opts__24173__auto__){
return (function (_40940){var self__ = this;
var _40940__$1 = this;return self__.meta40939;
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40877,input_schema40878,input_checker40879,output_checker40880,vec__40874,opts__24173__auto__))
;
stuttaford.radiant.t40938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40877,input_schema40878,input_checker40879,output_checker40880,vec__40874,opts__24173__auto__){
return (function (_40940,meta40939__$1){var self__ = this;
var _40940__$1 = this;return (new stuttaford.radiant.t40938(self__.app_view,self__.owner40753,self__.owner,self__.opts__24173__auto__,self__.view,self__.G__40881,self__.data,self__.schema_visible_QMARK_,self__.p__40755,self__.output_schema40877,self__.data__24172__auto__,self__.fnk40876,self__.input_checker40879,self__.vec__40874,self__.input_schema40878,self__.validate__837__auto__,self__.ufv__,self__.map40875,self__.output_checker40880,meta40939__$1));
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40877,input_schema40878,input_checker40879,output_checker40880,vec__40874,opts__24173__auto__))
;
stuttaford.radiant.__GT_t40938 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40877,input_schema40878,input_checker40879,output_checker40880,vec__40874,opts__24173__auto__){
return (function __GT_t40938(app_view__$1,owner40753__$1,owner__$1,opts__24173__auto____$1,view__$1,G__40881__$1,data__$1,schema_visible_QMARK___$1,p__40755__$1,output_schema40877__$1,data__24172__auto____$1,fnk40876__$1,input_checker40879__$1,vec__40874__$1,input_schema40878__$1,validate__837__auto____$1,ufv____$1,map40875__$1,output_checker40880__$1,meta40939){return (new stuttaford.radiant.t40938(app_view__$1,owner40753__$1,owner__$1,opts__24173__auto____$1,view__$1,G__40881__$1,data__$1,schema_visible_QMARK___$1,p__40755__$1,output_schema40877__$1,data__24172__auto____$1,fnk40876__$1,input_checker40879__$1,vec__40874__$1,input_schema40878__$1,validate__837__auto____$1,ufv____$1,map40875__$1,output_checker40880__$1,meta40939));
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40877,input_schema40878,input_checker40879,output_checker40880,vec__40874,opts__24173__auto__))
;
}
return (new stuttaford.radiant.t40938(app_view,owner40753,owner,opts__24173__auto__,view,G__40881,data,schema_visible_QMARK_,p__40755,output_schema40877,data__24172__auto__,fnk40876,input_checker40879,vec__40874,input_schema40878,validate__837__auto__,ufv__,map40875,output_checker40880,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___41007 = (function (){var G__40991 = o__840__auto__;return (output_checker40880.cljs$core$IFn$_invoke$arity$1 ? output_checker40880.cljs$core$IFn$_invoke$arity$1(G__40991) : output_checker40880.call(null,G__40991));
})();if(cljs.core.truth_(temp__4126__auto___41007))
{var error__839__auto___41008 = temp__4126__auto___41007;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk40876","fnk40876",-581801838,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41008], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40877,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41008], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema40877,input_schema40878,input_checker40879,output_checker40880,vec__40874,opts__24173__auto__))
,schema.core.make_fn_schema(output_schema40877,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40878], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24173__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner40753,new cljs.core.Keyword(null,"data","data",-232669377),data__24172__auto__], null));
};
var app_view = function (data__24172__auto__,owner40753,var_args){
var p__40755 = null;if (arguments.length > 2) {
  p__40755 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_view__delegate.call(this,data__24172__auto__,owner40753,p__40755);};
app_view.cljs$lang$maxFixedArity = 2;
app_view.cljs$lang$applyTo = (function (arglist__41009){
var data__24172__auto__ = cljs.core.first(arglist__41009);
arglist__41009 = cljs.core.next(arglist__41009);
var owner40753 = cljs.core.first(arglist__41009);
var p__40755 = cljs.core.rest(arglist__41009);
return app_view__delegate(data__24172__auto__,owner40753,p__40755);
});
app_view.cljs$core$IFn$_invoke$arity$variadic = app_view__delegate;
return app_view;
})()
;
stuttaford.radiant.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__24141__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.app_view,cursor__24141__auto__);
});
var __GT_app_view__2 = (function (cursor__24141__auto__,m40754){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.app_view,cursor__24141__auto__,m40754);
});
__GT_app_view = function(cursor__24141__auto__,m40754){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__24141__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__24141__auto__,m40754);
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