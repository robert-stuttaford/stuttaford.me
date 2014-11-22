goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t40221 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40221 = (function (f,fn_handler,meta40222){
this.f = f;
this.fn_handler = fn_handler;
this.meta40222 = meta40222;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40221.cljs$lang$type = true;
cljs.core.async.t40221.cljs$lang$ctorStr = "cljs.core.async/t40221";
cljs.core.async.t40221.cljs$lang$ctorPrWriter = (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"cljs.core.async/t40221");
});
cljs.core.async.t40221.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t40221.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t40221.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t40221.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40223){var self__ = this;
var _40223__$1 = this;return self__.meta40222;
});
cljs.core.async.t40221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40223,meta40222__$1){var self__ = this;
var _40223__$1 = this;return (new cljs.core.async.t40221(self__.f,self__.fn_handler,meta40222__$1));
});
cljs.core.async.__GT_t40221 = (function __GT_t40221(f__$1,fn_handler__$1,meta40222){return (new cljs.core.async.t40221(f__$1,fn_handler__$1,meta40222));
});
}
return (new cljs.core.async.t40221(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__40225 = buff;if(G__40225)
{var bit__20770__auto__ = null;if(cljs.core.truth_((function (){var or__19687__auto__ = bit__20770__auto__;if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
} else
{return G__40225.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__40225.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__40225);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__40225);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(ret))
{var val_40236 = (function (){var G__40233 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40233) : cljs.core.deref.call(null,G__40233));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__40234_40237 = val_40236;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__40234_40237) : fn1.call(null,G__40234_40237));
} else
{cljs.core.async.impl.dispatch.run(((function (val_40236,ret){
return (function (){var G__40235 = val_40236;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__40235) : fn1.call(null,G__40235));
});})(val_40236,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.cljs$core$IFn$_invoke$arity$3(port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__19670__auto__ = ret;if(cljs.core.truth_(and__19670__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__19670__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{(fn0.cljs$core$IFn$_invoke$arity$0 ? fn0.cljs$core$IFn$_invoke$arity$0() : fn0.call(null));
} else
{cljs.core.async.impl.dispatch.run(fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__21075__auto___40245 = n;var x_40246 = (0);while(true){
if((x_40246 < n__21075__auto___40245))
{(a[x_40246] = (0));
{
var G__40247 = (x_40246 + (1));
x_40246 = G__40247;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__40248 = (i + (1));
i = G__40248;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__40256 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__40256) : cljs.core.atom.call(null,G__40256));
})();if(typeof cljs.core.async.t40257 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40257 = (function (flag,alt_flag,meta40258){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta40258 = meta40258;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40257.cljs$lang$type = true;
cljs.core.async.t40257.cljs$lang$ctorStr = "cljs.core.async/t40257";
cljs.core.async.t40257.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"cljs.core.async/t40257");
});})(flag))
;
cljs.core.async.t40257.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t40257.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__40260 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40260) : cljs.core.deref.call(null,G__40260));
});})(flag))
;
cljs.core.async.t40257.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__40261_40263 = self__.flag;var G__40262_40264 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__40261_40263,G__40262_40264) : cljs.core.reset_BANG_.call(null,G__40261_40263,G__40262_40264));
return true;
});})(flag))
;
cljs.core.async.t40257.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40259){var self__ = this;
var _40259__$1 = this;return self__.meta40258;
});})(flag))
;
cljs.core.async.t40257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40259,meta40258__$1){var self__ = this;
var _40259__$1 = this;return (new cljs.core.async.t40257(self__.flag,self__.alt_flag,meta40258__$1));
});})(flag))
;
cljs.core.async.__GT_t40257 = ((function (flag){
return (function __GT_t40257(flag__$1,alt_flag__$1,meta40258){return (new cljs.core.async.t40257(flag__$1,alt_flag__$1,meta40258));
});})(flag))
;
}
return (new cljs.core.async.t40257(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t40268 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40268 = (function (cb,flag,alt_handler,meta40269){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta40269 = meta40269;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40268.cljs$lang$type = true;
cljs.core.async.t40268.cljs$lang$ctorStr = "cljs.core.async/t40268";
cljs.core.async.t40268.cljs$lang$ctorPrWriter = (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"cljs.core.async/t40268");
});
cljs.core.async.t40268.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t40268.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t40268.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t40268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40270){var self__ = this;
var _40270__$1 = this;return self__.meta40269;
});
cljs.core.async.t40268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40270,meta40269__$1){var self__ = this;
var _40270__$1 = this;return (new cljs.core.async.t40268(self__.cb,self__.flag,self__.alt_handler,meta40269__$1));
});
cljs.core.async.__GT_t40268 = (function __GT_t40268(cb__$1,flag__$1,alt_handler__$1,meta40269){return (new cljs.core.async.t40268(cb__$1,flag__$1,alt_handler__$1,meta40269));
});
}
return (new cljs.core.async.t40268(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__40277 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__40277) : port.call(null,G__40277));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__40278 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__40278) : port.call(null,G__40278));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){var G__40279 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__40279) : fret.call(null,G__40279));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40271_SHARP_){var G__40280 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40271_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__40280) : fret.call(null,G__40280));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40281 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40281) : cljs.core.deref.call(null,G__40281));
})(),(function (){var or__19687__auto__ = wport;if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__40282 = (i + (1));
i = G__40282;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__19687__auto__ = ret;if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__19670__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__19670__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__19670__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__40283){var map__40285 = p__40283;var map__40285__$1 = ((cljs.core.seq_QMARK_(map__40285))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40285):map__40285);var opts = map__40285__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

};
var alts_BANG_ = function (ports,var_args){
var p__40283 = null;if (arguments.length > 1) {
  p__40283 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__40283);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__40286){
var ports = cljs.core.first(arglist__40286);
var p__40283 = cljs.core.rest(arglist__40286);
return alts_BANG___delegate(ports,p__40283);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t40300 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40300 = (function (ch,f,map_LT_,meta40301){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta40301 = meta40301;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40300.cljs$lang$type = true;
cljs.core.async.t40300.cljs$lang$ctorStr = "cljs.core.async/t40300";
cljs.core.async.t40300.cljs$lang$ctorPrWriter = (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"cljs.core.async/t40300");
});
cljs.core.async.t40300.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t40300.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t40300.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t40300.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t40303 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40303 = (function (fn1,_,meta40301,ch,f,map_LT_,meta40304){
this.fn1 = fn1;
this._ = _;
this.meta40301 = meta40301;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta40304 = meta40304;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40303.cljs$lang$type = true;
cljs.core.async.t40303.cljs$lang$ctorStr = "cljs.core.async/t40303";
cljs.core.async.t40303.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"cljs.core.async/t40303");
});})(___$1))
;
cljs.core.async.t40303.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t40303.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t40303.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var G__40306 = self__.fn1;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(G__40306) : cljs.core.async.impl.protocols.lock_id.call(null,G__40306));
});})(___$1))
;
cljs.core.async.t40303.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__40287_SHARP_){var G__40307 = (((p1__40287_SHARP_ == null))?null:(function (){var G__40308 = p1__40287_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__40308) : self__.f.call(null,G__40308));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__40307) : f1.call(null,G__40307));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t40303.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40305){var self__ = this;
var _40305__$1 = this;return self__.meta40304;
});})(___$1))
;
cljs.core.async.t40303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40305,meta40304__$1){var self__ = this;
var _40305__$1 = this;return (new cljs.core.async.t40303(self__.fn1,self__._,self__.meta40301,self__.ch,self__.f,self__.map_LT_,meta40304__$1));
});})(___$1))
;
cljs.core.async.__GT_t40303 = ((function (___$1){
return (function __GT_t40303(fn1__$1,___$2,meta40301__$1,ch__$2,f__$2,map_LT___$2,meta40304){return (new cljs.core.async.t40303(fn1__$1,___$2,meta40301__$1,ch__$2,f__$2,map_LT___$2,meta40304));
});})(___$1))
;
}
return (new cljs.core.async.t40303(fn1,___$1,self__.meta40301,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__19670__auto__ = ret;if(cljs.core.truth_(and__19670__auto__))
{return !(((function (){var G__40309 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40309) : cljs.core.deref.call(null,G__40309));
})() == null));
} else
{return and__19670__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__40310 = (function (){var G__40311 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__40311) : cljs.core.deref.call(null,G__40311));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__40310) : self__.f.call(null,G__40310));
})());
} else
{return ret;
}
});
cljs.core.async.t40300.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t40300.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t40300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40302){var self__ = this;
var _40302__$1 = this;return self__.meta40301;
});
cljs.core.async.t40300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40302,meta40301__$1){var self__ = this;
var _40302__$1 = this;return (new cljs.core.async.t40300(self__.ch,self__.f,self__.map_LT_,meta40301__$1));
});
cljs.core.async.__GT_t40300 = (function __GT_t40300(ch__$1,f__$1,map_LT___$1,meta40301){return (new cljs.core.async.t40300(ch__$1,f__$1,map_LT___$1,meta40301));
});
}
return (new cljs.core.async.t40300(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t40316 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40316 = (function (ch,f,map_GT_,meta40317){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta40317 = meta40317;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40316.cljs$lang$type = true;
cljs.core.async.t40316.cljs$lang$ctorStr = "cljs.core.async/t40316";
cljs.core.async.t40316.cljs$lang$ctorPrWriter = (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"cljs.core.async/t40316");
});
cljs.core.async.t40316.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t40316.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__40319 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__40319) : self__.f.call(null,G__40319));
})(),fn0);
});
cljs.core.async.t40316.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t40316.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t40316.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t40316.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t40316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40318){var self__ = this;
var _40318__$1 = this;return self__.meta40317;
});
cljs.core.async.t40316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40318,meta40317__$1){var self__ = this;
var _40318__$1 = this;return (new cljs.core.async.t40316(self__.ch,self__.f,self__.map_GT_,meta40317__$1));
});
cljs.core.async.__GT_t40316 = (function __GT_t40316(ch__$1,f__$1,map_GT___$1,meta40317){return (new cljs.core.async.t40316(ch__$1,f__$1,map_GT___$1,meta40317));
});
}
return (new cljs.core.async.t40316(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t40324 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40324 = (function (ch,p,filter_GT_,meta40325){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta40325 = meta40325;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40324.cljs$lang$type = true;
cljs.core.async.t40324.cljs$lang$ctorStr = "cljs.core.async/t40324";
cljs.core.async.t40324.cljs$lang$ctorPrWriter = (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"cljs.core.async/t40324");
});
cljs.core.async.t40324.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t40324.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__40327 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__40327) : self__.p.call(null,G__40327));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t40324.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t40324.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t40324.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t40324.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t40324.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40326){var self__ = this;
var _40326__$1 = this;return self__.meta40325;
});
cljs.core.async.t40324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40326,meta40325__$1){var self__ = this;
var _40326__$1 = this;return (new cljs.core.async.t40324(self__.ch,self__.p,self__.filter_GT_,meta40325__$1));
});
cljs.core.async.__GT_t40324 = (function __GT_t40324(ch__$1,p__$1,filter_GT___$1,meta40325){return (new cljs.core.async.t40324(ch__$1,p__$1,filter_GT___$1,meta40325));
});
}
return (new cljs.core.async.t40324(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__23002__auto___40415 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23002__auto___40415,out){
return (function (){var f__23003__auto__ = (function (){var switch__22987__auto__ = ((function (c__23002__auto___40415,out){
return (function (state_40393){var state_val_40394 = (state_40393[(1)]);if((state_val_40394 === (7)))
{var inst_40389 = (state_40393[(2)]);var state_40393__$1 = state_40393;var statearr_40395_40416 = state_40393__$1;(statearr_40395_40416[(2)] = inst_40389);
(statearr_40395_40416[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40394 === (1)))
{var state_40393__$1 = state_40393;var statearr_40396_40417 = state_40393__$1;(statearr_40396_40417[(2)] = null);
(statearr_40396_40417[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40394 === (4)))
{var inst_40375 = (state_40393[(7)]);var inst_40375__$1 = (state_40393[(2)]);var inst_40376 = (inst_40375__$1 == null);var state_40393__$1 = (function (){var statearr_40397 = state_40393;(statearr_40397[(7)] = inst_40375__$1);
return statearr_40397;
})();if(cljs.core.truth_(inst_40376))
{var statearr_40398_40418 = state_40393__$1;(statearr_40398_40418[(1)] = (5));
} else
{var statearr_40399_40419 = state_40393__$1;(statearr_40399_40419[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40394 === (6)))
{var inst_40375 = (state_40393[(7)]);var inst_40380 = (function (){var G__40400 = inst_40375;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__40400) : p.call(null,G__40400));
})();var state_40393__$1 = state_40393;if(cljs.core.truth_(inst_40380))
{var statearr_40401_40420 = state_40393__$1;(statearr_40401_40420[(1)] = (8));
} else
{var statearr_40402_40421 = state_40393__$1;(statearr_40402_40421[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40394 === (3)))
{var inst_40391 = (state_40393[(2)]);var state_40393__$1 = state_40393;return cljs.core.async.impl.ioc_helpers.return_chan(state_40393__$1,inst_40391);
} else
{if((state_val_40394 === (2)))
{var state_40393__$1 = state_40393;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40393__$1,(4),ch);
} else
{if((state_val_40394 === (11)))
{var inst_40383 = (state_40393[(2)]);var state_40393__$1 = state_40393;var statearr_40403_40422 = state_40393__$1;(statearr_40403_40422[(2)] = inst_40383);
(statearr_40403_40422[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40394 === (9)))
{var state_40393__$1 = state_40393;var statearr_40404_40423 = state_40393__$1;(statearr_40404_40423[(2)] = null);
(statearr_40404_40423[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40394 === (5)))
{var inst_40378 = cljs.core.async.close_BANG_(out);var state_40393__$1 = state_40393;var statearr_40405_40424 = state_40393__$1;(statearr_40405_40424[(2)] = inst_40378);
(statearr_40405_40424[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40394 === (10)))
{var inst_40386 = (state_40393[(2)]);var state_40393__$1 = (function (){var statearr_40406 = state_40393;(statearr_40406[(8)] = inst_40386);
return statearr_40406;
})();var statearr_40407_40425 = state_40393__$1;(statearr_40407_40425[(2)] = null);
(statearr_40407_40425[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40394 === (8)))
{var inst_40375 = (state_40393[(7)]);var state_40393__$1 = state_40393;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40393__$1,(11),out,inst_40375);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23002__auto___40415,out))
;return ((function (switch__22987__auto__,c__23002__auto___40415,out){
return (function() {
var state_machine__22988__auto__ = null;
var state_machine__22988__auto____0 = (function (){var statearr_40411 = [null,null,null,null,null,null,null,null,null];(statearr_40411[(0)] = state_machine__22988__auto__);
(statearr_40411[(1)] = (1));
return statearr_40411;
});
var state_machine__22988__auto____1 = (function (state_40393){while(true){
var ret_value__22989__auto__ = (function (){try{while(true){
var result__22990__auto__ = switch__22987__auto__(state_40393);if(cljs.core.keyword_identical_QMARK_(result__22990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22990__auto__;
}
break;
}
}catch (e40412){if((e40412 instanceof Object))
{var ex__22991__auto__ = e40412;var statearr_40413_40426 = state_40393;(statearr_40413_40426[(5)] = ex__22991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40393);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e40412;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40427 = state_40393;
state_40393 = G__40427;
continue;
}
} else
{return ret_value__22989__auto__;
}
break;
}
});
state_machine__22988__auto__ = function(state_40393){
switch(arguments.length){
case 0:
return state_machine__22988__auto____0.call(this);
case 1:
return state_machine__22988__auto____1.call(this,state_40393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22988__auto____0;
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22988__auto____1;
return state_machine__22988__auto__;
})()
;})(switch__22987__auto__,c__23002__auto___40415,out))
})();var state__23004__auto__ = (function (){var statearr_40414 = (function (){return (f__23003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23003__auto__.cljs$core$IFn$_invoke$arity$0() : f__23003__auto__.call(null));
})();(statearr_40414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23002__auto___40415);
return statearr_40414;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23004__auto__);
});})(c__23002__auto___40415,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__23002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23002__auto__){
return (function (){var f__23003__auto__ = (function (){var switch__22987__auto__ = ((function (c__23002__auto__){
return (function (state_40583){var state_val_40584 = (state_40583[(1)]);if((state_val_40584 === (7)))
{var inst_40579 = (state_40583[(2)]);var state_40583__$1 = state_40583;var statearr_40585_40623 = state_40583__$1;(statearr_40585_40623[(2)] = inst_40579);
(statearr_40585_40623[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40584 === (20)))
{var inst_40554 = (state_40583[(7)]);var inst_40565 = (state_40583[(2)]);var inst_40566 = cljs.core.next(inst_40554);var inst_40540 = inst_40566;var inst_40541 = null;var inst_40542 = (0);var inst_40543 = (0);var state_40583__$1 = (function (){var statearr_40586 = state_40583;(statearr_40586[(8)] = inst_40543);
(statearr_40586[(9)] = inst_40540);
(statearr_40586[(10)] = inst_40565);
(statearr_40586[(11)] = inst_40542);
(statearr_40586[(12)] = inst_40541);
return statearr_40586;
})();var statearr_40587_40624 = state_40583__$1;(statearr_40587_40624[(2)] = null);
(statearr_40587_40624[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40584 === (1)))
{var state_40583__$1 = state_40583;var statearr_40588_40625 = state_40583__$1;(statearr_40588_40625[(2)] = null);
(statearr_40588_40625[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40584 === (4)))
{var inst_40529 = (state_40583[(13)]);var inst_40529__$1 = (state_40583[(2)]);var inst_40530 = (inst_40529__$1 == null);var state_40583__$1 = (function (){var statearr_40592 = state_40583;(statearr_40592[(13)] = inst_40529__$1);
return statearr_40592;
})();if(cljs.core.truth_(inst_40530))
{var statearr_40593_40626 = state_40583__$1;(statearr_40593_40626[(1)] = (5));
} else
{var statearr_40594_40627 = state_40583__$1;(statearr_40594_40627[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40584 === (15)))
{var state_40583__$1 = state_40583;var statearr_40595_40628 = state_40583__$1;(statearr_40595_40628[(2)] = null);
(statearr_40595_40628[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40584 === (13)))
{var inst_40543 = (state_40583[(8)]);var inst_40540 = (state_40583[(9)]);var inst_40542 = (state_40583[(11)]);var inst_40541 = (state_40583[(12)]);var inst_40550 = (state_40583[(2)]);var inst_40551 = (inst_40543 + (1));var tmp40589 = inst_40540;var tmp40590 = inst_40542;var tmp40591 = inst_40541;var inst_40540__$1 = tmp40589;var inst_40541__$1 = tmp40591;var inst_40542__$1 = tmp40590;var inst_40543__$1 = inst_40551;var state_40583__$1 = (function (){var statearr_40596 = state_40583;(statearr_40596[(8)] = inst_40543__$1);
(statearr_40596[(14)] = inst_40550);
(statearr_40596[(9)] = inst_40540__$1);
(statearr_40596[(11)] = inst_40542__$1);
(statearr_40596[(12)] = inst_40541__$1);
return statearr_40596;
})();var statearr_40597_40629 = state_40583__$1;(statearr_40597_40629[(2)] = null);
(statearr_40597_40629[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40584 === (6)))
{var inst_40529 = (state_40583[(13)]);var inst_40534 = (function (){var G__40598 = inst_40529;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40598) : f.call(null,G__40598));
})();var inst_40539 = cljs.core.seq(inst_40534);var inst_40540 = inst_40539;var inst_40541 = null;var inst_40542 = (0);var inst_40543 = (0);var state_40583__$1 = (function (){var statearr_40599 = state_40583;(statearr_40599[(8)] = inst_40543);
(statearr_40599[(9)] = inst_40540);
(statearr_40599[(11)] = inst_40542);
(statearr_40599[(12)] = inst_40541);
return statearr_40599;
})();var statearr_40600_40630 = state_40583__$1;(statearr_40600_40630[(2)] = null);
(statearr_40600_40630[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40584 === (17)))
{var inst_40554 = (state_40583[(7)]);var inst_40558 = cljs.core.chunk_first(inst_40554);var inst_40559 = cljs.core.chunk_rest(inst_40554);var inst_40560 = cljs.core.count(inst_40558);var inst_40540 = inst_40559;var inst_40541 = inst_40558;var inst_40542 = inst_40560;var inst_40543 = (0);var state_40583__$1 = (function (){var statearr_40601 = state_40583;(statearr_40601[(8)] = inst_40543);
(statearr_40601[(9)] = inst_40540);
(statearr_40601[(11)] = inst_40542);
(statearr_40601[(12)] = inst_40541);
return statearr_40601;
})();var statearr_40602_40631 = state_40583__$1;(statearr_40602_40631[(2)] = null);
(statearr_40602_40631[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40584 === (3)))
{var inst_40581 = (state_40583[(2)]);var state_40583__$1 = state_40583;return cljs.core.async.impl.ioc_helpers.return_chan(state_40583__$1,inst_40581);
} else
{if((state_val_40584 === (12)))
{var inst_40574 = (state_40583[(2)]);var state_40583__$1 = state_40583;var statearr_40603_40632 = state_40583__$1;(statearr_40603_40632[(2)] = inst_40574);
(statearr_40603_40632[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40584 === (2)))
{var state_40583__$1 = state_40583;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40583__$1,(4),in$);
} else
{if((state_val_40584 === (19)))
{var inst_40569 = (state_40583[(2)]);var state_40583__$1 = state_40583;var statearr_40604_40633 = state_40583__$1;(statearr_40604_40633[(2)] = inst_40569);
(statearr_40604_40633[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40584 === (11)))
{var inst_40554 = (state_40583[(7)]);var inst_40540 = (state_40583[(9)]);var inst_40554__$1 = cljs.core.seq(inst_40540);var state_40583__$1 = (function (){var statearr_40605 = state_40583;(statearr_40605[(7)] = inst_40554__$1);
return statearr_40605;
})();if(inst_40554__$1)
{var statearr_40606_40634 = state_40583__$1;(statearr_40606_40634[(1)] = (14));
} else
{var statearr_40607_40635 = state_40583__$1;(statearr_40607_40635[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40584 === (9)))
{var inst_40576 = (state_40583[(2)]);var state_40583__$1 = (function (){var statearr_40608 = state_40583;(statearr_40608[(15)] = inst_40576);
return statearr_40608;
})();var statearr_40609_40636 = state_40583__$1;(statearr_40609_40636[(2)] = null);
(statearr_40609_40636[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40584 === (5)))
{var inst_40532 = cljs.core.async.close_BANG_(out);var state_40583__$1 = state_40583;var statearr_40610_40637 = state_40583__$1;(statearr_40610_40637[(2)] = inst_40532);
(statearr_40610_40637[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40584 === (14)))
{var inst_40554 = (state_40583[(7)]);var inst_40556 = cljs.core.chunked_seq_QMARK_(inst_40554);var state_40583__$1 = state_40583;if(inst_40556)
{var statearr_40611_40638 = state_40583__$1;(statearr_40611_40638[(1)] = (17));
} else
{var statearr_40612_40639 = state_40583__$1;(statearr_40612_40639[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40584 === (16)))
{var inst_40572 = (state_40583[(2)]);var state_40583__$1 = state_40583;var statearr_40613_40640 = state_40583__$1;(statearr_40613_40640[(2)] = inst_40572);
(statearr_40613_40640[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40584 === (10)))
{var inst_40543 = (state_40583[(8)]);var inst_40541 = (state_40583[(12)]);var inst_40548 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_40541,inst_40543);var state_40583__$1 = state_40583;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40583__$1,(13),out,inst_40548);
} else
{if((state_val_40584 === (18)))
{var inst_40554 = (state_40583[(7)]);var inst_40563 = cljs.core.first(inst_40554);var state_40583__$1 = state_40583;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40583__$1,(20),out,inst_40563);
} else
{if((state_val_40584 === (8)))
{var inst_40543 = (state_40583[(8)]);var inst_40542 = (state_40583[(11)]);var inst_40545 = (inst_40543 < inst_40542);var inst_40546 = inst_40545;var state_40583__$1 = state_40583;if(cljs.core.truth_(inst_40546))
{var statearr_40614_40641 = state_40583__$1;(statearr_40614_40641[(1)] = (10));
} else
{var statearr_40615_40642 = state_40583__$1;(statearr_40615_40642[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23002__auto__))
;return ((function (switch__22987__auto__,c__23002__auto__){
return (function() {
var state_machine__22988__auto__ = null;
var state_machine__22988__auto____0 = (function (){var statearr_40619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40619[(0)] = state_machine__22988__auto__);
(statearr_40619[(1)] = (1));
return statearr_40619;
});
var state_machine__22988__auto____1 = (function (state_40583){while(true){
var ret_value__22989__auto__ = (function (){try{while(true){
var result__22990__auto__ = switch__22987__auto__(state_40583);if(cljs.core.keyword_identical_QMARK_(result__22990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22990__auto__;
}
break;
}
}catch (e40620){if((e40620 instanceof Object))
{var ex__22991__auto__ = e40620;var statearr_40621_40643 = state_40583;(statearr_40621_40643[(5)] = ex__22991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40583);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e40620;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40644 = state_40583;
state_40583 = G__40644;
continue;
}
} else
{return ret_value__22989__auto__;
}
break;
}
});
state_machine__22988__auto__ = function(state_40583){
switch(arguments.length){
case 0:
return state_machine__22988__auto____0.call(this);
case 1:
return state_machine__22988__auto____1.call(this,state_40583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22988__auto____0;
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22988__auto____1;
return state_machine__22988__auto__;
})()
;})(switch__22987__auto__,c__23002__auto__))
})();var state__23004__auto__ = (function (){var statearr_40622 = (function (){return (f__23003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23003__auto__.cljs$core$IFn$_invoke$arity$0() : f__23003__auto__.call(null));
})();(statearr_40622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23002__auto__);
return statearr_40622;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23004__auto__);
});})(c__23002__auto__))
);
return c__23002__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__23002__auto___40734 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23002__auto___40734){
return (function (){var f__23003__auto__ = (function (){var switch__22987__auto__ = ((function (c__23002__auto___40734){
return (function (state_40713){var state_val_40714 = (state_40713[(1)]);if((state_val_40714 === (7)))
{var inst_40709 = (state_40713[(2)]);var state_40713__$1 = state_40713;var statearr_40715_40735 = state_40713__$1;(statearr_40715_40735[(2)] = inst_40709);
(statearr_40715_40735[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40714 === (1)))
{var state_40713__$1 = state_40713;var statearr_40716_40736 = state_40713__$1;(statearr_40716_40736[(2)] = null);
(statearr_40716_40736[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40714 === (4)))
{var inst_40696 = (state_40713[(7)]);var inst_40696__$1 = (state_40713[(2)]);var inst_40697 = (inst_40696__$1 == null);var state_40713__$1 = (function (){var statearr_40717 = state_40713;(statearr_40717[(7)] = inst_40696__$1);
return statearr_40717;
})();if(cljs.core.truth_(inst_40697))
{var statearr_40718_40737 = state_40713__$1;(statearr_40718_40737[(1)] = (5));
} else
{var statearr_40719_40738 = state_40713__$1;(statearr_40719_40738[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40714 === (6)))
{var inst_40696 = (state_40713[(7)]);var state_40713__$1 = state_40713;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40713__$1,(11),to,inst_40696);
} else
{if((state_val_40714 === (3)))
{var inst_40711 = (state_40713[(2)]);var state_40713__$1 = state_40713;return cljs.core.async.impl.ioc_helpers.return_chan(state_40713__$1,inst_40711);
} else
{if((state_val_40714 === (2)))
{var state_40713__$1 = state_40713;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40713__$1,(4),from);
} else
{if((state_val_40714 === (11)))
{var inst_40706 = (state_40713[(2)]);var state_40713__$1 = (function (){var statearr_40720 = state_40713;(statearr_40720[(8)] = inst_40706);
return statearr_40720;
})();var statearr_40721_40739 = state_40713__$1;(statearr_40721_40739[(2)] = null);
(statearr_40721_40739[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40714 === (9)))
{var state_40713__$1 = state_40713;var statearr_40722_40740 = state_40713__$1;(statearr_40722_40740[(2)] = null);
(statearr_40722_40740[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40714 === (5)))
{var state_40713__$1 = state_40713;if(cljs.core.truth_(close_QMARK_))
{var statearr_40723_40741 = state_40713__$1;(statearr_40723_40741[(1)] = (8));
} else
{var statearr_40724_40742 = state_40713__$1;(statearr_40724_40742[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40714 === (10)))
{var inst_40703 = (state_40713[(2)]);var state_40713__$1 = state_40713;var statearr_40725_40743 = state_40713__$1;(statearr_40725_40743[(2)] = inst_40703);
(statearr_40725_40743[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40714 === (8)))
{var inst_40700 = cljs.core.async.close_BANG_(to);var state_40713__$1 = state_40713;var statearr_40726_40744 = state_40713__$1;(statearr_40726_40744[(2)] = inst_40700);
(statearr_40726_40744[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23002__auto___40734))
;return ((function (switch__22987__auto__,c__23002__auto___40734){
return (function() {
var state_machine__22988__auto__ = null;
var state_machine__22988__auto____0 = (function (){var statearr_40730 = [null,null,null,null,null,null,null,null,null];(statearr_40730[(0)] = state_machine__22988__auto__);
(statearr_40730[(1)] = (1));
return statearr_40730;
});
var state_machine__22988__auto____1 = (function (state_40713){while(true){
var ret_value__22989__auto__ = (function (){try{while(true){
var result__22990__auto__ = switch__22987__auto__(state_40713);if(cljs.core.keyword_identical_QMARK_(result__22990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22990__auto__;
}
break;
}
}catch (e40731){if((e40731 instanceof Object))
{var ex__22991__auto__ = e40731;var statearr_40732_40745 = state_40713;(statearr_40732_40745[(5)] = ex__22991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40713);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e40731;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40746 = state_40713;
state_40713 = G__40746;
continue;
}
} else
{return ret_value__22989__auto__;
}
break;
}
});
state_machine__22988__auto__ = function(state_40713){
switch(arguments.length){
case 0:
return state_machine__22988__auto____0.call(this);
case 1:
return state_machine__22988__auto____1.call(this,state_40713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22988__auto____0;
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22988__auto____1;
return state_machine__22988__auto__;
})()
;})(switch__22987__auto__,c__23002__auto___40734))
})();var state__23004__auto__ = (function (){var statearr_40733 = (function (){return (f__23003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23003__auto__.cljs$core$IFn$_invoke$arity$0() : f__23003__auto__.call(null));
})();(statearr_40733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23002__auto___40734);
return statearr_40733;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23004__auto__);
});})(c__23002__auto___40734))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__23002__auto___40839 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23002__auto___40839,tc,fc){
return (function (){var f__23003__auto__ = (function (){var switch__22987__auto__ = ((function (c__23002__auto___40839,tc,fc){
return (function (state_40816){var state_val_40817 = (state_40816[(1)]);if((state_val_40817 === (7)))
{var inst_40812 = (state_40816[(2)]);var state_40816__$1 = state_40816;var statearr_40818_40840 = state_40816__$1;(statearr_40818_40840[(2)] = inst_40812);
(statearr_40818_40840[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40817 === (1)))
{var state_40816__$1 = state_40816;var statearr_40819_40841 = state_40816__$1;(statearr_40819_40841[(2)] = null);
(statearr_40819_40841[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40817 === (4)))
{var inst_40797 = (state_40816[(7)]);var inst_40797__$1 = (state_40816[(2)]);var inst_40798 = (inst_40797__$1 == null);var state_40816__$1 = (function (){var statearr_40820 = state_40816;(statearr_40820[(7)] = inst_40797__$1);
return statearr_40820;
})();if(cljs.core.truth_(inst_40798))
{var statearr_40821_40842 = state_40816__$1;(statearr_40821_40842[(1)] = (5));
} else
{var statearr_40822_40843 = state_40816__$1;(statearr_40822_40843[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40817 === (6)))
{var inst_40797 = (state_40816[(7)]);var inst_40803 = (function (){var G__40823 = inst_40797;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__40823) : p.call(null,G__40823));
})();var state_40816__$1 = state_40816;if(cljs.core.truth_(inst_40803))
{var statearr_40824_40844 = state_40816__$1;(statearr_40824_40844[(1)] = (9));
} else
{var statearr_40825_40845 = state_40816__$1;(statearr_40825_40845[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40817 === (3)))
{var inst_40814 = (state_40816[(2)]);var state_40816__$1 = state_40816;return cljs.core.async.impl.ioc_helpers.return_chan(state_40816__$1,inst_40814);
} else
{if((state_val_40817 === (2)))
{var state_40816__$1 = state_40816;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40816__$1,(4),ch);
} else
{if((state_val_40817 === (11)))
{var inst_40797 = (state_40816[(7)]);var inst_40807 = (state_40816[(2)]);var state_40816__$1 = state_40816;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40816__$1,(8),inst_40807,inst_40797);
} else
{if((state_val_40817 === (9)))
{var state_40816__$1 = state_40816;var statearr_40826_40846 = state_40816__$1;(statearr_40826_40846[(2)] = tc);
(statearr_40826_40846[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40817 === (5)))
{var inst_40800 = cljs.core.async.close_BANG_(tc);var inst_40801 = cljs.core.async.close_BANG_(fc);var state_40816__$1 = (function (){var statearr_40827 = state_40816;(statearr_40827[(8)] = inst_40800);
return statearr_40827;
})();var statearr_40828_40847 = state_40816__$1;(statearr_40828_40847[(2)] = inst_40801);
(statearr_40828_40847[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40817 === (10)))
{var state_40816__$1 = state_40816;var statearr_40829_40848 = state_40816__$1;(statearr_40829_40848[(2)] = fc);
(statearr_40829_40848[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40817 === (8)))
{var inst_40809 = (state_40816[(2)]);var state_40816__$1 = (function (){var statearr_40830 = state_40816;(statearr_40830[(9)] = inst_40809);
return statearr_40830;
})();var statearr_40831_40849 = state_40816__$1;(statearr_40831_40849[(2)] = null);
(statearr_40831_40849[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23002__auto___40839,tc,fc))
;return ((function (switch__22987__auto__,c__23002__auto___40839,tc,fc){
return (function() {
var state_machine__22988__auto__ = null;
var state_machine__22988__auto____0 = (function (){var statearr_40835 = [null,null,null,null,null,null,null,null,null,null];(statearr_40835[(0)] = state_machine__22988__auto__);
(statearr_40835[(1)] = (1));
return statearr_40835;
});
var state_machine__22988__auto____1 = (function (state_40816){while(true){
var ret_value__22989__auto__ = (function (){try{while(true){
var result__22990__auto__ = switch__22987__auto__(state_40816);if(cljs.core.keyword_identical_QMARK_(result__22990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22990__auto__;
}
break;
}
}catch (e40836){if((e40836 instanceof Object))
{var ex__22991__auto__ = e40836;var statearr_40837_40850 = state_40816;(statearr_40837_40850[(5)] = ex__22991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40816);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e40836;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40851 = state_40816;
state_40816 = G__40851;
continue;
}
} else
{return ret_value__22989__auto__;
}
break;
}
});
state_machine__22988__auto__ = function(state_40816){
switch(arguments.length){
case 0:
return state_machine__22988__auto____0.call(this);
case 1:
return state_machine__22988__auto____1.call(this,state_40816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22988__auto____0;
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22988__auto____1;
return state_machine__22988__auto__;
})()
;})(switch__22987__auto__,c__23002__auto___40839,tc,fc))
})();var state__23004__auto__ = (function (){var statearr_40838 = (function (){return (f__23003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23003__auto__.cljs$core$IFn$_invoke$arity$0() : f__23003__auto__.call(null));
})();(statearr_40838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23002__auto___40839);
return statearr_40838;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23004__auto__);
});})(c__23002__auto___40839,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__23002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23002__auto__){
return (function (){var f__23003__auto__ = (function (){var switch__22987__auto__ = ((function (c__23002__auto__){
return (function (state_40900){var state_val_40901 = (state_40900[(1)]);if((state_val_40901 === (7)))
{var inst_40896 = (state_40900[(2)]);var state_40900__$1 = state_40900;var statearr_40902_40920 = state_40900__$1;(statearr_40902_40920[(2)] = inst_40896);
(statearr_40902_40920[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40901 === (6)))
{var inst_40889 = (state_40900[(7)]);var inst_40886 = (state_40900[(8)]);var inst_40893 = (function (){var G__40903 = inst_40886;var G__40904 = inst_40889;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__40903,G__40904) : f.call(null,G__40903,G__40904));
})();var inst_40886__$1 = inst_40893;var state_40900__$1 = (function (){var statearr_40905 = state_40900;(statearr_40905[(8)] = inst_40886__$1);
return statearr_40905;
})();var statearr_40906_40921 = state_40900__$1;(statearr_40906_40921[(2)] = null);
(statearr_40906_40921[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40901 === (5)))
{var inst_40886 = (state_40900[(8)]);var state_40900__$1 = state_40900;var statearr_40907_40922 = state_40900__$1;(statearr_40907_40922[(2)] = inst_40886);
(statearr_40907_40922[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40901 === (4)))
{var inst_40889 = (state_40900[(7)]);var inst_40889__$1 = (state_40900[(2)]);var inst_40890 = (inst_40889__$1 == null);var state_40900__$1 = (function (){var statearr_40908 = state_40900;(statearr_40908[(7)] = inst_40889__$1);
return statearr_40908;
})();if(cljs.core.truth_(inst_40890))
{var statearr_40909_40923 = state_40900__$1;(statearr_40909_40923[(1)] = (5));
} else
{var statearr_40910_40924 = state_40900__$1;(statearr_40910_40924[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40901 === (3)))
{var inst_40898 = (state_40900[(2)]);var state_40900__$1 = state_40900;return cljs.core.async.impl.ioc_helpers.return_chan(state_40900__$1,inst_40898);
} else
{if((state_val_40901 === (2)))
{var state_40900__$1 = state_40900;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40900__$1,(4),ch);
} else
{if((state_val_40901 === (1)))
{var inst_40886 = init;var state_40900__$1 = (function (){var statearr_40911 = state_40900;(statearr_40911[(8)] = inst_40886);
return statearr_40911;
})();var statearr_40912_40925 = state_40900__$1;(statearr_40912_40925[(2)] = null);
(statearr_40912_40925[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__23002__auto__))
;return ((function (switch__22987__auto__,c__23002__auto__){
return (function() {
var state_machine__22988__auto__ = null;
var state_machine__22988__auto____0 = (function (){var statearr_40916 = [null,null,null,null,null,null,null,null,null];(statearr_40916[(0)] = state_machine__22988__auto__);
(statearr_40916[(1)] = (1));
return statearr_40916;
});
var state_machine__22988__auto____1 = (function (state_40900){while(true){
var ret_value__22989__auto__ = (function (){try{while(true){
var result__22990__auto__ = switch__22987__auto__(state_40900);if(cljs.core.keyword_identical_QMARK_(result__22990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22990__auto__;
}
break;
}
}catch (e40917){if((e40917 instanceof Object))
{var ex__22991__auto__ = e40917;var statearr_40918_40926 = state_40900;(statearr_40918_40926[(5)] = ex__22991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40900);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e40917;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40927 = state_40900;
state_40900 = G__40927;
continue;
}
} else
{return ret_value__22989__auto__;
}
break;
}
});
state_machine__22988__auto__ = function(state_40900){
switch(arguments.length){
case 0:
return state_machine__22988__auto____0.call(this);
case 1:
return state_machine__22988__auto____1.call(this,state_40900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22988__auto____0;
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22988__auto____1;
return state_machine__22988__auto__;
})()
;})(switch__22987__auto__,c__23002__auto__))
})();var state__23004__auto__ = (function (){var statearr_40919 = (function (){return (f__23003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23003__auto__.cljs$core$IFn$_invoke$arity$0() : f__23003__auto__.call(null));
})();(statearr_40919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23002__auto__);
return statearr_40919;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23004__auto__);
});})(c__23002__auto__))
);
return c__23002__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__23002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23002__auto__){
return (function (){var f__23003__auto__ = (function (){var switch__22987__auto__ = ((function (c__23002__auto__){
return (function (state_40992){var state_val_40993 = (state_40992[(1)]);if((state_val_40993 === (7)))
{var inst_40973 = (state_40992[(7)]);var inst_40978 = (state_40992[(2)]);var inst_40979 = cljs.core.next(inst_40973);var inst_40973__$1 = inst_40979;var state_40992__$1 = (function (){var statearr_40994 = state_40992;(statearr_40994[(7)] = inst_40973__$1);
(statearr_40994[(8)] = inst_40978);
return statearr_40994;
})();var statearr_40995_41013 = state_40992__$1;(statearr_40995_41013[(2)] = null);
(statearr_40995_41013[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40993 === (1)))
{var inst_40972 = cljs.core.seq(coll);var inst_40973 = inst_40972;var state_40992__$1 = (function (){var statearr_40996 = state_40992;(statearr_40996[(7)] = inst_40973);
return statearr_40996;
})();var statearr_40997_41014 = state_40992__$1;(statearr_40997_41014[(2)] = null);
(statearr_40997_41014[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40993 === (4)))
{var inst_40973 = (state_40992[(7)]);var inst_40976 = cljs.core.first(inst_40973);var state_40992__$1 = state_40992;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40992__$1,(7),ch,inst_40976);
} else
{if((state_val_40993 === (6)))
{var inst_40988 = (state_40992[(2)]);var state_40992__$1 = state_40992;var statearr_40998_41015 = state_40992__$1;(statearr_40998_41015[(2)] = inst_40988);
(statearr_40998_41015[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40993 === (3)))
{var inst_40990 = (state_40992[(2)]);var state_40992__$1 = state_40992;return cljs.core.async.impl.ioc_helpers.return_chan(state_40992__$1,inst_40990);
} else
{if((state_val_40993 === (2)))
{var inst_40973 = (state_40992[(7)]);var state_40992__$1 = state_40992;if(cljs.core.truth_(inst_40973))
{var statearr_40999_41016 = state_40992__$1;(statearr_40999_41016[(1)] = (4));
} else
{var statearr_41000_41017 = state_40992__$1;(statearr_41000_41017[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40993 === (9)))
{var state_40992__$1 = state_40992;var statearr_41001_41018 = state_40992__$1;(statearr_41001_41018[(2)] = null);
(statearr_41001_41018[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40993 === (5)))
{var state_40992__$1 = state_40992;if(cljs.core.truth_(close_QMARK_))
{var statearr_41002_41019 = state_40992__$1;(statearr_41002_41019[(1)] = (8));
} else
{var statearr_41003_41020 = state_40992__$1;(statearr_41003_41020[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40993 === (10)))
{var inst_40986 = (state_40992[(2)]);var state_40992__$1 = state_40992;var statearr_41004_41021 = state_40992__$1;(statearr_41004_41021[(2)] = inst_40986);
(statearr_41004_41021[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40993 === (8)))
{var inst_40983 = cljs.core.async.close_BANG_(ch);var state_40992__$1 = state_40992;var statearr_41005_41022 = state_40992__$1;(statearr_41005_41022[(2)] = inst_40983);
(statearr_41005_41022[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__23002__auto__))
;return ((function (switch__22987__auto__,c__23002__auto__){
return (function() {
var state_machine__22988__auto__ = null;
var state_machine__22988__auto____0 = (function (){var statearr_41009 = [null,null,null,null,null,null,null,null,null];(statearr_41009[(0)] = state_machine__22988__auto__);
(statearr_41009[(1)] = (1));
return statearr_41009;
});
var state_machine__22988__auto____1 = (function (state_40992){while(true){
var ret_value__22989__auto__ = (function (){try{while(true){
var result__22990__auto__ = switch__22987__auto__(state_40992);if(cljs.core.keyword_identical_QMARK_(result__22990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22990__auto__;
}
break;
}
}catch (e41010){if((e41010 instanceof Object))
{var ex__22991__auto__ = e41010;var statearr_41011_41023 = state_40992;(statearr_41011_41023[(5)] = ex__22991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40992);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e41010;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__41024 = state_40992;
state_40992 = G__41024;
continue;
}
} else
{return ret_value__22989__auto__;
}
break;
}
});
state_machine__22988__auto__ = function(state_40992){
switch(arguments.length){
case 0:
return state_machine__22988__auto____0.call(this);
case 1:
return state_machine__22988__auto____1.call(this,state_40992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22988__auto____0;
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22988__auto____1;
return state_machine__22988__auto__;
})()
;})(switch__22987__auto__,c__23002__auto__))
})();var state__23004__auto__ = (function (){var statearr_41012 = (function (){return (f__23003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23003__auto__.cljs$core$IFn$_invoke$arity$0() : f__23003__auto__.call(null));
})();(statearr_41012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23002__auto__);
return statearr_41012;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23004__auto__);
});})(c__23002__auto__))
);
return c__23002__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj41026 = {};return obj41026;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__19670__auto__ = _;if(and__19670__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__19670__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__20728__auto__ = (((_ == null))?null:_);return (function (){var or__19687__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__41030 = x__20728__auto__;return goog.typeOf(G__41030);
})()]);if(or__19687__auto__)
{return or__19687__auto__;
} else
{var or__19687__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__19687__auto____$1)
{return or__19687__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj41032 = {};return obj41032;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__19670__auto__ = m;if(and__19670__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__19670__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__20728__auto__ = (((m == null))?null:m);return (function (){var or__19687__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__41036 = x__20728__auto__;return goog.typeOf(G__41036);
})()]);if(or__19687__auto__)
{return or__19687__auto__;
} else
{var or__19687__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__19687__auto____$1)
{return or__19687__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__19670__auto__ = m;if(and__19670__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__19670__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__20728__auto__ = (((m == null))?null:m);return (function (){var or__19687__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__41040 = x__20728__auto__;return goog.typeOf(G__41040);
})()]);if(or__19687__auto__)
{return or__19687__auto__;
} else
{var or__19687__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__19687__auto____$1)
{return or__19687__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__19670__auto__ = m;if(and__19670__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__19670__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__20728__auto__ = (((m == null))?null:m);return (function (){var or__19687__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__41044 = x__20728__auto__;return goog.typeOf(G__41044);
})()]);if(or__19687__auto__)
{return or__19687__auto__;
} else
{var or__19687__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__19687__auto____$1)
{return or__19687__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__41276 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41276) : cljs.core.atom.call(null,G__41276));
})();var m = (function (){if(typeof cljs.core.async.t41277 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41277 = (function (cs,ch,mult,meta41278){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta41278 = meta41278;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41277.cljs$lang$type = true;
cljs.core.async.t41277.cljs$lang$ctorStr = "cljs.core.async/t41277";
cljs.core.async.t41277.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"cljs.core.async/t41277");
});})(cs))
;
cljs.core.async.t41277.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t41277.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t41277.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t41277.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__41280_41507 = self__.cs;var G__41281_41508 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__41280_41507,G__41281_41508) : cljs.core.reset_BANG_.call(null,G__41280_41507,G__41281_41508));
return null;
});})(cs))
;
cljs.core.async.t41277.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t41277.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t41277.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41279){var self__ = this;
var _41279__$1 = this;return self__.meta41278;
});})(cs))
;
cljs.core.async.t41277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41279,meta41278__$1){var self__ = this;
var _41279__$1 = this;return (new cljs.core.async.t41277(self__.cs,self__.ch,self__.mult,meta41278__$1));
});})(cs))
;
cljs.core.async.__GT_t41277 = ((function (cs){
return (function __GT_t41277(cs__$1,ch__$1,mult__$1,meta41278){return (new cljs.core.async.t41277(cs__$1,ch__$1,mult__$1,meta41278));
});})(cs))
;
}
return (new cljs.core.async.t41277(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__41282 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41282) : cljs.core.atom.call(null,G__41282));
})();var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__23002__auto___41509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23002__auto___41509,cs,m,dchan,dctr,done){
return (function (){var f__23003__auto__ = (function (){var switch__22987__auto__ = ((function (c__23002__auto___41509,cs,m,dchan,dctr,done){
return (function (state_41417){var state_val_41418 = (state_41417[(1)]);if((state_val_41418 === (7)))
{var inst_41413 = (state_41417[(2)]);var state_41417__$1 = state_41417;var statearr_41419_41510 = state_41417__$1;(statearr_41419_41510[(2)] = inst_41413);
(statearr_41419_41510[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (20)))
{var inst_41314 = (state_41417[(7)]);var inst_41324 = cljs.core.first(inst_41314);var inst_41325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41324,(0),null);var inst_41326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41324,(1),null);var state_41417__$1 = (function (){var statearr_41420 = state_41417;(statearr_41420[(8)] = inst_41325);
return statearr_41420;
})();if(cljs.core.truth_(inst_41326))
{var statearr_41421_41511 = state_41417__$1;(statearr_41421_41511[(1)] = (22));
} else
{var statearr_41422_41512 = state_41417__$1;(statearr_41422_41512[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (27)))
{var inst_41356 = (state_41417[(9)]);var inst_41354 = (state_41417[(10)]);var inst_41361 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_41354,inst_41356);var state_41417__$1 = (function (){var statearr_41423 = state_41417;(statearr_41423[(11)] = inst_41361);
return statearr_41423;
})();var statearr_41424_41513 = state_41417__$1;(statearr_41424_41513[(2)] = null);
(statearr_41424_41513[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (1)))
{var state_41417__$1 = state_41417;var statearr_41425_41514 = state_41417__$1;(statearr_41425_41514[(2)] = null);
(statearr_41425_41514[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (24)))
{var inst_41314 = (state_41417[(7)]);var inst_41331 = (state_41417[(2)]);var inst_41332 = cljs.core.next(inst_41314);var inst_41294 = inst_41332;var inst_41295 = null;var inst_41296 = (0);var inst_41297 = (0);var state_41417__$1 = (function (){var statearr_41426 = state_41417;(statearr_41426[(12)] = inst_41297);
(statearr_41426[(13)] = inst_41295);
(statearr_41426[(14)] = inst_41331);
(statearr_41426[(15)] = inst_41296);
(statearr_41426[(16)] = inst_41294);
return statearr_41426;
})();var statearr_41427_41515 = state_41417__$1;(statearr_41427_41515[(2)] = null);
(statearr_41427_41515[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (39)))
{var inst_41374 = (state_41417[(17)]);var inst_41392 = (state_41417[(2)]);var inst_41393 = cljs.core.next(inst_41374);var inst_41353 = inst_41393;var inst_41354 = null;var inst_41355 = (0);var inst_41356 = (0);var state_41417__$1 = (function (){var statearr_41431 = state_41417;(statearr_41431[(9)] = inst_41356);
(statearr_41431[(18)] = inst_41355);
(statearr_41431[(10)] = inst_41354);
(statearr_41431[(19)] = inst_41353);
(statearr_41431[(20)] = inst_41392);
return statearr_41431;
})();var statearr_41432_41516 = state_41417__$1;(statearr_41432_41516[(2)] = null);
(statearr_41432_41516[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (4)))
{var inst_41285 = (state_41417[(21)]);var inst_41285__$1 = (state_41417[(2)]);var inst_41286 = (inst_41285__$1 == null);var state_41417__$1 = (function (){var statearr_41433 = state_41417;(statearr_41433[(21)] = inst_41285__$1);
return statearr_41433;
})();if(cljs.core.truth_(inst_41286))
{var statearr_41434_41517 = state_41417__$1;(statearr_41434_41517[(1)] = (5));
} else
{var statearr_41435_41518 = state_41417__$1;(statearr_41435_41518[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (15)))
{var inst_41297 = (state_41417[(12)]);var inst_41295 = (state_41417[(13)]);var inst_41296 = (state_41417[(15)]);var inst_41294 = (state_41417[(16)]);var inst_41310 = (state_41417[(2)]);var inst_41311 = (inst_41297 + (1));var tmp41428 = inst_41295;var tmp41429 = inst_41296;var tmp41430 = inst_41294;var inst_41294__$1 = tmp41430;var inst_41295__$1 = tmp41428;var inst_41296__$1 = tmp41429;var inst_41297__$1 = inst_41311;var state_41417__$1 = (function (){var statearr_41436 = state_41417;(statearr_41436[(12)] = inst_41297__$1);
(statearr_41436[(13)] = inst_41295__$1);
(statearr_41436[(22)] = inst_41310);
(statearr_41436[(15)] = inst_41296__$1);
(statearr_41436[(16)] = inst_41294__$1);
return statearr_41436;
})();var statearr_41437_41519 = state_41417__$1;(statearr_41437_41519[(2)] = null);
(statearr_41437_41519[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (21)))
{var inst_41335 = (state_41417[(2)]);var state_41417__$1 = state_41417;var statearr_41438_41520 = state_41417__$1;(statearr_41438_41520[(2)] = inst_41335);
(statearr_41438_41520[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (31)))
{var inst_41361 = (state_41417[(11)]);var inst_41362 = (state_41417[(2)]);var inst_41363 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_41364 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41361);var state_41417__$1 = (function (){var statearr_41439 = state_41417;(statearr_41439[(23)] = inst_41363);
(statearr_41439[(24)] = inst_41362);
return statearr_41439;
})();var statearr_41440_41521 = state_41417__$1;(statearr_41440_41521[(2)] = inst_41364);
cljs.core.async.impl.ioc_helpers.process_exception(state_41417__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (32)))
{var inst_41361 = (state_41417[(11)]);var inst_41285 = (state_41417[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_41417,(31),Object,null,(30));var inst_41368 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41361,inst_41285,done);var state_41417__$1 = state_41417;var statearr_41441_41522 = state_41417__$1;(statearr_41441_41522[(2)] = inst_41368);
cljs.core.async.impl.ioc_helpers.process_exception(state_41417__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (40)))
{var inst_41383 = (state_41417[(25)]);var inst_41384 = (state_41417[(2)]);var inst_41385 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_41386 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41383);var state_41417__$1 = (function (){var statearr_41442 = state_41417;(statearr_41442[(26)] = inst_41385);
(statearr_41442[(27)] = inst_41384);
return statearr_41442;
})();var statearr_41443_41523 = state_41417__$1;(statearr_41443_41523[(2)] = inst_41386);
cljs.core.async.impl.ioc_helpers.process_exception(state_41417__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (33)))
{var inst_41374 = (state_41417[(17)]);var inst_41376 = cljs.core.chunked_seq_QMARK_(inst_41374);var state_41417__$1 = state_41417;if(inst_41376)
{var statearr_41444_41524 = state_41417__$1;(statearr_41444_41524[(1)] = (36));
} else
{var statearr_41445_41525 = state_41417__$1;(statearr_41445_41525[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (13)))
{var inst_41304 = (state_41417[(28)]);var inst_41307 = cljs.core.async.close_BANG_(inst_41304);var state_41417__$1 = state_41417;var statearr_41446_41526 = state_41417__$1;(statearr_41446_41526[(2)] = inst_41307);
(statearr_41446_41526[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (22)))
{var inst_41325 = (state_41417[(8)]);var inst_41328 = cljs.core.async.close_BANG_(inst_41325);var state_41417__$1 = state_41417;var statearr_41447_41527 = state_41417__$1;(statearr_41447_41527[(2)] = inst_41328);
(statearr_41447_41527[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (36)))
{var inst_41374 = (state_41417[(17)]);var inst_41378 = cljs.core.chunk_first(inst_41374);var inst_41379 = cljs.core.chunk_rest(inst_41374);var inst_41380 = cljs.core.count(inst_41378);var inst_41353 = inst_41379;var inst_41354 = inst_41378;var inst_41355 = inst_41380;var inst_41356 = (0);var state_41417__$1 = (function (){var statearr_41448 = state_41417;(statearr_41448[(9)] = inst_41356);
(statearr_41448[(18)] = inst_41355);
(statearr_41448[(10)] = inst_41354);
(statearr_41448[(19)] = inst_41353);
return statearr_41448;
})();var statearr_41449_41528 = state_41417__$1;(statearr_41449_41528[(2)] = null);
(statearr_41449_41528[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (41)))
{var inst_41383 = (state_41417[(25)]);var inst_41285 = (state_41417[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_41417,(40),Object,null,(39));var inst_41390 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41383,inst_41285,done);var state_41417__$1 = state_41417;var statearr_41450_41529 = state_41417__$1;(statearr_41450_41529[(2)] = inst_41390);
cljs.core.async.impl.ioc_helpers.process_exception(state_41417__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (43)))
{var state_41417__$1 = state_41417;var statearr_41451_41530 = state_41417__$1;(statearr_41451_41530[(2)] = null);
(statearr_41451_41530[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (29)))
{var inst_41401 = (state_41417[(2)]);var state_41417__$1 = state_41417;var statearr_41452_41531 = state_41417__$1;(statearr_41452_41531[(2)] = inst_41401);
(statearr_41452_41531[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (44)))
{var inst_41410 = (state_41417[(2)]);var state_41417__$1 = (function (){var statearr_41453 = state_41417;(statearr_41453[(29)] = inst_41410);
return statearr_41453;
})();var statearr_41454_41532 = state_41417__$1;(statearr_41454_41532[(2)] = null);
(statearr_41454_41532[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (6)))
{var inst_41345 = (state_41417[(30)]);var inst_41344 = (function (){var G__41455 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41455) : cljs.core.deref.call(null,G__41455));
})();var inst_41345__$1 = cljs.core.keys(inst_41344);var inst_41346 = cljs.core.count(inst_41345__$1);var inst_41347 = (function (){var G__41456 = dctr;var G__41457 = inst_41346;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__41456,G__41457) : cljs.core.reset_BANG_.call(null,G__41456,G__41457));
})();var inst_41352 = cljs.core.seq(inst_41345__$1);var inst_41353 = inst_41352;var inst_41354 = null;var inst_41355 = (0);var inst_41356 = (0);var state_41417__$1 = (function (){var statearr_41458 = state_41417;(statearr_41458[(9)] = inst_41356);
(statearr_41458[(18)] = inst_41355);
(statearr_41458[(10)] = inst_41354);
(statearr_41458[(19)] = inst_41353);
(statearr_41458[(31)] = inst_41347);
(statearr_41458[(30)] = inst_41345__$1);
return statearr_41458;
})();var statearr_41459_41533 = state_41417__$1;(statearr_41459_41533[(2)] = null);
(statearr_41459_41533[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (28)))
{var inst_41374 = (state_41417[(17)]);var inst_41353 = (state_41417[(19)]);var inst_41374__$1 = cljs.core.seq(inst_41353);var state_41417__$1 = (function (){var statearr_41460 = state_41417;(statearr_41460[(17)] = inst_41374__$1);
return statearr_41460;
})();if(inst_41374__$1)
{var statearr_41461_41534 = state_41417__$1;(statearr_41461_41534[(1)] = (33));
} else
{var statearr_41462_41535 = state_41417__$1;(statearr_41462_41535[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (25)))
{var inst_41356 = (state_41417[(9)]);var inst_41355 = (state_41417[(18)]);var inst_41358 = (inst_41356 < inst_41355);var inst_41359 = inst_41358;var state_41417__$1 = state_41417;if(cljs.core.truth_(inst_41359))
{var statearr_41463_41536 = state_41417__$1;(statearr_41463_41536[(1)] = (27));
} else
{var statearr_41464_41537 = state_41417__$1;(statearr_41464_41537[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (34)))
{var state_41417__$1 = state_41417;var statearr_41465_41538 = state_41417__$1;(statearr_41465_41538[(2)] = null);
(statearr_41465_41538[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (17)))
{var state_41417__$1 = state_41417;var statearr_41466_41539 = state_41417__$1;(statearr_41466_41539[(2)] = null);
(statearr_41466_41539[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (3)))
{var inst_41415 = (state_41417[(2)]);var state_41417__$1 = state_41417;return cljs.core.async.impl.ioc_helpers.return_chan(state_41417__$1,inst_41415);
} else
{if((state_val_41418 === (12)))
{var inst_41340 = (state_41417[(2)]);var state_41417__$1 = state_41417;var statearr_41467_41540 = state_41417__$1;(statearr_41467_41540[(2)] = inst_41340);
(statearr_41467_41540[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (2)))
{var state_41417__$1 = state_41417;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41417__$1,(4),ch);
} else
{if((state_val_41418 === (23)))
{var state_41417__$1 = state_41417;var statearr_41468_41541 = state_41417__$1;(statearr_41468_41541[(2)] = null);
(statearr_41468_41541[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (35)))
{var inst_41399 = (state_41417[(2)]);var state_41417__$1 = state_41417;var statearr_41469_41542 = state_41417__$1;(statearr_41469_41542[(2)] = inst_41399);
(statearr_41469_41542[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (19)))
{var inst_41314 = (state_41417[(7)]);var inst_41318 = cljs.core.chunk_first(inst_41314);var inst_41319 = cljs.core.chunk_rest(inst_41314);var inst_41320 = cljs.core.count(inst_41318);var inst_41294 = inst_41319;var inst_41295 = inst_41318;var inst_41296 = inst_41320;var inst_41297 = (0);var state_41417__$1 = (function (){var statearr_41470 = state_41417;(statearr_41470[(12)] = inst_41297);
(statearr_41470[(13)] = inst_41295);
(statearr_41470[(15)] = inst_41296);
(statearr_41470[(16)] = inst_41294);
return statearr_41470;
})();var statearr_41471_41543 = state_41417__$1;(statearr_41471_41543[(2)] = null);
(statearr_41471_41543[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (11)))
{var inst_41314 = (state_41417[(7)]);var inst_41294 = (state_41417[(16)]);var inst_41314__$1 = cljs.core.seq(inst_41294);var state_41417__$1 = (function (){var statearr_41472 = state_41417;(statearr_41472[(7)] = inst_41314__$1);
return statearr_41472;
})();if(inst_41314__$1)
{var statearr_41473_41544 = state_41417__$1;(statearr_41473_41544[(1)] = (16));
} else
{var statearr_41474_41545 = state_41417__$1;(statearr_41474_41545[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (9)))
{var inst_41342 = (state_41417[(2)]);var state_41417__$1 = state_41417;var statearr_41475_41546 = state_41417__$1;(statearr_41475_41546[(2)] = inst_41342);
(statearr_41475_41546[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (5)))
{var inst_41292 = (function (){var G__41476 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41476) : cljs.core.deref.call(null,G__41476));
})();var inst_41293 = cljs.core.seq(inst_41292);var inst_41294 = inst_41293;var inst_41295 = null;var inst_41296 = (0);var inst_41297 = (0);var state_41417__$1 = (function (){var statearr_41477 = state_41417;(statearr_41477[(12)] = inst_41297);
(statearr_41477[(13)] = inst_41295);
(statearr_41477[(15)] = inst_41296);
(statearr_41477[(16)] = inst_41294);
return statearr_41477;
})();var statearr_41478_41547 = state_41417__$1;(statearr_41478_41547[(2)] = null);
(statearr_41478_41547[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (14)))
{var state_41417__$1 = state_41417;var statearr_41479_41548 = state_41417__$1;(statearr_41479_41548[(2)] = null);
(statearr_41479_41548[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (45)))
{var inst_41407 = (state_41417[(2)]);var state_41417__$1 = state_41417;var statearr_41480_41549 = state_41417__$1;(statearr_41480_41549[(2)] = inst_41407);
(statearr_41480_41549[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (26)))
{var inst_41345 = (state_41417[(30)]);var inst_41403 = (state_41417[(2)]);var inst_41404 = cljs.core.seq(inst_41345);var state_41417__$1 = (function (){var statearr_41481 = state_41417;(statearr_41481[(32)] = inst_41403);
return statearr_41481;
})();if(inst_41404)
{var statearr_41482_41550 = state_41417__$1;(statearr_41482_41550[(1)] = (42));
} else
{var statearr_41483_41551 = state_41417__$1;(statearr_41483_41551[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (16)))
{var inst_41314 = (state_41417[(7)]);var inst_41316 = cljs.core.chunked_seq_QMARK_(inst_41314);var state_41417__$1 = state_41417;if(inst_41316)
{var statearr_41487_41552 = state_41417__$1;(statearr_41487_41552[(1)] = (19));
} else
{var statearr_41488_41553 = state_41417__$1;(statearr_41488_41553[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (38)))
{var inst_41396 = (state_41417[(2)]);var state_41417__$1 = state_41417;var statearr_41489_41554 = state_41417__$1;(statearr_41489_41554[(2)] = inst_41396);
(statearr_41489_41554[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (30)))
{var inst_41356 = (state_41417[(9)]);var inst_41355 = (state_41417[(18)]);var inst_41354 = (state_41417[(10)]);var inst_41353 = (state_41417[(19)]);var inst_41370 = (state_41417[(2)]);var inst_41371 = (inst_41356 + (1));var tmp41484 = inst_41355;var tmp41485 = inst_41354;var tmp41486 = inst_41353;var inst_41353__$1 = tmp41486;var inst_41354__$1 = tmp41485;var inst_41355__$1 = tmp41484;var inst_41356__$1 = inst_41371;var state_41417__$1 = (function (){var statearr_41490 = state_41417;(statearr_41490[(9)] = inst_41356__$1);
(statearr_41490[(18)] = inst_41355__$1);
(statearr_41490[(10)] = inst_41354__$1);
(statearr_41490[(19)] = inst_41353__$1);
(statearr_41490[(33)] = inst_41370);
return statearr_41490;
})();var statearr_41491_41555 = state_41417__$1;(statearr_41491_41555[(2)] = null);
(statearr_41491_41555[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (10)))
{var inst_41297 = (state_41417[(12)]);var inst_41295 = (state_41417[(13)]);var inst_41303 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_41295,inst_41297);var inst_41304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41303,(0),null);var inst_41305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41303,(1),null);var state_41417__$1 = (function (){var statearr_41492 = state_41417;(statearr_41492[(28)] = inst_41304);
return statearr_41492;
})();if(cljs.core.truth_(inst_41305))
{var statearr_41493_41556 = state_41417__$1;(statearr_41493_41556[(1)] = (13));
} else
{var statearr_41494_41557 = state_41417__$1;(statearr_41494_41557[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (18)))
{var inst_41338 = (state_41417[(2)]);var state_41417__$1 = state_41417;var statearr_41495_41558 = state_41417__$1;(statearr_41495_41558[(2)] = inst_41338);
(statearr_41495_41558[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (42)))
{var state_41417__$1 = state_41417;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41417__$1,(45),dchan);
} else
{if((state_val_41418 === (37)))
{var inst_41374 = (state_41417[(17)]);var inst_41383 = cljs.core.first(inst_41374);var state_41417__$1 = (function (){var statearr_41496 = state_41417;(statearr_41496[(25)] = inst_41383);
return statearr_41496;
})();var statearr_41497_41559 = state_41417__$1;(statearr_41497_41559[(2)] = null);
(statearr_41497_41559[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41418 === (8)))
{var inst_41297 = (state_41417[(12)]);var inst_41296 = (state_41417[(15)]);var inst_41299 = (inst_41297 < inst_41296);var inst_41300 = inst_41299;var state_41417__$1 = state_41417;if(cljs.core.truth_(inst_41300))
{var statearr_41498_41560 = state_41417__$1;(statearr_41498_41560[(1)] = (10));
} else
{var statearr_41499_41561 = state_41417__$1;(statearr_41499_41561[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23002__auto___41509,cs,m,dchan,dctr,done))
;return ((function (switch__22987__auto__,c__23002__auto___41509,cs,m,dchan,dctr,done){
return (function() {
var state_machine__22988__auto__ = null;
var state_machine__22988__auto____0 = (function (){var statearr_41503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41503[(0)] = state_machine__22988__auto__);
(statearr_41503[(1)] = (1));
return statearr_41503;
});
var state_machine__22988__auto____1 = (function (state_41417){while(true){
var ret_value__22989__auto__ = (function (){try{while(true){
var result__22990__auto__ = switch__22987__auto__(state_41417);if(cljs.core.keyword_identical_QMARK_(result__22990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22990__auto__;
}
break;
}
}catch (e41504){if((e41504 instanceof Object))
{var ex__22991__auto__ = e41504;var statearr_41505_41562 = state_41417;(statearr_41505_41562[(5)] = ex__22991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41417);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e41504;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__41563 = state_41417;
state_41417 = G__41563;
continue;
}
} else
{return ret_value__22989__auto__;
}
break;
}
});
state_machine__22988__auto__ = function(state_41417){
switch(arguments.length){
case 0:
return state_machine__22988__auto____0.call(this);
case 1:
return state_machine__22988__auto____1.call(this,state_41417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22988__auto____0;
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22988__auto____1;
return state_machine__22988__auto__;
})()
;})(switch__22987__auto__,c__23002__auto___41509,cs,m,dchan,dctr,done))
})();var state__23004__auto__ = (function (){var statearr_41506 = (function (){return (f__23003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23003__auto__.cljs$core$IFn$_invoke$arity$0() : f__23003__auto__.call(null));
})();(statearr_41506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23002__auto___41509);
return statearr_41506;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23004__auto__);
});})(c__23002__auto___41509,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_(mult);
});
cljs.core.async.Mix = (function (){var obj41568 = {};return obj41568;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__19670__auto__ = m;if(and__19670__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__19670__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__20728__auto__ = (((m == null))?null:m);return (function (){var or__19687__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__41572 = x__20728__auto__;return goog.typeOf(G__41572);
})()]);if(or__19687__auto__)
{return or__19687__auto__;
} else
{var or__19687__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__19687__auto____$1)
{return or__19687__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__19670__auto__ = m;if(and__19670__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__19670__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__20728__auto__ = (((m == null))?null:m);return (function (){var or__19687__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__41576 = x__20728__auto__;return goog.typeOf(G__41576);
})()]);if(or__19687__auto__)
{return or__19687__auto__;
} else
{var or__19687__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__19687__auto____$1)
{return or__19687__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__19670__auto__ = m;if(and__19670__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__19670__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__20728__auto__ = (((m == null))?null:m);return (function (){var or__19687__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__41580 = x__20728__auto__;return goog.typeOf(G__41580);
})()]);if(or__19687__auto__)
{return or__19687__auto__;
} else
{var or__19687__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__19687__auto____$1)
{return or__19687__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__19670__auto__ = m;if(and__19670__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__19670__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__20728__auto__ = (((m == null))?null:m);return (function (){var or__19687__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__41584 = x__20728__auto__;return goog.typeOf(G__41584);
})()]);if(or__19687__auto__)
{return or__19687__auto__;
} else
{var or__19687__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__19687__auto____$1)
{return or__19687__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__19670__auto__ = m;if(and__19670__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__19670__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__20728__auto__ = (((m == null))?null:m);return (function (){var or__19687__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__41588 = x__20728__auto__;return goog.typeOf(G__41588);
})()]);if(or__19687__auto__)
{return or__19687__auto__;
} else
{var or__19687__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__19687__auto____$1)
{return or__19687__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__41712 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41712) : cljs.core.atom.call(null,G__41712));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = (function (){var G__41713 = new cljs.core.Keyword(null,"mute","mute",1151223646);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41713) : cljs.core.atom.call(null,G__41713));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__41714 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__41714) : attr.call(null,G__41714));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__41715 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41715) : cljs.core.deref.call(null,G__41715));
})();var mode = (function (){var G__41716 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__41716) : cljs.core.deref.call(null,G__41716));
})();var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t41717 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41717 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41718){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta41718 = meta41718;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41717.cljs$lang$type = true;
cljs.core.async.t41717.cljs$lang$ctorStr = "cljs.core.async/t41717";
cljs.core.async.t41717.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"cljs.core.async/t41717");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41717.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t41717.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41717.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41717.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__41720_41835 = self__.cs;var G__41721_41836 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__41720_41835,G__41721_41836) : cljs.core.reset_BANG_.call(null,G__41720_41835,G__41721_41836));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41717.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41717.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__41722 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__41722) : self__.solo_modes.call(null,G__41722));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__41723_41837 = self__.solo_mode;var G__41724_41838 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__41723_41837,G__41724_41838) : cljs.core.reset_BANG_.call(null,G__41723_41837,G__41724_41838));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41717.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t41717.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41717.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41719){var self__ = this;
var _41719__$1 = this;return self__.meta41718;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41719,meta41718__$1){var self__ = this;
var _41719__$1 = this;return (new cljs.core.async.t41717(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta41718__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t41717 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t41717(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41718){return (new cljs.core.async.t41717(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41718));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t41717(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__23002__auto___41839 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23002__auto___41839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__23003__auto__ = (function (){var switch__22987__auto__ = ((function (c__23002__auto___41839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_41791){var state_val_41792 = (state_41791[(1)]);if((state_val_41792 === (7)))
{var inst_41738 = (state_41791[(7)]);var inst_41743 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_41738);var state_41791__$1 = state_41791;var statearr_41793_41840 = state_41791__$1;(statearr_41793_41840[(2)] = inst_41743);
(statearr_41793_41840[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41792 === (20)))
{var inst_41753 = (state_41791[(8)]);var state_41791__$1 = state_41791;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41791__$1,(23),out,inst_41753);
} else
{if((state_val_41792 === (1)))
{var inst_41728 = (state_41791[(9)]);var inst_41728__$1 = calc_state();var inst_41729 = cljs.core.seq_QMARK_(inst_41728__$1);var state_41791__$1 = (function (){var statearr_41794 = state_41791;(statearr_41794[(9)] = inst_41728__$1);
return statearr_41794;
})();if(inst_41729)
{var statearr_41795_41841 = state_41791__$1;(statearr_41795_41841[(1)] = (2));
} else
{var statearr_41796_41842 = state_41791__$1;(statearr_41796_41842[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41792 === (4)))
{var inst_41728 = (state_41791[(9)]);var inst_41734 = (state_41791[(2)]);var inst_41735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41734,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_41736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41734,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_41737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41734,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_41738 = inst_41728;var state_41791__$1 = (function (){var statearr_41797 = state_41791;(statearr_41797[(10)] = inst_41737);
(statearr_41797[(11)] = inst_41736);
(statearr_41797[(12)] = inst_41735);
(statearr_41797[(7)] = inst_41738);
return statearr_41797;
})();var statearr_41798_41843 = state_41791__$1;(statearr_41798_41843[(2)] = null);
(statearr_41798_41843[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41792 === (15)))
{var state_41791__$1 = state_41791;var statearr_41799_41844 = state_41791__$1;(statearr_41799_41844[(2)] = null);
(statearr_41799_41844[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41792 === (21)))
{var state_41791__$1 = state_41791;var statearr_41800_41845 = state_41791__$1;(statearr_41800_41845[(2)] = null);
(statearr_41800_41845[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41792 === (13)))
{var inst_41787 = (state_41791[(2)]);var state_41791__$1 = state_41791;var statearr_41801_41846 = state_41791__$1;(statearr_41801_41846[(2)] = inst_41787);
(statearr_41801_41846[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41792 === (22)))
{var inst_41746 = (state_41791[(13)]);var inst_41784 = (state_41791[(2)]);var inst_41738 = inst_41746;var state_41791__$1 = (function (){var statearr_41802 = state_41791;(statearr_41802[(14)] = inst_41784);
(statearr_41802[(7)] = inst_41738);
return statearr_41802;
})();var statearr_41803_41847 = state_41791__$1;(statearr_41803_41847[(2)] = null);
(statearr_41803_41847[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41792 === (6)))
{var inst_41789 = (state_41791[(2)]);var state_41791__$1 = state_41791;return cljs.core.async.impl.ioc_helpers.return_chan(state_41791__$1,inst_41789);
} else
{if((state_val_41792 === (17)))
{var inst_41769 = (state_41791[(15)]);var state_41791__$1 = state_41791;var statearr_41804_41848 = state_41791__$1;(statearr_41804_41848[(2)] = inst_41769);
(statearr_41804_41848[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41792 === (3)))
{var inst_41728 = (state_41791[(9)]);var state_41791__$1 = state_41791;var statearr_41805_41849 = state_41791__$1;(statearr_41805_41849[(2)] = inst_41728);
(statearr_41805_41849[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41792 === (12)))
{var inst_41749 = (state_41791[(16)]);var inst_41754 = (state_41791[(17)]);var inst_41769 = (state_41791[(15)]);var inst_41769__$1 = (function (){var G__41806 = inst_41754;return (inst_41749.cljs$core$IFn$_invoke$arity$1 ? inst_41749.cljs$core$IFn$_invoke$arity$1(G__41806) : inst_41749.call(null,G__41806));
})();var state_41791__$1 = (function (){var statearr_41807 = state_41791;(statearr_41807[(15)] = inst_41769__$1);
return statearr_41807;
})();if(cljs.core.truth_(inst_41769__$1))
{var statearr_41808_41850 = state_41791__$1;(statearr_41808_41850[(1)] = (17));
} else
{var statearr_41809_41851 = state_41791__$1;(statearr_41809_41851[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41792 === (2)))
{var inst_41728 = (state_41791[(9)]);var inst_41731 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_41728);var state_41791__$1 = state_41791;var statearr_41810_41852 = state_41791__$1;(statearr_41810_41852[(2)] = inst_41731);
(statearr_41810_41852[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41792 === (23)))
{var inst_41781 = (state_41791[(2)]);var state_41791__$1 = state_41791;var statearr_41811_41853 = state_41791__$1;(statearr_41811_41853[(2)] = inst_41781);
(statearr_41811_41853[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41792 === (19)))
{var inst_41778 = (state_41791[(2)]);var state_41791__$1 = state_41791;if(cljs.core.truth_(inst_41778))
{var statearr_41812_41854 = state_41791__$1;(statearr_41812_41854[(1)] = (20));
} else
{var statearr_41813_41855 = state_41791__$1;(statearr_41813_41855[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41792 === (11)))
{var inst_41753 = (state_41791[(8)]);var inst_41759 = (inst_41753 == null);var state_41791__$1 = state_41791;if(cljs.core.truth_(inst_41759))
{var statearr_41814_41856 = state_41791__$1;(statearr_41814_41856[(1)] = (14));
} else
{var statearr_41815_41857 = state_41791__$1;(statearr_41815_41857[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41792 === (9)))
{var inst_41746 = (state_41791[(13)]);var inst_41746__$1 = (state_41791[(2)]);var inst_41747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41746__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_41748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41746__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_41749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41746__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_41791__$1 = (function (){var statearr_41816 = state_41791;(statearr_41816[(18)] = inst_41748);
(statearr_41816[(13)] = inst_41746__$1);
(statearr_41816[(16)] = inst_41749);
return statearr_41816;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_41791__$1,(10),inst_41747);
} else
{if((state_val_41792 === (5)))
{var inst_41738 = (state_41791[(7)]);var inst_41741 = cljs.core.seq_QMARK_(inst_41738);var state_41791__$1 = state_41791;if(inst_41741)
{var statearr_41817_41858 = state_41791__$1;(statearr_41817_41858[(1)] = (7));
} else
{var statearr_41818_41859 = state_41791__$1;(statearr_41818_41859[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41792 === (14)))
{var inst_41754 = (state_41791[(17)]);var inst_41761 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_41754);var state_41791__$1 = state_41791;var statearr_41819_41860 = state_41791__$1;(statearr_41819_41860[(2)] = inst_41761);
(statearr_41819_41860[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41792 === (16)))
{var inst_41764 = (state_41791[(2)]);var inst_41765 = calc_state();var inst_41738 = inst_41765;var state_41791__$1 = (function (){var statearr_41820 = state_41791;(statearr_41820[(19)] = inst_41764);
(statearr_41820[(7)] = inst_41738);
return statearr_41820;
})();var statearr_41821_41861 = state_41791__$1;(statearr_41821_41861[(2)] = null);
(statearr_41821_41861[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41792 === (10)))
{var inst_41754 = (state_41791[(17)]);var inst_41753 = (state_41791[(8)]);var inst_41752 = (state_41791[(2)]);var inst_41753__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41752,(0),null);var inst_41754__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41752,(1),null);var inst_41755 = (inst_41753__$1 == null);var inst_41756 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41754__$1,change);var inst_41757 = (inst_41755) || (inst_41756);var state_41791__$1 = (function (){var statearr_41822 = state_41791;(statearr_41822[(17)] = inst_41754__$1);
(statearr_41822[(8)] = inst_41753__$1);
return statearr_41822;
})();if(cljs.core.truth_(inst_41757))
{var statearr_41823_41862 = state_41791__$1;(statearr_41823_41862[(1)] = (11));
} else
{var statearr_41824_41863 = state_41791__$1;(statearr_41824_41863[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41792 === (18)))
{var inst_41748 = (state_41791[(18)]);var inst_41749 = (state_41791[(16)]);var inst_41754 = (state_41791[(17)]);var inst_41773 = cljs.core.empty_QMARK_(inst_41749);var inst_41774 = (function (){var G__41825 = inst_41754;return (inst_41748.cljs$core$IFn$_invoke$arity$1 ? inst_41748.cljs$core$IFn$_invoke$arity$1(G__41825) : inst_41748.call(null,G__41825));
})();var inst_41775 = cljs.core.not(inst_41774);var inst_41776 = (inst_41773) && (inst_41775);var state_41791__$1 = state_41791;var statearr_41826_41864 = state_41791__$1;(statearr_41826_41864[(2)] = inst_41776);
(statearr_41826_41864[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41792 === (8)))
{var inst_41738 = (state_41791[(7)]);var state_41791__$1 = state_41791;var statearr_41827_41865 = state_41791__$1;(statearr_41827_41865[(2)] = inst_41738);
(statearr_41827_41865[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23002__auto___41839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__22987__auto__,c__23002__auto___41839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__22988__auto__ = null;
var state_machine__22988__auto____0 = (function (){var statearr_41831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41831[(0)] = state_machine__22988__auto__);
(statearr_41831[(1)] = (1));
return statearr_41831;
});
var state_machine__22988__auto____1 = (function (state_41791){while(true){
var ret_value__22989__auto__ = (function (){try{while(true){
var result__22990__auto__ = switch__22987__auto__(state_41791);if(cljs.core.keyword_identical_QMARK_(result__22990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22990__auto__;
}
break;
}
}catch (e41832){if((e41832 instanceof Object))
{var ex__22991__auto__ = e41832;var statearr_41833_41866 = state_41791;(statearr_41833_41866[(5)] = ex__22991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41791);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e41832;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__41867 = state_41791;
state_41791 = G__41867;
continue;
}
} else
{return ret_value__22989__auto__;
}
break;
}
});
state_machine__22988__auto__ = function(state_41791){
switch(arguments.length){
case 0:
return state_machine__22988__auto____0.call(this);
case 1:
return state_machine__22988__auto____1.call(this,state_41791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22988__auto____0;
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22988__auto____1;
return state_machine__22988__auto__;
})()
;})(switch__22987__auto__,c__23002__auto___41839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__23004__auto__ = (function (){var statearr_41834 = (function (){return (f__23003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23003__auto__.cljs$core$IFn$_invoke$arity$0() : f__23003__auto__.call(null));
})();(statearr_41834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23002__auto___41839);
return statearr_41834;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23004__auto__);
});})(c__23002__auto___41839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_(mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_(mix,mode);
});
cljs.core.async.Pub = (function (){var obj41869 = {};return obj41869;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__19670__auto__ = p;if(and__19670__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__19670__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__20728__auto__ = (((p == null))?null:p);return (function (){var or__19687__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__41873 = x__20728__auto__;return goog.typeOf(G__41873);
})()]);if(or__19687__auto__)
{return or__19687__auto__;
} else
{var or__19687__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__19687__auto____$1)
{return or__19687__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__19670__auto__ = p;if(and__19670__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__19670__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__20728__auto__ = (((p == null))?null:p);return (function (){var or__19687__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__41877 = x__20728__auto__;return goog.typeOf(G__41877);
})()]);if(or__19687__auto__)
{return or__19687__auto__;
} else
{var or__19687__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__19687__auto____$1)
{return or__19687__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__19670__auto__ = p;if(and__19670__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__19670__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__20728__auto__ = (((p == null))?null:p);return (function (){var or__19687__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__41883 = x__20728__auto__;return goog.typeOf(G__41883);
})()]);if(or__19687__auto__)
{return or__19687__auto__;
} else
{var or__19687__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__19687__auto____$1)
{return or__19687__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__19670__auto__ = p;if(and__19670__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__19670__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__20728__auto__ = (((p == null))?null:p);return (function (){var or__19687__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__41885 = x__20728__auto__;return goog.typeOf(G__41885);
})()]);if(or__19687__auto__)
{return or__19687__auto__;
} else
{var or__19687__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__19687__auto____$1)
{return or__19687__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__42026 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__42026) : cljs.core.atom.call(null,G__42026));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__19687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__42028 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42028) : cljs.core.deref.call(null,G__42028));
})(),topic);if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__19687__auto__,mults){
return (function (p1__41886_SHARP_){if(cljs.core.truth_((function (){var G__42029 = topic;return (p1__41886_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__41886_SHARP_.cljs$core$IFn$_invoke$arity$1(G__42029) : p1__41886_SHARP_.call(null,G__42029));
})()))
{return p1__41886_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__41886_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__42030 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__42030) : buf_fn.call(null,G__42030));
})())));
}
});})(or__19687__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t42031 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42031 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta42032){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta42032 = meta42032;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42031.cljs$lang$type = true;
cljs.core.async.t42031.cljs$lang$ctorStr = "cljs.core.async/t42031";
cljs.core.async.t42031.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"cljs.core.async/t42031");
});})(mults,ensure_mult))
;
cljs.core.async.t42031.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t42031.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__42034 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__42034) : self__.ensure_mult.call(null,G__42034));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t42031.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__42035 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42035) : cljs.core.deref.call(null,G__42035));
})(),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t42031.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__42036 = self__.mults;var G__42037 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__42036,G__42037) : cljs.core.reset_BANG_.call(null,G__42036,G__42037));
});})(mults,ensure_mult))
;
cljs.core.async.t42031.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t42031.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t42031.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t42031.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42033){var self__ = this;
var _42033__$1 = this;return self__.meta42032;
});})(mults,ensure_mult))
;
cljs.core.async.t42031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42033,meta42032__$1){var self__ = this;
var _42033__$1 = this;return (new cljs.core.async.t42031(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta42032__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t42031 = ((function (mults,ensure_mult){
return (function __GT_t42031(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta42032){return (new cljs.core.async.t42031(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta42032));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t42031(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__23002__auto___42162 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23002__auto___42162,mults,ensure_mult,p){
return (function (){var f__23003__auto__ = (function (){var switch__22987__auto__ = ((function (c__23002__auto___42162,mults,ensure_mult,p){
return (function (state_42111){var state_val_42112 = (state_42111[(1)]);if((state_val_42112 === (7)))
{var inst_42107 = (state_42111[(2)]);var state_42111__$1 = state_42111;var statearr_42113_42163 = state_42111__$1;(statearr_42113_42163[(2)] = inst_42107);
(statearr_42113_42163[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42112 === (20)))
{var state_42111__$1 = state_42111;var statearr_42114_42164 = state_42111__$1;(statearr_42114_42164[(2)] = null);
(statearr_42114_42164[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42112 === (1)))
{var state_42111__$1 = state_42111;var statearr_42115_42165 = state_42111__$1;(statearr_42115_42165[(2)] = null);
(statearr_42115_42165[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42112 === (24)))
{var inst_42090 = (state_42111[(7)]);var inst_42040 = (state_42111[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_42111,(23),Object,null,(22));var inst_42097 = cljs.core.async.muxch_STAR_(inst_42090);var state_42111__$1 = state_42111;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42111__$1,(25),inst_42097,inst_42040);
} else
{if((state_val_42112 === (4)))
{var inst_42040 = (state_42111[(8)]);var inst_42040__$1 = (state_42111[(2)]);var inst_42041 = (inst_42040__$1 == null);var state_42111__$1 = (function (){var statearr_42116 = state_42111;(statearr_42116[(8)] = inst_42040__$1);
return statearr_42116;
})();if(cljs.core.truth_(inst_42041))
{var statearr_42117_42166 = state_42111__$1;(statearr_42117_42166[(1)] = (5));
} else
{var statearr_42118_42167 = state_42111__$1;(statearr_42118_42167[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42112 === (15)))
{var inst_42082 = (state_42111[(2)]);var state_42111__$1 = state_42111;var statearr_42119_42168 = state_42111__$1;(statearr_42119_42168[(2)] = inst_42082);
(statearr_42119_42168[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42112 === (21)))
{var inst_42104 = (state_42111[(2)]);var state_42111__$1 = (function (){var statearr_42120 = state_42111;(statearr_42120[(9)] = inst_42104);
return statearr_42120;
})();var statearr_42121_42169 = state_42111__$1;(statearr_42121_42169[(2)] = null);
(statearr_42121_42169[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42112 === (13)))
{var inst_42064 = (state_42111[(10)]);var inst_42066 = cljs.core.chunked_seq_QMARK_(inst_42064);var state_42111__$1 = state_42111;if(inst_42066)
{var statearr_42122_42170 = state_42111__$1;(statearr_42122_42170[(1)] = (16));
} else
{var statearr_42123_42171 = state_42111__$1;(statearr_42123_42171[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42112 === (22)))
{var inst_42101 = (state_42111[(2)]);var state_42111__$1 = state_42111;var statearr_42124_42172 = state_42111__$1;(statearr_42124_42172[(2)] = inst_42101);
(statearr_42124_42172[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42112 === (6)))
{var inst_42090 = (state_42111[(7)]);var inst_42088 = (state_42111[(11)]);var inst_42040 = (state_42111[(8)]);var inst_42088__$1 = (function (){var G__42125 = inst_42040;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__42125) : topic_fn.call(null,G__42125));
})();var inst_42089 = (function (){var G__42126 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42126) : cljs.core.deref.call(null,G__42126));
})();var inst_42090__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42089,inst_42088__$1);var state_42111__$1 = (function (){var statearr_42127 = state_42111;(statearr_42127[(7)] = inst_42090__$1);
(statearr_42127[(11)] = inst_42088__$1);
return statearr_42127;
})();if(cljs.core.truth_(inst_42090__$1))
{var statearr_42128_42173 = state_42111__$1;(statearr_42128_42173[(1)] = (19));
} else
{var statearr_42129_42174 = state_42111__$1;(statearr_42129_42174[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42112 === (25)))
{var inst_42099 = (state_42111[(2)]);var state_42111__$1 = state_42111;var statearr_42130_42175 = state_42111__$1;(statearr_42130_42175[(2)] = inst_42099);
cljs.core.async.impl.ioc_helpers.process_exception(state_42111__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42112 === (17)))
{var inst_42064 = (state_42111[(10)]);var inst_42073 = cljs.core.first(inst_42064);var inst_42074 = cljs.core.async.muxch_STAR_(inst_42073);var inst_42075 = cljs.core.async.close_BANG_(inst_42074);var inst_42076 = cljs.core.next(inst_42064);var inst_42050 = inst_42076;var inst_42051 = null;var inst_42052 = (0);var inst_42053 = (0);var state_42111__$1 = (function (){var statearr_42131 = state_42111;(statearr_42131[(12)] = inst_42052);
(statearr_42131[(13)] = inst_42050);
(statearr_42131[(14)] = inst_42075);
(statearr_42131[(15)] = inst_42051);
(statearr_42131[(16)] = inst_42053);
return statearr_42131;
})();var statearr_42132_42176 = state_42111__$1;(statearr_42132_42176[(2)] = null);
(statearr_42132_42176[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42112 === (3)))
{var inst_42109 = (state_42111[(2)]);var state_42111__$1 = state_42111;return cljs.core.async.impl.ioc_helpers.return_chan(state_42111__$1,inst_42109);
} else
{if((state_val_42112 === (12)))
{var inst_42084 = (state_42111[(2)]);var state_42111__$1 = state_42111;var statearr_42133_42177 = state_42111__$1;(statearr_42133_42177[(2)] = inst_42084);
(statearr_42133_42177[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42112 === (2)))
{var state_42111__$1 = state_42111;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42111__$1,(4),ch);
} else
{if((state_val_42112 === (23)))
{var inst_42088 = (state_42111[(11)]);var inst_42092 = (state_42111[(2)]);var inst_42093 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_42088);var state_42111__$1 = (function (){var statearr_42134 = state_42111;(statearr_42134[(17)] = inst_42092);
return statearr_42134;
})();var statearr_42135_42178 = state_42111__$1;(statearr_42135_42178[(2)] = inst_42093);
cljs.core.async.impl.ioc_helpers.process_exception(state_42111__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42112 === (19)))
{var state_42111__$1 = state_42111;var statearr_42136_42179 = state_42111__$1;(statearr_42136_42179[(2)] = null);
(statearr_42136_42179[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42112 === (11)))
{var inst_42050 = (state_42111[(13)]);var inst_42064 = (state_42111[(10)]);var inst_42064__$1 = cljs.core.seq(inst_42050);var state_42111__$1 = (function (){var statearr_42137 = state_42111;(statearr_42137[(10)] = inst_42064__$1);
return statearr_42137;
})();if(inst_42064__$1)
{var statearr_42138_42180 = state_42111__$1;(statearr_42138_42180[(1)] = (13));
} else
{var statearr_42139_42181 = state_42111__$1;(statearr_42139_42181[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42112 === (9)))
{var inst_42086 = (state_42111[(2)]);var state_42111__$1 = state_42111;var statearr_42140_42182 = state_42111__$1;(statearr_42140_42182[(2)] = inst_42086);
(statearr_42140_42182[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42112 === (5)))
{var inst_42047 = (function (){var G__42141 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42141) : cljs.core.deref.call(null,G__42141));
})();var inst_42048 = cljs.core.vals(inst_42047);var inst_42049 = cljs.core.seq(inst_42048);var inst_42050 = inst_42049;var inst_42051 = null;var inst_42052 = (0);var inst_42053 = (0);var state_42111__$1 = (function (){var statearr_42142 = state_42111;(statearr_42142[(12)] = inst_42052);
(statearr_42142[(13)] = inst_42050);
(statearr_42142[(15)] = inst_42051);
(statearr_42142[(16)] = inst_42053);
return statearr_42142;
})();var statearr_42143_42183 = state_42111__$1;(statearr_42143_42183[(2)] = null);
(statearr_42143_42183[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42112 === (14)))
{var state_42111__$1 = state_42111;var statearr_42147_42184 = state_42111__$1;(statearr_42147_42184[(2)] = null);
(statearr_42147_42184[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42112 === (16)))
{var inst_42064 = (state_42111[(10)]);var inst_42068 = cljs.core.chunk_first(inst_42064);var inst_42069 = cljs.core.chunk_rest(inst_42064);var inst_42070 = cljs.core.count(inst_42068);var inst_42050 = inst_42069;var inst_42051 = inst_42068;var inst_42052 = inst_42070;var inst_42053 = (0);var state_42111__$1 = (function (){var statearr_42148 = state_42111;(statearr_42148[(12)] = inst_42052);
(statearr_42148[(13)] = inst_42050);
(statearr_42148[(15)] = inst_42051);
(statearr_42148[(16)] = inst_42053);
return statearr_42148;
})();var statearr_42149_42185 = state_42111__$1;(statearr_42149_42185[(2)] = null);
(statearr_42149_42185[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42112 === (10)))
{var inst_42052 = (state_42111[(12)]);var inst_42050 = (state_42111[(13)]);var inst_42051 = (state_42111[(15)]);var inst_42053 = (state_42111[(16)]);var inst_42058 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_42051,inst_42053);var inst_42059 = cljs.core.async.muxch_STAR_(inst_42058);var inst_42060 = cljs.core.async.close_BANG_(inst_42059);var inst_42061 = (inst_42053 + (1));var tmp42144 = inst_42052;var tmp42145 = inst_42050;var tmp42146 = inst_42051;var inst_42050__$1 = tmp42145;var inst_42051__$1 = tmp42146;var inst_42052__$1 = tmp42144;var inst_42053__$1 = inst_42061;var state_42111__$1 = (function (){var statearr_42150 = state_42111;(statearr_42150[(18)] = inst_42060);
(statearr_42150[(12)] = inst_42052__$1);
(statearr_42150[(13)] = inst_42050__$1);
(statearr_42150[(15)] = inst_42051__$1);
(statearr_42150[(16)] = inst_42053__$1);
return statearr_42150;
})();var statearr_42151_42186 = state_42111__$1;(statearr_42151_42186[(2)] = null);
(statearr_42151_42186[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42112 === (18)))
{var inst_42079 = (state_42111[(2)]);var state_42111__$1 = state_42111;var statearr_42152_42187 = state_42111__$1;(statearr_42152_42187[(2)] = inst_42079);
(statearr_42152_42187[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42112 === (8)))
{var inst_42052 = (state_42111[(12)]);var inst_42053 = (state_42111[(16)]);var inst_42055 = (inst_42053 < inst_42052);var inst_42056 = inst_42055;var state_42111__$1 = state_42111;if(cljs.core.truth_(inst_42056))
{var statearr_42153_42188 = state_42111__$1;(statearr_42153_42188[(1)] = (10));
} else
{var statearr_42154_42189 = state_42111__$1;(statearr_42154_42189[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23002__auto___42162,mults,ensure_mult,p))
;return ((function (switch__22987__auto__,c__23002__auto___42162,mults,ensure_mult,p){
return (function() {
var state_machine__22988__auto__ = null;
var state_machine__22988__auto____0 = (function (){var statearr_42158 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42158[(0)] = state_machine__22988__auto__);
(statearr_42158[(1)] = (1));
return statearr_42158;
});
var state_machine__22988__auto____1 = (function (state_42111){while(true){
var ret_value__22989__auto__ = (function (){try{while(true){
var result__22990__auto__ = switch__22987__auto__(state_42111);if(cljs.core.keyword_identical_QMARK_(result__22990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22990__auto__;
}
break;
}
}catch (e42159){if((e42159 instanceof Object))
{var ex__22991__auto__ = e42159;var statearr_42160_42190 = state_42111;(statearr_42160_42190[(5)] = ex__22991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42111);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e42159;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__42191 = state_42111;
state_42111 = G__42191;
continue;
}
} else
{return ret_value__22989__auto__;
}
break;
}
});
state_machine__22988__auto__ = function(state_42111){
switch(arguments.length){
case 0:
return state_machine__22988__auto____0.call(this);
case 1:
return state_machine__22988__auto____1.call(this,state_42111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22988__auto____0;
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22988__auto____1;
return state_machine__22988__auto__;
})()
;})(switch__22987__auto__,c__23002__auto___42162,mults,ensure_mult,p))
})();var state__23004__auto__ = (function (){var statearr_42161 = (function (){return (f__23003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23003__auto__.cljs$core$IFn$_invoke$arity$0() : f__23003__auto__.call(null));
})();(statearr_42161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23002__auto___42162);
return statearr_42161;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23004__auto__);
});})(c__23002__auto___42162,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__42272 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__42272) : cljs.core.atom.call(null,G__42272));
})();var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__23002__auto___42345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23002__auto___42345,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__23003__auto__ = (function (){var switch__22987__auto__ = ((function (c__23002__auto___42345,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42311){var state_val_42312 = (state_42311[(1)]);if((state_val_42312 === (7)))
{var state_42311__$1 = state_42311;var statearr_42313_42346 = state_42311__$1;(statearr_42313_42346[(2)] = null);
(statearr_42313_42346[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42312 === (1)))
{var state_42311__$1 = state_42311;var statearr_42314_42347 = state_42311__$1;(statearr_42314_42347[(2)] = null);
(statearr_42314_42347[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42312 === (4)))
{var inst_42275 = (state_42311[(7)]);var inst_42277 = (inst_42275 < cnt);var state_42311__$1 = state_42311;if(cljs.core.truth_(inst_42277))
{var statearr_42315_42348 = state_42311__$1;(statearr_42315_42348[(1)] = (6));
} else
{var statearr_42316_42349 = state_42311__$1;(statearr_42316_42349[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42312 === (15)))
{var inst_42307 = (state_42311[(2)]);var state_42311__$1 = state_42311;var statearr_42317_42350 = state_42311__$1;(statearr_42317_42350[(2)] = inst_42307);
(statearr_42317_42350[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42312 === (13)))
{var inst_42300 = cljs.core.async.close_BANG_(out);var state_42311__$1 = state_42311;var statearr_42318_42351 = state_42311__$1;(statearr_42318_42351[(2)] = inst_42300);
(statearr_42318_42351[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42312 === (6)))
{var state_42311__$1 = state_42311;var statearr_42319_42352 = state_42311__$1;(statearr_42319_42352[(2)] = null);
(statearr_42319_42352[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42312 === (3)))
{var inst_42309 = (state_42311[(2)]);var state_42311__$1 = state_42311;return cljs.core.async.impl.ioc_helpers.return_chan(state_42311__$1,inst_42309);
} else
{if((state_val_42312 === (12)))
{var inst_42297 = (state_42311[(8)]);var inst_42297__$1 = (state_42311[(2)]);var inst_42298 = cljs.core.some(cljs.core.nil_QMARK_,inst_42297__$1);var state_42311__$1 = (function (){var statearr_42320 = state_42311;(statearr_42320[(8)] = inst_42297__$1);
return statearr_42320;
})();if(cljs.core.truth_(inst_42298))
{var statearr_42321_42353 = state_42311__$1;(statearr_42321_42353[(1)] = (13));
} else
{var statearr_42322_42354 = state_42311__$1;(statearr_42322_42354[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42312 === (2)))
{var inst_42274 = (function (){var G__42323 = dctr;var G__42324 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__42323,G__42324) : cljs.core.reset_BANG_.call(null,G__42323,G__42324));
})();var inst_42275 = (0);var state_42311__$1 = (function (){var statearr_42325 = state_42311;(statearr_42325[(9)] = inst_42274);
(statearr_42325[(7)] = inst_42275);
return statearr_42325;
})();var statearr_42326_42355 = state_42311__$1;(statearr_42326_42355[(2)] = null);
(statearr_42326_42355[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42312 === (11)))
{var inst_42275 = (state_42311[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_42311,(10),Object,null,(9));var inst_42284 = (function (){var G__42327 = inst_42275;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__42327) : chs__$1.call(null,G__42327));
})();var inst_42285 = (function (){var G__42328 = inst_42275;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__42328) : done.call(null,G__42328));
})();var inst_42286 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_42284,inst_42285);var state_42311__$1 = state_42311;var statearr_42329_42356 = state_42311__$1;(statearr_42329_42356[(2)] = inst_42286);
cljs.core.async.impl.ioc_helpers.process_exception(state_42311__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42312 === (9)))
{var inst_42275 = (state_42311[(7)]);var inst_42288 = (state_42311[(2)]);var inst_42289 = (inst_42275 + (1));var inst_42275__$1 = inst_42289;var state_42311__$1 = (function (){var statearr_42330 = state_42311;(statearr_42330[(10)] = inst_42288);
(statearr_42330[(7)] = inst_42275__$1);
return statearr_42330;
})();var statearr_42331_42357 = state_42311__$1;(statearr_42331_42357[(2)] = null);
(statearr_42331_42357[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42312 === (5)))
{var inst_42295 = (state_42311[(2)]);var state_42311__$1 = (function (){var statearr_42332 = state_42311;(statearr_42332[(11)] = inst_42295);
return statearr_42332;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42311__$1,(12),dchan);
} else
{if((state_val_42312 === (14)))
{var inst_42297 = (state_42311[(8)]);var inst_42302 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_42297);var state_42311__$1 = state_42311;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42311__$1,(16),out,inst_42302);
} else
{if((state_val_42312 === (16)))
{var inst_42304 = (state_42311[(2)]);var state_42311__$1 = (function (){var statearr_42333 = state_42311;(statearr_42333[(12)] = inst_42304);
return statearr_42333;
})();var statearr_42334_42358 = state_42311__$1;(statearr_42334_42358[(2)] = null);
(statearr_42334_42358[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42312 === (10)))
{var inst_42279 = (state_42311[(2)]);var inst_42280 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_42311__$1 = (function (){var statearr_42335 = state_42311;(statearr_42335[(13)] = inst_42279);
return statearr_42335;
})();var statearr_42336_42359 = state_42311__$1;(statearr_42336_42359[(2)] = inst_42280);
cljs.core.async.impl.ioc_helpers.process_exception(state_42311__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42312 === (8)))
{var inst_42293 = (state_42311[(2)]);var state_42311__$1 = state_42311;var statearr_42337_42360 = state_42311__$1;(statearr_42337_42360[(2)] = inst_42293);
(statearr_42337_42360[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23002__auto___42345,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__22987__auto__,c__23002__auto___42345,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__22988__auto__ = null;
var state_machine__22988__auto____0 = (function (){var statearr_42341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42341[(0)] = state_machine__22988__auto__);
(statearr_42341[(1)] = (1));
return statearr_42341;
});
var state_machine__22988__auto____1 = (function (state_42311){while(true){
var ret_value__22989__auto__ = (function (){try{while(true){
var result__22990__auto__ = switch__22987__auto__(state_42311);if(cljs.core.keyword_identical_QMARK_(result__22990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22990__auto__;
}
break;
}
}catch (e42342){if((e42342 instanceof Object))
{var ex__22991__auto__ = e42342;var statearr_42343_42361 = state_42311;(statearr_42343_42361[(5)] = ex__22991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42311);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e42342;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__42362 = state_42311;
state_42311 = G__42362;
continue;
}
} else
{return ret_value__22989__auto__;
}
break;
}
});
state_machine__22988__auto__ = function(state_42311){
switch(arguments.length){
case 0:
return state_machine__22988__auto____0.call(this);
case 1:
return state_machine__22988__auto____1.call(this,state_42311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22988__auto____0;
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22988__auto____1;
return state_machine__22988__auto__;
})()
;})(switch__22987__auto__,c__23002__auto___42345,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__23004__auto__ = (function (){var statearr_42344 = (function (){return (f__23003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23003__auto__.cljs$core$IFn$_invoke$arity$0() : f__23003__auto__.call(null));
})();(statearr_42344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23002__auto___42345);
return statearr_42344;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23004__auto__);
});})(c__23002__auto___42345,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__23002__auto___42472 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23002__auto___42472,out){
return (function (){var f__23003__auto__ = (function (){var switch__22987__auto__ = ((function (c__23002__auto___42472,out){
return (function (state_42448){var state_val_42449 = (state_42448[(1)]);if((state_val_42449 === (7)))
{var inst_42428 = (state_42448[(7)]);var inst_42427 = (state_42448[(8)]);var inst_42427__$1 = (state_42448[(2)]);var inst_42428__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42427__$1,(0),null);var inst_42429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42427__$1,(1),null);var inst_42430 = (inst_42428__$1 == null);var state_42448__$1 = (function (){var statearr_42450 = state_42448;(statearr_42450[(7)] = inst_42428__$1);
(statearr_42450[(9)] = inst_42429);
(statearr_42450[(8)] = inst_42427__$1);
return statearr_42450;
})();if(cljs.core.truth_(inst_42430))
{var statearr_42451_42473 = state_42448__$1;(statearr_42451_42473[(1)] = (8));
} else
{var statearr_42452_42474 = state_42448__$1;(statearr_42452_42474[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42449 === (1)))
{var inst_42419 = cljs.core.vec(chs);var inst_42420 = inst_42419;var state_42448__$1 = (function (){var statearr_42453 = state_42448;(statearr_42453[(10)] = inst_42420);
return statearr_42453;
})();var statearr_42454_42475 = state_42448__$1;(statearr_42454_42475[(2)] = null);
(statearr_42454_42475[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42449 === (4)))
{var inst_42420 = (state_42448[(10)]);var state_42448__$1 = state_42448;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_42448__$1,(7),inst_42420);
} else
{if((state_val_42449 === (6)))
{var inst_42444 = (state_42448[(2)]);var state_42448__$1 = state_42448;var statearr_42455_42476 = state_42448__$1;(statearr_42455_42476[(2)] = inst_42444);
(statearr_42455_42476[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42449 === (3)))
{var inst_42446 = (state_42448[(2)]);var state_42448__$1 = state_42448;return cljs.core.async.impl.ioc_helpers.return_chan(state_42448__$1,inst_42446);
} else
{if((state_val_42449 === (2)))
{var inst_42420 = (state_42448[(10)]);var inst_42422 = cljs.core.count(inst_42420);var inst_42423 = (inst_42422 > (0));var state_42448__$1 = state_42448;if(cljs.core.truth_(inst_42423))
{var statearr_42457_42477 = state_42448__$1;(statearr_42457_42477[(1)] = (4));
} else
{var statearr_42458_42478 = state_42448__$1;(statearr_42458_42478[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42449 === (11)))
{var inst_42420 = (state_42448[(10)]);var inst_42437 = (state_42448[(2)]);var tmp42456 = inst_42420;var inst_42420__$1 = tmp42456;var state_42448__$1 = (function (){var statearr_42459 = state_42448;(statearr_42459[(10)] = inst_42420__$1);
(statearr_42459[(11)] = inst_42437);
return statearr_42459;
})();var statearr_42460_42479 = state_42448__$1;(statearr_42460_42479[(2)] = null);
(statearr_42460_42479[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42449 === (9)))
{var inst_42428 = (state_42448[(7)]);var state_42448__$1 = state_42448;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42448__$1,(11),out,inst_42428);
} else
{if((state_val_42449 === (5)))
{var inst_42442 = cljs.core.async.close_BANG_(out);var state_42448__$1 = state_42448;var statearr_42461_42480 = state_42448__$1;(statearr_42461_42480[(2)] = inst_42442);
(statearr_42461_42480[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42449 === (10)))
{var inst_42440 = (state_42448[(2)]);var state_42448__$1 = state_42448;var statearr_42462_42481 = state_42448__$1;(statearr_42462_42481[(2)] = inst_42440);
(statearr_42462_42481[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42449 === (8)))
{var inst_42428 = (state_42448[(7)]);var inst_42420 = (state_42448[(10)]);var inst_42429 = (state_42448[(9)]);var inst_42427 = (state_42448[(8)]);var inst_42432 = (function (){var c = inst_42429;var v = inst_42428;var vec__42425 = inst_42427;var cs = inst_42420;return ((function (c,v,vec__42425,cs,inst_42428,inst_42420,inst_42429,inst_42427,state_val_42449,c__23002__auto___42472,out){
return (function (p1__42363_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__42363_SHARP_);
});
;})(c,v,vec__42425,cs,inst_42428,inst_42420,inst_42429,inst_42427,state_val_42449,c__23002__auto___42472,out))
})();var inst_42433 = cljs.core.filterv(inst_42432,inst_42420);var inst_42420__$1 = inst_42433;var state_42448__$1 = (function (){var statearr_42463 = state_42448;(statearr_42463[(10)] = inst_42420__$1);
return statearr_42463;
})();var statearr_42464_42482 = state_42448__$1;(statearr_42464_42482[(2)] = null);
(statearr_42464_42482[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23002__auto___42472,out))
;return ((function (switch__22987__auto__,c__23002__auto___42472,out){
return (function() {
var state_machine__22988__auto__ = null;
var state_machine__22988__auto____0 = (function (){var statearr_42468 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42468[(0)] = state_machine__22988__auto__);
(statearr_42468[(1)] = (1));
return statearr_42468;
});
var state_machine__22988__auto____1 = (function (state_42448){while(true){
var ret_value__22989__auto__ = (function (){try{while(true){
var result__22990__auto__ = switch__22987__auto__(state_42448);if(cljs.core.keyword_identical_QMARK_(result__22990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22990__auto__;
}
break;
}
}catch (e42469){if((e42469 instanceof Object))
{var ex__22991__auto__ = e42469;var statearr_42470_42483 = state_42448;(statearr_42470_42483[(5)] = ex__22991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42448);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e42469;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__42484 = state_42448;
state_42448 = G__42484;
continue;
}
} else
{return ret_value__22989__auto__;
}
break;
}
});
state_machine__22988__auto__ = function(state_42448){
switch(arguments.length){
case 0:
return state_machine__22988__auto____0.call(this);
case 1:
return state_machine__22988__auto____1.call(this,state_42448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22988__auto____0;
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22988__auto____1;
return state_machine__22988__auto__;
})()
;})(switch__22987__auto__,c__23002__auto___42472,out))
})();var state__23004__auto__ = (function (){var statearr_42471 = (function (){return (f__23003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23003__auto__.cljs$core$IFn$_invoke$arity$0() : f__23003__auto__.call(null));
})();(statearr_42471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23002__auto___42472);
return statearr_42471;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23004__auto__);
});})(c__23002__auto___42472,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__23002__auto___42580 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23002__auto___42580,out){
return (function (){var f__23003__auto__ = (function (){var switch__22987__auto__ = ((function (c__23002__auto___42580,out){
return (function (state_42557){var state_val_42558 = (state_42557[(1)]);if((state_val_42558 === (7)))
{var inst_42539 = (state_42557[(7)]);var inst_42539__$1 = (state_42557[(2)]);var inst_42540 = (inst_42539__$1 == null);var inst_42541 = cljs.core.not(inst_42540);var state_42557__$1 = (function (){var statearr_42559 = state_42557;(statearr_42559[(7)] = inst_42539__$1);
return statearr_42559;
})();if(inst_42541)
{var statearr_42560_42581 = state_42557__$1;(statearr_42560_42581[(1)] = (8));
} else
{var statearr_42561_42582 = state_42557__$1;(statearr_42561_42582[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42558 === (1)))
{var inst_42534 = (0);var state_42557__$1 = (function (){var statearr_42562 = state_42557;(statearr_42562[(8)] = inst_42534);
return statearr_42562;
})();var statearr_42563_42583 = state_42557__$1;(statearr_42563_42583[(2)] = null);
(statearr_42563_42583[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42558 === (4)))
{var state_42557__$1 = state_42557;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42557__$1,(7),ch);
} else
{if((state_val_42558 === (6)))
{var inst_42552 = (state_42557[(2)]);var state_42557__$1 = state_42557;var statearr_42564_42584 = state_42557__$1;(statearr_42564_42584[(2)] = inst_42552);
(statearr_42564_42584[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42558 === (3)))
{var inst_42554 = (state_42557[(2)]);var inst_42555 = cljs.core.async.close_BANG_(out);var state_42557__$1 = (function (){var statearr_42565 = state_42557;(statearr_42565[(9)] = inst_42554);
return statearr_42565;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_42557__$1,inst_42555);
} else
{if((state_val_42558 === (2)))
{var inst_42534 = (state_42557[(8)]);var inst_42536 = (inst_42534 < n);var state_42557__$1 = state_42557;if(cljs.core.truth_(inst_42536))
{var statearr_42566_42585 = state_42557__$1;(statearr_42566_42585[(1)] = (4));
} else
{var statearr_42567_42586 = state_42557__$1;(statearr_42567_42586[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42558 === (11)))
{var inst_42534 = (state_42557[(8)]);var inst_42544 = (state_42557[(2)]);var inst_42545 = (inst_42534 + (1));var inst_42534__$1 = inst_42545;var state_42557__$1 = (function (){var statearr_42568 = state_42557;(statearr_42568[(8)] = inst_42534__$1);
(statearr_42568[(10)] = inst_42544);
return statearr_42568;
})();var statearr_42569_42587 = state_42557__$1;(statearr_42569_42587[(2)] = null);
(statearr_42569_42587[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42558 === (9)))
{var state_42557__$1 = state_42557;var statearr_42570_42588 = state_42557__$1;(statearr_42570_42588[(2)] = null);
(statearr_42570_42588[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42558 === (5)))
{var state_42557__$1 = state_42557;var statearr_42571_42589 = state_42557__$1;(statearr_42571_42589[(2)] = null);
(statearr_42571_42589[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42558 === (10)))
{var inst_42549 = (state_42557[(2)]);var state_42557__$1 = state_42557;var statearr_42572_42590 = state_42557__$1;(statearr_42572_42590[(2)] = inst_42549);
(statearr_42572_42590[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42558 === (8)))
{var inst_42539 = (state_42557[(7)]);var state_42557__$1 = state_42557;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42557__$1,(11),out,inst_42539);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23002__auto___42580,out))
;return ((function (switch__22987__auto__,c__23002__auto___42580,out){
return (function() {
var state_machine__22988__auto__ = null;
var state_machine__22988__auto____0 = (function (){var statearr_42576 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_42576[(0)] = state_machine__22988__auto__);
(statearr_42576[(1)] = (1));
return statearr_42576;
});
var state_machine__22988__auto____1 = (function (state_42557){while(true){
var ret_value__22989__auto__ = (function (){try{while(true){
var result__22990__auto__ = switch__22987__auto__(state_42557);if(cljs.core.keyword_identical_QMARK_(result__22990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22990__auto__;
}
break;
}
}catch (e42577){if((e42577 instanceof Object))
{var ex__22991__auto__ = e42577;var statearr_42578_42591 = state_42557;(statearr_42578_42591[(5)] = ex__22991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42557);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e42577;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__42592 = state_42557;
state_42557 = G__42592;
continue;
}
} else
{return ret_value__22989__auto__;
}
break;
}
});
state_machine__22988__auto__ = function(state_42557){
switch(arguments.length){
case 0:
return state_machine__22988__auto____0.call(this);
case 1:
return state_machine__22988__auto____1.call(this,state_42557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22988__auto____0;
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22988__auto____1;
return state_machine__22988__auto__;
})()
;})(switch__22987__auto__,c__23002__auto___42580,out))
})();var state__23004__auto__ = (function (){var statearr_42579 = (function (){return (f__23003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23003__auto__.cljs$core$IFn$_invoke$arity$0() : f__23003__auto__.call(null));
})();(statearr_42579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23002__auto___42580);
return statearr_42579;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23004__auto__);
});})(c__23002__auto___42580,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__23002__auto___42691 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23002__auto___42691,out){
return (function (){var f__23003__auto__ = (function (){var switch__22987__auto__ = ((function (c__23002__auto___42691,out){
return (function (state_42666){var state_val_42667 = (state_42666[(1)]);if((state_val_42667 === (7)))
{var inst_42661 = (state_42666[(2)]);var state_42666__$1 = state_42666;var statearr_42668_42692 = state_42666__$1;(statearr_42668_42692[(2)] = inst_42661);
(statearr_42668_42692[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42667 === (1)))
{var inst_42643 = null;var state_42666__$1 = (function (){var statearr_42669 = state_42666;(statearr_42669[(7)] = inst_42643);
return statearr_42669;
})();var statearr_42670_42693 = state_42666__$1;(statearr_42670_42693[(2)] = null);
(statearr_42670_42693[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42667 === (4)))
{var inst_42646 = (state_42666[(8)]);var inst_42646__$1 = (state_42666[(2)]);var inst_42647 = (inst_42646__$1 == null);var inst_42648 = cljs.core.not(inst_42647);var state_42666__$1 = (function (){var statearr_42671 = state_42666;(statearr_42671[(8)] = inst_42646__$1);
return statearr_42671;
})();if(inst_42648)
{var statearr_42672_42694 = state_42666__$1;(statearr_42672_42694[(1)] = (5));
} else
{var statearr_42673_42695 = state_42666__$1;(statearr_42673_42695[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42667 === (6)))
{var state_42666__$1 = state_42666;var statearr_42674_42696 = state_42666__$1;(statearr_42674_42696[(2)] = null);
(statearr_42674_42696[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42667 === (3)))
{var inst_42663 = (state_42666[(2)]);var inst_42664 = cljs.core.async.close_BANG_(out);var state_42666__$1 = (function (){var statearr_42675 = state_42666;(statearr_42675[(9)] = inst_42663);
return statearr_42675;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_42666__$1,inst_42664);
} else
{if((state_val_42667 === (2)))
{var state_42666__$1 = state_42666;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42666__$1,(4),ch);
} else
{if((state_val_42667 === (11)))
{var inst_42646 = (state_42666[(8)]);var inst_42655 = (state_42666[(2)]);var inst_42643 = inst_42646;var state_42666__$1 = (function (){var statearr_42676 = state_42666;(statearr_42676[(7)] = inst_42643);
(statearr_42676[(10)] = inst_42655);
return statearr_42676;
})();var statearr_42677_42697 = state_42666__$1;(statearr_42677_42697[(2)] = null);
(statearr_42677_42697[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42667 === (9)))
{var inst_42646 = (state_42666[(8)]);var state_42666__$1 = state_42666;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42666__$1,(11),out,inst_42646);
} else
{if((state_val_42667 === (5)))
{var inst_42643 = (state_42666[(7)]);var inst_42646 = (state_42666[(8)]);var inst_42650 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42646,inst_42643);var state_42666__$1 = state_42666;if(inst_42650)
{var statearr_42679_42698 = state_42666__$1;(statearr_42679_42698[(1)] = (8));
} else
{var statearr_42680_42699 = state_42666__$1;(statearr_42680_42699[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42667 === (10)))
{var inst_42658 = (state_42666[(2)]);var state_42666__$1 = state_42666;var statearr_42681_42700 = state_42666__$1;(statearr_42681_42700[(2)] = inst_42658);
(statearr_42681_42700[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42667 === (8)))
{var inst_42643 = (state_42666[(7)]);var tmp42678 = inst_42643;var inst_42643__$1 = tmp42678;var state_42666__$1 = (function (){var statearr_42682 = state_42666;(statearr_42682[(7)] = inst_42643__$1);
return statearr_42682;
})();var statearr_42683_42701 = state_42666__$1;(statearr_42683_42701[(2)] = null);
(statearr_42683_42701[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23002__auto___42691,out))
;return ((function (switch__22987__auto__,c__23002__auto___42691,out){
return (function() {
var state_machine__22988__auto__ = null;
var state_machine__22988__auto____0 = (function (){var statearr_42687 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_42687[(0)] = state_machine__22988__auto__);
(statearr_42687[(1)] = (1));
return statearr_42687;
});
var state_machine__22988__auto____1 = (function (state_42666){while(true){
var ret_value__22989__auto__ = (function (){try{while(true){
var result__22990__auto__ = switch__22987__auto__(state_42666);if(cljs.core.keyword_identical_QMARK_(result__22990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22990__auto__;
}
break;
}
}catch (e42688){if((e42688 instanceof Object))
{var ex__22991__auto__ = e42688;var statearr_42689_42702 = state_42666;(statearr_42689_42702[(5)] = ex__22991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42666);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e42688;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__42703 = state_42666;
state_42666 = G__42703;
continue;
}
} else
{return ret_value__22989__auto__;
}
break;
}
});
state_machine__22988__auto__ = function(state_42666){
switch(arguments.length){
case 0:
return state_machine__22988__auto____0.call(this);
case 1:
return state_machine__22988__auto____1.call(this,state_42666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22988__auto____0;
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22988__auto____1;
return state_machine__22988__auto__;
})()
;})(switch__22987__auto__,c__23002__auto___42691,out))
})();var state__23004__auto__ = (function (){var statearr_42690 = (function (){return (f__23003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23003__auto__.cljs$core$IFn$_invoke$arity$0() : f__23003__auto__.call(null));
})();(statearr_42690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23002__auto___42691);
return statearr_42690;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23004__auto__);
});})(c__23002__auto___42691,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__23002__auto___42841 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23002__auto___42841,out){
return (function (){var f__23003__auto__ = (function (){var switch__22987__auto__ = ((function (c__23002__auto___42841,out){
return (function (state_42811){var state_val_42812 = (state_42811[(1)]);if((state_val_42812 === (7)))
{var inst_42807 = (state_42811[(2)]);var state_42811__$1 = state_42811;var statearr_42813_42842 = state_42811__$1;(statearr_42813_42842[(2)] = inst_42807);
(statearr_42813_42842[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42812 === (1)))
{var inst_42774 = (new Array(n));var inst_42775 = inst_42774;var inst_42776 = (0);var state_42811__$1 = (function (){var statearr_42814 = state_42811;(statearr_42814[(7)] = inst_42776);
(statearr_42814[(8)] = inst_42775);
return statearr_42814;
})();var statearr_42815_42843 = state_42811__$1;(statearr_42815_42843[(2)] = null);
(statearr_42815_42843[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42812 === (4)))
{var inst_42779 = (state_42811[(9)]);var inst_42779__$1 = (state_42811[(2)]);var inst_42780 = (inst_42779__$1 == null);var inst_42781 = cljs.core.not(inst_42780);var state_42811__$1 = (function (){var statearr_42816 = state_42811;(statearr_42816[(9)] = inst_42779__$1);
return statearr_42816;
})();if(inst_42781)
{var statearr_42817_42844 = state_42811__$1;(statearr_42817_42844[(1)] = (5));
} else
{var statearr_42818_42845 = state_42811__$1;(statearr_42818_42845[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42812 === (15)))
{var inst_42801 = (state_42811[(2)]);var state_42811__$1 = state_42811;var statearr_42819_42846 = state_42811__$1;(statearr_42819_42846[(2)] = inst_42801);
(statearr_42819_42846[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42812 === (13)))
{var state_42811__$1 = state_42811;var statearr_42820_42847 = state_42811__$1;(statearr_42820_42847[(2)] = null);
(statearr_42820_42847[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42812 === (6)))
{var inst_42776 = (state_42811[(7)]);var inst_42797 = (inst_42776 > (0));var state_42811__$1 = state_42811;if(cljs.core.truth_(inst_42797))
{var statearr_42821_42848 = state_42811__$1;(statearr_42821_42848[(1)] = (12));
} else
{var statearr_42822_42849 = state_42811__$1;(statearr_42822_42849[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42812 === (3)))
{var inst_42809 = (state_42811[(2)]);var state_42811__$1 = state_42811;return cljs.core.async.impl.ioc_helpers.return_chan(state_42811__$1,inst_42809);
} else
{if((state_val_42812 === (12)))
{var inst_42775 = (state_42811[(8)]);var inst_42799 = cljs.core.vec(inst_42775);var state_42811__$1 = state_42811;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42811__$1,(15),out,inst_42799);
} else
{if((state_val_42812 === (2)))
{var state_42811__$1 = state_42811;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42811__$1,(4),ch);
} else
{if((state_val_42812 === (11)))
{var inst_42791 = (state_42811[(2)]);var inst_42792 = (new Array(n));var inst_42775 = inst_42792;var inst_42776 = (0);var state_42811__$1 = (function (){var statearr_42823 = state_42811;(statearr_42823[(7)] = inst_42776);
(statearr_42823[(10)] = inst_42791);
(statearr_42823[(8)] = inst_42775);
return statearr_42823;
})();var statearr_42824_42850 = state_42811__$1;(statearr_42824_42850[(2)] = null);
(statearr_42824_42850[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42812 === (9)))
{var inst_42775 = (state_42811[(8)]);var inst_42789 = cljs.core.vec(inst_42775);var state_42811__$1 = state_42811;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42811__$1,(11),out,inst_42789);
} else
{if((state_val_42812 === (5)))
{var inst_42776 = (state_42811[(7)]);var inst_42779 = (state_42811[(9)]);var inst_42784 = (state_42811[(11)]);var inst_42775 = (state_42811[(8)]);var inst_42783 = (inst_42775[inst_42776] = inst_42779);var inst_42784__$1 = (inst_42776 + (1));var inst_42785 = (inst_42784__$1 < n);var state_42811__$1 = (function (){var statearr_42825 = state_42811;(statearr_42825[(12)] = inst_42783);
(statearr_42825[(11)] = inst_42784__$1);
return statearr_42825;
})();if(cljs.core.truth_(inst_42785))
{var statearr_42826_42851 = state_42811__$1;(statearr_42826_42851[(1)] = (8));
} else
{var statearr_42827_42852 = state_42811__$1;(statearr_42827_42852[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42812 === (14)))
{var inst_42804 = (state_42811[(2)]);var inst_42805 = cljs.core.async.close_BANG_(out);var state_42811__$1 = (function (){var statearr_42829 = state_42811;(statearr_42829[(13)] = inst_42804);
return statearr_42829;
})();var statearr_42830_42853 = state_42811__$1;(statearr_42830_42853[(2)] = inst_42805);
(statearr_42830_42853[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42812 === (10)))
{var inst_42795 = (state_42811[(2)]);var state_42811__$1 = state_42811;var statearr_42831_42854 = state_42811__$1;(statearr_42831_42854[(2)] = inst_42795);
(statearr_42831_42854[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42812 === (8)))
{var inst_42784 = (state_42811[(11)]);var inst_42775 = (state_42811[(8)]);var tmp42828 = inst_42775;var inst_42775__$1 = tmp42828;var inst_42776 = inst_42784;var state_42811__$1 = (function (){var statearr_42832 = state_42811;(statearr_42832[(7)] = inst_42776);
(statearr_42832[(8)] = inst_42775__$1);
return statearr_42832;
})();var statearr_42833_42855 = state_42811__$1;(statearr_42833_42855[(2)] = null);
(statearr_42833_42855[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23002__auto___42841,out))
;return ((function (switch__22987__auto__,c__23002__auto___42841,out){
return (function() {
var state_machine__22988__auto__ = null;
var state_machine__22988__auto____0 = (function (){var statearr_42837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42837[(0)] = state_machine__22988__auto__);
(statearr_42837[(1)] = (1));
return statearr_42837;
});
var state_machine__22988__auto____1 = (function (state_42811){while(true){
var ret_value__22989__auto__ = (function (){try{while(true){
var result__22990__auto__ = switch__22987__auto__(state_42811);if(cljs.core.keyword_identical_QMARK_(result__22990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22990__auto__;
}
break;
}
}catch (e42838){if((e42838 instanceof Object))
{var ex__22991__auto__ = e42838;var statearr_42839_42856 = state_42811;(statearr_42839_42856[(5)] = ex__22991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42811);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e42838;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__42857 = state_42811;
state_42811 = G__42857;
continue;
}
} else
{return ret_value__22989__auto__;
}
break;
}
});
state_machine__22988__auto__ = function(state_42811){
switch(arguments.length){
case 0:
return state_machine__22988__auto____0.call(this);
case 1:
return state_machine__22988__auto____1.call(this,state_42811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22988__auto____0;
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22988__auto____1;
return state_machine__22988__auto__;
})()
;})(switch__22987__auto__,c__23002__auto___42841,out))
})();var state__23004__auto__ = (function (){var statearr_42840 = (function (){return (f__23003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23003__auto__.cljs$core$IFn$_invoke$arity$0() : f__23003__auto__.call(null));
})();(statearr_42840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23002__auto___42841);
return statearr_42840;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23004__auto__);
});})(c__23002__auto___42841,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__23002__auto___43005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23002__auto___43005,out){
return (function (){var f__23003__auto__ = (function (){var switch__22987__auto__ = ((function (c__23002__auto___43005,out){
return (function (state_42974){var state_val_42975 = (state_42974[(1)]);if((state_val_42975 === (7)))
{var inst_42970 = (state_42974[(2)]);var state_42974__$1 = state_42974;var statearr_42976_43006 = state_42974__$1;(statearr_42976_43006[(2)] = inst_42970);
(statearr_42976_43006[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42975 === (1)))
{var inst_42933 = [];var inst_42934 = inst_42933;var inst_42935 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_42974__$1 = (function (){var statearr_42977 = state_42974;(statearr_42977[(7)] = inst_42935);
(statearr_42977[(8)] = inst_42934);
return statearr_42977;
})();var statearr_42978_43007 = state_42974__$1;(statearr_42978_43007[(2)] = null);
(statearr_42978_43007[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42975 === (4)))
{var inst_42938 = (state_42974[(9)]);var inst_42938__$1 = (state_42974[(2)]);var inst_42939 = (inst_42938__$1 == null);var inst_42940 = cljs.core.not(inst_42939);var state_42974__$1 = (function (){var statearr_42979 = state_42974;(statearr_42979[(9)] = inst_42938__$1);
return statearr_42979;
})();if(inst_42940)
{var statearr_42980_43008 = state_42974__$1;(statearr_42980_43008[(1)] = (5));
} else
{var statearr_42981_43009 = state_42974__$1;(statearr_42981_43009[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42975 === (15)))
{var inst_42964 = (state_42974[(2)]);var state_42974__$1 = state_42974;var statearr_42982_43010 = state_42974__$1;(statearr_42982_43010[(2)] = inst_42964);
(statearr_42982_43010[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42975 === (13)))
{var state_42974__$1 = state_42974;var statearr_42983_43011 = state_42974__$1;(statearr_42983_43011[(2)] = null);
(statearr_42983_43011[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42975 === (6)))
{var inst_42934 = (state_42974[(8)]);var inst_42959 = inst_42934.length;var inst_42960 = (inst_42959 > (0));var state_42974__$1 = state_42974;if(cljs.core.truth_(inst_42960))
{var statearr_42984_43012 = state_42974__$1;(statearr_42984_43012[(1)] = (12));
} else
{var statearr_42985_43013 = state_42974__$1;(statearr_42985_43013[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42975 === (3)))
{var inst_42972 = (state_42974[(2)]);var state_42974__$1 = state_42974;return cljs.core.async.impl.ioc_helpers.return_chan(state_42974__$1,inst_42972);
} else
{if((state_val_42975 === (12)))
{var inst_42934 = (state_42974[(8)]);var inst_42962 = cljs.core.vec(inst_42934);var state_42974__$1 = state_42974;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42974__$1,(15),out,inst_42962);
} else
{if((state_val_42975 === (2)))
{var state_42974__$1 = state_42974;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42974__$1,(4),ch);
} else
{if((state_val_42975 === (11)))
{var inst_42942 = (state_42974[(10)]);var inst_42938 = (state_42974[(9)]);var inst_42952 = (state_42974[(2)]);var inst_42953 = [];var inst_42954 = inst_42953.push(inst_42938);var inst_42934 = inst_42953;var inst_42935 = inst_42942;var state_42974__$1 = (function (){var statearr_42986 = state_42974;(statearr_42986[(7)] = inst_42935);
(statearr_42986[(8)] = inst_42934);
(statearr_42986[(11)] = inst_42952);
(statearr_42986[(12)] = inst_42954);
return statearr_42986;
})();var statearr_42987_43014 = state_42974__$1;(statearr_42987_43014[(2)] = null);
(statearr_42987_43014[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42975 === (9)))
{var inst_42934 = (state_42974[(8)]);var inst_42950 = cljs.core.vec(inst_42934);var state_42974__$1 = state_42974;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42974__$1,(11),out,inst_42950);
} else
{if((state_val_42975 === (5)))
{var inst_42935 = (state_42974[(7)]);var inst_42942 = (state_42974[(10)]);var inst_42938 = (state_42974[(9)]);var inst_42942__$1 = (function (){var G__42988 = inst_42938;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42988) : f.call(null,G__42988));
})();var inst_42943 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42942__$1,inst_42935);var inst_42944 = cljs.core.keyword_identical_QMARK_(inst_42935,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_42945 = (inst_42943) || (inst_42944);var state_42974__$1 = (function (){var statearr_42989 = state_42974;(statearr_42989[(10)] = inst_42942__$1);
return statearr_42989;
})();if(cljs.core.truth_(inst_42945))
{var statearr_42990_43015 = state_42974__$1;(statearr_42990_43015[(1)] = (8));
} else
{var statearr_42991_43016 = state_42974__$1;(statearr_42991_43016[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42975 === (14)))
{var inst_42967 = (state_42974[(2)]);var inst_42968 = cljs.core.async.close_BANG_(out);var state_42974__$1 = (function (){var statearr_42993 = state_42974;(statearr_42993[(13)] = inst_42967);
return statearr_42993;
})();var statearr_42994_43017 = state_42974__$1;(statearr_42994_43017[(2)] = inst_42968);
(statearr_42994_43017[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42975 === (10)))
{var inst_42957 = (state_42974[(2)]);var state_42974__$1 = state_42974;var statearr_42995_43018 = state_42974__$1;(statearr_42995_43018[(2)] = inst_42957);
(statearr_42995_43018[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42975 === (8)))
{var inst_42934 = (state_42974[(8)]);var inst_42942 = (state_42974[(10)]);var inst_42938 = (state_42974[(9)]);var inst_42947 = inst_42934.push(inst_42938);var tmp42992 = inst_42934;var inst_42934__$1 = tmp42992;var inst_42935 = inst_42942;var state_42974__$1 = (function (){var statearr_42996 = state_42974;(statearr_42996[(14)] = inst_42947);
(statearr_42996[(7)] = inst_42935);
(statearr_42996[(8)] = inst_42934__$1);
return statearr_42996;
})();var statearr_42997_43019 = state_42974__$1;(statearr_42997_43019[(2)] = null);
(statearr_42997_43019[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23002__auto___43005,out))
;return ((function (switch__22987__auto__,c__23002__auto___43005,out){
return (function() {
var state_machine__22988__auto__ = null;
var state_machine__22988__auto____0 = (function (){var statearr_43001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43001[(0)] = state_machine__22988__auto__);
(statearr_43001[(1)] = (1));
return statearr_43001;
});
var state_machine__22988__auto____1 = (function (state_42974){while(true){
var ret_value__22989__auto__ = (function (){try{while(true){
var result__22990__auto__ = switch__22987__auto__(state_42974);if(cljs.core.keyword_identical_QMARK_(result__22990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22990__auto__;
}
break;
}
}catch (e43002){if((e43002 instanceof Object))
{var ex__22991__auto__ = e43002;var statearr_43003_43020 = state_42974;(statearr_43003_43020[(5)] = ex__22991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42974);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e43002;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__43021 = state_42974;
state_42974 = G__43021;
continue;
}
} else
{return ret_value__22989__auto__;
}
break;
}
});
state_machine__22988__auto__ = function(state_42974){
switch(arguments.length){
case 0:
return state_machine__22988__auto____0.call(this);
case 1:
return state_machine__22988__auto____1.call(this,state_42974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22988__auto____0;
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22988__auto____1;
return state_machine__22988__auto__;
})()
;})(switch__22987__auto__,c__23002__auto___43005,out))
})();var state__23004__auto__ = (function (){var statearr_43004 = (function (){return (f__23003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23003__auto__.cljs$core$IFn$_invoke$arity$0() : f__23003__auto__.call(null));
})();(statearr_43004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23002__auto___43005);
return statearr_43004;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23004__auto__);
});})(c__23002__auto___43005,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
//# sourceMappingURL=async.js.map