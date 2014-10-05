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
var ufv___48684 = schema.utils.use_fn_validation;var output_schema48673_48685 = schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));var input_schema48674_48686 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"target","target",1893533248,null)),schema.core.one(schema.core.Str,new cljs.core.Symbol(null,"event-type","event-type",1960254340,null)),schema.core.one(schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null))], null);var input_checker48675_48687 = schema.core.checker(input_schema48674_48686);var output_checker48676_48688 = schema.core.checker(output_schema48673_48685);/**
* Inputs: [target :- s/Any event-type :- s/Str callback :- (sm/=> s/Any s/Any)]
* Returns: (sm/=> s/Any)
* 
* Registers the callback on the supplied target for events of type
* `event-type`. Returns a function of no arguments that, when called,
* unregisters the callback.
*/
om_bootstrap.mixins.event_listener = ((function (ufv___48684,output_schema48673_48685,input_schema48674_48686,input_checker48675_48687,output_checker48676_48688){
return (function event_listener(G__48677,G__48678,G__48679){var validate__837__auto__ = ufv___48684.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___48689 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__48677,G__48678,G__48679], null);var temp__4126__auto___48690 = (function (){var G__48682 = args__838__auto___48689;return (input_checker48675_48687.cljs$core$IFn$_invoke$arity$1 ? input_checker48675_48687.cljs$core$IFn$_invoke$arity$1(G__48682) : input_checker48675_48687.call(null,G__48682));
})();if(cljs.core.truth_(temp__4126__auto___48690))
{var error__839__auto___48691 = temp__4126__auto___48690;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48691], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema48674_48686,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___48689,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48691], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var target = G__48677;var event_type = G__48678;var callback = G__48679;while(true){
if(cljs.core.truth_(target.addEventListener))
{target.addEventListener(event_type,callback,false);
return ((function (validate__837__auto__,ufv___48684,output_schema48673_48685,input_schema48674_48686,input_checker48675_48687,output_checker48676_48688){
return (function (){return target.removeEventListener(event_type,callback,false);
});
;})(validate__837__auto__,ufv___48684,output_schema48673_48685,input_schema48674_48686,input_checker48675_48687,output_checker48676_48688))
} else
{if(cljs.core.truth_(target.attachEvent))
{var event_type__$1 = ("on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_type));target.attachEvent(event_type__$1,callback);
return ((function (event_type__$1,validate__837__auto__,ufv___48684,output_schema48673_48685,input_schema48674_48686,input_checker48675_48687,output_checker48676_48688){
return (function (){return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__837__auto__,ufv___48684,output_schema48673_48685,input_schema48674_48686,input_checker48675_48687,output_checker48676_48688))
} else
{return ((function (validate__837__auto__,ufv___48684,output_schema48673_48685,input_schema48674_48686,input_checker48675_48687,output_checker48676_48688){
return (function (){return null;
});
;})(validate__837__auto__,ufv___48684,output_schema48673_48685,input_schema48674_48686,input_checker48675_48687,output_checker48676_48688))

}
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___48692 = (function (){var G__48683 = o__840__auto__;return (output_checker48676_48688.cljs$core$IFn$_invoke$arity$1 ? output_checker48676_48688.cljs$core$IFn$_invoke$arity$1(G__48683) : output_checker48676_48688.call(null,G__48683));
})();if(cljs.core.truth_(temp__4126__auto___48692))
{var error__839__auto___48693 = temp__4126__auto___48692;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___48693], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema48673_48685,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___48693], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv___48684,output_schema48673_48685,input_schema48674_48686,input_checker48675_48687,output_checker48676_48688))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.mixins.event_listener),schema.core.make_fn_schema(output_schema48673_48685,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema48674_48686], null)));
/**
* Handles a sequence of listeners for the component, and removes them
* from the document when the component is unmounted.
*/
om_bootstrap.mixins.set_listener_mixin = {"set_listener": (function (target48698,event_type48699,callback48700){var this48697 = this;return ((function (this48697){
return (function (owner,target,event_type,callback){var remove_fn = om_bootstrap.mixins.event_listener(target,event_type,callback);return owner.listeners.push(remove_fn);
});})(this48697))
.call(null,this48697,target48698,event_type48699,callback48700);
}), "componentWillUnmount": (function (){var this48696 = this;return ((function (this48696){
return (function (owner){return owner.listeners.map(((function (this48696){
return (function (p1__48694_SHARP_){return (p1__48694_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__48694_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__48694_SHARP_.call(null));
});})(this48696))
);
});})(this48696))
.call(null,this48696);
}), "componentWillMount": (function (){var this48695 = this;return ((function (this48695){
return (function (owner){return owner.listeners = [];
});})(this48695))
.call(null,this48695);
})};
/**
* Handles a sequence of timeouts for the component, and removes them
* from the document when the component is unmounted.
*/
om_bootstrap.mixins.set_timeout_mixin = {"set_timeout": (function (f48705,timeout48706){var this48704 = this;return ((function (this48704){
return (function (owner,f,timeout){var timeout__$1 = (function (){var G__48708 = f;var G__48709 = timeout;return setTimeout(G__48708,G__48709);
})();return owner.timeouts.push(timeout__$1);
});})(this48704))
.call(null,this48704,f48705,timeout48706);
}), "componentWillUnmount": (function (){var this48703 = this;return ((function (this48703){
return (function (owner){return owner.timeouts.map(((function (this48703){
return (function (p1__48701_SHARP_){var G__48707 = p1__48701_SHARP_;return clearTimeout(G__48707);
});})(this48703))
);
});})(this48703))
.call(null,this48703);
}), "componentWillMount": (function (){var this48702 = this;return ((function (this48702){
return (function (owner){return owner.timeouts = [];
});})(this48702))
.call(null,this48702);
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
var G__48710 = node__$1.parentNode;
node__$1 = G__48710;
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
{var G__48713 = false;return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__48713) : set_state.call(null,G__48713));
}
});})(set_state))
),om_bootstrap.mixins.event_listener(document,"keyup",((function (set_state){
return (function (e){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(om_bootstrap.mixins.ESCAPE_KEY,e.keyCode))
{var G__48714 = false;return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__48714) : set_state.call(null,G__48714));
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
return (function (p1__48715_SHARP_){return (p1__48715_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__48715_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__48715_SHARP_.call(null));
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
om_bootstrap.mixins.dropdown_mixin = {"setDropdownState": (function (open_QMARK_48720){var this48719 = this;return ((function (this48719){
return (function (owner,open_QMARK_){if(cljs.core.truth_(open_QMARK_))
{om_bootstrap.mixins.bind_root_close_handlers_BANG_(owner);
} else
{om_bootstrap.mixins.unbind_root_close_handlers_BANG_(owner);
}
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this48719))
.call(null,this48719,open_QMARK_48720);
}), "isDropdownOpen": (function (){var this48718 = this;return ((function (this48718){
return (function (owner){return om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this48718))
.call(null,this48718);
}), "componentWillUnmount": (function (){var this48717 = this;return ((function (this48717){
return (function (owner){return om_bootstrap.mixins.unbind_root_close_handlers_BANG_(owner);
});})(this48717))
.call(null,this48717);
}), "getInitialState": (function (){var this48716 = this;return ((function (this48716){
return (function (_){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this48716))
.call(null,this48716);
})};
//# sourceMappingURL=mixins.js.map