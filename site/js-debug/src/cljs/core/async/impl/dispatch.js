goog.provide('cljs.core.async.impl.dispatch');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.dispatch.message_channel = null;
cljs.core.async.impl.dispatch.tasks = cljs.core.async.impl.buffers.ring_buffer((32));
cljs.core.async.impl.dispatch.running_QMARK_ = false;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
cljs.core.async.impl.dispatch.TASK_BATCH_SIZE = (1024);
cljs.core.async.impl.dispatch.process_messages = (function process_messages(){cljs.core.async.impl.dispatch.running_QMARK_ = true;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
var count_67734 = (0);while(true){
var m_67735 = cljs.core.async.impl.dispatch.tasks.pop();if((m_67735 == null))
{} else
{(m_67735.cljs$core$IFn$_invoke$arity$0 ? m_67735.cljs$core$IFn$_invoke$arity$0() : m_67735.call(null));
if((count_67734 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE))
{{
var G__67736 = (count_67734 + (1));
count_67734 = G__67736;
continue;
}
} else
{}
}
break;
}
cljs.core.async.impl.dispatch.running_QMARK_ = false;
if((cljs.core.async.impl.dispatch.tasks.length > (0)))
{return (cljs.core.async.impl.dispatch.queue_dispatcher.cljs$core$IFn$_invoke$arity$0 ? cljs.core.async.impl.dispatch.queue_dispatcher.cljs$core$IFn$_invoke$arity$0() : cljs.core.async.impl.dispatch.queue_dispatcher.call(null));
} else
{return null;
}
});
if(typeof MessageChannel !== 'undefined')
{cljs.core.async.impl.dispatch.message_channel = (new MessageChannel());
cljs.core.async.impl.dispatch.message_channel.port1.onmessage = (function (msg){return cljs.core.async.impl.dispatch.process_messages();
});
} else
{}
cljs.core.async.impl.dispatch.queue_dispatcher = (function queue_dispatcher(){if(cljs.core.truth_((function (){var and__19697__auto__ = cljs.core.async.impl.dispatch.queued_QMARK_;if(and__19697__auto__)
{return cljs.core.async.impl.dispatch.running_QMARK_;
} else
{return and__19697__auto__;
}
})()))
{return null;
} else
{cljs.core.async.impl.dispatch.queued_QMARK_ = true;
if(typeof MessageChannel !== 'undefined')
{return cljs.core.async.impl.dispatch.message_channel.port2.postMessage((0));
} else
{if(typeof setImmediate !== 'undefined')
{var G__67740 = cljs.core.async.impl.dispatch.process_messages;return setImmediate(G__67740);
} else
{var G__67741 = cljs.core.async.impl.dispatch.process_messages;var G__67742 = (0);return setTimeout(G__67741,G__67742);

}
}
}
});
cljs.core.async.impl.dispatch.run = (function run(f){cljs.core.async.impl.dispatch.tasks.unbounded_unshift(f);
return cljs.core.async.impl.dispatch.queue_dispatcher();
});
cljs.core.async.impl.dispatch.queue_delay = (function queue_delay(f,delay){var G__67745 = f;var G__67746 = delay;return setTimeout(G__67745,G__67746);
});
//# sourceMappingURL=dispatch.js.map