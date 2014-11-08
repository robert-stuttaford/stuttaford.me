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
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t48788 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t48788 = (function (f,fn_handler,meta48789){
this.f = f;
this.fn_handler = fn_handler;
this.meta48789 = meta48789;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t48788.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t48788.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t48788";
cljs.core.async.impl.ioc_helpers.t48788.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core.async.impl.ioc-helpers/t48788");
});
cljs.core.async.impl.ioc_helpers.t48788.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t48788.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t48788.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t48788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48790){var self__ = this;
var _48790__$1 = this;return self__.meta48789;
});
cljs.core.async.impl.ioc_helpers.t48788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48790,meta48789__$1){var self__ = this;
var _48790__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t48788(self__.f,self__.fn_handler,meta48789__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t48788 = (function __GT_t48788(f__$1,fn_handler__$1,meta48789){return (new cljs.core.async.impl.ioc_helpers.t48788(f__$1,fn_handler__$1,meta48789));
});
}
return (new cljs.core.async.impl.ioc_helpers.t48788(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e48792){if((e48792 instanceof Object))
{var ex = e48792;cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
throw ex;
} else
{throw e48792;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){var statearr_48796_48799 = state;(statearr_48796_48799[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_48796_48799[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4124__auto__))
{var cb = temp__4124__auto__;var statearr_48797_48800 = state;(statearr_48797_48800[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__48798 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48798) : cljs.core.deref.call(null,G__48798));
})());
(statearr_48797_48800[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (){var statearr_48804_48807 = state;(statearr_48804_48807[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_48804_48807[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4124__auto__))
{var cb = temp__4124__auto__;var statearr_48805_48808 = state;(statearr_48805_48808[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__48806 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48806) : cljs.core.deref.call(null,G__48806));
})());
(statearr_48805_48808[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__48809){var map__48818 = p__48809;var map__48818__$1 = ((cljs.core.seq_QMARK_(map__48818))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48818):map__48818);var opts = map__48818__$1;var statearr_48819_48826 = state;(statearr_48819_48826[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = (function (){var G__48820 = ((function (map__48818,map__48818__$1,opts){
return (function (val){var statearr_48823_48827 = state;(statearr_48823_48827[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__48818,map__48818__$1,opts))
;var G__48821 = ports;var G__48822 = opts;return (cljs.core.async.do_alts.cljs$core$IFn$_invoke$arity$3 ? cljs.core.async.do_alts.cljs$core$IFn$_invoke$arity$3(G__48820,G__48821,G__48822) : cljs.core.async.do_alts.call(null,G__48820,G__48821,G__48822));
})();if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_48824_48828 = state;(statearr_48824_48828[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__48825 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48825) : cljs.core.deref.call(null,G__48825));
})());
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__48809 = null;if (arguments.length > 3) {
  p__48809 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__48809);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__48829){
var state = cljs.core.first(arglist__48829);
arglist__48829 = cljs.core.next(arglist__48829);
var cont_block = cljs.core.first(arglist__48829);
arglist__48829 = cljs.core.next(arglist__48829);
var ports = cljs.core.first(arglist__48829);
var p__48809 = cljs.core.rest(arglist__48829);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__48809);
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20771__auto__,k__20772__auto__){var self__ = this;
var this__20771__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20771__auto____$1,k__20772__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20773__auto__,k48831,else__20774__auto__){var self__ = this;
var this__20773__auto____$1 = this;var G__48833 = (((k48831 instanceof cljs.core.Keyword))?k48831.fqn:null);switch (G__48833) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48831,else__20774__auto__);

}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20785__auto__,writer__20786__auto__,opts__20787__auto__){var self__ = this;
var this__20785__auto____$1 = this;var pr_pair__20788__auto__ = ((function (this__20785__auto____$1){
return (function (keyval__20789__auto__){return cljs.core.pr_sequential_writer(writer__20786__auto__,cljs.core.pr_writer,""," ","",opts__20787__auto__,keyval__20789__auto__);
});})(this__20785__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20786__auto__,pr_pair__20788__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__20787__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",832982472),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",-1597069226),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20769__auto__){var self__ = this;
var this__20769__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20765__auto__){var self__ = this;
var this__20765__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20775__auto__){var self__ = this;
var this__20775__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20766__auto__){var self__ = this;
var this__20766__auto____$1 = this;var h__20393__auto__ = self__.__hash;if(!((h__20393__auto__ == null)))
{return h__20393__auto__;
} else
{var h__20393__auto____$1 = cljs.core.hash_imap(this__20766__auto____$1);self__.__hash = h__20393__auto____$1;
return h__20393__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20767__auto__,other__20768__auto__){var self__ = this;
var this__20767__auto____$1 = this;if(cljs.core.truth_((function (){var and__19564__auto__ = other__20768__auto__;if(cljs.core.truth_(and__19564__auto__))
{return ((this__20767__auto____$1.constructor === other__20768__auto__.constructor)) && (cljs.core.equiv_map(this__20767__auto____$1,other__20768__auto__));
} else
{return and__19564__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20780__auto__,k__20781__auto__){var self__ = this;
var this__20780__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),null,new cljs.core.Keyword(null,"prev","prev",-1597069226),null,new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),null], null), null),k__20781__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20780__auto____$1),self__.__meta),k__20781__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20781__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20778__auto__,k__20779__auto__,G__48830){var self__ = this;
var this__20778__auto____$1 = this;var pred__48834 = cljs.core.keyword_identical_QMARK_;var expr__48835 = k__20779__auto__;if(cljs.core.truth_((function (){var G__48837 = new cljs.core.Keyword(null,"catch-block","catch-block",1175212748);var G__48838 = expr__48835;return (pred__48834.cljs$core$IFn$_invoke$arity$2 ? pred__48834.cljs$core$IFn$_invoke$arity$2(G__48837,G__48838) : pred__48834.call(null,G__48837,G__48838));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__48830,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__48839 = new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795);var G__48840 = expr__48835;return (pred__48834.cljs$core$IFn$_invoke$arity$2 ? pred__48834.cljs$core$IFn$_invoke$arity$2(G__48839,G__48840) : pred__48834.call(null,G__48839,G__48840));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__48830,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__48841 = new cljs.core.Keyword(null,"finally-block","finally-block",832982472);var G__48842 = expr__48835;return (pred__48834.cljs$core$IFn$_invoke$arity$2 ? pred__48834.cljs$core$IFn$_invoke$arity$2(G__48841,G__48842) : pred__48834.call(null,G__48841,G__48842));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__48830,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__48843 = new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850);var G__48844 = expr__48835;return (pred__48834.cljs$core$IFn$_invoke$arity$2 ? pred__48834.cljs$core$IFn$_invoke$arity$2(G__48843,G__48844) : pred__48834.call(null,G__48843,G__48844));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__48830,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__48845 = new cljs.core.Keyword(null,"prev","prev",-1597069226);var G__48846 = expr__48835;return (pred__48834.cljs$core$IFn$_invoke$arity$2 ? pred__48834.cljs$core$IFn$_invoke$arity$2(G__48845,G__48846) : pred__48834.call(null,G__48845,G__48846));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__48830,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20779__auto__,G__48830),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20783__auto__){var self__ = this;
var this__20783__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",832982472),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",-1597069226),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20770__auto__,G__48830){var self__ = this;
var this__20770__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__48830,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20776__auto__,entry__20777__auto__){var self__ = this;
var this__20776__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20777__auto__))
{return cljs.core._assoc(this__20776__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20777__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20777__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20776__auto____$1,entry__20777__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__20805__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__20805__auto__,writer__20806__auto__){return cljs.core._write(writer__20806__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__48832){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",1175212748).cljs$core$IFn$_invoke$arity$1(G__48832),new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795).cljs$core$IFn$_invoke$arity$1(G__48832),new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(G__48832),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850).cljs$core$IFn$_invoke$arity$1(G__48832),new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(G__48832),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48832,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),cljs.core.array_seq([new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),new cljs.core.Keyword(null,"finally-block","finally-block",832982472),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),new cljs.core.Keyword(null,"prev","prev",-1597069226)], 0))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_48849 = state;(statearr_48849[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_48849;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",1175212748).cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795).cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__19564__auto__ = exception;if(cljs.core.truth_(and__19564__auto__))
{return cljs.core.not(exception_frame);
} else
{return and__19564__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__19564__auto__ = exception;if(cljs.core.truth_(and__19564__auto__))
{var and__19564__auto____$1 = catch_block;if(cljs.core.truth_(and__19564__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__19564__auto____$1;
}
} else
{return and__19564__auto__;
}
})()))
{var statearr_48855 = state;(statearr_48855[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_48855[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_48855[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_48855[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),null,cljs.core.array_seq([new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),null], 0)));
return statearr_48855;
} else
{if(cljs.core.truth_((function (){var and__19564__auto__ = exception;if(cljs.core.truth_(and__19564__auto__))
{return (cljs.core.not(catch_block)) && (cljs.core.not(new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__19564__auto__;
}
})()))
{var statearr_48856_48860 = state;(statearr_48856_48860[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__48861 = state;
state = G__48861;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__19564__auto__ = exception;if(cljs.core.truth_(and__19564__auto__))
{var and__19564__auto____$1 = cljs.core.not(catch_block);if(and__19564__auto____$1)
{return new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__19564__auto____$1;
}
} else
{return and__19564__auto__;
}
})()))
{var statearr_48857 = state;(statearr_48857[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_48857[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null));
return statearr_48857;
} else
{if(cljs.core.truth_((function (){var and__19564__auto__ = cljs.core.not(exception);if(and__19564__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__19564__auto__;
}
})()))
{var statearr_48858 = state;(statearr_48858[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_48858[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null));
return statearr_48858;
} else
{if((cljs.core.not(exception)) && (cljs.core.not(new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_48859 = state;(statearr_48859[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_48859[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_48859;
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