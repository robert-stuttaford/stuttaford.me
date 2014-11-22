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
stuttaford.articles.variant_names = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c","c",-1763192079)], null);
stuttaford.articles.PARAGRAPH_BREAK = "PARAGRAPH-BREAK";
stuttaford.articles.paragraph_break_variants = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20913__auto__ = (function iter__174681(s__174682){return (new cljs.core.LazySeq(null,(function (){var s__174682__$1 = s__174682;while(true){
var temp__4126__auto__ = cljs.core.seq(s__174682__$1);if(temp__4126__auto__)
{var s__174682__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__174682__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__174682__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__174684 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__174683 = (0);while(true){
if((i__174683 < size__20912__auto__))
{var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__174683);cljs.core.chunk_append(b__174684,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,"\n\n"], null));
{
var G__174687 = (i__174683 + (1));
i__174683 = G__174687;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__174684),iter__174681(cljs.core.chunk_rest(s__174682__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__174684),null);
}
} else
{var n = cljs.core.first(s__174682__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,"\n\n"], null),iter__174681(cljs.core.rest(s__174682__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20913__auto__(stuttaford.articles.variant_names);
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
stuttaford.articles.variant_is_complete_QMARK_ = (function variant_is_complete_QMARK_(source_article_sentences,variant){return cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(clojure.string.blank_QMARK_,variant,new cljs.core.Keyword(null,"variants","variants",-176391100)),source_article_sentences));
});
stuttaford.articles.compose_variant = (function compose_variant(source_article_sentences,variant){return clojure.string.replace(clojure.string.trim(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(variant,new cljs.core.Keyword(null,"variants","variants",-176391100)),source_article_sentences)))),/\n /,"\n");
});
stuttaford.articles.perform_action = (function (){var method_table__21091__auto__ = (function (){var G__174688 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__174688) : cljs.core.atom.call(null,G__174688));
})();var prefer_table__21092__auto__ = (function (){var G__174689 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__174689) : cljs.core.atom.call(null,G__174689));
})();var method_cache__21093__auto__ = (function (){var G__174690 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__174690) : cljs.core.atom.call(null,G__174690));
})();var cached_hierarchy__21094__auto__ = (function (){var G__174691 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__174691) : cljs.core.atom.call(null,G__174691));
})();var hierarchy__21095__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("perform-action",((function (method_table__21091__auto__,prefer_table__21092__auto__,method_cache__21093__auto__,cached_hierarchy__21094__auto__,hierarchy__21095__auto__){
return (function (cursor,op,value,debug_QMARK_){if(cljs.core.truth_(debug_QMARK_))
{cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["ACTION:",op,value], 0));
} else
{}
return op;
});})(method_table__21091__auto__,prefer_table__21092__auto__,method_cache__21093__auto__,cached_hierarchy__21094__auto__,hierarchy__21095__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21095__auto__,method_table__21091__auto__,prefer_table__21092__auto__,method_cache__21093__auto__,cached_hierarchy__21094__auto__));
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
var source_article__delegate = function (data__24457__auto__,owner174692,p__174694){var vec__174718 = p__174694;var opts__24458__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__174718,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema174722 = schema.core.Any;var input_schema174723 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359)),schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"source-article","source-article",-1846600440)),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map174719","map174719",-1572656912,null))], null);var input_checker174724 = schema.core.checker(input_schema174723);var output_checker174725 = schema.core.checker(output_schema174722);return schema.core.schematize_fn(((function (ufv__,output_schema174722,input_schema174723,input_checker174724,output_checker174725,vec__174718,opts__24458__auto__){
return (function fnk174721(G__174726){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___174741 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__174726], null);var temp__4126__auto___174742 = (function (){var G__174734 = args__838__auto___174741;return (input_checker174724.cljs$core$IFn$_invoke$arity$1 ? input_checker174724.cljs$core$IFn$_invoke$arity$1(G__174734) : input_checker174724.call(null,G__174734));
})();if(cljs.core.truth_(temp__4126__auto___174742))
{var error__839__auto___174743 = temp__4126__auto___174742;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk174721","fnk174721",648364534,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___174743], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema174723,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___174741,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___174743], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map174719 = G__174726;while(true){
if(cljs.core.map_QMARK_(map174719))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map174719], 0))));
}
var map174720 = plumbing.fnk.schema.safe_get(map174719,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var source_article__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map174720,new cljs.core.Keyword(null,"source-article","source-article",-1846600440),null);var source_article_sentences = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map174720,new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map174719,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.articles.t174735 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.articles.t174735 = (function (input_checker174724,owner,owner174692,output_checker174725,G__174726,map174720,source_article,map174719,vec__174718,opts__24458__auto__,fnk174721,source_article_sentences,input_schema174723,output_schema174722,validate__837__auto__,p__174694,ufv__,data__24457__auto__,meta174736){
this.input_checker174724 = input_checker174724;
this.owner = owner;
this.owner174692 = owner174692;
this.output_checker174725 = output_checker174725;
this.G__174726 = G__174726;
this.map174720 = map174720;
this.source_article = source_article;
this.map174719 = map174719;
this.vec__174718 = vec__174718;
this.opts__24458__auto__ = opts__24458__auto__;
this.fnk174721 = fnk174721;
this.source_article_sentences = source_article_sentences;
this.input_schema174723 = input_schema174723;
this.output_schema174722 = output_schema174722;
this.validate__837__auto__ = validate__837__auto__;
this.p__174694 = p__174694;
this.ufv__ = ufv__;
this.data__24457__auto__ = data__24457__auto__;
this.meta174736 = meta174736;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.articles.t174735.cljs$lang$type = true;
stuttaford.articles.t174735.cljs$lang$ctorStr = "stuttaford.articles/t174735";
stuttaford.articles.t174735.cljs$lang$ctorPrWriter = ((function (owner,source_article_sentences,source_article__$1,map174720,validate__837__auto__,ufv__,output_schema174722,input_schema174723,input_checker174724,output_checker174725,vec__174718,opts__24458__auto__){
return (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"stuttaford.articles/t174735");
});})(owner,source_article_sentences,source_article__$1,map174720,validate__837__auto__,ufv__,output_schema174722,input_schema174723,input_checker174724,output_checker174725,vec__174718,opts__24458__auto__))
;
stuttaford.articles.t174735.prototype.om$core$IDisplayName$ = true;
stuttaford.articles.t174735.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,source_article_sentences,source_article__$1,map174720,validate__837__auto__,ufv__,output_schema174722,input_schema174723,input_checker174724,output_checker174725,vec__174718,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "source-article";
});})(owner,source_article_sentences,source_article__$1,map174720,validate__837__auto__,ufv__,output_schema174722,input_schema174723,input_checker174724,output_checker174725,vec__174718,opts__24458__auto__))
;
stuttaford.articles.t174735.prototype.om$core$IRenderState$ = true;
stuttaford.articles.t174735.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,source_article_sentences,source_article__$1,map174720,validate__837__auto__,ufv__,output_schema174722,input_schema174723,input_checker174724,output_checker174725,vec__174718,opts__24458__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var attrs174738 = om_bootstrap.input.input((function (){var G__174739 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),stuttaford.articles.source_article_placeholder,new cljs.core.Keyword(null,"class","class",-2030961996),"source-article",new cljs.core.Keyword(null,"ref","ref",1289896967),"source-article",new cljs.core.Keyword(null,"value","value",305978217),self__.source_article,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.set_source_article,self__.owner),new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),true], null);var G__174739__$1 = ((stuttaford.articles.has_variants_QMARK_(self__.source_article_sentences))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__174739,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true):G__174739);return G__174739__$1;
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs174738))?sablono.interpreter.attributes(attrs174738):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs174738))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((stuttaford.articles.has_variants_QMARK_(self__.source_article_sentences))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.warning","p.warning",93305750),"To prevent muddling variant sentence order, the source article is now read-only."], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs174738),sablono.interpreter.interpret(((stuttaford.articles.has_variants_QMARK_(self__.source_article_sentences))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.warning","p.warning",93305750),"To prevent muddling variant sentence order, the source article is now read-only."], null):null))], null))));
});})(owner,source_article_sentences,source_article__$1,map174720,validate__837__auto__,ufv__,output_schema174722,input_schema174723,input_checker174724,output_checker174725,vec__174718,opts__24458__auto__))
;
stuttaford.articles.t174735.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,source_article_sentences,source_article__$1,map174720,validate__837__auto__,ufv__,output_schema174722,input_schema174723,input_checker174724,output_checker174725,vec__174718,opts__24458__auto__){
return (function (_174737){var self__ = this;
var _174737__$1 = this;return self__.meta174736;
});})(owner,source_article_sentences,source_article__$1,map174720,validate__837__auto__,ufv__,output_schema174722,input_schema174723,input_checker174724,output_checker174725,vec__174718,opts__24458__auto__))
;
stuttaford.articles.t174735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,source_article_sentences,source_article__$1,map174720,validate__837__auto__,ufv__,output_schema174722,input_schema174723,input_checker174724,output_checker174725,vec__174718,opts__24458__auto__){
return (function (_174737,meta174736__$1){var self__ = this;
var _174737__$1 = this;return (new stuttaford.articles.t174735(self__.input_checker174724,self__.owner,self__.owner174692,self__.output_checker174725,self__.G__174726,self__.map174720,self__.source_article,self__.map174719,self__.vec__174718,self__.opts__24458__auto__,self__.fnk174721,self__.source_article_sentences,self__.input_schema174723,self__.output_schema174722,self__.validate__837__auto__,self__.p__174694,self__.ufv__,self__.data__24457__auto__,meta174736__$1));
});})(owner,source_article_sentences,source_article__$1,map174720,validate__837__auto__,ufv__,output_schema174722,input_schema174723,input_checker174724,output_checker174725,vec__174718,opts__24458__auto__))
;
stuttaford.articles.__GT_t174735 = ((function (owner,source_article_sentences,source_article__$1,map174720,validate__837__auto__,ufv__,output_schema174722,input_schema174723,input_checker174724,output_checker174725,vec__174718,opts__24458__auto__){
return (function __GT_t174735(input_checker174724__$1,owner__$1,owner174692__$1,output_checker174725__$1,G__174726__$1,map174720__$1,source_article__$2,map174719__$1,vec__174718__$1,opts__24458__auto____$1,fnk174721__$1,source_article_sentences__$1,input_schema174723__$1,output_schema174722__$1,validate__837__auto____$1,p__174694__$1,ufv____$1,data__24457__auto____$1,meta174736){return (new stuttaford.articles.t174735(input_checker174724__$1,owner__$1,owner174692__$1,output_checker174725__$1,G__174726__$1,map174720__$1,source_article__$2,map174719__$1,vec__174718__$1,opts__24458__auto____$1,fnk174721__$1,source_article_sentences__$1,input_schema174723__$1,output_schema174722__$1,validate__837__auto____$1,p__174694__$1,ufv____$1,data__24457__auto____$1,meta174736));
});})(owner,source_article_sentences,source_article__$1,map174720,validate__837__auto__,ufv__,output_schema174722,input_schema174723,input_checker174724,output_checker174725,vec__174718,opts__24458__auto__))
;
}
return (new stuttaford.articles.t174735(input_checker174724,owner,owner174692,output_checker174725,G__174726,map174720,source_article__$1,map174719,vec__174718,opts__24458__auto__,fnk174721,source_article_sentences,input_schema174723,output_schema174722,validate__837__auto__,p__174694,ufv__,data__24457__auto__,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___174744 = (function (){var G__174740 = o__840__auto__;return (output_checker174725.cljs$core$IFn$_invoke$arity$1 ? output_checker174725.cljs$core$IFn$_invoke$arity$1(G__174740) : output_checker174725.call(null,G__174740));
})();if(cljs.core.truth_(temp__4126__auto___174744))
{var error__839__auto___174745 = temp__4126__auto___174744;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk174721","fnk174721",648364534,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___174745], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema174722,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___174745], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema174722,input_schema174723,input_checker174724,output_checker174725,vec__174718,opts__24458__auto__))
,schema.core.make_fn_schema(output_schema174722,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema174723], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24458__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner174692,new cljs.core.Keyword(null,"data","data",-232669377),data__24457__auto__], null));
};
var source_article = function (data__24457__auto__,owner174692,var_args){
var p__174694 = null;if (arguments.length > 2) {
  p__174694 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return source_article__delegate.call(this,data__24457__auto__,owner174692,p__174694);};
source_article.cljs$lang$maxFixedArity = 2;
source_article.cljs$lang$applyTo = (function (arglist__174746){
var data__24457__auto__ = cljs.core.first(arglist__174746);
arglist__174746 = cljs.core.next(arglist__174746);
var owner174692 = cljs.core.first(arglist__174746);
var p__174694 = cljs.core.rest(arglist__174746);
return source_article__delegate(data__24457__auto__,owner174692,p__174694);
});
source_article.cljs$core$IFn$_invoke$arity$variadic = source_article__delegate;
return source_article;
})()
;
stuttaford.articles.__GT_source_article = (function() {
var __GT_source_article = null;
var __GT_source_article__1 = (function (cursor__24426__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.source_article,cursor__24426__auto__);
});
var __GT_source_article__2 = (function (cursor__24426__auto__,m174693){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.articles.source_article,cursor__24426__auto__,m174693);
});
__GT_source_article = function(cursor__24426__auto__,m174693){
switch(arguments.length){
case 1:
return __GT_source_article__1.call(this,cursor__24426__auto__);
case 2:
return __GT_source_article__2.call(this,cursor__24426__auto__,m174693);
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
return (function (p1__174747_SHARP_){return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__174747_SHARP_,variant);
});})(value))
);
}
});
/**
* @param {...*} var_args
*/
stuttaford.articles.rewrite_sentence = (function() { 
var rewrite_sentence__delegate = function (data__24457__auto__,owner174748,p__174750){var vec__174823 = p__174750;var opts__24458__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__174823,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema174826 = schema.core.Any;var input_schema174827 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"variants","variants",-176391100),schema.core.Any,new cljs.core.Keyword(null,"source","source",-433931539),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map174824","map174824",-1043726603,null))], null);var input_checker174828 = schema.core.checker(input_schema174827);var output_checker174829 = schema.core.checker(output_schema174826);return schema.core.schematize_fn(((function (ufv__,output_schema174826,input_schema174827,input_checker174828,output_checker174829,vec__174823,opts__24458__auto__){
return (function fnk174825(G__174830){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___174895 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__174830], null);var temp__4126__auto___174896 = (function (){var G__174863 = args__838__auto___174895;return (input_checker174828.cljs$core$IFn$_invoke$arity$1 ? input_checker174828.cljs$core$IFn$_invoke$arity$1(G__174863) : input_checker174828.call(null,G__174863));
})();if(cljs.core.truth_(temp__4126__auto___174896))
{var error__839__auto___174897 = temp__4126__auto___174896;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk174825","fnk174825",-1920251170,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___174897], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema174827,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___174895,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___174897], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map174824 = G__174830;while(true){
if(cljs.core.map_QMARK_(map174824))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map174824], 0))));
}
var data = plumbing.fnk.schema.safe_get(map174824,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var source = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var variants = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"variants","variants",-176391100),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map174824,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.articles.t174864 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.articles.t174864 = (function (rewrite_sentence,owner,input_checker174828,data,vec__174823,p__174750,G__174830,variants,output_checker174829,output_schema174826,source,map174824,opts__24458__auto__,input_schema174827,validate__837__auto__,ufv__,data__24457__auto__,fnk174825,owner174748,meta174865){
this.rewrite_sentence = rewrite_sentence;
this.owner = owner;
this.input_checker174828 = input_checker174828;
this.data = data;
this.vec__174823 = vec__174823;
this.p__174750 = p__174750;
this.G__174830 = G__174830;
this.variants = variants;
this.output_checker174829 = output_checker174829;
this.output_schema174826 = output_schema174826;
this.source = source;
this.map174824 = map174824;
this.opts__24458__auto__ = opts__24458__auto__;
this.input_schema174827 = input_schema174827;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.data__24457__auto__ = data__24457__auto__;
this.fnk174825 = fnk174825;
this.owner174748 = owner174748;
this.meta174865 = meta174865;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.articles.t174864.cljs$lang$type = true;
stuttaford.articles.t174864.cljs$lang$ctorStr = "stuttaford.articles/t174864";
stuttaford.articles.t174864.cljs$lang$ctorPrWriter = ((function (owner,variants,source,data,validate__837__auto__,ufv__,output_schema174826,input_schema174827,input_checker174828,output_checker174829,vec__174823,opts__24458__auto__){
return (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"stuttaford.articles/t174864");
});})(owner,variants,source,data,validate__837__auto__,ufv__,output_schema174826,input_schema174827,input_checker174828,output_checker174829,vec__174823,opts__24458__auto__))
;
stuttaford.articles.t174864.prototype.om$core$IDisplayName$ = true;
stuttaford.articles.t174864.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,variants,source,data,validate__837__auto__,ufv__,output_schema174826,input_schema174827,input_checker174828,output_checker174829,vec__174823,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "rewrite-sentence";
});})(owner,variants,source,data,validate__837__auto__,ufv__,output_schema174826,input_schema174827,input_checker174828,output_checker174829,vec__174823,opts__24458__auto__))
;
stuttaford.articles.t174864.prototype.om$core$IRenderState$ = true;
stuttaford.articles.t174864.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,variants,source,data,validate__837__auto__,ufv__,output_schema174826,input_schema174827,input_checker174828,output_checker174829,vec__174823,opts__24458__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var G__174869 = {"className": "sentence"};var G__174870 = (function (){var attrs174867 = self__.source;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,((cljs.core.map_QMARK_(attrs174867))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["source-sentence"], null)], null),attrs174867], 0))):{"className": "source-sentence"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs174867))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs174867)], null))));
})();var G__174871 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20913__auto__ = ((function (G__174869,G__174870,___$1,owner,variants,source,data,validate__837__auto__,ufv__,output_schema174826,input_schema174827,input_checker174828,output_checker174829,vec__174823,opts__24458__auto__){
return (function iter__174872(s__174873){return (new cljs.core.LazySeq(null,((function (G__174869,G__174870,___$1,owner,variants,source,data,validate__837__auto__,ufv__,output_schema174826,input_schema174827,input_checker174828,output_checker174829,vec__174823,opts__24458__auto__){
return (function (){var s__174873__$1 = s__174873;while(true){
var temp__4126__auto__ = cljs.core.seq(s__174873__$1);if(temp__4126__auto__)
{var s__174873__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__174873__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__174873__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__174875 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__174874 = (0);while(true){
if((i__174874 < size__20912__auto__))
{var variant = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__174874);var variant_name = cljs.core.name(variant);cljs.core.chunk_append(b__174875,(function (){var G__174886 = {"className": "input"};var G__174887 = (function (){var attrs174868 = variant_name;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs174868))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["index"], null)], null),attrs174868], 0))):{"className": "index"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs174868))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs174868)], null))));
})();var G__174888 = sablono.interpreter.interpret((function (){var value = (function (){var G__174889 = self__.variants;return (variant.cljs$core$IFn$_invoke$arity$1 ? variant.cljs$core$IFn$_invoke$arity$1(G__174889) : variant.call(null,G__174889));
})();return om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"class","class",-2030961996),("variant "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(clojure.string.blank_QMARK_(value))?"invalid":"valid"))),new cljs.core.Keyword(null,"ref","ref",1289896967),("variant-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant_name)),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__174874,value,G__174886,G__174887,variant_name,variant,c__20911__auto__,size__20912__auto__,b__174875,s__174873__$2,temp__4126__auto__,G__174869,G__174870,___$1,owner,variants,source,data,validate__837__auto__,ufv__,output_schema174826,input_schema174827,input_checker174828,output_checker174829,vec__174823,opts__24458__auto__){
return (function (){return stuttaford.articles.set_variant(self__.owner,self__.data,variant);
});})(i__174874,value,G__174886,G__174887,variant_name,variant,c__20911__auto__,size__20912__auto__,b__174875,s__174873__$2,temp__4126__auto__,G__174869,G__174870,___$1,owner,variants,source,data,validate__837__auto__,ufv__,output_schema174826,input_schema174827,input_checker174828,output_checker174829,vec__174823,opts__24458__auto__))
], null));
})());return React.DOM.div(G__174886,G__174887,G__174888);
})());
{
var G__174898 = (i__174874 + (1));
i__174874 = G__174898;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__174875),iter__174872(cljs.core.chunk_rest(s__174873__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__174875),null);
}
} else
{var variant = cljs.core.first(s__174873__$2);var variant_name = cljs.core.name(variant);return cljs.core.cons((function (){var G__174890 = {"className": "input"};var G__174891 = (function (){var attrs174868 = variant_name;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs174868))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["index"], null)], null),attrs174868], 0))):{"className": "index"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs174868))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs174868)], null))));
})();var G__174892 = sablono.interpreter.interpret((function (){var value = (function (){var G__174893 = self__.variants;return (variant.cljs$core$IFn$_invoke$arity$1 ? variant.cljs$core$IFn$_invoke$arity$1(G__174893) : variant.call(null,G__174893));
})();return om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"class","class",-2030961996),("variant "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(clojure.string.blank_QMARK_(value))?"invalid":"valid"))),new cljs.core.Keyword(null,"ref","ref",1289896967),("variant-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant_name)),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (value,G__174890,G__174891,variant_name,variant,s__174873__$2,temp__4126__auto__,G__174869,G__174870,___$1,owner,variants,source,data,validate__837__auto__,ufv__,output_schema174826,input_schema174827,input_checker174828,output_checker174829,vec__174823,opts__24458__auto__){
return (function (){return stuttaford.articles.set_variant(self__.owner,self__.data,variant);
});})(value,G__174890,G__174891,variant_name,variant,s__174873__$2,temp__4126__auto__,G__174869,G__174870,___$1,owner,variants,source,data,validate__837__auto__,ufv__,output_schema174826,input_schema174827,input_checker174828,output_checker174829,vec__174823,opts__24458__auto__))
], null));
})());return React.DOM.div(G__174890,G__174891,G__174892);
})(),iter__174872(cljs.core.rest(s__174873__$2)));
}
} else
{return null;
}
break;
}
});})(G__174869,G__174870,___$1,owner,variants,source,data,validate__837__auto__,ufv__,output_schema174826,input_schema174827,input_checker174828,output_checker174829,vec__174823,opts__24458__auto__))
,null,null));
});})(G__174869,G__174870,___$1,owner,variants,source,data,validate__837__auto__,ufv__,output_schema174826,input_schema174827,input_checker174828,output_checker174829,vec__174823,opts__24458__auto__))
;return iter__20913__auto__(stuttaford.articles.variant_names);
})());return React.DOM.div(G__174869,G__174870,G__174871);
});})(owner,variants,source,data,validate__837__auto__,ufv__,output_schema174826,input_schema174827,input_checker174828,output_checker174829,vec__174823,opts__24458__auto__))
;
stuttaford.articles.t174864.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,variants,source,data,validate__837__auto__,ufv__,output_schema174826,input_schema174827,input_checker174828,output_checker174829,vec__174823,opts__24458__auto__){
return (function (_174866){var self__ = this;
var _174866__$1 = this;return self__.meta174865;
});})(owner,variants,source,data,validate__837__auto__,ufv__,output_schema174826,input_schema174827,input_checker174828,output_checker174829,vec__174823,opts__24458__auto__))
;
stuttaford.articles.t174864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,variants,source,data,validate__837__auto__,ufv__,output_schema174826,input_schema174827,input_checker174828,output_checker174829,vec__174823,opts__24458__auto__){
return (function (_174866,meta174865__$1){var self__ = this;
var _174866__$1 = this;return (new stuttaford.articles.t174864(self__.rewrite_sentence,self__.owner,self__.input_checker174828,self__.data,self__.vec__174823,self__.p__174750,self__.G__174830,self__.variants,self__.output_checker174829,self__.output_schema174826,self__.source,self__.map174824,self__.opts__24458__auto__,self__.input_schema174827,self__.validate__837__auto__,self__.ufv__,self__.data__24457__auto__,self__.fnk174825,self__.owner174748,meta174865__$1));
});})(owner,variants,source,data,validate__837__auto__,ufv__,output_schema174826,input_schema174827,input_checker174828,output_checker174829,vec__174823,opts__24458__auto__))
;
stuttaford.articles.__GT_t174864 = ((function (owner,variants,source,data,validate__837__auto__,ufv__,output_schema174826,input_schema174827,input_checker174828,output_checker174829,vec__174823,opts__24458__auto__){
return (function __GT_t174864(rewrite_sentence__$1,owner__$1,input_checker174828__$1,data__$1,vec__174823__$1,p__174750__$1,G__174830__$1,variants__$1,output_checker174829__$1,output_schema174826__$1,source__$1,map174824__$1,opts__24458__auto____$1,input_schema174827__$1,validate__837__auto____$1,ufv____$1,data__24457__auto____$1,fnk174825__$1,owner174748__$1,meta174865){return (new stuttaford.articles.t174864(rewrite_sentence__$1,owner__$1,input_checker174828__$1,data__$1,vec__174823__$1,p__174750__$1,G__174830__$1,variants__$1,output_checker174829__$1,output_schema174826__$1,source__$1,map174824__$1,opts__24458__auto____$1,input_schema174827__$1,validate__837__auto____$1,ufv____$1,data__24457__auto____$1,fnk174825__$1,owner174748__$1,meta174865));
});})(owner,variants,source,data,validate__837__auto__,ufv__,output_schema174826,input_schema174827,input_checker174828,output_checker174829,vec__174823,opts__24458__auto__))
;
}
return (new stuttaford.articles.t174864(rewrite_sentence,owner,input_checker174828,data,vec__174823,p__174750,G__174830,variants,output_checker174829,output_schema174826,source,map174824,opts__24458__auto__,input_schema174827,validate__837__auto__,ufv__,data__24457__auto__,fnk174825,owner174748,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___174899 = (function (){var G__174894 = o__840__auto__;return (output_checker174829.cljs$core$IFn$_invoke$arity$1 ? output_checker174829.cljs$core$IFn$_invoke$arity$1(G__174894) : output_checker174829.call(null,G__174894));
})();if(cljs.core.truth_(temp__4126__auto___174899))
{var error__839__auto___174900 = temp__4126__auto___174899;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk174825","fnk174825",-1920251170,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___174900], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema174826,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___174900], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema174826,input_schema174827,input_checker174828,output_checker174829,vec__174823,opts__24458__auto__))
,schema.core.make_fn_schema(output_schema174826,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema174827], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24458__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner174748,new cljs.core.Keyword(null,"data","data",-232669377),data__24457__auto__], null));
};
var rewrite_sentence = function (data__24457__auto__,owner174748,var_args){
var p__174750 = null;if (arguments.length > 2) {
  p__174750 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return rewrite_sentence__delegate.call(this,data__24457__auto__,owner174748,p__174750);};
rewrite_sentence.cljs$lang$maxFixedArity = 2;
rewrite_sentence.cljs$lang$applyTo = (function (arglist__174901){
var data__24457__auto__ = cljs.core.first(arglist__174901);
arglist__174901 = cljs.core.next(arglist__174901);
var owner174748 = cljs.core.first(arglist__174901);
var p__174750 = cljs.core.rest(arglist__174901);
return rewrite_sentence__delegate(data__24457__auto__,owner174748,p__174750);
});
rewrite_sentence.cljs$core$IFn$_invoke$arity$variadic = rewrite_sentence__delegate;
return rewrite_sentence;
})()
;
stuttaford.articles.__GT_rewrite_sentence = (function() {
var __GT_rewrite_sentence = null;
var __GT_rewrite_sentence__1 = (function (cursor__24426__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.rewrite_sentence,cursor__24426__auto__);
});
var __GT_rewrite_sentence__2 = (function (cursor__24426__auto__,m174749){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.articles.rewrite_sentence,cursor__24426__auto__,m174749);
});
__GT_rewrite_sentence = function(cursor__24426__auto__,m174749){
switch(arguments.length){
case 1:
return __GT_rewrite_sentence__1.call(this,cursor__24426__auto__);
case 2:
return __GT_rewrite_sentence__2.call(this,cursor__24426__auto__,m174749);
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
var rewrite_articles__delegate = function (data__24457__auto__,owner174902,p__174904){var vec__174926 = p__174904;var opts__24458__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__174926,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema174930 = schema.core.Any;var input_schema174931 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359)),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map174927","map174927",1439173764,null))], null);var input_checker174932 = schema.core.checker(input_schema174931);var output_checker174933 = schema.core.checker(output_schema174930);return schema.core.schematize_fn(((function (ufv__,output_schema174930,input_schema174931,input_checker174932,output_checker174933,vec__174926,opts__24458__auto__){
return (function fnk174929(G__174934){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___174947 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__174934], null);var temp__4126__auto___174948 = (function (){var G__174941 = args__838__auto___174947;return (input_checker174932.cljs$core$IFn$_invoke$arity$1 ? input_checker174932.cljs$core$IFn$_invoke$arity$1(G__174941) : input_checker174932.call(null,G__174941));
})();if(cljs.core.truth_(temp__4126__auto___174948))
{var error__839__auto___174949 = temp__4126__auto___174948;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk174929","fnk174929",558489239,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___174949], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema174931,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___174947,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___174949], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map174927 = G__174934;while(true){
if(cljs.core.map_QMARK_(map174927))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map174927], 0))));
}
var map174928 = plumbing.fnk.schema.safe_get(map174927,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var source_article_sentences = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map174928,new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map174927,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.articles.t174942 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.articles.t174942 = (function (map174927,owner,rewrite_articles,G__174934,output_schema174930,vec__174926,owner174902,map174928,opts__24458__auto__,fnk174929,source_article_sentences,input_schema174931,validate__837__auto__,output_checker174933,input_checker174932,ufv__,data__24457__auto__,p__174904,meta174943){
this.map174927 = map174927;
this.owner = owner;
this.rewrite_articles = rewrite_articles;
this.G__174934 = G__174934;
this.output_schema174930 = output_schema174930;
this.vec__174926 = vec__174926;
this.owner174902 = owner174902;
this.map174928 = map174928;
this.opts__24458__auto__ = opts__24458__auto__;
this.fnk174929 = fnk174929;
this.source_article_sentences = source_article_sentences;
this.input_schema174931 = input_schema174931;
this.validate__837__auto__ = validate__837__auto__;
this.output_checker174933 = output_checker174933;
this.input_checker174932 = input_checker174932;
this.ufv__ = ufv__;
this.data__24457__auto__ = data__24457__auto__;
this.p__174904 = p__174904;
this.meta174943 = meta174943;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.articles.t174942.cljs$lang$type = true;
stuttaford.articles.t174942.cljs$lang$ctorStr = "stuttaford.articles/t174942";
stuttaford.articles.t174942.cljs$lang$ctorPrWriter = ((function (owner,source_article_sentences,map174928,validate__837__auto__,ufv__,output_schema174930,input_schema174931,input_checker174932,output_checker174933,vec__174926,opts__24458__auto__){
return (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"stuttaford.articles/t174942");
});})(owner,source_article_sentences,map174928,validate__837__auto__,ufv__,output_schema174930,input_schema174931,input_checker174932,output_checker174933,vec__174926,opts__24458__auto__))
;
stuttaford.articles.t174942.prototype.om$core$IDisplayName$ = true;
stuttaford.articles.t174942.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,source_article_sentences,map174928,validate__837__auto__,ufv__,output_schema174930,input_schema174931,input_checker174932,output_checker174933,vec__174926,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "rewrite-articles";
});})(owner,source_article_sentences,map174928,validate__837__auto__,ufv__,output_schema174930,input_schema174931,input_checker174932,output_checker174933,vec__174926,opts__24458__auto__))
;
stuttaford.articles.t174942.prototype.om$core$IRenderState$ = true;
stuttaford.articles.t174942.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,source_article_sentences,map174928,validate__837__auto__,ufv__,output_schema174930,input_schema174931,input_checker174932,output_checker174933,vec__174926,opts__24458__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map_indexed(((function (___$1,owner,source_article_sentences,map174928,validate__837__auto__,ufv__,output_schema174930,input_schema174931,input_checker174932,output_checker174933,vec__174926,opts__24458__auto__){
return (function (i,sentence){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sentence,new cljs.core.Keyword(null,"index","index",-1531685915),i);
});})(___$1,owner,source_article_sentences,map174928,validate__837__auto__,ufv__,output_schema174930,input_schema174931,input_checker174932,output_checker174933,vec__174926,opts__24458__auto__))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.sentence_QMARK_,self__.source_article_sentences))], 0));
var attrs174945 = ((cljs.core.seq(self__.source_article_sentences))?om.core.build_all.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.rewrite_sentence,cljs.core.map_indexed(((function (___$1,owner,source_article_sentences,map174928,validate__837__auto__,ufv__,output_schema174930,input_schema174931,input_checker174932,output_checker174933,vec__174926,opts__24458__auto__){
return (function (i,sentence){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sentence,new cljs.core.Keyword(null,"index","index",-1531685915),i);
});})(___$1,owner,source_article_sentences,map174928,validate__837__auto__,ufv__,output_schema174930,input_schema174931,input_checker174932,output_checker174933,vec__174926,opts__24458__auto__))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.sentence_QMARK_,self__.source_article_sentences))):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No source article."], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs174945))?sablono.interpreter.attributes(attrs174945):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs174945))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs174945)], null))));
});})(owner,source_article_sentences,map174928,validate__837__auto__,ufv__,output_schema174930,input_schema174931,input_checker174932,output_checker174933,vec__174926,opts__24458__auto__))
;
stuttaford.articles.t174942.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,source_article_sentences,map174928,validate__837__auto__,ufv__,output_schema174930,input_schema174931,input_checker174932,output_checker174933,vec__174926,opts__24458__auto__){
return (function (_174944){var self__ = this;
var _174944__$1 = this;return self__.meta174943;
});})(owner,source_article_sentences,map174928,validate__837__auto__,ufv__,output_schema174930,input_schema174931,input_checker174932,output_checker174933,vec__174926,opts__24458__auto__))
;
stuttaford.articles.t174942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,source_article_sentences,map174928,validate__837__auto__,ufv__,output_schema174930,input_schema174931,input_checker174932,output_checker174933,vec__174926,opts__24458__auto__){
return (function (_174944,meta174943__$1){var self__ = this;
var _174944__$1 = this;return (new stuttaford.articles.t174942(self__.map174927,self__.owner,self__.rewrite_articles,self__.G__174934,self__.output_schema174930,self__.vec__174926,self__.owner174902,self__.map174928,self__.opts__24458__auto__,self__.fnk174929,self__.source_article_sentences,self__.input_schema174931,self__.validate__837__auto__,self__.output_checker174933,self__.input_checker174932,self__.ufv__,self__.data__24457__auto__,self__.p__174904,meta174943__$1));
});})(owner,source_article_sentences,map174928,validate__837__auto__,ufv__,output_schema174930,input_schema174931,input_checker174932,output_checker174933,vec__174926,opts__24458__auto__))
;
stuttaford.articles.__GT_t174942 = ((function (owner,source_article_sentences,map174928,validate__837__auto__,ufv__,output_schema174930,input_schema174931,input_checker174932,output_checker174933,vec__174926,opts__24458__auto__){
return (function __GT_t174942(map174927__$1,owner__$1,rewrite_articles__$1,G__174934__$1,output_schema174930__$1,vec__174926__$1,owner174902__$1,map174928__$1,opts__24458__auto____$1,fnk174929__$1,source_article_sentences__$1,input_schema174931__$1,validate__837__auto____$1,output_checker174933__$1,input_checker174932__$1,ufv____$1,data__24457__auto____$1,p__174904__$1,meta174943){return (new stuttaford.articles.t174942(map174927__$1,owner__$1,rewrite_articles__$1,G__174934__$1,output_schema174930__$1,vec__174926__$1,owner174902__$1,map174928__$1,opts__24458__auto____$1,fnk174929__$1,source_article_sentences__$1,input_schema174931__$1,validate__837__auto____$1,output_checker174933__$1,input_checker174932__$1,ufv____$1,data__24457__auto____$1,p__174904__$1,meta174943));
});})(owner,source_article_sentences,map174928,validate__837__auto__,ufv__,output_schema174930,input_schema174931,input_checker174932,output_checker174933,vec__174926,opts__24458__auto__))
;
}
return (new stuttaford.articles.t174942(map174927,owner,rewrite_articles,G__174934,output_schema174930,vec__174926,owner174902,map174928,opts__24458__auto__,fnk174929,source_article_sentences,input_schema174931,validate__837__auto__,output_checker174933,input_checker174932,ufv__,data__24457__auto__,p__174904,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___174950 = (function (){var G__174946 = o__840__auto__;return (output_checker174933.cljs$core$IFn$_invoke$arity$1 ? output_checker174933.cljs$core$IFn$_invoke$arity$1(G__174946) : output_checker174933.call(null,G__174946));
})();if(cljs.core.truth_(temp__4126__auto___174950))
{var error__839__auto___174951 = temp__4126__auto___174950;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk174929","fnk174929",558489239,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___174951], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema174930,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___174951], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema174930,input_schema174931,input_checker174932,output_checker174933,vec__174926,opts__24458__auto__))
,schema.core.make_fn_schema(output_schema174930,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema174931], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24458__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner174902,new cljs.core.Keyword(null,"data","data",-232669377),data__24457__auto__], null));
};
var rewrite_articles = function (data__24457__auto__,owner174902,var_args){
var p__174904 = null;if (arguments.length > 2) {
  p__174904 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return rewrite_articles__delegate.call(this,data__24457__auto__,owner174902,p__174904);};
rewrite_articles.cljs$lang$maxFixedArity = 2;
rewrite_articles.cljs$lang$applyTo = (function (arglist__174952){
var data__24457__auto__ = cljs.core.first(arglist__174952);
arglist__174952 = cljs.core.next(arglist__174952);
var owner174902 = cljs.core.first(arglist__174952);
var p__174904 = cljs.core.rest(arglist__174952);
return rewrite_articles__delegate(data__24457__auto__,owner174902,p__174904);
});
rewrite_articles.cljs$core$IFn$_invoke$arity$variadic = rewrite_articles__delegate;
return rewrite_articles;
})()
;
stuttaford.articles.__GT_rewrite_articles = (function() {
var __GT_rewrite_articles = null;
var __GT_rewrite_articles__1 = (function (cursor__24426__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.rewrite_articles,cursor__24426__auto__);
});
var __GT_rewrite_articles__2 = (function (cursor__24426__auto__,m174903){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.articles.rewrite_articles,cursor__24426__auto__,m174903);
});
__GT_rewrite_articles = function(cursor__24426__auto__,m174903){
switch(arguments.length){
case 1:
return __GT_rewrite_articles__1.call(this,cursor__24426__auto__);
case 2:
return __GT_rewrite_articles__2.call(this,cursor__24426__auto__,m174903);
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
var output_articles__delegate = function (data__24457__auto__,owner174953,p__174955){var vec__175057 = p__174955;var opts__24458__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__175057,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema175061 = schema.core.Any;var input_schema175062 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359)),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map175058","map175058",-791398463,null))], null);var input_checker175063 = schema.core.checker(input_schema175062);var output_checker175064 = schema.core.checker(output_schema175061);return schema.core.schematize_fn(((function (ufv__,output_schema175061,input_schema175062,input_checker175063,output_checker175064,vec__175057,opts__24458__auto__){
return (function fnk175060(G__175065){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___175158 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__175065], null);var temp__4126__auto___175159 = (function (){var G__175112 = args__838__auto___175158;return (input_checker175063.cljs$core$IFn$_invoke$arity$1 ? input_checker175063.cljs$core$IFn$_invoke$arity$1(G__175112) : input_checker175063.call(null,G__175112));
})();if(cljs.core.truth_(temp__4126__auto___175159))
{var error__839__auto___175160 = temp__4126__auto___175159;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk175060","fnk175060",-1087084958,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___175160], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema175062,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___175158,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___175160], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map175058 = G__175065;while(true){
if(cljs.core.map_QMARK_(map175058))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map175058], 0))));
}
var map175059 = plumbing.fnk.schema.safe_get(map175058,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var source_article_sentences = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map175059,new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map175058,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.articles.t175113 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.articles.t175113 = (function (map175058,fnk175060,owner,input_checker175063,owner174953,G__175065,output_schema175061,map175059,p__174955,opts__24458__auto__,input_schema175062,source_article_sentences,validate__837__auto__,vec__175057,ufv__,output_checker175064,data__24457__auto__,output_articles,meta175114){
this.map175058 = map175058;
this.fnk175060 = fnk175060;
this.owner = owner;
this.input_checker175063 = input_checker175063;
this.owner174953 = owner174953;
this.G__175065 = G__175065;
this.output_schema175061 = output_schema175061;
this.map175059 = map175059;
this.p__174955 = p__174955;
this.opts__24458__auto__ = opts__24458__auto__;
this.input_schema175062 = input_schema175062;
this.source_article_sentences = source_article_sentences;
this.validate__837__auto__ = validate__837__auto__;
this.vec__175057 = vec__175057;
this.ufv__ = ufv__;
this.output_checker175064 = output_checker175064;
this.data__24457__auto__ = data__24457__auto__;
this.output_articles = output_articles;
this.meta175114 = meta175114;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.articles.t175113.cljs$lang$type = true;
stuttaford.articles.t175113.cljs$lang$ctorStr = "stuttaford.articles/t175113";
stuttaford.articles.t175113.cljs$lang$ctorPrWriter = ((function (owner,source_article_sentences,map175059,validate__837__auto__,ufv__,output_schema175061,input_schema175062,input_checker175063,output_checker175064,vec__175057,opts__24458__auto__){
return (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"stuttaford.articles/t175113");
});})(owner,source_article_sentences,map175059,validate__837__auto__,ufv__,output_schema175061,input_schema175062,input_checker175063,output_checker175064,vec__175057,opts__24458__auto__))
;
stuttaford.articles.t175113.prototype.om$core$IDisplayName$ = true;
stuttaford.articles.t175113.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,source_article_sentences,map175059,validate__837__auto__,ufv__,output_schema175061,input_schema175062,input_checker175063,output_checker175064,vec__175057,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "output-articles";
});})(owner,source_article_sentences,map175059,validate__837__auto__,ufv__,output_schema175061,input_schema175062,input_checker175063,output_checker175064,vec__175057,opts__24458__auto__))
;
stuttaford.articles.t175113.prototype.om$core$IRenderState$ = true;
stuttaford.articles.t175113.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,source_article_sentences,map175059,validate__837__auto__,ufv__,output_schema175061,input_schema175062,input_checker175063,output_checker175064,vec__175057,opts__24458__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var composed_variants = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.second),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.identity),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.compose_variant,self__.source_article_sentences)),stuttaford.articles.variant_names));var attrs175116 = ((cljs.core.seq(composed_variants))?(function (){var G__175117 = null;var G__175118 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20913__auto__ = ((function (G__175117,composed_variants,___$1,owner,source_article_sentences,map175059,validate__837__auto__,ufv__,output_schema175061,input_schema175062,input_checker175063,output_checker175064,vec__175057,opts__24458__auto__){
return (function iter__175119(s__175120){return (new cljs.core.LazySeq(null,((function (G__175117,composed_variants,___$1,owner,source_article_sentences,map175059,validate__837__auto__,ufv__,output_schema175061,input_schema175062,input_checker175063,output_checker175064,vec__175057,opts__24458__auto__){
return (function (){var s__175120__$1 = s__175120;while(true){
var temp__4126__auto__ = cljs.core.seq(s__175120__$1);if(temp__4126__auto__)
{var s__175120__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__175120__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__175120__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__175122 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__175121 = (0);while(true){
if((i__175121 < size__20912__auto__))
{var vec__175141 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__175121);var variant_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__175141,(0),null);var composed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__175141,(1),null);var ref = ("output-article-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant_name));cljs.core.chunk_append(b__175122,(function (){var G__175142 = {"className": "composed-variant"};var G__175143 = (function (){var G__175145 = null;var G__175146 = "Variant ";var G__175147 = sablono.interpreter.interpret(variant_name);return React.DOM.h1(G__175145,G__175146,G__175147);
})();var G__175144 = sablono.interpreter.interpret(om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"class","class",-2030961996),"source-article",new cljs.core.Keyword(null,"ref","ref",1289896967),ref,new cljs.core.Keyword(null,"value","value",305978217),composed,new cljs.core.Keyword(null,"readonly","readonly",-1101398934),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__175121,G__175142,G__175143,ref,vec__175141,variant_name,composed,c__20911__auto__,size__20912__auto__,b__175122,s__175120__$2,temp__4126__auto__,G__175117,composed_variants,___$1,owner,source_article_sentences,map175059,validate__837__auto__,ufv__,output_schema175061,input_schema175062,input_checker175063,output_checker175064,vec__175057,opts__24458__auto__){
return (function (){var G__175148 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,ref);G__175148.focus();
G__175148.select();
return G__175148;
});})(i__175121,G__175142,G__175143,ref,vec__175141,variant_name,composed,c__20911__auto__,size__20912__auto__,b__175122,s__175120__$2,temp__4126__auto__,G__175117,composed_variants,___$1,owner,source_article_sentences,map175059,validate__837__auto__,ufv__,output_schema175061,input_schema175062,input_checker175063,output_checker175064,vec__175057,opts__24458__auto__))
], null)));return React.DOM.div(G__175142,G__175143,G__175144);
})());
{
var G__175161 = (i__175121 + (1));
i__175121 = G__175161;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__175122),iter__175119(cljs.core.chunk_rest(s__175120__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__175122),null);
}
} else
{var vec__175149 = cljs.core.first(s__175120__$2);var variant_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__175149,(0),null);var composed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__175149,(1),null);var ref = ("output-article-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant_name));return cljs.core.cons((function (){var G__175150 = {"className": "composed-variant"};var G__175151 = (function (){var G__175153 = null;var G__175154 = "Variant ";var G__175155 = sablono.interpreter.interpret(variant_name);return React.DOM.h1(G__175153,G__175154,G__175155);
})();var G__175152 = sablono.interpreter.interpret(om_bootstrap.input.input(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"class","class",-2030961996),"source-article",new cljs.core.Keyword(null,"ref","ref",1289896967),ref,new cljs.core.Keyword(null,"value","value",305978217),composed,new cljs.core.Keyword(null,"readonly","readonly",-1101398934),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__175150,G__175151,ref,vec__175149,variant_name,composed,s__175120__$2,temp__4126__auto__,G__175117,composed_variants,___$1,owner,source_article_sentences,map175059,validate__837__auto__,ufv__,output_schema175061,input_schema175062,input_checker175063,output_checker175064,vec__175057,opts__24458__auto__){
return (function (){var G__175156 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,ref);G__175156.focus();
G__175156.select();
return G__175156;
});})(G__175150,G__175151,ref,vec__175149,variant_name,composed,s__175120__$2,temp__4126__auto__,G__175117,composed_variants,___$1,owner,source_article_sentences,map175059,validate__837__auto__,ufv__,output_schema175061,input_schema175062,input_checker175063,output_checker175064,vec__175057,opts__24458__auto__))
], null)));return React.DOM.div(G__175150,G__175151,G__175152);
})(),iter__175119(cljs.core.rest(s__175120__$2)));
}
} else
{return null;
}
break;
}
});})(G__175117,composed_variants,___$1,owner,source_article_sentences,map175059,validate__837__auto__,ufv__,output_schema175061,input_schema175062,input_checker175063,output_checker175064,vec__175057,opts__24458__auto__))
,null,null));
});})(G__175117,composed_variants,___$1,owner,source_article_sentences,map175059,validate__837__auto__,ufv__,output_schema175061,input_schema175062,input_checker175063,output_checker175064,vec__175057,opts__24458__auto__))
;return iter__20913__auto__(composed_variants);
})());return React.DOM.div(G__175117,G__175118);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No variants."], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs175116))?sablono.interpreter.attributes(attrs175116):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs175116))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs175116)], null))));
});})(owner,source_article_sentences,map175059,validate__837__auto__,ufv__,output_schema175061,input_schema175062,input_checker175063,output_checker175064,vec__175057,opts__24458__auto__))
;
stuttaford.articles.t175113.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,source_article_sentences,map175059,validate__837__auto__,ufv__,output_schema175061,input_schema175062,input_checker175063,output_checker175064,vec__175057,opts__24458__auto__){
return (function (_175115){var self__ = this;
var _175115__$1 = this;return self__.meta175114;
});})(owner,source_article_sentences,map175059,validate__837__auto__,ufv__,output_schema175061,input_schema175062,input_checker175063,output_checker175064,vec__175057,opts__24458__auto__))
;
stuttaford.articles.t175113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,source_article_sentences,map175059,validate__837__auto__,ufv__,output_schema175061,input_schema175062,input_checker175063,output_checker175064,vec__175057,opts__24458__auto__){
return (function (_175115,meta175114__$1){var self__ = this;
var _175115__$1 = this;return (new stuttaford.articles.t175113(self__.map175058,self__.fnk175060,self__.owner,self__.input_checker175063,self__.owner174953,self__.G__175065,self__.output_schema175061,self__.map175059,self__.p__174955,self__.opts__24458__auto__,self__.input_schema175062,self__.source_article_sentences,self__.validate__837__auto__,self__.vec__175057,self__.ufv__,self__.output_checker175064,self__.data__24457__auto__,self__.output_articles,meta175114__$1));
});})(owner,source_article_sentences,map175059,validate__837__auto__,ufv__,output_schema175061,input_schema175062,input_checker175063,output_checker175064,vec__175057,opts__24458__auto__))
;
stuttaford.articles.__GT_t175113 = ((function (owner,source_article_sentences,map175059,validate__837__auto__,ufv__,output_schema175061,input_schema175062,input_checker175063,output_checker175064,vec__175057,opts__24458__auto__){
return (function __GT_t175113(map175058__$1,fnk175060__$1,owner__$1,input_checker175063__$1,owner174953__$1,G__175065__$1,output_schema175061__$1,map175059__$1,p__174955__$1,opts__24458__auto____$1,input_schema175062__$1,source_article_sentences__$1,validate__837__auto____$1,vec__175057__$1,ufv____$1,output_checker175064__$1,data__24457__auto____$1,output_articles__$1,meta175114){return (new stuttaford.articles.t175113(map175058__$1,fnk175060__$1,owner__$1,input_checker175063__$1,owner174953__$1,G__175065__$1,output_schema175061__$1,map175059__$1,p__174955__$1,opts__24458__auto____$1,input_schema175062__$1,source_article_sentences__$1,validate__837__auto____$1,vec__175057__$1,ufv____$1,output_checker175064__$1,data__24457__auto____$1,output_articles__$1,meta175114));
});})(owner,source_article_sentences,map175059,validate__837__auto__,ufv__,output_schema175061,input_schema175062,input_checker175063,output_checker175064,vec__175057,opts__24458__auto__))
;
}
return (new stuttaford.articles.t175113(map175058,fnk175060,owner,input_checker175063,owner174953,G__175065,output_schema175061,map175059,p__174955,opts__24458__auto__,input_schema175062,source_article_sentences,validate__837__auto__,vec__175057,ufv__,output_checker175064,data__24457__auto__,output_articles,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___175162 = (function (){var G__175157 = o__840__auto__;return (output_checker175064.cljs$core$IFn$_invoke$arity$1 ? output_checker175064.cljs$core$IFn$_invoke$arity$1(G__175157) : output_checker175064.call(null,G__175157));
})();if(cljs.core.truth_(temp__4126__auto___175162))
{var error__839__auto___175163 = temp__4126__auto___175162;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk175060","fnk175060",-1087084958,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___175163], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema175061,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___175163], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema175061,input_schema175062,input_checker175063,output_checker175064,vec__175057,opts__24458__auto__))
,schema.core.make_fn_schema(output_schema175061,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema175062], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24458__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner174953,new cljs.core.Keyword(null,"data","data",-232669377),data__24457__auto__], null));
};
var output_articles = function (data__24457__auto__,owner174953,var_args){
var p__174955 = null;if (arguments.length > 2) {
  p__174955 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return output_articles__delegate.call(this,data__24457__auto__,owner174953,p__174955);};
output_articles.cljs$lang$maxFixedArity = 2;
output_articles.cljs$lang$applyTo = (function (arglist__175164){
var data__24457__auto__ = cljs.core.first(arglist__175164);
arglist__175164 = cljs.core.next(arglist__175164);
var owner174953 = cljs.core.first(arglist__175164);
var p__174955 = cljs.core.rest(arglist__175164);
return output_articles__delegate(data__24457__auto__,owner174953,p__174955);
});
output_articles.cljs$core$IFn$_invoke$arity$variadic = output_articles__delegate;
return output_articles;
})()
;
stuttaford.articles.__GT_output_articles = (function() {
var __GT_output_articles = null;
var __GT_output_articles__1 = (function (cursor__24426__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.output_articles,cursor__24426__auto__);
});
var __GT_output_articles__2 = (function (cursor__24426__auto__,m174954){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.articles.output_articles,cursor__24426__auto__,m174954);
});
__GT_output_articles = function(cursor__24426__auto__,m174954){
switch(arguments.length){
case 1:
return __GT_output_articles__1.call(this,cursor__24426__auto__);
case 2:
return __GT_output_articles__2.call(this,cursor__24426__auto__,m174954);
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
var top_nav__delegate = function (data__24457__auto__,owner175165,p__175167){var vec__175250 = p__175167;var opts__24458__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__175250,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema175255 = schema.core.Any;var input_schema175256 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359)),schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map175251","map175251",965422079,null))], null);var input_checker175257 = schema.core.checker(input_schema175256);var output_checker175258 = schema.core.checker(output_schema175255);return schema.core.schematize_fn(((function (ufv__,output_schema175255,input_schema175256,input_checker175257,output_checker175258,vec__175250,opts__24458__auto__){
return (function fnk175254(G__175259){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___175332 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__175259], null);var temp__4126__auto___175333 = (function (){var G__175296 = args__838__auto___175332;return (input_checker175257.cljs$core$IFn$_invoke$arity$1 ? input_checker175257.cljs$core$IFn$_invoke$arity$1(G__175296) : input_checker175257.call(null,G__175296));
})();if(cljs.core.truth_(temp__4126__auto___175333))
{var error__839__auto___175334 = temp__4126__auto___175333;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk175254","fnk175254",-1802163247,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___175334], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema175256,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___175332,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___175334], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map175251 = G__175259;while(true){
if(cljs.core.map_QMARK_(map175251))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map175251], 0))));
}
var map175253 = plumbing.fnk.schema.safe_get(map175251,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(map175253,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var source_article_sentences = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map175253,new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map175251,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map175252 = plumbing.fnk.schema.safe_get(map175251,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var nav_items = plumbing.fnk.schema.safe_get(map175252,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));if(typeof stuttaford.articles.t175297 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.articles.t175297 = (function (owner,view,output_checker175258,nav_items,owner175165,p__175167,map175253,map175252,G__175259,fnk175254,input_schema175256,vec__175250,top_nav,input_checker175257,opts__24458__auto__,source_article_sentences,output_schema175255,validate__837__auto__,ufv__,data__24457__auto__,map175251,meta175298){
this.owner = owner;
this.view = view;
this.output_checker175258 = output_checker175258;
this.nav_items = nav_items;
this.owner175165 = owner175165;
this.p__175167 = p__175167;
this.map175253 = map175253;
this.map175252 = map175252;
this.G__175259 = G__175259;
this.fnk175254 = fnk175254;
this.input_schema175256 = input_schema175256;
this.vec__175250 = vec__175250;
this.top_nav = top_nav;
this.input_checker175257 = input_checker175257;
this.opts__24458__auto__ = opts__24458__auto__;
this.source_article_sentences = source_article_sentences;
this.output_schema175255 = output_schema175255;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.data__24457__auto__ = data__24457__auto__;
this.map175251 = map175251;
this.meta175298 = meta175298;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.articles.t175297.cljs$lang$type = true;
stuttaford.articles.t175297.cljs$lang$ctorStr = "stuttaford.articles/t175297";
stuttaford.articles.t175297.cljs$lang$ctorPrWriter = ((function (nav_items,map175252,owner,source_article_sentences,view,map175253,validate__837__auto__,ufv__,output_schema175255,input_schema175256,input_checker175257,output_checker175258,vec__175250,opts__24458__auto__){
return (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"stuttaford.articles/t175297");
});})(nav_items,map175252,owner,source_article_sentences,view,map175253,validate__837__auto__,ufv__,output_schema175255,input_schema175256,input_checker175257,output_checker175258,vec__175250,opts__24458__auto__))
;
stuttaford.articles.t175297.prototype.om$core$IDisplayName$ = true;
stuttaford.articles.t175297.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (nav_items,map175252,owner,source_article_sentences,view,map175253,validate__837__auto__,ufv__,output_schema175255,input_schema175256,input_checker175257,output_checker175258,vec__175250,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "top-nav";
});})(nav_items,map175252,owner,source_article_sentences,view,map175253,validate__837__auto__,ufv__,output_schema175255,input_schema175256,input_checker175257,output_checker175258,vec__175250,opts__24458__auto__))
;
stuttaford.articles.t175297.prototype.om$core$IRenderState$ = true;
stuttaford.articles.t175297.prototype.om$core$IRenderState$render_state$arity$2 = ((function (nav_items,map175252,owner,source_article_sentences,view,map175253,validate__837__auto__,ufv__,output_schema175255,input_schema175256,input_checker175257,output_checker175258,vec__175250,opts__24458__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var G__175302 = {"className": "articles"};var G__175303 = "ARTICLES";return React.DOM.div(G__175302,G__175303);
})(),om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20913__auto__ = ((function (___$1,nav_items,map175252,owner,source_article_sentences,view,map175253,validate__837__auto__,ufv__,output_schema175255,input_schema175256,input_checker175257,output_checker175258,vec__175250,opts__24458__auto__){
return (function iter__175304(s__175305){return (new cljs.core.LazySeq(null,((function (___$1,nav_items,map175252,owner,source_article_sentences,view,map175253,validate__837__auto__,ufv__,output_schema175255,input_schema175256,input_checker175257,output_checker175258,vec__175250,opts__24458__auto__){
return (function (){var s__175305__$1 = s__175305;while(true){
var temp__4126__auto__ = cljs.core.seq(s__175305__$1);if(temp__4126__auto__)
{var s__175305__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__175305__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__175305__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__175307 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__175306 = (0);while(true){
if((i__175306 < size__20912__auto__))
{var vec__175316 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__175306);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__175316,(0),null);var vec__175317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__175316,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__175317,(0),null);cljs.core.chunk_append(b__175307,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__175318 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__175306,vec__175316,id,vec__175317,label,c__20911__auto__,size__20912__auto__,b__175307,s__175305__$2,temp__4126__auto__,___$1,nav_items,map175252,owner,source_article_sentences,view,map175253,validate__837__auto__,ufv__,output_schema175255,input_schema175256,input_checker175257,output_checker175258,vec__175250,opts__24458__auto__){
return (function (){return stuttaford.articles.do_action_BANG_(self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__175306,vec__175316,id,vec__175317,label,c__20911__auto__,size__20912__auto__,b__175307,s__175305__$2,temp__4126__auto__,___$1,nav_items,map175252,owner,source_article_sentences,view,map175253,validate__837__auto__,ufv__,output_schema175255,input_schema175256,input_checker175257,output_checker175258,vec__175250,opts__24458__auto__))
], null);var G__175318__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__175318,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__175318);return G__175318__$1;
})(),cljs.core.array_seq([label], 0)));
{
var G__175335 = (i__175306 + (1));
i__175306 = G__175335;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__175307),iter__175304(cljs.core.chunk_rest(s__175305__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__175307),null);
}
} else
{var vec__175319 = cljs.core.first(s__175305__$2);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__175319,(0),null);var vec__175320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__175319,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__175320,(0),null);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__175321 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__175319,id,vec__175320,label,s__175305__$2,temp__4126__auto__,___$1,nav_items,map175252,owner,source_article_sentences,view,map175253,validate__837__auto__,ufv__,output_schema175255,input_schema175256,input_checker175257,output_checker175258,vec__175250,opts__24458__auto__){
return (function (){return stuttaford.articles.do_action_BANG_(self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(vec__175319,id,vec__175320,label,s__175305__$2,temp__4126__auto__,___$1,nav_items,map175252,owner,source_article_sentences,view,map175253,validate__837__auto__,ufv__,output_schema175255,input_schema175256,input_checker175257,output_checker175258,vec__175250,opts__24458__auto__))
], null);var G__175321__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__175321,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__175321);return G__175321__$1;
})(),cljs.core.array_seq([label], 0)),iter__175304(cljs.core.rest(s__175305__$2)));
}
} else
{return null;
}
break;
}
});})(___$1,nav_items,map175252,owner,source_article_sentences,view,map175253,validate__837__auto__,ufv__,output_schema175255,input_schema175256,input_checker175257,output_checker175258,vec__175250,opts__24458__auto__))
,null,null));
});})(___$1,nav_items,map175252,owner,source_article_sentences,view,map175253,validate__837__auto__,ufv__,output_schema175255,input_schema175256,input_checker175257,output_checker175258,vec__175250,opts__24458__auto__))
;return iter__20913__auto__(self__.nav_items);
})(),((cljs.core.seq(self__.source_article_sentences))?(function (){var G__175322 = {"className": "variants-status"};var G__175323 = "Status: ";var G__175324 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__20913__auto__ = ((function (G__175322,G__175323,___$1,nav_items,map175252,owner,source_article_sentences,view,map175253,validate__837__auto__,ufv__,output_schema175255,input_schema175256,input_checker175257,output_checker175258,vec__175250,opts__24458__auto__){
return (function iter__175325(s__175326){return (new cljs.core.LazySeq(null,((function (G__175322,G__175323,___$1,nav_items,map175252,owner,source_article_sentences,view,map175253,validate__837__auto__,ufv__,output_schema175255,input_schema175256,input_checker175257,output_checker175258,vec__175250,opts__24458__auto__){
return (function (){var s__175326__$1 = s__175326;while(true){
var temp__4126__auto__ = cljs.core.seq(s__175326__$1);if(temp__4126__auto__)
{var s__175326__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__175326__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__175326__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__175328 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__175327 = (0);while(true){
if((i__175327 < size__20912__auto__))
{var variant = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__175327);var variant_name = cljs.core.name(variant);cljs.core.chunk_append(b__175328,sablono.interpreter.interpret(om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),((stuttaford.articles.variant_is_complete_QMARK_(self__.source_article_sentences,variant))?"success":"warning")], null),cljs.core.array_seq([variant_name], 0))));
{
var G__175336 = (i__175327 + (1));
i__175327 = G__175336;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__175328),iter__175325(cljs.core.chunk_rest(s__175326__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__175328),null);
}
} else
{var variant = cljs.core.first(s__175326__$2);var variant_name = cljs.core.name(variant);return cljs.core.cons(sablono.interpreter.interpret(om_bootstrap.random.label.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),((stuttaford.articles.variant_is_complete_QMARK_(self__.source_article_sentences,variant))?"success":"warning")], null),cljs.core.array_seq([variant_name], 0))),iter__175325(cljs.core.rest(s__175326__$2)));
}
} else
{return null;
}
break;
}
});})(G__175322,G__175323,___$1,nav_items,map175252,owner,source_article_sentences,view,map175253,validate__837__auto__,ufv__,output_schema175255,input_schema175256,input_checker175257,output_checker175258,vec__175250,opts__24458__auto__))
,null,null));
});})(G__175322,G__175323,___$1,nav_items,map175252,owner,source_article_sentences,view,map175253,validate__837__auto__,ufv__,output_schema175255,input_schema175256,input_checker175257,output_checker175258,vec__175250,opts__24458__auto__))
;return iter__20913__auto__(stuttaford.articles.variant_names);
})());return React.DOM.div(G__175322,G__175323,G__175324);
})():null)], 0))], 0));
});})(nav_items,map175252,owner,source_article_sentences,view,map175253,validate__837__auto__,ufv__,output_schema175255,input_schema175256,input_checker175257,output_checker175258,vec__175250,opts__24458__auto__))
;
stuttaford.articles.t175297.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (nav_items,map175252,owner,source_article_sentences,view,map175253,validate__837__auto__,ufv__,output_schema175255,input_schema175256,input_checker175257,output_checker175258,vec__175250,opts__24458__auto__){
return (function (_175299){var self__ = this;
var _175299__$1 = this;return self__.meta175298;
});})(nav_items,map175252,owner,source_article_sentences,view,map175253,validate__837__auto__,ufv__,output_schema175255,input_schema175256,input_checker175257,output_checker175258,vec__175250,opts__24458__auto__))
;
stuttaford.articles.t175297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (nav_items,map175252,owner,source_article_sentences,view,map175253,validate__837__auto__,ufv__,output_schema175255,input_schema175256,input_checker175257,output_checker175258,vec__175250,opts__24458__auto__){
return (function (_175299,meta175298__$1){var self__ = this;
var _175299__$1 = this;return (new stuttaford.articles.t175297(self__.owner,self__.view,self__.output_checker175258,self__.nav_items,self__.owner175165,self__.p__175167,self__.map175253,self__.map175252,self__.G__175259,self__.fnk175254,self__.input_schema175256,self__.vec__175250,self__.top_nav,self__.input_checker175257,self__.opts__24458__auto__,self__.source_article_sentences,self__.output_schema175255,self__.validate__837__auto__,self__.ufv__,self__.data__24457__auto__,self__.map175251,meta175298__$1));
});})(nav_items,map175252,owner,source_article_sentences,view,map175253,validate__837__auto__,ufv__,output_schema175255,input_schema175256,input_checker175257,output_checker175258,vec__175250,opts__24458__auto__))
;
stuttaford.articles.__GT_t175297 = ((function (nav_items,map175252,owner,source_article_sentences,view,map175253,validate__837__auto__,ufv__,output_schema175255,input_schema175256,input_checker175257,output_checker175258,vec__175250,opts__24458__auto__){
return (function __GT_t175297(owner__$1,view__$1,output_checker175258__$1,nav_items__$1,owner175165__$1,p__175167__$1,map175253__$1,map175252__$1,G__175259__$1,fnk175254__$1,input_schema175256__$1,vec__175250__$1,top_nav__$1,input_checker175257__$1,opts__24458__auto____$1,source_article_sentences__$1,output_schema175255__$1,validate__837__auto____$1,ufv____$1,data__24457__auto____$1,map175251__$1,meta175298){return (new stuttaford.articles.t175297(owner__$1,view__$1,output_checker175258__$1,nav_items__$1,owner175165__$1,p__175167__$1,map175253__$1,map175252__$1,G__175259__$1,fnk175254__$1,input_schema175256__$1,vec__175250__$1,top_nav__$1,input_checker175257__$1,opts__24458__auto____$1,source_article_sentences__$1,output_schema175255__$1,validate__837__auto____$1,ufv____$1,data__24457__auto____$1,map175251__$1,meta175298));
});})(nav_items,map175252,owner,source_article_sentences,view,map175253,validate__837__auto__,ufv__,output_schema175255,input_schema175256,input_checker175257,output_checker175258,vec__175250,opts__24458__auto__))
;
}
return (new stuttaford.articles.t175297(owner,view,output_checker175258,nav_items,owner175165,p__175167,map175253,map175252,G__175259,fnk175254,input_schema175256,vec__175250,top_nav,input_checker175257,opts__24458__auto__,source_article_sentences,output_schema175255,validate__837__auto__,ufv__,data__24457__auto__,map175251,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___175337 = (function (){var G__175331 = o__840__auto__;return (output_checker175258.cljs$core$IFn$_invoke$arity$1 ? output_checker175258.cljs$core$IFn$_invoke$arity$1(G__175331) : output_checker175258.call(null,G__175331));
})();if(cljs.core.truth_(temp__4126__auto___175337))
{var error__839__auto___175338 = temp__4126__auto___175337;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk175254","fnk175254",-1802163247,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___175338], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema175255,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___175338], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema175255,input_schema175256,input_checker175257,output_checker175258,vec__175250,opts__24458__auto__))
,schema.core.make_fn_schema(output_schema175255,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema175256], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24458__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner175165,new cljs.core.Keyword(null,"data","data",-232669377),data__24457__auto__], null));
};
var top_nav = function (data__24457__auto__,owner175165,var_args){
var p__175167 = null;if (arguments.length > 2) {
  p__175167 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return top_nav__delegate.call(this,data__24457__auto__,owner175165,p__175167);};
top_nav.cljs$lang$maxFixedArity = 2;
top_nav.cljs$lang$applyTo = (function (arglist__175339){
var data__24457__auto__ = cljs.core.first(arglist__175339);
arglist__175339 = cljs.core.next(arglist__175339);
var owner175165 = cljs.core.first(arglist__175339);
var p__175167 = cljs.core.rest(arglist__175339);
return top_nav__delegate(data__24457__auto__,owner175165,p__175167);
});
top_nav.cljs$core$IFn$_invoke$arity$variadic = top_nav__delegate;
return top_nav;
})()
;
stuttaford.articles.__GT_top_nav = (function() {
var __GT_top_nav = null;
var __GT_top_nav__1 = (function (cursor__24426__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.top_nav,cursor__24426__auto__);
});
var __GT_top_nav__2 = (function (cursor__24426__auto__,m175166){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.articles.top_nav,cursor__24426__auto__,m175166);
});
__GT_top_nav = function(cursor__24426__auto__,m175166){
switch(arguments.length){
case 1:
return __GT_top_nav__1.call(this,cursor__24426__auto__);
case 2:
return __GT_top_nav__2.call(this,cursor__24426__auto__,m175166);
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
var app_view__delegate = function (data__24457__auto__,owner175340,p__175342){var vec__175461 = p__175342;var opts__24458__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__175461,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema175464 = schema.core.Any;var input_schema175465 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,schema.core.optional_key(new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359)),schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map175462","map175462",1873736267,null))], null);var input_checker175466 = schema.core.checker(input_schema175465);var output_checker175467 = schema.core.checker(output_schema175464);return schema.core.schematize_fn(((function (ufv__,output_schema175464,input_schema175465,input_checker175466,output_checker175467,vec__175461,opts__24458__auto__){
return (function fnk175463(G__175468){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___175579 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__175468], null);var temp__4126__auto___175580 = (function (){var G__175524 = args__838__auto___175579;return (input_checker175466.cljs$core$IFn$_invoke$arity$1 ? input_checker175466.cljs$core$IFn$_invoke$arity$1(G__175524) : input_checker175466.call(null,G__175524));
})();if(cljs.core.truth_(temp__4126__auto___175580))
{var error__839__auto___175581 = temp__4126__auto___175580;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk175463","fnk175463",-3760481,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___175581], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema175465,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___175579,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___175581], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map175462 = G__175468;while(true){
if(cljs.core.map_QMARK_(map175462))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map175462], 0))));
}
var data = plumbing.fnk.schema.safe_get(map175462,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(data,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var source_article_sentences = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"source-article-sentences","source-article-sentences",-1367385359),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get(map175462,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof stuttaford.articles.t175525 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.articles.t175525 = (function (output_schema175464,app_view,owner,view,owner175340,data,map175462,input_schema175465,vec__175461,input_checker175466,G__175468,opts__24458__auto__,p__175342,source_article_sentences,output_checker175467,validate__837__auto__,ufv__,data__24457__auto__,fnk175463,meta175526){
this.output_schema175464 = output_schema175464;
this.app_view = app_view;
this.owner = owner;
this.view = view;
this.owner175340 = owner175340;
this.data = data;
this.map175462 = map175462;
this.input_schema175465 = input_schema175465;
this.vec__175461 = vec__175461;
this.input_checker175466 = input_checker175466;
this.G__175468 = G__175468;
this.opts__24458__auto__ = opts__24458__auto__;
this.p__175342 = p__175342;
this.source_article_sentences = source_article_sentences;
this.output_checker175467 = output_checker175467;
this.validate__837__auto__ = validate__837__auto__;
this.ufv__ = ufv__;
this.data__24457__auto__ = data__24457__auto__;
this.fnk175463 = fnk175463;
this.meta175526 = meta175526;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.articles.t175525.cljs$lang$type = true;
stuttaford.articles.t175525.cljs$lang$ctorStr = "stuttaford.articles/t175525";
stuttaford.articles.t175525.cljs$lang$ctorPrWriter = ((function (owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema175464,input_schema175465,input_checker175466,output_checker175467,vec__175461,opts__24458__auto__){
return (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"stuttaford.articles/t175525");
});})(owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema175464,input_schema175465,input_checker175466,output_checker175467,vec__175461,opts__24458__auto__))
;
stuttaford.articles.t175525.prototype.om$core$IDisplayName$ = true;
stuttaford.articles.t175525.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema175464,input_schema175465,input_checker175466,output_checker175467,vec__175461,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "app-view";
});})(owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema175464,input_schema175465,input_checker175466,output_checker175467,vec__175461,opts__24458__auto__))
;
stuttaford.articles.t175525.prototype.om$core$IRenderState$ = true;
stuttaford.articles.t175525.prototype.om$core$IRenderState$render_state$arity$2 = ((function (owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema175464,input_schema175465,input_checker175466,output_checker175467,vec__175461,opts__24458__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret((function (){var vec__175528 = (function (){var G__175529 = stuttaford.articles.nav_items;return (self__.view.cljs$core$IFn$_invoke$arity$1 ? self__.view.cljs$core$IFn$_invoke$arity$1(G__175529) : self__.view.call(null,G__175529));
})();var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__175528,(0),null);var view_component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__175528,(1),null);return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),stuttaford.articles.__GT_top_nav.cljs$core$IFn$_invoke$arity$2(self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),stuttaford.articles.nav_items], null)], null))], null),cljs.core.array_seq([(cljs.core.truth_(view_component)?om.core.build.cljs$core$IFn$_invoke$arity$2(view_component,self__.data):(function (){var G__175532 = null;return React.DOM.div(G__175532);
})())], 0));
})());
});})(owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema175464,input_schema175465,input_checker175466,output_checker175467,vec__175461,opts__24458__auto__))
;
stuttaford.articles.t175525.prototype.om$core$IDidMount$ = true;
stuttaford.articles.t175525.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema175464,input_schema175465,input_checker175466,output_checker175467,vec__175461,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return (window["onbeforeunload"] = cljs.core.constantly("This is a confirmation, just in case you have unsaved work."));
});})(owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema175464,input_schema175465,input_checker175466,output_checker175467,vec__175461,opts__24458__auto__))
;
stuttaford.articles.t175525.prototype.om$core$IWillUnmount$ = true;
stuttaford.articles.t175525.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema175464,input_schema175465,input_checker175466,output_checker175467,vec__175461,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.close_BANG_(stuttaford.om.common.control_chan(self__.owner));
});})(owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema175464,input_schema175465,input_checker175466,output_checker175467,vec__175461,opts__24458__auto__))
;
stuttaford.articles.t175525.prototype.om$core$IWillMount$ = true;
stuttaford.articles.t175525.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema175464,input_schema175465,input_checker175466,output_checker175467,vec__175461,opts__24458__auto__){
return (function (_){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);var c__23002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__23002__auto__,c,___$1,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema175464,input_schema175465,input_checker175466,output_checker175467,vec__175461,opts__24458__auto__){
return (function (){var f__23003__auto__ = (function (){var switch__22987__auto__ = ((function (c__23002__auto__,c,___$1,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema175464,input_schema175465,input_checker175466,output_checker175467,vec__175461,opts__24458__auto__){
return (function (state_175553){var state_val_175554 = (state_175553[(1)]);if((state_val_175554 === (7)))
{var inst_175536 = (state_175553[(7)]);var inst_175536__$1 = (state_175553[(2)]);var state_175553__$1 = (function (){var statearr_175555 = state_175553;(statearr_175555[(7)] = inst_175536__$1);
return statearr_175555;
})();if(cljs.core.truth_(inst_175536__$1))
{var statearr_175556_175582 = state_175553__$1;(statearr_175556_175582[(1)] = (8));
} else
{var statearr_175557_175583 = state_175553__$1;(statearr_175557_175583[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_175554 === (1)))
{var state_175553__$1 = state_175553;var statearr_175558_175584 = state_175553__$1;(statearr_175558_175584[(2)] = null);
(statearr_175558_175584[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_175554 === (4)))
{var state_175553__$1 = state_175553;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_175553__$1,(7),c);
} else
{if((state_val_175554 === (6)))
{var inst_175549 = (state_175553[(2)]);var state_175553__$1 = state_175553;var statearr_175559_175585 = state_175553__$1;(statearr_175559_175585[(2)] = inst_175549);
(statearr_175559_175585[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_175554 === (3)))
{var inst_175551 = (state_175553[(2)]);var state_175553__$1 = state_175553;return cljs.core.async.impl.ioc_helpers.return_chan(state_175553__$1,inst_175551);
} else
{if((state_val_175554 === (2)))
{var state_175553__$1 = state_175553;var statearr_175560_175586 = state_175553__$1;(statearr_175560_175586[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_175554 === (9)))
{var state_175553__$1 = state_175553;var statearr_175562_175587 = state_175553__$1;(statearr_175562_175587[(2)] = null);
(statearr_175562_175587[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_175554 === (5)))
{var state_175553__$1 = state_175553;var statearr_175563_175588 = state_175553__$1;(statearr_175563_175588[(2)] = null);
(statearr_175563_175588[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_175554 === (10)))
{var inst_175545 = (state_175553[(2)]);var state_175553__$1 = (function (){var statearr_175564 = state_175553;(statearr_175564[(8)] = inst_175545);
return statearr_175564;
})();var statearr_175565_175589 = state_175553__$1;(statearr_175565_175589[(2)] = null);
(statearr_175565_175589[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_175554 === (8)))
{var inst_175536 = (state_175553[(7)]);var inst_175539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_175536,(0),null);var inst_175540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_175536,(1),null);var inst_175541 = stuttaford.om.common.config.cljs$core$IFn$_invoke$arity$2(self__.owner,new cljs.core.Keyword(null,"debug?","debug?",-1831756173));var inst_175542 = (function (){var G__175566 = self__.data;var G__175567 = inst_175539;var G__175568 = inst_175540;var G__175569 = inst_175541;return (stuttaford.articles.perform_action.cljs$core$IFn$_invoke$arity$4 ? stuttaford.articles.perform_action.cljs$core$IFn$_invoke$arity$4(G__175566,G__175567,G__175568,G__175569) : stuttaford.articles.perform_action.call(null,G__175566,G__175567,G__175568,G__175569));
})();var state_175553__$1 = state_175553;var statearr_175570_175590 = state_175553__$1;(statearr_175570_175590[(2)] = inst_175542);
(statearr_175570_175590[(1)] = (10));
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
});})(c__23002__auto__,c,___$1,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema175464,input_schema175465,input_checker175466,output_checker175467,vec__175461,opts__24458__auto__))
;return ((function (switch__22987__auto__,c__23002__auto__,c,___$1,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema175464,input_schema175465,input_checker175466,output_checker175467,vec__175461,opts__24458__auto__){
return (function() {
var state_machine__22988__auto__ = null;
var state_machine__22988__auto____0 = (function (){var statearr_175574 = [null,null,null,null,null,null,null,null,null];(statearr_175574[(0)] = state_machine__22988__auto__);
(statearr_175574[(1)] = (1));
return statearr_175574;
});
var state_machine__22988__auto____1 = (function (state_175553){while(true){
var ret_value__22989__auto__ = (function (){try{while(true){
var result__22990__auto__ = switch__22987__auto__(state_175553);if(cljs.core.keyword_identical_QMARK_(result__22990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__22990__auto__;
}
break;
}
}catch (e175575){if((e175575 instanceof Object))
{var ex__22991__auto__ = e175575;var statearr_175576_175591 = state_175553;(statearr_175576_175591[(5)] = ex__22991__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_175553);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e175575;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__22989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__175592 = state_175553;
state_175553 = G__175592;
continue;
}
} else
{return ret_value__22989__auto__;
}
break;
}
});
state_machine__22988__auto__ = function(state_175553){
switch(arguments.length){
case 0:
return state_machine__22988__auto____0.call(this);
case 1:
return state_machine__22988__auto____1.call(this,state_175553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22988__auto____0;
state_machine__22988__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22988__auto____1;
return state_machine__22988__auto__;
})()
;})(switch__22987__auto__,c__23002__auto__,c,___$1,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema175464,input_schema175465,input_checker175466,output_checker175467,vec__175461,opts__24458__auto__))
})();var state__23004__auto__ = (function (){var statearr_175577 = (function (){return (f__23003__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23003__auto__.cljs$core$IFn$_invoke$arity$0() : f__23003__auto__.call(null));
})();(statearr_175577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23002__auto__);
return statearr_175577;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23004__auto__);
});})(c__23002__auto__,c,___$1,owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema175464,input_schema175465,input_checker175466,output_checker175467,vec__175461,opts__24458__auto__))
);
return c__23002__auto__;
});})(owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema175464,input_schema175465,input_checker175466,output_checker175467,vec__175461,opts__24458__auto__))
;
stuttaford.articles.t175525.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema175464,input_schema175465,input_checker175466,output_checker175467,vec__175461,opts__24458__auto__){
return (function (_175527){var self__ = this;
var _175527__$1 = this;return self__.meta175526;
});})(owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema175464,input_schema175465,input_checker175466,output_checker175467,vec__175461,opts__24458__auto__))
;
stuttaford.articles.t175525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema175464,input_schema175465,input_checker175466,output_checker175467,vec__175461,opts__24458__auto__){
return (function (_175527,meta175526__$1){var self__ = this;
var _175527__$1 = this;return (new stuttaford.articles.t175525(self__.output_schema175464,self__.app_view,self__.owner,self__.view,self__.owner175340,self__.data,self__.map175462,self__.input_schema175465,self__.vec__175461,self__.input_checker175466,self__.G__175468,self__.opts__24458__auto__,self__.p__175342,self__.source_article_sentences,self__.output_checker175467,self__.validate__837__auto__,self__.ufv__,self__.data__24457__auto__,self__.fnk175463,meta175526__$1));
});})(owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema175464,input_schema175465,input_checker175466,output_checker175467,vec__175461,opts__24458__auto__))
;
stuttaford.articles.__GT_t175525 = ((function (owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema175464,input_schema175465,input_checker175466,output_checker175467,vec__175461,opts__24458__auto__){
return (function __GT_t175525(output_schema175464__$1,app_view__$1,owner__$1,view__$1,owner175340__$1,data__$1,map175462__$1,input_schema175465__$1,vec__175461__$1,input_checker175466__$1,G__175468__$1,opts__24458__auto____$1,p__175342__$1,source_article_sentences__$1,output_checker175467__$1,validate__837__auto____$1,ufv____$1,data__24457__auto____$1,fnk175463__$1,meta175526){return (new stuttaford.articles.t175525(output_schema175464__$1,app_view__$1,owner__$1,view__$1,owner175340__$1,data__$1,map175462__$1,input_schema175465__$1,vec__175461__$1,input_checker175466__$1,G__175468__$1,opts__24458__auto____$1,p__175342__$1,source_article_sentences__$1,output_checker175467__$1,validate__837__auto____$1,ufv____$1,data__24457__auto____$1,fnk175463__$1,meta175526));
});})(owner,source_article_sentences,view,data,validate__837__auto__,ufv__,output_schema175464,input_schema175465,input_checker175466,output_checker175467,vec__175461,opts__24458__auto__))
;
}
return (new stuttaford.articles.t175525(output_schema175464,app_view,owner,view,owner175340,data,map175462,input_schema175465,vec__175461,input_checker175466,G__175468,opts__24458__auto__,p__175342,source_article_sentences,output_checker175467,validate__837__auto__,ufv__,data__24457__auto__,fnk175463,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___175593 = (function (){var G__175578 = o__840__auto__;return (output_checker175467.cljs$core$IFn$_invoke$arity$1 ? output_checker175467.cljs$core$IFn$_invoke$arity$1(G__175578) : output_checker175467.call(null,G__175578));
})();if(cljs.core.truth_(temp__4126__auto___175593))
{var error__839__auto___175594 = temp__4126__auto___175593;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk175463","fnk175463",-3760481,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___175594], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema175464,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___175594], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema175464,input_schema175465,input_checker175466,output_checker175467,vec__175461,opts__24458__auto__))
,schema.core.make_fn_schema(output_schema175464,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema175465], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24458__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner175340,new cljs.core.Keyword(null,"data","data",-232669377),data__24457__auto__], null));
};
var app_view = function (data__24457__auto__,owner175340,var_args){
var p__175342 = null;if (arguments.length > 2) {
  p__175342 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_view__delegate.call(this,data__24457__auto__,owner175340,p__175342);};
app_view.cljs$lang$maxFixedArity = 2;
app_view.cljs$lang$applyTo = (function (arglist__175595){
var data__24457__auto__ = cljs.core.first(arglist__175595);
arglist__175595 = cljs.core.next(arglist__175595);
var owner175340 = cljs.core.first(arglist__175595);
var p__175342 = cljs.core.rest(arglist__175595);
return app_view__delegate(data__24457__auto__,owner175340,p__175342);
});
app_view.cljs$core$IFn$_invoke$arity$variadic = app_view__delegate;
return app_view;
})()
;
stuttaford.articles.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__24426__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.articles.app_view,cursor__24426__auto__);
});
var __GT_app_view__2 = (function (cursor__24426__auto__,m175341){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.articles.app_view,cursor__24426__auto__,m175341);
});
__GT_app_view = function(cursor__24426__auto__,m175341){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__24426__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__24426__auto__,m175341);
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