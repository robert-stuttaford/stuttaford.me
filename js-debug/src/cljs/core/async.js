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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t67871 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t67871 = (function (f,fn_handler,meta67872){
this.f = f;
this.fn_handler = fn_handler;
this.meta67872 = meta67872;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t67871.cljs$lang$type = true;
cljs.core.async.t67871.cljs$lang$ctorStr = "cljs.core.async/t67871";
cljs.core.async.t67871.cljs$lang$ctorPrWriter = (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"cljs.core.async/t67871");
});
cljs.core.async.t67871.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t67871.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t67871.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t67871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67873){var self__ = this;
var _67873__$1 = this;return self__.meta67872;
});
cljs.core.async.t67871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67873,meta67872__$1){var self__ = this;
var _67873__$1 = this;return (new cljs.core.async.t67871(self__.f,self__.fn_handler,meta67872__$1));
});
cljs.core.async.__GT_t67871 = (function __GT_t67871(f__$1,fn_handler__$1,meta67872){return (new cljs.core.async.t67871(f__$1,fn_handler__$1,meta67872));
});
}
return (new cljs.core.async.t67871(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__67875 = buff;if(G__67875)
{var bit__20968__auto__ = null;if(cljs.core.truth_((function (){var or__19711__auto__ = bit__20968__auto__;if(cljs.core.truth_(or__19711__auto__))
{return or__19711__auto__;
} else
{return G__67875.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__67875.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__67875);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__67875);
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
{var val_67886 = (function (){var G__67883 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67883) : cljs.core.deref.call(null,G__67883));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__67884_67887 = val_67886;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__67884_67887) : fn1.call(null,G__67884_67887));
} else
{cljs.core.async.impl.dispatch.run(((function (val_67886,ret){
return (function (){var G__67885 = val_67886;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__67885) : fn1.call(null,G__67885));
});})(val_67886,ret))
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__19697__auto__ = ret;if(cljs.core.truth_(and__19697__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__19697__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__21258__auto___67895 = n;var x_67896 = (0);while(true){
if((x_67896 < n__21258__auto___67895))
{(a[x_67896] = (0));
{
var G__67897 = (x_67896 + (1));
x_67896 = G__67897;
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
var G__67898 = (i + (1));
i = G__67898;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__67906 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__67906) : cljs.core.atom.call(null,G__67906));
})();if(typeof cljs.core.async.t67907 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t67907 = (function (flag,alt_flag,meta67908){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta67908 = meta67908;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t67907.cljs$lang$type = true;
cljs.core.async.t67907.cljs$lang$ctorStr = "cljs.core.async/t67907";
cljs.core.async.t67907.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"cljs.core.async/t67907");
});})(flag))
;
cljs.core.async.t67907.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t67907.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__67910 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67910) : cljs.core.deref.call(null,G__67910));
});})(flag))
;
cljs.core.async.t67907.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__67911_67913 = self__.flag;var G__67912_67914 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__67911_67913,G__67912_67914) : cljs.core.reset_BANG_.call(null,G__67911_67913,G__67912_67914));
return true;
});})(flag))
;
cljs.core.async.t67907.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_67909){var self__ = this;
var _67909__$1 = this;return self__.meta67908;
});})(flag))
;
cljs.core.async.t67907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_67909,meta67908__$1){var self__ = this;
var _67909__$1 = this;return (new cljs.core.async.t67907(self__.flag,self__.alt_flag,meta67908__$1));
});})(flag))
;
cljs.core.async.__GT_t67907 = ((function (flag){
return (function __GT_t67907(flag__$1,alt_flag__$1,meta67908){return (new cljs.core.async.t67907(flag__$1,alt_flag__$1,meta67908));
});})(flag))
;
}
return (new cljs.core.async.t67907(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t67918 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t67918 = (function (cb,flag,alt_handler,meta67919){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta67919 = meta67919;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t67918.cljs$lang$type = true;
cljs.core.async.t67918.cljs$lang$ctorStr = "cljs.core.async/t67918";
cljs.core.async.t67918.cljs$lang$ctorPrWriter = (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"cljs.core.async/t67918");
});
cljs.core.async.t67918.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t67918.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t67918.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t67918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67920){var self__ = this;
var _67920__$1 = this;return self__.meta67919;
});
cljs.core.async.t67918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67920,meta67919__$1){var self__ = this;
var _67920__$1 = this;return (new cljs.core.async.t67918(self__.cb,self__.flag,self__.alt_handler,meta67919__$1));
});
cljs.core.async.__GT_t67918 = (function __GT_t67918(cb__$1,flag__$1,alt_handler__$1,meta67919){return (new cljs.core.async.t67918(cb__$1,flag__$1,alt_handler__$1,meta67919));
});
}
return (new cljs.core.async.t67918(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__67927 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__67927) : port.call(null,G__67927));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__67928 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__67928) : port.call(null,G__67928));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){var G__67929 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__67929) : fret.call(null,G__67929));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__67921_SHARP_){var G__67930 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__67921_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__67930) : fret.call(null,G__67930));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__67931 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67931) : cljs.core.deref.call(null,G__67931));
})(),(function (){var or__19711__auto__ = wport;if(cljs.core.truth_(or__19711__auto__))
{return or__19711__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__67932 = (i + (1));
i = G__67932;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__19711__auto__ = ret;if(cljs.core.truth_(or__19711__auto__))
{return or__19711__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__19697__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__19697__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__19697__auto__;
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
var alts_BANG___delegate = function (ports,p__67933){var map__67935 = p__67933;var map__67935__$1 = ((cljs.core.seq_QMARK_(map__67935))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67935):map__67935);var opts = map__67935__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

};
var alts_BANG_ = function (ports,var_args){
var p__67933 = null;if (arguments.length > 1) {
  p__67933 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__67933);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__67936){
var ports = cljs.core.first(arglist__67936);
var p__67933 = cljs.core.rest(arglist__67936);
return alts_BANG___delegate(ports,p__67933);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t67950 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t67950 = (function (ch,f,map_LT_,meta67951){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta67951 = meta67951;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t67950.cljs$lang$type = true;
cljs.core.async.t67950.cljs$lang$ctorStr = "cljs.core.async/t67950";
cljs.core.async.t67950.cljs$lang$ctorPrWriter = (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"cljs.core.async/t67950");
});
cljs.core.async.t67950.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t67950.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t67950.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t67950.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t67953 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t67953 = (function (fn1,_,meta67951,ch,f,map_LT_,meta67954){
this.fn1 = fn1;
this._ = _;
this.meta67951 = meta67951;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta67954 = meta67954;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t67953.cljs$lang$type = true;
cljs.core.async.t67953.cljs$lang$ctorStr = "cljs.core.async/t67953";
cljs.core.async.t67953.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"cljs.core.async/t67953");
});})(___$1))
;
cljs.core.async.t67953.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t67953.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t67953.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var G__67956 = self__.fn1;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(G__67956) : cljs.core.async.impl.protocols.lock_id.call(null,G__67956));
});})(___$1))
;
cljs.core.async.t67953.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__67937_SHARP_){var G__67957 = (((p1__67937_SHARP_ == null))?null:(function (){var G__67958 = p1__67937_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__67958) : self__.f.call(null,G__67958));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__67957) : f1.call(null,G__67957));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t67953.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_67955){var self__ = this;
var _67955__$1 = this;return self__.meta67954;
});})(___$1))
;
cljs.core.async.t67953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_67955,meta67954__$1){var self__ = this;
var _67955__$1 = this;return (new cljs.core.async.t67953(self__.fn1,self__._,self__.meta67951,self__.ch,self__.f,self__.map_LT_,meta67954__$1));
});})(___$1))
;
cljs.core.async.__GT_t67953 = ((function (___$1){
return (function __GT_t67953(fn1__$1,___$2,meta67951__$1,ch__$2,f__$2,map_LT___$2,meta67954){return (new cljs.core.async.t67953(fn1__$1,___$2,meta67951__$1,ch__$2,f__$2,map_LT___$2,meta67954));
});})(___$1))
;
}
return (new cljs.core.async.t67953(fn1,___$1,self__.meta67951,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__19697__auto__ = ret;if(cljs.core.truth_(and__19697__auto__))
{return !(((function (){var G__67959 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67959) : cljs.core.deref.call(null,G__67959));
})() == null));
} else
{return and__19697__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__67960 = (function (){var G__67961 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67961) : cljs.core.deref.call(null,G__67961));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__67960) : self__.f.call(null,G__67960));
})());
} else
{return ret;
}
});
cljs.core.async.t67950.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t67950.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t67950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67952){var self__ = this;
var _67952__$1 = this;return self__.meta67951;
});
cljs.core.async.t67950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67952,meta67951__$1){var self__ = this;
var _67952__$1 = this;return (new cljs.core.async.t67950(self__.ch,self__.f,self__.map_LT_,meta67951__$1));
});
cljs.core.async.__GT_t67950 = (function __GT_t67950(ch__$1,f__$1,map_LT___$1,meta67951){return (new cljs.core.async.t67950(ch__$1,f__$1,map_LT___$1,meta67951));
});
}
return (new cljs.core.async.t67950(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t67966 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t67966 = (function (ch,f,map_GT_,meta67967){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta67967 = meta67967;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t67966.cljs$lang$type = true;
cljs.core.async.t67966.cljs$lang$ctorStr = "cljs.core.async/t67966";
cljs.core.async.t67966.cljs$lang$ctorPrWriter = (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"cljs.core.async/t67966");
});
cljs.core.async.t67966.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t67966.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__67969 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__67969) : self__.f.call(null,G__67969));
})(),fn0);
});
cljs.core.async.t67966.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t67966.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t67966.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t67966.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t67966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67968){var self__ = this;
var _67968__$1 = this;return self__.meta67967;
});
cljs.core.async.t67966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67968,meta67967__$1){var self__ = this;
var _67968__$1 = this;return (new cljs.core.async.t67966(self__.ch,self__.f,self__.map_GT_,meta67967__$1));
});
cljs.core.async.__GT_t67966 = (function __GT_t67966(ch__$1,f__$1,map_GT___$1,meta67967){return (new cljs.core.async.t67966(ch__$1,f__$1,map_GT___$1,meta67967));
});
}
return (new cljs.core.async.t67966(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t67974 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t67974 = (function (ch,p,filter_GT_,meta67975){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta67975 = meta67975;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t67974.cljs$lang$type = true;
cljs.core.async.t67974.cljs$lang$ctorStr = "cljs.core.async/t67974";
cljs.core.async.t67974.cljs$lang$ctorPrWriter = (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"cljs.core.async/t67974");
});
cljs.core.async.t67974.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t67974.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__67977 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__67977) : self__.p.call(null,G__67977));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t67974.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t67974.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t67974.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t67974.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t67974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67976){var self__ = this;
var _67976__$1 = this;return self__.meta67975;
});
cljs.core.async.t67974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67976,meta67975__$1){var self__ = this;
var _67976__$1 = this;return (new cljs.core.async.t67974(self__.ch,self__.p,self__.filter_GT_,meta67975__$1));
});
cljs.core.async.__GT_t67974 = (function __GT_t67974(ch__$1,p__$1,filter_GT___$1,meta67975){return (new cljs.core.async.t67974(ch__$1,p__$1,filter_GT___$1,meta67975));
});
}
return (new cljs.core.async.t67974(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__23127__auto___68065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23127__auto___68065,out){
return (function (){var f__23128__auto__ = (function (){var switch__23112__auto__ = ((function (c__23127__auto___68065,out){
return (function (state_68043){var state_val_68044 = (state_68043[(1)]);if((state_val_68044 === (7)))
{var inst_68039 = (state_68043[(2)]);var state_68043__$1 = state_68043;var statearr_68045_68066 = state_68043__$1;(statearr_68045_68066[(2)] = inst_68039);
(statearr_68045_68066[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68044 === (1)))
{var state_68043__$1 = state_68043;var statearr_68046_68067 = state_68043__$1;(statearr_68046_68067[(2)] = null);
(statearr_68046_68067[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68044 === (4)))
{var inst_68025 = (state_68043[(7)]);var inst_68025__$1 = (state_68043[(2)]);var inst_68026 = (inst_68025__$1 == null);var state_68043__$1 = (function (){var statearr_68047 = state_68043;(statearr_68047[(7)] = inst_68025__$1);
return statearr_68047;
})();if(cljs.core.truth_(inst_68026))
{var statearr_68048_68068 = state_68043__$1;(statearr_68048_68068[(1)] = (5));
} else
{var statearr_68049_68069 = state_68043__$1;(statearr_68049_68069[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68044 === (6)))
{var inst_68025 = (state_68043[(7)]);var inst_68030 = (function (){var G__68050 = inst_68025;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__68050) : p.call(null,G__68050));
})();var state_68043__$1 = state_68043;if(cljs.core.truth_(inst_68030))
{var statearr_68051_68070 = state_68043__$1;(statearr_68051_68070[(1)] = (8));
} else
{var statearr_68052_68071 = state_68043__$1;(statearr_68052_68071[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68044 === (3)))
{var inst_68041 = (state_68043[(2)]);var state_68043__$1 = state_68043;return cljs.core.async.impl.ioc_helpers.return_chan(state_68043__$1,inst_68041);
} else
{if((state_val_68044 === (2)))
{var state_68043__$1 = state_68043;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68043__$1,(4),ch);
} else
{if((state_val_68044 === (11)))
{var inst_68033 = (state_68043[(2)]);var state_68043__$1 = state_68043;var statearr_68053_68072 = state_68043__$1;(statearr_68053_68072[(2)] = inst_68033);
(statearr_68053_68072[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68044 === (9)))
{var state_68043__$1 = state_68043;var statearr_68054_68073 = state_68043__$1;(statearr_68054_68073[(2)] = null);
(statearr_68054_68073[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68044 === (5)))
{var inst_68028 = cljs.core.async.close_BANG_(out);var state_68043__$1 = state_68043;var statearr_68055_68074 = state_68043__$1;(statearr_68055_68074[(2)] = inst_68028);
(statearr_68055_68074[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68044 === (10)))
{var inst_68036 = (state_68043[(2)]);var state_68043__$1 = (function (){var statearr_68056 = state_68043;(statearr_68056[(8)] = inst_68036);
return statearr_68056;
})();var statearr_68057_68075 = state_68043__$1;(statearr_68057_68075[(2)] = null);
(statearr_68057_68075[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68044 === (8)))
{var inst_68025 = (state_68043[(7)]);var state_68043__$1 = state_68043;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68043__$1,(11),out,inst_68025);
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
});})(c__23127__auto___68065,out))
;return ((function (switch__23112__auto__,c__23127__auto___68065,out){
return (function() {
var state_machine__23113__auto__ = null;
var state_machine__23113__auto____0 = (function (){var statearr_68061 = [null,null,null,null,null,null,null,null,null];(statearr_68061[(0)] = state_machine__23113__auto__);
(statearr_68061[(1)] = (1));
return statearr_68061;
});
var state_machine__23113__auto____1 = (function (state_68043){while(true){
var ret_value__23114__auto__ = (function (){try{while(true){
var result__23115__auto__ = switch__23112__auto__(state_68043);if(cljs.core.keyword_identical_QMARK_(result__23115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__23115__auto__;
}
break;
}
}catch (e68062){if((e68062 instanceof Object))
{var ex__23116__auto__ = e68062;var statearr_68063_68076 = state_68043;(statearr_68063_68076[(5)] = ex__23116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_68043);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e68062;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__23114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__68077 = state_68043;
state_68043 = G__68077;
continue;
}
} else
{return ret_value__23114__auto__;
}
break;
}
});
state_machine__23113__auto__ = function(state_68043){
switch(arguments.length){
case 0:
return state_machine__23113__auto____0.call(this);
case 1:
return state_machine__23113__auto____1.call(this,state_68043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23113__auto____0;
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23113__auto____1;
return state_machine__23113__auto__;
})()
;})(switch__23112__auto__,c__23127__auto___68065,out))
})();var state__23129__auto__ = (function (){var statearr_68064 = (function (){return (f__23128__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23128__auto__.cljs$core$IFn$_invoke$arity$0() : f__23128__auto__.call(null));
})();(statearr_68064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23127__auto___68065);
return statearr_68064;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23129__auto__);
});})(c__23127__auto___68065,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__23127__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23127__auto__){
return (function (){var f__23128__auto__ = (function (){var switch__23112__auto__ = ((function (c__23127__auto__){
return (function (state_68233){var state_val_68234 = (state_68233[(1)]);if((state_val_68234 === (7)))
{var inst_68229 = (state_68233[(2)]);var state_68233__$1 = state_68233;var statearr_68235_68273 = state_68233__$1;(statearr_68235_68273[(2)] = inst_68229);
(statearr_68235_68273[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68234 === (20)))
{var inst_68204 = (state_68233[(7)]);var inst_68215 = (state_68233[(2)]);var inst_68216 = cljs.core.next(inst_68204);var inst_68190 = inst_68216;var inst_68191 = null;var inst_68192 = (0);var inst_68193 = (0);var state_68233__$1 = (function (){var statearr_68236 = state_68233;(statearr_68236[(8)] = inst_68191);
(statearr_68236[(9)] = inst_68190);
(statearr_68236[(10)] = inst_68193);
(statearr_68236[(11)] = inst_68192);
(statearr_68236[(12)] = inst_68215);
return statearr_68236;
})();var statearr_68237_68274 = state_68233__$1;(statearr_68237_68274[(2)] = null);
(statearr_68237_68274[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68234 === (1)))
{var state_68233__$1 = state_68233;var statearr_68238_68275 = state_68233__$1;(statearr_68238_68275[(2)] = null);
(statearr_68238_68275[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68234 === (4)))
{var inst_68179 = (state_68233[(13)]);var inst_68179__$1 = (state_68233[(2)]);var inst_68180 = (inst_68179__$1 == null);var state_68233__$1 = (function (){var statearr_68242 = state_68233;(statearr_68242[(13)] = inst_68179__$1);
return statearr_68242;
})();if(cljs.core.truth_(inst_68180))
{var statearr_68243_68276 = state_68233__$1;(statearr_68243_68276[(1)] = (5));
} else
{var statearr_68244_68277 = state_68233__$1;(statearr_68244_68277[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68234 === (15)))
{var state_68233__$1 = state_68233;var statearr_68245_68278 = state_68233__$1;(statearr_68245_68278[(2)] = null);
(statearr_68245_68278[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68234 === (13)))
{var inst_68191 = (state_68233[(8)]);var inst_68190 = (state_68233[(9)]);var inst_68193 = (state_68233[(10)]);var inst_68192 = (state_68233[(11)]);var inst_68200 = (state_68233[(2)]);var inst_68201 = (inst_68193 + (1));var tmp68239 = inst_68191;var tmp68240 = inst_68190;var tmp68241 = inst_68192;var inst_68190__$1 = tmp68240;var inst_68191__$1 = tmp68239;var inst_68192__$1 = tmp68241;var inst_68193__$1 = inst_68201;var state_68233__$1 = (function (){var statearr_68246 = state_68233;(statearr_68246[(8)] = inst_68191__$1);
(statearr_68246[(9)] = inst_68190__$1);
(statearr_68246[(10)] = inst_68193__$1);
(statearr_68246[(11)] = inst_68192__$1);
(statearr_68246[(14)] = inst_68200);
return statearr_68246;
})();var statearr_68247_68279 = state_68233__$1;(statearr_68247_68279[(2)] = null);
(statearr_68247_68279[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68234 === (6)))
{var inst_68179 = (state_68233[(13)]);var inst_68184 = (function (){var G__68248 = inst_68179;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__68248) : f.call(null,G__68248));
})();var inst_68189 = cljs.core.seq(inst_68184);var inst_68190 = inst_68189;var inst_68191 = null;var inst_68192 = (0);var inst_68193 = (0);var state_68233__$1 = (function (){var statearr_68249 = state_68233;(statearr_68249[(8)] = inst_68191);
(statearr_68249[(9)] = inst_68190);
(statearr_68249[(10)] = inst_68193);
(statearr_68249[(11)] = inst_68192);
return statearr_68249;
})();var statearr_68250_68280 = state_68233__$1;(statearr_68250_68280[(2)] = null);
(statearr_68250_68280[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68234 === (17)))
{var inst_68204 = (state_68233[(7)]);var inst_68208 = cljs.core.chunk_first(inst_68204);var inst_68209 = cljs.core.chunk_rest(inst_68204);var inst_68210 = cljs.core.count(inst_68208);var inst_68190 = inst_68209;var inst_68191 = inst_68208;var inst_68192 = inst_68210;var inst_68193 = (0);var state_68233__$1 = (function (){var statearr_68251 = state_68233;(statearr_68251[(8)] = inst_68191);
(statearr_68251[(9)] = inst_68190);
(statearr_68251[(10)] = inst_68193);
(statearr_68251[(11)] = inst_68192);
return statearr_68251;
})();var statearr_68252_68281 = state_68233__$1;(statearr_68252_68281[(2)] = null);
(statearr_68252_68281[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68234 === (3)))
{var inst_68231 = (state_68233[(2)]);var state_68233__$1 = state_68233;return cljs.core.async.impl.ioc_helpers.return_chan(state_68233__$1,inst_68231);
} else
{if((state_val_68234 === (12)))
{var inst_68224 = (state_68233[(2)]);var state_68233__$1 = state_68233;var statearr_68253_68282 = state_68233__$1;(statearr_68253_68282[(2)] = inst_68224);
(statearr_68253_68282[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68234 === (2)))
{var state_68233__$1 = state_68233;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68233__$1,(4),in$);
} else
{if((state_val_68234 === (19)))
{var inst_68219 = (state_68233[(2)]);var state_68233__$1 = state_68233;var statearr_68254_68283 = state_68233__$1;(statearr_68254_68283[(2)] = inst_68219);
(statearr_68254_68283[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68234 === (11)))
{var inst_68190 = (state_68233[(9)]);var inst_68204 = (state_68233[(7)]);var inst_68204__$1 = cljs.core.seq(inst_68190);var state_68233__$1 = (function (){var statearr_68255 = state_68233;(statearr_68255[(7)] = inst_68204__$1);
return statearr_68255;
})();if(inst_68204__$1)
{var statearr_68256_68284 = state_68233__$1;(statearr_68256_68284[(1)] = (14));
} else
{var statearr_68257_68285 = state_68233__$1;(statearr_68257_68285[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68234 === (9)))
{var inst_68226 = (state_68233[(2)]);var state_68233__$1 = (function (){var statearr_68258 = state_68233;(statearr_68258[(15)] = inst_68226);
return statearr_68258;
})();var statearr_68259_68286 = state_68233__$1;(statearr_68259_68286[(2)] = null);
(statearr_68259_68286[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68234 === (5)))
{var inst_68182 = cljs.core.async.close_BANG_(out);var state_68233__$1 = state_68233;var statearr_68260_68287 = state_68233__$1;(statearr_68260_68287[(2)] = inst_68182);
(statearr_68260_68287[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68234 === (14)))
{var inst_68204 = (state_68233[(7)]);var inst_68206 = cljs.core.chunked_seq_QMARK_(inst_68204);var state_68233__$1 = state_68233;if(inst_68206)
{var statearr_68261_68288 = state_68233__$1;(statearr_68261_68288[(1)] = (17));
} else
{var statearr_68262_68289 = state_68233__$1;(statearr_68262_68289[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68234 === (16)))
{var inst_68222 = (state_68233[(2)]);var state_68233__$1 = state_68233;var statearr_68263_68290 = state_68233__$1;(statearr_68263_68290[(2)] = inst_68222);
(statearr_68263_68290[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68234 === (10)))
{var inst_68191 = (state_68233[(8)]);var inst_68193 = (state_68233[(10)]);var inst_68198 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_68191,inst_68193);var state_68233__$1 = state_68233;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68233__$1,(13),out,inst_68198);
} else
{if((state_val_68234 === (18)))
{var inst_68204 = (state_68233[(7)]);var inst_68213 = cljs.core.first(inst_68204);var state_68233__$1 = state_68233;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68233__$1,(20),out,inst_68213);
} else
{if((state_val_68234 === (8)))
{var inst_68193 = (state_68233[(10)]);var inst_68192 = (state_68233[(11)]);var inst_68195 = (inst_68193 < inst_68192);var inst_68196 = inst_68195;var state_68233__$1 = state_68233;if(cljs.core.truth_(inst_68196))
{var statearr_68264_68291 = state_68233__$1;(statearr_68264_68291[(1)] = (10));
} else
{var statearr_68265_68292 = state_68233__$1;(statearr_68265_68292[(1)] = (11));
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
});})(c__23127__auto__))
;return ((function (switch__23112__auto__,c__23127__auto__){
return (function() {
var state_machine__23113__auto__ = null;
var state_machine__23113__auto____0 = (function (){var statearr_68269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_68269[(0)] = state_machine__23113__auto__);
(statearr_68269[(1)] = (1));
return statearr_68269;
});
var state_machine__23113__auto____1 = (function (state_68233){while(true){
var ret_value__23114__auto__ = (function (){try{while(true){
var result__23115__auto__ = switch__23112__auto__(state_68233);if(cljs.core.keyword_identical_QMARK_(result__23115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__23115__auto__;
}
break;
}
}catch (e68270){if((e68270 instanceof Object))
{var ex__23116__auto__ = e68270;var statearr_68271_68293 = state_68233;(statearr_68271_68293[(5)] = ex__23116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_68233);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e68270;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__23114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__68294 = state_68233;
state_68233 = G__68294;
continue;
}
} else
{return ret_value__23114__auto__;
}
break;
}
});
state_machine__23113__auto__ = function(state_68233){
switch(arguments.length){
case 0:
return state_machine__23113__auto____0.call(this);
case 1:
return state_machine__23113__auto____1.call(this,state_68233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23113__auto____0;
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23113__auto____1;
return state_machine__23113__auto__;
})()
;})(switch__23112__auto__,c__23127__auto__))
})();var state__23129__auto__ = (function (){var statearr_68272 = (function (){return (f__23128__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23128__auto__.cljs$core$IFn$_invoke$arity$0() : f__23128__auto__.call(null));
})();(statearr_68272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23127__auto__);
return statearr_68272;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23129__auto__);
});})(c__23127__auto__))
);
return c__23127__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__23127__auto___68384 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23127__auto___68384){
return (function (){var f__23128__auto__ = (function (){var switch__23112__auto__ = ((function (c__23127__auto___68384){
return (function (state_68363){var state_val_68364 = (state_68363[(1)]);if((state_val_68364 === (7)))
{var inst_68359 = (state_68363[(2)]);var state_68363__$1 = state_68363;var statearr_68365_68385 = state_68363__$1;(statearr_68365_68385[(2)] = inst_68359);
(statearr_68365_68385[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68364 === (1)))
{var state_68363__$1 = state_68363;var statearr_68366_68386 = state_68363__$1;(statearr_68366_68386[(2)] = null);
(statearr_68366_68386[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68364 === (4)))
{var inst_68346 = (state_68363[(7)]);var inst_68346__$1 = (state_68363[(2)]);var inst_68347 = (inst_68346__$1 == null);var state_68363__$1 = (function (){var statearr_68367 = state_68363;(statearr_68367[(7)] = inst_68346__$1);
return statearr_68367;
})();if(cljs.core.truth_(inst_68347))
{var statearr_68368_68387 = state_68363__$1;(statearr_68368_68387[(1)] = (5));
} else
{var statearr_68369_68388 = state_68363__$1;(statearr_68369_68388[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68364 === (6)))
{var inst_68346 = (state_68363[(7)]);var state_68363__$1 = state_68363;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68363__$1,(11),to,inst_68346);
} else
{if((state_val_68364 === (3)))
{var inst_68361 = (state_68363[(2)]);var state_68363__$1 = state_68363;return cljs.core.async.impl.ioc_helpers.return_chan(state_68363__$1,inst_68361);
} else
{if((state_val_68364 === (2)))
{var state_68363__$1 = state_68363;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68363__$1,(4),from);
} else
{if((state_val_68364 === (11)))
{var inst_68356 = (state_68363[(2)]);var state_68363__$1 = (function (){var statearr_68370 = state_68363;(statearr_68370[(8)] = inst_68356);
return statearr_68370;
})();var statearr_68371_68389 = state_68363__$1;(statearr_68371_68389[(2)] = null);
(statearr_68371_68389[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68364 === (9)))
{var state_68363__$1 = state_68363;var statearr_68372_68390 = state_68363__$1;(statearr_68372_68390[(2)] = null);
(statearr_68372_68390[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68364 === (5)))
{var state_68363__$1 = state_68363;if(cljs.core.truth_(close_QMARK_))
{var statearr_68373_68391 = state_68363__$1;(statearr_68373_68391[(1)] = (8));
} else
{var statearr_68374_68392 = state_68363__$1;(statearr_68374_68392[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68364 === (10)))
{var inst_68353 = (state_68363[(2)]);var state_68363__$1 = state_68363;var statearr_68375_68393 = state_68363__$1;(statearr_68375_68393[(2)] = inst_68353);
(statearr_68375_68393[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68364 === (8)))
{var inst_68350 = cljs.core.async.close_BANG_(to);var state_68363__$1 = state_68363;var statearr_68376_68394 = state_68363__$1;(statearr_68376_68394[(2)] = inst_68350);
(statearr_68376_68394[(1)] = (10));
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
});})(c__23127__auto___68384))
;return ((function (switch__23112__auto__,c__23127__auto___68384){
return (function() {
var state_machine__23113__auto__ = null;
var state_machine__23113__auto____0 = (function (){var statearr_68380 = [null,null,null,null,null,null,null,null,null];(statearr_68380[(0)] = state_machine__23113__auto__);
(statearr_68380[(1)] = (1));
return statearr_68380;
});
var state_machine__23113__auto____1 = (function (state_68363){while(true){
var ret_value__23114__auto__ = (function (){try{while(true){
var result__23115__auto__ = switch__23112__auto__(state_68363);if(cljs.core.keyword_identical_QMARK_(result__23115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__23115__auto__;
}
break;
}
}catch (e68381){if((e68381 instanceof Object))
{var ex__23116__auto__ = e68381;var statearr_68382_68395 = state_68363;(statearr_68382_68395[(5)] = ex__23116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_68363);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e68381;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__23114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__68396 = state_68363;
state_68363 = G__68396;
continue;
}
} else
{return ret_value__23114__auto__;
}
break;
}
});
state_machine__23113__auto__ = function(state_68363){
switch(arguments.length){
case 0:
return state_machine__23113__auto____0.call(this);
case 1:
return state_machine__23113__auto____1.call(this,state_68363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23113__auto____0;
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23113__auto____1;
return state_machine__23113__auto__;
})()
;})(switch__23112__auto__,c__23127__auto___68384))
})();var state__23129__auto__ = (function (){var statearr_68383 = (function (){return (f__23128__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23128__auto__.cljs$core$IFn$_invoke$arity$0() : f__23128__auto__.call(null));
})();(statearr_68383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23127__auto___68384);
return statearr_68383;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23129__auto__);
});})(c__23127__auto___68384))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__23127__auto___68489 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23127__auto___68489,tc,fc){
return (function (){var f__23128__auto__ = (function (){var switch__23112__auto__ = ((function (c__23127__auto___68489,tc,fc){
return (function (state_68466){var state_val_68467 = (state_68466[(1)]);if((state_val_68467 === (7)))
{var inst_68462 = (state_68466[(2)]);var state_68466__$1 = state_68466;var statearr_68468_68490 = state_68466__$1;(statearr_68468_68490[(2)] = inst_68462);
(statearr_68468_68490[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68467 === (1)))
{var state_68466__$1 = state_68466;var statearr_68469_68491 = state_68466__$1;(statearr_68469_68491[(2)] = null);
(statearr_68469_68491[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68467 === (4)))
{var inst_68447 = (state_68466[(7)]);var inst_68447__$1 = (state_68466[(2)]);var inst_68448 = (inst_68447__$1 == null);var state_68466__$1 = (function (){var statearr_68470 = state_68466;(statearr_68470[(7)] = inst_68447__$1);
return statearr_68470;
})();if(cljs.core.truth_(inst_68448))
{var statearr_68471_68492 = state_68466__$1;(statearr_68471_68492[(1)] = (5));
} else
{var statearr_68472_68493 = state_68466__$1;(statearr_68472_68493[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68467 === (6)))
{var inst_68447 = (state_68466[(7)]);var inst_68453 = (function (){var G__68473 = inst_68447;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__68473) : p.call(null,G__68473));
})();var state_68466__$1 = state_68466;if(cljs.core.truth_(inst_68453))
{var statearr_68474_68494 = state_68466__$1;(statearr_68474_68494[(1)] = (9));
} else
{var statearr_68475_68495 = state_68466__$1;(statearr_68475_68495[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68467 === (3)))
{var inst_68464 = (state_68466[(2)]);var state_68466__$1 = state_68466;return cljs.core.async.impl.ioc_helpers.return_chan(state_68466__$1,inst_68464);
} else
{if((state_val_68467 === (2)))
{var state_68466__$1 = state_68466;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68466__$1,(4),ch);
} else
{if((state_val_68467 === (11)))
{var inst_68447 = (state_68466[(7)]);var inst_68457 = (state_68466[(2)]);var state_68466__$1 = state_68466;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68466__$1,(8),inst_68457,inst_68447);
} else
{if((state_val_68467 === (9)))
{var state_68466__$1 = state_68466;var statearr_68476_68496 = state_68466__$1;(statearr_68476_68496[(2)] = tc);
(statearr_68476_68496[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68467 === (5)))
{var inst_68450 = cljs.core.async.close_BANG_(tc);var inst_68451 = cljs.core.async.close_BANG_(fc);var state_68466__$1 = (function (){var statearr_68477 = state_68466;(statearr_68477[(8)] = inst_68450);
return statearr_68477;
})();var statearr_68478_68497 = state_68466__$1;(statearr_68478_68497[(2)] = inst_68451);
(statearr_68478_68497[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68467 === (10)))
{var state_68466__$1 = state_68466;var statearr_68479_68498 = state_68466__$1;(statearr_68479_68498[(2)] = fc);
(statearr_68479_68498[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68467 === (8)))
{var inst_68459 = (state_68466[(2)]);var state_68466__$1 = (function (){var statearr_68480 = state_68466;(statearr_68480[(9)] = inst_68459);
return statearr_68480;
})();var statearr_68481_68499 = state_68466__$1;(statearr_68481_68499[(2)] = null);
(statearr_68481_68499[(1)] = (2));
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
});})(c__23127__auto___68489,tc,fc))
;return ((function (switch__23112__auto__,c__23127__auto___68489,tc,fc){
return (function() {
var state_machine__23113__auto__ = null;
var state_machine__23113__auto____0 = (function (){var statearr_68485 = [null,null,null,null,null,null,null,null,null,null];(statearr_68485[(0)] = state_machine__23113__auto__);
(statearr_68485[(1)] = (1));
return statearr_68485;
});
var state_machine__23113__auto____1 = (function (state_68466){while(true){
var ret_value__23114__auto__ = (function (){try{while(true){
var result__23115__auto__ = switch__23112__auto__(state_68466);if(cljs.core.keyword_identical_QMARK_(result__23115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__23115__auto__;
}
break;
}
}catch (e68486){if((e68486 instanceof Object))
{var ex__23116__auto__ = e68486;var statearr_68487_68500 = state_68466;(statearr_68487_68500[(5)] = ex__23116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_68466);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e68486;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__23114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__68501 = state_68466;
state_68466 = G__68501;
continue;
}
} else
{return ret_value__23114__auto__;
}
break;
}
});
state_machine__23113__auto__ = function(state_68466){
switch(arguments.length){
case 0:
return state_machine__23113__auto____0.call(this);
case 1:
return state_machine__23113__auto____1.call(this,state_68466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23113__auto____0;
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23113__auto____1;
return state_machine__23113__auto__;
})()
;})(switch__23112__auto__,c__23127__auto___68489,tc,fc))
})();var state__23129__auto__ = (function (){var statearr_68488 = (function (){return (f__23128__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23128__auto__.cljs$core$IFn$_invoke$arity$0() : f__23128__auto__.call(null));
})();(statearr_68488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23127__auto___68489);
return statearr_68488;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23129__auto__);
});})(c__23127__auto___68489,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__23127__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23127__auto__){
return (function (){var f__23128__auto__ = (function (){var switch__23112__auto__ = ((function (c__23127__auto__){
return (function (state_68550){var state_val_68551 = (state_68550[(1)]);if((state_val_68551 === (7)))
{var inst_68546 = (state_68550[(2)]);var state_68550__$1 = state_68550;var statearr_68552_68570 = state_68550__$1;(statearr_68552_68570[(2)] = inst_68546);
(statearr_68552_68570[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68551 === (6)))
{var inst_68536 = (state_68550[(7)]);var inst_68539 = (state_68550[(8)]);var inst_68543 = (function (){var G__68553 = inst_68536;var G__68554 = inst_68539;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__68553,G__68554) : f.call(null,G__68553,G__68554));
})();var inst_68536__$1 = inst_68543;var state_68550__$1 = (function (){var statearr_68555 = state_68550;(statearr_68555[(7)] = inst_68536__$1);
return statearr_68555;
})();var statearr_68556_68571 = state_68550__$1;(statearr_68556_68571[(2)] = null);
(statearr_68556_68571[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68551 === (5)))
{var inst_68536 = (state_68550[(7)]);var state_68550__$1 = state_68550;var statearr_68557_68572 = state_68550__$1;(statearr_68557_68572[(2)] = inst_68536);
(statearr_68557_68572[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68551 === (4)))
{var inst_68539 = (state_68550[(8)]);var inst_68539__$1 = (state_68550[(2)]);var inst_68540 = (inst_68539__$1 == null);var state_68550__$1 = (function (){var statearr_68558 = state_68550;(statearr_68558[(8)] = inst_68539__$1);
return statearr_68558;
})();if(cljs.core.truth_(inst_68540))
{var statearr_68559_68573 = state_68550__$1;(statearr_68559_68573[(1)] = (5));
} else
{var statearr_68560_68574 = state_68550__$1;(statearr_68560_68574[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68551 === (3)))
{var inst_68548 = (state_68550[(2)]);var state_68550__$1 = state_68550;return cljs.core.async.impl.ioc_helpers.return_chan(state_68550__$1,inst_68548);
} else
{if((state_val_68551 === (2)))
{var state_68550__$1 = state_68550;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68550__$1,(4),ch);
} else
{if((state_val_68551 === (1)))
{var inst_68536 = init;var state_68550__$1 = (function (){var statearr_68561 = state_68550;(statearr_68561[(7)] = inst_68536);
return statearr_68561;
})();var statearr_68562_68575 = state_68550__$1;(statearr_68562_68575[(2)] = null);
(statearr_68562_68575[(1)] = (2));
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
});})(c__23127__auto__))
;return ((function (switch__23112__auto__,c__23127__auto__){
return (function() {
var state_machine__23113__auto__ = null;
var state_machine__23113__auto____0 = (function (){var statearr_68566 = [null,null,null,null,null,null,null,null,null];(statearr_68566[(0)] = state_machine__23113__auto__);
(statearr_68566[(1)] = (1));
return statearr_68566;
});
var state_machine__23113__auto____1 = (function (state_68550){while(true){
var ret_value__23114__auto__ = (function (){try{while(true){
var result__23115__auto__ = switch__23112__auto__(state_68550);if(cljs.core.keyword_identical_QMARK_(result__23115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__23115__auto__;
}
break;
}
}catch (e68567){if((e68567 instanceof Object))
{var ex__23116__auto__ = e68567;var statearr_68568_68576 = state_68550;(statearr_68568_68576[(5)] = ex__23116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_68550);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e68567;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__23114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__68577 = state_68550;
state_68550 = G__68577;
continue;
}
} else
{return ret_value__23114__auto__;
}
break;
}
});
state_machine__23113__auto__ = function(state_68550){
switch(arguments.length){
case 0:
return state_machine__23113__auto____0.call(this);
case 1:
return state_machine__23113__auto____1.call(this,state_68550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23113__auto____0;
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23113__auto____1;
return state_machine__23113__auto__;
})()
;})(switch__23112__auto__,c__23127__auto__))
})();var state__23129__auto__ = (function (){var statearr_68569 = (function (){return (f__23128__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23128__auto__.cljs$core$IFn$_invoke$arity$0() : f__23128__auto__.call(null));
})();(statearr_68569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23127__auto__);
return statearr_68569;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23129__auto__);
});})(c__23127__auto__))
);
return c__23127__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__23127__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23127__auto__){
return (function (){var f__23128__auto__ = (function (){var switch__23112__auto__ = ((function (c__23127__auto__){
return (function (state_68642){var state_val_68643 = (state_68642[(1)]);if((state_val_68643 === (7)))
{var inst_68623 = (state_68642[(7)]);var inst_68628 = (state_68642[(2)]);var inst_68629 = cljs.core.next(inst_68623);var inst_68623__$1 = inst_68629;var state_68642__$1 = (function (){var statearr_68644 = state_68642;(statearr_68644[(7)] = inst_68623__$1);
(statearr_68644[(8)] = inst_68628);
return statearr_68644;
})();var statearr_68645_68663 = state_68642__$1;(statearr_68645_68663[(2)] = null);
(statearr_68645_68663[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68643 === (1)))
{var inst_68622 = cljs.core.seq(coll);var inst_68623 = inst_68622;var state_68642__$1 = (function (){var statearr_68646 = state_68642;(statearr_68646[(7)] = inst_68623);
return statearr_68646;
})();var statearr_68647_68664 = state_68642__$1;(statearr_68647_68664[(2)] = null);
(statearr_68647_68664[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68643 === (4)))
{var inst_68623 = (state_68642[(7)]);var inst_68626 = cljs.core.first(inst_68623);var state_68642__$1 = state_68642;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68642__$1,(7),ch,inst_68626);
} else
{if((state_val_68643 === (6)))
{var inst_68638 = (state_68642[(2)]);var state_68642__$1 = state_68642;var statearr_68648_68665 = state_68642__$1;(statearr_68648_68665[(2)] = inst_68638);
(statearr_68648_68665[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68643 === (3)))
{var inst_68640 = (state_68642[(2)]);var state_68642__$1 = state_68642;return cljs.core.async.impl.ioc_helpers.return_chan(state_68642__$1,inst_68640);
} else
{if((state_val_68643 === (2)))
{var inst_68623 = (state_68642[(7)]);var state_68642__$1 = state_68642;if(cljs.core.truth_(inst_68623))
{var statearr_68649_68666 = state_68642__$1;(statearr_68649_68666[(1)] = (4));
} else
{var statearr_68650_68667 = state_68642__$1;(statearr_68650_68667[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68643 === (9)))
{var state_68642__$1 = state_68642;var statearr_68651_68668 = state_68642__$1;(statearr_68651_68668[(2)] = null);
(statearr_68651_68668[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68643 === (5)))
{var state_68642__$1 = state_68642;if(cljs.core.truth_(close_QMARK_))
{var statearr_68652_68669 = state_68642__$1;(statearr_68652_68669[(1)] = (8));
} else
{var statearr_68653_68670 = state_68642__$1;(statearr_68653_68670[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68643 === (10)))
{var inst_68636 = (state_68642[(2)]);var state_68642__$1 = state_68642;var statearr_68654_68671 = state_68642__$1;(statearr_68654_68671[(2)] = inst_68636);
(statearr_68654_68671[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68643 === (8)))
{var inst_68633 = cljs.core.async.close_BANG_(ch);var state_68642__$1 = state_68642;var statearr_68655_68672 = state_68642__$1;(statearr_68655_68672[(2)] = inst_68633);
(statearr_68655_68672[(1)] = (10));
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
});})(c__23127__auto__))
;return ((function (switch__23112__auto__,c__23127__auto__){
return (function() {
var state_machine__23113__auto__ = null;
var state_machine__23113__auto____0 = (function (){var statearr_68659 = [null,null,null,null,null,null,null,null,null];(statearr_68659[(0)] = state_machine__23113__auto__);
(statearr_68659[(1)] = (1));
return statearr_68659;
});
var state_machine__23113__auto____1 = (function (state_68642){while(true){
var ret_value__23114__auto__ = (function (){try{while(true){
var result__23115__auto__ = switch__23112__auto__(state_68642);if(cljs.core.keyword_identical_QMARK_(result__23115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__23115__auto__;
}
break;
}
}catch (e68660){if((e68660 instanceof Object))
{var ex__23116__auto__ = e68660;var statearr_68661_68673 = state_68642;(statearr_68661_68673[(5)] = ex__23116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_68642);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e68660;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__23114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__68674 = state_68642;
state_68642 = G__68674;
continue;
}
} else
{return ret_value__23114__auto__;
}
break;
}
});
state_machine__23113__auto__ = function(state_68642){
switch(arguments.length){
case 0:
return state_machine__23113__auto____0.call(this);
case 1:
return state_machine__23113__auto____1.call(this,state_68642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23113__auto____0;
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23113__auto____1;
return state_machine__23113__auto__;
})()
;})(switch__23112__auto__,c__23127__auto__))
})();var state__23129__auto__ = (function (){var statearr_68662 = (function (){return (f__23128__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23128__auto__.cljs$core$IFn$_invoke$arity$0() : f__23128__auto__.call(null));
})();(statearr_68662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23127__auto__);
return statearr_68662;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23129__auto__);
});})(c__23127__auto__))
);
return c__23127__auto__;
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
cljs.core.async.Mux = (function (){var obj68676 = {};return obj68676;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__19697__auto__ = _;if(and__19697__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__19697__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__20914__auto__ = (((_ == null))?null:_);return (function (){var or__19711__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__68680 = x__20914__auto__;return goog.typeOf(G__68680);
})()]);if(or__19711__auto__)
{return or__19711__auto__;
} else
{var or__19711__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__19711__auto____$1)
{return or__19711__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj68682 = {};return obj68682;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__19697__auto__ = m;if(and__19697__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__19697__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__20914__auto__ = (((m == null))?null:m);return (function (){var or__19711__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__68686 = x__20914__auto__;return goog.typeOf(G__68686);
})()]);if(or__19711__auto__)
{return or__19711__auto__;
} else
{var or__19711__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__19711__auto____$1)
{return or__19711__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__19697__auto__ = m;if(and__19697__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__19697__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__20914__auto__ = (((m == null))?null:m);return (function (){var or__19711__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__68690 = x__20914__auto__;return goog.typeOf(G__68690);
})()]);if(or__19711__auto__)
{return or__19711__auto__;
} else
{var or__19711__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__19711__auto____$1)
{return or__19711__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__19697__auto__ = m;if(and__19697__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__19697__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__20914__auto__ = (((m == null))?null:m);return (function (){var or__19711__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__68694 = x__20914__auto__;return goog.typeOf(G__68694);
})()]);if(or__19711__auto__)
{return or__19711__auto__;
} else
{var or__19711__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__19711__auto____$1)
{return or__19711__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__68926 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__68926) : cljs.core.atom.call(null,G__68926));
})();var m = (function (){if(typeof cljs.core.async.t68927 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t68927 = (function (cs,ch,mult,meta68928){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta68928 = meta68928;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t68927.cljs$lang$type = true;
cljs.core.async.t68927.cljs$lang$ctorStr = "cljs.core.async/t68927";
cljs.core.async.t68927.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"cljs.core.async/t68927");
});})(cs))
;
cljs.core.async.t68927.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t68927.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t68927.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t68927.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__68930_69157 = self__.cs;var G__68931_69158 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__68930_69157,G__68931_69158) : cljs.core.reset_BANG_.call(null,G__68930_69157,G__68931_69158));
return null;
});})(cs))
;
cljs.core.async.t68927.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t68927.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t68927.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_68929){var self__ = this;
var _68929__$1 = this;return self__.meta68928;
});})(cs))
;
cljs.core.async.t68927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_68929,meta68928__$1){var self__ = this;
var _68929__$1 = this;return (new cljs.core.async.t68927(self__.cs,self__.ch,self__.mult,meta68928__$1));
});})(cs))
;
cljs.core.async.__GT_t68927 = ((function (cs){
return (function __GT_t68927(cs__$1,ch__$1,mult__$1,meta68928){return (new cljs.core.async.t68927(cs__$1,ch__$1,mult__$1,meta68928));
});})(cs))
;
}
return (new cljs.core.async.t68927(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__68932 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__68932) : cljs.core.atom.call(null,G__68932));
})();var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__23127__auto___69159 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23127__auto___69159,cs,m,dchan,dctr,done){
return (function (){var f__23128__auto__ = (function (){var switch__23112__auto__ = ((function (c__23127__auto___69159,cs,m,dchan,dctr,done){
return (function (state_69067){var state_val_69068 = (state_69067[(1)]);if((state_val_69068 === (7)))
{var inst_69063 = (state_69067[(2)]);var state_69067__$1 = state_69067;var statearr_69069_69160 = state_69067__$1;(statearr_69069_69160[(2)] = inst_69063);
(statearr_69069_69160[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (20)))
{var inst_68964 = (state_69067[(7)]);var inst_68974 = cljs.core.first(inst_68964);var inst_68975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_68974,(0),null);var inst_68976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_68974,(1),null);var state_69067__$1 = (function (){var statearr_69070 = state_69067;(statearr_69070[(8)] = inst_68975);
return statearr_69070;
})();if(cljs.core.truth_(inst_68976))
{var statearr_69071_69161 = state_69067__$1;(statearr_69071_69161[(1)] = (22));
} else
{var statearr_69072_69162 = state_69067__$1;(statearr_69072_69162[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (27)))
{var inst_69004 = (state_69067[(9)]);var inst_69006 = (state_69067[(10)]);var inst_69011 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_69004,inst_69006);var state_69067__$1 = (function (){var statearr_69073 = state_69067;(statearr_69073[(11)] = inst_69011);
return statearr_69073;
})();var statearr_69074_69163 = state_69067__$1;(statearr_69074_69163[(2)] = null);
(statearr_69074_69163[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (1)))
{var state_69067__$1 = state_69067;var statearr_69075_69164 = state_69067__$1;(statearr_69075_69164[(2)] = null);
(statearr_69075_69164[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (24)))
{var inst_68964 = (state_69067[(7)]);var inst_68981 = (state_69067[(2)]);var inst_68982 = cljs.core.next(inst_68964);var inst_68944 = inst_68982;var inst_68945 = null;var inst_68946 = (0);var inst_68947 = (0);var state_69067__$1 = (function (){var statearr_69076 = state_69067;(statearr_69076[(12)] = inst_68946);
(statearr_69076[(13)] = inst_68947);
(statearr_69076[(14)] = inst_68981);
(statearr_69076[(15)] = inst_68945);
(statearr_69076[(16)] = inst_68944);
return statearr_69076;
})();var statearr_69077_69165 = state_69067__$1;(statearr_69077_69165[(2)] = null);
(statearr_69077_69165[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (39)))
{var inst_69024 = (state_69067[(17)]);var inst_69042 = (state_69067[(2)]);var inst_69043 = cljs.core.next(inst_69024);var inst_69003 = inst_69043;var inst_69004 = null;var inst_69005 = (0);var inst_69006 = (0);var state_69067__$1 = (function (){var statearr_69081 = state_69067;(statearr_69081[(9)] = inst_69004);
(statearr_69081[(18)] = inst_69042);
(statearr_69081[(19)] = inst_69003);
(statearr_69081[(20)] = inst_69005);
(statearr_69081[(10)] = inst_69006);
return statearr_69081;
})();var statearr_69082_69166 = state_69067__$1;(statearr_69082_69166[(2)] = null);
(statearr_69082_69166[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (4)))
{var inst_68935 = (state_69067[(21)]);var inst_68935__$1 = (state_69067[(2)]);var inst_68936 = (inst_68935__$1 == null);var state_69067__$1 = (function (){var statearr_69083 = state_69067;(statearr_69083[(21)] = inst_68935__$1);
return statearr_69083;
})();if(cljs.core.truth_(inst_68936))
{var statearr_69084_69167 = state_69067__$1;(statearr_69084_69167[(1)] = (5));
} else
{var statearr_69085_69168 = state_69067__$1;(statearr_69085_69168[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (15)))
{var inst_68946 = (state_69067[(12)]);var inst_68947 = (state_69067[(13)]);var inst_68945 = (state_69067[(15)]);var inst_68944 = (state_69067[(16)]);var inst_68960 = (state_69067[(2)]);var inst_68961 = (inst_68947 + (1));var tmp69078 = inst_68946;var tmp69079 = inst_68945;var tmp69080 = inst_68944;var inst_68944__$1 = tmp69080;var inst_68945__$1 = tmp69079;var inst_68946__$1 = tmp69078;var inst_68947__$1 = inst_68961;var state_69067__$1 = (function (){var statearr_69086 = state_69067;(statearr_69086[(12)] = inst_68946__$1);
(statearr_69086[(13)] = inst_68947__$1);
(statearr_69086[(15)] = inst_68945__$1);
(statearr_69086[(22)] = inst_68960);
(statearr_69086[(16)] = inst_68944__$1);
return statearr_69086;
})();var statearr_69087_69169 = state_69067__$1;(statearr_69087_69169[(2)] = null);
(statearr_69087_69169[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (21)))
{var inst_68985 = (state_69067[(2)]);var state_69067__$1 = state_69067;var statearr_69088_69170 = state_69067__$1;(statearr_69088_69170[(2)] = inst_68985);
(statearr_69088_69170[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (31)))
{var inst_69011 = (state_69067[(11)]);var inst_69012 = (state_69067[(2)]);var inst_69013 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_69014 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_69011);var state_69067__$1 = (function (){var statearr_69089 = state_69067;(statearr_69089[(23)] = inst_69012);
(statearr_69089[(24)] = inst_69013);
return statearr_69089;
})();var statearr_69090_69171 = state_69067__$1;(statearr_69090_69171[(2)] = inst_69014);
cljs.core.async.impl.ioc_helpers.process_exception(state_69067__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (32)))
{var inst_69011 = (state_69067[(11)]);var inst_68935 = (state_69067[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_69067,(31),Object,null,(30));var inst_69018 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_69011,inst_68935,done);var state_69067__$1 = state_69067;var statearr_69091_69172 = state_69067__$1;(statearr_69091_69172[(2)] = inst_69018);
cljs.core.async.impl.ioc_helpers.process_exception(state_69067__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (40)))
{var inst_69033 = (state_69067[(25)]);var inst_69034 = (state_69067[(2)]);var inst_69035 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_69036 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_69033);var state_69067__$1 = (function (){var statearr_69092 = state_69067;(statearr_69092[(26)] = inst_69034);
(statearr_69092[(27)] = inst_69035);
return statearr_69092;
})();var statearr_69093_69173 = state_69067__$1;(statearr_69093_69173[(2)] = inst_69036);
cljs.core.async.impl.ioc_helpers.process_exception(state_69067__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (33)))
{var inst_69024 = (state_69067[(17)]);var inst_69026 = cljs.core.chunked_seq_QMARK_(inst_69024);var state_69067__$1 = state_69067;if(inst_69026)
{var statearr_69094_69174 = state_69067__$1;(statearr_69094_69174[(1)] = (36));
} else
{var statearr_69095_69175 = state_69067__$1;(statearr_69095_69175[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (13)))
{var inst_68954 = (state_69067[(28)]);var inst_68957 = cljs.core.async.close_BANG_(inst_68954);var state_69067__$1 = state_69067;var statearr_69096_69176 = state_69067__$1;(statearr_69096_69176[(2)] = inst_68957);
(statearr_69096_69176[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (22)))
{var inst_68975 = (state_69067[(8)]);var inst_68978 = cljs.core.async.close_BANG_(inst_68975);var state_69067__$1 = state_69067;var statearr_69097_69177 = state_69067__$1;(statearr_69097_69177[(2)] = inst_68978);
(statearr_69097_69177[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (36)))
{var inst_69024 = (state_69067[(17)]);var inst_69028 = cljs.core.chunk_first(inst_69024);var inst_69029 = cljs.core.chunk_rest(inst_69024);var inst_69030 = cljs.core.count(inst_69028);var inst_69003 = inst_69029;var inst_69004 = inst_69028;var inst_69005 = inst_69030;var inst_69006 = (0);var state_69067__$1 = (function (){var statearr_69098 = state_69067;(statearr_69098[(9)] = inst_69004);
(statearr_69098[(19)] = inst_69003);
(statearr_69098[(20)] = inst_69005);
(statearr_69098[(10)] = inst_69006);
return statearr_69098;
})();var statearr_69099_69178 = state_69067__$1;(statearr_69099_69178[(2)] = null);
(statearr_69099_69178[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (41)))
{var inst_69033 = (state_69067[(25)]);var inst_68935 = (state_69067[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_69067,(40),Object,null,(39));var inst_69040 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_69033,inst_68935,done);var state_69067__$1 = state_69067;var statearr_69100_69179 = state_69067__$1;(statearr_69100_69179[(2)] = inst_69040);
cljs.core.async.impl.ioc_helpers.process_exception(state_69067__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (43)))
{var state_69067__$1 = state_69067;var statearr_69101_69180 = state_69067__$1;(statearr_69101_69180[(2)] = null);
(statearr_69101_69180[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (29)))
{var inst_69051 = (state_69067[(2)]);var state_69067__$1 = state_69067;var statearr_69102_69181 = state_69067__$1;(statearr_69102_69181[(2)] = inst_69051);
(statearr_69102_69181[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (44)))
{var inst_69060 = (state_69067[(2)]);var state_69067__$1 = (function (){var statearr_69103 = state_69067;(statearr_69103[(29)] = inst_69060);
return statearr_69103;
})();var statearr_69104_69182 = state_69067__$1;(statearr_69104_69182[(2)] = null);
(statearr_69104_69182[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (6)))
{var inst_68995 = (state_69067[(30)]);var inst_68994 = (function (){var G__69105 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__69105) : cljs.core.deref.call(null,G__69105));
})();var inst_68995__$1 = cljs.core.keys(inst_68994);var inst_68996 = cljs.core.count(inst_68995__$1);var inst_68997 = (function (){var G__69106 = dctr;var G__69107 = inst_68996;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__69106,G__69107) : cljs.core.reset_BANG_.call(null,G__69106,G__69107));
})();var inst_69002 = cljs.core.seq(inst_68995__$1);var inst_69003 = inst_69002;var inst_69004 = null;var inst_69005 = (0);var inst_69006 = (0);var state_69067__$1 = (function (){var statearr_69108 = state_69067;(statearr_69108[(9)] = inst_69004);
(statearr_69108[(31)] = inst_68997);
(statearr_69108[(19)] = inst_69003);
(statearr_69108[(20)] = inst_69005);
(statearr_69108[(10)] = inst_69006);
(statearr_69108[(30)] = inst_68995__$1);
return statearr_69108;
})();var statearr_69109_69183 = state_69067__$1;(statearr_69109_69183[(2)] = null);
(statearr_69109_69183[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (28)))
{var inst_69024 = (state_69067[(17)]);var inst_69003 = (state_69067[(19)]);var inst_69024__$1 = cljs.core.seq(inst_69003);var state_69067__$1 = (function (){var statearr_69110 = state_69067;(statearr_69110[(17)] = inst_69024__$1);
return statearr_69110;
})();if(inst_69024__$1)
{var statearr_69111_69184 = state_69067__$1;(statearr_69111_69184[(1)] = (33));
} else
{var statearr_69112_69185 = state_69067__$1;(statearr_69112_69185[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (25)))
{var inst_69005 = (state_69067[(20)]);var inst_69006 = (state_69067[(10)]);var inst_69008 = (inst_69006 < inst_69005);var inst_69009 = inst_69008;var state_69067__$1 = state_69067;if(cljs.core.truth_(inst_69009))
{var statearr_69113_69186 = state_69067__$1;(statearr_69113_69186[(1)] = (27));
} else
{var statearr_69114_69187 = state_69067__$1;(statearr_69114_69187[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (34)))
{var state_69067__$1 = state_69067;var statearr_69115_69188 = state_69067__$1;(statearr_69115_69188[(2)] = null);
(statearr_69115_69188[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (17)))
{var state_69067__$1 = state_69067;var statearr_69116_69189 = state_69067__$1;(statearr_69116_69189[(2)] = null);
(statearr_69116_69189[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (3)))
{var inst_69065 = (state_69067[(2)]);var state_69067__$1 = state_69067;return cljs.core.async.impl.ioc_helpers.return_chan(state_69067__$1,inst_69065);
} else
{if((state_val_69068 === (12)))
{var inst_68990 = (state_69067[(2)]);var state_69067__$1 = state_69067;var statearr_69117_69190 = state_69067__$1;(statearr_69117_69190[(2)] = inst_68990);
(statearr_69117_69190[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (2)))
{var state_69067__$1 = state_69067;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69067__$1,(4),ch);
} else
{if((state_val_69068 === (23)))
{var state_69067__$1 = state_69067;var statearr_69118_69191 = state_69067__$1;(statearr_69118_69191[(2)] = null);
(statearr_69118_69191[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (35)))
{var inst_69049 = (state_69067[(2)]);var state_69067__$1 = state_69067;var statearr_69119_69192 = state_69067__$1;(statearr_69119_69192[(2)] = inst_69049);
(statearr_69119_69192[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (19)))
{var inst_68964 = (state_69067[(7)]);var inst_68968 = cljs.core.chunk_first(inst_68964);var inst_68969 = cljs.core.chunk_rest(inst_68964);var inst_68970 = cljs.core.count(inst_68968);var inst_68944 = inst_68969;var inst_68945 = inst_68968;var inst_68946 = inst_68970;var inst_68947 = (0);var state_69067__$1 = (function (){var statearr_69120 = state_69067;(statearr_69120[(12)] = inst_68946);
(statearr_69120[(13)] = inst_68947);
(statearr_69120[(15)] = inst_68945);
(statearr_69120[(16)] = inst_68944);
return statearr_69120;
})();var statearr_69121_69193 = state_69067__$1;(statearr_69121_69193[(2)] = null);
(statearr_69121_69193[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (11)))
{var inst_68964 = (state_69067[(7)]);var inst_68944 = (state_69067[(16)]);var inst_68964__$1 = cljs.core.seq(inst_68944);var state_69067__$1 = (function (){var statearr_69122 = state_69067;(statearr_69122[(7)] = inst_68964__$1);
return statearr_69122;
})();if(inst_68964__$1)
{var statearr_69123_69194 = state_69067__$1;(statearr_69123_69194[(1)] = (16));
} else
{var statearr_69124_69195 = state_69067__$1;(statearr_69124_69195[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (9)))
{var inst_68992 = (state_69067[(2)]);var state_69067__$1 = state_69067;var statearr_69125_69196 = state_69067__$1;(statearr_69125_69196[(2)] = inst_68992);
(statearr_69125_69196[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (5)))
{var inst_68942 = (function (){var G__69126 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__69126) : cljs.core.deref.call(null,G__69126));
})();var inst_68943 = cljs.core.seq(inst_68942);var inst_68944 = inst_68943;var inst_68945 = null;var inst_68946 = (0);var inst_68947 = (0);var state_69067__$1 = (function (){var statearr_69127 = state_69067;(statearr_69127[(12)] = inst_68946);
(statearr_69127[(13)] = inst_68947);
(statearr_69127[(15)] = inst_68945);
(statearr_69127[(16)] = inst_68944);
return statearr_69127;
})();var statearr_69128_69197 = state_69067__$1;(statearr_69128_69197[(2)] = null);
(statearr_69128_69197[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (14)))
{var state_69067__$1 = state_69067;var statearr_69129_69198 = state_69067__$1;(statearr_69129_69198[(2)] = null);
(statearr_69129_69198[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (45)))
{var inst_69057 = (state_69067[(2)]);var state_69067__$1 = state_69067;var statearr_69130_69199 = state_69067__$1;(statearr_69130_69199[(2)] = inst_69057);
(statearr_69130_69199[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (26)))
{var inst_68995 = (state_69067[(30)]);var inst_69053 = (state_69067[(2)]);var inst_69054 = cljs.core.seq(inst_68995);var state_69067__$1 = (function (){var statearr_69131 = state_69067;(statearr_69131[(32)] = inst_69053);
return statearr_69131;
})();if(inst_69054)
{var statearr_69132_69200 = state_69067__$1;(statearr_69132_69200[(1)] = (42));
} else
{var statearr_69133_69201 = state_69067__$1;(statearr_69133_69201[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (16)))
{var inst_68964 = (state_69067[(7)]);var inst_68966 = cljs.core.chunked_seq_QMARK_(inst_68964);var state_69067__$1 = state_69067;if(inst_68966)
{var statearr_69137_69202 = state_69067__$1;(statearr_69137_69202[(1)] = (19));
} else
{var statearr_69138_69203 = state_69067__$1;(statearr_69138_69203[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (38)))
{var inst_69046 = (state_69067[(2)]);var state_69067__$1 = state_69067;var statearr_69139_69204 = state_69067__$1;(statearr_69139_69204[(2)] = inst_69046);
(statearr_69139_69204[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (30)))
{var inst_69004 = (state_69067[(9)]);var inst_69003 = (state_69067[(19)]);var inst_69005 = (state_69067[(20)]);var inst_69006 = (state_69067[(10)]);var inst_69020 = (state_69067[(2)]);var inst_69021 = (inst_69006 + (1));var tmp69134 = inst_69004;var tmp69135 = inst_69003;var tmp69136 = inst_69005;var inst_69003__$1 = tmp69135;var inst_69004__$1 = tmp69134;var inst_69005__$1 = tmp69136;var inst_69006__$1 = inst_69021;var state_69067__$1 = (function (){var statearr_69140 = state_69067;(statearr_69140[(33)] = inst_69020);
(statearr_69140[(9)] = inst_69004__$1);
(statearr_69140[(19)] = inst_69003__$1);
(statearr_69140[(20)] = inst_69005__$1);
(statearr_69140[(10)] = inst_69006__$1);
return statearr_69140;
})();var statearr_69141_69205 = state_69067__$1;(statearr_69141_69205[(2)] = null);
(statearr_69141_69205[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (10)))
{var inst_68947 = (state_69067[(13)]);var inst_68945 = (state_69067[(15)]);var inst_68953 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_68945,inst_68947);var inst_68954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_68953,(0),null);var inst_68955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_68953,(1),null);var state_69067__$1 = (function (){var statearr_69142 = state_69067;(statearr_69142[(28)] = inst_68954);
return statearr_69142;
})();if(cljs.core.truth_(inst_68955))
{var statearr_69143_69206 = state_69067__$1;(statearr_69143_69206[(1)] = (13));
} else
{var statearr_69144_69207 = state_69067__$1;(statearr_69144_69207[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (18)))
{var inst_68988 = (state_69067[(2)]);var state_69067__$1 = state_69067;var statearr_69145_69208 = state_69067__$1;(statearr_69145_69208[(2)] = inst_68988);
(statearr_69145_69208[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (42)))
{var state_69067__$1 = state_69067;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69067__$1,(45),dchan);
} else
{if((state_val_69068 === (37)))
{var inst_69024 = (state_69067[(17)]);var inst_69033 = cljs.core.first(inst_69024);var state_69067__$1 = (function (){var statearr_69146 = state_69067;(statearr_69146[(25)] = inst_69033);
return statearr_69146;
})();var statearr_69147_69209 = state_69067__$1;(statearr_69147_69209[(2)] = null);
(statearr_69147_69209[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69068 === (8)))
{var inst_68946 = (state_69067[(12)]);var inst_68947 = (state_69067[(13)]);var inst_68949 = (inst_68947 < inst_68946);var inst_68950 = inst_68949;var state_69067__$1 = state_69067;if(cljs.core.truth_(inst_68950))
{var statearr_69148_69210 = state_69067__$1;(statearr_69148_69210[(1)] = (10));
} else
{var statearr_69149_69211 = state_69067__$1;(statearr_69149_69211[(1)] = (11));
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
});})(c__23127__auto___69159,cs,m,dchan,dctr,done))
;return ((function (switch__23112__auto__,c__23127__auto___69159,cs,m,dchan,dctr,done){
return (function() {
var state_machine__23113__auto__ = null;
var state_machine__23113__auto____0 = (function (){var statearr_69153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_69153[(0)] = state_machine__23113__auto__);
(statearr_69153[(1)] = (1));
return statearr_69153;
});
var state_machine__23113__auto____1 = (function (state_69067){while(true){
var ret_value__23114__auto__ = (function (){try{while(true){
var result__23115__auto__ = switch__23112__auto__(state_69067);if(cljs.core.keyword_identical_QMARK_(result__23115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__23115__auto__;
}
break;
}
}catch (e69154){if((e69154 instanceof Object))
{var ex__23116__auto__ = e69154;var statearr_69155_69212 = state_69067;(statearr_69155_69212[(5)] = ex__23116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_69067);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e69154;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__23114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__69213 = state_69067;
state_69067 = G__69213;
continue;
}
} else
{return ret_value__23114__auto__;
}
break;
}
});
state_machine__23113__auto__ = function(state_69067){
switch(arguments.length){
case 0:
return state_machine__23113__auto____0.call(this);
case 1:
return state_machine__23113__auto____1.call(this,state_69067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23113__auto____0;
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23113__auto____1;
return state_machine__23113__auto__;
})()
;})(switch__23112__auto__,c__23127__auto___69159,cs,m,dchan,dctr,done))
})();var state__23129__auto__ = (function (){var statearr_69156 = (function (){return (f__23128__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23128__auto__.cljs$core$IFn$_invoke$arity$0() : f__23128__auto__.call(null));
})();(statearr_69156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23127__auto___69159);
return statearr_69156;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23129__auto__);
});})(c__23127__auto___69159,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj69218 = {};return obj69218;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__19697__auto__ = m;if(and__19697__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__19697__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__20914__auto__ = (((m == null))?null:m);return (function (){var or__19711__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__69222 = x__20914__auto__;return goog.typeOf(G__69222);
})()]);if(or__19711__auto__)
{return or__19711__auto__;
} else
{var or__19711__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__19711__auto____$1)
{return or__19711__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__19697__auto__ = m;if(and__19697__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__19697__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__20914__auto__ = (((m == null))?null:m);return (function (){var or__19711__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__69226 = x__20914__auto__;return goog.typeOf(G__69226);
})()]);if(or__19711__auto__)
{return or__19711__auto__;
} else
{var or__19711__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__19711__auto____$1)
{return or__19711__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__19697__auto__ = m;if(and__19697__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__19697__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__20914__auto__ = (((m == null))?null:m);return (function (){var or__19711__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__69230 = x__20914__auto__;return goog.typeOf(G__69230);
})()]);if(or__19711__auto__)
{return or__19711__auto__;
} else
{var or__19711__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__19711__auto____$1)
{return or__19711__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__19697__auto__ = m;if(and__19697__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__19697__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__20914__auto__ = (((m == null))?null:m);return (function (){var or__19711__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__69234 = x__20914__auto__;return goog.typeOf(G__69234);
})()]);if(or__19711__auto__)
{return or__19711__auto__;
} else
{var or__19711__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__19711__auto____$1)
{return or__19711__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__19697__auto__ = m;if(and__19697__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__19697__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__20914__auto__ = (((m == null))?null:m);return (function (){var or__19711__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__69238 = x__20914__auto__;return goog.typeOf(G__69238);
})()]);if(or__19711__auto__)
{return or__19711__auto__;
} else
{var or__19711__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__19711__auto____$1)
{return or__19711__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__69362 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__69362) : cljs.core.atom.call(null,G__69362));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = (function (){var G__69363 = new cljs.core.Keyword(null,"mute","mute",1151223646);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__69363) : cljs.core.atom.call(null,G__69363));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__69364 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__69364) : attr.call(null,G__69364));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__69365 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__69365) : cljs.core.deref.call(null,G__69365));
})();var mode = (function (){var G__69366 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__69366) : cljs.core.deref.call(null,G__69366));
})();var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t69367 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t69367 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta69368){
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
this.meta69368 = meta69368;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t69367.cljs$lang$type = true;
cljs.core.async.t69367.cljs$lang$ctorStr = "cljs.core.async/t69367";
cljs.core.async.t69367.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"cljs.core.async/t69367");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t69367.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t69367.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t69367.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t69367.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__69370_69485 = self__.cs;var G__69371_69486 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__69370_69485,G__69371_69486) : cljs.core.reset_BANG_.call(null,G__69370_69485,G__69371_69486));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t69367.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t69367.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__69372 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__69372) : self__.solo_modes.call(null,G__69372));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__69373_69487 = self__.solo_mode;var G__69374_69488 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__69373_69487,G__69374_69488) : cljs.core.reset_BANG_.call(null,G__69373_69487,G__69374_69488));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t69367.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t69367.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t69367.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_69369){var self__ = this;
var _69369__$1 = this;return self__.meta69368;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t69367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_69369,meta69368__$1){var self__ = this;
var _69369__$1 = this;return (new cljs.core.async.t69367(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta69368__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t69367 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t69367(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta69368){return (new cljs.core.async.t69367(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta69368));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t69367(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__23127__auto___69489 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23127__auto___69489,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__23128__auto__ = (function (){var switch__23112__auto__ = ((function (c__23127__auto___69489,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_69441){var state_val_69442 = (state_69441[(1)]);if((state_val_69442 === (7)))
{var inst_69388 = (state_69441[(7)]);var inst_69393 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_69388);var state_69441__$1 = state_69441;var statearr_69443_69490 = state_69441__$1;(statearr_69443_69490[(2)] = inst_69393);
(statearr_69443_69490[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69442 === (20)))
{var inst_69403 = (state_69441[(8)]);var state_69441__$1 = state_69441;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69441__$1,(23),out,inst_69403);
} else
{if((state_val_69442 === (1)))
{var inst_69378 = (state_69441[(9)]);var inst_69378__$1 = calc_state();var inst_69379 = cljs.core.seq_QMARK_(inst_69378__$1);var state_69441__$1 = (function (){var statearr_69444 = state_69441;(statearr_69444[(9)] = inst_69378__$1);
return statearr_69444;
})();if(inst_69379)
{var statearr_69445_69491 = state_69441__$1;(statearr_69445_69491[(1)] = (2));
} else
{var statearr_69446_69492 = state_69441__$1;(statearr_69446_69492[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69442 === (4)))
{var inst_69378 = (state_69441[(9)]);var inst_69384 = (state_69441[(2)]);var inst_69385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69384,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_69386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69384,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_69387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69384,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_69388 = inst_69378;var state_69441__$1 = (function (){var statearr_69447 = state_69441;(statearr_69447[(10)] = inst_69385);
(statearr_69447[(7)] = inst_69388);
(statearr_69447[(11)] = inst_69386);
(statearr_69447[(12)] = inst_69387);
return statearr_69447;
})();var statearr_69448_69493 = state_69441__$1;(statearr_69448_69493[(2)] = null);
(statearr_69448_69493[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69442 === (15)))
{var state_69441__$1 = state_69441;var statearr_69449_69494 = state_69441__$1;(statearr_69449_69494[(2)] = null);
(statearr_69449_69494[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69442 === (21)))
{var state_69441__$1 = state_69441;var statearr_69450_69495 = state_69441__$1;(statearr_69450_69495[(2)] = null);
(statearr_69450_69495[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69442 === (13)))
{var inst_69437 = (state_69441[(2)]);var state_69441__$1 = state_69441;var statearr_69451_69496 = state_69441__$1;(statearr_69451_69496[(2)] = inst_69437);
(statearr_69451_69496[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69442 === (22)))
{var inst_69396 = (state_69441[(13)]);var inst_69434 = (state_69441[(2)]);var inst_69388 = inst_69396;var state_69441__$1 = (function (){var statearr_69452 = state_69441;(statearr_69452[(7)] = inst_69388);
(statearr_69452[(14)] = inst_69434);
return statearr_69452;
})();var statearr_69453_69497 = state_69441__$1;(statearr_69453_69497[(2)] = null);
(statearr_69453_69497[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69442 === (6)))
{var inst_69439 = (state_69441[(2)]);var state_69441__$1 = state_69441;return cljs.core.async.impl.ioc_helpers.return_chan(state_69441__$1,inst_69439);
} else
{if((state_val_69442 === (17)))
{var inst_69419 = (state_69441[(15)]);var state_69441__$1 = state_69441;var statearr_69454_69498 = state_69441__$1;(statearr_69454_69498[(2)] = inst_69419);
(statearr_69454_69498[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69442 === (3)))
{var inst_69378 = (state_69441[(9)]);var state_69441__$1 = state_69441;var statearr_69455_69499 = state_69441__$1;(statearr_69455_69499[(2)] = inst_69378);
(statearr_69455_69499[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69442 === (12)))
{var inst_69419 = (state_69441[(15)]);var inst_69404 = (state_69441[(16)]);var inst_69399 = (state_69441[(17)]);var inst_69419__$1 = (function (){var G__69456 = inst_69404;return (inst_69399.cljs$core$IFn$_invoke$arity$1 ? inst_69399.cljs$core$IFn$_invoke$arity$1(G__69456) : inst_69399.call(null,G__69456));
})();var state_69441__$1 = (function (){var statearr_69457 = state_69441;(statearr_69457[(15)] = inst_69419__$1);
return statearr_69457;
})();if(cljs.core.truth_(inst_69419__$1))
{var statearr_69458_69500 = state_69441__$1;(statearr_69458_69500[(1)] = (17));
} else
{var statearr_69459_69501 = state_69441__$1;(statearr_69459_69501[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69442 === (2)))
{var inst_69378 = (state_69441[(9)]);var inst_69381 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_69378);var state_69441__$1 = state_69441;var statearr_69460_69502 = state_69441__$1;(statearr_69460_69502[(2)] = inst_69381);
(statearr_69460_69502[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69442 === (23)))
{var inst_69431 = (state_69441[(2)]);var state_69441__$1 = state_69441;var statearr_69461_69503 = state_69441__$1;(statearr_69461_69503[(2)] = inst_69431);
(statearr_69461_69503[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69442 === (19)))
{var inst_69428 = (state_69441[(2)]);var state_69441__$1 = state_69441;if(cljs.core.truth_(inst_69428))
{var statearr_69462_69504 = state_69441__$1;(statearr_69462_69504[(1)] = (20));
} else
{var statearr_69463_69505 = state_69441__$1;(statearr_69463_69505[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69442 === (11)))
{var inst_69403 = (state_69441[(8)]);var inst_69409 = (inst_69403 == null);var state_69441__$1 = state_69441;if(cljs.core.truth_(inst_69409))
{var statearr_69464_69506 = state_69441__$1;(statearr_69464_69506[(1)] = (14));
} else
{var statearr_69465_69507 = state_69441__$1;(statearr_69465_69507[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69442 === (9)))
{var inst_69396 = (state_69441[(13)]);var inst_69396__$1 = (state_69441[(2)]);var inst_69397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69396__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_69398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69396__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_69399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69396__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_69441__$1 = (function (){var statearr_69466 = state_69441;(statearr_69466[(13)] = inst_69396__$1);
(statearr_69466[(18)] = inst_69398);
(statearr_69466[(17)] = inst_69399);
return statearr_69466;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_69441__$1,(10),inst_69397);
} else
{if((state_val_69442 === (5)))
{var inst_69388 = (state_69441[(7)]);var inst_69391 = cljs.core.seq_QMARK_(inst_69388);var state_69441__$1 = state_69441;if(inst_69391)
{var statearr_69467_69508 = state_69441__$1;(statearr_69467_69508[(1)] = (7));
} else
{var statearr_69468_69509 = state_69441__$1;(statearr_69468_69509[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69442 === (14)))
{var inst_69404 = (state_69441[(16)]);var inst_69411 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_69404);var state_69441__$1 = state_69441;var statearr_69469_69510 = state_69441__$1;(statearr_69469_69510[(2)] = inst_69411);
(statearr_69469_69510[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69442 === (16)))
{var inst_69414 = (state_69441[(2)]);var inst_69415 = calc_state();var inst_69388 = inst_69415;var state_69441__$1 = (function (){var statearr_69470 = state_69441;(statearr_69470[(19)] = inst_69414);
(statearr_69470[(7)] = inst_69388);
return statearr_69470;
})();var statearr_69471_69511 = state_69441__$1;(statearr_69471_69511[(2)] = null);
(statearr_69471_69511[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69442 === (10)))
{var inst_69403 = (state_69441[(8)]);var inst_69404 = (state_69441[(16)]);var inst_69402 = (state_69441[(2)]);var inst_69403__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69402,(0),null);var inst_69404__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69402,(1),null);var inst_69405 = (inst_69403__$1 == null);var inst_69406 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_69404__$1,change);var inst_69407 = (inst_69405) || (inst_69406);var state_69441__$1 = (function (){var statearr_69472 = state_69441;(statearr_69472[(8)] = inst_69403__$1);
(statearr_69472[(16)] = inst_69404__$1);
return statearr_69472;
})();if(cljs.core.truth_(inst_69407))
{var statearr_69473_69512 = state_69441__$1;(statearr_69473_69512[(1)] = (11));
} else
{var statearr_69474_69513 = state_69441__$1;(statearr_69474_69513[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69442 === (18)))
{var inst_69398 = (state_69441[(18)]);var inst_69404 = (state_69441[(16)]);var inst_69399 = (state_69441[(17)]);var inst_69423 = cljs.core.empty_QMARK_(inst_69399);var inst_69424 = (function (){var G__69475 = inst_69404;return (inst_69398.cljs$core$IFn$_invoke$arity$1 ? inst_69398.cljs$core$IFn$_invoke$arity$1(G__69475) : inst_69398.call(null,G__69475));
})();var inst_69425 = cljs.core.not(inst_69424);var inst_69426 = (inst_69423) && (inst_69425);var state_69441__$1 = state_69441;var statearr_69476_69514 = state_69441__$1;(statearr_69476_69514[(2)] = inst_69426);
(statearr_69476_69514[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69442 === (8)))
{var inst_69388 = (state_69441[(7)]);var state_69441__$1 = state_69441;var statearr_69477_69515 = state_69441__$1;(statearr_69477_69515[(2)] = inst_69388);
(statearr_69477_69515[(1)] = (9));
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
});})(c__23127__auto___69489,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__23112__auto__,c__23127__auto___69489,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__23113__auto__ = null;
var state_machine__23113__auto____0 = (function (){var statearr_69481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_69481[(0)] = state_machine__23113__auto__);
(statearr_69481[(1)] = (1));
return statearr_69481;
});
var state_machine__23113__auto____1 = (function (state_69441){while(true){
var ret_value__23114__auto__ = (function (){try{while(true){
var result__23115__auto__ = switch__23112__auto__(state_69441);if(cljs.core.keyword_identical_QMARK_(result__23115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__23115__auto__;
}
break;
}
}catch (e69482){if((e69482 instanceof Object))
{var ex__23116__auto__ = e69482;var statearr_69483_69516 = state_69441;(statearr_69483_69516[(5)] = ex__23116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_69441);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e69482;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__23114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__69517 = state_69441;
state_69441 = G__69517;
continue;
}
} else
{return ret_value__23114__auto__;
}
break;
}
});
state_machine__23113__auto__ = function(state_69441){
switch(arguments.length){
case 0:
return state_machine__23113__auto____0.call(this);
case 1:
return state_machine__23113__auto____1.call(this,state_69441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23113__auto____0;
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23113__auto____1;
return state_machine__23113__auto__;
})()
;})(switch__23112__auto__,c__23127__auto___69489,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__23129__auto__ = (function (){var statearr_69484 = (function (){return (f__23128__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23128__auto__.cljs$core$IFn$_invoke$arity$0() : f__23128__auto__.call(null));
})();(statearr_69484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23127__auto___69489);
return statearr_69484;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23129__auto__);
});})(c__23127__auto___69489,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj69519 = {};return obj69519;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__19697__auto__ = p;if(and__19697__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__19697__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__20914__auto__ = (((p == null))?null:p);return (function (){var or__19711__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__69523 = x__20914__auto__;return goog.typeOf(G__69523);
})()]);if(or__19711__auto__)
{return or__19711__auto__;
} else
{var or__19711__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__19711__auto____$1)
{return or__19711__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__19697__auto__ = p;if(and__19697__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__19697__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__20914__auto__ = (((p == null))?null:p);return (function (){var or__19711__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__69527 = x__20914__auto__;return goog.typeOf(G__69527);
})()]);if(or__19711__auto__)
{return or__19711__auto__;
} else
{var or__19711__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__19711__auto____$1)
{return or__19711__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__19697__auto__ = p;if(and__19697__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__19697__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__20914__auto__ = (((p == null))?null:p);return (function (){var or__19711__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__69533 = x__20914__auto__;return goog.typeOf(G__69533);
})()]);if(or__19711__auto__)
{return or__19711__auto__;
} else
{var or__19711__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__19711__auto____$1)
{return or__19711__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__19697__auto__ = p;if(and__19697__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__19697__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__20914__auto__ = (((p == null))?null:p);return (function (){var or__19711__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__69535 = x__20914__auto__;return goog.typeOf(G__69535);
})()]);if(or__19711__auto__)
{return or__19711__auto__;
} else
{var or__19711__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__19711__auto____$1)
{return or__19711__auto____$1;
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
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__69676 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__69676) : cljs.core.atom.call(null,G__69676));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__19711__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__69678 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__69678) : cljs.core.deref.call(null,G__69678));
})(),topic);if(cljs.core.truth_(or__19711__auto__))
{return or__19711__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__19711__auto__,mults){
return (function (p1__69536_SHARP_){if(cljs.core.truth_((function (){var G__69679 = topic;return (p1__69536_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__69536_SHARP_.cljs$core$IFn$_invoke$arity$1(G__69679) : p1__69536_SHARP_.call(null,G__69679));
})()))
{return p1__69536_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__69536_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__69680 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__69680) : buf_fn.call(null,G__69680));
})())));
}
});})(or__19711__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t69681 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t69681 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta69682){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta69682 = meta69682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t69681.cljs$lang$type = true;
cljs.core.async.t69681.cljs$lang$ctorStr = "cljs.core.async/t69681";
cljs.core.async.t69681.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"cljs.core.async/t69681");
});})(mults,ensure_mult))
;
cljs.core.async.t69681.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t69681.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__69684 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__69684) : self__.ensure_mult.call(null,G__69684));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t69681.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__69685 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__69685) : cljs.core.deref.call(null,G__69685));
})(),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t69681.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__69686 = self__.mults;var G__69687 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__69686,G__69687) : cljs.core.reset_BANG_.call(null,G__69686,G__69687));
});})(mults,ensure_mult))
;
cljs.core.async.t69681.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t69681.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t69681.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t69681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_69683){var self__ = this;
var _69683__$1 = this;return self__.meta69682;
});})(mults,ensure_mult))
;
cljs.core.async.t69681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_69683,meta69682__$1){var self__ = this;
var _69683__$1 = this;return (new cljs.core.async.t69681(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta69682__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t69681 = ((function (mults,ensure_mult){
return (function __GT_t69681(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta69682){return (new cljs.core.async.t69681(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta69682));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t69681(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__23127__auto___69812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23127__auto___69812,mults,ensure_mult,p){
return (function (){var f__23128__auto__ = (function (){var switch__23112__auto__ = ((function (c__23127__auto___69812,mults,ensure_mult,p){
return (function (state_69761){var state_val_69762 = (state_69761[(1)]);if((state_val_69762 === (7)))
{var inst_69757 = (state_69761[(2)]);var state_69761__$1 = state_69761;var statearr_69763_69813 = state_69761__$1;(statearr_69763_69813[(2)] = inst_69757);
(statearr_69763_69813[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69762 === (20)))
{var state_69761__$1 = state_69761;var statearr_69764_69814 = state_69761__$1;(statearr_69764_69814[(2)] = null);
(statearr_69764_69814[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69762 === (1)))
{var state_69761__$1 = state_69761;var statearr_69765_69815 = state_69761__$1;(statearr_69765_69815[(2)] = null);
(statearr_69765_69815[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69762 === (24)))
{var inst_69740 = (state_69761[(7)]);var inst_69690 = (state_69761[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_69761,(23),Object,null,(22));var inst_69747 = cljs.core.async.muxch_STAR_(inst_69740);var state_69761__$1 = state_69761;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69761__$1,(25),inst_69747,inst_69690);
} else
{if((state_val_69762 === (4)))
{var inst_69690 = (state_69761[(8)]);var inst_69690__$1 = (state_69761[(2)]);var inst_69691 = (inst_69690__$1 == null);var state_69761__$1 = (function (){var statearr_69766 = state_69761;(statearr_69766[(8)] = inst_69690__$1);
return statearr_69766;
})();if(cljs.core.truth_(inst_69691))
{var statearr_69767_69816 = state_69761__$1;(statearr_69767_69816[(1)] = (5));
} else
{var statearr_69768_69817 = state_69761__$1;(statearr_69768_69817[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69762 === (15)))
{var inst_69732 = (state_69761[(2)]);var state_69761__$1 = state_69761;var statearr_69769_69818 = state_69761__$1;(statearr_69769_69818[(2)] = inst_69732);
(statearr_69769_69818[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69762 === (21)))
{var inst_69754 = (state_69761[(2)]);var state_69761__$1 = (function (){var statearr_69770 = state_69761;(statearr_69770[(9)] = inst_69754);
return statearr_69770;
})();var statearr_69771_69819 = state_69761__$1;(statearr_69771_69819[(2)] = null);
(statearr_69771_69819[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69762 === (13)))
{var inst_69714 = (state_69761[(10)]);var inst_69716 = cljs.core.chunked_seq_QMARK_(inst_69714);var state_69761__$1 = state_69761;if(inst_69716)
{var statearr_69772_69820 = state_69761__$1;(statearr_69772_69820[(1)] = (16));
} else
{var statearr_69773_69821 = state_69761__$1;(statearr_69773_69821[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69762 === (22)))
{var inst_69751 = (state_69761[(2)]);var state_69761__$1 = state_69761;var statearr_69774_69822 = state_69761__$1;(statearr_69774_69822[(2)] = inst_69751);
(statearr_69774_69822[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69762 === (6)))
{var inst_69740 = (state_69761[(7)]);var inst_69690 = (state_69761[(8)]);var inst_69738 = (state_69761[(11)]);var inst_69738__$1 = (function (){var G__69775 = inst_69690;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__69775) : topic_fn.call(null,G__69775));
})();var inst_69739 = (function (){var G__69776 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__69776) : cljs.core.deref.call(null,G__69776));
})();var inst_69740__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69739,inst_69738__$1);var state_69761__$1 = (function (){var statearr_69777 = state_69761;(statearr_69777[(7)] = inst_69740__$1);
(statearr_69777[(11)] = inst_69738__$1);
return statearr_69777;
})();if(cljs.core.truth_(inst_69740__$1))
{var statearr_69778_69823 = state_69761__$1;(statearr_69778_69823[(1)] = (19));
} else
{var statearr_69779_69824 = state_69761__$1;(statearr_69779_69824[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69762 === (25)))
{var inst_69749 = (state_69761[(2)]);var state_69761__$1 = state_69761;var statearr_69780_69825 = state_69761__$1;(statearr_69780_69825[(2)] = inst_69749);
cljs.core.async.impl.ioc_helpers.process_exception(state_69761__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69762 === (17)))
{var inst_69714 = (state_69761[(10)]);var inst_69723 = cljs.core.first(inst_69714);var inst_69724 = cljs.core.async.muxch_STAR_(inst_69723);var inst_69725 = cljs.core.async.close_BANG_(inst_69724);var inst_69726 = cljs.core.next(inst_69714);var inst_69700 = inst_69726;var inst_69701 = null;var inst_69702 = (0);var inst_69703 = (0);var state_69761__$1 = (function (){var statearr_69781 = state_69761;(statearr_69781[(12)] = inst_69702);
(statearr_69781[(13)] = inst_69700);
(statearr_69781[(14)] = inst_69703);
(statearr_69781[(15)] = inst_69701);
(statearr_69781[(16)] = inst_69725);
return statearr_69781;
})();var statearr_69782_69826 = state_69761__$1;(statearr_69782_69826[(2)] = null);
(statearr_69782_69826[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69762 === (3)))
{var inst_69759 = (state_69761[(2)]);var state_69761__$1 = state_69761;return cljs.core.async.impl.ioc_helpers.return_chan(state_69761__$1,inst_69759);
} else
{if((state_val_69762 === (12)))
{var inst_69734 = (state_69761[(2)]);var state_69761__$1 = state_69761;var statearr_69783_69827 = state_69761__$1;(statearr_69783_69827[(2)] = inst_69734);
(statearr_69783_69827[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69762 === (2)))
{var state_69761__$1 = state_69761;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69761__$1,(4),ch);
} else
{if((state_val_69762 === (23)))
{var inst_69738 = (state_69761[(11)]);var inst_69742 = (state_69761[(2)]);var inst_69743 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_69738);var state_69761__$1 = (function (){var statearr_69784 = state_69761;(statearr_69784[(17)] = inst_69742);
return statearr_69784;
})();var statearr_69785_69828 = state_69761__$1;(statearr_69785_69828[(2)] = inst_69743);
cljs.core.async.impl.ioc_helpers.process_exception(state_69761__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69762 === (19)))
{var state_69761__$1 = state_69761;var statearr_69786_69829 = state_69761__$1;(statearr_69786_69829[(2)] = null);
(statearr_69786_69829[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69762 === (11)))
{var inst_69714 = (state_69761[(10)]);var inst_69700 = (state_69761[(13)]);var inst_69714__$1 = cljs.core.seq(inst_69700);var state_69761__$1 = (function (){var statearr_69787 = state_69761;(statearr_69787[(10)] = inst_69714__$1);
return statearr_69787;
})();if(inst_69714__$1)
{var statearr_69788_69830 = state_69761__$1;(statearr_69788_69830[(1)] = (13));
} else
{var statearr_69789_69831 = state_69761__$1;(statearr_69789_69831[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69762 === (9)))
{var inst_69736 = (state_69761[(2)]);var state_69761__$1 = state_69761;var statearr_69790_69832 = state_69761__$1;(statearr_69790_69832[(2)] = inst_69736);
(statearr_69790_69832[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69762 === (5)))
{var inst_69697 = (function (){var G__69791 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__69791) : cljs.core.deref.call(null,G__69791));
})();var inst_69698 = cljs.core.vals(inst_69697);var inst_69699 = cljs.core.seq(inst_69698);var inst_69700 = inst_69699;var inst_69701 = null;var inst_69702 = (0);var inst_69703 = (0);var state_69761__$1 = (function (){var statearr_69792 = state_69761;(statearr_69792[(12)] = inst_69702);
(statearr_69792[(13)] = inst_69700);
(statearr_69792[(14)] = inst_69703);
(statearr_69792[(15)] = inst_69701);
return statearr_69792;
})();var statearr_69793_69833 = state_69761__$1;(statearr_69793_69833[(2)] = null);
(statearr_69793_69833[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69762 === (14)))
{var state_69761__$1 = state_69761;var statearr_69797_69834 = state_69761__$1;(statearr_69797_69834[(2)] = null);
(statearr_69797_69834[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69762 === (16)))
{var inst_69714 = (state_69761[(10)]);var inst_69718 = cljs.core.chunk_first(inst_69714);var inst_69719 = cljs.core.chunk_rest(inst_69714);var inst_69720 = cljs.core.count(inst_69718);var inst_69700 = inst_69719;var inst_69701 = inst_69718;var inst_69702 = inst_69720;var inst_69703 = (0);var state_69761__$1 = (function (){var statearr_69798 = state_69761;(statearr_69798[(12)] = inst_69702);
(statearr_69798[(13)] = inst_69700);
(statearr_69798[(14)] = inst_69703);
(statearr_69798[(15)] = inst_69701);
return statearr_69798;
})();var statearr_69799_69835 = state_69761__$1;(statearr_69799_69835[(2)] = null);
(statearr_69799_69835[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69762 === (10)))
{var inst_69702 = (state_69761[(12)]);var inst_69700 = (state_69761[(13)]);var inst_69703 = (state_69761[(14)]);var inst_69701 = (state_69761[(15)]);var inst_69708 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_69701,inst_69703);var inst_69709 = cljs.core.async.muxch_STAR_(inst_69708);var inst_69710 = cljs.core.async.close_BANG_(inst_69709);var inst_69711 = (inst_69703 + (1));var tmp69794 = inst_69702;var tmp69795 = inst_69700;var tmp69796 = inst_69701;var inst_69700__$1 = tmp69795;var inst_69701__$1 = tmp69796;var inst_69702__$1 = tmp69794;var inst_69703__$1 = inst_69711;var state_69761__$1 = (function (){var statearr_69800 = state_69761;(statearr_69800[(18)] = inst_69710);
(statearr_69800[(12)] = inst_69702__$1);
(statearr_69800[(13)] = inst_69700__$1);
(statearr_69800[(14)] = inst_69703__$1);
(statearr_69800[(15)] = inst_69701__$1);
return statearr_69800;
})();var statearr_69801_69836 = state_69761__$1;(statearr_69801_69836[(2)] = null);
(statearr_69801_69836[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69762 === (18)))
{var inst_69729 = (state_69761[(2)]);var state_69761__$1 = state_69761;var statearr_69802_69837 = state_69761__$1;(statearr_69802_69837[(2)] = inst_69729);
(statearr_69802_69837[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69762 === (8)))
{var inst_69702 = (state_69761[(12)]);var inst_69703 = (state_69761[(14)]);var inst_69705 = (inst_69703 < inst_69702);var inst_69706 = inst_69705;var state_69761__$1 = state_69761;if(cljs.core.truth_(inst_69706))
{var statearr_69803_69838 = state_69761__$1;(statearr_69803_69838[(1)] = (10));
} else
{var statearr_69804_69839 = state_69761__$1;(statearr_69804_69839[(1)] = (11));
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
});})(c__23127__auto___69812,mults,ensure_mult,p))
;return ((function (switch__23112__auto__,c__23127__auto___69812,mults,ensure_mult,p){
return (function() {
var state_machine__23113__auto__ = null;
var state_machine__23113__auto____0 = (function (){var statearr_69808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_69808[(0)] = state_machine__23113__auto__);
(statearr_69808[(1)] = (1));
return statearr_69808;
});
var state_machine__23113__auto____1 = (function (state_69761){while(true){
var ret_value__23114__auto__ = (function (){try{while(true){
var result__23115__auto__ = switch__23112__auto__(state_69761);if(cljs.core.keyword_identical_QMARK_(result__23115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__23115__auto__;
}
break;
}
}catch (e69809){if((e69809 instanceof Object))
{var ex__23116__auto__ = e69809;var statearr_69810_69840 = state_69761;(statearr_69810_69840[(5)] = ex__23116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_69761);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e69809;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__23114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__69841 = state_69761;
state_69761 = G__69841;
continue;
}
} else
{return ret_value__23114__auto__;
}
break;
}
});
state_machine__23113__auto__ = function(state_69761){
switch(arguments.length){
case 0:
return state_machine__23113__auto____0.call(this);
case 1:
return state_machine__23113__auto____1.call(this,state_69761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23113__auto____0;
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23113__auto____1;
return state_machine__23113__auto__;
})()
;})(switch__23112__auto__,c__23127__auto___69812,mults,ensure_mult,p))
})();var state__23129__auto__ = (function (){var statearr_69811 = (function (){return (f__23128__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23128__auto__.cljs$core$IFn$_invoke$arity$0() : f__23128__auto__.call(null));
})();(statearr_69811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23127__auto___69812);
return statearr_69811;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23129__auto__);
});})(c__23127__auto___69812,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__69922 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__69922) : cljs.core.atom.call(null,G__69922));
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__23127__auto___69995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23127__auto___69995,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__23128__auto__ = (function (){var switch__23112__auto__ = ((function (c__23127__auto___69995,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_69961){var state_val_69962 = (state_69961[(1)]);if((state_val_69962 === (7)))
{var state_69961__$1 = state_69961;var statearr_69963_69996 = state_69961__$1;(statearr_69963_69996[(2)] = null);
(statearr_69963_69996[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69962 === (1)))
{var state_69961__$1 = state_69961;var statearr_69964_69997 = state_69961__$1;(statearr_69964_69997[(2)] = null);
(statearr_69964_69997[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69962 === (4)))
{var inst_69925 = (state_69961[(7)]);var inst_69927 = (inst_69925 < cnt);var state_69961__$1 = state_69961;if(cljs.core.truth_(inst_69927))
{var statearr_69965_69998 = state_69961__$1;(statearr_69965_69998[(1)] = (6));
} else
{var statearr_69966_69999 = state_69961__$1;(statearr_69966_69999[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69962 === (15)))
{var inst_69957 = (state_69961[(2)]);var state_69961__$1 = state_69961;var statearr_69967_70000 = state_69961__$1;(statearr_69967_70000[(2)] = inst_69957);
(statearr_69967_70000[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69962 === (13)))
{var inst_69950 = cljs.core.async.close_BANG_(out);var state_69961__$1 = state_69961;var statearr_69968_70001 = state_69961__$1;(statearr_69968_70001[(2)] = inst_69950);
(statearr_69968_70001[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69962 === (6)))
{var state_69961__$1 = state_69961;var statearr_69969_70002 = state_69961__$1;(statearr_69969_70002[(2)] = null);
(statearr_69969_70002[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69962 === (3)))
{var inst_69959 = (state_69961[(2)]);var state_69961__$1 = state_69961;return cljs.core.async.impl.ioc_helpers.return_chan(state_69961__$1,inst_69959);
} else
{if((state_val_69962 === (12)))
{var inst_69947 = (state_69961[(8)]);var inst_69947__$1 = (state_69961[(2)]);var inst_69948 = cljs.core.some(cljs.core.nil_QMARK_,inst_69947__$1);var state_69961__$1 = (function (){var statearr_69970 = state_69961;(statearr_69970[(8)] = inst_69947__$1);
return statearr_69970;
})();if(cljs.core.truth_(inst_69948))
{var statearr_69971_70003 = state_69961__$1;(statearr_69971_70003[(1)] = (13));
} else
{var statearr_69972_70004 = state_69961__$1;(statearr_69972_70004[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69962 === (2)))
{var inst_69924 = (function (){var G__69973 = dctr;var G__69974 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__69973,G__69974) : cljs.core.reset_BANG_.call(null,G__69973,G__69974));
})();var inst_69925 = (0);var state_69961__$1 = (function (){var statearr_69975 = state_69961;(statearr_69975[(7)] = inst_69925);
(statearr_69975[(9)] = inst_69924);
return statearr_69975;
})();var statearr_69976_70005 = state_69961__$1;(statearr_69976_70005[(2)] = null);
(statearr_69976_70005[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69962 === (11)))
{var inst_69925 = (state_69961[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_69961,(10),Object,null,(9));var inst_69934 = (function (){var G__69977 = inst_69925;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__69977) : chs__$1.call(null,G__69977));
})();var inst_69935 = (function (){var G__69978 = inst_69925;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__69978) : done.call(null,G__69978));
})();var inst_69936 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_69934,inst_69935);var state_69961__$1 = state_69961;var statearr_69979_70006 = state_69961__$1;(statearr_69979_70006[(2)] = inst_69936);
cljs.core.async.impl.ioc_helpers.process_exception(state_69961__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69962 === (9)))
{var inst_69925 = (state_69961[(7)]);var inst_69938 = (state_69961[(2)]);var inst_69939 = (inst_69925 + (1));var inst_69925__$1 = inst_69939;var state_69961__$1 = (function (){var statearr_69980 = state_69961;(statearr_69980[(7)] = inst_69925__$1);
(statearr_69980[(10)] = inst_69938);
return statearr_69980;
})();var statearr_69981_70007 = state_69961__$1;(statearr_69981_70007[(2)] = null);
(statearr_69981_70007[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69962 === (5)))
{var inst_69945 = (state_69961[(2)]);var state_69961__$1 = (function (){var statearr_69982 = state_69961;(statearr_69982[(11)] = inst_69945);
return statearr_69982;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69961__$1,(12),dchan);
} else
{if((state_val_69962 === (14)))
{var inst_69947 = (state_69961[(8)]);var inst_69952 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_69947);var state_69961__$1 = state_69961;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69961__$1,(16),out,inst_69952);
} else
{if((state_val_69962 === (16)))
{var inst_69954 = (state_69961[(2)]);var state_69961__$1 = (function (){var statearr_69983 = state_69961;(statearr_69983[(12)] = inst_69954);
return statearr_69983;
})();var statearr_69984_70008 = state_69961__$1;(statearr_69984_70008[(2)] = null);
(statearr_69984_70008[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69962 === (10)))
{var inst_69929 = (state_69961[(2)]);var inst_69930 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_69961__$1 = (function (){var statearr_69985 = state_69961;(statearr_69985[(13)] = inst_69929);
return statearr_69985;
})();var statearr_69986_70009 = state_69961__$1;(statearr_69986_70009[(2)] = inst_69930);
cljs.core.async.impl.ioc_helpers.process_exception(state_69961__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_69962 === (8)))
{var inst_69943 = (state_69961[(2)]);var state_69961__$1 = state_69961;var statearr_69987_70010 = state_69961__$1;(statearr_69987_70010[(2)] = inst_69943);
(statearr_69987_70010[(1)] = (5));
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
});})(c__23127__auto___69995,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__23112__auto__,c__23127__auto___69995,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__23113__auto__ = null;
var state_machine__23113__auto____0 = (function (){var statearr_69991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_69991[(0)] = state_machine__23113__auto__);
(statearr_69991[(1)] = (1));
return statearr_69991;
});
var state_machine__23113__auto____1 = (function (state_69961){while(true){
var ret_value__23114__auto__ = (function (){try{while(true){
var result__23115__auto__ = switch__23112__auto__(state_69961);if(cljs.core.keyword_identical_QMARK_(result__23115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__23115__auto__;
}
break;
}
}catch (e69992){if((e69992 instanceof Object))
{var ex__23116__auto__ = e69992;var statearr_69993_70011 = state_69961;(statearr_69993_70011[(5)] = ex__23116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_69961);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e69992;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__23114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__70012 = state_69961;
state_69961 = G__70012;
continue;
}
} else
{return ret_value__23114__auto__;
}
break;
}
});
state_machine__23113__auto__ = function(state_69961){
switch(arguments.length){
case 0:
return state_machine__23113__auto____0.call(this);
case 1:
return state_machine__23113__auto____1.call(this,state_69961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23113__auto____0;
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23113__auto____1;
return state_machine__23113__auto__;
})()
;})(switch__23112__auto__,c__23127__auto___69995,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__23129__auto__ = (function (){var statearr_69994 = (function (){return (f__23128__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23128__auto__.cljs$core$IFn$_invoke$arity$0() : f__23128__auto__.call(null));
})();(statearr_69994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23127__auto___69995);
return statearr_69994;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23129__auto__);
});})(c__23127__auto___69995,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__23127__auto___70122 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23127__auto___70122,out){
return (function (){var f__23128__auto__ = (function (){var switch__23112__auto__ = ((function (c__23127__auto___70122,out){
return (function (state_70098){var state_val_70099 = (state_70098[(1)]);if((state_val_70099 === (7)))
{var inst_70077 = (state_70098[(7)]);var inst_70078 = (state_70098[(8)]);var inst_70077__$1 = (state_70098[(2)]);var inst_70078__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70077__$1,(0),null);var inst_70079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70077__$1,(1),null);var inst_70080 = (inst_70078__$1 == null);var state_70098__$1 = (function (){var statearr_70100 = state_70098;(statearr_70100[(7)] = inst_70077__$1);
(statearr_70100[(9)] = inst_70079);
(statearr_70100[(8)] = inst_70078__$1);
return statearr_70100;
})();if(cljs.core.truth_(inst_70080))
{var statearr_70101_70123 = state_70098__$1;(statearr_70101_70123[(1)] = (8));
} else
{var statearr_70102_70124 = state_70098__$1;(statearr_70102_70124[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70099 === (1)))
{var inst_70069 = cljs.core.vec(chs);var inst_70070 = inst_70069;var state_70098__$1 = (function (){var statearr_70103 = state_70098;(statearr_70103[(10)] = inst_70070);
return statearr_70103;
})();var statearr_70104_70125 = state_70098__$1;(statearr_70104_70125[(2)] = null);
(statearr_70104_70125[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70099 === (4)))
{var inst_70070 = (state_70098[(10)]);var state_70098__$1 = state_70098;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_70098__$1,(7),inst_70070);
} else
{if((state_val_70099 === (6)))
{var inst_70094 = (state_70098[(2)]);var state_70098__$1 = state_70098;var statearr_70105_70126 = state_70098__$1;(statearr_70105_70126[(2)] = inst_70094);
(statearr_70105_70126[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70099 === (3)))
{var inst_70096 = (state_70098[(2)]);var state_70098__$1 = state_70098;return cljs.core.async.impl.ioc_helpers.return_chan(state_70098__$1,inst_70096);
} else
{if((state_val_70099 === (2)))
{var inst_70070 = (state_70098[(10)]);var inst_70072 = cljs.core.count(inst_70070);var inst_70073 = (inst_70072 > (0));var state_70098__$1 = state_70098;if(cljs.core.truth_(inst_70073))
{var statearr_70107_70127 = state_70098__$1;(statearr_70107_70127[(1)] = (4));
} else
{var statearr_70108_70128 = state_70098__$1;(statearr_70108_70128[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70099 === (11)))
{var inst_70070 = (state_70098[(10)]);var inst_70087 = (state_70098[(2)]);var tmp70106 = inst_70070;var inst_70070__$1 = tmp70106;var state_70098__$1 = (function (){var statearr_70109 = state_70098;(statearr_70109[(10)] = inst_70070__$1);
(statearr_70109[(11)] = inst_70087);
return statearr_70109;
})();var statearr_70110_70129 = state_70098__$1;(statearr_70110_70129[(2)] = null);
(statearr_70110_70129[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70099 === (9)))
{var inst_70078 = (state_70098[(8)]);var state_70098__$1 = state_70098;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70098__$1,(11),out,inst_70078);
} else
{if((state_val_70099 === (5)))
{var inst_70092 = cljs.core.async.close_BANG_(out);var state_70098__$1 = state_70098;var statearr_70111_70130 = state_70098__$1;(statearr_70111_70130[(2)] = inst_70092);
(statearr_70111_70130[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70099 === (10)))
{var inst_70090 = (state_70098[(2)]);var state_70098__$1 = state_70098;var statearr_70112_70131 = state_70098__$1;(statearr_70112_70131[(2)] = inst_70090);
(statearr_70112_70131[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70099 === (8)))
{var inst_70070 = (state_70098[(10)]);var inst_70077 = (state_70098[(7)]);var inst_70079 = (state_70098[(9)]);var inst_70078 = (state_70098[(8)]);var inst_70082 = (function (){var c = inst_70079;var v = inst_70078;var vec__70075 = inst_70077;var cs = inst_70070;return ((function (c,v,vec__70075,cs,inst_70070,inst_70077,inst_70079,inst_70078,state_val_70099,c__23127__auto___70122,out){
return (function (p1__70013_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__70013_SHARP_);
});
;})(c,v,vec__70075,cs,inst_70070,inst_70077,inst_70079,inst_70078,state_val_70099,c__23127__auto___70122,out))
})();var inst_70083 = cljs.core.filterv(inst_70082,inst_70070);var inst_70070__$1 = inst_70083;var state_70098__$1 = (function (){var statearr_70113 = state_70098;(statearr_70113[(10)] = inst_70070__$1);
return statearr_70113;
})();var statearr_70114_70132 = state_70098__$1;(statearr_70114_70132[(2)] = null);
(statearr_70114_70132[(1)] = (2));
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
});})(c__23127__auto___70122,out))
;return ((function (switch__23112__auto__,c__23127__auto___70122,out){
return (function() {
var state_machine__23113__auto__ = null;
var state_machine__23113__auto____0 = (function (){var statearr_70118 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_70118[(0)] = state_machine__23113__auto__);
(statearr_70118[(1)] = (1));
return statearr_70118;
});
var state_machine__23113__auto____1 = (function (state_70098){while(true){
var ret_value__23114__auto__ = (function (){try{while(true){
var result__23115__auto__ = switch__23112__auto__(state_70098);if(cljs.core.keyword_identical_QMARK_(result__23115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__23115__auto__;
}
break;
}
}catch (e70119){if((e70119 instanceof Object))
{var ex__23116__auto__ = e70119;var statearr_70120_70133 = state_70098;(statearr_70120_70133[(5)] = ex__23116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_70098);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e70119;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__23114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__70134 = state_70098;
state_70098 = G__70134;
continue;
}
} else
{return ret_value__23114__auto__;
}
break;
}
});
state_machine__23113__auto__ = function(state_70098){
switch(arguments.length){
case 0:
return state_machine__23113__auto____0.call(this);
case 1:
return state_machine__23113__auto____1.call(this,state_70098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23113__auto____0;
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23113__auto____1;
return state_machine__23113__auto__;
})()
;})(switch__23112__auto__,c__23127__auto___70122,out))
})();var state__23129__auto__ = (function (){var statearr_70121 = (function (){return (f__23128__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23128__auto__.cljs$core$IFn$_invoke$arity$0() : f__23128__auto__.call(null));
})();(statearr_70121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23127__auto___70122);
return statearr_70121;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23129__auto__);
});})(c__23127__auto___70122,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__23127__auto___70230 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23127__auto___70230,out){
return (function (){var f__23128__auto__ = (function (){var switch__23112__auto__ = ((function (c__23127__auto___70230,out){
return (function (state_70207){var state_val_70208 = (state_70207[(1)]);if((state_val_70208 === (7)))
{var inst_70189 = (state_70207[(7)]);var inst_70189__$1 = (state_70207[(2)]);var inst_70190 = (inst_70189__$1 == null);var inst_70191 = cljs.core.not(inst_70190);var state_70207__$1 = (function (){var statearr_70209 = state_70207;(statearr_70209[(7)] = inst_70189__$1);
return statearr_70209;
})();if(inst_70191)
{var statearr_70210_70231 = state_70207__$1;(statearr_70210_70231[(1)] = (8));
} else
{var statearr_70211_70232 = state_70207__$1;(statearr_70211_70232[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70208 === (1)))
{var inst_70184 = (0);var state_70207__$1 = (function (){var statearr_70212 = state_70207;(statearr_70212[(8)] = inst_70184);
return statearr_70212;
})();var statearr_70213_70233 = state_70207__$1;(statearr_70213_70233[(2)] = null);
(statearr_70213_70233[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70208 === (4)))
{var state_70207__$1 = state_70207;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70207__$1,(7),ch);
} else
{if((state_val_70208 === (6)))
{var inst_70202 = (state_70207[(2)]);var state_70207__$1 = state_70207;var statearr_70214_70234 = state_70207__$1;(statearr_70214_70234[(2)] = inst_70202);
(statearr_70214_70234[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70208 === (3)))
{var inst_70204 = (state_70207[(2)]);var inst_70205 = cljs.core.async.close_BANG_(out);var state_70207__$1 = (function (){var statearr_70215 = state_70207;(statearr_70215[(9)] = inst_70204);
return statearr_70215;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_70207__$1,inst_70205);
} else
{if((state_val_70208 === (2)))
{var inst_70184 = (state_70207[(8)]);var inst_70186 = (inst_70184 < n);var state_70207__$1 = state_70207;if(cljs.core.truth_(inst_70186))
{var statearr_70216_70235 = state_70207__$1;(statearr_70216_70235[(1)] = (4));
} else
{var statearr_70217_70236 = state_70207__$1;(statearr_70217_70236[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70208 === (11)))
{var inst_70184 = (state_70207[(8)]);var inst_70194 = (state_70207[(2)]);var inst_70195 = (inst_70184 + (1));var inst_70184__$1 = inst_70195;var state_70207__$1 = (function (){var statearr_70218 = state_70207;(statearr_70218[(8)] = inst_70184__$1);
(statearr_70218[(10)] = inst_70194);
return statearr_70218;
})();var statearr_70219_70237 = state_70207__$1;(statearr_70219_70237[(2)] = null);
(statearr_70219_70237[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70208 === (9)))
{var state_70207__$1 = state_70207;var statearr_70220_70238 = state_70207__$1;(statearr_70220_70238[(2)] = null);
(statearr_70220_70238[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70208 === (5)))
{var state_70207__$1 = state_70207;var statearr_70221_70239 = state_70207__$1;(statearr_70221_70239[(2)] = null);
(statearr_70221_70239[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70208 === (10)))
{var inst_70199 = (state_70207[(2)]);var state_70207__$1 = state_70207;var statearr_70222_70240 = state_70207__$1;(statearr_70222_70240[(2)] = inst_70199);
(statearr_70222_70240[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70208 === (8)))
{var inst_70189 = (state_70207[(7)]);var state_70207__$1 = state_70207;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70207__$1,(11),out,inst_70189);
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
});})(c__23127__auto___70230,out))
;return ((function (switch__23112__auto__,c__23127__auto___70230,out){
return (function() {
var state_machine__23113__auto__ = null;
var state_machine__23113__auto____0 = (function (){var statearr_70226 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_70226[(0)] = state_machine__23113__auto__);
(statearr_70226[(1)] = (1));
return statearr_70226;
});
var state_machine__23113__auto____1 = (function (state_70207){while(true){
var ret_value__23114__auto__ = (function (){try{while(true){
var result__23115__auto__ = switch__23112__auto__(state_70207);if(cljs.core.keyword_identical_QMARK_(result__23115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__23115__auto__;
}
break;
}
}catch (e70227){if((e70227 instanceof Object))
{var ex__23116__auto__ = e70227;var statearr_70228_70241 = state_70207;(statearr_70228_70241[(5)] = ex__23116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_70207);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e70227;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__23114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__70242 = state_70207;
state_70207 = G__70242;
continue;
}
} else
{return ret_value__23114__auto__;
}
break;
}
});
state_machine__23113__auto__ = function(state_70207){
switch(arguments.length){
case 0:
return state_machine__23113__auto____0.call(this);
case 1:
return state_machine__23113__auto____1.call(this,state_70207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23113__auto____0;
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23113__auto____1;
return state_machine__23113__auto__;
})()
;})(switch__23112__auto__,c__23127__auto___70230,out))
})();var state__23129__auto__ = (function (){var statearr_70229 = (function (){return (f__23128__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23128__auto__.cljs$core$IFn$_invoke$arity$0() : f__23128__auto__.call(null));
})();(statearr_70229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23127__auto___70230);
return statearr_70229;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23129__auto__);
});})(c__23127__auto___70230,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__23127__auto___70341 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23127__auto___70341,out){
return (function (){var f__23128__auto__ = (function (){var switch__23112__auto__ = ((function (c__23127__auto___70341,out){
return (function (state_70316){var state_val_70317 = (state_70316[(1)]);if((state_val_70317 === (7)))
{var inst_70311 = (state_70316[(2)]);var state_70316__$1 = state_70316;var statearr_70318_70342 = state_70316__$1;(statearr_70318_70342[(2)] = inst_70311);
(statearr_70318_70342[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70317 === (1)))
{var inst_70293 = null;var state_70316__$1 = (function (){var statearr_70319 = state_70316;(statearr_70319[(7)] = inst_70293);
return statearr_70319;
})();var statearr_70320_70343 = state_70316__$1;(statearr_70320_70343[(2)] = null);
(statearr_70320_70343[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70317 === (4)))
{var inst_70296 = (state_70316[(8)]);var inst_70296__$1 = (state_70316[(2)]);var inst_70297 = (inst_70296__$1 == null);var inst_70298 = cljs.core.not(inst_70297);var state_70316__$1 = (function (){var statearr_70321 = state_70316;(statearr_70321[(8)] = inst_70296__$1);
return statearr_70321;
})();if(inst_70298)
{var statearr_70322_70344 = state_70316__$1;(statearr_70322_70344[(1)] = (5));
} else
{var statearr_70323_70345 = state_70316__$1;(statearr_70323_70345[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70317 === (6)))
{var state_70316__$1 = state_70316;var statearr_70324_70346 = state_70316__$1;(statearr_70324_70346[(2)] = null);
(statearr_70324_70346[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70317 === (3)))
{var inst_70313 = (state_70316[(2)]);var inst_70314 = cljs.core.async.close_BANG_(out);var state_70316__$1 = (function (){var statearr_70325 = state_70316;(statearr_70325[(9)] = inst_70313);
return statearr_70325;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_70316__$1,inst_70314);
} else
{if((state_val_70317 === (2)))
{var state_70316__$1 = state_70316;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70316__$1,(4),ch);
} else
{if((state_val_70317 === (11)))
{var inst_70296 = (state_70316[(8)]);var inst_70305 = (state_70316[(2)]);var inst_70293 = inst_70296;var state_70316__$1 = (function (){var statearr_70326 = state_70316;(statearr_70326[(7)] = inst_70293);
(statearr_70326[(10)] = inst_70305);
return statearr_70326;
})();var statearr_70327_70347 = state_70316__$1;(statearr_70327_70347[(2)] = null);
(statearr_70327_70347[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70317 === (9)))
{var inst_70296 = (state_70316[(8)]);var state_70316__$1 = state_70316;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70316__$1,(11),out,inst_70296);
} else
{if((state_val_70317 === (5)))
{var inst_70293 = (state_70316[(7)]);var inst_70296 = (state_70316[(8)]);var inst_70300 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_70296,inst_70293);var state_70316__$1 = state_70316;if(inst_70300)
{var statearr_70329_70348 = state_70316__$1;(statearr_70329_70348[(1)] = (8));
} else
{var statearr_70330_70349 = state_70316__$1;(statearr_70330_70349[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70317 === (10)))
{var inst_70308 = (state_70316[(2)]);var state_70316__$1 = state_70316;var statearr_70331_70350 = state_70316__$1;(statearr_70331_70350[(2)] = inst_70308);
(statearr_70331_70350[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70317 === (8)))
{var inst_70293 = (state_70316[(7)]);var tmp70328 = inst_70293;var inst_70293__$1 = tmp70328;var state_70316__$1 = (function (){var statearr_70332 = state_70316;(statearr_70332[(7)] = inst_70293__$1);
return statearr_70332;
})();var statearr_70333_70351 = state_70316__$1;(statearr_70333_70351[(2)] = null);
(statearr_70333_70351[(1)] = (2));
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
});})(c__23127__auto___70341,out))
;return ((function (switch__23112__auto__,c__23127__auto___70341,out){
return (function() {
var state_machine__23113__auto__ = null;
var state_machine__23113__auto____0 = (function (){var statearr_70337 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_70337[(0)] = state_machine__23113__auto__);
(statearr_70337[(1)] = (1));
return statearr_70337;
});
var state_machine__23113__auto____1 = (function (state_70316){while(true){
var ret_value__23114__auto__ = (function (){try{while(true){
var result__23115__auto__ = switch__23112__auto__(state_70316);if(cljs.core.keyword_identical_QMARK_(result__23115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__23115__auto__;
}
break;
}
}catch (e70338){if((e70338 instanceof Object))
{var ex__23116__auto__ = e70338;var statearr_70339_70352 = state_70316;(statearr_70339_70352[(5)] = ex__23116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_70316);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e70338;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__23114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__70353 = state_70316;
state_70316 = G__70353;
continue;
}
} else
{return ret_value__23114__auto__;
}
break;
}
});
state_machine__23113__auto__ = function(state_70316){
switch(arguments.length){
case 0:
return state_machine__23113__auto____0.call(this);
case 1:
return state_machine__23113__auto____1.call(this,state_70316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23113__auto____0;
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23113__auto____1;
return state_machine__23113__auto__;
})()
;})(switch__23112__auto__,c__23127__auto___70341,out))
})();var state__23129__auto__ = (function (){var statearr_70340 = (function (){return (f__23128__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23128__auto__.cljs$core$IFn$_invoke$arity$0() : f__23128__auto__.call(null));
})();(statearr_70340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23127__auto___70341);
return statearr_70340;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23129__auto__);
});})(c__23127__auto___70341,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__23127__auto___70491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23127__auto___70491,out){
return (function (){var f__23128__auto__ = (function (){var switch__23112__auto__ = ((function (c__23127__auto___70491,out){
return (function (state_70461){var state_val_70462 = (state_70461[(1)]);if((state_val_70462 === (7)))
{var inst_70457 = (state_70461[(2)]);var state_70461__$1 = state_70461;var statearr_70463_70492 = state_70461__$1;(statearr_70463_70492[(2)] = inst_70457);
(statearr_70463_70492[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70462 === (1)))
{var inst_70424 = (new Array(n));var inst_70425 = inst_70424;var inst_70426 = (0);var state_70461__$1 = (function (){var statearr_70464 = state_70461;(statearr_70464[(7)] = inst_70425);
(statearr_70464[(8)] = inst_70426);
return statearr_70464;
})();var statearr_70465_70493 = state_70461__$1;(statearr_70465_70493[(2)] = null);
(statearr_70465_70493[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70462 === (4)))
{var inst_70429 = (state_70461[(9)]);var inst_70429__$1 = (state_70461[(2)]);var inst_70430 = (inst_70429__$1 == null);var inst_70431 = cljs.core.not(inst_70430);var state_70461__$1 = (function (){var statearr_70466 = state_70461;(statearr_70466[(9)] = inst_70429__$1);
return statearr_70466;
})();if(inst_70431)
{var statearr_70467_70494 = state_70461__$1;(statearr_70467_70494[(1)] = (5));
} else
{var statearr_70468_70495 = state_70461__$1;(statearr_70468_70495[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70462 === (15)))
{var inst_70451 = (state_70461[(2)]);var state_70461__$1 = state_70461;var statearr_70469_70496 = state_70461__$1;(statearr_70469_70496[(2)] = inst_70451);
(statearr_70469_70496[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70462 === (13)))
{var state_70461__$1 = state_70461;var statearr_70470_70497 = state_70461__$1;(statearr_70470_70497[(2)] = null);
(statearr_70470_70497[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70462 === (6)))
{var inst_70426 = (state_70461[(8)]);var inst_70447 = (inst_70426 > (0));var state_70461__$1 = state_70461;if(cljs.core.truth_(inst_70447))
{var statearr_70471_70498 = state_70461__$1;(statearr_70471_70498[(1)] = (12));
} else
{var statearr_70472_70499 = state_70461__$1;(statearr_70472_70499[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70462 === (3)))
{var inst_70459 = (state_70461[(2)]);var state_70461__$1 = state_70461;return cljs.core.async.impl.ioc_helpers.return_chan(state_70461__$1,inst_70459);
} else
{if((state_val_70462 === (12)))
{var inst_70425 = (state_70461[(7)]);var inst_70449 = cljs.core.vec(inst_70425);var state_70461__$1 = state_70461;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70461__$1,(15),out,inst_70449);
} else
{if((state_val_70462 === (2)))
{var state_70461__$1 = state_70461;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70461__$1,(4),ch);
} else
{if((state_val_70462 === (11)))
{var inst_70441 = (state_70461[(2)]);var inst_70442 = (new Array(n));var inst_70425 = inst_70442;var inst_70426 = (0);var state_70461__$1 = (function (){var statearr_70473 = state_70461;(statearr_70473[(7)] = inst_70425);
(statearr_70473[(10)] = inst_70441);
(statearr_70473[(8)] = inst_70426);
return statearr_70473;
})();var statearr_70474_70500 = state_70461__$1;(statearr_70474_70500[(2)] = null);
(statearr_70474_70500[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70462 === (9)))
{var inst_70425 = (state_70461[(7)]);var inst_70439 = cljs.core.vec(inst_70425);var state_70461__$1 = state_70461;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70461__$1,(11),out,inst_70439);
} else
{if((state_val_70462 === (5)))
{var inst_70425 = (state_70461[(7)]);var inst_70429 = (state_70461[(9)]);var inst_70434 = (state_70461[(11)]);var inst_70426 = (state_70461[(8)]);var inst_70433 = (inst_70425[inst_70426] = inst_70429);var inst_70434__$1 = (inst_70426 + (1));var inst_70435 = (inst_70434__$1 < n);var state_70461__$1 = (function (){var statearr_70475 = state_70461;(statearr_70475[(12)] = inst_70433);
(statearr_70475[(11)] = inst_70434__$1);
return statearr_70475;
})();if(cljs.core.truth_(inst_70435))
{var statearr_70476_70501 = state_70461__$1;(statearr_70476_70501[(1)] = (8));
} else
{var statearr_70477_70502 = state_70461__$1;(statearr_70477_70502[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70462 === (14)))
{var inst_70454 = (state_70461[(2)]);var inst_70455 = cljs.core.async.close_BANG_(out);var state_70461__$1 = (function (){var statearr_70479 = state_70461;(statearr_70479[(13)] = inst_70454);
return statearr_70479;
})();var statearr_70480_70503 = state_70461__$1;(statearr_70480_70503[(2)] = inst_70455);
(statearr_70480_70503[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70462 === (10)))
{var inst_70445 = (state_70461[(2)]);var state_70461__$1 = state_70461;var statearr_70481_70504 = state_70461__$1;(statearr_70481_70504[(2)] = inst_70445);
(statearr_70481_70504[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70462 === (8)))
{var inst_70425 = (state_70461[(7)]);var inst_70434 = (state_70461[(11)]);var tmp70478 = inst_70425;var inst_70425__$1 = tmp70478;var inst_70426 = inst_70434;var state_70461__$1 = (function (){var statearr_70482 = state_70461;(statearr_70482[(7)] = inst_70425__$1);
(statearr_70482[(8)] = inst_70426);
return statearr_70482;
})();var statearr_70483_70505 = state_70461__$1;(statearr_70483_70505[(2)] = null);
(statearr_70483_70505[(1)] = (2));
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
});})(c__23127__auto___70491,out))
;return ((function (switch__23112__auto__,c__23127__auto___70491,out){
return (function() {
var state_machine__23113__auto__ = null;
var state_machine__23113__auto____0 = (function (){var statearr_70487 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_70487[(0)] = state_machine__23113__auto__);
(statearr_70487[(1)] = (1));
return statearr_70487;
});
var state_machine__23113__auto____1 = (function (state_70461){while(true){
var ret_value__23114__auto__ = (function (){try{while(true){
var result__23115__auto__ = switch__23112__auto__(state_70461);if(cljs.core.keyword_identical_QMARK_(result__23115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__23115__auto__;
}
break;
}
}catch (e70488){if((e70488 instanceof Object))
{var ex__23116__auto__ = e70488;var statearr_70489_70506 = state_70461;(statearr_70489_70506[(5)] = ex__23116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_70461);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e70488;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__23114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__70507 = state_70461;
state_70461 = G__70507;
continue;
}
} else
{return ret_value__23114__auto__;
}
break;
}
});
state_machine__23113__auto__ = function(state_70461){
switch(arguments.length){
case 0:
return state_machine__23113__auto____0.call(this);
case 1:
return state_machine__23113__auto____1.call(this,state_70461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23113__auto____0;
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23113__auto____1;
return state_machine__23113__auto__;
})()
;})(switch__23112__auto__,c__23127__auto___70491,out))
})();var state__23129__auto__ = (function (){var statearr_70490 = (function (){return (f__23128__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23128__auto__.cljs$core$IFn$_invoke$arity$0() : f__23128__auto__.call(null));
})();(statearr_70490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23127__auto___70491);
return statearr_70490;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23129__auto__);
});})(c__23127__auto___70491,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__23127__auto___70655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23127__auto___70655,out){
return (function (){var f__23128__auto__ = (function (){var switch__23112__auto__ = ((function (c__23127__auto___70655,out){
return (function (state_70624){var state_val_70625 = (state_70624[(1)]);if((state_val_70625 === (7)))
{var inst_70620 = (state_70624[(2)]);var state_70624__$1 = state_70624;var statearr_70626_70656 = state_70624__$1;(statearr_70626_70656[(2)] = inst_70620);
(statearr_70626_70656[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70625 === (1)))
{var inst_70583 = [];var inst_70584 = inst_70583;var inst_70585 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_70624__$1 = (function (){var statearr_70627 = state_70624;(statearr_70627[(7)] = inst_70585);
(statearr_70627[(8)] = inst_70584);
return statearr_70627;
})();var statearr_70628_70657 = state_70624__$1;(statearr_70628_70657[(2)] = null);
(statearr_70628_70657[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70625 === (4)))
{var inst_70588 = (state_70624[(9)]);var inst_70588__$1 = (state_70624[(2)]);var inst_70589 = (inst_70588__$1 == null);var inst_70590 = cljs.core.not(inst_70589);var state_70624__$1 = (function (){var statearr_70629 = state_70624;(statearr_70629[(9)] = inst_70588__$1);
return statearr_70629;
})();if(inst_70590)
{var statearr_70630_70658 = state_70624__$1;(statearr_70630_70658[(1)] = (5));
} else
{var statearr_70631_70659 = state_70624__$1;(statearr_70631_70659[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70625 === (15)))
{var inst_70614 = (state_70624[(2)]);var state_70624__$1 = state_70624;var statearr_70632_70660 = state_70624__$1;(statearr_70632_70660[(2)] = inst_70614);
(statearr_70632_70660[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70625 === (13)))
{var state_70624__$1 = state_70624;var statearr_70633_70661 = state_70624__$1;(statearr_70633_70661[(2)] = null);
(statearr_70633_70661[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70625 === (6)))
{var inst_70584 = (state_70624[(8)]);var inst_70609 = inst_70584.length;var inst_70610 = (inst_70609 > (0));var state_70624__$1 = state_70624;if(cljs.core.truth_(inst_70610))
{var statearr_70634_70662 = state_70624__$1;(statearr_70634_70662[(1)] = (12));
} else
{var statearr_70635_70663 = state_70624__$1;(statearr_70635_70663[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70625 === (3)))
{var inst_70622 = (state_70624[(2)]);var state_70624__$1 = state_70624;return cljs.core.async.impl.ioc_helpers.return_chan(state_70624__$1,inst_70622);
} else
{if((state_val_70625 === (12)))
{var inst_70584 = (state_70624[(8)]);var inst_70612 = cljs.core.vec(inst_70584);var state_70624__$1 = state_70624;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70624__$1,(15),out,inst_70612);
} else
{if((state_val_70625 === (2)))
{var state_70624__$1 = state_70624;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70624__$1,(4),ch);
} else
{if((state_val_70625 === (11)))
{var inst_70592 = (state_70624[(10)]);var inst_70588 = (state_70624[(9)]);var inst_70602 = (state_70624[(2)]);var inst_70603 = [];var inst_70604 = inst_70603.push(inst_70588);var inst_70584 = inst_70603;var inst_70585 = inst_70592;var state_70624__$1 = (function (){var statearr_70636 = state_70624;(statearr_70636[(11)] = inst_70602);
(statearr_70636[(7)] = inst_70585);
(statearr_70636[(8)] = inst_70584);
(statearr_70636[(12)] = inst_70604);
return statearr_70636;
})();var statearr_70637_70664 = state_70624__$1;(statearr_70637_70664[(2)] = null);
(statearr_70637_70664[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70625 === (9)))
{var inst_70584 = (state_70624[(8)]);var inst_70600 = cljs.core.vec(inst_70584);var state_70624__$1 = state_70624;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70624__$1,(11),out,inst_70600);
} else
{if((state_val_70625 === (5)))
{var inst_70592 = (state_70624[(10)]);var inst_70585 = (state_70624[(7)]);var inst_70588 = (state_70624[(9)]);var inst_70592__$1 = (function (){var G__70638 = inst_70588;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__70638) : f.call(null,G__70638));
})();var inst_70593 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_70592__$1,inst_70585);var inst_70594 = cljs.core.keyword_identical_QMARK_(inst_70585,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_70595 = (inst_70593) || (inst_70594);var state_70624__$1 = (function (){var statearr_70639 = state_70624;(statearr_70639[(10)] = inst_70592__$1);
return statearr_70639;
})();if(cljs.core.truth_(inst_70595))
{var statearr_70640_70665 = state_70624__$1;(statearr_70640_70665[(1)] = (8));
} else
{var statearr_70641_70666 = state_70624__$1;(statearr_70641_70666[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70625 === (14)))
{var inst_70617 = (state_70624[(2)]);var inst_70618 = cljs.core.async.close_BANG_(out);var state_70624__$1 = (function (){var statearr_70643 = state_70624;(statearr_70643[(13)] = inst_70617);
return statearr_70643;
})();var statearr_70644_70667 = state_70624__$1;(statearr_70644_70667[(2)] = inst_70618);
(statearr_70644_70667[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70625 === (10)))
{var inst_70607 = (state_70624[(2)]);var state_70624__$1 = state_70624;var statearr_70645_70668 = state_70624__$1;(statearr_70645_70668[(2)] = inst_70607);
(statearr_70645_70668[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_70625 === (8)))
{var inst_70592 = (state_70624[(10)]);var inst_70584 = (state_70624[(8)]);var inst_70588 = (state_70624[(9)]);var inst_70597 = inst_70584.push(inst_70588);var tmp70642 = inst_70584;var inst_70584__$1 = tmp70642;var inst_70585 = inst_70592;var state_70624__$1 = (function (){var statearr_70646 = state_70624;(statearr_70646[(7)] = inst_70585);
(statearr_70646[(8)] = inst_70584__$1);
(statearr_70646[(14)] = inst_70597);
return statearr_70646;
})();var statearr_70647_70669 = state_70624__$1;(statearr_70647_70669[(2)] = null);
(statearr_70647_70669[(1)] = (2));
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
});})(c__23127__auto___70655,out))
;return ((function (switch__23112__auto__,c__23127__auto___70655,out){
return (function() {
var state_machine__23113__auto__ = null;
var state_machine__23113__auto____0 = (function (){var statearr_70651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_70651[(0)] = state_machine__23113__auto__);
(statearr_70651[(1)] = (1));
return statearr_70651;
});
var state_machine__23113__auto____1 = (function (state_70624){while(true){
var ret_value__23114__auto__ = (function (){try{while(true){
var result__23115__auto__ = switch__23112__auto__(state_70624);if(cljs.core.keyword_identical_QMARK_(result__23115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__23115__auto__;
}
break;
}
}catch (e70652){if((e70652 instanceof Object))
{var ex__23116__auto__ = e70652;var statearr_70653_70670 = state_70624;(statearr_70653_70670[(5)] = ex__23116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_70624);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e70652;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__23114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__70671 = state_70624;
state_70624 = G__70671;
continue;
}
} else
{return ret_value__23114__auto__;
}
break;
}
});
state_machine__23113__auto__ = function(state_70624){
switch(arguments.length){
case 0:
return state_machine__23113__auto____0.call(this);
case 1:
return state_machine__23113__auto____1.call(this,state_70624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23113__auto____0;
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23113__auto____1;
return state_machine__23113__auto__;
})()
;})(switch__23112__auto__,c__23127__auto___70655,out))
})();var state__23129__auto__ = (function (){var statearr_70654 = (function (){return (f__23128__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23128__auto__.cljs$core$IFn$_invoke$arity$0() : f__23128__auto__.call(null));
})();(statearr_70654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23127__auto___70655);
return statearr_70654;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23129__auto__);
});})(c__23127__auto___70655,out))
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