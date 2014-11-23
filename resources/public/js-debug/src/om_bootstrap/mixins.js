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
var ufv___74242 = schema.utils.use_fn_validation;var output_schema74231_74243 = schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));var input_schema74232_74244 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"target","target",1893533248,null)),schema.core.one(schema.core.Str,new cljs.core.Symbol(null,"event-type","event-type",1960254340,null)),schema.core.one(schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null))], null);var input_checker74233_74245 = schema.core.checker(input_schema74232_74244);var output_checker74234_74246 = schema.core.checker(output_schema74231_74243);/**
* Inputs: [target :- s/Any event-type :- s/Str callback :- (sm/=> s/Any s/Any)]
* Returns: (sm/=> s/Any)
* 
* Registers the callback on the supplied target for events of type
* `event-type`. Returns a function of no arguments that, when called,
* unregisters the callback.
*/
om_bootstrap.mixins.event_listener = ((function (ufv___74242,output_schema74231_74243,input_schema74232_74244,input_checker74233_74245,output_checker74234_74246){
return (function event_listener(G__74235,G__74236,G__74237){var validate__837__auto__ = ufv___74242.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___74247 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__74235,G__74236,G__74237], null);var temp__4126__auto___74248 = (function (){var G__74240 = args__838__auto___74247;return (input_checker74233_74245.cljs$core$IFn$_invoke$arity$1 ? input_checker74233_74245.cljs$core$IFn$_invoke$arity$1(G__74240) : input_checker74233_74245.call(null,G__74240));
})();if(cljs.core.truth_(temp__4126__auto___74248))
{var error__839__auto___74249 = temp__4126__auto___74248;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___74249], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema74232_74244,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___74247,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___74249], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var target = G__74235;var event_type = G__74236;var callback = G__74237;while(true){
if(cljs.core.truth_(target.addEventListener))
{target.addEventListener(event_type,callback,false);
return ((function (validate__837__auto__,ufv___74242,output_schema74231_74243,input_schema74232_74244,input_checker74233_74245,output_checker74234_74246){
return (function (){return target.removeEventListener(event_type,callback,false);
});
;})(validate__837__auto__,ufv___74242,output_schema74231_74243,input_schema74232_74244,input_checker74233_74245,output_checker74234_74246))
} else
{if(cljs.core.truth_(target.attachEvent))
{var event_type__$1 = ("on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_type));target.attachEvent(event_type__$1,callback);
return ((function (event_type__$1,validate__837__auto__,ufv___74242,output_schema74231_74243,input_schema74232_74244,input_checker74233_74245,output_checker74234_74246){
return (function (){return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__837__auto__,ufv___74242,output_schema74231_74243,input_schema74232_74244,input_checker74233_74245,output_checker74234_74246))
} else
{return ((function (validate__837__auto__,ufv___74242,output_schema74231_74243,input_schema74232_74244,input_checker74233_74245,output_checker74234_74246){
return (function (){return null;
});
;})(validate__837__auto__,ufv___74242,output_schema74231_74243,input_schema74232_74244,input_checker74233_74245,output_checker74234_74246))

}
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___74250 = (function (){var G__74241 = o__840__auto__;return (output_checker74234_74246.cljs$core$IFn$_invoke$arity$1 ? output_checker74234_74246.cljs$core$IFn$_invoke$arity$1(G__74241) : output_checker74234_74246.call(null,G__74241));
})();if(cljs.core.truth_(temp__4126__auto___74250))
{var error__839__auto___74251 = temp__4126__auto___74250;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___74251], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema74231_74243,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___74251], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___74242,output_schema74231_74243,input_schema74232_74244,input_checker74233_74245,output_checker74234_74246))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.mixins.event_listener),schema.core.make_fn_schema(output_schema74231_74243,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema74232_74244], null)));
/**
* Handles a sequence of listeners for the component, and removes them
* from the document when the component is unmounted.
*/
om_bootstrap.mixins.set_listener_mixin = {"set_listener": (function (target74256,event_type74257,callback74258){var this74255 = this;return ((function (this74255){
return (function (owner,target,event_type,callback){var remove_fn = om_bootstrap.mixins.event_listener(target,event_type,callback);return owner.listeners.push(remove_fn);
});})(this74255))
.call(null,this74255,target74256,event_type74257,callback74258);
}), "componentWillUnmount": (function (){var this74254 = this;return ((function (this74254){
return (function (owner){return owner.listeners.map(((function (this74254){
return (function (p1__74252_SHARP_){return (p1__74252_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__74252_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__74252_SHARP_.call(null));
});})(this74254))
);
});})(this74254))
.call(null,this74254);
}), "componentWillMount": (function (){var this74253 = this;return ((function (this74253){
return (function (owner){return owner.listeners = [];
});})(this74253))
.call(null,this74253);
})};
/**
* Handles a sequence of timeouts for the component, and removes them
* from the document when the component is unmounted.
*/
om_bootstrap.mixins.set_timeout_mixin = {"set_timeout": (function (f74263,timeout74264){var this74262 = this;return ((function (this74262){
return (function (owner,f,timeout){var timeout__$1 = (function (){var G__74266 = f;var G__74267 = timeout;return setTimeout(G__74266,G__74267);
})();return owner.timeouts.push(timeout__$1);
});})(this74262))
.call(null,this74262,f74263,timeout74264);
}), "componentWillUnmount": (function (){var this74261 = this;return ((function (this74261){
return (function (owner){return owner.timeouts.map(((function (this74261){
return (function (p1__74259_SHARP_){var G__74265 = p1__74259_SHARP_;return clearTimeout(G__74265);
});})(this74261))
);
});})(this74261))
.call(null,this74261);
}), "componentWillMount": (function (){var this74260 = this;return ((function (this74260){
return (function (owner){return owner.timeouts = [];
});})(this74260))
.call(null,this74260);
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
var G__74268 = node__$1.parentNode;
node__$1 = G__74268;
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
{var G__74271 = false;return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__74271) : set_state.call(null,G__74271));
}
});})(set_state))
),om_bootstrap.mixins.event_listener(document,"keyup",((function (set_state){
return (function (e){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(om_bootstrap.mixins.ESCAPE_KEY,e.keyCode))
{var G__74272 = false;return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__74272) : set_state.call(null,G__74272));
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
return (function (p1__74273_SHARP_){return (p1__74273_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__74273_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__74273_SHARP_.call(null));
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
om_bootstrap.mixins.dropdown_mixin = {"setDropdownState": (function (open_QMARK_74278){var this74277 = this;return ((function (this74277){
return (function (owner,open_QMARK_){if(cljs.core.truth_(open_QMARK_))
{om_bootstrap.mixins.bind_root_close_handlers_BANG_(owner);
} else
{om_bootstrap.mixins.unbind_root_close_handlers_BANG_(owner);
}
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this74277))
.call(null,this74277,open_QMARK_74278);
}), "isDropdownOpen": (function (){var this74276 = this;return ((function (this74276){
return (function (owner){return om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this74276))
.call(null,this74276);
}), "componentWillUnmount": (function (){var this74275 = this;return ((function (this74275){
return (function (owner){return om_bootstrap.mixins.unbind_root_close_handlers_BANG_(owner);
});})(this74275))
.call(null,this74275);
}), "getInitialState": (function (){var this74274 = this;return ((function (this74274){
return (function (_){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this74274))
.call(null,this74274);
})};
//# sourceMappingURL=mixins.js.map