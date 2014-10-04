goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('om.dom');
goog.require('om.dom');
om.core._STAR_read_enabled_STAR_ = false;
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core.IDisplayName = (function (){var obj34658 = {};return obj34658;
})();
om.core.display_name = (function display_name(this$){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.om$core$IDisplayName$display_name$arity$1;
} else
{return and__19255__auto__;
}
})())
{return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (om.core.display_name[(function (){var G__34662 = x__20512__auto__;return goog.typeOf(G__34662);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core.display_name["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});
om.core.IInitState = (function (){var obj34664 = {};return obj34664;
})();
om.core.init_state = (function init_state(this$){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.om$core$IInitState$init_state$arity$1;
} else
{return and__19255__auto__;
}
})())
{return this$.om$core$IInitState$init_state$arity$1(this$);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (om.core.init_state[(function (){var G__34668 = x__20512__auto__;return goog.typeOf(G__34668);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core.init_state["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});
om.core.IShouldUpdate = (function (){var obj34670 = {};return obj34670;
})();
om.core.should_update = (function should_update(this$,next_props,next_state){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.om$core$IShouldUpdate$should_update$arity$3;
} else
{return and__19255__auto__;
}
})())
{return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (om.core.should_update[(function (){var G__34674 = x__20512__auto__;return goog.typeOf(G__34674);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core.should_update["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IWillMount = (function (){var obj34676 = {};return obj34676;
})();
om.core.will_mount = (function will_mount(this$){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.om$core$IWillMount$will_mount$arity$1;
} else
{return and__19255__auto__;
}
})())
{return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (om.core.will_mount[(function (){var G__34680 = x__20512__auto__;return goog.typeOf(G__34680);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core.will_mount["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IDidMount = (function (){var obj34682 = {};return obj34682;
})();
om.core.did_mount = (function did_mount(this$){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.om$core$IDidMount$did_mount$arity$1;
} else
{return and__19255__auto__;
}
})())
{return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (om.core.did_mount[(function (){var G__34686 = x__20512__auto__;return goog.typeOf(G__34686);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core.did_mount["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUnmount = (function (){var obj34688 = {};return obj34688;
})();
om.core.will_unmount = (function will_unmount(this$){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else
{return and__19255__auto__;
}
})())
{return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (om.core.will_unmount[(function (){var G__34692 = x__20512__auto__;return goog.typeOf(G__34692);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core.will_unmount["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUpdate = (function (){var obj34694 = {};return obj34694;
})();
om.core.will_update = (function will_update(this$,next_props,next_state){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.om$core$IWillUpdate$will_update$arity$3;
} else
{return and__19255__auto__;
}
})())
{return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (om.core.will_update[(function (){var G__34698 = x__20512__auto__;return goog.typeOf(G__34698);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core.will_update["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IDidUpdate = (function (){var obj34700 = {};return obj34700;
})();
om.core.did_update = (function did_update(this$,prev_props,prev_state){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.om$core$IDidUpdate$did_update$arity$3;
} else
{return and__19255__auto__;
}
})())
{return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (om.core.did_update[(function (){var G__34704 = x__20512__auto__;return goog.typeOf(G__34704);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core.did_update["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});
om.core.IWillReceiveProps = (function (){var obj34706 = {};return obj34706;
})();
om.core.will_receive_props = (function will_receive_props(this$,next_props){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else
{return and__19255__auto__;
}
})())
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (om.core.will_receive_props[(function (){var G__34710 = x__20512__auto__;return goog.typeOf(G__34710);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core.will_receive_props["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});
om.core.IRender = (function (){var obj34712 = {};return obj34712;
})();
om.core.render = (function render(this$){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.om$core$IRender$render$arity$1;
} else
{return and__19255__auto__;
}
})())
{return this$.om$core$IRender$render$arity$1(this$);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (om.core.render[(function (){var G__34716 = x__20512__auto__;return goog.typeOf(G__34716);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core.render["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IRender.render",this$);
}
}
})().call(null,this$);
}
});
om.core.IRenderState = (function (){var obj34718 = {};return obj34718;
})();
om.core.render_state = (function render_state(this$,state){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.om$core$IRenderState$render_state$arity$2;
} else
{return and__19255__auto__;
}
})())
{return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (om.core.render_state[(function (){var G__34722 = x__20512__auto__;return goog.typeOf(G__34722);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core.render_state["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});
om.core.IOmSwap = (function (){var obj34724 = {};return obj34724;
})();
om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else
{return and__19255__auto__;
}
})())
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (om.core._om_swap_BANG_[(function (){var G__34728 = x__20512__auto__;return goog.typeOf(G__34728);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core._om_swap_BANG_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});
om.core.IGetState = (function (){var obj34730 = {};return obj34730;
})();
om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.om$core$IGetState$_get_state$arity$1;
} else
{return and__19255__auto__;
}
})())
{return this$.om$core$IGetState$_get_state$arity$1(this$);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (om.core._get_state[(function (){var G__34736 = x__20512__auto__;return goog.typeOf(G__34736);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core._get_state["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.om$core$IGetState$_get_state$arity$2;
} else
{return and__19255__auto__;
}
})())
{return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (om.core._get_state[(function (){var G__34738 = x__20512__auto__;return goog.typeOf(G__34738);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core._get_state["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_state__1.call(this,this$);
case 2:
return _get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_state.cljs$core$IFn$_invoke$arity$1 = _get_state__1;
_get_state.cljs$core$IFn$_invoke$arity$2 = _get_state__2;
return _get_state;
})()
;
om.core.IGetRenderState = (function (){var obj34740 = {};return obj34740;
})();
om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else
{return and__19255__auto__;
}
})())
{return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (om.core._get_render_state[(function (){var G__34746 = x__20512__auto__;return goog.typeOf(G__34746);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core._get_render_state["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else
{return and__19255__auto__;
}
})())
{return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (om.core._get_render_state[(function (){var G__34748 = x__20512__auto__;return goog.typeOf(G__34748);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core._get_render_state["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_render_state__1.call(this,this$);
case 2:
return _get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_render_state.cljs$core$IFn$_invoke$arity$1 = _get_render_state__1;
_get_render_state.cljs$core$IFn$_invoke$arity$2 = _get_render_state__2;
return _get_render_state;
})()
;
om.core.ISetState = (function (){var obj34750 = {};return obj34750;
})();
om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___3 = (function (this$,val,render){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else
{return and__19255__auto__;
}
})())
{return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (om.core._set_state_BANG_[(function (){var G__34756 = x__20512__auto__;return goog.typeOf(G__34756);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core._set_state_BANG_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var _set_state_BANG___4 = (function (this$,ks,val,render){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else
{return and__19255__auto__;
}
})())
{return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (om.core._set_state_BANG_[(function (){var G__34758 = x__20512__auto__;return goog.typeOf(G__34758);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core._set_state_BANG_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});
_set_state_BANG_ = function(this$,ks,val,render){
switch(arguments.length){
case 3:
return _set_state_BANG___3.call(this,this$,ks,val);
case 4:
return _set_state_BANG___4.call(this,this$,ks,val,render);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = _set_state_BANG___3;
_set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = _set_state_BANG___4;
return _set_state_BANG_;
})()
;
om.core.IRenderQueue = (function (){var obj34760 = {};return obj34760;
})();
om.core._get_queue = (function _get_queue(this$){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else
{return and__19255__auto__;
}
})())
{return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (om.core._get_queue[(function (){var G__34764 = x__20512__auto__;return goog.typeOf(G__34764);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core._get_queue["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});
om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else
{return and__19255__auto__;
}
})())
{return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (om.core._queue_render_BANG_[(function (){var G__34768 = x__20512__auto__;return goog.typeOf(G__34768);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core._queue_render_BANG_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else
{return and__19255__auto__;
}
})())
{return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (om.core._empty_queue_BANG_[(function (){var G__34772 = x__20512__auto__;return goog.typeOf(G__34772);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core._empty_queue_BANG_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});
om.core.IValue = (function (){var obj34774 = {};return obj34774;
})();
om.core._value = (function _value(x){if((function (){var and__19255__auto__ = x;if(and__19255__auto__)
{return x.om$core$IValue$_value$arity$1;
} else
{return and__19255__auto__;
}
})())
{return x.om$core$IValue$_value$arity$1(x);
} else
{var x__20512__auto__ = (((x == null))?null:x);return (function (){var or__19267__auto__ = (om.core._value[(function (){var G__34778 = x__20512__auto__;return goog.typeOf(G__34778);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core._value["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IValue.-value",x);
}
}
})().call(null,x);
}
});
(om.core.IValue["_"] = true);
(om.core._value["_"] = (function (x){return x;
}));
om.core.ICursor = (function (){var obj34780 = {};return obj34780;
})();
om.core._path = (function _path(cursor){if((function (){var and__19255__auto__ = cursor;if(and__19255__auto__)
{return cursor.om$core$ICursor$_path$arity$1;
} else
{return and__19255__auto__;
}
})())
{return cursor.om$core$ICursor$_path$arity$1(cursor);
} else
{var x__20512__auto__ = (((cursor == null))?null:cursor);return (function (){var or__19267__auto__ = (om.core._path[(function (){var G__34784 = x__20512__auto__;return goog.typeOf(G__34784);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core._path["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});
om.core._state = (function _state(cursor){if((function (){var and__19255__auto__ = cursor;if(and__19255__auto__)
{return cursor.om$core$ICursor$_state$arity$1;
} else
{return and__19255__auto__;
}
})())
{return cursor.om$core$ICursor$_state$arity$1(cursor);
} else
{var x__20512__auto__ = (((cursor == null))?null:cursor);return (function (){var or__19267__auto__ = (om.core._state[(function (){var G__34788 = x__20512__auto__;return goog.typeOf(G__34788);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core._state["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});
om.core.IToCursor = (function (){var obj34790 = {};return obj34790;
})();
om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){if((function (){var and__19255__auto__ = value;if(and__19255__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$2;
} else
{return and__19255__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else
{var x__20512__auto__ = (((value == null))?null:value);return (function (){var or__19267__auto__ = (om.core._to_cursor[(function (){var G__34796 = x__20512__auto__;return goog.typeOf(G__34796);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core._to_cursor["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){if((function (){var and__19255__auto__ = value;if(and__19255__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$3;
} else
{return and__19255__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else
{var x__20512__auto__ = (((value == null))?null:value);return (function (){var or__19267__auto__ = (om.core._to_cursor[(function (){var G__34798 = x__20512__auto__;return goog.typeOf(G__34798);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core._to_cursor["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
return _to_cursor;
})()
;
om.core.ICursorDerive = (function (){var obj34800 = {};return obj34800;
})();
om.core._derive = (function _derive(cursor,derived,state,path){if((function (){var and__19255__auto__ = cursor;if(and__19255__auto__)
{return cursor.om$core$ICursorDerive$_derive$arity$4;
} else
{return and__19255__auto__;
}
})())
{return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else
{var x__20512__auto__ = (((cursor == null))?null:cursor);return (function (){var or__19267__auto__ = (om.core._derive[(function (){var G__34804 = x__20512__auto__;return goog.typeOf(G__34804);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core._derive["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});
(om.core.ICursorDerive["_"] = true);
(om.core._derive["_"] = (function (this$,derived,state,path){var G__34805 = derived;var G__34806 = state;var G__34807 = path;return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__34805,G__34806,G__34807) : om.core.to_cursor.call(null,G__34805,G__34806,G__34807));
}));
om.core.path = (function path(cursor){return om.core._path(cursor);
});
om.core.value = (function value(cursor){return om.core._value(cursor);
});
om.core.state = (function state(cursor){return om.core._state(cursor);
});
om.core.ITransact = (function (){var obj34809 = {};return obj34809;
})();
om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){if((function (){var and__19255__auto__ = cursor;if(and__19255__auto__)
{return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else
{return and__19255__auto__;
}
})())
{return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else
{var x__20512__auto__ = (((cursor == null))?null:cursor);return (function (){var or__19267__auto__ = (om.core._transact_BANG_[(function (){var G__34813 = x__20512__auto__;return goog.typeOf(G__34813);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core._transact_BANG_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});
om.core.INotify = (function (){var obj34815 = {};return obj34815;
})();
om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){if((function (){var and__19255__auto__ = x;if(and__19255__auto__)
{return x.om$core$INotify$_listen_BANG_$arity$3;
} else
{return and__19255__auto__;
}
})())
{return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else
{var x__20512__auto__ = (((x == null))?null:x);return (function (){var or__19267__auto__ = (om.core._listen_BANG_[(function (){var G__34819 = x__20512__auto__;return goog.typeOf(G__34819);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core._listen_BANG_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});
om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){if((function (){var and__19255__auto__ = x;if(and__19255__auto__)
{return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else
{return and__19255__auto__;
}
})())
{return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else
{var x__20512__auto__ = (((x == null))?null:x);return (function (){var or__19267__auto__ = (om.core._unlisten_BANG_[(function (){var G__34823 = x__20512__auto__;return goog.typeOf(G__34823);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core._unlisten_BANG_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});
om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){if((function (){var and__19255__auto__ = x;if(and__19255__auto__)
{return x.om$core$INotify$_notify_BANG_$arity$3;
} else
{return and__19255__auto__;
}
})())
{return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else
{var x__20512__auto__ = (((x == null))?null:x);return (function (){var or__19267__auto__ = (om.core._notify_BANG_[(function (){var G__34827 = x__20512__auto__;return goog.typeOf(G__34827);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (om.core._notify_BANG_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});
om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){var old_state = (function (){var G__34837 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34837) : cljs.core.deref.call(null,G__34837));
})();var path = cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__34838 = cursor;return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__34838) : om.core.path.call(null,G__34838));
})(),korks);var ret = (((function (){var G__34839 = state;if(G__34839)
{var bit__20565__auto__ = null;if(cljs.core.truth_((function (){var or__19267__auto__ = bit__20565__auto__;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return G__34839.om$core$IOmSwap$;
}
})()))
{return true;
} else
{if((!G__34839.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__34839);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__34839);
}
})())?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f)
));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178)))
{return null;
} else
{var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__34840 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34840) : cljs.core.deref.call(null,G__34840));
})(),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),(function (){var G__34841 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34841) : cljs.core.deref.call(null,G__34841));
})()], null);if(!((tag == null)))
{var G__34842 = cursor;var G__34843 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag);return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__34842,G__34843) : om.core.notify_STAR_.call(null,G__34842,G__34843));
} else
{var G__34844 = cursor;var G__34845 = tx_data;return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__34844,G__34845) : om.core.notify_STAR_.call(null,G__34844,G__34845));
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){var G__34847 = x;if(G__34847)
{var bit__20565__auto__ = null;if(cljs.core.truth_((function (){var or__19267__auto__ = bit__20565__auto__;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return G__34847.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__34847.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__34847);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__34847);
}
});
om.core.children = (function children(node){var c = node.props.children;if(cljs.core.fn_QMARK_(c))
{return node.props.children = (function (){var _STAR_read_enabled_STAR_34850 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var G__34851 = node;return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(G__34851) : c.call(null,G__34851));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_34850;
}})();
} else
{return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function get_props(x){return (x.props["__om_cursor"]);
});
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){return om.core._get_state.cljs$core$IFn$_invoke$arity$1(owner);
});
var get_state__2 = (function (owner,korks){var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._get_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){if((owner == null))
{return null;
} else
{return (owner.props["__om_shared"]);
}
});
var get_shared__2 = (function (owner,korks){if(!(cljs.core.sequential_QMARK_(korks)))
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else
{if(cljs.core.empty_QMARK_(korks))
{return get_shared.cljs$core$IFn$_invoke$arity$1(owner);
} else
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);

}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){var state = owner.state;var temp__4126__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(temp__4126__auto__))
{var pending_state = temp__4126__auto__;var G__34856 = state;(G__34856["__om_prev_state"] = (state["__om_state"]));
(G__34856["__om_state"] = pending_state);
(G__34856["__om_pending_state"] = null);
return G__34856;
} else
{return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){return merge_props_state.cljs$core$IFn$_invoke$arity$2(owner,null);
});
var merge_props_state__2 = (function (owner,props){var props__$1 = (function (){var or__19267__auto__ = props;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return owner.props;
}
})();var temp__4126__auto__ = (props__$1["__om_state"]);if(cljs.core.truth_(temp__4126__auto__))
{var props_state = temp__4126__auto__;var state = owner.state;(state["__om_pending_state"] = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__19267__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return (state["__om_state"]);
}
})(),props_state], 0)));
return (props__$1["__om_state"] = null);
} else
{return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){var this$ = this;var c = om.core.children(this$);if((function (){var G__34859 = c;if(G__34859)
{var bit__20565__auto__ = null;if(cljs.core.truth_((function (){var or__19267__auto__ = bit__20565__auto__;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return G__34859.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__34859.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__34859);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__34859);
}
})())
{var state_34886 = this$.state;var _STAR_read_enabled_STAR_34860_34887 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.did_update(c,om.core.get_props({"props": prev_props}),(function (){var or__19267__auto__ = (state_34886["__om_prev_state"]);if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return (state_34886["__om_state"]);
}
})());
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_34860_34887;
}} else
{}
return (this$.state["__om_prev_state"] = null);
}),(function (){var this$ = this;var c = om.core.children(this$);if((function (){var G__34861 = c;if(G__34861)
{var bit__20565__auto__ = null;if(cljs.core.truth_((function (){var or__19267__auto__ = bit__20565__auto__;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return G__34861.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__34861.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__34861);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__34861);
}
})())
{var _STAR_read_enabled_STAR_34862 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.will_unmount(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_34862;
}} else
{return null;
}
}),(function (next_props){var this$ = this;var c = om.core.children(this$);if((function (){var G__34863 = c;if(G__34863)
{var bit__20565__auto__ = null;if(cljs.core.truth_((function (){var or__19267__auto__ = bit__20565__auto__;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return G__34863.om$core$IWillReceiveProps$;
}
})()))
{return true;
} else
{if((!G__34863.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__34863);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__34863);
}
})())
{var _STAR_read_enabled_STAR_34864 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.will_receive_props(c,om.core.get_props({"props": next_props}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_34864;
}} else
{return null;
}
}),(function (next_props,next_state){var this$ = this;var _STAR_read_enabled_STAR_34865 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$.props;var state = this$.state;var c = om.core.children(this$);om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(this$,next_props);
if((function (){var G__34866 = c;if(G__34866)
{var bit__20565__auto__ = null;if(cljs.core.truth_((function (){var or__19267__auto__ = bit__20565__auto__;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return G__34866.om$core$IShouldUpdate$;
}
})()))
{return true;
} else
{if((!G__34866.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__34866);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__34866);
}
})())
{return om.core.should_update(c,om.core.get_props({"props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else
{var cursor = (props["__om_cursor"]);var next_cursor = (next_props["__om_cursor"]);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._value(cursor),om.core._value(next_cursor)))
{return true;
} else
{if((om.core.cursor_QMARK_(cursor)) && (om.core.cursor_QMARK_(next_cursor)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._path(cursor),om.core._path(next_cursor))))
{return true;
} else
{if(!(((state["__om_pending_state"]) == null)))
{return true;
} else
{if(!(((props["__om_index"]) === (next_props["__om_index"]))))
{return true;
} else
{return false;

}
}
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_34865;
}}),(function (){var this$ = this;var c = om.core.children(this$);var props = this$.props;var _STAR_read_enabled_STAR_34867 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
if((function (){var G__34868 = c;if(G__34868)
{var bit__20565__auto__ = null;if(cljs.core.truth_((function (){var or__19267__auto__ = bit__20565__auto__;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return G__34868.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__34868.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__34868);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__34868);
}
})())
{var _STAR_parent_STAR_34869 = om.core._STAR_parent_STAR_;var _STAR_state_STAR_34870 = om.core._STAR_state_STAR_;var _STAR_instrument_STAR_34871 = om.core._STAR_instrument_STAR_;try{om.core._STAR_parent_STAR_ = this$;
om.core._STAR_state_STAR_ = (props["__om_app_state"]);
om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);
return om.core.render(c);
}finally {om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_34871;
om.core._STAR_state_STAR_ = _STAR_state_STAR_34870;
om.core._STAR_parent_STAR_ = _STAR_parent_STAR_34869;
}} else
{if((function (){var G__34872 = c;if(G__34872)
{var bit__20565__auto__ = null;if(cljs.core.truth_((function (){var or__19267__auto__ = bit__20565__auto__;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return G__34872.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__34872.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__34872);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__34872);
}
})())
{var _STAR_parent_STAR_34873 = om.core._STAR_parent_STAR_;var _STAR_state_STAR_34874 = om.core._STAR_state_STAR_;var _STAR_instrument_STAR_34875 = om.core._STAR_instrument_STAR_;try{om.core._STAR_parent_STAR_ = this$;
om.core._STAR_state_STAR_ = (props["__om_app_state"]);
om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);
return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
}finally {om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_34875;
om.core._STAR_state_STAR_ = _STAR_state_STAR_34874;
om.core._STAR_parent_STAR_ = _STAR_parent_STAR_34873;
}} else
{return c;

}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_34867;
}}),(function (next_props,next_state){var this$ = this;var c_34888 = om.core.children(this$);if((function (){var G__34876 = c_34888;if(G__34876)
{var bit__20565__auto__ = null;if(cljs.core.truth_((function (){var or__19267__auto__ = bit__20565__auto__;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return G__34876.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__34876.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__34876);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__34876);
}
})())
{var state_34889 = this$.state;var _STAR_read_enabled_STAR_34877_34890 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_update(c_34888,om.core.get_props({"props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_34877_34890;
}} else
{}
return om.core.merge_pending_state(this$);
}),(function (){var this$ = this;var c = om.core.children(this$);var props = this$.props;var istate = (function (){var or__19267__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);var ret = {"__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(((function (){var G__34878 = c;if(G__34878)
{var bit__20565__auto__ = null;if(cljs.core.truth_((function (){var or__19267__auto__ = bit__20565__auto__;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return G__34878.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__34878.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__34878);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__34878);
}
})())?(function (){var _STAR_read_enabled_STAR_34879 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.init_state(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_34879;
}})():null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693))], 0)), "__om_id": (function (){var or__19267__auto__ = id;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};(props["__om_init_state"] = null);
return ret;
}),(function (){var this$ = this;var c = om.core.children(this$);if((function (){var G__34880 = c;if(G__34880)
{var bit__20565__auto__ = null;if(cljs.core.truth_((function (){var or__19267__auto__ = bit__20565__auto__;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return G__34880.om$core$IDidMount$;
}
})()))
{return true;
} else
{if((!G__34880.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__34880);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__34880);
}
})())
{var _STAR_read_enabled_STAR_34881 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.did_mount(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_34881;
}} else
{return null;
}
}),(function (){var this$ = this;var c = om.core.children(this$);if((function (){var G__34882 = c;if(G__34882)
{var bit__20565__auto__ = null;if(cljs.core.truth_((function (){var or__19267__auto__ = bit__20565__auto__;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return G__34882.om$core$IDisplayName$;
}
})()))
{return true;
} else
{if((!G__34882.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__34882);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__34882);
}
})())
{var _STAR_read_enabled_STAR_34883 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.display_name(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_34883;
}} else
{return null;
}
}),(function (){var this$ = this;om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);
var c_34891 = om.core.children(this$);if((function (){var G__34884 = c_34891;if(G__34884)
{var bit__20565__auto__ = null;if(cljs.core.truth_((function (){var or__19267__auto__ = bit__20565__auto__;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return G__34884.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__34884.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__34884);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__34884);
}
})())
{var _STAR_read_enabled_STAR_34885_34892 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_mount(c_34891);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_34885_34892;
}} else
{}
return om.core.merge_pending_state(this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){var x34896 = obj;x34896.om$core$IGetState$ = true;
x34896.om$core$IGetState$_get_state$arity$1 = ((function (x34896){
return (function (this$){var this$__$1 = this;var state = this$__$1.state;var or__19267__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return (state["__om_state"]);
}
});})(x34896))
;
x34896.om$core$IGetState$_get_state$arity$2 = ((function (x34896){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x34896))
;
x34896.om$core$IGetRenderState$ = true;
x34896.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x34896){
return (function (this$){var this$__$1 = this;return (this$__$1.state["__om_state"]);
});})(x34896))
;
x34896.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x34896){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x34896))
;
x34896.om$core$ISetState$ = true;
x34896.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x34896){
return (function (this$,val,render){var this$__$1 = this;var _STAR_read_enabled_STAR_34897 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$__$1.props;var app_state = (props["__om_app_state"]);(this$__$1.state["__om_pending_state"] = val);
if(cljs.core.truth_((function (){var and__19255__auto__ = !((app_state == null));if(and__19255__auto__)
{return render;
} else
{return and__19255__auto__;
}
})()))
{return om.core._queue_render_BANG_(app_state,this$__$1);
} else
{return null;
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_34897;
}});})(x34896))
;
x34896.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x34896){
return (function (this$,ks,val,render){var this$__$1 = this;var _STAR_read_enabled_STAR_34898 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$__$1.props;var state = this$__$1.state;var pstate = om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1);var app_state = (props["__om_app_state"]);(state["__om_pending_state"] = cljs.core.assoc_in(pstate,ks,val));
if(cljs.core.truth_((function (){var and__19255__auto__ = !((app_state == null));if(and__19255__auto__)
{return render;
} else
{return and__19255__auto__;
}
})()))
{return om.core._queue_render_BANG_(app_state,this$__$1);
} else
{return null;
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_34898;
}});})(x34896))
;
return x34896;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods));

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2162591503;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.cljs$lang$type = true;
om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";
om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"om.core/MapCursor");
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$__$1,k,null);
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{var v = cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.value,k,not_found);if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,not_found)))
{return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k));
} else
{return not_found;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._pr_writer(self__.value,writer,opts);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.om$core$ICursor$ = true;
om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.meta(self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._count(self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.hash(self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_(other))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.om$core$IValue$ = true;
om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core.empty(self__.value),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._dissoc(self__.value,k),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.om$core$ITransact$ = true;
om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._contains_key_QMARK_(self__.value,k);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._assoc(self__.value,k,v),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((cljs.core.count(self__.value) > (0)))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__34900){var vec__34901 = p__34900;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34901,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34901,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else
{return null;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.call = (function() {
var G__34903 = null;
var G__34903__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__34903__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__34903 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__34903__2.call(this,self__,k);
case 3:
return G__34903__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34903.cljs$core$IFn$_invoke$arity$2 = G__34903__2;
G__34903.cljs$core$IFn$_invoke$arity$3 = G__34903__3;
return G__34903;
})()
;
om.core.MapCursor.prototype.apply = (function (self__,args34899){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args34899)));
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__34902 = self__.state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34902) : cljs.core.deref.call(null,G__34902));
})(),self__.path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
});
om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path){return (new om.core.MapCursor(value,state,path));
});

/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2179375903;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.cljs$lang$type = true;
om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";
om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"om.core/IndexedCursor");
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,null);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,not_found);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((n < cljs.core._count(self__.value)))
{return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
} else
{return not_found;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._pr_writer(self__.value,writer,opts);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.om$core$ICursor$ = true;
om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.meta(self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});
om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._count(self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive(this$__$1,cljs.core._peek(self__.value),self__.state,self__.path);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive(this$__$1,cljs.core._pop(self__.value),self__.state,self__.path);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.hash(self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_(other))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.om$core$IValue$ = true;
om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.IndexedCursor(cljs.core.empty(self__.value),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.om$core$ITransact$ = true;
om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._contains_key_QMARK_(self__.value,k);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive(this$__$1,cljs.core._assoc_n(self__.value,n,v),self__.state,self__.path);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((cljs.core.count(self__.value) > (0)))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (v,i){return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
} else
{return null;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.IndexedCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.IndexedCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.call = (function() {
var G__34906 = null;
var G__34906__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__34906__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__34906 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__34906__2.call(this,self__,k);
case 3:
return G__34906__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34906.cljs$core$IFn$_invoke$arity$2 = G__34906__2;
G__34906.cljs$core$IFn$_invoke$arity$3 = G__34906__3;
return G__34906;
})()
;
om.core.IndexedCursor.prototype.apply = (function (self__,args34904){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args34904)));
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__34905 = self__.state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34905) : cljs.core.deref.call(null,G__34905));
})(),self__.path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
});
om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){return (new om.core.IndexedCursor(value,state,path));
});
om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){var x34909 = cljs.core.clone(val);x34909.cljs$core$IEquiv$ = true;
x34909.cljs$core$IEquiv$_equiv$arity$2 = ((function (x34909){
return (function (_,other){var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_(other))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});})(x34909))
;
x34909.om$core$ITransact$ = true;
x34909.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x34909){
return (function (this$,korks,f,tag){var this$__$1 = this;return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});})(x34909))
;
x34909.om$core$ICursor$ = true;
x34909.om$core$ICursor$_path$arity$1 = ((function (x34909){
return (function (_){var ___$1 = this;return path;
});})(x34909))
;
x34909.om$core$ICursor$_state$arity$1 = ((function (x34909){
return (function (_){var ___$1 = this;return state;
});})(x34909))
;
x34909.cljs$core$IDeref$ = true;
x34909.cljs$core$IDeref$_deref$arity$1 = ((function (x34909){
return (function (this$){var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__34910 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34910) : cljs.core.deref.call(null,G__34910));
})(),path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
});})(x34909))
;
return x34909;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){return to_cursor.cljs$core$IFn$_invoke$arity$3(val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){return to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){if(om.core.cursor_QMARK_(val))
{return val;
} else
{if((function (){var G__34919 = val;if(G__34919)
{var bit__20565__auto__ = null;if(cljs.core.truth_((function (){var or__19267__auto__ = bit__20565__auto__;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return G__34919.om$core$IToCursor$;
}
})()))
{return true;
} else
{if((!G__34919.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__34919);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__34919);
}
})())
{return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,path);
} else
{if(cljs.core.indexed_QMARK_(val))
{return (new om.core.IndexedCursor(val,state,path));
} else
{if(cljs.core.map_QMARK_(val))
{return (new om.core.MapCursor(val,state,path));
} else
{if((function (){var G__34920 = val;if(G__34920)
{var bit__20565__auto__ = (G__34920.cljs$lang$protocol_mask$partition1$ & (8192));if((bit__20565__auto__) || (G__34920.cljs$core$ICloneable$))
{return true;
} else
{if((!G__34920.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__34920);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__34920);
}
})())
{return om.core.to_cursor_STAR_(val,state,path);
} else
{return val;

}
}
}
}
}
});
to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
return to_cursor;
})()
;
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){var state = om.core._state(cursor);return om.core._notify_BANG_(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((function (){var G__34922 = state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34922) : cljs.core.deref.call(null,G__34922));
})(),state));
});
om.core.refresh_queued = false;
om.core.refresh_set = (function (){var G__34923 = cljs.core.PersistentHashSet.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34923) : cljs.core.atom.call(null,G__34923));
})();
om.core.render_all = (function render_all(){om.core.refresh_queued = false;
var seq__34929 = cljs.core.seq((function (){var G__34933 = om.core.refresh_set;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34933) : cljs.core.deref.call(null,G__34933));
})());var chunk__34930 = null;var count__34931 = (0);var i__34932 = (0);while(true){
if((i__34932 < count__34931))
{var f = chunk__34930.cljs$core$IIndexed$_nth$arity$2(null,i__34932);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__34934 = seq__34929;
var G__34935 = chunk__34930;
var G__34936 = count__34931;
var G__34937 = (i__34932 + (1));
seq__34929 = G__34934;
chunk__34930 = G__34935;
count__34931 = G__34936;
i__34932 = G__34937;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__34929);if(temp__4126__auto__)
{var seq__34929__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__34929__$1))
{var c__20699__auto__ = cljs.core.chunk_first(seq__34929__$1);{
var G__34938 = cljs.core.chunk_rest(seq__34929__$1);
var G__34939 = c__20699__auto__;
var G__34940 = cljs.core.count(c__20699__auto__);
var G__34941 = (0);
seq__34929 = G__34938;
chunk__34930 = G__34939;
count__34931 = G__34940;
i__34932 = G__34941;
continue;
}
} else
{var f = cljs.core.first(seq__34929__$1);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__34942 = cljs.core.next(seq__34929__$1);
var G__34943 = null;
var G__34944 = (0);
var G__34945 = (0);
seq__34929 = G__34942;
chunk__34930 = G__34943;
count__34931 = G__34944;
i__34932 = G__34945;
continue;
}
}
} else
{return null;
}
}
break;
}
});
om.core.roots = (function (){var G__34946 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34946) : cljs.core.atom.call(null,G__34946));
})();
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){if((function (){var or__19267__auto__ = (function (){var G__34951 = x;if(G__34951)
{var bit__20565__auto__ = null;if(cljs.core.truth_((function (){var or__19267__auto__ = bit__20565__auto__;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return G__34951.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__34951.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__34951);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__34951);
}
})();if(or__19267__auto__)
{return or__19267__auto__;
} else
{var G__34952 = x;if(G__34952)
{var bit__20565__auto__ = null;if(cljs.core.truth_((function (){var or__19267__auto____$1 = bit__20565__auto__;if(cljs.core.truth_(or__19267__auto____$1))
{return or__19267__auto____$1;
} else
{return G__34952.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__34952.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__34952);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__34952);
}
}
})())
{return null;
} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Invalid Om component fn, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f.name)+" does not return valid instance"))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))], 0))))));
}
});
om.core.valid_QMARK_ = (function valid_QMARK_(m){return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys(m));
});
om.core.id = (function id(owner){return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var get_descriptor = null;
var get_descriptor__1 = (function (f){return get_descriptor.cljs$core$IFn$_invoke$arity$2(f,null);
});
var get_descriptor__2 = (function (f,descriptor){if(((f["om$descriptor"]) == null))
{(f["om$descriptor"] = (function (){var G__34956 = (function (){var or__19267__auto__ = descriptor;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return om.core.pure_descriptor;
}
})();return React.createClass(G__34956);
})());
} else
{}
return (f["om$descriptor"]);
});
get_descriptor = function(f,descriptor){
switch(arguments.length){
case 1:
return get_descriptor__1.call(this,f);
case 2:
return get_descriptor__2.call(this,f,descriptor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_descriptor.cljs$core$IFn$_invoke$arity$1 = get_descriptor__1;
get_descriptor.cljs$core$IFn$_invoke$arity$2 = get_descriptor__2;
return get_descriptor;
})()
;
om.core.build_STAR_ = (function() {
var build_STAR_ = null;
var build_STAR___2 = (function (f,cursor){return build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){if(om.core.valid_QMARK_(m))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"build options contains invalid keys, only :key, :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose(", ",cljs.core.keys(m))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"valid?","valid?",1428119148,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))], 0))))));
}
if((m == null))
{var shared = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1(f);var G__34976 = {"children": ((function (shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_34977 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var ret = (function (){var G__34978 = cursor;var G__34979 = this$;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__34978,G__34979) : f.call(null,G__34978,G__34979));
})();om.core.valid_component_QMARK_(ret,f);
return ret;
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_34977;
}});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_shared": shared, "__om_cursor": cursor};return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__34976) : ctor.call(null,G__34976));
} else
{var map__34980 = m;var map__34980__$1 = ((cljs.core.seq_QMARK_(map__34980))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34980):map__34980);var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34980__$1,new cljs.core.Keyword(null,"opts","opts",155075701));var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34980__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34980__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34980__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"fn","fn",-1175266204));var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;var G__34981 = cursor;var G__34982 = i;return (dataf.cljs$core$IFn$_invoke$arity$2 ? dataf.cljs$core$IFn$_invoke$arity$2(G__34981,G__34982) : dataf.call(null,G__34981,G__34982));
} else
{var G__34983 = cursor;return (dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(G__34983) : dataf.call(null,G__34983));
}
})():cursor);var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"react-key","react-key",1337881348)));var shared = (function (){var or__19267__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));var G__34984 = {"__om_shared": shared, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_cursor": cursor_SINGLEQUOTE_, "__om_app_state": om.core._STAR_state_STAR_, "key": rkey, "__om_init_state": init_state, "children": (((opts == null))?((function (map__34980,map__34980__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_34985 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var ret = (function (){var G__34986 = cursor_SINGLEQUOTE_;var G__34987 = this$;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__34986,G__34987) : f.call(null,G__34986,G__34987));
})();om.core.valid_component_QMARK_(ret,f);
return ret;
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_34985;
}});})(map__34980,map__34980__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__34980,map__34980__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_34988 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var ret = (function (){var G__34989 = cursor_SINGLEQUOTE_;var G__34990 = this$;var G__34991 = opts;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__34989,G__34990,G__34991) : f.call(null,G__34989,G__34990,G__34991));
})();om.core.valid_component_QMARK_(ret,f);
return ret;
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_34988;
}});})(map__34980,map__34980__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_instrument": om.core._STAR_instrument_STAR_, "__om_state": state};return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__34984) : ctor.call(null,G__34984));

}
});
build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return build_STAR___2.call(this,f,cursor);
case 3:
return build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_STAR_.cljs$core$IFn$_invoke$arity$2 = build_STAR___2;
build_STAR_.cljs$core$IFn$_invoke$arity$3 = build_STAR___3;
return build_STAR_;
})()
;
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a cursor, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument will be
* the cursor and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender or IRenderState
* instance, this instance may implement other React life cycle
* protocols.
* 
* cursor - an ICursor instance
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* :descriptor - a JS object of React methods, will be used to
* construct a React class per Om component function
* encountered. defaults to pure-descriptor.
* 
* Example:
* 
* (build list-of-gadgets cursor
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,cursor){return build.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
});
var build__3 = (function (f,cursor,m){if(!((om.core._STAR_instrument_STAR_ == null)))
{var ret = (function (){var _STAR_read_enabled_STAR_34999 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var G__35000 = f;var G__35001 = cursor;var G__35002 = m;return (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(G__35000,G__35001,G__35002) : om.core._STAR_instrument_STAR_.call(null,G__35000,G__35001,G__35002));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_34999;
}})();if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268)))
{return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
} else
{return ret;
}
} else
{return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}
});
build = function(f,cursor,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,cursor);
case 3:
return build__3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of cursors, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){return build_all.cljs$core$IFn$_invoke$arity$3(f,xs,null);
});
var build_all__3 = (function (f,xs,m){return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,i){return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
om.core.setup = (function setup(state,key,tx_listen){if((function (){var G__35023 = state;if(G__35023)
{var bit__20565__auto__ = null;if(cljs.core.truth_((function (){var or__19267__auto__ = bit__20565__auto__;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return G__35023.om$core$INotify$;
}
})()))
{return true;
} else
{if((!G__35023.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__35023);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__35023);
}
})())
{} else
{var listeners_35040 = (function (){var G__35024 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35024) : cljs.core.atom.call(null,G__35024));
})();var render_queue_35041 = (function (){var G__35025 = cljs.core.PersistentHashSet.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35025) : cljs.core.atom.call(null,G__35025));
})();var x35026_35042 = state;x35026_35042.om$core$IRenderQueue$ = true;
x35026_35042.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x35026_35042,listeners_35040,render_queue_35041){
return (function (this$){var this$__$1 = this;var G__35027 = render_queue_35041;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35027) : cljs.core.deref.call(null,G__35027));
});})(x35026_35042,listeners_35040,render_queue_35041))
;
x35026_35042.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x35026_35042,listeners_35040,render_queue_35041){
return (function (this$,c){var this$__$1 = this;if(cljs.core.contains_QMARK_((function (){var G__35028 = render_queue_35041;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35028) : cljs.core.deref.call(null,G__35028));
})(),c))
{return null;
} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(render_queue_35041,cljs.core.conj,c);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.identity);
}
});})(x35026_35042,listeners_35040,render_queue_35041))
;
x35026_35042.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x35026_35042,listeners_35040,render_queue_35041){
return (function (this$){var this$__$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(render_queue_35041,cljs.core.empty);
});})(x35026_35042,listeners_35040,render_queue_35041))
;
x35026_35042.om$core$INotify$ = true;
x35026_35042.om$core$INotify$_listen_BANG_$arity$3 = ((function (x35026_35042,listeners_35040,render_queue_35041){
return (function (this$,key__$1,tx_listen__$1){var this$__$1 = this;if((tx_listen__$1 == null))
{} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners_35040,cljs.core.assoc,key__$1,tx_listen__$1);
}
return this$__$1;
});})(x35026_35042,listeners_35040,render_queue_35041))
;
x35026_35042.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x35026_35042,listeners_35040,render_queue_35041){
return (function (this$,key__$1){var this$__$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_35040,cljs.core.dissoc,key__$1);
return this$__$1;
});})(x35026_35042,listeners_35040,render_queue_35041))
;
x35026_35042.om$core$INotify$_notify_BANG_$arity$3 = ((function (x35026_35042,listeners_35040,render_queue_35041){
return (function (this$,tx_data,root_cursor){var this$__$1 = this;var seq__35029_35043 = cljs.core.seq((function (){var G__35033 = listeners_35040;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35033) : cljs.core.deref.call(null,G__35033));
})());var chunk__35030_35044 = null;var count__35031_35045 = (0);var i__35032_35046 = (0);while(true){
if((i__35032_35046 < count__35031_35045))
{var vec__35034_35047 = chunk__35030_35044.cljs$core$IIndexed$_nth$arity$2(null,i__35032_35046);var __35048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35034_35047,(0),null);var f_35049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35034_35047,(1),null);var G__35035_35050 = tx_data;var G__35036_35051 = root_cursor;(f_35049.cljs$core$IFn$_invoke$arity$2 ? f_35049.cljs$core$IFn$_invoke$arity$2(G__35035_35050,G__35036_35051) : f_35049.call(null,G__35035_35050,G__35036_35051));
{
var G__35052 = seq__35029_35043;
var G__35053 = chunk__35030_35044;
var G__35054 = count__35031_35045;
var G__35055 = (i__35032_35046 + (1));
seq__35029_35043 = G__35052;
chunk__35030_35044 = G__35053;
count__35031_35045 = G__35054;
i__35032_35046 = G__35055;
continue;
}
} else
{var temp__4126__auto___35056 = cljs.core.seq(seq__35029_35043);if(temp__4126__auto___35056)
{var seq__35029_35057__$1 = temp__4126__auto___35056;if(cljs.core.chunked_seq_QMARK_(seq__35029_35057__$1))
{var c__20699__auto___35058 = cljs.core.chunk_first(seq__35029_35057__$1);{
var G__35059 = cljs.core.chunk_rest(seq__35029_35057__$1);
var G__35060 = c__20699__auto___35058;
var G__35061 = cljs.core.count(c__20699__auto___35058);
var G__35062 = (0);
seq__35029_35043 = G__35059;
chunk__35030_35044 = G__35060;
count__35031_35045 = G__35061;
i__35032_35046 = G__35062;
continue;
}
} else
{var vec__35037_35063 = cljs.core.first(seq__35029_35057__$1);var __35064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35037_35063,(0),null);var f_35065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35037_35063,(1),null);var G__35038_35066 = tx_data;var G__35039_35067 = root_cursor;(f_35065.cljs$core$IFn$_invoke$arity$2 ? f_35065.cljs$core$IFn$_invoke$arity$2(G__35038_35066,G__35039_35067) : f_35065.call(null,G__35038_35066,G__35039_35067));
{
var G__35068 = cljs.core.next(seq__35029_35057__$1);
var G__35069 = null;
var G__35070 = (0);
var G__35071 = (0);
seq__35029_35043 = G__35068;
chunk__35030_35044 = G__35069;
count__35031_35045 = G__35070;
i__35032_35046 = G__35071;
continue;
}
}
} else
{}
}
break;
}
return this$__$1;
});})(x35026_35042,listeners_35040,render_queue_35041))
;
}
return om.core._listen_BANG_(state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){return om.core._unlisten_BANG_(state,key);
});
/**
* Take a component constructor function f, value an immutable tree of
* associative data structures optionally an wrapped in an IAtom
* instance, and a map of options and installs an Om/React render
* loop.
* 
* f must return an instance that at a minimum implements IRender or
* IRenderState (it may implement other React life cycle protocols). f
* must take at least two arguments, the root cursor and the owning pure
* node. A cursor is just the original data wrapped in an ICursor
* instance which maintains path information. Only one root render
* loop allowed per target element. om.core/root is idempotent, if
* called again on the same target element the previous render loop
* will be replaced.
* 
* Options may also include any key allowed by om.core/build to
* customize f. In addition om.core/root supports the following
* special options:
* 
* :target     - (required) a DOM element.
* :shared     - data to be shared by all components, see om.core/get-shared
* :tx-listen  - a function that will listen in in transactions, should
* take 2 arguments - the first a map containing the
* path, old and new state at path, old and new global
* state, and transaction tag if provided.
* :instrument - a function of three arguments that if provided will
* intercept all calls to om.core/build. This function should
* correspond to the three arity version of om.core/build.
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__35072){var map__35096 = p__35072;var map__35096__$1 = ((cljs.core.seq_QMARK_(map__35096))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35096):map__35096);var options = map__35096__$1;var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35096__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35096__$1,new cljs.core.Keyword(null,"path","path",-188191168));var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35096__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35096__$1,new cljs.core.Keyword(null,"target","target",253001721));if(!((target == null)))
{} else
{throw (new Error(("Assert failed: No target specified to om.core/root\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))], 0))))));
}
var roots_SINGLEQUOTE__35119 = (function (){var G__35097 = om.core.roots;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35097) : cljs.core.deref.call(null,G__35097));
})();if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__35119,target))
{cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__35119,target).call(null);
} else
{}
var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();var state = (((function (){var G__35098 = value;if(G__35098)
{var bit__20565__auto__ = (G__35098.cljs$lang$protocol_mask$partition1$ & (16384));if((bit__20565__auto__) || (G__35098.cljs$core$IAtom$))
{return true;
} else
{if((!G__35098.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__35098);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__35098);
}
})())?value:(function (){var G__35099 = value;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35099) : cljs.core.atom.call(null,G__35099));
})());var state__$1 = om.core.setup(state,watch_key,tx_listen);var m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"target","target",253001721),cljs.core.array_seq([new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168)], 0));var rootf = ((function (watch_key,state,state__$1,m,map__35096,map__35096__$1,options,instrument,path,tx_listen,target){
return (function rootf(){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);
var value__$1 = (function (){var G__35107 = state__$1;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35107) : cljs.core.deref.call(null,G__35107));
})();var cursor = (((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path));om.dom.render((function (){var _STAR_instrument_STAR_35108 = om.core._STAR_instrument_STAR_;var _STAR_state_STAR_35109 = om.core._STAR_state_STAR_;try{om.core._STAR_instrument_STAR_ = instrument;
om.core._STAR_state_STAR_ = state__$1;
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_state_STAR_ = _STAR_state_STAR_35109;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_35108;
}})(),target);
var queue = om.core._get_queue(state__$1);if(cljs.core.empty_QMARK_(queue))
{return null;
} else
{var seq__35110_35120 = cljs.core.seq(queue);var chunk__35111_35121 = null;var count__35112_35122 = (0);var i__35113_35123 = (0);while(true){
if((i__35113_35123 < count__35112_35122))
{var c_35124 = chunk__35111_35121.cljs$core$IIndexed$_nth$arity$2(null,i__35113_35123);if(cljs.core.truth_(c_35124.isMounted()))
{c_35124.forceUpdate();
} else
{}
{
var G__35125 = seq__35110_35120;
var G__35126 = chunk__35111_35121;
var G__35127 = count__35112_35122;
var G__35128 = (i__35113_35123 + (1));
seq__35110_35120 = G__35125;
chunk__35111_35121 = G__35126;
count__35112_35122 = G__35127;
i__35113_35123 = G__35128;
continue;
}
} else
{var temp__4126__auto___35129 = cljs.core.seq(seq__35110_35120);if(temp__4126__auto___35129)
{var seq__35110_35130__$1 = temp__4126__auto___35129;if(cljs.core.chunked_seq_QMARK_(seq__35110_35130__$1))
{var c__20699__auto___35131 = cljs.core.chunk_first(seq__35110_35130__$1);{
var G__35132 = cljs.core.chunk_rest(seq__35110_35130__$1);
var G__35133 = c__20699__auto___35131;
var G__35134 = cljs.core.count(c__20699__auto___35131);
var G__35135 = (0);
seq__35110_35120 = G__35132;
chunk__35111_35121 = G__35133;
count__35112_35122 = G__35134;
i__35113_35123 = G__35135;
continue;
}
} else
{var c_35136 = cljs.core.first(seq__35110_35130__$1);if(cljs.core.truth_(c_35136.isMounted()))
{c_35136.forceUpdate();
} else
{}
{
var G__35137 = cljs.core.next(seq__35110_35130__$1);
var G__35138 = null;
var G__35139 = (0);
var G__35140 = (0);
seq__35110_35120 = G__35137;
chunk__35111_35121 = G__35138;
count__35112_35122 = G__35139;
i__35113_35123 = G__35140;
continue;
}
}
} else
{}
}
break;
}
return om.core._empty_queue_BANG_(state__$1);
}
});})(watch_key,state,state__$1,m,map__35096,map__35096__$1,options,instrument,path,tx_listen,target))
;cljs.core.add_watch(state__$1,watch_key,((function (watch_key,state,state__$1,m,rootf,map__35096,map__35096__$1,options,instrument,path,tx_listen,target){
return (function (_,___$1,___$2,___$3){if(cljs.core.contains_QMARK_((function (){var G__35114 = om.core.refresh_set;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35114) : cljs.core.deref.call(null,G__35114));
})(),rootf))
{} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}
if(cljs.core.truth_(om.core.refresh_queued))
{return null;
} else
{om.core.refresh_queued = true;
if(typeof requestAnimationFrame !== 'undefined')
{var G__35115 = om.core.render_all;return requestAnimationFrame(G__35115);
} else
{var G__35116 = om.core.render_all;var G__35117 = (16);return setTimeout(G__35116,G__35117);
}
}
});})(watch_key,state,state__$1,m,rootf,map__35096,map__35096__$1,options,instrument,path,tx_listen,target))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,m,rootf,map__35096,map__35096__$1,options,instrument,path,tx_listen,target){
return (function (){cljs.core.remove_watch(state__$1,watch_key);
om.core.tear_down(state__$1,watch_key);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);
var G__35118 = target;return React.unmountComponentAtNode(G__35118);
});})(watch_key,state,state__$1,m,rootf,map__35096,map__35096__$1,options,instrument,path,tx_listen,target))
);
return rootf();
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__35142 = om.core.roots;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35142) : cljs.core.deref.call(null,G__35142));
})(),target);if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{return null;
}
});
/**
* Given a tag, a cursor, an optional list of keys ks, mutate the tree
* at the path specified by the cursor + the optional keys by applying
* f to the specified value in the tree. An Om re-render will be
* triggered.
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){return transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){return transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));return om.core._transact_BANG_(cursor,korks__$1,f,tag);
});
transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
return transact_BANG_;
})()
;
/**
* Like transact! but no function provided, instead a replacement
* value is given.
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,v){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,(function (_){return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){return v;
}),tag);
});
update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,korks);
case 3:
return update_BANG___3.call(this,cursor,korks,v);
case 4:
return update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
return update_BANG_;
})()
;
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function() {
var get_node = null;
var get_node__1 = (function (owner){return owner.getDOMNode();
});
var get_node__2 = (function (owner,name){var temp__4126__auto__ = owner.refs;if(cljs.core.truth_(temp__4126__auto__))
{var refs = temp__4126__auto__;return (refs[name]).getDOMNode();
} else
{return null;
}
});
get_node = function(owner,name){
switch(arguments.length){
case 1:
return get_node__1.call(this,owner);
case 2:
return get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_node.cljs$core$IFn$_invoke$arity$1 = get_node__1;
get_node.cljs$core$IFn$_invoke$arity$2 = get_node__2;
return get_node;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function() {
var set_state_BANG_ = null;
var set_state_BANG___2 = (function (owner,v){return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,true);
});
var set_state_BANG___3 = (function (owner,korks,v){var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,true);
});
set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_BANG___2.call(this,owner,korks);
case 3:
return set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_BANG___2;
set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_BANG___3;
return set_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as set-state! but does not trigger re-render.
*/
om.core.set_state_nr_BANG_ = (function() {
var set_state_nr_BANG_ = null;
var set_state_nr_BANG___2 = (function (owner,v){return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,false);
});
var set_state_nr_BANG___3 = (function (owner,korks,v){var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,false);
});
set_state_nr_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_nr_BANG___2.call(this,owner,korks);
case 3:
return set_state_nr_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_nr_BANG___2;
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_nr_BANG___3;
return set_state_nr_BANG_;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and a
* function to transition the state of the component. Conceptually
* analagous to React setState. Will schedule an Om re-render.
*/
om.core.update_state_BANG_ = (function() {
var update_state_BANG_ = null;
var update_state_BANG___2 = (function (owner,f){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__35153 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35153) : f.call(null,G__35153));
})());
});
var update_state_BANG___3 = (function (owner,korks,f){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__35154 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35154) : f.call(null,G__35154));
})());
});
update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_BANG___2.call(this,owner,korks);
case 3:
return update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_BANG___2;
update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_BANG___3;
return update_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as update-state! but does not trigger re-render.
*/
om.core.update_state_nr_BANG_ = (function() {
var update_state_nr_BANG_ = null;
var update_state_nr_BANG___2 = (function (owner,f){return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__35157 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35157) : f.call(null,G__35157));
})());
});
var update_state_nr_BANG___3 = (function (owner,korks,f){return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__35158 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35158) : f.call(null,G__35158));
})());
});
update_state_nr_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_nr_BANG___2.call(this,owner,korks);
case 3:
return update_state_nr_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_nr_BANG___2;
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_nr_BANG___3;
return update_state_nr_BANG_;
})()
;
/**
* Utility to re-render an owner.
*/
om.core.refresh_BANG_ = (function refresh_BANG_(owner){return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.identity);
});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(owner);
});
var get_render_state__2 = (function (owner,korks){var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;
/**
* Returns true if in the React render phase.
*/
om.core.rendering_QMARK_ = (function rendering_QMARK_(){return om.core._STAR_read_enabled_STAR_ === true;
});
//# sourceMappingURL=core.js.map