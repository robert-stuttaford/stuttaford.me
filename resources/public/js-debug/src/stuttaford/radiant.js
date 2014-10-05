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
var app_view__delegate = function (data__24197__auto__,owner51553,p__51555){var vec__51674 = p__51555;var opts__24198__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51674,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema51677 = schema.core.Any;var input_schema51678 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map51675","map51675",1178667504,null))], null);var input_checker51679 = schema.core.checker(input_schema51678);var output_checker51680 = schema.core.checker(output_schema51677);return schema.core.schematize_fn(((function (ufv__,output_schema51677,input_schema51678,input_checker51679,output_checker51680,vec__51674,opts__24198__auto__){
return (function fnk51676(G__51681){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___51792 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__51681], null);var temp__4126__auto___51793 = (function (){var G__51737 = args__838__auto___51792;return (input_checker51679.cljs$core$IFn$_invoke$arity$1 ? input_checker51679.cljs$core$IFn$_invoke$arity$1(G__51737) : input_checker51679.call(null,G__51737));
})();if(cljs.core.truth_(temp__4126__auto___51793))
{var error__839__auto___51794 = temp__4126__auto___51793;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk51676","fnk51676",-730410560,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___51794], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema51678,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___51792,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___51794], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map51675 = G__51681;while(true){
if(cljs.core.map_QMARK_(map51675))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map51675], 0))));
}
var data = plumbing.fnk.schema.safe_get(map51675,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var schema_visible_QMARK_ = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map51675,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.t51738 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.t51738 = (function (fnk51676,data__24197__auto__,p__51555,app_view,owner51553,owner,output_checker51680,view,data,schema_visible_QMARK_,opts__24198__auto__,map51675,output_schema51677,vec__51674,G__51681,input_checker51679,input_schema51678,validate__837__auto__,ufv__,meta51739){
this.fnk51676 = fnk51676;
this.data__24197__auto__ = data__24197__auto__;
this.p__51555 = p__51555;
this.app_view = app_view;
this.owner51553 = owner51553;
this.owner = owner;
this.output_checker51680 = output_checker51680;
this.view = view;
this.data = data;
this.schema_visible_QMARK_ = schema_visible_QMARK_;
this.opts__24198__auto__ = opts__24198__auto__;
this.map51675 = map51675;
this.output_schema51677 = output_schema51677;
this.vec__51674 = vec__51674;
this.G__51681 = G__51681;
this.input_checker51679 = input_checker51679;
this.input_schema51678 = input_schema51678;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.meta51739 = meta51739;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.t51738.cljs$lang$type = true;
stuttaford.radiant.t51738.cljs$lang$ctorStr = "stuttaford.radiant/t51738";
stuttaford.radiant.t51738.cljs$lang$ctorPrWriter = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema51677,input_schema51678,input_checker51679,output_checker51680,vec__51674,opts__24198__auto__){
return (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"stuttaford.radiant/t51738");
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema51677,input_schema51678,input_checker51679,output_checker51680,vec__51674,opts__24198__auto__))
;
stuttaford.radiant.t51738.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.t51738.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema51677,input_schema51678,input_checker51679,output_checker51680,vec__51674,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "app-view";
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema51677,input_schema51678,input_checker51679,output_checker51680,vec__51674,opts__24198__auto__))
;
stuttaford.radiant.t51738.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.t51738.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema51677,input_schema51678,input_checker51679,output_checker51680,vec__51674,opts__24198__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret((function (){var vec__51741 = (function (){var G__51742 = stuttaford.radiant.nav_items;return (self__.view.cljs$core$IFn$_invoke$arity$1 ? self__.view.cljs$core$IFn$_invoke$arity$1(G__51742) : self__.view.call(null,G__51742));
})();var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51741,(0),null);var view_component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51741,(1),null);return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),stuttaford.radiant.components.__GT_top_nav.cljs$core$IFn$_invoke$arity$2(self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),stuttaford.radiant.nav_items], null)], null))], null),cljs.core.array_seq([(cljs.core.truth_(self__.schema_visible_QMARK_)?stuttaford.radiant.components.__GT_schema.cljs$core$IFn$_invoke$arity$1(self__.data):null),(cljs.core.truth_(view_component)?om.core.build.cljs$core$IFn$_invoke$arity$2(view_component,self__.data):(function (){var G__51745 = null;return React.DOM.div(G__51745);
})())], 0));
})());
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema51677,input_schema51678,input_checker51679,output_checker51680,vec__51674,opts__24198__auto__))
;
stuttaford.radiant.t51738.prototype.om$core$IWillMount$ = true;
stuttaford.radiant.t51738.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema51677,input_schema51678,input_checker51679,output_checker51680,vec__51674,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var c__22742__auto___51795 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22742__auto___51795,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema51677,input_schema51678,input_checker51679,output_checker51680,vec__51674,opts__24198__auto__){
return (function (){var f__22743__auto__ = (function (){var switch__22727__auto__ = ((function (c__22742__auto___51795,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema51677,input_schema51678,input_checker51679,output_checker51680,vec__51674,opts__24198__auto__){
return (function (state_51766){var state_val_51767 = (state_51766[(1)]);if((state_val_51767 === (7)))
{var inst_51749 = (state_51766[(7)]);var inst_51749__$1 = (state_51766[(2)]);var state_51766__$1 = (function (){var statearr_51768 = state_51766;(statearr_51768[(7)] = inst_51749__$1);
return statearr_51768;
})();if(cljs.core.truth_(inst_51749__$1))
{var statearr_51769_51796 = state_51766__$1;(statearr_51769_51796[(1)] = (8));
} else
{var statearr_51770_51797 = state_51766__$1;(statearr_51770_51797[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51767 === (1)))
{var state_51766__$1 = state_51766;var statearr_51771_51798 = state_51766__$1;(statearr_51771_51798[(2)] = null);
(statearr_51771_51798[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51767 === (4)))
{var state_51766__$1 = state_51766;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51766__$1,(7),c);
} else
{if((state_val_51767 === (6)))
{var inst_51762 = (state_51766[(2)]);var state_51766__$1 = state_51766;var statearr_51772_51799 = state_51766__$1;(statearr_51772_51799[(2)] = inst_51762);
(statearr_51772_51799[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51767 === (3)))
{var inst_51764 = (state_51766[(2)]);var state_51766__$1 = state_51766;return cljs.core.async.impl.ioc_helpers.return_chan(state_51766__$1,inst_51764);
} else
{if((state_val_51767 === (2)))
{var state_51766__$1 = state_51766;var statearr_51773_51800 = state_51766__$1;(statearr_51773_51800[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51767 === (9)))
{var state_51766__$1 = state_51766;var statearr_51775_51801 = state_51766__$1;(statearr_51775_51801[(2)] = null);
(statearr_51775_51801[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51767 === (5)))
{var state_51766__$1 = state_51766;var statearr_51776_51802 = state_51766__$1;(statearr_51776_51802[(2)] = null);
(statearr_51776_51802[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51767 === (10)))
{var inst_51758 = (state_51766[(2)]);var state_51766__$1 = (function (){var statearr_51777 = state_51766;(statearr_51777[(8)] = inst_51758);
return statearr_51777;
})();var statearr_51778_51803 = state_51766__$1;(statearr_51778_51803[(2)] = null);
(statearr_51778_51803[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51767 === (8)))
{var inst_51749 = (state_51766[(7)]);var inst_51752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51749,(0),null);var inst_51753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51749,(1),null);var inst_51754 = stuttaford.om.common.config.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"debug?","debug?",-1831756173));var inst_51755 = (function (){var G__51779 = self__.data;var G__51780 = inst_51752;var G__51781 = inst_51753;var G__51782 = inst_51754;return (stuttaford.radiant.actions.perform_action.cljs$core$IFn$_invoke$arity$4 ? stuttaford.radiant.actions.perform_action.cljs$core$IFn$_invoke$arity$4(G__51779,G__51780,G__51781,G__51782) : stuttaford.radiant.actions.perform_action.call(null,G__51779,G__51780,G__51781,G__51782));
})();var state_51766__$1 = state_51766;var statearr_51783_51804 = state_51766__$1;(statearr_51783_51804[(2)] = inst_51755);
(statearr_51783_51804[(1)] = (10));
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
});})(c__22742__auto___51795,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema51677,input_schema51678,input_checker51679,output_checker51680,vec__51674,opts__24198__auto__))
;return ((function (switch__22727__auto__,c__22742__auto___51795,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema51677,input_schema51678,input_checker51679,output_checker51680,vec__51674,opts__24198__auto__){
return (function() {
var state_machine__22728__auto__ = null;
var state_machine__22728__auto____0 = (function (){var statearr_51787 = [null,null,null,null,null,null,null,null,null];(statearr_51787[(0)] = state_machine__22728__auto__);
(statearr_51787[(1)] = (1));
return statearr_51787;
});
var state_machine__22728__auto____1 = (function (state_51766){while(true){
var ret_value__22729__auto__ = (function (){try{while(true){
var result__22730__auto__ = switch__22727__auto__(state_51766);if(cljs.core.keyword_identical_QMARK_(result__22730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22730__auto__;
}
break;
}
}catch (e51788){if((e51788 instanceof Object))
{var ex__22731__auto__ = e51788;var statearr_51789_51805 = state_51766;(statearr_51789_51805[(5)] = ex__22731__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51766);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e51788;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51806 = state_51766;
state_51766 = G__51806;
continue;
}
} else
{return ret_value__22729__auto__;
}
break;
}
});
state_machine__22728__auto__ = function(state_51766){
switch(arguments.length){
case 0:
return state_machine__22728__auto____0.call(this);
case 1:
return state_machine__22728__auto____1.call(this,state_51766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22728__auto____0;
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22728__auto____1;
return state_machine__22728__auto__;
})()
;})(switch__22727__auto__,c__22742__auto___51795,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema51677,input_schema51678,input_checker51679,output_checker51680,vec__51674,opts__24198__auto__))
})();var state__22744__auto__ = (function (){var statearr_51790 = (function (){return (f__22743__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22743__auto__.cljs$core$IFn$_invoke$arity$0() : f__22743__auto__.call(null));
})();(statearr_51790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22742__auto___51795);
return statearr_51790;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22744__auto__);
});})(c__22742__auto___51795,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema51677,input_schema51678,input_checker51679,output_checker51680,vec__51674,opts__24198__auto__))
);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-data-source","set-data-source",-1371173368),cljs.core.ffirst(new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574).cljs$core$IFn$_invoke$arity$1(self__.data))], null));
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema51677,input_schema51678,input_checker51679,output_checker51680,vec__51674,opts__24198__auto__))
;
stuttaford.radiant.t51738.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema51677,input_schema51678,input_checker51679,output_checker51680,vec__51674,opts__24198__auto__){
return (function (_51740){var self__ = this;
var _51740__$1 = this;return self__.meta51739;
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema51677,input_schema51678,input_checker51679,output_checker51680,vec__51674,opts__24198__auto__))
;
stuttaford.radiant.t51738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema51677,input_schema51678,input_checker51679,output_checker51680,vec__51674,opts__24198__auto__){
return (function (_51740,meta51739__$1){var self__ = this;
var _51740__$1 = this;return (new stuttaford.radiant.t51738(self__.fnk51676,self__.data__24197__auto__,self__.p__51555,self__.app_view,self__.owner51553,self__.owner,self__.output_checker51680,self__.view,self__.data,self__.schema_visible_QMARK_,self__.opts__24198__auto__,self__.map51675,self__.output_schema51677,self__.vec__51674,self__.G__51681,self__.input_checker51679,self__.input_schema51678,self__.validate__837__auto__,self__.ufv__,meta51739__$1));
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema51677,input_schema51678,input_checker51679,output_checker51680,vec__51674,opts__24198__auto__))
;
stuttaford.radiant.__GT_t51738 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema51677,input_schema51678,input_checker51679,output_checker51680,vec__51674,opts__24198__auto__){
return (function __GT_t51738(fnk51676__$1,data__24197__auto____$1,p__51555__$1,app_view__$1,owner51553__$1,owner__$1,output_checker51680__$1,view__$1,data__$1,schema_visible_QMARK___$1,opts__24198__auto____$1,map51675__$1,output_schema51677__$1,vec__51674__$1,G__51681__$1,input_checker51679__$1,input_schema51678__$1,validate__837__auto____$1,ufv____$1,meta51739){return (new stuttaford.radiant.t51738(fnk51676__$1,data__24197__auto____$1,p__51555__$1,app_view__$1,owner51553__$1,owner__$1,output_checker51680__$1,view__$1,data__$1,schema_visible_QMARK___$1,opts__24198__auto____$1,map51675__$1,output_schema51677__$1,vec__51674__$1,G__51681__$1,input_checker51679__$1,input_schema51678__$1,validate__837__auto____$1,ufv____$1,meta51739));
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema51677,input_schema51678,input_checker51679,output_checker51680,vec__51674,opts__24198__auto__))
;
}
return (new stuttaford.radiant.t51738(fnk51676,data__24197__auto__,p__51555,app_view,owner51553,owner,output_checker51680,view,data,schema_visible_QMARK_,opts__24198__auto__,map51675,output_schema51677,vec__51674,G__51681,input_checker51679,input_schema51678,validate__837__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___51807 = (function (){var G__51791 = o__840__auto__;return (output_checker51680.cljs$core$IFn$_invoke$arity$1 ? output_checker51680.cljs$core$IFn$_invoke$arity$1(G__51791) : output_checker51680.call(null,G__51791));
})();if(cljs.core.truth_(temp__4126__auto___51807))
{var error__839__auto___51808 = temp__4126__auto___51807;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk51676","fnk51676",-730410560,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___51808], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema51677,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___51808], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema51677,input_schema51678,input_checker51679,output_checker51680,vec__51674,opts__24198__auto__))
,schema.core.make_fn_schema(output_schema51677,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema51678], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24198__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner51553,new cljs.core.Keyword(null,"data","data",-232669377),data__24197__auto__], null));
};
var app_view = function (data__24197__auto__,owner51553,var_args){
var p__51555 = null;if (arguments.length > 2) {
  p__51555 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_view__delegate.call(this,data__24197__auto__,owner51553,p__51555);};
app_view.cljs$lang$maxFixedArity = 2;
app_view.cljs$lang$applyTo = (function (arglist__51809){
var data__24197__auto__ = cljs.core.first(arglist__51809);
arglist__51809 = cljs.core.next(arglist__51809);
var owner51553 = cljs.core.first(arglist__51809);
var p__51555 = cljs.core.rest(arglist__51809);
return app_view__delegate(data__24197__auto__,owner51553,p__51555);
});
app_view.cljs$core$IFn$_invoke$arity$variadic = app_view__delegate;
return app_view;
})()
;
stuttaford.radiant.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__24166__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.app_view,cursor__24166__auto__);
});
var __GT_app_view__2 = (function (cursor__24166__auto__,m51554){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.app_view,cursor__24166__auto__,m51554);
});
__GT_app_view = function(cursor__24166__auto__,m51554){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__24166__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__24166__auto__,m51554);
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