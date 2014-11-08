goog.provide('om_bootstrap.panel');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om_bootstrap.mixins');
goog.require('om_bootstrap.mixins');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om.core');
goog.require('om.core');
goog.require('om_bootstrap.types');
goog.require('om_tools.dom');
om_bootstrap.panel.Panel = om_bootstrap.types.bootstrap(new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key(new cljs.core.Keyword(null,"header","header",119441134)),om_bootstrap.types.Renderable,schema.core.optional_key(new cljs.core.Keyword(null,"footer","footer",1606445390)),om_bootstrap.types.Renderable,schema.core.optional_key(new cljs.core.Keyword(null,"list-group","list-group",-304522729)),om_bootstrap.types.Renderable], true, false));
var ufv___56578 = schema.utils.use_fn_validation;var output_schema56566_56579 = om_bootstrap.types.Component;var input_schema56567_56580 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.panel.Panel,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker56568_56581 = schema.core.checker(input_schema56567_56580);var output_checker56569_56582 = schema.core.checker(output_schema56566_56579);/**
* Inputs: [opts :- Panel & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.panel.panel = ((function (ufv___56578,output_schema56566_56579,input_schema56567_56580,input_checker56568_56581,output_checker56569_56582){
return (function() { 
var panel__delegate = function (G__56570,rest56571){var validate__837__auto__ = ufv___56578.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___56583 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__56570,rest56571);var temp__4126__auto___56584 = (function (){var G__56575 = args__838__auto___56583;return (input_checker56568_56581.cljs$core$IFn$_invoke$arity$1 ? input_checker56568_56581.cljs$core$IFn$_invoke$arity$1(G__56575) : input_checker56568_56581.call(null,G__56575));
})();if(cljs.core.truth_(temp__4126__auto___56584))
{var error__839__auto___56585 = temp__4126__auto___56584;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"panel","panel",1081894071,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56585], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema56567_56580,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___56583,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56585], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__56570;var children = rest56571;while(true){
var vec__56576 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$3(om_bootstrap.panel.Panel,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"panel",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56576,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56576,(1),null);var classes = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(om_bootstrap.types.bs_class_set(bs),new cljs.core.Keyword(null,"panel","panel",-558637456),true);return om_tools.dom.element(React.DOM.div,om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(classes)], null)], 0)),(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4126__auto__))
{var header = temp__4126__auto__;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "panel-heading"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$2(header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-title"], null))],null))));
} else
{return null;
}
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,children))))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"ref": "body", "className": "panel-body"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"list-group","list-group",-304522729).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4126__auto__))
{var list_group = temp__4126__auto__;return list_group;
} else
{return null;
}
})(),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"footer","footer",1606445390).cljs$core$IFn$_invoke$arity$1(bs);if(cljs.core.truth_(temp__4126__auto__))
{var footer = temp__4126__auto__;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "panel-footer"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[footer],null))));
} else
{return null;
}
})()],null)));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___56586 = (function (){var G__56577 = o__840__auto__;return (output_checker56569_56582.cljs$core$IFn$_invoke$arity$1 ? output_checker56569_56582.cljs$core$IFn$_invoke$arity$1(G__56577) : output_checker56569_56582.call(null,G__56577));
})();if(cljs.core.truth_(temp__4126__auto___56586))
{var error__839__auto___56587 = temp__4126__auto___56586;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"panel","panel",1081894071,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___56587], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema56566_56579,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___56587], null));
} else
{}
} else
{}
return o__840__auto__;
};
var panel = function (G__56570,var_args){
var rest56571 = null;if (arguments.length > 1) {
  rest56571 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return panel__delegate.call(this,G__56570,rest56571);};
panel.cljs$lang$maxFixedArity = 1;
panel.cljs$lang$applyTo = (function (arglist__56588){
var G__56570 = cljs.core.first(arglist__56588);
var rest56571 = cljs.core.rest(arglist__56588);
return panel__delegate(G__56570,rest56571);
});
panel.cljs$core$IFn$_invoke$arity$variadic = panel__delegate;
return panel;
})()
;})(ufv___56578,output_schema56566_56579,input_schema56567_56580,input_checker56568_56581,output_checker56569_56582))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.panel.panel),schema.core.make_fn_schema(output_schema56566_56579,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema56567_56580], null)));
//# sourceMappingURL=panel.js.map