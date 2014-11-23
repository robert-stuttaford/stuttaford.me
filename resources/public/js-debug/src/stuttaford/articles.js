goog.provide('stuttaford.articles');
goog.require('cljs.core');
goog.require('stuttaford.om.common');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('om_bootstrap.input');
goog.require('om_bootstrap.panel');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('om_bootstrap.random');
goog.require('om_bootstrap.panel');
goog.require('stuttaford.om.common');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clojure.string');
goog.require('om.core');
goog.require('om.core');
goog.require('stuttaford.om.common');
goog.require('om_bootstrap.button');
goog.require('clojure.string');
goog.require('om_bootstrap.button');
goog.require('om_bootstrap.random');
goog.require('om_bootstrap.input');
cljs.core.enable_console_print_BANG_();
stuttaford.articles.variant_names = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c","c",-1763192079)], null);
stuttaford.articles.PARAGRAPH_BREAK = "PARAGRAPH-BREAK";
stuttaford.articles.paragraph_break_variants = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__21069__auto__ = (function iter__76070(s__76071){return (new cljs.core.LazySeq(null,(function (){var s__76071__$1 = s__76071;while(true){
var temp__4126__auto__ = cljs.core.seq(s__76071__$1);if(temp__4126__auto__)
{var s__76071__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__76071__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__76071__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__76073 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__76072 = (0);while(true){
if((i__76072 < size__21068__auto__))
{var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__76072);cljs.core.chunk_append(b__76073,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,"\n\n"], null));
{
var G__76076 = (i__76072 + (1));
i__76072 = G__76076;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__76073),iter__76070(cljs.core.chunk_rest(s__76071__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__76073),null);
}
} else
{var n = cljs.core.first(s__76071__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,"\n\n"], null),iter__76070(cljs.core.rest(s__76071__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__21069__auto__(stuttaford.articles.variant_names);
})());
stuttaford.articles.prepare_sentences = (function prepare_sentences(article){return cljs.core.vec(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (sentence){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sentence,stuttaford.articles.PARAGRAPH_BREAK))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"paragraph-break","paragraph-break",252135109),new cljs.core.Keyword(null,"variants","variants",-176391100),stuttaford.articles.paragraph_break_variants], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"sentence","sentence",2033657256),new cljs.core.Keyword(null,"source","source",-433931539),sentence,new cljs.core.Keyword(null,"variants","variants",-176391100),cljs.core.PersistentArrayMap.EMPTY], null);
}
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,cljs.core.re_seq(/[^\.!\?\n]+(?:[\.!\?\n]|$)+/,clojure.string.replace(article,/\n\n/,("\n\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(stuttaford.articles.PARAGRAPH_BREAK)+"\n\n"))))))));
});
stuttaford.articles.sentence_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,new cljs.core.Keyword(null,"sentence","sentence",2033657256)),new cljs.core.Keyword(null,"kind","kind",-717265803));
stuttaford.articles.has_variants_QMARK_ = (function has_variants_QMARK_(source_article_sentences){return !(cljs.core.empty_QMARK_(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.not,cljs.core.seq,new cljs.core.Keyword(null,"variants","variants",-176391100)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.sentence_QMARK_,source_article_sentences))));
});
stuttaford.articles.variant_is_complete_QMARK_ = (function variant_is_complete_QMARK_(source_article_sentences,variant){cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(clojure.string.blank_QMARK_,variant,new cljs.core.Keyword(null,"variants","variants",-176391100)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.sentence_QMARK_,source_article_sentences))], 0));
return cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(clojure.string.blank_QMARK_,variant,new cljs.core.Keyword(null,"variants","variants",-176391100)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.sentence_QMARK_,source_article_sentences)));
});
stuttaford.articles.compose_variant = (function compose_variant(source_article_sentences,variant){return clojure.string.replace(clojure.string.trim(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(variant,new cljs.core.Keyword(null,"variants","variants",-176391100)),source_article_sentences)))),/\n /,"\n");
});
stuttaford.articles.count_words = (function count_words(text){return cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(text,/\s+/," "),/ /));
});
stuttaford.articles.word_count = (function word_count(data,source_or_variant){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source_or_variant,new cljs.core.Keyword(null,"source","source",-433931539)))
{return stuttaford.articles.count_words(new cljs.core.Keyword(null,"source-article","source-article",-1846600440).cljs$core$IFn$_invoke$arity$1(data));
} else
{return stuttaford.articles.count_words(stuttaford.articles.compose_variant(new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359).cljs$core$IFn$_invoke$arity$1(data),source_or_variant));
}
});
stuttaford.articles.perform_action = (function (){var method_table__21271__auto__ = (function (){var G__76077 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__76077) : cljs.core.atom.call(null,G__76077));
})();var prefer_table__21272__auto__ = (function (){var G__76078 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__76078) : cljs.core.atom.call(null,G__76078));
})();var method_cache__21273__auto__ = (function (){var G__76079 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__76079) : cljs.core.atom.call(null,G__76079));
})();var cached_hierarchy__21274__auto__ = (function (){var G__76080 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__76080) : cljs.core.atom.call(null,G__76080));
})();var hierarchy__21275__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("perform-action",((function (method_table__21271__auto__,prefer_table__21272__auto__,method_cache__21273__auto__,cached_hierarchy__21274__auto__,hierarchy__21275__auto__){
return (function (cursor,op,value,debug_QMARK_){if(cljs.core.truth_(debug_QMARK_))
{cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["ACTION:",op,value], 0));
} else
{}
return op;
});})(method_table__21271__auto__,prefer_table__21272__auto__,method_cache__21273__auto__,cached_hierarchy__21274__auto__,hierarchy__21275__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21275__auto__,method_table__21271__auto__,prefer_table__21272__auto__,method_cache__21273__auto__,cached_hierarchy__21274__auto__));
})();
stuttaford.articles.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (cursor,op,value){throw ("Missing perform-method op: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(op));
}));
stuttaford.articles.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-view","set-view",356827761),(function (cursor,op,value){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(cursor,new cljs.core.Keyword(null,"view","view",1247994814),value);
}));
stuttaford.articles.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-source-article","set-source-article",862080856),(function (cursor,op,value){om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(cursor,new cljs.core.Keyword(null,"source-article","source-article",-1846600440),value);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(cursor,new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359),stuttaford.articles.prepare_sentences(value));
}));
stuttaford.articles.do_action_BANG_ = (function do_action_BANG_(owner,action){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(stuttaford.om.common.control_chan(owner),action);
});
stuttaford.articles.source_article_placeholder = "Source article from which sentences will be presented for rewriting.\n\nOnce you start rewriting, this input will be locked.";
stuttaford.articles.set_source_article = (function set_source_article(owner,e){return stuttaford.articles.do_action_BANG_(owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-source-article","set-source-article",862080856),om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"source-article").value], null));
});
/**
* @param {...*} var_args
*/
stuttaford.articles.source_article = (function() { 
var source_article__delegate = function (data__24582__auto__,owner76081,p__76083){var vec__76107 = p__76083;var opts__24583__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76107,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema76111 = schema.core.Any;var input_schema76112 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"source-article","source-article",-1846600440)),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map76108","map76108",208733207,null))], null);var input_checker76113 = schema.core.checker(input_schema76112);var output_checker76114 = schema.core.checker(output_schema76111);return schema.core.schematize_fn(((function (ufv__,output_schema76111,input_schema76112,input_checker76113,output_checker76114,vec__76107,opts__24583__auto__){
return (function fnk76110(G__76115){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___76130 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__76115], null);var temp__4126__auto___76131 = (function (){var G__76123 = args__838__auto___76130;return (input_checker76113.cljs$core$IFn$_invoke$arity$1 ? input_checker76113.cljs$core$IFn$_invoke$arity$1(G__76123) : input_checker76113.call(null,G__76123));
})();if(cljs.core.truth_(temp__4126__auto___76131))
{var error__839__auto___76132 = temp__4126__auto___76131;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk76110","fnk76110",470222195,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___76132], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema76112,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___76130,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___76132], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map76108 = G__76115;while(true){
if(cljs.core.map_QMARK_(map76108))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map76108], 0))));
}
var map76109 = plumbing.fnk.schema.safe_get(map76108,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var source_article__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map76109,new cljs.core.Keyword(null,"source-article","source-article",-1846600440),null);var source_article_sentences = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map76109,new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map76108,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.articles.t76124 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.articles.t76124 = (function (opts__24583__auto__,owner,owner76081,output_checker76114,input_checker76113,input_schema76112,G__76115,source_article,data__24582__auto__,map76109,fnk76110,vec__76107,map76108,source_article_sentences,validate__837__auto__,ufv__,p__76083,output_schema76111,meta76125){
this.opts__24583__auto__ = opts__24583__auto__;
this.owner = owner;
this.owner76081 = owner76081;
this.output_checker76114 = output_checker76114;
this.input_checker76113 = input_checker76113;
this.input_schema76112 = input_schema76112;
this.G__76115 = G__76115;
this.source_article = source_article;
this.data__24582__auto__ = data__24582__auto__;
this.map76109 = map76109;
this.fnk76110 = fnk76110;
this.vec__76107 = vec__76107;
this.map76108 = map76108;
this.source_article_sentences = source_article_sentences;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.p__76083 = p__76083;
this.output_schema76111 = output_schema76111;
this.meta76125 = meta76125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.articles.t76124.cljs$lang$type = true;
stuttaford.articles.t76124.cljs$lang$ctorStr = "stuttaford.articles/t76124";
stuttaford.articles.t76124.cljs$lang$ctorPrWriter = ((function (owner,source_article_sentences,source_article__$1,map76109,validate__837__auto__,ufv__,output_schema76111,input_schema76112,input_checker76113,output_checker76114,vec__76107,opts__24583__auto__){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"stuttaford.articles/t76124");
});})(owner,source_article_sentences,source_article__$1,map76109,validate__837__auto__,ufv__,output_schema76111,input_schema76112,input_checker76113,output_checker76114,vec__76107,opts__24583__auto__))
;
stuttaford.articles.t76124.prototype.om$core$IDisplayName$ = true;
stuttaford.articles.t76124.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,source_article_sentences,source_article__$1,map76109,validate__837__auto__,ufv__,output_schema76111,input_schema76112,input_checker76113,output_checker76114,vec__76107,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "source-article";
});})(owner,source_article_sentences,source_article__$1,map76109,validate__837__auto__,ufv__,output_schema76111,input_schema76112,input_checker76113,output_checker76114,vec__76107,opts__24583__auto__))
;
stuttaford.articles.t76124.prototype.om$core$IRenderState$ = true;
stuttaford.articles.t76124.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,source_article_sentences,source_article__$1,map76109,validate__837__auto__,ufv__,output_schema76111,input_schema76112,input_checker76113,output_checker76114,vec__76107,opts__24583__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var attrs76127 = om_bootstrap.input.input((function (){var G__76128 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),stuttaford.articles.source_article_placeholder,new cljs.core.Keyword(null,"class","class",-2030961996),"source-article",new cljs.core.Keyword(null,"ref","ref",1289896967),"source-article",new cljs.core.Keyword(null,"value","value",305978217),self__.source_article,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.set_source_article,self__.owner),new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),true], null);var G__76128__$1 = ((stuttaford.articles.has_variants_QMARK_(self__.source_article_sentences))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76128,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true):G__76128);return G__76128__$1;
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs76127))?sablono.interpreter.attributes(attrs76127):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs76127))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((stuttaford.articles.has_variants_QMARK_(self__.source_article_sentences))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.warning","p.warning",93305750),"To prevent muddling variant sentence order, the source article is now read-only."], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs76127),sablono.interpreter.interpret(((stuttaford.articles.has_variants_QMARK_(self__.source_article_sentences))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.warning","p.warning",93305750),"To prevent muddling variant sentence order, the source article is now read-only."], null):null))], null))));
});})(owner,source_article_sentences,source_article__$1,map76109,validate__837__auto__,ufv__,output_schema76111,input_schema76112,input_checker76113,output_checker76114,vec__76107,opts__24583__auto__))
;
stuttaford.articles.t76124.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,source_article_sentences,source_article__$1,map76109,validate__837__auto__,ufv__,output_schema76111,input_schema76112,input_checker76113,output_checker76114,vec__76107,opts__24583__auto__){
return (function (_76126){var self__ = this;
var _76126__$1 = this;return self__.meta76125;
});})(owner,source_article_sentences,source_article__$1,map76109,validate__837__auto__,ufv__,output_schema76111,input_schema76112,input_checker76113,output_checker76114,vec__76107,opts__24583__auto__))
;
stuttaford.articles.t76124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,source_article_sentences,source_article__$1,map76109,validate__837__auto__,ufv__,output_schema76111,input_schema76112,input_checker76113,output_checker76114,vec__76107,opts__24583__auto__){
return (function (_76126,meta76125__$1){var self__ = this;
var _76126__$1 = this;return (new stuttaford.articles.t76124(self__.opts__24583__auto__,self__.owner,self__.owner76081,self__.output_checker76114,self__.input_checker76113,self__.input_schema76112,self__.G__76115,self__.source_article,self__.data__24582__auto__,self__.map76109,self__.fnk76110,self__.vec__76107,self__.map76108,self__.source_article_sentences,self__.validate__837__auto__,self__.ufv__,self__.p__76083,self__.output_schema76111,meta76125__$1));
});})(owner,source_article_sentences,source_article__$1,map76109,validate__837__auto__,ufv__,output_schema76111,input_schema76112,input_checker76113,output_checker76114,vec__76107,opts__24583__auto__))
;
stuttaford.articles.__GT_t76124 = ((function (owner,source_article_sentences,source_article__$1,map76109,validate__837__auto__,ufv__,output_schema76111,input_schema76112,input_checker76113,output_checker76114,vec__76107,opts__24583__auto__){
return (function __GT_t76124(opts__24583__auto____$1,owner__$1,owner76081__$1,output_checker76114__$1,input_checker76113__$1,input_schema76112__$1,G__76115__$1,source_article__$2,data__24582__auto____$1,map76109__$1,fnk76110__$1,vec__76107__$1,map76108__$1,source_article_sentences__$1,validate__837__auto____$1,ufv____$1,p__76083__$1,output_schema76111__$1,meta76125){return (new stuttaford.articles.t76124(opts__24583__auto____$1,owner__$1,owner76081__$1,output_checker76114__$1,input_checker76113__$1,input_schema76112__$1,G__76115__$1,source_article__$2,data__24582__auto____$1,map76109__$1,fnk76110__$1,vec__76107__$1,map76108__$1,source_article_sentences__$1,validate__837__auto____$1,ufv____$1,p__76083__$1,output_schema76111__$1,meta76125));
});})(owner,source_article_sentences,source_article__$1,map76109,validate__837__auto__,ufv__,output_schema76111,input_schema76112,input_checker76113,output_checker76114,vec__76107,opts__24583__auto__))
;
}
return (new stuttaford.articles.t76124(opts__24583__auto__,owner,owner76081,output_checker76114,input_checker76113,input_schema76112,G__76115,source_article__$1,data__24582__auto__,map76109,fnk76110,vec__76107,map76108,source_article_sentences,validate__837__auto__,ufv__,p__76083,output_schema76111,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___76133 = (function (){var G__76129 = o__840__auto__;return (output_checker76114.cljs$core$IFn$_invoke$arity$1 ? output_checker76114.cljs$core$IFn$_invoke$arity$1(G__76129) : output_checker76114.call(null,G__76129));
})();if(cljs.core.truth_(temp__4126__auto___76133))
{var error__839__auto___76134 = temp__4126__auto___76133;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk76110","fnk76110",470222195,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___76134], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema76111,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___76134], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema76111,input_schema76112,input_checker76113,output_checker76114,vec__76107,opts__24583__auto__))
,schema.core.make_fn_schema(output_schema76111,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema76112], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24583__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner76081,new cljs.core.Keyword(null,"data","data",-232669377),data__24582__auto__], null));
};
var source_article = function (data__24582__auto__,owner76081,var_args){
var p__76083 = null;if (arguments.length > 2) {
  p__76083 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return source_article__delegate.call(this,data__24582__auto__,owner76081,p__76083);};
source_article.cljs$lang$maxFixedArity = 2;
source_article.cljs$lang$applyTo = (function (arglist__76135){
var data__24582__auto__ = cljs.core.first(arglist__76135);
arglist__76135 = cljs.core.next(arglist__76135);
var owner76081 = cljs.core.first(arglist__76135);
var p__76083 = cljs.core.rest(arglist__76135);
return source_article__delegate(data__24582__auto__,owner76081,p__76083);
});
source_article.cljs$core$IFn$_invoke$arity$variadic = source_article__delegate;
return source_article;
})()
;
stuttaford.articles.__GT_source_article = (function() {
var __GT_source_article = null;
var __GT_source_article__1 = (function (cursor__24551__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.source_article,cursor__24551__auto__);
});
var __GT_source_article__2 = (function (cursor__24551__auto__,m76082){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.articles.source_article,cursor__24551__auto__,m76082);
});
__GT_source_article = function(cursor__24551__auto__,m76082){
switch(arguments.length){
case 1:
return __GT_source_article__1.call(this,cursor__24551__auto__);
case 2:
return __GT_source_article__2.call(this,cursor__24551__auto__,m76082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_source_article.cljs$core$IFn$_invoke$arity$1 = __GT_source_article__1;
__GT_source_article.cljs$core$IFn$_invoke$arity$2 = __GT_source_article__2;
return __GT_source_article;
})()
;
stuttaford.articles.set_variant = (function set_variant(owner,cursor,variant){var value = clojure.string.trim(om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,("variant-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(variant)))).value);if(cljs.core.not(clojure.string.blank_QMARK_(value)))
{return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variants","variants",-176391100),variant], null),value);
} else
{return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variants","variants",-176391100)], null),((function (value){
return (function (p1__76136_SHARP_){return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__76136_SHARP_,variant);
});})(value))
);
}
});
/**
* @param {...*} var_args
*/
stuttaford.articles.rewrite_sentence = (function() { 
var rewrite_sentence__delegate = function (data__24582__auto__,owner76137,p__76139){var vec__76212 = p__76139;var opts__24583__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76212,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema76215 = schema.core.Any;var input_schema76216 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"variants","variants",-176391100),schema.core.Any,new cljs.core.Keyword(null,"source","source",-433931539),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map76213","map76213",-625038055,null))], null);var input_checker76217 = schema.core.checker(input_schema76216);var output_checker76218 = schema.core.checker(output_schema76215);return schema.core.schematize_fn(((function (ufv__,output_schema76215,input_schema76216,input_checker76217,output_checker76218,vec__76212,opts__24583__auto__){
return (function fnk76214(G__76219){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___76284 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__76219], null);var temp__4126__auto___76285 = (function (){var G__76252 = args__838__auto___76284;return (input_checker76217.cljs$core$IFn$_invoke$arity$1 ? input_checker76217.cljs$core$IFn$_invoke$arity$1(G__76252) : input_checker76217.call(null,G__76252));
})();if(cljs.core.truth_(temp__4126__auto___76285))
{var error__839__auto___76286 = temp__4126__auto___76285;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk76214","fnk76214",-2098289418,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___76286], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema76216,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___76284,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___76286], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map76213 = G__76219;while(true){
if(cljs.core.map_QMARK_(map76213))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map76213], 0))));
}
var data = plumbing.fnk.schema.safe_get(map76213,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var source = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var variants = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"variants","variants",-176391100),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map76213,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.articles.t76253 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.articles.t76253 = (function (output_schema76215,G__76219,input_checker76217,rewrite_sentence,opts__24583__auto__,owner,owner76137,data,vec__76212,variants,input_schema76216,data__24582__auto__,p__76139,source,fnk76214,output_checker76218,map76213,validate__837__auto__,ufv__,meta76254){
this.output_schema76215 = output_schema76215;
this.G__76219 = G__76219;
this.input_checker76217 = input_checker76217;
this.rewrite_sentence = rewrite_sentence;
this.opts__24583__auto__ = opts__24583__auto__;
this.owner = owner;
this.owner76137 = owner76137;
this.data = data;
this.vec__76212 = vec__76212;
this.variants = variants;
this.input_schema76216 = input_schema76216;
this.data__24582__auto__ = data__24582__auto__;
this.p__76139 = p__76139;
this.source = source;
this.fnk76214 = fnk76214;
this.output_checker76218 = output_checker76218;
this.map76213 = map76213;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.meta76254 = meta76254;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.articles.t76253.cljs$lang$type = true;
stuttaford.articles.t76253.cljs$lang$ctorStr = "stuttaford.articles/t76253";
stuttaford.articles.t76253.cljs$lang$ctorPrWriter = ((function (owner,variants,source,data,validate__837__auto__,ufv__,output_schema76215,input_schema76216,input_checker76217,output_checker76218,vec__76212,opts__24583__auto__){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"stuttaford.articles/t76253");
});})(owner,variants,source,data,validate__837__auto__,ufv__,output_schema76215,input_schema76216,input_checker76217,output_checker76218,vec__76212,opts__24583__auto__))
;
stuttaford.articles.t76253.prototype.om$core$IDisplayName$ = true;
stuttaford.articles.t76253.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,variants,source,data,validate__837__auto__,ufv__,output_schema76215,input_schema76216,input_checker76217,output_checker76218,vec__76212,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "rewrite-sentence";
});})(owner,variants,source,data,validate__837__auto__,ufv__,output_schema76215,input_schema76216,input_checker76217,output_checker76218,vec__76212,opts__24583__auto__))
;
stuttaford.articles.t76253.prototype.om$core$IRenderState$ = true;
stuttaford.articles.t76253.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,variants,source,data,validate__837__auto__,ufv__,output_schema76215,input_schema76216,input_checker76217,output_checker76218,vec__76212,opts__24583__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var G__76258 = {"className": "sentence"};var G__76259 = (function (){var attrs76256 = self__.source;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,((cljs.core.map_QMARK_(attrs76256))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["source-sentence"], null)], null),attrs76256], 0))):{"className": "source-sentence"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs76256))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs76256)], null))));
})();var G__76260 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__21069__auto__ = ((function (G__76258,G__76259,___$1,owner,variants,source,data,validate__837__auto__,ufv__,output_schema76215,input_schema76216,input_checker76217,output_checker76218,vec__76212,opts__24583__auto__){
return (function iter__76261(s__76262){return (new cljs.core.LazySeq(null,((function (G__76258,G__76259,___$1,owner,variants,source,data,validate__837__auto__,ufv__,output_schema76215,input_schema76216,input_checker76217,output_checker76218,vec__76212,opts__24583__auto__){
return (function (){var s__76262__$1 = s__76262;while(true){
var temp__4126__auto__ = cljs.core.seq(s__76262__$1);if(temp__4126__auto__)
{var s__76262__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__76262__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__76262__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__76264 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__76263 = (0);while(true){
if((i__76263 < size__21068__auto__))
{var variant = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__76263);var variant_name = cljs.core.name(variant);cljs.core.chunk_append(b__76264,(function (){var G__76275 = {"className": "input"};var G__76276 = (function (){var attrs76257 = variant_name;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs76257))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["index"], null)], null),attrs76257], 0))):{"className": "index"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs76257))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs76257)], null))));
})();var G__76277 = sablono.interpreter.interpret((function (){var value = (function (){var G__76278 = self__.variants;return (variant.cljs$core$IFn$_invoke$arity$1 ? variant.cljs$core$IFn$_invoke$arity$1(G__76278) : variant.call(null,G__76278));
})();return om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"class","class",-2030961996),("variant "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(clojure.string.blank_QMARK_(value))?"invalid":"valid"))),new cljs.core.Keyword(null,"ref","ref",1289896967),("variant-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant_name)),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__76263,value,G__76275,G__76276,variant_name,variant,c__21067__auto__,size__21068__auto__,b__76264,s__76262__$2,temp__4126__auto__,G__76258,G__76259,___$1,owner,variants,source,data,validate__837__auto__,ufv__,output_schema76215,input_schema76216,input_checker76217,output_checker76218,vec__76212,opts__24583__auto__){
return (function (){return stuttaford.articles.set_variant(self__.owner,self__.data,variant);
});})(i__76263,value,G__76275,G__76276,variant_name,variant,c__21067__auto__,size__21068__auto__,b__76264,s__76262__$2,temp__4126__auto__,G__76258,G__76259,___$1,owner,variants,source,data,validate__837__auto__,ufv__,output_schema76215,input_schema76216,input_checker76217,output_checker76218,vec__76212,opts__24583__auto__))
], null));
})());return React.DOM.div(G__76275,G__76276,G__76277);
})());
{
var G__76287 = (i__76263 + (1));
i__76263 = G__76287;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__76264),iter__76261(cljs.core.chunk_rest(s__76262__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__76264),null);
}
} else
{var variant = cljs.core.first(s__76262__$2);var variant_name = cljs.core.name(variant);return cljs.core.cons((function (){var G__76279 = {"className": "input"};var G__76280 = (function (){var attrs76257 = variant_name;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs76257))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["index"], null)], null),attrs76257], 0))):{"className": "index"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs76257))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs76257)], null))));
})();var G__76281 = sablono.interpreter.interpret((function (){var value = (function (){var G__76282 = self__.variants;return (variant.cljs$core$IFn$_invoke$arity$1 ? variant.cljs$core$IFn$_invoke$arity$1(G__76282) : variant.call(null,G__76282));
})();return om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"class","class",-2030961996),("variant "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(clojure.string.blank_QMARK_(value))?"invalid":"valid"))),new cljs.core.Keyword(null,"ref","ref",1289896967),("variant-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant_name)),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (value,G__76279,G__76280,variant_name,variant,s__76262__$2,temp__4126__auto__,G__76258,G__76259,___$1,owner,variants,source,data,validate__837__auto__,ufv__,output_schema76215,input_schema76216,input_checker76217,output_checker76218,vec__76212,opts__24583__auto__){
return (function (){return stuttaford.articles.set_variant(self__.owner,self__.data,variant);
});})(value,G__76279,G__76280,variant_name,variant,s__76262__$2,temp__4126__auto__,G__76258,G__76259,___$1,owner,variants,source,data,validate__837__auto__,ufv__,output_schema76215,input_schema76216,input_checker76217,output_checker76218,vec__76212,opts__24583__auto__))
], null));
})());return React.DOM.div(G__76279,G__76280,G__76281);
})(),iter__76261(cljs.core.rest(s__76262__$2)));
}
} else
{return null;
}
break;
}
});})(G__76258,G__76259,___$1,owner,variants,source,data,validate__837__auto__,ufv__,output_schema76215,input_schema76216,input_checker76217,output_checker76218,vec__76212,opts__24583__auto__))
,null,null));
});})(G__76258,G__76259,___$1,owner,variants,source,data,validate__837__auto__,ufv__,output_schema76215,input_schema76216,input_checker76217,output_checker76218,vec__76212,opts__24583__auto__))
;return iter__21069__auto__(stuttaford.articles.variant_names);
})());return React.DOM.div(G__76258,G__76259,G__76260);
});})(owner,variants,source,data,validate__837__auto__,ufv__,output_schema76215,input_schema76216,input_checker76217,output_checker76218,vec__76212,opts__24583__auto__))
;
stuttaford.articles.t76253.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,variants,source,data,validate__837__auto__,ufv__,output_schema76215,input_schema76216,input_checker76217,output_checker76218,vec__76212,opts__24583__auto__){
return (function (_76255){var self__ = this;
var _76255__$1 = this;return self__.meta76254;
});})(owner,variants,source,data,validate__837__auto__,ufv__,output_schema76215,input_schema76216,input_checker76217,output_checker76218,vec__76212,opts__24583__auto__))
;
stuttaford.articles.t76253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,variants,source,data,validate__837__auto__,ufv__,output_schema76215,input_schema76216,input_checker76217,output_checker76218,vec__76212,opts__24583__auto__){
return (function (_76255,meta76254__$1){var self__ = this;
var _76255__$1 = this;return (new stuttaford.articles.t76253(self__.output_schema76215,self__.G__76219,self__.input_checker76217,self__.rewrite_sentence,self__.opts__24583__auto__,self__.owner,self__.owner76137,self__.data,self__.vec__76212,self__.variants,self__.input_schema76216,self__.data__24582__auto__,self__.p__76139,self__.source,self__.fnk76214,self__.output_checker76218,self__.map76213,self__.validate__837__auto__,self__.ufv__,meta76254__$1));
});})(owner,variants,source,data,validate__837__auto__,ufv__,output_schema76215,input_schema76216,input_checker76217,output_checker76218,vec__76212,opts__24583__auto__))
;
stuttaford.articles.__GT_t76253 = ((function (owner,variants,source,data,validate__837__auto__,ufv__,output_schema76215,input_schema76216,input_checker76217,output_checker76218,vec__76212,opts__24583__auto__){
return (function __GT_t76253(output_schema76215__$1,G__76219__$1,input_checker76217__$1,rewrite_sentence__$1,opts__24583__auto____$1,owner__$1,owner76137__$1,data__$1,vec__76212__$1,variants__$1,input_schema76216__$1,data__24582__auto____$1,p__76139__$1,source__$1,fnk76214__$1,output_checker76218__$1,map76213__$1,validate__837__auto____$1,ufv____$1,meta76254){return (new stuttaford.articles.t76253(output_schema76215__$1,G__76219__$1,input_checker76217__$1,rewrite_sentence__$1,opts__24583__auto____$1,owner__$1,owner76137__$1,data__$1,vec__76212__$1,variants__$1,input_schema76216__$1,data__24582__auto____$1,p__76139__$1,source__$1,fnk76214__$1,output_checker76218__$1,map76213__$1,validate__837__auto____$1,ufv____$1,meta76254));
});})(owner,variants,source,data,validate__837__auto__,ufv__,output_schema76215,input_schema76216,input_checker76217,output_checker76218,vec__76212,opts__24583__auto__))
;
}
return (new stuttaford.articles.t76253(output_schema76215,G__76219,input_checker76217,rewrite_sentence,opts__24583__auto__,owner,owner76137,data,vec__76212,variants,input_schema76216,data__24582__auto__,p__76139,source,fnk76214,output_checker76218,map76213,validate__837__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___76288 = (function (){var G__76283 = o__840__auto__;return (output_checker76218.cljs$core$IFn$_invoke$arity$1 ? output_checker76218.cljs$core$IFn$_invoke$arity$1(G__76283) : output_checker76218.call(null,G__76283));
})();if(cljs.core.truth_(temp__4126__auto___76288))
{var error__839__auto___76289 = temp__4126__auto___76288;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk76214","fnk76214",-2098289418,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___76289], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema76215,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___76289], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema76215,input_schema76216,input_checker76217,output_checker76218,vec__76212,opts__24583__auto__))
,schema.core.make_fn_schema(output_schema76215,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema76216], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24583__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner76137,new cljs.core.Keyword(null,"data","data",-232669377),data__24582__auto__], null));
};
var rewrite_sentence = function (data__24582__auto__,owner76137,var_args){
var p__76139 = null;if (arguments.length > 2) {
  p__76139 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return rewrite_sentence__delegate.call(this,data__24582__auto__,owner76137,p__76139);};
rewrite_sentence.cljs$lang$maxFixedArity = 2;
rewrite_sentence.cljs$lang$applyTo = (function (arglist__76290){
var data__24582__auto__ = cljs.core.first(arglist__76290);
arglist__76290 = cljs.core.next(arglist__76290);
var owner76137 = cljs.core.first(arglist__76290);
var p__76139 = cljs.core.rest(arglist__76290);
return rewrite_sentence__delegate(data__24582__auto__,owner76137,p__76139);
});
rewrite_sentence.cljs$core$IFn$_invoke$arity$variadic = rewrite_sentence__delegate;
return rewrite_sentence;
})()
;
stuttaford.articles.__GT_rewrite_sentence = (function() {
var __GT_rewrite_sentence = null;
var __GT_rewrite_sentence__1 = (function (cursor__24551__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.rewrite_sentence,cursor__24551__auto__);
});
var __GT_rewrite_sentence__2 = (function (cursor__24551__auto__,m76138){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.articles.rewrite_sentence,cursor__24551__auto__,m76138);
});
__GT_rewrite_sentence = function(cursor__24551__auto__,m76138){
switch(arguments.length){
case 1:
return __GT_rewrite_sentence__1.call(this,cursor__24551__auto__);
case 2:
return __GT_rewrite_sentence__2.call(this,cursor__24551__auto__,m76138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_rewrite_sentence.cljs$core$IFn$_invoke$arity$1 = __GT_rewrite_sentence__1;
__GT_rewrite_sentence.cljs$core$IFn$_invoke$arity$2 = __GT_rewrite_sentence__2;
return __GT_rewrite_sentence;
})()
;
/**
* @param {...*} var_args
*/
stuttaford.articles.rewrite_articles = (function() { 
var rewrite_articles__delegate = function (data__24582__auto__,owner76291,p__76293){var vec__76315 = p__76293;var opts__24583__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76315,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema76319 = schema.core.Any;var input_schema76320 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359)),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map76316","map76316",-1684773938,null))], null);var input_checker76321 = schema.core.checker(input_schema76320);var output_checker76322 = schema.core.checker(output_schema76319);return schema.core.schematize_fn(((function (ufv__,output_schema76319,input_schema76320,input_checker76321,output_checker76322,vec__76315,opts__24583__auto__){
return (function fnk76318(G__76323){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___76336 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__76323], null);var temp__4126__auto___76337 = (function (){var G__76330 = args__838__auto___76336;return (input_checker76321.cljs$core$IFn$_invoke$arity$1 ? input_checker76321.cljs$core$IFn$_invoke$arity$1(G__76330) : input_checker76321.call(null,G__76330));
})();if(cljs.core.truth_(temp__4126__auto___76337))
{var error__839__auto___76338 = temp__4126__auto___76337;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk76318","fnk76318",-1291850326,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___76338], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema76320,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___76336,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___76338], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map76316 = G__76323;while(true){
if(cljs.core.map_QMARK_(map76316))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map76316], 0))));
}
var map76317 = plumbing.fnk.schema.safe_get(map76316,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var source_article_sentences = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map76317,new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map76316,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.articles.t76331 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.articles.t76331 = (function (opts__24583__auto__,owner,vec__76315,fnk76318,G__76323,rewrite_articles,output_schema76319,map76316,input_schema76320,owner76291,map76317,data__24582__auto__,p__76293,output_checker76322,source_article_sentences,input_checker76321,validate__837__auto__,ufv__,meta76332){
this.opts__24583__auto__ = opts__24583__auto__;
this.owner = owner;
this.vec__76315 = vec__76315;
this.fnk76318 = fnk76318;
this.G__76323 = G__76323;
this.rewrite_articles = rewrite_articles;
this.output_schema76319 = output_schema76319;
this.map76316 = map76316;
this.input_schema76320 = input_schema76320;
this.owner76291 = owner76291;
this.map76317 = map76317;
this.data__24582__auto__ = data__24582__auto__;
this.p__76293 = p__76293;
this.output_checker76322 = output_checker76322;
this.source_article_sentences = source_article_sentences;
this.input_checker76321 = input_checker76321;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.meta76332 = meta76332;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.articles.t76331.cljs$lang$type = true;
stuttaford.articles.t76331.cljs$lang$ctorStr = "stuttaford.articles/t76331";
stuttaford.articles.t76331.cljs$lang$ctorPrWriter = ((function (owner,source_article_sentences,map76317,validate__837__auto__,ufv__,output_schema76319,input_schema76320,input_checker76321,output_checker76322,vec__76315,opts__24583__auto__){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"stuttaford.articles/t76331");
});})(owner,source_article_sentences,map76317,validate__837__auto__,ufv__,output_schema76319,input_schema76320,input_checker76321,output_checker76322,vec__76315,opts__24583__auto__))
;
stuttaford.articles.t76331.prototype.om$core$IDisplayName$ = true;
stuttaford.articles.t76331.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,source_article_sentences,map76317,validate__837__auto__,ufv__,output_schema76319,input_schema76320,input_checker76321,output_checker76322,vec__76315,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "rewrite-articles";
});})(owner,source_article_sentences,map76317,validate__837__auto__,ufv__,output_schema76319,input_schema76320,input_checker76321,output_checker76322,vec__76315,opts__24583__auto__))
;
stuttaford.articles.t76331.prototype.om$core$IRenderState$ = true;
stuttaford.articles.t76331.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,source_article_sentences,map76317,validate__837__auto__,ufv__,output_schema76319,input_schema76320,input_checker76321,output_checker76322,vec__76315,opts__24583__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var attrs76334 = ((cljs.core.seq(self__.source_article_sentences))?om.core.build_all.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.rewrite_sentence,cljs.core.map_indexed(((function (___$1,owner,source_article_sentences,map76317,validate__837__auto__,ufv__,output_schema76319,input_schema76320,input_checker76321,output_checker76322,vec__76315,opts__24583__auto__){
return (function (i,sentence){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sentence,new cljs.core.Keyword(null,"index","index",-1531685915),i);
});})(___$1,owner,source_article_sentences,map76317,validate__837__auto__,ufv__,output_schema76319,input_schema76320,input_checker76321,output_checker76322,vec__76315,opts__24583__auto__))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.sentence_QMARK_,self__.source_article_sentences))):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No source article."], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs76334))?sablono.interpreter.attributes(attrs76334):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs76334))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs76334)], null))));
});})(owner,source_article_sentences,map76317,validate__837__auto__,ufv__,output_schema76319,input_schema76320,input_checker76321,output_checker76322,vec__76315,opts__24583__auto__))
;
stuttaford.articles.t76331.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,source_article_sentences,map76317,validate__837__auto__,ufv__,output_schema76319,input_schema76320,input_checker76321,output_checker76322,vec__76315,opts__24583__auto__){
return (function (_76333){var self__ = this;
var _76333__$1 = this;return self__.meta76332;
});})(owner,source_article_sentences,map76317,validate__837__auto__,ufv__,output_schema76319,input_schema76320,input_checker76321,output_checker76322,vec__76315,opts__24583__auto__))
;
stuttaford.articles.t76331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,source_article_sentences,map76317,validate__837__auto__,ufv__,output_schema76319,input_schema76320,input_checker76321,output_checker76322,vec__76315,opts__24583__auto__){
return (function (_76333,meta76332__$1){var self__ = this;
var _76333__$1 = this;return (new stuttaford.articles.t76331(self__.opts__24583__auto__,self__.owner,self__.vec__76315,self__.fnk76318,self__.G__76323,self__.rewrite_articles,self__.output_schema76319,self__.map76316,self__.input_schema76320,self__.owner76291,self__.map76317,self__.data__24582__auto__,self__.p__76293,self__.output_checker76322,self__.source_article_sentences,self__.input_checker76321,self__.validate__837__auto__,self__.ufv__,meta76332__$1));
});})(owner,source_article_sentences,map76317,validate__837__auto__,ufv__,output_schema76319,input_schema76320,input_checker76321,output_checker76322,vec__76315,opts__24583__auto__))
;
stuttaford.articles.__GT_t76331 = ((function (owner,source_article_sentences,map76317,validate__837__auto__,ufv__,output_schema76319,input_schema76320,input_checker76321,output_checker76322,vec__76315,opts__24583__auto__){
return (function __GT_t76331(opts__24583__auto____$1,owner__$1,vec__76315__$1,fnk76318__$1,G__76323__$1,rewrite_articles__$1,output_schema76319__$1,map76316__$1,input_schema76320__$1,owner76291__$1,map76317__$1,data__24582__auto____$1,p__76293__$1,output_checker76322__$1,source_article_sentences__$1,input_checker76321__$1,validate__837__auto____$1,ufv____$1,meta76332){return (new stuttaford.articles.t76331(opts__24583__auto____$1,owner__$1,vec__76315__$1,fnk76318__$1,G__76323__$1,rewrite_articles__$1,output_schema76319__$1,map76316__$1,input_schema76320__$1,owner76291__$1,map76317__$1,data__24582__auto____$1,p__76293__$1,output_checker76322__$1,source_article_sentences__$1,input_checker76321__$1,validate__837__auto____$1,ufv____$1,meta76332));
});})(owner,source_article_sentences,map76317,validate__837__auto__,ufv__,output_schema76319,input_schema76320,input_checker76321,output_checker76322,vec__76315,opts__24583__auto__))
;
}
return (new stuttaford.articles.t76331(opts__24583__auto__,owner,vec__76315,fnk76318,G__76323,rewrite_articles,output_schema76319,map76316,input_schema76320,owner76291,map76317,data__24582__auto__,p__76293,output_checker76322,source_article_sentences,input_checker76321,validate__837__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___76339 = (function (){var G__76335 = o__840__auto__;return (output_checker76322.cljs$core$IFn$_invoke$arity$1 ? output_checker76322.cljs$core$IFn$_invoke$arity$1(G__76335) : output_checker76322.call(null,G__76335));
})();if(cljs.core.truth_(temp__4126__auto___76339))
{var error__839__auto___76340 = temp__4126__auto___76339;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk76318","fnk76318",-1291850326,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___76340], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema76319,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___76340], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema76319,input_schema76320,input_checker76321,output_checker76322,vec__76315,opts__24583__auto__))
,schema.core.make_fn_schema(output_schema76319,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema76320], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24583__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner76291,new cljs.core.Keyword(null,"data","data",-232669377),data__24582__auto__], null));
};
var rewrite_articles = function (data__24582__auto__,owner76291,var_args){
var p__76293 = null;if (arguments.length > 2) {
  p__76293 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return rewrite_articles__delegate.call(this,data__24582__auto__,owner76291,p__76293);};
rewrite_articles.cljs$lang$maxFixedArity = 2;
rewrite_articles.cljs$lang$applyTo = (function (arglist__76341){
var data__24582__auto__ = cljs.core.first(arglist__76341);
arglist__76341 = cljs.core.next(arglist__76341);
var owner76291 = cljs.core.first(arglist__76341);
var p__76293 = cljs.core.rest(arglist__76341);
return rewrite_articles__delegate(data__24582__auto__,owner76291,p__76293);
});
rewrite_articles.cljs$core$IFn$_invoke$arity$variadic = rewrite_articles__delegate;
return rewrite_articles;
})()
;
stuttaford.articles.__GT_rewrite_articles = (function() {
var __GT_rewrite_articles = null;
var __GT_rewrite_articles__1 = (function (cursor__24551__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.rewrite_articles,cursor__24551__auto__);
});
var __GT_rewrite_articles__2 = (function (cursor__24551__auto__,m76292){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.articles.rewrite_articles,cursor__24551__auto__,m76292);
});
__GT_rewrite_articles = function(cursor__24551__auto__,m76292){
switch(arguments.length){
case 1:
return __GT_rewrite_articles__1.call(this,cursor__24551__auto__);
case 2:
return __GT_rewrite_articles__2.call(this,cursor__24551__auto__,m76292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_rewrite_articles.cljs$core$IFn$_invoke$arity$1 = __GT_rewrite_articles__1;
__GT_rewrite_articles.cljs$core$IFn$_invoke$arity$2 = __GT_rewrite_articles__2;
return __GT_rewrite_articles;
})()
;
/**
* @param {...*} var_args
*/
stuttaford.articles.output_articles = (function() { 
var output_articles__delegate = function (data__24582__auto__,owner76342,p__76344){var vec__76446 = p__76344;var opts__24583__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76446,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema76450 = schema.core.Any;var input_schema76451 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359)),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map76447","map76447",-1254127169,null))], null);var input_checker76452 = schema.core.checker(input_schema76451);var output_checker76453 = schema.core.checker(output_schema76450);return schema.core.schematize_fn(((function (ufv__,output_schema76450,input_schema76451,input_checker76452,output_checker76453,vec__76446,opts__24583__auto__){
return (function fnk76449(G__76454){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___76547 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__76454], null);var temp__4126__auto___76548 = (function (){var G__76501 = args__838__auto___76547;return (input_checker76452.cljs$core$IFn$_invoke$arity$1 ? input_checker76452.cljs$core$IFn$_invoke$arity$1(G__76501) : input_checker76452.call(null,G__76501));
})();if(cljs.core.truth_(temp__4126__auto___76548))
{var error__839__auto___76549 = temp__4126__auto___76548;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk76449","fnk76449",-256729657,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___76549], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema76451,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___76547,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___76549], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map76447 = G__76454;while(true){
if(cljs.core.map_QMARK_(map76447))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map76447], 0))));
}
var map76448 = plumbing.fnk.schema.safe_get(map76447,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var source_article_sentences = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map76448,new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map76447,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.articles.t76502 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.articles.t76502 = (function (output_schema76450,opts__24583__auto__,owner76342,owner,G__76454,fnk76449,output_checker76453,input_schema76451,vec__76446,data__24582__auto__,p__76344,source_article_sentences,validate__837__auto__,ufv__,map76448,input_checker76452,output_articles,map76447,meta76503){
this.output_schema76450 = output_schema76450;
this.opts__24583__auto__ = opts__24583__auto__;
this.owner76342 = owner76342;
this.owner = owner;
this.G__76454 = G__76454;
this.fnk76449 = fnk76449;
this.output_checker76453 = output_checker76453;
this.input_schema76451 = input_schema76451;
this.vec__76446 = vec__76446;
this.data__24582__auto__ = data__24582__auto__;
this.p__76344 = p__76344;
this.source_article_sentences = source_article_sentences;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.map76448 = map76448;
this.input_checker76452 = input_checker76452;
this.output_articles = output_articles;
this.map76447 = map76447;
this.meta76503 = meta76503;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.articles.t76502.cljs$lang$type = true;
stuttaford.articles.t76502.cljs$lang$ctorStr = "stuttaford.articles/t76502";
stuttaford.articles.t76502.cljs$lang$ctorPrWriter = ((function (owner,source_article_sentences,map76448,validate__837__auto__,ufv__,output_schema76450,input_schema76451,input_checker76452,output_checker76453,vec__76446,opts__24583__auto__){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"stuttaford.articles/t76502");
});})(owner,source_article_sentences,map76448,validate__837__auto__,ufv__,output_schema76450,input_schema76451,input_checker76452,output_checker76453,vec__76446,opts__24583__auto__))
;
stuttaford.articles.t76502.prototype.om$core$IDisplayName$ = true;
stuttaford.articles.t76502.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,source_article_sentences,map76448,validate__837__auto__,ufv__,output_schema76450,input_schema76451,input_checker76452,output_checker76453,vec__76446,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "output-articles";
});})(owner,source_article_sentences,map76448,validate__837__auto__,ufv__,output_schema76450,input_schema76451,input_checker76452,output_checker76453,vec__76446,opts__24583__auto__))
;
stuttaford.articles.t76502.prototype.om$core$IRenderState$ = true;
stuttaford.articles.t76502.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,source_article_sentences,map76448,validate__837__auto__,ufv__,output_schema76450,input_schema76451,input_checker76452,output_checker76453,vec__76446,opts__24583__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var composed_variants = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.second),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.identity),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.compose_variant,self__.source_article_sentences)),stuttaford.articles.variant_names));var attrs76505 = ((cljs.core.seq(composed_variants))?(function (){var G__76506 = null;var G__76507 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__21069__auto__ = ((function (G__76506,composed_variants,___$1,owner,source_article_sentences,map76448,validate__837__auto__,ufv__,output_schema76450,input_schema76451,input_checker76452,output_checker76453,vec__76446,opts__24583__auto__){
return (function iter__76508(s__76509){return (new cljs.core.LazySeq(null,((function (G__76506,composed_variants,___$1,owner,source_article_sentences,map76448,validate__837__auto__,ufv__,output_schema76450,input_schema76451,input_checker76452,output_checker76453,vec__76446,opts__24583__auto__){
return (function (){var s__76509__$1 = s__76509;while(true){
var temp__4126__auto__ = cljs.core.seq(s__76509__$1);if(temp__4126__auto__)
{var s__76509__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__76509__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__76509__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__76511 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__76510 = (0);while(true){
if((i__76510 < size__21068__auto__))
{var vec__76530 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__76510);var variant_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76530,(0),null);var composed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76530,(1),null);var ref = ("output-article-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant_name));cljs.core.chunk_append(b__76511,(function (){var G__76531 = {"className": "composed-variant"};var G__76532 = (function (){var G__76534 = null;var G__76535 = "Variant ";var G__76536 = sablono.interpreter.interpret(variant_name);return React.DOM.h1(G__76534,G__76535,G__76536);
})();var G__76533 = sablono.interpreter.interpret(om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"class","class",-2030961996),"source-article",new cljs.core.Keyword(null,"ref","ref",1289896967),ref,new cljs.core.Keyword(null,"value","value",305978217),composed,new cljs.core.Keyword(null,"readonly","readonly",-1101398934),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__76510,G__76531,G__76532,ref,vec__76530,variant_name,composed,c__21067__auto__,size__21068__auto__,b__76511,s__76509__$2,temp__4126__auto__,G__76506,composed_variants,___$1,owner,source_article_sentences,map76448,validate__837__auto__,ufv__,output_schema76450,input_schema76451,input_checker76452,output_checker76453,vec__76446,opts__24583__auto__){
return (function (){var G__76537 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,ref);G__76537.focus();
G__76537.select();
return G__76537;
});})(i__76510,G__76531,G__76532,ref,vec__76530,variant_name,composed,c__21067__auto__,size__21068__auto__,b__76511,s__76509__$2,temp__4126__auto__,G__76506,composed_variants,___$1,owner,source_article_sentences,map76448,validate__837__auto__,ufv__,output_schema76450,input_schema76451,input_checker76452,output_checker76453,vec__76446,opts__24583__auto__))
], null)));return React.DOM.div(G__76531,G__76532,G__76533);
})());
{
var G__76550 = (i__76510 + (1));
i__76510 = G__76550;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__76511),iter__76508(cljs.core.chunk_rest(s__76509__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__76511),null);
}
} else
{var vec__76538 = cljs.core.first(s__76509__$2);var variant_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76538,(0),null);var composed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76538,(1),null);var ref = ("output-article-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant_name));return cljs.core.cons((function (){var G__76539 = {"className": "composed-variant"};var G__76540 = (function (){var G__76542 = null;var G__76543 = "Variant ";var G__76544 = sablono.interpreter.interpret(variant_name);return React.DOM.h1(G__76542,G__76543,G__76544);
})();var G__76541 = sablono.interpreter.interpret(om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"class","class",-2030961996),"source-article",new cljs.core.Keyword(null,"ref","ref",1289896967),ref,new cljs.core.Keyword(null,"value","value",305978217),composed,new cljs.core.Keyword(null,"readonly","readonly",-1101398934),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__76539,G__76540,ref,vec__76538,variant_name,composed,s__76509__$2,temp__4126__auto__,G__76506,composed_variants,___$1,owner,source_article_sentences,map76448,validate__837__auto__,ufv__,output_schema76450,input_schema76451,input_checker76452,output_checker76453,vec__76446,opts__24583__auto__){
return (function (){var G__76545 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,ref);G__76545.focus();
G__76545.select();
return G__76545;
});})(G__76539,G__76540,ref,vec__76538,variant_name,composed,s__76509__$2,temp__4126__auto__,G__76506,composed_variants,___$1,owner,source_article_sentences,map76448,validate__837__auto__,ufv__,output_schema76450,input_schema76451,input_checker76452,output_checker76453,vec__76446,opts__24583__auto__))
], null)));return React.DOM.div(G__76539,G__76540,G__76541);
})(),iter__76508(cljs.core.rest(s__76509__$2)));
}
} else
{return null;
}
break;
}
});})(G__76506,composed_variants,___$1,owner,source_article_sentences,map76448,validate__837__auto__,ufv__,output_schema76450,input_schema76451,input_checker76452,output_checker76453,vec__76446,opts__24583__auto__))
,null,null));
});})(G__76506,composed_variants,___$1,owner,source_article_sentences,map76448,validate__837__auto__,ufv__,output_schema76450,input_schema76451,input_checker76452,output_checker76453,vec__76446,opts__24583__auto__))
;return iter__21069__auto__(composed_variants);
})());return React.DOM.div(G__76506,G__76507);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No variants."], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs76505))?sablono.interpreter.attributes(attrs76505):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs76505))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs76505)], null))));
});})(owner,source_article_sentences,map76448,validate__837__auto__,ufv__,output_schema76450,input_schema76451,input_checker76452,output_checker76453,vec__76446,opts__24583__auto__))
;
stuttaford.articles.t76502.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,source_article_sentences,map76448,validate__837__auto__,ufv__,output_schema76450,input_schema76451,input_checker76452,output_checker76453,vec__76446,opts__24583__auto__){
return (function (_76504){var self__ = this;
var _76504__$1 = this;return self__.meta76503;
});})(owner,source_article_sentences,map76448,validate__837__auto__,ufv__,output_schema76450,input_schema76451,input_checker76452,output_checker76453,vec__76446,opts__24583__auto__))
;
stuttaford.articles.t76502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,source_article_sentences,map76448,validate__837__auto__,ufv__,output_schema76450,input_schema76451,input_checker76452,output_checker76453,vec__76446,opts__24583__auto__){
return (function (_76504,meta76503__$1){var self__ = this;
var _76504__$1 = this;return (new stuttaford.articles.t76502(self__.output_schema76450,self__.opts__24583__auto__,self__.owner76342,self__.owner,self__.G__76454,self__.fnk76449,self__.output_checker76453,self__.input_schema76451,self__.vec__76446,self__.data__24582__auto__,self__.p__76344,self__.source_article_sentences,self__.validate__837__auto__,self__.ufv__,self__.map76448,self__.input_checker76452,self__.output_articles,self__.map76447,meta76503__$1));
});})(owner,source_article_sentences,map76448,validate__837__auto__,ufv__,output_schema76450,input_schema76451,input_checker76452,output_checker76453,vec__76446,opts__24583__auto__))
;
stuttaford.articles.__GT_t76502 = ((function (owner,source_article_sentences,map76448,validate__837__auto__,ufv__,output_schema76450,input_schema76451,input_checker76452,output_checker76453,vec__76446,opts__24583__auto__){
return (function __GT_t76502(output_schema76450__$1,opts__24583__auto____$1,owner76342__$1,owner__$1,G__76454__$1,fnk76449__$1,output_checker76453__$1,input_schema76451__$1,vec__76446__$1,data__24582__auto____$1,p__76344__$1,source_article_sentences__$1,validate__837__auto____$1,ufv____$1,map76448__$1,input_checker76452__$1,output_articles__$1,map76447__$1,meta76503){return (new stuttaford.articles.t76502(output_schema76450__$1,opts__24583__auto____$1,owner76342__$1,owner__$1,G__76454__$1,fnk76449__$1,output_checker76453__$1,input_schema76451__$1,vec__76446__$1,data__24582__auto____$1,p__76344__$1,source_article_sentences__$1,validate__837__auto____$1,ufv____$1,map76448__$1,input_checker76452__$1,output_articles__$1,map76447__$1,meta76503));
});})(owner,source_article_sentences,map76448,validate__837__auto__,ufv__,output_schema76450,input_schema76451,input_checker76452,output_checker76453,vec__76446,opts__24583__auto__))
;
}
return (new stuttaford.articles.t76502(output_schema76450,opts__24583__auto__,owner76342,owner,G__76454,fnk76449,output_checker76453,input_schema76451,vec__76446,data__24582__auto__,p__76344,source_article_sentences,validate__837__auto__,ufv__,map76448,input_checker76452,output_articles,map76447,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___76551 = (function (){var G__76546 = o__840__auto__;return (output_checker76453.cljs$core$IFn$_invoke$arity$1 ? output_checker76453.cljs$core$IFn$_invoke$arity$1(G__76546) : output_checker76453.call(null,G__76546));
})();if(cljs.core.truth_(temp__4126__auto___76551))
{var error__839__auto___76552 = temp__4126__auto___76551;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk76449","fnk76449",-256729657,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___76552], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema76450,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___76552], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema76450,input_schema76451,input_checker76452,output_checker76453,vec__76446,opts__24583__auto__))
,schema.core.make_fn_schema(output_schema76450,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema76451], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24583__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner76342,new cljs.core.Keyword(null,"data","data",-232669377),data__24582__auto__], null));
};
var output_articles = function (data__24582__auto__,owner76342,var_args){
var p__76344 = null;if (arguments.length > 2) {
  p__76344 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return output_articles__delegate.call(this,data__24582__auto__,owner76342,p__76344);};
output_articles.cljs$lang$maxFixedArity = 2;
output_articles.cljs$lang$applyTo = (function (arglist__76553){
var data__24582__auto__ = cljs.core.first(arglist__76553);
arglist__76553 = cljs.core.next(arglist__76553);
var owner76342 = cljs.core.first(arglist__76553);
var p__76344 = cljs.core.rest(arglist__76553);
return output_articles__delegate(data__24582__auto__,owner76342,p__76344);
});
output_articles.cljs$core$IFn$_invoke$arity$variadic = output_articles__delegate;
return output_articles;
})()
;
stuttaford.articles.__GT_output_articles = (function() {
var __GT_output_articles = null;
var __GT_output_articles__1 = (function (cursor__24551__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.output_articles,cursor__24551__auto__);
});
var __GT_output_articles__2 = (function (cursor__24551__auto__,m76343){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.articles.output_articles,cursor__24551__auto__,m76343);
});
__GT_output_articles = function(cursor__24551__auto__,m76343){
switch(arguments.length){
case 1:
return __GT_output_articles__1.call(this,cursor__24551__auto__);
case 2:
return __GT_output_articles__2.call(this,cursor__24551__auto__,m76343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_output_articles.cljs$core$IFn$_invoke$arity$1 = __GT_output_articles__1;
__GT_output_articles.cljs$core$IFn$_invoke$arity$2 = __GT_output_articles__2;
return __GT_output_articles;
})()
;
/**
* @param {...*} var_args
*/
stuttaford.articles.top_nav = (function() { 
var top_nav__delegate = function (data__24582__auto__,owner76554,p__76556){var vec__76658 = p__76556;var opts__24583__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76658,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema76662 = schema.core.Any;var input_schema76663 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359)),schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map76659","map76659",-402221963,null))], null);var input_checker76664 = schema.core.checker(input_schema76663);var output_checker76665 = schema.core.checker(output_schema76662);return schema.core.schematize_fn(((function (ufv__,output_schema76662,input_schema76663,input_checker76664,output_checker76665,vec__76658,opts__24583__auto__){
return (function fnk76661(G__76666){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___76759 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__76666], null);var temp__4126__auto___76760 = (function (){var G__76713 = args__838__auto___76759;return (input_checker76664.cljs$core$IFn$_invoke$arity$1 ? input_checker76664.cljs$core$IFn$_invoke$arity$1(G__76713) : input_checker76664.call(null,G__76713));
})();if(cljs.core.truth_(temp__4126__auto___76760))
{var error__839__auto___76761 = temp__4126__auto___76760;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk76661","fnk76661",-1211082952,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___76761], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema76663,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___76759,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___76761], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map76659 = G__76666;while(true){
if(cljs.core.map_QMARK_(map76659))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map76659], 0))));
}
var data = plumbing.fnk.schema.safe_get(map76659,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var source_article_sentences = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map76659,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map76660 = plumbing.fnk.schema.safe_get(map76659,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var nav_items = plumbing.fnk.schema.safe_get(map76660,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));if(typeof stuttaford.articles.t76714 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.articles.t76714 = (function (opts__24583__auto__,owner,input_schema76663,view,input_checker76664,data,nav_items,p__76556,data__24582__auto__,output_schema76662,output_checker76665,top_nav,map76659,source_article_sentences,vec__76658,fnk76661,owner76554,validate__837__auto__,G__76666,ufv__,map76660,meta76715){
this.opts__24583__auto__ = opts__24583__auto__;
this.owner = owner;
this.input_schema76663 = input_schema76663;
this.view = view;
this.input_checker76664 = input_checker76664;
this.data = data;
this.nav_items = nav_items;
this.p__76556 = p__76556;
this.data__24582__auto__ = data__24582__auto__;
this.output_schema76662 = output_schema76662;
this.output_checker76665 = output_checker76665;
this.top_nav = top_nav;
this.map76659 = map76659;
this.source_article_sentences = source_article_sentences;
this.vec__76658 = vec__76658;
this.fnk76661 = fnk76661;
this.owner76554 = owner76554;
this.validate__837__auto__ = validate__837__auto__;
this.G__76666 = G__76666;
this.ufv__ = ufv__;
this.map76660 = map76660;
this.meta76715 = meta76715;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.articles.t76714.cljs$lang$type = true;
stuttaford.articles.t76714.cljs$lang$ctorStr = "stuttaford.articles/t76714";
stuttaford.articles.t76714.cljs$lang$ctorPrWriter = ((function (nav_items,map76660,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76662,input_schema76663,input_checker76664,output_checker76665,vec__76658,opts__24583__auto__){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"stuttaford.articles/t76714");
});})(nav_items,map76660,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76662,input_schema76663,input_checker76664,output_checker76665,vec__76658,opts__24583__auto__))
;
stuttaford.articles.t76714.prototype.om$core$IDisplayName$ = true;
stuttaford.articles.t76714.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (nav_items,map76660,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76662,input_schema76663,input_checker76664,output_checker76665,vec__76658,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "top-nav";
});})(nav_items,map76660,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76662,input_schema76663,input_checker76664,output_checker76665,vec__76658,opts__24583__auto__))
;
stuttaford.articles.t76714.prototype.om$core$IRenderState$ = true;
stuttaford.articles.t76714.prototype.om$core$IRenderState$render_state$arity$2 = ((function (nav_items,map76660,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76662,input_schema76663,input_checker76664,output_checker76665,vec__76658,opts__24583__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var G__76719 = {"className": "articles"};var G__76720 = "ARTICLES";return React.DOM.div(G__76719,G__76720);
})(),om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__21069__auto__ = ((function (___$1,nav_items,map76660,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76662,input_schema76663,input_checker76664,output_checker76665,vec__76658,opts__24583__auto__){
return (function iter__76721(s__76722){return (new cljs.core.LazySeq(null,((function (___$1,nav_items,map76660,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76662,input_schema76663,input_checker76664,output_checker76665,vec__76658,opts__24583__auto__){
return (function (){var s__76722__$1 = s__76722;while(true){
var temp__4126__auto__ = cljs.core.seq(s__76722__$1);if(temp__4126__auto__)
{var s__76722__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__76722__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__76722__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__76724 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__76723 = (0);while(true){
if((i__76723 < size__21068__auto__))
{var vec__76733 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__76723);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76733,(0),null);var vec__76734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76733,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76734,(0),null);cljs.core.chunk_append(b__76724,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__76735 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__76723,vec__76733,id,vec__76734,label,c__21067__auto__,size__21068__auto__,b__76724,s__76722__$2,temp__4126__auto__,___$1,nav_items,map76660,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76662,input_schema76663,input_checker76664,output_checker76665,vec__76658,opts__24583__auto__){
return (function (){return stuttaford.articles.do_action_BANG_(self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__76723,vec__76733,id,vec__76734,label,c__21067__auto__,size__21068__auto__,b__76724,s__76722__$2,temp__4126__auto__,___$1,nav_items,map76660,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76662,input_schema76663,input_checker76664,output_checker76665,vec__76658,opts__24583__auto__))
], null);var G__76735__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76735,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__76735);return G__76735__$1;
})(),cljs.core.array_seq([label], 0)));
{
var G__76762 = (i__76723 + (1));
i__76723 = G__76762;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__76724),iter__76721(cljs.core.chunk_rest(s__76722__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__76724),null);
}
} else
{var vec__76736 = cljs.core.first(s__76722__$2);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76736,(0),null);var vec__76737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76736,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76737,(0),null);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__76738 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__76736,id,vec__76737,label,s__76722__$2,temp__4126__auto__,___$1,nav_items,map76660,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76662,input_schema76663,input_checker76664,output_checker76665,vec__76658,opts__24583__auto__){
return (function (){return stuttaford.articles.do_action_BANG_(self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(vec__76736,id,vec__76737,label,s__76722__$2,temp__4126__auto__,___$1,nav_items,map76660,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76662,input_schema76663,input_checker76664,output_checker76665,vec__76658,opts__24583__auto__))
], null);var G__76738__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76738,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__76738);return G__76738__$1;
})(),cljs.core.array_seq([label], 0)),iter__76721(cljs.core.rest(s__76722__$2)));
}
} else
{return null;
}
break;
}
});})(___$1,nav_items,map76660,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76662,input_schema76663,input_checker76664,output_checker76665,vec__76658,opts__24583__auto__))
,null,null));
});})(___$1,nav_items,map76660,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76662,input_schema76663,input_checker76664,output_checker76665,vec__76658,opts__24583__auto__))
;return iter__21069__auto__(self__.nav_items);
})(),((cljs.core.seq(self__.source_article_sentences))?cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__76739 = {"className": "variants-status"};var G__76740 = "Status: ";var G__76741 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__21069__auto__ = ((function (G__76739,G__76740,___$1,nav_items,map76660,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76662,input_schema76663,input_checker76664,output_checker76665,vec__76658,opts__24583__auto__){
return (function iter__76742(s__76743){return (new cljs.core.LazySeq(null,((function (G__76739,G__76740,___$1,nav_items,map76660,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76662,input_schema76663,input_checker76664,output_checker76665,vec__76658,opts__24583__auto__){
return (function (){var s__76743__$1 = s__76743;while(true){
var temp__4126__auto__ = cljs.core.seq(s__76743__$1);if(temp__4126__auto__)
{var s__76743__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__76743__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__76743__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__76745 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__76744 = (0);while(true){
if((i__76744 < size__21068__auto__))
{var variant = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__76744);var variant_name = cljs.core.name(variant);cljs.core.chunk_append(b__76745,sablono.interpreter.interpret(om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),((stuttaford.articles.variant_is_complete_QMARK_(self__.source_article_sentences,variant))?"success":"warning")], null),cljs.core.array_seq([variant_name], 0))));
{
var G__76763 = (i__76744 + (1));
i__76744 = G__76763;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__76745),iter__76742(cljs.core.chunk_rest(s__76743__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__76745),null);
}
} else
{var variant = cljs.core.first(s__76743__$2);var variant_name = cljs.core.name(variant);return cljs.core.cons(sablono.interpreter.interpret(om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),((stuttaford.articles.variant_is_complete_QMARK_(self__.source_article_sentences,variant))?"success":"warning")], null),cljs.core.array_seq([variant_name], 0))),iter__76742(cljs.core.rest(s__76743__$2)));
}
} else
{return null;
}
break;
}
});})(G__76739,G__76740,___$1,nav_items,map76660,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76662,input_schema76663,input_checker76664,output_checker76665,vec__76658,opts__24583__auto__))
,null,null));
});})(G__76739,G__76740,___$1,nav_items,map76660,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76662,input_schema76663,input_checker76664,output_checker76665,vec__76658,opts__24583__auto__))
;return iter__21069__auto__(stuttaford.articles.variant_names);
})());return React.DOM.div(G__76739,G__76740,G__76741);
})(),(function (){var G__76748 = {"className": "word-counts"};var G__76749 = "Words counts";var G__76750 = sablono.interpreter.interpret(om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([stuttaford.articles.word_count(self__.data,new cljs.core.Keyword(null,"source","source",-433931539))], 0)));var G__76751 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__21069__auto__ = ((function (G__76748,G__76749,G__76750,___$1,nav_items,map76660,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76662,input_schema76663,input_checker76664,output_checker76665,vec__76658,opts__24583__auto__){
return (function iter__76752(s__76753){return (new cljs.core.LazySeq(null,((function (G__76748,G__76749,G__76750,___$1,nav_items,map76660,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76662,input_schema76663,input_checker76664,output_checker76665,vec__76658,opts__24583__auto__){
return (function (){var s__76753__$1 = s__76753;while(true){
var temp__4126__auto__ = cljs.core.seq(s__76753__$1);if(temp__4126__auto__)
{var s__76753__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__76753__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__76753__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__76755 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__76754 = (0);while(true){
if((i__76754 < size__21068__auto__))
{var variant = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__76754);var variant_name = cljs.core.name(variant);cljs.core.chunk_append(b__76755,sablono.interpreter.interpret(om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([stuttaford.articles.word_count(self__.data,variant)], 0))));
{
var G__76764 = (i__76754 + (1));
i__76754 = G__76764;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__76755),iter__76752(cljs.core.chunk_rest(s__76753__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__76755),null);
}
} else
{var variant = cljs.core.first(s__76753__$2);var variant_name = cljs.core.name(variant);return cljs.core.cons(sablono.interpreter.interpret(om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([stuttaford.articles.word_count(self__.data,variant)], 0))),iter__76752(cljs.core.rest(s__76753__$2)));
}
} else
{return null;
}
break;
}
});})(G__76748,G__76749,G__76750,___$1,nav_items,map76660,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76662,input_schema76663,input_checker76664,output_checker76665,vec__76658,opts__24583__auto__))
,null,null));
});})(G__76748,G__76749,G__76750,___$1,nav_items,map76660,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76662,input_schema76663,input_checker76664,output_checker76665,vec__76658,opts__24583__auto__))
;return iter__21069__auto__(stuttaford.articles.variant_names);
})());return React.DOM.div(G__76748,G__76749,G__76750,G__76751);
})()], null)):null)], 0))], 0));
});})(nav_items,map76660,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76662,input_schema76663,input_checker76664,output_checker76665,vec__76658,opts__24583__auto__))
;
stuttaford.articles.t76714.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (nav_items,map76660,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76662,input_schema76663,input_checker76664,output_checker76665,vec__76658,opts__24583__auto__){
return (function (_76716){var self__ = this;
var _76716__$1 = this;return self__.meta76715;
});})(nav_items,map76660,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76662,input_schema76663,input_checker76664,output_checker76665,vec__76658,opts__24583__auto__))
;
stuttaford.articles.t76714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (nav_items,map76660,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76662,input_schema76663,input_checker76664,output_checker76665,vec__76658,opts__24583__auto__){
return (function (_76716,meta76715__$1){var self__ = this;
var _76716__$1 = this;return (new stuttaford.articles.t76714(self__.opts__24583__auto__,self__.owner,self__.input_schema76663,self__.view,self__.input_checker76664,self__.data,self__.nav_items,self__.p__76556,self__.data__24582__auto__,self__.output_schema76662,self__.output_checker76665,self__.top_nav,self__.map76659,self__.source_article_sentences,self__.vec__76658,self__.fnk76661,self__.owner76554,self__.validate__837__auto__,self__.G__76666,self__.ufv__,self__.map76660,meta76715__$1));
});})(nav_items,map76660,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76662,input_schema76663,input_checker76664,output_checker76665,vec__76658,opts__24583__auto__))
;
stuttaford.articles.__GT_t76714 = ((function (nav_items,map76660,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76662,input_schema76663,input_checker76664,output_checker76665,vec__76658,opts__24583__auto__){
return (function __GT_t76714(opts__24583__auto____$1,owner__$1,input_schema76663__$1,view__$1,input_checker76664__$1,data__$1,nav_items__$1,p__76556__$1,data__24582__auto____$1,output_schema76662__$1,output_checker76665__$1,top_nav__$1,map76659__$1,source_article_sentences__$1,vec__76658__$1,fnk76661__$1,owner76554__$1,validate__837__auto____$1,G__76666__$1,ufv____$1,map76660__$1,meta76715){return (new stuttaford.articles.t76714(opts__24583__auto____$1,owner__$1,input_schema76663__$1,view__$1,input_checker76664__$1,data__$1,nav_items__$1,p__76556__$1,data__24582__auto____$1,output_schema76662__$1,output_checker76665__$1,top_nav__$1,map76659__$1,source_article_sentences__$1,vec__76658__$1,fnk76661__$1,owner76554__$1,validate__837__auto____$1,G__76666__$1,ufv____$1,map76660__$1,meta76715));
});})(nav_items,map76660,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76662,input_schema76663,input_checker76664,output_checker76665,vec__76658,opts__24583__auto__))
;
}
return (new stuttaford.articles.t76714(opts__24583__auto__,owner,input_schema76663,view,input_checker76664,data,nav_items,p__76556,data__24582__auto__,output_schema76662,output_checker76665,top_nav,map76659,source_article_sentences,vec__76658,fnk76661,owner76554,validate__837__auto__,G__76666,ufv__,map76660,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___76765 = (function (){var G__76758 = o__840__auto__;return (output_checker76665.cljs$core$IFn$_invoke$arity$1 ? output_checker76665.cljs$core$IFn$_invoke$arity$1(G__76758) : output_checker76665.call(null,G__76758));
})();if(cljs.core.truth_(temp__4126__auto___76765))
{var error__839__auto___76766 = temp__4126__auto___76765;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk76661","fnk76661",-1211082952,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___76766], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema76662,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___76766], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema76662,input_schema76663,input_checker76664,output_checker76665,vec__76658,opts__24583__auto__))
,schema.core.make_fn_schema(output_schema76662,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema76663], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24583__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner76554,new cljs.core.Keyword(null,"data","data",-232669377),data__24582__auto__], null));
};
var top_nav = function (data__24582__auto__,owner76554,var_args){
var p__76556 = null;if (arguments.length > 2) {
  p__76556 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return top_nav__delegate.call(this,data__24582__auto__,owner76554,p__76556);};
top_nav.cljs$lang$maxFixedArity = 2;
top_nav.cljs$lang$applyTo = (function (arglist__76767){
var data__24582__auto__ = cljs.core.first(arglist__76767);
arglist__76767 = cljs.core.next(arglist__76767);
var owner76554 = cljs.core.first(arglist__76767);
var p__76556 = cljs.core.rest(arglist__76767);
return top_nav__delegate(data__24582__auto__,owner76554,p__76556);
});
top_nav.cljs$core$IFn$_invoke$arity$variadic = top_nav__delegate;
return top_nav;
})()
;
stuttaford.articles.__GT_top_nav = (function() {
var __GT_top_nav = null;
var __GT_top_nav__1 = (function (cursor__24551__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.top_nav,cursor__24551__auto__);
});
var __GT_top_nav__2 = (function (cursor__24551__auto__,m76555){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.articles.top_nav,cursor__24551__auto__,m76555);
});
__GT_top_nav = function(cursor__24551__auto__,m76555){
switch(arguments.length){
case 1:
return __GT_top_nav__1.call(this,cursor__24551__auto__);
case 2:
return __GT_top_nav__2.call(this,cursor__24551__auto__,m76555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_top_nav.cljs$core$IFn$_invoke$arity$1 = __GT_top_nav__1;
__GT_top_nav.cljs$core$IFn$_invoke$arity$2 = __GT_top_nav__2;
return __GT_top_nav;
})()
;
stuttaford.articles.nav_items = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source-article","source-article",-1846600440),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Source",stuttaford.articles.source_article], null),new cljs.core.Keyword(null,"rewrite-articles","rewrite-articles",-885497564),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Rewrite",stuttaford.articles.rewrite_articles], null),new cljs.core.Keyword(null,"output-articles","output-articles",281495288),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Output",stuttaford.articles.output_articles], null)], null);
/**
* @param {...*} var_args
*/
stuttaford.articles.app_view = (function() { 
var app_view__delegate = function (data__24582__auto__,owner76768,p__76770){var vec__76889 = p__76770;var opts__24583__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76889,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema76892 = schema.core.Any;var input_schema76893 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359)),schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map76890","map76890",1731051434,null))], null);var input_checker76894 = schema.core.checker(input_schema76893);var output_checker76895 = schema.core.checker(output_schema76892);return schema.core.schematize_fn(((function (ufv__,output_schema76892,input_schema76893,input_checker76894,output_checker76895,vec__76889,opts__24583__auto__){
return (function fnk76891(G__76896){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___77007 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__76896], null);var temp__4126__auto___77008 = (function (){var G__76952 = args__838__auto___77007;return (input_checker76894.cljs$core$IFn$_invoke$arity$1 ? input_checker76894.cljs$core$IFn$_invoke$arity$1(G__76952) : input_checker76894.call(null,G__76952));
})();if(cljs.core.truth_(temp__4126__auto___77008))
{var error__839__auto___77009 = temp__4126__auto___77008;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk76891","fnk76891",-315811152,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77009], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema76893,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___77007,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77009], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map76890 = G__76896;while(true){
if(cljs.core.map_QMARK_(map76890))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map76890], 0))));
}
var data = plumbing.fnk.schema.safe_get(map76890,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var source_article_sentences = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map76890,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.articles.t76953 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.articles.t76953 = (function (app_view,opts__24583__auto__,output_checker76895,owner,vec__76889,view,data,map76890,input_checker76894,owner76768,output_schema76892,input_schema76893,fnk76891,data__24582__auto__,G__76896,source_article_sentences,validate__837__auto__,p__76770,ufv__,meta76954){
this.app_view = app_view;
this.opts__24583__auto__ = opts__24583__auto__;
this.output_checker76895 = output_checker76895;
this.owner = owner;
this.vec__76889 = vec__76889;
this.view = view;
this.data = data;
this.map76890 = map76890;
this.input_checker76894 = input_checker76894;
this.owner76768 = owner76768;
this.output_schema76892 = output_schema76892;
this.input_schema76893 = input_schema76893;
this.fnk76891 = fnk76891;
this.data__24582__auto__ = data__24582__auto__;
this.G__76896 = G__76896;
this.source_article_sentences = source_article_sentences;
this.validate__837__auto__ = validate__837__auto__;
this.p__76770 = p__76770;
this.ufv__ = ufv__;
this.meta76954 = meta76954;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.articles.t76953.cljs$lang$type = true;
stuttaford.articles.t76953.cljs$lang$ctorStr = "stuttaford.articles/t76953";
stuttaford.articles.t76953.cljs$lang$ctorPrWriter = ((function (owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76892,input_schema76893,input_checker76894,output_checker76895,vec__76889,opts__24583__auto__){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"stuttaford.articles/t76953");
});})(owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76892,input_schema76893,input_checker76894,output_checker76895,vec__76889,opts__24583__auto__))
;
stuttaford.articles.t76953.prototype.om$core$IDisplayName$ = true;
stuttaford.articles.t76953.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76892,input_schema76893,input_checker76894,output_checker76895,vec__76889,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "app-view";
});})(owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76892,input_schema76893,input_checker76894,output_checker76895,vec__76889,opts__24583__auto__))
;
stuttaford.articles.t76953.prototype.om$core$IRenderState$ = true;
stuttaford.articles.t76953.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76892,input_schema76893,input_checker76894,output_checker76895,vec__76889,opts__24583__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret((function (){var vec__76956 = (function (){var G__76957 = stuttaford.articles.nav_items;return (self__.view.cljs$core$IFn$_invoke$arity$1 ? self__.view.cljs$core$IFn$_invoke$arity$1(G__76957) : self__.view.call(null,G__76957));
})();var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76956,(0),null);var view_component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76956,(1),null);return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),stuttaford.articles.__GT_top_nav.cljs$core$IFn$_invoke$arity$2(self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),stuttaford.articles.nav_items], null)], null))], null),cljs.core.array_seq([(cljs.core.truth_(view_component)?om.core.build.cljs$core$IFn$_invoke$arity$2(view_component,self__.data):(function (){var G__76960 = null;return React.DOM.div(G__76960);
})())], 0));
})());
});})(owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76892,input_schema76893,input_checker76894,output_checker76895,vec__76889,opts__24583__auto__))
;
stuttaford.articles.t76953.prototype.om$core$IDidMount$ = true;
stuttaford.articles.t76953.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76892,input_schema76893,input_checker76894,output_checker76895,vec__76889,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return null;
});})(owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76892,input_schema76893,input_checker76894,output_checker76895,vec__76889,opts__24583__auto__))
;
stuttaford.articles.t76953.prototype.om$core$IWillUnmount$ = true;
stuttaford.articles.t76953.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76892,input_schema76893,input_checker76894,output_checker76895,vec__76889,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.close_BANG_(stuttaford.om.common.control_chan(self__.owner));
});})(owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76892,input_schema76893,input_checker76894,output_checker76895,vec__76889,opts__24583__auto__))
;
stuttaford.articles.t76953.prototype.om$core$IWillMount$ = true;
stuttaford.articles.t76953.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76892,input_schema76893,input_checker76894,output_checker76895,vec__76889,opts__24583__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var c__23127__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23127__auto__,c,___$1,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76892,input_schema76893,input_checker76894,output_checker76895,vec__76889,opts__24583__auto__){
return (function (){var f__23128__auto__ = (function (){var switch__23112__auto__ = ((function (c__23127__auto__,c,___$1,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76892,input_schema76893,input_checker76894,output_checker76895,vec__76889,opts__24583__auto__){
return (function (state_76981){var state_val_76982 = (state_76981[(1)]);if((state_val_76982 === (7)))
{var inst_76964 = (state_76981[(7)]);var inst_76964__$1 = (state_76981[(2)]);var state_76981__$1 = (function (){var statearr_76983 = state_76981;(statearr_76983[(7)] = inst_76964__$1);
return statearr_76983;
})();if(cljs.core.truth_(inst_76964__$1))
{var statearr_76984_77010 = state_76981__$1;(statearr_76984_77010[(1)] = (8));
} else
{var statearr_76985_77011 = state_76981__$1;(statearr_76985_77011[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76982 === (1)))
{var state_76981__$1 = state_76981;var statearr_76986_77012 = state_76981__$1;(statearr_76986_77012[(2)] = null);
(statearr_76986_77012[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76982 === (4)))
{var state_76981__$1 = state_76981;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76981__$1,(7),c);
} else
{if((state_val_76982 === (6)))
{var inst_76977 = (state_76981[(2)]);var state_76981__$1 = state_76981;var statearr_76987_77013 = state_76981__$1;(statearr_76987_77013[(2)] = inst_76977);
(statearr_76987_77013[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76982 === (3)))
{var inst_76979 = (state_76981[(2)]);var state_76981__$1 = state_76981;return cljs.core.async.impl.ioc_helpers.return_chan(state_76981__$1,inst_76979);
} else
{if((state_val_76982 === (2)))
{var state_76981__$1 = state_76981;var statearr_76988_77014 = state_76981__$1;(statearr_76988_77014[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76982 === (9)))
{var state_76981__$1 = state_76981;var statearr_76990_77015 = state_76981__$1;(statearr_76990_77015[(2)] = null);
(statearr_76990_77015[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76982 === (5)))
{var state_76981__$1 = state_76981;var statearr_76991_77016 = state_76981__$1;(statearr_76991_77016[(2)] = null);
(statearr_76991_77016[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76982 === (10)))
{var inst_76973 = (state_76981[(2)]);var state_76981__$1 = (function (){var statearr_76992 = state_76981;(statearr_76992[(8)] = inst_76973);
return statearr_76992;
})();var statearr_76993_77017 = state_76981__$1;(statearr_76993_77017[(2)] = null);
(statearr_76993_77017[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_76982 === (8)))
{var inst_76964 = (state_76981[(7)]);var inst_76967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_76964,(0),null);var inst_76968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_76964,(1),null);var inst_76969 = stuttaford.om.common.config.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"debug?","debug?",-1831756173));var inst_76970 = (function (){var G__76994 = self__.data;var G__76995 = inst_76967;var G__76996 = inst_76968;var G__76997 = inst_76969;return (stuttaford.articles.perform_action.cljs$core$IFn$_invoke$arity$4 ? stuttaford.articles.perform_action.cljs$core$IFn$_invoke$arity$4(G__76994,G__76995,G__76996,G__76997) : stuttaford.articles.perform_action.call(null,G__76994,G__76995,G__76996,G__76997));
})();var state_76981__$1 = state_76981;var statearr_76998_77018 = state_76981__$1;(statearr_76998_77018[(2)] = inst_76970);
(statearr_76998_77018[(1)] = (10));
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
});})(c__23127__auto__,c,___$1,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76892,input_schema76893,input_checker76894,output_checker76895,vec__76889,opts__24583__auto__))
;return ((function (switch__23112__auto__,c__23127__auto__,c,___$1,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76892,input_schema76893,input_checker76894,output_checker76895,vec__76889,opts__24583__auto__){
return (function() {
var state_machine__23113__auto__ = null;
var state_machine__23113__auto____0 = (function (){var statearr_77002 = [null,null,null,null,null,null,null,null,null];(statearr_77002[(0)] = state_machine__23113__auto__);
(statearr_77002[(1)] = (1));
return statearr_77002;
});
var state_machine__23113__auto____1 = (function (state_76981){while(true){
var ret_value__23114__auto__ = (function (){try{while(true){
var result__23115__auto__ = switch__23112__auto__(state_76981);if(cljs.core.keyword_identical_QMARK_(result__23115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__23115__auto__;
}
break;
}
}catch (e77003){if((e77003 instanceof Object))
{var ex__23116__auto__ = e77003;var statearr_77004_77019 = state_76981;(statearr_77004_77019[(5)] = ex__23116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_76981);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e77003;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__23114__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__77020 = state_76981;
state_76981 = G__77020;
continue;
}
} else
{return ret_value__23114__auto__;
}
break;
}
});
state_machine__23113__auto__ = function(state_76981){
switch(arguments.length){
case 0:
return state_machine__23113__auto____0.call(this);
case 1:
return state_machine__23113__auto____1.call(this,state_76981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23113__auto____0;
state_machine__23113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23113__auto____1;
return state_machine__23113__auto__;
})()
;})(switch__23112__auto__,c__23127__auto__,c,___$1,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76892,input_schema76893,input_checker76894,output_checker76895,vec__76889,opts__24583__auto__))
})();var state__23129__auto__ = (function (){var statearr_77005 = (function (){return (f__23128__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23128__auto__.cljs$core$IFn$_invoke$arity$0() : f__23128__auto__.call(null));
})();(statearr_77005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23127__auto__);
return statearr_77005;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23129__auto__);
});})(c__23127__auto__,c,___$1,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76892,input_schema76893,input_checker76894,output_checker76895,vec__76889,opts__24583__auto__))
);
return c__23127__auto__;
});})(owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76892,input_schema76893,input_checker76894,output_checker76895,vec__76889,opts__24583__auto__))
;
stuttaford.articles.t76953.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76892,input_schema76893,input_checker76894,output_checker76895,vec__76889,opts__24583__auto__){
return (function (_76955){var self__ = this;
var _76955__$1 = this;return self__.meta76954;
});})(owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76892,input_schema76893,input_checker76894,output_checker76895,vec__76889,opts__24583__auto__))
;
stuttaford.articles.t76953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76892,input_schema76893,input_checker76894,output_checker76895,vec__76889,opts__24583__auto__){
return (function (_76955,meta76954__$1){var self__ = this;
var _76955__$1 = this;return (new stuttaford.articles.t76953(self__.app_view,self__.opts__24583__auto__,self__.output_checker76895,self__.owner,self__.vec__76889,self__.view,self__.data,self__.map76890,self__.input_checker76894,self__.owner76768,self__.output_schema76892,self__.input_schema76893,self__.fnk76891,self__.data__24582__auto__,self__.G__76896,self__.source_article_sentences,self__.validate__837__auto__,self__.p__76770,self__.ufv__,meta76954__$1));
});})(owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76892,input_schema76893,input_checker76894,output_checker76895,vec__76889,opts__24583__auto__))
;
stuttaford.articles.__GT_t76953 = ((function (owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76892,input_schema76893,input_checker76894,output_checker76895,vec__76889,opts__24583__auto__){
return (function __GT_t76953(app_view__$1,opts__24583__auto____$1,output_checker76895__$1,owner__$1,vec__76889__$1,view__$1,data__$1,map76890__$1,input_checker76894__$1,owner76768__$1,output_schema76892__$1,input_schema76893__$1,fnk76891__$1,data__24582__auto____$1,G__76896__$1,source_article_sentences__$1,validate__837__auto____$1,p__76770__$1,ufv____$1,meta76954){return (new stuttaford.articles.t76953(app_view__$1,opts__24583__auto____$1,output_checker76895__$1,owner__$1,vec__76889__$1,view__$1,data__$1,map76890__$1,input_checker76894__$1,owner76768__$1,output_schema76892__$1,input_schema76893__$1,fnk76891__$1,data__24582__auto____$1,G__76896__$1,source_article_sentences__$1,validate__837__auto____$1,p__76770__$1,ufv____$1,meta76954));
});})(owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema76892,input_schema76893,input_checker76894,output_checker76895,vec__76889,opts__24583__auto__))
;
}
return (new stuttaford.articles.t76953(app_view,opts__24583__auto__,output_checker76895,owner,vec__76889,view,data,map76890,input_checker76894,owner76768,output_schema76892,input_schema76893,fnk76891,data__24582__auto__,G__76896,source_article_sentences,validate__837__auto__,p__76770,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___77021 = (function (){var G__77006 = o__840__auto__;return (output_checker76895.cljs$core$IFn$_invoke$arity$1 ? output_checker76895.cljs$core$IFn$_invoke$arity$1(G__77006) : output_checker76895.call(null,G__77006));
})();if(cljs.core.truth_(temp__4126__auto___77021))
{var error__839__auto___77022 = temp__4126__auto___77021;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk76891","fnk76891",-315811152,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___77022], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema76892,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___77022], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema76892,input_schema76893,input_checker76894,output_checker76895,vec__76889,opts__24583__auto__))
,schema.core.make_fn_schema(output_schema76892,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema76893], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24583__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner76768,new cljs.core.Keyword(null,"data","data",-232669377),data__24582__auto__], null));
};
var app_view = function (data__24582__auto__,owner76768,var_args){
var p__76770 = null;if (arguments.length > 2) {
  p__76770 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_view__delegate.call(this,data__24582__auto__,owner76768,p__76770);};
app_view.cljs$lang$maxFixedArity = 2;
app_view.cljs$lang$applyTo = (function (arglist__77023){
var data__24582__auto__ = cljs.core.first(arglist__77023);
arglist__77023 = cljs.core.next(arglist__77023);
var owner76768 = cljs.core.first(arglist__77023);
var p__76770 = cljs.core.rest(arglist__77023);
return app_view__delegate(data__24582__auto__,owner76768,p__76770);
});
app_view.cljs$core$IFn$_invoke$arity$variadic = app_view__delegate;
return app_view;
})()
;
stuttaford.articles.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__24551__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.app_view,cursor__24551__auto__);
});
var __GT_app_view__2 = (function (cursor__24551__auto__,m76769){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.articles.app_view,cursor__24551__auto__,m76769);
});
__GT_app_view = function(cursor__24551__auto__,m76769){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__24551__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__24551__auto__,m76769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_app_view.cljs$core$IFn$_invoke$arity$1 = __GT_app_view__1;
__GT_app_view.cljs$core$IFn$_invoke$arity$2 = __GT_app_view__2;
return __GT_app_view;
})()
;
stuttaford.articles.init = (function init(app_id,state_id,debug_QMARK_){return stuttaford.om.common.start.cljs$core$IFn$_invoke$arity$5(app_id,state_id,stuttaford.articles.app_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"control-chan","control-chan",-1773911405),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0()], null)], null),debug_QMARK_);
});
goog.exportSymbol('stuttaford.articles.init', stuttaford.articles.init);
//# sourceMappingURL=articles.js.map