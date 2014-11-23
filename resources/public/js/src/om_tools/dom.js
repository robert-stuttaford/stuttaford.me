goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* Converts kebab-case to camelCase
*/
om_tools.dom.camel_case = (function camel_case(s){return clojure.string.replace(s,/-(\w)/,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case,cljs.core.second));
});
/**
* Converts attributes that are kebab-case and should be camelCase
*/
om_tools.dom.opt_key_case = (function opt_key_case(attr){if(cljs.core.truth_((function (){var or__19663__auto__ = (cljs.core.count(attr) < (5));if(or__19663__auto__)
{return or__19663__auto__;
} else
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria-",null,"data-",null], null), null).call(null,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(attr,(0),(5)));
}
})()))
{return attr;
} else
{return om_tools.dom.camel_case(attr);
}
});
/**
* Converts aliased attributes
*/
om_tools.dom.opt_key_alias = (function opt_key_alias(opt){var G__38107 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);switch (G__38107) {
case "for":
return new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720);

break;
case "class":
return new cljs.core.Keyword(null,"className","className",-1983287057);

break;
default:
return opt;

}
});
/**
* Returns potentially formatted name for DOM element attribute.
* Converts kebab-case to camelCase.
*/
om_tools.dom.format_opt_key = (function format_opt_key(opt_key){return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(om_tools.dom.opt_key_case(cljs.core.name(om_tools.dom.opt_key_alias(opt_key))));
});
/**
* Returns potentially modified value for DOM element attribute.
* Recursively formats map values (ie :style attribute)
*/
om_tools.dom.format_opt_val = (function format_opt_val(opt_val){if(cljs.core.map_QMARK_(opt_val))
{var G__38110 = opt_val;return (om_tools.dom.format_opts.cljs$core$IFn$_invoke$arity$1 ? om_tools.dom.format_opts.cljs$core$IFn$_invoke$arity$1(G__38110) : om_tools.dom.format_opts.call(null,G__38110));
} else
{return opt_val;

}
});
/**
* Returns JavaScript object for React DOM attributes from opts map
*/
om_tools.dom.format_opts = (function format_opts(opts){if(cljs.core.map_QMARK_(opts))
{return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38113){var vec__38114 = p__38113;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38114,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38114,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key(k),om_tools.dom.format_opt_val(v)], null);
}),opts)));
} else
{return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function possible_coll_QMARK_(form){return (cljs.core.coll_QMARK_(form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_(form));
});
om_tools.dom.form_tags = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.Symbol(null,"textarea","textarea",990155703,null),new cljs.core.Symbol(null,"option","option",1705663799,null)], null);
om_tools.dom.el_ctor = (function el_ctor(tag){if(cljs.core.truth_(cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,tag),om_tools.dom.form_tags)))
{return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("om.dom",cljs.core.name(tag));
} else
{return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",("React.DOM."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(tag))));
}
});
/**
* Returns a vector of [opts children] for from first and second
* argument given to DOM function
*/
om_tools.dom.element_args = (function element_args(opts,children){if((opts == null))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else
{if(cljs.core.map_QMARK_(opts))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts(opts),children], null);
} else
{if(cljs.core.object_QMARK_(opts))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons(opts,children)], null);

}
}
}
});
om_tools.dom.element = (function element(ctor,opts,children){var vec__38116 = om_tools.dom.element_args(opts,children);var opts__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38116,(0),null);var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38116,(1),null);return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor,cljs.core.flatten(cljs.core.cons(opts__$1,children__$1)));
});
om_tools.dom.class_set = (function class_set(m){var temp__4126__auto__ = cljs.core.seq(cljs.core.distinct(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.val,m)))));if(temp__4126__auto__)
{var ks = temp__4126__auto__;return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",ks);
} else
{return null;
}
});
//# sourceMappingURL=dom.js.map