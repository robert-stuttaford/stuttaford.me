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
var ufv___55534 = schema.utils.use_fn_validation;var output_schema55523_55535 = schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));var input_schema55524_55536 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"target","target",1893533248,null)),schema.core.one(schema.core.Str,new cljs.core.Symbol(null,"event-type","event-type",1960254340,null)),schema.core.one(schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null))], null);var input_checker55525_55537 = schema.core.checker(input_schema55524_55536);var output_checker55526_55538 = schema.core.checker(output_schema55523_55535);/**
* Inputs: [target :- s/Any event-type :- s/Str callback :- (sm/=> s/Any s/Any)]
* Returns: (sm/=> s/Any)
* 
* Registers the callback on the supplied target for events of type
* `event-type`. Returns a function of no arguments that, when called,
* unregisters the callback.
*/
om_bootstrap.mixins.event_listener = ((function (ufv___55534,output_schema55523_55535,input_schema55524_55536,input_checker55525_55537,output_checker55526_55538){
return (function event_listener(G__55527,G__55528,G__55529){var validate__837__auto__ = ufv___55534.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___55539 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55527,G__55528,G__55529], null);var temp__4126__auto___55540 = (function (){var G__55532 = args__838__auto___55539;return (input_checker55525_55537.cljs$core$IFn$_invoke$arity$1 ? input_checker55525_55537.cljs$core$IFn$_invoke$arity$1(G__55532) : input_checker55525_55537.call(null,G__55532));
})();if(cljs.core.truth_(temp__4126__auto___55540))
{var error__839__auto___55541 = temp__4126__auto___55540;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55541], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55524_55536,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___55539,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55541], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var target = G__55527;var event_type = G__55528;var callback = G__55529;while(true){
if(cljs.core.truth_(target.addEventListener))
{target.addEventListener(event_type,callback,false);
return ((function (validate__837__auto__,ufv___55534,output_schema55523_55535,input_schema55524_55536,input_checker55525_55537,output_checker55526_55538){
return (function (){return target.removeEventListener(event_type,callback,false);
});
;})(validate__837__auto__,ufv___55534,output_schema55523_55535,input_schema55524_55536,input_checker55525_55537,output_checker55526_55538))
} else
{if(cljs.core.truth_(target.attachEvent))
{var event_type__$1 = ("on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_type));target.attachEvent(event_type__$1,callback);
return ((function (event_type__$1,validate__837__auto__,ufv___55534,output_schema55523_55535,input_schema55524_55536,input_checker55525_55537,output_checker55526_55538){
return (function (){return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__837__auto__,ufv___55534,output_schema55523_55535,input_schema55524_55536,input_checker55525_55537,output_checker55526_55538))
} else
{return ((function (validate__837__auto__,ufv___55534,output_schema55523_55535,input_schema55524_55536,input_checker55525_55537,output_checker55526_55538){
return (function (){return null;
});
;})(validate__837__auto__,ufv___55534,output_schema55523_55535,input_schema55524_55536,input_checker55525_55537,output_checker55526_55538))

}
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___55542 = (function (){var G__55533 = o__840__auto__;return (output_checker55526_55538.cljs$core$IFn$_invoke$arity$1 ? output_checker55526_55538.cljs$core$IFn$_invoke$arity$1(G__55533) : output_checker55526_55538.call(null,G__55533));
})();if(cljs.core.truth_(temp__4126__auto___55542))
{var error__839__auto___55543 = temp__4126__auto___55542;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___55543], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55523_55535,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___55543], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___55534,output_schema55523_55535,input_schema55524_55536,input_checker55525_55537,output_checker55526_55538))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.mixins.event_listener),schema.core.make_fn_schema(output_schema55523_55535,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55524_55536], null)));
/**
* Handles a sequence of listeners for the component, and removes them
* from the document when the component is unmounted.
*/
om_bootstrap.mixins.set_listener_mixin = {"set_listener": (function (target55548,event_type55549,callback55550){var this55547 = this;return ((function (this55547){
return (function (owner,target,event_type,callback){var remove_fn = om_bootstrap.mixins.event_listener(target,event_type,callback);return owner.listeners.push(remove_fn);
});})(this55547))
.call(null,this55547,target55548,event_type55549,callback55550);
}), "componentWillUnmount": (function (){var this55546 = this;return ((function (this55546){
return (function (owner){return owner.listeners.map(((function (this55546){
return (function (p1__55544_SHARP_){return (p1__55544_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__55544_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__55544_SHARP_.call(null));
});})(this55546))
);
});})(this55546))
.call(null,this55546);
}), "componentWillMount": (function (){var this55545 = this;return ((function (this55545){
return (function (owner){return owner.listeners = [];
});})(this55545))
.call(null,this55545);
})};
/**
* Handles a sequence of timeouts for the component, and removes them
* from the document when the component is unmounted.
*/
om_bootstrap.mixins.set_timeout_mixin = {"set_timeout": (function (f55555,timeout55556){var this55554 = this;return ((function (this55554){
return (function (owner,f,timeout){var timeout__$1 = (function (){var G__55558 = f;var G__55559 = timeout;return setTimeout(G__55558,G__55559);
})();return owner.timeouts.push(timeout__$1);
});})(this55554))
.call(null,this55554,f55555,timeout55556);
}), "componentWillUnmount": (function (){var this55553 = this;return ((function (this55553){
return (function (owner){return owner.timeouts.map(((function (this55553){
return (function (p1__55551_SHARP_){var G__55557 = p1__55551_SHARP_;return clearTimeout(G__55557);
});})(this55553))
);
});})(this55553))
.call(null,this55553);
}), "componentWillMount": (function (){var this55552 = this;return ((function (this55552){
return (function (owner){return owner.timeouts = [];
});})(this55552))
.call(null,this55552);
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
var G__55560 = node__$1.parentNode;
node__$1 = G__55560;
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
{var G__55563 = false;return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__55563) : set_state.call(null,G__55563));
}
});})(set_state))
),om_bootstrap.mixins.event_listener(document,"keyup",((function (set_state){
return (function (e){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(om_bootstrap.mixins.ESCAPE_KEY,e.keyCode))
{var G__55564 = false;return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__55564) : set_state.call(null,G__55564));
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
return (function (p1__55565_SHARP_){return (p1__55565_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__55565_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__55565_SHARP_.call(null));
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
om_bootstrap.mixins.dropdown_mixin = {"setDropdownState": (function (open_QMARK_55570){var this55569 = this;return ((function (this55569){
return (function (owner,open_QMARK_){if(cljs.core.truth_(open_QMARK_))
{om_bootstrap.mixins.bind_root_close_handlers_BANG_(owner);
} else
{om_bootstrap.mixins.unbind_root_close_handlers_BANG_(owner);
}
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this55569))
.call(null,this55569,open_QMARK_55570);
}), "isDropdownOpen": (function (){var this55568 = this;return ((function (this55568){
return (function (owner){return om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this55568))
.call(null,this55568);
}), "componentWillUnmount": (function (){var this55567 = this;return ((function (this55567){
return (function (owner){return om_bootstrap.mixins.unbind_root_close_handlers_BANG_(owner);
});})(this55567))
.call(null,this55567);
}), "getInitialState": (function (){var this55566 = this;return ((function (this55566){
return (function (_){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this55566))
.call(null,this55566);
})};
//# sourceMappingURL=mixins.js.map