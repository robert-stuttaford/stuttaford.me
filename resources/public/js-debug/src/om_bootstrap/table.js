goog.provide('om_bootstrap.table');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om.core');
goog.require('om.core');
goog.require('om_bootstrap.types');
goog.require('om_tools.dom');
om_bootstrap.table.Table = new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key(new cljs.core.Keyword(null,"striped?","striped?",-797214979)),schema.core.Bool,schema.core.optional_key(new cljs.core.Keyword(null,"bordered?","bordered?",562358476)),schema.core.Bool,schema.core.optional_key(new cljs.core.Keyword(null,"condensed?","condensed?",-109797520)),schema.core.Bool,schema.core.optional_key(new cljs.core.Keyword(null,"hover?","hover?",-1201331489)),schema.core.Bool,schema.core.optional_key(new cljs.core.Keyword(null,"responsive?","responsive?",-683696941)),schema.core.Bool], true, false);
var ufv___39108 = schema.utils.use_fn_validation;var output_schema39096_39109 = schema.core.Any;var input_schema39097_39110 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(om_bootstrap.table.Table,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);var input_checker39098_39111 = schema.core.checker(input_schema39097_39110);var output_checker39099_39112 = schema.core.checker(output_schema39096_39109);/**
* Inputs: [opts :- Table & children]
* 
* Generates a Bootstrap table wrapper.
* @param {...*} var_args
*/
om_bootstrap.table.table = ((function (ufv___39108,output_schema39096_39109,input_schema39097_39110,input_checker39098_39111,output_checker39099_39112){
return (function() { 
var table__delegate = function (G__39100,rest39101){var validate__837__auto__ = ufv___39108.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___39113 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(G__39100,rest39101);var temp__4126__auto___39114 = (function (){var G__39105 = args__838__auto___39113;return (input_checker39098_39111.cljs$core$IFn$_invoke$arity$1 ? input_checker39098_39111.cljs$core$IFn$_invoke$arity$1(G__39105) : input_checker39098_39111.call(null,G__39105));
})();if(cljs.core.truth_(temp__4126__auto___39114))
{var error__839__auto___39115 = temp__4126__auto___39114;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"table","table",1075588491,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39115], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39097_39110,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___39113,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39115], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var opts = G__39100;var children = rest39101;while(true){
var vec__39106 = om_bootstrap.types.separate.cljs$core$IFn$_invoke$arity$2(om_bootstrap.table.Table,opts);var bs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39106,(0),null);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39106,(1),null);var klasses = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"table","table",-564943036),true,new cljs.core.Keyword(null,"table-striped","table-striped",-120331850),new cljs.core.Keyword(null,"striped?","striped?",-797214979).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"table-bordered","table-bordered",382462305),new cljs.core.Keyword(null,"bordered?","bordered?",562358476).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"table-condensed","table-condensed",716299039),new cljs.core.Keyword(null,"condensed?","condensed?",-109797520).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"table-hover","table-hover",486607258),new cljs.core.Keyword(null,"hover?","hover?",-1201331489).cljs$core$IFn$_invoke$arity$1(opts)], null);var props__$1 = om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set(klasses)], null)], 0));var table__$1 = om_tools.dom.element(React.DOM.table,props__$1,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));if(cljs.core.truth_(new cljs.core.Keyword(null,"responsive?","responsive?",-683696941).cljs$core$IFn$_invoke$arity$1(opts)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"className": "table-responsive"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[table__$1],null))));
} else
{return table__$1;
}
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___39116 = (function (){var G__39107 = o__840__auto__;return (output_checker39099_39112.cljs$core$IFn$_invoke$arity$1 ? output_checker39099_39112.cljs$core$IFn$_invoke$arity$1(G__39107) : output_checker39099_39112.call(null,G__39107));
})();if(cljs.core.truth_(temp__4126__auto___39116))
{var error__839__auto___39117 = temp__4126__auto___39116;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"table","table",1075588491,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___39117], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39096_39109,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___39117], null));
} else
{}
} else
{}
return o__840__auto__;
};
var table = function (G__39100,var_args){
var rest39101 = null;if (arguments.length > 1) {
  rest39101 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return table__delegate.call(this,G__39100,rest39101);};
table.cljs$lang$maxFixedArity = 1;
table.cljs$lang$applyTo = (function (arglist__39118){
var G__39100 = cljs.core.first(arglist__39118);
var rest39101 = cljs.core.rest(arglist__39118);
return table__delegate(G__39100,rest39101);
});
table.cljs$core$IFn$_invoke$arity$variadic = table__delegate;
return table;
})()
;})(ufv___39108,output_schema39096_39109,input_schema39097_39110,input_checker39098_39111,output_checker39099_39112))
;
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(om_bootstrap.table.table),schema.core.make_fn_schema(output_schema39096_39109,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39097_39110], null)));
//# sourceMappingURL=table.js.map