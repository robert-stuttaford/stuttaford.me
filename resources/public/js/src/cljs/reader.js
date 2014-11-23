goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
goog.require('goog.string');
cljs.reader.PushbackReader = (function (){var obj30943 = {};return obj30943;
})();
cljs.reader.read_char = (function read_char(reader){if((function (){var and__19621__auto__ = reader;if(and__19621__auto__)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__19621__auto__;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__20845__auto__ = (((reader == null))?null:reader);return (function (){var or__19663__auto__ = (cljs.reader.read_char[(function (){var G__30947 = x__20845__auto__;return goog.typeOf(G__30947);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.reader.read_char["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){if((function (){var and__19621__auto__ = reader;if(and__19621__auto__)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__19621__auto__;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__20845__auto__ = (((reader == null))?null:reader);return (function (){var or__19663__auto__ = (cljs.reader.unread[(function (){var G__30951 = x__20845__auto__;return goog.typeOf(G__30951);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.reader.unread["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,buffer,idx){
this.s = s;
this.buffer = buffer;
this.idx = idx;
})
cljs.reader.StringPushbackReader.cljs$lang$type = true;
cljs.reader.StringPushbackReader.cljs$lang$ctorStr = "cljs.reader/StringPushbackReader";
cljs.reader.StringPushbackReader.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;if((self__.buffer.length === (0)))
{self__.idx = (self__.idx + (1));
return (self__.s[self__.idx]);
} else
{return self__.buffer.pop();
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){var self__ = this;
var reader__$1 = this;return self__.buffer.push(ch);
});
cljs.reader.__GT_StringPushbackReader = (function __GT_StringPushbackReader(s,buffer,idx){return (new cljs.reader.StringPushbackReader(s,buffer,idx));
});
cljs.reader.push_back_reader = (function push_back_reader(s){return (new cljs.reader.StringPushbackReader(s,[],(-1)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){var or__19663__auto__ = (function (){var G__30955 = ch;return goog.string.isBreakingWhitespace(G__30955);
})();if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return ("," === ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){var G__30957 = ch;return goog.string.isNumeric(G__30957);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){return (";" === ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){return (cljs.reader.numeric_QMARK_(initch)) || (((("+" === initch)) || (("-" === initch))) && (cljs.reader.numeric_QMARK_((function (){var next_ch = cljs.reader.read_char(reader);cljs.reader.unread(reader,next_ch);
return next_ch;
})())));
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){throw (new Error(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg)));
};
var reader_error = function (rdr,var_args){
var msg = null;if (arguments.length > 1) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return reader_error__delegate.call(this,rdr,msg);};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__30958){
var rdr = cljs.core.first(arglist__30958);
var msg = cljs.core.rest(arglist__30958);
return reader_error__delegate(rdr,msg);
});
reader_error.cljs$core$IFn$_invoke$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){var and__19621__auto__ = !((ch === "#"));if(and__19621__auto__)
{var and__19621__auto____$1 = !((ch === "'"));if(and__19621__auto____$1)
{var and__19621__auto____$2 = !((ch === ":"));if(and__19621__auto____$2)
{var G__30966 = ch;return (cljs.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(G__30966) : cljs.reader.macros.call(null,G__30966));
} else
{return and__19621__auto____$2;
}
} else
{return and__19621__auto____$1;
}
} else
{return and__19621__auto__;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){var sb = (new goog.string.StringBuffer(initch));var ch = cljs.reader.read_char(rdr);while(true){
if(((ch == null)) || (cljs.reader.whitespace_QMARK_(ch)) || (cljs.reader.macro_terminating_QMARK_(ch)))
{cljs.reader.unread(rdr,ch);
return sb.toString();
} else
{{
var G__30967 = (function (){sb.append(ch);
return sb;
})();
var G__30968 = cljs.reader.read_char(rdr);
sb = G__30967;
ch = G__30968;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){while(true){
var ch = cljs.reader.read_char(reader);if(((ch === "\n")) || ((ch === "\r")) || ((ch == null)))
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern("^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$");
cljs.reader.ratio_pattern = cljs.core.re_pattern("^([-+]?[0-9]+)/([0-9]+)$");
cljs.reader.float_pattern = cljs.core.re_pattern("^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$");
cljs.reader.symbol_pattern = cljs.core.re_pattern("^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){var matches = re.exec(s);if((!((matches == null))) && (((matches[(0)]) === s)))
{if((matches.length === (1)))
{return (matches[(0)]);
} else
{return matches;
}
} else
{return null;
}
});
cljs.reader.match_int = (function match_int(s){var groups = cljs.reader.re_matches_STAR_(cljs.reader.int_pattern,s);var ie8_fix = (groups[(2)]);var zero = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ie8_fix,""))?null:ie8_fix);if(!((zero == null)))
{return (0);
} else
{var a = (cljs.core.truth_((groups[(3)]))?[(groups[(3)]),(10)]:(cljs.core.truth_((groups[(4)]))?[(groups[(4)]),(16)]:(cljs.core.truth_((groups[(5)]))?[(groups[(5)]),(8)]:(cljs.core.truth_((groups[(6)]))?[(groups[(7)]),(function (){var G__30973 = (groups[(6)]);var G__30974 = (10);return parseInt(G__30973,G__30974);
})()]:[null,null]
))));var n = (a[(0)]);var radix = (a[(1)]);if((n == null))
{return null;
} else
{var parsed = (function (){var G__30975 = n;var G__30976 = radix;return parseInt(G__30975,G__30976);
})();if(("-" === (groups[(1)])))
{return (- parsed);
} else
{return parsed;
}
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){var groups = cljs.reader.re_matches_STAR_(cljs.reader.ratio_pattern,s);var numinator = (groups[(1)]);var denominator = (groups[(2)]);return ((function (){var G__30981 = numinator;var G__30982 = (10);return parseInt(G__30981,G__30982);
})() / (function (){var G__30983 = denominator;var G__30984 = (10);return parseInt(G__30983,G__30984);
})());
});
cljs.reader.match_float = (function match_float(s){var G__30986 = s;return parseFloat(G__30986);
});
cljs.reader.match_number = (function match_number(s){if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.int_pattern,s)))
{return cljs.reader.match_int(s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio(s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.float_pattern,s)))
{return cljs.reader.match_float(s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = (function escape_char_map(c){if((c === "t"))
{return "\t";
} else
{if((c === "r"))
{return "\r";
} else
{if((c === "n"))
{return "\n";
} else
{if((c === "\\"))
{return "\\";
} else
{if((c === "\""))
{return "\"";
} else
{if((c === "b"))
{return "\b";
} else
{if((c === "f"))
{return "\f";
} else
{return null;

}
}
}
}
}
}
}
});
cljs.reader.read_2_chars = (function read_2_chars(reader){return (new goog.string.StringBuffer(cljs.reader.read_char(reader),cljs.reader.read_char(reader))).toString();
});
cljs.reader.read_4_chars = (function read_4_chars(reader){return (new goog.string.StringBuffer(cljs.reader.read_char(reader),cljs.reader.read_char(reader),cljs.reader.read_char(reader),cljs.reader.read_char(reader))).toString();
});
cljs.reader.unicode_2_pattern = cljs.core.re_pattern("^[0-9A-Fa-f]{2}$");
cljs.reader.unicode_4_pattern = cljs.core.re_pattern("^[0-9A-Fa-f]{4}$");
cljs.reader.validate_unicode_escape = (function validate_unicode_escape(unicode_pattern,reader,escape_char,unicode_str){if(cljs.core.truth_(cljs.core.re_matches(unicode_pattern,unicode_str)))
{return unicode_str;
} else
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Unexpected unicode escape \\",escape_char,unicode_str], 0));
}
});
cljs.reader.make_unicode_char = (function make_unicode_char(code_str){var code = (function (){var G__30989 = code_str;var G__30990 = (16);return parseInt(G__30989,G__30990);
})();return String.fromCharCode(code);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){var ch = cljs.reader.read_char(reader);var mapresult = cljs.reader.escape_char_map(ch);if(cljs.core.truth_(mapresult))
{return mapresult;
} else
{if((ch === "x"))
{return cljs.reader.make_unicode_char(cljs.reader.validate_unicode_escape(cljs.reader.unicode_2_pattern,reader,ch,cljs.reader.read_2_chars(reader)));
} else
{if((ch === "u"))
{return cljs.reader.make_unicode_char(cljs.reader.validate_unicode_escape(cljs.reader.unicode_4_pattern,reader,ch,cljs.reader.read_4_chars(reader)));
} else
{if(cljs.reader.numeric_QMARK_(ch))
{return String.fromCharCode(ch);
} else
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Unexpected unicode escape \\",ch], 0));

}
}
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){var ch = cljs.reader.read_char(rdr);while(true){
if(cljs.core.truth_((function (){var G__30992 = ch;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__30992) : pred.call(null,G__30992));
})()))
{{
var G__30993 = cljs.reader.read_char(rdr);
ch = G__30993;
continue;
}
} else
{return ch;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){var a = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);while(true){
var ch = cljs.reader.read_past(cljs.reader.whitespace_QMARK_,rdr);if(cljs.core.truth_(ch))
{} else
{cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["EOF while reading"], 0));
}
if((delim === ch))
{return cljs.core.persistent_BANG_(a);
} else
{var temp__4124__auto__ = (function (){var G__31001 = ch;return (cljs.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(G__31001) : cljs.reader.macros.call(null,G__31001));
})();if(cljs.core.truth_(temp__4124__auto__))
{var macrofn = temp__4124__auto__;var mret = (function (){var G__31002 = rdr;var G__31003 = ch;return (macrofn.cljs$core$IFn$_invoke$arity$2 ? macrofn.cljs$core$IFn$_invoke$arity$2(G__31002,G__31003) : macrofn.call(null,G__31002,G__31003));
})();{
var G__31008 = (((mret === rdr))?a:cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,mret));
a = G__31008;
continue;
}
} else
{cljs.reader.unread(rdr,ch);
var o = (function (){var G__31004 = rdr;var G__31005 = true;var G__31006 = null;var G__31007 = recursive_QMARK_;return (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__31004,G__31005,G__31006,G__31007) : cljs.reader.read.call(null,G__31004,G__31005,G__31006,G__31007));
})();{
var G__31009 = (((o === rdr))?a:cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(a,o));
a = G__31009;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Reader for ",ch," not implemented yet"], 0));
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){var ch = cljs.reader.read_char(rdr);var dm = (function (){var G__31015 = ch;return (cljs.reader.dispatch_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.dispatch_macros.cljs$core$IFn$_invoke$arity$1(G__31015) : cljs.reader.dispatch_macros.call(null,G__31015));
})();if(cljs.core.truth_(dm))
{var G__31016 = rdr;var G__31017 = _;return (dm.cljs$core$IFn$_invoke$arity$2 ? dm.cljs$core$IFn$_invoke$arity$2(G__31016,G__31017) : dm.call(null,G__31016,G__31017));
} else
{var temp__4124__auto__ = (function (){var G__31018 = rdr;var G__31019 = ch;return (cljs.reader.maybe_read_tagged_type.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.maybe_read_tagged_type.cljs$core$IFn$_invoke$arity$2(G__31018,G__31019) : cljs.reader.maybe_read_tagged_type.call(null,G__31018,G__31019));
})();if(cljs.core.truth_(temp__4124__auto__))
{var obj = temp__4124__auto__;return obj;
} else
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["No dispatch macro for ",ch], 0));
}
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Unmached delimiter ",ch], 0));
});
cljs.reader.read_list = (function read_list(rdr,_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.reader.read_delimited_list(")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){return cljs.reader.read_delimited_list("]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){var l = cljs.reader.read_delimited_list("}",rdr,true);if(cljs.core.odd_QMARK_(cljs.core.count(l)))
{cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Map literal must contain an even number of forms"], 0));
} else
{}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,l);
});
cljs.reader.read_number = (function read_number(reader,initch){var buffer = (new goog.string.StringBuffer(initch));var ch = cljs.reader.read_char(reader);while(true){
if(cljs.core.truth_((function (){var or__19663__auto__ = (ch == null);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = cljs.reader.whitespace_QMARK_(ch);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{var G__31025 = ch;return (cljs.reader.macros.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.macros.cljs$core$IFn$_invoke$arity$1(G__31025) : cljs.reader.macros.call(null,G__31025));
}
}
})()))
{cljs.reader.unread(reader,ch);
var s = buffer.toString();var or__19663__auto__ = cljs.reader.match_number(s);if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Invalid number format [",s,"]"], 0));
}
} else
{{
var G__31026 = (function (){buffer.append(ch);
return buffer;
})();
var G__31027 = cljs.reader.read_char(reader);
buffer = G__31026;
ch = G__31027;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){var buffer = (new goog.string.StringBuffer());var ch = cljs.reader.read_char(reader);while(true){
if((ch == null))
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else
{if(("\\" === ch))
{{
var G__31028 = (function (){buffer.append(cljs.reader.escape_char(buffer,reader));
return buffer;
})();
var G__31029 = cljs.reader.read_char(reader);
buffer = G__31028;
ch = G__31029;
continue;
}
} else
{if(("\"" === ch))
{return buffer.toString();
} else
{{
var G__31030 = (function (){buffer.append(ch);
return buffer;
})();
var G__31031 = cljs.reader.read_char(reader);
buffer = G__31030;
ch = G__31031;
continue;
}

}
}
}
break;
}
});
cljs.reader.read_raw_string_STAR_ = (function read_raw_string_STAR_(reader,_){var buffer = (new goog.string.StringBuffer());var ch = cljs.reader.read_char(reader);while(true){
if((ch == null))
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else
{if(("\\" === ch))
{buffer.append(ch);
var nch = cljs.reader.read_char(reader);if((nch == null))
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else
{{
var G__31036 = (function (){var G__31034 = buffer;G__31034.append(nch);
return G__31034;
})();
var G__31037 = cljs.reader.read_char(reader);
buffer = G__31036;
ch = G__31037;
continue;
}
}
} else
{if(("\"" === ch))
{return buffer.toString();
} else
{{
var G__31038 = (function (){var G__31035 = buffer;G__31035.append(ch);
return G__31035;
})();
var G__31039 = cljs.reader.read_char(reader);
buffer = G__31038;
ch = G__31039;
continue;
}

}
}
}
break;
}
});
cljs.reader.special_symbols = (function special_symbols(t,not_found){if((t === "nil"))
{return null;
} else
{if((t === "true"))
{return true;
} else
{if((t === "false"))
{return false;
} else
{return not_found;

}
}
}
});
cljs.reader.read_symbol = (function read_symbol(reader,initch){var token = cljs.reader.read_token(reader,initch);if(cljs.core.truth_((function (){var G__31042 = token;var G__31043 = "/";return goog.string.contains(G__31042,G__31043);
})()))
{return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,(0),token.indexOf("/")),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,(token.indexOf("/") + (1)),token.length));
} else
{return cljs.reader.special_symbols(token,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(token));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){var token = cljs.reader.read_token(reader,cljs.reader.read_char(reader));var a = cljs.reader.re_matches_STAR_(cljs.reader.symbol_pattern,token);var token__$1 = (a[(0)]);var ns = (a[(1)]);var name = (a[(2)]);if(((!((void 0 === ns))) && ((ns.substring((ns.length - (2)),ns.length) === ":/"))) || (((name[(name.length - (1))]) === ":")) || (!((token__$1.indexOf("::",(1)) === (-1)))))
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["Invalid token: ",token__$1], 0));
} else
{if((!((ns == null))) && ((ns.length > (0))))
{return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns.substring((0),ns.indexOf("/")),name);
} else
{return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token__$1);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){if((f instanceof cljs.core.Symbol))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else
{if(typeof f === 'string')
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else
{if((f instanceof cljs.core.Keyword))
{return new cljs.core.PersistentArrayMap.fromArray([f,true], true, false);
} else
{return f;

}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){return (function (rdr,_){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__31048 = rdr;var G__31049 = true;var G__31050 = null;var G__31051 = true;return (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__31048,G__31049,G__31050,G__31051) : cljs.reader.read.call(null,G__31048,G__31049,G__31050,G__31051));
})()),sym);
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){return (function (rdr,_){return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq([msg], 0));
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){var m = cljs.reader.desugar_meta((function (){var G__31061 = rdr;var G__31062 = true;var G__31063 = null;var G__31064 = true;return (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__31061,G__31062,G__31063,G__31064) : cljs.reader.read.call(null,G__31061,G__31062,G__31063,G__31064));
})());if(cljs.core.map_QMARK_(m))
{} else
{cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Metadata must be Symbol,Keyword,String or Map"], 0));
}
var o = (function (){var G__31065 = rdr;var G__31066 = true;var G__31067 = null;var G__31068 = true;return (cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__31065,G__31066,G__31067,G__31068) : cljs.reader.read.call(null,G__31065,G__31066,G__31067,G__31068));
})();if((function (){var G__31069 = o;if(G__31069)
{var bit__20917__auto__ = (G__31069.cljs$lang$protocol_mask$partition0$ & (262144));if((bit__20917__auto__) || (G__31069.cljs$core$IWithMeta$))
{return true;
} else
{if((!G__31069.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__31069);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__31069);
}
})())
{return cljs.core.with_meta(o,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.meta(o),m], 0)));
} else
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Metadata can only be applied to IWithMetas"], 0));
}
});
cljs.reader.read_set = (function read_set(rdr,_){return cljs.core.set(cljs.reader.read_delimited_list("}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){return cljs.core.re_pattern(cljs.reader.read_raw_string_STAR_(rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){var G__31074_31078 = rdr;var G__31075_31079 = true;var G__31076_31080 = null;var G__31077_31081 = true;(cljs.reader.read.cljs$core$IFn$_invoke$arity$4 ? cljs.reader.read.cljs$core$IFn$_invoke$arity$4(G__31074_31078,G__31075_31079,G__31076_31080,G__31077_31081) : cljs.reader.read.call(null,G__31074_31078,G__31075_31079,G__31076_31080,G__31077_31081));
return rdr;
});
cljs.reader.macros = (function macros(c){if((c === "\""))
{return cljs.reader.read_string_STAR_;
} else
{if((c === ":"))
{return cljs.reader.read_keyword;
} else
{if((c === ";"))
{return cljs.reader.read_comment;
} else
{if((c === "'"))
{return cljs.reader.wrapping_reader(new cljs.core.Symbol(null,"quote","quote",1377916282,null));
} else
{if((c === "@"))
{return cljs.reader.wrapping_reader(new cljs.core.Symbol(null,"deref","deref",1494944732,null));
} else
{if((c === "^"))
{return cljs.reader.read_meta;
} else
{if((c === "`"))
{return cljs.reader.not_implemented;
} else
{if((c === "~"))
{return cljs.reader.not_implemented;
} else
{if((c === "("))
{return cljs.reader.read_list;
} else
{if((c === ")"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "["))
{return cljs.reader.read_vector;
} else
{if((c === "]"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "{"))
{return cljs.reader.read_map;
} else
{if((c === "}"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "\\"))
{return cljs.reader.read_char;
} else
{if((c === "#"))
{return cljs.reader.read_dispatch;
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
});
cljs.reader.dispatch_macros = (function dispatch_macros(s){if((s === "{"))
{return cljs.reader.read_set;
} else
{if((s === "<"))
{return cljs.reader.throwing_reader("Unreadable form");
} else
{if((s === "\""))
{return cljs.reader.read_regex;
} else
{if((s === "!"))
{return cljs.reader.read_comment;
} else
{if((s === "_"))
{return cljs.reader.read_discard;
} else
{return null;

}
}
}
}
}
});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){while(true){
var ch = cljs.reader.read_char(reader);if((ch == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.array_seq(["EOF while reading"], 0));
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_(ch))
{{
var G__31090 = reader;
var G__31091 = eof_is_error;
var G__31092 = sentinel;
var G__31093 = is_recursive;
reader = G__31090;
eof_is_error = G__31091;
sentinel = G__31092;
is_recursive = G__31093;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_(ch))
{{
var G__31094 = (function (){var G__31086 = reader;var G__31087 = ch;return (cljs.reader.read_comment.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.read_comment.cljs$core$IFn$_invoke$arity$2(G__31086,G__31087) : cljs.reader.read_comment.call(null,G__31086,G__31087));
})();
var G__31095 = eof_is_error;
var G__31096 = sentinel;
var G__31097 = is_recursive;
reader = G__31094;
eof_is_error = G__31095;
sentinel = G__31096;
is_recursive = G__31097;
continue;
}
} else
{var f = cljs.reader.macros(ch);var res = (cljs.core.truth_(f)?(function (){var G__31088 = reader;var G__31089 = ch;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__31088,G__31089) : f.call(null,G__31088,G__31089));
})():((cljs.reader.number_literal_QMARK_(reader,ch))?cljs.reader.read_number(reader,ch):cljs.reader.read_symbol(reader,ch)
));if((res === reader))
{{
var G__31098 = reader;
var G__31099 = eof_is_error;
var G__31100 = sentinel;
var G__31101 = is_recursive;
reader = G__31098;
eof_is_error = G__31099;
sentinel = G__31100;
is_recursive = G__31101;
continue;
}
} else
{return res;
}

}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){var r = cljs.reader.push_back_reader(s);return cljs.reader.read(r,false,null,false);
});
cljs.reader.zero_fill_right_and_truncate = (function zero_fill_right_and_truncate(s,width){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width,cljs.core.count(s)))
{return s;
} else
{if((width < cljs.core.count(s)))
{return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),width);
} else
{var b = (new goog.string.StringBuffer(s));while(true){
if((b.getLength() < width))
{{
var G__31102 = b.append("0");
b = G__31102;
continue;
}
} else
{return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function divisible_QMARK_(num,div){return (cljs.core.mod(num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function indivisible_QMARK_(num,div){return !(cljs.reader.divisible_QMARK_(num,div));
});
cljs.reader.leap_year_QMARK_ = (function leap_year_QMARK_(year){return (cljs.reader.divisible_QMARK_(year,(4))) && ((cljs.reader.indivisible_QMARK_(year,(100))) || (cljs.reader.divisible_QMARK_(year,(400))));
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);return ((function (dim_norm,dim_leap){
return (function (month,leap_year_QMARK_){return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
;})(dim_norm,dim_leap))
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function parse_int(s){var n = (function (){var G__31106 = s;var G__31107 = (10);return parseInt(G__31106,G__31107);
})();if(cljs.core.not((function (){var G__31108 = n;return isNaN(G__31108);
})()))
{return n;
} else
{return null;
}
});
cljs.reader.check = (function check(low,n,high,msg){if(((low <= n)) && ((n <= high)))
{} else
{cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)+" Failed:  "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(low)+"<="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)+"<="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(high))], 0));
}
return n;
});
cljs.reader.parse_and_validate_timestamp = (function parse_and_validate_timestamp(s){var vec__31112 = cljs.core.re_matches(cljs.reader.timestamp_regex,s);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31112,(0),null);var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31112,(1),null);var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31112,(2),null);var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31112,(3),null);var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31112,(4),null);var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31112,(5),null);var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31112,(6),null);var fraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31112,(7),null);var offset_sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31112,(8),null);var offset_hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31112,(9),null);var offset_minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31112,(10),null);var v = vec__31112;if(cljs.core.not(v))
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([("Unrecognized date/time syntax: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s))], 0));
} else
{var years__$1 = cljs.reader.parse_int(years);var months__$1 = (function (){var or__19663__auto__ = cljs.reader.parse_int(months);if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return (1);
}
})();var days__$1 = (function (){var or__19663__auto__ = cljs.reader.parse_int(days);if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return (1);
}
})();var hours__$1 = (function (){var or__19663__auto__ = cljs.reader.parse_int(hours);if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return (0);
}
})();var minutes__$1 = (function (){var or__19663__auto__ = cljs.reader.parse_int(minutes);if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return (0);
}
})();var seconds__$1 = (function (){var or__19663__auto__ = cljs.reader.parse_int(seconds);if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return (0);
}
})();var fraction__$1 = (function (){var or__19663__auto__ = cljs.reader.parse_int(cljs.reader.zero_fill_right_and_truncate(fraction,(3)));if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return (0);
}
})();var offset_sign__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset_sign,"-"))?(-1):(1));var offset_hours__$1 = (function (){var or__19663__auto__ = cljs.reader.parse_int(offset_hours);if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return (0);
}
})();var offset_minutes__$1 = (function (){var or__19663__auto__ = cljs.reader.parse_int(offset_minutes);if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return (0);
}
})();var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check((1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check((1),days__$1,(function (){var G__31113 = months__$1;var G__31114 = cljs.reader.leap_year_QMARK_(years__$1);return (cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2(G__31113,G__31114) : cljs.reader.days_in_month.call(null,G__31113,G__31114));
})(),"timestamp day field must be in range 1..last day in month"),cljs.reader.check((0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check((0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check((0),seconds__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check((0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function parse_timestamp(ts){var temp__4124__auto__ = cljs.reader.parse_and_validate_timestamp(ts);if(cljs.core.truth_(temp__4124__auto__))
{var vec__31116 = temp__4124__auto__;var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31116,(0),null);var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31116,(1),null);var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31116,(2),null);var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31116,(3),null);var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31116,(4),null);var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31116,(5),null);var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31116,(6),null);var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31116,(7),null);return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([("Unrecognized date/time syntax: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts))], 0));
}
});
cljs.reader.read_date = (function read_date(s){if(typeof s === 'string')
{return cljs.reader.parse_timestamp(s);
} else
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Instance literal expects a string for its timestamp."], 0));
}
});
cljs.reader.read_queue = (function read_queue(elems){if(cljs.core.vector_QMARK_(elems))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,elems);
} else
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Queue literal expects a vector for its elements."], 0));
}
});
cljs.reader.read_js = (function read_js(form){if(cljs.core.vector_QMARK_(form))
{var arr = [];var seq__31129_31141 = cljs.core.seq(form);var chunk__31130_31142 = null;var count__31131_31143 = (0);var i__31132_31144 = (0);while(true){
if((i__31132_31144 < count__31131_31143))
{var x_31145 = chunk__31130_31142.cljs$core$IIndexed$_nth$arity$2(null,i__31132_31144);arr.push(x_31145);
{
var G__31146 = seq__31129_31141;
var G__31147 = chunk__31130_31142;
var G__31148 = count__31131_31143;
var G__31149 = (i__31132_31144 + (1));
seq__31129_31141 = G__31146;
chunk__31130_31142 = G__31147;
count__31131_31143 = G__31148;
i__31132_31144 = G__31149;
continue;
}
} else
{var temp__4126__auto___31150 = cljs.core.seq(seq__31129_31141);if(temp__4126__auto___31150)
{var seq__31129_31151__$1 = temp__4126__auto___31150;if(cljs.core.chunked_seq_QMARK_(seq__31129_31151__$1))
{var c__21126__auto___31152 = cljs.core.chunk_first(seq__31129_31151__$1);{
var G__31153 = cljs.core.chunk_rest(seq__31129_31151__$1);
var G__31154 = c__21126__auto___31152;
var G__31155 = cljs.core.count(c__21126__auto___31152);
var G__31156 = (0);
seq__31129_31141 = G__31153;
chunk__31130_31142 = G__31154;
count__31131_31143 = G__31155;
i__31132_31144 = G__31156;
continue;
}
} else
{var x_31157 = cljs.core.first(seq__31129_31151__$1);arr.push(x_31157);
{
var G__31158 = cljs.core.next(seq__31129_31151__$1);
var G__31159 = null;
var G__31160 = (0);
var G__31161 = (0);
seq__31129_31141 = G__31158;
chunk__31130_31142 = G__31159;
count__31131_31143 = G__31160;
i__31132_31144 = G__31161;
continue;
}
}
} else
{}
}
break;
}
return arr;
} else
{if(cljs.core.map_QMARK_(form))
{var obj = (function (){var obj31134 = {};return obj31134;
})();var seq__31135_31162 = cljs.core.seq(form);var chunk__31136_31163 = null;var count__31137_31164 = (0);var i__31138_31165 = (0);while(true){
if((i__31138_31165 < count__31137_31164))
{var vec__31139_31166 = chunk__31136_31163.cljs$core$IIndexed$_nth$arity$2(null,i__31138_31165);var k_31167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31139_31166,(0),null);var v_31168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31139_31166,(1),null);(obj[cljs.core.name(k_31167)] = v_31168);
{
var G__31169 = seq__31135_31162;
var G__31170 = chunk__31136_31163;
var G__31171 = count__31137_31164;
var G__31172 = (i__31138_31165 + (1));
seq__31135_31162 = G__31169;
chunk__31136_31163 = G__31170;
count__31137_31164 = G__31171;
i__31138_31165 = G__31172;
continue;
}
} else
{var temp__4126__auto___31173 = cljs.core.seq(seq__31135_31162);if(temp__4126__auto___31173)
{var seq__31135_31174__$1 = temp__4126__auto___31173;if(cljs.core.chunked_seq_QMARK_(seq__31135_31174__$1))
{var c__21126__auto___31175 = cljs.core.chunk_first(seq__31135_31174__$1);{
var G__31176 = cljs.core.chunk_rest(seq__31135_31174__$1);
var G__31177 = c__21126__auto___31175;
var G__31178 = cljs.core.count(c__21126__auto___31175);
var G__31179 = (0);
seq__31135_31162 = G__31176;
chunk__31136_31163 = G__31177;
count__31137_31164 = G__31178;
i__31138_31165 = G__31179;
continue;
}
} else
{var vec__31140_31180 = cljs.core.first(seq__31135_31174__$1);var k_31181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31140_31180,(0),null);var v_31182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31140_31180,(1),null);(obj[cljs.core.name(k_31181)] = v_31182);
{
var G__31183 = cljs.core.next(seq__31135_31174__$1);
var G__31184 = null;
var G__31185 = (0);
var G__31186 = (0);
seq__31135_31162 = G__31183;
chunk__31136_31163 = G__31184;
count__31137_31164 = G__31185;
i__31138_31165 = G__31186;
continue;
}
}
} else
{}
}
break;
}
return obj;
} else
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([("JS literal expects a vector or map containing only string or unqualified keyword keys")], 0));

}
}
});
cljs.reader.read_uuid = (function read_uuid(uuid){if(typeof uuid === 'string')
{return (new cljs.core.UUID(uuid));
} else
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["UUID literal expects a string as its representation."], 0));
}
});
cljs.reader._STAR_tag_table_STAR_ = (function (){var G__31187 = new cljs.core.PersistentArrayMap(null, 4, ["inst",cljs.reader.read_date,"uuid",cljs.reader.read_uuid,"queue",cljs.reader.read_queue,"js",cljs.reader.read_js], null);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__31187) : cljs.core.atom.call(null,G__31187));
})();
cljs.reader._STAR_default_data_reader_fn_STAR_ = (function (){var G__31188 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__31188) : cljs.core.atom.call(null,G__31188));
})();
cljs.reader.maybe_read_tagged_type = (function maybe_read_tagged_type(rdr,initch){var tag = cljs.reader.read_symbol(rdr,initch);var pfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__31195 = cljs.reader._STAR_tag_table_STAR_;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31195) : cljs.core.deref.call(null,G__31195));
})(),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)));var dfn = (function (){var G__31196 = cljs.reader._STAR_default_data_reader_fn_STAR_;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31196) : cljs.core.deref.call(null,G__31196));
})();if(cljs.core.truth_(pfn))
{var G__31197 = cljs.reader.read(rdr,true,null,false);return (pfn.cljs$core$IFn$_invoke$arity$1 ? pfn.cljs$core$IFn$_invoke$arity$1(G__31197) : pfn.call(null,G__31197));
} else
{if(cljs.core.truth_(dfn))
{var G__31198 = tag;var G__31199 = cljs.reader.read(rdr,true,null,false);return (dfn.cljs$core$IFn$_invoke$arity$2 ? dfn.cljs$core$IFn$_invoke$arity$2(G__31198,G__31199) : dfn.call(null,G__31198,G__31199));
} else
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.array_seq(["Could not find tag parser for ",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.keys((function (){var G__31200 = cljs.reader._STAR_tag_table_STAR_;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31200) : cljs.core.deref.call(null,G__31200));
})())], 0))], 0));

}
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){var tag__$1 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag));var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__31202 = cljs.reader._STAR_tag_table_STAR_;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31202) : cljs.core.deref.call(null,G__31202));
})(),tag__$1);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__$1,f);
return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){var tag__$1 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag));var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__31204 = cljs.reader._STAR_tag_table_STAR_;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31204) : cljs.core.deref.call(null,G__31204));
})(),tag__$1);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__$1);
return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function register_default_tag_parser_BANG_(f){var old_parser = (function (){var G__31206 = cljs.reader._STAR_default_data_reader_fn_STAR_;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31206) : cljs.core.deref.call(null,G__31206));
})();cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){return f;
});})(old_parser))
);
return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function deregister_default_tag_parser_BANG_(){var old_parser = (function (){var G__31208 = cljs.reader._STAR_default_data_reader_fn_STAR_;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31208) : cljs.core.deref.call(null,G__31208));
})();cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){return null;
});})(old_parser))
);
return old_parser;
});
//# sourceMappingURL=reader.js.map