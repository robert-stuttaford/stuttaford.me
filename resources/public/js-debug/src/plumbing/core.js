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
var update__3 = (function (m,k,f){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__46612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__46612) : f.call(null,G__46612));
})());
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__46613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__46614 = x1;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__46613,G__46614) : f.call(null,G__46613,G__46614));
})());
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__46615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__46616 = x1;var G__46617 = x2;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__46615,G__46616,G__46617) : f.call(null,G__46615,G__46616,G__46617));
})());
});
var update__6 = (function() { 
var G__46618__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
};
var G__46618 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__46618__delegate.call(this,m,k,f,x1,x2,xs);};
G__46618.cljs$lang$maxFixedArity = 5;
G__46618.cljs$lang$applyTo = (function (arglist__46619){
var m = cljs.core.first(arglist__46619);
arglist__46619 = cljs.core.next(arglist__46619);
var k = cljs.core.first(arglist__46619);
arglist__46619 = cljs.core.next(arglist__46619);
var f = cljs.core.first(arglist__46619);
arglist__46619 = cljs.core.next(arglist__46619);
var x1 = cljs.core.first(arglist__46619);
arglist__46619 = cljs.core.next(arglist__46619);
var x2 = cljs.core.first(arglist__46619);
var xs = cljs.core.rest(arglist__46619);
return G__46618__delegate(m,k,f,x1,x2,xs);
});
G__46618.cljs$core$IFn$_invoke$arity$variadic = G__46618__delegate;
return G__46618;
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
{return cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__46639 = v;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__46639) : f.call(null,G__46639));
})());
}),cljs.core.sorted_map(),m);
} else
{if(cljs.core.map_QMARK_(m))
{return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__46640 = v;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__46640) : f.call(null,G__46640));
})());
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__2344__auto__ = (function (){var G__46642 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46642) : cljs.core.atom.call(null,G__46642));
})();var seq__46643_46658 = cljs.core.seq(m);var chunk__46644_46659 = null;var count__46645_46660 = (0);var i__46646_46661 = (0);while(true){
if((i__46646_46661 < count__46645_46660))
{var vec__46647_46662 = chunk__46644_46659.cljs$core$IIndexed$_nth$arity$2(null,i__46646_46661);var k_46663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46647_46662,(0),null);var v_46664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46647_46662,(1),null);var m46641_46665 = (function (){var G__46648 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46648) : cljs.core.deref.call(null,G__46648));
})();var G__46649_46666 = m_atom__2344__auto__;var G__46650_46667 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m46641_46665,k_46663,(function (){var G__46651 = v_46664;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__46651) : f.call(null,G__46651));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46649_46666,G__46650_46667) : cljs.core.reset_BANG_.call(null,G__46649_46666,G__46650_46667));
{
var G__46668 = seq__46643_46658;
var G__46669 = chunk__46644_46659;
var G__46670 = count__46645_46660;
var G__46671 = (i__46646_46661 + (1));
seq__46643_46658 = G__46668;
chunk__46644_46659 = G__46669;
count__46645_46660 = G__46670;
i__46646_46661 = G__46671;
continue;
}
} else
{var temp__4126__auto___46672 = cljs.core.seq(seq__46643_46658);if(temp__4126__auto___46672)
{var seq__46643_46673__$1 = temp__4126__auto___46672;if(cljs.core.chunked_seq_QMARK_(seq__46643_46673__$1))
{var c__20721__auto___46674 = cljs.core.chunk_first(seq__46643_46673__$1);{
var G__46675 = cljs.core.chunk_rest(seq__46643_46673__$1);
var G__46676 = c__20721__auto___46674;
var G__46677 = cljs.core.count(c__20721__auto___46674);
var G__46678 = (0);
seq__46643_46658 = G__46675;
chunk__46644_46659 = G__46676;
count__46645_46660 = G__46677;
i__46646_46661 = G__46678;
continue;
}
} else
{var vec__46652_46679 = cljs.core.first(seq__46643_46673__$1);var k_46680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46652_46679,(0),null);var v_46681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46652_46679,(1),null);var m46641_46682 = (function (){var G__46653 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46653) : cljs.core.deref.call(null,G__46653));
})();var G__46654_46683 = m_atom__2344__auto__;var G__46655_46684 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m46641_46682,k_46680,(function (){var G__46656 = v_46681;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__46656) : f.call(null,G__46656));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46654_46683,G__46655_46684) : cljs.core.reset_BANG_.call(null,G__46654_46683,G__46655_46684));
{
var G__46685 = cljs.core.next(seq__46643_46673__$1);
var G__46686 = null;
var G__46687 = (0);
var G__46688 = (0);
seq__46643_46658 = G__46685;
chunk__46644_46659 = G__46686;
count__46645_46660 = G__46687;
i__46646_46661 = G__46688;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__46657 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46657) : cljs.core.deref.call(null,G__46657));
})());

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_(m))
{return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(function (){var G__46707 = k;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__46707) : f.call(null,G__46707));
})(),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__2344__auto__ = (function (){var G__46709 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46709) : cljs.core.atom.call(null,G__46709));
})();var seq__46710_46725 = cljs.core.seq(m);var chunk__46711_46726 = null;var count__46712_46727 = (0);var i__46713_46728 = (0);while(true){
if((i__46713_46728 < count__46712_46727))
{var vec__46714_46729 = chunk__46711_46726.cljs$core$IIndexed$_nth$arity$2(null,i__46713_46728);var k_46730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46714_46729,(0),null);var v_46731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46714_46729,(1),null);var m46708_46732 = (function (){var G__46715 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46715) : cljs.core.deref.call(null,G__46715));
})();var G__46716_46733 = m_atom__2344__auto__;var G__46717_46734 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m46708_46732,(function (){var G__46718 = k_46730;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__46718) : f.call(null,G__46718));
})(),v_46731);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46716_46733,G__46717_46734) : cljs.core.reset_BANG_.call(null,G__46716_46733,G__46717_46734));
{
var G__46735 = seq__46710_46725;
var G__46736 = chunk__46711_46726;
var G__46737 = count__46712_46727;
var G__46738 = (i__46713_46728 + (1));
seq__46710_46725 = G__46735;
chunk__46711_46726 = G__46736;
count__46712_46727 = G__46737;
i__46713_46728 = G__46738;
continue;
}
} else
{var temp__4126__auto___46739 = cljs.core.seq(seq__46710_46725);if(temp__4126__auto___46739)
{var seq__46710_46740__$1 = temp__4126__auto___46739;if(cljs.core.chunked_seq_QMARK_(seq__46710_46740__$1))
{var c__20721__auto___46741 = cljs.core.chunk_first(seq__46710_46740__$1);{
var G__46742 = cljs.core.chunk_rest(seq__46710_46740__$1);
var G__46743 = c__20721__auto___46741;
var G__46744 = cljs.core.count(c__20721__auto___46741);
var G__46745 = (0);
seq__46710_46725 = G__46742;
chunk__46711_46726 = G__46743;
count__46712_46727 = G__46744;
i__46713_46728 = G__46745;
continue;
}
} else
{var vec__46719_46746 = cljs.core.first(seq__46710_46740__$1);var k_46747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46719_46746,(0),null);var v_46748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46719_46746,(1),null);var m46708_46749 = (function (){var G__46720 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46720) : cljs.core.deref.call(null,G__46720));
})();var G__46721_46750 = m_atom__2344__auto__;var G__46722_46751 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m46708_46749,(function (){var G__46723 = k_46747;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__46723) : f.call(null,G__46723));
})(),v_46748);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46721_46750,G__46722_46751) : cljs.core.reset_BANG_.call(null,G__46721_46750,G__46722_46751));
{
var G__46752 = cljs.core.next(seq__46710_46740__$1);
var G__46753 = null;
var G__46754 = (0);
var G__46755 = (0);
seq__46710_46725 = G__46752;
chunk__46711_46726 = G__46753;
count__46712_46727 = G__46754;
i__46713_46728 = G__46755;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__46724 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46724) : cljs.core.deref.call(null,G__46724));
})());
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__2344__auto__ = (function (){var G__46772 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46772) : cljs.core.atom.call(null,G__46772));
})();var seq__46773_46786 = cljs.core.seq(ks);var chunk__46774_46787 = null;var count__46775_46788 = (0);var i__46776_46789 = (0);while(true){
if((i__46776_46789 < count__46775_46788))
{var k_46790 = chunk__46774_46787.cljs$core$IIndexed$_nth$arity$2(null,i__46776_46789);var m46771_46791 = (function (){var G__46777 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46777) : cljs.core.deref.call(null,G__46777));
})();var G__46778_46792 = m_atom__2344__auto__;var G__46779_46793 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m46771_46791,k_46790,(function (){var G__46780 = k_46790;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__46780) : f.call(null,G__46780));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46778_46792,G__46779_46793) : cljs.core.reset_BANG_.call(null,G__46778_46792,G__46779_46793));
{
var G__46794 = seq__46773_46786;
var G__46795 = chunk__46774_46787;
var G__46796 = count__46775_46788;
var G__46797 = (i__46776_46789 + (1));
seq__46773_46786 = G__46794;
chunk__46774_46787 = G__46795;
count__46775_46788 = G__46796;
i__46776_46789 = G__46797;
continue;
}
} else
{var temp__4126__auto___46798 = cljs.core.seq(seq__46773_46786);if(temp__4126__auto___46798)
{var seq__46773_46799__$1 = temp__4126__auto___46798;if(cljs.core.chunked_seq_QMARK_(seq__46773_46799__$1))
{var c__20721__auto___46800 = cljs.core.chunk_first(seq__46773_46799__$1);{
var G__46801 = cljs.core.chunk_rest(seq__46773_46799__$1);
var G__46802 = c__20721__auto___46800;
var G__46803 = cljs.core.count(c__20721__auto___46800);
var G__46804 = (0);
seq__46773_46786 = G__46801;
chunk__46774_46787 = G__46802;
count__46775_46788 = G__46803;
i__46776_46789 = G__46804;
continue;
}
} else
{var k_46805 = cljs.core.first(seq__46773_46799__$1);var m46771_46806 = (function (){var G__46781 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46781) : cljs.core.deref.call(null,G__46781));
})();var G__46782_46807 = m_atom__2344__auto__;var G__46783_46808 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m46771_46806,k_46805,(function (){var G__46784 = k_46805;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__46784) : f.call(null,G__46784));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46782_46807,G__46783_46808) : cljs.core.reset_BANG_.call(null,G__46782_46807,G__46783_46808));
{
var G__46809 = cljs.core.next(seq__46773_46799__$1);
var G__46810 = null;
var G__46811 = (0);
var G__46812 = (0);
seq__46773_46786 = G__46809;
chunk__46774_46787 = G__46810;
count__46775_46788 = G__46811;
i__46776_46789 = G__46812;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__46785 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46785) : cljs.core.deref.call(null,G__46785));
})());
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__2344__auto__ = (function (){var G__46829 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46829) : cljs.core.atom.call(null,G__46829));
})();var seq__46830_46843 = cljs.core.seq(vs);var chunk__46831_46844 = null;var count__46832_46845 = (0);var i__46833_46846 = (0);while(true){
if((i__46833_46846 < count__46832_46845))
{var v_46847 = chunk__46831_46844.cljs$core$IIndexed$_nth$arity$2(null,i__46833_46846);var m46828_46848 = (function (){var G__46834 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46834) : cljs.core.deref.call(null,G__46834));
})();var G__46835_46849 = m_atom__2344__auto__;var G__46836_46850 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m46828_46848,(function (){var G__46837 = v_46847;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__46837) : f.call(null,G__46837));
})(),v_46847);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46835_46849,G__46836_46850) : cljs.core.reset_BANG_.call(null,G__46835_46849,G__46836_46850));
{
var G__46851 = seq__46830_46843;
var G__46852 = chunk__46831_46844;
var G__46853 = count__46832_46845;
var G__46854 = (i__46833_46846 + (1));
seq__46830_46843 = G__46851;
chunk__46831_46844 = G__46852;
count__46832_46845 = G__46853;
i__46833_46846 = G__46854;
continue;
}
} else
{var temp__4126__auto___46855 = cljs.core.seq(seq__46830_46843);if(temp__4126__auto___46855)
{var seq__46830_46856__$1 = temp__4126__auto___46855;if(cljs.core.chunked_seq_QMARK_(seq__46830_46856__$1))
{var c__20721__auto___46857 = cljs.core.chunk_first(seq__46830_46856__$1);{
var G__46858 = cljs.core.chunk_rest(seq__46830_46856__$1);
var G__46859 = c__20721__auto___46857;
var G__46860 = cljs.core.count(c__20721__auto___46857);
var G__46861 = (0);
seq__46830_46843 = G__46858;
chunk__46831_46844 = G__46859;
count__46832_46845 = G__46860;
i__46833_46846 = G__46861;
continue;
}
} else
{var v_46862 = cljs.core.first(seq__46830_46856__$1);var m46828_46863 = (function (){var G__46838 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46838) : cljs.core.deref.call(null,G__46838));
})();var G__46839_46864 = m_atom__2344__auto__;var G__46840_46865 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m46828_46863,(function (){var G__46841 = v_46862;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__46841) : f.call(null,G__46841));
})(),v_46862);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46839_46864,G__46840_46865) : cljs.core.reset_BANG_.call(null,G__46839_46864,G__46840_46865));
{
var G__46866 = cljs.core.next(seq__46830_46856__$1);
var G__46867 = null;
var G__46868 = (0);
var G__46869 = (0);
seq__46830_46843 = G__46866;
chunk__46831_46844 = G__46867;
count__46832_46845 = G__46868;
i__46833_46846 = G__46869;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__46842 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46842) : cljs.core.deref.call(null,G__46842));
})());
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__46870){var vec__46878 = p__46870;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46878,(0),null);var ks = cljs.core.nthnext(vec__46878,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__19277__auto__ = ks;if(and__19277__auto__)
{return dissoc_in((function (){var G__46880 = k;return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(G__46880) : m.call(null,G__46880));
})(),ks);
} else
{return and__19277__auto__;
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
{var m_atom__2344__auto__ = (function (){var G__46899 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46899) : cljs.core.atom.call(null,G__46899));
})();var seq__46900_46913 = cljs.core.seq(x);var chunk__46901_46914 = null;var count__46902_46915 = (0);var i__46903_46916 = (0);while(true){
if((i__46903_46916 < count__46902_46915))
{var vec__46904_46917 = chunk__46901_46914.cljs$core$IIndexed$_nth$arity$2(null,i__46903_46916);var k_46918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46904_46917,(0),null);var v_46919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46904_46917,(1),null);var m46898_46920 = (function (){var G__46905 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46905) : cljs.core.deref.call(null,G__46905));
})();var G__46906_46921 = m_atom__2344__auto__;var G__46907_46922 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m46898_46920,((typeof k_46918 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_46918):k_46918),keywordize_map(v_46919));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46906_46921,G__46907_46922) : cljs.core.reset_BANG_.call(null,G__46906_46921,G__46907_46922));
{
var G__46923 = seq__46900_46913;
var G__46924 = chunk__46901_46914;
var G__46925 = count__46902_46915;
var G__46926 = (i__46903_46916 + (1));
seq__46900_46913 = G__46923;
chunk__46901_46914 = G__46924;
count__46902_46915 = G__46925;
i__46903_46916 = G__46926;
continue;
}
} else
{var temp__4126__auto___46927 = cljs.core.seq(seq__46900_46913);if(temp__4126__auto___46927)
{var seq__46900_46928__$1 = temp__4126__auto___46927;if(cljs.core.chunked_seq_QMARK_(seq__46900_46928__$1))
{var c__20721__auto___46929 = cljs.core.chunk_first(seq__46900_46928__$1);{
var G__46930 = cljs.core.chunk_rest(seq__46900_46928__$1);
var G__46931 = c__20721__auto___46929;
var G__46932 = cljs.core.count(c__20721__auto___46929);
var G__46933 = (0);
seq__46900_46913 = G__46930;
chunk__46901_46914 = G__46931;
count__46902_46915 = G__46932;
i__46903_46916 = G__46933;
continue;
}
} else
{var vec__46908_46934 = cljs.core.first(seq__46900_46928__$1);var k_46935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46908_46934,(0),null);var v_46936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46908_46934,(1),null);var m46898_46937 = (function (){var G__46909 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46909) : cljs.core.deref.call(null,G__46909));
})();var G__46910_46938 = m_atom__2344__auto__;var G__46911_46939 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m46898_46937,((typeof k_46935 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_46935):k_46935),keywordize_map(v_46936));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46910_46938,G__46911_46939) : cljs.core.reset_BANG_.call(null,G__46910_46938,G__46911_46939));
{
var G__46940 = cljs.core.next(seq__46900_46928__$1);
var G__46941 = null;
var G__46942 = (0);
var G__46943 = (0);
seq__46900_46913 = G__46940;
chunk__46901_46914 = G__46941;
count__46902_46915 = G__46942;
i__46903_46916 = G__46943;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__46912 = m_atom__2344__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46912) : cljs.core.deref.call(null,G__46912));
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
{var G__46948 = false;var G__46949 = "Key %s not found in %s";var G__46950 = k;var G__46951 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.key,m);return (plumbing.fnk.schema.assert_iae.cljs$core$IFn$_invoke$arity$4 ? plumbing.fnk.schema.assert_iae.cljs$core$IFn$_invoke$arity$4(G__46948,G__46949,G__46950,G__46951) : plumbing.fnk.schema.assert_iae.call(null,G__46948,G__46949,G__46950,G__46951));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq(ks))
{{
var G__46952 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__46953 = cljs.core.next(ks);
m = G__46952;
ks = G__46953;
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
})(),(function (){var iter__20684__auto__ = (function iter__46964(s__46965){return (new cljs.core.LazySeq(null,(function (){var s__46965__$1 = s__46965;while(true){
var temp__4126__auto__ = cljs.core.seq(s__46965__$1);if(temp__4126__auto__)
{var s__46965__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__46965__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__46965__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__46967 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__46966 = (0);while(true){
if((i__46966 < size__20683__auto__))
{var vec__46972 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__46966);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46972,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46972,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append(b__46967,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__46974 = (i__46966 + (1));
i__46966 = G__46974;
continue;
}
} else
{{
var G__46975 = (i__46966 + (1));
i__46966 = G__46975;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46967),iter__46964(cljs.core.chunk_rest(s__46965__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46967),null);
}
} else
{var vec__46973 = cljs.core.first(s__46965__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46973,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46973,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__46964(cljs.core.rest(s__46965__$2)));
} else
{{
var G__46976 = cljs.core.rest(s__46965__$2);
s__46965__$1 = G__46976;
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
});return iter__20684__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__46977){
var m = cljs.core.first(arglist__46977);
var kvs = cljs.core.rest(arglist__46977);
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
update_in_when.cljs$lang$applyTo = (function (arglist__46978){
var m = cljs.core.first(arglist__46978);
arglist__46978 = cljs.core.next(arglist__46978);
var key_seq = cljs.core.first(arglist__46978);
arglist__46978 = cljs.core.next(arglist__46978);
var f = cljs.core.first(arglist__46978);
var args = cljs.core.rest(arglist__46978);
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
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){var k = (function (){var G__46981 = x;return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__46981) : key_fn.call(null,G__46981));
})();return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(function (){var G__46982 = x;return (map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(G__46982) : map_fn.call(null,G__46982));
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
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){if(cljs.core.truth_((function (){var G__46986 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__46986) : f.call(null,G__46986));
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
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = (function (){var G__47002 = cljs.core.PersistentHashSet.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__47002) : cljs.core.atom.call(null,G__47002));
})();var iter__20684__auto__ = ((function (s){
return (function iter__47003(s__47004){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__47004__$1 = s__47004;while(true){
var temp__4126__auto__ = cljs.core.seq(s__47004__$1);if(temp__4126__auto__)
{var s__47004__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__47004__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__47004__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__47006 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__47005 = (0);while(true){
if((i__47005 < size__20683__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__47005);var id = (function (){var G__47013 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__47013) : f.call(null,G__47013));
})();if(!(cljs.core.contains_QMARK_((function (){var G__47014 = s;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47014) : cljs.core.deref.call(null,G__47014));
})(),id)))
{cljs.core.chunk_append(b__47006,(function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);
return x;
})());
{
var G__47017 = (i__47005 + (1));
i__47005 = G__47017;
continue;
}
} else
{{
var G__47018 = (i__47005 + (1));
i__47005 = G__47018;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__47006),iter__47003(cljs.core.chunk_rest(s__47004__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__47006),null);
}
} else
{var x = cljs.core.first(s__47004__$2);var id = (function (){var G__47015 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__47015) : f.call(null,G__47015));
})();if(!(cljs.core.contains_QMARK_((function (){var G__47016 = s;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47016) : cljs.core.deref.call(null,G__47016));
})(),id)))
{return cljs.core.cons((function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);
return x;
})(),iter__47003(cljs.core.rest(s__47004__$2)));
} else
{{
var G__47019 = cljs.core.rest(s__47004__$2);
s__47004__$1 = G__47019;
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
;return iter__20684__auto__(xs);
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
interleave_all.cljs$lang$applyTo = (function (arglist__47022){
var colls = cljs.core.seq(arglist__47022);
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
var G__47027__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__47028 = conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__47029 = cljs.core.first(xs);
var G__47030 = cljs.core.next(xs);
coll = G__47028;
x = G__47029;
xs = G__47030;
continue;
}
} else
{return conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__47027 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__47027__delegate.call(this,coll,x,xs);};
G__47027.cljs$lang$maxFixedArity = 2;
G__47027.cljs$lang$applyTo = (function (arglist__47031){
var coll = cljs.core.first(arglist__47031);
arglist__47031 = cljs.core.next(arglist__47031);
var x = cljs.core.first(arglist__47031);
var xs = cljs.core.rest(arglist__47031);
return G__47027__delegate(coll,x,xs);
});
G__47027.cljs$core$IFn$_invoke$arity$variadic = G__47027__delegate;
return G__47027;
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
var old_val = (function (){var G__47037 = a;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47037) : cljs.core.deref.call(null,G__47037));
})();var new_val = (function (){var G__47038 = old_val;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__47038) : f.call(null,G__47038));
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
var G__47039__delegate = function (a,f,args){return swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__47032_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__47032_SHARP_,args);
}));
};
var G__47039 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__47039__delegate.call(this,a,f,args);};
G__47039.cljs$lang$maxFixedArity = 2;
G__47039.cljs$lang$applyTo = (function (arglist__47040){
var a = cljs.core.first(arglist__47040);
arglist__47040 = cljs.core.next(arglist__47040);
var f = cljs.core.first(arglist__47040);
var args = cljs.core.rest(arglist__47040);
return G__47039__delegate(a,f,args);
});
G__47039.cljs$core$IFn$_invoke$arity$variadic = G__47039__delegate;
return G__47039;
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
var G__47041__delegate = function (f,arg,args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
};
var G__47041 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__47041__delegate.call(this,f,arg,args);};
G__47041.cljs$lang$maxFixedArity = 2;
G__47041.cljs$lang$applyTo = (function (arglist__47042){
var f = cljs.core.first(arglist__47042);
arglist__47042 = cljs.core.next(arglist__47042);
var arg = cljs.core.first(arglist__47042);
var args = cljs.core.rest(arglist__47042);
return G__47041__delegate(f,arg,args);
});
G__47041.cljs$core$IFn$_invoke$arity$variadic = G__47041__delegate;
return G__47041;
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