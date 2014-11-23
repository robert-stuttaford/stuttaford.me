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
stuttaford.articles.paragraph_break_variants = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__21074__auto__ = (function iter__39956(s__39957){return (new cljs.core.LazySeq(null,(function (){var s__39957__$1 = s__39957;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39957__$1);if(temp__4126__auto__)
{var s__39957__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39957__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__39957__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__39959 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__39958 = (0);while(true){
if((i__39958 < size__21073__auto__))
{var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__39958);cljs.core.chunk_append(b__39959,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,"\n\n"], null));
{
var G__39962 = (i__39958 + (1));
i__39958 = G__39962;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39959),iter__39956(cljs.core.chunk_rest(s__39957__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39959),null);
}
} else
{var n = cljs.core.first(s__39957__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,"\n\n"], null),iter__39956(cljs.core.rest(s__39957__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__21074__auto__(stuttaford.articles.variant_names);
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
stuttaford.articles.perform_action = (function (){var method_table__21360__auto__ = (function (){var G__39963 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__39963) : cljs.core.atom.call(null,G__39963));
})();var prefer_table__21361__auto__ = (function (){var G__39964 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__39964) : cljs.core.atom.call(null,G__39964));
})();var method_cache__21362__auto__ = (function (){var G__39965 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__39965) : cljs.core.atom.call(null,G__39965));
})();var cached_hierarchy__21363__auto__ = (function (){var G__39966 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__39966) : cljs.core.atom.call(null,G__39966));
})();var hierarchy__21364__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("perform-action",((function (method_table__21360__auto__,prefer_table__21361__auto__,method_cache__21362__auto__,cached_hierarchy__21363__auto__,hierarchy__21364__auto__){
return (function (cursor,op,value,debug_QMARK_){if(cljs.core.truth_(debug_QMARK_))
{cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["ACTION:",op,value], 0));
} else
{}
return op;
});})(method_table__21360__auto__,prefer_table__21361__auto__,method_cache__21362__auto__,cached_hierarchy__21363__auto__,hierarchy__21364__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21364__auto__,method_table__21360__auto__,prefer_table__21361__auto__,method_cache__21362__auto__,cached_hierarchy__21363__auto__));
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
var source_article__delegate = function (data__24441__auto__,owner39967,p__39969){var vec__39993 = p__39969;var opts__24442__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39993,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema39997 = schema.core.Any;var input_schema39998 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"source-article","source-article",-1846600440)),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map39994","map39994",-1172480875,null))], null);var input_checker39999 = schema.core.checker(input_schema39998);var output_checker40000 = schema.core.checker(output_schema39997);return schema.core.schematize_fn(((function (ufv__,output_schema39997,input_schema39998,input_checker39999,output_checker40000,vec__39993,opts__24442__auto__){
return (function fnk39996(G__40001){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40016 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40001], null);var temp__4126__auto___40017 = (function (){var G__40009 = args__838__auto___40016;return (input_checker39999.cljs$core$IFn$_invoke$arity$1 ? input_checker39999.cljs$core$IFn$_invoke$arity$1(G__40009) : input_checker39999.call(null,G__40009));
})();if(cljs.core.truth_(temp__4126__auto___40017))
{var error__839__auto___40018 = temp__4126__auto___40017;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39996","fnk39996",1086531182,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40018], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39998,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40016,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40018], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map39994 = G__40001;while(true){
if(cljs.core.map_QMARK_(map39994))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map39994], 0))));
}
var map39995 = plumbing.fnk.schema.safe_get(map39994,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var source_article__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map39995,new cljs.core.Keyword(null,"source-article","source-article",-1846600440),null);var source_article_sentences = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map39995,new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map39994,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.articles.t40010 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.articles.t40010 = (function (vec__39993,owner,map39995,p__39969,input_schema39998,fnk39996,data__24441__auto__,source_article,map39994,source_article_sentences,input_checker39999,output_schema39997,opts__24442__auto__,owner39967,validate__837__auto__,G__40001,ufv__,output_checker40000,meta40011){
this.vec__39993 = vec__39993;
this.owner = owner;
this.map39995 = map39995;
this.p__39969 = p__39969;
this.input_schema39998 = input_schema39998;
this.fnk39996 = fnk39996;
this.data__24441__auto__ = data__24441__auto__;
this.source_article = source_article;
this.map39994 = map39994;
this.source_article_sentences = source_article_sentences;
this.input_checker39999 = input_checker39999;
this.output_schema39997 = output_schema39997;
this.opts__24442__auto__ = opts__24442__auto__;
this.owner39967 = owner39967;
this.validate__837__auto__ = validate__837__auto__;
this.G__40001 = G__40001;
this.ufv__ = ufv__;
this.output_checker40000 = output_checker40000;
this.meta40011 = meta40011;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.articles.t40010.cljs$lang$type = true;
stuttaford.articles.t40010.cljs$lang$ctorStr = "stuttaford.articles/t40010";
stuttaford.articles.t40010.cljs$lang$ctorPrWriter = ((function (owner,source_article_sentences,source_article__$1,map39995,validate__837__auto__,ufv__,output_schema39997,input_schema39998,input_checker39999,output_checker40000,vec__39993,opts__24442__auto__){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"stuttaford.articles/t40010");
});})(owner,source_article_sentences,source_article__$1,map39995,validate__837__auto__,ufv__,output_schema39997,input_schema39998,input_checker39999,output_checker40000,vec__39993,opts__24442__auto__))
;
stuttaford.articles.t40010.prototype.om$core$IDisplayName$ = true;
stuttaford.articles.t40010.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,source_article_sentences,source_article__$1,map39995,validate__837__auto__,ufv__,output_schema39997,input_schema39998,input_checker39999,output_checker40000,vec__39993,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "source-article";
});})(owner,source_article_sentences,source_article__$1,map39995,validate__837__auto__,ufv__,output_schema39997,input_schema39998,input_checker39999,output_checker40000,vec__39993,opts__24442__auto__))
;
stuttaford.articles.t40010.prototype.om$core$IRenderState$ = true;
stuttaford.articles.t40010.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,source_article_sentences,source_article__$1,map39995,validate__837__auto__,ufv__,output_schema39997,input_schema39998,input_checker39999,output_checker40000,vec__39993,opts__24442__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var attrs40013 = om_bootstrap.input.input((function (){var G__40014 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),stuttaford.articles.source_article_placeholder,new cljs.core.Keyword(null,"class","class",-2030961996),"source-article",new cljs.core.Keyword(null,"ref","ref",1289896967),"source-article",new cljs.core.Keyword(null,"value","value",305978217),self__.source_article,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.set_source_article,self__.owner),new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),true], null);var G__40014__$1 = ((stuttaford.articles.has_variants_QMARK_(self__.source_article_sentences))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40014,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true):G__40014);return G__40014__$1;
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs40013))?sablono.interpreter.attributes(attrs40013):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs40013))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((stuttaford.articles.has_variants_QMARK_(self__.source_article_sentences))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.warning","p.warning",93305750),"To prevent muddling variant sentence order, the source article is now read-only."], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs40013),sablono.interpreter.interpret(((stuttaford.articles.has_variants_QMARK_(self__.source_article_sentences))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.warning","p.warning",93305750),"To prevent muddling variant sentence order, the source article is now read-only."], null):null))], null))));
});})(owner,source_article_sentences,source_article__$1,map39995,validate__837__auto__,ufv__,output_schema39997,input_schema39998,input_checker39999,output_checker40000,vec__39993,opts__24442__auto__))
;
stuttaford.articles.t40010.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,source_article_sentences,source_article__$1,map39995,validate__837__auto__,ufv__,output_schema39997,input_schema39998,input_checker39999,output_checker40000,vec__39993,opts__24442__auto__){
return (function (_40012){var self__ = this;
var _40012__$1 = this;return self__.meta40011;
});})(owner,source_article_sentences,source_article__$1,map39995,validate__837__auto__,ufv__,output_schema39997,input_schema39998,input_checker39999,output_checker40000,vec__39993,opts__24442__auto__))
;
stuttaford.articles.t40010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,source_article_sentences,source_article__$1,map39995,validate__837__auto__,ufv__,output_schema39997,input_schema39998,input_checker39999,output_checker40000,vec__39993,opts__24442__auto__){
return (function (_40012,meta40011__$1){var self__ = this;
var _40012__$1 = this;return (new stuttaford.articles.t40010(self__.vec__39993,self__.owner,self__.map39995,self__.p__39969,self__.input_schema39998,self__.fnk39996,self__.data__24441__auto__,self__.source_article,self__.map39994,self__.source_article_sentences,self__.input_checker39999,self__.output_schema39997,self__.opts__24442__auto__,self__.owner39967,self__.validate__837__auto__,self__.G__40001,self__.ufv__,self__.output_checker40000,meta40011__$1));
});})(owner,source_article_sentences,source_article__$1,map39995,validate__837__auto__,ufv__,output_schema39997,input_schema39998,input_checker39999,output_checker40000,vec__39993,opts__24442__auto__))
;
stuttaford.articles.__GT_t40010 = ((function (owner,source_article_sentences,source_article__$1,map39995,validate__837__auto__,ufv__,output_schema39997,input_schema39998,input_checker39999,output_checker40000,vec__39993,opts__24442__auto__){
return (function __GT_t40010(vec__39993__$1,owner__$1,map39995__$1,p__39969__$1,input_schema39998__$1,fnk39996__$1,data__24441__auto____$1,source_article__$2,map39994__$1,source_article_sentences__$1,input_checker39999__$1,output_schema39997__$1,opts__24442__auto____$1,owner39967__$1,validate__837__auto____$1,G__40001__$1,ufv____$1,output_checker40000__$1,meta40011){return (new stuttaford.articles.t40010(vec__39993__$1,owner__$1,map39995__$1,p__39969__$1,input_schema39998__$1,fnk39996__$1,data__24441__auto____$1,source_article__$2,map39994__$1,source_article_sentences__$1,input_checker39999__$1,output_schema39997__$1,opts__24442__auto____$1,owner39967__$1,validate__837__auto____$1,G__40001__$1,ufv____$1,output_checker40000__$1,meta40011));
});})(owner,source_article_sentences,source_article__$1,map39995,validate__837__auto__,ufv__,output_schema39997,input_schema39998,input_checker39999,output_checker40000,vec__39993,opts__24442__auto__))
;
}
return (new stuttaford.articles.t40010(vec__39993,owner,map39995,p__39969,input_schema39998,fnk39996,data__24441__auto__,source_article__$1,map39994,source_article_sentences,input_checker39999,output_schema39997,opts__24442__auto__,owner39967,validate__837__auto__,G__40001,ufv__,output_checker40000,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40019 = (function (){var G__40015 = o__840__auto__;return (output_checker40000.cljs$core$IFn$_invoke$arity$1 ? output_checker40000.cljs$core$IFn$_invoke$arity$1(G__40015) : output_checker40000.call(null,G__40015));
})();if(cljs.core.truth_(temp__4126__auto___40019))
{var error__839__auto___40020 = temp__4126__auto___40019;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk39996","fnk39996",1086531182,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40020], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39997,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40020], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema39997,input_schema39998,input_checker39999,output_checker40000,vec__39993,opts__24442__auto__))
,schema.core.make_fn_schema(output_schema39997,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39998], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24442__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner39967,new cljs.core.Keyword(null,"data","data",-232669377),data__24441__auto__], null));
};
var source_article = function (data__24441__auto__,owner39967,var_args){
var p__39969 = null;if (arguments.length > 2) {
  p__39969 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return source_article__delegate.call(this,data__24441__auto__,owner39967,p__39969);};
source_article.cljs$lang$maxFixedArity = 2;
source_article.cljs$lang$applyTo = (function (arglist__40021){
var data__24441__auto__ = cljs.core.first(arglist__40021);
arglist__40021 = cljs.core.next(arglist__40021);
var owner39967 = cljs.core.first(arglist__40021);
var p__39969 = cljs.core.rest(arglist__40021);
return source_article__delegate(data__24441__auto__,owner39967,p__39969);
});
source_article.cljs$core$IFn$_invoke$arity$variadic = source_article__delegate;
return source_article;
})()
;
stuttaford.articles.__GT_source_article = (function() {
var __GT_source_article = null;
var __GT_source_article__1 = (function (cursor__24410__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.source_article,cursor__24410__auto__);
});
var __GT_source_article__2 = (function (cursor__24410__auto__,m39968){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.articles.source_article,cursor__24410__auto__,m39968);
});
__GT_source_article = function(cursor__24410__auto__,m39968){
switch(arguments.length){
case 1:
return __GT_source_article__1.call(this,cursor__24410__auto__);
case 2:
return __GT_source_article__2.call(this,cursor__24410__auto__,m39968);
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
return (function (p1__40022_SHARP_){return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40022_SHARP_,variant);
});})(value))
);
}
});
/**
* @param {...*} var_args
*/
stuttaford.articles.rewrite_sentence = (function() { 
var rewrite_sentence__delegate = function (data__24441__auto__,owner40023,p__40025){var vec__40098 = p__40025;var opts__24442__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40098,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema40101 = schema.core.Any;var input_schema40102 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"variants","variants",-176391100),schema.core.Any,new cljs.core.Keyword(null,"source","source",-433931539),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map40099","map40099",735920435,null))], null);var input_checker40103 = schema.core.checker(input_schema40102);var output_checker40104 = schema.core.checker(output_schema40101);return schema.core.schematize_fn(((function (ufv__,output_schema40101,input_schema40102,input_checker40103,output_checker40104,vec__40098,opts__24442__auto__){
return (function fnk40100(G__40105){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40170 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40105], null);var temp__4126__auto___40171 = (function (){var G__40138 = args__838__auto___40170;return (input_checker40103.cljs$core$IFn$_invoke$arity$1 ? input_checker40103.cljs$core$IFn$_invoke$arity$1(G__40138) : input_checker40103.call(null,G__40138));
})();if(cljs.core.truth_(temp__4126__auto___40171))
{var error__839__auto___40172 = temp__4126__auto___40171;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk40100","fnk40100",1017348597,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40172], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40102,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40170,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40172], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map40099 = G__40105;while(true){
if(cljs.core.map_QMARK_(map40099))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map40099], 0))));
}
var data = plumbing.fnk.schema.safe_get(map40099,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var source = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var variants = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"variants","variants",-176391100),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map40099,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.articles.t40139 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.articles.t40139 = (function (rewrite_sentence,p__40025,owner,data,variants,owner40023,data__24441__auto__,output_checker40104,map40099,input_schema40102,source,fnk40100,output_schema40101,input_checker40103,opts__24442__auto__,validate__837__auto__,ufv__,vec__40098,G__40105,meta40140){
this.rewrite_sentence = rewrite_sentence;
this.p__40025 = p__40025;
this.owner = owner;
this.data = data;
this.variants = variants;
this.owner40023 = owner40023;
this.data__24441__auto__ = data__24441__auto__;
this.output_checker40104 = output_checker40104;
this.map40099 = map40099;
this.input_schema40102 = input_schema40102;
this.source = source;
this.fnk40100 = fnk40100;
this.output_schema40101 = output_schema40101;
this.input_checker40103 = input_checker40103;
this.opts__24442__auto__ = opts__24442__auto__;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.vec__40098 = vec__40098;
this.G__40105 = G__40105;
this.meta40140 = meta40140;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.articles.t40139.cljs$lang$type = true;
stuttaford.articles.t40139.cljs$lang$ctorStr = "stuttaford.articles/t40139";
stuttaford.articles.t40139.cljs$lang$ctorPrWriter = ((function (owner,variants,source,data,validate__837__auto__,ufv__,output_schema40101,input_schema40102,input_checker40103,output_checker40104,vec__40098,opts__24442__auto__){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"stuttaford.articles/t40139");
});})(owner,variants,source,data,validate__837__auto__,ufv__,output_schema40101,input_schema40102,input_checker40103,output_checker40104,vec__40098,opts__24442__auto__))
;
stuttaford.articles.t40139.prototype.om$core$IDisplayName$ = true;
stuttaford.articles.t40139.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,variants,source,data,validate__837__auto__,ufv__,output_schema40101,input_schema40102,input_checker40103,output_checker40104,vec__40098,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "rewrite-sentence";
});})(owner,variants,source,data,validate__837__auto__,ufv__,output_schema40101,input_schema40102,input_checker40103,output_checker40104,vec__40098,opts__24442__auto__))
;
stuttaford.articles.t40139.prototype.om$core$IRenderState$ = true;
stuttaford.articles.t40139.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,variants,source,data,validate__837__auto__,ufv__,output_schema40101,input_schema40102,input_checker40103,output_checker40104,vec__40098,opts__24442__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var G__40144 = {"className": "sentence"};var G__40145 = (function (){var attrs40142 = self__.source;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,((cljs.core.map_QMARK_(attrs40142))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["source-sentence"], null)], null),attrs40142], 0))):{"className": "source-sentence"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs40142))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs40142)], null))));
})();var G__40146 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__21074__auto__ = ((function (G__40144,G__40145,___$1,owner,variants,source,data,validate__837__auto__,ufv__,output_schema40101,input_schema40102,input_checker40103,output_checker40104,vec__40098,opts__24442__auto__){
return (function iter__40147(s__40148){return (new cljs.core.LazySeq(null,((function (G__40144,G__40145,___$1,owner,variants,source,data,validate__837__auto__,ufv__,output_schema40101,input_schema40102,input_checker40103,output_checker40104,vec__40098,opts__24442__auto__){
return (function (){var s__40148__$1 = s__40148;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40148__$1);if(temp__4126__auto__)
{var s__40148__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40148__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__40148__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__40150 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__40149 = (0);while(true){
if((i__40149 < size__21073__auto__))
{var variant = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__40149);var variant_name = cljs.core.name(variant);cljs.core.chunk_append(b__40150,(function (){var G__40161 = {"className": "input"};var G__40162 = (function (){var attrs40143 = variant_name;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs40143))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["index"], null)], null),attrs40143], 0))):{"className": "index"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs40143))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs40143)], null))));
})();var G__40163 = sablono.interpreter.interpret((function (){var value = (function (){var G__40164 = self__.variants;return (variant.cljs$core$IFn$_invoke$arity$1 ? variant.cljs$core$IFn$_invoke$arity$1(G__40164) : variant.call(null,G__40164));
})();return om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"class","class",-2030961996),("variant "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(clojure.string.blank_QMARK_(value))?"invalid":"valid"))),new cljs.core.Keyword(null,"ref","ref",1289896967),("variant-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant_name)),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__40149,value,G__40161,G__40162,variant_name,variant,c__21072__auto__,size__21073__auto__,b__40150,s__40148__$2,temp__4126__auto__,G__40144,G__40145,___$1,owner,variants,source,data,validate__837__auto__,ufv__,output_schema40101,input_schema40102,input_checker40103,output_checker40104,vec__40098,opts__24442__auto__){
return (function (){return stuttaford.articles.set_variant(self__.owner,self__.data,variant);
});})(i__40149,value,G__40161,G__40162,variant_name,variant,c__21072__auto__,size__21073__auto__,b__40150,s__40148__$2,temp__4126__auto__,G__40144,G__40145,___$1,owner,variants,source,data,validate__837__auto__,ufv__,output_schema40101,input_schema40102,input_checker40103,output_checker40104,vec__40098,opts__24442__auto__))
], null));
})());return React.DOM.div(G__40161,G__40162,G__40163);
})());
{
var G__40173 = (i__40149 + (1));
i__40149 = G__40173;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40150),iter__40147(cljs.core.chunk_rest(s__40148__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40150),null);
}
} else
{var variant = cljs.core.first(s__40148__$2);var variant_name = cljs.core.name(variant);return cljs.core.cons((function (){var G__40165 = {"className": "input"};var G__40166 = (function (){var attrs40143 = variant_name;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs40143))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["index"], null)], null),attrs40143], 0))):{"className": "index"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs40143))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs40143)], null))));
})();var G__40167 = sablono.interpreter.interpret((function (){var value = (function (){var G__40168 = self__.variants;return (variant.cljs$core$IFn$_invoke$arity$1 ? variant.cljs$core$IFn$_invoke$arity$1(G__40168) : variant.call(null,G__40168));
})();return om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"class","class",-2030961996),("variant "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(clojure.string.blank_QMARK_(value))?"invalid":"valid"))),new cljs.core.Keyword(null,"ref","ref",1289896967),("variant-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant_name)),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (value,G__40165,G__40166,variant_name,variant,s__40148__$2,temp__4126__auto__,G__40144,G__40145,___$1,owner,variants,source,data,validate__837__auto__,ufv__,output_schema40101,input_schema40102,input_checker40103,output_checker40104,vec__40098,opts__24442__auto__){
return (function (){return stuttaford.articles.set_variant(self__.owner,self__.data,variant);
});})(value,G__40165,G__40166,variant_name,variant,s__40148__$2,temp__4126__auto__,G__40144,G__40145,___$1,owner,variants,source,data,validate__837__auto__,ufv__,output_schema40101,input_schema40102,input_checker40103,output_checker40104,vec__40098,opts__24442__auto__))
], null));
})());return React.DOM.div(G__40165,G__40166,G__40167);
})(),iter__40147(cljs.core.rest(s__40148__$2)));
}
} else
{return null;
}
break;
}
});})(G__40144,G__40145,___$1,owner,variants,source,data,validate__837__auto__,ufv__,output_schema40101,input_schema40102,input_checker40103,output_checker40104,vec__40098,opts__24442__auto__))
,null,null));
});})(G__40144,G__40145,___$1,owner,variants,source,data,validate__837__auto__,ufv__,output_schema40101,input_schema40102,input_checker40103,output_checker40104,vec__40098,opts__24442__auto__))
;return iter__21074__auto__(stuttaford.articles.variant_names);
})());return React.DOM.div(G__40144,G__40145,G__40146);
});})(owner,variants,source,data,validate__837__auto__,ufv__,output_schema40101,input_schema40102,input_checker40103,output_checker40104,vec__40098,opts__24442__auto__))
;
stuttaford.articles.t40139.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,variants,source,data,validate__837__auto__,ufv__,output_schema40101,input_schema40102,input_checker40103,output_checker40104,vec__40098,opts__24442__auto__){
return (function (_40141){var self__ = this;
var _40141__$1 = this;return self__.meta40140;
});})(owner,variants,source,data,validate__837__auto__,ufv__,output_schema40101,input_schema40102,input_checker40103,output_checker40104,vec__40098,opts__24442__auto__))
;
stuttaford.articles.t40139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,variants,source,data,validate__837__auto__,ufv__,output_schema40101,input_schema40102,input_checker40103,output_checker40104,vec__40098,opts__24442__auto__){
return (function (_40141,meta40140__$1){var self__ = this;
var _40141__$1 = this;return (new stuttaford.articles.t40139(self__.rewrite_sentence,self__.p__40025,self__.owner,self__.data,self__.variants,self__.owner40023,self__.data__24441__auto__,self__.output_checker40104,self__.map40099,self__.input_schema40102,self__.source,self__.fnk40100,self__.output_schema40101,self__.input_checker40103,self__.opts__24442__auto__,self__.validate__837__auto__,self__.ufv__,self__.vec__40098,self__.G__40105,meta40140__$1));
});})(owner,variants,source,data,validate__837__auto__,ufv__,output_schema40101,input_schema40102,input_checker40103,output_checker40104,vec__40098,opts__24442__auto__))
;
stuttaford.articles.__GT_t40139 = ((function (owner,variants,source,data,validate__837__auto__,ufv__,output_schema40101,input_schema40102,input_checker40103,output_checker40104,vec__40098,opts__24442__auto__){
return (function __GT_t40139(rewrite_sentence__$1,p__40025__$1,owner__$1,data__$1,variants__$1,owner40023__$1,data__24441__auto____$1,output_checker40104__$1,map40099__$1,input_schema40102__$1,source__$1,fnk40100__$1,output_schema40101__$1,input_checker40103__$1,opts__24442__auto____$1,validate__837__auto____$1,ufv____$1,vec__40098__$1,G__40105__$1,meta40140){return (new stuttaford.articles.t40139(rewrite_sentence__$1,p__40025__$1,owner__$1,data__$1,variants__$1,owner40023__$1,data__24441__auto____$1,output_checker40104__$1,map40099__$1,input_schema40102__$1,source__$1,fnk40100__$1,output_schema40101__$1,input_checker40103__$1,opts__24442__auto____$1,validate__837__auto____$1,ufv____$1,vec__40098__$1,G__40105__$1,meta40140));
});})(owner,variants,source,data,validate__837__auto__,ufv__,output_schema40101,input_schema40102,input_checker40103,output_checker40104,vec__40098,opts__24442__auto__))
;
}
return (new stuttaford.articles.t40139(rewrite_sentence,p__40025,owner,data,variants,owner40023,data__24441__auto__,output_checker40104,map40099,input_schema40102,source,fnk40100,output_schema40101,input_checker40103,opts__24442__auto__,validate__837__auto__,ufv__,vec__40098,G__40105,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40174 = (function (){var G__40169 = o__840__auto__;return (output_checker40104.cljs$core$IFn$_invoke$arity$1 ? output_checker40104.cljs$core$IFn$_invoke$arity$1(G__40169) : output_checker40104.call(null,G__40169));
})();if(cljs.core.truth_(temp__4126__auto___40174))
{var error__839__auto___40175 = temp__4126__auto___40174;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk40100","fnk40100",1017348597,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40175], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40101,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40175], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema40101,input_schema40102,input_checker40103,output_checker40104,vec__40098,opts__24442__auto__))
,schema.core.make_fn_schema(output_schema40101,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40102], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24442__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner40023,new cljs.core.Keyword(null,"data","data",-232669377),data__24441__auto__], null));
};
var rewrite_sentence = function (data__24441__auto__,owner40023,var_args){
var p__40025 = null;if (arguments.length > 2) {
  p__40025 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return rewrite_sentence__delegate.call(this,data__24441__auto__,owner40023,p__40025);};
rewrite_sentence.cljs$lang$maxFixedArity = 2;
rewrite_sentence.cljs$lang$applyTo = (function (arglist__40176){
var data__24441__auto__ = cljs.core.first(arglist__40176);
arglist__40176 = cljs.core.next(arglist__40176);
var owner40023 = cljs.core.first(arglist__40176);
var p__40025 = cljs.core.rest(arglist__40176);
return rewrite_sentence__delegate(data__24441__auto__,owner40023,p__40025);
});
rewrite_sentence.cljs$core$IFn$_invoke$arity$variadic = rewrite_sentence__delegate;
return rewrite_sentence;
})()
;
stuttaford.articles.__GT_rewrite_sentence = (function() {
var __GT_rewrite_sentence = null;
var __GT_rewrite_sentence__1 = (function (cursor__24410__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.rewrite_sentence,cursor__24410__auto__);
});
var __GT_rewrite_sentence__2 = (function (cursor__24410__auto__,m40024){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.articles.rewrite_sentence,cursor__24410__auto__,m40024);
});
__GT_rewrite_sentence = function(cursor__24410__auto__,m40024){
switch(arguments.length){
case 1:
return __GT_rewrite_sentence__1.call(this,cursor__24410__auto__);
case 2:
return __GT_rewrite_sentence__2.call(this,cursor__24410__auto__,m40024);
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
var rewrite_articles__delegate = function (data__24441__auto__,owner40177,p__40179){var vec__40201 = p__40179;var opts__24442__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40201,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema40205 = schema.core.Any;var input_schema40206 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359)),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map40202","map40202",-338243973,null))], null);var input_checker40207 = schema.core.checker(input_schema40206);var output_checker40208 = schema.core.checker(output_schema40205);return schema.core.schematize_fn(((function (ufv__,output_schema40205,input_schema40206,input_checker40207,output_checker40208,vec__40201,opts__24442__auto__){
return (function fnk40204(G__40209){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40222 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40209], null);var temp__4126__auto___40223 = (function (){var G__40216 = args__838__auto___40222;return (input_checker40207.cljs$core$IFn$_invoke$arity$1 ? input_checker40207.cljs$core$IFn$_invoke$arity$1(G__40216) : input_checker40207.call(null,G__40216));
})();if(cljs.core.truth_(temp__4126__auto___40223))
{var error__839__auto___40224 = temp__4126__auto___40223;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk40204","fnk40204",752800366,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40224], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40206,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40222,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40224], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map40202 = G__40209;while(true){
if(cljs.core.map_QMARK_(map40202))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map40202], 0))));
}
var map40203 = plumbing.fnk.schema.safe_get(map40202,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var source_article_sentences = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map40203,new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map40202,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.articles.t40217 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.articles.t40217 = (function (input_checker40207,owner,vec__40201,input_schema40206,owner40177,rewrite_articles,p__40179,fnk40204,data__24441__auto__,output_schema40205,source_article_sentences,opts__24442__auto__,map40203,validate__837__auto__,map40202,G__40209,ufv__,output_checker40208,meta40218){
this.input_checker40207 = input_checker40207;
this.owner = owner;
this.vec__40201 = vec__40201;
this.input_schema40206 = input_schema40206;
this.owner40177 = owner40177;
this.rewrite_articles = rewrite_articles;
this.p__40179 = p__40179;
this.fnk40204 = fnk40204;
this.data__24441__auto__ = data__24441__auto__;
this.output_schema40205 = output_schema40205;
this.source_article_sentences = source_article_sentences;
this.opts__24442__auto__ = opts__24442__auto__;
this.map40203 = map40203;
this.validate__837__auto__ = validate__837__auto__;
this.map40202 = map40202;
this.G__40209 = G__40209;
this.ufv__ = ufv__;
this.output_checker40208 = output_checker40208;
this.meta40218 = meta40218;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.articles.t40217.cljs$lang$type = true;
stuttaford.articles.t40217.cljs$lang$ctorStr = "stuttaford.articles/t40217";
stuttaford.articles.t40217.cljs$lang$ctorPrWriter = ((function (owner,source_article_sentences,map40203,validate__837__auto__,ufv__,output_schema40205,input_schema40206,input_checker40207,output_checker40208,vec__40201,opts__24442__auto__){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"stuttaford.articles/t40217");
});})(owner,source_article_sentences,map40203,validate__837__auto__,ufv__,output_schema40205,input_schema40206,input_checker40207,output_checker40208,vec__40201,opts__24442__auto__))
;
stuttaford.articles.t40217.prototype.om$core$IDisplayName$ = true;
stuttaford.articles.t40217.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,source_article_sentences,map40203,validate__837__auto__,ufv__,output_schema40205,input_schema40206,input_checker40207,output_checker40208,vec__40201,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "rewrite-articles";
});})(owner,source_article_sentences,map40203,validate__837__auto__,ufv__,output_schema40205,input_schema40206,input_checker40207,output_checker40208,vec__40201,opts__24442__auto__))
;
stuttaford.articles.t40217.prototype.om$core$IRenderState$ = true;
stuttaford.articles.t40217.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,source_article_sentences,map40203,validate__837__auto__,ufv__,output_schema40205,input_schema40206,input_checker40207,output_checker40208,vec__40201,opts__24442__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var attrs40220 = ((cljs.core.seq(self__.source_article_sentences))?om.core.build_all.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.rewrite_sentence,cljs.core.map_indexed(((function (___$1,owner,source_article_sentences,map40203,validate__837__auto__,ufv__,output_schema40205,input_schema40206,input_checker40207,output_checker40208,vec__40201,opts__24442__auto__){
return (function (i,sentence){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sentence,new cljs.core.Keyword(null,"index","index",-1531685915),i);
});})(___$1,owner,source_article_sentences,map40203,validate__837__auto__,ufv__,output_schema40205,input_schema40206,input_checker40207,output_checker40208,vec__40201,opts__24442__auto__))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.sentence_QMARK_,self__.source_article_sentences))):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No source article."], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs40220))?sablono.interpreter.attributes(attrs40220):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs40220))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs40220)], null))));
});})(owner,source_article_sentences,map40203,validate__837__auto__,ufv__,output_schema40205,input_schema40206,input_checker40207,output_checker40208,vec__40201,opts__24442__auto__))
;
stuttaford.articles.t40217.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,source_article_sentences,map40203,validate__837__auto__,ufv__,output_schema40205,input_schema40206,input_checker40207,output_checker40208,vec__40201,opts__24442__auto__){
return (function (_40219){var self__ = this;
var _40219__$1 = this;return self__.meta40218;
});})(owner,source_article_sentences,map40203,validate__837__auto__,ufv__,output_schema40205,input_schema40206,input_checker40207,output_checker40208,vec__40201,opts__24442__auto__))
;
stuttaford.articles.t40217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,source_article_sentences,map40203,validate__837__auto__,ufv__,output_schema40205,input_schema40206,input_checker40207,output_checker40208,vec__40201,opts__24442__auto__){
return (function (_40219,meta40218__$1){var self__ = this;
var _40219__$1 = this;return (new stuttaford.articles.t40217(self__.input_checker40207,self__.owner,self__.vec__40201,self__.input_schema40206,self__.owner40177,self__.rewrite_articles,self__.p__40179,self__.fnk40204,self__.data__24441__auto__,self__.output_schema40205,self__.source_article_sentences,self__.opts__24442__auto__,self__.map40203,self__.validate__837__auto__,self__.map40202,self__.G__40209,self__.ufv__,self__.output_checker40208,meta40218__$1));
});})(owner,source_article_sentences,map40203,validate__837__auto__,ufv__,output_schema40205,input_schema40206,input_checker40207,output_checker40208,vec__40201,opts__24442__auto__))
;
stuttaford.articles.__GT_t40217 = ((function (owner,source_article_sentences,map40203,validate__837__auto__,ufv__,output_schema40205,input_schema40206,input_checker40207,output_checker40208,vec__40201,opts__24442__auto__){
return (function __GT_t40217(input_checker40207__$1,owner__$1,vec__40201__$1,input_schema40206__$1,owner40177__$1,rewrite_articles__$1,p__40179__$1,fnk40204__$1,data__24441__auto____$1,output_schema40205__$1,source_article_sentences__$1,opts__24442__auto____$1,map40203__$1,validate__837__auto____$1,map40202__$1,G__40209__$1,ufv____$1,output_checker40208__$1,meta40218){return (new stuttaford.articles.t40217(input_checker40207__$1,owner__$1,vec__40201__$1,input_schema40206__$1,owner40177__$1,rewrite_articles__$1,p__40179__$1,fnk40204__$1,data__24441__auto____$1,output_schema40205__$1,source_article_sentences__$1,opts__24442__auto____$1,map40203__$1,validate__837__auto____$1,map40202__$1,G__40209__$1,ufv____$1,output_checker40208__$1,meta40218));
});})(owner,source_article_sentences,map40203,validate__837__auto__,ufv__,output_schema40205,input_schema40206,input_checker40207,output_checker40208,vec__40201,opts__24442__auto__))
;
}
return (new stuttaford.articles.t40217(input_checker40207,owner,vec__40201,input_schema40206,owner40177,rewrite_articles,p__40179,fnk40204,data__24441__auto__,output_schema40205,source_article_sentences,opts__24442__auto__,map40203,validate__837__auto__,map40202,G__40209,ufv__,output_checker40208,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40225 = (function (){var G__40221 = o__840__auto__;return (output_checker40208.cljs$core$IFn$_invoke$arity$1 ? output_checker40208.cljs$core$IFn$_invoke$arity$1(G__40221) : output_checker40208.call(null,G__40221));
})();if(cljs.core.truth_(temp__4126__auto___40225))
{var error__839__auto___40226 = temp__4126__auto___40225;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk40204","fnk40204",752800366,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40226], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40205,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40226], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema40205,input_schema40206,input_checker40207,output_checker40208,vec__40201,opts__24442__auto__))
,schema.core.make_fn_schema(output_schema40205,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40206], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24442__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner40177,new cljs.core.Keyword(null,"data","data",-232669377),data__24441__auto__], null));
};
var rewrite_articles = function (data__24441__auto__,owner40177,var_args){
var p__40179 = null;if (arguments.length > 2) {
  p__40179 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return rewrite_articles__delegate.call(this,data__24441__auto__,owner40177,p__40179);};
rewrite_articles.cljs$lang$maxFixedArity = 2;
rewrite_articles.cljs$lang$applyTo = (function (arglist__40227){
var data__24441__auto__ = cljs.core.first(arglist__40227);
arglist__40227 = cljs.core.next(arglist__40227);
var owner40177 = cljs.core.first(arglist__40227);
var p__40179 = cljs.core.rest(arglist__40227);
return rewrite_articles__delegate(data__24441__auto__,owner40177,p__40179);
});
rewrite_articles.cljs$core$IFn$_invoke$arity$variadic = rewrite_articles__delegate;
return rewrite_articles;
})()
;
stuttaford.articles.__GT_rewrite_articles = (function() {
var __GT_rewrite_articles = null;
var __GT_rewrite_articles__1 = (function (cursor__24410__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.rewrite_articles,cursor__24410__auto__);
});
var __GT_rewrite_articles__2 = (function (cursor__24410__auto__,m40178){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.articles.rewrite_articles,cursor__24410__auto__,m40178);
});
__GT_rewrite_articles = function(cursor__24410__auto__,m40178){
switch(arguments.length){
case 1:
return __GT_rewrite_articles__1.call(this,cursor__24410__auto__);
case 2:
return __GT_rewrite_articles__2.call(this,cursor__24410__auto__,m40178);
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
var output_articles__delegate = function (data__24441__auto__,owner40228,p__40230){var vec__40332 = p__40230;var opts__24442__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40332,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema40336 = schema.core.Any;var input_schema40337 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359)),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map40333","map40333",100312913,null))], null);var input_checker40338 = schema.core.checker(input_schema40337);var output_checker40339 = schema.core.checker(output_schema40336);return schema.core.schematize_fn(((function (ufv__,output_schema40336,input_schema40337,input_checker40338,output_checker40339,vec__40332,opts__24442__auto__){
return (function fnk40335(G__40340){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40433 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40340], null);var temp__4126__auto___40434 = (function (){var G__40387 = args__838__auto___40433;return (input_checker40338.cljs$core$IFn$_invoke$arity$1 ? input_checker40338.cljs$core$IFn$_invoke$arity$1(G__40387) : input_checker40338.call(null,G__40387));
})();if(cljs.core.truth_(temp__4126__auto___40434))
{var error__839__auto___40435 = temp__4126__auto___40434;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk40335","fnk40335",1449758298,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40435], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40337,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40433,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40435], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map40333 = G__40340;while(true){
if(cljs.core.map_QMARK_(map40333))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map40333], 0))));
}
var map40334 = plumbing.fnk.schema.safe_get(map40333,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var source_article_sentences = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map40334,new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map40333,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.articles.t40388 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.articles.t40388 = (function (owner,input_checker40338,output_checker40339,vec__40332,output_schema40336,input_schema40337,data__24441__auto__,map40333,G__40340,source_article_sentences,map40334,opts__24442__auto__,fnk40335,p__40230,validate__837__auto__,ufv__,owner40228,output_articles,meta40389){
this.owner = owner;
this.input_checker40338 = input_checker40338;
this.output_checker40339 = output_checker40339;
this.vec__40332 = vec__40332;
this.output_schema40336 = output_schema40336;
this.input_schema40337 = input_schema40337;
this.data__24441__auto__ = data__24441__auto__;
this.map40333 = map40333;
this.G__40340 = G__40340;
this.source_article_sentences = source_article_sentences;
this.map40334 = map40334;
this.opts__24442__auto__ = opts__24442__auto__;
this.fnk40335 = fnk40335;
this.p__40230 = p__40230;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.owner40228 = owner40228;
this.output_articles = output_articles;
this.meta40389 = meta40389;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.articles.t40388.cljs$lang$type = true;
stuttaford.articles.t40388.cljs$lang$ctorStr = "stuttaford.articles/t40388";
stuttaford.articles.t40388.cljs$lang$ctorPrWriter = ((function (owner,source_article_sentences,map40334,validate__837__auto__,ufv__,output_schema40336,input_schema40337,input_checker40338,output_checker40339,vec__40332,opts__24442__auto__){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"stuttaford.articles/t40388");
});})(owner,source_article_sentences,map40334,validate__837__auto__,ufv__,output_schema40336,input_schema40337,input_checker40338,output_checker40339,vec__40332,opts__24442__auto__))
;
stuttaford.articles.t40388.prototype.om$core$IDisplayName$ = true;
stuttaford.articles.t40388.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,source_article_sentences,map40334,validate__837__auto__,ufv__,output_schema40336,input_schema40337,input_checker40338,output_checker40339,vec__40332,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "output-articles";
});})(owner,source_article_sentences,map40334,validate__837__auto__,ufv__,output_schema40336,input_schema40337,input_checker40338,output_checker40339,vec__40332,opts__24442__auto__))
;
stuttaford.articles.t40388.prototype.om$core$IRenderState$ = true;
stuttaford.articles.t40388.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,source_article_sentences,map40334,validate__837__auto__,ufv__,output_schema40336,input_schema40337,input_checker40338,output_checker40339,vec__40332,opts__24442__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var composed_variants = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.second),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.identity),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.compose_variant,self__.source_article_sentences)),stuttaford.articles.variant_names));var attrs40391 = ((cljs.core.seq(composed_variants))?(function (){var G__40392 = null;var G__40393 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__21074__auto__ = ((function (G__40392,composed_variants,___$1,owner,source_article_sentences,map40334,validate__837__auto__,ufv__,output_schema40336,input_schema40337,input_checker40338,output_checker40339,vec__40332,opts__24442__auto__){
return (function iter__40394(s__40395){return (new cljs.core.LazySeq(null,((function (G__40392,composed_variants,___$1,owner,source_article_sentences,map40334,validate__837__auto__,ufv__,output_schema40336,input_schema40337,input_checker40338,output_checker40339,vec__40332,opts__24442__auto__){
return (function (){var s__40395__$1 = s__40395;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40395__$1);if(temp__4126__auto__)
{var s__40395__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40395__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__40395__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__40397 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__40396 = (0);while(true){
if((i__40396 < size__21073__auto__))
{var vec__40416 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__40396);var variant_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40416,(0),null);var composed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40416,(1),null);var ref = ("output-article-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant_name));cljs.core.chunk_append(b__40397,(function (){var G__40417 = {"className": "composed-variant"};var G__40418 = (function (){var G__40420 = null;var G__40421 = "Variant ";var G__40422 = sablono.interpreter.interpret(variant_name);return React.DOM.h1(G__40420,G__40421,G__40422);
})();var G__40419 = sablono.interpreter.interpret(om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"class","class",-2030961996),"source-article",new cljs.core.Keyword(null,"ref","ref",1289896967),ref,new cljs.core.Keyword(null,"value","value",305978217),composed,new cljs.core.Keyword(null,"readonly","readonly",-1101398934),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__40396,G__40417,G__40418,ref,vec__40416,variant_name,composed,c__21072__auto__,size__21073__auto__,b__40397,s__40395__$2,temp__4126__auto__,G__40392,composed_variants,___$1,owner,source_article_sentences,map40334,validate__837__auto__,ufv__,output_schema40336,input_schema40337,input_checker40338,output_checker40339,vec__40332,opts__24442__auto__){
return (function (){var G__40423 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,ref);G__40423.focus();
G__40423.select();
return G__40423;
});})(i__40396,G__40417,G__40418,ref,vec__40416,variant_name,composed,c__21072__auto__,size__21073__auto__,b__40397,s__40395__$2,temp__4126__auto__,G__40392,composed_variants,___$1,owner,source_article_sentences,map40334,validate__837__auto__,ufv__,output_schema40336,input_schema40337,input_checker40338,output_checker40339,vec__40332,opts__24442__auto__))
], null)));return React.DOM.div(G__40417,G__40418,G__40419);
})());
{
var G__40436 = (i__40396 + (1));
i__40396 = G__40436;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40397),iter__40394(cljs.core.chunk_rest(s__40395__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40397),null);
}
} else
{var vec__40424 = cljs.core.first(s__40395__$2);var variant_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40424,(0),null);var composed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40424,(1),null);var ref = ("output-article-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant_name));return cljs.core.cons((function (){var G__40425 = {"className": "composed-variant"};var G__40426 = (function (){var G__40428 = null;var G__40429 = "Variant ";var G__40430 = sablono.interpreter.interpret(variant_name);return React.DOM.h1(G__40428,G__40429,G__40430);
})();var G__40427 = sablono.interpreter.interpret(om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"class","class",-2030961996),"source-article",new cljs.core.Keyword(null,"ref","ref",1289896967),ref,new cljs.core.Keyword(null,"value","value",305978217),composed,new cljs.core.Keyword(null,"readonly","readonly",-1101398934),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__40425,G__40426,ref,vec__40424,variant_name,composed,s__40395__$2,temp__4126__auto__,G__40392,composed_variants,___$1,owner,source_article_sentences,map40334,validate__837__auto__,ufv__,output_schema40336,input_schema40337,input_checker40338,output_checker40339,vec__40332,opts__24442__auto__){
return (function (){var G__40431 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,ref);G__40431.focus();
G__40431.select();
return G__40431;
});})(G__40425,G__40426,ref,vec__40424,variant_name,composed,s__40395__$2,temp__4126__auto__,G__40392,composed_variants,___$1,owner,source_article_sentences,map40334,validate__837__auto__,ufv__,output_schema40336,input_schema40337,input_checker40338,output_checker40339,vec__40332,opts__24442__auto__))
], null)));return React.DOM.div(G__40425,G__40426,G__40427);
})(),iter__40394(cljs.core.rest(s__40395__$2)));
}
} else
{return null;
}
break;
}
});})(G__40392,composed_variants,___$1,owner,source_article_sentences,map40334,validate__837__auto__,ufv__,output_schema40336,input_schema40337,input_checker40338,output_checker40339,vec__40332,opts__24442__auto__))
,null,null));
});})(G__40392,composed_variants,___$1,owner,source_article_sentences,map40334,validate__837__auto__,ufv__,output_schema40336,input_schema40337,input_checker40338,output_checker40339,vec__40332,opts__24442__auto__))
;return iter__21074__auto__(composed_variants);
})());return React.DOM.div(G__40392,G__40393);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No variants."], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs40391))?sablono.interpreter.attributes(attrs40391):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs40391))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs40391)], null))));
});})(owner,source_article_sentences,map40334,validate__837__auto__,ufv__,output_schema40336,input_schema40337,input_checker40338,output_checker40339,vec__40332,opts__24442__auto__))
;
stuttaford.articles.t40388.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,source_article_sentences,map40334,validate__837__auto__,ufv__,output_schema40336,input_schema40337,input_checker40338,output_checker40339,vec__40332,opts__24442__auto__){
return (function (_40390){var self__ = this;
var _40390__$1 = this;return self__.meta40389;
});})(owner,source_article_sentences,map40334,validate__837__auto__,ufv__,output_schema40336,input_schema40337,input_checker40338,output_checker40339,vec__40332,opts__24442__auto__))
;
stuttaford.articles.t40388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,source_article_sentences,map40334,validate__837__auto__,ufv__,output_schema40336,input_schema40337,input_checker40338,output_checker40339,vec__40332,opts__24442__auto__){
return (function (_40390,meta40389__$1){var self__ = this;
var _40390__$1 = this;return (new stuttaford.articles.t40388(self__.owner,self__.input_checker40338,self__.output_checker40339,self__.vec__40332,self__.output_schema40336,self__.input_schema40337,self__.data__24441__auto__,self__.map40333,self__.G__40340,self__.source_article_sentences,self__.map40334,self__.opts__24442__auto__,self__.fnk40335,self__.p__40230,self__.validate__837__auto__,self__.ufv__,self__.owner40228,self__.output_articles,meta40389__$1));
});})(owner,source_article_sentences,map40334,validate__837__auto__,ufv__,output_schema40336,input_schema40337,input_checker40338,output_checker40339,vec__40332,opts__24442__auto__))
;
stuttaford.articles.__GT_t40388 = ((function (owner,source_article_sentences,map40334,validate__837__auto__,ufv__,output_schema40336,input_schema40337,input_checker40338,output_checker40339,vec__40332,opts__24442__auto__){
return (function __GT_t40388(owner__$1,input_checker40338__$1,output_checker40339__$1,vec__40332__$1,output_schema40336__$1,input_schema40337__$1,data__24441__auto____$1,map40333__$1,G__40340__$1,source_article_sentences__$1,map40334__$1,opts__24442__auto____$1,fnk40335__$1,p__40230__$1,validate__837__auto____$1,ufv____$1,owner40228__$1,output_articles__$1,meta40389){return (new stuttaford.articles.t40388(owner__$1,input_checker40338__$1,output_checker40339__$1,vec__40332__$1,output_schema40336__$1,input_schema40337__$1,data__24441__auto____$1,map40333__$1,G__40340__$1,source_article_sentences__$1,map40334__$1,opts__24442__auto____$1,fnk40335__$1,p__40230__$1,validate__837__auto____$1,ufv____$1,owner40228__$1,output_articles__$1,meta40389));
});})(owner,source_article_sentences,map40334,validate__837__auto__,ufv__,output_schema40336,input_schema40337,input_checker40338,output_checker40339,vec__40332,opts__24442__auto__))
;
}
return (new stuttaford.articles.t40388(owner,input_checker40338,output_checker40339,vec__40332,output_schema40336,input_schema40337,data__24441__auto__,map40333,G__40340,source_article_sentences,map40334,opts__24442__auto__,fnk40335,p__40230,validate__837__auto__,ufv__,owner40228,output_articles,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40437 = (function (){var G__40432 = o__840__auto__;return (output_checker40339.cljs$core$IFn$_invoke$arity$1 ? output_checker40339.cljs$core$IFn$_invoke$arity$1(G__40432) : output_checker40339.call(null,G__40432));
})();if(cljs.core.truth_(temp__4126__auto___40437))
{var error__839__auto___40438 = temp__4126__auto___40437;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk40335","fnk40335",1449758298,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40438], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40336,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40438], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema40336,input_schema40337,input_checker40338,output_checker40339,vec__40332,opts__24442__auto__))
,schema.core.make_fn_schema(output_schema40336,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40337], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24442__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner40228,new cljs.core.Keyword(null,"data","data",-232669377),data__24441__auto__], null));
};
var output_articles = function (data__24441__auto__,owner40228,var_args){
var p__40230 = null;if (arguments.length > 2) {
  p__40230 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return output_articles__delegate.call(this,data__24441__auto__,owner40228,p__40230);};
output_articles.cljs$lang$maxFixedArity = 2;
output_articles.cljs$lang$applyTo = (function (arglist__40439){
var data__24441__auto__ = cljs.core.first(arglist__40439);
arglist__40439 = cljs.core.next(arglist__40439);
var owner40228 = cljs.core.first(arglist__40439);
var p__40230 = cljs.core.rest(arglist__40439);
return output_articles__delegate(data__24441__auto__,owner40228,p__40230);
});
output_articles.cljs$core$IFn$_invoke$arity$variadic = output_articles__delegate;
return output_articles;
})()
;
stuttaford.articles.__GT_output_articles = (function() {
var __GT_output_articles = null;
var __GT_output_articles__1 = (function (cursor__24410__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.output_articles,cursor__24410__auto__);
});
var __GT_output_articles__2 = (function (cursor__24410__auto__,m40229){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.articles.output_articles,cursor__24410__auto__,m40229);
});
__GT_output_articles = function(cursor__24410__auto__,m40229){
switch(arguments.length){
case 1:
return __GT_output_articles__1.call(this,cursor__24410__auto__);
case 2:
return __GT_output_articles__2.call(this,cursor__24410__auto__,m40229);
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
var top_nav__delegate = function (data__24441__auto__,owner40440,p__40442){var vec__40544 = p__40442;var opts__24442__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40544,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema40548 = schema.core.Any;var input_schema40549 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359)),schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map40545","map40545",-1533812049,null))], null);var input_checker40550 = schema.core.checker(input_schema40549);var output_checker40551 = schema.core.checker(output_schema40548);return schema.core.schematize_fn(((function (ufv__,output_schema40548,input_schema40549,input_checker40550,output_checker40551,vec__40544,opts__24442__auto__){
return (function fnk40547(G__40552){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40645 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40552], null);var temp__4126__auto___40646 = (function (){var G__40599 = args__838__auto___40645;return (input_checker40550.cljs$core$IFn$_invoke$arity$1 ? input_checker40550.cljs$core$IFn$_invoke$arity$1(G__40599) : input_checker40550.call(null,G__40599));
})();if(cljs.core.truth_(temp__4126__auto___40646))
{var error__839__auto___40647 = temp__4126__auto___40646;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk40547","fnk40547",882825796,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40647], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40549,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40645,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40647], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map40545 = G__40552;while(true){
if(cljs.core.map_QMARK_(map40545))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map40545], 0))));
}
var data = plumbing.fnk.schema.safe_get(map40545,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var source_article_sentences = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map40545,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map40546 = plumbing.fnk.schema.safe_get(map40545,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var nav_items = plumbing.fnk.schema.safe_get(map40546,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));if(typeof stuttaford.articles.t40600 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.articles.t40600 = (function (output_checker40551,owner,fnk40547,G__40552,view,data,nav_items,input_schema40549,map40545,data__24441__auto__,input_checker40550,vec__40544,top_nav,owner40440,source_article_sentences,output_schema40548,opts__24442__auto__,validate__837__auto__,map40546,ufv__,p__40442,meta40601){
this.output_checker40551 = output_checker40551;
this.owner = owner;
this.fnk40547 = fnk40547;
this.G__40552 = G__40552;
this.view = view;
this.data = data;
this.nav_items = nav_items;
this.input_schema40549 = input_schema40549;
this.map40545 = map40545;
this.data__24441__auto__ = data__24441__auto__;
this.input_checker40550 = input_checker40550;
this.vec__40544 = vec__40544;
this.top_nav = top_nav;
this.owner40440 = owner40440;
this.source_article_sentences = source_article_sentences;
this.output_schema40548 = output_schema40548;
this.opts__24442__auto__ = opts__24442__auto__;
this.validate__837__auto__ = validate__837__auto__;
this.map40546 = map40546;
this.ufv__ = ufv__;
this.p__40442 = p__40442;
this.meta40601 = meta40601;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.articles.t40600.cljs$lang$type = true;
stuttaford.articles.t40600.cljs$lang$ctorStr = "stuttaford.articles/t40600";
stuttaford.articles.t40600.cljs$lang$ctorPrWriter = ((function (nav_items,map40546,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40548,input_schema40549,input_checker40550,output_checker40551,vec__40544,opts__24442__auto__){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"stuttaford.articles/t40600");
});})(nav_items,map40546,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40548,input_schema40549,input_checker40550,output_checker40551,vec__40544,opts__24442__auto__))
;
stuttaford.articles.t40600.prototype.om$core$IDisplayName$ = true;
stuttaford.articles.t40600.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (nav_items,map40546,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40548,input_schema40549,input_checker40550,output_checker40551,vec__40544,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "top-nav";
});})(nav_items,map40546,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40548,input_schema40549,input_checker40550,output_checker40551,vec__40544,opts__24442__auto__))
;
stuttaford.articles.t40600.prototype.om$core$IRenderState$ = true;
stuttaford.articles.t40600.prototype.om$core$IRenderState$render_state$arity$2 = ((function (nav_items,map40546,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40548,input_schema40549,input_checker40550,output_checker40551,vec__40544,opts__24442__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var G__40605 = {"className": "articles"};var G__40606 = "ARTICLES";return React.DOM.div(G__40605,G__40606);
})(),om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__21074__auto__ = ((function (___$1,nav_items,map40546,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40548,input_schema40549,input_checker40550,output_checker40551,vec__40544,opts__24442__auto__){
return (function iter__40607(s__40608){return (new cljs.core.LazySeq(null,((function (___$1,nav_items,map40546,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40548,input_schema40549,input_checker40550,output_checker40551,vec__40544,opts__24442__auto__){
return (function (){var s__40608__$1 = s__40608;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40608__$1);if(temp__4126__auto__)
{var s__40608__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40608__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__40608__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__40610 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__40609 = (0);while(true){
if((i__40609 < size__21073__auto__))
{var vec__40619 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__40609);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40619,(0),null);var vec__40620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40619,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40620,(0),null);cljs.core.chunk_append(b__40610,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__40621 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__40609,vec__40619,id,vec__40620,label,c__21072__auto__,size__21073__auto__,b__40610,s__40608__$2,temp__4126__auto__,___$1,nav_items,map40546,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40548,input_schema40549,input_checker40550,output_checker40551,vec__40544,opts__24442__auto__){
return (function (){return stuttaford.articles.do_action_BANG_(self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__40609,vec__40619,id,vec__40620,label,c__21072__auto__,size__21073__auto__,b__40610,s__40608__$2,temp__4126__auto__,___$1,nav_items,map40546,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40548,input_schema40549,input_checker40550,output_checker40551,vec__40544,opts__24442__auto__))
], null);var G__40621__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40621,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__40621);return G__40621__$1;
})(),cljs.core.array_seq([label], 0)));
{
var G__40648 = (i__40609 + (1));
i__40609 = G__40648;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40610),iter__40607(cljs.core.chunk_rest(s__40608__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40610),null);
}
} else
{var vec__40622 = cljs.core.first(s__40608__$2);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40622,(0),null);var vec__40623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40622,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40623,(0),null);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__40624 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__40622,id,vec__40623,label,s__40608__$2,temp__4126__auto__,___$1,nav_items,map40546,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40548,input_schema40549,input_checker40550,output_checker40551,vec__40544,opts__24442__auto__){
return (function (){return stuttaford.articles.do_action_BANG_(self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(vec__40622,id,vec__40623,label,s__40608__$2,temp__4126__auto__,___$1,nav_items,map40546,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40548,input_schema40549,input_checker40550,output_checker40551,vec__40544,opts__24442__auto__))
], null);var G__40624__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40624,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__40624);return G__40624__$1;
})(),cljs.core.array_seq([label], 0)),iter__40607(cljs.core.rest(s__40608__$2)));
}
} else
{return null;
}
break;
}
});})(___$1,nav_items,map40546,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40548,input_schema40549,input_checker40550,output_checker40551,vec__40544,opts__24442__auto__))
,null,null));
});})(___$1,nav_items,map40546,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40548,input_schema40549,input_checker40550,output_checker40551,vec__40544,opts__24442__auto__))
;return iter__21074__auto__(self__.nav_items);
})(),((cljs.core.seq(self__.source_article_sentences))?cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40625 = {"className": "variants-status"};var G__40626 = "Status: ";var G__40627 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__21074__auto__ = ((function (G__40625,G__40626,___$1,nav_items,map40546,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40548,input_schema40549,input_checker40550,output_checker40551,vec__40544,opts__24442__auto__){
return (function iter__40628(s__40629){return (new cljs.core.LazySeq(null,((function (G__40625,G__40626,___$1,nav_items,map40546,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40548,input_schema40549,input_checker40550,output_checker40551,vec__40544,opts__24442__auto__){
return (function (){var s__40629__$1 = s__40629;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40629__$1);if(temp__4126__auto__)
{var s__40629__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40629__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__40629__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__40631 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__40630 = (0);while(true){
if((i__40630 < size__21073__auto__))
{var variant = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__40630);var variant_name = cljs.core.name(variant);cljs.core.chunk_append(b__40631,sablono.interpreter.interpret(om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),((stuttaford.articles.variant_is_complete_QMARK_(self__.source_article_sentences,variant))?"success":"warning")], null),cljs.core.array_seq([variant_name], 0))));
{
var G__40649 = (i__40630 + (1));
i__40630 = G__40649;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40631),iter__40628(cljs.core.chunk_rest(s__40629__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40631),null);
}
} else
{var variant = cljs.core.first(s__40629__$2);var variant_name = cljs.core.name(variant);return cljs.core.cons(sablono.interpreter.interpret(om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),((stuttaford.articles.variant_is_complete_QMARK_(self__.source_article_sentences,variant))?"success":"warning")], null),cljs.core.array_seq([variant_name], 0))),iter__40628(cljs.core.rest(s__40629__$2)));
}
} else
{return null;
}
break;
}
});})(G__40625,G__40626,___$1,nav_items,map40546,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40548,input_schema40549,input_checker40550,output_checker40551,vec__40544,opts__24442__auto__))
,null,null));
});})(G__40625,G__40626,___$1,nav_items,map40546,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40548,input_schema40549,input_checker40550,output_checker40551,vec__40544,opts__24442__auto__))
;return iter__21074__auto__(stuttaford.articles.variant_names);
})());return React.DOM.div(G__40625,G__40626,G__40627);
})(),(function (){var G__40634 = {"className": "word-counts"};var G__40635 = "Words counts";var G__40636 = sablono.interpreter.interpret(om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([stuttaford.articles.word_count(self__.data,new cljs.core.Keyword(null,"source","source",-433931539))], 0)));var G__40637 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__21074__auto__ = ((function (G__40634,G__40635,G__40636,___$1,nav_items,map40546,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40548,input_schema40549,input_checker40550,output_checker40551,vec__40544,opts__24442__auto__){
return (function iter__40638(s__40639){return (new cljs.core.LazySeq(null,((function (G__40634,G__40635,G__40636,___$1,nav_items,map40546,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40548,input_schema40549,input_checker40550,output_checker40551,vec__40544,opts__24442__auto__){
return (function (){var s__40639__$1 = s__40639;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40639__$1);if(temp__4126__auto__)
{var s__40639__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40639__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__40639__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__40641 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__40640 = (0);while(true){
if((i__40640 < size__21073__auto__))
{var variant = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__40640);var variant_name = cljs.core.name(variant);cljs.core.chunk_append(b__40641,sablono.interpreter.interpret(om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([stuttaford.articles.word_count(self__.data,variant)], 0))));
{
var G__40650 = (i__40640 + (1));
i__40640 = G__40650;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40641),iter__40638(cljs.core.chunk_rest(s__40639__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40641),null);
}
} else
{var variant = cljs.core.first(s__40639__$2);var variant_name = cljs.core.name(variant);return cljs.core.cons(sablono.interpreter.interpret(om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([stuttaford.articles.word_count(self__.data,variant)], 0))),iter__40638(cljs.core.rest(s__40639__$2)));
}
} else
{return null;
}
break;
}
});})(G__40634,G__40635,G__40636,___$1,nav_items,map40546,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40548,input_schema40549,input_checker40550,output_checker40551,vec__40544,opts__24442__auto__))
,null,null));
});})(G__40634,G__40635,G__40636,___$1,nav_items,map40546,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40548,input_schema40549,input_checker40550,output_checker40551,vec__40544,opts__24442__auto__))
;return iter__21074__auto__(stuttaford.articles.variant_names);
})());return React.DOM.div(G__40634,G__40635,G__40636,G__40637);
})()], null)):null)], 0))], 0));
});})(nav_items,map40546,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40548,input_schema40549,input_checker40550,output_checker40551,vec__40544,opts__24442__auto__))
;
stuttaford.articles.t40600.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (nav_items,map40546,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40548,input_schema40549,input_checker40550,output_checker40551,vec__40544,opts__24442__auto__){
return (function (_40602){var self__ = this;
var _40602__$1 = this;return self__.meta40601;
});})(nav_items,map40546,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40548,input_schema40549,input_checker40550,output_checker40551,vec__40544,opts__24442__auto__))
;
stuttaford.articles.t40600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (nav_items,map40546,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40548,input_schema40549,input_checker40550,output_checker40551,vec__40544,opts__24442__auto__){
return (function (_40602,meta40601__$1){var self__ = this;
var _40602__$1 = this;return (new stuttaford.articles.t40600(self__.output_checker40551,self__.owner,self__.fnk40547,self__.G__40552,self__.view,self__.data,self__.nav_items,self__.input_schema40549,self__.map40545,self__.data__24441__auto__,self__.input_checker40550,self__.vec__40544,self__.top_nav,self__.owner40440,self__.source_article_sentences,self__.output_schema40548,self__.opts__24442__auto__,self__.validate__837__auto__,self__.map40546,self__.ufv__,self__.p__40442,meta40601__$1));
});})(nav_items,map40546,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40548,input_schema40549,input_checker40550,output_checker40551,vec__40544,opts__24442__auto__))
;
stuttaford.articles.__GT_t40600 = ((function (nav_items,map40546,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40548,input_schema40549,input_checker40550,output_checker40551,vec__40544,opts__24442__auto__){
return (function __GT_t40600(output_checker40551__$1,owner__$1,fnk40547__$1,G__40552__$1,view__$1,data__$1,nav_items__$1,input_schema40549__$1,map40545__$1,data__24441__auto____$1,input_checker40550__$1,vec__40544__$1,top_nav__$1,owner40440__$1,source_article_sentences__$1,output_schema40548__$1,opts__24442__auto____$1,validate__837__auto____$1,map40546__$1,ufv____$1,p__40442__$1,meta40601){return (new stuttaford.articles.t40600(output_checker40551__$1,owner__$1,fnk40547__$1,G__40552__$1,view__$1,data__$1,nav_items__$1,input_schema40549__$1,map40545__$1,data__24441__auto____$1,input_checker40550__$1,vec__40544__$1,top_nav__$1,owner40440__$1,source_article_sentences__$1,output_schema40548__$1,opts__24442__auto____$1,validate__837__auto____$1,map40546__$1,ufv____$1,p__40442__$1,meta40601));
});})(nav_items,map40546,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40548,input_schema40549,input_checker40550,output_checker40551,vec__40544,opts__24442__auto__))
;
}
return (new stuttaford.articles.t40600(output_checker40551,owner,fnk40547,G__40552,view,data,nav_items,input_schema40549,map40545,data__24441__auto__,input_checker40550,vec__40544,top_nav,owner40440,source_article_sentences,output_schema40548,opts__24442__auto__,validate__837__auto__,map40546,ufv__,p__40442,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40651 = (function (){var G__40644 = o__840__auto__;return (output_checker40551.cljs$core$IFn$_invoke$arity$1 ? output_checker40551.cljs$core$IFn$_invoke$arity$1(G__40644) : output_checker40551.call(null,G__40644));
})();if(cljs.core.truth_(temp__4126__auto___40651))
{var error__839__auto___40652 = temp__4126__auto___40651;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk40547","fnk40547",882825796,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40652], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40548,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40652], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema40548,input_schema40549,input_checker40550,output_checker40551,vec__40544,opts__24442__auto__))
,schema.core.make_fn_schema(output_schema40548,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40549], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24442__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner40440,new cljs.core.Keyword(null,"data","data",-232669377),data__24441__auto__], null));
};
var top_nav = function (data__24441__auto__,owner40440,var_args){
var p__40442 = null;if (arguments.length > 2) {
  p__40442 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return top_nav__delegate.call(this,data__24441__auto__,owner40440,p__40442);};
top_nav.cljs$lang$maxFixedArity = 2;
top_nav.cljs$lang$applyTo = (function (arglist__40653){
var data__24441__auto__ = cljs.core.first(arglist__40653);
arglist__40653 = cljs.core.next(arglist__40653);
var owner40440 = cljs.core.first(arglist__40653);
var p__40442 = cljs.core.rest(arglist__40653);
return top_nav__delegate(data__24441__auto__,owner40440,p__40442);
});
top_nav.cljs$core$IFn$_invoke$arity$variadic = top_nav__delegate;
return top_nav;
})()
;
stuttaford.articles.__GT_top_nav = (function() {
var __GT_top_nav = null;
var __GT_top_nav__1 = (function (cursor__24410__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.top_nav,cursor__24410__auto__);
});
var __GT_top_nav__2 = (function (cursor__24410__auto__,m40441){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.articles.top_nav,cursor__24410__auto__,m40441);
});
__GT_top_nav = function(cursor__24410__auto__,m40441){
switch(arguments.length){
case 1:
return __GT_top_nav__1.call(this,cursor__24410__auto__);
case 2:
return __GT_top_nav__2.call(this,cursor__24410__auto__,m40441);
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
var app_view__delegate = function (data__24441__auto__,owner40654,p__40656){var vec__40775 = p__40656;var opts__24442__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40775,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema40778 = schema.core.Any;var input_schema40779 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359)),schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map40776","map40776",-1582409392,null))], null);var input_checker40780 = schema.core.checker(input_schema40779);var output_checker40781 = schema.core.checker(output_schema40778);return schema.core.schematize_fn(((function (ufv__,output_schema40778,input_schema40779,input_checker40780,output_checker40781,vec__40775,opts__24442__auto__){
return (function fnk40777(G__40782){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___40893 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40782], null);var temp__4126__auto___40894 = (function (){var G__40838 = args__838__auto___40893;return (input_checker40780.cljs$core$IFn$_invoke$arity$1 ? input_checker40780.cljs$core$IFn$_invoke$arity$1(G__40838) : input_checker40780.call(null,G__40838));
})();if(cljs.core.truth_(temp__4126__auto___40894))
{var error__839__auto___40895 = temp__4126__auto___40894;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk40777","fnk40777",1693088950,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40895], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40779,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___40893,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40895], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map40776 = G__40782;while(true){
if(cljs.core.map_QMARK_(map40776))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map40776], 0))));
}
var data = plumbing.fnk.schema.safe_get(map40776,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var source_article_sentences = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map40776,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.articles.t40839 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.articles.t40839 = (function (G__40782,app_view,input_schema40779,output_schema40778,owner,view,data,vec__40775,output_checker40781,data__24441__auto__,map40776,owner40654,fnk40777,source_article_sentences,opts__24442__auto__,p__40656,validate__837__auto__,input_checker40780,ufv__,meta40840){
this.G__40782 = G__40782;
this.app_view = app_view;
this.input_schema40779 = input_schema40779;
this.output_schema40778 = output_schema40778;
this.owner = owner;
this.view = view;
this.data = data;
this.vec__40775 = vec__40775;
this.output_checker40781 = output_checker40781;
this.data__24441__auto__ = data__24441__auto__;
this.map40776 = map40776;
this.owner40654 = owner40654;
this.fnk40777 = fnk40777;
this.source_article_sentences = source_article_sentences;
this.opts__24442__auto__ = opts__24442__auto__;
this.p__40656 = p__40656;
this.validate__837__auto__ = validate__837__auto__;
this.input_checker40780 = input_checker40780;
this.ufv__ = ufv__;
this.meta40840 = meta40840;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.articles.t40839.cljs$lang$type = true;
stuttaford.articles.t40839.cljs$lang$ctorStr = "stuttaford.articles/t40839";
stuttaford.articles.t40839.cljs$lang$ctorPrWriter = ((function (owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40778,input_schema40779,input_checker40780,output_checker40781,vec__40775,opts__24442__auto__){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"stuttaford.articles/t40839");
});})(owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40778,input_schema40779,input_checker40780,output_checker40781,vec__40775,opts__24442__auto__))
;
stuttaford.articles.t40839.prototype.om$core$IDisplayName$ = true;
stuttaford.articles.t40839.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40778,input_schema40779,input_checker40780,output_checker40781,vec__40775,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "app-view";
});})(owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40778,input_schema40779,input_checker40780,output_checker40781,vec__40775,opts__24442__auto__))
;
stuttaford.articles.t40839.prototype.om$core$IRenderState$ = true;
stuttaford.articles.t40839.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40778,input_schema40779,input_checker40780,output_checker40781,vec__40775,opts__24442__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret((function (){var vec__40842 = (function (){var G__40843 = stuttaford.articles.nav_items;return (self__.view.cljs$core$IFn$_invoke$arity$1 ? self__.view.cljs$core$IFn$_invoke$arity$1(G__40843) : self__.view.call(null,G__40843));
})();var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40842,(0),null);var view_component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40842,(1),null);return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),stuttaford.articles.__GT_top_nav.cljs$core$IFn$_invoke$arity$2(self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),stuttaford.articles.nav_items], null)], null))], null),cljs.core.array_seq([(cljs.core.truth_(view_component)?om.core.build.cljs$core$IFn$_invoke$arity$2(view_component,self__.data):(function (){var G__40846 = null;return React.DOM.div(G__40846);
})())], 0));
})());
});})(owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40778,input_schema40779,input_checker40780,output_checker40781,vec__40775,opts__24442__auto__))
;
stuttaford.articles.t40839.prototype.om$core$IDidMount$ = true;
stuttaford.articles.t40839.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40778,input_schema40779,input_checker40780,output_checker40781,vec__40775,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return null;
});})(owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40778,input_schema40779,input_checker40780,output_checker40781,vec__40775,opts__24442__auto__))
;
stuttaford.articles.t40839.prototype.om$core$IWillUnmount$ = true;
stuttaford.articles.t40839.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40778,input_schema40779,input_checker40780,output_checker40781,vec__40775,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.close_BANG_(stuttaford.om.common.control_chan(self__.owner));
});})(owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40778,input_schema40779,input_checker40780,output_checker40781,vec__40775,opts__24442__auto__))
;
stuttaford.articles.t40839.prototype.om$core$IWillMount$ = true;
stuttaford.articles.t40839.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40778,input_schema40779,input_checker40780,output_checker40781,vec__40775,opts__24442__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var c__22986__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__22986__auto__,c,___$1,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40778,input_schema40779,input_checker40780,output_checker40781,vec__40775,opts__24442__auto__){
return (function (){var f__22987__auto__ = (function (){var switch__22971__auto__ = ((function (c__22986__auto__,c,___$1,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40778,input_schema40779,input_checker40780,output_checker40781,vec__40775,opts__24442__auto__){
return (function (state_40867){var state_val_40868 = (state_40867[(1)]);if((state_val_40868 === (7)))
{var inst_40850 = (state_40867[(7)]);var inst_40850__$1 = (state_40867[(2)]);var state_40867__$1 = (function (){var statearr_40869 = state_40867;(statearr_40869[(7)] = inst_40850__$1);
return statearr_40869;
})();if(cljs.core.truth_(inst_40850__$1))
{var statearr_40870_40896 = state_40867__$1;(statearr_40870_40896[(1)] = (8));
} else
{var statearr_40871_40897 = state_40867__$1;(statearr_40871_40897[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40868 === (1)))
{var state_40867__$1 = state_40867;var statearr_40872_40898 = state_40867__$1;(statearr_40872_40898[(2)] = null);
(statearr_40872_40898[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40868 === (4)))
{var state_40867__$1 = state_40867;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40867__$1,(7),c);
} else
{if((state_val_40868 === (6)))
{var inst_40863 = (state_40867[(2)]);var state_40867__$1 = state_40867;var statearr_40873_40899 = state_40867__$1;(statearr_40873_40899[(2)] = inst_40863);
(statearr_40873_40899[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40868 === (3)))
{var inst_40865 = (state_40867[(2)]);var state_40867__$1 = state_40867;return cljs.core.async.impl.ioc_helpers.return_chan(state_40867__$1,inst_40865);
} else
{if((state_val_40868 === (2)))
{var state_40867__$1 = state_40867;var statearr_40874_40900 = state_40867__$1;(statearr_40874_40900[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40868 === (9)))
{var state_40867__$1 = state_40867;var statearr_40876_40901 = state_40867__$1;(statearr_40876_40901[(2)] = null);
(statearr_40876_40901[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40868 === (5)))
{var state_40867__$1 = state_40867;var statearr_40877_40902 = state_40867__$1;(statearr_40877_40902[(2)] = null);
(statearr_40877_40902[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40868 === (10)))
{var inst_40859 = (state_40867[(2)]);var state_40867__$1 = (function (){var statearr_40878 = state_40867;(statearr_40878[(8)] = inst_40859);
return statearr_40878;
})();var statearr_40879_40903 = state_40867__$1;(statearr_40879_40903[(2)] = null);
(statearr_40879_40903[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40868 === (8)))
{var inst_40850 = (state_40867[(7)]);var inst_40853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40850,(0),null);var inst_40854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40850,(1),null);var inst_40855 = stuttaford.om.common.config.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"debug?","debug?",-1831756173));var inst_40856 = (function (){var G__40880 = self__.data;var G__40881 = inst_40853;var G__40882 = inst_40854;var G__40883 = inst_40855;return (stuttaford.articles.perform_action.cljs$core$IFn$_invoke$arity$4 ? stuttaford.articles.perform_action.cljs$core$IFn$_invoke$arity$4(G__40880,G__40881,G__40882,G__40883) : stuttaford.articles.perform_action.call(null,G__40880,G__40881,G__40882,G__40883));
})();var state_40867__$1 = state_40867;var statearr_40884_40904 = state_40867__$1;(statearr_40884_40904[(2)] = inst_40856);
(statearr_40884_40904[(1)] = (10));
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
});})(c__22986__auto__,c,___$1,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40778,input_schema40779,input_checker40780,output_checker40781,vec__40775,opts__24442__auto__))
;return ((function (switch__22971__auto__,c__22986__auto__,c,___$1,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40778,input_schema40779,input_checker40780,output_checker40781,vec__40775,opts__24442__auto__){
return (function() {
var state_machine__22972__auto__ = null;
var state_machine__22972__auto____0 = (function (){var statearr_40888 = [null,null,null,null,null,null,null,null,null];(statearr_40888[(0)] = state_machine__22972__auto__);
(statearr_40888[(1)] = (1));
return statearr_40888;
});
var state_machine__22972__auto____1 = (function (state_40867){while(true){
var ret_value__22973__auto__ = (function (){try{while(true){
var result__22974__auto__ = switch__22971__auto__(state_40867);if(cljs.core.keyword_identical_QMARK_(result__22974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22974__auto__;
}
break;
}
}catch (e40889){if((e40889 instanceof Object))
{var ex__22975__auto__ = e40889;var statearr_40890_40905 = state_40867;(statearr_40890_40905[(5)] = ex__22975__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40867);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e40889;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40906 = state_40867;
state_40867 = G__40906;
continue;
}
} else
{return ret_value__22973__auto__;
}
break;
}
});
state_machine__22972__auto__ = function(state_40867){
switch(arguments.length){
case 0:
return state_machine__22972__auto____0.call(this);
case 1:
return state_machine__22972__auto____1.call(this,state_40867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22972__auto____0;
state_machine__22972__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22972__auto____1;
return state_machine__22972__auto__;
})()
;})(switch__22971__auto__,c__22986__auto__,c,___$1,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40778,input_schema40779,input_checker40780,output_checker40781,vec__40775,opts__24442__auto__))
})();var state__22988__auto__ = (function (){var statearr_40891 = (function (){return (f__22987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22987__auto__.cljs$core$IFn$_invoke$arity$0() : f__22987__auto__.call(null));
})();(statearr_40891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22986__auto__);
return statearr_40891;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22988__auto__);
});})(c__22986__auto__,c,___$1,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40778,input_schema40779,input_checker40780,output_checker40781,vec__40775,opts__24442__auto__))
);
return c__22986__auto__;
});})(owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40778,input_schema40779,input_checker40780,output_checker40781,vec__40775,opts__24442__auto__))
;
stuttaford.articles.t40839.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40778,input_schema40779,input_checker40780,output_checker40781,vec__40775,opts__24442__auto__){
return (function (_40841){var self__ = this;
var _40841__$1 = this;return self__.meta40840;
});})(owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40778,input_schema40779,input_checker40780,output_checker40781,vec__40775,opts__24442__auto__))
;
stuttaford.articles.t40839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40778,input_schema40779,input_checker40780,output_checker40781,vec__40775,opts__24442__auto__){
return (function (_40841,meta40840__$1){var self__ = this;
var _40841__$1 = this;return (new stuttaford.articles.t40839(self__.G__40782,self__.app_view,self__.input_schema40779,self__.output_schema40778,self__.owner,self__.view,self__.data,self__.vec__40775,self__.output_checker40781,self__.data__24441__auto__,self__.map40776,self__.owner40654,self__.fnk40777,self__.source_article_sentences,self__.opts__24442__auto__,self__.p__40656,self__.validate__837__auto__,self__.input_checker40780,self__.ufv__,meta40840__$1));
});})(owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40778,input_schema40779,input_checker40780,output_checker40781,vec__40775,opts__24442__auto__))
;
stuttaford.articles.__GT_t40839 = ((function (owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40778,input_schema40779,input_checker40780,output_checker40781,vec__40775,opts__24442__auto__){
return (function __GT_t40839(G__40782__$1,app_view__$1,input_schema40779__$1,output_schema40778__$1,owner__$1,view__$1,data__$1,vec__40775__$1,output_checker40781__$1,data__24441__auto____$1,map40776__$1,owner40654__$1,fnk40777__$1,source_article_sentences__$1,opts__24442__auto____$1,p__40656__$1,validate__837__auto____$1,input_checker40780__$1,ufv____$1,meta40840){return (new stuttaford.articles.t40839(G__40782__$1,app_view__$1,input_schema40779__$1,output_schema40778__$1,owner__$1,view__$1,data__$1,vec__40775__$1,output_checker40781__$1,data__24441__auto____$1,map40776__$1,owner40654__$1,fnk40777__$1,source_article_sentences__$1,opts__24442__auto____$1,p__40656__$1,validate__837__auto____$1,input_checker40780__$1,ufv____$1,meta40840));
});})(owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema40778,input_schema40779,input_checker40780,output_checker40781,vec__40775,opts__24442__auto__))
;
}
return (new stuttaford.articles.t40839(G__40782,app_view,input_schema40779,output_schema40778,owner,view,data,vec__40775,output_checker40781,data__24441__auto__,map40776,owner40654,fnk40777,source_article_sentences,opts__24442__auto__,p__40656,validate__837__auto__,input_checker40780,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___40907 = (function (){var G__40892 = o__840__auto__;return (output_checker40781.cljs$core$IFn$_invoke$arity$1 ? output_checker40781.cljs$core$IFn$_invoke$arity$1(G__40892) : output_checker40781.call(null,G__40892));
})();if(cljs.core.truth_(temp__4126__auto___40907))
{var error__839__auto___40908 = temp__4126__auto___40907;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk40777","fnk40777",1693088950,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___40908], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40778,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___40908], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema40778,input_schema40779,input_checker40780,output_checker40781,vec__40775,opts__24442__auto__))
,schema.core.make_fn_schema(output_schema40778,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40779], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24442__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner40654,new cljs.core.Keyword(null,"data","data",-232669377),data__24441__auto__], null));
};
var app_view = function (data__24441__auto__,owner40654,var_args){
var p__40656 = null;if (arguments.length > 2) {
  p__40656 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_view__delegate.call(this,data__24441__auto__,owner40654,p__40656);};
app_view.cljs$lang$maxFixedArity = 2;
app_view.cljs$lang$applyTo = (function (arglist__40909){
var data__24441__auto__ = cljs.core.first(arglist__40909);
arglist__40909 = cljs.core.next(arglist__40909);
var owner40654 = cljs.core.first(arglist__40909);
var p__40656 = cljs.core.rest(arglist__40909);
return app_view__delegate(data__24441__auto__,owner40654,p__40656);
});
app_view.cljs$core$IFn$_invoke$arity$variadic = app_view__delegate;
return app_view;
})()
;
stuttaford.articles.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__24410__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.app_view,cursor__24410__auto__);
});
var __GT_app_view__2 = (function (cursor__24410__auto__,m40655){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.articles.app_view,cursor__24410__auto__,m40655);
});
__GT_app_view = function(cursor__24410__auto__,m40655){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__24410__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__24410__auto__,m40655);
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