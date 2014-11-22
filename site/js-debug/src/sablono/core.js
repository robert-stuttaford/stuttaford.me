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
var G__45307__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__45306 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45306,(0),null);var body = cljs.core.nthnext(vec__45306,(1));if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__45307 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__45307__delegate.call(this,args);};
G__45307.cljs$lang$maxFixedArity = 0;
G__45307.cljs$lang$applyTo = (function (arglist__45308){
var args = cljs.core.seq(arglist__45308);
return G__45307__delegate(args);
});
G__45307.cljs$core$IFn$_invoke$arity$variadic = G__45307__delegate;
return G__45307;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__20913__auto__ = (function iter__45315(s__45316){return (new cljs.core.LazySeq(null,(function (){var s__45316__$1 = s__45316;while(true){
var temp__4126__auto__ = cljs.core.seq(s__45316__$1);if(temp__4126__auto__)
{var s__45316__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__45316__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__45316__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__45318 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__45317 = (0);while(true){
if((i__45317 < size__20912__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__45317);cljs.core.chunk_append(b__45318,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__45321 = (i__45317 + (1));
i__45317 = G__45321;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__45318),iter__45315(cljs.core.chunk_rest(s__45316__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__45318),null);
}
} else
{var args = cljs.core.first(s__45316__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__45315(cljs.core.rest(s__45316__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20913__auto__(arglists);
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
var include_css__delegate = function (styles){var iter__20913__auto__ = (function iter__45328(s__45329){return (new cljs.core.LazySeq(null,(function (){var s__45329__$1 = s__45329;while(true){
var temp__4126__auto__ = cljs.core.seq(s__45329__$1);if(temp__4126__auto__)
{var s__45329__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__45329__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__45329__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__45331 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__45330 = (0);while(true){
if((i__45330 < size__20912__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__45330);cljs.core.chunk_append(b__45331,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__45334 = (i__45330 + (1));
i__45330 = G__45334;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__45331),iter__45328(cljs.core.chunk_rest(s__45329__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__45331),null);
}
} else
{var style = cljs.core.first(s__45329__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__45328(cljs.core.rest(s__45329__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20913__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__45335){
var styles = cljs.core.seq(arglist__45335);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){var G__45340 = (function (){return goog.dom.getDocument();
})().body;var G__45341 = (function (){var G__45342 = "script";var G__45343 = {"src": src};return goog.dom.createDom(G__45342,G__45343);
})();return goog.dom.appendChild(G__45340,G__45341);
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
sablono.core.link_to45344 = (function() { 
var link_to45344__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to45344 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to45344__delegate.call(this,url,content);};
link_to45344.cljs$lang$maxFixedArity = 1;
link_to45344.cljs$lang$applyTo = (function (arglist__45345){
var url = cljs.core.first(arglist__45345);
var content = cljs.core.rest(arglist__45345);
return link_to45344__delegate(url,content);
});
link_to45344.cljs$core$IFn$_invoke$arity$variadic = link_to45344__delegate;
return link_to45344;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to45344);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to45346 = (function() { 
var mail_to45346__delegate = function (e_mail,p__45347){var vec__45349 = p__45347;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45349,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__19687__auto__ = content;if(cljs.core.truth_(or__19687__auto__))
{return or__19687__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to45346 = function (e_mail,var_args){
var p__45347 = null;if (arguments.length > 1) {
  p__45347 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to45346__delegate.call(this,e_mail,p__45347);};
mail_to45346.cljs$lang$maxFixedArity = 1;
mail_to45346.cljs$lang$applyTo = (function (arglist__45350){
var e_mail = cljs.core.first(arglist__45350);
var p__45347 = cljs.core.rest(arglist__45350);
return mail_to45346__delegate(e_mail,p__45347);
});
mail_to45346.cljs$core$IFn$_invoke$arity$variadic = mail_to45346__delegate;
return mail_to45346;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to45346);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list45351 = (function unordered_list45351(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__20913__auto__ = (function iter__45358(s__45359){return (new cljs.core.LazySeq(null,(function (){var s__45359__$1 = s__45359;while(true){
var temp__4126__auto__ = cljs.core.seq(s__45359__$1);if(temp__4126__auto__)
{var s__45359__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__45359__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__45359__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__45361 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__45360 = (0);while(true){
if((i__45360 < size__20912__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__45360);cljs.core.chunk_append(b__45361,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__45364 = (i__45360 + (1));
i__45360 = G__45364;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__45361),iter__45358(cljs.core.chunk_rest(s__45359__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__45361),null);
}
} else
{var x = cljs.core.first(s__45359__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__45358(cljs.core.rest(s__45359__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20913__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list45351);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list45365 = (function ordered_list45365(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__20913__auto__ = (function iter__45372(s__45373){return (new cljs.core.LazySeq(null,(function (){var s__45373__$1 = s__45373;while(true){
var temp__4126__auto__ = cljs.core.seq(s__45373__$1);if(temp__4126__auto__)
{var s__45373__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__45373__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__45373__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__45375 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__45374 = (0);while(true){
if((i__45374 < size__20912__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__45374);cljs.core.chunk_append(b__45375,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__45378 = (i__45374 + (1));
i__45374 = G__45378;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__45375),iter__45372(cljs.core.chunk_rest(s__45373__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__45375),null);
}
} else
{var x = cljs.core.first(s__45373__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__45372(cljs.core.rest(s__45373__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20913__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list45365);
/**
* Create an image element.
*/
sablono.core.image45379 = (function() {
var image45379 = null;
var image45379__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image45379__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image45379 = function(src,alt){
switch(arguments.length){
case 1:
return image45379__1.call(this,src);
case 2:
return image45379__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image45379.cljs$core$IFn$_invoke$arity$1 = image45379__1;
image45379.cljs$core$IFn$_invoke$arity$2 = image45379__2;
return image45379;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image45379);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__45380_SHARP_,p2__45381_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45380_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__45381_SHARP_)+"]");
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__45382_SHARP_,p2__45383_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45382_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__45383_SHARP_));
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
sablono.core.color_field45384 = (function() {
var color_field45384 = null;
var color_field45384__1 = (function (name__21967__auto__){return color_field45384.cljs$core$IFn$_invoke$arity$2(name__21967__auto__,null);
});
var color_field45384__2 = (function (name__21967__auto__,value__21968__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__21967__auto__,value__21968__auto__);
});
color_field45384 = function(name__21967__auto__,value__21968__auto__){
switch(arguments.length){
case 1:
return color_field45384__1.call(this,name__21967__auto__);
case 2:
return color_field45384__2.call(this,name__21967__auto__,value__21968__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field45384.cljs$core$IFn$_invoke$arity$1 = color_field45384__1;
color_field45384.cljs$core$IFn$_invoke$arity$2 = color_field45384__2;
return color_field45384;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field45384);
/**
* Creates a date input field.
*/
sablono.core.date_field45387 = (function() {
var date_field45387 = null;
var date_field45387__1 = (function (name__21967__auto__){return date_field45387.cljs$core$IFn$_invoke$arity$2(name__21967__auto__,null);
});
var date_field45387__2 = (function (name__21967__auto__,value__21968__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__21967__auto__,value__21968__auto__);
});
date_field45387 = function(name__21967__auto__,value__21968__auto__){
switch(arguments.length){
case 1:
return date_field45387__1.call(this,name__21967__auto__);
case 2:
return date_field45387__2.call(this,name__21967__auto__,value__21968__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field45387.cljs$core$IFn$_invoke$arity$1 = date_field45387__1;
date_field45387.cljs$core$IFn$_invoke$arity$2 = date_field45387__2;
return date_field45387;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field45387);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field45390 = (function() {
var datetime_field45390 = null;
var datetime_field45390__1 = (function (name__21967__auto__){return datetime_field45390.cljs$core$IFn$_invoke$arity$2(name__21967__auto__,null);
});
var datetime_field45390__2 = (function (name__21967__auto__,value__21968__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__21967__auto__,value__21968__auto__);
});
datetime_field45390 = function(name__21967__auto__,value__21968__auto__){
switch(arguments.length){
case 1:
return datetime_field45390__1.call(this,name__21967__auto__);
case 2:
return datetime_field45390__2.call(this,name__21967__auto__,value__21968__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field45390.cljs$core$IFn$_invoke$arity$1 = datetime_field45390__1;
datetime_field45390.cljs$core$IFn$_invoke$arity$2 = datetime_field45390__2;
return datetime_field45390;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field45390);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field45393 = (function() {
var datetime_local_field45393 = null;
var datetime_local_field45393__1 = (function (name__21967__auto__){return datetime_local_field45393.cljs$core$IFn$_invoke$arity$2(name__21967__auto__,null);
});
var datetime_local_field45393__2 = (function (name__21967__auto__,value__21968__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__21967__auto__,value__21968__auto__);
});
datetime_local_field45393 = function(name__21967__auto__,value__21968__auto__){
switch(arguments.length){
case 1:
return datetime_local_field45393__1.call(this,name__21967__auto__);
case 2:
return datetime_local_field45393__2.call(this,name__21967__auto__,value__21968__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field45393.cljs$core$IFn$_invoke$arity$1 = datetime_local_field45393__1;
datetime_local_field45393.cljs$core$IFn$_invoke$arity$2 = datetime_local_field45393__2;
return datetime_local_field45393;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field45393);
/**
* Creates a email input field.
*/
sablono.core.email_field45396 = (function() {
var email_field45396 = null;
var email_field45396__1 = (function (name__21967__auto__){return email_field45396.cljs$core$IFn$_invoke$arity$2(name__21967__auto__,null);
});
var email_field45396__2 = (function (name__21967__auto__,value__21968__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__21967__auto__,value__21968__auto__);
});
email_field45396 = function(name__21967__auto__,value__21968__auto__){
switch(arguments.length){
case 1:
return email_field45396__1.call(this,name__21967__auto__);
case 2:
return email_field45396__2.call(this,name__21967__auto__,value__21968__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field45396.cljs$core$IFn$_invoke$arity$1 = email_field45396__1;
email_field45396.cljs$core$IFn$_invoke$arity$2 = email_field45396__2;
return email_field45396;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field45396);
/**
* Creates a file input field.
*/
sablono.core.file_field45399 = (function() {
var file_field45399 = null;
var file_field45399__1 = (function (name__21967__auto__){return file_field45399.cljs$core$IFn$_invoke$arity$2(name__21967__auto__,null);
});
var file_field45399__2 = (function (name__21967__auto__,value__21968__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__21967__auto__,value__21968__auto__);
});
file_field45399 = function(name__21967__auto__,value__21968__auto__){
switch(arguments.length){
case 1:
return file_field45399__1.call(this,name__21967__auto__);
case 2:
return file_field45399__2.call(this,name__21967__auto__,value__21968__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field45399.cljs$core$IFn$_invoke$arity$1 = file_field45399__1;
file_field45399.cljs$core$IFn$_invoke$arity$2 = file_field45399__2;
return file_field45399;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field45399);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field45402 = (function() {
var hidden_field45402 = null;
var hidden_field45402__1 = (function (name__21967__auto__){return hidden_field45402.cljs$core$IFn$_invoke$arity$2(name__21967__auto__,null);
});
var hidden_field45402__2 = (function (name__21967__auto__,value__21968__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__21967__auto__,value__21968__auto__);
});
hidden_field45402 = function(name__21967__auto__,value__21968__auto__){
switch(arguments.length){
case 1:
return hidden_field45402__1.call(this,name__21967__auto__);
case 2:
return hidden_field45402__2.call(this,name__21967__auto__,value__21968__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field45402.cljs$core$IFn$_invoke$arity$1 = hidden_field45402__1;
hidden_field45402.cljs$core$IFn$_invoke$arity$2 = hidden_field45402__2;
return hidden_field45402;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field45402);
/**
* Creates a month input field.
*/
sablono.core.month_field45405 = (function() {
var month_field45405 = null;
var month_field45405__1 = (function (name__21967__auto__){return month_field45405.cljs$core$IFn$_invoke$arity$2(name__21967__auto__,null);
});
var month_field45405__2 = (function (name__21967__auto__,value__21968__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__21967__auto__,value__21968__auto__);
});
month_field45405 = function(name__21967__auto__,value__21968__auto__){
switch(arguments.length){
case 1:
return month_field45405__1.call(this,name__21967__auto__);
case 2:
return month_field45405__2.call(this,name__21967__auto__,value__21968__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field45405.cljs$core$IFn$_invoke$arity$1 = month_field45405__1;
month_field45405.cljs$core$IFn$_invoke$arity$2 = month_field45405__2;
return month_field45405;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field45405);
/**
* Creates a number input field.
*/
sablono.core.number_field45408 = (function() {
var number_field45408 = null;
var number_field45408__1 = (function (name__21967__auto__){return number_field45408.cljs$core$IFn$_invoke$arity$2(name__21967__auto__,null);
});
var number_field45408__2 = (function (name__21967__auto__,value__21968__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__21967__auto__,value__21968__auto__);
});
number_field45408 = function(name__21967__auto__,value__21968__auto__){
switch(arguments.length){
case 1:
return number_field45408__1.call(this,name__21967__auto__);
case 2:
return number_field45408__2.call(this,name__21967__auto__,value__21968__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field45408.cljs$core$IFn$_invoke$arity$1 = number_field45408__1;
number_field45408.cljs$core$IFn$_invoke$arity$2 = number_field45408__2;
return number_field45408;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field45408);
/**
* Creates a password input field.
*/
sablono.core.password_field45411 = (function() {
var password_field45411 = null;
var password_field45411__1 = (function (name__21967__auto__){return password_field45411.cljs$core$IFn$_invoke$arity$2(name__21967__auto__,null);
});
var password_field45411__2 = (function (name__21967__auto__,value__21968__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__21967__auto__,value__21968__auto__);
});
password_field45411 = function(name__21967__auto__,value__21968__auto__){
switch(arguments.length){
case 1:
return password_field45411__1.call(this,name__21967__auto__);
case 2:
return password_field45411__2.call(this,name__21967__auto__,value__21968__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field45411.cljs$core$IFn$_invoke$arity$1 = password_field45411__1;
password_field45411.cljs$core$IFn$_invoke$arity$2 = password_field45411__2;
return password_field45411;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field45411);
/**
* Creates a range input field.
*/
sablono.core.range_field45414 = (function() {
var range_field45414 = null;
var range_field45414__1 = (function (name__21967__auto__){return range_field45414.cljs$core$IFn$_invoke$arity$2(name__21967__auto__,null);
});
var range_field45414__2 = (function (name__21967__auto__,value__21968__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__21967__auto__,value__21968__auto__);
});
range_field45414 = function(name__21967__auto__,value__21968__auto__){
switch(arguments.length){
case 1:
return range_field45414__1.call(this,name__21967__auto__);
case 2:
return range_field45414__2.call(this,name__21967__auto__,value__21968__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field45414.cljs$core$IFn$_invoke$arity$1 = range_field45414__1;
range_field45414.cljs$core$IFn$_invoke$arity$2 = range_field45414__2;
return range_field45414;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field45414);
/**
* Creates a search input field.
*/
sablono.core.search_field45417 = (function() {
var search_field45417 = null;
var search_field45417__1 = (function (name__21967__auto__){return search_field45417.cljs$core$IFn$_invoke$arity$2(name__21967__auto__,null);
});
var search_field45417__2 = (function (name__21967__auto__,value__21968__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__21967__auto__,value__21968__auto__);
});
search_field45417 = function(name__21967__auto__,value__21968__auto__){
switch(arguments.length){
case 1:
return search_field45417__1.call(this,name__21967__auto__);
case 2:
return search_field45417__2.call(this,name__21967__auto__,value__21968__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field45417.cljs$core$IFn$_invoke$arity$1 = search_field45417__1;
search_field45417.cljs$core$IFn$_invoke$arity$2 = search_field45417__2;
return search_field45417;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field45417);
/**
* Creates a tel input field.
*/
sablono.core.tel_field45420 = (function() {
var tel_field45420 = null;
var tel_field45420__1 = (function (name__21967__auto__){return tel_field45420.cljs$core$IFn$_invoke$arity$2(name__21967__auto__,null);
});
var tel_field45420__2 = (function (name__21967__auto__,value__21968__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__21967__auto__,value__21968__auto__);
});
tel_field45420 = function(name__21967__auto__,value__21968__auto__){
switch(arguments.length){
case 1:
return tel_field45420__1.call(this,name__21967__auto__);
case 2:
return tel_field45420__2.call(this,name__21967__auto__,value__21968__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field45420.cljs$core$IFn$_invoke$arity$1 = tel_field45420__1;
tel_field45420.cljs$core$IFn$_invoke$arity$2 = tel_field45420__2;
return tel_field45420;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field45420);
/**
* Creates a text input field.
*/
sablono.core.text_field45423 = (function() {
var text_field45423 = null;
var text_field45423__1 = (function (name__21967__auto__){return text_field45423.cljs$core$IFn$_invoke$arity$2(name__21967__auto__,null);
});
var text_field45423__2 = (function (name__21967__auto__,value__21968__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__21967__auto__,value__21968__auto__);
});
text_field45423 = function(name__21967__auto__,value__21968__auto__){
switch(arguments.length){
case 1:
return text_field45423__1.call(this,name__21967__auto__);
case 2:
return text_field45423__2.call(this,name__21967__auto__,value__21968__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field45423.cljs$core$IFn$_invoke$arity$1 = text_field45423__1;
text_field45423.cljs$core$IFn$_invoke$arity$2 = text_field45423__2;
return text_field45423;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field45423);
/**
* Creates a time input field.
*/
sablono.core.time_field45426 = (function() {
var time_field45426 = null;
var time_field45426__1 = (function (name__21967__auto__){return time_field45426.cljs$core$IFn$_invoke$arity$2(name__21967__auto__,null);
});
var time_field45426__2 = (function (name__21967__auto__,value__21968__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__21967__auto__,value__21968__auto__);
});
time_field45426 = function(name__21967__auto__,value__21968__auto__){
switch(arguments.length){
case 1:
return time_field45426__1.call(this,name__21967__auto__);
case 2:
return time_field45426__2.call(this,name__21967__auto__,value__21968__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field45426.cljs$core$IFn$_invoke$arity$1 = time_field45426__1;
time_field45426.cljs$core$IFn$_invoke$arity$2 = time_field45426__2;
return time_field45426;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field45426);
/**
* Creates a url input field.
*/
sablono.core.url_field45429 = (function() {
var url_field45429 = null;
var url_field45429__1 = (function (name__21967__auto__){return url_field45429.cljs$core$IFn$_invoke$arity$2(name__21967__auto__,null);
});
var url_field45429__2 = (function (name__21967__auto__,value__21968__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__21967__auto__,value__21968__auto__);
});
url_field45429 = function(name__21967__auto__,value__21968__auto__){
switch(arguments.length){
case 1:
return url_field45429__1.call(this,name__21967__auto__);
case 2:
return url_field45429__2.call(this,name__21967__auto__,value__21968__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field45429.cljs$core$IFn$_invoke$arity$1 = url_field45429__1;
url_field45429.cljs$core$IFn$_invoke$arity$2 = url_field45429__2;
return url_field45429;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field45429);
/**
* Creates a week input field.
*/
sablono.core.week_field45432 = (function() {
var week_field45432 = null;
var week_field45432__1 = (function (name__21967__auto__){return week_field45432.cljs$core$IFn$_invoke$arity$2(name__21967__auto__,null);
});
var week_field45432__2 = (function (name__21967__auto__,value__21968__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__21967__auto__,value__21968__auto__);
});
week_field45432 = function(name__21967__auto__,value__21968__auto__){
switch(arguments.length){
case 1:
return week_field45432__1.call(this,name__21967__auto__);
case 2:
return week_field45432__2.call(this,name__21967__auto__,value__21968__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field45432.cljs$core$IFn$_invoke$arity$1 = week_field45432__1;
week_field45432.cljs$core$IFn$_invoke$arity$2 = week_field45432__2;
return week_field45432;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field45432);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box45435 = (function() {
var check_box45435 = null;
var check_box45435__1 = (function (name){return check_box45435.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box45435__2 = (function (name,checked_QMARK_){return check_box45435.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box45435__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box45435 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box45435__1.call(this,name);
case 2:
return check_box45435__2.call(this,name,checked_QMARK_);
case 3:
return check_box45435__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box45435.cljs$core$IFn$_invoke$arity$1 = check_box45435__1;
check_box45435.cljs$core$IFn$_invoke$arity$2 = check_box45435__2;
check_box45435.cljs$core$IFn$_invoke$arity$3 = check_box45435__3;
return check_box45435;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box45435);
/**
* Creates a radio button.
*/
sablono.core.radio_button45441 = (function() {
var radio_button45441 = null;
var radio_button45441__1 = (function (group){return radio_button45441.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button45441__2 = (function (group,checked_QMARK_){return radio_button45441.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button45441__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button45441 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button45441__1.call(this,group);
case 2:
return radio_button45441__2.call(this,group,checked_QMARK_);
case 3:
return radio_button45441__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button45441.cljs$core$IFn$_invoke$arity$1 = radio_button45441__1;
radio_button45441.cljs$core$IFn$_invoke$arity$2 = radio_button45441__2;
radio_button45441.cljs$core$IFn$_invoke$arity$3 = radio_button45441__3;
return radio_button45441;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button45441);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options45447 = (function() {
var select_options45447 = null;
var select_options45447__1 = (function (coll){return select_options45447.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options45447__2 = (function (coll,selected){var iter__20913__auto__ = (function iter__45468(s__45469){return (new cljs.core.LazySeq(null,(function (){var s__45469__$1 = s__45469;while(true){
var temp__4126__auto__ = cljs.core.seq(s__45469__$1);if(temp__4126__auto__)
{var s__45469__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__45469__$2))
{var c__20911__auto__ = cljs.core.chunk_first(s__45469__$2);var size__20912__auto__ = cljs.core.count(c__20911__auto__);var b__45471 = cljs.core.chunk_buffer(size__20912__auto__);if((function (){var i__45470 = (0);while(true){
if((i__45470 < size__20912__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20911__auto__,i__45470);cljs.core.chunk_append(b__45471,((cljs.core.sequential_QMARK_(x))?(function (){var vec__45476 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45476,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45476,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45476,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options45447.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__45478 = (i__45470 + (1));
i__45470 = G__45478;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__45471),iter__45468(cljs.core.chunk_rest(s__45469__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__45471),null);
}
} else
{var x = cljs.core.first(s__45469__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__45477 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45477,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45477,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45477,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options45447.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__45468(cljs.core.rest(s__45469__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20913__auto__(coll);
});
select_options45447 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options45447__1.call(this,coll);
case 2:
return select_options45447__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options45447.cljs$core$IFn$_invoke$arity$1 = select_options45447__1;
select_options45447.cljs$core$IFn$_invoke$arity$2 = select_options45447__2;
return select_options45447;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options45447);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down45479 = (function() {
var drop_down45479 = null;
var drop_down45479__2 = (function (name,options){return drop_down45479.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down45479__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(function (){var G__45485 = options;var G__45486 = selected;return (sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(G__45485,G__45486) : sablono.core.select_options.call(null,G__45485,G__45486));
})()], null);
});
drop_down45479 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down45479__2.call(this,name,options);
case 3:
return drop_down45479__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down45479.cljs$core$IFn$_invoke$arity$2 = drop_down45479__2;
drop_down45479.cljs$core$IFn$_invoke$arity$3 = drop_down45479__3;
return drop_down45479;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down45479);
/**
* Creates a text area element.
*/
sablono.core.text_area45487 = (function() {
var text_area45487 = null;
var text_area45487__1 = (function (name){return text_area45487.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area45487__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area45487 = function(name,value){
switch(arguments.length){
case 1:
return text_area45487__1.call(this,name);
case 2:
return text_area45487__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area45487.cljs$core$IFn$_invoke$arity$1 = text_area45487__1;
text_area45487.cljs$core$IFn$_invoke$arity$2 = text_area45487__2;
return text_area45487;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area45487);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label45490 = (function label45490(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label45490);
/**
* Creates a submit button.
*/
sablono.core.submit_button45491 = (function submit_button45491(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button45491);
/**
* Creates a form reset button.
*/
sablono.core.reset_button45492 = (function reset_button45492(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button45492);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to45493 = (function() { 
var form_to45493__delegate = function (p__45494,body){var vec__45498 = p__45494;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45498,(0),null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45498,(1),null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__45499 = "_method";var G__45500 = method_str;return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2(G__45499,G__45500) : sablono.core.hidden_field.call(null,G__45499,G__45500));
})()], null)),body));
};
var form_to45493 = function (p__45494,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to45493__delegate.call(this,p__45494,body);};
form_to45493.cljs$lang$maxFixedArity = 1;
form_to45493.cljs$lang$applyTo = (function (arglist__45501){
var p__45494 = cljs.core.first(arglist__45501);
var body = cljs.core.rest(arglist__45501);
return form_to45493__delegate(p__45494,body);
});
form_to45493.cljs$core$IFn$_invoke$arity$variadic = form_to45493__delegate;
return form_to45493;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to45493);
//# sourceMappingURL=core.js.map