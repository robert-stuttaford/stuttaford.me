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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t31450 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31450 = (function (f,fn_handler,meta31451){
this.f = f;
this.fn_handler = fn_handler;
this.meta31451 = meta31451;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31450.cljs$lang$type = true;
cljs.core.async.t31450.cljs$lang$ctorStr = "cljs.core.async/t31450";
cljs.core.async.t31450.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core.async/t31450");
});
cljs.core.async.t31450.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31450.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t31450.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t31450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31452){var self__ = this;
var _31452__$1 = this;return self__.meta31451;
});
cljs.core.async.t31450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31452,meta31451__$1){var self__ = this;
var _31452__$1 = this;return (new cljs.core.async.t31450(self__.f,self__.fn_handler,meta31451__$1));
});
cljs.core.async.__GT_t31450 = (function __GT_t31450(f__$1,fn_handler__$1,meta31451){return (new cljs.core.async.t31450(f__$1,fn_handler__$1,meta31451));
});
}
return (new cljs.core.async.t31450(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__31454 = buff;if(G__31454)
{var bit__20565__auto__ = null;if(cljs.core.truth_((function (){var or__19267__auto__ = bit__20565__auto__;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return G__31454.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__31454.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__31454);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__31454);
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
{var val_31465 = (function (){var G__31462 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31462) : cljs.core.deref.call(null,G__31462));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__31463_31466 = val_31465;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__31463_31466) : fn1.call(null,G__31463_31466));
} else
{cljs.core.async.impl.dispatch.run(((function (val_31465,ret){
return (function (){var G__31464 = val_31465;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__31464) : fn1.call(null,G__31464));
});})(val_31465,ret))
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__19255__auto__ = ret;if(cljs.core.truth_(and__19255__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__19255__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__20882__auto___31474 = n;var x_31475 = (0);while(true){
if((x_31475 < n__20882__auto___31474))
{(a[x_31475] = (0));
{
var G__31476 = (x_31475 + (1));
x_31475 = G__31476;
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
var G__31477 = (i + (1));
i = G__31477;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__31485 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__31485) : cljs.core.atom.call(null,G__31485));
})();if(typeof cljs.core.async.t31486 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31486 = (function (flag,alt_flag,meta31487){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta31487 = meta31487;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31486.cljs$lang$type = true;
cljs.core.async.t31486.cljs$lang$ctorStr = "cljs.core.async/t31486";
cljs.core.async.t31486.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core.async/t31486");
});})(flag))
;
cljs.core.async.t31486.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31486.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__31489 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31489) : cljs.core.deref.call(null,G__31489));
});})(flag))
;
cljs.core.async.t31486.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__31490_31492 = self__.flag;var G__31491_31493 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__31490_31492,G__31491_31493) : cljs.core.reset_BANG_.call(null,G__31490_31492,G__31491_31493));
return true;
});})(flag))
;
cljs.core.async.t31486.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31488){var self__ = this;
var _31488__$1 = this;return self__.meta31487;
});})(flag))
;
cljs.core.async.t31486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31488,meta31487__$1){var self__ = this;
var _31488__$1 = this;return (new cljs.core.async.t31486(self__.flag,self__.alt_flag,meta31487__$1));
});})(flag))
;
cljs.core.async.__GT_t31486 = ((function (flag){
return (function __GT_t31486(flag__$1,alt_flag__$1,meta31487){return (new cljs.core.async.t31486(flag__$1,alt_flag__$1,meta31487));
});})(flag))
;
}
return (new cljs.core.async.t31486(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t31497 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31497 = (function (cb,flag,alt_handler,meta31498){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta31498 = meta31498;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31497.cljs$lang$type = true;
cljs.core.async.t31497.cljs$lang$ctorStr = "cljs.core.async/t31497";
cljs.core.async.t31497.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core.async/t31497");
});
cljs.core.async.t31497.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31497.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t31497.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t31497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31499){var self__ = this;
var _31499__$1 = this;return self__.meta31498;
});
cljs.core.async.t31497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31499,meta31498__$1){var self__ = this;
var _31499__$1 = this;return (new cljs.core.async.t31497(self__.cb,self__.flag,self__.alt_handler,meta31498__$1));
});
cljs.core.async.__GT_t31497 = (function __GT_t31497(cb__$1,flag__$1,alt_handler__$1,meta31498){return (new cljs.core.async.t31497(cb__$1,flag__$1,alt_handler__$1,meta31498));
});
}
return (new cljs.core.async.t31497(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__31506 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__31506) : port.call(null,G__31506));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__31507 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__31507) : port.call(null,G__31507));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){var G__31508 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31508) : fret.call(null,G__31508));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31500_SHARP_){var G__31509 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31500_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31509) : fret.call(null,G__31509));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__31510 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31510) : cljs.core.deref.call(null,G__31510));
})(),(function (){var or__19267__auto__ = wport;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__31511 = (i + (1));
i = G__31511;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__19267__auto__ = ret;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__19255__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__19255__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__19255__auto__;
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
var alts_BANG___delegate = function (ports,p__31512){var map__31514 = p__31512;var map__31514__$1 = ((cljs.core.seq_QMARK_(map__31514))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31514):map__31514);var opts = map__31514__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

};
var alts_BANG_ = function (ports,var_args){
var p__31512 = null;if (arguments.length > 1) {
  p__31512 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__31512);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__31515){
var ports = cljs.core.first(arglist__31515);
var p__31512 = cljs.core.rest(arglist__31515);
return alts_BANG___delegate(ports,p__31512);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t31529 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31529 = (function (ch,f,map_LT_,meta31530){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31530 = meta31530;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31529.cljs$lang$type = true;
cljs.core.async.t31529.cljs$lang$ctorStr = "cljs.core.async/t31529";
cljs.core.async.t31529.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core.async/t31529");
});
cljs.core.async.t31529.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31529.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t31529.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31529.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t31532 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31532 = (function (fn1,_,meta31530,ch,f,map_LT_,meta31533){
this.fn1 = fn1;
this._ = _;
this.meta31530 = meta31530;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31533 = meta31533;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31532.cljs$lang$type = true;
cljs.core.async.t31532.cljs$lang$ctorStr = "cljs.core.async/t31532";
cljs.core.async.t31532.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core.async/t31532");
});})(___$1))
;
cljs.core.async.t31532.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31532.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t31532.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var G__31535 = self__.fn1;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(G__31535) : cljs.core.async.impl.protocols.lock_id.call(null,G__31535));
});})(___$1))
;
cljs.core.async.t31532.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__31516_SHARP_){var G__31536 = (((p1__31516_SHARP_ == null))?null:(function (){var G__31537 = p1__31516_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31537) : self__.f.call(null,G__31537));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31536) : f1.call(null,G__31536));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t31532.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31534){var self__ = this;
var _31534__$1 = this;return self__.meta31533;
});})(___$1))
;
cljs.core.async.t31532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31534,meta31533__$1){var self__ = this;
var _31534__$1 = this;return (new cljs.core.async.t31532(self__.fn1,self__._,self__.meta31530,self__.ch,self__.f,self__.map_LT_,meta31533__$1));
});})(___$1))
;
cljs.core.async.__GT_t31532 = ((function (___$1){
return (function __GT_t31532(fn1__$1,___$2,meta31530__$1,ch__$2,f__$2,map_LT___$2,meta31533){return (new cljs.core.async.t31532(fn1__$1,___$2,meta31530__$1,ch__$2,f__$2,map_LT___$2,meta31533));
});})(___$1))
;
}
return (new cljs.core.async.t31532(fn1,___$1,self__.meta31530,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__19255__auto__ = ret;if(cljs.core.truth_(and__19255__auto__))
{return !(((function (){var G__31538 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31538) : cljs.core.deref.call(null,G__31538));
})() == null));
} else
{return and__19255__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__31539 = (function (){var G__31540 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31540) : cljs.core.deref.call(null,G__31540));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31539) : self__.f.call(null,G__31539));
})());
} else
{return ret;
}
});
cljs.core.async.t31529.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31529.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t31529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31531){var self__ = this;
var _31531__$1 = this;return self__.meta31530;
});
cljs.core.async.t31529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31531,meta31530__$1){var self__ = this;
var _31531__$1 = this;return (new cljs.core.async.t31529(self__.ch,self__.f,self__.map_LT_,meta31530__$1));
});
cljs.core.async.__GT_t31529 = (function __GT_t31529(ch__$1,f__$1,map_LT___$1,meta31530){return (new cljs.core.async.t31529(ch__$1,f__$1,map_LT___$1,meta31530));
});
}
return (new cljs.core.async.t31529(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t31545 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31545 = (function (ch,f,map_GT_,meta31546){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta31546 = meta31546;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31545.cljs$lang$type = true;
cljs.core.async.t31545.cljs$lang$ctorStr = "cljs.core.async/t31545";
cljs.core.async.t31545.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core.async/t31545");
});
cljs.core.async.t31545.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31545.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__31548 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31548) : self__.f.call(null,G__31548));
})(),fn0);
});
cljs.core.async.t31545.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31545.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t31545.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31545.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t31545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31547){var self__ = this;
var _31547__$1 = this;return self__.meta31546;
});
cljs.core.async.t31545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31547,meta31546__$1){var self__ = this;
var _31547__$1 = this;return (new cljs.core.async.t31545(self__.ch,self__.f,self__.map_GT_,meta31546__$1));
});
cljs.core.async.__GT_t31545 = (function __GT_t31545(ch__$1,f__$1,map_GT___$1,meta31546){return (new cljs.core.async.t31545(ch__$1,f__$1,map_GT___$1,meta31546));
});
}
return (new cljs.core.async.t31545(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t31553 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31553 = (function (ch,p,filter_GT_,meta31554){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta31554 = meta31554;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31553.cljs$lang$type = true;
cljs.core.async.t31553.cljs$lang$ctorStr = "cljs.core.async/t31553";
cljs.core.async.t31553.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core.async/t31553");
});
cljs.core.async.t31553.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31553.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__31556 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__31556) : self__.p.call(null,G__31556));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t31553.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31553.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t31553.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31553.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t31553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31555){var self__ = this;
var _31555__$1 = this;return self__.meta31554;
});
cljs.core.async.t31553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31555,meta31554__$1){var self__ = this;
var _31555__$1 = this;return (new cljs.core.async.t31553(self__.ch,self__.p,self__.filter_GT_,meta31554__$1));
});
cljs.core.async.__GT_t31553 = (function __GT_t31553(ch__$1,p__$1,filter_GT___$1,meta31554){return (new cljs.core.async.t31553(ch__$1,p__$1,filter_GT___$1,meta31554));
});
}
return (new cljs.core.async.t31553(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22720__auto___31644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22720__auto___31644,out){
return (function (){var f__22721__auto__ = (function (){var switch__22705__auto__ = ((function (c__22720__auto___31644,out){
return (function (state_31622){var state_val_31623 = (state_31622[(1)]);if((state_val_31623 === (7)))
{var inst_31618 = (state_31622[(2)]);var state_31622__$1 = state_31622;var statearr_31624_31645 = state_31622__$1;(statearr_31624_31645[(2)] = inst_31618);
(statearr_31624_31645[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31623 === (1)))
{var state_31622__$1 = state_31622;var statearr_31625_31646 = state_31622__$1;(statearr_31625_31646[(2)] = null);
(statearr_31625_31646[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31623 === (4)))
{var inst_31604 = (state_31622[(7)]);var inst_31604__$1 = (state_31622[(2)]);var inst_31605 = (inst_31604__$1 == null);var state_31622__$1 = (function (){var statearr_31626 = state_31622;(statearr_31626[(7)] = inst_31604__$1);
return statearr_31626;
})();if(cljs.core.truth_(inst_31605))
{var statearr_31627_31647 = state_31622__$1;(statearr_31627_31647[(1)] = (5));
} else
{var statearr_31628_31648 = state_31622__$1;(statearr_31628_31648[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31623 === (6)))
{var inst_31604 = (state_31622[(7)]);var inst_31609 = (function (){var G__31629 = inst_31604;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__31629) : p.call(null,G__31629));
})();var state_31622__$1 = state_31622;if(cljs.core.truth_(inst_31609))
{var statearr_31630_31649 = state_31622__$1;(statearr_31630_31649[(1)] = (8));
} else
{var statearr_31631_31650 = state_31622__$1;(statearr_31631_31650[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31623 === (3)))
{var inst_31620 = (state_31622[(2)]);var state_31622__$1 = state_31622;return cljs.core.async.impl.ioc_helpers.return_chan(state_31622__$1,inst_31620);
} else
{if((state_val_31623 === (2)))
{var state_31622__$1 = state_31622;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31622__$1,(4),ch);
} else
{if((state_val_31623 === (11)))
{var inst_31612 = (state_31622[(2)]);var state_31622__$1 = state_31622;var statearr_31632_31651 = state_31622__$1;(statearr_31632_31651[(2)] = inst_31612);
(statearr_31632_31651[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31623 === (9)))
{var state_31622__$1 = state_31622;var statearr_31633_31652 = state_31622__$1;(statearr_31633_31652[(2)] = null);
(statearr_31633_31652[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31623 === (5)))
{var inst_31607 = cljs.core.async.close_BANG_(out);var state_31622__$1 = state_31622;var statearr_31634_31653 = state_31622__$1;(statearr_31634_31653[(2)] = inst_31607);
(statearr_31634_31653[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31623 === (10)))
{var inst_31615 = (state_31622[(2)]);var state_31622__$1 = (function (){var statearr_31635 = state_31622;(statearr_31635[(8)] = inst_31615);
return statearr_31635;
})();var statearr_31636_31654 = state_31622__$1;(statearr_31636_31654[(2)] = null);
(statearr_31636_31654[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31623 === (8)))
{var inst_31604 = (state_31622[(7)]);var state_31622__$1 = state_31622;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31622__$1,(11),out,inst_31604);
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
});})(c__22720__auto___31644,out))
;return ((function (switch__22705__auto__,c__22720__auto___31644,out){
return (function() {
var state_machine__22706__auto__ = null;
var state_machine__22706__auto____0 = (function (){var statearr_31640 = [null,null,null,null,null,null,null,null,null];(statearr_31640[(0)] = state_machine__22706__auto__);
(statearr_31640[(1)] = (1));
return statearr_31640;
});
var state_machine__22706__auto____1 = (function (state_31622){while(true){
var ret_value__22707__auto__ = (function (){try{while(true){
var result__22708__auto__ = switch__22705__auto__(state_31622);if(cljs.core.keyword_identical_QMARK_(result__22708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22708__auto__;
}
break;
}
}catch (e31641){if((e31641 instanceof Object))
{var ex__22709__auto__ = e31641;var statearr_31642_31655 = state_31622;(statearr_31642_31655[(5)] = ex__22709__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_31622);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31641;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31656 = state_31622;
state_31622 = G__31656;
continue;
}
} else
{return ret_value__22707__auto__;
}
break;
}
});
state_machine__22706__auto__ = function(state_31622){
switch(arguments.length){
case 0:
return state_machine__22706__auto____0.call(this);
case 1:
return state_machine__22706__auto____1.call(this,state_31622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22706__auto____0;
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22706__auto____1;
return state_machine__22706__auto__;
})()
;})(switch__22705__auto__,c__22720__auto___31644,out))
})();var state__22722__auto__ = (function (){var statearr_31643 = (function (){return (f__22721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22721__auto__.cljs$core$IFn$_invoke$arity$0() : f__22721__auto__.call(null));
})();(statearr_31643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22720__auto___31644);
return statearr_31643;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22722__auto__);
});})(c__22720__auto___31644,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__22720__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22720__auto__){
return (function (){var f__22721__auto__ = (function (){var switch__22705__auto__ = ((function (c__22720__auto__){
return (function (state_31812){var state_val_31813 = (state_31812[(1)]);if((state_val_31813 === (7)))
{var inst_31808 = (state_31812[(2)]);var state_31812__$1 = state_31812;var statearr_31814_31852 = state_31812__$1;(statearr_31814_31852[(2)] = inst_31808);
(statearr_31814_31852[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31813 === (20)))
{var inst_31783 = (state_31812[(7)]);var inst_31794 = (state_31812[(2)]);var inst_31795 = cljs.core.next(inst_31783);var inst_31769 = inst_31795;var inst_31770 = null;var inst_31771 = (0);var inst_31772 = (0);var state_31812__$1 = (function (){var statearr_31815 = state_31812;(statearr_31815[(8)] = inst_31770);
(statearr_31815[(9)] = inst_31794);
(statearr_31815[(10)] = inst_31771);
(statearr_31815[(11)] = inst_31769);
(statearr_31815[(12)] = inst_31772);
return statearr_31815;
})();var statearr_31816_31853 = state_31812__$1;(statearr_31816_31853[(2)] = null);
(statearr_31816_31853[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31813 === (1)))
{var state_31812__$1 = state_31812;var statearr_31817_31854 = state_31812__$1;(statearr_31817_31854[(2)] = null);
(statearr_31817_31854[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31813 === (4)))
{var inst_31758 = (state_31812[(13)]);var inst_31758__$1 = (state_31812[(2)]);var inst_31759 = (inst_31758__$1 == null);var state_31812__$1 = (function (){var statearr_31821 = state_31812;(statearr_31821[(13)] = inst_31758__$1);
return statearr_31821;
})();if(cljs.core.truth_(inst_31759))
{var statearr_31822_31855 = state_31812__$1;(statearr_31822_31855[(1)] = (5));
} else
{var statearr_31823_31856 = state_31812__$1;(statearr_31823_31856[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31813 === (15)))
{var state_31812__$1 = state_31812;var statearr_31824_31857 = state_31812__$1;(statearr_31824_31857[(2)] = null);
(statearr_31824_31857[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31813 === (13)))
{var inst_31770 = (state_31812[(8)]);var inst_31771 = (state_31812[(10)]);var inst_31769 = (state_31812[(11)]);var inst_31772 = (state_31812[(12)]);var inst_31779 = (state_31812[(2)]);var inst_31780 = (inst_31772 + (1));var tmp31818 = inst_31770;var tmp31819 = inst_31771;var tmp31820 = inst_31769;var inst_31769__$1 = tmp31820;var inst_31770__$1 = tmp31818;var inst_31771__$1 = tmp31819;var inst_31772__$1 = inst_31780;var state_31812__$1 = (function (){var statearr_31825 = state_31812;(statearr_31825[(8)] = inst_31770__$1);
(statearr_31825[(14)] = inst_31779);
(statearr_31825[(10)] = inst_31771__$1);
(statearr_31825[(11)] = inst_31769__$1);
(statearr_31825[(12)] = inst_31772__$1);
return statearr_31825;
})();var statearr_31826_31858 = state_31812__$1;(statearr_31826_31858[(2)] = null);
(statearr_31826_31858[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31813 === (6)))
{var inst_31758 = (state_31812[(13)]);var inst_31763 = (function (){var G__31827 = inst_31758;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__31827) : f.call(null,G__31827));
})();var inst_31768 = cljs.core.seq(inst_31763);var inst_31769 = inst_31768;var inst_31770 = null;var inst_31771 = (0);var inst_31772 = (0);var state_31812__$1 = (function (){var statearr_31828 = state_31812;(statearr_31828[(8)] = inst_31770);
(statearr_31828[(10)] = inst_31771);
(statearr_31828[(11)] = inst_31769);
(statearr_31828[(12)] = inst_31772);
return statearr_31828;
})();var statearr_31829_31859 = state_31812__$1;(statearr_31829_31859[(2)] = null);
(statearr_31829_31859[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31813 === (17)))
{var inst_31783 = (state_31812[(7)]);var inst_31787 = cljs.core.chunk_first(inst_31783);var inst_31788 = cljs.core.chunk_rest(inst_31783);var inst_31789 = cljs.core.count(inst_31787);var inst_31769 = inst_31788;var inst_31770 = inst_31787;var inst_31771 = inst_31789;var inst_31772 = (0);var state_31812__$1 = (function (){var statearr_31830 = state_31812;(statearr_31830[(8)] = inst_31770);
(statearr_31830[(10)] = inst_31771);
(statearr_31830[(11)] = inst_31769);
(statearr_31830[(12)] = inst_31772);
return statearr_31830;
})();var statearr_31831_31860 = state_31812__$1;(statearr_31831_31860[(2)] = null);
(statearr_31831_31860[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31813 === (3)))
{var inst_31810 = (state_31812[(2)]);var state_31812__$1 = state_31812;return cljs.core.async.impl.ioc_helpers.return_chan(state_31812__$1,inst_31810);
} else
{if((state_val_31813 === (12)))
{var inst_31803 = (state_31812[(2)]);var state_31812__$1 = state_31812;var statearr_31832_31861 = state_31812__$1;(statearr_31832_31861[(2)] = inst_31803);
(statearr_31832_31861[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31813 === (2)))
{var state_31812__$1 = state_31812;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31812__$1,(4),in$);
} else
{if((state_val_31813 === (19)))
{var inst_31798 = (state_31812[(2)]);var state_31812__$1 = state_31812;var statearr_31833_31862 = state_31812__$1;(statearr_31833_31862[(2)] = inst_31798);
(statearr_31833_31862[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31813 === (11)))
{var inst_31769 = (state_31812[(11)]);var inst_31783 = (state_31812[(7)]);var inst_31783__$1 = cljs.core.seq(inst_31769);var state_31812__$1 = (function (){var statearr_31834 = state_31812;(statearr_31834[(7)] = inst_31783__$1);
return statearr_31834;
})();if(inst_31783__$1)
{var statearr_31835_31863 = state_31812__$1;(statearr_31835_31863[(1)] = (14));
} else
{var statearr_31836_31864 = state_31812__$1;(statearr_31836_31864[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31813 === (9)))
{var inst_31805 = (state_31812[(2)]);var state_31812__$1 = (function (){var statearr_31837 = state_31812;(statearr_31837[(15)] = inst_31805);
return statearr_31837;
})();var statearr_31838_31865 = state_31812__$1;(statearr_31838_31865[(2)] = null);
(statearr_31838_31865[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31813 === (5)))
{var inst_31761 = cljs.core.async.close_BANG_(out);var state_31812__$1 = state_31812;var statearr_31839_31866 = state_31812__$1;(statearr_31839_31866[(2)] = inst_31761);
(statearr_31839_31866[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31813 === (14)))
{var inst_31783 = (state_31812[(7)]);var inst_31785 = cljs.core.chunked_seq_QMARK_(inst_31783);var state_31812__$1 = state_31812;if(inst_31785)
{var statearr_31840_31867 = state_31812__$1;(statearr_31840_31867[(1)] = (17));
} else
{var statearr_31841_31868 = state_31812__$1;(statearr_31841_31868[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31813 === (16)))
{var inst_31801 = (state_31812[(2)]);var state_31812__$1 = state_31812;var statearr_31842_31869 = state_31812__$1;(statearr_31842_31869[(2)] = inst_31801);
(statearr_31842_31869[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31813 === (10)))
{var inst_31770 = (state_31812[(8)]);var inst_31772 = (state_31812[(12)]);var inst_31777 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31770,inst_31772);var state_31812__$1 = state_31812;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31812__$1,(13),out,inst_31777);
} else
{if((state_val_31813 === (18)))
{var inst_31783 = (state_31812[(7)]);var inst_31792 = cljs.core.first(inst_31783);var state_31812__$1 = state_31812;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31812__$1,(20),out,inst_31792);
} else
{if((state_val_31813 === (8)))
{var inst_31771 = (state_31812[(10)]);var inst_31772 = (state_31812[(12)]);var inst_31774 = (inst_31772 < inst_31771);var inst_31775 = inst_31774;var state_31812__$1 = state_31812;if(cljs.core.truth_(inst_31775))
{var statearr_31843_31870 = state_31812__$1;(statearr_31843_31870[(1)] = (10));
} else
{var statearr_31844_31871 = state_31812__$1;(statearr_31844_31871[(1)] = (11));
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
});})(c__22720__auto__))
;return ((function (switch__22705__auto__,c__22720__auto__){
return (function() {
var state_machine__22706__auto__ = null;
var state_machine__22706__auto____0 = (function (){var statearr_31848 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31848[(0)] = state_machine__22706__auto__);
(statearr_31848[(1)] = (1));
return statearr_31848;
});
var state_machine__22706__auto____1 = (function (state_31812){while(true){
var ret_value__22707__auto__ = (function (){try{while(true){
var result__22708__auto__ = switch__22705__auto__(state_31812);if(cljs.core.keyword_identical_QMARK_(result__22708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22708__auto__;
}
break;
}
}catch (e31849){if((e31849 instanceof Object))
{var ex__22709__auto__ = e31849;var statearr_31850_31872 = state_31812;(statearr_31850_31872[(5)] = ex__22709__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_31812);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31849;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31873 = state_31812;
state_31812 = G__31873;
continue;
}
} else
{return ret_value__22707__auto__;
}
break;
}
});
state_machine__22706__auto__ = function(state_31812){
switch(arguments.length){
case 0:
return state_machine__22706__auto____0.call(this);
case 1:
return state_machine__22706__auto____1.call(this,state_31812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22706__auto____0;
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22706__auto____1;
return state_machine__22706__auto__;
})()
;})(switch__22705__auto__,c__22720__auto__))
})();var state__22722__auto__ = (function (){var statearr_31851 = (function (){return (f__22721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22721__auto__.cljs$core$IFn$_invoke$arity$0() : f__22721__auto__.call(null));
})();(statearr_31851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22720__auto__);
return statearr_31851;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22722__auto__);
});})(c__22720__auto__))
);
return c__22720__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__22720__auto___31963 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22720__auto___31963){
return (function (){var f__22721__auto__ = (function (){var switch__22705__auto__ = ((function (c__22720__auto___31963){
return (function (state_31942){var state_val_31943 = (state_31942[(1)]);if((state_val_31943 === (7)))
{var inst_31938 = (state_31942[(2)]);var state_31942__$1 = state_31942;var statearr_31944_31964 = state_31942__$1;(statearr_31944_31964[(2)] = inst_31938);
(statearr_31944_31964[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31943 === (1)))
{var state_31942__$1 = state_31942;var statearr_31945_31965 = state_31942__$1;(statearr_31945_31965[(2)] = null);
(statearr_31945_31965[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31943 === (4)))
{var inst_31925 = (state_31942[(7)]);var inst_31925__$1 = (state_31942[(2)]);var inst_31926 = (inst_31925__$1 == null);var state_31942__$1 = (function (){var statearr_31946 = state_31942;(statearr_31946[(7)] = inst_31925__$1);
return statearr_31946;
})();if(cljs.core.truth_(inst_31926))
{var statearr_31947_31966 = state_31942__$1;(statearr_31947_31966[(1)] = (5));
} else
{var statearr_31948_31967 = state_31942__$1;(statearr_31948_31967[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31943 === (6)))
{var inst_31925 = (state_31942[(7)]);var state_31942__$1 = state_31942;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31942__$1,(11),to,inst_31925);
} else
{if((state_val_31943 === (3)))
{var inst_31940 = (state_31942[(2)]);var state_31942__$1 = state_31942;return cljs.core.async.impl.ioc_helpers.return_chan(state_31942__$1,inst_31940);
} else
{if((state_val_31943 === (2)))
{var state_31942__$1 = state_31942;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31942__$1,(4),from);
} else
{if((state_val_31943 === (11)))
{var inst_31935 = (state_31942[(2)]);var state_31942__$1 = (function (){var statearr_31949 = state_31942;(statearr_31949[(8)] = inst_31935);
return statearr_31949;
})();var statearr_31950_31968 = state_31942__$1;(statearr_31950_31968[(2)] = null);
(statearr_31950_31968[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31943 === (9)))
{var state_31942__$1 = state_31942;var statearr_31951_31969 = state_31942__$1;(statearr_31951_31969[(2)] = null);
(statearr_31951_31969[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31943 === (5)))
{var state_31942__$1 = state_31942;if(cljs.core.truth_(close_QMARK_))
{var statearr_31952_31970 = state_31942__$1;(statearr_31952_31970[(1)] = (8));
} else
{var statearr_31953_31971 = state_31942__$1;(statearr_31953_31971[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31943 === (10)))
{var inst_31932 = (state_31942[(2)]);var state_31942__$1 = state_31942;var statearr_31954_31972 = state_31942__$1;(statearr_31954_31972[(2)] = inst_31932);
(statearr_31954_31972[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31943 === (8)))
{var inst_31929 = cljs.core.async.close_BANG_(to);var state_31942__$1 = state_31942;var statearr_31955_31973 = state_31942__$1;(statearr_31955_31973[(2)] = inst_31929);
(statearr_31955_31973[(1)] = (10));
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
});})(c__22720__auto___31963))
;return ((function (switch__22705__auto__,c__22720__auto___31963){
return (function() {
var state_machine__22706__auto__ = null;
var state_machine__22706__auto____0 = (function (){var statearr_31959 = [null,null,null,null,null,null,null,null,null];(statearr_31959[(0)] = state_machine__22706__auto__);
(statearr_31959[(1)] = (1));
return statearr_31959;
});
var state_machine__22706__auto____1 = (function (state_31942){while(true){
var ret_value__22707__auto__ = (function (){try{while(true){
var result__22708__auto__ = switch__22705__auto__(state_31942);if(cljs.core.keyword_identical_QMARK_(result__22708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22708__auto__;
}
break;
}
}catch (e31960){if((e31960 instanceof Object))
{var ex__22709__auto__ = e31960;var statearr_31961_31974 = state_31942;(statearr_31961_31974[(5)] = ex__22709__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_31942);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31960;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31975 = state_31942;
state_31942 = G__31975;
continue;
}
} else
{return ret_value__22707__auto__;
}
break;
}
});
state_machine__22706__auto__ = function(state_31942){
switch(arguments.length){
case 0:
return state_machine__22706__auto____0.call(this);
case 1:
return state_machine__22706__auto____1.call(this,state_31942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22706__auto____0;
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22706__auto____1;
return state_machine__22706__auto__;
})()
;})(switch__22705__auto__,c__22720__auto___31963))
})();var state__22722__auto__ = (function (){var statearr_31962 = (function (){return (f__22721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22721__auto__.cljs$core$IFn$_invoke$arity$0() : f__22721__auto__.call(null));
})();(statearr_31962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22720__auto___31963);
return statearr_31962;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22722__auto__);
});})(c__22720__auto___31963))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__22720__auto___32068 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22720__auto___32068,tc,fc){
return (function (){var f__22721__auto__ = (function (){var switch__22705__auto__ = ((function (c__22720__auto___32068,tc,fc){
return (function (state_32045){var state_val_32046 = (state_32045[(1)]);if((state_val_32046 === (7)))
{var inst_32041 = (state_32045[(2)]);var state_32045__$1 = state_32045;var statearr_32047_32069 = state_32045__$1;(statearr_32047_32069[(2)] = inst_32041);
(statearr_32047_32069[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32046 === (1)))
{var state_32045__$1 = state_32045;var statearr_32048_32070 = state_32045__$1;(statearr_32048_32070[(2)] = null);
(statearr_32048_32070[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32046 === (4)))
{var inst_32026 = (state_32045[(7)]);var inst_32026__$1 = (state_32045[(2)]);var inst_32027 = (inst_32026__$1 == null);var state_32045__$1 = (function (){var statearr_32049 = state_32045;(statearr_32049[(7)] = inst_32026__$1);
return statearr_32049;
})();if(cljs.core.truth_(inst_32027))
{var statearr_32050_32071 = state_32045__$1;(statearr_32050_32071[(1)] = (5));
} else
{var statearr_32051_32072 = state_32045__$1;(statearr_32051_32072[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32046 === (6)))
{var inst_32026 = (state_32045[(7)]);var inst_32032 = (function (){var G__32052 = inst_32026;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__32052) : p.call(null,G__32052));
})();var state_32045__$1 = state_32045;if(cljs.core.truth_(inst_32032))
{var statearr_32053_32073 = state_32045__$1;(statearr_32053_32073[(1)] = (9));
} else
{var statearr_32054_32074 = state_32045__$1;(statearr_32054_32074[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32046 === (3)))
{var inst_32043 = (state_32045[(2)]);var state_32045__$1 = state_32045;return cljs.core.async.impl.ioc_helpers.return_chan(state_32045__$1,inst_32043);
} else
{if((state_val_32046 === (2)))
{var state_32045__$1 = state_32045;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32045__$1,(4),ch);
} else
{if((state_val_32046 === (11)))
{var inst_32026 = (state_32045[(7)]);var inst_32036 = (state_32045[(2)]);var state_32045__$1 = state_32045;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32045__$1,(8),inst_32036,inst_32026);
} else
{if((state_val_32046 === (9)))
{var state_32045__$1 = state_32045;var statearr_32055_32075 = state_32045__$1;(statearr_32055_32075[(2)] = tc);
(statearr_32055_32075[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32046 === (5)))
{var inst_32029 = cljs.core.async.close_BANG_(tc);var inst_32030 = cljs.core.async.close_BANG_(fc);var state_32045__$1 = (function (){var statearr_32056 = state_32045;(statearr_32056[(8)] = inst_32029);
return statearr_32056;
})();var statearr_32057_32076 = state_32045__$1;(statearr_32057_32076[(2)] = inst_32030);
(statearr_32057_32076[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32046 === (10)))
{var state_32045__$1 = state_32045;var statearr_32058_32077 = state_32045__$1;(statearr_32058_32077[(2)] = fc);
(statearr_32058_32077[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32046 === (8)))
{var inst_32038 = (state_32045[(2)]);var state_32045__$1 = (function (){var statearr_32059 = state_32045;(statearr_32059[(9)] = inst_32038);
return statearr_32059;
})();var statearr_32060_32078 = state_32045__$1;(statearr_32060_32078[(2)] = null);
(statearr_32060_32078[(1)] = (2));
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
});})(c__22720__auto___32068,tc,fc))
;return ((function (switch__22705__auto__,c__22720__auto___32068,tc,fc){
return (function() {
var state_machine__22706__auto__ = null;
var state_machine__22706__auto____0 = (function (){var statearr_32064 = [null,null,null,null,null,null,null,null,null,null];(statearr_32064[(0)] = state_machine__22706__auto__);
(statearr_32064[(1)] = (1));
return statearr_32064;
});
var state_machine__22706__auto____1 = (function (state_32045){while(true){
var ret_value__22707__auto__ = (function (){try{while(true){
var result__22708__auto__ = switch__22705__auto__(state_32045);if(cljs.core.keyword_identical_QMARK_(result__22708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22708__auto__;
}
break;
}
}catch (e32065){if((e32065 instanceof Object))
{var ex__22709__auto__ = e32065;var statearr_32066_32079 = state_32045;(statearr_32066_32079[(5)] = ex__22709__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_32045);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32065;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32080 = state_32045;
state_32045 = G__32080;
continue;
}
} else
{return ret_value__22707__auto__;
}
break;
}
});
state_machine__22706__auto__ = function(state_32045){
switch(arguments.length){
case 0:
return state_machine__22706__auto____0.call(this);
case 1:
return state_machine__22706__auto____1.call(this,state_32045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22706__auto____0;
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22706__auto____1;
return state_machine__22706__auto__;
})()
;})(switch__22705__auto__,c__22720__auto___32068,tc,fc))
})();var state__22722__auto__ = (function (){var statearr_32067 = (function (){return (f__22721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22721__auto__.cljs$core$IFn$_invoke$arity$0() : f__22721__auto__.call(null));
})();(statearr_32067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22720__auto___32068);
return statearr_32067;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22722__auto__);
});})(c__22720__auto___32068,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__22720__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22720__auto__){
return (function (){var f__22721__auto__ = (function (){var switch__22705__auto__ = ((function (c__22720__auto__){
return (function (state_32129){var state_val_32130 = (state_32129[(1)]);if((state_val_32130 === (7)))
{var inst_32125 = (state_32129[(2)]);var state_32129__$1 = state_32129;var statearr_32131_32149 = state_32129__$1;(statearr_32131_32149[(2)] = inst_32125);
(statearr_32131_32149[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32130 === (6)))
{var inst_32115 = (state_32129[(7)]);var inst_32118 = (state_32129[(8)]);var inst_32122 = (function (){var G__32132 = inst_32115;var G__32133 = inst_32118;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__32132,G__32133) : f.call(null,G__32132,G__32133));
})();var inst_32115__$1 = inst_32122;var state_32129__$1 = (function (){var statearr_32134 = state_32129;(statearr_32134[(7)] = inst_32115__$1);
return statearr_32134;
})();var statearr_32135_32150 = state_32129__$1;(statearr_32135_32150[(2)] = null);
(statearr_32135_32150[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32130 === (5)))
{var inst_32115 = (state_32129[(7)]);var state_32129__$1 = state_32129;var statearr_32136_32151 = state_32129__$1;(statearr_32136_32151[(2)] = inst_32115);
(statearr_32136_32151[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32130 === (4)))
{var inst_32118 = (state_32129[(8)]);var inst_32118__$1 = (state_32129[(2)]);var inst_32119 = (inst_32118__$1 == null);var state_32129__$1 = (function (){var statearr_32137 = state_32129;(statearr_32137[(8)] = inst_32118__$1);
return statearr_32137;
})();if(cljs.core.truth_(inst_32119))
{var statearr_32138_32152 = state_32129__$1;(statearr_32138_32152[(1)] = (5));
} else
{var statearr_32139_32153 = state_32129__$1;(statearr_32139_32153[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32130 === (3)))
{var inst_32127 = (state_32129[(2)]);var state_32129__$1 = state_32129;return cljs.core.async.impl.ioc_helpers.return_chan(state_32129__$1,inst_32127);
} else
{if((state_val_32130 === (2)))
{var state_32129__$1 = state_32129;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32129__$1,(4),ch);
} else
{if((state_val_32130 === (1)))
{var inst_32115 = init;var state_32129__$1 = (function (){var statearr_32140 = state_32129;(statearr_32140[(7)] = inst_32115);
return statearr_32140;
})();var statearr_32141_32154 = state_32129__$1;(statearr_32141_32154[(2)] = null);
(statearr_32141_32154[(1)] = (2));
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
});})(c__22720__auto__))
;return ((function (switch__22705__auto__,c__22720__auto__){
return (function() {
var state_machine__22706__auto__ = null;
var state_machine__22706__auto____0 = (function (){var statearr_32145 = [null,null,null,null,null,null,null,null,null];(statearr_32145[(0)] = state_machine__22706__auto__);
(statearr_32145[(1)] = (1));
return statearr_32145;
});
var state_machine__22706__auto____1 = (function (state_32129){while(true){
var ret_value__22707__auto__ = (function (){try{while(true){
var result__22708__auto__ = switch__22705__auto__(state_32129);if(cljs.core.keyword_identical_QMARK_(result__22708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22708__auto__;
}
break;
}
}catch (e32146){if((e32146 instanceof Object))
{var ex__22709__auto__ = e32146;var statearr_32147_32155 = state_32129;(statearr_32147_32155[(5)] = ex__22709__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_32129);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32146;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32156 = state_32129;
state_32129 = G__32156;
continue;
}
} else
{return ret_value__22707__auto__;
}
break;
}
});
state_machine__22706__auto__ = function(state_32129){
switch(arguments.length){
case 0:
return state_machine__22706__auto____0.call(this);
case 1:
return state_machine__22706__auto____1.call(this,state_32129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22706__auto____0;
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22706__auto____1;
return state_machine__22706__auto__;
})()
;})(switch__22705__auto__,c__22720__auto__))
})();var state__22722__auto__ = (function (){var statearr_32148 = (function (){return (f__22721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22721__auto__.cljs$core$IFn$_invoke$arity$0() : f__22721__auto__.call(null));
})();(statearr_32148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22720__auto__);
return statearr_32148;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22722__auto__);
});})(c__22720__auto__))
);
return c__22720__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__22720__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22720__auto__){
return (function (){var f__22721__auto__ = (function (){var switch__22705__auto__ = ((function (c__22720__auto__){
return (function (state_32221){var state_val_32222 = (state_32221[(1)]);if((state_val_32222 === (7)))
{var inst_32202 = (state_32221[(7)]);var inst_32207 = (state_32221[(2)]);var inst_32208 = cljs.core.next(inst_32202);var inst_32202__$1 = inst_32208;var state_32221__$1 = (function (){var statearr_32223 = state_32221;(statearr_32223[(8)] = inst_32207);
(statearr_32223[(7)] = inst_32202__$1);
return statearr_32223;
})();var statearr_32224_32242 = state_32221__$1;(statearr_32224_32242[(2)] = null);
(statearr_32224_32242[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32222 === (1)))
{var inst_32201 = cljs.core.seq(coll);var inst_32202 = inst_32201;var state_32221__$1 = (function (){var statearr_32225 = state_32221;(statearr_32225[(7)] = inst_32202);
return statearr_32225;
})();var statearr_32226_32243 = state_32221__$1;(statearr_32226_32243[(2)] = null);
(statearr_32226_32243[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32222 === (4)))
{var inst_32202 = (state_32221[(7)]);var inst_32205 = cljs.core.first(inst_32202);var state_32221__$1 = state_32221;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32221__$1,(7),ch,inst_32205);
} else
{if((state_val_32222 === (6)))
{var inst_32217 = (state_32221[(2)]);var state_32221__$1 = state_32221;var statearr_32227_32244 = state_32221__$1;(statearr_32227_32244[(2)] = inst_32217);
(statearr_32227_32244[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32222 === (3)))
{var inst_32219 = (state_32221[(2)]);var state_32221__$1 = state_32221;return cljs.core.async.impl.ioc_helpers.return_chan(state_32221__$1,inst_32219);
} else
{if((state_val_32222 === (2)))
{var inst_32202 = (state_32221[(7)]);var state_32221__$1 = state_32221;if(cljs.core.truth_(inst_32202))
{var statearr_32228_32245 = state_32221__$1;(statearr_32228_32245[(1)] = (4));
} else
{var statearr_32229_32246 = state_32221__$1;(statearr_32229_32246[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32222 === (9)))
{var state_32221__$1 = state_32221;var statearr_32230_32247 = state_32221__$1;(statearr_32230_32247[(2)] = null);
(statearr_32230_32247[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32222 === (5)))
{var state_32221__$1 = state_32221;if(cljs.core.truth_(close_QMARK_))
{var statearr_32231_32248 = state_32221__$1;(statearr_32231_32248[(1)] = (8));
} else
{var statearr_32232_32249 = state_32221__$1;(statearr_32232_32249[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32222 === (10)))
{var inst_32215 = (state_32221[(2)]);var state_32221__$1 = state_32221;var statearr_32233_32250 = state_32221__$1;(statearr_32233_32250[(2)] = inst_32215);
(statearr_32233_32250[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32222 === (8)))
{var inst_32212 = cljs.core.async.close_BANG_(ch);var state_32221__$1 = state_32221;var statearr_32234_32251 = state_32221__$1;(statearr_32234_32251[(2)] = inst_32212);
(statearr_32234_32251[(1)] = (10));
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
});})(c__22720__auto__))
;return ((function (switch__22705__auto__,c__22720__auto__){
return (function() {
var state_machine__22706__auto__ = null;
var state_machine__22706__auto____0 = (function (){var statearr_32238 = [null,null,null,null,null,null,null,null,null];(statearr_32238[(0)] = state_machine__22706__auto__);
(statearr_32238[(1)] = (1));
return statearr_32238;
});
var state_machine__22706__auto____1 = (function (state_32221){while(true){
var ret_value__22707__auto__ = (function (){try{while(true){
var result__22708__auto__ = switch__22705__auto__(state_32221);if(cljs.core.keyword_identical_QMARK_(result__22708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22708__auto__;
}
break;
}
}catch (e32239){if((e32239 instanceof Object))
{var ex__22709__auto__ = e32239;var statearr_32240_32252 = state_32221;(statearr_32240_32252[(5)] = ex__22709__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_32221);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32239;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32253 = state_32221;
state_32221 = G__32253;
continue;
}
} else
{return ret_value__22707__auto__;
}
break;
}
});
state_machine__22706__auto__ = function(state_32221){
switch(arguments.length){
case 0:
return state_machine__22706__auto____0.call(this);
case 1:
return state_machine__22706__auto____1.call(this,state_32221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22706__auto____0;
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22706__auto____1;
return state_machine__22706__auto__;
})()
;})(switch__22705__auto__,c__22720__auto__))
})();var state__22722__auto__ = (function (){var statearr_32241 = (function (){return (f__22721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22721__auto__.cljs$core$IFn$_invoke$arity$0() : f__22721__auto__.call(null));
})();(statearr_32241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22720__auto__);
return statearr_32241;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22722__auto__);
});})(c__22720__auto__))
);
return c__22720__auto__;
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
cljs.core.async.Mux = (function (){var obj32255 = {};return obj32255;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__19255__auto__ = _;if(and__19255__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__19255__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__20512__auto__ = (((_ == null))?null:_);return (function (){var or__19267__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__32259 = x__20512__auto__;return goog.typeOf(G__32259);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj32261 = {};return obj32261;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__19255__auto__ = m;if(and__19255__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__19255__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__20512__auto__ = (((m == null))?null:m);return (function (){var or__19267__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__32265 = x__20512__auto__;return goog.typeOf(G__32265);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__19255__auto__ = m;if(and__19255__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__19255__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__20512__auto__ = (((m == null))?null:m);return (function (){var or__19267__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__32269 = x__20512__auto__;return goog.typeOf(G__32269);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__19255__auto__ = m;if(and__19255__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__19255__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__20512__auto__ = (((m == null))?null:m);return (function (){var or__19267__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__32273 = x__20512__auto__;return goog.typeOf(G__32273);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__32505 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32505) : cljs.core.atom.call(null,G__32505));
})();var m = (function (){if(typeof cljs.core.async.t32506 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32506 = (function (cs,ch,mult,meta32507){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta32507 = meta32507;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32506.cljs$lang$type = true;
cljs.core.async.t32506.cljs$lang$ctorStr = "cljs.core.async/t32506";
cljs.core.async.t32506.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core.async/t32506");
});})(cs))
;
cljs.core.async.t32506.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t32506.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t32506.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t32506.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__32509_32736 = self__.cs;var G__32510_32737 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32509_32736,G__32510_32737) : cljs.core.reset_BANG_.call(null,G__32509_32736,G__32510_32737));
return null;
});})(cs))
;
cljs.core.async.t32506.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32506.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t32506.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32508){var self__ = this;
var _32508__$1 = this;return self__.meta32507;
});})(cs))
;
cljs.core.async.t32506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32508,meta32507__$1){var self__ = this;
var _32508__$1 = this;return (new cljs.core.async.t32506(self__.cs,self__.ch,self__.mult,meta32507__$1));
});})(cs))
;
cljs.core.async.__GT_t32506 = ((function (cs){
return (function __GT_t32506(cs__$1,ch__$1,mult__$1,meta32507){return (new cljs.core.async.t32506(cs__$1,ch__$1,mult__$1,meta32507));
});})(cs))
;
}
return (new cljs.core.async.t32506(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__32511 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32511) : cljs.core.atom.call(null,G__32511));
})();var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__22720__auto___32738 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22720__auto___32738,cs,m,dchan,dctr,done){
return (function (){var f__22721__auto__ = (function (){var switch__22705__auto__ = ((function (c__22720__auto___32738,cs,m,dchan,dctr,done){
return (function (state_32646){var state_val_32647 = (state_32646[(1)]);if((state_val_32647 === (7)))
{var inst_32642 = (state_32646[(2)]);var state_32646__$1 = state_32646;var statearr_32648_32739 = state_32646__$1;(statearr_32648_32739[(2)] = inst_32642);
(statearr_32648_32739[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (20)))
{var inst_32543 = (state_32646[(7)]);var inst_32553 = cljs.core.first(inst_32543);var inst_32554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32553,(0),null);var inst_32555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32553,(1),null);var state_32646__$1 = (function (){var statearr_32649 = state_32646;(statearr_32649[(8)] = inst_32554);
return statearr_32649;
})();if(cljs.core.truth_(inst_32555))
{var statearr_32650_32740 = state_32646__$1;(statearr_32650_32740[(1)] = (22));
} else
{var statearr_32651_32741 = state_32646__$1;(statearr_32651_32741[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (27)))
{var inst_32585 = (state_32646[(9)]);var inst_32583 = (state_32646[(10)]);var inst_32590 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32583,inst_32585);var state_32646__$1 = (function (){var statearr_32652 = state_32646;(statearr_32652[(11)] = inst_32590);
return statearr_32652;
})();var statearr_32653_32742 = state_32646__$1;(statearr_32653_32742[(2)] = null);
(statearr_32653_32742[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (1)))
{var state_32646__$1 = state_32646;var statearr_32654_32743 = state_32646__$1;(statearr_32654_32743[(2)] = null);
(statearr_32654_32743[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (24)))
{var inst_32543 = (state_32646[(7)]);var inst_32560 = (state_32646[(2)]);var inst_32561 = cljs.core.next(inst_32543);var inst_32523 = inst_32561;var inst_32524 = null;var inst_32525 = (0);var inst_32526 = (0);var state_32646__$1 = (function (){var statearr_32655 = state_32646;(statearr_32655[(12)] = inst_32526);
(statearr_32655[(13)] = inst_32524);
(statearr_32655[(14)] = inst_32523);
(statearr_32655[(15)] = inst_32560);
(statearr_32655[(16)] = inst_32525);
return statearr_32655;
})();var statearr_32656_32744 = state_32646__$1;(statearr_32656_32744[(2)] = null);
(statearr_32656_32744[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (39)))
{var inst_32603 = (state_32646[(17)]);var inst_32621 = (state_32646[(2)]);var inst_32622 = cljs.core.next(inst_32603);var inst_32582 = inst_32622;var inst_32583 = null;var inst_32584 = (0);var inst_32585 = (0);var state_32646__$1 = (function (){var statearr_32660 = state_32646;(statearr_32660[(18)] = inst_32621);
(statearr_32660[(19)] = inst_32584);
(statearr_32660[(9)] = inst_32585);
(statearr_32660[(10)] = inst_32583);
(statearr_32660[(20)] = inst_32582);
return statearr_32660;
})();var statearr_32661_32745 = state_32646__$1;(statearr_32661_32745[(2)] = null);
(statearr_32661_32745[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (4)))
{var inst_32514 = (state_32646[(21)]);var inst_32514__$1 = (state_32646[(2)]);var inst_32515 = (inst_32514__$1 == null);var state_32646__$1 = (function (){var statearr_32662 = state_32646;(statearr_32662[(21)] = inst_32514__$1);
return statearr_32662;
})();if(cljs.core.truth_(inst_32515))
{var statearr_32663_32746 = state_32646__$1;(statearr_32663_32746[(1)] = (5));
} else
{var statearr_32664_32747 = state_32646__$1;(statearr_32664_32747[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (15)))
{var inst_32526 = (state_32646[(12)]);var inst_32524 = (state_32646[(13)]);var inst_32523 = (state_32646[(14)]);var inst_32525 = (state_32646[(16)]);var inst_32539 = (state_32646[(2)]);var inst_32540 = (inst_32526 + (1));var tmp32657 = inst_32524;var tmp32658 = inst_32523;var tmp32659 = inst_32525;var inst_32523__$1 = tmp32658;var inst_32524__$1 = tmp32657;var inst_32525__$1 = tmp32659;var inst_32526__$1 = inst_32540;var state_32646__$1 = (function (){var statearr_32665 = state_32646;(statearr_32665[(12)] = inst_32526__$1);
(statearr_32665[(13)] = inst_32524__$1);
(statearr_32665[(22)] = inst_32539);
(statearr_32665[(14)] = inst_32523__$1);
(statearr_32665[(16)] = inst_32525__$1);
return statearr_32665;
})();var statearr_32666_32748 = state_32646__$1;(statearr_32666_32748[(2)] = null);
(statearr_32666_32748[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (21)))
{var inst_32564 = (state_32646[(2)]);var state_32646__$1 = state_32646;var statearr_32667_32749 = state_32646__$1;(statearr_32667_32749[(2)] = inst_32564);
(statearr_32667_32749[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (31)))
{var inst_32590 = (state_32646[(11)]);var inst_32591 = (state_32646[(2)]);var inst_32592 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_32593 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32590);var state_32646__$1 = (function (){var statearr_32668 = state_32646;(statearr_32668[(23)] = inst_32592);
(statearr_32668[(24)] = inst_32591);
return statearr_32668;
})();var statearr_32669_32750 = state_32646__$1;(statearr_32669_32750[(2)] = inst_32593);
cljs.core.async.impl.ioc_helpers.process_exception(state_32646__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (32)))
{var inst_32514 = (state_32646[(21)]);var inst_32590 = (state_32646[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32646,(31),Object,null,(30));var inst_32597 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32590,inst_32514,done);var state_32646__$1 = state_32646;var statearr_32670_32751 = state_32646__$1;(statearr_32670_32751[(2)] = inst_32597);
cljs.core.async.impl.ioc_helpers.process_exception(state_32646__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (40)))
{var inst_32612 = (state_32646[(25)]);var inst_32613 = (state_32646[(2)]);var inst_32614 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_32615 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32612);var state_32646__$1 = (function (){var statearr_32671 = state_32646;(statearr_32671[(26)] = inst_32613);
(statearr_32671[(27)] = inst_32614);
return statearr_32671;
})();var statearr_32672_32752 = state_32646__$1;(statearr_32672_32752[(2)] = inst_32615);
cljs.core.async.impl.ioc_helpers.process_exception(state_32646__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (33)))
{var inst_32603 = (state_32646[(17)]);var inst_32605 = cljs.core.chunked_seq_QMARK_(inst_32603);var state_32646__$1 = state_32646;if(inst_32605)
{var statearr_32673_32753 = state_32646__$1;(statearr_32673_32753[(1)] = (36));
} else
{var statearr_32674_32754 = state_32646__$1;(statearr_32674_32754[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (13)))
{var inst_32533 = (state_32646[(28)]);var inst_32536 = cljs.core.async.close_BANG_(inst_32533);var state_32646__$1 = state_32646;var statearr_32675_32755 = state_32646__$1;(statearr_32675_32755[(2)] = inst_32536);
(statearr_32675_32755[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (22)))
{var inst_32554 = (state_32646[(8)]);var inst_32557 = cljs.core.async.close_BANG_(inst_32554);var state_32646__$1 = state_32646;var statearr_32676_32756 = state_32646__$1;(statearr_32676_32756[(2)] = inst_32557);
(statearr_32676_32756[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (36)))
{var inst_32603 = (state_32646[(17)]);var inst_32607 = cljs.core.chunk_first(inst_32603);var inst_32608 = cljs.core.chunk_rest(inst_32603);var inst_32609 = cljs.core.count(inst_32607);var inst_32582 = inst_32608;var inst_32583 = inst_32607;var inst_32584 = inst_32609;var inst_32585 = (0);var state_32646__$1 = (function (){var statearr_32677 = state_32646;(statearr_32677[(19)] = inst_32584);
(statearr_32677[(9)] = inst_32585);
(statearr_32677[(10)] = inst_32583);
(statearr_32677[(20)] = inst_32582);
return statearr_32677;
})();var statearr_32678_32757 = state_32646__$1;(statearr_32678_32757[(2)] = null);
(statearr_32678_32757[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (41)))
{var inst_32514 = (state_32646[(21)]);var inst_32612 = (state_32646[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32646,(40),Object,null,(39));var inst_32619 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32612,inst_32514,done);var state_32646__$1 = state_32646;var statearr_32679_32758 = state_32646__$1;(statearr_32679_32758[(2)] = inst_32619);
cljs.core.async.impl.ioc_helpers.process_exception(state_32646__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (43)))
{var state_32646__$1 = state_32646;var statearr_32680_32759 = state_32646__$1;(statearr_32680_32759[(2)] = null);
(statearr_32680_32759[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (29)))
{var inst_32630 = (state_32646[(2)]);var state_32646__$1 = state_32646;var statearr_32681_32760 = state_32646__$1;(statearr_32681_32760[(2)] = inst_32630);
(statearr_32681_32760[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (44)))
{var inst_32639 = (state_32646[(2)]);var state_32646__$1 = (function (){var statearr_32682 = state_32646;(statearr_32682[(29)] = inst_32639);
return statearr_32682;
})();var statearr_32683_32761 = state_32646__$1;(statearr_32683_32761[(2)] = null);
(statearr_32683_32761[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (6)))
{var inst_32574 = (state_32646[(30)]);var inst_32573 = (function (){var G__32684 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32684) : cljs.core.deref.call(null,G__32684));
})();var inst_32574__$1 = cljs.core.keys(inst_32573);var inst_32575 = cljs.core.count(inst_32574__$1);var inst_32576 = (function (){var G__32685 = dctr;var G__32686 = inst_32575;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32685,G__32686) : cljs.core.reset_BANG_.call(null,G__32685,G__32686));
})();var inst_32581 = cljs.core.seq(inst_32574__$1);var inst_32582 = inst_32581;var inst_32583 = null;var inst_32584 = (0);var inst_32585 = (0);var state_32646__$1 = (function (){var statearr_32687 = state_32646;(statearr_32687[(19)] = inst_32584);
(statearr_32687[(9)] = inst_32585);
(statearr_32687[(10)] = inst_32583);
(statearr_32687[(30)] = inst_32574__$1);
(statearr_32687[(20)] = inst_32582);
(statearr_32687[(31)] = inst_32576);
return statearr_32687;
})();var statearr_32688_32762 = state_32646__$1;(statearr_32688_32762[(2)] = null);
(statearr_32688_32762[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (28)))
{var inst_32603 = (state_32646[(17)]);var inst_32582 = (state_32646[(20)]);var inst_32603__$1 = cljs.core.seq(inst_32582);var state_32646__$1 = (function (){var statearr_32689 = state_32646;(statearr_32689[(17)] = inst_32603__$1);
return statearr_32689;
})();if(inst_32603__$1)
{var statearr_32690_32763 = state_32646__$1;(statearr_32690_32763[(1)] = (33));
} else
{var statearr_32691_32764 = state_32646__$1;(statearr_32691_32764[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (25)))
{var inst_32584 = (state_32646[(19)]);var inst_32585 = (state_32646[(9)]);var inst_32587 = (inst_32585 < inst_32584);var inst_32588 = inst_32587;var state_32646__$1 = state_32646;if(cljs.core.truth_(inst_32588))
{var statearr_32692_32765 = state_32646__$1;(statearr_32692_32765[(1)] = (27));
} else
{var statearr_32693_32766 = state_32646__$1;(statearr_32693_32766[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (34)))
{var state_32646__$1 = state_32646;var statearr_32694_32767 = state_32646__$1;(statearr_32694_32767[(2)] = null);
(statearr_32694_32767[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (17)))
{var state_32646__$1 = state_32646;var statearr_32695_32768 = state_32646__$1;(statearr_32695_32768[(2)] = null);
(statearr_32695_32768[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (3)))
{var inst_32644 = (state_32646[(2)]);var state_32646__$1 = state_32646;return cljs.core.async.impl.ioc_helpers.return_chan(state_32646__$1,inst_32644);
} else
{if((state_val_32647 === (12)))
{var inst_32569 = (state_32646[(2)]);var state_32646__$1 = state_32646;var statearr_32696_32769 = state_32646__$1;(statearr_32696_32769[(2)] = inst_32569);
(statearr_32696_32769[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (2)))
{var state_32646__$1 = state_32646;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32646__$1,(4),ch);
} else
{if((state_val_32647 === (23)))
{var state_32646__$1 = state_32646;var statearr_32697_32770 = state_32646__$1;(statearr_32697_32770[(2)] = null);
(statearr_32697_32770[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (35)))
{var inst_32628 = (state_32646[(2)]);var state_32646__$1 = state_32646;var statearr_32698_32771 = state_32646__$1;(statearr_32698_32771[(2)] = inst_32628);
(statearr_32698_32771[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (19)))
{var inst_32543 = (state_32646[(7)]);var inst_32547 = cljs.core.chunk_first(inst_32543);var inst_32548 = cljs.core.chunk_rest(inst_32543);var inst_32549 = cljs.core.count(inst_32547);var inst_32523 = inst_32548;var inst_32524 = inst_32547;var inst_32525 = inst_32549;var inst_32526 = (0);var state_32646__$1 = (function (){var statearr_32699 = state_32646;(statearr_32699[(12)] = inst_32526);
(statearr_32699[(13)] = inst_32524);
(statearr_32699[(14)] = inst_32523);
(statearr_32699[(16)] = inst_32525);
return statearr_32699;
})();var statearr_32700_32772 = state_32646__$1;(statearr_32700_32772[(2)] = null);
(statearr_32700_32772[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (11)))
{var inst_32543 = (state_32646[(7)]);var inst_32523 = (state_32646[(14)]);var inst_32543__$1 = cljs.core.seq(inst_32523);var state_32646__$1 = (function (){var statearr_32701 = state_32646;(statearr_32701[(7)] = inst_32543__$1);
return statearr_32701;
})();if(inst_32543__$1)
{var statearr_32702_32773 = state_32646__$1;(statearr_32702_32773[(1)] = (16));
} else
{var statearr_32703_32774 = state_32646__$1;(statearr_32703_32774[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (9)))
{var inst_32571 = (state_32646[(2)]);var state_32646__$1 = state_32646;var statearr_32704_32775 = state_32646__$1;(statearr_32704_32775[(2)] = inst_32571);
(statearr_32704_32775[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (5)))
{var inst_32521 = (function (){var G__32705 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32705) : cljs.core.deref.call(null,G__32705));
})();var inst_32522 = cljs.core.seq(inst_32521);var inst_32523 = inst_32522;var inst_32524 = null;var inst_32525 = (0);var inst_32526 = (0);var state_32646__$1 = (function (){var statearr_32706 = state_32646;(statearr_32706[(12)] = inst_32526);
(statearr_32706[(13)] = inst_32524);
(statearr_32706[(14)] = inst_32523);
(statearr_32706[(16)] = inst_32525);
return statearr_32706;
})();var statearr_32707_32776 = state_32646__$1;(statearr_32707_32776[(2)] = null);
(statearr_32707_32776[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (14)))
{var state_32646__$1 = state_32646;var statearr_32708_32777 = state_32646__$1;(statearr_32708_32777[(2)] = null);
(statearr_32708_32777[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (45)))
{var inst_32636 = (state_32646[(2)]);var state_32646__$1 = state_32646;var statearr_32709_32778 = state_32646__$1;(statearr_32709_32778[(2)] = inst_32636);
(statearr_32709_32778[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (26)))
{var inst_32574 = (state_32646[(30)]);var inst_32632 = (state_32646[(2)]);var inst_32633 = cljs.core.seq(inst_32574);var state_32646__$1 = (function (){var statearr_32710 = state_32646;(statearr_32710[(32)] = inst_32632);
return statearr_32710;
})();if(inst_32633)
{var statearr_32711_32779 = state_32646__$1;(statearr_32711_32779[(1)] = (42));
} else
{var statearr_32712_32780 = state_32646__$1;(statearr_32712_32780[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (16)))
{var inst_32543 = (state_32646[(7)]);var inst_32545 = cljs.core.chunked_seq_QMARK_(inst_32543);var state_32646__$1 = state_32646;if(inst_32545)
{var statearr_32716_32781 = state_32646__$1;(statearr_32716_32781[(1)] = (19));
} else
{var statearr_32717_32782 = state_32646__$1;(statearr_32717_32782[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (38)))
{var inst_32625 = (state_32646[(2)]);var state_32646__$1 = state_32646;var statearr_32718_32783 = state_32646__$1;(statearr_32718_32783[(2)] = inst_32625);
(statearr_32718_32783[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (30)))
{var inst_32584 = (state_32646[(19)]);var inst_32585 = (state_32646[(9)]);var inst_32583 = (state_32646[(10)]);var inst_32582 = (state_32646[(20)]);var inst_32599 = (state_32646[(2)]);var inst_32600 = (inst_32585 + (1));var tmp32713 = inst_32584;var tmp32714 = inst_32583;var tmp32715 = inst_32582;var inst_32582__$1 = tmp32715;var inst_32583__$1 = tmp32714;var inst_32584__$1 = tmp32713;var inst_32585__$1 = inst_32600;var state_32646__$1 = (function (){var statearr_32719 = state_32646;(statearr_32719[(33)] = inst_32599);
(statearr_32719[(19)] = inst_32584__$1);
(statearr_32719[(9)] = inst_32585__$1);
(statearr_32719[(10)] = inst_32583__$1);
(statearr_32719[(20)] = inst_32582__$1);
return statearr_32719;
})();var statearr_32720_32784 = state_32646__$1;(statearr_32720_32784[(2)] = null);
(statearr_32720_32784[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (10)))
{var inst_32526 = (state_32646[(12)]);var inst_32524 = (state_32646[(13)]);var inst_32532 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32524,inst_32526);var inst_32533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32532,(0),null);var inst_32534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32532,(1),null);var state_32646__$1 = (function (){var statearr_32721 = state_32646;(statearr_32721[(28)] = inst_32533);
return statearr_32721;
})();if(cljs.core.truth_(inst_32534))
{var statearr_32722_32785 = state_32646__$1;(statearr_32722_32785[(1)] = (13));
} else
{var statearr_32723_32786 = state_32646__$1;(statearr_32723_32786[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (18)))
{var inst_32567 = (state_32646[(2)]);var state_32646__$1 = state_32646;var statearr_32724_32787 = state_32646__$1;(statearr_32724_32787[(2)] = inst_32567);
(statearr_32724_32787[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (42)))
{var state_32646__$1 = state_32646;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32646__$1,(45),dchan);
} else
{if((state_val_32647 === (37)))
{var inst_32603 = (state_32646[(17)]);var inst_32612 = cljs.core.first(inst_32603);var state_32646__$1 = (function (){var statearr_32725 = state_32646;(statearr_32725[(25)] = inst_32612);
return statearr_32725;
})();var statearr_32726_32788 = state_32646__$1;(statearr_32726_32788[(2)] = null);
(statearr_32726_32788[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32647 === (8)))
{var inst_32526 = (state_32646[(12)]);var inst_32525 = (state_32646[(16)]);var inst_32528 = (inst_32526 < inst_32525);var inst_32529 = inst_32528;var state_32646__$1 = state_32646;if(cljs.core.truth_(inst_32529))
{var statearr_32727_32789 = state_32646__$1;(statearr_32727_32789[(1)] = (10));
} else
{var statearr_32728_32790 = state_32646__$1;(statearr_32728_32790[(1)] = (11));
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
});})(c__22720__auto___32738,cs,m,dchan,dctr,done))
;return ((function (switch__22705__auto__,c__22720__auto___32738,cs,m,dchan,dctr,done){
return (function() {
var state_machine__22706__auto__ = null;
var state_machine__22706__auto____0 = (function (){var statearr_32732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32732[(0)] = state_machine__22706__auto__);
(statearr_32732[(1)] = (1));
return statearr_32732;
});
var state_machine__22706__auto____1 = (function (state_32646){while(true){
var ret_value__22707__auto__ = (function (){try{while(true){
var result__22708__auto__ = switch__22705__auto__(state_32646);if(cljs.core.keyword_identical_QMARK_(result__22708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22708__auto__;
}
break;
}
}catch (e32733){if((e32733 instanceof Object))
{var ex__22709__auto__ = e32733;var statearr_32734_32791 = state_32646;(statearr_32734_32791[(5)] = ex__22709__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_32646);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32733;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32792 = state_32646;
state_32646 = G__32792;
continue;
}
} else
{return ret_value__22707__auto__;
}
break;
}
});
state_machine__22706__auto__ = function(state_32646){
switch(arguments.length){
case 0:
return state_machine__22706__auto____0.call(this);
case 1:
return state_machine__22706__auto____1.call(this,state_32646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22706__auto____0;
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22706__auto____1;
return state_machine__22706__auto__;
})()
;})(switch__22705__auto__,c__22720__auto___32738,cs,m,dchan,dctr,done))
})();var state__22722__auto__ = (function (){var statearr_32735 = (function (){return (f__22721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22721__auto__.cljs$core$IFn$_invoke$arity$0() : f__22721__auto__.call(null));
})();(statearr_32735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22720__auto___32738);
return statearr_32735;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22722__auto__);
});})(c__22720__auto___32738,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj32797 = {};return obj32797;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__19255__auto__ = m;if(and__19255__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__19255__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__20512__auto__ = (((m == null))?null:m);return (function (){var or__19267__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__32801 = x__20512__auto__;return goog.typeOf(G__32801);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__19255__auto__ = m;if(and__19255__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__19255__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__20512__auto__ = (((m == null))?null:m);return (function (){var or__19267__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__32805 = x__20512__auto__;return goog.typeOf(G__32805);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__19255__auto__ = m;if(and__19255__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__19255__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__20512__auto__ = (((m == null))?null:m);return (function (){var or__19267__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__32809 = x__20512__auto__;return goog.typeOf(G__32809);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__19255__auto__ = m;if(and__19255__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__19255__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__20512__auto__ = (((m == null))?null:m);return (function (){var or__19267__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__32813 = x__20512__auto__;return goog.typeOf(G__32813);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__19255__auto__ = m;if(and__19255__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__19255__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__20512__auto__ = (((m == null))?null:m);return (function (){var or__19267__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__32817 = x__20512__auto__;return goog.typeOf(G__32817);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__32941 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32941) : cljs.core.atom.call(null,G__32941));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = (function (){var G__32942 = new cljs.core.Keyword(null,"mute","mute",1151223646);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32942) : cljs.core.atom.call(null,G__32942));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__32943 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__32943) : attr.call(null,G__32943));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__32944 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32944) : cljs.core.deref.call(null,G__32944));
})();var mode = (function (){var G__32945 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32945) : cljs.core.deref.call(null,G__32945));
})();var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t32946 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32946 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32947){
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
this.meta32947 = meta32947;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32946.cljs$lang$type = true;
cljs.core.async.t32946.cljs$lang$ctorStr = "cljs.core.async/t32946";
cljs.core.async.t32946.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core.async/t32946");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32946.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t32946.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32946.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32946.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__32949_33064 = self__.cs;var G__32950_33065 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32949_33064,G__32950_33065) : cljs.core.reset_BANG_.call(null,G__32949_33064,G__32950_33065));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32946.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32946.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__32951 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__32951) : self__.solo_modes.call(null,G__32951));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__32952_33066 = self__.solo_mode;var G__32953_33067 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32952_33066,G__32953_33067) : cljs.core.reset_BANG_.call(null,G__32952_33066,G__32953_33067));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32946.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32946.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32946.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32948){var self__ = this;
var _32948__$1 = this;return self__.meta32947;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32948,meta32947__$1){var self__ = this;
var _32948__$1 = this;return (new cljs.core.async.t32946(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32947__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t32946 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t32946(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32947){return (new cljs.core.async.t32946(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32947));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t32946(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__22720__auto___33068 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22720__auto___33068,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__22721__auto__ = (function (){var switch__22705__auto__ = ((function (c__22720__auto___33068,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33020){var state_val_33021 = (state_33020[(1)]);if((state_val_33021 === (7)))
{var inst_32967 = (state_33020[(7)]);var inst_32972 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32967);var state_33020__$1 = state_33020;var statearr_33022_33069 = state_33020__$1;(statearr_33022_33069[(2)] = inst_32972);
(statearr_33022_33069[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33021 === (20)))
{var inst_32982 = (state_33020[(8)]);var state_33020__$1 = state_33020;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33020__$1,(23),out,inst_32982);
} else
{if((state_val_33021 === (1)))
{var inst_32957 = (state_33020[(9)]);var inst_32957__$1 = calc_state();var inst_32958 = cljs.core.seq_QMARK_(inst_32957__$1);var state_33020__$1 = (function (){var statearr_33023 = state_33020;(statearr_33023[(9)] = inst_32957__$1);
return statearr_33023;
})();if(inst_32958)
{var statearr_33024_33070 = state_33020__$1;(statearr_33024_33070[(1)] = (2));
} else
{var statearr_33025_33071 = state_33020__$1;(statearr_33025_33071[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33021 === (4)))
{var inst_32957 = (state_33020[(9)]);var inst_32963 = (state_33020[(2)]);var inst_32964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32963,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_32965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32963,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_32966 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32963,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_32967 = inst_32957;var state_33020__$1 = (function (){var statearr_33026 = state_33020;(statearr_33026[(10)] = inst_32964);
(statearr_33026[(7)] = inst_32967);
(statearr_33026[(11)] = inst_32966);
(statearr_33026[(12)] = inst_32965);
return statearr_33026;
})();var statearr_33027_33072 = state_33020__$1;(statearr_33027_33072[(2)] = null);
(statearr_33027_33072[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33021 === (15)))
{var state_33020__$1 = state_33020;var statearr_33028_33073 = state_33020__$1;(statearr_33028_33073[(2)] = null);
(statearr_33028_33073[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33021 === (21)))
{var state_33020__$1 = state_33020;var statearr_33029_33074 = state_33020__$1;(statearr_33029_33074[(2)] = null);
(statearr_33029_33074[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33021 === (13)))
{var inst_33016 = (state_33020[(2)]);var state_33020__$1 = state_33020;var statearr_33030_33075 = state_33020__$1;(statearr_33030_33075[(2)] = inst_33016);
(statearr_33030_33075[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33021 === (22)))
{var inst_32975 = (state_33020[(13)]);var inst_33013 = (state_33020[(2)]);var inst_32967 = inst_32975;var state_33020__$1 = (function (){var statearr_33031 = state_33020;(statearr_33031[(14)] = inst_33013);
(statearr_33031[(7)] = inst_32967);
return statearr_33031;
})();var statearr_33032_33076 = state_33020__$1;(statearr_33032_33076[(2)] = null);
(statearr_33032_33076[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33021 === (6)))
{var inst_33018 = (state_33020[(2)]);var state_33020__$1 = state_33020;return cljs.core.async.impl.ioc_helpers.return_chan(state_33020__$1,inst_33018);
} else
{if((state_val_33021 === (17)))
{var inst_32998 = (state_33020[(15)]);var state_33020__$1 = state_33020;var statearr_33033_33077 = state_33020__$1;(statearr_33033_33077[(2)] = inst_32998);
(statearr_33033_33077[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33021 === (3)))
{var inst_32957 = (state_33020[(9)]);var state_33020__$1 = state_33020;var statearr_33034_33078 = state_33020__$1;(statearr_33034_33078[(2)] = inst_32957);
(statearr_33034_33078[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33021 === (12)))
{var inst_32978 = (state_33020[(16)]);var inst_32998 = (state_33020[(15)]);var inst_32983 = (state_33020[(17)]);var inst_32998__$1 = (function (){var G__33035 = inst_32983;return (inst_32978.cljs$core$IFn$_invoke$arity$1 ? inst_32978.cljs$core$IFn$_invoke$arity$1(G__33035) : inst_32978.call(null,G__33035));
})();var state_33020__$1 = (function (){var statearr_33036 = state_33020;(statearr_33036[(15)] = inst_32998__$1);
return statearr_33036;
})();if(cljs.core.truth_(inst_32998__$1))
{var statearr_33037_33079 = state_33020__$1;(statearr_33037_33079[(1)] = (17));
} else
{var statearr_33038_33080 = state_33020__$1;(statearr_33038_33080[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33021 === (2)))
{var inst_32957 = (state_33020[(9)]);var inst_32960 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32957);var state_33020__$1 = state_33020;var statearr_33039_33081 = state_33020__$1;(statearr_33039_33081[(2)] = inst_32960);
(statearr_33039_33081[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33021 === (23)))
{var inst_33010 = (state_33020[(2)]);var state_33020__$1 = state_33020;var statearr_33040_33082 = state_33020__$1;(statearr_33040_33082[(2)] = inst_33010);
(statearr_33040_33082[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33021 === (19)))
{var inst_33007 = (state_33020[(2)]);var state_33020__$1 = state_33020;if(cljs.core.truth_(inst_33007))
{var statearr_33041_33083 = state_33020__$1;(statearr_33041_33083[(1)] = (20));
} else
{var statearr_33042_33084 = state_33020__$1;(statearr_33042_33084[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33021 === (11)))
{var inst_32982 = (state_33020[(8)]);var inst_32988 = (inst_32982 == null);var state_33020__$1 = state_33020;if(cljs.core.truth_(inst_32988))
{var statearr_33043_33085 = state_33020__$1;(statearr_33043_33085[(1)] = (14));
} else
{var statearr_33044_33086 = state_33020__$1;(statearr_33044_33086[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33021 === (9)))
{var inst_32975 = (state_33020[(13)]);var inst_32975__$1 = (state_33020[(2)]);var inst_32976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32975__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_32977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32975__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_32978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32975__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_33020__$1 = (function (){var statearr_33045 = state_33020;(statearr_33045[(18)] = inst_32977);
(statearr_33045[(16)] = inst_32978);
(statearr_33045[(13)] = inst_32975__$1);
return statearr_33045;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_33020__$1,(10),inst_32976);
} else
{if((state_val_33021 === (5)))
{var inst_32967 = (state_33020[(7)]);var inst_32970 = cljs.core.seq_QMARK_(inst_32967);var state_33020__$1 = state_33020;if(inst_32970)
{var statearr_33046_33087 = state_33020__$1;(statearr_33046_33087[(1)] = (7));
} else
{var statearr_33047_33088 = state_33020__$1;(statearr_33047_33088[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33021 === (14)))
{var inst_32983 = (state_33020[(17)]);var inst_32990 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32983);var state_33020__$1 = state_33020;var statearr_33048_33089 = state_33020__$1;(statearr_33048_33089[(2)] = inst_32990);
(statearr_33048_33089[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33021 === (16)))
{var inst_32993 = (state_33020[(2)]);var inst_32994 = calc_state();var inst_32967 = inst_32994;var state_33020__$1 = (function (){var statearr_33049 = state_33020;(statearr_33049[(7)] = inst_32967);
(statearr_33049[(19)] = inst_32993);
return statearr_33049;
})();var statearr_33050_33090 = state_33020__$1;(statearr_33050_33090[(2)] = null);
(statearr_33050_33090[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33021 === (10)))
{var inst_32982 = (state_33020[(8)]);var inst_32983 = (state_33020[(17)]);var inst_32981 = (state_33020[(2)]);var inst_32982__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32981,(0),null);var inst_32983__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32981,(1),null);var inst_32984 = (inst_32982__$1 == null);var inst_32985 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32983__$1,change);var inst_32986 = (inst_32984) || (inst_32985);var state_33020__$1 = (function (){var statearr_33051 = state_33020;(statearr_33051[(8)] = inst_32982__$1);
(statearr_33051[(17)] = inst_32983__$1);
return statearr_33051;
})();if(cljs.core.truth_(inst_32986))
{var statearr_33052_33091 = state_33020__$1;(statearr_33052_33091[(1)] = (11));
} else
{var statearr_33053_33092 = state_33020__$1;(statearr_33053_33092[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33021 === (18)))
{var inst_32977 = (state_33020[(18)]);var inst_32978 = (state_33020[(16)]);var inst_32983 = (state_33020[(17)]);var inst_33002 = cljs.core.empty_QMARK_(inst_32978);var inst_33003 = (function (){var G__33054 = inst_32983;return (inst_32977.cljs$core$IFn$_invoke$arity$1 ? inst_32977.cljs$core$IFn$_invoke$arity$1(G__33054) : inst_32977.call(null,G__33054));
})();var inst_33004 = cljs.core.not(inst_33003);var inst_33005 = (inst_33002) && (inst_33004);var state_33020__$1 = state_33020;var statearr_33055_33093 = state_33020__$1;(statearr_33055_33093[(2)] = inst_33005);
(statearr_33055_33093[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33021 === (8)))
{var inst_32967 = (state_33020[(7)]);var state_33020__$1 = state_33020;var statearr_33056_33094 = state_33020__$1;(statearr_33056_33094[(2)] = inst_32967);
(statearr_33056_33094[(1)] = (9));
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
});})(c__22720__auto___33068,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__22705__auto__,c__22720__auto___33068,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__22706__auto__ = null;
var state_machine__22706__auto____0 = (function (){var statearr_33060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33060[(0)] = state_machine__22706__auto__);
(statearr_33060[(1)] = (1));
return statearr_33060;
});
var state_machine__22706__auto____1 = (function (state_33020){while(true){
var ret_value__22707__auto__ = (function (){try{while(true){
var result__22708__auto__ = switch__22705__auto__(state_33020);if(cljs.core.keyword_identical_QMARK_(result__22708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22708__auto__;
}
break;
}
}catch (e33061){if((e33061 instanceof Object))
{var ex__22709__auto__ = e33061;var statearr_33062_33095 = state_33020;(statearr_33062_33095[(5)] = ex__22709__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33020);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33061;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33096 = state_33020;
state_33020 = G__33096;
continue;
}
} else
{return ret_value__22707__auto__;
}
break;
}
});
state_machine__22706__auto__ = function(state_33020){
switch(arguments.length){
case 0:
return state_machine__22706__auto____0.call(this);
case 1:
return state_machine__22706__auto____1.call(this,state_33020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22706__auto____0;
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22706__auto____1;
return state_machine__22706__auto__;
})()
;})(switch__22705__auto__,c__22720__auto___33068,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__22722__auto__ = (function (){var statearr_33063 = (function (){return (f__22721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22721__auto__.cljs$core$IFn$_invoke$arity$0() : f__22721__auto__.call(null));
})();(statearr_33063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22720__auto___33068);
return statearr_33063;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22722__auto__);
});})(c__22720__auto___33068,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj33098 = {};return obj33098;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__19255__auto__ = p;if(and__19255__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__19255__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__20512__auto__ = (((p == null))?null:p);return (function (){var or__19267__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__33102 = x__20512__auto__;return goog.typeOf(G__33102);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__19255__auto__ = p;if(and__19255__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__19255__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__20512__auto__ = (((p == null))?null:p);return (function (){var or__19267__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__33106 = x__20512__auto__;return goog.typeOf(G__33106);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__19255__auto__ = p;if(and__19255__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__19255__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__20512__auto__ = (((p == null))?null:p);return (function (){var or__19267__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__33112 = x__20512__auto__;return goog.typeOf(G__33112);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__19255__auto__ = p;if(and__19255__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__19255__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__20512__auto__ = (((p == null))?null:p);return (function (){var or__19267__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__33114 = x__20512__auto__;return goog.typeOf(G__33114);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
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
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__33255 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33255) : cljs.core.atom.call(null,G__33255));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__19267__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__33257 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33257) : cljs.core.deref.call(null,G__33257));
})(),topic);if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__19267__auto__,mults){
return (function (p1__33115_SHARP_){if(cljs.core.truth_((function (){var G__33258 = topic;return (p1__33115_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33115_SHARP_.cljs$core$IFn$_invoke$arity$1(G__33258) : p1__33115_SHARP_.call(null,G__33258));
})()))
{return p1__33115_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33115_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__33259 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__33259) : buf_fn.call(null,G__33259));
})())));
}
});})(or__19267__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t33260 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33260 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta33261){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta33261 = meta33261;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33260.cljs$lang$type = true;
cljs.core.async.t33260.cljs$lang$ctorStr = "cljs.core.async/t33260";
cljs.core.async.t33260.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core.async/t33260");
});})(mults,ensure_mult))
;
cljs.core.async.t33260.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t33260.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__33263 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__33263) : self__.ensure_mult.call(null,G__33263));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t33260.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__33264 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33264) : cljs.core.deref.call(null,G__33264));
})(),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t33260.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__33265 = self__.mults;var G__33266 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33265,G__33266) : cljs.core.reset_BANG_.call(null,G__33265,G__33266));
});})(mults,ensure_mult))
;
cljs.core.async.t33260.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t33260.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33260.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t33260.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33262){var self__ = this;
var _33262__$1 = this;return self__.meta33261;
});})(mults,ensure_mult))
;
cljs.core.async.t33260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33262,meta33261__$1){var self__ = this;
var _33262__$1 = this;return (new cljs.core.async.t33260(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta33261__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t33260 = ((function (mults,ensure_mult){
return (function __GT_t33260(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33261){return (new cljs.core.async.t33260(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33261));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t33260(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__22720__auto___33391 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22720__auto___33391,mults,ensure_mult,p){
return (function (){var f__22721__auto__ = (function (){var switch__22705__auto__ = ((function (c__22720__auto___33391,mults,ensure_mult,p){
return (function (state_33340){var state_val_33341 = (state_33340[(1)]);if((state_val_33341 === (7)))
{var inst_33336 = (state_33340[(2)]);var state_33340__$1 = state_33340;var statearr_33342_33392 = state_33340__$1;(statearr_33342_33392[(2)] = inst_33336);
(statearr_33342_33392[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33341 === (20)))
{var state_33340__$1 = state_33340;var statearr_33343_33393 = state_33340__$1;(statearr_33343_33393[(2)] = null);
(statearr_33343_33393[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33341 === (1)))
{var state_33340__$1 = state_33340;var statearr_33344_33394 = state_33340__$1;(statearr_33344_33394[(2)] = null);
(statearr_33344_33394[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33341 === (24)))
{var inst_33269 = (state_33340[(7)]);var inst_33319 = (state_33340[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_33340,(23),Object,null,(22));var inst_33326 = cljs.core.async.muxch_STAR_(inst_33319);var state_33340__$1 = state_33340;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33340__$1,(25),inst_33326,inst_33269);
} else
{if((state_val_33341 === (4)))
{var inst_33269 = (state_33340[(7)]);var inst_33269__$1 = (state_33340[(2)]);var inst_33270 = (inst_33269__$1 == null);var state_33340__$1 = (function (){var statearr_33345 = state_33340;(statearr_33345[(7)] = inst_33269__$1);
return statearr_33345;
})();if(cljs.core.truth_(inst_33270))
{var statearr_33346_33395 = state_33340__$1;(statearr_33346_33395[(1)] = (5));
} else
{var statearr_33347_33396 = state_33340__$1;(statearr_33347_33396[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33341 === (15)))
{var inst_33311 = (state_33340[(2)]);var state_33340__$1 = state_33340;var statearr_33348_33397 = state_33340__$1;(statearr_33348_33397[(2)] = inst_33311);
(statearr_33348_33397[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33341 === (21)))
{var inst_33333 = (state_33340[(2)]);var state_33340__$1 = (function (){var statearr_33349 = state_33340;(statearr_33349[(9)] = inst_33333);
return statearr_33349;
})();var statearr_33350_33398 = state_33340__$1;(statearr_33350_33398[(2)] = null);
(statearr_33350_33398[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33341 === (13)))
{var inst_33293 = (state_33340[(10)]);var inst_33295 = cljs.core.chunked_seq_QMARK_(inst_33293);var state_33340__$1 = state_33340;if(inst_33295)
{var statearr_33351_33399 = state_33340__$1;(statearr_33351_33399[(1)] = (16));
} else
{var statearr_33352_33400 = state_33340__$1;(statearr_33352_33400[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33341 === (22)))
{var inst_33330 = (state_33340[(2)]);var state_33340__$1 = state_33340;var statearr_33353_33401 = state_33340__$1;(statearr_33353_33401[(2)] = inst_33330);
(statearr_33353_33401[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33341 === (6)))
{var inst_33317 = (state_33340[(11)]);var inst_33269 = (state_33340[(7)]);var inst_33319 = (state_33340[(8)]);var inst_33317__$1 = (function (){var G__33354 = inst_33269;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__33354) : topic_fn.call(null,G__33354));
})();var inst_33318 = (function (){var G__33355 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33355) : cljs.core.deref.call(null,G__33355));
})();var inst_33319__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33318,inst_33317__$1);var state_33340__$1 = (function (){var statearr_33356 = state_33340;(statearr_33356[(11)] = inst_33317__$1);
(statearr_33356[(8)] = inst_33319__$1);
return statearr_33356;
})();if(cljs.core.truth_(inst_33319__$1))
{var statearr_33357_33402 = state_33340__$1;(statearr_33357_33402[(1)] = (19));
} else
{var statearr_33358_33403 = state_33340__$1;(statearr_33358_33403[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33341 === (25)))
{var inst_33328 = (state_33340[(2)]);var state_33340__$1 = state_33340;var statearr_33359_33404 = state_33340__$1;(statearr_33359_33404[(2)] = inst_33328);
cljs.core.async.impl.ioc_helpers.process_exception(state_33340__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33341 === (17)))
{var inst_33293 = (state_33340[(10)]);var inst_33302 = cljs.core.first(inst_33293);var inst_33303 = cljs.core.async.muxch_STAR_(inst_33302);var inst_33304 = cljs.core.async.close_BANG_(inst_33303);var inst_33305 = cljs.core.next(inst_33293);var inst_33279 = inst_33305;var inst_33280 = null;var inst_33281 = (0);var inst_33282 = (0);var state_33340__$1 = (function (){var statearr_33360 = state_33340;(statearr_33360[(12)] = inst_33282);
(statearr_33360[(13)] = inst_33280);
(statearr_33360[(14)] = inst_33281);
(statearr_33360[(15)] = inst_33279);
(statearr_33360[(16)] = inst_33304);
return statearr_33360;
})();var statearr_33361_33405 = state_33340__$1;(statearr_33361_33405[(2)] = null);
(statearr_33361_33405[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33341 === (3)))
{var inst_33338 = (state_33340[(2)]);var state_33340__$1 = state_33340;return cljs.core.async.impl.ioc_helpers.return_chan(state_33340__$1,inst_33338);
} else
{if((state_val_33341 === (12)))
{var inst_33313 = (state_33340[(2)]);var state_33340__$1 = state_33340;var statearr_33362_33406 = state_33340__$1;(statearr_33362_33406[(2)] = inst_33313);
(statearr_33362_33406[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33341 === (2)))
{var state_33340__$1 = state_33340;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33340__$1,(4),ch);
} else
{if((state_val_33341 === (23)))
{var inst_33317 = (state_33340[(11)]);var inst_33321 = (state_33340[(2)]);var inst_33322 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33317);var state_33340__$1 = (function (){var statearr_33363 = state_33340;(statearr_33363[(17)] = inst_33321);
return statearr_33363;
})();var statearr_33364_33407 = state_33340__$1;(statearr_33364_33407[(2)] = inst_33322);
cljs.core.async.impl.ioc_helpers.process_exception(state_33340__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33341 === (19)))
{var state_33340__$1 = state_33340;var statearr_33365_33408 = state_33340__$1;(statearr_33365_33408[(2)] = null);
(statearr_33365_33408[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33341 === (11)))
{var inst_33279 = (state_33340[(15)]);var inst_33293 = (state_33340[(10)]);var inst_33293__$1 = cljs.core.seq(inst_33279);var state_33340__$1 = (function (){var statearr_33366 = state_33340;(statearr_33366[(10)] = inst_33293__$1);
return statearr_33366;
})();if(inst_33293__$1)
{var statearr_33367_33409 = state_33340__$1;(statearr_33367_33409[(1)] = (13));
} else
{var statearr_33368_33410 = state_33340__$1;(statearr_33368_33410[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33341 === (9)))
{var inst_33315 = (state_33340[(2)]);var state_33340__$1 = state_33340;var statearr_33369_33411 = state_33340__$1;(statearr_33369_33411[(2)] = inst_33315);
(statearr_33369_33411[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33341 === (5)))
{var inst_33276 = (function (){var G__33370 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33370) : cljs.core.deref.call(null,G__33370));
})();var inst_33277 = cljs.core.vals(inst_33276);var inst_33278 = cljs.core.seq(inst_33277);var inst_33279 = inst_33278;var inst_33280 = null;var inst_33281 = (0);var inst_33282 = (0);var state_33340__$1 = (function (){var statearr_33371 = state_33340;(statearr_33371[(12)] = inst_33282);
(statearr_33371[(13)] = inst_33280);
(statearr_33371[(14)] = inst_33281);
(statearr_33371[(15)] = inst_33279);
return statearr_33371;
})();var statearr_33372_33412 = state_33340__$1;(statearr_33372_33412[(2)] = null);
(statearr_33372_33412[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33341 === (14)))
{var state_33340__$1 = state_33340;var statearr_33376_33413 = state_33340__$1;(statearr_33376_33413[(2)] = null);
(statearr_33376_33413[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33341 === (16)))
{var inst_33293 = (state_33340[(10)]);var inst_33297 = cljs.core.chunk_first(inst_33293);var inst_33298 = cljs.core.chunk_rest(inst_33293);var inst_33299 = cljs.core.count(inst_33297);var inst_33279 = inst_33298;var inst_33280 = inst_33297;var inst_33281 = inst_33299;var inst_33282 = (0);var state_33340__$1 = (function (){var statearr_33377 = state_33340;(statearr_33377[(12)] = inst_33282);
(statearr_33377[(13)] = inst_33280);
(statearr_33377[(14)] = inst_33281);
(statearr_33377[(15)] = inst_33279);
return statearr_33377;
})();var statearr_33378_33414 = state_33340__$1;(statearr_33378_33414[(2)] = null);
(statearr_33378_33414[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33341 === (10)))
{var inst_33282 = (state_33340[(12)]);var inst_33280 = (state_33340[(13)]);var inst_33281 = (state_33340[(14)]);var inst_33279 = (state_33340[(15)]);var inst_33287 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33280,inst_33282);var inst_33288 = cljs.core.async.muxch_STAR_(inst_33287);var inst_33289 = cljs.core.async.close_BANG_(inst_33288);var inst_33290 = (inst_33282 + (1));var tmp33373 = inst_33280;var tmp33374 = inst_33281;var tmp33375 = inst_33279;var inst_33279__$1 = tmp33375;var inst_33280__$1 = tmp33373;var inst_33281__$1 = tmp33374;var inst_33282__$1 = inst_33290;var state_33340__$1 = (function (){var statearr_33379 = state_33340;(statearr_33379[(12)] = inst_33282__$1);
(statearr_33379[(13)] = inst_33280__$1);
(statearr_33379[(18)] = inst_33289);
(statearr_33379[(14)] = inst_33281__$1);
(statearr_33379[(15)] = inst_33279__$1);
return statearr_33379;
})();var statearr_33380_33415 = state_33340__$1;(statearr_33380_33415[(2)] = null);
(statearr_33380_33415[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33341 === (18)))
{var inst_33308 = (state_33340[(2)]);var state_33340__$1 = state_33340;var statearr_33381_33416 = state_33340__$1;(statearr_33381_33416[(2)] = inst_33308);
(statearr_33381_33416[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33341 === (8)))
{var inst_33282 = (state_33340[(12)]);var inst_33281 = (state_33340[(14)]);var inst_33284 = (inst_33282 < inst_33281);var inst_33285 = inst_33284;var state_33340__$1 = state_33340;if(cljs.core.truth_(inst_33285))
{var statearr_33382_33417 = state_33340__$1;(statearr_33382_33417[(1)] = (10));
} else
{var statearr_33383_33418 = state_33340__$1;(statearr_33383_33418[(1)] = (11));
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
});})(c__22720__auto___33391,mults,ensure_mult,p))
;return ((function (switch__22705__auto__,c__22720__auto___33391,mults,ensure_mult,p){
return (function() {
var state_machine__22706__auto__ = null;
var state_machine__22706__auto____0 = (function (){var statearr_33387 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33387[(0)] = state_machine__22706__auto__);
(statearr_33387[(1)] = (1));
return statearr_33387;
});
var state_machine__22706__auto____1 = (function (state_33340){while(true){
var ret_value__22707__auto__ = (function (){try{while(true){
var result__22708__auto__ = switch__22705__auto__(state_33340);if(cljs.core.keyword_identical_QMARK_(result__22708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22708__auto__;
}
break;
}
}catch (e33388){if((e33388 instanceof Object))
{var ex__22709__auto__ = e33388;var statearr_33389_33419 = state_33340;(statearr_33389_33419[(5)] = ex__22709__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33340);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33388;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33420 = state_33340;
state_33340 = G__33420;
continue;
}
} else
{return ret_value__22707__auto__;
}
break;
}
});
state_machine__22706__auto__ = function(state_33340){
switch(arguments.length){
case 0:
return state_machine__22706__auto____0.call(this);
case 1:
return state_machine__22706__auto____1.call(this,state_33340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22706__auto____0;
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22706__auto____1;
return state_machine__22706__auto__;
})()
;})(switch__22705__auto__,c__22720__auto___33391,mults,ensure_mult,p))
})();var state__22722__auto__ = (function (){var statearr_33390 = (function (){return (f__22721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22721__auto__.cljs$core$IFn$_invoke$arity$0() : f__22721__auto__.call(null));
})();(statearr_33390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22720__auto___33391);
return statearr_33390;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22722__auto__);
});})(c__22720__auto___33391,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__33501 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33501) : cljs.core.atom.call(null,G__33501));
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__22720__auto___33574 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22720__auto___33574,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__22721__auto__ = (function (){var switch__22705__auto__ = ((function (c__22720__auto___33574,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33540){var state_val_33541 = (state_33540[(1)]);if((state_val_33541 === (7)))
{var state_33540__$1 = state_33540;var statearr_33542_33575 = state_33540__$1;(statearr_33542_33575[(2)] = null);
(statearr_33542_33575[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33541 === (1)))
{var state_33540__$1 = state_33540;var statearr_33543_33576 = state_33540__$1;(statearr_33543_33576[(2)] = null);
(statearr_33543_33576[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33541 === (4)))
{var inst_33504 = (state_33540[(7)]);var inst_33506 = (inst_33504 < cnt);var state_33540__$1 = state_33540;if(cljs.core.truth_(inst_33506))
{var statearr_33544_33577 = state_33540__$1;(statearr_33544_33577[(1)] = (6));
} else
{var statearr_33545_33578 = state_33540__$1;(statearr_33545_33578[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33541 === (15)))
{var inst_33536 = (state_33540[(2)]);var state_33540__$1 = state_33540;var statearr_33546_33579 = state_33540__$1;(statearr_33546_33579[(2)] = inst_33536);
(statearr_33546_33579[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33541 === (13)))
{var inst_33529 = cljs.core.async.close_BANG_(out);var state_33540__$1 = state_33540;var statearr_33547_33580 = state_33540__$1;(statearr_33547_33580[(2)] = inst_33529);
(statearr_33547_33580[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33541 === (6)))
{var state_33540__$1 = state_33540;var statearr_33548_33581 = state_33540__$1;(statearr_33548_33581[(2)] = null);
(statearr_33548_33581[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33541 === (3)))
{var inst_33538 = (state_33540[(2)]);var state_33540__$1 = state_33540;return cljs.core.async.impl.ioc_helpers.return_chan(state_33540__$1,inst_33538);
} else
{if((state_val_33541 === (12)))
{var inst_33526 = (state_33540[(8)]);var inst_33526__$1 = (state_33540[(2)]);var inst_33527 = cljs.core.some(cljs.core.nil_QMARK_,inst_33526__$1);var state_33540__$1 = (function (){var statearr_33549 = state_33540;(statearr_33549[(8)] = inst_33526__$1);
return statearr_33549;
})();if(cljs.core.truth_(inst_33527))
{var statearr_33550_33582 = state_33540__$1;(statearr_33550_33582[(1)] = (13));
} else
{var statearr_33551_33583 = state_33540__$1;(statearr_33551_33583[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33541 === (2)))
{var inst_33503 = (function (){var G__33552 = dctr;var G__33553 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33552,G__33553) : cljs.core.reset_BANG_.call(null,G__33552,G__33553));
})();var inst_33504 = (0);var state_33540__$1 = (function (){var statearr_33554 = state_33540;(statearr_33554[(7)] = inst_33504);
(statearr_33554[(9)] = inst_33503);
return statearr_33554;
})();var statearr_33555_33584 = state_33540__$1;(statearr_33555_33584[(2)] = null);
(statearr_33555_33584[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33541 === (11)))
{var inst_33504 = (state_33540[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_33540,(10),Object,null,(9));var inst_33513 = (function (){var G__33556 = inst_33504;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__33556) : chs__$1.call(null,G__33556));
})();var inst_33514 = (function (){var G__33557 = inst_33504;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__33557) : done.call(null,G__33557));
})();var inst_33515 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33513,inst_33514);var state_33540__$1 = state_33540;var statearr_33558_33585 = state_33540__$1;(statearr_33558_33585[(2)] = inst_33515);
cljs.core.async.impl.ioc_helpers.process_exception(state_33540__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33541 === (9)))
{var inst_33504 = (state_33540[(7)]);var inst_33517 = (state_33540[(2)]);var inst_33518 = (inst_33504 + (1));var inst_33504__$1 = inst_33518;var state_33540__$1 = (function (){var statearr_33559 = state_33540;(statearr_33559[(10)] = inst_33517);
(statearr_33559[(7)] = inst_33504__$1);
return statearr_33559;
})();var statearr_33560_33586 = state_33540__$1;(statearr_33560_33586[(2)] = null);
(statearr_33560_33586[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33541 === (5)))
{var inst_33524 = (state_33540[(2)]);var state_33540__$1 = (function (){var statearr_33561 = state_33540;(statearr_33561[(11)] = inst_33524);
return statearr_33561;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33540__$1,(12),dchan);
} else
{if((state_val_33541 === (14)))
{var inst_33526 = (state_33540[(8)]);var inst_33531 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33526);var state_33540__$1 = state_33540;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33540__$1,(16),out,inst_33531);
} else
{if((state_val_33541 === (16)))
{var inst_33533 = (state_33540[(2)]);var state_33540__$1 = (function (){var statearr_33562 = state_33540;(statearr_33562[(12)] = inst_33533);
return statearr_33562;
})();var statearr_33563_33587 = state_33540__$1;(statearr_33563_33587[(2)] = null);
(statearr_33563_33587[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33541 === (10)))
{var inst_33508 = (state_33540[(2)]);var inst_33509 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_33540__$1 = (function (){var statearr_33564 = state_33540;(statearr_33564[(13)] = inst_33508);
return statearr_33564;
})();var statearr_33565_33588 = state_33540__$1;(statearr_33565_33588[(2)] = inst_33509);
cljs.core.async.impl.ioc_helpers.process_exception(state_33540__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33541 === (8)))
{var inst_33522 = (state_33540[(2)]);var state_33540__$1 = state_33540;var statearr_33566_33589 = state_33540__$1;(statearr_33566_33589[(2)] = inst_33522);
(statearr_33566_33589[(1)] = (5));
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
});})(c__22720__auto___33574,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__22705__auto__,c__22720__auto___33574,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__22706__auto__ = null;
var state_machine__22706__auto____0 = (function (){var statearr_33570 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33570[(0)] = state_machine__22706__auto__);
(statearr_33570[(1)] = (1));
return statearr_33570;
});
var state_machine__22706__auto____1 = (function (state_33540){while(true){
var ret_value__22707__auto__ = (function (){try{while(true){
var result__22708__auto__ = switch__22705__auto__(state_33540);if(cljs.core.keyword_identical_QMARK_(result__22708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22708__auto__;
}
break;
}
}catch (e33571){if((e33571 instanceof Object))
{var ex__22709__auto__ = e33571;var statearr_33572_33590 = state_33540;(statearr_33572_33590[(5)] = ex__22709__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33540);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33571;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33591 = state_33540;
state_33540 = G__33591;
continue;
}
} else
{return ret_value__22707__auto__;
}
break;
}
});
state_machine__22706__auto__ = function(state_33540){
switch(arguments.length){
case 0:
return state_machine__22706__auto____0.call(this);
case 1:
return state_machine__22706__auto____1.call(this,state_33540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22706__auto____0;
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22706__auto____1;
return state_machine__22706__auto__;
})()
;})(switch__22705__auto__,c__22720__auto___33574,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__22722__auto__ = (function (){var statearr_33573 = (function (){return (f__22721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22721__auto__.cljs$core$IFn$_invoke$arity$0() : f__22721__auto__.call(null));
})();(statearr_33573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22720__auto___33574);
return statearr_33573;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22722__auto__);
});})(c__22720__auto___33574,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22720__auto___33701 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22720__auto___33701,out){
return (function (){var f__22721__auto__ = (function (){var switch__22705__auto__ = ((function (c__22720__auto___33701,out){
return (function (state_33677){var state_val_33678 = (state_33677[(1)]);if((state_val_33678 === (7)))
{var inst_33656 = (state_33677[(7)]);var inst_33657 = (state_33677[(8)]);var inst_33656__$1 = (state_33677[(2)]);var inst_33657__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33656__$1,(0),null);var inst_33658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33656__$1,(1),null);var inst_33659 = (inst_33657__$1 == null);var state_33677__$1 = (function (){var statearr_33679 = state_33677;(statearr_33679[(7)] = inst_33656__$1);
(statearr_33679[(9)] = inst_33658);
(statearr_33679[(8)] = inst_33657__$1);
return statearr_33679;
})();if(cljs.core.truth_(inst_33659))
{var statearr_33680_33702 = state_33677__$1;(statearr_33680_33702[(1)] = (8));
} else
{var statearr_33681_33703 = state_33677__$1;(statearr_33681_33703[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33678 === (1)))
{var inst_33648 = cljs.core.vec(chs);var inst_33649 = inst_33648;var state_33677__$1 = (function (){var statearr_33682 = state_33677;(statearr_33682[(10)] = inst_33649);
return statearr_33682;
})();var statearr_33683_33704 = state_33677__$1;(statearr_33683_33704[(2)] = null);
(statearr_33683_33704[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33678 === (4)))
{var inst_33649 = (state_33677[(10)]);var state_33677__$1 = state_33677;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_33677__$1,(7),inst_33649);
} else
{if((state_val_33678 === (6)))
{var inst_33673 = (state_33677[(2)]);var state_33677__$1 = state_33677;var statearr_33684_33705 = state_33677__$1;(statearr_33684_33705[(2)] = inst_33673);
(statearr_33684_33705[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33678 === (3)))
{var inst_33675 = (state_33677[(2)]);var state_33677__$1 = state_33677;return cljs.core.async.impl.ioc_helpers.return_chan(state_33677__$1,inst_33675);
} else
{if((state_val_33678 === (2)))
{var inst_33649 = (state_33677[(10)]);var inst_33651 = cljs.core.count(inst_33649);var inst_33652 = (inst_33651 > (0));var state_33677__$1 = state_33677;if(cljs.core.truth_(inst_33652))
{var statearr_33686_33706 = state_33677__$1;(statearr_33686_33706[(1)] = (4));
} else
{var statearr_33687_33707 = state_33677__$1;(statearr_33687_33707[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33678 === (11)))
{var inst_33649 = (state_33677[(10)]);var inst_33666 = (state_33677[(2)]);var tmp33685 = inst_33649;var inst_33649__$1 = tmp33685;var state_33677__$1 = (function (){var statearr_33688 = state_33677;(statearr_33688[(11)] = inst_33666);
(statearr_33688[(10)] = inst_33649__$1);
return statearr_33688;
})();var statearr_33689_33708 = state_33677__$1;(statearr_33689_33708[(2)] = null);
(statearr_33689_33708[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33678 === (9)))
{var inst_33657 = (state_33677[(8)]);var state_33677__$1 = state_33677;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33677__$1,(11),out,inst_33657);
} else
{if((state_val_33678 === (5)))
{var inst_33671 = cljs.core.async.close_BANG_(out);var state_33677__$1 = state_33677;var statearr_33690_33709 = state_33677__$1;(statearr_33690_33709[(2)] = inst_33671);
(statearr_33690_33709[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33678 === (10)))
{var inst_33669 = (state_33677[(2)]);var state_33677__$1 = state_33677;var statearr_33691_33710 = state_33677__$1;(statearr_33691_33710[(2)] = inst_33669);
(statearr_33691_33710[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33678 === (8)))
{var inst_33656 = (state_33677[(7)]);var inst_33658 = (state_33677[(9)]);var inst_33649 = (state_33677[(10)]);var inst_33657 = (state_33677[(8)]);var inst_33661 = (function (){var c = inst_33658;var v = inst_33657;var vec__33654 = inst_33656;var cs = inst_33649;return ((function (c,v,vec__33654,cs,inst_33656,inst_33658,inst_33649,inst_33657,state_val_33678,c__22720__auto___33701,out){
return (function (p1__33592_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33592_SHARP_);
});
;})(c,v,vec__33654,cs,inst_33656,inst_33658,inst_33649,inst_33657,state_val_33678,c__22720__auto___33701,out))
})();var inst_33662 = cljs.core.filterv(inst_33661,inst_33649);var inst_33649__$1 = inst_33662;var state_33677__$1 = (function (){var statearr_33692 = state_33677;(statearr_33692[(10)] = inst_33649__$1);
return statearr_33692;
})();var statearr_33693_33711 = state_33677__$1;(statearr_33693_33711[(2)] = null);
(statearr_33693_33711[(1)] = (2));
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
});})(c__22720__auto___33701,out))
;return ((function (switch__22705__auto__,c__22720__auto___33701,out){
return (function() {
var state_machine__22706__auto__ = null;
var state_machine__22706__auto____0 = (function (){var statearr_33697 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33697[(0)] = state_machine__22706__auto__);
(statearr_33697[(1)] = (1));
return statearr_33697;
});
var state_machine__22706__auto____1 = (function (state_33677){while(true){
var ret_value__22707__auto__ = (function (){try{while(true){
var result__22708__auto__ = switch__22705__auto__(state_33677);if(cljs.core.keyword_identical_QMARK_(result__22708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22708__auto__;
}
break;
}
}catch (e33698){if((e33698 instanceof Object))
{var ex__22709__auto__ = e33698;var statearr_33699_33712 = state_33677;(statearr_33699_33712[(5)] = ex__22709__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33677);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33698;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33713 = state_33677;
state_33677 = G__33713;
continue;
}
} else
{return ret_value__22707__auto__;
}
break;
}
});
state_machine__22706__auto__ = function(state_33677){
switch(arguments.length){
case 0:
return state_machine__22706__auto____0.call(this);
case 1:
return state_machine__22706__auto____1.call(this,state_33677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22706__auto____0;
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22706__auto____1;
return state_machine__22706__auto__;
})()
;})(switch__22705__auto__,c__22720__auto___33701,out))
})();var state__22722__auto__ = (function (){var statearr_33700 = (function (){return (f__22721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22721__auto__.cljs$core$IFn$_invoke$arity$0() : f__22721__auto__.call(null));
})();(statearr_33700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22720__auto___33701);
return statearr_33700;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22722__auto__);
});})(c__22720__auto___33701,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22720__auto___33809 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22720__auto___33809,out){
return (function (){var f__22721__auto__ = (function (){var switch__22705__auto__ = ((function (c__22720__auto___33809,out){
return (function (state_33786){var state_val_33787 = (state_33786[(1)]);if((state_val_33787 === (7)))
{var inst_33768 = (state_33786[(7)]);var inst_33768__$1 = (state_33786[(2)]);var inst_33769 = (inst_33768__$1 == null);var inst_33770 = cljs.core.not(inst_33769);var state_33786__$1 = (function (){var statearr_33788 = state_33786;(statearr_33788[(7)] = inst_33768__$1);
return statearr_33788;
})();if(inst_33770)
{var statearr_33789_33810 = state_33786__$1;(statearr_33789_33810[(1)] = (8));
} else
{var statearr_33790_33811 = state_33786__$1;(statearr_33790_33811[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33787 === (1)))
{var inst_33763 = (0);var state_33786__$1 = (function (){var statearr_33791 = state_33786;(statearr_33791[(8)] = inst_33763);
return statearr_33791;
})();var statearr_33792_33812 = state_33786__$1;(statearr_33792_33812[(2)] = null);
(statearr_33792_33812[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33787 === (4)))
{var state_33786__$1 = state_33786;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33786__$1,(7),ch);
} else
{if((state_val_33787 === (6)))
{var inst_33781 = (state_33786[(2)]);var state_33786__$1 = state_33786;var statearr_33793_33813 = state_33786__$1;(statearr_33793_33813[(2)] = inst_33781);
(statearr_33793_33813[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33787 === (3)))
{var inst_33783 = (state_33786[(2)]);var inst_33784 = cljs.core.async.close_BANG_(out);var state_33786__$1 = (function (){var statearr_33794 = state_33786;(statearr_33794[(9)] = inst_33783);
return statearr_33794;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_33786__$1,inst_33784);
} else
{if((state_val_33787 === (2)))
{var inst_33763 = (state_33786[(8)]);var inst_33765 = (inst_33763 < n);var state_33786__$1 = state_33786;if(cljs.core.truth_(inst_33765))
{var statearr_33795_33814 = state_33786__$1;(statearr_33795_33814[(1)] = (4));
} else
{var statearr_33796_33815 = state_33786__$1;(statearr_33796_33815[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33787 === (11)))
{var inst_33763 = (state_33786[(8)]);var inst_33773 = (state_33786[(2)]);var inst_33774 = (inst_33763 + (1));var inst_33763__$1 = inst_33774;var state_33786__$1 = (function (){var statearr_33797 = state_33786;(statearr_33797[(8)] = inst_33763__$1);
(statearr_33797[(10)] = inst_33773);
return statearr_33797;
})();var statearr_33798_33816 = state_33786__$1;(statearr_33798_33816[(2)] = null);
(statearr_33798_33816[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33787 === (9)))
{var state_33786__$1 = state_33786;var statearr_33799_33817 = state_33786__$1;(statearr_33799_33817[(2)] = null);
(statearr_33799_33817[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33787 === (5)))
{var state_33786__$1 = state_33786;var statearr_33800_33818 = state_33786__$1;(statearr_33800_33818[(2)] = null);
(statearr_33800_33818[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33787 === (10)))
{var inst_33778 = (state_33786[(2)]);var state_33786__$1 = state_33786;var statearr_33801_33819 = state_33786__$1;(statearr_33801_33819[(2)] = inst_33778);
(statearr_33801_33819[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33787 === (8)))
{var inst_33768 = (state_33786[(7)]);var state_33786__$1 = state_33786;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33786__$1,(11),out,inst_33768);
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
});})(c__22720__auto___33809,out))
;return ((function (switch__22705__auto__,c__22720__auto___33809,out){
return (function() {
var state_machine__22706__auto__ = null;
var state_machine__22706__auto____0 = (function (){var statearr_33805 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_33805[(0)] = state_machine__22706__auto__);
(statearr_33805[(1)] = (1));
return statearr_33805;
});
var state_machine__22706__auto____1 = (function (state_33786){while(true){
var ret_value__22707__auto__ = (function (){try{while(true){
var result__22708__auto__ = switch__22705__auto__(state_33786);if(cljs.core.keyword_identical_QMARK_(result__22708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22708__auto__;
}
break;
}
}catch (e33806){if((e33806 instanceof Object))
{var ex__22709__auto__ = e33806;var statearr_33807_33820 = state_33786;(statearr_33807_33820[(5)] = ex__22709__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33786);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33806;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33821 = state_33786;
state_33786 = G__33821;
continue;
}
} else
{return ret_value__22707__auto__;
}
break;
}
});
state_machine__22706__auto__ = function(state_33786){
switch(arguments.length){
case 0:
return state_machine__22706__auto____0.call(this);
case 1:
return state_machine__22706__auto____1.call(this,state_33786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22706__auto____0;
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22706__auto____1;
return state_machine__22706__auto__;
})()
;})(switch__22705__auto__,c__22720__auto___33809,out))
})();var state__22722__auto__ = (function (){var statearr_33808 = (function (){return (f__22721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22721__auto__.cljs$core$IFn$_invoke$arity$0() : f__22721__auto__.call(null));
})();(statearr_33808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22720__auto___33809);
return statearr_33808;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22722__auto__);
});})(c__22720__auto___33809,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22720__auto___33920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22720__auto___33920,out){
return (function (){var f__22721__auto__ = (function (){var switch__22705__auto__ = ((function (c__22720__auto___33920,out){
return (function (state_33895){var state_val_33896 = (state_33895[(1)]);if((state_val_33896 === (7)))
{var inst_33890 = (state_33895[(2)]);var state_33895__$1 = state_33895;var statearr_33897_33921 = state_33895__$1;(statearr_33897_33921[(2)] = inst_33890);
(statearr_33897_33921[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33896 === (1)))
{var inst_33872 = null;var state_33895__$1 = (function (){var statearr_33898 = state_33895;(statearr_33898[(7)] = inst_33872);
return statearr_33898;
})();var statearr_33899_33922 = state_33895__$1;(statearr_33899_33922[(2)] = null);
(statearr_33899_33922[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33896 === (4)))
{var inst_33875 = (state_33895[(8)]);var inst_33875__$1 = (state_33895[(2)]);var inst_33876 = (inst_33875__$1 == null);var inst_33877 = cljs.core.not(inst_33876);var state_33895__$1 = (function (){var statearr_33900 = state_33895;(statearr_33900[(8)] = inst_33875__$1);
return statearr_33900;
})();if(inst_33877)
{var statearr_33901_33923 = state_33895__$1;(statearr_33901_33923[(1)] = (5));
} else
{var statearr_33902_33924 = state_33895__$1;(statearr_33902_33924[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33896 === (6)))
{var state_33895__$1 = state_33895;var statearr_33903_33925 = state_33895__$1;(statearr_33903_33925[(2)] = null);
(statearr_33903_33925[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33896 === (3)))
{var inst_33892 = (state_33895[(2)]);var inst_33893 = cljs.core.async.close_BANG_(out);var state_33895__$1 = (function (){var statearr_33904 = state_33895;(statearr_33904[(9)] = inst_33892);
return statearr_33904;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_33895__$1,inst_33893);
} else
{if((state_val_33896 === (2)))
{var state_33895__$1 = state_33895;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33895__$1,(4),ch);
} else
{if((state_val_33896 === (11)))
{var inst_33875 = (state_33895[(8)]);var inst_33884 = (state_33895[(2)]);var inst_33872 = inst_33875;var state_33895__$1 = (function (){var statearr_33905 = state_33895;(statearr_33905[(7)] = inst_33872);
(statearr_33905[(10)] = inst_33884);
return statearr_33905;
})();var statearr_33906_33926 = state_33895__$1;(statearr_33906_33926[(2)] = null);
(statearr_33906_33926[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33896 === (9)))
{var inst_33875 = (state_33895[(8)]);var state_33895__$1 = state_33895;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33895__$1,(11),out,inst_33875);
} else
{if((state_val_33896 === (5)))
{var inst_33872 = (state_33895[(7)]);var inst_33875 = (state_33895[(8)]);var inst_33879 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33875,inst_33872);var state_33895__$1 = state_33895;if(inst_33879)
{var statearr_33908_33927 = state_33895__$1;(statearr_33908_33927[(1)] = (8));
} else
{var statearr_33909_33928 = state_33895__$1;(statearr_33909_33928[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33896 === (10)))
{var inst_33887 = (state_33895[(2)]);var state_33895__$1 = state_33895;var statearr_33910_33929 = state_33895__$1;(statearr_33910_33929[(2)] = inst_33887);
(statearr_33910_33929[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33896 === (8)))
{var inst_33872 = (state_33895[(7)]);var tmp33907 = inst_33872;var inst_33872__$1 = tmp33907;var state_33895__$1 = (function (){var statearr_33911 = state_33895;(statearr_33911[(7)] = inst_33872__$1);
return statearr_33911;
})();var statearr_33912_33930 = state_33895__$1;(statearr_33912_33930[(2)] = null);
(statearr_33912_33930[(1)] = (2));
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
});})(c__22720__auto___33920,out))
;return ((function (switch__22705__auto__,c__22720__auto___33920,out){
return (function() {
var state_machine__22706__auto__ = null;
var state_machine__22706__auto____0 = (function (){var statearr_33916 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_33916[(0)] = state_machine__22706__auto__);
(statearr_33916[(1)] = (1));
return statearr_33916;
});
var state_machine__22706__auto____1 = (function (state_33895){while(true){
var ret_value__22707__auto__ = (function (){try{while(true){
var result__22708__auto__ = switch__22705__auto__(state_33895);if(cljs.core.keyword_identical_QMARK_(result__22708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22708__auto__;
}
break;
}
}catch (e33917){if((e33917 instanceof Object))
{var ex__22709__auto__ = e33917;var statearr_33918_33931 = state_33895;(statearr_33918_33931[(5)] = ex__22709__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33895);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33917;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33932 = state_33895;
state_33895 = G__33932;
continue;
}
} else
{return ret_value__22707__auto__;
}
break;
}
});
state_machine__22706__auto__ = function(state_33895){
switch(arguments.length){
case 0:
return state_machine__22706__auto____0.call(this);
case 1:
return state_machine__22706__auto____1.call(this,state_33895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22706__auto____0;
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22706__auto____1;
return state_machine__22706__auto__;
})()
;})(switch__22705__auto__,c__22720__auto___33920,out))
})();var state__22722__auto__ = (function (){var statearr_33919 = (function (){return (f__22721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22721__auto__.cljs$core$IFn$_invoke$arity$0() : f__22721__auto__.call(null));
})();(statearr_33919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22720__auto___33920);
return statearr_33919;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22722__auto__);
});})(c__22720__auto___33920,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22720__auto___34070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22720__auto___34070,out){
return (function (){var f__22721__auto__ = (function (){var switch__22705__auto__ = ((function (c__22720__auto___34070,out){
return (function (state_34040){var state_val_34041 = (state_34040[(1)]);if((state_val_34041 === (7)))
{var inst_34036 = (state_34040[(2)]);var state_34040__$1 = state_34040;var statearr_34042_34071 = state_34040__$1;(statearr_34042_34071[(2)] = inst_34036);
(statearr_34042_34071[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34041 === (1)))
{var inst_34003 = (new Array(n));var inst_34004 = inst_34003;var inst_34005 = (0);var state_34040__$1 = (function (){var statearr_34043 = state_34040;(statearr_34043[(7)] = inst_34004);
(statearr_34043[(8)] = inst_34005);
return statearr_34043;
})();var statearr_34044_34072 = state_34040__$1;(statearr_34044_34072[(2)] = null);
(statearr_34044_34072[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34041 === (4)))
{var inst_34008 = (state_34040[(9)]);var inst_34008__$1 = (state_34040[(2)]);var inst_34009 = (inst_34008__$1 == null);var inst_34010 = cljs.core.not(inst_34009);var state_34040__$1 = (function (){var statearr_34045 = state_34040;(statearr_34045[(9)] = inst_34008__$1);
return statearr_34045;
})();if(inst_34010)
{var statearr_34046_34073 = state_34040__$1;(statearr_34046_34073[(1)] = (5));
} else
{var statearr_34047_34074 = state_34040__$1;(statearr_34047_34074[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34041 === (15)))
{var inst_34030 = (state_34040[(2)]);var state_34040__$1 = state_34040;var statearr_34048_34075 = state_34040__$1;(statearr_34048_34075[(2)] = inst_34030);
(statearr_34048_34075[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34041 === (13)))
{var state_34040__$1 = state_34040;var statearr_34049_34076 = state_34040__$1;(statearr_34049_34076[(2)] = null);
(statearr_34049_34076[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34041 === (6)))
{var inst_34005 = (state_34040[(8)]);var inst_34026 = (inst_34005 > (0));var state_34040__$1 = state_34040;if(cljs.core.truth_(inst_34026))
{var statearr_34050_34077 = state_34040__$1;(statearr_34050_34077[(1)] = (12));
} else
{var statearr_34051_34078 = state_34040__$1;(statearr_34051_34078[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34041 === (3)))
{var inst_34038 = (state_34040[(2)]);var state_34040__$1 = state_34040;return cljs.core.async.impl.ioc_helpers.return_chan(state_34040__$1,inst_34038);
} else
{if((state_val_34041 === (12)))
{var inst_34004 = (state_34040[(7)]);var inst_34028 = cljs.core.vec(inst_34004);var state_34040__$1 = state_34040;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34040__$1,(15),out,inst_34028);
} else
{if((state_val_34041 === (2)))
{var state_34040__$1 = state_34040;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34040__$1,(4),ch);
} else
{if((state_val_34041 === (11)))
{var inst_34020 = (state_34040[(2)]);var inst_34021 = (new Array(n));var inst_34004 = inst_34021;var inst_34005 = (0);var state_34040__$1 = (function (){var statearr_34052 = state_34040;(statearr_34052[(10)] = inst_34020);
(statearr_34052[(7)] = inst_34004);
(statearr_34052[(8)] = inst_34005);
return statearr_34052;
})();var statearr_34053_34079 = state_34040__$1;(statearr_34053_34079[(2)] = null);
(statearr_34053_34079[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34041 === (9)))
{var inst_34004 = (state_34040[(7)]);var inst_34018 = cljs.core.vec(inst_34004);var state_34040__$1 = state_34040;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34040__$1,(11),out,inst_34018);
} else
{if((state_val_34041 === (5)))
{var inst_34004 = (state_34040[(7)]);var inst_34005 = (state_34040[(8)]);var inst_34008 = (state_34040[(9)]);var inst_34013 = (state_34040[(11)]);var inst_34012 = (inst_34004[inst_34005] = inst_34008);var inst_34013__$1 = (inst_34005 + (1));var inst_34014 = (inst_34013__$1 < n);var state_34040__$1 = (function (){var statearr_34054 = state_34040;(statearr_34054[(12)] = inst_34012);
(statearr_34054[(11)] = inst_34013__$1);
return statearr_34054;
})();if(cljs.core.truth_(inst_34014))
{var statearr_34055_34080 = state_34040__$1;(statearr_34055_34080[(1)] = (8));
} else
{var statearr_34056_34081 = state_34040__$1;(statearr_34056_34081[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34041 === (14)))
{var inst_34033 = (state_34040[(2)]);var inst_34034 = cljs.core.async.close_BANG_(out);var state_34040__$1 = (function (){var statearr_34058 = state_34040;(statearr_34058[(13)] = inst_34033);
return statearr_34058;
})();var statearr_34059_34082 = state_34040__$1;(statearr_34059_34082[(2)] = inst_34034);
(statearr_34059_34082[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34041 === (10)))
{var inst_34024 = (state_34040[(2)]);var state_34040__$1 = state_34040;var statearr_34060_34083 = state_34040__$1;(statearr_34060_34083[(2)] = inst_34024);
(statearr_34060_34083[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34041 === (8)))
{var inst_34004 = (state_34040[(7)]);var inst_34013 = (state_34040[(11)]);var tmp34057 = inst_34004;var inst_34004__$1 = tmp34057;var inst_34005 = inst_34013;var state_34040__$1 = (function (){var statearr_34061 = state_34040;(statearr_34061[(7)] = inst_34004__$1);
(statearr_34061[(8)] = inst_34005);
return statearr_34061;
})();var statearr_34062_34084 = state_34040__$1;(statearr_34062_34084[(2)] = null);
(statearr_34062_34084[(1)] = (2));
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
});})(c__22720__auto___34070,out))
;return ((function (switch__22705__auto__,c__22720__auto___34070,out){
return (function() {
var state_machine__22706__auto__ = null;
var state_machine__22706__auto____0 = (function (){var statearr_34066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34066[(0)] = state_machine__22706__auto__);
(statearr_34066[(1)] = (1));
return statearr_34066;
});
var state_machine__22706__auto____1 = (function (state_34040){while(true){
var ret_value__22707__auto__ = (function (){try{while(true){
var result__22708__auto__ = switch__22705__auto__(state_34040);if(cljs.core.keyword_identical_QMARK_(result__22708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22708__auto__;
}
break;
}
}catch (e34067){if((e34067 instanceof Object))
{var ex__22709__auto__ = e34067;var statearr_34068_34085 = state_34040;(statearr_34068_34085[(5)] = ex__22709__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34040);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34067;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34086 = state_34040;
state_34040 = G__34086;
continue;
}
} else
{return ret_value__22707__auto__;
}
break;
}
});
state_machine__22706__auto__ = function(state_34040){
switch(arguments.length){
case 0:
return state_machine__22706__auto____0.call(this);
case 1:
return state_machine__22706__auto____1.call(this,state_34040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22706__auto____0;
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22706__auto____1;
return state_machine__22706__auto__;
})()
;})(switch__22705__auto__,c__22720__auto___34070,out))
})();var state__22722__auto__ = (function (){var statearr_34069 = (function (){return (f__22721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22721__auto__.cljs$core$IFn$_invoke$arity$0() : f__22721__auto__.call(null));
})();(statearr_34069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22720__auto___34070);
return statearr_34069;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22722__auto__);
});})(c__22720__auto___34070,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22720__auto___34234 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22720__auto___34234,out){
return (function (){var f__22721__auto__ = (function (){var switch__22705__auto__ = ((function (c__22720__auto___34234,out){
return (function (state_34203){var state_val_34204 = (state_34203[(1)]);if((state_val_34204 === (7)))
{var inst_34199 = (state_34203[(2)]);var state_34203__$1 = state_34203;var statearr_34205_34235 = state_34203__$1;(statearr_34205_34235[(2)] = inst_34199);
(statearr_34205_34235[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34204 === (1)))
{var inst_34162 = [];var inst_34163 = inst_34162;var inst_34164 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_34203__$1 = (function (){var statearr_34206 = state_34203;(statearr_34206[(7)] = inst_34164);
(statearr_34206[(8)] = inst_34163);
return statearr_34206;
})();var statearr_34207_34236 = state_34203__$1;(statearr_34207_34236[(2)] = null);
(statearr_34207_34236[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34204 === (4)))
{var inst_34167 = (state_34203[(9)]);var inst_34167__$1 = (state_34203[(2)]);var inst_34168 = (inst_34167__$1 == null);var inst_34169 = cljs.core.not(inst_34168);var state_34203__$1 = (function (){var statearr_34208 = state_34203;(statearr_34208[(9)] = inst_34167__$1);
return statearr_34208;
})();if(inst_34169)
{var statearr_34209_34237 = state_34203__$1;(statearr_34209_34237[(1)] = (5));
} else
{var statearr_34210_34238 = state_34203__$1;(statearr_34210_34238[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34204 === (15)))
{var inst_34193 = (state_34203[(2)]);var state_34203__$1 = state_34203;var statearr_34211_34239 = state_34203__$1;(statearr_34211_34239[(2)] = inst_34193);
(statearr_34211_34239[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34204 === (13)))
{var state_34203__$1 = state_34203;var statearr_34212_34240 = state_34203__$1;(statearr_34212_34240[(2)] = null);
(statearr_34212_34240[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34204 === (6)))
{var inst_34163 = (state_34203[(8)]);var inst_34188 = inst_34163.length;var inst_34189 = (inst_34188 > (0));var state_34203__$1 = state_34203;if(cljs.core.truth_(inst_34189))
{var statearr_34213_34241 = state_34203__$1;(statearr_34213_34241[(1)] = (12));
} else
{var statearr_34214_34242 = state_34203__$1;(statearr_34214_34242[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34204 === (3)))
{var inst_34201 = (state_34203[(2)]);var state_34203__$1 = state_34203;return cljs.core.async.impl.ioc_helpers.return_chan(state_34203__$1,inst_34201);
} else
{if((state_val_34204 === (12)))
{var inst_34163 = (state_34203[(8)]);var inst_34191 = cljs.core.vec(inst_34163);var state_34203__$1 = state_34203;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34203__$1,(15),out,inst_34191);
} else
{if((state_val_34204 === (2)))
{var state_34203__$1 = state_34203;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34203__$1,(4),ch);
} else
{if((state_val_34204 === (11)))
{var inst_34171 = (state_34203[(10)]);var inst_34167 = (state_34203[(9)]);var inst_34181 = (state_34203[(2)]);var inst_34182 = [];var inst_34183 = inst_34182.push(inst_34167);var inst_34163 = inst_34182;var inst_34164 = inst_34171;var state_34203__$1 = (function (){var statearr_34215 = state_34203;(statearr_34215[(7)] = inst_34164);
(statearr_34215[(11)] = inst_34183);
(statearr_34215[(12)] = inst_34181);
(statearr_34215[(8)] = inst_34163);
return statearr_34215;
})();var statearr_34216_34243 = state_34203__$1;(statearr_34216_34243[(2)] = null);
(statearr_34216_34243[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34204 === (9)))
{var inst_34163 = (state_34203[(8)]);var inst_34179 = cljs.core.vec(inst_34163);var state_34203__$1 = state_34203;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34203__$1,(11),out,inst_34179);
} else
{if((state_val_34204 === (5)))
{var inst_34164 = (state_34203[(7)]);var inst_34171 = (state_34203[(10)]);var inst_34167 = (state_34203[(9)]);var inst_34171__$1 = (function (){var G__34217 = inst_34167;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34217) : f.call(null,G__34217));
})();var inst_34172 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34171__$1,inst_34164);var inst_34173 = cljs.core.keyword_identical_QMARK_(inst_34164,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_34174 = (inst_34172) || (inst_34173);var state_34203__$1 = (function (){var statearr_34218 = state_34203;(statearr_34218[(10)] = inst_34171__$1);
return statearr_34218;
})();if(cljs.core.truth_(inst_34174))
{var statearr_34219_34244 = state_34203__$1;(statearr_34219_34244[(1)] = (8));
} else
{var statearr_34220_34245 = state_34203__$1;(statearr_34220_34245[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34204 === (14)))
{var inst_34196 = (state_34203[(2)]);var inst_34197 = cljs.core.async.close_BANG_(out);var state_34203__$1 = (function (){var statearr_34222 = state_34203;(statearr_34222[(13)] = inst_34196);
return statearr_34222;
})();var statearr_34223_34246 = state_34203__$1;(statearr_34223_34246[(2)] = inst_34197);
(statearr_34223_34246[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34204 === (10)))
{var inst_34186 = (state_34203[(2)]);var state_34203__$1 = state_34203;var statearr_34224_34247 = state_34203__$1;(statearr_34224_34247[(2)] = inst_34186);
(statearr_34224_34247[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34204 === (8)))
{var inst_34171 = (state_34203[(10)]);var inst_34167 = (state_34203[(9)]);var inst_34163 = (state_34203[(8)]);var inst_34176 = inst_34163.push(inst_34167);var tmp34221 = inst_34163;var inst_34163__$1 = tmp34221;var inst_34164 = inst_34171;var state_34203__$1 = (function (){var statearr_34225 = state_34203;(statearr_34225[(7)] = inst_34164);
(statearr_34225[(14)] = inst_34176);
(statearr_34225[(8)] = inst_34163__$1);
return statearr_34225;
})();var statearr_34226_34248 = state_34203__$1;(statearr_34226_34248[(2)] = null);
(statearr_34226_34248[(1)] = (2));
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
});})(c__22720__auto___34234,out))
;return ((function (switch__22705__auto__,c__22720__auto___34234,out){
return (function() {
var state_machine__22706__auto__ = null;
var state_machine__22706__auto____0 = (function (){var statearr_34230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34230[(0)] = state_machine__22706__auto__);
(statearr_34230[(1)] = (1));
return statearr_34230;
});
var state_machine__22706__auto____1 = (function (state_34203){while(true){
var ret_value__22707__auto__ = (function (){try{while(true){
var result__22708__auto__ = switch__22705__auto__(state_34203);if(cljs.core.keyword_identical_QMARK_(result__22708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22708__auto__;
}
break;
}
}catch (e34231){if((e34231 instanceof Object))
{var ex__22709__auto__ = e34231;var statearr_34232_34249 = state_34203;(statearr_34232_34249[(5)] = ex__22709__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34203);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34231;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34250 = state_34203;
state_34203 = G__34250;
continue;
}
} else
{return ret_value__22707__auto__;
}
break;
}
});
state_machine__22706__auto__ = function(state_34203){
switch(arguments.length){
case 0:
return state_machine__22706__auto____0.call(this);
case 1:
return state_machine__22706__auto____1.call(this,state_34203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22706__auto____0;
state_machine__22706__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22706__auto____1;
return state_machine__22706__auto__;
})()
;})(switch__22705__auto__,c__22720__auto___34234,out))
})();var state__22722__auto__ = (function (){var statearr_34233 = (function (){return (f__22721__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22721__auto__.cljs$core$IFn$_invoke$arity$0() : f__22721__auto__.call(null));
})();(statearr_34233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22720__auto___34234);
return statearr_34233;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22722__auto__);
});})(c__22720__auto___34234,out))
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