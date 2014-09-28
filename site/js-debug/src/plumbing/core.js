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
var update__3 = (function (m,k,f){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__53239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53239) : f.call(null,G__53239));
})());
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__53240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__53241 = x1;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__53240,G__53241) : f.call(null,G__53240,G__53241));
})());
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__53242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__53243 = x1;var G__53244 = x2;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__53242,G__53243,G__53244) : f.call(null,G__53242,G__53243,G__53244));
})());
});
var update__6 = (function() { 
var G__53245__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
};
var G__53245 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__53245__delegate.call(this,m,k,f,x1,x2,xs);};
G__53245.cljs$lang$maxFixedArity = 5;
G__53245.cljs$lang$applyTo = (function (arglist__53246){
var m = cljs.core.first(arglist__53246);
arglist__53246 = cljs.core.next(arglist__53246);
var k = cljs.core.first(arglist__53246);
arglist__53246 = cljs.core.next(arglist__53246);
var f = cljs.core.first(arglist__53246);
arglist__53246 = cljs.core.next(arglist__53246);
var x1 = cljs.core.first(arglist__53246);
arglist__53246 = cljs.core.next(arglist__53246);
var x2 = cljs.core.first(arglist__53246);
var xs = cljs.core.rest(arglist__53246);
return G__53245__delegate(m,k,f,x1,x2,xs);
});
G__53245.cljs$core$IFn$_invoke$arity$variadic = G__53245__delegate;
return G__53245;
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
{return cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__53266 = v;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53266) : f.call(null,G__53266));
})());
}),cljs.core.sorted_map(),m);
} else
{if(cljs.core.map_QMARK_(m))
{return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__53267 = v;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53267) : f.call(null,G__53267));
})());
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__2344__auto__ = (function (){var G__53269 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__53269) : cljs.core.atom.call(null,G__53269));
})();var seq__53270_53285 = cljs.core.seq(m);var chunk__53271_53286 = null;var count__53272_53287 = (0);var i__53273_53288 = (0);while(true){
if((i__53273_53288 < count__53272_53287))
{var vec__53274_53289 = chunk__53271_53286.cljs$core$IIndexed$_nth$arity$2(null,i__53273_53288);var k_53290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53274_53289,(0),null);var v_53291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53274_53289,(1),null);var m53268_53292 = (function (){var G__53275 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53275) : cljs.core.deref.call(null,G__53275));
})();var G__53276_53293 = m_atom__2344__auto__;var G__53277_53294 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53268_53292,k_53290,(function (){var G__53278 = v_53291;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53278) : f.call(null,G__53278));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__53276_53293,G__53277_53294) : cljs.core.reset_BANG_.call(null,G__53276_53293,G__53277_53294));
{
var G__53295 = seq__53270_53285;
var G__53296 = chunk__53271_53286;
var G__53297 = count__53272_53287;
var G__53298 = (i__53273_53288 + (1));
seq__53270_53285 = G__53295;
chunk__53271_53286 = G__53296;
count__53272_53287 = G__53297;
i__53273_53288 = G__53298;
continue;
}
} else
{var temp__4126__auto___53299 = cljs.core.seq(seq__53270_53285);if(temp__4126__auto___53299)
{var seq__53270_53300__$1 = temp__4126__auto___53299;if(cljs.core.chunked_seq_QMARK_(seq__53270_53300__$1))
{var c__20735__auto___53301 = cljs.core.chunk_first(seq__53270_53300__$1);{
var G__53302 = cljs.core.chunk_rest(seq__53270_53300__$1);
var G__53303 = c__20735__auto___53301;
var G__53304 = cljs.core.count(c__20735__auto___53301);
var G__53305 = (0);
seq__53270_53285 = G__53302;
chunk__53271_53286 = G__53303;
count__53272_53287 = G__53304;
i__53273_53288 = G__53305;
continue;
}
} else
{var vec__53279_53306 = cljs.core.first(seq__53270_53300__$1);var k_53307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53279_53306,(0),null);var v_53308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53279_53306,(1),null);var m53268_53309 = (function (){var G__53280 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53280) : cljs.core.deref.call(null,G__53280));
})();var G__53281_53310 = m_atom__2344__auto__;var G__53282_53311 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53268_53309,k_53307,(function (){var G__53283 = v_53308;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53283) : f.call(null,G__53283));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__53281_53310,G__53282_53311) : cljs.core.reset_BANG_.call(null,G__53281_53310,G__53282_53311));
{
var G__53312 = cljs.core.next(seq__53270_53300__$1);
var G__53313 = null;
var G__53314 = (0);
var G__53315 = (0);
seq__53270_53285 = G__53312;
chunk__53271_53286 = G__53313;
count__53272_53287 = G__53314;
i__53273_53288 = G__53315;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__53284 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53284) : cljs.core.deref.call(null,G__53284));
})());

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_(m))
{return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(function (){var G__53334 = k;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53334) : f.call(null,G__53334));
})(),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__2344__auto__ = (function (){var G__53336 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__53336) : cljs.core.atom.call(null,G__53336));
})();var seq__53337_53352 = cljs.core.seq(m);var chunk__53338_53353 = null;var count__53339_53354 = (0);var i__53340_53355 = (0);while(true){
if((i__53340_53355 < count__53339_53354))
{var vec__53341_53356 = chunk__53338_53353.cljs$core$IIndexed$_nth$arity$2(null,i__53340_53355);var k_53357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53341_53356,(0),null);var v_53358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53341_53356,(1),null);var m53335_53359 = (function (){var G__53342 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53342) : cljs.core.deref.call(null,G__53342));
})();var G__53343_53360 = m_atom__2344__auto__;var G__53344_53361 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53335_53359,(function (){var G__53345 = k_53357;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53345) : f.call(null,G__53345));
})(),v_53358);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__53343_53360,G__53344_53361) : cljs.core.reset_BANG_.call(null,G__53343_53360,G__53344_53361));
{
var G__53362 = seq__53337_53352;
var G__53363 = chunk__53338_53353;
var G__53364 = count__53339_53354;
var G__53365 = (i__53340_53355 + (1));
seq__53337_53352 = G__53362;
chunk__53338_53353 = G__53363;
count__53339_53354 = G__53364;
i__53340_53355 = G__53365;
continue;
}
} else
{var temp__4126__auto___53366 = cljs.core.seq(seq__53337_53352);if(temp__4126__auto___53366)
{var seq__53337_53367__$1 = temp__4126__auto___53366;if(cljs.core.chunked_seq_QMARK_(seq__53337_53367__$1))
{var c__20735__auto___53368 = cljs.core.chunk_first(seq__53337_53367__$1);{
var G__53369 = cljs.core.chunk_rest(seq__53337_53367__$1);
var G__53370 = c__20735__auto___53368;
var G__53371 = cljs.core.count(c__20735__auto___53368);
var G__53372 = (0);
seq__53337_53352 = G__53369;
chunk__53338_53353 = G__53370;
count__53339_53354 = G__53371;
i__53340_53355 = G__53372;
continue;
}
} else
{var vec__53346_53373 = cljs.core.first(seq__53337_53367__$1);var k_53374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53346_53373,(0),null);var v_53375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53346_53373,(1),null);var m53335_53376 = (function (){var G__53347 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53347) : cljs.core.deref.call(null,G__53347));
})();var G__53348_53377 = m_atom__2344__auto__;var G__53349_53378 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53335_53376,(function (){var G__53350 = k_53374;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53350) : f.call(null,G__53350));
})(),v_53375);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__53348_53377,G__53349_53378) : cljs.core.reset_BANG_.call(null,G__53348_53377,G__53349_53378));
{
var G__53379 = cljs.core.next(seq__53337_53367__$1);
var G__53380 = null;
var G__53381 = (0);
var G__53382 = (0);
seq__53337_53352 = G__53379;
chunk__53338_53353 = G__53380;
count__53339_53354 = G__53381;
i__53340_53355 = G__53382;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__53351 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53351) : cljs.core.deref.call(null,G__53351));
})());
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__2344__auto__ = (function (){var G__53399 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__53399) : cljs.core.atom.call(null,G__53399));
})();var seq__53400_53413 = cljs.core.seq(ks);var chunk__53401_53414 = null;var count__53402_53415 = (0);var i__53403_53416 = (0);while(true){
if((i__53403_53416 < count__53402_53415))
{var k_53417 = chunk__53401_53414.cljs$core$IIndexed$_nth$arity$2(null,i__53403_53416);var m53398_53418 = (function (){var G__53404 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53404) : cljs.core.deref.call(null,G__53404));
})();var G__53405_53419 = m_atom__2344__auto__;var G__53406_53420 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53398_53418,k_53417,(function (){var G__53407 = k_53417;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53407) : f.call(null,G__53407));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__53405_53419,G__53406_53420) : cljs.core.reset_BANG_.call(null,G__53405_53419,G__53406_53420));
{
var G__53421 = seq__53400_53413;
var G__53422 = chunk__53401_53414;
var G__53423 = count__53402_53415;
var G__53424 = (i__53403_53416 + (1));
seq__53400_53413 = G__53421;
chunk__53401_53414 = G__53422;
count__53402_53415 = G__53423;
i__53403_53416 = G__53424;
continue;
}
} else
{var temp__4126__auto___53425 = cljs.core.seq(seq__53400_53413);if(temp__4126__auto___53425)
{var seq__53400_53426__$1 = temp__4126__auto___53425;if(cljs.core.chunked_seq_QMARK_(seq__53400_53426__$1))
{var c__20735__auto___53427 = cljs.core.chunk_first(seq__53400_53426__$1);{
var G__53428 = cljs.core.chunk_rest(seq__53400_53426__$1);
var G__53429 = c__20735__auto___53427;
var G__53430 = cljs.core.count(c__20735__auto___53427);
var G__53431 = (0);
seq__53400_53413 = G__53428;
chunk__53401_53414 = G__53429;
count__53402_53415 = G__53430;
i__53403_53416 = G__53431;
continue;
}
} else
{var k_53432 = cljs.core.first(seq__53400_53426__$1);var m53398_53433 = (function (){var G__53408 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53408) : cljs.core.deref.call(null,G__53408));
})();var G__53409_53434 = m_atom__2344__auto__;var G__53410_53435 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53398_53433,k_53432,(function (){var G__53411 = k_53432;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53411) : f.call(null,G__53411));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__53409_53434,G__53410_53435) : cljs.core.reset_BANG_.call(null,G__53409_53434,G__53410_53435));
{
var G__53436 = cljs.core.next(seq__53400_53426__$1);
var G__53437 = null;
var G__53438 = (0);
var G__53439 = (0);
seq__53400_53413 = G__53436;
chunk__53401_53414 = G__53437;
count__53402_53415 = G__53438;
i__53403_53416 = G__53439;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__53412 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53412) : cljs.core.deref.call(null,G__53412));
})());
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__2344__auto__ = (function (){var G__53456 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__53456) : cljs.core.atom.call(null,G__53456));
})();var seq__53457_53470 = cljs.core.seq(vs);var chunk__53458_53471 = null;var count__53459_53472 = (0);var i__53460_53473 = (0);while(true){
if((i__53460_53473 < count__53459_53472))
{var v_53474 = chunk__53458_53471.cljs$core$IIndexed$_nth$arity$2(null,i__53460_53473);var m53455_53475 = (function (){var G__53461 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53461) : cljs.core.deref.call(null,G__53461));
})();var G__53462_53476 = m_atom__2344__auto__;var G__53463_53477 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53455_53475,(function (){var G__53464 = v_53474;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53464) : f.call(null,G__53464));
})(),v_53474);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__53462_53476,G__53463_53477) : cljs.core.reset_BANG_.call(null,G__53462_53476,G__53463_53477));
{
var G__53478 = seq__53457_53470;
var G__53479 = chunk__53458_53471;
var G__53480 = count__53459_53472;
var G__53481 = (i__53460_53473 + (1));
seq__53457_53470 = G__53478;
chunk__53458_53471 = G__53479;
count__53459_53472 = G__53480;
i__53460_53473 = G__53481;
continue;
}
} else
{var temp__4126__auto___53482 = cljs.core.seq(seq__53457_53470);if(temp__4126__auto___53482)
{var seq__53457_53483__$1 = temp__4126__auto___53482;if(cljs.core.chunked_seq_QMARK_(seq__53457_53483__$1))
{var c__20735__auto___53484 = cljs.core.chunk_first(seq__53457_53483__$1);{
var G__53485 = cljs.core.chunk_rest(seq__53457_53483__$1);
var G__53486 = c__20735__auto___53484;
var G__53487 = cljs.core.count(c__20735__auto___53484);
var G__53488 = (0);
seq__53457_53470 = G__53485;
chunk__53458_53471 = G__53486;
count__53459_53472 = G__53487;
i__53460_53473 = G__53488;
continue;
}
} else
{var v_53489 = cljs.core.first(seq__53457_53483__$1);var m53455_53490 = (function (){var G__53465 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53465) : cljs.core.deref.call(null,G__53465));
})();var G__53466_53491 = m_atom__2344__auto__;var G__53467_53492 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53455_53490,(function (){var G__53468 = v_53489;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53468) : f.call(null,G__53468));
})(),v_53489);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__53466_53491,G__53467_53492) : cljs.core.reset_BANG_.call(null,G__53466_53491,G__53467_53492));
{
var G__53493 = cljs.core.next(seq__53457_53483__$1);
var G__53494 = null;
var G__53495 = (0);
var G__53496 = (0);
seq__53457_53470 = G__53493;
chunk__53458_53471 = G__53494;
count__53459_53472 = G__53495;
i__53460_53473 = G__53496;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__53469 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53469) : cljs.core.deref.call(null,G__53469));
})());
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__53497){var vec__53505 = p__53497;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53505,(0),null);var ks = cljs.core.nthnext(vec__53505,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__19267__auto__ = ks;if(and__19267__auto__)
{return dissoc_in((function (){var G__53507 = k;return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(G__53507) : m.call(null,G__53507));
})(),ks);
} else
{return and__19267__auto__;
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
{var m_atom__2344__auto__ = (function (){var G__53526 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__53526) : cljs.core.atom.call(null,G__53526));
})();var seq__53527_53540 = cljs.core.seq(x);var chunk__53528_53541 = null;var count__53529_53542 = (0);var i__53530_53543 = (0);while(true){
if((i__53530_53543 < count__53529_53542))
{var vec__53531_53544 = chunk__53528_53541.cljs$core$IIndexed$_nth$arity$2(null,i__53530_53543);var k_53545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53531_53544,(0),null);var v_53546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53531_53544,(1),null);var m53525_53547 = (function (){var G__53532 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53532) : cljs.core.deref.call(null,G__53532));
})();var G__53533_53548 = m_atom__2344__auto__;var G__53534_53549 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53525_53547,((typeof k_53545 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_53545):k_53545),keywordize_map(v_53546));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__53533_53548,G__53534_53549) : cljs.core.reset_BANG_.call(null,G__53533_53548,G__53534_53549));
{
var G__53550 = seq__53527_53540;
var G__53551 = chunk__53528_53541;
var G__53552 = count__53529_53542;
var G__53553 = (i__53530_53543 + (1));
seq__53527_53540 = G__53550;
chunk__53528_53541 = G__53551;
count__53529_53542 = G__53552;
i__53530_53543 = G__53553;
continue;
}
} else
{var temp__4126__auto___53554 = cljs.core.seq(seq__53527_53540);if(temp__4126__auto___53554)
{var seq__53527_53555__$1 = temp__4126__auto___53554;if(cljs.core.chunked_seq_QMARK_(seq__53527_53555__$1))
{var c__20735__auto___53556 = cljs.core.chunk_first(seq__53527_53555__$1);{
var G__53557 = cljs.core.chunk_rest(seq__53527_53555__$1);
var G__53558 = c__20735__auto___53556;
var G__53559 = cljs.core.count(c__20735__auto___53556);
var G__53560 = (0);
seq__53527_53540 = G__53557;
chunk__53528_53541 = G__53558;
count__53529_53542 = G__53559;
i__53530_53543 = G__53560;
continue;
}
} else
{var vec__53535_53561 = cljs.core.first(seq__53527_53555__$1);var k_53562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53535_53561,(0),null);var v_53563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53535_53561,(1),null);var m53525_53564 = (function (){var G__53536 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53536) : cljs.core.deref.call(null,G__53536));
})();var G__53537_53565 = m_atom__2344__auto__;var G__53538_53566 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53525_53564,((typeof k_53562 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_53562):k_53562),keywordize_map(v_53563));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__53537_53565,G__53538_53566) : cljs.core.reset_BANG_.call(null,G__53537_53565,G__53538_53566));
{
var G__53567 = cljs.core.next(seq__53527_53555__$1);
var G__53568 = null;
var G__53569 = (0);
var G__53570 = (0);
seq__53527_53540 = G__53567;
chunk__53528_53541 = G__53568;
count__53529_53542 = G__53569;
i__53530_53543 = G__53570;
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
{var G__53575 = false;var G__53576 = "Key %s not found in %s";var G__53577 = k;var G__53578 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.key,m);return (plumbing.fnk.schema.assert_iae.cljs$core$IFn$_invoke$arity$4 ? plumbing.fnk.schema.assert_iae.cljs$core$IFn$_invoke$arity$4(G__53575,G__53576,G__53577,G__53578) : plumbing.fnk.schema.assert_iae.call(null,G__53575,G__53576,G__53577,G__53578));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq(ks))
{{
var G__53579 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__53580 = cljs.core.next(ks);
m = G__53579;
ks = G__53580;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__19289__auto__ = m;if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__20686__auto__ = (function iter__53591(s__53592){return (new cljs.core.LazySeq(null,(function (){var s__53592__$1 = s__53592;while(true){
var temp__4126__auto__ = cljs.core.seq(s__53592__$1);if(temp__4126__auto__)
{var s__53592__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__53592__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__53592__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__53594 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__53593 = (0);while(true){
if((i__53593 < size__20685__auto__))
{var vec__53599 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__53593);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53599,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53599,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append(b__53594,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__53601 = (i__53593 + (1));
i__53593 = G__53601;
continue;
}
} else
{{
var G__53602 = (i__53593 + (1));
i__53593 = G__53602;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53594),iter__53591(cljs.core.chunk_rest(s__53592__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53594),null);
}
} else
{var vec__53600 = cljs.core.first(s__53592__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53600,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53600,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__53591(cljs.core.rest(s__53592__$2)));
} else
{{
var G__53603 = cljs.core.rest(s__53592__$2);
s__53592__$1 = G__53603;
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
});return iter__20686__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__53604){
var m = cljs.core.first(arglist__53604);
var kvs = cljs.core.rest(arglist__53604);
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
update_in_when.cljs$lang$applyTo = (function (arglist__53605){
var m = cljs.core.first(arglist__53605);
arglist__53605 = cljs.core.next(arglist__53605);
var key_seq = cljs.core.first(arglist__53605);
arglist__53605 = cljs.core.next(arglist__53605);
var f = cljs.core.first(arglist__53605);
var args = cljs.core.rest(arglist__53605);
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
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){var k = (function (){var G__53608 = x;return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__53608) : key_fn.call(null,G__53608));
})();return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(function (){var G__53609 = x;return (map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(G__53609) : map_fn.call(null,G__53609));
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
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){if(cljs.core.truth_((function (){var G__53613 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53613) : f.call(null,G__53613));
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
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = (function (){var G__53629 = cljs.core.PersistentHashSet.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__53629) : cljs.core.atom.call(null,G__53629));
})();var iter__20686__auto__ = ((function (s){
return (function iter__53630(s__53631){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__53631__$1 = s__53631;while(true){
var temp__4126__auto__ = cljs.core.seq(s__53631__$1);if(temp__4126__auto__)
{var s__53631__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__53631__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__53631__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__53633 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__53632 = (0);while(true){
if((i__53632 < size__20685__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__53632);var id = (function (){var G__53640 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53640) : f.call(null,G__53640));
})();if(!(cljs.core.contains_QMARK_((function (){var G__53641 = s;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53641) : cljs.core.deref.call(null,G__53641));
})(),id)))
{cljs.core.chunk_append(b__53633,(function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);
return x;
})());
{
var G__53644 = (i__53632 + (1));
i__53632 = G__53644;
continue;
}
} else
{{
var G__53645 = (i__53632 + (1));
i__53632 = G__53645;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53633),iter__53630(cljs.core.chunk_rest(s__53631__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53633),null);
}
} else
{var x = cljs.core.first(s__53631__$2);var id = (function (){var G__53642 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53642) : f.call(null,G__53642));
})();if(!(cljs.core.contains_QMARK_((function (){var G__53643 = s;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53643) : cljs.core.deref.call(null,G__53643));
})(),id)))
{return cljs.core.cons((function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);
return x;
})(),iter__53630(cljs.core.rest(s__53631__$2)));
} else
{{
var G__53646 = cljs.core.rest(s__53631__$2);
s__53631__$1 = G__53646;
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
;return iter__20686__auto__(xs);
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
interleave_all.cljs$lang$applyTo = (function (arglist__53649){
var colls = cljs.core.seq(arglist__53649);
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
var G__53654__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__53655 = conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__53656 = cljs.core.first(xs);
var G__53657 = cljs.core.next(xs);
coll = G__53655;
x = G__53656;
xs = G__53657;
continue;
}
} else
{return conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__53654 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__53654__delegate.call(this,coll,x,xs);};
G__53654.cljs$lang$maxFixedArity = 2;
G__53654.cljs$lang$applyTo = (function (arglist__53658){
var coll = cljs.core.first(arglist__53658);
arglist__53658 = cljs.core.next(arglist__53658);
var x = cljs.core.first(arglist__53658);
var xs = cljs.core.rest(arglist__53658);
return G__53654__delegate(coll,x,xs);
});
G__53654.cljs$core$IFn$_invoke$arity$variadic = G__53654__delegate;
return G__53654;
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
var old_val = (function (){var G__53664 = a;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53664) : cljs.core.deref.call(null,G__53664));
})();var new_val = (function (){var G__53665 = old_val;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53665) : f.call(null,G__53665));
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
var G__53666__delegate = function (a,f,args){return swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__53659_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__53659_SHARP_,args);
}));
};
var G__53666 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__53666__delegate.call(this,a,f,args);};
G__53666.cljs$lang$maxFixedArity = 2;
G__53666.cljs$lang$applyTo = (function (arglist__53667){
var a = cljs.core.first(arglist__53667);
arglist__53667 = cljs.core.next(arglist__53667);
var f = cljs.core.first(arglist__53667);
var args = cljs.core.rest(arglist__53667);
return G__53666__delegate(a,f,args);
});
G__53666.cljs$core$IFn$_invoke$arity$variadic = G__53666__delegate;
return G__53666;
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
var G__53668__delegate = function (f,arg,args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
};
var G__53668 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__53668__delegate.call(this,f,arg,args);};
G__53668.cljs$lang$maxFixedArity = 2;
G__53668.cljs$lang$applyTo = (function (arglist__53669){
var f = cljs.core.first(arglist__53669);
arglist__53669 = cljs.core.next(arglist__53669);
var arg = cljs.core.first(arglist__53669);
var args = cljs.core.rest(arglist__53669);
return G__53668__delegate(f,arg,args);
});
G__53668.cljs$core$IFn$_invoke$arity$variadic = G__53668__delegate;
return G__53668;
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