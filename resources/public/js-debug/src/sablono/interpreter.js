goog.provide('sablono.interpreter');
goog.require('cljs.core');
goog.require('sablono.util');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('clojure.string');
sablono.interpreter.IInterpreter = (function (){var obj47126 = {};return obj47126;
})();
sablono.interpreter.interpret = (function interpret(this$){if((function (){var and__19277__auto__ = this$;if(and__19277__auto__)
{return this$.sablono$interpreter$IInterpreter$interpret$arity$1;
} else
{return and__19277__auto__;
}
})())
{return this$.sablono$interpreter$IInterpreter$interpret$arity$1(this$);
} else
{var x__20556__auto__ = (((this$ == null))?null:this$);return (function (){var or__19289__auto__ = (sablono.interpreter.interpret[(function (){var G__47130 = x__20556__auto__;return goog.typeOf(G__47130);
})()]);if(or__19289__auto__)
{return or__19289__auto__;
} else
{var or__19289__auto____$1 = (sablono.interpreter.interpret["_"]);if(or__19289__auto____$1)
{return or__19289__auto____$1;
} else
{throw cljs.core.missing_protocol("IInterpreter.interpret",this$);
}
}
})().call(null,this$);
}
});
sablono.interpreter.wrap_form_element = (function wrap_form_element(ctor,display_name){var G__47134 = {"render": (function (){var this$ = this;return this$.transferPropsTo((function (){var G__47136 = {"children": (this$.props["children"]), "onChange": (this$["onChange"]), "value": (this$.state["value"])};return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__47136) : ctor.call(null,G__47136));
})());
}), "componentWillReceiveProps": (function (new_props){var this$ = this;return this$.setState({"value": (new_props["value"])});
}), "onChange": (function (e){var this$ = this;var handler = (this$.props["onChange"]);if((handler == null))
{return null;
} else
{var G__47135_47137 = e;(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__47135_47137) : handler.call(null,G__47135_47137));
return this$.setState({"value": e.target.value});
}
}), "getInitialState": (function (){var this$ = this;return {"value": (this$.props["value"])};
}), "getDisplayName": (function (){return display_name;
})};return React.createClass(G__47134);
});
sablono.interpreter.input = sablono.interpreter.wrap_form_element(React.DOM.input,"input");
sablono.interpreter.option = sablono.interpreter.wrap_form_element(React.DOM.option,"option");
sablono.interpreter.textarea = sablono.interpreter.wrap_form_element(React.DOM.textarea,"textarea");
sablono.interpreter.dom_fn = (function dom_fn(tag){var temp__4124__auto__ = (React.DOM[cljs.core.name(tag)]);if(cljs.core.truth_(temp__4124__auto__))
{var dom_fn__$1 = temp__4124__auto__;return cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"input","input",556931961),sablono.interpreter.input,new cljs.core.Keyword(null,"option","option",65132272),sablono.interpreter.option,new cljs.core.Keyword(null,"textarea","textarea",-650375824),sablono.interpreter.textarea], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag),dom_fn__$1);
} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(("Unsupported HTML tag: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(tag))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag], null));
}
});
sablono.interpreter.attributes = (function attributes(attrs){var attrs__$1 = cljs.core.clj__GT_js(sablono.util.html_to_dom_attrs(attrs));var class$ = attrs__$1.className;var class$__$1 = ((class$ instanceof Array)?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",class$):class$);if(cljs.core.truth_(clojure.string.blank_QMARK_(class$__$1)))
{delete attrs__$1["className"];
} else
{attrs__$1.className = class$__$1;
}
return attrs__$1;
});
/**
* Render an element vector as a HTML element.
*/
sablono.interpreter.element = (function element(element__$1){var vec__47143 = sablono.util.normalize_element(element__$1);var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47143,(0),null);var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47143,(1),null);var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47143,(2),null);var f = sablono.interpreter.dom_fn(tag);var js_attrs = sablono.interpreter.attributes(attrs);if((cljs.core.sequential_QMARK_(content)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(content))))
{var G__47144 = js_attrs;var G__47145 = sablono.interpreter.interpret(cljs.core.first(content));return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__47144,G__47145) : f.call(null,G__47144,G__47145));
} else
{if(cljs.core.truth_(content))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,js_attrs,sablono.interpreter.interpret(content));
} else
{var G__47146 = js_attrs;var G__47147 = null;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__47146,G__47147) : f.call(null,G__47146,G__47147));

}
}
});
sablono.interpreter.interpret_seq = (function interpret_seq(s){return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.interpreter.interpret,s));
});
(sablono.interpreter.IInterpreter["null"] = true);
(sablono.interpreter.interpret["null"] = (function (this$){return null;
}));
(sablono.interpreter.IInterpreter["_"] = true);
(sablono.interpreter.interpret["_"] = (function (this$){return this$;
}));
cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$ = true;
cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){var this$__$1 = this;return sablono.interpreter.element(this$__$1);
});
cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$ = true;
cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){var this$__$1 = this;return sablono.interpreter.element(this$__$1);
});
cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$ = true;
cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){var this$__$1 = this;return sablono.interpreter.interpret_seq(this$__$1);
});
cljs.core.List.prototype.sablono$interpreter$IInterpreter$ = true;
cljs.core.List.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){var this$__$1 = this;return sablono.interpreter.interpret_seq(this$__$1);
});
cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$ = true;
cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){var this$__$1 = this;return sablono.interpreter.interpret_seq(this$__$1);
});
cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$ = true;
cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){var this$__$1 = this;return sablono.interpreter.interpret_seq(this$__$1);
});
cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$ = true;
cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){var this$__$1 = this;return sablono.interpreter.interpret_seq(this$__$1);
});
//# sourceMappingURL=interpreter.js.map