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
var count_48519 = (0);while(true){
var m_48520 = cljs.core.async.impl.dispatch.tasks.pop();if((m_48520 == null))
{} else
{(m_48520.cljs$core$IFn$_invoke$arity$0 ? m_48520.cljs$core$IFn$_invoke$arity$0() : m_48520.call(null));
if((count_48519 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE))
{{
var G__48521 = (count_48519 + (1));
count_48519 = G__48521;
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
cljs.core.async.impl.dispatch.queue_dispatcher = (function queue_dispatcher(){if(cljs.core.truth_((function (){var and__19267__auto__ = cljs.core.async.impl.dispatch.queued_QMARK_;if(and__19267__auto__)
{return cljs.core.async.impl.dispatch.running_QMARK_;
} else
{return and__19267__auto__;
}
})()))
{return null;
} else
{cljs.core.async.impl.dispatch.queued_QMARK_ = true;
if(typeof MessageChannel !== 'undefined')
{return cljs.core.async.impl.dispatch.message_channel.port2.postMessage((0));
} else
{if(typeof setImmediate !== 'undefined')
{var G__48525 = cljs.core.async.impl.dispatch.process_messages;return setImmediate(G__48525);
} else
{var G__48526 = cljs.core.async.impl.dispatch.process_messages;var G__48527 = (0);return setTimeout(G__48526,G__48527);

}
}
}
});
cljs.core.async.impl.dispatch.run = (function run(f){cljs.core.async.impl.dispatch.tasks.unbounded_unshift(f);
return cljs.core.async.impl.dispatch.queue_dispatcher();
});
cljs.core.async.impl.dispatch.queue_delay = (function queue_delay(f,delay){var G__48530 = f;var G__48531 = delay;return setTimeout(G__48530,G__48531);
});
//# sourceMappingURL=dispatch.js.map