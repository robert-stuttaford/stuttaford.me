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
var G__72957__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__72956 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72956,(0),null);var body = cljs.core.nthnext(vec__72956,(1));if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__72957 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__72957__delegate.call(this,args);};
G__72957.cljs$lang$maxFixedArity = 0;
G__72957.cljs$lang$applyTo = (function (arglist__72958){
var args = cljs.core.seq(arglist__72958);
return G__72957__delegate(args);
});
G__72957.cljs$core$IFn$_invoke$arity$variadic = G__72957__delegate;
return G__72957;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__21069__auto__ = (function iter__72965(s__72966){return (new cljs.core.LazySeq(null,(function (){var s__72966__$1 = s__72966;while(true){
var temp__4126__auto__ = cljs.core.seq(s__72966__$1);if(temp__4126__auto__)
{var s__72966__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__72966__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__72966__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__72968 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__72967 = (0);while(true){
if((i__72967 < size__21068__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__72967);cljs.core.chunk_append(b__72968,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__72971 = (i__72967 + (1));
i__72967 = G__72971;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__72968),iter__72965(cljs.core.chunk_rest(s__72966__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__72968),null);
}
} else
{var args = cljs.core.first(s__72966__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__72965(cljs.core.rest(s__72966__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__21069__auto__(arglists);
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
var include_css__delegate = function (styles){var iter__21069__auto__ = (function iter__72978(s__72979){return (new cljs.core.LazySeq(null,(function (){var s__72979__$1 = s__72979;while(true){
var temp__4126__auto__ = cljs.core.seq(s__72979__$1);if(temp__4126__auto__)
{var s__72979__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__72979__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__72979__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__72981 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__72980 = (0);while(true){
if((i__72980 < size__21068__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__72980);cljs.core.chunk_append(b__72981,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__72984 = (i__72980 + (1));
i__72980 = G__72984;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__72981),iter__72978(cljs.core.chunk_rest(s__72979__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__72981),null);
}
} else
{var style = cljs.core.first(s__72979__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__72978(cljs.core.rest(s__72979__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__21069__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__72985){
var styles = cljs.core.seq(arglist__72985);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){var G__72990 = (function (){return goog.dom.getDocument();
})().body;var G__72991 = (function (){var G__72992 = "script";var G__72993 = {"src": src};return goog.dom.createDom(G__72992,G__72993);
})();return goog.dom.appendChild(G__72990,G__72991);
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
sablono.core.link_to72994 = (function() { 
var link_to72994__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to72994 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to72994__delegate.call(this,url,content);};
link_to72994.cljs$lang$maxFixedArity = 1;
link_to72994.cljs$lang$applyTo = (function (arglist__72995){
var url = cljs.core.first(arglist__72995);
var content = cljs.core.rest(arglist__72995);
return link_to72994__delegate(url,content);
});
link_to72994.cljs$core$IFn$_invoke$arity$variadic = link_to72994__delegate;
return link_to72994;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to72994);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to72996 = (function() { 
var mail_to72996__delegate = function (e_mail,p__72997){var vec__72999 = p__72997;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72999,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__19711__auto__ = content;if(cljs.core.truth_(or__19711__auto__))
{return or__19711__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to72996 = function (e_mail,var_args){
var p__72997 = null;if (arguments.length > 1) {
  p__72997 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to72996__delegate.call(this,e_mail,p__72997);};
mail_to72996.cljs$lang$maxFixedArity = 1;
mail_to72996.cljs$lang$applyTo = (function (arglist__73000){
var e_mail = cljs.core.first(arglist__73000);
var p__72997 = cljs.core.rest(arglist__73000);
return mail_to72996__delegate(e_mail,p__72997);
});
mail_to72996.cljs$core$IFn$_invoke$arity$variadic = mail_to72996__delegate;
return mail_to72996;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to72996);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list73001 = (function unordered_list73001(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__21069__auto__ = (function iter__73008(s__73009){return (new cljs.core.LazySeq(null,(function (){var s__73009__$1 = s__73009;while(true){
var temp__4126__auto__ = cljs.core.seq(s__73009__$1);if(temp__4126__auto__)
{var s__73009__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__73009__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__73009__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__73011 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__73010 = (0);while(true){
if((i__73010 < size__21068__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__73010);cljs.core.chunk_append(b__73011,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__73014 = (i__73010 + (1));
i__73010 = G__73014;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__73011),iter__73008(cljs.core.chunk_rest(s__73009__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__73011),null);
}
} else
{var x = cljs.core.first(s__73009__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__73008(cljs.core.rest(s__73009__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__21069__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list73001);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list73015 = (function ordered_list73015(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__21069__auto__ = (function iter__73022(s__73023){return (new cljs.core.LazySeq(null,(function (){var s__73023__$1 = s__73023;while(true){
var temp__4126__auto__ = cljs.core.seq(s__73023__$1);if(temp__4126__auto__)
{var s__73023__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__73023__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__73023__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__73025 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__73024 = (0);while(true){
if((i__73024 < size__21068__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__73024);cljs.core.chunk_append(b__73025,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__73028 = (i__73024 + (1));
i__73024 = G__73028;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__73025),iter__73022(cljs.core.chunk_rest(s__73023__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__73025),null);
}
} else
{var x = cljs.core.first(s__73023__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__73022(cljs.core.rest(s__73023__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__21069__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list73015);
/**
* Create an image element.
*/
sablono.core.image73029 = (function() {
var image73029 = null;
var image73029__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image73029__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image73029 = function(src,alt){
switch(arguments.length){
case 1:
return image73029__1.call(this,src);
case 2:
return image73029__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image73029.cljs$core$IFn$_invoke$arity$1 = image73029__1;
image73029.cljs$core$IFn$_invoke$arity$2 = image73029__2;
return image73029;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image73029);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__73030_SHARP_,p2__73031_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__73030_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__73031_SHARP_)+"]");
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__73032_SHARP_,p2__73033_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__73032_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__73033_SHARP_));
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
sablono.core.color_field73034 = (function() {
var color_field73034 = null;
var color_field73034__1 = (function (name__22101__auto__){return color_field73034.cljs$core$IFn$_invoke$arity$2(name__22101__auto__,null);
});
var color_field73034__2 = (function (name__22101__auto__,value__22102__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__22101__auto__,value__22102__auto__);
});
color_field73034 = function(name__22101__auto__,value__22102__auto__){
switch(arguments.length){
case 1:
return color_field73034__1.call(this,name__22101__auto__);
case 2:
return color_field73034__2.call(this,name__22101__auto__,value__22102__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field73034.cljs$core$IFn$_invoke$arity$1 = color_field73034__1;
color_field73034.cljs$core$IFn$_invoke$arity$2 = color_field73034__2;
return color_field73034;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field73034);
/**
* Creates a date input field.
*/
sablono.core.date_field73037 = (function() {
var date_field73037 = null;
var date_field73037__1 = (function (name__22101__auto__){return date_field73037.cljs$core$IFn$_invoke$arity$2(name__22101__auto__,null);
});
var date_field73037__2 = (function (name__22101__auto__,value__22102__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__22101__auto__,value__22102__auto__);
});
date_field73037 = function(name__22101__auto__,value__22102__auto__){
switch(arguments.length){
case 1:
return date_field73037__1.call(this,name__22101__auto__);
case 2:
return date_field73037__2.call(this,name__22101__auto__,value__22102__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field73037.cljs$core$IFn$_invoke$arity$1 = date_field73037__1;
date_field73037.cljs$core$IFn$_invoke$arity$2 = date_field73037__2;
return date_field73037;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field73037);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field73040 = (function() {
var datetime_field73040 = null;
var datetime_field73040__1 = (function (name__22101__auto__){return datetime_field73040.cljs$core$IFn$_invoke$arity$2(name__22101__auto__,null);
});
var datetime_field73040__2 = (function (name__22101__auto__,value__22102__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__22101__auto__,value__22102__auto__);
});
datetime_field73040 = function(name__22101__auto__,value__22102__auto__){
switch(arguments.length){
case 1:
return datetime_field73040__1.call(this,name__22101__auto__);
case 2:
return datetime_field73040__2.call(this,name__22101__auto__,value__22102__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field73040.cljs$core$IFn$_invoke$arity$1 = datetime_field73040__1;
datetime_field73040.cljs$core$IFn$_invoke$arity$2 = datetime_field73040__2;
return datetime_field73040;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field73040);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field73043 = (function() {
var datetime_local_field73043 = null;
var datetime_local_field73043__1 = (function (name__22101__auto__){return datetime_local_field73043.cljs$core$IFn$_invoke$arity$2(name__22101__auto__,null);
});
var datetime_local_field73043__2 = (function (name__22101__auto__,value__22102__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__22101__auto__,value__22102__auto__);
});
datetime_local_field73043 = function(name__22101__auto__,value__22102__auto__){
switch(arguments.length){
case 1:
return datetime_local_field73043__1.call(this,name__22101__auto__);
case 2:
return datetime_local_field73043__2.call(this,name__22101__auto__,value__22102__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field73043.cljs$core$IFn$_invoke$arity$1 = datetime_local_field73043__1;
datetime_local_field73043.cljs$core$IFn$_invoke$arity$2 = datetime_local_field73043__2;
return datetime_local_field73043;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field73043);
/**
* Creates a email input field.
*/
sablono.core.email_field73046 = (function() {
var email_field73046 = null;
var email_field73046__1 = (function (name__22101__auto__){return email_field73046.cljs$core$IFn$_invoke$arity$2(name__22101__auto__,null);
});
var email_field73046__2 = (function (name__22101__auto__,value__22102__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__22101__auto__,value__22102__auto__);
});
email_field73046 = function(name__22101__auto__,value__22102__auto__){
switch(arguments.length){
case 1:
return email_field73046__1.call(this,name__22101__auto__);
case 2:
return email_field73046__2.call(this,name__22101__auto__,value__22102__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field73046.cljs$core$IFn$_invoke$arity$1 = email_field73046__1;
email_field73046.cljs$core$IFn$_invoke$arity$2 = email_field73046__2;
return email_field73046;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field73046);
/**
* Creates a file input field.
*/
sablono.core.file_field73049 = (function() {
var file_field73049 = null;
var file_field73049__1 = (function (name__22101__auto__){return file_field73049.cljs$core$IFn$_invoke$arity$2(name__22101__auto__,null);
});
var file_field73049__2 = (function (name__22101__auto__,value__22102__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__22101__auto__,value__22102__auto__);
});
file_field73049 = function(name__22101__auto__,value__22102__auto__){
switch(arguments.length){
case 1:
return file_field73049__1.call(this,name__22101__auto__);
case 2:
return file_field73049__2.call(this,name__22101__auto__,value__22102__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field73049.cljs$core$IFn$_invoke$arity$1 = file_field73049__1;
file_field73049.cljs$core$IFn$_invoke$arity$2 = file_field73049__2;
return file_field73049;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field73049);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field73052 = (function() {
var hidden_field73052 = null;
var hidden_field73052__1 = (function (name__22101__auto__){return hidden_field73052.cljs$core$IFn$_invoke$arity$2(name__22101__auto__,null);
});
var hidden_field73052__2 = (function (name__22101__auto__,value__22102__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__22101__auto__,value__22102__auto__);
});
hidden_field73052 = function(name__22101__auto__,value__22102__auto__){
switch(arguments.length){
case 1:
return hidden_field73052__1.call(this,name__22101__auto__);
case 2:
return hidden_field73052__2.call(this,name__22101__auto__,value__22102__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field73052.cljs$core$IFn$_invoke$arity$1 = hidden_field73052__1;
hidden_field73052.cljs$core$IFn$_invoke$arity$2 = hidden_field73052__2;
return hidden_field73052;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field73052);
/**
* Creates a month input field.
*/
sablono.core.month_field73055 = (function() {
var month_field73055 = null;
var month_field73055__1 = (function (name__22101__auto__){return month_field73055.cljs$core$IFn$_invoke$arity$2(name__22101__auto__,null);
});
var month_field73055__2 = (function (name__22101__auto__,value__22102__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__22101__auto__,value__22102__auto__);
});
month_field73055 = function(name__22101__auto__,value__22102__auto__){
switch(arguments.length){
case 1:
return month_field73055__1.call(this,name__22101__auto__);
case 2:
return month_field73055__2.call(this,name__22101__auto__,value__22102__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field73055.cljs$core$IFn$_invoke$arity$1 = month_field73055__1;
month_field73055.cljs$core$IFn$_invoke$arity$2 = month_field73055__2;
return month_field73055;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field73055);
/**
* Creates a number input field.
*/
sablono.core.number_field73058 = (function() {
var number_field73058 = null;
var number_field73058__1 = (function (name__22101__auto__){return number_field73058.cljs$core$IFn$_invoke$arity$2(name__22101__auto__,null);
});
var number_field73058__2 = (function (name__22101__auto__,value__22102__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__22101__auto__,value__22102__auto__);
});
number_field73058 = function(name__22101__auto__,value__22102__auto__){
switch(arguments.length){
case 1:
return number_field73058__1.call(this,name__22101__auto__);
case 2:
return number_field73058__2.call(this,name__22101__auto__,value__22102__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field73058.cljs$core$IFn$_invoke$arity$1 = number_field73058__1;
number_field73058.cljs$core$IFn$_invoke$arity$2 = number_field73058__2;
return number_field73058;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field73058);
/**
* Creates a password input field.
*/
sablono.core.password_field73061 = (function() {
var password_field73061 = null;
var password_field73061__1 = (function (name__22101__auto__){return password_field73061.cljs$core$IFn$_invoke$arity$2(name__22101__auto__,null);
});
var password_field73061__2 = (function (name__22101__auto__,value__22102__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__22101__auto__,value__22102__auto__);
});
password_field73061 = function(name__22101__auto__,value__22102__auto__){
switch(arguments.length){
case 1:
return password_field73061__1.call(this,name__22101__auto__);
case 2:
return password_field73061__2.call(this,name__22101__auto__,value__22102__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field73061.cljs$core$IFn$_invoke$arity$1 = password_field73061__1;
password_field73061.cljs$core$IFn$_invoke$arity$2 = password_field73061__2;
return password_field73061;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field73061);
/**
* Creates a range input field.
*/
sablono.core.range_field73064 = (function() {
var range_field73064 = null;
var range_field73064__1 = (function (name__22101__auto__){return range_field73064.cljs$core$IFn$_invoke$arity$2(name__22101__auto__,null);
});
var range_field73064__2 = (function (name__22101__auto__,value__22102__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__22101__auto__,value__22102__auto__);
});
range_field73064 = function(name__22101__auto__,value__22102__auto__){
switch(arguments.length){
case 1:
return range_field73064__1.call(this,name__22101__auto__);
case 2:
return range_field73064__2.call(this,name__22101__auto__,value__22102__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field73064.cljs$core$IFn$_invoke$arity$1 = range_field73064__1;
range_field73064.cljs$core$IFn$_invoke$arity$2 = range_field73064__2;
return range_field73064;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field73064);
/**
* Creates a search input field.
*/
sablono.core.search_field73067 = (function() {
var search_field73067 = null;
var search_field73067__1 = (function (name__22101__auto__){return search_field73067.cljs$core$IFn$_invoke$arity$2(name__22101__auto__,null);
});
var search_field73067__2 = (function (name__22101__auto__,value__22102__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__22101__auto__,value__22102__auto__);
});
search_field73067 = function(name__22101__auto__,value__22102__auto__){
switch(arguments.length){
case 1:
return search_field73067__1.call(this,name__22101__auto__);
case 2:
return search_field73067__2.call(this,name__22101__auto__,value__22102__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field73067.cljs$core$IFn$_invoke$arity$1 = search_field73067__1;
search_field73067.cljs$core$IFn$_invoke$arity$2 = search_field73067__2;
return search_field73067;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field73067);
/**
* Creates a tel input field.
*/
sablono.core.tel_field73070 = (function() {
var tel_field73070 = null;
var tel_field73070__1 = (function (name__22101__auto__){return tel_field73070.cljs$core$IFn$_invoke$arity$2(name__22101__auto__,null);
});
var tel_field73070__2 = (function (name__22101__auto__,value__22102__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__22101__auto__,value__22102__auto__);
});
tel_field73070 = function(name__22101__auto__,value__22102__auto__){
switch(arguments.length){
case 1:
return tel_field73070__1.call(this,name__22101__auto__);
case 2:
return tel_field73070__2.call(this,name__22101__auto__,value__22102__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field73070.cljs$core$IFn$_invoke$arity$1 = tel_field73070__1;
tel_field73070.cljs$core$IFn$_invoke$arity$2 = tel_field73070__2;
return tel_field73070;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field73070);
/**
* Creates a text input field.
*/
sablono.core.text_field73073 = (function() {
var text_field73073 = null;
var text_field73073__1 = (function (name__22101__auto__){return text_field73073.cljs$core$IFn$_invoke$arity$2(name__22101__auto__,null);
});
var text_field73073__2 = (function (name__22101__auto__,value__22102__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__22101__auto__,value__22102__auto__);
});
text_field73073 = function(name__22101__auto__,value__22102__auto__){
switch(arguments.length){
case 1:
return text_field73073__1.call(this,name__22101__auto__);
case 2:
return text_field73073__2.call(this,name__22101__auto__,value__22102__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field73073.cljs$core$IFn$_invoke$arity$1 = text_field73073__1;
text_field73073.cljs$core$IFn$_invoke$arity$2 = text_field73073__2;
return text_field73073;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field73073);
/**
* Creates a time input field.
*/
sablono.core.time_field73076 = (function() {
var time_field73076 = null;
var time_field73076__1 = (function (name__22101__auto__){return time_field73076.cljs$core$IFn$_invoke$arity$2(name__22101__auto__,null);
});
var time_field73076__2 = (function (name__22101__auto__,value__22102__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__22101__auto__,value__22102__auto__);
});
time_field73076 = function(name__22101__auto__,value__22102__auto__){
switch(arguments.length){
case 1:
return time_field73076__1.call(this,name__22101__auto__);
case 2:
return time_field73076__2.call(this,name__22101__auto__,value__22102__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field73076.cljs$core$IFn$_invoke$arity$1 = time_field73076__1;
time_field73076.cljs$core$IFn$_invoke$arity$2 = time_field73076__2;
return time_field73076;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field73076);
/**
* Creates a url input field.
*/
sablono.core.url_field73079 = (function() {
var url_field73079 = null;
var url_field73079__1 = (function (name__22101__auto__){return url_field73079.cljs$core$IFn$_invoke$arity$2(name__22101__auto__,null);
});
var url_field73079__2 = (function (name__22101__auto__,value__22102__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__22101__auto__,value__22102__auto__);
});
url_field73079 = function(name__22101__auto__,value__22102__auto__){
switch(arguments.length){
case 1:
return url_field73079__1.call(this,name__22101__auto__);
case 2:
return url_field73079__2.call(this,name__22101__auto__,value__22102__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field73079.cljs$core$IFn$_invoke$arity$1 = url_field73079__1;
url_field73079.cljs$core$IFn$_invoke$arity$2 = url_field73079__2;
return url_field73079;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field73079);
/**
* Creates a week input field.
*/
sablono.core.week_field73082 = (function() {
var week_field73082 = null;
var week_field73082__1 = (function (name__22101__auto__){return week_field73082.cljs$core$IFn$_invoke$arity$2(name__22101__auto__,null);
});
var week_field73082__2 = (function (name__22101__auto__,value__22102__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__22101__auto__,value__22102__auto__);
});
week_field73082 = function(name__22101__auto__,value__22102__auto__){
switch(arguments.length){
case 1:
return week_field73082__1.call(this,name__22101__auto__);
case 2:
return week_field73082__2.call(this,name__22101__auto__,value__22102__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field73082.cljs$core$IFn$_invoke$arity$1 = week_field73082__1;
week_field73082.cljs$core$IFn$_invoke$arity$2 = week_field73082__2;
return week_field73082;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field73082);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box73085 = (function() {
var check_box73085 = null;
var check_box73085__1 = (function (name){return check_box73085.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box73085__2 = (function (name,checked_QMARK_){return check_box73085.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box73085__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box73085 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box73085__1.call(this,name);
case 2:
return check_box73085__2.call(this,name,checked_QMARK_);
case 3:
return check_box73085__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box73085.cljs$core$IFn$_invoke$arity$1 = check_box73085__1;
check_box73085.cljs$core$IFn$_invoke$arity$2 = check_box73085__2;
check_box73085.cljs$core$IFn$_invoke$arity$3 = check_box73085__3;
return check_box73085;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box73085);
/**
* Creates a radio button.
*/
sablono.core.radio_button73091 = (function() {
var radio_button73091 = null;
var radio_button73091__1 = (function (group){return radio_button73091.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button73091__2 = (function (group,checked_QMARK_){return radio_button73091.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button73091__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button73091 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button73091__1.call(this,group);
case 2:
return radio_button73091__2.call(this,group,checked_QMARK_);
case 3:
return radio_button73091__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button73091.cljs$core$IFn$_invoke$arity$1 = radio_button73091__1;
radio_button73091.cljs$core$IFn$_invoke$arity$2 = radio_button73091__2;
radio_button73091.cljs$core$IFn$_invoke$arity$3 = radio_button73091__3;
return radio_button73091;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button73091);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options73097 = (function() {
var select_options73097 = null;
var select_options73097__1 = (function (coll){return select_options73097.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options73097__2 = (function (coll,selected){var iter__21069__auto__ = (function iter__73118(s__73119){return (new cljs.core.LazySeq(null,(function (){var s__73119__$1 = s__73119;while(true){
var temp__4126__auto__ = cljs.core.seq(s__73119__$1);if(temp__4126__auto__)
{var s__73119__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__73119__$2))
{var c__21067__auto__ = cljs.core.chunk_first(s__73119__$2);var size__21068__auto__ = cljs.core.count(c__21067__auto__);var b__73121 = cljs.core.chunk_buffer(size__21068__auto__);if((function (){var i__73120 = (0);while(true){
if((i__73120 < size__21068__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21067__auto__,i__73120);cljs.core.chunk_append(b__73121,((cljs.core.sequential_QMARK_(x))?(function (){var vec__73126 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73126,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73126,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73126,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options73097.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__73128 = (i__73120 + (1));
i__73120 = G__73128;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__73121),iter__73118(cljs.core.chunk_rest(s__73119__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__73121),null);
}
} else
{var x = cljs.core.first(s__73119__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__73127 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73127,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73127,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73127,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options73097.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__73118(cljs.core.rest(s__73119__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__21069__auto__(coll);
});
select_options73097 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options73097__1.call(this,coll);
case 2:
return select_options73097__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options73097.cljs$core$IFn$_invoke$arity$1 = select_options73097__1;
select_options73097.cljs$core$IFn$_invoke$arity$2 = select_options73097__2;
return select_options73097;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options73097);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down73129 = (function() {
var drop_down73129 = null;
var drop_down73129__2 = (function (name,options){return drop_down73129.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down73129__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(function (){var G__73135 = options;var G__73136 = selected;return (sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(G__73135,G__73136) : sablono.core.select_options.call(null,G__73135,G__73136));
})()], null);
});
drop_down73129 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down73129__2.call(this,name,options);
case 3:
return drop_down73129__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down73129.cljs$core$IFn$_invoke$arity$2 = drop_down73129__2;
drop_down73129.cljs$core$IFn$_invoke$arity$3 = drop_down73129__3;
return drop_down73129;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down73129);
/**
* Creates a text area element.
*/
sablono.core.text_area73137 = (function() {
var text_area73137 = null;
var text_area73137__1 = (function (name){return text_area73137.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area73137__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area73137 = function(name,value){
switch(arguments.length){
case 1:
return text_area73137__1.call(this,name);
case 2:
return text_area73137__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area73137.cljs$core$IFn$_invoke$arity$1 = text_area73137__1;
text_area73137.cljs$core$IFn$_invoke$arity$2 = text_area73137__2;
return text_area73137;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area73137);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label73140 = (function label73140(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label73140);
/**
* Creates a submit button.
*/
sablono.core.submit_button73141 = (function submit_button73141(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button73141);
/**
* Creates a form reset button.
*/
sablono.core.reset_button73142 = (function reset_button73142(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button73142);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to73143 = (function() { 
var form_to73143__delegate = function (p__73144,body){var vec__73148 = p__73144;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73148,(0),null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73148,(1),null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__73149 = "_method";var G__73150 = method_str;return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2(G__73149,G__73150) : sablono.core.hidden_field.call(null,G__73149,G__73150));
})()], null)),body));
};
var form_to73143 = function (p__73144,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to73143__delegate.call(this,p__73144,body);};
form_to73143.cljs$lang$maxFixedArity = 1;
form_to73143.cljs$lang$applyTo = (function (arglist__73151){
var p__73144 = cljs.core.first(arglist__73151);
var body = cljs.core.rest(arglist__73151);
return form_to73143__delegate(p__73144,body);
});
form_to73143.cljs$core$IFn$_invoke$arity$variadic = form_to73143__delegate;
return form_to73143;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to73143);
//# sourceMappingURL=core.js.map