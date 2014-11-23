goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__72399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__72399) : f.call(null,G__72399));
})());
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__72400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__72401 = x1;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__72400,G__72401) : f.call(null,G__72400,G__72401));
})());
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__72402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__72403 = x1;var G__72404 = x2;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__72402,G__72403,G__72404) : f.call(null,G__72402,G__72403,G__72404));
})());
});
var update__6 = (function() { 
var G__72405__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
};
var G__72405 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__72405__delegate.call(this,m,k,f,x1,x2,xs);};
G__72405.cljs$lang$maxFixedArity = 5;
G__72405.cljs$lang$applyTo = (function (arglist__72406){
var m = cljs.core.first(arglist__72406);
arglist__72406 = cljs.core.next(arglist__72406);
var k = cljs.core.first(arglist__72406);
arglist__72406 = cljs.core.next(arglist__72406);
var f = cljs.core.first(arglist__72406);
arglist__72406 = cljs.core.next(arglist__72406);
var x1 = cljs.core.first(arglist__72406);
arglist__72406 = cljs.core.next(arglist__72406);
var x2 = cljs.core.first(arglist__72406);
var xs = cljs.core.rest(arglist__72406);
return G__72405__delegate(m,k,f,x1,x2,xs);
});
G__72405.cljs$core$IFn$_invoke$arity$variadic = G__72405__delegate;
return G__72405;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){if(cljs.core.sorted_QMARK_(m))
{return cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__72426 = v;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__72426) : f.call(null,G__72426));
})());
}),cljs.core.sorted_map(),m);
} else
{if(cljs.core.map_QMARK_(m))
{return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__72427 = v;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__72427) : f.call(null,G__72427));
})());
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__2344__auto__ = (function (){var G__72429 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__72429) : cljs.core.atom.call(null,G__72429));
})();var seq__72430_72445 = cljs.core.seq(m);var chunk__72431_72446 = null;var count__72432_72447 = (0);var i__72433_72448 = (0);while(true){
if((i__72433_72448 < count__72432_72447))
{var vec__72434_72449 = chunk__72431_72446.cljs$core$IIndexed$_nth$arity$2(null,i__72433_72448);var k_72450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72434_72449,(0),null);var v_72451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72434_72449,(1),null);var m72428_72452 = (function (){var G__72435 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__72435) : cljs.core.deref.call(null,G__72435));
})();var G__72436_72453 = m_atom__2344__auto__;var G__72437_72454 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m72428_72452,k_72450,(function (){var G__72438 = v_72451;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__72438) : f.call(null,G__72438));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__72436_72453,G__72437_72454) : cljs.core.reset_BANG_.call(null,G__72436_72453,G__72437_72454));
{
var G__72455 = seq__72430_72445;
var G__72456 = chunk__72431_72446;
var G__72457 = count__72432_72447;
var G__72458 = (i__72433_72448 + (1));
seq__72430_72445 = G__72455;
chunk__72431_72446 = G__72456;
count__72432_72447 = G__72457;
i__72433_72448 = G__72458;
continue;
}
} else
{var temp__4126__auto___72459 = cljs.core.seq(seq__72430_72445);if(temp__4126__auto___72459)
{var seq__72430_72460__$1 = temp__4126__auto___72459;if(cljs.core.chunked_seq_QMARK_(seq__72430_72460__$1))
{var c__21100__auto___72461 = cljs.core.chunk_first(seq__72430_72460__$1);{
var G__72462 = cljs.core.chunk_rest(seq__72430_72460__$1);
var G__72463 = c__21100__auto___72461;
var G__72464 = cljs.core.count(c__21100__auto___72461);
var G__72465 = (0);
seq__72430_72445 = G__72462;
chunk__72431_72446 = G__72463;
count__72432_72447 = G__72464;
i__72433_72448 = G__72465;
continue;
}
} else
{var vec__72439_72466 = cljs.core.first(seq__72430_72460__$1);var k_72467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72439_72466,(0),null);var v_72468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72439_72466,(1),null);var m72428_72469 = (function (){var G__72440 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__72440) : cljs.core.deref.call(null,G__72440));
})();var G__72441_72470 = m_atom__2344__auto__;var G__72442_72471 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m72428_72469,k_72467,(function (){var G__72443 = v_72468;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__72443) : f.call(null,G__72443));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__72441_72470,G__72442_72471) : cljs.core.reset_BANG_.call(null,G__72441_72470,G__72442_72471));
{
var G__72472 = cljs.core.next(seq__72430_72460__$1);
var G__72473 = null;
var G__72474 = (0);
var G__72475 = (0);
seq__72430_72445 = G__72472;
chunk__72431_72446 = G__72473;
count__72432_72447 = G__72474;
i__72433_72448 = G__72475;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__72444 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__72444) : cljs.core.deref.call(null,G__72444));
})());

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_(m))
{return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(function (){var G__72494 = k;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__72494) : f.call(null,G__72494));
})(),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__2344__auto__ = (function (){var G__72496 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__72496) : cljs.core.atom.call(null,G__72496));
})();var seq__72497_72512 = cljs.core.seq(m);var chunk__72498_72513 = null;var count__72499_72514 = (0);var i__72500_72515 = (0);while(true){
if((i__72500_72515 < count__72499_72514))
{var vec__72501_72516 = chunk__72498_72513.cljs$core$IIndexed$_nth$arity$2(null,i__72500_72515);var k_72517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72501_72516,(0),null);var v_72518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72501_72516,(1),null);var m72495_72519 = (function (){var G__72502 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__72502) : cljs.core.deref.call(null,G__72502));
})();var G__72503_72520 = m_atom__2344__auto__;var G__72504_72521 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m72495_72519,(function (){var G__72505 = k_72517;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__72505) : f.call(null,G__72505));
})(),v_72518);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__72503_72520,G__72504_72521) : cljs.core.reset_BANG_.call(null,G__72503_72520,G__72504_72521));
{
var G__72522 = seq__72497_72512;
var G__72523 = chunk__72498_72513;
var G__72524 = count__72499_72514;
var G__72525 = (i__72500_72515 + (1));
seq__72497_72512 = G__72522;
chunk__72498_72513 = G__72523;
count__72499_72514 = G__72524;
i__72500_72515 = G__72525;
continue;
}
} else
{var temp__4126__auto___72526 = cljs.core.seq(seq__72497_72512);if(temp__4126__auto___72526)
{var seq__72497_72527__$1 = temp__4126__auto___72526;if(cljs.core.chunked_seq_QMARK_(seq__72497_72527__$1))
{var c__21100__auto___72528 = cljs.core.chunk_first(seq__72497_72527__$1);{
var G__72529 = cljs.core.chunk_rest(seq__72497_72527__$1);
var G__72530 = c__21100__auto___72528;
var G__72531 = cljs.core.count(c__21100__auto___72528);
var G__72532 = (0);
seq__72497_72512 = G__72529;
chunk__72498_72513 = G__72530;
count__72499_72514 = G__72531;
i__72500_72515 = G__72532;
continue;
}
} else
{var vec__72506_72533 = cljs.core.first(seq__72497_72527__$1);var k_72534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72506_72533,(0),null);var v_72535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72506_72533,(1),null);var m72495_72536 = (function (){var G__72507 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__72507) : cljs.core.deref.call(null,G__72507));
})();var G__72508_72537 = m_atom__2344__auto__;var G__72509_72538 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m72495_72536,(function (){var G__72510 = k_72534;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__72510) : f.call(null,G__72510));
})(),v_72535);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__72508_72537,G__72509_72538) : cljs.core.reset_BANG_.call(null,G__72508_72537,G__72509_72538));
{
var G__72539 = cljs.core.next(seq__72497_72527__$1);
var G__72540 = null;
var G__72541 = (0);
var G__72542 = (0);
seq__72497_72512 = G__72539;
chunk__72498_72513 = G__72540;
count__72499_72514 = G__72541;
i__72500_72515 = G__72542;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__72511 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__72511) : cljs.core.deref.call(null,G__72511));
})());
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__2344__auto__ = (function (){var G__72559 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__72559) : cljs.core.atom.call(null,G__72559));
})();var seq__72560_72573 = cljs.core.seq(ks);var chunk__72561_72574 = null;var count__72562_72575 = (0);var i__72563_72576 = (0);while(true){
if((i__72563_72576 < count__72562_72575))
{var k_72577 = chunk__72561_72574.cljs$core$IIndexed$_nth$arity$2(null,i__72563_72576);var m72558_72578 = (function (){var G__72564 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__72564) : cljs.core.deref.call(null,G__72564));
})();var G__72565_72579 = m_atom__2344__auto__;var G__72566_72580 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m72558_72578,k_72577,(function (){var G__72567 = k_72577;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__72567) : f.call(null,G__72567));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__72565_72579,G__72566_72580) : cljs.core.reset_BANG_.call(null,G__72565_72579,G__72566_72580));
{
var G__72581 = seq__72560_72573;
var G__72582 = chunk__72561_72574;
var G__72583 = count__72562_72575;
var G__72584 = (i__72563_72576 + (1));
seq__72560_72573 = G__72581;
chunk__72561_72574 = G__72582;
count__72562_72575 = G__72583;
i__72563_72576 = G__72584;
continue;
}
} else
{var temp__4126__auto___72585 = cljs.core.seq(seq__72560_72573);if(temp__4126__auto___72585)
{var seq__72560_72586__$1 = temp__4126__auto___72585;if(cljs.core.chunked_seq_QMARK_(seq__72560_72586__$1))
{var c__21100__auto___72587 = cljs.core.chunk_first(seq__72560_72586__$1);{
var G__72588 = cljs.core.chunk_rest(seq__72560_72586__$1);
var G__72589 = c__21100__auto___72587;
var G__72590 = cljs.core.count(c__21100__auto___72587);
var G__72591 = (0);
seq__72560_72573 = G__72588;
chunk__72561_72574 = G__72589;
count__72562_72575 = G__72590;
i__72563_72576 = G__72591;
continue;
}
} else
{var k_72592 = cljs.core.first(seq__72560_72586__$1);var m72558_72593 = (function (){var G__72568 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__72568) : cljs.core.deref.call(null,G__72568));
})();var G__72569_72594 = m_atom__2344__auto__;var G__72570_72595 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m72558_72593,k_72592,(function (){var G__72571 = k_72592;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__72571) : f.call(null,G__72571));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__72569_72594,G__72570_72595) : cljs.core.reset_BANG_.call(null,G__72569_72594,G__72570_72595));
{
var G__72596 = cljs.core.next(seq__72560_72586__$1);
var G__72597 = null;
var G__72598 = (0);
var G__72599 = (0);
seq__72560_72573 = G__72596;
chunk__72561_72574 = G__72597;
count__72562_72575 = G__72598;
i__72563_72576 = G__72599;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__72572 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__72572) : cljs.core.deref.call(null,G__72572));
})());
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__2344__auto__ = (function (){var G__72616 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__72616) : cljs.core.atom.call(null,G__72616));
})();var seq__72617_72630 = cljs.core.seq(vs);var chunk__72618_72631 = null;var count__72619_72632 = (0);var i__72620_72633 = (0);while(true){
if((i__72620_72633 < count__72619_72632))
{var v_72634 = chunk__72618_72631.cljs$core$IIndexed$_nth$arity$2(null,i__72620_72633);var m72615_72635 = (function (){var G__72621 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__72621) : cljs.core.deref.call(null,G__72621));
})();var G__72622_72636 = m_atom__2344__auto__;var G__72623_72637 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m72615_72635,(function (){var G__72624 = v_72634;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__72624) : f.call(null,G__72624));
})(),v_72634);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__72622_72636,G__72623_72637) : cljs.core.reset_BANG_.call(null,G__72622_72636,G__72623_72637));
{
var G__72638 = seq__72617_72630;
var G__72639 = chunk__72618_72631;
var G__72640 = count__72619_72632;
var G__72641 = (i__72620_72633 + (1));
seq__72617_72630 = G__72638;
chunk__72618_72631 = G__72639;
count__72619_72632 = G__72640;
i__72620_72633 = G__72641;
continue;
}
} else
{var temp__4126__auto___72642 = cljs.core.seq(seq__72617_72630);if(temp__4126__auto___72642)
{var seq__72617_72643__$1 = temp__4126__auto___72642;if(cljs.core.chunked_seq_QMARK_(seq__72617_72643__$1))
{var c__21100__auto___72644 = cljs.core.chunk_first(seq__72617_72643__$1);{
var G__72645 = cljs.core.chunk_rest(seq__72617_72643__$1);
var G__72646 = c__21100__auto___72644;
var G__72647 = cljs.core.count(c__21100__auto___72644);
var G__72648 = (0);
seq__72617_72630 = G__72645;
chunk__72618_72631 = G__72646;
count__72619_72632 = G__72647;
i__72620_72633 = G__72648;
continue;
}
} else
{var v_72649 = cljs.core.first(seq__72617_72643__$1);var m72615_72650 = (function (){var G__72625 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__72625) : cljs.core.deref.call(null,G__72625));
})();var G__72626_72651 = m_atom__2344__auto__;var G__72627_72652 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m72615_72650,(function (){var G__72628 = v_72649;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__72628) : f.call(null,G__72628));
})(),v_72649);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__72626_72651,G__72627_72652) : cljs.core.reset_BANG_.call(null,G__72626_72651,G__72627_72652));
{
var G__72653 = cljs.core.next(seq__72617_72643__$1);
var G__72654 = null;
var G__72655 = (0);
var G__72656 = (0);
seq__72617_72630 = G__72653;
chunk__72618_72631 = G__72654;
count__72619_72632 = G__72655;
i__72620_72633 = G__72656;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__72629 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__72629) : cljs.core.deref.call(null,G__72629));
})());
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__72657){var vec__72665 = p__72657;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72665,(0),null);var ks = cljs.core.nthnext(vec__72665,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__19697__auto__ = ks;if(and__19697__auto__)
{return dissoc_in((function (){var G__72667 = k;return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(G__72667) : m.call(null,G__72667));
})(),ks);
} else
{return and__19697__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var res = temp__4124__auto__;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,res);
} else
{var res = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);if(cljs.core.empty_QMARK_(res))
{return null;
} else
{return res;
}
}
} else
{return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){if(cljs.core.map_QMARK_(x))
{var m_atom__2344__auto__ = (function (){var G__72686 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__72686) : cljs.core.atom.call(null,G__72686));
})();var seq__72687_72700 = cljs.core.seq(x);var chunk__72688_72701 = null;var count__72689_72702 = (0);var i__72690_72703 = (0);while(true){
if((i__72690_72703 < count__72689_72702))
{var vec__72691_72704 = chunk__72688_72701.cljs$core$IIndexed$_nth$arity$2(null,i__72690_72703);var k_72705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72691_72704,(0),null);var v_72706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72691_72704,(1),null);var m72685_72707 = (function (){var G__72692 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__72692) : cljs.core.deref.call(null,G__72692));
})();var G__72693_72708 = m_atom__2344__auto__;var G__72694_72709 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m72685_72707,((typeof k_72705 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_72705):k_72705),keywordize_map(v_72706));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__72693_72708,G__72694_72709) : cljs.core.reset_BANG_.call(null,G__72693_72708,G__72694_72709));
{
var G__72710 = seq__72687_72700;
var G__72711 = chunk__72688_72701;
var G__72712 = count__72689_72702;
var G__72713 = (i__72690_72703 + (1));
seq__72687_72700 = G__72710;
chunk__72688_72701 = G__72711;
count__72689_72702 = G__72712;
i__72690_72703 = G__72713;
continue;
}
} else
{var temp__4126__auto___72714 = cljs.core.seq(seq__72687_72700);if(temp__4126__auto___72714)
{var seq__72687_72715__$1 = temp__4126__auto___72714;if(cljs.core.chunked_seq_QMARK_(seq__72687_72715__$1))
{var c__21100__auto___72716 = cljs.core.chunk_first(seq__72687_72715__$1);{
var G__72717 = cljs.core.chunk_rest(seq__72687_72715__$1);
var G__72718 = c__21100__auto___72716;
var G__72719 = cljs.core.count(c__21100__auto___72716);
var G__72720 = (0);
seq__72687_72700 = G__72717;
chunk__72688_72701 = G__72718;
count__72689_72702 = G__72719;
i__72690_72703 = G__72720;
continue;
}
} else
{var vec__72695_72721 = cljs.core.first(seq__72687_72715__$1);var k_72722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72695_72721,(0),null);var v_72723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72695_72721,(1),null);var m72685_72724 = (function (){var G__72696 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__72696) : cljs.core.deref.call(null,G__72696));
})();var G__72697_72725 = m_atom__2344__auto__;var G__72698_72726 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m72685_72724,((typeof k_72722 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_72722):k_72722),keywordize_map(v_72723));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__72697_72725,G__72698_72726) : cljs.core.reset_BANG_.call(null,G__72697_72725,G__72698_72726));
{
var G__72727 = cljs.core.next(seq__72687_72715__$1);
var G__72728 = null;
var G__72729 = (0);
var G__72730 = (0);
seq__72687_72700 = G__72727;
chunk__72688_72701 = G__72728;
count__72689_72702 = G__72729;
i__72690_72703 = G__72730;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__72699 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__72699) : cljs.core.deref.call(null,G__72699));
})());
} else
{if(cljs.core.seq_QMARK_(x))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(keywordize_map,x);
} else
{if(cljs.core.vector_QMARK_(x))
{return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(keywordize_map,x);
} else
{return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){var temp__4124__auto__ = cljs.core.find(m,k);if(cljs.core.truth_(temp__4124__auto__))
{var pair__2413__auto__ = temp__4124__auto__;return cljs.core.val(pair__2413__auto__);
} else
{var G__72735 = false;var G__72736 = "Key %s not found in %s";var G__72737 = k;var G__72738 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.key,m);return (plumbing.fnk.schema.assert_iae.cljs$core$IFn$_invoke$arity$4 ? plumbing.fnk.schema.assert_iae.cljs$core$IFn$_invoke$arity$4(G__72735,G__72736,G__72737,G__72738) : plumbing.fnk.schema.assert_iae.call(null,G__72735,G__72736,G__72737,G__72738));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq(ks))
{{
var G__72739 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__72740 = cljs.core.next(ks);
m = G__72739;
ks = G__72740;
continue;
}
} else
{return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))], 0))))));
}
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__19711__auto__ = m;if(cljs.core.truth_(or__19711__auto__))
{return or__19711__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__21069__auto__ = (function iter__72751(s__72752){return (new cljs.core.LazySeq(null,(function (){var s__72752__$1 = s__72752;while(true){
var temp__4126__auto__ = cljs.core.seq(s__72752__$1);if(temp__4126__auto__)
{var s__72752__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__72752__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__72752__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__72754 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__72753 = (0);while(true){
if((i__72753 < size__21068__auto__))
{var vec__72759 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__72753);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72759,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72759,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append(b__72754,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__72761 = (i__72753 + (1));
i__72753 = G__72761;
continue;
}
} else
{{
var G__72762 = (i__72753 + (1));
i__72753 = G__72762;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__72754),iter__72751(cljs.core.chunk_rest(s__72752__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__72754),null);
}
} else
{var vec__72760 = cljs.core.first(s__72752__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72760,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72760,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__72751(cljs.core.rest(s__72752__$2)));
} else
{{
var G__72763 = cljs.core.rest(s__72752__$2);
s__72752__$1 = G__72763;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__21069__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__72764){
var m = cljs.core.first(arglist__72764);
var kvs = cljs.core.rest(arglist__72764);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){var found = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,key_seq,plumbing.core._PLUS_none_PLUS_);if(!((plumbing.core._PLUS_none_PLUS_ === found)))
{return cljs.core.assoc_in(m,key_seq,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,found,args));
} else
{return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__72765){
var m = cljs.core.first(arglist__72765);
arglist__72765 = cljs.core.next(arglist__72765);
var key_seq = cljs.core.first(arglist__72765);
arglist__72765 = cljs.core.next(arglist__72765);
var f = cljs.core.first(arglist__72765);
var args = cljs.core.rest(arglist__72765);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){var k = (function (){var G__72768 = x;return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__72768) : key_fn.call(null,G__72768));
})();return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(function (){var G__72769 = x;return (map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(G__72769) : map_fn.call(null,G__72769));
})()));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.LazySeq(null,(function (){return cljs.core.first(s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.next(s);if(temp__4126__auto__)
{var n = temp__4126__auto__;return aconcat(n);
} else
{return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){if(cljs.core.seq(s))
{return cljs.core.cons(cljs.core.first(s),(new cljs.core.LazySeq(null,(function (){return unchunk(cljs.core.rest(s));
}),null,null)));
} else
{return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){var temp__4126__auto__ = cljs.core.seq(xs);if(temp__4126__auto__)
{var xs__$1 = temp__4126__auto__;if(cljs.core.next(xs__$1))
{return null;
} else
{return cljs.core.first(xs__$1);
}
} else
{return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){return cljs.core.map_indexed(cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){if(cljs.core.truth_((function (){var G__72773 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__72773) : f.call(null,G__72773));
})()))
{return i;
} else
{return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = (function (){var G__72789 = cljs.core.PersistentHashSet.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__72789) : cljs.core.atom.call(null,G__72789));
})();var iter__21069__auto__ = ((function (s){
return (function iter__72790(s__72791){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__72791__$1 = s__72791;while(true){
var temp__4126__auto__ = cljs.core.seq(s__72791__$1);if(temp__4126__auto__)
{var s__72791__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__72791__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__72791__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__72793 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__72792 = (0);while(true){
if((i__72792 < size__21068__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__72792);var id = (function (){var G__72800 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__72800) : f.call(null,G__72800));
})();if(!(cljs.core.contains_QMARK_((function (){var G__72801 = s;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__72801) : cljs.core.deref.call(null,G__72801));
})(),id)))
{cljs.core.chunk_append(b__72793,(function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);
return x;
})());
{
var G__72804 = (i__72792 + (1));
i__72792 = G__72804;
continue;
}
} else
{{
var G__72805 = (i__72792 + (1));
i__72792 = G__72805;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__72793),iter__72790(cljs.core.chunk_rest(s__72791__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__72793),null);
}
} else
{var x = cljs.core.first(s__72791__$2);var id = (function (){var G__72802 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__72802) : f.call(null,G__72802));
})();if(!(cljs.core.contains_QMARK_((function (){var G__72803 = s;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__72803) : cljs.core.deref.call(null,G__72803));
})(),id)))
{return cljs.core.cons((function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);
return x;
})(),iter__72790(cljs.core.rest(s__72791__$2)));
} else
{{
var G__72806 = cljs.core.rest(s__72791__$2);
s__72791__$1 = G__72806;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;return iter__21069__auto__(xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){return (new cljs.core.LazySeq(null,(function (){return (function helper(seqs){if(cljs.core.seq(seqs))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){return helper(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.next,seqs));
}),null,null)));
} else
{return null;
}
}).call(null,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__72809){
var colls = cljs.core.seq(arglist__72809);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){if(cljs.core.truth_(x))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
} else
{return coll;
}
});
var conj_when__3 = (function() { 
var G__72814__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__72815 = conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__72816 = cljs.core.first(xs);
var G__72817 = cljs.core.next(xs);
coll = G__72815;
x = G__72816;
xs = G__72817;
continue;
}
} else
{return conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__72814 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__72814__delegate.call(this,coll,x,xs);};
G__72814.cljs$lang$maxFixedArity = 2;
G__72814.cljs$lang$applyTo = (function (arglist__72818){
var coll = cljs.core.first(arglist__72818);
arglist__72818 = cljs.core.next(arglist__72818);
var x = cljs.core.first(arglist__72818);
var xs = cljs.core.rest(arglist__72818);
return G__72814__delegate(coll,x,xs);
});
G__72814.cljs$core$IFn$_invoke$arity$variadic = G__72814__delegate;
return G__72814;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){if(cljs.core.truth_(x))
{return cljs.core.cons(x,s);
} else
{return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){while(true){
var old_val = (function (){var G__72824 = a;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__72824) : cljs.core.deref.call(null,G__72824));
})();var new_val = (function (){var G__72825 = old_val;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__72825) : f.call(null,G__72825));
})();if(cljs.core.compare_and_set_BANG_(a,old_val,new_val))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else
{{
continue;
}
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__72826__delegate = function (a,f,args){return swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__72819_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__72819_SHARP_,args);
}));
};
var G__72826 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__72826__delegate.call(this,a,f,args);};
G__72826.cljs$lang$maxFixedArity = 2;
G__72826.cljs$lang$applyTo = (function (arglist__72827){
var a = cljs.core.first(arglist__72827);
arglist__72827 = cljs.core.next(arglist__72827);
var f = cljs.core.first(arglist__72827);
var args = cljs.core.rest(arglist__72827);
return G__72826__delegate(a,f,args);
});
G__72826.cljs$core$IFn$_invoke$arity$variadic = G__72826__delegate;
return G__72826;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){return cljs.core.first(plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.constantly(new_val)));
});
plumbing.core.millis = (function millis(){return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__72828__delegate = function (f,arg,args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
};
var G__72828 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__72828__delegate.call(this,f,arg,args);};
G__72828.cljs$lang$maxFixedArity = 2;
G__72828.cljs$lang$applyTo = (function (arglist__72829){
var f = cljs.core.first(arglist__72829);
arglist__72829 = cljs.core.next(arglist__72829);
var arg = cljs.core.first(arglist__72829);
var args = cljs.core.rest(arglist__72829);
return G__72828__delegate(f,arg,args);
});
G__72828.cljs$core$IFn$_invoke$arity$variadic = G__72828__delegate;
return G__72828;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;
//# sourceMappingURL=core.js.map