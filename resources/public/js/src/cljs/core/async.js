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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t31702 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31702 = (function (f,fn_handler,meta31703){
this.f = f;
this.fn_handler = fn_handler;
this.meta31703 = meta31703;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31702.cljs$lang$type = true;
cljs.core.async.t31702.cljs$lang$ctorStr = "cljs.core.async/t31702";
cljs.core.async.t31702.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core.async/t31702");
});
cljs.core.async.t31702.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31702.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t31702.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t31702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31704){var self__ = this;
var _31704__$1 = this;return self__.meta31703;
});
cljs.core.async.t31702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31704,meta31703__$1){var self__ = this;
var _31704__$1 = this;return (new cljs.core.async.t31702(self__.f,self__.fn_handler,meta31703__$1));
});
cljs.core.async.__GT_t31702 = (function __GT_t31702(f__$1,fn_handler__$1,meta31703){return (new cljs.core.async.t31702(f__$1,fn_handler__$1,meta31703));
});
}
return (new cljs.core.async.t31702(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__31706 = buff;if(G__31706)
{var bit__20917__auto__ = null;if(cljs.core.truth_((function (){var or__19663__auto__ = bit__20917__auto__;if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return G__31706.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__31706.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__31706);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__31706);
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
{var val_31717 = (function (){var G__31714 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31714) : cljs.core.deref.call(null,G__31714));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__31715_31718 = val_31717;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__31715_31718) : fn1.call(null,G__31715_31718));
} else
{cljs.core.async.impl.dispatch.run(((function (val_31717,ret){
return (function (){var G__31716 = val_31717;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__31716) : fn1.call(null,G__31716));
});})(val_31717,ret))
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__19621__auto__ = ret;if(cljs.core.truth_(and__19621__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__19621__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__21341__auto___31726 = n;var x_31727 = (0);while(true){
if((x_31727 < n__21341__auto___31726))
{(a[x_31727] = (0));
{
var G__31728 = (x_31727 + (1));
x_31727 = G__31728;
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
var G__31729 = (i + (1));
i = G__31729;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__31737 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__31737) : cljs.core.atom.call(null,G__31737));
})();if(typeof cljs.core.async.t31738 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31738 = (function (flag,alt_flag,meta31739){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta31739 = meta31739;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31738.cljs$lang$type = true;
cljs.core.async.t31738.cljs$lang$ctorStr = "cljs.core.async/t31738";
cljs.core.async.t31738.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core.async/t31738");
});})(flag))
;
cljs.core.async.t31738.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31738.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__31741 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31741) : cljs.core.deref.call(null,G__31741));
});})(flag))
;
cljs.core.async.t31738.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__31742_31744 = self__.flag;var G__31743_31745 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__31742_31744,G__31743_31745) : cljs.core.reset_BANG_.call(null,G__31742_31744,G__31743_31745));
return true;
});})(flag))
;
cljs.core.async.t31738.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31740){var self__ = this;
var _31740__$1 = this;return self__.meta31739;
});})(flag))
;
cljs.core.async.t31738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31740,meta31739__$1){var self__ = this;
var _31740__$1 = this;return (new cljs.core.async.t31738(self__.flag,self__.alt_flag,meta31739__$1));
});})(flag))
;
cljs.core.async.__GT_t31738 = ((function (flag){
return (function __GT_t31738(flag__$1,alt_flag__$1,meta31739){return (new cljs.core.async.t31738(flag__$1,alt_flag__$1,meta31739));
});})(flag))
;
}
return (new cljs.core.async.t31738(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t31749 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31749 = (function (cb,flag,alt_handler,meta31750){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta31750 = meta31750;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31749.cljs$lang$type = true;
cljs.core.async.t31749.cljs$lang$ctorStr = "cljs.core.async/t31749";
cljs.core.async.t31749.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core.async/t31749");
});
cljs.core.async.t31749.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31749.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t31749.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t31749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31751){var self__ = this;
var _31751__$1 = this;return self__.meta31750;
});
cljs.core.async.t31749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31751,meta31750__$1){var self__ = this;
var _31751__$1 = this;return (new cljs.core.async.t31749(self__.cb,self__.flag,self__.alt_handler,meta31750__$1));
});
cljs.core.async.__GT_t31749 = (function __GT_t31749(cb__$1,flag__$1,alt_handler__$1,meta31750){return (new cljs.core.async.t31749(cb__$1,flag__$1,alt_handler__$1,meta31750));
});
}
return (new cljs.core.async.t31749(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__31758 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__31758) : port.call(null,G__31758));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__31759 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__31759) : port.call(null,G__31759));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){var G__31760 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31760) : fret.call(null,G__31760));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31752_SHARP_){var G__31761 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31752_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31761) : fret.call(null,G__31761));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__31762 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31762) : cljs.core.deref.call(null,G__31762));
})(),(function (){var or__19663__auto__ = wport;if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__31763 = (i + (1));
i = G__31763;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__19663__auto__ = ret;if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__19621__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__19621__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__19621__auto__;
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
var alts_BANG___delegate = function (ports,p__31764){var map__31766 = p__31764;var map__31766__$1 = ((cljs.core.seq_QMARK_(map__31766))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31766):map__31766);var opts = map__31766__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

};
var alts_BANG_ = function (ports,var_args){
var p__31764 = null;if (arguments.length > 1) {
  p__31764 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__31764);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__31767){
var ports = cljs.core.first(arglist__31767);
var p__31764 = cljs.core.rest(arglist__31767);
return alts_BANG___delegate(ports,p__31764);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t31781 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31781 = (function (ch,f,map_LT_,meta31782){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31782 = meta31782;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31781.cljs$lang$type = true;
cljs.core.async.t31781.cljs$lang$ctorStr = "cljs.core.async/t31781";
cljs.core.async.t31781.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core.async/t31781");
});
cljs.core.async.t31781.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31781.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t31781.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31781.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t31784 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31784 = (function (fn1,_,meta31782,ch,f,map_LT_,meta31785){
this.fn1 = fn1;
this._ = _;
this.meta31782 = meta31782;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31785 = meta31785;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31784.cljs$lang$type = true;
cljs.core.async.t31784.cljs$lang$ctorStr = "cljs.core.async/t31784";
cljs.core.async.t31784.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core.async/t31784");
});})(___$1))
;
cljs.core.async.t31784.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31784.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t31784.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var G__31787 = self__.fn1;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(G__31787) : cljs.core.async.impl.protocols.lock_id.call(null,G__31787));
});})(___$1))
;
cljs.core.async.t31784.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__31768_SHARP_){var G__31788 = (((p1__31768_SHARP_ == null))?null:(function (){var G__31789 = p1__31768_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31789) : self__.f.call(null,G__31789));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31788) : f1.call(null,G__31788));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t31784.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31786){var self__ = this;
var _31786__$1 = this;return self__.meta31785;
});})(___$1))
;
cljs.core.async.t31784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31786,meta31785__$1){var self__ = this;
var _31786__$1 = this;return (new cljs.core.async.t31784(self__.fn1,self__._,self__.meta31782,self__.ch,self__.f,self__.map_LT_,meta31785__$1));
});})(___$1))
;
cljs.core.async.__GT_t31784 = ((function (___$1){
return (function __GT_t31784(fn1__$1,___$2,meta31782__$1,ch__$2,f__$2,map_LT___$2,meta31785){return (new cljs.core.async.t31784(fn1__$1,___$2,meta31782__$1,ch__$2,f__$2,map_LT___$2,meta31785));
});})(___$1))
;
}
return (new cljs.core.async.t31784(fn1,___$1,self__.meta31782,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__19621__auto__ = ret;if(cljs.core.truth_(and__19621__auto__))
{return !(((function (){var G__31790 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31790) : cljs.core.deref.call(null,G__31790));
})() == null));
} else
{return and__19621__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__31791 = (function (){var G__31792 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31792) : cljs.core.deref.call(null,G__31792));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31791) : self__.f.call(null,G__31791));
})());
} else
{return ret;
}
});
cljs.core.async.t31781.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31781.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t31781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31783){var self__ = this;
var _31783__$1 = this;return self__.meta31782;
});
cljs.core.async.t31781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31783,meta31782__$1){var self__ = this;
var _31783__$1 = this;return (new cljs.core.async.t31781(self__.ch,self__.f,self__.map_LT_,meta31782__$1));
});
cljs.core.async.__GT_t31781 = (function __GT_t31781(ch__$1,f__$1,map_LT___$1,meta31782){return (new cljs.core.async.t31781(ch__$1,f__$1,map_LT___$1,meta31782));
});
}
return (new cljs.core.async.t31781(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t31797 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31797 = (function (ch,f,map_GT_,meta31798){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta31798 = meta31798;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31797.cljs$lang$type = true;
cljs.core.async.t31797.cljs$lang$ctorStr = "cljs.core.async/t31797";
cljs.core.async.t31797.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core.async/t31797");
});
cljs.core.async.t31797.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31797.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__31800 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31800) : self__.f.call(null,G__31800));
})(),fn0);
});
cljs.core.async.t31797.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31797.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t31797.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31797.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t31797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31799){var self__ = this;
var _31799__$1 = this;return self__.meta31798;
});
cljs.core.async.t31797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31799,meta31798__$1){var self__ = this;
var _31799__$1 = this;return (new cljs.core.async.t31797(self__.ch,self__.f,self__.map_GT_,meta31798__$1));
});
cljs.core.async.__GT_t31797 = (function __GT_t31797(ch__$1,f__$1,map_GT___$1,meta31798){return (new cljs.core.async.t31797(ch__$1,f__$1,map_GT___$1,meta31798));
});
}
return (new cljs.core.async.t31797(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t31805 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31805 = (function (ch,p,filter_GT_,meta31806){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta31806 = meta31806;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31805.cljs$lang$type = true;
cljs.core.async.t31805.cljs$lang$ctorStr = "cljs.core.async/t31805";
cljs.core.async.t31805.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core.async/t31805");
});
cljs.core.async.t31805.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31805.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__31808 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__31808) : self__.p.call(null,G__31808));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t31805.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31805.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t31805.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31805.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t31805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31807){var self__ = this;
var _31807__$1 = this;return self__.meta31806;
});
cljs.core.async.t31805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31807,meta31806__$1){var self__ = this;
var _31807__$1 = this;return (new cljs.core.async.t31805(self__.ch,self__.p,self__.filter_GT_,meta31806__$1));
});
cljs.core.async.__GT_t31805 = (function __GT_t31805(ch__$1,p__$1,filter_GT___$1,meta31806){return (new cljs.core.async.t31805(ch__$1,p__$1,filter_GT___$1,meta31806));
});
}
return (new cljs.core.async.t31805(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22986__auto___31904 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22986__auto___31904,out){
return (function (){var f__22987__auto__ = (function (){var switch__22971__auto__ = ((function (c__22986__auto___31904,out){
return (function (state_31882){var state_val_31883 = (state_31882[(1)]);if((state_val_31883 === (7)))
{var inst_31878 = (state_31882[(2)]);var state_31882__$1 = state_31882;var statearr_31884_31905 = state_31882__$1;(statearr_31884_31905[(2)] = inst_31878);
(statearr_31884_31905[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31883 === (1)))
{var state_31882__$1 = state_31882;var statearr_31885_31906 = state_31882__$1;(statearr_31885_31906[(2)] = null);
(statearr_31885_31906[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31883 === (4)))
{var inst_31864 = (state_31882[(7)]);var inst_31864__$1 = (state_31882[(2)]);var inst_31865 = (inst_31864__$1 == null);var state_31882__$1 = (function (){var statearr_31886 = state_31882;(statearr_31886[(7)] = inst_31864__$1);
return statearr_31886;
})();if(cljs.core.truth_(inst_31865))
{var statearr_31887_31907 = state_31882__$1;(statearr_31887_31907[(1)] = (5));
} else
{var statearr_31888_31908 = state_31882__$1;(statearr_31888_31908[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31883 === (6)))
{var inst_31864 = (state_31882[(7)]);var inst_31869 = (function (){var G__31889 = inst_31864;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__31889) : p.call(null,G__31889));
})();var state_31882__$1 = state_31882;if(cljs.core.truth_(inst_31869))
{var statearr_31890_31909 = state_31882__$1;(statearr_31890_31909[(1)] = (8));
} else
{var statearr_31891_31910 = state_31882__$1;(statearr_31891_31910[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31883 === (3)))
{var inst_31880 = (state_31882[(2)]);var state_31882__$1 = state_31882;return cljs.core.async.impl.ioc_helpers.return_chan(state_31882__$1,inst_31880);
} else
{if((state_val_31883 === (2)))
{var state_31882__$1 = state_31882;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31882__$1,(4),ch);
} else
{if((state_val_31883 === (11)))
{var inst_31872 = (state_31882[(2)]);var state_31882__$1 = state_31882;var statearr_31892_31911 = state_31882__$1;(statearr_31892_31911[(2)] = inst_31872);
(statearr_31892_31911[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31883 === (9)))
{var state_31882__$1 = state_31882;var statearr_31893_31912 = state_31882__$1;(statearr_31893_31912[(2)] = null);
(statearr_31893_31912[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31883 === (5)))
{var inst_31867 = cljs.core.async.close_BANG_(out);var state_31882__$1 = state_31882;var statearr_31894_31913 = state_31882__$1;(statearr_31894_31913[(2)] = inst_31867);
(statearr_31894_31913[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31883 === (10)))
{var inst_31875 = (state_31882[(2)]);var state_31882__$1 = (function (){var statearr_31895 = state_31882;(statearr_31895[(8)] = inst_31875);
return statearr_31895;
})();var statearr_31896_31914 = state_31882__$1;(statearr_31896_31914[(2)] = null);
(statearr_31896_31914[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31883 === (8)))
{var inst_31864 = (state_31882[(7)]);var state_31882__$1 = state_31882;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31882__$1,(11),out,inst_31864);
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
});})(c__22986__auto___31904,out))
;return ((function (switch__22971__auto__,c__22986__auto___31904,out){
return (function() {
var state_machine__22972__auto__ = null;
var state_machine__22972__auto____0 = (function (){var statearr_31900 = [null,null,null,null,null,null,null,null,null];(statearr_31900[(0)] = state_machine__22972__auto__);
(statearr_31900[(1)] = (1));
return statearr_31900;
});
var state_machine__22972__auto____1 = (function (state_31882){while(true){
var ret_value__22973__auto__ = (function (){try{while(true){
var result__22974__auto__ = switch__22971__auto__(state_31882);if(cljs.core.keyword_identical_QMARK_(result__22974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22974__auto__;
}
break;
}
}catch (e31901){if((e31901 instanceof Object))
{var ex__22975__auto__ = e31901;var statearr_31902_31915 = state_31882;(statearr_31902_31915[(5)] = ex__22975__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_31882);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31901;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31916 = state_31882;
state_31882 = G__31916;
continue;
}
} else
{return ret_value__22973__auto__;
}
break;
}
});
state_machine__22972__auto__ = function(state_31882){
switch(arguments.length){
case 0:
return state_machine__22972__auto____0.call(this);
case 1:
return state_machine__22972__auto____1.call(this,state_31882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22972__auto____0;
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22972__auto____1;
return state_machine__22972__auto__;
})()
;})(switch__22971__auto__,c__22986__auto___31904,out))
})();var state__22988__auto__ = (function (){var statearr_31903 = (function (){return (f__22987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22987__auto__.cljs$core$IFn$_invoke$arity$0() : f__22987__auto__.call(null));
})();(statearr_31903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22986__auto___31904);
return statearr_31903;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22988__auto__);
});})(c__22986__auto___31904,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__22986__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22986__auto__){
return (function (){var f__22987__auto__ = (function (){var switch__22971__auto__ = ((function (c__22986__auto__){
return (function (state_32072){var state_val_32073 = (state_32072[(1)]);if((state_val_32073 === (7)))
{var inst_32068 = (state_32072[(2)]);var state_32072__$1 = state_32072;var statearr_32074_32112 = state_32072__$1;(statearr_32074_32112[(2)] = inst_32068);
(statearr_32074_32112[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32073 === (20)))
{var inst_32043 = (state_32072[(7)]);var inst_32054 = (state_32072[(2)]);var inst_32055 = cljs.core.next(inst_32043);var inst_32029 = inst_32055;var inst_32030 = null;var inst_32031 = (0);var inst_32032 = (0);var state_32072__$1 = (function (){var statearr_32075 = state_32072;(statearr_32075[(8)] = inst_32032);
(statearr_32075[(9)] = inst_32030);
(statearr_32075[(10)] = inst_32054);
(statearr_32075[(11)] = inst_32031);
(statearr_32075[(12)] = inst_32029);
return statearr_32075;
})();var statearr_32076_32113 = state_32072__$1;(statearr_32076_32113[(2)] = null);
(statearr_32076_32113[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32073 === (1)))
{var state_32072__$1 = state_32072;var statearr_32077_32114 = state_32072__$1;(statearr_32077_32114[(2)] = null);
(statearr_32077_32114[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32073 === (4)))
{var inst_32018 = (state_32072[(13)]);var inst_32018__$1 = (state_32072[(2)]);var inst_32019 = (inst_32018__$1 == null);var state_32072__$1 = (function (){var statearr_32081 = state_32072;(statearr_32081[(13)] = inst_32018__$1);
return statearr_32081;
})();if(cljs.core.truth_(inst_32019))
{var statearr_32082_32115 = state_32072__$1;(statearr_32082_32115[(1)] = (5));
} else
{var statearr_32083_32116 = state_32072__$1;(statearr_32083_32116[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32073 === (15)))
{var state_32072__$1 = state_32072;var statearr_32084_32117 = state_32072__$1;(statearr_32084_32117[(2)] = null);
(statearr_32084_32117[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32073 === (13)))
{var inst_32032 = (state_32072[(8)]);var inst_32030 = (state_32072[(9)]);var inst_32031 = (state_32072[(11)]);var inst_32029 = (state_32072[(12)]);var inst_32039 = (state_32072[(2)]);var inst_32040 = (inst_32032 + (1));var tmp32078 = inst_32030;var tmp32079 = inst_32031;var tmp32080 = inst_32029;var inst_32029__$1 = tmp32080;var inst_32030__$1 = tmp32078;var inst_32031__$1 = tmp32079;var inst_32032__$1 = inst_32040;var state_32072__$1 = (function (){var statearr_32085 = state_32072;(statearr_32085[(8)] = inst_32032__$1);
(statearr_32085[(9)] = inst_32030__$1);
(statearr_32085[(14)] = inst_32039);
(statearr_32085[(11)] = inst_32031__$1);
(statearr_32085[(12)] = inst_32029__$1);
return statearr_32085;
})();var statearr_32086_32118 = state_32072__$1;(statearr_32086_32118[(2)] = null);
(statearr_32086_32118[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32073 === (6)))
{var inst_32018 = (state_32072[(13)]);var inst_32023 = (function (){var G__32087 = inst_32018;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__32087) : f.call(null,G__32087));
})();var inst_32028 = cljs.core.seq(inst_32023);var inst_32029 = inst_32028;var inst_32030 = null;var inst_32031 = (0);var inst_32032 = (0);var state_32072__$1 = (function (){var statearr_32088 = state_32072;(statearr_32088[(8)] = inst_32032);
(statearr_32088[(9)] = inst_32030);
(statearr_32088[(11)] = inst_32031);
(statearr_32088[(12)] = inst_32029);
return statearr_32088;
})();var statearr_32089_32119 = state_32072__$1;(statearr_32089_32119[(2)] = null);
(statearr_32089_32119[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32073 === (17)))
{var inst_32043 = (state_32072[(7)]);var inst_32047 = cljs.core.chunk_first(inst_32043);var inst_32048 = cljs.core.chunk_rest(inst_32043);var inst_32049 = cljs.core.count(inst_32047);var inst_32029 = inst_32048;var inst_32030 = inst_32047;var inst_32031 = inst_32049;var inst_32032 = (0);var state_32072__$1 = (function (){var statearr_32090 = state_32072;(statearr_32090[(8)] = inst_32032);
(statearr_32090[(9)] = inst_32030);
(statearr_32090[(11)] = inst_32031);
(statearr_32090[(12)] = inst_32029);
return statearr_32090;
})();var statearr_32091_32120 = state_32072__$1;(statearr_32091_32120[(2)] = null);
(statearr_32091_32120[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32073 === (3)))
{var inst_32070 = (state_32072[(2)]);var state_32072__$1 = state_32072;return cljs.core.async.impl.ioc_helpers.return_chan(state_32072__$1,inst_32070);
} else
{if((state_val_32073 === (12)))
{var inst_32063 = (state_32072[(2)]);var state_32072__$1 = state_32072;var statearr_32092_32121 = state_32072__$1;(statearr_32092_32121[(2)] = inst_32063);
(statearr_32092_32121[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32073 === (2)))
{var state_32072__$1 = state_32072;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32072__$1,(4),in$);
} else
{if((state_val_32073 === (19)))
{var inst_32058 = (state_32072[(2)]);var state_32072__$1 = state_32072;var statearr_32093_32122 = state_32072__$1;(statearr_32093_32122[(2)] = inst_32058);
(statearr_32093_32122[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32073 === (11)))
{var inst_32043 = (state_32072[(7)]);var inst_32029 = (state_32072[(12)]);var inst_32043__$1 = cljs.core.seq(inst_32029);var state_32072__$1 = (function (){var statearr_32094 = state_32072;(statearr_32094[(7)] = inst_32043__$1);
return statearr_32094;
})();if(inst_32043__$1)
{var statearr_32095_32123 = state_32072__$1;(statearr_32095_32123[(1)] = (14));
} else
{var statearr_32096_32124 = state_32072__$1;(statearr_32096_32124[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32073 === (9)))
{var inst_32065 = (state_32072[(2)]);var state_32072__$1 = (function (){var statearr_32097 = state_32072;(statearr_32097[(15)] = inst_32065);
return statearr_32097;
})();var statearr_32098_32125 = state_32072__$1;(statearr_32098_32125[(2)] = null);
(statearr_32098_32125[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32073 === (5)))
{var inst_32021 = cljs.core.async.close_BANG_(out);var state_32072__$1 = state_32072;var statearr_32099_32126 = state_32072__$1;(statearr_32099_32126[(2)] = inst_32021);
(statearr_32099_32126[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32073 === (14)))
{var inst_32043 = (state_32072[(7)]);var inst_32045 = cljs.core.chunked_seq_QMARK_(inst_32043);var state_32072__$1 = state_32072;if(inst_32045)
{var statearr_32100_32127 = state_32072__$1;(statearr_32100_32127[(1)] = (17));
} else
{var statearr_32101_32128 = state_32072__$1;(statearr_32101_32128[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32073 === (16)))
{var inst_32061 = (state_32072[(2)]);var state_32072__$1 = state_32072;var statearr_32102_32129 = state_32072__$1;(statearr_32102_32129[(2)] = inst_32061);
(statearr_32102_32129[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32073 === (10)))
{var inst_32032 = (state_32072[(8)]);var inst_32030 = (state_32072[(9)]);var inst_32037 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32030,inst_32032);var state_32072__$1 = state_32072;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32072__$1,(13),out,inst_32037);
} else
{if((state_val_32073 === (18)))
{var inst_32043 = (state_32072[(7)]);var inst_32052 = cljs.core.first(inst_32043);var state_32072__$1 = state_32072;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32072__$1,(20),out,inst_32052);
} else
{if((state_val_32073 === (8)))
{var inst_32032 = (state_32072[(8)]);var inst_32031 = (state_32072[(11)]);var inst_32034 = (inst_32032 < inst_32031);var inst_32035 = inst_32034;var state_32072__$1 = state_32072;if(cljs.core.truth_(inst_32035))
{var statearr_32103_32130 = state_32072__$1;(statearr_32103_32130[(1)] = (10));
} else
{var statearr_32104_32131 = state_32072__$1;(statearr_32104_32131[(1)] = (11));
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
});})(c__22986__auto__))
;return ((function (switch__22971__auto__,c__22986__auto__){
return (function() {
var state_machine__22972__auto__ = null;
var state_machine__22972__auto____0 = (function (){var statearr_32108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32108[(0)] = state_machine__22972__auto__);
(statearr_32108[(1)] = (1));
return statearr_32108;
});
var state_machine__22972__auto____1 = (function (state_32072){while(true){
var ret_value__22973__auto__ = (function (){try{while(true){
var result__22974__auto__ = switch__22971__auto__(state_32072);if(cljs.core.keyword_identical_QMARK_(result__22974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22974__auto__;
}
break;
}
}catch (e32109){if((e32109 instanceof Object))
{var ex__22975__auto__ = e32109;var statearr_32110_32132 = state_32072;(statearr_32110_32132[(5)] = ex__22975__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_32072);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32109;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32133 = state_32072;
state_32072 = G__32133;
continue;
}
} else
{return ret_value__22973__auto__;
}
break;
}
});
state_machine__22972__auto__ = function(state_32072){
switch(arguments.length){
case 0:
return state_machine__22972__auto____0.call(this);
case 1:
return state_machine__22972__auto____1.call(this,state_32072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22972__auto____0;
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22972__auto____1;
return state_machine__22972__auto__;
})()
;})(switch__22971__auto__,c__22986__auto__))
})();var state__22988__auto__ = (function (){var statearr_32111 = (function (){return (f__22987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22987__auto__.cljs$core$IFn$_invoke$arity$0() : f__22987__auto__.call(null));
})();(statearr_32111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22986__auto__);
return statearr_32111;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22988__auto__);
});})(c__22986__auto__))
);
return c__22986__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__22986__auto___32223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22986__auto___32223){
return (function (){var f__22987__auto__ = (function (){var switch__22971__auto__ = ((function (c__22986__auto___32223){
return (function (state_32202){var state_val_32203 = (state_32202[(1)]);if((state_val_32203 === (7)))
{var inst_32198 = (state_32202[(2)]);var state_32202__$1 = state_32202;var statearr_32204_32224 = state_32202__$1;(statearr_32204_32224[(2)] = inst_32198);
(statearr_32204_32224[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32203 === (1)))
{var state_32202__$1 = state_32202;var statearr_32205_32225 = state_32202__$1;(statearr_32205_32225[(2)] = null);
(statearr_32205_32225[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32203 === (4)))
{var inst_32185 = (state_32202[(7)]);var inst_32185__$1 = (state_32202[(2)]);var inst_32186 = (inst_32185__$1 == null);var state_32202__$1 = (function (){var statearr_32206 = state_32202;(statearr_32206[(7)] = inst_32185__$1);
return statearr_32206;
})();if(cljs.core.truth_(inst_32186))
{var statearr_32207_32226 = state_32202__$1;(statearr_32207_32226[(1)] = (5));
} else
{var statearr_32208_32227 = state_32202__$1;(statearr_32208_32227[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32203 === (6)))
{var inst_32185 = (state_32202[(7)]);var state_32202__$1 = state_32202;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32202__$1,(11),to,inst_32185);
} else
{if((state_val_32203 === (3)))
{var inst_32200 = (state_32202[(2)]);var state_32202__$1 = state_32202;return cljs.core.async.impl.ioc_helpers.return_chan(state_32202__$1,inst_32200);
} else
{if((state_val_32203 === (2)))
{var state_32202__$1 = state_32202;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32202__$1,(4),from);
} else
{if((state_val_32203 === (11)))
{var inst_32195 = (state_32202[(2)]);var state_32202__$1 = (function (){var statearr_32209 = state_32202;(statearr_32209[(8)] = inst_32195);
return statearr_32209;
})();var statearr_32210_32228 = state_32202__$1;(statearr_32210_32228[(2)] = null);
(statearr_32210_32228[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32203 === (9)))
{var state_32202__$1 = state_32202;var statearr_32211_32229 = state_32202__$1;(statearr_32211_32229[(2)] = null);
(statearr_32211_32229[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32203 === (5)))
{var state_32202__$1 = state_32202;if(cljs.core.truth_(close_QMARK_))
{var statearr_32212_32230 = state_32202__$1;(statearr_32212_32230[(1)] = (8));
} else
{var statearr_32213_32231 = state_32202__$1;(statearr_32213_32231[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32203 === (10)))
{var inst_32192 = (state_32202[(2)]);var state_32202__$1 = state_32202;var statearr_32214_32232 = state_32202__$1;(statearr_32214_32232[(2)] = inst_32192);
(statearr_32214_32232[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32203 === (8)))
{var inst_32189 = cljs.core.async.close_BANG_(to);var state_32202__$1 = state_32202;var statearr_32215_32233 = state_32202__$1;(statearr_32215_32233[(2)] = inst_32189);
(statearr_32215_32233[(1)] = (10));
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
});})(c__22986__auto___32223))
;return ((function (switch__22971__auto__,c__22986__auto___32223){
return (function() {
var state_machine__22972__auto__ = null;
var state_machine__22972__auto____0 = (function (){var statearr_32219 = [null,null,null,null,null,null,null,null,null];(statearr_32219[(0)] = state_machine__22972__auto__);
(statearr_32219[(1)] = (1));
return statearr_32219;
});
var state_machine__22972__auto____1 = (function (state_32202){while(true){
var ret_value__22973__auto__ = (function (){try{while(true){
var result__22974__auto__ = switch__22971__auto__(state_32202);if(cljs.core.keyword_identical_QMARK_(result__22974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22974__auto__;
}
break;
}
}catch (e32220){if((e32220 instanceof Object))
{var ex__22975__auto__ = e32220;var statearr_32221_32234 = state_32202;(statearr_32221_32234[(5)] = ex__22975__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_32202);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32220;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32235 = state_32202;
state_32202 = G__32235;
continue;
}
} else
{return ret_value__22973__auto__;
}
break;
}
});
state_machine__22972__auto__ = function(state_32202){
switch(arguments.length){
case 0:
return state_machine__22972__auto____0.call(this);
case 1:
return state_machine__22972__auto____1.call(this,state_32202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22972__auto____0;
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22972__auto____1;
return state_machine__22972__auto__;
})()
;})(switch__22971__auto__,c__22986__auto___32223))
})();var state__22988__auto__ = (function (){var statearr_32222 = (function (){return (f__22987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22987__auto__.cljs$core$IFn$_invoke$arity$0() : f__22987__auto__.call(null));
})();(statearr_32222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22986__auto___32223);
return statearr_32222;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22988__auto__);
});})(c__22986__auto___32223))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__22986__auto___32328 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22986__auto___32328,tc,fc){
return (function (){var f__22987__auto__ = (function (){var switch__22971__auto__ = ((function (c__22986__auto___32328,tc,fc){
return (function (state_32305){var state_val_32306 = (state_32305[(1)]);if((state_val_32306 === (7)))
{var inst_32301 = (state_32305[(2)]);var state_32305__$1 = state_32305;var statearr_32307_32329 = state_32305__$1;(statearr_32307_32329[(2)] = inst_32301);
(statearr_32307_32329[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32306 === (1)))
{var state_32305__$1 = state_32305;var statearr_32308_32330 = state_32305__$1;(statearr_32308_32330[(2)] = null);
(statearr_32308_32330[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32306 === (4)))
{var inst_32286 = (state_32305[(7)]);var inst_32286__$1 = (state_32305[(2)]);var inst_32287 = (inst_32286__$1 == null);var state_32305__$1 = (function (){var statearr_32309 = state_32305;(statearr_32309[(7)] = inst_32286__$1);
return statearr_32309;
})();if(cljs.core.truth_(inst_32287))
{var statearr_32310_32331 = state_32305__$1;(statearr_32310_32331[(1)] = (5));
} else
{var statearr_32311_32332 = state_32305__$1;(statearr_32311_32332[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32306 === (6)))
{var inst_32286 = (state_32305[(7)]);var inst_32292 = (function (){var G__32312 = inst_32286;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__32312) : p.call(null,G__32312));
})();var state_32305__$1 = state_32305;if(cljs.core.truth_(inst_32292))
{var statearr_32313_32333 = state_32305__$1;(statearr_32313_32333[(1)] = (9));
} else
{var statearr_32314_32334 = state_32305__$1;(statearr_32314_32334[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32306 === (3)))
{var inst_32303 = (state_32305[(2)]);var state_32305__$1 = state_32305;return cljs.core.async.impl.ioc_helpers.return_chan(state_32305__$1,inst_32303);
} else
{if((state_val_32306 === (2)))
{var state_32305__$1 = state_32305;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32305__$1,(4),ch);
} else
{if((state_val_32306 === (11)))
{var inst_32286 = (state_32305[(7)]);var inst_32296 = (state_32305[(2)]);var state_32305__$1 = state_32305;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32305__$1,(8),inst_32296,inst_32286);
} else
{if((state_val_32306 === (9)))
{var state_32305__$1 = state_32305;var statearr_32315_32335 = state_32305__$1;(statearr_32315_32335[(2)] = tc);
(statearr_32315_32335[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32306 === (5)))
{var inst_32289 = cljs.core.async.close_BANG_(tc);var inst_32290 = cljs.core.async.close_BANG_(fc);var state_32305__$1 = (function (){var statearr_32316 = state_32305;(statearr_32316[(8)] = inst_32289);
return statearr_32316;
})();var statearr_32317_32336 = state_32305__$1;(statearr_32317_32336[(2)] = inst_32290);
(statearr_32317_32336[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32306 === (10)))
{var state_32305__$1 = state_32305;var statearr_32318_32337 = state_32305__$1;(statearr_32318_32337[(2)] = fc);
(statearr_32318_32337[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32306 === (8)))
{var inst_32298 = (state_32305[(2)]);var state_32305__$1 = (function (){var statearr_32319 = state_32305;(statearr_32319[(9)] = inst_32298);
return statearr_32319;
})();var statearr_32320_32338 = state_32305__$1;(statearr_32320_32338[(2)] = null);
(statearr_32320_32338[(1)] = (2));
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
});})(c__22986__auto___32328,tc,fc))
;return ((function (switch__22971__auto__,c__22986__auto___32328,tc,fc){
return (function() {
var state_machine__22972__auto__ = null;
var state_machine__22972__auto____0 = (function (){var statearr_32324 = [null,null,null,null,null,null,null,null,null,null];(statearr_32324[(0)] = state_machine__22972__auto__);
(statearr_32324[(1)] = (1));
return statearr_32324;
});
var state_machine__22972__auto____1 = (function (state_32305){while(true){
var ret_value__22973__auto__ = (function (){try{while(true){
var result__22974__auto__ = switch__22971__auto__(state_32305);if(cljs.core.keyword_identical_QMARK_(result__22974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22974__auto__;
}
break;
}
}catch (e32325){if((e32325 instanceof Object))
{var ex__22975__auto__ = e32325;var statearr_32326_32339 = state_32305;(statearr_32326_32339[(5)] = ex__22975__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_32305);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32325;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32340 = state_32305;
state_32305 = G__32340;
continue;
}
} else
{return ret_value__22973__auto__;
}
break;
}
});
state_machine__22972__auto__ = function(state_32305){
switch(arguments.length){
case 0:
return state_machine__22972__auto____0.call(this);
case 1:
return state_machine__22972__auto____1.call(this,state_32305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22972__auto____0;
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22972__auto____1;
return state_machine__22972__auto__;
})()
;})(switch__22971__auto__,c__22986__auto___32328,tc,fc))
})();var state__22988__auto__ = (function (){var statearr_32327 = (function (){return (f__22987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22987__auto__.cljs$core$IFn$_invoke$arity$0() : f__22987__auto__.call(null));
})();(statearr_32327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22986__auto___32328);
return statearr_32327;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22988__auto__);
});})(c__22986__auto___32328,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__22986__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22986__auto__){
return (function (){var f__22987__auto__ = (function (){var switch__22971__auto__ = ((function (c__22986__auto__){
return (function (state_32389){var state_val_32390 = (state_32389[(1)]);if((state_val_32390 === (7)))
{var inst_32385 = (state_32389[(2)]);var state_32389__$1 = state_32389;var statearr_32391_32409 = state_32389__$1;(statearr_32391_32409[(2)] = inst_32385);
(statearr_32391_32409[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32390 === (6)))
{var inst_32378 = (state_32389[(7)]);var inst_32375 = (state_32389[(8)]);var inst_32382 = (function (){var G__32392 = inst_32375;var G__32393 = inst_32378;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__32392,G__32393) : f.call(null,G__32392,G__32393));
})();var inst_32375__$1 = inst_32382;var state_32389__$1 = (function (){var statearr_32394 = state_32389;(statearr_32394[(8)] = inst_32375__$1);
return statearr_32394;
})();var statearr_32395_32410 = state_32389__$1;(statearr_32395_32410[(2)] = null);
(statearr_32395_32410[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32390 === (5)))
{var inst_32375 = (state_32389[(8)]);var state_32389__$1 = state_32389;var statearr_32396_32411 = state_32389__$1;(statearr_32396_32411[(2)] = inst_32375);
(statearr_32396_32411[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32390 === (4)))
{var inst_32378 = (state_32389[(7)]);var inst_32378__$1 = (state_32389[(2)]);var inst_32379 = (inst_32378__$1 == null);var state_32389__$1 = (function (){var statearr_32397 = state_32389;(statearr_32397[(7)] = inst_32378__$1);
return statearr_32397;
})();if(cljs.core.truth_(inst_32379))
{var statearr_32398_32412 = state_32389__$1;(statearr_32398_32412[(1)] = (5));
} else
{var statearr_32399_32413 = state_32389__$1;(statearr_32399_32413[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32390 === (3)))
{var inst_32387 = (state_32389[(2)]);var state_32389__$1 = state_32389;return cljs.core.async.impl.ioc_helpers.return_chan(state_32389__$1,inst_32387);
} else
{if((state_val_32390 === (2)))
{var state_32389__$1 = state_32389;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32389__$1,(4),ch);
} else
{if((state_val_32390 === (1)))
{var inst_32375 = init;var state_32389__$1 = (function (){var statearr_32400 = state_32389;(statearr_32400[(8)] = inst_32375);
return statearr_32400;
})();var statearr_32401_32414 = state_32389__$1;(statearr_32401_32414[(2)] = null);
(statearr_32401_32414[(1)] = (2));
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
});})(c__22986__auto__))
;return ((function (switch__22971__auto__,c__22986__auto__){
return (function() {
var state_machine__22972__auto__ = null;
var state_machine__22972__auto____0 = (function (){var statearr_32405 = [null,null,null,null,null,null,null,null,null];(statearr_32405[(0)] = state_machine__22972__auto__);
(statearr_32405[(1)] = (1));
return statearr_32405;
});
var state_machine__22972__auto____1 = (function (state_32389){while(true){
var ret_value__22973__auto__ = (function (){try{while(true){
var result__22974__auto__ = switch__22971__auto__(state_32389);if(cljs.core.keyword_identical_QMARK_(result__22974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22974__auto__;
}
break;
}
}catch (e32406){if((e32406 instanceof Object))
{var ex__22975__auto__ = e32406;var statearr_32407_32415 = state_32389;(statearr_32407_32415[(5)] = ex__22975__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_32389);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32406;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32416 = state_32389;
state_32389 = G__32416;
continue;
}
} else
{return ret_value__22973__auto__;
}
break;
}
});
state_machine__22972__auto__ = function(state_32389){
switch(arguments.length){
case 0:
return state_machine__22972__auto____0.call(this);
case 1:
return state_machine__22972__auto____1.call(this,state_32389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22972__auto____0;
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22972__auto____1;
return state_machine__22972__auto__;
})()
;})(switch__22971__auto__,c__22986__auto__))
})();var state__22988__auto__ = (function (){var statearr_32408 = (function (){return (f__22987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22987__auto__.cljs$core$IFn$_invoke$arity$0() : f__22987__auto__.call(null));
})();(statearr_32408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22986__auto__);
return statearr_32408;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22988__auto__);
});})(c__22986__auto__))
);
return c__22986__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__22986__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22986__auto__){
return (function (){var f__22987__auto__ = (function (){var switch__22971__auto__ = ((function (c__22986__auto__){
return (function (state_32481){var state_val_32482 = (state_32481[(1)]);if((state_val_32482 === (7)))
{var inst_32462 = (state_32481[(7)]);var inst_32467 = (state_32481[(2)]);var inst_32468 = cljs.core.next(inst_32462);var inst_32462__$1 = inst_32468;var state_32481__$1 = (function (){var statearr_32483 = state_32481;(statearr_32483[(7)] = inst_32462__$1);
(statearr_32483[(8)] = inst_32467);
return statearr_32483;
})();var statearr_32484_32502 = state_32481__$1;(statearr_32484_32502[(2)] = null);
(statearr_32484_32502[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32482 === (1)))
{var inst_32461 = cljs.core.seq(coll);var inst_32462 = inst_32461;var state_32481__$1 = (function (){var statearr_32485 = state_32481;(statearr_32485[(7)] = inst_32462);
return statearr_32485;
})();var statearr_32486_32503 = state_32481__$1;(statearr_32486_32503[(2)] = null);
(statearr_32486_32503[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32482 === (4)))
{var inst_32462 = (state_32481[(7)]);var inst_32465 = cljs.core.first(inst_32462);var state_32481__$1 = state_32481;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32481__$1,(7),ch,inst_32465);
} else
{if((state_val_32482 === (6)))
{var inst_32477 = (state_32481[(2)]);var state_32481__$1 = state_32481;var statearr_32487_32504 = state_32481__$1;(statearr_32487_32504[(2)] = inst_32477);
(statearr_32487_32504[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32482 === (3)))
{var inst_32479 = (state_32481[(2)]);var state_32481__$1 = state_32481;return cljs.core.async.impl.ioc_helpers.return_chan(state_32481__$1,inst_32479);
} else
{if((state_val_32482 === (2)))
{var inst_32462 = (state_32481[(7)]);var state_32481__$1 = state_32481;if(cljs.core.truth_(inst_32462))
{var statearr_32488_32505 = state_32481__$1;(statearr_32488_32505[(1)] = (4));
} else
{var statearr_32489_32506 = state_32481__$1;(statearr_32489_32506[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32482 === (9)))
{var state_32481__$1 = state_32481;var statearr_32490_32507 = state_32481__$1;(statearr_32490_32507[(2)] = null);
(statearr_32490_32507[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32482 === (5)))
{var state_32481__$1 = state_32481;if(cljs.core.truth_(close_QMARK_))
{var statearr_32491_32508 = state_32481__$1;(statearr_32491_32508[(1)] = (8));
} else
{var statearr_32492_32509 = state_32481__$1;(statearr_32492_32509[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32482 === (10)))
{var inst_32475 = (state_32481[(2)]);var state_32481__$1 = state_32481;var statearr_32493_32510 = state_32481__$1;(statearr_32493_32510[(2)] = inst_32475);
(statearr_32493_32510[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32482 === (8)))
{var inst_32472 = cljs.core.async.close_BANG_(ch);var state_32481__$1 = state_32481;var statearr_32494_32511 = state_32481__$1;(statearr_32494_32511[(2)] = inst_32472);
(statearr_32494_32511[(1)] = (10));
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
});})(c__22986__auto__))
;return ((function (switch__22971__auto__,c__22986__auto__){
return (function() {
var state_machine__22972__auto__ = null;
var state_machine__22972__auto____0 = (function (){var statearr_32498 = [null,null,null,null,null,null,null,null,null];(statearr_32498[(0)] = state_machine__22972__auto__);
(statearr_32498[(1)] = (1));
return statearr_32498;
});
var state_machine__22972__auto____1 = (function (state_32481){while(true){
var ret_value__22973__auto__ = (function (){try{while(true){
var result__22974__auto__ = switch__22971__auto__(state_32481);if(cljs.core.keyword_identical_QMARK_(result__22974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22974__auto__;
}
break;
}
}catch (e32499){if((e32499 instanceof Object))
{var ex__22975__auto__ = e32499;var statearr_32500_32512 = state_32481;(statearr_32500_32512[(5)] = ex__22975__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_32481);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32499;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32513 = state_32481;
state_32481 = G__32513;
continue;
}
} else
{return ret_value__22973__auto__;
}
break;
}
});
state_machine__22972__auto__ = function(state_32481){
switch(arguments.length){
case 0:
return state_machine__22972__auto____0.call(this);
case 1:
return state_machine__22972__auto____1.call(this,state_32481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22972__auto____0;
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22972__auto____1;
return state_machine__22972__auto__;
})()
;})(switch__22971__auto__,c__22986__auto__))
})();var state__22988__auto__ = (function (){var statearr_32501 = (function (){return (f__22987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22987__auto__.cljs$core$IFn$_invoke$arity$0() : f__22987__auto__.call(null));
})();(statearr_32501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22986__auto__);
return statearr_32501;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22988__auto__);
});})(c__22986__auto__))
);
return c__22986__auto__;
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
cljs.core.async.Mux = (function (){var obj32515 = {};return obj32515;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__19621__auto__ = _;if(and__19621__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__19621__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__20845__auto__ = (((_ == null))?null:_);return (function (){var or__19663__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__32519 = x__20845__auto__;return goog.typeOf(G__32519);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj32521 = {};return obj32521;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__19621__auto__ = m;if(and__19621__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__19621__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__20845__auto__ = (((m == null))?null:m);return (function (){var or__19663__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__32525 = x__20845__auto__;return goog.typeOf(G__32525);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__19621__auto__ = m;if(and__19621__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__19621__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__20845__auto__ = (((m == null))?null:m);return (function (){var or__19663__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__32529 = x__20845__auto__;return goog.typeOf(G__32529);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__19621__auto__ = m;if(and__19621__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__19621__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__20845__auto__ = (((m == null))?null:m);return (function (){var or__19663__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__32533 = x__20845__auto__;return goog.typeOf(G__32533);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__32773 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32773) : cljs.core.atom.call(null,G__32773));
})();var m = (function (){if(typeof cljs.core.async.t32774 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32774 = (function (cs,ch,mult,meta32775){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta32775 = meta32775;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32774.cljs$lang$type = true;
cljs.core.async.t32774.cljs$lang$ctorStr = "cljs.core.async/t32774";
cljs.core.async.t32774.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core.async/t32774");
});})(cs))
;
cljs.core.async.t32774.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t32774.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t32774.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t32774.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__32777_33004 = self__.cs;var G__32778_33005 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32777_33004,G__32778_33005) : cljs.core.reset_BANG_.call(null,G__32777_33004,G__32778_33005));
return null;
});})(cs))
;
cljs.core.async.t32774.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32774.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t32774.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32776){var self__ = this;
var _32776__$1 = this;return self__.meta32775;
});})(cs))
;
cljs.core.async.t32774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32776,meta32775__$1){var self__ = this;
var _32776__$1 = this;return (new cljs.core.async.t32774(self__.cs,self__.ch,self__.mult,meta32775__$1));
});})(cs))
;
cljs.core.async.__GT_t32774 = ((function (cs){
return (function __GT_t32774(cs__$1,ch__$1,mult__$1,meta32775){return (new cljs.core.async.t32774(cs__$1,ch__$1,mult__$1,meta32775));
});})(cs))
;
}
return (new cljs.core.async.t32774(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__32779 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32779) : cljs.core.atom.call(null,G__32779));
})();var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__22986__auto___33006 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22986__auto___33006,cs,m,dchan,dctr,done){
return (function (){var f__22987__auto__ = (function (){var switch__22971__auto__ = ((function (c__22986__auto___33006,cs,m,dchan,dctr,done){
return (function (state_32914){var state_val_32915 = (state_32914[(1)]);if((state_val_32915 === (7)))
{var inst_32910 = (state_32914[(2)]);var state_32914__$1 = state_32914;var statearr_32916_33007 = state_32914__$1;(statearr_32916_33007[(2)] = inst_32910);
(statearr_32916_33007[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (20)))
{var inst_32811 = (state_32914[(7)]);var inst_32821 = cljs.core.first(inst_32811);var inst_32822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32821,(0),null);var inst_32823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32821,(1),null);var state_32914__$1 = (function (){var statearr_32917 = state_32914;(statearr_32917[(8)] = inst_32822);
return statearr_32917;
})();if(cljs.core.truth_(inst_32823))
{var statearr_32918_33008 = state_32914__$1;(statearr_32918_33008[(1)] = (22));
} else
{var statearr_32919_33009 = state_32914__$1;(statearr_32919_33009[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (27)))
{var inst_32851 = (state_32914[(9)]);var inst_32853 = (state_32914[(10)]);var inst_32858 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32851,inst_32853);var state_32914__$1 = (function (){var statearr_32920 = state_32914;(statearr_32920[(11)] = inst_32858);
return statearr_32920;
})();var statearr_32921_33010 = state_32914__$1;(statearr_32921_33010[(2)] = null);
(statearr_32921_33010[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (1)))
{var state_32914__$1 = state_32914;var statearr_32922_33011 = state_32914__$1;(statearr_32922_33011[(2)] = null);
(statearr_32922_33011[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (24)))
{var inst_32811 = (state_32914[(7)]);var inst_32828 = (state_32914[(2)]);var inst_32829 = cljs.core.next(inst_32811);var inst_32791 = inst_32829;var inst_32792 = null;var inst_32793 = (0);var inst_32794 = (0);var state_32914__$1 = (function (){var statearr_32923 = state_32914;(statearr_32923[(12)] = inst_32793);
(statearr_32923[(13)] = inst_32791);
(statearr_32923[(14)] = inst_32794);
(statearr_32923[(15)] = inst_32828);
(statearr_32923[(16)] = inst_32792);
return statearr_32923;
})();var statearr_32924_33012 = state_32914__$1;(statearr_32924_33012[(2)] = null);
(statearr_32924_33012[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (39)))
{var inst_32871 = (state_32914[(17)]);var inst_32889 = (state_32914[(2)]);var inst_32890 = cljs.core.next(inst_32871);var inst_32850 = inst_32890;var inst_32851 = null;var inst_32852 = (0);var inst_32853 = (0);var state_32914__$1 = (function (){var statearr_32928 = state_32914;(statearr_32928[(18)] = inst_32850);
(statearr_32928[(19)] = inst_32889);
(statearr_32928[(9)] = inst_32851);
(statearr_32928[(10)] = inst_32853);
(statearr_32928[(20)] = inst_32852);
return statearr_32928;
})();var statearr_32929_33013 = state_32914__$1;(statearr_32929_33013[(2)] = null);
(statearr_32929_33013[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (4)))
{var inst_32782 = (state_32914[(21)]);var inst_32782__$1 = (state_32914[(2)]);var inst_32783 = (inst_32782__$1 == null);var state_32914__$1 = (function (){var statearr_32930 = state_32914;(statearr_32930[(21)] = inst_32782__$1);
return statearr_32930;
})();if(cljs.core.truth_(inst_32783))
{var statearr_32931_33014 = state_32914__$1;(statearr_32931_33014[(1)] = (5));
} else
{var statearr_32932_33015 = state_32914__$1;(statearr_32932_33015[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (15)))
{var inst_32793 = (state_32914[(12)]);var inst_32791 = (state_32914[(13)]);var inst_32794 = (state_32914[(14)]);var inst_32792 = (state_32914[(16)]);var inst_32807 = (state_32914[(2)]);var inst_32808 = (inst_32794 + (1));var tmp32925 = inst_32793;var tmp32926 = inst_32791;var tmp32927 = inst_32792;var inst_32791__$1 = tmp32926;var inst_32792__$1 = tmp32927;var inst_32793__$1 = tmp32925;var inst_32794__$1 = inst_32808;var state_32914__$1 = (function (){var statearr_32933 = state_32914;(statearr_32933[(12)] = inst_32793__$1);
(statearr_32933[(13)] = inst_32791__$1);
(statearr_32933[(22)] = inst_32807);
(statearr_32933[(14)] = inst_32794__$1);
(statearr_32933[(16)] = inst_32792__$1);
return statearr_32933;
})();var statearr_32934_33016 = state_32914__$1;(statearr_32934_33016[(2)] = null);
(statearr_32934_33016[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (21)))
{var inst_32832 = (state_32914[(2)]);var state_32914__$1 = state_32914;var statearr_32935_33017 = state_32914__$1;(statearr_32935_33017[(2)] = inst_32832);
(statearr_32935_33017[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (31)))
{var inst_32858 = (state_32914[(11)]);var inst_32859 = (state_32914[(2)]);var inst_32860 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_32861 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32858);var state_32914__$1 = (function (){var statearr_32936 = state_32914;(statearr_32936[(23)] = inst_32859);
(statearr_32936[(24)] = inst_32860);
return statearr_32936;
})();var statearr_32937_33018 = state_32914__$1;(statearr_32937_33018[(2)] = inst_32861);
cljs.core.async.impl.ioc_helpers.process_exception(state_32914__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (32)))
{var inst_32782 = (state_32914[(21)]);var inst_32858 = (state_32914[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32914,(31),Object,null,(30));var inst_32865 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32858,inst_32782,done);var state_32914__$1 = state_32914;var statearr_32938_33019 = state_32914__$1;(statearr_32938_33019[(2)] = inst_32865);
cljs.core.async.impl.ioc_helpers.process_exception(state_32914__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (40)))
{var inst_32880 = (state_32914[(25)]);var inst_32881 = (state_32914[(2)]);var inst_32882 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_32883 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32880);var state_32914__$1 = (function (){var statearr_32939 = state_32914;(statearr_32939[(26)] = inst_32882);
(statearr_32939[(27)] = inst_32881);
return statearr_32939;
})();var statearr_32940_33020 = state_32914__$1;(statearr_32940_33020[(2)] = inst_32883);
cljs.core.async.impl.ioc_helpers.process_exception(state_32914__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (33)))
{var inst_32871 = (state_32914[(17)]);var inst_32873 = cljs.core.chunked_seq_QMARK_(inst_32871);var state_32914__$1 = state_32914;if(inst_32873)
{var statearr_32941_33021 = state_32914__$1;(statearr_32941_33021[(1)] = (36));
} else
{var statearr_32942_33022 = state_32914__$1;(statearr_32942_33022[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (13)))
{var inst_32801 = (state_32914[(28)]);var inst_32804 = cljs.core.async.close_BANG_(inst_32801);var state_32914__$1 = state_32914;var statearr_32943_33023 = state_32914__$1;(statearr_32943_33023[(2)] = inst_32804);
(statearr_32943_33023[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (22)))
{var inst_32822 = (state_32914[(8)]);var inst_32825 = cljs.core.async.close_BANG_(inst_32822);var state_32914__$1 = state_32914;var statearr_32944_33024 = state_32914__$1;(statearr_32944_33024[(2)] = inst_32825);
(statearr_32944_33024[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (36)))
{var inst_32871 = (state_32914[(17)]);var inst_32875 = cljs.core.chunk_first(inst_32871);var inst_32876 = cljs.core.chunk_rest(inst_32871);var inst_32877 = cljs.core.count(inst_32875);var inst_32850 = inst_32876;var inst_32851 = inst_32875;var inst_32852 = inst_32877;var inst_32853 = (0);var state_32914__$1 = (function (){var statearr_32945 = state_32914;(statearr_32945[(18)] = inst_32850);
(statearr_32945[(9)] = inst_32851);
(statearr_32945[(10)] = inst_32853);
(statearr_32945[(20)] = inst_32852);
return statearr_32945;
})();var statearr_32946_33025 = state_32914__$1;(statearr_32946_33025[(2)] = null);
(statearr_32946_33025[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (41)))
{var inst_32782 = (state_32914[(21)]);var inst_32880 = (state_32914[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32914,(40),Object,null,(39));var inst_32887 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32880,inst_32782,done);var state_32914__$1 = state_32914;var statearr_32947_33026 = state_32914__$1;(statearr_32947_33026[(2)] = inst_32887);
cljs.core.async.impl.ioc_helpers.process_exception(state_32914__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (43)))
{var state_32914__$1 = state_32914;var statearr_32948_33027 = state_32914__$1;(statearr_32948_33027[(2)] = null);
(statearr_32948_33027[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (29)))
{var inst_32898 = (state_32914[(2)]);var state_32914__$1 = state_32914;var statearr_32949_33028 = state_32914__$1;(statearr_32949_33028[(2)] = inst_32898);
(statearr_32949_33028[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (44)))
{var inst_32907 = (state_32914[(2)]);var state_32914__$1 = (function (){var statearr_32950 = state_32914;(statearr_32950[(29)] = inst_32907);
return statearr_32950;
})();var statearr_32951_33029 = state_32914__$1;(statearr_32951_33029[(2)] = null);
(statearr_32951_33029[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (6)))
{var inst_32842 = (state_32914[(30)]);var inst_32841 = (function (){var G__32952 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32952) : cljs.core.deref.call(null,G__32952));
})();var inst_32842__$1 = cljs.core.keys(inst_32841);var inst_32843 = cljs.core.count(inst_32842__$1);var inst_32844 = (function (){var G__32953 = dctr;var G__32954 = inst_32843;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32953,G__32954) : cljs.core.reset_BANG_.call(null,G__32953,G__32954));
})();var inst_32849 = cljs.core.seq(inst_32842__$1);var inst_32850 = inst_32849;var inst_32851 = null;var inst_32852 = (0);var inst_32853 = (0);var state_32914__$1 = (function (){var statearr_32955 = state_32914;(statearr_32955[(18)] = inst_32850);
(statearr_32955[(31)] = inst_32844);
(statearr_32955[(30)] = inst_32842__$1);
(statearr_32955[(9)] = inst_32851);
(statearr_32955[(10)] = inst_32853);
(statearr_32955[(20)] = inst_32852);
return statearr_32955;
})();var statearr_32956_33030 = state_32914__$1;(statearr_32956_33030[(2)] = null);
(statearr_32956_33030[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (28)))
{var inst_32850 = (state_32914[(18)]);var inst_32871 = (state_32914[(17)]);var inst_32871__$1 = cljs.core.seq(inst_32850);var state_32914__$1 = (function (){var statearr_32957 = state_32914;(statearr_32957[(17)] = inst_32871__$1);
return statearr_32957;
})();if(inst_32871__$1)
{var statearr_32958_33031 = state_32914__$1;(statearr_32958_33031[(1)] = (33));
} else
{var statearr_32959_33032 = state_32914__$1;(statearr_32959_33032[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (25)))
{var inst_32853 = (state_32914[(10)]);var inst_32852 = (state_32914[(20)]);var inst_32855 = (inst_32853 < inst_32852);var inst_32856 = inst_32855;var state_32914__$1 = state_32914;if(cljs.core.truth_(inst_32856))
{var statearr_32960_33033 = state_32914__$1;(statearr_32960_33033[(1)] = (27));
} else
{var statearr_32961_33034 = state_32914__$1;(statearr_32961_33034[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (34)))
{var state_32914__$1 = state_32914;var statearr_32962_33035 = state_32914__$1;(statearr_32962_33035[(2)] = null);
(statearr_32962_33035[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (17)))
{var state_32914__$1 = state_32914;var statearr_32963_33036 = state_32914__$1;(statearr_32963_33036[(2)] = null);
(statearr_32963_33036[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (3)))
{var inst_32912 = (state_32914[(2)]);var state_32914__$1 = state_32914;return cljs.core.async.impl.ioc_helpers.return_chan(state_32914__$1,inst_32912);
} else
{if((state_val_32915 === (12)))
{var inst_32837 = (state_32914[(2)]);var state_32914__$1 = state_32914;var statearr_32964_33037 = state_32914__$1;(statearr_32964_33037[(2)] = inst_32837);
(statearr_32964_33037[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (2)))
{var state_32914__$1 = state_32914;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32914__$1,(4),ch);
} else
{if((state_val_32915 === (23)))
{var state_32914__$1 = state_32914;var statearr_32965_33038 = state_32914__$1;(statearr_32965_33038[(2)] = null);
(statearr_32965_33038[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (35)))
{var inst_32896 = (state_32914[(2)]);var state_32914__$1 = state_32914;var statearr_32966_33039 = state_32914__$1;(statearr_32966_33039[(2)] = inst_32896);
(statearr_32966_33039[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (19)))
{var inst_32811 = (state_32914[(7)]);var inst_32815 = cljs.core.chunk_first(inst_32811);var inst_32816 = cljs.core.chunk_rest(inst_32811);var inst_32817 = cljs.core.count(inst_32815);var inst_32791 = inst_32816;var inst_32792 = inst_32815;var inst_32793 = inst_32817;var inst_32794 = (0);var state_32914__$1 = (function (){var statearr_32967 = state_32914;(statearr_32967[(12)] = inst_32793);
(statearr_32967[(13)] = inst_32791);
(statearr_32967[(14)] = inst_32794);
(statearr_32967[(16)] = inst_32792);
return statearr_32967;
})();var statearr_32968_33040 = state_32914__$1;(statearr_32968_33040[(2)] = null);
(statearr_32968_33040[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (11)))
{var inst_32791 = (state_32914[(13)]);var inst_32811 = (state_32914[(7)]);var inst_32811__$1 = cljs.core.seq(inst_32791);var state_32914__$1 = (function (){var statearr_32969 = state_32914;(statearr_32969[(7)] = inst_32811__$1);
return statearr_32969;
})();if(inst_32811__$1)
{var statearr_32970_33041 = state_32914__$1;(statearr_32970_33041[(1)] = (16));
} else
{var statearr_32971_33042 = state_32914__$1;(statearr_32971_33042[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (9)))
{var inst_32839 = (state_32914[(2)]);var state_32914__$1 = state_32914;var statearr_32972_33043 = state_32914__$1;(statearr_32972_33043[(2)] = inst_32839);
(statearr_32972_33043[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (5)))
{var inst_32789 = (function (){var G__32973 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32973) : cljs.core.deref.call(null,G__32973));
})();var inst_32790 = cljs.core.seq(inst_32789);var inst_32791 = inst_32790;var inst_32792 = null;var inst_32793 = (0);var inst_32794 = (0);var state_32914__$1 = (function (){var statearr_32974 = state_32914;(statearr_32974[(12)] = inst_32793);
(statearr_32974[(13)] = inst_32791);
(statearr_32974[(14)] = inst_32794);
(statearr_32974[(16)] = inst_32792);
return statearr_32974;
})();var statearr_32975_33044 = state_32914__$1;(statearr_32975_33044[(2)] = null);
(statearr_32975_33044[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (14)))
{var state_32914__$1 = state_32914;var statearr_32976_33045 = state_32914__$1;(statearr_32976_33045[(2)] = null);
(statearr_32976_33045[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (45)))
{var inst_32904 = (state_32914[(2)]);var state_32914__$1 = state_32914;var statearr_32977_33046 = state_32914__$1;(statearr_32977_33046[(2)] = inst_32904);
(statearr_32977_33046[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (26)))
{var inst_32842 = (state_32914[(30)]);var inst_32900 = (state_32914[(2)]);var inst_32901 = cljs.core.seq(inst_32842);var state_32914__$1 = (function (){var statearr_32978 = state_32914;(statearr_32978[(32)] = inst_32900);
return statearr_32978;
})();if(inst_32901)
{var statearr_32979_33047 = state_32914__$1;(statearr_32979_33047[(1)] = (42));
} else
{var statearr_32980_33048 = state_32914__$1;(statearr_32980_33048[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (16)))
{var inst_32811 = (state_32914[(7)]);var inst_32813 = cljs.core.chunked_seq_QMARK_(inst_32811);var state_32914__$1 = state_32914;if(inst_32813)
{var statearr_32984_33049 = state_32914__$1;(statearr_32984_33049[(1)] = (19));
} else
{var statearr_32985_33050 = state_32914__$1;(statearr_32985_33050[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (38)))
{var inst_32893 = (state_32914[(2)]);var state_32914__$1 = state_32914;var statearr_32986_33051 = state_32914__$1;(statearr_32986_33051[(2)] = inst_32893);
(statearr_32986_33051[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (30)))
{var inst_32850 = (state_32914[(18)]);var inst_32851 = (state_32914[(9)]);var inst_32853 = (state_32914[(10)]);var inst_32852 = (state_32914[(20)]);var inst_32867 = (state_32914[(2)]);var inst_32868 = (inst_32853 + (1));var tmp32981 = inst_32850;var tmp32982 = inst_32851;var tmp32983 = inst_32852;var inst_32850__$1 = tmp32981;var inst_32851__$1 = tmp32982;var inst_32852__$1 = tmp32983;var inst_32853__$1 = inst_32868;var state_32914__$1 = (function (){var statearr_32987 = state_32914;(statearr_32987[(18)] = inst_32850__$1);
(statearr_32987[(33)] = inst_32867);
(statearr_32987[(9)] = inst_32851__$1);
(statearr_32987[(10)] = inst_32853__$1);
(statearr_32987[(20)] = inst_32852__$1);
return statearr_32987;
})();var statearr_32988_33052 = state_32914__$1;(statearr_32988_33052[(2)] = null);
(statearr_32988_33052[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (10)))
{var inst_32794 = (state_32914[(14)]);var inst_32792 = (state_32914[(16)]);var inst_32800 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32792,inst_32794);var inst_32801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32800,(0),null);var inst_32802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32800,(1),null);var state_32914__$1 = (function (){var statearr_32989 = state_32914;(statearr_32989[(28)] = inst_32801);
return statearr_32989;
})();if(cljs.core.truth_(inst_32802))
{var statearr_32990_33053 = state_32914__$1;(statearr_32990_33053[(1)] = (13));
} else
{var statearr_32991_33054 = state_32914__$1;(statearr_32991_33054[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (18)))
{var inst_32835 = (state_32914[(2)]);var state_32914__$1 = state_32914;var statearr_32992_33055 = state_32914__$1;(statearr_32992_33055[(2)] = inst_32835);
(statearr_32992_33055[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (42)))
{var state_32914__$1 = state_32914;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32914__$1,(45),dchan);
} else
{if((state_val_32915 === (37)))
{var inst_32871 = (state_32914[(17)]);var inst_32880 = cljs.core.first(inst_32871);var state_32914__$1 = (function (){var statearr_32993 = state_32914;(statearr_32993[(25)] = inst_32880);
return statearr_32993;
})();var statearr_32994_33056 = state_32914__$1;(statearr_32994_33056[(2)] = null);
(statearr_32994_33056[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32915 === (8)))
{var inst_32793 = (state_32914[(12)]);var inst_32794 = (state_32914[(14)]);var inst_32796 = (inst_32794 < inst_32793);var inst_32797 = inst_32796;var state_32914__$1 = state_32914;if(cljs.core.truth_(inst_32797))
{var statearr_32995_33057 = state_32914__$1;(statearr_32995_33057[(1)] = (10));
} else
{var statearr_32996_33058 = state_32914__$1;(statearr_32996_33058[(1)] = (11));
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
});})(c__22986__auto___33006,cs,m,dchan,dctr,done))
;return ((function (switch__22971__auto__,c__22986__auto___33006,cs,m,dchan,dctr,done){
return (function() {
var state_machine__22972__auto__ = null;
var state_machine__22972__auto____0 = (function (){var statearr_33000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33000[(0)] = state_machine__22972__auto__);
(statearr_33000[(1)] = (1));
return statearr_33000;
});
var state_machine__22972__auto____1 = (function (state_32914){while(true){
var ret_value__22973__auto__ = (function (){try{while(true){
var result__22974__auto__ = switch__22971__auto__(state_32914);if(cljs.core.keyword_identical_QMARK_(result__22974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22974__auto__;
}
break;
}
}catch (e33001){if((e33001 instanceof Object))
{var ex__22975__auto__ = e33001;var statearr_33002_33059 = state_32914;(statearr_33002_33059[(5)] = ex__22975__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_32914);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33001;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33060 = state_32914;
state_32914 = G__33060;
continue;
}
} else
{return ret_value__22973__auto__;
}
break;
}
});
state_machine__22972__auto__ = function(state_32914){
switch(arguments.length){
case 0:
return state_machine__22972__auto____0.call(this);
case 1:
return state_machine__22972__auto____1.call(this,state_32914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22972__auto____0;
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22972__auto____1;
return state_machine__22972__auto__;
})()
;})(switch__22971__auto__,c__22986__auto___33006,cs,m,dchan,dctr,done))
})();var state__22988__auto__ = (function (){var statearr_33003 = (function (){return (f__22987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22987__auto__.cljs$core$IFn$_invoke$arity$0() : f__22987__auto__.call(null));
})();(statearr_33003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22986__auto___33006);
return statearr_33003;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22988__auto__);
});})(c__22986__auto___33006,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj33065 = {};return obj33065;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__19621__auto__ = m;if(and__19621__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__19621__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__20845__auto__ = (((m == null))?null:m);return (function (){var or__19663__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__33069 = x__20845__auto__;return goog.typeOf(G__33069);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__19621__auto__ = m;if(and__19621__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__19621__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__20845__auto__ = (((m == null))?null:m);return (function (){var or__19663__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__33073 = x__20845__auto__;return goog.typeOf(G__33073);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__19621__auto__ = m;if(and__19621__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__19621__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__20845__auto__ = (((m == null))?null:m);return (function (){var or__19663__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__33077 = x__20845__auto__;return goog.typeOf(G__33077);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__19621__auto__ = m;if(and__19621__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__19621__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__20845__auto__ = (((m == null))?null:m);return (function (){var or__19663__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__33081 = x__20845__auto__;return goog.typeOf(G__33081);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__19621__auto__ = m;if(and__19621__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__19621__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__20845__auto__ = (((m == null))?null:m);return (function (){var or__19663__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__33085 = x__20845__auto__;return goog.typeOf(G__33085);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__33209 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33209) : cljs.core.atom.call(null,G__33209));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = (function (){var G__33210 = new cljs.core.Keyword(null,"mute","mute",1151223646);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33210) : cljs.core.atom.call(null,G__33210));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__33211 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__33211) : attr.call(null,G__33211));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__33212 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33212) : cljs.core.deref.call(null,G__33212));
})();var mode = (function (){var G__33213 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33213) : cljs.core.deref.call(null,G__33213));
})();var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t33214 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33214 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33215){
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
this.meta33215 = meta33215;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33214.cljs$lang$type = true;
cljs.core.async.t33214.cljs$lang$ctorStr = "cljs.core.async/t33214";
cljs.core.async.t33214.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core.async/t33214");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33214.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t33214.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33214.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33214.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__33217_33332 = self__.cs;var G__33218_33333 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33217_33332,G__33218_33333) : cljs.core.reset_BANG_.call(null,G__33217_33332,G__33218_33333));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33214.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33214.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__33219 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__33219) : self__.solo_modes.call(null,G__33219));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__33220_33334 = self__.solo_mode;var G__33221_33335 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33220_33334,G__33221_33335) : cljs.core.reset_BANG_.call(null,G__33220_33334,G__33221_33335));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33214.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33214.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33214.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33216){var self__ = this;
var _33216__$1 = this;return self__.meta33215;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33216,meta33215__$1){var self__ = this;
var _33216__$1 = this;return (new cljs.core.async.t33214(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33215__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t33214 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t33214(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33215){return (new cljs.core.async.t33214(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33215));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t33214(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__22986__auto___33336 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22986__auto___33336,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__22987__auto__ = (function (){var switch__22971__auto__ = ((function (c__22986__auto___33336,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33288){var state_val_33289 = (state_33288[(1)]);if((state_val_33289 === (7)))
{var inst_33235 = (state_33288[(7)]);var inst_33240 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33235);var state_33288__$1 = state_33288;var statearr_33290_33337 = state_33288__$1;(statearr_33290_33337[(2)] = inst_33240);
(statearr_33290_33337[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33289 === (20)))
{var inst_33250 = (state_33288[(8)]);var state_33288__$1 = state_33288;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33288__$1,(23),out,inst_33250);
} else
{if((state_val_33289 === (1)))
{var inst_33225 = (state_33288[(9)]);var inst_33225__$1 = calc_state();var inst_33226 = cljs.core.seq_QMARK_(inst_33225__$1);var state_33288__$1 = (function (){var statearr_33291 = state_33288;(statearr_33291[(9)] = inst_33225__$1);
return statearr_33291;
})();if(inst_33226)
{var statearr_33292_33338 = state_33288__$1;(statearr_33292_33338[(1)] = (2));
} else
{var statearr_33293_33339 = state_33288__$1;(statearr_33293_33339[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33289 === (4)))
{var inst_33225 = (state_33288[(9)]);var inst_33231 = (state_33288[(2)]);var inst_33232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33231,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_33233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33231,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_33234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33231,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_33235 = inst_33225;var state_33288__$1 = (function (){var statearr_33294 = state_33288;(statearr_33294[(10)] = inst_33233);
(statearr_33294[(7)] = inst_33235);
(statearr_33294[(11)] = inst_33232);
(statearr_33294[(12)] = inst_33234);
return statearr_33294;
})();var statearr_33295_33340 = state_33288__$1;(statearr_33295_33340[(2)] = null);
(statearr_33295_33340[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33289 === (15)))
{var state_33288__$1 = state_33288;var statearr_33296_33341 = state_33288__$1;(statearr_33296_33341[(2)] = null);
(statearr_33296_33341[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33289 === (21)))
{var state_33288__$1 = state_33288;var statearr_33297_33342 = state_33288__$1;(statearr_33297_33342[(2)] = null);
(statearr_33297_33342[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33289 === (13)))
{var inst_33284 = (state_33288[(2)]);var state_33288__$1 = state_33288;var statearr_33298_33343 = state_33288__$1;(statearr_33298_33343[(2)] = inst_33284);
(statearr_33298_33343[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33289 === (22)))
{var inst_33243 = (state_33288[(13)]);var inst_33281 = (state_33288[(2)]);var inst_33235 = inst_33243;var state_33288__$1 = (function (){var statearr_33299 = state_33288;(statearr_33299[(14)] = inst_33281);
(statearr_33299[(7)] = inst_33235);
return statearr_33299;
})();var statearr_33300_33344 = state_33288__$1;(statearr_33300_33344[(2)] = null);
(statearr_33300_33344[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33289 === (6)))
{var inst_33286 = (state_33288[(2)]);var state_33288__$1 = state_33288;return cljs.core.async.impl.ioc_helpers.return_chan(state_33288__$1,inst_33286);
} else
{if((state_val_33289 === (17)))
{var inst_33266 = (state_33288[(15)]);var state_33288__$1 = state_33288;var statearr_33301_33345 = state_33288__$1;(statearr_33301_33345[(2)] = inst_33266);
(statearr_33301_33345[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33289 === (3)))
{var inst_33225 = (state_33288[(9)]);var state_33288__$1 = state_33288;var statearr_33302_33346 = state_33288__$1;(statearr_33302_33346[(2)] = inst_33225);
(statearr_33302_33346[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33289 === (12)))
{var inst_33266 = (state_33288[(15)]);var inst_33251 = (state_33288[(16)]);var inst_33246 = (state_33288[(17)]);var inst_33266__$1 = (function (){var G__33303 = inst_33251;return (inst_33246.cljs$core$IFn$_invoke$arity$1 ? inst_33246.cljs$core$IFn$_invoke$arity$1(G__33303) : inst_33246.call(null,G__33303));
})();var state_33288__$1 = (function (){var statearr_33304 = state_33288;(statearr_33304[(15)] = inst_33266__$1);
return statearr_33304;
})();if(cljs.core.truth_(inst_33266__$1))
{var statearr_33305_33347 = state_33288__$1;(statearr_33305_33347[(1)] = (17));
} else
{var statearr_33306_33348 = state_33288__$1;(statearr_33306_33348[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33289 === (2)))
{var inst_33225 = (state_33288[(9)]);var inst_33228 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33225);var state_33288__$1 = state_33288;var statearr_33307_33349 = state_33288__$1;(statearr_33307_33349[(2)] = inst_33228);
(statearr_33307_33349[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33289 === (23)))
{var inst_33278 = (state_33288[(2)]);var state_33288__$1 = state_33288;var statearr_33308_33350 = state_33288__$1;(statearr_33308_33350[(2)] = inst_33278);
(statearr_33308_33350[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33289 === (19)))
{var inst_33275 = (state_33288[(2)]);var state_33288__$1 = state_33288;if(cljs.core.truth_(inst_33275))
{var statearr_33309_33351 = state_33288__$1;(statearr_33309_33351[(1)] = (20));
} else
{var statearr_33310_33352 = state_33288__$1;(statearr_33310_33352[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33289 === (11)))
{var inst_33250 = (state_33288[(8)]);var inst_33256 = (inst_33250 == null);var state_33288__$1 = state_33288;if(cljs.core.truth_(inst_33256))
{var statearr_33311_33353 = state_33288__$1;(statearr_33311_33353[(1)] = (14));
} else
{var statearr_33312_33354 = state_33288__$1;(statearr_33312_33354[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33289 === (9)))
{var inst_33243 = (state_33288[(13)]);var inst_33243__$1 = (state_33288[(2)]);var inst_33244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33243__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_33245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33243__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_33246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33243__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_33288__$1 = (function (){var statearr_33313 = state_33288;(statearr_33313[(17)] = inst_33246);
(statearr_33313[(13)] = inst_33243__$1);
(statearr_33313[(18)] = inst_33245);
return statearr_33313;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_33288__$1,(10),inst_33244);
} else
{if((state_val_33289 === (5)))
{var inst_33235 = (state_33288[(7)]);var inst_33238 = cljs.core.seq_QMARK_(inst_33235);var state_33288__$1 = state_33288;if(inst_33238)
{var statearr_33314_33355 = state_33288__$1;(statearr_33314_33355[(1)] = (7));
} else
{var statearr_33315_33356 = state_33288__$1;(statearr_33315_33356[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33289 === (14)))
{var inst_33251 = (state_33288[(16)]);var inst_33258 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33251);var state_33288__$1 = state_33288;var statearr_33316_33357 = state_33288__$1;(statearr_33316_33357[(2)] = inst_33258);
(statearr_33316_33357[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33289 === (16)))
{var inst_33261 = (state_33288[(2)]);var inst_33262 = calc_state();var inst_33235 = inst_33262;var state_33288__$1 = (function (){var statearr_33317 = state_33288;(statearr_33317[(7)] = inst_33235);
(statearr_33317[(19)] = inst_33261);
return statearr_33317;
})();var statearr_33318_33358 = state_33288__$1;(statearr_33318_33358[(2)] = null);
(statearr_33318_33358[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33289 === (10)))
{var inst_33251 = (state_33288[(16)]);var inst_33250 = (state_33288[(8)]);var inst_33249 = (state_33288[(2)]);var inst_33250__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33249,(0),null);var inst_33251__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33249,(1),null);var inst_33252 = (inst_33250__$1 == null);var inst_33253 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33251__$1,change);var inst_33254 = (inst_33252) || (inst_33253);var state_33288__$1 = (function (){var statearr_33319 = state_33288;(statearr_33319[(16)] = inst_33251__$1);
(statearr_33319[(8)] = inst_33250__$1);
return statearr_33319;
})();if(cljs.core.truth_(inst_33254))
{var statearr_33320_33359 = state_33288__$1;(statearr_33320_33359[(1)] = (11));
} else
{var statearr_33321_33360 = state_33288__$1;(statearr_33321_33360[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33289 === (18)))
{var inst_33251 = (state_33288[(16)]);var inst_33246 = (state_33288[(17)]);var inst_33245 = (state_33288[(18)]);var inst_33270 = cljs.core.empty_QMARK_(inst_33246);var inst_33271 = (function (){var G__33322 = inst_33251;return (inst_33245.cljs$core$IFn$_invoke$arity$1 ? inst_33245.cljs$core$IFn$_invoke$arity$1(G__33322) : inst_33245.call(null,G__33322));
})();var inst_33272 = cljs.core.not(inst_33271);var inst_33273 = (inst_33270) && (inst_33272);var state_33288__$1 = state_33288;var statearr_33323_33361 = state_33288__$1;(statearr_33323_33361[(2)] = inst_33273);
(statearr_33323_33361[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33289 === (8)))
{var inst_33235 = (state_33288[(7)]);var state_33288__$1 = state_33288;var statearr_33324_33362 = state_33288__$1;(statearr_33324_33362[(2)] = inst_33235);
(statearr_33324_33362[(1)] = (9));
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
});})(c__22986__auto___33336,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__22971__auto__,c__22986__auto___33336,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__22972__auto__ = null;
var state_machine__22972__auto____0 = (function (){var statearr_33328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33328[(0)] = state_machine__22972__auto__);
(statearr_33328[(1)] = (1));
return statearr_33328;
});
var state_machine__22972__auto____1 = (function (state_33288){while(true){
var ret_value__22973__auto__ = (function (){try{while(true){
var result__22974__auto__ = switch__22971__auto__(state_33288);if(cljs.core.keyword_identical_QMARK_(result__22974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22974__auto__;
}
break;
}
}catch (e33329){if((e33329 instanceof Object))
{var ex__22975__auto__ = e33329;var statearr_33330_33363 = state_33288;(statearr_33330_33363[(5)] = ex__22975__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33288);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33329;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33364 = state_33288;
state_33288 = G__33364;
continue;
}
} else
{return ret_value__22973__auto__;
}
break;
}
});
state_machine__22972__auto__ = function(state_33288){
switch(arguments.length){
case 0:
return state_machine__22972__auto____0.call(this);
case 1:
return state_machine__22972__auto____1.call(this,state_33288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22972__auto____0;
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22972__auto____1;
return state_machine__22972__auto__;
})()
;})(switch__22971__auto__,c__22986__auto___33336,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__22988__auto__ = (function (){var statearr_33331 = (function (){return (f__22987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22987__auto__.cljs$core$IFn$_invoke$arity$0() : f__22987__auto__.call(null));
})();(statearr_33331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22986__auto___33336);
return statearr_33331;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22988__auto__);
});})(c__22986__auto___33336,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj33366 = {};return obj33366;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__19621__auto__ = p;if(and__19621__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__19621__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__20845__auto__ = (((p == null))?null:p);return (function (){var or__19663__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__33370 = x__20845__auto__;return goog.typeOf(G__33370);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__19621__auto__ = p;if(and__19621__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__19621__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__20845__auto__ = (((p == null))?null:p);return (function (){var or__19663__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__33374 = x__20845__auto__;return goog.typeOf(G__33374);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__19621__auto__ = p;if(and__19621__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__19621__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__20845__auto__ = (((p == null))?null:p);return (function (){var or__19663__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__33380 = x__20845__auto__;return goog.typeOf(G__33380);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__19621__auto__ = p;if(and__19621__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__19621__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__20845__auto__ = (((p == null))?null:p);return (function (){var or__19663__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__33382 = x__20845__auto__;return goog.typeOf(G__33382);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
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
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__33523 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33523) : cljs.core.atom.call(null,G__33523));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__19663__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__33525 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33525) : cljs.core.deref.call(null,G__33525));
})(),topic);if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__19663__auto__,mults){
return (function (p1__33383_SHARP_){if(cljs.core.truth_((function (){var G__33526 = topic;return (p1__33383_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33383_SHARP_.cljs$core$IFn$_invoke$arity$1(G__33526) : p1__33383_SHARP_.call(null,G__33526));
})()))
{return p1__33383_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33383_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__33527 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__33527) : buf_fn.call(null,G__33527));
})())));
}
});})(or__19663__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t33528 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33528 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta33529){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta33529 = meta33529;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33528.cljs$lang$type = true;
cljs.core.async.t33528.cljs$lang$ctorStr = "cljs.core.async/t33528";
cljs.core.async.t33528.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core.async/t33528");
});})(mults,ensure_mult))
;
cljs.core.async.t33528.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t33528.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__33531 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__33531) : self__.ensure_mult.call(null,G__33531));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t33528.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__33532 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33532) : cljs.core.deref.call(null,G__33532));
})(),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t33528.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__33533 = self__.mults;var G__33534 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33533,G__33534) : cljs.core.reset_BANG_.call(null,G__33533,G__33534));
});})(mults,ensure_mult))
;
cljs.core.async.t33528.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t33528.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33528.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t33528.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33530){var self__ = this;
var _33530__$1 = this;return self__.meta33529;
});})(mults,ensure_mult))
;
cljs.core.async.t33528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33530,meta33529__$1){var self__ = this;
var _33530__$1 = this;return (new cljs.core.async.t33528(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta33529__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t33528 = ((function (mults,ensure_mult){
return (function __GT_t33528(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33529){return (new cljs.core.async.t33528(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33529));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t33528(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__22986__auto___33659 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22986__auto___33659,mults,ensure_mult,p){
return (function (){var f__22987__auto__ = (function (){var switch__22971__auto__ = ((function (c__22986__auto___33659,mults,ensure_mult,p){
return (function (state_33608){var state_val_33609 = (state_33608[(1)]);if((state_val_33609 === (7)))
{var inst_33604 = (state_33608[(2)]);var state_33608__$1 = state_33608;var statearr_33610_33660 = state_33608__$1;(statearr_33610_33660[(2)] = inst_33604);
(statearr_33610_33660[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33609 === (20)))
{var state_33608__$1 = state_33608;var statearr_33611_33661 = state_33608__$1;(statearr_33611_33661[(2)] = null);
(statearr_33611_33661[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33609 === (1)))
{var state_33608__$1 = state_33608;var statearr_33612_33662 = state_33608__$1;(statearr_33612_33662[(2)] = null);
(statearr_33612_33662[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33609 === (24)))
{var inst_33587 = (state_33608[(7)]);var inst_33537 = (state_33608[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_33608,(23),Object,null,(22));var inst_33594 = cljs.core.async.muxch_STAR_(inst_33587);var state_33608__$1 = state_33608;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33608__$1,(25),inst_33594,inst_33537);
} else
{if((state_val_33609 === (4)))
{var inst_33537 = (state_33608[(8)]);var inst_33537__$1 = (state_33608[(2)]);var inst_33538 = (inst_33537__$1 == null);var state_33608__$1 = (function (){var statearr_33613 = state_33608;(statearr_33613[(8)] = inst_33537__$1);
return statearr_33613;
})();if(cljs.core.truth_(inst_33538))
{var statearr_33614_33663 = state_33608__$1;(statearr_33614_33663[(1)] = (5));
} else
{var statearr_33615_33664 = state_33608__$1;(statearr_33615_33664[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33609 === (15)))
{var inst_33579 = (state_33608[(2)]);var state_33608__$1 = state_33608;var statearr_33616_33665 = state_33608__$1;(statearr_33616_33665[(2)] = inst_33579);
(statearr_33616_33665[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33609 === (21)))
{var inst_33601 = (state_33608[(2)]);var state_33608__$1 = (function (){var statearr_33617 = state_33608;(statearr_33617[(9)] = inst_33601);
return statearr_33617;
})();var statearr_33618_33666 = state_33608__$1;(statearr_33618_33666[(2)] = null);
(statearr_33618_33666[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33609 === (13)))
{var inst_33561 = (state_33608[(10)]);var inst_33563 = cljs.core.chunked_seq_QMARK_(inst_33561);var state_33608__$1 = state_33608;if(inst_33563)
{var statearr_33619_33667 = state_33608__$1;(statearr_33619_33667[(1)] = (16));
} else
{var statearr_33620_33668 = state_33608__$1;(statearr_33620_33668[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33609 === (22)))
{var inst_33598 = (state_33608[(2)]);var state_33608__$1 = state_33608;var statearr_33621_33669 = state_33608__$1;(statearr_33621_33669[(2)] = inst_33598);
(statearr_33621_33669[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33609 === (6)))
{var inst_33587 = (state_33608[(7)]);var inst_33537 = (state_33608[(8)]);var inst_33585 = (state_33608[(11)]);var inst_33585__$1 = (function (){var G__33622 = inst_33537;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__33622) : topic_fn.call(null,G__33622));
})();var inst_33586 = (function (){var G__33623 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33623) : cljs.core.deref.call(null,G__33623));
})();var inst_33587__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33586,inst_33585__$1);var state_33608__$1 = (function (){var statearr_33624 = state_33608;(statearr_33624[(7)] = inst_33587__$1);
(statearr_33624[(11)] = inst_33585__$1);
return statearr_33624;
})();if(cljs.core.truth_(inst_33587__$1))
{var statearr_33625_33670 = state_33608__$1;(statearr_33625_33670[(1)] = (19));
} else
{var statearr_33626_33671 = state_33608__$1;(statearr_33626_33671[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33609 === (25)))
{var inst_33596 = (state_33608[(2)]);var state_33608__$1 = state_33608;var statearr_33627_33672 = state_33608__$1;(statearr_33627_33672[(2)] = inst_33596);
cljs.core.async.impl.ioc_helpers.process_exception(state_33608__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33609 === (17)))
{var inst_33561 = (state_33608[(10)]);var inst_33570 = cljs.core.first(inst_33561);var inst_33571 = cljs.core.async.muxch_STAR_(inst_33570);var inst_33572 = cljs.core.async.close_BANG_(inst_33571);var inst_33573 = cljs.core.next(inst_33561);var inst_33547 = inst_33573;var inst_33548 = null;var inst_33549 = (0);var inst_33550 = (0);var state_33608__$1 = (function (){var statearr_33628 = state_33608;(statearr_33628[(12)] = inst_33548);
(statearr_33628[(13)] = inst_33549);
(statearr_33628[(14)] = inst_33572);
(statearr_33628[(15)] = inst_33550);
(statearr_33628[(16)] = inst_33547);
return statearr_33628;
})();var statearr_33629_33673 = state_33608__$1;(statearr_33629_33673[(2)] = null);
(statearr_33629_33673[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33609 === (3)))
{var inst_33606 = (state_33608[(2)]);var state_33608__$1 = state_33608;return cljs.core.async.impl.ioc_helpers.return_chan(state_33608__$1,inst_33606);
} else
{if((state_val_33609 === (12)))
{var inst_33581 = (state_33608[(2)]);var state_33608__$1 = state_33608;var statearr_33630_33674 = state_33608__$1;(statearr_33630_33674[(2)] = inst_33581);
(statearr_33630_33674[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33609 === (2)))
{var state_33608__$1 = state_33608;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33608__$1,(4),ch);
} else
{if((state_val_33609 === (23)))
{var inst_33585 = (state_33608[(11)]);var inst_33589 = (state_33608[(2)]);var inst_33590 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33585);var state_33608__$1 = (function (){var statearr_33631 = state_33608;(statearr_33631[(17)] = inst_33589);
return statearr_33631;
})();var statearr_33632_33675 = state_33608__$1;(statearr_33632_33675[(2)] = inst_33590);
cljs.core.async.impl.ioc_helpers.process_exception(state_33608__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33609 === (19)))
{var state_33608__$1 = state_33608;var statearr_33633_33676 = state_33608__$1;(statearr_33633_33676[(2)] = null);
(statearr_33633_33676[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33609 === (11)))
{var inst_33561 = (state_33608[(10)]);var inst_33547 = (state_33608[(16)]);var inst_33561__$1 = cljs.core.seq(inst_33547);var state_33608__$1 = (function (){var statearr_33634 = state_33608;(statearr_33634[(10)] = inst_33561__$1);
return statearr_33634;
})();if(inst_33561__$1)
{var statearr_33635_33677 = state_33608__$1;(statearr_33635_33677[(1)] = (13));
} else
{var statearr_33636_33678 = state_33608__$1;(statearr_33636_33678[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33609 === (9)))
{var inst_33583 = (state_33608[(2)]);var state_33608__$1 = state_33608;var statearr_33637_33679 = state_33608__$1;(statearr_33637_33679[(2)] = inst_33583);
(statearr_33637_33679[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33609 === (5)))
{var inst_33544 = (function (){var G__33638 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33638) : cljs.core.deref.call(null,G__33638));
})();var inst_33545 = cljs.core.vals(inst_33544);var inst_33546 = cljs.core.seq(inst_33545);var inst_33547 = inst_33546;var inst_33548 = null;var inst_33549 = (0);var inst_33550 = (0);var state_33608__$1 = (function (){var statearr_33639 = state_33608;(statearr_33639[(12)] = inst_33548);
(statearr_33639[(13)] = inst_33549);
(statearr_33639[(15)] = inst_33550);
(statearr_33639[(16)] = inst_33547);
return statearr_33639;
})();var statearr_33640_33680 = state_33608__$1;(statearr_33640_33680[(2)] = null);
(statearr_33640_33680[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33609 === (14)))
{var state_33608__$1 = state_33608;var statearr_33644_33681 = state_33608__$1;(statearr_33644_33681[(2)] = null);
(statearr_33644_33681[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33609 === (16)))
{var inst_33561 = (state_33608[(10)]);var inst_33565 = cljs.core.chunk_first(inst_33561);var inst_33566 = cljs.core.chunk_rest(inst_33561);var inst_33567 = cljs.core.count(inst_33565);var inst_33547 = inst_33566;var inst_33548 = inst_33565;var inst_33549 = inst_33567;var inst_33550 = (0);var state_33608__$1 = (function (){var statearr_33645 = state_33608;(statearr_33645[(12)] = inst_33548);
(statearr_33645[(13)] = inst_33549);
(statearr_33645[(15)] = inst_33550);
(statearr_33645[(16)] = inst_33547);
return statearr_33645;
})();var statearr_33646_33682 = state_33608__$1;(statearr_33646_33682[(2)] = null);
(statearr_33646_33682[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33609 === (10)))
{var inst_33548 = (state_33608[(12)]);var inst_33549 = (state_33608[(13)]);var inst_33550 = (state_33608[(15)]);var inst_33547 = (state_33608[(16)]);var inst_33555 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33548,inst_33550);var inst_33556 = cljs.core.async.muxch_STAR_(inst_33555);var inst_33557 = cljs.core.async.close_BANG_(inst_33556);var inst_33558 = (inst_33550 + (1));var tmp33641 = inst_33548;var tmp33642 = inst_33549;var tmp33643 = inst_33547;var inst_33547__$1 = tmp33643;var inst_33548__$1 = tmp33641;var inst_33549__$1 = tmp33642;var inst_33550__$1 = inst_33558;var state_33608__$1 = (function (){var statearr_33647 = state_33608;(statearr_33647[(12)] = inst_33548__$1);
(statearr_33647[(13)] = inst_33549__$1);
(statearr_33647[(15)] = inst_33550__$1);
(statearr_33647[(18)] = inst_33557);
(statearr_33647[(16)] = inst_33547__$1);
return statearr_33647;
})();var statearr_33648_33683 = state_33608__$1;(statearr_33648_33683[(2)] = null);
(statearr_33648_33683[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33609 === (18)))
{var inst_33576 = (state_33608[(2)]);var state_33608__$1 = state_33608;var statearr_33649_33684 = state_33608__$1;(statearr_33649_33684[(2)] = inst_33576);
(statearr_33649_33684[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33609 === (8)))
{var inst_33549 = (state_33608[(13)]);var inst_33550 = (state_33608[(15)]);var inst_33552 = (inst_33550 < inst_33549);var inst_33553 = inst_33552;var state_33608__$1 = state_33608;if(cljs.core.truth_(inst_33553))
{var statearr_33650_33685 = state_33608__$1;(statearr_33650_33685[(1)] = (10));
} else
{var statearr_33651_33686 = state_33608__$1;(statearr_33651_33686[(1)] = (11));
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
});})(c__22986__auto___33659,mults,ensure_mult,p))
;return ((function (switch__22971__auto__,c__22986__auto___33659,mults,ensure_mult,p){
return (function() {
var state_machine__22972__auto__ = null;
var state_machine__22972__auto____0 = (function (){var statearr_33655 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33655[(0)] = state_machine__22972__auto__);
(statearr_33655[(1)] = (1));
return statearr_33655;
});
var state_machine__22972__auto____1 = (function (state_33608){while(true){
var ret_value__22973__auto__ = (function (){try{while(true){
var result__22974__auto__ = switch__22971__auto__(state_33608);if(cljs.core.keyword_identical_QMARK_(result__22974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22974__auto__;
}
break;
}
}catch (e33656){if((e33656 instanceof Object))
{var ex__22975__auto__ = e33656;var statearr_33657_33687 = state_33608;(statearr_33657_33687[(5)] = ex__22975__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33608);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33656;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33688 = state_33608;
state_33608 = G__33688;
continue;
}
} else
{return ret_value__22973__auto__;
}
break;
}
});
state_machine__22972__auto__ = function(state_33608){
switch(arguments.length){
case 0:
return state_machine__22972__auto____0.call(this);
case 1:
return state_machine__22972__auto____1.call(this,state_33608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22972__auto____0;
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22972__auto____1;
return state_machine__22972__auto__;
})()
;})(switch__22971__auto__,c__22986__auto___33659,mults,ensure_mult,p))
})();var state__22988__auto__ = (function (){var statearr_33658 = (function (){return (f__22987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22987__auto__.cljs$core$IFn$_invoke$arity$0() : f__22987__auto__.call(null));
})();(statearr_33658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22986__auto___33659);
return statearr_33658;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22988__auto__);
});})(c__22986__auto___33659,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__33769 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33769) : cljs.core.atom.call(null,G__33769));
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__22986__auto___33842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22986__auto___33842,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__22987__auto__ = (function (){var switch__22971__auto__ = ((function (c__22986__auto___33842,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33808){var state_val_33809 = (state_33808[(1)]);if((state_val_33809 === (7)))
{var state_33808__$1 = state_33808;var statearr_33810_33843 = state_33808__$1;(statearr_33810_33843[(2)] = null);
(statearr_33810_33843[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33809 === (1)))
{var state_33808__$1 = state_33808;var statearr_33811_33844 = state_33808__$1;(statearr_33811_33844[(2)] = null);
(statearr_33811_33844[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33809 === (4)))
{var inst_33772 = (state_33808[(7)]);var inst_33774 = (inst_33772 < cnt);var state_33808__$1 = state_33808;if(cljs.core.truth_(inst_33774))
{var statearr_33812_33845 = state_33808__$1;(statearr_33812_33845[(1)] = (6));
} else
{var statearr_33813_33846 = state_33808__$1;(statearr_33813_33846[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33809 === (15)))
{var inst_33804 = (state_33808[(2)]);var state_33808__$1 = state_33808;var statearr_33814_33847 = state_33808__$1;(statearr_33814_33847[(2)] = inst_33804);
(statearr_33814_33847[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33809 === (13)))
{var inst_33797 = cljs.core.async.close_BANG_(out);var state_33808__$1 = state_33808;var statearr_33815_33848 = state_33808__$1;(statearr_33815_33848[(2)] = inst_33797);
(statearr_33815_33848[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33809 === (6)))
{var state_33808__$1 = state_33808;var statearr_33816_33849 = state_33808__$1;(statearr_33816_33849[(2)] = null);
(statearr_33816_33849[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33809 === (3)))
{var inst_33806 = (state_33808[(2)]);var state_33808__$1 = state_33808;return cljs.core.async.impl.ioc_helpers.return_chan(state_33808__$1,inst_33806);
} else
{if((state_val_33809 === (12)))
{var inst_33794 = (state_33808[(8)]);var inst_33794__$1 = (state_33808[(2)]);var inst_33795 = cljs.core.some(cljs.core.nil_QMARK_,inst_33794__$1);var state_33808__$1 = (function (){var statearr_33817 = state_33808;(statearr_33817[(8)] = inst_33794__$1);
return statearr_33817;
})();if(cljs.core.truth_(inst_33795))
{var statearr_33818_33850 = state_33808__$1;(statearr_33818_33850[(1)] = (13));
} else
{var statearr_33819_33851 = state_33808__$1;(statearr_33819_33851[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33809 === (2)))
{var inst_33771 = (function (){var G__33820 = dctr;var G__33821 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33820,G__33821) : cljs.core.reset_BANG_.call(null,G__33820,G__33821));
})();var inst_33772 = (0);var state_33808__$1 = (function (){var statearr_33822 = state_33808;(statearr_33822[(7)] = inst_33772);
(statearr_33822[(9)] = inst_33771);
return statearr_33822;
})();var statearr_33823_33852 = state_33808__$1;(statearr_33823_33852[(2)] = null);
(statearr_33823_33852[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33809 === (11)))
{var inst_33772 = (state_33808[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_33808,(10),Object,null,(9));var inst_33781 = (function (){var G__33824 = inst_33772;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__33824) : chs__$1.call(null,G__33824));
})();var inst_33782 = (function (){var G__33825 = inst_33772;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__33825) : done.call(null,G__33825));
})();var inst_33783 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33781,inst_33782);var state_33808__$1 = state_33808;var statearr_33826_33853 = state_33808__$1;(statearr_33826_33853[(2)] = inst_33783);
cljs.core.async.impl.ioc_helpers.process_exception(state_33808__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33809 === (9)))
{var inst_33772 = (state_33808[(7)]);var inst_33785 = (state_33808[(2)]);var inst_33786 = (inst_33772 + (1));var inst_33772__$1 = inst_33786;var state_33808__$1 = (function (){var statearr_33827 = state_33808;(statearr_33827[(7)] = inst_33772__$1);
(statearr_33827[(10)] = inst_33785);
return statearr_33827;
})();var statearr_33828_33854 = state_33808__$1;(statearr_33828_33854[(2)] = null);
(statearr_33828_33854[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33809 === (5)))
{var inst_33792 = (state_33808[(2)]);var state_33808__$1 = (function (){var statearr_33829 = state_33808;(statearr_33829[(11)] = inst_33792);
return statearr_33829;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33808__$1,(12),dchan);
} else
{if((state_val_33809 === (14)))
{var inst_33794 = (state_33808[(8)]);var inst_33799 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33794);var state_33808__$1 = state_33808;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33808__$1,(16),out,inst_33799);
} else
{if((state_val_33809 === (16)))
{var inst_33801 = (state_33808[(2)]);var state_33808__$1 = (function (){var statearr_33830 = state_33808;(statearr_33830[(12)] = inst_33801);
return statearr_33830;
})();var statearr_33831_33855 = state_33808__$1;(statearr_33831_33855[(2)] = null);
(statearr_33831_33855[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33809 === (10)))
{var inst_33776 = (state_33808[(2)]);var inst_33777 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_33808__$1 = (function (){var statearr_33832 = state_33808;(statearr_33832[(13)] = inst_33776);
return statearr_33832;
})();var statearr_33833_33856 = state_33808__$1;(statearr_33833_33856[(2)] = inst_33777);
cljs.core.async.impl.ioc_helpers.process_exception(state_33808__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33809 === (8)))
{var inst_33790 = (state_33808[(2)]);var state_33808__$1 = state_33808;var statearr_33834_33857 = state_33808__$1;(statearr_33834_33857[(2)] = inst_33790);
(statearr_33834_33857[(1)] = (5));
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
});})(c__22986__auto___33842,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__22971__auto__,c__22986__auto___33842,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__22972__auto__ = null;
var state_machine__22972__auto____0 = (function (){var statearr_33838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33838[(0)] = state_machine__22972__auto__);
(statearr_33838[(1)] = (1));
return statearr_33838;
});
var state_machine__22972__auto____1 = (function (state_33808){while(true){
var ret_value__22973__auto__ = (function (){try{while(true){
var result__22974__auto__ = switch__22971__auto__(state_33808);if(cljs.core.keyword_identical_QMARK_(result__22974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22974__auto__;
}
break;
}
}catch (e33839){if((e33839 instanceof Object))
{var ex__22975__auto__ = e33839;var statearr_33840_33858 = state_33808;(statearr_33840_33858[(5)] = ex__22975__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33808);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33839;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33859 = state_33808;
state_33808 = G__33859;
continue;
}
} else
{return ret_value__22973__auto__;
}
break;
}
});
state_machine__22972__auto__ = function(state_33808){
switch(arguments.length){
case 0:
return state_machine__22972__auto____0.call(this);
case 1:
return state_machine__22972__auto____1.call(this,state_33808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22972__auto____0;
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22972__auto____1;
return state_machine__22972__auto__;
})()
;})(switch__22971__auto__,c__22986__auto___33842,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__22988__auto__ = (function (){var statearr_33841 = (function (){return (f__22987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22987__auto__.cljs$core$IFn$_invoke$arity$0() : f__22987__auto__.call(null));
})();(statearr_33841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22986__auto___33842);
return statearr_33841;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22988__auto__);
});})(c__22986__auto___33842,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22986__auto___33969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22986__auto___33969,out){
return (function (){var f__22987__auto__ = (function (){var switch__22971__auto__ = ((function (c__22986__auto___33969,out){
return (function (state_33945){var state_val_33946 = (state_33945[(1)]);if((state_val_33946 === (7)))
{var inst_33924 = (state_33945[(7)]);var inst_33925 = (state_33945[(8)]);var inst_33924__$1 = (state_33945[(2)]);var inst_33925__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33924__$1,(0),null);var inst_33926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33924__$1,(1),null);var inst_33927 = (inst_33925__$1 == null);var state_33945__$1 = (function (){var statearr_33947 = state_33945;(statearr_33947[(7)] = inst_33924__$1);
(statearr_33947[(9)] = inst_33926);
(statearr_33947[(8)] = inst_33925__$1);
return statearr_33947;
})();if(cljs.core.truth_(inst_33927))
{var statearr_33948_33970 = state_33945__$1;(statearr_33948_33970[(1)] = (8));
} else
{var statearr_33949_33971 = state_33945__$1;(statearr_33949_33971[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33946 === (1)))
{var inst_33916 = cljs.core.vec(chs);var inst_33917 = inst_33916;var state_33945__$1 = (function (){var statearr_33950 = state_33945;(statearr_33950[(10)] = inst_33917);
return statearr_33950;
})();var statearr_33951_33972 = state_33945__$1;(statearr_33951_33972[(2)] = null);
(statearr_33951_33972[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33946 === (4)))
{var inst_33917 = (state_33945[(10)]);var state_33945__$1 = state_33945;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_33945__$1,(7),inst_33917);
} else
{if((state_val_33946 === (6)))
{var inst_33941 = (state_33945[(2)]);var state_33945__$1 = state_33945;var statearr_33952_33973 = state_33945__$1;(statearr_33952_33973[(2)] = inst_33941);
(statearr_33952_33973[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33946 === (3)))
{var inst_33943 = (state_33945[(2)]);var state_33945__$1 = state_33945;return cljs.core.async.impl.ioc_helpers.return_chan(state_33945__$1,inst_33943);
} else
{if((state_val_33946 === (2)))
{var inst_33917 = (state_33945[(10)]);var inst_33919 = cljs.core.count(inst_33917);var inst_33920 = (inst_33919 > (0));var state_33945__$1 = state_33945;if(cljs.core.truth_(inst_33920))
{var statearr_33954_33974 = state_33945__$1;(statearr_33954_33974[(1)] = (4));
} else
{var statearr_33955_33975 = state_33945__$1;(statearr_33955_33975[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33946 === (11)))
{var inst_33917 = (state_33945[(10)]);var inst_33934 = (state_33945[(2)]);var tmp33953 = inst_33917;var inst_33917__$1 = tmp33953;var state_33945__$1 = (function (){var statearr_33956 = state_33945;(statearr_33956[(11)] = inst_33934);
(statearr_33956[(10)] = inst_33917__$1);
return statearr_33956;
})();var statearr_33957_33976 = state_33945__$1;(statearr_33957_33976[(2)] = null);
(statearr_33957_33976[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33946 === (9)))
{var inst_33925 = (state_33945[(8)]);var state_33945__$1 = state_33945;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33945__$1,(11),out,inst_33925);
} else
{if((state_val_33946 === (5)))
{var inst_33939 = cljs.core.async.close_BANG_(out);var state_33945__$1 = state_33945;var statearr_33958_33977 = state_33945__$1;(statearr_33958_33977[(2)] = inst_33939);
(statearr_33958_33977[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33946 === (10)))
{var inst_33937 = (state_33945[(2)]);var state_33945__$1 = state_33945;var statearr_33959_33978 = state_33945__$1;(statearr_33959_33978[(2)] = inst_33937);
(statearr_33959_33978[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33946 === (8)))
{var inst_33924 = (state_33945[(7)]);var inst_33926 = (state_33945[(9)]);var inst_33917 = (state_33945[(10)]);var inst_33925 = (state_33945[(8)]);var inst_33929 = (function (){var c = inst_33926;var v = inst_33925;var vec__33922 = inst_33924;var cs = inst_33917;return ((function (c,v,vec__33922,cs,inst_33924,inst_33926,inst_33917,inst_33925,state_val_33946,c__22986__auto___33969,out){
return (function (p1__33860_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33860_SHARP_);
});
;})(c,v,vec__33922,cs,inst_33924,inst_33926,inst_33917,inst_33925,state_val_33946,c__22986__auto___33969,out))
})();var inst_33930 = cljs.core.filterv(inst_33929,inst_33917);var inst_33917__$1 = inst_33930;var state_33945__$1 = (function (){var statearr_33960 = state_33945;(statearr_33960[(10)] = inst_33917__$1);
return statearr_33960;
})();var statearr_33961_33979 = state_33945__$1;(statearr_33961_33979[(2)] = null);
(statearr_33961_33979[(1)] = (2));
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
});})(c__22986__auto___33969,out))
;return ((function (switch__22971__auto__,c__22986__auto___33969,out){
return (function() {
var state_machine__22972__auto__ = null;
var state_machine__22972__auto____0 = (function (){var statearr_33965 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33965[(0)] = state_machine__22972__auto__);
(statearr_33965[(1)] = (1));
return statearr_33965;
});
var state_machine__22972__auto____1 = (function (state_33945){while(true){
var ret_value__22973__auto__ = (function (){try{while(true){
var result__22974__auto__ = switch__22971__auto__(state_33945);if(cljs.core.keyword_identical_QMARK_(result__22974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22974__auto__;
}
break;
}
}catch (e33966){if((e33966 instanceof Object))
{var ex__22975__auto__ = e33966;var statearr_33967_33980 = state_33945;(statearr_33967_33980[(5)] = ex__22975__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33945);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33966;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33981 = state_33945;
state_33945 = G__33981;
continue;
}
} else
{return ret_value__22973__auto__;
}
break;
}
});
state_machine__22972__auto__ = function(state_33945){
switch(arguments.length){
case 0:
return state_machine__22972__auto____0.call(this);
case 1:
return state_machine__22972__auto____1.call(this,state_33945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22972__auto____0;
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22972__auto____1;
return state_machine__22972__auto__;
})()
;})(switch__22971__auto__,c__22986__auto___33969,out))
})();var state__22988__auto__ = (function (){var statearr_33968 = (function (){return (f__22987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22987__auto__.cljs$core$IFn$_invoke$arity$0() : f__22987__auto__.call(null));
})();(statearr_33968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22986__auto___33969);
return statearr_33968;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22988__auto__);
});})(c__22986__auto___33969,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22986__auto___34077 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22986__auto___34077,out){
return (function (){var f__22987__auto__ = (function (){var switch__22971__auto__ = ((function (c__22986__auto___34077,out){
return (function (state_34054){var state_val_34055 = (state_34054[(1)]);if((state_val_34055 === (7)))
{var inst_34036 = (state_34054[(7)]);var inst_34036__$1 = (state_34054[(2)]);var inst_34037 = (inst_34036__$1 == null);var inst_34038 = cljs.core.not(inst_34037);var state_34054__$1 = (function (){var statearr_34056 = state_34054;(statearr_34056[(7)] = inst_34036__$1);
return statearr_34056;
})();if(inst_34038)
{var statearr_34057_34078 = state_34054__$1;(statearr_34057_34078[(1)] = (8));
} else
{var statearr_34058_34079 = state_34054__$1;(statearr_34058_34079[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34055 === (1)))
{var inst_34031 = (0);var state_34054__$1 = (function (){var statearr_34059 = state_34054;(statearr_34059[(8)] = inst_34031);
return statearr_34059;
})();var statearr_34060_34080 = state_34054__$1;(statearr_34060_34080[(2)] = null);
(statearr_34060_34080[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34055 === (4)))
{var state_34054__$1 = state_34054;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34054__$1,(7),ch);
} else
{if((state_val_34055 === (6)))
{var inst_34049 = (state_34054[(2)]);var state_34054__$1 = state_34054;var statearr_34061_34081 = state_34054__$1;(statearr_34061_34081[(2)] = inst_34049);
(statearr_34061_34081[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34055 === (3)))
{var inst_34051 = (state_34054[(2)]);var inst_34052 = cljs.core.async.close_BANG_(out);var state_34054__$1 = (function (){var statearr_34062 = state_34054;(statearr_34062[(9)] = inst_34051);
return statearr_34062;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_34054__$1,inst_34052);
} else
{if((state_val_34055 === (2)))
{var inst_34031 = (state_34054[(8)]);var inst_34033 = (inst_34031 < n);var state_34054__$1 = state_34054;if(cljs.core.truth_(inst_34033))
{var statearr_34063_34082 = state_34054__$1;(statearr_34063_34082[(1)] = (4));
} else
{var statearr_34064_34083 = state_34054__$1;(statearr_34064_34083[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34055 === (11)))
{var inst_34031 = (state_34054[(8)]);var inst_34041 = (state_34054[(2)]);var inst_34042 = (inst_34031 + (1));var inst_34031__$1 = inst_34042;var state_34054__$1 = (function (){var statearr_34065 = state_34054;(statearr_34065[(10)] = inst_34041);
(statearr_34065[(8)] = inst_34031__$1);
return statearr_34065;
})();var statearr_34066_34084 = state_34054__$1;(statearr_34066_34084[(2)] = null);
(statearr_34066_34084[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34055 === (9)))
{var state_34054__$1 = state_34054;var statearr_34067_34085 = state_34054__$1;(statearr_34067_34085[(2)] = null);
(statearr_34067_34085[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34055 === (5)))
{var state_34054__$1 = state_34054;var statearr_34068_34086 = state_34054__$1;(statearr_34068_34086[(2)] = null);
(statearr_34068_34086[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34055 === (10)))
{var inst_34046 = (state_34054[(2)]);var state_34054__$1 = state_34054;var statearr_34069_34087 = state_34054__$1;(statearr_34069_34087[(2)] = inst_34046);
(statearr_34069_34087[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34055 === (8)))
{var inst_34036 = (state_34054[(7)]);var state_34054__$1 = state_34054;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34054__$1,(11),out,inst_34036);
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
});})(c__22986__auto___34077,out))
;return ((function (switch__22971__auto__,c__22986__auto___34077,out){
return (function() {
var state_machine__22972__auto__ = null;
var state_machine__22972__auto____0 = (function (){var statearr_34073 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_34073[(0)] = state_machine__22972__auto__);
(statearr_34073[(1)] = (1));
return statearr_34073;
});
var state_machine__22972__auto____1 = (function (state_34054){while(true){
var ret_value__22973__auto__ = (function (){try{while(true){
var result__22974__auto__ = switch__22971__auto__(state_34054);if(cljs.core.keyword_identical_QMARK_(result__22974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22974__auto__;
}
break;
}
}catch (e34074){if((e34074 instanceof Object))
{var ex__22975__auto__ = e34074;var statearr_34075_34088 = state_34054;(statearr_34075_34088[(5)] = ex__22975__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34054);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34074;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34089 = state_34054;
state_34054 = G__34089;
continue;
}
} else
{return ret_value__22973__auto__;
}
break;
}
});
state_machine__22972__auto__ = function(state_34054){
switch(arguments.length){
case 0:
return state_machine__22972__auto____0.call(this);
case 1:
return state_machine__22972__auto____1.call(this,state_34054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22972__auto____0;
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22972__auto____1;
return state_machine__22972__auto__;
})()
;})(switch__22971__auto__,c__22986__auto___34077,out))
})();var state__22988__auto__ = (function (){var statearr_34076 = (function (){return (f__22987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22987__auto__.cljs$core$IFn$_invoke$arity$0() : f__22987__auto__.call(null));
})();(statearr_34076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22986__auto___34077);
return statearr_34076;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22988__auto__);
});})(c__22986__auto___34077,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22986__auto___34188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22986__auto___34188,out){
return (function (){var f__22987__auto__ = (function (){var switch__22971__auto__ = ((function (c__22986__auto___34188,out){
return (function (state_34163){var state_val_34164 = (state_34163[(1)]);if((state_val_34164 === (7)))
{var inst_34158 = (state_34163[(2)]);var state_34163__$1 = state_34163;var statearr_34165_34189 = state_34163__$1;(statearr_34165_34189[(2)] = inst_34158);
(statearr_34165_34189[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34164 === (1)))
{var inst_34140 = null;var state_34163__$1 = (function (){var statearr_34166 = state_34163;(statearr_34166[(7)] = inst_34140);
return statearr_34166;
})();var statearr_34167_34190 = state_34163__$1;(statearr_34167_34190[(2)] = null);
(statearr_34167_34190[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34164 === (4)))
{var inst_34143 = (state_34163[(8)]);var inst_34143__$1 = (state_34163[(2)]);var inst_34144 = (inst_34143__$1 == null);var inst_34145 = cljs.core.not(inst_34144);var state_34163__$1 = (function (){var statearr_34168 = state_34163;(statearr_34168[(8)] = inst_34143__$1);
return statearr_34168;
})();if(inst_34145)
{var statearr_34169_34191 = state_34163__$1;(statearr_34169_34191[(1)] = (5));
} else
{var statearr_34170_34192 = state_34163__$1;(statearr_34170_34192[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34164 === (6)))
{var state_34163__$1 = state_34163;var statearr_34171_34193 = state_34163__$1;(statearr_34171_34193[(2)] = null);
(statearr_34171_34193[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34164 === (3)))
{var inst_34160 = (state_34163[(2)]);var inst_34161 = cljs.core.async.close_BANG_(out);var state_34163__$1 = (function (){var statearr_34172 = state_34163;(statearr_34172[(9)] = inst_34160);
return statearr_34172;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_34163__$1,inst_34161);
} else
{if((state_val_34164 === (2)))
{var state_34163__$1 = state_34163;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34163__$1,(4),ch);
} else
{if((state_val_34164 === (11)))
{var inst_34143 = (state_34163[(8)]);var inst_34152 = (state_34163[(2)]);var inst_34140 = inst_34143;var state_34163__$1 = (function (){var statearr_34173 = state_34163;(statearr_34173[(10)] = inst_34152);
(statearr_34173[(7)] = inst_34140);
return statearr_34173;
})();var statearr_34174_34194 = state_34163__$1;(statearr_34174_34194[(2)] = null);
(statearr_34174_34194[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34164 === (9)))
{var inst_34143 = (state_34163[(8)]);var state_34163__$1 = state_34163;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34163__$1,(11),out,inst_34143);
} else
{if((state_val_34164 === (5)))
{var inst_34140 = (state_34163[(7)]);var inst_34143 = (state_34163[(8)]);var inst_34147 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34143,inst_34140);var state_34163__$1 = state_34163;if(inst_34147)
{var statearr_34176_34195 = state_34163__$1;(statearr_34176_34195[(1)] = (8));
} else
{var statearr_34177_34196 = state_34163__$1;(statearr_34177_34196[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34164 === (10)))
{var inst_34155 = (state_34163[(2)]);var state_34163__$1 = state_34163;var statearr_34178_34197 = state_34163__$1;(statearr_34178_34197[(2)] = inst_34155);
(statearr_34178_34197[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34164 === (8)))
{var inst_34140 = (state_34163[(7)]);var tmp34175 = inst_34140;var inst_34140__$1 = tmp34175;var state_34163__$1 = (function (){var statearr_34179 = state_34163;(statearr_34179[(7)] = inst_34140__$1);
return statearr_34179;
})();var statearr_34180_34198 = state_34163__$1;(statearr_34180_34198[(2)] = null);
(statearr_34180_34198[(1)] = (2));
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
});})(c__22986__auto___34188,out))
;return ((function (switch__22971__auto__,c__22986__auto___34188,out){
return (function() {
var state_machine__22972__auto__ = null;
var state_machine__22972__auto____0 = (function (){var statearr_34184 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_34184[(0)] = state_machine__22972__auto__);
(statearr_34184[(1)] = (1));
return statearr_34184;
});
var state_machine__22972__auto____1 = (function (state_34163){while(true){
var ret_value__22973__auto__ = (function (){try{while(true){
var result__22974__auto__ = switch__22971__auto__(state_34163);if(cljs.core.keyword_identical_QMARK_(result__22974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22974__auto__;
}
break;
}
}catch (e34185){if((e34185 instanceof Object))
{var ex__22975__auto__ = e34185;var statearr_34186_34199 = state_34163;(statearr_34186_34199[(5)] = ex__22975__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34163);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34185;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34200 = state_34163;
state_34163 = G__34200;
continue;
}
} else
{return ret_value__22973__auto__;
}
break;
}
});
state_machine__22972__auto__ = function(state_34163){
switch(arguments.length){
case 0:
return state_machine__22972__auto____0.call(this);
case 1:
return state_machine__22972__auto____1.call(this,state_34163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22972__auto____0;
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22972__auto____1;
return state_machine__22972__auto__;
})()
;})(switch__22971__auto__,c__22986__auto___34188,out))
})();var state__22988__auto__ = (function (){var statearr_34187 = (function (){return (f__22987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22987__auto__.cljs$core$IFn$_invoke$arity$0() : f__22987__auto__.call(null));
})();(statearr_34187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22986__auto___34188);
return statearr_34187;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22988__auto__);
});})(c__22986__auto___34188,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22986__auto___34338 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22986__auto___34338,out){
return (function (){var f__22987__auto__ = (function (){var switch__22971__auto__ = ((function (c__22986__auto___34338,out){
return (function (state_34308){var state_val_34309 = (state_34308[(1)]);if((state_val_34309 === (7)))
{var inst_34304 = (state_34308[(2)]);var state_34308__$1 = state_34308;var statearr_34310_34339 = state_34308__$1;(statearr_34310_34339[(2)] = inst_34304);
(statearr_34310_34339[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34309 === (1)))
{var inst_34271 = (new Array(n));var inst_34272 = inst_34271;var inst_34273 = (0);var state_34308__$1 = (function (){var statearr_34311 = state_34308;(statearr_34311[(7)] = inst_34272);
(statearr_34311[(8)] = inst_34273);
return statearr_34311;
})();var statearr_34312_34340 = state_34308__$1;(statearr_34312_34340[(2)] = null);
(statearr_34312_34340[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34309 === (4)))
{var inst_34276 = (state_34308[(9)]);var inst_34276__$1 = (state_34308[(2)]);var inst_34277 = (inst_34276__$1 == null);var inst_34278 = cljs.core.not(inst_34277);var state_34308__$1 = (function (){var statearr_34313 = state_34308;(statearr_34313[(9)] = inst_34276__$1);
return statearr_34313;
})();if(inst_34278)
{var statearr_34314_34341 = state_34308__$1;(statearr_34314_34341[(1)] = (5));
} else
{var statearr_34315_34342 = state_34308__$1;(statearr_34315_34342[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34309 === (15)))
{var inst_34298 = (state_34308[(2)]);var state_34308__$1 = state_34308;var statearr_34316_34343 = state_34308__$1;(statearr_34316_34343[(2)] = inst_34298);
(statearr_34316_34343[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34309 === (13)))
{var state_34308__$1 = state_34308;var statearr_34317_34344 = state_34308__$1;(statearr_34317_34344[(2)] = null);
(statearr_34317_34344[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34309 === (6)))
{var inst_34273 = (state_34308[(8)]);var inst_34294 = (inst_34273 > (0));var state_34308__$1 = state_34308;if(cljs.core.truth_(inst_34294))
{var statearr_34318_34345 = state_34308__$1;(statearr_34318_34345[(1)] = (12));
} else
{var statearr_34319_34346 = state_34308__$1;(statearr_34319_34346[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34309 === (3)))
{var inst_34306 = (state_34308[(2)]);var state_34308__$1 = state_34308;return cljs.core.async.impl.ioc_helpers.return_chan(state_34308__$1,inst_34306);
} else
{if((state_val_34309 === (12)))
{var inst_34272 = (state_34308[(7)]);var inst_34296 = cljs.core.vec(inst_34272);var state_34308__$1 = state_34308;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34308__$1,(15),out,inst_34296);
} else
{if((state_val_34309 === (2)))
{var state_34308__$1 = state_34308;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34308__$1,(4),ch);
} else
{if((state_val_34309 === (11)))
{var inst_34288 = (state_34308[(2)]);var inst_34289 = (new Array(n));var inst_34272 = inst_34289;var inst_34273 = (0);var state_34308__$1 = (function (){var statearr_34320 = state_34308;(statearr_34320[(7)] = inst_34272);
(statearr_34320[(8)] = inst_34273);
(statearr_34320[(10)] = inst_34288);
return statearr_34320;
})();var statearr_34321_34347 = state_34308__$1;(statearr_34321_34347[(2)] = null);
(statearr_34321_34347[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34309 === (9)))
{var inst_34272 = (state_34308[(7)]);var inst_34286 = cljs.core.vec(inst_34272);var state_34308__$1 = state_34308;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34308__$1,(11),out,inst_34286);
} else
{if((state_val_34309 === (5)))
{var inst_34272 = (state_34308[(7)]);var inst_34273 = (state_34308[(8)]);var inst_34281 = (state_34308[(11)]);var inst_34276 = (state_34308[(9)]);var inst_34280 = (inst_34272[inst_34273] = inst_34276);var inst_34281__$1 = (inst_34273 + (1));var inst_34282 = (inst_34281__$1 < n);var state_34308__$1 = (function (){var statearr_34322 = state_34308;(statearr_34322[(12)] = inst_34280);
(statearr_34322[(11)] = inst_34281__$1);
return statearr_34322;
})();if(cljs.core.truth_(inst_34282))
{var statearr_34323_34348 = state_34308__$1;(statearr_34323_34348[(1)] = (8));
} else
{var statearr_34324_34349 = state_34308__$1;(statearr_34324_34349[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34309 === (14)))
{var inst_34301 = (state_34308[(2)]);var inst_34302 = cljs.core.async.close_BANG_(out);var state_34308__$1 = (function (){var statearr_34326 = state_34308;(statearr_34326[(13)] = inst_34301);
return statearr_34326;
})();var statearr_34327_34350 = state_34308__$1;(statearr_34327_34350[(2)] = inst_34302);
(statearr_34327_34350[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34309 === (10)))
{var inst_34292 = (state_34308[(2)]);var state_34308__$1 = state_34308;var statearr_34328_34351 = state_34308__$1;(statearr_34328_34351[(2)] = inst_34292);
(statearr_34328_34351[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34309 === (8)))
{var inst_34272 = (state_34308[(7)]);var inst_34281 = (state_34308[(11)]);var tmp34325 = inst_34272;var inst_34272__$1 = tmp34325;var inst_34273 = inst_34281;var state_34308__$1 = (function (){var statearr_34329 = state_34308;(statearr_34329[(7)] = inst_34272__$1);
(statearr_34329[(8)] = inst_34273);
return statearr_34329;
})();var statearr_34330_34352 = state_34308__$1;(statearr_34330_34352[(2)] = null);
(statearr_34330_34352[(1)] = (2));
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
});})(c__22986__auto___34338,out))
;return ((function (switch__22971__auto__,c__22986__auto___34338,out){
return (function() {
var state_machine__22972__auto__ = null;
var state_machine__22972__auto____0 = (function (){var statearr_34334 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34334[(0)] = state_machine__22972__auto__);
(statearr_34334[(1)] = (1));
return statearr_34334;
});
var state_machine__22972__auto____1 = (function (state_34308){while(true){
var ret_value__22973__auto__ = (function (){try{while(true){
var result__22974__auto__ = switch__22971__auto__(state_34308);if(cljs.core.keyword_identical_QMARK_(result__22974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22974__auto__;
}
break;
}
}catch (e34335){if((e34335 instanceof Object))
{var ex__22975__auto__ = e34335;var statearr_34336_34353 = state_34308;(statearr_34336_34353[(5)] = ex__22975__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34308);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34335;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34354 = state_34308;
state_34308 = G__34354;
continue;
}
} else
{return ret_value__22973__auto__;
}
break;
}
});
state_machine__22972__auto__ = function(state_34308){
switch(arguments.length){
case 0:
return state_machine__22972__auto____0.call(this);
case 1:
return state_machine__22972__auto____1.call(this,state_34308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22972__auto____0;
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22972__auto____1;
return state_machine__22972__auto__;
})()
;})(switch__22971__auto__,c__22986__auto___34338,out))
})();var state__22988__auto__ = (function (){var statearr_34337 = (function (){return (f__22987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22987__auto__.cljs$core$IFn$_invoke$arity$0() : f__22987__auto__.call(null));
})();(statearr_34337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22986__auto___34338);
return statearr_34337;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22988__auto__);
});})(c__22986__auto___34338,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22986__auto___34502 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22986__auto___34502,out){
return (function (){var f__22987__auto__ = (function (){var switch__22971__auto__ = ((function (c__22986__auto___34502,out){
return (function (state_34471){var state_val_34472 = (state_34471[(1)]);if((state_val_34472 === (7)))
{var inst_34467 = (state_34471[(2)]);var state_34471__$1 = state_34471;var statearr_34473_34503 = state_34471__$1;(statearr_34473_34503[(2)] = inst_34467);
(statearr_34473_34503[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34472 === (1)))
{var inst_34430 = [];var inst_34431 = inst_34430;var inst_34432 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_34471__$1 = (function (){var statearr_34474 = state_34471;(statearr_34474[(7)] = inst_34431);
(statearr_34474[(8)] = inst_34432);
return statearr_34474;
})();var statearr_34475_34504 = state_34471__$1;(statearr_34475_34504[(2)] = null);
(statearr_34475_34504[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34472 === (4)))
{var inst_34435 = (state_34471[(9)]);var inst_34435__$1 = (state_34471[(2)]);var inst_34436 = (inst_34435__$1 == null);var inst_34437 = cljs.core.not(inst_34436);var state_34471__$1 = (function (){var statearr_34476 = state_34471;(statearr_34476[(9)] = inst_34435__$1);
return statearr_34476;
})();if(inst_34437)
{var statearr_34477_34505 = state_34471__$1;(statearr_34477_34505[(1)] = (5));
} else
{var statearr_34478_34506 = state_34471__$1;(statearr_34478_34506[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34472 === (15)))
{var inst_34461 = (state_34471[(2)]);var state_34471__$1 = state_34471;var statearr_34479_34507 = state_34471__$1;(statearr_34479_34507[(2)] = inst_34461);
(statearr_34479_34507[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34472 === (13)))
{var state_34471__$1 = state_34471;var statearr_34480_34508 = state_34471__$1;(statearr_34480_34508[(2)] = null);
(statearr_34480_34508[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34472 === (6)))
{var inst_34431 = (state_34471[(7)]);var inst_34456 = inst_34431.length;var inst_34457 = (inst_34456 > (0));var state_34471__$1 = state_34471;if(cljs.core.truth_(inst_34457))
{var statearr_34481_34509 = state_34471__$1;(statearr_34481_34509[(1)] = (12));
} else
{var statearr_34482_34510 = state_34471__$1;(statearr_34482_34510[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34472 === (3)))
{var inst_34469 = (state_34471[(2)]);var state_34471__$1 = state_34471;return cljs.core.async.impl.ioc_helpers.return_chan(state_34471__$1,inst_34469);
} else
{if((state_val_34472 === (12)))
{var inst_34431 = (state_34471[(7)]);var inst_34459 = cljs.core.vec(inst_34431);var state_34471__$1 = state_34471;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34471__$1,(15),out,inst_34459);
} else
{if((state_val_34472 === (2)))
{var state_34471__$1 = state_34471;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34471__$1,(4),ch);
} else
{if((state_val_34472 === (11)))
{var inst_34439 = (state_34471[(10)]);var inst_34435 = (state_34471[(9)]);var inst_34449 = (state_34471[(2)]);var inst_34450 = [];var inst_34451 = inst_34450.push(inst_34435);var inst_34431 = inst_34450;var inst_34432 = inst_34439;var state_34471__$1 = (function (){var statearr_34483 = state_34471;(statearr_34483[(11)] = inst_34451);
(statearr_34483[(7)] = inst_34431);
(statearr_34483[(8)] = inst_34432);
(statearr_34483[(12)] = inst_34449);
return statearr_34483;
})();var statearr_34484_34511 = state_34471__$1;(statearr_34484_34511[(2)] = null);
(statearr_34484_34511[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34472 === (9)))
{var inst_34431 = (state_34471[(7)]);var inst_34447 = cljs.core.vec(inst_34431);var state_34471__$1 = state_34471;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34471__$1,(11),out,inst_34447);
} else
{if((state_val_34472 === (5)))
{var inst_34439 = (state_34471[(10)]);var inst_34432 = (state_34471[(8)]);var inst_34435 = (state_34471[(9)]);var inst_34439__$1 = (function (){var G__34485 = inst_34435;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34485) : f.call(null,G__34485));
})();var inst_34440 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34439__$1,inst_34432);var inst_34441 = cljs.core.keyword_identical_QMARK_(inst_34432,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_34442 = (inst_34440) || (inst_34441);var state_34471__$1 = (function (){var statearr_34486 = state_34471;(statearr_34486[(10)] = inst_34439__$1);
return statearr_34486;
})();if(cljs.core.truth_(inst_34442))
{var statearr_34487_34512 = state_34471__$1;(statearr_34487_34512[(1)] = (8));
} else
{var statearr_34488_34513 = state_34471__$1;(statearr_34488_34513[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34472 === (14)))
{var inst_34464 = (state_34471[(2)]);var inst_34465 = cljs.core.async.close_BANG_(out);var state_34471__$1 = (function (){var statearr_34490 = state_34471;(statearr_34490[(13)] = inst_34464);
return statearr_34490;
})();var statearr_34491_34514 = state_34471__$1;(statearr_34491_34514[(2)] = inst_34465);
(statearr_34491_34514[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34472 === (10)))
{var inst_34454 = (state_34471[(2)]);var state_34471__$1 = state_34471;var statearr_34492_34515 = state_34471__$1;(statearr_34492_34515[(2)] = inst_34454);
(statearr_34492_34515[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34472 === (8)))
{var inst_34431 = (state_34471[(7)]);var inst_34439 = (state_34471[(10)]);var inst_34435 = (state_34471[(9)]);var inst_34444 = inst_34431.push(inst_34435);var tmp34489 = inst_34431;var inst_34431__$1 = tmp34489;var inst_34432 = inst_34439;var state_34471__$1 = (function (){var statearr_34493 = state_34471;(statearr_34493[(7)] = inst_34431__$1);
(statearr_34493[(8)] = inst_34432);
(statearr_34493[(14)] = inst_34444);
return statearr_34493;
})();var statearr_34494_34516 = state_34471__$1;(statearr_34494_34516[(2)] = null);
(statearr_34494_34516[(1)] = (2));
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
});})(c__22986__auto___34502,out))
;return ((function (switch__22971__auto__,c__22986__auto___34502,out){
return (function() {
var state_machine__22972__auto__ = null;
var state_machine__22972__auto____0 = (function (){var statearr_34498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34498[(0)] = state_machine__22972__auto__);
(statearr_34498[(1)] = (1));
return statearr_34498;
});
var state_machine__22972__auto____1 = (function (state_34471){while(true){
var ret_value__22973__auto__ = (function (){try{while(true){
var result__22974__auto__ = switch__22971__auto__(state_34471);if(cljs.core.keyword_identical_QMARK_(result__22974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22974__auto__;
}
break;
}
}catch (e34499){if((e34499 instanceof Object))
{var ex__22975__auto__ = e34499;var statearr_34500_34517 = state_34471;(statearr_34500_34517[(5)] = ex__22975__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34471);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34499;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34518 = state_34471;
state_34471 = G__34518;
continue;
}
} else
{return ret_value__22973__auto__;
}
break;
}
});
state_machine__22972__auto__ = function(state_34471){
switch(arguments.length){
case 0:
return state_machine__22972__auto____0.call(this);
case 1:
return state_machine__22972__auto____1.call(this,state_34471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22972__auto____0;
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22972__auto____1;
return state_machine__22972__auto__;
})()
;})(switch__22971__auto__,c__22986__auto___34502,out))
})();var state__22988__auto__ = (function (){var statearr_34501 = (function (){return (f__22987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22987__auto__.cljs$core$IFn$_invoke$arity$0() : f__22987__auto__.call(null));
})();(statearr_34501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22986__auto___34502);
return statearr_34501;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22988__auto__);
});})(c__22986__auto___34502,out))
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