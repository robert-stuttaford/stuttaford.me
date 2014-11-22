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
var update__3 = (function (m,k,f){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__44749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44749) : f.call(null,G__44749));
})());
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__44750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__44751 = x1;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44750,G__44751) : f.call(null,G__44750,G__44751));
})());
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__44752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__44753 = x1;var G__44754 = x2;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__44752,G__44753,G__44754) : f.call(null,G__44752,G__44753,G__44754));
})());
});
var update__6 = (function() { 
var G__44755__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
};
var G__44755 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__44755__delegate.call(this,m,k,f,x1,x2,xs);};
G__44755.cljs$lang$maxFixedArity = 5;
G__44755.cljs$lang$applyTo = (function (arglist__44756){
var m = cljs.core.first(arglist__44756);
arglist__44756 = cljs.core.next(arglist__44756);
var k = cljs.core.first(arglist__44756);
arglist__44756 = cljs.core.next(arglist__44756);
var f = cljs.core.first(arglist__44756);
arglist__44756 = cljs.core.next(arglist__44756);
var x1 = cljs.core.first(arglist__44756);
arglist__44756 = cljs.core.next(arglist__44756);
var x2 = cljs.core.first(arglist__44756);
var xs = cljs.core.rest(arglist__44756);
return G__44755__delegate(m,k,f,x1,x2,xs);
});
G__44755.cljs$core$IFn$_invoke$arity$variadic = G__44755__delegate;
return G__44755;
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
{return cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__44776 = v;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44776) : f.call(null,G__44776));
})());
}),cljs.core.sorted_map(),m);
} else
{if(cljs.core.map_QMARK_(m))
{return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__44777 = v;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44777) : f.call(null,G__44777));
})());
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__2344__auto__ = (function (){var G__44779 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__44779) : cljs.core.atom.call(null,G__44779));
})();var seq__44780_44795 = cljs.core.seq(m);var chunk__44781_44796 = null;var count__44782_44797 = (0);var i__44783_44798 = (0);while(true){
if((i__44783_44798 < count__44782_44797))
{var vec__44784_44799 = chunk__44781_44796.cljs$core$IIndexed$_nth$arity$2(null,i__44783_44798);var k_44800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44784_44799,(0),null);var v_44801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44784_44799,(1),null);var m44778_44802 = (function (){var G__44785 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__44785) : cljs.core.deref.call(null,G__44785));
})();var G__44786_44803 = m_atom__2344__auto__;var G__44787_44804 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m44778_44802,k_44800,(function (){var G__44788 = v_44801;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44788) : f.call(null,G__44788));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__44786_44803,G__44787_44804) : cljs.core.reset_BANG_.call(null,G__44786_44803,G__44787_44804));
{
var G__44805 = seq__44780_44795;
var G__44806 = chunk__44781_44796;
var G__44807 = count__44782_44797;
var G__44808 = (i__44783_44798 + (1));
seq__44780_44795 = G__44805;
chunk__44781_44796 = G__44806;
count__44782_44797 = G__44807;
i__44783_44798 = G__44808;
continue;
}
} else
{var temp__4126__auto___44809 = cljs.core.seq(seq__44780_44795);if(temp__4126__auto___44809)
{var seq__44780_44810__$1 = temp__4126__auto___44809;if(cljs.core.chunked_seq_QMARK_(seq__44780_44810__$1))
{var c__20965__auto___44811 = cljs.core.chunk_first(seq__44780_44810__$1);{
var G__44812 = cljs.core.chunk_rest(seq__44780_44810__$1);
var G__44813 = c__20965__auto___44811;
var G__44814 = cljs.core.count(c__20965__auto___44811);
var G__44815 = (0);
seq__44780_44795 = G__44812;
chunk__44781_44796 = G__44813;
count__44782_44797 = G__44814;
i__44783_44798 = G__44815;
continue;
}
} else
{var vec__44789_44816 = cljs.core.first(seq__44780_44810__$1);var k_44817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44789_44816,(0),null);var v_44818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44789_44816,(1),null);var m44778_44819 = (function (){var G__44790 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__44790) : cljs.core.deref.call(null,G__44790));
})();var G__44791_44820 = m_atom__2344__auto__;var G__44792_44821 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m44778_44819,k_44817,(function (){var G__44793 = v_44818;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44793) : f.call(null,G__44793));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__44791_44820,G__44792_44821) : cljs.core.reset_BANG_.call(null,G__44791_44820,G__44792_44821));
{
var G__44822 = cljs.core.next(seq__44780_44810__$1);
var G__44823 = null;
var G__44824 = (0);
var G__44825 = (0);
seq__44780_44795 = G__44822;
chunk__44781_44796 = G__44823;
count__44782_44797 = G__44824;
i__44783_44798 = G__44825;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__44794 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__44794) : cljs.core.deref.call(null,G__44794));
})());

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_(m))
{return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(function (){var G__44844 = k;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44844) : f.call(null,G__44844));
})(),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__2344__auto__ = (function (){var G__44846 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__44846) : cljs.core.atom.call(null,G__44846));
})();var seq__44847_44862 = cljs.core.seq(m);var chunk__44848_44863 = null;var count__44849_44864 = (0);var i__44850_44865 = (0);while(true){
if((i__44850_44865 < count__44849_44864))
{var vec__44851_44866 = chunk__44848_44863.cljs$core$IIndexed$_nth$arity$2(null,i__44850_44865);var k_44867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44851_44866,(0),null);var v_44868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44851_44866,(1),null);var m44845_44869 = (function (){var G__44852 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__44852) : cljs.core.deref.call(null,G__44852));
})();var G__44853_44870 = m_atom__2344__auto__;var G__44854_44871 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m44845_44869,(function (){var G__44855 = k_44867;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44855) : f.call(null,G__44855));
})(),v_44868);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__44853_44870,G__44854_44871) : cljs.core.reset_BANG_.call(null,G__44853_44870,G__44854_44871));
{
var G__44872 = seq__44847_44862;
var G__44873 = chunk__44848_44863;
var G__44874 = count__44849_44864;
var G__44875 = (i__44850_44865 + (1));
seq__44847_44862 = G__44872;
chunk__44848_44863 = G__44873;
count__44849_44864 = G__44874;
i__44850_44865 = G__44875;
continue;
}
} else
{var temp__4126__auto___44876 = cljs.core.seq(seq__44847_44862);if(temp__4126__auto___44876)
{var seq__44847_44877__$1 = temp__4126__auto___44876;if(cljs.core.chunked_seq_QMARK_(seq__44847_44877__$1))
{var c__20965__auto___44878 = cljs.core.chunk_first(seq__44847_44877__$1);{
var G__44879 = cljs.core.chunk_rest(seq__44847_44877__$1);
var G__44880 = c__20965__auto___44878;
var G__44881 = cljs.core.count(c__20965__auto___44878);
var G__44882 = (0);
seq__44847_44862 = G__44879;
chunk__44848_44863 = G__44880;
count__44849_44864 = G__44881;
i__44850_44865 = G__44882;
continue;
}
} else
{var vec__44856_44883 = cljs.core.first(seq__44847_44877__$1);var k_44884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44856_44883,(0),null);var v_44885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44856_44883,(1),null);var m44845_44886 = (function (){var G__44857 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__44857) : cljs.core.deref.call(null,G__44857));
})();var G__44858_44887 = m_atom__2344__auto__;var G__44859_44888 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m44845_44886,(function (){var G__44860 = k_44884;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44860) : f.call(null,G__44860));
})(),v_44885);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__44858_44887,G__44859_44888) : cljs.core.reset_BANG_.call(null,G__44858_44887,G__44859_44888));
{
var G__44889 = cljs.core.next(seq__44847_44877__$1);
var G__44890 = null;
var G__44891 = (0);
var G__44892 = (0);
seq__44847_44862 = G__44889;
chunk__44848_44863 = G__44890;
count__44849_44864 = G__44891;
i__44850_44865 = G__44892;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__44861 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__44861) : cljs.core.deref.call(null,G__44861));
})());
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__2344__auto__ = (function (){var G__44909 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__44909) : cljs.core.atom.call(null,G__44909));
})();var seq__44910_44923 = cljs.core.seq(ks);var chunk__44911_44924 = null;var count__44912_44925 = (0);var i__44913_44926 = (0);while(true){
if((i__44913_44926 < count__44912_44925))
{var k_44927 = chunk__44911_44924.cljs$core$IIndexed$_nth$arity$2(null,i__44913_44926);var m44908_44928 = (function (){var G__44914 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__44914) : cljs.core.deref.call(null,G__44914));
})();var G__44915_44929 = m_atom__2344__auto__;var G__44916_44930 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m44908_44928,k_44927,(function (){var G__44917 = k_44927;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44917) : f.call(null,G__44917));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__44915_44929,G__44916_44930) : cljs.core.reset_BANG_.call(null,G__44915_44929,G__44916_44930));
{
var G__44931 = seq__44910_44923;
var G__44932 = chunk__44911_44924;
var G__44933 = count__44912_44925;
var G__44934 = (i__44913_44926 + (1));
seq__44910_44923 = G__44931;
chunk__44911_44924 = G__44932;
count__44912_44925 = G__44933;
i__44913_44926 = G__44934;
continue;
}
} else
{var temp__4126__auto___44935 = cljs.core.seq(seq__44910_44923);if(temp__4126__auto___44935)
{var seq__44910_44936__$1 = temp__4126__auto___44935;if(cljs.core.chunked_seq_QMARK_(seq__44910_44936__$1))
{var c__20965__auto___44937 = cljs.core.chunk_first(seq__44910_44936__$1);{
var G__44938 = cljs.core.chunk_rest(seq__44910_44936__$1);
var G__44939 = c__20965__auto___44937;
var G__44940 = cljs.core.count(c__20965__auto___44937);
var G__44941 = (0);
seq__44910_44923 = G__44938;
chunk__44911_44924 = G__44939;
count__44912_44925 = G__44940;
i__44913_44926 = G__44941;
continue;
}
} else
{var k_44942 = cljs.core.first(seq__44910_44936__$1);var m44908_44943 = (function (){var G__44918 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__44918) : cljs.core.deref.call(null,G__44918));
})();var G__44919_44944 = m_atom__2344__auto__;var G__44920_44945 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m44908_44943,k_44942,(function (){var G__44921 = k_44942;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44921) : f.call(null,G__44921));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__44919_44944,G__44920_44945) : cljs.core.reset_BANG_.call(null,G__44919_44944,G__44920_44945));
{
var G__44946 = cljs.core.next(seq__44910_44936__$1);
var G__44947 = null;
var G__44948 = (0);
var G__44949 = (0);
seq__44910_44923 = G__44946;
chunk__44911_44924 = G__44947;
count__44912_44925 = G__44948;
i__44913_44926 = G__44949;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__44922 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__44922) : cljs.core.deref.call(null,G__44922));
})());
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__2344__auto__ = (function (){var G__44966 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__44966) : cljs.core.atom.call(null,G__44966));
})();var seq__44967_44980 = cljs.core.seq(vs);var chunk__44968_44981 = null;var count__44969_44982 = (0);var i__44970_44983 = (0);while(true){
if((i__44970_44983 < count__44969_44982))
{var v_44984 = chunk__44968_44981.cljs$core$IIndexed$_nth$arity$2(null,i__44970_44983);var m44965_44985 = (function (){var G__44971 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__44971) : cljs.core.deref.call(null,G__44971));
})();var G__44972_44986 = m_atom__2344__auto__;var G__44973_44987 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m44965_44985,(function (){var G__44974 = v_44984;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44974) : f.call(null,G__44974));
})(),v_44984);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__44972_44986,G__44973_44987) : cljs.core.reset_BANG_.call(null,G__44972_44986,G__44973_44987));
{
var G__44988 = seq__44967_44980;
var G__44989 = chunk__44968_44981;
var G__44990 = count__44969_44982;
var G__44991 = (i__44970_44983 + (1));
seq__44967_44980 = G__44988;
chunk__44968_44981 = G__44989;
count__44969_44982 = G__44990;
i__44970_44983 = G__44991;
continue;
}
} else
{var temp__4126__auto___44992 = cljs.core.seq(seq__44967_44980);if(temp__4126__auto___44992)
{var seq__44967_44993__$1 = temp__4126__auto___44992;if(cljs.core.chunked_seq_QMARK_(seq__44967_44993__$1))
{var c__20965__auto___44994 = cljs.core.chunk_first(seq__44967_44993__$1);{
var G__44995 = cljs.core.chunk_rest(seq__44967_44993__$1);
var G__44996 = c__20965__auto___44994;
var G__44997 = cljs.core.count(c__20965__auto___44994);
var G__44998 = (0);
seq__44967_44980 = G__44995;
chunk__44968_44981 = G__44996;
count__44969_44982 = G__44997;
i__44970_44983 = G__44998;
continue;
}
} else
{var v_44999 = cljs.core.first(seq__44967_44993__$1);var m44965_45000 = (function (){var G__44975 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__44975) : cljs.core.deref.call(null,G__44975));
})();var G__44976_45001 = m_atom__2344__auto__;var G__44977_45002 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m44965_45000,(function (){var G__44978 = v_44999;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44978) : f.call(null,G__44978));
})(),v_44999);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__44976_45001,G__44977_45002) : cljs.core.reset_BANG_.call(null,G__44976_45001,G__44977_45002));
{
var G__45003 = cljs.core.next(seq__44967_44993__$1);
var G__45004 = null;
var G__45005 = (0);
var G__45006 = (0);
seq__44967_44980 = G__45003;
chunk__44968_44981 = G__45004;
count__44969_44982 = G__45005;
i__44970_44983 = G__45006;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__44979 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__44979) : cljs.core.deref.call(null,G__44979));
})());
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__45007){var vec__45015 = p__45007;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45015,(0),null);var ks = cljs.core.nthnext(vec__45015,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__19670__auto__ = ks;if(and__19670__auto__)
{return dissoc_in((function (){var G__45017 = k;return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(G__45017) : m.call(null,G__45017));
})(),ks);
} else
{return and__19670__auto__;
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
{var m_atom__2344__auto__ = (function (){var G__45036 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__45036) : cljs.core.atom.call(null,G__45036));
})();var seq__45037_45050 = cljs.core.seq(x);var chunk__45038_45051 = null;var count__45039_45052 = (0);var i__45040_45053 = (0);while(true){
if((i__45040_45053 < count__45039_45052))
{var vec__45041_45054 = chunk__45038_45051.cljs$core$IIndexed$_nth$arity$2(null,i__45040_45053);var k_45055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45041_45054,(0),null);var v_45056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45041_45054,(1),null);var m45035_45057 = (function (){var G__45042 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__45042) : cljs.core.deref.call(null,G__45042));
})();var G__45043_45058 = m_atom__2344__auto__;var G__45044_45059 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m45035_45057,((typeof k_45055 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_45055):k_45055),keywordize_map(v_45056));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__45043_45058,G__45044_45059) : cljs.core.reset_BANG_.call(null,G__45043_45058,G__45044_45059));
{
var G__45060 = seq__45037_45050;
var G__45061 = chunk__45038_45051;
var G__45062 = count__45039_45052;
var G__45063 = (i__45040_45053 + (1));
seq__45037_45050 = G__45060;
chunk__45038_45051 = G__45061;
count__45039_45052 = G__45062;
i__45040_45053 = G__45063;
continue;
}
} else
{var temp__4126__auto___45064 = cljs.core.seq(seq__45037_45050);if(temp__4126__auto___45064)
{var seq__45037_45065__$1 = temp__4126__auto___45064;if(cljs.core.chunked_seq_QMARK_(seq__45037_45065__$1))
{var c__20965__auto___45066 = cljs.core.chunk_first(seq__45037_45065__$1);{
var G__45067 = cljs.core.chunk_rest(seq__45037_45065__$1);
var G__45068 = c__20965__auto___45066;
var G__45069 = cljs.core.count(c__20965__auto___45066);
var G__45070 = (0);
seq__45037_45050 = G__45067;
chunk__45038_45051 = G__45068;
count__45039_45052 = G__45069;
i__45040_45053 = G__45070;
continue;
}
} else
{var vec__45045_45071 = cljs.core.first(seq__45037_45065__$1);var k_45072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45045_45071,(0),null);var v_45073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45045_45071,(1),null);var m45035_45074 = (function (){var G__45046 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__45046) : cljs.core.deref.call(null,G__45046));
})();var G__45047_45075 = m_atom__2344__auto__;var G__45048_45076 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m45035_45074,((typeof k_45072 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_45072):k_45072),keywordize_map(v_45073));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__45047_45075,G__45048_45076) : cljs.core.reset_BANG_.call(null,G__45047_45075,G__45048_45076));
{
var G__45077 = cljs.core.next(seq__45037_45065__$1);
var G__45078 = null;
var G__45079 = (0);
var G__45080 = (0);
seq__45037_45050 = G__45077;
chunk__45038_45051 = G__45078;
count__45039_45052 = G__45079;
i__45040_45053 = G__45080;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__45049 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__45049) : cljs.core.deref.call(null,G__45049));
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
{var G__45085 = false;var G__45086 = "Key %s not found in %s";var G__45087 = k;var G__45088 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.key,m);return (plumbing.fnk.schema.assert_iae.cljs$core$IFn$_invoke$arity$4 ? plumbing.fnk.schema.assert_iae.cljs$core$IFn$_invoke$arity$4(G__45085,G__45086,G__45087,G__45088) : plumbing.fnk.schema.assert_iae.call(null,G__45085,G__45086,G__45087,G__45088));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq(ks))
{{
var G__45089 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__45090 = cljs.core.next(ks);
m = G__45089;
ks = G__45090;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__19687__auto__ = m;if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__20913__auto__ = (function iter__45101(s__45102){return (new cljs.core.LazySeq(null,(function (){var s__45102__$1 = s__45102;while(true){
var temp__4126__auto__ = cljs.core.seq(s__45102__$1);if(temp__4126__auto__)
{var s__45102__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__45102__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__45102__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__45104 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__45103 = (0);while(true){
if((i__45103 < size__20912__auto__))
{var vec__45109 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__45103);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45109,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45109,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append(b__45104,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__45111 = (i__45103 + (1));
i__45103 = G__45111;
continue;
}
} else
{{
var G__45112 = (i__45103 + (1));
i__45103 = G__45112;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__45104),iter__45101(cljs.core.chunk_rest(s__45102__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__45104),null);
}
} else
{var vec__45110 = cljs.core.first(s__45102__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45110,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45110,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__45101(cljs.core.rest(s__45102__$2)));
} else
{{
var G__45113 = cljs.core.rest(s__45102__$2);
s__45102__$1 = G__45113;
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
});return iter__20913__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__45114){
var m = cljs.core.first(arglist__45114);
var kvs = cljs.core.rest(arglist__45114);
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
update_in_when.cljs$lang$applyTo = (function (arglist__45115){
var m = cljs.core.first(arglist__45115);
arglist__45115 = cljs.core.next(arglist__45115);
var key_seq = cljs.core.first(arglist__45115);
arglist__45115 = cljs.core.next(arglist__45115);
var f = cljs.core.first(arglist__45115);
var args = cljs.core.rest(arglist__45115);
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
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){var k = (function (){var G__45118 = x;return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__45118) : key_fn.call(null,G__45118));
})();return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(function (){var G__45119 = x;return (map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(G__45119) : map_fn.call(null,G__45119));
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
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){if(cljs.core.truth_((function (){var G__45123 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__45123) : f.call(null,G__45123));
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
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = (function (){var G__45139 = cljs.core.PersistentHashSet.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__45139) : cljs.core.atom.call(null,G__45139));
})();var iter__20913__auto__ = ((function (s){
return (function iter__45140(s__45141){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__45141__$1 = s__45141;while(true){
var temp__4126__auto__ = cljs.core.seq(s__45141__$1);if(temp__4126__auto__)
{var s__45141__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__45141__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__45141__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__45143 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__45142 = (0);while(true){
if((i__45142 < size__20912__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__45142);var id = (function (){var G__45150 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__45150) : f.call(null,G__45150));
})();if(!(cljs.core.contains_QMARK_((function (){var G__45151 = s;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__45151) : cljs.core.deref.call(null,G__45151));
})(),id)))
{cljs.core.chunk_append(b__45143,(function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);
return x;
})());
{
var G__45154 = (i__45142 + (1));
i__45142 = G__45154;
continue;
}
} else
{{
var G__45155 = (i__45142 + (1));
i__45142 = G__45155;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__45143),iter__45140(cljs.core.chunk_rest(s__45141__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__45143),null);
}
} else
{var x = cljs.core.first(s__45141__$2);var id = (function (){var G__45152 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__45152) : f.call(null,G__45152));
})();if(!(cljs.core.contains_QMARK_((function (){var G__45153 = s;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__45153) : cljs.core.deref.call(null,G__45153));
})(),id)))
{return cljs.core.cons((function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);
return x;
})(),iter__45140(cljs.core.rest(s__45141__$2)));
} else
{{
var G__45156 = cljs.core.rest(s__45141__$2);
s__45141__$1 = G__45156;
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
;return iter__20913__auto__(xs);
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
interleave_all.cljs$lang$applyTo = (function (arglist__45159){
var colls = cljs.core.seq(arglist__45159);
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
var G__45164__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__45165 = conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__45166 = cljs.core.first(xs);
var G__45167 = cljs.core.next(xs);
coll = G__45165;
x = G__45166;
xs = G__45167;
continue;
}
} else
{return conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__45164 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__45164__delegate.call(this,coll,x,xs);};
G__45164.cljs$lang$maxFixedArity = 2;
G__45164.cljs$lang$applyTo = (function (arglist__45168){
var coll = cljs.core.first(arglist__45168);
arglist__45168 = cljs.core.next(arglist__45168);
var x = cljs.core.first(arglist__45168);
var xs = cljs.core.rest(arglist__45168);
return G__45164__delegate(coll,x,xs);
});
G__45164.cljs$core$IFn$_invoke$arity$variadic = G__45164__delegate;
return G__45164;
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
var old_val = (function (){var G__45174 = a;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__45174) : cljs.core.deref.call(null,G__45174));
})();var new_val = (function (){var G__45175 = old_val;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__45175) : f.call(null,G__45175));
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
var G__45176__delegate = function (a,f,args){return swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__45169_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__45169_SHARP_,args);
}));
};
var G__45176 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__45176__delegate.call(this,a,f,args);};
G__45176.cljs$lang$maxFixedArity = 2;
G__45176.cljs$lang$applyTo = (function (arglist__45177){
var a = cljs.core.first(arglist__45177);
arglist__45177 = cljs.core.next(arglist__45177);
var f = cljs.core.first(arglist__45177);
var args = cljs.core.rest(arglist__45177);
return G__45176__delegate(a,f,args);
});
G__45176.cljs$core$IFn$_invoke$arity$variadic = G__45176__delegate;
return G__45176;
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
var G__45178__delegate = function (f,arg,args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
};
var G__45178 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__45178__delegate.call(this,f,arg,args);};
G__45178.cljs$lang$maxFixedArity = 2;
G__45178.cljs$lang$applyTo = (function (arglist__45179){
var f = cljs.core.first(arglist__45179);
arglist__45179 = cljs.core.next(arglist__45179);
var arg = cljs.core.first(arglist__45179);
var args = cljs.core.rest(arglist__45179);
return G__45178__delegate(f,arg,args);
});
G__45178.cljs$core$IFn$_invoke$arity$variadic = G__45178__delegate;
return G__45178;
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