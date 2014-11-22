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
var ufv___46592 = schema.utils.use_fn_validation;var output_schema46581_46593 = schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));var input_schema46582_46594 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"target","target",1893533248,null)),schema.core.one(schema.core.Str,new cljs.core.Symbol(null,"event-type","event-type",1960254340,null)),schema.core.one(schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null))], null);var input_checker46583_46595 = schema.core.checker(input_schema46582_46594);var output_checker46584_46596 = schema.core.checker(output_schema46581_46593);/**
* Inputs: [target :- s/Any event-type :- s/Str callback :- (sm/=> s/Any s/Any)]
* Returns: (sm/=> s/Any)
* 
* Registers the callback on the supplied target for events of type
* `event-type`. Returns a function of no arguments that, when called,
* unregisters the callback.
*/
om_bootstrap.mixins.event_listener = ((function (ufv___46592,output_schema46581_46593,input_schema46582_46594,input_checker46583_46595,output_checker46584_46596){
return (function event_listener(G__46585,G__46586,G__46587){var validate__837__auto__ = ufv___46592.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___46597 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46585,G__46586,G__46587], null);var temp__4126__auto___46598 = (function (){var G__46590 = args__838__auto___46597;return (input_checker46583_46595.cljs$core$IFn$_invoke$arity$1 ? input_checker46583_46595.cljs$core$IFn$_invoke$arity$1(G__46590) : input_checker46583_46595.call(null,G__46590));
})();if(cljs.core.truth_(temp__4126__auto___46598))
{var error__839__auto___46599 = temp__4126__auto___46598;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___46599], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46582_46594,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___46597,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___46599], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var target = G__46585;var event_type = G__46586;var callback = G__46587;while(true){
if(cljs.core.truth_(target.addEventListener))
{target.addEventListener(event_type,callback,false);
return ((function (validate__837__auto__,ufv___46592,output_schema46581_46593,input_schema46582_46594,input_checker46583_46595,output_checker46584_46596){
return (function (){return target.removeEventListener(event_type,callback,false);
});
;})(validate__837__auto__,ufv___46592,output_schema46581_46593,input_schema46582_46594,input_checker46583_46595,output_checker46584_46596))
} else
{if(cljs.core.truth_(target.attachEvent))
{var event_type__$1 = ("on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_type));target.attachEvent(event_type__$1,callback);
return ((function (event_type__$1,validate__837__auto__,ufv___46592,output_schema46581_46593,input_schema46582_46594,input_checker46583_46595,output_checker46584_46596){
return (function (){return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__837__auto__,ufv___46592,output_schema46581_46593,input_schema46582_46594,input_checker46583_46595,output_checker46584_46596))
} else
{return ((function (validate__837__auto__,ufv___46592,output_schema46581_46593,input_schema46582_46594,input_checker46583_46595,output_checker46584_46596){
return (function (){return null;
});
;})(validate__837__auto__,ufv___46592,output_schema46581_46593,input_schema46582_46594,input_checker46583_46595,output_checker46584_46596))

}
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___46600 = (function (){var G__46591 = o__840__auto__;return (output_checker46584_46596.cljs$core$IFn$_invoke$arity$1 ? output_checker46584_46596.cljs$core$IFn$_invoke$arity$1(G__46591) : output_checker46584_46596.call(null,G__46591));
})();if(cljs.core.truth_(temp__4126__auto___46600))
{var error__839__auto___46601 = temp__4126__auto___46600;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___46601], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46581_46593,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___46601], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___46592,output_schema46581_46593,input_schema46582_46594,input_checker46583_46595,output_checker46584_46596))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.mixins.event_listener),schema.core.make_fn_schema(output_schema46581_46593,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46582_46594], null)));
/**
* Handles a sequence of listeners for the component, and removes them
* from the document when the component is unmounted.
*/
om_bootstrap.mixins.set_listener_mixin = {"set_listener": (function (target46606,event_type46607,callback46608){var this46605 = this;return ((function (this46605){
return (function (owner,target,event_type,callback){var remove_fn = om_bootstrap.mixins.event_listener(target,event_type,callback);return owner.listeners.push(remove_fn);
});})(this46605))
.call(null,this46605,target46606,event_type46607,callback46608);
}), "componentWillUnmount": (function (){var this46604 = this;return ((function (this46604){
return (function (owner){return owner.listeners.map(((function (this46604){
return (function (p1__46602_SHARP_){return (p1__46602_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__46602_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__46602_SHARP_.call(null));
});})(this46604))
);
});})(this46604))
.call(null,this46604);
}), "componentWillMount": (function (){var this46603 = this;return ((function (this46603){
return (function (owner){return owner.listeners = [];
});})(this46603))
.call(null,this46603);
})};
/**
* Handles a sequence of timeouts for the component, and removes them
* from the document when the component is unmounted.
*/
om_bootstrap.mixins.set_timeout_mixin = {"set_timeout": (function (f46613,timeout46614){var this46612 = this;return ((function (this46612){
return (function (owner,f,timeout){var timeout__$1 = (function (){var G__46616 = f;var G__46617 = timeout;return setTimeout(G__46616,G__46617);
})();return owner.timeouts.push(timeout__$1);
});})(this46612))
.call(null,this46612,f46613,timeout46614);
}), "componentWillUnmount": (function (){var this46611 = this;return ((function (this46611){
return (function (owner){return owner.timeouts.map(((function (this46611){
return (function (p1__46609_SHARP_){var G__46615 = p1__46609_SHARP_;return clearTimeout(G__46615);
});})(this46611))
);
});})(this46611))
.call(null,this46611);
}), "componentWillMount": (function (){var this46610 = this;return ((function (this46610){
return (function (owner){return owner.timeouts = [];
});})(this46610))
.call(null,this46610);
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
var G__46618 = node__$1.parentNode;
node__$1 = G__46618;
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
{var G__46621 = false;return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__46621) : set_state.call(null,G__46621));
}
});})(set_state))
),om_bootstrap.mixins.event_listener(document,"keyup",((function (set_state){
return (function (e){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(om_bootstrap.mixins.ESCAPE_KEY,e.keyCode))
{var G__46622 = false;return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__46622) : set_state.call(null,G__46622));
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
return (function (p1__46623_SHARP_){return (p1__46623_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__46623_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__46623_SHARP_.call(null));
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
om_bootstrap.mixins.dropdown_mixin = {"setDropdownState": (function (open_QMARK_46628){var this46627 = this;return ((function (this46627){
return (function (owner,open_QMARK_){if(cljs.core.truth_(open_QMARK_))
{om_bootstrap.mixins.bind_root_close_handlers_BANG_(owner);
} else
{om_bootstrap.mixins.unbind_root_close_handlers_BANG_(owner);
}
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this46627))
.call(null,this46627,open_QMARK_46628);
}), "isDropdownOpen": (function (){var this46626 = this;return ((function (this46626){
return (function (owner){return om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this46626))
.call(null,this46626);
}), "componentWillUnmount": (function (){var this46625 = this;return ((function (this46625){
return (function (owner){return om_bootstrap.mixins.unbind_root_close_handlers_BANG_(owner);
});})(this46625))
.call(null,this46625);
}), "getInitialState": (function (){var this46624 = this;return ((function (this46624){
return (function (_){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this46624))
.call(null,this46624);
})};
//# sourceMappingURL=mixins.js.map