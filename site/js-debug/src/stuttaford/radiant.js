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
var app_view__delegate = function (data__24457__auto__,owner49965,p__49967){var vec__50086 = p__49967;var opts__24458__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50086,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema50089 = schema.core.Any;var input_schema50090 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map50087","map50087",-1788668906,null))], null);var input_checker50091 = schema.core.checker(input_schema50090);var output_checker50092 = schema.core.checker(output_schema50089);return schema.core.schematize_fn(((function (ufv__,output_schema50089,input_schema50090,input_checker50091,output_checker50092,vec__50086,opts__24458__auto__){
return (function fnk50088(G__50093){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___50204 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50093], null);var temp__4126__auto___50205 = (function (){var G__50149 = args__838__auto___50204;return (input_checker50091.cljs$core$IFn$_invoke$arity$1 ? input_checker50091.cljs$core$IFn$_invoke$arity$1(G__50149) : input_checker50091.call(null,G__50149));
})();if(cljs.core.truth_(temp__4126__auto___50205))
{var error__839__auto___50206 = temp__4126__auto___50205;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk50088","fnk50088",209637132,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50206], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50090,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___50204,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50206], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map50087 = G__50093;while(true){
if(cljs.core.map_QMARK_(map50087))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map50087], 0))));
}
var data = plumbing.fnk.schema.safe_get(map50087,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var schema_visible_QMARK_ = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map50087,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.t50150 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.t50150 = (function (app_view,owner,view,data,schema_visible_QMARK_,G__50093,fnk50088,output_schema50089,input_schema50090,vec__50086,owner49965,p__49967,map50087,opts__24458__auto__,output_checker50092,validate__837__auto__,input_checker50091,ufv__,data__24457__auto__,meta50151){
this.app_view = app_view;
this.owner = owner;
this.view = view;
this.data = data;
this.schema_visible_QMARK_ = schema_visible_QMARK_;
this.G__50093 = G__50093;
this.fnk50088 = fnk50088;
this.output_schema50089 = output_schema50089;
this.input_schema50090 = input_schema50090;
this.vec__50086 = vec__50086;
this.owner49965 = owner49965;
this.p__49967 = p__49967;
this.map50087 = map50087;
this.opts__24458__auto__ = opts__24458__auto__;
this.output_checker50092 = output_checker50092;
this.validate__837__auto__ = validate__837__auto__;
this.input_checker50091 = input_checker50091;
this.ufv__ = ufv__;
this.data__24457__auto__ = data__24457__auto__;
this.meta50151 = meta50151;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.t50150.cljs$lang$type = true;
stuttaford.radiant.t50150.cljs$lang$ctorStr = "stuttaford.radiant/t50150";
stuttaford.radiant.t50150.cljs$lang$ctorPrWriter = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema50089,input_schema50090,input_checker50091,output_checker50092,vec__50086,opts__24458__auto__){
return (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"stuttaford.radiant/t50150");
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema50089,input_schema50090,input_checker50091,output_checker50092,vec__50086,opts__24458__auto__))
;
stuttaford.radiant.t50150.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.t50150.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema50089,input_schema50090,input_checker50091,output_checker50092,vec__50086,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "app-view";
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema50089,input_schema50090,input_checker50091,output_checker50092,vec__50086,opts__24458__auto__))
;
stuttaford.radiant.t50150.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.t50150.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema50089,input_schema50090,input_checker50091,output_checker50092,vec__50086,opts__24458__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret((function (){var vec__50153 = (function (){var G__50154 = stuttaford.radiant.nav_items;return (self__.view.cljs$core$IFn$_invoke$arity$1 ? self__.view.cljs$core$IFn$_invoke$arity$1(G__50154) : self__.view.call(null,G__50154));
})();var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50153,(0),null);var view_component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50153,(1),null);return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),stuttaford.radiant.components.__GT_top_nav.cljs$core$IFn$_invoke$arity$2(self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),stuttaford.radiant.nav_items], null)], null))], null),cljs.core.array_seq([(cljs.core.truth_(self__.schema_visible_QMARK_)?stuttaford.radiant.components.__GT_schema.cljs$core$IFn$_invoke$arity$1(self__.data):null),(cljs.core.truth_(view_component)?om.core.build.cljs$core$IFn$_invoke$arity$2(view_component,self__.data):(function (){var G__50157 = null;return React.DOM.div(G__50157);
})())], 0));
})());
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema50089,input_schema50090,input_checker50091,output_checker50092,vec__50086,opts__24458__auto__))
;
stuttaford.radiant.t50150.prototype.om$core$IWillMount$ = true;
stuttaford.radiant.t50150.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema50089,input_schema50090,input_checker50091,output_checker50092,vec__50086,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var c__23002__auto___50207 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23002__auto___50207,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema50089,input_schema50090,input_checker50091,output_checker50092,vec__50086,opts__24458__auto__){
return (function (){var f__23003__auto__ = (function (){var switch__22987__auto__ = ((function (c__23002__auto___50207,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema50089,input_schema50090,input_checker50091,output_checker50092,vec__50086,opts__24458__auto__){
return (function (state_50178){var state_val_50179 = (state_50178[(1)]);if((state_val_50179 === (7)))
{var inst_50161 = (state_50178[(7)]);var inst_50161__$1 = (state_50178[(2)]);var state_50178__$1 = (function (){var statearr_50180 = state_50178;(statearr_50180[(7)] = inst_50161__$1);
return statearr_50180;
})();if(cljs.core.truth_(inst_50161__$1))
{var statearr_50181_50208 = state_50178__$1;(statearr_50181_50208[(1)] = (8));
} else
{var statearr_50182_50209 = state_50178__$1;(statearr_50182_50209[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50179 === (1)))
{var state_50178__$1 = state_50178;var statearr_50183_50210 = state_50178__$1;(statearr_50183_50210[(2)] = null);
(statearr_50183_50210[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50179 === (4)))
{var state_50178__$1 = state_50178;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50178__$1,(7),c);
} else
{if((state_val_50179 === (6)))
{var inst_50174 = (state_50178[(2)]);var state_50178__$1 = state_50178;var statearr_50184_50211 = state_50178__$1;(statearr_50184_50211[(2)] = inst_50174);
(statearr_50184_50211[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50179 === (3)))
{var inst_50176 = (state_50178[(2)]);var state_50178__$1 = state_50178;return cljs.core.async.impl.ioc_helpers.return_chan(state_50178__$1,inst_50176);
} else
{if((state_val_50179 === (2)))
{var state_50178__$1 = state_50178;var statearr_50185_50212 = state_50178__$1;(statearr_50185_50212[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50179 === (9)))
{var state_50178__$1 = state_50178;var statearr_50187_50213 = state_50178__$1;(statearr_50187_50213[(2)] = null);
(statearr_50187_50213[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50179 === (5)))
{var state_50178__$1 = state_50178;var statearr_50188_50214 = state_50178__$1;(statearr_50188_50214[(2)] = null);
(statearr_50188_50214[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50179 === (10)))
{var inst_50170 = (state_50178[(2)]);var state_50178__$1 = (function (){var statearr_50189 = state_50178;(statearr_50189[(8)] = inst_50170);
return statearr_50189;
})();var statearr_50190_50215 = state_50178__$1;(statearr_50190_50215[(2)] = null);
(statearr_50190_50215[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50179 === (8)))
{var inst_50161 = (state_50178[(7)]);var inst_50164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50161,(0),null);var inst_50165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50161,(1),null);var inst_50166 = stuttaford.om.common.config.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"debug?","debug?",-1831756173));var inst_50167 = (function (){var G__50191 = self__.data;var G__50192 = inst_50164;var G__50193 = inst_50165;var G__50194 = inst_50166;return (stuttaford.radiant.actions.perform_action.cljs$core$IFn$_invoke$arity$4 ? stuttaford.radiant.actions.perform_action.cljs$core$IFn$_invoke$arity$4(G__50191,G__50192,G__50193,G__50194) : stuttaford.radiant.actions.perform_action.call(null,G__50191,G__50192,G__50193,G__50194));
})();var state_50178__$1 = state_50178;var statearr_50195_50216 = state_50178__$1;(statearr_50195_50216[(2)] = inst_50167);
(statearr_50195_50216[(1)] = (10));
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
});})(c__23002__auto___50207,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema50089,input_schema50090,input_checker50091,output_checker50092,vec__50086,opts__24458__auto__))
;return ((function (switch__22987__auto__,c__23002__auto___50207,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema50089,input_schema50090,input_checker50091,output_checker50092,vec__50086,opts__24458__auto__){
return (function() {
var state_machine__22988__auto__ = null;
var state_machine__22988__auto____0 = (function (){var statearr_50199 = [null,null,null,null,null,null,null,null,null];(statearr_50199[(0)] = state_machine__22988__auto__);
(statearr_50199[(1)] = (1));
return statearr_50199;
});
var state_machine__22988__auto____1 = (function (state_50178){while(true){
var ret_value__22989__auto__ = (function (){try{while(true){
var result__22990__auto__ = switch__22987__auto__(state_50178);if(cljs.core.keyword_identical_QMARK_(result__22990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22990__auto__;
}
break;
}
}catch (e50200){if((e50200 instanceof Object))
{var ex__22991__auto__ = e50200;var statearr_50201_50217 = state_50178;(statearr_50201_50217[(5)] = ex__22991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_50178);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e50200;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50218 = state_50178;
state_50178 = G__50218;
continue;
}
} else
{return ret_value__22989__auto__;
}
break;
}
});
state_machine__22988__auto__ = function(state_50178){
switch(arguments.length){
case 0:
return state_machine__22988__auto____0.call(this);
case 1:
return state_machine__22988__auto____1.call(this,state_50178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22988__auto____0;
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22988__auto____1;
return state_machine__22988__auto__;
})()
;})(switch__22987__auto__,c__23002__auto___50207,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema50089,input_schema50090,input_checker50091,output_checker50092,vec__50086,opts__24458__auto__))
})();var state__23004__auto__ = (function (){var statearr_50202 = (function (){return (f__23003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23003__auto__.cljs$core$IFn$_invoke$arity$0() : f__23003__auto__.call(null));
})();(statearr_50202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23002__auto___50207);
return statearr_50202;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23004__auto__);
});})(c__23002__auto___50207,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema50089,input_schema50090,input_checker50091,output_checker50092,vec__50086,opts__24458__auto__))
);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-data-source","set-data-source",-1371173368),cljs.core.ffirst(new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574).cljs$core$IFn$_invoke$arity$1(self__.data))], null));
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema50089,input_schema50090,input_checker50091,output_checker50092,vec__50086,opts__24458__auto__))
;
stuttaford.radiant.t50150.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema50089,input_schema50090,input_checker50091,output_checker50092,vec__50086,opts__24458__auto__){
return (function (_50152){var self__ = this;
var _50152__$1 = this;return self__.meta50151;
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema50089,input_schema50090,input_checker50091,output_checker50092,vec__50086,opts__24458__auto__))
;
stuttaford.radiant.t50150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema50089,input_schema50090,input_checker50091,output_checker50092,vec__50086,opts__24458__auto__){
return (function (_50152,meta50151__$1){var self__ = this;
var _50152__$1 = this;return (new stuttaford.radiant.t50150(self__.app_view,self__.owner,self__.view,self__.data,self__.schema_visible_QMARK_,self__.G__50093,self__.fnk50088,self__.output_schema50089,self__.input_schema50090,self__.vec__50086,self__.owner49965,self__.p__49967,self__.map50087,self__.opts__24458__auto__,self__.output_checker50092,self__.validate__837__auto__,self__.input_checker50091,self__.ufv__,self__.data__24457__auto__,meta50151__$1));
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema50089,input_schema50090,input_checker50091,output_checker50092,vec__50086,opts__24458__auto__))
;
stuttaford.radiant.__GT_t50150 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema50089,input_schema50090,input_checker50091,output_checker50092,vec__50086,opts__24458__auto__){
return (function __GT_t50150(app_view__$1,owner__$1,view__$1,data__$1,schema_visible_QMARK___$1,G__50093__$1,fnk50088__$1,output_schema50089__$1,input_schema50090__$1,vec__50086__$1,owner49965__$1,p__49967__$1,map50087__$1,opts__24458__auto____$1,output_checker50092__$1,validate__837__auto____$1,input_checker50091__$1,ufv____$1,data__24457__auto____$1,meta50151){return (new stuttaford.radiant.t50150(app_view__$1,owner__$1,view__$1,data__$1,schema_visible_QMARK___$1,G__50093__$1,fnk50088__$1,output_schema50089__$1,input_schema50090__$1,vec__50086__$1,owner49965__$1,p__49967__$1,map50087__$1,opts__24458__auto____$1,output_checker50092__$1,validate__837__auto____$1,input_checker50091__$1,ufv____$1,data__24457__auto____$1,meta50151));
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema50089,input_schema50090,input_checker50091,output_checker50092,vec__50086,opts__24458__auto__))
;
}
return (new stuttaford.radiant.t50150(app_view,owner,view,data,schema_visible_QMARK_,G__50093,fnk50088,output_schema50089,input_schema50090,vec__50086,owner49965,p__49967,map50087,opts__24458__auto__,output_checker50092,validate__837__auto__,input_checker50091,ufv__,data__24457__auto__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___50219 = (function (){var G__50203 = o__840__auto__;return (output_checker50092.cljs$core$IFn$_invoke$arity$1 ? output_checker50092.cljs$core$IFn$_invoke$arity$1(G__50203) : output_checker50092.call(null,G__50203));
})();if(cljs.core.truth_(temp__4126__auto___50219))
{var error__839__auto___50220 = temp__4126__auto___50219;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk50088","fnk50088",209637132,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___50220], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50089,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___50220], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema50089,input_schema50090,input_checker50091,output_checker50092,vec__50086,opts__24458__auto__))
,schema.core.make_fn_schema(output_schema50089,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50090], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24458__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner49965,new cljs.core.Keyword(null,"data","data",-232669377),data__24457__auto__], null));
};
var app_view = function (data__24457__auto__,owner49965,var_args){
var p__49967 = null;if (arguments.length > 2) {
  p__49967 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_view__delegate.call(this,data__24457__auto__,owner49965,p__49967);};
app_view.cljs$lang$maxFixedArity = 2;
app_view.cljs$lang$applyTo = (function (arglist__50221){
var data__24457__auto__ = cljs.core.first(arglist__50221);
arglist__50221 = cljs.core.next(arglist__50221);
var owner49965 = cljs.core.first(arglist__50221);
var p__49967 = cljs.core.rest(arglist__50221);
return app_view__delegate(data__24457__auto__,owner49965,p__49967);
});
app_view.cljs$core$IFn$_invoke$arity$variadic = app_view__delegate;
return app_view;
})()
;
stuttaford.radiant.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__24426__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.app_view,cursor__24426__auto__);
});
var __GT_app_view__2 = (function (cursor__24426__auto__,m49966){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.app_view,cursor__24426__auto__,m49966);
});
__GT_app_view = function(cursor__24426__auto__,m49966){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__24426__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__24426__auto__,m49966);
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