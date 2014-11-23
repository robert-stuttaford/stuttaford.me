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
var update__3 = (function (m,k,f){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__36246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36246) : f.call(null,G__36246));
})());
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__36247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__36248 = x1;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__36247,G__36248) : f.call(null,G__36247,G__36248));
})());
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__36249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__36250 = x1;var G__36251 = x2;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__36249,G__36250,G__36251) : f.call(null,G__36249,G__36250,G__36251));
})());
});
var update__6 = (function() { 
var G__36252__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
};
var G__36252 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__36252__delegate.call(this,m,k,f,x1,x2,xs);};
G__36252.cljs$lang$maxFixedArity = 5;
G__36252.cljs$lang$applyTo = (function (arglist__36253){
var m = cljs.core.first(arglist__36253);
arglist__36253 = cljs.core.next(arglist__36253);
var k = cljs.core.first(arglist__36253);
arglist__36253 = cljs.core.next(arglist__36253);
var f = cljs.core.first(arglist__36253);
arglist__36253 = cljs.core.next(arglist__36253);
var x1 = cljs.core.first(arglist__36253);
arglist__36253 = cljs.core.next(arglist__36253);
var x2 = cljs.core.first(arglist__36253);
var xs = cljs.core.rest(arglist__36253);
return G__36252__delegate(m,k,f,x1,x2,xs);
});
G__36252.cljs$core$IFn$_invoke$arity$variadic = G__36252__delegate;
return G__36252;
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
{return cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__36273 = v;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36273) : f.call(null,G__36273));
})());
}),cljs.core.sorted_map(),m);
} else
{if(cljs.core.map_QMARK_(m))
{return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__36274 = v;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36274) : f.call(null,G__36274));
})());
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__2344__auto__ = (function (){var G__36276 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36276) : cljs.core.atom.call(null,G__36276));
})();var seq__36277_36292 = cljs.core.seq(m);var chunk__36278_36293 = null;var count__36279_36294 = (0);var i__36280_36295 = (0);while(true){
if((i__36280_36295 < count__36279_36294))
{var vec__36281_36296 = chunk__36278_36293.cljs$core$IIndexed$_nth$arity$2(null,i__36280_36295);var k_36297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36281_36296,(0),null);var v_36298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36281_36296,(1),null);var m36275_36299 = (function (){var G__36282 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36282) : cljs.core.deref.call(null,G__36282));
})();var G__36283_36300 = m_atom__2344__auto__;var G__36284_36301 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m36275_36299,k_36297,(function (){var G__36285 = v_36298;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36285) : f.call(null,G__36285));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36283_36300,G__36284_36301) : cljs.core.reset_BANG_.call(null,G__36283_36300,G__36284_36301));
{
var G__36302 = seq__36277_36292;
var G__36303 = chunk__36278_36293;
var G__36304 = count__36279_36294;
var G__36305 = (i__36280_36295 + (1));
seq__36277_36292 = G__36302;
chunk__36278_36293 = G__36303;
count__36279_36294 = G__36304;
i__36280_36295 = G__36305;
continue;
}
} else
{var temp__4126__auto___36306 = cljs.core.seq(seq__36277_36292);if(temp__4126__auto___36306)
{var seq__36277_36307__$1 = temp__4126__auto___36306;if(cljs.core.chunked_seq_QMARK_(seq__36277_36307__$1))
{var c__21126__auto___36308 = cljs.core.chunk_first(seq__36277_36307__$1);{
var G__36309 = cljs.core.chunk_rest(seq__36277_36307__$1);
var G__36310 = c__21126__auto___36308;
var G__36311 = cljs.core.count(c__21126__auto___36308);
var G__36312 = (0);
seq__36277_36292 = G__36309;
chunk__36278_36293 = G__36310;
count__36279_36294 = G__36311;
i__36280_36295 = G__36312;
continue;
}
} else
{var vec__36286_36313 = cljs.core.first(seq__36277_36307__$1);var k_36314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36286_36313,(0),null);var v_36315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36286_36313,(1),null);var m36275_36316 = (function (){var G__36287 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36287) : cljs.core.deref.call(null,G__36287));
})();var G__36288_36317 = m_atom__2344__auto__;var G__36289_36318 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m36275_36316,k_36314,(function (){var G__36290 = v_36315;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36290) : f.call(null,G__36290));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36288_36317,G__36289_36318) : cljs.core.reset_BANG_.call(null,G__36288_36317,G__36289_36318));
{
var G__36319 = cljs.core.next(seq__36277_36307__$1);
var G__36320 = null;
var G__36321 = (0);
var G__36322 = (0);
seq__36277_36292 = G__36319;
chunk__36278_36293 = G__36320;
count__36279_36294 = G__36321;
i__36280_36295 = G__36322;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__36291 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36291) : cljs.core.deref.call(null,G__36291));
})());

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_(m))
{return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(function (){var G__36341 = k;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36341) : f.call(null,G__36341));
})(),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__2344__auto__ = (function (){var G__36343 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36343) : cljs.core.atom.call(null,G__36343));
})();var seq__36344_36359 = cljs.core.seq(m);var chunk__36345_36360 = null;var count__36346_36361 = (0);var i__36347_36362 = (0);while(true){
if((i__36347_36362 < count__36346_36361))
{var vec__36348_36363 = chunk__36345_36360.cljs$core$IIndexed$_nth$arity$2(null,i__36347_36362);var k_36364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36348_36363,(0),null);var v_36365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36348_36363,(1),null);var m36342_36366 = (function (){var G__36349 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36349) : cljs.core.deref.call(null,G__36349));
})();var G__36350_36367 = m_atom__2344__auto__;var G__36351_36368 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m36342_36366,(function (){var G__36352 = k_36364;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36352) : f.call(null,G__36352));
})(),v_36365);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36350_36367,G__36351_36368) : cljs.core.reset_BANG_.call(null,G__36350_36367,G__36351_36368));
{
var G__36369 = seq__36344_36359;
var G__36370 = chunk__36345_36360;
var G__36371 = count__36346_36361;
var G__36372 = (i__36347_36362 + (1));
seq__36344_36359 = G__36369;
chunk__36345_36360 = G__36370;
count__36346_36361 = G__36371;
i__36347_36362 = G__36372;
continue;
}
} else
{var temp__4126__auto___36373 = cljs.core.seq(seq__36344_36359);if(temp__4126__auto___36373)
{var seq__36344_36374__$1 = temp__4126__auto___36373;if(cljs.core.chunked_seq_QMARK_(seq__36344_36374__$1))
{var c__21126__auto___36375 = cljs.core.chunk_first(seq__36344_36374__$1);{
var G__36376 = cljs.core.chunk_rest(seq__36344_36374__$1);
var G__36377 = c__21126__auto___36375;
var G__36378 = cljs.core.count(c__21126__auto___36375);
var G__36379 = (0);
seq__36344_36359 = G__36376;
chunk__36345_36360 = G__36377;
count__36346_36361 = G__36378;
i__36347_36362 = G__36379;
continue;
}
} else
{var vec__36353_36380 = cljs.core.first(seq__36344_36374__$1);var k_36381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36353_36380,(0),null);var v_36382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36353_36380,(1),null);var m36342_36383 = (function (){var G__36354 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36354) : cljs.core.deref.call(null,G__36354));
})();var G__36355_36384 = m_atom__2344__auto__;var G__36356_36385 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m36342_36383,(function (){var G__36357 = k_36381;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36357) : f.call(null,G__36357));
})(),v_36382);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36355_36384,G__36356_36385) : cljs.core.reset_BANG_.call(null,G__36355_36384,G__36356_36385));
{
var G__36386 = cljs.core.next(seq__36344_36374__$1);
var G__36387 = null;
var G__36388 = (0);
var G__36389 = (0);
seq__36344_36359 = G__36386;
chunk__36345_36360 = G__36387;
count__36346_36361 = G__36388;
i__36347_36362 = G__36389;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__36358 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36358) : cljs.core.deref.call(null,G__36358));
})());
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__2344__auto__ = (function (){var G__36406 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36406) : cljs.core.atom.call(null,G__36406));
})();var seq__36407_36420 = cljs.core.seq(ks);var chunk__36408_36421 = null;var count__36409_36422 = (0);var i__36410_36423 = (0);while(true){
if((i__36410_36423 < count__36409_36422))
{var k_36424 = chunk__36408_36421.cljs$core$IIndexed$_nth$arity$2(null,i__36410_36423);var m36405_36425 = (function (){var G__36411 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36411) : cljs.core.deref.call(null,G__36411));
})();var G__36412_36426 = m_atom__2344__auto__;var G__36413_36427 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m36405_36425,k_36424,(function (){var G__36414 = k_36424;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36414) : f.call(null,G__36414));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36412_36426,G__36413_36427) : cljs.core.reset_BANG_.call(null,G__36412_36426,G__36413_36427));
{
var G__36428 = seq__36407_36420;
var G__36429 = chunk__36408_36421;
var G__36430 = count__36409_36422;
var G__36431 = (i__36410_36423 + (1));
seq__36407_36420 = G__36428;
chunk__36408_36421 = G__36429;
count__36409_36422 = G__36430;
i__36410_36423 = G__36431;
continue;
}
} else
{var temp__4126__auto___36432 = cljs.core.seq(seq__36407_36420);if(temp__4126__auto___36432)
{var seq__36407_36433__$1 = temp__4126__auto___36432;if(cljs.core.chunked_seq_QMARK_(seq__36407_36433__$1))
{var c__21126__auto___36434 = cljs.core.chunk_first(seq__36407_36433__$1);{
var G__36435 = cljs.core.chunk_rest(seq__36407_36433__$1);
var G__36436 = c__21126__auto___36434;
var G__36437 = cljs.core.count(c__21126__auto___36434);
var G__36438 = (0);
seq__36407_36420 = G__36435;
chunk__36408_36421 = G__36436;
count__36409_36422 = G__36437;
i__36410_36423 = G__36438;
continue;
}
} else
{var k_36439 = cljs.core.first(seq__36407_36433__$1);var m36405_36440 = (function (){var G__36415 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36415) : cljs.core.deref.call(null,G__36415));
})();var G__36416_36441 = m_atom__2344__auto__;var G__36417_36442 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m36405_36440,k_36439,(function (){var G__36418 = k_36439;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36418) : f.call(null,G__36418));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36416_36441,G__36417_36442) : cljs.core.reset_BANG_.call(null,G__36416_36441,G__36417_36442));
{
var G__36443 = cljs.core.next(seq__36407_36433__$1);
var G__36444 = null;
var G__36445 = (0);
var G__36446 = (0);
seq__36407_36420 = G__36443;
chunk__36408_36421 = G__36444;
count__36409_36422 = G__36445;
i__36410_36423 = G__36446;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__36419 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36419) : cljs.core.deref.call(null,G__36419));
})());
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__2344__auto__ = (function (){var G__36463 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36463) : cljs.core.atom.call(null,G__36463));
})();var seq__36464_36477 = cljs.core.seq(vs);var chunk__36465_36478 = null;var count__36466_36479 = (0);var i__36467_36480 = (0);while(true){
if((i__36467_36480 < count__36466_36479))
{var v_36481 = chunk__36465_36478.cljs$core$IIndexed$_nth$arity$2(null,i__36467_36480);var m36462_36482 = (function (){var G__36468 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36468) : cljs.core.deref.call(null,G__36468));
})();var G__36469_36483 = m_atom__2344__auto__;var G__36470_36484 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m36462_36482,(function (){var G__36471 = v_36481;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36471) : f.call(null,G__36471));
})(),v_36481);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36469_36483,G__36470_36484) : cljs.core.reset_BANG_.call(null,G__36469_36483,G__36470_36484));
{
var G__36485 = seq__36464_36477;
var G__36486 = chunk__36465_36478;
var G__36487 = count__36466_36479;
var G__36488 = (i__36467_36480 + (1));
seq__36464_36477 = G__36485;
chunk__36465_36478 = G__36486;
count__36466_36479 = G__36487;
i__36467_36480 = G__36488;
continue;
}
} else
{var temp__4126__auto___36489 = cljs.core.seq(seq__36464_36477);if(temp__4126__auto___36489)
{var seq__36464_36490__$1 = temp__4126__auto___36489;if(cljs.core.chunked_seq_QMARK_(seq__36464_36490__$1))
{var c__21126__auto___36491 = cljs.core.chunk_first(seq__36464_36490__$1);{
var G__36492 = cljs.core.chunk_rest(seq__36464_36490__$1);
var G__36493 = c__21126__auto___36491;
var G__36494 = cljs.core.count(c__21126__auto___36491);
var G__36495 = (0);
seq__36464_36477 = G__36492;
chunk__36465_36478 = G__36493;
count__36466_36479 = G__36494;
i__36467_36480 = G__36495;
continue;
}
} else
{var v_36496 = cljs.core.first(seq__36464_36490__$1);var m36462_36497 = (function (){var G__36472 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36472) : cljs.core.deref.call(null,G__36472));
})();var G__36473_36498 = m_atom__2344__auto__;var G__36474_36499 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m36462_36497,(function (){var G__36475 = v_36496;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36475) : f.call(null,G__36475));
})(),v_36496);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36473_36498,G__36474_36499) : cljs.core.reset_BANG_.call(null,G__36473_36498,G__36474_36499));
{
var G__36500 = cljs.core.next(seq__36464_36490__$1);
var G__36501 = null;
var G__36502 = (0);
var G__36503 = (0);
seq__36464_36477 = G__36500;
chunk__36465_36478 = G__36501;
count__36466_36479 = G__36502;
i__36467_36480 = G__36503;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__36476 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36476) : cljs.core.deref.call(null,G__36476));
})());
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__36504){var vec__36512 = p__36504;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36512,(0),null);var ks = cljs.core.nthnext(vec__36512,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__19621__auto__ = ks;if(and__19621__auto__)
{return dissoc_in((function (){var G__36514 = k;return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(G__36514) : m.call(null,G__36514));
})(),ks);
} else
{return and__19621__auto__;
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
{var m_atom__2344__auto__ = (function (){var G__36533 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36533) : cljs.core.atom.call(null,G__36533));
})();var seq__36534_36547 = cljs.core.seq(x);var chunk__36535_36548 = null;var count__36536_36549 = (0);var i__36537_36550 = (0);while(true){
if((i__36537_36550 < count__36536_36549))
{var vec__36538_36551 = chunk__36535_36548.cljs$core$IIndexed$_nth$arity$2(null,i__36537_36550);var k_36552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36538_36551,(0),null);var v_36553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36538_36551,(1),null);var m36532_36554 = (function (){var G__36539 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36539) : cljs.core.deref.call(null,G__36539));
})();var G__36540_36555 = m_atom__2344__auto__;var G__36541_36556 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m36532_36554,((typeof k_36552 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_36552):k_36552),keywordize_map(v_36553));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36540_36555,G__36541_36556) : cljs.core.reset_BANG_.call(null,G__36540_36555,G__36541_36556));
{
var G__36557 = seq__36534_36547;
var G__36558 = chunk__36535_36548;
var G__36559 = count__36536_36549;
var G__36560 = (i__36537_36550 + (1));
seq__36534_36547 = G__36557;
chunk__36535_36548 = G__36558;
count__36536_36549 = G__36559;
i__36537_36550 = G__36560;
continue;
}
} else
{var temp__4126__auto___36561 = cljs.core.seq(seq__36534_36547);if(temp__4126__auto___36561)
{var seq__36534_36562__$1 = temp__4126__auto___36561;if(cljs.core.chunked_seq_QMARK_(seq__36534_36562__$1))
{var c__21126__auto___36563 = cljs.core.chunk_first(seq__36534_36562__$1);{
var G__36564 = cljs.core.chunk_rest(seq__36534_36562__$1);
var G__36565 = c__21126__auto___36563;
var G__36566 = cljs.core.count(c__21126__auto___36563);
var G__36567 = (0);
seq__36534_36547 = G__36564;
chunk__36535_36548 = G__36565;
count__36536_36549 = G__36566;
i__36537_36550 = G__36567;
continue;
}
} else
{var vec__36542_36568 = cljs.core.first(seq__36534_36562__$1);var k_36569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36542_36568,(0),null);var v_36570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36542_36568,(1),null);var m36532_36571 = (function (){var G__36543 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36543) : cljs.core.deref.call(null,G__36543));
})();var G__36544_36572 = m_atom__2344__auto__;var G__36545_36573 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m36532_36571,((typeof k_36569 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_36569):k_36569),keywordize_map(v_36570));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36544_36572,G__36545_36573) : cljs.core.reset_BANG_.call(null,G__36544_36572,G__36545_36573));
{
var G__36574 = cljs.core.next(seq__36534_36562__$1);
var G__36575 = null;
var G__36576 = (0);
var G__36577 = (0);
seq__36534_36547 = G__36574;
chunk__36535_36548 = G__36575;
count__36536_36549 = G__36576;
i__36537_36550 = G__36577;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__36546 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36546) : cljs.core.deref.call(null,G__36546));
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
{var G__36582 = false;var G__36583 = "Key %s not found in %s";var G__36584 = k;var G__36585 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.key,m);return (plumbing.fnk.schema.assert_iae.cljs$core$IFn$_invoke$arity$4 ? plumbing.fnk.schema.assert_iae.cljs$core$IFn$_invoke$arity$4(G__36582,G__36583,G__36584,G__36585) : plumbing.fnk.schema.assert_iae.call(null,G__36582,G__36583,G__36584,G__36585));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq(ks))
{{
var G__36586 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__36587 = cljs.core.next(ks);
m = G__36586;
ks = G__36587;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__19663__auto__ = m;if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__21074__auto__ = (function iter__36598(s__36599){return (new cljs.core.LazySeq(null,(function (){var s__36599__$1 = s__36599;while(true){
var temp__4126__auto__ = cljs.core.seq(s__36599__$1);if(temp__4126__auto__)
{var s__36599__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__36599__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__36599__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__36601 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__36600 = (0);while(true){
if((i__36600 < size__21073__auto__))
{var vec__36606 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__36600);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36606,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36606,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append(b__36601,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__36608 = (i__36600 + (1));
i__36600 = G__36608;
continue;
}
} else
{{
var G__36609 = (i__36600 + (1));
i__36600 = G__36609;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__36601),iter__36598(cljs.core.chunk_rest(s__36599__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__36601),null);
}
} else
{var vec__36607 = cljs.core.first(s__36599__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36607,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36607,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__36598(cljs.core.rest(s__36599__$2)));
} else
{{
var G__36610 = cljs.core.rest(s__36599__$2);
s__36599__$1 = G__36610;
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
});return iter__21074__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__36611){
var m = cljs.core.first(arglist__36611);
var kvs = cljs.core.rest(arglist__36611);
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
update_in_when.cljs$lang$applyTo = (function (arglist__36612){
var m = cljs.core.first(arglist__36612);
arglist__36612 = cljs.core.next(arglist__36612);
var key_seq = cljs.core.first(arglist__36612);
arglist__36612 = cljs.core.next(arglist__36612);
var f = cljs.core.first(arglist__36612);
var args = cljs.core.rest(arglist__36612);
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
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){var k = (function (){var G__36615 = x;return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__36615) : key_fn.call(null,G__36615));
})();return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(function (){var G__36616 = x;return (map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(G__36616) : map_fn.call(null,G__36616));
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
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){if(cljs.core.truth_((function (){var G__36620 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36620) : f.call(null,G__36620));
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
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = (function (){var G__36636 = cljs.core.PersistentHashSet.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36636) : cljs.core.atom.call(null,G__36636));
})();var iter__21074__auto__ = ((function (s){
return (function iter__36637(s__36638){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__36638__$1 = s__36638;while(true){
var temp__4126__auto__ = cljs.core.seq(s__36638__$1);if(temp__4126__auto__)
{var s__36638__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__36638__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__36638__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__36640 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__36639 = (0);while(true){
if((i__36639 < size__21073__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__36639);var id = (function (){var G__36647 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36647) : f.call(null,G__36647));
})();if(!(cljs.core.contains_QMARK_((function (){var G__36648 = s;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36648) : cljs.core.deref.call(null,G__36648));
})(),id)))
{cljs.core.chunk_append(b__36640,(function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);
return x;
})());
{
var G__36651 = (i__36639 + (1));
i__36639 = G__36651;
continue;
}
} else
{{
var G__36652 = (i__36639 + (1));
i__36639 = G__36652;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__36640),iter__36637(cljs.core.chunk_rest(s__36638__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__36640),null);
}
} else
{var x = cljs.core.first(s__36638__$2);var id = (function (){var G__36649 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36649) : f.call(null,G__36649));
})();if(!(cljs.core.contains_QMARK_((function (){var G__36650 = s;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36650) : cljs.core.deref.call(null,G__36650));
})(),id)))
{return cljs.core.cons((function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);
return x;
})(),iter__36637(cljs.core.rest(s__36638__$2)));
} else
{{
var G__36653 = cljs.core.rest(s__36638__$2);
s__36638__$1 = G__36653;
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
;return iter__21074__auto__(xs);
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
interleave_all.cljs$lang$applyTo = (function (arglist__36656){
var colls = cljs.core.seq(arglist__36656);
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
var G__36661__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__36662 = conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__36663 = cljs.core.first(xs);
var G__36664 = cljs.core.next(xs);
coll = G__36662;
x = G__36663;
xs = G__36664;
continue;
}
} else
{return conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__36661 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__36661__delegate.call(this,coll,x,xs);};
G__36661.cljs$lang$maxFixedArity = 2;
G__36661.cljs$lang$applyTo = (function (arglist__36665){
var coll = cljs.core.first(arglist__36665);
arglist__36665 = cljs.core.next(arglist__36665);
var x = cljs.core.first(arglist__36665);
var xs = cljs.core.rest(arglist__36665);
return G__36661__delegate(coll,x,xs);
});
G__36661.cljs$core$IFn$_invoke$arity$variadic = G__36661__delegate;
return G__36661;
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
var old_val = (function (){var G__36671 = a;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36671) : cljs.core.deref.call(null,G__36671));
})();var new_val = (function (){var G__36672 = old_val;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36672) : f.call(null,G__36672));
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
var G__36673__delegate = function (a,f,args){return swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__36666_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__36666_SHARP_,args);
}));
};
var G__36673 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__36673__delegate.call(this,a,f,args);};
G__36673.cljs$lang$maxFixedArity = 2;
G__36673.cljs$lang$applyTo = (function (arglist__36674){
var a = cljs.core.first(arglist__36674);
arglist__36674 = cljs.core.next(arglist__36674);
var f = cljs.core.first(arglist__36674);
var args = cljs.core.rest(arglist__36674);
return G__36673__delegate(a,f,args);
});
G__36673.cljs$core$IFn$_invoke$arity$variadic = G__36673__delegate;
return G__36673;
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
var G__36675__delegate = function (f,arg,args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
};
var G__36675 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__36675__delegate.call(this,f,arg,args);};
G__36675.cljs$lang$maxFixedArity = 2;
G__36675.cljs$lang$applyTo = (function (arglist__36676){
var f = cljs.core.first(arglist__36676);
arglist__36676 = cljs.core.next(arglist__36676);
var arg = cljs.core.first(arglist__36676);
var args = cljs.core.rest(arglist__36676);
return G__36675__delegate(f,arg,args);
});
G__36675.cljs$core$IFn$_invoke$arity$variadic = G__36675__delegate;
return G__36675;
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