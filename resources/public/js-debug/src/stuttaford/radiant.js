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
var app_view__delegate = function (data__24172__auto__,owner40802,p__40804){var vec__40923 = p__40804;var opts__24173__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40923,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema40926 = schema.core.Any;var input_schema40927 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map40924","map40924",-702700741,null))], null);var input_checker40928 = schema.core.checker(input_schema40927);var output_checker40929 = schema.core.checker(output_schema40926);return schema.core.schematize_fn(((function (ufv__,output_schema40926,input_schema40927,input_checker40928,output_checker40929,vec__40923,opts__24173__auto__){
return (function fnk40925(G__40930){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___41041 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40930], null);var temp__4126__auto___41042 = (function (){var G__40986 = args__838__auto___41041;return (input_checker40928.cljs$core$IFn$_invoke$arity$1 ? input_checker40928.cljs$core$IFn$_invoke$arity$1(G__40986) : input_checker40928.call(null,G__40986));
})();if(cljs.core.truth_(temp__4126__auto___41042))
{var error__839__auto___41043 = temp__4126__auto___41042;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk40925","fnk40925",1290944506,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41043], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40927,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___41041,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41043], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map40924 = G__40930;while(true){
if(cljs.core.map_QMARK_(map40924))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map40924], 0))));
}
var data = plumbing.fnk.schema.safe_get(map40924,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var schema_visible_QMARK_ = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map40924,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.t40987 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.t40987 = (function (vec__40923,app_view,owner,output_schema40926,opts__24173__auto__,view,data,schema_visible_QMARK_,output_checker40929,data__24172__auto__,G__40930,owner40802,input_schema40927,p__40804,fnk40925,validate__837__auto__,map40924,ufv__,input_checker40928,meta40988){
this.vec__40923 = vec__40923;
this.app_view = app_view;
this.owner = owner;
this.output_schema40926 = output_schema40926;
this.opts__24173__auto__ = opts__24173__auto__;
this.view = view;
this.data = data;
this.schema_visible_QMARK_ = schema_visible_QMARK_;
this.output_checker40929 = output_checker40929;
this.data__24172__auto__ = data__24172__auto__;
this.G__40930 = G__40930;
this.owner40802 = owner40802;
this.input_schema40927 = input_schema40927;
this.p__40804 = p__40804;
this.fnk40925 = fnk40925;
this.validate__837__auto__ = validate__837__auto__;
this.map40924 = map40924;
this.ufv__ = ufv__;
this.input_checker40928 = input_checker40928;
this.meta40988 = meta40988;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.t40987.cljs$lang$type = true;
stuttaford.radiant.t40987.cljs$lang$ctorStr = "stuttaford.radiant/t40987";
stuttaford.radiant.t40987.cljs$lang$ctorPrWriter = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40926,input_schema40927,input_checker40928,output_checker40929,vec__40923,opts__24173__auto__){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"stuttaford.radiant/t40987");
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40926,input_schema40927,input_checker40928,output_checker40929,vec__40923,opts__24173__auto__))
;
stuttaford.radiant.t40987.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.t40987.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40926,input_schema40927,input_checker40928,output_checker40929,vec__40923,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "app-view";
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40926,input_schema40927,input_checker40928,output_checker40929,vec__40923,opts__24173__auto__))
;
stuttaford.radiant.t40987.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.t40987.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40926,input_schema40927,input_checker40928,output_checker40929,vec__40923,opts__24173__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret((function (){var vec__40990 = (function (){var G__40991 = stuttaford.radiant.nav_items;return (self__.view.cljs$core$IFn$_invoke$arity$1 ? self__.view.cljs$core$IFn$_invoke$arity$1(G__40991) : self__.view.call(null,G__40991));
})();var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40990,(0),null);var view_component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40990,(1),null);return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),stuttaford.radiant.components.__GT_top_nav.cljs$core$IFn$_invoke$arity$2(self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),stuttaford.radiant.nav_items], null)], null))], null),cljs.core.array_seq([(cljs.core.truth_(self__.schema_visible_QMARK_)?stuttaford.radiant.components.__GT_schema.cljs$core$IFn$_invoke$arity$1(self__.data):null),(cljs.core.truth_(view_component)?om.core.build.cljs$core$IFn$_invoke$arity$2(view_component,self__.data):(function (){var G__40994 = null;return React.DOM.div(G__40994);
})())], 0));
})());
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40926,input_schema40927,input_checker40928,output_checker40929,vec__40923,opts__24173__auto__))
;
stuttaford.radiant.t40987.prototype.om$core$IWillMount$ = true;
stuttaford.radiant.t40987.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40926,input_schema40927,input_checker40928,output_checker40929,vec__40923,opts__24173__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var c__22717__auto___41044 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22717__auto___41044,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40926,input_schema40927,input_checker40928,output_checker40929,vec__40923,opts__24173__auto__){
return (function (){var f__22718__auto__ = (function (){var switch__22702__auto__ = ((function (c__22717__auto___41044,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40926,input_schema40927,input_checker40928,output_checker40929,vec__40923,opts__24173__auto__){
return (function (state_41015){var state_val_41016 = (state_41015[(1)]);if((state_val_41016 === (7)))
{var inst_40998 = (state_41015[(7)]);var inst_40998__$1 = (state_41015[(2)]);var state_41015__$1 = (function (){var statearr_41017 = state_41015;(statearr_41017[(7)] = inst_40998__$1);
return statearr_41017;
})();if(cljs.core.truth_(inst_40998__$1))
{var statearr_41018_41045 = state_41015__$1;(statearr_41018_41045[(1)] = (8));
} else
{var statearr_41019_41046 = state_41015__$1;(statearr_41019_41046[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41016 === (1)))
{var state_41015__$1 = state_41015;var statearr_41020_41047 = state_41015__$1;(statearr_41020_41047[(2)] = null);
(statearr_41020_41047[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41016 === (4)))
{var state_41015__$1 = state_41015;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41015__$1,(7),c);
} else
{if((state_val_41016 === (6)))
{var inst_41011 = (state_41015[(2)]);var state_41015__$1 = state_41015;var statearr_41021_41048 = state_41015__$1;(statearr_41021_41048[(2)] = inst_41011);
(statearr_41021_41048[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41016 === (3)))
{var inst_41013 = (state_41015[(2)]);var state_41015__$1 = state_41015;return cljs.core.async.impl.ioc_helpers.return_chan(state_41015__$1,inst_41013);
} else
{if((state_val_41016 === (2)))
{var state_41015__$1 = state_41015;var statearr_41022_41049 = state_41015__$1;(statearr_41022_41049[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41016 === (9)))
{var state_41015__$1 = state_41015;var statearr_41024_41050 = state_41015__$1;(statearr_41024_41050[(2)] = null);
(statearr_41024_41050[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41016 === (5)))
{var state_41015__$1 = state_41015;var statearr_41025_41051 = state_41015__$1;(statearr_41025_41051[(2)] = null);
(statearr_41025_41051[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41016 === (10)))
{var inst_41007 = (state_41015[(2)]);var state_41015__$1 = (function (){var statearr_41026 = state_41015;(statearr_41026[(8)] = inst_41007);
return statearr_41026;
})();var statearr_41027_41052 = state_41015__$1;(statearr_41027_41052[(2)] = null);
(statearr_41027_41052[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41016 === (8)))
{var inst_40998 = (state_41015[(7)]);var inst_41001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40998,(0),null);var inst_41002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40998,(1),null);var inst_41003 = stuttaford.om.common.config.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"debug?","debug?",-1831756173));var inst_41004 = (function (){var G__41028 = self__.data;var G__41029 = inst_41001;var G__41030 = inst_41002;var G__41031 = inst_41003;return (stuttaford.radiant.actions.perform_action.cljs$core$IFn$_invoke$arity$4 ? stuttaford.radiant.actions.perform_action.cljs$core$IFn$_invoke$arity$4(G__41028,G__41029,G__41030,G__41031) : stuttaford.radiant.actions.perform_action.call(null,G__41028,G__41029,G__41030,G__41031));
})();var state_41015__$1 = state_41015;var statearr_41032_41053 = state_41015__$1;(statearr_41032_41053[(2)] = inst_41004);
(statearr_41032_41053[(1)] = (10));
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
});})(c__22717__auto___41044,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40926,input_schema40927,input_checker40928,output_checker40929,vec__40923,opts__24173__auto__))
;return ((function (switch__22702__auto__,c__22717__auto___41044,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40926,input_schema40927,input_checker40928,output_checker40929,vec__40923,opts__24173__auto__){
return (function() {
var state_machine__22703__auto__ = null;
var state_machine__22703__auto____0 = (function (){var statearr_41036 = [null,null,null,null,null,null,null,null,null];(statearr_41036[(0)] = state_machine__22703__auto__);
(statearr_41036[(1)] = (1));
return statearr_41036;
});
var state_machine__22703__auto____1 = (function (state_41015){while(true){
var ret_value__22704__auto__ = (function (){try{while(true){
var result__22705__auto__ = switch__22702__auto__(state_41015);if(cljs.core.keyword_identical_QMARK_(result__22705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22705__auto__;
}
break;
}
}catch (e41037){if((e41037 instanceof Object))
{var ex__22706__auto__ = e41037;var statearr_41038_41054 = state_41015;(statearr_41038_41054[(5)] = ex__22706__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41015);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e41037;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__41055 = state_41015;
state_41015 = G__41055;
continue;
}
} else
{return ret_value__22704__auto__;
}
break;
}
});
state_machine__22703__auto__ = function(state_41015){
switch(arguments.length){
case 0:
return state_machine__22703__auto____0.call(this);
case 1:
return state_machine__22703__auto____1.call(this,state_41015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22703__auto____0;
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22703__auto____1;
return state_machine__22703__auto__;
})()
;})(switch__22702__auto__,c__22717__auto___41044,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40926,input_schema40927,input_checker40928,output_checker40929,vec__40923,opts__24173__auto__))
})();var state__22719__auto__ = (function (){var statearr_41039 = (function (){return (f__22718__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22718__auto__.cljs$core$IFn$_invoke$arity$0() : f__22718__auto__.call(null));
})();(statearr_41039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22717__auto___41044);
return statearr_41039;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22719__auto__);
});})(c__22717__auto___41044,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40926,input_schema40927,input_checker40928,output_checker40929,vec__40923,opts__24173__auto__))
);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-data-source","set-data-source",-1371173368),cljs.core.ffirst(new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574).cljs$core$IFn$_invoke$arity$1(self__.data))], null));
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40926,input_schema40927,input_checker40928,output_checker40929,vec__40923,opts__24173__auto__))
;
stuttaford.radiant.t40987.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40926,input_schema40927,input_checker40928,output_checker40929,vec__40923,opts__24173__auto__){
return (function (_40989){var self__ = this;
var _40989__$1 = this;return self__.meta40988;
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40926,input_schema40927,input_checker40928,output_checker40929,vec__40923,opts__24173__auto__))
;
stuttaford.radiant.t40987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40926,input_schema40927,input_checker40928,output_checker40929,vec__40923,opts__24173__auto__){
return (function (_40989,meta40988__$1){var self__ = this;
var _40989__$1 = this;return (new stuttaford.radiant.t40987(self__.vec__40923,self__.app_view,self__.owner,self__.output_schema40926,self__.opts__24173__auto__,self__.view,self__.data,self__.schema_visible_QMARK_,self__.output_checker40929,self__.data__24172__auto__,self__.G__40930,self__.owner40802,self__.input_schema40927,self__.p__40804,self__.fnk40925,self__.validate__837__auto__,self__.map40924,self__.ufv__,self__.input_checker40928,meta40988__$1));
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40926,input_schema40927,input_checker40928,output_checker40929,vec__40923,opts__24173__auto__))
;
stuttaford.radiant.__GT_t40987 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40926,input_schema40927,input_checker40928,output_checker40929,vec__40923,opts__24173__auto__){
return (function __GT_t40987(vec__40923__$1,app_view__$1,owner__$1,output_schema40926__$1,opts__24173__auto____$1,view__$1,data__$1,schema_visible_QMARK___$1,output_checker40929__$1,data__24172__auto____$1,G__40930__$1,owner40802__$1,input_schema40927__$1,p__40804__$1,fnk40925__$1,validate__837__auto____$1,map40924__$1,ufv____$1,input_checker40928__$1,meta40988){return (new stuttaford.radiant.t40987(vec__40923__$1,app_view__$1,owner__$1,output_schema40926__$1,opts__24173__auto____$1,view__$1,data__$1,schema_visible_QMARK___$1,output_checker40929__$1,data__24172__auto____$1,G__40930__$1,owner40802__$1,input_schema40927__$1,p__40804__$1,fnk40925__$1,validate__837__auto____$1,map40924__$1,ufv____$1,input_checker40928__$1,meta40988));
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema40926,input_schema40927,input_checker40928,output_checker40929,vec__40923,opts__24173__auto__))
;
}
return (new stuttaford.radiant.t40987(vec__40923,app_view,owner,output_schema40926,opts__24173__auto__,view,data,schema_visible_QMARK_,output_checker40929,data__24172__auto__,G__40930,owner40802,input_schema40927,p__40804,fnk40925,validate__837__auto__,map40924,ufv__,input_checker40928,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___41056 = (function (){var G__41040 = o__840__auto__;return (output_checker40929.cljs$core$IFn$_invoke$arity$1 ? output_checker40929.cljs$core$IFn$_invoke$arity$1(G__41040) : output_checker40929.call(null,G__41040));
})();if(cljs.core.truth_(temp__4126__auto___41056))
{var error__839__auto___41057 = temp__4126__auto___41056;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk40925","fnk40925",1290944506,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___41057], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40926,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___41057], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema40926,input_schema40927,input_checker40928,output_checker40929,vec__40923,opts__24173__auto__))
,schema.core.make_fn_schema(output_schema40926,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40927], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24173__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner40802,new cljs.core.Keyword(null,"data","data",-232669377),data__24172__auto__], null));
};
var app_view = function (data__24172__auto__,owner40802,var_args){
var p__40804 = null;if (arguments.length > 2) {
  p__40804 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_view__delegate.call(this,data__24172__auto__,owner40802,p__40804);};
app_view.cljs$lang$maxFixedArity = 2;
app_view.cljs$lang$applyTo = (function (arglist__41058){
var data__24172__auto__ = cljs.core.first(arglist__41058);
arglist__41058 = cljs.core.next(arglist__41058);
var owner40802 = cljs.core.first(arglist__41058);
var p__40804 = cljs.core.rest(arglist__41058);
return app_view__delegate(data__24172__auto__,owner40802,p__40804);
});
app_view.cljs$core$IFn$_invoke$arity$variadic = app_view__delegate;
return app_view;
})()
;
stuttaford.radiant.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__24141__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.app_view,cursor__24141__auto__);
});
var __GT_app_view__2 = (function (cursor__24141__auto__,m40803){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.app_view,cursor__24141__auto__,m40803);
});
__GT_app_view = function(cursor__24141__auto__,m40803){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__24141__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__24141__auto__,m40803);
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