goog.provide('stuttaford.om.common');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.core');
goog.require('goog.dom');
goog.require('cljs.reader');
goog.require('cljs.reader');
stuttaford.om.common.config = (function() {
var config = null;
var config__1 = (function (owner){var or__19289__auto__ = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,new cljs.core.Keyword(null,"config","config",994861415));if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
var config__2 = (function (owner,key){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(config.cljs$core$IFn$_invoke$arity$1(owner),key);
});
config = function(owner,key){
switch(arguments.length){
case 1:
return config__1.call(this,owner);
case 2:
return config__2.call(this,owner,key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
config.cljs$core$IFn$_invoke$arity$1 = config__1;
config.cljs$core$IFn$_invoke$arity$2 = config__2;
return config;
})()
;
stuttaford.om.common.control_chan = (function control_chan(owner){return om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,new cljs.core.Keyword(null,"control-chan","control-chan",-1773911405));
});
stuttaford.om.common.log_tx = (function log_tx(tx_data,root_cursor){var map__45798 = tx_data;var map__45798__$1 = ((cljs.core.seq_QMARK_(map__45798))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45798):map__45798);var new_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45798__$1,new cljs.core.Keyword(null,"new-value","new-value",1087038368));var old_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45798__$1,new cljs.core.Keyword(null,"old-value","old-value",862546795));var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45798__$1,new cljs.core.Keyword(null,"path","path",-188191168));var c = console;var G__45799_45802 = c;G__45799_45802.group(("TRANSACTION "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)));
G__45799_45802.groupCollapsed("OLD");
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([old_value], 0))], 0));
var G__45800_45803 = c;G__45800_45803.groupEnd();
G__45800_45803.group("NEW");
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new_value], 0))], 0));
var G__45801 = c;G__45801.groupEnd();
G__45801.groupEnd();
return G__45801;
});
stuttaford.om.common.render = (function render(root,state,app,debug_QMARK_){if(cljs.core.truth_(debug_QMARK_))
{cljs.core.enable_console_print_BANG_();
} else
{}
return om.core.root(app,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.array_seq([new cljs.core.Keyword(null,"config","config",994861415)], 0)),(function (){var G__45805 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),root,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"config","config",994861415),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"debug?","debug?",-1831756173),debug_QMARK_)], null),new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(state)], 0))], null);var G__45805__$1 = (cljs.core.truth_(debug_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45805,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),stuttaford.om.common.log_tx):G__45805);return G__45805__$1;
})());
});
stuttaford.om.common.start = (function() {
var start = null;
var start__3 = (function (app_id,state_id,app){return start.cljs$core$IFn$_invoke$arity$4(app_id,state_id,app,cljs.core.PersistentArrayMap.EMPTY);
});
var start__4 = (function (app_id,state_id,app,initial_state){return start.cljs$core$IFn$_invoke$arity$5(app_id,state_id,app,initial_state,false);
});
var start__5 = (function (app_id,state_id,app,initial_state,debug_QMARK_){return stuttaford.om.common.render((function (){var G__45817 = app_id;return goog.dom.getElement(G__45817);
})(),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([initial_state,cljs.reader.read_string((function (){var G__45818 = state_id;return goog.dom.getElement(G__45818);
})().textContent)], 0)),app,debug_QMARK_);
});
start = function(app_id,state_id,app,initial_state,debug_QMARK_){
switch(arguments.length){
case 3:
return start__3.call(this,app_id,state_id,app);
case 4:
return start__4.call(this,app_id,state_id,app,initial_state);
case 5:
return start__5.call(this,app_id,state_id,app,initial_state,debug_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start.cljs$core$IFn$_invoke$arity$3 = start__3;
start.cljs$core$IFn$_invoke$arity$4 = start__4;
start.cljs$core$IFn$_invoke$arity$5 = start__5;
return start;
})()
;
//# sourceMappingURL=common.js.map