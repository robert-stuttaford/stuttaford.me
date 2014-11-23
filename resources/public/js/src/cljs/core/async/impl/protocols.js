goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = (1024);
cljs.core.async.impl.protocols.ReadPort = (function (){var obj31518 = {};return obj31518;
})();
cljs.core.async.impl.protocols.take_BANG_ = (function take_BANG_(port,fn1_handler){if((function (){var and__19621__auto__ = port;if(and__19621__auto__)
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2;
} else
{return and__19621__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else
{var x__20845__auto__ = (((port == null))?null:port);return (function (){var or__19663__auto__ = (cljs.core.async.impl.protocols.take_BANG_[(function (){var G__31522 = x__20845__auto__;return goog.typeOf(G__31522);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("ReadPort.take!",port);
}
}
})().call(null,port,fn1_handler);
}
});
cljs.core.async.impl.protocols.WritePort = (function (){var obj31524 = {};return obj31524;
})();
cljs.core.async.impl.protocols.put_BANG_ = (function put_BANG_(port,val,fn0_handler){if((function (){var and__19621__auto__ = port;if(and__19621__auto__)
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3;
} else
{return and__19621__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn0_handler);
} else
{var x__20845__auto__ = (((port == null))?null:port);return (function (){var or__19663__auto__ = (cljs.core.async.impl.protocols.put_BANG_[(function (){var G__31528 = x__20845__auto__;return goog.typeOf(G__31528);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("WritePort.put!",port);
}
}
})().call(null,port,val,fn0_handler);
}
});
cljs.core.async.impl.protocols.Channel = (function (){var obj31530 = {};return obj31530;
})();
cljs.core.async.impl.protocols.close_BANG_ = (function close_BANG_(chan){if((function (){var and__19621__auto__ = chan;if(and__19621__auto__)
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1;
} else
{return and__19621__auto__;
}
})())
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else
{var x__20845__auto__ = (((chan == null))?null:chan);return (function (){var or__19663__auto__ = (cljs.core.async.impl.protocols.close_BANG_[(function (){var G__31534 = x__20845__auto__;return goog.typeOf(G__31534);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("Channel.close!",chan);
}
}
})().call(null,chan);
}
});
cljs.core.async.impl.protocols.Handler = (function (){var obj31536 = {};return obj31536;
})();
cljs.core.async.impl.protocols.active_QMARK_ = (function active_QMARK_(h){if((function (){var and__19621__auto__ = h;if(and__19621__auto__)
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1;
} else
{return and__19621__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else
{var x__20845__auto__ = (((h == null))?null:h);return (function (){var or__19663__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[(function (){var G__31540 = x__20845__auto__;return goog.typeOf(G__31540);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("Handler.active?",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.commit = (function commit(h){if((function (){var and__19621__auto__ = h;if(and__19621__auto__)
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1;
} else
{return and__19621__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else
{var x__20845__auto__ = (((h == null))?null:h);return (function (){var or__19663__auto__ = (cljs.core.async.impl.protocols.commit[(function (){var G__31544 = x__20845__auto__;return goog.typeOf(G__31544);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("Handler.commit",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.Buffer = (function (){var obj31546 = {};return obj31546;
})();
cljs.core.async.impl.protocols.full_QMARK_ = (function full_QMARK_(b){if((function (){var and__19621__auto__ = b;if(and__19621__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1;
} else
{return and__19621__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else
{var x__20845__auto__ = (((b == null))?null:b);return (function (){var or__19663__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[(function (){var G__31550 = x__20845__auto__;return goog.typeOf(G__31550);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("Buffer.full?",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.remove_BANG_ = (function remove_BANG_(b){if((function (){var and__19621__auto__ = b;if(and__19621__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1;
} else
{return and__19621__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else
{var x__20845__auto__ = (((b == null))?null:b);return (function (){var or__19663__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[(function (){var G__31554 = x__20845__auto__;return goog.typeOf(G__31554);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("Buffer.remove!",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.add_BANG_ = (function add_BANG_(b,itm){if((function (){var and__19621__auto__ = b;if(and__19621__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2;
} else
{return and__19621__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2(b,itm);
} else
{var x__20845__auto__ = (((b == null))?null:b);return (function (){var or__19663__auto__ = (cljs.core.async.impl.protocols.add_BANG_[(function (){var G__31558 = x__20845__auto__;return goog.typeOf(G__31558);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core.async.impl.protocols.add_BANG_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("Buffer.add!",b);
}
}
})().call(null,b,itm);
}
});
cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj31560 = {};return obj31560;
})();
//# sourceMappingURL=protocols.js.map