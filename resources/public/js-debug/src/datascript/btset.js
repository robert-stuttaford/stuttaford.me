goog.provide('datascript.btset');
goog.require('cljs.core');
datascript.btset.min_len = (64);
datascript.btset.max_len = (128);
datascript.btset.level_shift = (cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47489_SHARP_){return ((datascript.btset.max_len & (1 << p1__47489_SHARP_)) != 0);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$3((31),(-1),(-1)))) + (1));
datascript.btset.path_mask = (((1) << datascript.btset.level_shift) - (1));
datascript.btset.empty_path = (0);
datascript.btset.path_get = (function path_get(path,level){return (datascript.btset.path_mask & (path >>> level));
});
datascript.btset.path_set = (function path_set(path,level,idx){return (path | (idx << level));
});
datascript.btset.eq = (function eq(a,b){return ((0) === (function (){var G__47492 = a;var G__47493 = b;return (datascript.btset._STAR_cmp_STAR_.cljs$core$IFn$_invoke$arity$2 ? datascript.btset._STAR_cmp_STAR_.cljs$core$IFn$_invoke$arity$2(G__47492,G__47493) : datascript.btset._STAR_cmp_STAR_.call(null,G__47492,G__47493));
})());
});
datascript.btset.half = (function half(x){return (x >>> (1));
});
datascript.btset.binary_search_l = (function binary_search_l(arr,l,r,k){while(true){
if((l <= r))
{var m = datascript.btset.half((l + r));var mk = (arr[m]);var cmp = (function (){var G__47496 = mk;var G__47497 = k;return (datascript.btset._STAR_cmp_STAR_.cljs$core$IFn$_invoke$arity$2 ? datascript.btset._STAR_cmp_STAR_.cljs$core$IFn$_invoke$arity$2(G__47496,G__47497) : datascript.btset._STAR_cmp_STAR_.call(null,G__47496,G__47497));
})();if((cmp < (0)))
{{
var G__47498 = arr;
var G__47499 = (m + (1));
var G__47500 = r;
var G__47501 = k;
arr = G__47498;
l = G__47499;
r = G__47500;
k = G__47501;
continue;
}
} else
{{
var G__47502 = arr;
var G__47503 = l;
var G__47504 = (m - (1));
var G__47505 = k;
arr = G__47502;
l = G__47503;
r = G__47504;
k = G__47505;
continue;
}
}
} else
{return l;
}
break;
}
});
datascript.btset.binary_search_r = (function binary_search_r(arr,l,r,k){while(true){
if((l <= r))
{var m = datascript.btset.half((l + r));var mk = (arr[m]);var cmp = (function (){var G__47508 = mk;var G__47509 = k;return (datascript.btset._STAR_cmp_STAR_.cljs$core$IFn$_invoke$arity$2 ? datascript.btset._STAR_cmp_STAR_.cljs$core$IFn$_invoke$arity$2(G__47508,G__47509) : datascript.btset._STAR_cmp_STAR_.call(null,G__47508,G__47509));
})();if((cmp > (0)))
{{
var G__47510 = arr;
var G__47511 = l;
var G__47512 = (m - (1));
var G__47513 = k;
arr = G__47510;
l = G__47511;
r = G__47512;
k = G__47513;
continue;
}
} else
{{
var G__47514 = arr;
var G__47515 = (m + (1));
var G__47516 = r;
var G__47517 = k;
arr = G__47514;
l = G__47515;
r = G__47516;
k = G__47517;
continue;
}
}
} else
{return l;
}
break;
}
});
datascript.btset.lookup_exact = (function lookup_exact(arr,key){var arr_l = arr.length;var idx = datascript.btset.binary_search_l(arr,(0),(arr_l - (1)),key);if(((idx < arr_l)) && (datascript.btset.eq((arr[idx]),key)))
{return idx;
} else
{return (-1);
}
});
datascript.btset.lookup_range = (function lookup_range(arr,key){var arr_l = arr.length;var idx = datascript.btset.binary_search_l(arr,(0),(arr_l - (1)),key);if((idx === arr_l))
{return (-1);
} else
{return idx;
}
});
datascript.btset.cut_n_splice = (function cut_n_splice(arr,cut_from,cut_to,splice_from,splice_to,xs){var arr_l = arr.length;var xs_l = xs.length;var l1 = (splice_from - cut_from);var l2 = (cut_to - splice_to);var l1xs = (l1 + xs_l);var new_arr = (new Array(((l1 + xs_l) + l2)));var n__20913__auto___47518 = l1;var i_47519 = (0);while(true){
if((i_47519 < n__20913__auto___47518))
{(new_arr[i_47519] = (arr[(cut_from + i_47519)]));
{
var G__47520 = (i_47519 + (1));
i_47519 = G__47520;
continue;
}
} else
{}
break;
}
var n__20913__auto___47521 = xs_l;var i_47522 = (0);while(true){
if((i_47522 < n__20913__auto___47521))
{(new_arr[(i_47522 + l1)] = (xs[i_47522]));
{
var G__47523 = (i_47522 + (1));
i_47522 = G__47523;
continue;
}
} else
{}
break;
}
var n__20913__auto___47524 = l2;var i_47525 = (0);while(true){
if((i_47525 < n__20913__auto___47524))
{(new_arr[(i_47525 + l1xs)] = (arr[(splice_to + i_47525)]));
{
var G__47526 = (i_47525 + (1));
i_47525 = G__47526;
continue;
}
} else
{}
break;
}
return new_arr;
});
datascript.btset.cut = (function() {
var cut = null;
var cut__2 = (function (arr,cut_from){return arr.slice(cut_from);
});
var cut__3 = (function (arr,cut_from,cut_to){return arr.slice(cut_from,cut_to);
});
cut = function(arr,cut_from,cut_to){
switch(arguments.length){
case 2:
return cut__2.call(this,arr,cut_from);
case 3:
return cut__3.call(this,arr,cut_from,cut_to);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cut.cljs$core$IFn$_invoke$arity$2 = cut__2;
cut.cljs$core$IFn$_invoke$arity$3 = cut__3;
return cut;
})()
;
datascript.btset.splice = (function splice(arr,splice_from,splice_to,xs){return datascript.btset.cut_n_splice(arr,(0),arr.length,splice_from,splice_to,xs);
});
datascript.btset.insert = (function insert(arr,idx,xs){return datascript.btset.cut_n_splice(arr,(0),arr.length,idx,idx,xs);
});
datascript.btset.merge_n_split = (function merge_n_split(a1,a2){var a1_l = a1.length;var a2_l = a2.length;var total_l = (a1_l + a2_l);var r1_l = datascript.btset.half(total_l);var r2_l = (total_l - r1_l);var r1 = (new Array(r1_l));var r2 = (new Array(r2_l));var n__20913__auto___47527 = total_l;var i_47528 = (0);while(true){
if((i_47528 < n__20913__auto___47527))
{((((i_47528 < r1_l))?r1:r2)[(((i_47528 < r1_l))?i_47528:(i_47528 - r1_l))] = ((((i_47528 < a1_l))?a1:a2)[(((i_47528 < a1_l))?i_47528:(i_47528 - a1_l))]));
{
var G__47529 = (i_47528 + (1));
i_47528 = G__47529;
continue;
}
} else
{}
break;
}
return [r1,r2];
});
datascript.btset.eq_arr = (function eq_arr(a1,a1_from,a1_to,a2,a2_from,a2_to,cmp){var len = (a1_to - a1_from);var and__19277__auto__ = (len === (a2_to - a2_from));if(and__19277__auto__)
{var i = (0);while(true){
if((i === len))
{return true;
} else
{if(cljs.core.not((function (){var G__47536 = (a1[(i + a1_from)]);var G__47537 = (a2[(i + a2_from)]);return (cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(G__47536,G__47537) : cmp.call(null,G__47536,G__47537));
})()))
{return false;
} else
{{
var G__47538 = (i + (1));
i = G__47538;
continue;
}

}
}
break;
}
} else
{return and__19277__auto__;
}
});
datascript.btset.check_n_splice = (function check_n_splice(arr,from,to,new_arr){if(datascript.btset.eq_arr(arr,from,to,new_arr,(0),new_arr.length,datascript.btset.eq))
{return arr;
} else
{return datascript.btset.splice(arr,from,to,new_arr);
}
});
datascript.btset.lim_key = (function lim_key(node){return (node.keys[(node.keys.length - (1))]);
});
/**
* Drop non-nil references and return array of arguments
*/
datascript.btset.return_array = (function() {
var return_array = null;
var return_array__1 = (function (a1){return [a1];
});
var return_array__2 = (function (a1,a2){if(cljs.core.truth_(a1))
{if(cljs.core.truth_(a2))
{return [a1,a2];
} else
{return [a1];
}
} else
{return [a2];
}
});
var return_array__3 = (function (a1,a2,a3){if(cljs.core.truth_(a1))
{if(cljs.core.truth_(a2))
{if(cljs.core.truth_(a3))
{return [a1,a2,a3];
} else
{return [a1,a2];
}
} else
{if(cljs.core.truth_(a3))
{return [a1,a3];
} else
{return [a1];
}
}
} else
{if(cljs.core.truth_(a2))
{if(cljs.core.truth_(a3))
{return [a2,a3];
} else
{return [a2];
}
} else
{return [a3];
}
}
});
return_array = function(a1,a2,a3){
switch(arguments.length){
case 1:
return return_array__1.call(this,a1);
case 2:
return return_array__2.call(this,a1,a2);
case 3:
return return_array__3.call(this,a1,a2,a3);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return_array.cljs$core$IFn$_invoke$arity$1 = return_array__1;
return_array.cljs$core$IFn$_invoke$arity$2 = return_array__2;
return_array.cljs$core$IFn$_invoke$arity$3 = return_array__3;
return return_array;
})()
;
datascript.btset.rotate = (function rotate(node,root_QMARK_,left,right){if(cljs.core.truth_(root_QMARK_))
{return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$1(node);
} else
{if((node.len() > datascript.btset.min_len))
{return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$3(left,node,right);
} else
{if(cljs.core.truth_((function (){var and__19277__auto__ = left;if(cljs.core.truth_(and__19277__auto__))
{return (left.len() <= datascript.btset.min_len);
} else
{return and__19277__auto__;
}
})()))
{return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$2(left.merge(node),right);
} else
{if(cljs.core.truth_((function (){var and__19277__auto__ = right;if(cljs.core.truth_(and__19277__auto__))
{return (right.len() <= datascript.btset.min_len);
} else
{return and__19277__auto__;
}
})()))
{return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$2(left,node.merge(right));
} else
{if(cljs.core.truth_((function (){var and__19277__auto__ = left;if(cljs.core.truth_(and__19277__auto__))
{return ((right == null)) || ((left.len() < right.len()));
} else
{return and__19277__auto__;
}
})()))
{var nodes = left.merge_n_split(node);return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$3((nodes[(0)]),(nodes[(1)]),right);
} else
{var nodes = node.merge_n_split(right);return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$3(left,(nodes[(0)]),(nodes[(1)]));

}
}
}
}
}
});

/**
* @constructor
*/
datascript.btset.Node = (function (keys,pointers){
this.keys = keys;
this.pointers = pointers;
})
datascript.btset.Node.cljs$lang$type = true;
datascript.btset.Node.cljs$lang$ctorStr = "datascript.btset/Node";
datascript.btset.Node.cljs$lang$ctorPrWriter = (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"datascript.btset/Node");
});
datascript.btset.Node.prototype.len = (function (){var self__ = this;
var _ = this;return self__.keys.length;
});
datascript.btset.Node.prototype.merge = (function (next){var self__ = this;
var _ = this;return (new datascript.btset.Node(self__.keys.concat(next.keys),self__.pointers.concat(next.pointers)));
});
datascript.btset.Node.prototype.merge_n_split = (function (next){var self__ = this;
var _ = this;var ks = datascript.btset.merge_n_split(self__.keys,next.keys);var ps = datascript.btset.merge_n_split(self__.pointers,next.pointers);return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$2((new datascript.btset.Node((ks[(0)]),(ps[(0)]))),(new datascript.btset.Node((ks[(1)]),(ps[(1)]))));
});
datascript.btset.Node.prototype.lookup = (function (key){var self__ = this;
var _ = this;var idx = datascript.btset.lookup_range(self__.keys,key);if(((-1) === idx))
{return null;
} else
{return (self__.pointers[idx]).lookup(key);
}
});
datascript.btset.Node.prototype.conj = (function (key){var self__ = this;
var this$ = this;var idx = datascript.btset.binary_search_l(self__.keys,(0),(self__.keys.length - (2)),key);var nodes = (self__.pointers[idx]).conj(key);if(cljs.core.truth_(nodes))
{var new_keys = datascript.btset.check_n_splice(self__.keys,idx,(idx + (1)),nodes.map(datascript.btset.lim_key));var new_pointers = datascript.btset.splice(self__.pointers,idx,(idx + (1)),nodes);if((new_pointers.length <= datascript.btset.max_len))
{return [(new datascript.btset.Node(new_keys,new_pointers))];
} else
{var middle = datascript.btset.half(new_pointers.length);return [(new datascript.btset.Node(datascript.btset.cut.cljs$core$IFn$_invoke$arity$3(new_keys,(0),middle),datascript.btset.cut.cljs$core$IFn$_invoke$arity$3(new_pointers,(0),middle))),(new datascript.btset.Node(datascript.btset.cut.cljs$core$IFn$_invoke$arity$2(new_keys,middle),datascript.btset.cut.cljs$core$IFn$_invoke$arity$2(new_pointers,middle)))];
}
} else
{return null;
}
});
datascript.btset.Node.prototype.disj = (function (key,root_QMARK_,left,right){var self__ = this;
var this$ = this;var idx = datascript.btset.lookup_range(self__.keys,key);if(((-1) === idx))
{return null;
} else
{var child = (self__.pointers[idx]);var left_child = ((((idx - (1)) >= (0)))?(self__.pointers[(idx - (1))]):null);var right_child = ((((idx + (1)) < self__.pointers.length))?(self__.pointers[(idx + (1))]):null);var disjned = child.disj(key,false,left_child,right_child);if(cljs.core.truth_(disjned))
{var left_idx = (cljs.core.truth_(left_child)?(idx - (1)):idx);var right_idx = (cljs.core.truth_(right_child)?((2) + idx):((1) + idx));var new_keys = datascript.btset.check_n_splice(self__.keys,left_idx,right_idx,disjned.map(datascript.btset.lim_key));var new_pointers = datascript.btset.splice(self__.pointers,left_idx,right_idx,disjned);return datascript.btset.rotate((new datascript.btset.Node(new_keys,new_pointers)),root_QMARK_,left,right);
} else
{return null;
}
}
});
datascript.btset.__GT_Node = (function __GT_Node(keys,pointers){return (new datascript.btset.Node(keys,pointers));
});

/**
* @constructor
*/
datascript.btset.LeafNode = (function (keys){
this.keys = keys;
})
datascript.btset.LeafNode.cljs$lang$type = true;
datascript.btset.LeafNode.cljs$lang$ctorStr = "datascript.btset/LeafNode";
datascript.btset.LeafNode.cljs$lang$ctorPrWriter = (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"datascript.btset/LeafNode");
});
datascript.btset.LeafNode.prototype.toString = (function (){var self__ = this;
var _ = this;return cljs.core.pr_str_STAR_(cljs.core.vec(self__.keys));
});
datascript.btset.LeafNode.prototype.len = (function (){var self__ = this;
var _ = this;return self__.keys.length;
});
datascript.btset.LeafNode.prototype.merge = (function (next){var self__ = this;
var _ = this;return (new datascript.btset.LeafNode(self__.keys.concat(next.keys)));
});
datascript.btset.LeafNode.prototype.merge_n_split = (function (next){var self__ = this;
var _ = this;var ks = datascript.btset.merge_n_split(self__.keys,next.keys);return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$2((new datascript.btset.LeafNode((ks[(0)]))),(new datascript.btset.LeafNode((ks[(1)]))));
});
datascript.btset.LeafNode.prototype.lookup = (function (key){var self__ = this;
var _ = this;var idx = datascript.btset.lookup_exact(self__.keys,key);if(((-1) === idx))
{return null;
} else
{return (self__.keys[idx]);
}
});
datascript.btset.LeafNode.prototype.conj = (function (key){var self__ = this;
var this$ = this;var idx = datascript.btset.binary_search_l(self__.keys,(0),(self__.keys.length - (1)),key);var keys_l = self__.keys.length;if(((idx < keys_l)) && (datascript.btset.eq(key,(self__.keys[idx]))))
{return null;
} else
{if((keys_l === datascript.btset.max_len))
{var middle = datascript.btset.half((keys_l + (1)));if((idx > middle))
{return [(new datascript.btset.LeafNode(datascript.btset.cut.cljs$core$IFn$_invoke$arity$3(self__.keys,(0),middle))),(new datascript.btset.LeafNode(datascript.btset.cut_n_splice(self__.keys,middle,keys_l,idx,idx,[key])))];
} else
{return [(new datascript.btset.LeafNode(datascript.btset.cut_n_splice(self__.keys,(0),middle,idx,idx,[key]))),(new datascript.btset.LeafNode(datascript.btset.cut.cljs$core$IFn$_invoke$arity$3(self__.keys,middle,keys_l)))];
}
} else
{return [(new datascript.btset.LeafNode(datascript.btset.splice(self__.keys,idx,idx,[key])))];

}
}
});
datascript.btset.LeafNode.prototype.disj = (function (key,root_QMARK_,left,right){var self__ = this;
var this$ = this;var idx = datascript.btset.lookup_exact(self__.keys,key);if(((-1) === idx))
{return null;
} else
{var new_keys = datascript.btset.splice(self__.keys,idx,(idx + (1)),[]);return datascript.btset.rotate((new datascript.btset.LeafNode(new_keys)),root_QMARK_,left,right);
}
});
datascript.btset.__GT_LeafNode = (function __GT_LeafNode(keys){return (new datascript.btset.LeafNode(keys));
});
datascript.btset.keys_for = (function keys_for(set,path){var level = set.shift;var node = set.root;while(true){
if((level > (0)))
{{
var G__47539 = (level - datascript.btset.level_shift);
var G__47540 = (node.pointers[datascript.btset.path_get(path,level)]);
level = G__47539;
node = G__47540;
continue;
}
} else
{return node.keys;
}
break;
}
});
datascript.btset.btset_conj = (function btset_conj(set,key){var _STAR_cmp_STAR_47550 = datascript.btset._STAR_cmp_STAR_;try{datascript.btset._STAR_cmp_STAR_ = set.comparator;
var roots = set.root.conj(key);if((roots == null))
{return set;
} else
{if((roots.length === (1)))
{var G__47551 = set;var G__47552 = (roots[(0)]);var G__47553 = set.shift;var G__47554 = (set.cnt + (1));return (datascript.btset.alter_btset.cljs$core$IFn$_invoke$arity$4 ? datascript.btset.alter_btset.cljs$core$IFn$_invoke$arity$4(G__47551,G__47552,G__47553,G__47554) : datascript.btset.alter_btset.call(null,G__47551,G__47552,G__47553,G__47554));
} else
{var G__47555 = set;var G__47556 = (new datascript.btset.Node(roots.map(datascript.btset.lim_key),roots));var G__47557 = (set.shift + datascript.btset.level_shift);var G__47558 = (set.cnt + (1));return (datascript.btset.alter_btset.cljs$core$IFn$_invoke$arity$4 ? datascript.btset.alter_btset.cljs$core$IFn$_invoke$arity$4(G__47555,G__47556,G__47557,G__47558) : datascript.btset.alter_btset.call(null,G__47555,G__47556,G__47557,G__47558));

}
}
}finally {datascript.btset._STAR_cmp_STAR_ = _STAR_cmp_STAR_47550;
}});
datascript.btset.btset_disj = (function btset_disj(set,key){var _STAR_cmp_STAR_47568 = datascript.btset._STAR_cmp_STAR_;try{datascript.btset._STAR_cmp_STAR_ = set.comparator;
var new_roots = set.root.disj(key,true,null,null);if((new_roots == null))
{return set;
} else
{var new_root = (new_roots[(0)]);if(((new_root instanceof datascript.btset.Node)) && ((new_root.pointers.length === (1))))
{var G__47569 = set;var G__47570 = (new_root.pointers[(0)]);var G__47571 = (set.shift - datascript.btset.level_shift);var G__47572 = (set.cnt - (1));return (datascript.btset.alter_btset.cljs$core$IFn$_invoke$arity$4 ? datascript.btset.alter_btset.cljs$core$IFn$_invoke$arity$4(G__47569,G__47570,G__47571,G__47572) : datascript.btset.alter_btset.call(null,G__47569,G__47570,G__47571,G__47572));
} else
{var G__47573 = set;var G__47574 = new_root;var G__47575 = set.shift;var G__47576 = (set.cnt - (1));return (datascript.btset.alter_btset.cljs$core$IFn$_invoke$arity$4 ? datascript.btset.alter_btset.cljs$core$IFn$_invoke$arity$4(G__47573,G__47574,G__47575,G__47576) : datascript.btset.alter_btset.call(null,G__47573,G__47574,G__47575,G__47576));
}
}
}finally {datascript.btset._STAR_cmp_STAR_ = _STAR_cmp_STAR_47568;
}});
datascript.btset._next_path = (function _next_path(node,path,level){var idx = datascript.btset.path_get(path,level);if((level > (0)))
{var sub_path = _next_path((node.pointers[idx]),path,(level - datascript.btset.level_shift));if(((-1) === sub_path))
{if(((idx + (1)) < node.pointers.length))
{return datascript.btset.path_set(datascript.btset.empty_path,level,(idx + (1)));
} else
{return (-1);
}
} else
{return datascript.btset.path_set(sub_path,level,idx);
}
} else
{if(((idx + (1)) < node.keys.length))
{return datascript.btset.path_set(datascript.btset.empty_path,(0),(idx + (1)));
} else
{return (-1);
}
}
});
datascript.btset.next_path = (function next_path(set,path){return datascript.btset._next_path(set.root,path,set.shift);
});

