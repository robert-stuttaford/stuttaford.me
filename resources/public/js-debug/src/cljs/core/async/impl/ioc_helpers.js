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
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t31339 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t31339 = (function (f,fn_handler,meta31340){
this.f = f;
this.fn_handler = fn_handler;
this.meta31340 = meta31340;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t31339.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t31339.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t31339";
cljs.core.async.impl.ioc_helpers.t31339.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core.async.impl.ioc-helpers/t31339");
});
cljs.core.async.impl.ioc_helpers.t31339.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t31339.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t31339.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t31339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31341){var self__ = this;
var _31341__$1 = this;return self__.meta31340;
});
cljs.core.async.impl.ioc_helpers.t31339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31341,meta31340__$1){var self__ = this;
var _31341__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t31339(self__.f,self__.fn_handler,meta31340__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t31339 = (function __GT_t31339(f__$1,fn_handler__$1,meta31340){return (new cljs.core.async.impl.ioc_helpers.t31339(f__$1,fn_handler__$1,meta31340));
});
}
return (new cljs.core.async.impl.ioc_helpers.t31339(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e31343){if((e31343 instanceof Object))
{var ex = e31343;cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
throw ex;
} else
{throw e31343;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){var statearr_31347_31350 = state;(statearr_31347_31350[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_31347_31350[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4124__auto__))
{var cb = temp__4124__auto__;var statearr_31348_31351 = state;(statearr_31348_31351[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__31349 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31349) : cljs.core.deref.call(null,G__31349));
})());
(statearr_31348_31351[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (){var statearr_31355_31358 = state;(statearr_31355_31358[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_31355_31358[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4124__auto__))
{var cb = temp__4124__auto__;var statearr_31356_31359 = state;(statearr_31356_31359[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__31357 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31357) : cljs.core.deref.call(null,G__31357));
})());
(statearr_31356_31359[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__31360){var map__31369 = p__31360;var map__31369__$1 = ((cljs.core.seq_QMARK_(map__31369))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31369):map__31369);var opts = map__31369__$1;var statearr_31370_31377 = state;(statearr_31370_31377[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = (function (){var G__31371 = ((function (map__31369,map__31369__$1,opts){
return (function (val){var statearr_31374_31378 = state;(statearr_31374_31378[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__31369,map__31369__$1,opts))
;var G__31372 = ports;var G__31373 = opts;return (cljs.core.async.do_alts.cljs$core$IFn$_invoke$arity$3 ? cljs.core.async.do_alts.cljs$core$IFn$_invoke$arity$3(G__31371,G__31372,G__31373) : cljs.core.async.do_alts.call(null,G__31371,G__31372,G__31373));
})();if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_31375_31379 = state;(statearr_31375_31379[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__31376 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31376) : cljs.core.deref.call(null,G__31376));
})());
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__31360 = null;if (arguments.length > 3) {
  p__31360 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__31360);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__31380){
var state = cljs.core.first(arglist__31380);
arglist__31380 = cljs.core.next(arglist__31380);
var cont_block = cljs.core.first(arglist__31380);
arglist__31380 = cljs.core.next(arglist__31380);
var ports = cljs.core.first(arglist__31380);
var p__31360 = cljs.core.rest(arglist__31380);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__31360);
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20410__auto__,k__20411__auto__){var self__ = this;
var this__20410__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20410__auto____$1,k__20411__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20413__auto__,k31382,else__20414__auto__){var self__ = this;
var this__20413__auto____$1 = this;var G__31384 = (((k31382 instanceof cljs.core.Keyword))?k31382.fqn:null);switch (G__31384) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31382,else__20414__auto__);

}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20427__auto__,writer__20428__auto__,opts__20429__auto__){var self__ = this;
var this__20427__auto____$1 = this;var pr_pair__20430__auto__ = ((function (this__20427__auto____$1){
return (function (keyval__20431__auto__){return cljs.core.pr_sequential_writer(writer__20428__auto__,cljs.core.pr_writer,""," ","",opts__20429__auto__,keyval__20431__auto__);
});})(this__20427__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20428__auto__,pr_pair__20430__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__20429__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",832982472),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",-1597069226),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20408__auto__){var self__ = this;
var this__20408__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20404__auto__){var self__ = this;
var this__20404__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20415__auto__){var self__ = this;
var this__20415__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20405__auto__){var self__ = this;
var this__20405__auto____$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_imap(this__20405__auto____$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20406__auto__,other__20407__auto__){var self__ = this;
var this__20406__auto____$1 = this;if(cljs.core.truth_((function (){var and__19255__auto__ = other__20407__auto__;if(cljs.core.truth_(and__19255__auto__))
{return ((this__20406__auto____$1.constructor === other__20407__auto__.constructor)) && (cljs.core.equiv_map(this__20406__auto____$1,other__20407__auto__));
} else
{return and__19255__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20420__auto__,k__20421__auto__){var self__ = this;
var this__20420__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),null,new cljs.core.Keyword(null,"prev","prev",-1597069226),null,new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),null], null), null),k__20421__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20420__auto____$1),self__.__meta),k__20421__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20421__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20418__auto__,k__20419__auto__,G__31381){var self__ = this;
var this__20418__auto____$1 = this;var pred__31385 = cljs.core.keyword_identical_QMARK_;var expr__31386 = k__20419__auto__;if(cljs.core.truth_((function (){var G__31388 = new cljs.core.Keyword(null,"catch-block","catch-block",1175212748);var G__31389 = expr__31386;return (pred__31385.cljs$core$IFn$_invoke$arity$2 ? pred__31385.cljs$core$IFn$_invoke$arity$2(G__31388,G__31389) : pred__31385.call(null,G__31388,G__31389));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__31381,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__31390 = new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795);var G__31391 = expr__31386;return (pred__31385.cljs$core$IFn$_invoke$arity$2 ? pred__31385.cljs$core$IFn$_invoke$arity$2(G__31390,G__31391) : pred__31385.call(null,G__31390,G__31391));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__31381,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__31392 = new cljs.core.Keyword(null,"finally-block","finally-block",832982472);var G__31393 = expr__31386;return (pred__31385.cljs$core$IFn$_invoke$arity$2 ? pred__31385.cljs$core$IFn$_invoke$arity$2(G__31392,G__31393) : pred__31385.call(null,G__31392,G__31393));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__31381,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__31394 = new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850);var G__31395 = expr__31386;return (pred__31385.cljs$core$IFn$_invoke$arity$2 ? pred__31385.cljs$core$IFn$_invoke$arity$2(G__31394,G__31395) : pred__31385.call(null,G__31394,G__31395));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__31381,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__31396 = new cljs.core.Keyword(null,"prev","prev",-1597069226);var G__31397 = expr__31386;return (pred__31385.cljs$core$IFn$_invoke$arity$2 ? pred__31385.cljs$core$IFn$_invoke$arity$2(G__31396,G__31397) : pred__31385.call(null,G__31396,G__31397));
})()))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__31381,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20419__auto__,G__31381),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20423__auto__){var self__ = this;
var this__20423__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",832982472),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",-1597069226),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20409__auto__,G__31381){var self__ = this;
var this__20409__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__31381,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20416__auto__,entry__20417__auto__){var self__ = this;
var this__20416__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20417__auto__))
{return cljs.core._assoc(this__20416__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20417__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20416__auto____$1,entry__20417__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__20494__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__20494__auto__,writer__20495__auto__){return cljs.core._write(writer__20495__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__31383){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",1175212748).cljs$core$IFn$_invoke$arity$1(G__31383),new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795).cljs$core$IFn$_invoke$arity$1(G__31383),new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(G__31383),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850).cljs$core$IFn$_invoke$arity$1(G__31383),new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(G__31383),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31383,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),cljs.core.array_seq([new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),new cljs.core.Keyword(null,"finally-block","finally-block",832982472),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),new cljs.core.Keyword(null,"prev","prev",-1597069226)], 0))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_31400 = state;(statearr_31400[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_31400;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",1175212748).cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795).cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__19255__auto__ = exception;if(cljs.core.truth_(and__19255__auto__))
{return cljs.core.not(exception_frame);
} else
{return and__19255__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__19255__auto__ = exception;if(cljs.core.truth_(and__19255__auto__))
{var and__19255__auto____$1 = catch_block;if(cljs.core.truth_(and__19255__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__19255__auto____$1;
}
} else
{return and__19255__auto__;
}
})()))
{var statearr_31406 = state;(statearr_31406[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_31406[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_31406[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_31406[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),null,cljs.core.array_seq([new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),null], 0)));
return statearr_31406;
} else
{if(cljs.core.truth_((function (){var and__19255__auto__ = exception;if(cljs.core.truth_(and__19255__auto__))
{return (cljs.core.not(catch_block)) && (cljs.core.not(new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__19255__auto__;
}
})()))
{var statearr_31407_31411 = state;(statearr_31407_31411[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__31412 = state;
state = G__31412;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__19255__auto__ = exception;if(cljs.core.truth_(and__19255__auto__))
{var and__19255__auto____$1 = cljs.core.not(catch_block);if(and__19255__auto____$1)
{return new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__19255__auto____$1;
}
} else
{return and__19255__auto__;
}
})()))
{var statearr_31408 = state;(statearr_31408[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_31408[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null));
return statearr_31408;
} else
{if(cljs.core.truth_((function (){var and__19255__auto__ = cljs.core.not(exception);if(and__19255__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__19255__auto__;
}
})()))
{var statearr_31409 = state;(statearr_31409[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_31409[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null));
return statearr_31409;
} else
{if((cljs.core.not(exception)) && (cljs.core.not(new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_31410 = state;(statearr_31410[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_31410[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_31410;
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