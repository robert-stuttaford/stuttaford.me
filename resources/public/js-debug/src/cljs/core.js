goog.provide('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.array');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string');
cljs.core._STAR_clojurescript_version_STAR_ = "0.0-2342";
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a different way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Set *print-fn* to f.
*/
cljs.core.set_print_fn_BANG_ = (function set_print_fn_BANG_(f){return cljs.core._STAR_print_fn_STAR_ = f;
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core._STAR_print_length_STAR_ = null;
cljs.core._STAR_print_level_STAR_ = null;
cljs.core.pr_opts = (function pr_opts(){return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flush-on-newline","flush-on-newline",-151457939),cljs.core._STAR_flush_on_newline_STAR_,new cljs.core.Keyword(null,"readably","readably",1129599760),cljs.core._STAR_print_readably_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core._STAR_print_meta_STAR_,new cljs.core.Keyword(null,"dup","dup",556298533),cljs.core._STAR_print_dup_STAR_,new cljs.core.Keyword(null,"print-length","print-length",1931866356),cljs.core._STAR_print_length_STAR_], null);
});
/**
* Set *print-fn* to console.log
*/
cljs.core.enable_console_print_BANG_ = (function enable_console_print_BANG_(){cljs.core._STAR_print_newline_STAR_ = false;
return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24882__delegate = function (args){return console.log.apply(console,(function (){var G__24881 = args;return (cljs.core.into_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(G__24881) : cljs.core.into_array.call(null,G__24881));
})());
};
var G__24882 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24882__delegate.call(this,args);};
G__24882.cljs$lang$maxFixedArity = 0;
G__24882.cljs$lang$applyTo = (function (arglist__24883){
var args = cljs.core.seq(arglist__24883);
return G__24882__delegate(args);
});
G__24882.cljs$core$IFn$_invoke$arity$variadic = G__24882__delegate;
return G__24882;
})()
;
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){return (x != null && x !== false);
});
cljs.core.not_native = null;
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){return (x === y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){return (x == null);
});
cljs.core.array_QMARK_ = (function array_QMARK_(x){return x instanceof Array;
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){return typeof n === 'number';
});
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* Returns true if x is not nil, false otherwise.
*/
cljs.core.some_QMARK_ = (function some_QMARK_(x){return !((x == null));
});
cljs.core.object_QMARK_ = (function object_QMARK_(x){if(!((x == null)))
{return (x.constructor === Object);
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){var G__24885 = x;return goog.isString(G__24885);
});
/**
* Internal - do not use!
*/
cljs.core.native_satisfies_QMARK_ = (function native_satisfies_QMARK_(p,x){var x__$1 = (((x == null))?null:x);if((p[(function (){var G__24887 = x__$1;return goog.typeOf(G__24887);
})()]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{return false;

}
}
});
cljs.core.is_proto_ = (function is_proto_(x){return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.type = (function type(x){if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.missing_protocol = (function missing_protocol(proto,obj){var ty = cljs.core.type(obj);var ty__$1 = (cljs.core.truth_((function (){var and__19255__auto__ = ty;if(cljs.core.truth_(and__19255__auto__))
{return ty.cljs$lang$type;
} else
{return and__19255__auto__;
}
})())?ty.cljs$lang$ctorStr:(function (){var G__24889 = obj;return goog.typeOf(G__24889);
})());return (new Error(["No protocol method ",proto," defined for type ",ty__$1,": ",obj].join("")));
});
cljs.core.type__GT_str = (function type__GT_str(ty){var temp__4124__auto__ = ty.cljs$lang$ctorStr;if(cljs.core.truth_(temp__4124__auto__))
{var s = temp__4124__auto__;return s;
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ty));
}
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){return (new Array(size));
});
var make_array__2 = (function (type,size){return make_array.cljs$core$IFn$_invoke$arity$1(size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_array.cljs$core$IFn$_invoke$arity$1 = make_array__1;
make_array.cljs$core$IFn$_invoke$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(arr){var len = arr.length;var new_arr = (new Array(len));var n__20882__auto___24891 = len;var i_24892 = (0);while(true){
if((i_24892 < n__20882__auto___24891))
{(new_arr[i_24892] = (arr[i_24892]));
{
var G__24893 = (i_24892 + (1));
i_24892 = G__24893;
continue;
}
} else
{}
break;
}
return new_arr;
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){return (array[i]);
});
var aget__3 = (function() { 
var G__24902__delegate = function (array,i,idxs){var G__24899 = aget;var G__24900 = aget.cljs$core$IFn$_invoke$arity$2(array,i);var G__24901 = idxs;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$3 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__24899,G__24900,G__24901) : cljs.core.apply.call(null,G__24899,G__24900,G__24901));
};
var G__24902 = function (array,i,var_args){
var idxs = null;if (arguments.length > 2) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__24902__delegate.call(this,array,i,idxs);};
G__24902.cljs$lang$maxFixedArity = 2;
G__24902.cljs$lang$applyTo = (function (arglist__24903){
var array = cljs.core.first(arglist__24903);
arglist__24903 = cljs.core.next(arglist__24903);
var i = cljs.core.first(arglist__24903);
var idxs = cljs.core.rest(arglist__24903);
return G__24902__delegate(array,i,idxs);
});
G__24902.cljs$core$IFn$_invoke$arity$variadic = G__24902__delegate;
return G__24902;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$core$IFn$_invoke$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$core$IFn$_invoke$arity$2 = aget__2;
aget.cljs$core$IFn$_invoke$arity$variadic = aget__3.cljs$core$IFn$_invoke$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
* @param {...*} var_args
*/
cljs.core.aset = (function() {
var aset = null;
var aset__3 = (function (array,i,val){return (array[i] = val);
});
var aset__4 = (function() { 
var G__24912__delegate = function (array,idx,idx2,idxv){var G__24908 = aset;var G__24909 = (array[idx]);var G__24910 = idx2;var G__24911 = idxv;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$4(G__24908,G__24909,G__24910,G__24911) : cljs.core.apply.call(null,G__24908,G__24909,G__24910,G__24911));
};
var G__24912 = function (array,idx,idx2,var_args){
var idxv = null;if (arguments.length > 3) {
  idxv = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__24912__delegate.call(this,array,idx,idx2,idxv);};
G__24912.cljs$lang$maxFixedArity = 3;
G__24912.cljs$lang$applyTo = (function (arglist__24913){
var array = cljs.core.first(arglist__24913);
arglist__24913 = cljs.core.next(arglist__24913);
var idx = cljs.core.first(arglist__24913);
arglist__24913 = cljs.core.next(arglist__24913);
var idx2 = cljs.core.first(arglist__24913);
var idxv = cljs.core.rest(arglist__24913);
return G__24912__delegate(array,idx,idx2,idxv);
});
G__24912.cljs$core$IFn$_invoke$arity$variadic = G__24912__delegate;
return G__24912;
})()
;
aset = function(array,idx,idx2,var_args){
var idxv = var_args;
switch(arguments.length){
case 3:
return aset__3.call(this,array,idx,idx2);
default:
return aset__4.cljs$core$IFn$_invoke$arity$variadic(array,idx,idx2, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aset.cljs$lang$maxFixedArity = 3;
aset.cljs$lang$applyTo = aset__4.cljs$lang$applyTo;
aset.cljs$core$IFn$_invoke$arity$3 = aset__3;
aset.cljs$core$IFn$_invoke$arity$variadic = aset__4.cljs$core$IFn$_invoke$arity$variadic;
return aset;
})()
;
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){return into_array.cljs$core$IFn$_invoke$arity$2(null,aseq);
});
var into_array__2 = (function (type,aseq){var G__24919 = (function (a,x){a.push(x);
return a;
});var G__24920 = [];var G__24921 = aseq;return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(G__24919,G__24920,G__24921) : cljs.core.reduce.call(null,G__24919,G__24920,G__24921));
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into_array.cljs$core$IFn$_invoke$arity$1 = into_array__1;
into_array.cljs$core$IFn$_invoke$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.Fn = (function (){var obj24923 = {};return obj24923;
})();
cljs.core.IFn = (function (){var obj24925 = {};return obj24925;
})();
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__19255__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (cljs.core._invoke[(function (){var G__24971 = x__20512__auto__;return goog.typeOf(G__24971);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._invoke["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__19255__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (cljs.core._invoke[(function (){var G__24973 = x__20512__auto__;return goog.typeOf(G__24973);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._invoke["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__19255__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (cljs.core._invoke[(function (){var G__24975 = x__20512__auto__;return goog.typeOf(G__24975);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._invoke["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__19255__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (cljs.core._invoke[(function (){var G__24977 = x__20512__auto__;return goog.typeOf(G__24977);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._invoke["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__19255__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (cljs.core._invoke[(function (){var G__24979 = x__20512__auto__;return goog.typeOf(G__24979);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._invoke["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__19255__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (cljs.core._invoke[(function (){var G__24981 = x__20512__auto__;return goog.typeOf(G__24981);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._invoke["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__19255__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (cljs.core._invoke[(function (){var G__24983 = x__20512__auto__;return goog.typeOf(G__24983);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._invoke["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__19255__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (cljs.core._invoke[(function (){var G__24985 = x__20512__auto__;return goog.typeOf(G__24985);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._invoke["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__19255__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (cljs.core._invoke[(function (){var G__24987 = x__20512__auto__;return goog.typeOf(G__24987);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._invoke["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__19255__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (cljs.core._invoke[(function (){var G__24989 = x__20512__auto__;return goog.typeOf(G__24989);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._invoke["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__19255__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (cljs.core._invoke[(function (){var G__24991 = x__20512__auto__;return goog.typeOf(G__24991);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._invoke["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__19255__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (cljs.core._invoke[(function (){var G__24993 = x__20512__auto__;return goog.typeOf(G__24993);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._invoke["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__19255__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (cljs.core._invoke[(function (){var G__24995 = x__20512__auto__;return goog.typeOf(G__24995);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._invoke["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__19255__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (cljs.core._invoke[(function (){var G__24997 = x__20512__auto__;return goog.typeOf(G__24997);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._invoke["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__19255__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (cljs.core._invoke[(function (){var G__24999 = x__20512__auto__;return goog.typeOf(G__24999);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._invoke["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__19255__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (cljs.core._invoke[(function (){var G__25001 = x__20512__auto__;return goog.typeOf(G__25001);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._invoke["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__19255__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (cljs.core._invoke[(function (){var G__25003 = x__20512__auto__;return goog.typeOf(G__25003);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._invoke["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__19255__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (cljs.core._invoke[(function (){var G__25005 = x__20512__auto__;return goog.typeOf(G__25005);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._invoke["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__19255__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (cljs.core._invoke[(function (){var G__25007 = x__20512__auto__;return goog.typeOf(G__25007);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._invoke["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__19255__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (cljs.core._invoke[(function (){var G__25009 = x__20512__auto__;return goog.typeOf(G__25009);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._invoke["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__19255__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (cljs.core._invoke[(function (){var G__25011 = x__20512__auto__;return goog.typeOf(G__25011);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._invoke["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}
});
var _invoke__22 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.cljs$core$IFn$_invoke$arity$22;
} else
{return and__19255__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$22(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (cljs.core._invoke[(function (){var G__25013 = x__20512__auto__;return goog.typeOf(G__25013);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._invoke["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return _invoke__22.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_invoke.cljs$core$IFn$_invoke$arity$1 = _invoke__1;
_invoke.cljs$core$IFn$_invoke$arity$2 = _invoke__2;
_invoke.cljs$core$IFn$_invoke$arity$3 = _invoke__3;
_invoke.cljs$core$IFn$_invoke$arity$4 = _invoke__4;
_invoke.cljs$core$IFn$_invoke$arity$5 = _invoke__5;
_invoke.cljs$core$IFn$_invoke$arity$6 = _invoke__6;
_invoke.cljs$core$IFn$_invoke$arity$7 = _invoke__7;
_invoke.cljs$core$IFn$_invoke$arity$8 = _invoke__8;
_invoke.cljs$core$IFn$_invoke$arity$9 = _invoke__9;
_invoke.cljs$core$IFn$_invoke$arity$10 = _invoke__10;
_invoke.cljs$core$IFn$_invoke$arity$11 = _invoke__11;
_invoke.cljs$core$IFn$_invoke$arity$12 = _invoke__12;
_invoke.cljs$core$IFn$_invoke$arity$13 = _invoke__13;
_invoke.cljs$core$IFn$_invoke$arity$14 = _invoke__14;
_invoke.cljs$core$IFn$_invoke$arity$15 = _invoke__15;
_invoke.cljs$core$IFn$_invoke$arity$16 = _invoke__16;
_invoke.cljs$core$IFn$_invoke$arity$17 = _invoke__17;
_invoke.cljs$core$IFn$_invoke$arity$18 = _invoke__18;
_invoke.cljs$core$IFn$_invoke$arity$19 = _invoke__19;
_invoke.cljs$core$IFn$_invoke$arity$20 = _invoke__20;
_invoke.cljs$core$IFn$_invoke$arity$21 = _invoke__21;
_invoke.cljs$core$IFn$_invoke$arity$22 = _invoke__22;
return _invoke;
})()
;
cljs.core.ICloneable = (function (){var obj25015 = {};return obj25015;
})();
cljs.core._clone = (function _clone(value){if((function (){var and__19255__auto__ = value;if(and__19255__auto__)
{return value.cljs$core$ICloneable$_clone$arity$1;
} else
{return and__19255__auto__;
}
})())
{return value.cljs$core$ICloneable$_clone$arity$1(value);
} else
{var x__20512__auto__ = (((value == null))?null:value);return (function (){var or__19267__auto__ = (cljs.core._clone[(function (){var G__25019 = x__20512__auto__;return goog.typeOf(G__25019);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._clone["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ICloneable.-clone",value);
}
}
})().call(null,value);
}
});
cljs.core.ICounted = (function (){var obj25021 = {};return obj25021;
})();
cljs.core._count = (function _count(coll){if((function (){var and__19255__auto__ = coll;if(and__19255__auto__)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__19255__auto__;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__20512__auto__ = (((coll == null))?null:coll);return (function (){var or__19267__auto__ = (cljs.core._count[(function (){var G__25025 = x__20512__auto__;return goog.typeOf(G__25025);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._count["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = (function (){var obj25027 = {};return obj25027;
})();
cljs.core._empty = (function _empty(coll){if((function (){var and__19255__auto__ = coll;if(and__19255__auto__)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__19255__auto__;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__20512__auto__ = (((coll == null))?null:coll);return (function (){var or__19267__auto__ = (cljs.core._empty[(function (){var G__25031 = x__20512__auto__;return goog.typeOf(G__25031);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._empty["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = (function (){var obj25033 = {};return obj25033;
})();
cljs.core._conj = (function _conj(coll,o){if((function (){var and__19255__auto__ = coll;if(and__19255__auto__)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__19255__auto__;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__20512__auto__ = (((coll == null))?null:coll);return (function (){var or__19267__auto__ = (cljs.core._conj[(function (){var G__25037 = x__20512__auto__;return goog.typeOf(G__25037);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._conj["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = (function (){var obj25039 = {};return obj25039;
})();
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){if((function (){var and__19255__auto__ = coll;if(and__19255__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__19255__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__20512__auto__ = (((coll == null))?null:coll);return (function (){var or__19267__auto__ = (cljs.core._nth[(function (){var G__25045 = x__20512__auto__;return goog.typeOf(G__25045);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._nth["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){if((function (){var and__19255__auto__ = coll;if(and__19255__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__19255__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__20512__auto__ = (((coll == null))?null:coll);return (function (){var or__19267__auto__ = (cljs.core._nth[(function (){var G__25047 = x__20512__auto__;return goog.typeOf(G__25047);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._nth["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_nth.cljs$core$IFn$_invoke$arity$2 = _nth__2;
_nth.cljs$core$IFn$_invoke$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = (function (){var obj25049 = {};return obj25049;
})();
cljs.core.ISeq = (function (){var obj25051 = {};return obj25051;
})();
cljs.core._first = (function _first(coll){if((function (){var and__19255__auto__ = coll;if(and__19255__auto__)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__19255__auto__;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__20512__auto__ = (((coll == null))?null:coll);return (function (){var or__19267__auto__ = (cljs.core._first[(function (){var G__25055 = x__20512__auto__;return goog.typeOf(G__25055);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._first["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){if((function (){var and__19255__auto__ = coll;if(and__19255__auto__)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__19255__auto__;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__20512__auto__ = (((coll == null))?null:coll);return (function (){var or__19267__auto__ = (cljs.core._rest[(function (){var G__25059 = x__20512__auto__;return goog.typeOf(G__25059);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._rest["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = (function (){var obj25061 = {};return obj25061;
})();
cljs.core._next = (function _next(coll){if((function (){var and__19255__auto__ = coll;if(and__19255__auto__)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__19255__auto__;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__20512__auto__ = (((coll == null))?null:coll);return (function (){var or__19267__auto__ = (cljs.core._next[(function (){var G__25065 = x__20512__auto__;return goog.typeOf(G__25065);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._next["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = (function (){var obj25067 = {};return obj25067;
})();
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){if((function (){var and__19255__auto__ = o;if(and__19255__auto__)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__19255__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__20512__auto__ = (((o == null))?null:o);return (function (){var or__19267__auto__ = (cljs.core._lookup[(function (){var G__25073 = x__20512__auto__;return goog.typeOf(G__25073);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._lookup["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){if((function (){var and__19255__auto__ = o;if(and__19255__auto__)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__19255__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__20512__auto__ = (((o == null))?null:o);return (function (){var or__19267__auto__ = (cljs.core._lookup[(function (){var G__25075 = x__20512__auto__;return goog.typeOf(G__25075);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._lookup["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_lookup.cljs$core$IFn$_invoke$arity$2 = _lookup__2;
_lookup.cljs$core$IFn$_invoke$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = (function (){var obj25077 = {};return obj25077;
})();
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){if((function (){var and__19255__auto__ = coll;if(and__19255__auto__)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__19255__auto__;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__20512__auto__ = (((coll == null))?null:coll);return (function (){var or__19267__auto__ = (cljs.core._contains_key_QMARK_[(function (){var G__25081 = x__20512__auto__;return goog.typeOf(G__25081);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._contains_key_QMARK_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){if((function (){var and__19255__auto__ = coll;if(and__19255__auto__)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__19255__auto__;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__20512__auto__ = (((coll == null))?null:coll);return (function (){var or__19267__auto__ = (cljs.core._assoc[(function (){var G__25085 = x__20512__auto__;return goog.typeOf(G__25085);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._assoc["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = (function (){var obj25087 = {};return obj25087;
})();
cljs.core._dissoc = (function _dissoc(coll,k){if((function (){var and__19255__auto__ = coll;if(and__19255__auto__)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__19255__auto__;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__20512__auto__ = (((coll == null))?null:coll);return (function (){var or__19267__auto__ = (cljs.core._dissoc[(function (){var G__25091 = x__20512__auto__;return goog.typeOf(G__25091);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._dissoc["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = (function (){var obj25093 = {};return obj25093;
})();
cljs.core._key = (function _key(coll){if((function (){var and__19255__auto__ = coll;if(and__19255__auto__)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__19255__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__20512__auto__ = (((coll == null))?null:coll);return (function (){var or__19267__auto__ = (cljs.core._key[(function (){var G__25097 = x__20512__auto__;return goog.typeOf(G__25097);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._key["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){if((function (){var and__19255__auto__ = coll;if(and__19255__auto__)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__19255__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__20512__auto__ = (((coll == null))?null:coll);return (function (){var or__19267__auto__ = (cljs.core._val[(function (){var G__25101 = x__20512__auto__;return goog.typeOf(G__25101);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._val["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = (function (){var obj25103 = {};return obj25103;
})();
cljs.core._disjoin = (function _disjoin(coll,v){if((function (){var and__19255__auto__ = coll;if(and__19255__auto__)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__19255__auto__;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__20512__auto__ = (((coll == null))?null:coll);return (function (){var or__19267__auto__ = (cljs.core._disjoin[(function (){var G__25107 = x__20512__auto__;return goog.typeOf(G__25107);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._disjoin["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = (function (){var obj25109 = {};return obj25109;
})();
cljs.core._peek = (function _peek(coll){if((function (){var and__19255__auto__ = coll;if(and__19255__auto__)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__19255__auto__;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__20512__auto__ = (((coll == null))?null:coll);return (function (){var or__19267__auto__ = (cljs.core._peek[(function (){var G__25113 = x__20512__auto__;return goog.typeOf(G__25113);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._peek["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){if((function (){var and__19255__auto__ = coll;if(and__19255__auto__)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__19255__auto__;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__20512__auto__ = (((coll == null))?null:coll);return (function (){var or__19267__auto__ = (cljs.core._pop[(function (){var G__25117 = x__20512__auto__;return goog.typeOf(G__25117);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._pop["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = (function (){var obj25119 = {};return obj25119;
})();
cljs.core._assoc_n = (function _assoc_n(coll,n,val){if((function (){var and__19255__auto__ = coll;if(and__19255__auto__)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__19255__auto__;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__20512__auto__ = (((coll == null))?null:coll);return (function (){var or__19267__auto__ = (cljs.core._assoc_n[(function (){var G__25123 = x__20512__auto__;return goog.typeOf(G__25123);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._assoc_n["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = (function (){var obj25125 = {};return obj25125;
})();
cljs.core._deref = (function _deref(o){if((function (){var and__19255__auto__ = o;if(and__19255__auto__)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__19255__auto__;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__20512__auto__ = (((o == null))?null:o);return (function (){var or__19267__auto__ = (cljs.core._deref[(function (){var G__25129 = x__20512__auto__;return goog.typeOf(G__25129);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._deref["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = (function (){var obj25131 = {};return obj25131;
})();
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){if((function (){var and__19255__auto__ = o;if(and__19255__auto__)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__19255__auto__;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__20512__auto__ = (((o == null))?null:o);return (function (){var or__19267__auto__ = (cljs.core._deref_with_timeout[(function (){var G__25135 = x__20512__auto__;return goog.typeOf(G__25135);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._deref_with_timeout["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = (function (){var obj25137 = {};return obj25137;
})();
cljs.core._meta = (function _meta(o){if((function (){var and__19255__auto__ = o;if(and__19255__auto__)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__19255__auto__;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__20512__auto__ = (((o == null))?null:o);return (function (){var or__19267__auto__ = (cljs.core._meta[(function (){var G__25141 = x__20512__auto__;return goog.typeOf(G__25141);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._meta["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = (function (){var obj25143 = {};return obj25143;
})();
cljs.core._with_meta = (function _with_meta(o,meta){if((function (){var and__19255__auto__ = o;if(and__19255__auto__)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__19255__auto__;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__20512__auto__ = (((o == null))?null:o);return (function (){var or__19267__auto__ = (cljs.core._with_meta[(function (){var G__25147 = x__20512__auto__;return goog.typeOf(G__25147);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._with_meta["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = (function (){var obj25149 = {};return obj25149;
})();
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){if((function (){var and__19255__auto__ = coll;if(and__19255__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__19255__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__20512__auto__ = (((coll == null))?null:coll);return (function (){var or__19267__auto__ = (cljs.core._reduce[(function (){var G__25155 = x__20512__auto__;return goog.typeOf(G__25155);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._reduce["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){if((function (){var and__19255__auto__ = coll;if(and__19255__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__19255__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__20512__auto__ = (((coll == null))?null:coll);return (function (){var or__19267__auto__ = (cljs.core._reduce[(function (){var G__25157 = x__20512__auto__;return goog.typeOf(G__25157);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._reduce["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_reduce.cljs$core$IFn$_invoke$arity$2 = _reduce__2;
_reduce.cljs$core$IFn$_invoke$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = (function (){var obj25159 = {};return obj25159;
})();
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){if((function (){var and__19255__auto__ = coll;if(and__19255__auto__)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__19255__auto__;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__20512__auto__ = (((coll == null))?null:coll);return (function (){var or__19267__auto__ = (cljs.core._kv_reduce[(function (){var G__25163 = x__20512__auto__;return goog.typeOf(G__25163);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._kv_reduce["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = (function (){var obj25165 = {};return obj25165;
})();
cljs.core._equiv = (function _equiv(o,other){if((function (){var and__19255__auto__ = o;if(and__19255__auto__)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__19255__auto__;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__20512__auto__ = (((o == null))?null:o);return (function (){var or__19267__auto__ = (cljs.core._equiv[(function (){var G__25169 = x__20512__auto__;return goog.typeOf(G__25169);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._equiv["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = (function (){var obj25171 = {};return obj25171;
})();
cljs.core._hash = (function _hash(o){if((function (){var and__19255__auto__ = o;if(and__19255__auto__)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__19255__auto__;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__20512__auto__ = (((o == null))?null:o);return (function (){var or__19267__auto__ = (cljs.core._hash[(function (){var G__25175 = x__20512__auto__;return goog.typeOf(G__25175);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._hash["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = (function (){var obj25177 = {};return obj25177;
})();
cljs.core._seq = (function _seq(o){if((function (){var and__19255__auto__ = o;if(and__19255__auto__)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__19255__auto__;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__20512__auto__ = (((o == null))?null:o);return (function (){var or__19267__auto__ = (cljs.core._seq[(function (){var G__25181 = x__20512__auto__;return goog.typeOf(G__25181);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._seq["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = (function (){var obj25183 = {};return obj25183;
})();
cljs.core.IList = (function (){var obj25185 = {};return obj25185;
})();
cljs.core.IRecord = (function (){var obj25187 = {};return obj25187;
})();
cljs.core.IReversible = (function (){var obj25189 = {};return obj25189;
})();
cljs.core._rseq = (function _rseq(coll){if((function (){var and__19255__auto__ = coll;if(and__19255__auto__)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__19255__auto__;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__20512__auto__ = (((coll == null))?null:coll);return (function (){var or__19267__auto__ = (cljs.core._rseq[(function (){var G__25193 = x__20512__auto__;return goog.typeOf(G__25193);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._rseq["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = (function (){var obj25195 = {};return obj25195;
})();
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){if((function (){var and__19255__auto__ = coll;if(and__19255__auto__)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__19255__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__20512__auto__ = (((coll == null))?null:coll);return (function (){var or__19267__auto__ = (cljs.core._sorted_seq[(function (){var G__25199 = x__20512__auto__;return goog.typeOf(G__25199);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._sorted_seq["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){if((function (){var and__19255__auto__ = coll;if(and__19255__auto__)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__19255__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__20512__auto__ = (((coll == null))?null:coll);return (function (){var or__19267__auto__ = (cljs.core._sorted_seq_from[(function (){var G__25203 = x__20512__auto__;return goog.typeOf(G__25203);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._sorted_seq_from["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){if((function (){var and__19255__auto__ = coll;if(and__19255__auto__)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__19255__auto__;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__20512__auto__ = (((coll == null))?null:coll);return (function (){var or__19267__auto__ = (cljs.core._entry_key[(function (){var G__25207 = x__20512__auto__;return goog.typeOf(G__25207);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._entry_key["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){if((function (){var and__19255__auto__ = coll;if(and__19255__auto__)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__19255__auto__;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__20512__auto__ = (((coll == null))?null:coll);return (function (){var or__19267__auto__ = (cljs.core._comparator[(function (){var G__25211 = x__20512__auto__;return goog.typeOf(G__25211);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._comparator["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IWriter = (function (){var obj25213 = {};return obj25213;
})();
cljs.core._write = (function _write(writer,s){if((function (){var and__19255__auto__ = writer;if(and__19255__auto__)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__19255__auto__;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__20512__auto__ = (((writer == null))?null:writer);return (function (){var or__19267__auto__ = (cljs.core._write[(function (){var G__25217 = x__20512__auto__;return goog.typeOf(G__25217);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._write["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){if((function (){var and__19255__auto__ = writer;if(and__19255__auto__)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__19255__auto__;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__20512__auto__ = (((writer == null))?null:writer);return (function (){var or__19267__auto__ = (cljs.core._flush[(function (){var G__25221 = x__20512__auto__;return goog.typeOf(G__25221);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._flush["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = (function (){var obj25223 = {};return obj25223;
})();
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){if((function (){var and__19255__auto__ = o;if(and__19255__auto__)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__19255__auto__;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__20512__auto__ = (((o == null))?null:o);return (function (){var or__19267__auto__ = (cljs.core._pr_writer[(function (){var G__25227 = x__20512__auto__;return goog.typeOf(G__25227);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._pr_writer["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = (function (){var obj25229 = {};return obj25229;
})();
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){if((function (){var and__19255__auto__ = d;if(and__19255__auto__)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__19255__auto__;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__20512__auto__ = (((d == null))?null:d);return (function (){var or__19267__auto__ = (cljs.core._realized_QMARK_[(function (){var G__25233 = x__20512__auto__;return goog.typeOf(G__25233);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._realized_QMARK_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = (function (){var obj25235 = {};return obj25235;
})();
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__19255__auto__;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (cljs.core._notify_watches[(function (){var G__25239 = x__20512__auto__;return goog.typeOf(G__25239);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._notify_watches["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__19255__auto__;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (cljs.core._add_watch[(function (){var G__25243 = x__20512__auto__;return goog.typeOf(G__25243);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._add_watch["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){if((function (){var and__19255__auto__ = this$;if(and__19255__auto__)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__19255__auto__;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__20512__auto__ = (((this$ == null))?null:this$);return (function (){var or__19267__auto__ = (cljs.core._remove_watch[(function (){var G__25247 = x__20512__auto__;return goog.typeOf(G__25247);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._remove_watch["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = (function (){var obj25249 = {};return obj25249;
})();
cljs.core._as_transient = (function _as_transient(coll){if((function (){var and__19255__auto__ = coll;if(and__19255__auto__)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__19255__auto__;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__20512__auto__ = (((coll == null))?null:coll);return (function (){var or__19267__auto__ = (cljs.core._as_transient[(function (){var G__25253 = x__20512__auto__;return goog.typeOf(G__25253);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._as_transient["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = (function (){var obj25255 = {};return obj25255;
})();
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){if((function (){var and__19255__auto__ = tcoll;if(and__19255__auto__)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__19255__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__20512__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__19267__auto__ = (cljs.core._conj_BANG_[(function (){var G__25259 = x__20512__auto__;return goog.typeOf(G__25259);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._conj_BANG_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){if((function (){var and__19255__auto__ = tcoll;if(and__19255__auto__)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__19255__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__20512__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__19267__auto__ = (cljs.core._persistent_BANG_[(function (){var G__25263 = x__20512__auto__;return goog.typeOf(G__25263);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._persistent_BANG_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = (function (){var obj25265 = {};return obj25265;
})();
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){if((function (){var and__19255__auto__ = tcoll;if(and__19255__auto__)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__19255__auto__;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__20512__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__19267__auto__ = (cljs.core._assoc_BANG_[(function (){var G__25269 = x__20512__auto__;return goog.typeOf(G__25269);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._assoc_BANG_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = (function (){var obj25271 = {};return obj25271;
})();
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){if((function (){var and__19255__auto__ = tcoll;if(and__19255__auto__)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__19255__auto__;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__20512__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__19267__auto__ = (cljs.core._dissoc_BANG_[(function (){var G__25275 = x__20512__auto__;return goog.typeOf(G__25275);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._dissoc_BANG_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = (function (){var obj25277 = {};return obj25277;
})();
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){if((function (){var and__19255__auto__ = tcoll;if(and__19255__auto__)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__19255__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__20512__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__19267__auto__ = (cljs.core._assoc_n_BANG_[(function (){var G__25281 = x__20512__auto__;return goog.typeOf(G__25281);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._assoc_n_BANG_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){if((function (){var and__19255__auto__ = tcoll;if(and__19255__auto__)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__19255__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__20512__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__19267__auto__ = (cljs.core._pop_BANG_[(function (){var G__25285 = x__20512__auto__;return goog.typeOf(G__25285);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._pop_BANG_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = (function (){var obj25287 = {};return obj25287;
})();
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){if((function (){var and__19255__auto__ = tcoll;if(and__19255__auto__)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__19255__auto__;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__20512__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__19267__auto__ = (cljs.core._disjoin_BANG_[(function (){var G__25291 = x__20512__auto__;return goog.typeOf(G__25291);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._disjoin_BANG_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = (function (){var obj25293 = {};return obj25293;
})();
cljs.core._compare = (function _compare(x,y){if((function (){var and__19255__auto__ = x;if(and__19255__auto__)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__19255__auto__;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__20512__auto__ = (((x == null))?null:x);return (function (){var or__19267__auto__ = (cljs.core._compare[(function (){var G__25297 = x__20512__auto__;return goog.typeOf(G__25297);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._compare["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = (function (){var obj25299 = {};return obj25299;
})();
cljs.core._drop_first = (function _drop_first(coll){if((function (){var and__19255__auto__ = coll;if(and__19255__auto__)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__19255__auto__;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__20512__auto__ = (((coll == null))?null:coll);return (function (){var or__19267__auto__ = (cljs.core._drop_first[(function (){var G__25303 = x__20512__auto__;return goog.typeOf(G__25303);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._drop_first["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = (function (){var obj25305 = {};return obj25305;
})();
cljs.core._chunked_first = (function _chunked_first(coll){if((function (){var and__19255__auto__ = coll;if(and__19255__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__19255__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__20512__auto__ = (((coll == null))?null:coll);return (function (){var or__19267__auto__ = (cljs.core._chunked_first[(function (){var G__25309 = x__20512__auto__;return goog.typeOf(G__25309);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._chunked_first["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){if((function (){var and__19255__auto__ = coll;if(and__19255__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__19255__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__20512__auto__ = (((coll == null))?null:coll);return (function (){var or__19267__auto__ = (cljs.core._chunked_rest[(function (){var G__25313 = x__20512__auto__;return goog.typeOf(G__25313);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._chunked_rest["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = (function (){var obj25315 = {};return obj25315;
})();
cljs.core._chunked_next = (function _chunked_next(coll){if((function (){var and__19255__auto__ = coll;if(and__19255__auto__)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__19255__auto__;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__20512__auto__ = (((coll == null))?null:coll);return (function (){var or__19267__auto__ = (cljs.core._chunked_next[(function (){var G__25319 = x__20512__auto__;return goog.typeOf(G__25319);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._chunked_next["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INamed = (function (){var obj25321 = {};return obj25321;
})();
cljs.core._name = (function _name(x){if((function (){var and__19255__auto__ = x;if(and__19255__auto__)
{return x.cljs$core$INamed$_name$arity$1;
} else
{return and__19255__auto__;
}
})())
{return x.cljs$core$INamed$_name$arity$1(x);
} else
{var x__20512__auto__ = (((x == null))?null:x);return (function (){var or__19267__auto__ = (cljs.core._name[(function (){var G__25325 = x__20512__auto__;return goog.typeOf(G__25325);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._name["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("INamed.-name",x);
}
}
})().call(null,x);
}
});
cljs.core._namespace = (function _namespace(x){if((function (){var and__19255__auto__ = x;if(and__19255__auto__)
{return x.cljs$core$INamed$_namespace$arity$1;
} else
{return and__19255__auto__;
}
})())
{return x.cljs$core$INamed$_namespace$arity$1(x);
} else
{var x__20512__auto__ = (((x == null))?null:x);return (function (){var or__19267__auto__ = (cljs.core._namespace[(function (){var G__25329 = x__20512__auto__;return goog.typeOf(G__25329);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._namespace["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("INamed.-namespace",x);
}
}
})().call(null,x);
}
});
cljs.core.IAtom = (function (){var obj25331 = {};return obj25331;
})();
cljs.core.IReset = (function (){var obj25333 = {};return obj25333;
})();
cljs.core._reset_BANG_ = (function _reset_BANG_(o,new_value){if((function (){var and__19255__auto__ = o;if(and__19255__auto__)
{return o.cljs$core$IReset$_reset_BANG_$arity$2;
} else
{return and__19255__auto__;
}
})())
{return o.cljs$core$IReset$_reset_BANG_$arity$2(o,new_value);
} else
{var x__20512__auto__ = (((o == null))?null:o);return (function (){var or__19267__auto__ = (cljs.core._reset_BANG_[(function (){var G__25337 = x__20512__auto__;return goog.typeOf(G__25337);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._reset_BANG_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IReset.-reset!",o);
}
}
})().call(null,o,new_value);
}
});
cljs.core.ISwap = (function (){var obj25339 = {};return obj25339;
})();
cljs.core._swap_BANG_ = (function() {
var _swap_BANG_ = null;
var _swap_BANG___2 = (function (o,f){if((function (){var and__19255__auto__ = o;if(and__19255__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$2;
} else
{return and__19255__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$2(o,f);
} else
{var x__20512__auto__ = (((o == null))?null:o);return (function (){var or__19267__auto__ = (cljs.core._swap_BANG_[(function (){var G__25349 = x__20512__auto__;return goog.typeOf(G__25349);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f);
}
});
var _swap_BANG___3 = (function (o,f,a){if((function (){var and__19255__auto__ = o;if(and__19255__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$3;
} else
{return and__19255__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$3(o,f,a);
} else
{var x__20512__auto__ = (((o == null))?null:o);return (function (){var or__19267__auto__ = (cljs.core._swap_BANG_[(function (){var G__25351 = x__20512__auto__;return goog.typeOf(G__25351);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a);
}
});
var _swap_BANG___4 = (function (o,f,a,b){if((function (){var and__19255__auto__ = o;if(and__19255__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$4;
} else
{return and__19255__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$4(o,f,a,b);
} else
{var x__20512__auto__ = (((o == null))?null:o);return (function (){var or__19267__auto__ = (cljs.core._swap_BANG_[(function (){var G__25353 = x__20512__auto__;return goog.typeOf(G__25353);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b);
}
});
var _swap_BANG___5 = (function (o,f,a,b,xs){if((function (){var and__19255__auto__ = o;if(and__19255__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$5;
} else
{return and__19255__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$5(o,f,a,b,xs);
} else
{var x__20512__auto__ = (((o == null))?null:o);return (function (){var or__19267__auto__ = (cljs.core._swap_BANG_[(function (){var G__25355 = x__20512__auto__;return goog.typeOf(G__25355);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b,xs);
}
});
_swap_BANG_ = function(o,f,a,b,xs){
switch(arguments.length){
case 2:
return _swap_BANG___2.call(this,o,f);
case 3:
return _swap_BANG___3.call(this,o,f,a);
case 4:
return _swap_BANG___4.call(this,o,f,a,b);
case 5:
return _swap_BANG___5.call(this,o,f,a,b,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = _swap_BANG___2;
_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = _swap_BANG___3;
_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = _swap_BANG___4;
_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = _swap_BANG___5;
return _swap_BANG_;
})()
;

/**
* @constructor
*/
cljs.core.StringBufferWriter = (function (sb){
this.sb = sb;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
})
cljs.core.StringBufferWriter.cljs$lang$type = true;
cljs.core.StringBufferWriter.cljs$lang$ctorStr = "cljs.core/StringBufferWriter";
cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){var self__ = this;
var ___$1 = this;return self__.sb.append(s);
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return null;
});
cljs.core.__GT_StringBufferWriter = (function __GT_StringBufferWriter(sb){return (new cljs.core.StringBufferWriter(sb));
});
/**
* Support so that collections can implement toString without
* loading all the printing machinery.
*/
cljs.core.pr_str_STAR_ = (function pr_str_STAR_(obj){var sb = (new goog.string.StringBuffer());var writer = (new cljs.core.StringBufferWriter(sb));obj.cljs$core$IPrintWithWriter$_pr_writer$arity$3(null,writer,cljs.core.pr_opts());
writer.cljs$core$IWriter$_flush$arity$1(null);
return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
});
cljs.core.int_rotate_left = (function int_rotate_left(x,n){return ((x << n) | (x >>> (- n)));
});
if((typeof Math.imul !== 'undefined') && (!(((function (){var G__25358 = (4294967295);var G__25359 = (5);return (Math.imul.cljs$core$IFn$_invoke$arity$2 ? Math.imul.cljs$core$IFn$_invoke$arity$2(G__25358,G__25359) : Math.imul.call(null,G__25358,G__25359));
})() === (0)))))
{cljs.core.imul = (function imul(a,b){var G__25362 = a;var G__25363 = b;return (Math.imul.cljs$core$IFn$_invoke$arity$2 ? Math.imul.cljs$core$IFn$_invoke$arity$2(G__25362,G__25363) : Math.imul.call(null,G__25362,G__25363));
});
} else
{cljs.core.imul = (function imul(a,b){var ah = ((a >>> (16)) & (65535));var al = (a & (65535));var bh = ((b >>> (16)) & (65535));var bl = (b & (65535));return (((al * bl) + ((((ah * bl) + (al * bh)) << (16)) >>> (0))) | (0));
});
}
cljs.core.m3_seed = (0);
cljs.core.m3_C1 = (3432918353);
cljs.core.m3_C2 = (461845907);
cljs.core.m3_mix_K1 = (function m3_mix_K1(k1){return cljs.core.imul(cljs.core.int_rotate_left(cljs.core.imul(k1,cljs.core.m3_C1),(15)),cljs.core.m3_C2);
});
cljs.core.m3_mix_H1 = (function m3_mix_H1(h1,k1){return (cljs.core.imul(cljs.core.int_rotate_left((h1 ^ k1),(13)),(5)) + (3864292196));
});
cljs.core.m3_fmix = (function m3_fmix(h1,len){var h1__$1 = h1;var h1__$2 = (h1__$1 ^ len);var h1__$3 = (h1__$2 ^ (h1__$2 >>> (16)));var h1__$4 = cljs.core.imul(h1__$3,(2246822507));var h1__$5 = (h1__$4 ^ (h1__$4 >>> (13)));var h1__$6 = cljs.core.imul(h1__$5,(3266489909));var h1__$7 = (h1__$6 ^ (h1__$6 >>> (16)));return h1__$7;
});
cljs.core.m3_hash_int = (function m3_hash_int(in$){if((in$ === (0)))
{return in$;
} else
{var k1 = cljs.core.m3_mix_K1(in$);var h1 = cljs.core.m3_mix_H1(cljs.core.m3_seed,k1);return cljs.core.m3_fmix(h1,(4));
}
});
cljs.core.m3_hash_unencoded_chars = (function m3_hash_unencoded_chars(in$){var h1 = (function (){var i = (1);var h1 = cljs.core.m3_seed;while(true){
if((i < in$.length))
{{
var G__25364 = (i + (2));
var G__25365 = cljs.core.m3_mix_H1(h1,cljs.core.m3_mix_K1((in$.charCodeAt((i - (1))) | (in$.charCodeAt(i) << (16)))));
i = G__25364;
h1 = G__25365;
continue;
}
} else
{return h1;
}
break;
}
})();var h1__$1 = ((((in$.length & (1)) === (1)))?(h1 ^ cljs.core.m3_mix_K1(in$.charCodeAt((in$.length - (1))))):h1);return cljs.core.m3_fmix(h1__$1,cljs.core.imul((2),in$.length));
});
cljs.core.string_hash_cache = (function (){var obj25367 = {};return obj25367;
})();
cljs.core.string_hash_cache_count = (0);
cljs.core.hash_string_STAR_ = (function hash_string_STAR_(s){if(!((s == null)))
{var len = s.length;if((len > (0)))
{var i = (0);var hash = (0);while(true){
if((i < len))
{{
var G__25368 = (i + (1));
var G__25369 = (cljs.core.imul((31),hash) + s.charCodeAt(i));
i = G__25368;
hash = G__25369;
continue;
}
} else
{return hash;
}
break;
}
} else
{return (0);
}
} else
{return (0);
}
});
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){var h = cljs.core.hash_string_STAR_(k);(cljs.core.string_hash_cache[k] = h);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + (1));
return h;
});
cljs.core.hash_string = (function hash_string(k){if((cljs.core.string_hash_cache_count > (255)))
{cljs.core.string_hash_cache = (function (){var obj25373 = {};return obj25373;
})();
cljs.core.string_hash_cache_count = (0);
} else
{}
var h = (cljs.core.string_hash_cache[k]);if(typeof h === 'number')
{return h;
} else
{return cljs.core.add_to_string_hash_cache(k);
}
});
cljs.core.hash = (function hash(o){if((function (){var G__25376 = o;if(G__25376)
{var bit__20549__auto__ = (G__25376.cljs$lang$protocol_mask$partition0$ & (4194304));if((bit__20549__auto__) || (G__25376.cljs$core$IHash$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(null);
} else
{if(typeof o === 'number')
{return ((function (){var G__25377 = o;return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__25377) : Math.floor.call(null,G__25377));
})() % (2147483647));
} else
{if(o === true)
{return (1);
} else
{if(o === false)
{return (0);
} else
{if(typeof o === 'string')
{return cljs.core.m3_hash_int(cljs.core.hash_string(o));
} else
{if((o == null))
{return (0);
} else
{return cljs.core._hash(o);

}
}
}
}
}
}
});
cljs.core.hash_combine = (function hash_combine(seed,hash){return (seed ^ (((hash + (2654435769)) + (seed << (6))) + (seed >> (2))));
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){return (o instanceof t);
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){return (x instanceof cljs.core.Symbol);
});
cljs.core.hash_symbol = (function hash_symbol(sym){return cljs.core.hash_combine(cljs.core.m3_hash_unencoded_chars(sym.name),cljs.core.hash_string(sym.ns));
});
cljs.core.compare_symbols = (function compare_symbols(a,b){if(cljs.core.truth_((function (){var G__25386 = a;var G__25387 = b;return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__25386,G__25387) : cljs.core._EQ_.call(null,G__25386,G__25387));
})()))
{return (0);
} else
{if(cljs.core.truth_((function (){var and__19255__auto__ = cljs.core.not(a.ns);if(and__19255__auto__)
{return b.ns;
} else
{return and__19255__auto__;
}
})()))
{return (-1);
} else
{if(cljs.core.truth_(a.ns))
{if(cljs.core.not(b.ns))
{return (1);
} else
{var nsc = (function (){var G__25388 = a.ns;var G__25389 = b.ns;return (cljs.core.compare.cljs$core$IFn$_invoke$arity$2 ? cljs.core.compare.cljs$core$IFn$_invoke$arity$2(G__25388,G__25389) : cljs.core.compare.call(null,G__25388,G__25389));
})();if((nsc === (0)))
{var G__25390 = a.name;var G__25391 = b.name;return (cljs.core.compare.cljs$core$IFn$_invoke$arity$2 ? cljs.core.compare.cljs$core$IFn$_invoke$arity$2(G__25390,G__25391) : cljs.core.compare.call(null,G__25390,G__25391));
} else
{return nsc;
}
}
} else
{var G__25392 = a.name;var G__25393 = b.name;return (cljs.core.compare.cljs$core$IFn$_invoke$arity$2 ? cljs.core.compare.cljs$core$IFn$_invoke$arity$2(G__25392,G__25393) : cljs.core.compare.call(null,G__25392,G__25393));

}
}
}
});

/**
* @constructor
*/
cljs.core.Symbol = (function (ns,name,str,_hash,_meta){
this.ns = ns;
this.name = name;
this.str = str;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2154168321;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Symbol.cljs$lang$type = true;
cljs.core.Symbol.cljs$lang$ctorStr = "cljs.core/Symbol";
cljs.core.Symbol.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/Symbol");
});
cljs.core.Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){var self__ = this;
var o__$1 = this;return cljs.core._write(writer,self__.str);
});
cljs.core.Symbol.prototype.cljs$core$INamed$_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.name;
});
cljs.core.Symbol.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.ns;
});
cljs.core.Symbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (sym){var self__ = this;
var sym__$1 = this;var h__20006__auto__ = self__._hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_symbol(sym__$1);self__._hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
cljs.core.Symbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new cljs.core.Symbol(self__.ns,self__.name,self__.str,self__._hash,new_meta));
});
cljs.core.Symbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__._meta;
});
cljs.core.Symbol.prototype.call = (function() {
var G__25395 = null;
var G__25395__2 = (function (self__,coll){var self__ = this;
var self____$1 = this;var sym = self____$1;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,null);
});
var G__25395__3 = (function (self__,coll,not_found){var self__ = this;
var self____$1 = this;var sym = self____$1;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,not_found);
});
G__25395 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__25395__2.call(this,self__,coll);
case 3:
return G__25395__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25395.cljs$core$IFn$_invoke$arity$2 = G__25395__2;
G__25395.cljs$core$IFn$_invoke$arity$3 = G__25395__3;
return G__25395;
})()
;
cljs.core.Symbol.prototype.apply = (function (self__,args25394){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args25394)));
});
cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){var self__ = this;
var sym = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,null);
});
cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){var self__ = this;
var sym = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,not_found);
});
cljs.core.Symbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if((other instanceof cljs.core.Symbol))
{return (self__.str === other.str);
} else
{return false;
}
});
cljs.core.Symbol.prototype.toString = (function (){var self__ = this;
var _ = this;return self__.str;
});
cljs.core.Symbol.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.__GT_Symbol = (function __GT_Symbol(ns,name,str,_hash,_meta){return (new cljs.core.Symbol(ns,name,str,_hash,_meta));
});
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){if((name instanceof cljs.core.Symbol))
{return name;
} else
{return symbol.cljs$core$IFn$_invoke$arity$2(null,name);
}
});
var symbol__2 = (function (ns,name){var sym_str = ((!((ns == null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):name);return (new cljs.core.Symbol(ns,name,sym_str,null,null));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
symbol.cljs$core$IFn$_invoke$arity$1 = symbol__1;
symbol.cljs$core$IFn$_invoke$arity$2 = symbol__2;
return symbol;
})()
;
cljs.core.clone = (function clone(value){return cljs.core._clone(value);
});
cljs.core.cloneable_QMARK_ = (function cloneable_QMARK_(value){var G__25399 = value;if(G__25399)
{var bit__20565__auto__ = (G__25399.cljs$lang$protocol_mask$partition1$ & (8192));if((bit__20565__auto__) || (G__25399.cljs$core$ICloneable$))
{return true;
} else
{if((!G__25399.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__25399);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__25399);
}
});
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){if((coll == null))
{return null;
} else
{if((function (){var G__25401 = coll;if(G__25401)
{var bit__20549__auto__ = (G__25401.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__20549__auto__) || (G__25401.cljs$core$ISeqable$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$ISeqable$_seq$arity$1(null);
} else
{if(coll instanceof Array)
{if((coll.length === (0)))
{return null;
} else
{return (new cljs.core.IndexedSeq(coll,(0)));
}
} else
{if(typeof coll === 'string')
{if((coll.length === (0)))
{return null;
} else
{return (new cljs.core.IndexedSeq(coll,(0)));
}
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,coll))
{return cljs.core._seq(coll);
} else
{throw (new Error((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(coll)+" is not ISeqable")));

}
}
}
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){if((coll == null))
{return null;
} else
{if((function (){var G__25403 = coll;if(G__25403)
{var bit__20549__auto__ = (G__25403.cljs$lang$protocol_mask$partition0$ & (64));if((bit__20549__auto__) || (G__25403.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(null);
} else
{var s = cljs.core.seq(coll);if((s == null))
{return null;
} else
{return cljs.core._first(s);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){if(!((coll == null)))
{if((function (){var G__25405 = coll;if(G__25405)
{var bit__20549__auto__ = (G__25405.cljs$lang$protocol_mask$partition0$ & (64));if((bit__20549__auto__) || (G__25405.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(null);
} else
{var s = cljs.core.seq(coll);if(s)
{return cljs.core._rest(s);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){if((coll == null))
{return null;
} else
{if((function (){var G__25407 = coll;if(G__25407)
{var bit__20549__auto__ = (G__25407.cljs$lang$protocol_mask$partition0$ & (128));if((bit__20549__auto__) || (G__25407.cljs$core$INext$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$INext$_next$arity$1(null);
} else
{return cljs.core.seq(cljs.core.rest(coll));
}
}
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){return true;
});
var _EQ___2 = (function (x,y){if((x == null))
{return (y == null);
} else
{return ((x === y)) || (cljs.core._equiv(x,y));
}
});
var _EQ___3 = (function() { 
var G__25412__delegate = function (x,y,more){while(true){
if(_EQ_.cljs$core$IFn$_invoke$arity$2(x,y))
{if(cljs.core.next(more))
{{
var G__25413 = y;
var G__25414 = cljs.core.first(more);
var G__25415 = cljs.core.next(more);
x = G__25413;
y = G__25414;
more = G__25415;
continue;
}
} else
{return _EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__25412 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__25412__delegate.call(this,x,y,more);};
G__25412.cljs$lang$maxFixedArity = 2;
G__25412.cljs$lang$applyTo = (function (arglist__25416){
var x = cljs.core.first(arglist__25416);
arglist__25416 = cljs.core.next(arglist__25416);
var y = cljs.core.first(arglist__25416);
var more = cljs.core.rest(arglist__25416);
return G__25412__delegate(x,y,more);
});
G__25412.cljs$core$IFn$_invoke$arity$variadic = G__25412__delegate;
return G__25412;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ___1;
_EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ___2;
_EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ_;
})()
;
/**
* Mix final collection hash for ordered or unordered collections.
* hash-basis is the combined collection hash, count is the number
* of elements included in the basis. Note this is the hash code
* consistent with =, different from .hashCode.
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.mix_collection_hash = (function mix_collection_hash(hash_basis,count){var h1 = cljs.core.m3_seed;var k1 = cljs.core.m3_mix_K1(hash_basis);var h1__$1 = cljs.core.m3_mix_H1(h1,k1);return cljs.core.m3_fmix(h1__$1,count);
});
/**
* Returns the hash code, consistent with =, for an external ordered
* collection implementing Iterable.
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.hash_ordered_coll = (function hash_ordered_coll(coll){var n = (0);var hash_code = (1);var coll__$1 = cljs.core.seq(coll);while(true){
if(!((coll__$1 == null)))
{{
var G__25417 = (n + (1));
var G__25418 = ((cljs.core.imul((31),hash_code) + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__25419 = cljs.core.next(coll__$1);
n = G__25417;
hash_code = G__25418;
coll__$1 = G__25419;
continue;
}
} else
{return cljs.core.mix_collection_hash(hash_code,n);
}
break;
}
});
/**
* Returns the hash code, consistent with =, for an external unordered
* collection implementing Iterable. For maps, the iterator should
* return map entries whose hash is computed as
* (hash-ordered-coll [k v]).
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.hash_unordered_coll = (function hash_unordered_coll(coll){var n = (0);var hash_code = (0);var coll__$1 = cljs.core.seq(coll);while(true){
if(!((coll__$1 == null)))
{{
var G__25420 = (n + (1));
var G__25421 = ((hash_code + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__25422 = cljs.core.next(coll__$1);
n = G__25420;
hash_code = G__25421;
coll__$1 = G__25422;
continue;
}
} else
{return cljs.core.mix_collection_hash(hash_code,n);
}
break;
}
});
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){return (0);
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var o__$1 = this;return ((other instanceof Date)) && ((o__$1.toString() === other.toString()));
});
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){return (x === o);
}));
(cljs.core.IMeta["function"] = true);
(cljs.core._meta["function"] = (function (_){return null;
}));
(cljs.core.Fn["function"] = true);
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){var G__25423 = o;return goog.getUid(G__25423);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){return (x + (1));
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorStr = "cljs.core/Reduced";
cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){var self__ = this;
var o__$1 = this;return self__.val;
});
cljs.core.__GT_Reduced = (function __GT_Reduced(val){return (new cljs.core.Reduced(val));
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){return (new cljs.core.Reduced(x));
});
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){return (r instanceof cljs.core.Reduced);
});
cljs.core.deref = (function deref(o){return cljs.core._deref(o);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){var cnt = cljs.core._count(cicoll);if((cnt === (0)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{var val = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,(0));var n = (1);while(true){
if((n < cnt))
{var nval = (function (){var G__25430 = val;var G__25431 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25430,G__25431) : f.call(null,G__25430,G__25431));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__25436 = nval;
var G__25437 = (n + (1));
val = G__25436;
n = G__25437;
continue;
}
}
} else
{return val;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){var cnt = cljs.core._count(cicoll);var val__$1 = val;var n = (0);while(true){
if((n < cnt))
{var nval = (function (){var G__25432 = val__$1;var G__25433 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25432,G__25433) : f.call(null,G__25432,G__25433));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__25438 = nval;
var G__25439 = (n + (1));
val__$1 = G__25438;
n = G__25439;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){var cnt = cljs.core._count(cicoll);var val__$1 = val;var n = idx;while(true){
if((n < cnt))
{var nval = (function (){var G__25434 = val__$1;var G__25435 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25434,G__25435) : f.call(null,G__25434,G__25435));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__25440 = nval;
var G__25441 = (n + (1));
val__$1 = G__25440;
n = G__25441;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ci_reduce.cljs$core$IFn$_invoke$arity$2 = ci_reduce__2;
ci_reduce.cljs$core$IFn$_invoke$arity$3 = ci_reduce__3;
ci_reduce.cljs$core$IFn$_invoke$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){var cnt = arr.length;if((arr.length === (0)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{var val = (arr[(0)]);var n = (1);while(true){
if((n < cnt))
{var nval = (function (){var G__25448 = val;var G__25449 = (arr[n]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25448,G__25449) : f.call(null,G__25448,G__25449));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__25454 = nval;
var G__25455 = (n + (1));
val = G__25454;
n = G__25455;
continue;
}
}
} else
{return val;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){var cnt = arr.length;var val__$1 = val;var n = (0);while(true){
if((n < cnt))
{var nval = (function (){var G__25450 = val__$1;var G__25451 = (arr[n]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25450,G__25451) : f.call(null,G__25450,G__25451));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__25456 = nval;
var G__25457 = (n + (1));
val__$1 = G__25456;
n = G__25457;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){var cnt = arr.length;var val__$1 = val;var n = idx;while(true){
if((n < cnt))
{var nval = (function (){var G__25452 = val__$1;var G__25453 = (arr[n]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25452,G__25453) : f.call(null,G__25452,G__25453));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__25458 = nval;
var G__25459 = (n + (1));
val__$1 = G__25458;
n = G__25459;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_reduce.cljs$core$IFn$_invoke$arity$2 = array_reduce__2;
array_reduce.cljs$core$IFn$_invoke$arity$3 = array_reduce__3;
array_reduce.cljs$core$IFn$_invoke$arity$4 = array_reduce__4;
return array_reduce;
})()
;
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){var G__25461 = x;if(G__25461)
{var bit__20565__auto__ = (G__25461.cljs$lang$protocol_mask$partition0$ & (2));if((bit__20565__auto__) || (G__25461.cljs$core$ICounted$))
{return true;
} else
{if((!G__25461.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__25461);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__25461);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){var G__25463 = x;if(G__25463)
{var bit__20565__auto__ = (G__25463.cljs$lang$protocol_mask$partition0$ & (16));if((bit__20565__auto__) || (G__25463.cljs$core$IIndexed$))
{return true;
} else
{if((!G__25463.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__25463);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__25463);
}
});

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (arr,i){
this.arr = arr;
this.i = i;
this.cljs$lang$protocol_mask$partition0$ = 166199550;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorStr = "cljs.core/IndexedSeq";
cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.IndexedSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;var i__$1 = (n + self__.i);if((i__$1 < self__.arr.length))
{return (self__.arr[i__$1]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;var i__$1 = (n + self__.i);if((i__$1 < self__.arr.length))
{return (self__.arr[i__$1]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.IndexedSeq(self__.arr,self__.i));
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(((self__.i + (1)) < self__.arr.length))
{return (new cljs.core.IndexedSeq(self__.arr,(self__.i + (1))));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.arr.length - self__.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var c = cljs.core._count(coll__$1);if((c > (0)))
{return (new cljs.core.RSeq(coll__$1,(c - (1)),null));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll(coll__$1);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;var G__25464 = coll__$1;var G__25465 = other;return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(G__25464,G__25465) : cljs.core.equiv_sequential.call(null,G__25464,G__25465));
});
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,(self__.arr[self__.i]),(self__.i + (1)));
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,start,self__.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.arr[self__.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(((self__.i + (1)) < self__.arr.length))
{return (new cljs.core.IndexedSeq(self__.arr,(self__.i + (1))));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;var G__25466 = o;var G__25467 = coll__$1;return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(G__25466,G__25467) : cljs.core.cons.call(null,G__25466,G__25467));
});
cljs.core.__GT_IndexedSeq = (function __GT_IndexedSeq(arr,i){return (new cljs.core.IndexedSeq(arr,i));
});
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){return prim_seq.cljs$core$IFn$_invoke$arity$2(prim,(0));
});
var prim_seq__2 = (function (prim,i){if((i < prim.length))
{return (new cljs.core.IndexedSeq(prim,i));
} else
{return null;
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prim_seq.cljs$core$IFn$_invoke$arity$1 = prim_seq__1;
prim_seq.cljs$core$IFn$_invoke$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(array,(0));
});
var array_seq__2 = (function (array,i){return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_seq.cljs$core$IFn$_invoke$arity$1 = array_seq__1;
array_seq.cljs$core$IFn$_invoke$arity$2 = array_seq__2;
return array_seq;
})()
;

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorStr = "cljs.core/RSeq";
cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.RSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.RSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.RSeq(self__.ci,self__.i,self__.meta));
});
cljs.core.RSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i > (0)))
{return (new cljs.core.RSeq(self__.ci,(self__.i - (1)),null));
} else
{return null;
}
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (self__.i + (1));
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll(coll__$1);
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;var G__25470 = coll__$1;var G__25471 = other;return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(G__25470,G__25471) : cljs.core.equiv_sequential.call(null,G__25470,G__25471));
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var G__25472 = cljs.core.List.EMPTY;var G__25473 = self__.meta;return (cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2(G__25472,G__25473) : cljs.core.with_meta.call(null,G__25472,G__25473));
});
cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (col,f){var self__ = this;
var col__$1 = this;var G__25474 = f;var G__25475 = col__$1;return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(G__25474,G__25475) : cljs.core.seq_reduce.call(null,G__25474,G__25475));
});
cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (col,f,start){var self__ = this;
var col__$1 = this;var G__25476 = f;var G__25477 = start;var G__25478 = col__$1;return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(G__25476,G__25477,G__25478) : cljs.core.seq_reduce.call(null,G__25476,G__25477,G__25478));
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.ci,self__.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i > (0)))
{return (new cljs.core.RSeq(self__.ci,(self__.i - (1)),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.RSeq(self__.ci,self__.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;var G__25479 = o;var G__25480 = coll__$1;return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(G__25479,G__25480) : cljs.core.cons.call(null,G__25479,G__25480));
});
cljs.core.__GT_RSeq = (function __GT_RSeq(ci,i,meta){return (new cljs.core.RSeq(ci,i,meta));
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){return cljs.core.first(cljs.core.first(coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){return cljs.core.next(cljs.core.first(coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){return cljs.core.next(cljs.core.next(coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){while(true){
var sn = cljs.core.next(s);if(!((sn == null)))
{{
var G__25481 = sn;
s = G__25481;
continue;
}
} else
{return cljs.core.first(s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){return (x === o);
}));
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__0 = (function (){return cljs.core.PersistentVector.EMPTY;
});
var conj__1 = (function (coll){return coll;
});
var conj__2 = (function (coll,x){if(!((coll == null)))
{return cljs.core._conj(coll,x);
} else
{return cljs.core._conj(cljs.core.List.EMPTY,x);
}
});
var conj__3 = (function() { 
var G__25486__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__25487 = conj.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__25488 = cljs.core.first(xs);
var G__25489 = cljs.core.next(xs);
coll = G__25487;
x = G__25488;
xs = G__25489;
continue;
}
} else
{return conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__25486 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__25486__delegate.call(this,coll,x,xs);};
G__25486.cljs$lang$maxFixedArity = 2;
G__25486.cljs$lang$applyTo = (function (arglist__25490){
var coll = cljs.core.first(arglist__25490);
arglist__25490 = cljs.core.next(arglist__25490);
var x = cljs.core.first(arglist__25490);
var xs = cljs.core.rest(arglist__25490);
return G__25486__delegate(coll,x,xs);
});
G__25486.cljs$core$IFn$_invoke$arity$variadic = G__25486__delegate;
return G__25486;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 0:
return conj__0.call(this);
case 1:
return conj__1.call(this,coll);
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$core$IFn$_invoke$arity$0 = conj__0;
conj.cljs$core$IFn$_invoke$arity$1 = conj__1;
conj.cljs$core$IFn$_invoke$arity$2 = conj__2;
conj.cljs$core$IFn$_invoke$arity$variadic = conj__3.cljs$core$IFn$_invoke$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){if((coll == null))
{return null;
} else
{return cljs.core._empty(coll);
}
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){var s = cljs.core.seq(coll);var acc = (0);while(true){
if(cljs.core.counted_QMARK_(s))
{return (acc + cljs.core._count(s));
} else
{{
var G__25491 = cljs.core.next(s);
var G__25492 = (acc + (1));
s = G__25491;
acc = G__25492;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){if(!((coll == null)))
{if((function (){var G__25494 = coll;if(G__25494)
{var bit__20549__auto__ = (G__25494.cljs$lang$protocol_mask$partition0$ & (2));if((bit__20549__auto__) || (G__25494.cljs$core$ICounted$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(null);
} else
{if(coll instanceof Array)
{return coll.length;
} else
{if(typeof coll === 'string')
{return coll.length;
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,coll))
{return cljs.core._count(coll);
} else
{return cljs.core.accumulating_seq_count(coll);

}
}
}
}
} else
{return (0);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){while(true){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === (0)))
{if(cljs.core.seq(coll))
{return cljs.core.first(coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_(coll))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else
{if(cljs.core.seq(coll))
{{
var G__25495 = cljs.core.next(coll);
var G__25496 = (n - (1));
coll = G__25495;
n = G__25496;
continue;
}
} else
{throw (new Error("Index out of bounds"));

}
}
}
}
break;
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){while(true){
if((coll == null))
{return not_found;
} else
{if((n === (0)))
{if(cljs.core.seq(coll))
{return cljs.core.first(coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_(coll))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll,n,not_found);
} else
{if(cljs.core.seq(coll))
{{
var G__25497 = cljs.core.next(coll);
var G__25498 = (n - (1));
var G__25499 = not_found;
coll = G__25497;
n = G__25498;
not_found = G__25499;
continue;
}
} else
{return not_found;

}
}
}
}
break;
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
linear_traversal_nth.cljs$core$IFn$_invoke$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$core$IFn$_invoke$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){if(!(typeof n === 'number'))
{throw (new Error("index argument to nth must be a number"));
} else
{if((coll == null))
{return coll;
} else
{if((function (){var G__25504 = coll;if(G__25504)
{var bit__20549__auto__ = (G__25504.cljs$lang$protocol_mask$partition0$ & (16));if((bit__20549__auto__) || (G__25504.cljs$core$IIndexed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(null,n);
} else
{if(coll instanceof Array)
{if((n < coll.length))
{return (coll[n]);
} else
{return null;
}
} else
{if(typeof coll === 'string')
{if((n < coll.length))
{return (coll[n]);
} else
{return null;
}
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,coll))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else
{if((function (){var G__25505 = coll;if(G__25505)
{var bit__20565__auto__ = (G__25505.cljs$lang$protocol_mask$partition0$ & (64));if((bit__20565__auto__) || (G__25505.cljs$core$ISeq$))
{return true;
} else
{if((!G__25505.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__25505);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__25505);
}
})())
{return cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else
{throw (new Error(("nth not supported on this type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type__GT_str(cljs.core.type(coll))))));

}
}
}
}
}
}
}
});
var nth__3 = (function (coll,n,not_found){if(!(typeof n === 'number'))
{throw (new Error("index argument to nth must be a number."));
} else
{if((coll == null))
{return not_found;
} else
{if((function (){var G__25506 = coll;if(G__25506)
{var bit__20549__auto__ = (G__25506.cljs$lang$protocol_mask$partition0$ & (16));if((bit__20549__auto__) || (G__25506.cljs$core$IIndexed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(null,n,not_found);
} else
{if(coll instanceof Array)
{if((n < coll.length))
{return (coll[n]);
} else
{return not_found;
}
} else
{if(typeof coll === 'string')
{if((n < coll.length))
{return (coll[n]);
} else
{return not_found;
}
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,coll))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else
{if((function (){var G__25507 = coll;if(G__25507)
{var bit__20565__auto__ = (G__25507.cljs$lang$protocol_mask$partition0$ & (64));if((bit__20565__auto__) || (G__25507.cljs$core$ISeq$))
{return true;
} else
{if((!G__25507.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__25507);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__25507);
}
})())
{return cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$3(coll,n,not_found);
} else
{throw (new Error(("nth not supported on this type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type__GT_str(cljs.core.type(coll))))));

}
}
}
}
}
}
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth.cljs$core$IFn$_invoke$arity$2 = nth__2;
nth.cljs$core$IFn$_invoke$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){if((o == null))
{return null;
} else
{if((function (){var G__25510 = o;if(G__25510)
{var bit__20549__auto__ = (G__25510.cljs$lang$protocol_mask$partition0$ & (256));if((bit__20549__auto__) || (G__25510.cljs$core$ILookup$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(null,k);
} else
{if(o instanceof Array)
{if((k < o.length))
{return (o[k]);
} else
{return null;
}
} else
{if(typeof o === 'string')
{if((k < o.length))
{return (o[k]);
} else
{return null;
}
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,o))
{return cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o,k);
} else
{return null;

}
}
}
}
}
});
var get__3 = (function (o,k,not_found){if(!((o == null)))
{if((function (){var G__25511 = o;if(G__25511)
{var bit__20549__auto__ = (G__25511.cljs$lang$protocol_mask$partition0$ & (256));if((bit__20549__auto__) || (G__25511.cljs$core$ILookup$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
} else
{if(o instanceof Array)
{if((k < o.length))
{return (o[k]);
} else
{return not_found;
}
} else
{if(typeof o === 'string')
{if((k < o.length))
{return (o[k]);
} else
{return not_found;
}
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,o))
{return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(o,k,not_found);
} else
{return not_found;

}
}
}
}
} else
{return not_found;
}
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get.cljs$core$IFn$_invoke$arity$2 = get__2;
get.cljs$core$IFn$_invoke$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){if(!((coll == null)))
{return cljs.core._assoc(coll,k,v);
} else
{return cljs.core.PersistentHashMap.fromArrays([k],[v]);
}
});
var assoc__4 = (function() { 
var G__25515__delegate = function (coll,k,v,kvs){while(true){
var ret = assoc.cljs$core$IFn$_invoke$arity$3(coll,k,v);if(cljs.core.truth_(kvs))
{{
var G__25516 = ret;
var G__25517 = cljs.core.first(kvs);
var G__25518 = cljs.core.second(kvs);
var G__25519 = cljs.core.nnext(kvs);
coll = G__25516;
k = G__25517;
v = G__25518;
kvs = G__25519;
continue;
}
} else
{return ret;
}
break;
}
};
var G__25515 = function (coll,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__25515__delegate.call(this,coll,k,v,kvs);};
G__25515.cljs$lang$maxFixedArity = 3;
G__25515.cljs$lang$applyTo = (function (arglist__25520){
var coll = cljs.core.first(arglist__25520);
arglist__25520 = cljs.core.next(arglist__25520);
var k = cljs.core.first(arglist__25520);
arglist__25520 = cljs.core.next(arglist__25520);
var v = cljs.core.first(arglist__25520);
var kvs = cljs.core.rest(arglist__25520);
return G__25515__delegate(coll,k,v,kvs);
});
G__25515.cljs$core$IFn$_invoke$arity$variadic = G__25515__delegate;
return G__25515;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$core$IFn$_invoke$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$core$IFn$_invoke$arity$3 = assoc__3;
assoc.cljs$core$IFn$_invoke$arity$variadic = assoc__4.cljs$core$IFn$_invoke$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){return coll;
});
var dissoc__2 = (function (coll,k){if((coll == null))
{return null;
} else
{return cljs.core._dissoc(coll,k);
}
});
var dissoc__3 = (function() { 
var G__25523__delegate = function (coll,k,ks){while(true){
if((coll == null))
{return null;
} else
{var ret = dissoc.cljs$core$IFn$_invoke$arity$2(coll,k);if(cljs.core.truth_(ks))
{{
var G__25524 = ret;
var G__25525 = cljs.core.first(ks);
var G__25526 = cljs.core.next(ks);
coll = G__25524;
k = G__25525;
ks = G__25526;
continue;
}
} else
{return ret;
}
}
break;
}
};
var G__25523 = function (coll,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__25523__delegate.call(this,coll,k,ks);};
G__25523.cljs$lang$maxFixedArity = 2;
G__25523.cljs$lang$applyTo = (function (arglist__25527){
var coll = cljs.core.first(arglist__25527);
arglist__25527 = cljs.core.next(arglist__25527);
var k = cljs.core.first(arglist__25527);
var ks = cljs.core.rest(arglist__25527);
return G__25523__delegate(coll,k,ks);
});
G__25523.cljs$core$IFn$_invoke$arity$variadic = G__25523__delegate;
return G__25523;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$core$IFn$_invoke$arity$1 = dissoc__1;
dissoc.cljs$core$IFn$_invoke$arity$2 = dissoc__2;
dissoc.cljs$core$IFn$_invoke$arity$variadic = dissoc__3.cljs$core$IFn$_invoke$arity$variadic;
return dissoc;
})()
;
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){var or__19267__auto__ = (function (){var G__25532 = f;return goog.isFunction(G__25532);
})();if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{var G__25533 = f;if(G__25533)
{var bit__20565__auto__ = null;if(cljs.core.truth_((function (){var or__19267__auto____$1 = bit__20565__auto__;if(cljs.core.truth_(or__19267__auto____$1))
{return or__19267__auto____$1;
} else
{return G__25533.cljs$core$Fn$;
}
})()))
{return true;
} else
{if((!G__25533.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__25533);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__25533);
}
}
});

/**
* @constructor
*/
cljs.core.MetaFn = (function (afn,meta){
this.afn = afn;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.MetaFn.cljs$lang$type = true;
cljs.core.MetaFn.cljs$lang$ctorStr = "cljs.core/MetaFn";
cljs.core.MetaFn.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/MetaFn");
});
cljs.core.MetaFn.prototype.call = (function() {
var G__25999 = null;
var G__25999__1 = (function (self__){var self__ = this;
var self____$1 = this;var _ = self____$1;return (self__.afn.cljs$core$IFn$_invoke$arity$0 ? self__.afn.cljs$core$IFn$_invoke$arity$0() : self__.afn.call(null));
});
var G__25999__2 = (function (self__,a){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25535 = a;return (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(G__25535) : self__.afn.call(null,G__25535));
});
var G__25999__3 = (function (self__,a,b){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25536 = a;var G__25537 = b;return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(G__25536,G__25537) : self__.afn.call(null,G__25536,G__25537));
});
var G__25999__4 = (function (self__,a,b,c){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25538 = a;var G__25539 = b;var G__25540 = c;return (self__.afn.cljs$core$IFn$_invoke$arity$3 ? self__.afn.cljs$core$IFn$_invoke$arity$3(G__25538,G__25539,G__25540) : self__.afn.call(null,G__25538,G__25539,G__25540));
});
var G__25999__5 = (function (self__,a,b,c,d){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25541 = a;var G__25542 = b;var G__25543 = c;var G__25544 = d;return (self__.afn.cljs$core$IFn$_invoke$arity$4 ? self__.afn.cljs$core$IFn$_invoke$arity$4(G__25541,G__25542,G__25543,G__25544) : self__.afn.call(null,G__25541,G__25542,G__25543,G__25544));
});
var G__25999__6 = (function (self__,a,b,c,d,e){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25545 = a;var G__25546 = b;var G__25547 = c;var G__25548 = d;var G__25549 = e;return (self__.afn.cljs$core$IFn$_invoke$arity$5 ? self__.afn.cljs$core$IFn$_invoke$arity$5(G__25545,G__25546,G__25547,G__25548,G__25549) : self__.afn.call(null,G__25545,G__25546,G__25547,G__25548,G__25549));
});
var G__25999__7 = (function (self__,a,b,c,d,e,f){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25550 = a;var G__25551 = b;var G__25552 = c;var G__25553 = d;var G__25554 = e;var G__25555 = f;return (self__.afn.cljs$core$IFn$_invoke$arity$6 ? self__.afn.cljs$core$IFn$_invoke$arity$6(G__25550,G__25551,G__25552,G__25553,G__25554,G__25555) : self__.afn.call(null,G__25550,G__25551,G__25552,G__25553,G__25554,G__25555));
});
var G__25999__8 = (function (self__,a,b,c,d,e,f,g){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25556 = a;var G__25557 = b;var G__25558 = c;var G__25559 = d;var G__25560 = e;var G__25561 = f;var G__25562 = g;return (self__.afn.cljs$core$IFn$_invoke$arity$7 ? self__.afn.cljs$core$IFn$_invoke$arity$7(G__25556,G__25557,G__25558,G__25559,G__25560,G__25561,G__25562) : self__.afn.call(null,G__25556,G__25557,G__25558,G__25559,G__25560,G__25561,G__25562));
});
var G__25999__9 = (function (self__,a,b,c,d,e,f,g,h){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25563 = a;var G__25564 = b;var G__25565 = c;var G__25566 = d;var G__25567 = e;var G__25568 = f;var G__25569 = g;var G__25570 = h;return (self__.afn.cljs$core$IFn$_invoke$arity$8 ? self__.afn.cljs$core$IFn$_invoke$arity$8(G__25563,G__25564,G__25565,G__25566,G__25567,G__25568,G__25569,G__25570) : self__.afn.call(null,G__25563,G__25564,G__25565,G__25566,G__25567,G__25568,G__25569,G__25570));
});
var G__25999__10 = (function (self__,a,b,c,d,e,f,g,h,i){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25571 = a;var G__25572 = b;var G__25573 = c;var G__25574 = d;var G__25575 = e;var G__25576 = f;var G__25577 = g;var G__25578 = h;var G__25579 = i;return (self__.afn.cljs$core$IFn$_invoke$arity$9 ? self__.afn.cljs$core$IFn$_invoke$arity$9(G__25571,G__25572,G__25573,G__25574,G__25575,G__25576,G__25577,G__25578,G__25579) : self__.afn.call(null,G__25571,G__25572,G__25573,G__25574,G__25575,G__25576,G__25577,G__25578,G__25579));
});
var G__25999__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25580 = a;var G__25581 = b;var G__25582 = c;var G__25583 = d;var G__25584 = e;var G__25585 = f;var G__25586 = g;var G__25587 = h;var G__25588 = i;var G__25589 = j;return (self__.afn.cljs$core$IFn$_invoke$arity$10 ? self__.afn.cljs$core$IFn$_invoke$arity$10(G__25580,G__25581,G__25582,G__25583,G__25584,G__25585,G__25586,G__25587,G__25588,G__25589) : self__.afn.call(null,G__25580,G__25581,G__25582,G__25583,G__25584,G__25585,G__25586,G__25587,G__25588,G__25589));
});
var G__25999__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25590 = a;var G__25591 = b;var G__25592 = c;var G__25593 = d;var G__25594 = e;var G__25595 = f;var G__25596 = g;var G__25597 = h;var G__25598 = i;var G__25599 = j;var G__25600 = k;return (self__.afn.cljs$core$IFn$_invoke$arity$11 ? self__.afn.cljs$core$IFn$_invoke$arity$11(G__25590,G__25591,G__25592,G__25593,G__25594,G__25595,G__25596,G__25597,G__25598,G__25599,G__25600) : self__.afn.call(null,G__25590,G__25591,G__25592,G__25593,G__25594,G__25595,G__25596,G__25597,G__25598,G__25599,G__25600));
});
var G__25999__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25601 = a;var G__25602 = b;var G__25603 = c;var G__25604 = d;var G__25605 = e;var G__25606 = f;var G__25607 = g;var G__25608 = h;var G__25609 = i;var G__25610 = j;var G__25611 = k;var G__25612 = l;return (self__.afn.cljs$core$IFn$_invoke$arity$12 ? self__.afn.cljs$core$IFn$_invoke$arity$12(G__25601,G__25602,G__25603,G__25604,G__25605,G__25606,G__25607,G__25608,G__25609,G__25610,G__25611,G__25612) : self__.afn.call(null,G__25601,G__25602,G__25603,G__25604,G__25605,G__25606,G__25607,G__25608,G__25609,G__25610,G__25611,G__25612));
});
var G__25999__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25613 = a;var G__25614 = b;var G__25615 = c;var G__25616 = d;var G__25617 = e;var G__25618 = f;var G__25619 = g;var G__25620 = h;var G__25621 = i;var G__25622 = j;var G__25623 = k;var G__25624 = l;var G__25625 = m;return (self__.afn.cljs$core$IFn$_invoke$arity$13 ? self__.afn.cljs$core$IFn$_invoke$arity$13(G__25613,G__25614,G__25615,G__25616,G__25617,G__25618,G__25619,G__25620,G__25621,G__25622,G__25623,G__25624,G__25625) : self__.afn.call(null,G__25613,G__25614,G__25615,G__25616,G__25617,G__25618,G__25619,G__25620,G__25621,G__25622,G__25623,G__25624,G__25625));
});
var G__25999__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25626 = a;var G__25627 = b;var G__25628 = c;var G__25629 = d;var G__25630 = e;var G__25631 = f;var G__25632 = g;var G__25633 = h;var G__25634 = i;var G__25635 = j;var G__25636 = k;var G__25637 = l;var G__25638 = m;var G__25639 = n;return (self__.afn.cljs$core$IFn$_invoke$arity$14 ? self__.afn.cljs$core$IFn$_invoke$arity$14(G__25626,G__25627,G__25628,G__25629,G__25630,G__25631,G__25632,G__25633,G__25634,G__25635,G__25636,G__25637,G__25638,G__25639) : self__.afn.call(null,G__25626,G__25627,G__25628,G__25629,G__25630,G__25631,G__25632,G__25633,G__25634,G__25635,G__25636,G__25637,G__25638,G__25639));
});
var G__25999__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25640 = a;var G__25641 = b;var G__25642 = c;var G__25643 = d;var G__25644 = e;var G__25645 = f;var G__25646 = g;var G__25647 = h;var G__25648 = i;var G__25649 = j;var G__25650 = k;var G__25651 = l;var G__25652 = m;var G__25653 = n;var G__25654 = o;return (self__.afn.cljs$core$IFn$_invoke$arity$15 ? self__.afn.cljs$core$IFn$_invoke$arity$15(G__25640,G__25641,G__25642,G__25643,G__25644,G__25645,G__25646,G__25647,G__25648,G__25649,G__25650,G__25651,G__25652,G__25653,G__25654) : self__.afn.call(null,G__25640,G__25641,G__25642,G__25643,G__25644,G__25645,G__25646,G__25647,G__25648,G__25649,G__25650,G__25651,G__25652,G__25653,G__25654));
});
var G__25999__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25655 = a;var G__25656 = b;var G__25657 = c;var G__25658 = d;var G__25659 = e;var G__25660 = f;var G__25661 = g;var G__25662 = h;var G__25663 = i;var G__25664 = j;var G__25665 = k;var G__25666 = l;var G__25667 = m;var G__25668 = n;var G__25669 = o;var G__25670 = p;return (self__.afn.cljs$core$IFn$_invoke$arity$16 ? self__.afn.cljs$core$IFn$_invoke$arity$16(G__25655,G__25656,G__25657,G__25658,G__25659,G__25660,G__25661,G__25662,G__25663,G__25664,G__25665,G__25666,G__25667,G__25668,G__25669,G__25670) : self__.afn.call(null,G__25655,G__25656,G__25657,G__25658,G__25659,G__25660,G__25661,G__25662,G__25663,G__25664,G__25665,G__25666,G__25667,G__25668,G__25669,G__25670));
});
var G__25999__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25671 = a;var G__25672 = b;var G__25673 = c;var G__25674 = d;var G__25675 = e;var G__25676 = f;var G__25677 = g;var G__25678 = h;var G__25679 = i;var G__25680 = j;var G__25681 = k;var G__25682 = l;var G__25683 = m;var G__25684 = n;var G__25685 = o;var G__25686 = p;var G__25687 = q;return (self__.afn.cljs$core$IFn$_invoke$arity$17 ? self__.afn.cljs$core$IFn$_invoke$arity$17(G__25671,G__25672,G__25673,G__25674,G__25675,G__25676,G__25677,G__25678,G__25679,G__25680,G__25681,G__25682,G__25683,G__25684,G__25685,G__25686,G__25687) : self__.afn.call(null,G__25671,G__25672,G__25673,G__25674,G__25675,G__25676,G__25677,G__25678,G__25679,G__25680,G__25681,G__25682,G__25683,G__25684,G__25685,G__25686,G__25687));
});
var G__25999__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25688 = a;var G__25689 = b;var G__25690 = c;var G__25691 = d;var G__25692 = e;var G__25693 = f;var G__25694 = g;var G__25695 = h;var G__25696 = i;var G__25697 = j;var G__25698 = k;var G__25699 = l;var G__25700 = m;var G__25701 = n;var G__25702 = o;var G__25703 = p;var G__25704 = q;var G__25705 = r;return (self__.afn.cljs$core$IFn$_invoke$arity$18 ? self__.afn.cljs$core$IFn$_invoke$arity$18(G__25688,G__25689,G__25690,G__25691,G__25692,G__25693,G__25694,G__25695,G__25696,G__25697,G__25698,G__25699,G__25700,G__25701,G__25702,G__25703,G__25704,G__25705) : self__.afn.call(null,G__25688,G__25689,G__25690,G__25691,G__25692,G__25693,G__25694,G__25695,G__25696,G__25697,G__25698,G__25699,G__25700,G__25701,G__25702,G__25703,G__25704,G__25705));
});
var G__25999__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25706 = a;var G__25707 = b;var G__25708 = c;var G__25709 = d;var G__25710 = e;var G__25711 = f;var G__25712 = g;var G__25713 = h;var G__25714 = i;var G__25715 = j;var G__25716 = k;var G__25717 = l;var G__25718 = m;var G__25719 = n;var G__25720 = o;var G__25721 = p;var G__25722 = q;var G__25723 = r;var G__25724 = s;return (self__.afn.cljs$core$IFn$_invoke$arity$19 ? self__.afn.cljs$core$IFn$_invoke$arity$19(G__25706,G__25707,G__25708,G__25709,G__25710,G__25711,G__25712,G__25713,G__25714,G__25715,G__25716,G__25717,G__25718,G__25719,G__25720,G__25721,G__25722,G__25723,G__25724) : self__.afn.call(null,G__25706,G__25707,G__25708,G__25709,G__25710,G__25711,G__25712,G__25713,G__25714,G__25715,G__25716,G__25717,G__25718,G__25719,G__25720,G__25721,G__25722,G__25723,G__25724));
});
var G__25999__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25725 = a;var G__25726 = b;var G__25727 = c;var G__25728 = d;var G__25729 = e;var G__25730 = f;var G__25731 = g;var G__25732 = h;var G__25733 = i;var G__25734 = j;var G__25735 = k;var G__25736 = l;var G__25737 = m;var G__25738 = n;var G__25739 = o;var G__25740 = p;var G__25741 = q;var G__25742 = r;var G__25743 = s;var G__25744 = t;return (self__.afn.cljs$core$IFn$_invoke$arity$20 ? self__.afn.cljs$core$IFn$_invoke$arity$20(G__25725,G__25726,G__25727,G__25728,G__25729,G__25730,G__25731,G__25732,G__25733,G__25734,G__25735,G__25736,G__25737,G__25738,G__25739,G__25740,G__25741,G__25742,G__25743,G__25744) : self__.afn.call(null,G__25725,G__25726,G__25727,G__25728,G__25729,G__25730,G__25731,G__25732,G__25733,G__25734,G__25735,G__25736,G__25737,G__25738,G__25739,G__25740,G__25741,G__25742,G__25743,G__25744));
});
var G__25999__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25745 = self__.afn;var G__25746 = a;var G__25747 = b;var G__25748 = c;var G__25749 = d;var G__25750 = e;var G__25751 = f;var G__25752 = g;var G__25753 = h;var G__25754 = i;var G__25755 = j;var G__25756 = k;var G__25757 = l;var G__25758 = m;var G__25759 = n;var G__25760 = o;var G__25761 = p;var G__25762 = q;var G__25763 = r;var G__25764 = s;var G__25765 = t;var G__25766 = rest;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$22 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$22(G__25745,G__25746,G__25747,G__25748,G__25749,G__25750,G__25751,G__25752,G__25753,G__25754,G__25755,G__25756,G__25757,G__25758,G__25759,G__25760,G__25761,G__25762,G__25763,G__25764,G__25765,G__25766) : cljs.core.apply.call(null,G__25745,G__25746,G__25747,G__25748,G__25749,G__25750,G__25751,G__25752,G__25753,G__25754,G__25755,G__25756,G__25757,G__25758,G__25759,G__25760,G__25761,G__25762,G__25763,G__25764,G__25765,G__25766));
});
G__25999 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__25999__1.call(this,self__);
case 2:
return G__25999__2.call(this,self__,a);
case 3:
return G__25999__3.call(this,self__,a,b);
case 4:
return G__25999__4.call(this,self__,a,b,c);
case 5:
return G__25999__5.call(this,self__,a,b,c,d);
case 6:
return G__25999__6.call(this,self__,a,b,c,d,e);
case 7:
return G__25999__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__25999__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__25999__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__25999__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__25999__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__25999__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__25999__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__25999__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__25999__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__25999__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__25999__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__25999__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__25999__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__25999__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__25999__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__25999__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25999.cljs$core$IFn$_invoke$arity$1 = G__25999__1;
G__25999.cljs$core$IFn$_invoke$arity$2 = G__25999__2;
G__25999.cljs$core$IFn$_invoke$arity$3 = G__25999__3;
G__25999.cljs$core$IFn$_invoke$arity$4 = G__25999__4;
G__25999.cljs$core$IFn$_invoke$arity$5 = G__25999__5;
G__25999.cljs$core$IFn$_invoke$arity$6 = G__25999__6;
G__25999.cljs$core$IFn$_invoke$arity$7 = G__25999__7;
G__25999.cljs$core$IFn$_invoke$arity$8 = G__25999__8;
G__25999.cljs$core$IFn$_invoke$arity$9 = G__25999__9;
G__25999.cljs$core$IFn$_invoke$arity$10 = G__25999__10;
G__25999.cljs$core$IFn$_invoke$arity$11 = G__25999__11;
G__25999.cljs$core$IFn$_invoke$arity$12 = G__25999__12;
G__25999.cljs$core$IFn$_invoke$arity$13 = G__25999__13;
G__25999.cljs$core$IFn$_invoke$arity$14 = G__25999__14;
G__25999.cljs$core$IFn$_invoke$arity$15 = G__25999__15;
G__25999.cljs$core$IFn$_invoke$arity$16 = G__25999__16;
G__25999.cljs$core$IFn$_invoke$arity$17 = G__25999__17;
G__25999.cljs$core$IFn$_invoke$arity$18 = G__25999__18;
G__25999.cljs$core$IFn$_invoke$arity$19 = G__25999__19;
G__25999.cljs$core$IFn$_invoke$arity$20 = G__25999__20;
G__25999.cljs$core$IFn$_invoke$arity$21 = G__25999__21;
G__25999.cljs$core$IFn$_invoke$arity$22 = G__25999__22;
return G__25999;
})()
;
cljs.core.MetaFn.prototype.apply = (function (self__,args25534){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args25534)));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){var self__ = this;
var _ = this;return (self__.afn.cljs$core$IFn$_invoke$arity$0 ? self__.afn.cljs$core$IFn$_invoke$arity$0() : self__.afn.call(null));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){var self__ = this;
var _ = this;var G__25767 = a;return (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(G__25767) : self__.afn.call(null,G__25767));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){var self__ = this;
var _ = this;var G__25768 = a;var G__25769 = b;return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(G__25768,G__25769) : self__.afn.call(null,G__25768,G__25769));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){var self__ = this;
var _ = this;var G__25770 = a;var G__25771 = b;var G__25772 = c;return (self__.afn.cljs$core$IFn$_invoke$arity$3 ? self__.afn.cljs$core$IFn$_invoke$arity$3(G__25770,G__25771,G__25772) : self__.afn.call(null,G__25770,G__25771,G__25772));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){var self__ = this;
var _ = this;var G__25773 = a;var G__25774 = b;var G__25775 = c;var G__25776 = d;return (self__.afn.cljs$core$IFn$_invoke$arity$4 ? self__.afn.cljs$core$IFn$_invoke$arity$4(G__25773,G__25774,G__25775,G__25776) : self__.afn.call(null,G__25773,G__25774,G__25775,G__25776));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){var self__ = this;
var _ = this;var G__25777 = a;var G__25778 = b;var G__25779 = c;var G__25780 = d;var G__25781 = e;return (self__.afn.cljs$core$IFn$_invoke$arity$5 ? self__.afn.cljs$core$IFn$_invoke$arity$5(G__25777,G__25778,G__25779,G__25780,G__25781) : self__.afn.call(null,G__25777,G__25778,G__25779,G__25780,G__25781));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){var self__ = this;
var _ = this;var G__25782 = a;var G__25783 = b;var G__25784 = c;var G__25785 = d;var G__25786 = e;var G__25787 = f;return (self__.afn.cljs$core$IFn$_invoke$arity$6 ? self__.afn.cljs$core$IFn$_invoke$arity$6(G__25782,G__25783,G__25784,G__25785,G__25786,G__25787) : self__.afn.call(null,G__25782,G__25783,G__25784,G__25785,G__25786,G__25787));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){var self__ = this;
var _ = this;var G__25788 = a;var G__25789 = b;var G__25790 = c;var G__25791 = d;var G__25792 = e;var G__25793 = f;var G__25794 = g;return (self__.afn.cljs$core$IFn$_invoke$arity$7 ? self__.afn.cljs$core$IFn$_invoke$arity$7(G__25788,G__25789,G__25790,G__25791,G__25792,G__25793,G__25794) : self__.afn.call(null,G__25788,G__25789,G__25790,G__25791,G__25792,G__25793,G__25794));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){var self__ = this;
var _ = this;var G__25795 = a;var G__25796 = b;var G__25797 = c;var G__25798 = d;var G__25799 = e;var G__25800 = f;var G__25801 = g;var G__25802 = h;return (self__.afn.cljs$core$IFn$_invoke$arity$8 ? self__.afn.cljs$core$IFn$_invoke$arity$8(G__25795,G__25796,G__25797,G__25798,G__25799,G__25800,G__25801,G__25802) : self__.afn.call(null,G__25795,G__25796,G__25797,G__25798,G__25799,G__25800,G__25801,G__25802));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){var self__ = this;
var _ = this;var G__25803 = a;var G__25804 = b;var G__25805 = c;var G__25806 = d;var G__25807 = e;var G__25808 = f;var G__25809 = g;var G__25810 = h;var G__25811 = i;return (self__.afn.cljs$core$IFn$_invoke$arity$9 ? self__.afn.cljs$core$IFn$_invoke$arity$9(G__25803,G__25804,G__25805,G__25806,G__25807,G__25808,G__25809,G__25810,G__25811) : self__.afn.call(null,G__25803,G__25804,G__25805,G__25806,G__25807,G__25808,G__25809,G__25810,G__25811));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){var self__ = this;
var _ = this;var G__25812 = a;var G__25813 = b;var G__25814 = c;var G__25815 = d;var G__25816 = e;var G__25817 = f;var G__25818 = g;var G__25819 = h;var G__25820 = i;var G__25821 = j;return (self__.afn.cljs$core$IFn$_invoke$arity$10 ? self__.afn.cljs$core$IFn$_invoke$arity$10(G__25812,G__25813,G__25814,G__25815,G__25816,G__25817,G__25818,G__25819,G__25820,G__25821) : self__.afn.call(null,G__25812,G__25813,G__25814,G__25815,G__25816,G__25817,G__25818,G__25819,G__25820,G__25821));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var _ = this;var G__25822 = a;var G__25823 = b;var G__25824 = c;var G__25825 = d;var G__25826 = e;var G__25827 = f;var G__25828 = g;var G__25829 = h;var G__25830 = i;var G__25831 = j;var G__25832 = k;return (self__.afn.cljs$core$IFn$_invoke$arity$11 ? self__.afn.cljs$core$IFn$_invoke$arity$11(G__25822,G__25823,G__25824,G__25825,G__25826,G__25827,G__25828,G__25829,G__25830,G__25831,G__25832) : self__.afn.call(null,G__25822,G__25823,G__25824,G__25825,G__25826,G__25827,G__25828,G__25829,G__25830,G__25831,G__25832));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var _ = this;var G__25833 = a;var G__25834 = b;var G__25835 = c;var G__25836 = d;var G__25837 = e;var G__25838 = f;var G__25839 = g;var G__25840 = h;var G__25841 = i;var G__25842 = j;var G__25843 = k;var G__25844 = l;return (self__.afn.cljs$core$IFn$_invoke$arity$12 ? self__.afn.cljs$core$IFn$_invoke$arity$12(G__25833,G__25834,G__25835,G__25836,G__25837,G__25838,G__25839,G__25840,G__25841,G__25842,G__25843,G__25844) : self__.afn.call(null,G__25833,G__25834,G__25835,G__25836,G__25837,G__25838,G__25839,G__25840,G__25841,G__25842,G__25843,G__25844));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var _ = this;var G__25845 = a;var G__25846 = b;var G__25847 = c;var G__25848 = d;var G__25849 = e;var G__25850 = f;var G__25851 = g;var G__25852 = h;var G__25853 = i;var G__25854 = j;var G__25855 = k;var G__25856 = l;var G__25857 = m;return (self__.afn.cljs$core$IFn$_invoke$arity$13 ? self__.afn.cljs$core$IFn$_invoke$arity$13(G__25845,G__25846,G__25847,G__25848,G__25849,G__25850,G__25851,G__25852,G__25853,G__25854,G__25855,G__25856,G__25857) : self__.afn.call(null,G__25845,G__25846,G__25847,G__25848,G__25849,G__25850,G__25851,G__25852,G__25853,G__25854,G__25855,G__25856,G__25857));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var _ = this;var G__25858 = a;var G__25859 = b;var G__25860 = c;var G__25861 = d;var G__25862 = e;var G__25863 = f;var G__25864 = g;var G__25865 = h;var G__25866 = i;var G__25867 = j;var G__25868 = k;var G__25869 = l;var G__25870 = m;var G__25871 = n;return (self__.afn.cljs$core$IFn$_invoke$arity$14 ? self__.afn.cljs$core$IFn$_invoke$arity$14(G__25858,G__25859,G__25860,G__25861,G__25862,G__25863,G__25864,G__25865,G__25866,G__25867,G__25868,G__25869,G__25870,G__25871) : self__.afn.call(null,G__25858,G__25859,G__25860,G__25861,G__25862,G__25863,G__25864,G__25865,G__25866,G__25867,G__25868,G__25869,G__25870,G__25871));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var _ = this;var G__25872 = a;var G__25873 = b;var G__25874 = c;var G__25875 = d;var G__25876 = e;var G__25877 = f;var G__25878 = g;var G__25879 = h;var G__25880 = i;var G__25881 = j;var G__25882 = k;var G__25883 = l;var G__25884 = m;var G__25885 = n;var G__25886 = o;return (self__.afn.cljs$core$IFn$_invoke$arity$15 ? self__.afn.cljs$core$IFn$_invoke$arity$15(G__25872,G__25873,G__25874,G__25875,G__25876,G__25877,G__25878,G__25879,G__25880,G__25881,G__25882,G__25883,G__25884,G__25885,G__25886) : self__.afn.call(null,G__25872,G__25873,G__25874,G__25875,G__25876,G__25877,G__25878,G__25879,G__25880,G__25881,G__25882,G__25883,G__25884,G__25885,G__25886));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var _ = this;var G__25887 = a;var G__25888 = b;var G__25889 = c;var G__25890 = d;var G__25891 = e;var G__25892 = f;var G__25893 = g;var G__25894 = h;var G__25895 = i;var G__25896 = j;var G__25897 = k;var G__25898 = l;var G__25899 = m;var G__25900 = n;var G__25901 = o;var G__25902 = p;return (self__.afn.cljs$core$IFn$_invoke$arity$16 ? self__.afn.cljs$core$IFn$_invoke$arity$16(G__25887,G__25888,G__25889,G__25890,G__25891,G__25892,G__25893,G__25894,G__25895,G__25896,G__25897,G__25898,G__25899,G__25900,G__25901,G__25902) : self__.afn.call(null,G__25887,G__25888,G__25889,G__25890,G__25891,G__25892,G__25893,G__25894,G__25895,G__25896,G__25897,G__25898,G__25899,G__25900,G__25901,G__25902));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var _ = this;var G__25903 = a;var G__25904 = b;var G__25905 = c;var G__25906 = d;var G__25907 = e;var G__25908 = f;var G__25909 = g;var G__25910 = h;var G__25911 = i;var G__25912 = j;var G__25913 = k;var G__25914 = l;var G__25915 = m;var G__25916 = n;var G__25917 = o;var G__25918 = p;var G__25919 = q;return (self__.afn.cljs$core$IFn$_invoke$arity$17 ? self__.afn.cljs$core$IFn$_invoke$arity$17(G__25903,G__25904,G__25905,G__25906,G__25907,G__25908,G__25909,G__25910,G__25911,G__25912,G__25913,G__25914,G__25915,G__25916,G__25917,G__25918,G__25919) : self__.afn.call(null,G__25903,G__25904,G__25905,G__25906,G__25907,G__25908,G__25909,G__25910,G__25911,G__25912,G__25913,G__25914,G__25915,G__25916,G__25917,G__25918,G__25919));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var _ = this;var G__25920 = a;var G__25921 = b;var G__25922 = c;var G__25923 = d;var G__25924 = e;var G__25925 = f;var G__25926 = g;var G__25927 = h;var G__25928 = i;var G__25929 = j;var G__25930 = k;var G__25931 = l;var G__25932 = m;var G__25933 = n;var G__25934 = o;var G__25935 = p;var G__25936 = q;var G__25937 = r;return (self__.afn.cljs$core$IFn$_invoke$arity$18 ? self__.afn.cljs$core$IFn$_invoke$arity$18(G__25920,G__25921,G__25922,G__25923,G__25924,G__25925,G__25926,G__25927,G__25928,G__25929,G__25930,G__25931,G__25932,G__25933,G__25934,G__25935,G__25936,G__25937) : self__.afn.call(null,G__25920,G__25921,G__25922,G__25923,G__25924,G__25925,G__25926,G__25927,G__25928,G__25929,G__25930,G__25931,G__25932,G__25933,G__25934,G__25935,G__25936,G__25937));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var _ = this;var G__25938 = a;var G__25939 = b;var G__25940 = c;var G__25941 = d;var G__25942 = e;var G__25943 = f;var G__25944 = g;var G__25945 = h;var G__25946 = i;var G__25947 = j;var G__25948 = k;var G__25949 = l;var G__25950 = m;var G__25951 = n;var G__25952 = o;var G__25953 = p;var G__25954 = q;var G__25955 = r;var G__25956 = s;return (self__.afn.cljs$core$IFn$_invoke$arity$19 ? self__.afn.cljs$core$IFn$_invoke$arity$19(G__25938,G__25939,G__25940,G__25941,G__25942,G__25943,G__25944,G__25945,G__25946,G__25947,G__25948,G__25949,G__25950,G__25951,G__25952,G__25953,G__25954,G__25955,G__25956) : self__.afn.call(null,G__25938,G__25939,G__25940,G__25941,G__25942,G__25943,G__25944,G__25945,G__25946,G__25947,G__25948,G__25949,G__25950,G__25951,G__25952,G__25953,G__25954,G__25955,G__25956));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var _ = this;var G__25957 = a;var G__25958 = b;var G__25959 = c;var G__25960 = d;var G__25961 = e;var G__25962 = f;var G__25963 = g;var G__25964 = h;var G__25965 = i;var G__25966 = j;var G__25967 = k;var G__25968 = l;var G__25969 = m;var G__25970 = n;var G__25971 = o;var G__25972 = p;var G__25973 = q;var G__25974 = r;var G__25975 = s;var G__25976 = t;return (self__.afn.cljs$core$IFn$_invoke$arity$20 ? self__.afn.cljs$core$IFn$_invoke$arity$20(G__25957,G__25958,G__25959,G__25960,G__25961,G__25962,G__25963,G__25964,G__25965,G__25966,G__25967,G__25968,G__25969,G__25970,G__25971,G__25972,G__25973,G__25974,G__25975,G__25976) : self__.afn.call(null,G__25957,G__25958,G__25959,G__25960,G__25961,G__25962,G__25963,G__25964,G__25965,G__25966,G__25967,G__25968,G__25969,G__25970,G__25971,G__25972,G__25973,G__25974,G__25975,G__25976));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var _ = this;var G__25977 = self__.afn;var G__25978 = a;var G__25979 = b;var G__25980 = c;var G__25981 = d;var G__25982 = e;var G__25983 = f;var G__25984 = g;var G__25985 = h;var G__25986 = i;var G__25987 = j;var G__25988 = k;var G__25989 = l;var G__25990 = m;var G__25991 = n;var G__25992 = o;var G__25993 = p;var G__25994 = q;var G__25995 = r;var G__25996 = s;var G__25997 = t;var G__25998 = rest;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$22 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$22(G__25977,G__25978,G__25979,G__25980,G__25981,G__25982,G__25983,G__25984,G__25985,G__25986,G__25987,G__25988,G__25989,G__25990,G__25991,G__25992,G__25993,G__25994,G__25995,G__25996,G__25997,G__25998) : cljs.core.apply.call(null,G__25977,G__25978,G__25979,G__25980,G__25981,G__25982,G__25983,G__25984,G__25985,G__25986,G__25987,G__25988,G__25989,G__25990,G__25991,G__25992,G__25993,G__25994,G__25995,G__25996,G__25997,G__25998));
});
cljs.core.MetaFn.prototype.cljs$core$Fn$ = true;
cljs.core.MetaFn.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new cljs.core.MetaFn(self__.afn,new_meta));
});
cljs.core.MetaFn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
cljs.core.__GT_MetaFn = (function __GT_MetaFn(afn,meta){return (new cljs.core.MetaFn(afn,meta));
});
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){if((cljs.core.fn_QMARK_(o)) && (!((function (){var G__26003 = o;if(G__26003)
{var bit__20565__auto__ = (G__26003.cljs$lang$protocol_mask$partition0$ & (262144));if((bit__20565__auto__) || (G__26003.cljs$core$IWithMeta$))
{return true;
} else
{if((!G__26003.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__26003);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__26003);
}
})())))
{return (new cljs.core.MetaFn(o,meta));
} else
{if((o == null))
{return null;
} else
{return cljs.core._with_meta(o,meta);
}
}
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){if((function (){var and__19255__auto__ = !((o == null));if(and__19255__auto__)
{var G__26007 = o;if(G__26007)
{var bit__20565__auto__ = (G__26007.cljs$lang$protocol_mask$partition0$ & (131072));if((bit__20565__auto__) || (G__26007.cljs$core$IMeta$))
{return true;
} else
{if((!G__26007.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__26007);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__26007);
}
} else
{return and__19255__auto__;
}
})())
{return cljs.core._meta(o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){if((coll == null))
{return null;
} else
{return cljs.core._peek(coll);
}
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){if((coll == null))
{return null;
} else
{return cljs.core._pop(coll);
}
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){return coll;
});
var disj__2 = (function (coll,k){if((coll == null))
{return null;
} else
{return cljs.core._disjoin(coll,k);
}
});
var disj__3 = (function() { 
var G__26010__delegate = function (coll,k,ks){while(true){
if((coll == null))
{return null;
} else
{var ret = disj.cljs$core$IFn$_invoke$arity$2(coll,k);if(cljs.core.truth_(ks))
{{
var G__26011 = ret;
var G__26012 = cljs.core.first(ks);
var G__26013 = cljs.core.next(ks);
coll = G__26011;
k = G__26012;
ks = G__26013;
continue;
}
} else
{return ret;
}
}
break;
}
};
var G__26010 = function (coll,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26010__delegate.call(this,coll,k,ks);};
G__26010.cljs$lang$maxFixedArity = 2;
G__26010.cljs$lang$applyTo = (function (arglist__26014){
var coll = cljs.core.first(arglist__26014);
arglist__26014 = cljs.core.next(arglist__26014);
var k = cljs.core.first(arglist__26014);
var ks = cljs.core.rest(arglist__26014);
return G__26010__delegate(coll,k,ks);
});
G__26010.cljs$core$IFn$_invoke$arity$variadic = G__26010__delegate;
return G__26010;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$core$IFn$_invoke$arity$1 = disj__1;
disj.cljs$core$IFn$_invoke$arity$2 = disj__2;
disj.cljs$core$IFn$_invoke$arity$variadic = disj__3.cljs$core$IFn$_invoke$arity$variadic;
return disj;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){return ((coll == null)) || (cljs.core.not(cljs.core.seq(coll)));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){if((x == null))
{return false;
} else
{var G__26016 = x;if(G__26016)
{var bit__20565__auto__ = (G__26016.cljs$lang$protocol_mask$partition0$ & (8));if((bit__20565__auto__) || (G__26016.cljs$core$ICollection$))
{return true;
} else
{if((!G__26016.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__26016);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__26016);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){if((x == null))
{return false;
} else
{var G__26018 = x;if(G__26018)
{var bit__20565__auto__ = (G__26018.cljs$lang$protocol_mask$partition0$ & (4096));if((bit__20565__auto__) || (G__26018.cljs$core$ISet$))
{return true;
} else
{if((!G__26018.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__26018);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__26018);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){var G__26020 = x;if(G__26020)
{var bit__20565__auto__ = (G__26020.cljs$lang$protocol_mask$partition0$ & (512));if((bit__20565__auto__) || (G__26020.cljs$core$IAssociative$))
{return true;
} else
{if((!G__26020.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__26020);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__26020);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){var G__26022 = x;if(G__26022)
{var bit__20565__auto__ = (G__26022.cljs$lang$protocol_mask$partition0$ & (16777216));if((bit__20565__auto__) || (G__26022.cljs$core$ISequential$))
{return true;
} else
{if((!G__26022.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__26022);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__26022);
}
});
/**
* Returns true if coll satisfies ISorted
*/
cljs.core.sorted_QMARK_ = (function sorted_QMARK_(x){var G__26024 = x;if(G__26024)
{var bit__20565__auto__ = (G__26024.cljs$lang$protocol_mask$partition0$ & (268435456));if((bit__20565__auto__) || (G__26024.cljs$core$ISorted$))
{return true;
} else
{if((!G__26024.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__26024);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__26024);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){var G__26026 = x;if(G__26026)
{var bit__20565__auto__ = (G__26026.cljs$lang$protocol_mask$partition0$ & (524288));if((bit__20565__auto__) || (G__26026.cljs$core$IReduce$))
{return true;
} else
{if((!G__26026.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__26026);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__26026);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){if((x == null))
{return false;
} else
{var G__26028 = x;if(G__26028)
{var bit__20565__auto__ = (G__26028.cljs$lang$protocol_mask$partition0$ & (1024));if((bit__20565__auto__) || (G__26028.cljs$core$IMap$))
{return true;
} else
{if((!G__26028.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__26028);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__26028);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){var G__26030 = x;if(G__26030)
{var bit__20565__auto__ = (G__26030.cljs$lang$protocol_mask$partition0$ & (16384));if((bit__20565__auto__) || (G__26030.cljs$core$IVector$))
{return true;
} else
{if((!G__26030.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__26030);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__26030);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){var G__26032 = x;if(G__26032)
{var bit__20549__auto__ = (G__26032.cljs$lang$protocol_mask$partition1$ & (512));if((bit__20549__auto__) || (G__26032.cljs$core$IChunkedSeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){var obj26038 = {};return obj26038;
});
var js_obj__1 = (function() { 
var G__26041__delegate = function (keyvals){var G__26039 = goog.object.create;var G__26040 = keyvals;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__26039,G__26040) : cljs.core.apply.call(null,G__26039,G__26040));
};
var G__26041 = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26041__delegate.call(this,keyvals);};
G__26041.cljs$lang$maxFixedArity = 0;
G__26041.cljs$lang$applyTo = (function (arglist__26042){
var keyvals = cljs.core.seq(arglist__26042);
return G__26041__delegate(keyvals);
});
G__26041.cljs$core$IFn$_invoke$arity$variadic = G__26041__delegate;
return G__26041;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$core$IFn$_invoke$arity$0 = js_obj__0;
js_obj.cljs$core$IFn$_invoke$arity$variadic = js_obj__1.cljs$core$IFn$_invoke$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){var keys = [];var G__26045_26047 = obj;var G__26046_26048 = ((function (G__26045_26047,keys){
return (function (val,key,obj__$1){return keys.push(key);
});})(G__26045_26047,keys))
;goog.object.forEach(G__26045_26047,G__26046_26048);
return keys;
});
cljs.core.js_delete = (function js_delete(obj,key){return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){var i__$1 = i;var j__$1 = j;var len__$1 = len;while(true){
if((len__$1 === (0)))
{return to;
} else
{(to[j__$1] = (from[i__$1]));
{
var G__26049 = (i__$1 + (1));
var G__26050 = (j__$1 + (1));
var G__26051 = (len__$1 - (1));
i__$1 = G__26049;
j__$1 = G__26050;
len__$1 = G__26051;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){var i__$1 = (i + (len - (1)));var j__$1 = (j + (len - (1)));var len__$1 = len;while(true){
if((len__$1 === (0)))
{return to;
} else
{(to[j__$1] = (from[i__$1]));
{
var G__26052 = (i__$1 - (1));
var G__26053 = (j__$1 - (1));
var G__26054 = (len__$1 - (1));
i__$1 = G__26052;
j__$1 = G__26053;
len__$1 = G__26054;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = (function (){var obj26056 = {};return obj26056;
})();
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){if((s == null))
{return false;
} else
{var G__26058 = s;if(G__26058)
{var bit__20565__auto__ = (G__26058.cljs$lang$protocol_mask$partition0$ & (64));if((bit__20565__auto__) || (G__26058.cljs$core$ISeq$))
{return true;
} else
{if((!G__26058.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__26058);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__26058);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){var G__26060 = s;if(G__26060)
{var bit__20565__auto__ = (G__26060.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__20565__auto__) || (G__26060.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26060.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26060);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26060);
}
});
cljs.core.boolean$ = (function boolean$(x){if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){var or__19267__auto__ = cljs.core.fn_QMARK_(f);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var G__26064 = f;if(G__26064)
{var bit__20565__auto__ = (G__26064.cljs$lang$protocol_mask$partition0$ & (1));if((bit__20565__auto__) || (G__26064.cljs$core$IFn$))
{return true;
} else
{if((!G__26064.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__26064);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__26064);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){return (typeof n === 'number') && (cljs.core.not((function (){var G__26077 = n;return isNaN(G__26077);
})())) && (!((n === Infinity))) && (((function (){var G__26078 = n;return parseFloat(G__26078);
})() === (function (){var G__26079 = n;var G__26080 = (10);return parseInt(G__26079,G__26080);
})()));
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){if((cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){if((!((coll == null))) && (cljs.core.associative_QMARK_(coll)) && (cljs.core.contains_QMARK_(coll,k)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,k)], null);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){return true;
});
var distinct_QMARK___2 = (function (x,y){return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});
var distinct_QMARK___3 = (function() { 
var G__26081__delegate = function (x,y,more){if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)))
{var s = cljs.core.PersistentHashSet.fromArray([x,y], true);var xs = more;while(true){
var x__$1 = cljs.core.first(xs);var etc = cljs.core.next(xs);if(cljs.core.truth_(xs))
{if(cljs.core.contains_QMARK_(s,x__$1))
{return false;
} else
{{
var G__26082 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,x__$1);
var G__26083 = etc;
s = G__26082;
xs = G__26083;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__26081 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26081__delegate.call(this,x,y,more);};
G__26081.cljs$lang$maxFixedArity = 2;
G__26081.cljs$lang$applyTo = (function (arglist__26084){
var x = cljs.core.first(arglist__26084);
arglist__26084 = cljs.core.next(arglist__26084);
var y = cljs.core.first(arglist__26084);
var more = cljs.core.rest(arglist__26084);
return G__26081__delegate(x,y,more);
});
G__26081.cljs$core$IFn$_invoke$arity$variadic = G__26081__delegate;
return G__26081;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$variadic = distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Coerces coll to a (possibly empty) sequence, if it is not already
* one. Will not force a lazy seq. (sequence nil) yields ()
*/
cljs.core.sequence = (function sequence(coll){if(cljs.core.seq_QMARK_(coll))
{return coll;
} else
{var or__19267__auto__ = cljs.core.seq(coll);if(or__19267__auto__)
{return or__19267__auto__;
} else
{return cljs.core.List.EMPTY;
}
}
});
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){if((x === y))
{return (0);
} else
{if((x == null))
{return (-1);
} else
{if((y == null))
{return (1);
} else
{if((cljs.core.type(x) === cljs.core.type(y)))
{if((function (){var G__26088 = x;if(G__26088)
{var bit__20549__auto__ = (G__26088.cljs$lang$protocol_mask$partition1$ & (2048));if((bit__20549__auto__) || (G__26088.cljs$core$IComparable$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(null,y);
} else
{var G__26089 = x;var G__26090 = y;return goog.array.defaultCompare(G__26089,G__26090);
}
} else
{throw (new Error("compare on non-nil objects of different types"));

}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){var xl = cljs.core.count(xs);var yl = cljs.core.count(ys);if((xl < yl))
{return (-1);
} else
{if((xl > yl))
{return (1);
} else
{return compare_indexed.cljs$core$IFn$_invoke$arity$4(xs,ys,xl,(0));

}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){while(true){
var d = cljs.core.compare(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xs,n),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ys,n));if(((d === (0))) && (((n + (1)) < len)))
{{
var G__26095 = xs;
var G__26096 = ys;
var G__26097 = len;
var G__26098 = (n + (1));
xs = G__26095;
ys = G__26096;
len = G__26097;
n = G__26098;
continue;
}
} else
{return d;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compare_indexed.cljs$core$IFn$_invoke$arity$2 = compare_indexed__2;
compare_indexed.cljs$core$IFn$_invoke$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){var r = (function (){var G__26103 = x;var G__26104 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26103,G__26104) : f.call(null,G__26103,G__26104));
})();if(typeof r === 'number')
{return r;
} else
{if(cljs.core.truth_(r))
{return (-1);
} else
{if(cljs.core.truth_((function (){var G__26105 = y;var G__26106 = x;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26105,G__26106) : f.call(null,G__26105,G__26106));
})()))
{return (1);
} else
{return (0);
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){return sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){if(cljs.core.seq(coll))
{var a = (function (){var G__26112 = coll;return (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(G__26112) : cljs.core.to_array.call(null,G__26112));
})();var G__26113_26115 = a;var G__26114_26116 = cljs.core.fn__GT_comparator(comp);goog.array.stableSort(G__26113_26115,G__26114_26116);
return cljs.core.seq(a);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort.cljs$core$IFn$_invoke$arity$1 = sort__1;
sort.cljs$core$IFn$_invoke$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){return sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (x,y){return cljs.core.fn__GT_comparator(comp).call(null,(function (){var G__26122 = x;return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__26122) : keyfn.call(null,G__26122));
})(),(function (){var G__26123 = y;return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__26123) : keyfn.call(null,G__26123));
})());
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort_by.cljs$core$IFn$_invoke$arity$2 = sort_by__2;
sort_by.cljs$core$IFn$_invoke$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){var temp__4124__auto__ = cljs.core.seq(coll);if(temp__4124__auto__)
{var s = temp__4124__auto__;var G__26129 = f;var G__26130 = cljs.core.first(s);var G__26131 = cljs.core.next(s);return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(G__26129,G__26130,G__26131) : cljs.core.reduce.call(null,G__26129,G__26130,G__26131));
} else
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
var seq_reduce__3 = (function (f,val,coll){var val__$1 = val;var coll__$1 = cljs.core.seq(coll);while(true){
if(coll__$1)
{var nval = (function (){var G__26132 = val__$1;var G__26133 = cljs.core.first(coll__$1);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26132,G__26133) : f.call(null,G__26132,G__26133));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__26134 = nval;
var G__26135 = cljs.core.next(coll__$1);
val__$1 = G__26134;
coll__$1 = G__26135;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
seq_reduce.cljs$core$IFn$_invoke$arity$2 = seq_reduce__2;
seq_reduce.cljs$core$IFn$_invoke$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){var a = (function (){var G__26139 = coll;return (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(G__26139) : cljs.core.to_array.call(null,G__26139));
})();var G__26140_26142 = a;goog.array.shuffle(G__26140_26142);
var G__26141 = a;return (cljs.core.vec.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vec.cljs$core$IFn$_invoke$arity$1(G__26141) : cljs.core.vec.call(null,G__26141));
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){if((function (){var G__26145 = coll;if(G__26145)
{var bit__20549__auto__ = (G__26145.cljs$lang$protocol_mask$partition0$ & (524288));if((bit__20549__auto__) || (G__26145.cljs$core$IReduce$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(null,f);
} else
{if(coll instanceof Array)
{return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else
{if(typeof coll === 'string')
{return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,coll))
{return cljs.core._reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else
{return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll);

}
}
}
}
});
var reduce__3 = (function (f,val,coll){if((function (){var G__26146 = coll;if(G__26146)
{var bit__20549__auto__ = (G__26146.cljs$lang$protocol_mask$partition0$ & (524288));if((bit__20549__auto__) || (G__26146.cljs$core$IReduce$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(null,f,val);
} else
{if(coll instanceof Array)
{return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else
{if(typeof coll === 'string')
{return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,coll))
{return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else
{return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,val,coll);

}
}
}
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reduce.cljs$core$IFn$_invoke$arity$2 = reduce__2;
reduce.cljs$core$IFn$_invoke$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){if(!((coll == null)))
{return cljs.core._kv_reduce(coll,f,init);
} else
{return init;
}
});
cljs.core.identity = (function identity(x){return x;
});
cljs.core.completing = (function() {
var completing = null;
var completing__1 = (function (f){return completing.cljs$core$IFn$_invoke$arity$2(f,cljs.core.identity);
});
var completing__2 = (function (f,cf){return (function() {
var G__26155 = null;
var G__26155__0 = (function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__26155__1 = (function (x){var G__26152 = x;return (cf.cljs$core$IFn$_invoke$arity$1 ? cf.cljs$core$IFn$_invoke$arity$1(G__26152) : cf.call(null,G__26152));
});
var G__26155__2 = (function (x,y){var G__26153 = x;var G__26154 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26153,G__26154) : f.call(null,G__26153,G__26154));
});
G__26155 = function(x,y){
switch(arguments.length){
case 0:
return G__26155__0.call(this);
case 1:
return G__26155__1.call(this,x);
case 2:
return G__26155__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26155.cljs$core$IFn$_invoke$arity$0 = G__26155__0;
G__26155.cljs$core$IFn$_invoke$arity$1 = G__26155__1;
G__26155.cljs$core$IFn$_invoke$arity$2 = G__26155__2;
return G__26155;
})()
});
completing = function(f,cf){
switch(arguments.length){
case 1:
return completing__1.call(this,f);
case 2:
return completing__2.call(this,f,cf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
completing.cljs$core$IFn$_invoke$arity$1 = completing__1;
completing.cljs$core$IFn$_invoke$arity$2 = completing__2;
return completing;
})()
;
/**
* reduce with a transformation of f (xf). If init is not
* supplied, (f) will be called to produce it. f should be a reducing
* step function that accepts both 1 and 2 arguments, if it accepts
* only 2 you can add the arity-1 with 'completing'. Returns the result
* of applying (the transformed) xf to init and the first item in coll,
* then applying xf to that result and the 2nd item, etc. If coll
* contains no items, returns init and f is not called. Note that
* certain transforms may inject or skip items.
*/
cljs.core.transduce = (function() {
var transduce = null;
var transduce__3 = (function (xform,f,coll){return transduce.cljs$core$IFn$_invoke$arity$4(xform,f,(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),coll);
});
var transduce__4 = (function (xform,f,init,coll){var f__$1 = (function (){var G__26162 = f;return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__26162) : xform.call(null,G__26162));
})();var ret = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f__$1,init,coll);var G__26163 = ret;return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__26163) : f__$1.call(null,G__26163));
});
transduce = function(xform,f,init,coll){
switch(arguments.length){
case 3:
return transduce__3.call(this,xform,f,init);
case 4:
return transduce__4.call(this,xform,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transduce.cljs$core$IFn$_invoke$arity$3 = transduce__3;
transduce.cljs$core$IFn$_invoke$arity$4 = transduce__4;
return transduce;
})()
;
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){return (0);
});
var _PLUS___1 = (function (x){return x;
});
var _PLUS___2 = (function (x,y){return (x + y);
});
var _PLUS___3 = (function() { 
var G__26164__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_PLUS_,(x + y),more);
};
var G__26164 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26164__delegate.call(this,x,y,more);};
G__26164.cljs$lang$maxFixedArity = 2;
G__26164.cljs$lang$applyTo = (function (arglist__26165){
var x = cljs.core.first(arglist__26165);
arglist__26165 = cljs.core.next(arglist__26165);
var y = cljs.core.first(arglist__26165);
var more = cljs.core.rest(arglist__26165);
return G__26164__delegate(x,y,more);
});
G__26164.cljs$core$IFn$_invoke$arity$variadic = G__26164__delegate;
return G__26164;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$core$IFn$_invoke$arity$0 = _PLUS___0;
_PLUS_.cljs$core$IFn$_invoke$arity$1 = _PLUS___1;
_PLUS_.cljs$core$IFn$_invoke$arity$2 = _PLUS___2;
_PLUS_.cljs$core$IFn$_invoke$arity$variadic = _PLUS___3.cljs$core$IFn$_invoke$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){return (- x);
});
var ___2 = (function (x,y){return (x - y);
});
var ___3 = (function() { 
var G__26166__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_,(x - y),more);
};
var G__26166 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26166__delegate.call(this,x,y,more);};
G__26166.cljs$lang$maxFixedArity = 2;
G__26166.cljs$lang$applyTo = (function (arglist__26167){
var x = cljs.core.first(arglist__26167);
arglist__26167 = cljs.core.next(arglist__26167);
var y = cljs.core.first(arglist__26167);
var more = cljs.core.rest(arglist__26167);
return G__26166__delegate(x,y,more);
});
G__26166.cljs$core$IFn$_invoke$arity$variadic = G__26166__delegate;
return G__26166;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$core$IFn$_invoke$arity$1 = ___1;
_.cljs$core$IFn$_invoke$arity$2 = ___2;
_.cljs$core$IFn$_invoke$arity$variadic = ___3.cljs$core$IFn$_invoke$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){return (1);
});
var _STAR___1 = (function (x){return x;
});
var _STAR___2 = (function (x,y){return (x * y);
});
var _STAR___3 = (function() { 
var G__26168__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_STAR_,(x * y),more);
};
var G__26168 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26168__delegate.call(this,x,y,more);};
G__26168.cljs$lang$maxFixedArity = 2;
G__26168.cljs$lang$applyTo = (function (arglist__26169){
var x = cljs.core.first(arglist__26169);
arglist__26169 = cljs.core.next(arglist__26169);
var y = cljs.core.first(arglist__26169);
var more = cljs.core.rest(arglist__26169);
return G__26168__delegate(x,y,more);
});
G__26168.cljs$core$IFn$_invoke$arity$variadic = G__26168__delegate;
return G__26168;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$core$IFn$_invoke$arity$0 = _STAR___0;
_STAR_.cljs$core$IFn$_invoke$arity$1 = _STAR___1;
_STAR_.cljs$core$IFn$_invoke$arity$2 = _STAR___2;
_STAR_.cljs$core$IFn$_invoke$arity$variadic = _STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){return _SLASH_.cljs$core$IFn$_invoke$arity$2((1),x);
});
var _SLASH___2 = (function (x,y){return (x / y);
});
var _SLASH___3 = (function() { 
var G__26174__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_SLASH_,_SLASH_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__26174 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26174__delegate.call(this,x,y,more);};
G__26174.cljs$lang$maxFixedArity = 2;
G__26174.cljs$lang$applyTo = (function (arglist__26175){
var x = cljs.core.first(arglist__26175);
arglist__26175 = cljs.core.next(arglist__26175);
var y = cljs.core.first(arglist__26175);
var more = cljs.core.rest(arglist__26175);
return G__26174__delegate(x,y,more);
});
G__26174.cljs$core$IFn$_invoke$arity$variadic = G__26174__delegate;
return G__26174;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$core$IFn$_invoke$arity$1 = _SLASH___1;
_SLASH_.cljs$core$IFn$_invoke$arity$2 = _SLASH___2;
_SLASH_.cljs$core$IFn$_invoke$arity$variadic = _SLASH___3.cljs$core$IFn$_invoke$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){return true;
});
var _LT___2 = (function (x,y){return (x < y);
});
var _LT___3 = (function() { 
var G__26176__delegate = function (x,y,more){while(true){
if((x < y))
{if(cljs.core.next(more))
{{
var G__26177 = y;
var G__26178 = cljs.core.first(more);
var G__26179 = cljs.core.next(more);
x = G__26177;
y = G__26178;
more = G__26179;
continue;
}
} else
{return (y < cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__26176 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26176__delegate.call(this,x,y,more);};
G__26176.cljs$lang$maxFixedArity = 2;
G__26176.cljs$lang$applyTo = (function (arglist__26180){
var x = cljs.core.first(arglist__26180);
arglist__26180 = cljs.core.next(arglist__26180);
var y = cljs.core.first(arglist__26180);
var more = cljs.core.rest(arglist__26180);
return G__26176__delegate(x,y,more);
});
G__26176.cljs$core$IFn$_invoke$arity$variadic = G__26176__delegate;
return G__26176;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$core$IFn$_invoke$arity$1 = _LT___1;
_LT_.cljs$core$IFn$_invoke$arity$2 = _LT___2;
_LT_.cljs$core$IFn$_invoke$arity$variadic = _LT___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){return true;
});
var _LT__EQ___2 = (function (x,y){return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__26181__delegate = function (x,y,more){while(true){
if((x <= y))
{if(cljs.core.next(more))
{{
var G__26182 = y;
var G__26183 = cljs.core.first(more);
var G__26184 = cljs.core.next(more);
x = G__26182;
y = G__26183;
more = G__26184;
continue;
}
} else
{return (y <= cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__26181 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26181__delegate.call(this,x,y,more);};
G__26181.cljs$lang$maxFixedArity = 2;
G__26181.cljs$lang$applyTo = (function (arglist__26185){
var x = cljs.core.first(arglist__26185);
arglist__26185 = cljs.core.next(arglist__26185);
var y = cljs.core.first(arglist__26185);
var more = cljs.core.rest(arglist__26185);
return G__26181__delegate(x,y,more);
});
G__26181.cljs$core$IFn$_invoke$arity$variadic = G__26181__delegate;
return G__26181;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$core$IFn$_invoke$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$core$IFn$_invoke$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){return true;
});
var _GT___2 = (function (x,y){return (x > y);
});
var _GT___3 = (function() { 
var G__26186__delegate = function (x,y,more){while(true){
if((x > y))
{if(cljs.core.next(more))
{{
var G__26187 = y;
var G__26188 = cljs.core.first(more);
var G__26189 = cljs.core.next(more);
x = G__26187;
y = G__26188;
more = G__26189;
continue;
}
} else
{return (y > cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__26186 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26186__delegate.call(this,x,y,more);};
G__26186.cljs$lang$maxFixedArity = 2;
G__26186.cljs$lang$applyTo = (function (arglist__26190){
var x = cljs.core.first(arglist__26190);
arglist__26190 = cljs.core.next(arglist__26190);
var y = cljs.core.first(arglist__26190);
var more = cljs.core.rest(arglist__26190);
return G__26186__delegate(x,y,more);
});
G__26186.cljs$core$IFn$_invoke$arity$variadic = G__26186__delegate;
return G__26186;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$core$IFn$_invoke$arity$1 = _GT___1;
_GT_.cljs$core$IFn$_invoke$arity$2 = _GT___2;
_GT_.cljs$core$IFn$_invoke$arity$variadic = _GT___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){return true;
});
var _GT__EQ___2 = (function (x,y){return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__26191__delegate = function (x,y,more){while(true){
if((x >= y))
{if(cljs.core.next(more))
{{
var G__26192 = y;
var G__26193 = cljs.core.first(more);
var G__26194 = cljs.core.next(more);
x = G__26192;
y = G__26193;
more = G__26194;
continue;
}
} else
{return (y >= cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__26191 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26191__delegate.call(this,x,y,more);};
G__26191.cljs$lang$maxFixedArity = 2;
G__26191.cljs$lang$applyTo = (function (arglist__26195){
var x = cljs.core.first(arglist__26195);
arglist__26195 = cljs.core.next(arglist__26195);
var y = cljs.core.first(arglist__26195);
var more = cljs.core.rest(arglist__26195);
return G__26191__delegate(x,y,more);
});
G__26191.cljs$core$IFn$_invoke$arity$variadic = G__26191__delegate;
return G__26191;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$core$IFn$_invoke$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$core$IFn$_invoke$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){return (x - (1));
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){return x;
});
var max__2 = (function (x,y){var x__19797__auto__ = x;var y__19798__auto__ = y;return ((x__19797__auto__ > y__19798__auto__) ? x__19797__auto__ : y__19798__auto__);
});
var max__3 = (function() { 
var G__26196__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(max,(function (){var x__19797__auto__ = x;var y__19798__auto__ = y;return ((x__19797__auto__ > y__19798__auto__) ? x__19797__auto__ : y__19798__auto__);
})(),more);
};
var G__26196 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26196__delegate.call(this,x,y,more);};
G__26196.cljs$lang$maxFixedArity = 2;
G__26196.cljs$lang$applyTo = (function (arglist__26197){
var x = cljs.core.first(arglist__26197);
arglist__26197 = cljs.core.next(arglist__26197);
var y = cljs.core.first(arglist__26197);
var more = cljs.core.rest(arglist__26197);
return G__26196__delegate(x,y,more);
});
G__26196.cljs$core$IFn$_invoke$arity$variadic = G__26196__delegate;
return G__26196;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$core$IFn$_invoke$arity$1 = max__1;
max.cljs$core$IFn$_invoke$arity$2 = max__2;
max.cljs$core$IFn$_invoke$arity$variadic = max__3.cljs$core$IFn$_invoke$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){return x;
});
var min__2 = (function (x,y){var x__19809__auto__ = x;var y__19810__auto__ = y;return ((x__19809__auto__ < y__19810__auto__) ? x__19809__auto__ : y__19810__auto__);
});
var min__3 = (function() { 
var G__26198__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(min,(function (){var x__19809__auto__ = x;var y__19810__auto__ = y;return ((x__19809__auto__ < y__19810__auto__) ? x__19809__auto__ : y__19810__auto__);
})(),more);
};
var G__26198 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26198__delegate.call(this,x,y,more);};
G__26198.cljs$lang$maxFixedArity = 2;
G__26198.cljs$lang$applyTo = (function (arglist__26199){
var x = cljs.core.first(arglist__26199);
arglist__26199 = cljs.core.next(arglist__26199);
var y = cljs.core.first(arglist__26199);
var more = cljs.core.rest(arglist__26199);
return G__26198__delegate(x,y,more);
});
G__26198.cljs$core$IFn$_invoke$arity$variadic = G__26198__delegate;
return G__26198;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$core$IFn$_invoke$arity$1 = min__1;
min.cljs$core$IFn$_invoke$arity$2 = min__2;
min.cljs$core$IFn$_invoke$arity$variadic = min__3.cljs$core$IFn$_invoke$arity$variadic;
return min;
})()
;
cljs.core.byte$ = (function byte$(x){return x;
});
/**
* Coerce to char
*/
cljs.core.char$ = (function char$(x){if(typeof x === 'number')
{return String.fromCharCode(x);
} else
{if((typeof x === 'string') && ((x.length === (1))))
{return x;
} else
{throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.core.short$ = (function short$(x){return x;
});
cljs.core.float$ = (function float$(x){return x;
});
cljs.core.double$ = (function double$(x){return x;
});
cljs.core.unchecked_byte = (function unchecked_byte(x){return x;
});
cljs.core.unchecked_char = (function unchecked_char(x){return x;
});
cljs.core.unchecked_short = (function unchecked_short(x){return x;
});
cljs.core.unchecked_float = (function unchecked_float(x){return x;
});
cljs.core.unchecked_double = (function unchecked_double(x){return x;
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add = (function() {
var unchecked_add = null;
var unchecked_add__0 = (function (){return (0);
});
var unchecked_add__1 = (function (x){return x;
});
var unchecked_add__2 = (function (x,y){return (x + y);
});
var unchecked_add__3 = (function() { 
var G__26200__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_add,(x + y),more);
};
var G__26200 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26200__delegate.call(this,x,y,more);};
G__26200.cljs$lang$maxFixedArity = 2;
G__26200.cljs$lang$applyTo = (function (arglist__26201){
var x = cljs.core.first(arglist__26201);
arglist__26201 = cljs.core.next(arglist__26201);
var y = cljs.core.first(arglist__26201);
var more = cljs.core.rest(arglist__26201);
return G__26200__delegate(x,y,more);
});
G__26200.cljs$core$IFn$_invoke$arity$variadic = G__26200__delegate;
return G__26200;
})()
;
unchecked_add = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add__0.call(this);
case 1:
return unchecked_add__1.call(this,x);
case 2:
return unchecked_add__2.call(this,x,y);
default:
return unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add.cljs$lang$maxFixedArity = 2;
unchecked_add.cljs$lang$applyTo = unchecked_add__3.cljs$lang$applyTo;
unchecked_add.cljs$core$IFn$_invoke$arity$0 = unchecked_add__0;
unchecked_add.cljs$core$IFn$_invoke$arity$1 = unchecked_add__1;
unchecked_add.cljs$core$IFn$_invoke$arity$2 = unchecked_add__2;
unchecked_add.cljs$core$IFn$_invoke$arity$variadic = unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add;
})()
;
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add_int = (function() {
var unchecked_add_int = null;
var unchecked_add_int__0 = (function (){return (0);
});
var unchecked_add_int__1 = (function (x){return x;
});
var unchecked_add_int__2 = (function (x,y){return (x + y);
});
var unchecked_add_int__3 = (function() { 
var G__26202__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_add_int,(x + y),more);
};
var G__26202 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26202__delegate.call(this,x,y,more);};
G__26202.cljs$lang$maxFixedArity = 2;
G__26202.cljs$lang$applyTo = (function (arglist__26203){
var x = cljs.core.first(arglist__26203);
arglist__26203 = cljs.core.next(arglist__26203);
var y = cljs.core.first(arglist__26203);
var more = cljs.core.rest(arglist__26203);
return G__26202__delegate(x,y,more);
});
G__26202.cljs$core$IFn$_invoke$arity$variadic = G__26202__delegate;
return G__26202;
})()
;
unchecked_add_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add_int__0.call(this);
case 1:
return unchecked_add_int__1.call(this,x);
case 2:
return unchecked_add_int__2.call(this,x,y);
default:
return unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add_int.cljs$lang$maxFixedArity = 2;
unchecked_add_int.cljs$lang$applyTo = unchecked_add_int__3.cljs$lang$applyTo;
unchecked_add_int.cljs$core$IFn$_invoke$arity$0 = unchecked_add_int__0;
unchecked_add_int.cljs$core$IFn$_invoke$arity$1 = unchecked_add_int__1;
unchecked_add_int.cljs$core$IFn$_invoke$arity$2 = unchecked_add_int__2;
unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add_int;
})()
;
cljs.core.unchecked_dec = (function unchecked_dec(x){return (x - (1));
});
cljs.core.unchecked_dec_int = (function unchecked_dec_int(x){return (x - (1));
});
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core.unchecked_divide_int = (function() {
var unchecked_divide_int = null;
var unchecked_divide_int__1 = (function (x){return unchecked_divide_int.cljs$core$IFn$_invoke$arity$2((1),x);
});
var unchecked_divide_int__2 = (function (x,y){return (x / y);
});
var unchecked_divide_int__3 = (function() { 
var G__26208__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_divide_int,unchecked_divide_int.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__26208 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26208__delegate.call(this,x,y,more);};
G__26208.cljs$lang$maxFixedArity = 2;
G__26208.cljs$lang$applyTo = (function (arglist__26209){
var x = cljs.core.first(arglist__26209);
arglist__26209 = cljs.core.next(arglist__26209);
var y = cljs.core.first(arglist__26209);
var more = cljs.core.rest(arglist__26209);
return G__26208__delegate(x,y,more);
});
G__26208.cljs$core$IFn$_invoke$arity$variadic = G__26208__delegate;
return G__26208;
})()
;
unchecked_divide_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_divide_int__1.call(this,x);
case 2:
return unchecked_divide_int__2.call(this,x,y);
default:
return unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_divide_int.cljs$lang$maxFixedArity = 2;
unchecked_divide_int.cljs$lang$applyTo = unchecked_divide_int__3.cljs$lang$applyTo;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$1 = unchecked_divide_int__1;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$2 = unchecked_divide_int__2;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_divide_int;
})()
;
cljs.core.unchecked_inc = (function unchecked_inc(x){return (x + (1));
});
cljs.core.unchecked_inc_int = (function unchecked_inc_int(x){return (x + (1));
});
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply = (function() {
var unchecked_multiply = null;
var unchecked_multiply__0 = (function (){return (1);
});
var unchecked_multiply__1 = (function (x){return x;
});
var unchecked_multiply__2 = (function (x,y){return (x * y);
});
var unchecked_multiply__3 = (function() { 
var G__26210__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_multiply,(x * y),more);
};
var G__26210 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26210__delegate.call(this,x,y,more);};
G__26210.cljs$lang$maxFixedArity = 2;
G__26210.cljs$lang$applyTo = (function (arglist__26211){
var x = cljs.core.first(arglist__26211);
arglist__26211 = cljs.core.next(arglist__26211);
var y = cljs.core.first(arglist__26211);
var more = cljs.core.rest(arglist__26211);
return G__26210__delegate(x,y,more);
});
G__26210.cljs$core$IFn$_invoke$arity$variadic = G__26210__delegate;
return G__26210;
})()
;
unchecked_multiply = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply__0.call(this);
case 1:
return unchecked_multiply__1.call(this,x);
case 2:
return unchecked_multiply__2.call(this,x,y);
default:
return unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply.cljs$lang$maxFixedArity = 2;
unchecked_multiply.cljs$lang$applyTo = unchecked_multiply__3.cljs$lang$applyTo;
unchecked_multiply.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply__0;
unchecked_multiply.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply__1;
unchecked_multiply.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply__2;
unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply_int = (function() {
var unchecked_multiply_int = null;
var unchecked_multiply_int__0 = (function (){return (1);
});
var unchecked_multiply_int__1 = (function (x){return x;
});
var unchecked_multiply_int__2 = (function (x,y){return (x * y);
});
var unchecked_multiply_int__3 = (function() { 
var G__26212__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_multiply_int,(x * y),more);
};
var G__26212 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26212__delegate.call(this,x,y,more);};
G__26212.cljs$lang$maxFixedArity = 2;
G__26212.cljs$lang$applyTo = (function (arglist__26213){
var x = cljs.core.first(arglist__26213);
arglist__26213 = cljs.core.next(arglist__26213);
var y = cljs.core.first(arglist__26213);
var more = cljs.core.rest(arglist__26213);
return G__26212__delegate(x,y,more);
});
G__26212.cljs$core$IFn$_invoke$arity$variadic = G__26212__delegate;
return G__26212;
})()
;
unchecked_multiply_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply_int__0.call(this);
case 1:
return unchecked_multiply_int__1.call(this,x);
case 2:
return unchecked_multiply_int__2.call(this,x,y);
default:
return unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply_int.cljs$lang$maxFixedArity = 2;
unchecked_multiply_int.cljs$lang$applyTo = unchecked_multiply_int__3.cljs$lang$applyTo;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply_int__0;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply_int__1;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply_int__2;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply_int;
})()
;
cljs.core.unchecked_negate = (function unchecked_negate(x){return (- x);
});
cljs.core.unchecked_negate_int = (function unchecked_negate_int(x){return (- x);
});
cljs.core.unchecked_remainder_int = (function unchecked_remainder_int(x,n){var G__26216 = x;var G__26217 = n;return (cljs.core.mod.cljs$core$IFn$_invoke$arity$2 ? cljs.core.mod.cljs$core$IFn$_invoke$arity$2(G__26216,G__26217) : cljs.core.mod.call(null,G__26216,G__26217));
});
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_subtract = (function() {
var unchecked_subtract = null;
var unchecked_subtract__1 = (function (x){return (- x);
});
var unchecked_subtract__2 = (function (x,y){return (x - y);
});
var unchecked_subtract__3 = (function() { 
var G__26218__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_subtract,(x - y),more);
};
var G__26218 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26218__delegate.call(this,x,y,more);};
G__26218.cljs$lang$maxFixedArity = 2;
G__26218.cljs$lang$applyTo = (function (arglist__26219){
var x = cljs.core.first(arglist__26219);
arglist__26219 = cljs.core.next(arglist__26219);
var y = cljs.core.first(arglist__26219);
var more = cljs.core.rest(arglist__26219);
return G__26218__delegate(x,y,more);
});
G__26218.cljs$core$IFn$_invoke$arity$variadic = G__26218__delegate;
return G__26218;
})()
;
unchecked_subtract = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_subtract__1.call(this,x);
case 2:
return unchecked_subtract__2.call(this,x,y);
default:
return unchecked_subtract__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_subtract.cljs$lang$maxFixedArity = 2;
unchecked_subtract.cljs$lang$applyTo = unchecked_subtract__3.cljs$lang$applyTo;
unchecked_subtract.cljs$core$IFn$_invoke$arity$1 = unchecked_subtract__1;
unchecked_subtract.cljs$core$IFn$_invoke$arity$2 = unchecked_subtract__2;
unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = unchecked_subtract__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_subtract;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_subtract_int = (function() {
var unchecked_subtract_int = null;
var unchecked_subtract_int__1 = (function (x){return (- x);
});
var unchecked_subtract_int__2 = (function (x,y){return (x - y);
});
var unchecked_subtract_int__3 = (function() { 
var G__26220__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_subtract_int,(x - y),more);
};
var G__26220 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26220__delegate.call(this,x,y,more);};
G__26220.cljs$lang$maxFixedArity = 2;
G__26220.cljs$lang$applyTo = (function (arglist__26221){
var x = cljs.core.first(arglist__26221);
arglist__26221 = cljs.core.next(arglist__26221);
var y = cljs.core.first(arglist__26221);
var more = cljs.core.rest(arglist__26221);
return G__26220__delegate(x,y,more);
});
G__26220.cljs$core$IFn$_invoke$arity$variadic = G__26220__delegate;
return G__26220;
})()
;
unchecked_subtract_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_subtract_int__1.call(this,x);
case 2:
return unchecked_subtract_int__2.call(this,x,y);
default:
return unchecked_subtract_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_subtract_int.cljs$lang$maxFixedArity = 2;
unchecked_subtract_int.cljs$lang$applyTo = unchecked_subtract_int__3.cljs$lang$applyTo;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$1 = unchecked_subtract_int__1;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$2 = unchecked_subtract_int__2;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_subtract_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_subtract_int;
})()
;
cljs.core.fix = (function fix(q){if((q >= (0)))
{var G__26224 = q;return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__26224) : Math.floor.call(null,G__26224));
} else
{var G__26225 = q;return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__26225) : Math.ceil.call(null,G__26225));
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){return (x | (0));
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.unchecked_int = (function unchecked_int(x){return cljs.core.fix(x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){return cljs.core.fix(x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.unchecked_long = (function unchecked_long(x){return cljs.core.fix(x);
});
cljs.core.booleans = (function booleans(x){return x;
});
cljs.core.bytes = (function bytes(x){return x;
});
cljs.core.chars = (function chars(x){return x;
});
cljs.core.shorts = (function shorts(x){return x;
});
cljs.core.ints = (function ints(x){return x;
});
cljs.core.floats = (function floats(x){return x;
});
cljs.core.doubles = (function doubles(x){return x;
});
cljs.core.longs = (function longs(x){return x;
});
/**
* Modulus of num and div with original javascript behavior. i.e. bug for negative numbers
*/
cljs.core.js_mod = (function js_mod(n,d){return (n % d);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){return (((n % d) + d) % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){var rem = (n % d);return cljs.core.fix(((n - rem) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){var q = cljs.core.quot(n,d);return (n - (d * q));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
});
var rand__1 = (function (n){return (n * rand.cljs$core$IFn$_invoke$arity$0());
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$core$IFn$_invoke$arity$0 = rand__0;
rand.cljs$core$IFn$_invoke$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){return cljs.core.fix(cljs.core.rand.cljs$core$IFn$_invoke$arity$1(n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){return (x >> n);
});
/**
* DEPRECATED: Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){return (x >>> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.unsigned_bit_shift_right = (function unsigned_bit_shift_right(x,n){return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){var v__$1 = (v - ((v >> (1)) & (1431655765)));var v__$2 = ((v__$1 & (858993459)) + ((v__$1 >> (2)) & (858993459)));return ((((v__$2 + (v__$2 >> (4))) & (252645135)) * (16843009)) >> (24));
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){return true;
});
var _EQ__EQ___2 = (function (x,y){return cljs.core._equiv(x,y);
});
var _EQ__EQ___3 = (function() { 
var G__26230__delegate = function (x,y,more){while(true){
if(_EQ__EQ_.cljs$core$IFn$_invoke$arity$2(x,y))
{if(cljs.core.next(more))
{{
var G__26231 = y;
var G__26232 = cljs.core.first(more);
var G__26233 = cljs.core.next(more);
x = G__26231;
y = G__26232;
more = G__26233;
continue;
}
} else
{return _EQ__EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__26230 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26230__delegate.call(this,x,y,more);};
G__26230.cljs$lang$maxFixedArity = 2;
G__26230.cljs$lang$applyTo = (function (arglist__26234){
var x = cljs.core.first(arglist__26234);
arglist__26234 = cljs.core.next(arglist__26234);
var y = cljs.core.first(arglist__26234);
var more = cljs.core.rest(arglist__26234);
return G__26230__delegate(x,y,more);
});
G__26230.cljs$core$IFn$_invoke$arity$variadic = G__26230__delegate;
return G__26230;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){return (n > (0));
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){return (n === (0));
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){return (x < (0));
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){var n__$1 = n;var xs = cljs.core.seq(coll);while(true){
if((xs) && ((n__$1 > (0))))
{{
var G__26235 = (n__$1 - (1));
var G__26236 = cljs.core.next(xs);
n__$1 = G__26235;
xs = G__26236;
continue;
}
} else
{return xs;
}
break;
}
});
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){return "";
});
var str__1 = (function (x){if((x == null))
{return "";
} else
{return ''+x;
}
});
var str__2 = (function() { 
var G__26239__delegate = function (x,ys){var sb = (new goog.string.StringBuffer(str.cljs$core$IFn$_invoke$arity$1(x)));var more = ys;while(true){
if(cljs.core.truth_(more))
{{
var G__26240 = sb.append(str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(more)));
var G__26241 = cljs.core.next(more);
sb = G__26240;
more = G__26241;
continue;
}
} else
{return sb.toString();
}
break;
}
};
var G__26239 = function (x,var_args){
var ys = null;if (arguments.length > 1) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__26239__delegate.call(this,x,ys);};
G__26239.cljs$lang$maxFixedArity = 1;
G__26239.cljs$lang$applyTo = (function (arglist__26242){
var x = cljs.core.first(arglist__26242);
var ys = cljs.core.rest(arglist__26242);
return G__26239__delegate(x,ys);
});
G__26239.cljs$core$IFn$_invoke$arity$variadic = G__26239__delegate;
return G__26239;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$core$IFn$_invoke$arity$0 = str__0;
str.cljs$core$IFn$_invoke$arity$1 = str__1;
str.cljs$core$IFn$_invoke$arity$variadic = str__2.cljs$core$IFn$_invoke$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){return s.substring(start);
});
var subs__3 = (function (s,start,end){return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs.cljs$core$IFn$_invoke$arity$2 = subs__2;
subs.cljs$core$IFn$_invoke$arity$3 = subs__3;
return subs;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){return cljs.core.boolean$(((cljs.core.sequential_QMARK_(y))?(((cljs.core.counted_QMARK_(x)) && (cljs.core.counted_QMARK_(y)) && (!((cljs.core.count(x) === cljs.core.count(y)))))?false:(function (){var xs = cljs.core.seq(x);var ys = cljs.core.seq(y);while(true){
if((xs == null))
{return (ys == null);
} else
{if((ys == null))
{return false;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs),cljs.core.first(ys)))
{{
var G__26243 = cljs.core.next(xs);
var G__26244 = cljs.core.next(ys);
xs = G__26243;
ys = G__26244;
continue;
}
} else
{return false;

}
}
}
break;
}
})()):null));
});
cljs.core.hash_coll = (function hash_coll(coll){if(cljs.core.seq(coll))
{var res = cljs.core.hash(cljs.core.first(coll));var s = cljs.core.next(coll);while(true){
if((s == null))
{return res;
} else
{{
var G__26245 = cljs.core.hash_combine(res,cljs.core.hash(cljs.core.first(s)));
var G__26246 = cljs.core.next(s);
res = G__26245;
s = G__26246;
continue;
}
}
break;
}
} else
{return (0);
}
});
cljs.core.hash_imap = (function hash_imap(m){var h = (0);var s = cljs.core.seq(m);while(true){
if(s)
{var e = cljs.core.first(s);{
var G__26251 = ((h + (cljs.core.hash((function (){var G__26249 = e;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__26249) : cljs.core.key.call(null,G__26249));
})()) ^ cljs.core.hash((function (){var G__26250 = e;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__26250) : cljs.core.val.call(null,G__26250));
})()))) % (4503599627370496));
var G__26252 = cljs.core.next(s);
h = G__26251;
s = G__26252;
continue;
}
} else
{return h;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){var h = (0);var s__$1 = cljs.core.seq(s);while(true){
if(s__$1)
{var e = cljs.core.first(s__$1);{
var G__26253 = ((h + cljs.core.hash(e)) % (4503599627370496));
var G__26254 = cljs.core.next(s__$1);
h = G__26253;
s__$1 = G__26254;
continue;
}
} else
{return h;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){var seq__26265_26275 = cljs.core.seq(fn_map);var chunk__26266_26276 = null;var count__26267_26277 = (0);var i__26268_26278 = (0);while(true){
if((i__26268_26278 < count__26267_26277))
{var vec__26269_26279 = chunk__26266_26276.cljs$core$IIndexed$_nth$arity$2(null,i__26268_26278);var key_name_26280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26269_26279,(0),null);var f_26281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26269_26279,(1),null);var str_name_26282 = (function (){var G__26270 = key_name_26280;return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__26270) : cljs.core.name.call(null,G__26270));
})();(obj[str_name_26282] = f_26281);
{
var G__26283 = seq__26265_26275;
var G__26284 = chunk__26266_26276;
var G__26285 = count__26267_26277;
var G__26286 = (i__26268_26278 + (1));
seq__26265_26275 = G__26283;
chunk__26266_26276 = G__26284;
count__26267_26277 = G__26285;
i__26268_26278 = G__26286;
continue;
}
} else
{var temp__4126__auto___26287 = cljs.core.seq(seq__26265_26275);if(temp__4126__auto___26287)
{var seq__26265_26288__$1 = temp__4126__auto___26287;if(cljs.core.chunked_seq_QMARK_(seq__26265_26288__$1))
{var c__20699__auto___26289 = (function (){var G__26271 = seq__26265_26288__$1;return (cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1(G__26271) : cljs.core.chunk_first.call(null,G__26271));
})();{
var G__26290 = (function (){var G__26272 = seq__26265_26288__$1;return (cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1(G__26272) : cljs.core.chunk_rest.call(null,G__26272));
})();
var G__26291 = c__20699__auto___26289;
var G__26292 = cljs.core.count(c__20699__auto___26289);
var G__26293 = (0);
seq__26265_26275 = G__26290;
chunk__26266_26276 = G__26291;
count__26267_26277 = G__26292;
i__26268_26278 = G__26293;
continue;
}
} else
{var vec__26273_26294 = cljs.core.first(seq__26265_26288__$1);var key_name_26295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26273_26294,(0),null);var f_26296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26273_26294,(1),null);var str_name_26297 = (function (){var G__26274 = key_name_26295;return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__26274) : cljs.core.name.call(null,G__26274));
})();(obj[str_name_26297] = f_26296);
{
var G__26298 = cljs.core.next(seq__26265_26288__$1);
var G__26299 = null;
var G__26300 = (0);
var G__26301 = (0);
seq__26265_26275 = G__26298;
chunk__26266_26276 = G__26299;
count__26267_26277 = G__26300;
i__26268_26278 = G__26301;
continue;
}
}
} else
{}
}
break;
}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65937646;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorStr = "cljs.core/List";
cljs.core.List.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/List");
});
cljs.core.List.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.List.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.List.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.List(self__.meta,self__.first,self__.rest,self__.count,self__.__hash));
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.count === (1)))
{return null;
} else
{return self__.rest;
}
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._rest(coll__$1);
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.count === (1)))
{return cljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.List(meta__$1,self__.first,self__.rest,self__.count,self__.__hash));
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.List(self__.meta,o,coll__$1,(self__.count + (1)),null));
});
cljs.core.__GT_List = (function __GT_List(meta,first,rest,count,__hash){return (new cljs.core.List(meta,first,rest,count,__hash));
});

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 65937614;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorStr = "cljs.core/EmptyList";
cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.EmptyList.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.EmptyList.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.EmptyList(self__.meta));
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (0);
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (0);
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.EmptyList(meta__$1));
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.List(self__.meta,o,null,(1),null));
});
cljs.core.__GT_EmptyList = (function __GT_EmptyList(meta){return (new cljs.core.EmptyList(meta));
});
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){var G__26303 = coll;if(G__26303)
{var bit__20565__auto__ = (G__26303.cljs$lang$protocol_mask$partition0$ & (134217728));if((bit__20565__auto__) || (G__26303.cljs$core$IReversible$))
{return true;
} else
{if((!G__26303.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__26303);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__26303);
}
});
cljs.core.rseq = (function rseq(coll){return cljs.core._rseq(coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){if(cljs.core.reversible_QMARK_(coll))
{return cljs.core.rseq(coll);
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (xs){var arr = ((((xs instanceof cljs.core.IndexedSeq)) && ((xs.i === (0))))?xs.arr:(function (){var arr = [];var xs__$1 = xs;while(true){
if(!((xs__$1 == null)))
{arr.push(xs__$1.cljs$core$ISeq$_first$arity$1(null));
{
var G__26304 = xs__$1.cljs$core$INext$_next$arity$1(null);
xs__$1 = G__26304;
continue;
}
} else
{return arr;
}
break;
}
})());var i = arr.length;var r = cljs.core.List.EMPTY;while(true){
if((i > (0)))
{{
var G__26305 = (i - (1));
var G__26306 = r.cljs$core$ICollection$_conj$arity$2(null,(arr[(i - (1))]));
i = G__26305;
r = G__26306;
continue;
}
} else
{return r;
}
break;
}
};
var list = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return list__delegate.call(this,xs);};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__26307){
var xs = cljs.core.seq(arglist__26307);
return list__delegate(xs);
});
list.cljs$core$IFn$_invoke$arity$variadic = list__delegate;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65929452;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorStr = "cljs.core/Cons";
cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/Cons");
});
cljs.core.Cons.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.Cons.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.Cons.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.Cons(self__.meta,self__.first,self__.rest,self__.__hash));
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.rest == null))
{return null;
} else
{return cljs.core.seq(self__.rest);
}
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.rest == null))
{return cljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.Cons(meta__$1,self__.first,self__.rest,self__.__hash));
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.Cons(null,o,coll__$1,self__.__hash));
});
cljs.core.__GT_Cons = (function __GT_Cons(meta,first,rest,__hash){return (new cljs.core.Cons(meta,first,rest,__hash));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){if((function (){var or__19267__auto__ = (coll == null);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var G__26311 = coll;if(G__26311)
{var bit__20549__auto__ = (G__26311.cljs$lang$protocol_mask$partition0$ & (64));if((bit__20549__auto__) || (G__26311.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq(coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){var G__26313 = x;if(G__26313)
{var bit__20565__auto__ = (G__26313.cljs$lang$protocol_mask$partition0$ & (33554432));if((bit__20565__auto__) || (G__26313.cljs$core$IList$))
{return true;
} else
{if((!G__26313.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__26313);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__26313);
}
});
cljs.core.hash_keyword = (function hash_keyword(k){return ((cljs.core.hash_symbol(k) + (2654435769)) | (0));
});

/**
* @constructor
*/
cljs.core.Keyword = (function (ns,name,fqn,_hash){
this.ns = ns;
this.name = name;
this.fqn = fqn;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 2153775105;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorStr = "cljs.core/Keyword";
cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){var self__ = this;
var o__$1 = this;return cljs.core._write(writer,(":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fqn)));
});
cljs.core.Keyword.prototype.cljs$core$INamed$_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.name;
});
cljs.core.Keyword.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.ns;
});
cljs.core.Keyword.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var h__20006__auto__ = self__._hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_keyword(this$__$1);self__._hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
cljs.core.Keyword.prototype.call = (function() {
var G__26315 = null;
var G__26315__2 = (function (self__,coll){var self__ = this;
var self____$1 = this;var kw = self____$1;return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,kw);
});
var G__26315__3 = (function (self__,coll,not_found){var self__ = this;
var self____$1 = this;var kw = self____$1;return cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,kw,not_found);
});
G__26315 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__26315__2.call(this,self__,coll);
case 3:
return G__26315__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26315.cljs$core$IFn$_invoke$arity$2 = G__26315__2;
G__26315.cljs$core$IFn$_invoke$arity$3 = G__26315__3;
return G__26315;
})()
;
cljs.core.Keyword.prototype.apply = (function (self__,args26314){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args26314)));
});
cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){var self__ = this;
var kw = this;return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,kw);
});
cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){var self__ = this;
var kw = this;return cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,kw,not_found);
});
cljs.core.Keyword.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if((other instanceof cljs.core.Keyword))
{return (self__.fqn === other.fqn);
} else
{return false;
}
});
cljs.core.Keyword.prototype.toString = (function (){var self__ = this;
var _ = this;return (":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fqn));
});
cljs.core.Keyword.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.__GT_Keyword = (function __GT_Keyword(ns,name,fqn,_hash){return (new cljs.core.Keyword(ns,name,fqn,_hash));
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){return (x instanceof cljs.core.Keyword);
});
cljs.core.keyword_identical_QMARK_ = (function keyword_identical_QMARK_(x,y){if((x === y))
{return true;
} else
{if(((x instanceof cljs.core.Keyword)) && ((y instanceof cljs.core.Keyword)))
{return (x.fqn === y.fqn);
} else
{return false;
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){if((function (){var G__26317 = x;if(G__26317)
{var bit__20549__auto__ = (G__26317.cljs$lang$protocol_mask$partition1$ & (4096));if((bit__20549__auto__) || (G__26317.cljs$core$INamed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return x.cljs$core$INamed$_namespace$arity$1(null);
} else
{throw (new Error(("Doesn't support namespace: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))));
}
});
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){if((name instanceof cljs.core.Keyword))
{return name;
} else
{if((name instanceof cljs.core.Symbol))
{return (new cljs.core.Keyword(cljs.core.namespace(name),(function (){var G__26319 = name;return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__26319) : cljs.core.name.call(null,G__26319));
})(),name.str,null));
} else
{if(typeof name === 'string')
{var parts = name.split("/");if((parts.length === (2)))
{return (new cljs.core.Keyword((parts[(0)]),(parts[(1)]),name,null));
} else
{return (new cljs.core.Keyword(null,(parts[(0)]),name,null));
}
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){return (new cljs.core.Keyword(ns,name,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(ns)?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),null));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keyword.cljs$core$IFn$_invoke$arity$1 = keyword__1;
keyword.cljs$core$IFn$_invoke$arity$2 = keyword__2;
return keyword;
})()
;

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,fn,s,__hash){
this.meta = meta;
this.fn = fn;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorStr = "cljs.core/LazySeq";
cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.LazySeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.LazySeq.prototype.sval = (function (){var self__ = this;
var coll = this;if((self__.fn == null))
{return self__.s;
} else
{self__.s = (function (){return (self__.fn.cljs$core$IFn$_invoke$arity$0 ? self__.fn.cljs$core$IFn$_invoke$arity$0() : self__.fn.call(null));
})();
self__.fn = null;
return self__.s;
}
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;cljs.core._seq(coll__$1);
if((self__.s == null))
{return null;
} else
{return cljs.core.next(self__.s);
}
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;cljs.core._seq(coll__$1);
if((self__.s == null))
{return null;
} else
{return cljs.core.first(self__.s);
}
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;cljs.core._seq(coll__$1);
if(!((self__.s == null)))
{return cljs.core.rest(self__.s);
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;coll__$1.sval();
if((self__.s == null))
{return null;
} else
{var ls = self__.s;while(true){
if((ls instanceof cljs.core.LazySeq))
{{
var G__26320 = ls.sval();
ls = G__26320;
continue;
}
} else
{self__.s = ls;
return cljs.core.seq(self__.s);
}
break;
}
}
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.LazySeq(meta__$1,self__.fn,self__.s,self__.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_LazySeq = (function __GT_LazySeq(meta,fn,s,__hash){return (new cljs.core.LazySeq(meta,fn,s,__hash));
});

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorStr = "cljs.core/ChunkBuffer";
cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){var self__ = this;
var _ = this;(self__.buf[self__.end] = o);
return self__.end = (self__.end + (1));
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){var self__ = this;
var _ = this;var ret = (new cljs.core.ArrayChunk(self__.buf,(0),self__.end));self__.buf = null;
return ret;
});
cljs.core.__GT_ChunkBuffer = (function __GT_ChunkBuffer(buf,end){return (new cljs.core.ChunkBuffer(buf,end));
});
cljs.core.chunk_buffer = (function chunk_buffer(capacity){return (new cljs.core.ChunkBuffer((new Array(capacity)),(0)));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorStr = "cljs.core/ArrayChunk";
cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,(self__.arr[self__.off]),(self__.off + (1)));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,start,self__.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.off === self__.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(self__.arr,(self__.off + (1)),self__.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){var self__ = this;
var coll__$1 = this;return (self__.arr[(self__.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){var self__ = this;
var coll__$1 = this;if(((i >= (0))) && ((i < (self__.end - self__.off))))
{return (self__.arr[(self__.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.end - self__.off);
});
cljs.core.__GT_ArrayChunk = (function __GT_ArrayChunk(arr,off,end){return (new cljs.core.ArrayChunk(arr,off,end));
});
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){return (new cljs.core.ArrayChunk(arr,(0),arr.length));
});
var array_chunk__2 = (function (arr,off){return (new cljs.core.ArrayChunk(arr,off,arr.length));
});
var array_chunk__3 = (function (arr,off,end){return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_chunk.cljs$core$IFn$_invoke$arity$1 = array_chunk__1;
array_chunk.cljs$core$IFn$_invoke$arity$2 = array_chunk__2;
array_chunk.cljs$core$IFn$_invoke$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta,__hash){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31850732;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorStr = "cljs.core/ChunkedCons";
cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.ChunkedCons.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((cljs.core._count(self__.chunk) > (1)))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first(self__.chunk),self__.more,self__.meta,null));
} else
{var more__$1 = cljs.core._seq(self__.more);if((more__$1 == null))
{return null;
} else
{return more__$1;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.chunk,(0));
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((cljs.core._count(self__.chunk) > (1)))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first(self__.chunk),self__.more,self__.meta,null));
} else
{if((self__.more == null))
{return cljs.core.List.EMPTY;
} else
{return self__.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.more == null))
{return cljs.core.List.EMPTY;
} else
{return self__.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){var self__ = this;
var coll__$1 = this;return (new cljs.core.ChunkedCons(self__.chunk,self__.more,m,self__.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return cljs.core.cons(o,this$__$1);
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.more == null))
{return null;
} else
{return self__.more;
}
});
cljs.core.__GT_ChunkedCons = (function __GT_ChunkedCons(chunk,more,meta,__hash){return (new cljs.core.ChunkedCons(chunk,more,meta,__hash));
});
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){if((cljs.core._count(chunk) === (0)))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){return b.add(x);
});
cljs.core.chunk = (function chunk(b){return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){return cljs.core._chunked_first(s);
});
cljs.core.chunk_rest = (function chunk_rest(s){return cljs.core._chunked_rest(s);
});
cljs.core.chunk_next = (function chunk_next(s){if((function (){var G__26322 = s;if(G__26322)
{var bit__20549__auto__ = (G__26322.cljs$lang$protocol_mask$partition1$ & (1024));if((bit__20549__auto__) || (G__26322.cljs$core$IChunkedNext$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._chunked_next(s);
} else
{return cljs.core.seq(cljs.core._chunked_rest(s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){var ary = [];var s__$1 = s;while(true){
if(cljs.core.seq(s__$1))
{ary.push(cljs.core.first(s__$1));
{
var G__26323 = cljs.core.next(s__$1);
s__$1 = G__26323;
continue;
}
} else
{return ary;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){var ret = (new Array(cljs.core.count(coll)));var i_26324 = (0);var xs_26325 = cljs.core.seq(coll);while(true){
if(xs_26325)
{(ret[i_26324] = cljs.core.to_array(cljs.core.first(xs_26325)));
{
var G__26326 = (i_26324 + (1));
var G__26327 = cljs.core.next(xs_26325);
i_26324 = G__26326;
xs_26325 = G__26327;
continue;
}
} else
{}
break;
}
return ret;
});
cljs.core.int_array = (function() {
var int_array = null;
var int_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return int_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else
{return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var int_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s = cljs.core.seq(init_val_or_seq);var i = (0);var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first(s__$1));
{
var G__26330 = (i + (1));
var G__26331 = cljs.core.next(s__$1);
i = G__26330;
s__$1 = G__26331;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__20882__auto___26332 = size;var i_26333 = (0);while(true){
if((i_26333 < n__20882__auto___26332))
{(a[i_26333] = init_val_or_seq);
{
var G__26334 = (i_26333 + (1));
i_26333 = G__26334;
continue;
}
} else
{}
break;
}
return a;
}
});
int_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return int_array__1.call(this,size);
case 2:
return int_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
int_array.cljs$core$IFn$_invoke$arity$1 = int_array__1;
int_array.cljs$core$IFn$_invoke$arity$2 = int_array__2;
return int_array;
})()
;
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return long_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else
{return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var long_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s = cljs.core.seq(init_val_or_seq);var i = (0);var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first(s__$1));
{
var G__26337 = (i + (1));
var G__26338 = cljs.core.next(s__$1);
i = G__26337;
s__$1 = G__26338;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__20882__auto___26339 = size;var i_26340 = (0);while(true){
if((i_26340 < n__20882__auto___26339))
{(a[i_26340] = init_val_or_seq);
{
var G__26341 = (i_26340 + (1));
i_26340 = G__26341;
continue;
}
} else
{}
break;
}
return a;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
long_array.cljs$core$IFn$_invoke$arity$1 = long_array__1;
long_array.cljs$core$IFn$_invoke$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return double_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else
{return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var double_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s = cljs.core.seq(init_val_or_seq);var i = (0);var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first(s__$1));
{
var G__26344 = (i + (1));
var G__26345 = cljs.core.next(s__$1);
i = G__26344;
s__$1 = G__26345;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__20882__auto___26346 = size;var i_26347 = (0);while(true){
if((i_26347 < n__20882__auto___26346))
{(a[i_26347] = init_val_or_seq);
{
var G__26348 = (i_26347 + (1));
i_26347 = G__26348;
continue;
}
} else
{}
break;
}
return a;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
double_array.cljs$core$IFn$_invoke$arity$1 = double_array__1;
double_array.cljs$core$IFn$_invoke$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return object_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else
{return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var object_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s = cljs.core.seq(init_val_or_seq);var i = (0);var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first(s__$1));
{
var G__26351 = (i + (1));
var G__26352 = cljs.core.next(s__$1);
i = G__26351;
s__$1 = G__26352;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__20882__auto___26353 = size;var i_26354 = (0);while(true){
if((i_26354 < n__20882__auto___26353))
{(a[i_26354] = init_val_or_seq);
{
var G__26355 = (i_26354 + (1));
i_26354 = G__26355;
continue;
}
} else
{}
break;
}
return a;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
object_array.cljs$core$IFn$_invoke$arity$1 = object_array__1;
object_array.cljs$core$IFn$_invoke$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){if(cljs.core.counted_QMARK_(s))
{return cljs.core.count(s);
} else
{var s__$1 = s;var i = n;var sum = (0);while(true){
if(((i > (0))) && (cljs.core.seq(s__$1)))
{{
var G__26356 = cljs.core.next(s__$1);
var G__26357 = (i - (1));
var G__26358 = (sum + (1));
s__$1 = G__26356;
i = G__26357;
sum = G__26358;
continue;
}
} else
{return sum;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){if((arglist == null))
{return null;
} else
{if((cljs.core.next(arglist) == null))
{return cljs.core.seq(cljs.core.first(arglist));
} else
{return cljs.core.cons(cljs.core.first(arglist),spread(cljs.core.next(arglist)));

}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){return (new cljs.core.LazySeq(null,(function (){return null;
}),null,null));
});
var concat__1 = (function (x){return (new cljs.core.LazySeq(null,(function (){return x;
}),null,null));
});
var concat__2 = (function (x,y){return (new cljs.core.LazySeq(null,(function (){var s = cljs.core.seq(x);if(s)
{if(cljs.core.chunked_seq_QMARK_(s))
{return cljs.core.chunk_cons(cljs.core.chunk_first(s),concat.cljs$core$IFn$_invoke$arity$2(cljs.core.chunk_rest(s),y));
} else
{return cljs.core.cons(cljs.core.first(s),concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s),y));
}
} else
{return y;
}
}),null,null));
});
var concat__3 = (function() { 
var G__26378__delegate = function (x,y,zs){var cat = (function cat(xys,zs__$1){return (new cljs.core.LazySeq(null,(function (){var xys__$1 = cljs.core.seq(xys);if(xys__$1)
{if(cljs.core.chunked_seq_QMARK_(xys__$1))
{return cljs.core.chunk_cons(cljs.core.chunk_first(xys__$1),cat(cljs.core.chunk_rest(xys__$1),zs__$1));
} else
{return cljs.core.cons(cljs.core.first(xys__$1),cat(cljs.core.rest(xys__$1),zs__$1));
}
} else
{if(cljs.core.truth_(zs__$1))
{return cat(cljs.core.first(zs__$1),cljs.core.next(zs__$1));
} else
{return null;
}
}
}),null,null));
});return cat(concat.cljs$core$IFn$_invoke$arity$2(x,y),zs);
};
var G__26378 = function (x,y,var_args){
var zs = null;if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26378__delegate.call(this,x,y,zs);};
G__26378.cljs$lang$maxFixedArity = 2;
G__26378.cljs$lang$applyTo = (function (arglist__26379){
var x = cljs.core.first(arglist__26379);
arglist__26379 = cljs.core.next(arglist__26379);
var y = cljs.core.first(arglist__26379);
var zs = cljs.core.rest(arglist__26379);
return G__26378__delegate(x,y,zs);
});
G__26378.cljs$core$IFn$_invoke$arity$variadic = G__26378__delegate;
return G__26378;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$core$IFn$_invoke$arity$0 = concat__0;
concat.cljs$core$IFn$_invoke$arity$1 = concat__1;
concat.cljs$core$IFn$_invoke$arity$2 = concat__2;
concat.cljs$core$IFn$_invoke$arity$variadic = concat__3.cljs$core$IFn$_invoke$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){return cljs.core.seq(args);
});
var list_STAR___2 = (function (a,args){return cljs.core.cons(a,args);
});
var list_STAR___3 = (function (a,b,args){return cljs.core.cons(a,cljs.core.cons(b,args));
});
var list_STAR___4 = (function (a,b,c,args){return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,args)));
});
var list_STAR___5 = (function() { 
var G__26380__delegate = function (a,b,c,d,more){return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(more)))));
};
var G__26380 = function (a,b,c,d,var_args){
var more = null;if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__26380__delegate.call(this,a,b,c,d,more);};
G__26380.cljs$lang$maxFixedArity = 4;
G__26380.cljs$lang$applyTo = (function (arglist__26381){
var a = cljs.core.first(arglist__26381);
arglist__26381 = cljs.core.next(arglist__26381);
var b = cljs.core.first(arglist__26381);
arglist__26381 = cljs.core.next(arglist__26381);
var c = cljs.core.first(arglist__26381);
arglist__26381 = cljs.core.next(arglist__26381);
var d = cljs.core.first(arglist__26381);
var more = cljs.core.rest(arglist__26381);
return G__26380__delegate(a,b,c,d,more);
});
G__26380.cljs$core$IFn$_invoke$arity$variadic = G__26380__delegate;
return G__26380;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$core$IFn$_invoke$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$core$IFn$_invoke$arity$1 = list_STAR___1;
list_STAR_.cljs$core$IFn$_invoke$arity$2 = list_STAR___2;
list_STAR_.cljs$core$IFn$_invoke$arity$3 = list_STAR___3;
list_STAR_.cljs$core$IFn$_invoke$arity$4 = list_STAR___4;
list_STAR_.cljs$core$IFn$_invoke$arity$variadic = list_STAR___5.cljs$core$IFn$_invoke$arity$variadic;
return list_STAR_;
})()
;
/**
* Returns a new, transient version of the collection, in constant time.
*/
cljs.core.transient$ = (function transient$(coll){return cljs.core._as_transient(coll);
});
/**
* Returns a new, persistent version of the transient collection, in
* constant time. The transient collection cannot be used after this
* call, any such use will throw an exception.
*/
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){return cljs.core._persistent_BANG_(tcoll);
});
/**
* Adds x to the transient collection, and return coll. The 'addition'
* may happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj_BANG_ = (function() {
var conj_BANG_ = null;
var conj_BANG___0 = (function (){return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});
var conj_BANG___1 = (function (coll){return coll;
});
var conj_BANG___2 = (function (tcoll,val){return cljs.core._conj_BANG_(tcoll,val);
});
var conj_BANG___3 = (function() { 
var G__26382__delegate = function (tcoll,val,vals){while(true){
var ntcoll = cljs.core._conj_BANG_(tcoll,val);if(cljs.core.truth_(vals))
{{
var G__26383 = ntcoll;
var G__26384 = cljs.core.first(vals);
var G__26385 = cljs.core.next(vals);
tcoll = G__26383;
val = G__26384;
vals = G__26385;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__26382 = function (tcoll,val,var_args){
var vals = null;if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26382__delegate.call(this,tcoll,val,vals);};
G__26382.cljs$lang$maxFixedArity = 2;
G__26382.cljs$lang$applyTo = (function (arglist__26386){
var tcoll = cljs.core.first(arglist__26386);
arglist__26386 = cljs.core.next(arglist__26386);
var val = cljs.core.first(arglist__26386);
var vals = cljs.core.rest(arglist__26386);
return G__26382__delegate(tcoll,val,vals);
});
G__26382.cljs$core$IFn$_invoke$arity$variadic = G__26382__delegate;
return G__26382;
})()
;
conj_BANG_ = function(tcoll,val,var_args){
var vals = var_args;
switch(arguments.length){
case 0:
return conj_BANG___0.call(this);
case 1:
return conj_BANG___1.call(this,tcoll);
case 2:
return conj_BANG___2.call(this,tcoll,val);
default:
return conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_BANG_.cljs$lang$maxFixedArity = 2;
conj_BANG_.cljs$lang$applyTo = conj_BANG___3.cljs$lang$applyTo;
conj_BANG_.cljs$core$IFn$_invoke$arity$0 = conj_BANG___0;
conj_BANG_.cljs$core$IFn$_invoke$arity$1 = conj_BANG___1;
conj_BANG_.cljs$core$IFn$_invoke$arity$2 = conj_BANG___2;
conj_BANG_.cljs$core$IFn$_invoke$arity$variadic = conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return conj_BANG_;
})()
;
/**
* When applied to a transient map, adds mapping of key(s) to
* val(s). When applied to a transient vector, sets the val at index.
* Note - index must be <= (count vector). Returns coll.
* @param {...*} var_args
*/
cljs.core.assoc_BANG_ = (function() {
var assoc_BANG_ = null;
var assoc_BANG___3 = (function (tcoll,key,val){return cljs.core._assoc_BANG_(tcoll,key,val);
});
var assoc_BANG___4 = (function() { 
var G__26387__delegate = function (tcoll,key,val,kvs){while(true){
var ntcoll = cljs.core._assoc_BANG_(tcoll,key,val);if(cljs.core.truth_(kvs))
{{
var G__26388 = ntcoll;
var G__26389 = cljs.core.first(kvs);
var G__26390 = cljs.core.second(kvs);
var G__26391 = cljs.core.nnext(kvs);
tcoll = G__26388;
key = G__26389;
val = G__26390;
kvs = G__26391;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__26387 = function (tcoll,key,val,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__26387__delegate.call(this,tcoll,key,val,kvs);};
G__26387.cljs$lang$maxFixedArity = 3;
G__26387.cljs$lang$applyTo = (function (arglist__26392){
var tcoll = cljs.core.first(arglist__26392);
arglist__26392 = cljs.core.next(arglist__26392);
var key = cljs.core.first(arglist__26392);
arglist__26392 = cljs.core.next(arglist__26392);
var val = cljs.core.first(arglist__26392);
var kvs = cljs.core.rest(arglist__26392);
return G__26387__delegate(tcoll,key,val,kvs);
});
G__26387.cljs$core$IFn$_invoke$arity$variadic = G__26387__delegate;
return G__26387;
})()
;
assoc_BANG_ = function(tcoll,key,val,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc_BANG___3.call(this,tcoll,key,val);
default:
return assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic(tcoll,key,val, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc_BANG_.cljs$lang$maxFixedArity = 3;
assoc_BANG_.cljs$lang$applyTo = assoc_BANG___4.cljs$lang$applyTo;
assoc_BANG_.cljs$core$IFn$_invoke$arity$3 = assoc_BANG___3;
assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return assoc_BANG_;
})()
;
/**
* Returns a transient map that doesn't contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc_BANG_ = (function() {
var dissoc_BANG_ = null;
var dissoc_BANG___2 = (function (tcoll,key){return cljs.core._dissoc_BANG_(tcoll,key);
});
var dissoc_BANG___3 = (function() { 
var G__26393__delegate = function (tcoll,key,ks){while(true){
var ntcoll = cljs.core._dissoc_BANG_(tcoll,key);if(cljs.core.truth_(ks))
{{
var G__26394 = ntcoll;
var G__26395 = cljs.core.first(ks);
var G__26396 = cljs.core.next(ks);
tcoll = G__26394;
key = G__26395;
ks = G__26396;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__26393 = function (tcoll,key,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26393__delegate.call(this,tcoll,key,ks);};
G__26393.cljs$lang$maxFixedArity = 2;
G__26393.cljs$lang$applyTo = (function (arglist__26397){
var tcoll = cljs.core.first(arglist__26397);
arglist__26397 = cljs.core.next(arglist__26397);
var key = cljs.core.first(arglist__26397);
var ks = cljs.core.rest(arglist__26397);
return G__26393__delegate(tcoll,key,ks);
});
G__26393.cljs$core$IFn$_invoke$arity$variadic = G__26393__delegate;
return G__26393;
})()
;
dissoc_BANG_ = function(tcoll,key,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return dissoc_BANG___2.call(this,tcoll,key);
default:
return dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,key, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc_BANG_.cljs$lang$maxFixedArity = 2;
dissoc_BANG_.cljs$lang$applyTo = dissoc_BANG___3.cljs$lang$applyTo;
dissoc_BANG_.cljs$core$IFn$_invoke$arity$2 = dissoc_BANG___2;
dissoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return dissoc_BANG_;
})()
;
/**
* Removes the last item from a transient vector. If
* the collection is empty, throws an exception. Returns coll
*/
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){return cljs.core._pop_BANG_(tcoll);
});
/**
* disj[oin]. Returns a transient set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj_BANG_ = (function() {
var disj_BANG_ = null;
var disj_BANG___2 = (function (tcoll,val){return cljs.core._disjoin_BANG_(tcoll,val);
});
var disj_BANG___3 = (function() { 
var G__26398__delegate = function (tcoll,val,vals){while(true){
var ntcoll = cljs.core._disjoin_BANG_(tcoll,val);if(cljs.core.truth_(vals))
{{
var G__26399 = ntcoll;
var G__26400 = cljs.core.first(vals);
var G__26401 = cljs.core.next(vals);
tcoll = G__26399;
val = G__26400;
vals = G__26401;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__26398 = function (tcoll,val,var_args){
var vals = null;if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26398__delegate.call(this,tcoll,val,vals);};
G__26398.cljs$lang$maxFixedArity = 2;
G__26398.cljs$lang$applyTo = (function (arglist__26402){
var tcoll = cljs.core.first(arglist__26402);
arglist__26402 = cljs.core.next(arglist__26402);
var val = cljs.core.first(arglist__26402);
var vals = cljs.core.rest(arglist__26402);
return G__26398__delegate(tcoll,val,vals);
});
G__26398.cljs$core$IFn$_invoke$arity$variadic = G__26398__delegate;
return G__26398;
})()
;
disj_BANG_ = function(tcoll,val,var_args){
var vals = var_args;
switch(arguments.length){
case 2:
return disj_BANG___2.call(this,tcoll,val);
default:
return disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj_BANG_.cljs$lang$maxFixedArity = 2;
disj_BANG_.cljs$lang$applyTo = disj_BANG___3.cljs$lang$applyTo;
disj_BANG_.cljs$core$IFn$_invoke$arity$2 = disj_BANG___2;
disj_BANG_.cljs$core$IFn$_invoke$arity$variadic = disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return disj_BANG_;
})()
;
cljs.core.apply_to = (function apply_to(f,argc,args){var args__$1 = cljs.core.seq(args);if((argc === (0)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{var a20960 = cljs.core._first(args__$1);var args__$2 = cljs.core._rest(args__$1);if((argc === (1)))
{if(f.cljs$core$IFn$_invoke$arity$1)
{return f.cljs$core$IFn$_invoke$arity$1(a20960);
} else
{var G__26613 = a20960;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26613) : f.call(null,G__26613));
}
} else
{var b20961 = cljs.core._first(args__$2);var args__$3 = cljs.core._rest(args__$2);if((argc === (2)))
{if(f.cljs$core$IFn$_invoke$arity$2)
{return f.cljs$core$IFn$_invoke$arity$2(a20960,b20961);
} else
{var G__26614 = a20960;var G__26615 = b20961;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26614,G__26615) : f.call(null,G__26614,G__26615));
}
} else
{var c20962 = cljs.core._first(args__$3);var args__$4 = cljs.core._rest(args__$3);if((argc === (3)))
{if(f.cljs$core$IFn$_invoke$arity$3)
{return f.cljs$core$IFn$_invoke$arity$3(a20960,b20961,c20962);
} else
{var G__26616 = a20960;var G__26617 = b20961;var G__26618 = c20962;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__26616,G__26617,G__26618) : f.call(null,G__26616,G__26617,G__26618));
}
} else
{var d20963 = cljs.core._first(args__$4);var args__$5 = cljs.core._rest(args__$4);if((argc === (4)))
{if(f.cljs$core$IFn$_invoke$arity$4)
{return f.cljs$core$IFn$_invoke$arity$4(a20960,b20961,c20962,d20963);
} else
{var G__26619 = a20960;var G__26620 = b20961;var G__26621 = c20962;var G__26622 = d20963;return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__26619,G__26620,G__26621,G__26622) : f.call(null,G__26619,G__26620,G__26621,G__26622));
}
} else
{var e20964 = cljs.core._first(args__$5);var args__$6 = cljs.core._rest(args__$5);if((argc === (5)))
{if(f.cljs$core$IFn$_invoke$arity$5)
{return f.cljs$core$IFn$_invoke$arity$5(a20960,b20961,c20962,d20963,e20964);
} else
{var G__26623 = a20960;var G__26624 = b20961;var G__26625 = c20962;var G__26626 = d20963;var G__26627 = e20964;return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__26623,G__26624,G__26625,G__26626,G__26627) : f.call(null,G__26623,G__26624,G__26625,G__26626,G__26627));
}
} else
{var f20965 = cljs.core._first(args__$6);var args__$7 = cljs.core._rest(args__$6);if((argc === (6)))
{if(f.cljs$core$IFn$_invoke$arity$6)
{return f.cljs$core$IFn$_invoke$arity$6(a20960,b20961,c20962,d20963,e20964,f20965);
} else
{var G__26628 = a20960;var G__26629 = b20961;var G__26630 = c20962;var G__26631 = d20963;var G__26632 = e20964;var G__26633 = f20965;return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__26628,G__26629,G__26630,G__26631,G__26632,G__26633) : f.call(null,G__26628,G__26629,G__26630,G__26631,G__26632,G__26633));
}
} else
{var g20966 = cljs.core._first(args__$7);var args__$8 = cljs.core._rest(args__$7);if((argc === (7)))
{if(f.cljs$core$IFn$_invoke$arity$7)
{return f.cljs$core$IFn$_invoke$arity$7(a20960,b20961,c20962,d20963,e20964,f20965,g20966);
} else
{var G__26634 = a20960;var G__26635 = b20961;var G__26636 = c20962;var G__26637 = d20963;var G__26638 = e20964;var G__26639 = f20965;var G__26640 = g20966;return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__26634,G__26635,G__26636,G__26637,G__26638,G__26639,G__26640) : f.call(null,G__26634,G__26635,G__26636,G__26637,G__26638,G__26639,G__26640));
}
} else
{var h20967 = cljs.core._first(args__$8);var args__$9 = cljs.core._rest(args__$8);if((argc === (8)))
{if(f.cljs$core$IFn$_invoke$arity$8)
{return f.cljs$core$IFn$_invoke$arity$8(a20960,b20961,c20962,d20963,e20964,f20965,g20966,h20967);
} else
{var G__26641 = a20960;var G__26642 = b20961;var G__26643 = c20962;var G__26644 = d20963;var G__26645 = e20964;var G__26646 = f20965;var G__26647 = g20966;var G__26648 = h20967;return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__26641,G__26642,G__26643,G__26644,G__26645,G__26646,G__26647,G__26648) : f.call(null,G__26641,G__26642,G__26643,G__26644,G__26645,G__26646,G__26647,G__26648));
}
} else
{var i20968 = cljs.core._first(args__$9);var args__$10 = cljs.core._rest(args__$9);if((argc === (9)))
{if(f.cljs$core$IFn$_invoke$arity$9)
{return f.cljs$core$IFn$_invoke$arity$9(a20960,b20961,c20962,d20963,e20964,f20965,g20966,h20967,i20968);
} else
{var G__26649 = a20960;var G__26650 = b20961;var G__26651 = c20962;var G__26652 = d20963;var G__26653 = e20964;var G__26654 = f20965;var G__26655 = g20966;var G__26656 = h20967;var G__26657 = i20968;return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__26649,G__26650,G__26651,G__26652,G__26653,G__26654,G__26655,G__26656,G__26657) : f.call(null,G__26649,G__26650,G__26651,G__26652,G__26653,G__26654,G__26655,G__26656,G__26657));
}
} else
{var j20969 = cljs.core._first(args__$10);var args__$11 = cljs.core._rest(args__$10);if((argc === (10)))
{if(f.cljs$core$IFn$_invoke$arity$10)
{return f.cljs$core$IFn$_invoke$arity$10(a20960,b20961,c20962,d20963,e20964,f20965,g20966,h20967,i20968,j20969);
} else
{var G__26658 = a20960;var G__26659 = b20961;var G__26660 = c20962;var G__26661 = d20963;var G__26662 = e20964;var G__26663 = f20965;var G__26664 = g20966;var G__26665 = h20967;var G__26666 = i20968;var G__26667 = j20969;return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__26658,G__26659,G__26660,G__26661,G__26662,G__26663,G__26664,G__26665,G__26666,G__26667) : f.call(null,G__26658,G__26659,G__26660,G__26661,G__26662,G__26663,G__26664,G__26665,G__26666,G__26667));
}
} else
{var k20970 = cljs.core._first(args__$11);var args__$12 = cljs.core._rest(args__$11);if((argc === (11)))
{if(f.cljs$core$IFn$_invoke$arity$11)
{return f.cljs$core$IFn$_invoke$arity$11(a20960,b20961,c20962,d20963,e20964,f20965,g20966,h20967,i20968,j20969,k20970);
} else
{var G__26668 = a20960;var G__26669 = b20961;var G__26670 = c20962;var G__26671 = d20963;var G__26672 = e20964;var G__26673 = f20965;var G__26674 = g20966;var G__26675 = h20967;var G__26676 = i20968;var G__26677 = j20969;var G__26678 = k20970;return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__26668,G__26669,G__26670,G__26671,G__26672,G__26673,G__26674,G__26675,G__26676,G__26677,G__26678) : f.call(null,G__26668,G__26669,G__26670,G__26671,G__26672,G__26673,G__26674,G__26675,G__26676,G__26677,G__26678));
}
} else
{var l20971 = cljs.core._first(args__$12);var args__$13 = cljs.core._rest(args__$12);if((argc === (12)))
{if(f.cljs$core$IFn$_invoke$arity$12)
{return f.cljs$core$IFn$_invoke$arity$12(a20960,b20961,c20962,d20963,e20964,f20965,g20966,h20967,i20968,j20969,k20970,l20971);
} else
{var G__26679 = a20960;var G__26680 = b20961;var G__26681 = c20962;var G__26682 = d20963;var G__26683 = e20964;var G__26684 = f20965;var G__26685 = g20966;var G__26686 = h20967;var G__26687 = i20968;var G__26688 = j20969;var G__26689 = k20970;var G__26690 = l20971;return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__26679,G__26680,G__26681,G__26682,G__26683,G__26684,G__26685,G__26686,G__26687,G__26688,G__26689,G__26690) : f.call(null,G__26679,G__26680,G__26681,G__26682,G__26683,G__26684,G__26685,G__26686,G__26687,G__26688,G__26689,G__26690));
}
} else
{var m20972 = cljs.core._first(args__$13);var args__$14 = cljs.core._rest(args__$13);if((argc === (13)))
{if(f.cljs$core$IFn$_invoke$arity$13)
{return f.cljs$core$IFn$_invoke$arity$13(a20960,b20961,c20962,d20963,e20964,f20965,g20966,h20967,i20968,j20969,k20970,l20971,m20972);
} else
{var G__26691 = a20960;var G__26692 = b20961;var G__26693 = c20962;var G__26694 = d20963;var G__26695 = e20964;var G__26696 = f20965;var G__26697 = g20966;var G__26698 = h20967;var G__26699 = i20968;var G__26700 = j20969;var G__26701 = k20970;var G__26702 = l20971;var G__26703 = m20972;return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__26691,G__26692,G__26693,G__26694,G__26695,G__26696,G__26697,G__26698,G__26699,G__26700,G__26701,G__26702,G__26703) : f.call(null,G__26691,G__26692,G__26693,G__26694,G__26695,G__26696,G__26697,G__26698,G__26699,G__26700,G__26701,G__26702,G__26703));
}
} else
{var n20973 = cljs.core._first(args__$14);var args__$15 = cljs.core._rest(args__$14);if((argc === (14)))
{if(f.cljs$core$IFn$_invoke$arity$14)
{return f.cljs$core$IFn$_invoke$arity$14(a20960,b20961,c20962,d20963,e20964,f20965,g20966,h20967,i20968,j20969,k20970,l20971,m20972,n20973);
} else
{var G__26704 = a20960;var G__26705 = b20961;var G__26706 = c20962;var G__26707 = d20963;var G__26708 = e20964;var G__26709 = f20965;var G__26710 = g20966;var G__26711 = h20967;var G__26712 = i20968;var G__26713 = j20969;var G__26714 = k20970;var G__26715 = l20971;var G__26716 = m20972;var G__26717 = n20973;return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__26704,G__26705,G__26706,G__26707,G__26708,G__26709,G__26710,G__26711,G__26712,G__26713,G__26714,G__26715,G__26716,G__26717) : f.call(null,G__26704,G__26705,G__26706,G__26707,G__26708,G__26709,G__26710,G__26711,G__26712,G__26713,G__26714,G__26715,G__26716,G__26717));
}
} else
{var o20974 = cljs.core._first(args__$15);var args__$16 = cljs.core._rest(args__$15);if((argc === (15)))
{if(f.cljs$core$IFn$_invoke$arity$15)
{return f.cljs$core$IFn$_invoke$arity$15(a20960,b20961,c20962,d20963,e20964,f20965,g20966,h20967,i20968,j20969,k20970,l20971,m20972,n20973,o20974);
} else
{var G__26718 = a20960;var G__26719 = b20961;var G__26720 = c20962;var G__26721 = d20963;var G__26722 = e20964;var G__26723 = f20965;var G__26724 = g20966;var G__26725 = h20967;var G__26726 = i20968;var G__26727 = j20969;var G__26728 = k20970;var G__26729 = l20971;var G__26730 = m20972;var G__26731 = n20973;var G__26732 = o20974;return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__26718,G__26719,G__26720,G__26721,G__26722,G__26723,G__26724,G__26725,G__26726,G__26727,G__26728,G__26729,G__26730,G__26731,G__26732) : f.call(null,G__26718,G__26719,G__26720,G__26721,G__26722,G__26723,G__26724,G__26725,G__26726,G__26727,G__26728,G__26729,G__26730,G__26731,G__26732));
}
} else
{var p20975 = cljs.core._first(args__$16);var args__$17 = cljs.core._rest(args__$16);if((argc === (16)))
{if(f.cljs$core$IFn$_invoke$arity$16)
{return f.cljs$core$IFn$_invoke$arity$16(a20960,b20961,c20962,d20963,e20964,f20965,g20966,h20967,i20968,j20969,k20970,l20971,m20972,n20973,o20974,p20975);
} else
{var G__26733 = a20960;var G__26734 = b20961;var G__26735 = c20962;var G__26736 = d20963;var G__26737 = e20964;var G__26738 = f20965;var G__26739 = g20966;var G__26740 = h20967;var G__26741 = i20968;var G__26742 = j20969;var G__26743 = k20970;var G__26744 = l20971;var G__26745 = m20972;var G__26746 = n20973;var G__26747 = o20974;var G__26748 = p20975;return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__26733,G__26734,G__26735,G__26736,G__26737,G__26738,G__26739,G__26740,G__26741,G__26742,G__26743,G__26744,G__26745,G__26746,G__26747,G__26748) : f.call(null,G__26733,G__26734,G__26735,G__26736,G__26737,G__26738,G__26739,G__26740,G__26741,G__26742,G__26743,G__26744,G__26745,G__26746,G__26747,G__26748));
}
} else
{var q20976 = cljs.core._first(args__$17);var args__$18 = cljs.core._rest(args__$17);if((argc === (17)))
{if(f.cljs$core$IFn$_invoke$arity$17)
{return f.cljs$core$IFn$_invoke$arity$17(a20960,b20961,c20962,d20963,e20964,f20965,g20966,h20967,i20968,j20969,k20970,l20971,m20972,n20973,o20974,p20975,q20976);
} else
{var G__26749 = a20960;var G__26750 = b20961;var G__26751 = c20962;var G__26752 = d20963;var G__26753 = e20964;var G__26754 = f20965;var G__26755 = g20966;var G__26756 = h20967;var G__26757 = i20968;var G__26758 = j20969;var G__26759 = k20970;var G__26760 = l20971;var G__26761 = m20972;var G__26762 = n20973;var G__26763 = o20974;var G__26764 = p20975;var G__26765 = q20976;return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__26749,G__26750,G__26751,G__26752,G__26753,G__26754,G__26755,G__26756,G__26757,G__26758,G__26759,G__26760,G__26761,G__26762,G__26763,G__26764,G__26765) : f.call(null,G__26749,G__26750,G__26751,G__26752,G__26753,G__26754,G__26755,G__26756,G__26757,G__26758,G__26759,G__26760,G__26761,G__26762,G__26763,G__26764,G__26765));
}
} else
{var r20977 = cljs.core._first(args__$18);var args__$19 = cljs.core._rest(args__$18);if((argc === (18)))
{if(f.cljs$core$IFn$_invoke$arity$18)
{return f.cljs$core$IFn$_invoke$arity$18(a20960,b20961,c20962,d20963,e20964,f20965,g20966,h20967,i20968,j20969,k20970,l20971,m20972,n20973,o20974,p20975,q20976,r20977);
} else
{var G__26766 = a20960;var G__26767 = b20961;var G__26768 = c20962;var G__26769 = d20963;var G__26770 = e20964;var G__26771 = f20965;var G__26772 = g20966;var G__26773 = h20967;var G__26774 = i20968;var G__26775 = j20969;var G__26776 = k20970;var G__26777 = l20971;var G__26778 = m20972;var G__26779 = n20973;var G__26780 = o20974;var G__26781 = p20975;var G__26782 = q20976;var G__26783 = r20977;return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__26766,G__26767,G__26768,G__26769,G__26770,G__26771,G__26772,G__26773,G__26774,G__26775,G__26776,G__26777,G__26778,G__26779,G__26780,G__26781,G__26782,G__26783) : f.call(null,G__26766,G__26767,G__26768,G__26769,G__26770,G__26771,G__26772,G__26773,G__26774,G__26775,G__26776,G__26777,G__26778,G__26779,G__26780,G__26781,G__26782,G__26783));
}
} else
{var s20978 = cljs.core._first(args__$19);var args__$20 = cljs.core._rest(args__$19);if((argc === (19)))
{if(f.cljs$core$IFn$_invoke$arity$19)
{return f.cljs$core$IFn$_invoke$arity$19(a20960,b20961,c20962,d20963,e20964,f20965,g20966,h20967,i20968,j20969,k20970,l20971,m20972,n20973,o20974,p20975,q20976,r20977,s20978);
} else
{var G__26784 = a20960;var G__26785 = b20961;var G__26786 = c20962;var G__26787 = d20963;var G__26788 = e20964;var G__26789 = f20965;var G__26790 = g20966;var G__26791 = h20967;var G__26792 = i20968;var G__26793 = j20969;var G__26794 = k20970;var G__26795 = l20971;var G__26796 = m20972;var G__26797 = n20973;var G__26798 = o20974;var G__26799 = p20975;var G__26800 = q20976;var G__26801 = r20977;var G__26802 = s20978;return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__26784,G__26785,G__26786,G__26787,G__26788,G__26789,G__26790,G__26791,G__26792,G__26793,G__26794,G__26795,G__26796,G__26797,G__26798,G__26799,G__26800,G__26801,G__26802) : f.call(null,G__26784,G__26785,G__26786,G__26787,G__26788,G__26789,G__26790,G__26791,G__26792,G__26793,G__26794,G__26795,G__26796,G__26797,G__26798,G__26799,G__26800,G__26801,G__26802));
}
} else
{var t20979 = cljs.core._first(args__$20);var args__$21 = cljs.core._rest(args__$20);if((argc === (20)))
{if(f.cljs$core$IFn$_invoke$arity$20)
{return f.cljs$core$IFn$_invoke$arity$20(a20960,b20961,c20962,d20963,e20964,f20965,g20966,h20967,i20968,j20969,k20970,l20971,m20972,n20973,o20974,p20975,q20976,r20977,s20978,t20979);
} else
{var G__26803 = a20960;var G__26804 = b20961;var G__26805 = c20962;var G__26806 = d20963;var G__26807 = e20964;var G__26808 = f20965;var G__26809 = g20966;var G__26810 = h20967;var G__26811 = i20968;var G__26812 = j20969;var G__26813 = k20970;var G__26814 = l20971;var G__26815 = m20972;var G__26816 = n20973;var G__26817 = o20974;var G__26818 = p20975;var G__26819 = q20976;var G__26820 = r20977;var G__26821 = s20978;var G__26822 = t20979;return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(G__26803,G__26804,G__26805,G__26806,G__26807,G__26808,G__26809,G__26810,G__26811,G__26812,G__26813,G__26814,G__26815,G__26816,G__26817,G__26818,G__26819,G__26820,G__26821,G__26822) : f.call(null,G__26803,G__26804,G__26805,G__26806,G__26807,G__26808,G__26809,G__26810,G__26811,G__26812,G__26813,G__26814,G__26815,G__26816,G__26817,G__26818,G__26819,G__26820,G__26821,G__26822));
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
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
}
}
}
}
}
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(args,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array(args));
}
});
var apply__3 = (function (f,x,args){var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(x,args);var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__4 = (function (f,x,y,args){var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,args);var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__5 = (function (f,x,y,z,args){var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(x,y,z,args);var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__6 = (function() { 
var G__26823__delegate = function (f,a,b,c,d,args){var arglist = cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(args)))));var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array(arglist));
}
};
var G__26823 = function (f,a,b,c,d,var_args){
var args = null;if (arguments.length > 5) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__26823__delegate.call(this,f,a,b,c,d,args);};
G__26823.cljs$lang$maxFixedArity = 5;
G__26823.cljs$lang$applyTo = (function (arglist__26824){
var f = cljs.core.first(arglist__26824);
arglist__26824 = cljs.core.next(arglist__26824);
var a = cljs.core.first(arglist__26824);
arglist__26824 = cljs.core.next(arglist__26824);
var b = cljs.core.first(arglist__26824);
arglist__26824 = cljs.core.next(arglist__26824);
var c = cljs.core.first(arglist__26824);
arglist__26824 = cljs.core.next(arglist__26824);
var d = cljs.core.first(arglist__26824);
var args = cljs.core.rest(arglist__26824);
return G__26823__delegate(f,a,b,c,d,args);
});
G__26823.cljs$core$IFn$_invoke$arity$variadic = G__26823__delegate;
return G__26823;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$core$IFn$_invoke$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$core$IFn$_invoke$arity$2 = apply__2;
apply.cljs$core$IFn$_invoke$arity$3 = apply__3;
apply.cljs$core$IFn$_invoke$arity$4 = apply__4;
apply.cljs$core$IFn$_invoke$arity$5 = apply__5;
apply.cljs$core$IFn$_invoke$arity$variadic = apply__6.cljs$core$IFn$_invoke$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() {
var vary_meta = null;
var vary_meta__2 = (function (obj,f){return cljs.core.with_meta(obj,(function (){var G__26840 = cljs.core.meta(obj);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26840) : f.call(null,G__26840));
})());
});
var vary_meta__3 = (function (obj,f,a){return cljs.core.with_meta(obj,(function (){var G__26841 = cljs.core.meta(obj);var G__26842 = a;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26841,G__26842) : f.call(null,G__26841,G__26842));
})());
});
var vary_meta__4 = (function (obj,f,a,b){return cljs.core.with_meta(obj,(function (){var G__26843 = cljs.core.meta(obj);var G__26844 = a;var G__26845 = b;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__26843,G__26844,G__26845) : f.call(null,G__26843,G__26844,G__26845));
})());
});
var vary_meta__5 = (function (obj,f,a,b,c){return cljs.core.with_meta(obj,(function (){var G__26846 = cljs.core.meta(obj);var G__26847 = a;var G__26848 = b;var G__26849 = c;return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__26846,G__26847,G__26848,G__26849) : f.call(null,G__26846,G__26847,G__26848,G__26849));
})());
});
var vary_meta__6 = (function (obj,f,a,b,c,d){return cljs.core.with_meta(obj,(function (){var G__26850 = cljs.core.meta(obj);var G__26851 = a;var G__26852 = b;var G__26853 = c;var G__26854 = d;return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__26850,G__26851,G__26852,G__26853,G__26854) : f.call(null,G__26850,G__26851,G__26852,G__26853,G__26854));
})());
});
var vary_meta__7 = (function() { 
var G__26855__delegate = function (obj,f,a,b,c,d,args){return cljs.core.with_meta(obj,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.meta(obj),a,b,c,cljs.core.array_seq([d,args], 0)));
};
var G__26855 = function (obj,f,a,b,c,d,var_args){
var args = null;if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return G__26855__delegate.call(this,obj,f,a,b,c,d,args);};
G__26855.cljs$lang$maxFixedArity = 6;
G__26855.cljs$lang$applyTo = (function (arglist__26856){
var obj = cljs.core.first(arglist__26856);
arglist__26856 = cljs.core.next(arglist__26856);
var f = cljs.core.first(arglist__26856);
arglist__26856 = cljs.core.next(arglist__26856);
var a = cljs.core.first(arglist__26856);
arglist__26856 = cljs.core.next(arglist__26856);
var b = cljs.core.first(arglist__26856);
arglist__26856 = cljs.core.next(arglist__26856);
var c = cljs.core.first(arglist__26856);
arglist__26856 = cljs.core.next(arglist__26856);
var d = cljs.core.first(arglist__26856);
var args = cljs.core.rest(arglist__26856);
return G__26855__delegate(obj,f,a,b,c,d,args);
});
G__26855.cljs$core$IFn$_invoke$arity$variadic = G__26855__delegate;
return G__26855;
})()
;
vary_meta = function(obj,f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return vary_meta__2.call(this,obj,f);
case 3:
return vary_meta__3.call(this,obj,f,a);
case 4:
return vary_meta__4.call(this,obj,f,a,b);
case 5:
return vary_meta__5.call(this,obj,f,a,b,c);
case 6:
return vary_meta__6.call(this,obj,f,a,b,c,d);
default:
return vary_meta__7.cljs$core$IFn$_invoke$arity$variadic(obj,f,a,b,c,d, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vary_meta.cljs$lang$maxFixedArity = 6;
vary_meta.cljs$lang$applyTo = vary_meta__7.cljs$lang$applyTo;
vary_meta.cljs$core$IFn$_invoke$arity$2 = vary_meta__2;
vary_meta.cljs$core$IFn$_invoke$arity$3 = vary_meta__3;
vary_meta.cljs$core$IFn$_invoke$arity$4 = vary_meta__4;
vary_meta.cljs$core$IFn$_invoke$arity$5 = vary_meta__5;
vary_meta.cljs$core$IFn$_invoke$arity$6 = vary_meta__6;
vary_meta.cljs$core$IFn$_invoke$arity$variadic = vary_meta__7.cljs$core$IFn$_invoke$arity$variadic;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){return false;
});
var not_EQ___2 = (function (x,y){return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});
var not_EQ___3 = (function() { 
var G__26857__delegate = function (x,y,more){return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._EQ_,x,y,more));
};
var G__26857 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26857__delegate.call(this,x,y,more);};
G__26857.cljs$lang$maxFixedArity = 2;
G__26857.cljs$lang$applyTo = (function (arglist__26858){
var x = cljs.core.first(arglist__26858);
arglist__26858 = cljs.core.next(arglist__26858);
var y = cljs.core.first(arglist__26858);
var more = cljs.core.rest(arglist__26858);
return G__26857__delegate(x,y,more);
});
G__26857.cljs$core$IFn$_invoke$arity$variadic = G__26857__delegate;
return G__26857;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$core$IFn$_invoke$arity$1 = not_EQ___1;
not_EQ_.cljs$core$IFn$_invoke$arity$2 = not_EQ___2;
not_EQ_.cljs$core$IFn$_invoke$arity$variadic = not_EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){if(cljs.core.seq(coll))
{return coll;
} else
{return null;
}
});
cljs.core.nil_iter = (function nil_iter(){if(typeof cljs.core.t26862 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.t26862 = (function (nil_iter,meta26863){
this.nil_iter = nil_iter;
this.meta26863 = meta26863;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.t26862.cljs$lang$type = true;
cljs.core.t26862.cljs$lang$ctorStr = "cljs.core/t26862";
cljs.core.t26862.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/t26862");
});
cljs.core.t26862.prototype.hasNext = (function (){var self__ = this;
var _ = this;return false;
});
cljs.core.t26862.prototype.next = (function (){var self__ = this;
var _ = this;return (new Error("No such element"));
});
cljs.core.t26862.prototype.remove = (function (){var self__ = this;
var _ = this;return (new Error("Unsupported operation"));
});
cljs.core.t26862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26864){var self__ = this;
var _26864__$1 = this;return self__.meta26863;
});
cljs.core.t26862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26864,meta26863__$1){var self__ = this;
var _26864__$1 = this;return (new cljs.core.t26862(self__.nil_iter,meta26863__$1));
});
cljs.core.__GT_t26862 = (function __GT_t26862(nil_iter__$1,meta26863){return (new cljs.core.t26862(nil_iter__$1,meta26863));
});
}
return (new cljs.core.t26862(nil_iter,null));
});

/**
* @constructor
*/
cljs.core.StringIter = (function (s,i){
this.s = s;
this.i = i;
})
cljs.core.StringIter.cljs$lang$type = true;
cljs.core.StringIter.cljs$lang$ctorStr = "cljs.core/StringIter";
cljs.core.StringIter.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/StringIter");
});
cljs.core.StringIter.prototype.hasNext = (function (){var self__ = this;
var _ = this;return (self__.i < self__.s.length);
});
cljs.core.StringIter.prototype.next = (function (){var self__ = this;
var _ = this;var ret = self__.s.charAt(self__.i);self__.i = (self__.i + (1));
return ret;
});
cljs.core.StringIter.prototype.remove = (function (){var self__ = this;
var _ = this;return (new Error("Unsupported operation"));
});
cljs.core.__GT_StringIter = (function __GT_StringIter(s,i){return (new cljs.core.StringIter(s,i));
});
cljs.core.string_iter = (function string_iter(x){return (new cljs.core.StringIter(x,(0)));
});

/**
* @constructor
*/
cljs.core.ArrayIter = (function (arr,i){
this.arr = arr;
this.i = i;
})
cljs.core.ArrayIter.cljs$lang$type = true;
cljs.core.ArrayIter.cljs$lang$ctorStr = "cljs.core/ArrayIter";
cljs.core.ArrayIter.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/ArrayIter");
});
cljs.core.ArrayIter.prototype.hasNext = (function (){var self__ = this;
var _ = this;return (self__.i < self__.arr.length);
});
cljs.core.ArrayIter.prototype.next = (function (){var self__ = this;
var _ = this;var ret = (self__.arr[self__.i]);self__.i = (self__.i + (1));
return ret;
});
cljs.core.ArrayIter.prototype.remove = (function (){var self__ = this;
var _ = this;return (new Error("Unsupported operation"));
});
cljs.core.__GT_ArrayIter = (function __GT_ArrayIter(arr,i){return (new cljs.core.ArrayIter(arr,i));
});
cljs.core.array_iter = (function array_iter(x){return (new cljs.core.ArrayIter(x,(0)));
});
cljs.core.INIT = {};
cljs.core.START = {};

/**
* @constructor
*/
cljs.core.SeqIter = (function (_seq,_next){
this._seq = _seq;
this._next = _next;
})
cljs.core.SeqIter.cljs$lang$type = true;
cljs.core.SeqIter.cljs$lang$ctorStr = "cljs.core/SeqIter";
cljs.core.SeqIter.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/SeqIter");
});
cljs.core.SeqIter.prototype.hasNext = (function (){var self__ = this;
var _ = this;if((self__._seq === cljs.core.INIT))
{self__._seq = cljs.core.START;
self__._next = cljs.core.seq(self__._next);
} else
{if((self__._seq === self__._next))
{self__._next = cljs.core.next(self__._seq);
} else
{}
}
return !((self__._next == null));
});
cljs.core.SeqIter.prototype.next = (function (){var self__ = this;
var this$ = this;if(cljs.core.not(this$.hasNext()))
{throw (new Error("No such element"));
} else
{self__._seq = self__._next;
return cljs.core.first(self__._next);
}
});
cljs.core.SeqIter.prototype.remove = (function (){var self__ = this;
var _ = this;return (new Error("Unsupported operation"));
});
cljs.core.__GT_SeqIter = (function __GT_SeqIter(_seq,_next){return (new cljs.core.SeqIter(_seq,_next));
});
cljs.core.seq_iter = (function seq_iter(coll){return (new cljs.core.SeqIter(cljs.core.INIT,coll));
});
cljs.core.iter = (function iter(coll){if((coll == null))
{return cljs.core.nil_iter();
} else
{if(typeof coll === 'string')
{return cljs.core.string_iter(coll);
} else
{if(coll instanceof Array)
{return cljs.core.array_iter(coll);
} else
{return cljs.core.seq_iter(coll);

}
}
}
});
cljs.core.lazy_transformer = (function lazy_transformer(stepper){return (new cljs.core.LazyTransformer(stepper,null,null,null));
});

/**
* @constructor
*/
cljs.core.Stepper = (function (xform,iter){
this.xform = xform;
this.iter = iter;
})
cljs.core.Stepper.cljs$lang$type = true;
cljs.core.Stepper.cljs$lang$ctorStr = "cljs.core/Stepper";
cljs.core.Stepper.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/Stepper");
});
cljs.core.Stepper.prototype.step = (function (lt){var self__ = this;
var this$ = this;while(true){
if(cljs.core.truth_((function (){var and__19255__auto__ = !((lt.stepper == null));if(and__19255__auto__)
{return self__.iter.hasNext();
} else
{return and__19255__auto__;
}
})()))
{if(cljs.core.reduced_QMARK_((function (){var G__26865 = lt;var G__26866 = self__.iter.next();return (self__.xform.cljs$core$IFn$_invoke$arity$2 ? self__.xform.cljs$core$IFn$_invoke$arity$2(G__26865,G__26866) : self__.xform.call(null,G__26865,G__26866));
})()))
{if((lt.rest == null))
{} else
{lt.rest.stepper = null;
}
} else
{{
continue;
}
}
} else
{}
break;
}
if((lt.stepper == null))
{return null;
} else
{var G__26867 = lt;return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__26867) : self__.xform.call(null,G__26867));
}
});
cljs.core.__GT_Stepper = (function __GT_Stepper(xform,iter){return (new cljs.core.Stepper(xform,iter));
});
cljs.core.stepper = (function stepper(xform,iter){var stepfn = (function() {
var stepfn = null;
var stepfn__1 = (function (result){var lt = ((cljs.core.reduced_QMARK_(result))?cljs.core.deref(result):result);lt.stepper = null;
return result;
});
var stepfn__2 = (function (result,input){var lt = result;lt.first = input;
lt.rest = cljs.core.lazy_transformer(lt.stepper);
lt.stepper = null;
return lt.rest;
});
stepfn = function(result,input){
switch(arguments.length){
case 1:
return stepfn__1.call(this,result);
case 2:
return stepfn__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stepfn.cljs$core$IFn$_invoke$arity$1 = stepfn__1;
stepfn.cljs$core$IFn$_invoke$arity$2 = stepfn__2;
return stepfn;
})()
;
return (new cljs.core.Stepper((function (){var G__26869 = stepfn;return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__26869) : xform.call(null,G__26869));
})(),iter));
});

/**
* @constructor
*/
cljs.core.MultiStepper = (function (xform,iters,nexts){
this.xform = xform;
this.iters = iters;
this.nexts = nexts;
})
cljs.core.MultiStepper.cljs$lang$type = true;
cljs.core.MultiStepper.cljs$lang$ctorStr = "cljs.core/MultiStepper";
cljs.core.MultiStepper.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/MultiStepper");
});
cljs.core.MultiStepper.prototype.hasNext = (function (){var self__ = this;
var _ = this;var iters__$1 = cljs.core.seq(self__.iters);while(true){
if(!((iters__$1 == null)))
{var iter = cljs.core.first(iters__$1);if(cljs.core.not(iter.hasNext()))
{return false;
} else
{{
var G__26871 = cljs.core.next(iters__$1);
iters__$1 = G__26871;
continue;
}
}
} else
{return true;
}
break;
}
});
cljs.core.MultiStepper.prototype.next = (function (){var self__ = this;
var _ = this;var n__20882__auto___26872 = self__.iters.length;var i_26873 = (0);while(true){
if((i_26873 < n__20882__auto___26872))
{(self__.nexts[i_26873] = (self__.iters[i_26873]).next());
{
var G__26874 = (i_26873 + (1));
i_26873 = G__26874;
continue;
}
} else
{}
break;
}
return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(self__.nexts,(0));
});
cljs.core.MultiStepper.prototype.step = (function (lt){var self__ = this;
var this$ = this;while(true){
if(cljs.core.truth_((function (){var and__19255__auto__ = !((lt.stepper == null));if(and__19255__auto__)
{return this$.hasNext();
} else
{return and__19255__auto__;
}
})()))
{if(cljs.core.reduced_QMARK_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.xform,cljs.core.cons(lt,this$.next()))))
{if((lt.rest == null))
{} else
{lt.rest.stepper = null;
}
} else
{{
continue;
}
}
} else
{}
break;
}
if((lt.stepper == null))
{return null;
} else
{var G__26870 = lt;return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__26870) : self__.xform.call(null,G__26870));
}
});
cljs.core.__GT_MultiStepper = (function __GT_MultiStepper(xform,iters,nexts){return (new cljs.core.MultiStepper(xform,iters,nexts));
});
cljs.core.multi_stepper = (function() {
var multi_stepper = null;
var multi_stepper__2 = (function (xform,iters){return multi_stepper.cljs$core$IFn$_invoke$arity$3(xform,iters,(new Array(iters.length)));
});
var multi_stepper__3 = (function (xform,iters,nexts){var stepfn = (function() {
var stepfn = null;
var stepfn__1 = (function (result){var lt = ((cljs.core.reduced_QMARK_(result))?cljs.core.deref(result):result);lt.stepper = null;
return lt;
});
var stepfn__2 = (function (result,input){var lt = result;lt.first = input;
lt.rest = cljs.core.lazy_transformer(lt.stepper);
lt.stepper = null;
return lt.rest;
});
stepfn = function(result,input){
switch(arguments.length){
case 1:
return stepfn__1.call(this,result);
case 2:
return stepfn__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stepfn.cljs$core$IFn$_invoke$arity$1 = stepfn__1;
stepfn.cljs$core$IFn$_invoke$arity$2 = stepfn__2;
return stepfn;
})()
;
return (new cljs.core.MultiStepper((function (){var G__26879 = stepfn;return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__26879) : xform.call(null,G__26879));
})(),iters,nexts));
});
multi_stepper = function(xform,iters,nexts){
switch(arguments.length){
case 2:
return multi_stepper__2.call(this,xform,iters);
case 3:
return multi_stepper__3.call(this,xform,iters,nexts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
multi_stepper.cljs$core$IFn$_invoke$arity$2 = multi_stepper__2;
multi_stepper.cljs$core$IFn$_invoke$arity$3 = multi_stepper__3;
return multi_stepper;
})()
;

/**
* @constructor
*/
cljs.core.LazyTransformer = (function (stepper,first,rest,meta){
this.stepper = stepper;
this.first = first;
this.rest = rest;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31719628;
})
cljs.core.LazyTransformer.cljs$lang$type = true;
cljs.core.LazyTransformer.cljs$lang$ctorStr = "cljs.core/LazyTransformer";
cljs.core.LazyTransformer.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/LazyTransformer");
});
cljs.core.LazyTransformer.prototype.cljs$core$INext$_next$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.stepper == null))
{} else
{cljs.core._seq(this$__$1);
}
if((self__.rest == null))
{return null;
} else
{return cljs.core._seq(self__.rest);
}
});
cljs.core.LazyTransformer.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.stepper == null))
{} else
{cljs.core._seq(this$__$1);
}
if((self__.rest == null))
{return null;
} else
{return self__.first;
}
});
cljs.core.LazyTransformer.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.stepper == null))
{} else
{cljs.core._seq(this$__$1);
}
if((self__.rest == null))
{return cljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljs.core.LazyTransformer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.stepper == null))
{} else
{self__.stepper.step(this$__$1);
}
if((self__.rest == null))
{return null;
} else
{return this$__$1;
}
});
cljs.core.LazyTransformer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.hash_ordered_coll(this$__$1);
});
cljs.core.LazyTransformer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var self__ = this;
var this$__$1 = this;var s = cljs.core._seq(this$__$1);if(!((s == null)))
{return cljs.core.equiv_sequential(this$__$1,other);
} else
{return (cljs.core.sequential_QMARK_(other)) && ((cljs.core.seq(other) == null));
}
});
cljs.core.LazyTransformer.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.LazyTransformer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return cljs.core.cons(o,cljs.core._seq(this$__$1));
});
cljs.core.LazyTransformer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){var self__ = this;
var this$__$1 = this;return (new cljs.core.LazyTransformer(self__.stepper,self__.first,self__.rest,new_meta));
});
cljs.core.__GT_LazyTransformer = (function __GT_LazyTransformer(stepper,first,rest,meta){return (new cljs.core.LazyTransformer(stepper,first,rest,meta));
});
cljs.core.LazyTransformer.create = (function (xform,coll){return (new cljs.core.LazyTransformer(cljs.core.stepper(xform,cljs.core.iter(coll)),null,null,null));
});
cljs.core.LazyTransformer.createMulti = (function (xform,colls){var iters = [];var seq__26880_26884 = cljs.core.seq(colls);var chunk__26881_26885 = null;var count__26882_26886 = (0);var i__26883_26887 = (0);while(true){
if((i__26883_26887 < count__26882_26886))
{var coll_26888 = chunk__26881_26885.cljs$core$IIndexed$_nth$arity$2(null,i__26883_26887);iters.push(cljs.core.iter(coll_26888));
{
var G__26889 = seq__26880_26884;
var G__26890 = chunk__26881_26885;
var G__26891 = count__26882_26886;
var G__26892 = (i__26883_26887 + (1));
seq__26880_26884 = G__26889;
chunk__26881_26885 = G__26890;
count__26882_26886 = G__26891;
i__26883_26887 = G__26892;
continue;
}
} else
{var temp__4126__auto___26893 = cljs.core.seq(seq__26880_26884);if(temp__4126__auto___26893)
{var seq__26880_26894__$1 = temp__4126__auto___26893;if(cljs.core.chunked_seq_QMARK_(seq__26880_26894__$1))
{var c__20699__auto___26895 = cljs.core.chunk_first(seq__26880_26894__$1);{
var G__26896 = cljs.core.chunk_rest(seq__26880_26894__$1);
var G__26897 = c__20699__auto___26895;
var G__26898 = cljs.core.count(c__20699__auto___26895);
var G__26899 = (0);
seq__26880_26884 = G__26896;
chunk__26881_26885 = G__26897;
count__26882_26886 = G__26898;
i__26883_26887 = G__26899;
continue;
}
} else
{var coll_26900 = cljs.core.first(seq__26880_26894__$1);iters.push(cljs.core.iter(coll_26900));
{
var G__26901 = cljs.core.next(seq__26880_26894__$1);
var G__26902 = null;
var G__26903 = (0);
var G__26904 = (0);
seq__26880_26884 = G__26901;
chunk__26881_26885 = G__26902;
count__26882_26886 = G__26903;
i__26883_26887 = G__26904;
continue;
}
}
} else
{}
}
break;
}
return (new cljs.core.LazyTransformer(cljs.core.multi_stepper.cljs$core$IFn$_invoke$arity$3(xform,iters,(new Array(iters.length))),null,null,null));
});
/**
* Coerces coll to a (possibly empty) sequence, if it is not already
* one. Will not force a lazy seq. (sequence nil) yields (), When a
* transducer is supplied, returns a lazy sequence of applications of
* the transform to the items in coll(s), i.e. to the set of first
* items of each coll, followed by the set of second
* items in each coll, until any one of the colls is exhausted.  Any
* remaining items in other colls are ignored. The transform should accept
* number-of-colls arguments
* @param {...*} var_args
*/
cljs.core.sequence = (function() {
var sequence = null;
var sequence__1 = (function (coll){if(cljs.core.seq_QMARK_(coll))
{return coll;
} else
{var or__19267__auto__ = cljs.core.seq(coll);if(or__19267__auto__)
{return or__19267__auto__;
} else
{return cljs.core.List.EMPTY;
}
}
});
var sequence__2 = (function (xform,coll){return cljs.core.LazyTransformer.create(xform,coll);
});
var sequence__3 = (function() { 
var G__26905__delegate = function (xform,coll,colls){return cljs.core.LazyTransformer.createMulti(xform,cljs.core.to_array(cljs.core.cons(coll,colls)));
};
var G__26905 = function (xform,coll,var_args){
var colls = null;if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26905__delegate.call(this,xform,coll,colls);};
G__26905.cljs$lang$maxFixedArity = 2;
G__26905.cljs$lang$applyTo = (function (arglist__26906){
var xform = cljs.core.first(arglist__26906);
arglist__26906 = cljs.core.next(arglist__26906);
var coll = cljs.core.first(arglist__26906);
var colls = cljs.core.rest(arglist__26906);
return G__26905__delegate(xform,coll,colls);
});
G__26905.cljs$core$IFn$_invoke$arity$variadic = G__26905__delegate;
return G__26905;
})()
;
sequence = function(xform,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return sequence__1.call(this,xform);
case 2:
return sequence__2.call(this,xform,coll);
default:
return sequence__3.cljs$core$IFn$_invoke$arity$variadic(xform,coll, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sequence.cljs$lang$maxFixedArity = 2;
sequence.cljs$lang$applyTo = sequence__3.cljs$lang$applyTo;
sequence.cljs$core$IFn$_invoke$arity$1 = sequence__1;
sequence.cljs$core$IFn$_invoke$arity$2 = sequence__2;
sequence.cljs$core$IFn$_invoke$arity$variadic = sequence__3.cljs$core$IFn$_invoke$arity$variadic;
return sequence;
})()
;
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){while(true){
if((cljs.core.seq(coll) == null))
{return true;
} else
{if(cljs.core.truth_((function (){var G__26908 = cljs.core.first(coll);return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__26908) : pred.call(null,G__26908));
})()))
{{
var G__26909 = pred;
var G__26910 = cljs.core.next(coll);
pred = G__26909;
coll = G__26910;
continue;
}
} else
{return false;

}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){return !(cljs.core.every_QMARK_(pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){while(true){
if(cljs.core.seq(coll))
{var or__19267__auto__ = (function (){var G__26914 = cljs.core.first(coll);return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__26914) : pred.call(null,G__26914));
})();if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{{
var G__26915 = pred;
var G__26916 = cljs.core.next(coll);
pred = G__26915;
coll = G__26916;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){return cljs.core.not(cljs.core.some(pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){if(cljs.core.integer_QMARK_(n))
{return ((n & (1)) === (0));
} else
{throw (new Error(("Argument must be an integer: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n))));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){return !(cljs.core.even_QMARK_(n));
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){return (function() {
var G__26923 = null;
var G__26923__0 = (function (){return cljs.core.not((function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})());
});
var G__26923__1 = (function (x){return cljs.core.not((function (){var G__26920 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26920) : f.call(null,G__26920));
})());
});
var G__26923__2 = (function (x,y){return cljs.core.not((function (){var G__26921 = x;var G__26922 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26921,G__26922) : f.call(null,G__26921,G__26922));
})());
});
var G__26923__3 = (function() { 
var G__26924__delegate = function (x,y,zs){return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,x,y,zs));
};
var G__26924 = function (x,y,var_args){
var zs = null;if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26924__delegate.call(this,x,y,zs);};
G__26924.cljs$lang$maxFixedArity = 2;
G__26924.cljs$lang$applyTo = (function (arglist__26925){
var x = cljs.core.first(arglist__26925);
arglist__26925 = cljs.core.next(arglist__26925);
var y = cljs.core.first(arglist__26925);
var zs = cljs.core.rest(arglist__26925);
return G__26924__delegate(x,y,zs);
});
G__26924.cljs$core$IFn$_invoke$arity$variadic = G__26924__delegate;
return G__26924;
})()
;
G__26923 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__26923__0.call(this);
case 1:
return G__26923__1.call(this,x);
case 2:
return G__26923__2.call(this,x,y);
default:
return G__26923__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26923.cljs$lang$maxFixedArity = 2;
G__26923.cljs$lang$applyTo = G__26923__3.cljs$lang$applyTo;
G__26923.cljs$core$IFn$_invoke$arity$0 = G__26923__0;
G__26923.cljs$core$IFn$_invoke$arity$1 = G__26923__1;
G__26923.cljs$core$IFn$_invoke$arity$2 = G__26923__2;
G__26923.cljs$core$IFn$_invoke$arity$variadic = G__26923__3.cljs$core$IFn$_invoke$arity$variadic;
return G__26923;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){return (function() { 
var G__26926__delegate = function (args){return x;
};
var G__26926 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26926__delegate.call(this,args);};
G__26926.cljs$lang$maxFixedArity = 0;
G__26926.cljs$lang$applyTo = (function (arglist__26927){
var args = cljs.core.seq(arglist__26927);
return G__26926__delegate(args);
});
G__26926.cljs$core$IFn$_invoke$arity$variadic = G__26926__delegate;
return G__26926;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){return cljs.core.identity;
});
var comp__1 = (function (f){return f;
});
var comp__2 = (function (f,g){return (function() {
var G__26982 = null;
var G__26982__0 = (function (){var G__26955 = (function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26955) : f.call(null,G__26955));
});
var G__26982__1 = (function (x){var G__26956 = (function (){var G__26957 = x;return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__26957) : g.call(null,G__26957));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26956) : f.call(null,G__26956));
});
var G__26982__2 = (function (x,y){var G__26958 = (function (){var G__26959 = x;var G__26960 = y;return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__26959,G__26960) : g.call(null,G__26959,G__26960));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26958) : f.call(null,G__26958));
});
var G__26982__3 = (function (x,y,z){var G__26961 = (function (){var G__26962 = x;var G__26963 = y;var G__26964 = z;return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__26962,G__26963,G__26964) : g.call(null,G__26962,G__26963,G__26964));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26961) : f.call(null,G__26961));
});
var G__26982__4 = (function() { 
var G__26983__delegate = function (x,y,z,args){var G__26965 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26965) : f.call(null,G__26965));
};
var G__26983 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__26983__delegate.call(this,x,y,z,args);};
G__26983.cljs$lang$maxFixedArity = 3;
G__26983.cljs$lang$applyTo = (function (arglist__26984){
var x = cljs.core.first(arglist__26984);
arglist__26984 = cljs.core.next(arglist__26984);
var y = cljs.core.first(arglist__26984);
arglist__26984 = cljs.core.next(arglist__26984);
var z = cljs.core.first(arglist__26984);
var args = cljs.core.rest(arglist__26984);
return G__26983__delegate(x,y,z,args);
});
G__26983.cljs$core$IFn$_invoke$arity$variadic = G__26983__delegate;
return G__26983;
})()
;
G__26982 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__26982__0.call(this);
case 1:
return G__26982__1.call(this,x);
case 2:
return G__26982__2.call(this,x,y);
case 3:
return G__26982__3.call(this,x,y,z);
default:
return G__26982__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26982.cljs$lang$maxFixedArity = 3;
G__26982.cljs$lang$applyTo = G__26982__4.cljs$lang$applyTo;
G__26982.cljs$core$IFn$_invoke$arity$0 = G__26982__0;
G__26982.cljs$core$IFn$_invoke$arity$1 = G__26982__1;
G__26982.cljs$core$IFn$_invoke$arity$2 = G__26982__2;
G__26982.cljs$core$IFn$_invoke$arity$3 = G__26982__3;
G__26982.cljs$core$IFn$_invoke$arity$variadic = G__26982__4.cljs$core$IFn$_invoke$arity$variadic;
return G__26982;
})()
});
var comp__3 = (function (f,g,h){return (function() {
var G__26985 = null;
var G__26985__0 = (function (){var G__26966 = (function (){var G__26967 = (function (){return (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
})();return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__26967) : g.call(null,G__26967));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26966) : f.call(null,G__26966));
});
var G__26985__1 = (function (x){var G__26968 = (function (){var G__26969 = (function (){var G__26970 = x;return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__26970) : h.call(null,G__26970));
})();return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__26969) : g.call(null,G__26969));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26968) : f.call(null,G__26968));
});
var G__26985__2 = (function (x,y){var G__26971 = (function (){var G__26972 = (function (){var G__26973 = x;var G__26974 = y;return (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(G__26973,G__26974) : h.call(null,G__26973,G__26974));
})();return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__26972) : g.call(null,G__26972));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26971) : f.call(null,G__26971));
});
var G__26985__3 = (function (x,y,z){var G__26975 = (function (){var G__26976 = (function (){var G__26977 = x;var G__26978 = y;var G__26979 = z;return (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(G__26977,G__26978,G__26979) : h.call(null,G__26977,G__26978,G__26979));
})();return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__26976) : g.call(null,G__26976));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26975) : f.call(null,G__26975));
});
var G__26985__4 = (function() { 
var G__26986__delegate = function (x,y,z,args){var G__26980 = (function (){var G__26981 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args);return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__26981) : g.call(null,G__26981));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26980) : f.call(null,G__26980));
};
var G__26986 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__26986__delegate.call(this,x,y,z,args);};
G__26986.cljs$lang$maxFixedArity = 3;
G__26986.cljs$lang$applyTo = (function (arglist__26987){
var x = cljs.core.first(arglist__26987);
arglist__26987 = cljs.core.next(arglist__26987);
var y = cljs.core.first(arglist__26987);
arglist__26987 = cljs.core.next(arglist__26987);
var z = cljs.core.first(arglist__26987);
var args = cljs.core.rest(arglist__26987);
return G__26986__delegate(x,y,z,args);
});
G__26986.cljs$core$IFn$_invoke$arity$variadic = G__26986__delegate;
return G__26986;
})()
;
G__26985 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__26985__0.call(this);
case 1:
return G__26985__1.call(this,x);
case 2:
return G__26985__2.call(this,x,y);
case 3:
return G__26985__3.call(this,x,y,z);
default:
return G__26985__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26985.cljs$lang$maxFixedArity = 3;
G__26985.cljs$lang$applyTo = G__26985__4.cljs$lang$applyTo;
G__26985.cljs$core$IFn$_invoke$arity$0 = G__26985__0;
G__26985.cljs$core$IFn$_invoke$arity$1 = G__26985__1;
G__26985.cljs$core$IFn$_invoke$arity$2 = G__26985__2;
G__26985.cljs$core$IFn$_invoke$arity$3 = G__26985__3;
G__26985.cljs$core$IFn$_invoke$arity$variadic = G__26985__4.cljs$core$IFn$_invoke$arity$variadic;
return G__26985;
})()
});
var comp__4 = (function() { 
var G__26988__delegate = function (f1,f2,f3,fs){var fs__$1 = cljs.core.reverse(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f1,f2,f3,fs));return ((function (fs__$1){
return (function() { 
var G__26989__delegate = function (args){var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fs__$1),args);var fs__$2 = cljs.core.next(fs__$1);while(true){
if(fs__$2)
{{
var G__26990 = cljs.core.first(fs__$2).call(null,ret);
var G__26991 = cljs.core.next(fs__$2);
ret = G__26990;
fs__$2 = G__26991;
continue;
}
} else
{return ret;
}
break;
}
};
var G__26989 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26989__delegate.call(this,args);};
G__26989.cljs$lang$maxFixedArity = 0;
G__26989.cljs$lang$applyTo = (function (arglist__26992){
var args = cljs.core.seq(arglist__26992);
return G__26989__delegate(args);
});
G__26989.cljs$core$IFn$_invoke$arity$variadic = G__26989__delegate;
return G__26989;
})()
;
;})(fs__$1))
};
var G__26988 = function (f1,f2,f3,var_args){
var fs = null;if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__26988__delegate.call(this,f1,f2,f3,fs);};
G__26988.cljs$lang$maxFixedArity = 3;
G__26988.cljs$lang$applyTo = (function (arglist__26993){
var f1 = cljs.core.first(arglist__26993);
arglist__26993 = cljs.core.next(arglist__26993);
var f2 = cljs.core.first(arglist__26993);
arglist__26993 = cljs.core.next(arglist__26993);
var f3 = cljs.core.first(arglist__26993);
var fs = cljs.core.rest(arglist__26993);
return G__26988__delegate(f1,f2,f3,fs);
});
G__26988.cljs$core$IFn$_invoke$arity$variadic = G__26988__delegate;
return G__26988;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$core$IFn$_invoke$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$core$IFn$_invoke$arity$0 = comp__0;
comp.cljs$core$IFn$_invoke$arity$1 = comp__1;
comp.cljs$core$IFn$_invoke$arity$2 = comp__2;
comp.cljs$core$IFn$_invoke$arity$3 = comp__3;
comp.cljs$core$IFn$_invoke$arity$variadic = comp__4.cljs$core$IFn$_invoke$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__1 = (function (f){return f;
});
var partial__2 = (function (f,arg1){return (function() { 
var G__26994__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg1,args);
};
var G__26994 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26994__delegate.call(this,args);};
G__26994.cljs$lang$maxFixedArity = 0;
G__26994.cljs$lang$applyTo = (function (arglist__26995){
var args = cljs.core.seq(arglist__26995);
return G__26994__delegate(args);
});
G__26994.cljs$core$IFn$_invoke$arity$variadic = G__26994__delegate;
return G__26994;
})()
;
});
var partial__3 = (function (f,arg1,arg2){return (function() { 
var G__26996__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,arg1,arg2,args);
};
var G__26996 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26996__delegate.call(this,args);};
G__26996.cljs$lang$maxFixedArity = 0;
G__26996.cljs$lang$applyTo = (function (arglist__26997){
var args = cljs.core.seq(arglist__26997);
return G__26996__delegate(args);
});
G__26996.cljs$core$IFn$_invoke$arity$variadic = G__26996__delegate;
return G__26996;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){return (function() { 
var G__26998__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,arg1,arg2,arg3,args);
};
var G__26998 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26998__delegate.call(this,args);};
G__26998.cljs$lang$maxFixedArity = 0;
G__26998.cljs$lang$applyTo = (function (arglist__26999){
var args = cljs.core.seq(arglist__26999);
return G__26998__delegate(args);
});
G__26998.cljs$core$IFn$_invoke$arity$variadic = G__26998__delegate;
return G__26998;
})()
;
});
var partial__5 = (function() { 
var G__27000__delegate = function (f,arg1,arg2,arg3,more){return (function() { 
var G__27001__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,arg1,arg2,arg3,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(more,args));
};
var G__27001 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27001__delegate.call(this,args);};
G__27001.cljs$lang$maxFixedArity = 0;
G__27001.cljs$lang$applyTo = (function (arglist__27002){
var args = cljs.core.seq(arglist__27002);
return G__27001__delegate(args);
});
G__27001.cljs$core$IFn$_invoke$arity$variadic = G__27001__delegate;
return G__27001;
})()
;
};
var G__27000 = function (f,arg1,arg2,arg3,var_args){
var more = null;if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__27000__delegate.call(this,f,arg1,arg2,arg3,more);};
G__27000.cljs$lang$maxFixedArity = 4;
G__27000.cljs$lang$applyTo = (function (arglist__27003){
var f = cljs.core.first(arglist__27003);
arglist__27003 = cljs.core.next(arglist__27003);
var arg1 = cljs.core.first(arglist__27003);
arglist__27003 = cljs.core.next(arglist__27003);
var arg2 = cljs.core.first(arglist__27003);
arglist__27003 = cljs.core.next(arglist__27003);
var arg3 = cljs.core.first(arglist__27003);
var more = cljs.core.rest(arglist__27003);
return G__27000__delegate(f,arg1,arg2,arg3,more);
});
G__27000.cljs$core$IFn$_invoke$arity$variadic = G__27000__delegate;
return G__27000;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return partial__1.call(this,f);
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$core$IFn$_invoke$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$core$IFn$_invoke$arity$1 = partial__1;
partial.cljs$core$IFn$_invoke$arity$2 = partial__2;
partial.cljs$core$IFn$_invoke$arity$3 = partial__3;
partial.cljs$core$IFn$_invoke$arity$4 = partial__4;
partial.cljs$core$IFn$_invoke$arity$variadic = partial__5.cljs$core$IFn$_invoke$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){return (function() {
var G__27036 = null;
var G__27036__1 = (function (a){var G__27020 = (((a == null))?x:a);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27020) : f.call(null,G__27020));
});
var G__27036__2 = (function (a,b){var G__27021 = (((a == null))?x:a);var G__27022 = b;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27021,G__27022) : f.call(null,G__27021,G__27022));
});
var G__27036__3 = (function (a,b,c){var G__27023 = (((a == null))?x:a);var G__27024 = b;var G__27025 = c;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__27023,G__27024,G__27025) : f.call(null,G__27023,G__27024,G__27025));
});
var G__27036__4 = (function() { 
var G__27037__delegate = function (a,b,c,ds){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),b,c,ds);
};
var G__27037 = function (a,b,c,var_args){
var ds = null;if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__27037__delegate.call(this,a,b,c,ds);};
G__27037.cljs$lang$maxFixedArity = 3;
G__27037.cljs$lang$applyTo = (function (arglist__27038){
var a = cljs.core.first(arglist__27038);
arglist__27038 = cljs.core.next(arglist__27038);
var b = cljs.core.first(arglist__27038);
arglist__27038 = cljs.core.next(arglist__27038);
var c = cljs.core.first(arglist__27038);
var ds = cljs.core.rest(arglist__27038);
return G__27037__delegate(a,b,c,ds);
});
G__27037.cljs$core$IFn$_invoke$arity$variadic = G__27037__delegate;
return G__27037;
})()
;
G__27036 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__27036__1.call(this,a);
case 2:
return G__27036__2.call(this,a,b);
case 3:
return G__27036__3.call(this,a,b,c);
default:
return G__27036__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27036.cljs$lang$maxFixedArity = 3;
G__27036.cljs$lang$applyTo = G__27036__4.cljs$lang$applyTo;
G__27036.cljs$core$IFn$_invoke$arity$1 = G__27036__1;
G__27036.cljs$core$IFn$_invoke$arity$2 = G__27036__2;
G__27036.cljs$core$IFn$_invoke$arity$3 = G__27036__3;
G__27036.cljs$core$IFn$_invoke$arity$variadic = G__27036__4.cljs$core$IFn$_invoke$arity$variadic;
return G__27036;
})()
});
var fnil__3 = (function (f,x,y){return (function() {
var G__27039 = null;
var G__27039__2 = (function (a,b){var G__27026 = (((a == null))?x:a);var G__27027 = (((b == null))?y:b);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27026,G__27027) : f.call(null,G__27026,G__27027));
});
var G__27039__3 = (function (a,b,c){var G__27028 = (((a == null))?x:a);var G__27029 = (((b == null))?y:b);var G__27030 = c;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__27028,G__27029,G__27030) : f.call(null,G__27028,G__27029,G__27030));
});
var G__27039__4 = (function() { 
var G__27040__delegate = function (a,b,c,ds){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__27040 = function (a,b,c,var_args){
var ds = null;if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__27040__delegate.call(this,a,b,c,ds);};
G__27040.cljs$lang$maxFixedArity = 3;
G__27040.cljs$lang$applyTo = (function (arglist__27041){
var a = cljs.core.first(arglist__27041);
arglist__27041 = cljs.core.next(arglist__27041);
var b = cljs.core.first(arglist__27041);
arglist__27041 = cljs.core.next(arglist__27041);
var c = cljs.core.first(arglist__27041);
var ds = cljs.core.rest(arglist__27041);
return G__27040__delegate(a,b,c,ds);
});
G__27040.cljs$core$IFn$_invoke$arity$variadic = G__27040__delegate;
return G__27040;
})()
;
G__27039 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__27039__2.call(this,a,b);
case 3:
return G__27039__3.call(this,a,b,c);
default:
return G__27039__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27039.cljs$lang$maxFixedArity = 3;
G__27039.cljs$lang$applyTo = G__27039__4.cljs$lang$applyTo;
G__27039.cljs$core$IFn$_invoke$arity$2 = G__27039__2;
G__27039.cljs$core$IFn$_invoke$arity$3 = G__27039__3;
G__27039.cljs$core$IFn$_invoke$arity$variadic = G__27039__4.cljs$core$IFn$_invoke$arity$variadic;
return G__27039;
})()
});
var fnil__4 = (function (f,x,y,z){return (function() {
var G__27042 = null;
var G__27042__2 = (function (a,b){var G__27031 = (((a == null))?x:a);var G__27032 = (((b == null))?y:b);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27031,G__27032) : f.call(null,G__27031,G__27032));
});
var G__27042__3 = (function (a,b,c){var G__27033 = (((a == null))?x:a);var G__27034 = (((b == null))?y:b);var G__27035 = (((c == null))?z:c);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__27033,G__27034,G__27035) : f.call(null,G__27033,G__27034,G__27035));
});
var G__27042__4 = (function() { 
var G__27043__delegate = function (a,b,c,ds){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__27043 = function (a,b,c,var_args){
var ds = null;if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__27043__delegate.call(this,a,b,c,ds);};
G__27043.cljs$lang$maxFixedArity = 3;
G__27043.cljs$lang$applyTo = (function (arglist__27044){
var a = cljs.core.first(arglist__27044);
arglist__27044 = cljs.core.next(arglist__27044);
var b = cljs.core.first(arglist__27044);
arglist__27044 = cljs.core.next(arglist__27044);
var c = cljs.core.first(arglist__27044);
var ds = cljs.core.rest(arglist__27044);
return G__27043__delegate(a,b,c,ds);
});
G__27043.cljs$core$IFn$_invoke$arity$variadic = G__27043__delegate;
return G__27043;
})()
;
G__27042 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__27042__2.call(this,a,b);
case 3:
return G__27042__3.call(this,a,b,c);
default:
return G__27042__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27042.cljs$lang$maxFixedArity = 3;
G__27042.cljs$lang$applyTo = G__27042__4.cljs$lang$applyTo;
G__27042.cljs$core$IFn$_invoke$arity$2 = G__27042__2;
G__27042.cljs$core$IFn$_invoke$arity$3 = G__27042__3;
G__27042.cljs$core$IFn$_invoke$arity$variadic = G__27042__4.cljs$core$IFn$_invoke$arity$variadic;
return G__27042;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fnil.cljs$core$IFn$_invoke$arity$2 = fnil__2;
fnil.cljs$core$IFn$_invoke$arity$3 = fnil__3;
fnil.cljs$core$IFn$_invoke$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){var mapi = (function mapi(idx,coll__$1){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll__$1);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__20882__auto___27093 = size;var i_27094 = (0);while(true){
if((i_27094 < n__20882__auto___27093))
{cljs.core.chunk_append(b,(function (){var G__27089 = (idx + i_27094);var G__27090 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_27094);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27089,G__27090) : f.call(null,G__27089,G__27090));
})());
{
var G__27095 = (i_27094 + (1));
i_27094 = G__27095;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),mapi((idx + size),cljs.core.chunk_rest(s)));
} else
{return cljs.core.cons((function (){var G__27091 = idx;var G__27092 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27091,G__27092) : f.call(null,G__27091,G__27092));
})(),mapi((idx + (1)),cljs.core.rest(s)));
}
} else
{return null;
}
}),null,null));
});
return mapi((0),coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.  Returns a transducer when no collection is provided.
*/
cljs.core.keep = (function() {
var keep = null;
var keep__1 = (function (f){return (function (f1){return (function() {
var G__27114 = null;
var G__27114__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__27114__1 = (function (result){var G__27108 = result;return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__27108) : f1.call(null,G__27108));
});
var G__27114__2 = (function (result,input){var v = (function (){var G__27109 = input;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27109) : f.call(null,G__27109));
})();if((v == null))
{return result;
} else
{var G__27110 = result;var G__27111 = v;return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__27110,G__27111) : f1.call(null,G__27110,G__27111));
}
});
G__27114 = function(result,input){
switch(arguments.length){
case 0:
return G__27114__0.call(this);
case 1:
return G__27114__1.call(this,result);
case 2:
return G__27114__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27114.cljs$core$IFn$_invoke$arity$0 = G__27114__0;
G__27114.cljs$core$IFn$_invoke$arity$1 = G__27114__1;
G__27114.cljs$core$IFn$_invoke$arity$2 = G__27114__2;
return G__27114;
})()
});
});
var keep__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__20882__auto___27115 = size;var i_27116 = (0);while(true){
if((i_27116 < n__20882__auto___27115))
{var x_27117 = (function (){var G__27112 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_27116);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27112) : f.call(null,G__27112));
})();if((x_27117 == null))
{} else
{cljs.core.chunk_append(b,x_27117);
}
{
var G__27118 = (i_27116 + (1));
i_27116 = G__27118;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else
{var x = (function (){var G__27113 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27113) : f.call(null,G__27113));
})();if((x == null))
{return keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s));
} else
{return cljs.core.cons(x,keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s)));
}
}
} else
{return null;
}
}),null,null));
});
keep = function(f,coll){
switch(arguments.length){
case 1:
return keep__1.call(this,f);
case 2:
return keep__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keep.cljs$core$IFn$_invoke$arity$1 = keep__1;
keep.cljs$core$IFn$_invoke$arity$2 = keep__2;
return keep;
})()
;

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 6455296;
this.cljs$lang$protocol_mask$partition1$ = 16386;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorStr = "cljs.core/Atom";
cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__27119 = this$__$1;return goog.getUid(G__27119);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__27120 = cljs.core.seq(self__.watches);var chunk__27121 = null;var count__27122 = (0);var i__27123 = (0);while(true){
if((i__27123 < count__27122))
{var vec__27124 = chunk__27121.cljs$core$IIndexed$_nth$arity$2(null,i__27123);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27124,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27124,(1),null);var G__27125_27134 = key;var G__27126_27135 = this$__$1;var G__27127_27136 = oldval;var G__27128_27137 = newval;(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__27125_27134,G__27126_27135,G__27127_27136,G__27128_27137) : f.call(null,G__27125_27134,G__27126_27135,G__27127_27136,G__27128_27137));
{
var G__27138 = seq__27120;
var G__27139 = chunk__27121;
var G__27140 = count__27122;
var G__27141 = (i__27123 + (1));
seq__27120 = G__27138;
chunk__27121 = G__27139;
count__27122 = G__27140;
i__27123 = G__27141;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__27120);if(temp__4126__auto__)
{var seq__27120__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27120__$1))
{var c__20699__auto__ = cljs.core.chunk_first(seq__27120__$1);{
var G__27142 = cljs.core.chunk_rest(seq__27120__$1);
var G__27143 = c__20699__auto__;
var G__27144 = cljs.core.count(c__20699__auto__);
var G__27145 = (0);
seq__27120 = G__27142;
chunk__27121 = G__27143;
count__27122 = G__27144;
i__27123 = G__27145;
continue;
}
} else
{var vec__27129 = cljs.core.first(seq__27120__$1);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27129,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27129,(1),null);var G__27130_27146 = key;var G__27131_27147 = this$__$1;var G__27132_27148 = oldval;var G__27133_27149 = newval;(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__27130_27146,G__27131_27147,G__27132_27148,G__27133_27149) : f.call(null,G__27130_27146,G__27131_27147,G__27132_27148,G__27133_27149));
{
var G__27150 = cljs.core.next(seq__27120__$1);
var G__27151 = null;
var G__27152 = (0);
var G__27153 = (0);
seq__27120 = G__27150;
chunk__27121 = G__27151;
count__27122 = G__27152;
i__27123 = G__27153;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
return this$__$1;
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
cljs.core.Atom.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.__GT_Atom = (function __GT_Atom(state,meta,validator,watches){return (new cljs.core.Atom(state,meta,validator,watches));
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__27157__delegate = function (x,p__27154){var map__27156 = p__27154;var map__27156__$1 = ((cljs.core.seq_QMARK_(map__27156))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27156):map__27156);var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27156__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27156__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));return (new cljs.core.Atom(x,meta,validator,null));
};
var G__27157 = function (x,var_args){
var p__27154 = null;if (arguments.length > 1) {
  p__27154 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__27157__delegate.call(this,x,p__27154);};
G__27157.cljs$lang$maxFixedArity = 1;
G__27157.cljs$lang$applyTo = (function (arglist__27158){
var x = cljs.core.first(arglist__27158);
var p__27154 = cljs.core.rest(arglist__27158);
return G__27157__delegate(x,p__27154);
});
G__27157.cljs$core$IFn$_invoke$arity$variadic = G__27157__delegate;
return G__27157;
})()
;
atom = function(x,var_args){
var p__27154 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){if((a instanceof cljs.core.Atom))
{var validate = a.validator;if((validate == null))
{} else
{if(cljs.core.truth_((function (){var G__27161 = new_value;return (validate.cljs$core$IFn$_invoke$arity$1 ? validate.cljs$core$IFn$_invoke$arity$1(G__27161) : validate.call(null,G__27161));
})()))
{} else
{throw (new Error(("Assert failed: Validator rejected reference state\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__27162 = cljs.core.list(new cljs.core.Symbol(null,"validate","validate",1439230700,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null));return (cljs.core.pr_str.cljs$core$IFn$_invoke$arity$1 ? cljs.core.pr_str.cljs$core$IFn$_invoke$arity$1(G__27162) : cljs.core.pr_str.call(null,G__27162));
})()))));
}
}
var old_value = a.state;a.state = new_value;
if((a.watches == null))
{} else
{cljs.core._notify_watches(a,old_value,new_value);
}
return new_value;
} else
{return cljs.core._reset_BANG_(a,new_value);
}
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){if((a instanceof cljs.core.Atom))
{return cljs.core.reset_BANG_(a,(function (){var G__27169 = a.state;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27169) : f.call(null,G__27169));
})());
} else
{return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$2(a,f);
}
});
var swap_BANG___3 = (function (a,f,x){if((a instanceof cljs.core.Atom))
{return cljs.core.reset_BANG_(a,(function (){var G__27170 = a.state;var G__27171 = x;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27170,G__27171) : f.call(null,G__27170,G__27171));
})());
} else
{return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,f,x);
}
});
var swap_BANG___4 = (function (a,f,x,y){if((a instanceof cljs.core.Atom))
{return cljs.core.reset_BANG_(a,(function (){var G__27172 = a.state;var G__27173 = x;var G__27174 = y;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__27172,G__27173,G__27174) : f.call(null,G__27172,G__27173,G__27174));
})());
} else
{return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,f,x,y);
}
});
var swap_BANG___5 = (function() { 
var G__27175__delegate = function (a,f,x,y,more){if((a instanceof cljs.core.Atom))
{return cljs.core.reset_BANG_(a,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,a.state,x,y,more));
} else
{return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$5(a,f,x,y,more);
}
};
var G__27175 = function (a,f,x,y,var_args){
var more = null;if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__27175__delegate.call(this,a,f,x,y,more);};
G__27175.cljs$lang$maxFixedArity = 4;
G__27175.cljs$lang$applyTo = (function (arglist__27176){
var a = cljs.core.first(arglist__27176);
arglist__27176 = cljs.core.next(arglist__27176);
var f = cljs.core.first(arglist__27176);
arglist__27176 = cljs.core.next(arglist__27176);
var x = cljs.core.first(arglist__27176);
arglist__27176 = cljs.core.next(arglist__27176);
var y = cljs.core.first(arglist__27176);
var more = cljs.core.rest(arglist__27176);
return G__27175__delegate(a,f,x,y,more);
});
G__27175.cljs$core$IFn$_invoke$arity$variadic = G__27175__delegate;
return G__27175;
})()
;
swap_BANG_ = function(a,f,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
default:
return swap_BANG___5.cljs$core$IFn$_invoke$arity$variadic(a,f,x,y, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_BANG_.cljs$lang$maxFixedArity = 4;
swap_BANG_.cljs$lang$applyTo = swap_BANG___5.cljs$lang$applyTo;
swap_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_BANG___2;
swap_BANG_.cljs$core$IFn$_invoke$arity$3 = swap_BANG___3;
swap_BANG_.cljs$core$IFn$_invoke$arity$4 = swap_BANG___4;
swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_BANG___5.cljs$core$IFn$_invoke$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a.state,oldval))
{cljs.core.reset_BANG_(a,newval);
return true;
} else
{return false;
}
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){return iref.validator;
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.  Returns a stateful transducer when no collection is
* provided.
*/
cljs.core.keep_indexed = (function() {
var keep_indexed = null;
var keep_indexed__1 = (function (f){return (function (f1){var ia = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));return ((function (ia){
return (function() {
var G__27243 = null;
var G__27243__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__27243__1 = (function (result){var G__27210 = result;return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__27210) : f1.call(null,G__27210));
});
var G__27243__2 = (function (result,input){var i = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ia,cljs.core.inc);var v = (function (){var G__27211 = i;var G__27212 = input;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27211,G__27212) : f.call(null,G__27211,G__27212));
})();if((v == null))
{return result;
} else
{var G__27213 = result;var G__27214 = v;return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__27213,G__27214) : f1.call(null,G__27213,G__27214));
}
});
G__27243 = function(result,input){
switch(arguments.length){
case 0:
return G__27243__0.call(this);
case 1:
return G__27243__1.call(this,result);
case 2:
return G__27243__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27243.cljs$core$IFn$_invoke$arity$0 = G__27243__0;
G__27243.cljs$core$IFn$_invoke$arity$1 = G__27243__1;
G__27243.cljs$core$IFn$_invoke$arity$2 = G__27243__2;
return G__27243;
})()
;})(ia))
});
});
var keep_indexed__2 = (function (f,coll){var keepi = (function keepi(idx,coll__$1){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll__$1);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__20882__auto___27244 = size;var i_27245 = (0);while(true){
if((i_27245 < n__20882__auto___27244))
{var x_27246 = (function (){var G__27239 = (idx + i_27245);var G__27240 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_27245);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27239,G__27240) : f.call(null,G__27239,G__27240));
})();if((x_27246 == null))
{} else
{cljs.core.chunk_append(b,x_27246);
}
{
var G__27247 = (i_27245 + (1));
i_27245 = G__27247;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),keepi((idx + size),cljs.core.chunk_rest(s)));
} else
{var x = (function (){var G__27241 = idx;var G__27242 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27241,G__27242) : f.call(null,G__27241,G__27242));
})();if((x == null))
{return keepi((idx + (1)),cljs.core.rest(s));
} else
{return cljs.core.cons(x,keepi((idx + (1)),cljs.core.rest(s)));
}
}
} else
{return null;
}
}),null,null));
});
return keepi((0),coll);
});
keep_indexed = function(f,coll){
switch(arguments.length){
case 1:
return keep_indexed__1.call(this,f);
case 2:
return keep_indexed__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keep_indexed.cljs$core$IFn$_invoke$arity$1 = keep_indexed__1;
keep_indexed.cljs$core$IFn$_invoke$arity$2 = keep_indexed__2;
return keep_indexed;
})()
;
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){return (function() {
var ep1 = null;
var ep1__0 = (function (){return true;
});
var ep1__1 = (function (x){return cljs.core.boolean$((function (){var G__27461 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__27461) : p.call(null,G__27461));
})());
});
var ep1__2 = (function (x,y){return cljs.core.boolean$((function (){var and__19255__auto__ = (function (){var G__27463 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__27463) : p.call(null,G__27463));
})();if(cljs.core.truth_(and__19255__auto__))
{var G__27464 = y;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__27464) : p.call(null,G__27464));
} else
{return and__19255__auto__;
}
})());
});
var ep1__3 = (function (x,y,z){return cljs.core.boolean$((function (){var and__19255__auto__ = (function (){var G__27466 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__27466) : p.call(null,G__27466));
})();if(cljs.core.truth_(and__19255__auto__))
{var and__19255__auto____$1 = (function (){var G__27468 = y;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__27468) : p.call(null,G__27468));
})();if(cljs.core.truth_(and__19255__auto____$1))
{var G__27469 = z;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__27469) : p.call(null,G__27469));
} else
{return and__19255__auto____$1;
}
} else
{return and__19255__auto__;
}
})());
});
var ep1__4 = (function() { 
var G__27638__delegate = function (x,y,z,args){return cljs.core.boolean$((ep1.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_(p,args)));
};
var G__27638 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__27638__delegate.call(this,x,y,z,args);};
G__27638.cljs$lang$maxFixedArity = 3;
G__27638.cljs$lang$applyTo = (function (arglist__27639){
var x = cljs.core.first(arglist__27639);
arglist__27639 = cljs.core.next(arglist__27639);
var y = cljs.core.first(arglist__27639);
arglist__27639 = cljs.core.next(arglist__27639);
var z = cljs.core.first(arglist__27639);
var args = cljs.core.rest(arglist__27639);
return G__27638__delegate(x,y,z,args);
});
G__27638.cljs$core$IFn$_invoke$arity$variadic = G__27638__delegate;
return G__27638;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$core$IFn$_invoke$arity$0 = ep1__0;
ep1.cljs$core$IFn$_invoke$arity$1 = ep1__1;
ep1.cljs$core$IFn$_invoke$arity$2 = ep1__2;
ep1.cljs$core$IFn$_invoke$arity$3 = ep1__3;
ep1.cljs$core$IFn$_invoke$arity$variadic = ep1__4.cljs$core$IFn$_invoke$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){return (function() {
var ep2 = null;
var ep2__0 = (function (){return true;
});
var ep2__1 = (function (x){return cljs.core.boolean$((function (){var and__19255__auto__ = (function (){var G__27501 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27501) : p1.call(null,G__27501));
})();if(cljs.core.truth_(and__19255__auto__))
{var G__27502 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27502) : p2.call(null,G__27502));
} else
{return and__19255__auto__;
}
})());
});
var ep2__2 = (function (x,y){return cljs.core.boolean$((function (){var and__19255__auto__ = (function (){var G__27504 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27504) : p1.call(null,G__27504));
})();if(cljs.core.truth_(and__19255__auto__))
{var and__19255__auto____$1 = (function (){var G__27506 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27506) : p1.call(null,G__27506));
})();if(cljs.core.truth_(and__19255__auto____$1))
{var and__19255__auto____$2 = (function (){var G__27508 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27508) : p2.call(null,G__27508));
})();if(cljs.core.truth_(and__19255__auto____$2))
{var G__27509 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27509) : p2.call(null,G__27509));
} else
{return and__19255__auto____$2;
}
} else
{return and__19255__auto____$1;
}
} else
{return and__19255__auto__;
}
})());
});
var ep2__3 = (function (x,y,z){return cljs.core.boolean$((function (){var and__19255__auto__ = (function (){var G__27511 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27511) : p1.call(null,G__27511));
})();if(cljs.core.truth_(and__19255__auto__))
{var and__19255__auto____$1 = (function (){var G__27513 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27513) : p1.call(null,G__27513));
})();if(cljs.core.truth_(and__19255__auto____$1))
{var and__19255__auto____$2 = (function (){var G__27515 = z;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27515) : p1.call(null,G__27515));
})();if(cljs.core.truth_(and__19255__auto____$2))
{var and__19255__auto____$3 = (function (){var G__27517 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27517) : p2.call(null,G__27517));
})();if(cljs.core.truth_(and__19255__auto____$3))
{var and__19255__auto____$4 = (function (){var G__27519 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27519) : p2.call(null,G__27519));
})();if(cljs.core.truth_(and__19255__auto____$4))
{var G__27520 = z;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27520) : p2.call(null,G__27520));
} else
{return and__19255__auto____$4;
}
} else
{return and__19255__auto____$3;
}
} else
{return and__19255__auto____$2;
}
} else
{return and__19255__auto____$1;
}
} else
{return and__19255__auto__;
}
})());
});
var ep2__4 = (function() { 
var G__27640__delegate = function (x,y,z,args){return cljs.core.boolean$((ep2.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__27248_SHARP_){var and__19255__auto__ = (function (){var G__27525 = p1__27248_SHARP_;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27525) : p1.call(null,G__27525));
})();if(cljs.core.truth_(and__19255__auto__))
{var G__27526 = p1__27248_SHARP_;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27526) : p2.call(null,G__27526));
} else
{return and__19255__auto__;
}
}),args)));
};
var G__27640 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__27640__delegate.call(this,x,y,z,args);};
G__27640.cljs$lang$maxFixedArity = 3;
G__27640.cljs$lang$applyTo = (function (arglist__27641){
var x = cljs.core.first(arglist__27641);
arglist__27641 = cljs.core.next(arglist__27641);
var y = cljs.core.first(arglist__27641);
arglist__27641 = cljs.core.next(arglist__27641);
var z = cljs.core.first(arglist__27641);
var args = cljs.core.rest(arglist__27641);
return G__27640__delegate(x,y,z,args);
});
G__27640.cljs$core$IFn$_invoke$arity$variadic = G__27640__delegate;
return G__27640;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$core$IFn$_invoke$arity$0 = ep2__0;
ep2.cljs$core$IFn$_invoke$arity$1 = ep2__1;
ep2.cljs$core$IFn$_invoke$arity$2 = ep2__2;
ep2.cljs$core$IFn$_invoke$arity$3 = ep2__3;
ep2.cljs$core$IFn$_invoke$arity$variadic = ep2__4.cljs$core$IFn$_invoke$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){return (function() {
var ep3 = null;
var ep3__0 = (function (){return true;
});
var ep3__1 = (function (x){return cljs.core.boolean$((function (){var and__19255__auto__ = (function (){var G__27572 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27572) : p1.call(null,G__27572));
})();if(cljs.core.truth_(and__19255__auto__))
{var and__19255__auto____$1 = (function (){var G__27574 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27574) : p2.call(null,G__27574));
})();if(cljs.core.truth_(and__19255__auto____$1))
{var G__27575 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__27575) : p3.call(null,G__27575));
} else
{return and__19255__auto____$1;
}
} else
{return and__19255__auto__;
}
})());
});
var ep3__2 = (function (x,y){return cljs.core.boolean$((function (){var and__19255__auto__ = (function (){var G__27577 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27577) : p1.call(null,G__27577));
})();if(cljs.core.truth_(and__19255__auto__))
{var and__19255__auto____$1 = (function (){var G__27579 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27579) : p2.call(null,G__27579));
})();if(cljs.core.truth_(and__19255__auto____$1))
{var and__19255__auto____$2 = (function (){var G__27581 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__27581) : p3.call(null,G__27581));
})();if(cljs.core.truth_(and__19255__auto____$2))
{var and__19255__auto____$3 = (function (){var G__27583 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27583) : p1.call(null,G__27583));
})();if(cljs.core.truth_(and__19255__auto____$3))
{var and__19255__auto____$4 = (function (){var G__27585 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27585) : p2.call(null,G__27585));
})();if(cljs.core.truth_(and__19255__auto____$4))
{var G__27586 = y;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__27586) : p3.call(null,G__27586));
} else
{return and__19255__auto____$4;
}
} else
{return and__19255__auto____$3;
}
} else
{return and__19255__auto____$2;
}
} else
{return and__19255__auto____$1;
}
} else
{return and__19255__auto__;
}
})());
});
var ep3__3 = (function (x,y,z){return cljs.core.boolean$((function (){var and__19255__auto__ = (function (){var G__27588 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27588) : p1.call(null,G__27588));
})();if(cljs.core.truth_(and__19255__auto__))
{var and__19255__auto____$1 = (function (){var G__27590 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27590) : p2.call(null,G__27590));
})();if(cljs.core.truth_(and__19255__auto____$1))
{var and__19255__auto____$2 = (function (){var G__27592 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__27592) : p3.call(null,G__27592));
})();if(cljs.core.truth_(and__19255__auto____$2))
{var and__19255__auto____$3 = (function (){var G__27594 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27594) : p1.call(null,G__27594));
})();if(cljs.core.truth_(and__19255__auto____$3))
{var and__19255__auto____$4 = (function (){var G__27596 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27596) : p2.call(null,G__27596));
})();if(cljs.core.truth_(and__19255__auto____$4))
{var and__19255__auto____$5 = (function (){var G__27598 = y;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__27598) : p3.call(null,G__27598));
})();if(cljs.core.truth_(and__19255__auto____$5))
{var and__19255__auto____$6 = (function (){var G__27600 = z;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27600) : p1.call(null,G__27600));
})();if(cljs.core.truth_(and__19255__auto____$6))
{var and__19255__auto____$7 = (function (){var G__27602 = z;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27602) : p2.call(null,G__27602));
})();if(cljs.core.truth_(and__19255__auto____$7))
{var G__27603 = z;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__27603) : p3.call(null,G__27603));
} else
{return and__19255__auto____$7;
}
} else
{return and__19255__auto____$6;
}
} else
{return and__19255__auto____$5;
}
} else
{return and__19255__auto____$4;
}
} else
{return and__19255__auto____$3;
}
} else
{return and__19255__auto____$2;
}
} else
{return and__19255__auto____$1;
}
} else
{return and__19255__auto__;
}
})());
});
var ep3__4 = (function() { 
var G__27642__delegate = function (x,y,z,args){return cljs.core.boolean$((ep3.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__27249_SHARP_){var and__19255__auto__ = (function (){var G__27610 = p1__27249_SHARP_;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27610) : p1.call(null,G__27610));
})();if(cljs.core.truth_(and__19255__auto__))
{var and__19255__auto____$1 = (function (){var G__27612 = p1__27249_SHARP_;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27612) : p2.call(null,G__27612));
})();if(cljs.core.truth_(and__19255__auto____$1))
{var G__27613 = p1__27249_SHARP_;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__27613) : p3.call(null,G__27613));
} else
{return and__19255__auto____$1;
}
} else
{return and__19255__auto__;
}
}),args)));
};
var G__27642 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__27642__delegate.call(this,x,y,z,args);};
G__27642.cljs$lang$maxFixedArity = 3;
G__27642.cljs$lang$applyTo = (function (arglist__27643){
var x = cljs.core.first(arglist__27643);
arglist__27643 = cljs.core.next(arglist__27643);
var y = cljs.core.first(arglist__27643);
arglist__27643 = cljs.core.next(arglist__27643);
var z = cljs.core.first(arglist__27643);
var args = cljs.core.rest(arglist__27643);
return G__27642__delegate(x,y,z,args);
});
G__27642.cljs$core$IFn$_invoke$arity$variadic = G__27642__delegate;
return G__27642;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$core$IFn$_invoke$arity$0 = ep3__0;
ep3.cljs$core$IFn$_invoke$arity$1 = ep3__1;
ep3.cljs$core$IFn$_invoke$arity$2 = ep3__2;
ep3.cljs$core$IFn$_invoke$arity$3 = ep3__3;
ep3.cljs$core$IFn$_invoke$arity$variadic = ep3__4.cljs$core$IFn$_invoke$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__27644__delegate = function (p1,p2,p3,ps){var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);return ((function (ps__$1){
return (function() {
var epn = null;
var epn__0 = (function (){return true;
});
var epn__1 = (function (x){return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__27250_SHARP_){var G__27629 = x;return (p1__27250_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27250_SHARP_.cljs$core$IFn$_invoke$arity$1(G__27629) : p1__27250_SHARP_.call(null,G__27629));
});})(ps__$1))
,ps__$1);
});
var epn__2 = (function (x,y){return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__27251_SHARP_){var and__19255__auto__ = (function (){var G__27631 = x;return (p1__27251_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27251_SHARP_.cljs$core$IFn$_invoke$arity$1(G__27631) : p1__27251_SHARP_.call(null,G__27631));
})();if(cljs.core.truth_(and__19255__auto__))
{var G__27632 = y;return (p1__27251_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27251_SHARP_.cljs$core$IFn$_invoke$arity$1(G__27632) : p1__27251_SHARP_.call(null,G__27632));
} else
{return and__19255__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__3 = (function (x,y,z){return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__27252_SHARP_){var and__19255__auto__ = (function (){var G__27634 = x;return (p1__27252_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27252_SHARP_.cljs$core$IFn$_invoke$arity$1(G__27634) : p1__27252_SHARP_.call(null,G__27634));
})();if(cljs.core.truth_(and__19255__auto__))
{var and__19255__auto____$1 = (function (){var G__27636 = y;return (p1__27252_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27252_SHARP_.cljs$core$IFn$_invoke$arity$1(G__27636) : p1__27252_SHARP_.call(null,G__27636));
})();if(cljs.core.truth_(and__19255__auto____$1))
{var G__27637 = z;return (p1__27252_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27252_SHARP_.cljs$core$IFn$_invoke$arity$1(G__27637) : p1__27252_SHARP_.call(null,G__27637));
} else
{return and__19255__auto____$1;
}
} else
{return and__19255__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__4 = (function() { 
var G__27645__delegate = function (x,y,z,args){return cljs.core.boolean$((epn.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__27253_SHARP_){return cljs.core.every_QMARK_(p1__27253_SHARP_,args);
});})(ps__$1))
,ps__$1)));
};
var G__27645 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__27645__delegate.call(this,x,y,z,args);};
G__27645.cljs$lang$maxFixedArity = 3;
G__27645.cljs$lang$applyTo = (function (arglist__27646){
var x = cljs.core.first(arglist__27646);
arglist__27646 = cljs.core.next(arglist__27646);
var y = cljs.core.first(arglist__27646);
arglist__27646 = cljs.core.next(arglist__27646);
var z = cljs.core.first(arglist__27646);
var args = cljs.core.rest(arglist__27646);
return G__27645__delegate(x,y,z,args);
});
G__27645.cljs$core$IFn$_invoke$arity$variadic = G__27645__delegate;
return G__27645;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$core$IFn$_invoke$arity$0 = epn__0;
epn.cljs$core$IFn$_invoke$arity$1 = epn__1;
epn.cljs$core$IFn$_invoke$arity$2 = epn__2;
epn.cljs$core$IFn$_invoke$arity$3 = epn__3;
epn.cljs$core$IFn$_invoke$arity$variadic = epn__4.cljs$core$IFn$_invoke$arity$variadic;
return epn;
})()
;})(ps__$1))
};
var G__27644 = function (p1,p2,p3,var_args){
var ps = null;if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__27644__delegate.call(this,p1,p2,p3,ps);};
G__27644.cljs$lang$maxFixedArity = 3;
G__27644.cljs$lang$applyTo = (function (arglist__27647){
var p1 = cljs.core.first(arglist__27647);
arglist__27647 = cljs.core.next(arglist__27647);
var p2 = cljs.core.first(arglist__27647);
arglist__27647 = cljs.core.next(arglist__27647);
var p3 = cljs.core.first(arglist__27647);
var ps = cljs.core.rest(arglist__27647);
return G__27644__delegate(p1,p2,p3,ps);
});
G__27644.cljs$core$IFn$_invoke$arity$variadic = G__27644__delegate;
return G__27644;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$core$IFn$_invoke$arity$1 = every_pred__1;
every_pred.cljs$core$IFn$_invoke$arity$2 = every_pred__2;
every_pred.cljs$core$IFn$_invoke$arity$3 = every_pred__3;
every_pred.cljs$core$IFn$_invoke$arity$variadic = every_pred__4.cljs$core$IFn$_invoke$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){return (function() {
var sp1 = null;
var sp1__0 = (function (){return null;
});
var sp1__1 = (function (x){var G__27853 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__27853) : p.call(null,G__27853));
});
var sp1__2 = (function (x,y){var or__19267__auto__ = (function (){var G__27855 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__27855) : p.call(null,G__27855));
})();if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{var G__27856 = y;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__27856) : p.call(null,G__27856));
}
});
var sp1__3 = (function (x,y,z){var or__19267__auto__ = (function (){var G__27858 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__27858) : p.call(null,G__27858));
})();if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (function (){var G__27860 = y;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__27860) : p.call(null,G__27860));
})();if(cljs.core.truth_(or__19267__auto____$1))
{return or__19267__auto____$1;
} else
{var G__27861 = z;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__27861) : p.call(null,G__27861));
}
}
});
var sp1__4 = (function() { 
var G__28022__delegate = function (x,y,z,args){var or__19267__auto__ = sp1.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return cljs.core.some(p,args);
}
};
var G__28022 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__28022__delegate.call(this,x,y,z,args);};
G__28022.cljs$lang$maxFixedArity = 3;
G__28022.cljs$lang$applyTo = (function (arglist__28023){
var x = cljs.core.first(arglist__28023);
arglist__28023 = cljs.core.next(arglist__28023);
var y = cljs.core.first(arglist__28023);
arglist__28023 = cljs.core.next(arglist__28023);
var z = cljs.core.first(arglist__28023);
var args = cljs.core.rest(arglist__28023);
return G__28022__delegate(x,y,z,args);
});
G__28022.cljs$core$IFn$_invoke$arity$variadic = G__28022__delegate;
return G__28022;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$core$IFn$_invoke$arity$0 = sp1__0;
sp1.cljs$core$IFn$_invoke$arity$1 = sp1__1;
sp1.cljs$core$IFn$_invoke$arity$2 = sp1__2;
sp1.cljs$core$IFn$_invoke$arity$3 = sp1__3;
sp1.cljs$core$IFn$_invoke$arity$variadic = sp1__4.cljs$core$IFn$_invoke$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){return (function() {
var sp2 = null;
var sp2__0 = (function (){return null;
});
var sp2__1 = (function (x){var or__19267__auto__ = (function (){var G__27893 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27893) : p1.call(null,G__27893));
})();if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{var G__27894 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27894) : p2.call(null,G__27894));
}
});
var sp2__2 = (function (x,y){var or__19267__auto__ = (function (){var G__27896 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27896) : p1.call(null,G__27896));
})();if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (function (){var G__27898 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27898) : p1.call(null,G__27898));
})();if(cljs.core.truth_(or__19267__auto____$1))
{return or__19267__auto____$1;
} else
{var or__19267__auto____$2 = (function (){var G__27900 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27900) : p2.call(null,G__27900));
})();if(cljs.core.truth_(or__19267__auto____$2))
{return or__19267__auto____$2;
} else
{var G__27901 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27901) : p2.call(null,G__27901));
}
}
}
});
var sp2__3 = (function (x,y,z){var or__19267__auto__ = (function (){var G__27903 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27903) : p1.call(null,G__27903));
})();if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (function (){var G__27905 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27905) : p1.call(null,G__27905));
})();if(cljs.core.truth_(or__19267__auto____$1))
{return or__19267__auto____$1;
} else
{var or__19267__auto____$2 = (function (){var G__27907 = z;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27907) : p1.call(null,G__27907));
})();if(cljs.core.truth_(or__19267__auto____$2))
{return or__19267__auto____$2;
} else
{var or__19267__auto____$3 = (function (){var G__27909 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27909) : p2.call(null,G__27909));
})();if(cljs.core.truth_(or__19267__auto____$3))
{return or__19267__auto____$3;
} else
{var or__19267__auto____$4 = (function (){var G__27911 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27911) : p2.call(null,G__27911));
})();if(cljs.core.truth_(or__19267__auto____$4))
{return or__19267__auto____$4;
} else
{var G__27912 = z;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27912) : p2.call(null,G__27912));
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__28024__delegate = function (x,y,z,args){var or__19267__auto__ = sp2.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return cljs.core.some(((function (or__19267__auto__){
return (function (p1__27648_SHARP_){var or__19267__auto____$1 = (function (){var G__27914 = p1__27648_SHARP_;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27914) : p1.call(null,G__27914));
})();if(cljs.core.truth_(or__19267__auto____$1))
{return or__19267__auto____$1;
} else
{var G__27915 = p1__27648_SHARP_;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27915) : p2.call(null,G__27915));
}
});})(or__19267__auto__))
,args);
}
};
var G__28024 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__28024__delegate.call(this,x,y,z,args);};
G__28024.cljs$lang$maxFixedArity = 3;
G__28024.cljs$lang$applyTo = (function (arglist__28025){
var x = cljs.core.first(arglist__28025);
arglist__28025 = cljs.core.next(arglist__28025);
var y = cljs.core.first(arglist__28025);
arglist__28025 = cljs.core.next(arglist__28025);
var z = cljs.core.first(arglist__28025);
var args = cljs.core.rest(arglist__28025);
return G__28024__delegate(x,y,z,args);
});
G__28024.cljs$core$IFn$_invoke$arity$variadic = G__28024__delegate;
return G__28024;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$core$IFn$_invoke$arity$0 = sp2__0;
sp2.cljs$core$IFn$_invoke$arity$1 = sp2__1;
sp2.cljs$core$IFn$_invoke$arity$2 = sp2__2;
sp2.cljs$core$IFn$_invoke$arity$3 = sp2__3;
sp2.cljs$core$IFn$_invoke$arity$variadic = sp2__4.cljs$core$IFn$_invoke$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){return (function() {
var sp3 = null;
var sp3__0 = (function (){return null;
});
var sp3__1 = (function (x){var or__19267__auto__ = (function (){var G__27961 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27961) : p1.call(null,G__27961));
})();if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (function (){var G__27963 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27963) : p2.call(null,G__27963));
})();if(cljs.core.truth_(or__19267__auto____$1))
{return or__19267__auto____$1;
} else
{var G__27964 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__27964) : p3.call(null,G__27964));
}
}
});
var sp3__2 = (function (x,y){var or__19267__auto__ = (function (){var G__27966 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27966) : p1.call(null,G__27966));
})();if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (function (){var G__27968 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27968) : p2.call(null,G__27968));
})();if(cljs.core.truth_(or__19267__auto____$1))
{return or__19267__auto____$1;
} else
{var or__19267__auto____$2 = (function (){var G__27970 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__27970) : p3.call(null,G__27970));
})();if(cljs.core.truth_(or__19267__auto____$2))
{return or__19267__auto____$2;
} else
{var or__19267__auto____$3 = (function (){var G__27972 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27972) : p1.call(null,G__27972));
})();if(cljs.core.truth_(or__19267__auto____$3))
{return or__19267__auto____$3;
} else
{var or__19267__auto____$4 = (function (){var G__27974 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27974) : p2.call(null,G__27974));
})();if(cljs.core.truth_(or__19267__auto____$4))
{return or__19267__auto____$4;
} else
{var G__27975 = y;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__27975) : p3.call(null,G__27975));
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){var or__19267__auto__ = (function (){var G__27977 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27977) : p1.call(null,G__27977));
})();if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (function (){var G__27979 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27979) : p2.call(null,G__27979));
})();if(cljs.core.truth_(or__19267__auto____$1))
{return or__19267__auto____$1;
} else
{var or__19267__auto____$2 = (function (){var G__27981 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__27981) : p3.call(null,G__27981));
})();if(cljs.core.truth_(or__19267__auto____$2))
{return or__19267__auto____$2;
} else
{var or__19267__auto____$3 = (function (){var G__27983 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27983) : p1.call(null,G__27983));
})();if(cljs.core.truth_(or__19267__auto____$3))
{return or__19267__auto____$3;
} else
{var or__19267__auto____$4 = (function (){var G__27985 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27985) : p2.call(null,G__27985));
})();if(cljs.core.truth_(or__19267__auto____$4))
{return or__19267__auto____$4;
} else
{var or__19267__auto____$5 = (function (){var G__27987 = y;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__27987) : p3.call(null,G__27987));
})();if(cljs.core.truth_(or__19267__auto____$5))
{return or__19267__auto____$5;
} else
{var or__19267__auto____$6 = (function (){var G__27989 = z;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27989) : p1.call(null,G__27989));
})();if(cljs.core.truth_(or__19267__auto____$6))
{return or__19267__auto____$6;
} else
{var or__19267__auto____$7 = (function (){var G__27991 = z;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27991) : p2.call(null,G__27991));
})();if(cljs.core.truth_(or__19267__auto____$7))
{return or__19267__auto____$7;
} else
{var G__27992 = z;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__27992) : p3.call(null,G__27992));
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__28026__delegate = function (x,y,z,args){var or__19267__auto__ = sp3.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return cljs.core.some(((function (or__19267__auto__){
return (function (p1__27649_SHARP_){var or__19267__auto____$1 = (function (){var G__27994 = p1__27649_SHARP_;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27994) : p1.call(null,G__27994));
})();if(cljs.core.truth_(or__19267__auto____$1))
{return or__19267__auto____$1;
} else
{var or__19267__auto____$2 = (function (){var G__27996 = p1__27649_SHARP_;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27996) : p2.call(null,G__27996));
})();if(cljs.core.truth_(or__19267__auto____$2))
{return or__19267__auto____$2;
} else
{var G__27997 = p1__27649_SHARP_;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__27997) : p3.call(null,G__27997));
}
}
});})(or__19267__auto__))
,args);
}
};
var G__28026 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__28026__delegate.call(this,x,y,z,args);};
G__28026.cljs$lang$maxFixedArity = 3;
G__28026.cljs$lang$applyTo = (function (arglist__28027){
var x = cljs.core.first(arglist__28027);
arglist__28027 = cljs.core.next(arglist__28027);
var y = cljs.core.first(arglist__28027);
arglist__28027 = cljs.core.next(arglist__28027);
var z = cljs.core.first(arglist__28027);
var args = cljs.core.rest(arglist__28027);
return G__28026__delegate(x,y,z,args);
});
G__28026.cljs$core$IFn$_invoke$arity$variadic = G__28026__delegate;
return G__28026;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$core$IFn$_invoke$arity$0 = sp3__0;
sp3.cljs$core$IFn$_invoke$arity$1 = sp3__1;
sp3.cljs$core$IFn$_invoke$arity$2 = sp3__2;
sp3.cljs$core$IFn$_invoke$arity$3 = sp3__3;
sp3.cljs$core$IFn$_invoke$arity$variadic = sp3__4.cljs$core$IFn$_invoke$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__28028__delegate = function (p1,p2,p3,ps){var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);return ((function (ps__$1){
return (function() {
var spn = null;
var spn__0 = (function (){return null;
});
var spn__1 = (function (x){return cljs.core.some(((function (ps__$1){
return (function (p1__27650_SHARP_){var G__28013 = x;return (p1__27650_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27650_SHARP_.cljs$core$IFn$_invoke$arity$1(G__28013) : p1__27650_SHARP_.call(null,G__28013));
});})(ps__$1))
,ps__$1);
});
var spn__2 = (function (x,y){return cljs.core.some(((function (ps__$1){
return (function (p1__27651_SHARP_){var or__19267__auto__ = (function (){var G__28015 = x;return (p1__27651_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27651_SHARP_.cljs$core$IFn$_invoke$arity$1(G__28015) : p1__27651_SHARP_.call(null,G__28015));
})();if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{var G__28016 = y;return (p1__27651_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27651_SHARP_.cljs$core$IFn$_invoke$arity$1(G__28016) : p1__27651_SHARP_.call(null,G__28016));
}
});})(ps__$1))
,ps__$1);
});
var spn__3 = (function (x,y,z){return cljs.core.some(((function (ps__$1){
return (function (p1__27652_SHARP_){var or__19267__auto__ = (function (){var G__28018 = x;return (p1__27652_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27652_SHARP_.cljs$core$IFn$_invoke$arity$1(G__28018) : p1__27652_SHARP_.call(null,G__28018));
})();if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (function (){var G__28020 = y;return (p1__27652_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27652_SHARP_.cljs$core$IFn$_invoke$arity$1(G__28020) : p1__27652_SHARP_.call(null,G__28020));
})();if(cljs.core.truth_(or__19267__auto____$1))
{return or__19267__auto____$1;
} else
{var G__28021 = z;return (p1__27652_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27652_SHARP_.cljs$core$IFn$_invoke$arity$1(G__28021) : p1__27652_SHARP_.call(null,G__28021));
}
}
});})(ps__$1))
,ps__$1);
});
var spn__4 = (function() { 
var G__28029__delegate = function (x,y,z,args){var or__19267__auto__ = spn.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return cljs.core.some(((function (or__19267__auto__,ps__$1){
return (function (p1__27653_SHARP_){return cljs.core.some(p1__27653_SHARP_,args);
});})(or__19267__auto__,ps__$1))
,ps__$1);
}
};
var G__28029 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__28029__delegate.call(this,x,y,z,args);};
G__28029.cljs$lang$maxFixedArity = 3;
G__28029.cljs$lang$applyTo = (function (arglist__28030){
var x = cljs.core.first(arglist__28030);
arglist__28030 = cljs.core.next(arglist__28030);
var y = cljs.core.first(arglist__28030);
arglist__28030 = cljs.core.next(arglist__28030);
var z = cljs.core.first(arglist__28030);
var args = cljs.core.rest(arglist__28030);
return G__28029__delegate(x,y,z,args);
});
G__28029.cljs$core$IFn$_invoke$arity$variadic = G__28029__delegate;
return G__28029;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$core$IFn$_invoke$arity$0 = spn__0;
spn.cljs$core$IFn$_invoke$arity$1 = spn__1;
spn.cljs$core$IFn$_invoke$arity$2 = spn__2;
spn.cljs$core$IFn$_invoke$arity$3 = spn__3;
spn.cljs$core$IFn$_invoke$arity$variadic = spn__4.cljs$core$IFn$_invoke$arity$variadic;
return spn;
})()
;})(ps__$1))
};
var G__28028 = function (p1,p2,p3,var_args){
var ps = null;if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__28028__delegate.call(this,p1,p2,p3,ps);};
G__28028.cljs$lang$maxFixedArity = 3;
G__28028.cljs$lang$applyTo = (function (arglist__28031){
var p1 = cljs.core.first(arglist__28031);
arglist__28031 = cljs.core.next(arglist__28031);
var p2 = cljs.core.first(arglist__28031);
arglist__28031 = cljs.core.next(arglist__28031);
var p3 = cljs.core.first(arglist__28031);
var ps = cljs.core.rest(arglist__28031);
return G__28028__delegate(p1,p2,p3,ps);
});
G__28028.cljs$core$IFn$_invoke$arity$variadic = G__28028__delegate;
return G__28028;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$core$IFn$_invoke$arity$1 = some_fn__1;
some_fn.cljs$core$IFn$_invoke$arity$2 = some_fn__2;
some_fn.cljs$core$IFn$_invoke$arity$3 = some_fn__3;
some_fn.cljs$core$IFn$_invoke$arity$variadic = some_fn__4.cljs$core$IFn$_invoke$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to
* the set of first items of each coll, followed by applying f to the
* set of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments. Returns a transducer when
* no collection is provided.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__1 = (function (f){return (function (f1){return (function() {
var G__28086 = null;
var G__28086__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__28086__1 = (function (result){var G__28072 = result;return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__28072) : f1.call(null,G__28072));
});
var G__28086__2 = (function (result,input){var G__28073 = result;var G__28074 = (function (){var G__28075 = input;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28075) : f.call(null,G__28075));
})();return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__28073,G__28074) : f1.call(null,G__28073,G__28074));
});
var G__28086__3 = (function() { 
var G__28087__delegate = function (result,input,inputs){var G__28076 = result;var G__28077 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,input,inputs);return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__28076,G__28077) : f1.call(null,G__28076,G__28077));
};
var G__28087 = function (result,input,var_args){
var inputs = null;if (arguments.length > 2) {
  inputs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__28087__delegate.call(this,result,input,inputs);};
G__28087.cljs$lang$maxFixedArity = 2;
G__28087.cljs$lang$applyTo = (function (arglist__28088){
var result = cljs.core.first(arglist__28088);
arglist__28088 = cljs.core.next(arglist__28088);
var input = cljs.core.first(arglist__28088);
var inputs = cljs.core.rest(arglist__28088);
return G__28087__delegate(result,input,inputs);
});
G__28087.cljs$core$IFn$_invoke$arity$variadic = G__28087__delegate;
return G__28087;
})()
;
G__28086 = function(result,input,var_args){
var inputs = var_args;
switch(arguments.length){
case 0:
return G__28086__0.call(this);
case 1:
return G__28086__1.call(this,result);
case 2:
return G__28086__2.call(this,result,input);
default:
return G__28086__3.cljs$core$IFn$_invoke$arity$variadic(result,input, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28086.cljs$lang$maxFixedArity = 2;
G__28086.cljs$lang$applyTo = G__28086__3.cljs$lang$applyTo;
G__28086.cljs$core$IFn$_invoke$arity$0 = G__28086__0;
G__28086.cljs$core$IFn$_invoke$arity$1 = G__28086__1;
G__28086.cljs$core$IFn$_invoke$arity$2 = G__28086__2;
G__28086.cljs$core$IFn$_invoke$arity$variadic = G__28086__3.cljs$core$IFn$_invoke$arity$variadic;
return G__28086;
})()
});
});
var map__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__20882__auto___28089 = size;var i_28090 = (0);while(true){
if((i_28090 < n__20882__auto___28089))
{cljs.core.chunk_append(b,(function (){var G__28078 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_28090);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28078) : f.call(null,G__28078));
})());
{
var G__28091 = (i_28090 + (1));
i_28090 = G__28091;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else
{return cljs.core.cons((function (){var G__28079 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28079) : f.call(null,G__28079));
})(),map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s)));
}
} else
{return null;
}
}),null,null));
});
var map__3 = (function (f,c1,c2){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq(c1);var s2 = cljs.core.seq(c2);if((s1) && (s2))
{return cljs.core.cons((function (){var G__28080 = cljs.core.first(s1);var G__28081 = cljs.core.first(s2);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28080,G__28081) : f.call(null,G__28080,G__28081));
})(),map.cljs$core$IFn$_invoke$arity$3(f,cljs.core.rest(s1),cljs.core.rest(s2)));
} else
{return null;
}
}),null,null));
});
var map__4 = (function (f,c1,c2,c3){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq(c1);var s2 = cljs.core.seq(c2);var s3 = cljs.core.seq(c3);if((s1) && (s2) && (s3))
{return cljs.core.cons((function (){var G__28082 = cljs.core.first(s1);var G__28083 = cljs.core.first(s2);var G__28084 = cljs.core.first(s3);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__28082,G__28083,G__28084) : f.call(null,G__28082,G__28083,G__28084));
})(),map.cljs$core$IFn$_invoke$arity$4(f,cljs.core.rest(s1),cljs.core.rest(s2),cljs.core.rest(s3)));
} else
{return null;
}
}),null,null));
});
var map__5 = (function() { 
var G__28092__delegate = function (f,c1,c2,c3,colls){var step = (function step(cs){return (new cljs.core.LazySeq(null,(function (){var ss = map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cs);if(cljs.core.every_QMARK_(cljs.core.identity,ss))
{return cljs.core.cons(map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),step(map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else
{return null;
}
}),null,null));
});return map.cljs$core$IFn$_invoke$arity$2(((function (step){
return (function (p1__28032_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,p1__28032_SHARP_);
});})(step))
,step(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c3,cljs.core.array_seq([c2,c1], 0))));
};
var G__28092 = function (f,c1,c2,c3,var_args){
var colls = null;if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__28092__delegate.call(this,f,c1,c2,c3,colls);};
G__28092.cljs$lang$maxFixedArity = 4;
G__28092.cljs$lang$applyTo = (function (arglist__28093){
var f = cljs.core.first(arglist__28093);
arglist__28093 = cljs.core.next(arglist__28093);
var c1 = cljs.core.first(arglist__28093);
arglist__28093 = cljs.core.next(arglist__28093);
var c2 = cljs.core.first(arglist__28093);
arglist__28093 = cljs.core.next(arglist__28093);
var c3 = cljs.core.first(arglist__28093);
var colls = cljs.core.rest(arglist__28093);
return G__28092__delegate(f,c1,c2,c3,colls);
});
G__28092.cljs$core$IFn$_invoke$arity$variadic = G__28092__delegate;
return G__28092;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return map__1.call(this,f);
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$core$IFn$_invoke$arity$1 = map__1;
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
map.cljs$core$IFn$_invoke$arity$4 = map__4;
map.cljs$core$IFn$_invoke$arity$variadic = map__5.cljs$core$IFn$_invoke$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.  Returns a stateful transducer when
* no collection is provided.
*/
cljs.core.take = (function() {
var take = null;
var take__1 = (function (n){return (function (f1){var na = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(n);return ((function (na){
return (function() {
var G__28102 = null;
var G__28102__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__28102__1 = (function (result){var G__28099 = result;return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__28099) : f1.call(null,G__28099));
});
var G__28102__2 = (function (result,input){var n__$1 = cljs.core.deref(na);var nn = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(na,cljs.core.dec);var result__$1 = (((n__$1 > (0)))?(function (){var G__28100 = result;var G__28101 = input;return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__28100,G__28101) : f1.call(null,G__28100,G__28101));
})():result);if(!((nn > (0))))
{return cljs.core.reduced(result__$1);
} else
{return result__$1;
}
});
G__28102 = function(result,input){
switch(arguments.length){
case 0:
return G__28102__0.call(this);
case 1:
return G__28102__1.call(this,result);
case 2:
return G__28102__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28102.cljs$core$IFn$_invoke$arity$0 = G__28102__0;
G__28102.cljs$core$IFn$_invoke$arity$1 = G__28102__1;
G__28102.cljs$core$IFn$_invoke$arity$2 = G__28102__2;
return G__28102;
})()
;})(na))
});
});
var take__2 = (function (n,coll){return (new cljs.core.LazySeq(null,(function (){if((n > (0)))
{var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;return cljs.core.cons(cljs.core.first(s),take.cljs$core$IFn$_invoke$arity$2((n - (1)),cljs.core.rest(s)));
} else
{return null;
}
} else
{return null;
}
}),null,null));
});
take = function(n,coll){
switch(arguments.length){
case 1:
return take__1.call(this,n);
case 2:
return take__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$1 = take__1;
take.cljs$core$IFn$_invoke$arity$2 = take__2;
return take;
})()
;
/**
* Returns a lazy sequence of all but the first n items in coll.
* Returns a stateful transducer when no collection is provided.
*/
cljs.core.drop = (function() {
var drop = null;
var drop__1 = (function (n){return (function (f1){var na = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(n);return ((function (na){
return (function() {
var G__28109 = null;
var G__28109__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__28109__1 = (function (result){var G__28106 = result;return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__28106) : f1.call(null,G__28106));
});
var G__28109__2 = (function (result,input){var n__$1 = cljs.core.deref(na);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(na,cljs.core.dec);
if((n__$1 > (0)))
{return result;
} else
{var G__28107 = result;var G__28108 = input;return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__28107,G__28108) : f1.call(null,G__28107,G__28108));
}
});
G__28109 = function(result,input){
switch(arguments.length){
case 0:
return G__28109__0.call(this);
case 1:
return G__28109__1.call(this,result);
case 2:
return G__28109__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28109.cljs$core$IFn$_invoke$arity$0 = G__28109__0;
G__28109.cljs$core$IFn$_invoke$arity$1 = G__28109__1;
G__28109.cljs$core$IFn$_invoke$arity$2 = G__28109__2;
return G__28109;
})()
;})(na))
});
});
var drop__2 = (function (n,coll){var step = (function (n__$1,coll__$1){while(true){
var s = cljs.core.seq(coll__$1);if(((n__$1 > (0))) && (s))
{{
var G__28110 = (n__$1 - (1));
var G__28111 = cljs.core.rest(s);
n__$1 = G__28110;
coll__$1 = G__28111;
continue;
}
} else
{return s;
}
break;
}
});return (new cljs.core.LazySeq(null,((function (step){
return (function (){return step(n,coll);
});})(step))
,null,null));
});
drop = function(n,coll){
switch(arguments.length){
case 1:
return drop__1.call(this,n);
case 2:
return drop__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop.cljs$core$IFn$_invoke$arity$1 = drop__1;
drop.cljs$core$IFn$_invoke$arity$2 = drop__2;
return drop;
})()
;
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){return drop_last.cljs$core$IFn$_invoke$arity$2((1),s);
});
var drop_last__2 = (function (n,s){return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,_){return x;
}),s,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_last.cljs$core$IFn$_invoke$arity$1 = drop_last__1;
drop_last.cljs$core$IFn$_invoke$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){var s = cljs.core.seq(coll);var lead = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,coll));while(true){
if(lead)
{{
var G__28114 = cljs.core.next(s);
var G__28115 = cljs.core.next(lead);
s = G__28114;
lead = G__28115;
continue;
}
} else
{return s;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the
* first item for which (pred item) returns logical false.  Returns a
* stateful transducer when no collection is provided.
*/
cljs.core.drop_while = (function() {
var drop_while = null;
var drop_while__1 = (function (pred){return (function (f1){var da = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);return ((function (da){
return (function() {
var G__28128 = null;
var G__28128__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__28128__1 = (function (result){var G__28122 = result;return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__28122) : f1.call(null,G__28122));
});
var G__28128__2 = (function (result,input){var drop_QMARK_ = cljs.core.deref(da);if(cljs.core.truth_((function (){var and__19255__auto__ = drop_QMARK_;if(cljs.core.truth_(and__19255__auto__))
{var G__28123 = input;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__28123) : pred.call(null,G__28123));
} else
{return and__19255__auto__;
}
})()))
{return result;
} else
{cljs.core.reset_BANG_(da,null);
var G__28124 = result;var G__28125 = input;return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__28124,G__28125) : f1.call(null,G__28124,G__28125));
}
});
G__28128 = function(result,input){
switch(arguments.length){
case 0:
return G__28128__0.call(this);
case 1:
return G__28128__1.call(this,result);
case 2:
return G__28128__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28128.cljs$core$IFn$_invoke$arity$0 = G__28128__0;
G__28128.cljs$core$IFn$_invoke$arity$1 = G__28128__1;
G__28128.cljs$core$IFn$_invoke$arity$2 = G__28128__2;
return G__28128;
})()
;})(da))
});
});
var drop_while__2 = (function (pred,coll){var step = (function (pred__$1,coll__$1){while(true){
var s = cljs.core.seq(coll__$1);if(cljs.core.truth_((function (){var and__19255__auto__ = s;if(and__19255__auto__)
{var G__28127 = cljs.core.first(s);return (pred__$1.cljs$core$IFn$_invoke$arity$1 ? pred__$1.cljs$core$IFn$_invoke$arity$1(G__28127) : pred__$1.call(null,G__28127));
} else
{return and__19255__auto__;
}
})()))
{{
var G__28129 = pred__$1;
var G__28130 = cljs.core.rest(s);
pred__$1 = G__28129;
coll__$1 = G__28130;
continue;
}
} else
{return s;
}
break;
}
});return (new cljs.core.LazySeq(null,((function (step){
return (function (){return step(pred,coll);
});})(step))
,null,null));
});
drop_while = function(pred,coll){
switch(arguments.length){
case 1:
return drop_while__1.call(this,pred);
case 2:
return drop_while__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_while.cljs$core$IFn$_invoke$arity$1 = drop_while__1;
drop_while.cljs$core$IFn$_invoke$arity$2 = drop_while__2;
return drop_while;
})()
;
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(s,cycle(s));
} else
{return null;
}
}),null,null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,coll),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,coll)], null);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(x,repeat.cljs$core$IFn$_invoke$arity$1(x));
}),null,null));
});
var repeat__2 = (function (n,x){return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,repeat.cljs$core$IFn$_invoke$arity$1(x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeat.cljs$core$IFn$_invoke$arity$1 = repeat__1;
repeat.cljs$core$IFn$_invoke$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),repeatedly.cljs$core$IFn$_invoke$arity$1(f));
}),null,null));
});
var repeatedly__2 = (function (n,f){return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,repeatedly.cljs$core$IFn$_invoke$arity$1(f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeatedly.cljs$core$IFn$_invoke$arity$1 = repeatedly__1;
repeatedly.cljs$core$IFn$_invoke$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){return cljs.core.cons(x,(new cljs.core.LazySeq(null,(function (){return iterate(f,(function (){var G__28139 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28139) : f.call(null,G__28139));
})());
}),null,null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq(c1);var s2 = cljs.core.seq(c2);if((s1) && (s2))
{return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else
{return null;
}
}),null,null));
});
var interleave__3 = (function() { 
var G__28142__delegate = function (c1,c2,colls){return (new cljs.core.LazySeq(null,(function (){var ss = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.array_seq([c1], 0)));if(cljs.core.every_QMARK_(cljs.core.identity,ss))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(interleave,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else
{return null;
}
}),null,null));
};
var G__28142 = function (c1,c2,var_args){
var colls = null;if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__28142__delegate.call(this,c1,c2,colls);};
G__28142.cljs$lang$maxFixedArity = 2;
G__28142.cljs$lang$applyTo = (function (arglist__28143){
var c1 = cljs.core.first(arglist__28143);
arglist__28143 = cljs.core.next(arglist__28143);
var c2 = cljs.core.first(arglist__28143);
var colls = cljs.core.rest(arglist__28143);
return G__28142__delegate(c1,c2,colls);
});
G__28142.cljs$core$IFn$_invoke$arity$variadic = G__28142__delegate;
return G__28142;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$core$IFn$_invoke$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$core$IFn$_invoke$arity$2 = interleave__2;
interleave.cljs$core$IFn$_invoke$arity$variadic = interleave__3.cljs$core$IFn$_invoke$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){var cat = (function cat(coll,colls__$1){return (new cljs.core.LazySeq(null,(function (){var temp__4124__auto__ = cljs.core.seq(coll);if(temp__4124__auto__)
{var coll__$1 = temp__4124__auto__;return cljs.core.cons(cljs.core.first(coll__$1),cat(cljs.core.rest(coll__$1),colls__$1));
} else
{if(cljs.core.seq(colls__$1))
{return cat(cljs.core.first(colls__$1),cljs.core.rest(colls__$1));
} else
{return null;
}
}
}),null,null));
});return cat(null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection. Returns
* a transducer when no collections are provided
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__1 = (function (f){return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),cljs.core.cat);
});
var mapcat__2 = (function() { 
var G__28152__delegate = function (f,colls){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,f,colls));
};
var G__28152 = function (f,var_args){
var colls = null;if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__28152__delegate.call(this,f,colls);};
G__28152.cljs$lang$maxFixedArity = 1;
G__28152.cljs$lang$applyTo = (function (arglist__28153){
var f = cljs.core.first(arglist__28153);
var colls = cljs.core.rest(arglist__28153);
return G__28152__delegate(f,colls);
});
G__28152.cljs$core$IFn$_invoke$arity$variadic = G__28152__delegate;
return G__28152;
})()
;
mapcat = function(f,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return mapcat__1.call(this,f);
default:
return mapcat__2.cljs$core$IFn$_invoke$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat.cljs$lang$maxFixedArity = 1;
mapcat.cljs$lang$applyTo = mapcat__2.cljs$lang$applyTo;
mapcat.cljs$core$IFn$_invoke$arity$1 = mapcat__1;
mapcat.cljs$core$IFn$_invoke$arity$variadic = mapcat__2.cljs$core$IFn$_invoke$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.filter = (function() {
var filter = null;
var filter__1 = (function (pred){return (function (f1){return (function() {
var G__28172 = null;
var G__28172__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__28172__1 = (function (result){var G__28166 = result;return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__28166) : f1.call(null,G__28166));
});
var G__28172__2 = (function (result,input){if(cljs.core.truth_((function (){var G__28167 = input;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__28167) : pred.call(null,G__28167));
})()))
{var G__28168 = result;var G__28169 = input;return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__28168,G__28169) : f1.call(null,G__28168,G__28169));
} else
{return result;
}
});
G__28172 = function(result,input){
switch(arguments.length){
case 0:
return G__28172__0.call(this);
case 1:
return G__28172__1.call(this,result);
case 2:
return G__28172__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28172.cljs$core$IFn$_invoke$arity$0 = G__28172__0;
G__28172.cljs$core$IFn$_invoke$arity$1 = G__28172__1;
G__28172.cljs$core$IFn$_invoke$arity$2 = G__28172__2;
return G__28172;
})()
});
});
var filter__2 = (function (pred,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__20882__auto___28173 = size;var i_28174 = (0);while(true){
if((i_28174 < n__20882__auto___28173))
{if(cljs.core.truth_((function (){var G__28170 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_28174);return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__28170) : pred.call(null,G__28170));
})()))
{cljs.core.chunk_append(b,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_28174));
} else
{}
{
var G__28175 = (i_28174 + (1));
i_28174 = G__28175;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),filter.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.chunk_rest(s)));
} else
{var f = cljs.core.first(s);var r = cljs.core.rest(s);if(cljs.core.truth_((function (){var G__28171 = f;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__28171) : pred.call(null,G__28171));
})()))
{return cljs.core.cons(f,filter.cljs$core$IFn$_invoke$arity$2(pred,r));
} else
{return filter.cljs$core$IFn$_invoke$arity$2(pred,r);
}
}
} else
{return null;
}
}),null,null));
});
filter = function(pred,coll){
switch(arguments.length){
case 1:
return filter__1.call(this,pred);
case 2:
return filter__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter.cljs$core$IFn$_invoke$arity$1 = filter__1;
filter.cljs$core$IFn$_invoke$arity$2 = filter__2;
return filter;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.remove = (function() {
var remove = null;
var remove__1 = (function (pred){return cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.complement(pred));
});
var remove__2 = (function (pred,coll){return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(pred),coll);
});
remove = function(pred,coll){
switch(arguments.length){
case 1:
return remove__1.call(this,pred);
case 2:
return remove__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove.cljs$core$IFn$_invoke$arity$1 = remove__1;
remove.cljs$core$IFn$_invoke$arity$2 = remove__2;
return remove;
})()
;
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){var walk = (function walk(node){return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(node,(cljs.core.truth_((function (){var G__28182 = node;return (branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(G__28182) : branch_QMARK_.call(null,G__28182));
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(walk,cljs.core.array_seq([(function (){var G__28183 = node;return (children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(G__28183) : children.call(null,G__28183));
})()], 0)):null));
}),null,null));
});return walk(root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28184_SHARP_){return !(cljs.core.sequential_QMARK_(p1__28184_SHARP_));
}),cljs.core.rest(cljs.core.tree_seq(cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined. A transducer may be supplied.
*/
cljs.core.into = (function() {
var into = null;
var into__2 = (function (to,from){if(!((to == null)))
{if((function (){var G__28187 = to;if(G__28187)
{var bit__20549__auto__ = (G__28187.cljs$lang$protocol_mask$partition1$ & (4));if((bit__20549__auto__) || (G__28187.cljs$core$IEditableCollection$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj_BANG_,cljs.core.transient$(to),from)),cljs.core.meta(to));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,to,from);
}
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,from);
}
});
var into__3 = (function (to,xform,from){if((function (){var G__28188 = to;if(G__28188)
{var bit__20549__auto__ = (G__28188.cljs$lang$protocol_mask$partition1$ & (4));if((bit__20549__auto__) || (G__28188.cljs$core$IEditableCollection$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj_BANG_,cljs.core.transient$(to),from)),cljs.core.meta(to));
} else
{return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj,to,from);
}
});
into = function(to,xform,from){
switch(arguments.length){
case 2:
return into__2.call(this,to,xform);
case 3:
return into__3.call(this,to,xform,from);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into.cljs$core$IFn$_invoke$arity$2 = into__2;
into.cljs$core$IFn$_invoke$arity$3 = into__3;
return into;
})()
;
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__28190 = o;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28190) : f.call(null,G__28190));
})());
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$4(f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__28191__delegate = function (f,c1,c2,c3,colls){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map,f,c1,c2,c3,cljs.core.array_seq([colls], 0)));
};
var G__28191 = function (f,c1,c2,c3,var_args){
var colls = null;if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__28191__delegate.call(this,f,c1,c2,c3,colls);};
G__28191.cljs$lang$maxFixedArity = 4;
G__28191.cljs$lang$applyTo = (function (arglist__28192){
var f = cljs.core.first(arglist__28192);
arglist__28192 = cljs.core.next(arglist__28192);
var c1 = cljs.core.first(arglist__28192);
arglist__28192 = cljs.core.next(arglist__28192);
var c2 = cljs.core.first(arglist__28192);
arglist__28192 = cljs.core.next(arglist__28192);
var c3 = cljs.core.first(arglist__28192);
var colls = cljs.core.rest(arglist__28192);
return G__28191__delegate(f,c1,c2,c3,colls);
});
G__28191.cljs$core$IFn$_invoke$arity$variadic = G__28191__delegate;
return G__28191;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$core$IFn$_invoke$arity$2 = mapv__2;
mapv.cljs$core$IFn$_invoke$arity$3 = mapv__3;
mapv.cljs$core$IFn$_invoke$arity$4 = mapv__4;
mapv.cljs$core$IFn$_invoke$arity$variadic = mapv__5.cljs$core$IFn$_invoke$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){if(cljs.core.truth_((function (){var G__28194 = o;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__28194) : pred.call(null,G__28194));
})()))
{return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,o);
} else
{return v;
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){return partition.cljs$core$IFn$_invoke$arity$3(n,n,coll);
});
var partition__3 = (function (n,step,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;var p = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s);if((n === cljs.core.count(p)))
{return cljs.core.cons(p,partition.cljs$core$IFn$_invoke$arity$3(n,step,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else
{return null;
}
} else
{return null;
}
}),null,null));
});
var partition__4 = (function (n,step,pad,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;var p = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s);if((n === cljs.core.count(p)))
{return cljs.core.cons(p,partition.cljs$core$IFn$_invoke$arity$4(n,step,pad,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else
{return cljs.core._conj(cljs.core.List.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p,pad)));
}
} else
{return null;
}
}),null,null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
partition.cljs$core$IFn$_invoke$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){return get_in.cljs$core$IFn$_invoke$arity$3(m,ks,null);
});
var get_in__3 = (function (m,ks,not_found){var sentinel = cljs.core.lookup_sentinel;var m__$1 = m;var ks__$1 = cljs.core.seq(ks);while(true){
if(ks__$1)
{if(!((function (){var G__28209 = m__$1;if(G__28209)
{var bit__20565__auto__ = (G__28209.cljs$lang$protocol_mask$partition0$ & (256));if((bit__20565__auto__) || (G__28209.cljs$core$ILookup$))
{return true;
} else
{if((!G__28209.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__28209);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__28209);
}
})()))
{return not_found;
} else
{var m__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core.first(ks__$1),sentinel);if((sentinel === m__$2))
{return not_found;
} else
{{
var G__28210 = sentinel;
var G__28211 = m__$2;
var G__28212 = cljs.core.next(ks__$1);
sentinel = G__28210;
m__$1 = G__28211;
ks__$1 = G__28212;
continue;
}
}
}
} else
{return m__$1;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_in.cljs$core$IFn$_invoke$arity$2 = get_in__2;
get_in.cljs$core$IFn$_invoke$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__28213,v){var vec__28218 = p__28213;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28218,(0),null);var ks = cljs.core.nthnext(vec__28218,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,assoc_in(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,v));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() {
var update_in = null;
var update_in__3 = (function (m,p__28219,f){var vec__28257 = p__28219;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28257,(0),null);var ks = cljs.core.nthnext(vec__28257,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__28258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28258) : f.call(null,G__28258));
})());
}
});
var update_in__4 = (function (m,p__28220,f,a){var vec__28259 = p__28220;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28259,(0),null);var ks = cljs.core.nthnext(vec__28259,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__28260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__28261 = a;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28260,G__28261) : f.call(null,G__28260,G__28261));
})());
}
});
var update_in__5 = (function (m,p__28221,f,a,b){var vec__28262 = p__28221;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28262,(0),null);var ks = cljs.core.nthnext(vec__28262,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__28263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__28264 = a;var G__28265 = b;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__28263,G__28264,G__28265) : f.call(null,G__28263,G__28264,G__28265));
})());
}
});
var update_in__6 = (function (m,p__28222,f,a,b,c){var vec__28266 = p__28222;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28266,(0),null);var ks = cljs.core.nthnext(vec__28266,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$6(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b,c));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__28267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__28268 = a;var G__28269 = b;var G__28270 = c;return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__28267,G__28268,G__28269,G__28270) : f.call(null,G__28267,G__28268,G__28269,G__28270));
})());
}
});
var update_in__7 = (function() { 
var G__28272__delegate = function (m,p__28223,f,a,b,c,args){var vec__28271 = p__28223;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28271,(0),null);var ks = cljs.core.nthnext(vec__28271,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(update_in,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,cljs.core.array_seq([b,c,args], 0)));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),a,b,c,cljs.core.array_seq([args], 0)));
}
};
var G__28272 = function (m,p__28223,f,a,b,c,var_args){
var args = null;if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return G__28272__delegate.call(this,m,p__28223,f,a,b,c,args);};
G__28272.cljs$lang$maxFixedArity = 6;
G__28272.cljs$lang$applyTo = (function (arglist__28273){
var m = cljs.core.first(arglist__28273);
arglist__28273 = cljs.core.next(arglist__28273);
var p__28223 = cljs.core.first(arglist__28273);
arglist__28273 = cljs.core.next(arglist__28273);
var f = cljs.core.first(arglist__28273);
arglist__28273 = cljs.core.next(arglist__28273);
var a = cljs.core.first(arglist__28273);
arglist__28273 = cljs.core.next(arglist__28273);
var b = cljs.core.first(arglist__28273);
arglist__28273 = cljs.core.next(arglist__28273);
var c = cljs.core.first(arglist__28273);
var args = cljs.core.rest(arglist__28273);
return G__28272__delegate(m,p__28223,f,a,b,c,args);
});
G__28272.cljs$core$IFn$_invoke$arity$variadic = G__28272__delegate;
return G__28272;
})()
;
update_in = function(m,p__28223,f,a,b,c,var_args){
var args = var_args;
switch(arguments.length){
case 3:
return update_in__3.call(this,m,p__28223,f);
case 4:
return update_in__4.call(this,m,p__28223,f,a);
case 5:
return update_in__5.call(this,m,p__28223,f,a,b);
case 6:
return update_in__6.call(this,m,p__28223,f,a,b,c);
default:
return update_in__7.cljs$core$IFn$_invoke$arity$variadic(m,p__28223,f,a,b,c, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_in.cljs$lang$maxFixedArity = 6;
update_in.cljs$lang$applyTo = update_in__7.cljs$lang$applyTo;
update_in.cljs$core$IFn$_invoke$arity$3 = update_in__3;
update_in.cljs$core$IFn$_invoke$arity$4 = update_in__4;
update_in.cljs$core$IFn$_invoke$arity$5 = update_in__5;
update_in.cljs$core$IFn$_invoke$arity$6 = update_in__6;
update_in.cljs$core$IFn$_invoke$arity$variadic = update_in__7.cljs$core$IFn$_invoke$arity$variadic;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorStr = "cljs.core/VectorNode";
cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__20377__auto__,writer__20378__auto__,opts__20379__auto__){return cljs.core._write(writer__20378__auto__,"cljs.core/VectorNode");
});
cljs.core.__GT_VectorNode = (function __GT_VectorNode(edit,arr){return (new cljs.core.VectorNode(edit,arr));
});
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){return (new cljs.core.VectorNode(edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
});
cljs.core.pv_aget = (function pv_aget(node,idx){return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){return (new cljs.core.VectorNode(node.edit,cljs.core.aclone(node.arr)));
});
cljs.core.tail_off = (function tail_off(pv){var cnt = pv.cnt;if((cnt < (32)))
{return (0);
} else
{return (((cnt - (1)) >>> (5)) << (5));
}
});
cljs.core.new_path = (function new_path(edit,level,node){var ll = level;var ret = node;while(true){
if((ll === (0)))
{return ret;
} else
{var embed = ret;var r = cljs.core.pv_fresh_node(edit);var _ = cljs.core.pv_aset(r,(0),embed);{
var G__28274 = (ll - (5));
var G__28275 = r;
ll = G__28274;
ret = G__28275;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){var ret = cljs.core.pv_clone_node(parent);var subidx = (((pv.cnt - (1)) >>> level) & (31));if(((5) === level))
{cljs.core.pv_aset(ret,subidx,tailnode);
return ret;
} else
{var child = cljs.core.pv_aget(parent,subidx);if(!((child == null)))
{var node_to_insert = push_tail(pv,(level - (5)),child,tailnode);cljs.core.pv_aset(ret,subidx,node_to_insert);
return ret;
} else
{var node_to_insert = cljs.core.new_path(null,(level - (5)),tailnode);cljs.core.pv_aset(ret,subidx,node_to_insert);
return ret;
}
}
});
cljs.core.vector_index_out_of_bounds = (function vector_index_out_of_bounds(i,cnt){throw (new Error(("No item "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)+" in vector of length "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnt))));
});
cljs.core.first_array_for_longvec = (function first_array_for_longvec(pv){var node = pv.root;var level = pv.shift;while(true){
if((level > (0)))
{{
var G__28280 = cljs.core.pv_aget(node,(0));
var G__28281 = (level - (5));
node = G__28280;
level = G__28281;
continue;
}
} else
{return node.arr;
}
break;
}
});
cljs.core.unchecked_array_for = (function unchecked_array_for(pv,i){if((i >= cljs.core.tail_off(pv)))
{return pv.tail;
} else
{var node = pv.root;var level = pv.shift;while(true){
if((level > (0)))
{{
var G__28282 = cljs.core.pv_aget(node,((i >>> level) & (31)));
var G__28283 = (level - (5));
node = G__28282;
level = G__28283;
continue;
}
} else
{return node.arr;
}
break;
}
}
});
cljs.core.array_for = (function array_for(pv,i){if((((0) <= i)) && ((i < pv.cnt)))
{return cljs.core.unchecked_array_for(pv,i);
} else
{return cljs.core.vector_index_out_of_bounds(i,pv.cnt);
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){var ret = cljs.core.pv_clone_node(node);if((level === (0)))
{cljs.core.pv_aset(ret,(i & (31)),val);
return ret;
} else
{var subidx = ((i >>> level) & (31));cljs.core.pv_aset(ret,subidx,do_assoc(pv,(level - (5)),cljs.core.pv_aget(node,subidx),i,val));
return ret;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){var subidx = (((pv.cnt - (2)) >>> level) & (31));if((level > (5)))
{var new_child = pop_tail(pv,(level - (5)),cljs.core.pv_aget(node,subidx));if(((new_child == null)) && ((subidx === (0))))
{return null;
} else
{var ret = cljs.core.pv_clone_node(node);cljs.core.pv_aset(ret,subidx,new_child);
return ret;
}
} else
{if((subidx === (0)))
{return null;
} else
{var ret = cljs.core.pv_clone_node(node);cljs.core.pv_aset(ret,subidx,null);
return ret;

}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorStr = "cljs.core/PersistentVector";
cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentVector.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if(typeof k === 'number')
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){var self__ = this;
var v__$1 = this;var step_init = [(0),init];var i = (0);while(true){
if((i < self__.cnt))
{var arr = cljs.core.unchecked_array_for(v__$1,i);var len = arr.length;var init__$1 = (function (){var j = (0);var init__$1 = (step_init[(1)]);while(true){
if((j < len))
{var init__$2 = (function (){var G__28293 = init__$1;var G__28294 = (j + i);var G__28295 = (arr[j]);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__28293,G__28294,G__28295) : f.call(null,G__28293,G__28294,G__28295));
})();if(cljs.core.reduced_QMARK_(init__$2))
{return init__$2;
} else
{{
var G__28305 = (j + (1));
var G__28306 = init__$2;
j = G__28305;
init__$1 = G__28306;
continue;
}
}
} else
{(step_init[(0)] = len);
(step_init[(1)] = init__$1);
return init__$1;
}
break;
}
})();if(cljs.core.reduced_QMARK_(init__$1))
{var G__28296 = init__$1;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28296) : cljs.core.deref.call(null,G__28296));
} else
{{
var G__28307 = (i + (step_init[(0)]));
i = G__28307;
continue;
}
}
} else
{return (step_init[(1)]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;return (cljs.core.array_for(coll__$1,n)[(n & (31))]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;if((((0) <= n)) && ((n < self__.cnt)))
{return (cljs.core.unchecked_array_for(coll__$1,n)[(n & (31))]);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){var self__ = this;
var coll__$1 = this;if((((0) <= n)) && ((n < self__.cnt)))
{if((cljs.core.tail_off(coll__$1) <= n))
{var new_tail = cljs.core.aclone(self__.tail);(new_tail[(n & (31))] = val);
return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,new_tail,null));
} else
{return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,cljs.core.do_assoc(coll__$1,self__.shift,self__.root,n,val),self__.tail,null));
}
} else
{if((n === self__.cnt))
{return cljs.core._conj(coll__$1,val);
} else
{throw (new Error(("Index "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)+" out of bounds  [0,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.cnt)+"]")));

}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(0));
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(1));
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(self__.cnt - (1)));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt === (0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(((1) === self__.cnt))
{return cljs.core._with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
} else
{if(((1) < (self__.cnt - cljs.core.tail_off(coll__$1))))
{return (new cljs.core.PersistentVector(self__.meta,(self__.cnt - (1)),self__.shift,self__.root,self__.tail.slice((0),(-1)),null));
} else
{var new_tail = cljs.core.unchecked_array_for(coll__$1,(self__.cnt - (2)));var nr = cljs.core.pop_tail(coll__$1,self__.shift,self__.root);var new_root = (((nr == null))?cljs.core.PersistentVector.EMPTY_NODE:nr);var cnt_1 = (self__.cnt - (1));if((((5) < self__.shift)) && ((cljs.core.pv_aget(new_root,(1)) == null)))
{return (new cljs.core.PersistentVector(self__.meta,cnt_1,(self__.shift - (5)),cljs.core.pv_aget(new_root,(0)),new_tail,null));
} else
{return (new cljs.core.PersistentVector(self__.meta,cnt_1,self__.shift,new_root,new_tail,null));
}

}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{return (new cljs.core.RSeq(coll__$1,(self__.cnt - (1)),null));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientVector(self__.cnt,self__.shift,(function (){var G__28297 = self__.root;return (cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1(G__28297) : cljs.core.tv_editable_root.call(null,G__28297));
})(),(function (){var G__28298 = self__.tail;return (cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1(G__28298) : cljs.core.tv_editable_tail.call(null,G__28298));
})()));
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){var self__ = this;
var v__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(v__$1,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){var self__ = this;
var v__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(v__$1,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;if(typeof k === 'number')
{return cljs.core._assoc_n(coll__$1,k,v);
} else
{throw (new Error("Vector's key for assoc must be a number."));
}
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt === (0)))
{return null;
} else
{if((self__.cnt <= (32)))
{return (new cljs.core.IndexedSeq(self__.tail,(0)));
} else
{var G__28299 = coll__$1;var G__28300 = cljs.core.first_array_for_longvec(coll__$1);var G__28301 = (0);var G__28302 = (0);return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__28299,G__28300,G__28301,G__28302) : cljs.core.chunked_seq.call(null,G__28299,G__28300,G__28301,G__28302));

}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentVector(meta__$1,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;if(((self__.cnt - cljs.core.tail_off(coll__$1)) < (32)))
{var len = self__.tail.length;var new_tail = (new Array((len + (1))));var n__20882__auto___28324 = len;var i_28325 = (0);while(true){
if((i_28325 < n__20882__auto___28324))
{(new_tail[i_28325] = (self__.tail[i_28325]));
{
var G__28326 = (i_28325 + (1));
i_28325 = G__28326;
continue;
}
} else
{}
break;
}
(new_tail[len] = o);
return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + (1)),self__.shift,self__.root,new_tail,null));
} else
{var root_overflow_QMARK_ = ((self__.cnt >>> (5)) > ((1) << self__.shift));var new_shift = ((root_overflow_QMARK_)?(self__.shift + (5)):self__.shift);var new_root = ((root_overflow_QMARK_)?(function (){var n_r = cljs.core.pv_fresh_node(null);cljs.core.pv_aset(n_r,(0),self__.root);
cljs.core.pv_aset(n_r,(1),cljs.core.new_path(null,self__.shift,(new cljs.core.VectorNode(null,self__.tail))));
return n_r;
})():cljs.core.push_tail(coll__$1,self__.shift,self__.root,(new cljs.core.VectorNode(null,self__.tail))));return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + (1)),new_shift,new_root,[o],null));
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__28332 = null;
var G__28332__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__28332__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__28332 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__28332__2.call(this,self__,k);
case 3:
return G__28332__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28332.cljs$core$IFn$_invoke$arity$2 = G__28332__2;
G__28332.cljs$core$IFn$_invoke$arity$3 = G__28332__3;
return G__28332;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (self__,args28292){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28292)));
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
cljs.core.__GT_PersistentVector = (function __GT_PersistentVector(meta,cnt,shift,root,tail,__hash){return (new cljs.core.PersistentVector(meta,cnt,shift,root,tail,__hash));
});
cljs.core.PersistentVector.EMPTY_NODE = (new cljs.core.VectorNode(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,(0),(5),cljs.core.PersistentVector.EMPTY_NODE,[],(0)));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){var l = xs.length;var xs__$1 = ((no_clone)?xs:cljs.core.aclone(xs));if((l < (32)))
{return (new cljs.core.PersistentVector(null,l,(5),cljs.core.PersistentVector.EMPTY_NODE,xs__$1,null));
} else
{var node = xs__$1.slice((0),(32));var v = (new cljs.core.PersistentVector(null,(32),(5),cljs.core.PersistentVector.EMPTY_NODE,node,null));var i = (32);var out = v.cljs$core$IEditableCollection$_as_transient$arity$1(null);while(true){
if((i < l))
{{
var G__28342 = (i + (1));
var G__28343 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,(xs__$1[i]));
i = G__28342;
out = G__28343;
continue;
}
} else
{return cljs.core.persistent_BANG_(out);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){return cljs.core._persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj_BANG_,cljs.core._as_transient(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){if(((args instanceof cljs.core.IndexedSeq)) && ((args.i === (0))))
{return cljs.core.PersistentVector.fromArray(args.arr,true);
} else
{return cljs.core.vec(args);
}
};
var vector = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return vector__delegate.call(this,args);};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__28351){
var args = cljs.core.seq(arglist__28351);
return vector__delegate(args);
});
vector.cljs$core$IFn$_invoke$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32375020;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorStr = "cljs.core/ChunkedSeq";
cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.ChunkedSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(((self__.off + (1)) < self__.node.length))
{var s = (function (){var G__28352 = self__.vec;var G__28353 = self__.node;var G__28354 = self__.i;var G__28355 = (self__.off + (1));return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__28352,G__28353,G__28354,G__28355) : cljs.core.chunked_seq.call(null,G__28352,G__28353,G__28354,G__28355));
})();if((s == null))
{return null;
} else
{return s;
}
} else
{return cljs.core._chunked_next(coll__$1);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2((function (){var G__28356 = self__.vec;var G__28357 = (self__.i + self__.off);var G__28358 = cljs.core.count(self__.vec);return (cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__28356,G__28357,G__28358) : cljs.core.subvec.call(null,G__28356,G__28357,G__28358));
})(),f);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3((function (){var G__28359 = self__.vec;var G__28360 = (self__.i + self__.off);var G__28361 = cljs.core.count(self__.vec);return (cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__28359,G__28360,G__28361) : cljs.core.subvec.call(null,G__28359,G__28360,G__28361));
})(),f,start);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (self__.node[self__.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(((self__.off + (1)) < self__.node.length))
{var s = (function (){var G__28362 = self__.vec;var G__28363 = self__.node;var G__28364 = self__.i;var G__28365 = (self__.off + (1));return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__28362,G__28363,G__28364,G__28365) : cljs.core.chunked_seq.call(null,G__28362,G__28363,G__28364,G__28365));
})();if((s == null))
{return cljs.core.List.EMPTY;
} else
{return s;
}
} else
{return cljs.core._chunked_rest(coll__$1);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.array_chunk.cljs$core$IFn$_invoke$arity$2(self__.node,self__.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var end = (self__.i + self__.node.length);if((end < cljs.core._count(self__.vec)))
{var G__28366 = self__.vec;var G__28367 = cljs.core.unchecked_array_for(self__.vec,end);var G__28368 = end;var G__28369 = (0);return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__28366,G__28367,G__28368,G__28369) : cljs.core.chunked_seq.call(null,G__28366,G__28367,G__28368,G__28369));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){var self__ = this;
var coll__$1 = this;var G__28370 = self__.vec;var G__28371 = self__.node;var G__28372 = self__.i;var G__28373 = self__.off;var G__28374 = m;return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5(G__28370,G__28371,G__28372,G__28373,G__28374) : cljs.core.chunked_seq.call(null,G__28370,G__28371,G__28372,G__28373,G__28374));
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var end = (self__.i + self__.node.length);if((end < cljs.core._count(self__.vec)))
{var G__28375 = self__.vec;var G__28376 = cljs.core.unchecked_array_for(self__.vec,end);var G__28377 = end;var G__28378 = (0);return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__28375,G__28376,G__28377,G__28378) : cljs.core.chunked_seq.call(null,G__28375,G__28376,G__28377,G__28378));
} else
{return null;
}
});
cljs.core.__GT_ChunkedSeq = (function __GT_ChunkedSeq(vec,node,i,off,meta,__hash){return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,__hash));
});
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){return (new cljs.core.ChunkedSeq(vec,cljs.core.array_for(vec,i),i,off,null,null));
});
var chunked_seq__4 = (function (vec,node,i,off){return (new cljs.core.ChunkedSeq(vec,node,i,off,null,null));
});
var chunked_seq__5 = (function (vec,node,i,off,meta){return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,null));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chunked_seq.cljs$core$IFn$_invoke$arity$3 = chunked_seq__3;
chunked_seq.cljs$core$IFn$_invoke$arity$4 = chunked_seq__4;
chunked_seq.cljs$core$IFn$_invoke$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 166617887;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorStr = "cljs.core/Subvec";
cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.Subvec.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if(typeof k === 'number')
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else
{return not_found;
}
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;if(((n < (0))) || ((self__.end <= (self__.start + n))))
{return cljs.core.vector_index_out_of_bounds(n,(self__.end - self__.start));
} else
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,(self__.start + n));
}
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;if(((n < (0))) || ((self__.end <= (self__.start + n))))
{return not_found;
} else
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(self__.v,(self__.start + n),not_found);
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){var self__ = this;
var coll__$1 = this;var v_pos = (self__.start + n);var G__28380 = self__.meta;var G__28381 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.v,v_pos,val);var G__28382 = self__.start;var G__28383 = (function (){var x__19797__auto__ = self__.end;var y__19798__auto__ = (v_pos + (1));return ((x__19797__auto__ > y__19798__auto__) ? x__19797__auto__ : y__19798__auto__);
})();var G__28384 = null;return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__28380,G__28381,G__28382,G__28383,G__28384) : cljs.core.build_subvec.call(null,G__28380,G__28381,G__28382,G__28383,G__28384));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.Subvec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.Subvec(self__.meta,self__.v,self__.start,self__.end,self__.__hash));
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (self__.end - self__.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,(self__.end - (1)));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.start === self__.end))
{throw (new Error("Can't pop empty vector"));
} else
{var G__28385 = self__.meta;var G__28386 = self__.v;var G__28387 = self__.start;var G__28388 = (self__.end - (1));var G__28389 = null;return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__28385,G__28386,G__28387,G__28388,G__28389) : cljs.core.build_subvec.call(null,G__28385,G__28386,G__28387,G__28388,G__28389));
}
});
cljs.core.Subvec.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(!((self__.start === self__.end)))
{return (new cljs.core.RSeq(coll__$1,((self__.end - self__.start) - (1)),null));
} else
{return null;
}
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(coll__$1,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start__$1){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(coll__$1,f,start__$1);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){var self__ = this;
var coll__$1 = this;if(typeof key === 'number')
{return cljs.core._assoc_n(coll__$1,key,val);
} else
{throw (new Error("Subvec's key for assoc must be a number."));
}
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var subvec_seq = ((function (coll__$1){
return (function subvec_seq(i){if((i === self__.end))
{return null;
} else
{return cljs.core.cons(cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,i),(new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){return subvec_seq((i + (1)));
});})(coll__$1))
,null,null)));
}
});})(coll__$1))
;return subvec_seq(self__.start);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;var G__28391 = meta__$1;var G__28392 = self__.v;var G__28393 = self__.start;var G__28394 = self__.end;var G__28395 = self__.__hash;return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__28391,G__28392,G__28393,G__28394,G__28395) : cljs.core.build_subvec.call(null,G__28391,G__28392,G__28393,G__28394,G__28395));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;var G__28396 = self__.meta;var G__28397 = cljs.core._assoc_n(self__.v,self__.end,o);var G__28398 = self__.start;var G__28399 = (self__.end + (1));var G__28400 = null;return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__28396,G__28397,G__28398,G__28399,G__28400) : cljs.core.build_subvec.call(null,G__28396,G__28397,G__28398,G__28399,G__28400));
});
cljs.core.Subvec.prototype.call = (function() {
var G__28401 = null;
var G__28401__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__28401__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__28401 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__28401__2.call(this,self__,k);
case 3:
return G__28401__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28401.cljs$core$IFn$_invoke$arity$2 = G__28401__2;
G__28401.cljs$core$IFn$_invoke$arity$3 = G__28401__3;
return G__28401;
})()
;
cljs.core.Subvec.prototype.apply = (function (self__,args28379){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28379)));
});
cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
cljs.core.__GT_Subvec = (function __GT_Subvec(meta,v,start,end,__hash){return (new cljs.core.Subvec(meta,v,start,end,__hash));
});
cljs.core.build_subvec = (function build_subvec(meta,v,start,end,__hash){while(true){
if((v instanceof cljs.core.Subvec))
{{
var G__28402 = meta;
var G__28403 = v.v;
var G__28404 = (v.start + start);
var G__28405 = (v.start + end);
var G__28406 = __hash;
meta = G__28402;
v = G__28403;
start = G__28404;
end = G__28405;
__hash = G__28406;
continue;
}
} else
{var c = cljs.core.count(v);if(((start < (0))) || ((end < (0))) || ((start > c)) || ((end > c)))
{throw (new Error("Index out of bounds"));
} else
{}
return (new cljs.core.Subvec(meta,v,start,end,__hash));
}
break;
}
});
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){return subvec.cljs$core$IFn$_invoke$arity$3(v,start,cljs.core.count(v));
});
var subvec__3 = (function (v,start,end){return cljs.core.build_subvec(null,v,start,end,null);
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subvec.cljs$core$IFn$_invoke$arity$2 = subvec__2;
subvec.cljs$core$IFn$_invoke$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,cljs.core.aclone(node.arr)));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){return (new cljs.core.VectorNode((function (){var obj28413 = {};return obj28413;
})(),cljs.core.aclone(node.arr)));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];cljs.core.array_copy(tl,(0),ret,(0),tl.length);
return ret;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){var ret = cljs.core.tv_ensure_editable(tv.root.edit,parent);var subidx = (((tv.cnt - (1)) >>> level) & (31));cljs.core.pv_aset(ret,subidx,(((level === (5)))?tail_node:(function (){var child = cljs.core.pv_aget(ret,subidx);if(!((child == null)))
{return tv_push_tail(tv,(level - (5)),child,tail_node);
} else
{return cljs.core.new_path(tv.root.edit,(level - (5)),tail_node);
}
})()));
return ret;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){var node__$1 = cljs.core.tv_ensure_editable(tv.root.edit,node);var subidx = (((tv.cnt - (2)) >>> level) & (31));if((level > (5)))
{var new_child = tv_pop_tail(tv,(level - (5)),cljs.core.pv_aget(node__$1,subidx));if(((new_child == null)) && ((subidx === (0))))
{return null;
} else
{cljs.core.pv_aset(node__$1,subidx,new_child);
return node__$1;
}
} else
{if((subidx === (0)))
{return null;
} else
{cljs.core.pv_aset(node__$1,subidx,null);
return node__$1;

}
}
});
cljs.core.unchecked_editable_array_for = (function unchecked_editable_array_for(tv,i){if((i >= cljs.core.tail_off(tv)))
{return tv.tail;
} else
{var root = tv.root;var node = root;var level = tv.shift;while(true){
if((level > (0)))
{{
var G__28421 = cljs.core.tv_ensure_editable(root.edit,cljs.core.pv_aget(node,((i >>> level) & (31))));
var G__28422 = (level - (5));
node = G__28421;
level = G__28422;
continue;
}
} else
{return node.arr;
}
break;
}
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 88;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorStr = "cljs.core/TransientVector";
cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__28426 = null;
var G__28426__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__28426__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__28426 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__28426__2.call(this,self__,k);
case 3:
return G__28426__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28426.cljs$core$IFn$_invoke$arity$2 = G__28426__2;
G__28426.cljs$core$IFn$_invoke$arity$3 = G__28426__3;
return G__28426;
})()
;
cljs.core.TransientVector.prototype.apply = (function (self__,args28423){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28423)));
});
cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if(typeof k === 'number')
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;if(self__.root.edit)
{return (cljs.core.array_for(coll__$1,n)[(n & (31))]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;if((((0) <= n)) && ((n < self__.cnt)))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(self__.root.edit)
{return self__.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){var self__ = this;
var tcoll__$1 = this;if(self__.root.edit)
{if((((0) <= n)) && ((n < self__.cnt)))
{if((cljs.core.tail_off(tcoll__$1) <= n))
{(self__.tail[(n & (31))] = val);
return tcoll__$1;
} else
{var new_root = ((function (tcoll__$1){
return (function go(level,node){var node__$1 = cljs.core.tv_ensure_editable(self__.root.edit,node);if((level === (0)))
{cljs.core.pv_aset(node__$1,(n & (31)),val);
return node__$1;
} else
{var subidx = ((n >>> level) & (31));cljs.core.pv_aset(node__$1,subidx,go((level - (5)),cljs.core.pv_aget(node__$1,subidx)));
return node__$1;
}
});})(tcoll__$1))
.call(null,self__.shift,self__.root);self__.root = new_root;
return tcoll__$1;
}
} else
{if((n === self__.cnt))
{return cljs.core._conj_BANG_(tcoll__$1,val);
} else
{throw (new Error(("Index "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)+" out of bounds for TransientVector of length"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.cnt))));

}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;if(self__.root.edit)
{if((self__.cnt === (0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(((1) === self__.cnt))
{self__.cnt = (0);
return tcoll__$1;
} else
{if((((self__.cnt - (1)) & (31)) > (0)))
{self__.cnt = (self__.cnt - (1));
return tcoll__$1;
} else
{var new_tail = cljs.core.unchecked_editable_array_for(tcoll__$1,(self__.cnt - (2)));var new_root = (function (){var nr = cljs.core.tv_pop_tail(tcoll__$1,self__.shift,self__.root);if(!((nr == null)))
{return nr;
} else
{return (new cljs.core.VectorNode(self__.root.edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
}
})();if((((5) < self__.shift)) && ((cljs.core.pv_aget(new_root,(1)) == null)))
{var new_root__$1 = cljs.core.tv_ensure_editable(self__.root.edit,cljs.core.pv_aget(new_root,(0)));self__.root = new_root__$1;
self__.shift = (self__.shift - (5));
self__.cnt = (self__.cnt - (1));
self__.tail = new_tail;
return tcoll__$1;
} else
{self__.root = new_root;
self__.cnt = (self__.cnt - (1));
self__.tail = new_tail;
return tcoll__$1;
}

}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){var self__ = this;
var tcoll__$1 = this;if(typeof key === 'number')
{return cljs.core._assoc_n_BANG_(tcoll__$1,key,val);
} else
{throw (new Error("TransientVector's key for assoc! must be a number."));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){var self__ = this;
var tcoll__$1 = this;if(self__.root.edit)
{if(((self__.cnt - cljs.core.tail_off(tcoll__$1)) < (32)))
{(self__.tail[(self__.cnt & (31))] = o);
self__.cnt = (self__.cnt + (1));
return tcoll__$1;
} else
{var tail_node = (new cljs.core.VectorNode(self__.root.edit,self__.tail));var new_tail = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(new_tail[(0)] = o);
self__.tail = new_tail;
if(((self__.cnt >>> (5)) > ((1) << self__.shift)))
{var new_root_array = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var new_shift = (self__.shift + (5));(new_root_array[(0)] = self__.root);
(new_root_array[(1)] = cljs.core.new_path(self__.root.edit,self__.shift,tail_node));
self__.root = (new cljs.core.VectorNode(self__.root.edit,new_root_array));
self__.shift = new_shift;
self__.cnt = (self__.cnt + (1));
return tcoll__$1;
} else
{var new_root = cljs.core.tv_push_tail(tcoll__$1,self__.shift,self__.root,tail_node);self__.root = new_root;
self__.cnt = (self__.cnt + (1));
return tcoll__$1;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;if(self__.root.edit)
{self__.root.edit = null;
var len = (self__.cnt - cljs.core.tail_off(tcoll__$1));var trimmed_tail = (new Array(len));cljs.core.array_copy(self__.tail,(0),trimmed_tail,(0),len);
return (new cljs.core.PersistentVector(null,self__.cnt,self__.shift,self__.root,trimmed_tail,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.__GT_TransientVector = (function __GT_TransientVector(cnt,shift,root,tail){return (new cljs.core.TransientVector(cnt,shift,root,tail));
});

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorStr = "cljs.core/PersistentQueueSeq";
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentQueueSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first(self__.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var temp__4124__auto__ = cljs.core.next(self__.front);if(temp__4124__auto__)
{var f1 = temp__4124__auto__;return (new cljs.core.PersistentQueueSeq(self__.meta,f1,self__.rear,null));
} else
{if((self__.rear == null))
{return cljs.core._empty(coll__$1);
} else
{return (new cljs.core.PersistentQueueSeq(self__.meta,self__.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentQueueSeq(meta__$1,self__.front,self__.rear,self__.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_PersistentQueueSeq = (function __GT_PersistentQueueSeq(meta,front,rear,__hash){return (new cljs.core.PersistentQueueSeq(meta,front,rear,__hash));
});

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorStr = "cljs.core/PersistentQueue";
cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentQueue.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentQueue(self__.meta,self__.count,self__.front,self__.rear,self__.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first(self__.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_(self__.front))
{var temp__4124__auto__ = cljs.core.next(self__.front);if(temp__4124__auto__)
{var f1 = temp__4124__auto__;return (new cljs.core.PersistentQueue(self__.meta,(self__.count - (1)),f1,self__.rear,null));
} else
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count - (1)),cljs.core.seq(self__.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll__$1;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first(self__.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.rest(cljs.core.seq(coll__$1));
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var rear__$1 = cljs.core.seq(self__.rear);if(cljs.core.truth_((function (){var or__19267__auto__ = self__.front;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return rear__$1;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,self__.front,cljs.core.seq(rear__$1),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentQueue(meta__$1,self__.count,self__.front,self__.rear,self__.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_(self__.front))
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),self__.front,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__19267__auto__ = self__.rear;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.__GT_PersistentQueue = (function __GT_PersistentQueue(meta,count,front,rear,__hash){return (new cljs.core.PersistentQueue(meta,count,front,rear,__hash));
});
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,(0),null,cljs.core.PersistentVector.EMPTY,(0)));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorStr = "cljs.core/NeverEquiv";
cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return false;
});
cljs.core.NeverEquiv.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.__GT_NeverEquiv = (function __GT_NeverEquiv(){return (new cljs.core.NeverEquiv());
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){return cljs.core.boolean$(((cljs.core.map_QMARK_(y))?(((cljs.core.count(x) === cljs.core.count(y)))?cljs.core.every_QMARK_(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (xkv){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(y,cljs.core.first(xkv),cljs.core.never_equiv),cljs.core.second(xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){var len = array.length;var i = (0);while(true){
if((i < len))
{if((k === (array[i])))
{return i;
} else
{{
var G__28427 = (i + incr);
i = G__28427;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){var a__$1 = cljs.core.hash(a);var b__$1 = cljs.core.hash(b);if((a__$1 < b__$1))
{return (-1);
} else
{if((a__$1 > b__$1))
{return (1);
} else
{return (0);

}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){var ks = m.keys;var len = ks.length;var so = m.strobj;var mm = cljs.core.meta(m);var i = (0);var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);while(true){
if((i < len))
{var k__$1 = (ks[i]);{
var G__28428 = (i + (1));
var G__28429 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,k__$1,(so[k__$1]));
i = G__28428;
out = G__28429;
continue;
}
} else
{return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,k,v)),mm);
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){var new_obj = (function (){var obj28433 = {};return obj28433;
})();var l = ks.length;var i_28434 = (0);while(true){
if((i_28434 < l))
{var k_28435 = (ks[i_28434]);(new_obj[k_28435] = (obj[k_28435]));
{
var G__28436 = (i_28434 + (1));
i_28434 = G__28436;
continue;
}
} else
{}
break;
}
return new_obj;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 4;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorStr = "cljs.core/ObjMap";
cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.ObjMap.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_((function (){var and__19255__auto__ = (function (){var G__28440 = k;return goog.isString(G__28440);
})();if(cljs.core.truth_(and__19255__auto__))
{return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else
{return and__19255__auto__;
}
})()))
{return (self__.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;var len = self__.keys.length;var keys__$1 = self__.keys.sort(cljs.core.obj_map_compare_keys);var init__$1 = init;while(true){
if(cljs.core.seq(keys__$1))
{var k = cljs.core.first(keys__$1);var init__$2 = (function (){var G__28441 = init__$1;var G__28442 = k;var G__28443 = (self__.strobj[k]);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__28441,G__28442,G__28443) : f.call(null,G__28441,G__28442,G__28443));
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__28444 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28444) : cljs.core.deref.call(null,G__28444));
} else
{{
var G__28450 = cljs.core.rest(keys__$1);
var G__28451 = init__$2;
keys__$1 = G__28450;
init__$1 = G__28451;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_map(coll__$1,other);
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.transient$(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,coll__$1));
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.ObjMap.EMPTY,self__.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_((function (){var and__19255__auto__ = (function (){var G__28446 = k;return goog.isString(G__28446);
})();if(cljs.core.truth_(and__19255__auto__))
{return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else
{return and__19255__auto__;
}
})()))
{var new_keys = cljs.core.aclone(self__.keys);var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);new_keys.splice(cljs.core.scan_array((1),k,new_keys),(1));
delete new_strobj[k];
return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + (1)),null));
} else
{return coll__$1;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_((function (){var G__28447 = k;return goog.isString(G__28447);
})()))
{if(((self__.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD)) || ((self__.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD)))
{return cljs.core.obj_map__GT_hash_map(coll__$1,k,v);
} else
{if(!((cljs.core.scan_array((1),k,self__.keys) == null)))
{var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);(new_strobj[k] = v);
return (new cljs.core.ObjMap(self__.meta,self__.keys,new_strobj,(self__.update_count + (1)),null));
} else
{var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);var new_keys = cljs.core.aclone(self__.keys);(new_strobj[k] = v);
new_keys.push(k);
return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + (1)),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map(coll__$1,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_((function (){var and__19255__auto__ = (function (){var G__28449 = k;return goog.isString(G__28449);
})();if(cljs.core.truth_(and__19255__auto__))
{return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else
{return and__19255__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.keys.length > (0)))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (coll__$1){
return (function (p1__28437_SHARP_){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__28437_SHARP_,(self__.strobj[p1__28437_SHARP_])],null));
});})(coll__$1))
,self__.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.ObjMap(meta__$1,self__.keys,self__.strobj,self__.update_count,self__.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_(entry))
{return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,coll__$1,entry);
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__28452 = null;
var G__28452__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__28452__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__28452 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__28452__2.call(this,self__,k);
case 3:
return G__28452__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28452.cljs$core$IFn$_invoke$arity$2 = G__28452__2;
G__28452.cljs$core$IFn$_invoke$arity$3 = G__28452__3;
return G__28452;
})()
;
cljs.core.ObjMap.prototype.apply = (function (self__,args28438){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28438)));
});
cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_ObjMap = (function __GT_ObjMap(meta,keys,strobj,update_count,__hash){return (new cljs.core.ObjMap(meta,keys,strobj,update_count,__hash));
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],(function (){var obj28454 = {};return obj28454;
})(),(0),(0)));
cljs.core.ObjMap.HASHMAP_THRESHOLD = (8);
cljs.core.ObjMap.fromObject = (function (ks,obj){return (new cljs.core.ObjMap(null,ks,obj,(0),null));
});

/**
* @constructor
*/
cljs.core.Iterator = (function (s){
this.s = s;
})
cljs.core.Iterator.cljs$lang$type = true;
cljs.core.Iterator.cljs$lang$ctorStr = "cljs.core/Iterator";
cljs.core.Iterator.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/Iterator");
});
cljs.core.Iterator.prototype.next = (function (){var self__ = this;
var _ = this;if(!((self__.s == null)))
{var x = cljs.core.first(self__.s);self__.s = cljs.core.next(self__.s);
return {"done": false, "value": x};
} else
{return {"done": true, "value": null};
}
});
cljs.core.__GT_Iterator = (function __GT_Iterator(s){return (new cljs.core.Iterator(s));
});
cljs.core.iterator = (function iterator(coll){return (new cljs.core.Iterator(cljs.core.seq(coll)));
});

/**
* @constructor
*/
cljs.core.EntriesIterator = (function (s){
this.s = s;
})
cljs.core.EntriesIterator.cljs$lang$type = true;
cljs.core.EntriesIterator.cljs$lang$ctorStr = "cljs.core/EntriesIterator";
cljs.core.EntriesIterator.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/EntriesIterator");
});
cljs.core.EntriesIterator.prototype.next = (function (){var self__ = this;
var _ = this;if(!((self__.s == null)))
{var vec__28455 = cljs.core.first(self__.s);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28455,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28455,(1),null);self__.s = cljs.core.next(self__.s);
return {"done": false, "value": [k,v]};
} else
{return {"done": true, "value": null};
}
});
cljs.core.__GT_EntriesIterator = (function __GT_EntriesIterator(s){return (new cljs.core.EntriesIterator(s));
});
cljs.core.entries_iterator = (function entries_iterator(coll){return (new cljs.core.EntriesIterator(cljs.core.seq(coll)));
});

/**
* @constructor
*/
cljs.core.SetEntriesIterator = (function (s){
this.s = s;
})
cljs.core.SetEntriesIterator.cljs$lang$type = true;
cljs.core.SetEntriesIterator.cljs$lang$ctorStr = "cljs.core/SetEntriesIterator";
cljs.core.SetEntriesIterator.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/SetEntriesIterator");
});
cljs.core.SetEntriesIterator.prototype.next = (function (){var self__ = this;
var _ = this;if(!((self__.s == null)))
{var x = cljs.core.first(self__.s);self__.s = cljs.core.next(self__.s);
return {"done": false, "value": [x,x]};
} else
{return {"done": true, "value": null};
}
});
cljs.core.__GT_SetEntriesIterator = (function __GT_SetEntriesIterator(s){return (new cljs.core.SetEntriesIterator(s));
});
cljs.core.set_entries_iterator = (function set_entries_iterator(coll){return (new cljs.core.SetEntriesIterator(cljs.core.seq(coll)));
});
cljs.core.array_map_index_of_nil_QMARK_ = (function array_map_index_of_nil_QMARK_(arr,m,k){var len = arr.length;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if(((arr[i]) == null))
{return i;
} else
{{
var G__28456 = (i + (2));
i = G__28456;
continue;
}

}
}
break;
}
});
cljs.core.array_map_index_of_keyword_QMARK_ = (function array_map_index_of_keyword_QMARK_(arr,m,k){var len = arr.length;var kstr = k.fqn;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if((function (){var k_SINGLEQUOTE_ = (arr[i]);return ((k_SINGLEQUOTE_ instanceof cljs.core.Keyword)) && ((kstr === k_SINGLEQUOTE_.fqn));
})())
{return i;
} else
{{
var G__28457 = (i + (2));
i = G__28457;
continue;
}

}
}
break;
}
});
cljs.core.array_map_index_of_symbol_QMARK_ = (function array_map_index_of_symbol_QMARK_(arr,m,k){var len = arr.length;var kstr = k.str;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if((function (){var k_SINGLEQUOTE_ = (arr[i]);return ((k_SINGLEQUOTE_ instanceof cljs.core.Symbol)) && ((kstr === k_SINGLEQUOTE_.str));
})())
{return i;
} else
{{
var G__28458 = (i + (2));
i = G__28458;
continue;
}

}
}
break;
}
});
cljs.core.array_map_index_of_identical_QMARK_ = (function array_map_index_of_identical_QMARK_(arr,m,k){var len = arr.length;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if((k === (arr[i])))
{return i;
} else
{{
var G__28459 = (i + (2));
i = G__28459;
continue;
}

}
}
break;
}
});
cljs.core.array_map_index_of_equiv_QMARK_ = (function array_map_index_of_equiv_QMARK_(arr,m,k){var len = arr.length;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(arr[i])))
{return i;
} else
{{
var G__28460 = (i + (2));
i = G__28460;
continue;
}

}
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){var arr = m.arr;if((k instanceof cljs.core.Keyword))
{return cljs.core.array_map_index_of_keyword_QMARK_(arr,m,k);
} else
{if(cljs.core.truth_((function (){var or__19267__auto__ = (function (){var G__28464 = k;return goog.isString(G__28464);
})();if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return typeof k === 'number';
}
})()))
{return cljs.core.array_map_index_of_identical_QMARK_(arr,m,k);
} else
{if((k instanceof cljs.core.Symbol))
{return cljs.core.array_map_index_of_symbol_QMARK_(arr,m,k);
} else
{if((k == null))
{return cljs.core.array_map_index_of_nil_QMARK_(arr,m,k);
} else
{return cljs.core.array_map_index_of_equiv_QMARK_(arr,m,k);

}
}
}
}
});
cljs.core.array_map_extend_kv = (function array_map_extend_kv(m,k,v){var arr = m.arr;var l = arr.length;var narr = (new Array((l + (2))));var i_28465 = (0);while(true){
if((i_28465 < l))
{(narr[i_28465] = (arr[i_28465]));
{
var G__28466 = (i_28465 + (1));
i_28465 = G__28466;
continue;
}
} else
{}
break;
}
(narr[l] = k);
(narr[(l + (1))] = v);
return narr;
});

/**
* @constructor
*/
cljs.core.PersistentArrayMapSeq = (function (arr,i,_meta){
this.arr = arr;
this.i = i;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
})
cljs.core.PersistentArrayMapSeq.cljs$lang$type = true;
cljs.core.PersistentArrayMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentArrayMapSeq";
cljs.core.PersistentArrayMapSeq.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/PersistentArrayMapSeq");
});
cljs.core.PersistentArrayMapSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentArrayMapSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__._meta;
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i < (self__.arr.length - (2))))
{return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + (2)),self__._meta));
} else
{return null;
}
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return ((self__.arr.length - self__.i) / (2));
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll(coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[self__.i]),(self__.arr[(self__.i + (1))])], null);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i < (self__.arr.length - (2))))
{return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + (2)),self__._meta));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentArrayMapSeq(self__.arr,self__.i,new_meta));
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_PersistentArrayMapSeq = (function __GT_PersistentArrayMapSeq(arr,i,_meta){return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
});
cljs.core.persistent_array_map_seq = (function persistent_array_map_seq(arr,i,_meta){if((i <= (arr.length - (2))))
{return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
} else
{return null;
}
});

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16647951;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorStr = "cljs.core/PersistentArrayMap";
cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentArrayMap.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentArrayMap.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.iterator((function (){var G__28468 = coll;return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__28468) : cljs.core.keys.call(null,G__28468));
})());
});
cljs.core.PersistentArrayMap.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentArrayMap.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.iterator((function (){var G__28469 = coll;return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__28469) : cljs.core.vals.call(null,G__28469));
})());
});
cljs.core.PersistentArrayMap.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentArrayMap.prototype.get = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentArrayMap.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__28470 = cljs.core.seq(coll);var chunk__28471 = null;var count__28472 = (0);var i__28473 = (0);while(true){
if((i__28473 < count__28472))
{var vec__28474 = chunk__28471.cljs$core$IIndexed$_nth$arity$2(null,i__28473);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28474,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28474,(1),null);var G__28475_28487 = v;var G__28476_28488 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28475_28487,G__28476_28488) : f.call(null,G__28475_28487,G__28476_28488));
{
var G__28489 = seq__28470;
var G__28490 = chunk__28471;
var G__28491 = count__28472;
var G__28492 = (i__28473 + (1));
seq__28470 = G__28489;
chunk__28471 = G__28490;
count__28472 = G__28491;
i__28473 = G__28492;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__28470);if(temp__4126__auto__)
{var seq__28470__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__28470__$1))
{var c__20699__auto__ = cljs.core.chunk_first(seq__28470__$1);{
var G__28493 = cljs.core.chunk_rest(seq__28470__$1);
var G__28494 = c__20699__auto__;
var G__28495 = cljs.core.count(c__20699__auto__);
var G__28496 = (0);
seq__28470 = G__28493;
chunk__28471 = G__28494;
count__28472 = G__28495;
i__28473 = G__28496;
continue;
}
} else
{var vec__28477 = cljs.core.first(seq__28470__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28477,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28477,(1),null);var G__28478_28497 = v;var G__28479_28498 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28478_28497,G__28479_28498) : f.call(null,G__28478_28497,G__28479_28498));
{
var G__28499 = cljs.core.next(seq__28470__$1);
var G__28500 = null;
var G__28501 = (0);
var G__28502 = (0);
seq__28470 = G__28499;
chunk__28471 = G__28500;
count__28472 = G__28501;
i__28473 = G__28502;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;var idx = cljs.core.array_map_index_of(coll__$1,k);if((idx === (-1)))
{return not_found;
} else
{return (self__.arr[(idx + (1))]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;var len = self__.arr.length;var i = (0);var init__$1 = init;while(true){
if((i < len))
{var init__$2 = (function (){var G__28480 = init__$1;var G__28481 = (self__.arr[i]);var G__28482 = (self__.arr[(i + (1))]);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__28480,G__28481,G__28482) : f.call(null,G__28480,G__28481,G__28482));
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__28483 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28483) : cljs.core.deref.call(null,G__28483));
} else
{{
var G__28503 = (i + (2));
var G__28504 = init__$2;
i = G__28503;
init__$1 = G__28504;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,self__.arr,self__.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_map(coll__$1,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientArrayMap((function (){var obj28485 = {};return obj28485;
})(),self__.arr.length,cljs.core.aclone(self__.arr)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._with_meta(cljs.core.PersistentArrayMap.EMPTY,self__.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;var idx = cljs.core.array_map_index_of(coll__$1,k);if((idx >= (0)))
{var len = self__.arr.length;var new_len = (len - (2));if((new_len === (0)))
{return cljs.core._empty(coll__$1);
} else
{var new_arr = (new Array(new_len));var s = (0);var d = (0);while(true){
if((s >= len))
{return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt - (1)),new_arr,null));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(self__.arr[s])))
{{
var G__28505 = (s + (2));
var G__28506 = d;
s = G__28505;
d = G__28506;
continue;
}
} else
{(new_arr[d] = (self__.arr[s]));
(new_arr[(d + (1))] = (self__.arr[(s + (1))]));
{
var G__28507 = (s + (2));
var G__28508 = (d + (2));
s = G__28507;
d = G__28508;
continue;
}

}
}
break;
}
}
} else
{return coll__$1;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;var idx = cljs.core.array_map_index_of(coll__$1,k);if((idx === (-1)))
{if((self__.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{var arr__$1 = cljs.core.array_map_extend_kv(coll__$1,k,v);return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt + (1)),arr__$1,null));
} else
{return cljs.core._with_meta(cljs.core._assoc(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,coll__$1),k,v),self__.meta);
}
} else
{if((v === (self__.arr[(idx + (1))])))
{return coll__$1;
} else
{var arr__$1 = (function (){var G__28486 = cljs.core.aclone(self__.arr);(G__28486[(idx + (1))] = v);
return G__28486;
})();return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,arr__$1,null));

}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return !((cljs.core.array_map_index_of(coll__$1,k) === (-1)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.persistent_array_map_seq(self__.arr,(0),null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentArrayMap(meta__$1,self__.cnt,self__.arr,self__.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_(entry))
{return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else
{var ret = coll__$1;var es = cljs.core.seq(entry);while(true){
if((es == null))
{return ret;
} else
{var e = cljs.core.first(es);if(cljs.core.vector_QMARK_(e))
{{
var G__28509 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__28510 = cljs.core.next(es);
ret = G__28509;
es = G__28510;
continue;
}
} else
{throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__28511 = null;
var G__28511__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__28511__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__28511 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__28511__2.call(this,self__,k);
case 3:
return G__28511__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28511.cljs$core$IFn$_invoke$arity$2 = G__28511__2;
G__28511.cljs$core$IFn$_invoke$arity$3 = G__28511__3;
return G__28511;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (self__,args28467){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28467)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_PersistentArrayMap = (function __GT_PersistentArrayMap(meta,cnt,arr,__hash){return (new cljs.core.PersistentArrayMap(meta,cnt,arr,__hash));
});
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,(0),[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = (8);
cljs.core.PersistentArrayMap.fromArray = (function (arr,no_clone,no_check){var arr__$1 = ((no_clone)?arr:cljs.core.aclone(arr));if(no_check)
{var cnt = (arr__$1.length / (2));return (new cljs.core.PersistentArrayMap(null,cnt,arr__$1,null));
} else
{var len = arr__$1.length;var i = (0);var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < len))
{{
var G__28512 = (i + (2));
var G__28513 = cljs.core._assoc_BANG_(ret,(arr__$1[i]),(arr__$1[(i + (1))]));
i = G__28512;
ret = G__28513;
continue;
}
} else
{return cljs.core._persistent_BANG_(ret);
}
break;
}
}
});

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorStr = "cljs.core/TransientArrayMap";
cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of(tcoll__$1,key);if((idx >= (0)))
{(self__.arr[idx] = (self__.arr[(self__.len - (2))]));
(self__.arr[(idx + (1))] = (self__.arr[(self__.len - (1))]));
var G__28514_28522 = self__.arr;G__28514_28522.pop();
G__28514_28522.pop();
self__.len = (self__.len - (2));
} else
{}
return tcoll__$1;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of(tcoll__$1,key);if((idx === (-1)))
{if(((self__.len + (2)) <= ((2) * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{self__.len = (self__.len + (2));
self__.arr.push(key);
self__.arr.push(val);
return tcoll__$1;
} else
{return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3((function (){var G__28515 = self__.len;var G__28516 = self__.arr;return (cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2 ? cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2(G__28515,G__28516) : cljs.core.array__GT_transient_hash_map.call(null,G__28515,G__28516));
})(),key,val);
}
} else
{if((val === (self__.arr[(idx + (1))])))
{return tcoll__$1;
} else
{(self__.arr[(idx + (1))] = val);
return tcoll__$1;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{if((function (){var G__28517 = o;if(G__28517)
{var bit__20565__auto__ = (G__28517.cljs$lang$protocol_mask$partition0$ & (2048));if((bit__20565__auto__) || (G__28517.cljs$core$IMapEntry$))
{return true;
} else
{if((!G__28517.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__28517);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__28517);
}
})())
{return cljs.core._assoc_BANG_(tcoll__$1,(function (){var G__28518 = o;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__28518) : cljs.core.key.call(null,G__28518));
})(),(function (){var G__28519 = o;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__28519) : cljs.core.val.call(null,G__28519));
})());
} else
{var es = cljs.core.seq(o);var tcoll__$2 = tcoll__$1;while(true){
var temp__4124__auto__ = cljs.core.first(es);if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;{
var G__28523 = cljs.core.next(es);
var G__28524 = cljs.core._assoc_BANG_(tcoll__$2,(function (){var G__28520 = e;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__28520) : cljs.core.key.call(null,G__28520));
})(),(function (){var G__28521 = e;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__28521) : cljs.core.val.call(null,G__28521));
})());
es = G__28523;
tcoll__$2 = G__28524;
continue;
}
} else
{return tcoll__$2;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{self__.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(self__.len,(2)),self__.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){var self__ = this;
var tcoll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(tcoll__$1,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of(tcoll__$1,k);if((idx === (-1)))
{return not_found;
} else
{return (self__.arr[(idx + (1))]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{return cljs.core.quot(self__.len,(2));
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.__GT_TransientArrayMap = (function __GT_TransientArrayMap(editable_QMARK_,len,arr){return (new cljs.core.TransientArrayMap(editable_QMARK_,len,arr));
});
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);var i = (0);while(true){
if((i < len))
{{
var G__28525 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,(arr[i]),(arr[(i + (1))]));
var G__28526 = (i + (2));
out = G__28525;
i = G__28526;
continue;
}
} else
{return out;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorStr = "cljs.core/Box";
cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__20377__auto__,writer__20378__auto__,opts__20379__auto__){return cljs.core._write(writer__20378__auto__,"cljs.core/Box");
});
cljs.core.__GT_Box = (function __GT_Box(val){return (new cljs.core.Box(val));
});
cljs.core.key_test = (function key_test(key,other){if((key === other))
{return true;
} else
{if(cljs.core.keyword_identical_QMARK_(key,other))
{return true;
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,other);

}
}
});
cljs.core.mask = (function mask(hash,shift){return ((hash >>> shift) & (31));
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){var G__28529 = cljs.core.aclone(arr);(G__28529[i] = a);
return G__28529;
});
var clone_and_set__5 = (function (arr,i,a,j,b){var G__28530 = cljs.core.aclone(arr);(G__28530[i] = a);
(G__28530[j] = b);
return G__28530;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clone_and_set.cljs$core$IFn$_invoke$arity$3 = clone_and_set__3;
clone_and_set.cljs$core$IFn$_invoke$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){var new_arr = (new Array((arr.length - (2))));cljs.core.array_copy(arr,(0),new_arr,(0),((2) * i));
cljs.core.array_copy(arr,((2) * (i + (1))),new_arr,((2) * i),(new_arr.length - ((2) * i)));
return new_arr;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){return cljs.core.bit_count((bitmap & (bit - (1))));
});
cljs.core.bitpos = (function bitpos(hash,shift){return ((1) << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){var editable = inode.ensure_editable(edit);(editable.arr[i] = a);
return editable;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){var editable = inode.ensure_editable(edit);(editable.arr[i] = a);
(editable.arr[j] = b);
return editable;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
edit_and_set.cljs$core$IFn$_invoke$arity$4 = edit_and_set__4;
edit_and_set.cljs$core$IFn$_invoke$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){var len = arr.length;var i = (0);var init__$1 = init;while(true){
if((i < len))
{var init__$2 = (function (){var k = (arr[i]);if(!((k == null)))
{var G__28535 = init__$1;var G__28536 = k;var G__28537 = (arr[(i + (1))]);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__28535,G__28536,G__28537) : f.call(null,G__28535,G__28536,G__28537));
} else
{var node = (arr[(i + (1))]);if(!((node == null)))
{return node.kv_reduce(f,init__$1);
} else
{return init__$1;
}
}
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__28538 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28538) : cljs.core.deref.call(null,G__28538));
} else
{{
var G__28539 = (i + (2));
var G__28540 = init__$2;
i = G__28539;
init__$1 = G__28540;
continue;
}
}
} else
{return init__$1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorStr = "cljs.core/BitmapIndexedNode";
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){var self__ = this;
var inode = this;if((e === self__.edit))
{return inode;
} else
{var n = cljs.core.bit_count(self__.bitmap);var new_arr = (new Array((((n < (0)))?(4):((2) * (n + (1))))));cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * n));
return (new cljs.core.BitmapIndexedNode(e,self__.bitmap,new_arr));
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));if(((self__.bitmap & bit) === (0)))
{return inode;
} else
{var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{var n = val_or_node.inode_without_BANG_(edit__$1,(shift + (5)),hash,key,removed_leaf_QMARK_);if((n === val_or_node))
{return inode;
} else
{if(!((n == null)))
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),n);
} else
{if((self__.bitmap === bit))
{return null;
} else
{return inode.edit_and_remove_pair(edit__$1,bit,idx);

}
}
}
} else
{if(cljs.core.key_test(key,key_or_nil))
{(removed_leaf_QMARK_[(0)] = true);
return inode.edit_and_remove_pair(edit__$1,bit,idx);
} else
{return inode;

}
}
}
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){var self__ = this;
var inode = this;if((self__.bitmap === bit))
{return null;
} else
{var editable = inode.ensure_editable(e);var earr = editable.arr;var len = earr.length;editable.bitmap = (bit ^ editable.bitmap);
cljs.core.array_copy(earr,((2) * (i + (1))),earr,((2) * i),(len - ((2) * (i + (1)))));
(earr[(len - (2))] = null);
(earr[(len - (1))] = null);
return editable;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){var self__ = this;
var inode = this;var G__28541 = self__.arr;return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(G__28541) : cljs.core.create_inode_seq.call(null,G__28541));
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var inode = this;return cljs.core.inode_kv_reduce(self__.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));if(((self__.bitmap & bit) === (0)))
{return not_found;
} else
{var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{return val_or_node.inode_lookup((shift + (5)),hash,key,not_found);
} else
{if(cljs.core.key_test(key,key_or_nil))
{return val_or_node;
} else
{return not_found;

}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);if(((self__.bitmap & bit) === (0)))
{var n = cljs.core.bit_count(self__.bitmap);if((((2) * n) < self__.arr.length))
{var editable = inode.ensure_editable(edit__$1);var earr = editable.arr;added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward(earr,((2) * idx),earr,((2) * (idx + (1))),((2) * (n - idx)));
(earr[((2) * idx)] = key);
(earr[(((2) * idx) + (1))] = val);
editable.bitmap = (editable.bitmap | bit);
return editable;
} else
{if((n >= (16)))
{var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var jdx = ((hash >>> shift) & 0x01f);(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_));
var i_28555 = (0);var j_28556 = (0);while(true){
if((i_28555 < (32)))
{if((((self__.bitmap >>> i_28555) & (1)) === (0)))
{{
var G__28557 = (i_28555 + (1));
var G__28558 = j_28556;
i_28555 = G__28557;
j_28556 = G__28558;
continue;
}
} else
{(nodes[i_28555] = ((!(((self__.arr[j_28556]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),cljs.core.hash((self__.arr[j_28556])),(self__.arr[j_28556]),(self__.arr[(j_28556 + (1))]),added_leaf_QMARK_):(self__.arr[(j_28556 + (1))])));
{
var G__28559 = (i_28555 + (1));
var G__28560 = (j_28556 + (2));
i_28555 = G__28559;
j_28556 = G__28560;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit__$1,(n + (1)),nodes));
} else
{var new_arr = (new Array(((2) * (n + (4)))));cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * idx));
(new_arr[((2) * idx)] = key);
(new_arr[(((2) * idx) + (1))] = val);
cljs.core.array_copy(self__.arr,((2) * idx),new_arr,((2) * (idx + (1))),((2) * (n - idx)));
added_leaf_QMARK_.val = true;
var editable = inode.ensure_editable(edit__$1);editable.arr = new_arr;
editable.bitmap = (editable.bitmap | bit);
return editable;

}
}
} else
{var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{var n = val_or_node.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_);if((n === val_or_node))
{return inode;
} else
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),n);
}
} else
{if(cljs.core.key_test(key,key_or_nil))
{if((val === val_or_node))
{return inode;
} else
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),val);
}
} else
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(inode,edit__$1,((2) * idx),null,(((2) * idx) + (1)),(function (){var G__28542 = edit__$1;var G__28543 = (shift + (5));var G__28544 = key_or_nil;var G__28545 = val_or_node;var G__28546 = hash;var G__28547 = key;var G__28548 = val;return (cljs.core.create_node.cljs$core$IFn$_invoke$arity$7 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$7(G__28542,G__28543,G__28544,G__28545,G__28546,G__28547,G__28548) : cljs.core.create_node.call(null,G__28542,G__28543,G__28544,G__28545,G__28546,G__28547,G__28548));
})());

}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);if(((self__.bitmap & bit) === (0)))
{var n = cljs.core.bit_count(self__.bitmap);if((n >= (16)))
{var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var jdx = ((hash >>> shift) & 0x01f);(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_));
var i_28561 = (0);var j_28562 = (0);while(true){
if((i_28561 < (32)))
{if((((self__.bitmap >>> i_28561) & (1)) === (0)))
{{
var G__28563 = (i_28561 + (1));
var G__28564 = j_28562;
i_28561 = G__28563;
j_28562 = G__28564;
continue;
}
} else
{(nodes[i_28561] = ((!(((self__.arr[j_28562]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),cljs.core.hash((self__.arr[j_28562])),(self__.arr[j_28562]),(self__.arr[(j_28562 + (1))]),added_leaf_QMARK_):(self__.arr[(j_28562 + (1))])));
{
var G__28565 = (i_28561 + (1));
var G__28566 = (j_28562 + (2));
i_28561 = G__28565;
j_28562 = G__28566;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n + (1)),nodes));
} else
{var new_arr = (new Array(((2) * (n + (1)))));cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * idx));
(new_arr[((2) * idx)] = key);
(new_arr[(((2) * idx) + (1))] = val);
cljs.core.array_copy(self__.arr,((2) * idx),new_arr,((2) * (idx + (1))),((2) * (n - idx)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap | bit),new_arr));
}
} else
{var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{var n = val_or_node.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_);if((n === val_or_node))
{return inode;
} else
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),n)));
}
} else
{if(cljs.core.key_test(key,key_or_nil))
{if((val === val_or_node))
{return inode;
} else
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),val)));
}
} else
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$5(self__.arr,((2) * idx),null,(((2) * idx) + (1)),(function (){var G__28549 = (shift + (5));var G__28550 = key_or_nil;var G__28551 = val_or_node;var G__28552 = hash;var G__28553 = key;var G__28554 = val;return (cljs.core.create_node.cljs$core$IFn$_invoke$arity$6 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$6(G__28549,G__28550,G__28551,G__28552,G__28553,G__28554) : cljs.core.create_node.call(null,G__28549,G__28550,G__28551,G__28552,G__28553,G__28554));
})())));

}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));if(((self__.bitmap & bit) === (0)))
{return not_found;
} else
{var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{return val_or_node.inode_find((shift + (5)),hash,key,not_found);
} else
{if(cljs.core.key_test(key,key_or_nil))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_nil,val_or_node], null);
} else
{return not_found;

}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));if(((self__.bitmap & bit) === (0)))
{return inode;
} else
{var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{var n = val_or_node.inode_without((shift + (5)),hash,key);if((n === val_or_node))
{return inode;
} else
{if(!((n == null)))
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),n)));
} else
{if((self__.bitmap === bit))
{return null;
} else
{return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair(self__.arr,idx)));

}
}
}
} else
{if(cljs.core.key_test(key,key_or_nil))
{return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair(self__.arr,idx)));
} else
{return inode;

}
}
}
});
cljs.core.__GT_BitmapIndexedNode = (function __GT_BitmapIndexedNode(edit,bitmap,arr){return (new cljs.core.BitmapIndexedNode(edit,bitmap,arr));
});
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,(0),[]));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){var arr = array_node.arr;var len = arr.length;var new_arr = (new Array(((2) * (array_node.cnt - (1)))));var i = (0);var j = (1);var bitmap = (0);while(true){
if((i < len))
{if((!((i === idx))) && (!(((arr[i]) == null))))
{(new_arr[j] = (arr[i]));
{
var G__28567 = (i + (1));
var G__28568 = (j + (2));
var G__28569 = (bitmap | ((1) << i));
i = G__28567;
j = G__28568;
bitmap = G__28569;
continue;
}
} else
{{
var G__28570 = (i + (1));
var G__28571 = j;
var G__28572 = bitmap;
i = G__28570;
j = G__28571;
bitmap = G__28572;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap,new_arr));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorStr = "cljs.core/ArrayNode";
cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){var self__ = this;
var inode = this;if((e === self__.edit))
{return inode;
} else
{return (new cljs.core.ArrayNode(e,self__.cnt,cljs.core.aclone(self__.arr)));
}
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if((node == null))
{return inode;
} else
{var n = node.inode_without_BANG_(edit__$1,(shift + (5)),hash,key,removed_leaf_QMARK_);if((n === node))
{return inode;
} else
{if((n == null))
{if((self__.cnt <= (8)))
{return cljs.core.pack_array_node(inode,edit__$1,idx);
} else
{var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);editable.cnt = (editable.cnt - (1));
return editable;
}
} else
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);

}
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){var self__ = this;
var inode = this;var G__28573 = self__.arr;return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1(G__28573) : cljs.core.create_array_node_seq.call(null,G__28573));
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var inode = this;var len = self__.arr.length;var i = (0);var init__$1 = init;while(true){
if((i < len))
{var node = (self__.arr[i]);if(!((node == null)))
{var init__$2 = node.kv_reduce(f,init__$1);if(cljs.core.reduced_QMARK_(init__$2))
{var G__28574 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28574) : cljs.core.deref.call(null,G__28574));
} else
{{
var G__28575 = (i + (1));
var G__28576 = init__$2;
i = G__28575;
init__$1 = G__28576;
continue;
}
}
} else
{{
var G__28577 = (i + (1));
var G__28578 = init__$1;
i = G__28577;
init__$1 = G__28578;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if(!((node == null)))
{return node.inode_lookup((shift + (5)),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if((node == null))
{var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_));editable.cnt = (editable.cnt + (1));
return editable;
} else
{var n = node.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_);if((n === node))
{return inode;
} else
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);
}
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if((node == null))
{return (new cljs.core.ArrayNode(null,(self__.cnt + (1)),cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_))));
} else
{var n = node.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_);if((n === node))
{return inode;
} else
{return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));
}
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if(!((node == null)))
{return node.inode_find((shift + (5)),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if(!((node == null)))
{var n = node.inode_without((shift + (5)),hash,key);if((n === node))
{return inode;
} else
{if((n == null))
{if((self__.cnt <= (8)))
{return cljs.core.pack_array_node(inode,null,idx);
} else
{return (new cljs.core.ArrayNode(null,(self__.cnt - (1)),cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));
}
} else
{return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));

}
}
} else
{return inode;
}
});
cljs.core.__GT_ArrayNode = (function __GT_ArrayNode(edit,cnt,arr){return (new cljs.core.ArrayNode(edit,cnt,arr));
});
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){var lim = ((2) * cnt);var i = (0);while(true){
if((i < lim))
{if(cljs.core.key_test(key,(arr[i])))
{return i;
} else
{{
var G__28579 = (i + (2));
i = G__28579;
continue;
}
}
} else
{return (-1);
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorStr = "cljs.core/HashCollisionNode";
cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){var self__ = this;
var inode = this;if((e === self__.edit))
{return inode;
} else
{var new_arr = (new Array(((2) * (self__.cnt + (1)))));cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * self__.cnt));
return (new cljs.core.HashCollisionNode(e,self__.collision_hash,self__.cnt,new_arr));
}
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx === (-1)))
{return inode;
} else
{(removed_leaf_QMARK_[(0)] = true);
if((self__.cnt === (1)))
{return null;
} else
{var editable = inode.ensure_editable(edit__$1);var earr = editable.arr;(earr[idx] = (earr[(((2) * self__.cnt) - (2))]));
(earr[(idx + (1))] = (earr[(((2) * self__.cnt) - (1))]));
(earr[(((2) * self__.cnt) - (1))] = null);
(earr[(((2) * self__.cnt) - (2))] = null);
editable.cnt = (editable.cnt - (1));
return editable;
}
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){var self__ = this;
var inode = this;var G__28580 = self__.arr;return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(G__28580) : cljs.core.create_inode_seq.call(null,G__28580));
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var inode = this;return cljs.core.inode_kv_reduce(self__.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx < (0)))
{return not_found;
} else
{if(cljs.core.key_test(key,(self__.arr[idx])))
{return (self__.arr[(idx + (1))]);
} else
{return not_found;

}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;if((hash === self__.collision_hash))
{var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx === (-1)))
{if((self__.arr.length > ((2) * self__.cnt)))
{var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(inode,edit__$1,((2) * self__.cnt),key,(((2) * self__.cnt) + (1)),val);added_leaf_QMARK_.val = true;
editable.cnt = (editable.cnt + (1));
return editable;
} else
{var len = self__.arr.length;var new_arr = (new Array((len + (2))));cljs.core.array_copy(self__.arr,(0),new_arr,(0),len);
(new_arr[len] = key);
(new_arr[(len + (1))] = val);
added_leaf_QMARK_.val = true;
return inode.ensure_editable_array(edit__$1,(self__.cnt + (1)),new_arr);
}
} else
{if(((self__.arr[(idx + (1))]) === val))
{return inode;
} else
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(idx + (1)),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit__$1,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode,null,null])).inode_assoc_BANG_(edit__$1,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;if((hash === self__.collision_hash))
{var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx === (-1)))
{var len = ((2) * self__.cnt);var new_arr = (new Array((len + (2))));cljs.core.array_copy(self__.arr,(0),new_arr,(0),len);
(new_arr[len] = key);
(new_arr[(len + (1))] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt + (1)),new_arr));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.arr[idx]),val))
{return inode;
} else
{return (new cljs.core.HashCollisionNode(null,self__.collision_hash,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(idx + (1)),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){var self__ = this;
var inode = this;if((e === self__.edit))
{self__.arr = array;
self__.cnt = count;
return inode;
} else
{return (new cljs.core.HashCollisionNode(self__.edit,self__.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx < (0)))
{return not_found;
} else
{if(cljs.core.key_test(key,(self__.arr[idx])))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[idx]),(self__.arr[(idx + (1))])], null);
} else
{return not_found;

}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx === (-1)))
{return inode;
} else
{if((self__.cnt === (1)))
{return null;
} else
{return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt - (1)),cljs.core.remove_pair(self__.arr,cljs.core.quot(idx,(2)))));

}
}
});
cljs.core.__GT_HashCollisionNode = (function __GT_HashCollisionNode(edit,collision_hash,cnt,arr){return (new cljs.core.HashCollisionNode(edit,collision_hash,cnt,arr));
});
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){var key1hash = cljs.core.hash(key1);if((key1hash === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash,(2),[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){var key1hash = cljs.core.hash(key1);if((key1hash === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash,(2),[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_node.cljs$core$IFn$_invoke$arity$6 = create_node__6;
create_node.cljs$core$IFn$_invoke$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorStr = "cljs.core/NodeSeq";
cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.NodeSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.s == null))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.nodes[self__.i]),(self__.nodes[(self__.i + (1))])], null);
} else
{return cljs.core.first(self__.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.s == null))
{var G__28581 = self__.nodes;var G__28582 = (self__.i + (2));var G__28583 = null;return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(G__28581,G__28582,G__28583) : cljs.core.create_inode_seq.call(null,G__28581,G__28582,G__28583));
} else
{var G__28584 = self__.nodes;var G__28585 = self__.i;var G__28586 = cljs.core.next(self__.s);return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(G__28584,G__28585,G__28586) : cljs.core.create_inode_seq.call(null,G__28584,G__28585,G__28586));
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.NodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_NodeSeq = (function __GT_NodeSeq(meta,nodes,i,s,__hash){return (new cljs.core.NodeSeq(meta,nodes,i,s,__hash));
});
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){return create_inode_seq.cljs$core$IFn$_invoke$arity$3(nodes,(0),null);
});
var create_inode_seq__3 = (function (nodes,i,s){if((s == null))
{var len = nodes.length;var j = i;while(true){
if((j < len))
{if(!(((nodes[j]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j,null,null));
} else
{var temp__4124__auto__ = (nodes[(j + (1))]);if(cljs.core.truth_(temp__4124__auto__))
{var node = temp__4124__auto__;var temp__4124__auto____$1 = node.inode_seq();if(cljs.core.truth_(temp__4124__auto____$1))
{var node_seq = temp__4124__auto____$1;return (new cljs.core.NodeSeq(null,nodes,(j + (2)),node_seq,null));
} else
{{
var G__28590 = (j + (2));
j = G__28590;
continue;
}
}
} else
{{
var G__28591 = (j + (2));
j = G__28591;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_inode_seq.cljs$core$IFn$_invoke$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$core$IFn$_invoke$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorStr = "cljs.core/ArrayNodeSeq";
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.ArrayNodeSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first(self__.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var G__28592 = null;var G__28593 = self__.nodes;var G__28594 = self__.i;var G__28595 = cljs.core.next(self__.s);return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4(G__28592,G__28593,G__28594,G__28595) : cljs.core.create_array_node_seq.call(null,G__28592,G__28593,G__28594,G__28595));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.ArrayNodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_ArrayNodeSeq = (function __GT_ArrayNodeSeq(meta,nodes,i,s,__hash){return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,__hash));
});
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){return create_array_node_seq.cljs$core$IFn$_invoke$arity$4(null,nodes,(0),null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){if((s == null))
{var len = nodes.length;var j = i;while(true){
if((j < len))
{var temp__4124__auto__ = (nodes[j]);if(cljs.core.truth_(temp__4124__auto__))
{var nj = temp__4124__auto__;var temp__4124__auto____$1 = nj.inode_seq();if(cljs.core.truth_(temp__4124__auto____$1))
{var ns = temp__4124__auto____$1;return (new cljs.core.ArrayNodeSeq(meta,nodes,(j + (1)),ns,null));
} else
{{
var G__28600 = (j + (1));
j = G__28600;
continue;
}
}
} else
{{
var G__28601 = (j + (1));
j = G__28601;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_array_node_seq.cljs$core$IFn$_invoke$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$core$IFn$_invoke$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorStr = "cljs.core/PersistentHashMap";
cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentHashMap.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentHashMap.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.iterator((function (){var G__28603 = coll;return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__28603) : cljs.core.keys.call(null,G__28603));
})());
});
cljs.core.PersistentHashMap.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentHashMap.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.iterator((function (){var G__28604 = coll;return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__28604) : cljs.core.vals.call(null,G__28604));
})());
});
cljs.core.PersistentHashMap.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentHashMap.prototype.get = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentHashMap.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__28605 = cljs.core.seq(coll);var chunk__28606 = null;var count__28607 = (0);var i__28608 = (0);while(true){
if((i__28608 < count__28607))
{var vec__28609 = chunk__28606.cljs$core$IIndexed$_nth$arity$2(null,i__28608);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28609,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28609,(1),null);var G__28610_28621 = v;var G__28611_28622 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28610_28621,G__28611_28622) : f.call(null,G__28610_28621,G__28611_28622));
{
var G__28623 = seq__28605;
var G__28624 = chunk__28606;
var G__28625 = count__28607;
var G__28626 = (i__28608 + (1));
seq__28605 = G__28623;
chunk__28606 = G__28624;
count__28607 = G__28625;
i__28608 = G__28626;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__28605);if(temp__4126__auto__)
{var seq__28605__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__28605__$1))
{var c__20699__auto__ = cljs.core.chunk_first(seq__28605__$1);{
var G__28627 = cljs.core.chunk_rest(seq__28605__$1);
var G__28628 = c__20699__auto__;
var G__28629 = cljs.core.count(c__20699__auto__);
var G__28630 = (0);
seq__28605 = G__28627;
chunk__28606 = G__28628;
count__28607 = G__28629;
i__28608 = G__28630;
continue;
}
} else
{var vec__28612 = cljs.core.first(seq__28605__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28612,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28612,(1),null);var G__28613_28631 = v;var G__28614_28632 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28613_28631,G__28614_28632) : f.call(null,G__28613_28631,G__28614_28632));
{
var G__28633 = cljs.core.next(seq__28605__$1);
var G__28634 = null;
var G__28635 = (0);
var G__28636 = (0);
seq__28605 = G__28633;
chunk__28606 = G__28634;
count__28607 = G__28635;
i__28608 = G__28636;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return not_found;
}
} else
{if((self__.root == null))
{return not_found;
} else
{return self__.root.inode_lookup((0),cljs.core.hash(k),k,not_found);

}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;var init__$1 = ((self__.has_nil_QMARK_)?(function (){var G__28615 = init;var G__28616 = null;var G__28617 = self__.nil_val;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__28615,G__28616,G__28617) : f.call(null,G__28615,G__28616,G__28617));
})():init);if(cljs.core.reduced_QMARK_(init__$1))
{var G__28618 = init__$1;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28618) : cljs.core.deref.call(null,G__28618));
} else
{if(!((self__.root == null)))
{return self__.root.kv_reduce(f,init__$1);
} else
{return init__$1;

}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentHashMap(self__.meta,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_map(coll__$1,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientHashMap((function (){var obj28620 = {};return obj28620;
})(),self__.root,self__.cnt,self__.has_nil_QMARK_,self__.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._with_meta(cljs.core.PersistentHashMap.EMPTY,self__.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;if((k == null))
{if(self__.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - (1)),self__.root,false,null,null));
} else
{return coll__$1;
}
} else
{if((self__.root == null))
{return coll__$1;
} else
{var new_root = self__.root.inode_without((0),cljs.core.hash(k),k);if((new_root === self__.root))
{return coll__$1;
} else
{return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - (1)),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}

}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;if((k == null))
{if((self__.has_nil_QMARK_) && ((v === self__.nil_val)))
{return coll__$1;
} else
{return (new cljs.core.PersistentHashMap(self__.meta,((self__.has_nil_QMARK_)?self__.cnt:(self__.cnt + (1))),self__.root,true,v,null));
}
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));var new_root = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc((0),cljs.core.hash(k),k,v,added_leaf_QMARK_);if((new_root === self__.root))
{return coll__$1;
} else
{return (new cljs.core.PersistentHashMap(self__.meta,((added_leaf_QMARK_.val)?(self__.cnt + (1)):self__.cnt),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;if((k == null))
{return self__.has_nil_QMARK_;
} else
{if((self__.root == null))
{return false;
} else
{return !((self__.root.inode_lookup((0),cljs.core.hash(k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));

}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{var s = ((!((self__.root == null)))?self__.root.inode_seq():null);if(self__.has_nil_QMARK_)
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,self__.nil_val], null),s);
} else
{return s;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashMap(meta__$1,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_(entry))
{return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else
{var ret = coll__$1;var es = cljs.core.seq(entry);while(true){
if((es == null))
{return ret;
} else
{var e = cljs.core.first(es);if(cljs.core.vector_QMARK_(e))
{{
var G__28637 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__28638 = cljs.core.next(es);
ret = G__28637;
es = G__28638;
continue;
}
} else
{throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__28639 = null;
var G__28639__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__28639__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__28639 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__28639__2.call(this,self__,k);
case 3:
return G__28639__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28639.cljs$core$IFn$_invoke$arity$2 = G__28639__2;
G__28639.cljs$core$IFn$_invoke$arity$3 = G__28639__3;
return G__28639;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (self__,args28602){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28602)));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_PersistentHashMap = (function __GT_PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash){return (new cljs.core.PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash));
});
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,(0),null,false,null,(0)));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){var len = ks.length;var i = (0);var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);while(true){
if((i < len))
{{
var G__28640 = (i + (1));
var G__28641 = out.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(null,(ks[i]),(vs[i]));
i = G__28640;
out = G__28641;
continue;
}
} else
{return cljs.core.persistent_BANG_(out);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorStr = "cljs.core/TransientHashMap";
cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){var self__ = this;
var tcoll__$1 = this;return tcoll__$1.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){var self__ = this;
var tcoll__$1 = this;return tcoll__$1.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){var self__ = this;
var tcoll__$1 = this;return tcoll__$1.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;return tcoll__$1.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){var self__ = this;
var tcoll__$1 = this;if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return null;
}
} else
{if((self__.root == null))
{return null;
} else
{return self__.root.inode_lookup((0),cljs.core.hash(k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){var self__ = this;
var tcoll__$1 = this;if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return not_found;
}
} else
{if((self__.root == null))
{return not_found;
} else
{return self__.root.inode_lookup((0),cljs.core.hash(k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(self__.edit)
{return self__.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){var self__ = this;
var tcoll = this;if(self__.edit)
{if((function (){var G__28642 = o;if(G__28642)
{var bit__20565__auto__ = (G__28642.cljs$lang$protocol_mask$partition0$ & (2048));if((bit__20565__auto__) || (G__28642.cljs$core$IMapEntry$))
{return true;
} else
{if((!G__28642.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__28642);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__28642);
}
})())
{return tcoll.assoc_BANG_((function (){var G__28643 = o;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__28643) : cljs.core.key.call(null,G__28643));
})(),(function (){var G__28644 = o;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__28644) : cljs.core.val.call(null,G__28644));
})());
} else
{var es = cljs.core.seq(o);var tcoll__$1 = tcoll;while(true){
var temp__4124__auto__ = cljs.core.first(es);if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;{
var G__28647 = cljs.core.next(es);
var G__28648 = tcoll__$1.assoc_BANG_((function (){var G__28645 = e;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__28645) : cljs.core.key.call(null,G__28645));
})(),(function (){var G__28646 = e;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__28646) : cljs.core.val.call(null,G__28646));
})());
es = G__28647;
tcoll__$1 = G__28648;
continue;
}
} else
{return tcoll__$1;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){var self__ = this;
var tcoll = this;if(self__.edit)
{if((k == null))
{if((self__.nil_val === v))
{} else
{self__.nil_val = v;
}
if(self__.has_nil_QMARK_)
{} else
{self__.count = (self__.count + (1));
self__.has_nil_QMARK_ = true;
}
return tcoll;
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));var node = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc_BANG_(self__.edit,(0),cljs.core.hash(k),k,v,added_leaf_QMARK_);if((node === self__.root))
{} else
{self__.root = node;
}
if(added_leaf_QMARK_.val)
{self__.count = (self__.count + (1));
} else
{}
return tcoll;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){var self__ = this;
var tcoll = this;if(self__.edit)
{if((k == null))
{if(self__.has_nil_QMARK_)
{self__.has_nil_QMARK_ = false;
self__.nil_val = null;
self__.count = (self__.count - (1));
return tcoll;
} else
{return tcoll;
}
} else
{if((self__.root == null))
{return tcoll;
} else
{var removed_leaf_QMARK_ = (new cljs.core.Box(false));var node = self__.root.inode_without_BANG_(self__.edit,(0),cljs.core.hash(k),k,removed_leaf_QMARK_);if((node === self__.root))
{} else
{self__.root = node;
}
if(cljs.core.truth_((removed_leaf_QMARK_[(0)])))
{self__.count = (self__.count - (1));
} else
{}
return tcoll;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){var self__ = this;
var tcoll = this;if(self__.edit)
{self__.edit = null;
return (new cljs.core.PersistentHashMap(null,self__.count,self__.root,self__.has_nil_QMARK_,self__.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.__GT_TransientHashMap = (function __GT_TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val){return (new cljs.core.TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val));
});
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){var t = node;var stack__$1 = stack;while(true){
if(!((t == null)))
{{
var G__28649 = ((ascending_QMARK_)?t.left:t.right);
var G__28650 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack__$1,t);
t = G__28649;
stack__$1 = G__28650;
continue;
}
} else
{return stack__$1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374862;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentTreeMapSeq";
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentTreeMapSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt < (0)))
{return (cljs.core.count(cljs.core.next(coll__$1)) + (1));
} else
{return self__.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.peek(self__.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var t = cljs.core.first(self__.stack);var next_stack = cljs.core.tree_map_seq_push(((self__.ascending_QMARK_)?t.right:t.left),cljs.core.next(self__.stack),self__.ascending_QMARK_);if(!((next_stack == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack,self__.ascending_QMARK_,(self__.cnt - (1)),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeMapSeq(meta__$1,self__.stack,self__.ascending_QMARK_,self__.cnt,self__.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_PersistentTreeMapSeq = (function __GT_PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash){return (new cljs.core.PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash));
});
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push(tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){if((ins instanceof cljs.core.RedNode))
{if((ins.left instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if((ins.right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));

}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){if((ins instanceof cljs.core.RedNode))
{if((ins.right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if((ins.left instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));

}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){if((del instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if((right instanceof cljs.core.BlackNode))
{return cljs.core.balance_right(key,val,del,right.redden());
} else
{if(((right instanceof cljs.core.RedNode)) && ((right.left instanceof cljs.core.BlackNode)))
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right(right.key,right.val,right.left.right,right.right.redden()),null));
} else
{throw (new Error("red-black tree invariant violation"));

}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){if((del instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if((left instanceof cljs.core.BlackNode))
{return cljs.core.balance_left(key,val,left.redden(),del);
} else
{if(((left instanceof cljs.core.RedNode)) && ((left.right instanceof cljs.core.BlackNode)))
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left(left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{throw (new Error("red-black tree invariant violation"));

}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){var init__$1 = ((!((node.left == null)))?tree_map_kv_reduce(node.left,f,init):init);if(cljs.core.reduced_QMARK_(init__$1))
{var G__28663 = init__$1;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28663) : cljs.core.deref.call(null,G__28663));
} else
{var init__$2 = (function (){var G__28664 = init__$1;var G__28665 = node.key;var G__28666 = node.val;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__28664,G__28665,G__28666) : f.call(null,G__28664,G__28665,G__28666));
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__28667 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28667) : cljs.core.deref.call(null,G__28667));
} else
{var init__$3 = ((!((node.right == null)))?tree_map_kv_reduce(node.right,f,init__$2):init__$2);if(cljs.core.reduced_QMARK_(init__$3))
{var G__28668 = init__$3;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28668) : cljs.core.deref.call(null,G__28668));
} else
{return init__$3;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorStr = "cljs.core/BlackNode";
cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.add_right = (function (ins){var self__ = this;
var node = this;return ins.balance_right(node);
});
cljs.core.BlackNode.prototype.redden = (function (){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,self__.left,self__.right,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){var self__ = this;
var node = this;return node;
});
cljs.core.BlackNode.prototype.add_left = (function (ins){var self__ = this;
var node = this;return ins.balance_left(node);
});
cljs.core.BlackNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){var self__ = this;
var node = this;return (new cljs.core.BlackNode(key__$1,val__$1,left__$1,right__$1,null));
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){var self__ = this;
var node = this;return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));
});
cljs.core.BlackNode.prototype.balance_right = (function (parent){var self__ = this;
var node = this;return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));
});
cljs.core.BlackNode.prototype.remove_left = (function (del){var self__ = this;
var node = this;return cljs.core.balance_left_del(self__.key,self__.val,del,self__.right);
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var node = this;return cljs.core.tree_map_kv_reduce(node,f,init);
});
cljs.core.BlackNode.prototype.remove_right = (function (del){var self__ = this;
var node = this;return cljs.core.balance_right_del(self__.key,self__.val,self__.left,del);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){var self__ = this;
var node__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){var self__ = this;
var node__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){var self__ = this;
var node__$1 = this;if((n === (0)))
{return self__.key;
} else
{if((n === (1)))
{return self__.val;
} else
{return null;

}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){var self__ = this;
var node__$1 = this;if((n === (0)))
{return self__.key;
} else
{if((n === (1)))
{return self__.val;
} else
{return not_found;

}
}
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null).cljs$core$IVector$_assoc_n$arity$3(null,n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return null;
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return (2);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null);
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){var self__ = this;
var node__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(node__$1,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){var self__ = this;
var node__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(node__$1,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){var self__ = this;
var node__$1 = this;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.val),self__.key);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){var self__ = this;
var node__$1 = this;return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val,o], null);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__28670 = null;
var G__28670__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__28670__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__28670 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__28670__2.call(this,self__,k);
case 3:
return G__28670__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28670.cljs$core$IFn$_invoke$arity$2 = G__28670__2;
G__28670.cljs$core$IFn$_invoke$arity$3 = G__28670__3;
return G__28670;
})()
;
cljs.core.BlackNode.prototype.apply = (function (self__,args28669){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28669)));
});
cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var node = this;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var node = this;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_BlackNode = (function __GT_BlackNode(key,val,left,right,__hash){return (new cljs.core.BlackNode(key,val,left,right,__hash));
});

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorStr = "cljs.core/RedNode";
cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.add_right = (function (ins){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,self__.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){var self__ = this;
var node = this;throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.blacken = (function (){var self__ = this;
var node = this;return (new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,ins,self__.right,null));
});
cljs.core.RedNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){var self__ = this;
var node = this;return (new cljs.core.RedNode(key__$1,val__$1,left__$1,right__$1,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){var self__ = this;
var node = this;if((self__.left instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(self__.key,self__.val,self__.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,self__.right,parent.right,null)),null));
} else
{if((self__.right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(self__.right.key,self__.right.val,(new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,self__.right.right,parent.right,null)),null));
} else
{return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));

}
}
});
cljs.core.RedNode.prototype.balance_right = (function (parent){var self__ = this;
var node = this;if((self__.right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(self__.key,self__.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left,null)),self__.right.blacken(),null));
} else
{if((self__.left instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(self__.left.key,self__.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left.left,null)),(new cljs.core.BlackNode(self__.key,self__.val,self__.left.right,self__.right,null)),null));
} else
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));

}
}
});
cljs.core.RedNode.prototype.remove_left = (function (del){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,del,self__.right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var node = this;return cljs.core.tree_map_kv_reduce(node,f,init);
});
cljs.core.RedNode.prototype.remove_right = (function (del){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,self__.left,del,null));
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){var self__ = this;
var node__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){var self__ = this;
var node__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){var self__ = this;
var node__$1 = this;if((n === (0)))
{return self__.key;
} else
{if((n === (1)))
{return self__.val;
} else
{return null;

}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){var self__ = this;
var node__$1 = this;if((n === (0)))
{return self__.key;
} else
{if((n === (1)))
{return self__.val;
} else
{return not_found;

}
}
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null).cljs$core$IVector$_assoc_n$arity$3(null,n,v);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return null;
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return (2);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null);
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){var self__ = this;
var node__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(node__$1,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){var self__ = this;
var node__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(node__$1,f,start);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){var self__ = this;
var node__$1 = this;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.val),self__.key);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){var self__ = this;
var node__$1 = this;return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val,o], null);
});
cljs.core.RedNode.prototype.call = (function() {
var G__28672 = null;
var G__28672__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__28672__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__28672 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__28672__2.call(this,self__,k);
case 3:
return G__28672__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28672.cljs$core$IFn$_invoke$arity$2 = G__28672__2;
G__28672.cljs$core$IFn$_invoke$arity$3 = G__28672__3;
return G__28672;
})()
;
cljs.core.RedNode.prototype.apply = (function (self__,args28671){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28671)));
});
cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var node = this;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var node = this;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_RedNode = (function __GT_RedNode(key,val,left,right,__hash){return (new cljs.core.RedNode(key,val,left,right,__hash));
});
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c = (function (){var G__28685 = k;var G__28686 = tree.key;return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__28685,G__28686) : comp.call(null,G__28685,G__28686));
})();if((c === (0)))
{(found[(0)] = tree);
return null;
} else
{if((c < (0)))
{var ins = tree_map_add(comp,tree.left,k,v,found);if(!((ins == null)))
{return tree.add_left(ins);
} else
{return null;
}
} else
{var ins = tree_map_add(comp,tree.right,k,v,found);if(!((ins == null)))
{return tree.add_right(ins);
} else
{return null;
}

}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if((left instanceof cljs.core.RedNode))
{if((right instanceof cljs.core.RedNode))
{var app = tree_map_append(left.right,right.left);if((app instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.RedNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.RedNode(right.key,right.val,app.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append(left.right,right),null));
}
} else
{if((right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append(left,right.left),right.right,null));
} else
{var app = tree_map_append(left.right,right.left);if((app instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.BlackNode(right.key,right.val,app.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del(left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app,right.right,null)));
}

}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){if(!((tree == null)))
{var c = (function (){var G__28705 = k;var G__28706 = tree.key;return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__28705,G__28706) : comp.call(null,G__28705,G__28706));
})();if((c === (0)))
{(found[(0)] = tree);
return cljs.core.tree_map_append(tree.left,tree.right);
} else
{if((c < (0)))
{var del = tree_map_remove(comp,tree.left,k,found);if((!((del == null))) || (!(((found[(0)]) == null))))
{if((tree.left instanceof cljs.core.BlackNode))
{return cljs.core.balance_left_del(tree.key,tree.val,del,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del,tree.right,null));
}
} else
{return null;
}
} else
{var del = tree_map_remove(comp,tree.right,k,found);if((!((del == null))) || (!(((found[(0)]) == null))))
{if((tree.right instanceof cljs.core.BlackNode))
{return cljs.core.balance_right_del(tree.key,tree.val,tree.left,del);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del,null));
}
} else
{return null;
}

}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){var tk = tree.key;var c = (function (){var G__28717 = k;var G__28718 = tk;return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__28717,G__28718) : comp.call(null,G__28717,G__28718));
})();if((c === (0)))
{return tree.replace(tk,v,tree.left,tree.right);
} else
{if((c < (0)))
{return tree.replace(tk,tree.val,tree_map_replace(comp,tree.left,k,v),tree.right);
} else
{return tree.replace(tk,tree.val,tree.left,tree_map_replace(comp,tree.right,k,v));

}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorStr = "cljs.core/PersistentTreeMap";
cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__28720 = cljs.core.seq(coll);var chunk__28721 = null;var count__28722 = (0);var i__28723 = (0);while(true){
if((i__28723 < count__28722))
{var vec__28724 = chunk__28721.cljs$core$IIndexed$_nth$arity$2(null,i__28723);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28724,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28724,(1),null);var G__28725_28737 = v;var G__28726_28738 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28725_28737,G__28726_28738) : f.call(null,G__28725_28737,G__28726_28738));
{
var G__28739 = seq__28720;
var G__28740 = chunk__28721;
var G__28741 = count__28722;
var G__28742 = (i__28723 + (1));
seq__28720 = G__28739;
chunk__28721 = G__28740;
count__28722 = G__28741;
i__28723 = G__28742;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__28720);if(temp__4126__auto__)
{var seq__28720__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__28720__$1))
{var c__20699__auto__ = cljs.core.chunk_first(seq__28720__$1);{
var G__28743 = cljs.core.chunk_rest(seq__28720__$1);
var G__28744 = c__20699__auto__;
var G__28745 = cljs.core.count(c__20699__auto__);
var G__28746 = (0);
seq__28720 = G__28743;
chunk__28721 = G__28744;
count__28722 = G__28745;
i__28723 = G__28746;
continue;
}
} else
{var vec__28727 = cljs.core.first(seq__28720__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28727,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28727,(1),null);var G__28728_28747 = v;var G__28729_28748 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28728_28747,G__28729_28748) : f.call(null,G__28728_28747,G__28729_28748));
{
var G__28749 = cljs.core.next(seq__28720__$1);
var G__28750 = null;
var G__28751 = (0);
var G__28752 = (0);
seq__28720 = G__28749;
chunk__28721 = G__28750;
count__28722 = G__28751;
i__28723 = G__28752;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.get = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentTreeMap.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentTreeMap.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.iterator((function (){var G__28730 = coll;return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__28730) : cljs.core.keys.call(null,G__28730));
})());
});
cljs.core.PersistentTreeMap.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.iterator((function (){var G__28731 = coll;return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__28731) : cljs.core.vals.call(null,G__28731));
})());
});
cljs.core.PersistentTreeMap.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){var self__ = this;
var coll = this;var t = self__.tree;while(true){
if(!((t == null)))
{var c = (function (){var G__28732 = k;var G__28733 = t.key;return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__28732,G__28733) : self__.comp.call(null,G__28732,G__28733));
})();if((c === (0)))
{return t;
} else
{if((c < (0)))
{{
var G__28753 = t.left;
t = G__28753;
continue;
}
} else
{{
var G__28754 = t.right;
t = G__28754;
continue;
}

}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;var n = coll__$1.entry_at(k);if(!((n == null)))
{return n.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;if(!((self__.tree == null)))
{return cljs.core.tree_map_kv_reduce(self__.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,self__.meta,self__.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{return cljs.core.create_tree_map_seq(self__.tree,false,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_map(coll__$1,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentTreeMap.EMPTY,self__.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;var found = [null];var t = cljs.core.tree_map_remove(self__.comp,self__.tree,k,found);if((t == null))
{if((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(found,(0)) == null))
{return coll__$1;
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,null,(0),self__.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt - (1)),self__.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;var found = [null];var t = cljs.core.tree_map_add(self__.comp,self__.tree,k,v,found);if((t == null))
{var found_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(found,(0));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,found_node.val))
{return coll__$1;
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,cljs.core.tree_map_replace(self__.comp,self__.tree,k,v),self__.cnt,self__.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt + (1)),self__.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return !((coll__$1.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{return cljs.core.create_tree_map_seq(self__.tree,true,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,meta__$1,self__.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_(entry))
{return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else
{var ret = coll__$1;var es = cljs.core.seq(entry);while(true){
if((es == null))
{return ret;
} else
{var e = cljs.core.first(es);if(cljs.core.vector_QMARK_(e))
{{
var G__28755 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__28756 = cljs.core.next(es);
ret = G__28755;
es = G__28756;
continue;
}
} else
{throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__28757 = null;
var G__28757__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__28757__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__28757 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__28757__2.call(this,self__,k);
case 3:
return G__28757__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28757.cljs$core$IFn$_invoke$arity$2 = G__28757__2;
G__28757.cljs$core$IFn$_invoke$arity$3 = G__28757__3;
return G__28757;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (self__,args28719){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28719)));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{return cljs.core.create_tree_map_seq(self__.tree,ascending_QMARK_,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{var stack = null;var t = self__.tree;while(true){
if(!((t == null)))
{var c = (function (){var G__28734 = k;var G__28735 = t.key;return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__28734,G__28735) : self__.comp.call(null,G__28734,G__28735));
})();if((c === (0)))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t),ascending_QMARK_,(-1),null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c < (0)))
{{
var G__28758 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__28759 = t.left;
stack = G__28758;
t = G__28759;
continue;
}
} else
{{
var G__28760 = stack;
var G__28761 = t.right;
stack = G__28760;
t = G__28761;
continue;
}
}
} else
{if((c > (0)))
{{
var G__28762 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__28763 = t.right;
stack = G__28762;
t = G__28763;
continue;
}
} else
{{
var G__28764 = stack;
var G__28765 = t.left;
stack = G__28764;
t = G__28765;
continue;
}
}

}
}
} else
{if((stack == null))
{return null;
} else
{return (new cljs.core.PersistentTreeMapSeq(null,stack,ascending_QMARK_,(-1),null));
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;var G__28736 = entry;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__28736) : cljs.core.key.call(null,G__28736));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.comp;
});
cljs.core.__GT_PersistentTreeMap = (function __GT_PersistentTreeMap(comp,tree,cnt,meta,__hash){return (new cljs.core.PersistentTreeMap(comp,tree,cnt,meta,__hash));
});
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,(0),null,(0)));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){var in$ = cljs.core.seq(keyvals);var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);while(true){
if(in$)
{{
var G__28766 = cljs.core.nnext(in$);
var G__28767 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__28766;
out = G__28767;
continue;
}
} else
{return cljs.core.persistent_BANG_(out);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hash_map__delegate.call(this,keyvals);};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__28768){
var keyvals = cljs.core.seq(arglist__28768);
return hash_map__delegate(keyvals);
});
hash_map.cljs$core$IFn$_invoke$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(cljs.core.count(keyvals),(2)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return array_map__delegate.call(this,keyvals);};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__28769){
var keyvals = cljs.core.seq(arglist__28769);
return array_map__delegate(keyvals);
});
array_map.cljs$core$IFn$_invoke$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){var ks = [];var obj = (function (){var obj28773 = {};return obj28773;
})();var kvs = cljs.core.seq(keyvals);while(true){
if(kvs)
{ks.push(cljs.core.first(kvs));
(obj[cljs.core.first(kvs)] = cljs.core.second(kvs));
{
var G__28774 = cljs.core.nnext(kvs);
kvs = G__28774;
continue;
}
} else
{return cljs.core.ObjMap.fromObject(ks,obj);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return obj_map__delegate.call(this,keyvals);};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__28775){
var keyvals = cljs.core.seq(arglist__28775);
return obj_map__delegate(keyvals);
});
obj_map.cljs$core$IFn$_invoke$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){var in$ = cljs.core.seq(keyvals);var out = cljs.core.PersistentTreeMap.EMPTY;while(true){
if(in$)
{{
var G__28776 = cljs.core.nnext(in$);
var G__28777 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__28776;
out = G__28777;
continue;
}
} else
{return out;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sorted_map__delegate.call(this,keyvals);};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__28778){
var keyvals = cljs.core.seq(arglist__28778);
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$core$IFn$_invoke$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){var in$ = cljs.core.seq(keyvals);var out = (new cljs.core.PersistentTreeMap(cljs.core.fn__GT_comparator(comparator),null,(0),null,(0)));while(true){
if(in$)
{{
var G__28779 = cljs.core.nnext(in$);
var G__28780 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__28779;
out = G__28780;
continue;
}
} else
{return out;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;if (arguments.length > 1) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return sorted_map_by__delegate.call(this,comparator,keyvals);};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__28781){
var comparator = cljs.core.first(arglist__28781);
var keyvals = cljs.core.rest(arglist__28781);
return sorted_map_by__delegate(comparator,keyvals);
});
sorted_map_by.cljs$core$IFn$_invoke$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;

/**
* @constructor
*/
cljs.core.KeySeq = (function (mseq,_meta){
this.mseq = mseq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.KeySeq.cljs$lang$type = true;
cljs.core.KeySeq.cljs$lang$ctorStr = "cljs.core/KeySeq";
cljs.core.KeySeq.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/KeySeq");
});
cljs.core.KeySeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.KeySeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.KeySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__._meta;
});
cljs.core.KeySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__28782 = self__.mseq;if(G__28782)
{var bit__20565__auto__ = (G__28782.cljs$lang$protocol_mask$partition0$ & (128));if((bit__20565__auto__) || (G__28782.cljs$core$INext$))
{return true;
} else
{if((!G__28782.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__28782);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__28782);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));if((nseq == null))
{return null;
} else
{return (new cljs.core.KeySeq(nseq,self__._meta));
}
});
cljs.core.KeySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll(coll__$1);
});
cljs.core.KeySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.KeySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});
cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.KeySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var me = self__.mseq.cljs$core$ISeq$_first$arity$1(null);return me.cljs$core$IMapEntry$_key$arity$1(null);
});
cljs.core.KeySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__28783 = self__.mseq;if(G__28783)
{var bit__20565__auto__ = (G__28783.cljs$lang$protocol_mask$partition0$ & (128));if((bit__20565__auto__) || (G__28783.cljs$core$INext$))
{return true;
} else
{if((!G__28783.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__28783);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__28783);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));if(!((nseq == null)))
{return (new cljs.core.KeySeq(nseq,self__._meta));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.KeySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.KeySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.KeySeq(self__.mseq,new_meta));
});
cljs.core.KeySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_KeySeq = (function __GT_KeySeq(mseq,_meta){return (new cljs.core.KeySeq(mseq,_meta));
});
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){var temp__4126__auto__ = cljs.core.seq(hash_map);if(temp__4126__auto__)
{var mseq = temp__4126__auto__;return (new cljs.core.KeySeq(mseq,null));
} else
{return null;
}
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){return cljs.core._key(map_entry);
});

/**
* @constructor
*/
cljs.core.ValSeq = (function (mseq,_meta){
this.mseq = mseq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.ValSeq.cljs$lang$type = true;
cljs.core.ValSeq.cljs$lang$ctorStr = "cljs.core/ValSeq";
cljs.core.ValSeq.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/ValSeq");
});
cljs.core.ValSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.ValSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.ValSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__._meta;
});
cljs.core.ValSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__28784 = self__.mseq;if(G__28784)
{var bit__20565__auto__ = (G__28784.cljs$lang$protocol_mask$partition0$ & (128));if((bit__20565__auto__) || (G__28784.cljs$core$INext$))
{return true;
} else
{if((!G__28784.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__28784);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__28784);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));if((nseq == null))
{return null;
} else
{return (new cljs.core.ValSeq(nseq,self__._meta));
}
});
cljs.core.ValSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll(coll__$1);
});
cljs.core.ValSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.ValSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});
cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.ValSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var me = self__.mseq.cljs$core$ISeq$_first$arity$1(null);return me.cljs$core$IMapEntry$_val$arity$1(null);
});
cljs.core.ValSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__28785 = self__.mseq;if(G__28785)
{var bit__20565__auto__ = (G__28785.cljs$lang$protocol_mask$partition0$ & (128));if((bit__20565__auto__) || (G__28785.cljs$core$INext$))
{return true;
} else
{if((!G__28785.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__28785);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__28785);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));if(!((nseq == null)))
{return (new cljs.core.ValSeq(nseq,self__._meta));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.ValSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.ValSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.ValSeq(self__.mseq,new_meta));
});
cljs.core.ValSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_ValSeq = (function __GT_ValSeq(mseq,_meta){return (new cljs.core.ValSeq(mseq,_meta));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){var temp__4126__auto__ = cljs.core.seq(hash_map);if(temp__4126__auto__)
{var mseq = temp__4126__auto__;return (new cljs.core.ValSeq(mseq,null));
} else
{return null;
}
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){return cljs.core._val(map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps)))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__28786_SHARP_,p2__28787_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__19267__auto__ = p1__28786_SHARP_;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),p2__28787_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;if (arguments.length > 0) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return merge__delegate.call(this,maps);};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__28788){
var maps = cljs.core.seq(arglist__28788);
return merge__delegate(maps);
});
merge.cljs$core$IFn$_invoke$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps)))
{var merge_entry = (function (m,e){var k = cljs.core.first(e);var v = cljs.core.second(e);if(cljs.core.contains_QMARK_(m,k))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__28791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__28792 = v;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28791,G__28792) : f.call(null,G__28791,G__28792));
})());
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});var merge2 = ((function (merge_entry){
return (function (m1,m2){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_entry,(function (){var or__19267__auto__ = m1;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq(m2));
});})(merge_entry))
;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(merge2,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;if (arguments.length > 1) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return merge_with__delegate.call(this,f,maps);};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__28793){
var f = cljs.core.first(arglist__28793);
var maps = cljs.core.rest(arglist__28793);
return merge_with__delegate(f,maps);
});
merge_with.cljs$core$IFn$_invoke$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){var ret = cljs.core.PersistentArrayMap.EMPTY;var keys = cljs.core.seq(keyseq);while(true){
if(keys)
{var key = cljs.core.first(keys);var entry = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map,key,new cljs.core.Keyword("cljs.core","not-found","cljs.core/not-found",-1572889185));{
var G__28794 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(entry,new cljs.core.Keyword("cljs.core","not-found","cljs.core/not-found",-1572889185)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key,entry):ret);
var G__28795 = cljs.core.next(keys);
ret = G__28794;
keys = G__28795;
continue;
}
} else
{return ret;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorStr = "cljs.core/PersistentHashSet";
cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentHashSet.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentHashSet.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.iterator(cljs.core.seq(coll));
});
cljs.core.PersistentHashSet.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.set_entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentHashSet.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.iterator(cljs.core.seq(coll));
});
cljs.core.PersistentHashSet.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentHashSet.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__28798 = cljs.core.seq(coll);var chunk__28799 = null;var count__28800 = (0);var i__28801 = (0);while(true){
if((i__28801 < count__28800))
{var vec__28802 = chunk__28799.cljs$core$IIndexed$_nth$arity$2(null,i__28801);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28802,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28802,(1),null);var G__28803_28808 = v;var G__28804_28809 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28803_28808,G__28804_28809) : f.call(null,G__28803_28808,G__28804_28809));
{
var G__28810 = seq__28798;
var G__28811 = chunk__28799;
var G__28812 = count__28800;
var G__28813 = (i__28801 + (1));
seq__28798 = G__28810;
chunk__28799 = G__28811;
count__28800 = G__28812;
i__28801 = G__28813;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__28798);if(temp__4126__auto__)
{var seq__28798__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__28798__$1))
{var c__20699__auto__ = cljs.core.chunk_first(seq__28798__$1);{
var G__28814 = cljs.core.chunk_rest(seq__28798__$1);
var G__28815 = c__20699__auto__;
var G__28816 = cljs.core.count(c__20699__auto__);
var G__28817 = (0);
seq__28798 = G__28814;
chunk__28799 = G__28815;
count__28800 = G__28816;
i__28801 = G__28817;
continue;
}
} else
{var vec__28805 = cljs.core.first(seq__28798__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28805,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28805,(1),null);var G__28806_28818 = v;var G__28807_28819 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28806_28818,G__28807_28819) : f.call(null,G__28806_28818,G__28807_28819));
{
var G__28820 = cljs.core.next(seq__28798__$1);
var G__28821 = null;
var G__28822 = (0);
var G__28823 = (0);
seq__28798 = G__28820;
chunk__28799 = G__28821;
count__28800 = G__28822;
i__28801 = G__28823;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){var self__ = this;
var coll__$1 = this;if(cljs.core._contains_key_QMARK_(self__.hash_map,v))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentHashSet(self__.meta,self__.hash_map,self__.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._count(self__.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (coll__$1){
return (function (p1__28796_SHARP_){return cljs.core.contains_QMARK_(coll__$1,p1__28796_SHARP_);
});})(coll__$1))
,other));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientHashSet(cljs.core._as_transient(self__.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentHashSet.EMPTY,self__.meta);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashSet(self__.meta,cljs.core._dissoc(self__.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.keys(self__.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashSet(meta__$1,self__.hash_map,self__.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashSet(self__.meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__28824 = null;
var G__28824__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__28824__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__28824 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__28824__2.call(this,self__,k);
case 3:
return G__28824__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28824.cljs$core$IFn$_invoke$arity$2 = G__28824__2;
G__28824.cljs$core$IFn$_invoke$arity$3 = G__28824__3;
return G__28824;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (self__,args28797){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28797)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_PersistentHashSet = (function __GT_PersistentHashSet(meta,hash_map,__hash){return (new cljs.core.PersistentHashSet(meta,hash_map,__hash));
});
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.PersistentArrayMap.EMPTY,(0)));
cljs.core.PersistentHashSet.fromArray = (function (items,no_clone){var len = items.length;if((len <= cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{var arr = ((no_clone)?items:cljs.core.aclone(items));var i = (0);var out = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < len))
{{
var G__28825 = (i + (1));
var G__28826 = cljs.core._assoc_BANG_(out,(items[i]),null);
i = G__28825;
out = G__28826;
continue;
}
} else
{return (new cljs.core.PersistentHashSet(null,cljs.core._persistent_BANG_(out),null));
}
break;
}
} else
{var i = (0);var out = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);while(true){
if((i < len))
{{
var G__28827 = (i + (1));
var G__28828 = cljs.core._conj_BANG_(out,(items[i]));
i = G__28827;
out = G__28828;
continue;
}
} else
{return cljs.core._persistent_BANG_(out);
}
break;
}
}
});

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 136;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorStr = "cljs.core/TransientHashSet";
cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__28830 = null;
var G__28830__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var tcoll = self____$1;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__28830__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var tcoll = self____$1;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__28830 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__28830__2.call(this,self__,k);
case 3:
return G__28830__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28830.cljs$core$IFn$_invoke$arity$2 = G__28830__2;
G__28830.cljs$core$IFn$_invoke$arity$3 = G__28830__3;
return G__28830;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (self__,args28829){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28829)));
});
cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var tcoll = this;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var tcoll = this;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){var self__ = this;
var tcoll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(tcoll__$1,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){var self__ = this;
var tcoll__$1 = this;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;return cljs.core.count(self__.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){var self__ = this;
var tcoll__$1 = this;self__.transient_map = cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(self__.transient_map,v);
return tcoll__$1;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){var self__ = this;
var tcoll__$1 = this;self__.transient_map = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(self__.transient_map,o,null);
return tcoll__$1;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_(self__.transient_map),null));
});
cljs.core.__GT_TransientHashSet = (function __GT_TransientHashSet(transient_map){return (new cljs.core.TransientHashSet(transient_map));
});

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorStr = "cljs.core/PersistentTreeSet";
cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentTreeSet.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentTreeSet.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.iterator(cljs.core.seq(coll));
});
cljs.core.PersistentTreeSet.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.set_entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentTreeSet.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.iterator(cljs.core.seq(coll));
});
cljs.core.PersistentTreeSet.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentTreeSet.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__28833 = cljs.core.seq(coll);var chunk__28834 = null;var count__28835 = (0);var i__28836 = (0);while(true){
if((i__28836 < count__28835))
{var vec__28837 = chunk__28834.cljs$core$IIndexed$_nth$arity$2(null,i__28836);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28837,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28837,(1),null);var G__28838_28843 = v;var G__28839_28844 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28838_28843,G__28839_28844) : f.call(null,G__28838_28843,G__28839_28844));
{
var G__28845 = seq__28833;
var G__28846 = chunk__28834;
var G__28847 = count__28835;
var G__28848 = (i__28836 + (1));
seq__28833 = G__28845;
chunk__28834 = G__28846;
count__28835 = G__28847;
i__28836 = G__28848;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__28833);if(temp__4126__auto__)
{var seq__28833__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__28833__$1))
{var c__20699__auto__ = cljs.core.chunk_first(seq__28833__$1);{
var G__28849 = cljs.core.chunk_rest(seq__28833__$1);
var G__28850 = c__20699__auto__;
var G__28851 = cljs.core.count(c__20699__auto__);
var G__28852 = (0);
seq__28833 = G__28849;
chunk__28834 = G__28850;
count__28835 = G__28851;
i__28836 = G__28852;
continue;
}
} else
{var vec__28840 = cljs.core.first(seq__28833__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28840,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28840,(1),null);var G__28841_28853 = v;var G__28842_28854 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28841_28853,G__28842_28854) : f.call(null,G__28841_28853,G__28842_28854));
{
var G__28855 = cljs.core.next(seq__28833__$1);
var G__28856 = null;
var G__28857 = (0);
var G__28858 = (0);
seq__28833 = G__28855;
chunk__28834 = G__28856;
count__28835 = G__28857;
i__28836 = G__28858;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){var self__ = this;
var coll__$1 = this;var n = self__.tree_map.entry_at(v);if(!((n == null)))
{return n.key;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentTreeSet(self__.meta,self__.tree_map,self__.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.count(self__.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((cljs.core.count(self__.tree_map) > (0)))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.rseq(self__.tree_map));
} else
{return null;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (coll__$1){
return (function (p1__28831_SHARP_){return cljs.core.contains_QMARK_(coll__$1,p1__28831_SHARP_);
});})(coll__$1))
,other));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentTreeSet.EMPTY,self__.meta);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.keys(self__.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeSet(meta__$1,self__.tree_map,self__.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__28859 = null;
var G__28859__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__28859__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__28859 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__28859__2.call(this,self__,k);
case 3:
return G__28859__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28859.cljs$core$IFn$_invoke$arity$2 = G__28859__2;
G__28859.cljs$core$IFn$_invoke$arity$3 = G__28859__3;
return G__28859;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (self__,args28832){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28832)));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){var self__ = this;
var coll__$1 = this;return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core._sorted_seq(self__.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){var self__ = this;
var coll__$1 = this;return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core._sorted_seq_from(self__.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._comparator(self__.tree_map);
});
cljs.core.__GT_PersistentTreeSet = (function __GT_PersistentTreeSet(meta,tree_map,__hash){return (new cljs.core.PersistentTreeSet(meta,tree_map,__hash));
});
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.PersistentTreeMap.EMPTY,(0)));
cljs.core.set_from_indexed_seq = (function set_from_indexed_seq(iseq){var arr = iseq.arr;var ret = (function (){var a__20866__auto__ = arr;var i = (0);var res = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);while(true){
if((i < a__20866__auto__.length))
{{
var G__28860 = (i + (1));
var G__28861 = res.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,(arr[i]));
i = G__28860;
res = G__28861;
continue;
}
} else
{return res;
}
break;
}
})();return ret.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(null);
});
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){var in$ = cljs.core.seq(coll);if((in$ == null))
{return cljs.core.PersistentHashSet.EMPTY;
} else
{if(((in$ instanceof cljs.core.IndexedSeq)) && ((in$.i === (0))))
{return cljs.core.set_from_indexed_seq(in$);
} else
{var in$__$1 = in$;var out = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);while(true){
if(!((in$__$1 == null)))
{{
var G__28862 = in$__$1.cljs$core$INext$_next$arity$1(null);
var G__28863 = out.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,in$__$1.cljs$core$ISeq$_first$arity$1(null));
in$__$1 = G__28862;
out = G__28863;
continue;
}
} else
{return out.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(null);
}
break;
}

}
}
});
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__28864__delegate = function (keys){return cljs.core.set(keys);
};
var G__28864 = function (var_args){
var keys = null;if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__28864__delegate.call(this,keys);};
G__28864.cljs$lang$maxFixedArity = 0;
G__28864.cljs$lang$applyTo = (function (arglist__28865){
var keys = cljs.core.seq(arglist__28865);
return G__28864__delegate(keys);
});
G__28864.cljs$core$IFn$_invoke$arity$variadic = G__28864__delegate;
return G__28864;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$core$IFn$_invoke$arity$0 = hash_set__0;
hash_set.cljs$core$IFn$_invoke$arity$variadic = hash_set__1.cljs$core$IFn$_invoke$arity$variadic;
return hash_set;
})()
;
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sorted_set__delegate.call(this,keys);};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__28866){
var keys = cljs.core.seq(arglist__28866);
return sorted_set__delegate(keys);
});
sorted_set.cljs$core$IFn$_invoke$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by(comparator),(0))),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;if (arguments.length > 1) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return sorted_set_by__delegate.call(this,comparator,keys);};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__28867){
var comparator = cljs.core.first(arglist__28867);
var keys = cljs.core.rest(arglist__28867);
return sorted_set_by__delegate(comparator,keys);
});
sorted_set_by.cljs$core$IFn$_invoke$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap.  Returns a transducer when no collection
* is provided.
*/
cljs.core.replace = (function() {
var replace = null;
var replace__1 = (function (smap){return cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__28868_SHARP_){var temp__4124__auto__ = cljs.core.find(smap,p1__28868_SHARP_);if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;return cljs.core.val(e);
} else
{return p1__28868_SHARP_;
}
}));
});
var replace__2 = (function (smap,coll){if(cljs.core.vector_QMARK_(coll))
{var n = cljs.core.count(coll);return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (n){
return (function (v,i){var temp__4124__auto__ = cljs.core.find(smap,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,i));if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,i,cljs.core.second(e));
} else
{return v;
}
});})(n))
,coll,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.iterate(cljs.core.inc,(0))));
} else
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28869_SHARP_){var temp__4124__auto__ = cljs.core.find(smap,p1__28869_SHARP_);if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;return cljs.core.second(e);
} else
{return p1__28869_SHARP_;
}
}),coll);
}
});
replace = function(smap,coll){
switch(arguments.length){
case 1:
return replace__1.call(this,smap);
case 2:
return replace__2.call(this,smap,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replace.cljs$core$IFn$_invoke$arity$1 = replace__1;
replace.cljs$core$IFn$_invoke$arity$2 = replace__2;
return replace;
})()
;
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){var step = (function step(xs,seen){return (new cljs.core.LazySeq(null,(function (){return (function (p__28880,seen__$1){while(true){
var vec__28881 = p__28880;var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28881,(0),null);var xs__$1 = vec__28881;var temp__4126__auto__ = cljs.core.seq(xs__$1);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.contains_QMARK_(seen__$1,f))
{{
var G__28882 = cljs.core.rest(s);
var G__28883 = seen__$1;
p__28880 = G__28882;
seen__$1 = G__28883;
continue;
}
} else
{return cljs.core.cons(f,step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,f)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});return step(coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){var ret = cljs.core.PersistentVector.EMPTY;var s__$1 = s;while(true){
if(cljs.core.next(s__$1))
{{
var G__28884 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.first(s__$1));
var G__28885 = cljs.core.next(s__$1);
ret = G__28884;
s__$1 = G__28885;
continue;
}
} else
{return cljs.core.seq(ret);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){if((function (){var G__28887 = x;if(G__28887)
{var bit__20549__auto__ = (G__28887.cljs$lang$protocol_mask$partition1$ & (4096));if((bit__20549__auto__) || (G__28887.cljs$core$INamed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return x.cljs$core$INamed$_name$arity$1(null);
} else
{if(typeof x === 'string')
{return x;
} else
{throw (new Error(("Doesn't support name: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))));
}
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){var map = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);var ks = cljs.core.seq(keys);var vs = cljs.core.seq(vals);while(true){
if((ks) && (vs))
{{
var G__28888 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(map,cljs.core.first(ks),cljs.core.first(vs));
var G__28889 = cljs.core.next(ks);
var G__28890 = cljs.core.next(vs);
map = G__28888;
ks = G__28889;
vs = G__28890;
continue;
}
} else
{return cljs.core.persistent_BANG_(map);
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){return x;
});
var max_key__3 = (function (k,x,y){if(((function (){var G__28901 = x;return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__28901) : k.call(null,G__28901));
})() > (function (){var G__28902 = y;return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__28902) : k.call(null,G__28902));
})()))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__28903__delegate = function (k,x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__28891_SHARP_,p2__28892_SHARP_){return max_key.cljs$core$IFn$_invoke$arity$3(k,p1__28891_SHARP_,p2__28892_SHARP_);
}),max_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__28903 = function (k,x,y,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__28903__delegate.call(this,k,x,y,more);};
G__28903.cljs$lang$maxFixedArity = 3;
G__28903.cljs$lang$applyTo = (function (arglist__28904){
var k = cljs.core.first(arglist__28904);
arglist__28904 = cljs.core.next(arglist__28904);
var x = cljs.core.first(arglist__28904);
arglist__28904 = cljs.core.next(arglist__28904);
var y = cljs.core.first(arglist__28904);
var more = cljs.core.rest(arglist__28904);
return G__28903__delegate(k,x,y,more);
});
G__28903.cljs$core$IFn$_invoke$arity$variadic = G__28903__delegate;
return G__28903;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$core$IFn$_invoke$arity$2 = max_key__2;
max_key.cljs$core$IFn$_invoke$arity$3 = max_key__3;
max_key.cljs$core$IFn$_invoke$arity$variadic = max_key__4.cljs$core$IFn$_invoke$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){return x;
});
var min_key__3 = (function (k,x,y){if(((function (){var G__28915 = x;return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__28915) : k.call(null,G__28915));
})() < (function (){var G__28916 = y;return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__28916) : k.call(null,G__28916));
})()))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__28917__delegate = function (k,x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__28905_SHARP_,p2__28906_SHARP_){return min_key.cljs$core$IFn$_invoke$arity$3(k,p1__28905_SHARP_,p2__28906_SHARP_);
}),min_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__28917 = function (k,x,y,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__28917__delegate.call(this,k,x,y,more);};
G__28917.cljs$lang$maxFixedArity = 3;
G__28917.cljs$lang$applyTo = (function (arglist__28918){
var k = cljs.core.first(arglist__28918);
arglist__28918 = cljs.core.next(arglist__28918);
var x = cljs.core.first(arglist__28918);
arglist__28918 = cljs.core.next(arglist__28918);
var y = cljs.core.first(arglist__28918);
var more = cljs.core.rest(arglist__28918);
return G__28917__delegate(k,x,y,more);
});
G__28917.cljs$core$IFn$_invoke$arity$variadic = G__28917__delegate;
return G__28917;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$core$IFn$_invoke$arity$2 = min_key__2;
min_key.cljs$core$IFn$_invoke$arity$3 = min_key__3;
min_key.cljs$core$IFn$_invoke$arity$variadic = min_key__4.cljs$core$IFn$_invoke$arity$variadic;
return min_key;
})()
;

/**
* @constructor
*/
cljs.core.ArrayList = (function (arr){
this.arr = arr;
})
cljs.core.ArrayList.cljs$lang$type = true;
cljs.core.ArrayList.cljs$lang$ctorStr = "cljs.core/ArrayList";
cljs.core.ArrayList.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/ArrayList");
});
cljs.core.ArrayList.prototype.add = (function (x){var self__ = this;
var _ = this;return self__.arr.push(x);
});
cljs.core.ArrayList.prototype.size = (function (){var self__ = this;
var _ = this;return self__.arr.length;
});
cljs.core.ArrayList.prototype.clear = (function (){var self__ = this;
var _ = this;return self__.arr = [];
});
cljs.core.ArrayList.prototype.isEmpty = (function (){var self__ = this;
var _ = this;return (self__.arr.length === (0));
});
cljs.core.ArrayList.prototype.toArray = (function (){var self__ = this;
var _ = this;return self__.arr;
});
cljs.core.__GT_ArrayList = (function __GT_ArrayList(arr){return (new cljs.core.ArrayList(arr));
});
cljs.core.array_list = (function array_list(){return (new cljs.core.ArrayList([]));
});
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__1 = (function (n){return (function (f1){var a = cljs.core.array_list();return ((function (a){
return (function() {
var G__28935 = null;
var G__28935__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__28935__1 = (function (result){var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec(a.toArray());a.clear();
var G__28930 = result;var G__28931 = v;return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__28930,G__28931) : f1.call(null,G__28930,G__28931));
})());var G__28932 = result__$1;return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__28932) : f1.call(null,G__28932));
});
var G__28935__2 = (function (result,input){a.add(input);
if((n === a.size()))
{var v = cljs.core.vec(a.toArray());a.clear();
var G__28933 = result;var G__28934 = v;return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__28933,G__28934) : f1.call(null,G__28933,G__28934));
} else
{return result;
}
});
G__28935 = function(result,input){
switch(arguments.length){
case 0:
return G__28935__0.call(this);
case 1:
return G__28935__1.call(this,result);
case 2:
return G__28935__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28935.cljs$core$IFn$_invoke$arity$0 = G__28935__0;
G__28935.cljs$core$IFn$_invoke$arity$1 = G__28935__1;
G__28935.cljs$core$IFn$_invoke$arity$2 = G__28935__2;
return G__28935;
})()
;})(a))
});
});
var partition_all__2 = (function (n,coll){return partition_all.cljs$core$IFn$_invoke$arity$3(n,n,coll);
});
var partition_all__3 = (function (n,step,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;return cljs.core.cons(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s),partition_all.cljs$core$IFn$_invoke$arity$3(n,step,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else
{return null;
}
}),null,null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 1:
return partition_all__1.call(this,n);
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_all.cljs$core$IFn$_invoke$arity$1 = partition_all__1;
partition_all.cljs$core$IFn$_invoke$arity$2 = partition_all__2;
partition_all.cljs$core$IFn$_invoke$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.take_while = (function() {
var take_while = null;
var take_while__1 = (function (pred){return (function (f1){return (function() {
var G__28948 = null;
var G__28948__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__28948__1 = (function (result){var G__28943 = result;return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__28943) : f1.call(null,G__28943));
});
var G__28948__2 = (function (result,input){if(cljs.core.truth_((function (){var G__28944 = input;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__28944) : pred.call(null,G__28944));
})()))
{var G__28945 = result;var G__28946 = input;return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__28945,G__28946) : f1.call(null,G__28945,G__28946));
} else
{return cljs.core.reduced(result);
}
});
G__28948 = function(result,input){
switch(arguments.length){
case 0:
return G__28948__0.call(this);
case 1:
return G__28948__1.call(this,result);
case 2:
return G__28948__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28948.cljs$core$IFn$_invoke$arity$0 = G__28948__0;
G__28948.cljs$core$IFn$_invoke$arity$1 = G__28948__1;
G__28948.cljs$core$IFn$_invoke$arity$2 = G__28948__2;
return G__28948;
})()
});
});
var take_while__2 = (function (pred,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.truth_((function (){var G__28947 = cljs.core.first(s);return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__28947) : pred.call(null,G__28947));
})()))
{return cljs.core.cons(cljs.core.first(s),take_while.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.rest(s)));
} else
{return null;
}
} else
{return null;
}
}),null,null));
});
take_while = function(pred,coll){
switch(arguments.length){
case 1:
return take_while__1.call(this,pred);
case 2:
return take_while__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_while.cljs$core$IFn$_invoke$arity$1 = take_while__1;
take_while.cljs$core$IFn$_invoke$arity$2 = take_while__2;
return take_while;
})()
;
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){return (function (e){var comp = cljs.core._comparator(sc);var G__28953 = (function (){var G__28955 = cljs.core._entry_key(sc,e);var G__28956 = key;return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__28955,G__28956) : comp.call(null,G__28955,G__28956));
})();var G__28954 = (0);return (test.cljs$core$IFn$_invoke$arity$2 ? test.cljs$core$IFn$_invoke$arity$2(G__28953,G__28954) : test.call(null,G__28953,G__28954));
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){var include = cljs.core.mk_bound_fn(sc,test,key);if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_], true).call(null,test)))
{var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,key,true);if(cljs.core.truth_(temp__4126__auto__))
{var vec__28960 = temp__4126__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28960,(0),null);var s = vec__28960;if(cljs.core.truth_((function (){var G__28961 = e;return (include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(G__28961) : include.call(null,G__28961));
})()))
{return s;
} else
{return cljs.core.next(s);
}
} else
{return null;
}
} else
{return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(include,cljs.core._sorted_seq(sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,start_key,true);if(cljs.core.truth_(temp__4126__auto__))
{var vec__28962 = temp__4126__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28962,(0),null);var s = vec__28962;return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.mk_bound_fn(sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,start_test,start_key).call(null,e))?s:cljs.core.next(s)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subseq.cljs$core$IFn$_invoke$arity$3 = subseq__3;
subseq.cljs$core$IFn$_invoke$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){var include = cljs.core.mk_bound_fn(sc,test,key);if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_], true).call(null,test)))
{var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,key,false);if(cljs.core.truth_(temp__4126__auto__))
{var vec__28966 = temp__4126__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28966,(0),null);var s = vec__28966;if(cljs.core.truth_((function (){var G__28967 = e;return (include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(G__28967) : include.call(null,G__28967));
})()))
{return s;
} else
{return cljs.core.next(s);
}
} else
{return null;
}
} else
{return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(include,cljs.core._sorted_seq(sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,end_key,false);if(cljs.core.truth_(temp__4126__auto__))
{var vec__28968 = temp__4126__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28968,(0),null);var s = vec__28968;return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.mk_bound_fn(sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,end_test,end_key).call(null,e))?s:cljs.core.next(s)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rsubseq.cljs$core$IFn$_invoke$arity$3 = rsubseq__3;
rsubseq.cljs$core$IFn$_invoke$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorStr = "cljs.core/Range";
cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/Range");
});
cljs.core.Range.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.Range.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){var self__ = this;
var rng__$1 = this;if((n < cljs.core._count(rng__$1)))
{return (self__.start + (n * self__.step));
} else
{if(((self__.start > self__.end)) && ((self__.step === (0))))
{return self__.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){var self__ = this;
var rng__$1 = this;if((n < cljs.core._count(rng__$1)))
{return (self__.start + (n * self__.step));
} else
{if(((self__.start > self__.end)) && ((self__.step === (0))))
{return self__.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;return self__.meta;
});
cljs.core.Range.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.Range(self__.meta,self__.start,self__.end,self__.step,self__.__hash));
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if((self__.step > (0)))
{if(((self__.start + self__.step) < self__.end))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return null;
}
} else
{if(((self__.start + self__.step) > self__.end))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if(cljs.core.not(cljs.core._seq(rng__$1)))
{return (0);
} else
{var G__28969 = ((self__.end - self__.start) / self__.step);return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__28969) : Math.ceil.call(null,G__28969));
}
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;var h__20006__auto__ = self__.__hash;if(!((h__20006__auto__ == null)))
{return h__20006__auto__;
} else
{var h__20006__auto____$1 = cljs.core.hash_ordered_coll(rng__$1);self__.__hash = h__20006__auto____$1;
return h__20006__auto____$1;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){var self__ = this;
var rng__$1 = this;return cljs.core.equiv_sequential(rng__$1,other);
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){var self__ = this;
var rng__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(rng__$1,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){var self__ = this;
var rng__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(rng__$1,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if((cljs.core._seq(rng__$1) == null))
{return null;
} else
{return self__.start;
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if(!((cljs.core._seq(rng__$1) == null)))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if((self__.step > (0)))
{if((self__.start < self__.end))
{return rng__$1;
} else
{return null;
}
} else
{if((self__.start > self__.end))
{return rng__$1;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta__$1){var self__ = this;
var rng__$1 = this;return (new cljs.core.Range(meta__$1,self__.start,self__.end,self__.step,self__.__hash));
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){var self__ = this;
var rng__$1 = this;return cljs.core.cons(o,rng__$1);
});
cljs.core.__GT_Range = (function __GT_Range(meta,start,end,step,__hash){return (new cljs.core.Range(meta,start,end,step,__hash));
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){return range.cljs$core$IFn$_invoke$arity$3((0),Number.MAX_VALUE,(1));
});
var range__1 = (function (end){return range.cljs$core$IFn$_invoke$arity$3((0),end,(1));
});
var range__2 = (function (start,end){return range.cljs$core$IFn$_invoke$arity$3(start,end,(1));
});
var range__3 = (function (start,end,step){return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range.cljs$core$IFn$_invoke$arity$0 = range__0;
range.cljs$core$IFn$_invoke$arity$1 = range__1;
range.cljs$core$IFn$_invoke$arity$2 = range__2;
range.cljs$core$IFn$_invoke$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.take_nth = (function() {
var take_nth = null;
var take_nth__1 = (function (n){return (function (f1){var ia = (function (){var G__28985 = (-1);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28985) : cljs.core.atom.call(null,G__28985));
})();return ((function (ia){
return (function() {
var G__28989 = null;
var G__28989__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__28989__1 = (function (result){var G__28986 = result;return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__28986) : f1.call(null,G__28986));
});
var G__28989__2 = (function (result,input){var i = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ia,cljs.core.inc);if((cljs.core.rem(i,n) === (0)))
{var G__28987 = result;var G__28988 = input;return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__28987,G__28988) : f1.call(null,G__28987,G__28988));
} else
{return result;
}
});
G__28989 = function(result,input){
switch(arguments.length){
case 0:
return G__28989__0.call(this);
case 1:
return G__28989__1.call(this,result);
case 2:
return G__28989__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28989.cljs$core$IFn$_invoke$arity$0 = G__28989__0;
G__28989.cljs$core$IFn$_invoke$arity$1 = G__28989__1;
G__28989.cljs$core$IFn$_invoke$arity$2 = G__28989__2;
return G__28989;
})()
;})(ia))
});
});
var take_nth__2 = (function (n,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;return cljs.core.cons(cljs.core.first(s),take_nth.cljs$core$IFn$_invoke$arity$2(n,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s)));
} else
{return null;
}
}),null,null));
});
take_nth = function(n,coll){
switch(arguments.length){
case 1:
return take_nth__1.call(this,n);
case 2:
return take_nth__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_nth.cljs$core$IFn$_invoke$arity$1 = take_nth__1;
take_nth.cljs$core$IFn$_invoke$arity$2 = take_nth__2;
return take_nth;
})()
;
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(pred,coll),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(pred,coll)], null);
});
/**
* Applies f to each value in coll, splitting it each time f returns a
* new value.  Returns a lazy seq of partitions.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.partition_by = (function() {
var partition_by = null;
var partition_by__1 = (function (f){return (function (f1){var a = cljs.core.array_list();var pa = (function (){var G__29005 = new cljs.core.Keyword("cljs.core","none","cljs.core/none",926646439);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29005) : cljs.core.atom.call(null,G__29005));
})();return ((function (a,pa){
return (function() {
var G__29017 = null;
var G__29017__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__29017__1 = (function (result){var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec(a.toArray());a.clear();
var G__29006 = result;var G__29007 = v;return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__29006,G__29007) : f1.call(null,G__29006,G__29007));
})());var G__29008 = result__$1;return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__29008) : f1.call(null,G__29008));
});
var G__29017__2 = (function (result,input){var pval = (function (){var G__29009 = pa;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29009) : cljs.core.deref.call(null,G__29009));
})();var val = (function (){var G__29010 = input;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29010) : f.call(null,G__29010));
})();var G__29011_29018 = pa;var G__29012_29019 = val;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__29011_29018,G__29012_29019) : cljs.core.reset_BANG_.call(null,G__29011_29018,G__29012_29019));
if((cljs.core.keyword_identical_QMARK_(pval,new cljs.core.Keyword("cljs.core","none","cljs.core/none",926646439))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,pval)))
{a.add(input);
return result;
} else
{var v = cljs.core.vec(a.toArray());a.clear();
var ret = (function (){var G__29013 = result;var G__29014 = v;return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__29013,G__29014) : f1.call(null,G__29013,G__29014));
})();if(cljs.core.reduced_QMARK_(ret))
{} else
{a.add(input);
}
return ret;
}
});
G__29017 = function(result,input){
switch(arguments.length){
case 0:
return G__29017__0.call(this);
case 1:
return G__29017__1.call(this,result);
case 2:
return G__29017__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29017.cljs$core$IFn$_invoke$arity$0 = G__29017__0;
G__29017.cljs$core$IFn$_invoke$arity$1 = G__29017__1;
G__29017.cljs$core$IFn$_invoke$arity$2 = G__29017__2;
return G__29017;
})()
;})(a,pa))
});
});
var partition_by__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;var fst = cljs.core.first(s);var fv = (function (){var G__29015 = fst;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29015) : f.call(null,G__29015));
})();var run = cljs.core.cons(fst,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (fst,fv,s,temp__4126__auto__){
return (function (p1__28990_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fv,(function (){var G__29016 = p1__28990_SHARP_;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29016) : f.call(null,G__29016));
})());
});})(fst,fv,s,temp__4126__auto__))
,cljs.core.next(s)));return cljs.core.cons(run,partition_by.cljs$core$IFn$_invoke$arity$2(f,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(run),s))));
} else
{return null;
}
}),null,null));
});
partition_by = function(f,coll){
switch(arguments.length){
case 1:
return partition_by__1.call(this,f);
case 2:
return partition_by__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$1 = partition_by__1;
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
return partition_by;
})()
;
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (counts,x){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(counts,x,(cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,x,(0)) + (1)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4124__auto__ = cljs.core.seq(coll);if(temp__4124__auto__)
{var s = temp__4124__auto__;return reductions.cljs$core$IFn$_invoke$arity$3(f,cljs.core.first(s),cljs.core.rest(s));
} else
{return cljs.core._conj(cljs.core.List.EMPTY,(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})());
}
}),null,null));
});
var reductions__3 = (function (f,init,coll){return cljs.core.cons(init,(new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;return reductions.cljs$core$IFn$_invoke$arity$3(f,(function (){var G__29028 = init;var G__29029 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29028,G__29029) : f.call(null,G__29028,G__29029));
})(),cljs.core.rest(s));
} else
{return null;
}
}),null,null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reductions.cljs$core$IFn$_invoke$arity$2 = reductions__2;
reductions.cljs$core$IFn$_invoke$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){return (function() {
var G__29124 = null;
var G__29124__0 = (function (){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})()],null));
});
var G__29124__1 = (function (x){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__29082 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29082) : f.call(null,G__29082));
})()],null));
});
var G__29124__2 = (function (x,y){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__29083 = x;var G__29084 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29083,G__29084) : f.call(null,G__29083,G__29084));
})()],null));
});
var G__29124__3 = (function (x,y,z){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__29085 = x;var G__29086 = y;var G__29087 = z;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__29085,G__29086,G__29087) : f.call(null,G__29085,G__29086,G__29087));
})()],null));
});
var G__29124__4 = (function() { 
var G__29125__delegate = function (x,y,z,args){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args)],null));
};
var G__29125 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29125__delegate.call(this,x,y,z,args);};
G__29125.cljs$lang$maxFixedArity = 3;
G__29125.cljs$lang$applyTo = (function (arglist__29126){
var x = cljs.core.first(arglist__29126);
arglist__29126 = cljs.core.next(arglist__29126);
var y = cljs.core.first(arglist__29126);
arglist__29126 = cljs.core.next(arglist__29126);
var z = cljs.core.first(arglist__29126);
var args = cljs.core.rest(arglist__29126);
return G__29125__delegate(x,y,z,args);
});
G__29125.cljs$core$IFn$_invoke$arity$variadic = G__29125__delegate;
return G__29125;
})()
;
G__29124 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__29124__0.call(this);
case 1:
return G__29124__1.call(this,x);
case 2:
return G__29124__2.call(this,x,y);
case 3:
return G__29124__3.call(this,x,y,z);
default:
return G__29124__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29124.cljs$lang$maxFixedArity = 3;
G__29124.cljs$lang$applyTo = G__29124__4.cljs$lang$applyTo;
G__29124.cljs$core$IFn$_invoke$arity$0 = G__29124__0;
G__29124.cljs$core$IFn$_invoke$arity$1 = G__29124__1;
G__29124.cljs$core$IFn$_invoke$arity$2 = G__29124__2;
G__29124.cljs$core$IFn$_invoke$arity$3 = G__29124__3;
G__29124.cljs$core$IFn$_invoke$arity$variadic = G__29124__4.cljs$core$IFn$_invoke$arity$variadic;
return G__29124;
})()
});
var juxt__2 = (function (f,g){return (function() {
var G__29127 = null;
var G__29127__0 = (function (){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),(function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})()],null));
});
var G__29127__1 = (function (x){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__29088 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29088) : f.call(null,G__29088));
})(),(function (){var G__29089 = x;return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__29089) : g.call(null,G__29089));
})()],null));
});
var G__29127__2 = (function (x,y){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__29090 = x;var G__29091 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29090,G__29091) : f.call(null,G__29090,G__29091));
})(),(function (){var G__29092 = x;var G__29093 = y;return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__29092,G__29093) : g.call(null,G__29092,G__29093));
})()],null));
});
var G__29127__3 = (function (x,y,z){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__29094 = x;var G__29095 = y;var G__29096 = z;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__29094,G__29095,G__29096) : f.call(null,G__29094,G__29095,G__29096));
})(),(function (){var G__29097 = x;var G__29098 = y;var G__29099 = z;return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__29097,G__29098,G__29099) : g.call(null,G__29097,G__29098,G__29099));
})()],null));
});
var G__29127__4 = (function() { 
var G__29128__delegate = function (x,y,z,args){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args)],null));
};
var G__29128 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29128__delegate.call(this,x,y,z,args);};
G__29128.cljs$lang$maxFixedArity = 3;
G__29128.cljs$lang$applyTo = (function (arglist__29129){
var x = cljs.core.first(arglist__29129);
arglist__29129 = cljs.core.next(arglist__29129);
var y = cljs.core.first(arglist__29129);
arglist__29129 = cljs.core.next(arglist__29129);
var z = cljs.core.first(arglist__29129);
var args = cljs.core.rest(arglist__29129);
return G__29128__delegate(x,y,z,args);
});
G__29128.cljs$core$IFn$_invoke$arity$variadic = G__29128__delegate;
return G__29128;
})()
;
G__29127 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__29127__0.call(this);
case 1:
return G__29127__1.call(this,x);
case 2:
return G__29127__2.call(this,x,y);
case 3:
return G__29127__3.call(this,x,y,z);
default:
return G__29127__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29127.cljs$lang$maxFixedArity = 3;
G__29127.cljs$lang$applyTo = G__29127__4.cljs$lang$applyTo;
G__29127.cljs$core$IFn$_invoke$arity$0 = G__29127__0;
G__29127.cljs$core$IFn$_invoke$arity$1 = G__29127__1;
G__29127.cljs$core$IFn$_invoke$arity$2 = G__29127__2;
G__29127.cljs$core$IFn$_invoke$arity$3 = G__29127__3;
G__29127.cljs$core$IFn$_invoke$arity$variadic = G__29127__4.cljs$core$IFn$_invoke$arity$variadic;
return G__29127;
})()
});
var juxt__3 = (function (f,g,h){return (function() {
var G__29130 = null;
var G__29130__0 = (function (){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),(function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})(),(function (){return (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
})()],null));
});
var G__29130__1 = (function (x){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__29100 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29100) : f.call(null,G__29100));
})(),(function (){var G__29101 = x;return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__29101) : g.call(null,G__29101));
})(),(function (){var G__29102 = x;return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__29102) : h.call(null,G__29102));
})()],null));
});
var G__29130__2 = (function (x,y){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__29103 = x;var G__29104 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29103,G__29104) : f.call(null,G__29103,G__29104));
})(),(function (){var G__29105 = x;var G__29106 = y;return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__29105,G__29106) : g.call(null,G__29105,G__29106));
})(),(function (){var G__29107 = x;var G__29108 = y;return (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(G__29107,G__29108) : h.call(null,G__29107,G__29108));
})()],null));
});
var G__29130__3 = (function (x,y,z){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__29109 = x;var G__29110 = y;var G__29111 = z;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__29109,G__29110,G__29111) : f.call(null,G__29109,G__29110,G__29111));
})(),(function (){var G__29112 = x;var G__29113 = y;var G__29114 = z;return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__29112,G__29113,G__29114) : g.call(null,G__29112,G__29113,G__29114));
})(),(function (){var G__29115 = x;var G__29116 = y;var G__29117 = z;return (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(G__29115,G__29116,G__29117) : h.call(null,G__29115,G__29116,G__29117));
})()],null));
});
var G__29130__4 = (function() { 
var G__29131__delegate = function (x,y,z,args){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args)],null));
};
var G__29131 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29131__delegate.call(this,x,y,z,args);};
G__29131.cljs$lang$maxFixedArity = 3;
G__29131.cljs$lang$applyTo = (function (arglist__29132){
var x = cljs.core.first(arglist__29132);
arglist__29132 = cljs.core.next(arglist__29132);
var y = cljs.core.first(arglist__29132);
arglist__29132 = cljs.core.next(arglist__29132);
var z = cljs.core.first(arglist__29132);
var args = cljs.core.rest(arglist__29132);
return G__29131__delegate(x,y,z,args);
});
G__29131.cljs$core$IFn$_invoke$arity$variadic = G__29131__delegate;
return G__29131;
})()
;
G__29130 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__29130__0.call(this);
case 1:
return G__29130__1.call(this,x);
case 2:
return G__29130__2.call(this,x,y);
case 3:
return G__29130__3.call(this,x,y,z);
default:
return G__29130__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29130.cljs$lang$maxFixedArity = 3;
G__29130.cljs$lang$applyTo = G__29130__4.cljs$lang$applyTo;
G__29130.cljs$core$IFn$_invoke$arity$0 = G__29130__0;
G__29130.cljs$core$IFn$_invoke$arity$1 = G__29130__1;
G__29130.cljs$core$IFn$_invoke$arity$2 = G__29130__2;
G__29130.cljs$core$IFn$_invoke$arity$3 = G__29130__3;
G__29130.cljs$core$IFn$_invoke$arity$variadic = G__29130__4.cljs$core$IFn$_invoke$arity$variadic;
return G__29130;
})()
});
var juxt__4 = (function() { 
var G__29133__delegate = function (f,g,h,fs){var fs__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f,g,h,fs);return ((function (fs__$1){
return (function() {
var G__29134 = null;
var G__29134__0 = (function (){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__29030_SHARP_,p2__29031_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__29030_SHARP_,(function (){return (p2__29031_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p2__29031_SHARP_.cljs$core$IFn$_invoke$arity$0() : p2__29031_SHARP_.call(null));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__29134__1 = (function (x){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__29032_SHARP_,p2__29033_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__29032_SHARP_,(function (){var G__29118 = x;return (p2__29033_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__29033_SHARP_.cljs$core$IFn$_invoke$arity$1(G__29118) : p2__29033_SHARP_.call(null,G__29118));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__29134__2 = (function (x,y){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__29034_SHARP_,p2__29035_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__29034_SHARP_,(function (){var G__29119 = x;var G__29120 = y;return (p2__29035_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__29035_SHARP_.cljs$core$IFn$_invoke$arity$2(G__29119,G__29120) : p2__29035_SHARP_.call(null,G__29119,G__29120));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__29134__3 = (function (x,y,z){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__29036_SHARP_,p2__29037_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__29036_SHARP_,(function (){var G__29121 = x;var G__29122 = y;var G__29123 = z;return (p2__29037_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p2__29037_SHARP_.cljs$core$IFn$_invoke$arity$3(G__29121,G__29122,G__29123) : p2__29037_SHARP_.call(null,G__29121,G__29122,G__29123));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__29134__4 = (function() { 
var G__29135__delegate = function (x,y,z,args){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__29038_SHARP_,p2__29039_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__29038_SHARP_,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(p2__29039_SHARP_,x,y,z,args));
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
};
var G__29135 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29135__delegate.call(this,x,y,z,args);};
G__29135.cljs$lang$maxFixedArity = 3;
G__29135.cljs$lang$applyTo = (function (arglist__29136){
var x = cljs.core.first(arglist__29136);
arglist__29136 = cljs.core.next(arglist__29136);
var y = cljs.core.first(arglist__29136);
arglist__29136 = cljs.core.next(arglist__29136);
var z = cljs.core.first(arglist__29136);
var args = cljs.core.rest(arglist__29136);
return G__29135__delegate(x,y,z,args);
});
G__29135.cljs$core$IFn$_invoke$arity$variadic = G__29135__delegate;
return G__29135;
})()
;
G__29134 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__29134__0.call(this);
case 1:
return G__29134__1.call(this,x);
case 2:
return G__29134__2.call(this,x,y);
case 3:
return G__29134__3.call(this,x,y,z);
default:
return G__29134__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29134.cljs$lang$maxFixedArity = 3;
G__29134.cljs$lang$applyTo = G__29134__4.cljs$lang$applyTo;
G__29134.cljs$core$IFn$_invoke$arity$0 = G__29134__0;
G__29134.cljs$core$IFn$_invoke$arity$1 = G__29134__1;
G__29134.cljs$core$IFn$_invoke$arity$2 = G__29134__2;
G__29134.cljs$core$IFn$_invoke$arity$3 = G__29134__3;
G__29134.cljs$core$IFn$_invoke$arity$variadic = G__29134__4.cljs$core$IFn$_invoke$arity$variadic;
return G__29134;
})()
;})(fs__$1))
};
var G__29133 = function (f,g,h,var_args){
var fs = null;if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29133__delegate.call(this,f,g,h,fs);};
G__29133.cljs$lang$maxFixedArity = 3;
G__29133.cljs$lang$applyTo = (function (arglist__29137){
var f = cljs.core.first(arglist__29137);
arglist__29137 = cljs.core.next(arglist__29137);
var g = cljs.core.first(arglist__29137);
arglist__29137 = cljs.core.next(arglist__29137);
var h = cljs.core.first(arglist__29137);
var fs = cljs.core.rest(arglist__29137);
return G__29133__delegate(f,g,h,fs);
});
G__29133.cljs$core$IFn$_invoke$arity$variadic = G__29133__delegate;
return G__29133;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$core$IFn$_invoke$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$core$IFn$_invoke$arity$1 = juxt__1;
juxt.cljs$core$IFn$_invoke$arity$2 = juxt__2;
juxt.cljs$core$IFn$_invoke$arity$3 = juxt__3;
juxt.cljs$core$IFn$_invoke$arity$variadic = juxt__4.cljs$core$IFn$_invoke$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){while(true){
if(cljs.core.seq(coll))
{{
var G__29138 = cljs.core.next(coll);
coll = G__29138;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){while(true){
if((cljs.core.seq(coll)) && ((n > (0))))
{{
var G__29139 = (n - (1));
var G__29140 = cljs.core.next(coll);
n = G__29139;
coll = G__29140;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dorun.cljs$core$IFn$_invoke$arity$1 = dorun__1;
dorun.cljs$core$IFn$_invoke$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(coll);
return coll;
});
var doall__2 = (function (n,coll){cljs.core.dorun.cljs$core$IFn$_invoke$arity$2(n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
doall.cljs$core$IFn$_invoke$arity$1 = doall__1;
doall.cljs$core$IFn$_invoke$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){return (o instanceof RegExp);
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){if(typeof s === 'string')
{var matches = re.exec(s);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(matches),s))
{if((cljs.core.count(matches) === (1)))
{return cljs.core.first(matches);
} else
{return cljs.core.vec(matches);
}
} else
{return null;
}
} else
{throw (new TypeError("re-matches must match against a string."));
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){if(typeof s === 'string')
{var matches = re.exec(s);if((matches == null))
{return null;
} else
{if((cljs.core.count(matches) === (1)))
{return cljs.core.first(matches);
} else
{return cljs.core.vec(matches);
}
}
} else
{throw (new TypeError("re-find must match against a string."));
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){var match_data = cljs.core.re_find(re,s);var match_idx = s.search(re);var match_str = ((cljs.core.coll_QMARK_(match_data))?cljs.core.first(match_data):match_data);var post_match = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(match_idx + cljs.core.count(match_str)));if(cljs.core.truth_(match_data))
{return (new cljs.core.LazySeq(null,((function (match_data,match_idx,match_str,post_match){
return (function (){return cljs.core.cons(match_data,((cljs.core.seq(post_match))?re_seq(re,post_match):null));
});})(match_data,match_idx,match_str,post_match))
,null,null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){var vec__29144 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,s);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29144,(0),null);var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29144,(1),null);var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29144,(2),null);return (new RegExp(pattern,flags));
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){var _STAR_print_level_STAR_29152 = cljs.core._STAR_print_level_STAR_;try{cljs.core._STAR_print_level_STAR_ = (((cljs.core._STAR_print_level_STAR_ == null))?null:(cljs.core._STAR_print_level_STAR_ - (1)));
if((!((cljs.core._STAR_print_level_STAR_ == null))) && ((cljs.core._STAR_print_level_STAR_ < (0))))
{return cljs.core._write(writer,"#");
} else
{cljs.core._write(writer,begin);
if(cljs.core.seq(coll))
{var G__29153_29159 = cljs.core.first(coll);var G__29154_29160 = writer;var G__29155_29161 = opts;(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__29153_29159,G__29154_29160,G__29155_29161) : print_one.call(null,G__29153_29159,G__29154_29160,G__29155_29161));
} else
{}
var coll_29162__$1 = cljs.core.next(coll);var n_29163 = (new cljs.core.Keyword(null,"print-length","print-length",1931866356).cljs$core$IFn$_invoke$arity$1(opts) - (1));while(true){
if((coll_29162__$1) && (((n_29163 == null)) || (!((n_29163 === (0))))))
{cljs.core._write(writer,sep);
var G__29156_29164 = cljs.core.first(coll_29162__$1);var G__29157_29165 = writer;var G__29158_29166 = opts;(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__29156_29164,G__29157_29165,G__29158_29166) : print_one.call(null,G__29156_29164,G__29157_29165,G__29158_29166));
{
var G__29167 = cljs.core.next(coll_29162__$1);
var G__29168 = (n_29163 - (1));
coll_29162__$1 = G__29167;
n_29163 = G__29168;
continue;
}
} else
{if((cljs.core.seq(coll_29162__$1)) && ((n_29163 === (0))))
{cljs.core._write(writer,sep);
cljs.core._write(writer,"...");
} else
{}
}
break;
}
return cljs.core._write(writer,end);
}
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_29152;
}});
/**
* @param {...*} var_args
*/
cljs.core.write_all = (function() { 
var write_all__delegate = function (writer,ss){var seq__29173 = cljs.core.seq(ss);var chunk__29174 = null;var count__29175 = (0);var i__29176 = (0);while(true){
if((i__29176 < count__29175))
{var s = chunk__29174.cljs$core$IIndexed$_nth$arity$2(null,i__29176);cljs.core._write(writer,s);
{
var G__29177 = seq__29173;
var G__29178 = chunk__29174;
var G__29179 = count__29175;
var G__29180 = (i__29176 + (1));
seq__29173 = G__29177;
chunk__29174 = G__29178;
count__29175 = G__29179;
i__29176 = G__29180;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__29173);if(temp__4126__auto__)
{var seq__29173__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__29173__$1))
{var c__20699__auto__ = cljs.core.chunk_first(seq__29173__$1);{
var G__29181 = cljs.core.chunk_rest(seq__29173__$1);
var G__29182 = c__20699__auto__;
var G__29183 = cljs.core.count(c__20699__auto__);
var G__29184 = (0);
seq__29173 = G__29181;
chunk__29174 = G__29182;
count__29175 = G__29183;
i__29176 = G__29184;
continue;
}
} else
{var s = cljs.core.first(seq__29173__$1);cljs.core._write(writer,s);
{
var G__29185 = cljs.core.next(seq__29173__$1);
var G__29186 = null;
var G__29187 = (0);
var G__29188 = (0);
seq__29173 = G__29185;
chunk__29174 = G__29186;
count__29175 = G__29187;
i__29176 = G__29188;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var write_all = function (writer,var_args){
var ss = null;if (arguments.length > 1) {
  ss = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return write_all__delegate.call(this,writer,ss);};
write_all.cljs$lang$maxFixedArity = 1;
write_all.cljs$lang$applyTo = (function (arglist__29189){
var writer = cljs.core.first(arglist__29189);
var ss = cljs.core.rest(arglist__29189);
return write_all__delegate(writer,ss);
});
write_all.cljs$core$IFn$_invoke$arity$variadic = write_all__delegate;
return write_all;
})()
;
cljs.core.string_print = (function string_print(x){(cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1(x) : cljs.core._STAR_print_fn_STAR_.call(null,x));
return null;
});
cljs.core.flush = (function flush(){return null;
});
cljs.core.char_escapes = (function (){var obj29191 = {"\"":"\\\"","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};return obj29191;
})();
cljs.core.quote_string = (function quote_string(s){return ("\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s.replace((function (){var G__29194 = "[\\\\\"\b\f\n\r\t]";var G__29195 = "g";return RegExp(G__29194,G__29195);
})(),(function (match){return (cljs.core.char_escapes[match]);
})))+"\"");
});
/**
* Prefer this to pr-seq, because it makes the printing function
* configurable, allowing efficient implementations such as appending
* to a StringBuffer.
*/
cljs.core.pr_writer = (function pr_writer(obj,writer,opts){if((obj == null))
{return cljs.core._write(writer,"nil");
} else
{if((void 0 === obj))
{return cljs.core._write(writer,"#<undefined>");
} else
{if(cljs.core.truth_((function (){var and__19255__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"meta","meta",1499536964));if(cljs.core.truth_(and__19255__auto__))
{var and__19255__auto____$1 = (function (){var G__29209 = obj;if(G__29209)
{var bit__20565__auto__ = (G__29209.cljs$lang$protocol_mask$partition0$ & (131072));if((bit__20565__auto__) || (G__29209.cljs$core$IMeta$))
{return true;
} else
{if((!G__29209.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__29209);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__29209);
}
})();if(and__19255__auto____$1)
{return cljs.core.meta(obj);
} else
{return and__19255__auto____$1;
}
} else
{return and__19255__auto__;
}
})()))
{cljs.core._write(writer,"^");
pr_writer(cljs.core.meta(obj),writer,opts);
cljs.core._write(writer," ");
} else
{}
if((obj == null))
{return cljs.core._write(writer,"nil");
} else
{if(obj.cljs$lang$type)
{return obj.cljs$lang$ctorPrWriter(obj,writer,opts);
} else
{if((function (){var G__29210 = obj;if(G__29210)
{var bit__20549__auto__ = (G__29210.cljs$lang$protocol_mask$partition0$ & (2147483648));if((bit__20549__auto__) || (G__29210.cljs$core$IPrintWithWriter$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return obj.cljs$core$IPrintWithWriter$_pr_writer$arity$3(null,writer,opts);
} else
{if(((cljs.core.type(obj) === Boolean)) || (typeof obj === 'number'))
{return cljs.core._write(writer,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj)));
} else
{if(cljs.core.object_QMARK_(obj))
{cljs.core._write(writer,"#js ");
var G__29211 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(obj[k])], null);
}),cljs.core.js_keys(obj));var G__29212 = pr_writer;var G__29213 = writer;var G__29214 = opts;return (cljs.core.print_map.cljs$core$IFn$_invoke$arity$4 ? cljs.core.print_map.cljs$core$IFn$_invoke$arity$4(G__29211,G__29212,G__29213,G__29214) : cljs.core.print_map.call(null,G__29211,G__29212,G__29213,G__29214));
} else
{if(obj instanceof Array)
{return cljs.core.pr_sequential_writer(writer,pr_writer,"#js ["," ","]",opts,obj);
} else
{if(cljs.core.truth_((function (){var G__29215 = obj;return goog.isString(G__29215);
})()))
{if(cljs.core.truth_(new cljs.core.Keyword(null,"readably","readably",1129599760).cljs$core$IFn$_invoke$arity$1(opts)))
{return cljs.core._write(writer,cljs.core.quote_string(obj));
} else
{return cljs.core._write(writer,obj);
}
} else
{if(cljs.core.fn_QMARK_(obj))
{return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj)),">"], 0));
} else
{if((obj instanceof Date))
{var normalize = (function (n,len){var ns = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));while(true){
if((cljs.core.count(ns) < len))
{{
var G__29217 = ("0"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns));
ns = G__29217;
continue;
}
} else
{return ns;
}
break;
}
});return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#inst \"",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj.getUTCFullYear())),"-",normalize((obj.getUTCMonth() + (1)),(2)),"-",normalize(obj.getUTCDate(),(2)),"T",normalize(obj.getUTCHours(),(2)),":",normalize(obj.getUTCMinutes(),(2)),":",normalize(obj.getUTCSeconds(),(2)),".",normalize(obj.getUTCMilliseconds(),(3)),"-","00:00\""], 0));
} else
{if(cljs.core.regexp_QMARK_(obj))
{return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#\"",obj.source,"\""], 0));
} else
{if((function (){var G__29216 = obj;if(G__29216)
{var bit__20565__auto__ = (G__29216.cljs$lang$protocol_mask$partition0$ & (2147483648));if((bit__20565__auto__) || (G__29216.cljs$core$IPrintWithWriter$))
{return true;
} else
{if((!G__29216.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__29216);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__29216);
}
})())
{return cljs.core._pr_writer(obj,writer,opts);
} else
{return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj)),">"], 0));

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
cljs.core.pr_seq_writer = (function pr_seq_writer(objs,writer,opts){cljs.core.pr_writer(cljs.core.first(objs),writer,opts);
var seq__29222 = cljs.core.seq(cljs.core.next(objs));var chunk__29223 = null;var count__29224 = (0);var i__29225 = (0);while(true){
if((i__29225 < count__29224))
{var obj = chunk__29223.cljs$core$IIndexed$_nth$arity$2(null,i__29225);cljs.core._write(writer," ");
cljs.core.pr_writer(obj,writer,opts);
{
var G__29226 = seq__29222;
var G__29227 = chunk__29223;
var G__29228 = count__29224;
var G__29229 = (i__29225 + (1));
seq__29222 = G__29226;
chunk__29223 = G__29227;
count__29224 = G__29228;
i__29225 = G__29229;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__29222);if(temp__4126__auto__)
{var seq__29222__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__29222__$1))
{var c__20699__auto__ = cljs.core.chunk_first(seq__29222__$1);{
var G__29230 = cljs.core.chunk_rest(seq__29222__$1);
var G__29231 = c__20699__auto__;
var G__29232 = cljs.core.count(c__20699__auto__);
var G__29233 = (0);
seq__29222 = G__29230;
chunk__29223 = G__29231;
count__29224 = G__29232;
i__29225 = G__29233;
continue;
}
} else
{var obj = cljs.core.first(seq__29222__$1);cljs.core._write(writer," ");
cljs.core.pr_writer(obj,writer,opts);
{
var G__29234 = cljs.core.next(seq__29222__$1);
var G__29235 = null;
var G__29236 = (0);
var G__29237 = (0);
seq__29222 = G__29234;
chunk__29223 = G__29235;
count__29224 = G__29236;
i__29225 = G__29237;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){var sb = (new goog.string.StringBuffer());var writer = (new cljs.core.StringBufferWriter(sb));cljs.core.pr_seq_writer(objs,writer,opts);
writer.cljs$core$IWriter$_flush$arity$1(null);
return sb;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){if(cljs.core.empty_QMARK_(objs))
{return "";
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_sb_with_opts(objs,opts)));
}
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){if(cljs.core.empty_QMARK_(objs))
{return "\n";
} else
{var sb = cljs.core.pr_sb_with_opts(objs,opts);sb.append("\n");
return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
}
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){return cljs.core.string_print(cljs.core.pr_str_with_opts(objs,opts));
});
cljs.core.newline = (function newline(opts){cljs.core.string_print("\n");
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"flush-on-newline","flush-on-newline",-151457939))))
{return cljs.core.flush();
} else
{return null;
}
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintWithWriter.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){return cljs.core.pr_str_with_opts(objs,cljs.core.pr_opts());
};
var pr_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pr_str__delegate.call(this,objs);};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__29238){
var objs = cljs.core.seq(arglist__29238);
return pr_str__delegate(objs);
});
pr_str.cljs$core$IFn$_invoke$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){return cljs.core.prn_str_with_opts(objs,cljs.core.pr_opts());
};
var prn_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prn_str__delegate.call(this,objs);};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__29239){
var objs = cljs.core.seq(arglist__29239);
return prn_str__delegate(objs);
});
prn_str.cljs$core$IFn$_invoke$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){return cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
};
var pr = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pr__delegate.call(this,objs);};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__29240){
var objs = cljs.core.seq(arglist__29240);
return pr__delegate(objs);
});
pr.cljs$core$IFn$_invoke$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){return cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),new cljs.core.Keyword(null,"readably","readably",1129599760),false));
};
var cljs_core_print = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cljs_core_print__delegate.call(this,objs);};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__29241){
var objs = cljs.core.seq(arglist__29241);
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$core$IFn$_invoke$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){return cljs.core.pr_str_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),new cljs.core.Keyword(null,"readably","readably",1129599760),false));
};
var print_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return print_str__delegate.call(this,objs);};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__29242){
var objs = cljs.core.seq(arglist__29242);
return print_str__delegate(objs);
});
print_str.cljs$core$IFn$_invoke$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),new cljs.core.Keyword(null,"readably","readably",1129599760),false));
if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_))
{return cljs.core.newline(cljs.core.pr_opts());
} else
{return null;
}
};
var println = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return println__delegate.call(this,objs);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__29243){
var objs = cljs.core.seq(arglist__29243);
return println__delegate(objs);
});
println.cljs$core$IFn$_invoke$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){return cljs.core.prn_str_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),new cljs.core.Keyword(null,"readably","readably",1129599760),false));
};
var println_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return println_str__delegate.call(this,objs);};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__29244){
var objs = cljs.core.seq(arglist__29244);
return println_str__delegate(objs);
});
println_str.cljs$core$IFn$_invoke$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_))
{return cljs.core.newline(cljs.core.pr_opts());
} else
{return null;
}
};
var prn = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prn__delegate.call(this,objs);};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__29245){
var objs = cljs.core.seq(arglist__29245);
return prn__delegate(objs);
});
prn.cljs$core$IFn$_invoke$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.print_map = (function print_map(m,print_one,writer,opts){return cljs.core.pr_sequential_writer(writer,(function (e,w,opts__$1){var G__29252_29258 = cljs.core.key(e);var G__29253_29259 = w;var G__29254_29260 = opts__$1;(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__29252_29258,G__29253_29259,G__29254_29260) : print_one.call(null,G__29252_29258,G__29253_29259,G__29254_29260));
cljs.core._write(w," ");
var G__29255 = cljs.core.val(e);var G__29256 = w;var G__29257 = opts__$1;return (print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__29255,G__29256,G__29257) : print_one.call(null,G__29255,G__29256,G__29257));
}),"{",", ","}",opts,cljs.core.seq(m));
});
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var a__$1 = this;cljs.core._write(writer,"#<Atom: ");
cljs.core.pr_writer(a__$1.state,writer,opts);
return cljs.core._write(writer,">");
});
cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core._write(writer,"()");
});
cljs.core.LazyTransformer.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.LazyTransformer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#queue ["," ","]",opts,cljs.core.seq(coll__$1));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.List.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.List.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(x__$1,y);
});
cljs.core.Subvec.prototype.cljs$core$IComparable$ = true;
cljs.core.Subvec.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(x__$1,y);
});
cljs.core.Keyword.prototype.cljs$core$IComparable$ = true;
cljs.core.Keyword.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_symbols(x__$1,y);
});
cljs.core.Symbol.prototype.cljs$core$IComparable$ = true;
cljs.core.Symbol.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_symbols(x__$1,y);
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){return iref.meta = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return alter_meta_BANG___delegate.call(this,iref,f,args);};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__29261){
var iref = cljs.core.first(arglist__29261);
arglist__29261 = cljs.core.next(arglist__29261);
var f = cljs.core.first(arglist__29261);
var args = cljs.core.rest(arglist__29261);
return alter_meta_BANG___delegate(iref,f,args);
});
alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){return cljs.core._add_watch(iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){return cljs.core._remove_watch(iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){return gensym.cljs$core$IFn$_invoke$arity$1("G__");
});
var gensym__1 = (function (prefix_string){if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = (function (){var G__29264 = (0);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29264) : cljs.core.atom.call(null,G__29264));
})();
} else
{}
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix_string)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.gensym_counter,cljs.core.inc))));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gensym.cljs$core$IFn$_invoke$arity$0 = gensym__0;
gensym.cljs$core$IFn$_invoke$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = (1);
cljs.core.fixture2 = (2);

/**
* @constructor
*/
cljs.core.Delay = (function (f,value){
this.f = f;
this.value = value;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorStr = "cljs.core/Delay";
cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){var self__ = this;
var d__$1 = this;return cljs.core.not(self__.f);
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.f))
{self__.value = (function (){return (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
})();
self__.f = null;
} else
{}
return self__.value;
});
cljs.core.__GT_Delay = (function __GT_Delay(f,value){return (new cljs.core.Delay(f,value));
});
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){return (x instanceof cljs.core.Delay);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){if(cljs.core.delay_QMARK_(x))
{var G__29266 = x;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29266) : cljs.core.deref.call(null,G__29266));
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){return cljs.core._realized_QMARK_(d);
});
cljs.core.preserving_reduced = (function preserving_reduced(f1){return (function (p1__29267_SHARP_,p2__29268_SHARP_){var ret = (function (){var G__29271 = p1__29267_SHARP_;var G__29272 = p2__29268_SHARP_;return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__29271,G__29272) : f1.call(null,G__29271,G__29272));
})();if(cljs.core.reduced_QMARK_(ret))
{return cljs.core.reduced(ret);
} else
{return ret;
}
});
});
/**
* A transducer which concatenates the contents of each input, which must be a
* collection, into the reduction.
*/
cljs.core.cat = (function cat(f1){var rf1 = cljs.core.preserving_reduced(f1);return ((function (rf1){
return (function() {
var G__29275 = null;
var G__29275__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__29275__1 = (function (result){var G__29274 = result;return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__29274) : f1.call(null,G__29274));
});
var G__29275__2 = (function (result,input){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf1,result,input);
});
G__29275 = function(result,input){
switch(arguments.length){
case 0:
return G__29275__0.call(this);
case 1:
return G__29275__1.call(this,result);
case 2:
return G__29275__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29275.cljs$core$IFn$_invoke$arity$0 = G__29275__0;
G__29275.cljs$core$IFn$_invoke$arity$1 = G__29275__1;
G__29275.cljs$core$IFn$_invoke$arity$2 = G__29275__2;
return G__29275;
})()
;})(rf1))
});
/**
* Returns a lazy sequence removing consecutive duplicates in coll.
* Returns a transducer when no collection is provided.
*/
cljs.core.dedupe = (function() {
var dedupe = null;
var dedupe__0 = (function (){return (function (f1){var pa = (function (){var G__29283 = new cljs.core.Keyword("cljs.core","none","cljs.core/none",926646439);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29283) : cljs.core.atom.call(null,G__29283));
})();return ((function (pa){
return (function() {
var G__29290 = null;
var G__29290__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__29290__1 = (function (result){var G__29284 = result;return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__29284) : f1.call(null,G__29284));
});
var G__29290__2 = (function (result,input){var prior = (function (){var G__29285 = pa;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29285) : cljs.core.deref.call(null,G__29285));
})();var G__29286_29291 = pa;var G__29287_29292 = input;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__29286_29291,G__29287_29292) : cljs.core.reset_BANG_.call(null,G__29286_29291,G__29287_29292));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prior,input))
{return result;
} else
{var G__29288 = result;var G__29289 = input;return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__29288,G__29289) : f1.call(null,G__29288,G__29289));
}
});
G__29290 = function(result,input){
switch(arguments.length){
case 0:
return G__29290__0.call(this);
case 1:
return G__29290__1.call(this,result);
case 2:
return G__29290__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29290.cljs$core$IFn$_invoke$arity$0 = G__29290__0;
G__29290.cljs$core$IFn$_invoke$arity$1 = G__29290__1;
G__29290.cljs$core$IFn$_invoke$arity$2 = G__29290__2;
return G__29290;
})()
;})(pa))
});
});
var dedupe__1 = (function (coll){return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(dedupe.cljs$core$IFn$_invoke$arity$0(),coll);
});
dedupe = function(coll){
switch(arguments.length){
case 0:
return dedupe__0.call(this);
case 1:
return dedupe__1.call(this,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dedupe.cljs$core$IFn$_invoke$arity$0 = dedupe__0;
dedupe.cljs$core$IFn$_invoke$arity$1 = dedupe__1;
return dedupe;
})()
;
/**
* Returns items from coll with random probability of prob (0.0 -
* 1.0).  Returns a transducer when no collection is provided.
*/
cljs.core.random_sample = (function() {
var random_sample = null;
var random_sample__1 = (function (prob){return cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (_){return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < prob);
}));
});
var random_sample__2 = (function (prob,coll){return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (_){return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < prob);
}),coll);
});
random_sample = function(prob,coll){
switch(arguments.length){
case 1:
return random_sample__1.call(this,prob);
case 2:
return random_sample__2.call(this,prob,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
random_sample.cljs$core$IFn$_invoke$arity$1 = random_sample__1;
random_sample.cljs$core$IFn$_invoke$arity$2 = random_sample__2;
return random_sample;
})()
;

/**
* @constructor
*/
cljs.core.Iteration = (function (xform,coll){
this.xform = xform;
this.coll = coll;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2173173760;
})
cljs.core.Iteration.cljs$lang$type = true;
cljs.core.Iteration.cljs$lang$ctorStr = "cljs.core/Iteration";
cljs.core.Iteration.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/Iteration");
});
cljs.core.Iteration.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll__$1,writer,opts){var self__ = this;
var coll__$2 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$2);
});
cljs.core.Iteration.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f,init){var self__ = this;
var ___$1 = this;return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(self__.xform,f,init,self__.coll);
});
cljs.core.Iteration.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.seq(cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(self__.xform,self__.coll));
});
cljs.core.__GT_Iteration = (function __GT_Iteration(xform,coll){return (new cljs.core.Iteration(xform,coll));
});
/**
* Returns an iterable/seqable/reducible sequence of applications of
* the transducer to the items in coll. Note that these applications
* will be performed every time iterator/seq/reduce is called.
*/
cljs.core.iteration = (function iteration(xform,coll){return (new cljs.core.Iteration(xform,coll));
});
/**
* Runs the supplied procedure (via reduce), for purposes of side
* effects, on successive items in the collection. Returns nil
*/
cljs.core.run_BANG_ = (function run_BANG_(proc,coll){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__29294_SHARP_,p2__29293_SHARP_){var G__29296 = p2__29293_SHARP_;return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(G__29296) : proc.call(null,G__29296));
}),null,coll);
});
cljs.core.IEncodeJS = (function (){var obj29298 = {};return obj29298;
})();
cljs.core._clj__GT_js = (function _clj__GT_js(x){if((function (){var and__19255__auto__ = x;if(and__19255__auto__)
{return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1;
} else
{return and__19255__auto__;
}
})())
{return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1(x);
} else
{var x__20512__auto__ = (((x == null))?null:x);return (function (){var or__19267__auto__ = (cljs.core._clj__GT_js[(function (){var G__29302 = x__20512__auto__;return goog.typeOf(G__29302);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._clj__GT_js["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IEncodeJS.-clj->js",x);
}
}
})().call(null,x);
}
});
cljs.core._key__GT_js = (function _key__GT_js(x){if((function (){var and__19255__auto__ = x;if(and__19255__auto__)
{return x.cljs$core$IEncodeJS$_key__GT_js$arity$1;
} else
{return and__19255__auto__;
}
})())
{return x.cljs$core$IEncodeJS$_key__GT_js$arity$1(x);
} else
{var x__20512__auto__ = (((x == null))?null:x);return (function (){var or__19267__auto__ = (cljs.core._key__GT_js[(function (){var G__29306 = x__20512__auto__;return goog.typeOf(G__29306);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._key__GT_js["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IEncodeJS.-key->js",x);
}
}
})().call(null,x);
}
});
cljs.core.key__GT_js = (function key__GT_js(k){if((function (){var G__29309 = k;if(G__29309)
{var bit__20565__auto__ = null;if(cljs.core.truth_((function (){var or__19267__auto__ = bit__20565__auto__;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return G__29309.cljs$core$IEncodeJS$;
}
})()))
{return true;
} else
{if((!G__29309.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__29309);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__29309);
}
})())
{return cljs.core._clj__GT_js(k);
} else
{if((typeof k === 'string') || (typeof k === 'number') || ((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol)))
{var G__29310 = k;return (cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1 ? cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1(G__29310) : cljs.core.clj__GT_js.call(null,G__29310));
} else
{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k], 0));
}
}
});
/**
* Recursively transforms ClojureScript values to JavaScript.
* sets/vectors/lists become Arrays, Keywords and Symbol become Strings,
* Maps become Objects. Arbitrary keys are encoded to by key->js.
*/
cljs.core.clj__GT_js = (function clj__GT_js(x){if((x == null))
{return null;
} else
{if((function (){var G__29326 = x;if(G__29326)
{var bit__20565__auto__ = null;if(cljs.core.truth_((function (){var or__19267__auto__ = bit__20565__auto__;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return G__29326.cljs$core$IEncodeJS$;
}
})()))
{return true;
} else
{if((!G__29326.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__29326);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__29326);
}
})())
{return cljs.core._clj__GT_js(x);
} else
{if((x instanceof cljs.core.Keyword))
{return cljs.core.name(x);
} else
{if((x instanceof cljs.core.Symbol))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
} else
{if(cljs.core.map_QMARK_(x))
{var m = (function (){var obj29328 = {};return obj29328;
})();var seq__29329_29339 = cljs.core.seq(x);var chunk__29330_29340 = null;var count__29331_29341 = (0);var i__29332_29342 = (0);while(true){
if((i__29332_29342 < count__29331_29341))
{var vec__29333_29343 = chunk__29330_29340.cljs$core$IIndexed$_nth$arity$2(null,i__29332_29342);var k_29344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29333_29343,(0),null);var v_29345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29333_29343,(1),null);(m[cljs.core.key__GT_js(k_29344)] = clj__GT_js(v_29345));
{
var G__29346 = seq__29329_29339;
var G__29347 = chunk__29330_29340;
var G__29348 = count__29331_29341;
var G__29349 = (i__29332_29342 + (1));
seq__29329_29339 = G__29346;
chunk__29330_29340 = G__29347;
count__29331_29341 = G__29348;
i__29332_29342 = G__29349;
continue;
}
} else
{var temp__4126__auto___29350 = cljs.core.seq(seq__29329_29339);if(temp__4126__auto___29350)
{var seq__29329_29351__$1 = temp__4126__auto___29350;if(cljs.core.chunked_seq_QMARK_(seq__29329_29351__$1))
{var c__20699__auto___29352 = cljs.core.chunk_first(seq__29329_29351__$1);{
var G__29353 = cljs.core.chunk_rest(seq__29329_29351__$1);
var G__29354 = c__20699__auto___29352;
var G__29355 = cljs.core.count(c__20699__auto___29352);
var G__29356 = (0);
seq__29329_29339 = G__29353;
chunk__29330_29340 = G__29354;
count__29331_29341 = G__29355;
i__29332_29342 = G__29356;
continue;
}
} else
{var vec__29334_29357 = cljs.core.first(seq__29329_29351__$1);var k_29358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29334_29357,(0),null);var v_29359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29334_29357,(1),null);(m[cljs.core.key__GT_js(k_29358)] = clj__GT_js(v_29359));
{
var G__29360 = cljs.core.next(seq__29329_29351__$1);
var G__29361 = null;
var G__29362 = (0);
var G__29363 = (0);
seq__29329_29339 = G__29360;
chunk__29330_29340 = G__29361;
count__29331_29341 = G__29362;
i__29332_29342 = G__29363;
continue;
}
}
} else
{}
}
break;
}
return m;
} else
{if(cljs.core.coll_QMARK_(x))
{var arr = [];var seq__29335_29364 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clj__GT_js,x));var chunk__29336_29365 = null;var count__29337_29366 = (0);var i__29338_29367 = (0);while(true){
if((i__29338_29367 < count__29337_29366))
{var x_29368__$1 = chunk__29336_29365.cljs$core$IIndexed$_nth$arity$2(null,i__29338_29367);arr.push(x_29368__$1);
{
var G__29369 = seq__29335_29364;
var G__29370 = chunk__29336_29365;
var G__29371 = count__29337_29366;
var G__29372 = (i__29338_29367 + (1));
seq__29335_29364 = G__29369;
chunk__29336_29365 = G__29370;
count__29337_29366 = G__29371;
i__29338_29367 = G__29372;
continue;
}
} else
{var temp__4126__auto___29373 = cljs.core.seq(seq__29335_29364);if(temp__4126__auto___29373)
{var seq__29335_29374__$1 = temp__4126__auto___29373;if(cljs.core.chunked_seq_QMARK_(seq__29335_29374__$1))
{var c__20699__auto___29375 = cljs.core.chunk_first(seq__29335_29374__$1);{
var G__29376 = cljs.core.chunk_rest(seq__29335_29374__$1);
var G__29377 = c__20699__auto___29375;
var G__29378 = cljs.core.count(c__20699__auto___29375);
var G__29379 = (0);
seq__29335_29364 = G__29376;
chunk__29336_29365 = G__29377;
count__29337_29366 = G__29378;
i__29338_29367 = G__29379;
continue;
}
} else
{var x_29380__$1 = cljs.core.first(seq__29335_29374__$1);arr.push(x_29380__$1);
{
var G__29381 = cljs.core.next(seq__29335_29374__$1);
var G__29382 = null;
var G__29383 = (0);
var G__29384 = (0);
seq__29335_29364 = G__29381;
chunk__29336_29365 = G__29382;
count__29337_29366 = G__29383;
i__29338_29367 = G__29384;
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
{return x;

}
}
}
}
}
}
});
cljs.core.IEncodeClojure = (function (){var obj29386 = {};return obj29386;
})();
cljs.core._js__GT_clj = (function _js__GT_clj(x,options){if((function (){var and__19255__auto__ = x;if(and__19255__auto__)
{return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2;
} else
{return and__19255__auto__;
}
})())
{return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2(x,options);
} else
{var x__20512__auto__ = (((x == null))?null:x);return (function (){var or__19267__auto__ = (cljs.core._js__GT_clj[(function (){var G__29390 = x__20512__auto__;return goog.typeOf(G__29390);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._js__GT_clj["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IEncodeClojure.-js->clj",x);
}
}
})().call(null,x,options);
}
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() {
var js__GT_clj = null;
var js__GT_clj__1 = (function (x){return js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),false], null)], 0));
});
var js__GT_clj__2 = (function() { 
var G__29445__delegate = function (x,opts){if((function (){var G__29419 = x;if(G__29419)
{var bit__20565__auto__ = null;if(cljs.core.truth_((function (){var or__19267__auto__ = bit__20565__auto__;if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return G__29419.cljs$core$IEncodeClojure$;
}
})()))
{return true;
} else
{if((!G__29419.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__29419);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__29419);
}
})())
{return cljs.core._js__GT_clj(x,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,opts));
} else
{if(cljs.core.seq(opts))
{var map__29420 = opts;var map__29420__$1 = ((cljs.core.seq_QMARK_(map__29420))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29420):map__29420);var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29420__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252));var keyfn = (cljs.core.truth_(keywordize_keys)?cljs.core.keyword:cljs.core.str);var f = ((function (map__29420,map__29420__$1,keywordize_keys,keyfn){
return (function thisfn(x__$1){if(cljs.core.seq_QMARK_(x__$1))
{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else
{if(cljs.core.coll_QMARK_(x__$1))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(x__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else
{if(x__$1 instanceof Array)
{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else
{if((cljs.core.type(x__$1) === Object))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20662__auto__ = ((function (map__29420,map__29420__$1,keywordize_keys,keyfn){
return (function iter__29435(s__29436){return (new cljs.core.LazySeq(null,((function (map__29420,map__29420__$1,keywordize_keys,keyfn){
return (function (){var s__29436__$1 = s__29436;while(true){
var temp__4126__auto__ = cljs.core.seq(s__29436__$1);if(temp__4126__auto__)
{var s__29436__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__29436__$2))
{var c__20660__auto__ = cljs.core.chunk_first(s__29436__$2);var size__20661__auto__ = cljs.core.count(c__20660__auto__);var b__29438 = cljs.core.chunk_buffer(size__20661__auto__);if((function (){var i__29437 = (0);while(true){
if((i__29437 < size__20661__auto__))
{var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20660__auto__,i__29437);cljs.core.chunk_append(b__29438,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29443 = k;return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__29443) : keyfn.call(null,G__29443));
})(),thisfn((x__$1[k]))], null));
{
var G__29446 = (i__29437 + (1));
i__29437 = G__29446;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__29438),iter__29435(cljs.core.chunk_rest(s__29436__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__29438),null);
}
} else
{var k = cljs.core.first(s__29436__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29444 = k;return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__29444) : keyfn.call(null,G__29444));
})(),thisfn((x__$1[k]))], null),iter__29435(cljs.core.rest(s__29436__$2)));
}
} else
{return null;
}
break;
}
});})(map__29420,map__29420__$1,keywordize_keys,keyfn))
,null,null));
});})(map__29420,map__29420__$1,keywordize_keys,keyfn))
;return iter__20662__auto__(cljs.core.js_keys(x__$1));
})());
} else
{return x__$1;

}
}
}
}
});})(map__29420,map__29420__$1,keywordize_keys,keyfn))
;return f(x);
} else
{return null;
}
}
};
var G__29445 = function (x,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__29445__delegate.call(this,x,opts);};
G__29445.cljs$lang$maxFixedArity = 1;
G__29445.cljs$lang$applyTo = (function (arglist__29447){
var x = cljs.core.first(arglist__29447);
var opts = cljs.core.rest(arglist__29447);
return G__29445__delegate(x,opts);
});
G__29445.cljs$core$IFn$_invoke$arity$variadic = G__29445__delegate;
return G__29445;
})()
;
js__GT_clj = function(x,var_args){
var opts = var_args;
switch(arguments.length){
case 1:
return js__GT_clj__1.call(this,x);
default:
return js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = js__GT_clj__2.cljs$lang$applyTo;
js__GT_clj.cljs$core$IFn$_invoke$arity$1 = js__GT_clj__1;
js__GT_clj.cljs$core$IFn$_invoke$arity$variadic = js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){var mem = (function (){var G__29450 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29450) : cljs.core.atom.call(null,G__29450));
})();return ((function (mem){
return (function() { 
var G__29452__delegate = function (args){var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var G__29451 = mem;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29451) : cljs.core.deref.call(null,G__29451));
})(),args,cljs.core.lookup_sentinel);if((v === cljs.core.lookup_sentinel))
{var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,args,ret);
return ret;
} else
{return v;
}
};
var G__29452 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29452__delegate.call(this,args);};
G__29452.cljs$lang$maxFixedArity = 0;
G__29452.cljs$lang$applyTo = (function (arglist__29453){
var args = cljs.core.seq(arglist__29453);
return G__29452__delegate(args);
});
G__29452.cljs$core$IFn$_invoke$arity$variadic = G__29452__delegate;
return G__29452;
})()
;
;})(mem))
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){while(true){
var ret = (function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})();if(cljs.core.fn_QMARK_(ret))
{{
var G__29455 = ret;
f = G__29455;
continue;
}
} else
{return ret;
}
break;
}
});
var trampoline__2 = (function() { 
var G__29456__delegate = function (f,args){return trampoline.cljs$core$IFn$_invoke$arity$1((function (){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}));
};
var G__29456 = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__29456__delegate.call(this,f,args);};
G__29456.cljs$lang$maxFixedArity = 1;
G__29456.cljs$lang$applyTo = (function (arglist__29457){
var f = cljs.core.first(arglist__29457);
var args = cljs.core.rest(arglist__29457);
return G__29456__delegate(f,args);
});
G__29456.cljs$core$IFn$_invoke$arity$variadic = G__29456__delegate;
return G__29456;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$core$IFn$_invoke$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$core$IFn$_invoke$arity$1 = trampoline__1;
trampoline.cljs$core$IFn$_invoke$arity$variadic = trampoline__2.cljs$core$IFn$_invoke$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){return rand.cljs$core$IFn$_invoke$arity$1((1));
});
var rand__1 = (function (n){return ((function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})() * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$core$IFn$_invoke$arity$0 = rand__0;
rand.cljs$core$IFn$_invoke$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){var G__29460 = ((function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})() * n);return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__29460) : Math.floor.call(null,G__29460));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,cljs.core.rand_int(cljs.core.count(coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){var k = (function (){var G__29462 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29462) : f.call(null,G__29462));
})();return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parents","parents",-2027538891),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"descendants","descendants",1824886031),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ancestors","ancestors",-776045424),cljs.core.PersistentArrayMap.EMPTY], null);
});
cljs.core._global_hierarchy = null;
cljs.core.get_global_hierarchy = (function get_global_hierarchy(){if((cljs.core._global_hierarchy == null))
{cljs.core._global_hierarchy = (function (){var G__29464 = cljs.core.make_hierarchy();return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29464) : cljs.core.atom.call(null,G__29464));
})();
} else
{}
return cljs.core._global_hierarchy;
});
/**
* @param {...*} var_args
*/
cljs.core.swap_global_hierarchy_BANG_ = (function() { 
var swap_global_hierarchy_BANG___delegate = function (f,args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,cljs.core.get_global_hierarchy(),f,args);
};
var swap_global_hierarchy_BANG_ = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return swap_global_hierarchy_BANG___delegate.call(this,f,args);};
swap_global_hierarchy_BANG_.cljs$lang$maxFixedArity = 1;
swap_global_hierarchy_BANG_.cljs$lang$applyTo = (function (arglist__29465){
var f = cljs.core.first(arglist__29465);
var args = cljs.core.rest(arglist__29465);
return swap_global_hierarchy_BANG___delegate(f,args);
});
swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_global_hierarchy_BANG___delegate;
return swap_global_hierarchy_BANG_;
})()
;
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){return isa_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__29530 = cljs.core.get_global_hierarchy();return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29530) : cljs.core.deref.call(null,G__29530));
})(),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){var or__19267__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child,parent);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"ancestors","ancestors",-776045424).cljs$core$IFn$_invoke$arity$1(h).call(null,child),parent);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{var and__19255__auto__ = cljs.core.vector_QMARK_(parent);if(and__19255__auto__)
{var and__19255__auto____$1 = cljs.core.vector_QMARK_(child);if(and__19255__auto____$1)
{var and__19255__auto____$2 = (cljs.core.count(parent) === cljs.core.count(child));if(and__19255__auto____$2)
{var ret = true;var i = (0);while(true){
if((!(ret)) || ((i === cljs.core.count(parent))))
{return ret;
} else
{{
var G__29555 = isa_QMARK_.cljs$core$IFn$_invoke$arity$3(h,(function (){var G__29553 = i;return (child.cljs$core$IFn$_invoke$arity$1 ? child.cljs$core$IFn$_invoke$arity$1(G__29553) : child.call(null,G__29553));
})(),(function (){var G__29554 = i;return (parent.cljs$core$IFn$_invoke$arity$1 ? parent.cljs$core$IFn$_invoke$arity$1(G__29554) : parent.call(null,G__29554));
})());
var G__29556 = (i + (1));
ret = G__29555;
i = G__29556;
continue;
}
}
break;
}
} else
{return and__19255__auto____$2;
}
} else
{return and__19255__auto____$1;
}
} else
{return and__19255__auto__;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
isa_QMARK_.cljs$core$IFn$_invoke$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$core$IFn$_invoke$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){return parents.cljs$core$IFn$_invoke$arity$2((function (){var G__29560 = cljs.core.get_global_hierarchy();return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29560) : cljs.core.deref.call(null,G__29560));
})(),tag);
});
var parents__2 = (function (h,tag){return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parents.cljs$core$IFn$_invoke$arity$1 = parents__1;
parents.cljs$core$IFn$_invoke$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){return ancestors.cljs$core$IFn$_invoke$arity$2((function (){var G__29564 = cljs.core.get_global_hierarchy();return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29564) : cljs.core.deref.call(null,G__29564));
})(),tag);
});
var ancestors__2 = (function (h,tag){return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ancestors","ancestors",-776045424).cljs$core$IFn$_invoke$arity$1(h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestors.cljs$core$IFn$_invoke$arity$1 = ancestors__1;
ancestors.cljs$core$IFn$_invoke$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){return descendants.cljs$core$IFn$_invoke$arity$2((function (){var G__29568 = cljs.core.get_global_hierarchy();return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29568) : cljs.core.deref.call(null,G__29568));
})(),tag);
});
var descendants__2 = (function (h,tag){return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"descendants","descendants",1824886031).cljs$core$IFn$_invoke$arity$1(h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
descendants.cljs$core$IFn$_invoke$arity$1 = descendants__1;
descendants.cljs$core$IFn$_invoke$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){if(cljs.core.truth_(cljs.core.namespace(parent)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"parent","parent",761652748,null))], 0))))));
}
cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic(derive,cljs.core.array_seq([tag,parent], 0));
return null;
});
var derive__3 = (function (h,tag,parent){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tag,parent))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"parent","parent",761652748,null))], 0))))));
}
var tp = new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(h);var td = new cljs.core.Keyword(null,"descendants","descendants",1824886031).cljs$core$IFn$_invoke$arity$1(h);var ta = new cljs.core.Keyword(null,"ancestors","ancestors",-776045424).cljs$core$IFn$_invoke$arity$1(h);var tf = ((function (tp,td,ta){
return (function (m,source,sources,target,targets){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tp,td,ta){
return (function (ret,k){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.get.cljs$core$IFn$_invoke$arity$3(targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons(target,(function (){var G__29577 = target;return (targets.cljs$core$IFn$_invoke$arity$1 ? targets.cljs$core$IFn$_invoke$arity$1(G__29577) : targets.call(null,G__29577));
})())));
});})(tp,td,ta))
,m,cljs.core.cons(source,(function (){var G__29578 = source;return (sources.cljs$core$IFn$_invoke$arity$1 ? sources.cljs$core$IFn$_invoke$arity$1(G__29578) : sources.call(null,G__29578));
})()));
});})(tp,td,ta))
;var or__19267__auto__ = ((cljs.core.contains_QMARK_((function (){var G__29582 = tag;return (tp.cljs$core$IFn$_invoke$arity$1 ? tp.cljs$core$IFn$_invoke$arity$1(G__29582) : tp.call(null,G__29582));
})(),parent))?null:(function (){if(cljs.core.contains_QMARK_((function (){var G__29583 = tag;return (ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(G__29583) : ta.call(null,G__29583));
})(),parent))
{throw (new Error((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+"already has"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent)+"as ancestor")));
} else
{}
if(cljs.core.contains_QMARK_((function (){var G__29584 = parent;return (ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(G__29584) : ta.call(null,G__29584));
})(),tag))
{throw (new Error(("Cyclic derivation:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent)+"has"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+"as ancestor")));
} else
{}
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parents","parents",-2027538891),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(h),tag,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(tp,tag,cljs.core.PersistentHashSet.EMPTY),parent)),new cljs.core.Keyword(null,"ancestors","ancestors",-776045424),tf(new cljs.core.Keyword(null,"ancestors","ancestors",-776045424).cljs$core$IFn$_invoke$arity$1(h),tag,td,parent,ta),new cljs.core.Keyword(null,"descendants","descendants",1824886031),tf(new cljs.core.Keyword(null,"descendants","descendants",1824886031).cljs$core$IFn$_invoke$arity$1(h),parent,ta,tag,td)], null);
})());if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
derive.cljs$core$IFn$_invoke$arity$2 = derive__2;
derive.cljs$core$IFn$_invoke$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic(underive,cljs.core.array_seq([tag,parent], 0));
return null;
});
var underive__3 = (function (h,tag,parent){var parentMap = new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(h);var childsParents = (cljs.core.truth_((function (){var G__29591 = tag;return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__29591) : parentMap.call(null,G__29591));
})())?cljs.core.disj.cljs$core$IFn$_invoke$arity$2((function (){var G__29592 = tag;return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__29592) : parentMap.call(null,G__29592));
})(),parent):cljs.core.PersistentHashSet.EMPTY);var newParents = (cljs.core.truth_(cljs.core.not_empty(childsParents))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parentMap,tag,childsParents):cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parentMap,tag));var deriv_seq = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parentMap,childsParents,newParents){
return (function (p1__29585_SHARP_){return cljs.core.cons(cljs.core.first(p1__29585_SHARP_),cljs.core.interpose(cljs.core.first(p1__29585_SHARP_),cljs.core.second(p1__29585_SHARP_)));
});})(parentMap,childsParents,newParents))
,cljs.core.seq(newParents)));if(cljs.core.contains_QMARK_((function (){var G__29593 = tag;return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__29593) : parentMap.call(null,G__29593));
})(),parent))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (parentMap,childsParents,newParents,deriv_seq){
return (function (p1__29586_SHARP_,p2__29587_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.derive,p1__29586_SHARP_,p2__29587_SHARP_);
});})(parentMap,childsParents,newParents,deriv_seq))
,cljs.core.make_hierarchy(),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),deriv_seq));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
underive.cljs$core$IFn$_invoke$arity$2 = underive__2;
underive.cljs$core$IFn$_invoke$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(method_cache,(function (_){var G__29596 = method_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29596) : cljs.core.deref.call(null,G__29596));
}));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cached_hierarchy,(function (_){var G__29597 = hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29597) : cljs.core.deref.call(null,G__29597));
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){var xprefs = (function (){var G__29613 = prefer_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29613) : cljs.core.deref.call(null,G__29613));
})().call(null,x);var or__19267__auto__ = (cljs.core.truth_((function (){var and__19255__auto__ = xprefs;if(cljs.core.truth_(and__19255__auto__))
{var G__29615 = y;return (xprefs.cljs$core$IFn$_invoke$arity$1 ? xprefs.cljs$core$IFn$_invoke$arity$1(G__29615) : xprefs.call(null,G__29615));
} else
{return and__19255__auto__;
}
})())?true:null);if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(y);while(true){
if((cljs.core.count(ps) > (0)))
{if(cljs.core.truth_(prefers_STAR_(x,cljs.core.first(ps),prefer_table)))
{} else
{}
{
var G__29616 = cljs.core.rest(ps);
ps = G__29616;
continue;
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(or__19267__auto____$1))
{return or__19267__auto____$1;
} else
{var or__19267__auto____$2 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(x);while(true){
if((cljs.core.count(ps) > (0)))
{if(cljs.core.truth_(prefers_STAR_(cljs.core.first(ps),y,prefer_table)))
{} else
{}
{
var G__29617 = cljs.core.rest(ps);
ps = G__29617;
continue;
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(or__19267__auto____$2))
{return or__19267__auto____$2;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){var or__19267__auto__ = cljs.core.prefers_STAR_(x,y,prefer_table);if(cljs.core.truth_(or__19267__auto__))
{return or__19267__auto__;
} else
{return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){var best_entry = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (be,p__29631){var vec__29632 = p__29631;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29632,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29632,(1),null);var e = vec__29632;if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__29633 = hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29633) : cljs.core.deref.call(null,G__29633));
})(),dispatch_val,k))
{var be2 = (cljs.core.truth_((function (){var or__19267__auto__ = (be == null);if(or__19267__auto__)
{return or__19267__auto__;
} else
{return cljs.core.dominates(k,cljs.core.first(be),prefer_table);
}
})())?e:be);if(cljs.core.truth_(cljs.core.dominates(cljs.core.first(be2),k,prefer_table)))
{} else
{throw (new Error(("Multiple methods in multimethod '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"' match dispatch value: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_val)+" -> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(be2))+", and neither is preferred")));
}
return be2;
} else
{return be;
}
}),null,(function (){var G__29634 = method_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29634) : cljs.core.deref.call(null,G__29634));
})());if(cljs.core.truth_(best_entry))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__29635 = cached_hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29635) : cljs.core.deref.call(null,G__29635));
})(),(function (){var G__29636 = hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29636) : cljs.core.deref.call(null,G__29636));
})()))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(method_cache,cljs.core.assoc,dispatch_val,cljs.core.second(best_entry));
return cljs.core.second(best_entry);
} else
{cljs.core.reset_cache(method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = (function (){var obj29638 = {};return obj29638;
})();
cljs.core._reset = (function _reset(mf){if((function (){var and__19255__auto__ = mf;if(and__19255__auto__)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__19255__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__20512__auto__ = (((mf == null))?null:mf);return (function (){var or__19267__auto__ = (cljs.core._reset[(function (){var G__29642 = x__20512__auto__;return goog.typeOf(G__29642);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._reset["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){if((function (){var and__19255__auto__ = mf;if(and__19255__auto__)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__19255__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__20512__auto__ = (((mf == null))?null:mf);return (function (){var or__19267__auto__ = (cljs.core._add_method[(function (){var G__29646 = x__20512__auto__;return goog.typeOf(G__29646);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._add_method["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){if((function (){var and__19255__auto__ = mf;if(and__19255__auto__)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__19255__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__20512__auto__ = (((mf == null))?null:mf);return (function (){var or__19267__auto__ = (cljs.core._remove_method[(function (){var G__29650 = x__20512__auto__;return goog.typeOf(G__29650);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._remove_method["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){if((function (){var and__19255__auto__ = mf;if(and__19255__auto__)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__19255__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__20512__auto__ = (((mf == null))?null:mf);return (function (){var or__19267__auto__ = (cljs.core._prefer_method[(function (){var G__29654 = x__20512__auto__;return goog.typeOf(G__29654);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._prefer_method["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){if((function (){var and__19255__auto__ = mf;if(and__19255__auto__)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__19255__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__20512__auto__ = (((mf == null))?null:mf);return (function (){var or__19267__auto__ = (cljs.core._get_method[(function (){var G__29658 = x__20512__auto__;return goog.typeOf(G__29658);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._get_method["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){if((function (){var and__19255__auto__ = mf;if(and__19255__auto__)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__19255__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__20512__auto__ = (((mf == null))?null:mf);return (function (){var or__19267__auto__ = (cljs.core._methods[(function (){var G__29662 = x__20512__auto__;return goog.typeOf(G__29662);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._methods["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){if((function (){var and__19255__auto__ = mf;if(and__19255__auto__)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__19255__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__20512__auto__ = (((mf == null))?null:mf);return (function (){var or__19267__auto__ = (cljs.core._prefers[(function (){var G__29666 = x__20512__auto__;return goog.typeOf(G__29666);
})()]);if(or__19267__auto__)
{return or__19267__auto__;
} else
{var or__19267__auto____$1 = (cljs.core._prefers["_"]);if(or__19267__auto____$1)
{return or__19267__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core.throw_no_method_error = (function throw_no_method_error(name,dispatch_val){throw (new Error(("No method in multimethod '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"' for dispatch value: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_val))));
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194305;
this.cljs$lang$protocol_mask$partition1$ = 256;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorStr = "cljs.core/MultiFn";
cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__29668 = this$__$1;return goog.getUid(G__29668);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){var self__ = this;
var mf__$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.method_table,((function (mf__$1){
return (function (mf__$2){return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.method_cache,((function (mf__$1){
return (function (mf__$2){return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.prefer_table,((function (mf__$1){
return (function (mf__$2){return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.cached_hierarchy,((function (mf__$1){
return (function (mf__$2){return null;
});})(mf__$1))
);
return mf__$1;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){var self__ = this;
var mf__$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
return mf__$1;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){var self__ = this;
var mf__$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
return mf__$1;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){var self__ = this;
var mf__$1 = this;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__29669 = self__.cached_hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29669) : cljs.core.deref.call(null,G__29669));
})(),(function (){var G__29670 = self__.hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29670) : cljs.core.deref.call(null,G__29670));
})()))
{} else
{cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
}
var temp__4124__auto__ = (function (){var G__29671 = self__.method_cache;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29671) : cljs.core.deref.call(null,G__29671));
})().call(null,dispatch_val);if(cljs.core.truth_(temp__4124__auto__))
{var target_fn = temp__4124__auto__;return target_fn;
} else
{var temp__4124__auto____$1 = cljs.core.find_and_cache_best_method(self__.name,dispatch_val,self__.hierarchy,self__.method_table,self__.prefer_table,self__.method_cache,self__.cached_hierarchy);if(cljs.core.truth_(temp__4124__auto____$1))
{var target_fn = temp__4124__auto____$1;return target_fn;
} else
{return (function (){var G__29672 = self__.method_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29672) : cljs.core.deref.call(null,G__29672));
})().call(null,self__.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){var self__ = this;
var mf__$1 = this;if(cljs.core.truth_(cljs.core.prefers_STAR_(dispatch_val_x,dispatch_val_y,self__.prefer_table)))
{throw (new Error(("Preference conflict in multimethod '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+"': "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_val_y)+" is already preferred to "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_val_x))));
} else
{}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.prefer_table,((function (mf__$1){
return (function (old){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old,dispatch_val_x,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
});})(mf__$1))
);
return cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){var self__ = this;
var mf__$1 = this;var G__29673 = self__.method_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29673) : cljs.core.deref.call(null,G__29673));
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){var self__ = this;
var mf__$1 = this;var G__29674 = self__.prefer_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29674) : cljs.core.deref.call(null,G__29674));
});
cljs.core.MultiFn.prototype.call = (function() {
var G__30515 = null;
var G__30515__2 = (function (self__,a){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__29675 = a;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(G__29675) : self__.dispatch_fn.call(null,G__29675));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__29676 = a;return (target_fn.cljs$core$IFn$_invoke$arity$1 ? target_fn.cljs$core$IFn$_invoke$arity$1(G__29676) : target_fn.call(null,G__29676));
});
var G__30515__3 = (function (self__,a,b){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__29677 = a;var G__29678 = b;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2(G__29677,G__29678) : self__.dispatch_fn.call(null,G__29677,G__29678));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__29679 = a;var G__29680 = b;return (target_fn.cljs$core$IFn$_invoke$arity$2 ? target_fn.cljs$core$IFn$_invoke$arity$2(G__29679,G__29680) : target_fn.call(null,G__29679,G__29680));
});
var G__30515__4 = (function (self__,a,b,c){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__29681 = a;var G__29682 = b;var G__29683 = c;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3(G__29681,G__29682,G__29683) : self__.dispatch_fn.call(null,G__29681,G__29682,G__29683));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__29684 = a;var G__29685 = b;var G__29686 = c;return (target_fn.cljs$core$IFn$_invoke$arity$3 ? target_fn.cljs$core$IFn$_invoke$arity$3(G__29684,G__29685,G__29686) : target_fn.call(null,G__29684,G__29685,G__29686));
});
var G__30515__5 = (function (self__,a,b,c,d){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__29687 = a;var G__29688 = b;var G__29689 = c;var G__29690 = d;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4(G__29687,G__29688,G__29689,G__29690) : self__.dispatch_fn.call(null,G__29687,G__29688,G__29689,G__29690));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__29691 = a;var G__29692 = b;var G__29693 = c;var G__29694 = d;return (target_fn.cljs$core$IFn$_invoke$arity$4 ? target_fn.cljs$core$IFn$_invoke$arity$4(G__29691,G__29692,G__29693,G__29694) : target_fn.call(null,G__29691,G__29692,G__29693,G__29694));
});
var G__30515__6 = (function (self__,a,b,c,d,e){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__29695 = a;var G__29696 = b;var G__29697 = c;var G__29698 = d;var G__29699 = e;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5(G__29695,G__29696,G__29697,G__29698,G__29699) : self__.dispatch_fn.call(null,G__29695,G__29696,G__29697,G__29698,G__29699));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__29700 = a;var G__29701 = b;var G__29702 = c;var G__29703 = d;var G__29704 = e;return (target_fn.cljs$core$IFn$_invoke$arity$5 ? target_fn.cljs$core$IFn$_invoke$arity$5(G__29700,G__29701,G__29702,G__29703,G__29704) : target_fn.call(null,G__29700,G__29701,G__29702,G__29703,G__29704));
});
var G__30515__7 = (function (self__,a,b,c,d,e,f){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__29705 = a;var G__29706 = b;var G__29707 = c;var G__29708 = d;var G__29709 = e;var G__29710 = f;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6(G__29705,G__29706,G__29707,G__29708,G__29709,G__29710) : self__.dispatch_fn.call(null,G__29705,G__29706,G__29707,G__29708,G__29709,G__29710));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__29711 = a;var G__29712 = b;var G__29713 = c;var G__29714 = d;var G__29715 = e;var G__29716 = f;return (target_fn.cljs$core$IFn$_invoke$arity$6 ? target_fn.cljs$core$IFn$_invoke$arity$6(G__29711,G__29712,G__29713,G__29714,G__29715,G__29716) : target_fn.call(null,G__29711,G__29712,G__29713,G__29714,G__29715,G__29716));
});
var G__30515__8 = (function (self__,a,b,c,d,e,f,g){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__29717 = a;var G__29718 = b;var G__29719 = c;var G__29720 = d;var G__29721 = e;var G__29722 = f;var G__29723 = g;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7(G__29717,G__29718,G__29719,G__29720,G__29721,G__29722,G__29723) : self__.dispatch_fn.call(null,G__29717,G__29718,G__29719,G__29720,G__29721,G__29722,G__29723));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__29724 = a;var G__29725 = b;var G__29726 = c;var G__29727 = d;var G__29728 = e;var G__29729 = f;var G__29730 = g;return (target_fn.cljs$core$IFn$_invoke$arity$7 ? target_fn.cljs$core$IFn$_invoke$arity$7(G__29724,G__29725,G__29726,G__29727,G__29728,G__29729,G__29730) : target_fn.call(null,G__29724,G__29725,G__29726,G__29727,G__29728,G__29729,G__29730));
});
var G__30515__9 = (function (self__,a,b,c,d,e,f,g,h){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__29731 = a;var G__29732 = b;var G__29733 = c;var G__29734 = d;var G__29735 = e;var G__29736 = f;var G__29737 = g;var G__29738 = h;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8(G__29731,G__29732,G__29733,G__29734,G__29735,G__29736,G__29737,G__29738) : self__.dispatch_fn.call(null,G__29731,G__29732,G__29733,G__29734,G__29735,G__29736,G__29737,G__29738));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__29739 = a;var G__29740 = b;var G__29741 = c;var G__29742 = d;var G__29743 = e;var G__29744 = f;var G__29745 = g;var G__29746 = h;return (target_fn.cljs$core$IFn$_invoke$arity$8 ? target_fn.cljs$core$IFn$_invoke$arity$8(G__29739,G__29740,G__29741,G__29742,G__29743,G__29744,G__29745,G__29746) : target_fn.call(null,G__29739,G__29740,G__29741,G__29742,G__29743,G__29744,G__29745,G__29746));
});
var G__30515__10 = (function (self__,a,b,c,d,e,f,g,h,i){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__29747 = a;var G__29748 = b;var G__29749 = c;var G__29750 = d;var G__29751 = e;var G__29752 = f;var G__29753 = g;var G__29754 = h;var G__29755 = i;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9(G__29747,G__29748,G__29749,G__29750,G__29751,G__29752,G__29753,G__29754,G__29755) : self__.dispatch_fn.call(null,G__29747,G__29748,G__29749,G__29750,G__29751,G__29752,G__29753,G__29754,G__29755));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__29756 = a;var G__29757 = b;var G__29758 = c;var G__29759 = d;var G__29760 = e;var G__29761 = f;var G__29762 = g;var G__29763 = h;var G__29764 = i;return (target_fn.cljs$core$IFn$_invoke$arity$9 ? target_fn.cljs$core$IFn$_invoke$arity$9(G__29756,G__29757,G__29758,G__29759,G__29760,G__29761,G__29762,G__29763,G__29764) : target_fn.call(null,G__29756,G__29757,G__29758,G__29759,G__29760,G__29761,G__29762,G__29763,G__29764));
});
var G__30515__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__29765 = a;var G__29766 = b;var G__29767 = c;var G__29768 = d;var G__29769 = e;var G__29770 = f;var G__29771 = g;var G__29772 = h;var G__29773 = i;var G__29774 = j;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10(G__29765,G__29766,G__29767,G__29768,G__29769,G__29770,G__29771,G__29772,G__29773,G__29774) : self__.dispatch_fn.call(null,G__29765,G__29766,G__29767,G__29768,G__29769,G__29770,G__29771,G__29772,G__29773,G__29774));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__29775 = a;var G__29776 = b;var G__29777 = c;var G__29778 = d;var G__29779 = e;var G__29780 = f;var G__29781 = g;var G__29782 = h;var G__29783 = i;var G__29784 = j;return (target_fn.cljs$core$IFn$_invoke$arity$10 ? target_fn.cljs$core$IFn$_invoke$arity$10(G__29775,G__29776,G__29777,G__29778,G__29779,G__29780,G__29781,G__29782,G__29783,G__29784) : target_fn.call(null,G__29775,G__29776,G__29777,G__29778,G__29779,G__29780,G__29781,G__29782,G__29783,G__29784));
});
var G__30515__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__29785 = a;var G__29786 = b;var G__29787 = c;var G__29788 = d;var G__29789 = e;var G__29790 = f;var G__29791 = g;var G__29792 = h;var G__29793 = i;var G__29794 = j;var G__29795 = k;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11(G__29785,G__29786,G__29787,G__29788,G__29789,G__29790,G__29791,G__29792,G__29793,G__29794,G__29795) : self__.dispatch_fn.call(null,G__29785,G__29786,G__29787,G__29788,G__29789,G__29790,G__29791,G__29792,G__29793,G__29794,G__29795));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__29796 = a;var G__29797 = b;var G__29798 = c;var G__29799 = d;var G__29800 = e;var G__29801 = f;var G__29802 = g;var G__29803 = h;var G__29804 = i;var G__29805 = j;var G__29806 = k;return (target_fn.cljs$core$IFn$_invoke$arity$11 ? target_fn.cljs$core$IFn$_invoke$arity$11(G__29796,G__29797,G__29798,G__29799,G__29800,G__29801,G__29802,G__29803,G__29804,G__29805,G__29806) : target_fn.call(null,G__29796,G__29797,G__29798,G__29799,G__29800,G__29801,G__29802,G__29803,G__29804,G__29805,G__29806));
});
var G__30515__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__29807 = a;var G__29808 = b;var G__29809 = c;var G__29810 = d;var G__29811 = e;var G__29812 = f;var G__29813 = g;var G__29814 = h;var G__29815 = i;var G__29816 = j;var G__29817 = k;var G__29818 = l;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12(G__29807,G__29808,G__29809,G__29810,G__29811,G__29812,G__29813,G__29814,G__29815,G__29816,G__29817,G__29818) : self__.dispatch_fn.call(null,G__29807,G__29808,G__29809,G__29810,G__29811,G__29812,G__29813,G__29814,G__29815,G__29816,G__29817,G__29818));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__29819 = a;var G__29820 = b;var G__29821 = c;var G__29822 = d;var G__29823 = e;var G__29824 = f;var G__29825 = g;var G__29826 = h;var G__29827 = i;var G__29828 = j;var G__29829 = k;var G__29830 = l;return (target_fn.cljs$core$IFn$_invoke$arity$12 ? target_fn.cljs$core$IFn$_invoke$arity$12(G__29819,G__29820,G__29821,G__29822,G__29823,G__29824,G__29825,G__29826,G__29827,G__29828,G__29829,G__29830) : target_fn.call(null,G__29819,G__29820,G__29821,G__29822,G__29823,G__29824,G__29825,G__29826,G__29827,G__29828,G__29829,G__29830));
});
var G__30515__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__29831 = a;var G__29832 = b;var G__29833 = c;var G__29834 = d;var G__29835 = e;var G__29836 = f;var G__29837 = g;var G__29838 = h;var G__29839 = i;var G__29840 = j;var G__29841 = k;var G__29842 = l;var G__29843 = m;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13(G__29831,G__29832,G__29833,G__29834,G__29835,G__29836,G__29837,G__29838,G__29839,G__29840,G__29841,G__29842,G__29843) : self__.dispatch_fn.call(null,G__29831,G__29832,G__29833,G__29834,G__29835,G__29836,G__29837,G__29838,G__29839,G__29840,G__29841,G__29842,G__29843));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__29844 = a;var G__29845 = b;var G__29846 = c;var G__29847 = d;var G__29848 = e;var G__29849 = f;var G__29850 = g;var G__29851 = h;var G__29852 = i;var G__29853 = j;var G__29854 = k;var G__29855 = l;var G__29856 = m;return (target_fn.cljs$core$IFn$_invoke$arity$13 ? target_fn.cljs$core$IFn$_invoke$arity$13(G__29844,G__29845,G__29846,G__29847,G__29848,G__29849,G__29850,G__29851,G__29852,G__29853,G__29854,G__29855,G__29856) : target_fn.call(null,G__29844,G__29845,G__29846,G__29847,G__29848,G__29849,G__29850,G__29851,G__29852,G__29853,G__29854,G__29855,G__29856));
});
var G__30515__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__29857 = a;var G__29858 = b;var G__29859 = c;var G__29860 = d;var G__29861 = e;var G__29862 = f;var G__29863 = g;var G__29864 = h;var G__29865 = i;var G__29866 = j;var G__29867 = k;var G__29868 = l;var G__29869 = m;var G__29870 = n;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14(G__29857,G__29858,G__29859,G__29860,G__29861,G__29862,G__29863,G__29864,G__29865,G__29866,G__29867,G__29868,G__29869,G__29870) : self__.dispatch_fn.call(null,G__29857,G__29858,G__29859,G__29860,G__29861,G__29862,G__29863,G__29864,G__29865,G__29866,G__29867,G__29868,G__29869,G__29870));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__29871 = a;var G__29872 = b;var G__29873 = c;var G__29874 = d;var G__29875 = e;var G__29876 = f;var G__29877 = g;var G__29878 = h;var G__29879 = i;var G__29880 = j;var G__29881 = k;var G__29882 = l;var G__29883 = m;var G__29884 = n;return (target_fn.cljs$core$IFn$_invoke$arity$14 ? target_fn.cljs$core$IFn$_invoke$arity$14(G__29871,G__29872,G__29873,G__29874,G__29875,G__29876,G__29877,G__29878,G__29879,G__29880,G__29881,G__29882,G__29883,G__29884) : target_fn.call(null,G__29871,G__29872,G__29873,G__29874,G__29875,G__29876,G__29877,G__29878,G__29879,G__29880,G__29881,G__29882,G__29883,G__29884));
});
var G__30515__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__29885 = a;var G__29886 = b;var G__29887 = c;var G__29888 = d;var G__29889 = e;var G__29890 = f;var G__29891 = g;var G__29892 = h;var G__29893 = i;var G__29894 = j;var G__29895 = k;var G__29896 = l;var G__29897 = m;var G__29898 = n;var G__29899 = o;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15(G__29885,G__29886,G__29887,G__29888,G__29889,G__29890,G__29891,G__29892,G__29893,G__29894,G__29895,G__29896,G__29897,G__29898,G__29899) : self__.dispatch_fn.call(null,G__29885,G__29886,G__29887,G__29888,G__29889,G__29890,G__29891,G__29892,G__29893,G__29894,G__29895,G__29896,G__29897,G__29898,G__29899));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__29900 = a;var G__29901 = b;var G__29902 = c;var G__29903 = d;var G__29904 = e;var G__29905 = f;var G__29906 = g;var G__29907 = h;var G__29908 = i;var G__29909 = j;var G__29910 = k;var G__29911 = l;var G__29912 = m;var G__29913 = n;var G__29914 = o;return (target_fn.cljs$core$IFn$_invoke$arity$15 ? target_fn.cljs$core$IFn$_invoke$arity$15(G__29900,G__29901,G__29902,G__29903,G__29904,G__29905,G__29906,G__29907,G__29908,G__29909,G__29910,G__29911,G__29912,G__29913,G__29914) : target_fn.call(null,G__29900,G__29901,G__29902,G__29903,G__29904,G__29905,G__29906,G__29907,G__29908,G__29909,G__29910,G__29911,G__29912,G__29913,G__29914));
});
var G__30515__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__29915 = a;var G__29916 = b;var G__29917 = c;var G__29918 = d;var G__29919 = e;var G__29920 = f;var G__29921 = g;var G__29922 = h;var G__29923 = i;var G__29924 = j;var G__29925 = k;var G__29926 = l;var G__29927 = m;var G__29928 = n;var G__29929 = o;var G__29930 = p;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16(G__29915,G__29916,G__29917,G__29918,G__29919,G__29920,G__29921,G__29922,G__29923,G__29924,G__29925,G__29926,G__29927,G__29928,G__29929,G__29930) : self__.dispatch_fn.call(null,G__29915,G__29916,G__29917,G__29918,G__29919,G__29920,G__29921,G__29922,G__29923,G__29924,G__29925,G__29926,G__29927,G__29928,G__29929,G__29930));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__29931 = a;var G__29932 = b;var G__29933 = c;var G__29934 = d;var G__29935 = e;var G__29936 = f;var G__29937 = g;var G__29938 = h;var G__29939 = i;var G__29940 = j;var G__29941 = k;var G__29942 = l;var G__29943 = m;var G__29944 = n;var G__29945 = o;var G__29946 = p;return (target_fn.cljs$core$IFn$_invoke$arity$16 ? target_fn.cljs$core$IFn$_invoke$arity$16(G__29931,G__29932,G__29933,G__29934,G__29935,G__29936,G__29937,G__29938,G__29939,G__29940,G__29941,G__29942,G__29943,G__29944,G__29945,G__29946) : target_fn.call(null,G__29931,G__29932,G__29933,G__29934,G__29935,G__29936,G__29937,G__29938,G__29939,G__29940,G__29941,G__29942,G__29943,G__29944,G__29945,G__29946));
});
var G__30515__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__29947 = a;var G__29948 = b;var G__29949 = c;var G__29950 = d;var G__29951 = e;var G__29952 = f;var G__29953 = g;var G__29954 = h;var G__29955 = i;var G__29956 = j;var G__29957 = k;var G__29958 = l;var G__29959 = m;var G__29960 = n;var G__29961 = o;var G__29962 = p;var G__29963 = q;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17(G__29947,G__29948,G__29949,G__29950,G__29951,G__29952,G__29953,G__29954,G__29955,G__29956,G__29957,G__29958,G__29959,G__29960,G__29961,G__29962,G__29963) : self__.dispatch_fn.call(null,G__29947,G__29948,G__29949,G__29950,G__29951,G__29952,G__29953,G__29954,G__29955,G__29956,G__29957,G__29958,G__29959,G__29960,G__29961,G__29962,G__29963));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__29964 = a;var G__29965 = b;var G__29966 = c;var G__29967 = d;var G__29968 = e;var G__29969 = f;var G__29970 = g;var G__29971 = h;var G__29972 = i;var G__29973 = j;var G__29974 = k;var G__29975 = l;var G__29976 = m;var G__29977 = n;var G__29978 = o;var G__29979 = p;var G__29980 = q;return (target_fn.cljs$core$IFn$_invoke$arity$17 ? target_fn.cljs$core$IFn$_invoke$arity$17(G__29964,G__29965,G__29966,G__29967,G__29968,G__29969,G__29970,G__29971,G__29972,G__29973,G__29974,G__29975,G__29976,G__29977,G__29978,G__29979,G__29980) : target_fn.call(null,G__29964,G__29965,G__29966,G__29967,G__29968,G__29969,G__29970,G__29971,G__29972,G__29973,G__29974,G__29975,G__29976,G__29977,G__29978,G__29979,G__29980));
});
var G__30515__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__29981 = a;var G__29982 = b;var G__29983 = c;var G__29984 = d;var G__29985 = e;var G__29986 = f;var G__29987 = g;var G__29988 = h;var G__29989 = i;var G__29990 = j;var G__29991 = k;var G__29992 = l;var G__29993 = m;var G__29994 = n;var G__29995 = o;var G__29996 = p;var G__29997 = q;var G__29998 = r;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18(G__29981,G__29982,G__29983,G__29984,G__29985,G__29986,G__29987,G__29988,G__29989,G__29990,G__29991,G__29992,G__29993,G__29994,G__29995,G__29996,G__29997,G__29998) : self__.dispatch_fn.call(null,G__29981,G__29982,G__29983,G__29984,G__29985,G__29986,G__29987,G__29988,G__29989,G__29990,G__29991,G__29992,G__29993,G__29994,G__29995,G__29996,G__29997,G__29998));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__29999 = a;var G__30000 = b;var G__30001 = c;var G__30002 = d;var G__30003 = e;var G__30004 = f;var G__30005 = g;var G__30006 = h;var G__30007 = i;var G__30008 = j;var G__30009 = k;var G__30010 = l;var G__30011 = m;var G__30012 = n;var G__30013 = o;var G__30014 = p;var G__30015 = q;var G__30016 = r;return (target_fn.cljs$core$IFn$_invoke$arity$18 ? target_fn.cljs$core$IFn$_invoke$arity$18(G__29999,G__30000,G__30001,G__30002,G__30003,G__30004,G__30005,G__30006,G__30007,G__30008,G__30009,G__30010,G__30011,G__30012,G__30013,G__30014,G__30015,G__30016) : target_fn.call(null,G__29999,G__30000,G__30001,G__30002,G__30003,G__30004,G__30005,G__30006,G__30007,G__30008,G__30009,G__30010,G__30011,G__30012,G__30013,G__30014,G__30015,G__30016));
});
var G__30515__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__30017 = a;var G__30018 = b;var G__30019 = c;var G__30020 = d;var G__30021 = e;var G__30022 = f;var G__30023 = g;var G__30024 = h;var G__30025 = i;var G__30026 = j;var G__30027 = k;var G__30028 = l;var G__30029 = m;var G__30030 = n;var G__30031 = o;var G__30032 = p;var G__30033 = q;var G__30034 = r;var G__30035 = s;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19(G__30017,G__30018,G__30019,G__30020,G__30021,G__30022,G__30023,G__30024,G__30025,G__30026,G__30027,G__30028,G__30029,G__30030,G__30031,G__30032,G__30033,G__30034,G__30035) : self__.dispatch_fn.call(null,G__30017,G__30018,G__30019,G__30020,G__30021,G__30022,G__30023,G__30024,G__30025,G__30026,G__30027,G__30028,G__30029,G__30030,G__30031,G__30032,G__30033,G__30034,G__30035));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30036 = a;var G__30037 = b;var G__30038 = c;var G__30039 = d;var G__30040 = e;var G__30041 = f;var G__30042 = g;var G__30043 = h;var G__30044 = i;var G__30045 = j;var G__30046 = k;var G__30047 = l;var G__30048 = m;var G__30049 = n;var G__30050 = o;var G__30051 = p;var G__30052 = q;var G__30053 = r;var G__30054 = s;return (target_fn.cljs$core$IFn$_invoke$arity$19 ? target_fn.cljs$core$IFn$_invoke$arity$19(G__30036,G__30037,G__30038,G__30039,G__30040,G__30041,G__30042,G__30043,G__30044,G__30045,G__30046,G__30047,G__30048,G__30049,G__30050,G__30051,G__30052,G__30053,G__30054) : target_fn.call(null,G__30036,G__30037,G__30038,G__30039,G__30040,G__30041,G__30042,G__30043,G__30044,G__30045,G__30046,G__30047,G__30048,G__30049,G__30050,G__30051,G__30052,G__30053,G__30054));
});
var G__30515__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__30055 = a;var G__30056 = b;var G__30057 = c;var G__30058 = d;var G__30059 = e;var G__30060 = f;var G__30061 = g;var G__30062 = h;var G__30063 = i;var G__30064 = j;var G__30065 = k;var G__30066 = l;var G__30067 = m;var G__30068 = n;var G__30069 = o;var G__30070 = p;var G__30071 = q;var G__30072 = r;var G__30073 = s;var G__30074 = t;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20(G__30055,G__30056,G__30057,G__30058,G__30059,G__30060,G__30061,G__30062,G__30063,G__30064,G__30065,G__30066,G__30067,G__30068,G__30069,G__30070,G__30071,G__30072,G__30073,G__30074) : self__.dispatch_fn.call(null,G__30055,G__30056,G__30057,G__30058,G__30059,G__30060,G__30061,G__30062,G__30063,G__30064,G__30065,G__30066,G__30067,G__30068,G__30069,G__30070,G__30071,G__30072,G__30073,G__30074));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30075 = a;var G__30076 = b;var G__30077 = c;var G__30078 = d;var G__30079 = e;var G__30080 = f;var G__30081 = g;var G__30082 = h;var G__30083 = i;var G__30084 = j;var G__30085 = k;var G__30086 = l;var G__30087 = m;var G__30088 = n;var G__30089 = o;var G__30090 = p;var G__30091 = q;var G__30092 = r;var G__30093 = s;var G__30094 = t;return (target_fn.cljs$core$IFn$_invoke$arity$20 ? target_fn.cljs$core$IFn$_invoke$arity$20(G__30075,G__30076,G__30077,G__30078,G__30079,G__30080,G__30081,G__30082,G__30083,G__30084,G__30085,G__30086,G__30087,G__30088,G__30089,G__30090,G__30091,G__30092,G__30093,G__30094) : target_fn.call(null,G__30075,G__30076,G__30077,G__30078,G__30079,G__30080,G__30081,G__30082,G__30083,G__30084,G__30085,G__30086,G__30087,G__30088,G__30089,G__30090,G__30091,G__30092,G__30093,G__30094));
});
var G__30515__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.dispatch_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(target_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__30515 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 2:
return G__30515__2.call(this,self__,a);
case 3:
return G__30515__3.call(this,self__,a,b);
case 4:
return G__30515__4.call(this,self__,a,b,c);
case 5:
return G__30515__5.call(this,self__,a,b,c,d);
case 6:
return G__30515__6.call(this,self__,a,b,c,d,e);
case 7:
return G__30515__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__30515__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__30515__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__30515__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__30515__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__30515__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__30515__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__30515__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__30515__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__30515__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__30515__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__30515__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__30515__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__30515__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__30515__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__30515__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30515.cljs$core$IFn$_invoke$arity$2 = G__30515__2;
G__30515.cljs$core$IFn$_invoke$arity$3 = G__30515__3;
G__30515.cljs$core$IFn$_invoke$arity$4 = G__30515__4;
G__30515.cljs$core$IFn$_invoke$arity$5 = G__30515__5;
G__30515.cljs$core$IFn$_invoke$arity$6 = G__30515__6;
G__30515.cljs$core$IFn$_invoke$arity$7 = G__30515__7;
G__30515.cljs$core$IFn$_invoke$arity$8 = G__30515__8;
G__30515.cljs$core$IFn$_invoke$arity$9 = G__30515__9;
G__30515.cljs$core$IFn$_invoke$arity$10 = G__30515__10;
G__30515.cljs$core$IFn$_invoke$arity$11 = G__30515__11;
G__30515.cljs$core$IFn$_invoke$arity$12 = G__30515__12;
G__30515.cljs$core$IFn$_invoke$arity$13 = G__30515__13;
G__30515.cljs$core$IFn$_invoke$arity$14 = G__30515__14;
G__30515.cljs$core$IFn$_invoke$arity$15 = G__30515__15;
G__30515.cljs$core$IFn$_invoke$arity$16 = G__30515__16;
G__30515.cljs$core$IFn$_invoke$arity$17 = G__30515__17;
G__30515.cljs$core$IFn$_invoke$arity$18 = G__30515__18;
G__30515.cljs$core$IFn$_invoke$arity$19 = G__30515__19;
G__30515.cljs$core$IFn$_invoke$arity$20 = G__30515__20;
G__30515.cljs$core$IFn$_invoke$arity$21 = G__30515__21;
G__30515.cljs$core$IFn$_invoke$arity$22 = G__30515__22;
return G__30515;
})()
;
cljs.core.MultiFn.prototype.apply = (function (self__,args29667){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args29667)));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30095 = a;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(G__30095) : self__.dispatch_fn.call(null,G__30095));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30096 = a;return (target_fn.cljs$core$IFn$_invoke$arity$1 ? target_fn.cljs$core$IFn$_invoke$arity$1(G__30096) : target_fn.call(null,G__30096));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30097 = a;var G__30098 = b;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2(G__30097,G__30098) : self__.dispatch_fn.call(null,G__30097,G__30098));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30099 = a;var G__30100 = b;return (target_fn.cljs$core$IFn$_invoke$arity$2 ? target_fn.cljs$core$IFn$_invoke$arity$2(G__30099,G__30100) : target_fn.call(null,G__30099,G__30100));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30101 = a;var G__30102 = b;var G__30103 = c;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3(G__30101,G__30102,G__30103) : self__.dispatch_fn.call(null,G__30101,G__30102,G__30103));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30104 = a;var G__30105 = b;var G__30106 = c;return (target_fn.cljs$core$IFn$_invoke$arity$3 ? target_fn.cljs$core$IFn$_invoke$arity$3(G__30104,G__30105,G__30106) : target_fn.call(null,G__30104,G__30105,G__30106));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30107 = a;var G__30108 = b;var G__30109 = c;var G__30110 = d;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4(G__30107,G__30108,G__30109,G__30110) : self__.dispatch_fn.call(null,G__30107,G__30108,G__30109,G__30110));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30111 = a;var G__30112 = b;var G__30113 = c;var G__30114 = d;return (target_fn.cljs$core$IFn$_invoke$arity$4 ? target_fn.cljs$core$IFn$_invoke$arity$4(G__30111,G__30112,G__30113,G__30114) : target_fn.call(null,G__30111,G__30112,G__30113,G__30114));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30115 = a;var G__30116 = b;var G__30117 = c;var G__30118 = d;var G__30119 = e;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5(G__30115,G__30116,G__30117,G__30118,G__30119) : self__.dispatch_fn.call(null,G__30115,G__30116,G__30117,G__30118,G__30119));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30120 = a;var G__30121 = b;var G__30122 = c;var G__30123 = d;var G__30124 = e;return (target_fn.cljs$core$IFn$_invoke$arity$5 ? target_fn.cljs$core$IFn$_invoke$arity$5(G__30120,G__30121,G__30122,G__30123,G__30124) : target_fn.call(null,G__30120,G__30121,G__30122,G__30123,G__30124));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30125 = a;var G__30126 = b;var G__30127 = c;var G__30128 = d;var G__30129 = e;var G__30130 = f;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6(G__30125,G__30126,G__30127,G__30128,G__30129,G__30130) : self__.dispatch_fn.call(null,G__30125,G__30126,G__30127,G__30128,G__30129,G__30130));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30131 = a;var G__30132 = b;var G__30133 = c;var G__30134 = d;var G__30135 = e;var G__30136 = f;return (target_fn.cljs$core$IFn$_invoke$arity$6 ? target_fn.cljs$core$IFn$_invoke$arity$6(G__30131,G__30132,G__30133,G__30134,G__30135,G__30136) : target_fn.call(null,G__30131,G__30132,G__30133,G__30134,G__30135,G__30136));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30137 = a;var G__30138 = b;var G__30139 = c;var G__30140 = d;var G__30141 = e;var G__30142 = f;var G__30143 = g;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7(G__30137,G__30138,G__30139,G__30140,G__30141,G__30142,G__30143) : self__.dispatch_fn.call(null,G__30137,G__30138,G__30139,G__30140,G__30141,G__30142,G__30143));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30144 = a;var G__30145 = b;var G__30146 = c;var G__30147 = d;var G__30148 = e;var G__30149 = f;var G__30150 = g;return (target_fn.cljs$core$IFn$_invoke$arity$7 ? target_fn.cljs$core$IFn$_invoke$arity$7(G__30144,G__30145,G__30146,G__30147,G__30148,G__30149,G__30150) : target_fn.call(null,G__30144,G__30145,G__30146,G__30147,G__30148,G__30149,G__30150));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30151 = a;var G__30152 = b;var G__30153 = c;var G__30154 = d;var G__30155 = e;var G__30156 = f;var G__30157 = g;var G__30158 = h;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8(G__30151,G__30152,G__30153,G__30154,G__30155,G__30156,G__30157,G__30158) : self__.dispatch_fn.call(null,G__30151,G__30152,G__30153,G__30154,G__30155,G__30156,G__30157,G__30158));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30159 = a;var G__30160 = b;var G__30161 = c;var G__30162 = d;var G__30163 = e;var G__30164 = f;var G__30165 = g;var G__30166 = h;return (target_fn.cljs$core$IFn$_invoke$arity$8 ? target_fn.cljs$core$IFn$_invoke$arity$8(G__30159,G__30160,G__30161,G__30162,G__30163,G__30164,G__30165,G__30166) : target_fn.call(null,G__30159,G__30160,G__30161,G__30162,G__30163,G__30164,G__30165,G__30166));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30167 = a;var G__30168 = b;var G__30169 = c;var G__30170 = d;var G__30171 = e;var G__30172 = f;var G__30173 = g;var G__30174 = h;var G__30175 = i;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9(G__30167,G__30168,G__30169,G__30170,G__30171,G__30172,G__30173,G__30174,G__30175) : self__.dispatch_fn.call(null,G__30167,G__30168,G__30169,G__30170,G__30171,G__30172,G__30173,G__30174,G__30175));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30176 = a;var G__30177 = b;var G__30178 = c;var G__30179 = d;var G__30180 = e;var G__30181 = f;var G__30182 = g;var G__30183 = h;var G__30184 = i;return (target_fn.cljs$core$IFn$_invoke$arity$9 ? target_fn.cljs$core$IFn$_invoke$arity$9(G__30176,G__30177,G__30178,G__30179,G__30180,G__30181,G__30182,G__30183,G__30184) : target_fn.call(null,G__30176,G__30177,G__30178,G__30179,G__30180,G__30181,G__30182,G__30183,G__30184));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30185 = a;var G__30186 = b;var G__30187 = c;var G__30188 = d;var G__30189 = e;var G__30190 = f;var G__30191 = g;var G__30192 = h;var G__30193 = i;var G__30194 = j;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10(G__30185,G__30186,G__30187,G__30188,G__30189,G__30190,G__30191,G__30192,G__30193,G__30194) : self__.dispatch_fn.call(null,G__30185,G__30186,G__30187,G__30188,G__30189,G__30190,G__30191,G__30192,G__30193,G__30194));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30195 = a;var G__30196 = b;var G__30197 = c;var G__30198 = d;var G__30199 = e;var G__30200 = f;var G__30201 = g;var G__30202 = h;var G__30203 = i;var G__30204 = j;return (target_fn.cljs$core$IFn$_invoke$arity$10 ? target_fn.cljs$core$IFn$_invoke$arity$10(G__30195,G__30196,G__30197,G__30198,G__30199,G__30200,G__30201,G__30202,G__30203,G__30204) : target_fn.call(null,G__30195,G__30196,G__30197,G__30198,G__30199,G__30200,G__30201,G__30202,G__30203,G__30204));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30205 = a;var G__30206 = b;var G__30207 = c;var G__30208 = d;var G__30209 = e;var G__30210 = f;var G__30211 = g;var G__30212 = h;var G__30213 = i;var G__30214 = j;var G__30215 = k;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11(G__30205,G__30206,G__30207,G__30208,G__30209,G__30210,G__30211,G__30212,G__30213,G__30214,G__30215) : self__.dispatch_fn.call(null,G__30205,G__30206,G__30207,G__30208,G__30209,G__30210,G__30211,G__30212,G__30213,G__30214,G__30215));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30216 = a;var G__30217 = b;var G__30218 = c;var G__30219 = d;var G__30220 = e;var G__30221 = f;var G__30222 = g;var G__30223 = h;var G__30224 = i;var G__30225 = j;var G__30226 = k;return (target_fn.cljs$core$IFn$_invoke$arity$11 ? target_fn.cljs$core$IFn$_invoke$arity$11(G__30216,G__30217,G__30218,G__30219,G__30220,G__30221,G__30222,G__30223,G__30224,G__30225,G__30226) : target_fn.call(null,G__30216,G__30217,G__30218,G__30219,G__30220,G__30221,G__30222,G__30223,G__30224,G__30225,G__30226));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30227 = a;var G__30228 = b;var G__30229 = c;var G__30230 = d;var G__30231 = e;var G__30232 = f;var G__30233 = g;var G__30234 = h;var G__30235 = i;var G__30236 = j;var G__30237 = k;var G__30238 = l;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12(G__30227,G__30228,G__30229,G__30230,G__30231,G__30232,G__30233,G__30234,G__30235,G__30236,G__30237,G__30238) : self__.dispatch_fn.call(null,G__30227,G__30228,G__30229,G__30230,G__30231,G__30232,G__30233,G__30234,G__30235,G__30236,G__30237,G__30238));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30239 = a;var G__30240 = b;var G__30241 = c;var G__30242 = d;var G__30243 = e;var G__30244 = f;var G__30245 = g;var G__30246 = h;var G__30247 = i;var G__30248 = j;var G__30249 = k;var G__30250 = l;return (target_fn.cljs$core$IFn$_invoke$arity$12 ? target_fn.cljs$core$IFn$_invoke$arity$12(G__30239,G__30240,G__30241,G__30242,G__30243,G__30244,G__30245,G__30246,G__30247,G__30248,G__30249,G__30250) : target_fn.call(null,G__30239,G__30240,G__30241,G__30242,G__30243,G__30244,G__30245,G__30246,G__30247,G__30248,G__30249,G__30250));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30251 = a;var G__30252 = b;var G__30253 = c;var G__30254 = d;var G__30255 = e;var G__30256 = f;var G__30257 = g;var G__30258 = h;var G__30259 = i;var G__30260 = j;var G__30261 = k;var G__30262 = l;var G__30263 = m;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13(G__30251,G__30252,G__30253,G__30254,G__30255,G__30256,G__30257,G__30258,G__30259,G__30260,G__30261,G__30262,G__30263) : self__.dispatch_fn.call(null,G__30251,G__30252,G__30253,G__30254,G__30255,G__30256,G__30257,G__30258,G__30259,G__30260,G__30261,G__30262,G__30263));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30264 = a;var G__30265 = b;var G__30266 = c;var G__30267 = d;var G__30268 = e;var G__30269 = f;var G__30270 = g;var G__30271 = h;var G__30272 = i;var G__30273 = j;var G__30274 = k;var G__30275 = l;var G__30276 = m;return (target_fn.cljs$core$IFn$_invoke$arity$13 ? target_fn.cljs$core$IFn$_invoke$arity$13(G__30264,G__30265,G__30266,G__30267,G__30268,G__30269,G__30270,G__30271,G__30272,G__30273,G__30274,G__30275,G__30276) : target_fn.call(null,G__30264,G__30265,G__30266,G__30267,G__30268,G__30269,G__30270,G__30271,G__30272,G__30273,G__30274,G__30275,G__30276));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30277 = a;var G__30278 = b;var G__30279 = c;var G__30280 = d;var G__30281 = e;var G__30282 = f;var G__30283 = g;var G__30284 = h;var G__30285 = i;var G__30286 = j;var G__30287 = k;var G__30288 = l;var G__30289 = m;var G__30290 = n;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14(G__30277,G__30278,G__30279,G__30280,G__30281,G__30282,G__30283,G__30284,G__30285,G__30286,G__30287,G__30288,G__30289,G__30290) : self__.dispatch_fn.call(null,G__30277,G__30278,G__30279,G__30280,G__30281,G__30282,G__30283,G__30284,G__30285,G__30286,G__30287,G__30288,G__30289,G__30290));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30291 = a;var G__30292 = b;var G__30293 = c;var G__30294 = d;var G__30295 = e;var G__30296 = f;var G__30297 = g;var G__30298 = h;var G__30299 = i;var G__30300 = j;var G__30301 = k;var G__30302 = l;var G__30303 = m;var G__30304 = n;return (target_fn.cljs$core$IFn$_invoke$arity$14 ? target_fn.cljs$core$IFn$_invoke$arity$14(G__30291,G__30292,G__30293,G__30294,G__30295,G__30296,G__30297,G__30298,G__30299,G__30300,G__30301,G__30302,G__30303,G__30304) : target_fn.call(null,G__30291,G__30292,G__30293,G__30294,G__30295,G__30296,G__30297,G__30298,G__30299,G__30300,G__30301,G__30302,G__30303,G__30304));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30305 = a;var G__30306 = b;var G__30307 = c;var G__30308 = d;var G__30309 = e;var G__30310 = f;var G__30311 = g;var G__30312 = h;var G__30313 = i;var G__30314 = j;var G__30315 = k;var G__30316 = l;var G__30317 = m;var G__30318 = n;var G__30319 = o;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15(G__30305,G__30306,G__30307,G__30308,G__30309,G__30310,G__30311,G__30312,G__30313,G__30314,G__30315,G__30316,G__30317,G__30318,G__30319) : self__.dispatch_fn.call(null,G__30305,G__30306,G__30307,G__30308,G__30309,G__30310,G__30311,G__30312,G__30313,G__30314,G__30315,G__30316,G__30317,G__30318,G__30319));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30320 = a;var G__30321 = b;var G__30322 = c;var G__30323 = d;var G__30324 = e;var G__30325 = f;var G__30326 = g;var G__30327 = h;var G__30328 = i;var G__30329 = j;var G__30330 = k;var G__30331 = l;var G__30332 = m;var G__30333 = n;var G__30334 = o;return (target_fn.cljs$core$IFn$_invoke$arity$15 ? target_fn.cljs$core$IFn$_invoke$arity$15(G__30320,G__30321,G__30322,G__30323,G__30324,G__30325,G__30326,G__30327,G__30328,G__30329,G__30330,G__30331,G__30332,G__30333,G__30334) : target_fn.call(null,G__30320,G__30321,G__30322,G__30323,G__30324,G__30325,G__30326,G__30327,G__30328,G__30329,G__30330,G__30331,G__30332,G__30333,G__30334));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30335 = a;var G__30336 = b;var G__30337 = c;var G__30338 = d;var G__30339 = e;var G__30340 = f;var G__30341 = g;var G__30342 = h;var G__30343 = i;var G__30344 = j;var G__30345 = k;var G__30346 = l;var G__30347 = m;var G__30348 = n;var G__30349 = o;var G__30350 = p;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16(G__30335,G__30336,G__30337,G__30338,G__30339,G__30340,G__30341,G__30342,G__30343,G__30344,G__30345,G__30346,G__30347,G__30348,G__30349,G__30350) : self__.dispatch_fn.call(null,G__30335,G__30336,G__30337,G__30338,G__30339,G__30340,G__30341,G__30342,G__30343,G__30344,G__30345,G__30346,G__30347,G__30348,G__30349,G__30350));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30351 = a;var G__30352 = b;var G__30353 = c;var G__30354 = d;var G__30355 = e;var G__30356 = f;var G__30357 = g;var G__30358 = h;var G__30359 = i;var G__30360 = j;var G__30361 = k;var G__30362 = l;var G__30363 = m;var G__30364 = n;var G__30365 = o;var G__30366 = p;return (target_fn.cljs$core$IFn$_invoke$arity$16 ? target_fn.cljs$core$IFn$_invoke$arity$16(G__30351,G__30352,G__30353,G__30354,G__30355,G__30356,G__30357,G__30358,G__30359,G__30360,G__30361,G__30362,G__30363,G__30364,G__30365,G__30366) : target_fn.call(null,G__30351,G__30352,G__30353,G__30354,G__30355,G__30356,G__30357,G__30358,G__30359,G__30360,G__30361,G__30362,G__30363,G__30364,G__30365,G__30366));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30367 = a;var G__30368 = b;var G__30369 = c;var G__30370 = d;var G__30371 = e;var G__30372 = f;var G__30373 = g;var G__30374 = h;var G__30375 = i;var G__30376 = j;var G__30377 = k;var G__30378 = l;var G__30379 = m;var G__30380 = n;var G__30381 = o;var G__30382 = p;var G__30383 = q;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17(G__30367,G__30368,G__30369,G__30370,G__30371,G__30372,G__30373,G__30374,G__30375,G__30376,G__30377,G__30378,G__30379,G__30380,G__30381,G__30382,G__30383) : self__.dispatch_fn.call(null,G__30367,G__30368,G__30369,G__30370,G__30371,G__30372,G__30373,G__30374,G__30375,G__30376,G__30377,G__30378,G__30379,G__30380,G__30381,G__30382,G__30383));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30384 = a;var G__30385 = b;var G__30386 = c;var G__30387 = d;var G__30388 = e;var G__30389 = f;var G__30390 = g;var G__30391 = h;var G__30392 = i;var G__30393 = j;var G__30394 = k;var G__30395 = l;var G__30396 = m;var G__30397 = n;var G__30398 = o;var G__30399 = p;var G__30400 = q;return (target_fn.cljs$core$IFn$_invoke$arity$17 ? target_fn.cljs$core$IFn$_invoke$arity$17(G__30384,G__30385,G__30386,G__30387,G__30388,G__30389,G__30390,G__30391,G__30392,G__30393,G__30394,G__30395,G__30396,G__30397,G__30398,G__30399,G__30400) : target_fn.call(null,G__30384,G__30385,G__30386,G__30387,G__30388,G__30389,G__30390,G__30391,G__30392,G__30393,G__30394,G__30395,G__30396,G__30397,G__30398,G__30399,G__30400));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30401 = a;var G__30402 = b;var G__30403 = c;var G__30404 = d;var G__30405 = e;var G__30406 = f;var G__30407 = g;var G__30408 = h;var G__30409 = i;var G__30410 = j;var G__30411 = k;var G__30412 = l;var G__30413 = m;var G__30414 = n;var G__30415 = o;var G__30416 = p;var G__30417 = q;var G__30418 = r;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18(G__30401,G__30402,G__30403,G__30404,G__30405,G__30406,G__30407,G__30408,G__30409,G__30410,G__30411,G__30412,G__30413,G__30414,G__30415,G__30416,G__30417,G__30418) : self__.dispatch_fn.call(null,G__30401,G__30402,G__30403,G__30404,G__30405,G__30406,G__30407,G__30408,G__30409,G__30410,G__30411,G__30412,G__30413,G__30414,G__30415,G__30416,G__30417,G__30418));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30419 = a;var G__30420 = b;var G__30421 = c;var G__30422 = d;var G__30423 = e;var G__30424 = f;var G__30425 = g;var G__30426 = h;var G__30427 = i;var G__30428 = j;var G__30429 = k;var G__30430 = l;var G__30431 = m;var G__30432 = n;var G__30433 = o;var G__30434 = p;var G__30435 = q;var G__30436 = r;return (target_fn.cljs$core$IFn$_invoke$arity$18 ? target_fn.cljs$core$IFn$_invoke$arity$18(G__30419,G__30420,G__30421,G__30422,G__30423,G__30424,G__30425,G__30426,G__30427,G__30428,G__30429,G__30430,G__30431,G__30432,G__30433,G__30434,G__30435,G__30436) : target_fn.call(null,G__30419,G__30420,G__30421,G__30422,G__30423,G__30424,G__30425,G__30426,G__30427,G__30428,G__30429,G__30430,G__30431,G__30432,G__30433,G__30434,G__30435,G__30436));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30437 = a;var G__30438 = b;var G__30439 = c;var G__30440 = d;var G__30441 = e;var G__30442 = f;var G__30443 = g;var G__30444 = h;var G__30445 = i;var G__30446 = j;var G__30447 = k;var G__30448 = l;var G__30449 = m;var G__30450 = n;var G__30451 = o;var G__30452 = p;var G__30453 = q;var G__30454 = r;var G__30455 = s;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19(G__30437,G__30438,G__30439,G__30440,G__30441,G__30442,G__30443,G__30444,G__30445,G__30446,G__30447,G__30448,G__30449,G__30450,G__30451,G__30452,G__30453,G__30454,G__30455) : self__.dispatch_fn.call(null,G__30437,G__30438,G__30439,G__30440,G__30441,G__30442,G__30443,G__30444,G__30445,G__30446,G__30447,G__30448,G__30449,G__30450,G__30451,G__30452,G__30453,G__30454,G__30455));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30456 = a;var G__30457 = b;var G__30458 = c;var G__30459 = d;var G__30460 = e;var G__30461 = f;var G__30462 = g;var G__30463 = h;var G__30464 = i;var G__30465 = j;var G__30466 = k;var G__30467 = l;var G__30468 = m;var G__30469 = n;var G__30470 = o;var G__30471 = p;var G__30472 = q;var G__30473 = r;var G__30474 = s;return (target_fn.cljs$core$IFn$_invoke$arity$19 ? target_fn.cljs$core$IFn$_invoke$arity$19(G__30456,G__30457,G__30458,G__30459,G__30460,G__30461,G__30462,G__30463,G__30464,G__30465,G__30466,G__30467,G__30468,G__30469,G__30470,G__30471,G__30472,G__30473,G__30474) : target_fn.call(null,G__30456,G__30457,G__30458,G__30459,G__30460,G__30461,G__30462,G__30463,G__30464,G__30465,G__30466,G__30467,G__30468,G__30469,G__30470,G__30471,G__30472,G__30473,G__30474));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30475 = a;var G__30476 = b;var G__30477 = c;var G__30478 = d;var G__30479 = e;var G__30480 = f;var G__30481 = g;var G__30482 = h;var G__30483 = i;var G__30484 = j;var G__30485 = k;var G__30486 = l;var G__30487 = m;var G__30488 = n;var G__30489 = o;var G__30490 = p;var G__30491 = q;var G__30492 = r;var G__30493 = s;var G__30494 = t;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20(G__30475,G__30476,G__30477,G__30478,G__30479,G__30480,G__30481,G__30482,G__30483,G__30484,G__30485,G__30486,G__30487,G__30488,G__30489,G__30490,G__30491,G__30492,G__30493,G__30494) : self__.dispatch_fn.call(null,G__30475,G__30476,G__30477,G__30478,G__30479,G__30480,G__30481,G__30482,G__30483,G__30484,G__30485,G__30486,G__30487,G__30488,G__30489,G__30490,G__30491,G__30492,G__30493,G__30494));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30495 = a;var G__30496 = b;var G__30497 = c;var G__30498 = d;var G__30499 = e;var G__30500 = f;var G__30501 = g;var G__30502 = h;var G__30503 = i;var G__30504 = j;var G__30505 = k;var G__30506 = l;var G__30507 = m;var G__30508 = n;var G__30509 = o;var G__30510 = p;var G__30511 = q;var G__30512 = r;var G__30513 = s;var G__30514 = t;return (target_fn.cljs$core$IFn$_invoke$arity$20 ? target_fn.cljs$core$IFn$_invoke$arity$20(G__30495,G__30496,G__30497,G__30498,G__30499,G__30500,G__30501,G__30502,G__30503,G__30504,G__30505,G__30506,G__30507,G__30508,G__30509,G__30510,G__30511,G__30512,G__30513,G__30514) : target_fn.call(null,G__30495,G__30496,G__30497,G__30498,G__30499,G__30500,G__30501,G__30502,G__30503,G__30504,G__30505,G__30506,G__30507,G__30508,G__30509,G__30510,G__30511,G__30512,G__30513,G__30514));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var mf = this;var dispatch_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.dispatch_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(target_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
cljs.core.__GT_MultiFn = (function __GT_MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){return (new cljs.core.MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy));
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){return cljs.core._reset(multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){return cljs.core._remove_method(multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){return cljs.core._prefer_method(multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){return cljs.core._methods(multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){return cljs.core._get_method(multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){return cljs.core._prefers(multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2153775104;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorStr = "cljs.core/UUID";
cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opt__20376__auto__){return cljs.core._write(writer__20375__auto__,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__30516 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([this$__$1], 0));return goog.string.hashCode(G__30516);
});
cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,___$1){var self__ = this;
var ___$2 = this;return cljs.core._write(writer,("#uuid \""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.uuid)+"\""));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;return ((other instanceof cljs.core.UUID)) && ((self__.uuid === other.uuid));
});
cljs.core.UUID.prototype.toString = (function (){var self__ = this;
var _ = this;return self__.uuid;
});
cljs.core.UUID.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.__GT_UUID = (function __GT_UUID(uuid){return (new cljs.core.UUID(uuid));
});

/**
* @constructor
*/
cljs.core.ExceptionInfo = (function (message,data,cause){
this.message = message;
this.data = data;
this.cause = cause;
})
cljs.core.ExceptionInfo.cljs$lang$type = true;
cljs.core.ExceptionInfo.cljs$lang$ctorStr = "cljs.core/ExceptionInfo";
cljs.core.ExceptionInfo.cljs$lang$ctorPrWriter = (function (this__20377__auto__,writer__20378__auto__,opts__20379__auto__){return cljs.core._write(writer__20378__auto__,"cljs.core/ExceptionInfo");
});
cljs.core.__GT_ExceptionInfo = (function __GT_ExceptionInfo(message,data,cause){return (new cljs.core.ExceptionInfo(message,data,cause));
});
cljs.core.ExceptionInfo.prototype = (new Error());
cljs.core.ExceptionInfo.prototype.constructor = cljs.core.ExceptionInfo;
/**
* Alpha - subject to change.
* Create an instance of ExceptionInfo, an Error type that carries a
* map of additional data.
*/
cljs.core.ex_info = (function() {
var ex_info = null;
var ex_info__2 = (function (msg,map){return (new cljs.core.ExceptionInfo(msg,map,null));
});
var ex_info__3 = (function (msg,map,cause){return (new cljs.core.ExceptionInfo(msg,map,cause));
});
ex_info = function(msg,map,cause){
switch(arguments.length){
case 2:
return ex_info__2.call(this,msg,map);
case 3:
return ex_info__3.call(this,msg,map,cause);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ex_info.cljs$core$IFn$_invoke$arity$2 = ex_info__2;
ex_info.cljs$core$IFn$_invoke$arity$3 = ex_info__3;
return ex_info;
})()
;
/**
* Alpha - subject to change.
* Returns exception data (a map) if ex is an ExceptionInfo.
* Otherwise returns nil.
*/
cljs.core.ex_data = (function ex_data(ex){if((ex instanceof cljs.core.ExceptionInfo))
{return ex.data;
} else
{return null;
}
});
/**
* Alpha - subject to change.
* Returns the message attached to the given Error / ExceptionInfo object.
* For non-Errors returns nil.
*/
cljs.core.ex_message = (function ex_message(ex){if((ex instanceof Error))
{return ex.message;
} else
{return null;
}
});
/**
* Alpha - subject to change.
* Returns exception cause (an Error / ExceptionInfo) if ex is an
* ExceptionInfo.
* Otherwise returns nil.
*/
cljs.core.ex_cause = (function ex_cause(ex){if((ex instanceof cljs.core.ExceptionInfo))
{return ex.cause;
} else
{return null;
}
});
/**
* Returns an JavaScript compatible comparator based upon pred.
*/
cljs.core.comparator = (function comparator(pred){return (function (x,y){if(cljs.core.truth_((function (){var G__30521 = x;var G__30522 = y;return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__30521,G__30522) : pred.call(null,G__30521,G__30522));
})()))
{return (-1);
} else
{if(cljs.core.truth_((function (){var G__30523 = y;var G__30524 = x;return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__30523,G__30524) : pred.call(null,G__30523,G__30524));
})()))
{return (1);
} else
{return (0);

}
}
});
});
cljs.core.special_symbol_QMARK_ = (function special_symbol_QMARK_(x){return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),null,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,new cljs.core.Symbol(null,".",".",1975675962,null),null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,new cljs.core.Symbol(null,"def","def",597100991,null),null], null), null),x);
});
//# sourceMappingURL=core.js.map