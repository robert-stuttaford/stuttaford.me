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
var app_view__delegate = function (data__24582__auto__,owner78313,p__78315){var vec__78434 = p__78315;var opts__24583__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78434,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema78437 = schema.core.Any;var input_schema78438 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map78435","map78435",-1617724984,null))], null);var input_checker78439 = schema.core.checker(input_schema78438);var output_checker78440 = schema.core.checker(output_schema78437);return schema.core.schematize_fn(((function (ufv__,output_schema78437,input_schema78438,input_checker78439,output_checker78440,vec__78434,opts__24583__auto__){
return (function fnk78436(G__78441){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___78552 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__78441], null);var temp__4126__auto___78553 = (function (){var G__78497 = args__838__auto___78552;return (input_checker78439.cljs$core$IFn$_invoke$arity$1 ? input_checker78439.cljs$core$IFn$_invoke$arity$1(G__78497) : input_checker78439.call(null,G__78497));
})();if(cljs.core.truth_(temp__4126__auto___78553))
{var error__839__auto___78554 = temp__4126__auto___78553;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk78436","fnk78436",1095930827,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___78554], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema78438,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___78552,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___78554], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map78435 = G__78441;while(true){
if(cljs.core.map_QMARK_(map78435))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map78435], 0))));
}
var data = plumbing.fnk.schema.safe_get(map78435,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var schema_visible_QMARK_ = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map78435,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.t78498 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.t78498 = (function (input_schema78438,app_view,opts__24583__auto__,p__78315,vec__78434,owner78313,owner,view,data,input_checker78439,map78435,schema_visible_QMARK_,fnk78436,data__24582__auto__,output_schema78437,G__78441,validate__837__auto__,ufv__,output_checker78440,meta78499){
this.input_schema78438 = input_schema78438;
this.app_view = app_view;
this.opts__24583__auto__ = opts__24583__auto__;
this.p__78315 = p__78315;
this.vec__78434 = vec__78434;
this.owner78313 = owner78313;
this.owner = owner;
this.view = view;
this.data = data;
this.input_checker78439 = input_checker78439;
this.map78435 = map78435;
this.schema_visible_QMARK_ = schema_visible_QMARK_;
this.fnk78436 = fnk78436;
this.data__24582__auto__ = data__24582__auto__;
this.output_schema78437 = output_schema78437;
this.G__78441 = G__78441;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.output_checker78440 = output_checker78440;
this.meta78499 = meta78499;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.t78498.cljs$lang$type = true;
stuttaford.radiant.t78498.cljs$lang$ctorStr = "stuttaford.radiant/t78498";
stuttaford.radiant.t78498.cljs$lang$ctorPrWriter = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema78437,input_schema78438,input_checker78439,output_checker78440,vec__78434,opts__24583__auto__){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"stuttaford.radiant/t78498");
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema78437,input_schema78438,input_checker78439,output_checker78440,vec__78434,opts__24583__auto__))
;
stuttaford.radiant.t78498.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.t78498.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema78437,input_schema78438,input_checker78439,output_checker78440,vec__78434,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "app-view";
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema78437,input_schema78438,input_checker78439,output_checker78440,vec__78434,opts__24583__auto__))
;
stuttaford.radiant.t78498.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.t78498.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema78437,input_schema78438,input_checker78439,output_checker78440,vec__78434,opts__24583__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret((function (){var vec__78501 = (function (){var G__78502 = stuttaford.radiant.nav_items;return (self__.view.cljs$core$IFn$_invoke$arity$1 ? self__.view.cljs$core$IFn$_invoke$arity$1(G__78502) : self__.view.call(null,G__78502));
})();var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78501,(0),null);var view_component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78501,(1),null);return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),stuttaford.radiant.components.__GT_top_nav.cljs$core$IFn$_invoke$arity$2(self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),stuttaford.radiant.nav_items], null)], null))], null),cljs.core.array_seq([(cljs.core.truth_(self__.schema_visible_QMARK_)?stuttaford.radiant.components.__GT_schema.cljs$core$IFn$_invoke$arity$1(self__.data):null),(cljs.core.truth_(view_component)?om.core.build.cljs$core$IFn$_invoke$arity$2(view_component,self__.data):(function (){var G__78505 = null;return React.DOM.div(G__78505);
})())], 0));
})());
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema78437,input_schema78438,input_checker78439,output_checker78440,vec__78434,opts__24583__auto__))
;
stuttaford.radiant.t78498.prototype.om$core$IWillMount$ = true;
stuttaford.radiant.t78498.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema78437,input_schema78438,input_checker78439,output_checker78440,vec__78434,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var c__23127__auto___78555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23127__auto___78555,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema78437,input_schema78438,input_checker78439,output_checker78440,vec__78434,opts__24583__auto__){
return (function (){var f__23128__auto__ = (function (){var switch__23112__auto__ = ((function (c__23127__auto___78555,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema78437,input_schema78438,input_checker78439,output_checker78440,vec__78434,opts__24583__auto__){
return (function (state_78526){var state_val_78527 = (state_78526[(1)]);if((state_val_78527 === (7)))
{var inst_78509 = (state_78526[(7)]);var inst_78509__$1 = (state_78526[(2)]);var state_78526__$1 = (function (){var statearr_78528 = state_78526;(statearr_78528[(7)] = inst_78509__$1);
return statearr_78528;
})();if(cljs.core.truth_(inst_78509__$1))
{var statearr_78529_78556 = state_78526__$1;(statearr_78529_78556[(1)] = (8));
} else
{var statearr_78530_78557 = state_78526__$1;(statearr_78530_78557[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78527 === (1)))
{var state_78526__$1 = state_78526;var statearr_78531_78558 = state_78526__$1;(statearr_78531_78558[(2)] = null);
(statearr_78531_78558[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78527 === (4)))
{var state_78526__$1 = state_78526;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78526__$1,(7),c);
} else
{if((state_val_78527 === (6)))
{var inst_78522 = (state_78526[(2)]);var state_78526__$1 = state_78526;var statearr_78532_78559 = state_78526__$1;(statearr_78532_78559[(2)] = inst_78522);
(statearr_78532_78559[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78527 === (3)))
{var inst_78524 = (state_78526[(2)]);var state_78526__$1 = state_78526;return cljs.core.async.impl.ioc_helpers.return_chan(state_78526__$1,inst_78524);
} else
{if((state_val_78527 === (2)))
{var state_78526__$1 = state_78526;var statearr_78533_78560 = state_78526__$1;(statearr_78533_78560[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78527 === (9)))
{var state_78526__$1 = state_78526;var statearr_78535_78561 = state_78526__$1;(statearr_78535_78561[(2)] = null);
(statearr_78535_78561[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78527 === (5)))
{var state_78526__$1 = state_78526;var statearr_78536_78562 = state_78526__$1;(statearr_78536_78562[(2)] = null);
(statearr_78536_78562[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78527 === (10)))
{var inst_78518 = (state_78526[(2)]);var state_78526__$1 = (function (){var statearr_78537 = state_78526;(statearr_78537[(8)] = inst_78518);
return statearr_78537;
})();var statearr_78538_78563 = state_78526__$1;(statearr_78538_78563[(2)] = null);
(statearr_78538_78563[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_78527 === (8)))
{var inst_78509 = (state_78526[(7)]);var inst_78512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_78509,(0),null);var inst_78513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_78509,(1),null);var inst_78514 = stuttaford.om.common.config.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"debug?","debug?",-1831756173));var inst_78515 = (function (){var G__78539 = self__.data;var G__78540 = inst_78512;var G__78541 = inst_78513;var G__78542 = inst_78514;return (stuttaford.radiant.actions.perform_action.cljs$core$IFn$_invoke$arity$4 ? stuttaford.radiant.actions.perform_action.cljs$core$IFn$_invoke$arity$4(G__78539,G__78540,G__78541,G__78542) : stuttaford.radiant.actions.perform_action.call(null,G__78539,G__78540,G__78541,G__78542));
})();var state_78526__$1 = state_78526;var statearr_78543_78564 = state_78526__$1;(statearr_78543_78564[(2)] = inst_78515);
(statearr_78543_78564[(1)] = (10));
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
});})(c__23127__auto___78555,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema78437,input_schema78438,input_checker78439,output_checker78440,vec__78434,opts__24583__auto__))
;return ((function (switch__23112__auto__,c__23127__auto___78555,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema78437,input_schema78438,input_checker78439,output_checker78440,vec__78434,opts__24583__auto__){
return (function() {
var state_machine__23113__auto__ = null;
var state_machine__23113__auto____0 = (function (){var statearr_78547 = [null,null,null,null,null,null,null,null,null];(statearr_78547[(0)] = state_machine__23113__auto__);
(statearr_78547[(1)] = (1));
return statearr_78547;
});
var state_machine__23113__auto____1 = (function (state_78526){while(true){
var ret_value__23114__auto__ = (function (){try{while(true){
var result__23115__auto__ = switch__23112__auto__(state_78526);if(cljs.core.keyword_identical_QMARK_(result__23115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__23115__auto__;
}
break;
}
}catch (e78548){if((e78548 instanceof Object))
{var ex__23116__auto__ = e78548;var statearr_78549_78565 = state_78526;(statearr_78549_78565[(5)] = ex__23116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_78526);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e78548;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__23114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__78566 = state_78526;
state_78526 = G__78566;
continue;
}
} else
{return ret_value__23114__auto__;
}
break;
}
});
state_machine__23113__auto__ = function(state_78526){
switch(arguments.length){
case 0:
return state_machine__23113__auto____0.call(this);
case 1:
return state_machine__23113__auto____1.call(this,state_78526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23113__auto____0;
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23113__auto____1;
return state_machine__23113__auto__;
})()
;})(switch__23112__auto__,c__23127__auto___78555,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema78437,input_schema78438,input_checker78439,output_checker78440,vec__78434,opts__24583__auto__))
})();var state__23129__auto__ = (function (){var statearr_78550 = (function (){return (f__23128__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23128__auto__.cljs$core$IFn$_invoke$arity$0() : f__23128__auto__.call(null));
})();(statearr_78550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23127__auto___78555);
return statearr_78550;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23129__auto__);
});})(c__23127__auto___78555,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema78437,input_schema78438,input_checker78439,output_checker78440,vec__78434,opts__24583__auto__))
);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-data-source","set-data-source",-1371173368),cljs.core.ffirst(new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574).cljs$core$IFn$_invoke$arity$1(self__.data))], null));
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema78437,input_schema78438,input_checker78439,output_checker78440,vec__78434,opts__24583__auto__))
;
stuttaford.radiant.t78498.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema78437,input_schema78438,input_checker78439,output_checker78440,vec__78434,opts__24583__auto__){
return (function (_78500){var self__ = this;
var _78500__$1 = this;return self__.meta78499;
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema78437,input_schema78438,input_checker78439,output_checker78440,vec__78434,opts__24583__auto__))
;
stuttaford.radiant.t78498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema78437,input_schema78438,input_checker78439,output_checker78440,vec__78434,opts__24583__auto__){
return (function (_78500,meta78499__$1){var self__ = this;
var _78500__$1 = this;return (new stuttaford.radiant.t78498(self__.input_schema78438,self__.app_view,self__.opts__24583__auto__,self__.p__78315,self__.vec__78434,self__.owner78313,self__.owner,self__.view,self__.data,self__.input_checker78439,self__.map78435,self__.schema_visible_QMARK_,self__.fnk78436,self__.data__24582__auto__,self__.output_schema78437,self__.G__78441,self__.validate__837__auto__,self__.ufv__,self__.output_checker78440,meta78499__$1));
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema78437,input_schema78438,input_checker78439,output_checker78440,vec__78434,opts__24583__auto__))
;
stuttaford.radiant.__GT_t78498 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema78437,input_schema78438,input_checker78439,output_checker78440,vec__78434,opts__24583__auto__){
return (function __GT_t78498(input_schema78438__$1,app_view__$1,opts__24583__auto____$1,p__78315__$1,vec__78434__$1,owner78313__$1,owner__$1,view__$1,data__$1,input_checker78439__$1,map78435__$1,schema_visible_QMARK___$1,fnk78436__$1,data__24582__auto____$1,output_schema78437__$1,G__78441__$1,validate__837__auto____$1,ufv____$1,output_checker78440__$1,meta78499){return (new stuttaford.radiant.t78498(input_schema78438__$1,app_view__$1,opts__24583__auto____$1,p__78315__$1,vec__78434__$1,owner78313__$1,owner__$1,view__$1,data__$1,input_checker78439__$1,map78435__$1,schema_visible_QMARK___$1,fnk78436__$1,data__24582__auto____$1,output_schema78437__$1,G__78441__$1,validate__837__auto____$1,ufv____$1,output_checker78440__$1,meta78499));
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema78437,input_schema78438,input_checker78439,output_checker78440,vec__78434,opts__24583__auto__))
;
}
return (new stuttaford.radiant.t78498(input_schema78438,app_view,opts__24583__auto__,p__78315,vec__78434,owner78313,owner,view,data,input_checker78439,map78435,schema_visible_QMARK_,fnk78436,data__24582__auto__,output_schema78437,G__78441,validate__837__auto__,ufv__,output_checker78440,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___78567 = (function (){var G__78551 = o__840__auto__;return (output_checker78440.cljs$core$IFn$_invoke$arity$1 ? output_checker78440.cljs$core$IFn$_invoke$arity$1(G__78551) : output_checker78440.call(null,G__78551));
})();if(cljs.core.truth_(temp__4126__auto___78567))
{var error__839__auto___78568 = temp__4126__auto___78567;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk78436","fnk78436",1095930827,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___78568], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema78437,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___78568], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema78437,input_schema78438,input_checker78439,output_checker78440,vec__78434,opts__24583__auto__))
,schema.core.make_fn_schema(output_schema78437,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema78438], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24583__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner78313,new cljs.core.Keyword(null,"data","data",-232669377),data__24582__auto__], null));
};
var app_view = function (data__24582__auto__,owner78313,var_args){
var p__78315 = null;if (arguments.length > 2) {
  p__78315 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_view__delegate.call(this,data__24582__auto__,owner78313,p__78315);};
app_view.cljs$lang$maxFixedArity = 2;
app_view.cljs$lang$applyTo = (function (arglist__78569){
var data__24582__auto__ = cljs.core.first(arglist__78569);
arglist__78569 = cljs.core.next(arglist__78569);
var owner78313 = cljs.core.first(arglist__78569);
var p__78315 = cljs.core.rest(arglist__78569);
return app_view__delegate(data__24582__auto__,owner78313,p__78315);
});
app_view.cljs$core$IFn$_invoke$arity$variadic = app_view__delegate;
return app_view;
})()
;
stuttaford.radiant.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__24551__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.app_view,cursor__24551__auto__);
});
var __GT_app_view__2 = (function (cursor__24551__auto__,m78314){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.app_view,cursor__24551__auto__,m78314);
});
__GT_app_view = function(cursor__24551__auto__,m78314){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__24551__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__24551__auto__,m78314);
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