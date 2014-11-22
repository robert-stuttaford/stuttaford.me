goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),new cljs.core.Keyword(null,"finished","finished",-1018867731));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t40110 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t40110 = (function (f,fn_handler,meta40111){
this.f = f;
this.fn_handler = fn_handler;
this.meta40111 = meta40111;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t40110.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t40110.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t40110";
cljs.core.async.impl.ioc_helpers.t40110.cljs$lang$ctorPrWriter = (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"cljs.core.async.impl.ioc-helpers/t40110");
});
cljs.core.async.impl.ioc_helpers.t40110.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t40110.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t40110.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t40110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40112){var self__ = this;
var _40112__$1 = this;return self__.meta40111;
});
cljs.core.async.impl.ioc_helpers.t40110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40112,meta40111__$1){var self__ = this;
var _40112__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t40110(self__.f,self__.fn_handler,meta40111__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t40110 = (function __GT_t40110(f__$1,fn_handler__$1,meta40111){return (new cljs.core.async.impl.ioc_helpers.t40110(f__$1,fn_handler__$1,meta40111));
});
}
return (new cljs.core.async.impl.ioc_helpers.t40110(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e40114){if((e40114 instanceof Object))
{var ex = e40114;cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
throw ex;
} else
{throw e40114;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){var statearr_40118_40121 = state;(statearr_40118_40121[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_40118_40121[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4124__auto__))
{var cb = temp__4124__auto__;var statearr_40119_40122 = state;(statearr_40119_40122[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__40120 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40120) : cljs.core.deref.call(null,G__40120));
})());
(statearr_40119_40122[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (){var statearr_40126_40129 = state;(statearr_40126_40129[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_40126_40129[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4124__auto__))
{var cb = temp__4124__auto__;var statearr_40127_40130 = state;(statearr_40127_40130[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__40128 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40128) : cljs.core.deref.call(null,G__40128));
})());
(statearr_40127_40130[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__40131){var map__40140 = p__40131;var map__40140__$1 = ((cljs.core.seq_QMARK_(map__40140))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40140):map__40140);var opts = map__40140__$1;var statearr_40141_40148 = state;(statearr_40141_40148[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = (function (){var G__40142 = ((function (map__40140,map__40140__$1,opts){
return (function (val){var statearr_40145_40149 = state;(statearr_40145_40149[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__40140,map__40140__$1,opts))
;var G__40143 = ports;var G__40144 = opts;return (cljs.core.async.do_alts.cljs$core$IFn$_invoke$arity$3 ? cljs.core.async.do_alts.cljs$core$IFn$_invoke$arity$3(G__40142,G__40143,G__40144) : cljs.core.async.do_alts.call(null,G__40142,G__40143,G__40144));
})();if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_40146_40150 = state;(statearr_40146_40150[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__40147 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40147) : cljs.core.deref.call(null,G__40147));
})());
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__40131 = null;if (arguments.length > 3) {
  p__40131 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__40131);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__40151){
var state = cljs.core.first(arglist__40151);
arglist__40151 = cljs.core.next(arglist__40151);
var cont_block = cljs.core.first(arglist__40151);
arglist__40151 = cljs.core.next(arglist__40151);
var ports = cljs.core.first(arglist__40151);
var p__40131 = cljs.core.rest(arglist__40151);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__40131);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){return null;
});})(c))
));
}
c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20650__auto__,k__20651__auto__){var self__ = this;
var this__20650__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20650__auto____$1,k__20651__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20652__auto__,k40153,else__20653__auto__){var self__ = this;
var this__20652__auto____$1 = this;var G__40155 = (((k40153 instanceof cljs.core.Keyword))?k40153.fqn:null);switch (G__40155) {
case "prev":
return self__.prev;

break;
case "continue-block":
return self__.continue_block;

break;
case "finally-block":
return self__.finally_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "catch-block":
return self__.catch_block;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40153,else__20653__auto__);

}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20664__auto__,writer__20665__auto__,opts__20666__auto__){var self__ = this;
var this__20664__auto____$1 = this;var pr_pair__20667__auto__ = ((function (this__20664__auto____$1){
return (function (keyval__20668__auto__){return cljs.core.pr_sequential_writer(writer__20665__auto__,cljs.core.pr_writer,""," ","",opts__20666__auto__,keyval__20668__auto__);
});})(this__20664__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20665__auto__,pr_pair__20667__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__20666__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",832982472),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",-1597069226),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20648__auto__){var self__ = this;
var this__20648__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20644__auto__){var self__ = this;
var this__20644__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20654__auto__){var self__ = this;
var this__20654__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20645__auto__){var self__ = this;
var this__20645__auto____$1 = this;var h__20280__auto__ = self__.__hash;if(!((h__20280__auto__ == null)))
{return h__20280__auto__;
} else
{var h__20280__auto____$1 = cljs.core.hash_imap(this__20645__auto____$1);self__.__hash = h__20280__auto____$1;
return h__20280__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20646__auto__,other__20647__auto__){var self__ = this;
var this__20646__auto____$1 = this;if(cljs.core.truth_((function (){var and__19670__auto__ = other__20647__auto__;if(cljs.core.truth_(and__19670__auto__))
{return ((this__20646__auto____$1.constructor === other__20647__auto__.constructor)) && (cljs.core.equiv_map(this__20646__auto____$1,other__20647__auto__));
} else
{return and__19670__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20659__auto__,k__20660__auto__){var self__ = this;
var this__20659__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),null,new cljs.core.Keyword(null,"prev","prev",-1597069226),null,new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),null], null), null),k__20660__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20659__auto____$1),self__.__meta),k__20660__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20660__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20657__auto__,k__20658__auto__,G__40152){var self__ = this;
var this__20657__auto____$1 = this;var pred__40156 = cljs.core.keyword_identical_QMARK_;var expr__40157 = k__20658__auto__;if(cljs.core.truth_((function (){var G__40159 = new cljs.core.Keyword(null,"catch-block","catch-block",1175212748);var G__40160 = expr__40157;return (pred__40156.cljs$core$IFn$_invoke$arity$2 ? pred__40156.cljs$core$IFn$_invoke$arity$2(G__40159,G__40160) : pred__40156.call(null,G__40159,G__40160));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__40152,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__40161 = new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795);var G__40162 = expr__40157;return (pred__40156.cljs$core$IFn$_invoke$arity$2 ? pred__40156.cljs$core$IFn$_invoke$arity$2(G__40161,G__40162) : pred__40156.call(null,G__40161,G__40162));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__40152,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__40163 = new cljs.core.Keyword(null,"finally-block","finally-block",832982472);var G__40164 = expr__40157;return (pred__40156.cljs$core$IFn$_invoke$arity$2 ? pred__40156.cljs$core$IFn$_invoke$arity$2(G__40163,G__40164) : pred__40156.call(null,G__40163,G__40164));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__40152,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__40165 = new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850);var G__40166 = expr__40157;return (pred__40156.cljs$core$IFn$_invoke$arity$2 ? pred__40156.cljs$core$IFn$_invoke$arity$2(G__40165,G__40166) : pred__40156.call(null,G__40165,G__40166));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__40152,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__40167 = new cljs.core.Keyword(null,"prev","prev",-1597069226);var G__40168 = expr__40157;return (pred__40156.cljs$core$IFn$_invoke$arity$2 ? pred__40156.cljs$core$IFn$_invoke$arity$2(G__40167,G__40168) : pred__40156.call(null,G__40167,G__40168));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__40152,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20658__auto__,G__40152),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20662__auto__){var self__ = this;
var this__20662__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",832982472),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",-1597069226),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20649__auto__,G__40152){var self__ = this;
var this__20649__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__40152,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20655__auto__,entry__20656__auto__){var self__ = this;
var this__20655__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20656__auto__))
{return cljs.core._assoc(this__20655__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20656__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20655__auto____$1,entry__20656__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__20714__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__20714__auto__,writer__20715__auto__){return cljs.core._write(writer__20715__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__40154){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",1175212748).cljs$core$IFn$_invoke$arity$1(G__40154),new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795).cljs$core$IFn$_invoke$arity$1(G__40154),new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(G__40154),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850).cljs$core$IFn$_invoke$arity$1(G__40154),new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(G__40154),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40154,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),cljs.core.array_seq([new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),new cljs.core.Keyword(null,"finally-block","finally-block",832982472),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),new cljs.core.Keyword(null,"prev","prev",-1597069226)], 0))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_40171 = state;(statearr_40171[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_40171;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",1175212748).cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795).cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__19670__auto__ = exception;if(cljs.core.truth_(and__19670__auto__))
{return cljs.core.not(exception_frame);
} else
{return and__19670__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__19670__auto__ = exception;if(cljs.core.truth_(and__19670__auto__))
{var and__19670__auto____$1 = catch_block;if(cljs.core.truth_(and__19670__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__19670__auto____$1;
}
} else
{return and__19670__auto__;
}
})()))
{var statearr_40177 = state;(statearr_40177[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_40177[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_40177[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_40177[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),null,cljs.core.array_seq([new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),null], 0)));
return statearr_40177;
} else
{if(cljs.core.truth_((function (){var and__19670__auto__ = exception;if(cljs.core.truth_(and__19670__auto__))
{return (cljs.core.not(catch_block)) && (cljs.core.not(new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__19670__auto__;
}
})()))
{var statearr_40178_40182 = state;(statearr_40178_40182[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__40183 = state;
state = G__40183;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__19670__auto__ = exception;if(cljs.core.truth_(and__19670__auto__))
{var and__19670__auto____$1 = cljs.core.not(catch_block);if(and__19670__auto____$1)
{return new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__19670__auto____$1;
}
} else
{return and__19670__auto__;
}
})()))
{var statearr_40179 = state;(statearr_40179[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_40179[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null));
return statearr_40179;
} else
{if(cljs.core.truth_((function (){var and__19670__auto__ = cljs.core.not(exception);if(and__19670__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__19670__auto__;
}
})()))
{var statearr_40180 = state;(statearr_40180[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_40180[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null));
return statearr_40180;
} else
{if((cljs.core.not(exception)) && (cljs.core.not(new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_40181 = state;(statearr_40181[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_40181[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_40181;
} else
{throw (new Error(("Assert failed: No matching clause\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0))))));


}
}
}
}
}
}
break;
}
});
//# sourceMappingURL=ioc_helpers.js.map