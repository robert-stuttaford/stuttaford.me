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
var ufv___38128 = schema.utils.use_fn_validation;var output_schema38117_38129 = schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));var input_schema38118_38130 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"target","target",1893533248,null)),schema.core.one(schema.core.Str,new cljs.core.Symbol(null,"event-type","event-type",1960254340,null)),schema.core.one(schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null))], null);var input_checker38119_38131 = schema.core.checker(input_schema38118_38130);var output_checker38120_38132 = schema.core.checker(output_schema38117_38129);/**
* Inputs: [target :- s/Any event-type :- s/Str callback :- (sm/=> s/Any s/Any)]
* Returns: (sm/=> s/Any)
* 
* Registers the callback on the supplied target for events of type
* `event-type`. Returns a function of no arguments that, when called,
* unregisters the callback.
*/
om_bootstrap.mixins.event_listener = ((function (ufv___38128,output_schema38117_38129,input_schema38118_38130,input_checker38119_38131,output_checker38120_38132){
return (function event_listener(G__38121,G__38122,G__38123){var validate__837__auto__ = ufv___38128.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___38133 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__38121,G__38122,G__38123], null);var temp__4126__auto___38134 = (function (){var G__38126 = args__838__auto___38133;return (input_checker38119_38131.cljs$core$IFn$_invoke$arity$1 ? input_checker38119_38131.cljs$core$IFn$_invoke$arity$1(G__38126) : input_checker38119_38131.call(null,G__38126));
})();if(cljs.core.truth_(temp__4126__auto___38134))
{var error__839__auto___38135 = temp__4126__auto___38134;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38135], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38118_38130,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___38133,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38135], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var target = G__38121;var event_type = G__38122;var callback = G__38123;while(true){
if(cljs.core.truth_(target.addEventListener))
{target.addEventListener(event_type,callback,false);
return ((function (validate__837__auto__,ufv___38128,output_schema38117_38129,input_schema38118_38130,input_checker38119_38131,output_checker38120_38132){
return (function (){return target.removeEventListener(event_type,callback,false);
});
;})(validate__837__auto__,ufv___38128,output_schema38117_38129,input_schema38118_38130,input_checker38119_38131,output_checker38120_38132))
} else
{if(cljs.core.truth_(target.attachEvent))
{var event_type__$1 = ("on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_type));target.attachEvent(event_type__$1,callback);
return ((function (event_type__$1,validate__837__auto__,ufv___38128,output_schema38117_38129,input_schema38118_38130,input_checker38119_38131,output_checker38120_38132){
return (function (){return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__837__auto__,ufv___38128,output_schema38117_38129,input_schema38118_38130,input_checker38119_38131,output_checker38120_38132))
} else
{return ((function (validate__837__auto__,ufv___38128,output_schema38117_38129,input_schema38118_38130,input_checker38119_38131,output_checker38120_38132){
return (function (){return null;
});
;})(validate__837__auto__,ufv___38128,output_schema38117_38129,input_schema38118_38130,input_checker38119_38131,output_checker38120_38132))

}
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___38136 = (function (){var G__38127 = o__840__auto__;return (output_checker38120_38132.cljs$core$IFn$_invoke$arity$1 ? output_checker38120_38132.cljs$core$IFn$_invoke$arity$1(G__38127) : output_checker38120_38132.call(null,G__38127));
})();if(cljs.core.truth_(temp__4126__auto___38136))
{var error__839__auto___38137 = temp__4126__auto___38136;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___38137], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38117_38129,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___38137], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___38128,output_schema38117_38129,input_schema38118_38130,input_checker38119_38131,output_checker38120_38132))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.mixins.event_listener),schema.core.make_fn_schema(output_schema38117_38129,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38118_38130], null)));
/**
* Handles a sequence of listeners for the component, and removes them
* from the document when the component is unmounted.
*/
om_bootstrap.mixins.set_listener_mixin = {"set_listener": (function (target38142,event_type38143,callback38144){var this38141 = this;return ((function (this38141){
return (function (owner,target,event_type,callback){var remove_fn = om_bootstrap.mixins.event_listener(target,event_type,callback);return owner.listeners.push(remove_fn);
});})(this38141))
.call(null,this38141,target38142,event_type38143,callback38144);
}), "componentWillUnmount": (function (){var this38140 = this;return ((function (this38140){
return (function (owner){return owner.listeners.map(((function (this38140){
return (function (p1__38138_SHARP_){return (p1__38138_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__38138_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__38138_SHARP_.call(null));
});})(this38140))
);
});})(this38140))
.call(null,this38140);
}), "componentWillMount": (function (){var this38139 = this;return ((function (this38139){
return (function (owner){return owner.listeners = [];
});})(this38139))
.call(null,this38139);
})};
/**
* Handles a sequence of timeouts for the component, and removes them
* from the document when the component is unmounted.
*/
om_bootstrap.mixins.set_timeout_mixin = {"set_timeout": (function (f38149,timeout38150){var this38148 = this;return ((function (this38148){
return (function (owner,f,timeout){var timeout__$1 = (function (){var G__38152 = f;var G__38153 = timeout;return setTimeout(G__38152,G__38153);
})();return owner.timeouts.push(timeout__$1);
});})(this38148))
.call(null,this38148,f38149,timeout38150);
}), "componentWillUnmount": (function (){var this38147 = this;return ((function (this38147){
return (function (owner){return owner.timeouts.map(((function (this38147){
return (function (p1__38145_SHARP_){var G__38151 = p1__38145_SHARP_;return clearTimeout(G__38151);
});})(this38147))
);
});})(this38147))
.call(null,this38147);
}), "componentWillMount": (function (){var this38146 = this;return ((function (this38146){
return (function (owner){return owner.timeouts = [];
});})(this38146))
.call(null,this38146);
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
var G__38154 = node__$1.parentNode;
node__$1 = G__38154;
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
{var G__38157 = false;return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__38157) : set_state.call(null,G__38157));
}
});})(set_state))
),om_bootstrap.mixins.event_listener(document,"keyup",((function (set_state){
return (function (e){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(om_bootstrap.mixins.ESCAPE_KEY,e.keyCode))
{var G__38158 = false;return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__38158) : set_state.call(null,G__38158));
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
return (function (p1__38159_SHARP_){return (p1__38159_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__38159_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__38159_SHARP_.call(null));
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
om_bootstrap.mixins.dropdown_mixin = {"setDropdownState": (function (open_QMARK_38164){var this38163 = this;return ((function (this38163){
return (function (owner,open_QMARK_){if(cljs.core.truth_(open_QMARK_))
{om_bootstrap.mixins.bind_root_close_handlers_BANG_(owner);
} else
{om_bootstrap.mixins.unbind_root_close_handlers_BANG_(owner);
}
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this38163))
.call(null,this38163,open_QMARK_38164);
}), "isDropdownOpen": (function (){var this38162 = this;return ((function (this38162){
return (function (owner){return om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this38162))
.call(null,this38162);
}), "componentWillUnmount": (function (){var this38161 = this;return ((function (this38161){
return (function (owner){return om_bootstrap.mixins.unbind_root_close_handlers_BANG_(owner);
});})(this38161))
.call(null,this38161);
}), "getInitialState": (function (){var this38160 = this;return ((function (this38160){
return (function (_){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this38160))
.call(null,this38160);
})};
//# sourceMappingURL=mixins.js.map