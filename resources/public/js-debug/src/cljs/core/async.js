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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t31408 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31408 = (function (f,fn_handler,meta31409){
this.f = f;
this.fn_handler = fn_handler;
this.meta31409 = meta31409;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31408.cljs$lang$type = true;
cljs.core.async.t31408.cljs$lang$ctorStr = "cljs.core.async/t31408";
cljs.core.async.t31408.cljs$lang$ctorPrWriter = (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"cljs.core.async/t31408");
});
cljs.core.async.t31408.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31408.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t31408.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t31408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31410){var self__ = this;
var _31410__$1 = this;return self__.meta31409;
});
cljs.core.async.t31408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31410,meta31409__$1){var self__ = this;
var _31410__$1 = this;return (new cljs.core.async.t31408(self__.f,self__.fn_handler,meta31409__$1));
});
cljs.core.async.__GT_t31408 = (function __GT_t31408(f__$1,fn_handler__$1,meta31409){return (new cljs.core.async.t31408(f__$1,fn_handler__$1,meta31409));
});
}
return (new cljs.core.async.t31408(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__31412 = buff;if(G__31412)
{var bit__20596__auto__ = null;if(cljs.core.truth_((function (){var or__19357__auto__ = bit__20596__auto__;if(cljs.core.truth_(or__19357__auto__))
{return or__19357__auto__;
} else
{return G__31412.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__31412.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__31412);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__31412);
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
{var val_31423 = (function (){var G__31420 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31420) : cljs.core.deref.call(null,G__31420));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__31421_31424 = val_31423;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__31421_31424) : fn1.call(null,G__31421_31424));
} else
{cljs.core.async.impl.dispatch.run(((function (val_31423,ret){
return (function (){var G__31422 = val_31423;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__31422) : fn1.call(null,G__31422));
});})(val_31423,ret))
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__19335__auto__ = ret;if(cljs.core.truth_(and__19335__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__19335__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__20989__auto___31432 = n;var x_31433 = (0);while(true){
if((x_31433 < n__20989__auto___31432))
{(a[x_31433] = (0));
{
var G__31434 = (x_31433 + (1));
x_31433 = G__31434;
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
var G__31435 = (i + (1));
i = G__31435;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__31443 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__31443) : cljs.core.atom.call(null,G__31443));
})();if(typeof cljs.core.async.t31444 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31444 = (function (flag,alt_flag,meta31445){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta31445 = meta31445;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31444.cljs$lang$type = true;
cljs.core.async.t31444.cljs$lang$ctorStr = "cljs.core.async/t31444";
cljs.core.async.t31444.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"cljs.core.async/t31444");
});})(flag))
;
cljs.core.async.t31444.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31444.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__31447 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31447) : cljs.core.deref.call(null,G__31447));
});})(flag))
;
cljs.core.async.t31444.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__31448_31450 = self__.flag;var G__31449_31451 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__31448_31450,G__31449_31451) : cljs.core.reset_BANG_.call(null,G__31448_31450,G__31449_31451));
return true;
});})(flag))
;
cljs.core.async.t31444.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31446){var self__ = this;
var _31446__$1 = this;return self__.meta31445;
});})(flag))
;
cljs.core.async.t31444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31446,meta31445__$1){var self__ = this;
var _31446__$1 = this;return (new cljs.core.async.t31444(self__.flag,self__.alt_flag,meta31445__$1));
});})(flag))
;
cljs.core.async.__GT_t31444 = ((function (flag){
return (function __GT_t31444(flag__$1,alt_flag__$1,meta31445){return (new cljs.core.async.t31444(flag__$1,alt_flag__$1,meta31445));
});})(flag))
;
}
return (new cljs.core.async.t31444(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t31455 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31455 = (function (cb,flag,alt_handler,meta31456){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta31456 = meta31456;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31455.cljs$lang$type = true;
cljs.core.async.t31455.cljs$lang$ctorStr = "cljs.core.async/t31455";
cljs.core.async.t31455.cljs$lang$ctorPrWriter = (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"cljs.core.async/t31455");
});
cljs.core.async.t31455.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31455.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t31455.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t31455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31457){var self__ = this;
var _31457__$1 = this;return self__.meta31456;
});
cljs.core.async.t31455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31457,meta31456__$1){var self__ = this;
var _31457__$1 = this;return (new cljs.core.async.t31455(self__.cb,self__.flag,self__.alt_handler,meta31456__$1));
});
cljs.core.async.__GT_t31455 = (function __GT_t31455(cb__$1,flag__$1,alt_handler__$1,meta31456){return (new cljs.core.async.t31455(cb__$1,flag__$1,alt_handler__$1,meta31456));
});
}
return (new cljs.core.async.t31455(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__31464 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__31464) : port.call(null,G__31464));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__31465 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__31465) : port.call(null,G__31465));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){var G__31466 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31466) : fret.call(null,G__31466));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31458_SHARP_){var G__31467 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31458_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31467) : fret.call(null,G__31467));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__31468 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31468) : cljs.core.deref.call(null,G__31468));
})(),(function (){var or__19357__auto__ = wport;if(cljs.core.truth_(or__19357__auto__))
{return or__19357__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__31469 = (i + (1));
i = G__31469;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__19357__auto__ = ret;if(cljs.core.truth_(or__19357__auto__))
{return or__19357__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__19335__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__19335__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__19335__auto__;
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
var alts_BANG___delegate = function (ports,p__31470){var map__31472 = p__31470;var map__31472__$1 = ((cljs.core.seq_QMARK_(map__31472))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31472):map__31472);var opts = map__31472__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

};
var alts_BANG_ = function (ports,var_args){
var p__31470 = null;if (arguments.length > 1) {
  p__31470 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__31470);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__31473){
var ports = cljs.core.first(arglist__31473);
var p__31470 = cljs.core.rest(arglist__31473);
return alts_BANG___delegate(ports,p__31470);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t31487 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31487 = (function (ch,f,map_LT_,meta31488){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31488 = meta31488;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31487.cljs$lang$type = true;
cljs.core.async.t31487.cljs$lang$ctorStr = "cljs.core.async/t31487";
cljs.core.async.t31487.cljs$lang$ctorPrWriter = (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"cljs.core.async/t31487");
});
cljs.core.async.t31487.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31487.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t31487.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31487.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t31490 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31490 = (function (fn1,_,meta31488,ch,f,map_LT_,meta31491){
this.fn1 = fn1;
this._ = _;
this.meta31488 = meta31488;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31491 = meta31491;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31490.cljs$lang$type = true;
cljs.core.async.t31490.cljs$lang$ctorStr = "cljs.core.async/t31490";
cljs.core.async.t31490.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"cljs.core.async/t31490");
});})(___$1))
;
cljs.core.async.t31490.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31490.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t31490.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var G__31493 = self__.fn1;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(G__31493) : cljs.core.async.impl.protocols.lock_id.call(null,G__31493));
});})(___$1))
;
cljs.core.async.t31490.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__31474_SHARP_){var G__31494 = (((p1__31474_SHARP_ == null))?null:(function (){var G__31495 = p1__31474_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31495) : self__.f.call(null,G__31495));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31494) : f1.call(null,G__31494));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t31490.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31492){var self__ = this;
var _31492__$1 = this;return self__.meta31491;
});})(___$1))
;
cljs.core.async.t31490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31492,meta31491__$1){var self__ = this;
var _31492__$1 = this;return (new cljs.core.async.t31490(self__.fn1,self__._,self__.meta31488,self__.ch,self__.f,self__.map_LT_,meta31491__$1));
});})(___$1))
;
cljs.core.async.__GT_t31490 = ((function (___$1){
return (function __GT_t31490(fn1__$1,___$2,meta31488__$1,ch__$2,f__$2,map_LT___$2,meta31491){return (new cljs.core.async.t31490(fn1__$1,___$2,meta31488__$1,ch__$2,f__$2,map_LT___$2,meta31491));
});})(___$1))
;
}
return (new cljs.core.async.t31490(fn1,___$1,self__.meta31488,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__19335__auto__ = ret;if(cljs.core.truth_(and__19335__auto__))
{return !(((function (){var G__31496 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31496) : cljs.core.deref.call(null,G__31496));
})() == null));
} else
{return and__19335__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__31497 = (function (){var G__31498 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31498) : cljs.core.deref.call(null,G__31498));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31497) : self__.f.call(null,G__31497));
})());
} else
{return ret;
}
});
cljs.core.async.t31487.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31487.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t31487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31489){var self__ = this;
var _31489__$1 = this;return self__.meta31488;
});
cljs.core.async.t31487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31489,meta31488__$1){var self__ = this;
var _31489__$1 = this;return (new cljs.core.async.t31487(self__.ch,self__.f,self__.map_LT_,meta31488__$1));
});
cljs.core.async.__GT_t31487 = (function __GT_t31487(ch__$1,f__$1,map_LT___$1,meta31488){return (new cljs.core.async.t31487(ch__$1,f__$1,map_LT___$1,meta31488));
});
}
return (new cljs.core.async.t31487(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t31503 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31503 = (function (ch,f,map_GT_,meta31504){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta31504 = meta31504;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31503.cljs$lang$type = true;
cljs.core.async.t31503.cljs$lang$ctorStr = "cljs.core.async/t31503";
cljs.core.async.t31503.cljs$lang$ctorPrWriter = (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"cljs.core.async/t31503");
});
cljs.core.async.t31503.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31503.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__31506 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31506) : self__.f.call(null,G__31506));
})(),fn0);
});
cljs.core.async.t31503.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31503.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t31503.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31503.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t31503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31505){var self__ = this;
var _31505__$1 = this;return self__.meta31504;
});
cljs.core.async.t31503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31505,meta31504__$1){var self__ = this;
var _31505__$1 = this;return (new cljs.core.async.t31503(self__.ch,self__.f,self__.map_GT_,meta31504__$1));
});
cljs.core.async.__GT_t31503 = (function __GT_t31503(ch__$1,f__$1,map_GT___$1,meta31504){return (new cljs.core.async.t31503(ch__$1,f__$1,map_GT___$1,meta31504));
});
}
return (new cljs.core.async.t31503(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t31511 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31511 = (function (ch,p,filter_GT_,meta31512){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta31512 = meta31512;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31511.cljs$lang$type = true;
cljs.core.async.t31511.cljs$lang$ctorStr = "cljs.core.async/t31511";
cljs.core.async.t31511.cljs$lang$ctorPrWriter = (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"cljs.core.async/t31511");
});
cljs.core.async.t31511.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31511.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__31514 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__31514) : self__.p.call(null,G__31514));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t31511.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31511.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t31511.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31511.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t31511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31513){var self__ = this;
var _31513__$1 = this;return self__.meta31512;
});
cljs.core.async.t31511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31513,meta31512__$1){var self__ = this;
var _31513__$1 = this;return (new cljs.core.async.t31511(self__.ch,self__.p,self__.filter_GT_,meta31512__$1));
});
cljs.core.async.__GT_t31511 = (function __GT_t31511(ch__$1,p__$1,filter_GT___$1,meta31512){return (new cljs.core.async.t31511(ch__$1,p__$1,filter_GT___$1,meta31512));
});
}
return (new cljs.core.async.t31511(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22717__auto___31602 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22717__auto___31602,out){
return (function (){var f__22718__auto__ = (function (){var switch__22702__auto__ = ((function (c__22717__auto___31602,out){
return (function (state_31580){var state_val_31581 = (state_31580[(1)]);if((state_val_31581 === (7)))
{var inst_31576 = (state_31580[(2)]);var state_31580__$1 = state_31580;var statearr_31582_31603 = state_31580__$1;(statearr_31582_31603[(2)] = inst_31576);
(statearr_31582_31603[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31581 === (1)))
{var state_31580__$1 = state_31580;var statearr_31583_31604 = state_31580__$1;(statearr_31583_31604[(2)] = null);
(statearr_31583_31604[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31581 === (4)))
{var inst_31562 = (state_31580[(7)]);var inst_31562__$1 = (state_31580[(2)]);var inst_31563 = (inst_31562__$1 == null);var state_31580__$1 = (function (){var statearr_31584 = state_31580;(statearr_31584[(7)] = inst_31562__$1);
return statearr_31584;
})();if(cljs.core.truth_(inst_31563))
{var statearr_31585_31605 = state_31580__$1;(statearr_31585_31605[(1)] = (5));
} else
{var statearr_31586_31606 = state_31580__$1;(statearr_31586_31606[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31581 === (6)))
{var inst_31562 = (state_31580[(7)]);var inst_31567 = (function (){var G__31587 = inst_31562;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__31587) : p.call(null,G__31587));
})();var state_31580__$1 = state_31580;if(cljs.core.truth_(inst_31567))
{var statearr_31588_31607 = state_31580__$1;(statearr_31588_31607[(1)] = (8));
} else
{var statearr_31589_31608 = state_31580__$1;(statearr_31589_31608[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31581 === (3)))
{var inst_31578 = (state_31580[(2)]);var state_31580__$1 = state_31580;return cljs.core.async.impl.ioc_helpers.return_chan(state_31580__$1,inst_31578);
} else
{if((state_val_31581 === (2)))
{var state_31580__$1 = state_31580;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31580__$1,(4),ch);
} else
{if((state_val_31581 === (11)))
{var inst_31570 = (state_31580[(2)]);var state_31580__$1 = state_31580;var statearr_31590_31609 = state_31580__$1;(statearr_31590_31609[(2)] = inst_31570);
(statearr_31590_31609[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31581 === (9)))
{var state_31580__$1 = state_31580;var statearr_31591_31610 = state_31580__$1;(statearr_31591_31610[(2)] = null);
(statearr_31591_31610[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31581 === (5)))
{var inst_31565 = cljs.core.async.close_BANG_(out);var state_31580__$1 = state_31580;var statearr_31592_31611 = state_31580__$1;(statearr_31592_31611[(2)] = inst_31565);
(statearr_31592_31611[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31581 === (10)))
{var inst_31573 = (state_31580[(2)]);var state_31580__$1 = (function (){var statearr_31593 = state_31580;(statearr_31593[(8)] = inst_31573);
return statearr_31593;
})();var statearr_31594_31612 = state_31580__$1;(statearr_31594_31612[(2)] = null);
(statearr_31594_31612[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31581 === (8)))
{var inst_31562 = (state_31580[(7)]);var state_31580__$1 = state_31580;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31580__$1,(11),out,inst_31562);
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
});})(c__22717__auto___31602,out))
;return ((function (switch__22702__auto__,c__22717__auto___31602,out){
return (function() {
var state_machine__22703__auto__ = null;
var state_machine__22703__auto____0 = (function (){var statearr_31598 = [null,null,null,null,null,null,null,null,null];(statearr_31598[(0)] = state_machine__22703__auto__);
(statearr_31598[(1)] = (1));
return statearr_31598;
});
var state_machine__22703__auto____1 = (function (state_31580){while(true){
var ret_value__22704__auto__ = (function (){try{while(true){
var result__22705__auto__ = switch__22702__auto__(state_31580);if(cljs.core.keyword_identical_QMARK_(result__22705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22705__auto__;
}
break;
}
}catch (e31599){if((e31599 instanceof Object))
{var ex__22706__auto__ = e31599;var statearr_31600_31613 = state_31580;(statearr_31600_31613[(5)] = ex__22706__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_31580);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31599;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31614 = state_31580;
state_31580 = G__31614;
continue;
}
} else
{return ret_value__22704__auto__;
}
break;
}
});
state_machine__22703__auto__ = function(state_31580){
switch(arguments.length){
case 0:
return state_machine__22703__auto____0.call(this);
case 1:
return state_machine__22703__auto____1.call(this,state_31580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22703__auto____0;
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22703__auto____1;
return state_machine__22703__auto__;
})()
;})(switch__22702__auto__,c__22717__auto___31602,out))
})();var state__22719__auto__ = (function (){var statearr_31601 = (function (){return (f__22718__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22718__auto__.cljs$core$IFn$_invoke$arity$0() : f__22718__auto__.call(null));
})();(statearr_31601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22717__auto___31602);
return statearr_31601;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22719__auto__);
});})(c__22717__auto___31602,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__22717__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22717__auto__){
return (function (){var f__22718__auto__ = (function (){var switch__22702__auto__ = ((function (c__22717__auto__){
return (function (state_31770){var state_val_31771 = (state_31770[(1)]);if((state_val_31771 === (7)))
{var inst_31766 = (state_31770[(2)]);var state_31770__$1 = state_31770;var statearr_31772_31810 = state_31770__$1;(statearr_31772_31810[(2)] = inst_31766);
(statearr_31772_31810[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31771 === (20)))
{var inst_31741 = (state_31770[(7)]);var inst_31752 = (state_31770[(2)]);var inst_31753 = cljs.core.next(inst_31741);var inst_31727 = inst_31753;var inst_31728 = null;var inst_31729 = (0);var inst_31730 = (0);var state_31770__$1 = (function (){var statearr_31773 = state_31770;(statearr_31773[(8)] = inst_31752);
(statearr_31773[(9)] = inst_31729);
(statearr_31773[(10)] = inst_31727);
(statearr_31773[(11)] = inst_31728);
(statearr_31773[(12)] = inst_31730);
return statearr_31773;
})();var statearr_31774_31811 = state_31770__$1;(statearr_31774_31811[(2)] = null);
(statearr_31774_31811[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31771 === (1)))
{var state_31770__$1 = state_31770;var statearr_31775_31812 = state_31770__$1;(statearr_31775_31812[(2)] = null);
(statearr_31775_31812[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31771 === (4)))
{var inst_31716 = (state_31770[(13)]);var inst_31716__$1 = (state_31770[(2)]);var inst_31717 = (inst_31716__$1 == null);var state_31770__$1 = (function (){var statearr_31779 = state_31770;(statearr_31779[(13)] = inst_31716__$1);
return statearr_31779;
})();if(cljs.core.truth_(inst_31717))
{var statearr_31780_31813 = state_31770__$1;(statearr_31780_31813[(1)] = (5));
} else
{var statearr_31781_31814 = state_31770__$1;(statearr_31781_31814[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31771 === (15)))
{var state_31770__$1 = state_31770;var statearr_31782_31815 = state_31770__$1;(statearr_31782_31815[(2)] = null);
(statearr_31782_31815[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31771 === (13)))
{var inst_31729 = (state_31770[(9)]);var inst_31727 = (state_31770[(10)]);var inst_31728 = (state_31770[(11)]);var inst_31730 = (state_31770[(12)]);var inst_31737 = (state_31770[(2)]);var inst_31738 = (inst_31730 + (1));var tmp31776 = inst_31729;var tmp31777 = inst_31727;var tmp31778 = inst_31728;var inst_31727__$1 = tmp31777;var inst_31728__$1 = tmp31778;var inst_31729__$1 = tmp31776;var inst_31730__$1 = inst_31738;var state_31770__$1 = (function (){var statearr_31783 = state_31770;(statearr_31783[(14)] = inst_31737);
(statearr_31783[(9)] = inst_31729__$1);
(statearr_31783[(10)] = inst_31727__$1);
(statearr_31783[(11)] = inst_31728__$1);
(statearr_31783[(12)] = inst_31730__$1);
return statearr_31783;
})();var statearr_31784_31816 = state_31770__$1;(statearr_31784_31816[(2)] = null);
(statearr_31784_31816[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31771 === (6)))
{var inst_31716 = (state_31770[(13)]);var inst_31721 = (function (){var G__31785 = inst_31716;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__31785) : f.call(null,G__31785));
})();var inst_31726 = cljs.core.seq(inst_31721);var inst_31727 = inst_31726;var inst_31728 = null;var inst_31729 = (0);var inst_31730 = (0);var state_31770__$1 = (function (){var statearr_31786 = state_31770;(statearr_31786[(9)] = inst_31729);
(statearr_31786[(10)] = inst_31727);
(statearr_31786[(11)] = inst_31728);
(statearr_31786[(12)] = inst_31730);
return statearr_31786;
})();var statearr_31787_31817 = state_31770__$1;(statearr_31787_31817[(2)] = null);
(statearr_31787_31817[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31771 === (17)))
{var inst_31741 = (state_31770[(7)]);var inst_31745 = cljs.core.chunk_first(inst_31741);var inst_31746 = cljs.core.chunk_rest(inst_31741);var inst_31747 = cljs.core.count(inst_31745);var inst_31727 = inst_31746;var inst_31728 = inst_31745;var inst_31729 = inst_31747;var inst_31730 = (0);var state_31770__$1 = (function (){var statearr_31788 = state_31770;(statearr_31788[(9)] = inst_31729);
(statearr_31788[(10)] = inst_31727);
(statearr_31788[(11)] = inst_31728);
(statearr_31788[(12)] = inst_31730);
return statearr_31788;
})();var statearr_31789_31818 = state_31770__$1;(statearr_31789_31818[(2)] = null);
(statearr_31789_31818[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31771 === (3)))
{var inst_31768 = (state_31770[(2)]);var state_31770__$1 = state_31770;return cljs.core.async.impl.ioc_helpers.return_chan(state_31770__$1,inst_31768);
} else
{if((state_val_31771 === (12)))
{var inst_31761 = (state_31770[(2)]);var state_31770__$1 = state_31770;var statearr_31790_31819 = state_31770__$1;(statearr_31790_31819[(2)] = inst_31761);
(statearr_31790_31819[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31771 === (2)))
{var state_31770__$1 = state_31770;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31770__$1,(4),in$);
} else
{if((state_val_31771 === (19)))
{var inst_31756 = (state_31770[(2)]);var state_31770__$1 = state_31770;var statearr_31791_31820 = state_31770__$1;(statearr_31791_31820[(2)] = inst_31756);
(statearr_31791_31820[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31771 === (11)))
{var inst_31741 = (state_31770[(7)]);var inst_31727 = (state_31770[(10)]);var inst_31741__$1 = cljs.core.seq(inst_31727);var state_31770__$1 = (function (){var statearr_31792 = state_31770;(statearr_31792[(7)] = inst_31741__$1);
return statearr_31792;
})();if(inst_31741__$1)
{var statearr_31793_31821 = state_31770__$1;(statearr_31793_31821[(1)] = (14));
} else
{var statearr_31794_31822 = state_31770__$1;(statearr_31794_31822[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31771 === (9)))
{var inst_31763 = (state_31770[(2)]);var state_31770__$1 = (function (){var statearr_31795 = state_31770;(statearr_31795[(15)] = inst_31763);
return statearr_31795;
})();var statearr_31796_31823 = state_31770__$1;(statearr_31796_31823[(2)] = null);
(statearr_31796_31823[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31771 === (5)))
{var inst_31719 = cljs.core.async.close_BANG_(out);var state_31770__$1 = state_31770;var statearr_31797_31824 = state_31770__$1;(statearr_31797_31824[(2)] = inst_31719);
(statearr_31797_31824[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31771 === (14)))
{var inst_31741 = (state_31770[(7)]);var inst_31743 = cljs.core.chunked_seq_QMARK_(inst_31741);var state_31770__$1 = state_31770;if(inst_31743)
{var statearr_31798_31825 = state_31770__$1;(statearr_31798_31825[(1)] = (17));
} else
{var statearr_31799_31826 = state_31770__$1;(statearr_31799_31826[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31771 === (16)))
{var inst_31759 = (state_31770[(2)]);var state_31770__$1 = state_31770;var statearr_31800_31827 = state_31770__$1;(statearr_31800_31827[(2)] = inst_31759);
(statearr_31800_31827[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31771 === (10)))
{var inst_31728 = (state_31770[(11)]);var inst_31730 = (state_31770[(12)]);var inst_31735 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31728,inst_31730);var state_31770__$1 = state_31770;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31770__$1,(13),out,inst_31735);
} else
{if((state_val_31771 === (18)))
{var inst_31741 = (state_31770[(7)]);var inst_31750 = cljs.core.first(inst_31741);var state_31770__$1 = state_31770;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31770__$1,(20),out,inst_31750);
} else
{if((state_val_31771 === (8)))
{var inst_31729 = (state_31770[(9)]);var inst_31730 = (state_31770[(12)]);var inst_31732 = (inst_31730 < inst_31729);var inst_31733 = inst_31732;var state_31770__$1 = state_31770;if(cljs.core.truth_(inst_31733))
{var statearr_31801_31828 = state_31770__$1;(statearr_31801_31828[(1)] = (10));
} else
{var statearr_31802_31829 = state_31770__$1;(statearr_31802_31829[(1)] = (11));
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
});})(c__22717__auto__))
;return ((function (switch__22702__auto__,c__22717__auto__){
return (function() {
var state_machine__22703__auto__ = null;
var state_machine__22703__auto____0 = (function (){var statearr_31806 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31806[(0)] = state_machine__22703__auto__);
(statearr_31806[(1)] = (1));
return statearr_31806;
});
var state_machine__22703__auto____1 = (function (state_31770){while(true){
var ret_value__22704__auto__ = (function (){try{while(true){
var result__22705__auto__ = switch__22702__auto__(state_31770);if(cljs.core.keyword_identical_QMARK_(result__22705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22705__auto__;
}
break;
}
}catch (e31807){if((e31807 instanceof Object))
{var ex__22706__auto__ = e31807;var statearr_31808_31830 = state_31770;(statearr_31808_31830[(5)] = ex__22706__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_31770);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31807;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31831 = state_31770;
state_31770 = G__31831;
continue;
}
} else
{return ret_value__22704__auto__;
}
break;
}
});
state_machine__22703__auto__ = function(state_31770){
switch(arguments.length){
case 0:
return state_machine__22703__auto____0.call(this);
case 1:
return state_machine__22703__auto____1.call(this,state_31770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22703__auto____0;
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22703__auto____1;
return state_machine__22703__auto__;
})()
;})(switch__22702__auto__,c__22717__auto__))
})();var state__22719__auto__ = (function (){var statearr_31809 = (function (){return (f__22718__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22718__auto__.cljs$core$IFn$_invoke$arity$0() : f__22718__auto__.call(null));
})();(statearr_31809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22717__auto__);
return statearr_31809;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22719__auto__);
});})(c__22717__auto__))
);
return c__22717__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__22717__auto___31921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22717__auto___31921){
return (function (){var f__22718__auto__ = (function (){var switch__22702__auto__ = ((function (c__22717__auto___31921){
return (function (state_31900){var state_val_31901 = (state_31900[(1)]);if((state_val_31901 === (7)))
{var inst_31896 = (state_31900[(2)]);var state_31900__$1 = state_31900;var statearr_31902_31922 = state_31900__$1;(statearr_31902_31922[(2)] = inst_31896);
(statearr_31902_31922[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31901 === (1)))
{var state_31900__$1 = state_31900;var statearr_31903_31923 = state_31900__$1;(statearr_31903_31923[(2)] = null);
(statearr_31903_31923[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31901 === (4)))
{var inst_31883 = (state_31900[(7)]);var inst_31883__$1 = (state_31900[(2)]);var inst_31884 = (inst_31883__$1 == null);var state_31900__$1 = (function (){var statearr_31904 = state_31900;(statearr_31904[(7)] = inst_31883__$1);
return statearr_31904;
})();if(cljs.core.truth_(inst_31884))
{var statearr_31905_31924 = state_31900__$1;(statearr_31905_31924[(1)] = (5));
} else
{var statearr_31906_31925 = state_31900__$1;(statearr_31906_31925[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31901 === (6)))
{var inst_31883 = (state_31900[(7)]);var state_31900__$1 = state_31900;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31900__$1,(11),to,inst_31883);
} else
{if((state_val_31901 === (3)))
{var inst_31898 = (state_31900[(2)]);var state_31900__$1 = state_31900;return cljs.core.async.impl.ioc_helpers.return_chan(state_31900__$1,inst_31898);
} else
{if((state_val_31901 === (2)))
{var state_31900__$1 = state_31900;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31900__$1,(4),from);
} else
{if((state_val_31901 === (11)))
{var inst_31893 = (state_31900[(2)]);var state_31900__$1 = (function (){var statearr_31907 = state_31900;(statearr_31907[(8)] = inst_31893);
return statearr_31907;
})();var statearr_31908_31926 = state_31900__$1;(statearr_31908_31926[(2)] = null);
(statearr_31908_31926[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31901 === (9)))
{var state_31900__$1 = state_31900;var statearr_31909_31927 = state_31900__$1;(statearr_31909_31927[(2)] = null);
(statearr_31909_31927[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31901 === (5)))
{var state_31900__$1 = state_31900;if(cljs.core.truth_(close_QMARK_))
{var statearr_31910_31928 = state_31900__$1;(statearr_31910_31928[(1)] = (8));
} else
{var statearr_31911_31929 = state_31900__$1;(statearr_31911_31929[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31901 === (10)))
{var inst_31890 = (state_31900[(2)]);var state_31900__$1 = state_31900;var statearr_31912_31930 = state_31900__$1;(statearr_31912_31930[(2)] = inst_31890);
(statearr_31912_31930[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31901 === (8)))
{var inst_31887 = cljs.core.async.close_BANG_(to);var state_31900__$1 = state_31900;var statearr_31913_31931 = state_31900__$1;(statearr_31913_31931[(2)] = inst_31887);
(statearr_31913_31931[(1)] = (10));
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
});})(c__22717__auto___31921))
;return ((function (switch__22702__auto__,c__22717__auto___31921){
return (function() {
var state_machine__22703__auto__ = null;
var state_machine__22703__auto____0 = (function (){var statearr_31917 = [null,null,null,null,null,null,null,null,null];(statearr_31917[(0)] = state_machine__22703__auto__);
(statearr_31917[(1)] = (1));
return statearr_31917;
});
var state_machine__22703__auto____1 = (function (state_31900){while(true){
var ret_value__22704__auto__ = (function (){try{while(true){
var result__22705__auto__ = switch__22702__auto__(state_31900);if(cljs.core.keyword_identical_QMARK_(result__22705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22705__auto__;
}
break;
}
}catch (e31918){if((e31918 instanceof Object))
{var ex__22706__auto__ = e31918;var statearr_31919_31932 = state_31900;(statearr_31919_31932[(5)] = ex__22706__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_31900);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31918;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31933 = state_31900;
state_31900 = G__31933;
continue;
}
} else
{return ret_value__22704__auto__;
}
break;
}
});
state_machine__22703__auto__ = function(state_31900){
switch(arguments.length){
case 0:
return state_machine__22703__auto____0.call(this);
case 1:
return state_machine__22703__auto____1.call(this,state_31900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22703__auto____0;
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22703__auto____1;
return state_machine__22703__auto__;
})()
;})(switch__22702__auto__,c__22717__auto___31921))
})();var state__22719__auto__ = (function (){var statearr_31920 = (function (){return (f__22718__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22718__auto__.cljs$core$IFn$_invoke$arity$0() : f__22718__auto__.call(null));
})();(statearr_31920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22717__auto___31921);
return statearr_31920;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22719__auto__);
});})(c__22717__auto___31921))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__22717__auto___32026 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22717__auto___32026,tc,fc){
return (function (){var f__22718__auto__ = (function (){var switch__22702__auto__ = ((function (c__22717__auto___32026,tc,fc){
return (function (state_32003){var state_val_32004 = (state_32003[(1)]);if((state_val_32004 === (7)))
{var inst_31999 = (state_32003[(2)]);var state_32003__$1 = state_32003;var statearr_32005_32027 = state_32003__$1;(statearr_32005_32027[(2)] = inst_31999);
(statearr_32005_32027[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32004 === (1)))
{var state_32003__$1 = state_32003;var statearr_32006_32028 = state_32003__$1;(statearr_32006_32028[(2)] = null);
(statearr_32006_32028[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32004 === (4)))
{var inst_31984 = (state_32003[(7)]);var inst_31984__$1 = (state_32003[(2)]);var inst_31985 = (inst_31984__$1 == null);var state_32003__$1 = (function (){var statearr_32007 = state_32003;(statearr_32007[(7)] = inst_31984__$1);
return statearr_32007;
})();if(cljs.core.truth_(inst_31985))
{var statearr_32008_32029 = state_32003__$1;(statearr_32008_32029[(1)] = (5));
} else
{var statearr_32009_32030 = state_32003__$1;(statearr_32009_32030[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32004 === (6)))
{var inst_31984 = (state_32003[(7)]);var inst_31990 = (function (){var G__32010 = inst_31984;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__32010) : p.call(null,G__32010));
})();var state_32003__$1 = state_32003;if(cljs.core.truth_(inst_31990))
{var statearr_32011_32031 = state_32003__$1;(statearr_32011_32031[(1)] = (9));
} else
{var statearr_32012_32032 = state_32003__$1;(statearr_32012_32032[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32004 === (3)))
{var inst_32001 = (state_32003[(2)]);var state_32003__$1 = state_32003;return cljs.core.async.impl.ioc_helpers.return_chan(state_32003__$1,inst_32001);
} else
{if((state_val_32004 === (2)))
{var state_32003__$1 = state_32003;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32003__$1,(4),ch);
} else
{if((state_val_32004 === (11)))
{var inst_31984 = (state_32003[(7)]);var inst_31994 = (state_32003[(2)]);var state_32003__$1 = state_32003;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32003__$1,(8),inst_31994,inst_31984);
} else
{if((state_val_32004 === (9)))
{var state_32003__$1 = state_32003;var statearr_32013_32033 = state_32003__$1;(statearr_32013_32033[(2)] = tc);
(statearr_32013_32033[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32004 === (5)))
{var inst_31987 = cljs.core.async.close_BANG_(tc);var inst_31988 = cljs.core.async.close_BANG_(fc);var state_32003__$1 = (function (){var statearr_32014 = state_32003;(statearr_32014[(8)] = inst_31987);
return statearr_32014;
})();var statearr_32015_32034 = state_32003__$1;(statearr_32015_32034[(2)] = inst_31988);
(statearr_32015_32034[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32004 === (10)))
{var state_32003__$1 = state_32003;var statearr_32016_32035 = state_32003__$1;(statearr_32016_32035[(2)] = fc);
(statearr_32016_32035[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32004 === (8)))
{var inst_31996 = (state_32003[(2)]);var state_32003__$1 = (function (){var statearr_32017 = state_32003;(statearr_32017[(9)] = inst_31996);
return statearr_32017;
})();var statearr_32018_32036 = state_32003__$1;(statearr_32018_32036[(2)] = null);
(statearr_32018_32036[(1)] = (2));
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
});})(c__22717__auto___32026,tc,fc))
;return ((function (switch__22702__auto__,c__22717__auto___32026,tc,fc){
return (function() {
var state_machine__22703__auto__ = null;
var state_machine__22703__auto____0 = (function (){var statearr_32022 = [null,null,null,null,null,null,null,null,null,null];(statearr_32022[(0)] = state_machine__22703__auto__);
(statearr_32022[(1)] = (1));
return statearr_32022;
});
var state_machine__22703__auto____1 = (function (state_32003){while(true){
var ret_value__22704__auto__ = (function (){try{while(true){
var result__22705__auto__ = switch__22702__auto__(state_32003);if(cljs.core.keyword_identical_QMARK_(result__22705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22705__auto__;
}
break;
}
}catch (e32023){if((e32023 instanceof Object))
{var ex__22706__auto__ = e32023;var statearr_32024_32037 = state_32003;(statearr_32024_32037[(5)] = ex__22706__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_32003);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32023;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32038 = state_32003;
state_32003 = G__32038;
continue;
}
} else
{return ret_value__22704__auto__;
}
break;
}
});
state_machine__22703__auto__ = function(state_32003){
switch(arguments.length){
case 0:
return state_machine__22703__auto____0.call(this);
case 1:
return state_machine__22703__auto____1.call(this,state_32003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22703__auto____0;
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22703__auto____1;
return state_machine__22703__auto__;
})()
;})(switch__22702__auto__,c__22717__auto___32026,tc,fc))
})();var state__22719__auto__ = (function (){var statearr_32025 = (function (){return (f__22718__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22718__auto__.cljs$core$IFn$_invoke$arity$0() : f__22718__auto__.call(null));
})();(statearr_32025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22717__auto___32026);
return statearr_32025;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22719__auto__);
});})(c__22717__auto___32026,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__22717__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22717__auto__){
return (function (){var f__22718__auto__ = (function (){var switch__22702__auto__ = ((function (c__22717__auto__){
return (function (state_32087){var state_val_32088 = (state_32087[(1)]);if((state_val_32088 === (7)))
{var inst_32083 = (state_32087[(2)]);var state_32087__$1 = state_32087;var statearr_32089_32107 = state_32087__$1;(statearr_32089_32107[(2)] = inst_32083);
(statearr_32089_32107[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32088 === (6)))
{var inst_32076 = (state_32087[(7)]);var inst_32073 = (state_32087[(8)]);var inst_32080 = (function (){var G__32090 = inst_32073;var G__32091 = inst_32076;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__32090,G__32091) : f.call(null,G__32090,G__32091));
})();var inst_32073__$1 = inst_32080;var state_32087__$1 = (function (){var statearr_32092 = state_32087;(statearr_32092[(8)] = inst_32073__$1);
return statearr_32092;
})();var statearr_32093_32108 = state_32087__$1;(statearr_32093_32108[(2)] = null);
(statearr_32093_32108[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32088 === (5)))
{var inst_32073 = (state_32087[(8)]);var state_32087__$1 = state_32087;var statearr_32094_32109 = state_32087__$1;(statearr_32094_32109[(2)] = inst_32073);
(statearr_32094_32109[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32088 === (4)))
{var inst_32076 = (state_32087[(7)]);var inst_32076__$1 = (state_32087[(2)]);var inst_32077 = (inst_32076__$1 == null);var state_32087__$1 = (function (){var statearr_32095 = state_32087;(statearr_32095[(7)] = inst_32076__$1);
return statearr_32095;
})();if(cljs.core.truth_(inst_32077))
{var statearr_32096_32110 = state_32087__$1;(statearr_32096_32110[(1)] = (5));
} else
{var statearr_32097_32111 = state_32087__$1;(statearr_32097_32111[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32088 === (3)))
{var inst_32085 = (state_32087[(2)]);var state_32087__$1 = state_32087;return cljs.core.async.impl.ioc_helpers.return_chan(state_32087__$1,inst_32085);
} else
{if((state_val_32088 === (2)))
{var state_32087__$1 = state_32087;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32087__$1,(4),ch);
} else
{if((state_val_32088 === (1)))
{var inst_32073 = init;var state_32087__$1 = (function (){var statearr_32098 = state_32087;(statearr_32098[(8)] = inst_32073);
return statearr_32098;
})();var statearr_32099_32112 = state_32087__$1;(statearr_32099_32112[(2)] = null);
(statearr_32099_32112[(1)] = (2));
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
});})(c__22717__auto__))
;return ((function (switch__22702__auto__,c__22717__auto__){
return (function() {
var state_machine__22703__auto__ = null;
var state_machine__22703__auto____0 = (function (){var statearr_32103 = [null,null,null,null,null,null,null,null,null];(statearr_32103[(0)] = state_machine__22703__auto__);
(statearr_32103[(1)] = (1));
return statearr_32103;
});
var state_machine__22703__auto____1 = (function (state_32087){while(true){
var ret_value__22704__auto__ = (function (){try{while(true){
var result__22705__auto__ = switch__22702__auto__(state_32087);if(cljs.core.keyword_identical_QMARK_(result__22705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22705__auto__;
}
break;
}
}catch (e32104){if((e32104 instanceof Object))
{var ex__22706__auto__ = e32104;var statearr_32105_32113 = state_32087;(statearr_32105_32113[(5)] = ex__22706__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_32087);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32104;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32114 = state_32087;
state_32087 = G__32114;
continue;
}
} else
{return ret_value__22704__auto__;
}
break;
}
});
state_machine__22703__auto__ = function(state_32087){
switch(arguments.length){
case 0:
return state_machine__22703__auto____0.call(this);
case 1:
return state_machine__22703__auto____1.call(this,state_32087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22703__auto____0;
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22703__auto____1;
return state_machine__22703__auto__;
})()
;})(switch__22702__auto__,c__22717__auto__))
})();var state__22719__auto__ = (function (){var statearr_32106 = (function (){return (f__22718__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22718__auto__.cljs$core$IFn$_invoke$arity$0() : f__22718__auto__.call(null));
})();(statearr_32106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22717__auto__);
return statearr_32106;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22719__auto__);
});})(c__22717__auto__))
);
return c__22717__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__22717__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22717__auto__){
return (function (){var f__22718__auto__ = (function (){var switch__22702__auto__ = ((function (c__22717__auto__){
return (function (state_32179){var state_val_32180 = (state_32179[(1)]);if((state_val_32180 === (7)))
{var inst_32160 = (state_32179[(7)]);var inst_32165 = (state_32179[(2)]);var inst_32166 = cljs.core.next(inst_32160);var inst_32160__$1 = inst_32166;var state_32179__$1 = (function (){var statearr_32181 = state_32179;(statearr_32181[(7)] = inst_32160__$1);
(statearr_32181[(8)] = inst_32165);
return statearr_32181;
})();var statearr_32182_32200 = state_32179__$1;(statearr_32182_32200[(2)] = null);
(statearr_32182_32200[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32180 === (1)))
{var inst_32159 = cljs.core.seq(coll);var inst_32160 = inst_32159;var state_32179__$1 = (function (){var statearr_32183 = state_32179;(statearr_32183[(7)] = inst_32160);
return statearr_32183;
})();var statearr_32184_32201 = state_32179__$1;(statearr_32184_32201[(2)] = null);
(statearr_32184_32201[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32180 === (4)))
{var inst_32160 = (state_32179[(7)]);var inst_32163 = cljs.core.first(inst_32160);var state_32179__$1 = state_32179;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32179__$1,(7),ch,inst_32163);
} else
{if((state_val_32180 === (6)))
{var inst_32175 = (state_32179[(2)]);var state_32179__$1 = state_32179;var statearr_32185_32202 = state_32179__$1;(statearr_32185_32202[(2)] = inst_32175);
(statearr_32185_32202[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32180 === (3)))
{var inst_32177 = (state_32179[(2)]);var state_32179__$1 = state_32179;return cljs.core.async.impl.ioc_helpers.return_chan(state_32179__$1,inst_32177);
} else
{if((state_val_32180 === (2)))
{var inst_32160 = (state_32179[(7)]);var state_32179__$1 = state_32179;if(cljs.core.truth_(inst_32160))
{var statearr_32186_32203 = state_32179__$1;(statearr_32186_32203[(1)] = (4));
} else
{var statearr_32187_32204 = state_32179__$1;(statearr_32187_32204[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32180 === (9)))
{var state_32179__$1 = state_32179;var statearr_32188_32205 = state_32179__$1;(statearr_32188_32205[(2)] = null);
(statearr_32188_32205[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32180 === (5)))
{var state_32179__$1 = state_32179;if(cljs.core.truth_(close_QMARK_))
{var statearr_32189_32206 = state_32179__$1;(statearr_32189_32206[(1)] = (8));
} else
{var statearr_32190_32207 = state_32179__$1;(statearr_32190_32207[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32180 === (10)))
{var inst_32173 = (state_32179[(2)]);var state_32179__$1 = state_32179;var statearr_32191_32208 = state_32179__$1;(statearr_32191_32208[(2)] = inst_32173);
(statearr_32191_32208[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32180 === (8)))
{var inst_32170 = cljs.core.async.close_BANG_(ch);var state_32179__$1 = state_32179;var statearr_32192_32209 = state_32179__$1;(statearr_32192_32209[(2)] = inst_32170);
(statearr_32192_32209[(1)] = (10));
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
});})(c__22717__auto__))
;return ((function (switch__22702__auto__,c__22717__auto__){
return (function() {
var state_machine__22703__auto__ = null;
var state_machine__22703__auto____0 = (function (){var statearr_32196 = [null,null,null,null,null,null,null,null,null];(statearr_32196[(0)] = state_machine__22703__auto__);
(statearr_32196[(1)] = (1));
return statearr_32196;
});
var state_machine__22703__auto____1 = (function (state_32179){while(true){
var ret_value__22704__auto__ = (function (){try{while(true){
var result__22705__auto__ = switch__22702__auto__(state_32179);if(cljs.core.keyword_identical_QMARK_(result__22705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22705__auto__;
}
break;
}
}catch (e32197){if((e32197 instanceof Object))
{var ex__22706__auto__ = e32197;var statearr_32198_32210 = state_32179;(statearr_32198_32210[(5)] = ex__22706__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_32179);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32197;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32211 = state_32179;
state_32179 = G__32211;
continue;
}
} else
{return ret_value__22704__auto__;
}
break;
}
});
state_machine__22703__auto__ = function(state_32179){
switch(arguments.length){
case 0:
return state_machine__22703__auto____0.call(this);
case 1:
return state_machine__22703__auto____1.call(this,state_32179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22703__auto____0;
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22703__auto____1;
return state_machine__22703__auto__;
})()
;})(switch__22702__auto__,c__22717__auto__))
})();var state__22719__auto__ = (function (){var statearr_32199 = (function (){return (f__22718__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22718__auto__.cljs$core$IFn$_invoke$arity$0() : f__22718__auto__.call(null));
})();(statearr_32199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22717__auto__);
return statearr_32199;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22719__auto__);
});})(c__22717__auto__))
);
return c__22717__auto__;
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
cljs.core.async.Mux = (function (){var obj32213 = {};return obj32213;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__19335__auto__ = _;if(and__19335__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__19335__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__20559__auto__ = (((_ == null))?null:_);return (function (){var or__19357__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__32217 = x__20559__auto__;return goog.typeOf(G__32217);
})()]);if(or__19357__auto__)
{return or__19357__auto__;
} else
{var or__19357__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__19357__auto____$1)
{return or__19357__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj32219 = {};return obj32219;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__19335__auto__ = m;if(and__19335__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__19335__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__20559__auto__ = (((m == null))?null:m);return (function (){var or__19357__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__32223 = x__20559__auto__;return goog.typeOf(G__32223);
})()]);if(or__19357__auto__)
{return or__19357__auto__;
} else
{var or__19357__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__19357__auto____$1)
{return or__19357__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__19335__auto__ = m;if(and__19335__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__19335__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__20559__auto__ = (((m == null))?null:m);return (function (){var or__19357__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__32227 = x__20559__auto__;return goog.typeOf(G__32227);
})()]);if(or__19357__auto__)
{return or__19357__auto__;
} else
{var or__19357__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__19357__auto____$1)
{return or__19357__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__19335__auto__ = m;if(and__19335__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__19335__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__20559__auto__ = (((m == null))?null:m);return (function (){var or__19357__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__32231 = x__20559__auto__;return goog.typeOf(G__32231);
})()]);if(or__19357__auto__)
{return or__19357__auto__;
} else
{var or__19357__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__19357__auto____$1)
{return or__19357__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__32463 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32463) : cljs.core.atom.call(null,G__32463));
})();var m = (function (){if(typeof cljs.core.async.t32464 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32464 = (function (cs,ch,mult,meta32465){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta32465 = meta32465;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32464.cljs$lang$type = true;
cljs.core.async.t32464.cljs$lang$ctorStr = "cljs.core.async/t32464";
cljs.core.async.t32464.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"cljs.core.async/t32464");
});})(cs))
;
cljs.core.async.t32464.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t32464.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t32464.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t32464.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__32467_32694 = self__.cs;var G__32468_32695 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32467_32694,G__32468_32695) : cljs.core.reset_BANG_.call(null,G__32467_32694,G__32468_32695));
return null;
});})(cs))
;
cljs.core.async.t32464.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32464.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t32464.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32466){var self__ = this;
var _32466__$1 = this;return self__.meta32465;
});})(cs))
;
cljs.core.async.t32464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32466,meta32465__$1){var self__ = this;
var _32466__$1 = this;return (new cljs.core.async.t32464(self__.cs,self__.ch,self__.mult,meta32465__$1));
});})(cs))
;
cljs.core.async.__GT_t32464 = ((function (cs){
return (function __GT_t32464(cs__$1,ch__$1,mult__$1,meta32465){return (new cljs.core.async.t32464(cs__$1,ch__$1,mult__$1,meta32465));
});})(cs))
;
}
return (new cljs.core.async.t32464(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__32469 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32469) : cljs.core.atom.call(null,G__32469));
})();var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__22717__auto___32696 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22717__auto___32696,cs,m,dchan,dctr,done){
return (function (){var f__22718__auto__ = (function (){var switch__22702__auto__ = ((function (c__22717__auto___32696,cs,m,dchan,dctr,done){
return (function (state_32604){var state_val_32605 = (state_32604[(1)]);if((state_val_32605 === (7)))
{var inst_32600 = (state_32604[(2)]);var state_32604__$1 = state_32604;var statearr_32606_32697 = state_32604__$1;(statearr_32606_32697[(2)] = inst_32600);
(statearr_32606_32697[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (20)))
{var inst_32501 = (state_32604[(7)]);var inst_32511 = cljs.core.first(inst_32501);var inst_32512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32511,(0),null);var inst_32513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32511,(1),null);var state_32604__$1 = (function (){var statearr_32607 = state_32604;(statearr_32607[(8)] = inst_32512);
return statearr_32607;
})();if(cljs.core.truth_(inst_32513))
{var statearr_32608_32698 = state_32604__$1;(statearr_32608_32698[(1)] = (22));
} else
{var statearr_32609_32699 = state_32604__$1;(statearr_32609_32699[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (27)))
{var inst_32543 = (state_32604[(9)]);var inst_32541 = (state_32604[(10)]);var inst_32548 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32541,inst_32543);var state_32604__$1 = (function (){var statearr_32610 = state_32604;(statearr_32610[(11)] = inst_32548);
return statearr_32610;
})();var statearr_32611_32700 = state_32604__$1;(statearr_32611_32700[(2)] = null);
(statearr_32611_32700[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (1)))
{var state_32604__$1 = state_32604;var statearr_32612_32701 = state_32604__$1;(statearr_32612_32701[(2)] = null);
(statearr_32612_32701[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (24)))
{var inst_32501 = (state_32604[(7)]);var inst_32518 = (state_32604[(2)]);var inst_32519 = cljs.core.next(inst_32501);var inst_32481 = inst_32519;var inst_32482 = null;var inst_32483 = (0);var inst_32484 = (0);var state_32604__$1 = (function (){var statearr_32613 = state_32604;(statearr_32613[(12)] = inst_32483);
(statearr_32613[(13)] = inst_32518);
(statearr_32613[(14)] = inst_32482);
(statearr_32613[(15)] = inst_32484);
(statearr_32613[(16)] = inst_32481);
return statearr_32613;
})();var statearr_32614_32702 = state_32604__$1;(statearr_32614_32702[(2)] = null);
(statearr_32614_32702[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (39)))
{var inst_32561 = (state_32604[(17)]);var inst_32579 = (state_32604[(2)]);var inst_32580 = cljs.core.next(inst_32561);var inst_32540 = inst_32580;var inst_32541 = null;var inst_32542 = (0);var inst_32543 = (0);var state_32604__$1 = (function (){var statearr_32618 = state_32604;(statearr_32618[(18)] = inst_32540);
(statearr_32618[(19)] = inst_32579);
(statearr_32618[(9)] = inst_32543);
(statearr_32618[(20)] = inst_32542);
(statearr_32618[(10)] = inst_32541);
return statearr_32618;
})();var statearr_32619_32703 = state_32604__$1;(statearr_32619_32703[(2)] = null);
(statearr_32619_32703[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (4)))
{var inst_32472 = (state_32604[(21)]);var inst_32472__$1 = (state_32604[(2)]);var inst_32473 = (inst_32472__$1 == null);var state_32604__$1 = (function (){var statearr_32620 = state_32604;(statearr_32620[(21)] = inst_32472__$1);
return statearr_32620;
})();if(cljs.core.truth_(inst_32473))
{var statearr_32621_32704 = state_32604__$1;(statearr_32621_32704[(1)] = (5));
} else
{var statearr_32622_32705 = state_32604__$1;(statearr_32622_32705[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (15)))
{var inst_32483 = (state_32604[(12)]);var inst_32482 = (state_32604[(14)]);var inst_32484 = (state_32604[(15)]);var inst_32481 = (state_32604[(16)]);var inst_32497 = (state_32604[(2)]);var inst_32498 = (inst_32484 + (1));var tmp32615 = inst_32483;var tmp32616 = inst_32482;var tmp32617 = inst_32481;var inst_32481__$1 = tmp32617;var inst_32482__$1 = tmp32616;var inst_32483__$1 = tmp32615;var inst_32484__$1 = inst_32498;var state_32604__$1 = (function (){var statearr_32623 = state_32604;(statearr_32623[(12)] = inst_32483__$1);
(statearr_32623[(14)] = inst_32482__$1);
(statearr_32623[(15)] = inst_32484__$1);
(statearr_32623[(22)] = inst_32497);
(statearr_32623[(16)] = inst_32481__$1);
return statearr_32623;
})();var statearr_32624_32706 = state_32604__$1;(statearr_32624_32706[(2)] = null);
(statearr_32624_32706[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (21)))
{var inst_32522 = (state_32604[(2)]);var state_32604__$1 = state_32604;var statearr_32625_32707 = state_32604__$1;(statearr_32625_32707[(2)] = inst_32522);
(statearr_32625_32707[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (31)))
{var inst_32548 = (state_32604[(11)]);var inst_32549 = (state_32604[(2)]);var inst_32550 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_32551 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32548);var state_32604__$1 = (function (){var statearr_32626 = state_32604;(statearr_32626[(23)] = inst_32550);
(statearr_32626[(24)] = inst_32549);
return statearr_32626;
})();var statearr_32627_32708 = state_32604__$1;(statearr_32627_32708[(2)] = inst_32551);
cljs.core.async.impl.ioc_helpers.process_exception(state_32604__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (32)))
{var inst_32548 = (state_32604[(11)]);var inst_32472 = (state_32604[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32604,(31),Object,null,(30));var inst_32555 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32548,inst_32472,done);var state_32604__$1 = state_32604;var statearr_32628_32709 = state_32604__$1;(statearr_32628_32709[(2)] = inst_32555);
cljs.core.async.impl.ioc_helpers.process_exception(state_32604__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (40)))
{var inst_32570 = (state_32604[(25)]);var inst_32571 = (state_32604[(2)]);var inst_32572 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_32573 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32570);var state_32604__$1 = (function (){var statearr_32629 = state_32604;(statearr_32629[(26)] = inst_32572);
(statearr_32629[(27)] = inst_32571);
return statearr_32629;
})();var statearr_32630_32710 = state_32604__$1;(statearr_32630_32710[(2)] = inst_32573);
cljs.core.async.impl.ioc_helpers.process_exception(state_32604__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (33)))
{var inst_32561 = (state_32604[(17)]);var inst_32563 = cljs.core.chunked_seq_QMARK_(inst_32561);var state_32604__$1 = state_32604;if(inst_32563)
{var statearr_32631_32711 = state_32604__$1;(statearr_32631_32711[(1)] = (36));
} else
{var statearr_32632_32712 = state_32604__$1;(statearr_32632_32712[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (13)))
{var inst_32491 = (state_32604[(28)]);var inst_32494 = cljs.core.async.close_BANG_(inst_32491);var state_32604__$1 = state_32604;var statearr_32633_32713 = state_32604__$1;(statearr_32633_32713[(2)] = inst_32494);
(statearr_32633_32713[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (22)))
{var inst_32512 = (state_32604[(8)]);var inst_32515 = cljs.core.async.close_BANG_(inst_32512);var state_32604__$1 = state_32604;var statearr_32634_32714 = state_32604__$1;(statearr_32634_32714[(2)] = inst_32515);
(statearr_32634_32714[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (36)))
{var inst_32561 = (state_32604[(17)]);var inst_32565 = cljs.core.chunk_first(inst_32561);var inst_32566 = cljs.core.chunk_rest(inst_32561);var inst_32567 = cljs.core.count(inst_32565);var inst_32540 = inst_32566;var inst_32541 = inst_32565;var inst_32542 = inst_32567;var inst_32543 = (0);var state_32604__$1 = (function (){var statearr_32635 = state_32604;(statearr_32635[(18)] = inst_32540);
(statearr_32635[(9)] = inst_32543);
(statearr_32635[(20)] = inst_32542);
(statearr_32635[(10)] = inst_32541);
return statearr_32635;
})();var statearr_32636_32715 = state_32604__$1;(statearr_32636_32715[(2)] = null);
(statearr_32636_32715[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (41)))
{var inst_32472 = (state_32604[(21)]);var inst_32570 = (state_32604[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32604,(40),Object,null,(39));var inst_32577 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32570,inst_32472,done);var state_32604__$1 = state_32604;var statearr_32637_32716 = state_32604__$1;(statearr_32637_32716[(2)] = inst_32577);
cljs.core.async.impl.ioc_helpers.process_exception(state_32604__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (43)))
{var state_32604__$1 = state_32604;var statearr_32638_32717 = state_32604__$1;(statearr_32638_32717[(2)] = null);
(statearr_32638_32717[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (29)))
{var inst_32588 = (state_32604[(2)]);var state_32604__$1 = state_32604;var statearr_32639_32718 = state_32604__$1;(statearr_32639_32718[(2)] = inst_32588);
(statearr_32639_32718[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (44)))
{var inst_32597 = (state_32604[(2)]);var state_32604__$1 = (function (){var statearr_32640 = state_32604;(statearr_32640[(29)] = inst_32597);
return statearr_32640;
})();var statearr_32641_32719 = state_32604__$1;(statearr_32641_32719[(2)] = null);
(statearr_32641_32719[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (6)))
{var inst_32532 = (state_32604[(30)]);var inst_32531 = (function (){var G__32642 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32642) : cljs.core.deref.call(null,G__32642));
})();var inst_32532__$1 = cljs.core.keys(inst_32531);var inst_32533 = cljs.core.count(inst_32532__$1);var inst_32534 = (function (){var G__32643 = dctr;var G__32644 = inst_32533;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32643,G__32644) : cljs.core.reset_BANG_.call(null,G__32643,G__32644));
})();var inst_32539 = cljs.core.seq(inst_32532__$1);var inst_32540 = inst_32539;var inst_32541 = null;var inst_32542 = (0);var inst_32543 = (0);var state_32604__$1 = (function (){var statearr_32645 = state_32604;(statearr_32645[(18)] = inst_32540);
(statearr_32645[(31)] = inst_32534);
(statearr_32645[(9)] = inst_32543);
(statearr_32645[(20)] = inst_32542);
(statearr_32645[(30)] = inst_32532__$1);
(statearr_32645[(10)] = inst_32541);
return statearr_32645;
})();var statearr_32646_32720 = state_32604__$1;(statearr_32646_32720[(2)] = null);
(statearr_32646_32720[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (28)))
{var inst_32540 = (state_32604[(18)]);var inst_32561 = (state_32604[(17)]);var inst_32561__$1 = cljs.core.seq(inst_32540);var state_32604__$1 = (function (){var statearr_32647 = state_32604;(statearr_32647[(17)] = inst_32561__$1);
return statearr_32647;
})();if(inst_32561__$1)
{var statearr_32648_32721 = state_32604__$1;(statearr_32648_32721[(1)] = (33));
} else
{var statearr_32649_32722 = state_32604__$1;(statearr_32649_32722[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (25)))
{var inst_32543 = (state_32604[(9)]);var inst_32542 = (state_32604[(20)]);var inst_32545 = (inst_32543 < inst_32542);var inst_32546 = inst_32545;var state_32604__$1 = state_32604;if(cljs.core.truth_(inst_32546))
{var statearr_32650_32723 = state_32604__$1;(statearr_32650_32723[(1)] = (27));
} else
{var statearr_32651_32724 = state_32604__$1;(statearr_32651_32724[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (34)))
{var state_32604__$1 = state_32604;var statearr_32652_32725 = state_32604__$1;(statearr_32652_32725[(2)] = null);
(statearr_32652_32725[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (17)))
{var state_32604__$1 = state_32604;var statearr_32653_32726 = state_32604__$1;(statearr_32653_32726[(2)] = null);
(statearr_32653_32726[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (3)))
{var inst_32602 = (state_32604[(2)]);var state_32604__$1 = state_32604;return cljs.core.async.impl.ioc_helpers.return_chan(state_32604__$1,inst_32602);
} else
{if((state_val_32605 === (12)))
{var inst_32527 = (state_32604[(2)]);var state_32604__$1 = state_32604;var statearr_32654_32727 = state_32604__$1;(statearr_32654_32727[(2)] = inst_32527);
(statearr_32654_32727[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (2)))
{var state_32604__$1 = state_32604;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32604__$1,(4),ch);
} else
{if((state_val_32605 === (23)))
{var state_32604__$1 = state_32604;var statearr_32655_32728 = state_32604__$1;(statearr_32655_32728[(2)] = null);
(statearr_32655_32728[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (35)))
{var inst_32586 = (state_32604[(2)]);var state_32604__$1 = state_32604;var statearr_32656_32729 = state_32604__$1;(statearr_32656_32729[(2)] = inst_32586);
(statearr_32656_32729[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (19)))
{var inst_32501 = (state_32604[(7)]);var inst_32505 = cljs.core.chunk_first(inst_32501);var inst_32506 = cljs.core.chunk_rest(inst_32501);var inst_32507 = cljs.core.count(inst_32505);var inst_32481 = inst_32506;var inst_32482 = inst_32505;var inst_32483 = inst_32507;var inst_32484 = (0);var state_32604__$1 = (function (){var statearr_32657 = state_32604;(statearr_32657[(12)] = inst_32483);
(statearr_32657[(14)] = inst_32482);
(statearr_32657[(15)] = inst_32484);
(statearr_32657[(16)] = inst_32481);
return statearr_32657;
})();var statearr_32658_32730 = state_32604__$1;(statearr_32658_32730[(2)] = null);
(statearr_32658_32730[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (11)))
{var inst_32501 = (state_32604[(7)]);var inst_32481 = (state_32604[(16)]);var inst_32501__$1 = cljs.core.seq(inst_32481);var state_32604__$1 = (function (){var statearr_32659 = state_32604;(statearr_32659[(7)] = inst_32501__$1);
return statearr_32659;
})();if(inst_32501__$1)
{var statearr_32660_32731 = state_32604__$1;(statearr_32660_32731[(1)] = (16));
} else
{var statearr_32661_32732 = state_32604__$1;(statearr_32661_32732[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (9)))
{var inst_32529 = (state_32604[(2)]);var state_32604__$1 = state_32604;var statearr_32662_32733 = state_32604__$1;(statearr_32662_32733[(2)] = inst_32529);
(statearr_32662_32733[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (5)))
{var inst_32479 = (function (){var G__32663 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32663) : cljs.core.deref.call(null,G__32663));
})();var inst_32480 = cljs.core.seq(inst_32479);var inst_32481 = inst_32480;var inst_32482 = null;var inst_32483 = (0);var inst_32484 = (0);var state_32604__$1 = (function (){var statearr_32664 = state_32604;(statearr_32664[(12)] = inst_32483);
(statearr_32664[(14)] = inst_32482);
(statearr_32664[(15)] = inst_32484);
(statearr_32664[(16)] = inst_32481);
return statearr_32664;
})();var statearr_32665_32734 = state_32604__$1;(statearr_32665_32734[(2)] = null);
(statearr_32665_32734[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (14)))
{var state_32604__$1 = state_32604;var statearr_32666_32735 = state_32604__$1;(statearr_32666_32735[(2)] = null);
(statearr_32666_32735[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (45)))
{var inst_32594 = (state_32604[(2)]);var state_32604__$1 = state_32604;var statearr_32667_32736 = state_32604__$1;(statearr_32667_32736[(2)] = inst_32594);
(statearr_32667_32736[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (26)))
{var inst_32532 = (state_32604[(30)]);var inst_32590 = (state_32604[(2)]);var inst_32591 = cljs.core.seq(inst_32532);var state_32604__$1 = (function (){var statearr_32668 = state_32604;(statearr_32668[(32)] = inst_32590);
return statearr_32668;
})();if(inst_32591)
{var statearr_32669_32737 = state_32604__$1;(statearr_32669_32737[(1)] = (42));
} else
{var statearr_32670_32738 = state_32604__$1;(statearr_32670_32738[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (16)))
{var inst_32501 = (state_32604[(7)]);var inst_32503 = cljs.core.chunked_seq_QMARK_(inst_32501);var state_32604__$1 = state_32604;if(inst_32503)
{var statearr_32674_32739 = state_32604__$1;(statearr_32674_32739[(1)] = (19));
} else
{var statearr_32675_32740 = state_32604__$1;(statearr_32675_32740[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (38)))
{var inst_32583 = (state_32604[(2)]);var state_32604__$1 = state_32604;var statearr_32676_32741 = state_32604__$1;(statearr_32676_32741[(2)] = inst_32583);
(statearr_32676_32741[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (30)))
{var inst_32540 = (state_32604[(18)]);var inst_32543 = (state_32604[(9)]);var inst_32542 = (state_32604[(20)]);var inst_32541 = (state_32604[(10)]);var inst_32557 = (state_32604[(2)]);var inst_32558 = (inst_32543 + (1));var tmp32671 = inst_32540;var tmp32672 = inst_32542;var tmp32673 = inst_32541;var inst_32540__$1 = tmp32671;var inst_32541__$1 = tmp32673;var inst_32542__$1 = tmp32672;var inst_32543__$1 = inst_32558;var state_32604__$1 = (function (){var statearr_32677 = state_32604;(statearr_32677[(18)] = inst_32540__$1);
(statearr_32677[(33)] = inst_32557);
(statearr_32677[(9)] = inst_32543__$1);
(statearr_32677[(20)] = inst_32542__$1);
(statearr_32677[(10)] = inst_32541__$1);
return statearr_32677;
})();var statearr_32678_32742 = state_32604__$1;(statearr_32678_32742[(2)] = null);
(statearr_32678_32742[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (10)))
{var inst_32482 = (state_32604[(14)]);var inst_32484 = (state_32604[(15)]);var inst_32490 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32482,inst_32484);var inst_32491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32490,(0),null);var inst_32492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32490,(1),null);var state_32604__$1 = (function (){var statearr_32679 = state_32604;(statearr_32679[(28)] = inst_32491);
return statearr_32679;
})();if(cljs.core.truth_(inst_32492))
{var statearr_32680_32743 = state_32604__$1;(statearr_32680_32743[(1)] = (13));
} else
{var statearr_32681_32744 = state_32604__$1;(statearr_32681_32744[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (18)))
{var inst_32525 = (state_32604[(2)]);var state_32604__$1 = state_32604;var statearr_32682_32745 = state_32604__$1;(statearr_32682_32745[(2)] = inst_32525);
(statearr_32682_32745[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (42)))
{var state_32604__$1 = state_32604;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32604__$1,(45),dchan);
} else
{if((state_val_32605 === (37)))
{var inst_32561 = (state_32604[(17)]);var inst_32570 = cljs.core.first(inst_32561);var state_32604__$1 = (function (){var statearr_32683 = state_32604;(statearr_32683[(25)] = inst_32570);
return statearr_32683;
})();var statearr_32684_32746 = state_32604__$1;(statearr_32684_32746[(2)] = null);
(statearr_32684_32746[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32605 === (8)))
{var inst_32483 = (state_32604[(12)]);var inst_32484 = (state_32604[(15)]);var inst_32486 = (inst_32484 < inst_32483);var inst_32487 = inst_32486;var state_32604__$1 = state_32604;if(cljs.core.truth_(inst_32487))
{var statearr_32685_32747 = state_32604__$1;(statearr_32685_32747[(1)] = (10));
} else
{var statearr_32686_32748 = state_32604__$1;(statearr_32686_32748[(1)] = (11));
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
});})(c__22717__auto___32696,cs,m,dchan,dctr,done))
;return ((function (switch__22702__auto__,c__22717__auto___32696,cs,m,dchan,dctr,done){
return (function() {
var state_machine__22703__auto__ = null;
var state_machine__22703__auto____0 = (function (){var statearr_32690 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32690[(0)] = state_machine__22703__auto__);
(statearr_32690[(1)] = (1));
return statearr_32690;
});
var state_machine__22703__auto____1 = (function (state_32604){while(true){
var ret_value__22704__auto__ = (function (){try{while(true){
var result__22705__auto__ = switch__22702__auto__(state_32604);if(cljs.core.keyword_identical_QMARK_(result__22705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22705__auto__;
}
break;
}
}catch (e32691){if((e32691 instanceof Object))
{var ex__22706__auto__ = e32691;var statearr_32692_32749 = state_32604;(statearr_32692_32749[(5)] = ex__22706__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_32604);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32691;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32750 = state_32604;
state_32604 = G__32750;
continue;
}
} else
{return ret_value__22704__auto__;
}
break;
}
});
state_machine__22703__auto__ = function(state_32604){
switch(arguments.length){
case 0:
return state_machine__22703__auto____0.call(this);
case 1:
return state_machine__22703__auto____1.call(this,state_32604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22703__auto____0;
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22703__auto____1;
return state_machine__22703__auto__;
})()
;})(switch__22702__auto__,c__22717__auto___32696,cs,m,dchan,dctr,done))
})();var state__22719__auto__ = (function (){var statearr_32693 = (function (){return (f__22718__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22718__auto__.cljs$core$IFn$_invoke$arity$0() : f__22718__auto__.call(null));
})();(statearr_32693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22717__auto___32696);
return statearr_32693;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22719__auto__);
});})(c__22717__auto___32696,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj32755 = {};return obj32755;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__19335__auto__ = m;if(and__19335__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__19335__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__20559__auto__ = (((m == null))?null:m);return (function (){var or__19357__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__32759 = x__20559__auto__;return goog.typeOf(G__32759);
})()]);if(or__19357__auto__)
{return or__19357__auto__;
} else
{var or__19357__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__19357__auto____$1)
{return or__19357__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__19335__auto__ = m;if(and__19335__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__19335__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__20559__auto__ = (((m == null))?null:m);return (function (){var or__19357__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__32763 = x__20559__auto__;return goog.typeOf(G__32763);
})()]);if(or__19357__auto__)
{return or__19357__auto__;
} else
{var or__19357__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__19357__auto____$1)
{return or__19357__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__19335__auto__ = m;if(and__19335__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__19335__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__20559__auto__ = (((m == null))?null:m);return (function (){var or__19357__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__32767 = x__20559__auto__;return goog.typeOf(G__32767);
})()]);if(or__19357__auto__)
{return or__19357__auto__;
} else
{var or__19357__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__19357__auto____$1)
{return or__19357__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__19335__auto__ = m;if(and__19335__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__19335__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__20559__auto__ = (((m == null))?null:m);return (function (){var or__19357__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__32771 = x__20559__auto__;return goog.typeOf(G__32771);
})()]);if(or__19357__auto__)
{return or__19357__auto__;
} else
{var or__19357__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__19357__auto____$1)
{return or__19357__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__19335__auto__ = m;if(and__19335__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__19335__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__20559__auto__ = (((m == null))?null:m);return (function (){var or__19357__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__32775 = x__20559__auto__;return goog.typeOf(G__32775);
})()]);if(or__19357__auto__)
{return or__19357__auto__;
} else
{var or__19357__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__19357__auto____$1)
{return or__19357__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__32899 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32899) : cljs.core.atom.call(null,G__32899));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = (function (){var G__32900 = new cljs.core.Keyword(null,"mute","mute",1151223646);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32900) : cljs.core.atom.call(null,G__32900));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__32901 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__32901) : attr.call(null,G__32901));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__32902 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32902) : cljs.core.deref.call(null,G__32902));
})();var mode = (function (){var G__32903 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32903) : cljs.core.deref.call(null,G__32903));
})();var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t32904 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32904 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32905){
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
this.meta32905 = meta32905;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32904.cljs$lang$type = true;
cljs.core.async.t32904.cljs$lang$ctorStr = "cljs.core.async/t32904";
cljs.core.async.t32904.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"cljs.core.async/t32904");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32904.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t32904.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32904.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32904.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__32907_33022 = self__.cs;var G__32908_33023 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32907_33022,G__32908_33023) : cljs.core.reset_BANG_.call(null,G__32907_33022,G__32908_33023));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32904.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32904.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__32909 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__32909) : self__.solo_modes.call(null,G__32909));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__32910_33024 = self__.solo_mode;var G__32911_33025 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32910_33024,G__32911_33025) : cljs.core.reset_BANG_.call(null,G__32910_33024,G__32911_33025));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32904.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32904.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32904.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32906){var self__ = this;
var _32906__$1 = this;return self__.meta32905;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32906,meta32905__$1){var self__ = this;
var _32906__$1 = this;return (new cljs.core.async.t32904(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32905__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t32904 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t32904(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32905){return (new cljs.core.async.t32904(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32905));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t32904(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__22717__auto___33026 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22717__auto___33026,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__22718__auto__ = (function (){var switch__22702__auto__ = ((function (c__22717__auto___33026,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32978){var state_val_32979 = (state_32978[(1)]);if((state_val_32979 === (7)))
{var inst_32925 = (state_32978[(7)]);var inst_32930 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32925);var state_32978__$1 = state_32978;var statearr_32980_33027 = state_32978__$1;(statearr_32980_33027[(2)] = inst_32930);
(statearr_32980_33027[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32979 === (20)))
{var inst_32940 = (state_32978[(8)]);var state_32978__$1 = state_32978;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32978__$1,(23),out,inst_32940);
} else
{if((state_val_32979 === (1)))
{var inst_32915 = (state_32978[(9)]);var inst_32915__$1 = calc_state();var inst_32916 = cljs.core.seq_QMARK_(inst_32915__$1);var state_32978__$1 = (function (){var statearr_32981 = state_32978;(statearr_32981[(9)] = inst_32915__$1);
return statearr_32981;
})();if(inst_32916)
{var statearr_32982_33028 = state_32978__$1;(statearr_32982_33028[(1)] = (2));
} else
{var statearr_32983_33029 = state_32978__$1;(statearr_32983_33029[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32979 === (4)))
{var inst_32915 = (state_32978[(9)]);var inst_32921 = (state_32978[(2)]);var inst_32922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32921,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_32923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32921,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_32924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32921,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_32925 = inst_32915;var state_32978__$1 = (function (){var statearr_32984 = state_32978;(statearr_32984[(10)] = inst_32922);
(statearr_32984[(11)] = inst_32924);
(statearr_32984[(7)] = inst_32925);
(statearr_32984[(12)] = inst_32923);
return statearr_32984;
})();var statearr_32985_33030 = state_32978__$1;(statearr_32985_33030[(2)] = null);
(statearr_32985_33030[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32979 === (15)))
{var state_32978__$1 = state_32978;var statearr_32986_33031 = state_32978__$1;(statearr_32986_33031[(2)] = null);
(statearr_32986_33031[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32979 === (21)))
{var state_32978__$1 = state_32978;var statearr_32987_33032 = state_32978__$1;(statearr_32987_33032[(2)] = null);
(statearr_32987_33032[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32979 === (13)))
{var inst_32974 = (state_32978[(2)]);var state_32978__$1 = state_32978;var statearr_32988_33033 = state_32978__$1;(statearr_32988_33033[(2)] = inst_32974);
(statearr_32988_33033[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32979 === (22)))
{var inst_32933 = (state_32978[(13)]);var inst_32971 = (state_32978[(2)]);var inst_32925 = inst_32933;var state_32978__$1 = (function (){var statearr_32989 = state_32978;(statearr_32989[(7)] = inst_32925);
(statearr_32989[(14)] = inst_32971);
return statearr_32989;
})();var statearr_32990_33034 = state_32978__$1;(statearr_32990_33034[(2)] = null);
(statearr_32990_33034[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32979 === (6)))
{var inst_32976 = (state_32978[(2)]);var state_32978__$1 = state_32978;return cljs.core.async.impl.ioc_helpers.return_chan(state_32978__$1,inst_32976);
} else
{if((state_val_32979 === (17)))
{var inst_32956 = (state_32978[(15)]);var state_32978__$1 = state_32978;var statearr_32991_33035 = state_32978__$1;(statearr_32991_33035[(2)] = inst_32956);
(statearr_32991_33035[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32979 === (3)))
{var inst_32915 = (state_32978[(9)]);var state_32978__$1 = state_32978;var statearr_32992_33036 = state_32978__$1;(statearr_32992_33036[(2)] = inst_32915);
(statearr_32992_33036[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32979 === (12)))
{var inst_32941 = (state_32978[(16)]);var inst_32936 = (state_32978[(17)]);var inst_32956 = (state_32978[(15)]);var inst_32956__$1 = (function (){var G__32993 = inst_32941;return (inst_32936.cljs$core$IFn$_invoke$arity$1 ? inst_32936.cljs$core$IFn$_invoke$arity$1(G__32993) : inst_32936.call(null,G__32993));
})();var state_32978__$1 = (function (){var statearr_32994 = state_32978;(statearr_32994[(15)] = inst_32956__$1);
return statearr_32994;
})();if(cljs.core.truth_(inst_32956__$1))
{var statearr_32995_33037 = state_32978__$1;(statearr_32995_33037[(1)] = (17));
} else
{var statearr_32996_33038 = state_32978__$1;(statearr_32996_33038[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32979 === (2)))
{var inst_32915 = (state_32978[(9)]);var inst_32918 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32915);var state_32978__$1 = state_32978;var statearr_32997_33039 = state_32978__$1;(statearr_32997_33039[(2)] = inst_32918);
(statearr_32997_33039[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32979 === (23)))
{var inst_32968 = (state_32978[(2)]);var state_32978__$1 = state_32978;var statearr_32998_33040 = state_32978__$1;(statearr_32998_33040[(2)] = inst_32968);
(statearr_32998_33040[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32979 === (19)))
{var inst_32965 = (state_32978[(2)]);var state_32978__$1 = state_32978;if(cljs.core.truth_(inst_32965))
{var statearr_32999_33041 = state_32978__$1;(statearr_32999_33041[(1)] = (20));
} else
{var statearr_33000_33042 = state_32978__$1;(statearr_33000_33042[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32979 === (11)))
{var inst_32940 = (state_32978[(8)]);var inst_32946 = (inst_32940 == null);var state_32978__$1 = state_32978;if(cljs.core.truth_(inst_32946))
{var statearr_33001_33043 = state_32978__$1;(statearr_33001_33043[(1)] = (14));
} else
{var statearr_33002_33044 = state_32978__$1;(statearr_33002_33044[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32979 === (9)))
{var inst_32933 = (state_32978[(13)]);var inst_32933__$1 = (state_32978[(2)]);var inst_32934 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32933__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_32935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32933__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_32936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32933__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_32978__$1 = (function (){var statearr_33003 = state_32978;(statearr_33003[(18)] = inst_32935);
(statearr_33003[(17)] = inst_32936);
(statearr_33003[(13)] = inst_32933__$1);
return statearr_33003;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_32978__$1,(10),inst_32934);
} else
{if((state_val_32979 === (5)))
{var inst_32925 = (state_32978[(7)]);var inst_32928 = cljs.core.seq_QMARK_(inst_32925);var state_32978__$1 = state_32978;if(inst_32928)
{var statearr_33004_33045 = state_32978__$1;(statearr_33004_33045[(1)] = (7));
} else
{var statearr_33005_33046 = state_32978__$1;(statearr_33005_33046[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32979 === (14)))
{var inst_32941 = (state_32978[(16)]);var inst_32948 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32941);var state_32978__$1 = state_32978;var statearr_33006_33047 = state_32978__$1;(statearr_33006_33047[(2)] = inst_32948);
(statearr_33006_33047[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32979 === (16)))
{var inst_32951 = (state_32978[(2)]);var inst_32952 = calc_state();var inst_32925 = inst_32952;var state_32978__$1 = (function (){var statearr_33007 = state_32978;(statearr_33007[(19)] = inst_32951);
(statearr_33007[(7)] = inst_32925);
return statearr_33007;
})();var statearr_33008_33048 = state_32978__$1;(statearr_33008_33048[(2)] = null);
(statearr_33008_33048[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32979 === (10)))
{var inst_32941 = (state_32978[(16)]);var inst_32940 = (state_32978[(8)]);var inst_32939 = (state_32978[(2)]);var inst_32940__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32939,(0),null);var inst_32941__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32939,(1),null);var inst_32942 = (inst_32940__$1 == null);var inst_32943 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32941__$1,change);var inst_32944 = (inst_32942) || (inst_32943);var state_32978__$1 = (function (){var statearr_33009 = state_32978;(statearr_33009[(16)] = inst_32941__$1);
(statearr_33009[(8)] = inst_32940__$1);
return statearr_33009;
})();if(cljs.core.truth_(inst_32944))
{var statearr_33010_33049 = state_32978__$1;(statearr_33010_33049[(1)] = (11));
} else
{var statearr_33011_33050 = state_32978__$1;(statearr_33011_33050[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32979 === (18)))
{var inst_32941 = (state_32978[(16)]);var inst_32935 = (state_32978[(18)]);var inst_32936 = (state_32978[(17)]);var inst_32960 = cljs.core.empty_QMARK_(inst_32936);var inst_32961 = (function (){var G__33012 = inst_32941;return (inst_32935.cljs$core$IFn$_invoke$arity$1 ? inst_32935.cljs$core$IFn$_invoke$arity$1(G__33012) : inst_32935.call(null,G__33012));
})();var inst_32962 = cljs.core.not(inst_32961);var inst_32963 = (inst_32960) && (inst_32962);var state_32978__$1 = state_32978;var statearr_33013_33051 = state_32978__$1;(statearr_33013_33051[(2)] = inst_32963);
(statearr_33013_33051[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32979 === (8)))
{var inst_32925 = (state_32978[(7)]);var state_32978__$1 = state_32978;var statearr_33014_33052 = state_32978__$1;(statearr_33014_33052[(2)] = inst_32925);
(statearr_33014_33052[(1)] = (9));
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
});})(c__22717__auto___33026,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__22702__auto__,c__22717__auto___33026,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__22703__auto__ = null;
var state_machine__22703__auto____0 = (function (){var statearr_33018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33018[(0)] = state_machine__22703__auto__);
(statearr_33018[(1)] = (1));
return statearr_33018;
});
var state_machine__22703__auto____1 = (function (state_32978){while(true){
var ret_value__22704__auto__ = (function (){try{while(true){
var result__22705__auto__ = switch__22702__auto__(state_32978);if(cljs.core.keyword_identical_QMARK_(result__22705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22705__auto__;
}
break;
}
}catch (e33019){if((e33019 instanceof Object))
{var ex__22706__auto__ = e33019;var statearr_33020_33053 = state_32978;(statearr_33020_33053[(5)] = ex__22706__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_32978);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33019;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33054 = state_32978;
state_32978 = G__33054;
continue;
}
} else
{return ret_value__22704__auto__;
}
break;
}
});
state_machine__22703__auto__ = function(state_32978){
switch(arguments.length){
case 0:
return state_machine__22703__auto____0.call(this);
case 1:
return state_machine__22703__auto____1.call(this,state_32978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22703__auto____0;
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22703__auto____1;
return state_machine__22703__auto__;
})()
;})(switch__22702__auto__,c__22717__auto___33026,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__22719__auto__ = (function (){var statearr_33021 = (function (){return (f__22718__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22718__auto__.cljs$core$IFn$_invoke$arity$0() : f__22718__auto__.call(null));
})();(statearr_33021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22717__auto___33026);
return statearr_33021;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22719__auto__);
});})(c__22717__auto___33026,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj33056 = {};return obj33056;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__19335__auto__ = p;if(and__19335__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__19335__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__20559__auto__ = (((p == null))?null:p);return (function (){var or__19357__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__33060 = x__20559__auto__;return goog.typeOf(G__33060);
})()]);if(or__19357__auto__)
{return or__19357__auto__;
} else
{var or__19357__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__19357__auto____$1)
{return or__19357__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__19335__auto__ = p;if(and__19335__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__19335__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__20559__auto__ = (((p == null))?null:p);return (function (){var or__19357__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__33064 = x__20559__auto__;return goog.typeOf(G__33064);
})()]);if(or__19357__auto__)
{return or__19357__auto__;
} else
{var or__19357__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__19357__auto____$1)
{return or__19357__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__19335__auto__ = p;if(and__19335__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__19335__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__20559__auto__ = (((p == null))?null:p);return (function (){var or__19357__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__33070 = x__20559__auto__;return goog.typeOf(G__33070);
})()]);if(or__19357__auto__)
{return or__19357__auto__;
} else
{var or__19357__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__19357__auto____$1)
{return or__19357__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__19335__auto__ = p;if(and__19335__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__19335__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__20559__auto__ = (((p == null))?null:p);return (function (){var or__19357__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__33072 = x__20559__auto__;return goog.typeOf(G__33072);
})()]);if(or__19357__auto__)
{return or__19357__auto__;
} else
{var or__19357__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__19357__auto____$1)
{return or__19357__auto____$1;
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
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__33213 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33213) : cljs.core.atom.call(null,G__33213));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__19357__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__33215 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33215) : cljs.core.deref.call(null,G__33215));
})(),topic);if(cljs.core.truth_(or__19357__auto__))
{return or__19357__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__19357__auto__,mults){
return (function (p1__33073_SHARP_){if(cljs.core.truth_((function (){var G__33216 = topic;return (p1__33073_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33073_SHARP_.cljs$core$IFn$_invoke$arity$1(G__33216) : p1__33073_SHARP_.call(null,G__33216));
})()))
{return p1__33073_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33073_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__33217 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__33217) : buf_fn.call(null,G__33217));
})())));
}
});})(or__19357__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t33218 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33218 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta33219){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta33219 = meta33219;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33218.cljs$lang$type = true;
cljs.core.async.t33218.cljs$lang$ctorStr = "cljs.core.async/t33218";
cljs.core.async.t33218.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"cljs.core.async/t33218");
});})(mults,ensure_mult))
;
cljs.core.async.t33218.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t33218.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__33221 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__33221) : self__.ensure_mult.call(null,G__33221));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t33218.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__33222 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33222) : cljs.core.deref.call(null,G__33222));
})(),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t33218.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__33223 = self__.mults;var G__33224 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33223,G__33224) : cljs.core.reset_BANG_.call(null,G__33223,G__33224));
});})(mults,ensure_mult))
;
cljs.core.async.t33218.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t33218.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33218.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t33218.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33220){var self__ = this;
var _33220__$1 = this;return self__.meta33219;
});})(mults,ensure_mult))
;
cljs.core.async.t33218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33220,meta33219__$1){var self__ = this;
var _33220__$1 = this;return (new cljs.core.async.t33218(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta33219__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t33218 = ((function (mults,ensure_mult){
return (function __GT_t33218(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33219){return (new cljs.core.async.t33218(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33219));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t33218(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__22717__auto___33349 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22717__auto___33349,mults,ensure_mult,p){
return (function (){var f__22718__auto__ = (function (){var switch__22702__auto__ = ((function (c__22717__auto___33349,mults,ensure_mult,p){
return (function (state_33298){var state_val_33299 = (state_33298[(1)]);if((state_val_33299 === (7)))
{var inst_33294 = (state_33298[(2)]);var state_33298__$1 = state_33298;var statearr_33300_33350 = state_33298__$1;(statearr_33300_33350[(2)] = inst_33294);
(statearr_33300_33350[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33299 === (20)))
{var state_33298__$1 = state_33298;var statearr_33301_33351 = state_33298__$1;(statearr_33301_33351[(2)] = null);
(statearr_33301_33351[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33299 === (1)))
{var state_33298__$1 = state_33298;var statearr_33302_33352 = state_33298__$1;(statearr_33302_33352[(2)] = null);
(statearr_33302_33352[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33299 === (24)))
{var inst_33277 = (state_33298[(7)]);var inst_33227 = (state_33298[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_33298,(23),Object,null,(22));var inst_33284 = cljs.core.async.muxch_STAR_(inst_33277);var state_33298__$1 = state_33298;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33298__$1,(25),inst_33284,inst_33227);
} else
{if((state_val_33299 === (4)))
{var inst_33227 = (state_33298[(8)]);var inst_33227__$1 = (state_33298[(2)]);var inst_33228 = (inst_33227__$1 == null);var state_33298__$1 = (function (){var statearr_33303 = state_33298;(statearr_33303[(8)] = inst_33227__$1);
return statearr_33303;
})();if(cljs.core.truth_(inst_33228))
{var statearr_33304_33353 = state_33298__$1;(statearr_33304_33353[(1)] = (5));
} else
{var statearr_33305_33354 = state_33298__$1;(statearr_33305_33354[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33299 === (15)))
{var inst_33269 = (state_33298[(2)]);var state_33298__$1 = state_33298;var statearr_33306_33355 = state_33298__$1;(statearr_33306_33355[(2)] = inst_33269);
(statearr_33306_33355[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33299 === (21)))
{var inst_33291 = (state_33298[(2)]);var state_33298__$1 = (function (){var statearr_33307 = state_33298;(statearr_33307[(9)] = inst_33291);
return statearr_33307;
})();var statearr_33308_33356 = state_33298__$1;(statearr_33308_33356[(2)] = null);
(statearr_33308_33356[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33299 === (13)))
{var inst_33251 = (state_33298[(10)]);var inst_33253 = cljs.core.chunked_seq_QMARK_(inst_33251);var state_33298__$1 = state_33298;if(inst_33253)
{var statearr_33309_33357 = state_33298__$1;(statearr_33309_33357[(1)] = (16));
} else
{var statearr_33310_33358 = state_33298__$1;(statearr_33310_33358[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33299 === (22)))
{var inst_33288 = (state_33298[(2)]);var state_33298__$1 = state_33298;var statearr_33311_33359 = state_33298__$1;(statearr_33311_33359[(2)] = inst_33288);
(statearr_33311_33359[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33299 === (6)))
{var inst_33277 = (state_33298[(7)]);var inst_33227 = (state_33298[(8)]);var inst_33275 = (state_33298[(11)]);var inst_33275__$1 = (function (){var G__33312 = inst_33227;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__33312) : topic_fn.call(null,G__33312));
})();var inst_33276 = (function (){var G__33313 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33313) : cljs.core.deref.call(null,G__33313));
})();var inst_33277__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33276,inst_33275__$1);var state_33298__$1 = (function (){var statearr_33314 = state_33298;(statearr_33314[(7)] = inst_33277__$1);
(statearr_33314[(11)] = inst_33275__$1);
return statearr_33314;
})();if(cljs.core.truth_(inst_33277__$1))
{var statearr_33315_33360 = state_33298__$1;(statearr_33315_33360[(1)] = (19));
} else
{var statearr_33316_33361 = state_33298__$1;(statearr_33316_33361[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33299 === (25)))
{var inst_33286 = (state_33298[(2)]);var state_33298__$1 = state_33298;var statearr_33317_33362 = state_33298__$1;(statearr_33317_33362[(2)] = inst_33286);
cljs.core.async.impl.ioc_helpers.process_exception(state_33298__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33299 === (17)))
{var inst_33251 = (state_33298[(10)]);var inst_33260 = cljs.core.first(inst_33251);var inst_33261 = cljs.core.async.muxch_STAR_(inst_33260);var inst_33262 = cljs.core.async.close_BANG_(inst_33261);var inst_33263 = cljs.core.next(inst_33251);var inst_33237 = inst_33263;var inst_33238 = null;var inst_33239 = (0);var inst_33240 = (0);var state_33298__$1 = (function (){var statearr_33318 = state_33298;(statearr_33318[(12)] = inst_33238);
(statearr_33318[(13)] = inst_33237);
(statearr_33318[(14)] = inst_33262);
(statearr_33318[(15)] = inst_33239);
(statearr_33318[(16)] = inst_33240);
return statearr_33318;
})();var statearr_33319_33363 = state_33298__$1;(statearr_33319_33363[(2)] = null);
(statearr_33319_33363[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33299 === (3)))
{var inst_33296 = (state_33298[(2)]);var state_33298__$1 = state_33298;return cljs.core.async.impl.ioc_helpers.return_chan(state_33298__$1,inst_33296);
} else
{if((state_val_33299 === (12)))
{var inst_33271 = (state_33298[(2)]);var state_33298__$1 = state_33298;var statearr_33320_33364 = state_33298__$1;(statearr_33320_33364[(2)] = inst_33271);
(statearr_33320_33364[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33299 === (2)))
{var state_33298__$1 = state_33298;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33298__$1,(4),ch);
} else
{if((state_val_33299 === (23)))
{var inst_33275 = (state_33298[(11)]);var inst_33279 = (state_33298[(2)]);var inst_33280 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33275);var state_33298__$1 = (function (){var statearr_33321 = state_33298;(statearr_33321[(17)] = inst_33279);
return statearr_33321;
})();var statearr_33322_33365 = state_33298__$1;(statearr_33322_33365[(2)] = inst_33280);
cljs.core.async.impl.ioc_helpers.process_exception(state_33298__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33299 === (19)))
{var state_33298__$1 = state_33298;var statearr_33323_33366 = state_33298__$1;(statearr_33323_33366[(2)] = null);
(statearr_33323_33366[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33299 === (11)))
{var inst_33251 = (state_33298[(10)]);var inst_33237 = (state_33298[(13)]);var inst_33251__$1 = cljs.core.seq(inst_33237);var state_33298__$1 = (function (){var statearr_33324 = state_33298;(statearr_33324[(10)] = inst_33251__$1);
return statearr_33324;
})();if(inst_33251__$1)
{var statearr_33325_33367 = state_33298__$1;(statearr_33325_33367[(1)] = (13));
} else
{var statearr_33326_33368 = state_33298__$1;(statearr_33326_33368[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33299 === (9)))
{var inst_33273 = (state_33298[(2)]);var state_33298__$1 = state_33298;var statearr_33327_33369 = state_33298__$1;(statearr_33327_33369[(2)] = inst_33273);
(statearr_33327_33369[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33299 === (5)))
{var inst_33234 = (function (){var G__33328 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33328) : cljs.core.deref.call(null,G__33328));
})();var inst_33235 = cljs.core.vals(inst_33234);var inst_33236 = cljs.core.seq(inst_33235);var inst_33237 = inst_33236;var inst_33238 = null;var inst_33239 = (0);var inst_33240 = (0);var state_33298__$1 = (function (){var statearr_33329 = state_33298;(statearr_33329[(12)] = inst_33238);
(statearr_33329[(13)] = inst_33237);
(statearr_33329[(15)] = inst_33239);
(statearr_33329[(16)] = inst_33240);
return statearr_33329;
})();var statearr_33330_33370 = state_33298__$1;(statearr_33330_33370[(2)] = null);
(statearr_33330_33370[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33299 === (14)))
{var state_33298__$1 = state_33298;var statearr_33334_33371 = state_33298__$1;(statearr_33334_33371[(2)] = null);
(statearr_33334_33371[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33299 === (16)))
{var inst_33251 = (state_33298[(10)]);var inst_33255 = cljs.core.chunk_first(inst_33251);var inst_33256 = cljs.core.chunk_rest(inst_33251);var inst_33257 = cljs.core.count(inst_33255);var inst_33237 = inst_33256;var inst_33238 = inst_33255;var inst_33239 = inst_33257;var inst_33240 = (0);var state_33298__$1 = (function (){var statearr_33335 = state_33298;(statearr_33335[(12)] = inst_33238);
(statearr_33335[(13)] = inst_33237);
(statearr_33335[(15)] = inst_33239);
(statearr_33335[(16)] = inst_33240);
return statearr_33335;
})();var statearr_33336_33372 = state_33298__$1;(statearr_33336_33372[(2)] = null);
(statearr_33336_33372[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33299 === (10)))
{var inst_33238 = (state_33298[(12)]);var inst_33237 = (state_33298[(13)]);var inst_33239 = (state_33298[(15)]);var inst_33240 = (state_33298[(16)]);var inst_33245 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33238,inst_33240);var inst_33246 = cljs.core.async.muxch_STAR_(inst_33245);var inst_33247 = cljs.core.async.close_BANG_(inst_33246);var inst_33248 = (inst_33240 + (1));var tmp33331 = inst_33238;var tmp33332 = inst_33237;var tmp33333 = inst_33239;var inst_33237__$1 = tmp33332;var inst_33238__$1 = tmp33331;var inst_33239__$1 = tmp33333;var inst_33240__$1 = inst_33248;var state_33298__$1 = (function (){var statearr_33337 = state_33298;(statearr_33337[(12)] = inst_33238__$1);
(statearr_33337[(13)] = inst_33237__$1);
(statearr_33337[(15)] = inst_33239__$1);
(statearr_33337[(18)] = inst_33247);
(statearr_33337[(16)] = inst_33240__$1);
return statearr_33337;
})();var statearr_33338_33373 = state_33298__$1;(statearr_33338_33373[(2)] = null);
(statearr_33338_33373[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33299 === (18)))
{var inst_33266 = (state_33298[(2)]);var state_33298__$1 = state_33298;var statearr_33339_33374 = state_33298__$1;(statearr_33339_33374[(2)] = inst_33266);
(statearr_33339_33374[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33299 === (8)))
{var inst_33239 = (state_33298[(15)]);var inst_33240 = (state_33298[(16)]);var inst_33242 = (inst_33240 < inst_33239);var inst_33243 = inst_33242;var state_33298__$1 = state_33298;if(cljs.core.truth_(inst_33243))
{var statearr_33340_33375 = state_33298__$1;(statearr_33340_33375[(1)] = (10));
} else
{var statearr_33341_33376 = state_33298__$1;(statearr_33341_33376[(1)] = (11));
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
});})(c__22717__auto___33349,mults,ensure_mult,p))
;return ((function (switch__22702__auto__,c__22717__auto___33349,mults,ensure_mult,p){
return (function() {
var state_machine__22703__auto__ = null;
var state_machine__22703__auto____0 = (function (){var statearr_33345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33345[(0)] = state_machine__22703__auto__);
(statearr_33345[(1)] = (1));
return statearr_33345;
});
var state_machine__22703__auto____1 = (function (state_33298){while(true){
var ret_value__22704__auto__ = (function (){try{while(true){
var result__22705__auto__ = switch__22702__auto__(state_33298);if(cljs.core.keyword_identical_QMARK_(result__22705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22705__auto__;
}
break;
}
}catch (e33346){if((e33346 instanceof Object))
{var ex__22706__auto__ = e33346;var statearr_33347_33377 = state_33298;(statearr_33347_33377[(5)] = ex__22706__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33298);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33346;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33378 = state_33298;
state_33298 = G__33378;
continue;
}
} else
{return ret_value__22704__auto__;
}
break;
}
});
state_machine__22703__auto__ = function(state_33298){
switch(arguments.length){
case 0:
return state_machine__22703__auto____0.call(this);
case 1:
return state_machine__22703__auto____1.call(this,state_33298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22703__auto____0;
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22703__auto____1;
return state_machine__22703__auto__;
})()
;})(switch__22702__auto__,c__22717__auto___33349,mults,ensure_mult,p))
})();var state__22719__auto__ = (function (){var statearr_33348 = (function (){return (f__22718__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22718__auto__.cljs$core$IFn$_invoke$arity$0() : f__22718__auto__.call(null));
})();(statearr_33348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22717__auto___33349);
return statearr_33348;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22719__auto__);
});})(c__22717__auto___33349,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__33459 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33459) : cljs.core.atom.call(null,G__33459));
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__22717__auto___33532 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22717__auto___33532,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__22718__auto__ = (function (){var switch__22702__auto__ = ((function (c__22717__auto___33532,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33498){var state_val_33499 = (state_33498[(1)]);if((state_val_33499 === (7)))
{var state_33498__$1 = state_33498;var statearr_33500_33533 = state_33498__$1;(statearr_33500_33533[(2)] = null);
(statearr_33500_33533[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33499 === (1)))
{var state_33498__$1 = state_33498;var statearr_33501_33534 = state_33498__$1;(statearr_33501_33534[(2)] = null);
(statearr_33501_33534[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33499 === (4)))
{var inst_33462 = (state_33498[(7)]);var inst_33464 = (inst_33462 < cnt);var state_33498__$1 = state_33498;if(cljs.core.truth_(inst_33464))
{var statearr_33502_33535 = state_33498__$1;(statearr_33502_33535[(1)] = (6));
} else
{var statearr_33503_33536 = state_33498__$1;(statearr_33503_33536[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33499 === (15)))
{var inst_33494 = (state_33498[(2)]);var state_33498__$1 = state_33498;var statearr_33504_33537 = state_33498__$1;(statearr_33504_33537[(2)] = inst_33494);
(statearr_33504_33537[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33499 === (13)))
{var inst_33487 = cljs.core.async.close_BANG_(out);var state_33498__$1 = state_33498;var statearr_33505_33538 = state_33498__$1;(statearr_33505_33538[(2)] = inst_33487);
(statearr_33505_33538[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33499 === (6)))
{var state_33498__$1 = state_33498;var statearr_33506_33539 = state_33498__$1;(statearr_33506_33539[(2)] = null);
(statearr_33506_33539[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33499 === (3)))
{var inst_33496 = (state_33498[(2)]);var state_33498__$1 = state_33498;return cljs.core.async.impl.ioc_helpers.return_chan(state_33498__$1,inst_33496);
} else
{if((state_val_33499 === (12)))
{var inst_33484 = (state_33498[(8)]);var inst_33484__$1 = (state_33498[(2)]);var inst_33485 = cljs.core.some(cljs.core.nil_QMARK_,inst_33484__$1);var state_33498__$1 = (function (){var statearr_33507 = state_33498;(statearr_33507[(8)] = inst_33484__$1);
return statearr_33507;
})();if(cljs.core.truth_(inst_33485))
{var statearr_33508_33540 = state_33498__$1;(statearr_33508_33540[(1)] = (13));
} else
{var statearr_33509_33541 = state_33498__$1;(statearr_33509_33541[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33499 === (2)))
{var inst_33461 = (function (){var G__33510 = dctr;var G__33511 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33510,G__33511) : cljs.core.reset_BANG_.call(null,G__33510,G__33511));
})();var inst_33462 = (0);var state_33498__$1 = (function (){var statearr_33512 = state_33498;(statearr_33512[(9)] = inst_33461);
(statearr_33512[(7)] = inst_33462);
return statearr_33512;
})();var statearr_33513_33542 = state_33498__$1;(statearr_33513_33542[(2)] = null);
(statearr_33513_33542[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33499 === (11)))
{var inst_33462 = (state_33498[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_33498,(10),Object,null,(9));var inst_33471 = (function (){var G__33514 = inst_33462;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__33514) : chs__$1.call(null,G__33514));
})();var inst_33472 = (function (){var G__33515 = inst_33462;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__33515) : done.call(null,G__33515));
})();var inst_33473 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33471,inst_33472);var state_33498__$1 = state_33498;var statearr_33516_33543 = state_33498__$1;(statearr_33516_33543[(2)] = inst_33473);
cljs.core.async.impl.ioc_helpers.process_exception(state_33498__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33499 === (9)))
{var inst_33462 = (state_33498[(7)]);var inst_33475 = (state_33498[(2)]);var inst_33476 = (inst_33462 + (1));var inst_33462__$1 = inst_33476;var state_33498__$1 = (function (){var statearr_33517 = state_33498;(statearr_33517[(10)] = inst_33475);
(statearr_33517[(7)] = inst_33462__$1);
return statearr_33517;
})();var statearr_33518_33544 = state_33498__$1;(statearr_33518_33544[(2)] = null);
(statearr_33518_33544[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33499 === (5)))
{var inst_33482 = (state_33498[(2)]);var state_33498__$1 = (function (){var statearr_33519 = state_33498;(statearr_33519[(11)] = inst_33482);
return statearr_33519;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33498__$1,(12),dchan);
} else
{if((state_val_33499 === (14)))
{var inst_33484 = (state_33498[(8)]);var inst_33489 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33484);var state_33498__$1 = state_33498;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33498__$1,(16),out,inst_33489);
} else
{if((state_val_33499 === (16)))
{var inst_33491 = (state_33498[(2)]);var state_33498__$1 = (function (){var statearr_33520 = state_33498;(statearr_33520[(12)] = inst_33491);
return statearr_33520;
})();var statearr_33521_33545 = state_33498__$1;(statearr_33521_33545[(2)] = null);
(statearr_33521_33545[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33499 === (10)))
{var inst_33466 = (state_33498[(2)]);var inst_33467 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_33498__$1 = (function (){var statearr_33522 = state_33498;(statearr_33522[(13)] = inst_33466);
return statearr_33522;
})();var statearr_33523_33546 = state_33498__$1;(statearr_33523_33546[(2)] = inst_33467);
cljs.core.async.impl.ioc_helpers.process_exception(state_33498__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33499 === (8)))
{var inst_33480 = (state_33498[(2)]);var state_33498__$1 = state_33498;var statearr_33524_33547 = state_33498__$1;(statearr_33524_33547[(2)] = inst_33480);
(statearr_33524_33547[(1)] = (5));
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
});})(c__22717__auto___33532,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__22702__auto__,c__22717__auto___33532,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__22703__auto__ = null;
var state_machine__22703__auto____0 = (function (){var statearr_33528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33528[(0)] = state_machine__22703__auto__);
(statearr_33528[(1)] = (1));
return statearr_33528;
});
var state_machine__22703__auto____1 = (function (state_33498){while(true){
var ret_value__22704__auto__ = (function (){try{while(true){
var result__22705__auto__ = switch__22702__auto__(state_33498);if(cljs.core.keyword_identical_QMARK_(result__22705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22705__auto__;
}
break;
}
}catch (e33529){if((e33529 instanceof Object))
{var ex__22706__auto__ = e33529;var statearr_33530_33548 = state_33498;(statearr_33530_33548[(5)] = ex__22706__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33498);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33529;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33549 = state_33498;
state_33498 = G__33549;
continue;
}
} else
{return ret_value__22704__auto__;
}
break;
}
});
state_machine__22703__auto__ = function(state_33498){
switch(arguments.length){
case 0:
return state_machine__22703__auto____0.call(this);
case 1:
return state_machine__22703__auto____1.call(this,state_33498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22703__auto____0;
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22703__auto____1;
return state_machine__22703__auto__;
})()
;})(switch__22702__auto__,c__22717__auto___33532,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__22719__auto__ = (function (){var statearr_33531 = (function (){return (f__22718__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22718__auto__.cljs$core$IFn$_invoke$arity$0() : f__22718__auto__.call(null));
})();(statearr_33531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22717__auto___33532);
return statearr_33531;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22719__auto__);
});})(c__22717__auto___33532,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22717__auto___33659 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22717__auto___33659,out){
return (function (){var f__22718__auto__ = (function (){var switch__22702__auto__ = ((function (c__22717__auto___33659,out){
return (function (state_33635){var state_val_33636 = (state_33635[(1)]);if((state_val_33636 === (7)))
{var inst_33614 = (state_33635[(7)]);var inst_33615 = (state_33635[(8)]);var inst_33614__$1 = (state_33635[(2)]);var inst_33615__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33614__$1,(0),null);var inst_33616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33614__$1,(1),null);var inst_33617 = (inst_33615__$1 == null);var state_33635__$1 = (function (){var statearr_33637 = state_33635;(statearr_33637[(7)] = inst_33614__$1);
(statearr_33637[(8)] = inst_33615__$1);
(statearr_33637[(9)] = inst_33616);
return statearr_33637;
})();if(cljs.core.truth_(inst_33617))
{var statearr_33638_33660 = state_33635__$1;(statearr_33638_33660[(1)] = (8));
} else
{var statearr_33639_33661 = state_33635__$1;(statearr_33639_33661[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33636 === (1)))
{var inst_33606 = cljs.core.vec(chs);var inst_33607 = inst_33606;var state_33635__$1 = (function (){var statearr_33640 = state_33635;(statearr_33640[(10)] = inst_33607);
return statearr_33640;
})();var statearr_33641_33662 = state_33635__$1;(statearr_33641_33662[(2)] = null);
(statearr_33641_33662[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33636 === (4)))
{var inst_33607 = (state_33635[(10)]);var state_33635__$1 = state_33635;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_33635__$1,(7),inst_33607);
} else
{if((state_val_33636 === (6)))
{var inst_33631 = (state_33635[(2)]);var state_33635__$1 = state_33635;var statearr_33642_33663 = state_33635__$1;(statearr_33642_33663[(2)] = inst_33631);
(statearr_33642_33663[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33636 === (3)))
{var inst_33633 = (state_33635[(2)]);var state_33635__$1 = state_33635;return cljs.core.async.impl.ioc_helpers.return_chan(state_33635__$1,inst_33633);
} else
{if((state_val_33636 === (2)))
{var inst_33607 = (state_33635[(10)]);var inst_33609 = cljs.core.count(inst_33607);var inst_33610 = (inst_33609 > (0));var state_33635__$1 = state_33635;if(cljs.core.truth_(inst_33610))
{var statearr_33644_33664 = state_33635__$1;(statearr_33644_33664[(1)] = (4));
} else
{var statearr_33645_33665 = state_33635__$1;(statearr_33645_33665[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33636 === (11)))
{var inst_33607 = (state_33635[(10)]);var inst_33624 = (state_33635[(2)]);var tmp33643 = inst_33607;var inst_33607__$1 = tmp33643;var state_33635__$1 = (function (){var statearr_33646 = state_33635;(statearr_33646[(11)] = inst_33624);
(statearr_33646[(10)] = inst_33607__$1);
return statearr_33646;
})();var statearr_33647_33666 = state_33635__$1;(statearr_33647_33666[(2)] = null);
(statearr_33647_33666[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33636 === (9)))
{var inst_33615 = (state_33635[(8)]);var state_33635__$1 = state_33635;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33635__$1,(11),out,inst_33615);
} else
{if((state_val_33636 === (5)))
{var inst_33629 = cljs.core.async.close_BANG_(out);var state_33635__$1 = state_33635;var statearr_33648_33667 = state_33635__$1;(statearr_33648_33667[(2)] = inst_33629);
(statearr_33648_33667[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33636 === (10)))
{var inst_33627 = (state_33635[(2)]);var state_33635__$1 = state_33635;var statearr_33649_33668 = state_33635__$1;(statearr_33649_33668[(2)] = inst_33627);
(statearr_33649_33668[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33636 === (8)))
{var inst_33614 = (state_33635[(7)]);var inst_33615 = (state_33635[(8)]);var inst_33616 = (state_33635[(9)]);var inst_33607 = (state_33635[(10)]);var inst_33619 = (function (){var c = inst_33616;var v = inst_33615;var vec__33612 = inst_33614;var cs = inst_33607;return ((function (c,v,vec__33612,cs,inst_33614,inst_33615,inst_33616,inst_33607,state_val_33636,c__22717__auto___33659,out){
return (function (p1__33550_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33550_SHARP_);
});
;})(c,v,vec__33612,cs,inst_33614,inst_33615,inst_33616,inst_33607,state_val_33636,c__22717__auto___33659,out))
})();var inst_33620 = cljs.core.filterv(inst_33619,inst_33607);var inst_33607__$1 = inst_33620;var state_33635__$1 = (function (){var statearr_33650 = state_33635;(statearr_33650[(10)] = inst_33607__$1);
return statearr_33650;
})();var statearr_33651_33669 = state_33635__$1;(statearr_33651_33669[(2)] = null);
(statearr_33651_33669[(1)] = (2));
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
});})(c__22717__auto___33659,out))
;return ((function (switch__22702__auto__,c__22717__auto___33659,out){
return (function() {
var state_machine__22703__auto__ = null;
var state_machine__22703__auto____0 = (function (){var statearr_33655 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33655[(0)] = state_machine__22703__auto__);
(statearr_33655[(1)] = (1));
return statearr_33655;
});
var state_machine__22703__auto____1 = (function (state_33635){while(true){
var ret_value__22704__auto__ = (function (){try{while(true){
var result__22705__auto__ = switch__22702__auto__(state_33635);if(cljs.core.keyword_identical_QMARK_(result__22705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22705__auto__;
}
break;
}
}catch (e33656){if((e33656 instanceof Object))
{var ex__22706__auto__ = e33656;var statearr_33657_33670 = state_33635;(statearr_33657_33670[(5)] = ex__22706__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33635);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33656;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33671 = state_33635;
state_33635 = G__33671;
continue;
}
} else
{return ret_value__22704__auto__;
}
break;
}
});
state_machine__22703__auto__ = function(state_33635){
switch(arguments.length){
case 0:
return state_machine__22703__auto____0.call(this);
case 1:
return state_machine__22703__auto____1.call(this,state_33635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22703__auto____0;
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22703__auto____1;
return state_machine__22703__auto__;
})()
;})(switch__22702__auto__,c__22717__auto___33659,out))
})();var state__22719__auto__ = (function (){var statearr_33658 = (function (){return (f__22718__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22718__auto__.cljs$core$IFn$_invoke$arity$0() : f__22718__auto__.call(null));
})();(statearr_33658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22717__auto___33659);
return statearr_33658;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22719__auto__);
});})(c__22717__auto___33659,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22717__auto___33767 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22717__auto___33767,out){
return (function (){var f__22718__auto__ = (function (){var switch__22702__auto__ = ((function (c__22717__auto___33767,out){
return (function (state_33744){var state_val_33745 = (state_33744[(1)]);if((state_val_33745 === (7)))
{var inst_33726 = (state_33744[(7)]);var inst_33726__$1 = (state_33744[(2)]);var inst_33727 = (inst_33726__$1 == null);var inst_33728 = cljs.core.not(inst_33727);var state_33744__$1 = (function (){var statearr_33746 = state_33744;(statearr_33746[(7)] = inst_33726__$1);
return statearr_33746;
})();if(inst_33728)
{var statearr_33747_33768 = state_33744__$1;(statearr_33747_33768[(1)] = (8));
} else
{var statearr_33748_33769 = state_33744__$1;(statearr_33748_33769[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33745 === (1)))
{var inst_33721 = (0);var state_33744__$1 = (function (){var statearr_33749 = state_33744;(statearr_33749[(8)] = inst_33721);
return statearr_33749;
})();var statearr_33750_33770 = state_33744__$1;(statearr_33750_33770[(2)] = null);
(statearr_33750_33770[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33745 === (4)))
{var state_33744__$1 = state_33744;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33744__$1,(7),ch);
} else
{if((state_val_33745 === (6)))
{var inst_33739 = (state_33744[(2)]);var state_33744__$1 = state_33744;var statearr_33751_33771 = state_33744__$1;(statearr_33751_33771[(2)] = inst_33739);
(statearr_33751_33771[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33745 === (3)))
{var inst_33741 = (state_33744[(2)]);var inst_33742 = cljs.core.async.close_BANG_(out);var state_33744__$1 = (function (){var statearr_33752 = state_33744;(statearr_33752[(9)] = inst_33741);
return statearr_33752;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_33744__$1,inst_33742);
} else
{if((state_val_33745 === (2)))
{var inst_33721 = (state_33744[(8)]);var inst_33723 = (inst_33721 < n);var state_33744__$1 = state_33744;if(cljs.core.truth_(inst_33723))
{var statearr_33753_33772 = state_33744__$1;(statearr_33753_33772[(1)] = (4));
} else
{var statearr_33754_33773 = state_33744__$1;(statearr_33754_33773[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33745 === (11)))
{var inst_33721 = (state_33744[(8)]);var inst_33731 = (state_33744[(2)]);var inst_33732 = (inst_33721 + (1));var inst_33721__$1 = inst_33732;var state_33744__$1 = (function (){var statearr_33755 = state_33744;(statearr_33755[(8)] = inst_33721__$1);
(statearr_33755[(10)] = inst_33731);
return statearr_33755;
})();var statearr_33756_33774 = state_33744__$1;(statearr_33756_33774[(2)] = null);
(statearr_33756_33774[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33745 === (9)))
{var state_33744__$1 = state_33744;var statearr_33757_33775 = state_33744__$1;(statearr_33757_33775[(2)] = null);
(statearr_33757_33775[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33745 === (5)))
{var state_33744__$1 = state_33744;var statearr_33758_33776 = state_33744__$1;(statearr_33758_33776[(2)] = null);
(statearr_33758_33776[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33745 === (10)))
{var inst_33736 = (state_33744[(2)]);var state_33744__$1 = state_33744;var statearr_33759_33777 = state_33744__$1;(statearr_33759_33777[(2)] = inst_33736);
(statearr_33759_33777[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33745 === (8)))
{var inst_33726 = (state_33744[(7)]);var state_33744__$1 = state_33744;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33744__$1,(11),out,inst_33726);
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
});})(c__22717__auto___33767,out))
;return ((function (switch__22702__auto__,c__22717__auto___33767,out){
return (function() {
var state_machine__22703__auto__ = null;
var state_machine__22703__auto____0 = (function (){var statearr_33763 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_33763[(0)] = state_machine__22703__auto__);
(statearr_33763[(1)] = (1));
return statearr_33763;
});
var state_machine__22703__auto____1 = (function (state_33744){while(true){
var ret_value__22704__auto__ = (function (){try{while(true){
var result__22705__auto__ = switch__22702__auto__(state_33744);if(cljs.core.keyword_identical_QMARK_(result__22705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22705__auto__;
}
break;
}
}catch (e33764){if((e33764 instanceof Object))
{var ex__22706__auto__ = e33764;var statearr_33765_33778 = state_33744;(statearr_33765_33778[(5)] = ex__22706__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33744);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33764;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33779 = state_33744;
state_33744 = G__33779;
continue;
}
} else
{return ret_value__22704__auto__;
}
break;
}
});
state_machine__22703__auto__ = function(state_33744){
switch(arguments.length){
case 0:
return state_machine__22703__auto____0.call(this);
case 1:
return state_machine__22703__auto____1.call(this,state_33744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22703__auto____0;
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22703__auto____1;
return state_machine__22703__auto__;
})()
;})(switch__22702__auto__,c__22717__auto___33767,out))
})();var state__22719__auto__ = (function (){var statearr_33766 = (function (){return (f__22718__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22718__auto__.cljs$core$IFn$_invoke$arity$0() : f__22718__auto__.call(null));
})();(statearr_33766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22717__auto___33767);
return statearr_33766;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22719__auto__);
});})(c__22717__auto___33767,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22717__auto___33878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22717__auto___33878,out){
return (function (){var f__22718__auto__ = (function (){var switch__22702__auto__ = ((function (c__22717__auto___33878,out){
return (function (state_33853){var state_val_33854 = (state_33853[(1)]);if((state_val_33854 === (7)))
{var inst_33848 = (state_33853[(2)]);var state_33853__$1 = state_33853;var statearr_33855_33879 = state_33853__$1;(statearr_33855_33879[(2)] = inst_33848);
(statearr_33855_33879[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33854 === (1)))
{var inst_33830 = null;var state_33853__$1 = (function (){var statearr_33856 = state_33853;(statearr_33856[(7)] = inst_33830);
return statearr_33856;
})();var statearr_33857_33880 = state_33853__$1;(statearr_33857_33880[(2)] = null);
(statearr_33857_33880[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33854 === (4)))
{var inst_33833 = (state_33853[(8)]);var inst_33833__$1 = (state_33853[(2)]);var inst_33834 = (inst_33833__$1 == null);var inst_33835 = cljs.core.not(inst_33834);var state_33853__$1 = (function (){var statearr_33858 = state_33853;(statearr_33858[(8)] = inst_33833__$1);
return statearr_33858;
})();if(inst_33835)
{var statearr_33859_33881 = state_33853__$1;(statearr_33859_33881[(1)] = (5));
} else
{var statearr_33860_33882 = state_33853__$1;(statearr_33860_33882[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33854 === (6)))
{var state_33853__$1 = state_33853;var statearr_33861_33883 = state_33853__$1;(statearr_33861_33883[(2)] = null);
(statearr_33861_33883[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33854 === (3)))
{var inst_33850 = (state_33853[(2)]);var inst_33851 = cljs.core.async.close_BANG_(out);var state_33853__$1 = (function (){var statearr_33862 = state_33853;(statearr_33862[(9)] = inst_33850);
return statearr_33862;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_33853__$1,inst_33851);
} else
{if((state_val_33854 === (2)))
{var state_33853__$1 = state_33853;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33853__$1,(4),ch);
} else
{if((state_val_33854 === (11)))
{var inst_33833 = (state_33853[(8)]);var inst_33842 = (state_33853[(2)]);var inst_33830 = inst_33833;var state_33853__$1 = (function (){var statearr_33863 = state_33853;(statearr_33863[(7)] = inst_33830);
(statearr_33863[(10)] = inst_33842);
return statearr_33863;
})();var statearr_33864_33884 = state_33853__$1;(statearr_33864_33884[(2)] = null);
(statearr_33864_33884[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33854 === (9)))
{var inst_33833 = (state_33853[(8)]);var state_33853__$1 = state_33853;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33853__$1,(11),out,inst_33833);
} else
{if((state_val_33854 === (5)))
{var inst_33830 = (state_33853[(7)]);var inst_33833 = (state_33853[(8)]);var inst_33837 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33833,inst_33830);var state_33853__$1 = state_33853;if(inst_33837)
{var statearr_33866_33885 = state_33853__$1;(statearr_33866_33885[(1)] = (8));
} else
{var statearr_33867_33886 = state_33853__$1;(statearr_33867_33886[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33854 === (10)))
{var inst_33845 = (state_33853[(2)]);var state_33853__$1 = state_33853;var statearr_33868_33887 = state_33853__$1;(statearr_33868_33887[(2)] = inst_33845);
(statearr_33868_33887[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33854 === (8)))
{var inst_33830 = (state_33853[(7)]);var tmp33865 = inst_33830;var inst_33830__$1 = tmp33865;var state_33853__$1 = (function (){var statearr_33869 = state_33853;(statearr_33869[(7)] = inst_33830__$1);
return statearr_33869;
})();var statearr_33870_33888 = state_33853__$1;(statearr_33870_33888[(2)] = null);
(statearr_33870_33888[(1)] = (2));
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
});})(c__22717__auto___33878,out))
;return ((function (switch__22702__auto__,c__22717__auto___33878,out){
return (function() {
var state_machine__22703__auto__ = null;
var state_machine__22703__auto____0 = (function (){var statearr_33874 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_33874[(0)] = state_machine__22703__auto__);
(statearr_33874[(1)] = (1));
return statearr_33874;
});
var state_machine__22703__auto____1 = (function (state_33853){while(true){
var ret_value__22704__auto__ = (function (){try{while(true){
var result__22705__auto__ = switch__22702__auto__(state_33853);if(cljs.core.keyword_identical_QMARK_(result__22705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22705__auto__;
}
break;
}
}catch (e33875){if((e33875 instanceof Object))
{var ex__22706__auto__ = e33875;var statearr_33876_33889 = state_33853;(statearr_33876_33889[(5)] = ex__22706__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33853);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33875;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33890 = state_33853;
state_33853 = G__33890;
continue;
}
} else
{return ret_value__22704__auto__;
}
break;
}
});
state_machine__22703__auto__ = function(state_33853){
switch(arguments.length){
case 0:
return state_machine__22703__auto____0.call(this);
case 1:
return state_machine__22703__auto____1.call(this,state_33853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22703__auto____0;
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22703__auto____1;
return state_machine__22703__auto__;
})()
;})(switch__22702__auto__,c__22717__auto___33878,out))
})();var state__22719__auto__ = (function (){var statearr_33877 = (function (){return (f__22718__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22718__auto__.cljs$core$IFn$_invoke$arity$0() : f__22718__auto__.call(null));
})();(statearr_33877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22717__auto___33878);
return statearr_33877;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22719__auto__);
});})(c__22717__auto___33878,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22717__auto___34028 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22717__auto___34028,out){
return (function (){var f__22718__auto__ = (function (){var switch__22702__auto__ = ((function (c__22717__auto___34028,out){
return (function (state_33998){var state_val_33999 = (state_33998[(1)]);if((state_val_33999 === (7)))
{var inst_33994 = (state_33998[(2)]);var state_33998__$1 = state_33998;var statearr_34000_34029 = state_33998__$1;(statearr_34000_34029[(2)] = inst_33994);
(statearr_34000_34029[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33999 === (1)))
{var inst_33961 = (new Array(n));var inst_33962 = inst_33961;var inst_33963 = (0);var state_33998__$1 = (function (){var statearr_34001 = state_33998;(statearr_34001[(7)] = inst_33962);
(statearr_34001[(8)] = inst_33963);
return statearr_34001;
})();var statearr_34002_34030 = state_33998__$1;(statearr_34002_34030[(2)] = null);
(statearr_34002_34030[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33999 === (4)))
{var inst_33966 = (state_33998[(9)]);var inst_33966__$1 = (state_33998[(2)]);var inst_33967 = (inst_33966__$1 == null);var inst_33968 = cljs.core.not(inst_33967);var state_33998__$1 = (function (){var statearr_34003 = state_33998;(statearr_34003[(9)] = inst_33966__$1);
return statearr_34003;
})();if(inst_33968)
{var statearr_34004_34031 = state_33998__$1;(statearr_34004_34031[(1)] = (5));
} else
{var statearr_34005_34032 = state_33998__$1;(statearr_34005_34032[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33999 === (15)))
{var inst_33988 = (state_33998[(2)]);var state_33998__$1 = state_33998;var statearr_34006_34033 = state_33998__$1;(statearr_34006_34033[(2)] = inst_33988);
(statearr_34006_34033[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33999 === (13)))
{var state_33998__$1 = state_33998;var statearr_34007_34034 = state_33998__$1;(statearr_34007_34034[(2)] = null);
(statearr_34007_34034[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33999 === (6)))
{var inst_33963 = (state_33998[(8)]);var inst_33984 = (inst_33963 > (0));var state_33998__$1 = state_33998;if(cljs.core.truth_(inst_33984))
{var statearr_34008_34035 = state_33998__$1;(statearr_34008_34035[(1)] = (12));
} else
{var statearr_34009_34036 = state_33998__$1;(statearr_34009_34036[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33999 === (3)))
{var inst_33996 = (state_33998[(2)]);var state_33998__$1 = state_33998;return cljs.core.async.impl.ioc_helpers.return_chan(state_33998__$1,inst_33996);
} else
{if((state_val_33999 === (12)))
{var inst_33962 = (state_33998[(7)]);var inst_33986 = cljs.core.vec(inst_33962);var state_33998__$1 = state_33998;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33998__$1,(15),out,inst_33986);
} else
{if((state_val_33999 === (2)))
{var state_33998__$1 = state_33998;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33998__$1,(4),ch);
} else
{if((state_val_33999 === (11)))
{var inst_33978 = (state_33998[(2)]);var inst_33979 = (new Array(n));var inst_33962 = inst_33979;var inst_33963 = (0);var state_33998__$1 = (function (){var statearr_34010 = state_33998;(statearr_34010[(7)] = inst_33962);
(statearr_34010[(8)] = inst_33963);
(statearr_34010[(10)] = inst_33978);
return statearr_34010;
})();var statearr_34011_34037 = state_33998__$1;(statearr_34011_34037[(2)] = null);
(statearr_34011_34037[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33999 === (9)))
{var inst_33962 = (state_33998[(7)]);var inst_33976 = cljs.core.vec(inst_33962);var state_33998__$1 = state_33998;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33998__$1,(11),out,inst_33976);
} else
{if((state_val_33999 === (5)))
{var inst_33971 = (state_33998[(11)]);var inst_33962 = (state_33998[(7)]);var inst_33963 = (state_33998[(8)]);var inst_33966 = (state_33998[(9)]);var inst_33970 = (inst_33962[inst_33963] = inst_33966);var inst_33971__$1 = (inst_33963 + (1));var inst_33972 = (inst_33971__$1 < n);var state_33998__$1 = (function (){var statearr_34012 = state_33998;(statearr_34012[(11)] = inst_33971__$1);
(statearr_34012[(12)] = inst_33970);
return statearr_34012;
})();if(cljs.core.truth_(inst_33972))
{var statearr_34013_34038 = state_33998__$1;(statearr_34013_34038[(1)] = (8));
} else
{var statearr_34014_34039 = state_33998__$1;(statearr_34014_34039[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33999 === (14)))
{var inst_33991 = (state_33998[(2)]);var inst_33992 = cljs.core.async.close_BANG_(out);var state_33998__$1 = (function (){var statearr_34016 = state_33998;(statearr_34016[(13)] = inst_33991);
return statearr_34016;
})();var statearr_34017_34040 = state_33998__$1;(statearr_34017_34040[(2)] = inst_33992);
(statearr_34017_34040[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33999 === (10)))
{var inst_33982 = (state_33998[(2)]);var state_33998__$1 = state_33998;var statearr_34018_34041 = state_33998__$1;(statearr_34018_34041[(2)] = inst_33982);
(statearr_34018_34041[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33999 === (8)))
{var inst_33971 = (state_33998[(11)]);var inst_33962 = (state_33998[(7)]);var tmp34015 = inst_33962;var inst_33962__$1 = tmp34015;var inst_33963 = inst_33971;var state_33998__$1 = (function (){var statearr_34019 = state_33998;(statearr_34019[(7)] = inst_33962__$1);
(statearr_34019[(8)] = inst_33963);
return statearr_34019;
})();var statearr_34020_34042 = state_33998__$1;(statearr_34020_34042[(2)] = null);
(statearr_34020_34042[(1)] = (2));
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
});})(c__22717__auto___34028,out))
;return ((function (switch__22702__auto__,c__22717__auto___34028,out){
return (function() {
var state_machine__22703__auto__ = null;
var state_machine__22703__auto____0 = (function (){var statearr_34024 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34024[(0)] = state_machine__22703__auto__);
(statearr_34024[(1)] = (1));
return statearr_34024;
});
var state_machine__22703__auto____1 = (function (state_33998){while(true){
var ret_value__22704__auto__ = (function (){try{while(true){
var result__22705__auto__ = switch__22702__auto__(state_33998);if(cljs.core.keyword_identical_QMARK_(result__22705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22705__auto__;
}
break;
}
}catch (e34025){if((e34025 instanceof Object))
{var ex__22706__auto__ = e34025;var statearr_34026_34043 = state_33998;(statearr_34026_34043[(5)] = ex__22706__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33998);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34025;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34044 = state_33998;
state_33998 = G__34044;
continue;
}
} else
{return ret_value__22704__auto__;
}
break;
}
});
state_machine__22703__auto__ = function(state_33998){
switch(arguments.length){
case 0:
return state_machine__22703__auto____0.call(this);
case 1:
return state_machine__22703__auto____1.call(this,state_33998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22703__auto____0;
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22703__auto____1;
return state_machine__22703__auto__;
})()
;})(switch__22702__auto__,c__22717__auto___34028,out))
})();var state__22719__auto__ = (function (){var statearr_34027 = (function (){return (f__22718__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22718__auto__.cljs$core$IFn$_invoke$arity$0() : f__22718__auto__.call(null));
})();(statearr_34027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22717__auto___34028);
return statearr_34027;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22719__auto__);
});})(c__22717__auto___34028,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22717__auto___34192 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22717__auto___34192,out){
return (function (){var f__22718__auto__ = (function (){var switch__22702__auto__ = ((function (c__22717__auto___34192,out){
return (function (state_34161){var state_val_34162 = (state_34161[(1)]);if((state_val_34162 === (7)))
{var inst_34157 = (state_34161[(2)]);var state_34161__$1 = state_34161;var statearr_34163_34193 = state_34161__$1;(statearr_34163_34193[(2)] = inst_34157);
(statearr_34163_34193[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34162 === (1)))
{var inst_34120 = [];var inst_34121 = inst_34120;var inst_34122 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_34161__$1 = (function (){var statearr_34164 = state_34161;(statearr_34164[(7)] = inst_34122);
(statearr_34164[(8)] = inst_34121);
return statearr_34164;
})();var statearr_34165_34194 = state_34161__$1;(statearr_34165_34194[(2)] = null);
(statearr_34165_34194[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34162 === (4)))
{var inst_34125 = (state_34161[(9)]);var inst_34125__$1 = (state_34161[(2)]);var inst_34126 = (inst_34125__$1 == null);var inst_34127 = cljs.core.not(inst_34126);var state_34161__$1 = (function (){var statearr_34166 = state_34161;(statearr_34166[(9)] = inst_34125__$1);
return statearr_34166;
})();if(inst_34127)
{var statearr_34167_34195 = state_34161__$1;(statearr_34167_34195[(1)] = (5));
} else
{var statearr_34168_34196 = state_34161__$1;(statearr_34168_34196[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34162 === (15)))
{var inst_34151 = (state_34161[(2)]);var state_34161__$1 = state_34161;var statearr_34169_34197 = state_34161__$1;(statearr_34169_34197[(2)] = inst_34151);
(statearr_34169_34197[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34162 === (13)))
{var state_34161__$1 = state_34161;var statearr_34170_34198 = state_34161__$1;(statearr_34170_34198[(2)] = null);
(statearr_34170_34198[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34162 === (6)))
{var inst_34121 = (state_34161[(8)]);var inst_34146 = inst_34121.length;var inst_34147 = (inst_34146 > (0));var state_34161__$1 = state_34161;if(cljs.core.truth_(inst_34147))
{var statearr_34171_34199 = state_34161__$1;(statearr_34171_34199[(1)] = (12));
} else
{var statearr_34172_34200 = state_34161__$1;(statearr_34172_34200[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34162 === (3)))
{var inst_34159 = (state_34161[(2)]);var state_34161__$1 = state_34161;return cljs.core.async.impl.ioc_helpers.return_chan(state_34161__$1,inst_34159);
} else
{if((state_val_34162 === (12)))
{var inst_34121 = (state_34161[(8)]);var inst_34149 = cljs.core.vec(inst_34121);var state_34161__$1 = state_34161;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34161__$1,(15),out,inst_34149);
} else
{if((state_val_34162 === (2)))
{var state_34161__$1 = state_34161;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34161__$1,(4),ch);
} else
{if((state_val_34162 === (11)))
{var inst_34125 = (state_34161[(9)]);var inst_34129 = (state_34161[(10)]);var inst_34139 = (state_34161[(2)]);var inst_34140 = [];var inst_34141 = inst_34140.push(inst_34125);var inst_34121 = inst_34140;var inst_34122 = inst_34129;var state_34161__$1 = (function (){var statearr_34173 = state_34161;(statearr_34173[(7)] = inst_34122);
(statearr_34173[(8)] = inst_34121);
(statearr_34173[(11)] = inst_34139);
(statearr_34173[(12)] = inst_34141);
return statearr_34173;
})();var statearr_34174_34201 = state_34161__$1;(statearr_34174_34201[(2)] = null);
(statearr_34174_34201[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34162 === (9)))
{var inst_34121 = (state_34161[(8)]);var inst_34137 = cljs.core.vec(inst_34121);var state_34161__$1 = state_34161;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34161__$1,(11),out,inst_34137);
} else
{if((state_val_34162 === (5)))
{var inst_34122 = (state_34161[(7)]);var inst_34125 = (state_34161[(9)]);var inst_34129 = (state_34161[(10)]);var inst_34129__$1 = (function (){var G__34175 = inst_34125;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34175) : f.call(null,G__34175));
})();var inst_34130 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34129__$1,inst_34122);var inst_34131 = cljs.core.keyword_identical_QMARK_(inst_34122,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_34132 = (inst_34130) || (inst_34131);var state_34161__$1 = (function (){var statearr_34176 = state_34161;(statearr_34176[(10)] = inst_34129__$1);
return statearr_34176;
})();if(cljs.core.truth_(inst_34132))
{var statearr_34177_34202 = state_34161__$1;(statearr_34177_34202[(1)] = (8));
} else
{var statearr_34178_34203 = state_34161__$1;(statearr_34178_34203[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34162 === (14)))
{var inst_34154 = (state_34161[(2)]);var inst_34155 = cljs.core.async.close_BANG_(out);var state_34161__$1 = (function (){var statearr_34180 = state_34161;(statearr_34180[(13)] = inst_34154);
return statearr_34180;
})();var statearr_34181_34204 = state_34161__$1;(statearr_34181_34204[(2)] = inst_34155);
(statearr_34181_34204[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34162 === (10)))
{var inst_34144 = (state_34161[(2)]);var state_34161__$1 = state_34161;var statearr_34182_34205 = state_34161__$1;(statearr_34182_34205[(2)] = inst_34144);
(statearr_34182_34205[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34162 === (8)))
{var inst_34121 = (state_34161[(8)]);var inst_34125 = (state_34161[(9)]);var inst_34129 = (state_34161[(10)]);var inst_34134 = inst_34121.push(inst_34125);var tmp34179 = inst_34121;var inst_34121__$1 = tmp34179;var inst_34122 = inst_34129;var state_34161__$1 = (function (){var statearr_34183 = state_34161;(statearr_34183[(7)] = inst_34122);
(statearr_34183[(8)] = inst_34121__$1);
(statearr_34183[(14)] = inst_34134);
return statearr_34183;
})();var statearr_34184_34206 = state_34161__$1;(statearr_34184_34206[(2)] = null);
(statearr_34184_34206[(1)] = (2));
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
});})(c__22717__auto___34192,out))
;return ((function (switch__22702__auto__,c__22717__auto___34192,out){
return (function() {
var state_machine__22703__auto__ = null;
var state_machine__22703__auto____0 = (function (){var statearr_34188 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34188[(0)] = state_machine__22703__auto__);
(statearr_34188[(1)] = (1));
return statearr_34188;
});
var state_machine__22703__auto____1 = (function (state_34161){while(true){
var ret_value__22704__auto__ = (function (){try{while(true){
var result__22705__auto__ = switch__22702__auto__(state_34161);if(cljs.core.keyword_identical_QMARK_(result__22705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22705__auto__;
}
break;
}
}catch (e34189){if((e34189 instanceof Object))
{var ex__22706__auto__ = e34189;var statearr_34190_34207 = state_34161;(statearr_34190_34207[(5)] = ex__22706__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34161);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34189;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34208 = state_34161;
state_34161 = G__34208;
continue;
}
} else
{return ret_value__22704__auto__;
}
break;
}
});
state_machine__22703__auto__ = function(state_34161){
switch(arguments.length){
case 0:
return state_machine__22703__auto____0.call(this);
case 1:
return state_machine__22703__auto____1.call(this,state_34161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22703__auto____0;
state_machine__22703__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22703__auto____1;
return state_machine__22703__auto__;
})()
;})(switch__22702__auto__,c__22717__auto___34192,out))
})();var state__22719__auto__ = (function (){var statearr_34191 = (function (){return (f__22718__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22718__auto__.cljs$core$IFn$_invoke$arity$0() : f__22718__auto__.call(null));
})();(statearr_34191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22717__auto___34192);
return statearr_34191;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22719__auto__);
});})(c__22717__auto___34192,out))
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