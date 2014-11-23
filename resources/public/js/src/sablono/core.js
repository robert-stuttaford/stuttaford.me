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
var G__36843__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__36842 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36842,(0),null);var body = cljs.core.nthnext(vec__36842,(1));if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__36843 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__36843__delegate.call(this,args);};
G__36843.cljs$lang$maxFixedArity = 0;
G__36843.cljs$lang$applyTo = (function (arglist__36844){
var args = cljs.core.seq(arglist__36844);
return G__36843__delegate(args);
});
G__36843.cljs$core$IFn$_invoke$arity$variadic = G__36843__delegate;
return G__36843;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__21074__auto__ = (function iter__36851(s__36852){return (new cljs.core.LazySeq(null,(function (){var s__36852__$1 = s__36852;while(true){
var temp__4126__auto__ = cljs.core.seq(s__36852__$1);if(temp__4126__auto__)
{var s__36852__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__36852__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__36852__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__36854 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__36853 = (0);while(true){
if((i__36853 < size__21073__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__36853);cljs.core.chunk_append(b__36854,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__36857 = (i__36853 + (1));
i__36853 = G__36857;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__36854),iter__36851(cljs.core.chunk_rest(s__36852__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__36854),null);
}
} else
{var args = cljs.core.first(s__36852__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__36851(cljs.core.rest(s__36852__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__21074__auto__(arglists);
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
var include_css__delegate = function (styles){var iter__21074__auto__ = (function iter__36864(s__36865){return (new cljs.core.LazySeq(null,(function (){var s__36865__$1 = s__36865;while(true){
var temp__4126__auto__ = cljs.core.seq(s__36865__$1);if(temp__4126__auto__)
{var s__36865__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__36865__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__36865__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__36867 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__36866 = (0);while(true){
if((i__36866 < size__21073__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__36866);cljs.core.chunk_append(b__36867,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__36870 = (i__36866 + (1));
i__36866 = G__36870;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__36867),iter__36864(cljs.core.chunk_rest(s__36865__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__36867),null);
}
} else
{var style = cljs.core.first(s__36865__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__36864(cljs.core.rest(s__36865__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__21074__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__36871){
var styles = cljs.core.seq(arglist__36871);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){var G__36876 = (function (){return goog.dom.getDocument();
})().body;var G__36877 = (function (){var G__36878 = "script";var G__36879 = {"src": src};return goog.dom.createDom(G__36878,G__36879);
})();return goog.dom.appendChild(G__36876,G__36877);
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
sablono.core.link_to36880 = (function() { 
var link_to36880__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to36880 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to36880__delegate.call(this,url,content);};
link_to36880.cljs$lang$maxFixedArity = 1;
link_to36880.cljs$lang$applyTo = (function (arglist__36881){
var url = cljs.core.first(arglist__36881);
var content = cljs.core.rest(arglist__36881);
return link_to36880__delegate(url,content);
});
link_to36880.cljs$core$IFn$_invoke$arity$variadic = link_to36880__delegate;
return link_to36880;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to36880);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to36882 = (function() { 
var mail_to36882__delegate = function (e_mail,p__36883){var vec__36885 = p__36883;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36885,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__19663__auto__ = content;if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to36882 = function (e_mail,var_args){
var p__36883 = null;if (arguments.length > 1) {
  p__36883 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to36882__delegate.call(this,e_mail,p__36883);};
mail_to36882.cljs$lang$maxFixedArity = 1;
mail_to36882.cljs$lang$applyTo = (function (arglist__36886){
var e_mail = cljs.core.first(arglist__36886);
var p__36883 = cljs.core.rest(arglist__36886);
return mail_to36882__delegate(e_mail,p__36883);
});
mail_to36882.cljs$core$IFn$_invoke$arity$variadic = mail_to36882__delegate;
return mail_to36882;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to36882);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list36887 = (function unordered_list36887(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__21074__auto__ = (function iter__36894(s__36895){return (new cljs.core.LazySeq(null,(function (){var s__36895__$1 = s__36895;while(true){
var temp__4126__auto__ = cljs.core.seq(s__36895__$1);if(temp__4126__auto__)
{var s__36895__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__36895__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__36895__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__36897 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__36896 = (0);while(true){
if((i__36896 < size__21073__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__36896);cljs.core.chunk_append(b__36897,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__36900 = (i__36896 + (1));
i__36896 = G__36900;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__36897),iter__36894(cljs.core.chunk_rest(s__36895__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__36897),null);
}
} else
{var x = cljs.core.first(s__36895__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__36894(cljs.core.rest(s__36895__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__21074__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list36887);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list36901 = (function ordered_list36901(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__21074__auto__ = (function iter__36908(s__36909){return (new cljs.core.LazySeq(null,(function (){var s__36909__$1 = s__36909;while(true){
var temp__4126__auto__ = cljs.core.seq(s__36909__$1);if(temp__4126__auto__)
{var s__36909__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__36909__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__36909__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__36911 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__36910 = (0);while(true){
if((i__36910 < size__21073__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__36910);cljs.core.chunk_append(b__36911,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__36914 = (i__36910 + (1));
i__36910 = G__36914;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__36911),iter__36908(cljs.core.chunk_rest(s__36909__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__36911),null);
}
} else
{var x = cljs.core.first(s__36909__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__36908(cljs.core.rest(s__36909__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__21074__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list36901);
/**
* Create an image element.
*/
sablono.core.image36915 = (function() {
var image36915 = null;
var image36915__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image36915__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image36915 = function(src,alt){
switch(arguments.length){
case 1:
return image36915__1.call(this,src);
case 2:
return image36915__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image36915.cljs$core$IFn$_invoke$arity$1 = image36915__1;
image36915.cljs$core$IFn$_invoke$arity$2 = image36915__2;
return image36915;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image36915);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__36916_SHARP_,p2__36917_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36916_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__36917_SHARP_)+"]");
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__36918_SHARP_,p2__36919_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36918_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__36919_SHARP_));
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
sablono.core.color_field36920 = (function() {
var color_field36920 = null;
var color_field36920__1 = (function (name__21843__auto__){return color_field36920.cljs$core$IFn$_invoke$arity$2(name__21843__auto__,null);
});
var color_field36920__2 = (function (name__21843__auto__,value__21844__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__21843__auto__,value__21844__auto__);
});
color_field36920 = function(name__21843__auto__,value__21844__auto__){
switch(arguments.length){
case 1:
return color_field36920__1.call(this,name__21843__auto__);
case 2:
return color_field36920__2.call(this,name__21843__auto__,value__21844__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field36920.cljs$core$IFn$_invoke$arity$1 = color_field36920__1;
color_field36920.cljs$core$IFn$_invoke$arity$2 = color_field36920__2;
return color_field36920;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field36920);
/**
* Creates a date input field.
*/
sablono.core.date_field36923 = (function() {
var date_field36923 = null;
var date_field36923__1 = (function (name__21843__auto__){return date_field36923.cljs$core$IFn$_invoke$arity$2(name__21843__auto__,null);
});
var date_field36923__2 = (function (name__21843__auto__,value__21844__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__21843__auto__,value__21844__auto__);
});
date_field36923 = function(name__21843__auto__,value__21844__auto__){
switch(arguments.length){
case 1:
return date_field36923__1.call(this,name__21843__auto__);
case 2:
return date_field36923__2.call(this,name__21843__auto__,value__21844__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field36923.cljs$core$IFn$_invoke$arity$1 = date_field36923__1;
date_field36923.cljs$core$IFn$_invoke$arity$2 = date_field36923__2;
return date_field36923;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field36923);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field36926 = (function() {
var datetime_field36926 = null;
var datetime_field36926__1 = (function (name__21843__auto__){return datetime_field36926.cljs$core$IFn$_invoke$arity$2(name__21843__auto__,null);
});
var datetime_field36926__2 = (function (name__21843__auto__,value__21844__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__21843__auto__,value__21844__auto__);
});
datetime_field36926 = function(name__21843__auto__,value__21844__auto__){
switch(arguments.length){
case 1:
return datetime_field36926__1.call(this,name__21843__auto__);
case 2:
return datetime_field36926__2.call(this,name__21843__auto__,value__21844__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field36926.cljs$core$IFn$_invoke$arity$1 = datetime_field36926__1;
datetime_field36926.cljs$core$IFn$_invoke$arity$2 = datetime_field36926__2;
return datetime_field36926;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field36926);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field36929 = (function() {
var datetime_local_field36929 = null;
var datetime_local_field36929__1 = (function (name__21843__auto__){return datetime_local_field36929.cljs$core$IFn$_invoke$arity$2(name__21843__auto__,null);
});
var datetime_local_field36929__2 = (function (name__21843__auto__,value__21844__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__21843__auto__,value__21844__auto__);
});
datetime_local_field36929 = function(name__21843__auto__,value__21844__auto__){
switch(arguments.length){
case 1:
return datetime_local_field36929__1.call(this,name__21843__auto__);
case 2:
return datetime_local_field36929__2.call(this,name__21843__auto__,value__21844__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field36929.cljs$core$IFn$_invoke$arity$1 = datetime_local_field36929__1;
datetime_local_field36929.cljs$core$IFn$_invoke$arity$2 = datetime_local_field36929__2;
return datetime_local_field36929;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field36929);
/**
* Creates a email input field.
*/
sablono.core.email_field36932 = (function() {
var email_field36932 = null;
var email_field36932__1 = (function (name__21843__auto__){return email_field36932.cljs$core$IFn$_invoke$arity$2(name__21843__auto__,null);
});
var email_field36932__2 = (function (name__21843__auto__,value__21844__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__21843__auto__,value__21844__auto__);
});
email_field36932 = function(name__21843__auto__,value__21844__auto__){
switch(arguments.length){
case 1:
return email_field36932__1.call(this,name__21843__auto__);
case 2:
return email_field36932__2.call(this,name__21843__auto__,value__21844__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field36932.cljs$core$IFn$_invoke$arity$1 = email_field36932__1;
email_field36932.cljs$core$IFn$_invoke$arity$2 = email_field36932__2;
return email_field36932;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field36932);
/**
* Creates a file input field.
*/
sablono.core.file_field36935 = (function() {
var file_field36935 = null;
var file_field36935__1 = (function (name__21843__auto__){return file_field36935.cljs$core$IFn$_invoke$arity$2(name__21843__auto__,null);
});
var file_field36935__2 = (function (name__21843__auto__,value__21844__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__21843__auto__,value__21844__auto__);
});
file_field36935 = function(name__21843__auto__,value__21844__auto__){
switch(arguments.length){
case 1:
return file_field36935__1.call(this,name__21843__auto__);
case 2:
return file_field36935__2.call(this,name__21843__auto__,value__21844__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field36935.cljs$core$IFn$_invoke$arity$1 = file_field36935__1;
file_field36935.cljs$core$IFn$_invoke$arity$2 = file_field36935__2;
return file_field36935;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field36935);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field36938 = (function() {
var hidden_field36938 = null;
var hidden_field36938__1 = (function (name__21843__auto__){return hidden_field36938.cljs$core$IFn$_invoke$arity$2(name__21843__auto__,null);
});
var hidden_field36938__2 = (function (name__21843__auto__,value__21844__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__21843__auto__,value__21844__auto__);
});
hidden_field36938 = function(name__21843__auto__,value__21844__auto__){
switch(arguments.length){
case 1:
return hidden_field36938__1.call(this,name__21843__auto__);
case 2:
return hidden_field36938__2.call(this,name__21843__auto__,value__21844__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field36938.cljs$core$IFn$_invoke$arity$1 = hidden_field36938__1;
hidden_field36938.cljs$core$IFn$_invoke$arity$2 = hidden_field36938__2;
return hidden_field36938;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field36938);
/**
* Creates a month input field.
*/
sablono.core.month_field36941 = (function() {
var month_field36941 = null;
var month_field36941__1 = (function (name__21843__auto__){return month_field36941.cljs$core$IFn$_invoke$arity$2(name__21843__auto__,null);
});
var month_field36941__2 = (function (name__21843__auto__,value__21844__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__21843__auto__,value__21844__auto__);
});
month_field36941 = function(name__21843__auto__,value__21844__auto__){
switch(arguments.length){
case 1:
return month_field36941__1.call(this,name__21843__auto__);
case 2:
return month_field36941__2.call(this,name__21843__auto__,value__21844__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field36941.cljs$core$IFn$_invoke$arity$1 = month_field36941__1;
month_field36941.cljs$core$IFn$_invoke$arity$2 = month_field36941__2;
return month_field36941;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field36941);
/**
* Creates a number input field.
*/
sablono.core.number_field36944 = (function() {
var number_field36944 = null;
var number_field36944__1 = (function (name__21843__auto__){return number_field36944.cljs$core$IFn$_invoke$arity$2(name__21843__auto__,null);
});
var number_field36944__2 = (function (name__21843__auto__,value__21844__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__21843__auto__,value__21844__auto__);
});
number_field36944 = function(name__21843__auto__,value__21844__auto__){
switch(arguments.length){
case 1:
return number_field36944__1.call(this,name__21843__auto__);
case 2:
return number_field36944__2.call(this,name__21843__auto__,value__21844__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field36944.cljs$core$IFn$_invoke$arity$1 = number_field36944__1;
number_field36944.cljs$core$IFn$_invoke$arity$2 = number_field36944__2;
return number_field36944;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field36944);
/**
* Creates a password input field.
*/
sablono.core.password_field36947 = (function() {
var password_field36947 = null;
var password_field36947__1 = (function (name__21843__auto__){return password_field36947.cljs$core$IFn$_invoke$arity$2(name__21843__auto__,null);
});
var password_field36947__2 = (function (name__21843__auto__,value__21844__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__21843__auto__,value__21844__auto__);
});
password_field36947 = function(name__21843__auto__,value__21844__auto__){
switch(arguments.length){
case 1:
return password_field36947__1.call(this,name__21843__auto__);
case 2:
return password_field36947__2.call(this,name__21843__auto__,value__21844__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field36947.cljs$core$IFn$_invoke$arity$1 = password_field36947__1;
password_field36947.cljs$core$IFn$_invoke$arity$2 = password_field36947__2;
return password_field36947;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field36947);
/**
* Creates a range input field.
*/
sablono.core.range_field36950 = (function() {
var range_field36950 = null;
var range_field36950__1 = (function (name__21843__auto__){return range_field36950.cljs$core$IFn$_invoke$arity$2(name__21843__auto__,null);
});
var range_field36950__2 = (function (name__21843__auto__,value__21844__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__21843__auto__,value__21844__auto__);
});
range_field36950 = function(name__21843__auto__,value__21844__auto__){
switch(arguments.length){
case 1:
return range_field36950__1.call(this,name__21843__auto__);
case 2:
return range_field36950__2.call(this,name__21843__auto__,value__21844__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field36950.cljs$core$IFn$_invoke$arity$1 = range_field36950__1;
range_field36950.cljs$core$IFn$_invoke$arity$2 = range_field36950__2;
return range_field36950;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field36950);
/**
* Creates a search input field.
*/
sablono.core.search_field36953 = (function() {
var search_field36953 = null;
var search_field36953__1 = (function (name__21843__auto__){return search_field36953.cljs$core$IFn$_invoke$arity$2(name__21843__auto__,null);
});
var search_field36953__2 = (function (name__21843__auto__,value__21844__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__21843__auto__,value__21844__auto__);
});
search_field36953 = function(name__21843__auto__,value__21844__auto__){
switch(arguments.length){
case 1:
return search_field36953__1.call(this,name__21843__auto__);
case 2:
return search_field36953__2.call(this,name__21843__auto__,value__21844__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field36953.cljs$core$IFn$_invoke$arity$1 = search_field36953__1;
search_field36953.cljs$core$IFn$_invoke$arity$2 = search_field36953__2;
return search_field36953;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field36953);
/**
* Creates a tel input field.
*/
sablono.core.tel_field36956 = (function() {
var tel_field36956 = null;
var tel_field36956__1 = (function (name__21843__auto__){return tel_field36956.cljs$core$IFn$_invoke$arity$2(name__21843__auto__,null);
});
var tel_field36956__2 = (function (name__21843__auto__,value__21844__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__21843__auto__,value__21844__auto__);
});
tel_field36956 = function(name__21843__auto__,value__21844__auto__){
switch(arguments.length){
case 1:
return tel_field36956__1.call(this,name__21843__auto__);
case 2:
return tel_field36956__2.call(this,name__21843__auto__,value__21844__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field36956.cljs$core$IFn$_invoke$arity$1 = tel_field36956__1;
tel_field36956.cljs$core$IFn$_invoke$arity$2 = tel_field36956__2;
return tel_field36956;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field36956);
/**
* Creates a text input field.
*/
sablono.core.text_field36959 = (function() {
var text_field36959 = null;
var text_field36959__1 = (function (name__21843__auto__){return text_field36959.cljs$core$IFn$_invoke$arity$2(name__21843__auto__,null);
});
var text_field36959__2 = (function (name__21843__auto__,value__21844__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__21843__auto__,value__21844__auto__);
});
text_field36959 = function(name__21843__auto__,value__21844__auto__){
switch(arguments.length){
case 1:
return text_field36959__1.call(this,name__21843__auto__);
case 2:
return text_field36959__2.call(this,name__21843__auto__,value__21844__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field36959.cljs$core$IFn$_invoke$arity$1 = text_field36959__1;
text_field36959.cljs$core$IFn$_invoke$arity$2 = text_field36959__2;
return text_field36959;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field36959);
/**
* Creates a time input field.
*/
sablono.core.time_field36962 = (function() {
var time_field36962 = null;
var time_field36962__1 = (function (name__21843__auto__){return time_field36962.cljs$core$IFn$_invoke$arity$2(name__21843__auto__,null);
});
var time_field36962__2 = (function (name__21843__auto__,value__21844__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__21843__auto__,value__21844__auto__);
});
time_field36962 = function(name__21843__auto__,value__21844__auto__){
switch(arguments.length){
case 1:
return time_field36962__1.call(this,name__21843__auto__);
case 2:
return time_field36962__2.call(this,name__21843__auto__,value__21844__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field36962.cljs$core$IFn$_invoke$arity$1 = time_field36962__1;
time_field36962.cljs$core$IFn$_invoke$arity$2 = time_field36962__2;
return time_field36962;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field36962);
/**
* Creates a url input field.
*/
sablono.core.url_field36965 = (function() {
var url_field36965 = null;
var url_field36965__1 = (function (name__21843__auto__){return url_field36965.cljs$core$IFn$_invoke$arity$2(name__21843__auto__,null);
});
var url_field36965__2 = (function (name__21843__auto__,value__21844__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__21843__auto__,value__21844__auto__);
});
url_field36965 = function(name__21843__auto__,value__21844__auto__){
switch(arguments.length){
case 1:
return url_field36965__1.call(this,name__21843__auto__);
case 2:
return url_field36965__2.call(this,name__21843__auto__,value__21844__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field36965.cljs$core$IFn$_invoke$arity$1 = url_field36965__1;
url_field36965.cljs$core$IFn$_invoke$arity$2 = url_field36965__2;
return url_field36965;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field36965);
/**
* Creates a week input field.
*/
sablono.core.week_field36968 = (function() {
var week_field36968 = null;
var week_field36968__1 = (function (name__21843__auto__){return week_field36968.cljs$core$IFn$_invoke$arity$2(name__21843__auto__,null);
});
var week_field36968__2 = (function (name__21843__auto__,value__21844__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__21843__auto__,value__21844__auto__);
});
week_field36968 = function(name__21843__auto__,value__21844__auto__){
switch(arguments.length){
case 1:
return week_field36968__1.call(this,name__21843__auto__);
case 2:
return week_field36968__2.call(this,name__21843__auto__,value__21844__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field36968.cljs$core$IFn$_invoke$arity$1 = week_field36968__1;
week_field36968.cljs$core$IFn$_invoke$arity$2 = week_field36968__2;
return week_field36968;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field36968);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box36971 = (function() {
var check_box36971 = null;
var check_box36971__1 = (function (name){return check_box36971.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box36971__2 = (function (name,checked_QMARK_){return check_box36971.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box36971__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box36971 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box36971__1.call(this,name);
case 2:
return check_box36971__2.call(this,name,checked_QMARK_);
case 3:
return check_box36971__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box36971.cljs$core$IFn$_invoke$arity$1 = check_box36971__1;
check_box36971.cljs$core$IFn$_invoke$arity$2 = check_box36971__2;
check_box36971.cljs$core$IFn$_invoke$arity$3 = check_box36971__3;
return check_box36971;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box36971);
/**
* Creates a radio button.
*/
sablono.core.radio_button36977 = (function() {
var radio_button36977 = null;
var radio_button36977__1 = (function (group){return radio_button36977.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button36977__2 = (function (group,checked_QMARK_){return radio_button36977.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button36977__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button36977 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button36977__1.call(this,group);
case 2:
return radio_button36977__2.call(this,group,checked_QMARK_);
case 3:
return radio_button36977__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button36977.cljs$core$IFn$_invoke$arity$1 = radio_button36977__1;
radio_button36977.cljs$core$IFn$_invoke$arity$2 = radio_button36977__2;
radio_button36977.cljs$core$IFn$_invoke$arity$3 = radio_button36977__3;
return radio_button36977;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button36977);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options36983 = (function() {
var select_options36983 = null;
var select_options36983__1 = (function (coll){return select_options36983.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options36983__2 = (function (coll,selected){var iter__21074__auto__ = (function iter__37004(s__37005){return (new cljs.core.LazySeq(null,(function (){var s__37005__$1 = s__37005;while(true){
var temp__4126__auto__ = cljs.core.seq(s__37005__$1);if(temp__4126__auto__)
{var s__37005__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__37005__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__37005__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__37007 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__37006 = (0);while(true){
if((i__37006 < size__21073__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__37006);cljs.core.chunk_append(b__37007,((cljs.core.sequential_QMARK_(x))?(function (){var vec__37012 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37012,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37012,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37012,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options36983.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__37014 = (i__37006 + (1));
i__37006 = G__37014;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__37007),iter__37004(cljs.core.chunk_rest(s__37005__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__37007),null);
}
} else
{var x = cljs.core.first(s__37005__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__37013 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37013,(0),null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37013,(1),null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37013,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options36983.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__37004(cljs.core.rest(s__37005__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__21074__auto__(coll);
});
select_options36983 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options36983__1.call(this,coll);
case 2:
return select_options36983__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options36983.cljs$core$IFn$_invoke$arity$1 = select_options36983__1;
select_options36983.cljs$core$IFn$_invoke$arity$2 = select_options36983__2;
return select_options36983;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options36983);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down37015 = (function() {
var drop_down37015 = null;
var drop_down37015__2 = (function (name,options){return drop_down37015.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down37015__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(function (){var G__37021 = options;var G__37022 = selected;return (sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(G__37021,G__37022) : sablono.core.select_options.call(null,G__37021,G__37022));
})()], null);
});
drop_down37015 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down37015__2.call(this,name,options);
case 3:
return drop_down37015__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down37015.cljs$core$IFn$_invoke$arity$2 = drop_down37015__2;
drop_down37015.cljs$core$IFn$_invoke$arity$3 = drop_down37015__3;
return drop_down37015;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down37015);
/**
* Creates a text area element.
*/
sablono.core.text_area37023 = (function() {
var text_area37023 = null;
var text_area37023__1 = (function (name){return text_area37023.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area37023__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area37023 = function(name,value){
switch(arguments.length){
case 1:
return text_area37023__1.call(this,name);
case 2:
return text_area37023__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area37023.cljs$core$IFn$_invoke$arity$1 = text_area37023__1;
text_area37023.cljs$core$IFn$_invoke$arity$2 = text_area37023__2;
return text_area37023;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area37023);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label37026 = (function label37026(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label37026);
/**
* Creates a submit button.
*/
sablono.core.submit_button37027 = (function submit_button37027(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button37027);
/**
* Creates a form reset button.
*/
sablono.core.reset_button37028 = (function reset_button37028(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button37028);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to37029 = (function() { 
var form_to37029__delegate = function (p__37030,body){var vec__37034 = p__37030;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37034,(0),null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37034,(1),null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__37035 = "_method";var G__37036 = method_str;return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2(G__37035,G__37036) : sablono.core.hidden_field.call(null,G__37035,G__37036));
})()], null)),body));
};
var form_to37029 = function (p__37030,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to37029__delegate.call(this,p__37030,body);};
form_to37029.cljs$lang$maxFixedArity = 1;
form_to37029.cljs$lang$applyTo = (function (arglist__37037){
var p__37030 = cljs.core.first(arglist__37037);
var body = cljs.core.rest(arglist__37037);
return form_to37029__delegate(p__37030,body);
});
form_to37029.cljs$core$IFn$_invoke$arity$variadic = form_to37029__delegate;
return form_to37029;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to37029);
//# sourceMappingURL=core.js.map