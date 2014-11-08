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
var app_view__delegate = function (data__24427__auto__,owner58403,p__58405){var vec__58524 = p__58405;var opts__24428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58524,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema58527 = schema.core.Any;var input_schema58528 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map58525","map58525",-402195972,null))], null);var input_checker58529 = schema.core.checker(input_schema58528);var output_checker58530 = schema.core.checker(output_schema58527);return schema.core.schematize_fn(((function (ufv__,output_schema58527,input_schema58528,input_checker58529,output_checker58530,vec__58524,opts__24428__auto__){
return (function fnk58526(G__58531){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___58642 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__58531], null);var temp__4126__auto___58643 = (function (){var G__58587 = args__838__auto___58642;return (input_checker58529.cljs$core$IFn$_invoke$arity$1 ? input_checker58529.cljs$core$IFn$_invoke$arity$1(G__58587) : input_checker58529.call(null,G__58587));
})();if(cljs.core.truth_(temp__4126__auto___58643))
{var error__839__auto___58644 = temp__4126__auto___58643;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk58526","fnk58526",1833541567,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___58644], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema58528,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___58642,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___58644], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map58525 = G__58531;while(true){
if(cljs.core.map_QMARK_(map58525))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map58525], 0))));
}
var data = plumbing.fnk.schema.safe_get(map58525,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var schema_visible_QMARK_ = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map58525,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.t58588 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.t58588 = (function (app_view,owner,output_schema58527,view,data,schema_visible_QMARK_,p__58405,owner58403,output_checker58530,input_schema58528,vec__58524,validate__837__auto__,map58525,G__58531,data__24427__auto__,ufv__,input_checker58529,opts__24428__auto__,fnk58526,meta58589){
this.app_view = app_view;
this.owner = owner;
this.output_schema58527 = output_schema58527;
this.view = view;
this.data = data;
this.schema_visible_QMARK_ = schema_visible_QMARK_;
this.p__58405 = p__58405;
this.owner58403 = owner58403;
this.output_checker58530 = output_checker58530;
this.input_schema58528 = input_schema58528;
this.vec__58524 = vec__58524;
this.validate__837__auto__ = validate__837__auto__;
this.map58525 = map58525;
this.G__58531 = G__58531;
this.data__24427__auto__ = data__24427__auto__;
this.ufv__ = ufv__;
this.input_checker58529 = input_checker58529;
this.opts__24428__auto__ = opts__24428__auto__;
this.fnk58526 = fnk58526;
this.meta58589 = meta58589;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.t58588.cljs$lang$type = true;
stuttaford.radiant.t58588.cljs$lang$ctorStr = "stuttaford.radiant/t58588";
stuttaford.radiant.t58588.cljs$lang$ctorPrWriter = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58527,input_schema58528,input_checker58529,output_checker58530,vec__58524,opts__24428__auto__){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"stuttaford.radiant/t58588");
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58527,input_schema58528,input_checker58529,output_checker58530,vec__58524,opts__24428__auto__))
;
stuttaford.radiant.t58588.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.t58588.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58527,input_schema58528,input_checker58529,output_checker58530,vec__58524,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "app-view";
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58527,input_schema58528,input_checker58529,output_checker58530,vec__58524,opts__24428__auto__))
;
stuttaford.radiant.t58588.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.t58588.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58527,input_schema58528,input_checker58529,output_checker58530,vec__58524,opts__24428__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret((function (){var vec__58591 = (function (){var G__58592 = stuttaford.radiant.nav_items;return (self__.view.cljs$core$IFn$_invoke$arity$1 ? self__.view.cljs$core$IFn$_invoke$arity$1(G__58592) : self__.view.call(null,G__58592));
})();var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58591,(0),null);var view_component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58591,(1),null);return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),stuttaford.radiant.components.__GT_top_nav.cljs$core$IFn$_invoke$arity$2(self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),stuttaford.radiant.nav_items], null)], null))], null),cljs.core.array_seq([(cljs.core.truth_(self__.schema_visible_QMARK_)?stuttaford.radiant.components.__GT_schema.cljs$core$IFn$_invoke$arity$1(self__.data):null),(cljs.core.truth_(view_component)?om.core.build.cljs$core$IFn$_invoke$arity$2(view_component,self__.data):(function (){var G__58595 = null;return React.DOM.div(G__58595);
})())], 0));
})());
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58527,input_schema58528,input_checker58529,output_checker58530,vec__58524,opts__24428__auto__))
;
stuttaford.radiant.t58588.prototype.om$core$IWillMount$ = true;
stuttaford.radiant.t58588.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58527,input_schema58528,input_checker58529,output_checker58530,vec__58524,opts__24428__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var c__22972__auto___58645 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22972__auto___58645,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58527,input_schema58528,input_checker58529,output_checker58530,vec__58524,opts__24428__auto__){
return (function (){var f__22973__auto__ = (function (){var switch__22957__auto__ = ((function (c__22972__auto___58645,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58527,input_schema58528,input_checker58529,output_checker58530,vec__58524,opts__24428__auto__){
return (function (state_58616){var state_val_58617 = (state_58616[(1)]);if((state_val_58617 === (7)))
{var inst_58599 = (state_58616[(7)]);var inst_58599__$1 = (state_58616[(2)]);var state_58616__$1 = (function (){var statearr_58618 = state_58616;(statearr_58618[(7)] = inst_58599__$1);
return statearr_58618;
})();if(cljs.core.truth_(inst_58599__$1))
{var statearr_58619_58646 = state_58616__$1;(statearr_58619_58646[(1)] = (8));
} else
{var statearr_58620_58647 = state_58616__$1;(statearr_58620_58647[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58617 === (1)))
{var state_58616__$1 = state_58616;var statearr_58621_58648 = state_58616__$1;(statearr_58621_58648[(2)] = null);
(statearr_58621_58648[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58617 === (4)))
{var state_58616__$1 = state_58616;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58616__$1,(7),c);
} else
{if((state_val_58617 === (6)))
{var inst_58612 = (state_58616[(2)]);var state_58616__$1 = state_58616;var statearr_58622_58649 = state_58616__$1;(statearr_58622_58649[(2)] = inst_58612);
(statearr_58622_58649[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58617 === (3)))
{var inst_58614 = (state_58616[(2)]);var state_58616__$1 = state_58616;return cljs.core.async.impl.ioc_helpers.return_chan(state_58616__$1,inst_58614);
} else
{if((state_val_58617 === (2)))
{var state_58616__$1 = state_58616;var statearr_58623_58650 = state_58616__$1;(statearr_58623_58650[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58617 === (9)))
{var state_58616__$1 = state_58616;var statearr_58625_58651 = state_58616__$1;(statearr_58625_58651[(2)] = null);
(statearr_58625_58651[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58617 === (5)))
{var state_58616__$1 = state_58616;var statearr_58626_58652 = state_58616__$1;(statearr_58626_58652[(2)] = null);
(statearr_58626_58652[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58617 === (10)))
{var inst_58608 = (state_58616[(2)]);var state_58616__$1 = (function (){var statearr_58627 = state_58616;(statearr_58627[(8)] = inst_58608);
return statearr_58627;
})();var statearr_58628_58653 = state_58616__$1;(statearr_58628_58653[(2)] = null);
(statearr_58628_58653[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58617 === (8)))
{var inst_58599 = (state_58616[(7)]);var inst_58602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58599,(0),null);var inst_58603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58599,(1),null);var inst_58604 = stuttaford.om.common.config.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"debug?","debug?",-1831756173));var inst_58605 = (function (){var G__58629 = self__.data;var G__58630 = inst_58602;var G__58631 = inst_58603;var G__58632 = inst_58604;return (stuttaford.radiant.actions.perform_action.cljs$core$IFn$_invoke$arity$4 ? stuttaford.radiant.actions.perform_action.cljs$core$IFn$_invoke$arity$4(G__58629,G__58630,G__58631,G__58632) : stuttaford.radiant.actions.perform_action.call(null,G__58629,G__58630,G__58631,G__58632));
})();var state_58616__$1 = state_58616;var statearr_58633_58654 = state_58616__$1;(statearr_58633_58654[(2)] = inst_58605);
(statearr_58633_58654[(1)] = (10));
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
});})(c__22972__auto___58645,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58527,input_schema58528,input_checker58529,output_checker58530,vec__58524,opts__24428__auto__))
;return ((function (switch__22957__auto__,c__22972__auto___58645,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58527,input_schema58528,input_checker58529,output_checker58530,vec__58524,opts__24428__auto__){
return (function() {
var state_machine__22958__auto__ = null;
var state_machine__22958__auto____0 = (function (){var statearr_58637 = [null,null,null,null,null,null,null,null,null];(statearr_58637[(0)] = state_machine__22958__auto__);
(statearr_58637[(1)] = (1));
return statearr_58637;
});
var state_machine__22958__auto____1 = (function (state_58616){while(true){
var ret_value__22959__auto__ = (function (){try{while(true){
var result__22960__auto__ = switch__22957__auto__(state_58616);if(cljs.core.keyword_identical_QMARK_(result__22960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22960__auto__;
}
break;
}
}catch (e58638){if((e58638 instanceof Object))
{var ex__22961__auto__ = e58638;var statearr_58639_58655 = state_58616;(statearr_58639_58655[(5)] = ex__22961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_58616);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e58638;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__58656 = state_58616;
state_58616 = G__58656;
continue;
}
} else
{return ret_value__22959__auto__;
}
break;
}
});
state_machine__22958__auto__ = function(state_58616){
switch(arguments.length){
case 0:
return state_machine__22958__auto____0.call(this);
case 1:
return state_machine__22958__auto____1.call(this,state_58616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22958__auto____0;
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22958__auto____1;
return state_machine__22958__auto__;
})()
;})(switch__22957__auto__,c__22972__auto___58645,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58527,input_schema58528,input_checker58529,output_checker58530,vec__58524,opts__24428__auto__))
})();var state__22974__auto__ = (function (){var statearr_58640 = (function (){return (f__22973__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22973__auto__.cljs$core$IFn$_invoke$arity$0() : f__22973__auto__.call(null));
})();(statearr_58640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22972__auto___58645);
return statearr_58640;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22974__auto__);
});})(c__22972__auto___58645,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58527,input_schema58528,input_checker58529,output_checker58530,vec__58524,opts__24428__auto__))
);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-data-source","set-data-source",-1371173368),cljs.core.ffirst(new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574).cljs$core$IFn$_invoke$arity$1(self__.data))], null));
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58527,input_schema58528,input_checker58529,output_checker58530,vec__58524,opts__24428__auto__))
;
stuttaford.radiant.t58588.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58527,input_schema58528,input_checker58529,output_checker58530,vec__58524,opts__24428__auto__){
return (function (_58590){var self__ = this;
var _58590__$1 = this;return self__.meta58589;
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58527,input_schema58528,input_checker58529,output_checker58530,vec__58524,opts__24428__auto__))
;
stuttaford.radiant.t58588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58527,input_schema58528,input_checker58529,output_checker58530,vec__58524,opts__24428__auto__){
return (function (_58590,meta58589__$1){var self__ = this;
var _58590__$1 = this;return (new stuttaford.radiant.t58588(self__.app_view,self__.owner,self__.output_schema58527,self__.view,self__.data,self__.schema_visible_QMARK_,self__.p__58405,self__.owner58403,self__.output_checker58530,self__.input_schema58528,self__.vec__58524,self__.validate__837__auto__,self__.map58525,self__.G__58531,self__.data__24427__auto__,self__.ufv__,self__.input_checker58529,self__.opts__24428__auto__,self__.fnk58526,meta58589__$1));
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58527,input_schema58528,input_checker58529,output_checker58530,vec__58524,opts__24428__auto__))
;
stuttaford.radiant.__GT_t58588 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58527,input_schema58528,input_checker58529,output_checker58530,vec__58524,opts__24428__auto__){
return (function __GT_t58588(app_view__$1,owner__$1,output_schema58527__$1,view__$1,data__$1,schema_visible_QMARK___$1,p__58405__$1,owner58403__$1,output_checker58530__$1,input_schema58528__$1,vec__58524__$1,validate__837__auto____$1,map58525__$1,G__58531__$1,data__24427__auto____$1,ufv____$1,input_checker58529__$1,opts__24428__auto____$1,fnk58526__$1,meta58589){return (new stuttaford.radiant.t58588(app_view__$1,owner__$1,output_schema58527__$1,view__$1,data__$1,schema_visible_QMARK___$1,p__58405__$1,owner58403__$1,output_checker58530__$1,input_schema58528__$1,vec__58524__$1,validate__837__auto____$1,map58525__$1,G__58531__$1,data__24427__auto____$1,ufv____$1,input_checker58529__$1,opts__24428__auto____$1,fnk58526__$1,meta58589));
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58527,input_schema58528,input_checker58529,output_checker58530,vec__58524,opts__24428__auto__))
;
}
return (new stuttaford.radiant.t58588(app_view,owner,output_schema58527,view,data,schema_visible_QMARK_,p__58405,owner58403,output_checker58530,input_schema58528,vec__58524,validate__837__auto__,map58525,G__58531,data__24427__auto__,ufv__,input_checker58529,opts__24428__auto__,fnk58526,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___58657 = (function (){var G__58641 = o__840__auto__;return (output_checker58530.cljs$core$IFn$_invoke$arity$1 ? output_checker58530.cljs$core$IFn$_invoke$arity$1(G__58641) : output_checker58530.call(null,G__58641));
})();if(cljs.core.truth_(temp__4126__auto___58657))
{var error__839__auto___58658 = temp__4126__auto___58657;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk58526","fnk58526",1833541567,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___58658], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema58527,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___58658], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema58527,input_schema58528,input_checker58529,output_checker58530,vec__58524,opts__24428__auto__))
,schema.core.make_fn_schema(output_schema58527,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema58528], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24428__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner58403,new cljs.core.Keyword(null,"data","data",-232669377),data__24427__auto__], null));
};
var app_view = function (data__24427__auto__,owner58403,var_args){
var p__58405 = null;if (arguments.length > 2) {
  p__58405 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_view__delegate.call(this,data__24427__auto__,owner58403,p__58405);};
app_view.cljs$lang$maxFixedArity = 2;
app_view.cljs$lang$applyTo = (function (arglist__58659){
var data__24427__auto__ = cljs.core.first(arglist__58659);
arglist__58659 = cljs.core.next(arglist__58659);
var owner58403 = cljs.core.first(arglist__58659);
var p__58405 = cljs.core.rest(arglist__58659);
return app_view__delegate(data__24427__auto__,owner58403,p__58405);
});
app_view.cljs$core$IFn$_invoke$arity$variadic = app_view__delegate;
return app_view;
})()
;
stuttaford.radiant.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__24396__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.app_view,cursor__24396__auto__);
});
var __GT_app_view__2 = (function (cursor__24396__auto__,m58404){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.app_view,cursor__24396__auto__,m58404);
});
__GT_app_view = function(cursor__24396__auto__,m58404){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__24396__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__24396__auto__,m58404);
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