/**
* @constructor
*/
datascript.btset.BTSetIter = (function (set,path,till_path,keys,idx){
this.set = set;
this.path = path;
this.till_path = till_path;
this.keys = keys;
this.idx = idx;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 8388800;
})
datascript.btset.BTSetIter.cljs$lang$type = true;
datascript.btset.BTSetIter.cljs$lang$ctorStr = "datascript.btset/BTSetIter";
datascript.btset.BTSetIter.cljs$lang$ctorPrWriter = (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"datascript.btset/BTSetIter");
});
datascript.btset.BTSetIter.prototype.cljs$core$INext$_next$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(((self__.idx + (1)) < self__.keys.length))
{if(((self__.path + (1)) < self__.till_path))
{return (new datascript.btset.BTSetIter(self__.set,(self__.path + (1)),self__.till_path,self__.keys,(self__.idx + (1))));
} else
{return null;
}
} else
{var path__$1 = datascript.btset.next_path(self__.set,self__.path);if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),path__$1)) && ((path__$1 < self__.till_path)))
{return (new datascript.btset.BTSetIter(self__.set,path__$1,self__.till_path,datascript.btset.keys_for(self__.set,path__$1),datascript.btset.path_get(path__$1,(0))));
} else
{return null;
}
}
});
datascript.btset.BTSetIter.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.keys))
{return (self__.keys[self__.idx]);
} else
{return null;
}
});
datascript.btset.BTSetIter.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var temp__4124__auto__ = cljs.core._next(this$__$1);if(cljs.core.truth_(temp__4124__auto__))
{var next = temp__4124__auto__;return next;
} else
{return (new datascript.btset.BTSetIter(self__.set,(-1),self__.till_path,null,(-1)));
}
});
datascript.btset.BTSetIter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.keys))
{return this$__$1;
} else
{return null;
}
});
datascript.btset.__GT_BTSetIter = (function __GT_BTSetIter(set,path,till_path,keys,idx){return (new datascript.btset.BTSetIter(set,path,till_path,keys,idx));
});
datascript.btset.btset_iter = (function btset_iter(set){var root_l = set.root.keys.length;if((root_l > (0)))
{return (new datascript.btset.BTSetIter(set,datascript.btset.empty_path,datascript.btset.path_set(datascript.btset.empty_path,set.shift,root_l),datascript.btset.keys_for(set,datascript.btset.empty_path),(0)));
} else
{return null;
}
});
datascript.btset._seek = (function _seek(set,key){var node = set.root;var path = datascript.btset.empty_path;var level = set.shift;while(true){
var keys = node.keys;var keys_l = keys.length;if(((0) === level))
{var idx = datascript.btset.binary_search_l(keys,(0),(keys_l - (1)),key);if((keys_l === idx))
{return (-1);
} else
{return datascript.btset.path_set(path,(0),idx);
}
} else
{var idx = datascript.btset.binary_search_l(keys,(0),(keys_l - (2)),key);{
var G__47580 = (node.pointers[idx]);
var G__47581 = datascript.btset.path_set(path,level,idx);
var G__47582 = (level - datascript.btset.level_shift);
node = G__47580;
path = G__47581;
level = G__47582;
continue;
}
}
break;
}
});
datascript.btset._rseek = (function _rseek(set,key){var node = set.root;var path = datascript.btset.empty_path;var level = set.shift;while(true){
var keys = node.keys;var keys_l = keys.length;if(((0) === level))
{var idx = datascript.btset.binary_search_r(keys,(0),(keys_l - (1)),key);return datascript.btset.path_set(path,(0),idx);
} else
{var idx = datascript.btset.binary_search_r(keys,(0),(keys_l - (2)),key);{
var G__47583 = (node.pointers[idx]);
var G__47584 = datascript.btset.path_set(path,level,idx);
var G__47585 = (level - datascript.btset.level_shift);
node = G__47583;
path = G__47584;
level = G__47585;
continue;
}
}
break;
}
});
datascript.btset._slice = (function _slice(set,key_from,key_to){var path = datascript.btset._seek(set,key_from);if((path < (0)))
{return null;
} else
{var till_path = datascript.btset._rseek(set,key_to);if((till_path > path))
{return (new datascript.btset.BTSetIter(set,path,till_path,datascript.btset.keys_for(set,path),datascript.btset.path_get(path,(0))));
} else
{return null;
}
}
});
datascript.btset.slice = (function() {
var slice = null;
var slice__2 = (function (set,key){return slice.cljs$core$IFn$_invoke$arity$3(set,key,key);
});
var slice__3 = (function (set,key_from,key_to){var _STAR_cmp_STAR_47590 = datascript.btset._STAR_cmp_STAR_;try{datascript.btset._STAR_cmp_STAR_ = set.comparator;
return datascript.btset._slice(set,key_from,key_to);
}finally {datascript.btset._STAR_cmp_STAR_ = _STAR_cmp_STAR_47590;
}});
slice = function(set,key_from,key_to){
switch(arguments.length){
case 2:
return slice__2.call(this,set,key_from);
case 3:
return slice__3.call(this,set,key_from,key_to);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
slice.cljs$core$IFn$_invoke$arity$2 = slice__2;
slice.cljs$core$IFn$_invoke$arity$3 = slice__3;
return slice;
})()
;

/**
* @constructor
*/
datascript.btset.BTSet = (function (root,shift,cnt,comparator,meta,__hash){
this.root = root;
this.shift = shift;
this.cnt = cnt;
this.comparator = comparator;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2162561295;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.btset.BTSet.cljs$lang$type = true;
datascript.btset.BTSet.cljs$lang$ctorStr = "datascript.btset/BTSet";
datascript.btset.BTSet.cljs$lang$ctorPrWriter = (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"datascript.btset/BTSet");
});
datascript.btset.BTSet.prototype.toString = (function (){var self__ = this;
var this$ = this;return cljs.core.pr_str_STAR_(this$);
});
datascript.btset.BTSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (set,k){var self__ = this;
var set__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(set__$1,k,null);
});
datascript.btset.BTSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){var self__ = this;
var ___$1 = this;var _STAR_cmp_STAR_47593 = datascript.btset._STAR_cmp_STAR_;try{datascript.btset._STAR_cmp_STAR_ = self__.comparator;
var or__19289__auto__ = self__.root.lookup(k);if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return not_found;
}
}finally {datascript.btset._STAR_cmp_STAR_ = _STAR_cmp_STAR_47593;
}});
datascript.btset.BTSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,cljs.core.seq(this$__$1));
});
datascript.btset.BTSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
datascript.btset.BTSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new datascript.btset.BTSet(self__.root,self__.shift,self__.cnt,self__.comparator,self__.meta,self__.__hash));
});
datascript.btset.BTSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.cnt;
});
datascript.btset.BTSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__20094__auto__ = self__.__hash;if(!((h__20094__auto__ == null)))
{return h__20094__auto__;
} else
{var h__20094__auto____$1 = cljs.core.hash_iset(coll__$1);self__.__hash = h__20094__auto____$1;
return h__20094__auto____$1;
}
});
datascript.btset.BTSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var self__ = this;
var this$__$1 = this;return (cljs.core.set_QMARK_(other)) && ((self__.cnt === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (this$__$1){
return (function (p1__47591_SHARP_){return cljs.core.contains_QMARK_(this$__$1,p1__47591_SHARP_);
});})(this$__$1))
,other));
});
datascript.btset.BTSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new datascript.btset.BTSet((new datascript.btset.LeafNode([])),(0),(0),self__.comparator,self__.meta,(0)));
});
datascript.btset.BTSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (set,key){var self__ = this;
var set__$1 = this;return datascript.btset.btset_disj(set__$1,key);
});
datascript.btset.BTSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return datascript.btset.btset_iter(this$__$1);
});
datascript.btset.BTSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new datascript.btset.BTSet(self__.root,self__.shift,self__.cnt,self__.comparator,new_meta,self__.__hash));
});
datascript.btset.BTSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (set,key){var self__ = this;
var set__$1 = this;return datascript.btset.btset_conj(set__$1,key);
});
datascript.btset.BTSet.prototype.call = (function() {
var G__47594 = null;
var G__47594__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__47594__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__47594 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__47594__2.call(this,self__,k);
case 3:
return G__47594__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47594.cljs$core$IFn$_invoke$arity$2 = G__47594__2;
G__47594.cljs$core$IFn$_invoke$arity$3 = G__47594__3;
return G__47594;
})()
;
datascript.btset.BTSet.prototype.apply = (function (self__,args47592){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47592)));
});
datascript.btset.BTSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
datascript.btset.BTSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
datascript.btset.__GT_BTSet = (function __GT_BTSet(root,shift,cnt,comparator,meta,__hash){return (new datascript.btset.BTSet(root,shift,cnt,comparator,meta,__hash));
});
datascript.btset.alter_btset = (function alter_btset(set,root,shift,cnt){return (new datascript.btset.BTSet(root,shift,cnt,set.comparator,set.meta,null));
});
/**
* @param {...*} var_args
*/
datascript.btset.btset_by = (function() {
var btset_by = null;
var btset_by__1 = (function (cmp){return (new datascript.btset.BTSet((new datascript.btset.LeafNode([])),(0),(0),cmp,null,(0)));
});
var btset_by__2 = (function() { 
var G__47596__delegate = function (cmp,keys){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,btset_by.cljs$core$IFn$_invoke$arity$1(cmp),keys);
};
var G__47596 = function (cmp,var_args){
var keys = null;if (arguments.length > 1) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__47596__delegate.call(this,cmp,keys);};
G__47596.cljs$lang$maxFixedArity = 1;
G__47596.cljs$lang$applyTo = (function (arglist__47597){
var cmp = cljs.core.first(arglist__47597);
var keys = cljs.core.rest(arglist__47597);
return G__47596__delegate(cmp,keys);
});
G__47596.cljs$core$IFn$_invoke$arity$variadic = G__47596__delegate;
return G__47596;
})()
;
btset_by = function(cmp,var_args){
var keys = var_args;
switch(arguments.length){
case 1:
return btset_by__1.call(this,cmp);
default:
return btset_by__2.cljs$core$IFn$_invoke$arity$variadic(cmp, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
btset_by.cljs$lang$maxFixedArity = 1;
btset_by.cljs$lang$applyTo = btset_by__2.cljs$lang$applyTo;
btset_by.cljs$core$IFn$_invoke$arity$1 = btset_by__1;
btset_by.cljs$core$IFn$_invoke$arity$variadic = btset_by__2.cljs$core$IFn$_invoke$arity$variadic;
return btset_by;
})()
;
/**
* @param {...*} var_args
*/
datascript.btset.btset = (function() {
var btset = null;
var btset__0 = (function (){return datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(cljs.core.compare);
});
var btset__1 = (function() { 
var G__47598__delegate = function (keys){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,btset.cljs$core$IFn$_invoke$arity$0(),keys);
};
var G__47598 = function (var_args){
var keys = null;if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__47598__delegate.call(this,keys);};
G__47598.cljs$lang$maxFixedArity = 0;
G__47598.cljs$lang$applyTo = (function (arglist__47599){
var keys = cljs.core.seq(arglist__47599);
return G__47598__delegate(keys);
});
G__47598.cljs$core$IFn$_invoke$arity$variadic = G__47598__delegate;
return G__47598;
})()
;
btset = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return btset__0.call(this);
default:
return btset__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
btset.cljs$lang$maxFixedArity = 0;
btset.cljs$lang$applyTo = btset__1.cljs$lang$applyTo;
btset.cljs$core$IFn$_invoke$arity$0 = btset__0;
btset.cljs$core$IFn$_invoke$arity$variadic = btset__1.cljs$core$IFn$_invoke$arity$variadic;
return btset;
})()
;
//# sourceMappingURL=btset.js.map