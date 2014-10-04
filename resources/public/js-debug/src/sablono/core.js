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
var G__36536__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__36535 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36535,(0),null);var body = cljs.core.nthnext(vec__36535,(1));if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__36536 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__36536__delegate.call(this,args);};
G__36536.cljs$lang$maxFixedArity = 0;
G__36536.cljs$lang$applyTo = (function (arglist__36537){
var args = cljs.core.seq(arglist__36537);
return G__36536__delegate(args);
});
G__36536.cljs$core$IFn$_invoke$arity$variadic = G__36536__delegate;
return G__36536;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__20662__auto__ = (function iter__36544(s__36545){return (new cljs.core.LazySeq(null,(function (){var s__36545__$1 = s__36545;while(true){
var temp__4126__auto__ = cljs.core.seq(s__36545__$1);if(temp__4126__auto__)
{var s__36545__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__36545__$2))
{var c__20660__auto__ = cljs.core.chunk_first(s__36545__$2);var size__20661__auto__ = cljs.core.count(c__20660__auto__);var b__36547 = cljs.core.chunk_buffer(size__20661__auto__);if((function (){var i__36546 = (0);while(true){
if((i__36546 < size__20661__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20660__auto__,i__36546);cljs.core.chunk_append(b__36547,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__36550 = (i__36546 + (1));
i__36546 = G__36550;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__36547),iter__36544(cljs.core.chunk_rest(s__36545__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__36547),null);
}
} else
{var args = cljs.core.first(s__36545__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__36544(cljs.core.rest(s__36545__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20662__auto__(arglists);
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
var include_css__delegate = function (styles){var iter__20662__auto__ = (function iter__36557(s__36558){return (new cljs.core.LazySeq(null,(function (){var s__36558__$1 = s__36558;while(true){
var temp__4126__auto__ = cljs.core.seq(s__36558__$1);if(temp__4126__auto__)
{var s__36558__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__36558__$2))
{var c__20660__auto__ = cljs.core.chunk_first(s__36558__$2);var size__20661__auto__ = cljs.core.count(c__20660__auto__);var b__36560 = cljs.core.chunk_buffer(size__20661__auto__);if((function (){var i__36559 = (0);while(true){
if((i__36559 < size__20661__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20660__auto__,i__36559);cljs.core.chunk_append(b__36560,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__36563 = (i__36559 + (1));
i__36559 = G__36563;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__36560),iter__36557(cljs.core.chunk_rest(s__36558__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__36560),null);
}
} else
{var style = cljs.core.first(s__36558__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__36557(cljs.core.rest(s__36558__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20662__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__36564){
var styles = cljs.core.seq(arglist__36564);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){var G__36569 = (function (){return goog.dom.getDocument();
})().body;var G__36570 = (function (){var G__36571 = "script";var G__36572 = {"src": src};return goog.dom.createDom(G__36571,G__36572);
})();return goog.dom.appendChild(G__36569,G__36570);
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
sablono.core.link_to36573 = (function() { 
var link_to36573__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to36573 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to36573__delegate.call(this,url,content);};
link_to36573.cljs$lang$maxFixedArity = 1;
link_to36573.cljs$lang$applyTo = (function (arglist__36574){
var url = cljs.core.first(arglist__36574);
var content = cljs.core.rest(arglist__36574);
return link_to36573__delegate(url,content);
});
link_to36573.cljs$core$IFn$_invoke$arity$variadic = link_to36573__delegate;
return link_to36573;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to36573);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to36575 = (function() { 
var mail_to36575__delegate = function (e_mail,p__36576){var vec__36578 = p__36576;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36578,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__19267__auto__ = content;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to36575 = function (e_mail,var_args){
var p__36576 = null;if (arguments.length > 1) {
  p__36576 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to36575__delegate.call(this,e_mail,p__36576);};
mail_to36575.cljs$lang$maxFixedArity = 1;
mail_to36575.cljs$lang$applyTo = (function (arglist__36579){
var e_mail = cljs.core.first(arglist__36579);
var p__36576 = cljs.core.rest(arglist__36579);
return mail_to36575__delegate(e_mail,p__36576);
});
mail_to36575.cljs$core$IFn$_invoke$arity$variadic = mail_to36575__delegate;
return mail_to36575;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to36575);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list36580 = (function unordered_list36580(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__20662__auto__ = (function iter__36587(s__36588){return (new cljs.core.LazySeq(null,(function (){var s__36588__$1 = s__36588;while(true){
var temp__4126__auto__ = cljs.core.seq(s__36588__$1);if(temp__4126__auto__)
{var s__36588__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__36588__$2))
{var c__20660__auto__ = cljs.core.chunk_first(s__36588__$2);var size__20661__auto__ = cljs.core.count(c__20660__auto__);var b__36590 = cljs.core.chunk_buffer(size__20661__auto__);if((function (){var i__36589 = (0);while(true){
if((i__36589 < size__20661__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20660__auto__,i__36589);cljs.core.chunk_append(b__36590,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__36593 = (i__36589 + (1));
i__36589 = G__36593;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__36590),iter__36587(cljs.core.chunk_rest(s__36588__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__36590),null);
}
} else
{var x = cljs.core.first(s__36588__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__36587(cljs.core.rest(s__36588__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20662__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list36580);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list36594 = (function ordered_list36594(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__20662__auto__ = (function iter__36601(s__36602){return (new cljs.core.LazySeq(null,(function (){var s__36602__$1 = s__36602;while(true){
var temp__4126__auto__ = cljs.core.seq(s__36602__$1);if(temp__4126__auto__)
{var s__36602__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__36602__$2))
{var c__20660__auto__ = cljs.core.chunk_first(s__36602__$2);var size__20661__auto__ = cljs.core.count(c__20660__auto__);var b__36604 = cljs.core.chunk_buffer(size__20661__auto__);if((function (){var i__36603 = (0);while(true){
if((i__36603 < size__20661__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20660__auto__,i__36603);cljs.core.chunk_append(b__36604,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__36607 = (i__36603 + (1));
i__36603 = G__36607;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__36604),iter__36601(cljs.core.chunk_rest(s__36602__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__36604),null);
}
} else
{var x = cljs.core.first(s__36602__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__36601(cljs.core.rest(s__36602__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20662__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list36594);
/**
* Create an image element.
*/
sablono.core.image36608 = (function() {
var image36608 = null;
var image36608__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image36608__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image36608 = function(src,alt){
switch(arguments.length){
case 1:
return image36608__1.call(this,src);
case 2:
return image36608__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image36608.cljs$core$IFn$_invoke$arity$1 = image36608__1;
image36608.cljs$core$IFn$_invoke$arity$2 = image36608__2;
return image36608;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image36608);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__36609_SHARP_,p2__36610_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36609_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__36610_SHARP_)+"]");
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__36611_SHARP_,p2__36612_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36611_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__36612_SHARP_));
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
sablono.core.color_field36613 = (function() {
var color_field36613 = null;
var color_field36613__1 = (function (name__21519__auto__){return color_field36613.cljs$core$IFn$_invoke$arity$2(name__21519__auto__,null);
});
var color_field36613__2 = (function (name__21519__auto__,value__21520__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__21519__auto__,value__21520__auto__);
});
color_field36613 = function(name__21519__auto__,value__21520__auto__){
switch(arguments.length){
case 1:
return color_field36613__1.call(this,name__21519__auto__);
case 2:
return color_field36613__2.call(this,name__21519__auto__,value__21520__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field36613.cljs$core$IFn$_invoke$arity$1 = color_field36613__1;
color_field36613.cljs$core$IFn$_invoke$arity$2 = color_field36613__2;
return color_field36613;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field36613);
/**
* Creates a date input field.
*/
sablono.core.date_field36616 = (function() {
var date_field36616 = null;
var date_field36616__1 = (function (name__21519__auto__){return date_field36616.cljs$core$IFn$_invoke$arity$2(name__21519__auto__,null);
});
var date_field36616__2 = (function (name__21519__auto__,value__21520__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__21519__auto__,value__21520__auto__);
});
date_field36616 = function(name__21519__auto__,value__21520__auto__){
switch(arguments.length){
case 1:
return date_field36616__1.call(this,name__21519__auto__);
case 2:
return date_field36616__2.call(this,name__21519__auto__,value__21520__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field36616.cljs$core$IFn$_invoke$arity$1 = date_field36616__1;
date_field36616.cljs$core$IFn$_invoke$arity$2 = date_field36616__2;
return date_field36616;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field36616);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field36619 = (function() {
var datetime_field36619 = null;
var datetime_field36619__1 = (function (name__21519__auto__){return datetime_field36619.cljs$core$IFn$_invoke$arity$2(name__21519__auto__,null);
});
var datetime_field36619__2 = (function (name__21519__auto__,value__21520__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__21519__auto__,value__21520__auto__);
});
datetime_field36619 = function(name__21519__auto__,value__21520__auto__){
switch(arguments.length){
case 1:
return datetime_field36619__1.call(this,name__21519__auto__);
case 2:
return datetime_field36619__2.call(this,name__21519__auto__,value__21520__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field36619.cljs$core$IFn$_invoke$arity$1 = datetime_field36619__1;
datetime_field36619.cljs$core$IFn$_invoke$arity$2 = datetime_field36619__2;
return datetime_field36619;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field36619);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field36622 = (function() {
var datetime_local_field36622 = null;
var datetime_local_field36622__1 = (function (name__21519__auto__){return datetime_local_field36622.cljs$core$IFn$_invoke$arity$2(name__21519__auto__,null);
});
var datetime_local_field36622__2 = (function (name__21519__auto__,value__21520__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__21519__auto__,value__21520__auto__);
});
datetime_local_field36622 = function(name__21519__auto__,value__21520__auto__){
switch(arguments.length){
case 1:
return datetime_local_field36622__1.call(this,name__21519__auto__);
case 2:
return datetime_local_field36622__2.call(this,name__21519__auto__,value__21520__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field36622.cljs$core$IFn$_invoke$arity$1 = datetime_local_field36622__1;
datetime_local_field36622.cljs$core$IFn$_invoke$arity$2 = datetime_local_field36622__2;
return datetime_local_field36622;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field36622);
/**
* Creates a email input field.
*/
sablono.core.email_field36625 = (function() {
var email_field36625 = null;
var email_field36625__1 = (function (name__21519__auto__){return email_field36625.cljs$core$IFn$_invoke$arity$2(name__21519__auto__,null);
});
var email_field36625__2 = (function (name__21519__auto__,value__21520__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__21519__auto__,value__21520__auto__);
});
email_field36625 = function(name__21519__auto__,value__21520__auto__){
switch(arguments.length){
case 1:
return email_field36625__1.call(this,name__21519__auto__);
case 2:
return email_field36625__2.call(this,name__21519__auto__,value__21520__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field36625.cljs$core$IFn$_invoke$arity$1 = email_field36625__1;
email_field36625.cljs$core$IFn$_invoke$arity$2 = email_field36625__2;
return email_field36625;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field36625);
/**
* Creates a file input field.
*/
sablono.core.file_field36628 = (function() {
var file_field36628 = null;
var file_field36628__1 = (function (name__21519__auto__){return file_field36628.cljs$core$IFn$_invoke$arity$2(name__21519__auto__,null);
});
var file_field36628__2 = (function (name__21519__auto__,value__21520__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__21519__auto__,value__21520__auto__);
});
file_field36628 = function(name__21519__auto__,value__21520__auto__){
switch(arguments.length){
case 1:
return file_field36628__1.call(this,name__21519__auto__);
case 2:
return file_field36628__2.call(this,name__21519__auto__,value__21520__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field36628.cljs$core$IFn$_invoke$arity$1 = file_field36628__1;
file_field36628.cljs$core$IFn$_invoke$arity$2 = file_field36628__2;
return file_field36628;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field36628);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field36631 = (function() {
var hidden_field36631 = null;
var hidden_field36631__1 = (function (name__21519__auto__){return hidden_field36631.cljs$core$IFn$_invoke$arity$2(name__21519__auto__,null);
});
var hidden_field36631__2 = (function (name__21519__auto__,value__21520__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__21519__auto__,value__21520__auto__);
});
hidden_field36631 = function(name__21519__auto__,value__21520__auto__){
switch(arguments.length){
case 1:
return hidden_field36631__1.call(this,name__21519__auto__);
case 2:
return hidden_field36631__2.call(this,name__21519__auto__,value__21520__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field36631.cljs$core$IFn$_invoke$arity$1 = hidden_field36631__1;
hidden_field36631.cljs$core$IFn$_invoke$arity$2 = hidden_field36631__2;
return hidden_field36631;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field36631);
/**
* Creates a month input field.
*/
sablono.core.month_field36634 = (function() {
var month_field36634 = null;
var month_field36634__1 = (function (name__21519__auto__){return month_field36634.cljs$core$IFn$_invoke$arity$2(name__21519__auto__,null);
});
var month_field36634__2 = (function (name__21519__auto__,value__21520__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__21519__auto__,value__21520__auto__);
});
month_field36634 = function(name__21519__auto__,value__21520__auto__){
switch(arguments.length){
case 1:
return month_field36634__1.call(this,name__21519__auto__);
case 2:
return month_field36634__2.call(this,name__21519__auto__,value__21520__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field36634.cljs$core$IFn$_invoke$arity$1 = month_field36634__1;
month_field36634.cljs$core$IFn$_invoke$arity$2 = month_field36634__2;
return month_field36634;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field36634);
/**
* Creates a number input field.
*/
sablono.core.number_field36637 = (function() {
var number_field36637 = null;
var number_field36637__1 = (function (name__21519__auto__){return number_field36637.cljs$core$IFn$_invoke$arity$2(name__21519__auto__,null);
});
var number_field36637__2 = (function (name__21519__auto__,value__21520__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__21519__auto__,value__21520__auto__);
});
number_field36637 = function(name__21519__auto__,value__21520__auto__){
switch(arguments.length){
case 1:
return number_field36637__1.call(this,name__21519__auto__);
case 2:
return number_field36637__2.call(this,name__21519__auto__,value__21520__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field36637.cljs$core$IFn$_invoke$arity$1 = number_field36637__1;
number_field36637.cljs$core$IFn$_invoke$arity$2 = number_field36637__2;
return number_field36637;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field36637);
/**
* Creates a password input field.
*/
sablono.core.password_field36640 = (function() {
var password_field36640 = null;
var password_field36640__1 = (function (name__21519__auto__){return password_field36640.cljs$core$IFn$_invoke$arity$2(name__21519__auto__,null);
});
var password_field36640__2 = (function (name__21519__auto__,value__21520__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__21519__auto__,value__21520__auto__);
});
password_field36640 = function(name__21519__auto__,value__21520__auto__){
switch(arguments.length){
case 1:
return password_field36640__1.call(this,name__21519__auto__);
case 2:
return password_field36640__2.call(this,name__21519__auto__,value__21520__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field36640.cljs$core$IFn$_invoke$arity$1 = password_field36640__1;
password_field36640.cljs$core$IFn$_invoke$arity$2 = password_field36640__2;
return password_field36640;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field36640);
/**
* Creates a range input field.
*/
sablono.core.range_field36643 = (function() {
var range_field36643 = null;
var range_field36643__1 = (function (name__21519__auto__){return range_field36643.cljs$core$IFn$_invoke$arity$2(name__21519__auto__,null);
});
var range_field36643__2 = (function (name__21519__auto__,value__21520__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__21519__auto__,value__21520__auto__);
});
range_field36643 = function(name__21519__auto__,value__21520__auto__){
switch(arguments.length){
case 1:
return range_field36643__1.call(this,name__21519__auto__);
case 2:
return range_field36643__2.call(this,name__21519__auto__,value__21520__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field36643.cljs$core$IFn$_invoke$arity$1 = range_field36643__1;
range_field36643.cljs$core$IFn$_invoke$arity$2 = range_field36643__2;
return range_field36643;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field36643);
/**
* Creates a search input field.
*/
sablono.core.search_field36646 = (function() {
var search_field36646 = null;
var search_field36646__1 = (function (name__21519__auto__){return search_field36646.cljs$core$IFn$_invoke$arity$2(name__21519__auto__,null);
});
var search_field36646__2 = (function (name__21519__auto__,value__21520__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__21519__auto__,value__21520__auto__);
});
search_field36646 = function(name__21519__auto__,value__21520__auto__){
switch(arguments.length){
case 1:
return search_field36646__1.call(this,name__21519__auto__);
case 2:
return search_field36646__2.call(this,name__21519__auto__,value__21520__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field36646.cljs$core$IFn$_invoke$arity$1 = search_field36646__1;
search_field36646.cljs$core$IFn$_invoke$arity$2 = search_field36646__2;
return search_field36646;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field36646);
/**
* Creates a tel input field.
*/
sablono.core.tel_field36649 = (function() {
var tel_field36649 = null;
var tel_field36649__1 = (function (name__21519__auto__){return tel_field36649.cljs$core$IFn$_invoke$arity$2(name__21519__auto__,null);
});
var tel_field36649__2 = (function (name__21519__auto__,value__21520__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__21519__auto__,value__21520__auto__);
});
tel_field36649 = function(name__21519__auto__,value__21520__auto__){
switch(arguments.length){
case 1:
return tel_field36649__1.call(this,name__21519__auto__);
case 2:
return tel_field36649__2.call(this,name__21519__auto__,value__21520__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field36649.cljs$core$IFn$_invoke$arity$1 = tel_field36649__1;
tel_field36649.cljs$core$IFn$_invoke$arity$2 = tel_field36649__2;
return tel_field36649;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field36649);
/**
* Creates a text input field.
*/
sablono.core.text_field36652 = (function() {
var text_field36652 = null;
var text_field36652__1 = (function (name__21519__auto__){return text_field36652.cljs$core$IFn$_invoke$arity$2(name__21519__auto__,null);
});
var text_field36652__2 = (function (name__21519__auto__,value__21520__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__21519__auto__,value__21520__auto__);
});
text_field36652 = function(name__21519__auto__,value__21520__auto__){
switch(arguments.length){
case 1:
return text_field36652__1.call(this,name__21519__auto__);
case 2:
return text_field36652__2.call(this,name__21519__auto__,value__21520__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field36652.cljs$core$IFn$_invoke$arity$1 = text_field36652__1;
text_field36652.cljs$core$IFn$_invoke$arity$2 = text_field36652__2;
return text_field36652;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field36652);
/**
* Creates a time input field.
*/
sablono.core.time_field36655 = (function() {
var time_field36655 = null;
var time_field36655__1 = (function (name__21519__auto__){return time_field36655.cljs$core$IFn$_invoke$arity$2(name__21519__auto__,null);
});
var time_field36655__2 = (function (name__21519__auto__,value__21520__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__21519__auto__,value__21520__auto__);
});
time_field36655 = function(name__21519__auto__,value__21520__auto__){
switch(arguments.length){
case 1:
return time_field36655__1.call(this,name__21519__auto__);
case 2:
return time_field36655__2.call(this,name__21519__auto__,value__21520__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field36655.cljs$core$IFn$_invoke$arity$1 = time_field36655__1;
time_field36655.cljs$core$IFn$_invoke$arity$2 = time_field36655__2;
return time_field36655;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field36655);
/**
* Creates a url input field.
*/
sablono.core.url_field36658 = (function() {
var url_field36658 = null;
var url_field36658__1 = (function (name__21519__auto__){return url_field36658.cljs$core$IFn$_invoke$arity$2(name__21519__auto__,null);
});
var url_field36658__2 = (function (name__21519__auto__,value__21520__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__21519__auto__,value__21520__auto__);
});
url_field36658 = function(name__21519__auto__,value__21520__auto__){
switch(arguments.length){
case 1:
return url_field36658__1.call(this,name__21519__auto__);
case 2:
return url_field36658__2.call(this,name__21519__auto__,value__21520__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field36658.cljs$core$IFn$_invoke$arity$1 = url_field36658__1;
url_field36658.cljs$core$IFn$_invoke$arity$2 = url_field36658__2;
return url_field36658;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field36658);
/**
* Creates a week input field.
*/
sablono.core.week_field36661 = (function() {
var week_field36661 = null;
var week_field36661__1 = (function (name__21519__auto__){return week_field36661.cljs$core$IFn$_invoke$arity$2(name__21519__auto__,null);
});
var week_field36661__2 = (function (name__21519__auto__,value__21520__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__21519__auto__,value__21520__auto__);
});
week_field36661 = function(name__21519__auto__,value__21520__auto__){
switch(arguments.length){
case 1:
return week_field36661__1.call(this,name__21519__auto__);
case 2:
return week_field36661__2.call(this,name__21519__auto__,value__21520__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field36661.cljs$core$IFn$_invoke$arity$1 = week_field36661__1;
week_field36661.cljs$core$IFn$_invoke$arity$2 = week_field36661__2;
return week_field36661;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field36661);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box36664 = (function() {
var check_box36664 = null;
var check_box36664__1 = (function (name){return check_box36664.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box36664__2 = (function (name,checked_QMARK_){return check_box36664.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box36664__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box36664 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box36664__1.call(this,name);
case 2:
return check_box36664__2.call(this,name,checked_QMARK_);
case 3:
return check_box36664__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box36664.cljs$core$IFn$_invoke$arity$1 = check_box36664__1;
check_box36664.cljs$core$IFn$_invoke$arity$2 = check_box36664__2;
check_box36664.cljs$core$IFn$_invoke$arity$3 = check_box36664__3;
return check_box36664;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box36664);
/**
* Creates a radio button.
*/
sablono.core.radio_button36670 = (function() {
var radio_button36670 = null;
var radio_button36670__1 = (function (group){return radio_button36670.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button36670__2 = (function (group,checked_QMARK_){return radio_button36670.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button36670__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button36670 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button36670__1.call(this,group);
case 2:
return radio_button36670__2.call(this,group,checked_QMARK_);
case 3:
return radio_button36670__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button36670.cljs$core$IFn$_invoke$arity$1 = radio_button36670__1;
radio_button36670.cljs$core$IFn$_invoke$arity$2 = radio_button36670__2;
radio_button36670.cljs$core$IFn$_invoke$arity$3 = radio_button36670__3;
return radio_button36670;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button36670);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options36676 = (function() {
var select_options36676 = null;
var select_options36676__1 = (function (coll){return select_options36676.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options36676__2 = (function (coll,selected){var iter__20662__auto__ = (function iter__36697(s__36698){return (new cljs.core.LazySeq(null,(function (){var s__36698__$1 = s__36698;while(true){
var temp__4126__auto__ = cljs.core.seq(s__36698__$1);if(temp__4126__auto__)
{var s__36698__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__36698__$2))
{var c__20660__auto__ = cljs.core.chunk_first(s__36698__$2);var size__20661__auto__ = cljs.core.count(c__20660__auto__);var b__36700 = cljs.core.chunk_buffer(size__20661__auto__);if((function (){var i__36699 = (0);while(true){
if((i__36699 < size__20661__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20660__auto__,i__36699);cljs.core.chunk_append(b__36700,((cljs.core.sequential_QMARK_(x))?(function (){var vec__36705 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36705,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36705,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36705,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options36676.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__36707 = (i__36699 + (1));
i__36699 = G__36707;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__36700),iter__36697(cljs.core.chunk_rest(s__36698__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__36700),null);
}
} else
{var x = cljs.core.first(s__36698__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__36706 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36706,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36706,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36706,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options36676.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__36697(cljs.core.rest(s__36698__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20662__auto__(coll);
});
select_options36676 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options36676__1.call(this,coll);
case 2:
return select_options36676__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options36676.cljs$core$IFn$_invoke$arity$1 = select_options36676__1;
select_options36676.cljs$core$IFn$_invoke$arity$2 = select_options36676__2;
return select_options36676;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options36676);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down36708 = (function() {
var drop_down36708 = null;
var drop_down36708__2 = (function (name,options){return drop_down36708.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down36708__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(function (){var G__36714 = options;var G__36715 = selected;return (sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(G__36714,G__36715) : sablono.core.select_options.call(null,G__36714,G__36715));
})()], null);
});
drop_down36708 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down36708__2.call(this,name,options);
case 3:
return drop_down36708__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down36708.cljs$core$IFn$_invoke$arity$2 = drop_down36708__2;
drop_down36708.cljs$core$IFn$_invoke$arity$3 = drop_down36708__3;
return drop_down36708;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down36708);
/**
* Creates a text area element.
*/
sablono.core.text_area36716 = (function() {
var text_area36716 = null;
var text_area36716__1 = (function (name){return text_area36716.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area36716__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area36716 = function(name,value){
switch(arguments.length){
case 1:
return text_area36716__1.call(this,name);
case 2:
return text_area36716__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area36716.cljs$core$IFn$_invoke$arity$1 = text_area36716__1;
text_area36716.cljs$core$IFn$_invoke$arity$2 = text_area36716__2;
return text_area36716;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area36716);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label36719 = (function label36719(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label36719);
/**
* Creates a submit button.
*/
sablono.core.submit_button36720 = (function submit_button36720(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button36720);
/**
* Creates a form reset button.
*/
sablono.core.reset_button36721 = (function reset_button36721(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button36721);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to36722 = (function() { 
var form_to36722__delegate = function (p__36723,body){var vec__36727 = p__36723;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36727,(0),null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36727,(1),null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__36728 = "_method";var G__36729 = method_str;return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2(G__36728,G__36729) : sablono.core.hidden_field.call(null,G__36728,G__36729));
})()], null)),body));
};
var form_to36722 = function (p__36723,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to36722__delegate.call(this,p__36723,body);};
form_to36722.cljs$lang$maxFixedArity = 1;
form_to36722.cljs$lang$applyTo = (function (arglist__36730){
var p__36723 = cljs.core.first(arglist__36730);
var body = cljs.core.rest(arglist__36730);
return form_to36722__delegate(p__36723,body);
});
form_to36722.cljs$core$IFn$_invoke$arity$variadic = form_to36722__delegate;
return form_to36722;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to36722);
//# sourceMappingURL=core.js.map