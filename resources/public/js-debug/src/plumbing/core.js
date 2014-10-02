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
var update__3 = (function (m,k,f){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__35936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35936) : f.call(null,G__35936));
})());
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__35937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__35938 = x1;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__35937,G__35938) : f.call(null,G__35937,G__35938));
})());
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__35939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__35940 = x1;var G__35941 = x2;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__35939,G__35940,G__35941) : f.call(null,G__35939,G__35940,G__35941));
})());
});
var update__6 = (function() { 
var G__35942__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
};
var G__35942 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__35942__delegate.call(this,m,k,f,x1,x2,xs);};
G__35942.cljs$lang$maxFixedArity = 5;
G__35942.cljs$lang$applyTo = (function (arglist__35943){
var m = cljs.core.first(arglist__35943);
arglist__35943 = cljs.core.next(arglist__35943);
var k = cljs.core.first(arglist__35943);
arglist__35943 = cljs.core.next(arglist__35943);
var f = cljs.core.first(arglist__35943);
arglist__35943 = cljs.core.next(arglist__35943);
var x1 = cljs.core.first(arglist__35943);
arglist__35943 = cljs.core.next(arglist__35943);
var x2 = cljs.core.first(arglist__35943);
var xs = cljs.core.rest(arglist__35943);
return G__35942__delegate(m,k,f,x1,x2,xs);
});
G__35942.cljs$core$IFn$_invoke$arity$variadic = G__35942__delegate;
return G__35942;
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
{return cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__35963 = v;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35963) : f.call(null,G__35963));
})());
}),cljs.core.sorted_map(),m);
} else
{if(cljs.core.map_QMARK_(m))
{return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__35964 = v;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35964) : f.call(null,G__35964));
})());
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__2344__auto__ = (function (){var G__35966 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35966) : cljs.core.atom.call(null,G__35966));
})();var seq__35967_35982 = cljs.core.seq(m);var chunk__35968_35983 = null;var count__35969_35984 = (0);var i__35970_35985 = (0);while(true){
if((i__35970_35985 < count__35969_35984))
{var vec__35971_35986 = chunk__35968_35983.cljs$core$IIndexed$_nth$arity$2(null,i__35970_35985);var k_35987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35971_35986,(0),null);var v_35988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35971_35986,(1),null);var m35965_35989 = (function (){var G__35972 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35972) : cljs.core.deref.call(null,G__35972));
})();var G__35973_35990 = m_atom__2344__auto__;var G__35974_35991 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35965_35989,k_35987,(function (){var G__35975 = v_35988;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35975) : f.call(null,G__35975));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35973_35990,G__35974_35991) : cljs.core.reset_BANG_.call(null,G__35973_35990,G__35974_35991));
{
var G__35992 = seq__35967_35982;
var G__35993 = chunk__35968_35983;
var G__35994 = count__35969_35984;
var G__35995 = (i__35970_35985 + (1));
seq__35967_35982 = G__35992;
chunk__35968_35983 = G__35993;
count__35969_35984 = G__35994;
i__35970_35985 = G__35995;
continue;
}
} else
{var temp__4126__auto___35996 = cljs.core.seq(seq__35967_35982);if(temp__4126__auto___35996)
{var seq__35967_35997__$1 = temp__4126__auto___35996;if(cljs.core.chunked_seq_QMARK_(seq__35967_35997__$1))
{var c__20792__auto___35998 = cljs.core.chunk_first(seq__35967_35997__$1);{
var G__35999 = cljs.core.chunk_rest(seq__35967_35997__$1);
var G__36000 = c__20792__auto___35998;
var G__36001 = cljs.core.count(c__20792__auto___35998);
var G__36002 = (0);
seq__35967_35982 = G__35999;
chunk__35968_35983 = G__36000;
count__35969_35984 = G__36001;
i__35970_35985 = G__36002;
continue;
}
} else
{var vec__35976_36003 = cljs.core.first(seq__35967_35997__$1);var k_36004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35976_36003,(0),null);var v_36005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35976_36003,(1),null);var m35965_36006 = (function (){var G__35977 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35977) : cljs.core.deref.call(null,G__35977));
})();var G__35978_36007 = m_atom__2344__auto__;var G__35979_36008 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35965_36006,k_36004,(function (){var G__35980 = v_36005;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35980) : f.call(null,G__35980));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35978_36007,G__35979_36008) : cljs.core.reset_BANG_.call(null,G__35978_36007,G__35979_36008));
{
var G__36009 = cljs.core.next(seq__35967_35997__$1);
var G__36010 = null;
var G__36011 = (0);
var G__36012 = (0);
seq__35967_35982 = G__36009;
chunk__35968_35983 = G__36010;
count__35969_35984 = G__36011;
i__35970_35985 = G__36012;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__35981 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35981) : cljs.core.deref.call(null,G__35981));
})());

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_(m))
{return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(function (){var G__36031 = k;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36031) : f.call(null,G__36031));
})(),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__2344__auto__ = (function (){var G__36033 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36033) : cljs.core.atom.call(null,G__36033));
})();var seq__36034_36049 = cljs.core.seq(m);var chunk__36035_36050 = null;var count__36036_36051 = (0);var i__36037_36052 = (0);while(true){
if((i__36037_36052 < count__36036_36051))
{var vec__36038_36053 = chunk__36035_36050.cljs$core$IIndexed$_nth$arity$2(null,i__36037_36052);var k_36054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36038_36053,(0),null);var v_36055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36038_36053,(1),null);var m36032_36056 = (function (){var G__36039 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36039) : cljs.core.deref.call(null,G__36039));
})();var G__36040_36057 = m_atom__2344__auto__;var G__36041_36058 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m36032_36056,(function (){var G__36042 = k_36054;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36042) : f.call(null,G__36042));
})(),v_36055);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36040_36057,G__36041_36058) : cljs.core.reset_BANG_.call(null,G__36040_36057,G__36041_36058));
{
var G__36059 = seq__36034_36049;
var G__36060 = chunk__36035_36050;
var G__36061 = count__36036_36051;
var G__36062 = (i__36037_36052 + (1));
seq__36034_36049 = G__36059;
chunk__36035_36050 = G__36060;
count__36036_36051 = G__36061;
i__36037_36052 = G__36062;
continue;
}
} else
{var temp__4126__auto___36063 = cljs.core.seq(seq__36034_36049);if(temp__4126__auto___36063)
{var seq__36034_36064__$1 = temp__4126__auto___36063;if(cljs.core.chunked_seq_QMARK_(seq__36034_36064__$1))
{var c__20792__auto___36065 = cljs.core.chunk_first(seq__36034_36064__$1);{
var G__36066 = cljs.core.chunk_rest(seq__36034_36064__$1);
var G__36067 = c__20792__auto___36065;
var G__36068 = cljs.core.count(c__20792__auto___36065);
var G__36069 = (0);
seq__36034_36049 = G__36066;
chunk__36035_36050 = G__36067;
count__36036_36051 = G__36068;
i__36037_36052 = G__36069;
continue;
}
} else
{var vec__36043_36070 = cljs.core.first(seq__36034_36064__$1);var k_36071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36043_36070,(0),null);var v_36072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36043_36070,(1),null);var m36032_36073 = (function (){var G__36044 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36044) : cljs.core.deref.call(null,G__36044));
})();var G__36045_36074 = m_atom__2344__auto__;var G__36046_36075 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m36032_36073,(function (){var G__36047 = k_36071;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36047) : f.call(null,G__36047));
})(),v_36072);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36045_36074,G__36046_36075) : cljs.core.reset_BANG_.call(null,G__36045_36074,G__36046_36075));
{
var G__36076 = cljs.core.next(seq__36034_36064__$1);
var G__36077 = null;
var G__36078 = (0);
var G__36079 = (0);
seq__36034_36049 = G__36076;
chunk__36035_36050 = G__36077;
count__36036_36051 = G__36078;
i__36037_36052 = G__36079;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__36048 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36048) : cljs.core.deref.call(null,G__36048));
})());
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__2344__auto__ = (function (){var G__36096 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36096) : cljs.core.atom.call(null,G__36096));
})();var seq__36097_36110 = cljs.core.seq(ks);var chunk__36098_36111 = null;var count__36099_36112 = (0);var i__36100_36113 = (0);while(true){
if((i__36100_36113 < count__36099_36112))
{var k_36114 = chunk__36098_36111.cljs$core$IIndexed$_nth$arity$2(null,i__36100_36113);var m36095_36115 = (function (){var G__36101 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36101) : cljs.core.deref.call(null,G__36101));
})();var G__36102_36116 = m_atom__2344__auto__;var G__36103_36117 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m36095_36115,k_36114,(function (){var G__36104 = k_36114;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36104) : f.call(null,G__36104));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36102_36116,G__36103_36117) : cljs.core.reset_BANG_.call(null,G__36102_36116,G__36103_36117));
{
var G__36118 = seq__36097_36110;
var G__36119 = chunk__36098_36111;
var G__36120 = count__36099_36112;
var G__36121 = (i__36100_36113 + (1));
seq__36097_36110 = G__36118;
chunk__36098_36111 = G__36119;
count__36099_36112 = G__36120;
i__36100_36113 = G__36121;
continue;
}
} else
{var temp__4126__auto___36122 = cljs.core.seq(seq__36097_36110);if(temp__4126__auto___36122)
{var seq__36097_36123__$1 = temp__4126__auto___36122;if(cljs.core.chunked_seq_QMARK_(seq__36097_36123__$1))
{var c__20792__auto___36124 = cljs.core.chunk_first(seq__36097_36123__$1);{
var G__36125 = cljs.core.chunk_rest(seq__36097_36123__$1);
var G__36126 = c__20792__auto___36124;
var G__36127 = cljs.core.count(c__20792__auto___36124);
var G__36128 = (0);
seq__36097_36110 = G__36125;
chunk__36098_36111 = G__36126;
count__36099_36112 = G__36127;
i__36100_36113 = G__36128;
continue;
}
} else
{var k_36129 = cljs.core.first(seq__36097_36123__$1);var m36095_36130 = (function (){var G__36105 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36105) : cljs.core.deref.call(null,G__36105));
})();var G__36106_36131 = m_atom__2344__auto__;var G__36107_36132 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m36095_36130,k_36129,(function (){var G__36108 = k_36129;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36108) : f.call(null,G__36108));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36106_36131,G__36107_36132) : cljs.core.reset_BANG_.call(null,G__36106_36131,G__36107_36132));
{
var G__36133 = cljs.core.next(seq__36097_36123__$1);
var G__36134 = null;
var G__36135 = (0);
var G__36136 = (0);
seq__36097_36110 = G__36133;
chunk__36098_36111 = G__36134;
count__36099_36112 = G__36135;
i__36100_36113 = G__36136;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__36109 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36109) : cljs.core.deref.call(null,G__36109));
})());
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__2344__auto__ = (function (){var G__36153 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36153) : cljs.core.atom.call(null,G__36153));
})();var seq__36154_36167 = cljs.core.seq(vs);var chunk__36155_36168 = null;var count__36156_36169 = (0);var i__36157_36170 = (0);while(true){
if((i__36157_36170 < count__36156_36169))
{var v_36171 = chunk__36155_36168.cljs$core$IIndexed$_nth$arity$2(null,i__36157_36170);var m36152_36172 = (function (){var G__36158 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36158) : cljs.core.deref.call(null,G__36158));
})();var G__36159_36173 = m_atom__2344__auto__;var G__36160_36174 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m36152_36172,(function (){var G__36161 = v_36171;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36161) : f.call(null,G__36161));
})(),v_36171);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36159_36173,G__36160_36174) : cljs.core.reset_BANG_.call(null,G__36159_36173,G__36160_36174));
{
var G__36175 = seq__36154_36167;
var G__36176 = chunk__36155_36168;
var G__36177 = count__36156_36169;
var G__36178 = (i__36157_36170 + (1));
seq__36154_36167 = G__36175;
chunk__36155_36168 = G__36176;
count__36156_36169 = G__36177;
i__36157_36170 = G__36178;
continue;
}
} else
{var temp__4126__auto___36179 = cljs.core.seq(seq__36154_36167);if(temp__4126__auto___36179)
{var seq__36154_36180__$1 = temp__4126__auto___36179;if(cljs.core.chunked_seq_QMARK_(seq__36154_36180__$1))
{var c__20792__auto___36181 = cljs.core.chunk_first(seq__36154_36180__$1);{
var G__36182 = cljs.core.chunk_rest(seq__36154_36180__$1);
var G__36183 = c__20792__auto___36181;
var G__36184 = cljs.core.count(c__20792__auto___36181);
var G__36185 = (0);
seq__36154_36167 = G__36182;
chunk__36155_36168 = G__36183;
count__36156_36169 = G__36184;
i__36157_36170 = G__36185;
continue;
}
} else
{var v_36186 = cljs.core.first(seq__36154_36180__$1);var m36152_36187 = (function (){var G__36162 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36162) : cljs.core.deref.call(null,G__36162));
})();var G__36163_36188 = m_atom__2344__auto__;var G__36164_36189 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m36152_36187,(function (){var G__36165 = v_36186;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36165) : f.call(null,G__36165));
})(),v_36186);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36163_36188,G__36164_36189) : cljs.core.reset_BANG_.call(null,G__36163_36188,G__36164_36189));
{
var G__36190 = cljs.core.next(seq__36154_36180__$1);
var G__36191 = null;
var G__36192 = (0);
var G__36193 = (0);
seq__36154_36167 = G__36190;
chunk__36155_36168 = G__36191;
count__36156_36169 = G__36192;
i__36157_36170 = G__36193;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__36166 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36166) : cljs.core.deref.call(null,G__36166));
})());
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__36194){var vec__36202 = p__36194;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36202,(0),null);var ks = cljs.core.nthnext(vec__36202,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__19335__auto__ = ks;if(and__19335__auto__)
{return dissoc_in((function (){var G__36204 = k;return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(G__36204) : m.call(null,G__36204));
})(),ks);
} else
{return and__19335__auto__;
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
{var m_atom__2344__auto__ = (function (){var G__36223 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36223) : cljs.core.atom.call(null,G__36223));
})();var seq__36224_36237 = cljs.core.seq(x);var chunk__36225_36238 = null;var count__36226_36239 = (0);var i__36227_36240 = (0);while(true){
if((i__36227_36240 < count__36226_36239))
{var vec__36228_36241 = chunk__36225_36238.cljs$core$IIndexed$_nth$arity$2(null,i__36227_36240);var k_36242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36228_36241,(0),null);var v_36243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36228_36241,(1),null);var m36222_36244 = (function (){var G__36229 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36229) : cljs.core.deref.call(null,G__36229));
})();var G__36230_36245 = m_atom__2344__auto__;var G__36231_36246 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m36222_36244,((typeof k_36242 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_36242):k_36242),keywordize_map(v_36243));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36230_36245,G__36231_36246) : cljs.core.reset_BANG_.call(null,G__36230_36245,G__36231_36246));
{
var G__36247 = seq__36224_36237;
var G__36248 = chunk__36225_36238;
var G__36249 = count__36226_36239;
var G__36250 = (i__36227_36240 + (1));
seq__36224_36237 = G__36247;
chunk__36225_36238 = G__36248;
count__36226_36239 = G__36249;
i__36227_36240 = G__36250;
continue;
}
} else
{var temp__4126__auto___36251 = cljs.core.seq(seq__36224_36237);if(temp__4126__auto___36251)
{var seq__36224_36252__$1 = temp__4126__auto___36251;if(cljs.core.chunked_seq_QMARK_(seq__36224_36252__$1))
{var c__20792__auto___36253 = cljs.core.chunk_first(seq__36224_36252__$1);{
var G__36254 = cljs.core.chunk_rest(seq__36224_36252__$1);
var G__36255 = c__20792__auto___36253;
var G__36256 = cljs.core.count(c__20792__auto___36253);
var G__36257 = (0);
seq__36224_36237 = G__36254;
chunk__36225_36238 = G__36255;
count__36226_36239 = G__36256;
i__36227_36240 = G__36257;
continue;
}
} else
{var vec__36232_36258 = cljs.core.first(seq__36224_36252__$1);var k_36259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36232_36258,(0),null);var v_36260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36232_36258,(1),null);var m36222_36261 = (function (){var G__36233 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36233) : cljs.core.deref.call(null,G__36233));
})();var G__36234_36262 = m_atom__2344__auto__;var G__36235_36263 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m36222_36261,((typeof k_36259 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_36259):k_36259),keywordize_map(v_36260));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36234_36262,G__36235_36263) : cljs.core.reset_BANG_.call(null,G__36234_36262,G__36235_36263));
{
var G__36264 = cljs.core.next(seq__36224_36252__$1);
var G__36265 = null;
var G__36266 = (0);
var G__36267 = (0);
seq__36224_36237 = G__36264;
chunk__36225_36238 = G__36265;
count__36226_36239 = G__36266;
i__36227_36240 = G__36267;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__36236 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36236) : cljs.core.deref.call(null,G__36236));
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
{var G__36272 = false;var G__36273 = "Key %s not found in %s";var G__36274 = k;var G__36275 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.key,m);return (plumbing.fnk.schema.assert_iae.cljs$core$IFn$_invoke$arity$4 ? plumbing.fnk.schema.assert_iae.cljs$core$IFn$_invoke$arity$4(G__36272,G__36273,G__36274,G__36275) : plumbing.fnk.schema.assert_iae.call(null,G__36272,G__36273,G__36274,G__36275));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq(ks))
{{
var G__36276 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__36277 = cljs.core.next(ks);
m = G__36276;
ks = G__36277;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__19357__auto__ = m;if(cljs.core.truth_(or__19357__auto__))
{return or__19357__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__20735__auto__ = (function iter__36288(s__36289){return (new cljs.core.LazySeq(null,(function (){var s__36289__$1 = s__36289;while(true){
var temp__4126__auto__ = cljs.core.seq(s__36289__$1);if(temp__4126__auto__)
{var s__36289__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__36289__$2))
{var c__20733__auto__ = cljs.core.chunk_first(s__36289__$2);var size__20734__auto__ = cljs.core.count(c__20733__auto__);var b__36291 = cljs.core.chunk_buffer(size__20734__auto__);if((function (){var i__36290 = (0);while(true){
if((i__36290 < size__20734__auto__))
{var vec__36296 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20733__auto__,i__36290);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36296,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36296,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append(b__36291,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__36298 = (i__36290 + (1));
i__36290 = G__36298;
continue;
}
} else
{{
var G__36299 = (i__36290 + (1));
i__36290 = G__36299;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__36291),iter__36288(cljs.core.chunk_rest(s__36289__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__36291),null);
}
} else
{var vec__36297 = cljs.core.first(s__36289__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36297,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36297,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__36288(cljs.core.rest(s__36289__$2)));
} else
{{
var G__36300 = cljs.core.rest(s__36289__$2);
s__36289__$1 = G__36300;
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
});return iter__20735__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__36301){
var m = cljs.core.first(arglist__36301);
var kvs = cljs.core.rest(arglist__36301);
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
update_in_when.cljs$lang$applyTo = (function (arglist__36302){
var m = cljs.core.first(arglist__36302);
arglist__36302 = cljs.core.next(arglist__36302);
var key_seq = cljs.core.first(arglist__36302);
arglist__36302 = cljs.core.next(arglist__36302);
var f = cljs.core.first(arglist__36302);
var args = cljs.core.rest(arglist__36302);
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
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){var k = (function (){var G__36305 = x;return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__36305) : key_fn.call(null,G__36305));
})();return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(function (){var G__36306 = x;return (map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(G__36306) : map_fn.call(null,G__36306));
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
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){if(cljs.core.truth_((function (){var G__36310 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36310) : f.call(null,G__36310));
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
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = (function (){var G__36326 = cljs.core.PersistentHashSet.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36326) : cljs.core.atom.call(null,G__36326));
})();var iter__20735__auto__ = ((function (s){
return (function iter__36327(s__36328){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__36328__$1 = s__36328;while(true){
var temp__4126__auto__ = cljs.core.seq(s__36328__$1);if(temp__4126__auto__)
{var s__36328__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__36328__$2))
{var c__20733__auto__ = cljs.core.chunk_first(s__36328__$2);var size__20734__auto__ = cljs.core.count(c__20733__auto__);var b__36330 = cljs.core.chunk_buffer(size__20734__auto__);if((function (){var i__36329 = (0);while(true){
if((i__36329 < size__20734__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20733__auto__,i__36329);var id = (function (){var G__36337 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36337) : f.call(null,G__36337));
})();if(!(cljs.core.contains_QMARK_((function (){var G__36338 = s;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36338) : cljs.core.deref.call(null,G__36338));
})(),id)))
{cljs.core.chunk_append(b__36330,(function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);
return x;
})());
{
var G__36341 = (i__36329 + (1));
i__36329 = G__36341;
continue;
}
} else
{{
var G__36342 = (i__36329 + (1));
i__36329 = G__36342;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__36330),iter__36327(cljs.core.chunk_rest(s__36328__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__36330),null);
}
} else
{var x = cljs.core.first(s__36328__$2);var id = (function (){var G__36339 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36339) : f.call(null,G__36339));
})();if(!(cljs.core.contains_QMARK_((function (){var G__36340 = s;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36340) : cljs.core.deref.call(null,G__36340));
})(),id)))
{return cljs.core.cons((function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);
return x;
})(),iter__36327(cljs.core.rest(s__36328__$2)));
} else
{{
var G__36343 = cljs.core.rest(s__36328__$2);
s__36328__$1 = G__36343;
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
;return iter__20735__auto__(xs);
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
interleave_all.cljs$lang$applyTo = (function (arglist__36346){
var colls = cljs.core.seq(arglist__36346);
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
var G__36351__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__36352 = conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__36353 = cljs.core.first(xs);
var G__36354 = cljs.core.next(xs);
coll = G__36352;
x = G__36353;
xs = G__36354;
continue;
}
} else
{return conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__36351 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__36351__delegate.call(this,coll,x,xs);};
G__36351.cljs$lang$maxFixedArity = 2;
G__36351.cljs$lang$applyTo = (function (arglist__36355){
var coll = cljs.core.first(arglist__36355);
arglist__36355 = cljs.core.next(arglist__36355);
var x = cljs.core.first(arglist__36355);
var xs = cljs.core.rest(arglist__36355);
return G__36351__delegate(coll,x,xs);
});
G__36351.cljs$core$IFn$_invoke$arity$variadic = G__36351__delegate;
return G__36351;
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
var old_val = (function (){var G__36361 = a;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36361) : cljs.core.deref.call(null,G__36361));
})();var new_val = (function (){var G__36362 = old_val;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36362) : f.call(null,G__36362));
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
var G__36363__delegate = function (a,f,args){return swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__36356_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__36356_SHARP_,args);
}));
};
var G__36363 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__36363__delegate.call(this,a,f,args);};
G__36363.cljs$lang$maxFixedArity = 2;
G__36363.cljs$lang$applyTo = (function (arglist__36364){
var a = cljs.core.first(arglist__36364);
arglist__36364 = cljs.core.next(arglist__36364);
var f = cljs.core.first(arglist__36364);
var args = cljs.core.rest(arglist__36364);
return G__36363__delegate(a,f,args);
});
G__36363.cljs$core$IFn$_invoke$arity$variadic = G__36363__delegate;
return G__36363;
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
var G__36365__delegate = function (f,arg,args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
};
var G__36365 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__36365__delegate.call(this,f,arg,args);};
G__36365.cljs$lang$maxFixedArity = 2;
G__36365.cljs$lang$applyTo = (function (arglist__36366){
var f = cljs.core.first(arglist__36366);
arglist__36366 = cljs.core.next(arglist__36366);
var arg = cljs.core.first(arglist__36366);
var args = cljs.core.rest(arglist__36366);
return G__36365__delegate(f,arg,args);
});
G__36365.cljs$core$IFn$_invoke$arity$variadic = G__36365__delegate;
return G__36365;
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