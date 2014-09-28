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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t48656 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48656 = (function (f,fn_handler,meta48657){
this.f = f;
this.fn_handler = fn_handler;
this.meta48657 = meta48657;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48656.cljs$lang$type = true;
cljs.core.async.t48656.cljs$lang$ctorStr = "cljs.core.async/t48656";
cljs.core.async.t48656.cljs$lang$ctorPrWriter = (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"cljs.core.async/t48656");
});
cljs.core.async.t48656.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t48656.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t48656.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t48656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48658){var self__ = this;
var _48658__$1 = this;return self__.meta48657;
});
cljs.core.async.t48656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48658,meta48657__$1){var self__ = this;
var _48658__$1 = this;return (new cljs.core.async.t48656(self__.f,self__.fn_handler,meta48657__$1));
});
cljs.core.async.__GT_t48656 = (function __GT_t48656(f__$1,fn_handler__$1,meta48657){return (new cljs.core.async.t48656(f__$1,fn_handler__$1,meta48657));
});
}
return (new cljs.core.async.t48656(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__48660 = buff;if(G__48660)
{var bit__20556__auto__ = null;if(cljs.core.truth_((function (){var or__19289__auto__ = bit__20556__auto__;if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return G__48660.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__48660.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__48660);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__48660);
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
{var val_48671 = (function (){var G__48668 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48668) : cljs.core.deref.call(null,G__48668));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__48669_48672 = val_48671;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__48669_48672) : fn1.call(null,G__48669_48672));
} else
{cljs.core.async.impl.dispatch.run(((function (val_48671,ret){
return (function (){var G__48670 = val_48671;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__48670) : fn1.call(null,G__48670));
});})(val_48671,ret))
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__19267__auto__ = ret;if(cljs.core.truth_(and__19267__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__19267__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__20929__auto___48680 = n;var x_48681 = (0);while(true){
if((x_48681 < n__20929__auto___48680))
{(a[x_48681] = (0));
{
var G__48682 = (x_48681 + (1));
x_48681 = G__48682;
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
var G__48683 = (i + (1));
i = G__48683;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__48691 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__48691) : cljs.core.atom.call(null,G__48691));
})();if(typeof cljs.core.async.t48692 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48692 = (function (flag,alt_flag,meta48693){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta48693 = meta48693;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48692.cljs$lang$type = true;
cljs.core.async.t48692.cljs$lang$ctorStr = "cljs.core.async/t48692";
cljs.core.async.t48692.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"cljs.core.async/t48692");
});})(flag))
;
cljs.core.async.t48692.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t48692.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__48695 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48695) : cljs.core.deref.call(null,G__48695));
});})(flag))
;
cljs.core.async.t48692.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__48696_48698 = self__.flag;var G__48697_48699 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__48696_48698,G__48697_48699) : cljs.core.reset_BANG_.call(null,G__48696_48698,G__48697_48699));
return true;
});})(flag))
;
cljs.core.async.t48692.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_48694){var self__ = this;
var _48694__$1 = this;return self__.meta48693;
});})(flag))
;
cljs.core.async.t48692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_48694,meta48693__$1){var self__ = this;
var _48694__$1 = this;return (new cljs.core.async.t48692(self__.flag,self__.alt_flag,meta48693__$1));
});})(flag))
;
cljs.core.async.__GT_t48692 = ((function (flag){
return (function __GT_t48692(flag__$1,alt_flag__$1,meta48693){return (new cljs.core.async.t48692(flag__$1,alt_flag__$1,meta48693));
});})(flag))
;
}
return (new cljs.core.async.t48692(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t48703 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48703 = (function (cb,flag,alt_handler,meta48704){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta48704 = meta48704;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48703.cljs$lang$type = true;
cljs.core.async.t48703.cljs$lang$ctorStr = "cljs.core.async/t48703";
cljs.core.async.t48703.cljs$lang$ctorPrWriter = (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"cljs.core.async/t48703");
});
cljs.core.async.t48703.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t48703.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t48703.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t48703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48705){var self__ = this;
var _48705__$1 = this;return self__.meta48704;
});
cljs.core.async.t48703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48705,meta48704__$1){var self__ = this;
var _48705__$1 = this;return (new cljs.core.async.t48703(self__.cb,self__.flag,self__.alt_handler,meta48704__$1));
});
cljs.core.async.__GT_t48703 = (function __GT_t48703(cb__$1,flag__$1,alt_handler__$1,meta48704){return (new cljs.core.async.t48703(cb__$1,flag__$1,alt_handler__$1,meta48704));
});
}
return (new cljs.core.async.t48703(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__48712 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__48712) : port.call(null,G__48712));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__48713 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__48713) : port.call(null,G__48713));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){var G__48714 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__48714) : fret.call(null,G__48714));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48706_SHARP_){var G__48715 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48706_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__48715) : fret.call(null,G__48715));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48716 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48716) : cljs.core.deref.call(null,G__48716));
})(),(function (){var or__19289__auto__ = wport;if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__48717 = (i + (1));
i = G__48717;
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
{var temp__4126__auto__ = (function (){var and__19267__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__19267__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__19267__auto__;
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
var alts_BANG___delegate = function (ports,p__48718){var map__48720 = p__48718;var map__48720__$1 = ((cljs.core.seq_QMARK_(map__48720))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48720):map__48720);var opts = map__48720__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));

};
var alts_BANG_ = function (ports,var_args){
var p__48718 = null;if (arguments.length > 1) {
  p__48718 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__48718);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__48721){
var ports = cljs.core.first(arglist__48721);
var p__48718 = cljs.core.rest(arglist__48721);
return alts_BANG___delegate(ports,p__48718);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t48735 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48735 = (function (ch,f,map_LT_,meta48736){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta48736 = meta48736;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48735.cljs$lang$type = true;
cljs.core.async.t48735.cljs$lang$ctorStr = "cljs.core.async/t48735";
cljs.core.async.t48735.cljs$lang$ctorPrWriter = (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"cljs.core.async/t48735");
});
cljs.core.async.t48735.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t48735.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t48735.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t48735.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t48738 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48738 = (function (fn1,_,meta48736,ch,f,map_LT_,meta48739){
this.fn1 = fn1;
this._ = _;
this.meta48736 = meta48736;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta48739 = meta48739;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48738.cljs$lang$type = true;
cljs.core.async.t48738.cljs$lang$ctorStr = "cljs.core.async/t48738";
cljs.core.async.t48738.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"cljs.core.async/t48738");
});})(___$1))
;
cljs.core.async.t48738.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t48738.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t48738.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var G__48741 = self__.fn1;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(G__48741) : cljs.core.async.impl.protocols.lock_id.call(null,G__48741));
});})(___$1))
;
cljs.core.async.t48738.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__48722_SHARP_){var G__48742 = (((p1__48722_SHARP_ == null))?null:(function (){var G__48743 = p1__48722_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__48743) : self__.f.call(null,G__48743));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__48742) : f1.call(null,G__48742));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t48738.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_48740){var self__ = this;
var _48740__$1 = this;return self__.meta48739;
});})(___$1))
;
cljs.core.async.t48738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_48740,meta48739__$1){var self__ = this;
var _48740__$1 = this;return (new cljs.core.async.t48738(self__.fn1,self__._,self__.meta48736,self__.ch,self__.f,self__.map_LT_,meta48739__$1));
});})(___$1))
;
cljs.core.async.__GT_t48738 = ((function (___$1){
return (function __GT_t48738(fn1__$1,___$2,meta48736__$1,ch__$2,f__$2,map_LT___$2,meta48739){return (new cljs.core.async.t48738(fn1__$1,___$2,meta48736__$1,ch__$2,f__$2,map_LT___$2,meta48739));
});})(___$1))
;
}
return (new cljs.core.async.t48738(fn1,___$1,self__.meta48736,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__19267__auto__ = ret;if(cljs.core.truth_(and__19267__auto__))
{return !(((function (){var G__48744 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48744) : cljs.core.deref.call(null,G__48744));
})() == null));
} else
{return and__19267__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__48745 = (function (){var G__48746 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48746) : cljs.core.deref.call(null,G__48746));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__48745) : self__.f.call(null,G__48745));
})());
} else
{return ret;
}
});
cljs.core.async.t48735.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t48735.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t48735.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48737){var self__ = this;
var _48737__$1 = this;return self__.meta48736;
});
cljs.core.async.t48735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48737,meta48736__$1){var self__ = this;
var _48737__$1 = this;return (new cljs.core.async.t48735(self__.ch,self__.f,self__.map_LT_,meta48736__$1));
});
cljs.core.async.__GT_t48735 = (function __GT_t48735(ch__$1,f__$1,map_LT___$1,meta48736){return (new cljs.core.async.t48735(ch__$1,f__$1,map_LT___$1,meta48736));
});
}
return (new cljs.core.async.t48735(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t48751 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48751 = (function (ch,f,map_GT_,meta48752){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta48752 = meta48752;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48751.cljs$lang$type = true;
cljs.core.async.t48751.cljs$lang$ctorStr = "cljs.core.async/t48751";
cljs.core.async.t48751.cljs$lang$ctorPrWriter = (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"cljs.core.async/t48751");
});
cljs.core.async.t48751.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t48751.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__48754 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__48754) : self__.f.call(null,G__48754));
})(),fn0);
});
cljs.core.async.t48751.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t48751.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t48751.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t48751.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t48751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48753){var self__ = this;
var _48753__$1 = this;return self__.meta48752;
});
cljs.core.async.t48751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48753,meta48752__$1){var self__ = this;
var _48753__$1 = this;return (new cljs.core.async.t48751(self__.ch,self__.f,self__.map_GT_,meta48752__$1));
});
cljs.core.async.__GT_t48751 = (function __GT_t48751(ch__$1,f__$1,map_GT___$1,meta48752){return (new cljs.core.async.t48751(ch__$1,f__$1,map_GT___$1,meta48752));
});
}
return (new cljs.core.async.t48751(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t48759 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48759 = (function (ch,p,filter_GT_,meta48760){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta48760 = meta48760;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48759.cljs$lang$type = true;
cljs.core.async.t48759.cljs$lang$ctorStr = "cljs.core.async/t48759";
cljs.core.async.t48759.cljs$lang$ctorPrWriter = (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"cljs.core.async/t48759");
});
cljs.core.async.t48759.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t48759.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__48762 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__48762) : self__.p.call(null,G__48762));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t48759.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t48759.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t48759.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t48759.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t48759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48761){var self__ = this;
var _48761__$1 = this;return self__.meta48760;
});
cljs.core.async.t48759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48761,meta48760__$1){var self__ = this;
var _48761__$1 = this;return (new cljs.core.async.t48759(self__.ch,self__.p,self__.filter_GT_,meta48760__$1));
});
cljs.core.async.__GT_t48759 = (function __GT_t48759(ch__$1,p__$1,filter_GT___$1,meta48760){return (new cljs.core.async.t48759(ch__$1,p__$1,filter_GT___$1,meta48760));
});
}
return (new cljs.core.async.t48759(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22689__auto___48850 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22689__auto___48850,out){
return (function (){var f__22690__auto__ = (function (){var switch__22674__auto__ = ((function (c__22689__auto___48850,out){
return (function (state_48828){var state_val_48829 = (state_48828[(1)]);if((state_val_48829 === (7)))
{var inst_48824 = (state_48828[(2)]);var state_48828__$1 = state_48828;var statearr_48830_48851 = state_48828__$1;(statearr_48830_48851[(2)] = inst_48824);
(statearr_48830_48851[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48829 === (1)))
{var state_48828__$1 = state_48828;var statearr_48831_48852 = state_48828__$1;(statearr_48831_48852[(2)] = null);
(statearr_48831_48852[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48829 === (4)))
{var inst_48810 = (state_48828[(7)]);var inst_48810__$1 = (state_48828[(2)]);var inst_48811 = (inst_48810__$1 == null);var state_48828__$1 = (function (){var statearr_48832 = state_48828;(statearr_48832[(7)] = inst_48810__$1);
return statearr_48832;
})();if(cljs.core.truth_(inst_48811))
{var statearr_48833_48853 = state_48828__$1;(statearr_48833_48853[(1)] = (5));
} else
{var statearr_48834_48854 = state_48828__$1;(statearr_48834_48854[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48829 === (6)))
{var inst_48810 = (state_48828[(7)]);var inst_48815 = (function (){var G__48835 = inst_48810;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__48835) : p.call(null,G__48835));
})();var state_48828__$1 = state_48828;if(cljs.core.truth_(inst_48815))
{var statearr_48836_48855 = state_48828__$1;(statearr_48836_48855[(1)] = (8));
} else
{var statearr_48837_48856 = state_48828__$1;(statearr_48837_48856[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48829 === (3)))
{var inst_48826 = (state_48828[(2)]);var state_48828__$1 = state_48828;return cljs.core.async.impl.ioc_helpers.return_chan(state_48828__$1,inst_48826);
} else
{if((state_val_48829 === (2)))
{var state_48828__$1 = state_48828;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48828__$1,(4),ch);
} else
{if((state_val_48829 === (11)))
{var inst_48818 = (state_48828[(2)]);var state_48828__$1 = state_48828;var statearr_48838_48857 = state_48828__$1;(statearr_48838_48857[(2)] = inst_48818);
(statearr_48838_48857[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48829 === (9)))
{var state_48828__$1 = state_48828;var statearr_48839_48858 = state_48828__$1;(statearr_48839_48858[(2)] = null);
(statearr_48839_48858[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48829 === (5)))
{var inst_48813 = cljs.core.async.close_BANG_(out);var state_48828__$1 = state_48828;var statearr_48840_48859 = state_48828__$1;(statearr_48840_48859[(2)] = inst_48813);
(statearr_48840_48859[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48829 === (10)))
{var inst_48821 = (state_48828[(2)]);var state_48828__$1 = (function (){var statearr_48841 = state_48828;(statearr_48841[(8)] = inst_48821);
return statearr_48841;
})();var statearr_48842_48860 = state_48828__$1;(statearr_48842_48860[(2)] = null);
(statearr_48842_48860[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48829 === (8)))
{var inst_48810 = (state_48828[(7)]);var state_48828__$1 = state_48828;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48828__$1,(11),out,inst_48810);
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
});})(c__22689__auto___48850,out))
;return ((function (switch__22674__auto__,c__22689__auto___48850,out){
return (function() {
var state_machine__22675__auto__ = null;
var state_machine__22675__auto____0 = (function (){var statearr_48846 = [null,null,null,null,null,null,null,null,null];(statearr_48846[(0)] = state_machine__22675__auto__);
(statearr_48846[(1)] = (1));
return statearr_48846;
});
var state_machine__22675__auto____1 = (function (state_48828){while(true){
var ret_value__22676__auto__ = (function (){try{while(true){
var result__22677__auto__ = switch__22674__auto__(state_48828);if(cljs.core.keyword_identical_QMARK_(result__22677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22677__auto__;
}
break;
}
}catch (e48847){if((e48847 instanceof Object))
{var ex__22678__auto__ = e48847;var statearr_48848_48861 = state_48828;(statearr_48848_48861[(5)] = ex__22678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_48828);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e48847;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48862 = state_48828;
state_48828 = G__48862;
continue;
}
} else
{return ret_value__22676__auto__;
}
break;
}
});
state_machine__22675__auto__ = function(state_48828){
switch(arguments.length){
case 0:
return state_machine__22675__auto____0.call(this);
case 1:
return state_machine__22675__auto____1.call(this,state_48828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22675__auto____0;
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22675__auto____1;
return state_machine__22675__auto__;
})()
;})(switch__22674__auto__,c__22689__auto___48850,out))
})();var state__22691__auto__ = (function (){var statearr_48849 = (function (){return (f__22690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22690__auto__.cljs$core$IFn$_invoke$arity$0() : f__22690__auto__.call(null));
})();(statearr_48849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22689__auto___48850);
return statearr_48849;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22691__auto__);
});})(c__22689__auto___48850,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__22689__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22689__auto__){
return (function (){var f__22690__auto__ = (function (){var switch__22674__auto__ = ((function (c__22689__auto__){
return (function (state_49018){var state_val_49019 = (state_49018[(1)]);if((state_val_49019 === (7)))
{var inst_49014 = (state_49018[(2)]);var state_49018__$1 = state_49018;var statearr_49020_49058 = state_49018__$1;(statearr_49020_49058[(2)] = inst_49014);
(statearr_49020_49058[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49019 === (20)))
{var inst_48989 = (state_49018[(7)]);var inst_49000 = (state_49018[(2)]);var inst_49001 = cljs.core.next(inst_48989);var inst_48975 = inst_49001;var inst_48976 = null;var inst_48977 = (0);var inst_48978 = (0);var state_49018__$1 = (function (){var statearr_49021 = state_49018;(statearr_49021[(8)] = inst_48975);
(statearr_49021[(9)] = inst_48978);
(statearr_49021[(10)] = inst_48976);
(statearr_49021[(11)] = inst_49000);
(statearr_49021[(12)] = inst_48977);
return statearr_49021;
})();var statearr_49022_49059 = state_49018__$1;(statearr_49022_49059[(2)] = null);
(statearr_49022_49059[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49019 === (1)))
{var state_49018__$1 = state_49018;var statearr_49023_49060 = state_49018__$1;(statearr_49023_49060[(2)] = null);
(statearr_49023_49060[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49019 === (4)))
{var inst_48964 = (state_49018[(13)]);var inst_48964__$1 = (state_49018[(2)]);var inst_48965 = (inst_48964__$1 == null);var state_49018__$1 = (function (){var statearr_49027 = state_49018;(statearr_49027[(13)] = inst_48964__$1);
return statearr_49027;
})();if(cljs.core.truth_(inst_48965))
{var statearr_49028_49061 = state_49018__$1;(statearr_49028_49061[(1)] = (5));
} else
{var statearr_49029_49062 = state_49018__$1;(statearr_49029_49062[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49019 === (15)))
{var state_49018__$1 = state_49018;var statearr_49030_49063 = state_49018__$1;(statearr_49030_49063[(2)] = null);
(statearr_49030_49063[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49019 === (13)))
{var inst_48975 = (state_49018[(8)]);var inst_48978 = (state_49018[(9)]);var inst_48976 = (state_49018[(10)]);var inst_48977 = (state_49018[(12)]);var inst_48985 = (state_49018[(2)]);var inst_48986 = (inst_48978 + (1));var tmp49024 = inst_48975;var tmp49025 = inst_48976;var tmp49026 = inst_48977;var inst_48975__$1 = tmp49024;var inst_48976__$1 = tmp49025;var inst_48977__$1 = tmp49026;var inst_48978__$1 = inst_48986;var state_49018__$1 = (function (){var statearr_49031 = state_49018;(statearr_49031[(8)] = inst_48975__$1);
(statearr_49031[(9)] = inst_48978__$1);
(statearr_49031[(14)] = inst_48985);
(statearr_49031[(10)] = inst_48976__$1);
(statearr_49031[(12)] = inst_48977__$1);
return statearr_49031;
})();var statearr_49032_49064 = state_49018__$1;(statearr_49032_49064[(2)] = null);
(statearr_49032_49064[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49019 === (6)))
{var inst_48964 = (state_49018[(13)]);var inst_48969 = (function (){var G__49033 = inst_48964;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__49033) : f.call(null,G__49033));
})();var inst_48974 = cljs.core.seq(inst_48969);var inst_48975 = inst_48974;var inst_48976 = null;var inst_48977 = (0);var inst_48978 = (0);var state_49018__$1 = (function (){var statearr_49034 = state_49018;(statearr_49034[(8)] = inst_48975);
(statearr_49034[(9)] = inst_48978);
(statearr_49034[(10)] = inst_48976);
(statearr_49034[(12)] = inst_48977);
return statearr_49034;
})();var statearr_49035_49065 = state_49018__$1;(statearr_49035_49065[(2)] = null);
(statearr_49035_49065[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49019 === (17)))
{var inst_48989 = (state_49018[(7)]);var inst_48993 = cljs.core.chunk_first(inst_48989);var inst_48994 = cljs.core.chunk_rest(inst_48989);var inst_48995 = cljs.core.count(inst_48993);var inst_48975 = inst_48994;var inst_48976 = inst_48993;var inst_48977 = inst_48995;var inst_48978 = (0);var state_49018__$1 = (function (){var statearr_49036 = state_49018;(statearr_49036[(8)] = inst_48975);
(statearr_49036[(9)] = inst_48978);
(statearr_49036[(10)] = inst_48976);
(statearr_49036[(12)] = inst_48977);
return statearr_49036;
})();var statearr_49037_49066 = state_49018__$1;(statearr_49037_49066[(2)] = null);
(statearr_49037_49066[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49019 === (3)))
{var inst_49016 = (state_49018[(2)]);var state_49018__$1 = state_49018;return cljs.core.async.impl.ioc_helpers.return_chan(state_49018__$1,inst_49016);
} else
{if((state_val_49019 === (12)))
{var inst_49009 = (state_49018[(2)]);var state_49018__$1 = state_49018;var statearr_49038_49067 = state_49018__$1;(statearr_49038_49067[(2)] = inst_49009);
(statearr_49038_49067[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49019 === (2)))
{var state_49018__$1 = state_49018;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49018__$1,(4),in$);
} else
{if((state_val_49019 === (19)))
{var inst_49004 = (state_49018[(2)]);var state_49018__$1 = state_49018;var statearr_49039_49068 = state_49018__$1;(statearr_49039_49068[(2)] = inst_49004);
(statearr_49039_49068[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49019 === (11)))
{var inst_48975 = (state_49018[(8)]);var inst_48989 = (state_49018[(7)]);var inst_48989__$1 = cljs.core.seq(inst_48975);var state_49018__$1 = (function (){var statearr_49040 = state_49018;(statearr_49040[(7)] = inst_48989__$1);
return statearr_49040;
})();if(inst_48989__$1)
{var statearr_49041_49069 = state_49018__$1;(statearr_49041_49069[(1)] = (14));
} else
{var statearr_49042_49070 = state_49018__$1;(statearr_49042_49070[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49019 === (9)))
{var inst_49011 = (state_49018[(2)]);var state_49018__$1 = (function (){var statearr_49043 = state_49018;(statearr_49043[(15)] = inst_49011);
return statearr_49043;
})();var statearr_49044_49071 = state_49018__$1;(statearr_49044_49071[(2)] = null);
(statearr_49044_49071[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49019 === (5)))
{var inst_48967 = cljs.core.async.close_BANG_(out);var state_49018__$1 = state_49018;var statearr_49045_49072 = state_49018__$1;(statearr_49045_49072[(2)] = inst_48967);
(statearr_49045_49072[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49019 === (14)))
{var inst_48989 = (state_49018[(7)]);var inst_48991 = cljs.core.chunked_seq_QMARK_(inst_48989);var state_49018__$1 = state_49018;if(inst_48991)
{var statearr_49046_49073 = state_49018__$1;(statearr_49046_49073[(1)] = (17));
} else
{var statearr_49047_49074 = state_49018__$1;(statearr_49047_49074[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49019 === (16)))
{var inst_49007 = (state_49018[(2)]);var state_49018__$1 = state_49018;var statearr_49048_49075 = state_49018__$1;(statearr_49048_49075[(2)] = inst_49007);
(statearr_49048_49075[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49019 === (10)))
{var inst_48978 = (state_49018[(9)]);var inst_48976 = (state_49018[(10)]);var inst_48983 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_48976,inst_48978);var state_49018__$1 = state_49018;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49018__$1,(13),out,inst_48983);
} else
{if((state_val_49019 === (18)))
{var inst_48989 = (state_49018[(7)]);var inst_48998 = cljs.core.first(inst_48989);var state_49018__$1 = state_49018;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49018__$1,(20),out,inst_48998);
} else
{if((state_val_49019 === (8)))
{var inst_48978 = (state_49018[(9)]);var inst_48977 = (state_49018[(12)]);var inst_48980 = (inst_48978 < inst_48977);var inst_48981 = inst_48980;var state_49018__$1 = state_49018;if(cljs.core.truth_(inst_48981))
{var statearr_49049_49076 = state_49018__$1;(statearr_49049_49076[(1)] = (10));
} else
{var statearr_49050_49077 = state_49018__$1;(statearr_49050_49077[(1)] = (11));
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
});})(c__22689__auto__))
;return ((function (switch__22674__auto__,c__22689__auto__){
return (function() {
var state_machine__22675__auto__ = null;
var state_machine__22675__auto____0 = (function (){var statearr_49054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49054[(0)] = state_machine__22675__auto__);
(statearr_49054[(1)] = (1));
return statearr_49054;
});
var state_machine__22675__auto____1 = (function (state_49018){while(true){
var ret_value__22676__auto__ = (function (){try{while(true){
var result__22677__auto__ = switch__22674__auto__(state_49018);if(cljs.core.keyword_identical_QMARK_(result__22677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22677__auto__;
}
break;
}
}catch (e49055){if((e49055 instanceof Object))
{var ex__22678__auto__ = e49055;var statearr_49056_49078 = state_49018;(statearr_49056_49078[(5)] = ex__22678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49018);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e49055;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49079 = state_49018;
state_49018 = G__49079;
continue;
}
} else
{return ret_value__22676__auto__;
}
break;
}
});
state_machine__22675__auto__ = function(state_49018){
switch(arguments.length){
case 0:
return state_machine__22675__auto____0.call(this);
case 1:
return state_machine__22675__auto____1.call(this,state_49018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22675__auto____0;
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22675__auto____1;
return state_machine__22675__auto__;
})()
;})(switch__22674__auto__,c__22689__auto__))
})();var state__22691__auto__ = (function (){var statearr_49057 = (function (){return (f__22690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22690__auto__.cljs$core$IFn$_invoke$arity$0() : f__22690__auto__.call(null));
})();(statearr_49057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22689__auto__);
return statearr_49057;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22691__auto__);
});})(c__22689__auto__))
);
return c__22689__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__22689__auto___49169 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22689__auto___49169){
return (function (){var f__22690__auto__ = (function (){var switch__22674__auto__ = ((function (c__22689__auto___49169){
return (function (state_49148){var state_val_49149 = (state_49148[(1)]);if((state_val_49149 === (7)))
{var inst_49144 = (state_49148[(2)]);var state_49148__$1 = state_49148;var statearr_49150_49170 = state_49148__$1;(statearr_49150_49170[(2)] = inst_49144);
(statearr_49150_49170[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49149 === (1)))
{var state_49148__$1 = state_49148;var statearr_49151_49171 = state_49148__$1;(statearr_49151_49171[(2)] = null);
(statearr_49151_49171[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49149 === (4)))
{var inst_49131 = (state_49148[(7)]);var inst_49131__$1 = (state_49148[(2)]);var inst_49132 = (inst_49131__$1 == null);var state_49148__$1 = (function (){var statearr_49152 = state_49148;(statearr_49152[(7)] = inst_49131__$1);
return statearr_49152;
})();if(cljs.core.truth_(inst_49132))
{var statearr_49153_49172 = state_49148__$1;(statearr_49153_49172[(1)] = (5));
} else
{var statearr_49154_49173 = state_49148__$1;(statearr_49154_49173[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49149 === (6)))
{var inst_49131 = (state_49148[(7)]);var state_49148__$1 = state_49148;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49148__$1,(11),to,inst_49131);
} else
{if((state_val_49149 === (3)))
{var inst_49146 = (state_49148[(2)]);var state_49148__$1 = state_49148;return cljs.core.async.impl.ioc_helpers.return_chan(state_49148__$1,inst_49146);
} else
{if((state_val_49149 === (2)))
{var state_49148__$1 = state_49148;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49148__$1,(4),from);
} else
{if((state_val_49149 === (11)))
{var inst_49141 = (state_49148[(2)]);var state_49148__$1 = (function (){var statearr_49155 = state_49148;(statearr_49155[(8)] = inst_49141);
return statearr_49155;
})();var statearr_49156_49174 = state_49148__$1;(statearr_49156_49174[(2)] = null);
(statearr_49156_49174[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49149 === (9)))
{var state_49148__$1 = state_49148;var statearr_49157_49175 = state_49148__$1;(statearr_49157_49175[(2)] = null);
(statearr_49157_49175[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49149 === (5)))
{var state_49148__$1 = state_49148;if(cljs.core.truth_(close_QMARK_))
{var statearr_49158_49176 = state_49148__$1;(statearr_49158_49176[(1)] = (8));
} else
{var statearr_49159_49177 = state_49148__$1;(statearr_49159_49177[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49149 === (10)))
{var inst_49138 = (state_49148[(2)]);var state_49148__$1 = state_49148;var statearr_49160_49178 = state_49148__$1;(statearr_49160_49178[(2)] = inst_49138);
(statearr_49160_49178[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49149 === (8)))
{var inst_49135 = cljs.core.async.close_BANG_(to);var state_49148__$1 = state_49148;var statearr_49161_49179 = state_49148__$1;(statearr_49161_49179[(2)] = inst_49135);
(statearr_49161_49179[(1)] = (10));
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
});})(c__22689__auto___49169))
;return ((function (switch__22674__auto__,c__22689__auto___49169){
return (function() {
var state_machine__22675__auto__ = null;
var state_machine__22675__auto____0 = (function (){var statearr_49165 = [null,null,null,null,null,null,null,null,null];(statearr_49165[(0)] = state_machine__22675__auto__);
(statearr_49165[(1)] = (1));
return statearr_49165;
});
var state_machine__22675__auto____1 = (function (state_49148){while(true){
var ret_value__22676__auto__ = (function (){try{while(true){
var result__22677__auto__ = switch__22674__auto__(state_49148);if(cljs.core.keyword_identical_QMARK_(result__22677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22677__auto__;
}
break;
}
}catch (e49166){if((e49166 instanceof Object))
{var ex__22678__auto__ = e49166;var statearr_49167_49180 = state_49148;(statearr_49167_49180[(5)] = ex__22678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49148);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e49166;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49181 = state_49148;
state_49148 = G__49181;
continue;
}
} else
{return ret_value__22676__auto__;
}
break;
}
});
state_machine__22675__auto__ = function(state_49148){
switch(arguments.length){
case 0:
return state_machine__22675__auto____0.call(this);
case 1:
return state_machine__22675__auto____1.call(this,state_49148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22675__auto____0;
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22675__auto____1;
return state_machine__22675__auto__;
})()
;})(switch__22674__auto__,c__22689__auto___49169))
})();var state__22691__auto__ = (function (){var statearr_49168 = (function (){return (f__22690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22690__auto__.cljs$core$IFn$_invoke$arity$0() : f__22690__auto__.call(null));
})();(statearr_49168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22689__auto___49169);
return statearr_49168;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22691__auto__);
});})(c__22689__auto___49169))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__22689__auto___49274 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22689__auto___49274,tc,fc){
return (function (){var f__22690__auto__ = (function (){var switch__22674__auto__ = ((function (c__22689__auto___49274,tc,fc){
return (function (state_49251){var state_val_49252 = (state_49251[(1)]);if((state_val_49252 === (7)))
{var inst_49247 = (state_49251[(2)]);var state_49251__$1 = state_49251;var statearr_49253_49275 = state_49251__$1;(statearr_49253_49275[(2)] = inst_49247);
(statearr_49253_49275[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49252 === (1)))
{var state_49251__$1 = state_49251;var statearr_49254_49276 = state_49251__$1;(statearr_49254_49276[(2)] = null);
(statearr_49254_49276[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49252 === (4)))
{var inst_49232 = (state_49251[(7)]);var inst_49232__$1 = (state_49251[(2)]);var inst_49233 = (inst_49232__$1 == null);var state_49251__$1 = (function (){var statearr_49255 = state_49251;(statearr_49255[(7)] = inst_49232__$1);
return statearr_49255;
})();if(cljs.core.truth_(inst_49233))
{var statearr_49256_49277 = state_49251__$1;(statearr_49256_49277[(1)] = (5));
} else
{var statearr_49257_49278 = state_49251__$1;(statearr_49257_49278[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49252 === (6)))
{var inst_49232 = (state_49251[(7)]);var inst_49238 = (function (){var G__49258 = inst_49232;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__49258) : p.call(null,G__49258));
})();var state_49251__$1 = state_49251;if(cljs.core.truth_(inst_49238))
{var statearr_49259_49279 = state_49251__$1;(statearr_49259_49279[(1)] = (9));
} else
{var statearr_49260_49280 = state_49251__$1;(statearr_49260_49280[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49252 === (3)))
{var inst_49249 = (state_49251[(2)]);var state_49251__$1 = state_49251;return cljs.core.async.impl.ioc_helpers.return_chan(state_49251__$1,inst_49249);
} else
{if((state_val_49252 === (2)))
{var state_49251__$1 = state_49251;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49251__$1,(4),ch);
} else
{if((state_val_49252 === (11)))
{var inst_49232 = (state_49251[(7)]);var inst_49242 = (state_49251[(2)]);var state_49251__$1 = state_49251;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49251__$1,(8),inst_49242,inst_49232);
} else
{if((state_val_49252 === (9)))
{var state_49251__$1 = state_49251;var statearr_49261_49281 = state_49251__$1;(statearr_49261_49281[(2)] = tc);
(statearr_49261_49281[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49252 === (5)))
{var inst_49235 = cljs.core.async.close_BANG_(tc);var inst_49236 = cljs.core.async.close_BANG_(fc);var state_49251__$1 = (function (){var statearr_49262 = state_49251;(statearr_49262[(8)] = inst_49235);
return statearr_49262;
})();var statearr_49263_49282 = state_49251__$1;(statearr_49263_49282[(2)] = inst_49236);
(statearr_49263_49282[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49252 === (10)))
{var state_49251__$1 = state_49251;var statearr_49264_49283 = state_49251__$1;(statearr_49264_49283[(2)] = fc);
(statearr_49264_49283[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49252 === (8)))
{var inst_49244 = (state_49251[(2)]);var state_49251__$1 = (function (){var statearr_49265 = state_49251;(statearr_49265[(9)] = inst_49244);
return statearr_49265;
})();var statearr_49266_49284 = state_49251__$1;(statearr_49266_49284[(2)] = null);
(statearr_49266_49284[(1)] = (2));
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
});})(c__22689__auto___49274,tc,fc))
;return ((function (switch__22674__auto__,c__22689__auto___49274,tc,fc){
return (function() {
var state_machine__22675__auto__ = null;
var state_machine__22675__auto____0 = (function (){var statearr_49270 = [null,null,null,null,null,null,null,null,null,null];(statearr_49270[(0)] = state_machine__22675__auto__);
(statearr_49270[(1)] = (1));
return statearr_49270;
});
var state_machine__22675__auto____1 = (function (state_49251){while(true){
var ret_value__22676__auto__ = (function (){try{while(true){
var result__22677__auto__ = switch__22674__auto__(state_49251);if(cljs.core.keyword_identical_QMARK_(result__22677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22677__auto__;
}
break;
}
}catch (e49271){if((e49271 instanceof Object))
{var ex__22678__auto__ = e49271;var statearr_49272_49285 = state_49251;(statearr_49272_49285[(5)] = ex__22678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49251);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e49271;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49286 = state_49251;
state_49251 = G__49286;
continue;
}
} else
{return ret_value__22676__auto__;
}
break;
}
});
state_machine__22675__auto__ = function(state_49251){
switch(arguments.length){
case 0:
return state_machine__22675__auto____0.call(this);
case 1:
return state_machine__22675__auto____1.call(this,state_49251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22675__auto____0;
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22675__auto____1;
return state_machine__22675__auto__;
})()
;})(switch__22674__auto__,c__22689__auto___49274,tc,fc))
})();var state__22691__auto__ = (function (){var statearr_49273 = (function (){return (f__22690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22690__auto__.cljs$core$IFn$_invoke$arity$0() : f__22690__auto__.call(null));
})();(statearr_49273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22689__auto___49274);
return statearr_49273;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22691__auto__);
});})(c__22689__auto___49274,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__22689__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22689__auto__){
return (function (){var f__22690__auto__ = (function (){var switch__22674__auto__ = ((function (c__22689__auto__){
return (function (state_49335){var state_val_49336 = (state_49335[(1)]);if((state_val_49336 === (7)))
{var inst_49331 = (state_49335[(2)]);var state_49335__$1 = state_49335;var statearr_49337_49355 = state_49335__$1;(statearr_49337_49355[(2)] = inst_49331);
(statearr_49337_49355[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49336 === (6)))
{var inst_49324 = (state_49335[(7)]);var inst_49321 = (state_49335[(8)]);var inst_49328 = (function (){var G__49338 = inst_49321;var G__49339 = inst_49324;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__49338,G__49339) : f.call(null,G__49338,G__49339));
})();var inst_49321__$1 = inst_49328;var state_49335__$1 = (function (){var statearr_49340 = state_49335;(statearr_49340[(8)] = inst_49321__$1);
return statearr_49340;
})();var statearr_49341_49356 = state_49335__$1;(statearr_49341_49356[(2)] = null);
(statearr_49341_49356[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49336 === (5)))
{var inst_49321 = (state_49335[(8)]);var state_49335__$1 = state_49335;var statearr_49342_49357 = state_49335__$1;(statearr_49342_49357[(2)] = inst_49321);
(statearr_49342_49357[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49336 === (4)))
{var inst_49324 = (state_49335[(7)]);var inst_49324__$1 = (state_49335[(2)]);var inst_49325 = (inst_49324__$1 == null);var state_49335__$1 = (function (){var statearr_49343 = state_49335;(statearr_49343[(7)] = inst_49324__$1);
return statearr_49343;
})();if(cljs.core.truth_(inst_49325))
{var statearr_49344_49358 = state_49335__$1;(statearr_49344_49358[(1)] = (5));
} else
{var statearr_49345_49359 = state_49335__$1;(statearr_49345_49359[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49336 === (3)))
{var inst_49333 = (state_49335[(2)]);var state_49335__$1 = state_49335;return cljs.core.async.impl.ioc_helpers.return_chan(state_49335__$1,inst_49333);
} else
{if((state_val_49336 === (2)))
{var state_49335__$1 = state_49335;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49335__$1,(4),ch);
} else
{if((state_val_49336 === (1)))
{var inst_49321 = init;var state_49335__$1 = (function (){var statearr_49346 = state_49335;(statearr_49346[(8)] = inst_49321);
return statearr_49346;
})();var statearr_49347_49360 = state_49335__$1;(statearr_49347_49360[(2)] = null);
(statearr_49347_49360[(1)] = (2));
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
});})(c__22689__auto__))
;return ((function (switch__22674__auto__,c__22689__auto__){
return (function() {
var state_machine__22675__auto__ = null;
var state_machine__22675__auto____0 = (function (){var statearr_49351 = [null,null,null,null,null,null,null,null,null];(statearr_49351[(0)] = state_machine__22675__auto__);
(statearr_49351[(1)] = (1));
return statearr_49351;
});
var state_machine__22675__auto____1 = (function (state_49335){while(true){
var ret_value__22676__auto__ = (function (){try{while(true){
var result__22677__auto__ = switch__22674__auto__(state_49335);if(cljs.core.keyword_identical_QMARK_(result__22677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22677__auto__;
}
break;
}
}catch (e49352){if((e49352 instanceof Object))
{var ex__22678__auto__ = e49352;var statearr_49353_49361 = state_49335;(statearr_49353_49361[(5)] = ex__22678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49335);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e49352;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49362 = state_49335;
state_49335 = G__49362;
continue;
}
} else
{return ret_value__22676__auto__;
}
break;
}
});
state_machine__22675__auto__ = function(state_49335){
switch(arguments.length){
case 0:
return state_machine__22675__auto____0.call(this);
case 1:
return state_machine__22675__auto____1.call(this,state_49335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22675__auto____0;
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22675__auto____1;
return state_machine__22675__auto__;
})()
;})(switch__22674__auto__,c__22689__auto__))
})();var state__22691__auto__ = (function (){var statearr_49354 = (function (){return (f__22690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22690__auto__.cljs$core$IFn$_invoke$arity$0() : f__22690__auto__.call(null));
})();(statearr_49354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22689__auto__);
return statearr_49354;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22691__auto__);
});})(c__22689__auto__))
);
return c__22689__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__22689__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22689__auto__){
return (function (){var f__22690__auto__ = (function (){var switch__22674__auto__ = ((function (c__22689__auto__){
return (function (state_49427){var state_val_49428 = (state_49427[(1)]);if((state_val_49428 === (7)))
{var inst_49408 = (state_49427[(7)]);var inst_49413 = (state_49427[(2)]);var inst_49414 = cljs.core.next(inst_49408);var inst_49408__$1 = inst_49414;var state_49427__$1 = (function (){var statearr_49429 = state_49427;(statearr_49429[(7)] = inst_49408__$1);
(statearr_49429[(8)] = inst_49413);
return statearr_49429;
})();var statearr_49430_49448 = state_49427__$1;(statearr_49430_49448[(2)] = null);
(statearr_49430_49448[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49428 === (1)))
{var inst_49407 = cljs.core.seq(coll);var inst_49408 = inst_49407;var state_49427__$1 = (function (){var statearr_49431 = state_49427;(statearr_49431[(7)] = inst_49408);
return statearr_49431;
})();var statearr_49432_49449 = state_49427__$1;(statearr_49432_49449[(2)] = null);
(statearr_49432_49449[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49428 === (4)))
{var inst_49408 = (state_49427[(7)]);var inst_49411 = cljs.core.first(inst_49408);var state_49427__$1 = state_49427;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49427__$1,(7),ch,inst_49411);
} else
{if((state_val_49428 === (6)))
{var inst_49423 = (state_49427[(2)]);var state_49427__$1 = state_49427;var statearr_49433_49450 = state_49427__$1;(statearr_49433_49450[(2)] = inst_49423);
(statearr_49433_49450[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49428 === (3)))
{var inst_49425 = (state_49427[(2)]);var state_49427__$1 = state_49427;return cljs.core.async.impl.ioc_helpers.return_chan(state_49427__$1,inst_49425);
} else
{if((state_val_49428 === (2)))
{var inst_49408 = (state_49427[(7)]);var state_49427__$1 = state_49427;if(cljs.core.truth_(inst_49408))
{var statearr_49434_49451 = state_49427__$1;(statearr_49434_49451[(1)] = (4));
} else
{var statearr_49435_49452 = state_49427__$1;(statearr_49435_49452[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49428 === (9)))
{var state_49427__$1 = state_49427;var statearr_49436_49453 = state_49427__$1;(statearr_49436_49453[(2)] = null);
(statearr_49436_49453[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49428 === (5)))
{var state_49427__$1 = state_49427;if(cljs.core.truth_(close_QMARK_))
{var statearr_49437_49454 = state_49427__$1;(statearr_49437_49454[(1)] = (8));
} else
{var statearr_49438_49455 = state_49427__$1;(statearr_49438_49455[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49428 === (10)))
{var inst_49421 = (state_49427[(2)]);var state_49427__$1 = state_49427;var statearr_49439_49456 = state_49427__$1;(statearr_49439_49456[(2)] = inst_49421);
(statearr_49439_49456[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49428 === (8)))
{var inst_49418 = cljs.core.async.close_BANG_(ch);var state_49427__$1 = state_49427;var statearr_49440_49457 = state_49427__$1;(statearr_49440_49457[(2)] = inst_49418);
(statearr_49440_49457[(1)] = (10));
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
});})(c__22689__auto__))
;return ((function (switch__22674__auto__,c__22689__auto__){
return (function() {
var state_machine__22675__auto__ = null;
var state_machine__22675__auto____0 = (function (){var statearr_49444 = [null,null,null,null,null,null,null,null,null];(statearr_49444[(0)] = state_machine__22675__auto__);
(statearr_49444[(1)] = (1));
return statearr_49444;
});
var state_machine__22675__auto____1 = (function (state_49427){while(true){
var ret_value__22676__auto__ = (function (){try{while(true){
var result__22677__auto__ = switch__22674__auto__(state_49427);if(cljs.core.keyword_identical_QMARK_(result__22677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22677__auto__;
}
break;
}
}catch (e49445){if((e49445 instanceof Object))
{var ex__22678__auto__ = e49445;var statearr_49446_49458 = state_49427;(statearr_49446_49458[(5)] = ex__22678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49427);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e49445;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49459 = state_49427;
state_49427 = G__49459;
continue;
}
} else
{return ret_value__22676__auto__;
}
break;
}
});
state_machine__22675__auto__ = function(state_49427){
switch(arguments.length){
case 0:
return state_machine__22675__auto____0.call(this);
case 1:
return state_machine__22675__auto____1.call(this,state_49427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22675__auto____0;
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22675__auto____1;
return state_machine__22675__auto__;
})()
;})(switch__22674__auto__,c__22689__auto__))
})();var state__22691__auto__ = (function (){var statearr_49447 = (function (){return (f__22690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22690__auto__.cljs$core$IFn$_invoke$arity$0() : f__22690__auto__.call(null));
})();(statearr_49447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22689__auto__);
return statearr_49447;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22691__auto__);
});})(c__22689__auto__))
);
return c__22689__auto__;
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
cljs.core.async.Mux = (function (){var obj49461 = {};return obj49461;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__19267__auto__ = _;if(and__19267__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__19267__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__20529__auto__ = (((_ == null))?null:_);return (function (){var or__19289__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__49465 = x__20529__auto__;return goog.typeOf(G__49465);
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
cljs.core.async.Mult = (function (){var obj49467 = {};return obj49467;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__19267__auto__ = m;if(and__19267__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__19267__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__20529__auto__ = (((m == null))?null:m);return (function (){var or__19289__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__49471 = x__20529__auto__;return goog.typeOf(G__49471);
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
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__19267__auto__ = m;if(and__19267__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__19267__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__20529__auto__ = (((m == null))?null:m);return (function (){var or__19289__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__49475 = x__20529__auto__;return goog.typeOf(G__49475);
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
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__19267__auto__ = m;if(and__19267__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__19267__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__20529__auto__ = (((m == null))?null:m);return (function (){var or__19289__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__49479 = x__20529__auto__;return goog.typeOf(G__49479);
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
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__49711 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__49711) : cljs.core.atom.call(null,G__49711));
})();var m = (function (){if(typeof cljs.core.async.t49712 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49712 = (function (cs,ch,mult,meta49713){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta49713 = meta49713;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49712.cljs$lang$type = true;
cljs.core.async.t49712.cljs$lang$ctorStr = "cljs.core.async/t49712";
cljs.core.async.t49712.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"cljs.core.async/t49712");
});})(cs))
;
cljs.core.async.t49712.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t49712.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t49712.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t49712.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__49715_49942 = self__.cs;var G__49716_49943 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__49715_49942,G__49716_49943) : cljs.core.reset_BANG_.call(null,G__49715_49942,G__49716_49943));
return null;
});})(cs))
;
cljs.core.async.t49712.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t49712.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t49712.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_49714){var self__ = this;
var _49714__$1 = this;return self__.meta49713;
});})(cs))
;
cljs.core.async.t49712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_49714,meta49713__$1){var self__ = this;
var _49714__$1 = this;return (new cljs.core.async.t49712(self__.cs,self__.ch,self__.mult,meta49713__$1));
});})(cs))
;
cljs.core.async.__GT_t49712 = ((function (cs){
return (function __GT_t49712(cs__$1,ch__$1,mult__$1,meta49713){return (new cljs.core.async.t49712(cs__$1,ch__$1,mult__$1,meta49713));
});})(cs))
;
}
return (new cljs.core.async.t49712(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__49717 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__49717) : cljs.core.atom.call(null,G__49717));
})();var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__22689__auto___49944 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22689__auto___49944,cs,m,dchan,dctr,done){
return (function (){var f__22690__auto__ = (function (){var switch__22674__auto__ = ((function (c__22689__auto___49944,cs,m,dchan,dctr,done){
return (function (state_49852){var state_val_49853 = (state_49852[(1)]);if((state_val_49853 === (7)))
{var inst_49848 = (state_49852[(2)]);var state_49852__$1 = state_49852;var statearr_49854_49945 = state_49852__$1;(statearr_49854_49945[(2)] = inst_49848);
(statearr_49854_49945[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (20)))
{var inst_49749 = (state_49852[(7)]);var inst_49759 = cljs.core.first(inst_49749);var inst_49760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49759,(0),null);var inst_49761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49759,(1),null);var state_49852__$1 = (function (){var statearr_49855 = state_49852;(statearr_49855[(8)] = inst_49760);
return statearr_49855;
})();if(cljs.core.truth_(inst_49761))
{var statearr_49856_49946 = state_49852__$1;(statearr_49856_49946[(1)] = (22));
} else
{var statearr_49857_49947 = state_49852__$1;(statearr_49857_49947[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (27)))
{var inst_49791 = (state_49852[(9)]);var inst_49789 = (state_49852[(10)]);var inst_49796 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_49789,inst_49791);var state_49852__$1 = (function (){var statearr_49858 = state_49852;(statearr_49858[(11)] = inst_49796);
return statearr_49858;
})();var statearr_49859_49948 = state_49852__$1;(statearr_49859_49948[(2)] = null);
(statearr_49859_49948[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (1)))
{var state_49852__$1 = state_49852;var statearr_49860_49949 = state_49852__$1;(statearr_49860_49949[(2)] = null);
(statearr_49860_49949[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (24)))
{var inst_49749 = (state_49852[(7)]);var inst_49766 = (state_49852[(2)]);var inst_49767 = cljs.core.next(inst_49749);var inst_49729 = inst_49767;var inst_49730 = null;var inst_49731 = (0);var inst_49732 = (0);var state_49852__$1 = (function (){var statearr_49861 = state_49852;(statearr_49861[(12)] = inst_49731);
(statearr_49861[(13)] = inst_49766);
(statearr_49861[(14)] = inst_49730);
(statearr_49861[(15)] = inst_49732);
(statearr_49861[(16)] = inst_49729);
return statearr_49861;
})();var statearr_49862_49950 = state_49852__$1;(statearr_49862_49950[(2)] = null);
(statearr_49862_49950[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (39)))
{var inst_49809 = (state_49852[(17)]);var inst_49827 = (state_49852[(2)]);var inst_49828 = cljs.core.next(inst_49809);var inst_49788 = inst_49828;var inst_49789 = null;var inst_49790 = (0);var inst_49791 = (0);var state_49852__$1 = (function (){var statearr_49866 = state_49852;(statearr_49866[(18)] = inst_49788);
(statearr_49866[(9)] = inst_49791);
(statearr_49866[(19)] = inst_49827);
(statearr_49866[(10)] = inst_49789);
(statearr_49866[(20)] = inst_49790);
return statearr_49866;
})();var statearr_49867_49951 = state_49852__$1;(statearr_49867_49951[(2)] = null);
(statearr_49867_49951[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (4)))
{var inst_49720 = (state_49852[(21)]);var inst_49720__$1 = (state_49852[(2)]);var inst_49721 = (inst_49720__$1 == null);var state_49852__$1 = (function (){var statearr_49868 = state_49852;(statearr_49868[(21)] = inst_49720__$1);
return statearr_49868;
})();if(cljs.core.truth_(inst_49721))
{var statearr_49869_49952 = state_49852__$1;(statearr_49869_49952[(1)] = (5));
} else
{var statearr_49870_49953 = state_49852__$1;(statearr_49870_49953[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (15)))
{var inst_49731 = (state_49852[(12)]);var inst_49730 = (state_49852[(14)]);var inst_49732 = (state_49852[(15)]);var inst_49729 = (state_49852[(16)]);var inst_49745 = (state_49852[(2)]);var inst_49746 = (inst_49732 + (1));var tmp49863 = inst_49731;var tmp49864 = inst_49730;var tmp49865 = inst_49729;var inst_49729__$1 = tmp49865;var inst_49730__$1 = tmp49864;var inst_49731__$1 = tmp49863;var inst_49732__$1 = inst_49746;var state_49852__$1 = (function (){var statearr_49871 = state_49852;(statearr_49871[(12)] = inst_49731__$1);
(statearr_49871[(14)] = inst_49730__$1);
(statearr_49871[(15)] = inst_49732__$1);
(statearr_49871[(22)] = inst_49745);
(statearr_49871[(16)] = inst_49729__$1);
return statearr_49871;
})();var statearr_49872_49954 = state_49852__$1;(statearr_49872_49954[(2)] = null);
(statearr_49872_49954[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (21)))
{var inst_49770 = (state_49852[(2)]);var state_49852__$1 = state_49852;var statearr_49873_49955 = state_49852__$1;(statearr_49873_49955[(2)] = inst_49770);
(statearr_49873_49955[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (31)))
{var inst_49796 = (state_49852[(11)]);var inst_49797 = (state_49852[(2)]);var inst_49798 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_49799 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_49796);var state_49852__$1 = (function (){var statearr_49874 = state_49852;(statearr_49874[(23)] = inst_49797);
(statearr_49874[(24)] = inst_49798);
return statearr_49874;
})();var statearr_49875_49956 = state_49852__$1;(statearr_49875_49956[(2)] = inst_49799);
cljs.core.async.impl.ioc_helpers.process_exception(state_49852__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (32)))
{var inst_49796 = (state_49852[(11)]);var inst_49720 = (state_49852[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_49852,(31),Object,null,(30));var inst_49803 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_49796,inst_49720,done);var state_49852__$1 = state_49852;var statearr_49876_49957 = state_49852__$1;(statearr_49876_49957[(2)] = inst_49803);
cljs.core.async.impl.ioc_helpers.process_exception(state_49852__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (40)))
{var inst_49818 = (state_49852[(25)]);var inst_49819 = (state_49852[(2)]);var inst_49820 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_49821 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_49818);var state_49852__$1 = (function (){var statearr_49877 = state_49852;(statearr_49877[(26)] = inst_49819);
(statearr_49877[(27)] = inst_49820);
return statearr_49877;
})();var statearr_49878_49958 = state_49852__$1;(statearr_49878_49958[(2)] = inst_49821);
cljs.core.async.impl.ioc_helpers.process_exception(state_49852__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (33)))
{var inst_49809 = (state_49852[(17)]);var inst_49811 = cljs.core.chunked_seq_QMARK_(inst_49809);var state_49852__$1 = state_49852;if(inst_49811)
{var statearr_49879_49959 = state_49852__$1;(statearr_49879_49959[(1)] = (36));
} else
{var statearr_49880_49960 = state_49852__$1;(statearr_49880_49960[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (13)))
{var inst_49739 = (state_49852[(28)]);var inst_49742 = cljs.core.async.close_BANG_(inst_49739);var state_49852__$1 = state_49852;var statearr_49881_49961 = state_49852__$1;(statearr_49881_49961[(2)] = inst_49742);
(statearr_49881_49961[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (22)))
{var inst_49760 = (state_49852[(8)]);var inst_49763 = cljs.core.async.close_BANG_(inst_49760);var state_49852__$1 = state_49852;var statearr_49882_49962 = state_49852__$1;(statearr_49882_49962[(2)] = inst_49763);
(statearr_49882_49962[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (36)))
{var inst_49809 = (state_49852[(17)]);var inst_49813 = cljs.core.chunk_first(inst_49809);var inst_49814 = cljs.core.chunk_rest(inst_49809);var inst_49815 = cljs.core.count(inst_49813);var inst_49788 = inst_49814;var inst_49789 = inst_49813;var inst_49790 = inst_49815;var inst_49791 = (0);var state_49852__$1 = (function (){var statearr_49883 = state_49852;(statearr_49883[(18)] = inst_49788);
(statearr_49883[(9)] = inst_49791);
(statearr_49883[(10)] = inst_49789);
(statearr_49883[(20)] = inst_49790);
return statearr_49883;
})();var statearr_49884_49963 = state_49852__$1;(statearr_49884_49963[(2)] = null);
(statearr_49884_49963[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (41)))
{var inst_49818 = (state_49852[(25)]);var inst_49720 = (state_49852[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_49852,(40),Object,null,(39));var inst_49825 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_49818,inst_49720,done);var state_49852__$1 = state_49852;var statearr_49885_49964 = state_49852__$1;(statearr_49885_49964[(2)] = inst_49825);
cljs.core.async.impl.ioc_helpers.process_exception(state_49852__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (43)))
{var state_49852__$1 = state_49852;var statearr_49886_49965 = state_49852__$1;(statearr_49886_49965[(2)] = null);
(statearr_49886_49965[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (29)))
{var inst_49836 = (state_49852[(2)]);var state_49852__$1 = state_49852;var statearr_49887_49966 = state_49852__$1;(statearr_49887_49966[(2)] = inst_49836);
(statearr_49887_49966[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (44)))
{var inst_49845 = (state_49852[(2)]);var state_49852__$1 = (function (){var statearr_49888 = state_49852;(statearr_49888[(29)] = inst_49845);
return statearr_49888;
})();var statearr_49889_49967 = state_49852__$1;(statearr_49889_49967[(2)] = null);
(statearr_49889_49967[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (6)))
{var inst_49780 = (state_49852[(30)]);var inst_49779 = (function (){var G__49890 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__49890) : cljs.core.deref.call(null,G__49890));
})();var inst_49780__$1 = cljs.core.keys(inst_49779);var inst_49781 = cljs.core.count(inst_49780__$1);var inst_49782 = (function (){var G__49891 = dctr;var G__49892 = inst_49781;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__49891,G__49892) : cljs.core.reset_BANG_.call(null,G__49891,G__49892));
})();var inst_49787 = cljs.core.seq(inst_49780__$1);var inst_49788 = inst_49787;var inst_49789 = null;var inst_49790 = (0);var inst_49791 = (0);var state_49852__$1 = (function (){var statearr_49893 = state_49852;(statearr_49893[(31)] = inst_49782);
(statearr_49893[(18)] = inst_49788);
(statearr_49893[(9)] = inst_49791);
(statearr_49893[(30)] = inst_49780__$1);
(statearr_49893[(10)] = inst_49789);
(statearr_49893[(20)] = inst_49790);
return statearr_49893;
})();var statearr_49894_49968 = state_49852__$1;(statearr_49894_49968[(2)] = null);
(statearr_49894_49968[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (28)))
{var inst_49809 = (state_49852[(17)]);var inst_49788 = (state_49852[(18)]);var inst_49809__$1 = cljs.core.seq(inst_49788);var state_49852__$1 = (function (){var statearr_49895 = state_49852;(statearr_49895[(17)] = inst_49809__$1);
return statearr_49895;
})();if(inst_49809__$1)
{var statearr_49896_49969 = state_49852__$1;(statearr_49896_49969[(1)] = (33));
} else
{var statearr_49897_49970 = state_49852__$1;(statearr_49897_49970[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (25)))
{var inst_49791 = (state_49852[(9)]);var inst_49790 = (state_49852[(20)]);var inst_49793 = (inst_49791 < inst_49790);var inst_49794 = inst_49793;var state_49852__$1 = state_49852;if(cljs.core.truth_(inst_49794))
{var statearr_49898_49971 = state_49852__$1;(statearr_49898_49971[(1)] = (27));
} else
{var statearr_49899_49972 = state_49852__$1;(statearr_49899_49972[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (34)))
{var state_49852__$1 = state_49852;var statearr_49900_49973 = state_49852__$1;(statearr_49900_49973[(2)] = null);
(statearr_49900_49973[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (17)))
{var state_49852__$1 = state_49852;var statearr_49901_49974 = state_49852__$1;(statearr_49901_49974[(2)] = null);
(statearr_49901_49974[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (3)))
{var inst_49850 = (state_49852[(2)]);var state_49852__$1 = state_49852;return cljs.core.async.impl.ioc_helpers.return_chan(state_49852__$1,inst_49850);
} else
{if((state_val_49853 === (12)))
{var inst_49775 = (state_49852[(2)]);var state_49852__$1 = state_49852;var statearr_49902_49975 = state_49852__$1;(statearr_49902_49975[(2)] = inst_49775);
(statearr_49902_49975[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (2)))
{var state_49852__$1 = state_49852;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49852__$1,(4),ch);
} else
{if((state_val_49853 === (23)))
{var state_49852__$1 = state_49852;var statearr_49903_49976 = state_49852__$1;(statearr_49903_49976[(2)] = null);
(statearr_49903_49976[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (35)))
{var inst_49834 = (state_49852[(2)]);var state_49852__$1 = state_49852;var statearr_49904_49977 = state_49852__$1;(statearr_49904_49977[(2)] = inst_49834);
(statearr_49904_49977[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (19)))
{var inst_49749 = (state_49852[(7)]);var inst_49753 = cljs.core.chunk_first(inst_49749);var inst_49754 = cljs.core.chunk_rest(inst_49749);var inst_49755 = cljs.core.count(inst_49753);var inst_49729 = inst_49754;var inst_49730 = inst_49753;var inst_49731 = inst_49755;var inst_49732 = (0);var state_49852__$1 = (function (){var statearr_49905 = state_49852;(statearr_49905[(12)] = inst_49731);
(statearr_49905[(14)] = inst_49730);
(statearr_49905[(15)] = inst_49732);
(statearr_49905[(16)] = inst_49729);
return statearr_49905;
})();var statearr_49906_49978 = state_49852__$1;(statearr_49906_49978[(2)] = null);
(statearr_49906_49978[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (11)))
{var inst_49749 = (state_49852[(7)]);var inst_49729 = (state_49852[(16)]);var inst_49749__$1 = cljs.core.seq(inst_49729);var state_49852__$1 = (function (){var statearr_49907 = state_49852;(statearr_49907[(7)] = inst_49749__$1);
return statearr_49907;
})();if(inst_49749__$1)
{var statearr_49908_49979 = state_49852__$1;(statearr_49908_49979[(1)] = (16));
} else
{var statearr_49909_49980 = state_49852__$1;(statearr_49909_49980[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (9)))
{var inst_49777 = (state_49852[(2)]);var state_49852__$1 = state_49852;var statearr_49910_49981 = state_49852__$1;(statearr_49910_49981[(2)] = inst_49777);
(statearr_49910_49981[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (5)))
{var inst_49727 = (function (){var G__49911 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__49911) : cljs.core.deref.call(null,G__49911));
})();var inst_49728 = cljs.core.seq(inst_49727);var inst_49729 = inst_49728;var inst_49730 = null;var inst_49731 = (0);var inst_49732 = (0);var state_49852__$1 = (function (){var statearr_49912 = state_49852;(statearr_49912[(12)] = inst_49731);
(statearr_49912[(14)] = inst_49730);
(statearr_49912[(15)] = inst_49732);
(statearr_49912[(16)] = inst_49729);
return statearr_49912;
})();var statearr_49913_49982 = state_49852__$1;(statearr_49913_49982[(2)] = null);
(statearr_49913_49982[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (14)))
{var state_49852__$1 = state_49852;var statearr_49914_49983 = state_49852__$1;(statearr_49914_49983[(2)] = null);
(statearr_49914_49983[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (45)))
{var inst_49842 = (state_49852[(2)]);var state_49852__$1 = state_49852;var statearr_49915_49984 = state_49852__$1;(statearr_49915_49984[(2)] = inst_49842);
(statearr_49915_49984[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (26)))
{var inst_49780 = (state_49852[(30)]);var inst_49838 = (state_49852[(2)]);var inst_49839 = cljs.core.seq(inst_49780);var state_49852__$1 = (function (){var statearr_49916 = state_49852;(statearr_49916[(32)] = inst_49838);
return statearr_49916;
})();if(inst_49839)
{var statearr_49917_49985 = state_49852__$1;(statearr_49917_49985[(1)] = (42));
} else
{var statearr_49918_49986 = state_49852__$1;(statearr_49918_49986[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (16)))
{var inst_49749 = (state_49852[(7)]);var inst_49751 = cljs.core.chunked_seq_QMARK_(inst_49749);var state_49852__$1 = state_49852;if(inst_49751)
{var statearr_49922_49987 = state_49852__$1;(statearr_49922_49987[(1)] = (19));
} else
{var statearr_49923_49988 = state_49852__$1;(statearr_49923_49988[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (38)))
{var inst_49831 = (state_49852[(2)]);var state_49852__$1 = state_49852;var statearr_49924_49989 = state_49852__$1;(statearr_49924_49989[(2)] = inst_49831);
(statearr_49924_49989[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (30)))
{var inst_49788 = (state_49852[(18)]);var inst_49791 = (state_49852[(9)]);var inst_49789 = (state_49852[(10)]);var inst_49790 = (state_49852[(20)]);var inst_49805 = (state_49852[(2)]);var inst_49806 = (inst_49791 + (1));var tmp49919 = inst_49788;var tmp49920 = inst_49789;var tmp49921 = inst_49790;var inst_49788__$1 = tmp49919;var inst_49789__$1 = tmp49920;var inst_49790__$1 = tmp49921;var inst_49791__$1 = inst_49806;var state_49852__$1 = (function (){var statearr_49925 = state_49852;(statearr_49925[(33)] = inst_49805);
(statearr_49925[(18)] = inst_49788__$1);
(statearr_49925[(9)] = inst_49791__$1);
(statearr_49925[(10)] = inst_49789__$1);
(statearr_49925[(20)] = inst_49790__$1);
return statearr_49925;
})();var statearr_49926_49990 = state_49852__$1;(statearr_49926_49990[(2)] = null);
(statearr_49926_49990[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (10)))
{var inst_49730 = (state_49852[(14)]);var inst_49732 = (state_49852[(15)]);var inst_49738 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_49730,inst_49732);var inst_49739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49738,(0),null);var inst_49740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49738,(1),null);var state_49852__$1 = (function (){var statearr_49927 = state_49852;(statearr_49927[(28)] = inst_49739);
return statearr_49927;
})();if(cljs.core.truth_(inst_49740))
{var statearr_49928_49991 = state_49852__$1;(statearr_49928_49991[(1)] = (13));
} else
{var statearr_49929_49992 = state_49852__$1;(statearr_49929_49992[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (18)))
{var inst_49773 = (state_49852[(2)]);var state_49852__$1 = state_49852;var statearr_49930_49993 = state_49852__$1;(statearr_49930_49993[(2)] = inst_49773);
(statearr_49930_49993[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (42)))
{var state_49852__$1 = state_49852;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49852__$1,(45),dchan);
} else
{if((state_val_49853 === (37)))
{var inst_49809 = (state_49852[(17)]);var inst_49818 = cljs.core.first(inst_49809);var state_49852__$1 = (function (){var statearr_49931 = state_49852;(statearr_49931[(25)] = inst_49818);
return statearr_49931;
})();var statearr_49932_49994 = state_49852__$1;(statearr_49932_49994[(2)] = null);
(statearr_49932_49994[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49853 === (8)))
{var inst_49731 = (state_49852[(12)]);var inst_49732 = (state_49852[(15)]);var inst_49734 = (inst_49732 < inst_49731);var inst_49735 = inst_49734;var state_49852__$1 = state_49852;if(cljs.core.truth_(inst_49735))
{var statearr_49933_49995 = state_49852__$1;(statearr_49933_49995[(1)] = (10));
} else
{var statearr_49934_49996 = state_49852__$1;(statearr_49934_49996[(1)] = (11));
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
});})(c__22689__auto___49944,cs,m,dchan,dctr,done))
;return ((function (switch__22674__auto__,c__22689__auto___49944,cs,m,dchan,dctr,done){
return (function() {
var state_machine__22675__auto__ = null;
var state_machine__22675__auto____0 = (function (){var statearr_49938 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49938[(0)] = state_machine__22675__auto__);
(statearr_49938[(1)] = (1));
return statearr_49938;
});
var state_machine__22675__auto____1 = (function (state_49852){while(true){
var ret_value__22676__auto__ = (function (){try{while(true){
var result__22677__auto__ = switch__22674__auto__(state_49852);if(cljs.core.keyword_identical_QMARK_(result__22677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22677__auto__;
}
break;
}
}catch (e49939){if((e49939 instanceof Object))
{var ex__22678__auto__ = e49939;var statearr_49940_49997 = state_49852;(statearr_49940_49997[(5)] = ex__22678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49852);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e49939;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49998 = state_49852;
state_49852 = G__49998;
continue;
}
} else
{return ret_value__22676__auto__;
}
break;
}
});
state_machine__22675__auto__ = function(state_49852){
switch(arguments.length){
case 0:
return state_machine__22675__auto____0.call(this);
case 1:
return state_machine__22675__auto____1.call(this,state_49852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22675__auto____0;
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22675__auto____1;
return state_machine__22675__auto__;
})()
;})(switch__22674__auto__,c__22689__auto___49944,cs,m,dchan,dctr,done))
})();var state__22691__auto__ = (function (){var statearr_49941 = (function (){return (f__22690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22690__auto__.cljs$core$IFn$_invoke$arity$0() : f__22690__auto__.call(null));
})();(statearr_49941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22689__auto___49944);
return statearr_49941;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22691__auto__);
});})(c__22689__auto___49944,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj50003 = {};return obj50003;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__19267__auto__ = m;if(and__19267__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__19267__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__20529__auto__ = (((m == null))?null:m);return (function (){var or__19289__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__50007 = x__20529__auto__;return goog.typeOf(G__50007);
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
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__19267__auto__ = m;if(and__19267__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__19267__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__20529__auto__ = (((m == null))?null:m);return (function (){var or__19289__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__50011 = x__20529__auto__;return goog.typeOf(G__50011);
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
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__19267__auto__ = m;if(and__19267__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__19267__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__20529__auto__ = (((m == null))?null:m);return (function (){var or__19289__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__50015 = x__20529__auto__;return goog.typeOf(G__50015);
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
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__19267__auto__ = m;if(and__19267__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__19267__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__20529__auto__ = (((m == null))?null:m);return (function (){var or__19289__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__50019 = x__20529__auto__;return goog.typeOf(G__50019);
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
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__19267__auto__ = m;if(and__19267__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__19267__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__20529__auto__ = (((m == null))?null:m);return (function (){var or__19289__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__50023 = x__20529__auto__;return goog.typeOf(G__50023);
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
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__50147 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__50147) : cljs.core.atom.call(null,G__50147));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = (function (){var G__50148 = new cljs.core.Keyword(null,"mute","mute",1151223646);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__50148) : cljs.core.atom.call(null,G__50148));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__50149 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__50149) : attr.call(null,G__50149));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__50150 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50150) : cljs.core.deref.call(null,G__50150));
})();var mode = (function (){var G__50151 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50151) : cljs.core.deref.call(null,G__50151));
})();var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t50152 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50152 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta50153){
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
this.meta50153 = meta50153;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50152.cljs$lang$type = true;
cljs.core.async.t50152.cljs$lang$ctorStr = "cljs.core.async/t50152";
cljs.core.async.t50152.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"cljs.core.async/t50152");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50152.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t50152.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50152.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50152.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__50155_50270 = self__.cs;var G__50156_50271 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__50155_50270,G__50156_50271) : cljs.core.reset_BANG_.call(null,G__50155_50270,G__50156_50271));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50152.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50152.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__50157 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__50157) : self__.solo_modes.call(null,G__50157));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__50158_50272 = self__.solo_mode;var G__50159_50273 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__50158_50272,G__50159_50273) : cljs.core.reset_BANG_.call(null,G__50158_50272,G__50159_50273));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50152.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t50152.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50152.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_50154){var self__ = this;
var _50154__$1 = this;return self__.meta50153;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t50152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_50154,meta50153__$1){var self__ = this;
var _50154__$1 = this;return (new cljs.core.async.t50152(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta50153__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t50152 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t50152(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50153){return (new cljs.core.async.t50152(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50153));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t50152(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__22689__auto___50274 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22689__auto___50274,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__22690__auto__ = (function (){var switch__22674__auto__ = ((function (c__22689__auto___50274,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_50226){var state_val_50227 = (state_50226[(1)]);if((state_val_50227 === (7)))
{var inst_50173 = (state_50226[(7)]);var inst_50178 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50173);var state_50226__$1 = state_50226;var statearr_50228_50275 = state_50226__$1;(statearr_50228_50275[(2)] = inst_50178);
(statearr_50228_50275[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50227 === (20)))
{var inst_50188 = (state_50226[(8)]);var state_50226__$1 = state_50226;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50226__$1,(23),out,inst_50188);
} else
{if((state_val_50227 === (1)))
{var inst_50163 = (state_50226[(9)]);var inst_50163__$1 = calc_state();var inst_50164 = cljs.core.seq_QMARK_(inst_50163__$1);var state_50226__$1 = (function (){var statearr_50229 = state_50226;(statearr_50229[(9)] = inst_50163__$1);
return statearr_50229;
})();if(inst_50164)
{var statearr_50230_50276 = state_50226__$1;(statearr_50230_50276[(1)] = (2));
} else
{var statearr_50231_50277 = state_50226__$1;(statearr_50231_50277[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50227 === (4)))
{var inst_50163 = (state_50226[(9)]);var inst_50169 = (state_50226[(2)]);var inst_50170 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50169,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_50171 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50169,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_50172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50169,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_50173 = inst_50163;var state_50226__$1 = (function (){var statearr_50232 = state_50226;(statearr_50232[(10)] = inst_50172);
(statearr_50232[(7)] = inst_50173);
(statearr_50232[(11)] = inst_50170);
(statearr_50232[(12)] = inst_50171);
return statearr_50232;
})();var statearr_50233_50278 = state_50226__$1;(statearr_50233_50278[(2)] = null);
(statearr_50233_50278[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50227 === (15)))
{var state_50226__$1 = state_50226;var statearr_50234_50279 = state_50226__$1;(statearr_50234_50279[(2)] = null);
(statearr_50234_50279[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50227 === (21)))
{var state_50226__$1 = state_50226;var statearr_50235_50280 = state_50226__$1;(statearr_50235_50280[(2)] = null);
(statearr_50235_50280[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50227 === (13)))
{var inst_50222 = (state_50226[(2)]);var state_50226__$1 = state_50226;var statearr_50236_50281 = state_50226__$1;(statearr_50236_50281[(2)] = inst_50222);
(statearr_50236_50281[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50227 === (22)))
{var inst_50181 = (state_50226[(13)]);var inst_50219 = (state_50226[(2)]);var inst_50173 = inst_50181;var state_50226__$1 = (function (){var statearr_50237 = state_50226;(statearr_50237[(7)] = inst_50173);
(statearr_50237[(14)] = inst_50219);
return statearr_50237;
})();var statearr_50238_50282 = state_50226__$1;(statearr_50238_50282[(2)] = null);
(statearr_50238_50282[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50227 === (6)))
{var inst_50224 = (state_50226[(2)]);var state_50226__$1 = state_50226;return cljs.core.async.impl.ioc_helpers.return_chan(state_50226__$1,inst_50224);
} else
{if((state_val_50227 === (17)))
{var inst_50204 = (state_50226[(15)]);var state_50226__$1 = state_50226;var statearr_50239_50283 = state_50226__$1;(statearr_50239_50283[(2)] = inst_50204);
(statearr_50239_50283[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50227 === (3)))
{var inst_50163 = (state_50226[(9)]);var state_50226__$1 = state_50226;var statearr_50240_50284 = state_50226__$1;(statearr_50240_50284[(2)] = inst_50163);
(statearr_50240_50284[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50227 === (12)))
{var inst_50184 = (state_50226[(16)]);var inst_50189 = (state_50226[(17)]);var inst_50204 = (state_50226[(15)]);var inst_50204__$1 = (function (){var G__50241 = inst_50189;return (inst_50184.cljs$core$IFn$_invoke$arity$1 ? inst_50184.cljs$core$IFn$_invoke$arity$1(G__50241) : inst_50184.call(null,G__50241));
})();var state_50226__$1 = (function (){var statearr_50242 = state_50226;(statearr_50242[(15)] = inst_50204__$1);
return statearr_50242;
})();if(cljs.core.truth_(inst_50204__$1))
{var statearr_50243_50285 = state_50226__$1;(statearr_50243_50285[(1)] = (17));
} else
{var statearr_50244_50286 = state_50226__$1;(statearr_50244_50286[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50227 === (2)))
{var inst_50163 = (state_50226[(9)]);var inst_50166 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50163);var state_50226__$1 = state_50226;var statearr_50245_50287 = state_50226__$1;(statearr_50245_50287[(2)] = inst_50166);
(statearr_50245_50287[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50227 === (23)))
{var inst_50216 = (state_50226[(2)]);var state_50226__$1 = state_50226;var statearr_50246_50288 = state_50226__$1;(statearr_50246_50288[(2)] = inst_50216);
(statearr_50246_50288[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50227 === (19)))
{var inst_50213 = (state_50226[(2)]);var state_50226__$1 = state_50226;if(cljs.core.truth_(inst_50213))
{var statearr_50247_50289 = state_50226__$1;(statearr_50247_50289[(1)] = (20));
} else
{var statearr_50248_50290 = state_50226__$1;(statearr_50248_50290[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50227 === (11)))
{var inst_50188 = (state_50226[(8)]);var inst_50194 = (inst_50188 == null);var state_50226__$1 = state_50226;if(cljs.core.truth_(inst_50194))
{var statearr_50249_50291 = state_50226__$1;(statearr_50249_50291[(1)] = (14));
} else
{var statearr_50250_50292 = state_50226__$1;(statearr_50250_50292[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50227 === (9)))
{var inst_50181 = (state_50226[(13)]);var inst_50181__$1 = (state_50226[(2)]);var inst_50182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50181__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_50183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50181__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_50184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50181__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_50226__$1 = (function (){var statearr_50251 = state_50226;(statearr_50251[(18)] = inst_50183);
(statearr_50251[(16)] = inst_50184);
(statearr_50251[(13)] = inst_50181__$1);
return statearr_50251;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_50226__$1,(10),inst_50182);
} else
{if((state_val_50227 === (5)))
{var inst_50173 = (state_50226[(7)]);var inst_50176 = cljs.core.seq_QMARK_(inst_50173);var state_50226__$1 = state_50226;if(inst_50176)
{var statearr_50252_50293 = state_50226__$1;(statearr_50252_50293[(1)] = (7));
} else
{var statearr_50253_50294 = state_50226__$1;(statearr_50253_50294[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50227 === (14)))
{var inst_50189 = (state_50226[(17)]);var inst_50196 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_50189);var state_50226__$1 = state_50226;var statearr_50254_50295 = state_50226__$1;(statearr_50254_50295[(2)] = inst_50196);
(statearr_50254_50295[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50227 === (16)))
{var inst_50199 = (state_50226[(2)]);var inst_50200 = calc_state();var inst_50173 = inst_50200;var state_50226__$1 = (function (){var statearr_50255 = state_50226;(statearr_50255[(19)] = inst_50199);
(statearr_50255[(7)] = inst_50173);
return statearr_50255;
})();var statearr_50256_50296 = state_50226__$1;(statearr_50256_50296[(2)] = null);
(statearr_50256_50296[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50227 === (10)))
{var inst_50188 = (state_50226[(8)]);var inst_50189 = (state_50226[(17)]);var inst_50187 = (state_50226[(2)]);var inst_50188__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50187,(0),null);var inst_50189__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50187,(1),null);var inst_50190 = (inst_50188__$1 == null);var inst_50191 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50189__$1,change);var inst_50192 = (inst_50190) || (inst_50191);var state_50226__$1 = (function (){var statearr_50257 = state_50226;(statearr_50257[(8)] = inst_50188__$1);
(statearr_50257[(17)] = inst_50189__$1);
return statearr_50257;
})();if(cljs.core.truth_(inst_50192))
{var statearr_50258_50297 = state_50226__$1;(statearr_50258_50297[(1)] = (11));
} else
{var statearr_50259_50298 = state_50226__$1;(statearr_50259_50298[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50227 === (18)))
{var inst_50183 = (state_50226[(18)]);var inst_50184 = (state_50226[(16)]);var inst_50189 = (state_50226[(17)]);var inst_50208 = cljs.core.empty_QMARK_(inst_50184);var inst_50209 = (function (){var G__50260 = inst_50189;return (inst_50183.cljs$core$IFn$_invoke$arity$1 ? inst_50183.cljs$core$IFn$_invoke$arity$1(G__50260) : inst_50183.call(null,G__50260));
})();var inst_50210 = cljs.core.not(inst_50209);var inst_50211 = (inst_50208) && (inst_50210);var state_50226__$1 = state_50226;var statearr_50261_50299 = state_50226__$1;(statearr_50261_50299[(2)] = inst_50211);
(statearr_50261_50299[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50227 === (8)))
{var inst_50173 = (state_50226[(7)]);var state_50226__$1 = state_50226;var statearr_50262_50300 = state_50226__$1;(statearr_50262_50300[(2)] = inst_50173);
(statearr_50262_50300[(1)] = (9));
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
});})(c__22689__auto___50274,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__22674__auto__,c__22689__auto___50274,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__22675__auto__ = null;
var state_machine__22675__auto____0 = (function (){var statearr_50266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50266[(0)] = state_machine__22675__auto__);
(statearr_50266[(1)] = (1));
return statearr_50266;
});
var state_machine__22675__auto____1 = (function (state_50226){while(true){
var ret_value__22676__auto__ = (function (){try{while(true){
var result__22677__auto__ = switch__22674__auto__(state_50226);if(cljs.core.keyword_identical_QMARK_(result__22677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22677__auto__;
}
break;
}
}catch (e50267){if((e50267 instanceof Object))
{var ex__22678__auto__ = e50267;var statearr_50268_50301 = state_50226;(statearr_50268_50301[(5)] = ex__22678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_50226);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e50267;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50302 = state_50226;
state_50226 = G__50302;
continue;
}
} else
{return ret_value__22676__auto__;
}
break;
}
});
state_machine__22675__auto__ = function(state_50226){
switch(arguments.length){
case 0:
return state_machine__22675__auto____0.call(this);
case 1:
return state_machine__22675__auto____1.call(this,state_50226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22675__auto____0;
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22675__auto____1;
return state_machine__22675__auto__;
})()
;})(switch__22674__auto__,c__22689__auto___50274,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__22691__auto__ = (function (){var statearr_50269 = (function (){return (f__22690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22690__auto__.cljs$core$IFn$_invoke$arity$0() : f__22690__auto__.call(null));
})();(statearr_50269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22689__auto___50274);
return statearr_50269;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22691__auto__);
});})(c__22689__auto___50274,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj50304 = {};return obj50304;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__19267__auto__ = p;if(and__19267__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__19267__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__20529__auto__ = (((p == null))?null:p);return (function (){var or__19289__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__50308 = x__20529__auto__;return goog.typeOf(G__50308);
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
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__19267__auto__ = p;if(and__19267__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__19267__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__20529__auto__ = (((p == null))?null:p);return (function (){var or__19289__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__50312 = x__20529__auto__;return goog.typeOf(G__50312);
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
var unsub_all_STAR___1 = (function (p){if((function (){var and__19267__auto__ = p;if(and__19267__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__19267__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__20529__auto__ = (((p == null))?null:p);return (function (){var or__19289__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__50318 = x__20529__auto__;return goog.typeOf(G__50318);
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
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__19267__auto__ = p;if(and__19267__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__19267__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__20529__auto__ = (((p == null))?null:p);return (function (){var or__19289__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__50320 = x__20529__auto__;return goog.typeOf(G__50320);
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
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__50461 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__50461) : cljs.core.atom.call(null,G__50461));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__19289__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__50463 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50463) : cljs.core.deref.call(null,G__50463));
})(),topic);if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__19289__auto__,mults){
return (function (p1__50321_SHARP_){if(cljs.core.truth_((function (){var G__50464 = topic;return (p1__50321_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__50321_SHARP_.cljs$core$IFn$_invoke$arity$1(G__50464) : p1__50321_SHARP_.call(null,G__50464));
})()))
{return p1__50321_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50321_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__50465 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__50465) : buf_fn.call(null,G__50465));
})())));
}
});})(or__19289__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t50466 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50466 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta50467){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta50467 = meta50467;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50466.cljs$lang$type = true;
cljs.core.async.t50466.cljs$lang$ctorStr = "cljs.core.async/t50466";
cljs.core.async.t50466.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"cljs.core.async/t50466");
});})(mults,ensure_mult))
;
cljs.core.async.t50466.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t50466.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__50469 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__50469) : self__.ensure_mult.call(null,G__50469));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t50466.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__50470 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50470) : cljs.core.deref.call(null,G__50470));
})(),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t50466.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__50471 = self__.mults;var G__50472 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__50471,G__50472) : cljs.core.reset_BANG_.call(null,G__50471,G__50472));
});})(mults,ensure_mult))
;
cljs.core.async.t50466.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t50466.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t50466.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t50466.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_50468){var self__ = this;
var _50468__$1 = this;return self__.meta50467;
});})(mults,ensure_mult))
;
cljs.core.async.t50466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_50468,meta50467__$1){var self__ = this;
var _50468__$1 = this;return (new cljs.core.async.t50466(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta50467__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t50466 = ((function (mults,ensure_mult){
return (function __GT_t50466(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta50467){return (new cljs.core.async.t50466(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta50467));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t50466(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__22689__auto___50597 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22689__auto___50597,mults,ensure_mult,p){
return (function (){var f__22690__auto__ = (function (){var switch__22674__auto__ = ((function (c__22689__auto___50597,mults,ensure_mult,p){
return (function (state_50546){var state_val_50547 = (state_50546[(1)]);if((state_val_50547 === (7)))
{var inst_50542 = (state_50546[(2)]);var state_50546__$1 = state_50546;var statearr_50548_50598 = state_50546__$1;(statearr_50548_50598[(2)] = inst_50542);
(statearr_50548_50598[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50547 === (20)))
{var state_50546__$1 = state_50546;var statearr_50549_50599 = state_50546__$1;(statearr_50549_50599[(2)] = null);
(statearr_50549_50599[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50547 === (1)))
{var state_50546__$1 = state_50546;var statearr_50550_50600 = state_50546__$1;(statearr_50550_50600[(2)] = null);
(statearr_50550_50600[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50547 === (24)))
{var inst_50525 = (state_50546[(7)]);var inst_50475 = (state_50546[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50546,(23),Object,null,(22));var inst_50532 = cljs.core.async.muxch_STAR_(inst_50525);var state_50546__$1 = state_50546;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50546__$1,(25),inst_50532,inst_50475);
} else
{if((state_val_50547 === (4)))
{var inst_50475 = (state_50546[(8)]);var inst_50475__$1 = (state_50546[(2)]);var inst_50476 = (inst_50475__$1 == null);var state_50546__$1 = (function (){var statearr_50551 = state_50546;(statearr_50551[(8)] = inst_50475__$1);
return statearr_50551;
})();if(cljs.core.truth_(inst_50476))
{var statearr_50552_50601 = state_50546__$1;(statearr_50552_50601[(1)] = (5));
} else
{var statearr_50553_50602 = state_50546__$1;(statearr_50553_50602[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50547 === (15)))
{var inst_50517 = (state_50546[(2)]);var state_50546__$1 = state_50546;var statearr_50554_50603 = state_50546__$1;(statearr_50554_50603[(2)] = inst_50517);
(statearr_50554_50603[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50547 === (21)))
{var inst_50539 = (state_50546[(2)]);var state_50546__$1 = (function (){var statearr_50555 = state_50546;(statearr_50555[(9)] = inst_50539);
return statearr_50555;
})();var statearr_50556_50604 = state_50546__$1;(statearr_50556_50604[(2)] = null);
(statearr_50556_50604[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50547 === (13)))
{var inst_50499 = (state_50546[(10)]);var inst_50501 = cljs.core.chunked_seq_QMARK_(inst_50499);var state_50546__$1 = state_50546;if(inst_50501)
{var statearr_50557_50605 = state_50546__$1;(statearr_50557_50605[(1)] = (16));
} else
{var statearr_50558_50606 = state_50546__$1;(statearr_50558_50606[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50547 === (22)))
{var inst_50536 = (state_50546[(2)]);var state_50546__$1 = state_50546;var statearr_50559_50607 = state_50546__$1;(statearr_50559_50607[(2)] = inst_50536);
(statearr_50559_50607[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50547 === (6)))
{var inst_50525 = (state_50546[(7)]);var inst_50523 = (state_50546[(11)]);var inst_50475 = (state_50546[(8)]);var inst_50523__$1 = (function (){var G__50560 = inst_50475;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__50560) : topic_fn.call(null,G__50560));
})();var inst_50524 = (function (){var G__50561 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50561) : cljs.core.deref.call(null,G__50561));
})();var inst_50525__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50524,inst_50523__$1);var state_50546__$1 = (function (){var statearr_50562 = state_50546;(statearr_50562[(7)] = inst_50525__$1);
(statearr_50562[(11)] = inst_50523__$1);
return statearr_50562;
})();if(cljs.core.truth_(inst_50525__$1))
{var statearr_50563_50608 = state_50546__$1;(statearr_50563_50608[(1)] = (19));
} else
{var statearr_50564_50609 = state_50546__$1;(statearr_50564_50609[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50547 === (25)))
{var inst_50534 = (state_50546[(2)]);var state_50546__$1 = state_50546;var statearr_50565_50610 = state_50546__$1;(statearr_50565_50610[(2)] = inst_50534);
cljs.core.async.impl.ioc_helpers.process_exception(state_50546__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50547 === (17)))
{var inst_50499 = (state_50546[(10)]);var inst_50508 = cljs.core.first(inst_50499);var inst_50509 = cljs.core.async.muxch_STAR_(inst_50508);var inst_50510 = cljs.core.async.close_BANG_(inst_50509);var inst_50511 = cljs.core.next(inst_50499);var inst_50485 = inst_50511;var inst_50486 = null;var inst_50487 = (0);var inst_50488 = (0);var state_50546__$1 = (function (){var statearr_50566 = state_50546;(statearr_50566[(12)] = inst_50510);
(statearr_50566[(13)] = inst_50485);
(statearr_50566[(14)] = inst_50488);
(statearr_50566[(15)] = inst_50487);
(statearr_50566[(16)] = inst_50486);
return statearr_50566;
})();var statearr_50567_50611 = state_50546__$1;(statearr_50567_50611[(2)] = null);
(statearr_50567_50611[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50547 === (3)))
{var inst_50544 = (state_50546[(2)]);var state_50546__$1 = state_50546;return cljs.core.async.impl.ioc_helpers.return_chan(state_50546__$1,inst_50544);
} else
{if((state_val_50547 === (12)))
{var inst_50519 = (state_50546[(2)]);var state_50546__$1 = state_50546;var statearr_50568_50612 = state_50546__$1;(statearr_50568_50612[(2)] = inst_50519);
(statearr_50568_50612[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50547 === (2)))
{var state_50546__$1 = state_50546;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50546__$1,(4),ch);
} else
{if((state_val_50547 === (23)))
{var inst_50523 = (state_50546[(11)]);var inst_50527 = (state_50546[(2)]);var inst_50528 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_50523);var state_50546__$1 = (function (){var statearr_50569 = state_50546;(statearr_50569[(17)] = inst_50527);
return statearr_50569;
})();var statearr_50570_50613 = state_50546__$1;(statearr_50570_50613[(2)] = inst_50528);
cljs.core.async.impl.ioc_helpers.process_exception(state_50546__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50547 === (19)))
{var state_50546__$1 = state_50546;var statearr_50571_50614 = state_50546__$1;(statearr_50571_50614[(2)] = null);
(statearr_50571_50614[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50547 === (11)))
{var inst_50485 = (state_50546[(13)]);var inst_50499 = (state_50546[(10)]);var inst_50499__$1 = cljs.core.seq(inst_50485);var state_50546__$1 = (function (){var statearr_50572 = state_50546;(statearr_50572[(10)] = inst_50499__$1);
return statearr_50572;
})();if(inst_50499__$1)
{var statearr_50573_50615 = state_50546__$1;(statearr_50573_50615[(1)] = (13));
} else
{var statearr_50574_50616 = state_50546__$1;(statearr_50574_50616[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50547 === (9)))
{var inst_50521 = (state_50546[(2)]);var state_50546__$1 = state_50546;var statearr_50575_50617 = state_50546__$1;(statearr_50575_50617[(2)] = inst_50521);
(statearr_50575_50617[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50547 === (5)))
{var inst_50482 = (function (){var G__50576 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__50576) : cljs.core.deref.call(null,G__50576));
})();var inst_50483 = cljs.core.vals(inst_50482);var inst_50484 = cljs.core.seq(inst_50483);var inst_50485 = inst_50484;var inst_50486 = null;var inst_50487 = (0);var inst_50488 = (0);var state_50546__$1 = (function (){var statearr_50577 = state_50546;(statearr_50577[(13)] = inst_50485);
(statearr_50577[(14)] = inst_50488);
(statearr_50577[(15)] = inst_50487);
(statearr_50577[(16)] = inst_50486);
return statearr_50577;
})();var statearr_50578_50618 = state_50546__$1;(statearr_50578_50618[(2)] = null);
(statearr_50578_50618[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50547 === (14)))
{var state_50546__$1 = state_50546;var statearr_50582_50619 = state_50546__$1;(statearr_50582_50619[(2)] = null);
(statearr_50582_50619[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50547 === (16)))
{var inst_50499 = (state_50546[(10)]);var inst_50503 = cljs.core.chunk_first(inst_50499);var inst_50504 = cljs.core.chunk_rest(inst_50499);var inst_50505 = cljs.core.count(inst_50503);var inst_50485 = inst_50504;var inst_50486 = inst_50503;var inst_50487 = inst_50505;var inst_50488 = (0);var state_50546__$1 = (function (){var statearr_50583 = state_50546;(statearr_50583[(13)] = inst_50485);
(statearr_50583[(14)] = inst_50488);
(statearr_50583[(15)] = inst_50487);
(statearr_50583[(16)] = inst_50486);
return statearr_50583;
})();var statearr_50584_50620 = state_50546__$1;(statearr_50584_50620[(2)] = null);
(statearr_50584_50620[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50547 === (10)))
{var inst_50485 = (state_50546[(13)]);var inst_50488 = (state_50546[(14)]);var inst_50487 = (state_50546[(15)]);var inst_50486 = (state_50546[(16)]);var inst_50493 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_50486,inst_50488);var inst_50494 = cljs.core.async.muxch_STAR_(inst_50493);var inst_50495 = cljs.core.async.close_BANG_(inst_50494);var inst_50496 = (inst_50488 + (1));var tmp50579 = inst_50485;var tmp50580 = inst_50487;var tmp50581 = inst_50486;var inst_50485__$1 = tmp50579;var inst_50486__$1 = tmp50581;var inst_50487__$1 = tmp50580;var inst_50488__$1 = inst_50496;var state_50546__$1 = (function (){var statearr_50585 = state_50546;(statearr_50585[(18)] = inst_50495);
(statearr_50585[(13)] = inst_50485__$1);
(statearr_50585[(14)] = inst_50488__$1);
(statearr_50585[(15)] = inst_50487__$1);
(statearr_50585[(16)] = inst_50486__$1);
return statearr_50585;
})();var statearr_50586_50621 = state_50546__$1;(statearr_50586_50621[(2)] = null);
(statearr_50586_50621[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50547 === (18)))
{var inst_50514 = (state_50546[(2)]);var state_50546__$1 = state_50546;var statearr_50587_50622 = state_50546__$1;(statearr_50587_50622[(2)] = inst_50514);
(statearr_50587_50622[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50547 === (8)))
{var inst_50488 = (state_50546[(14)]);var inst_50487 = (state_50546[(15)]);var inst_50490 = (inst_50488 < inst_50487);var inst_50491 = inst_50490;var state_50546__$1 = state_50546;if(cljs.core.truth_(inst_50491))
{var statearr_50588_50623 = state_50546__$1;(statearr_50588_50623[(1)] = (10));
} else
{var statearr_50589_50624 = state_50546__$1;(statearr_50589_50624[(1)] = (11));
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
});})(c__22689__auto___50597,mults,ensure_mult,p))
;return ((function (switch__22674__auto__,c__22689__auto___50597,mults,ensure_mult,p){
return (function() {
var state_machine__22675__auto__ = null;
var state_machine__22675__auto____0 = (function (){var statearr_50593 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50593[(0)] = state_machine__22675__auto__);
(statearr_50593[(1)] = (1));
return statearr_50593;
});
var state_machine__22675__auto____1 = (function (state_50546){while(true){
var ret_value__22676__auto__ = (function (){try{while(true){
var result__22677__auto__ = switch__22674__auto__(state_50546);if(cljs.core.keyword_identical_QMARK_(result__22677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22677__auto__;
}
break;
}
}catch (e50594){if((e50594 instanceof Object))
{var ex__22678__auto__ = e50594;var statearr_50595_50625 = state_50546;(statearr_50595_50625[(5)] = ex__22678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_50546);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e50594;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50626 = state_50546;
state_50546 = G__50626;
continue;
}
} else
{return ret_value__22676__auto__;
}
break;
}
});
state_machine__22675__auto__ = function(state_50546){
switch(arguments.length){
case 0:
return state_machine__22675__auto____0.call(this);
case 1:
return state_machine__22675__auto____1.call(this,state_50546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22675__auto____0;
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22675__auto____1;
return state_machine__22675__auto__;
})()
;})(switch__22674__auto__,c__22689__auto___50597,mults,ensure_mult,p))
})();var state__22691__auto__ = (function (){var statearr_50596 = (function (){return (f__22690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22690__auto__.cljs$core$IFn$_invoke$arity$0() : f__22690__auto__.call(null));
})();(statearr_50596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22689__auto___50597);
return statearr_50596;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22691__auto__);
});})(c__22689__auto___50597,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__50707 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__50707) : cljs.core.atom.call(null,G__50707));
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__22689__auto___50780 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22689__auto___50780,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__22690__auto__ = (function (){var switch__22674__auto__ = ((function (c__22689__auto___50780,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_50746){var state_val_50747 = (state_50746[(1)]);if((state_val_50747 === (7)))
{var state_50746__$1 = state_50746;var statearr_50748_50781 = state_50746__$1;(statearr_50748_50781[(2)] = null);
(statearr_50748_50781[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50747 === (1)))
{var state_50746__$1 = state_50746;var statearr_50749_50782 = state_50746__$1;(statearr_50749_50782[(2)] = null);
(statearr_50749_50782[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50747 === (4)))
{var inst_50710 = (state_50746[(7)]);var inst_50712 = (inst_50710 < cnt);var state_50746__$1 = state_50746;if(cljs.core.truth_(inst_50712))
{var statearr_50750_50783 = state_50746__$1;(statearr_50750_50783[(1)] = (6));
} else
{var statearr_50751_50784 = state_50746__$1;(statearr_50751_50784[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50747 === (15)))
{var inst_50742 = (state_50746[(2)]);var state_50746__$1 = state_50746;var statearr_50752_50785 = state_50746__$1;(statearr_50752_50785[(2)] = inst_50742);
(statearr_50752_50785[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50747 === (13)))
{var inst_50735 = cljs.core.async.close_BANG_(out);var state_50746__$1 = state_50746;var statearr_50753_50786 = state_50746__$1;(statearr_50753_50786[(2)] = inst_50735);
(statearr_50753_50786[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50747 === (6)))
{var state_50746__$1 = state_50746;var statearr_50754_50787 = state_50746__$1;(statearr_50754_50787[(2)] = null);
(statearr_50754_50787[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50747 === (3)))
{var inst_50744 = (state_50746[(2)]);var state_50746__$1 = state_50746;return cljs.core.async.impl.ioc_helpers.return_chan(state_50746__$1,inst_50744);
} else
{if((state_val_50747 === (12)))
{var inst_50732 = (state_50746[(8)]);var inst_50732__$1 = (state_50746[(2)]);var inst_50733 = cljs.core.some(cljs.core.nil_QMARK_,inst_50732__$1);var state_50746__$1 = (function (){var statearr_50755 = state_50746;(statearr_50755[(8)] = inst_50732__$1);
return statearr_50755;
})();if(cljs.core.truth_(inst_50733))
{var statearr_50756_50788 = state_50746__$1;(statearr_50756_50788[(1)] = (13));
} else
{var statearr_50757_50789 = state_50746__$1;(statearr_50757_50789[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50747 === (2)))
{var inst_50709 = (function (){var G__50758 = dctr;var G__50759 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__50758,G__50759) : cljs.core.reset_BANG_.call(null,G__50758,G__50759));
})();var inst_50710 = (0);var state_50746__$1 = (function (){var statearr_50760 = state_50746;(statearr_50760[(7)] = inst_50710);
(statearr_50760[(9)] = inst_50709);
return statearr_50760;
})();var statearr_50761_50790 = state_50746__$1;(statearr_50761_50790[(2)] = null);
(statearr_50761_50790[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50747 === (11)))
{var inst_50710 = (state_50746[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50746,(10),Object,null,(9));var inst_50719 = (function (){var G__50762 = inst_50710;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__50762) : chs__$1.call(null,G__50762));
})();var inst_50720 = (function (){var G__50763 = inst_50710;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__50763) : done.call(null,G__50763));
})();var inst_50721 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_50719,inst_50720);var state_50746__$1 = state_50746;var statearr_50764_50791 = state_50746__$1;(statearr_50764_50791[(2)] = inst_50721);
cljs.core.async.impl.ioc_helpers.process_exception(state_50746__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50747 === (9)))
{var inst_50710 = (state_50746[(7)]);var inst_50723 = (state_50746[(2)]);var inst_50724 = (inst_50710 + (1));var inst_50710__$1 = inst_50724;var state_50746__$1 = (function (){var statearr_50765 = state_50746;(statearr_50765[(10)] = inst_50723);
(statearr_50765[(7)] = inst_50710__$1);
return statearr_50765;
})();var statearr_50766_50792 = state_50746__$1;(statearr_50766_50792[(2)] = null);
(statearr_50766_50792[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50747 === (5)))
{var inst_50730 = (state_50746[(2)]);var state_50746__$1 = (function (){var statearr_50767 = state_50746;(statearr_50767[(11)] = inst_50730);
return statearr_50767;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50746__$1,(12),dchan);
} else
{if((state_val_50747 === (14)))
{var inst_50732 = (state_50746[(8)]);var inst_50737 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_50732);var state_50746__$1 = state_50746;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50746__$1,(16),out,inst_50737);
} else
{if((state_val_50747 === (16)))
{var inst_50739 = (state_50746[(2)]);var state_50746__$1 = (function (){var statearr_50768 = state_50746;(statearr_50768[(12)] = inst_50739);
return statearr_50768;
})();var statearr_50769_50793 = state_50746__$1;(statearr_50769_50793[(2)] = null);
(statearr_50769_50793[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50747 === (10)))
{var inst_50714 = (state_50746[(2)]);var inst_50715 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_50746__$1 = (function (){var statearr_50770 = state_50746;(statearr_50770[(13)] = inst_50714);
return statearr_50770;
})();var statearr_50771_50794 = state_50746__$1;(statearr_50771_50794[(2)] = inst_50715);
cljs.core.async.impl.ioc_helpers.process_exception(state_50746__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50747 === (8)))
{var inst_50728 = (state_50746[(2)]);var state_50746__$1 = state_50746;var statearr_50772_50795 = state_50746__$1;(statearr_50772_50795[(2)] = inst_50728);
(statearr_50772_50795[(1)] = (5));
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
});})(c__22689__auto___50780,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__22674__auto__,c__22689__auto___50780,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__22675__auto__ = null;
var state_machine__22675__auto____0 = (function (){var statearr_50776 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50776[(0)] = state_machine__22675__auto__);
(statearr_50776[(1)] = (1));
return statearr_50776;
});
var state_machine__22675__auto____1 = (function (state_50746){while(true){
var ret_value__22676__auto__ = (function (){try{while(true){
var result__22677__auto__ = switch__22674__auto__(state_50746);if(cljs.core.keyword_identical_QMARK_(result__22677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22677__auto__;
}
break;
}
}catch (e50777){if((e50777 instanceof Object))
{var ex__22678__auto__ = e50777;var statearr_50778_50796 = state_50746;(statearr_50778_50796[(5)] = ex__22678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_50746);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e50777;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50797 = state_50746;
state_50746 = G__50797;
continue;
}
} else
{return ret_value__22676__auto__;
}
break;
}
});
state_machine__22675__auto__ = function(state_50746){
switch(arguments.length){
case 0:
return state_machine__22675__auto____0.call(this);
case 1:
return state_machine__22675__auto____1.call(this,state_50746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22675__auto____0;
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22675__auto____1;
return state_machine__22675__auto__;
})()
;})(switch__22674__auto__,c__22689__auto___50780,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__22691__auto__ = (function (){var statearr_50779 = (function (){return (f__22690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22690__auto__.cljs$core$IFn$_invoke$arity$0() : f__22690__auto__.call(null));
})();(statearr_50779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22689__auto___50780);
return statearr_50779;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22691__auto__);
});})(c__22689__auto___50780,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22689__auto___50907 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22689__auto___50907,out){
return (function (){var f__22690__auto__ = (function (){var switch__22674__auto__ = ((function (c__22689__auto___50907,out){
return (function (state_50883){var state_val_50884 = (state_50883[(1)]);if((state_val_50884 === (7)))
{var inst_50863 = (state_50883[(7)]);var inst_50862 = (state_50883[(8)]);var inst_50862__$1 = (state_50883[(2)]);var inst_50863__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50862__$1,(0),null);var inst_50864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50862__$1,(1),null);var inst_50865 = (inst_50863__$1 == null);var state_50883__$1 = (function (){var statearr_50885 = state_50883;(statearr_50885[(7)] = inst_50863__$1);
(statearr_50885[(8)] = inst_50862__$1);
(statearr_50885[(9)] = inst_50864);
return statearr_50885;
})();if(cljs.core.truth_(inst_50865))
{var statearr_50886_50908 = state_50883__$1;(statearr_50886_50908[(1)] = (8));
} else
{var statearr_50887_50909 = state_50883__$1;(statearr_50887_50909[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50884 === (1)))
{var inst_50854 = cljs.core.vec(chs);var inst_50855 = inst_50854;var state_50883__$1 = (function (){var statearr_50888 = state_50883;(statearr_50888[(10)] = inst_50855);
return statearr_50888;
})();var statearr_50889_50910 = state_50883__$1;(statearr_50889_50910[(2)] = null);
(statearr_50889_50910[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50884 === (4)))
{var inst_50855 = (state_50883[(10)]);var state_50883__$1 = state_50883;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_50883__$1,(7),inst_50855);
} else
{if((state_val_50884 === (6)))
{var inst_50879 = (state_50883[(2)]);var state_50883__$1 = state_50883;var statearr_50890_50911 = state_50883__$1;(statearr_50890_50911[(2)] = inst_50879);
(statearr_50890_50911[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50884 === (3)))
{var inst_50881 = (state_50883[(2)]);var state_50883__$1 = state_50883;return cljs.core.async.impl.ioc_helpers.return_chan(state_50883__$1,inst_50881);
} else
{if((state_val_50884 === (2)))
{var inst_50855 = (state_50883[(10)]);var inst_50857 = cljs.core.count(inst_50855);var inst_50858 = (inst_50857 > (0));var state_50883__$1 = state_50883;if(cljs.core.truth_(inst_50858))
{var statearr_50892_50912 = state_50883__$1;(statearr_50892_50912[(1)] = (4));
} else
{var statearr_50893_50913 = state_50883__$1;(statearr_50893_50913[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50884 === (11)))
{var inst_50855 = (state_50883[(10)]);var inst_50872 = (state_50883[(2)]);var tmp50891 = inst_50855;var inst_50855__$1 = tmp50891;var state_50883__$1 = (function (){var statearr_50894 = state_50883;(statearr_50894[(11)] = inst_50872);
(statearr_50894[(10)] = inst_50855__$1);
return statearr_50894;
})();var statearr_50895_50914 = state_50883__$1;(statearr_50895_50914[(2)] = null);
(statearr_50895_50914[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50884 === (9)))
{var inst_50863 = (state_50883[(7)]);var state_50883__$1 = state_50883;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50883__$1,(11),out,inst_50863);
} else
{if((state_val_50884 === (5)))
{var inst_50877 = cljs.core.async.close_BANG_(out);var state_50883__$1 = state_50883;var statearr_50896_50915 = state_50883__$1;(statearr_50896_50915[(2)] = inst_50877);
(statearr_50896_50915[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50884 === (10)))
{var inst_50875 = (state_50883[(2)]);var state_50883__$1 = state_50883;var statearr_50897_50916 = state_50883__$1;(statearr_50897_50916[(2)] = inst_50875);
(statearr_50897_50916[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50884 === (8)))
{var inst_50863 = (state_50883[(7)]);var inst_50862 = (state_50883[(8)]);var inst_50864 = (state_50883[(9)]);var inst_50855 = (state_50883[(10)]);var inst_50867 = (function (){var c = inst_50864;var v = inst_50863;var vec__50860 = inst_50862;var cs = inst_50855;return ((function (c,v,vec__50860,cs,inst_50863,inst_50862,inst_50864,inst_50855,state_val_50884,c__22689__auto___50907,out){
return (function (p1__50798_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__50798_SHARP_);
});
;})(c,v,vec__50860,cs,inst_50863,inst_50862,inst_50864,inst_50855,state_val_50884,c__22689__auto___50907,out))
})();var inst_50868 = cljs.core.filterv(inst_50867,inst_50855);var inst_50855__$1 = inst_50868;var state_50883__$1 = (function (){var statearr_50898 = state_50883;(statearr_50898[(10)] = inst_50855__$1);
return statearr_50898;
})();var statearr_50899_50917 = state_50883__$1;(statearr_50899_50917[(2)] = null);
(statearr_50899_50917[(1)] = (2));
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
});})(c__22689__auto___50907,out))
;return ((function (switch__22674__auto__,c__22689__auto___50907,out){
return (function() {
var state_machine__22675__auto__ = null;
var state_machine__22675__auto____0 = (function (){var statearr_50903 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50903[(0)] = state_machine__22675__auto__);
(statearr_50903[(1)] = (1));
return statearr_50903;
});
var state_machine__22675__auto____1 = (function (state_50883){while(true){
var ret_value__22676__auto__ = (function (){try{while(true){
var result__22677__auto__ = switch__22674__auto__(state_50883);if(cljs.core.keyword_identical_QMARK_(result__22677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22677__auto__;
}
break;
}
}catch (e50904){if((e50904 instanceof Object))
{var ex__22678__auto__ = e50904;var statearr_50905_50918 = state_50883;(statearr_50905_50918[(5)] = ex__22678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_50883);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e50904;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50919 = state_50883;
state_50883 = G__50919;
continue;
}
} else
{return ret_value__22676__auto__;
}
break;
}
});
state_machine__22675__auto__ = function(state_50883){
switch(arguments.length){
case 0:
return state_machine__22675__auto____0.call(this);
case 1:
return state_machine__22675__auto____1.call(this,state_50883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22675__auto____0;
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22675__auto____1;
return state_machine__22675__auto__;
})()
;})(switch__22674__auto__,c__22689__auto___50907,out))
})();var state__22691__auto__ = (function (){var statearr_50906 = (function (){return (f__22690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22690__auto__.cljs$core$IFn$_invoke$arity$0() : f__22690__auto__.call(null));
})();(statearr_50906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22689__auto___50907);
return statearr_50906;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22691__auto__);
});})(c__22689__auto___50907,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22689__auto___51015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22689__auto___51015,out){
return (function (){var f__22690__auto__ = (function (){var switch__22674__auto__ = ((function (c__22689__auto___51015,out){
return (function (state_50992){var state_val_50993 = (state_50992[(1)]);if((state_val_50993 === (7)))
{var inst_50974 = (state_50992[(7)]);var inst_50974__$1 = (state_50992[(2)]);var inst_50975 = (inst_50974__$1 == null);var inst_50976 = cljs.core.not(inst_50975);var state_50992__$1 = (function (){var statearr_50994 = state_50992;(statearr_50994[(7)] = inst_50974__$1);
return statearr_50994;
})();if(inst_50976)
{var statearr_50995_51016 = state_50992__$1;(statearr_50995_51016[(1)] = (8));
} else
{var statearr_50996_51017 = state_50992__$1;(statearr_50996_51017[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50993 === (1)))
{var inst_50969 = (0);var state_50992__$1 = (function (){var statearr_50997 = state_50992;(statearr_50997[(8)] = inst_50969);
return statearr_50997;
})();var statearr_50998_51018 = state_50992__$1;(statearr_50998_51018[(2)] = null);
(statearr_50998_51018[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50993 === (4)))
{var state_50992__$1 = state_50992;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50992__$1,(7),ch);
} else
{if((state_val_50993 === (6)))
{var inst_50987 = (state_50992[(2)]);var state_50992__$1 = state_50992;var statearr_50999_51019 = state_50992__$1;(statearr_50999_51019[(2)] = inst_50987);
(statearr_50999_51019[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50993 === (3)))
{var inst_50989 = (state_50992[(2)]);var inst_50990 = cljs.core.async.close_BANG_(out);var state_50992__$1 = (function (){var statearr_51000 = state_50992;(statearr_51000[(9)] = inst_50989);
return statearr_51000;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_50992__$1,inst_50990);
} else
{if((state_val_50993 === (2)))
{var inst_50969 = (state_50992[(8)]);var inst_50971 = (inst_50969 < n);var state_50992__$1 = state_50992;if(cljs.core.truth_(inst_50971))
{var statearr_51001_51020 = state_50992__$1;(statearr_51001_51020[(1)] = (4));
} else
{var statearr_51002_51021 = state_50992__$1;(statearr_51002_51021[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50993 === (11)))
{var inst_50969 = (state_50992[(8)]);var inst_50979 = (state_50992[(2)]);var inst_50980 = (inst_50969 + (1));var inst_50969__$1 = inst_50980;var state_50992__$1 = (function (){var statearr_51003 = state_50992;(statearr_51003[(10)] = inst_50979);
(statearr_51003[(8)] = inst_50969__$1);
return statearr_51003;
})();var statearr_51004_51022 = state_50992__$1;(statearr_51004_51022[(2)] = null);
(statearr_51004_51022[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50993 === (9)))
{var state_50992__$1 = state_50992;var statearr_51005_51023 = state_50992__$1;(statearr_51005_51023[(2)] = null);
(statearr_51005_51023[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50993 === (5)))
{var state_50992__$1 = state_50992;var statearr_51006_51024 = state_50992__$1;(statearr_51006_51024[(2)] = null);
(statearr_51006_51024[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50993 === (10)))
{var inst_50984 = (state_50992[(2)]);var state_50992__$1 = state_50992;var statearr_51007_51025 = state_50992__$1;(statearr_51007_51025[(2)] = inst_50984);
(statearr_51007_51025[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50993 === (8)))
{var inst_50974 = (state_50992[(7)]);var state_50992__$1 = state_50992;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50992__$1,(11),out,inst_50974);
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
});})(c__22689__auto___51015,out))
;return ((function (switch__22674__auto__,c__22689__auto___51015,out){
return (function() {
var state_machine__22675__auto__ = null;
var state_machine__22675__auto____0 = (function (){var statearr_51011 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_51011[(0)] = state_machine__22675__auto__);
(statearr_51011[(1)] = (1));
return statearr_51011;
});
var state_machine__22675__auto____1 = (function (state_50992){while(true){
var ret_value__22676__auto__ = (function (){try{while(true){
var result__22677__auto__ = switch__22674__auto__(state_50992);if(cljs.core.keyword_identical_QMARK_(result__22677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22677__auto__;
}
break;
}
}catch (e51012){if((e51012 instanceof Object))
{var ex__22678__auto__ = e51012;var statearr_51013_51026 = state_50992;(statearr_51013_51026[(5)] = ex__22678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_50992);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e51012;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51027 = state_50992;
state_50992 = G__51027;
continue;
}
} else
{return ret_value__22676__auto__;
}
break;
}
});
state_machine__22675__auto__ = function(state_50992){
switch(arguments.length){
case 0:
return state_machine__22675__auto____0.call(this);
case 1:
return state_machine__22675__auto____1.call(this,state_50992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22675__auto____0;
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22675__auto____1;
return state_machine__22675__auto__;
})()
;})(switch__22674__auto__,c__22689__auto___51015,out))
})();var state__22691__auto__ = (function (){var statearr_51014 = (function (){return (f__22690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22690__auto__.cljs$core$IFn$_invoke$arity$0() : f__22690__auto__.call(null));
})();(statearr_51014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22689__auto___51015);
return statearr_51014;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22691__auto__);
});})(c__22689__auto___51015,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22689__auto___51126 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22689__auto___51126,out){
return (function (){var f__22690__auto__ = (function (){var switch__22674__auto__ = ((function (c__22689__auto___51126,out){
return (function (state_51101){var state_val_51102 = (state_51101[(1)]);if((state_val_51102 === (7)))
{var inst_51096 = (state_51101[(2)]);var state_51101__$1 = state_51101;var statearr_51103_51127 = state_51101__$1;(statearr_51103_51127[(2)] = inst_51096);
(statearr_51103_51127[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51102 === (1)))
{var inst_51078 = null;var state_51101__$1 = (function (){var statearr_51104 = state_51101;(statearr_51104[(7)] = inst_51078);
return statearr_51104;
})();var statearr_51105_51128 = state_51101__$1;(statearr_51105_51128[(2)] = null);
(statearr_51105_51128[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51102 === (4)))
{var inst_51081 = (state_51101[(8)]);var inst_51081__$1 = (state_51101[(2)]);var inst_51082 = (inst_51081__$1 == null);var inst_51083 = cljs.core.not(inst_51082);var state_51101__$1 = (function (){var statearr_51106 = state_51101;(statearr_51106[(8)] = inst_51081__$1);
return statearr_51106;
})();if(inst_51083)
{var statearr_51107_51129 = state_51101__$1;(statearr_51107_51129[(1)] = (5));
} else
{var statearr_51108_51130 = state_51101__$1;(statearr_51108_51130[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51102 === (6)))
{var state_51101__$1 = state_51101;var statearr_51109_51131 = state_51101__$1;(statearr_51109_51131[(2)] = null);
(statearr_51109_51131[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51102 === (3)))
{var inst_51098 = (state_51101[(2)]);var inst_51099 = cljs.core.async.close_BANG_(out);var state_51101__$1 = (function (){var statearr_51110 = state_51101;(statearr_51110[(9)] = inst_51098);
return statearr_51110;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_51101__$1,inst_51099);
} else
{if((state_val_51102 === (2)))
{var state_51101__$1 = state_51101;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51101__$1,(4),ch);
} else
{if((state_val_51102 === (11)))
{var inst_51081 = (state_51101[(8)]);var inst_51090 = (state_51101[(2)]);var inst_51078 = inst_51081;var state_51101__$1 = (function (){var statearr_51111 = state_51101;(statearr_51111[(7)] = inst_51078);
(statearr_51111[(10)] = inst_51090);
return statearr_51111;
})();var statearr_51112_51132 = state_51101__$1;(statearr_51112_51132[(2)] = null);
(statearr_51112_51132[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51102 === (9)))
{var inst_51081 = (state_51101[(8)]);var state_51101__$1 = state_51101;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51101__$1,(11),out,inst_51081);
} else
{if((state_val_51102 === (5)))
{var inst_51081 = (state_51101[(8)]);var inst_51078 = (state_51101[(7)]);var inst_51085 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51081,inst_51078);var state_51101__$1 = state_51101;if(inst_51085)
{var statearr_51114_51133 = state_51101__$1;(statearr_51114_51133[(1)] = (8));
} else
{var statearr_51115_51134 = state_51101__$1;(statearr_51115_51134[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51102 === (10)))
{var inst_51093 = (state_51101[(2)]);var state_51101__$1 = state_51101;var statearr_51116_51135 = state_51101__$1;(statearr_51116_51135[(2)] = inst_51093);
(statearr_51116_51135[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51102 === (8)))
{var inst_51078 = (state_51101[(7)]);var tmp51113 = inst_51078;var inst_51078__$1 = tmp51113;var state_51101__$1 = (function (){var statearr_51117 = state_51101;(statearr_51117[(7)] = inst_51078__$1);
return statearr_51117;
})();var statearr_51118_51136 = state_51101__$1;(statearr_51118_51136[(2)] = null);
(statearr_51118_51136[(1)] = (2));
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
});})(c__22689__auto___51126,out))
;return ((function (switch__22674__auto__,c__22689__auto___51126,out){
return (function() {
var state_machine__22675__auto__ = null;
var state_machine__22675__auto____0 = (function (){var statearr_51122 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_51122[(0)] = state_machine__22675__auto__);
(statearr_51122[(1)] = (1));
return statearr_51122;
});
var state_machine__22675__auto____1 = (function (state_51101){while(true){
var ret_value__22676__auto__ = (function (){try{while(true){
var result__22677__auto__ = switch__22674__auto__(state_51101);if(cljs.core.keyword_identical_QMARK_(result__22677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22677__auto__;
}
break;
}
}catch (e51123){if((e51123 instanceof Object))
{var ex__22678__auto__ = e51123;var statearr_51124_51137 = state_51101;(statearr_51124_51137[(5)] = ex__22678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51101);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e51123;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51138 = state_51101;
state_51101 = G__51138;
continue;
}
} else
{return ret_value__22676__auto__;
}
break;
}
});
state_machine__22675__auto__ = function(state_51101){
switch(arguments.length){
case 0:
return state_machine__22675__auto____0.call(this);
case 1:
return state_machine__22675__auto____1.call(this,state_51101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22675__auto____0;
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22675__auto____1;
return state_machine__22675__auto__;
})()
;})(switch__22674__auto__,c__22689__auto___51126,out))
})();var state__22691__auto__ = (function (){var statearr_51125 = (function (){return (f__22690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22690__auto__.cljs$core$IFn$_invoke$arity$0() : f__22690__auto__.call(null));
})();(statearr_51125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22689__auto___51126);
return statearr_51125;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22691__auto__);
});})(c__22689__auto___51126,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22689__auto___51276 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22689__auto___51276,out){
return (function (){var f__22690__auto__ = (function (){var switch__22674__auto__ = ((function (c__22689__auto___51276,out){
return (function (state_51246){var state_val_51247 = (state_51246[(1)]);if((state_val_51247 === (7)))
{var inst_51242 = (state_51246[(2)]);var state_51246__$1 = state_51246;var statearr_51248_51277 = state_51246__$1;(statearr_51248_51277[(2)] = inst_51242);
(statearr_51248_51277[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51247 === (1)))
{var inst_51209 = (new Array(n));var inst_51210 = inst_51209;var inst_51211 = (0);var state_51246__$1 = (function (){var statearr_51249 = state_51246;(statearr_51249[(7)] = inst_51210);
(statearr_51249[(8)] = inst_51211);
return statearr_51249;
})();var statearr_51250_51278 = state_51246__$1;(statearr_51250_51278[(2)] = null);
(statearr_51250_51278[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51247 === (4)))
{var inst_51214 = (state_51246[(9)]);var inst_51214__$1 = (state_51246[(2)]);var inst_51215 = (inst_51214__$1 == null);var inst_51216 = cljs.core.not(inst_51215);var state_51246__$1 = (function (){var statearr_51251 = state_51246;(statearr_51251[(9)] = inst_51214__$1);
return statearr_51251;
})();if(inst_51216)
{var statearr_51252_51279 = state_51246__$1;(statearr_51252_51279[(1)] = (5));
} else
{var statearr_51253_51280 = state_51246__$1;(statearr_51253_51280[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51247 === (15)))
{var inst_51236 = (state_51246[(2)]);var state_51246__$1 = state_51246;var statearr_51254_51281 = state_51246__$1;(statearr_51254_51281[(2)] = inst_51236);
(statearr_51254_51281[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51247 === (13)))
{var state_51246__$1 = state_51246;var statearr_51255_51282 = state_51246__$1;(statearr_51255_51282[(2)] = null);
(statearr_51255_51282[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51247 === (6)))
{var inst_51211 = (state_51246[(8)]);var inst_51232 = (inst_51211 > (0));var state_51246__$1 = state_51246;if(cljs.core.truth_(inst_51232))
{var statearr_51256_51283 = state_51246__$1;(statearr_51256_51283[(1)] = (12));
} else
{var statearr_51257_51284 = state_51246__$1;(statearr_51257_51284[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51247 === (3)))
{var inst_51244 = (state_51246[(2)]);var state_51246__$1 = state_51246;return cljs.core.async.impl.ioc_helpers.return_chan(state_51246__$1,inst_51244);
} else
{if((state_val_51247 === (12)))
{var inst_51210 = (state_51246[(7)]);var inst_51234 = cljs.core.vec(inst_51210);var state_51246__$1 = state_51246;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51246__$1,(15),out,inst_51234);
} else
{if((state_val_51247 === (2)))
{var state_51246__$1 = state_51246;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51246__$1,(4),ch);
} else
{if((state_val_51247 === (11)))
{var inst_51226 = (state_51246[(2)]);var inst_51227 = (new Array(n));var inst_51210 = inst_51227;var inst_51211 = (0);var state_51246__$1 = (function (){var statearr_51258 = state_51246;(statearr_51258[(7)] = inst_51210);
(statearr_51258[(10)] = inst_51226);
(statearr_51258[(8)] = inst_51211);
return statearr_51258;
})();var statearr_51259_51285 = state_51246__$1;(statearr_51259_51285[(2)] = null);
(statearr_51259_51285[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51247 === (9)))
{var inst_51210 = (state_51246[(7)]);var inst_51224 = cljs.core.vec(inst_51210);var state_51246__$1 = state_51246;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51246__$1,(11),out,inst_51224);
} else
{if((state_val_51247 === (5)))
{var inst_51214 = (state_51246[(9)]);var inst_51219 = (state_51246[(11)]);var inst_51210 = (state_51246[(7)]);var inst_51211 = (state_51246[(8)]);var inst_51218 = (inst_51210[inst_51211] = inst_51214);var inst_51219__$1 = (inst_51211 + (1));var inst_51220 = (inst_51219__$1 < n);var state_51246__$1 = (function (){var statearr_51260 = state_51246;(statearr_51260[(11)] = inst_51219__$1);
(statearr_51260[(12)] = inst_51218);
return statearr_51260;
})();if(cljs.core.truth_(inst_51220))
{var statearr_51261_51286 = state_51246__$1;(statearr_51261_51286[(1)] = (8));
} else
{var statearr_51262_51287 = state_51246__$1;(statearr_51262_51287[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51247 === (14)))
{var inst_51239 = (state_51246[(2)]);var inst_51240 = cljs.core.async.close_BANG_(out);var state_51246__$1 = (function (){var statearr_51264 = state_51246;(statearr_51264[(13)] = inst_51239);
return statearr_51264;
})();var statearr_51265_51288 = state_51246__$1;(statearr_51265_51288[(2)] = inst_51240);
(statearr_51265_51288[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51247 === (10)))
{var inst_51230 = (state_51246[(2)]);var state_51246__$1 = state_51246;var statearr_51266_51289 = state_51246__$1;(statearr_51266_51289[(2)] = inst_51230);
(statearr_51266_51289[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51247 === (8)))
{var inst_51219 = (state_51246[(11)]);var inst_51210 = (state_51246[(7)]);var tmp51263 = inst_51210;var inst_51210__$1 = tmp51263;var inst_51211 = inst_51219;var state_51246__$1 = (function (){var statearr_51267 = state_51246;(statearr_51267[(7)] = inst_51210__$1);
(statearr_51267[(8)] = inst_51211);
return statearr_51267;
})();var statearr_51268_51290 = state_51246__$1;(statearr_51268_51290[(2)] = null);
(statearr_51268_51290[(1)] = (2));
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
});})(c__22689__auto___51276,out))
;return ((function (switch__22674__auto__,c__22689__auto___51276,out){
return (function() {
var state_machine__22675__auto__ = null;
var state_machine__22675__auto____0 = (function (){var statearr_51272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51272[(0)] = state_machine__22675__auto__);
(statearr_51272[(1)] = (1));
return statearr_51272;
});
var state_machine__22675__auto____1 = (function (state_51246){while(true){
var ret_value__22676__auto__ = (function (){try{while(true){
var result__22677__auto__ = switch__22674__auto__(state_51246);if(cljs.core.keyword_identical_QMARK_(result__22677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22677__auto__;
}
break;
}
}catch (e51273){if((e51273 instanceof Object))
{var ex__22678__auto__ = e51273;var statearr_51274_51291 = state_51246;(statearr_51274_51291[(5)] = ex__22678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51246);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e51273;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51292 = state_51246;
state_51246 = G__51292;
continue;
}
} else
{return ret_value__22676__auto__;
}
break;
}
});
state_machine__22675__auto__ = function(state_51246){
switch(arguments.length){
case 0:
return state_machine__22675__auto____0.call(this);
case 1:
return state_machine__22675__auto____1.call(this,state_51246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22675__auto____0;
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22675__auto____1;
return state_machine__22675__auto__;
})()
;})(switch__22674__auto__,c__22689__auto___51276,out))
})();var state__22691__auto__ = (function (){var statearr_51275 = (function (){return (f__22690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22690__auto__.cljs$core$IFn$_invoke$arity$0() : f__22690__auto__.call(null));
})();(statearr_51275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22689__auto___51276);
return statearr_51275;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22691__auto__);
});})(c__22689__auto___51276,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__22689__auto___51440 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22689__auto___51440,out){
return (function (){var f__22690__auto__ = (function (){var switch__22674__auto__ = ((function (c__22689__auto___51440,out){
return (function (state_51409){var state_val_51410 = (state_51409[(1)]);if((state_val_51410 === (7)))
{var inst_51405 = (state_51409[(2)]);var state_51409__$1 = state_51409;var statearr_51411_51441 = state_51409__$1;(statearr_51411_51441[(2)] = inst_51405);
(statearr_51411_51441[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51410 === (1)))
{var inst_51368 = [];var inst_51369 = inst_51368;var inst_51370 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_51409__$1 = (function (){var statearr_51412 = state_51409;(statearr_51412[(7)] = inst_51369);
(statearr_51412[(8)] = inst_51370);
return statearr_51412;
})();var statearr_51413_51442 = state_51409__$1;(statearr_51413_51442[(2)] = null);
(statearr_51413_51442[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51410 === (4)))
{var inst_51373 = (state_51409[(9)]);var inst_51373__$1 = (state_51409[(2)]);var inst_51374 = (inst_51373__$1 == null);var inst_51375 = cljs.core.not(inst_51374);var state_51409__$1 = (function (){var statearr_51414 = state_51409;(statearr_51414[(9)] = inst_51373__$1);
return statearr_51414;
})();if(inst_51375)
{var statearr_51415_51443 = state_51409__$1;(statearr_51415_51443[(1)] = (5));
} else
{var statearr_51416_51444 = state_51409__$1;(statearr_51416_51444[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51410 === (15)))
{var inst_51399 = (state_51409[(2)]);var state_51409__$1 = state_51409;var statearr_51417_51445 = state_51409__$1;(statearr_51417_51445[(2)] = inst_51399);
(statearr_51417_51445[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51410 === (13)))
{var state_51409__$1 = state_51409;var statearr_51418_51446 = state_51409__$1;(statearr_51418_51446[(2)] = null);
(statearr_51418_51446[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51410 === (6)))
{var inst_51369 = (state_51409[(7)]);var inst_51394 = inst_51369.length;var inst_51395 = (inst_51394 > (0));var state_51409__$1 = state_51409;if(cljs.core.truth_(inst_51395))
{var statearr_51419_51447 = state_51409__$1;(statearr_51419_51447[(1)] = (12));
} else
{var statearr_51420_51448 = state_51409__$1;(statearr_51420_51448[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51410 === (3)))
{var inst_51407 = (state_51409[(2)]);var state_51409__$1 = state_51409;return cljs.core.async.impl.ioc_helpers.return_chan(state_51409__$1,inst_51407);
} else
{if((state_val_51410 === (12)))
{var inst_51369 = (state_51409[(7)]);var inst_51397 = cljs.core.vec(inst_51369);var state_51409__$1 = state_51409;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51409__$1,(15),out,inst_51397);
} else
{if((state_val_51410 === (2)))
{var state_51409__$1 = state_51409;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51409__$1,(4),ch);
} else
{if((state_val_51410 === (11)))
{var inst_51373 = (state_51409[(9)]);var inst_51377 = (state_51409[(10)]);var inst_51387 = (state_51409[(2)]);var inst_51388 = [];var inst_51389 = inst_51388.push(inst_51373);var inst_51369 = inst_51388;var inst_51370 = inst_51377;var state_51409__$1 = (function (){var statearr_51421 = state_51409;(statearr_51421[(11)] = inst_51387);
(statearr_51421[(12)] = inst_51389);
(statearr_51421[(7)] = inst_51369);
(statearr_51421[(8)] = inst_51370);
return statearr_51421;
})();var statearr_51422_51449 = state_51409__$1;(statearr_51422_51449[(2)] = null);
(statearr_51422_51449[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51410 === (9)))
{var inst_51369 = (state_51409[(7)]);var inst_51385 = cljs.core.vec(inst_51369);var state_51409__$1 = state_51409;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51409__$1,(11),out,inst_51385);
} else
{if((state_val_51410 === (5)))
{var inst_51373 = (state_51409[(9)]);var inst_51377 = (state_51409[(10)]);var inst_51370 = (state_51409[(8)]);var inst_51377__$1 = (function (){var G__51423 = inst_51373;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__51423) : f.call(null,G__51423));
})();var inst_51378 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51377__$1,inst_51370);var inst_51379 = cljs.core.keyword_identical_QMARK_(inst_51370,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_51380 = (inst_51378) || (inst_51379);var state_51409__$1 = (function (){var statearr_51424 = state_51409;(statearr_51424[(10)] = inst_51377__$1);
return statearr_51424;
})();if(cljs.core.truth_(inst_51380))
{var statearr_51425_51450 = state_51409__$1;(statearr_51425_51450[(1)] = (8));
} else
{var statearr_51426_51451 = state_51409__$1;(statearr_51426_51451[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51410 === (14)))
{var inst_51402 = (state_51409[(2)]);var inst_51403 = cljs.core.async.close_BANG_(out);var state_51409__$1 = (function (){var statearr_51428 = state_51409;(statearr_51428[(13)] = inst_51402);
return statearr_51428;
})();var statearr_51429_51452 = state_51409__$1;(statearr_51429_51452[(2)] = inst_51403);
(statearr_51429_51452[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51410 === (10)))
{var inst_51392 = (state_51409[(2)]);var state_51409__$1 = state_51409;var statearr_51430_51453 = state_51409__$1;(statearr_51430_51453[(2)] = inst_51392);
(statearr_51430_51453[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51410 === (8)))
{var inst_51373 = (state_51409[(9)]);var inst_51377 = (state_51409[(10)]);var inst_51369 = (state_51409[(7)]);var inst_51382 = inst_51369.push(inst_51373);var tmp51427 = inst_51369;var inst_51369__$1 = tmp51427;var inst_51370 = inst_51377;var state_51409__$1 = (function (){var statearr_51431 = state_51409;(statearr_51431[(7)] = inst_51369__$1);
(statearr_51431[(14)] = inst_51382);
(statearr_51431[(8)] = inst_51370);
return statearr_51431;
})();var statearr_51432_51454 = state_51409__$1;(statearr_51432_51454[(2)] = null);
(statearr_51432_51454[(1)] = (2));
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
});})(c__22689__auto___51440,out))
;return ((function (switch__22674__auto__,c__22689__auto___51440,out){
return (function() {
var state_machine__22675__auto__ = null;
var state_machine__22675__auto____0 = (function (){var statearr_51436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51436[(0)] = state_machine__22675__auto__);
(statearr_51436[(1)] = (1));
return statearr_51436;
});
var state_machine__22675__auto____1 = (function (state_51409){while(true){
var ret_value__22676__auto__ = (function (){try{while(true){
var result__22677__auto__ = switch__22674__auto__(state_51409);if(cljs.core.keyword_identical_QMARK_(result__22677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22677__auto__;
}
break;
}
}catch (e51437){if((e51437 instanceof Object))
{var ex__22678__auto__ = e51437;var statearr_51438_51455 = state_51409;(statearr_51438_51455[(5)] = ex__22678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51409);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e51437;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51456 = state_51409;
state_51409 = G__51456;
continue;
}
} else
{return ret_value__22676__auto__;
}
break;
}
});
state_machine__22675__auto__ = function(state_51409){
switch(arguments.length){
case 0:
return state_machine__22675__auto____0.call(this);
case 1:
return state_machine__22675__auto____1.call(this,state_51409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22675__auto____0;
state_machine__22675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22675__auto____1;
return state_machine__22675__auto__;
})()
;})(switch__22674__auto__,c__22689__auto___51440,out))
})();var state__22691__auto__ = (function (){var statearr_51439 = (function (){return (f__22690__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22690__auto__.cljs$core$IFn$_invoke$arity$0() : f__22690__auto__.call(null));
})();(statearr_51439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22689__auto___51440);
return statearr_51439;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22691__auto__);
});})(c__22689__auto___51440,out))
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