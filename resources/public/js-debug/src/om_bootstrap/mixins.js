goog.provide('om_bootstrap.mixins');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('schema.core');
goog.require('schema.core');
goog.require('om_tools.mixin');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
var ufv___38570 = schema.utils.use_fn_validation;var output_schema38559_38571 = schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));var input_schema38560_38572 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"target","target",1893533248,null)),schema.core.one(schema.core.Str,new cljs.core.Symbol(null,"event-type","event-type",1960254340,null)),schema.core.one(schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null))], null);var input_checker38561_38573 = schema.core.checker(input_schema38560_38572);var output_checker38562_38574 = schema.core.checker(output_schema38559_38571);/**
* Inputs: [target :- s/Any event-type :- s/Str callback :- (sm/=> s/Any s/Any)]
* Returns: (sm/=> s/Any)
* 
* Registers the callback on the supplied target for events of type
* `event-type`. Returns a function of no arguments that, when called,
* unregisters the callback.
*/
om_bootstrap.mixins.event_listener = ((function (ufv___38570,output_schema38559_38571,input_schema38560_38572,input_checker38561_38573,output_checker38562_38574){
return (function event_listener(G__38563,G__38564,G__38565){var validate__837__auto__ = ufv___38570.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38575 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38563,G__38564,G__38565], null);var temp__4126__auto___38576 = (function (){var G__38568 = args__838__auto___38575;return (input_checker38561_38573.cljs$core$IFn$_invoke$arity$1 ? input_checker38561_38573.cljs$core$IFn$_invoke$arity$1(G__38568) : input_checker38561_38573.call(null,G__38568));
})();if(cljs.core.truth_(temp__4126__auto___38576))
{var error__839__auto___38577 = temp__4126__auto___38576;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38577], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38560_38572,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38575,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38577], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var target = G__38563;var event_type = G__38564;var callback = G__38565;while(true){
if(cljs.core.truth_(target.addEventListener))
{target.addEventListener(event_type,callback,false);
return ((function (validate__837__auto__,ufv___38570,output_schema38559_38571,input_schema38560_38572,input_checker38561_38573,output_checker38562_38574){
return (function (){return target.removeEventListener(event_type,callback,false);
});
;})(validate__837__auto__,ufv___38570,output_schema38559_38571,input_schema38560_38572,input_checker38561_38573,output_checker38562_38574))
} else
{if(cljs.core.truth_(target.attachEvent))
{var event_type__$1 = ("on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_type));target.attachEvent(event_type__$1,callback);
return ((function (event_type__$1,validate__837__auto__,ufv___38570,output_schema38559_38571,input_schema38560_38572,input_checker38561_38573,output_checker38562_38574){
return (function (){return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__837__auto__,ufv___38570,output_schema38559_38571,input_schema38560_38572,input_checker38561_38573,output_checker38562_38574))
} else
{return ((function (validate__837__auto__,ufv___38570,output_schema38559_38571,input_schema38560_38572,input_checker38561_38573,output_checker38562_38574){
return (function (){return null;
});
;})(validate__837__auto__,ufv___38570,output_schema38559_38571,input_schema38560_38572,input_checker38561_38573,output_checker38562_38574))

}
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38578 = (function (){var G__38569 = o__840__auto__;return (output_checker38562_38574.cljs$core$IFn$_invoke$arity$1 ? output_checker38562_38574.cljs$core$IFn$_invoke$arity$1(G__38569) : output_checker38562_38574.call(null,G__38569));
})();if(cljs.core.truth_(temp__4126__auto___38578))
{var error__839__auto___38579 = temp__4126__auto___38578;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38579], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38559_38571,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38579], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___38570,output_schema38559_38571,input_schema38560_38572,input_checker38561_38573,output_checker38562_38574))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.mixins.event_listener),schema.core.make_fn_schema(output_schema38559_38571,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38560_38572], null)));
/**
* Handles a sequence of listeners for the component, and removes them
* from the document when the component is unmounted.
*/
om_bootstrap.mixins.set_listener_mixin = {"set_listener": (function (target38584,event_type38585,callback38586){var this38583 = this;return ((function (this38583){
return (function (owner,target,event_type,callback){var remove_fn = om_bootstrap.mixins.event_listener(target,event_type,callback);return owner.listeners.push(remove_fn);
});})(this38583))
.call(null,this38583,target38584,event_type38585,callback38586);
}), "componentWillUnmount": (function (){var this38582 = this;return ((function (this38582){
return (function (owner){return owner.listeners.map(((function (this38582){
return (function (p1__38580_SHARP_){return (p1__38580_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__38580_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__38580_SHARP_.call(null));
});})(this38582))
);
});})(this38582))
.call(null,this38582);
}), "componentWillMount": (function (){var this38581 = this;return ((function (this38581){
return (function (owner){return owner.listeners = [];
});})(this38581))
.call(null,this38581);
})};
/**
* Handles a sequence of timeouts for the component, and removes them
* from the document when the component is unmounted.
*/
om_bootstrap.mixins.set_timeout_mixin = {"set_timeout": (function (f38591,timeout38592){var this38590 = this;return ((function (this38590){
return (function (owner,f,timeout){var timeout__$1 = (function (){var G__38594 = f;var G__38595 = timeout;return setTimeout(G__38594,G__38595);
})();return owner.timeouts.push(timeout__$1);
});})(this38590))
.call(null,this38590,f38591,timeout38592);
}), "componentWillUnmount": (function (){var this38589 = this;return ((function (this38589){
return (function (owner){return owner.timeouts.map(((function (this38589){
return (function (p1__38587_SHARP_){var G__38593 = p1__38587_SHARP_;return clearTimeout(G__38593);
});})(this38589))
);
});})(this38589))
.call(null,this38589);
}), "componentWillMount": (function (){var this38588 = this;return ((function (this38588){
return (function (owner){return owner.timeouts = [];
});})(this38588))
.call(null,this38588);
})};
/**
* Accepts two DOM elements; returns true if the supplied node is
* nested inside the supplied root, false otherwise.
*/
om_bootstrap.mixins.in_root_QMARK_ = (function in_root_QMARK_(node,root){var node__$1 = node;while(true){
if((node__$1 == null))
{return false;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(root,node__$1))
{return true;
} else
{{
var G__38596 = node__$1.parentNode;
node__$1 = G__38596;
continue;
}

}
}
break;
}
});
om_bootstrap.mixins.ESCAPE_KEY = (27);
/**
* For dropdowns, binds a handler for that sets the dropdown-mixin's
* `:open?` state to false if the user clicks outside the owning
* component OR hits the escape key.
*/
om_bootstrap.mixins.bind_root_close_handlers_BANG_ = (function bind_root_close_handlers_BANG_(owner){var set_state = (owner["setDropdownState"]);return owner.dropdownListeners = [om_bootstrap.mixins.event_listener(document,"click",((function (set_state){
return (function (e){if(om_bootstrap.mixins.in_root_QMARK_(e.target,om.core.get_node.cljs$core$IFn$_invoke$arity$1(owner)))
{return null;
} else
{var G__38599 = false;return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__38599) : set_state.call(null,G__38599));
}
});})(set_state))
),om_bootstrap.mixins.event_listener(document,"keyup",((function (set_state){
return (function (e){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(om_bootstrap.mixins.ESCAPE_KEY,e.keyCode))
{var G__38600 = false;return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__38600) : set_state.call(null,G__38600));
} else
{return null;
}
});})(set_state))
)];
});
/**
* If they're present on the owning object, removes the listeners
* registered by the dropdown mixin.
*/
om_bootstrap.mixins.unbind_root_close_handlers_BANG_ = (function unbind_root_close_handlers_BANG_(owner){var temp__4126__auto__ = owner.dropdownListeners;if(cljs.core.truth_(temp__4126__auto__))
{var listeners = temp__4126__auto__;cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (listeners,temp__4126__auto__){
return (function (p1__38601_SHARP_){return (p1__38601_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__38601_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__38601_SHARP_.call(null));
});})(listeners,temp__4126__auto__))
,listeners);
return owner.dropdownListeners = null;
} else
{return null;
}
});
/**
* Mixin that manages a single piece of state - :open?. If a user
* clicks outside the component's owning dom element OR hits the escape
* key, the state will jump back to false.
* 
* Down the road this may need to register a callback when the state
* changes.
*/
om_bootstrap.mixins.dropdown_mixin = {"setDropdownState": (function (open_QMARK_38606){var this38605 = this;return ((function (this38605){
return (function (owner,open_QMARK_){if(cljs.core.truth_(open_QMARK_))
{om_bootstrap.mixins.bind_root_close_handlers_BANG_(owner);
} else
{om_bootstrap.mixins.unbind_root_close_handlers_BANG_(owner);
}
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this38605))
.call(null,this38605,open_QMARK_38606);
}), "isDropdownOpen": (function (){var this38604 = this;return ((function (this38604){
return (function (owner){return om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this38604))
.call(null,this38604);
}), "componentWillUnmount": (function (){var this38603 = this;return ((function (this38603){
return (function (owner){return om_bootstrap.mixins.unbind_root_close_handlers_BANG_(owner);
});})(this38603))
.call(null,this38603);
}), "getInitialState": (function (){var this38602 = this;return ((function (this38602){
return (function (_){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this38602))
.call(null,this38602);
})};
//# sourceMappingURL=mixins.js.map