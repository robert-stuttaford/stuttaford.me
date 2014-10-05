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
var G__47170__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__47169 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47169,(0),null);var body = cljs.core.nthnext(vec__47169,(1));if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__47170 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__47170__delegate.call(this,args);};
G__47170.cljs$lang$maxFixedArity = 0;
G__47170.cljs$lang$applyTo = (function (arglist__47171){
var args = cljs.core.seq(arglist__47171);
return G__47170__delegate(args);
});
G__47170.cljs$core$IFn$_invoke$arity$variadic = G__47170__delegate;
return G__47170;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__20684__auto__ = (function iter__47178(s__47179){return (new cljs.core.LazySeq(null,(function (){var s__47179__$1 = s__47179;while(true){
var temp__4126__auto__ = cljs.core.seq(s__47179__$1);if(temp__4126__auto__)
{var s__47179__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__47179__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__47179__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__47181 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__47180 = (0);while(true){
if((i__47180 < size__20683__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__47180);cljs.core.chunk_append(b__47181,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__47184 = (i__47180 + (1));
i__47180 = G__47184;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__47181),iter__47178(cljs.core.chunk_rest(s__47179__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__47181),null);
}
} else
{var args = cljs.core.first(s__47179__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__47178(cljs.core.rest(s__47179__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20684__auto__(arglists);
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
var include_css__delegate = function (styles){var iter__20684__auto__ = (function iter__47191(s__47192){return (new cljs.core.LazySeq(null,(function (){var s__47192__$1 = s__47192;while(true){
var temp__4126__auto__ = cljs.core.seq(s__47192__$1);if(temp__4126__auto__)
{var s__47192__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__47192__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__47192__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__47194 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__47193 = (0);while(true){
if((i__47193 < size__20683__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__47193);cljs.core.chunk_append(b__47194,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__47197 = (i__47193 + (1));
i__47193 = G__47197;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__47194),iter__47191(cljs.core.chunk_rest(s__47192__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__47194),null);
}
} else
{var style = cljs.core.first(s__47192__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__47191(cljs.core.rest(s__47192__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20684__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__47198){
var styles = cljs.core.seq(arglist__47198);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){var G__47203 = (function (){return goog.dom.getDocument();
})().body;var G__47204 = (function (){var G__47205 = "script";var G__47206 = {"src": src};return goog.dom.createDom(G__47205,G__47206);
})();return goog.dom.appendChild(G__47203,G__47204);
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
sablono.core.link_to47207 = (function() { 
var link_to47207__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to47207 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to47207__delegate.call(this,url,content);};
link_to47207.cljs$lang$maxFixedArity = 1;
link_to47207.cljs$lang$applyTo = (function (arglist__47208){
var url = cljs.core.first(arglist__47208);
var content = cljs.core.rest(arglist__47208);
return link_to47207__delegate(url,content);
});
link_to47207.cljs$core$IFn$_invoke$arity$variadic = link_to47207__delegate;
return link_to47207;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to47207);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to47209 = (function() { 
var mail_to47209__delegate = function (e_mail,p__47210){var vec__47212 = p__47210;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47212,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__19289__auto__ = content;if(cljs.core.truth_(or__19289__auto__))
{return or__19289__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to47209 = function (e_mail,var_args){
var p__47210 = null;if (arguments.length > 1) {
  p__47210 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to47209__delegate.call(this,e_mail,p__47210);};
mail_to47209.cljs$lang$maxFixedArity = 1;
mail_to47209.cljs$lang$applyTo = (function (arglist__47213){
var e_mail = cljs.core.first(arglist__47213);
var p__47210 = cljs.core.rest(arglist__47213);
return mail_to47209__delegate(e_mail,p__47210);
});
mail_to47209.cljs$core$IFn$_invoke$arity$variadic = mail_to47209__delegate;
return mail_to47209;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to47209);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list47214 = (function unordered_list47214(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__20684__auto__ = (function iter__47221(s__47222){return (new cljs.core.LazySeq(null,(function (){var s__47222__$1 = s__47222;while(true){
var temp__4126__auto__ = cljs.core.seq(s__47222__$1);if(temp__4126__auto__)
{var s__47222__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__47222__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__47222__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__47224 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__47223 = (0);while(true){
if((i__47223 < size__20683__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__47223);cljs.core.chunk_append(b__47224,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__47227 = (i__47223 + (1));
i__47223 = G__47227;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__47224),iter__47221(cljs.core.chunk_rest(s__47222__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__47224),null);
}
} else
{var x = cljs.core.first(s__47222__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__47221(cljs.core.rest(s__47222__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20684__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list47214);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list47228 = (function ordered_list47228(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__20684__auto__ = (function iter__47235(s__47236){return (new cljs.core.LazySeq(null,(function (){var s__47236__$1 = s__47236;while(true){
var temp__4126__auto__ = cljs.core.seq(s__47236__$1);if(temp__4126__auto__)
{var s__47236__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__47236__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__47236__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__47238 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__47237 = (0);while(true){
if((i__47237 < size__20683__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__47237);cljs.core.chunk_append(b__47238,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__47241 = (i__47237 + (1));
i__47237 = G__47241;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__47238),iter__47235(cljs.core.chunk_rest(s__47236__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__47238),null);
}
} else
{var x = cljs.core.first(s__47236__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__47235(cljs.core.rest(s__47236__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20684__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list47228);
/**
* Create an image element.
*/
sablono.core.image47242 = (function() {
var image47242 = null;
var image47242__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image47242__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image47242 = function(src,alt){
switch(arguments.length){
case 1:
return image47242__1.call(this,src);
case 2:
return image47242__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image47242.cljs$core$IFn$_invoke$arity$1 = image47242__1;
image47242.cljs$core$IFn$_invoke$arity$2 = image47242__2;
return image47242;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image47242);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__47243_SHARP_,p2__47244_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47243_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__47244_SHARP_)+"]");
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__47245_SHARP_,p2__47246_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47245_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__47246_SHARP_));
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
sablono.core.color_field47247 = (function() {
var color_field47247 = null;
var color_field47247__1 = (function (name__21509__auto__){return color_field47247.cljs$core$IFn$_invoke$arity$2(name__21509__auto__,null);
});
var color_field47247__2 = (function (name__21509__auto__,value__21510__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__21509__auto__,value__21510__auto__);
});
color_field47247 = function(name__21509__auto__,value__21510__auto__){
switch(arguments.length){
case 1:
return color_field47247__1.call(this,name__21509__auto__);
case 2:
return color_field47247__2.call(this,name__21509__auto__,value__21510__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field47247.cljs$core$IFn$_invoke$arity$1 = color_field47247__1;
color_field47247.cljs$core$IFn$_invoke$arity$2 = color_field47247__2;
return color_field47247;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field47247);
/**
* Creates a date input field.
*/
sablono.core.date_field47250 = (function() {
var date_field47250 = null;
var date_field47250__1 = (function (name__21509__auto__){return date_field47250.cljs$core$IFn$_invoke$arity$2(name__21509__auto__,null);
});
var date_field47250__2 = (function (name__21509__auto__,value__21510__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__21509__auto__,value__21510__auto__);
});
date_field47250 = function(name__21509__auto__,value__21510__auto__){
switch(arguments.length){
case 1:
return date_field47250__1.call(this,name__21509__auto__);
case 2:
return date_field47250__2.call(this,name__21509__auto__,value__21510__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field47250.cljs$core$IFn$_invoke$arity$1 = date_field47250__1;
date_field47250.cljs$core$IFn$_invoke$arity$2 = date_field47250__2;
return date_field47250;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field47250);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field47253 = (function() {
var datetime_field47253 = null;
var datetime_field47253__1 = (function (name__21509__auto__){return datetime_field47253.cljs$core$IFn$_invoke$arity$2(name__21509__auto__,null);
});
var datetime_field47253__2 = (function (name__21509__auto__,value__21510__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__21509__auto__,value__21510__auto__);
});
datetime_field47253 = function(name__21509__auto__,value__21510__auto__){
switch(arguments.length){
case 1:
return datetime_field47253__1.call(this,name__21509__auto__);
case 2:
return datetime_field47253__2.call(this,name__21509__auto__,value__21510__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field47253.cljs$core$IFn$_invoke$arity$1 = datetime_field47253__1;
datetime_field47253.cljs$core$IFn$_invoke$arity$2 = datetime_field47253__2;
return datetime_field47253;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field47253);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field47256 = (function() {
var datetime_local_field47256 = null;
var datetime_local_field47256__1 = (function (name__21509__auto__){return datetime_local_field47256.cljs$core$IFn$_invoke$arity$2(name__21509__auto__,null);
});
var datetime_local_field47256__2 = (function (name__21509__auto__,value__21510__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__21509__auto__,value__21510__auto__);
});
datetime_local_field47256 = function(name__21509__auto__,value__21510__auto__){
switch(arguments.length){
case 1:
return datetime_local_field47256__1.call(this,name__21509__auto__);
case 2:
return datetime_local_field47256__2.call(this,name__21509__auto__,value__21510__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field47256.cljs$core$IFn$_invoke$arity$1 = datetime_local_field47256__1;
datetime_local_field47256.cljs$core$IFn$_invoke$arity$2 = datetime_local_field47256__2;
return datetime_local_field47256;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field47256);
/**
* Creates a email input field.
*/
sablono.core.email_field47259 = (function() {
var email_field47259 = null;
var email_field47259__1 = (function (name__21509__auto__){return email_field47259.cljs$core$IFn$_invoke$arity$2(name__21509__auto__,null);
});
var email_field47259__2 = (function (name__21509__auto__,value__21510__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__21509__auto__,value__21510__auto__);
});
email_field47259 = function(name__21509__auto__,value__21510__auto__){
switch(arguments.length){
case 1:
return email_field47259__1.call(this,name__21509__auto__);
case 2:
return email_field47259__2.call(this,name__21509__auto__,value__21510__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field47259.cljs$core$IFn$_invoke$arity$1 = email_field47259__1;
email_field47259.cljs$core$IFn$_invoke$arity$2 = email_field47259__2;
return email_field47259;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field47259);
/**
* Creates a file input field.
*/
sablono.core.file_field47262 = (function() {
var file_field47262 = null;
var file_field47262__1 = (function (name__21509__auto__){return file_field47262.cljs$core$IFn$_invoke$arity$2(name__21509__auto__,null);
});
var file_field47262__2 = (function (name__21509__auto__,value__21510__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__21509__auto__,value__21510__auto__);
});
file_field47262 = function(name__21509__auto__,value__21510__auto__){
switch(arguments.length){
case 1:
return file_field47262__1.call(this,name__21509__auto__);
case 2:
return file_field47262__2.call(this,name__21509__auto__,value__21510__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field47262.cljs$core$IFn$_invoke$arity$1 = file_field47262__1;
file_field47262.cljs$core$IFn$_invoke$arity$2 = file_field47262__2;
return file_field47262;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field47262);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field47265 = (function() {
var hidden_field47265 = null;
var hidden_field47265__1 = (function (name__21509__auto__){return hidden_field47265.cljs$core$IFn$_invoke$arity$2(name__21509__auto__,null);
});
var hidden_field47265__2 = (function (name__21509__auto__,value__21510__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__21509__auto__,value__21510__auto__);
});
hidden_field47265 = function(name__21509__auto__,value__21510__auto__){
switch(arguments.length){
case 1:
return hidden_field47265__1.call(this,name__21509__auto__);
case 2:
return hidden_field47265__2.call(this,name__21509__auto__,value__21510__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field47265.cljs$core$IFn$_invoke$arity$1 = hidden_field47265__1;
hidden_field47265.cljs$core$IFn$_invoke$arity$2 = hidden_field47265__2;
return hidden_field47265;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field47265);
/**
* Creates a month input field.
*/
sablono.core.month_field47268 = (function() {
var month_field47268 = null;
var month_field47268__1 = (function (name__21509__auto__){return month_field47268.cljs$core$IFn$_invoke$arity$2(name__21509__auto__,null);
});
var month_field47268__2 = (function (name__21509__auto__,value__21510__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__21509__auto__,value__21510__auto__);
});
month_field47268 = function(name__21509__auto__,value__21510__auto__){
switch(arguments.length){
case 1:
return month_field47268__1.call(this,name__21509__auto__);
case 2:
return month_field47268__2.call(this,name__21509__auto__,value__21510__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field47268.cljs$core$IFn$_invoke$arity$1 = month_field47268__1;
month_field47268.cljs$core$IFn$_invoke$arity$2 = month_field47268__2;
return month_field47268;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field47268);
/**
* Creates a number input field.
*/
sablono.core.number_field47271 = (function() {
var number_field47271 = null;
var number_field47271__1 = (function (name__21509__auto__){return number_field47271.cljs$core$IFn$_invoke$arity$2(name__21509__auto__,null);
});
var number_field47271__2 = (function (name__21509__auto__,value__21510__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__21509__auto__,value__21510__auto__);
});
number_field47271 = function(name__21509__auto__,value__21510__auto__){
switch(arguments.length){
case 1:
return number_field47271__1.call(this,name__21509__auto__);
case 2:
return number_field47271__2.call(this,name__21509__auto__,value__21510__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field47271.cljs$core$IFn$_invoke$arity$1 = number_field47271__1;
number_field47271.cljs$core$IFn$_invoke$arity$2 = number_field47271__2;
return number_field47271;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field47271);
/**
* Creates a password input field.
*/
sablono.core.password_field47274 = (function() {
var password_field47274 = null;
var password_field47274__1 = (function (name__21509__auto__){return password_field47274.cljs$core$IFn$_invoke$arity$2(name__21509__auto__,null);
});
var password_field47274__2 = (function (name__21509__auto__,value__21510__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__21509__auto__,value__21510__auto__);
});
password_field47274 = function(name__21509__auto__,value__21510__auto__){
switch(arguments.length){
case 1:
return password_field47274__1.call(this,name__21509__auto__);
case 2:
return password_field47274__2.call(this,name__21509__auto__,value__21510__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field47274.cljs$core$IFn$_invoke$arity$1 = password_field47274__1;
password_field47274.cljs$core$IFn$_invoke$arity$2 = password_field47274__2;
return password_field47274;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field47274);
/**
* Creates a range input field.
*/
sablono.core.range_field47277 = (function() {
var range_field47277 = null;
var range_field47277__1 = (function (name__21509__auto__){return range_field47277.cljs$core$IFn$_invoke$arity$2(name__21509__auto__,null);
});
var range_field47277__2 = (function (name__21509__auto__,value__21510__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__21509__auto__,value__21510__auto__);
});
range_field47277 = function(name__21509__auto__,value__21510__auto__){
switch(arguments.length){
case 1:
return range_field47277__1.call(this,name__21509__auto__);
case 2:
return range_field47277__2.call(this,name__21509__auto__,value__21510__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field47277.cljs$core$IFn$_invoke$arity$1 = range_field47277__1;
range_field47277.cljs$core$IFn$_invoke$arity$2 = range_field47277__2;
return range_field47277;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field47277);
/**
* Creates a search input field.
*/
sablono.core.search_field47280 = (function() {
var search_field47280 = null;
var search_field47280__1 = (function (name__21509__auto__){return search_field47280.cljs$core$IFn$_invoke$arity$2(name__21509__auto__,null);
});
var search_field47280__2 = (function (name__21509__auto__,value__21510__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__21509__auto__,value__21510__auto__);
});
search_field47280 = function(name__21509__auto__,value__21510__auto__){
switch(arguments.length){
case 1:
return search_field47280__1.call(this,name__21509__auto__);
case 2:
return search_field47280__2.call(this,name__21509__auto__,value__21510__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field47280.cljs$core$IFn$_invoke$arity$1 = search_field47280__1;
search_field47280.cljs$core$IFn$_invoke$arity$2 = search_field47280__2;
return search_field47280;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field47280);
/**
* Creates a tel input field.
*/
sablono.core.tel_field47283 = (function() {
var tel_field47283 = null;
var tel_field47283__1 = (function (name__21509__auto__){return tel_field47283.cljs$core$IFn$_invoke$arity$2(name__21509__auto__,null);
});
var tel_field47283__2 = (function (name__21509__auto__,value__21510__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__21509__auto__,value__21510__auto__);
});
tel_field47283 = function(name__21509__auto__,value__21510__auto__){
switch(arguments.length){
case 1:
return tel_field47283__1.call(this,name__21509__auto__);
case 2:
return tel_field47283__2.call(this,name__21509__auto__,value__21510__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field47283.cljs$core$IFn$_invoke$arity$1 = tel_field47283__1;
tel_field47283.cljs$core$IFn$_invoke$arity$2 = tel_field47283__2;
return tel_field47283;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field47283);
/**
* Creates a text input field.
*/
sablono.core.text_field47286 = (function() {
var text_field47286 = null;
var text_field47286__1 = (function (name__21509__auto__){return text_field47286.cljs$core$IFn$_invoke$arity$2(name__21509__auto__,null);
});
var text_field47286__2 = (function (name__21509__auto__,value__21510__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__21509__auto__,value__21510__auto__);
});
text_field47286 = function(name__21509__auto__,value__21510__auto__){
switch(arguments.length){
case 1:
return text_field47286__1.call(this,name__21509__auto__);
case 2:
return text_field47286__2.call(this,name__21509__auto__,value__21510__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field47286.cljs$core$IFn$_invoke$arity$1 = text_field47286__1;
text_field47286.cljs$core$IFn$_invoke$arity$2 = text_field47286__2;
return text_field47286;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field47286);
/**
* Creates a time input field.
*/
sablono.core.time_field47289 = (function() {
var time_field47289 = null;
var time_field47289__1 = (function (name__21509__auto__){return time_field47289.cljs$core$IFn$_invoke$arity$2(name__21509__auto__,null);
});
var time_field47289__2 = (function (name__21509__auto__,value__21510__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__21509__auto__,value__21510__auto__);
});
time_field47289 = function(name__21509__auto__,value__21510__auto__){
switch(arguments.length){
case 1:
return time_field47289__1.call(this,name__21509__auto__);
case 2:
return time_field47289__2.call(this,name__21509__auto__,value__21510__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field47289.cljs$core$IFn$_invoke$arity$1 = time_field47289__1;
time_field47289.cljs$core$IFn$_invoke$arity$2 = time_field47289__2;
return time_field47289;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field47289);
/**
* Creates a url input field.
*/
sablono.core.url_field47292 = (function() {
var url_field47292 = null;
var url_field47292__1 = (function (name__21509__auto__){return url_field47292.cljs$core$IFn$_invoke$arity$2(name__21509__auto__,null);
});
var url_field47292__2 = (function (name__21509__auto__,value__21510__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__21509__auto__,value__21510__auto__);
});
url_field47292 = function(name__21509__auto__,value__21510__auto__){
switch(arguments.length){
case 1:
return url_field47292__1.call(this,name__21509__auto__);
case 2:
return url_field47292__2.call(this,name__21509__auto__,value__21510__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field47292.cljs$core$IFn$_invoke$arity$1 = url_field47292__1;
url_field47292.cljs$core$IFn$_invoke$arity$2 = url_field47292__2;
return url_field47292;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field47292);
/**
* Creates a week input field.
*/
sablono.core.week_field47295 = (function() {
var week_field47295 = null;
var week_field47295__1 = (function (name__21509__auto__){return week_field47295.cljs$core$IFn$_invoke$arity$2(name__21509__auto__,null);
});
var week_field47295__2 = (function (name__21509__auto__,value__21510__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__21509__auto__,value__21510__auto__);
});
week_field47295 = function(name__21509__auto__,value__21510__auto__){
switch(arguments.length){
case 1:
return week_field47295__1.call(this,name__21509__auto__);
case 2:
return week_field47295__2.call(this,name__21509__auto__,value__21510__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field47295.cljs$core$IFn$_invoke$arity$1 = week_field47295__1;
week_field47295.cljs$core$IFn$_invoke$arity$2 = week_field47295__2;
return week_field47295;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field47295);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box47298 = (function() {
var check_box47298 = null;
var check_box47298__1 = (function (name){return check_box47298.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box47298__2 = (function (name,checked_QMARK_){return check_box47298.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box47298__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box47298 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box47298__1.call(this,name);
case 2:
return check_box47298__2.call(this,name,checked_QMARK_);
case 3:
return check_box47298__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box47298.cljs$core$IFn$_invoke$arity$1 = check_box47298__1;
check_box47298.cljs$core$IFn$_invoke$arity$2 = check_box47298__2;
check_box47298.cljs$core$IFn$_invoke$arity$3 = check_box47298__3;
return check_box47298;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box47298);
/**
* Creates a radio button.
*/
sablono.core.radio_button47304 = (function() {
var radio_button47304 = null;
var radio_button47304__1 = (function (group){return radio_button47304.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button47304__2 = (function (group,checked_QMARK_){return radio_button47304.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button47304__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button47304 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button47304__1.call(this,group);
case 2:
return radio_button47304__2.call(this,group,checked_QMARK_);
case 3:
return radio_button47304__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button47304.cljs$core$IFn$_invoke$arity$1 = radio_button47304__1;
radio_button47304.cljs$core$IFn$_invoke$arity$2 = radio_button47304__2;
radio_button47304.cljs$core$IFn$_invoke$arity$3 = radio_button47304__3;
return radio_button47304;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button47304);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options47310 = (function() {
var select_options47310 = null;
var select_options47310__1 = (function (coll){return select_options47310.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options47310__2 = (function (coll,selected){var iter__20684__auto__ = (function iter__47331(s__47332){return (new cljs.core.LazySeq(null,(function (){var s__47332__$1 = s__47332;while(true){
var temp__4126__auto__ = cljs.core.seq(s__47332__$1);if(temp__4126__auto__)
{var s__47332__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__47332__$2))
{var c__20682__auto__ = cljs.core.chunk_first(s__47332__$2);var size__20683__auto__ = cljs.core.count(c__20682__auto__);var b__47334 = cljs.core.chunk_buffer(size__20683__auto__);if((function (){var i__47333 = (0);while(true){
if((i__47333 < size__20683__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20682__auto__,i__47333);cljs.core.chunk_append(b__47334,((cljs.core.sequential_QMARK_(x))?(function (){var vec__47339 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47339,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47339,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47339,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options47310.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__47341 = (i__47333 + (1));
i__47333 = G__47341;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__47334),iter__47331(cljs.core.chunk_rest(s__47332__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__47334),null);
}
} else
{var x = cljs.core.first(s__47332__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__47340 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47340,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47340,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47340,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options47310.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__47331(cljs.core.rest(s__47332__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__20684__auto__(coll);
});
select_options47310 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options47310__1.call(this,coll);
case 2:
return select_options47310__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options47310.cljs$core$IFn$_invoke$arity$1 = select_options47310__1;
select_options47310.cljs$core$IFn$_invoke$arity$2 = select_options47310__2;
return select_options47310;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options47310);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down47342 = (function() {
var drop_down47342 = null;
var drop_down47342__2 = (function (name,options){return drop_down47342.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down47342__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(function (){var G__47348 = options;var G__47349 = selected;return (sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(G__47348,G__47349) : sablono.core.select_options.call(null,G__47348,G__47349));
})()], null);
});
drop_down47342 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down47342__2.call(this,name,options);
case 3:
return drop_down47342__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down47342.cljs$core$IFn$_invoke$arity$2 = drop_down47342__2;
drop_down47342.cljs$core$IFn$_invoke$arity$3 = drop_down47342__3;
return drop_down47342;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down47342);
/**
* Creates a text area element.
*/
sablono.core.text_area47350 = (function() {
var text_area47350 = null;
var text_area47350__1 = (function (name){return text_area47350.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area47350__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area47350 = function(name,value){
switch(arguments.length){
case 1:
return text_area47350__1.call(this,name);
case 2:
return text_area47350__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area47350.cljs$core$IFn$_invoke$arity$1 = text_area47350__1;
text_area47350.cljs$core$IFn$_invoke$arity$2 = text_area47350__2;
return text_area47350;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area47350);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label47353 = (function label47353(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label47353);
/**
* Creates a submit button.
*/
sablono.core.submit_button47354 = (function submit_button47354(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button47354);
/**
* Creates a form reset button.
*/
sablono.core.reset_button47355 = (function reset_button47355(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button47355);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to47356 = (function() { 
var form_to47356__delegate = function (p__47357,body){var vec__47361 = p__47357;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47361,(0),null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47361,(1),null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__47362 = "_method";var G__47363 = method_str;return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2(G__47362,G__47363) : sablono.core.hidden_field.call(null,G__47362,G__47363));
})()], null)),body));
};
var form_to47356 = function (p__47357,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to47356__delegate.call(this,p__47357,body);};
form_to47356.cljs$lang$maxFixedArity = 1;
form_to47356.cljs$lang$applyTo = (function (arglist__47364){
var p__47357 = cljs.core.first(arglist__47364);
var body = cljs.core.rest(arglist__47364);
return form_to47356__delegate(p__47357,body);
});
form_to47356.cljs$core$IFn$_invoke$arity$variadic = form_to47356__delegate;
return form_to47356;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to47356);
//# sourceMappingURL=core.js.map