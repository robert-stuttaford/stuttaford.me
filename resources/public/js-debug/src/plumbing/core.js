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
var update__3 = (function (m,k,f){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__53427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53427) : f.call(null,G__53427));
})());
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__53428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__53429 = x1;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__53428,G__53429) : f.call(null,G__53428,G__53429));
})());
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__53430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__53431 = x1;var G__53432 = x2;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__53430,G__53431,G__53432) : f.call(null,G__53430,G__53431,G__53432));
})());
});
var update__6 = (function() { 
var G__53433__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
};
var G__53433 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__53433__delegate.call(this,m,k,f,x1,x2,xs);};
G__53433.cljs$lang$maxFixedArity = 5;
G__53433.cljs$lang$applyTo = (function (arglist__53434){
var m = cljs.core.first(arglist__53434);
arglist__53434 = cljs.core.next(arglist__53434);
var k = cljs.core.first(arglist__53434);
arglist__53434 = cljs.core.next(arglist__53434);
var f = cljs.core.first(arglist__53434);
arglist__53434 = cljs.core.next(arglist__53434);
var x1 = cljs.core.first(arglist__53434);
arglist__53434 = cljs.core.next(arglist__53434);
var x2 = cljs.core.first(arglist__53434);
var xs = cljs.core.rest(arglist__53434);
return G__53433__delegate(m,k,f,x1,x2,xs);
});
G__53433.cljs$core$IFn$_invoke$arity$variadic = G__53433__delegate;
return G__53433;
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
{return cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__53454 = v;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53454) : f.call(null,G__53454));
})());
}),cljs.core.sorted_map(),m);
} else
{if(cljs.core.map_QMARK_(m))
{return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__53455 = v;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53455) : f.call(null,G__53455));
})());
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__2344__auto__ = (function (){var G__53457 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__53457) : cljs.core.atom.call(null,G__53457));
})();var seq__53458_53473 = cljs.core.seq(m);var chunk__53459_53474 = null;var count__53460_53475 = (0);var i__53461_53476 = (0);while(true){
if((i__53461_53476 < count__53460_53475))
{var vec__53462_53477 = chunk__53459_53474.cljs$core$IIndexed$_nth$arity$2(null,i__53461_53476);var k_53478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53462_53477,(0),null);var v_53479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53462_53477,(1),null);var m53456_53480 = (function (){var G__53463 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53463) : cljs.core.deref.call(null,G__53463));
})();var G__53464_53481 = m_atom__2344__auto__;var G__53465_53482 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53456_53480,k_53478,(function (){var G__53466 = v_53479;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53466) : f.call(null,G__53466));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__53464_53481,G__53465_53482) : cljs.core.reset_BANG_.call(null,G__53464_53481,G__53465_53482));
{
var G__53483 = seq__53458_53473;
var G__53484 = chunk__53459_53474;
var G__53485 = count__53460_53475;
var G__53486 = (i__53461_53476 + (1));
seq__53458_53473 = G__53483;
chunk__53459_53474 = G__53484;
count__53460_53475 = G__53485;
i__53461_53476 = G__53486;
continue;
}
} else
{var temp__4126__auto___53487 = cljs.core.seq(seq__53458_53473);if(temp__4126__auto___53487)
{var seq__53458_53488__$1 = temp__4126__auto___53487;if(cljs.core.chunked_seq_QMARK_(seq__53458_53488__$1))
{var c__21046__auto___53489 = cljs.core.chunk_first(seq__53458_53488__$1);{
var G__53490 = cljs.core.chunk_rest(seq__53458_53488__$1);
var G__53491 = c__21046__auto___53489;
var G__53492 = cljs.core.count(c__21046__auto___53489);
var G__53493 = (0);
seq__53458_53473 = G__53490;
chunk__53459_53474 = G__53491;
count__53460_53475 = G__53492;
i__53461_53476 = G__53493;
continue;
}
} else
{var vec__53467_53494 = cljs.core.first(seq__53458_53488__$1);var k_53495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53467_53494,(0),null);var v_53496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53467_53494,(1),null);var m53456_53497 = (function (){var G__53468 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53468) : cljs.core.deref.call(null,G__53468));
})();var G__53469_53498 = m_atom__2344__auto__;var G__53470_53499 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53456_53497,k_53495,(function (){var G__53471 = v_53496;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53471) : f.call(null,G__53471));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__53469_53498,G__53470_53499) : cljs.core.reset_BANG_.call(null,G__53469_53498,G__53470_53499));
{
var G__53500 = cljs.core.next(seq__53458_53488__$1);
var G__53501 = null;
var G__53502 = (0);
var G__53503 = (0);
seq__53458_53473 = G__53500;
chunk__53459_53474 = G__53501;
count__53460_53475 = G__53502;
i__53461_53476 = G__53503;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__53472 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53472) : cljs.core.deref.call(null,G__53472));
})());

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_(m))
{return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(function (){var G__53522 = k;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53522) : f.call(null,G__53522));
})(),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__2344__auto__ = (function (){var G__53524 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__53524) : cljs.core.atom.call(null,G__53524));
})();var seq__53525_53540 = cljs.core.seq(m);var chunk__53526_53541 = null;var count__53527_53542 = (0);var i__53528_53543 = (0);while(true){
if((i__53528_53543 < count__53527_53542))
{var vec__53529_53544 = chunk__53526_53541.cljs$core$IIndexed$_nth$arity$2(null,i__53528_53543);var k_53545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53529_53544,(0),null);var v_53546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53529_53544,(1),null);var m53523_53547 = (function (){var G__53530 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53530) : cljs.core.deref.call(null,G__53530));
})();var G__53531_53548 = m_atom__2344__auto__;var G__53532_53549 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53523_53547,(function (){var G__53533 = k_53545;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53533) : f.call(null,G__53533));
})(),v_53546);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__53531_53548,G__53532_53549) : cljs.core.reset_BANG_.call(null,G__53531_53548,G__53532_53549));
{
var G__53550 = seq__53525_53540;
var G__53551 = chunk__53526_53541;
var G__53552 = count__53527_53542;
var G__53553 = (i__53528_53543 + (1));
seq__53525_53540 = G__53550;
chunk__53526_53541 = G__53551;
count__53527_53542 = G__53552;
i__53528_53543 = G__53553;
continue;
}
} else
{var temp__4126__auto___53554 = cljs.core.seq(seq__53525_53540);if(temp__4126__auto___53554)
{var seq__53525_53555__$1 = temp__4126__auto___53554;if(cljs.core.chunked_seq_QMARK_(seq__53525_53555__$1))
{var c__21046__auto___53556 = cljs.core.chunk_first(seq__53525_53555__$1);{
var G__53557 = cljs.core.chunk_rest(seq__53525_53555__$1);
var G__53558 = c__21046__auto___53556;
var G__53559 = cljs.core.count(c__21046__auto___53556);
var G__53560 = (0);
seq__53525_53540 = G__53557;
chunk__53526_53541 = G__53558;
count__53527_53542 = G__53559;
i__53528_53543 = G__53560;
continue;
}
} else
{var vec__53534_53561 = cljs.core.first(seq__53525_53555__$1);var k_53562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53534_53561,(0),null);var v_53563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53534_53561,(1),null);var m53523_53564 = (function (){var G__53535 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53535) : cljs.core.deref.call(null,G__53535));
})();var G__53536_53565 = m_atom__2344__auto__;var G__53537_53566 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53523_53564,(function (){var G__53538 = k_53562;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53538) : f.call(null,G__53538));
})(),v_53563);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__53536_53565,G__53537_53566) : cljs.core.reset_BANG_.call(null,G__53536_53565,G__53537_53566));
{
var G__53567 = cljs.core.next(seq__53525_53555__$1);
var G__53568 = null;
var G__53569 = (0);
var G__53570 = (0);
seq__53525_53540 = G__53567;
chunk__53526_53541 = G__53568;
count__53527_53542 = G__53569;
i__53528_53543 = G__53570;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__53539 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53539) : cljs.core.deref.call(null,G__53539));
})());
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__2344__auto__ = (function (){var G__53587 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__53587) : cljs.core.atom.call(null,G__53587));
})();var seq__53588_53601 = cljs.core.seq(ks);var chunk__53589_53602 = null;var count__53590_53603 = (0);var i__53591_53604 = (0);while(true){
if((i__53591_53604 < count__53590_53603))
{var k_53605 = chunk__53589_53602.cljs$core$IIndexed$_nth$arity$2(null,i__53591_53604);var m53586_53606 = (function (){var G__53592 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53592) : cljs.core.deref.call(null,G__53592));
})();var G__53593_53607 = m_atom__2344__auto__;var G__53594_53608 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53586_53606,k_53605,(function (){var G__53595 = k_53605;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53595) : f.call(null,G__53595));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__53593_53607,G__53594_53608) : cljs.core.reset_BANG_.call(null,G__53593_53607,G__53594_53608));
{
var G__53609 = seq__53588_53601;
var G__53610 = chunk__53589_53602;
var G__53611 = count__53590_53603;
var G__53612 = (i__53591_53604 + (1));
seq__53588_53601 = G__53609;
chunk__53589_53602 = G__53610;
count__53590_53603 = G__53611;
i__53591_53604 = G__53612;
continue;
}
} else
{var temp__4126__auto___53613 = cljs.core.seq(seq__53588_53601);if(temp__4126__auto___53613)
{var seq__53588_53614__$1 = temp__4126__auto___53613;if(cljs.core.chunked_seq_QMARK_(seq__53588_53614__$1))
{var c__21046__auto___53615 = cljs.core.chunk_first(seq__53588_53614__$1);{
var G__53616 = cljs.core.chunk_rest(seq__53588_53614__$1);
var G__53617 = c__21046__auto___53615;
var G__53618 = cljs.core.count(c__21046__auto___53615);
var G__53619 = (0);
seq__53588_53601 = G__53616;
chunk__53589_53602 = G__53617;
count__53590_53603 = G__53618;
i__53591_53604 = G__53619;
continue;
}
} else
{var k_53620 = cljs.core.first(seq__53588_53614__$1);var m53586_53621 = (function (){var G__53596 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53596) : cljs.core.deref.call(null,G__53596));
})();var G__53597_53622 = m_atom__2344__auto__;var G__53598_53623 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53586_53621,k_53620,(function (){var G__53599 = k_53620;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53599) : f.call(null,G__53599));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__53597_53622,G__53598_53623) : cljs.core.reset_BANG_.call(null,G__53597_53622,G__53598_53623));
{
var G__53624 = cljs.core.next(seq__53588_53614__$1);
var G__53625 = null;
var G__53626 = (0);
var G__53627 = (0);
seq__53588_53601 = G__53624;
chunk__53589_53602 = G__53625;
count__53590_53603 = G__53626;
i__53591_53604 = G__53627;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__53600 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53600) : cljs.core.deref.call(null,G__53600));
})());
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__2344__auto__ = (function (){var G__53644 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__53644) : cljs.core.atom.call(null,G__53644));
})();var seq__53645_53658 = cljs.core.seq(vs);var chunk__53646_53659 = null;var count__53647_53660 = (0);var i__53648_53661 = (0);while(true){
if((i__53648_53661 < count__53647_53660))
{var v_53662 = chunk__53646_53659.cljs$core$IIndexed$_nth$arity$2(null,i__53648_53661);var m53643_53663 = (function (){var G__53649 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53649) : cljs.core.deref.call(null,G__53649));
})();var G__53650_53664 = m_atom__2344__auto__;var G__53651_53665 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53643_53663,(function (){var G__53652 = v_53662;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53652) : f.call(null,G__53652));
})(),v_53662);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__53650_53664,G__53651_53665) : cljs.core.reset_BANG_.call(null,G__53650_53664,G__53651_53665));
{
var G__53666 = seq__53645_53658;
var G__53667 = chunk__53646_53659;
var G__53668 = count__53647_53660;
var G__53669 = (i__53648_53661 + (1));
seq__53645_53658 = G__53666;
chunk__53646_53659 = G__53667;
count__53647_53660 = G__53668;
i__53648_53661 = G__53669;
continue;
}
} else
{var temp__4126__auto___53670 = cljs.core.seq(seq__53645_53658);if(temp__4126__auto___53670)
{var seq__53645_53671__$1 = temp__4126__auto___53670;if(cljs.core.chunked_seq_QMARK_(seq__53645_53671__$1))
{var c__21046__auto___53672 = cljs.core.chunk_first(seq__53645_53671__$1);{
var G__53673 = cljs.core.chunk_rest(seq__53645_53671__$1);
var G__53674 = c__21046__auto___53672;
var G__53675 = cljs.core.count(c__21046__auto___53672);
var G__53676 = (0);
seq__53645_53658 = G__53673;
chunk__53646_53659 = G__53674;
count__53647_53660 = G__53675;
i__53648_53661 = G__53676;
continue;
}
} else
{var v_53677 = cljs.core.first(seq__53645_53671__$1);var m53643_53678 = (function (){var G__53653 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53653) : cljs.core.deref.call(null,G__53653));
})();var G__53654_53679 = m_atom__2344__auto__;var G__53655_53680 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53643_53678,(function (){var G__53656 = v_53677;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53656) : f.call(null,G__53656));
})(),v_53677);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__53654_53679,G__53655_53680) : cljs.core.reset_BANG_.call(null,G__53654_53679,G__53655_53680));
{
var G__53681 = cljs.core.next(seq__53645_53671__$1);
var G__53682 = null;
var G__53683 = (0);
var G__53684 = (0);
seq__53645_53658 = G__53681;
chunk__53646_53659 = G__53682;
count__53647_53660 = G__53683;
i__53648_53661 = G__53684;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__53657 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53657) : cljs.core.deref.call(null,G__53657));
})());
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__53685){var vec__53693 = p__53685;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53693,(0),null);var ks = cljs.core.nthnext(vec__53693,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__19564__auto__ = ks;if(and__19564__auto__)
{return dissoc_in((function (){var G__53695 = k;return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(G__53695) : m.call(null,G__53695));
})(),ks);
} else
{return and__19564__auto__;
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
{var m_atom__2344__auto__ = (function (){var G__53714 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__53714) : cljs.core.atom.call(null,G__53714));
})();var seq__53715_53728 = cljs.core.seq(x);var chunk__53716_53729 = null;var count__53717_53730 = (0);var i__53718_53731 = (0);while(true){
if((i__53718_53731 < count__53717_53730))
{var vec__53719_53732 = chunk__53716_53729.cljs$core$IIndexed$_nth$arity$2(null,i__53718_53731);var k_53733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53719_53732,(0),null);var v_53734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53719_53732,(1),null);var m53713_53735 = (function (){var G__53720 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53720) : cljs.core.deref.call(null,G__53720));
})();var G__53721_53736 = m_atom__2344__auto__;var G__53722_53737 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53713_53735,((typeof k_53733 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_53733):k_53733),keywordize_map(v_53734));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__53721_53736,G__53722_53737) : cljs.core.reset_BANG_.call(null,G__53721_53736,G__53722_53737));
{
var G__53738 = seq__53715_53728;
var G__53739 = chunk__53716_53729;
var G__53740 = count__53717_53730;
var G__53741 = (i__53718_53731 + (1));
seq__53715_53728 = G__53738;
chunk__53716_53729 = G__53739;
count__53717_53730 = G__53740;
i__53718_53731 = G__53741;
continue;
}
} else
{var temp__4126__auto___53742 = cljs.core.seq(seq__53715_53728);if(temp__4126__auto___53742)
{var seq__53715_53743__$1 = temp__4126__auto___53742;if(cljs.core.chunked_seq_QMARK_(seq__53715_53743__$1))
{var c__21046__auto___53744 = cljs.core.chunk_first(seq__53715_53743__$1);{
var G__53745 = cljs.core.chunk_rest(seq__53715_53743__$1);
var G__53746 = c__21046__auto___53744;
var G__53747 = cljs.core.count(c__21046__auto___53744);
var G__53748 = (0);
seq__53715_53728 = G__53745;
chunk__53716_53729 = G__53746;
count__53717_53730 = G__53747;
i__53718_53731 = G__53748;
continue;
}
} else
{var vec__53723_53749 = cljs.core.first(seq__53715_53743__$1);var k_53750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53723_53749,(0),null);var v_53751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53723_53749,(1),null);var m53713_53752 = (function (){var G__53724 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53724) : cljs.core.deref.call(null,G__53724));
})();var G__53725_53753 = m_atom__2344__auto__;var G__53726_53754 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53713_53752,((typeof k_53750 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_53750):k_53750),keywordize_map(v_53751));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__53725_53753,G__53726_53754) : cljs.core.reset_BANG_.call(null,G__53725_53753,G__53726_53754));
{
var G__53755 = cljs.core.next(seq__53715_53743__$1);
var G__53756 = null;
var G__53757 = (0);
var G__53758 = (0);
seq__53715_53728 = G__53755;
chunk__53716_53729 = G__53756;
count__53717_53730 = G__53757;
i__53718_53731 = G__53758;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__53727 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53727) : cljs.core.deref.call(null,G__53727));
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
{var G__53763 = false;var G__53764 = "Key %s not found in %s";var G__53765 = k;var G__53766 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.key,m);return (plumbing.fnk.schema.assert_iae.cljs$core$IFn$_invoke$arity$4 ? plumbing.fnk.schema.assert_iae.cljs$core$IFn$_invoke$arity$4(G__53763,G__53764,G__53765,G__53766) : plumbing.fnk.schema.assert_iae.call(null,G__53763,G__53764,G__53765,G__53766));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq(ks))
{{
var G__53767 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__53768 = cljs.core.next(ks);
m = G__53767;
ks = G__53768;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__19586__auto__ = m;if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__20990__auto__ = (function iter__53779(s__53780){return (new cljs.core.LazySeq(null,(function (){var s__53780__$1 = s__53780;while(true){
var temp__4126__auto__ = cljs.core.seq(s__53780__$1);if(temp__4126__auto__)
{var s__53780__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__53780__$2))
{var c__20988__auto__ = cljs.core.chunk_first(s__53780__$2);var size__20989__auto__ = cljs.core.count(c__20988__auto__);var b__53782 = cljs.core.chunk_buffer(size__20989__auto__);if((function (){var i__53781 = (0);while(true){
if((i__53781 < size__20989__auto__))
{var vec__53787 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto__,i__53781);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53787,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53787,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append(b__53782,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__53789 = (i__53781 + (1));
i__53781 = G__53789;
continue;
}
} else
{{
var G__53790 = (i__53781 + (1));
i__53781 = G__53790;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53782),iter__53779(cljs.core.chunk_rest(s__53780__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53782),null);
}
} else
{var vec__53788 = cljs.core.first(s__53780__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53788,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53788,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__53779(cljs.core.rest(s__53780__$2)));
} else
{{
var G__53791 = cljs.core.rest(s__53780__$2);
s__53780__$1 = G__53791;
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
});return iter__20990__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__53792){
var m = cljs.core.first(arglist__53792);
var kvs = cljs.core.rest(arglist__53792);
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
update_in_when.cljs$lang$applyTo = (function (arglist__53793){
var m = cljs.core.first(arglist__53793);
arglist__53793 = cljs.core.next(arglist__53793);
var key_seq = cljs.core.first(arglist__53793);
arglist__53793 = cljs.core.next(arglist__53793);
var f = cljs.core.first(arglist__53793);
var args = cljs.core.rest(arglist__53793);
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
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){var k = (function (){var G__53796 = x;return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__53796) : key_fn.call(null,G__53796));
})();return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(function (){var G__53797 = x;return (map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(G__53797) : map_fn.call(null,G__53797));
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
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){if(cljs.core.truth_((function (){var G__53801 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53801) : f.call(null,G__53801));
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
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = (function (){var G__53817 = cljs.core.PersistentHashSet.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__53817) : cljs.core.atom.call(null,G__53817));
})();var iter__20990__auto__ = ((function (s){
return (function iter__53818(s__53819){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__53819__$1 = s__53819;while(true){
var temp__4126__auto__ = cljs.core.seq(s__53819__$1);if(temp__4126__auto__)
{var s__53819__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__53819__$2))
{var c__20988__auto__ = cljs.core.chunk_first(s__53819__$2);var size__20989__auto__ = cljs.core.count(c__20988__auto__);var b__53821 = cljs.core.chunk_buffer(size__20989__auto__);if((function (){var i__53820 = (0);while(true){
if((i__53820 < size__20989__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto__,i__53820);var id = (function (){var G__53828 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53828) : f.call(null,G__53828));
})();if(!(cljs.core.contains_QMARK_((function (){var G__53829 = s;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53829) : cljs.core.deref.call(null,G__53829));
})(),id)))
{cljs.core.chunk_append(b__53821,(function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);
return x;
})());
{
var G__53832 = (i__53820 + (1));
i__53820 = G__53832;
continue;
}
} else
{{
var G__53833 = (i__53820 + (1));
i__53820 = G__53833;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53821),iter__53818(cljs.core.chunk_rest(s__53819__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53821),null);
}
} else
{var x = cljs.core.first(s__53819__$2);var id = (function (){var G__53830 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53830) : f.call(null,G__53830));
})();if(!(cljs.core.contains_QMARK_((function (){var G__53831 = s;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53831) : cljs.core.deref.call(null,G__53831));
})(),id)))
{return cljs.core.cons((function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);
return x;
})(),iter__53818(cljs.core.rest(s__53819__$2)));
} else
{{
var G__53834 = cljs.core.rest(s__53819__$2);
s__53819__$1 = G__53834;
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
;return iter__20990__auto__(xs);
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
interleave_all.cljs$lang$applyTo = (function (arglist__53837){
var colls = cljs.core.seq(arglist__53837);
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
var G__53842__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__53843 = conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__53844 = cljs.core.first(xs);
var G__53845 = cljs.core.next(xs);
coll = G__53843;
x = G__53844;
xs = G__53845;
continue;
}
} else
{return conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__53842 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__53842__delegate.call(this,coll,x,xs);};
G__53842.cljs$lang$maxFixedArity = 2;
G__53842.cljs$lang$applyTo = (function (arglist__53846){
var coll = cljs.core.first(arglist__53846);
arglist__53846 = cljs.core.next(arglist__53846);
var x = cljs.core.first(arglist__53846);
var xs = cljs.core.rest(arglist__53846);
return G__53842__delegate(coll,x,xs);
});
G__53842.cljs$core$IFn$_invoke$arity$variadic = G__53842__delegate;
return G__53842;
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
var old_val = (function (){var G__53852 = a;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53852) : cljs.core.deref.call(null,G__53852));
})();var new_val = (function (){var G__53853 = old_val;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53853) : f.call(null,G__53853));
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
var G__53854__delegate = function (a,f,args){return swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__53847_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__53847_SHARP_,args);
}));
};
var G__53854 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__53854__delegate.call(this,a,f,args);};
G__53854.cljs$lang$maxFixedArity = 2;
G__53854.cljs$lang$applyTo = (function (arglist__53855){
var a = cljs.core.first(arglist__53855);
arglist__53855 = cljs.core.next(arglist__53855);
var f = cljs.core.first(arglist__53855);
var args = cljs.core.rest(arglist__53855);
return G__53854__delegate(a,f,args);
});
G__53854.cljs$core$IFn$_invoke$arity$variadic = G__53854__delegate;
return G__53854;
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
var G__53856__delegate = function (f,arg,args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
};
var G__53856 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__53856__delegate.call(this,f,arg,args);};
G__53856.cljs$lang$maxFixedArity = 2;
G__53856.cljs$lang$applyTo = (function (arglist__53857){
var f = cljs.core.first(arglist__53857);
arglist__53857 = cljs.core.next(arglist__53857);
var arg = cljs.core.first(arglist__53857);
var args = cljs.core.rest(arglist__53857);
return G__53856__delegate(f,arg,args);
});
G__53856.cljs$core$IFn$_invoke$arity$variadic = G__53856__delegate;
return G__53856;
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