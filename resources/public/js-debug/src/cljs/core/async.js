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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t48899 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48899 = (function (f,fn_handler,meta48900){
this.f = f;
this.fn_handler = fn_handler;
this.meta48900 = meta48900;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48899.cljs$lang$type = true;
cljs.core.async.t48899.cljs$lang$ctorStr = "cljs.core.async/t48899";
cljs.core.async.t48899.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core.async/t48899");
});
cljs.core.async.t48899.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t48899.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t48899.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t48899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48901){var self__ = this;
var _48901__$1 = this;return self__.meta48900;
});
cljs.core.async.t48899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48901,meta48900__$1){var self__ = this;
var _48901__$1 = this;return (new cljs.core.async.t48899(self__.f,self__.fn_handler,meta48900__$1));
});
cljs.core.async.__GT_t48899 = (function __GT_t48899(f__$1,fn_handler__$1,meta48900){return (new cljs.core.async.t48899(f__$1,fn_handler__$1,meta48900));
});
}
return (new cljs.core.async.t48899(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__48903 = buff;if(G__48903)
{var bit__20847__auto__ = null;if(cljs.core.truth_((function (){var or__19586__auto__ = bit__20847__auto__;if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{return G__48903.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__48903.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__48903);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__48903);
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
{var val_48914 = (function (){var G__48911 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48911) : cljs.core.deref.call(null,G__48911));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__48912_48915 = val_48914;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__48912_48915) : fn1.call(null,G__48912_48915));
} else
{cljs.core.async.impl.dispatch.run(((function (val_48914,ret){
return (function (){var G__48913 = val_48914;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__48913) : fn1.call(null,G__48913));
});})(val_48914,ret))
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__19564__auto__ = ret;if(cljs.core.truth_(and__19564__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__19564__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__21231__auto___48923 = n;var x_48924 = (0);while(true){
if((x_48924 < n__21231__auto___48923))
{(a[x_48924] = (0));
{
var G__48925 = (x_48924 + (1));
x_48924 = G__48925;
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
var G__48926 = (i + (1));
i = G__48926;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__48934 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__48934) : cljs.core.atom.call(null,G__48934));
})();if(typeof cljs.core.async.t48935 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48935 = (function (flag,alt_flag,meta48936){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta48936 = meta48936;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48935.cljs$lang$type = true;
cljs.core.async.t48935.cljs$lang$ctorStr = "cljs.core.async/t48935";
cljs.core.async.t48935.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core.async/t48935");
});})(flag))
;
cljs.core.async.t48935.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t48935.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__48938 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48938) : cljs.core.deref.call(null,G__48938));
});})(flag))
;
cljs.core.async.t48935.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__48939_48941 = self__.flag;var G__48940_48942 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__48939_48941,G__48940_48942) : cljs.core.reset_BANG_.call(null,G__48939_48941,G__48940_48942));
return true;
});})(flag))
;
cljs.core.async.t48935.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_48937){var self__ = this;
var _48937__$1 = this;return self__.meta48936;
});})(flag))
;
cljs.core.async.t48935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_48937,meta48936__$1){var self__ = this;
var _48937__$1 = this;return (new cljs.core.async.t48935(self__.flag,self__.alt_flag,meta48936__$1));
});})(flag))
;
cljs.core.async.__GT_t48935 = ((function (flag){
return (function __GT_t48935(flag__$1,alt_flag__$1,meta48936){return (new cljs.core.async.t48935(flag__$1,alt_flag__$1,meta48936));
});})(flag))
;
}
return (new cljs.core.async.t48935(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t48946 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48946 = (function (cb,flag,alt_handler,meta48947){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta48947 = meta48947;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48946.cljs$lang$type = true;
cljs.core.async.t48946.cljs$lang$ctorStr = "cljs.core.async/t48946";
cljs.core.async.t48946.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core.async/t48946");
});
cljs.core.async.t48946.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t48946.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t48946.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t48946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48948){var self__ = this;
var _48948__$1 = this;return self__.meta48947;
});
cljs.core.async.t48946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48948,meta48947__$1){var self__ = this;
var _48948__$1 = this;return (new cljs.core.async.t48946(self__.cb,self__.flag,self__.alt_handler,meta48947__$1));
});
cljs.core.async.__GT_t48946 = (function __GT_t48946(cb__$1,flag__$1,alt_handler__$1,meta48947){return (new cljs.core.async.t48946(cb__$1,flag__$1,alt_handler__$1,meta48947));
});
}
return (new cljs.core.async.t48946(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__48955 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__48955) : port.call(null,G__48955));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__48956 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__48956) : port.call(null,G__48956));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){var G__48957 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__48957) : fret.call(null,G__48957));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48949_SHARP_){var G__48958 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48949_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__48958) : fret.call(null,G__48958));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48959 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48959) : cljs.core.deref.call(null,G__48959));
})(),(function (){var or__19586__auto__ = wport;if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__48960 = (i + (1));
i = G__48960;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__19586__auto__ = ret;if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__19564__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__19564__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__19564__auto__;
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
var alts_BANG___delegate = function (ports,p__48961){var map__48963 = p__48961;var map__48963__$1 = ((cljs.core.seq_QMARK_(map__48963))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48963):map__48963);var opts = map__48963__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

};
var alts_BANG_ = function (ports,var_args){
var p__48961 = null;if (arguments.length > 1) {
  p__48961 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__48961);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__48964){
var ports = cljs.core.first(arglist__48964);
var p__48961 = cljs.core.rest(arglist__48964);
return alts_BANG___delegate(ports,p__48961);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t48978 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48978 = (function (ch,f,map_LT_,meta48979){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta48979 = meta48979;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48978.cljs$lang$type = true;
cljs.core.async.t48978.cljs$lang$ctorStr = "cljs.core.async/t48978";
cljs.core.async.t48978.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core.async/t48978");
});
cljs.core.async.t48978.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t48978.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t48978.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t48978.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t48981 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48981 = (function (fn1,_,meta48979,ch,f,map_LT_,meta48982){
this.fn1 = fn1;
this._ = _;
this.meta48979 = meta48979;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta48982 = meta48982;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48981.cljs$lang$type = true;
cljs.core.async.t48981.cljs$lang$ctorStr = "cljs.core.async/t48981";
cljs.core.async.t48981.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core.async/t48981");
});})(___$1))
;
cljs.core.async.t48981.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t48981.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t48981.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var G__48984 = self__.fn1;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(G__48984) : cljs.core.async.impl.protocols.lock_id.call(null,G__48984));
});})(___$1))
;
cljs.core.async.t48981.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__48965_SHARP_){var G__48985 = (((p1__48965_SHARP_ == null))?null:(function (){var G__48986 = p1__48965_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__48986) : self__.f.call(null,G__48986));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__48985) : f1.call(null,G__48985));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t48981.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_48983){var self__ = this;
var _48983__$1 = this;return self__.meta48982;
});})(___$1))
;
cljs.core.async.t48981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_48983,meta48982__$1){var self__ = this;
var _48983__$1 = this;return (new cljs.core.async.t48981(self__.fn1,self__._,self__.meta48979,self__.ch,self__.f,self__.map_LT_,meta48982__$1));
});})(___$1))
;
cljs.core.async.__GT_t48981 = ((function (___$1){
return (function __GT_t48981(fn1__$1,___$2,meta48979__$1,ch__$2,f__$2,map_LT___$2,meta48982){return (new cljs.core.async.t48981(fn1__$1,___$2,meta48979__$1,ch__$2,f__$2,map_LT___$2,meta48982));
});})(___$1))
;
}
return (new cljs.core.async.t48981(fn1,___$1,self__.meta48979,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__19564__auto__ = ret;if(cljs.core.truth_(and__19564__auto__))
{return !(((function (){var G__48987 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48987) : cljs.core.deref.call(null,G__48987));
})() == null));
} else
{return and__19564__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__48988 = (function (){var G__48989 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48989) : cljs.core.deref.call(null,G__48989));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__48988) : self__.f.call(null,G__48988));
})());
} else
{return ret;
}
});
cljs.core.async.t48978.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t48978.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t48978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48980){var self__ = this;
var _48980__$1 = this;return self__.meta48979;
});
cljs.core.async.t48978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48980,meta48979__$1){var self__ = this;
var _48980__$1 = this;return (new cljs.core.async.t48978(self__.ch,self__.f,self__.map_LT_,meta48979__$1));
});
cljs.core.async.__GT_t48978 = (function __GT_t48978(ch__$1,f__$1,map_LT___$1,meta48979){return (new cljs.core.async.t48978(ch__$1,f__$1,map_LT___$1,meta48979));
});
}
return (new cljs.core.async.t48978(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t48994 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48994 = (function (ch,f,map_GT_,meta48995){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta48995 = meta48995;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48994.cljs$lang$type = true;
cljs.core.async.t48994.cljs$lang$ctorStr = "cljs.core.async/t48994";
cljs.core.async.t48994.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core.async/t48994");
});
cljs.core.async.t48994.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t48994.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__48997 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__48997) : self__.f.call(null,G__48997));
})(),fn0);
});
cljs.core.async.t48994.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t48994.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t48994.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t48994.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t48994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48996){var self__ = this;
var _48996__$1 = this;return self__.meta48995;
});
cljs.core.async.t48994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48996,meta48995__$1){var self__ = this;
var _48996__$1 = this;return (new cljs.core.async.t48994(self__.ch,self__.f,self__.map_GT_,meta48995__$1));
});
cljs.core.async.__GT_t48994 = (function __GT_t48994(ch__$1,f__$1,map_GT___$1,meta48995){return (new cljs.core.async.t48994(ch__$1,f__$1,map_GT___$1,meta48995));
});
}
return (new cljs.core.async.t48994(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t49002 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49002 = (function (ch,p,filter_GT_,meta49003){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta49003 = meta49003;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49002.cljs$lang$type = true;
cljs.core.async.t49002.cljs$lang$ctorStr = "cljs.core.async/t49002";
cljs.core.async.t49002.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core.async/t49002");
});
cljs.core.async.t49002.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t49002.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__49005 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__49005) : self__.p.call(null,G__49005));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t49002.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t49002.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t49002.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t49002.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t49002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49004){var self__ = this;
var _49004__$1 = this;return self__.meta49003;
});
cljs.core.async.t49002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49004,meta49003__$1){var self__ = this;
var _49004__$1 = this;return (new cljs.core.async.t49002(self__.ch,self__.p,self__.filter_GT_,meta49003__$1));
});
cljs.core.async.__GT_t49002 = (function __GT_t49002(ch__$1,p__$1,filter_GT___$1,meta49003){return (new cljs.core.async.t49002(ch__$1,p__$1,filter_GT___$1,meta49003));
});
}
return (new cljs.core.async.t49002(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22972__auto___49093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22972__auto___49093,out){
return (function (){var f__22973__auto__ = (function (){var switch__22957__auto__ = ((function (c__22972__auto___49093,out){
return (function (state_49071){var state_val_49072 = (state_49071[(1)]);if((state_val_49072 === (7)))
{var inst_49067 = (state_49071[(2)]);var state_49071__$1 = state_49071;var statearr_49073_49094 = state_49071__$1;(statearr_49073_49094[(2)] = inst_49067);
(statearr_49073_49094[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49072 === (1)))
{var state_49071__$1 = state_49071;var statearr_49074_49095 = state_49071__$1;(statearr_49074_49095[(2)] = null);
(statearr_49074_49095[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49072 === (4)))
{var inst_49053 = (state_49071[(7)]);var inst_49053__$1 = (state_49071[(2)]);var inst_49054 = (inst_49053__$1 == null);var state_49071__$1 = (function (){var statearr_49075 = state_49071;(statearr_49075[(7)] = inst_49053__$1);
return statearr_49075;
})();if(cljs.core.truth_(inst_49054))
{var statearr_49076_49096 = state_49071__$1;(statearr_49076_49096[(1)] = (5));
} else
{var statearr_49077_49097 = state_49071__$1;(statearr_49077_49097[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49072 === (6)))
{var inst_49053 = (state_49071[(7)]);var inst_49058 = (function (){var G__49078 = inst_49053;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__49078) : p.call(null,G__49078));
})();var state_49071__$1 = state_49071;if(cljs.core.truth_(inst_49058))
{var statearr_49079_49098 = state_49071__$1;(statearr_49079_49098[(1)] = (8));
} else
{var statearr_49080_49099 = state_49071__$1;(statearr_49080_49099[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49072 === (3)))
{var inst_49069 = (state_49071[(2)]);var state_49071__$1 = state_49071;return cljs.core.async.impl.ioc_helpers.return_chan(state_49071__$1,inst_49069);
} else
{if((state_val_49072 === (2)))
{var state_49071__$1 = state_49071;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49071__$1,(4),ch);
} else
{if((state_val_49072 === (11)))
{var inst_49061 = (state_49071[(2)]);var state_49071__$1 = state_49071;var statearr_49081_49100 = state_49071__$1;(statearr_49081_49100[(2)] = inst_49061);
(statearr_49081_49100[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49072 === (9)))
{var state_49071__$1 = state_49071;var statearr_49082_49101 = state_49071__$1;(statearr_49082_49101[(2)] = null);
(statearr_49082_49101[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49072 === (5)))
{var inst_49056 = cljs.core.async.close_BANG_(out);var state_49071__$1 = state_49071;var statearr_49083_49102 = state_49071__$1;(statearr_49083_49102[(2)] = inst_49056);
(statearr_49083_49102[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49072 === (10)))
{var inst_49064 = (state_49071[(2)]);var state_49071__$1 = (function (){var statearr_49084 = state_49071;(statearr_49084[(8)] = inst_49064);
return statearr_49084;
})();var statearr_49085_49103 = state_49071__$1;(statearr_49085_49103[(2)] = null);
(statearr_49085_49103[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49072 === (8)))
{var inst_49053 = (state_49071[(7)]);var state_49071__$1 = state_49071;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49071__$1,(11),out,inst_49053);
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
});})(c__22972__auto___49093,out))
;return ((function (switch__22957__auto__,c__22972__auto___49093,out){
return (function() {
var state_machine__22958__auto__ = null;
var state_machine__22958__auto____0 = (function (){var statearr_49089 = [null,null,null,null,null,null,null,null,null];(statearr_49089[(0)] = state_machine__22958__auto__);
(statearr_49089[(1)] = (1));
return statearr_49089;
});
var state_machine__22958__auto____1 = (function (state_49071){while(true){
var ret_value__22959__auto__ = (function (){try{while(true){
var result__22960__auto__ = switch__22957__auto__(state_49071);if(cljs.core.keyword_identical_QMARK_(result__22960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22960__auto__;
}
break;
}
}catch (e49090){if((e49090 instanceof Object))
{var ex__22961__auto__ = e49090;var statearr_49091_49104 = state_49071;(statearr_49091_49104[(5)] = ex__22961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49071);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e49090;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49105 = state_49071;
state_49071 = G__49105;
continue;
}
} else
{return ret_value__22959__auto__;
}
break;
}
});
state_machine__22958__auto__ = function(state_49071){
switch(arguments.length){
case 0:
return state_machine__22958__auto____0.call(this);
case 1:
return state_machine__22958__auto____1.call(this,state_49071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22958__auto____0;
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22958__auto____1;
return state_machine__22958__auto__;
})()
;})(switch__22957__auto__,c__22972__auto___49093,out))
})();var state__22974__auto__ = (function (){var statearr_49092 = (function (){return (f__22973__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22973__auto__.cljs$core$IFn$_invoke$arity$0() : f__22973__auto__.call(null));
})();(statearr_49092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22972__auto___49093);
return statearr_49092;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22974__auto__);
});})(c__22972__auto___49093,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__22972__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22972__auto__){
return (function (){var f__22973__auto__ = (function (){var switch__22957__auto__ = ((function (c__22972__auto__){
return (function (state_49261){var state_val_49262 = (state_49261[(1)]);if((state_val_49262 === (7)))
{var inst_49257 = (state_49261[(2)]);var state_49261__$1 = state_49261;var statearr_49263_49301 = state_49261__$1;(statearr_49263_49301[(2)] = inst_49257);
(statearr_49263_49301[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49262 === (20)))
{var inst_49232 = (state_49261[(7)]);var inst_49243 = (state_49261[(2)]);var inst_49244 = cljs.core.next(inst_49232);var inst_49218 = inst_49244;var inst_49219 = null;var inst_49220 = (0);var inst_49221 = (0);var state_49261__$1 = (function (){var statearr_49264 = state_49261;(statearr_49264[(8)] = inst_49243);
(statearr_49264[(9)] = inst_49218);
(statearr_49264[(10)] = inst_49220);
(statearr_49264[(11)] = inst_49221);
(statearr_49264[(12)] = inst_49219);
return statearr_49264;
})();var statearr_49265_49302 = state_49261__$1;(statearr_49265_49302[(2)] = null);
(statearr_49265_49302[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49262 === (1)))
{var state_49261__$1 = state_49261;var statearr_49266_49303 = state_49261__$1;(statearr_49266_49303[(2)] = null);
(statearr_49266_49303[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49262 === (4)))
{var inst_49207 = (state_49261[(13)]);var inst_49207__$1 = (state_49261[(2)]);var inst_49208 = (inst_49207__$1 == null);var state_49261__$1 = (function (){var statearr_49270 = state_49261;(statearr_49270[(13)] = inst_49207__$1);
return statearr_49270;
})();if(cljs.core.truth_(inst_49208))
{var statearr_49271_49304 = state_49261__$1;(statearr_49271_49304[(1)] = (5));
} else
{var statearr_49272_49305 = state_49261__$1;(statearr_49272_49305[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49262 === (15)))
{var state_49261__$1 = state_49261;var statearr_49273_49306 = state_49261__$1;(statearr_49273_49306[(2)] = null);
(statearr_49273_49306[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49262 === (13)))
{var inst_49218 = (state_49261[(9)]);var inst_49220 = (state_49261[(10)]);var inst_49221 = (state_49261[(11)]);var inst_49219 = (state_49261[(12)]);var inst_49228 = (state_49261[(2)]);var inst_49229 = (inst_49221 + (1));var tmp49267 = inst_49218;var tmp49268 = inst_49220;var tmp49269 = inst_49219;var inst_49218__$1 = tmp49267;var inst_49219__$1 = tmp49269;var inst_49220__$1 = tmp49268;var inst_49221__$1 = inst_49229;var state_49261__$1 = (function (){var statearr_49274 = state_49261;(statearr_49274[(9)] = inst_49218__$1);
(statearr_49274[(10)] = inst_49220__$1);
(statearr_49274[(11)] = inst_49221__$1);
(statearr_49274[(14)] = inst_49228);
(statearr_49274[(12)] = inst_49219__$1);
return statearr_49274;
})();var statearr_49275_49307 = state_49261__$1;(statearr_49275_49307[(2)] = null);
(statearr_49275_49307[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49262 === (6)))
{var inst_49207 = (state_49261[(13)]);var inst_49212 = (function (){var G__49276 = inst_49207;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__49276) : f.call(null,G__49276));
})();var inst_49217 = cljs.core.seq(inst_49212);var inst_49218 = inst_49217;var inst_49219 = null;var inst_49220 = (0);var inst_49221 = (0);var state_49261__$1 = (function (){var statearr_49277 = state_49261;(statearr_49277[(9)] = inst_49218);
(statearr_49277[(10)] = inst_49220);
(statearr_49277[(11)] = inst_49221);
(statearr_49277[(12)] = inst_49219);
return statearr_49277;
})();var statearr_49278_49308 = state_49261__$1;(statearr_49278_49308[(2)] = null);
(statearr_49278_49308[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49262 === (17)))
{var inst_49232 = (state_49261[(7)]);var inst_49236 = cljs.core.chunk_first(inst_49232);var inst_49237 = cljs.core.chunk_rest(inst_49232);var inst_49238 = cljs.core.count(inst_49236);var inst_49218 = inst_49237;var inst_49219 = inst_49236;var inst_49220 = inst_49238;var inst_49221 = (0);var state_49261__$1 = (function (){var statearr_49279 = state_49261;(statearr_49279[(9)] = inst_49218);
(statearr_49279[(10)] = inst_49220);
(statearr_49279[(11)] = inst_49221);
(statearr_49279[(12)] = inst_49219);
return statearr_49279;
})();var statearr_49280_49309 = state_49261__$1;(statearr_49280_49309[(2)] = null);
(statearr_49280_49309[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49262 === (3)))
{var inst_49259 = (state_49261[(2)]);var state_49261__$1 = state_49261;return cljs.core.async.impl.ioc_helpers.return_chan(state_49261__$1,inst_49259);
} else
{if((state_val_49262 === (12)))
{var inst_49252 = (state_49261[(2)]);var state_49261__$1 = state_49261;var statearr_49281_49310 = state_49261__$1;(statearr_49281_49310[(2)] = inst_49252);
(statearr_49281_49310[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49262 === (2)))
{var state_49261__$1 = state_49261;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49261__$1,(4),in$);
} else
{if((state_val_49262 === (19)))
{var inst_49247 = (state_49261[(2)]);var state_49261__$1 = state_49261;var statearr_49282_49311 = state_49261__$1;(statearr_49282_49311[(2)] = inst_49247);
(statearr_49282_49311[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49262 === (11)))
{var inst_49218 = (state_49261[(9)]);var inst_49232 = (state_49261[(7)]);var inst_49232__$1 = cljs.core.seq(inst_49218);var state_49261__$1 = (function (){var statearr_49283 = state_49261;(statearr_49283[(7)] = inst_49232__$1);
return statearr_49283;
})();if(inst_49232__$1)
{var statearr_49284_49312 = state_49261__$1;(statearr_49284_49312[(1)] = (14));
} else
{var statearr_49285_49313 = state_49261__$1;(statearr_49285_49313[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49262 === (9)))
{var inst_49254 = (state_49261[(2)]);var state_49261__$1 = (function (){var statearr_49286 = state_49261;(statearr_49286[(15)] = inst_49254);
return statearr_49286;
})();var statearr_49287_49314 = state_49261__$1;(statearr_49287_49314[(2)] = null);
(statearr_49287_49314[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49262 === (5)))
{var inst_49210 = cljs.core.async.close_BANG_(out);var state_49261__$1 = state_49261;var statearr_49288_49315 = state_49261__$1;(statearr_49288_49315[(2)] = inst_49210);
(statearr_49288_49315[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49262 === (14)))
{var inst_49232 = (state_49261[(7)]);var inst_49234 = cljs.core.chunked_seq_QMARK_(inst_49232);var state_49261__$1 = state_49261;if(inst_49234)
{var statearr_49289_49316 = state_49261__$1;(statearr_49289_49316[(1)] = (17));
} else
{var statearr_49290_49317 = state_49261__$1;(statearr_49290_49317[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49262 === (16)))
{var inst_49250 = (state_49261[(2)]);var state_49261__$1 = state_49261;var statearr_49291_49318 = state_49261__$1;(statearr_49291_49318[(2)] = inst_49250);
(statearr_49291_49318[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49262 === (10)))
{var inst_49221 = (state_49261[(11)]);var inst_49219 = (state_49261[(12)]);var inst_49226 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_49219,inst_49221);var state_49261__$1 = state_49261;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49261__$1,(13),out,inst_49226);
} else
{if((state_val_49262 === (18)))
{var inst_49232 = (state_49261[(7)]);var inst_49241 = cljs.core.first(inst_49232);var state_49261__$1 = state_49261;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49261__$1,(20),out,inst_49241);
} else
{if((state_val_49262 === (8)))
{var inst_49220 = (state_49261[(10)]);var inst_49221 = (state_49261[(11)]);var inst_49223 = (inst_49221 < inst_49220);var inst_49224 = inst_49223;var state_49261__$1 = state_49261;if(cljs.core.truth_(inst_49224))
{var statearr_49292_49319 = state_49261__$1;(statearr_49292_49319[(1)] = (10));
} else
{var statearr_49293_49320 = state_49261__$1;(statearr_49293_49320[(1)] = (11));
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
});})(c__22972__auto__))
;return ((function (switch__22957__auto__,c__22972__auto__){
return (function() {
var state_machine__22958__auto__ = null;
var state_machine__22958__auto____0 = (function (){var statearr_49297 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49297[(0)] = state_machine__22958__auto__);
(statearr_49297[(1)] = (1));
return statearr_49297;
});
var state_machine__22958__auto____1 = (function (state_49261){while(true){
var ret_value__22959__auto__ = (function (){try{while(true){
var result__22960__auto__ = switch__22957__auto__(state_49261);if(cljs.core.keyword_identical_QMARK_(result__22960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22960__auto__;
}
break;
}
}catch (e49298){if((e49298 instanceof Object))
{var ex__22961__auto__ = e49298;var statearr_49299_49321 = state_49261;(statearr_49299_49321[(5)] = ex__22961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49261);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e49298;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49322 = state_49261;
state_49261 = G__49322;
continue;
}
} else
{return ret_value__22959__auto__;
}
break;
}
});
state_machine__22958__auto__ = function(state_49261){
switch(arguments.length){
case 0:
return state_machine__22958__auto____0.call(this);
case 1:
return state_machine__22958__auto____1.call(this,state_49261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22958__auto____0;
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22958__auto____1;
return state_machine__22958__auto__;
})()
;})(switch__22957__auto__,c__22972__auto__))
})();var state__22974__auto__ = (function (){var statearr_49300 = (function (){return (f__22973__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22973__auto__.cljs$core$IFn$_invoke$arity$0() : f__22973__auto__.call(null));
})();(statearr_49300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22972__auto__);
return statearr_49300;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22974__auto__);
});})(c__22972__auto__))
);
return c__22972__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__22972__auto___49412 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22972__auto___49412){
return (function (){var f__22973__auto__ = (function (){var switch__22957__auto__ = ((function (c__22972__auto___49412){
return (function (state_49391){var state_val_49392 = (state_49391[(1)]);if((state_val_49392 === (7)))
{var inst_49387 = (state_49391[(2)]);var state_49391__$1 = state_49391;var statearr_49393_49413 = state_49391__$1;(statearr_49393_49413[(2)] = inst_49387);
(statearr_49393_49413[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49392 === (1)))
{var state_49391__$1 = state_49391;var statearr_49394_49414 = state_49391__$1;(statearr_49394_49414[(2)] = null);
(statearr_49394_49414[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49392 === (4)))
{var inst_49374 = (state_49391[(7)]);var inst_49374__$1 = (state_49391[(2)]);var inst_49375 = (inst_49374__$1 == null);var state_49391__$1 = (function (){var statearr_49395 = state_49391;(statearr_49395[(7)] = inst_49374__$1);
return statearr_49395;
})();if(cljs.core.truth_(inst_49375))
{var statearr_49396_49415 = state_49391__$1;(statearr_49396_49415[(1)] = (5));
} else
{var statearr_49397_49416 = state_49391__$1;(statearr_49397_49416[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49392 === (6)))
{var inst_49374 = (state_49391[(7)]);var state_49391__$1 = state_49391;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49391__$1,(11),to,inst_49374);
} else
{if((state_val_49392 === (3)))
{var inst_49389 = (state_49391[(2)]);var state_49391__$1 = state_49391;return cljs.core.async.impl.ioc_helpers.return_chan(state_49391__$1,inst_49389);
} else
{if((state_val_49392 === (2)))
{var state_49391__$1 = state_49391;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49391__$1,(4),from);
} else
{if((state_val_49392 === (11)))
{var inst_49384 = (state_49391[(2)]);var state_49391__$1 = (function (){var statearr_49398 = state_49391;(statearr_49398[(8)] = inst_49384);
return statearr_49398;
})();var statearr_49399_49417 = state_49391__$1;(statearr_49399_49417[(2)] = null);
(statearr_49399_49417[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49392 === (9)))
{var state_49391__$1 = state_49391;var statearr_49400_49418 = state_49391__$1;(statearr_49400_49418[(2)] = null);
(statearr_49400_49418[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49392 === (5)))
{var state_49391__$1 = state_49391;if(cljs.core.truth_(close_QMARK_))
{var statearr_49401_49419 = state_49391__$1;(statearr_49401_49419[(1)] = (8));
} else
{var statearr_49402_49420 = state_49391__$1;(statearr_49402_49420[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49392 === (10)))
{var inst_49381 = (state_49391[(2)]);var state_49391__$1 = state_49391;var statearr_49403_49421 = state_49391__$1;(statearr_49403_49421[(2)] = inst_49381);
(statearr_49403_49421[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49392 === (8)))
{var inst_49378 = cljs.core.async.close_BANG_(to);var state_49391__$1 = state_49391;var statearr_49404_49422 = state_49391__$1;(statearr_49404_49422[(2)] = inst_49378);
(statearr_49404_49422[(1)] = (10));
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
});})(c__22972__auto___49412))
;return ((function (switch__22957__auto__,c__22972__auto___49412){
return (function() {
var state_machine__22958__auto__ = null;
var state_machine__22958__auto____0 = (function (){var statearr_49408 = [null,null,null,null,null,null,null,null,null];(statearr_49408[(0)] = state_machine__22958__auto__);
(statearr_49408[(1)] = (1));
return statearr_49408;
});
var state_machine__22958__auto____1 = (function (state_49391){while(true){
var ret_value__22959__auto__ = (function (){try{while(true){
var result__22960__auto__ = switch__22957__auto__(state_49391);if(cljs.core.keyword_identical_QMARK_(result__22960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22960__auto__;
}
break;
}
}catch (e49409){if((e49409 instanceof Object))
{var ex__22961__auto__ = e49409;var statearr_49410_49423 = state_49391;(statearr_49410_49423[(5)] = ex__22961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49391);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e49409;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49424 = state_49391;
state_49391 = G__49424;
continue;
}
} else
{return ret_value__22959__auto__;
}
break;
}
});
state_machine__22958__auto__ = function(state_49391){
switch(arguments.length){
case 0:
return state_machine__22958__auto____0.call(this);
case 1:
return state_machine__22958__auto____1.call(this,state_49391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22958__auto____0;
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22958__auto____1;
return state_machine__22958__auto__;
})()
;})(switch__22957__auto__,c__22972__auto___49412))
})();var state__22974__auto__ = (function (){var statearr_49411 = (function (){return (f__22973__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22973__auto__.cljs$core$IFn$_invoke$arity$0() : f__22973__auto__.call(null));
})();(statearr_49411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22972__auto___49412);
return statearr_49411;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22974__auto__);
});})(c__22972__auto___49412))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__22972__auto___49517 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22972__auto___49517,tc,fc){
return (function (){var f__22973__auto__ = (function (){var switch__22957__auto__ = ((function (c__22972__auto___49517,tc,fc){
return (function (state_49494){var state_val_49495 = (state_49494[(1)]);if((state_val_49495 === (7)))
{var inst_49490 = (state_49494[(2)]);var state_49494__$1 = state_49494;var statearr_49496_49518 = state_49494__$1;(statearr_49496_49518[(2)] = inst_49490);
(statearr_49496_49518[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49495 === (1)))
{var state_49494__$1 = state_49494;var statearr_49497_49519 = state_49494__$1;(statearr_49497_49519[(2)] = null);
(statearr_49497_49519[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49495 === (4)))
{var inst_49475 = (state_49494[(7)]);var inst_49475__$1 = (state_49494[(2)]);var inst_49476 = (inst_49475__$1 == null);var state_49494__$1 = (function (){var statearr_49498 = state_49494;(statearr_49498[(7)] = inst_49475__$1);
return statearr_49498;
})();if(cljs.core.truth_(inst_49476))
{var statearr_49499_49520 = state_49494__$1;(statearr_49499_49520[(1)] = (5));
} else
{var statearr_49500_49521 = state_49494__$1;(statearr_49500_49521[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49495 === (6)))
{var inst_49475 = (state_49494[(7)]);var inst_49481 = (function (){var G__49501 = inst_49475;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__49501) : p.call(null,G__49501));
})();var state_49494__$1 = state_49494;if(cljs.core.truth_(inst_49481))
{var statearr_49502_49522 = state_49494__$1;(statearr_49502_49522[(1)] = (9));
} else
{var statearr_49503_49523 = state_49494__$1;(statearr_49503_49523[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49495 === (3)))
{var inst_49492 = (state_49494[(2)]);var state_49494__$1 = state_49494;return cljs.core.async.impl.ioc_helpers.return_chan(state_49494__$1,inst_49492);
} else
{if((state_val_49495 === (2)))
{var state_49494__$1 = state_49494;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49494__$1,(4),ch);
} else
{if((state_val_49495 === (11)))
{var inst_49475 = (state_49494[(7)]);var inst_49485 = (state_49494[(2)]);var state_49494__$1 = state_49494;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49494__$1,(8),inst_49485,inst_49475);
} else
{if((state_val_49495 === (9)))
{var state_49494__$1 = state_49494;var statearr_49504_49524 = state_49494__$1;(statearr_49504_49524[(2)] = tc);
(statearr_49504_49524[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49495 === (5)))
{var inst_49478 = cljs.core.async.close_BANG_(tc);var inst_49479 = cljs.core.async.close_BANG_(fc);var state_49494__$1 = (function (){var statearr_49505 = state_49494;(statearr_49505[(8)] = inst_49478);
return statearr_49505;
})();var statearr_49506_49525 = state_49494__$1;(statearr_49506_49525[(2)] = inst_49479);
(statearr_49506_49525[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49495 === (10)))
{var state_49494__$1 = state_49494;var statearr_49507_49526 = state_49494__$1;(statearr_49507_49526[(2)] = fc);
(statearr_49507_49526[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49495 === (8)))
{var inst_49487 = (state_49494[(2)]);var state_49494__$1 = (function (){var statearr_49508 = state_49494;(statearr_49508[(9)] = inst_49487);
return statearr_49508;
})();var statearr_49509_49527 = state_49494__$1;(statearr_49509_49527[(2)] = null);
(statearr_49509_49527[(1)] = (2));
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
});})(c__22972__auto___49517,tc,fc))
;return ((function (switch__22957__auto__,c__22972__auto___49517,tc,fc){
return (function() {
var state_machine__22958__auto__ = null;
var state_machine__22958__auto____0 = (function (){var statearr_49513 = [null,null,null,null,null,null,null,null,null,null];(statearr_49513[(0)] = state_machine__22958__auto__);
(statearr_49513[(1)] = (1));
return statearr_49513;
});
var state_machine__22958__auto____1 = (function (state_49494){while(true){
var ret_value__22959__auto__ = (function (){try{while(true){
var result__22960__auto__ = switch__22957__auto__(state_49494);if(cljs.core.keyword_identical_QMARK_(result__22960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22960__auto__;
}
break;
}
}catch (e49514){if((e49514 instanceof Object))
{var ex__22961__auto__ = e49514;var statearr_49515_49528 = state_49494;(statearr_49515_49528[(5)] = ex__22961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49494);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e49514;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49529 = state_49494;
state_49494 = G__49529;
continue;
}
} else
{return ret_value__22959__auto__;
}
break;
}
});
state_machine__22958__auto__ = function(state_49494){
switch(arguments.length){
case 0:
return state_machine__22958__auto____0.call(this);
case 1:
return state_machine__22958__auto____1.call(this,state_49494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22958__auto____0;
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22958__auto____1;
return state_machine__22958__auto__;
})()
;})(switch__22957__auto__,c__22972__auto___49517,tc,fc))
})();var state__22974__auto__ = (function (){var statearr_49516 = (function (){return (f__22973__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22973__auto__.cljs$core$IFn$_invoke$arity$0() : f__22973__auto__.call(null));
})();(statearr_49516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22972__auto___49517);
return statearr_49516;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22974__auto__);
});})(c__22972__auto___49517,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__22972__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22972__auto__){
return (function (){var f__22973__auto__ = (function (){var switch__22957__auto__ = ((function (c__22972__auto__){
return (function (state_49578){var state_val_49579 = (state_49578[(1)]);if((state_val_49579 === (7)))
{var inst_49574 = (state_49578[(2)]);var state_49578__$1 = state_49578;var statearr_49580_49598 = state_49578__$1;(statearr_49580_49598[(2)] = inst_49574);
(statearr_49580_49598[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49579 === (6)))
{var inst_49567 = (state_49578[(7)]);var inst_49564 = (state_49578[(8)]);var inst_49571 = (function (){var G__49581 = inst_49564;var G__49582 = inst_49567;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__49581,G__49582) : f.call(null,G__49581,G__49582));
})();var inst_49564__$1 = inst_49571;var state_49578__$1 = (function (){var statearr_49583 = state_49578;(statearr_49583[(8)] = inst_49564__$1);
return statearr_49583;
})();var statearr_49584_49599 = state_49578__$1;(statearr_49584_49599[(2)] = null);
(statearr_49584_49599[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49579 === (5)))
{var inst_49564 = (state_49578[(8)]);var state_49578__$1 = state_49578;var statearr_49585_49600 = state_49578__$1;(statearr_49585_49600[(2)] = inst_49564);
(statearr_49585_49600[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49579 === (4)))
{var inst_49567 = (state_49578[(7)]);var inst_49567__$1 = (state_49578[(2)]);var inst_49568 = (inst_49567__$1 == null);var state_49578__$1 = (function (){var statearr_49586 = state_49578;(statearr_49586[(7)] = inst_49567__$1);
return statearr_49586;
})();if(cljs.core.truth_(inst_49568))
{var statearr_49587_49601 = state_49578__$1;(statearr_49587_49601[(1)] = (5));
} else
{var statearr_49588_49602 = state_49578__$1;(statearr_49588_49602[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49579 === (3)))
{var inst_49576 = (state_49578[(2)]);var state_49578__$1 = state_49578;return cljs.core.async.impl.ioc_helpers.return_chan(state_49578__$1,inst_49576);
} else
{if((state_val_49579 === (2)))
{var state_49578__$1 = state_49578;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49578__$1,(4),ch);
} else
{if((state_val_49579 === (1)))
{var inst_49564 = init;var state_49578__$1 = (function (){var statearr_49589 = state_49578;(statearr_49589[(8)] = inst_49564);
return statearr_49589;
})();var statearr_49590_49603 = state_49578__$1;(statearr_49590_49603[(2)] = null);
(statearr_49590_49603[(1)] = (2));
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
});})(c__22972__auto__))
;return ((function (switch__22957__auto__,c__22972__auto__){
return (function() {
var state_machine__22958__auto__ = null;
var state_machine__22958__auto____0 = (function (){var statearr_49594 = [null,null,null,null,null,null,null,null,null];(statearr_49594[(0)] = state_machine__22958__auto__);
(statearr_49594[(1)] = (1));
return statearr_49594;
});
var state_machine__22958__auto____1 = (function (state_49578){while(true){
var ret_value__22959__auto__ = (function (){try{while(true){
var result__22960__auto__ = switch__22957__auto__(state_49578);if(cljs.core.keyword_identical_QMARK_(result__22960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22960__auto__;
}
break;
}
}catch (e49595){if((e49595 instanceof Object))
{var ex__22961__auto__ = e49595;var statearr_49596_49604 = state_49578;(statearr_49596_49604[(5)] = ex__22961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49578);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e49595;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49605 = state_49578;
state_49578 = G__49605;
continue;
}
} else
{return ret_value__22959__auto__;
}
break;
}
});
state_machine__22958__auto__ = function(state_49578){
switch(arguments.length){
case 0:
return state_machine__22958__auto____0.call(this);
case 1:
return state_machine__22958__auto____1.call(this,state_49578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22958__auto____0;
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22958__auto____1;
return state_machine__22958__auto__;
})()
;})(switch__22957__auto__,c__22972__auto__))
})();var state__22974__auto__ = (function (){var statearr_49597 = (function (){return (f__22973__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22973__auto__.cljs$core$IFn$_invoke$arity$0() : f__22973__auto__.call(null));
})();(statearr_49597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22972__auto__);
return statearr_49597;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22974__auto__);
});})(c__22972__auto__))
);
return c__22972__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__22972__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22972__auto__){
return (function (){var f__22973__auto__ = (function (){var switch__22957__auto__ = ((function (c__22972__auto__){
return (function (state_49670){var state_val_49671 = (state_49670[(1)]);if((state_val_49671 === (7)))
{var inst_49651 = (state_49670[(7)]);var inst_49656 = (state_49670[(2)]);var inst_49657 = cljs.core.next(inst_49651);var inst_49651__$1 = inst_49657;var state_49670__$1 = (function (){var statearr_49672 = state_49670;(statearr_49672[(8)] = inst_49656);
(statearr_49672[(7)] = inst_49651__$1);
return statearr_49672;
})();var statearr_49673_49691 = state_49670__$1;(statearr_49673_49691[(2)] = null);
(statearr_49673_49691[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49671 === (1)))
{var inst_49650 = cljs.core.seq(coll);var inst_49651 = inst_49650;var state_49670__$1 = (function (){var statearr_49674 = state_49670;(statearr_49674[(7)] = inst_49651);
return statearr_49674;
})();var statearr_49675_49692 = state_49670__$1;(statearr_49675_49692[(2)] = null);
(statearr_49675_49692[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49671 === (4)))
{var inst_49651 = (state_49670[(7)]);var inst_49654 = cljs.core.first(inst_49651);var state_49670__$1 = state_49670;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49670__$1,(7),ch,inst_49654);
} else
{if((state_val_49671 === (6)))
{var inst_49666 = (state_49670[(2)]);var state_49670__$1 = state_49670;var statearr_49676_49693 = state_49670__$1;(statearr_49676_49693[(2)] = inst_49666);
(statearr_49676_49693[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49671 === (3)))
{var inst_49668 = (state_49670[(2)]);var state_49670__$1 = state_49670;return cljs.core.async.impl.ioc_helpers.return_chan(state_49670__$1,inst_49668);
} else
{if((state_val_49671 === (2)))
{var inst_49651 = (state_49670[(7)]);var state_49670__$1 = state_49670;if(cljs.core.truth_(inst_49651))
{var statearr_49677_49694 = state_49670__$1;(statearr_49677_49694[(1)] = (4));
} else
{var statearr_49678_49695 = state_49670__$1;(statearr_49678_49695[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49671 === (9)))
{var state_49670__$1 = state_49670;var statearr_49679_49696 = state_49670__$1;(statearr_49679_49696[(2)] = null);
(statearr_49679_49696[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49671 === (5)))
{var state_49670__$1 = state_49670;if(cljs.core.truth_(close_QMARK_))
{var statearr_49680_49697 = state_49670__$1;(statearr_49680_49697[(1)] = (8));
} else
{var statearr_49681_49698 = state_49670__$1;(statearr_49681_49698[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49671 === (10)))
{var inst_49664 = (state_49670[(2)]);var state_49670__$1 = state_49670;var statearr_49682_49699 = state_49670__$1;(statearr_49682_49699[(2)] = inst_49664);
(statearr_49682_49699[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49671 === (8)))
{var inst_49661 = cljs.core.async.close_BANG_(ch);var state_49670__$1 = state_49670;var statearr_49683_49700 = state_49670__$1;(statearr_49683_49700[(2)] = inst_49661);
(statearr_49683_49700[(1)] = (10));
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
});})(c__22972__auto__))
;return ((function (switch__22957__auto__,c__22972__auto__){
return (function() {
var state_machine__22958__auto__ = null;
var state_machine__22958__auto____0 = (function (){var statearr_49687 = [null,null,null,null,null,null,null,null,null];(statearr_49687[(0)] = state_machine__22958__auto__);
(statearr_49687[(1)] = (1));
return statearr_49687;
});
var state_machine__22958__auto____1 = (function (state_49670){while(true){
var ret_value__22959__auto__ = (function (){try{while(true){
var result__22960__auto__ = switch__22957__auto__(state_49670);if(cljs.core.keyword_identical_QMARK_(result__22960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22960__auto__;
}
break;
}
}catch (e49688){if((e49688 instanceof Object))
{var ex__22961__auto__ = e49688;var statearr_49689_49701 = state_49670;(statearr_49689_49701[(5)] = ex__22961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49670);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e49688;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49702 = state_49670;
state_49670 = G__49702;
continue;
}
} else
{return ret_value__22959__auto__;
}
break;
}
});
state_machine__22958__auto__ = function(state_49670){
switch(arguments.length){
case 0:
return state_machine__22958__auto____0.call(this);
case 1:
return state_machine__22958__auto____1.call(this,state_49670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22958__auto____0;
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22958__auto____1;
return state_machine__22958__auto__;
})()
;})(switch__22957__auto__,c__22972__auto__))
})();var state__22974__auto__ = (function (){var statearr_49690 = (function (){return (f__22973__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22973__auto__.cljs$core$IFn$_invoke$arity$0() : f__22973__auto__.call(null));
})();(statearr_49690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22972__auto__);
return statearr_49690;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22974__auto__);
});})(c__22972__auto__))
);
return c__22972__auto__;
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
cljs.core.async.Mux = (function (){var obj49704 = {};return obj49704;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__19564__auto__ = _;if(and__19564__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__19564__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__20812__auto__ = (((_ == null))?null:_);return (function (){var or__19586__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__49708 = x__20812__auto__;return goog.typeOf(G__49708);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj49710 = {};return obj49710;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__19564__auto__ = m;if(and__19564__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__19564__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__20812__auto__ = (((m == null))?null:m);return (function (){var or__19586__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__49714 = x__20812__auto__;return goog.typeOf(G__49714);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__19564__auto__ = m;if(and__19564__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__19564__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__20812__auto__ = (((m == null))?null:m);return (function (){var or__19586__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__49718 = x__20812__auto__;return goog.typeOf(G__49718);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__19564__auto__ = m;if(and__19564__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__19564__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__20812__auto__ = (((m == null))?null:m);return (function (){var or__19586__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__49722 = x__20812__auto__;return goog.typeOf(G__49722);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__49954 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__49954) : cljs.core.atom.call(null,G__49954));
})();var m = (function (){if(typeof cljs.core.async.t49955 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49955 = (function (cs,ch,mult,meta49956){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta49956 = meta49956;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49955.cljs$lang$type = true;
cljs.core.async.t49955.cljs$lang$ctorStr = "cljs.core.async/t49955";
cljs.core.async.t49955.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core.async/t49955");
});})(cs))
;
cljs.core.async.t49955.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t49955.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t49955.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t49955.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__49958_50185 = self__.cs;var G__49959_50186 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__49958_50185,G__49959_50186) : cljs.core.reset_BANG_.call(null,G__49958_50185,G__49959_50186));
return null;
});})(cs))
;
cljs.core.async.t49955.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t49955.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t49955.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_49957){var self__ = this;
var _49957__$1 = this;return self__.meta49956;
});})(cs))
;
cljs.core.async.t49955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_49957,meta49956__$1){var self__ = this;
var _49957__$1 = this;return (new cljs.core.async.t49955(self__.cs,self__.ch,self__.mult,meta49956__$1));
});})(cs))
;
cljs.core.async.__GT_t49955 = ((function (cs){
return (function __GT_t49955(cs__$1,ch__$1,mult__$1,meta49956){return (new cljs.core.async.t49955(cs__$1,ch__$1,mult__$1,meta49956));
});})(cs))
;
}
return (new cljs.core.async.t49955(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__49960 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__49960) : cljs.core.atom.call(null,G__49960));
})();var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__22972__auto___50187 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22972__auto___50187,cs,m,dchan,dctr,done){
return (function (){var f__22973__auto__ = (function (){var switch__22957__auto__ = ((function (c__22972__auto___50187,cs,m,dchan,dctr,done){
return (function (state_50095){var state_val_50096 = (state_50095[(1)]);if((state_val_50096 === (7)))
{var inst_50091 = (state_50095[(2)]);var state_50095__$1 = state_50095;var statearr_50097_50188 = state_50095__$1;(statearr_50097_50188[(2)] = inst_50091);
(statearr_50097_50188[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (20)))
{var inst_49992 = (state_50095[(7)]);var inst_50002 = cljs.core.first(inst_49992);var inst_50003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50002,(0),null);var inst_50004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50002,(1),null);var state_50095__$1 = (function (){var statearr_50098 = state_50095;(statearr_50098[(8)] = inst_50003);
return statearr_50098;
})();if(cljs.core.truth_(inst_50004))
{var statearr_50099_50189 = state_50095__$1;(statearr_50099_50189[(1)] = (22));
} else
{var statearr_50100_50190 = state_50095__$1;(statearr_50100_50190[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (27)))
{var inst_50034 = (state_50095[(9)]);var inst_50032 = (state_50095[(10)]);var inst_50039 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_50032,inst_50034);var state_50095__$1 = (function (){var statearr_50101 = state_50095;(statearr_50101[(11)] = inst_50039);
return statearr_50101;
})();var statearr_50102_50191 = state_50095__$1;(statearr_50102_50191[(2)] = null);
(statearr_50102_50191[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (1)))
{var state_50095__$1 = state_50095;var statearr_50103_50192 = state_50095__$1;(statearr_50103_50192[(2)] = null);
(statearr_50103_50192[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (24)))
{var inst_49992 = (state_50095[(7)]);var inst_50009 = (state_50095[(2)]);var inst_50010 = cljs.core.next(inst_49992);var inst_49972 = inst_50010;var inst_49973 = null;var inst_49974 = (0);var inst_49975 = (0);var state_50095__$1 = (function (){var statearr_50104 = state_50095;(statearr_50104[(12)] = inst_49973);
(statearr_50104[(13)] = inst_49974);
(statearr_50104[(14)] = inst_50009);
(statearr_50104[(15)] = inst_49975);
(statearr_50104[(16)] = inst_49972);
return statearr_50104;
})();var statearr_50105_50193 = state_50095__$1;(statearr_50105_50193[(2)] = null);
(statearr_50105_50193[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (39)))
{var inst_50052 = (state_50095[(17)]);var inst_50070 = (state_50095[(2)]);var inst_50071 = cljs.core.next(inst_50052);var inst_50031 = inst_50071;var inst_50032 = null;var inst_50033 = (0);var inst_50034 = (0);var state_50095__$1 = (function (){var statearr_50109 = state_50095;(statearr_50109[(18)] = inst_50070);
(statearr_50109[(19)] = inst_50033);
(statearr_50109[(9)] = inst_50034);
(statearr_50109[(10)] = inst_50032);
(statearr_50109[(20)] = inst_50031);
return statearr_50109;
})();var statearr_50110_50194 = state_50095__$1;(statearr_50110_50194[(2)] = null);
(statearr_50110_50194[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (4)))
{var inst_49963 = (state_50095[(21)]);var inst_49963__$1 = (state_50095[(2)]);var inst_49964 = (inst_49963__$1 == null);var state_50095__$1 = (function (){var statearr_50111 = state_50095;(statearr_50111[(21)] = inst_49963__$1);
return statearr_50111;
})();if(cljs.core.truth_(inst_49964))
{var statearr_50112_50195 = state_50095__$1;(statearr_50112_50195[(1)] = (5));
} else
{var statearr_50113_50196 = state_50095__$1;(statearr_50113_50196[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (15)))
{var inst_49973 = (state_50095[(12)]);var inst_49974 = (state_50095[(13)]);var inst_49975 = (state_50095[(15)]);var inst_49972 = (state_50095[(16)]);var inst_49988 = (state_50095[(2)]);var inst_49989 = (inst_49975 + (1));var tmp50106 = inst_49973;var tmp50107 = inst_49974;var tmp50108 = inst_49972;var inst_49972__$1 = tmp50108;var inst_49973__$1 = tmp50106;var inst_49974__$1 = tmp50107;var inst_49975__$1 = inst_49989;var state_50095__$1 = (function (){var statearr_50114 = state_50095;(statearr_50114[(12)] = inst_49973__$1);
(statearr_50114[(13)] = inst_49974__$1);
(statearr_50114[(22)] = inst_49988);
(statearr_50114[(15)] = inst_49975__$1);
(statearr_50114[(16)] = inst_49972__$1);
return statearr_50114;
})();var statearr_50115_50197 = state_50095__$1;(statearr_50115_50197[(2)] = null);
(statearr_50115_50197[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (21)))
{var inst_50013 = (state_50095[(2)]);var state_50095__$1 = state_50095;var statearr_50116_50198 = state_50095__$1;(statearr_50116_50198[(2)] = inst_50013);
(statearr_50116_50198[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (31)))
{var inst_50039 = (state_50095[(11)]);var inst_50040 = (state_50095[(2)]);var inst_50041 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_50042 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50039);var state_50095__$1 = (function (){var statearr_50117 = state_50095;(statearr_50117[(23)] = inst_50041);
(statearr_50117[(24)] = inst_50040);
return statearr_50117;
})();var statearr_50118_50199 = state_50095__$1;(statearr_50118_50199[(2)] = inst_50042);
cljs.core.async.impl.ioc_helpers.process_exception(state_50095__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (32)))
{var inst_50039 = (state_50095[(11)]);var inst_49963 = (state_50095[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50095,(31),Object,null,(30));var inst_50046 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50039,inst_49963,done);var state_50095__$1 = state_50095;var statearr_50119_50200 = state_50095__$1;(statearr_50119_50200[(2)] = inst_50046);
cljs.core.async.impl.ioc_helpers.process_exception(state_50095__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (40)))
{var inst_50061 = (state_50095[(25)]);var inst_50062 = (state_50095[(2)]);var inst_50063 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_50064 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50061);var state_50095__$1 = (function (){var statearr_50120 = state_50095;(statearr_50120[(26)] = inst_50063);
(statearr_50120[(27)] = inst_50062);
return statearr_50120;
})();var statearr_50121_50201 = state_50095__$1;(statearr_50121_50201[(2)] = inst_50064);
cljs.core.async.impl.ioc_helpers.process_exception(state_50095__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (33)))
{var inst_50052 = (state_50095[(17)]);var inst_50054 = cljs.core.chunked_seq_QMARK_(inst_50052);var state_50095__$1 = state_50095;if(inst_50054)
{var statearr_50122_50202 = state_50095__$1;(statearr_50122_50202[(1)] = (36));
} else
{var statearr_50123_50203 = state_50095__$1;(statearr_50123_50203[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (13)))
{var inst_49982 = (state_50095[(28)]);var inst_49985 = cljs.core.async.close_BANG_(inst_49982);var state_50095__$1 = state_50095;var statearr_50124_50204 = state_50095__$1;(statearr_50124_50204[(2)] = inst_49985);
(statearr_50124_50204[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (22)))
{var inst_50003 = (state_50095[(8)]);var inst_50006 = cljs.core.async.close_BANG_(inst_50003);var state_50095__$1 = state_50095;var statearr_50125_50205 = state_50095__$1;(statearr_50125_50205[(2)] = inst_50006);
(statearr_50125_50205[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (36)))
{var inst_50052 = (state_50095[(17)]);var inst_50056 = cljs.core.chunk_first(inst_50052);var inst_50057 = cljs.core.chunk_rest(inst_50052);var inst_50058 = cljs.core.count(inst_50056);var inst_50031 = inst_50057;var inst_50032 = inst_50056;var inst_50033 = inst_50058;var inst_50034 = (0);var state_50095__$1 = (function (){var statearr_50126 = state_50095;(statearr_50126[(19)] = inst_50033);
(statearr_50126[(9)] = inst_50034);
(statearr_50126[(10)] = inst_50032);
(statearr_50126[(20)] = inst_50031);
return statearr_50126;
})();var statearr_50127_50206 = state_50095__$1;(statearr_50127_50206[(2)] = null);
(statearr_50127_50206[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (41)))
{var inst_50061 = (state_50095[(25)]);var inst_49963 = (state_50095[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50095,(40),Object,null,(39));var inst_50068 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50061,inst_49963,done);var state_50095__$1 = state_50095;var statearr_50128_50207 = state_50095__$1;(statearr_50128_50207[(2)] = inst_50068);
cljs.core.async.impl.ioc_helpers.process_exception(state_50095__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (43)))
{var state_50095__$1 = state_50095;var statearr_50129_50208 = state_50095__$1;(statearr_50129_50208[(2)] = null);
(statearr_50129_50208[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (29)))
{var inst_50079 = (state_50095[(2)]);var state_50095__$1 = state_50095;var statearr_50130_50209 = state_50095__$1;(statearr_50130_50209[(2)] = inst_50079);
(statearr_50130_50209[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (44)))
{var inst_50088 = (state_50095[(2)]);var state_50095__$1 = (function (){var statearr_50131 = state_50095;(statearr_50131[(29)] = inst_50088);
return statearr_50131;
})();var statearr_50132_50210 = state_50095__$1;(statearr_50132_50210[(2)] = null);
(statearr_50132_50210[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (6)))
{var inst_50023 = (state_50095[(30)]);var inst_50022 = (function (){var G__50133 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50133) : cljs.core.deref.call(null,G__50133));
})();var inst_50023__$1 = cljs.core.keys(inst_50022);var inst_50024 = cljs.core.count(inst_50023__$1);var inst_50025 = (function (){var G__50134 = dctr;var G__50135 = inst_50024;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__50134,G__50135) : cljs.core.reset_BANG_.call(null,G__50134,G__50135));
})();var inst_50030 = cljs.core.seq(inst_50023__$1);var inst_50031 = inst_50030;var inst_50032 = null;var inst_50033 = (0);var inst_50034 = (0);var state_50095__$1 = (function (){var statearr_50136 = state_50095;(statearr_50136[(31)] = inst_50025);
(statearr_50136[(19)] = inst_50033);
(statearr_50136[(9)] = inst_50034);
(statearr_50136[(10)] = inst_50032);
(statearr_50136[(20)] = inst_50031);
(statearr_50136[(30)] = inst_50023__$1);
return statearr_50136;
})();var statearr_50137_50211 = state_50095__$1;(statearr_50137_50211[(2)] = null);
(statearr_50137_50211[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (28)))
{var inst_50031 = (state_50095[(20)]);var inst_50052 = (state_50095[(17)]);var inst_50052__$1 = cljs.core.seq(inst_50031);var state_50095__$1 = (function (){var statearr_50138 = state_50095;(statearr_50138[(17)] = inst_50052__$1);
return statearr_50138;
})();if(inst_50052__$1)
{var statearr_50139_50212 = state_50095__$1;(statearr_50139_50212[(1)] = (33));
} else
{var statearr_50140_50213 = state_50095__$1;(statearr_50140_50213[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (25)))
{var inst_50033 = (state_50095[(19)]);var inst_50034 = (state_50095[(9)]);var inst_50036 = (inst_50034 < inst_50033);var inst_50037 = inst_50036;var state_50095__$1 = state_50095;if(cljs.core.truth_(inst_50037))
{var statearr_50141_50214 = state_50095__$1;(statearr_50141_50214[(1)] = (27));
} else
{var statearr_50142_50215 = state_50095__$1;(statearr_50142_50215[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (34)))
{var state_50095__$1 = state_50095;var statearr_50143_50216 = state_50095__$1;(statearr_50143_50216[(2)] = null);
(statearr_50143_50216[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (17)))
{var state_50095__$1 = state_50095;var statearr_50144_50217 = state_50095__$1;(statearr_50144_50217[(2)] = null);
(statearr_50144_50217[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (3)))
{var inst_50093 = (state_50095[(2)]);var state_50095__$1 = state_50095;return cljs.core.async.impl.ioc_helpers.return_chan(state_50095__$1,inst_50093);
} else
{if((state_val_50096 === (12)))
{var inst_50018 = (state_50095[(2)]);var state_50095__$1 = state_50095;var statearr_50145_50218 = state_50095__$1;(statearr_50145_50218[(2)] = inst_50018);
(statearr_50145_50218[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (2)))
{var state_50095__$1 = state_50095;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50095__$1,(4),ch);
} else
{if((state_val_50096 === (23)))
{var state_50095__$1 = state_50095;var statearr_50146_50219 = state_50095__$1;(statearr_50146_50219[(2)] = null);
(statearr_50146_50219[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (35)))
{var inst_50077 = (state_50095[(2)]);var state_50095__$1 = state_50095;var statearr_50147_50220 = state_50095__$1;(statearr_50147_50220[(2)] = inst_50077);
(statearr_50147_50220[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (19)))
{var inst_49992 = (state_50095[(7)]);var inst_49996 = cljs.core.chunk_first(inst_49992);var inst_49997 = cljs.core.chunk_rest(inst_49992);var inst_49998 = cljs.core.count(inst_49996);var inst_49972 = inst_49997;var inst_49973 = inst_49996;var inst_49974 = inst_49998;var inst_49975 = (0);var state_50095__$1 = (function (){var statearr_50148 = state_50095;(statearr_50148[(12)] = inst_49973);
(statearr_50148[(13)] = inst_49974);
(statearr_50148[(15)] = inst_49975);
(statearr_50148[(16)] = inst_49972);
return statearr_50148;
})();var statearr_50149_50221 = state_50095__$1;(statearr_50149_50221[(2)] = null);
(statearr_50149_50221[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (11)))
{var inst_49992 = (state_50095[(7)]);var inst_49972 = (state_50095[(16)]);var inst_49992__$1 = cljs.core.seq(inst_49972);var state_50095__$1 = (function (){var statearr_50150 = state_50095;(statearr_50150[(7)] = inst_49992__$1);
return statearr_50150;
})();if(inst_49992__$1)
{var statearr_50151_50222 = state_50095__$1;(statearr_50151_50222[(1)] = (16));
} else
{var statearr_50152_50223 = state_50095__$1;(statearr_50152_50223[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (9)))
{var inst_50020 = (state_50095[(2)]);var state_50095__$1 = state_50095;var statearr_50153_50224 = state_50095__$1;(statearr_50153_50224[(2)] = inst_50020);
(statearr_50153_50224[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (5)))
{var inst_49970 = (function (){var G__50154 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50154) : cljs.core.deref.call(null,G__50154));
})();var inst_49971 = cljs.core.seq(inst_49970);var inst_49972 = inst_49971;var inst_49973 = null;var inst_49974 = (0);var inst_49975 = (0);var state_50095__$1 = (function (){var statearr_50155 = state_50095;(statearr_50155[(12)] = inst_49973);
(statearr_50155[(13)] = inst_49974);
(statearr_50155[(15)] = inst_49975);
(statearr_50155[(16)] = inst_49972);
return statearr_50155;
})();var statearr_50156_50225 = state_50095__$1;(statearr_50156_50225[(2)] = null);
(statearr_50156_50225[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (14)))
{var state_50095__$1 = state_50095;var statearr_50157_50226 = state_50095__$1;(statearr_50157_50226[(2)] = null);
(statearr_50157_50226[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (45)))
{var inst_50085 = (state_50095[(2)]);var state_50095__$1 = state_50095;var statearr_50158_50227 = state_50095__$1;(statearr_50158_50227[(2)] = inst_50085);
(statearr_50158_50227[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (26)))
{var inst_50023 = (state_50095[(30)]);var inst_50081 = (state_50095[(2)]);var inst_50082 = cljs.core.seq(inst_50023);var state_50095__$1 = (function (){var statearr_50159 = state_50095;(statearr_50159[(32)] = inst_50081);
return statearr_50159;
})();if(inst_50082)
{var statearr_50160_50228 = state_50095__$1;(statearr_50160_50228[(1)] = (42));
} else
{var statearr_50161_50229 = state_50095__$1;(statearr_50161_50229[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (16)))
{var inst_49992 = (state_50095[(7)]);var inst_49994 = cljs.core.chunked_seq_QMARK_(inst_49992);var state_50095__$1 = state_50095;if(inst_49994)
{var statearr_50165_50230 = state_50095__$1;(statearr_50165_50230[(1)] = (19));
} else
{var statearr_50166_50231 = state_50095__$1;(statearr_50166_50231[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (38)))
{var inst_50074 = (state_50095[(2)]);var state_50095__$1 = state_50095;var statearr_50167_50232 = state_50095__$1;(statearr_50167_50232[(2)] = inst_50074);
(statearr_50167_50232[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (30)))
{var inst_50033 = (state_50095[(19)]);var inst_50034 = (state_50095[(9)]);var inst_50032 = (state_50095[(10)]);var inst_50031 = (state_50095[(20)]);var inst_50048 = (state_50095[(2)]);var inst_50049 = (inst_50034 + (1));var tmp50162 = inst_50033;var tmp50163 = inst_50032;var tmp50164 = inst_50031;var inst_50031__$1 = tmp50164;var inst_50032__$1 = tmp50163;var inst_50033__$1 = tmp50162;var inst_50034__$1 = inst_50049;var state_50095__$1 = (function (){var statearr_50168 = state_50095;(statearr_50168[(19)] = inst_50033__$1);
(statearr_50168[(9)] = inst_50034__$1);
(statearr_50168[(10)] = inst_50032__$1);
(statearr_50168[(20)] = inst_50031__$1);
(statearr_50168[(33)] = inst_50048);
return statearr_50168;
})();var statearr_50169_50233 = state_50095__$1;(statearr_50169_50233[(2)] = null);
(statearr_50169_50233[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (10)))
{var inst_49973 = (state_50095[(12)]);var inst_49975 = (state_50095[(15)]);var inst_49981 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_49973,inst_49975);var inst_49982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49981,(0),null);var inst_49983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49981,(1),null);var state_50095__$1 = (function (){var statearr_50170 = state_50095;(statearr_50170[(28)] = inst_49982);
return statearr_50170;
})();if(cljs.core.truth_(inst_49983))
{var statearr_50171_50234 = state_50095__$1;(statearr_50171_50234[(1)] = (13));
} else
{var statearr_50172_50235 = state_50095__$1;(statearr_50172_50235[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (18)))
{var inst_50016 = (state_50095[(2)]);var state_50095__$1 = state_50095;var statearr_50173_50236 = state_50095__$1;(statearr_50173_50236[(2)] = inst_50016);
(statearr_50173_50236[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (42)))
{var state_50095__$1 = state_50095;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50095__$1,(45),dchan);
} else
{if((state_val_50096 === (37)))
{var inst_50052 = (state_50095[(17)]);var inst_50061 = cljs.core.first(inst_50052);var state_50095__$1 = (function (){var statearr_50174 = state_50095;(statearr_50174[(25)] = inst_50061);
return statearr_50174;
})();var statearr_50175_50237 = state_50095__$1;(statearr_50175_50237[(2)] = null);
(statearr_50175_50237[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50096 === (8)))
{var inst_49974 = (state_50095[(13)]);var inst_49975 = (state_50095[(15)]);var inst_49977 = (inst_49975 < inst_49974);var inst_49978 = inst_49977;var state_50095__$1 = state_50095;if(cljs.core.truth_(inst_49978))
{var statearr_50176_50238 = state_50095__$1;(statearr_50176_50238[(1)] = (10));
} else
{var statearr_50177_50239 = state_50095__$1;(statearr_50177_50239[(1)] = (11));
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
});})(c__22972__auto___50187,cs,m,dchan,dctr,done))
;return ((function (switch__22957__auto__,c__22972__auto___50187,cs,m,dchan,dctr,done){
return (function() {
var state_machine__22958__auto__ = null;
var state_machine__22958__auto____0 = (function (){var statearr_50181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50181[(0)] = state_machine__22958__auto__);
(statearr_50181[(1)] = (1));
return statearr_50181;
});
var state_machine__22958__auto____1 = (function (state_50095){while(true){
var ret_value__22959__auto__ = (function (){try{while(true){
var result__22960__auto__ = switch__22957__auto__(state_50095);if(cljs.core.keyword_identical_QMARK_(result__22960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22960__auto__;
}
break;
}
}catch (e50182){if((e50182 instanceof Object))
{var ex__22961__auto__ = e50182;var statearr_50183_50240 = state_50095;(statearr_50183_50240[(5)] = ex__22961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_50095);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e50182;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50241 = state_50095;
state_50095 = G__50241;
continue;
}
} else
{return ret_value__22959__auto__;
}
break;
}
});
state_machine__22958__auto__ = function(state_50095){
switch(arguments.length){
case 0:
return state_machine__22958__auto____0.call(this);
case 1:
return state_machine__22958__auto____1.call(this,state_50095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22958__auto____0;
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22958__auto____1;
return state_machine__22958__auto__;
})()
;})(switch__22957__auto__,c__22972__auto___50187,cs,m,dchan,dctr,done))
})();var state__22974__auto__ = (function (){var statearr_50184 = (function (){return (f__22973__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22973__auto__.cljs$core$IFn$_invoke$arity$0() : f__22973__auto__.call(null));
})();(statearr_50184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22972__auto___50187);
return statearr_50184;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22974__auto__);
});})(c__22972__auto___50187,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj50246 = {};return obj50246;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__19564__auto__ = m;if(and__19564__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__19564__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__20812__auto__ = (((m == null))?null:m);return (function (){var or__19586__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__50250 = x__20812__auto__;return goog.typeOf(G__50250);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__19564__auto__ = m;if(and__19564__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__19564__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__20812__auto__ = (((m == null))?null:m);return (function (){var or__19586__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__50254 = x__20812__auto__;return goog.typeOf(G__50254);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__19564__auto__ = m;if(and__19564__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__19564__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__20812__auto__ = (((m == null))?null:m);return (function (){var or__19586__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__50258 = x__20812__auto__;return goog.typeOf(G__50258);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__19564__auto__ = m;if(and__19564__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__19564__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__20812__auto__ = (((m == null))?null:m);return (function (){var or__19586__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__50262 = x__20812__auto__;return goog.typeOf(G__50262);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__19564__auto__ = m;if(and__19564__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__19564__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__20812__auto__ = (((m == null))?null:m);return (function (){var or__19586__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__50266 = x__20812__auto__;return goog.typeOf(G__50266);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__50390 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__50390) : cljs.core.atom.call(null,G__50390));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = (function (){var G__50391 = new cljs.core.Keyword(null,"mute","mute",1151223646);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__50391) : cljs.core.atom.call(null,G__50391));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__50392 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__50392) : attr.call(null,G__50392));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__50393 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50393) : cljs.core.deref.call(null,G__50393));
})();var mode = (function (){var G__50394 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50394) : cljs.core.deref.call(null,G__50394));
})();var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t50395 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50395 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta50396){
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
this.meta50396 = meta50396;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50395.cljs$lang$type = true;
cljs.core.async.t50395.cljs$lang$ctorStr = "cljs.core.async/t50395";
cljs.core.async.t50395.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core.async/t50395");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50395.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t50395.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50395.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50395.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__50398_50513 = self__.cs;var G__50399_50514 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__50398_50513,G__50399_50514) : cljs.core.reset_BANG_.call(null,G__50398_50513,G__50399_50514));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50395.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50395.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__50400 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__50400) : self__.solo_modes.call(null,G__50400));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__50401_50515 = self__.solo_mode;var G__50402_50516 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__50401_50515,G__50402_50516) : cljs.core.reset_BANG_.call(null,G__50401_50515,G__50402_50516));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50395.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t50395.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50395.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_50397){var self__ = this;
var _50397__$1 = this;return self__.meta50396;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_50397,meta50396__$1){var self__ = this;
var _50397__$1 = this;return (new cljs.core.async.t50395(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta50396__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t50395 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t50395(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50396){return (new cljs.core.async.t50395(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50396));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t50395(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__22972__auto___50517 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22972__auto___50517,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__22973__auto__ = (function (){var switch__22957__auto__ = ((function (c__22972__auto___50517,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_50469){var state_val_50470 = (state_50469[(1)]);if((state_val_50470 === (7)))
{var inst_50416 = (state_50469[(7)]);var inst_50421 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50416);var state_50469__$1 = state_50469;var statearr_50471_50518 = state_50469__$1;(statearr_50471_50518[(2)] = inst_50421);
(statearr_50471_50518[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50470 === (20)))
{var inst_50431 = (state_50469[(8)]);var state_50469__$1 = state_50469;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50469__$1,(23),out,inst_50431);
} else
{if((state_val_50470 === (1)))
{var inst_50406 = (state_50469[(9)]);var inst_50406__$1 = calc_state();var inst_50407 = cljs.core.seq_QMARK_(inst_50406__$1);var state_50469__$1 = (function (){var statearr_50472 = state_50469;(statearr_50472[(9)] = inst_50406__$1);
return statearr_50472;
})();if(inst_50407)
{var statearr_50473_50519 = state_50469__$1;(statearr_50473_50519[(1)] = (2));
} else
{var statearr_50474_50520 = state_50469__$1;(statearr_50474_50520[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50470 === (4)))
{var inst_50406 = (state_50469[(9)]);var inst_50412 = (state_50469[(2)]);var inst_50413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50412,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_50414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50412,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_50415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50412,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_50416 = inst_50406;var state_50469__$1 = (function (){var statearr_50475 = state_50469;(statearr_50475[(10)] = inst_50415);
(statearr_50475[(11)] = inst_50413);
(statearr_50475[(7)] = inst_50416);
(statearr_50475[(12)] = inst_50414);
return statearr_50475;
})();var statearr_50476_50521 = state_50469__$1;(statearr_50476_50521[(2)] = null);
(statearr_50476_50521[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50470 === (15)))
{var state_50469__$1 = state_50469;var statearr_50477_50522 = state_50469__$1;(statearr_50477_50522[(2)] = null);
(statearr_50477_50522[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50470 === (21)))
{var state_50469__$1 = state_50469;var statearr_50478_50523 = state_50469__$1;(statearr_50478_50523[(2)] = null);
(statearr_50478_50523[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50470 === (13)))
{var inst_50465 = (state_50469[(2)]);var state_50469__$1 = state_50469;var statearr_50479_50524 = state_50469__$1;(statearr_50479_50524[(2)] = inst_50465);
(statearr_50479_50524[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50470 === (22)))
{var inst_50424 = (state_50469[(13)]);var inst_50462 = (state_50469[(2)]);var inst_50416 = inst_50424;var state_50469__$1 = (function (){var statearr_50480 = state_50469;(statearr_50480[(14)] = inst_50462);
(statearr_50480[(7)] = inst_50416);
return statearr_50480;
})();var statearr_50481_50525 = state_50469__$1;(statearr_50481_50525[(2)] = null);
(statearr_50481_50525[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50470 === (6)))
{var inst_50467 = (state_50469[(2)]);var state_50469__$1 = state_50469;return cljs.core.async.impl.ioc_helpers.return_chan(state_50469__$1,inst_50467);
} else
{if((state_val_50470 === (17)))
{var inst_50447 = (state_50469[(15)]);var state_50469__$1 = state_50469;var statearr_50482_50526 = state_50469__$1;(statearr_50482_50526[(2)] = inst_50447);
(statearr_50482_50526[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50470 === (3)))
{var inst_50406 = (state_50469[(9)]);var state_50469__$1 = state_50469;var statearr_50483_50527 = state_50469__$1;(statearr_50483_50527[(2)] = inst_50406);
(statearr_50483_50527[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50470 === (12)))
{var inst_50427 = (state_50469[(16)]);var inst_50432 = (state_50469[(17)]);var inst_50447 = (state_50469[(15)]);var inst_50447__$1 = (function (){var G__50484 = inst_50432;return (inst_50427.cljs$core$IFn$_invoke$arity$1 ? inst_50427.cljs$core$IFn$_invoke$arity$1(G__50484) : inst_50427.call(null,G__50484));
})();var state_50469__$1 = (function (){var statearr_50485 = state_50469;(statearr_50485[(15)] = inst_50447__$1);
return statearr_50485;
})();if(cljs.core.truth_(inst_50447__$1))
{var statearr_50486_50528 = state_50469__$1;(statearr_50486_50528[(1)] = (17));
} else
{var statearr_50487_50529 = state_50469__$1;(statearr_50487_50529[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50470 === (2)))
{var inst_50406 = (state_50469[(9)]);var inst_50409 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50406);var state_50469__$1 = state_50469;var statearr_50488_50530 = state_50469__$1;(statearr_50488_50530[(2)] = inst_50409);
(statearr_50488_50530[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50470 === (23)))
{var inst_50459 = (state_50469[(2)]);var state_50469__$1 = state_50469;var statearr_50489_50531 = state_50469__$1;(statearr_50489_50531[(2)] = inst_50459);
(statearr_50489_50531[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50470 === (19)))
{var inst_50456 = (state_50469[(2)]);var state_50469__$1 = state_50469;if(cljs.core.truth_(inst_50456))
{var statearr_50490_50532 = state_50469__$1;(statearr_50490_50532[(1)] = (20));
} else
{var statearr_50491_50533 = state_50469__$1;(statearr_50491_50533[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50470 === (11)))
{var inst_50431 = (state_50469[(8)]);var inst_50437 = (inst_50431 == null);var state_50469__$1 = state_50469;if(cljs.core.truth_(inst_50437))
{var statearr_50492_50534 = state_50469__$1;(statearr_50492_50534[(1)] = (14));
} else
{var statearr_50493_50535 = state_50469__$1;(statearr_50493_50535[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50470 === (9)))
{var inst_50424 = (state_50469[(13)]);var inst_50424__$1 = (state_50469[(2)]);var inst_50425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50424__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_50426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50424__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_50427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50424__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_50469__$1 = (function (){var statearr_50494 = state_50469;(statearr_50494[(18)] = inst_50426);
(statearr_50494[(16)] = inst_50427);
(statearr_50494[(13)] = inst_50424__$1);
return statearr_50494;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_50469__$1,(10),inst_50425);
} else
{if((state_val_50470 === (5)))
{var inst_50416 = (state_50469[(7)]);var inst_50419 = cljs.core.seq_QMARK_(inst_50416);var state_50469__$1 = state_50469;if(inst_50419)
{var statearr_50495_50536 = state_50469__$1;(statearr_50495_50536[(1)] = (7));
} else
{var statearr_50496_50537 = state_50469__$1;(statearr_50496_50537[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50470 === (14)))
{var inst_50432 = (state_50469[(17)]);var inst_50439 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_50432);var state_50469__$1 = state_50469;var statearr_50497_50538 = state_50469__$1;(statearr_50497_50538[(2)] = inst_50439);
(statearr_50497_50538[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50470 === (16)))
{var inst_50442 = (state_50469[(2)]);var inst_50443 = calc_state();var inst_50416 = inst_50443;var state_50469__$1 = (function (){var statearr_50498 = state_50469;(statearr_50498[(7)] = inst_50416);
(statearr_50498[(19)] = inst_50442);
return statearr_50498;
})();var statearr_50499_50539 = state_50469__$1;(statearr_50499_50539[(2)] = null);
(statearr_50499_50539[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50470 === (10)))
{var inst_50431 = (state_50469[(8)]);var inst_50432 = (state_50469[(17)]);var inst_50430 = (state_50469[(2)]);var inst_50431__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50430,(0),null);var inst_50432__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50430,(1),null);var inst_50433 = (inst_50431__$1 == null);var inst_50434 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50432__$1,change);var inst_50435 = (inst_50433) || (inst_50434);var state_50469__$1 = (function (){var statearr_50500 = state_50469;(statearr_50500[(8)] = inst_50431__$1);
(statearr_50500[(17)] = inst_50432__$1);
return statearr_50500;
})();if(cljs.core.truth_(inst_50435))
{var statearr_50501_50540 = state_50469__$1;(statearr_50501_50540[(1)] = (11));
} else
{var statearr_50502_50541 = state_50469__$1;(statearr_50502_50541[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50470 === (18)))
{var inst_50426 = (state_50469[(18)]);var inst_50427 = (state_50469[(16)]);var inst_50432 = (state_50469[(17)]);var inst_50451 = cljs.core.empty_QMARK_(inst_50427);var inst_50452 = (function (){var G__50503 = inst_50432;return (inst_50426.cljs$core$IFn$_invoke$arity$1 ? inst_50426.cljs$core$IFn$_invoke$arity$1(G__50503) : inst_50426.call(null,G__50503));
})();var inst_50453 = cljs.core.not(inst_50452);var inst_50454 = (inst_50451) && (inst_50453);var state_50469__$1 = state_50469;var statearr_50504_50542 = state_50469__$1;(statearr_50504_50542[(2)] = inst_50454);
(statearr_50504_50542[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50470 === (8)))
{var inst_50416 = (state_50469[(7)]);var state_50469__$1 = state_50469;var statearr_50505_50543 = state_50469__$1;(statearr_50505_50543[(2)] = inst_50416);
(statearr_50505_50543[(1)] = (9));
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
});})(c__22972__auto___50517,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__22957__auto__,c__22972__auto___50517,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__22958__auto__ = null;
var state_machine__22958__auto____0 = (function (){var statearr_50509 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50509[(0)] = state_machine__22958__auto__);
(statearr_50509[(1)] = (1));
return statearr_50509;
});
var state_machine__22958__auto____1 = (function (state_50469){while(true){
var ret_value__22959__auto__ = (function (){try{while(true){
var result__22960__auto__ = switch__22957__auto__(state_50469);if(cljs.core.keyword_identical_QMARK_(result__22960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22960__auto__;
}
break;
}
}catch (e50510){if((e50510 instanceof Object))
{var ex__22961__auto__ = e50510;var statearr_50511_50544 = state_50469;(statearr_50511_50544[(5)] = ex__22961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_50469);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e50510;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50545 = state_50469;
state_50469 = G__50545;
continue;
}
} else
{return ret_value__22959__auto__;
}
break;
}
});
state_machine__22958__auto__ = function(state_50469){
switch(arguments.length){
case 0:
return state_machine__22958__auto____0.call(this);
case 1:
return state_machine__22958__auto____1.call(this,state_50469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22958__auto____0;
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22958__auto____1;
return state_machine__22958__auto__;
})()
;})(switch__22957__auto__,c__22972__auto___50517,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__22974__auto__ = (function (){var statearr_50512 = (function (){return (f__22973__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22973__auto__.cljs$core$IFn$_invoke$arity$0() : f__22973__auto__.call(null));
})();(statearr_50512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22972__auto___50517);
return statearr_50512;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22974__auto__);
});})(c__22972__auto___50517,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj50547 = {};return obj50547;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__19564__auto__ = p;if(and__19564__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__19564__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__20812__auto__ = (((p == null))?null:p);return (function (){var or__19586__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__50551 = x__20812__auto__;return goog.typeOf(G__50551);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__19564__auto__ = p;if(and__19564__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__19564__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__20812__auto__ = (((p == null))?null:p);return (function (){var or__19586__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__50555 = x__20812__auto__;return goog.typeOf(G__50555);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__19564__auto__ = p;if(and__19564__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__19564__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__20812__auto__ = (((p == null))?null:p);return (function (){var or__19586__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__50561 = x__20812__auto__;return goog.typeOf(G__50561);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__19564__auto__ = p;if(and__19564__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__19564__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__20812__auto__ = (((p == null))?null:p);return (function (){var or__19586__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__50563 = x__20812__auto__;return goog.typeOf(G__50563);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
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
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__50704 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__50704) : cljs.core.atom.call(null,G__50704));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__19586__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__50706 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50706) : cljs.core.deref.call(null,G__50706));
})(),topic);if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__19586__auto__,mults){
return (function (p1__50564_SHARP_){if(cljs.core.truth_((function (){var G__50707 = topic;return (p1__50564_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__50564_SHARP_.cljs$core$IFn$_invoke$arity$1(G__50707) : p1__50564_SHARP_.call(null,G__50707));
})()))
{return p1__50564_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50564_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__50708 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__50708) : buf_fn.call(null,G__50708));
})())));
}
});})(or__19586__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t50709 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50709 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta50710){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta50710 = meta50710;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50709.cljs$lang$type = true;
cljs.core.async.t50709.cljs$lang$ctorStr = "cljs.core.async/t50709";
cljs.core.async.t50709.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core.async/t50709");
});})(mults,ensure_mult))
;
cljs.core.async.t50709.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t50709.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__50712 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__50712) : self__.ensure_mult.call(null,G__50712));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t50709.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__50713 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50713) : cljs.core.deref.call(null,G__50713));
})(),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t50709.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__50714 = self__.mults;var G__50715 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__50714,G__50715) : cljs.core.reset_BANG_.call(null,G__50714,G__50715));
});})(mults,ensure_mult))
;
cljs.core.async.t50709.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t50709.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t50709.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t50709.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_50711){var self__ = this;
var _50711__$1 = this;return self__.meta50710;
});})(mults,ensure_mult))
;
cljs.core.async.t50709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_50711,meta50710__$1){var self__ = this;
var _50711__$1 = this;return (new cljs.core.async.t50709(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta50710__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t50709 = ((function (mults,ensure_mult){
return (function __GT_t50709(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta50710){return (new cljs.core.async.t50709(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta50710));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t50709(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__22972__auto___50840 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22972__auto___50840,mults,ensure_mult,p){
return (function (){var f__22973__auto__ = (function (){var switch__22957__auto__ = ((function (c__22972__auto___50840,mults,ensure_mult,p){
return (function (state_50789){var state_val_50790 = (state_50789[(1)]);if((state_val_50790 === (7)))
{var inst_50785 = (state_50789[(2)]);var state_50789__$1 = state_50789;var statearr_50791_50841 = state_50789__$1;(statearr_50791_50841[(2)] = inst_50785);
(statearr_50791_50841[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50790 === (20)))
{var state_50789__$1 = state_50789;var statearr_50792_50842 = state_50789__$1;(statearr_50792_50842[(2)] = null);
(statearr_50792_50842[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50790 === (1)))
{var state_50789__$1 = state_50789;var statearr_50793_50843 = state_50789__$1;(statearr_50793_50843[(2)] = null);
(statearr_50793_50843[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50790 === (24)))
{var inst_50718 = (state_50789[(7)]);var inst_50768 = (state_50789[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50789,(23),Object,null,(22));var inst_50775 = cljs.core.async.muxch_STAR_(inst_50768);var state_50789__$1 = state_50789;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50789__$1,(25),inst_50775,inst_50718);
} else
{if((state_val_50790 === (4)))
{var inst_50718 = (state_50789[(7)]);var inst_50718__$1 = (state_50789[(2)]);var inst_50719 = (inst_50718__$1 == null);var state_50789__$1 = (function (){var statearr_50794 = state_50789;(statearr_50794[(7)] = inst_50718__$1);
return statearr_50794;
})();if(cljs.core.truth_(inst_50719))
{var statearr_50795_50844 = state_50789__$1;(statearr_50795_50844[(1)] = (5));
} else
{var statearr_50796_50845 = state_50789__$1;(statearr_50796_50845[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50790 === (15)))
{var inst_50760 = (state_50789[(2)]);var state_50789__$1 = state_50789;var statearr_50797_50846 = state_50789__$1;(statearr_50797_50846[(2)] = inst_50760);
(statearr_50797_50846[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50790 === (21)))
{var inst_50782 = (state_50789[(2)]);var state_50789__$1 = (function (){var statearr_50798 = state_50789;(statearr_50798[(9)] = inst_50782);
return statearr_50798;
})();var statearr_50799_50847 = state_50789__$1;(statearr_50799_50847[(2)] = null);
(statearr_50799_50847[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50790 === (13)))
{var inst_50742 = (state_50789[(10)]);var inst_50744 = cljs.core.chunked_seq_QMARK_(inst_50742);var state_50789__$1 = state_50789;if(inst_50744)
{var statearr_50800_50848 = state_50789__$1;(statearr_50800_50848[(1)] = (16));
} else
{var statearr_50801_50849 = state_50789__$1;(statearr_50801_50849[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50790 === (22)))
{var inst_50779 = (state_50789[(2)]);var state_50789__$1 = state_50789;var statearr_50802_50850 = state_50789__$1;(statearr_50802_50850[(2)] = inst_50779);
(statearr_50802_50850[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50790 === (6)))
{var inst_50766 = (state_50789[(11)]);var inst_50718 = (state_50789[(7)]);var inst_50768 = (state_50789[(8)]);var inst_50766__$1 = (function (){var G__50803 = inst_50718;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__50803) : topic_fn.call(null,G__50803));
})();var inst_50767 = (function (){var G__50804 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50804) : cljs.core.deref.call(null,G__50804));
})();var inst_50768__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50767,inst_50766__$1);var state_50789__$1 = (function (){var statearr_50805 = state_50789;(statearr_50805[(11)] = inst_50766__$1);
(statearr_50805[(8)] = inst_50768__$1);
return statearr_50805;
})();if(cljs.core.truth_(inst_50768__$1))
{var statearr_50806_50851 = state_50789__$1;(statearr_50806_50851[(1)] = (19));
} else
{var statearr_50807_50852 = state_50789__$1;(statearr_50807_50852[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50790 === (25)))
{var inst_50777 = (state_50789[(2)]);var state_50789__$1 = state_50789;var statearr_50808_50853 = state_50789__$1;(statearr_50808_50853[(2)] = inst_50777);
cljs.core.async.impl.ioc_helpers.process_exception(state_50789__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50790 === (17)))
{var inst_50742 = (state_50789[(10)]);var inst_50751 = cljs.core.first(inst_50742);var inst_50752 = cljs.core.async.muxch_STAR_(inst_50751);var inst_50753 = cljs.core.async.close_BANG_(inst_50752);var inst_50754 = cljs.core.next(inst_50742);var inst_50728 = inst_50754;var inst_50729 = null;var inst_50730 = (0);var inst_50731 = (0);var state_50789__$1 = (function (){var statearr_50809 = state_50789;(statearr_50809[(12)] = inst_50731);
(statearr_50809[(13)] = inst_50728);
(statearr_50809[(14)] = inst_50730);
(statearr_50809[(15)] = inst_50729);
(statearr_50809[(16)] = inst_50753);
return statearr_50809;
})();var statearr_50810_50854 = state_50789__$1;(statearr_50810_50854[(2)] = null);
(statearr_50810_50854[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50790 === (3)))
{var inst_50787 = (state_50789[(2)]);var state_50789__$1 = state_50789;return cljs.core.async.impl.ioc_helpers.return_chan(state_50789__$1,inst_50787);
} else
{if((state_val_50790 === (12)))
{var inst_50762 = (state_50789[(2)]);var state_50789__$1 = state_50789;var statearr_50811_50855 = state_50789__$1;(statearr_50811_50855[(2)] = inst_50762);
(statearr_50811_50855[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50790 === (2)))
{var state_50789__$1 = state_50789;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50789__$1,(4),ch);
} else
{if((state_val_50790 === (23)))
{var inst_50766 = (state_50789[(11)]);var inst_50770 = (state_50789[(2)]);var inst_50771 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_50766);var state_50789__$1 = (function (){var statearr_50812 = state_50789;(statearr_50812[(17)] = inst_50770);
return statearr_50812;
})();var statearr_50813_50856 = state_50789__$1;(statearr_50813_50856[(2)] = inst_50771);
cljs.core.async.impl.ioc_helpers.process_exception(state_50789__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50790 === (19)))
{var state_50789__$1 = state_50789;var statearr_50814_50857 = state_50789__$1;(statearr_50814_50857[(2)] = null);
(statearr_50814_50857[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50790 === (11)))
{var inst_50728 = (state_50789[(13)]);var inst_50742 = (state_50789[(10)]);var inst_50742__$1 = cljs.core.seq(inst_50728);var state_50789__$1 = (function (){var statearr_50815 = state_50789;(statearr_50815[(10)] = inst_50742__$1);
return statearr_50815;
})();if(inst_50742__$1)
{var statearr_50816_50858 = state_50789__$1;(statearr_50816_50858[(1)] = (13));
} else
{var statearr_50817_50859 = state_50789__$1;(statearr_50817_50859[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50790 === (9)))
{var inst_50764 = (state_50789[(2)]);var state_50789__$1 = state_50789;var statearr_50818_50860 = state_50789__$1;(statearr_50818_50860[(2)] = inst_50764);
(statearr_50818_50860[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50790 === (5)))
{var inst_50725 = (function (){var G__50819 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50819) : cljs.core.deref.call(null,G__50819));
})();var inst_50726 = cljs.core.vals(inst_50725);var inst_50727 = cljs.core.seq(inst_50726);var inst_50728 = inst_50727;var inst_50729 = null;var inst_50730 = (0);var inst_50731 = (0);var state_50789__$1 = (function (){var statearr_50820 = state_50789;(statearr_50820[(12)] = inst_50731);
(statearr_50820[(13)] = inst_50728);
(statearr_50820[(14)] = inst_50730);
(statearr_50820[(15)] = inst_50729);
return statearr_50820;
})();var statearr_50821_50861 = state_50789__$1;(statearr_50821_50861[(2)] = null);
(statearr_50821_50861[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50790 === (14)))
{var state_50789__$1 = state_50789;var statearr_50825_50862 = state_50789__$1;(statearr_50825_50862[(2)] = null);
(statearr_50825_50862[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50790 === (16)))
{var inst_50742 = (state_50789[(10)]);var inst_50746 = cljs.core.chunk_first(inst_50742);var inst_50747 = cljs.core.chunk_rest(inst_50742);var inst_50748 = cljs.core.count(inst_50746);var inst_50728 = inst_50747;var inst_50729 = inst_50746;var inst_50730 = inst_50748;var inst_50731 = (0);var state_50789__$1 = (function (){var statearr_50826 = state_50789;(statearr_50826[(12)] = inst_50731);
(statearr_50826[(13)] = inst_50728);
(statearr_50826[(14)] = inst_50730);
(statearr_50826[(15)] = inst_50729);
return statearr_50826;
})();var statearr_50827_50863 = state_50789__$1;(statearr_50827_50863[(2)] = null);
(statearr_50827_50863[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50790 === (10)))
{var inst_50731 = (state_50789[(12)]);var inst_50728 = (state_50789[(13)]);var inst_50730 = (state_50789[(14)]);var inst_50729 = (state_50789[(15)]);var inst_50736 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_50729,inst_50731);var inst_50737 = cljs.core.async.muxch_STAR_(inst_50736);var inst_50738 = cljs.core.async.close_BANG_(inst_50737);var inst_50739 = (inst_50731 + (1));var tmp50822 = inst_50728;var tmp50823 = inst_50730;var tmp50824 = inst_50729;var inst_50728__$1 = tmp50822;var inst_50729__$1 = tmp50824;var inst_50730__$1 = tmp50823;var inst_50731__$1 = inst_50739;var state_50789__$1 = (function (){var statearr_50828 = state_50789;(statearr_50828[(12)] = inst_50731__$1);
(statearr_50828[(13)] = inst_50728__$1);
(statearr_50828[(18)] = inst_50738);
(statearr_50828[(14)] = inst_50730__$1);
(statearr_50828[(15)] = inst_50729__$1);
return statearr_50828;
})();var statearr_50829_50864 = state_50789__$1;(statearr_50829_50864[(2)] = null);
(statearr_50829_50864[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50790 === (18)))
{var inst_50757 = (state_50789[(2)]);var state_50789__$1 = state_50789;var statearr_50830_50865 = state_50789__$1;(statearr_50830_50865[(2)] = inst_50757);
(statearr_50830_50865[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50790 === (8)))
{var inst_50731 = (state_50789[(12)]);var inst_50730 = (state_50789[(14)]);var inst_50733 = (inst_50731 < inst_50730);var inst_50734 = inst_50733;var state_50789__$1 = state_50789;if(cljs.core.truth_(inst_50734))
{var statearr_50831_50866 = state_50789__$1;(statearr_50831_50866[(1)] = (10));
} else
{var statearr_50832_50867 = state_50789__$1;(statearr_50832_50867[(1)] = (11));
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
});})(c__22972__auto___50840,mults,ensure_mult,p))
;return ((function (switch__22957__auto__,c__22972__auto___50840,mults,ensure_mult,p){
return (function() {
var state_machine__22958__auto__ = null;
var state_machine__22958__auto____0 = (function (){var statearr_50836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50836[(0)] = state_machine__22958__auto__);
(statearr_50836[(1)] = (1));
return statearr_50836;
});
var state_machine__22958__auto____1 = (function (state_50789){while(true){
var ret_value__22959__auto__ = (function (){try{while(true){
var result__22960__auto__ = switch__22957__auto__(state_50789);if(cljs.core.keyword_identical_QMARK_(result__22960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22960__auto__;
}
break;
}
}catch (e50837){if((e50837 instanceof Object))
{var ex__22961__auto__ = e50837;var statearr_50838_50868 = state_50789;(statearr_50838_50868[(5)] = ex__22961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_50789);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e50837;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50869 = state_50789;
state_50789 = G__50869;
continue;
}
} else
{return ret_value__22959__auto__;
}
break;
}
});
state_machine__22958__auto__ = function(state_50789){
switch(arguments.length){
case 0:
return state_machine__22958__auto____0.call(this);
case 1:
return state_machine__22958__auto____1.call(this,state_50789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22958__auto____0;
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22958__auto____1;
return state_machine__22958__auto__;
})()
;})(switch__22957__auto__,c__22972__auto___50840,mults,ensure_mult,p))
})();var state__22974__auto__ = (function (){var statearr_50839 = (function (){return (f__22973__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22973__auto__.cljs$core$IFn$_invoke$arity$0() : f__22973__auto__.call(null));
})();(statearr_50839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22972__auto___50840);
return statearr_50839;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22974__auto__);
});})(c__22972__auto___50840,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__50950 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__50950) : cljs.core.atom.call(null,G__50950));
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__22972__auto___51023 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22972__auto___51023,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__22973__auto__ = (function (){var switch__22957__auto__ = ((function (c__22972__auto___51023,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_50989){var state_val_50990 = (state_50989[(1)]);if((state_val_50990 === (7)))
{var state_50989__$1 = state_50989;var statearr_50991_51024 = state_50989__$1;(statearr_50991_51024[(2)] = null);
(statearr_50991_51024[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50990 === (1)))
{var state_50989__$1 = state_50989;var statearr_50992_51025 = state_50989__$1;(statearr_50992_51025[(2)] = null);
(statearr_50992_51025[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50990 === (4)))
{var inst_50953 = (state_50989[(7)]);var inst_50955 = (inst_50953 < cnt);var state_50989__$1 = state_50989;if(cljs.core.truth_(inst_50955))
{var statearr_50993_51026 = state_50989__$1;(statearr_50993_51026[(1)] = (6));
} else
{var statearr_50994_51027 = state_50989__$1;(statearr_50994_51027[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50990 === (15)))
{var inst_50985 = (state_50989[(2)]);var state_50989__$1 = state_50989;var statearr_50995_51028 = state_50989__$1;(statearr_50995_51028[(2)] = inst_50985);
(statearr_50995_51028[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50990 === (13)))
{var inst_50978 = cljs.core.async.close_BANG_(out);var state_50989__$1 = state_50989;var statearr_50996_51029 = state_50989__$1;(statearr_50996_51029[(2)] = inst_50978);
(statearr_50996_51029[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50990 === (6)))
{var state_50989__$1 = state_50989;var statearr_50997_51030 = state_50989__$1;(statearr_50997_51030[(2)] = null);
(statearr_50997_51030[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50990 === (3)))
{var inst_50987 = (state_50989[(2)]);var state_50989__$1 = state_50989;return cljs.core.async.impl.ioc_helpers.return_chan(state_50989__$1,inst_50987);
} else
{if((state_val_50990 === (12)))
{var inst_50975 = (state_50989[(8)]);var inst_50975__$1 = (state_50989[(2)]);var inst_50976 = cljs.core.some(cljs.core.nil_QMARK_,inst_50975__$1);var state_50989__$1 = (function (){var statearr_50998 = state_50989;(statearr_50998[(8)] = inst_50975__$1);
return statearr_50998;
})();if(cljs.core.truth_(inst_50976))
{var statearr_50999_51031 = state_50989__$1;(statearr_50999_51031[(1)] = (13));
} else
{var statearr_51000_51032 = state_50989__$1;(statearr_51000_51032[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50990 === (2)))
{var inst_50952 = (function (){var G__51001 = dctr;var G__51002 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__51001,G__51002) : cljs.core.reset_BANG_.call(null,G__51001,G__51002));
})();var inst_50953 = (0);var state_50989__$1 = (function (){var statearr_51003 = state_50989;(statearr_51003[(7)] = inst_50953);
(statearr_51003[(9)] = inst_50952);
return statearr_51003;
})();var statearr_51004_51033 = state_50989__$1;(statearr_51004_51033[(2)] = null);
(statearr_51004_51033[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50990 === (11)))
{var inst_50953 = (state_50989[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50989,(10),Object,null,(9));var inst_50962 = (function (){var G__51005 = inst_50953;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__51005) : chs__$1.call(null,G__51005));
})();var inst_50963 = (function (){var G__51006 = inst_50953;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__51006) : done.call(null,G__51006));
})();var inst_50964 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_50962,inst_50963);var state_50989__$1 = state_50989;var statearr_51007_51034 = state_50989__$1;(statearr_51007_51034[(2)] = inst_50964);
cljs.core.async.impl.ioc_helpers.process_exception(state_50989__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50990 === (9)))
{var inst_50953 = (state_50989[(7)]);var inst_50966 = (state_50989[(2)]);var inst_50967 = (inst_50953 + (1));var inst_50953__$1 = inst_50967;var state_50989__$1 = (function (){var statearr_51008 = state_50989;(statearr_51008[(7)] = inst_50953__$1);
(statearr_51008[(10)] = inst_50966);
return statearr_51008;
})();var statearr_51009_51035 = state_50989__$1;(statearr_51009_51035[(2)] = null);
(statearr_51009_51035[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50990 === (5)))
{var inst_50973 = (state_50989[(2)]);var state_50989__$1 = (function (){var statearr_51010 = state_50989;(statearr_51010[(11)] = inst_50973);
return statearr_51010;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50989__$1,(12),dchan);
} else
{if((state_val_50990 === (14)))
{var inst_50975 = (state_50989[(8)]);var inst_50980 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_50975);var state_50989__$1 = state_50989;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50989__$1,(16),out,inst_50980);
} else
{if((state_val_50990 === (16)))
{var inst_50982 = (state_50989[(2)]);var state_50989__$1 = (function (){var statearr_51011 = state_50989;(statearr_51011[(12)] = inst_50982);
return statearr_51011;
})();var statearr_51012_51036 = state_50989__$1;(statearr_51012_51036[(2)] = null);
(statearr_51012_51036[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50990 === (10)))
{var inst_50957 = (state_50989[(2)]);var inst_50958 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_50989__$1 = (function (){var statearr_51013 = state_50989;(statearr_51013[(13)] = inst_50957);
return statearr_51013;
})();var statearr_51014_51037 = state_50989__$1;(statearr_51014_51037[(2)] = inst_50958);
cljs.core.async.impl.ioc_helpers.process_exception(state_50989__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50990 === (8)))
{var inst_50971 = (state_50989[(2)]);var state_50989__$1 = state_50989;var statearr_51015_51038 = state_50989__$1;(statearr_51015_51038[(2)] = inst_50971);
(statearr_51015_51038[(1)] = (5));
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
});})(c__22972__auto___51023,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__22957__auto__,c__22972__auto___51023,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__22958__auto__ = null;
var state_machine__22958__auto____0 = (function (){var statearr_51019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51019[(0)] = state_machine__22958__auto__);
(statearr_51019[(1)] = (1));
return statearr_51019;
});
var state_machine__22958__auto____1 = (function (state_50989){while(true){
var ret_value__22959__auto__ = (function (){try{while(true){
var result__22960__auto__ = switch__22957__auto__(state_50989);if(cljs.core.keyword_identical_QMARK_(result__22960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22960__auto__;
}
break;
}
}catch (e51020){if((e51020 instanceof Object))
{var ex__22961__auto__ = e51020;var statearr_51021_51039 = state_50989;(statearr_51021_51039[(5)] = ex__22961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_50989);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e51020;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51040 = state_50989;
state_50989 = G__51040;
continue;
}
} else
{return ret_value__22959__auto__;
}
break;
}
});
state_machine__22958__auto__ = function(state_50989){
switch(arguments.length){
case 0:
return state_machine__22958__auto____0.call(this);
case 1:
return state_machine__22958__auto____1.call(this,state_50989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22958__auto____0;
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22958__auto____1;
return state_machine__22958__auto__;
})()
;})(switch__22957__auto__,c__22972__auto___51023,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__22974__auto__ = (function (){var statearr_51022 = (function (){return (f__22973__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22973__auto__.cljs$core$IFn$_invoke$arity$0() : f__22973__auto__.call(null));
})();(statearr_51022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22972__auto___51023);
return statearr_51022;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22974__auto__);
});})(c__22972__auto___51023,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22972__auto___51150 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22972__auto___51150,out){
return (function (){var f__22973__auto__ = (function (){var switch__22957__auto__ = ((function (c__22972__auto___51150,out){
return (function (state_51126){var state_val_51127 = (state_51126[(1)]);if((state_val_51127 === (7)))
{var inst_51105 = (state_51126[(7)]);var inst_51106 = (state_51126[(8)]);var inst_51105__$1 = (state_51126[(2)]);var inst_51106__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51105__$1,(0),null);var inst_51107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51105__$1,(1),null);var inst_51108 = (inst_51106__$1 == null);var state_51126__$1 = (function (){var statearr_51128 = state_51126;(statearr_51128[(9)] = inst_51107);
(statearr_51128[(7)] = inst_51105__$1);
(statearr_51128[(8)] = inst_51106__$1);
return statearr_51128;
})();if(cljs.core.truth_(inst_51108))
{var statearr_51129_51151 = state_51126__$1;(statearr_51129_51151[(1)] = (8));
} else
{var statearr_51130_51152 = state_51126__$1;(statearr_51130_51152[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51127 === (1)))
{var inst_51097 = cljs.core.vec(chs);var inst_51098 = inst_51097;var state_51126__$1 = (function (){var statearr_51131 = state_51126;(statearr_51131[(10)] = inst_51098);
return statearr_51131;
})();var statearr_51132_51153 = state_51126__$1;(statearr_51132_51153[(2)] = null);
(statearr_51132_51153[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51127 === (4)))
{var inst_51098 = (state_51126[(10)]);var state_51126__$1 = state_51126;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_51126__$1,(7),inst_51098);
} else
{if((state_val_51127 === (6)))
{var inst_51122 = (state_51126[(2)]);var state_51126__$1 = state_51126;var statearr_51133_51154 = state_51126__$1;(statearr_51133_51154[(2)] = inst_51122);
(statearr_51133_51154[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51127 === (3)))
{var inst_51124 = (state_51126[(2)]);var state_51126__$1 = state_51126;return cljs.core.async.impl.ioc_helpers.return_chan(state_51126__$1,inst_51124);
} else
{if((state_val_51127 === (2)))
{var inst_51098 = (state_51126[(10)]);var inst_51100 = cljs.core.count(inst_51098);var inst_51101 = (inst_51100 > (0));var state_51126__$1 = state_51126;if(cljs.core.truth_(inst_51101))
{var statearr_51135_51155 = state_51126__$1;(statearr_51135_51155[(1)] = (4));
} else
{var statearr_51136_51156 = state_51126__$1;(statearr_51136_51156[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51127 === (11)))
{var inst_51098 = (state_51126[(10)]);var inst_51115 = (state_51126[(2)]);var tmp51134 = inst_51098;var inst_51098__$1 = tmp51134;var state_51126__$1 = (function (){var statearr_51137 = state_51126;(statearr_51137[(10)] = inst_51098__$1);
(statearr_51137[(11)] = inst_51115);
return statearr_51137;
})();var statearr_51138_51157 = state_51126__$1;(statearr_51138_51157[(2)] = null);
(statearr_51138_51157[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51127 === (9)))
{var inst_51106 = (state_51126[(8)]);var state_51126__$1 = state_51126;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51126__$1,(11),out,inst_51106);
} else
{if((state_val_51127 === (5)))
{var inst_51120 = cljs.core.async.close_BANG_(out);var state_51126__$1 = state_51126;var statearr_51139_51158 = state_51126__$1;(statearr_51139_51158[(2)] = inst_51120);
(statearr_51139_51158[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51127 === (10)))
{var inst_51118 = (state_51126[(2)]);var state_51126__$1 = state_51126;var statearr_51140_51159 = state_51126__$1;(statearr_51140_51159[(2)] = inst_51118);
(statearr_51140_51159[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51127 === (8)))
{var inst_51107 = (state_51126[(9)]);var inst_51105 = (state_51126[(7)]);var inst_51098 = (state_51126[(10)]);var inst_51106 = (state_51126[(8)]);var inst_51110 = (function (){var c = inst_51107;var v = inst_51106;var vec__51103 = inst_51105;var cs = inst_51098;return ((function (c,v,vec__51103,cs,inst_51107,inst_51105,inst_51098,inst_51106,state_val_51127,c__22972__auto___51150,out){
return (function (p1__51041_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__51041_SHARP_);
});
;})(c,v,vec__51103,cs,inst_51107,inst_51105,inst_51098,inst_51106,state_val_51127,c__22972__auto___51150,out))
})();var inst_51111 = cljs.core.filterv(inst_51110,inst_51098);var inst_51098__$1 = inst_51111;var state_51126__$1 = (function (){var statearr_51141 = state_51126;(statearr_51141[(10)] = inst_51098__$1);
return statearr_51141;
})();var statearr_51142_51160 = state_51126__$1;(statearr_51142_51160[(2)] = null);
(statearr_51142_51160[(1)] = (2));
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
});})(c__22972__auto___51150,out))
;return ((function (switch__22957__auto__,c__22972__auto___51150,out){
return (function() {
var state_machine__22958__auto__ = null;
var state_machine__22958__auto____0 = (function (){var statearr_51146 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51146[(0)] = state_machine__22958__auto__);
(statearr_51146[(1)] = (1));
return statearr_51146;
});
var state_machine__22958__auto____1 = (function (state_51126){while(true){
var ret_value__22959__auto__ = (function (){try{while(true){
var result__22960__auto__ = switch__22957__auto__(state_51126);if(cljs.core.keyword_identical_QMARK_(result__22960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22960__auto__;
}
break;
}
}catch (e51147){if((e51147 instanceof Object))
{var ex__22961__auto__ = e51147;var statearr_51148_51161 = state_51126;(statearr_51148_51161[(5)] = ex__22961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51126);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e51147;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51162 = state_51126;
state_51126 = G__51162;
continue;
}
} else
{return ret_value__22959__auto__;
}
break;
}
});
state_machine__22958__auto__ = function(state_51126){
switch(arguments.length){
case 0:
return state_machine__22958__auto____0.call(this);
case 1:
return state_machine__22958__auto____1.call(this,state_51126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22958__auto____0;
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22958__auto____1;
return state_machine__22958__auto__;
})()
;})(switch__22957__auto__,c__22972__auto___51150,out))
})();var state__22974__auto__ = (function (){var statearr_51149 = (function (){return (f__22973__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22973__auto__.cljs$core$IFn$_invoke$arity$0() : f__22973__auto__.call(null));
})();(statearr_51149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22972__auto___51150);
return statearr_51149;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22974__auto__);
});})(c__22972__auto___51150,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22972__auto___51258 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22972__auto___51258,out){
return (function (){var f__22973__auto__ = (function (){var switch__22957__auto__ = ((function (c__22972__auto___51258,out){
return (function (state_51235){var state_val_51236 = (state_51235[(1)]);if((state_val_51236 === (7)))
{var inst_51217 = (state_51235[(7)]);var inst_51217__$1 = (state_51235[(2)]);var inst_51218 = (inst_51217__$1 == null);var inst_51219 = cljs.core.not(inst_51218);var state_51235__$1 = (function (){var statearr_51237 = state_51235;(statearr_51237[(7)] = inst_51217__$1);
return statearr_51237;
})();if(inst_51219)
{var statearr_51238_51259 = state_51235__$1;(statearr_51238_51259[(1)] = (8));
} else
{var statearr_51239_51260 = state_51235__$1;(statearr_51239_51260[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51236 === (1)))
{var inst_51212 = (0);var state_51235__$1 = (function (){var statearr_51240 = state_51235;(statearr_51240[(8)] = inst_51212);
return statearr_51240;
})();var statearr_51241_51261 = state_51235__$1;(statearr_51241_51261[(2)] = null);
(statearr_51241_51261[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51236 === (4)))
{var state_51235__$1 = state_51235;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51235__$1,(7),ch);
} else
{if((state_val_51236 === (6)))
{var inst_51230 = (state_51235[(2)]);var state_51235__$1 = state_51235;var statearr_51242_51262 = state_51235__$1;(statearr_51242_51262[(2)] = inst_51230);
(statearr_51242_51262[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51236 === (3)))
{var inst_51232 = (state_51235[(2)]);var inst_51233 = cljs.core.async.close_BANG_(out);var state_51235__$1 = (function (){var statearr_51243 = state_51235;(statearr_51243[(9)] = inst_51232);
return statearr_51243;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_51235__$1,inst_51233);
} else
{if((state_val_51236 === (2)))
{var inst_51212 = (state_51235[(8)]);var inst_51214 = (inst_51212 < n);var state_51235__$1 = state_51235;if(cljs.core.truth_(inst_51214))
{var statearr_51244_51263 = state_51235__$1;(statearr_51244_51263[(1)] = (4));
} else
{var statearr_51245_51264 = state_51235__$1;(statearr_51245_51264[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51236 === (11)))
{var inst_51212 = (state_51235[(8)]);var inst_51222 = (state_51235[(2)]);var inst_51223 = (inst_51212 + (1));var inst_51212__$1 = inst_51223;var state_51235__$1 = (function (){var statearr_51246 = state_51235;(statearr_51246[(8)] = inst_51212__$1);
(statearr_51246[(10)] = inst_51222);
return statearr_51246;
})();var statearr_51247_51265 = state_51235__$1;(statearr_51247_51265[(2)] = null);
(statearr_51247_51265[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51236 === (9)))
{var state_51235__$1 = state_51235;var statearr_51248_51266 = state_51235__$1;(statearr_51248_51266[(2)] = null);
(statearr_51248_51266[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51236 === (5)))
{var state_51235__$1 = state_51235;var statearr_51249_51267 = state_51235__$1;(statearr_51249_51267[(2)] = null);
(statearr_51249_51267[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51236 === (10)))
{var inst_51227 = (state_51235[(2)]);var state_51235__$1 = state_51235;var statearr_51250_51268 = state_51235__$1;(statearr_51250_51268[(2)] = inst_51227);
(statearr_51250_51268[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51236 === (8)))
{var inst_51217 = (state_51235[(7)]);var state_51235__$1 = state_51235;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51235__$1,(11),out,inst_51217);
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
});})(c__22972__auto___51258,out))
;return ((function (switch__22957__auto__,c__22972__auto___51258,out){
return (function() {
var state_machine__22958__auto__ = null;
var state_machine__22958__auto____0 = (function (){var statearr_51254 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_51254[(0)] = state_machine__22958__auto__);
(statearr_51254[(1)] = (1));
return statearr_51254;
});
var state_machine__22958__auto____1 = (function (state_51235){while(true){
var ret_value__22959__auto__ = (function (){try{while(true){
var result__22960__auto__ = switch__22957__auto__(state_51235);if(cljs.core.keyword_identical_QMARK_(result__22960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22960__auto__;
}
break;
}
}catch (e51255){if((e51255 instanceof Object))
{var ex__22961__auto__ = e51255;var statearr_51256_51269 = state_51235;(statearr_51256_51269[(5)] = ex__22961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51235);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e51255;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51270 = state_51235;
state_51235 = G__51270;
continue;
}
} else
{return ret_value__22959__auto__;
}
break;
}
});
state_machine__22958__auto__ = function(state_51235){
switch(arguments.length){
case 0:
return state_machine__22958__auto____0.call(this);
case 1:
return state_machine__22958__auto____1.call(this,state_51235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22958__auto____0;
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22958__auto____1;
return state_machine__22958__auto__;
})()
;})(switch__22957__auto__,c__22972__auto___51258,out))
})();var state__22974__auto__ = (function (){var statearr_51257 = (function (){return (f__22973__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22973__auto__.cljs$core$IFn$_invoke$arity$0() : f__22973__auto__.call(null));
})();(statearr_51257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22972__auto___51258);
return statearr_51257;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22974__auto__);
});})(c__22972__auto___51258,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22972__auto___51369 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22972__auto___51369,out){
return (function (){var f__22973__auto__ = (function (){var switch__22957__auto__ = ((function (c__22972__auto___51369,out){
return (function (state_51344){var state_val_51345 = (state_51344[(1)]);if((state_val_51345 === (7)))
{var inst_51339 = (state_51344[(2)]);var state_51344__$1 = state_51344;var statearr_51346_51370 = state_51344__$1;(statearr_51346_51370[(2)] = inst_51339);
(statearr_51346_51370[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51345 === (1)))
{var inst_51321 = null;var state_51344__$1 = (function (){var statearr_51347 = state_51344;(statearr_51347[(7)] = inst_51321);
return statearr_51347;
})();var statearr_51348_51371 = state_51344__$1;(statearr_51348_51371[(2)] = null);
(statearr_51348_51371[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51345 === (4)))
{var inst_51324 = (state_51344[(8)]);var inst_51324__$1 = (state_51344[(2)]);var inst_51325 = (inst_51324__$1 == null);var inst_51326 = cljs.core.not(inst_51325);var state_51344__$1 = (function (){var statearr_51349 = state_51344;(statearr_51349[(8)] = inst_51324__$1);
return statearr_51349;
})();if(inst_51326)
{var statearr_51350_51372 = state_51344__$1;(statearr_51350_51372[(1)] = (5));
} else
{var statearr_51351_51373 = state_51344__$1;(statearr_51351_51373[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51345 === (6)))
{var state_51344__$1 = state_51344;var statearr_51352_51374 = state_51344__$1;(statearr_51352_51374[(2)] = null);
(statearr_51352_51374[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51345 === (3)))
{var inst_51341 = (state_51344[(2)]);var inst_51342 = cljs.core.async.close_BANG_(out);var state_51344__$1 = (function (){var statearr_51353 = state_51344;(statearr_51353[(9)] = inst_51341);
return statearr_51353;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_51344__$1,inst_51342);
} else
{if((state_val_51345 === (2)))
{var state_51344__$1 = state_51344;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51344__$1,(4),ch);
} else
{if((state_val_51345 === (11)))
{var inst_51324 = (state_51344[(8)]);var inst_51333 = (state_51344[(2)]);var inst_51321 = inst_51324;var state_51344__$1 = (function (){var statearr_51354 = state_51344;(statearr_51354[(10)] = inst_51333);
(statearr_51354[(7)] = inst_51321);
return statearr_51354;
})();var statearr_51355_51375 = state_51344__$1;(statearr_51355_51375[(2)] = null);
(statearr_51355_51375[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51345 === (9)))
{var inst_51324 = (state_51344[(8)]);var state_51344__$1 = state_51344;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51344__$1,(11),out,inst_51324);
} else
{if((state_val_51345 === (5)))
{var inst_51324 = (state_51344[(8)]);var inst_51321 = (state_51344[(7)]);var inst_51328 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51324,inst_51321);var state_51344__$1 = state_51344;if(inst_51328)
{var statearr_51357_51376 = state_51344__$1;(statearr_51357_51376[(1)] = (8));
} else
{var statearr_51358_51377 = state_51344__$1;(statearr_51358_51377[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51345 === (10)))
{var inst_51336 = (state_51344[(2)]);var state_51344__$1 = state_51344;var statearr_51359_51378 = state_51344__$1;(statearr_51359_51378[(2)] = inst_51336);
(statearr_51359_51378[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51345 === (8)))
{var inst_51321 = (state_51344[(7)]);var tmp51356 = inst_51321;var inst_51321__$1 = tmp51356;var state_51344__$1 = (function (){var statearr_51360 = state_51344;(statearr_51360[(7)] = inst_51321__$1);
return statearr_51360;
})();var statearr_51361_51379 = state_51344__$1;(statearr_51361_51379[(2)] = null);
(statearr_51361_51379[(1)] = (2));
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
});})(c__22972__auto___51369,out))
;return ((function (switch__22957__auto__,c__22972__auto___51369,out){
return (function() {
var state_machine__22958__auto__ = null;
var state_machine__22958__auto____0 = (function (){var statearr_51365 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_51365[(0)] = state_machine__22958__auto__);
(statearr_51365[(1)] = (1));
return statearr_51365;
});
var state_machine__22958__auto____1 = (function (state_51344){while(true){
var ret_value__22959__auto__ = (function (){try{while(true){
var result__22960__auto__ = switch__22957__auto__(state_51344);if(cljs.core.keyword_identical_QMARK_(result__22960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22960__auto__;
}
break;
}
}catch (e51366){if((e51366 instanceof Object))
{var ex__22961__auto__ = e51366;var statearr_51367_51380 = state_51344;(statearr_51367_51380[(5)] = ex__22961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51344);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e51366;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51381 = state_51344;
state_51344 = G__51381;
continue;
}
} else
{return ret_value__22959__auto__;
}
break;
}
});
state_machine__22958__auto__ = function(state_51344){
switch(arguments.length){
case 0:
return state_machine__22958__auto____0.call(this);
case 1:
return state_machine__22958__auto____1.call(this,state_51344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22958__auto____0;
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22958__auto____1;
return state_machine__22958__auto__;
})()
;})(switch__22957__auto__,c__22972__auto___51369,out))
})();var state__22974__auto__ = (function (){var statearr_51368 = (function (){return (f__22973__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22973__auto__.cljs$core$IFn$_invoke$arity$0() : f__22973__auto__.call(null));
})();(statearr_51368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22972__auto___51369);
return statearr_51368;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22974__auto__);
});})(c__22972__auto___51369,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22972__auto___51519 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22972__auto___51519,out){
return (function (){var f__22973__auto__ = (function (){var switch__22957__auto__ = ((function (c__22972__auto___51519,out){
return (function (state_51489){var state_val_51490 = (state_51489[(1)]);if((state_val_51490 === (7)))
{var inst_51485 = (state_51489[(2)]);var state_51489__$1 = state_51489;var statearr_51491_51520 = state_51489__$1;(statearr_51491_51520[(2)] = inst_51485);
(statearr_51491_51520[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51490 === (1)))
{var inst_51452 = (new Array(n));var inst_51453 = inst_51452;var inst_51454 = (0);var state_51489__$1 = (function (){var statearr_51492 = state_51489;(statearr_51492[(7)] = inst_51453);
(statearr_51492[(8)] = inst_51454);
return statearr_51492;
})();var statearr_51493_51521 = state_51489__$1;(statearr_51493_51521[(2)] = null);
(statearr_51493_51521[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51490 === (4)))
{var inst_51457 = (state_51489[(9)]);var inst_51457__$1 = (state_51489[(2)]);var inst_51458 = (inst_51457__$1 == null);var inst_51459 = cljs.core.not(inst_51458);var state_51489__$1 = (function (){var statearr_51494 = state_51489;(statearr_51494[(9)] = inst_51457__$1);
return statearr_51494;
})();if(inst_51459)
{var statearr_51495_51522 = state_51489__$1;(statearr_51495_51522[(1)] = (5));
} else
{var statearr_51496_51523 = state_51489__$1;(statearr_51496_51523[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51490 === (15)))
{var inst_51479 = (state_51489[(2)]);var state_51489__$1 = state_51489;var statearr_51497_51524 = state_51489__$1;(statearr_51497_51524[(2)] = inst_51479);
(statearr_51497_51524[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51490 === (13)))
{var state_51489__$1 = state_51489;var statearr_51498_51525 = state_51489__$1;(statearr_51498_51525[(2)] = null);
(statearr_51498_51525[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51490 === (6)))
{var inst_51454 = (state_51489[(8)]);var inst_51475 = (inst_51454 > (0));var state_51489__$1 = state_51489;if(cljs.core.truth_(inst_51475))
{var statearr_51499_51526 = state_51489__$1;(statearr_51499_51526[(1)] = (12));
} else
{var statearr_51500_51527 = state_51489__$1;(statearr_51500_51527[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51490 === (3)))
{var inst_51487 = (state_51489[(2)]);var state_51489__$1 = state_51489;return cljs.core.async.impl.ioc_helpers.return_chan(state_51489__$1,inst_51487);
} else
{if((state_val_51490 === (12)))
{var inst_51453 = (state_51489[(7)]);var inst_51477 = cljs.core.vec(inst_51453);var state_51489__$1 = state_51489;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51489__$1,(15),out,inst_51477);
} else
{if((state_val_51490 === (2)))
{var state_51489__$1 = state_51489;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51489__$1,(4),ch);
} else
{if((state_val_51490 === (11)))
{var inst_51469 = (state_51489[(2)]);var inst_51470 = (new Array(n));var inst_51453 = inst_51470;var inst_51454 = (0);var state_51489__$1 = (function (){var statearr_51501 = state_51489;(statearr_51501[(7)] = inst_51453);
(statearr_51501[(8)] = inst_51454);
(statearr_51501[(10)] = inst_51469);
return statearr_51501;
})();var statearr_51502_51528 = state_51489__$1;(statearr_51502_51528[(2)] = null);
(statearr_51502_51528[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51490 === (9)))
{var inst_51453 = (state_51489[(7)]);var inst_51467 = cljs.core.vec(inst_51453);var state_51489__$1 = state_51489;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51489__$1,(11),out,inst_51467);
} else
{if((state_val_51490 === (5)))
{var inst_51453 = (state_51489[(7)]);var inst_51454 = (state_51489[(8)]);var inst_51457 = (state_51489[(9)]);var inst_51462 = (state_51489[(11)]);var inst_51461 = (inst_51453[inst_51454] = inst_51457);var inst_51462__$1 = (inst_51454 + (1));var inst_51463 = (inst_51462__$1 < n);var state_51489__$1 = (function (){var statearr_51503 = state_51489;(statearr_51503[(12)] = inst_51461);
(statearr_51503[(11)] = inst_51462__$1);
return statearr_51503;
})();if(cljs.core.truth_(inst_51463))
{var statearr_51504_51529 = state_51489__$1;(statearr_51504_51529[(1)] = (8));
} else
{var statearr_51505_51530 = state_51489__$1;(statearr_51505_51530[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51490 === (14)))
{var inst_51482 = (state_51489[(2)]);var inst_51483 = cljs.core.async.close_BANG_(out);var state_51489__$1 = (function (){var statearr_51507 = state_51489;(statearr_51507[(13)] = inst_51482);
return statearr_51507;
})();var statearr_51508_51531 = state_51489__$1;(statearr_51508_51531[(2)] = inst_51483);
(statearr_51508_51531[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51490 === (10)))
{var inst_51473 = (state_51489[(2)]);var state_51489__$1 = state_51489;var statearr_51509_51532 = state_51489__$1;(statearr_51509_51532[(2)] = inst_51473);
(statearr_51509_51532[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51490 === (8)))
{var inst_51453 = (state_51489[(7)]);var inst_51462 = (state_51489[(11)]);var tmp51506 = inst_51453;var inst_51453__$1 = tmp51506;var inst_51454 = inst_51462;var state_51489__$1 = (function (){var statearr_51510 = state_51489;(statearr_51510[(7)] = inst_51453__$1);
(statearr_51510[(8)] = inst_51454);
return statearr_51510;
})();var statearr_51511_51533 = state_51489__$1;(statearr_51511_51533[(2)] = null);
(statearr_51511_51533[(1)] = (2));
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
});})(c__22972__auto___51519,out))
;return ((function (switch__22957__auto__,c__22972__auto___51519,out){
return (function() {
var state_machine__22958__auto__ = null;
var state_machine__22958__auto____0 = (function (){var statearr_51515 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51515[(0)] = state_machine__22958__auto__);
(statearr_51515[(1)] = (1));
return statearr_51515;
});
var state_machine__22958__auto____1 = (function (state_51489){while(true){
var ret_value__22959__auto__ = (function (){try{while(true){
var result__22960__auto__ = switch__22957__auto__(state_51489);if(cljs.core.keyword_identical_QMARK_(result__22960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22960__auto__;
}
break;
}
}catch (e51516){if((e51516 instanceof Object))
{var ex__22961__auto__ = e51516;var statearr_51517_51534 = state_51489;(statearr_51517_51534[(5)] = ex__22961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51489);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e51516;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51535 = state_51489;
state_51489 = G__51535;
continue;
}
} else
{return ret_value__22959__auto__;
}
break;
}
});
state_machine__22958__auto__ = function(state_51489){
switch(arguments.length){
case 0:
return state_machine__22958__auto____0.call(this);
case 1:
return state_machine__22958__auto____1.call(this,state_51489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22958__auto____0;
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22958__auto____1;
return state_machine__22958__auto__;
})()
;})(switch__22957__auto__,c__22972__auto___51519,out))
})();var state__22974__auto__ = (function (){var statearr_51518 = (function (){return (f__22973__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22973__auto__.cljs$core$IFn$_invoke$arity$0() : f__22973__auto__.call(null));
})();(statearr_51518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22972__auto___51519);
return statearr_51518;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22974__auto__);
});})(c__22972__auto___51519,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22972__auto___51683 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22972__auto___51683,out){
return (function (){var f__22973__auto__ = (function (){var switch__22957__auto__ = ((function (c__22972__auto___51683,out){
return (function (state_51652){var state_val_51653 = (state_51652[(1)]);if((state_val_51653 === (7)))
{var inst_51648 = (state_51652[(2)]);var state_51652__$1 = state_51652;var statearr_51654_51684 = state_51652__$1;(statearr_51654_51684[(2)] = inst_51648);
(statearr_51654_51684[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51653 === (1)))
{var inst_51611 = [];var inst_51612 = inst_51611;var inst_51613 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_51652__$1 = (function (){var statearr_51655 = state_51652;(statearr_51655[(7)] = inst_51612);
(statearr_51655[(8)] = inst_51613);
return statearr_51655;
})();var statearr_51656_51685 = state_51652__$1;(statearr_51656_51685[(2)] = null);
(statearr_51656_51685[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51653 === (4)))
{var inst_51616 = (state_51652[(9)]);var inst_51616__$1 = (state_51652[(2)]);var inst_51617 = (inst_51616__$1 == null);var inst_51618 = cljs.core.not(inst_51617);var state_51652__$1 = (function (){var statearr_51657 = state_51652;(statearr_51657[(9)] = inst_51616__$1);
return statearr_51657;
})();if(inst_51618)
{var statearr_51658_51686 = state_51652__$1;(statearr_51658_51686[(1)] = (5));
} else
{var statearr_51659_51687 = state_51652__$1;(statearr_51659_51687[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51653 === (15)))
{var inst_51642 = (state_51652[(2)]);var state_51652__$1 = state_51652;var statearr_51660_51688 = state_51652__$1;(statearr_51660_51688[(2)] = inst_51642);
(statearr_51660_51688[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51653 === (13)))
{var state_51652__$1 = state_51652;var statearr_51661_51689 = state_51652__$1;(statearr_51661_51689[(2)] = null);
(statearr_51661_51689[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51653 === (6)))
{var inst_51612 = (state_51652[(7)]);var inst_51637 = inst_51612.length;var inst_51638 = (inst_51637 > (0));var state_51652__$1 = state_51652;if(cljs.core.truth_(inst_51638))
{var statearr_51662_51690 = state_51652__$1;(statearr_51662_51690[(1)] = (12));
} else
{var statearr_51663_51691 = state_51652__$1;(statearr_51663_51691[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51653 === (3)))
{var inst_51650 = (state_51652[(2)]);var state_51652__$1 = state_51652;return cljs.core.async.impl.ioc_helpers.return_chan(state_51652__$1,inst_51650);
} else
{if((state_val_51653 === (12)))
{var inst_51612 = (state_51652[(7)]);var inst_51640 = cljs.core.vec(inst_51612);var state_51652__$1 = state_51652;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51652__$1,(15),out,inst_51640);
} else
{if((state_val_51653 === (2)))
{var state_51652__$1 = state_51652;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51652__$1,(4),ch);
} else
{if((state_val_51653 === (11)))
{var inst_51620 = (state_51652[(10)]);var inst_51616 = (state_51652[(9)]);var inst_51630 = (state_51652[(2)]);var inst_51631 = [];var inst_51632 = inst_51631.push(inst_51616);var inst_51612 = inst_51631;var inst_51613 = inst_51620;var state_51652__$1 = (function (){var statearr_51664 = state_51652;(statearr_51664[(11)] = inst_51632);
(statearr_51664[(7)] = inst_51612);
(statearr_51664[(8)] = inst_51613);
(statearr_51664[(12)] = inst_51630);
return statearr_51664;
})();var statearr_51665_51692 = state_51652__$1;(statearr_51665_51692[(2)] = null);
(statearr_51665_51692[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51653 === (9)))
{var inst_51612 = (state_51652[(7)]);var inst_51628 = cljs.core.vec(inst_51612);var state_51652__$1 = state_51652;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51652__$1,(11),out,inst_51628);
} else
{if((state_val_51653 === (5)))
{var inst_51620 = (state_51652[(10)]);var inst_51613 = (state_51652[(8)]);var inst_51616 = (state_51652[(9)]);var inst_51620__$1 = (function (){var G__51666 = inst_51616;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__51666) : f.call(null,G__51666));
})();var inst_51621 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51620__$1,inst_51613);var inst_51622 = cljs.core.keyword_identical_QMARK_(inst_51613,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_51623 = (inst_51621) || (inst_51622);var state_51652__$1 = (function (){var statearr_51667 = state_51652;(statearr_51667[(10)] = inst_51620__$1);
return statearr_51667;
})();if(cljs.core.truth_(inst_51623))
{var statearr_51668_51693 = state_51652__$1;(statearr_51668_51693[(1)] = (8));
} else
{var statearr_51669_51694 = state_51652__$1;(statearr_51669_51694[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51653 === (14)))
{var inst_51645 = (state_51652[(2)]);var inst_51646 = cljs.core.async.close_BANG_(out);var state_51652__$1 = (function (){var statearr_51671 = state_51652;(statearr_51671[(13)] = inst_51645);
return statearr_51671;
})();var statearr_51672_51695 = state_51652__$1;(statearr_51672_51695[(2)] = inst_51646);
(statearr_51672_51695[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51653 === (10)))
{var inst_51635 = (state_51652[(2)]);var state_51652__$1 = state_51652;var statearr_51673_51696 = state_51652__$1;(statearr_51673_51696[(2)] = inst_51635);
(statearr_51673_51696[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51653 === (8)))
{var inst_51620 = (state_51652[(10)]);var inst_51612 = (state_51652[(7)]);var inst_51616 = (state_51652[(9)]);var inst_51625 = inst_51612.push(inst_51616);var tmp51670 = inst_51612;var inst_51612__$1 = tmp51670;var inst_51613 = inst_51620;var state_51652__$1 = (function (){var statearr_51674 = state_51652;(statearr_51674[(14)] = inst_51625);
(statearr_51674[(7)] = inst_51612__$1);
(statearr_51674[(8)] = inst_51613);
return statearr_51674;
})();var statearr_51675_51697 = state_51652__$1;(statearr_51675_51697[(2)] = null);
(statearr_51675_51697[(1)] = (2));
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
});})(c__22972__auto___51683,out))
;return ((function (switch__22957__auto__,c__22972__auto___51683,out){
return (function() {
var state_machine__22958__auto__ = null;
var state_machine__22958__auto____0 = (function (){var statearr_51679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51679[(0)] = state_machine__22958__auto__);
(statearr_51679[(1)] = (1));
return statearr_51679;
});
var state_machine__22958__auto____1 = (function (state_51652){while(true){
var ret_value__22959__auto__ = (function (){try{while(true){
var result__22960__auto__ = switch__22957__auto__(state_51652);if(cljs.core.keyword_identical_QMARK_(result__22960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22960__auto__;
}
break;
}
}catch (e51680){if((e51680 instanceof Object))
{var ex__22961__auto__ = e51680;var statearr_51681_51698 = state_51652;(statearr_51681_51698[(5)] = ex__22961__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51652);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e51680;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51699 = state_51652;
state_51652 = G__51699;
continue;
}
} else
{return ret_value__22959__auto__;
}
break;
}
});
state_machine__22958__auto__ = function(state_51652){
switch(arguments.length){
case 0:
return state_machine__22958__auto____0.call(this);
case 1:
return state_machine__22958__auto____1.call(this,state_51652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22958__auto____0;
state_machine__22958__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22958__auto____1;
return state_machine__22958__auto__;
})()
;})(switch__22957__auto__,c__22972__auto___51683,out))
})();var state__22974__auto__ = (function (){var statearr_51682 = (function (){return (f__22973__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22973__auto__.cljs$core$IFn$_invoke$arity$0() : f__22973__auto__.call(null));
})();(statearr_51682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22972__auto___51683);
return statearr_51682;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22974__auto__);
});})(c__22972__auto___51683,out))
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