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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t42084 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42084 = (function (f,fn_handler,meta42085){
this.f = f;
this.fn_handler = fn_handler;
this.meta42085 = meta42085;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42084.cljs$lang$type = true;
cljs.core.async.t42084.cljs$lang$ctorStr = "cljs.core.async/t42084";
cljs.core.async.t42084.cljs$lang$ctorPrWriter = (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"cljs.core.async/t42084");
});
cljs.core.async.t42084.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t42084.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t42084.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t42084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42086){var self__ = this;
var _42086__$1 = this;return self__.meta42085;
});
cljs.core.async.t42084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42086,meta42085__$1){var self__ = this;
var _42086__$1 = this;return (new cljs.core.async.t42084(self__.f,self__.fn_handler,meta42085__$1));
});
cljs.core.async.__GT_t42084 = (function __GT_t42084(f__$1,fn_handler__$1,meta42085){return (new cljs.core.async.t42084(f__$1,fn_handler__$1,meta42085));
});
}
return (new cljs.core.async.t42084(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__42088 = buff;if(G__42088)
{var bit__20605__auto__ = null;if(cljs.core.truth_((function (){var or__19289__auto__ = bit__20605__auto__;if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return G__42088.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__42088.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__42088);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__42088);
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
{var val_42099 = (function (){var G__42096 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42096) : cljs.core.deref.call(null,G__42096));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__42097_42100 = val_42099;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__42097_42100) : fn1.call(null,G__42097_42100));
} else
{cljs.core.async.impl.dispatch.run(((function (val_42099,ret){
return (function (){var G__42098 = val_42099;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__42098) : fn1.call(null,G__42098));
});})(val_42099,ret))
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__19277__auto__ = ret;if(cljs.core.truth_(and__19277__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__19277__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__20913__auto___42108 = n;var x_42109 = (0);while(true){
if((x_42109 < n__20913__auto___42108))
{(a[x_42109] = (0));
{
var G__42110 = (x_42109 + (1));
x_42109 = G__42110;
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
var G__42111 = (i + (1));
i = G__42111;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__42119 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__42119) : cljs.core.atom.call(null,G__42119));
})();if(typeof cljs.core.async.t42120 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42120 = (function (flag,alt_flag,meta42121){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta42121 = meta42121;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42120.cljs$lang$type = true;
cljs.core.async.t42120.cljs$lang$ctorStr = "cljs.core.async/t42120";
cljs.core.async.t42120.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"cljs.core.async/t42120");
});})(flag))
;
cljs.core.async.t42120.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t42120.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__42123 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42123) : cljs.core.deref.call(null,G__42123));
});})(flag))
;
cljs.core.async.t42120.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__42124_42126 = self__.flag;var G__42125_42127 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__42124_42126,G__42125_42127) : cljs.core.reset_BANG_.call(null,G__42124_42126,G__42125_42127));
return true;
});})(flag))
;
cljs.core.async.t42120.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_42122){var self__ = this;
var _42122__$1 = this;return self__.meta42121;
});})(flag))
;
cljs.core.async.t42120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_42122,meta42121__$1){var self__ = this;
var _42122__$1 = this;return (new cljs.core.async.t42120(self__.flag,self__.alt_flag,meta42121__$1));
});})(flag))
;
cljs.core.async.__GT_t42120 = ((function (flag){
return (function __GT_t42120(flag__$1,alt_flag__$1,meta42121){return (new cljs.core.async.t42120(flag__$1,alt_flag__$1,meta42121));
});})(flag))
;
}
return (new cljs.core.async.t42120(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t42131 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42131 = (function (cb,flag,alt_handler,meta42132){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta42132 = meta42132;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42131.cljs$lang$type = true;
cljs.core.async.t42131.cljs$lang$ctorStr = "cljs.core.async/t42131";
cljs.core.async.t42131.cljs$lang$ctorPrWriter = (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"cljs.core.async/t42131");
});
cljs.core.async.t42131.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t42131.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t42131.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t42131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42133){var self__ = this;
var _42133__$1 = this;return self__.meta42132;
});
cljs.core.async.t42131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42133,meta42132__$1){var self__ = this;
var _42133__$1 = this;return (new cljs.core.async.t42131(self__.cb,self__.flag,self__.alt_handler,meta42132__$1));
});
cljs.core.async.__GT_t42131 = (function __GT_t42131(cb__$1,flag__$1,alt_handler__$1,meta42132){return (new cljs.core.async.t42131(cb__$1,flag__$1,alt_handler__$1,meta42132));
});
}
return (new cljs.core.async.t42131(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__42140 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__42140) : port.call(null,G__42140));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__42141 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__42141) : port.call(null,G__42141));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){var G__42142 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42142) : fret.call(null,G__42142));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42134_SHARP_){var G__42143 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42134_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42143) : fret.call(null,G__42143));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__42144 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42144) : cljs.core.deref.call(null,G__42144));
})(),(function (){var or__19289__auto__ = wport;if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__42145 = (i + (1));
i = G__42145;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__19289__auto__ = ret;if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__19277__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__19277__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__19277__auto__;
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
var alts_BANG___delegate = function (ports,p__42146){var map__42148 = p__42146;var map__42148__$1 = ((cljs.core.seq_QMARK_(map__42148))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42148):map__42148);var opts = map__42148__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

};
var alts_BANG_ = function (ports,var_args){
var p__42146 = null;if (arguments.length > 1) {
  p__42146 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__42146);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__42149){
var ports = cljs.core.first(arglist__42149);
var p__42146 = cljs.core.rest(arglist__42149);
return alts_BANG___delegate(ports,p__42146);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t42163 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42163 = (function (ch,f,map_LT_,meta42164){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta42164 = meta42164;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42163.cljs$lang$type = true;
cljs.core.async.t42163.cljs$lang$ctorStr = "cljs.core.async/t42163";
cljs.core.async.t42163.cljs$lang$ctorPrWriter = (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"cljs.core.async/t42163");
});
cljs.core.async.t42163.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t42163.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t42163.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t42163.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t42166 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42166 = (function (fn1,_,meta42164,ch,f,map_LT_,meta42167){
this.fn1 = fn1;
this._ = _;
this.meta42164 = meta42164;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta42167 = meta42167;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42166.cljs$lang$type = true;
cljs.core.async.t42166.cljs$lang$ctorStr = "cljs.core.async/t42166";
cljs.core.async.t42166.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"cljs.core.async/t42166");
});})(___$1))
;
cljs.core.async.t42166.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t42166.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t42166.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var G__42169 = self__.fn1;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(G__42169) : cljs.core.async.impl.protocols.lock_id.call(null,G__42169));
});})(___$1))
;
cljs.core.async.t42166.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__42150_SHARP_){var G__42170 = (((p1__42150_SHARP_ == null))?null:(function (){var G__42171 = p1__42150_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__42171) : self__.f.call(null,G__42171));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__42170) : f1.call(null,G__42170));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t42166.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_42168){var self__ = this;
var _42168__$1 = this;return self__.meta42167;
});})(___$1))
;
cljs.core.async.t42166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_42168,meta42167__$1){var self__ = this;
var _42168__$1 = this;return (new cljs.core.async.t42166(self__.fn1,self__._,self__.meta42164,self__.ch,self__.f,self__.map_LT_,meta42167__$1));
});})(___$1))
;
cljs.core.async.__GT_t42166 = ((function (___$1){
return (function __GT_t42166(fn1__$1,___$2,meta42164__$1,ch__$2,f__$2,map_LT___$2,meta42167){return (new cljs.core.async.t42166(fn1__$1,___$2,meta42164__$1,ch__$2,f__$2,map_LT___$2,meta42167));
});})(___$1))
;
}
return (new cljs.core.async.t42166(fn1,___$1,self__.meta42164,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__19277__auto__ = ret;if(cljs.core.truth_(and__19277__auto__))
{return !(((function (){var G__42172 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42172) : cljs.core.deref.call(null,G__42172));
})() == null));
} else
{return and__19277__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__42173 = (function (){var G__42174 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__42174) : cljs.core.deref.call(null,G__42174));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__42173) : self__.f.call(null,G__42173));
})());
} else
{return ret;
}
});
cljs.core.async.t42163.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t42163.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t42163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42165){var self__ = this;
var _42165__$1 = this;return self__.meta42164;
});
cljs.core.async.t42163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42165,meta42164__$1){var self__ = this;
var _42165__$1 = this;return (new cljs.core.async.t42163(self__.ch,self__.f,self__.map_LT_,meta42164__$1));
});
cljs.core.async.__GT_t42163 = (function __GT_t42163(ch__$1,f__$1,map_LT___$1,meta42164){return (new cljs.core.async.t42163(ch__$1,f__$1,map_LT___$1,meta42164));
});
}
return (new cljs.core.async.t42163(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t42179 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42179 = (function (ch,f,map_GT_,meta42180){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta42180 = meta42180;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42179.cljs$lang$type = true;
cljs.core.async.t42179.cljs$lang$ctorStr = "cljs.core.async/t42179";
cljs.core.async.t42179.cljs$lang$ctorPrWriter = (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"cljs.core.async/t42179");
});
cljs.core.async.t42179.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t42179.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__42182 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__42182) : self__.f.call(null,G__42182));
})(),fn0);
});
cljs.core.async.t42179.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t42179.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t42179.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t42179.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t42179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42181){var self__ = this;
var _42181__$1 = this;return self__.meta42180;
});
cljs.core.async.t42179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42181,meta42180__$1){var self__ = this;
var _42181__$1 = this;return (new cljs.core.async.t42179(self__.ch,self__.f,self__.map_GT_,meta42180__$1));
});
cljs.core.async.__GT_t42179 = (function __GT_t42179(ch__$1,f__$1,map_GT___$1,meta42180){return (new cljs.core.async.t42179(ch__$1,f__$1,map_GT___$1,meta42180));
});
}
return (new cljs.core.async.t42179(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t42187 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42187 = (function (ch,p,filter_GT_,meta42188){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta42188 = meta42188;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42187.cljs$lang$type = true;
cljs.core.async.t42187.cljs$lang$ctorStr = "cljs.core.async/t42187";
cljs.core.async.t42187.cljs$lang$ctorPrWriter = (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"cljs.core.async/t42187");
});
cljs.core.async.t42187.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t42187.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__42190 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__42190) : self__.p.call(null,G__42190));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t42187.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t42187.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t42187.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t42187.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t42187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42189){var self__ = this;
var _42189__$1 = this;return self__.meta42188;
});
cljs.core.async.t42187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42189,meta42188__$1){var self__ = this;
var _42189__$1 = this;return (new cljs.core.async.t42187(self__.ch,self__.p,self__.filter_GT_,meta42188__$1));
});
cljs.core.async.__GT_t42187 = (function __GT_t42187(ch__$1,p__$1,filter_GT___$1,meta42188){return (new cljs.core.async.t42187(ch__$1,p__$1,filter_GT___$1,meta42188));
});
}
return (new cljs.core.async.t42187(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22742__auto___42278 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22742__auto___42278,out){
return (function (){var f__22743__auto__ = (function (){var switch__22727__auto__ = ((function (c__22742__auto___42278,out){
return (function (state_42256){var state_val_42257 = (state_42256[(1)]);if((state_val_42257 === (7)))
{var inst_42252 = (state_42256[(2)]);var state_42256__$1 = state_42256;var statearr_42258_42279 = state_42256__$1;(statearr_42258_42279[(2)] = inst_42252);
(statearr_42258_42279[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42257 === (1)))
{var state_42256__$1 = state_42256;var statearr_42259_42280 = state_42256__$1;(statearr_42259_42280[(2)] = null);
(statearr_42259_42280[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42257 === (4)))
{var inst_42238 = (state_42256[(7)]);var inst_42238__$1 = (state_42256[(2)]);var inst_42239 = (inst_42238__$1 == null);var state_42256__$1 = (function (){var statearr_42260 = state_42256;(statearr_42260[(7)] = inst_42238__$1);
return statearr_42260;
})();if(cljs.core.truth_(inst_42239))
{var statearr_42261_42281 = state_42256__$1;(statearr_42261_42281[(1)] = (5));
} else
{var statearr_42262_42282 = state_42256__$1;(statearr_42262_42282[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42257 === (6)))
{var inst_42238 = (state_42256[(7)]);var inst_42243 = (function (){var G__42263 = inst_42238;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__42263) : p.call(null,G__42263));
})();var state_42256__$1 = state_42256;if(cljs.core.truth_(inst_42243))
{var statearr_42264_42283 = state_42256__$1;(statearr_42264_42283[(1)] = (8));
} else
{var statearr_42265_42284 = state_42256__$1;(statearr_42265_42284[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42257 === (3)))
{var inst_42254 = (state_42256[(2)]);var state_42256__$1 = state_42256;return cljs.core.async.impl.ioc_helpers.return_chan(state_42256__$1,inst_42254);
} else
{if((state_val_42257 === (2)))
{var state_42256__$1 = state_42256;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42256__$1,(4),ch);
} else
{if((state_val_42257 === (11)))
{var inst_42246 = (state_42256[(2)]);var state_42256__$1 = state_42256;var statearr_42266_42285 = state_42256__$1;(statearr_42266_42285[(2)] = inst_42246);
(statearr_42266_42285[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42257 === (9)))
{var state_42256__$1 = state_42256;var statearr_42267_42286 = state_42256__$1;(statearr_42267_42286[(2)] = null);
(statearr_42267_42286[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42257 === (5)))
{var inst_42241 = cljs.core.async.close_BANG_(out);var state_42256__$1 = state_42256;var statearr_42268_42287 = state_42256__$1;(statearr_42268_42287[(2)] = inst_42241);
(statearr_42268_42287[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42257 === (10)))
{var inst_42249 = (state_42256[(2)]);var state_42256__$1 = (function (){var statearr_42269 = state_42256;(statearr_42269[(8)] = inst_42249);
return statearr_42269;
})();var statearr_42270_42288 = state_42256__$1;(statearr_42270_42288[(2)] = null);
(statearr_42270_42288[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42257 === (8)))
{var inst_42238 = (state_42256[(7)]);var state_42256__$1 = state_42256;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42256__$1,(11),out,inst_42238);
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
});})(c__22742__auto___42278,out))
;return ((function (switch__22727__auto__,c__22742__auto___42278,out){
return (function() {
var state_machine__22728__auto__ = null;
var state_machine__22728__auto____0 = (function (){var statearr_42274 = [null,null,null,null,null,null,null,null,null];(statearr_42274[(0)] = state_machine__22728__auto__);
(statearr_42274[(1)] = (1));
return statearr_42274;
});
var state_machine__22728__auto____1 = (function (state_42256){while(true){
var ret_value__22729__auto__ = (function (){try{while(true){
var result__22730__auto__ = switch__22727__auto__(state_42256);if(cljs.core.keyword_identical_QMARK_(result__22730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22730__auto__;
}
break;
}
}catch (e42275){if((e42275 instanceof Object))
{var ex__22731__auto__ = e42275;var statearr_42276_42289 = state_42256;(statearr_42276_42289[(5)] = ex__22731__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42256);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e42275;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__42290 = state_42256;
state_42256 = G__42290;
continue;
}
} else
{return ret_value__22729__auto__;
}
break;
}
});
state_machine__22728__auto__ = function(state_42256){
switch(arguments.length){
case 0:
return state_machine__22728__auto____0.call(this);
case 1:
return state_machine__22728__auto____1.call(this,state_42256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22728__auto____0;
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22728__auto____1;
return state_machine__22728__auto__;
})()
;})(switch__22727__auto__,c__22742__auto___42278,out))
})();var state__22744__auto__ = (function (){var statearr_42277 = (function (){return (f__22743__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22743__auto__.cljs$core$IFn$_invoke$arity$0() : f__22743__auto__.call(null));
})();(statearr_42277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22742__auto___42278);
return statearr_42277;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22744__auto__);
});})(c__22742__auto___42278,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__22742__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22742__auto__){
return (function (){var f__22743__auto__ = (function (){var switch__22727__auto__ = ((function (c__22742__auto__){
return (function (state_42446){var state_val_42447 = (state_42446[(1)]);if((state_val_42447 === (7)))
{var inst_42442 = (state_42446[(2)]);var state_42446__$1 = state_42446;var statearr_42448_42486 = state_42446__$1;(statearr_42448_42486[(2)] = inst_42442);
(statearr_42448_42486[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42447 === (20)))
{var inst_42417 = (state_42446[(7)]);var inst_42428 = (state_42446[(2)]);var inst_42429 = cljs.core.next(inst_42417);var inst_42403 = inst_42429;var inst_42404 = null;var inst_42405 = (0);var inst_42406 = (0);var state_42446__$1 = (function (){var statearr_42449 = state_42446;(statearr_42449[(8)] = inst_42428);
(statearr_42449[(9)] = inst_42405);
(statearr_42449[(10)] = inst_42406);
(statearr_42449[(11)] = inst_42403);
(statearr_42449[(12)] = inst_42404);
return statearr_42449;
})();var statearr_42450_42487 = state_42446__$1;(statearr_42450_42487[(2)] = null);
(statearr_42450_42487[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42447 === (1)))
{var state_42446__$1 = state_42446;var statearr_42451_42488 = state_42446__$1;(statearr_42451_42488[(2)] = null);
(statearr_42451_42488[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42447 === (4)))
{var inst_42392 = (state_42446[(13)]);var inst_42392__$1 = (state_42446[(2)]);var inst_42393 = (inst_42392__$1 == null);var state_42446__$1 = (function (){var statearr_42455 = state_42446;(statearr_42455[(13)] = inst_42392__$1);
return statearr_42455;
})();if(cljs.core.truth_(inst_42393))
{var statearr_42456_42489 = state_42446__$1;(statearr_42456_42489[(1)] = (5));
} else
{var statearr_42457_42490 = state_42446__$1;(statearr_42457_42490[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42447 === (15)))
{var state_42446__$1 = state_42446;var statearr_42458_42491 = state_42446__$1;(statearr_42458_42491[(2)] = null);
(statearr_42458_42491[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42447 === (13)))
{var inst_42405 = (state_42446[(9)]);var inst_42406 = (state_42446[(10)]);var inst_42403 = (state_42446[(11)]);var inst_42404 = (state_42446[(12)]);var inst_42413 = (state_42446[(2)]);var inst_42414 = (inst_42406 + (1));var tmp42452 = inst_42405;var tmp42453 = inst_42403;var tmp42454 = inst_42404;var inst_42403__$1 = tmp42453;var inst_42404__$1 = tmp42454;var inst_42405__$1 = tmp42452;var inst_42406__$1 = inst_42414;var state_42446__$1 = (function (){var statearr_42459 = state_42446;(statearr_42459[(9)] = inst_42405__$1);
(statearr_42459[(10)] = inst_42406__$1);
(statearr_42459[(11)] = inst_42403__$1);
(statearr_42459[(14)] = inst_42413);
(statearr_42459[(12)] = inst_42404__$1);
return statearr_42459;
})();var statearr_42460_42492 = state_42446__$1;(statearr_42460_42492[(2)] = null);
(statearr_42460_42492[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42447 === (6)))
{var inst_42392 = (state_42446[(13)]);var inst_42397 = (function (){var G__42461 = inst_42392;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42461) : f.call(null,G__42461));
})();var inst_42402 = cljs.core.seq(inst_42397);var inst_42403 = inst_42402;var inst_42404 = null;var inst_42405 = (0);var inst_42406 = (0);var state_42446__$1 = (function (){var statearr_42462 = state_42446;(statearr_42462[(9)] = inst_42405);
(statearr_42462[(10)] = inst_42406);
(statearr_42462[(11)] = inst_42403);
(statearr_42462[(12)] = inst_42404);
return statearr_42462;
})();var statearr_42463_42493 = state_42446__$1;(statearr_42463_42493[(2)] = null);
(statearr_42463_42493[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42447 === (17)))
{var inst_42417 = (state_42446[(7)]);var inst_42421 = cljs.core.chunk_first(inst_42417);var inst_42422 = cljs.core.chunk_rest(inst_42417);var inst_42423 = cljs.core.count(inst_42421);var inst_42403 = inst_42422;var inst_42404 = inst_42421;var inst_42405 = inst_42423;var inst_42406 = (0);var state_42446__$1 = (function (){var statearr_42464 = state_42446;(statearr_42464[(9)] = inst_42405);
(statearr_42464[(10)] = inst_42406);
(statearr_42464[(11)] = inst_42403);
(statearr_42464[(12)] = inst_42404);
return statearr_42464;
})();var statearr_42465_42494 = state_42446__$1;(statearr_42465_42494[(2)] = null);
(statearr_42465_42494[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42447 === (3)))
{var inst_42444 = (state_42446[(2)]);var state_42446__$1 = state_42446;return cljs.core.async.impl.ioc_helpers.return_chan(state_42446__$1,inst_42444);
} else
{if((state_val_42447 === (12)))
{var inst_42437 = (state_42446[(2)]);var state_42446__$1 = state_42446;var statearr_42466_42495 = state_42446__$1;(statearr_42466_42495[(2)] = inst_42437);
(statearr_42466_42495[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42447 === (2)))
{var state_42446__$1 = state_42446;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42446__$1,(4),in$);
} else
{if((state_val_42447 === (19)))
{var inst_42432 = (state_42446[(2)]);var state_42446__$1 = state_42446;var statearr_42467_42496 = state_42446__$1;(statearr_42467_42496[(2)] = inst_42432);
(statearr_42467_42496[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42447 === (11)))
{var inst_42403 = (state_42446[(11)]);var inst_42417 = (state_42446[(7)]);var inst_42417__$1 = cljs.core.seq(inst_42403);var state_42446__$1 = (function (){var statearr_42468 = state_42446;(statearr_42468[(7)] = inst_42417__$1);
return statearr_42468;
})();if(inst_42417__$1)
{var statearr_42469_42497 = state_42446__$1;(statearr_42469_42497[(1)] = (14));
} else
{var statearr_42470_42498 = state_42446__$1;(statearr_42470_42498[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42447 === (9)))
{var inst_42439 = (state_42446[(2)]);var state_42446__$1 = (function (){var statearr_42471 = state_42446;(statearr_42471[(15)] = inst_42439);
return statearr_42471;
})();var statearr_42472_42499 = state_42446__$1;(statearr_42472_42499[(2)] = null);
(statearr_42472_42499[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42447 === (5)))
{var inst_42395 = cljs.core.async.close_BANG_(out);var state_42446__$1 = state_42446;var statearr_42473_42500 = state_42446__$1;(statearr_42473_42500[(2)] = inst_42395);
(statearr_42473_42500[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42447 === (14)))
{var inst_42417 = (state_42446[(7)]);var inst_42419 = cljs.core.chunked_seq_QMARK_(inst_42417);var state_42446__$1 = state_42446;if(inst_42419)
{var statearr_42474_42501 = state_42446__$1;(statearr_42474_42501[(1)] = (17));
} else
{var statearr_42475_42502 = state_42446__$1;(statearr_42475_42502[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42447 === (16)))
{var inst_42435 = (state_42446[(2)]);var state_42446__$1 = state_42446;var statearr_42476_42503 = state_42446__$1;(statearr_42476_42503[(2)] = inst_42435);
(statearr_42476_42503[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42447 === (10)))
{var inst_42406 = (state_42446[(10)]);var inst_42404 = (state_42446[(12)]);var inst_42411 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_42404,inst_42406);var state_42446__$1 = state_42446;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42446__$1,(13),out,inst_42411);
} else
{if((state_val_42447 === (18)))
{var inst_42417 = (state_42446[(7)]);var inst_42426 = cljs.core.first(inst_42417);var state_42446__$1 = state_42446;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42446__$1,(20),out,inst_42426);
} else
{if((state_val_42447 === (8)))
{var inst_42405 = (state_42446[(9)]);var inst_42406 = (state_42446[(10)]);var inst_42408 = (inst_42406 < inst_42405);var inst_42409 = inst_42408;var state_42446__$1 = state_42446;if(cljs.core.truth_(inst_42409))
{var statearr_42477_42504 = state_42446__$1;(statearr_42477_42504[(1)] = (10));
} else
{var statearr_42478_42505 = state_42446__$1;(statearr_42478_42505[(1)] = (11));
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
});})(c__22742__auto__))
;return ((function (switch__22727__auto__,c__22742__auto__){
return (function() {
var state_machine__22728__auto__ = null;
var state_machine__22728__auto____0 = (function (){var statearr_42482 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42482[(0)] = state_machine__22728__auto__);
(statearr_42482[(1)] = (1));
return statearr_42482;
});
var state_machine__22728__auto____1 = (function (state_42446){while(true){
var ret_value__22729__auto__ = (function (){try{while(true){
var result__22730__auto__ = switch__22727__auto__(state_42446);if(cljs.core.keyword_identical_QMARK_(result__22730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22730__auto__;
}
break;
}
}catch (e42483){if((e42483 instanceof Object))
{var ex__22731__auto__ = e42483;var statearr_42484_42506 = state_42446;(statearr_42484_42506[(5)] = ex__22731__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42446);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e42483;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__42507 = state_42446;
state_42446 = G__42507;
continue;
}
} else
{return ret_value__22729__auto__;
}
break;
}
});
state_machine__22728__auto__ = function(state_42446){
switch(arguments.length){
case 0:
return state_machine__22728__auto____0.call(this);
case 1:
return state_machine__22728__auto____1.call(this,state_42446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22728__auto____0;
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22728__auto____1;
return state_machine__22728__auto__;
})()
;})(switch__22727__auto__,c__22742__auto__))
})();var state__22744__auto__ = (function (){var statearr_42485 = (function (){return (f__22743__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22743__auto__.cljs$core$IFn$_invoke$arity$0() : f__22743__auto__.call(null));
})();(statearr_42485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22742__auto__);
return statearr_42485;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22744__auto__);
});})(c__22742__auto__))
);
return c__22742__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__22742__auto___42597 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22742__auto___42597){
return (function (){var f__22743__auto__ = (function (){var switch__22727__auto__ = ((function (c__22742__auto___42597){
return (function (state_42576){var state_val_42577 = (state_42576[(1)]);if((state_val_42577 === (7)))
{var inst_42572 = (state_42576[(2)]);var state_42576__$1 = state_42576;var statearr_42578_42598 = state_42576__$1;(statearr_42578_42598[(2)] = inst_42572);
(statearr_42578_42598[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42577 === (1)))
{var state_42576__$1 = state_42576;var statearr_42579_42599 = state_42576__$1;(statearr_42579_42599[(2)] = null);
(statearr_42579_42599[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42577 === (4)))
{var inst_42559 = (state_42576[(7)]);var inst_42559__$1 = (state_42576[(2)]);var inst_42560 = (inst_42559__$1 == null);var state_42576__$1 = (function (){var statearr_42580 = state_42576;(statearr_42580[(7)] = inst_42559__$1);
return statearr_42580;
})();if(cljs.core.truth_(inst_42560))
{var statearr_42581_42600 = state_42576__$1;(statearr_42581_42600[(1)] = (5));
} else
{var statearr_42582_42601 = state_42576__$1;(statearr_42582_42601[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42577 === (6)))
{var inst_42559 = (state_42576[(7)]);var state_42576__$1 = state_42576;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42576__$1,(11),to,inst_42559);
} else
{if((state_val_42577 === (3)))
{var inst_42574 = (state_42576[(2)]);var state_42576__$1 = state_42576;return cljs.core.async.impl.ioc_helpers.return_chan(state_42576__$1,inst_42574);
} else
{if((state_val_42577 === (2)))
{var state_42576__$1 = state_42576;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42576__$1,(4),from);
} else
{if((state_val_42577 === (11)))
{var inst_42569 = (state_42576[(2)]);var state_42576__$1 = (function (){var statearr_42583 = state_42576;(statearr_42583[(8)] = inst_42569);
return statearr_42583;
})();var statearr_42584_42602 = state_42576__$1;(statearr_42584_42602[(2)] = null);
(statearr_42584_42602[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42577 === (9)))
{var state_42576__$1 = state_42576;var statearr_42585_42603 = state_42576__$1;(statearr_42585_42603[(2)] = null);
(statearr_42585_42603[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42577 === (5)))
{var state_42576__$1 = state_42576;if(cljs.core.truth_(close_QMARK_))
{var statearr_42586_42604 = state_42576__$1;(statearr_42586_42604[(1)] = (8));
} else
{var statearr_42587_42605 = state_42576__$1;(statearr_42587_42605[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42577 === (10)))
{var inst_42566 = (state_42576[(2)]);var state_42576__$1 = state_42576;var statearr_42588_42606 = state_42576__$1;(statearr_42588_42606[(2)] = inst_42566);
(statearr_42588_42606[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42577 === (8)))
{var inst_42563 = cljs.core.async.close_BANG_(to);var state_42576__$1 = state_42576;var statearr_42589_42607 = state_42576__$1;(statearr_42589_42607[(2)] = inst_42563);
(statearr_42589_42607[(1)] = (10));
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
});})(c__22742__auto___42597))
;return ((function (switch__22727__auto__,c__22742__auto___42597){
return (function() {
var state_machine__22728__auto__ = null;
var state_machine__22728__auto____0 = (function (){var statearr_42593 = [null,null,null,null,null,null,null,null,null];(statearr_42593[(0)] = state_machine__22728__auto__);
(statearr_42593[(1)] = (1));
return statearr_42593;
});
var state_machine__22728__auto____1 = (function (state_42576){while(true){
var ret_value__22729__auto__ = (function (){try{while(true){
var result__22730__auto__ = switch__22727__auto__(state_42576);if(cljs.core.keyword_identical_QMARK_(result__22730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22730__auto__;
}
break;
}
}catch (e42594){if((e42594 instanceof Object))
{var ex__22731__auto__ = e42594;var statearr_42595_42608 = state_42576;(statearr_42595_42608[(5)] = ex__22731__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42576);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e42594;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__42609 = state_42576;
state_42576 = G__42609;
continue;
}
} else
{return ret_value__22729__auto__;
}
break;
}
});
state_machine__22728__auto__ = function(state_42576){
switch(arguments.length){
case 0:
return state_machine__22728__auto____0.call(this);
case 1:
return state_machine__22728__auto____1.call(this,state_42576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22728__auto____0;
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22728__auto____1;
return state_machine__22728__auto__;
})()
;})(switch__22727__auto__,c__22742__auto___42597))
})();var state__22744__auto__ = (function (){var statearr_42596 = (function (){return (f__22743__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22743__auto__.cljs$core$IFn$_invoke$arity$0() : f__22743__auto__.call(null));
})();(statearr_42596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22742__auto___42597);
return statearr_42596;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22744__auto__);
});})(c__22742__auto___42597))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__22742__auto___42702 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22742__auto___42702,tc,fc){
return (function (){var f__22743__auto__ = (function (){var switch__22727__auto__ = ((function (c__22742__auto___42702,tc,fc){
return (function (state_42679){var state_val_42680 = (state_42679[(1)]);if((state_val_42680 === (7)))
{var inst_42675 = (state_42679[(2)]);var state_42679__$1 = state_42679;var statearr_42681_42703 = state_42679__$1;(statearr_42681_42703[(2)] = inst_42675);
(statearr_42681_42703[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42680 === (1)))
{var state_42679__$1 = state_42679;var statearr_42682_42704 = state_42679__$1;(statearr_42682_42704[(2)] = null);
(statearr_42682_42704[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42680 === (4)))
{var inst_42660 = (state_42679[(7)]);var inst_42660__$1 = (state_42679[(2)]);var inst_42661 = (inst_42660__$1 == null);var state_42679__$1 = (function (){var statearr_42683 = state_42679;(statearr_42683[(7)] = inst_42660__$1);
return statearr_42683;
})();if(cljs.core.truth_(inst_42661))
{var statearr_42684_42705 = state_42679__$1;(statearr_42684_42705[(1)] = (5));
} else
{var statearr_42685_42706 = state_42679__$1;(statearr_42685_42706[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42680 === (6)))
{var inst_42660 = (state_42679[(7)]);var inst_42666 = (function (){var G__42686 = inst_42660;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__42686) : p.call(null,G__42686));
})();var state_42679__$1 = state_42679;if(cljs.core.truth_(inst_42666))
{var statearr_42687_42707 = state_42679__$1;(statearr_42687_42707[(1)] = (9));
} else
{var statearr_42688_42708 = state_42679__$1;(statearr_42688_42708[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42680 === (3)))
{var inst_42677 = (state_42679[(2)]);var state_42679__$1 = state_42679;return cljs.core.async.impl.ioc_helpers.return_chan(state_42679__$1,inst_42677);
} else
{if((state_val_42680 === (2)))
{var state_42679__$1 = state_42679;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42679__$1,(4),ch);
} else
{if((state_val_42680 === (11)))
{var inst_42660 = (state_42679[(7)]);var inst_42670 = (state_42679[(2)]);var state_42679__$1 = state_42679;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42679__$1,(8),inst_42670,inst_42660);
} else
{if((state_val_42680 === (9)))
{var state_42679__$1 = state_42679;var statearr_42689_42709 = state_42679__$1;(statearr_42689_42709[(2)] = tc);
(statearr_42689_42709[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42680 === (5)))
{var inst_42663 = cljs.core.async.close_BANG_(tc);var inst_42664 = cljs.core.async.close_BANG_(fc);var state_42679__$1 = (function (){var statearr_42690 = state_42679;(statearr_42690[(8)] = inst_42663);
return statearr_42690;
})();var statearr_42691_42710 = state_42679__$1;(statearr_42691_42710[(2)] = inst_42664);
(statearr_42691_42710[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42680 === (10)))
{var state_42679__$1 = state_42679;var statearr_42692_42711 = state_42679__$1;(statearr_42692_42711[(2)] = fc);
(statearr_42692_42711[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42680 === (8)))
{var inst_42672 = (state_42679[(2)]);var state_42679__$1 = (function (){var statearr_42693 = state_42679;(statearr_42693[(9)] = inst_42672);
return statearr_42693;
})();var statearr_42694_42712 = state_42679__$1;(statearr_42694_42712[(2)] = null);
(statearr_42694_42712[(1)] = (2));
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
});})(c__22742__auto___42702,tc,fc))
;return ((function (switch__22727__auto__,c__22742__auto___42702,tc,fc){
return (function() {
var state_machine__22728__auto__ = null;
var state_machine__22728__auto____0 = (function (){var statearr_42698 = [null,null,null,null,null,null,null,null,null,null];(statearr_42698[(0)] = state_machine__22728__auto__);
(statearr_42698[(1)] = (1));
return statearr_42698;
});
var state_machine__22728__auto____1 = (function (state_42679){while(true){
var ret_value__22729__auto__ = (function (){try{while(true){
var result__22730__auto__ = switch__22727__auto__(state_42679);if(cljs.core.keyword_identical_QMARK_(result__22730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22730__auto__;
}
break;
}
}catch (e42699){if((e42699 instanceof Object))
{var ex__22731__auto__ = e42699;var statearr_42700_42713 = state_42679;(statearr_42700_42713[(5)] = ex__22731__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42679);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e42699;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__42714 = state_42679;
state_42679 = G__42714;
continue;
}
} else
{return ret_value__22729__auto__;
}
break;
}
});
state_machine__22728__auto__ = function(state_42679){
switch(arguments.length){
case 0:
return state_machine__22728__auto____0.call(this);
case 1:
return state_machine__22728__auto____1.call(this,state_42679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22728__auto____0;
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22728__auto____1;
return state_machine__22728__auto__;
})()
;})(switch__22727__auto__,c__22742__auto___42702,tc,fc))
})();var state__22744__auto__ = (function (){var statearr_42701 = (function (){return (f__22743__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22743__auto__.cljs$core$IFn$_invoke$arity$0() : f__22743__auto__.call(null));
})();(statearr_42701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22742__auto___42702);
return statearr_42701;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22744__auto__);
});})(c__22742__auto___42702,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__22742__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22742__auto__){
return (function (){var f__22743__auto__ = (function (){var switch__22727__auto__ = ((function (c__22742__auto__){
return (function (state_42763){var state_val_42764 = (state_42763[(1)]);if((state_val_42764 === (7)))
{var inst_42759 = (state_42763[(2)]);var state_42763__$1 = state_42763;var statearr_42765_42783 = state_42763__$1;(statearr_42765_42783[(2)] = inst_42759);
(statearr_42765_42783[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42764 === (6)))
{var inst_42749 = (state_42763[(7)]);var inst_42752 = (state_42763[(8)]);var inst_42756 = (function (){var G__42766 = inst_42749;var G__42767 = inst_42752;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__42766,G__42767) : f.call(null,G__42766,G__42767));
})();var inst_42749__$1 = inst_42756;var state_42763__$1 = (function (){var statearr_42768 = state_42763;(statearr_42768[(7)] = inst_42749__$1);
return statearr_42768;
})();var statearr_42769_42784 = state_42763__$1;(statearr_42769_42784[(2)] = null);
(statearr_42769_42784[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42764 === (5)))
{var inst_42749 = (state_42763[(7)]);var state_42763__$1 = state_42763;var statearr_42770_42785 = state_42763__$1;(statearr_42770_42785[(2)] = inst_42749);
(statearr_42770_42785[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42764 === (4)))
{var inst_42752 = (state_42763[(8)]);var inst_42752__$1 = (state_42763[(2)]);var inst_42753 = (inst_42752__$1 == null);var state_42763__$1 = (function (){var statearr_42771 = state_42763;(statearr_42771[(8)] = inst_42752__$1);
return statearr_42771;
})();if(cljs.core.truth_(inst_42753))
{var statearr_42772_42786 = state_42763__$1;(statearr_42772_42786[(1)] = (5));
} else
{var statearr_42773_42787 = state_42763__$1;(statearr_42773_42787[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42764 === (3)))
{var inst_42761 = (state_42763[(2)]);var state_42763__$1 = state_42763;return cljs.core.async.impl.ioc_helpers.return_chan(state_42763__$1,inst_42761);
} else
{if((state_val_42764 === (2)))
{var state_42763__$1 = state_42763;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42763__$1,(4),ch);
} else
{if((state_val_42764 === (1)))
{var inst_42749 = init;var state_42763__$1 = (function (){var statearr_42774 = state_42763;(statearr_42774[(7)] = inst_42749);
return statearr_42774;
})();var statearr_42775_42788 = state_42763__$1;(statearr_42775_42788[(2)] = null);
(statearr_42775_42788[(1)] = (2));
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
});})(c__22742__auto__))
;return ((function (switch__22727__auto__,c__22742__auto__){
return (function() {
var state_machine__22728__auto__ = null;
var state_machine__22728__auto____0 = (function (){var statearr_42779 = [null,null,null,null,null,null,null,null,null];(statearr_42779[(0)] = state_machine__22728__auto__);
(statearr_42779[(1)] = (1));
return statearr_42779;
});
var state_machine__22728__auto____1 = (function (state_42763){while(true){
var ret_value__22729__auto__ = (function (){try{while(true){
var result__22730__auto__ = switch__22727__auto__(state_42763);if(cljs.core.keyword_identical_QMARK_(result__22730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22730__auto__;
}
break;
}
}catch (e42780){if((e42780 instanceof Object))
{var ex__22731__auto__ = e42780;var statearr_42781_42789 = state_42763;(statearr_42781_42789[(5)] = ex__22731__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42763);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e42780;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__42790 = state_42763;
state_42763 = G__42790;
continue;
}
} else
{return ret_value__22729__auto__;
}
break;
}
});
state_machine__22728__auto__ = function(state_42763){
switch(arguments.length){
case 0:
return state_machine__22728__auto____0.call(this);
case 1:
return state_machine__22728__auto____1.call(this,state_42763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22728__auto____0;
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22728__auto____1;
return state_machine__22728__auto__;
})()
;})(switch__22727__auto__,c__22742__auto__))
})();var state__22744__auto__ = (function (){var statearr_42782 = (function (){return (f__22743__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22743__auto__.cljs$core$IFn$_invoke$arity$0() : f__22743__auto__.call(null));
})();(statearr_42782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22742__auto__);
return statearr_42782;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22744__auto__);
});})(c__22742__auto__))
);
return c__22742__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__22742__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22742__auto__){
return (function (){var f__22743__auto__ = (function (){var switch__22727__auto__ = ((function (c__22742__auto__){
return (function (state_42855){var state_val_42856 = (state_42855[(1)]);if((state_val_42856 === (7)))
{var inst_42836 = (state_42855[(7)]);var inst_42841 = (state_42855[(2)]);var inst_42842 = cljs.core.next(inst_42836);var inst_42836__$1 = inst_42842;var state_42855__$1 = (function (){var statearr_42857 = state_42855;(statearr_42857[(8)] = inst_42841);
(statearr_42857[(7)] = inst_42836__$1);
return statearr_42857;
})();var statearr_42858_42876 = state_42855__$1;(statearr_42858_42876[(2)] = null);
(statearr_42858_42876[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42856 === (1)))
{var inst_42835 = cljs.core.seq(coll);var inst_42836 = inst_42835;var state_42855__$1 = (function (){var statearr_42859 = state_42855;(statearr_42859[(7)] = inst_42836);
return statearr_42859;
})();var statearr_42860_42877 = state_42855__$1;(statearr_42860_42877[(2)] = null);
(statearr_42860_42877[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42856 === (4)))
{var inst_42836 = (state_42855[(7)]);var inst_42839 = cljs.core.first(inst_42836);var state_42855__$1 = state_42855;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42855__$1,(7),ch,inst_42839);
} else
{if((state_val_42856 === (6)))
{var inst_42851 = (state_42855[(2)]);var state_42855__$1 = state_42855;var statearr_42861_42878 = state_42855__$1;(statearr_42861_42878[(2)] = inst_42851);
(statearr_42861_42878[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42856 === (3)))
{var inst_42853 = (state_42855[(2)]);var state_42855__$1 = state_42855;return cljs.core.async.impl.ioc_helpers.return_chan(state_42855__$1,inst_42853);
} else
{if((state_val_42856 === (2)))
{var inst_42836 = (state_42855[(7)]);var state_42855__$1 = state_42855;if(cljs.core.truth_(inst_42836))
{var statearr_42862_42879 = state_42855__$1;(statearr_42862_42879[(1)] = (4));
} else
{var statearr_42863_42880 = state_42855__$1;(statearr_42863_42880[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42856 === (9)))
{var state_42855__$1 = state_42855;var statearr_42864_42881 = state_42855__$1;(statearr_42864_42881[(2)] = null);
(statearr_42864_42881[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42856 === (5)))
{var state_42855__$1 = state_42855;if(cljs.core.truth_(close_QMARK_))
{var statearr_42865_42882 = state_42855__$1;(statearr_42865_42882[(1)] = (8));
} else
{var statearr_42866_42883 = state_42855__$1;(statearr_42866_42883[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42856 === (10)))
{var inst_42849 = (state_42855[(2)]);var state_42855__$1 = state_42855;var statearr_42867_42884 = state_42855__$1;(statearr_42867_42884[(2)] = inst_42849);
(statearr_42867_42884[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42856 === (8)))
{var inst_42846 = cljs.core.async.close_BANG_(ch);var state_42855__$1 = state_42855;var statearr_42868_42885 = state_42855__$1;(statearr_42868_42885[(2)] = inst_42846);
(statearr_42868_42885[(1)] = (10));
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
});})(c__22742__auto__))
;return ((function (switch__22727__auto__,c__22742__auto__){
return (function() {
var state_machine__22728__auto__ = null;
var state_machine__22728__auto____0 = (function (){var statearr_42872 = [null,null,null,null,null,null,null,null,null];(statearr_42872[(0)] = state_machine__22728__auto__);
(statearr_42872[(1)] = (1));
return statearr_42872;
});
var state_machine__22728__auto____1 = (function (state_42855){while(true){
var ret_value__22729__auto__ = (function (){try{while(true){
var result__22730__auto__ = switch__22727__auto__(state_42855);if(cljs.core.keyword_identical_QMARK_(result__22730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22730__auto__;
}
break;
}
}catch (e42873){if((e42873 instanceof Object))
{var ex__22731__auto__ = e42873;var statearr_42874_42886 = state_42855;(statearr_42874_42886[(5)] = ex__22731__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42855);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e42873;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__42887 = state_42855;
state_42855 = G__42887;
continue;
}
} else
{return ret_value__22729__auto__;
}
break;
}
});
state_machine__22728__auto__ = function(state_42855){
switch(arguments.length){
case 0:
return state_machine__22728__auto____0.call(this);
case 1:
return state_machine__22728__auto____1.call(this,state_42855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22728__auto____0;
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22728__auto____1;
return state_machine__22728__auto__;
})()
;})(switch__22727__auto__,c__22742__auto__))
})();var state__22744__auto__ = (function (){var statearr_42875 = (function (){return (f__22743__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22743__auto__.cljs$core$IFn$_invoke$arity$0() : f__22743__auto__.call(null));
})();(statearr_42875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22742__auto__);
return statearr_42875;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22744__auto__);
});})(c__22742__auto__))
);
return c__22742__auto__;
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
cljs.core.async.Mux = (function (){var obj42889 = {};return obj42889;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__19277__auto__ = _;if(and__19277__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__19277__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__20556__auto__ = (((_ == null))?null:_);return (function (){var or__19289__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__42893 = x__20556__auto__;return goog.typeOf(G__42893);
})()]);if(or__19289__auto__)
{return or__19289__auto__;
} else
{var or__19289__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__19289__auto____$1)
{return or__19289__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj42895 = {};return obj42895;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__19277__auto__ = m;if(and__19277__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__19277__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__20556__auto__ = (((m == null))?null:m);return (function (){var or__19289__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__42899 = x__20556__auto__;return goog.typeOf(G__42899);
})()]);if(or__19289__auto__)
{return or__19289__auto__;
} else
{var or__19289__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__19289__auto____$1)
{return or__19289__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__19277__auto__ = m;if(and__19277__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__19277__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__20556__auto__ = (((m == null))?null:m);return (function (){var or__19289__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__42903 = x__20556__auto__;return goog.typeOf(G__42903);
})()]);if(or__19289__auto__)
{return or__19289__auto__;
} else
{var or__19289__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__19289__auto____$1)
{return or__19289__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__19277__auto__ = m;if(and__19277__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__19277__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__20556__auto__ = (((m == null))?null:m);return (function (){var or__19289__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__42907 = x__20556__auto__;return goog.typeOf(G__42907);
})()]);if(or__19289__auto__)
{return or__19289__auto__;
} else
{var or__19289__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__19289__auto____$1)
{return or__19289__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__43139 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__43139) : cljs.core.atom.call(null,G__43139));
})();var m = (function (){if(typeof cljs.core.async.t43140 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43140 = (function (cs,ch,mult,meta43141){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta43141 = meta43141;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43140.cljs$lang$type = true;
cljs.core.async.t43140.cljs$lang$ctorStr = "cljs.core.async/t43140";
cljs.core.async.t43140.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"cljs.core.async/t43140");
});})(cs))
;
cljs.core.async.t43140.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t43140.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t43140.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t43140.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__43143_43370 = self__.cs;var G__43144_43371 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__43143_43370,G__43144_43371) : cljs.core.reset_BANG_.call(null,G__43143_43370,G__43144_43371));
return null;
});})(cs))
;
cljs.core.async.t43140.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t43140.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t43140.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_43142){var self__ = this;
var _43142__$1 = this;return self__.meta43141;
});})(cs))
;
cljs.core.async.t43140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_43142,meta43141__$1){var self__ = this;
var _43142__$1 = this;return (new cljs.core.async.t43140(self__.cs,self__.ch,self__.mult,meta43141__$1));
});})(cs))
;
cljs.core.async.__GT_t43140 = ((function (cs){
return (function __GT_t43140(cs__$1,ch__$1,mult__$1,meta43141){return (new cljs.core.async.t43140(cs__$1,ch__$1,mult__$1,meta43141));
});})(cs))
;
}
return (new cljs.core.async.t43140(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__43145 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__43145) : cljs.core.atom.call(null,G__43145));
})();var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__22742__auto___43372 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22742__auto___43372,cs,m,dchan,dctr,done){
return (function (){var f__22743__auto__ = (function (){var switch__22727__auto__ = ((function (c__22742__auto___43372,cs,m,dchan,dctr,done){
return (function (state_43280){var state_val_43281 = (state_43280[(1)]);if((state_val_43281 === (7)))
{var inst_43276 = (state_43280[(2)]);var state_43280__$1 = state_43280;var statearr_43282_43373 = state_43280__$1;(statearr_43282_43373[(2)] = inst_43276);
(statearr_43282_43373[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (20)))
{var inst_43177 = (state_43280[(7)]);var inst_43187 = cljs.core.first(inst_43177);var inst_43188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43187,(0),null);var inst_43189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43187,(1),null);var state_43280__$1 = (function (){var statearr_43283 = state_43280;(statearr_43283[(8)] = inst_43188);
return statearr_43283;
})();if(cljs.core.truth_(inst_43189))
{var statearr_43284_43374 = state_43280__$1;(statearr_43284_43374[(1)] = (22));
} else
{var statearr_43285_43375 = state_43280__$1;(statearr_43285_43375[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (27)))
{var inst_43217 = (state_43280[(9)]);var inst_43219 = (state_43280[(10)]);var inst_43224 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_43217,inst_43219);var state_43280__$1 = (function (){var statearr_43286 = state_43280;(statearr_43286[(11)] = inst_43224);
return statearr_43286;
})();var statearr_43287_43376 = state_43280__$1;(statearr_43287_43376[(2)] = null);
(statearr_43287_43376[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (1)))
{var state_43280__$1 = state_43280;var statearr_43288_43377 = state_43280__$1;(statearr_43288_43377[(2)] = null);
(statearr_43288_43377[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (24)))
{var inst_43177 = (state_43280[(7)]);var inst_43194 = (state_43280[(2)]);var inst_43195 = cljs.core.next(inst_43177);var inst_43157 = inst_43195;var inst_43158 = null;var inst_43159 = (0);var inst_43160 = (0);var state_43280__$1 = (function (){var statearr_43289 = state_43280;(statearr_43289[(12)] = inst_43157);
(statearr_43289[(13)] = inst_43194);
(statearr_43289[(14)] = inst_43158);
(statearr_43289[(15)] = inst_43160);
(statearr_43289[(16)] = inst_43159);
return statearr_43289;
})();var statearr_43290_43378 = state_43280__$1;(statearr_43290_43378[(2)] = null);
(statearr_43290_43378[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (39)))
{var inst_43237 = (state_43280[(17)]);var inst_43255 = (state_43280[(2)]);var inst_43256 = cljs.core.next(inst_43237);var inst_43216 = inst_43256;var inst_43217 = null;var inst_43218 = (0);var inst_43219 = (0);var state_43280__$1 = (function (){var statearr_43294 = state_43280;(statearr_43294[(18)] = inst_43216);
(statearr_43294[(9)] = inst_43217);
(statearr_43294[(19)] = inst_43218);
(statearr_43294[(10)] = inst_43219);
(statearr_43294[(20)] = inst_43255);
return statearr_43294;
})();var statearr_43295_43379 = state_43280__$1;(statearr_43295_43379[(2)] = null);
(statearr_43295_43379[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (4)))
{var inst_43148 = (state_43280[(21)]);var inst_43148__$1 = (state_43280[(2)]);var inst_43149 = (inst_43148__$1 == null);var state_43280__$1 = (function (){var statearr_43296 = state_43280;(statearr_43296[(21)] = inst_43148__$1);
return statearr_43296;
})();if(cljs.core.truth_(inst_43149))
{var statearr_43297_43380 = state_43280__$1;(statearr_43297_43380[(1)] = (5));
} else
{var statearr_43298_43381 = state_43280__$1;(statearr_43298_43381[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (15)))
{var inst_43157 = (state_43280[(12)]);var inst_43158 = (state_43280[(14)]);var inst_43160 = (state_43280[(15)]);var inst_43159 = (state_43280[(16)]);var inst_43173 = (state_43280[(2)]);var inst_43174 = (inst_43160 + (1));var tmp43291 = inst_43157;var tmp43292 = inst_43158;var tmp43293 = inst_43159;var inst_43157__$1 = tmp43291;var inst_43158__$1 = tmp43292;var inst_43159__$1 = tmp43293;var inst_43160__$1 = inst_43174;var state_43280__$1 = (function (){var statearr_43299 = state_43280;(statearr_43299[(12)] = inst_43157__$1);
(statearr_43299[(22)] = inst_43173);
(statearr_43299[(14)] = inst_43158__$1);
(statearr_43299[(15)] = inst_43160__$1);
(statearr_43299[(16)] = inst_43159__$1);
return statearr_43299;
})();var statearr_43300_43382 = state_43280__$1;(statearr_43300_43382[(2)] = null);
(statearr_43300_43382[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (21)))
{var inst_43198 = (state_43280[(2)]);var state_43280__$1 = state_43280;var statearr_43301_43383 = state_43280__$1;(statearr_43301_43383[(2)] = inst_43198);
(statearr_43301_43383[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (31)))
{var inst_43224 = (state_43280[(11)]);var inst_43225 = (state_43280[(2)]);var inst_43226 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_43227 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43224);var state_43280__$1 = (function (){var statearr_43302 = state_43280;(statearr_43302[(23)] = inst_43226);
(statearr_43302[(24)] = inst_43225);
return statearr_43302;
})();var statearr_43303_43384 = state_43280__$1;(statearr_43303_43384[(2)] = inst_43227);
cljs.core.async.impl.ioc_helpers.process_exception(state_43280__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (32)))
{var inst_43224 = (state_43280[(11)]);var inst_43148 = (state_43280[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_43280,(31),Object,null,(30));var inst_43231 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43224,inst_43148,done);var state_43280__$1 = state_43280;var statearr_43304_43385 = state_43280__$1;(statearr_43304_43385[(2)] = inst_43231);
cljs.core.async.impl.ioc_helpers.process_exception(state_43280__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (40)))
{var inst_43246 = (state_43280[(25)]);var inst_43247 = (state_43280[(2)]);var inst_43248 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_43249 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43246);var state_43280__$1 = (function (){var statearr_43305 = state_43280;(statearr_43305[(26)] = inst_43247);
(statearr_43305[(27)] = inst_43248);
return statearr_43305;
})();var statearr_43306_43386 = state_43280__$1;(statearr_43306_43386[(2)] = inst_43249);
cljs.core.async.impl.ioc_helpers.process_exception(state_43280__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (33)))
{var inst_43237 = (state_43280[(17)]);var inst_43239 = cljs.core.chunked_seq_QMARK_(inst_43237);var state_43280__$1 = state_43280;if(inst_43239)
{var statearr_43307_43387 = state_43280__$1;(statearr_43307_43387[(1)] = (36));
} else
{var statearr_43308_43388 = state_43280__$1;(statearr_43308_43388[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (13)))
{var inst_43167 = (state_43280[(28)]);var inst_43170 = cljs.core.async.close_BANG_(inst_43167);var state_43280__$1 = state_43280;var statearr_43309_43389 = state_43280__$1;(statearr_43309_43389[(2)] = inst_43170);
(statearr_43309_43389[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (22)))
{var inst_43188 = (state_43280[(8)]);var inst_43191 = cljs.core.async.close_BANG_(inst_43188);var state_43280__$1 = state_43280;var statearr_43310_43390 = state_43280__$1;(statearr_43310_43390[(2)] = inst_43191);
(statearr_43310_43390[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (36)))
{var inst_43237 = (state_43280[(17)]);var inst_43241 = cljs.core.chunk_first(inst_43237);var inst_43242 = cljs.core.chunk_rest(inst_43237);var inst_43243 = cljs.core.count(inst_43241);var inst_43216 = inst_43242;var inst_43217 = inst_43241;var inst_43218 = inst_43243;var inst_43219 = (0);var state_43280__$1 = (function (){var statearr_43311 = state_43280;(statearr_43311[(18)] = inst_43216);
(statearr_43311[(9)] = inst_43217);
(statearr_43311[(19)] = inst_43218);
(statearr_43311[(10)] = inst_43219);
return statearr_43311;
})();var statearr_43312_43391 = state_43280__$1;(statearr_43312_43391[(2)] = null);
(statearr_43312_43391[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (41)))
{var inst_43246 = (state_43280[(25)]);var inst_43148 = (state_43280[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_43280,(40),Object,null,(39));var inst_43253 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43246,inst_43148,done);var state_43280__$1 = state_43280;var statearr_43313_43392 = state_43280__$1;(statearr_43313_43392[(2)] = inst_43253);
cljs.core.async.impl.ioc_helpers.process_exception(state_43280__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (43)))
{var state_43280__$1 = state_43280;var statearr_43314_43393 = state_43280__$1;(statearr_43314_43393[(2)] = null);
(statearr_43314_43393[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (29)))
{var inst_43264 = (state_43280[(2)]);var state_43280__$1 = state_43280;var statearr_43315_43394 = state_43280__$1;(statearr_43315_43394[(2)] = inst_43264);
(statearr_43315_43394[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (44)))
{var inst_43273 = (state_43280[(2)]);var state_43280__$1 = (function (){var statearr_43316 = state_43280;(statearr_43316[(29)] = inst_43273);
return statearr_43316;
})();var statearr_43317_43395 = state_43280__$1;(statearr_43317_43395[(2)] = null);
(statearr_43317_43395[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (6)))
{var inst_43208 = (state_43280[(30)]);var inst_43207 = (function (){var G__43318 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__43318) : cljs.core.deref.call(null,G__43318));
})();var inst_43208__$1 = cljs.core.keys(inst_43207);var inst_43209 = cljs.core.count(inst_43208__$1);var inst_43210 = (function (){var G__43319 = dctr;var G__43320 = inst_43209;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__43319,G__43320) : cljs.core.reset_BANG_.call(null,G__43319,G__43320));
})();var inst_43215 = cljs.core.seq(inst_43208__$1);var inst_43216 = inst_43215;var inst_43217 = null;var inst_43218 = (0);var inst_43219 = (0);var state_43280__$1 = (function (){var statearr_43321 = state_43280;(statearr_43321[(18)] = inst_43216);
(statearr_43321[(9)] = inst_43217);
(statearr_43321[(19)] = inst_43218);
(statearr_43321[(30)] = inst_43208__$1);
(statearr_43321[(10)] = inst_43219);
(statearr_43321[(31)] = inst_43210);
return statearr_43321;
})();var statearr_43322_43396 = state_43280__$1;(statearr_43322_43396[(2)] = null);
(statearr_43322_43396[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (28)))
{var inst_43216 = (state_43280[(18)]);var inst_43237 = (state_43280[(17)]);var inst_43237__$1 = cljs.core.seq(inst_43216);var state_43280__$1 = (function (){var statearr_43323 = state_43280;(statearr_43323[(17)] = inst_43237__$1);
return statearr_43323;
})();if(inst_43237__$1)
{var statearr_43324_43397 = state_43280__$1;(statearr_43324_43397[(1)] = (33));
} else
{var statearr_43325_43398 = state_43280__$1;(statearr_43325_43398[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (25)))
{var inst_43218 = (state_43280[(19)]);var inst_43219 = (state_43280[(10)]);var inst_43221 = (inst_43219 < inst_43218);var inst_43222 = inst_43221;var state_43280__$1 = state_43280;if(cljs.core.truth_(inst_43222))
{var statearr_43326_43399 = state_43280__$1;(statearr_43326_43399[(1)] = (27));
} else
{var statearr_43327_43400 = state_43280__$1;(statearr_43327_43400[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (34)))
{var state_43280__$1 = state_43280;var statearr_43328_43401 = state_43280__$1;(statearr_43328_43401[(2)] = null);
(statearr_43328_43401[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (17)))
{var state_43280__$1 = state_43280;var statearr_43329_43402 = state_43280__$1;(statearr_43329_43402[(2)] = null);
(statearr_43329_43402[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (3)))
{var inst_43278 = (state_43280[(2)]);var state_43280__$1 = state_43280;return cljs.core.async.impl.ioc_helpers.return_chan(state_43280__$1,inst_43278);
} else
{if((state_val_43281 === (12)))
{var inst_43203 = (state_43280[(2)]);var state_43280__$1 = state_43280;var statearr_43330_43403 = state_43280__$1;(statearr_43330_43403[(2)] = inst_43203);
(statearr_43330_43403[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (2)))
{var state_43280__$1 = state_43280;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43280__$1,(4),ch);
} else
{if((state_val_43281 === (23)))
{var state_43280__$1 = state_43280;var statearr_43331_43404 = state_43280__$1;(statearr_43331_43404[(2)] = null);
(statearr_43331_43404[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (35)))
{var inst_43262 = (state_43280[(2)]);var state_43280__$1 = state_43280;var statearr_43332_43405 = state_43280__$1;(statearr_43332_43405[(2)] = inst_43262);
(statearr_43332_43405[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (19)))
{var inst_43177 = (state_43280[(7)]);var inst_43181 = cljs.core.chunk_first(inst_43177);var inst_43182 = cljs.core.chunk_rest(inst_43177);var inst_43183 = cljs.core.count(inst_43181);var inst_43157 = inst_43182;var inst_43158 = inst_43181;var inst_43159 = inst_43183;var inst_43160 = (0);var state_43280__$1 = (function (){var statearr_43333 = state_43280;(statearr_43333[(12)] = inst_43157);
(statearr_43333[(14)] = inst_43158);
(statearr_43333[(15)] = inst_43160);
(statearr_43333[(16)] = inst_43159);
return statearr_43333;
})();var statearr_43334_43406 = state_43280__$1;(statearr_43334_43406[(2)] = null);
(statearr_43334_43406[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (11)))
{var inst_43157 = (state_43280[(12)]);var inst_43177 = (state_43280[(7)]);var inst_43177__$1 = cljs.core.seq(inst_43157);var state_43280__$1 = (function (){var statearr_43335 = state_43280;(statearr_43335[(7)] = inst_43177__$1);
return statearr_43335;
})();if(inst_43177__$1)
{var statearr_43336_43407 = state_43280__$1;(statearr_43336_43407[(1)] = (16));
} else
{var statearr_43337_43408 = state_43280__$1;(statearr_43337_43408[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (9)))
{var inst_43205 = (state_43280[(2)]);var state_43280__$1 = state_43280;var statearr_43338_43409 = state_43280__$1;(statearr_43338_43409[(2)] = inst_43205);
(statearr_43338_43409[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (5)))
{var inst_43155 = (function (){var G__43339 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__43339) : cljs.core.deref.call(null,G__43339));
})();var inst_43156 = cljs.core.seq(inst_43155);var inst_43157 = inst_43156;var inst_43158 = null;var inst_43159 = (0);var inst_43160 = (0);var state_43280__$1 = (function (){var statearr_43340 = state_43280;(statearr_43340[(12)] = inst_43157);
(statearr_43340[(14)] = inst_43158);
(statearr_43340[(15)] = inst_43160);
(statearr_43340[(16)] = inst_43159);
return statearr_43340;
})();var statearr_43341_43410 = state_43280__$1;(statearr_43341_43410[(2)] = null);
(statearr_43341_43410[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (14)))
{var state_43280__$1 = state_43280;var statearr_43342_43411 = state_43280__$1;(statearr_43342_43411[(2)] = null);
(statearr_43342_43411[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (45)))
{var inst_43270 = (state_43280[(2)]);var state_43280__$1 = state_43280;var statearr_43343_43412 = state_43280__$1;(statearr_43343_43412[(2)] = inst_43270);
(statearr_43343_43412[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (26)))
{var inst_43208 = (state_43280[(30)]);var inst_43266 = (state_43280[(2)]);var inst_43267 = cljs.core.seq(inst_43208);var state_43280__$1 = (function (){var statearr_43344 = state_43280;(statearr_43344[(32)] = inst_43266);
return statearr_43344;
})();if(inst_43267)
{var statearr_43345_43413 = state_43280__$1;(statearr_43345_43413[(1)] = (42));
} else
{var statearr_43346_43414 = state_43280__$1;(statearr_43346_43414[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (16)))
{var inst_43177 = (state_43280[(7)]);var inst_43179 = cljs.core.chunked_seq_QMARK_(inst_43177);var state_43280__$1 = state_43280;if(inst_43179)
{var statearr_43350_43415 = state_43280__$1;(statearr_43350_43415[(1)] = (19));
} else
{var statearr_43351_43416 = state_43280__$1;(statearr_43351_43416[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (38)))
{var inst_43259 = (state_43280[(2)]);var state_43280__$1 = state_43280;var statearr_43352_43417 = state_43280__$1;(statearr_43352_43417[(2)] = inst_43259);
(statearr_43352_43417[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (30)))
{var inst_43216 = (state_43280[(18)]);var inst_43217 = (state_43280[(9)]);var inst_43218 = (state_43280[(19)]);var inst_43219 = (state_43280[(10)]);var inst_43233 = (state_43280[(2)]);var inst_43234 = (inst_43219 + (1));var tmp43347 = inst_43216;var tmp43348 = inst_43217;var tmp43349 = inst_43218;var inst_43216__$1 = tmp43347;var inst_43217__$1 = tmp43348;var inst_43218__$1 = tmp43349;var inst_43219__$1 = inst_43234;var state_43280__$1 = (function (){var statearr_43353 = state_43280;(statearr_43353[(18)] = inst_43216__$1);
(statearr_43353[(9)] = inst_43217__$1);
(statearr_43353[(19)] = inst_43218__$1);
(statearr_43353[(10)] = inst_43219__$1);
(statearr_43353[(33)] = inst_43233);
return statearr_43353;
})();var statearr_43354_43418 = state_43280__$1;(statearr_43354_43418[(2)] = null);
(statearr_43354_43418[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (10)))
{var inst_43158 = (state_43280[(14)]);var inst_43160 = (state_43280[(15)]);var inst_43166 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_43158,inst_43160);var inst_43167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43166,(0),null);var inst_43168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43166,(1),null);var state_43280__$1 = (function (){var statearr_43355 = state_43280;(statearr_43355[(28)] = inst_43167);
return statearr_43355;
})();if(cljs.core.truth_(inst_43168))
{var statearr_43356_43419 = state_43280__$1;(statearr_43356_43419[(1)] = (13));
} else
{var statearr_43357_43420 = state_43280__$1;(statearr_43357_43420[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (18)))
{var inst_43201 = (state_43280[(2)]);var state_43280__$1 = state_43280;var statearr_43358_43421 = state_43280__$1;(statearr_43358_43421[(2)] = inst_43201);
(statearr_43358_43421[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (42)))
{var state_43280__$1 = state_43280;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43280__$1,(45),dchan);
} else
{if((state_val_43281 === (37)))
{var inst_43237 = (state_43280[(17)]);var inst_43246 = cljs.core.first(inst_43237);var state_43280__$1 = (function (){var statearr_43359 = state_43280;(statearr_43359[(25)] = inst_43246);
return statearr_43359;
})();var statearr_43360_43422 = state_43280__$1;(statearr_43360_43422[(2)] = null);
(statearr_43360_43422[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43281 === (8)))
{var inst_43160 = (state_43280[(15)]);var inst_43159 = (state_43280[(16)]);var inst_43162 = (inst_43160 < inst_43159);var inst_43163 = inst_43162;var state_43280__$1 = state_43280;if(cljs.core.truth_(inst_43163))
{var statearr_43361_43423 = state_43280__$1;(statearr_43361_43423[(1)] = (10));
} else
{var statearr_43362_43424 = state_43280__$1;(statearr_43362_43424[(1)] = (11));
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
});})(c__22742__auto___43372,cs,m,dchan,dctr,done))
;return ((function (switch__22727__auto__,c__22742__auto___43372,cs,m,dchan,dctr,done){
return (function() {
var state_machine__22728__auto__ = null;
var state_machine__22728__auto____0 = (function (){var statearr_43366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43366[(0)] = state_machine__22728__auto__);
(statearr_43366[(1)] = (1));
return statearr_43366;
});
var state_machine__22728__auto____1 = (function (state_43280){while(true){
var ret_value__22729__auto__ = (function (){try{while(true){
var result__22730__auto__ = switch__22727__auto__(state_43280);if(cljs.core.keyword_identical_QMARK_(result__22730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22730__auto__;
}
break;
}
}catch (e43367){if((e43367 instanceof Object))
{var ex__22731__auto__ = e43367;var statearr_43368_43425 = state_43280;(statearr_43368_43425[(5)] = ex__22731__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_43280);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e43367;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__43426 = state_43280;
state_43280 = G__43426;
continue;
}
} else
{return ret_value__22729__auto__;
}
break;
}
});
state_machine__22728__auto__ = function(state_43280){
switch(arguments.length){
case 0:
return state_machine__22728__auto____0.call(this);
case 1:
return state_machine__22728__auto____1.call(this,state_43280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22728__auto____0;
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22728__auto____1;
return state_machine__22728__auto__;
})()
;})(switch__22727__auto__,c__22742__auto___43372,cs,m,dchan,dctr,done))
})();var state__22744__auto__ = (function (){var statearr_43369 = (function (){return (f__22743__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22743__auto__.cljs$core$IFn$_invoke$arity$0() : f__22743__auto__.call(null));
})();(statearr_43369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22742__auto___43372);
return statearr_43369;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22744__auto__);
});})(c__22742__auto___43372,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj43431 = {};return obj43431;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__19277__auto__ = m;if(and__19277__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__19277__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__20556__auto__ = (((m == null))?null:m);return (function (){var or__19289__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__43435 = x__20556__auto__;return goog.typeOf(G__43435);
})()]);if(or__19289__auto__)
{return or__19289__auto__;
} else
{var or__19289__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__19289__auto____$1)
{return or__19289__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__19277__auto__ = m;if(and__19277__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__19277__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__20556__auto__ = (((m == null))?null:m);return (function (){var or__19289__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__43439 = x__20556__auto__;return goog.typeOf(G__43439);
})()]);if(or__19289__auto__)
{return or__19289__auto__;
} else
{var or__19289__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__19289__auto____$1)
{return or__19289__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__19277__auto__ = m;if(and__19277__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__19277__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__20556__auto__ = (((m == null))?null:m);return (function (){var or__19289__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__43443 = x__20556__auto__;return goog.typeOf(G__43443);
})()]);if(or__19289__auto__)
{return or__19289__auto__;
} else
{var or__19289__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__19289__auto____$1)
{return or__19289__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__19277__auto__ = m;if(and__19277__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__19277__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__20556__auto__ = (((m == null))?null:m);return (function (){var or__19289__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__43447 = x__20556__auto__;return goog.typeOf(G__43447);
})()]);if(or__19289__auto__)
{return or__19289__auto__;
} else
{var or__19289__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__19289__auto____$1)
{return or__19289__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__19277__auto__ = m;if(and__19277__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__19277__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__20556__auto__ = (((m == null))?null:m);return (function (){var or__19289__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__43451 = x__20556__auto__;return goog.typeOf(G__43451);
})()]);if(or__19289__auto__)
{return or__19289__auto__;
} else
{var or__19289__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__19289__auto____$1)
{return or__19289__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__43575 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__43575) : cljs.core.atom.call(null,G__43575));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = (function (){var G__43576 = new cljs.core.Keyword(null,"mute","mute",1151223646);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__43576) : cljs.core.atom.call(null,G__43576));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__43577 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__43577) : attr.call(null,G__43577));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__43578 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__43578) : cljs.core.deref.call(null,G__43578));
})();var mode = (function (){var G__43579 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__43579) : cljs.core.deref.call(null,G__43579));
})();var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t43580 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43580 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43581){
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
this.meta43581 = meta43581;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43580.cljs$lang$type = true;
cljs.core.async.t43580.cljs$lang$ctorStr = "cljs.core.async/t43580";
cljs.core.async.t43580.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"cljs.core.async/t43580");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43580.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t43580.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43580.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43580.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__43583_43698 = self__.cs;var G__43584_43699 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__43583_43698,G__43584_43699) : cljs.core.reset_BANG_.call(null,G__43583_43698,G__43584_43699));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43580.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43580.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__43585 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__43585) : self__.solo_modes.call(null,G__43585));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__43586_43700 = self__.solo_mode;var G__43587_43701 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__43586_43700,G__43587_43701) : cljs.core.reset_BANG_.call(null,G__43586_43700,G__43587_43701));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43580.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t43580.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43580.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43582){var self__ = this;
var _43582__$1 = this;return self__.meta43581;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43582,meta43581__$1){var self__ = this;
var _43582__$1 = this;return (new cljs.core.async.t43580(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43581__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t43580 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t43580(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43581){return (new cljs.core.async.t43580(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43581));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t43580(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__22742__auto___43702 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22742__auto___43702,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__22743__auto__ = (function (){var switch__22727__auto__ = ((function (c__22742__auto___43702,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_43654){var state_val_43655 = (state_43654[(1)]);if((state_val_43655 === (7)))
{var inst_43601 = (state_43654[(7)]);var inst_43606 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43601);var state_43654__$1 = state_43654;var statearr_43656_43703 = state_43654__$1;(statearr_43656_43703[(2)] = inst_43606);
(statearr_43656_43703[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43655 === (20)))
{var inst_43616 = (state_43654[(8)]);var state_43654__$1 = state_43654;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43654__$1,(23),out,inst_43616);
} else
{if((state_val_43655 === (1)))
{var inst_43591 = (state_43654[(9)]);var inst_43591__$1 = calc_state();var inst_43592 = cljs.core.seq_QMARK_(inst_43591__$1);var state_43654__$1 = (function (){var statearr_43657 = state_43654;(statearr_43657[(9)] = inst_43591__$1);
return statearr_43657;
})();if(inst_43592)
{var statearr_43658_43704 = state_43654__$1;(statearr_43658_43704[(1)] = (2));
} else
{var statearr_43659_43705 = state_43654__$1;(statearr_43659_43705[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43655 === (4)))
{var inst_43591 = (state_43654[(9)]);var inst_43597 = (state_43654[(2)]);var inst_43598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43597,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_43599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43597,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_43600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43597,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_43601 = inst_43591;var state_43654__$1 = (function (){var statearr_43660 = state_43654;(statearr_43660[(10)] = inst_43599);
(statearr_43660[(7)] = inst_43601);
(statearr_43660[(11)] = inst_43600);
(statearr_43660[(12)] = inst_43598);
return statearr_43660;
})();var statearr_43661_43706 = state_43654__$1;(statearr_43661_43706[(2)] = null);
(statearr_43661_43706[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43655 === (15)))
{var state_43654__$1 = state_43654;var statearr_43662_43707 = state_43654__$1;(statearr_43662_43707[(2)] = null);
(statearr_43662_43707[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43655 === (21)))
{var state_43654__$1 = state_43654;var statearr_43663_43708 = state_43654__$1;(statearr_43663_43708[(2)] = null);
(statearr_43663_43708[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43655 === (13)))
{var inst_43650 = (state_43654[(2)]);var state_43654__$1 = state_43654;var statearr_43664_43709 = state_43654__$1;(statearr_43664_43709[(2)] = inst_43650);
(statearr_43664_43709[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43655 === (22)))
{var inst_43609 = (state_43654[(13)]);var inst_43647 = (state_43654[(2)]);var inst_43601 = inst_43609;var state_43654__$1 = (function (){var statearr_43665 = state_43654;(statearr_43665[(7)] = inst_43601);
(statearr_43665[(14)] = inst_43647);
return statearr_43665;
})();var statearr_43666_43710 = state_43654__$1;(statearr_43666_43710[(2)] = null);
(statearr_43666_43710[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43655 === (6)))
{var inst_43652 = (state_43654[(2)]);var state_43654__$1 = state_43654;return cljs.core.async.impl.ioc_helpers.return_chan(state_43654__$1,inst_43652);
} else
{if((state_val_43655 === (17)))
{var inst_43632 = (state_43654[(15)]);var state_43654__$1 = state_43654;var statearr_43667_43711 = state_43654__$1;(statearr_43667_43711[(2)] = inst_43632);
(statearr_43667_43711[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43655 === (3)))
{var inst_43591 = (state_43654[(9)]);var state_43654__$1 = state_43654;var statearr_43668_43712 = state_43654__$1;(statearr_43668_43712[(2)] = inst_43591);
(statearr_43668_43712[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43655 === (12)))
{var inst_43617 = (state_43654[(16)]);var inst_43612 = (state_43654[(17)]);var inst_43632 = (state_43654[(15)]);var inst_43632__$1 = (function (){var G__43669 = inst_43617;return (inst_43612.cljs$core$IFn$_invoke$arity$1 ? inst_43612.cljs$core$IFn$_invoke$arity$1(G__43669) : inst_43612.call(null,G__43669));
})();var state_43654__$1 = (function (){var statearr_43670 = state_43654;(statearr_43670[(15)] = inst_43632__$1);
return statearr_43670;
})();if(cljs.core.truth_(inst_43632__$1))
{var statearr_43671_43713 = state_43654__$1;(statearr_43671_43713[(1)] = (17));
} else
{var statearr_43672_43714 = state_43654__$1;(statearr_43672_43714[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43655 === (2)))
{var inst_43591 = (state_43654[(9)]);var inst_43594 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43591);var state_43654__$1 = state_43654;var statearr_43673_43715 = state_43654__$1;(statearr_43673_43715[(2)] = inst_43594);
(statearr_43673_43715[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43655 === (23)))
{var inst_43644 = (state_43654[(2)]);var state_43654__$1 = state_43654;var statearr_43674_43716 = state_43654__$1;(statearr_43674_43716[(2)] = inst_43644);
(statearr_43674_43716[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43655 === (19)))
{var inst_43641 = (state_43654[(2)]);var state_43654__$1 = state_43654;if(cljs.core.truth_(inst_43641))
{var statearr_43675_43717 = state_43654__$1;(statearr_43675_43717[(1)] = (20));
} else
{var statearr_43676_43718 = state_43654__$1;(statearr_43676_43718[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43655 === (11)))
{var inst_43616 = (state_43654[(8)]);var inst_43622 = (inst_43616 == null);var state_43654__$1 = state_43654;if(cljs.core.truth_(inst_43622))
{var statearr_43677_43719 = state_43654__$1;(statearr_43677_43719[(1)] = (14));
} else
{var statearr_43678_43720 = state_43654__$1;(statearr_43678_43720[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43655 === (9)))
{var inst_43609 = (state_43654[(13)]);var inst_43609__$1 = (state_43654[(2)]);var inst_43610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43609__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_43611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43609__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_43612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43609__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_43654__$1 = (function (){var statearr_43679 = state_43654;(statearr_43679[(17)] = inst_43612);
(statearr_43679[(18)] = inst_43611);
(statearr_43679[(13)] = inst_43609__$1);
return statearr_43679;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_43654__$1,(10),inst_43610);
} else
{if((state_val_43655 === (5)))
{var inst_43601 = (state_43654[(7)]);var inst_43604 = cljs.core.seq_QMARK_(inst_43601);var state_43654__$1 = state_43654;if(inst_43604)
{var statearr_43680_43721 = state_43654__$1;(statearr_43680_43721[(1)] = (7));
} else
{var statearr_43681_43722 = state_43654__$1;(statearr_43681_43722[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43655 === (14)))
{var inst_43617 = (state_43654[(16)]);var inst_43624 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_43617);var state_43654__$1 = state_43654;var statearr_43682_43723 = state_43654__$1;(statearr_43682_43723[(2)] = inst_43624);
(statearr_43682_43723[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43655 === (16)))
{var inst_43627 = (state_43654[(2)]);var inst_43628 = calc_state();var inst_43601 = inst_43628;var state_43654__$1 = (function (){var statearr_43683 = state_43654;(statearr_43683[(7)] = inst_43601);
(statearr_43683[(19)] = inst_43627);
return statearr_43683;
})();var statearr_43684_43724 = state_43654__$1;(statearr_43684_43724[(2)] = null);
(statearr_43684_43724[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43655 === (10)))
{var inst_43616 = (state_43654[(8)]);var inst_43617 = (state_43654[(16)]);var inst_43615 = (state_43654[(2)]);var inst_43616__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43615,(0),null);var inst_43617__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43615,(1),null);var inst_43618 = (inst_43616__$1 == null);var inst_43619 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43617__$1,change);var inst_43620 = (inst_43618) || (inst_43619);var state_43654__$1 = (function (){var statearr_43685 = state_43654;(statearr_43685[(8)] = inst_43616__$1);
(statearr_43685[(16)] = inst_43617__$1);
return statearr_43685;
})();if(cljs.core.truth_(inst_43620))
{var statearr_43686_43725 = state_43654__$1;(statearr_43686_43725[(1)] = (11));
} else
{var statearr_43687_43726 = state_43654__$1;(statearr_43687_43726[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43655 === (18)))
{var inst_43617 = (state_43654[(16)]);var inst_43612 = (state_43654[(17)]);var inst_43611 = (state_43654[(18)]);var inst_43636 = cljs.core.empty_QMARK_(inst_43612);var inst_43637 = (function (){var G__43688 = inst_43617;return (inst_43611.cljs$core$IFn$_invoke$arity$1 ? inst_43611.cljs$core$IFn$_invoke$arity$1(G__43688) : inst_43611.call(null,G__43688));
})();var inst_43638 = cljs.core.not(inst_43637);var inst_43639 = (inst_43636) && (inst_43638);var state_43654__$1 = state_43654;var statearr_43689_43727 = state_43654__$1;(statearr_43689_43727[(2)] = inst_43639);
(statearr_43689_43727[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43655 === (8)))
{var inst_43601 = (state_43654[(7)]);var state_43654__$1 = state_43654;var statearr_43690_43728 = state_43654__$1;(statearr_43690_43728[(2)] = inst_43601);
(statearr_43690_43728[(1)] = (9));
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
});})(c__22742__auto___43702,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__22727__auto__,c__22742__auto___43702,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__22728__auto__ = null;
var state_machine__22728__auto____0 = (function (){var statearr_43694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43694[(0)] = state_machine__22728__auto__);
(statearr_43694[(1)] = (1));
return statearr_43694;
});
var state_machine__22728__auto____1 = (function (state_43654){while(true){
var ret_value__22729__auto__ = (function (){try{while(true){
var result__22730__auto__ = switch__22727__auto__(state_43654);if(cljs.core.keyword_identical_QMARK_(result__22730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22730__auto__;
}
break;
}
}catch (e43695){if((e43695 instanceof Object))
{var ex__22731__auto__ = e43695;var statearr_43696_43729 = state_43654;(statearr_43696_43729[(5)] = ex__22731__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_43654);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e43695;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__43730 = state_43654;
state_43654 = G__43730;
continue;
}
} else
{return ret_value__22729__auto__;
}
break;
}
});
state_machine__22728__auto__ = function(state_43654){
switch(arguments.length){
case 0:
return state_machine__22728__auto____0.call(this);
case 1:
return state_machine__22728__auto____1.call(this,state_43654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22728__auto____0;
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22728__auto____1;
return state_machine__22728__auto__;
})()
;})(switch__22727__auto__,c__22742__auto___43702,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__22744__auto__ = (function (){var statearr_43697 = (function (){return (f__22743__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22743__auto__.cljs$core$IFn$_invoke$arity$0() : f__22743__auto__.call(null));
})();(statearr_43697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22742__auto___43702);
return statearr_43697;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22744__auto__);
});})(c__22742__auto___43702,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj43732 = {};return obj43732;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__19277__auto__ = p;if(and__19277__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__19277__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__20556__auto__ = (((p == null))?null:p);return (function (){var or__19289__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__43736 = x__20556__auto__;return goog.typeOf(G__43736);
})()]);if(or__19289__auto__)
{return or__19289__auto__;
} else
{var or__19289__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__19289__auto____$1)
{return or__19289__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__19277__auto__ = p;if(and__19277__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__19277__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__20556__auto__ = (((p == null))?null:p);return (function (){var or__19289__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__43740 = x__20556__auto__;return goog.typeOf(G__43740);
})()]);if(or__19289__auto__)
{return or__19289__auto__;
} else
{var or__19289__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__19289__auto____$1)
{return or__19289__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__19277__auto__ = p;if(and__19277__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__19277__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__20556__auto__ = (((p == null))?null:p);return (function (){var or__19289__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__43746 = x__20556__auto__;return goog.typeOf(G__43746);
})()]);if(or__19289__auto__)
{return or__19289__auto__;
} else
{var or__19289__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__19289__auto____$1)
{return or__19289__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__19277__auto__ = p;if(and__19277__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__19277__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__20556__auto__ = (((p == null))?null:p);return (function (){var or__19289__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__43748 = x__20556__auto__;return goog.typeOf(G__43748);
})()]);if(or__19289__auto__)
{return or__19289__auto__;
} else
{var or__19289__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__19289__auto____$1)
{return or__19289__auto____$1;
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
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__43889 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__43889) : cljs.core.atom.call(null,G__43889));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__19289__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__43891 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__43891) : cljs.core.deref.call(null,G__43891));
})(),topic);if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__19289__auto__,mults){
return (function (p1__43749_SHARP_){if(cljs.core.truth_((function (){var G__43892 = topic;return (p1__43749_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__43749_SHARP_.cljs$core$IFn$_invoke$arity$1(G__43892) : p1__43749_SHARP_.call(null,G__43892));
})()))
{return p1__43749_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43749_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__43893 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__43893) : buf_fn.call(null,G__43893));
})())));
}
});})(or__19289__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t43894 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43894 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta43895){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta43895 = meta43895;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43894.cljs$lang$type = true;
cljs.core.async.t43894.cljs$lang$ctorStr = "cljs.core.async/t43894";
cljs.core.async.t43894.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"cljs.core.async/t43894");
});})(mults,ensure_mult))
;
cljs.core.async.t43894.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t43894.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__43897 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__43897) : self__.ensure_mult.call(null,G__43897));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t43894.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__43898 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__43898) : cljs.core.deref.call(null,G__43898));
})(),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t43894.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__43899 = self__.mults;var G__43900 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__43899,G__43900) : cljs.core.reset_BANG_.call(null,G__43899,G__43900));
});})(mults,ensure_mult))
;
cljs.core.async.t43894.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t43894.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t43894.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t43894.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_43896){var self__ = this;
var _43896__$1 = this;return self__.meta43895;
});})(mults,ensure_mult))
;
cljs.core.async.t43894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_43896,meta43895__$1){var self__ = this;
var _43896__$1 = this;return (new cljs.core.async.t43894(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta43895__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t43894 = ((function (mults,ensure_mult){
return (function __GT_t43894(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta43895){return (new cljs.core.async.t43894(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta43895));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t43894(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__22742__auto___44025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22742__auto___44025,mults,ensure_mult,p){
return (function (){var f__22743__auto__ = (function (){var switch__22727__auto__ = ((function (c__22742__auto___44025,mults,ensure_mult,p){
return (function (state_43974){var state_val_43975 = (state_43974[(1)]);if((state_val_43975 === (7)))
{var inst_43970 = (state_43974[(2)]);var state_43974__$1 = state_43974;var statearr_43976_44026 = state_43974__$1;(statearr_43976_44026[(2)] = inst_43970);
(statearr_43976_44026[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43975 === (20)))
{var state_43974__$1 = state_43974;var statearr_43977_44027 = state_43974__$1;(statearr_43977_44027[(2)] = null);
(statearr_43977_44027[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43975 === (1)))
{var state_43974__$1 = state_43974;var statearr_43978_44028 = state_43974__$1;(statearr_43978_44028[(2)] = null);
(statearr_43978_44028[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43975 === (24)))
{var inst_43903 = (state_43974[(7)]);var inst_43953 = (state_43974[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_43974,(23),Object,null,(22));var inst_43960 = cljs.core.async.muxch_STAR_(inst_43953);var state_43974__$1 = state_43974;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43974__$1,(25),inst_43960,inst_43903);
} else
{if((state_val_43975 === (4)))
{var inst_43903 = (state_43974[(7)]);var inst_43903__$1 = (state_43974[(2)]);var inst_43904 = (inst_43903__$1 == null);var state_43974__$1 = (function (){var statearr_43979 = state_43974;(statearr_43979[(7)] = inst_43903__$1);
return statearr_43979;
})();if(cljs.core.truth_(inst_43904))
{var statearr_43980_44029 = state_43974__$1;(statearr_43980_44029[(1)] = (5));
} else
{var statearr_43981_44030 = state_43974__$1;(statearr_43981_44030[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43975 === (15)))
{var inst_43945 = (state_43974[(2)]);var state_43974__$1 = state_43974;var statearr_43982_44031 = state_43974__$1;(statearr_43982_44031[(2)] = inst_43945);
(statearr_43982_44031[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43975 === (21)))
{var inst_43967 = (state_43974[(2)]);var state_43974__$1 = (function (){var statearr_43983 = state_43974;(statearr_43983[(9)] = inst_43967);
return statearr_43983;
})();var statearr_43984_44032 = state_43974__$1;(statearr_43984_44032[(2)] = null);
(statearr_43984_44032[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43975 === (13)))
{var inst_43927 = (state_43974[(10)]);var inst_43929 = cljs.core.chunked_seq_QMARK_(inst_43927);var state_43974__$1 = state_43974;if(inst_43929)
{var statearr_43985_44033 = state_43974__$1;(statearr_43985_44033[(1)] = (16));
} else
{var statearr_43986_44034 = state_43974__$1;(statearr_43986_44034[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43975 === (22)))
{var inst_43964 = (state_43974[(2)]);var state_43974__$1 = state_43974;var statearr_43987_44035 = state_43974__$1;(statearr_43987_44035[(2)] = inst_43964);
(statearr_43987_44035[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43975 === (6)))
{var inst_43903 = (state_43974[(7)]);var inst_43951 = (state_43974[(11)]);var inst_43953 = (state_43974[(8)]);var inst_43951__$1 = (function (){var G__43988 = inst_43903;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__43988) : topic_fn.call(null,G__43988));
})();var inst_43952 = (function (){var G__43989 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__43989) : cljs.core.deref.call(null,G__43989));
})();var inst_43953__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43952,inst_43951__$1);var state_43974__$1 = (function (){var statearr_43990 = state_43974;(statearr_43990[(11)] = inst_43951__$1);
(statearr_43990[(8)] = inst_43953__$1);
return statearr_43990;
})();if(cljs.core.truth_(inst_43953__$1))
{var statearr_43991_44036 = state_43974__$1;(statearr_43991_44036[(1)] = (19));
} else
{var statearr_43992_44037 = state_43974__$1;(statearr_43992_44037[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43975 === (25)))
{var inst_43962 = (state_43974[(2)]);var state_43974__$1 = state_43974;var statearr_43993_44038 = state_43974__$1;(statearr_43993_44038[(2)] = inst_43962);
cljs.core.async.impl.ioc_helpers.process_exception(state_43974__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43975 === (17)))
{var inst_43927 = (state_43974[(10)]);var inst_43936 = cljs.core.first(inst_43927);var inst_43937 = cljs.core.async.muxch_STAR_(inst_43936);var inst_43938 = cljs.core.async.close_BANG_(inst_43937);var inst_43939 = cljs.core.next(inst_43927);var inst_43913 = inst_43939;var inst_43914 = null;var inst_43915 = (0);var inst_43916 = (0);var state_43974__$1 = (function (){var statearr_43994 = state_43974;(statearr_43994[(12)] = inst_43915);
(statearr_43994[(13)] = inst_43914);
(statearr_43994[(14)] = inst_43913);
(statearr_43994[(15)] = inst_43938);
(statearr_43994[(16)] = inst_43916);
return statearr_43994;
})();var statearr_43995_44039 = state_43974__$1;(statearr_43995_44039[(2)] = null);
(statearr_43995_44039[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43975 === (3)))
{var inst_43972 = (state_43974[(2)]);var state_43974__$1 = state_43974;return cljs.core.async.impl.ioc_helpers.return_chan(state_43974__$1,inst_43972);
} else
{if((state_val_43975 === (12)))
{var inst_43947 = (state_43974[(2)]);var state_43974__$1 = state_43974;var statearr_43996_44040 = state_43974__$1;(statearr_43996_44040[(2)] = inst_43947);
(statearr_43996_44040[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43975 === (2)))
{var state_43974__$1 = state_43974;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43974__$1,(4),ch);
} else
{if((state_val_43975 === (23)))
{var inst_43951 = (state_43974[(11)]);var inst_43955 = (state_43974[(2)]);var inst_43956 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_43951);var state_43974__$1 = (function (){var statearr_43997 = state_43974;(statearr_43997[(17)] = inst_43955);
return statearr_43997;
})();var statearr_43998_44041 = state_43974__$1;(statearr_43998_44041[(2)] = inst_43956);
cljs.core.async.impl.ioc_helpers.process_exception(state_43974__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43975 === (19)))
{var state_43974__$1 = state_43974;var statearr_43999_44042 = state_43974__$1;(statearr_43999_44042[(2)] = null);
(statearr_43999_44042[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43975 === (11)))
{var inst_43927 = (state_43974[(10)]);var inst_43913 = (state_43974[(14)]);var inst_43927__$1 = cljs.core.seq(inst_43913);var state_43974__$1 = (function (){var statearr_44000 = state_43974;(statearr_44000[(10)] = inst_43927__$1);
return statearr_44000;
})();if(inst_43927__$1)
{var statearr_44001_44043 = state_43974__$1;(statearr_44001_44043[(1)] = (13));
} else
{var statearr_44002_44044 = state_43974__$1;(statearr_44002_44044[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43975 === (9)))
{var inst_43949 = (state_43974[(2)]);var state_43974__$1 = state_43974;var statearr_44003_44045 = state_43974__$1;(statearr_44003_44045[(2)] = inst_43949);
(statearr_44003_44045[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43975 === (5)))
{var inst_43910 = (function (){var G__44004 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__44004) : cljs.core.deref.call(null,G__44004));
})();var inst_43911 = cljs.core.vals(inst_43910);var inst_43912 = cljs.core.seq(inst_43911);var inst_43913 = inst_43912;var inst_43914 = null;var inst_43915 = (0);var inst_43916 = (0);var state_43974__$1 = (function (){var statearr_44005 = state_43974;(statearr_44005[(12)] = inst_43915);
(statearr_44005[(13)] = inst_43914);
(statearr_44005[(14)] = inst_43913);
(statearr_44005[(16)] = inst_43916);
return statearr_44005;
})();var statearr_44006_44046 = state_43974__$1;(statearr_44006_44046[(2)] = null);
(statearr_44006_44046[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43975 === (14)))
{var state_43974__$1 = state_43974;var statearr_44010_44047 = state_43974__$1;(statearr_44010_44047[(2)] = null);
(statearr_44010_44047[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43975 === (16)))
{var inst_43927 = (state_43974[(10)]);var inst_43931 = cljs.core.chunk_first(inst_43927);var inst_43932 = cljs.core.chunk_rest(inst_43927);var inst_43933 = cljs.core.count(inst_43931);var inst_43913 = inst_43932;var inst_43914 = inst_43931;var inst_43915 = inst_43933;var inst_43916 = (0);var state_43974__$1 = (function (){var statearr_44011 = state_43974;(statearr_44011[(12)] = inst_43915);
(statearr_44011[(13)] = inst_43914);
(statearr_44011[(14)] = inst_43913);
(statearr_44011[(16)] = inst_43916);
return statearr_44011;
})();var statearr_44012_44048 = state_43974__$1;(statearr_44012_44048[(2)] = null);
(statearr_44012_44048[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43975 === (10)))
{var inst_43915 = (state_43974[(12)]);var inst_43914 = (state_43974[(13)]);var inst_43913 = (state_43974[(14)]);var inst_43916 = (state_43974[(16)]);var inst_43921 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_43914,inst_43916);var inst_43922 = cljs.core.async.muxch_STAR_(inst_43921);var inst_43923 = cljs.core.async.close_BANG_(inst_43922);var inst_43924 = (inst_43916 + (1));var tmp44007 = inst_43915;var tmp44008 = inst_43914;var tmp44009 = inst_43913;var inst_43913__$1 = tmp44009;var inst_43914__$1 = tmp44008;var inst_43915__$1 = tmp44007;var inst_43916__$1 = inst_43924;var state_43974__$1 = (function (){var statearr_44013 = state_43974;(statearr_44013[(12)] = inst_43915__$1);
(statearr_44013[(13)] = inst_43914__$1);
(statearr_44013[(14)] = inst_43913__$1);
(statearr_44013[(16)] = inst_43916__$1);
(statearr_44013[(18)] = inst_43923);
return statearr_44013;
})();var statearr_44014_44049 = state_43974__$1;(statearr_44014_44049[(2)] = null);
(statearr_44014_44049[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43975 === (18)))
{var inst_43942 = (state_43974[(2)]);var state_43974__$1 = state_43974;var statearr_44015_44050 = state_43974__$1;(statearr_44015_44050[(2)] = inst_43942);
(statearr_44015_44050[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43975 === (8)))
{var inst_43915 = (state_43974[(12)]);var inst_43916 = (state_43974[(16)]);var inst_43918 = (inst_43916 < inst_43915);var inst_43919 = inst_43918;var state_43974__$1 = state_43974;if(cljs.core.truth_(inst_43919))
{var statearr_44016_44051 = state_43974__$1;(statearr_44016_44051[(1)] = (10));
} else
{var statearr_44017_44052 = state_43974__$1;(statearr_44017_44052[(1)] = (11));
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
});})(c__22742__auto___44025,mults,ensure_mult,p))
;return ((function (switch__22727__auto__,c__22742__auto___44025,mults,ensure_mult,p){
return (function() {
var state_machine__22728__auto__ = null;
var state_machine__22728__auto____0 = (function (){var statearr_44021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_44021[(0)] = state_machine__22728__auto__);
(statearr_44021[(1)] = (1));
return statearr_44021;
});
var state_machine__22728__auto____1 = (function (state_43974){while(true){
var ret_value__22729__auto__ = (function (){try{while(true){
var result__22730__auto__ = switch__22727__auto__(state_43974);if(cljs.core.keyword_identical_QMARK_(result__22730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22730__auto__;
}
break;
}
}catch (e44022){if((e44022 instanceof Object))
{var ex__22731__auto__ = e44022;var statearr_44023_44053 = state_43974;(statearr_44023_44053[(5)] = ex__22731__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_43974);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e44022;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44054 = state_43974;
state_43974 = G__44054;
continue;
}
} else
{return ret_value__22729__auto__;
}
break;
}
});
state_machine__22728__auto__ = function(state_43974){
switch(arguments.length){
case 0:
return state_machine__22728__auto____0.call(this);
case 1:
return state_machine__22728__auto____1.call(this,state_43974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22728__auto____0;
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22728__auto____1;
return state_machine__22728__auto__;
})()
;})(switch__22727__auto__,c__22742__auto___44025,mults,ensure_mult,p))
})();var state__22744__auto__ = (function (){var statearr_44024 = (function (){return (f__22743__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22743__auto__.cljs$core$IFn$_invoke$arity$0() : f__22743__auto__.call(null));
})();(statearr_44024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22742__auto___44025);
return statearr_44024;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22744__auto__);
});})(c__22742__auto___44025,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__44135 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__44135) : cljs.core.atom.call(null,G__44135));
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__22742__auto___44208 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22742__auto___44208,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__22743__auto__ = (function (){var switch__22727__auto__ = ((function (c__22742__auto___44208,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_44174){var state_val_44175 = (state_44174[(1)]);if((state_val_44175 === (7)))
{var state_44174__$1 = state_44174;var statearr_44176_44209 = state_44174__$1;(statearr_44176_44209[(2)] = null);
(statearr_44176_44209[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44175 === (1)))
{var state_44174__$1 = state_44174;var statearr_44177_44210 = state_44174__$1;(statearr_44177_44210[(2)] = null);
(statearr_44177_44210[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44175 === (4)))
{var inst_44138 = (state_44174[(7)]);var inst_44140 = (inst_44138 < cnt);var state_44174__$1 = state_44174;if(cljs.core.truth_(inst_44140))
{var statearr_44178_44211 = state_44174__$1;(statearr_44178_44211[(1)] = (6));
} else
{var statearr_44179_44212 = state_44174__$1;(statearr_44179_44212[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44175 === (15)))
{var inst_44170 = (state_44174[(2)]);var state_44174__$1 = state_44174;var statearr_44180_44213 = state_44174__$1;(statearr_44180_44213[(2)] = inst_44170);
(statearr_44180_44213[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44175 === (13)))
{var inst_44163 = cljs.core.async.close_BANG_(out);var state_44174__$1 = state_44174;var statearr_44181_44214 = state_44174__$1;(statearr_44181_44214[(2)] = inst_44163);
(statearr_44181_44214[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44175 === (6)))
{var state_44174__$1 = state_44174;var statearr_44182_44215 = state_44174__$1;(statearr_44182_44215[(2)] = null);
(statearr_44182_44215[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44175 === (3)))
{var inst_44172 = (state_44174[(2)]);var state_44174__$1 = state_44174;return cljs.core.async.impl.ioc_helpers.return_chan(state_44174__$1,inst_44172);
} else
{if((state_val_44175 === (12)))
{var inst_44160 = (state_44174[(8)]);var inst_44160__$1 = (state_44174[(2)]);var inst_44161 = cljs.core.some(cljs.core.nil_QMARK_,inst_44160__$1);var state_44174__$1 = (function (){var statearr_44183 = state_44174;(statearr_44183[(8)] = inst_44160__$1);
return statearr_44183;
})();if(cljs.core.truth_(inst_44161))
{var statearr_44184_44216 = state_44174__$1;(statearr_44184_44216[(1)] = (13));
} else
{var statearr_44185_44217 = state_44174__$1;(statearr_44185_44217[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44175 === (2)))
{var inst_44137 = (function (){var G__44186 = dctr;var G__44187 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__44186,G__44187) : cljs.core.reset_BANG_.call(null,G__44186,G__44187));
})();var inst_44138 = (0);var state_44174__$1 = (function (){var statearr_44188 = state_44174;(statearr_44188[(7)] = inst_44138);
(statearr_44188[(9)] = inst_44137);
return statearr_44188;
})();var statearr_44189_44218 = state_44174__$1;(statearr_44189_44218[(2)] = null);
(statearr_44189_44218[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44175 === (11)))
{var inst_44138 = (state_44174[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_44174,(10),Object,null,(9));var inst_44147 = (function (){var G__44190 = inst_44138;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__44190) : chs__$1.call(null,G__44190));
})();var inst_44148 = (function (){var G__44191 = inst_44138;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__44191) : done.call(null,G__44191));
})();var inst_44149 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_44147,inst_44148);var state_44174__$1 = state_44174;var statearr_44192_44219 = state_44174__$1;(statearr_44192_44219[(2)] = inst_44149);
cljs.core.async.impl.ioc_helpers.process_exception(state_44174__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44175 === (9)))
{var inst_44138 = (state_44174[(7)]);var inst_44151 = (state_44174[(2)]);var inst_44152 = (inst_44138 + (1));var inst_44138__$1 = inst_44152;var state_44174__$1 = (function (){var statearr_44193 = state_44174;(statearr_44193[(7)] = inst_44138__$1);
(statearr_44193[(10)] = inst_44151);
return statearr_44193;
})();var statearr_44194_44220 = state_44174__$1;(statearr_44194_44220[(2)] = null);
(statearr_44194_44220[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44175 === (5)))
{var inst_44158 = (state_44174[(2)]);var state_44174__$1 = (function (){var statearr_44195 = state_44174;(statearr_44195[(11)] = inst_44158);
return statearr_44195;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44174__$1,(12),dchan);
} else
{if((state_val_44175 === (14)))
{var inst_44160 = (state_44174[(8)]);var inst_44165 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_44160);var state_44174__$1 = state_44174;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44174__$1,(16),out,inst_44165);
} else
{if((state_val_44175 === (16)))
{var inst_44167 = (state_44174[(2)]);var state_44174__$1 = (function (){var statearr_44196 = state_44174;(statearr_44196[(12)] = inst_44167);
return statearr_44196;
})();var statearr_44197_44221 = state_44174__$1;(statearr_44197_44221[(2)] = null);
(statearr_44197_44221[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44175 === (10)))
{var inst_44142 = (state_44174[(2)]);var inst_44143 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_44174__$1 = (function (){var statearr_44198 = state_44174;(statearr_44198[(13)] = inst_44142);
return statearr_44198;
})();var statearr_44199_44222 = state_44174__$1;(statearr_44199_44222[(2)] = inst_44143);
cljs.core.async.impl.ioc_helpers.process_exception(state_44174__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44175 === (8)))
{var inst_44156 = (state_44174[(2)]);var state_44174__$1 = state_44174;var statearr_44200_44223 = state_44174__$1;(statearr_44200_44223[(2)] = inst_44156);
(statearr_44200_44223[(1)] = (5));
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
});})(c__22742__auto___44208,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__22727__auto__,c__22742__auto___44208,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__22728__auto__ = null;
var state_machine__22728__auto____0 = (function (){var statearr_44204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_44204[(0)] = state_machine__22728__auto__);
(statearr_44204[(1)] = (1));
return statearr_44204;
});
var state_machine__22728__auto____1 = (function (state_44174){while(true){
var ret_value__22729__auto__ = (function (){try{while(true){
var result__22730__auto__ = switch__22727__auto__(state_44174);if(cljs.core.keyword_identical_QMARK_(result__22730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22730__auto__;
}
break;
}
}catch (e44205){if((e44205 instanceof Object))
{var ex__22731__auto__ = e44205;var statearr_44206_44224 = state_44174;(statearr_44206_44224[(5)] = ex__22731__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_44174);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e44205;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44225 = state_44174;
state_44174 = G__44225;
continue;
}
} else
{return ret_value__22729__auto__;
}
break;
}
});
state_machine__22728__auto__ = function(state_44174){
switch(arguments.length){
case 0:
return state_machine__22728__auto____0.call(this);
case 1:
return state_machine__22728__auto____1.call(this,state_44174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22728__auto____0;
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22728__auto____1;
return state_machine__22728__auto__;
})()
;})(switch__22727__auto__,c__22742__auto___44208,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__22744__auto__ = (function (){var statearr_44207 = (function (){return (f__22743__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22743__auto__.cljs$core$IFn$_invoke$arity$0() : f__22743__auto__.call(null));
})();(statearr_44207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22742__auto___44208);
return statearr_44207;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22744__auto__);
});})(c__22742__auto___44208,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22742__auto___44335 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22742__auto___44335,out){
return (function (){var f__22743__auto__ = (function (){var switch__22727__auto__ = ((function (c__22742__auto___44335,out){
return (function (state_44311){var state_val_44312 = (state_44311[(1)]);if((state_val_44312 === (7)))
{var inst_44291 = (state_44311[(7)]);var inst_44290 = (state_44311[(8)]);var inst_44290__$1 = (state_44311[(2)]);var inst_44291__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44290__$1,(0),null);var inst_44292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44290__$1,(1),null);var inst_44293 = (inst_44291__$1 == null);var state_44311__$1 = (function (){var statearr_44313 = state_44311;(statearr_44313[(9)] = inst_44292);
(statearr_44313[(7)] = inst_44291__$1);
(statearr_44313[(8)] = inst_44290__$1);
return statearr_44313;
})();if(cljs.core.truth_(inst_44293))
{var statearr_44314_44336 = state_44311__$1;(statearr_44314_44336[(1)] = (8));
} else
{var statearr_44315_44337 = state_44311__$1;(statearr_44315_44337[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44312 === (1)))
{var inst_44282 = cljs.core.vec(chs);var inst_44283 = inst_44282;var state_44311__$1 = (function (){var statearr_44316 = state_44311;(statearr_44316[(10)] = inst_44283);
return statearr_44316;
})();var statearr_44317_44338 = state_44311__$1;(statearr_44317_44338[(2)] = null);
(statearr_44317_44338[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44312 === (4)))
{var inst_44283 = (state_44311[(10)]);var state_44311__$1 = state_44311;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_44311__$1,(7),inst_44283);
} else
{if((state_val_44312 === (6)))
{var inst_44307 = (state_44311[(2)]);var state_44311__$1 = state_44311;var statearr_44318_44339 = state_44311__$1;(statearr_44318_44339[(2)] = inst_44307);
(statearr_44318_44339[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44312 === (3)))
{var inst_44309 = (state_44311[(2)]);var state_44311__$1 = state_44311;return cljs.core.async.impl.ioc_helpers.return_chan(state_44311__$1,inst_44309);
} else
{if((state_val_44312 === (2)))
{var inst_44283 = (state_44311[(10)]);var inst_44285 = cljs.core.count(inst_44283);var inst_44286 = (inst_44285 > (0));var state_44311__$1 = state_44311;if(cljs.core.truth_(inst_44286))
{var statearr_44320_44340 = state_44311__$1;(statearr_44320_44340[(1)] = (4));
} else
{var statearr_44321_44341 = state_44311__$1;(statearr_44321_44341[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44312 === (11)))
{var inst_44283 = (state_44311[(10)]);var inst_44300 = (state_44311[(2)]);var tmp44319 = inst_44283;var inst_44283__$1 = tmp44319;var state_44311__$1 = (function (){var statearr_44322 = state_44311;(statearr_44322[(11)] = inst_44300);
(statearr_44322[(10)] = inst_44283__$1);
return statearr_44322;
})();var statearr_44323_44342 = state_44311__$1;(statearr_44323_44342[(2)] = null);
(statearr_44323_44342[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44312 === (9)))
{var inst_44291 = (state_44311[(7)]);var state_44311__$1 = state_44311;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44311__$1,(11),out,inst_44291);
} else
{if((state_val_44312 === (5)))
{var inst_44305 = cljs.core.async.close_BANG_(out);var state_44311__$1 = state_44311;var statearr_44324_44343 = state_44311__$1;(statearr_44324_44343[(2)] = inst_44305);
(statearr_44324_44343[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44312 === (10)))
{var inst_44303 = (state_44311[(2)]);var state_44311__$1 = state_44311;var statearr_44325_44344 = state_44311__$1;(statearr_44325_44344[(2)] = inst_44303);
(statearr_44325_44344[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44312 === (8)))
{var inst_44292 = (state_44311[(9)]);var inst_44291 = (state_44311[(7)]);var inst_44290 = (state_44311[(8)]);var inst_44283 = (state_44311[(10)]);var inst_44295 = (function (){var c = inst_44292;var v = inst_44291;var vec__44288 = inst_44290;var cs = inst_44283;return ((function (c,v,vec__44288,cs,inst_44292,inst_44291,inst_44290,inst_44283,state_val_44312,c__22742__auto___44335,out){
return (function (p1__44226_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__44226_SHARP_);
});
;})(c,v,vec__44288,cs,inst_44292,inst_44291,inst_44290,inst_44283,state_val_44312,c__22742__auto___44335,out))
})();var inst_44296 = cljs.core.filterv(inst_44295,inst_44283);var inst_44283__$1 = inst_44296;var state_44311__$1 = (function (){var statearr_44326 = state_44311;(statearr_44326[(10)] = inst_44283__$1);
return statearr_44326;
})();var statearr_44327_44345 = state_44311__$1;(statearr_44327_44345[(2)] = null);
(statearr_44327_44345[(1)] = (2));
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
});})(c__22742__auto___44335,out))
;return ((function (switch__22727__auto__,c__22742__auto___44335,out){
return (function() {
var state_machine__22728__auto__ = null;
var state_machine__22728__auto____0 = (function (){var statearr_44331 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_44331[(0)] = state_machine__22728__auto__);
(statearr_44331[(1)] = (1));
return statearr_44331;
});
var state_machine__22728__auto____1 = (function (state_44311){while(true){
var ret_value__22729__auto__ = (function (){try{while(true){
var result__22730__auto__ = switch__22727__auto__(state_44311);if(cljs.core.keyword_identical_QMARK_(result__22730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22730__auto__;
}
break;
}
}catch (e44332){if((e44332 instanceof Object))
{var ex__22731__auto__ = e44332;var statearr_44333_44346 = state_44311;(statearr_44333_44346[(5)] = ex__22731__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_44311);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e44332;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44347 = state_44311;
state_44311 = G__44347;
continue;
}
} else
{return ret_value__22729__auto__;
}
break;
}
});
state_machine__22728__auto__ = function(state_44311){
switch(arguments.length){
case 0:
return state_machine__22728__auto____0.call(this);
case 1:
return state_machine__22728__auto____1.call(this,state_44311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22728__auto____0;
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22728__auto____1;
return state_machine__22728__auto__;
})()
;})(switch__22727__auto__,c__22742__auto___44335,out))
})();var state__22744__auto__ = (function (){var statearr_44334 = (function (){return (f__22743__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22743__auto__.cljs$core$IFn$_invoke$arity$0() : f__22743__auto__.call(null));
})();(statearr_44334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22742__auto___44335);
return statearr_44334;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22744__auto__);
});})(c__22742__auto___44335,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22742__auto___44443 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22742__auto___44443,out){
return (function (){var f__22743__auto__ = (function (){var switch__22727__auto__ = ((function (c__22742__auto___44443,out){
return (function (state_44420){var state_val_44421 = (state_44420[(1)]);if((state_val_44421 === (7)))
{var inst_44402 = (state_44420[(7)]);var inst_44402__$1 = (state_44420[(2)]);var inst_44403 = (inst_44402__$1 == null);var inst_44404 = cljs.core.not(inst_44403);var state_44420__$1 = (function (){var statearr_44422 = state_44420;(statearr_44422[(7)] = inst_44402__$1);
return statearr_44422;
})();if(inst_44404)
{var statearr_44423_44444 = state_44420__$1;(statearr_44423_44444[(1)] = (8));
} else
{var statearr_44424_44445 = state_44420__$1;(statearr_44424_44445[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44421 === (1)))
{var inst_44397 = (0);var state_44420__$1 = (function (){var statearr_44425 = state_44420;(statearr_44425[(8)] = inst_44397);
return statearr_44425;
})();var statearr_44426_44446 = state_44420__$1;(statearr_44426_44446[(2)] = null);
(statearr_44426_44446[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44421 === (4)))
{var state_44420__$1 = state_44420;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44420__$1,(7),ch);
} else
{if((state_val_44421 === (6)))
{var inst_44415 = (state_44420[(2)]);var state_44420__$1 = state_44420;var statearr_44427_44447 = state_44420__$1;(statearr_44427_44447[(2)] = inst_44415);
(statearr_44427_44447[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44421 === (3)))
{var inst_44417 = (state_44420[(2)]);var inst_44418 = cljs.core.async.close_BANG_(out);var state_44420__$1 = (function (){var statearr_44428 = state_44420;(statearr_44428[(9)] = inst_44417);
return statearr_44428;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_44420__$1,inst_44418);
} else
{if((state_val_44421 === (2)))
{var inst_44397 = (state_44420[(8)]);var inst_44399 = (inst_44397 < n);var state_44420__$1 = state_44420;if(cljs.core.truth_(inst_44399))
{var statearr_44429_44448 = state_44420__$1;(statearr_44429_44448[(1)] = (4));
} else
{var statearr_44430_44449 = state_44420__$1;(statearr_44430_44449[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44421 === (11)))
{var inst_44397 = (state_44420[(8)]);var inst_44407 = (state_44420[(2)]);var inst_44408 = (inst_44397 + (1));var inst_44397__$1 = inst_44408;var state_44420__$1 = (function (){var statearr_44431 = state_44420;(statearr_44431[(8)] = inst_44397__$1);
(statearr_44431[(10)] = inst_44407);
return statearr_44431;
})();var statearr_44432_44450 = state_44420__$1;(statearr_44432_44450[(2)] = null);
(statearr_44432_44450[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44421 === (9)))
{var state_44420__$1 = state_44420;var statearr_44433_44451 = state_44420__$1;(statearr_44433_44451[(2)] = null);
(statearr_44433_44451[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44421 === (5)))
{var state_44420__$1 = state_44420;var statearr_44434_44452 = state_44420__$1;(statearr_44434_44452[(2)] = null);
(statearr_44434_44452[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44421 === (10)))
{var inst_44412 = (state_44420[(2)]);var state_44420__$1 = state_44420;var statearr_44435_44453 = state_44420__$1;(statearr_44435_44453[(2)] = inst_44412);
(statearr_44435_44453[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44421 === (8)))
{var inst_44402 = (state_44420[(7)]);var state_44420__$1 = state_44420;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44420__$1,(11),out,inst_44402);
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
});})(c__22742__auto___44443,out))
;return ((function (switch__22727__auto__,c__22742__auto___44443,out){
return (function() {
var state_machine__22728__auto__ = null;
var state_machine__22728__auto____0 = (function (){var statearr_44439 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_44439[(0)] = state_machine__22728__auto__);
(statearr_44439[(1)] = (1));
return statearr_44439;
});
var state_machine__22728__auto____1 = (function (state_44420){while(true){
var ret_value__22729__auto__ = (function (){try{while(true){
var result__22730__auto__ = switch__22727__auto__(state_44420);if(cljs.core.keyword_identical_QMARK_(result__22730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22730__auto__;
}
break;
}
}catch (e44440){if((e44440 instanceof Object))
{var ex__22731__auto__ = e44440;var statearr_44441_44454 = state_44420;(statearr_44441_44454[(5)] = ex__22731__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_44420);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e44440;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44455 = state_44420;
state_44420 = G__44455;
continue;
}
} else
{return ret_value__22729__auto__;
}
break;
}
});
state_machine__22728__auto__ = function(state_44420){
switch(arguments.length){
case 0:
return state_machine__22728__auto____0.call(this);
case 1:
return state_machine__22728__auto____1.call(this,state_44420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22728__auto____0;
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22728__auto____1;
return state_machine__22728__auto__;
})()
;})(switch__22727__auto__,c__22742__auto___44443,out))
})();var state__22744__auto__ = (function (){var statearr_44442 = (function (){return (f__22743__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22743__auto__.cljs$core$IFn$_invoke$arity$0() : f__22743__auto__.call(null));
})();(statearr_44442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22742__auto___44443);
return statearr_44442;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22744__auto__);
});})(c__22742__auto___44443,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22742__auto___44554 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22742__auto___44554,out){
return (function (){var f__22743__auto__ = (function (){var switch__22727__auto__ = ((function (c__22742__auto___44554,out){
return (function (state_44529){var state_val_44530 = (state_44529[(1)]);if((state_val_44530 === (7)))
{var inst_44524 = (state_44529[(2)]);var state_44529__$1 = state_44529;var statearr_44531_44555 = state_44529__$1;(statearr_44531_44555[(2)] = inst_44524);
(statearr_44531_44555[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44530 === (1)))
{var inst_44506 = null;var state_44529__$1 = (function (){var statearr_44532 = state_44529;(statearr_44532[(7)] = inst_44506);
return statearr_44532;
})();var statearr_44533_44556 = state_44529__$1;(statearr_44533_44556[(2)] = null);
(statearr_44533_44556[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44530 === (4)))
{var inst_44509 = (state_44529[(8)]);var inst_44509__$1 = (state_44529[(2)]);var inst_44510 = (inst_44509__$1 == null);var inst_44511 = cljs.core.not(inst_44510);var state_44529__$1 = (function (){var statearr_44534 = state_44529;(statearr_44534[(8)] = inst_44509__$1);
return statearr_44534;
})();if(inst_44511)
{var statearr_44535_44557 = state_44529__$1;(statearr_44535_44557[(1)] = (5));
} else
{var statearr_44536_44558 = state_44529__$1;(statearr_44536_44558[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44530 === (6)))
{var state_44529__$1 = state_44529;var statearr_44537_44559 = state_44529__$1;(statearr_44537_44559[(2)] = null);
(statearr_44537_44559[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44530 === (3)))
{var inst_44526 = (state_44529[(2)]);var inst_44527 = cljs.core.async.close_BANG_(out);var state_44529__$1 = (function (){var statearr_44538 = state_44529;(statearr_44538[(9)] = inst_44526);
return statearr_44538;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_44529__$1,inst_44527);
} else
{if((state_val_44530 === (2)))
{var state_44529__$1 = state_44529;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44529__$1,(4),ch);
} else
{if((state_val_44530 === (11)))
{var inst_44509 = (state_44529[(8)]);var inst_44518 = (state_44529[(2)]);var inst_44506 = inst_44509;var state_44529__$1 = (function (){var statearr_44539 = state_44529;(statearr_44539[(7)] = inst_44506);
(statearr_44539[(10)] = inst_44518);
return statearr_44539;
})();var statearr_44540_44560 = state_44529__$1;(statearr_44540_44560[(2)] = null);
(statearr_44540_44560[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44530 === (9)))
{var inst_44509 = (state_44529[(8)]);var state_44529__$1 = state_44529;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44529__$1,(11),out,inst_44509);
} else
{if((state_val_44530 === (5)))
{var inst_44509 = (state_44529[(8)]);var inst_44506 = (state_44529[(7)]);var inst_44513 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44509,inst_44506);var state_44529__$1 = state_44529;if(inst_44513)
{var statearr_44542_44561 = state_44529__$1;(statearr_44542_44561[(1)] = (8));
} else
{var statearr_44543_44562 = state_44529__$1;(statearr_44543_44562[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44530 === (10)))
{var inst_44521 = (state_44529[(2)]);var state_44529__$1 = state_44529;var statearr_44544_44563 = state_44529__$1;(statearr_44544_44563[(2)] = inst_44521);
(statearr_44544_44563[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44530 === (8)))
{var inst_44506 = (state_44529[(7)]);var tmp44541 = inst_44506;var inst_44506__$1 = tmp44541;var state_44529__$1 = (function (){var statearr_44545 = state_44529;(statearr_44545[(7)] = inst_44506__$1);
return statearr_44545;
})();var statearr_44546_44564 = state_44529__$1;(statearr_44546_44564[(2)] = null);
(statearr_44546_44564[(1)] = (2));
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
});})(c__22742__auto___44554,out))
;return ((function (switch__22727__auto__,c__22742__auto___44554,out){
return (function() {
var state_machine__22728__auto__ = null;
var state_machine__22728__auto____0 = (function (){var statearr_44550 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_44550[(0)] = state_machine__22728__auto__);
(statearr_44550[(1)] = (1));
return statearr_44550;
});
var state_machine__22728__auto____1 = (function (state_44529){while(true){
var ret_value__22729__auto__ = (function (){try{while(true){
var result__22730__auto__ = switch__22727__auto__(state_44529);if(cljs.core.keyword_identical_QMARK_(result__22730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22730__auto__;
}
break;
}
}catch (e44551){if((e44551 instanceof Object))
{var ex__22731__auto__ = e44551;var statearr_44552_44565 = state_44529;(statearr_44552_44565[(5)] = ex__22731__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_44529);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e44551;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44566 = state_44529;
state_44529 = G__44566;
continue;
}
} else
{return ret_value__22729__auto__;
}
break;
}
});
state_machine__22728__auto__ = function(state_44529){
switch(arguments.length){
case 0:
return state_machine__22728__auto____0.call(this);
case 1:
return state_machine__22728__auto____1.call(this,state_44529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22728__auto____0;
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22728__auto____1;
return state_machine__22728__auto__;
})()
;})(switch__22727__auto__,c__22742__auto___44554,out))
})();var state__22744__auto__ = (function (){var statearr_44553 = (function (){return (f__22743__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22743__auto__.cljs$core$IFn$_invoke$arity$0() : f__22743__auto__.call(null));
})();(statearr_44553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22742__auto___44554);
return statearr_44553;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22744__auto__);
});})(c__22742__auto___44554,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22742__auto___44704 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22742__auto___44704,out){
return (function (){var f__22743__auto__ = (function (){var switch__22727__auto__ = ((function (c__22742__auto___44704,out){
return (function (state_44674){var state_val_44675 = (state_44674[(1)]);if((state_val_44675 === (7)))
{var inst_44670 = (state_44674[(2)]);var state_44674__$1 = state_44674;var statearr_44676_44705 = state_44674__$1;(statearr_44676_44705[(2)] = inst_44670);
(statearr_44676_44705[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44675 === (1)))
{var inst_44637 = (new Array(n));var inst_44638 = inst_44637;var inst_44639 = (0);var state_44674__$1 = (function (){var statearr_44677 = state_44674;(statearr_44677[(7)] = inst_44639);
(statearr_44677[(8)] = inst_44638);
return statearr_44677;
})();var statearr_44678_44706 = state_44674__$1;(statearr_44678_44706[(2)] = null);
(statearr_44678_44706[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44675 === (4)))
{var inst_44642 = (state_44674[(9)]);var inst_44642__$1 = (state_44674[(2)]);var inst_44643 = (inst_44642__$1 == null);var inst_44644 = cljs.core.not(inst_44643);var state_44674__$1 = (function (){var statearr_44679 = state_44674;(statearr_44679[(9)] = inst_44642__$1);
return statearr_44679;
})();if(inst_44644)
{var statearr_44680_44707 = state_44674__$1;(statearr_44680_44707[(1)] = (5));
} else
{var statearr_44681_44708 = state_44674__$1;(statearr_44681_44708[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44675 === (15)))
{var inst_44664 = (state_44674[(2)]);var state_44674__$1 = state_44674;var statearr_44682_44709 = state_44674__$1;(statearr_44682_44709[(2)] = inst_44664);
(statearr_44682_44709[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44675 === (13)))
{var state_44674__$1 = state_44674;var statearr_44683_44710 = state_44674__$1;(statearr_44683_44710[(2)] = null);
(statearr_44683_44710[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44675 === (6)))
{var inst_44639 = (state_44674[(7)]);var inst_44660 = (inst_44639 > (0));var state_44674__$1 = state_44674;if(cljs.core.truth_(inst_44660))
{var statearr_44684_44711 = state_44674__$1;(statearr_44684_44711[(1)] = (12));
} else
{var statearr_44685_44712 = state_44674__$1;(statearr_44685_44712[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44675 === (3)))
{var inst_44672 = (state_44674[(2)]);var state_44674__$1 = state_44674;return cljs.core.async.impl.ioc_helpers.return_chan(state_44674__$1,inst_44672);
} else
{if((state_val_44675 === (12)))
{var inst_44638 = (state_44674[(8)]);var inst_44662 = cljs.core.vec(inst_44638);var state_44674__$1 = state_44674;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44674__$1,(15),out,inst_44662);
} else
{if((state_val_44675 === (2)))
{var state_44674__$1 = state_44674;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44674__$1,(4),ch);
} else
{if((state_val_44675 === (11)))
{var inst_44654 = (state_44674[(2)]);var inst_44655 = (new Array(n));var inst_44638 = inst_44655;var inst_44639 = (0);var state_44674__$1 = (function (){var statearr_44686 = state_44674;(statearr_44686[(7)] = inst_44639);
(statearr_44686[(8)] = inst_44638);
(statearr_44686[(10)] = inst_44654);
return statearr_44686;
})();var statearr_44687_44713 = state_44674__$1;(statearr_44687_44713[(2)] = null);
(statearr_44687_44713[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44675 === (9)))
{var inst_44638 = (state_44674[(8)]);var inst_44652 = cljs.core.vec(inst_44638);var state_44674__$1 = state_44674;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44674__$1,(11),out,inst_44652);
} else
{if((state_val_44675 === (5)))
{var inst_44642 = (state_44674[(9)]);var inst_44639 = (state_44674[(7)]);var inst_44647 = (state_44674[(11)]);var inst_44638 = (state_44674[(8)]);var inst_44646 = (inst_44638[inst_44639] = inst_44642);var inst_44647__$1 = (inst_44639 + (1));var inst_44648 = (inst_44647__$1 < n);var state_44674__$1 = (function (){var statearr_44688 = state_44674;(statearr_44688[(12)] = inst_44646);
(statearr_44688[(11)] = inst_44647__$1);
return statearr_44688;
})();if(cljs.core.truth_(inst_44648))
{var statearr_44689_44714 = state_44674__$1;(statearr_44689_44714[(1)] = (8));
} else
{var statearr_44690_44715 = state_44674__$1;(statearr_44690_44715[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44675 === (14)))
{var inst_44667 = (state_44674[(2)]);var inst_44668 = cljs.core.async.close_BANG_(out);var state_44674__$1 = (function (){var statearr_44692 = state_44674;(statearr_44692[(13)] = inst_44667);
return statearr_44692;
})();var statearr_44693_44716 = state_44674__$1;(statearr_44693_44716[(2)] = inst_44668);
(statearr_44693_44716[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44675 === (10)))
{var inst_44658 = (state_44674[(2)]);var state_44674__$1 = state_44674;var statearr_44694_44717 = state_44674__$1;(statearr_44694_44717[(2)] = inst_44658);
(statearr_44694_44717[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44675 === (8)))
{var inst_44647 = (state_44674[(11)]);var inst_44638 = (state_44674[(8)]);var tmp44691 = inst_44638;var inst_44638__$1 = tmp44691;var inst_44639 = inst_44647;var state_44674__$1 = (function (){var statearr_44695 = state_44674;(statearr_44695[(7)] = inst_44639);
(statearr_44695[(8)] = inst_44638__$1);
return statearr_44695;
})();var statearr_44696_44718 = state_44674__$1;(statearr_44696_44718[(2)] = null);
(statearr_44696_44718[(1)] = (2));
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
});})(c__22742__auto___44704,out))
;return ((function (switch__22727__auto__,c__22742__auto___44704,out){
return (function() {
var state_machine__22728__auto__ = null;
var state_machine__22728__auto____0 = (function (){var statearr_44700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_44700[(0)] = state_machine__22728__auto__);
(statearr_44700[(1)] = (1));
return statearr_44700;
});
var state_machine__22728__auto____1 = (function (state_44674){while(true){
var ret_value__22729__auto__ = (function (){try{while(true){
var result__22730__auto__ = switch__22727__auto__(state_44674);if(cljs.core.keyword_identical_QMARK_(result__22730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22730__auto__;
}
break;
}
}catch (e44701){if((e44701 instanceof Object))
{var ex__22731__auto__ = e44701;var statearr_44702_44719 = state_44674;(statearr_44702_44719[(5)] = ex__22731__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_44674);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e44701;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44720 = state_44674;
state_44674 = G__44720;
continue;
}
} else
{return ret_value__22729__auto__;
}
break;
}
});
state_machine__22728__auto__ = function(state_44674){
switch(arguments.length){
case 0:
return state_machine__22728__auto____0.call(this);
case 1:
return state_machine__22728__auto____1.call(this,state_44674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22728__auto____0;
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22728__auto____1;
return state_machine__22728__auto__;
})()
;})(switch__22727__auto__,c__22742__auto___44704,out))
})();var state__22744__auto__ = (function (){var statearr_44703 = (function (){return (f__22743__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22743__auto__.cljs$core$IFn$_invoke$arity$0() : f__22743__auto__.call(null));
})();(statearr_44703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22742__auto___44704);
return statearr_44703;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22744__auto__);
});})(c__22742__auto___44704,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22742__auto___44868 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22742__auto___44868,out){
return (function (){var f__22743__auto__ = (function (){var switch__22727__auto__ = ((function (c__22742__auto___44868,out){
return (function (state_44837){var state_val_44838 = (state_44837[(1)]);if((state_val_44838 === (7)))
{var inst_44833 = (state_44837[(2)]);var state_44837__$1 = state_44837;var statearr_44839_44869 = state_44837__$1;(statearr_44839_44869[(2)] = inst_44833);
(statearr_44839_44869[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44838 === (1)))
{var inst_44796 = [];var inst_44797 = inst_44796;var inst_44798 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_44837__$1 = (function (){var statearr_44840 = state_44837;(statearr_44840[(7)] = inst_44798);
(statearr_44840[(8)] = inst_44797);
return statearr_44840;
})();var statearr_44841_44870 = state_44837__$1;(statearr_44841_44870[(2)] = null);
(statearr_44841_44870[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44838 === (4)))
{var inst_44801 = (state_44837[(9)]);var inst_44801__$1 = (state_44837[(2)]);var inst_44802 = (inst_44801__$1 == null);var inst_44803 = cljs.core.not(inst_44802);var state_44837__$1 = (function (){var statearr_44842 = state_44837;(statearr_44842[(9)] = inst_44801__$1);
return statearr_44842;
})();if(inst_44803)
{var statearr_44843_44871 = state_44837__$1;(statearr_44843_44871[(1)] = (5));
} else
{var statearr_44844_44872 = state_44837__$1;(statearr_44844_44872[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44838 === (15)))
{var inst_44827 = (state_44837[(2)]);var state_44837__$1 = state_44837;var statearr_44845_44873 = state_44837__$1;(statearr_44845_44873[(2)] = inst_44827);
(statearr_44845_44873[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44838 === (13)))
{var state_44837__$1 = state_44837;var statearr_44846_44874 = state_44837__$1;(statearr_44846_44874[(2)] = null);
(statearr_44846_44874[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44838 === (6)))
{var inst_44797 = (state_44837[(8)]);var inst_44822 = inst_44797.length;var inst_44823 = (inst_44822 > (0));var state_44837__$1 = state_44837;if(cljs.core.truth_(inst_44823))
{var statearr_44847_44875 = state_44837__$1;(statearr_44847_44875[(1)] = (12));
} else
{var statearr_44848_44876 = state_44837__$1;(statearr_44848_44876[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44838 === (3)))
{var inst_44835 = (state_44837[(2)]);var state_44837__$1 = state_44837;return cljs.core.async.impl.ioc_helpers.return_chan(state_44837__$1,inst_44835);
} else
{if((state_val_44838 === (12)))
{var inst_44797 = (state_44837[(8)]);var inst_44825 = cljs.core.vec(inst_44797);var state_44837__$1 = state_44837;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44837__$1,(15),out,inst_44825);
} else
{if((state_val_44838 === (2)))
{var state_44837__$1 = state_44837;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44837__$1,(4),ch);
} else
{if((state_val_44838 === (11)))
{var inst_44805 = (state_44837[(10)]);var inst_44801 = (state_44837[(9)]);var inst_44815 = (state_44837[(2)]);var inst_44816 = [];var inst_44817 = inst_44816.push(inst_44801);var inst_44797 = inst_44816;var inst_44798 = inst_44805;var state_44837__$1 = (function (){var statearr_44849 = state_44837;(statearr_44849[(11)] = inst_44815);
(statearr_44849[(7)] = inst_44798);
(statearr_44849[(8)] = inst_44797);
(statearr_44849[(12)] = inst_44817);
return statearr_44849;
})();var statearr_44850_44877 = state_44837__$1;(statearr_44850_44877[(2)] = null);
(statearr_44850_44877[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44838 === (9)))
{var inst_44797 = (state_44837[(8)]);var inst_44813 = cljs.core.vec(inst_44797);var state_44837__$1 = state_44837;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44837__$1,(11),out,inst_44813);
} else
{if((state_val_44838 === (5)))
{var inst_44805 = (state_44837[(10)]);var inst_44798 = (state_44837[(7)]);var inst_44801 = (state_44837[(9)]);var inst_44805__$1 = (function (){var G__44851 = inst_44801;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44851) : f.call(null,G__44851));
})();var inst_44806 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44805__$1,inst_44798);var inst_44807 = cljs.core.keyword_identical_QMARK_(inst_44798,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_44808 = (inst_44806) || (inst_44807);var state_44837__$1 = (function (){var statearr_44852 = state_44837;(statearr_44852[(10)] = inst_44805__$1);
return statearr_44852;
})();if(cljs.core.truth_(inst_44808))
{var statearr_44853_44878 = state_44837__$1;(statearr_44853_44878[(1)] = (8));
} else
{var statearr_44854_44879 = state_44837__$1;(statearr_44854_44879[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44838 === (14)))
{var inst_44830 = (state_44837[(2)]);var inst_44831 = cljs.core.async.close_BANG_(out);var state_44837__$1 = (function (){var statearr_44856 = state_44837;(statearr_44856[(13)] = inst_44830);
return statearr_44856;
})();var statearr_44857_44880 = state_44837__$1;(statearr_44857_44880[(2)] = inst_44831);
(statearr_44857_44880[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44838 === (10)))
{var inst_44820 = (state_44837[(2)]);var state_44837__$1 = state_44837;var statearr_44858_44881 = state_44837__$1;(statearr_44858_44881[(2)] = inst_44820);
(statearr_44858_44881[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44838 === (8)))
{var inst_44805 = (state_44837[(10)]);var inst_44801 = (state_44837[(9)]);var inst_44797 = (state_44837[(8)]);var inst_44810 = inst_44797.push(inst_44801);var tmp44855 = inst_44797;var inst_44797__$1 = tmp44855;var inst_44798 = inst_44805;var state_44837__$1 = (function (){var statearr_44859 = state_44837;(statearr_44859[(14)] = inst_44810);
(statearr_44859[(7)] = inst_44798);
(statearr_44859[(8)] = inst_44797__$1);
return statearr_44859;
})();var statearr_44860_44882 = state_44837__$1;(statearr_44860_44882[(2)] = null);
(statearr_44860_44882[(1)] = (2));
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
});})(c__22742__auto___44868,out))
;return ((function (switch__22727__auto__,c__22742__auto___44868,out){
return (function() {
var state_machine__22728__auto__ = null;
var state_machine__22728__auto____0 = (function (){var statearr_44864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_44864[(0)] = state_machine__22728__auto__);
(statearr_44864[(1)] = (1));
return statearr_44864;
});
var state_machine__22728__auto____1 = (function (state_44837){while(true){
var ret_value__22729__auto__ = (function (){try{while(true){
var result__22730__auto__ = switch__22727__auto__(state_44837);if(cljs.core.keyword_identical_QMARK_(result__22730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22730__auto__;
}
break;
}
}catch (e44865){if((e44865 instanceof Object))
{var ex__22731__auto__ = e44865;var statearr_44866_44883 = state_44837;(statearr_44866_44883[(5)] = ex__22731__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_44837);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e44865;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44884 = state_44837;
state_44837 = G__44884;
continue;
}
} else
{return ret_value__22729__auto__;
}
break;
}
});
state_machine__22728__auto__ = function(state_44837){
switch(arguments.length){
case 0:
return state_machine__22728__auto____0.call(this);
case 1:
return state_machine__22728__auto____1.call(this,state_44837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22728__auto____0;
state_machine__22728__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22728__auto____1;
return state_machine__22728__auto__;
})()
;})(switch__22727__auto__,c__22742__auto___44868,out))
})();var state__22744__auto__ = (function (){var statearr_44867 = (function (){return (f__22743__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22743__auto__.cljs$core$IFn$_invoke$arity$0() : f__22743__auto__.call(null));
})();(statearr_44867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22742__auto___44868);
return statearr_44867;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22744__auto__);
});})(c__22742__auto___44868,out))
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