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
var G__36494__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__36493 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36493,(0),null);var body = cljs.core.nthnext(vec__36493,(1));if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__36494 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__36494__delegate.call(this,args);};
G__36494.cljs$lang$maxFixedArity = 0;
G__36494.cljs$lang$applyTo = (function (arglist__36495){
var args = cljs.core.seq(arglist__36495);
return G__36494__delegate(args);
});
G__36494.cljs$core$IFn$_invoke$arity$variadic = G__36494__delegate;
return G__36494;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__20763__auto__ = (function iter__36502(s__36503){return (new cljs.core.LazySeq(null,(function (){var s__36503__$1 = s__36503;while(true){
var temp__4126__auto__ = cljs.core.seq(s__36503__$1);if(temp__4126__auto__)
{var s__36503__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__36503__$2))
{var c__20761__auto__ = cljs.core.chunk_first(s__36503__$2);var size__20762__auto__ = cljs.core.count(c__20761__auto__);var b__36505 = cljs.core.chunk_buffer(size__20762__auto__);if((function (){var i__36504 = (0);while(true){
if((i__36504 < size__20762__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20761__auto__,i__36504);cljs.core.chunk_append(b__36505,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__36508 = (i__36504 + (1));
i__36504 = G__36508;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__36505),iter__36502(cljs.core.chunk_rest(s__36503__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__36505),null);
}
} else
{var args = cljs.core.first(s__36503__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__36502(cljs.core.rest(s__36503__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20763__auto__(arglists);
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
var include_css__delegate = function (styles){var iter__20763__auto__ = (function iter__36515(s__36516){return (new cljs.core.LazySeq(null,(function (){var s__36516__$1 = s__36516;while(true){
var temp__4126__auto__ = cljs.core.seq(s__36516__$1);if(temp__4126__auto__)
{var s__36516__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__36516__$2))
{var c__20761__auto__ = cljs.core.chunk_first(s__36516__$2);var size__20762__auto__ = cljs.core.count(c__20761__auto__);var b__36518 = cljs.core.chunk_buffer(size__20762__auto__);if((function (){var i__36517 = (0);while(true){
if((i__36517 < size__20762__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20761__auto__,i__36517);cljs.core.chunk_append(b__36518,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__36521 = (i__36517 + (1));
i__36517 = G__36521;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__36518),iter__36515(cljs.core.chunk_rest(s__36516__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__36518),null);
}
} else
{var style = cljs.core.first(s__36516__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__36515(cljs.core.rest(s__36516__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20763__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__36522){
var styles = cljs.core.seq(arglist__36522);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){var G__36527 = (function (){return goog.dom.getDocument();
})().body;var G__36528 = (function (){var G__36529 = "script";var G__36530 = {"src": src};return goog.dom.createDom(G__36529,G__36530);
})();return goog.dom.appendChild(G__36527,G__36528);
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
sablono.core.link_to36531 = (function() { 
var link_to36531__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to36531 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to36531__delegate.call(this,url,content);};
link_to36531.cljs$lang$maxFixedArity = 1;
link_to36531.cljs$lang$applyTo = (function (arglist__36532){
var url = cljs.core.first(arglist__36532);
var content = cljs.core.rest(arglist__36532);
return link_to36531__delegate(url,content);
});
link_to36531.cljs$core$IFn$_invoke$arity$variadic = link_to36531__delegate;
return link_to36531;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to36531);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to36533 = (function() { 
var mail_to36533__delegate = function (e_mail,p__36534){var vec__36536 = p__36534;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36536,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__19347__auto__ = content;if(cljs.core.truth_(or__19347__auto__))
{return or__19347__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to36533 = function (e_mail,var_args){
var p__36534 = null;if (arguments.length > 1) {
  p__36534 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to36533__delegate.call(this,e_mail,p__36534);};
mail_to36533.cljs$lang$maxFixedArity = 1;
mail_to36533.cljs$lang$applyTo = (function (arglist__36537){
var e_mail = cljs.core.first(arglist__36537);
var p__36534 = cljs.core.rest(arglist__36537);
return mail_to36533__delegate(e_mail,p__36534);
});
mail_to36533.cljs$core$IFn$_invoke$arity$variadic = mail_to36533__delegate;
return mail_to36533;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to36533);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list36538 = (function unordered_list36538(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__20763__auto__ = (function iter__36545(s__36546){return (new cljs.core.LazySeq(null,(function (){var s__36546__$1 = s__36546;while(true){
var temp__4126__auto__ = cljs.core.seq(s__36546__$1);if(temp__4126__auto__)
{var s__36546__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__36546__$2))
{var c__20761__auto__ = cljs.core.chunk_first(s__36546__$2);var size__20762__auto__ = cljs.core.count(c__20761__auto__);var b__36548 = cljs.core.chunk_buffer(size__20762__auto__);if((function (){var i__36547 = (0);while(true){
if((i__36547 < size__20762__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20761__auto__,i__36547);cljs.core.chunk_append(b__36548,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__36551 = (i__36547 + (1));
i__36547 = G__36551;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__36548),iter__36545(cljs.core.chunk_rest(s__36546__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__36548),null);
}
} else
{var x = cljs.core.first(s__36546__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__36545(cljs.core.rest(s__36546__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20763__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list36538);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list36552 = (function ordered_list36552(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__20763__auto__ = (function iter__36559(s__36560){return (new cljs.core.LazySeq(null,(function (){var s__36560__$1 = s__36560;while(true){
var temp__4126__auto__ = cljs.core.seq(s__36560__$1);if(temp__4126__auto__)
{var s__36560__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__36560__$2))
{var c__20761__auto__ = cljs.core.chunk_first(s__36560__$2);var size__20762__auto__ = cljs.core.count(c__20761__auto__);var b__36562 = cljs.core.chunk_buffer(size__20762__auto__);if((function (){var i__36561 = (0);while(true){
if((i__36561 < size__20762__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20761__auto__,i__36561);cljs.core.chunk_append(b__36562,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__36565 = (i__36561 + (1));
i__36561 = G__36565;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__36562),iter__36559(cljs.core.chunk_rest(s__36560__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__36562),null);
}
} else
{var x = cljs.core.first(s__36560__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__36559(cljs.core.rest(s__36560__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20763__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list36552);
/**
* Create an image element.
*/
sablono.core.image36566 = (function() {
var image36566 = null;
var image36566__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image36566__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image36566 = function(src,alt){
switch(arguments.length){
case 1:
return image36566__1.call(this,src);
case 2:
return image36566__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image36566.cljs$core$IFn$_invoke$arity$1 = image36566__1;
image36566.cljs$core$IFn$_invoke$arity$2 = image36566__2;
return image36566;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image36566);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__36567_SHARP_,p2__36568_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36567_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__36568_SHARP_)+"]");
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__36569_SHARP_,p2__36570_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36569_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__36570_SHARP_));
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
sablono.core.color_field36571 = (function() {
var color_field36571 = null;
var color_field36571__1 = (function (name__21431__auto__){return color_field36571.cljs$core$IFn$_invoke$arity$2(name__21431__auto__,null);
});
var color_field36571__2 = (function (name__21431__auto__,value__21432__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__21431__auto__,value__21432__auto__);
});
color_field36571 = function(name__21431__auto__,value__21432__auto__){
switch(arguments.length){
case 1:
return color_field36571__1.call(this,name__21431__auto__);
case 2:
return color_field36571__2.call(this,name__21431__auto__,value__21432__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field36571.cljs$core$IFn$_invoke$arity$1 = color_field36571__1;
color_field36571.cljs$core$IFn$_invoke$arity$2 = color_field36571__2;
return color_field36571;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field36571);
/**
* Creates a date input field.
*/
sablono.core.date_field36574 = (function() {
var date_field36574 = null;
var date_field36574__1 = (function (name__21431__auto__){return date_field36574.cljs$core$IFn$_invoke$arity$2(name__21431__auto__,null);
});
var date_field36574__2 = (function (name__21431__auto__,value__21432__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__21431__auto__,value__21432__auto__);
});
date_field36574 = function(name__21431__auto__,value__21432__auto__){
switch(arguments.length){
case 1:
return date_field36574__1.call(this,name__21431__auto__);
case 2:
return date_field36574__2.call(this,name__21431__auto__,value__21432__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field36574.cljs$core$IFn$_invoke$arity$1 = date_field36574__1;
date_field36574.cljs$core$IFn$_invoke$arity$2 = date_field36574__2;
return date_field36574;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field36574);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field36577 = (function() {
var datetime_field36577 = null;
var datetime_field36577__1 = (function (name__21431__auto__){return datetime_field36577.cljs$core$IFn$_invoke$arity$2(name__21431__auto__,null);
});
var datetime_field36577__2 = (function (name__21431__auto__,value__21432__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__21431__auto__,value__21432__auto__);
});
datetime_field36577 = function(name__21431__auto__,value__21432__auto__){
switch(arguments.length){
case 1:
return datetime_field36577__1.call(this,name__21431__auto__);
case 2:
return datetime_field36577__2.call(this,name__21431__auto__,value__21432__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field36577.cljs$core$IFn$_invoke$arity$1 = datetime_field36577__1;
datetime_field36577.cljs$core$IFn$_invoke$arity$2 = datetime_field36577__2;
return datetime_field36577;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field36577);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field36580 = (function() {
var datetime_local_field36580 = null;
var datetime_local_field36580__1 = (function (name__21431__auto__){return datetime_local_field36580.cljs$core$IFn$_invoke$arity$2(name__21431__auto__,null);
});
var datetime_local_field36580__2 = (function (name__21431__auto__,value__21432__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__21431__auto__,value__21432__auto__);
});
datetime_local_field36580 = function(name__21431__auto__,value__21432__auto__){
switch(arguments.length){
case 1:
return datetime_local_field36580__1.call(this,name__21431__auto__);
case 2:
return datetime_local_field36580__2.call(this,name__21431__auto__,value__21432__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field36580.cljs$core$IFn$_invoke$arity$1 = datetime_local_field36580__1;
datetime_local_field36580.cljs$core$IFn$_invoke$arity$2 = datetime_local_field36580__2;
return datetime_local_field36580;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field36580);
/**
* Creates a email input field.
*/
sablono.core.email_field36583 = (function() {
var email_field36583 = null;
var email_field36583__1 = (function (name__21431__auto__){return email_field36583.cljs$core$IFn$_invoke$arity$2(name__21431__auto__,null);
});
var email_field36583__2 = (function (name__21431__auto__,value__21432__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__21431__auto__,value__21432__auto__);
});
email_field36583 = function(name__21431__auto__,value__21432__auto__){
switch(arguments.length){
case 1:
return email_field36583__1.call(this,name__21431__auto__);
case 2:
return email_field36583__2.call(this,name__21431__auto__,value__21432__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field36583.cljs$core$IFn$_invoke$arity$1 = email_field36583__1;
email_field36583.cljs$core$IFn$_invoke$arity$2 = email_field36583__2;
return email_field36583;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field36583);
/**
* Creates a file input field.
*/
sablono.core.file_field36586 = (function() {
var file_field36586 = null;
var file_field36586__1 = (function (name__21431__auto__){return file_field36586.cljs$core$IFn$_invoke$arity$2(name__21431__auto__,null);
});
var file_field36586__2 = (function (name__21431__auto__,value__21432__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__21431__auto__,value__21432__auto__);
});
file_field36586 = function(name__21431__auto__,value__21432__auto__){
switch(arguments.length){
case 1:
return file_field36586__1.call(this,name__21431__auto__);
case 2:
return file_field36586__2.call(this,name__21431__auto__,value__21432__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field36586.cljs$core$IFn$_invoke$arity$1 = file_field36586__1;
file_field36586.cljs$core$IFn$_invoke$arity$2 = file_field36586__2;
return file_field36586;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field36586);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field36589 = (function() {
var hidden_field36589 = null;
var hidden_field36589__1 = (function (name__21431__auto__){return hidden_field36589.cljs$core$IFn$_invoke$arity$2(name__21431__auto__,null);
});
var hidden_field36589__2 = (function (name__21431__auto__,value__21432__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__21431__auto__,value__21432__auto__);
});
hidden_field36589 = function(name__21431__auto__,value__21432__auto__){
switch(arguments.length){
case 1:
return hidden_field36589__1.call(this,name__21431__auto__);
case 2:
return hidden_field36589__2.call(this,name__21431__auto__,value__21432__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field36589.cljs$core$IFn$_invoke$arity$1 = hidden_field36589__1;
hidden_field36589.cljs$core$IFn$_invoke$arity$2 = hidden_field36589__2;
return hidden_field36589;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field36589);
/**
* Creates a month input field.
*/
sablono.core.month_field36592 = (function() {
var month_field36592 = null;
var month_field36592__1 = (function (name__21431__auto__){return month_field36592.cljs$core$IFn$_invoke$arity$2(name__21431__auto__,null);
});
var month_field36592__2 = (function (name__21431__auto__,value__21432__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__21431__auto__,value__21432__auto__);
});
month_field36592 = function(name__21431__auto__,value__21432__auto__){
switch(arguments.length){
case 1:
return month_field36592__1.call(this,name__21431__auto__);
case 2:
return month_field36592__2.call(this,name__21431__auto__,value__21432__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field36592.cljs$core$IFn$_invoke$arity$1 = month_field36592__1;
month_field36592.cljs$core$IFn$_invoke$arity$2 = month_field36592__2;
return month_field36592;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field36592);
/**
* Creates a number input field.
*/
sablono.core.number_field36595 = (function() {
var number_field36595 = null;
var number_field36595__1 = (function (name__21431__auto__){return number_field36595.cljs$core$IFn$_invoke$arity$2(name__21431__auto__,null);
});
var number_field36595__2 = (function (name__21431__auto__,value__21432__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__21431__auto__,value__21432__auto__);
});
number_field36595 = function(name__21431__auto__,value__21432__auto__){
switch(arguments.length){
case 1:
return number_field36595__1.call(this,name__21431__auto__);
case 2:
return number_field36595__2.call(this,name__21431__auto__,value__21432__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field36595.cljs$core$IFn$_invoke$arity$1 = number_field36595__1;
number_field36595.cljs$core$IFn$_invoke$arity$2 = number_field36595__2;
return number_field36595;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field36595);
/**
* Creates a password input field.
*/
sablono.core.password_field36598 = (function() {
var password_field36598 = null;
var password_field36598__1 = (function (name__21431__auto__){return password_field36598.cljs$core$IFn$_invoke$arity$2(name__21431__auto__,null);
});
var password_field36598__2 = (function (name__21431__auto__,value__21432__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__21431__auto__,value__21432__auto__);
});
password_field36598 = function(name__21431__auto__,value__21432__auto__){
switch(arguments.length){
case 1:
return password_field36598__1.call(this,name__21431__auto__);
case 2:
return password_field36598__2.call(this,name__21431__auto__,value__21432__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field36598.cljs$core$IFn$_invoke$arity$1 = password_field36598__1;
password_field36598.cljs$core$IFn$_invoke$arity$2 = password_field36598__2;
return password_field36598;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field36598);
/**
* Creates a range input field.
*/
sablono.core.range_field36601 = (function() {
var range_field36601 = null;
var range_field36601__1 = (function (name__21431__auto__){return range_field36601.cljs$core$IFn$_invoke$arity$2(name__21431__auto__,null);
});
var range_field36601__2 = (function (name__21431__auto__,value__21432__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__21431__auto__,value__21432__auto__);
});
range_field36601 = function(name__21431__auto__,value__21432__auto__){
switch(arguments.length){
case 1:
return range_field36601__1.call(this,name__21431__auto__);
case 2:
return range_field36601__2.call(this,name__21431__auto__,value__21432__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field36601.cljs$core$IFn$_invoke$arity$1 = range_field36601__1;
range_field36601.cljs$core$IFn$_invoke$arity$2 = range_field36601__2;
return range_field36601;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field36601);
/**
* Creates a search input field.
*/
sablono.core.search_field36604 = (function() {
var search_field36604 = null;
var search_field36604__1 = (function (name__21431__auto__){return search_field36604.cljs$core$IFn$_invoke$arity$2(name__21431__auto__,null);
});
var search_field36604__2 = (function (name__21431__auto__,value__21432__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__21431__auto__,value__21432__auto__);
});
search_field36604 = function(name__21431__auto__,value__21432__auto__){
switch(arguments.length){
case 1:
return search_field36604__1.call(this,name__21431__auto__);
case 2:
return search_field36604__2.call(this,name__21431__auto__,value__21432__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field36604.cljs$core$IFn$_invoke$arity$1 = search_field36604__1;
search_field36604.cljs$core$IFn$_invoke$arity$2 = search_field36604__2;
return search_field36604;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field36604);
/**
* Creates a tel input field.
*/
sablono.core.tel_field36607 = (function() {
var tel_field36607 = null;
var tel_field36607__1 = (function (name__21431__auto__){return tel_field36607.cljs$core$IFn$_invoke$arity$2(name__21431__auto__,null);
});
var tel_field36607__2 = (function (name__21431__auto__,value__21432__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__21431__auto__,value__21432__auto__);
});
tel_field36607 = function(name__21431__auto__,value__21432__auto__){
switch(arguments.length){
case 1:
return tel_field36607__1.call(this,name__21431__auto__);
case 2:
return tel_field36607__2.call(this,name__21431__auto__,value__21432__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field36607.cljs$core$IFn$_invoke$arity$1 = tel_field36607__1;
tel_field36607.cljs$core$IFn$_invoke$arity$2 = tel_field36607__2;
return tel_field36607;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field36607);
/**
* Creates a text input field.
*/
sablono.core.text_field36610 = (function() {
var text_field36610 = null;
var text_field36610__1 = (function (name__21431__auto__){return text_field36610.cljs$core$IFn$_invoke$arity$2(name__21431__auto__,null);
});
var text_field36610__2 = (function (name__21431__auto__,value__21432__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__21431__auto__,value__21432__auto__);
});
text_field36610 = function(name__21431__auto__,value__21432__auto__){
switch(arguments.length){
case 1:
return text_field36610__1.call(this,name__21431__auto__);
case 2:
return text_field36610__2.call(this,name__21431__auto__,value__21432__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field36610.cljs$core$IFn$_invoke$arity$1 = text_field36610__1;
text_field36610.cljs$core$IFn$_invoke$arity$2 = text_field36610__2;
return text_field36610;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field36610);
/**
* Creates a time input field.
*/
sablono.core.time_field36613 = (function() {
var time_field36613 = null;
var time_field36613__1 = (function (name__21431__auto__){return time_field36613.cljs$core$IFn$_invoke$arity$2(name__21431__auto__,null);
});
var time_field36613__2 = (function (name__21431__auto__,value__21432__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__21431__auto__,value__21432__auto__);
});
time_field36613 = function(name__21431__auto__,value__21432__auto__){
switch(arguments.length){
case 1:
return time_field36613__1.call(this,name__21431__auto__);
case 2:
return time_field36613__2.call(this,name__21431__auto__,value__21432__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field36613.cljs$core$IFn$_invoke$arity$1 = time_field36613__1;
time_field36613.cljs$core$IFn$_invoke$arity$2 = time_field36613__2;
return time_field36613;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field36613);
/**
* Creates a url input field.
*/
sablono.core.url_field36616 = (function() {
var url_field36616 = null;
var url_field36616__1 = (function (name__21431__auto__){return url_field36616.cljs$core$IFn$_invoke$arity$2(name__21431__auto__,null);
});
var url_field36616__2 = (function (name__21431__auto__,value__21432__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__21431__auto__,value__21432__auto__);
});
url_field36616 = function(name__21431__auto__,value__21432__auto__){
switch(arguments.length){
case 1:
return url_field36616__1.call(this,name__21431__auto__);
case 2:
return url_field36616__2.call(this,name__21431__auto__,value__21432__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field36616.cljs$core$IFn$_invoke$arity$1 = url_field36616__1;
url_field36616.cljs$core$IFn$_invoke$arity$2 = url_field36616__2;
return url_field36616;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field36616);
/**
* Creates a week input field.
*/
sablono.core.week_field36619 = (function() {
var week_field36619 = null;
var week_field36619__1 = (function (name__21431__auto__){return week_field36619.cljs$core$IFn$_invoke$arity$2(name__21431__auto__,null);
});
var week_field36619__2 = (function (name__21431__auto__,value__21432__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__21431__auto__,value__21432__auto__);
});
week_field36619 = function(name__21431__auto__,value__21432__auto__){
switch(arguments.length){
case 1:
return week_field36619__1.call(this,name__21431__auto__);
case 2:
return week_field36619__2.call(this,name__21431__auto__,value__21432__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field36619.cljs$core$IFn$_invoke$arity$1 = week_field36619__1;
week_field36619.cljs$core$IFn$_invoke$arity$2 = week_field36619__2;
return week_field36619;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field36619);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box36622 = (function() {
var check_box36622 = null;
var check_box36622__1 = (function (name){return check_box36622.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box36622__2 = (function (name,checked_QMARK_){return check_box36622.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box36622__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box36622 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box36622__1.call(this,name);
case 2:
return check_box36622__2.call(this,name,checked_QMARK_);
case 3:
return check_box36622__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box36622.cljs$core$IFn$_invoke$arity$1 = check_box36622__1;
check_box36622.cljs$core$IFn$_invoke$arity$2 = check_box36622__2;
check_box36622.cljs$core$IFn$_invoke$arity$3 = check_box36622__3;
return check_box36622;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box36622);
/**
* Creates a radio button.
*/
sablono.core.radio_button36628 = (function() {
var radio_button36628 = null;
var radio_button36628__1 = (function (group){return radio_button36628.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button36628__2 = (function (group,checked_QMARK_){return radio_button36628.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button36628__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button36628 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button36628__1.call(this,group);
case 2:
return radio_button36628__2.call(this,group,checked_QMARK_);
case 3:
return radio_button36628__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button36628.cljs$core$IFn$_invoke$arity$1 = radio_button36628__1;
radio_button36628.cljs$core$IFn$_invoke$arity$2 = radio_button36628__2;
radio_button36628.cljs$core$IFn$_invoke$arity$3 = radio_button36628__3;
return radio_button36628;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button36628);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options36634 = (function() {
var select_options36634 = null;
var select_options36634__1 = (function (coll){return select_options36634.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options36634__2 = (function (coll,selected){var iter__20763__auto__ = (function iter__36655(s__36656){return (new cljs.core.LazySeq(null,(function (){var s__36656__$1 = s__36656;while(true){
var temp__4126__auto__ = cljs.core.seq(s__36656__$1);if(temp__4126__auto__)
{var s__36656__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__36656__$2))
{var c__20761__auto__ = cljs.core.chunk_first(s__36656__$2);var size__20762__auto__ = cljs.core.count(c__20761__auto__);var b__36658 = cljs.core.chunk_buffer(size__20762__auto__);if((function (){var i__36657 = (0);while(true){
if((i__36657 < size__20762__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20761__auto__,i__36657);cljs.core.chunk_append(b__36658,((cljs.core.sequential_QMARK_(x))?(function (){var vec__36663 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36663,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36663,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36663,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options36634.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__36665 = (i__36657 + (1));
i__36657 = G__36665;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__36658),iter__36655(cljs.core.chunk_rest(s__36656__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__36658),null);
}
} else
{var x = cljs.core.first(s__36656__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__36664 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36664,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36664,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36664,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options36634.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__36655(cljs.core.rest(s__36656__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20763__auto__(coll);
});
select_options36634 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options36634__1.call(this,coll);
case 2:
return select_options36634__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options36634.cljs$core$IFn$_invoke$arity$1 = select_options36634__1;
select_options36634.cljs$core$IFn$_invoke$arity$2 = select_options36634__2;
return select_options36634;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options36634);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down36666 = (function() {
var drop_down36666 = null;
var drop_down36666__2 = (function (name,options){return drop_down36666.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down36666__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(function (){var G__36672 = options;var G__36673 = selected;return (sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(G__36672,G__36673) : sablono.core.select_options.call(null,G__36672,G__36673));
})()], null);
});
drop_down36666 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down36666__2.call(this,name,options);
case 3:
return drop_down36666__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down36666.cljs$core$IFn$_invoke$arity$2 = drop_down36666__2;
drop_down36666.cljs$core$IFn$_invoke$arity$3 = drop_down36666__3;
return drop_down36666;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down36666);
/**
* Creates a text area element.
*/
sablono.core.text_area36674 = (function() {
var text_area36674 = null;
var text_area36674__1 = (function (name){return text_area36674.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area36674__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area36674 = function(name,value){
switch(arguments.length){
case 1:
return text_area36674__1.call(this,name);
case 2:
return text_area36674__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area36674.cljs$core$IFn$_invoke$arity$1 = text_area36674__1;
text_area36674.cljs$core$IFn$_invoke$arity$2 = text_area36674__2;
return text_area36674;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area36674);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label36677 = (function label36677(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label36677);
/**
* Creates a submit button.
*/
sablono.core.submit_button36678 = (function submit_button36678(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button36678);
/**
* Creates a form reset button.
*/
sablono.core.reset_button36679 = (function reset_button36679(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button36679);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to36680 = (function() { 
var form_to36680__delegate = function (p__36681,body){var vec__36685 = p__36681;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36685,(0),null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36685,(1),null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__36686 = "_method";var G__36687 = method_str;return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2(G__36686,G__36687) : sablono.core.hidden_field.call(null,G__36686,G__36687));
})()], null)),body));
};
var form_to36680 = function (p__36681,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to36680__delegate.call(this,p__36681,body);};
form_to36680.cljs$lang$maxFixedArity = 1;
form_to36680.cljs$lang$applyTo = (function (arglist__36688){
var p__36681 = cljs.core.first(arglist__36688);
var body = cljs.core.rest(arglist__36688);
return form_to36680__delegate(p__36681,body);
});
form_to36680.cljs$core$IFn$_invoke$arity$variadic = form_to36680__delegate;
return form_to36680;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to36680);
//# sourceMappingURL=core.js.map