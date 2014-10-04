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
var update__3 = (function (m,k,f){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__35978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35978) : f.call(null,G__35978));
})());
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__35979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__35980 = x1;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__35979,G__35980) : f.call(null,G__35979,G__35980));
})());
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__35981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__35982 = x1;var G__35983 = x2;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__35981,G__35982,G__35983) : f.call(null,G__35981,G__35982,G__35983));
})());
});
var update__6 = (function() { 
var G__35984__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
};
var G__35984 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__35984__delegate.call(this,m,k,f,x1,x2,xs);};
G__35984.cljs$lang$maxFixedArity = 5;
G__35984.cljs$lang$applyTo = (function (arglist__35985){
var m = cljs.core.first(arglist__35985);
arglist__35985 = cljs.core.next(arglist__35985);
var k = cljs.core.first(arglist__35985);
arglist__35985 = cljs.core.next(arglist__35985);
var f = cljs.core.first(arglist__35985);
arglist__35985 = cljs.core.next(arglist__35985);
var x1 = cljs.core.first(arglist__35985);
arglist__35985 = cljs.core.next(arglist__35985);
var x2 = cljs.core.first(arglist__35985);
var xs = cljs.core.rest(arglist__35985);
return G__35984__delegate(m,k,f,x1,x2,xs);
});
G__35984.cljs$core$IFn$_invoke$arity$variadic = G__35984__delegate;
return G__35984;
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
{return cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__36005 = v;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36005) : f.call(null,G__36005));
})());
}),cljs.core.sorted_map(),m);
} else
{if(cljs.core.map_QMARK_(m))
{return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__36006 = v;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36006) : f.call(null,G__36006));
})());
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__2344__auto__ = (function (){var G__36008 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36008) : cljs.core.atom.call(null,G__36008));
})();var seq__36009_36024 = cljs.core.seq(m);var chunk__36010_36025 = null;var count__36011_36026 = (0);var i__36012_36027 = (0);while(true){
if((i__36012_36027 < count__36011_36026))
{var vec__36013_36028 = chunk__36010_36025.cljs$core$IIndexed$_nth$arity$2(null,i__36012_36027);var k_36029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36013_36028,(0),null);var v_36030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36013_36028,(1),null);var m36007_36031 = (function (){var G__36014 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36014) : cljs.core.deref.call(null,G__36014));
})();var G__36015_36032 = m_atom__2344__auto__;var G__36016_36033 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m36007_36031,k_36029,(function (){var G__36017 = v_36030;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36017) : f.call(null,G__36017));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36015_36032,G__36016_36033) : cljs.core.reset_BANG_.call(null,G__36015_36032,G__36016_36033));
{
var G__36034 = seq__36009_36024;
var G__36035 = chunk__36010_36025;
var G__36036 = count__36011_36026;
var G__36037 = (i__36012_36027 + (1));
seq__36009_36024 = G__36034;
chunk__36010_36025 = G__36035;
count__36011_36026 = G__36036;
i__36012_36027 = G__36037;
continue;
}
} else
{var temp__4126__auto___36038 = cljs.core.seq(seq__36009_36024);if(temp__4126__auto___36038)
{var seq__36009_36039__$1 = temp__4126__auto___36038;if(cljs.core.chunked_seq_QMARK_(seq__36009_36039__$1))
{var c__20699__auto___36040 = cljs.core.chunk_first(seq__36009_36039__$1);{
var G__36041 = cljs.core.chunk_rest(seq__36009_36039__$1);
var G__36042 = c__20699__auto___36040;
var G__36043 = cljs.core.count(c__20699__auto___36040);
var G__36044 = (0);
seq__36009_36024 = G__36041;
chunk__36010_36025 = G__36042;
count__36011_36026 = G__36043;
i__36012_36027 = G__36044;
continue;
}
} else
{var vec__36018_36045 = cljs.core.first(seq__36009_36039__$1);var k_36046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36018_36045,(0),null);var v_36047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36018_36045,(1),null);var m36007_36048 = (function (){var G__36019 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36019) : cljs.core.deref.call(null,G__36019));
})();var G__36020_36049 = m_atom__2344__auto__;var G__36021_36050 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m36007_36048,k_36046,(function (){var G__36022 = v_36047;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36022) : f.call(null,G__36022));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36020_36049,G__36021_36050) : cljs.core.reset_BANG_.call(null,G__36020_36049,G__36021_36050));
{
var G__36051 = cljs.core.next(seq__36009_36039__$1);
var G__36052 = null;
var G__36053 = (0);
var G__36054 = (0);
seq__36009_36024 = G__36051;
chunk__36010_36025 = G__36052;
count__36011_36026 = G__36053;
i__36012_36027 = G__36054;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__36023 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36023) : cljs.core.deref.call(null,G__36023));
})());

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_(m))
{return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(function (){var G__36073 = k;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36073) : f.call(null,G__36073));
})(),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__2344__auto__ = (function (){var G__36075 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36075) : cljs.core.atom.call(null,G__36075));
})();var seq__36076_36091 = cljs.core.seq(m);var chunk__36077_36092 = null;var count__36078_36093 = (0);var i__36079_36094 = (0);while(true){
if((i__36079_36094 < count__36078_36093))
{var vec__36080_36095 = chunk__36077_36092.cljs$core$IIndexed$_nth$arity$2(null,i__36079_36094);var k_36096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36080_36095,(0),null);var v_36097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36080_36095,(1),null);var m36074_36098 = (function (){var G__36081 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36081) : cljs.core.deref.call(null,G__36081));
})();var G__36082_36099 = m_atom__2344__auto__;var G__36083_36100 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m36074_36098,(function (){var G__36084 = k_36096;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36084) : f.call(null,G__36084));
})(),v_36097);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36082_36099,G__36083_36100) : cljs.core.reset_BANG_.call(null,G__36082_36099,G__36083_36100));
{
var G__36101 = seq__36076_36091;
var G__36102 = chunk__36077_36092;
var G__36103 = count__36078_36093;
var G__36104 = (i__36079_36094 + (1));
seq__36076_36091 = G__36101;
chunk__36077_36092 = G__36102;
count__36078_36093 = G__36103;
i__36079_36094 = G__36104;
continue;
}
} else
{var temp__4126__auto___36105 = cljs.core.seq(seq__36076_36091);if(temp__4126__auto___36105)
{var seq__36076_36106__$1 = temp__4126__auto___36105;if(cljs.core.chunked_seq_QMARK_(seq__36076_36106__$1))
{var c__20699__auto___36107 = cljs.core.chunk_first(seq__36076_36106__$1);{
var G__36108 = cljs.core.chunk_rest(seq__36076_36106__$1);
var G__36109 = c__20699__auto___36107;
var G__36110 = cljs.core.count(c__20699__auto___36107);
var G__36111 = (0);
seq__36076_36091 = G__36108;
chunk__36077_36092 = G__36109;
count__36078_36093 = G__36110;
i__36079_36094 = G__36111;
continue;
}
} else
{var vec__36085_36112 = cljs.core.first(seq__36076_36106__$1);var k_36113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36085_36112,(0),null);var v_36114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36085_36112,(1),null);var m36074_36115 = (function (){var G__36086 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36086) : cljs.core.deref.call(null,G__36086));
})();var G__36087_36116 = m_atom__2344__auto__;var G__36088_36117 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m36074_36115,(function (){var G__36089 = k_36113;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36089) : f.call(null,G__36089));
})(),v_36114);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36087_36116,G__36088_36117) : cljs.core.reset_BANG_.call(null,G__36087_36116,G__36088_36117));
{
var G__36118 = cljs.core.next(seq__36076_36106__$1);
var G__36119 = null;
var G__36120 = (0);
var G__36121 = (0);
seq__36076_36091 = G__36118;
chunk__36077_36092 = G__36119;
count__36078_36093 = G__36120;
i__36079_36094 = G__36121;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__36090 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36090) : cljs.core.deref.call(null,G__36090));
})());
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__2344__auto__ = (function (){var G__36138 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36138) : cljs.core.atom.call(null,G__36138));
})();var seq__36139_36152 = cljs.core.seq(ks);var chunk__36140_36153 = null;var count__36141_36154 = (0);var i__36142_36155 = (0);while(true){
if((i__36142_36155 < count__36141_36154))
{var k_36156 = chunk__36140_36153.cljs$core$IIndexed$_nth$arity$2(null,i__36142_36155);var m36137_36157 = (function (){var G__36143 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36143) : cljs.core.deref.call(null,G__36143));
})();var G__36144_36158 = m_atom__2344__auto__;var G__36145_36159 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m36137_36157,k_36156,(function (){var G__36146 = k_36156;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36146) : f.call(null,G__36146));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36144_36158,G__36145_36159) : cljs.core.reset_BANG_.call(null,G__36144_36158,G__36145_36159));
{
var G__36160 = seq__36139_36152;
var G__36161 = chunk__36140_36153;
var G__36162 = count__36141_36154;
var G__36163 = (i__36142_36155 + (1));
seq__36139_36152 = G__36160;
chunk__36140_36153 = G__36161;
count__36141_36154 = G__36162;
i__36142_36155 = G__36163;
continue;
}
} else
{var temp__4126__auto___36164 = cljs.core.seq(seq__36139_36152);if(temp__4126__auto___36164)
{var seq__36139_36165__$1 = temp__4126__auto___36164;if(cljs.core.chunked_seq_QMARK_(seq__36139_36165__$1))
{var c__20699__auto___36166 = cljs.core.chunk_first(seq__36139_36165__$1);{
var G__36167 = cljs.core.chunk_rest(seq__36139_36165__$1);
var G__36168 = c__20699__auto___36166;
var G__36169 = cljs.core.count(c__20699__auto___36166);
var G__36170 = (0);
seq__36139_36152 = G__36167;
chunk__36140_36153 = G__36168;
count__36141_36154 = G__36169;
i__36142_36155 = G__36170;
continue;
}
} else
{var k_36171 = cljs.core.first(seq__36139_36165__$1);var m36137_36172 = (function (){var G__36147 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36147) : cljs.core.deref.call(null,G__36147));
})();var G__36148_36173 = m_atom__2344__auto__;var G__36149_36174 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m36137_36172,k_36171,(function (){var G__36150 = k_36171;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36150) : f.call(null,G__36150));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36148_36173,G__36149_36174) : cljs.core.reset_BANG_.call(null,G__36148_36173,G__36149_36174));
{
var G__36175 = cljs.core.next(seq__36139_36165__$1);
var G__36176 = null;
var G__36177 = (0);
var G__36178 = (0);
seq__36139_36152 = G__36175;
chunk__36140_36153 = G__36176;
count__36141_36154 = G__36177;
i__36142_36155 = G__36178;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__36151 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36151) : cljs.core.deref.call(null,G__36151));
})());
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__2344__auto__ = (function (){var G__36195 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36195) : cljs.core.atom.call(null,G__36195));
})();var seq__36196_36209 = cljs.core.seq(vs);var chunk__36197_36210 = null;var count__36198_36211 = (0);var i__36199_36212 = (0);while(true){
if((i__36199_36212 < count__36198_36211))
{var v_36213 = chunk__36197_36210.cljs$core$IIndexed$_nth$arity$2(null,i__36199_36212);var m36194_36214 = (function (){var G__36200 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36200) : cljs.core.deref.call(null,G__36200));
})();var G__36201_36215 = m_atom__2344__auto__;var G__36202_36216 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m36194_36214,(function (){var G__36203 = v_36213;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36203) : f.call(null,G__36203));
})(),v_36213);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36201_36215,G__36202_36216) : cljs.core.reset_BANG_.call(null,G__36201_36215,G__36202_36216));
{
var G__36217 = seq__36196_36209;
var G__36218 = chunk__36197_36210;
var G__36219 = count__36198_36211;
var G__36220 = (i__36199_36212 + (1));
seq__36196_36209 = G__36217;
chunk__36197_36210 = G__36218;
count__36198_36211 = G__36219;
i__36199_36212 = G__36220;
continue;
}
} else
{var temp__4126__auto___36221 = cljs.core.seq(seq__36196_36209);if(temp__4126__auto___36221)
{var seq__36196_36222__$1 = temp__4126__auto___36221;if(cljs.core.chunked_seq_QMARK_(seq__36196_36222__$1))
{var c__20699__auto___36223 = cljs.core.chunk_first(seq__36196_36222__$1);{
var G__36224 = cljs.core.chunk_rest(seq__36196_36222__$1);
var G__36225 = c__20699__auto___36223;
var G__36226 = cljs.core.count(c__20699__auto___36223);
var G__36227 = (0);
seq__36196_36209 = G__36224;
chunk__36197_36210 = G__36225;
count__36198_36211 = G__36226;
i__36199_36212 = G__36227;
continue;
}
} else
{var v_36228 = cljs.core.first(seq__36196_36222__$1);var m36194_36229 = (function (){var G__36204 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36204) : cljs.core.deref.call(null,G__36204));
})();var G__36205_36230 = m_atom__2344__auto__;var G__36206_36231 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m36194_36229,(function (){var G__36207 = v_36228;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36207) : f.call(null,G__36207));
})(),v_36228);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36205_36230,G__36206_36231) : cljs.core.reset_BANG_.call(null,G__36205_36230,G__36206_36231));
{
var G__36232 = cljs.core.next(seq__36196_36222__$1);
var G__36233 = null;
var G__36234 = (0);
var G__36235 = (0);
seq__36196_36209 = G__36232;
chunk__36197_36210 = G__36233;
count__36198_36211 = G__36234;
i__36199_36212 = G__36235;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__36208 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36208) : cljs.core.deref.call(null,G__36208));
})());
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__36236){var vec__36244 = p__36236;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36244,(0),null);var ks = cljs.core.nthnext(vec__36244,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__19255__auto__ = ks;if(and__19255__auto__)
{return dissoc_in((function (){var G__36246 = k;return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(G__36246) : m.call(null,G__36246));
})(),ks);
} else
{return and__19255__auto__;
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
{var m_atom__2344__auto__ = (function (){var G__36265 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36265) : cljs.core.atom.call(null,G__36265));
})();var seq__36266_36279 = cljs.core.seq(x);var chunk__36267_36280 = null;var count__36268_36281 = (0);var i__36269_36282 = (0);while(true){
if((i__36269_36282 < count__36268_36281))
{var vec__36270_36283 = chunk__36267_36280.cljs$core$IIndexed$_nth$arity$2(null,i__36269_36282);var k_36284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36270_36283,(0),null);var v_36285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36270_36283,(1),null);var m36264_36286 = (function (){var G__36271 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36271) : cljs.core.deref.call(null,G__36271));
})();var G__36272_36287 = m_atom__2344__auto__;var G__36273_36288 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m36264_36286,((typeof k_36284 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_36284):k_36284),keywordize_map(v_36285));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36272_36287,G__36273_36288) : cljs.core.reset_BANG_.call(null,G__36272_36287,G__36273_36288));
{
var G__36289 = seq__36266_36279;
var G__36290 = chunk__36267_36280;
var G__36291 = count__36268_36281;
var G__36292 = (i__36269_36282 + (1));
seq__36266_36279 = G__36289;
chunk__36267_36280 = G__36290;
count__36268_36281 = G__36291;
i__36269_36282 = G__36292;
continue;
}
} else
{var temp__4126__auto___36293 = cljs.core.seq(seq__36266_36279);if(temp__4126__auto___36293)
{var seq__36266_36294__$1 = temp__4126__auto___36293;if(cljs.core.chunked_seq_QMARK_(seq__36266_36294__$1))
{var c__20699__auto___36295 = cljs.core.chunk_first(seq__36266_36294__$1);{
var G__36296 = cljs.core.chunk_rest(seq__36266_36294__$1);
var G__36297 = c__20699__auto___36295;
var G__36298 = cljs.core.count(c__20699__auto___36295);
var G__36299 = (0);
seq__36266_36279 = G__36296;
chunk__36267_36280 = G__36297;
count__36268_36281 = G__36298;
i__36269_36282 = G__36299;
continue;
}
} else
{var vec__36274_36300 = cljs.core.first(seq__36266_36294__$1);var k_36301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36274_36300,(0),null);var v_36302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36274_36300,(1),null);var m36264_36303 = (function (){var G__36275 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36275) : cljs.core.deref.call(null,G__36275));
})();var G__36276_36304 = m_atom__2344__auto__;var G__36277_36305 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m36264_36303,((typeof k_36301 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_36301):k_36301),keywordize_map(v_36302));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__36276_36304,G__36277_36305) : cljs.core.reset_BANG_.call(null,G__36276_36304,G__36277_36305));
{
var G__36306 = cljs.core.next(seq__36266_36294__$1);
var G__36307 = null;
var G__36308 = (0);
var G__36309 = (0);
seq__36266_36279 = G__36306;
chunk__36267_36280 = G__36307;
count__36268_36281 = G__36308;
i__36269_36282 = G__36309;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__36278 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36278) : cljs.core.deref.call(null,G__36278));
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
{var G__36314 = false;var G__36315 = "Key %s not found in %s";var G__36316 = k;var G__36317 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.key,m);return (plumbing.fnk.schema.assert_iae.cljs$core$IFn$_invoke$arity$4 ? plumbing.fnk.schema.assert_iae.cljs$core$IFn$_invoke$arity$4(G__36314,G__36315,G__36316,G__36317) : plumbing.fnk.schema.assert_iae.call(null,G__36314,G__36315,G__36316,G__36317));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq(ks))
{{
var G__36318 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__36319 = cljs.core.next(ks);
m = G__36318;
ks = G__36319;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__19267__auto__ = m;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__20662__auto__ = (function iter__36330(s__36331){return (new cljs.core.LazySeq(null,(function (){var s__36331__$1 = s__36331;while(true){
var temp__4126__auto__ = cljs.core.seq(s__36331__$1);if(temp__4126__auto__)
{var s__36331__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__36331__$2))
{var c__20660__auto__ = cljs.core.chunk_first(s__36331__$2);var size__20661__auto__ = cljs.core.count(c__20660__auto__);var b__36333 = cljs.core.chunk_buffer(size__20661__auto__);if((function (){var i__36332 = (0);while(true){
if((i__36332 < size__20661__auto__))
{var vec__36338 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20660__auto__,i__36332);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36338,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36338,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append(b__36333,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__36340 = (i__36332 + (1));
i__36332 = G__36340;
continue;
}
} else
{{
var G__36341 = (i__36332 + (1));
i__36332 = G__36341;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__36333),iter__36330(cljs.core.chunk_rest(s__36331__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__36333),null);
}
} else
{var vec__36339 = cljs.core.first(s__36331__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36339,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36339,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__36330(cljs.core.rest(s__36331__$2)));
} else
{{
var G__36342 = cljs.core.rest(s__36331__$2);
s__36331__$1 = G__36342;
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
});return iter__20662__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__36343){
var m = cljs.core.first(arglist__36343);
var kvs = cljs.core.rest(arglist__36343);
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
update_in_when.cljs$lang$applyTo = (function (arglist__36344){
var m = cljs.core.first(arglist__36344);
arglist__36344 = cljs.core.next(arglist__36344);
var key_seq = cljs.core.first(arglist__36344);
arglist__36344 = cljs.core.next(arglist__36344);
var f = cljs.core.first(arglist__36344);
var args = cljs.core.rest(arglist__36344);
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
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){var k = (function (){var G__36347 = x;return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__36347) : key_fn.call(null,G__36347));
})();return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(function (){var G__36348 = x;return (map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(G__36348) : map_fn.call(null,G__36348));
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
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){if(cljs.core.truth_((function (){var G__36352 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36352) : f.call(null,G__36352));
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
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = (function (){var G__36368 = cljs.core.PersistentHashSet.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36368) : cljs.core.atom.call(null,G__36368));
})();var iter__20662__auto__ = ((function (s){
return (function iter__36369(s__36370){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__36370__$1 = s__36370;while(true){
var temp__4126__auto__ = cljs.core.seq(s__36370__$1);if(temp__4126__auto__)
{var s__36370__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__36370__$2))
{var c__20660__auto__ = cljs.core.chunk_first(s__36370__$2);var size__20661__auto__ = cljs.core.count(c__20660__auto__);var b__36372 = cljs.core.chunk_buffer(size__20661__auto__);if((function (){var i__36371 = (0);while(true){
if((i__36371 < size__20661__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20660__auto__,i__36371);var id = (function (){var G__36379 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36379) : f.call(null,G__36379));
})();if(!(cljs.core.contains_QMARK_((function (){var G__36380 = s;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36380) : cljs.core.deref.call(null,G__36380));
})(),id)))
{cljs.core.chunk_append(b__36372,(function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);
return x;
})());
{
var G__36383 = (i__36371 + (1));
i__36371 = G__36383;
continue;
}
} else
{{
var G__36384 = (i__36371 + (1));
i__36371 = G__36384;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__36372),iter__36369(cljs.core.chunk_rest(s__36370__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__36372),null);
}
} else
{var x = cljs.core.first(s__36370__$2);var id = (function (){var G__36381 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36381) : f.call(null,G__36381));
})();if(!(cljs.core.contains_QMARK_((function (){var G__36382 = s;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36382) : cljs.core.deref.call(null,G__36382));
})(),id)))
{return cljs.core.cons((function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);
return x;
})(),iter__36369(cljs.core.rest(s__36370__$2)));
} else
{{
var G__36385 = cljs.core.rest(s__36370__$2);
s__36370__$1 = G__36385;
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
;return iter__20662__auto__(xs);
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
interleave_all.cljs$lang$applyTo = (function (arglist__36388){
var colls = cljs.core.seq(arglist__36388);
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
var G__36393__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__36394 = conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__36395 = cljs.core.first(xs);
var G__36396 = cljs.core.next(xs);
coll = G__36394;
x = G__36395;
xs = G__36396;
continue;
}
} else
{return conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__36393 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__36393__delegate.call(this,coll,x,xs);};
G__36393.cljs$lang$maxFixedArity = 2;
G__36393.cljs$lang$applyTo = (function (arglist__36397){
var coll = cljs.core.first(arglist__36397);
arglist__36397 = cljs.core.next(arglist__36397);
var x = cljs.core.first(arglist__36397);
var xs = cljs.core.rest(arglist__36397);
return G__36393__delegate(coll,x,xs);
});
G__36393.cljs$core$IFn$_invoke$arity$variadic = G__36393__delegate;
return G__36393;
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
var old_val = (function (){var G__36403 = a;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36403) : cljs.core.deref.call(null,G__36403));
})();var new_val = (function (){var G__36404 = old_val;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36404) : f.call(null,G__36404));
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
var G__36405__delegate = function (a,f,args){return swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__36398_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__36398_SHARP_,args);
}));
};
var G__36405 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__36405__delegate.call(this,a,f,args);};
G__36405.cljs$lang$maxFixedArity = 2;
G__36405.cljs$lang$applyTo = (function (arglist__36406){
var a = cljs.core.first(arglist__36406);
arglist__36406 = cljs.core.next(arglist__36406);
var f = cljs.core.first(arglist__36406);
var args = cljs.core.rest(arglist__36406);
return G__36405__delegate(a,f,args);
});
G__36405.cljs$core$IFn$_invoke$arity$variadic = G__36405__delegate;
return G__36405;
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
var G__36407__delegate = function (f,arg,args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
};
var G__36407 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__36407__delegate.call(this,f,arg,args);};
G__36407.cljs$lang$maxFixedArity = 2;
G__36407.cljs$lang$applyTo = (function (arglist__36408){
var f = cljs.core.first(arglist__36408);
arglist__36408 = cljs.core.next(arglist__36408);
var arg = cljs.core.first(arglist__36408);
var args = cljs.core.rest(arglist__36408);
return G__36407__delegate(f,arg,args);
});
G__36407.cljs$core$IFn$_invoke$arity$variadic = G__36407__delegate;
return G__36407;
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