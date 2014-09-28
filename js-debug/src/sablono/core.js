goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__53799__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__53798 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53798,(0),null);var body = cljs.core.nthnext(vec__53798,(1));if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__53799 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__53799__delegate.call(this,args);};
G__53799.cljs$lang$maxFixedArity = 0;
G__53799.cljs$lang$applyTo = (function (arglist__53800){
var args = cljs.core.seq(arglist__53800);
return G__53799__delegate(args);
});
G__53799.cljs$core$IFn$_invoke$arity$variadic = G__53799__delegate;
return G__53799;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__20686__auto__ = (function iter__53807(s__53808){return (new cljs.core.LazySeq(null,(function (){var s__53808__$1 = s__53808;while(true){
var temp__4126__auto__ = cljs.core.seq(s__53808__$1);if(temp__4126__auto__)
{var s__53808__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__53808__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__53808__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__53810 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__53809 = (0);while(true){
if((i__53809 < size__20685__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__53809);cljs.core.chunk_append(b__53810,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__53813 = (i__53809 + (1));
i__53809 = G__53813;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53810),iter__53807(cljs.core.chunk_rest(s__53808__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53810),null);
}
} else
{var args = cljs.core.first(s__53808__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__53807(cljs.core.rest(s__53808__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20686__auto__(arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__20686__auto__ = (function iter__53820(s__53821){return (new cljs.core.LazySeq(null,(function (){var s__53821__$1 = s__53821;while(true){
var temp__4126__auto__ = cljs.core.seq(s__53821__$1);if(temp__4126__auto__)
{var s__53821__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__53821__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__53821__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__53823 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__53822 = (0);while(true){
if((i__53822 < size__20685__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__53822);cljs.core.chunk_append(b__53823,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__53826 = (i__53822 + (1));
i__53822 = G__53826;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53823),iter__53820(cljs.core.chunk_rest(s__53821__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53823),null);
}
} else
{var style = cljs.core.first(s__53821__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__53820(cljs.core.rest(s__53821__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20686__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__53827){
var styles = cljs.core.seq(arglist__53827);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){var G__53832 = (function (){return goog.dom.getDocument();
})().body;var G__53833 = (function (){var G__53834 = "script";var G__53835 = {"src": src};return goog.dom.createDom(G__53834,G__53835);
})();return goog.dom.appendChild(G__53832,G__53833);
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js("http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to53836 = (function() { 
var link_to53836__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to53836 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to53836__delegate.call(this,url,content);};
link_to53836.cljs$lang$maxFixedArity = 1;
link_to53836.cljs$lang$applyTo = (function (arglist__53837){
var url = cljs.core.first(arglist__53837);
var content = cljs.core.rest(arglist__53837);
return link_to53836__delegate(url,content);
});
link_to53836.cljs$core$IFn$_invoke$arity$variadic = link_to53836__delegate;
return link_to53836;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to53836);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to53838 = (function() { 
var mail_to53838__delegate = function (e_mail,p__53839){var vec__53841 = p__53839;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53841,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__19289__auto__ = content;if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to53838 = function (e_mail,var_args){
var p__53839 = null;if (arguments.length > 1) {
  p__53839 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to53838__delegate.call(this,e_mail,p__53839);};
mail_to53838.cljs$lang$maxFixedArity = 1;
mail_to53838.cljs$lang$applyTo = (function (arglist__53842){
var e_mail = cljs.core.first(arglist__53842);
var p__53839 = cljs.core.rest(arglist__53842);
return mail_to53838__delegate(e_mail,p__53839);
});
mail_to53838.cljs$core$IFn$_invoke$arity$variadic = mail_to53838__delegate;
return mail_to53838;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to53838);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list53843 = (function unordered_list53843(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__20686__auto__ = (function iter__53850(s__53851){return (new cljs.core.LazySeq(null,(function (){var s__53851__$1 = s__53851;while(true){
var temp__4126__auto__ = cljs.core.seq(s__53851__$1);if(temp__4126__auto__)
{var s__53851__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__53851__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__53851__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__53853 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__53852 = (0);while(true){
if((i__53852 < size__20685__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__53852);cljs.core.chunk_append(b__53853,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__53856 = (i__53852 + (1));
i__53852 = G__53856;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53853),iter__53850(cljs.core.chunk_rest(s__53851__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53853),null);
}
} else
{var x = cljs.core.first(s__53851__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__53850(cljs.core.rest(s__53851__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20686__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list53843);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list53857 = (function ordered_list53857(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__20686__auto__ = (function iter__53864(s__53865){return (new cljs.core.LazySeq(null,(function (){var s__53865__$1 = s__53865;while(true){
var temp__4126__auto__ = cljs.core.seq(s__53865__$1);if(temp__4126__auto__)
{var s__53865__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__53865__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__53865__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__53867 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__53866 = (0);while(true){
if((i__53866 < size__20685__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__53866);cljs.core.chunk_append(b__53867,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__53870 = (i__53866 + (1));
i__53866 = G__53870;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53867),iter__53864(cljs.core.chunk_rest(s__53865__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53867),null);
}
} else
{var x = cljs.core.first(s__53865__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__53864(cljs.core.rest(s__53865__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20686__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list53857);
/**
* Create an image element.
*/
sablono.core.image53871 = (function() {
var image53871 = null;
var image53871__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image53871__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image53871 = function(src,alt){
switch(arguments.length){
case 1:
return image53871__1.call(this,src);
case 2:
return image53871__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image53871.cljs$core$IFn$_invoke$arity$1 = image53871__1;
image53871.cljs$core$IFn$_invoke$arity$2 = image53871__2;
return image53871;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image53871);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__53872_SHARP_,p2__53873_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__53872_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__53873_SHARP_)+"]");
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__53874_SHARP_,p2__53875_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__53874_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__53875_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field53876 = (function() {
var color_field53876 = null;
var color_field53876__1 = (function (name__21403__auto__){return color_field53876.cljs$core$IFn$_invoke$arity$2(name__21403__auto__,null);
});
var color_field53876__2 = (function (name__21403__auto__,value__21404__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__21403__auto__,value__21404__auto__);
});
color_field53876 = function(name__21403__auto__,value__21404__auto__){
switch(arguments.length){
case 1:
return color_field53876__1.call(this,name__21403__auto__);
case 2:
return color_field53876__2.call(this,name__21403__auto__,value__21404__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field53876.cljs$core$IFn$_invoke$arity$1 = color_field53876__1;
color_field53876.cljs$core$IFn$_invoke$arity$2 = color_field53876__2;
return color_field53876;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field53876);
/**
* Creates a date input field.
*/
sablono.core.date_field53879 = (function() {
var date_field53879 = null;
var date_field53879__1 = (function (name__21403__auto__){return date_field53879.cljs$core$IFn$_invoke$arity$2(name__21403__auto__,null);
});
var date_field53879__2 = (function (name__21403__auto__,value__21404__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__21403__auto__,value__21404__auto__);
});
date_field53879 = function(name__21403__auto__,value__21404__auto__){
switch(arguments.length){
case 1:
return date_field53879__1.call(this,name__21403__auto__);
case 2:
return date_field53879__2.call(this,name__21403__auto__,value__21404__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field53879.cljs$core$IFn$_invoke$arity$1 = date_field53879__1;
date_field53879.cljs$core$IFn$_invoke$arity$2 = date_field53879__2;
return date_field53879;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field53879);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field53882 = (function() {
var datetime_field53882 = null;
var datetime_field53882__1 = (function (name__21403__auto__){return datetime_field53882.cljs$core$IFn$_invoke$arity$2(name__21403__auto__,null);
});
var datetime_field53882__2 = (function (name__21403__auto__,value__21404__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__21403__auto__,value__21404__auto__);
});
datetime_field53882 = function(name__21403__auto__,value__21404__auto__){
switch(arguments.length){
case 1:
return datetime_field53882__1.call(this,name__21403__auto__);
case 2:
return datetime_field53882__2.call(this,name__21403__auto__,value__21404__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field53882.cljs$core$IFn$_invoke$arity$1 = datetime_field53882__1;
datetime_field53882.cljs$core$IFn$_invoke$arity$2 = datetime_field53882__2;
return datetime_field53882;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field53882);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field53885 = (function() {
var datetime_local_field53885 = null;
var datetime_local_field53885__1 = (function (name__21403__auto__){return datetime_local_field53885.cljs$core$IFn$_invoke$arity$2(name__21403__auto__,null);
});
var datetime_local_field53885__2 = (function (name__21403__auto__,value__21404__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__21403__auto__,value__21404__auto__);
});
datetime_local_field53885 = function(name__21403__auto__,value__21404__auto__){
switch(arguments.length){
case 1:
return datetime_local_field53885__1.call(this,name__21403__auto__);
case 2:
return datetime_local_field53885__2.call(this,name__21403__auto__,value__21404__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field53885.cljs$core$IFn$_invoke$arity$1 = datetime_local_field53885__1;
datetime_local_field53885.cljs$core$IFn$_invoke$arity$2 = datetime_local_field53885__2;
return datetime_local_field53885;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field53885);
/**
* Creates a email input field.
*/
sablono.core.email_field53888 = (function() {
var email_field53888 = null;
var email_field53888__1 = (function (name__21403__auto__){return email_field53888.cljs$core$IFn$_invoke$arity$2(name__21403__auto__,null);
});
var email_field53888__2 = (function (name__21403__auto__,value__21404__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__21403__auto__,value__21404__auto__);
});
email_field53888 = function(name__21403__auto__,value__21404__auto__){
switch(arguments.length){
case 1:
return email_field53888__1.call(this,name__21403__auto__);
case 2:
return email_field53888__2.call(this,name__21403__auto__,value__21404__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field53888.cljs$core$IFn$_invoke$arity$1 = email_field53888__1;
email_field53888.cljs$core$IFn$_invoke$arity$2 = email_field53888__2;
return email_field53888;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field53888);
/**
* Creates a file input field.
*/
sablono.core.file_field53891 = (function() {
var file_field53891 = null;
var file_field53891__1 = (function (name__21403__auto__){return file_field53891.cljs$core$IFn$_invoke$arity$2(name__21403__auto__,null);
});
var file_field53891__2 = (function (name__21403__auto__,value__21404__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__21403__auto__,value__21404__auto__);
});
file_field53891 = function(name__21403__auto__,value__21404__auto__){
switch(arguments.length){
case 1:
return file_field53891__1.call(this,name__21403__auto__);
case 2:
return file_field53891__2.call(this,name__21403__auto__,value__21404__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field53891.cljs$core$IFn$_invoke$arity$1 = file_field53891__1;
file_field53891.cljs$core$IFn$_invoke$arity$2 = file_field53891__2;
return file_field53891;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field53891);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field53894 = (function() {
var hidden_field53894 = null;
var hidden_field53894__1 = (function (name__21403__auto__){return hidden_field53894.cljs$core$IFn$_invoke$arity$2(name__21403__auto__,null);
});
var hidden_field53894__2 = (function (name__21403__auto__,value__21404__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__21403__auto__,value__21404__auto__);
});
hidden_field53894 = function(name__21403__auto__,value__21404__auto__){
switch(arguments.length){
case 1:
return hidden_field53894__1.call(this,name__21403__auto__);
case 2:
return hidden_field53894__2.call(this,name__21403__auto__,value__21404__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field53894.cljs$core$IFn$_invoke$arity$1 = hidden_field53894__1;
hidden_field53894.cljs$core$IFn$_invoke$arity$2 = hidden_field53894__2;
return hidden_field53894;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field53894);
/**
* Creates a month input field.
*/
sablono.core.month_field53897 = (function() {
var month_field53897 = null;
var month_field53897__1 = (function (name__21403__auto__){return month_field53897.cljs$core$IFn$_invoke$arity$2(name__21403__auto__,null);
});
var month_field53897__2 = (function (name__21403__auto__,value__21404__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__21403__auto__,value__21404__auto__);
});
month_field53897 = function(name__21403__auto__,value__21404__auto__){
switch(arguments.length){
case 1:
return month_field53897__1.call(this,name__21403__auto__);
case 2:
return month_field53897__2.call(this,name__21403__auto__,value__21404__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field53897.cljs$core$IFn$_invoke$arity$1 = month_field53897__1;
month_field53897.cljs$core$IFn$_invoke$arity$2 = month_field53897__2;
return month_field53897;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field53897);
/**
* Creates a number input field.
*/
sablono.core.number_field53900 = (function() {
var number_field53900 = null;
var number_field53900__1 = (function (name__21403__auto__){return number_field53900.cljs$core$IFn$_invoke$arity$2(name__21403__auto__,null);
});
var number_field53900__2 = (function (name__21403__auto__,value__21404__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__21403__auto__,value__21404__auto__);
});
number_field53900 = function(name__21403__auto__,value__21404__auto__){
switch(arguments.length){
case 1:
return number_field53900__1.call(this,name__21403__auto__);
case 2:
return number_field53900__2.call(this,name__21403__auto__,value__21404__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field53900.cljs$core$IFn$_invoke$arity$1 = number_field53900__1;
number_field53900.cljs$core$IFn$_invoke$arity$2 = number_field53900__2;
return number_field53900;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field53900);
/**
* Creates a password input field.
*/
sablono.core.password_field53903 = (function() {
var password_field53903 = null;
var password_field53903__1 = (function (name__21403__auto__){return password_field53903.cljs$core$IFn$_invoke$arity$2(name__21403__auto__,null);
});
var password_field53903__2 = (function (name__21403__auto__,value__21404__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__21403__auto__,value__21404__auto__);
});
password_field53903 = function(name__21403__auto__,value__21404__auto__){
switch(arguments.length){
case 1:
return password_field53903__1.call(this,name__21403__auto__);
case 2:
return password_field53903__2.call(this,name__21403__auto__,value__21404__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field53903.cljs$core$IFn$_invoke$arity$1 = password_field53903__1;
password_field53903.cljs$core$IFn$_invoke$arity$2 = password_field53903__2;
return password_field53903;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field53903);
/**
* Creates a range input field.
*/
sablono.core.range_field53906 = (function() {
var range_field53906 = null;
var range_field53906__1 = (function (name__21403__auto__){return range_field53906.cljs$core$IFn$_invoke$arity$2(name__21403__auto__,null);
});
var range_field53906__2 = (function (name__21403__auto__,value__21404__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__21403__auto__,value__21404__auto__);
});
range_field53906 = function(name__21403__auto__,value__21404__auto__){
switch(arguments.length){
case 1:
return range_field53906__1.call(this,name__21403__auto__);
case 2:
return range_field53906__2.call(this,name__21403__auto__,value__21404__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field53906.cljs$core$IFn$_invoke$arity$1 = range_field53906__1;
range_field53906.cljs$core$IFn$_invoke$arity$2 = range_field53906__2;
return range_field53906;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field53906);
/**
* Creates a search input field.
*/
sablono.core.search_field53909 = (function() {
var search_field53909 = null;
var search_field53909__1 = (function (name__21403__auto__){return search_field53909.cljs$core$IFn$_invoke$arity$2(name__21403__auto__,null);
});
var search_field53909__2 = (function (name__21403__auto__,value__21404__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__21403__auto__,value__21404__auto__);
});
search_field53909 = function(name__21403__auto__,value__21404__auto__){
switch(arguments.length){
case 1:
return search_field53909__1.call(this,name__21403__auto__);
case 2:
return search_field53909__2.call(this,name__21403__auto__,value__21404__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field53909.cljs$core$IFn$_invoke$arity$1 = search_field53909__1;
search_field53909.cljs$core$IFn$_invoke$arity$2 = search_field53909__2;
return search_field53909;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field53909);
/**
* Creates a tel input field.
*/
sablono.core.tel_field53912 = (function() {
var tel_field53912 = null;
var tel_field53912__1 = (function (name__21403__auto__){return tel_field53912.cljs$core$IFn$_invoke$arity$2(name__21403__auto__,null);
});
var tel_field53912__2 = (function (name__21403__auto__,value__21404__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__21403__auto__,value__21404__auto__);
});
tel_field53912 = function(name__21403__auto__,value__21404__auto__){
switch(arguments.length){
case 1:
return tel_field53912__1.call(this,name__21403__auto__);
case 2:
return tel_field53912__2.call(this,name__21403__auto__,value__21404__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field53912.cljs$core$IFn$_invoke$arity$1 = tel_field53912__1;
tel_field53912.cljs$core$IFn$_invoke$arity$2 = tel_field53912__2;
return tel_field53912;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field53912);
/**
* Creates a text input field.
*/
sablono.core.text_field53915 = (function() {
var text_field53915 = null;
var text_field53915__1 = (function (name__21403__auto__){return text_field53915.cljs$core$IFn$_invoke$arity$2(name__21403__auto__,null);
});
var text_field53915__2 = (function (name__21403__auto__,value__21404__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__21403__auto__,value__21404__auto__);
});
text_field53915 = function(name__21403__auto__,value__21404__auto__){
switch(arguments.length){
case 1:
return text_field53915__1.call(this,name__21403__auto__);
case 2:
return text_field53915__2.call(this,name__21403__auto__,value__21404__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field53915.cljs$core$IFn$_invoke$arity$1 = text_field53915__1;
text_field53915.cljs$core$IFn$_invoke$arity$2 = text_field53915__2;
return text_field53915;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field53915);
/**
* Creates a time input field.
*/
sablono.core.time_field53918 = (function() {
var time_field53918 = null;
var time_field53918__1 = (function (name__21403__auto__){return time_field53918.cljs$core$IFn$_invoke$arity$2(name__21403__auto__,null);
});
var time_field53918__2 = (function (name__21403__auto__,value__21404__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__21403__auto__,value__21404__auto__);
});
time_field53918 = function(name__21403__auto__,value__21404__auto__){
switch(arguments.length){
case 1:
return time_field53918__1.call(this,name__21403__auto__);
case 2:
return time_field53918__2.call(this,name__21403__auto__,value__21404__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field53918.cljs$core$IFn$_invoke$arity$1 = time_field53918__1;
time_field53918.cljs$core$IFn$_invoke$arity$2 = time_field53918__2;
return time_field53918;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field53918);
/**
* Creates a url input field.
*/
sablono.core.url_field53921 = (function() {
var url_field53921 = null;
var url_field53921__1 = (function (name__21403__auto__){return url_field53921.cljs$core$IFn$_invoke$arity$2(name__21403__auto__,null);
});
var url_field53921__2 = (function (name__21403__auto__,value__21404__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__21403__auto__,value__21404__auto__);
});
url_field53921 = function(name__21403__auto__,value__21404__auto__){
switch(arguments.length){
case 1:
return url_field53921__1.call(this,name__21403__auto__);
case 2:
return url_field53921__2.call(this,name__21403__auto__,value__21404__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field53921.cljs$core$IFn$_invoke$arity$1 = url_field53921__1;
url_field53921.cljs$core$IFn$_invoke$arity$2 = url_field53921__2;
return url_field53921;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field53921);
/**
* Creates a week input field.
*/
sablono.core.week_field53924 = (function() {
var week_field53924 = null;
var week_field53924__1 = (function (name__21403__auto__){return week_field53924.cljs$core$IFn$_invoke$arity$2(name__21403__auto__,null);
});
var week_field53924__2 = (function (name__21403__auto__,value__21404__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__21403__auto__,value__21404__auto__);
});
week_field53924 = function(name__21403__auto__,value__21404__auto__){
switch(arguments.length){
case 1:
return week_field53924__1.call(this,name__21403__auto__);
case 2:
return week_field53924__2.call(this,name__21403__auto__,value__21404__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field53924.cljs$core$IFn$_invoke$arity$1 = week_field53924__1;
week_field53924.cljs$core$IFn$_invoke$arity$2 = week_field53924__2;
return week_field53924;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field53924);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box53927 = (function() {
var check_box53927 = null;
var check_box53927__1 = (function (name){return check_box53927.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box53927__2 = (function (name,checked_QMARK_){return check_box53927.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box53927__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box53927 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box53927__1.call(this,name);
case 2:
return check_box53927__2.call(this,name,checked_QMARK_);
case 3:
return check_box53927__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box53927.cljs$core$IFn$_invoke$arity$1 = check_box53927__1;
check_box53927.cljs$core$IFn$_invoke$arity$2 = check_box53927__2;
check_box53927.cljs$core$IFn$_invoke$arity$3 = check_box53927__3;
return check_box53927;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box53927);
/**
* Creates a radio button.
*/
sablono.core.radio_button53933 = (function() {
var radio_button53933 = null;
var radio_button53933__1 = (function (group){return radio_button53933.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button53933__2 = (function (group,checked_QMARK_){return radio_button53933.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button53933__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button53933 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button53933__1.call(this,group);
case 2:
return radio_button53933__2.call(this,group,checked_QMARK_);
case 3:
return radio_button53933__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button53933.cljs$core$IFn$_invoke$arity$1 = radio_button53933__1;
radio_button53933.cljs$core$IFn$_invoke$arity$2 = radio_button53933__2;
radio_button53933.cljs$core$IFn$_invoke$arity$3 = radio_button53933__3;
return radio_button53933;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button53933);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options53939 = (function() {
var select_options53939 = null;
var select_options53939__1 = (function (coll){return select_options53939.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options53939__2 = (function (coll,selected){var iter__20686__auto__ = (function iter__53960(s__53961){return (new cljs.core.LazySeq(null,(function (){var s__53961__$1 = s__53961;while(true){
var temp__4126__auto__ = cljs.core.seq(s__53961__$1);if(temp__4126__auto__)
{var s__53961__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__53961__$2))
{var c__20683__auto__ = cljs.core.chunk_first(s__53961__$2);var size__20685__auto__ = cljs.core.count(c__20683__auto__);var b__53963 = cljs.core.chunk_buffer(size__20685__auto__);if((function (){var i__53962 = (0);while(true){
if((i__53962 < size__20685__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20683__auto__,i__53962);cljs.core.chunk_append(b__53963,((cljs.core.sequential_QMARK_(x))?(function (){var vec__53968 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53968,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53968,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53968,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options53939.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__53970 = (i__53962 + (1));
i__53962 = G__53970;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53963),iter__53960(cljs.core.chunk_rest(s__53961__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53963),null);
}
} else
{var x = cljs.core.first(s__53961__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__53969 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53969,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53969,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53969,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options53939.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__53960(cljs.core.rest(s__53961__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20686__auto__(coll);
});
select_options53939 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options53939__1.call(this,coll);
case 2:
return select_options53939__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options53939.cljs$core$IFn$_invoke$arity$1 = select_options53939__1;
select_options53939.cljs$core$IFn$_invoke$arity$2 = select_options53939__2;
return select_options53939;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options53939);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down53971 = (function() {
var drop_down53971 = null;
var drop_down53971__2 = (function (name,options){return drop_down53971.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down53971__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(function (){var G__53977 = options;var G__53978 = selected;return (sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(G__53977,G__53978) : sablono.core.select_options.call(null,G__53977,G__53978));
})()], null);
});
drop_down53971 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down53971__2.call(this,name,options);
case 3:
return drop_down53971__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down53971.cljs$core$IFn$_invoke$arity$2 = drop_down53971__2;
drop_down53971.cljs$core$IFn$_invoke$arity$3 = drop_down53971__3;
return drop_down53971;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down53971);
/**
* Creates a text area element.
*/
sablono.core.text_area53979 = (function() {
var text_area53979 = null;
var text_area53979__1 = (function (name){return text_area53979.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area53979__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area53979 = function(name,value){
switch(arguments.length){
case 1:
return text_area53979__1.call(this,name);
case 2:
return text_area53979__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area53979.cljs$core$IFn$_invoke$arity$1 = text_area53979__1;
text_area53979.cljs$core$IFn$_invoke$arity$2 = text_area53979__2;
return text_area53979;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area53979);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label53982 = (function label53982(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label53982);
/**
* Creates a submit button.
*/
sablono.core.submit_button53983 = (function submit_button53983(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button53983);
/**
* Creates a form reset button.
*/
sablono.core.reset_button53984 = (function reset_button53984(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button53984);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to53985 = (function() { 
var form_to53985__delegate = function (p__53986,body){var vec__53990 = p__53986;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53990,(0),null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53990,(1),null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__53991 = "_method";var G__53992 = method_str;return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2(G__53991,G__53992) : sablono.core.hidden_field.call(null,G__53991,G__53992));
})()], null)),body));
};
var form_to53985 = function (p__53986,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to53985__delegate.call(this,p__53986,body);};
form_to53985.cljs$lang$maxFixedArity = 1;
form_to53985.cljs$lang$applyTo = (function (arglist__53993){
var p__53986 = cljs.core.first(arglist__53993);
var body = cljs.core.rest(arglist__53993);
return form_to53985__delegate(p__53986,body);
});
form_to53985.cljs$core$IFn$_invoke$arity$variadic = form_to53985__delegate;
return form_to53985;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to53985);
//# sourceMappingURL=core.js.map