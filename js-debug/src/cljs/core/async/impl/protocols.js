goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = (1024);
cljs.core.async.impl.protocols.ReadPort = (function (){var obj40037 = {};return obj40037;
})();
cljs.core.async.impl.protocols.take_BANG_ = (function take_BANG_(port,fn1_handler){if((function (){var and__19670__auto__ = port;if(and__19670__auto__)
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2;
} else
{return and__19670__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else
{var x__20728__auto__ = (((port == null))?null:port);return (function (){var or__19687__auto__ = (cljs.core.async.impl.protocols.take_BANG_[(function (){var G__40041 = x__20728__auto__;return goog.typeOf(G__40041);
})()]);if(or__19687__auto__)
{return or__19687__auto__;
} else
{var or__19687__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);if(or__19687__auto____$1)
{return or__19687__auto____$1;
} else
{throw cljs.core.missing_protocol("ReadPort.take!",port);
}
}
})().call(null,port,fn1_handler);
}
});
cljs.core.async.impl.protocols.WritePort = (function (){var obj40043 = {};return obj40043;
})();
cljs.core.async.impl.protocols.put_BANG_ = (function put_BANG_(port,val,fn0_handler){if((function (){var and__19670__auto__ = port;if(and__19670__auto__)
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3;
} else
{return and__19670__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn0_handler);
} else
{var x__20728__auto__ = (((port == null))?null:port);return (function (){var or__19687__auto__ = (cljs.core.async.impl.protocols.put_BANG_[(function (){var G__40047 = x__20728__auto__;return goog.typeOf(G__40047);
})()]);if(or__19687__auto__)
{return or__19687__auto__;
} else
{var or__19687__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);if(or__19687__auto____$1)
{return or__19687__auto____$1;
} else
{throw cljs.core.missing_protocol("WritePort.put!",port);
}
}
})().call(null,port,val,fn0_handler);
}
});
cljs.core.async.impl.protocols.Channel = (function (){var obj40049 = {};return obj40049;
})();
cljs.core.async.impl.protocols.close_BANG_ = (function close_BANG_(chan){if((function (){var and__19670__auto__ = chan;if(and__19670__auto__)
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1;
} else
{return and__19670__auto__;
}
})())
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else
{var x__20728__auto__ = (((chan == null))?null:chan);return (function (){var or__19687__auto__ = (cljs.core.async.impl.protocols.close_BANG_[(function (){var G__40053 = x__20728__auto__;return goog.typeOf(G__40053);
})()]);if(or__19687__auto__)
{return or__19687__auto__;
} else
{var or__19687__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);if(or__19687__auto____$1)
{return or__19687__auto____$1;
} else
{throw cljs.core.missing_protocol("Channel.close!",chan);
}
}
})().call(null,chan);
}
});
cljs.core.async.impl.protocols.Handler = (function (){var obj40055 = {};return obj40055;
})();
cljs.core.async.impl.protocols.active_QMARK_ = (function active_QMARK_(h){if((function (){var and__19670__auto__ = h;if(and__19670__auto__)
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1;
} else
{return and__19670__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else
{var x__20728__auto__ = (((h == null))?null:h);return (function (){var or__19687__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[(function (){var G__40059 = x__20728__auto__;return goog.typeOf(G__40059);
})()]);if(or__19687__auto__)
{return or__19687__auto__;
} else
{var or__19687__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);if(or__19687__auto____$1)
{return or__19687__auto____$1;
} else
{throw cljs.core.missing_protocol("Handler.active?",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.commit = (function commit(h){if((function (){var and__19670__auto__ = h;if(and__19670__auto__)
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1;
} else
{return and__19670__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else
{var x__20728__auto__ = (((h == null))?null:h);return (function (){var or__19687__auto__ = (cljs.core.async.impl.protocols.commit[(function (){var G__40063 = x__20728__auto__;return goog.typeOf(G__40063);
})()]);if(or__19687__auto__)
{return or__19687__auto__;
} else
{var or__19687__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);if(or__19687__auto____$1)
{return or__19687__auto____$1;
} else
{throw cljs.core.missing_protocol("Handler.commit",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.Buffer = (function (){var obj40065 = {};return obj40065;
})();
cljs.core.async.impl.protocols.full_QMARK_ = (function full_QMARK_(b){if((function (){var and__19670__auto__ = b;if(and__19670__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1;
} else
{return and__19670__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else
{var x__20728__auto__ = (((b == null))?null:b);return (function (){var or__19687__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[(function (){var G__40069 = x__20728__auto__;return goog.typeOf(G__40069);
})()]);if(or__19687__auto__)
{return or__19687__auto__;
} else
{var or__19687__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);if(or__19687__auto____$1)
{return or__19687__auto____$1;
} else
{throw cljs.core.missing_protocol("Buffer.full?",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.remove_BANG_ = (function remove_BANG_(b){if((function (){var and__19670__auto__ = b;if(and__19670__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1;
} else
{return and__19670__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else
{var x__20728__auto__ = (((b == null))?null:b);return (function (){var or__19687__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[(function (){var G__40073 = x__20728__auto__;return goog.typeOf(G__40073);
})()]);if(or__19687__auto__)
{return or__19687__auto__;
} else
{var or__19687__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);if(or__19687__auto____$1)
{return or__19687__auto____$1;
} else
{throw cljs.core.missing_protocol("Buffer.remove!",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.add_BANG_ = (function add_BANG_(b,itm){if((function (){var and__19670__auto__ = b;if(and__19670__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2;
} else
{return and__19670__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2(b,itm);
} else
{var x__20728__auto__ = (((b == null))?null:b);return (function (){var or__19687__auto__ = (cljs.core.async.impl.protocols.add_BANG_[(function (){var G__40077 = x__20728__auto__;return goog.typeOf(G__40077);
})()]);if(or__19687__auto__)
{return or__19687__auto__;
} else
{var or__19687__auto____$1 = (cljs.core.async.impl.protocols.add_BANG_["_"]);if(or__19687__auto____$1)
{return or__19687__auto____$1;
} else
{throw cljs.core.missing_protocol("Buffer.add!",b);
}
}
})().call(null,b,itm);
}
});
cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj40079 = {};return obj40079;
})();
//# sourceMappingURL=protocols.js.map