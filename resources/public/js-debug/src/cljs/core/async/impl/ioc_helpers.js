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
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t41973 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t41973 = (function (f,fn_handler,meta41974){
this.f = f;
this.fn_handler = fn_handler;
this.meta41974 = meta41974;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t41973.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t41973.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t41973";
cljs.core.async.impl.ioc_helpers.t41973.cljs$lang$ctorPrWriter = (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"cljs.core.async.impl.ioc-helpers/t41973");
});
cljs.core.async.impl.ioc_helpers.t41973.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t41973.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t41973.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t41973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41975){var self__ = this;
var _41975__$1 = this;return self__.meta41974;
});
cljs.core.async.impl.ioc_helpers.t41973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41975,meta41974__$1){var self__ = this;
var _41975__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t41973(self__.f,self__.fn_handler,meta41974__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t41973 = (function __GT_t41973(f__$1,fn_handler__$1,meta41974){return (new cljs.core.async.impl.ioc_helpers.t41973(f__$1,fn_handler__$1,meta41974));
});
}
return (new cljs.core.async.impl.ioc_helpers.t41973(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e41977){if((e41977 instanceof Object))
{var ex = e41977;cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
throw ex;
} else
{throw e41977;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){var statearr_41981_41984 = state;(statearr_41981_41984[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_41981_41984[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4124__auto__))
{var cb = temp__4124__auto__;var statearr_41982_41985 = state;(statearr_41982_41985[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__41983 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41983) : cljs.core.deref.call(null,G__41983));
})());
(statearr_41982_41985[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (){var statearr_41989_41992 = state;(statearr_41989_41992[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_41989_41992[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4124__auto__))
{var cb = temp__4124__auto__;var statearr_41990_41993 = state;(statearr_41990_41993[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__41991 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41991) : cljs.core.deref.call(null,G__41991));
})());
(statearr_41990_41993[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__41994){var map__42003 = p__41994;var map__42003__$1 = ((cljs.core.seq_QMARK_(map__42003))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42003):map__42003);var opts = map__42003__$1;var statearr_42004_42011 = state;(statearr_42004_42011[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = (function (){var G__42005 = ((function (map__42003,map__42003__$1,opts){
return (function (val){var statearr_42008_42012 = state;(statearr_42008_42012[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__42003,map__42003__$1,opts))
;var G__42006 = ports;var G__42007 = opts;return (cljs.core.async.do_alts.cljs$core$IFn$_invoke$arity$3 ? cljs.core.async.do_alts.cljs$core$IFn$_invoke$arity$3(G__42005,G__42006,G__42007) : cljs.core.async.do_alts.call(null,G__42005,G__42006,G__42007));
})();if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_42009_42013 = state;(statearr_42009_42013[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__42010 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42010) : cljs.core.deref.call(null,G__42010));
})());
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__41994 = null;if (arguments.length > 3) {
  p__41994 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__41994);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__42014){
var state = cljs.core.first(arglist__42014);
arglist__42014 = cljs.core.next(arglist__42014);
var cont_block = cljs.core.first(arglist__42014);
arglist__42014 = cljs.core.next(arglist__42014);
var ports = cljs.core.first(arglist__42014);
var p__41994 = cljs.core.rest(arglist__42014);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__41994);
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20472__auto__,k__20473__auto__){var self__ = this;
var this__20472__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20472__auto____$1,k__20473__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20474__auto__,k42016,else__20475__auto__){var self__ = this;
var this__20474__auto____$1 = this;var G__42018 = (((k42016 instanceof cljs.core.Keyword))?k42016.fqn:null);switch (G__42018) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42016,else__20475__auto__);

}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20486__auto__,writer__20487__auto__,opts__20488__auto__){var self__ = this;
var this__20486__auto____$1 = this;var pr_pair__20489__auto__ = ((function (this__20486__auto____$1){
return (function (keyval__20490__auto__){return cljs.core.pr_sequential_writer(writer__20487__auto__,cljs.core.pr_writer,""," ","",opts__20488__auto__,keyval__20490__auto__);
});})(this__20486__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20487__auto__,pr_pair__20489__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__20488__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",832982472),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",-1597069226),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20470__auto__){var self__ = this;
var this__20470__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20466__auto__){var self__ = this;
var this__20466__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20476__auto__){var self__ = this;
var this__20476__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20467__auto__){var self__ = this;
var this__20467__auto____$1 = this;var h__20094__auto__ = self__.__hash;if(!((h__20094__auto__ == null)))
{return h__20094__auto__;
} else
{var h__20094__auto____$1 = cljs.core.hash_imap(this__20467__auto____$1);self__.__hash = h__20094__auto____$1;
return h__20094__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20468__auto__,other__20469__auto__){var self__ = this;
var this__20468__auto____$1 = this;if(cljs.core.truth_((function (){var and__19277__auto__ = other__20469__auto__;if(cljs.core.truth_(and__19277__auto__))
{return ((this__20468__auto____$1.constructor === other__20469__auto__.constructor)) && (cljs.core.equiv_map(this__20468__auto____$1,other__20469__auto__));
} else
{return and__19277__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20481__auto__,k__20482__auto__){var self__ = this;
var this__20481__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),null,new cljs.core.Keyword(null,"prev","prev",-1597069226),null,new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),null], null), null),k__20482__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20481__auto____$1),self__.__meta),k__20482__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20482__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20479__auto__,k__20480__auto__,G__42015){var self__ = this;
var this__20479__auto____$1 = this;var pred__42019 = cljs.core.keyword_identical_QMARK_;var expr__42020 = k__20480__auto__;if(cljs.core.truth_((function (){var G__42022 = new cljs.core.Keyword(null,"catch-block","catch-block",1175212748);var G__42023 = expr__42020;return (pred__42019.cljs$core$IFn$_invoke$arity$2 ? pred__42019.cljs$core$IFn$_invoke$arity$2(G__42022,G__42023) : pred__42019.call(null,G__42022,G__42023));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__42015,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__42024 = new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795);var G__42025 = expr__42020;return (pred__42019.cljs$core$IFn$_invoke$arity$2 ? pred__42019.cljs$core$IFn$_invoke$arity$2(G__42024,G__42025) : pred__42019.call(null,G__42024,G__42025));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__42015,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__42026 = new cljs.core.Keyword(null,"finally-block","finally-block",832982472);var G__42027 = expr__42020;return (pred__42019.cljs$core$IFn$_invoke$arity$2 ? pred__42019.cljs$core$IFn$_invoke$arity$2(G__42026,G__42027) : pred__42019.call(null,G__42026,G__42027));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__42015,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__42028 = new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850);var G__42029 = expr__42020;return (pred__42019.cljs$core$IFn$_invoke$arity$2 ? pred__42019.cljs$core$IFn$_invoke$arity$2(G__42028,G__42029) : pred__42019.call(null,G__42028,G__42029));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__42015,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__42030 = new cljs.core.Keyword(null,"prev","prev",-1597069226);var G__42031 = expr__42020;return (pred__42019.cljs$core$IFn$_invoke$arity$2 ? pred__42019.cljs$core$IFn$_invoke$arity$2(G__42030,G__42031) : pred__42019.call(null,G__42030,G__42031));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__42015,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20480__auto__,G__42015),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20484__auto__){var self__ = this;
var this__20484__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",832982472),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",-1597069226),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20471__auto__,G__42015){var self__ = this;
var this__20471__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__42015,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20477__auto__,entry__20478__auto__){var self__ = this;
var this__20477__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20478__auto__))
{return cljs.core._assoc(this__20477__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20478__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20477__auto____$1,entry__20478__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__20539__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__20539__auto__,writer__20540__auto__){return cljs.core._write(writer__20540__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__42017){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",1175212748).cljs$core$IFn$_invoke$arity$1(G__42017),new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795).cljs$core$IFn$_invoke$arity$1(G__42017),new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(G__42017),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850).cljs$core$IFn$_invoke$arity$1(G__42017),new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(G__42017),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42017,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),cljs.core.array_seq([new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),new cljs.core.Keyword(null,"finally-block","finally-block",832982472),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),new cljs.core.Keyword(null,"prev","prev",-1597069226)], 0))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_42034 = state;(statearr_42034[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_42034;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",1175212748).cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795).cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__19277__auto__ = exception;if(cljs.core.truth_(and__19277__auto__))
{return cljs.core.not(exception_frame);
} else
{return and__19277__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__19277__auto__ = exception;if(cljs.core.truth_(and__19277__auto__))
{var and__19277__auto____$1 = catch_block;if(cljs.core.truth_(and__19277__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__19277__auto____$1;
}
} else
{return and__19277__auto__;
}
})()))
{var statearr_42040 = state;(statearr_42040[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_42040[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_42040[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_42040[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),null,cljs.core.array_seq([new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),null], 0)));
return statearr_42040;
} else
{if(cljs.core.truth_((function (){var and__19277__auto__ = exception;if(cljs.core.truth_(and__19277__auto__))
{return (cljs.core.not(catch_block)) && (cljs.core.not(new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__19277__auto__;
}
})()))
{var statearr_42041_42045 = state;(statearr_42041_42045[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__42046 = state;
state = G__42046;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__19277__auto__ = exception;if(cljs.core.truth_(and__19277__auto__))
{var and__19277__auto____$1 = cljs.core.not(catch_block);if(and__19277__auto____$1)
{return new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__19277__auto____$1;
}
} else
{return and__19277__auto__;
}
})()))
{var statearr_42042 = state;(statearr_42042[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_42042[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null));
return statearr_42042;
} else
{if(cljs.core.truth_((function (){var and__19277__auto__ = cljs.core.not(exception);if(and__19277__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__19277__auto__;
}
})()))
{var statearr_42043 = state;(statearr_42043[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_42043[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null));
return statearr_42043;
} else
{if((cljs.core.not(exception)) && (cljs.core.not(new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_42044 = state;(statearr_42044[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_42044[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_42044;
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