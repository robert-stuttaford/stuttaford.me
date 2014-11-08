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
var G__53985__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__53984 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53984,(0),null);var body = cljs.core.nthnext(vec__53984,(1));if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__53985 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__53985__delegate.call(this,args);};
G__53985.cljs$lang$maxFixedArity = 0;
G__53985.cljs$lang$applyTo = (function (arglist__53986){
var args = cljs.core.seq(arglist__53986);
return G__53985__delegate(args);
});
G__53985.cljs$core$IFn$_invoke$arity$variadic = G__53985__delegate;
return G__53985;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__20990__auto__ = (function iter__53993(s__53994){return (new cljs.core.LazySeq(null,(function (){var s__53994__$1 = s__53994;while(true){
var temp__4126__auto__ = cljs.core.seq(s__53994__$1);if(temp__4126__auto__)
{var s__53994__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__53994__$2))
{var c__20988__auto__ = cljs.core.chunk_first(s__53994__$2);var size__20989__auto__ = cljs.core.count(c__20988__auto__);var b__53996 = cljs.core.chunk_buffer(size__20989__auto__);if((function (){var i__53995 = (0);while(true){
if((i__53995 < size__20989__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto__,i__53995);cljs.core.chunk_append(b__53996,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__53999 = (i__53995 + (1));
i__53995 = G__53999;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53996),iter__53993(cljs.core.chunk_rest(s__53994__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53996),null);
}
} else
{var args = cljs.core.first(s__53994__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__53993(cljs.core.rest(s__53994__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20990__auto__(arglists);
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
var include_css__delegate = function (styles){var iter__20990__auto__ = (function iter__54006(s__54007){return (new cljs.core.LazySeq(null,(function (){var s__54007__$1 = s__54007;while(true){
var temp__4126__auto__ = cljs.core.seq(s__54007__$1);if(temp__4126__auto__)
{var s__54007__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__54007__$2))
{var c__20988__auto__ = cljs.core.chunk_first(s__54007__$2);var size__20989__auto__ = cljs.core.count(c__20988__auto__);var b__54009 = cljs.core.chunk_buffer(size__20989__auto__);if((function (){var i__54008 = (0);while(true){
if((i__54008 < size__20989__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto__,i__54008);cljs.core.chunk_append(b__54009,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__54012 = (i__54008 + (1));
i__54008 = G__54012;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__54009),iter__54006(cljs.core.chunk_rest(s__54007__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__54009),null);
}
} else
{var style = cljs.core.first(s__54007__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__54006(cljs.core.rest(s__54007__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20990__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__54013){
var styles = cljs.core.seq(arglist__54013);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){var G__54018 = (function (){return goog.dom.getDocument();
})().body;var G__54019 = (function (){var G__54020 = "script";var G__54021 = {"src": src};return goog.dom.createDom(G__54020,G__54021);
})();return goog.dom.appendChild(G__54018,G__54019);
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
sablono.core.link_to54022 = (function() { 
var link_to54022__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to54022 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to54022__delegate.call(this,url,content);};
link_to54022.cljs$lang$maxFixedArity = 1;
link_to54022.cljs$lang$applyTo = (function (arglist__54023){
var url = cljs.core.first(arglist__54023);
var content = cljs.core.rest(arglist__54023);
return link_to54022__delegate(url,content);
});
link_to54022.cljs$core$IFn$_invoke$arity$variadic = link_to54022__delegate;
return link_to54022;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to54022);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to54024 = (function() { 
var mail_to54024__delegate = function (e_mail,p__54025){var vec__54027 = p__54025;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54027,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__19586__auto__ = content;if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to54024 = function (e_mail,var_args){
var p__54025 = null;if (arguments.length > 1) {
  p__54025 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to54024__delegate.call(this,e_mail,p__54025);};
mail_to54024.cljs$lang$maxFixedArity = 1;
mail_to54024.cljs$lang$applyTo = (function (arglist__54028){
var e_mail = cljs.core.first(arglist__54028);
var p__54025 = cljs.core.rest(arglist__54028);
return mail_to54024__delegate(e_mail,p__54025);
});
mail_to54024.cljs$core$IFn$_invoke$arity$variadic = mail_to54024__delegate;
return mail_to54024;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to54024);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list54029 = (function unordered_list54029(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__20990__auto__ = (function iter__54036(s__54037){return (new cljs.core.LazySeq(null,(function (){var s__54037__$1 = s__54037;while(true){
var temp__4126__auto__ = cljs.core.seq(s__54037__$1);if(temp__4126__auto__)
{var s__54037__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__54037__$2))
{var c__20988__auto__ = cljs.core.chunk_first(s__54037__$2);var size__20989__auto__ = cljs.core.count(c__20988__auto__);var b__54039 = cljs.core.chunk_buffer(size__20989__auto__);if((function (){var i__54038 = (0);while(true){
if((i__54038 < size__20989__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto__,i__54038);cljs.core.chunk_append(b__54039,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__54042 = (i__54038 + (1));
i__54038 = G__54042;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__54039),iter__54036(cljs.core.chunk_rest(s__54037__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__54039),null);
}
} else
{var x = cljs.core.first(s__54037__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__54036(cljs.core.rest(s__54037__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20990__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list54029);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list54043 = (function ordered_list54043(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__20990__auto__ = (function iter__54050(s__54051){return (new cljs.core.LazySeq(null,(function (){var s__54051__$1 = s__54051;while(true){
var temp__4126__auto__ = cljs.core.seq(s__54051__$1);if(temp__4126__auto__)
{var s__54051__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__54051__$2))
{var c__20988__auto__ = cljs.core.chunk_first(s__54051__$2);var size__20989__auto__ = cljs.core.count(c__20988__auto__);var b__54053 = cljs.core.chunk_buffer(size__20989__auto__);if((function (){var i__54052 = (0);while(true){
if((i__54052 < size__20989__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto__,i__54052);cljs.core.chunk_append(b__54053,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__54056 = (i__54052 + (1));
i__54052 = G__54056;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__54053),iter__54050(cljs.core.chunk_rest(s__54051__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__54053),null);
}
} else
{var x = cljs.core.first(s__54051__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__54050(cljs.core.rest(s__54051__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20990__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list54043);
/**
* Create an image element.
*/
sablono.core.image54057 = (function() {
var image54057 = null;
var image54057__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image54057__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image54057 = function(src,alt){
switch(arguments.length){
case 1:
return image54057__1.call(this,src);
case 2:
return image54057__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image54057.cljs$core$IFn$_invoke$arity$1 = image54057__1;
image54057.cljs$core$IFn$_invoke$arity$2 = image54057__2;
return image54057;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image54057);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__54058_SHARP_,p2__54059_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__54058_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__54059_SHARP_)+"]");
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__54060_SHARP_,p2__54061_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__54060_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__54061_SHARP_));
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
sablono.core.color_field54062 = (function() {
var color_field54062 = null;
var color_field54062__1 = (function (name__21801__auto__){return color_field54062.cljs$core$IFn$_invoke$arity$2(name__21801__auto__,null);
});
var color_field54062__2 = (function (name__21801__auto__,value__21802__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__21801__auto__,value__21802__auto__);
});
color_field54062 = function(name__21801__auto__,value__21802__auto__){
switch(arguments.length){
case 1:
return color_field54062__1.call(this,name__21801__auto__);
case 2:
return color_field54062__2.call(this,name__21801__auto__,value__21802__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field54062.cljs$core$IFn$_invoke$arity$1 = color_field54062__1;
color_field54062.cljs$core$IFn$_invoke$arity$2 = color_field54062__2;
return color_field54062;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field54062);
/**
* Creates a date input field.
*/
sablono.core.date_field54065 = (function() {
var date_field54065 = null;
var date_field54065__1 = (function (name__21801__auto__){return date_field54065.cljs$core$IFn$_invoke$arity$2(name__21801__auto__,null);
});
var date_field54065__2 = (function (name__21801__auto__,value__21802__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__21801__auto__,value__21802__auto__);
});
date_field54065 = function(name__21801__auto__,value__21802__auto__){
switch(arguments.length){
case 1:
return date_field54065__1.call(this,name__21801__auto__);
case 2:
return date_field54065__2.call(this,name__21801__auto__,value__21802__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field54065.cljs$core$IFn$_invoke$arity$1 = date_field54065__1;
date_field54065.cljs$core$IFn$_invoke$arity$2 = date_field54065__2;
return date_field54065;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field54065);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field54068 = (function() {
var datetime_field54068 = null;
var datetime_field54068__1 = (function (name__21801__auto__){return datetime_field54068.cljs$core$IFn$_invoke$arity$2(name__21801__auto__,null);
});
var datetime_field54068__2 = (function (name__21801__auto__,value__21802__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__21801__auto__,value__21802__auto__);
});
datetime_field54068 = function(name__21801__auto__,value__21802__auto__){
switch(arguments.length){
case 1:
return datetime_field54068__1.call(this,name__21801__auto__);
case 2:
return datetime_field54068__2.call(this,name__21801__auto__,value__21802__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field54068.cljs$core$IFn$_invoke$arity$1 = datetime_field54068__1;
datetime_field54068.cljs$core$IFn$_invoke$arity$2 = datetime_field54068__2;
return datetime_field54068;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field54068);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field54071 = (function() {
var datetime_local_field54071 = null;
var datetime_local_field54071__1 = (function (name__21801__auto__){return datetime_local_field54071.cljs$core$IFn$_invoke$arity$2(name__21801__auto__,null);
});
var datetime_local_field54071__2 = (function (name__21801__auto__,value__21802__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__21801__auto__,value__21802__auto__);
});
datetime_local_field54071 = function(name__21801__auto__,value__21802__auto__){
switch(arguments.length){
case 1:
return datetime_local_field54071__1.call(this,name__21801__auto__);
case 2:
return datetime_local_field54071__2.call(this,name__21801__auto__,value__21802__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field54071.cljs$core$IFn$_invoke$arity$1 = datetime_local_field54071__1;
datetime_local_field54071.cljs$core$IFn$_invoke$arity$2 = datetime_local_field54071__2;
return datetime_local_field54071;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field54071);
/**
* Creates a email input field.
*/
sablono.core.email_field54074 = (function() {
var email_field54074 = null;
var email_field54074__1 = (function (name__21801__auto__){return email_field54074.cljs$core$IFn$_invoke$arity$2(name__21801__auto__,null);
});
var email_field54074__2 = (function (name__21801__auto__,value__21802__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__21801__auto__,value__21802__auto__);
});
email_field54074 = function(name__21801__auto__,value__21802__auto__){
switch(arguments.length){
case 1:
return email_field54074__1.call(this,name__21801__auto__);
case 2:
return email_field54074__2.call(this,name__21801__auto__,value__21802__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field54074.cljs$core$IFn$_invoke$arity$1 = email_field54074__1;
email_field54074.cljs$core$IFn$_invoke$arity$2 = email_field54074__2;
return email_field54074;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field54074);
/**
* Creates a file input field.
*/
sablono.core.file_field54077 = (function() {
var file_field54077 = null;
var file_field54077__1 = (function (name__21801__auto__){return file_field54077.cljs$core$IFn$_invoke$arity$2(name__21801__auto__,null);
});
var file_field54077__2 = (function (name__21801__auto__,value__21802__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__21801__auto__,value__21802__auto__);
});
file_field54077 = function(name__21801__auto__,value__21802__auto__){
switch(arguments.length){
case 1:
return file_field54077__1.call(this,name__21801__auto__);
case 2:
return file_field54077__2.call(this,name__21801__auto__,value__21802__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field54077.cljs$core$IFn$_invoke$arity$1 = file_field54077__1;
file_field54077.cljs$core$IFn$_invoke$arity$2 = file_field54077__2;
return file_field54077;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field54077);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field54080 = (function() {
var hidden_field54080 = null;
var hidden_field54080__1 = (function (name__21801__auto__){return hidden_field54080.cljs$core$IFn$_invoke$arity$2(name__21801__auto__,null);
});
var hidden_field54080__2 = (function (name__21801__auto__,value__21802__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__21801__auto__,value__21802__auto__);
});
hidden_field54080 = function(name__21801__auto__,value__21802__auto__){
switch(arguments.length){
case 1:
return hidden_field54080__1.call(this,name__21801__auto__);
case 2:
return hidden_field54080__2.call(this,name__21801__auto__,value__21802__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field54080.cljs$core$IFn$_invoke$arity$1 = hidden_field54080__1;
hidden_field54080.cljs$core$IFn$_invoke$arity$2 = hidden_field54080__2;
return hidden_field54080;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field54080);
/**
* Creates a month input field.
*/
sablono.core.month_field54083 = (function() {
var month_field54083 = null;
var month_field54083__1 = (function (name__21801__auto__){return month_field54083.cljs$core$IFn$_invoke$arity$2(name__21801__auto__,null);
});
var month_field54083__2 = (function (name__21801__auto__,value__21802__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__21801__auto__,value__21802__auto__);
});
month_field54083 = function(name__21801__auto__,value__21802__auto__){
switch(arguments.length){
case 1:
return month_field54083__1.call(this,name__21801__auto__);
case 2:
return month_field54083__2.call(this,name__21801__auto__,value__21802__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field54083.cljs$core$IFn$_invoke$arity$1 = month_field54083__1;
month_field54083.cljs$core$IFn$_invoke$arity$2 = month_field54083__2;
return month_field54083;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field54083);
/**
* Creates a number input field.
*/
sablono.core.number_field54086 = (function() {
var number_field54086 = null;
var number_field54086__1 = (function (name__21801__auto__){return number_field54086.cljs$core$IFn$_invoke$arity$2(name__21801__auto__,null);
});
var number_field54086__2 = (function (name__21801__auto__,value__21802__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__21801__auto__,value__21802__auto__);
});
number_field54086 = function(name__21801__auto__,value__21802__auto__){
switch(arguments.length){
case 1:
return number_field54086__1.call(this,name__21801__auto__);
case 2:
return number_field54086__2.call(this,name__21801__auto__,value__21802__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field54086.cljs$core$IFn$_invoke$arity$1 = number_field54086__1;
number_field54086.cljs$core$IFn$_invoke$arity$2 = number_field54086__2;
return number_field54086;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field54086);
/**
* Creates a password input field.
*/
sablono.core.password_field54089 = (function() {
var password_field54089 = null;
var password_field54089__1 = (function (name__21801__auto__){return password_field54089.cljs$core$IFn$_invoke$arity$2(name__21801__auto__,null);
});
var password_field54089__2 = (function (name__21801__auto__,value__21802__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__21801__auto__,value__21802__auto__);
});
password_field54089 = function(name__21801__auto__,value__21802__auto__){
switch(arguments.length){
case 1:
return password_field54089__1.call(this,name__21801__auto__);
case 2:
return password_field54089__2.call(this,name__21801__auto__,value__21802__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field54089.cljs$core$IFn$_invoke$arity$1 = password_field54089__1;
password_field54089.cljs$core$IFn$_invoke$arity$2 = password_field54089__2;
return password_field54089;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field54089);
/**
* Creates a range input field.
*/
sablono.core.range_field54092 = (function() {
var range_field54092 = null;
var range_field54092__1 = (function (name__21801__auto__){return range_field54092.cljs$core$IFn$_invoke$arity$2(name__21801__auto__,null);
});
var range_field54092__2 = (function (name__21801__auto__,value__21802__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__21801__auto__,value__21802__auto__);
});
range_field54092 = function(name__21801__auto__,value__21802__auto__){
switch(arguments.length){
case 1:
return range_field54092__1.call(this,name__21801__auto__);
case 2:
return range_field54092__2.call(this,name__21801__auto__,value__21802__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field54092.cljs$core$IFn$_invoke$arity$1 = range_field54092__1;
range_field54092.cljs$core$IFn$_invoke$arity$2 = range_field54092__2;
return range_field54092;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field54092);
/**
* Creates a search input field.
*/
sablono.core.search_field54095 = (function() {
var search_field54095 = null;
var search_field54095__1 = (function (name__21801__auto__){return search_field54095.cljs$core$IFn$_invoke$arity$2(name__21801__auto__,null);
});
var search_field54095__2 = (function (name__21801__auto__,value__21802__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__21801__auto__,value__21802__auto__);
});
search_field54095 = function(name__21801__auto__,value__21802__auto__){
switch(arguments.length){
case 1:
return search_field54095__1.call(this,name__21801__auto__);
case 2:
return search_field54095__2.call(this,name__21801__auto__,value__21802__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field54095.cljs$core$IFn$_invoke$arity$1 = search_field54095__1;
search_field54095.cljs$core$IFn$_invoke$arity$2 = search_field54095__2;
return search_field54095;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field54095);
/**
* Creates a tel input field.
*/
sablono.core.tel_field54098 = (function() {
var tel_field54098 = null;
var tel_field54098__1 = (function (name__21801__auto__){return tel_field54098.cljs$core$IFn$_invoke$arity$2(name__21801__auto__,null);
});
var tel_field54098__2 = (function (name__21801__auto__,value__21802__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__21801__auto__,value__21802__auto__);
});
tel_field54098 = function(name__21801__auto__,value__21802__auto__){
switch(arguments.length){
case 1:
return tel_field54098__1.call(this,name__21801__auto__);
case 2:
return tel_field54098__2.call(this,name__21801__auto__,value__21802__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field54098.cljs$core$IFn$_invoke$arity$1 = tel_field54098__1;
tel_field54098.cljs$core$IFn$_invoke$arity$2 = tel_field54098__2;
return tel_field54098;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field54098);
/**
* Creates a text input field.
*/
sablono.core.text_field54101 = (function() {
var text_field54101 = null;
var text_field54101__1 = (function (name__21801__auto__){return text_field54101.cljs$core$IFn$_invoke$arity$2(name__21801__auto__,null);
});
var text_field54101__2 = (function (name__21801__auto__,value__21802__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__21801__auto__,value__21802__auto__);
});
text_field54101 = function(name__21801__auto__,value__21802__auto__){
switch(arguments.length){
case 1:
return text_field54101__1.call(this,name__21801__auto__);
case 2:
return text_field54101__2.call(this,name__21801__auto__,value__21802__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field54101.cljs$core$IFn$_invoke$arity$1 = text_field54101__1;
text_field54101.cljs$core$IFn$_invoke$arity$2 = text_field54101__2;
return text_field54101;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field54101);
/**
* Creates a time input field.
*/
sablono.core.time_field54104 = (function() {
var time_field54104 = null;
var time_field54104__1 = (function (name__21801__auto__){return time_field54104.cljs$core$IFn$_invoke$arity$2(name__21801__auto__,null);
});
var time_field54104__2 = (function (name__21801__auto__,value__21802__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__21801__auto__,value__21802__auto__);
});
time_field54104 = function(name__21801__auto__,value__21802__auto__){
switch(arguments.length){
case 1:
return time_field54104__1.call(this,name__21801__auto__);
case 2:
return time_field54104__2.call(this,name__21801__auto__,value__21802__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field54104.cljs$core$IFn$_invoke$arity$1 = time_field54104__1;
time_field54104.cljs$core$IFn$_invoke$arity$2 = time_field54104__2;
return time_field54104;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field54104);
/**
* Creates a url input field.
*/
sablono.core.url_field54107 = (function() {
var url_field54107 = null;
var url_field54107__1 = (function (name__21801__auto__){return url_field54107.cljs$core$IFn$_invoke$arity$2(name__21801__auto__,null);
});
var url_field54107__2 = (function (name__21801__auto__,value__21802__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__21801__auto__,value__21802__auto__);
});
url_field54107 = function(name__21801__auto__,value__21802__auto__){
switch(arguments.length){
case 1:
return url_field54107__1.call(this,name__21801__auto__);
case 2:
return url_field54107__2.call(this,name__21801__auto__,value__21802__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field54107.cljs$core$IFn$_invoke$arity$1 = url_field54107__1;
url_field54107.cljs$core$IFn$_invoke$arity$2 = url_field54107__2;
return url_field54107;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field54107);
/**
* Creates a week input field.
*/
sablono.core.week_field54110 = (function() {
var week_field54110 = null;
var week_field54110__1 = (function (name__21801__auto__){return week_field54110.cljs$core$IFn$_invoke$arity$2(name__21801__auto__,null);
});
var week_field54110__2 = (function (name__21801__auto__,value__21802__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__21801__auto__,value__21802__auto__);
});
week_field54110 = function(name__21801__auto__,value__21802__auto__){
switch(arguments.length){
case 1:
return week_field54110__1.call(this,name__21801__auto__);
case 2:
return week_field54110__2.call(this,name__21801__auto__,value__21802__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field54110.cljs$core$IFn$_invoke$arity$1 = week_field54110__1;
week_field54110.cljs$core$IFn$_invoke$arity$2 = week_field54110__2;
return week_field54110;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field54110);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box54113 = (function() {
var check_box54113 = null;
var check_box54113__1 = (function (name){return check_box54113.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box54113__2 = (function (name,checked_QMARK_){return check_box54113.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box54113__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box54113 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box54113__1.call(this,name);
case 2:
return check_box54113__2.call(this,name,checked_QMARK_);
case 3:
return check_box54113__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box54113.cljs$core$IFn$_invoke$arity$1 = check_box54113__1;
check_box54113.cljs$core$IFn$_invoke$arity$2 = check_box54113__2;
check_box54113.cljs$core$IFn$_invoke$arity$3 = check_box54113__3;
return check_box54113;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box54113);
/**
* Creates a radio button.
*/
sablono.core.radio_button54119 = (function() {
var radio_button54119 = null;
var radio_button54119__1 = (function (group){return radio_button54119.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button54119__2 = (function (group,checked_QMARK_){return radio_button54119.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button54119__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button54119 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button54119__1.call(this,group);
case 2:
return radio_button54119__2.call(this,group,checked_QMARK_);
case 3:
return radio_button54119__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button54119.cljs$core$IFn$_invoke$arity$1 = radio_button54119__1;
radio_button54119.cljs$core$IFn$_invoke$arity$2 = radio_button54119__2;
radio_button54119.cljs$core$IFn$_invoke$arity$3 = radio_button54119__3;
return radio_button54119;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button54119);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options54125 = (function() {
var select_options54125 = null;
var select_options54125__1 = (function (coll){return select_options54125.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options54125__2 = (function (coll,selected){var iter__20990__auto__ = (function iter__54146(s__54147){return (new cljs.core.LazySeq(null,(function (){var s__54147__$1 = s__54147;while(true){
var temp__4126__auto__ = cljs.core.seq(s__54147__$1);if(temp__4126__auto__)
{var s__54147__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__54147__$2))
{var c__20988__auto__ = cljs.core.chunk_first(s__54147__$2);var size__20989__auto__ = cljs.core.count(c__20988__auto__);var b__54149 = cljs.core.chunk_buffer(size__20989__auto__);if((function (){var i__54148 = (0);while(true){
if((i__54148 < size__20989__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto__,i__54148);cljs.core.chunk_append(b__54149,((cljs.core.sequential_QMARK_(x))?(function (){var vec__54154 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54154,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54154,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54154,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options54125.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__54156 = (i__54148 + (1));
i__54148 = G__54156;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__54149),iter__54146(cljs.core.chunk_rest(s__54147__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__54149),null);
}
} else
{var x = cljs.core.first(s__54147__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__54155 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54155,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54155,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54155,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options54125.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__54146(cljs.core.rest(s__54147__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20990__auto__(coll);
});
select_options54125 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options54125__1.call(this,coll);
case 2:
return select_options54125__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options54125.cljs$core$IFn$_invoke$arity$1 = select_options54125__1;
select_options54125.cljs$core$IFn$_invoke$arity$2 = select_options54125__2;
return select_options54125;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options54125);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down54157 = (function() {
var drop_down54157 = null;
var drop_down54157__2 = (function (name,options){return drop_down54157.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down54157__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(function (){var G__54163 = options;var G__54164 = selected;return (sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(G__54163,G__54164) : sablono.core.select_options.call(null,G__54163,G__54164));
})()], null);
});
drop_down54157 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down54157__2.call(this,name,options);
case 3:
return drop_down54157__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down54157.cljs$core$IFn$_invoke$arity$2 = drop_down54157__2;
drop_down54157.cljs$core$IFn$_invoke$arity$3 = drop_down54157__3;
return drop_down54157;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down54157);
/**
* Creates a text area element.
*/
sablono.core.text_area54165 = (function() {
var text_area54165 = null;
var text_area54165__1 = (function (name){return text_area54165.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area54165__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area54165 = function(name,value){
switch(arguments.length){
case 1:
return text_area54165__1.call(this,name);
case 2:
return text_area54165__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area54165.cljs$core$IFn$_invoke$arity$1 = text_area54165__1;
text_area54165.cljs$core$IFn$_invoke$arity$2 = text_area54165__2;
return text_area54165;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area54165);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label54168 = (function label54168(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label54168);
/**
* Creates a submit button.
*/
sablono.core.submit_button54169 = (function submit_button54169(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button54169);
/**
* Creates a form reset button.
*/
sablono.core.reset_button54170 = (function reset_button54170(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button54170);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to54171 = (function() { 
var form_to54171__delegate = function (p__54172,body){var vec__54176 = p__54172;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54176,(0),null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54176,(1),null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__54177 = "_method";var G__54178 = method_str;return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2(G__54177,G__54178) : sablono.core.hidden_field.call(null,G__54177,G__54178));
})()], null)),body));
};
var form_to54171 = function (p__54172,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to54171__delegate.call(this,p__54172,body);};
form_to54171.cljs$lang$maxFixedArity = 1;
form_to54171.cljs$lang$applyTo = (function (arglist__54179){
var p__54172 = cljs.core.first(arglist__54179);
var body = cljs.core.rest(arglist__54179);
return form_to54171__delegate(p__54172,body);
});
form_to54171.cljs$core$IFn$_invoke$arity$variadic = form_to54171__delegate;
return form_to54171;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to54171);
//# sourceMappingURL=core.js.map