goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = (1024);
cljs.core.async.impl.protocols.ReadPort = (function (){var obj41900 = {};return obj41900;
})();
cljs.core.async.impl.protocols.take_BANG_ = (function take_BANG_(port,fn1_handler){if((function (){var and__19277__auto__ = port;if(and__19277__auto__)
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2;
} else
{return and__19277__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else
{var x__20556__auto__ = (((port == null))?null:port);return (function (){var or__19289__auto__ = (cljs.core.async.impl.protocols.take_BANG_[(function (){var G__41904 = x__20556__auto__;return goog.typeOf(G__41904);
})()]);if(or__19289__auto__)
{return or__19289__auto__;
} else
{var or__19289__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);if(or__19289__auto____$1)
{return or__19289__auto____$1;
} else
{throw cljs.core.missing_protocol("ReadPort.take!",port);
}
}
})().call(null,port,fn1_handler);
}
});
cljs.core.async.impl.protocols.WritePort = (function (){var obj41906 = {};return obj41906;
})();
cljs.core.async.impl.protocols.put_BANG_ = (function put_BANG_(port,val,fn0_handler){if((function (){var and__19277__auto__ = port;if(and__19277__auto__)
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3;
} else
{return and__19277__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn0_handler);
} else
{var x__20556__auto__ = (((port == null))?null:port);return (function (){var or__19289__auto__ = (cljs.core.async.impl.protocols.put_BANG_[(function (){var G__41910 = x__20556__auto__;return goog.typeOf(G__41910);
})()]);if(or__19289__auto__)
{return or__19289__auto__;
} else
{var or__19289__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);if(or__19289__auto____$1)
{return or__19289__auto____$1;
} else
{throw cljs.core.missing_protocol("WritePort.put!",port);
}
}
})().call(null,port,val,fn0_handler);
}
});
cljs.core.async.impl.protocols.Channel = (function (){var obj41912 = {};return obj41912;
})();
cljs.core.async.impl.protocols.close_BANG_ = (function close_BANG_(chan){if((function (){var and__19277__auto__ = chan;if(and__19277__auto__)
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1;
} else
{return and__19277__auto__;
}
})())
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else
{var x__20556__auto__ = (((chan == null))?null:chan);return (function (){var or__19289__auto__ = (cljs.core.async.impl.protocols.close_BANG_[(function (){var G__41916 = x__20556__auto__;return goog.typeOf(G__41916);
})()]);if(or__19289__auto__)
{return or__19289__auto__;
} else
{var or__19289__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);if(or__19289__auto____$1)
{return or__19289__auto____$1;
} else
{throw cljs.core.missing_protocol("Channel.close!",chan);
}
}
})().call(null,chan);
}
});
cljs.core.async.impl.protocols.Handler = (function (){var obj41918 = {};return obj41918;
})();
cljs.core.async.impl.protocols.active_QMARK_ = (function active_QMARK_(h){if((function (){var and__19277__auto__ = h;if(and__19277__auto__)
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1;
} else
{return and__19277__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else
{var x__20556__auto__ = (((h == null))?null:h);return (function (){var or__19289__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[(function (){var G__41922 = x__20556__auto__;return goog.typeOf(G__41922);
})()]);if(or__19289__auto__)
{return or__19289__auto__;
} else
{var or__19289__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);if(or__19289__auto____$1)
{return or__19289__auto____$1;
} else
{throw cljs.core.missing_protocol("Handler.active?",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.commit = (function commit(h){if((function (){var and__19277__auto__ = h;if(and__19277__auto__)
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1;
} else
{return and__19277__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else
{var x__20556__auto__ = (((h == null))?null:h);return (function (){var or__19289__auto__ = (cljs.core.async.impl.protocols.commit[(function (){var G__41926 = x__20556__auto__;return goog.typeOf(G__41926);
})()]);if(or__19289__auto__)
{return or__19289__auto__;
} else
{var or__19289__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);if(or__19289__auto____$1)
{return or__19289__auto____$1;
} else
{throw cljs.core.missing_protocol("Handler.commit",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.Buffer = (function (){var obj41928 = {};return obj41928;
})();
cljs.core.async.impl.protocols.full_QMARK_ = (function full_QMARK_(b){if((function (){var and__19277__auto__ = b;if(and__19277__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1;
} else
{return and__19277__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else
{var x__20556__auto__ = (((b == null))?null:b);return (function (){var or__19289__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[(function (){var G__41932 = x__20556__auto__;return goog.typeOf(G__41932);
})()]);if(or__19289__auto__)
{return or__19289__auto__;
} else
{var or__19289__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);if(or__19289__auto____$1)
{return or__19289__auto____$1;
} else
{throw cljs.core.missing_protocol("Buffer.full?",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.remove_BANG_ = (function remove_BANG_(b){if((function (){var and__19277__auto__ = b;if(and__19277__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1;
} else
{return and__19277__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else
{var x__20556__auto__ = (((b == null))?null:b);return (function (){var or__19289__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[(function (){var G__41936 = x__20556__auto__;return goog.typeOf(G__41936);
})()]);if(or__19289__auto__)
{return or__19289__auto__;
} else
{var or__19289__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);if(or__19289__auto____$1)
{return or__19289__auto____$1;
} else
{throw cljs.core.missing_protocol("Buffer.remove!",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.add_BANG_ = (function add_BANG_(b,itm){if((function (){var and__19277__auto__ = b;if(and__19277__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2;
} else
{return and__19277__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2(b,itm);
} else
{var x__20556__auto__ = (((b == null))?null:b);return (function (){var or__19289__auto__ = (cljs.core.async.impl.protocols.add_BANG_[(function (){var G__41940 = x__20556__auto__;return goog.typeOf(G__41940);
})()]);if(or__19289__auto__)
{return or__19289__auto__;
} else
{var or__19289__auto____$1 = (cljs.core.async.impl.protocols.add_BANG_["_"]);if(or__19289__auto____$1)
{return or__19289__auto____$1;
} else
{throw cljs.core.missing_protocol("Buffer.add!",b);
}
}
})().call(null,b,itm);
}
});
cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj41942 = {};return obj41942;
})();
//# sourceMappingURL=protocols.js.map