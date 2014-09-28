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
var ufv___55852 = schema.utils.use_fn_validation;var output_schema55841_55853 = schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));var input_schema55842_55854 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"target","target",1893533248,null)),schema.core.one(schema.core.Str,new cljs.core.Symbol(null,"event-type","event-type",1960254340,null)),schema.core.one(schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null))], null);var input_checker55843_55855 = schema.core.checker(input_schema55842_55854);var output_checker55844_55856 = schema.core.checker(output_schema55841_55853);/**
* Inputs: [target :- s/Any event-type :- s/Str callback :- (sm/=> s/Any s/Any)]
* Returns: (sm/=> s/Any)
* 
* Registers the callback on the supplied target for events of type
* `event-type`. Returns a function of no arguments that, when called,
* unregisters the callback.
*/
om_bootstrap.mixins.event_listener = ((function (ufv___55852,output_schema55841_55853,input_schema55842_55854,input_checker55843_55855,output_checker55844_55856){
return (function event_listener(G__55845,G__55846,G__55847){var validate__837__auto__ = ufv___55852.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___55857 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55845,G__55846,G__55847], null);var temp__4126__auto___55858 = (function (){var G__55850 = args__838__auto___55857;return (input_checker55843_55855.cljs$core$IFn$_invoke$arity$1 ? input_checker55843_55855.cljs$core$IFn$_invoke$arity$1(G__55850) : input_checker55843_55855.call(null,G__55850));
})();if(cljs.core.truth_(temp__4126__auto___55858))
{var error__839__auto___55859 = temp__4126__auto___55858;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55859], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55842_55854,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___55857,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55859], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var target = G__55845;var event_type = G__55846;var callback = G__55847;while(true){
if(cljs.core.truth_(target.addEventListener))
{target.addEventListener(event_type,callback,false);
return ((function (validate__837__auto__,ufv___55852,output_schema55841_55853,input_schema55842_55854,input_checker55843_55855,output_checker55844_55856){
return (function (){return target.removeEventListener(event_type,callback,false);
});
;})(validate__837__auto__,ufv___55852,output_schema55841_55853,input_schema55842_55854,input_checker55843_55855,output_checker55844_55856))
} else
{if(cljs.core.truth_(target.attachEvent))
{var event_type__$1 = ("on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_type));target.attachEvent(event_type__$1,callback);
return ((function (event_type__$1,validate__837__auto__,ufv___55852,output_schema55841_55853,input_schema55842_55854,input_checker55843_55855,output_checker55844_55856){
return (function (){return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__837__auto__,ufv___55852,output_schema55841_55853,input_schema55842_55854,input_checker55843_55855,output_checker55844_55856))
} else
{return ((function (validate__837__auto__,ufv___55852,output_schema55841_55853,input_schema55842_55854,input_checker55843_55855,output_checker55844_55856){
return (function (){return null;
});
;})(validate__837__auto__,ufv___55852,output_schema55841_55853,input_schema55842_55854,input_checker55843_55855,output_checker55844_55856))

}
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___55860 = (function (){var G__55851 = o__840__auto__;return (output_checker55844_55856.cljs$core$IFn$_invoke$arity$1 ? output_checker55844_55856.cljs$core$IFn$_invoke$arity$1(G__55851) : output_checker55844_55856.call(null,G__55851));
})();if(cljs.core.truth_(temp__4126__auto___55860))
{var error__839__auto___55861 = temp__4126__auto___55860;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55861], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55841_55853,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55861], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___55852,output_schema55841_55853,input_schema55842_55854,input_checker55843_55855,output_checker55844_55856))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.mixins.event_listener),schema.core.make_fn_schema(output_schema55841_55853,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55842_55854], null)));
/**
* Handles a sequence of listeners for the component, and removes them
* from the document when the component is unmounted.
*/
om_bootstrap.mixins.set_listener_mixin = {"set_listener": (function (target55866,event_type55867,callback55868){var this55865 = this;return ((function (this55865){
return (function (owner,target,event_type,callback){var remove_fn = om_bootstrap.mixins.event_listener(target,event_type,callback);return owner.listeners.push(remove_fn);
});})(this55865))
.call(null,this55865,target55866,event_type55867,callback55868);
}), "componentWillUnmount": (function (){var this55864 = this;return ((function (this55864){
return (function (owner){return owner.listeners.map(((function (this55864){
return (function (p1__55862_SHARP_){return (p1__55862_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__55862_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__55862_SHARP_.call(null));
});})(this55864))
);
});})(this55864))
.call(null,this55864);
}), "componentWillMount": (function (){var this55863 = this;return ((function (this55863){
return (function (owner){return owner.listeners = [];
});})(this55863))
.call(null,this55863);
})};
/**
* Handles a sequence of timeouts for the component, and removes them
* from the document when the component is unmounted.
*/
om_bootstrap.mixins.set_timeout_mixin = {"set_timeout": (function (f55873,timeout55874){var this55872 = this;return ((function (this55872){
return (function (owner,f,timeout){var timeout__$1 = (function (){var G__55876 = f;var G__55877 = timeout;return setTimeout(G__55876,G__55877);
})();return owner.timeouts.push(timeout__$1);
});})(this55872))
.call(null,this55872,f55873,timeout55874);
}), "componentWillUnmount": (function (){var this55871 = this;return ((function (this55871){
return (function (owner){return owner.timeouts.map(((function (this55871){
return (function (p1__55869_SHARP_){var G__55875 = p1__55869_SHARP_;return clearTimeout(G__55875);
});})(this55871))
);
});})(this55871))
.call(null,this55871);
}), "componentWillMount": (function (){var this55870 = this;return ((function (this55870){
return (function (owner){return owner.timeouts = [];
});})(this55870))
.call(null,this55870);
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
var G__55878 = node__$1.parentNode;
node__$1 = G__55878;
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
{var G__55881 = false;return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__55881) : set_state.call(null,G__55881));
}
});})(set_state))
),om_bootstrap.mixins.event_listener(document,"keyup",((function (set_state){
return (function (e){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(om_bootstrap.mixins.ESCAPE_KEY,e.keyCode))
{var G__55882 = false;return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__55882) : set_state.call(null,G__55882));
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
return (function (p1__55883_SHARP_){return (p1__55883_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__55883_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__55883_SHARP_.call(null));
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
om_bootstrap.mixins.dropdown_mixin = {"setDropdownState": (function (open_QMARK_55888){var this55887 = this;return ((function (this55887){
return (function (owner,open_QMARK_){if(cljs.core.truth_(open_QMARK_))
{om_bootstrap.mixins.bind_root_close_handlers_BANG_(owner);
} else
{om_bootstrap.mixins.unbind_root_close_handlers_BANG_(owner);
}
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this55887))
.call(null,this55887,open_QMARK_55888);
}), "isDropdownOpen": (function (){var this55886 = this;return ((function (this55886){
return (function (owner){return om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this55886))
.call(null,this55886);
}), "componentWillUnmount": (function (){var this55885 = this;return ((function (this55885){
return (function (owner){return om_bootstrap.mixins.unbind_root_close_handlers_BANG_(owner);
});})(this55885))
.call(null,this55885);
}), "getInitialState": (function (){var this55884 = this;return ((function (this55884){
return (function (_){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this55884))
.call(null,this55884);
})};
//# sourceMappingURL=mixins.js.map