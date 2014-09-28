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
var app_view__delegate = function (data__24144__auto__,owner58058,p__58060){var vec__58179 = p__58060;var opts__24145__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58179,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema58182 = schema.core.Any;var input_schema58183 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map58180","map58180",-1636975858,null))], null);var input_checker58184 = schema.core.checker(input_schema58183);var output_checker58185 = schema.core.checker(output_schema58182);return schema.core.schematize_fn(((function (ufv__,output_schema58182,input_schema58183,input_checker58184,output_checker58185,vec__58179,opts__24145__auto__){
return (function fnk58181(G__58186){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___58297 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__58186], null);var temp__4126__auto___58298 = (function (){var G__58242 = args__838__auto___58297;return (input_checker58184.cljs$core$IFn$_invoke$arity$1 ? input_checker58184.cljs$core$IFn$_invoke$arity$1(G__58242) : input_checker58184.call(null,G__58242));
})();if(cljs.core.truth_(temp__4126__auto___58298))
{var error__839__auto___58299 = temp__4126__auto___58298;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk58181","fnk58181",-680619508,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___58299], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema58183,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___58297,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___58299], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map58180 = G__58186;while(true){
if(cljs.core.map_QMARK_(map58180))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map58180], 0))));
}
var data = plumbing.fnk.schema.safe_get(map58180,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var schema_visible_QMARK_ = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"schema-visible?","schema-visible?",934396961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map58180,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.radiant.t58243 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.radiant.t58243 = (function (app_view,owner,view,data,p__58060,owner58058,schema_visible_QMARK_,data__24144__auto__,opts__24145__auto__,fnk58181,output_checker58185,vec__58179,map58180,input_schema58183,input_checker58184,validate__837__auto__,output_schema58182,ufv__,G__58186,meta58244){
this.app_view = app_view;
this.owner = owner;
this.view = view;
this.data = data;
this.p__58060 = p__58060;
this.owner58058 = owner58058;
this.schema_visible_QMARK_ = schema_visible_QMARK_;
this.data__24144__auto__ = data__24144__auto__;
this.opts__24145__auto__ = opts__24145__auto__;
this.fnk58181 = fnk58181;
this.output_checker58185 = output_checker58185;
this.vec__58179 = vec__58179;
this.map58180 = map58180;
this.input_schema58183 = input_schema58183;
this.input_checker58184 = input_checker58184;
this.validate__837__auto__ = validate__837__auto__;
this.output_schema58182 = output_schema58182;
this.ufv__ = ufv__;
this.G__58186 = G__58186;
this.meta58244 = meta58244;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.radiant.t58243.cljs$lang$type = true;
stuttaford.radiant.t58243.cljs$lang$ctorStr = "stuttaford.radiant/t58243";
stuttaford.radiant.t58243.cljs$lang$ctorPrWriter = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58182,input_schema58183,input_checker58184,output_checker58185,vec__58179,opts__24145__auto__){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"stuttaford.radiant/t58243");
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58182,input_schema58183,input_checker58184,output_checker58185,vec__58179,opts__24145__auto__))
;
stuttaford.radiant.t58243.prototype.om$core$IDisplayName$ = true;
stuttaford.radiant.t58243.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58182,input_schema58183,input_checker58184,output_checker58185,vec__58179,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "app-view";
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58182,input_schema58183,input_checker58184,output_checker58185,vec__58179,opts__24145__auto__))
;
stuttaford.radiant.t58243.prototype.om$core$IRenderState$ = true;
stuttaford.radiant.t58243.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58182,input_schema58183,input_checker58184,output_checker58185,vec__58179,opts__24145__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret((function (){var vec__58246 = (function (){var G__58247 = stuttaford.radiant.nav_items;return (self__.view.cljs$core$IFn$_invoke$arity$1 ? self__.view.cljs$core$IFn$_invoke$arity$1(G__58247) : self__.view.call(null,G__58247));
})();var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58246,(0),null);var view_component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58246,(1),null);return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),stuttaford.radiant.components.__GT_top_nav.cljs$core$IFn$_invoke$arity$2(self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),stuttaford.radiant.nav_items], null)], null))], null),cljs.core.array_seq([(cljs.core.truth_(self__.schema_visible_QMARK_)?stuttaford.radiant.components.__GT_schema.cljs$core$IFn$_invoke$arity$1(self__.data):null),(cljs.core.truth_(view_component)?om.core.build.cljs$core$IFn$_invoke$arity$2(view_component,self__.data):(function (){var G__58250 = null;return React.DOM.div(G__58250);
})())], 0));
})());
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58182,input_schema58183,input_checker58184,output_checker58185,vec__58179,opts__24145__auto__))
;
stuttaford.radiant.t58243.prototype.om$core$IWillMount$ = true;
stuttaford.radiant.t58243.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58182,input_schema58183,input_checker58184,output_checker58185,vec__58179,opts__24145__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var c__22689__auto___58300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22689__auto___58300,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58182,input_schema58183,input_checker58184,output_checker58185,vec__58179,opts__24145__auto__){
return (function (){var f__22690__auto__ = (function (){var switch__22674__auto__ = ((function (c__22689__auto___58300,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58182,input_schema58183,input_checker58184,output_checker58185,vec__58179,opts__24145__auto__){
return (function (state_58271){var state_val_58272 = (state_58271[(1)]);if((state_val_58272 === (7)))
{var inst_58254 = (state_58271[(7)]);var inst_58254__$1 = (state_58271[(2)]);var state_58271__$1 = (function (){var statearr_58273 = state_58271;(statearr_58273[(7)] = inst_58254__$1);
return statearr_58273;
})();if(cljs.core.truth_(inst_58254__$1))
{var statearr_58274_58301 = state_58271__$1;(statearr_58274_58301[(1)] = (8));
} else
{var statearr_58275_58302 = state_58271__$1;(statearr_58275_58302[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58272 === (1)))
{var state_58271__$1 = state_58271;var statearr_58276_58303 = state_58271__$1;(statearr_58276_58303[(2)] = null);
(statearr_58276_58303[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58272 === (4)))
{var state_58271__$1 = state_58271;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58271__$1,(7),c);
} else
{if((state_val_58272 === (6)))
{var inst_58267 = (state_58271[(2)]);var state_58271__$1 = state_58271;var statearr_58277_58304 = state_58271__$1;(statearr_58277_58304[(2)] = inst_58267);
(statearr_58277_58304[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58272 === (3)))
{var inst_58269 = (state_58271[(2)]);var state_58271__$1 = state_58271;return cljs.core.async.impl.ioc_helpers.return_chan(state_58271__$1,inst_58269);
} else
{if((state_val_58272 === (2)))
{var state_58271__$1 = state_58271;var statearr_58278_58305 = state_58271__$1;(statearr_58278_58305[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58272 === (9)))
{var state_58271__$1 = state_58271;var statearr_58280_58306 = state_58271__$1;(statearr_58280_58306[(2)] = null);
(statearr_58280_58306[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58272 === (5)))
{var state_58271__$1 = state_58271;var statearr_58281_58307 = state_58271__$1;(statearr_58281_58307[(2)] = null);
(statearr_58281_58307[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58272 === (10)))
{var inst_58263 = (state_58271[(2)]);var state_58271__$1 = (function (){var statearr_58282 = state_58271;(statearr_58282[(8)] = inst_58263);
return statearr_58282;
})();var statearr_58283_58308 = state_58271__$1;(statearr_58283_58308[(2)] = null);
(statearr_58283_58308[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_58272 === (8)))
{var inst_58254 = (state_58271[(7)]);var inst_58257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58254,(0),null);var inst_58258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58254,(1),null);var inst_58259 = stuttaford.om.common.config.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"debug?","debug?",-1831756173));var inst_58260 = (function (){var G__58284 = self__.data;var G__58285 = inst_58257;var G__58286 = inst_58258;var G__58287 = inst_58259;return (stuttaford.radiant.actions.perform_action.cljs$core$IFn$_invoke$arity$4 ? stuttaford.radiant.actions.perform_action.cljs$core$IFn$_invoke$arity$4(G__58284,G__58285,G__58286,G__58287) : stuttaford.radiant.actions.perform_action.call(null,G__58284,G__58285,G__58286,G__58287));
})();var state_58271__$1 = state_58271;var statearr_58288_58309 = state_58271__$1;(statearr_58288_58309[(2)] = inst_58260);
(statearr_58288_58309[(1)] = (10));
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
});})(c__22689__auto___58300,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58182,input_schema58183,input_checker58184,output_checker58185,vec__58179,opts__24145__auto__))
;return ((function (switch__22674__auto__,c__22689__auto___58300,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58182,input_schema58183,input_checker58184,output_checker58185,vec__58179,opts__24145__auto__){
return (function() {
var state_machine__22675__auto__ = null;
var state_machine__22675__auto____0 = (function (){var statearr_58292 = [null,null,null,null,null,null,null,null,null];(statearr_58292[(0)] = state_machine__22675__auto__);
(statearr_58292[(1)] = (1));
return statearr_58292;
});
var state_machine__22675__auto____1 = (function (state_58271){while(true){
var ret_value__22676__auto__ = (function (){try{while(true){
var result__22677__auto__ = switch__22674__auto__(state_58271);if(cljs.core.keyword_identical_QMARK_(result__22677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22677__auto__;
}
break;
}
}catch (e58293){if((e58293 instanceof Object))
{var ex__22678__auto__ = e58293;var statearr_58294_58310 = state_58271;(statearr_58294_58310[(5)] = ex__22678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_58271);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e58293;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__58311 = state_58271;
state_58271 = G__58311;
continue;
}
} else
{return ret_value__22676__auto__;
}
break;
}
});
state_machine__22675__auto__ = function(state_58271){
switch(arguments.length){
case 0:
return state_machine__22675__auto____0.call(this);
case 1:
return state_machine__22675__auto____1.call(this,state_58271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22675__auto____0;
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22675__auto____1;
return state_machine__22675__auto__;
})()
;})(switch__22674__auto__,c__22689__auto___58300,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58182,input_schema58183,input_checker58184,output_checker58185,vec__58179,opts__24145__auto__))
})();var state__22691__auto__ = (function (){var statearr_58295 = (function (){return (f__22690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22690__auto__.cljs$core$IFn$_invoke$arity$0() : f__22690__auto__.call(null));
})();(statearr_58295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22689__auto___58300);
return statearr_58295;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22691__auto__);
});})(c__22689__auto___58300,c,___$1,owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58182,input_schema58183,input_checker58184,output_checker58185,vec__58179,opts__24145__auto__))
);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-data-source","set-data-source",-1371173368),cljs.core.ffirst(new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574).cljs$core$IFn$_invoke$arity$1(self__.data))], null));
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58182,input_schema58183,input_checker58184,output_checker58185,vec__58179,opts__24145__auto__))
;
stuttaford.radiant.t58243.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58182,input_schema58183,input_checker58184,output_checker58185,vec__58179,opts__24145__auto__){
return (function (_58245){var self__ = this;
var _58245__$1 = this;return self__.meta58244;
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58182,input_schema58183,input_checker58184,output_checker58185,vec__58179,opts__24145__auto__))
;
stuttaford.radiant.t58243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58182,input_schema58183,input_checker58184,output_checker58185,vec__58179,opts__24145__auto__){
return (function (_58245,meta58244__$1){var self__ = this;
var _58245__$1 = this;return (new stuttaford.radiant.t58243(self__.app_view,self__.owner,self__.view,self__.data,self__.p__58060,self__.owner58058,self__.schema_visible_QMARK_,self__.data__24144__auto__,self__.opts__24145__auto__,self__.fnk58181,self__.output_checker58185,self__.vec__58179,self__.map58180,self__.input_schema58183,self__.input_checker58184,self__.validate__837__auto__,self__.output_schema58182,self__.ufv__,self__.G__58186,meta58244__$1));
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58182,input_schema58183,input_checker58184,output_checker58185,vec__58179,opts__24145__auto__))
;
stuttaford.radiant.__GT_t58243 = ((function (owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58182,input_schema58183,input_checker58184,output_checker58185,vec__58179,opts__24145__auto__){
return (function __GT_t58243(app_view__$1,owner__$1,view__$1,data__$1,p__58060__$1,owner58058__$1,schema_visible_QMARK___$1,data__24144__auto____$1,opts__24145__auto____$1,fnk58181__$1,output_checker58185__$1,vec__58179__$1,map58180__$1,input_schema58183__$1,input_checker58184__$1,validate__837__auto____$1,output_schema58182__$1,ufv____$1,G__58186__$1,meta58244){return (new stuttaford.radiant.t58243(app_view__$1,owner__$1,view__$1,data__$1,p__58060__$1,owner58058__$1,schema_visible_QMARK___$1,data__24144__auto____$1,opts__24145__auto____$1,fnk58181__$1,output_checker58185__$1,vec__58179__$1,map58180__$1,input_schema58183__$1,input_checker58184__$1,validate__837__auto____$1,output_schema58182__$1,ufv____$1,G__58186__$1,meta58244));
});})(owner,schema_visible_QMARK_,view,data,validate__837__auto__,ufv__,output_schema58182,input_schema58183,input_checker58184,output_checker58185,vec__58179,opts__24145__auto__))
;
}
return (new stuttaford.radiant.t58243(app_view,owner,view,data,p__58060,owner58058,schema_visible_QMARK_,data__24144__auto__,opts__24145__auto__,fnk58181,output_checker58185,vec__58179,map58180,input_schema58183,input_checker58184,validate__837__auto__,output_schema58182,ufv__,G__58186,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___58312 = (function (){var G__58296 = o__840__auto__;return (output_checker58185.cljs$core$IFn$_invoke$arity$1 ? output_checker58185.cljs$core$IFn$_invoke$arity$1(G__58296) : output_checker58185.call(null,G__58296));
})();if(cljs.core.truth_(temp__4126__auto___58312))
{var error__839__auto___58313 = temp__4126__auto___58312;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk58181","fnk58181",-680619508,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___58313], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema58182,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___58313], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema58182,input_schema58183,input_checker58184,output_checker58185,vec__58179,opts__24145__auto__))
,schema.core.make_fn_schema(output_schema58182,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema58183], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24145__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner58058,new cljs.core.Keyword(null,"data","data",-232669377),data__24144__auto__], null));
};
var app_view = function (data__24144__auto__,owner58058,var_args){
var p__58060 = null;if (arguments.length > 2) {
  p__58060 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_view__delegate.call(this,data__24144__auto__,owner58058,p__58060);};
app_view.cljs$lang$maxFixedArity = 2;
app_view.cljs$lang$applyTo = (function (arglist__58314){
var data__24144__auto__ = cljs.core.first(arglist__58314);
arglist__58314 = cljs.core.next(arglist__58314);
var owner58058 = cljs.core.first(arglist__58314);
var p__58060 = cljs.core.rest(arglist__58314);
return app_view__delegate(data__24144__auto__,owner58058,p__58060);
});
app_view.cljs$core$IFn$_invoke$arity$variadic = app_view__delegate;
return app_view;
})()
;
stuttaford.radiant.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__24113__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.radiant.app_view,cursor__24113__auto__);
});
var __GT_app_view__2 = (function (cursor__24113__auto__,m58059){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.radiant.app_view,cursor__24113__auto__,m58059);
});
__GT_app_view = function(cursor__24113__auto__,m58059){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__24113__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__24113__auto__,m58059);
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