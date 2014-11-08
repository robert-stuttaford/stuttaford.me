goog.provide('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.array');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string');
cljs.core._STAR_clojurescript_version_STAR_ = "0.0-2371";
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
var G__42347__delegate = function (args){return console.log.apply(console,(function (){var G__42346 = args;return (cljs.core.into_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(G__42346) : cljs.core.into_array.call(null,G__42346));
})());
};
var G__42347 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__42347__delegate.call(this,args);};
G__42347.cljs$lang$maxFixedArity = 0;
G__42347.cljs$lang$applyTo = (function (arglist__42348){
var args = cljs.core.seq(arglist__42348);
return G__42347__delegate(args);
});
G__42347.cljs$core$IFn$_invoke$arity$variadic = G__42347__delegate;
return G__42347;
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
cljs.core.string_QMARK_ = (function string_QMARK_(x){var G__42350 = x;return goog.isString(G__42350);
});
/**
* Internal - do not use!
*/
cljs.core.native_satisfies_QMARK_ = (function native_satisfies_QMARK_(p,x){var x__$1 = (((x == null))?null:x);if((p[(function (){var G__42352 = x__$1;return goog.typeOf(G__42352);
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
cljs.core.missing_protocol = (function missing_protocol(proto,obj){var ty = cljs.core.type(obj);var ty__$1 = (cljs.core.truth_((function (){var and__19564__auto__ = ty;if(cljs.core.truth_(and__19564__auto__))
{return ty.cljs$lang$type;
} else
{return and__19564__auto__;
}
})())?ty.cljs$lang$ctorStr:(function (){var G__42354 = obj;return goog.typeOf(G__42354);
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
cljs.core.aclone = (function aclone(arr){var len = arr.length;var new_arr = (new Array(len));var n__21231__auto___42356 = len;var i_42357 = (0);while(true){
if((i_42357 < n__21231__auto___42356))
{(new_arr[i_42357] = (arr[i_42357]));
{
var G__42358 = (i_42357 + (1));
i_42357 = G__42358;
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
var G__42367__delegate = function (array,i,idxs){var G__42364 = aget;var G__42365 = aget.cljs$core$IFn$_invoke$arity$2(array,i);var G__42366 = idxs;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$3 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__42364,G__42365,G__42366) : cljs.core.apply.call(null,G__42364,G__42365,G__42366));
};
var G__42367 = function (array,i,var_args){
var idxs = null;if (arguments.length > 2) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__42367__delegate.call(this,array,i,idxs);};
G__42367.cljs$lang$maxFixedArity = 2;
G__42367.cljs$lang$applyTo = (function (arglist__42368){
var array = cljs.core.first(arglist__42368);
arglist__42368 = cljs.core.next(arglist__42368);
var i = cljs.core.first(arglist__42368);
var idxs = cljs.core.rest(arglist__42368);
return G__42367__delegate(array,i,idxs);
});
G__42367.cljs$core$IFn$_invoke$arity$variadic = G__42367__delegate;
return G__42367;
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
var G__42377__delegate = function (array,idx,idx2,idxv){var G__42373 = aset;var G__42374 = (array[idx]);var G__42375 = idx2;var G__42376 = idxv;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$4(G__42373,G__42374,G__42375,G__42376) : cljs.core.apply.call(null,G__42373,G__42374,G__42375,G__42376));
};
var G__42377 = function (array,idx,idx2,var_args){
var idxv = null;if (arguments.length > 3) {
  idxv = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__42377__delegate.call(this,array,idx,idx2,idxv);};
G__42377.cljs$lang$maxFixedArity = 3;
G__42377.cljs$lang$applyTo = (function (arglist__42378){
var array = cljs.core.first(arglist__42378);
arglist__42378 = cljs.core.next(arglist__42378);
var idx = cljs.core.first(arglist__42378);
arglist__42378 = cljs.core.next(arglist__42378);
var idx2 = cljs.core.first(arglist__42378);
var idxv = cljs.core.rest(arglist__42378);
return G__42377__delegate(array,idx,idx2,idxv);
});
G__42377.cljs$core$IFn$_invoke$arity$variadic = G__42377__delegate;
return G__42377;
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
var into_array__2 = (function (type,aseq){var G__42384 = (function (a,x){a.push(x);
return a;
});var G__42385 = [];var G__42386 = aseq;return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(G__42384,G__42385,G__42386) : cljs.core.reduce.call(null,G__42384,G__42385,G__42386));
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
cljs.core.Fn = (function (){var obj42388 = {};return obj42388;
})();
cljs.core.IFn = (function (){var obj42390 = {};return obj42390;
})();
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){if((function (){var and__19564__auto__ = this$;if(and__19564__auto__)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__19564__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__20812__auto__ = (((this$ == null))?null:this$);return (function (){var or__19586__auto__ = (cljs.core._invoke[(function (){var G__42436 = x__20812__auto__;return goog.typeOf(G__42436);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._invoke["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){if((function (){var and__19564__auto__ = this$;if(and__19564__auto__)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__19564__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__20812__auto__ = (((this$ == null))?null:this$);return (function (){var or__19586__auto__ = (cljs.core._invoke[(function (){var G__42438 = x__20812__auto__;return goog.typeOf(G__42438);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._invoke["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){if((function (){var and__19564__auto__ = this$;if(and__19564__auto__)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__19564__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__20812__auto__ = (((this$ == null))?null:this$);return (function (){var or__19586__auto__ = (cljs.core._invoke[(function (){var G__42440 = x__20812__auto__;return goog.typeOf(G__42440);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._invoke["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){if((function (){var and__19564__auto__ = this$;if(and__19564__auto__)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__19564__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__20812__auto__ = (((this$ == null))?null:this$);return (function (){var or__19586__auto__ = (cljs.core._invoke[(function (){var G__42442 = x__20812__auto__;return goog.typeOf(G__42442);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._invoke["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){if((function (){var and__19564__auto__ = this$;if(and__19564__auto__)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__19564__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__20812__auto__ = (((this$ == null))?null:this$);return (function (){var or__19586__auto__ = (cljs.core._invoke[(function (){var G__42444 = x__20812__auto__;return goog.typeOf(G__42444);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._invoke["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){if((function (){var and__19564__auto__ = this$;if(and__19564__auto__)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__19564__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__20812__auto__ = (((this$ == null))?null:this$);return (function (){var or__19586__auto__ = (cljs.core._invoke[(function (){var G__42446 = x__20812__auto__;return goog.typeOf(G__42446);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._invoke["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){if((function (){var and__19564__auto__ = this$;if(and__19564__auto__)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__19564__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__20812__auto__ = (((this$ == null))?null:this$);return (function (){var or__19586__auto__ = (cljs.core._invoke[(function (){var G__42448 = x__20812__auto__;return goog.typeOf(G__42448);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._invoke["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){if((function (){var and__19564__auto__ = this$;if(and__19564__auto__)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__19564__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__20812__auto__ = (((this$ == null))?null:this$);return (function (){var or__19586__auto__ = (cljs.core._invoke[(function (){var G__42450 = x__20812__auto__;return goog.typeOf(G__42450);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._invoke["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){if((function (){var and__19564__auto__ = this$;if(and__19564__auto__)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__19564__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__20812__auto__ = (((this$ == null))?null:this$);return (function (){var or__19586__auto__ = (cljs.core._invoke[(function (){var G__42452 = x__20812__auto__;return goog.typeOf(G__42452);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._invoke["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){if((function (){var and__19564__auto__ = this$;if(and__19564__auto__)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__19564__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__20812__auto__ = (((this$ == null))?null:this$);return (function (){var or__19586__auto__ = (cljs.core._invoke[(function (){var G__42454 = x__20812__auto__;return goog.typeOf(G__42454);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._invoke["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){if((function (){var and__19564__auto__ = this$;if(and__19564__auto__)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__19564__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__20812__auto__ = (((this$ == null))?null:this$);return (function (){var or__19586__auto__ = (cljs.core._invoke[(function (){var G__42456 = x__20812__auto__;return goog.typeOf(G__42456);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._invoke["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){if((function (){var and__19564__auto__ = this$;if(and__19564__auto__)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__19564__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__20812__auto__ = (((this$ == null))?null:this$);return (function (){var or__19586__auto__ = (cljs.core._invoke[(function (){var G__42458 = x__20812__auto__;return goog.typeOf(G__42458);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._invoke["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){if((function (){var and__19564__auto__ = this$;if(and__19564__auto__)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__19564__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__20812__auto__ = (((this$ == null))?null:this$);return (function (){var or__19586__auto__ = (cljs.core._invoke[(function (){var G__42460 = x__20812__auto__;return goog.typeOf(G__42460);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._invoke["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){if((function (){var and__19564__auto__ = this$;if(and__19564__auto__)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__19564__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__20812__auto__ = (((this$ == null))?null:this$);return (function (){var or__19586__auto__ = (cljs.core._invoke[(function (){var G__42462 = x__20812__auto__;return goog.typeOf(G__42462);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._invoke["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){if((function (){var and__19564__auto__ = this$;if(and__19564__auto__)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__19564__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__20812__auto__ = (((this$ == null))?null:this$);return (function (){var or__19586__auto__ = (cljs.core._invoke[(function (){var G__42464 = x__20812__auto__;return goog.typeOf(G__42464);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._invoke["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){if((function (){var and__19564__auto__ = this$;if(and__19564__auto__)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__19564__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__20812__auto__ = (((this$ == null))?null:this$);return (function (){var or__19586__auto__ = (cljs.core._invoke[(function (){var G__42466 = x__20812__auto__;return goog.typeOf(G__42466);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._invoke["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if((function (){var and__19564__auto__ = this$;if(and__19564__auto__)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__19564__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__20812__auto__ = (((this$ == null))?null:this$);return (function (){var or__19586__auto__ = (cljs.core._invoke[(function (){var G__42468 = x__20812__auto__;return goog.typeOf(G__42468);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._invoke["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if((function (){var and__19564__auto__ = this$;if(and__19564__auto__)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__19564__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__20812__auto__ = (((this$ == null))?null:this$);return (function (){var or__19586__auto__ = (cljs.core._invoke[(function (){var G__42470 = x__20812__auto__;return goog.typeOf(G__42470);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._invoke["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if((function (){var and__19564__auto__ = this$;if(and__19564__auto__)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__19564__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
} else
{var x__20812__auto__ = (((this$ == null))?null:this$);return (function (){var or__19586__auto__ = (cljs.core._invoke[(function (){var G__42472 = x__20812__auto__;return goog.typeOf(G__42472);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._invoke["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if((function (){var and__19564__auto__ = this$;if(and__19564__auto__)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__19564__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
} else
{var x__20812__auto__ = (((this$ == null))?null:this$);return (function (){var or__19586__auto__ = (cljs.core._invoke[(function (){var G__42474 = x__20812__auto__;return goog.typeOf(G__42474);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._invoke["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){if((function (){var and__19564__auto__ = this$;if(and__19564__auto__)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__19564__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
} else
{var x__20812__auto__ = (((this$ == null))?null:this$);return (function (){var or__19586__auto__ = (cljs.core._invoke[(function (){var G__42476 = x__20812__auto__;return goog.typeOf(G__42476);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._invoke["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}
});
var _invoke__22 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){if((function (){var and__19564__auto__ = this$;if(and__19564__auto__)
{return this$.cljs$core$IFn$_invoke$arity$22;
} else
{return and__19564__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$22(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
} else
{var x__20812__auto__ = (((this$ == null))?null:this$);return (function (){var or__19586__auto__ = (cljs.core._invoke[(function (){var G__42478 = x__20812__auto__;return goog.typeOf(G__42478);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._invoke["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
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
cljs.core.ICloneable = (function (){var obj42480 = {};return obj42480;
})();
cljs.core._clone = (function _clone(value){if((function (){var and__19564__auto__ = value;if(and__19564__auto__)
{return value.cljs$core$ICloneable$_clone$arity$1;
} else
{return and__19564__auto__;
}
})())
{return value.cljs$core$ICloneable$_clone$arity$1(value);
} else
{var x__20812__auto__ = (((value == null))?null:value);return (function (){var or__19586__auto__ = (cljs.core._clone[(function (){var G__42484 = x__20812__auto__;return goog.typeOf(G__42484);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._clone["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("ICloneable.-clone",value);
}
}
})().call(null,value);
}
});
cljs.core.ICounted = (function (){var obj42486 = {};return obj42486;
})();
cljs.core._count = (function _count(coll){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._count[(function (){var G__42490 = x__20812__auto__;return goog.typeOf(G__42490);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._count["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = (function (){var obj42492 = {};return obj42492;
})();
cljs.core._empty = (function _empty(coll){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._empty[(function (){var G__42496 = x__20812__auto__;return goog.typeOf(G__42496);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._empty["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = (function (){var obj42498 = {};return obj42498;
})();
cljs.core._conj = (function _conj(coll,o){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._conj[(function (){var G__42502 = x__20812__auto__;return goog.typeOf(G__42502);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._conj["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = (function (){var obj42504 = {};return obj42504;
})();
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._nth[(function (){var G__42510 = x__20812__auto__;return goog.typeOf(G__42510);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._nth["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._nth[(function (){var G__42512 = x__20812__auto__;return goog.typeOf(G__42512);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._nth["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
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
cljs.core.ASeq = (function (){var obj42514 = {};return obj42514;
})();
cljs.core.ISeq = (function (){var obj42516 = {};return obj42516;
})();
cljs.core._first = (function _first(coll){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._first[(function (){var G__42520 = x__20812__auto__;return goog.typeOf(G__42520);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._first["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._rest[(function (){var G__42524 = x__20812__auto__;return goog.typeOf(G__42524);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._rest["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = (function (){var obj42526 = {};return obj42526;
})();
cljs.core._next = (function _next(coll){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._next[(function (){var G__42530 = x__20812__auto__;return goog.typeOf(G__42530);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._next["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = (function (){var obj42532 = {};return obj42532;
})();
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){if((function (){var and__19564__auto__ = o;if(and__19564__auto__)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__19564__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__20812__auto__ = (((o == null))?null:o);return (function (){var or__19586__auto__ = (cljs.core._lookup[(function (){var G__42538 = x__20812__auto__;return goog.typeOf(G__42538);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._lookup["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){if((function (){var and__19564__auto__ = o;if(and__19564__auto__)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__19564__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__20812__auto__ = (((o == null))?null:o);return (function (){var or__19586__auto__ = (cljs.core._lookup[(function (){var G__42540 = x__20812__auto__;return goog.typeOf(G__42540);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._lookup["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
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
cljs.core.IAssociative = (function (){var obj42542 = {};return obj42542;
})();
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._contains_key_QMARK_[(function (){var G__42546 = x__20812__auto__;return goog.typeOf(G__42546);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._contains_key_QMARK_["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._assoc[(function (){var G__42550 = x__20812__auto__;return goog.typeOf(G__42550);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._assoc["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = (function (){var obj42552 = {};return obj42552;
})();
cljs.core._dissoc = (function _dissoc(coll,k){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._dissoc[(function (){var G__42556 = x__20812__auto__;return goog.typeOf(G__42556);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._dissoc["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = (function (){var obj42558 = {};return obj42558;
})();
cljs.core._key = (function _key(coll){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._key[(function (){var G__42562 = x__20812__auto__;return goog.typeOf(G__42562);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._key["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._val[(function (){var G__42566 = x__20812__auto__;return goog.typeOf(G__42566);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._val["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = (function (){var obj42568 = {};return obj42568;
})();
cljs.core._disjoin = (function _disjoin(coll,v){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._disjoin[(function (){var G__42572 = x__20812__auto__;return goog.typeOf(G__42572);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._disjoin["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = (function (){var obj42574 = {};return obj42574;
})();
cljs.core._peek = (function _peek(coll){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._peek[(function (){var G__42578 = x__20812__auto__;return goog.typeOf(G__42578);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._peek["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._pop[(function (){var G__42582 = x__20812__auto__;return goog.typeOf(G__42582);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._pop["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = (function (){var obj42584 = {};return obj42584;
})();
cljs.core._assoc_n = (function _assoc_n(coll,n,val){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._assoc_n[(function (){var G__42588 = x__20812__auto__;return goog.typeOf(G__42588);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._assoc_n["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = (function (){var obj42590 = {};return obj42590;
})();
cljs.core._deref = (function _deref(o){if((function (){var and__19564__auto__ = o;if(and__19564__auto__)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__19564__auto__;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__20812__auto__ = (((o == null))?null:o);return (function (){var or__19586__auto__ = (cljs.core._deref[(function (){var G__42594 = x__20812__auto__;return goog.typeOf(G__42594);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._deref["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = (function (){var obj42596 = {};return obj42596;
})();
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){if((function (){var and__19564__auto__ = o;if(and__19564__auto__)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__19564__auto__;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__20812__auto__ = (((o == null))?null:o);return (function (){var or__19586__auto__ = (cljs.core._deref_with_timeout[(function (){var G__42600 = x__20812__auto__;return goog.typeOf(G__42600);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._deref_with_timeout["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = (function (){var obj42602 = {};return obj42602;
})();
cljs.core._meta = (function _meta(o){if((function (){var and__19564__auto__ = o;if(and__19564__auto__)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__19564__auto__;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__20812__auto__ = (((o == null))?null:o);return (function (){var or__19586__auto__ = (cljs.core._meta[(function (){var G__42606 = x__20812__auto__;return goog.typeOf(G__42606);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._meta["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = (function (){var obj42608 = {};return obj42608;
})();
cljs.core._with_meta = (function _with_meta(o,meta){if((function (){var and__19564__auto__ = o;if(and__19564__auto__)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__19564__auto__;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__20812__auto__ = (((o == null))?null:o);return (function (){var or__19586__auto__ = (cljs.core._with_meta[(function (){var G__42612 = x__20812__auto__;return goog.typeOf(G__42612);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._with_meta["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = (function (){var obj42614 = {};return obj42614;
})();
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._reduce[(function (){var G__42620 = x__20812__auto__;return goog.typeOf(G__42620);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._reduce["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._reduce[(function (){var G__42622 = x__20812__auto__;return goog.typeOf(G__42622);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._reduce["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
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
cljs.core.IKVReduce = (function (){var obj42624 = {};return obj42624;
})();
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._kv_reduce[(function (){var G__42628 = x__20812__auto__;return goog.typeOf(G__42628);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._kv_reduce["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = (function (){var obj42630 = {};return obj42630;
})();
cljs.core._equiv = (function _equiv(o,other){if((function (){var and__19564__auto__ = o;if(and__19564__auto__)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__19564__auto__;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__20812__auto__ = (((o == null))?null:o);return (function (){var or__19586__auto__ = (cljs.core._equiv[(function (){var G__42634 = x__20812__auto__;return goog.typeOf(G__42634);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._equiv["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = (function (){var obj42636 = {};return obj42636;
})();
cljs.core._hash = (function _hash(o){if((function (){var and__19564__auto__ = o;if(and__19564__auto__)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__19564__auto__;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__20812__auto__ = (((o == null))?null:o);return (function (){var or__19586__auto__ = (cljs.core._hash[(function (){var G__42640 = x__20812__auto__;return goog.typeOf(G__42640);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._hash["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = (function (){var obj42642 = {};return obj42642;
})();
cljs.core._seq = (function _seq(o){if((function (){var and__19564__auto__ = o;if(and__19564__auto__)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__19564__auto__;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__20812__auto__ = (((o == null))?null:o);return (function (){var or__19586__auto__ = (cljs.core._seq[(function (){var G__42646 = x__20812__auto__;return goog.typeOf(G__42646);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._seq["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = (function (){var obj42648 = {};return obj42648;
})();
cljs.core.IList = (function (){var obj42650 = {};return obj42650;
})();
cljs.core.IRecord = (function (){var obj42652 = {};return obj42652;
})();
cljs.core.IReversible = (function (){var obj42654 = {};return obj42654;
})();
cljs.core._rseq = (function _rseq(coll){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._rseq[(function (){var G__42658 = x__20812__auto__;return goog.typeOf(G__42658);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._rseq["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = (function (){var obj42660 = {};return obj42660;
})();
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._sorted_seq[(function (){var G__42664 = x__20812__auto__;return goog.typeOf(G__42664);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._sorted_seq["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._sorted_seq_from[(function (){var G__42668 = x__20812__auto__;return goog.typeOf(G__42668);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._sorted_seq_from["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._entry_key[(function (){var G__42672 = x__20812__auto__;return goog.typeOf(G__42672);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._entry_key["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._comparator[(function (){var G__42676 = x__20812__auto__;return goog.typeOf(G__42676);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._comparator["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IWriter = (function (){var obj42678 = {};return obj42678;
})();
cljs.core._write = (function _write(writer,s){if((function (){var and__19564__auto__ = writer;if(and__19564__auto__)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__19564__auto__;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__20812__auto__ = (((writer == null))?null:writer);return (function (){var or__19586__auto__ = (cljs.core._write[(function (){var G__42682 = x__20812__auto__;return goog.typeOf(G__42682);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._write["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){if((function (){var and__19564__auto__ = writer;if(and__19564__auto__)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__19564__auto__;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__20812__auto__ = (((writer == null))?null:writer);return (function (){var or__19586__auto__ = (cljs.core._flush[(function (){var G__42686 = x__20812__auto__;return goog.typeOf(G__42686);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._flush["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = (function (){var obj42688 = {};return obj42688;
})();
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){if((function (){var and__19564__auto__ = o;if(and__19564__auto__)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__19564__auto__;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__20812__auto__ = (((o == null))?null:o);return (function (){var or__19586__auto__ = (cljs.core._pr_writer[(function (){var G__42692 = x__20812__auto__;return goog.typeOf(G__42692);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._pr_writer["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = (function (){var obj42694 = {};return obj42694;
})();
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){if((function (){var and__19564__auto__ = d;if(and__19564__auto__)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__19564__auto__;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__20812__auto__ = (((d == null))?null:d);return (function (){var or__19586__auto__ = (cljs.core._realized_QMARK_[(function (){var G__42698 = x__20812__auto__;return goog.typeOf(G__42698);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._realized_QMARK_["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = (function (){var obj42700 = {};return obj42700;
})();
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){if((function (){var and__19564__auto__ = this$;if(and__19564__auto__)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__19564__auto__;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__20812__auto__ = (((this$ == null))?null:this$);return (function (){var or__19586__auto__ = (cljs.core._notify_watches[(function (){var G__42704 = x__20812__auto__;return goog.typeOf(G__42704);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._notify_watches["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){if((function (){var and__19564__auto__ = this$;if(and__19564__auto__)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__19564__auto__;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__20812__auto__ = (((this$ == null))?null:this$);return (function (){var or__19586__auto__ = (cljs.core._add_watch[(function (){var G__42708 = x__20812__auto__;return goog.typeOf(G__42708);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._add_watch["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){if((function (){var and__19564__auto__ = this$;if(and__19564__auto__)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__19564__auto__;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__20812__auto__ = (((this$ == null))?null:this$);return (function (){var or__19586__auto__ = (cljs.core._remove_watch[(function (){var G__42712 = x__20812__auto__;return goog.typeOf(G__42712);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._remove_watch["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = (function (){var obj42714 = {};return obj42714;
})();
cljs.core._as_transient = (function _as_transient(coll){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._as_transient[(function (){var G__42718 = x__20812__auto__;return goog.typeOf(G__42718);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._as_transient["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = (function (){var obj42720 = {};return obj42720;
})();
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){if((function (){var and__19564__auto__ = tcoll;if(and__19564__auto__)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__19564__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__20812__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__19586__auto__ = (cljs.core._conj_BANG_[(function (){var G__42724 = x__20812__auto__;return goog.typeOf(G__42724);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._conj_BANG_["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){if((function (){var and__19564__auto__ = tcoll;if(and__19564__auto__)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__19564__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__20812__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__19586__auto__ = (cljs.core._persistent_BANG_[(function (){var G__42728 = x__20812__auto__;return goog.typeOf(G__42728);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._persistent_BANG_["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = (function (){var obj42730 = {};return obj42730;
})();
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){if((function (){var and__19564__auto__ = tcoll;if(and__19564__auto__)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__19564__auto__;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__20812__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__19586__auto__ = (cljs.core._assoc_BANG_[(function (){var G__42734 = x__20812__auto__;return goog.typeOf(G__42734);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._assoc_BANG_["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = (function (){var obj42736 = {};return obj42736;
})();
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){if((function (){var and__19564__auto__ = tcoll;if(and__19564__auto__)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__19564__auto__;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__20812__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__19586__auto__ = (cljs.core._dissoc_BANG_[(function (){var G__42740 = x__20812__auto__;return goog.typeOf(G__42740);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._dissoc_BANG_["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = (function (){var obj42742 = {};return obj42742;
})();
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){if((function (){var and__19564__auto__ = tcoll;if(and__19564__auto__)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__19564__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__20812__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__19586__auto__ = (cljs.core._assoc_n_BANG_[(function (){var G__42746 = x__20812__auto__;return goog.typeOf(G__42746);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._assoc_n_BANG_["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){if((function (){var and__19564__auto__ = tcoll;if(and__19564__auto__)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__19564__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__20812__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__19586__auto__ = (cljs.core._pop_BANG_[(function (){var G__42750 = x__20812__auto__;return goog.typeOf(G__42750);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._pop_BANG_["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = (function (){var obj42752 = {};return obj42752;
})();
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){if((function (){var and__19564__auto__ = tcoll;if(and__19564__auto__)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__19564__auto__;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__20812__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__19586__auto__ = (cljs.core._disjoin_BANG_[(function (){var G__42756 = x__20812__auto__;return goog.typeOf(G__42756);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._disjoin_BANG_["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = (function (){var obj42758 = {};return obj42758;
})();
cljs.core._compare = (function _compare(x,y){if((function (){var and__19564__auto__ = x;if(and__19564__auto__)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__19564__auto__;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__20812__auto__ = (((x == null))?null:x);return (function (){var or__19586__auto__ = (cljs.core._compare[(function (){var G__42762 = x__20812__auto__;return goog.typeOf(G__42762);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._compare["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = (function (){var obj42764 = {};return obj42764;
})();
cljs.core._drop_first = (function _drop_first(coll){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._drop_first[(function (){var G__42768 = x__20812__auto__;return goog.typeOf(G__42768);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._drop_first["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = (function (){var obj42770 = {};return obj42770;
})();
cljs.core._chunked_first = (function _chunked_first(coll){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._chunked_first[(function (){var G__42774 = x__20812__auto__;return goog.typeOf(G__42774);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._chunked_first["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._chunked_rest[(function (){var G__42778 = x__20812__auto__;return goog.typeOf(G__42778);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._chunked_rest["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = (function (){var obj42780 = {};return obj42780;
})();
cljs.core._chunked_next = (function _chunked_next(coll){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._chunked_next[(function (){var G__42784 = x__20812__auto__;return goog.typeOf(G__42784);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._chunked_next["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INamed = (function (){var obj42786 = {};return obj42786;
})();
cljs.core._name = (function _name(x){if((function (){var and__19564__auto__ = x;if(and__19564__auto__)
{return x.cljs$core$INamed$_name$arity$1;
} else
{return and__19564__auto__;
}
})())
{return x.cljs$core$INamed$_name$arity$1(x);
} else
{var x__20812__auto__ = (((x == null))?null:x);return (function (){var or__19586__auto__ = (cljs.core._name[(function (){var G__42790 = x__20812__auto__;return goog.typeOf(G__42790);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._name["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("INamed.-name",x);
}
}
})().call(null,x);
}
});
cljs.core._namespace = (function _namespace(x){if((function (){var and__19564__auto__ = x;if(and__19564__auto__)
{return x.cljs$core$INamed$_namespace$arity$1;
} else
{return and__19564__auto__;
}
})())
{return x.cljs$core$INamed$_namespace$arity$1(x);
} else
{var x__20812__auto__ = (((x == null))?null:x);return (function (){var or__19586__auto__ = (cljs.core._namespace[(function (){var G__42794 = x__20812__auto__;return goog.typeOf(G__42794);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._namespace["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("INamed.-namespace",x);
}
}
})().call(null,x);
}
});
cljs.core.IAtom = (function (){var obj42796 = {};return obj42796;
})();
cljs.core.IReset = (function (){var obj42798 = {};return obj42798;
})();
cljs.core._reset_BANG_ = (function _reset_BANG_(o,new_value){if((function (){var and__19564__auto__ = o;if(and__19564__auto__)
{return o.cljs$core$IReset$_reset_BANG_$arity$2;
} else
{return and__19564__auto__;
}
})())
{return o.cljs$core$IReset$_reset_BANG_$arity$2(o,new_value);
} else
{var x__20812__auto__ = (((o == null))?null:o);return (function (){var or__19586__auto__ = (cljs.core._reset_BANG_[(function (){var G__42802 = x__20812__auto__;return goog.typeOf(G__42802);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._reset_BANG_["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IReset.-reset!",o);
}
}
})().call(null,o,new_value);
}
});
cljs.core.ISwap = (function (){var obj42804 = {};return obj42804;
})();
cljs.core._swap_BANG_ = (function() {
var _swap_BANG_ = null;
var _swap_BANG___2 = (function (o,f){if((function (){var and__19564__auto__ = o;if(and__19564__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$2;
} else
{return and__19564__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$2(o,f);
} else
{var x__20812__auto__ = (((o == null))?null:o);return (function (){var or__19586__auto__ = (cljs.core._swap_BANG_[(function (){var G__42814 = x__20812__auto__;return goog.typeOf(G__42814);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f);
}
});
var _swap_BANG___3 = (function (o,f,a){if((function (){var and__19564__auto__ = o;if(and__19564__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$3;
} else
{return and__19564__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$3(o,f,a);
} else
{var x__20812__auto__ = (((o == null))?null:o);return (function (){var or__19586__auto__ = (cljs.core._swap_BANG_[(function (){var G__42816 = x__20812__auto__;return goog.typeOf(G__42816);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a);
}
});
var _swap_BANG___4 = (function (o,f,a,b){if((function (){var and__19564__auto__ = o;if(and__19564__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$4;
} else
{return and__19564__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$4(o,f,a,b);
} else
{var x__20812__auto__ = (((o == null))?null:o);return (function (){var or__19586__auto__ = (cljs.core._swap_BANG_[(function (){var G__42818 = x__20812__auto__;return goog.typeOf(G__42818);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b);
}
});
var _swap_BANG___5 = (function (o,f,a,b,xs){if((function (){var and__19564__auto__ = o;if(and__19564__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$5;
} else
{return and__19564__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$5(o,f,a,b,xs);
} else
{var x__20812__auto__ = (((o == null))?null:o);return (function (){var or__19586__auto__ = (cljs.core._swap_BANG_[(function (){var G__42820 = x__20812__auto__;return goog.typeOf(G__42820);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
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
cljs.core.IIterable = (function (){var obj42822 = {};return obj42822;
})();
cljs.core._iterator = (function _iterator(coll){if((function (){var and__19564__auto__ = coll;if(and__19564__auto__)
{return coll.cljs$core$IIterable$_iterator$arity$1;
} else
{return and__19564__auto__;
}
})())
{return coll.cljs$core$IIterable$_iterator$arity$1(coll);
} else
{var x__20812__auto__ = (((coll == null))?null:coll);return (function (){var or__19586__auto__ = (cljs.core._iterator[(function (){var G__42826 = x__20812__auto__;return goog.typeOf(G__42826);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._iterator["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IIterable.-iterator",coll);
}
}
})().call(null,coll);
}
});

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
cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/StringBufferWriter");
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
if((typeof Math.imul !== 'undefined') && (!(((function (){var G__42829 = (4294967295);var G__42830 = (5);return (Math.imul.cljs$core$IFn$_invoke$arity$2 ? Math.imul.cljs$core$IFn$_invoke$arity$2(G__42829,G__42830) : Math.imul.call(null,G__42829,G__42830));
})() === (0)))))
{cljs.core.imul = (function imul(a,b){var G__42833 = a;var G__42834 = b;return (Math.imul.cljs$core$IFn$_invoke$arity$2 ? Math.imul.cljs$core$IFn$_invoke$arity$2(G__42833,G__42834) : Math.imul.call(null,G__42833,G__42834));
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
var G__42835 = (i + (2));
var G__42836 = cljs.core.m3_mix_H1(h1,cljs.core.m3_mix_K1((in$.charCodeAt((i - (1))) | (in$.charCodeAt(i) << (16)))));
i = G__42835;
h1 = G__42836;
continue;
}
} else
{return h1;
}
break;
}
})();var h1__$1 = ((((in$.length & (1)) === (1)))?(h1 ^ cljs.core.m3_mix_K1(in$.charCodeAt((in$.length - (1))))):h1);return cljs.core.m3_fmix(h1__$1,cljs.core.imul((2),in$.length));
});
cljs.core.string_hash_cache = (function (){var obj42838 = {};return obj42838;
})();
cljs.core.string_hash_cache_count = (0);
cljs.core.hash_string_STAR_ = (function hash_string_STAR_(s){if(!((s == null)))
{var len = s.length;if((len > (0)))
{var i = (0);var hash = (0);while(true){
if((i < len))
{{
var G__42839 = (i + (1));
var G__42840 = (cljs.core.imul((31),hash) + s.charCodeAt(i));
i = G__42839;
hash = G__42840;
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
{cljs.core.string_hash_cache = (function (){var obj42844 = {};return obj42844;
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
cljs.core.hash = (function hash(o){if((function (){var G__42847 = o;if(G__42847)
{var bit__20838__auto__ = (G__42847.cljs$lang$protocol_mask$partition0$ & (4194304));if((bit__20838__auto__) || (G__42847.cljs$core$IHash$))
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
{return ((function (){var G__42848 = o;return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__42848) : Math.floor.call(null,G__42848));
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
cljs.core.compare_symbols = (function compare_symbols(a,b){if(cljs.core.truth_((function (){var G__42857 = a;var G__42858 = b;return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__42857,G__42858) : cljs.core._EQ_.call(null,G__42857,G__42858));
})()))
{return (0);
} else
{if(cljs.core.truth_((function (){var and__19564__auto__ = cljs.core.not(a.ns);if(and__19564__auto__)
{return b.ns;
} else
{return and__19564__auto__;
}
})()))
{return (-1);
} else
{if(cljs.core.truth_(a.ns))
{if(cljs.core.not(b.ns))
{return (1);
} else
{var nsc = (function (){var G__42859 = a.ns;var G__42860 = b.ns;return (cljs.core.compare.cljs$core$IFn$_invoke$arity$2 ? cljs.core.compare.cljs$core$IFn$_invoke$arity$2(G__42859,G__42860) : cljs.core.compare.call(null,G__42859,G__42860));
})();if((nsc === (0)))
{var G__42861 = a.name;var G__42862 = b.name;return (cljs.core.compare.cljs$core$IFn$_invoke$arity$2 ? cljs.core.compare.cljs$core$IFn$_invoke$arity$2(G__42861,G__42862) : cljs.core.compare.call(null,G__42861,G__42862));
} else
{return nsc;
}
}
} else
{var G__42863 = a.name;var G__42864 = b.name;return (cljs.core.compare.cljs$core$IFn$_invoke$arity$2 ? cljs.core.compare.cljs$core$IFn$_invoke$arity$2(G__42863,G__42864) : cljs.core.compare.call(null,G__42863,G__42864));

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
cljs.core.Symbol.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/Symbol");
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
var sym__$1 = this;var h__20393__auto__ = self__._hash;if(!((h__20393__auto__ == null)))
{return h__20393__auto__;
} else
{var h__20393__auto____$1 = cljs.core.hash_symbol(sym__$1);self__._hash = h__20393__auto____$1;
return h__20393__auto____$1;
}
});
cljs.core.Symbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new cljs.core.Symbol(self__.ns,self__.name,self__.str,self__._hash,new_meta));
});
cljs.core.Symbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__._meta;
});
cljs.core.Symbol.prototype.call = (function() {
var G__42866 = null;
var G__42866__2 = (function (self__,coll){var self__ = this;
var self____$1 = this;var sym = self____$1;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,null);
});
var G__42866__3 = (function (self__,coll,not_found){var self__ = this;
var self____$1 = this;var sym = self____$1;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,not_found);
});
G__42866 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__42866__2.call(this,self__,coll);
case 3:
return G__42866__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42866.cljs$core$IFn$_invoke$arity$2 = G__42866__2;
G__42866.cljs$core$IFn$_invoke$arity$3 = G__42866__3;
return G__42866;
})()
;
cljs.core.Symbol.prototype.apply = (function (self__,args42865){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args42865)));
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
cljs.core.iterable_QMARK_ = (function iterable_QMARK_(x){var G__42870 = x;if(G__42870)
{var bit__20847__auto__ = null;if(cljs.core.truth_((function (){var or__19586__auto__ = bit__20847__auto__;if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{return G__42870.cljs$core$IIterable$;
}
})()))
{return true;
} else
{if((!G__42870.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IIterable,G__42870);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IIterable,G__42870);
}
});
cljs.core.clone = (function clone(value){return cljs.core._clone(value);
});
cljs.core.cloneable_QMARK_ = (function cloneable_QMARK_(value){var G__42872 = value;if(G__42872)
{var bit__20847__auto__ = (G__42872.cljs$lang$protocol_mask$partition1$ & (8192));if((bit__20847__auto__) || (G__42872.cljs$core$ICloneable$))
{return true;
} else
{if((!G__42872.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__42872);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__42872);
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
{if((function (){var G__42874 = coll;if(G__42874)
{var bit__20838__auto__ = (G__42874.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__20838__auto__) || (G__42874.cljs$core$ISeqable$))
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
{if((function (){var G__42876 = coll;if(G__42876)
{var bit__20838__auto__ = (G__42876.cljs$lang$protocol_mask$partition0$ & (64));if((bit__20838__auto__) || (G__42876.cljs$core$ISeq$))
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
{if((function (){var G__42878 = coll;if(G__42878)
{var bit__20838__auto__ = (G__42878.cljs$lang$protocol_mask$partition0$ & (64));if((bit__20838__auto__) || (G__42878.cljs$core$ISeq$))
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
{if((function (){var G__42880 = coll;if(G__42880)
{var bit__20838__auto__ = (G__42880.cljs$lang$protocol_mask$partition0$ & (128));if((bit__20838__auto__) || (G__42880.cljs$core$INext$))
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
var G__42885__delegate = function (x,y,more){while(true){
if(_EQ_.cljs$core$IFn$_invoke$arity$2(x,y))
{if(cljs.core.next(more))
{{
var G__42886 = y;
var G__42887 = cljs.core.first(more);
var G__42888 = cljs.core.next(more);
x = G__42886;
y = G__42887;
more = G__42888;
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
var G__42885 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__42885__delegate.call(this,x,y,more);};
G__42885.cljs$lang$maxFixedArity = 2;
G__42885.cljs$lang$applyTo = (function (arglist__42889){
var x = cljs.core.first(arglist__42889);
arglist__42889 = cljs.core.next(arglist__42889);
var y = cljs.core.first(arglist__42889);
var more = cljs.core.rest(arglist__42889);
return G__42885__delegate(x,y,more);
});
G__42885.cljs$core$IFn$_invoke$arity$variadic = G__42885__delegate;
return G__42885;
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
var G__42890 = (n + (1));
var G__42891 = ((cljs.core.imul((31),hash_code) + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__42892 = cljs.core.next(coll__$1);
n = G__42890;
hash_code = G__42891;
coll__$1 = G__42892;
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
var G__42893 = (n + (1));
var G__42894 = ((hash_code + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__42895 = cljs.core.next(coll__$1);
n = G__42893;
hash_code = G__42894;
coll__$1 = G__42895;
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
(cljs.core._hash["_"] = (function (o){var G__42896 = o;return goog.getUid(G__42896);
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
cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/Reduced");
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
{var nval = (function (){var G__42903 = val;var G__42904 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__42903,G__42904) : f.call(null,G__42903,G__42904));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__42909 = nval;
var G__42910 = (n + (1));
val = G__42909;
n = G__42910;
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
{var nval = (function (){var G__42905 = val__$1;var G__42906 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__42905,G__42906) : f.call(null,G__42905,G__42906));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__42911 = nval;
var G__42912 = (n + (1));
val__$1 = G__42911;
n = G__42912;
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
{var nval = (function (){var G__42907 = val__$1;var G__42908 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__42907,G__42908) : f.call(null,G__42907,G__42908));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__42913 = nval;
var G__42914 = (n + (1));
val__$1 = G__42913;
n = G__42914;
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
{var nval = (function (){var G__42921 = val;var G__42922 = (arr[n]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__42921,G__42922) : f.call(null,G__42921,G__42922));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__42927 = nval;
var G__42928 = (n + (1));
val = G__42927;
n = G__42928;
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
{var nval = (function (){var G__42923 = val__$1;var G__42924 = (arr[n]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__42923,G__42924) : f.call(null,G__42923,G__42924));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__42929 = nval;
var G__42930 = (n + (1));
val__$1 = G__42929;
n = G__42930;
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
{var nval = (function (){var G__42925 = val__$1;var G__42926 = (arr[n]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__42925,G__42926) : f.call(null,G__42925,G__42926));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__42931 = nval;
var G__42932 = (n + (1));
val__$1 = G__42931;
n = G__42932;
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
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){var G__42934 = x;if(G__42934)
{var bit__20847__auto__ = (G__42934.cljs$lang$protocol_mask$partition0$ & (2));if((bit__20847__auto__) || (G__42934.cljs$core$ICounted$))
{return true;
} else
{if((!G__42934.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__42934);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__42934);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){var G__42936 = x;if(G__42936)
{var bit__20847__auto__ = (G__42936.cljs$lang$protocol_mask$partition0$ & (16));if((bit__20847__auto__) || (G__42936.cljs$core$IIndexed$))
{return true;
} else
{if((!G__42936.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__42936);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__42936);
}
});

/**
* @constructor
*/
cljs.core.IndexedSeqIterator = (function (arr,i){
this.arr = arr;
this.i = i;
})
cljs.core.IndexedSeqIterator.cljs$lang$type = true;
cljs.core.IndexedSeqIterator.cljs$lang$ctorStr = "cljs.core/IndexedSeqIterator";
cljs.core.IndexedSeqIterator.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/IndexedSeqIterator");
});
cljs.core.IndexedSeqIterator.prototype.hasNext = (function (){var self__ = this;
var _ = this;return (self__.i < self__.arr.length);
});
cljs.core.IndexedSeqIterator.prototype.next = (function (){var self__ = this;
var _ = this;var ret = (self__.arr[self__.i]);self__.i = (self__.i + (1));
return ret;
});
cljs.core.__GT_IndexedSeqIterator = (function __GT_IndexedSeqIterator(arr,i){return (new cljs.core.IndexedSeqIterator(arr,i));
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
cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/IndexedSeq");
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
cljs.core.IndexedSeq.prototype.cljs$core$IIterable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.IndexedSeqIterator(self__.arr,self__.i));
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
var coll__$1 = this;var G__42937 = coll__$1;var G__42938 = other;return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(G__42937,G__42938) : cljs.core.equiv_sequential.call(null,G__42937,G__42938));
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
var coll__$1 = this;var G__42939 = o;var G__42940 = coll__$1;return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(G__42939,G__42940) : cljs.core.cons.call(null,G__42939,G__42940));
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
cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/RSeq");
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
var coll__$1 = this;var G__42943 = coll__$1;var G__42944 = other;return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(G__42943,G__42944) : cljs.core.equiv_sequential.call(null,G__42943,G__42944));
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var G__42945 = cljs.core.List.EMPTY;var G__42946 = self__.meta;return (cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2(G__42945,G__42946) : cljs.core.with_meta.call(null,G__42945,G__42946));
});
cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (col,f){var self__ = this;
var col__$1 = this;var G__42947 = f;var G__42948 = col__$1;return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(G__42947,G__42948) : cljs.core.seq_reduce.call(null,G__42947,G__42948));
});
cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (col,f,start){var self__ = this;
var col__$1 = this;var G__42949 = f;var G__42950 = start;var G__42951 = col__$1;return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(G__42949,G__42950,G__42951) : cljs.core.seq_reduce.call(null,G__42949,G__42950,G__42951));
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
var coll__$1 = this;var G__42952 = o;var G__42953 = coll__$1;return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(G__42952,G__42953) : cljs.core.cons.call(null,G__42952,G__42953));
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
var G__42954 = sn;
s = G__42954;
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
var G__42959__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__42960 = conj.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__42961 = cljs.core.first(xs);
var G__42962 = cljs.core.next(xs);
coll = G__42960;
x = G__42961;
xs = G__42962;
continue;
}
} else
{return conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__42959 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__42959__delegate.call(this,coll,x,xs);};
G__42959.cljs$lang$maxFixedArity = 2;
G__42959.cljs$lang$applyTo = (function (arglist__42963){
var coll = cljs.core.first(arglist__42963);
arglist__42963 = cljs.core.next(arglist__42963);
var x = cljs.core.first(arglist__42963);
var xs = cljs.core.rest(arglist__42963);
return G__42959__delegate(coll,x,xs);
});
G__42959.cljs$core$IFn$_invoke$arity$variadic = G__42959__delegate;
return G__42959;
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
var G__42964 = cljs.core.next(s);
var G__42965 = (acc + (1));
s = G__42964;
acc = G__42965;
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
{if((function (){var G__42967 = coll;if(G__42967)
{var bit__20838__auto__ = (G__42967.cljs$lang$protocol_mask$partition0$ & (2));if((bit__20838__auto__) || (G__42967.cljs$core$ICounted$))
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
var G__42968 = cljs.core.next(coll);
var G__42969 = (n - (1));
coll = G__42968;
n = G__42969;
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
var G__42970 = cljs.core.next(coll);
var G__42971 = (n - (1));
var G__42972 = not_found;
coll = G__42970;
n = G__42971;
not_found = G__42972;
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
{if((function (){var G__42977 = coll;if(G__42977)
{var bit__20838__auto__ = (G__42977.cljs$lang$protocol_mask$partition0$ & (16));if((bit__20838__auto__) || (G__42977.cljs$core$IIndexed$))
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
{if((function (){var G__42978 = coll;if(G__42978)
{var bit__20847__auto__ = (G__42978.cljs$lang$protocol_mask$partition0$ & (64));if((bit__20847__auto__) || (G__42978.cljs$core$ISeq$))
{return true;
} else
{if((!G__42978.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__42978);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__42978);
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
{if((function (){var G__42979 = coll;if(G__42979)
{var bit__20838__auto__ = (G__42979.cljs$lang$protocol_mask$partition0$ & (16));if((bit__20838__auto__) || (G__42979.cljs$core$IIndexed$))
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
{if((function (){var G__42980 = coll;if(G__42980)
{var bit__20847__auto__ = (G__42980.cljs$lang$protocol_mask$partition0$ & (64));if((bit__20847__auto__) || (G__42980.cljs$core$ISeq$))
{return true;
} else
{if((!G__42980.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__42980);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__42980);
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
{if((function (){var G__42983 = o;if(G__42983)
{var bit__20838__auto__ = (G__42983.cljs$lang$protocol_mask$partition0$ & (256));if((bit__20838__auto__) || (G__42983.cljs$core$ILookup$))
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
{if((function (){var G__42984 = o;if(G__42984)
{var bit__20838__auto__ = (G__42984.cljs$lang$protocol_mask$partition0$ & (256));if((bit__20838__auto__) || (G__42984.cljs$core$ILookup$))
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
var G__42988__delegate = function (coll,k,v,kvs){while(true){
var ret = assoc.cljs$core$IFn$_invoke$arity$3(coll,k,v);if(cljs.core.truth_(kvs))
{{
var G__42989 = ret;
var G__42990 = cljs.core.first(kvs);
var G__42991 = cljs.core.second(kvs);
var G__42992 = cljs.core.nnext(kvs);
coll = G__42989;
k = G__42990;
v = G__42991;
kvs = G__42992;
continue;
}
} else
{return ret;
}
break;
}
};
var G__42988 = function (coll,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__42988__delegate.call(this,coll,k,v,kvs);};
G__42988.cljs$lang$maxFixedArity = 3;
G__42988.cljs$lang$applyTo = (function (arglist__42993){
var coll = cljs.core.first(arglist__42993);
arglist__42993 = cljs.core.next(arglist__42993);
var k = cljs.core.first(arglist__42993);
arglist__42993 = cljs.core.next(arglist__42993);
var v = cljs.core.first(arglist__42993);
var kvs = cljs.core.rest(arglist__42993);
return G__42988__delegate(coll,k,v,kvs);
});
G__42988.cljs$core$IFn$_invoke$arity$variadic = G__42988__delegate;
return G__42988;
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
var G__42996__delegate = function (coll,k,ks){while(true){
if((coll == null))
{return null;
} else
{var ret = dissoc.cljs$core$IFn$_invoke$arity$2(coll,k);if(cljs.core.truth_(ks))
{{
var G__42997 = ret;
var G__42998 = cljs.core.first(ks);
var G__42999 = cljs.core.next(ks);
coll = G__42997;
k = G__42998;
ks = G__42999;
continue;
}
} else
{return ret;
}
}
break;
}
};
var G__42996 = function (coll,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__42996__delegate.call(this,coll,k,ks);};
G__42996.cljs$lang$maxFixedArity = 2;
G__42996.cljs$lang$applyTo = (function (arglist__43000){
var coll = cljs.core.first(arglist__43000);
arglist__43000 = cljs.core.next(arglist__43000);
var k = cljs.core.first(arglist__43000);
var ks = cljs.core.rest(arglist__43000);
return G__42996__delegate(coll,k,ks);
});
G__42996.cljs$core$IFn$_invoke$arity$variadic = G__42996__delegate;
return G__42996;
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
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){var or__19586__auto__ = (function (){var G__43005 = f;return goog.isFunction(G__43005);
})();if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{var G__43006 = f;if(G__43006)
{var bit__20847__auto__ = null;if(cljs.core.truth_((function (){var or__19586__auto____$1 = bit__20847__auto__;if(cljs.core.truth_(or__19586__auto____$1))
{return or__19586__auto____$1;
} else
{return G__43006.cljs$core$Fn$;
}
})()))
{return true;
} else
{if((!G__43006.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__43006);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__43006);
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
cljs.core.MetaFn.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/MetaFn");
});
cljs.core.MetaFn.prototype.call = (function() {
var G__43472 = null;
var G__43472__1 = (function (self__){var self__ = this;
var self____$1 = this;var _ = self____$1;return (self__.afn.cljs$core$IFn$_invoke$arity$0 ? self__.afn.cljs$core$IFn$_invoke$arity$0() : self__.afn.call(null));
});
var G__43472__2 = (function (self__,a){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__43008 = a;return (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(G__43008) : self__.afn.call(null,G__43008));
});
var G__43472__3 = (function (self__,a,b){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__43009 = a;var G__43010 = b;return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(G__43009,G__43010) : self__.afn.call(null,G__43009,G__43010));
});
var G__43472__4 = (function (self__,a,b,c){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__43011 = a;var G__43012 = b;var G__43013 = c;return (self__.afn.cljs$core$IFn$_invoke$arity$3 ? self__.afn.cljs$core$IFn$_invoke$arity$3(G__43011,G__43012,G__43013) : self__.afn.call(null,G__43011,G__43012,G__43013));
});
var G__43472__5 = (function (self__,a,b,c,d){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__43014 = a;var G__43015 = b;var G__43016 = c;var G__43017 = d;return (self__.afn.cljs$core$IFn$_invoke$arity$4 ? self__.afn.cljs$core$IFn$_invoke$arity$4(G__43014,G__43015,G__43016,G__43017) : self__.afn.call(null,G__43014,G__43015,G__43016,G__43017));
});
var G__43472__6 = (function (self__,a,b,c,d,e){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__43018 = a;var G__43019 = b;var G__43020 = c;var G__43021 = d;var G__43022 = e;return (self__.afn.cljs$core$IFn$_invoke$arity$5 ? self__.afn.cljs$core$IFn$_invoke$arity$5(G__43018,G__43019,G__43020,G__43021,G__43022) : self__.afn.call(null,G__43018,G__43019,G__43020,G__43021,G__43022));
});
var G__43472__7 = (function (self__,a,b,c,d,e,f){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__43023 = a;var G__43024 = b;var G__43025 = c;var G__43026 = d;var G__43027 = e;var G__43028 = f;return (self__.afn.cljs$core$IFn$_invoke$arity$6 ? self__.afn.cljs$core$IFn$_invoke$arity$6(G__43023,G__43024,G__43025,G__43026,G__43027,G__43028) : self__.afn.call(null,G__43023,G__43024,G__43025,G__43026,G__43027,G__43028));
});
var G__43472__8 = (function (self__,a,b,c,d,e,f,g){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__43029 = a;var G__43030 = b;var G__43031 = c;var G__43032 = d;var G__43033 = e;var G__43034 = f;var G__43035 = g;return (self__.afn.cljs$core$IFn$_invoke$arity$7 ? self__.afn.cljs$core$IFn$_invoke$arity$7(G__43029,G__43030,G__43031,G__43032,G__43033,G__43034,G__43035) : self__.afn.call(null,G__43029,G__43030,G__43031,G__43032,G__43033,G__43034,G__43035));
});
var G__43472__9 = (function (self__,a,b,c,d,e,f,g,h){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__43036 = a;var G__43037 = b;var G__43038 = c;var G__43039 = d;var G__43040 = e;var G__43041 = f;var G__43042 = g;var G__43043 = h;return (self__.afn.cljs$core$IFn$_invoke$arity$8 ? self__.afn.cljs$core$IFn$_invoke$arity$8(G__43036,G__43037,G__43038,G__43039,G__43040,G__43041,G__43042,G__43043) : self__.afn.call(null,G__43036,G__43037,G__43038,G__43039,G__43040,G__43041,G__43042,G__43043));
});
var G__43472__10 = (function (self__,a,b,c,d,e,f,g,h,i){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__43044 = a;var G__43045 = b;var G__43046 = c;var G__43047 = d;var G__43048 = e;var G__43049 = f;var G__43050 = g;var G__43051 = h;var G__43052 = i;return (self__.afn.cljs$core$IFn$_invoke$arity$9 ? self__.afn.cljs$core$IFn$_invoke$arity$9(G__43044,G__43045,G__43046,G__43047,G__43048,G__43049,G__43050,G__43051,G__43052) : self__.afn.call(null,G__43044,G__43045,G__43046,G__43047,G__43048,G__43049,G__43050,G__43051,G__43052));
});
var G__43472__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__43053 = a;var G__43054 = b;var G__43055 = c;var G__43056 = d;var G__43057 = e;var G__43058 = f;var G__43059 = g;var G__43060 = h;var G__43061 = i;var G__43062 = j;return (self__.afn.cljs$core$IFn$_invoke$arity$10 ? self__.afn.cljs$core$IFn$_invoke$arity$10(G__43053,G__43054,G__43055,G__43056,G__43057,G__43058,G__43059,G__43060,G__43061,G__43062) : self__.afn.call(null,G__43053,G__43054,G__43055,G__43056,G__43057,G__43058,G__43059,G__43060,G__43061,G__43062));
});
var G__43472__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__43063 = a;var G__43064 = b;var G__43065 = c;var G__43066 = d;var G__43067 = e;var G__43068 = f;var G__43069 = g;var G__43070 = h;var G__43071 = i;var G__43072 = j;var G__43073 = k;return (self__.afn.cljs$core$IFn$_invoke$arity$11 ? self__.afn.cljs$core$IFn$_invoke$arity$11(G__43063,G__43064,G__43065,G__43066,G__43067,G__43068,G__43069,G__43070,G__43071,G__43072,G__43073) : self__.afn.call(null,G__43063,G__43064,G__43065,G__43066,G__43067,G__43068,G__43069,G__43070,G__43071,G__43072,G__43073));
});
var G__43472__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__43074 = a;var G__43075 = b;var G__43076 = c;var G__43077 = d;var G__43078 = e;var G__43079 = f;var G__43080 = g;var G__43081 = h;var G__43082 = i;var G__43083 = j;var G__43084 = k;var G__43085 = l;return (self__.afn.cljs$core$IFn$_invoke$arity$12 ? self__.afn.cljs$core$IFn$_invoke$arity$12(G__43074,G__43075,G__43076,G__43077,G__43078,G__43079,G__43080,G__43081,G__43082,G__43083,G__43084,G__43085) : self__.afn.call(null,G__43074,G__43075,G__43076,G__43077,G__43078,G__43079,G__43080,G__43081,G__43082,G__43083,G__43084,G__43085));
});
var G__43472__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__43086 = a;var G__43087 = b;var G__43088 = c;var G__43089 = d;var G__43090 = e;var G__43091 = f;var G__43092 = g;var G__43093 = h;var G__43094 = i;var G__43095 = j;var G__43096 = k;var G__43097 = l;var G__43098 = m;return (self__.afn.cljs$core$IFn$_invoke$arity$13 ? self__.afn.cljs$core$IFn$_invoke$arity$13(G__43086,G__43087,G__43088,G__43089,G__43090,G__43091,G__43092,G__43093,G__43094,G__43095,G__43096,G__43097,G__43098) : self__.afn.call(null,G__43086,G__43087,G__43088,G__43089,G__43090,G__43091,G__43092,G__43093,G__43094,G__43095,G__43096,G__43097,G__43098));
});
var G__43472__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__43099 = a;var G__43100 = b;var G__43101 = c;var G__43102 = d;var G__43103 = e;var G__43104 = f;var G__43105 = g;var G__43106 = h;var G__43107 = i;var G__43108 = j;var G__43109 = k;var G__43110 = l;var G__43111 = m;var G__43112 = n;return (self__.afn.cljs$core$IFn$_invoke$arity$14 ? self__.afn.cljs$core$IFn$_invoke$arity$14(G__43099,G__43100,G__43101,G__43102,G__43103,G__43104,G__43105,G__43106,G__43107,G__43108,G__43109,G__43110,G__43111,G__43112) : self__.afn.call(null,G__43099,G__43100,G__43101,G__43102,G__43103,G__43104,G__43105,G__43106,G__43107,G__43108,G__43109,G__43110,G__43111,G__43112));
});
var G__43472__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__43113 = a;var G__43114 = b;var G__43115 = c;var G__43116 = d;var G__43117 = e;var G__43118 = f;var G__43119 = g;var G__43120 = h;var G__43121 = i;var G__43122 = j;var G__43123 = k;var G__43124 = l;var G__43125 = m;var G__43126 = n;var G__43127 = o;return (self__.afn.cljs$core$IFn$_invoke$arity$15 ? self__.afn.cljs$core$IFn$_invoke$arity$15(G__43113,G__43114,G__43115,G__43116,G__43117,G__43118,G__43119,G__43120,G__43121,G__43122,G__43123,G__43124,G__43125,G__43126,G__43127) : self__.afn.call(null,G__43113,G__43114,G__43115,G__43116,G__43117,G__43118,G__43119,G__43120,G__43121,G__43122,G__43123,G__43124,G__43125,G__43126,G__43127));
});
var G__43472__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__43128 = a;var G__43129 = b;var G__43130 = c;var G__43131 = d;var G__43132 = e;var G__43133 = f;var G__43134 = g;var G__43135 = h;var G__43136 = i;var G__43137 = j;var G__43138 = k;var G__43139 = l;var G__43140 = m;var G__43141 = n;var G__43142 = o;var G__43143 = p;return (self__.afn.cljs$core$IFn$_invoke$arity$16 ? self__.afn.cljs$core$IFn$_invoke$arity$16(G__43128,G__43129,G__43130,G__43131,G__43132,G__43133,G__43134,G__43135,G__43136,G__43137,G__43138,G__43139,G__43140,G__43141,G__43142,G__43143) : self__.afn.call(null,G__43128,G__43129,G__43130,G__43131,G__43132,G__43133,G__43134,G__43135,G__43136,G__43137,G__43138,G__43139,G__43140,G__43141,G__43142,G__43143));
});
var G__43472__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__43144 = a;var G__43145 = b;var G__43146 = c;var G__43147 = d;var G__43148 = e;var G__43149 = f;var G__43150 = g;var G__43151 = h;var G__43152 = i;var G__43153 = j;var G__43154 = k;var G__43155 = l;var G__43156 = m;var G__43157 = n;var G__43158 = o;var G__43159 = p;var G__43160 = q;return (self__.afn.cljs$core$IFn$_invoke$arity$17 ? self__.afn.cljs$core$IFn$_invoke$arity$17(G__43144,G__43145,G__43146,G__43147,G__43148,G__43149,G__43150,G__43151,G__43152,G__43153,G__43154,G__43155,G__43156,G__43157,G__43158,G__43159,G__43160) : self__.afn.call(null,G__43144,G__43145,G__43146,G__43147,G__43148,G__43149,G__43150,G__43151,G__43152,G__43153,G__43154,G__43155,G__43156,G__43157,G__43158,G__43159,G__43160));
});
var G__43472__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__43161 = a;var G__43162 = b;var G__43163 = c;var G__43164 = d;var G__43165 = e;var G__43166 = f;var G__43167 = g;var G__43168 = h;var G__43169 = i;var G__43170 = j;var G__43171 = k;var G__43172 = l;var G__43173 = m;var G__43174 = n;var G__43175 = o;var G__43176 = p;var G__43177 = q;var G__43178 = r;return (self__.afn.cljs$core$IFn$_invoke$arity$18 ? self__.afn.cljs$core$IFn$_invoke$arity$18(G__43161,G__43162,G__43163,G__43164,G__43165,G__43166,G__43167,G__43168,G__43169,G__43170,G__43171,G__43172,G__43173,G__43174,G__43175,G__43176,G__43177,G__43178) : self__.afn.call(null,G__43161,G__43162,G__43163,G__43164,G__43165,G__43166,G__43167,G__43168,G__43169,G__43170,G__43171,G__43172,G__43173,G__43174,G__43175,G__43176,G__43177,G__43178));
});
var G__43472__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__43179 = a;var G__43180 = b;var G__43181 = c;var G__43182 = d;var G__43183 = e;var G__43184 = f;var G__43185 = g;var G__43186 = h;var G__43187 = i;var G__43188 = j;var G__43189 = k;var G__43190 = l;var G__43191 = m;var G__43192 = n;var G__43193 = o;var G__43194 = p;var G__43195 = q;var G__43196 = r;var G__43197 = s;return (self__.afn.cljs$core$IFn$_invoke$arity$19 ? self__.afn.cljs$core$IFn$_invoke$arity$19(G__43179,G__43180,G__43181,G__43182,G__43183,G__43184,G__43185,G__43186,G__43187,G__43188,G__43189,G__43190,G__43191,G__43192,G__43193,G__43194,G__43195,G__43196,G__43197) : self__.afn.call(null,G__43179,G__43180,G__43181,G__43182,G__43183,G__43184,G__43185,G__43186,G__43187,G__43188,G__43189,G__43190,G__43191,G__43192,G__43193,G__43194,G__43195,G__43196,G__43197));
});
var G__43472__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__43198 = a;var G__43199 = b;var G__43200 = c;var G__43201 = d;var G__43202 = e;var G__43203 = f;var G__43204 = g;var G__43205 = h;var G__43206 = i;var G__43207 = j;var G__43208 = k;var G__43209 = l;var G__43210 = m;var G__43211 = n;var G__43212 = o;var G__43213 = p;var G__43214 = q;var G__43215 = r;var G__43216 = s;var G__43217 = t;return (self__.afn.cljs$core$IFn$_invoke$arity$20 ? self__.afn.cljs$core$IFn$_invoke$arity$20(G__43198,G__43199,G__43200,G__43201,G__43202,G__43203,G__43204,G__43205,G__43206,G__43207,G__43208,G__43209,G__43210,G__43211,G__43212,G__43213,G__43214,G__43215,G__43216,G__43217) : self__.afn.call(null,G__43198,G__43199,G__43200,G__43201,G__43202,G__43203,G__43204,G__43205,G__43206,G__43207,G__43208,G__43209,G__43210,G__43211,G__43212,G__43213,G__43214,G__43215,G__43216,G__43217));
});
var G__43472__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__43218 = self__.afn;var G__43219 = a;var G__43220 = b;var G__43221 = c;var G__43222 = d;var G__43223 = e;var G__43224 = f;var G__43225 = g;var G__43226 = h;var G__43227 = i;var G__43228 = j;var G__43229 = k;var G__43230 = l;var G__43231 = m;var G__43232 = n;var G__43233 = o;var G__43234 = p;var G__43235 = q;var G__43236 = r;var G__43237 = s;var G__43238 = t;var G__43239 = rest;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$22 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$22(G__43218,G__43219,G__43220,G__43221,G__43222,G__43223,G__43224,G__43225,G__43226,G__43227,G__43228,G__43229,G__43230,G__43231,G__43232,G__43233,G__43234,G__43235,G__43236,G__43237,G__43238,G__43239) : cljs.core.apply.call(null,G__43218,G__43219,G__43220,G__43221,G__43222,G__43223,G__43224,G__43225,G__43226,G__43227,G__43228,G__43229,G__43230,G__43231,G__43232,G__43233,G__43234,G__43235,G__43236,G__43237,G__43238,G__43239));
});
G__43472 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__43472__1.call(this,self__);
case 2:
return G__43472__2.call(this,self__,a);
case 3:
return G__43472__3.call(this,self__,a,b);
case 4:
return G__43472__4.call(this,self__,a,b,c);
case 5:
return G__43472__5.call(this,self__,a,b,c,d);
case 6:
return G__43472__6.call(this,self__,a,b,c,d,e);
case 7:
return G__43472__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__43472__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__43472__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__43472__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__43472__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__43472__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__43472__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__43472__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__43472__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__43472__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__43472__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__43472__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__43472__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__43472__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__43472__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__43472__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43472.cljs$core$IFn$_invoke$arity$1 = G__43472__1;
G__43472.cljs$core$IFn$_invoke$arity$2 = G__43472__2;
G__43472.cljs$core$IFn$_invoke$arity$3 = G__43472__3;
G__43472.cljs$core$IFn$_invoke$arity$4 = G__43472__4;
G__43472.cljs$core$IFn$_invoke$arity$5 = G__43472__5;
G__43472.cljs$core$IFn$_invoke$arity$6 = G__43472__6;
G__43472.cljs$core$IFn$_invoke$arity$7 = G__43472__7;
G__43472.cljs$core$IFn$_invoke$arity$8 = G__43472__8;
G__43472.cljs$core$IFn$_invoke$arity$9 = G__43472__9;
G__43472.cljs$core$IFn$_invoke$arity$10 = G__43472__10;
G__43472.cljs$core$IFn$_invoke$arity$11 = G__43472__11;
G__43472.cljs$core$IFn$_invoke$arity$12 = G__43472__12;
G__43472.cljs$core$IFn$_invoke$arity$13 = G__43472__13;
G__43472.cljs$core$IFn$_invoke$arity$14 = G__43472__14;
G__43472.cljs$core$IFn$_invoke$arity$15 = G__43472__15;
G__43472.cljs$core$IFn$_invoke$arity$16 = G__43472__16;
G__43472.cljs$core$IFn$_invoke$arity$17 = G__43472__17;
G__43472.cljs$core$IFn$_invoke$arity$18 = G__43472__18;
G__43472.cljs$core$IFn$_invoke$arity$19 = G__43472__19;
G__43472.cljs$core$IFn$_invoke$arity$20 = G__43472__20;
G__43472.cljs$core$IFn$_invoke$arity$21 = G__43472__21;
G__43472.cljs$core$IFn$_invoke$arity$22 = G__43472__22;
return G__43472;
})()
;
cljs.core.MetaFn.prototype.apply = (function (self__,args43007){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args43007)));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){var self__ = this;
var _ = this;return (self__.afn.cljs$core$IFn$_invoke$arity$0 ? self__.afn.cljs$core$IFn$_invoke$arity$0() : self__.afn.call(null));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){var self__ = this;
var _ = this;var G__43240 = a;return (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(G__43240) : self__.afn.call(null,G__43240));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){var self__ = this;
var _ = this;var G__43241 = a;var G__43242 = b;return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(G__43241,G__43242) : self__.afn.call(null,G__43241,G__43242));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){var self__ = this;
var _ = this;var G__43243 = a;var G__43244 = b;var G__43245 = c;return (self__.afn.cljs$core$IFn$_invoke$arity$3 ? self__.afn.cljs$core$IFn$_invoke$arity$3(G__43243,G__43244,G__43245) : self__.afn.call(null,G__43243,G__43244,G__43245));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){var self__ = this;
var _ = this;var G__43246 = a;var G__43247 = b;var G__43248 = c;var G__43249 = d;return (self__.afn.cljs$core$IFn$_invoke$arity$4 ? self__.afn.cljs$core$IFn$_invoke$arity$4(G__43246,G__43247,G__43248,G__43249) : self__.afn.call(null,G__43246,G__43247,G__43248,G__43249));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){var self__ = this;
var _ = this;var G__43250 = a;var G__43251 = b;var G__43252 = c;var G__43253 = d;var G__43254 = e;return (self__.afn.cljs$core$IFn$_invoke$arity$5 ? self__.afn.cljs$core$IFn$_invoke$arity$5(G__43250,G__43251,G__43252,G__43253,G__43254) : self__.afn.call(null,G__43250,G__43251,G__43252,G__43253,G__43254));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){var self__ = this;
var _ = this;var G__43255 = a;var G__43256 = b;var G__43257 = c;var G__43258 = d;var G__43259 = e;var G__43260 = f;return (self__.afn.cljs$core$IFn$_invoke$arity$6 ? self__.afn.cljs$core$IFn$_invoke$arity$6(G__43255,G__43256,G__43257,G__43258,G__43259,G__43260) : self__.afn.call(null,G__43255,G__43256,G__43257,G__43258,G__43259,G__43260));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){var self__ = this;
var _ = this;var G__43261 = a;var G__43262 = b;var G__43263 = c;var G__43264 = d;var G__43265 = e;var G__43266 = f;var G__43267 = g;return (self__.afn.cljs$core$IFn$_invoke$arity$7 ? self__.afn.cljs$core$IFn$_invoke$arity$7(G__43261,G__43262,G__43263,G__43264,G__43265,G__43266,G__43267) : self__.afn.call(null,G__43261,G__43262,G__43263,G__43264,G__43265,G__43266,G__43267));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){var self__ = this;
var _ = this;var G__43268 = a;var G__43269 = b;var G__43270 = c;var G__43271 = d;var G__43272 = e;var G__43273 = f;var G__43274 = g;var G__43275 = h;return (self__.afn.cljs$core$IFn$_invoke$arity$8 ? self__.afn.cljs$core$IFn$_invoke$arity$8(G__43268,G__43269,G__43270,G__43271,G__43272,G__43273,G__43274,G__43275) : self__.afn.call(null,G__43268,G__43269,G__43270,G__43271,G__43272,G__43273,G__43274,G__43275));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){var self__ = this;
var _ = this;var G__43276 = a;var G__43277 = b;var G__43278 = c;var G__43279 = d;var G__43280 = e;var G__43281 = f;var G__43282 = g;var G__43283 = h;var G__43284 = i;return (self__.afn.cljs$core$IFn$_invoke$arity$9 ? self__.afn.cljs$core$IFn$_invoke$arity$9(G__43276,G__43277,G__43278,G__43279,G__43280,G__43281,G__43282,G__43283,G__43284) : self__.afn.call(null,G__43276,G__43277,G__43278,G__43279,G__43280,G__43281,G__43282,G__43283,G__43284));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){var self__ = this;
var _ = this;var G__43285 = a;var G__43286 = b;var G__43287 = c;var G__43288 = d;var G__43289 = e;var G__43290 = f;var G__43291 = g;var G__43292 = h;var G__43293 = i;var G__43294 = j;return (self__.afn.cljs$core$IFn$_invoke$arity$10 ? self__.afn.cljs$core$IFn$_invoke$arity$10(G__43285,G__43286,G__43287,G__43288,G__43289,G__43290,G__43291,G__43292,G__43293,G__43294) : self__.afn.call(null,G__43285,G__43286,G__43287,G__43288,G__43289,G__43290,G__43291,G__43292,G__43293,G__43294));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var _ = this;var G__43295 = a;var G__43296 = b;var G__43297 = c;var G__43298 = d;var G__43299 = e;var G__43300 = f;var G__43301 = g;var G__43302 = h;var G__43303 = i;var G__43304 = j;var G__43305 = k;return (self__.afn.cljs$core$IFn$_invoke$arity$11 ? self__.afn.cljs$core$IFn$_invoke$arity$11(G__43295,G__43296,G__43297,G__43298,G__43299,G__43300,G__43301,G__43302,G__43303,G__43304,G__43305) : self__.afn.call(null,G__43295,G__43296,G__43297,G__43298,G__43299,G__43300,G__43301,G__43302,G__43303,G__43304,G__43305));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var _ = this;var G__43306 = a;var G__43307 = b;var G__43308 = c;var G__43309 = d;var G__43310 = e;var G__43311 = f;var G__43312 = g;var G__43313 = h;var G__43314 = i;var G__43315 = j;var G__43316 = k;var G__43317 = l;return (self__.afn.cljs$core$IFn$_invoke$arity$12 ? self__.afn.cljs$core$IFn$_invoke$arity$12(G__43306,G__43307,G__43308,G__43309,G__43310,G__43311,G__43312,G__43313,G__43314,G__43315,G__43316,G__43317) : self__.afn.call(null,G__43306,G__43307,G__43308,G__43309,G__43310,G__43311,G__43312,G__43313,G__43314,G__43315,G__43316,G__43317));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var _ = this;var G__43318 = a;var G__43319 = b;var G__43320 = c;var G__43321 = d;var G__43322 = e;var G__43323 = f;var G__43324 = g;var G__43325 = h;var G__43326 = i;var G__43327 = j;var G__43328 = k;var G__43329 = l;var G__43330 = m;return (self__.afn.cljs$core$IFn$_invoke$arity$13 ? self__.afn.cljs$core$IFn$_invoke$arity$13(G__43318,G__43319,G__43320,G__43321,G__43322,G__43323,G__43324,G__43325,G__43326,G__43327,G__43328,G__43329,G__43330) : self__.afn.call(null,G__43318,G__43319,G__43320,G__43321,G__43322,G__43323,G__43324,G__43325,G__43326,G__43327,G__43328,G__43329,G__43330));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var _ = this;var G__43331 = a;var G__43332 = b;var G__43333 = c;var G__43334 = d;var G__43335 = e;var G__43336 = f;var G__43337 = g;var G__43338 = h;var G__43339 = i;var G__43340 = j;var G__43341 = k;var G__43342 = l;var G__43343 = m;var G__43344 = n;return (self__.afn.cljs$core$IFn$_invoke$arity$14 ? self__.afn.cljs$core$IFn$_invoke$arity$14(G__43331,G__43332,G__43333,G__43334,G__43335,G__43336,G__43337,G__43338,G__43339,G__43340,G__43341,G__43342,G__43343,G__43344) : self__.afn.call(null,G__43331,G__43332,G__43333,G__43334,G__43335,G__43336,G__43337,G__43338,G__43339,G__43340,G__43341,G__43342,G__43343,G__43344));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var _ = this;var G__43345 = a;var G__43346 = b;var G__43347 = c;var G__43348 = d;var G__43349 = e;var G__43350 = f;var G__43351 = g;var G__43352 = h;var G__43353 = i;var G__43354 = j;var G__43355 = k;var G__43356 = l;var G__43357 = m;var G__43358 = n;var G__43359 = o;return (self__.afn.cljs$core$IFn$_invoke$arity$15 ? self__.afn.cljs$core$IFn$_invoke$arity$15(G__43345,G__43346,G__43347,G__43348,G__43349,G__43350,G__43351,G__43352,G__43353,G__43354,G__43355,G__43356,G__43357,G__43358,G__43359) : self__.afn.call(null,G__43345,G__43346,G__43347,G__43348,G__43349,G__43350,G__43351,G__43352,G__43353,G__43354,G__43355,G__43356,G__43357,G__43358,G__43359));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var _ = this;var G__43360 = a;var G__43361 = b;var G__43362 = c;var G__43363 = d;var G__43364 = e;var G__43365 = f;var G__43366 = g;var G__43367 = h;var G__43368 = i;var G__43369 = j;var G__43370 = k;var G__43371 = l;var G__43372 = m;var G__43373 = n;var G__43374 = o;var G__43375 = p;return (self__.afn.cljs$core$IFn$_invoke$arity$16 ? self__.afn.cljs$core$IFn$_invoke$arity$16(G__43360,G__43361,G__43362,G__43363,G__43364,G__43365,G__43366,G__43367,G__43368,G__43369,G__43370,G__43371,G__43372,G__43373,G__43374,G__43375) : self__.afn.call(null,G__43360,G__43361,G__43362,G__43363,G__43364,G__43365,G__43366,G__43367,G__43368,G__43369,G__43370,G__43371,G__43372,G__43373,G__43374,G__43375));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var _ = this;var G__43376 = a;var G__43377 = b;var G__43378 = c;var G__43379 = d;var G__43380 = e;var G__43381 = f;var G__43382 = g;var G__43383 = h;var G__43384 = i;var G__43385 = j;var G__43386 = k;var G__43387 = l;var G__43388 = m;var G__43389 = n;var G__43390 = o;var G__43391 = p;var G__43392 = q;return (self__.afn.cljs$core$IFn$_invoke$arity$17 ? self__.afn.cljs$core$IFn$_invoke$arity$17(G__43376,G__43377,G__43378,G__43379,G__43380,G__43381,G__43382,G__43383,G__43384,G__43385,G__43386,G__43387,G__43388,G__43389,G__43390,G__43391,G__43392) : self__.afn.call(null,G__43376,G__43377,G__43378,G__43379,G__43380,G__43381,G__43382,G__43383,G__43384,G__43385,G__43386,G__43387,G__43388,G__43389,G__43390,G__43391,G__43392));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var _ = this;var G__43393 = a;var G__43394 = b;var G__43395 = c;var G__43396 = d;var G__43397 = e;var G__43398 = f;var G__43399 = g;var G__43400 = h;var G__43401 = i;var G__43402 = j;var G__43403 = k;var G__43404 = l;var G__43405 = m;var G__43406 = n;var G__43407 = o;var G__43408 = p;var G__43409 = q;var G__43410 = r;return (self__.afn.cljs$core$IFn$_invoke$arity$18 ? self__.afn.cljs$core$IFn$_invoke$arity$18(G__43393,G__43394,G__43395,G__43396,G__43397,G__43398,G__43399,G__43400,G__43401,G__43402,G__43403,G__43404,G__43405,G__43406,G__43407,G__43408,G__43409,G__43410) : self__.afn.call(null,G__43393,G__43394,G__43395,G__43396,G__43397,G__43398,G__43399,G__43400,G__43401,G__43402,G__43403,G__43404,G__43405,G__43406,G__43407,G__43408,G__43409,G__43410));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var _ = this;var G__43411 = a;var G__43412 = b;var G__43413 = c;var G__43414 = d;var G__43415 = e;var G__43416 = f;var G__43417 = g;var G__43418 = h;var G__43419 = i;var G__43420 = j;var G__43421 = k;var G__43422 = l;var G__43423 = m;var G__43424 = n;var G__43425 = o;var G__43426 = p;var G__43427 = q;var G__43428 = r;var G__43429 = s;return (self__.afn.cljs$core$IFn$_invoke$arity$19 ? self__.afn.cljs$core$IFn$_invoke$arity$19(G__43411,G__43412,G__43413,G__43414,G__43415,G__43416,G__43417,G__43418,G__43419,G__43420,G__43421,G__43422,G__43423,G__43424,G__43425,G__43426,G__43427,G__43428,G__43429) : self__.afn.call(null,G__43411,G__43412,G__43413,G__43414,G__43415,G__43416,G__43417,G__43418,G__43419,G__43420,G__43421,G__43422,G__43423,G__43424,G__43425,G__43426,G__43427,G__43428,G__43429));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var _ = this;var G__43430 = a;var G__43431 = b;var G__43432 = c;var G__43433 = d;var G__43434 = e;var G__43435 = f;var G__43436 = g;var G__43437 = h;var G__43438 = i;var G__43439 = j;var G__43440 = k;var G__43441 = l;var G__43442 = m;var G__43443 = n;var G__43444 = o;var G__43445 = p;var G__43446 = q;var G__43447 = r;var G__43448 = s;var G__43449 = t;return (self__.afn.cljs$core$IFn$_invoke$arity$20 ? self__.afn.cljs$core$IFn$_invoke$arity$20(G__43430,G__43431,G__43432,G__43433,G__43434,G__43435,G__43436,G__43437,G__43438,G__43439,G__43440,G__43441,G__43442,G__43443,G__43444,G__43445,G__43446,G__43447,G__43448,G__43449) : self__.afn.call(null,G__43430,G__43431,G__43432,G__43433,G__43434,G__43435,G__43436,G__43437,G__43438,G__43439,G__43440,G__43441,G__43442,G__43443,G__43444,G__43445,G__43446,G__43447,G__43448,G__43449));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var _ = this;var G__43450 = self__.afn;var G__43451 = a;var G__43452 = b;var G__43453 = c;var G__43454 = d;var G__43455 = e;var G__43456 = f;var G__43457 = g;var G__43458 = h;var G__43459 = i;var G__43460 = j;var G__43461 = k;var G__43462 = l;var G__43463 = m;var G__43464 = n;var G__43465 = o;var G__43466 = p;var G__43467 = q;var G__43468 = r;var G__43469 = s;var G__43470 = t;var G__43471 = rest;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$22 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$22(G__43450,G__43451,G__43452,G__43453,G__43454,G__43455,G__43456,G__43457,G__43458,G__43459,G__43460,G__43461,G__43462,G__43463,G__43464,G__43465,G__43466,G__43467,G__43468,G__43469,G__43470,G__43471) : cljs.core.apply.call(null,G__43450,G__43451,G__43452,G__43453,G__43454,G__43455,G__43456,G__43457,G__43458,G__43459,G__43460,G__43461,G__43462,G__43463,G__43464,G__43465,G__43466,G__43467,G__43468,G__43469,G__43470,G__43471));
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
cljs.core.with_meta = (function with_meta(o,meta){if((cljs.core.fn_QMARK_(o)) && (!((function (){var G__43476 = o;if(G__43476)
{var bit__20847__auto__ = (G__43476.cljs$lang$protocol_mask$partition0$ & (262144));if((bit__20847__auto__) || (G__43476.cljs$core$IWithMeta$))
{return true;
} else
{if((!G__43476.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__43476);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__43476);
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
cljs.core.meta = (function meta(o){if((function (){var and__19564__auto__ = !((o == null));if(and__19564__auto__)
{var G__43480 = o;if(G__43480)
{var bit__20847__auto__ = (G__43480.cljs$lang$protocol_mask$partition0$ & (131072));if((bit__20847__auto__) || (G__43480.cljs$core$IMeta$))
{return true;
} else
{if((!G__43480.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__43480);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__43480);
}
} else
{return and__19564__auto__;
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
var G__43483__delegate = function (coll,k,ks){while(true){
if((coll == null))
{return null;
} else
{var ret = disj.cljs$core$IFn$_invoke$arity$2(coll,k);if(cljs.core.truth_(ks))
{{
var G__43484 = ret;
var G__43485 = cljs.core.first(ks);
var G__43486 = cljs.core.next(ks);
coll = G__43484;
k = G__43485;
ks = G__43486;
continue;
}
} else
{return ret;
}
}
break;
}
};
var G__43483 = function (coll,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__43483__delegate.call(this,coll,k,ks);};
G__43483.cljs$lang$maxFixedArity = 2;
G__43483.cljs$lang$applyTo = (function (arglist__43487){
var coll = cljs.core.first(arglist__43487);
arglist__43487 = cljs.core.next(arglist__43487);
var k = cljs.core.first(arglist__43487);
var ks = cljs.core.rest(arglist__43487);
return G__43483__delegate(coll,k,ks);
});
G__43483.cljs$core$IFn$_invoke$arity$variadic = G__43483__delegate;
return G__43483;
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
{var G__43489 = x;if(G__43489)
{var bit__20847__auto__ = (G__43489.cljs$lang$protocol_mask$partition0$ & (8));if((bit__20847__auto__) || (G__43489.cljs$core$ICollection$))
{return true;
} else
{if((!G__43489.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__43489);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__43489);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){if((x == null))
{return false;
} else
{var G__43491 = x;if(G__43491)
{var bit__20847__auto__ = (G__43491.cljs$lang$protocol_mask$partition0$ & (4096));if((bit__20847__auto__) || (G__43491.cljs$core$ISet$))
{return true;
} else
{if((!G__43491.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__43491);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__43491);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){var G__43493 = x;if(G__43493)
{var bit__20847__auto__ = (G__43493.cljs$lang$protocol_mask$partition0$ & (512));if((bit__20847__auto__) || (G__43493.cljs$core$IAssociative$))
{return true;
} else
{if((!G__43493.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__43493);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__43493);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){var G__43495 = x;if(G__43495)
{var bit__20847__auto__ = (G__43495.cljs$lang$protocol_mask$partition0$ & (16777216));if((bit__20847__auto__) || (G__43495.cljs$core$ISequential$))
{return true;
} else
{if((!G__43495.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__43495);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__43495);
}
});
/**
* Returns true if coll satisfies ISorted
*/
cljs.core.sorted_QMARK_ = (function sorted_QMARK_(x){var G__43497 = x;if(G__43497)
{var bit__20847__auto__ = (G__43497.cljs$lang$protocol_mask$partition0$ & (268435456));if((bit__20847__auto__) || (G__43497.cljs$core$ISorted$))
{return true;
} else
{if((!G__43497.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__43497);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__43497);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){var G__43499 = x;if(G__43499)
{var bit__20847__auto__ = (G__43499.cljs$lang$protocol_mask$partition0$ & (524288));if((bit__20847__auto__) || (G__43499.cljs$core$IReduce$))
{return true;
} else
{if((!G__43499.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__43499);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__43499);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){if((x == null))
{return false;
} else
{var G__43501 = x;if(G__43501)
{var bit__20847__auto__ = (G__43501.cljs$lang$protocol_mask$partition0$ & (1024));if((bit__20847__auto__) || (G__43501.cljs$core$IMap$))
{return true;
} else
{if((!G__43501.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__43501);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__43501);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){var G__43503 = x;if(G__43503)
{var bit__20847__auto__ = (G__43503.cljs$lang$protocol_mask$partition0$ & (16384));if((bit__20847__auto__) || (G__43503.cljs$core$IVector$))
{return true;
} else
{if((!G__43503.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__43503);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__43503);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){var G__43505 = x;if(G__43505)
{var bit__20838__auto__ = (G__43505.cljs$lang$protocol_mask$partition1$ & (512));if((bit__20838__auto__) || (G__43505.cljs$core$IChunkedSeq$))
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
var js_obj__0 = (function (){var obj43511 = {};return obj43511;
});
var js_obj__1 = (function() { 
var G__43514__delegate = function (keyvals){var G__43512 = goog.object.create;var G__43513 = keyvals;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__43512,G__43513) : cljs.core.apply.call(null,G__43512,G__43513));
};
var G__43514 = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__43514__delegate.call(this,keyvals);};
G__43514.cljs$lang$maxFixedArity = 0;
G__43514.cljs$lang$applyTo = (function (arglist__43515){
var keyvals = cljs.core.seq(arglist__43515);
return G__43514__delegate(keyvals);
});
G__43514.cljs$core$IFn$_invoke$arity$variadic = G__43514__delegate;
return G__43514;
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
cljs.core.js_keys = (function js_keys(obj){var keys = [];var G__43518_43520 = obj;var G__43519_43521 = ((function (G__43518_43520,keys){
return (function (val,key,obj__$1){return keys.push(key);
});})(G__43518_43520,keys))
;goog.object.forEach(G__43518_43520,G__43519_43521);
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
var G__43522 = (i__$1 + (1));
var G__43523 = (j__$1 + (1));
var G__43524 = (len__$1 - (1));
i__$1 = G__43522;
j__$1 = G__43523;
len__$1 = G__43524;
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
var G__43525 = (i__$1 - (1));
var G__43526 = (j__$1 - (1));
var G__43527 = (len__$1 - (1));
i__$1 = G__43525;
j__$1 = G__43526;
len__$1 = G__43527;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = (function (){var obj43529 = {};return obj43529;
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
{var G__43531 = s;if(G__43531)
{var bit__20847__auto__ = (G__43531.cljs$lang$protocol_mask$partition0$ & (64));if((bit__20847__auto__) || (G__43531.cljs$core$ISeq$))
{return true;
} else
{if((!G__43531.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__43531);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__43531);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){var G__43533 = s;if(G__43533)
{var bit__20847__auto__ = (G__43533.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__20847__auto__) || (G__43533.cljs$core$ISeqable$))
{return true;
} else
{if((!G__43533.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__43533);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__43533);
}
});
cljs.core.boolean$ = (function boolean$(x){if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){var or__19586__auto__ = cljs.core.fn_QMARK_(f);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var G__43537 = f;if(G__43537)
{var bit__20847__auto__ = (G__43537.cljs$lang$protocol_mask$partition0$ & (1));if((bit__20847__auto__) || (G__43537.cljs$core$IFn$))
{return true;
} else
{if((!G__43537.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__43537);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__43537);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){return (typeof n === 'number') && (cljs.core.not((function (){var G__43550 = n;return isNaN(G__43550);
})())) && (!((n === Infinity))) && (((function (){var G__43551 = n;return parseFloat(G__43551);
})() === (function (){var G__43552 = n;var G__43553 = (10);return parseInt(G__43552,G__43553);
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
var G__43554__delegate = function (x,y,more){if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)))
{var s = cljs.core.PersistentHashSet.fromArray([x,y], true);var xs = more;while(true){
var x__$1 = cljs.core.first(xs);var etc = cljs.core.next(xs);if(cljs.core.truth_(xs))
{if(cljs.core.contains_QMARK_(s,x__$1))
{return false;
} else
{{
var G__43555 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,x__$1);
var G__43556 = etc;
s = G__43555;
xs = G__43556;
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
var G__43554 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__43554__delegate.call(this,x,y,more);};
G__43554.cljs$lang$maxFixedArity = 2;
G__43554.cljs$lang$applyTo = (function (arglist__43557){
var x = cljs.core.first(arglist__43557);
arglist__43557 = cljs.core.next(arglist__43557);
var y = cljs.core.first(arglist__43557);
var more = cljs.core.rest(arglist__43557);
return G__43554__delegate(x,y,more);
});
G__43554.cljs$core$IFn$_invoke$arity$variadic = G__43554__delegate;
return G__43554;
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
{var or__19586__auto__ = cljs.core.seq(coll);if(or__19586__auto__)
{return or__19586__auto__;
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
{if((function (){var G__43561 = x;if(G__43561)
{var bit__20838__auto__ = (G__43561.cljs$lang$protocol_mask$partition1$ & (2048));if((bit__20838__auto__) || (G__43561.cljs$core$IComparable$))
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
{var G__43562 = x;var G__43563 = y;return goog.array.defaultCompare(G__43562,G__43563);
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
var G__43568 = xs;
var G__43569 = ys;
var G__43570 = len;
var G__43571 = (n + (1));
xs = G__43568;
ys = G__43569;
len = G__43570;
n = G__43571;
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
{return (function (x,y){var r = (function (){var G__43576 = x;var G__43577 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__43576,G__43577) : f.call(null,G__43576,G__43577));
})();if(typeof r === 'number')
{return r;
} else
{if(cljs.core.truth_(r))
{return (-1);
} else
{if(cljs.core.truth_((function (){var G__43578 = y;var G__43579 = x;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__43578,G__43579) : f.call(null,G__43578,G__43579));
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
{var a = (function (){var G__43585 = coll;return (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(G__43585) : cljs.core.to_array.call(null,G__43585));
})();var G__43586_43588 = a;var G__43587_43589 = cljs.core.fn__GT_comparator(comp);goog.array.stableSort(G__43586_43588,G__43587_43589);
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
var sort_by__3 = (function (keyfn,comp,coll){return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (x,y){return cljs.core.fn__GT_comparator(comp).call(null,(function (){var G__43595 = x;return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__43595) : keyfn.call(null,G__43595));
})(),(function (){var G__43596 = y;return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__43596) : keyfn.call(null,G__43596));
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
{var s = temp__4124__auto__;var G__43602 = f;var G__43603 = cljs.core.first(s);var G__43604 = cljs.core.next(s);return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(G__43602,G__43603,G__43604) : cljs.core.reduce.call(null,G__43602,G__43603,G__43604));
} else
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
var seq_reduce__3 = (function (f,val,coll){var val__$1 = val;var coll__$1 = cljs.core.seq(coll);while(true){
if(coll__$1)
{var nval = (function (){var G__43605 = val__$1;var G__43606 = cljs.core.first(coll__$1);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__43605,G__43606) : f.call(null,G__43605,G__43606));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__43607 = nval;
var G__43608 = cljs.core.next(coll__$1);
val__$1 = G__43607;
coll__$1 = G__43608;
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
cljs.core.shuffle = (function shuffle(coll){var a = (function (){var G__43612 = coll;return (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(G__43612) : cljs.core.to_array.call(null,G__43612));
})();var G__43613_43615 = a;goog.array.shuffle(G__43613_43615);
var G__43614 = a;return (cljs.core.vec.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vec.cljs$core$IFn$_invoke$arity$1(G__43614) : cljs.core.vec.call(null,G__43614));
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
var reduce__2 = (function (f,coll){if((function (){var G__43618 = coll;if(G__43618)
{var bit__20838__auto__ = (G__43618.cljs$lang$protocol_mask$partition0$ & (524288));if((bit__20838__auto__) || (G__43618.cljs$core$IReduce$))
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
var reduce__3 = (function (f,val,coll){if((function (){var G__43619 = coll;if(G__43619)
{var bit__20838__auto__ = (G__43619.cljs$lang$protocol_mask$partition0$ & (524288));if((bit__20838__auto__) || (G__43619.cljs$core$IReduce$))
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
var G__43628 = null;
var G__43628__0 = (function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__43628__1 = (function (x){var G__43625 = x;return (cf.cljs$core$IFn$_invoke$arity$1 ? cf.cljs$core$IFn$_invoke$arity$1(G__43625) : cf.call(null,G__43625));
});
var G__43628__2 = (function (x,y){var G__43626 = x;var G__43627 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__43626,G__43627) : f.call(null,G__43626,G__43627));
});
G__43628 = function(x,y){
switch(arguments.length){
case 0:
return G__43628__0.call(this);
case 1:
return G__43628__1.call(this,x);
case 2:
return G__43628__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43628.cljs$core$IFn$_invoke$arity$0 = G__43628__0;
G__43628.cljs$core$IFn$_invoke$arity$1 = G__43628__1;
G__43628.cljs$core$IFn$_invoke$arity$2 = G__43628__2;
return G__43628;
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
var transduce__4 = (function (xform,f,init,coll){var f__$1 = (function (){var G__43635 = f;return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__43635) : xform.call(null,G__43635));
})();var ret = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f__$1,init,coll);var G__43636 = ret;return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__43636) : f__$1.call(null,G__43636));
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
var G__43637__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_PLUS_,(x + y),more);
};
var G__43637 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__43637__delegate.call(this,x,y,more);};
G__43637.cljs$lang$maxFixedArity = 2;
G__43637.cljs$lang$applyTo = (function (arglist__43638){
var x = cljs.core.first(arglist__43638);
arglist__43638 = cljs.core.next(arglist__43638);
var y = cljs.core.first(arglist__43638);
var more = cljs.core.rest(arglist__43638);
return G__43637__delegate(x,y,more);
});
G__43637.cljs$core$IFn$_invoke$arity$variadic = G__43637__delegate;
return G__43637;
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
var G__43639__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_,(x - y),more);
};
var G__43639 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__43639__delegate.call(this,x,y,more);};
G__43639.cljs$lang$maxFixedArity = 2;
G__43639.cljs$lang$applyTo = (function (arglist__43640){
var x = cljs.core.first(arglist__43640);
arglist__43640 = cljs.core.next(arglist__43640);
var y = cljs.core.first(arglist__43640);
var more = cljs.core.rest(arglist__43640);
return G__43639__delegate(x,y,more);
});
G__43639.cljs$core$IFn$_invoke$arity$variadic = G__43639__delegate;
return G__43639;
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
var G__43641__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_STAR_,(x * y),more);
};
var G__43641 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__43641__delegate.call(this,x,y,more);};
G__43641.cljs$lang$maxFixedArity = 2;
G__43641.cljs$lang$applyTo = (function (arglist__43642){
var x = cljs.core.first(arglist__43642);
arglist__43642 = cljs.core.next(arglist__43642);
var y = cljs.core.first(arglist__43642);
var more = cljs.core.rest(arglist__43642);
return G__43641__delegate(x,y,more);
});
G__43641.cljs$core$IFn$_invoke$arity$variadic = G__43641__delegate;
return G__43641;
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
var G__43647__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_SLASH_,_SLASH_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__43647 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__43647__delegate.call(this,x,y,more);};
G__43647.cljs$lang$maxFixedArity = 2;
G__43647.cljs$lang$applyTo = (function (arglist__43648){
var x = cljs.core.first(arglist__43648);
arglist__43648 = cljs.core.next(arglist__43648);
var y = cljs.core.first(arglist__43648);
var more = cljs.core.rest(arglist__43648);
return G__43647__delegate(x,y,more);
});
G__43647.cljs$core$IFn$_invoke$arity$variadic = G__43647__delegate;
return G__43647;
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
var G__43649__delegate = function (x,y,more){while(true){
if((x < y))
{if(cljs.core.next(more))
{{
var G__43650 = y;
var G__43651 = cljs.core.first(more);
var G__43652 = cljs.core.next(more);
x = G__43650;
y = G__43651;
more = G__43652;
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
var G__43649 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__43649__delegate.call(this,x,y,more);};
G__43649.cljs$lang$maxFixedArity = 2;
G__43649.cljs$lang$applyTo = (function (arglist__43653){
var x = cljs.core.first(arglist__43653);
arglist__43653 = cljs.core.next(arglist__43653);
var y = cljs.core.first(arglist__43653);
var more = cljs.core.rest(arglist__43653);
return G__43649__delegate(x,y,more);
});
G__43649.cljs$core$IFn$_invoke$arity$variadic = G__43649__delegate;
return G__43649;
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
var G__43654__delegate = function (x,y,more){while(true){
if((x <= y))
{if(cljs.core.next(more))
{{
var G__43655 = y;
var G__43656 = cljs.core.first(more);
var G__43657 = cljs.core.next(more);
x = G__43655;
y = G__43656;
more = G__43657;
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
var G__43654 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__43654__delegate.call(this,x,y,more);};
G__43654.cljs$lang$maxFixedArity = 2;
G__43654.cljs$lang$applyTo = (function (arglist__43658){
var x = cljs.core.first(arglist__43658);
arglist__43658 = cljs.core.next(arglist__43658);
var y = cljs.core.first(arglist__43658);
var more = cljs.core.rest(arglist__43658);
return G__43654__delegate(x,y,more);
});
G__43654.cljs$core$IFn$_invoke$arity$variadic = G__43654__delegate;
return G__43654;
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
var G__43659__delegate = function (x,y,more){while(true){
if((x > y))
{if(cljs.core.next(more))
{{
var G__43660 = y;
var G__43661 = cljs.core.first(more);
var G__43662 = cljs.core.next(more);
x = G__43660;
y = G__43661;
more = G__43662;
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
var G__43659 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__43659__delegate.call(this,x,y,more);};
G__43659.cljs$lang$maxFixedArity = 2;
G__43659.cljs$lang$applyTo = (function (arglist__43663){
var x = cljs.core.first(arglist__43663);
arglist__43663 = cljs.core.next(arglist__43663);
var y = cljs.core.first(arglist__43663);
var more = cljs.core.rest(arglist__43663);
return G__43659__delegate(x,y,more);
});
G__43659.cljs$core$IFn$_invoke$arity$variadic = G__43659__delegate;
return G__43659;
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
var G__43664__delegate = function (x,y,more){while(true){
if((x >= y))
{if(cljs.core.next(more))
{{
var G__43665 = y;
var G__43666 = cljs.core.first(more);
var G__43667 = cljs.core.next(more);
x = G__43665;
y = G__43666;
more = G__43667;
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
var G__43664 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__43664__delegate.call(this,x,y,more);};
G__43664.cljs$lang$maxFixedArity = 2;
G__43664.cljs$lang$applyTo = (function (arglist__43668){
var x = cljs.core.first(arglist__43668);
arglist__43668 = cljs.core.next(arglist__43668);
var y = cljs.core.first(arglist__43668);
var more = cljs.core.rest(arglist__43668);
return G__43664__delegate(x,y,more);
});
G__43664.cljs$core$IFn$_invoke$arity$variadic = G__43664__delegate;
return G__43664;
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
var max__2 = (function (x,y){var x__20178__auto__ = x;var y__20179__auto__ = y;return ((x__20178__auto__ > y__20179__auto__) ? x__20178__auto__ : y__20179__auto__);
});
var max__3 = (function() { 
var G__43669__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(max,(function (){var x__20178__auto__ = x;var y__20179__auto__ = y;return ((x__20178__auto__ > y__20179__auto__) ? x__20178__auto__ : y__20179__auto__);
})(),more);
};
var G__43669 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__43669__delegate.call(this,x,y,more);};
G__43669.cljs$lang$maxFixedArity = 2;
G__43669.cljs$lang$applyTo = (function (arglist__43670){
var x = cljs.core.first(arglist__43670);
arglist__43670 = cljs.core.next(arglist__43670);
var y = cljs.core.first(arglist__43670);
var more = cljs.core.rest(arglist__43670);
return G__43669__delegate(x,y,more);
});
G__43669.cljs$core$IFn$_invoke$arity$variadic = G__43669__delegate;
return G__43669;
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
var min__2 = (function (x,y){var x__20191__auto__ = x;var y__20192__auto__ = y;return ((x__20191__auto__ < y__20192__auto__) ? x__20191__auto__ : y__20192__auto__);
});
var min__3 = (function() { 
var G__43671__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(min,(function (){var x__20191__auto__ = x;var y__20192__auto__ = y;return ((x__20191__auto__ < y__20192__auto__) ? x__20191__auto__ : y__20192__auto__);
})(),more);
};
var G__43671 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__43671__delegate.call(this,x,y,more);};
G__43671.cljs$lang$maxFixedArity = 2;
G__43671.cljs$lang$applyTo = (function (arglist__43672){
var x = cljs.core.first(arglist__43672);
arglist__43672 = cljs.core.next(arglist__43672);
var y = cljs.core.first(arglist__43672);
var more = cljs.core.rest(arglist__43672);
return G__43671__delegate(x,y,more);
});
G__43671.cljs$core$IFn$_invoke$arity$variadic = G__43671__delegate;
return G__43671;
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
var G__43673__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_add,(x + y),more);
};
var G__43673 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__43673__delegate.call(this,x,y,more);};
G__43673.cljs$lang$maxFixedArity = 2;
G__43673.cljs$lang$applyTo = (function (arglist__43674){
var x = cljs.core.first(arglist__43674);
arglist__43674 = cljs.core.next(arglist__43674);
var y = cljs.core.first(arglist__43674);
var more = cljs.core.rest(arglist__43674);
return G__43673__delegate(x,y,more);
});
G__43673.cljs$core$IFn$_invoke$arity$variadic = G__43673__delegate;
return G__43673;
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
var G__43675__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_add_int,(x + y),more);
};
var G__43675 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__43675__delegate.call(this,x,y,more);};
G__43675.cljs$lang$maxFixedArity = 2;
G__43675.cljs$lang$applyTo = (function (arglist__43676){
var x = cljs.core.first(arglist__43676);
arglist__43676 = cljs.core.next(arglist__43676);
var y = cljs.core.first(arglist__43676);
var more = cljs.core.rest(arglist__43676);
return G__43675__delegate(x,y,more);
});
G__43675.cljs$core$IFn$_invoke$arity$variadic = G__43675__delegate;
return G__43675;
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
var G__43681__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_divide_int,unchecked_divide_int.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__43681 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__43681__delegate.call(this,x,y,more);};
G__43681.cljs$lang$maxFixedArity = 2;
G__43681.cljs$lang$applyTo = (function (arglist__43682){
var x = cljs.core.first(arglist__43682);
arglist__43682 = cljs.core.next(arglist__43682);
var y = cljs.core.first(arglist__43682);
var more = cljs.core.rest(arglist__43682);
return G__43681__delegate(x,y,more);
});
G__43681.cljs$core$IFn$_invoke$arity$variadic = G__43681__delegate;
return G__43681;
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
var G__43683__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_multiply,(x * y),more);
};
var G__43683 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__43683__delegate.call(this,x,y,more);};
G__43683.cljs$lang$maxFixedArity = 2;
G__43683.cljs$lang$applyTo = (function (arglist__43684){
var x = cljs.core.first(arglist__43684);
arglist__43684 = cljs.core.next(arglist__43684);
var y = cljs.core.first(arglist__43684);
var more = cljs.core.rest(arglist__43684);
return G__43683__delegate(x,y,more);
});
G__43683.cljs$core$IFn$_invoke$arity$variadic = G__43683__delegate;
return G__43683;
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
var G__43685__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_multiply_int,(x * y),more);
};
var G__43685 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__43685__delegate.call(this,x,y,more);};
G__43685.cljs$lang$maxFixedArity = 2;
G__43685.cljs$lang$applyTo = (function (arglist__43686){
var x = cljs.core.first(arglist__43686);
arglist__43686 = cljs.core.next(arglist__43686);
var y = cljs.core.first(arglist__43686);
var more = cljs.core.rest(arglist__43686);
return G__43685__delegate(x,y,more);
});
G__43685.cljs$core$IFn$_invoke$arity$variadic = G__43685__delegate;
return G__43685;
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
cljs.core.unchecked_remainder_int = (function unchecked_remainder_int(x,n){var G__43689 = x;var G__43690 = n;return (cljs.core.mod.cljs$core$IFn$_invoke$arity$2 ? cljs.core.mod.cljs$core$IFn$_invoke$arity$2(G__43689,G__43690) : cljs.core.mod.call(null,G__43689,G__43690));
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
var G__43691__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_subtract,(x - y),more);
};
var G__43691 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__43691__delegate.call(this,x,y,more);};
G__43691.cljs$lang$maxFixedArity = 2;
G__43691.cljs$lang$applyTo = (function (arglist__43692){
var x = cljs.core.first(arglist__43692);
arglist__43692 = cljs.core.next(arglist__43692);
var y = cljs.core.first(arglist__43692);
var more = cljs.core.rest(arglist__43692);
return G__43691__delegate(x,y,more);
});
G__43691.cljs$core$IFn$_invoke$arity$variadic = G__43691__delegate;
return G__43691;
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
var G__43693__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_subtract_int,(x - y),more);
};
var G__43693 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__43693__delegate.call(this,x,y,more);};
G__43693.cljs$lang$maxFixedArity = 2;
G__43693.cljs$lang$applyTo = (function (arglist__43694){
var x = cljs.core.first(arglist__43694);
arglist__43694 = cljs.core.next(arglist__43694);
var y = cljs.core.first(arglist__43694);
var more = cljs.core.rest(arglist__43694);
return G__43693__delegate(x,y,more);
});
G__43693.cljs$core$IFn$_invoke$arity$variadic = G__43693__delegate;
return G__43693;
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
{var G__43697 = q;return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__43697) : Math.floor.call(null,G__43697));
} else
{var G__43698 = q;return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__43698) : Math.ceil.call(null,G__43698));
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
var G__43703__delegate = function (x,y,more){while(true){
if(_EQ__EQ_.cljs$core$IFn$_invoke$arity$2(x,y))
{if(cljs.core.next(more))
{{
var G__43704 = y;
var G__43705 = cljs.core.first(more);
var G__43706 = cljs.core.next(more);
x = G__43704;
y = G__43705;
more = G__43706;
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
var G__43703 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__43703__delegate.call(this,x,y,more);};
G__43703.cljs$lang$maxFixedArity = 2;
G__43703.cljs$lang$applyTo = (function (arglist__43707){
var x = cljs.core.first(arglist__43707);
arglist__43707 = cljs.core.next(arglist__43707);
var y = cljs.core.first(arglist__43707);
var more = cljs.core.rest(arglist__43707);
return G__43703__delegate(x,y,more);
});
G__43703.cljs$core$IFn$_invoke$arity$variadic = G__43703__delegate;
return G__43703;
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
var G__43708 = (n__$1 - (1));
var G__43709 = cljs.core.next(xs);
n__$1 = G__43708;
xs = G__43709;
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
var G__43712__delegate = function (x,ys){var sb = (new goog.string.StringBuffer(str.cljs$core$IFn$_invoke$arity$1(x)));var more = ys;while(true){
if(cljs.core.truth_(more))
{{
var G__43713 = sb.append(str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(more)));
var G__43714 = cljs.core.next(more);
sb = G__43713;
more = G__43714;
continue;
}
} else
{return sb.toString();
}
break;
}
};
var G__43712 = function (x,var_args){
var ys = null;if (arguments.length > 1) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__43712__delegate.call(this,x,ys);};
G__43712.cljs$lang$maxFixedArity = 1;
G__43712.cljs$lang$applyTo = (function (arglist__43715){
var x = cljs.core.first(arglist__43715);
var ys = cljs.core.rest(arglist__43715);
return G__43712__delegate(x,ys);
});
G__43712.cljs$core$IFn$_invoke$arity$variadic = G__43712__delegate;
return G__43712;
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
var G__43716 = cljs.core.next(xs);
var G__43717 = cljs.core.next(ys);
xs = G__43716;
ys = G__43717;
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
var G__43718 = cljs.core.hash_combine(res,cljs.core.hash(cljs.core.first(s)));
var G__43719 = cljs.core.next(s);
res = G__43718;
s = G__43719;
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
var G__43724 = ((h + (cljs.core.hash((function (){var G__43722 = e;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__43722) : cljs.core.key.call(null,G__43722));
})()) ^ cljs.core.hash((function (){var G__43723 = e;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__43723) : cljs.core.val.call(null,G__43723));
})()))) % (4503599627370496));
var G__43725 = cljs.core.next(s);
h = G__43724;
s = G__43725;
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
var G__43726 = ((h + cljs.core.hash(e)) % (4503599627370496));
var G__43727 = cljs.core.next(s__$1);
h = G__43726;
s__$1 = G__43727;
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
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){var seq__43738_43748 = cljs.core.seq(fn_map);var chunk__43739_43749 = null;var count__43740_43750 = (0);var i__43741_43751 = (0);while(true){
if((i__43741_43751 < count__43740_43750))
{var vec__43742_43752 = chunk__43739_43749.cljs$core$IIndexed$_nth$arity$2(null,i__43741_43751);var key_name_43753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43742_43752,(0),null);var f_43754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43742_43752,(1),null);var str_name_43755 = (function (){var G__43743 = key_name_43753;return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__43743) : cljs.core.name.call(null,G__43743));
})();(obj[str_name_43755] = f_43754);
{
var G__43756 = seq__43738_43748;
var G__43757 = chunk__43739_43749;
var G__43758 = count__43740_43750;
var G__43759 = (i__43741_43751 + (1));
seq__43738_43748 = G__43756;
chunk__43739_43749 = G__43757;
count__43740_43750 = G__43758;
i__43741_43751 = G__43759;
continue;
}
} else
{var temp__4126__auto___43760 = cljs.core.seq(seq__43738_43748);if(temp__4126__auto___43760)
{var seq__43738_43761__$1 = temp__4126__auto___43760;if(cljs.core.chunked_seq_QMARK_(seq__43738_43761__$1))
{var c__21046__auto___43762 = (function (){var G__43744 = seq__43738_43761__$1;return (cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1(G__43744) : cljs.core.chunk_first.call(null,G__43744));
})();{
var G__43763 = (function (){var G__43745 = seq__43738_43761__$1;return (cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1(G__43745) : cljs.core.chunk_rest.call(null,G__43745));
})();
var G__43764 = c__21046__auto___43762;
var G__43765 = cljs.core.count(c__21046__auto___43762);
var G__43766 = (0);
seq__43738_43748 = G__43763;
chunk__43739_43749 = G__43764;
count__43740_43750 = G__43765;
i__43741_43751 = G__43766;
continue;
}
} else
{var vec__43746_43767 = cljs.core.first(seq__43738_43761__$1);var key_name_43768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43746_43767,(0),null);var f_43769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43746_43767,(1),null);var str_name_43770 = (function (){var G__43747 = key_name_43768;return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__43747) : cljs.core.name.call(null,G__43747));
})();(obj[str_name_43770] = f_43769);
{
var G__43771 = cljs.core.next(seq__43738_43761__$1);
var G__43772 = null;
var G__43773 = (0);
var G__43774 = (0);
seq__43738_43748 = G__43771;
chunk__43739_43749 = G__43772;
count__43740_43750 = G__43773;
i__43741_43751 = G__43774;
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
cljs.core.List.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/List");
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
var coll__$1 = this;var h__20393__auto__ = self__.__hash;if(!((h__20393__auto__ == null)))
{return h__20393__auto__;
} else
{var h__20393__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20393__auto____$1;
return h__20393__auto____$1;
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
cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/EmptyList");
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
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){var G__43776 = coll;if(G__43776)
{var bit__20847__auto__ = (G__43776.cljs$lang$protocol_mask$partition0$ & (134217728));if((bit__20847__auto__) || (G__43776.cljs$core$IReversible$))
{return true;
} else
{if((!G__43776.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__43776);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__43776);
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
var G__43777 = xs__$1.cljs$core$INext$_next$arity$1(null);
xs__$1 = G__43777;
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
var G__43778 = (i - (1));
var G__43779 = r.cljs$core$ICollection$_conj$arity$2(null,(arr[(i - (1))]));
i = G__43778;
r = G__43779;
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
list.cljs$lang$applyTo = (function (arglist__43780){
var xs = cljs.core.seq(arglist__43780);
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
cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/Cons");
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
var coll__$1 = this;var h__20393__auto__ = self__.__hash;if(!((h__20393__auto__ == null)))
{return h__20393__auto__;
} else
{var h__20393__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20393__auto____$1;
return h__20393__auto____$1;
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
cljs.core.cons = (function cons(x,coll){if((function (){var or__19586__auto__ = (coll == null);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var G__43784 = coll;if(G__43784)
{var bit__20838__auto__ = (G__43784.cljs$lang$protocol_mask$partition0$ & (64));if((bit__20838__auto__) || (G__43784.cljs$core$ISeq$))
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
cljs.core.list_QMARK_ = (function list_QMARK_(x){var G__43786 = x;if(G__43786)
{var bit__20847__auto__ = (G__43786.cljs$lang$protocol_mask$partition0$ & (33554432));if((bit__20847__auto__) || (G__43786.cljs$core$IList$))
{return true;
} else
{if((!G__43786.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__43786);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__43786);
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
cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/Keyword");
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
var this$__$1 = this;var h__20393__auto__ = self__._hash;if(!((h__20393__auto__ == null)))
{return h__20393__auto__;
} else
{var h__20393__auto____$1 = cljs.core.hash_keyword(this$__$1);self__._hash = h__20393__auto____$1;
return h__20393__auto____$1;
}
});
cljs.core.Keyword.prototype.call = (function() {
var G__43788 = null;
var G__43788__2 = (function (self__,coll){var self__ = this;
var self____$1 = this;var kw = self____$1;return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,kw);
});
var G__43788__3 = (function (self__,coll,not_found){var self__ = this;
var self____$1 = this;var kw = self____$1;return cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,kw,not_found);
});
G__43788 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__43788__2.call(this,self__,coll);
case 3:
return G__43788__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43788.cljs$core$IFn$_invoke$arity$2 = G__43788__2;
G__43788.cljs$core$IFn$_invoke$arity$3 = G__43788__3;
return G__43788;
})()
;
cljs.core.Keyword.prototype.apply = (function (self__,args43787){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args43787)));
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
cljs.core.namespace = (function namespace(x){if((function (){var G__43790 = x;if(G__43790)
{var bit__20838__auto__ = (G__43790.cljs$lang$protocol_mask$partition1$ & (4096));if((bit__20838__auto__) || (G__43790.cljs$core$INamed$))
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
{return (new cljs.core.Keyword(cljs.core.namespace(name),(function (){var G__43792 = name;return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__43792) : cljs.core.name.call(null,G__43792));
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
cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/LazySeq");
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
var coll__$1 = this;var h__20393__auto__ = self__.__hash;if(!((h__20393__auto__ == null)))
{return h__20393__auto__;
} else
{var h__20393__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20393__auto____$1;
return h__20393__auto____$1;
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
var G__43793 = ls.sval();
ls = G__43793;
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
cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/ChunkBuffer");
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
cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/ArrayChunk");
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
cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/ChunkedCons");
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
var coll__$1 = this;var h__20393__auto__ = self__.__hash;if(!((h__20393__auto__ == null)))
{return h__20393__auto__;
} else
{var h__20393__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20393__auto____$1;
return h__20393__auto____$1;
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
cljs.core.chunk_next = (function chunk_next(s){if((function (){var G__43795 = s;if(G__43795)
{var bit__20838__auto__ = (G__43795.cljs$lang$protocol_mask$partition1$ & (1024));if((bit__20838__auto__) || (G__43795.cljs$core$IChunkedNext$))
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
var G__43796 = cljs.core.next(s__$1);
s__$1 = G__43796;
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
cljs.core.to_array_2d = (function to_array_2d(coll){var ret = (new Array(cljs.core.count(coll)));var i_43797 = (0);var xs_43798 = cljs.core.seq(coll);while(true){
if(xs_43798)
{(ret[i_43797] = cljs.core.to_array(cljs.core.first(xs_43798)));
{
var G__43799 = (i_43797 + (1));
var G__43800 = cljs.core.next(xs_43798);
i_43797 = G__43799;
xs_43798 = G__43800;
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
var G__43803 = (i + (1));
var G__43804 = cljs.core.next(s__$1);
i = G__43803;
s__$1 = G__43804;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__21231__auto___43805 = size;var i_43806 = (0);while(true){
if((i_43806 < n__21231__auto___43805))
{(a[i_43806] = init_val_or_seq);
{
var G__43807 = (i_43806 + (1));
i_43806 = G__43807;
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
var G__43810 = (i + (1));
var G__43811 = cljs.core.next(s__$1);
i = G__43810;
s__$1 = G__43811;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__21231__auto___43812 = size;var i_43813 = (0);while(true){
if((i_43813 < n__21231__auto___43812))
{(a[i_43813] = init_val_or_seq);
{
var G__43814 = (i_43813 + (1));
i_43813 = G__43814;
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
var G__43817 = (i + (1));
var G__43818 = cljs.core.next(s__$1);
i = G__43817;
s__$1 = G__43818;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__21231__auto___43819 = size;var i_43820 = (0);while(true){
if((i_43820 < n__21231__auto___43819))
{(a[i_43820] = init_val_or_seq);
{
var G__43821 = (i_43820 + (1));
i_43820 = G__43821;
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
var G__43824 = (i + (1));
var G__43825 = cljs.core.next(s__$1);
i = G__43824;
s__$1 = G__43825;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__21231__auto___43826 = size;var i_43827 = (0);while(true){
if((i_43827 < n__21231__auto___43826))
{(a[i_43827] = init_val_or_seq);
{
var G__43828 = (i_43827 + (1));
i_43827 = G__43828;
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
var G__43829 = cljs.core.next(s__$1);
var G__43830 = (i - (1));
var G__43831 = (sum + (1));
s__$1 = G__43829;
i = G__43830;
sum = G__43831;
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
var G__43851__delegate = function (x,y,zs){var cat = (function cat(xys,zs__$1){return (new cljs.core.LazySeq(null,(function (){var xys__$1 = cljs.core.seq(xys);if(xys__$1)
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
var G__43851 = function (x,y,var_args){
var zs = null;if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__43851__delegate.call(this,x,y,zs);};
G__43851.cljs$lang$maxFixedArity = 2;
G__43851.cljs$lang$applyTo = (function (arglist__43852){
var x = cljs.core.first(arglist__43852);
arglist__43852 = cljs.core.next(arglist__43852);
var y = cljs.core.first(arglist__43852);
var zs = cljs.core.rest(arglist__43852);
return G__43851__delegate(x,y,zs);
});
G__43851.cljs$core$IFn$_invoke$arity$variadic = G__43851__delegate;
return G__43851;
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
var G__43853__delegate = function (a,b,c,d,more){return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(more)))));
};
var G__43853 = function (a,b,c,d,var_args){
var more = null;if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__43853__delegate.call(this,a,b,c,d,more);};
G__43853.cljs$lang$maxFixedArity = 4;
G__43853.cljs$lang$applyTo = (function (arglist__43854){
var a = cljs.core.first(arglist__43854);
arglist__43854 = cljs.core.next(arglist__43854);
var b = cljs.core.first(arglist__43854);
arglist__43854 = cljs.core.next(arglist__43854);
var c = cljs.core.first(arglist__43854);
arglist__43854 = cljs.core.next(arglist__43854);
var d = cljs.core.first(arglist__43854);
var more = cljs.core.rest(arglist__43854);
return G__43853__delegate(a,b,c,d,more);
});
G__43853.cljs$core$IFn$_invoke$arity$variadic = G__43853__delegate;
return G__43853;
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
var G__43855__delegate = function (tcoll,val,vals){while(true){
var ntcoll = cljs.core._conj_BANG_(tcoll,val);if(cljs.core.truth_(vals))
{{
var G__43856 = ntcoll;
var G__43857 = cljs.core.first(vals);
var G__43858 = cljs.core.next(vals);
tcoll = G__43856;
val = G__43857;
vals = G__43858;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__43855 = function (tcoll,val,var_args){
var vals = null;if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__43855__delegate.call(this,tcoll,val,vals);};
G__43855.cljs$lang$maxFixedArity = 2;
G__43855.cljs$lang$applyTo = (function (arglist__43859){
var tcoll = cljs.core.first(arglist__43859);
arglist__43859 = cljs.core.next(arglist__43859);
var val = cljs.core.first(arglist__43859);
var vals = cljs.core.rest(arglist__43859);
return G__43855__delegate(tcoll,val,vals);
});
G__43855.cljs$core$IFn$_invoke$arity$variadic = G__43855__delegate;
return G__43855;
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
var G__43860__delegate = function (tcoll,key,val,kvs){while(true){
var ntcoll = cljs.core._assoc_BANG_(tcoll,key,val);if(cljs.core.truth_(kvs))
{{
var G__43861 = ntcoll;
var G__43862 = cljs.core.first(kvs);
var G__43863 = cljs.core.second(kvs);
var G__43864 = cljs.core.nnext(kvs);
tcoll = G__43861;
key = G__43862;
val = G__43863;
kvs = G__43864;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__43860 = function (tcoll,key,val,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__43860__delegate.call(this,tcoll,key,val,kvs);};
G__43860.cljs$lang$maxFixedArity = 3;
G__43860.cljs$lang$applyTo = (function (arglist__43865){
var tcoll = cljs.core.first(arglist__43865);
arglist__43865 = cljs.core.next(arglist__43865);
var key = cljs.core.first(arglist__43865);
arglist__43865 = cljs.core.next(arglist__43865);
var val = cljs.core.first(arglist__43865);
var kvs = cljs.core.rest(arglist__43865);
return G__43860__delegate(tcoll,key,val,kvs);
});
G__43860.cljs$core$IFn$_invoke$arity$variadic = G__43860__delegate;
return G__43860;
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
var G__43866__delegate = function (tcoll,key,ks){while(true){
var ntcoll = cljs.core._dissoc_BANG_(tcoll,key);if(cljs.core.truth_(ks))
{{
var G__43867 = ntcoll;
var G__43868 = cljs.core.first(ks);
var G__43869 = cljs.core.next(ks);
tcoll = G__43867;
key = G__43868;
ks = G__43869;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__43866 = function (tcoll,key,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__43866__delegate.call(this,tcoll,key,ks);};
G__43866.cljs$lang$maxFixedArity = 2;
G__43866.cljs$lang$applyTo = (function (arglist__43870){
var tcoll = cljs.core.first(arglist__43870);
arglist__43870 = cljs.core.next(arglist__43870);
var key = cljs.core.first(arglist__43870);
var ks = cljs.core.rest(arglist__43870);
return G__43866__delegate(tcoll,key,ks);
});
G__43866.cljs$core$IFn$_invoke$arity$variadic = G__43866__delegate;
return G__43866;
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
var G__43871__delegate = function (tcoll,val,vals){while(true){
var ntcoll = cljs.core._disjoin_BANG_(tcoll,val);if(cljs.core.truth_(vals))
{{
var G__43872 = ntcoll;
var G__43873 = cljs.core.first(vals);
var G__43874 = cljs.core.next(vals);
tcoll = G__43872;
val = G__43873;
vals = G__43874;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__43871 = function (tcoll,val,var_args){
var vals = null;if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__43871__delegate.call(this,tcoll,val,vals);};
G__43871.cljs$lang$maxFixedArity = 2;
G__43871.cljs$lang$applyTo = (function (arglist__43875){
var tcoll = cljs.core.first(arglist__43875);
arglist__43875 = cljs.core.next(arglist__43875);
var val = cljs.core.first(arglist__43875);
var vals = cljs.core.rest(arglist__43875);
return G__43871__delegate(tcoll,val,vals);
});
G__43871.cljs$core$IFn$_invoke$arity$variadic = G__43871__delegate;
return G__43871;
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
{var a21316 = cljs.core._first(args__$1);var args__$2 = cljs.core._rest(args__$1);if((argc === (1)))
{if(f.cljs$core$IFn$_invoke$arity$1)
{return f.cljs$core$IFn$_invoke$arity$1(a21316);
} else
{var G__44086 = a21316;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44086) : f.call(null,G__44086));
}
} else
{var b21317 = cljs.core._first(args__$2);var args__$3 = cljs.core._rest(args__$2);if((argc === (2)))
{if(f.cljs$core$IFn$_invoke$arity$2)
{return f.cljs$core$IFn$_invoke$arity$2(a21316,b21317);
} else
{var G__44087 = a21316;var G__44088 = b21317;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44087,G__44088) : f.call(null,G__44087,G__44088));
}
} else
{var c21318 = cljs.core._first(args__$3);var args__$4 = cljs.core._rest(args__$3);if((argc === (3)))
{if(f.cljs$core$IFn$_invoke$arity$3)
{return f.cljs$core$IFn$_invoke$arity$3(a21316,b21317,c21318);
} else
{var G__44089 = a21316;var G__44090 = b21317;var G__44091 = c21318;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__44089,G__44090,G__44091) : f.call(null,G__44089,G__44090,G__44091));
}
} else
{var d21319 = cljs.core._first(args__$4);var args__$5 = cljs.core._rest(args__$4);if((argc === (4)))
{if(f.cljs$core$IFn$_invoke$arity$4)
{return f.cljs$core$IFn$_invoke$arity$4(a21316,b21317,c21318,d21319);
} else
{var G__44092 = a21316;var G__44093 = b21317;var G__44094 = c21318;var G__44095 = d21319;return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__44092,G__44093,G__44094,G__44095) : f.call(null,G__44092,G__44093,G__44094,G__44095));
}
} else
{var e21320 = cljs.core._first(args__$5);var args__$6 = cljs.core._rest(args__$5);if((argc === (5)))
{if(f.cljs$core$IFn$_invoke$arity$5)
{return f.cljs$core$IFn$_invoke$arity$5(a21316,b21317,c21318,d21319,e21320);
} else
{var G__44096 = a21316;var G__44097 = b21317;var G__44098 = c21318;var G__44099 = d21319;var G__44100 = e21320;return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__44096,G__44097,G__44098,G__44099,G__44100) : f.call(null,G__44096,G__44097,G__44098,G__44099,G__44100));
}
} else
{var f21321 = cljs.core._first(args__$6);var args__$7 = cljs.core._rest(args__$6);if((argc === (6)))
{if(f.cljs$core$IFn$_invoke$arity$6)
{return f.cljs$core$IFn$_invoke$arity$6(a21316,b21317,c21318,d21319,e21320,f21321);
} else
{var G__44101 = a21316;var G__44102 = b21317;var G__44103 = c21318;var G__44104 = d21319;var G__44105 = e21320;var G__44106 = f21321;return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__44101,G__44102,G__44103,G__44104,G__44105,G__44106) : f.call(null,G__44101,G__44102,G__44103,G__44104,G__44105,G__44106));
}
} else
{var g21322 = cljs.core._first(args__$7);var args__$8 = cljs.core._rest(args__$7);if((argc === (7)))
{if(f.cljs$core$IFn$_invoke$arity$7)
{return f.cljs$core$IFn$_invoke$arity$7(a21316,b21317,c21318,d21319,e21320,f21321,g21322);
} else
{var G__44107 = a21316;var G__44108 = b21317;var G__44109 = c21318;var G__44110 = d21319;var G__44111 = e21320;var G__44112 = f21321;var G__44113 = g21322;return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__44107,G__44108,G__44109,G__44110,G__44111,G__44112,G__44113) : f.call(null,G__44107,G__44108,G__44109,G__44110,G__44111,G__44112,G__44113));
}
} else
{var h21323 = cljs.core._first(args__$8);var args__$9 = cljs.core._rest(args__$8);if((argc === (8)))
{if(f.cljs$core$IFn$_invoke$arity$8)
{return f.cljs$core$IFn$_invoke$arity$8(a21316,b21317,c21318,d21319,e21320,f21321,g21322,h21323);
} else
{var G__44114 = a21316;var G__44115 = b21317;var G__44116 = c21318;var G__44117 = d21319;var G__44118 = e21320;var G__44119 = f21321;var G__44120 = g21322;var G__44121 = h21323;return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__44114,G__44115,G__44116,G__44117,G__44118,G__44119,G__44120,G__44121) : f.call(null,G__44114,G__44115,G__44116,G__44117,G__44118,G__44119,G__44120,G__44121));
}
} else
{var i21324 = cljs.core._first(args__$9);var args__$10 = cljs.core._rest(args__$9);if((argc === (9)))
{if(f.cljs$core$IFn$_invoke$arity$9)
{return f.cljs$core$IFn$_invoke$arity$9(a21316,b21317,c21318,d21319,e21320,f21321,g21322,h21323,i21324);
} else
{var G__44122 = a21316;var G__44123 = b21317;var G__44124 = c21318;var G__44125 = d21319;var G__44126 = e21320;var G__44127 = f21321;var G__44128 = g21322;var G__44129 = h21323;var G__44130 = i21324;return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__44122,G__44123,G__44124,G__44125,G__44126,G__44127,G__44128,G__44129,G__44130) : f.call(null,G__44122,G__44123,G__44124,G__44125,G__44126,G__44127,G__44128,G__44129,G__44130));
}
} else
{var j21325 = cljs.core._first(args__$10);var args__$11 = cljs.core._rest(args__$10);if((argc === (10)))
{if(f.cljs$core$IFn$_invoke$arity$10)
{return f.cljs$core$IFn$_invoke$arity$10(a21316,b21317,c21318,d21319,e21320,f21321,g21322,h21323,i21324,j21325);
} else
{var G__44131 = a21316;var G__44132 = b21317;var G__44133 = c21318;var G__44134 = d21319;var G__44135 = e21320;var G__44136 = f21321;var G__44137 = g21322;var G__44138 = h21323;var G__44139 = i21324;var G__44140 = j21325;return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__44131,G__44132,G__44133,G__44134,G__44135,G__44136,G__44137,G__44138,G__44139,G__44140) : f.call(null,G__44131,G__44132,G__44133,G__44134,G__44135,G__44136,G__44137,G__44138,G__44139,G__44140));
}
} else
{var k21326 = cljs.core._first(args__$11);var args__$12 = cljs.core._rest(args__$11);if((argc === (11)))
{if(f.cljs$core$IFn$_invoke$arity$11)
{return f.cljs$core$IFn$_invoke$arity$11(a21316,b21317,c21318,d21319,e21320,f21321,g21322,h21323,i21324,j21325,k21326);
} else
{var G__44141 = a21316;var G__44142 = b21317;var G__44143 = c21318;var G__44144 = d21319;var G__44145 = e21320;var G__44146 = f21321;var G__44147 = g21322;var G__44148 = h21323;var G__44149 = i21324;var G__44150 = j21325;var G__44151 = k21326;return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__44141,G__44142,G__44143,G__44144,G__44145,G__44146,G__44147,G__44148,G__44149,G__44150,G__44151) : f.call(null,G__44141,G__44142,G__44143,G__44144,G__44145,G__44146,G__44147,G__44148,G__44149,G__44150,G__44151));
}
} else
{var l21327 = cljs.core._first(args__$12);var args__$13 = cljs.core._rest(args__$12);if((argc === (12)))
{if(f.cljs$core$IFn$_invoke$arity$12)
{return f.cljs$core$IFn$_invoke$arity$12(a21316,b21317,c21318,d21319,e21320,f21321,g21322,h21323,i21324,j21325,k21326,l21327);
} else
{var G__44152 = a21316;var G__44153 = b21317;var G__44154 = c21318;var G__44155 = d21319;var G__44156 = e21320;var G__44157 = f21321;var G__44158 = g21322;var G__44159 = h21323;var G__44160 = i21324;var G__44161 = j21325;var G__44162 = k21326;var G__44163 = l21327;return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__44152,G__44153,G__44154,G__44155,G__44156,G__44157,G__44158,G__44159,G__44160,G__44161,G__44162,G__44163) : f.call(null,G__44152,G__44153,G__44154,G__44155,G__44156,G__44157,G__44158,G__44159,G__44160,G__44161,G__44162,G__44163));
}
} else
{var m21328 = cljs.core._first(args__$13);var args__$14 = cljs.core._rest(args__$13);if((argc === (13)))
{if(f.cljs$core$IFn$_invoke$arity$13)
{return f.cljs$core$IFn$_invoke$arity$13(a21316,b21317,c21318,d21319,e21320,f21321,g21322,h21323,i21324,j21325,k21326,l21327,m21328);
} else
{var G__44164 = a21316;var G__44165 = b21317;var G__44166 = c21318;var G__44167 = d21319;var G__44168 = e21320;var G__44169 = f21321;var G__44170 = g21322;var G__44171 = h21323;var G__44172 = i21324;var G__44173 = j21325;var G__44174 = k21326;var G__44175 = l21327;var G__44176 = m21328;return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__44164,G__44165,G__44166,G__44167,G__44168,G__44169,G__44170,G__44171,G__44172,G__44173,G__44174,G__44175,G__44176) : f.call(null,G__44164,G__44165,G__44166,G__44167,G__44168,G__44169,G__44170,G__44171,G__44172,G__44173,G__44174,G__44175,G__44176));
}
} else
{var n21329 = cljs.core._first(args__$14);var args__$15 = cljs.core._rest(args__$14);if((argc === (14)))
{if(f.cljs$core$IFn$_invoke$arity$14)
{return f.cljs$core$IFn$_invoke$arity$14(a21316,b21317,c21318,d21319,e21320,f21321,g21322,h21323,i21324,j21325,k21326,l21327,m21328,n21329);
} else
{var G__44177 = a21316;var G__44178 = b21317;var G__44179 = c21318;var G__44180 = d21319;var G__44181 = e21320;var G__44182 = f21321;var G__44183 = g21322;var G__44184 = h21323;var G__44185 = i21324;var G__44186 = j21325;var G__44187 = k21326;var G__44188 = l21327;var G__44189 = m21328;var G__44190 = n21329;return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__44177,G__44178,G__44179,G__44180,G__44181,G__44182,G__44183,G__44184,G__44185,G__44186,G__44187,G__44188,G__44189,G__44190) : f.call(null,G__44177,G__44178,G__44179,G__44180,G__44181,G__44182,G__44183,G__44184,G__44185,G__44186,G__44187,G__44188,G__44189,G__44190));
}
} else
{var o21330 = cljs.core._first(args__$15);var args__$16 = cljs.core._rest(args__$15);if((argc === (15)))
{if(f.cljs$core$IFn$_invoke$arity$15)
{return f.cljs$core$IFn$_invoke$arity$15(a21316,b21317,c21318,d21319,e21320,f21321,g21322,h21323,i21324,j21325,k21326,l21327,m21328,n21329,o21330);
} else
{var G__44191 = a21316;var G__44192 = b21317;var G__44193 = c21318;var G__44194 = d21319;var G__44195 = e21320;var G__44196 = f21321;var G__44197 = g21322;var G__44198 = h21323;var G__44199 = i21324;var G__44200 = j21325;var G__44201 = k21326;var G__44202 = l21327;var G__44203 = m21328;var G__44204 = n21329;var G__44205 = o21330;return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__44191,G__44192,G__44193,G__44194,G__44195,G__44196,G__44197,G__44198,G__44199,G__44200,G__44201,G__44202,G__44203,G__44204,G__44205) : f.call(null,G__44191,G__44192,G__44193,G__44194,G__44195,G__44196,G__44197,G__44198,G__44199,G__44200,G__44201,G__44202,G__44203,G__44204,G__44205));
}
} else
{var p21331 = cljs.core._first(args__$16);var args__$17 = cljs.core._rest(args__$16);if((argc === (16)))
{if(f.cljs$core$IFn$_invoke$arity$16)
{return f.cljs$core$IFn$_invoke$arity$16(a21316,b21317,c21318,d21319,e21320,f21321,g21322,h21323,i21324,j21325,k21326,l21327,m21328,n21329,o21330,p21331);
} else
{var G__44206 = a21316;var G__44207 = b21317;var G__44208 = c21318;var G__44209 = d21319;var G__44210 = e21320;var G__44211 = f21321;var G__44212 = g21322;var G__44213 = h21323;var G__44214 = i21324;var G__44215 = j21325;var G__44216 = k21326;var G__44217 = l21327;var G__44218 = m21328;var G__44219 = n21329;var G__44220 = o21330;var G__44221 = p21331;return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__44206,G__44207,G__44208,G__44209,G__44210,G__44211,G__44212,G__44213,G__44214,G__44215,G__44216,G__44217,G__44218,G__44219,G__44220,G__44221) : f.call(null,G__44206,G__44207,G__44208,G__44209,G__44210,G__44211,G__44212,G__44213,G__44214,G__44215,G__44216,G__44217,G__44218,G__44219,G__44220,G__44221));
}
} else
{var q21332 = cljs.core._first(args__$17);var args__$18 = cljs.core._rest(args__$17);if((argc === (17)))
{if(f.cljs$core$IFn$_invoke$arity$17)
{return f.cljs$core$IFn$_invoke$arity$17(a21316,b21317,c21318,d21319,e21320,f21321,g21322,h21323,i21324,j21325,k21326,l21327,m21328,n21329,o21330,p21331,q21332);
} else
{var G__44222 = a21316;var G__44223 = b21317;var G__44224 = c21318;var G__44225 = d21319;var G__44226 = e21320;var G__44227 = f21321;var G__44228 = g21322;var G__44229 = h21323;var G__44230 = i21324;var G__44231 = j21325;var G__44232 = k21326;var G__44233 = l21327;var G__44234 = m21328;var G__44235 = n21329;var G__44236 = o21330;var G__44237 = p21331;var G__44238 = q21332;return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__44222,G__44223,G__44224,G__44225,G__44226,G__44227,G__44228,G__44229,G__44230,G__44231,G__44232,G__44233,G__44234,G__44235,G__44236,G__44237,G__44238) : f.call(null,G__44222,G__44223,G__44224,G__44225,G__44226,G__44227,G__44228,G__44229,G__44230,G__44231,G__44232,G__44233,G__44234,G__44235,G__44236,G__44237,G__44238));
}
} else
{var r21333 = cljs.core._first(args__$18);var args__$19 = cljs.core._rest(args__$18);if((argc === (18)))
{if(f.cljs$core$IFn$_invoke$arity$18)
{return f.cljs$core$IFn$_invoke$arity$18(a21316,b21317,c21318,d21319,e21320,f21321,g21322,h21323,i21324,j21325,k21326,l21327,m21328,n21329,o21330,p21331,q21332,r21333);
} else
{var G__44239 = a21316;var G__44240 = b21317;var G__44241 = c21318;var G__44242 = d21319;var G__44243 = e21320;var G__44244 = f21321;var G__44245 = g21322;var G__44246 = h21323;var G__44247 = i21324;var G__44248 = j21325;var G__44249 = k21326;var G__44250 = l21327;var G__44251 = m21328;var G__44252 = n21329;var G__44253 = o21330;var G__44254 = p21331;var G__44255 = q21332;var G__44256 = r21333;return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__44239,G__44240,G__44241,G__44242,G__44243,G__44244,G__44245,G__44246,G__44247,G__44248,G__44249,G__44250,G__44251,G__44252,G__44253,G__44254,G__44255,G__44256) : f.call(null,G__44239,G__44240,G__44241,G__44242,G__44243,G__44244,G__44245,G__44246,G__44247,G__44248,G__44249,G__44250,G__44251,G__44252,G__44253,G__44254,G__44255,G__44256));
}
} else
{var s21334 = cljs.core._first(args__$19);var args__$20 = cljs.core._rest(args__$19);if((argc === (19)))
{if(f.cljs$core$IFn$_invoke$arity$19)
{return f.cljs$core$IFn$_invoke$arity$19(a21316,b21317,c21318,d21319,e21320,f21321,g21322,h21323,i21324,j21325,k21326,l21327,m21328,n21329,o21330,p21331,q21332,r21333,s21334);
} else
{var G__44257 = a21316;var G__44258 = b21317;var G__44259 = c21318;var G__44260 = d21319;var G__44261 = e21320;var G__44262 = f21321;var G__44263 = g21322;var G__44264 = h21323;var G__44265 = i21324;var G__44266 = j21325;var G__44267 = k21326;var G__44268 = l21327;var G__44269 = m21328;var G__44270 = n21329;var G__44271 = o21330;var G__44272 = p21331;var G__44273 = q21332;var G__44274 = r21333;var G__44275 = s21334;return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__44257,G__44258,G__44259,G__44260,G__44261,G__44262,G__44263,G__44264,G__44265,G__44266,G__44267,G__44268,G__44269,G__44270,G__44271,G__44272,G__44273,G__44274,G__44275) : f.call(null,G__44257,G__44258,G__44259,G__44260,G__44261,G__44262,G__44263,G__44264,G__44265,G__44266,G__44267,G__44268,G__44269,G__44270,G__44271,G__44272,G__44273,G__44274,G__44275));
}
} else
{var t21335 = cljs.core._first(args__$20);var args__$21 = cljs.core._rest(args__$20);if((argc === (20)))
{if(f.cljs$core$IFn$_invoke$arity$20)
{return f.cljs$core$IFn$_invoke$arity$20(a21316,b21317,c21318,d21319,e21320,f21321,g21322,h21323,i21324,j21325,k21326,l21327,m21328,n21329,o21330,p21331,q21332,r21333,s21334,t21335);
} else
{var G__44276 = a21316;var G__44277 = b21317;var G__44278 = c21318;var G__44279 = d21319;var G__44280 = e21320;var G__44281 = f21321;var G__44282 = g21322;var G__44283 = h21323;var G__44284 = i21324;var G__44285 = j21325;var G__44286 = k21326;var G__44287 = l21327;var G__44288 = m21328;var G__44289 = n21329;var G__44290 = o21330;var G__44291 = p21331;var G__44292 = q21332;var G__44293 = r21333;var G__44294 = s21334;var G__44295 = t21335;return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(G__44276,G__44277,G__44278,G__44279,G__44280,G__44281,G__44282,G__44283,G__44284,G__44285,G__44286,G__44287,G__44288,G__44289,G__44290,G__44291,G__44292,G__44293,G__44294,G__44295) : f.call(null,G__44276,G__44277,G__44278,G__44279,G__44280,G__44281,G__44282,G__44283,G__44284,G__44285,G__44286,G__44287,G__44288,G__44289,G__44290,G__44291,G__44292,G__44293,G__44294,G__44295));
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
var G__44296__delegate = function (f,a,b,c,d,args){var arglist = cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(args)))));var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array(arglist));
}
};
var G__44296 = function (f,a,b,c,d,var_args){
var args = null;if (arguments.length > 5) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__44296__delegate.call(this,f,a,b,c,d,args);};
G__44296.cljs$lang$maxFixedArity = 5;
G__44296.cljs$lang$applyTo = (function (arglist__44297){
var f = cljs.core.first(arglist__44297);
arglist__44297 = cljs.core.next(arglist__44297);
var a = cljs.core.first(arglist__44297);
arglist__44297 = cljs.core.next(arglist__44297);
var b = cljs.core.first(arglist__44297);
arglist__44297 = cljs.core.next(arglist__44297);
var c = cljs.core.first(arglist__44297);
arglist__44297 = cljs.core.next(arglist__44297);
var d = cljs.core.first(arglist__44297);
var args = cljs.core.rest(arglist__44297);
return G__44296__delegate(f,a,b,c,d,args);
});
G__44296.cljs$core$IFn$_invoke$arity$variadic = G__44296__delegate;
return G__44296;
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
var vary_meta__2 = (function (obj,f){return cljs.core.with_meta(obj,(function (){var G__44313 = cljs.core.meta(obj);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44313) : f.call(null,G__44313));
})());
});
var vary_meta__3 = (function (obj,f,a){return cljs.core.with_meta(obj,(function (){var G__44314 = cljs.core.meta(obj);var G__44315 = a;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44314,G__44315) : f.call(null,G__44314,G__44315));
})());
});
var vary_meta__4 = (function (obj,f,a,b){return cljs.core.with_meta(obj,(function (){var G__44316 = cljs.core.meta(obj);var G__44317 = a;var G__44318 = b;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__44316,G__44317,G__44318) : f.call(null,G__44316,G__44317,G__44318));
})());
});
var vary_meta__5 = (function (obj,f,a,b,c){return cljs.core.with_meta(obj,(function (){var G__44319 = cljs.core.meta(obj);var G__44320 = a;var G__44321 = b;var G__44322 = c;return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__44319,G__44320,G__44321,G__44322) : f.call(null,G__44319,G__44320,G__44321,G__44322));
})());
});
var vary_meta__6 = (function (obj,f,a,b,c,d){return cljs.core.with_meta(obj,(function (){var G__44323 = cljs.core.meta(obj);var G__44324 = a;var G__44325 = b;var G__44326 = c;var G__44327 = d;return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__44323,G__44324,G__44325,G__44326,G__44327) : f.call(null,G__44323,G__44324,G__44325,G__44326,G__44327));
})());
});
var vary_meta__7 = (function() { 
var G__44328__delegate = function (obj,f,a,b,c,d,args){return cljs.core.with_meta(obj,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.meta(obj),a,b,c,cljs.core.array_seq([d,args], 0)));
};
var G__44328 = function (obj,f,a,b,c,d,var_args){
var args = null;if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return G__44328__delegate.call(this,obj,f,a,b,c,d,args);};
G__44328.cljs$lang$maxFixedArity = 6;
G__44328.cljs$lang$applyTo = (function (arglist__44329){
var obj = cljs.core.first(arglist__44329);
arglist__44329 = cljs.core.next(arglist__44329);
var f = cljs.core.first(arglist__44329);
arglist__44329 = cljs.core.next(arglist__44329);
var a = cljs.core.first(arglist__44329);
arglist__44329 = cljs.core.next(arglist__44329);
var b = cljs.core.first(arglist__44329);
arglist__44329 = cljs.core.next(arglist__44329);
var c = cljs.core.first(arglist__44329);
arglist__44329 = cljs.core.next(arglist__44329);
var d = cljs.core.first(arglist__44329);
var args = cljs.core.rest(arglist__44329);
return G__44328__delegate(obj,f,a,b,c,d,args);
});
G__44328.cljs$core$IFn$_invoke$arity$variadic = G__44328__delegate;
return G__44328;
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
var G__44330__delegate = function (x,y,more){return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._EQ_,x,y,more));
};
var G__44330 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__44330__delegate.call(this,x,y,more);};
G__44330.cljs$lang$maxFixedArity = 2;
G__44330.cljs$lang$applyTo = (function (arglist__44331){
var x = cljs.core.first(arglist__44331);
arglist__44331 = cljs.core.next(arglist__44331);
var y = cljs.core.first(arglist__44331);
var more = cljs.core.rest(arglist__44331);
return G__44330__delegate(x,y,more);
});
G__44330.cljs$core$IFn$_invoke$arity$variadic = G__44330__delegate;
return G__44330;
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
cljs.core.nil_iter = (function nil_iter(){if(typeof cljs.core.t44335 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.t44335 = (function (nil_iter,meta44336){
this.nil_iter = nil_iter;
this.meta44336 = meta44336;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.t44335.cljs$lang$type = true;
cljs.core.t44335.cljs$lang$ctorStr = "cljs.core/t44335";
cljs.core.t44335.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/t44335");
});
cljs.core.t44335.prototype.hasNext = (function (){var self__ = this;
var _ = this;return false;
});
cljs.core.t44335.prototype.next = (function (){var self__ = this;
var _ = this;return (new Error("No such element"));
});
cljs.core.t44335.prototype.remove = (function (){var self__ = this;
var _ = this;return (new Error("Unsupported operation"));
});
cljs.core.t44335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44337){var self__ = this;
var _44337__$1 = this;return self__.meta44336;
});
cljs.core.t44335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44337,meta44336__$1){var self__ = this;
var _44337__$1 = this;return (new cljs.core.t44335(self__.nil_iter,meta44336__$1));
});
cljs.core.__GT_t44335 = (function __GT_t44335(nil_iter__$1,meta44336){return (new cljs.core.t44335(nil_iter__$1,meta44336));
});
}
return (new cljs.core.t44335(nil_iter,null));
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
cljs.core.StringIter.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/StringIter");
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
cljs.core.ArrayIter.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/ArrayIter");
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
cljs.core.SeqIter.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/SeqIter");
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
{if(cljs.core.iterable_QMARK_(coll))
{return cljs.core._iterator(coll);
} else
{if(cljs.core.seqable_QMARK_(coll))
{return cljs.core.seq_iter(coll);
} else
{throw (new Error(("Cannot create iterator from "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(coll))));

}
}
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
cljs.core.Stepper.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/Stepper");
});
cljs.core.Stepper.prototype.step = (function (lt){var self__ = this;
var this$ = this;while(true){
if(cljs.core.truth_((function (){var and__19564__auto__ = !((lt.stepper == null));if(and__19564__auto__)
{return self__.iter.hasNext();
} else
{return and__19564__auto__;
}
})()))
{if(cljs.core.reduced_QMARK_((function (){var G__44338 = lt;var G__44339 = self__.iter.next();return (self__.xform.cljs$core$IFn$_invoke$arity$2 ? self__.xform.cljs$core$IFn$_invoke$arity$2(G__44338,G__44339) : self__.xform.call(null,G__44338,G__44339));
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
{var G__44340 = lt;return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__44340) : self__.xform.call(null,G__44340));
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
return (new cljs.core.Stepper((function (){var G__44342 = stepfn;return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__44342) : xform.call(null,G__44342));
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
cljs.core.MultiStepper.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/MultiStepper");
});
cljs.core.MultiStepper.prototype.hasNext = (function (){var self__ = this;
var _ = this;var iters__$1 = cljs.core.seq(self__.iters);while(true){
if(!((iters__$1 == null)))
{var iter = cljs.core.first(iters__$1);if(cljs.core.not(iter.hasNext()))
{return false;
} else
{{
var G__44344 = cljs.core.next(iters__$1);
iters__$1 = G__44344;
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
var _ = this;var n__21231__auto___44345 = self__.iters.length;var i_44346 = (0);while(true){
if((i_44346 < n__21231__auto___44345))
{(self__.nexts[i_44346] = (self__.iters[i_44346]).next());
{
var G__44347 = (i_44346 + (1));
i_44346 = G__44347;
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
if(cljs.core.truth_((function (){var and__19564__auto__ = !((lt.stepper == null));if(and__19564__auto__)
{return this$.hasNext();
} else
{return and__19564__auto__;
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
{var G__44343 = lt;return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__44343) : self__.xform.call(null,G__44343));
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
return (new cljs.core.MultiStepper((function (){var G__44352 = stepfn;return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__44352) : xform.call(null,G__44352));
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
cljs.core.LazyTransformer.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/LazyTransformer");
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
cljs.core.LazyTransformer.createMulti = (function (xform,colls){var iters = [];var seq__44353_44357 = cljs.core.seq(colls);var chunk__44354_44358 = null;var count__44355_44359 = (0);var i__44356_44360 = (0);while(true){
if((i__44356_44360 < count__44355_44359))
{var coll_44361 = chunk__44354_44358.cljs$core$IIndexed$_nth$arity$2(null,i__44356_44360);iters.push(cljs.core.iter(coll_44361));
{
var G__44362 = seq__44353_44357;
var G__44363 = chunk__44354_44358;
var G__44364 = count__44355_44359;
var G__44365 = (i__44356_44360 + (1));
seq__44353_44357 = G__44362;
chunk__44354_44358 = G__44363;
count__44355_44359 = G__44364;
i__44356_44360 = G__44365;
continue;
}
} else
{var temp__4126__auto___44366 = cljs.core.seq(seq__44353_44357);if(temp__4126__auto___44366)
{var seq__44353_44367__$1 = temp__4126__auto___44366;if(cljs.core.chunked_seq_QMARK_(seq__44353_44367__$1))
{var c__21046__auto___44368 = cljs.core.chunk_first(seq__44353_44367__$1);{
var G__44369 = cljs.core.chunk_rest(seq__44353_44367__$1);
var G__44370 = c__21046__auto___44368;
var G__44371 = cljs.core.count(c__21046__auto___44368);
var G__44372 = (0);
seq__44353_44357 = G__44369;
chunk__44354_44358 = G__44370;
count__44355_44359 = G__44371;
i__44356_44360 = G__44372;
continue;
}
} else
{var coll_44373 = cljs.core.first(seq__44353_44367__$1);iters.push(cljs.core.iter(coll_44373));
{
var G__44374 = cljs.core.next(seq__44353_44367__$1);
var G__44375 = null;
var G__44376 = (0);
var G__44377 = (0);
seq__44353_44357 = G__44374;
chunk__44354_44358 = G__44375;
count__44355_44359 = G__44376;
i__44356_44360 = G__44377;
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
{var or__19586__auto__ = cljs.core.seq(coll);if(or__19586__auto__)
{return or__19586__auto__;
} else
{return cljs.core.List.EMPTY;
}
}
});
var sequence__2 = (function (xform,coll){return cljs.core.LazyTransformer.create(xform,coll);
});
var sequence__3 = (function() { 
var G__44378__delegate = function (xform,coll,colls){return cljs.core.LazyTransformer.createMulti(xform,cljs.core.to_array(cljs.core.cons(coll,colls)));
};
var G__44378 = function (xform,coll,var_args){
var colls = null;if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__44378__delegate.call(this,xform,coll,colls);};
G__44378.cljs$lang$maxFixedArity = 2;
G__44378.cljs$lang$applyTo = (function (arglist__44379){
var xform = cljs.core.first(arglist__44379);
arglist__44379 = cljs.core.next(arglist__44379);
var coll = cljs.core.first(arglist__44379);
var colls = cljs.core.rest(arglist__44379);
return G__44378__delegate(xform,coll,colls);
});
G__44378.cljs$core$IFn$_invoke$arity$variadic = G__44378__delegate;
return G__44378;
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
{if(cljs.core.truth_((function (){var G__44381 = cljs.core.first(coll);return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__44381) : pred.call(null,G__44381));
})()))
{{
var G__44382 = pred;
var G__44383 = cljs.core.next(coll);
pred = G__44382;
coll = G__44383;
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
{var or__19586__auto__ = (function (){var G__44387 = cljs.core.first(coll);return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__44387) : pred.call(null,G__44387));
})();if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{{
var G__44388 = pred;
var G__44389 = cljs.core.next(coll);
pred = G__44388;
coll = G__44389;
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
var G__44396 = null;
var G__44396__0 = (function (){return cljs.core.not((function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})());
});
var G__44396__1 = (function (x){return cljs.core.not((function (){var G__44393 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44393) : f.call(null,G__44393));
})());
});
var G__44396__2 = (function (x,y){return cljs.core.not((function (){var G__44394 = x;var G__44395 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44394,G__44395) : f.call(null,G__44394,G__44395));
})());
});
var G__44396__3 = (function() { 
var G__44397__delegate = function (x,y,zs){return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,x,y,zs));
};
var G__44397 = function (x,y,var_args){
var zs = null;if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__44397__delegate.call(this,x,y,zs);};
G__44397.cljs$lang$maxFixedArity = 2;
G__44397.cljs$lang$applyTo = (function (arglist__44398){
var x = cljs.core.first(arglist__44398);
arglist__44398 = cljs.core.next(arglist__44398);
var y = cljs.core.first(arglist__44398);
var zs = cljs.core.rest(arglist__44398);
return G__44397__delegate(x,y,zs);
});
G__44397.cljs$core$IFn$_invoke$arity$variadic = G__44397__delegate;
return G__44397;
})()
;
G__44396 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__44396__0.call(this);
case 1:
return G__44396__1.call(this,x);
case 2:
return G__44396__2.call(this,x,y);
default:
return G__44396__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44396.cljs$lang$maxFixedArity = 2;
G__44396.cljs$lang$applyTo = G__44396__3.cljs$lang$applyTo;
G__44396.cljs$core$IFn$_invoke$arity$0 = G__44396__0;
G__44396.cljs$core$IFn$_invoke$arity$1 = G__44396__1;
G__44396.cljs$core$IFn$_invoke$arity$2 = G__44396__2;
G__44396.cljs$core$IFn$_invoke$arity$variadic = G__44396__3.cljs$core$IFn$_invoke$arity$variadic;
return G__44396;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){return (function() { 
var G__44399__delegate = function (args){return x;
};
var G__44399 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__44399__delegate.call(this,args);};
G__44399.cljs$lang$maxFixedArity = 0;
G__44399.cljs$lang$applyTo = (function (arglist__44400){
var args = cljs.core.seq(arglist__44400);
return G__44399__delegate(args);
});
G__44399.cljs$core$IFn$_invoke$arity$variadic = G__44399__delegate;
return G__44399;
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
var G__44455 = null;
var G__44455__0 = (function (){var G__44428 = (function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44428) : f.call(null,G__44428));
});
var G__44455__1 = (function (x){var G__44429 = (function (){var G__44430 = x;return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__44430) : g.call(null,G__44430));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44429) : f.call(null,G__44429));
});
var G__44455__2 = (function (x,y){var G__44431 = (function (){var G__44432 = x;var G__44433 = y;return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__44432,G__44433) : g.call(null,G__44432,G__44433));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44431) : f.call(null,G__44431));
});
var G__44455__3 = (function (x,y,z){var G__44434 = (function (){var G__44435 = x;var G__44436 = y;var G__44437 = z;return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__44435,G__44436,G__44437) : g.call(null,G__44435,G__44436,G__44437));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44434) : f.call(null,G__44434));
});
var G__44455__4 = (function() { 
var G__44456__delegate = function (x,y,z,args){var G__44438 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44438) : f.call(null,G__44438));
};
var G__44456 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__44456__delegate.call(this,x,y,z,args);};
G__44456.cljs$lang$maxFixedArity = 3;
G__44456.cljs$lang$applyTo = (function (arglist__44457){
var x = cljs.core.first(arglist__44457);
arglist__44457 = cljs.core.next(arglist__44457);
var y = cljs.core.first(arglist__44457);
arglist__44457 = cljs.core.next(arglist__44457);
var z = cljs.core.first(arglist__44457);
var args = cljs.core.rest(arglist__44457);
return G__44456__delegate(x,y,z,args);
});
G__44456.cljs$core$IFn$_invoke$arity$variadic = G__44456__delegate;
return G__44456;
})()
;
G__44455 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__44455__0.call(this);
case 1:
return G__44455__1.call(this,x);
case 2:
return G__44455__2.call(this,x,y);
case 3:
return G__44455__3.call(this,x,y,z);
default:
return G__44455__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44455.cljs$lang$maxFixedArity = 3;
G__44455.cljs$lang$applyTo = G__44455__4.cljs$lang$applyTo;
G__44455.cljs$core$IFn$_invoke$arity$0 = G__44455__0;
G__44455.cljs$core$IFn$_invoke$arity$1 = G__44455__1;
G__44455.cljs$core$IFn$_invoke$arity$2 = G__44455__2;
G__44455.cljs$core$IFn$_invoke$arity$3 = G__44455__3;
G__44455.cljs$core$IFn$_invoke$arity$variadic = G__44455__4.cljs$core$IFn$_invoke$arity$variadic;
return G__44455;
})()
});
var comp__3 = (function (f,g,h){return (function() {
var G__44458 = null;
var G__44458__0 = (function (){var G__44439 = (function (){var G__44440 = (function (){return (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
})();return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__44440) : g.call(null,G__44440));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44439) : f.call(null,G__44439));
});
var G__44458__1 = (function (x){var G__44441 = (function (){var G__44442 = (function (){var G__44443 = x;return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__44443) : h.call(null,G__44443));
})();return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__44442) : g.call(null,G__44442));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44441) : f.call(null,G__44441));
});
var G__44458__2 = (function (x,y){var G__44444 = (function (){var G__44445 = (function (){var G__44446 = x;var G__44447 = y;return (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(G__44446,G__44447) : h.call(null,G__44446,G__44447));
})();return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__44445) : g.call(null,G__44445));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44444) : f.call(null,G__44444));
});
var G__44458__3 = (function (x,y,z){var G__44448 = (function (){var G__44449 = (function (){var G__44450 = x;var G__44451 = y;var G__44452 = z;return (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(G__44450,G__44451,G__44452) : h.call(null,G__44450,G__44451,G__44452));
})();return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__44449) : g.call(null,G__44449));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44448) : f.call(null,G__44448));
});
var G__44458__4 = (function() { 
var G__44459__delegate = function (x,y,z,args){var G__44453 = (function (){var G__44454 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args);return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__44454) : g.call(null,G__44454));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44453) : f.call(null,G__44453));
};
var G__44459 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__44459__delegate.call(this,x,y,z,args);};
G__44459.cljs$lang$maxFixedArity = 3;
G__44459.cljs$lang$applyTo = (function (arglist__44460){
var x = cljs.core.first(arglist__44460);
arglist__44460 = cljs.core.next(arglist__44460);
var y = cljs.core.first(arglist__44460);
arglist__44460 = cljs.core.next(arglist__44460);
var z = cljs.core.first(arglist__44460);
var args = cljs.core.rest(arglist__44460);
return G__44459__delegate(x,y,z,args);
});
G__44459.cljs$core$IFn$_invoke$arity$variadic = G__44459__delegate;
return G__44459;
})()
;
G__44458 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__44458__0.call(this);
case 1:
return G__44458__1.call(this,x);
case 2:
return G__44458__2.call(this,x,y);
case 3:
return G__44458__3.call(this,x,y,z);
default:
return G__44458__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44458.cljs$lang$maxFixedArity = 3;
G__44458.cljs$lang$applyTo = G__44458__4.cljs$lang$applyTo;
G__44458.cljs$core$IFn$_invoke$arity$0 = G__44458__0;
G__44458.cljs$core$IFn$_invoke$arity$1 = G__44458__1;
G__44458.cljs$core$IFn$_invoke$arity$2 = G__44458__2;
G__44458.cljs$core$IFn$_invoke$arity$3 = G__44458__3;
G__44458.cljs$core$IFn$_invoke$arity$variadic = G__44458__4.cljs$core$IFn$_invoke$arity$variadic;
return G__44458;
})()
});
var comp__4 = (function() { 
var G__44461__delegate = function (f1,f2,f3,fs){var fs__$1 = cljs.core.reverse(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f1,f2,f3,fs));return ((function (fs__$1){
return (function() { 
var G__44462__delegate = function (args){var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fs__$1),args);var fs__$2 = cljs.core.next(fs__$1);while(true){
if(fs__$2)
{{
var G__44463 = cljs.core.first(fs__$2).call(null,ret);
var G__44464 = cljs.core.next(fs__$2);
ret = G__44463;
fs__$2 = G__44464;
continue;
}
} else
{return ret;
}
break;
}
};
var G__44462 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__44462__delegate.call(this,args);};
G__44462.cljs$lang$maxFixedArity = 0;
G__44462.cljs$lang$applyTo = (function (arglist__44465){
var args = cljs.core.seq(arglist__44465);
return G__44462__delegate(args);
});
G__44462.cljs$core$IFn$_invoke$arity$variadic = G__44462__delegate;
return G__44462;
})()
;
;})(fs__$1))
};
var G__44461 = function (f1,f2,f3,var_args){
var fs = null;if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__44461__delegate.call(this,f1,f2,f3,fs);};
G__44461.cljs$lang$maxFixedArity = 3;
G__44461.cljs$lang$applyTo = (function (arglist__44466){
var f1 = cljs.core.first(arglist__44466);
arglist__44466 = cljs.core.next(arglist__44466);
var f2 = cljs.core.first(arglist__44466);
arglist__44466 = cljs.core.next(arglist__44466);
var f3 = cljs.core.first(arglist__44466);
var fs = cljs.core.rest(arglist__44466);
return G__44461__delegate(f1,f2,f3,fs);
});
G__44461.cljs$core$IFn$_invoke$arity$variadic = G__44461__delegate;
return G__44461;
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
var G__44467__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg1,args);
};
var G__44467 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__44467__delegate.call(this,args);};
G__44467.cljs$lang$maxFixedArity = 0;
G__44467.cljs$lang$applyTo = (function (arglist__44468){
var args = cljs.core.seq(arglist__44468);
return G__44467__delegate(args);
});
G__44467.cljs$core$IFn$_invoke$arity$variadic = G__44467__delegate;
return G__44467;
})()
;
});
var partial__3 = (function (f,arg1,arg2){return (function() { 
var G__44469__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,arg1,arg2,args);
};
var G__44469 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__44469__delegate.call(this,args);};
G__44469.cljs$lang$maxFixedArity = 0;
G__44469.cljs$lang$applyTo = (function (arglist__44470){
var args = cljs.core.seq(arglist__44470);
return G__44469__delegate(args);
});
G__44469.cljs$core$IFn$_invoke$arity$variadic = G__44469__delegate;
return G__44469;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){return (function() { 
var G__44471__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,arg1,arg2,arg3,args);
};
var G__44471 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__44471__delegate.call(this,args);};
G__44471.cljs$lang$maxFixedArity = 0;
G__44471.cljs$lang$applyTo = (function (arglist__44472){
var args = cljs.core.seq(arglist__44472);
return G__44471__delegate(args);
});
G__44471.cljs$core$IFn$_invoke$arity$variadic = G__44471__delegate;
return G__44471;
})()
;
});
var partial__5 = (function() { 
var G__44473__delegate = function (f,arg1,arg2,arg3,more){return (function() { 
var G__44474__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,arg1,arg2,arg3,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(more,args));
};
var G__44474 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__44474__delegate.call(this,args);};
G__44474.cljs$lang$maxFixedArity = 0;
G__44474.cljs$lang$applyTo = (function (arglist__44475){
var args = cljs.core.seq(arglist__44475);
return G__44474__delegate(args);
});
G__44474.cljs$core$IFn$_invoke$arity$variadic = G__44474__delegate;
return G__44474;
})()
;
};
var G__44473 = function (f,arg1,arg2,arg3,var_args){
var more = null;if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__44473__delegate.call(this,f,arg1,arg2,arg3,more);};
G__44473.cljs$lang$maxFixedArity = 4;
G__44473.cljs$lang$applyTo = (function (arglist__44476){
var f = cljs.core.first(arglist__44476);
arglist__44476 = cljs.core.next(arglist__44476);
var arg1 = cljs.core.first(arglist__44476);
arglist__44476 = cljs.core.next(arglist__44476);
var arg2 = cljs.core.first(arglist__44476);
arglist__44476 = cljs.core.next(arglist__44476);
var arg3 = cljs.core.first(arglist__44476);
var more = cljs.core.rest(arglist__44476);
return G__44473__delegate(f,arg1,arg2,arg3,more);
});
G__44473.cljs$core$IFn$_invoke$arity$variadic = G__44473__delegate;
return G__44473;
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
var G__44509 = null;
var G__44509__1 = (function (a){var G__44493 = (((a == null))?x:a);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44493) : f.call(null,G__44493));
});
var G__44509__2 = (function (a,b){var G__44494 = (((a == null))?x:a);var G__44495 = b;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44494,G__44495) : f.call(null,G__44494,G__44495));
});
var G__44509__3 = (function (a,b,c){var G__44496 = (((a == null))?x:a);var G__44497 = b;var G__44498 = c;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__44496,G__44497,G__44498) : f.call(null,G__44496,G__44497,G__44498));
});
var G__44509__4 = (function() { 
var G__44510__delegate = function (a,b,c,ds){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),b,c,ds);
};
var G__44510 = function (a,b,c,var_args){
var ds = null;if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__44510__delegate.call(this,a,b,c,ds);};
G__44510.cljs$lang$maxFixedArity = 3;
G__44510.cljs$lang$applyTo = (function (arglist__44511){
var a = cljs.core.first(arglist__44511);
arglist__44511 = cljs.core.next(arglist__44511);
var b = cljs.core.first(arglist__44511);
arglist__44511 = cljs.core.next(arglist__44511);
var c = cljs.core.first(arglist__44511);
var ds = cljs.core.rest(arglist__44511);
return G__44510__delegate(a,b,c,ds);
});
G__44510.cljs$core$IFn$_invoke$arity$variadic = G__44510__delegate;
return G__44510;
})()
;
G__44509 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__44509__1.call(this,a);
case 2:
return G__44509__2.call(this,a,b);
case 3:
return G__44509__3.call(this,a,b,c);
default:
return G__44509__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44509.cljs$lang$maxFixedArity = 3;
G__44509.cljs$lang$applyTo = G__44509__4.cljs$lang$applyTo;
G__44509.cljs$core$IFn$_invoke$arity$1 = G__44509__1;
G__44509.cljs$core$IFn$_invoke$arity$2 = G__44509__2;
G__44509.cljs$core$IFn$_invoke$arity$3 = G__44509__3;
G__44509.cljs$core$IFn$_invoke$arity$variadic = G__44509__4.cljs$core$IFn$_invoke$arity$variadic;
return G__44509;
})()
});
var fnil__3 = (function (f,x,y){return (function() {
var G__44512 = null;
var G__44512__2 = (function (a,b){var G__44499 = (((a == null))?x:a);var G__44500 = (((b == null))?y:b);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44499,G__44500) : f.call(null,G__44499,G__44500));
});
var G__44512__3 = (function (a,b,c){var G__44501 = (((a == null))?x:a);var G__44502 = (((b == null))?y:b);var G__44503 = c;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__44501,G__44502,G__44503) : f.call(null,G__44501,G__44502,G__44503));
});
var G__44512__4 = (function() { 
var G__44513__delegate = function (a,b,c,ds){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__44513 = function (a,b,c,var_args){
var ds = null;if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__44513__delegate.call(this,a,b,c,ds);};
G__44513.cljs$lang$maxFixedArity = 3;
G__44513.cljs$lang$applyTo = (function (arglist__44514){
var a = cljs.core.first(arglist__44514);
arglist__44514 = cljs.core.next(arglist__44514);
var b = cljs.core.first(arglist__44514);
arglist__44514 = cljs.core.next(arglist__44514);
var c = cljs.core.first(arglist__44514);
var ds = cljs.core.rest(arglist__44514);
return G__44513__delegate(a,b,c,ds);
});
G__44513.cljs$core$IFn$_invoke$arity$variadic = G__44513__delegate;
return G__44513;
})()
;
G__44512 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__44512__2.call(this,a,b);
case 3:
return G__44512__3.call(this,a,b,c);
default:
return G__44512__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44512.cljs$lang$maxFixedArity = 3;
G__44512.cljs$lang$applyTo = G__44512__4.cljs$lang$applyTo;
G__44512.cljs$core$IFn$_invoke$arity$2 = G__44512__2;
G__44512.cljs$core$IFn$_invoke$arity$3 = G__44512__3;
G__44512.cljs$core$IFn$_invoke$arity$variadic = G__44512__4.cljs$core$IFn$_invoke$arity$variadic;
return G__44512;
})()
});
var fnil__4 = (function (f,x,y,z){return (function() {
var G__44515 = null;
var G__44515__2 = (function (a,b){var G__44504 = (((a == null))?x:a);var G__44505 = (((b == null))?y:b);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44504,G__44505) : f.call(null,G__44504,G__44505));
});
var G__44515__3 = (function (a,b,c){var G__44506 = (((a == null))?x:a);var G__44507 = (((b == null))?y:b);var G__44508 = (((c == null))?z:c);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__44506,G__44507,G__44508) : f.call(null,G__44506,G__44507,G__44508));
});
var G__44515__4 = (function() { 
var G__44516__delegate = function (a,b,c,ds){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__44516 = function (a,b,c,var_args){
var ds = null;if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__44516__delegate.call(this,a,b,c,ds);};
G__44516.cljs$lang$maxFixedArity = 3;
G__44516.cljs$lang$applyTo = (function (arglist__44517){
var a = cljs.core.first(arglist__44517);
arglist__44517 = cljs.core.next(arglist__44517);
var b = cljs.core.first(arglist__44517);
arglist__44517 = cljs.core.next(arglist__44517);
var c = cljs.core.first(arglist__44517);
var ds = cljs.core.rest(arglist__44517);
return G__44516__delegate(a,b,c,ds);
});
G__44516.cljs$core$IFn$_invoke$arity$variadic = G__44516__delegate;
return G__44516;
})()
;
G__44515 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__44515__2.call(this,a,b);
case 3:
return G__44515__3.call(this,a,b,c);
default:
return G__44515__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44515.cljs$lang$maxFixedArity = 3;
G__44515.cljs$lang$applyTo = G__44515__4.cljs$lang$applyTo;
G__44515.cljs$core$IFn$_invoke$arity$2 = G__44515__2;
G__44515.cljs$core$IFn$_invoke$arity$3 = G__44515__3;
G__44515.cljs$core$IFn$_invoke$arity$variadic = G__44515__4.cljs$core$IFn$_invoke$arity$variadic;
return G__44515;
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
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__21231__auto___44566 = size;var i_44567 = (0);while(true){
if((i_44567 < n__21231__auto___44566))
{cljs.core.chunk_append(b,(function (){var G__44562 = (idx + i_44567);var G__44563 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_44567);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44562,G__44563) : f.call(null,G__44562,G__44563));
})());
{
var G__44568 = (i_44567 + (1));
i_44567 = G__44568;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),mapi((idx + size),cljs.core.chunk_rest(s)));
} else
{return cljs.core.cons((function (){var G__44564 = idx;var G__44565 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44564,G__44565) : f.call(null,G__44564,G__44565));
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
var keep__1 = (function (f){return (function (rf){return (function() {
var G__44587 = null;
var G__44587__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__44587__1 = (function (result){var G__44581 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__44581) : rf.call(null,G__44581));
});
var G__44587__2 = (function (result,input){var v = (function (){var G__44582 = input;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44582) : f.call(null,G__44582));
})();if((v == null))
{return result;
} else
{var G__44583 = result;var G__44584 = v;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__44583,G__44584) : rf.call(null,G__44583,G__44584));
}
});
G__44587 = function(result,input){
switch(arguments.length){
case 0:
return G__44587__0.call(this);
case 1:
return G__44587__1.call(this,result);
case 2:
return G__44587__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44587.cljs$core$IFn$_invoke$arity$0 = G__44587__0;
G__44587.cljs$core$IFn$_invoke$arity$1 = G__44587__1;
G__44587.cljs$core$IFn$_invoke$arity$2 = G__44587__2;
return G__44587;
})()
});
});
var keep__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__21231__auto___44588 = size;var i_44589 = (0);while(true){
if((i_44589 < n__21231__auto___44588))
{var x_44590 = (function (){var G__44585 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_44589);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44585) : f.call(null,G__44585));
})();if((x_44590 == null))
{} else
{cljs.core.chunk_append(b,x_44590);
}
{
var G__44591 = (i_44589 + (1));
i_44589 = G__44591;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else
{var x = (function (){var G__44586 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44586) : f.call(null,G__44586));
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
cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__44592 = this$__$1;return goog.getUid(G__44592);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__44593 = cljs.core.seq(self__.watches);var chunk__44594 = null;var count__44595 = (0);var i__44596 = (0);while(true){
if((i__44596 < count__44595))
{var vec__44597 = chunk__44594.cljs$core$IIndexed$_nth$arity$2(null,i__44596);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44597,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44597,(1),null);var G__44598_44607 = key;var G__44599_44608 = this$__$1;var G__44600_44609 = oldval;var G__44601_44610 = newval;(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__44598_44607,G__44599_44608,G__44600_44609,G__44601_44610) : f.call(null,G__44598_44607,G__44599_44608,G__44600_44609,G__44601_44610));
{
var G__44611 = seq__44593;
var G__44612 = chunk__44594;
var G__44613 = count__44595;
var G__44614 = (i__44596 + (1));
seq__44593 = G__44611;
chunk__44594 = G__44612;
count__44595 = G__44613;
i__44596 = G__44614;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__44593);if(temp__4126__auto__)
{var seq__44593__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__44593__$1))
{var c__21046__auto__ = cljs.core.chunk_first(seq__44593__$1);{
var G__44615 = cljs.core.chunk_rest(seq__44593__$1);
var G__44616 = c__21046__auto__;
var G__44617 = cljs.core.count(c__21046__auto__);
var G__44618 = (0);
seq__44593 = G__44615;
chunk__44594 = G__44616;
count__44595 = G__44617;
i__44596 = G__44618;
continue;
}
} else
{var vec__44602 = cljs.core.first(seq__44593__$1);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44602,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44602,(1),null);var G__44603_44619 = key;var G__44604_44620 = this$__$1;var G__44605_44621 = oldval;var G__44606_44622 = newval;(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__44603_44619,G__44604_44620,G__44605_44621,G__44606_44622) : f.call(null,G__44603_44619,G__44604_44620,G__44605_44621,G__44606_44622));
{
var G__44623 = cljs.core.next(seq__44593__$1);
var G__44624 = null;
var G__44625 = (0);
var G__44626 = (0);
seq__44593 = G__44623;
chunk__44594 = G__44624;
count__44595 = G__44625;
i__44596 = G__44626;
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
var G__44630__delegate = function (x,p__44627){var map__44629 = p__44627;var map__44629__$1 = ((cljs.core.seq_QMARK_(map__44629))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44629):map__44629);var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44629__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44629__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));return (new cljs.core.Atom(x,meta,validator,null));
};
var G__44630 = function (x,var_args){
var p__44627 = null;if (arguments.length > 1) {
  p__44627 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__44630__delegate.call(this,x,p__44627);};
G__44630.cljs$lang$maxFixedArity = 1;
G__44630.cljs$lang$applyTo = (function (arglist__44631){
var x = cljs.core.first(arglist__44631);
var p__44627 = cljs.core.rest(arglist__44631);
return G__44630__delegate(x,p__44627);
});
G__44630.cljs$core$IFn$_invoke$arity$variadic = G__44630__delegate;
return G__44630;
})()
;
atom = function(x,var_args){
var p__44627 = var_args;
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
{if(cljs.core.truth_((function (){var G__44634 = new_value;return (validate.cljs$core$IFn$_invoke$arity$1 ? validate.cljs$core$IFn$_invoke$arity$1(G__44634) : validate.call(null,G__44634));
})()))
{} else
{throw (new Error(("Assert failed: Validator rejected reference state\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__44635 = cljs.core.list(new cljs.core.Symbol(null,"validate","validate",1439230700,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null));return (cljs.core.pr_str.cljs$core$IFn$_invoke$arity$1 ? cljs.core.pr_str.cljs$core$IFn$_invoke$arity$1(G__44635) : cljs.core.pr_str.call(null,G__44635));
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
{return cljs.core.reset_BANG_(a,(function (){var G__44642 = a.state;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44642) : f.call(null,G__44642));
})());
} else
{return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$2(a,f);
}
});
var swap_BANG___3 = (function (a,f,x){if((a instanceof cljs.core.Atom))
{return cljs.core.reset_BANG_(a,(function (){var G__44643 = a.state;var G__44644 = x;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44643,G__44644) : f.call(null,G__44643,G__44644));
})());
} else
{return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,f,x);
}
});
var swap_BANG___4 = (function (a,f,x,y){if((a instanceof cljs.core.Atom))
{return cljs.core.reset_BANG_(a,(function (){var G__44645 = a.state;var G__44646 = x;var G__44647 = y;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__44645,G__44646,G__44647) : f.call(null,G__44645,G__44646,G__44647));
})());
} else
{return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,f,x,y);
}
});
var swap_BANG___5 = (function() { 
var G__44648__delegate = function (a,f,x,y,more){if((a instanceof cljs.core.Atom))
{return cljs.core.reset_BANG_(a,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,a.state,x,y,more));
} else
{return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$5(a,f,x,y,more);
}
};
var G__44648 = function (a,f,x,y,var_args){
var more = null;if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__44648__delegate.call(this,a,f,x,y,more);};
G__44648.cljs$lang$maxFixedArity = 4;
G__44648.cljs$lang$applyTo = (function (arglist__44649){
var a = cljs.core.first(arglist__44649);
arglist__44649 = cljs.core.next(arglist__44649);
var f = cljs.core.first(arglist__44649);
arglist__44649 = cljs.core.next(arglist__44649);
var x = cljs.core.first(arglist__44649);
arglist__44649 = cljs.core.next(arglist__44649);
var y = cljs.core.first(arglist__44649);
var more = cljs.core.rest(arglist__44649);
return G__44648__delegate(a,f,x,y,more);
});
G__44648.cljs$core$IFn$_invoke$arity$variadic = G__44648__delegate;
return G__44648;
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
var keep_indexed__1 = (function (f){return (function (rf){var ia = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));return ((function (ia){
return (function() {
var G__44716 = null;
var G__44716__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__44716__1 = (function (result){var G__44683 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__44683) : rf.call(null,G__44683));
});
var G__44716__2 = (function (result,input){var i = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ia,cljs.core.inc);var v = (function (){var G__44684 = i;var G__44685 = input;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44684,G__44685) : f.call(null,G__44684,G__44685));
})();if((v == null))
{return result;
} else
{var G__44686 = result;var G__44687 = v;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__44686,G__44687) : rf.call(null,G__44686,G__44687));
}
});
G__44716 = function(result,input){
switch(arguments.length){
case 0:
return G__44716__0.call(this);
case 1:
return G__44716__1.call(this,result);
case 2:
return G__44716__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44716.cljs$core$IFn$_invoke$arity$0 = G__44716__0;
G__44716.cljs$core$IFn$_invoke$arity$1 = G__44716__1;
G__44716.cljs$core$IFn$_invoke$arity$2 = G__44716__2;
return G__44716;
})()
;})(ia))
});
});
var keep_indexed__2 = (function (f,coll){var keepi = (function keepi(idx,coll__$1){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll__$1);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__21231__auto___44717 = size;var i_44718 = (0);while(true){
if((i_44718 < n__21231__auto___44717))
{var x_44719 = (function (){var G__44712 = (idx + i_44718);var G__44713 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_44718);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44712,G__44713) : f.call(null,G__44712,G__44713));
})();if((x_44719 == null))
{} else
{cljs.core.chunk_append(b,x_44719);
}
{
var G__44720 = (i_44718 + (1));
i_44718 = G__44720;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),keepi((idx + size),cljs.core.chunk_rest(s)));
} else
{var x = (function (){var G__44714 = idx;var G__44715 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44714,G__44715) : f.call(null,G__44714,G__44715));
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
var ep1__1 = (function (x){return cljs.core.boolean$((function (){var G__44934 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__44934) : p.call(null,G__44934));
})());
});
var ep1__2 = (function (x,y){return cljs.core.boolean$((function (){var and__19564__auto__ = (function (){var G__44936 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__44936) : p.call(null,G__44936));
})();if(cljs.core.truth_(and__19564__auto__))
{var G__44937 = y;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__44937) : p.call(null,G__44937));
} else
{return and__19564__auto__;
}
})());
});
var ep1__3 = (function (x,y,z){return cljs.core.boolean$((function (){var and__19564__auto__ = (function (){var G__44939 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__44939) : p.call(null,G__44939));
})();if(cljs.core.truth_(and__19564__auto__))
{var and__19564__auto____$1 = (function (){var G__44941 = y;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__44941) : p.call(null,G__44941));
})();if(cljs.core.truth_(and__19564__auto____$1))
{var G__44942 = z;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__44942) : p.call(null,G__44942));
} else
{return and__19564__auto____$1;
}
} else
{return and__19564__auto__;
}
})());
});
var ep1__4 = (function() { 
var G__45111__delegate = function (x,y,z,args){return cljs.core.boolean$((ep1.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_(p,args)));
};
var G__45111 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__45111__delegate.call(this,x,y,z,args);};
G__45111.cljs$lang$maxFixedArity = 3;
G__45111.cljs$lang$applyTo = (function (arglist__45112){
var x = cljs.core.first(arglist__45112);
arglist__45112 = cljs.core.next(arglist__45112);
var y = cljs.core.first(arglist__45112);
arglist__45112 = cljs.core.next(arglist__45112);
var z = cljs.core.first(arglist__45112);
var args = cljs.core.rest(arglist__45112);
return G__45111__delegate(x,y,z,args);
});
G__45111.cljs$core$IFn$_invoke$arity$variadic = G__45111__delegate;
return G__45111;
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
var ep2__1 = (function (x){return cljs.core.boolean$((function (){var and__19564__auto__ = (function (){var G__44974 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__44974) : p1.call(null,G__44974));
})();if(cljs.core.truth_(and__19564__auto__))
{var G__44975 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__44975) : p2.call(null,G__44975));
} else
{return and__19564__auto__;
}
})());
});
var ep2__2 = (function (x,y){return cljs.core.boolean$((function (){var and__19564__auto__ = (function (){var G__44977 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__44977) : p1.call(null,G__44977));
})();if(cljs.core.truth_(and__19564__auto__))
{var and__19564__auto____$1 = (function (){var G__44979 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__44979) : p1.call(null,G__44979));
})();if(cljs.core.truth_(and__19564__auto____$1))
{var and__19564__auto____$2 = (function (){var G__44981 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__44981) : p2.call(null,G__44981));
})();if(cljs.core.truth_(and__19564__auto____$2))
{var G__44982 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__44982) : p2.call(null,G__44982));
} else
{return and__19564__auto____$2;
}
} else
{return and__19564__auto____$1;
}
} else
{return and__19564__auto__;
}
})());
});
var ep2__3 = (function (x,y,z){return cljs.core.boolean$((function (){var and__19564__auto__ = (function (){var G__44984 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__44984) : p1.call(null,G__44984));
})();if(cljs.core.truth_(and__19564__auto__))
{var and__19564__auto____$1 = (function (){var G__44986 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__44986) : p1.call(null,G__44986));
})();if(cljs.core.truth_(and__19564__auto____$1))
{var and__19564__auto____$2 = (function (){var G__44988 = z;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__44988) : p1.call(null,G__44988));
})();if(cljs.core.truth_(and__19564__auto____$2))
{var and__19564__auto____$3 = (function (){var G__44990 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__44990) : p2.call(null,G__44990));
})();if(cljs.core.truth_(and__19564__auto____$3))
{var and__19564__auto____$4 = (function (){var G__44992 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__44992) : p2.call(null,G__44992));
})();if(cljs.core.truth_(and__19564__auto____$4))
{var G__44993 = z;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__44993) : p2.call(null,G__44993));
} else
{return and__19564__auto____$4;
}
} else
{return and__19564__auto____$3;
}
} else
{return and__19564__auto____$2;
}
} else
{return and__19564__auto____$1;
}
} else
{return and__19564__auto__;
}
})());
});
var ep2__4 = (function() { 
var G__45113__delegate = function (x,y,z,args){return cljs.core.boolean$((ep2.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__44721_SHARP_){var and__19564__auto__ = (function (){var G__44998 = p1__44721_SHARP_;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__44998) : p1.call(null,G__44998));
})();if(cljs.core.truth_(and__19564__auto__))
{var G__44999 = p1__44721_SHARP_;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__44999) : p2.call(null,G__44999));
} else
{return and__19564__auto__;
}
}),args)));
};
var G__45113 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__45113__delegate.call(this,x,y,z,args);};
G__45113.cljs$lang$maxFixedArity = 3;
G__45113.cljs$lang$applyTo = (function (arglist__45114){
var x = cljs.core.first(arglist__45114);
arglist__45114 = cljs.core.next(arglist__45114);
var y = cljs.core.first(arglist__45114);
arglist__45114 = cljs.core.next(arglist__45114);
var z = cljs.core.first(arglist__45114);
var args = cljs.core.rest(arglist__45114);
return G__45113__delegate(x,y,z,args);
});
G__45113.cljs$core$IFn$_invoke$arity$variadic = G__45113__delegate;
return G__45113;
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
var ep3__1 = (function (x){return cljs.core.boolean$((function (){var and__19564__auto__ = (function (){var G__45045 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__45045) : p1.call(null,G__45045));
})();if(cljs.core.truth_(and__19564__auto__))
{var and__19564__auto____$1 = (function (){var G__45047 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__45047) : p2.call(null,G__45047));
})();if(cljs.core.truth_(and__19564__auto____$1))
{var G__45048 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__45048) : p3.call(null,G__45048));
} else
{return and__19564__auto____$1;
}
} else
{return and__19564__auto__;
}
})());
});
var ep3__2 = (function (x,y){return cljs.core.boolean$((function (){var and__19564__auto__ = (function (){var G__45050 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__45050) : p1.call(null,G__45050));
})();if(cljs.core.truth_(and__19564__auto__))
{var and__19564__auto____$1 = (function (){var G__45052 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__45052) : p2.call(null,G__45052));
})();if(cljs.core.truth_(and__19564__auto____$1))
{var and__19564__auto____$2 = (function (){var G__45054 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__45054) : p3.call(null,G__45054));
})();if(cljs.core.truth_(and__19564__auto____$2))
{var and__19564__auto____$3 = (function (){var G__45056 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__45056) : p1.call(null,G__45056));
})();if(cljs.core.truth_(and__19564__auto____$3))
{var and__19564__auto____$4 = (function (){var G__45058 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__45058) : p2.call(null,G__45058));
})();if(cljs.core.truth_(and__19564__auto____$4))
{var G__45059 = y;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__45059) : p3.call(null,G__45059));
} else
{return and__19564__auto____$4;
}
} else
{return and__19564__auto____$3;
}
} else
{return and__19564__auto____$2;
}
} else
{return and__19564__auto____$1;
}
} else
{return and__19564__auto__;
}
})());
});
var ep3__3 = (function (x,y,z){return cljs.core.boolean$((function (){var and__19564__auto__ = (function (){var G__45061 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__45061) : p1.call(null,G__45061));
})();if(cljs.core.truth_(and__19564__auto__))
{var and__19564__auto____$1 = (function (){var G__45063 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__45063) : p2.call(null,G__45063));
})();if(cljs.core.truth_(and__19564__auto____$1))
{var and__19564__auto____$2 = (function (){var G__45065 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__45065) : p3.call(null,G__45065));
})();if(cljs.core.truth_(and__19564__auto____$2))
{var and__19564__auto____$3 = (function (){var G__45067 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__45067) : p1.call(null,G__45067));
})();if(cljs.core.truth_(and__19564__auto____$3))
{var and__19564__auto____$4 = (function (){var G__45069 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__45069) : p2.call(null,G__45069));
})();if(cljs.core.truth_(and__19564__auto____$4))
{var and__19564__auto____$5 = (function (){var G__45071 = y;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__45071) : p3.call(null,G__45071));
})();if(cljs.core.truth_(and__19564__auto____$5))
{var and__19564__auto____$6 = (function (){var G__45073 = z;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__45073) : p1.call(null,G__45073));
})();if(cljs.core.truth_(and__19564__auto____$6))
{var and__19564__auto____$7 = (function (){var G__45075 = z;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__45075) : p2.call(null,G__45075));
})();if(cljs.core.truth_(and__19564__auto____$7))
{var G__45076 = z;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__45076) : p3.call(null,G__45076));
} else
{return and__19564__auto____$7;
}
} else
{return and__19564__auto____$6;
}
} else
{return and__19564__auto____$5;
}
} else
{return and__19564__auto____$4;
}
} else
{return and__19564__auto____$3;
}
} else
{return and__19564__auto____$2;
}
} else
{return and__19564__auto____$1;
}
} else
{return and__19564__auto__;
}
})());
});
var ep3__4 = (function() { 
var G__45115__delegate = function (x,y,z,args){return cljs.core.boolean$((ep3.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__44722_SHARP_){var and__19564__auto__ = (function (){var G__45083 = p1__44722_SHARP_;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__45083) : p1.call(null,G__45083));
})();if(cljs.core.truth_(and__19564__auto__))
{var and__19564__auto____$1 = (function (){var G__45085 = p1__44722_SHARP_;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__45085) : p2.call(null,G__45085));
})();if(cljs.core.truth_(and__19564__auto____$1))
{var G__45086 = p1__44722_SHARP_;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__45086) : p3.call(null,G__45086));
} else
{return and__19564__auto____$1;
}
} else
{return and__19564__auto__;
}
}),args)));
};
var G__45115 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__45115__delegate.call(this,x,y,z,args);};
G__45115.cljs$lang$maxFixedArity = 3;
G__45115.cljs$lang$applyTo = (function (arglist__45116){
var x = cljs.core.first(arglist__45116);
arglist__45116 = cljs.core.next(arglist__45116);
var y = cljs.core.first(arglist__45116);
arglist__45116 = cljs.core.next(arglist__45116);
var z = cljs.core.first(arglist__45116);
var args = cljs.core.rest(arglist__45116);
return G__45115__delegate(x,y,z,args);
});
G__45115.cljs$core$IFn$_invoke$arity$variadic = G__45115__delegate;
return G__45115;
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
var G__45117__delegate = function (p1,p2,p3,ps){var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);return ((function (ps__$1){
return (function() {
var epn = null;
var epn__0 = (function (){return true;
});
var epn__1 = (function (x){return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__44723_SHARP_){var G__45102 = x;return (p1__44723_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__44723_SHARP_.cljs$core$IFn$_invoke$arity$1(G__45102) : p1__44723_SHARP_.call(null,G__45102));
});})(ps__$1))
,ps__$1);
});
var epn__2 = (function (x,y){return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__44724_SHARP_){var and__19564__auto__ = (function (){var G__45104 = x;return (p1__44724_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__44724_SHARP_.cljs$core$IFn$_invoke$arity$1(G__45104) : p1__44724_SHARP_.call(null,G__45104));
})();if(cljs.core.truth_(and__19564__auto__))
{var G__45105 = y;return (p1__44724_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__44724_SHARP_.cljs$core$IFn$_invoke$arity$1(G__45105) : p1__44724_SHARP_.call(null,G__45105));
} else
{return and__19564__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__3 = (function (x,y,z){return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__44725_SHARP_){var and__19564__auto__ = (function (){var G__45107 = x;return (p1__44725_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__44725_SHARP_.cljs$core$IFn$_invoke$arity$1(G__45107) : p1__44725_SHARP_.call(null,G__45107));
})();if(cljs.core.truth_(and__19564__auto__))
{var and__19564__auto____$1 = (function (){var G__45109 = y;return (p1__44725_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__44725_SHARP_.cljs$core$IFn$_invoke$arity$1(G__45109) : p1__44725_SHARP_.call(null,G__45109));
})();if(cljs.core.truth_(and__19564__auto____$1))
{var G__45110 = z;return (p1__44725_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__44725_SHARP_.cljs$core$IFn$_invoke$arity$1(G__45110) : p1__44725_SHARP_.call(null,G__45110));
} else
{return and__19564__auto____$1;
}
} else
{return and__19564__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__4 = (function() { 
var G__45118__delegate = function (x,y,z,args){return cljs.core.boolean$((epn.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__44726_SHARP_){return cljs.core.every_QMARK_(p1__44726_SHARP_,args);
});})(ps__$1))
,ps__$1)));
};
var G__45118 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__45118__delegate.call(this,x,y,z,args);};
G__45118.cljs$lang$maxFixedArity = 3;
G__45118.cljs$lang$applyTo = (function (arglist__45119){
var x = cljs.core.first(arglist__45119);
arglist__45119 = cljs.core.next(arglist__45119);
var y = cljs.core.first(arglist__45119);
arglist__45119 = cljs.core.next(arglist__45119);
var z = cljs.core.first(arglist__45119);
var args = cljs.core.rest(arglist__45119);
return G__45118__delegate(x,y,z,args);
});
G__45118.cljs$core$IFn$_invoke$arity$variadic = G__45118__delegate;
return G__45118;
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
var G__45117 = function (p1,p2,p3,var_args){
var ps = null;if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__45117__delegate.call(this,p1,p2,p3,ps);};
G__45117.cljs$lang$maxFixedArity = 3;
G__45117.cljs$lang$applyTo = (function (arglist__45120){
var p1 = cljs.core.first(arglist__45120);
arglist__45120 = cljs.core.next(arglist__45120);
var p2 = cljs.core.first(arglist__45120);
arglist__45120 = cljs.core.next(arglist__45120);
var p3 = cljs.core.first(arglist__45120);
var ps = cljs.core.rest(arglist__45120);
return G__45117__delegate(p1,p2,p3,ps);
});
G__45117.cljs$core$IFn$_invoke$arity$variadic = G__45117__delegate;
return G__45117;
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
var sp1__1 = (function (x){var G__45326 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__45326) : p.call(null,G__45326));
});
var sp1__2 = (function (x,y){var or__19586__auto__ = (function (){var G__45328 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__45328) : p.call(null,G__45328));
})();if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{var G__45329 = y;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__45329) : p.call(null,G__45329));
}
});
var sp1__3 = (function (x,y,z){var or__19586__auto__ = (function (){var G__45331 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__45331) : p.call(null,G__45331));
})();if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (function (){var G__45333 = y;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__45333) : p.call(null,G__45333));
})();if(cljs.core.truth_(or__19586__auto____$1))
{return or__19586__auto____$1;
} else
{var G__45334 = z;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__45334) : p.call(null,G__45334));
}
}
});
var sp1__4 = (function() { 
var G__45495__delegate = function (x,y,z,args){var or__19586__auto__ = sp1.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{return cljs.core.some(p,args);
}
};
var G__45495 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__45495__delegate.call(this,x,y,z,args);};
G__45495.cljs$lang$maxFixedArity = 3;
G__45495.cljs$lang$applyTo = (function (arglist__45496){
var x = cljs.core.first(arglist__45496);
arglist__45496 = cljs.core.next(arglist__45496);
var y = cljs.core.first(arglist__45496);
arglist__45496 = cljs.core.next(arglist__45496);
var z = cljs.core.first(arglist__45496);
var args = cljs.core.rest(arglist__45496);
return G__45495__delegate(x,y,z,args);
});
G__45495.cljs$core$IFn$_invoke$arity$variadic = G__45495__delegate;
return G__45495;
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
var sp2__1 = (function (x){var or__19586__auto__ = (function (){var G__45366 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__45366) : p1.call(null,G__45366));
})();if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{var G__45367 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__45367) : p2.call(null,G__45367));
}
});
var sp2__2 = (function (x,y){var or__19586__auto__ = (function (){var G__45369 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__45369) : p1.call(null,G__45369));
})();if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (function (){var G__45371 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__45371) : p1.call(null,G__45371));
})();if(cljs.core.truth_(or__19586__auto____$1))
{return or__19586__auto____$1;
} else
{var or__19586__auto____$2 = (function (){var G__45373 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__45373) : p2.call(null,G__45373));
})();if(cljs.core.truth_(or__19586__auto____$2))
{return or__19586__auto____$2;
} else
{var G__45374 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__45374) : p2.call(null,G__45374));
}
}
}
});
var sp2__3 = (function (x,y,z){var or__19586__auto__ = (function (){var G__45376 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__45376) : p1.call(null,G__45376));
})();if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (function (){var G__45378 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__45378) : p1.call(null,G__45378));
})();if(cljs.core.truth_(or__19586__auto____$1))
{return or__19586__auto____$1;
} else
{var or__19586__auto____$2 = (function (){var G__45380 = z;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__45380) : p1.call(null,G__45380));
})();if(cljs.core.truth_(or__19586__auto____$2))
{return or__19586__auto____$2;
} else
{var or__19586__auto____$3 = (function (){var G__45382 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__45382) : p2.call(null,G__45382));
})();if(cljs.core.truth_(or__19586__auto____$3))
{return or__19586__auto____$3;
} else
{var or__19586__auto____$4 = (function (){var G__45384 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__45384) : p2.call(null,G__45384));
})();if(cljs.core.truth_(or__19586__auto____$4))
{return or__19586__auto____$4;
} else
{var G__45385 = z;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__45385) : p2.call(null,G__45385));
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__45497__delegate = function (x,y,z,args){var or__19586__auto__ = sp2.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{return cljs.core.some(((function (or__19586__auto__){
return (function (p1__45121_SHARP_){var or__19586__auto____$1 = (function (){var G__45387 = p1__45121_SHARP_;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__45387) : p1.call(null,G__45387));
})();if(cljs.core.truth_(or__19586__auto____$1))
{return or__19586__auto____$1;
} else
{var G__45388 = p1__45121_SHARP_;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__45388) : p2.call(null,G__45388));
}
});})(or__19586__auto__))
,args);
}
};
var G__45497 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__45497__delegate.call(this,x,y,z,args);};
G__45497.cljs$lang$maxFixedArity = 3;
G__45497.cljs$lang$applyTo = (function (arglist__45498){
var x = cljs.core.first(arglist__45498);
arglist__45498 = cljs.core.next(arglist__45498);
var y = cljs.core.first(arglist__45498);
arglist__45498 = cljs.core.next(arglist__45498);
var z = cljs.core.first(arglist__45498);
var args = cljs.core.rest(arglist__45498);
return G__45497__delegate(x,y,z,args);
});
G__45497.cljs$core$IFn$_invoke$arity$variadic = G__45497__delegate;
return G__45497;
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
var sp3__1 = (function (x){var or__19586__auto__ = (function (){var G__45434 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__45434) : p1.call(null,G__45434));
})();if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (function (){var G__45436 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__45436) : p2.call(null,G__45436));
})();if(cljs.core.truth_(or__19586__auto____$1))
{return or__19586__auto____$1;
} else
{var G__45437 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__45437) : p3.call(null,G__45437));
}
}
});
var sp3__2 = (function (x,y){var or__19586__auto__ = (function (){var G__45439 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__45439) : p1.call(null,G__45439));
})();if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (function (){var G__45441 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__45441) : p2.call(null,G__45441));
})();if(cljs.core.truth_(or__19586__auto____$1))
{return or__19586__auto____$1;
} else
{var or__19586__auto____$2 = (function (){var G__45443 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__45443) : p3.call(null,G__45443));
})();if(cljs.core.truth_(or__19586__auto____$2))
{return or__19586__auto____$2;
} else
{var or__19586__auto____$3 = (function (){var G__45445 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__45445) : p1.call(null,G__45445));
})();if(cljs.core.truth_(or__19586__auto____$3))
{return or__19586__auto____$3;
} else
{var or__19586__auto____$4 = (function (){var G__45447 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__45447) : p2.call(null,G__45447));
})();if(cljs.core.truth_(or__19586__auto____$4))
{return or__19586__auto____$4;
} else
{var G__45448 = y;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__45448) : p3.call(null,G__45448));
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){var or__19586__auto__ = (function (){var G__45450 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__45450) : p1.call(null,G__45450));
})();if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (function (){var G__45452 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__45452) : p2.call(null,G__45452));
})();if(cljs.core.truth_(or__19586__auto____$1))
{return or__19586__auto____$1;
} else
{var or__19586__auto____$2 = (function (){var G__45454 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__45454) : p3.call(null,G__45454));
})();if(cljs.core.truth_(or__19586__auto____$2))
{return or__19586__auto____$2;
} else
{var or__19586__auto____$3 = (function (){var G__45456 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__45456) : p1.call(null,G__45456));
})();if(cljs.core.truth_(or__19586__auto____$3))
{return or__19586__auto____$3;
} else
{var or__19586__auto____$4 = (function (){var G__45458 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__45458) : p2.call(null,G__45458));
})();if(cljs.core.truth_(or__19586__auto____$4))
{return or__19586__auto____$4;
} else
{var or__19586__auto____$5 = (function (){var G__45460 = y;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__45460) : p3.call(null,G__45460));
})();if(cljs.core.truth_(or__19586__auto____$5))
{return or__19586__auto____$5;
} else
{var or__19586__auto____$6 = (function (){var G__45462 = z;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__45462) : p1.call(null,G__45462));
})();if(cljs.core.truth_(or__19586__auto____$6))
{return or__19586__auto____$6;
} else
{var or__19586__auto____$7 = (function (){var G__45464 = z;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__45464) : p2.call(null,G__45464));
})();if(cljs.core.truth_(or__19586__auto____$7))
{return or__19586__auto____$7;
} else
{var G__45465 = z;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__45465) : p3.call(null,G__45465));
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
var G__45499__delegate = function (x,y,z,args){var or__19586__auto__ = sp3.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{return cljs.core.some(((function (or__19586__auto__){
return (function (p1__45122_SHARP_){var or__19586__auto____$1 = (function (){var G__45467 = p1__45122_SHARP_;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__45467) : p1.call(null,G__45467));
})();if(cljs.core.truth_(or__19586__auto____$1))
{return or__19586__auto____$1;
} else
{var or__19586__auto____$2 = (function (){var G__45469 = p1__45122_SHARP_;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__45469) : p2.call(null,G__45469));
})();if(cljs.core.truth_(or__19586__auto____$2))
{return or__19586__auto____$2;
} else
{var G__45470 = p1__45122_SHARP_;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__45470) : p3.call(null,G__45470));
}
}
});})(or__19586__auto__))
,args);
}
};
var G__45499 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__45499__delegate.call(this,x,y,z,args);};
G__45499.cljs$lang$maxFixedArity = 3;
G__45499.cljs$lang$applyTo = (function (arglist__45500){
var x = cljs.core.first(arglist__45500);
arglist__45500 = cljs.core.next(arglist__45500);
var y = cljs.core.first(arglist__45500);
arglist__45500 = cljs.core.next(arglist__45500);
var z = cljs.core.first(arglist__45500);
var args = cljs.core.rest(arglist__45500);
return G__45499__delegate(x,y,z,args);
});
G__45499.cljs$core$IFn$_invoke$arity$variadic = G__45499__delegate;
return G__45499;
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
var G__45501__delegate = function (p1,p2,p3,ps){var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);return ((function (ps__$1){
return (function() {
var spn = null;
var spn__0 = (function (){return null;
});
var spn__1 = (function (x){return cljs.core.some(((function (ps__$1){
return (function (p1__45123_SHARP_){var G__45486 = x;return (p1__45123_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45123_SHARP_.cljs$core$IFn$_invoke$arity$1(G__45486) : p1__45123_SHARP_.call(null,G__45486));
});})(ps__$1))
,ps__$1);
});
var spn__2 = (function (x,y){return cljs.core.some(((function (ps__$1){
return (function (p1__45124_SHARP_){var or__19586__auto__ = (function (){var G__45488 = x;return (p1__45124_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45124_SHARP_.cljs$core$IFn$_invoke$arity$1(G__45488) : p1__45124_SHARP_.call(null,G__45488));
})();if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{var G__45489 = y;return (p1__45124_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45124_SHARP_.cljs$core$IFn$_invoke$arity$1(G__45489) : p1__45124_SHARP_.call(null,G__45489));
}
});})(ps__$1))
,ps__$1);
});
var spn__3 = (function (x,y,z){return cljs.core.some(((function (ps__$1){
return (function (p1__45125_SHARP_){var or__19586__auto__ = (function (){var G__45491 = x;return (p1__45125_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45125_SHARP_.cljs$core$IFn$_invoke$arity$1(G__45491) : p1__45125_SHARP_.call(null,G__45491));
})();if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (function (){var G__45493 = y;return (p1__45125_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45125_SHARP_.cljs$core$IFn$_invoke$arity$1(G__45493) : p1__45125_SHARP_.call(null,G__45493));
})();if(cljs.core.truth_(or__19586__auto____$1))
{return or__19586__auto____$1;
} else
{var G__45494 = z;return (p1__45125_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45125_SHARP_.cljs$core$IFn$_invoke$arity$1(G__45494) : p1__45125_SHARP_.call(null,G__45494));
}
}
});})(ps__$1))
,ps__$1);
});
var spn__4 = (function() { 
var G__45502__delegate = function (x,y,z,args){var or__19586__auto__ = spn.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{return cljs.core.some(((function (or__19586__auto__,ps__$1){
return (function (p1__45126_SHARP_){return cljs.core.some(p1__45126_SHARP_,args);
});})(or__19586__auto__,ps__$1))
,ps__$1);
}
};
var G__45502 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__45502__delegate.call(this,x,y,z,args);};
G__45502.cljs$lang$maxFixedArity = 3;
G__45502.cljs$lang$applyTo = (function (arglist__45503){
var x = cljs.core.first(arglist__45503);
arglist__45503 = cljs.core.next(arglist__45503);
var y = cljs.core.first(arglist__45503);
arglist__45503 = cljs.core.next(arglist__45503);
var z = cljs.core.first(arglist__45503);
var args = cljs.core.rest(arglist__45503);
return G__45502__delegate(x,y,z,args);
});
G__45502.cljs$core$IFn$_invoke$arity$variadic = G__45502__delegate;
return G__45502;
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
var G__45501 = function (p1,p2,p3,var_args){
var ps = null;if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__45501__delegate.call(this,p1,p2,p3,ps);};
G__45501.cljs$lang$maxFixedArity = 3;
G__45501.cljs$lang$applyTo = (function (arglist__45504){
var p1 = cljs.core.first(arglist__45504);
arglist__45504 = cljs.core.next(arglist__45504);
var p2 = cljs.core.first(arglist__45504);
arglist__45504 = cljs.core.next(arglist__45504);
var p3 = cljs.core.first(arglist__45504);
var ps = cljs.core.rest(arglist__45504);
return G__45501__delegate(p1,p2,p3,ps);
});
G__45501.cljs$core$IFn$_invoke$arity$variadic = G__45501__delegate;
return G__45501;
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
var map__1 = (function (f){return (function (rf){return (function() {
var G__45559 = null;
var G__45559__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__45559__1 = (function (result){var G__45545 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__45545) : rf.call(null,G__45545));
});
var G__45559__2 = (function (result,input){var G__45546 = result;var G__45547 = (function (){var G__45548 = input;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__45548) : f.call(null,G__45548));
})();return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__45546,G__45547) : rf.call(null,G__45546,G__45547));
});
var G__45559__3 = (function() { 
var G__45560__delegate = function (result,input,inputs){var G__45549 = result;var G__45550 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,input,inputs);return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__45549,G__45550) : rf.call(null,G__45549,G__45550));
};
var G__45560 = function (result,input,var_args){
var inputs = null;if (arguments.length > 2) {
  inputs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__45560__delegate.call(this,result,input,inputs);};
G__45560.cljs$lang$maxFixedArity = 2;
G__45560.cljs$lang$applyTo = (function (arglist__45561){
var result = cljs.core.first(arglist__45561);
arglist__45561 = cljs.core.next(arglist__45561);
var input = cljs.core.first(arglist__45561);
var inputs = cljs.core.rest(arglist__45561);
return G__45560__delegate(result,input,inputs);
});
G__45560.cljs$core$IFn$_invoke$arity$variadic = G__45560__delegate;
return G__45560;
})()
;
G__45559 = function(result,input,var_args){
var inputs = var_args;
switch(arguments.length){
case 0:
return G__45559__0.call(this);
case 1:
return G__45559__1.call(this,result);
case 2:
return G__45559__2.call(this,result,input);
default:
return G__45559__3.cljs$core$IFn$_invoke$arity$variadic(result,input, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45559.cljs$lang$maxFixedArity = 2;
G__45559.cljs$lang$applyTo = G__45559__3.cljs$lang$applyTo;
G__45559.cljs$core$IFn$_invoke$arity$0 = G__45559__0;
G__45559.cljs$core$IFn$_invoke$arity$1 = G__45559__1;
G__45559.cljs$core$IFn$_invoke$arity$2 = G__45559__2;
G__45559.cljs$core$IFn$_invoke$arity$variadic = G__45559__3.cljs$core$IFn$_invoke$arity$variadic;
return G__45559;
})()
});
});
var map__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__21231__auto___45562 = size;var i_45563 = (0);while(true){
if((i_45563 < n__21231__auto___45562))
{cljs.core.chunk_append(b,(function (){var G__45551 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_45563);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__45551) : f.call(null,G__45551));
})());
{
var G__45564 = (i_45563 + (1));
i_45563 = G__45564;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else
{return cljs.core.cons((function (){var G__45552 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__45552) : f.call(null,G__45552));
})(),map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s)));
}
} else
{return null;
}
}),null,null));
});
var map__3 = (function (f,c1,c2){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq(c1);var s2 = cljs.core.seq(c2);if((s1) && (s2))
{return cljs.core.cons((function (){var G__45553 = cljs.core.first(s1);var G__45554 = cljs.core.first(s2);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__45553,G__45554) : f.call(null,G__45553,G__45554));
})(),map.cljs$core$IFn$_invoke$arity$3(f,cljs.core.rest(s1),cljs.core.rest(s2)));
} else
{return null;
}
}),null,null));
});
var map__4 = (function (f,c1,c2,c3){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq(c1);var s2 = cljs.core.seq(c2);var s3 = cljs.core.seq(c3);if((s1) && (s2) && (s3))
{return cljs.core.cons((function (){var G__45555 = cljs.core.first(s1);var G__45556 = cljs.core.first(s2);var G__45557 = cljs.core.first(s3);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__45555,G__45556,G__45557) : f.call(null,G__45555,G__45556,G__45557));
})(),map.cljs$core$IFn$_invoke$arity$4(f,cljs.core.rest(s1),cljs.core.rest(s2),cljs.core.rest(s3)));
} else
{return null;
}
}),null,null));
});
var map__5 = (function() { 
var G__45565__delegate = function (f,c1,c2,c3,colls){var step = (function step(cs){return (new cljs.core.LazySeq(null,(function (){var ss = map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cs);if(cljs.core.every_QMARK_(cljs.core.identity,ss))
{return cljs.core.cons(map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),step(map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else
{return null;
}
}),null,null));
});return map.cljs$core$IFn$_invoke$arity$2(((function (step){
return (function (p1__45505_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,p1__45505_SHARP_);
});})(step))
,step(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c3,cljs.core.array_seq([c2,c1], 0))));
};
var G__45565 = function (f,c1,c2,c3,var_args){
var colls = null;if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__45565__delegate.call(this,f,c1,c2,c3,colls);};
G__45565.cljs$lang$maxFixedArity = 4;
G__45565.cljs$lang$applyTo = (function (arglist__45566){
var f = cljs.core.first(arglist__45566);
arglist__45566 = cljs.core.next(arglist__45566);
var c1 = cljs.core.first(arglist__45566);
arglist__45566 = cljs.core.next(arglist__45566);
var c2 = cljs.core.first(arglist__45566);
arglist__45566 = cljs.core.next(arglist__45566);
var c3 = cljs.core.first(arglist__45566);
var colls = cljs.core.rest(arglist__45566);
return G__45565__delegate(f,c1,c2,c3,colls);
});
G__45565.cljs$core$IFn$_invoke$arity$variadic = G__45565__delegate;
return G__45565;
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
var take__1 = (function (n){return (function (rf){var na = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(n);return ((function (na){
return (function() {
var G__45575 = null;
var G__45575__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__45575__1 = (function (result){var G__45572 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__45572) : rf.call(null,G__45572));
});
var G__45575__2 = (function (result,input){var n__$1 = cljs.core.deref(na);var nn = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(na,cljs.core.dec);var result__$1 = (((n__$1 > (0)))?(function (){var G__45573 = result;var G__45574 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__45573,G__45574) : rf.call(null,G__45573,G__45574));
})():result);if(!((nn > (0))))
{return cljs.core.reduced(result__$1);
} else
{return result__$1;
}
});
G__45575 = function(result,input){
switch(arguments.length){
case 0:
return G__45575__0.call(this);
case 1:
return G__45575__1.call(this,result);
case 2:
return G__45575__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45575.cljs$core$IFn$_invoke$arity$0 = G__45575__0;
G__45575.cljs$core$IFn$_invoke$arity$1 = G__45575__1;
G__45575.cljs$core$IFn$_invoke$arity$2 = G__45575__2;
return G__45575;
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
var drop__1 = (function (n){return (function (rf){var na = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(n);return ((function (na){
return (function() {
var G__45582 = null;
var G__45582__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__45582__1 = (function (result){var G__45579 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__45579) : rf.call(null,G__45579));
});
var G__45582__2 = (function (result,input){var n__$1 = cljs.core.deref(na);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(na,cljs.core.dec);
if((n__$1 > (0)))
{return result;
} else
{var G__45580 = result;var G__45581 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__45580,G__45581) : rf.call(null,G__45580,G__45581));
}
});
G__45582 = function(result,input){
switch(arguments.length){
case 0:
return G__45582__0.call(this);
case 1:
return G__45582__1.call(this,result);
case 2:
return G__45582__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45582.cljs$core$IFn$_invoke$arity$0 = G__45582__0;
G__45582.cljs$core$IFn$_invoke$arity$1 = G__45582__1;
G__45582.cljs$core$IFn$_invoke$arity$2 = G__45582__2;
return G__45582;
})()
;})(na))
});
});
var drop__2 = (function (n,coll){var step = (function (n__$1,coll__$1){while(true){
var s = cljs.core.seq(coll__$1);if(((n__$1 > (0))) && (s))
{{
var G__45583 = (n__$1 - (1));
var G__45584 = cljs.core.rest(s);
n__$1 = G__45583;
coll__$1 = G__45584;
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
var G__45587 = cljs.core.next(s);
var G__45588 = cljs.core.next(lead);
s = G__45587;
lead = G__45588;
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
var drop_while__1 = (function (pred){return (function (rf){var da = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);return ((function (da){
return (function() {
var G__45601 = null;
var G__45601__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__45601__1 = (function (result){var G__45595 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__45595) : rf.call(null,G__45595));
});
var G__45601__2 = (function (result,input){var drop_QMARK_ = cljs.core.deref(da);if(cljs.core.truth_((function (){var and__19564__auto__ = drop_QMARK_;if(cljs.core.truth_(and__19564__auto__))
{var G__45596 = input;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__45596) : pred.call(null,G__45596));
} else
{return and__19564__auto__;
}
})()))
{return result;
} else
{cljs.core.reset_BANG_(da,null);
var G__45597 = result;var G__45598 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__45597,G__45598) : rf.call(null,G__45597,G__45598));
}
});
G__45601 = function(result,input){
switch(arguments.length){
case 0:
return G__45601__0.call(this);
case 1:
return G__45601__1.call(this,result);
case 2:
return G__45601__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45601.cljs$core$IFn$_invoke$arity$0 = G__45601__0;
G__45601.cljs$core$IFn$_invoke$arity$1 = G__45601__1;
G__45601.cljs$core$IFn$_invoke$arity$2 = G__45601__2;
return G__45601;
})()
;})(da))
});
});
var drop_while__2 = (function (pred,coll){var step = (function (pred__$1,coll__$1){while(true){
var s = cljs.core.seq(coll__$1);if(cljs.core.truth_((function (){var and__19564__auto__ = s;if(and__19564__auto__)
{var G__45600 = cljs.core.first(s);return (pred__$1.cljs$core$IFn$_invoke$arity$1 ? pred__$1.cljs$core$IFn$_invoke$arity$1(G__45600) : pred__$1.call(null,G__45600));
} else
{return and__19564__auto__;
}
})()))
{{
var G__45602 = pred__$1;
var G__45603 = cljs.core.rest(s);
pred__$1 = G__45602;
coll__$1 = G__45603;
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
cljs.core.iterate = (function iterate(f,x){return cljs.core.cons(x,(new cljs.core.LazySeq(null,(function (){return iterate(f,(function (){var G__45612 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__45612) : f.call(null,G__45612));
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
var G__45615__delegate = function (c1,c2,colls){return (new cljs.core.LazySeq(null,(function (){var ss = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.array_seq([c1], 0)));if(cljs.core.every_QMARK_(cljs.core.identity,ss))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(interleave,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else
{return null;
}
}),null,null));
};
var G__45615 = function (c1,c2,var_args){
var colls = null;if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__45615__delegate.call(this,c1,c2,colls);};
G__45615.cljs$lang$maxFixedArity = 2;
G__45615.cljs$lang$applyTo = (function (arglist__45616){
var c1 = cljs.core.first(arglist__45616);
arglist__45616 = cljs.core.next(arglist__45616);
var c2 = cljs.core.first(arglist__45616);
var colls = cljs.core.rest(arglist__45616);
return G__45615__delegate(c1,c2,colls);
});
G__45615.cljs$core$IFn$_invoke$arity$variadic = G__45615__delegate;
return G__45615;
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
var G__45625__delegate = function (f,colls){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,f,colls));
};
var G__45625 = function (f,var_args){
var colls = null;if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__45625__delegate.call(this,f,colls);};
G__45625.cljs$lang$maxFixedArity = 1;
G__45625.cljs$lang$applyTo = (function (arglist__45626){
var f = cljs.core.first(arglist__45626);
var colls = cljs.core.rest(arglist__45626);
return G__45625__delegate(f,colls);
});
G__45625.cljs$core$IFn$_invoke$arity$variadic = G__45625__delegate;
return G__45625;
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
var filter__1 = (function (pred){return (function (rf){return (function() {
var G__45645 = null;
var G__45645__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__45645__1 = (function (result){var G__45639 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__45639) : rf.call(null,G__45639));
});
var G__45645__2 = (function (result,input){if(cljs.core.truth_((function (){var G__45640 = input;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__45640) : pred.call(null,G__45640));
})()))
{var G__45641 = result;var G__45642 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__45641,G__45642) : rf.call(null,G__45641,G__45642));
} else
{return result;
}
});
G__45645 = function(result,input){
switch(arguments.length){
case 0:
return G__45645__0.call(this);
case 1:
return G__45645__1.call(this,result);
case 2:
return G__45645__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45645.cljs$core$IFn$_invoke$arity$0 = G__45645__0;
G__45645.cljs$core$IFn$_invoke$arity$1 = G__45645__1;
G__45645.cljs$core$IFn$_invoke$arity$2 = G__45645__2;
return G__45645;
})()
});
});
var filter__2 = (function (pred,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__21231__auto___45646 = size;var i_45647 = (0);while(true){
if((i_45647 < n__21231__auto___45646))
{if(cljs.core.truth_((function (){var G__45643 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_45647);return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__45643) : pred.call(null,G__45643));
})()))
{cljs.core.chunk_append(b,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_45647));
} else
{}
{
var G__45648 = (i_45647 + (1));
i_45647 = G__45648;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),filter.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.chunk_rest(s)));
} else
{var f = cljs.core.first(s);var r = cljs.core.rest(s);if(cljs.core.truth_((function (){var G__45644 = f;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__45644) : pred.call(null,G__45644));
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
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){var walk = (function walk(node){return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(node,(cljs.core.truth_((function (){var G__45655 = node;return (branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(G__45655) : branch_QMARK_.call(null,G__45655));
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(walk,cljs.core.array_seq([(function (){var G__45656 = node;return (children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(G__45656) : children.call(null,G__45656));
})()], 0)):null));
}),null,null));
});return walk(root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45657_SHARP_){return !(cljs.core.sequential_QMARK_(p1__45657_SHARP_));
}),cljs.core.rest(cljs.core.tree_seq(cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined. A transducer may be supplied.
*/
cljs.core.into = (function() {
var into = null;
var into__2 = (function (to,from){if(!((to == null)))
{if((function (){var G__45660 = to;if(G__45660)
{var bit__20838__auto__ = (G__45660.cljs$lang$protocol_mask$partition1$ & (4));if((bit__20838__auto__) || (G__45660.cljs$core$IEditableCollection$))
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
var into__3 = (function (to,xform,from){if((function (){var G__45661 = to;if(G__45661)
{var bit__20838__auto__ = (G__45661.cljs$lang$protocol_mask$partition1$ & (4));if((bit__20838__auto__) || (G__45661.cljs$core$IEditableCollection$))
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
var mapv__2 = (function (f,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__45663 = o;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__45663) : f.call(null,G__45663));
})());
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$4(f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__45664__delegate = function (f,c1,c2,c3,colls){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map,f,c1,c2,c3,cljs.core.array_seq([colls], 0)));
};
var G__45664 = function (f,c1,c2,c3,var_args){
var colls = null;if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__45664__delegate.call(this,f,c1,c2,c3,colls);};
G__45664.cljs$lang$maxFixedArity = 4;
G__45664.cljs$lang$applyTo = (function (arglist__45665){
var f = cljs.core.first(arglist__45665);
arglist__45665 = cljs.core.next(arglist__45665);
var c1 = cljs.core.first(arglist__45665);
arglist__45665 = cljs.core.next(arglist__45665);
var c2 = cljs.core.first(arglist__45665);
arglist__45665 = cljs.core.next(arglist__45665);
var c3 = cljs.core.first(arglist__45665);
var colls = cljs.core.rest(arglist__45665);
return G__45664__delegate(f,c1,c2,c3,colls);
});
G__45664.cljs$core$IFn$_invoke$arity$variadic = G__45664__delegate;
return G__45664;
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
cljs.core.filterv = (function filterv(pred,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){if(cljs.core.truth_((function (){var G__45667 = o;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__45667) : pred.call(null,G__45667));
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
{if(!((function (){var G__45682 = m__$1;if(G__45682)
{var bit__20847__auto__ = (G__45682.cljs$lang$protocol_mask$partition0$ & (256));if((bit__20847__auto__) || (G__45682.cljs$core$ILookup$))
{return true;
} else
{if((!G__45682.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__45682);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__45682);
}
})()))
{return not_found;
} else
{var m__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core.first(ks__$1),sentinel);if((sentinel === m__$2))
{return not_found;
} else
{{
var G__45683 = sentinel;
var G__45684 = m__$2;
var G__45685 = cljs.core.next(ks__$1);
sentinel = G__45683;
m__$1 = G__45684;
ks__$1 = G__45685;
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
cljs.core.assoc_in = (function assoc_in(m,p__45686,v){var vec__45691 = p__45686;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45691,(0),null);var ks = cljs.core.nthnext(vec__45691,(1));if(ks)
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
var update_in__3 = (function (m,p__45692,f){var vec__45730 = p__45692;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45730,(0),null);var ks = cljs.core.nthnext(vec__45730,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__45731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__45731) : f.call(null,G__45731));
})());
}
});
var update_in__4 = (function (m,p__45693,f,a){var vec__45732 = p__45693;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45732,(0),null);var ks = cljs.core.nthnext(vec__45732,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__45733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__45734 = a;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__45733,G__45734) : f.call(null,G__45733,G__45734));
})());
}
});
var update_in__5 = (function (m,p__45694,f,a,b){var vec__45735 = p__45694;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45735,(0),null);var ks = cljs.core.nthnext(vec__45735,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__45736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__45737 = a;var G__45738 = b;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__45736,G__45737,G__45738) : f.call(null,G__45736,G__45737,G__45738));
})());
}
});
var update_in__6 = (function (m,p__45695,f,a,b,c){var vec__45739 = p__45695;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45739,(0),null);var ks = cljs.core.nthnext(vec__45739,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$6(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b,c));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__45740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__45741 = a;var G__45742 = b;var G__45743 = c;return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__45740,G__45741,G__45742,G__45743) : f.call(null,G__45740,G__45741,G__45742,G__45743));
})());
}
});
var update_in__7 = (function() { 
var G__45745__delegate = function (m,p__45696,f,a,b,c,args){var vec__45744 = p__45696;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45744,(0),null);var ks = cljs.core.nthnext(vec__45744,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(update_in,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,cljs.core.array_seq([b,c,args], 0)));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),a,b,c,cljs.core.array_seq([args], 0)));
}
};
var G__45745 = function (m,p__45696,f,a,b,c,var_args){
var args = null;if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return G__45745__delegate.call(this,m,p__45696,f,a,b,c,args);};
G__45745.cljs$lang$maxFixedArity = 6;
G__45745.cljs$lang$applyTo = (function (arglist__45746){
var m = cljs.core.first(arglist__45746);
arglist__45746 = cljs.core.next(arglist__45746);
var p__45696 = cljs.core.first(arglist__45746);
arglist__45746 = cljs.core.next(arglist__45746);
var f = cljs.core.first(arglist__45746);
arglist__45746 = cljs.core.next(arglist__45746);
var a = cljs.core.first(arglist__45746);
arglist__45746 = cljs.core.next(arglist__45746);
var b = cljs.core.first(arglist__45746);
arglist__45746 = cljs.core.next(arglist__45746);
var c = cljs.core.first(arglist__45746);
var args = cljs.core.rest(arglist__45746);
return G__45745__delegate(m,p__45696,f,a,b,c,args);
});
G__45745.cljs$core$IFn$_invoke$arity$variadic = G__45745__delegate;
return G__45745;
})()
;
update_in = function(m,p__45696,f,a,b,c,var_args){
var args = var_args;
switch(arguments.length){
case 3:
return update_in__3.call(this,m,p__45696,f);
case 4:
return update_in__4.call(this,m,p__45696,f,a);
case 5:
return update_in__5.call(this,m,p__45696,f,a,b);
case 6:
return update_in__6.call(this,m,p__45696,f,a,b,c);
default:
return update_in__7.cljs$core$IFn$_invoke$arity$variadic(m,p__45696,f,a,b,c, cljs.core.array_seq(arguments, 6));
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
cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__20755__auto__,writer__20756__auto__,opts__20757__auto__){return cljs.core._write(writer__20756__auto__,"cljs.core/VectorNode");
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
var G__45747 = (ll - (5));
var G__45748 = r;
ll = G__45747;
ret = G__45748;
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
var G__45753 = cljs.core.pv_aget(node,(0));
var G__45754 = (level - (5));
node = G__45753;
level = G__45754;
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
var G__45755 = cljs.core.pv_aget(node,((i >>> level) & (31)));
var G__45756 = (level - (5));
node = G__45755;
level = G__45756;
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
cljs.core.RangedIterator = (function (i,base,arr,v,start,end){
this.i = i;
this.base = base;
this.arr = arr;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.RangedIterator.cljs$lang$type = true;
cljs.core.RangedIterator.cljs$lang$ctorStr = "cljs.core/RangedIterator";
cljs.core.RangedIterator.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/RangedIterator");
});
cljs.core.RangedIterator.prototype.hasNext = (function (){var self__ = this;
var this$ = this;return (self__.i < self__.end);
});
cljs.core.RangedIterator.prototype.next = (function (){var self__ = this;
var this$ = this;if(((self__.i - self__.base) === (32)))
{self__.arr = cljs.core.unchecked_array_for(self__.v,self__.i);
self__.base = (self__.base + (32));
} else
{}
var ret = (self__.arr[(self__.i & (31))]);self__.i = (self__.i + (1));
return ret;
});
cljs.core.__GT_RangedIterator = (function __GT_RangedIterator(i,base,arr,v,start,end){return (new cljs.core.RangedIterator(i,base,arr,v,start,end));
});
cljs.core.ranged_iterator = (function ranged_iterator(v,start,end){var i = start;return (new cljs.core.RangedIterator(i,(i - (i % (32))),(((start < cljs.core.count(v)))?cljs.core.unchecked_array_for(v,i):null),v,start,end));
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
cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/PersistentVector");
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
var v__$1 = this;var i = (0);var init__$1 = init;while(true){
if((i < self__.cnt))
{var arr = cljs.core.unchecked_array_for(v__$1,i);var len = arr.length;var init__$2 = (function (){var j = (0);var init__$2 = init__$1;while(true){
if((j < len))
{var init__$3 = (function (){var G__45766 = init__$2;var G__45767 = (j + i);var G__45768 = (arr[j]);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__45766,G__45767,G__45768) : f.call(null,G__45766,G__45767,G__45768));
})();if(cljs.core.reduced_QMARK_(init__$3))
{return init__$3;
} else
{{
var G__45779 = (j + (1));
var G__45780 = init__$3;
j = G__45779;
init__$2 = G__45780;
continue;
}
}
} else
{return init__$2;
}
break;
}
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__45769 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__45769) : cljs.core.deref.call(null,G__45769));
} else
{{
var G__45781 = (i + len);
var G__45782 = init__$2;
i = G__45781;
init__$1 = G__45782;
continue;
}
}
} else
{return init__$1;
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
cljs.core.PersistentVector.prototype.cljs$core$IIterable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.ranged_iterator(this$__$1,(0),self__.cnt);
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
var coll__$1 = this;var h__20393__auto__ = self__.__hash;if(!((h__20393__auto__ == null)))
{return h__20393__auto__;
} else
{var h__20393__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20393__auto____$1;
return h__20393__auto____$1;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;if((other instanceof cljs.core.PersistentVector))
{if((self__.cnt === cljs.core.count(other)))
{var me_iter = cljs.core._iterator(coll__$1);var you_iter = cljs.core._iterator(other);while(true){
if(cljs.core.truth_(me_iter.hasNext()))
{var x = me_iter.next();var y = you_iter.next();if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y))
{{
continue;
}
} else
{return false;
}
} else
{return true;
}
break;
}
} else
{return false;
}
} else
{return cljs.core.equiv_sequential(coll__$1,other);
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientVector(self__.cnt,self__.shift,(function (){var G__45770 = self__.root;return (cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1(G__45770) : cljs.core.tv_editable_root.call(null,G__45770));
})(),(function (){var G__45771 = self__.tail;return (cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1(G__45771) : cljs.core.tv_editable_tail.call(null,G__45771));
})()));
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){var self__ = this;
var v__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(v__$1,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,init){var self__ = this;
var v__$1 = this;var i = (0);var init__$1 = init;while(true){
if((i < self__.cnt))
{var arr = cljs.core.unchecked_array_for(v__$1,i);var len = arr.length;var init__$2 = (function (){var j = (0);var init__$2 = init__$1;while(true){
if((j < len))
{var init__$3 = (function (){var G__45772 = init__$2;var G__45773 = (arr[j]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__45772,G__45773) : f.call(null,G__45772,G__45773));
})();if(cljs.core.reduced_QMARK_(init__$3))
{return init__$3;
} else
{{
var G__45783 = (j + (1));
var G__45784 = init__$3;
j = G__45783;
init__$2 = G__45784;
continue;
}
}
} else
{return init__$2;
}
break;
}
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__45774 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__45774) : cljs.core.deref.call(null,G__45774));
} else
{{
var G__45785 = (i + len);
var G__45786 = init__$2;
i = G__45785;
init__$1 = G__45786;
continue;
}
}
} else
{return init__$1;
}
break;
}
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
{var G__45775 = coll__$1;var G__45776 = cljs.core.first_array_for_longvec(coll__$1);var G__45777 = (0);var G__45778 = (0);return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__45775,G__45776,G__45777,G__45778) : cljs.core.chunked_seq.call(null,G__45775,G__45776,G__45777,G__45778));

}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentVector(meta__$1,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;if(((self__.cnt - cljs.core.tail_off(coll__$1)) < (32)))
{var len = self__.tail.length;var new_tail = (new Array((len + (1))));var n__21231__auto___45787 = len;var i_45788 = (0);while(true){
if((i_45788 < n__21231__auto___45787))
{(new_tail[i_45788] = (self__.tail[i_45788]));
{
var G__45789 = (i_45788 + (1));
i_45788 = G__45789;
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
var G__45790 = null;
var G__45790__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__45790__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__45790 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__45790__2.call(this,self__,k);
case 3:
return G__45790__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45790.cljs$core$IFn$_invoke$arity$2 = G__45790__2;
G__45790.cljs$core$IFn$_invoke$arity$3 = G__45790__3;
return G__45790;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (self__,args45765){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45765)));
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
var G__45791 = (i + (1));
var G__45792 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,(xs__$1[i]));
i = G__45791;
out = G__45792;
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
vector.cljs$lang$applyTo = (function (arglist__45793){
var args = cljs.core.seq(arglist__45793);
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
cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/ChunkedSeq");
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
{var s = (function (){var G__45794 = self__.vec;var G__45795 = self__.node;var G__45796 = self__.i;var G__45797 = (self__.off + (1));return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__45794,G__45795,G__45796,G__45797) : cljs.core.chunked_seq.call(null,G__45794,G__45795,G__45796,G__45797));
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
var coll__$1 = this;var h__20393__auto__ = self__.__hash;if(!((h__20393__auto__ == null)))
{return h__20393__auto__;
} else
{var h__20393__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20393__auto____$1;
return h__20393__auto____$1;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2((function (){var G__45798 = self__.vec;var G__45799 = (self__.i + self__.off);var G__45800 = cljs.core.count(self__.vec);return (cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__45798,G__45799,G__45800) : cljs.core.subvec.call(null,G__45798,G__45799,G__45800));
})(),f);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3((function (){var G__45801 = self__.vec;var G__45802 = (self__.i + self__.off);var G__45803 = cljs.core.count(self__.vec);return (cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__45801,G__45802,G__45803) : cljs.core.subvec.call(null,G__45801,G__45802,G__45803));
})(),f,start);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (self__.node[self__.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(((self__.off + (1)) < self__.node.length))
{var s = (function (){var G__45804 = self__.vec;var G__45805 = self__.node;var G__45806 = self__.i;var G__45807 = (self__.off + (1));return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__45804,G__45805,G__45806,G__45807) : cljs.core.chunked_seq.call(null,G__45804,G__45805,G__45806,G__45807));
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
{var G__45808 = self__.vec;var G__45809 = cljs.core.unchecked_array_for(self__.vec,end);var G__45810 = end;var G__45811 = (0);return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__45808,G__45809,G__45810,G__45811) : cljs.core.chunked_seq.call(null,G__45808,G__45809,G__45810,G__45811));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){var self__ = this;
var coll__$1 = this;var G__45812 = self__.vec;var G__45813 = self__.node;var G__45814 = self__.i;var G__45815 = self__.off;var G__45816 = m;return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5(G__45812,G__45813,G__45814,G__45815,G__45816) : cljs.core.chunked_seq.call(null,G__45812,G__45813,G__45814,G__45815,G__45816));
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var end = (self__.i + self__.node.length);if((end < cljs.core._count(self__.vec)))
{var G__45817 = self__.vec;var G__45818 = cljs.core.unchecked_array_for(self__.vec,end);var G__45819 = end;var G__45820 = (0);return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__45817,G__45818,G__45819,G__45820) : cljs.core.chunked_seq.call(null,G__45817,G__45818,G__45819,G__45820));
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
cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/Subvec");
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
var coll__$1 = this;var v_pos = (self__.start + n);var G__45822 = self__.meta;var G__45823 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.v,v_pos,val);var G__45824 = self__.start;var G__45825 = (function (){var x__20178__auto__ = self__.end;var y__20179__auto__ = (v_pos + (1));return ((x__20178__auto__ > y__20179__auto__) ? x__20178__auto__ : y__20179__auto__);
})();var G__45826 = null;return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__45822,G__45823,G__45824,G__45825,G__45826) : cljs.core.build_subvec.call(null,G__45822,G__45823,G__45824,G__45825,G__45826));
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
{var G__45827 = self__.meta;var G__45828 = self__.v;var G__45829 = self__.start;var G__45830 = (self__.end - (1));var G__45831 = null;return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__45827,G__45828,G__45829,G__45830,G__45831) : cljs.core.build_subvec.call(null,G__45827,G__45828,G__45829,G__45830,G__45831));
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
var coll__$1 = this;var h__20393__auto__ = self__.__hash;if(!((h__20393__auto__ == null)))
{return h__20393__auto__;
} else
{var h__20393__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20393__auto____$1;
return h__20393__auto____$1;
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
var coll__$1 = this;var G__45833 = meta__$1;var G__45834 = self__.v;var G__45835 = self__.start;var G__45836 = self__.end;var G__45837 = self__.__hash;return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__45833,G__45834,G__45835,G__45836,G__45837) : cljs.core.build_subvec.call(null,G__45833,G__45834,G__45835,G__45836,G__45837));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;var G__45838 = self__.meta;var G__45839 = cljs.core._assoc_n(self__.v,self__.end,o);var G__45840 = self__.start;var G__45841 = (self__.end + (1));var G__45842 = null;return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__45838,G__45839,G__45840,G__45841,G__45842) : cljs.core.build_subvec.call(null,G__45838,G__45839,G__45840,G__45841,G__45842));
});
cljs.core.Subvec.prototype.call = (function() {
var G__45843 = null;
var G__45843__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__45843__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__45843 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__45843__2.call(this,self__,k);
case 3:
return G__45843__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45843.cljs$core$IFn$_invoke$arity$2 = G__45843__2;
G__45843.cljs$core$IFn$_invoke$arity$3 = G__45843__3;
return G__45843;
})()
;
cljs.core.Subvec.prototype.apply = (function (self__,args45821){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45821)));
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
var G__45844 = meta;
var G__45845 = v.v;
var G__45846 = (v.start + start);
var G__45847 = (v.start + end);
var G__45848 = __hash;
meta = G__45844;
v = G__45845;
start = G__45846;
end = G__45847;
__hash = G__45848;
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
cljs.core.tv_editable_root = (function tv_editable_root(node){return (new cljs.core.VectorNode((function (){var obj45855 = {};return obj45855;
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
var G__45863 = cljs.core.tv_ensure_editable(root.edit,cljs.core.pv_aget(node,((i >>> level) & (31))));
var G__45864 = (level - (5));
node = G__45863;
level = G__45864;
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
cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__45868 = null;
var G__45868__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__45868__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__45868 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__45868__2.call(this,self__,k);
case 3:
return G__45868__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45868.cljs$core$IFn$_invoke$arity$2 = G__45868__2;
G__45868.cljs$core$IFn$_invoke$arity$3 = G__45868__3;
return G__45868;
})()
;
cljs.core.TransientVector.prototype.apply = (function (self__,args45865){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45865)));
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
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/PersistentQueueSeq");
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
var coll__$1 = this;var h__20393__auto__ = self__.__hash;if(!((h__20393__auto__ == null)))
{return h__20393__auto__;
} else
{var h__20393__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20393__auto____$1;
return h__20393__auto____$1;
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
cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/PersistentQueue");
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
var coll__$1 = this;var h__20393__auto__ = self__.__hash;if(!((h__20393__auto__ == null)))
{return h__20393__auto__;
} else
{var h__20393__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20393__auto____$1;
return h__20393__auto____$1;
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
var coll__$1 = this;var rear__$1 = cljs.core.seq(self__.rear);if(cljs.core.truth_((function (){var or__19586__auto__ = self__.front;if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
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
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),self__.front,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__19586__auto__ = self__.rear;if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
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
cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/NeverEquiv");
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
var G__45869 = (i + incr);
i = G__45869;
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
var G__45870 = (i + (1));
var G__45871 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,k__$1,(so[k__$1]));
i = G__45870;
out = G__45871;
continue;
}
} else
{return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,k,v)),mm);
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){var new_obj = (function (){var obj45875 = {};return obj45875;
})();var l = ks.length;var i_45876 = (0);while(true){
if((i_45876 < l))
{var k_45877 = (ks[i_45876]);(new_obj[k_45877] = (obj[k_45877]));
{
var G__45878 = (i_45876 + (1));
i_45876 = G__45878;
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
cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/ObjMap");
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
var coll__$1 = this;if(cljs.core.truth_((function (){var and__19564__auto__ = (function (){var G__45882 = k;return goog.isString(G__45882);
})();if(cljs.core.truth_(and__19564__auto__))
{return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else
{return and__19564__auto__;
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
{var k = cljs.core.first(keys__$1);var init__$2 = (function (){var G__45883 = init__$1;var G__45884 = k;var G__45885 = (self__.strobj[k]);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__45883,G__45884,G__45885) : f.call(null,G__45883,G__45884,G__45885));
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__45886 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__45886) : cljs.core.deref.call(null,G__45886));
} else
{{
var G__45892 = cljs.core.rest(keys__$1);
var G__45893 = init__$2;
keys__$1 = G__45892;
init__$1 = G__45893;
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
var coll__$1 = this;var h__20393__auto__ = self__.__hash;if(!((h__20393__auto__ == null)))
{return h__20393__auto__;
} else
{var h__20393__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__20393__auto____$1;
return h__20393__auto____$1;
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
var coll__$1 = this;if(cljs.core.truth_((function (){var and__19564__auto__ = (function (){var G__45888 = k;return goog.isString(G__45888);
})();if(cljs.core.truth_(and__19564__auto__))
{return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else
{return and__19564__auto__;
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
var coll__$1 = this;if(cljs.core.truth_((function (){var G__45889 = k;return goog.isString(G__45889);
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
var coll__$1 = this;if(cljs.core.truth_((function (){var and__19564__auto__ = (function (){var G__45891 = k;return goog.isString(G__45891);
})();if(cljs.core.truth_(and__19564__auto__))
{return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else
{return and__19564__auto__;
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
return (function (p1__45879_SHARP_){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__45879_SHARP_,(self__.strobj[p1__45879_SHARP_])],null));
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
var G__45894 = null;
var G__45894__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__45894__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__45894 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__45894__2.call(this,self__,k);
case 3:
return G__45894__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45894.cljs$core$IFn$_invoke$arity$2 = G__45894__2;
G__45894.cljs$core$IFn$_invoke$arity$3 = G__45894__3;
return G__45894;
})()
;
cljs.core.ObjMap.prototype.apply = (function (self__,args45880){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45880)));
});
cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_ObjMap = (function __GT_ObjMap(meta,keys,strobj,update_count,__hash){return (new cljs.core.ObjMap(meta,keys,strobj,update_count,__hash));
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],(function (){var obj45896 = {};return obj45896;
})(),(0),(0)));
cljs.core.ObjMap.HASHMAP_THRESHOLD = (8);
cljs.core.ObjMap.fromObject = (function (ks,obj){return (new cljs.core.ObjMap(null,ks,obj,(0),null));
});

/**
* @constructor
*/
cljs.core.ES6Iterator = (function (s){
this.s = s;
})
cljs.core.ES6Iterator.cljs$lang$type = true;
cljs.core.ES6Iterator.cljs$lang$ctorStr = "cljs.core/ES6Iterator";
cljs.core.ES6Iterator.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/ES6Iterator");
});
cljs.core.ES6Iterator.prototype.next = (function (){var self__ = this;
var _ = this;if(!((self__.s == null)))
{var x = cljs.core.first(self__.s);self__.s = cljs.core.next(self__.s);
return {"done": false, "value": x};
} else
{return {"done": true, "value": null};
}
});
cljs.core.__GT_ES6Iterator = (function __GT_ES6Iterator(s){return (new cljs.core.ES6Iterator(s));
});
cljs.core.es6_iterator = (function es6_iterator(coll){return (new cljs.core.ES6Iterator(cljs.core.seq(coll)));
});

/**
* @constructor
*/
cljs.core.ES6EntriesIterator = (function (s){
this.s = s;
})
cljs.core.ES6EntriesIterator.cljs$lang$type = true;
cljs.core.ES6EntriesIterator.cljs$lang$ctorStr = "cljs.core/ES6EntriesIterator";
cljs.core.ES6EntriesIterator.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/ES6EntriesIterator");
});
cljs.core.ES6EntriesIterator.prototype.next = (function (){var self__ = this;
var _ = this;if(!((self__.s == null)))
{var vec__45897 = cljs.core.first(self__.s);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45897,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45897,(1),null);self__.s = cljs.core.next(self__.s);
return {"done": false, "value": [k,v]};
} else
{return {"done": true, "value": null};
}
});
cljs.core.__GT_ES6EntriesIterator = (function __GT_ES6EntriesIterator(s){return (new cljs.core.ES6EntriesIterator(s));
});
cljs.core.es6_entries_iterator = (function es6_entries_iterator(coll){return (new cljs.core.ES6EntriesIterator(cljs.core.seq(coll)));
});

/**
* @constructor
*/
cljs.core.ES6SetEntriesIterator = (function (s){
this.s = s;
})
cljs.core.ES6SetEntriesIterator.cljs$lang$type = true;
cljs.core.ES6SetEntriesIterator.cljs$lang$ctorStr = "cljs.core/ES6SetEntriesIterator";
cljs.core.ES6SetEntriesIterator.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/ES6SetEntriesIterator");
});
cljs.core.ES6SetEntriesIterator.prototype.next = (function (){var self__ = this;
var _ = this;if(!((self__.s == null)))
{var x = cljs.core.first(self__.s);self__.s = cljs.core.next(self__.s);
return {"done": false, "value": [x,x]};
} else
{return {"done": true, "value": null};
}
});
cljs.core.__GT_ES6SetEntriesIterator = (function __GT_ES6SetEntriesIterator(s){return (new cljs.core.ES6SetEntriesIterator(s));
});
cljs.core.es6_set_entries_iterator = (function es6_set_entries_iterator(coll){return (new cljs.core.ES6SetEntriesIterator(cljs.core.seq(coll)));
});
cljs.core.array_map_index_of_nil_QMARK_ = (function array_map_index_of_nil_QMARK_(arr,m,k){var len = arr.length;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if(((arr[i]) == null))
{return i;
} else
{{
var G__45898 = (i + (2));
i = G__45898;
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
var G__45899 = (i + (2));
i = G__45899;
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
var G__45900 = (i + (2));
i = G__45900;
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
var G__45901 = (i + (2));
i = G__45901;
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
var G__45902 = (i + (2));
i = G__45902;
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
{if(cljs.core.truth_((function (){var or__19586__auto__ = (function (){var G__45906 = k;return goog.isString(G__45906);
})();if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
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
cljs.core.array_map_extend_kv = (function array_map_extend_kv(m,k,v){var arr = m.arr;var l = arr.length;var narr = (new Array((l + (2))));var i_45907 = (0);while(true){
if((i_45907 < l))
{(narr[i_45907] = (arr[i_45907]));
{
var G__45908 = (i_45907 + (1));
i_45907 = G__45908;
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
cljs.core.PersistentArrayMapSeq.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/PersistentArrayMapSeq");
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
cljs.core.PersistentArrayMapIterator = (function (arr,i,cnt){
this.arr = arr;
this.i = i;
this.cnt = cnt;
})
cljs.core.PersistentArrayMapIterator.cljs$lang$type = true;
cljs.core.PersistentArrayMapIterator.cljs$lang$ctorStr = "cljs.core/PersistentArrayMapIterator";
cljs.core.PersistentArrayMapIterator.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/PersistentArrayMapIterator");
});
cljs.core.PersistentArrayMapIterator.prototype.hasNext = (function (){var self__ = this;
var _ = this;return (self__.i < self__.cnt);
});
cljs.core.PersistentArrayMapIterator.prototype.next = (function (){var self__ = this;
var _ = this;var ret = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[self__.i]),(self__.arr[(self__.i + (1))])], null);self__.i = (self__.i + (2));
return ret;
});
cljs.core.__GT_PersistentArrayMapIterator = (function __GT_PersistentArrayMapIterator(arr,i,cnt){return (new cljs.core.PersistentArrayMapIterator(arr,i,cnt));
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
cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentArrayMap.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentArrayMap.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator((function (){var G__45910 = coll;return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__45910) : cljs.core.keys.call(null,G__45910));
})());
});
cljs.core.PersistentArrayMap.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentArrayMap.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator((function (){var G__45911 = coll;return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__45911) : cljs.core.vals.call(null,G__45911));
})());
});
cljs.core.PersistentArrayMap.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentArrayMap.prototype.get = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentArrayMap.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__45912 = cljs.core.seq(coll);var chunk__45913 = null;var count__45914 = (0);var i__45915 = (0);while(true){
if((i__45915 < count__45914))
{var vec__45916 = chunk__45913.cljs$core$IIndexed$_nth$arity$2(null,i__45915);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45916,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45916,(1),null);var G__45917_45930 = v;var G__45918_45931 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__45917_45930,G__45918_45931) : f.call(null,G__45917_45930,G__45918_45931));
{
var G__45932 = seq__45912;
var G__45933 = chunk__45913;
var G__45934 = count__45914;
var G__45935 = (i__45915 + (1));
seq__45912 = G__45932;
chunk__45913 = G__45933;
count__45914 = G__45934;
i__45915 = G__45935;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__45912);if(temp__4126__auto__)
{var seq__45912__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__45912__$1))
{var c__21046__auto__ = cljs.core.chunk_first(seq__45912__$1);{
var G__45936 = cljs.core.chunk_rest(seq__45912__$1);
var G__45937 = c__21046__auto__;
var G__45938 = cljs.core.count(c__21046__auto__);
var G__45939 = (0);
seq__45912 = G__45936;
chunk__45913 = G__45937;
count__45914 = G__45938;
i__45915 = G__45939;
continue;
}
} else
{var vec__45919 = cljs.core.first(seq__45912__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45919,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45919,(1),null);var G__45920_45940 = v;var G__45921_45941 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__45920_45940,G__45921_45941) : f.call(null,G__45920_45940,G__45921_45941));
{
var G__45942 = cljs.core.next(seq__45912__$1);
var G__45943 = null;
var G__45944 = (0);
var G__45945 = (0);
seq__45912 = G__45942;
chunk__45913 = G__45943;
count__45914 = G__45944;
i__45915 = G__45945;
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
{var init__$2 = (function (){var G__45922 = init__$1;var G__45923 = (self__.arr[i]);var G__45924 = (self__.arr[(i + (1))]);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__45922,G__45923,G__45924) : f.call(null,G__45922,G__45923,G__45924));
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__45925 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__45925) : cljs.core.deref.call(null,G__45925));
} else
{{
var G__45946 = (i + (2));
var G__45947 = init__$2;
i = G__45946;
init__$1 = G__45947;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IIterable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return (new cljs.core.PersistentArrayMapIterator(self__.arr,(0),(self__.cnt * (2))));
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
var coll__$1 = this;var h__20393__auto__ = self__.__hash;if(!((h__20393__auto__ == null)))
{return h__20393__auto__;
} else
{var h__20393__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__20393__auto____$1;
return h__20393__auto____$1;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;if((function (){var G__45926 = other;if(G__45926)
{var bit__20838__auto__ = (G__45926.cljs$lang$protocol_mask$partition0$ & (1024));if((bit__20838__auto__) || (G__45926.cljs$core$IMap$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{var alen = self__.arr.length;var other__$1 = other;if((self__.cnt === other__$1.cljs$core$ICounted$_count$arity$1(null)))
{var i = (0);while(true){
if((i < alen))
{var v = other__$1.cljs$core$ILookup$_lookup$arity$3(null,(self__.arr[i]),cljs.core.lookup_sentinel);if(!((v === cljs.core.lookup_sentinel)))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.arr[(i + (1))]),v))
{{
var G__45948 = (i + (2));
i = G__45948;
continue;
}
} else
{return false;
}
} else
{return false;
}
} else
{return true;
}
break;
}
} else
{return false;
}
} else
{return cljs.core.equiv_map(coll__$1,other);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientArrayMap((function (){var obj45928 = {};return obj45928;
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
var G__45949 = (s + (2));
var G__45950 = d;
s = G__45949;
d = G__45950;
continue;
}
} else
{(new_arr[d] = (self__.arr[s]));
(new_arr[(d + (1))] = (self__.arr[(s + (1))]));
{
var G__45951 = (s + (2));
var G__45952 = (d + (2));
s = G__45951;
d = G__45952;
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
{var arr__$1 = (function (){var G__45929 = cljs.core.aclone(self__.arr);(G__45929[(idx + (1))] = v);
return G__45929;
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
var G__45953 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__45954 = cljs.core.next(es);
ret = G__45953;
es = G__45954;
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
var G__45955 = null;
var G__45955__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__45955__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__45955 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__45955__2.call(this,self__,k);
case 3:
return G__45955__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45955.cljs$core$IFn$_invoke$arity$2 = G__45955__2;
G__45955.cljs$core$IFn$_invoke$arity$3 = G__45955__3;
return G__45955;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (self__,args45909){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45909)));
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
var G__45956 = (i + (2));
var G__45957 = cljs.core._assoc_BANG_(ret,(arr__$1[i]),(arr__$1[(i + (1))]));
i = G__45956;
ret = G__45957;
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
cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of(tcoll__$1,key);if((idx >= (0)))
{(self__.arr[idx] = (self__.arr[(self__.len - (2))]));
(self__.arr[(idx + (1))] = (self__.arr[(self__.len - (1))]));
var G__45958_45966 = self__.arr;G__45958_45966.pop();
G__45958_45966.pop();
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
{return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3((function (){var G__45959 = self__.len;var G__45960 = self__.arr;return (cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2 ? cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2(G__45959,G__45960) : cljs.core.array__GT_transient_hash_map.call(null,G__45959,G__45960));
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
{if((function (){var G__45961 = o;if(G__45961)
{var bit__20847__auto__ = (G__45961.cljs$lang$protocol_mask$partition0$ & (2048));if((bit__20847__auto__) || (G__45961.cljs$core$IMapEntry$))
{return true;
} else
{if((!G__45961.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__45961);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__45961);
}
})())
{return cljs.core._assoc_BANG_(tcoll__$1,(function (){var G__45962 = o;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__45962) : cljs.core.key.call(null,G__45962));
})(),(function (){var G__45963 = o;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__45963) : cljs.core.val.call(null,G__45963));
})());
} else
{var es = cljs.core.seq(o);var tcoll__$2 = tcoll__$1;while(true){
var temp__4124__auto__ = cljs.core.first(es);if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;{
var G__45967 = cljs.core.next(es);
var G__45968 = cljs.core._assoc_BANG_(tcoll__$2,(function (){var G__45964 = e;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__45964) : cljs.core.key.call(null,G__45964));
})(),(function (){var G__45965 = e;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__45965) : cljs.core.val.call(null,G__45965));
})());
es = G__45967;
tcoll__$2 = G__45968;
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
var G__45969 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,(arr[i]),(arr[(i + (1))]));
var G__45970 = (i + (2));
out = G__45969;
i = G__45970;
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
cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__20755__auto__,writer__20756__auto__,opts__20757__auto__){return cljs.core._write(writer__20756__auto__,"cljs.core/Box");
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
var clone_and_set__3 = (function (arr,i,a){var G__45973 = cljs.core.aclone(arr);(G__45973[i] = a);
return G__45973;
});
var clone_and_set__5 = (function (arr,i,a,j,b){var G__45974 = cljs.core.aclone(arr);(G__45974[i] = a);
(G__45974[j] = b);
return G__45974;
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
{var G__45979 = init__$1;var G__45980 = k;var G__45981 = (arr[(i + (1))]);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__45979,G__45980,G__45981) : f.call(null,G__45979,G__45980,G__45981));
} else
{var node = (arr[(i + (1))]);if(!((node == null)))
{return node.kv_reduce(f,init__$1);
} else
{return init__$1;
}
}
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__45982 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__45982) : cljs.core.deref.call(null,G__45982));
} else
{{
var G__45983 = (i + (2));
var G__45984 = init__$2;
i = G__45983;
init__$1 = G__45984;
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
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/BitmapIndexedNode");
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
var inode = this;var G__45985 = self__.arr;return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(G__45985) : cljs.core.create_inode_seq.call(null,G__45985));
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
var i_45999 = (0);var j_46000 = (0);while(true){
if((i_45999 < (32)))
{if((((self__.bitmap >>> i_45999) & (1)) === (0)))
{{
var G__46001 = (i_45999 + (1));
var G__46002 = j_46000;
i_45999 = G__46001;
j_46000 = G__46002;
continue;
}
} else
{(nodes[i_45999] = ((!(((self__.arr[j_46000]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),cljs.core.hash((self__.arr[j_46000])),(self__.arr[j_46000]),(self__.arr[(j_46000 + (1))]),added_leaf_QMARK_):(self__.arr[(j_46000 + (1))])));
{
var G__46003 = (i_45999 + (1));
var G__46004 = (j_46000 + (2));
i_45999 = G__46003;
j_46000 = G__46004;
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
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(inode,edit__$1,((2) * idx),null,(((2) * idx) + (1)),(function (){var G__45986 = edit__$1;var G__45987 = (shift + (5));var G__45988 = key_or_nil;var G__45989 = val_or_node;var G__45990 = hash;var G__45991 = key;var G__45992 = val;return (cljs.core.create_node.cljs$core$IFn$_invoke$arity$7 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$7(G__45986,G__45987,G__45988,G__45989,G__45990,G__45991,G__45992) : cljs.core.create_node.call(null,G__45986,G__45987,G__45988,G__45989,G__45990,G__45991,G__45992));
})());

}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);if(((self__.bitmap & bit) === (0)))
{var n = cljs.core.bit_count(self__.bitmap);if((n >= (16)))
{var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var jdx = ((hash >>> shift) & 0x01f);(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_));
var i_46005 = (0);var j_46006 = (0);while(true){
if((i_46005 < (32)))
{if((((self__.bitmap >>> i_46005) & (1)) === (0)))
{{
var G__46007 = (i_46005 + (1));
var G__46008 = j_46006;
i_46005 = G__46007;
j_46006 = G__46008;
continue;
}
} else
{(nodes[i_46005] = ((!(((self__.arr[j_46006]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),cljs.core.hash((self__.arr[j_46006])),(self__.arr[j_46006]),(self__.arr[(j_46006 + (1))]),added_leaf_QMARK_):(self__.arr[(j_46006 + (1))])));
{
var G__46009 = (i_46005 + (1));
var G__46010 = (j_46006 + (2));
i_46005 = G__46009;
j_46006 = G__46010;
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
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$5(self__.arr,((2) * idx),null,(((2) * idx) + (1)),(function (){var G__45993 = (shift + (5));var G__45994 = key_or_nil;var G__45995 = val_or_node;var G__45996 = hash;var G__45997 = key;var G__45998 = val;return (cljs.core.create_node.cljs$core$IFn$_invoke$arity$6 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$6(G__45993,G__45994,G__45995,G__45996,G__45997,G__45998) : cljs.core.create_node.call(null,G__45993,G__45994,G__45995,G__45996,G__45997,G__45998));
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
var G__46011 = (i + (1));
var G__46012 = (j + (2));
var G__46013 = (bitmap | ((1) << i));
i = G__46011;
j = G__46012;
bitmap = G__46013;
continue;
}
} else
{{
var G__46014 = (i + (1));
var G__46015 = j;
var G__46016 = bitmap;
i = G__46014;
j = G__46015;
bitmap = G__46016;
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
cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/ArrayNode");
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
var inode = this;var G__46017 = self__.arr;return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1(G__46017) : cljs.core.create_array_node_seq.call(null,G__46017));
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var inode = this;var len = self__.arr.length;var i = (0);var init__$1 = init;while(true){
if((i < len))
{var node = (self__.arr[i]);if(!((node == null)))
{var init__$2 = node.kv_reduce(f,init__$1);if(cljs.core.reduced_QMARK_(init__$2))
{var G__46018 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46018) : cljs.core.deref.call(null,G__46018));
} else
{{
var G__46019 = (i + (1));
var G__46020 = init__$2;
i = G__46019;
init__$1 = G__46020;
continue;
}
}
} else
{{
var G__46021 = (i + (1));
var G__46022 = init__$1;
i = G__46021;
init__$1 = G__46022;
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
var G__46023 = (i + (2));
i = G__46023;
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
cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/HashCollisionNode");
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
var inode = this;var G__46024 = self__.arr;return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(G__46024) : cljs.core.create_inode_seq.call(null,G__46024));
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
cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/NodeSeq");
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
var coll__$1 = this;var h__20393__auto__ = self__.__hash;if(!((h__20393__auto__ == null)))
{return h__20393__auto__;
} else
{var h__20393__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20393__auto____$1;
return h__20393__auto____$1;
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
{var G__46025 = self__.nodes;var G__46026 = (self__.i + (2));var G__46027 = null;return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(G__46025,G__46026,G__46027) : cljs.core.create_inode_seq.call(null,G__46025,G__46026,G__46027));
} else
{var G__46028 = self__.nodes;var G__46029 = self__.i;var G__46030 = cljs.core.next(self__.s);return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(G__46028,G__46029,G__46030) : cljs.core.create_inode_seq.call(null,G__46028,G__46029,G__46030));
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
var G__46034 = (j + (2));
j = G__46034;
continue;
}
}
} else
{{
var G__46035 = (j + (2));
j = G__46035;
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
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/ArrayNodeSeq");
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
var coll__$1 = this;var h__20393__auto__ = self__.__hash;if(!((h__20393__auto__ == null)))
{return h__20393__auto__;
} else
{var h__20393__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20393__auto____$1;
return h__20393__auto____$1;
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
var coll__$1 = this;var G__46036 = null;var G__46037 = self__.nodes;var G__46038 = self__.i;var G__46039 = cljs.core.next(self__.s);return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4(G__46036,G__46037,G__46038,G__46039) : cljs.core.create_array_node_seq.call(null,G__46036,G__46037,G__46038,G__46039));
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
var G__46044 = (j + (1));
j = G__46044;
continue;
}
}
} else
{{
var G__46045 = (j + (1));
j = G__46045;
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
cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentHashMap.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentHashMap.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator((function (){var G__46047 = coll;return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__46047) : cljs.core.keys.call(null,G__46047));
})());
});
cljs.core.PersistentHashMap.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentHashMap.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator((function (){var G__46048 = coll;return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__46048) : cljs.core.vals.call(null,G__46048));
})());
});
cljs.core.PersistentHashMap.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentHashMap.prototype.get = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentHashMap.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__46049 = cljs.core.seq(coll);var chunk__46050 = null;var count__46051 = (0);var i__46052 = (0);while(true){
if((i__46052 < count__46051))
{var vec__46053 = chunk__46050.cljs$core$IIndexed$_nth$arity$2(null,i__46052);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46053,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46053,(1),null);var G__46054_46065 = v;var G__46055_46066 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__46054_46065,G__46055_46066) : f.call(null,G__46054_46065,G__46055_46066));
{
var G__46067 = seq__46049;
var G__46068 = chunk__46050;
var G__46069 = count__46051;
var G__46070 = (i__46052 + (1));
seq__46049 = G__46067;
chunk__46050 = G__46068;
count__46051 = G__46069;
i__46052 = G__46070;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__46049);if(temp__4126__auto__)
{var seq__46049__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__46049__$1))
{var c__21046__auto__ = cljs.core.chunk_first(seq__46049__$1);{
var G__46071 = cljs.core.chunk_rest(seq__46049__$1);
var G__46072 = c__21046__auto__;
var G__46073 = cljs.core.count(c__21046__auto__);
var G__46074 = (0);
seq__46049 = G__46071;
chunk__46050 = G__46072;
count__46051 = G__46073;
i__46052 = G__46074;
continue;
}
} else
{var vec__46056 = cljs.core.first(seq__46049__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46056,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46056,(1),null);var G__46057_46075 = v;var G__46058_46076 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__46057_46075,G__46058_46076) : f.call(null,G__46057_46075,G__46058_46076));
{
var G__46077 = cljs.core.next(seq__46049__$1);
var G__46078 = null;
var G__46079 = (0);
var G__46080 = (0);
seq__46049 = G__46077;
chunk__46050 = G__46078;
count__46051 = G__46079;
i__46052 = G__46080;
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
var coll__$1 = this;var init__$1 = ((self__.has_nil_QMARK_)?(function (){var G__46059 = init;var G__46060 = null;var G__46061 = self__.nil_val;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__46059,G__46060,G__46061) : f.call(null,G__46059,G__46060,G__46061));
})():init);if(cljs.core.reduced_QMARK_(init__$1))
{var G__46062 = init__$1;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46062) : cljs.core.deref.call(null,G__46062));
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
var coll__$1 = this;var h__20393__auto__ = self__.__hash;if(!((h__20393__auto__ == null)))
{return h__20393__auto__;
} else
{var h__20393__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__20393__auto____$1;
return h__20393__auto____$1;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_map(coll__$1,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientHashMap((function (){var obj46064 = {};return obj46064;
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
var G__46081 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__46082 = cljs.core.next(es);
ret = G__46081;
es = G__46082;
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
var G__46083 = null;
var G__46083__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__46083__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__46083 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__46083__2.call(this,self__,k);
case 3:
return G__46083__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46083.cljs$core$IFn$_invoke$arity$2 = G__46083__2;
G__46083.cljs$core$IFn$_invoke$arity$3 = G__46083__3;
return G__46083;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (self__,args46046){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args46046)));
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
var G__46084 = (i + (1));
var G__46085 = out.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(null,(ks[i]),(vs[i]));
i = G__46084;
out = G__46085;
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
cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/TransientHashMap");
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
{if((function (){var G__46086 = o;if(G__46086)
{var bit__20847__auto__ = (G__46086.cljs$lang$protocol_mask$partition0$ & (2048));if((bit__20847__auto__) || (G__46086.cljs$core$IMapEntry$))
{return true;
} else
{if((!G__46086.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__46086);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__46086);
}
})())
{return tcoll.assoc_BANG_((function (){var G__46087 = o;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__46087) : cljs.core.key.call(null,G__46087));
})(),(function (){var G__46088 = o;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__46088) : cljs.core.val.call(null,G__46088));
})());
} else
{var es = cljs.core.seq(o);var tcoll__$1 = tcoll;while(true){
var temp__4124__auto__ = cljs.core.first(es);if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;{
var G__46091 = cljs.core.next(es);
var G__46092 = tcoll__$1.assoc_BANG_((function (){var G__46089 = e;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__46089) : cljs.core.key.call(null,G__46089));
})(),(function (){var G__46090 = e;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__46090) : cljs.core.val.call(null,G__46090));
})());
es = G__46091;
tcoll__$1 = G__46092;
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
var G__46093 = ((ascending_QMARK_)?t.left:t.right);
var G__46094 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack__$1,t);
t = G__46093;
stack__$1 = G__46094;
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
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/PersistentTreeMapSeq");
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
var coll__$1 = this;var h__20393__auto__ = self__.__hash;if(!((h__20393__auto__ == null)))
{return h__20393__auto__;
} else
{var h__20393__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20393__auto____$1;
return h__20393__auto____$1;
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
{var G__46107 = init__$1;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46107) : cljs.core.deref.call(null,G__46107));
} else
{var init__$2 = (function (){var G__46108 = init__$1;var G__46109 = node.key;var G__46110 = node.val;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__46108,G__46109,G__46110) : f.call(null,G__46108,G__46109,G__46110));
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__46111 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46111) : cljs.core.deref.call(null,G__46111));
} else
{var init__$3 = ((!((node.right == null)))?tree_map_kv_reduce(node.right,f,init__$2):init__$2);if(cljs.core.reduced_QMARK_(init__$3))
{var G__46112 = init__$3;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46112) : cljs.core.deref.call(null,G__46112));
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
cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/BlackNode");
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
var coll__$1 = this;var h__20393__auto__ = self__.__hash;if(!((h__20393__auto__ == null)))
{return h__20393__auto__;
} else
{var h__20393__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20393__auto____$1;
return h__20393__auto____$1;
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
var G__46114 = null;
var G__46114__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__46114__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__46114 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__46114__2.call(this,self__,k);
case 3:
return G__46114__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46114.cljs$core$IFn$_invoke$arity$2 = G__46114__2;
G__46114.cljs$core$IFn$_invoke$arity$3 = G__46114__3;
return G__46114;
})()
;
cljs.core.BlackNode.prototype.apply = (function (self__,args46113){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args46113)));
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
cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/RedNode");
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
var coll__$1 = this;var h__20393__auto__ = self__.__hash;if(!((h__20393__auto__ == null)))
{return h__20393__auto__;
} else
{var h__20393__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20393__auto____$1;
return h__20393__auto____$1;
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
var G__46116 = null;
var G__46116__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__46116__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__46116 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__46116__2.call(this,self__,k);
case 3:
return G__46116__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46116.cljs$core$IFn$_invoke$arity$2 = G__46116__2;
G__46116.cljs$core$IFn$_invoke$arity$3 = G__46116__3;
return G__46116;
})()
;
cljs.core.RedNode.prototype.apply = (function (self__,args46115){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args46115)));
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
{var c = (function (){var G__46129 = k;var G__46130 = tree.key;return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__46129,G__46130) : comp.call(null,G__46129,G__46130));
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
{var c = (function (){var G__46149 = k;var G__46150 = tree.key;return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__46149,G__46150) : comp.call(null,G__46149,G__46150));
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
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){var tk = tree.key;var c = (function (){var G__46161 = k;var G__46162 = tk;return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__46161,G__46162) : comp.call(null,G__46161,G__46162));
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
cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__46164 = cljs.core.seq(coll);var chunk__46165 = null;var count__46166 = (0);var i__46167 = (0);while(true){
if((i__46167 < count__46166))
{var vec__46168 = chunk__46165.cljs$core$IIndexed$_nth$arity$2(null,i__46167);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46168,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46168,(1),null);var G__46169_46181 = v;var G__46170_46182 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__46169_46181,G__46170_46182) : f.call(null,G__46169_46181,G__46170_46182));
{
var G__46183 = seq__46164;
var G__46184 = chunk__46165;
var G__46185 = count__46166;
var G__46186 = (i__46167 + (1));
seq__46164 = G__46183;
chunk__46165 = G__46184;
count__46166 = G__46185;
i__46167 = G__46186;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__46164);if(temp__4126__auto__)
{var seq__46164__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__46164__$1))
{var c__21046__auto__ = cljs.core.chunk_first(seq__46164__$1);{
var G__46187 = cljs.core.chunk_rest(seq__46164__$1);
var G__46188 = c__21046__auto__;
var G__46189 = cljs.core.count(c__21046__auto__);
var G__46190 = (0);
seq__46164 = G__46187;
chunk__46165 = G__46188;
count__46166 = G__46189;
i__46167 = G__46190;
continue;
}
} else
{var vec__46171 = cljs.core.first(seq__46164__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46171,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46171,(1),null);var G__46172_46191 = v;var G__46173_46192 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__46172_46191,G__46173_46192) : f.call(null,G__46172_46191,G__46173_46192));
{
var G__46193 = cljs.core.next(seq__46164__$1);
var G__46194 = null;
var G__46195 = (0);
var G__46196 = (0);
seq__46164 = G__46193;
chunk__46165 = G__46194;
count__46166 = G__46195;
i__46167 = G__46196;
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
var coll = this;return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentTreeMap.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator((function (){var G__46174 = coll;return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__46174) : cljs.core.keys.call(null,G__46174));
})());
});
cljs.core.PersistentTreeMap.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator((function (){var G__46175 = coll;return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__46175) : cljs.core.vals.call(null,G__46175));
})());
});
cljs.core.PersistentTreeMap.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){var self__ = this;
var coll = this;var t = self__.tree;while(true){
if(!((t == null)))
{var c = (function (){var G__46176 = k;var G__46177 = t.key;return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__46176,G__46177) : self__.comp.call(null,G__46176,G__46177));
})();if((c === (0)))
{return t;
} else
{if((c < (0)))
{{
var G__46197 = t.left;
t = G__46197;
continue;
}
} else
{{
var G__46198 = t.right;
t = G__46198;
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
var coll__$1 = this;var h__20393__auto__ = self__.__hash;if(!((h__20393__auto__ == null)))
{return h__20393__auto__;
} else
{var h__20393__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__20393__auto____$1;
return h__20393__auto____$1;
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
var G__46199 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__46200 = cljs.core.next(es);
ret = G__46199;
es = G__46200;
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
var G__46201 = null;
var G__46201__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__46201__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__46201 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__46201__2.call(this,self__,k);
case 3:
return G__46201__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46201.cljs$core$IFn$_invoke$arity$2 = G__46201__2;
G__46201.cljs$core$IFn$_invoke$arity$3 = G__46201__3;
return G__46201;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (self__,args46163){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args46163)));
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
{var c = (function (){var G__46178 = k;var G__46179 = t.key;return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__46178,G__46179) : self__.comp.call(null,G__46178,G__46179));
})();if((c === (0)))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t),ascending_QMARK_,(-1),null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c < (0)))
{{
var G__46202 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__46203 = t.left;
stack = G__46202;
t = G__46203;
continue;
}
} else
{{
var G__46204 = stack;
var G__46205 = t.right;
stack = G__46204;
t = G__46205;
continue;
}
}
} else
{if((c > (0)))
{{
var G__46206 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__46207 = t.right;
stack = G__46206;
t = G__46207;
continue;
}
} else
{{
var G__46208 = stack;
var G__46209 = t.left;
stack = G__46208;
t = G__46209;
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
var coll__$1 = this;var G__46180 = entry;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__46180) : cljs.core.key.call(null,G__46180));
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
var G__46210 = cljs.core.nnext(in$);
var G__46211 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__46210;
out = G__46211;
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
hash_map.cljs$lang$applyTo = (function (arglist__46212){
var keyvals = cljs.core.seq(arglist__46212);
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
array_map.cljs$lang$applyTo = (function (arglist__46213){
var keyvals = cljs.core.seq(arglist__46213);
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
var obj_map__delegate = function (keyvals){var ks = [];var obj = (function (){var obj46217 = {};return obj46217;
})();var kvs = cljs.core.seq(keyvals);while(true){
if(kvs)
{ks.push(cljs.core.first(kvs));
(obj[cljs.core.first(kvs)] = cljs.core.second(kvs));
{
var G__46218 = cljs.core.nnext(kvs);
kvs = G__46218;
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
obj_map.cljs$lang$applyTo = (function (arglist__46219){
var keyvals = cljs.core.seq(arglist__46219);
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
var G__46220 = cljs.core.nnext(in$);
var G__46221 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__46220;
out = G__46221;
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
sorted_map.cljs$lang$applyTo = (function (arglist__46222){
var keyvals = cljs.core.seq(arglist__46222);
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
var G__46223 = cljs.core.nnext(in$);
var G__46224 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__46223;
out = G__46224;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__46225){
var comparator = cljs.core.first(arglist__46225);
var keyvals = cljs.core.rest(arglist__46225);
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
cljs.core.KeySeq.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/KeySeq");
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
var coll__$1 = this;var nseq = (((function (){var G__46226 = self__.mseq;if(G__46226)
{var bit__20847__auto__ = (G__46226.cljs$lang$protocol_mask$partition0$ & (128));if((bit__20847__auto__) || (G__46226.cljs$core$INext$))
{return true;
} else
{if((!G__46226.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__46226);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__46226);
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
var coll__$1 = this;var nseq = (((function (){var G__46227 = self__.mseq;if(G__46227)
{var bit__20847__auto__ = (G__46227.cljs$lang$protocol_mask$partition0$ & (128));if((bit__20847__auto__) || (G__46227.cljs$core$INext$))
{return true;
} else
{if((!G__46227.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__46227);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__46227);
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
cljs.core.ValSeq.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/ValSeq");
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
var coll__$1 = this;var nseq = (((function (){var G__46228 = self__.mseq;if(G__46228)
{var bit__20847__auto__ = (G__46228.cljs$lang$protocol_mask$partition0$ & (128));if((bit__20847__auto__) || (G__46228.cljs$core$INext$))
{return true;
} else
{if((!G__46228.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__46228);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__46228);
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
var coll__$1 = this;var nseq = (((function (){var G__46229 = self__.mseq;if(G__46229)
{var bit__20847__auto__ = (G__46229.cljs$lang$protocol_mask$partition0$ & (128));if((bit__20847__auto__) || (G__46229.cljs$core$INext$))
{return true;
} else
{if((!G__46229.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__46229);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__46229);
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
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__46230_SHARP_,p2__46231_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__19586__auto__ = p1__46230_SHARP_;if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),p2__46231_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__46232){
var maps = cljs.core.seq(arglist__46232);
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
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__46235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__46236 = v;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__46235,G__46236) : f.call(null,G__46235,G__46236));
})());
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});var merge2 = ((function (merge_entry){
return (function (m1,m2){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_entry,(function (){var or__19586__auto__ = m1;if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
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
merge_with.cljs$lang$applyTo = (function (arglist__46237){
var f = cljs.core.first(arglist__46237);
var maps = cljs.core.rest(arglist__46237);
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
var G__46238 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(entry,new cljs.core.Keyword("cljs.core","not-found","cljs.core/not-found",-1572889185)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key,entry):ret);
var G__46239 = cljs.core.next(keys);
ret = G__46238;
keys = G__46239;
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
cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentHashSet.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentHashSet.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentHashSet.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.es6_set_entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentHashSet.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentHashSet.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentHashSet.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__46242 = cljs.core.seq(coll);var chunk__46243 = null;var count__46244 = (0);var i__46245 = (0);while(true){
if((i__46245 < count__46244))
{var vec__46246 = chunk__46243.cljs$core$IIndexed$_nth$arity$2(null,i__46245);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46246,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46246,(1),null);var G__46247_46252 = v;var G__46248_46253 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__46247_46252,G__46248_46253) : f.call(null,G__46247_46252,G__46248_46253));
{
var G__46254 = seq__46242;
var G__46255 = chunk__46243;
var G__46256 = count__46244;
var G__46257 = (i__46245 + (1));
seq__46242 = G__46254;
chunk__46243 = G__46255;
count__46244 = G__46256;
i__46245 = G__46257;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__46242);if(temp__4126__auto__)
{var seq__46242__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__46242__$1))
{var c__21046__auto__ = cljs.core.chunk_first(seq__46242__$1);{
var G__46258 = cljs.core.chunk_rest(seq__46242__$1);
var G__46259 = c__21046__auto__;
var G__46260 = cljs.core.count(c__21046__auto__);
var G__46261 = (0);
seq__46242 = G__46258;
chunk__46243 = G__46259;
count__46244 = G__46260;
i__46245 = G__46261;
continue;
}
} else
{var vec__46249 = cljs.core.first(seq__46242__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46249,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46249,(1),null);var G__46250_46262 = v;var G__46251_46263 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__46250_46262,G__46251_46263) : f.call(null,G__46250_46262,G__46251_46263));
{
var G__46264 = cljs.core.next(seq__46242__$1);
var G__46265 = null;
var G__46266 = (0);
var G__46267 = (0);
seq__46242 = G__46264;
chunk__46243 = G__46265;
count__46244 = G__46266;
i__46245 = G__46267;
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
var coll__$1 = this;var h__20393__auto__ = self__.__hash;if(!((h__20393__auto__ == null)))
{return h__20393__auto__;
} else
{var h__20393__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__20393__auto____$1;
return h__20393__auto____$1;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (coll__$1){
return (function (p1__46240_SHARP_){return cljs.core.contains_QMARK_(coll__$1,p1__46240_SHARP_);
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
var G__46268 = null;
var G__46268__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__46268__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__46268 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__46268__2.call(this,self__,k);
case 3:
return G__46268__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46268.cljs$core$IFn$_invoke$arity$2 = G__46268__2;
G__46268.cljs$core$IFn$_invoke$arity$3 = G__46268__3;
return G__46268;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (self__,args46241){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args46241)));
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
var G__46269 = (i + (1));
var G__46270 = cljs.core._assoc_BANG_(out,(items[i]),null);
i = G__46269;
out = G__46270;
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
var G__46271 = (i + (1));
var G__46272 = cljs.core._conj_BANG_(out,(items[i]));
i = G__46271;
out = G__46272;
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
cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__46274 = null;
var G__46274__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var tcoll = self____$1;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__46274__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var tcoll = self____$1;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__46274 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__46274__2.call(this,self__,k);
case 3:
return G__46274__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46274.cljs$core$IFn$_invoke$arity$2 = G__46274__2;
G__46274.cljs$core$IFn$_invoke$arity$3 = G__46274__3;
return G__46274;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (self__,args46273){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args46273)));
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
cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentTreeSet.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentTreeSet.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentTreeSet.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.es6_set_entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentTreeSet.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentTreeSet.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentTreeSet.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__46277 = cljs.core.seq(coll);var chunk__46278 = null;var count__46279 = (0);var i__46280 = (0);while(true){
if((i__46280 < count__46279))
{var vec__46281 = chunk__46278.cljs$core$IIndexed$_nth$arity$2(null,i__46280);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46281,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46281,(1),null);var G__46282_46287 = v;var G__46283_46288 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__46282_46287,G__46283_46288) : f.call(null,G__46282_46287,G__46283_46288));
{
var G__46289 = seq__46277;
var G__46290 = chunk__46278;
var G__46291 = count__46279;
var G__46292 = (i__46280 + (1));
seq__46277 = G__46289;
chunk__46278 = G__46290;
count__46279 = G__46291;
i__46280 = G__46292;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__46277);if(temp__4126__auto__)
{var seq__46277__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__46277__$1))
{var c__21046__auto__ = cljs.core.chunk_first(seq__46277__$1);{
var G__46293 = cljs.core.chunk_rest(seq__46277__$1);
var G__46294 = c__21046__auto__;
var G__46295 = cljs.core.count(c__21046__auto__);
var G__46296 = (0);
seq__46277 = G__46293;
chunk__46278 = G__46294;
count__46279 = G__46295;
i__46280 = G__46296;
continue;
}
} else
{var vec__46284 = cljs.core.first(seq__46277__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46284,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46284,(1),null);var G__46285_46297 = v;var G__46286_46298 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__46285_46297,G__46286_46298) : f.call(null,G__46285_46297,G__46286_46298));
{
var G__46299 = cljs.core.next(seq__46277__$1);
var G__46300 = null;
var G__46301 = (0);
var G__46302 = (0);
seq__46277 = G__46299;
chunk__46278 = G__46300;
count__46279 = G__46301;
i__46280 = G__46302;
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
var coll__$1 = this;var h__20393__auto__ = self__.__hash;if(!((h__20393__auto__ == null)))
{return h__20393__auto__;
} else
{var h__20393__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__20393__auto____$1;
return h__20393__auto____$1;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (coll__$1){
return (function (p1__46275_SHARP_){return cljs.core.contains_QMARK_(coll__$1,p1__46275_SHARP_);
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
var G__46303 = null;
var G__46303__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__46303__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__46303 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__46303__2.call(this,self__,k);
case 3:
return G__46303__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46303.cljs$core$IFn$_invoke$arity$2 = G__46303__2;
G__46303.cljs$core$IFn$_invoke$arity$3 = G__46303__3;
return G__46303;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (self__,args46276){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args46276)));
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
cljs.core.set_from_indexed_seq = (function set_from_indexed_seq(iseq){var arr = iseq.arr;var ret = (function (){var a__21220__auto__ = arr;var i = (0);var res = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);while(true){
if((i < a__21220__auto__.length))
{{
var G__46304 = (i + (1));
var G__46305 = res.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,(arr[i]));
i = G__46304;
res = G__46305;
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
var G__46306 = in$__$1.cljs$core$INext$_next$arity$1(null);
var G__46307 = out.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,in$__$1.cljs$core$ISeq$_first$arity$1(null));
in$__$1 = G__46306;
out = G__46307;
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
var G__46308__delegate = function (keys){return cljs.core.set(keys);
};
var G__46308 = function (var_args){
var keys = null;if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__46308__delegate.call(this,keys);};
G__46308.cljs$lang$maxFixedArity = 0;
G__46308.cljs$lang$applyTo = (function (arglist__46309){
var keys = cljs.core.seq(arglist__46309);
return G__46308__delegate(keys);
});
G__46308.cljs$core$IFn$_invoke$arity$variadic = G__46308__delegate;
return G__46308;
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
sorted_set.cljs$lang$applyTo = (function (arglist__46310){
var keys = cljs.core.seq(arglist__46310);
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__46311){
var comparator = cljs.core.first(arglist__46311);
var keys = cljs.core.rest(arglist__46311);
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
var replace__1 = (function (smap){return cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__46312_SHARP_){var temp__4124__auto__ = cljs.core.find(smap,p1__46312_SHARP_);if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;return cljs.core.val(e);
} else
{return p1__46312_SHARP_;
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
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46313_SHARP_){var temp__4124__auto__ = cljs.core.find(smap,p1__46313_SHARP_);if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;return cljs.core.second(e);
} else
{return p1__46313_SHARP_;
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
cljs.core.distinct = (function distinct(coll){var step = (function step(xs,seen){return (new cljs.core.LazySeq(null,(function (){return (function (p__46324,seen__$1){while(true){
var vec__46325 = p__46324;var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46325,(0),null);var xs__$1 = vec__46325;var temp__4126__auto__ = cljs.core.seq(xs__$1);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.contains_QMARK_(seen__$1,f))
{{
var G__46326 = cljs.core.rest(s);
var G__46327 = seen__$1;
p__46324 = G__46326;
seen__$1 = G__46327;
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
var G__46328 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.first(s__$1));
var G__46329 = cljs.core.next(s__$1);
ret = G__46328;
s__$1 = G__46329;
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
cljs.core.name = (function name(x){if((function (){var G__46331 = x;if(G__46331)
{var bit__20838__auto__ = (G__46331.cljs$lang$protocol_mask$partition1$ & (4096));if((bit__20838__auto__) || (G__46331.cljs$core$INamed$))
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
var G__46332 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(map,cljs.core.first(ks),cljs.core.first(vs));
var G__46333 = cljs.core.next(ks);
var G__46334 = cljs.core.next(vs);
map = G__46332;
ks = G__46333;
vs = G__46334;
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
var max_key__3 = (function (k,x,y){if(((function (){var G__46345 = x;return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__46345) : k.call(null,G__46345));
})() > (function (){var G__46346 = y;return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__46346) : k.call(null,G__46346));
})()))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__46347__delegate = function (k,x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__46335_SHARP_,p2__46336_SHARP_){return max_key.cljs$core$IFn$_invoke$arity$3(k,p1__46335_SHARP_,p2__46336_SHARP_);
}),max_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__46347 = function (k,x,y,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__46347__delegate.call(this,k,x,y,more);};
G__46347.cljs$lang$maxFixedArity = 3;
G__46347.cljs$lang$applyTo = (function (arglist__46348){
var k = cljs.core.first(arglist__46348);
arglist__46348 = cljs.core.next(arglist__46348);
var x = cljs.core.first(arglist__46348);
arglist__46348 = cljs.core.next(arglist__46348);
var y = cljs.core.first(arglist__46348);
var more = cljs.core.rest(arglist__46348);
return G__46347__delegate(k,x,y,more);
});
G__46347.cljs$core$IFn$_invoke$arity$variadic = G__46347__delegate;
return G__46347;
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
var min_key__3 = (function (k,x,y){if(((function (){var G__46359 = x;return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__46359) : k.call(null,G__46359));
})() < (function (){var G__46360 = y;return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__46360) : k.call(null,G__46360));
})()))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__46361__delegate = function (k,x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__46349_SHARP_,p2__46350_SHARP_){return min_key.cljs$core$IFn$_invoke$arity$3(k,p1__46349_SHARP_,p2__46350_SHARP_);
}),min_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__46361 = function (k,x,y,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__46361__delegate.call(this,k,x,y,more);};
G__46361.cljs$lang$maxFixedArity = 3;
G__46361.cljs$lang$applyTo = (function (arglist__46362){
var k = cljs.core.first(arglist__46362);
arglist__46362 = cljs.core.next(arglist__46362);
var x = cljs.core.first(arglist__46362);
arglist__46362 = cljs.core.next(arglist__46362);
var y = cljs.core.first(arglist__46362);
var more = cljs.core.rest(arglist__46362);
return G__46361__delegate(k,x,y,more);
});
G__46361.cljs$core$IFn$_invoke$arity$variadic = G__46361__delegate;
return G__46361;
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
cljs.core.ArrayList.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/ArrayList");
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
var partition_all__1 = (function (n){return (function (rf){var a = cljs.core.array_list();return ((function (a){
return (function() {
var G__46379 = null;
var G__46379__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__46379__1 = (function (result){var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec(a.toArray());a.clear();
var G__46374 = result;var G__46375 = v;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__46374,G__46375) : rf.call(null,G__46374,G__46375));
})());var G__46376 = result__$1;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__46376) : rf.call(null,G__46376));
});
var G__46379__2 = (function (result,input){a.add(input);
if((n === a.size()))
{var v = cljs.core.vec(a.toArray());a.clear();
var G__46377 = result;var G__46378 = v;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__46377,G__46378) : rf.call(null,G__46377,G__46378));
} else
{return result;
}
});
G__46379 = function(result,input){
switch(arguments.length){
case 0:
return G__46379__0.call(this);
case 1:
return G__46379__1.call(this,result);
case 2:
return G__46379__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46379.cljs$core$IFn$_invoke$arity$0 = G__46379__0;
G__46379.cljs$core$IFn$_invoke$arity$1 = G__46379__1;
G__46379.cljs$core$IFn$_invoke$arity$2 = G__46379__2;
return G__46379;
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
var take_while__1 = (function (pred){return (function (rf){return (function() {
var G__46392 = null;
var G__46392__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__46392__1 = (function (result){var G__46387 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__46387) : rf.call(null,G__46387));
});
var G__46392__2 = (function (result,input){if(cljs.core.truth_((function (){var G__46388 = input;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__46388) : pred.call(null,G__46388));
})()))
{var G__46389 = result;var G__46390 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__46389,G__46390) : rf.call(null,G__46389,G__46390));
} else
{return cljs.core.reduced(result);
}
});
G__46392 = function(result,input){
switch(arguments.length){
case 0:
return G__46392__0.call(this);
case 1:
return G__46392__1.call(this,result);
case 2:
return G__46392__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46392.cljs$core$IFn$_invoke$arity$0 = G__46392__0;
G__46392.cljs$core$IFn$_invoke$arity$1 = G__46392__1;
G__46392.cljs$core$IFn$_invoke$arity$2 = G__46392__2;
return G__46392;
})()
});
});
var take_while__2 = (function (pred,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.truth_((function (){var G__46391 = cljs.core.first(s);return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__46391) : pred.call(null,G__46391));
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
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){return (function (e){var comp = cljs.core._comparator(sc);var G__46397 = (function (){var G__46399 = cljs.core._entry_key(sc,e);var G__46400 = key;return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__46399,G__46400) : comp.call(null,G__46399,G__46400));
})();var G__46398 = (0);return (test.cljs$core$IFn$_invoke$arity$2 ? test.cljs$core$IFn$_invoke$arity$2(G__46397,G__46398) : test.call(null,G__46397,G__46398));
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
{var vec__46404 = temp__4126__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46404,(0),null);var s = vec__46404;if(cljs.core.truth_((function (){var G__46405 = e;return (include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(G__46405) : include.call(null,G__46405));
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
{var vec__46406 = temp__4126__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46406,(0),null);var s = vec__46406;return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.mk_bound_fn(sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,start_test,start_key).call(null,e))?s:cljs.core.next(s)));
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
{var vec__46410 = temp__4126__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46410,(0),null);var s = vec__46410;if(cljs.core.truth_((function (){var G__46411 = e;return (include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(G__46411) : include.call(null,G__46411));
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
{var vec__46412 = temp__4126__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46412,(0),null);var s = vec__46412;return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.mk_bound_fn(sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,end_test,end_key).call(null,e))?s:cljs.core.next(s)));
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
cljs.core.RangeIterator = (function (i,end,step){
this.i = i;
this.end = end;
this.step = step;
})
cljs.core.RangeIterator.cljs$lang$type = true;
cljs.core.RangeIterator.cljs$lang$ctorStr = "cljs.core/RangeIterator";
cljs.core.RangeIterator.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/RangeIterator");
});
cljs.core.RangeIterator.prototype.hasNext = (function (){var self__ = this;
var _ = this;if((self__.step > (0)))
{return (self__.i < self__.end);
} else
{return (self__.i > self__.end);
}
});
cljs.core.RangeIterator.prototype.next = (function (){var self__ = this;
var _ = this;var ret = self__.i;self__.i = (self__.i + self__.step);
return ret;
});
cljs.core.__GT_RangeIterator = (function __GT_RangeIterator(i,end,step){return (new cljs.core.RangeIterator(i,end,step));
});

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
cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/Range");
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
cljs.core.Range.prototype.cljs$core$IIterable$ = true;
cljs.core.Range.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.RangeIterator(self__.start,self__.end,self__.step));
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
{var G__46413 = ((self__.end - self__.start) / self__.step);return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__46413) : Math.ceil.call(null,G__46413));
}
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;var h__20393__auto__ = self__.__hash;if(!((h__20393__auto__ == null)))
{return h__20393__auto__;
} else
{var h__20393__auto____$1 = cljs.core.hash_ordered_coll(rng__$1);self__.__hash = h__20393__auto____$1;
return h__20393__auto____$1;
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
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,init){var self__ = this;
var rng__$1 = this;var i = self__.start;var ret = init;while(true){
if((((self__.step > (0)))?(i < self__.end):(i > self__.end)))
{var ret__$1 = (function (){var G__46414 = ret;var G__46415 = i;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__46414,G__46415) : f.call(null,G__46414,G__46415));
})();if(cljs.core.reduced_QMARK_(ret__$1))
{var G__46416 = ret__$1;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46416) : cljs.core.deref.call(null,G__46416));
} else
{{
var G__46417 = (i + self__.step);
var G__46418 = ret__$1;
i = G__46417;
ret = G__46418;
continue;
}
}
} else
{return ret;
}
break;
}
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
var take_nth__1 = (function (n){return (function (rf){var ia = (function (){var G__46434 = (-1);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46434) : cljs.core.atom.call(null,G__46434));
})();return ((function (ia){
return (function() {
var G__46438 = null;
var G__46438__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__46438__1 = (function (result){var G__46435 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__46435) : rf.call(null,G__46435));
});
var G__46438__2 = (function (result,input){var i = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ia,cljs.core.inc);if((cljs.core.rem(i,n) === (0)))
{var G__46436 = result;var G__46437 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__46436,G__46437) : rf.call(null,G__46436,G__46437));
} else
{return result;
}
});
G__46438 = function(result,input){
switch(arguments.length){
case 0:
return G__46438__0.call(this);
case 1:
return G__46438__1.call(this,result);
case 2:
return G__46438__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46438.cljs$core$IFn$_invoke$arity$0 = G__46438__0;
G__46438.cljs$core$IFn$_invoke$arity$1 = G__46438__1;
G__46438.cljs$core$IFn$_invoke$arity$2 = G__46438__2;
return G__46438;
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
var partition_by__1 = (function (f){return (function (rf){var a = cljs.core.array_list();var pa = (function (){var G__46454 = new cljs.core.Keyword("cljs.core","none","cljs.core/none",926646439);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46454) : cljs.core.atom.call(null,G__46454));
})();return ((function (a,pa){
return (function() {
var G__46466 = null;
var G__46466__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__46466__1 = (function (result){var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec(a.toArray());a.clear();
var G__46455 = result;var G__46456 = v;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__46455,G__46456) : rf.call(null,G__46455,G__46456));
})());var G__46457 = result__$1;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__46457) : rf.call(null,G__46457));
});
var G__46466__2 = (function (result,input){var pval = (function (){var G__46458 = pa;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46458) : cljs.core.deref.call(null,G__46458));
})();var val = (function (){var G__46459 = input;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__46459) : f.call(null,G__46459));
})();var G__46460_46467 = pa;var G__46461_46468 = val;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46460_46467,G__46461_46468) : cljs.core.reset_BANG_.call(null,G__46460_46467,G__46461_46468));
if((cljs.core.keyword_identical_QMARK_(pval,new cljs.core.Keyword("cljs.core","none","cljs.core/none",926646439))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,pval)))
{a.add(input);
return result;
} else
{var v = cljs.core.vec(a.toArray());a.clear();
var ret = (function (){var G__46462 = result;var G__46463 = v;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__46462,G__46463) : rf.call(null,G__46462,G__46463));
})();if(cljs.core.reduced_QMARK_(ret))
{} else
{a.add(input);
}
return ret;
}
});
G__46466 = function(result,input){
switch(arguments.length){
case 0:
return G__46466__0.call(this);
case 1:
return G__46466__1.call(this,result);
case 2:
return G__46466__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46466.cljs$core$IFn$_invoke$arity$0 = G__46466__0;
G__46466.cljs$core$IFn$_invoke$arity$1 = G__46466__1;
G__46466.cljs$core$IFn$_invoke$arity$2 = G__46466__2;
return G__46466;
})()
;})(a,pa))
});
});
var partition_by__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;var fst = cljs.core.first(s);var fv = (function (){var G__46464 = fst;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__46464) : f.call(null,G__46464));
})();var run = cljs.core.cons(fst,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (fst,fv,s,temp__4126__auto__){
return (function (p1__46439_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fv,(function (){var G__46465 = p1__46439_SHARP_;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__46465) : f.call(null,G__46465));
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
{var s = temp__4126__auto__;return reductions.cljs$core$IFn$_invoke$arity$3(f,(function (){var G__46477 = init;var G__46478 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__46477,G__46478) : f.call(null,G__46477,G__46478));
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
var G__46573 = null;
var G__46573__0 = (function (){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})()],null));
});
var G__46573__1 = (function (x){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__46531 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__46531) : f.call(null,G__46531));
})()],null));
});
var G__46573__2 = (function (x,y){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__46532 = x;var G__46533 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__46532,G__46533) : f.call(null,G__46532,G__46533));
})()],null));
});
var G__46573__3 = (function (x,y,z){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__46534 = x;var G__46535 = y;var G__46536 = z;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__46534,G__46535,G__46536) : f.call(null,G__46534,G__46535,G__46536));
})()],null));
});
var G__46573__4 = (function() { 
var G__46574__delegate = function (x,y,z,args){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args)],null));
};
var G__46574 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__46574__delegate.call(this,x,y,z,args);};
G__46574.cljs$lang$maxFixedArity = 3;
G__46574.cljs$lang$applyTo = (function (arglist__46575){
var x = cljs.core.first(arglist__46575);
arglist__46575 = cljs.core.next(arglist__46575);
var y = cljs.core.first(arglist__46575);
arglist__46575 = cljs.core.next(arglist__46575);
var z = cljs.core.first(arglist__46575);
var args = cljs.core.rest(arglist__46575);
return G__46574__delegate(x,y,z,args);
});
G__46574.cljs$core$IFn$_invoke$arity$variadic = G__46574__delegate;
return G__46574;
})()
;
G__46573 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__46573__0.call(this);
case 1:
return G__46573__1.call(this,x);
case 2:
return G__46573__2.call(this,x,y);
case 3:
return G__46573__3.call(this,x,y,z);
default:
return G__46573__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46573.cljs$lang$maxFixedArity = 3;
G__46573.cljs$lang$applyTo = G__46573__4.cljs$lang$applyTo;
G__46573.cljs$core$IFn$_invoke$arity$0 = G__46573__0;
G__46573.cljs$core$IFn$_invoke$arity$1 = G__46573__1;
G__46573.cljs$core$IFn$_invoke$arity$2 = G__46573__2;
G__46573.cljs$core$IFn$_invoke$arity$3 = G__46573__3;
G__46573.cljs$core$IFn$_invoke$arity$variadic = G__46573__4.cljs$core$IFn$_invoke$arity$variadic;
return G__46573;
})()
});
var juxt__2 = (function (f,g){return (function() {
var G__46576 = null;
var G__46576__0 = (function (){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),(function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})()],null));
});
var G__46576__1 = (function (x){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__46537 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__46537) : f.call(null,G__46537));
})(),(function (){var G__46538 = x;return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__46538) : g.call(null,G__46538));
})()],null));
});
var G__46576__2 = (function (x,y){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__46539 = x;var G__46540 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__46539,G__46540) : f.call(null,G__46539,G__46540));
})(),(function (){var G__46541 = x;var G__46542 = y;return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__46541,G__46542) : g.call(null,G__46541,G__46542));
})()],null));
});
var G__46576__3 = (function (x,y,z){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__46543 = x;var G__46544 = y;var G__46545 = z;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__46543,G__46544,G__46545) : f.call(null,G__46543,G__46544,G__46545));
})(),(function (){var G__46546 = x;var G__46547 = y;var G__46548 = z;return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__46546,G__46547,G__46548) : g.call(null,G__46546,G__46547,G__46548));
})()],null));
});
var G__46576__4 = (function() { 
var G__46577__delegate = function (x,y,z,args){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args)],null));
};
var G__46577 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__46577__delegate.call(this,x,y,z,args);};
G__46577.cljs$lang$maxFixedArity = 3;
G__46577.cljs$lang$applyTo = (function (arglist__46578){
var x = cljs.core.first(arglist__46578);
arglist__46578 = cljs.core.next(arglist__46578);
var y = cljs.core.first(arglist__46578);
arglist__46578 = cljs.core.next(arglist__46578);
var z = cljs.core.first(arglist__46578);
var args = cljs.core.rest(arglist__46578);
return G__46577__delegate(x,y,z,args);
});
G__46577.cljs$core$IFn$_invoke$arity$variadic = G__46577__delegate;
return G__46577;
})()
;
G__46576 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__46576__0.call(this);
case 1:
return G__46576__1.call(this,x);
case 2:
return G__46576__2.call(this,x,y);
case 3:
return G__46576__3.call(this,x,y,z);
default:
return G__46576__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46576.cljs$lang$maxFixedArity = 3;
G__46576.cljs$lang$applyTo = G__46576__4.cljs$lang$applyTo;
G__46576.cljs$core$IFn$_invoke$arity$0 = G__46576__0;
G__46576.cljs$core$IFn$_invoke$arity$1 = G__46576__1;
G__46576.cljs$core$IFn$_invoke$arity$2 = G__46576__2;
G__46576.cljs$core$IFn$_invoke$arity$3 = G__46576__3;
G__46576.cljs$core$IFn$_invoke$arity$variadic = G__46576__4.cljs$core$IFn$_invoke$arity$variadic;
return G__46576;
})()
});
var juxt__3 = (function (f,g,h){return (function() {
var G__46579 = null;
var G__46579__0 = (function (){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),(function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})(),(function (){return (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
})()],null));
});
var G__46579__1 = (function (x){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__46549 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__46549) : f.call(null,G__46549));
})(),(function (){var G__46550 = x;return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__46550) : g.call(null,G__46550));
})(),(function (){var G__46551 = x;return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__46551) : h.call(null,G__46551));
})()],null));
});
var G__46579__2 = (function (x,y){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__46552 = x;var G__46553 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__46552,G__46553) : f.call(null,G__46552,G__46553));
})(),(function (){var G__46554 = x;var G__46555 = y;return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__46554,G__46555) : g.call(null,G__46554,G__46555));
})(),(function (){var G__46556 = x;var G__46557 = y;return (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(G__46556,G__46557) : h.call(null,G__46556,G__46557));
})()],null));
});
var G__46579__3 = (function (x,y,z){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__46558 = x;var G__46559 = y;var G__46560 = z;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__46558,G__46559,G__46560) : f.call(null,G__46558,G__46559,G__46560));
})(),(function (){var G__46561 = x;var G__46562 = y;var G__46563 = z;return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__46561,G__46562,G__46563) : g.call(null,G__46561,G__46562,G__46563));
})(),(function (){var G__46564 = x;var G__46565 = y;var G__46566 = z;return (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(G__46564,G__46565,G__46566) : h.call(null,G__46564,G__46565,G__46566));
})()],null));
});
var G__46579__4 = (function() { 
var G__46580__delegate = function (x,y,z,args){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args)],null));
};
var G__46580 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__46580__delegate.call(this,x,y,z,args);};
G__46580.cljs$lang$maxFixedArity = 3;
G__46580.cljs$lang$applyTo = (function (arglist__46581){
var x = cljs.core.first(arglist__46581);
arglist__46581 = cljs.core.next(arglist__46581);
var y = cljs.core.first(arglist__46581);
arglist__46581 = cljs.core.next(arglist__46581);
var z = cljs.core.first(arglist__46581);
var args = cljs.core.rest(arglist__46581);
return G__46580__delegate(x,y,z,args);
});
G__46580.cljs$core$IFn$_invoke$arity$variadic = G__46580__delegate;
return G__46580;
})()
;
G__46579 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__46579__0.call(this);
case 1:
return G__46579__1.call(this,x);
case 2:
return G__46579__2.call(this,x,y);
case 3:
return G__46579__3.call(this,x,y,z);
default:
return G__46579__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46579.cljs$lang$maxFixedArity = 3;
G__46579.cljs$lang$applyTo = G__46579__4.cljs$lang$applyTo;
G__46579.cljs$core$IFn$_invoke$arity$0 = G__46579__0;
G__46579.cljs$core$IFn$_invoke$arity$1 = G__46579__1;
G__46579.cljs$core$IFn$_invoke$arity$2 = G__46579__2;
G__46579.cljs$core$IFn$_invoke$arity$3 = G__46579__3;
G__46579.cljs$core$IFn$_invoke$arity$variadic = G__46579__4.cljs$core$IFn$_invoke$arity$variadic;
return G__46579;
})()
});
var juxt__4 = (function() { 
var G__46582__delegate = function (f,g,h,fs){var fs__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f,g,h,fs);return ((function (fs__$1){
return (function() {
var G__46583 = null;
var G__46583__0 = (function (){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__46479_SHARP_,p2__46480_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__46479_SHARP_,(function (){return (p2__46480_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p2__46480_SHARP_.cljs$core$IFn$_invoke$arity$0() : p2__46480_SHARP_.call(null));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__46583__1 = (function (x){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__46481_SHARP_,p2__46482_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__46481_SHARP_,(function (){var G__46567 = x;return (p2__46482_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__46482_SHARP_.cljs$core$IFn$_invoke$arity$1(G__46567) : p2__46482_SHARP_.call(null,G__46567));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__46583__2 = (function (x,y){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__46483_SHARP_,p2__46484_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__46483_SHARP_,(function (){var G__46568 = x;var G__46569 = y;return (p2__46484_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__46484_SHARP_.cljs$core$IFn$_invoke$arity$2(G__46568,G__46569) : p2__46484_SHARP_.call(null,G__46568,G__46569));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__46583__3 = (function (x,y,z){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__46485_SHARP_,p2__46486_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__46485_SHARP_,(function (){var G__46570 = x;var G__46571 = y;var G__46572 = z;return (p2__46486_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p2__46486_SHARP_.cljs$core$IFn$_invoke$arity$3(G__46570,G__46571,G__46572) : p2__46486_SHARP_.call(null,G__46570,G__46571,G__46572));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__46583__4 = (function() { 
var G__46584__delegate = function (x,y,z,args){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__46487_SHARP_,p2__46488_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__46487_SHARP_,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(p2__46488_SHARP_,x,y,z,args));
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
};
var G__46584 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__46584__delegate.call(this,x,y,z,args);};
G__46584.cljs$lang$maxFixedArity = 3;
G__46584.cljs$lang$applyTo = (function (arglist__46585){
var x = cljs.core.first(arglist__46585);
arglist__46585 = cljs.core.next(arglist__46585);
var y = cljs.core.first(arglist__46585);
arglist__46585 = cljs.core.next(arglist__46585);
var z = cljs.core.first(arglist__46585);
var args = cljs.core.rest(arglist__46585);
return G__46584__delegate(x,y,z,args);
});
G__46584.cljs$core$IFn$_invoke$arity$variadic = G__46584__delegate;
return G__46584;
})()
;
G__46583 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__46583__0.call(this);
case 1:
return G__46583__1.call(this,x);
case 2:
return G__46583__2.call(this,x,y);
case 3:
return G__46583__3.call(this,x,y,z);
default:
return G__46583__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46583.cljs$lang$maxFixedArity = 3;
G__46583.cljs$lang$applyTo = G__46583__4.cljs$lang$applyTo;
G__46583.cljs$core$IFn$_invoke$arity$0 = G__46583__0;
G__46583.cljs$core$IFn$_invoke$arity$1 = G__46583__1;
G__46583.cljs$core$IFn$_invoke$arity$2 = G__46583__2;
G__46583.cljs$core$IFn$_invoke$arity$3 = G__46583__3;
G__46583.cljs$core$IFn$_invoke$arity$variadic = G__46583__4.cljs$core$IFn$_invoke$arity$variadic;
return G__46583;
})()
;})(fs__$1))
};
var G__46582 = function (f,g,h,var_args){
var fs = null;if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__46582__delegate.call(this,f,g,h,fs);};
G__46582.cljs$lang$maxFixedArity = 3;
G__46582.cljs$lang$applyTo = (function (arglist__46586){
var f = cljs.core.first(arglist__46586);
arglist__46586 = cljs.core.next(arglist__46586);
var g = cljs.core.first(arglist__46586);
arglist__46586 = cljs.core.next(arglist__46586);
var h = cljs.core.first(arglist__46586);
var fs = cljs.core.rest(arglist__46586);
return G__46582__delegate(f,g,h,fs);
});
G__46582.cljs$core$IFn$_invoke$arity$variadic = G__46582__delegate;
return G__46582;
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
var G__46587 = cljs.core.next(coll);
coll = G__46587;
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
var G__46588 = (n - (1));
var G__46589 = cljs.core.next(coll);
n = G__46588;
coll = G__46589;
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
cljs.core.re_pattern = (function re_pattern(s){if((s instanceof RegExp))
{return s;
} else
{var vec__46593 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,s);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46593,(0),null);var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46593,(1),null);var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46593,(2),null);return (new RegExp(pattern,flags));
}
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){var _STAR_print_level_STAR_46601 = cljs.core._STAR_print_level_STAR_;try{cljs.core._STAR_print_level_STAR_ = (((cljs.core._STAR_print_level_STAR_ == null))?null:(cljs.core._STAR_print_level_STAR_ - (1)));
if((!((cljs.core._STAR_print_level_STAR_ == null))) && ((cljs.core._STAR_print_level_STAR_ < (0))))
{return cljs.core._write(writer,"#");
} else
{cljs.core._write(writer,begin);
if(cljs.core.seq(coll))
{var G__46602_46608 = cljs.core.first(coll);var G__46603_46609 = writer;var G__46604_46610 = opts;(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__46602_46608,G__46603_46609,G__46604_46610) : print_one.call(null,G__46602_46608,G__46603_46609,G__46604_46610));
} else
{}
var coll_46611__$1 = cljs.core.next(coll);var n_46612 = (new cljs.core.Keyword(null,"print-length","print-length",1931866356).cljs$core$IFn$_invoke$arity$1(opts) - (1));while(true){
if((coll_46611__$1) && (((n_46612 == null)) || (!((n_46612 === (0))))))
{cljs.core._write(writer,sep);
var G__46605_46613 = cljs.core.first(coll_46611__$1);var G__46606_46614 = writer;var G__46607_46615 = opts;(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__46605_46613,G__46606_46614,G__46607_46615) : print_one.call(null,G__46605_46613,G__46606_46614,G__46607_46615));
{
var G__46616 = cljs.core.next(coll_46611__$1);
var G__46617 = (n_46612 - (1));
coll_46611__$1 = G__46616;
n_46612 = G__46617;
continue;
}
} else
{if((cljs.core.seq(coll_46611__$1)) && ((n_46612 === (0))))
{cljs.core._write(writer,sep);
cljs.core._write(writer,"...");
} else
{}
}
break;
}
return cljs.core._write(writer,end);
}
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_46601;
}});
/**
* @param {...*} var_args
*/
cljs.core.write_all = (function() { 
var write_all__delegate = function (writer,ss){var seq__46622 = cljs.core.seq(ss);var chunk__46623 = null;var count__46624 = (0);var i__46625 = (0);while(true){
if((i__46625 < count__46624))
{var s = chunk__46623.cljs$core$IIndexed$_nth$arity$2(null,i__46625);cljs.core._write(writer,s);
{
var G__46626 = seq__46622;
var G__46627 = chunk__46623;
var G__46628 = count__46624;
var G__46629 = (i__46625 + (1));
seq__46622 = G__46626;
chunk__46623 = G__46627;
count__46624 = G__46628;
i__46625 = G__46629;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__46622);if(temp__4126__auto__)
{var seq__46622__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__46622__$1))
{var c__21046__auto__ = cljs.core.chunk_first(seq__46622__$1);{
var G__46630 = cljs.core.chunk_rest(seq__46622__$1);
var G__46631 = c__21046__auto__;
var G__46632 = cljs.core.count(c__21046__auto__);
var G__46633 = (0);
seq__46622 = G__46630;
chunk__46623 = G__46631;
count__46624 = G__46632;
i__46625 = G__46633;
continue;
}
} else
{var s = cljs.core.first(seq__46622__$1);cljs.core._write(writer,s);
{
var G__46634 = cljs.core.next(seq__46622__$1);
var G__46635 = null;
var G__46636 = (0);
var G__46637 = (0);
seq__46622 = G__46634;
chunk__46623 = G__46635;
count__46624 = G__46636;
i__46625 = G__46637;
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
write_all.cljs$lang$applyTo = (function (arglist__46638){
var writer = cljs.core.first(arglist__46638);
var ss = cljs.core.rest(arglist__46638);
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
cljs.core.char_escapes = (function (){var obj46640 = {"\"":"\\\"","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};return obj46640;
})();
cljs.core.quote_string = (function quote_string(s){return ("\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s.replace((function (){var G__46643 = "[\\\\\"\b\f\n\r\t]";var G__46644 = "g";return RegExp(G__46643,G__46644);
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
{if(cljs.core.truth_((function (){var and__19564__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"meta","meta",1499536964));if(cljs.core.truth_(and__19564__auto__))
{var and__19564__auto____$1 = (function (){var G__46658 = obj;if(G__46658)
{var bit__20847__auto__ = (G__46658.cljs$lang$protocol_mask$partition0$ & (131072));if((bit__20847__auto__) || (G__46658.cljs$core$IMeta$))
{return true;
} else
{if((!G__46658.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__46658);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__46658);
}
})();if(and__19564__auto____$1)
{return cljs.core.meta(obj);
} else
{return and__19564__auto____$1;
}
} else
{return and__19564__auto__;
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
{if((function (){var G__46659 = obj;if(G__46659)
{var bit__20838__auto__ = (G__46659.cljs$lang$protocol_mask$partition0$ & (2147483648));if((bit__20838__auto__) || (G__46659.cljs$core$IPrintWithWriter$))
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
var G__46660 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(obj[k])], null);
}),cljs.core.js_keys(obj));var G__46661 = pr_writer;var G__46662 = writer;var G__46663 = opts;return (cljs.core.print_map.cljs$core$IFn$_invoke$arity$4 ? cljs.core.print_map.cljs$core$IFn$_invoke$arity$4(G__46660,G__46661,G__46662,G__46663) : cljs.core.print_map.call(null,G__46660,G__46661,G__46662,G__46663));
} else
{if(obj instanceof Array)
{return cljs.core.pr_sequential_writer(writer,pr_writer,"#js ["," ","]",opts,obj);
} else
{if(cljs.core.truth_((function (){var G__46664 = obj;return goog.isString(G__46664);
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
var G__46666 = ("0"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns));
ns = G__46666;
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
{if((function (){var G__46665 = obj;if(G__46665)
{var bit__20847__auto__ = (G__46665.cljs$lang$protocol_mask$partition0$ & (2147483648));if((bit__20847__auto__) || (G__46665.cljs$core$IPrintWithWriter$))
{return true;
} else
{if((!G__46665.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__46665);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__46665);
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
var seq__46671 = cljs.core.seq(cljs.core.next(objs));var chunk__46672 = null;var count__46673 = (0);var i__46674 = (0);while(true){
if((i__46674 < count__46673))
{var obj = chunk__46672.cljs$core$IIndexed$_nth$arity$2(null,i__46674);cljs.core._write(writer," ");
cljs.core.pr_writer(obj,writer,opts);
{
var G__46675 = seq__46671;
var G__46676 = chunk__46672;
var G__46677 = count__46673;
var G__46678 = (i__46674 + (1));
seq__46671 = G__46675;
chunk__46672 = G__46676;
count__46673 = G__46677;
i__46674 = G__46678;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__46671);if(temp__4126__auto__)
{var seq__46671__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__46671__$1))
{var c__21046__auto__ = cljs.core.chunk_first(seq__46671__$1);{
var G__46679 = cljs.core.chunk_rest(seq__46671__$1);
var G__46680 = c__21046__auto__;
var G__46681 = cljs.core.count(c__21046__auto__);
var G__46682 = (0);
seq__46671 = G__46679;
chunk__46672 = G__46680;
count__46673 = G__46681;
i__46674 = G__46682;
continue;
}
} else
{var obj = cljs.core.first(seq__46671__$1);cljs.core._write(writer," ");
cljs.core.pr_writer(obj,writer,opts);
{
var G__46683 = cljs.core.next(seq__46671__$1);
var G__46684 = null;
var G__46685 = (0);
var G__46686 = (0);
seq__46671 = G__46683;
chunk__46672 = G__46684;
count__46673 = G__46685;
i__46674 = G__46686;
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
pr_str.cljs$lang$applyTo = (function (arglist__46687){
var objs = cljs.core.seq(arglist__46687);
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
prn_str.cljs$lang$applyTo = (function (arglist__46688){
var objs = cljs.core.seq(arglist__46688);
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
pr.cljs$lang$applyTo = (function (arglist__46689){
var objs = cljs.core.seq(arglist__46689);
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__46690){
var objs = cljs.core.seq(arglist__46690);
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
print_str.cljs$lang$applyTo = (function (arglist__46691){
var objs = cljs.core.seq(arglist__46691);
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
println.cljs$lang$applyTo = (function (arglist__46692){
var objs = cljs.core.seq(arglist__46692);
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
println_str.cljs$lang$applyTo = (function (arglist__46693){
var objs = cljs.core.seq(arglist__46693);
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
prn.cljs$lang$applyTo = (function (arglist__46694){
var objs = cljs.core.seq(arglist__46694);
return prn__delegate(objs);
});
prn.cljs$core$IFn$_invoke$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.print_map = (function print_map(m,print_one,writer,opts){return cljs.core.pr_sequential_writer(writer,(function (e,w,opts__$1){var G__46701_46707 = cljs.core.key(e);var G__46702_46708 = w;var G__46703_46709 = opts__$1;(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__46701_46707,G__46702_46708,G__46703_46709) : print_one.call(null,G__46701_46707,G__46702_46708,G__46703_46709));
cljs.core._write(w," ");
var G__46704 = cljs.core.val(e);var G__46705 = w;var G__46706 = opts__$1;return (print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__46704,G__46705,G__46706) : print_one.call(null,G__46704,G__46705,G__46706));
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__46710){
var iref = cljs.core.first(arglist__46710);
arglist__46710 = cljs.core.next(arglist__46710);
var f = cljs.core.first(arglist__46710);
var args = cljs.core.rest(arglist__46710);
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
{cljs.core.gensym_counter = (function (){var G__46713 = (0);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46713) : cljs.core.atom.call(null,G__46713));
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
cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/Delay");
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
{var G__46715 = x;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46715) : cljs.core.deref.call(null,G__46715));
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){return cljs.core._realized_QMARK_(d);
});
cljs.core.preserving_reduced = (function preserving_reduced(rf){return (function (p1__46716_SHARP_,p2__46717_SHARP_){var ret = (function (){var G__46720 = p1__46716_SHARP_;var G__46721 = p2__46717_SHARP_;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__46720,G__46721) : rf.call(null,G__46720,G__46721));
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
cljs.core.cat = (function cat(rf){var rf1 = cljs.core.preserving_reduced(rf);return ((function (rf1){
return (function() {
var G__46724 = null;
var G__46724__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__46724__1 = (function (result){var G__46723 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__46723) : rf.call(null,G__46723));
});
var G__46724__2 = (function (result,input){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf1,result,input);
});
G__46724 = function(result,input){
switch(arguments.length){
case 0:
return G__46724__0.call(this);
case 1:
return G__46724__1.call(this,result);
case 2:
return G__46724__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46724.cljs$core$IFn$_invoke$arity$0 = G__46724__0;
G__46724.cljs$core$IFn$_invoke$arity$1 = G__46724__1;
G__46724.cljs$core$IFn$_invoke$arity$2 = G__46724__2;
return G__46724;
})()
;})(rf1))
});
/**
* Returns a lazy sequence removing consecutive duplicates in coll.
* Returns a transducer when no collection is provided.
*/
cljs.core.dedupe = (function() {
var dedupe = null;
var dedupe__0 = (function (){return (function (rf){var pa = (function (){var G__46732 = new cljs.core.Keyword("cljs.core","none","cljs.core/none",926646439);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46732) : cljs.core.atom.call(null,G__46732));
})();return ((function (pa){
return (function() {
var G__46739 = null;
var G__46739__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__46739__1 = (function (result){var G__46733 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__46733) : rf.call(null,G__46733));
});
var G__46739__2 = (function (result,input){var prior = (function (){var G__46734 = pa;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46734) : cljs.core.deref.call(null,G__46734));
})();var G__46735_46740 = pa;var G__46736_46741 = input;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46735_46740,G__46736_46741) : cljs.core.reset_BANG_.call(null,G__46735_46740,G__46736_46741));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prior,input))
{return result;
} else
{var G__46737 = result;var G__46738 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__46737,G__46738) : rf.call(null,G__46737,G__46738));
}
});
G__46739 = function(result,input){
switch(arguments.length){
case 0:
return G__46739__0.call(this);
case 1:
return G__46739__1.call(this,result);
case 2:
return G__46739__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46739.cljs$core$IFn$_invoke$arity$0 = G__46739__0;
G__46739.cljs$core$IFn$_invoke$arity$1 = G__46739__1;
G__46739.cljs$core$IFn$_invoke$arity$2 = G__46739__2;
return G__46739;
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
cljs.core.Eduction = (function (xform,coll){
this.xform = xform;
this.coll = coll;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2173173760;
})
cljs.core.Eduction.cljs$lang$type = true;
cljs.core.Eduction.cljs$lang$ctorStr = "cljs.core/Eduction";
cljs.core.Eduction.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/Eduction");
});
cljs.core.Eduction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll__$1,writer,opts){var self__ = this;
var coll__$2 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$2);
});
cljs.core.Eduction.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f,init){var self__ = this;
var ___$1 = this;return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(self__.xform,f,init,self__.coll);
});
cljs.core.Eduction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.seq(cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(self__.xform,self__.coll));
});
cljs.core.__GT_Eduction = (function __GT_Eduction(xform,coll){return (new cljs.core.Eduction(xform,coll));
});
/**
* Returns a reducible/iterable/seqable application of
* the transducer to the items in coll. Note that these applications
* will be performed every time iterator/seq/reduce is called.
*/
cljs.core.eduction = (function eduction(xform,coll){return (new cljs.core.Eduction(xform,coll));
});
/**
* Runs the supplied procedure (via reduce), for purposes of side
* effects, on successive items in the collection. Returns nil
*/
cljs.core.run_BANG_ = (function run_BANG_(proc,coll){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__46743_SHARP_,p2__46742_SHARP_){var G__46745 = p2__46742_SHARP_;return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(G__46745) : proc.call(null,G__46745));
}),null,coll);
});
cljs.core.IEncodeJS = (function (){var obj46747 = {};return obj46747;
})();
cljs.core._clj__GT_js = (function _clj__GT_js(x){if((function (){var and__19564__auto__ = x;if(and__19564__auto__)
{return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1;
} else
{return and__19564__auto__;
}
})())
{return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1(x);
} else
{var x__20812__auto__ = (((x == null))?null:x);return (function (){var or__19586__auto__ = (cljs.core._clj__GT_js[(function (){var G__46751 = x__20812__auto__;return goog.typeOf(G__46751);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._clj__GT_js["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IEncodeJS.-clj->js",x);
}
}
})().call(null,x);
}
});
cljs.core._key__GT_js = (function _key__GT_js(x){if((function (){var and__19564__auto__ = x;if(and__19564__auto__)
{return x.cljs$core$IEncodeJS$_key__GT_js$arity$1;
} else
{return and__19564__auto__;
}
})())
{return x.cljs$core$IEncodeJS$_key__GT_js$arity$1(x);
} else
{var x__20812__auto__ = (((x == null))?null:x);return (function (){var or__19586__auto__ = (cljs.core._key__GT_js[(function (){var G__46755 = x__20812__auto__;return goog.typeOf(G__46755);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._key__GT_js["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IEncodeJS.-key->js",x);
}
}
})().call(null,x);
}
});
cljs.core.key__GT_js = (function key__GT_js(k){if((function (){var G__46758 = k;if(G__46758)
{var bit__20847__auto__ = null;if(cljs.core.truth_((function (){var or__19586__auto__ = bit__20847__auto__;if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{return G__46758.cljs$core$IEncodeJS$;
}
})()))
{return true;
} else
{if((!G__46758.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__46758);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__46758);
}
})())
{return cljs.core._clj__GT_js(k);
} else
{if((typeof k === 'string') || (typeof k === 'number') || ((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol)))
{var G__46759 = k;return (cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1 ? cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1(G__46759) : cljs.core.clj__GT_js.call(null,G__46759));
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
{if((function (){var G__46775 = x;if(G__46775)
{var bit__20847__auto__ = null;if(cljs.core.truth_((function (){var or__19586__auto__ = bit__20847__auto__;if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{return G__46775.cljs$core$IEncodeJS$;
}
})()))
{return true;
} else
{if((!G__46775.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__46775);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__46775);
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
{var m = (function (){var obj46777 = {};return obj46777;
})();var seq__46778_46788 = cljs.core.seq(x);var chunk__46779_46789 = null;var count__46780_46790 = (0);var i__46781_46791 = (0);while(true){
if((i__46781_46791 < count__46780_46790))
{var vec__46782_46792 = chunk__46779_46789.cljs$core$IIndexed$_nth$arity$2(null,i__46781_46791);var k_46793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46782_46792,(0),null);var v_46794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46782_46792,(1),null);(m[cljs.core.key__GT_js(k_46793)] = clj__GT_js(v_46794));
{
var G__46795 = seq__46778_46788;
var G__46796 = chunk__46779_46789;
var G__46797 = count__46780_46790;
var G__46798 = (i__46781_46791 + (1));
seq__46778_46788 = G__46795;
chunk__46779_46789 = G__46796;
count__46780_46790 = G__46797;
i__46781_46791 = G__46798;
continue;
}
} else
{var temp__4126__auto___46799 = cljs.core.seq(seq__46778_46788);if(temp__4126__auto___46799)
{var seq__46778_46800__$1 = temp__4126__auto___46799;if(cljs.core.chunked_seq_QMARK_(seq__46778_46800__$1))
{var c__21046__auto___46801 = cljs.core.chunk_first(seq__46778_46800__$1);{
var G__46802 = cljs.core.chunk_rest(seq__46778_46800__$1);
var G__46803 = c__21046__auto___46801;
var G__46804 = cljs.core.count(c__21046__auto___46801);
var G__46805 = (0);
seq__46778_46788 = G__46802;
chunk__46779_46789 = G__46803;
count__46780_46790 = G__46804;
i__46781_46791 = G__46805;
continue;
}
} else
{var vec__46783_46806 = cljs.core.first(seq__46778_46800__$1);var k_46807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46783_46806,(0),null);var v_46808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46783_46806,(1),null);(m[cljs.core.key__GT_js(k_46807)] = clj__GT_js(v_46808));
{
var G__46809 = cljs.core.next(seq__46778_46800__$1);
var G__46810 = null;
var G__46811 = (0);
var G__46812 = (0);
seq__46778_46788 = G__46809;
chunk__46779_46789 = G__46810;
count__46780_46790 = G__46811;
i__46781_46791 = G__46812;
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
{var arr = [];var seq__46784_46813 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clj__GT_js,x));var chunk__46785_46814 = null;var count__46786_46815 = (0);var i__46787_46816 = (0);while(true){
if((i__46787_46816 < count__46786_46815))
{var x_46817__$1 = chunk__46785_46814.cljs$core$IIndexed$_nth$arity$2(null,i__46787_46816);arr.push(x_46817__$1);
{
var G__46818 = seq__46784_46813;
var G__46819 = chunk__46785_46814;
var G__46820 = count__46786_46815;
var G__46821 = (i__46787_46816 + (1));
seq__46784_46813 = G__46818;
chunk__46785_46814 = G__46819;
count__46786_46815 = G__46820;
i__46787_46816 = G__46821;
continue;
}
} else
{var temp__4126__auto___46822 = cljs.core.seq(seq__46784_46813);if(temp__4126__auto___46822)
{var seq__46784_46823__$1 = temp__4126__auto___46822;if(cljs.core.chunked_seq_QMARK_(seq__46784_46823__$1))
{var c__21046__auto___46824 = cljs.core.chunk_first(seq__46784_46823__$1);{
var G__46825 = cljs.core.chunk_rest(seq__46784_46823__$1);
var G__46826 = c__21046__auto___46824;
var G__46827 = cljs.core.count(c__21046__auto___46824);
var G__46828 = (0);
seq__46784_46813 = G__46825;
chunk__46785_46814 = G__46826;
count__46786_46815 = G__46827;
i__46787_46816 = G__46828;
continue;
}
} else
{var x_46829__$1 = cljs.core.first(seq__46784_46823__$1);arr.push(x_46829__$1);
{
var G__46830 = cljs.core.next(seq__46784_46823__$1);
var G__46831 = null;
var G__46832 = (0);
var G__46833 = (0);
seq__46784_46813 = G__46830;
chunk__46785_46814 = G__46831;
count__46786_46815 = G__46832;
i__46787_46816 = G__46833;
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
cljs.core.IEncodeClojure = (function (){var obj46835 = {};return obj46835;
})();
cljs.core._js__GT_clj = (function _js__GT_clj(x,options){if((function (){var and__19564__auto__ = x;if(and__19564__auto__)
{return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2;
} else
{return and__19564__auto__;
}
})())
{return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2(x,options);
} else
{var x__20812__auto__ = (((x == null))?null:x);return (function (){var or__19586__auto__ = (cljs.core._js__GT_clj[(function (){var G__46839 = x__20812__auto__;return goog.typeOf(G__46839);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._js__GT_clj["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
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
var G__46894__delegate = function (x,opts){if((function (){var G__46868 = x;if(G__46868)
{var bit__20847__auto__ = null;if(cljs.core.truth_((function (){var or__19586__auto__ = bit__20847__auto__;if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{return G__46868.cljs$core$IEncodeClojure$;
}
})()))
{return true;
} else
{if((!G__46868.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__46868);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__46868);
}
})())
{return cljs.core._js__GT_clj(x,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,opts));
} else
{if(cljs.core.seq(opts))
{var map__46869 = opts;var map__46869__$1 = ((cljs.core.seq_QMARK_(map__46869))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46869):map__46869);var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46869__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252));var keyfn = (cljs.core.truth_(keywordize_keys)?cljs.core.keyword:cljs.core.str);var f = ((function (map__46869,map__46869__$1,keywordize_keys,keyfn){
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
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20990__auto__ = ((function (map__46869,map__46869__$1,keywordize_keys,keyfn){
return (function iter__46884(s__46885){return (new cljs.core.LazySeq(null,((function (map__46869,map__46869__$1,keywordize_keys,keyfn){
return (function (){var s__46885__$1 = s__46885;while(true){
var temp__4126__auto__ = cljs.core.seq(s__46885__$1);if(temp__4126__auto__)
{var s__46885__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__46885__$2))
{var c__20988__auto__ = cljs.core.chunk_first(s__46885__$2);var size__20989__auto__ = cljs.core.count(c__20988__auto__);var b__46887 = cljs.core.chunk_buffer(size__20989__auto__);if((function (){var i__46886 = (0);while(true){
if((i__46886 < size__20989__auto__))
{var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20988__auto__,i__46886);cljs.core.chunk_append(b__46887,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46892 = k;return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__46892) : keyfn.call(null,G__46892));
})(),thisfn((x__$1[k]))], null));
{
var G__46895 = (i__46886 + (1));
i__46886 = G__46895;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46887),iter__46884(cljs.core.chunk_rest(s__46885__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46887),null);
}
} else
{var k = cljs.core.first(s__46885__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46893 = k;return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__46893) : keyfn.call(null,G__46893));
})(),thisfn((x__$1[k]))], null),iter__46884(cljs.core.rest(s__46885__$2)));
}
} else
{return null;
}
break;
}
});})(map__46869,map__46869__$1,keywordize_keys,keyfn))
,null,null));
});})(map__46869,map__46869__$1,keywordize_keys,keyfn))
;return iter__20990__auto__(cljs.core.js_keys(x__$1));
})());
} else
{return x__$1;

}
}
}
}
});})(map__46869,map__46869__$1,keywordize_keys,keyfn))
;return f(x);
} else
{return null;
}
}
};
var G__46894 = function (x,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__46894__delegate.call(this,x,opts);};
G__46894.cljs$lang$maxFixedArity = 1;
G__46894.cljs$lang$applyTo = (function (arglist__46896){
var x = cljs.core.first(arglist__46896);
var opts = cljs.core.rest(arglist__46896);
return G__46894__delegate(x,opts);
});
G__46894.cljs$core$IFn$_invoke$arity$variadic = G__46894__delegate;
return G__46894;
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
cljs.core.memoize = (function memoize(f){var mem = (function (){var G__46899 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46899) : cljs.core.atom.call(null,G__46899));
})();return ((function (mem){
return (function() { 
var G__46901__delegate = function (args){var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var G__46900 = mem;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46900) : cljs.core.deref.call(null,G__46900));
})(),args,cljs.core.lookup_sentinel);if((v === cljs.core.lookup_sentinel))
{var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,args,ret);
return ret;
} else
{return v;
}
};
var G__46901 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__46901__delegate.call(this,args);};
G__46901.cljs$lang$maxFixedArity = 0;
G__46901.cljs$lang$applyTo = (function (arglist__46902){
var args = cljs.core.seq(arglist__46902);
return G__46901__delegate(args);
});
G__46901.cljs$core$IFn$_invoke$arity$variadic = G__46901__delegate;
return G__46901;
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
var G__46904 = ret;
f = G__46904;
continue;
}
} else
{return ret;
}
break;
}
});
var trampoline__2 = (function() { 
var G__46905__delegate = function (f,args){return trampoline.cljs$core$IFn$_invoke$arity$1((function (){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}));
};
var G__46905 = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__46905__delegate.call(this,f,args);};
G__46905.cljs$lang$maxFixedArity = 1;
G__46905.cljs$lang$applyTo = (function (arglist__46906){
var f = cljs.core.first(arglist__46906);
var args = cljs.core.rest(arglist__46906);
return G__46905__delegate(f,args);
});
G__46905.cljs$core$IFn$_invoke$arity$variadic = G__46905__delegate;
return G__46905;
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
cljs.core.rand_int = (function rand_int(n){var G__46909 = ((function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})() * n);return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__46909) : Math.floor.call(null,G__46909));
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
cljs.core.group_by = (function group_by(f,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){var k = (function (){var G__46911 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__46911) : f.call(null,G__46911));
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
{cljs.core._global_hierarchy = (function (){var G__46913 = cljs.core.make_hierarchy();return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46913) : cljs.core.atom.call(null,G__46913));
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
swap_global_hierarchy_BANG_.cljs$lang$applyTo = (function (arglist__46914){
var f = cljs.core.first(arglist__46914);
var args = cljs.core.rest(arglist__46914);
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
var isa_QMARK___2 = (function (child,parent){return isa_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__46979 = cljs.core.get_global_hierarchy();return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46979) : cljs.core.deref.call(null,G__46979));
})(),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){var or__19586__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child,parent);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"ancestors","ancestors",-776045424).cljs$core$IFn$_invoke$arity$1(h).call(null,child),parent);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{var and__19564__auto__ = cljs.core.vector_QMARK_(parent);if(and__19564__auto__)
{var and__19564__auto____$1 = cljs.core.vector_QMARK_(child);if(and__19564__auto____$1)
{var and__19564__auto____$2 = (cljs.core.count(parent) === cljs.core.count(child));if(and__19564__auto____$2)
{var ret = true;var i = (0);while(true){
if((!(ret)) || ((i === cljs.core.count(parent))))
{return ret;
} else
{{
var G__47004 = isa_QMARK_.cljs$core$IFn$_invoke$arity$3(h,(function (){var G__47002 = i;return (child.cljs$core$IFn$_invoke$arity$1 ? child.cljs$core$IFn$_invoke$arity$1(G__47002) : child.call(null,G__47002));
})(),(function (){var G__47003 = i;return (parent.cljs$core$IFn$_invoke$arity$1 ? parent.cljs$core$IFn$_invoke$arity$1(G__47003) : parent.call(null,G__47003));
})());
var G__47005 = (i + (1));
ret = G__47004;
i = G__47005;
continue;
}
}
break;
}
} else
{return and__19564__auto____$2;
}
} else
{return and__19564__auto____$1;
}
} else
{return and__19564__auto__;
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
var parents__1 = (function (tag){return parents.cljs$core$IFn$_invoke$arity$2((function (){var G__47009 = cljs.core.get_global_hierarchy();return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47009) : cljs.core.deref.call(null,G__47009));
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
var ancestors__1 = (function (tag){return ancestors.cljs$core$IFn$_invoke$arity$2((function (){var G__47013 = cljs.core.get_global_hierarchy();return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47013) : cljs.core.deref.call(null,G__47013));
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
var descendants__1 = (function (tag){return descendants.cljs$core$IFn$_invoke$arity$2((function (){var G__47017 = cljs.core.get_global_hierarchy();return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47017) : cljs.core.deref.call(null,G__47017));
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
return (function (ret,k){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.get.cljs$core$IFn$_invoke$arity$3(targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons(target,(function (){var G__47026 = target;return (targets.cljs$core$IFn$_invoke$arity$1 ? targets.cljs$core$IFn$_invoke$arity$1(G__47026) : targets.call(null,G__47026));
})())));
});})(tp,td,ta))
,m,cljs.core.cons(source,(function (){var G__47027 = source;return (sources.cljs$core$IFn$_invoke$arity$1 ? sources.cljs$core$IFn$_invoke$arity$1(G__47027) : sources.call(null,G__47027));
})()));
});})(tp,td,ta))
;var or__19586__auto__ = ((cljs.core.contains_QMARK_((function (){var G__47031 = tag;return (tp.cljs$core$IFn$_invoke$arity$1 ? tp.cljs$core$IFn$_invoke$arity$1(G__47031) : tp.call(null,G__47031));
})(),parent))?null:(function (){if(cljs.core.contains_QMARK_((function (){var G__47032 = tag;return (ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(G__47032) : ta.call(null,G__47032));
})(),parent))
{throw (new Error((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+"already has"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent)+"as ancestor")));
} else
{}
if(cljs.core.contains_QMARK_((function (){var G__47033 = parent;return (ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(G__47033) : ta.call(null,G__47033));
})(),tag))
{throw (new Error(("Cyclic derivation:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent)+"has"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+"as ancestor")));
} else
{}
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parents","parents",-2027538891),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(h),tag,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(tp,tag,cljs.core.PersistentHashSet.EMPTY),parent)),new cljs.core.Keyword(null,"ancestors","ancestors",-776045424),tf(new cljs.core.Keyword(null,"ancestors","ancestors",-776045424).cljs$core$IFn$_invoke$arity$1(h),tag,td,parent,ta),new cljs.core.Keyword(null,"descendants","descendants",1824886031),tf(new cljs.core.Keyword(null,"descendants","descendants",1824886031).cljs$core$IFn$_invoke$arity$1(h),parent,ta,tag,td)], null);
})());if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
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
var underive__3 = (function (h,tag,parent){var parentMap = new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(h);var childsParents = (cljs.core.truth_((function (){var G__47040 = tag;return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__47040) : parentMap.call(null,G__47040));
})())?cljs.core.disj.cljs$core$IFn$_invoke$arity$2((function (){var G__47041 = tag;return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__47041) : parentMap.call(null,G__47041));
})(),parent):cljs.core.PersistentHashSet.EMPTY);var newParents = (cljs.core.truth_(cljs.core.not_empty(childsParents))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parentMap,tag,childsParents):cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parentMap,tag));var deriv_seq = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parentMap,childsParents,newParents){
return (function (p1__47034_SHARP_){return cljs.core.cons(cljs.core.first(p1__47034_SHARP_),cljs.core.interpose(cljs.core.first(p1__47034_SHARP_),cljs.core.second(p1__47034_SHARP_)));
});})(parentMap,childsParents,newParents))
,cljs.core.seq(newParents)));if(cljs.core.contains_QMARK_((function (){var G__47042 = tag;return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__47042) : parentMap.call(null,G__47042));
})(),parent))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (parentMap,childsParents,newParents,deriv_seq){
return (function (p1__47035_SHARP_,p2__47036_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.derive,p1__47035_SHARP_,p2__47036_SHARP_);
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
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(method_cache,(function (_){var G__47045 = method_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47045) : cljs.core.deref.call(null,G__47045));
}));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cached_hierarchy,(function (_){var G__47046 = hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47046) : cljs.core.deref.call(null,G__47046));
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){var xprefs = (function (){var G__47062 = prefer_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47062) : cljs.core.deref.call(null,G__47062));
})().call(null,x);var or__19586__auto__ = (cljs.core.truth_((function (){var and__19564__auto__ = xprefs;if(cljs.core.truth_(and__19564__auto__))
{var G__47064 = y;return (xprefs.cljs$core$IFn$_invoke$arity$1 ? xprefs.cljs$core$IFn$_invoke$arity$1(G__47064) : xprefs.call(null,G__47064));
} else
{return and__19564__auto__;
}
})())?true:null);if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(y);while(true){
if((cljs.core.count(ps) > (0)))
{if(cljs.core.truth_(prefers_STAR_(x,cljs.core.first(ps),prefer_table)))
{} else
{}
{
var G__47065 = cljs.core.rest(ps);
ps = G__47065;
continue;
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(or__19586__auto____$1))
{return or__19586__auto____$1;
} else
{var or__19586__auto____$2 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(x);while(true){
if((cljs.core.count(ps) > (0)))
{if(cljs.core.truth_(prefers_STAR_(cljs.core.first(ps),y,prefer_table)))
{} else
{}
{
var G__47066 = cljs.core.rest(ps);
ps = G__47066;
continue;
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(or__19586__auto____$2))
{return or__19586__auto____$2;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){var or__19586__auto__ = cljs.core.prefers_STAR_(x,y,prefer_table);if(cljs.core.truth_(or__19586__auto__))
{return or__19586__auto__;
} else
{return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){var best_entry = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (be,p__47080){var vec__47081 = p__47080;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47081,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47081,(1),null);var e = vec__47081;if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__47082 = hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47082) : cljs.core.deref.call(null,G__47082));
})(),dispatch_val,k))
{var be2 = (cljs.core.truth_((function (){var or__19586__auto__ = (be == null);if(or__19586__auto__)
{return or__19586__auto__;
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
}),null,(function (){var G__47083 = method_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47083) : cljs.core.deref.call(null,G__47083));
})());if(cljs.core.truth_(best_entry))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__47084 = cached_hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47084) : cljs.core.deref.call(null,G__47084));
})(),(function (){var G__47085 = hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47085) : cljs.core.deref.call(null,G__47085));
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
cljs.core.IMultiFn = (function (){var obj47087 = {};return obj47087;
})();
cljs.core._reset = (function _reset(mf){if((function (){var and__19564__auto__ = mf;if(and__19564__auto__)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__19564__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__20812__auto__ = (((mf == null))?null:mf);return (function (){var or__19586__auto__ = (cljs.core._reset[(function (){var G__47091 = x__20812__auto__;return goog.typeOf(G__47091);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._reset["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){if((function (){var and__19564__auto__ = mf;if(and__19564__auto__)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__19564__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__20812__auto__ = (((mf == null))?null:mf);return (function (){var or__19586__auto__ = (cljs.core._add_method[(function (){var G__47095 = x__20812__auto__;return goog.typeOf(G__47095);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._add_method["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){if((function (){var and__19564__auto__ = mf;if(and__19564__auto__)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__19564__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__20812__auto__ = (((mf == null))?null:mf);return (function (){var or__19586__auto__ = (cljs.core._remove_method[(function (){var G__47099 = x__20812__auto__;return goog.typeOf(G__47099);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._remove_method["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){if((function (){var and__19564__auto__ = mf;if(and__19564__auto__)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__19564__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__20812__auto__ = (((mf == null))?null:mf);return (function (){var or__19586__auto__ = (cljs.core._prefer_method[(function (){var G__47103 = x__20812__auto__;return goog.typeOf(G__47103);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._prefer_method["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){if((function (){var and__19564__auto__ = mf;if(and__19564__auto__)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__19564__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__20812__auto__ = (((mf == null))?null:mf);return (function (){var or__19586__auto__ = (cljs.core._get_method[(function (){var G__47107 = x__20812__auto__;return goog.typeOf(G__47107);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._get_method["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){if((function (){var and__19564__auto__ = mf;if(and__19564__auto__)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__19564__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__20812__auto__ = (((mf == null))?null:mf);return (function (){var or__19586__auto__ = (cljs.core._methods[(function (){var G__47111 = x__20812__auto__;return goog.typeOf(G__47111);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._methods["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){if((function (){var and__19564__auto__ = mf;if(and__19564__auto__)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__19564__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__20812__auto__ = (((mf == null))?null:mf);return (function (){var or__19586__auto__ = (cljs.core._prefers[(function (){var G__47115 = x__20812__auto__;return goog.typeOf(G__47115);
})()]);if(or__19586__auto__)
{return or__19586__auto__;
} else
{var or__19586__auto____$1 = (cljs.core._prefers["_"]);if(or__19586__auto____$1)
{return or__19586__auto____$1;
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
cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__47117 = this$__$1;return goog.getUid(G__47117);
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
var mf__$1 = this;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__47118 = self__.cached_hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47118) : cljs.core.deref.call(null,G__47118));
})(),(function (){var G__47119 = self__.hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47119) : cljs.core.deref.call(null,G__47119));
})()))
{} else
{cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
}
var temp__4124__auto__ = (function (){var G__47120 = self__.method_cache;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47120) : cljs.core.deref.call(null,G__47120));
})().call(null,dispatch_val);if(cljs.core.truth_(temp__4124__auto__))
{var target_fn = temp__4124__auto__;return target_fn;
} else
{var temp__4124__auto____$1 = cljs.core.find_and_cache_best_method(self__.name,dispatch_val,self__.hierarchy,self__.method_table,self__.prefer_table,self__.method_cache,self__.cached_hierarchy);if(cljs.core.truth_(temp__4124__auto____$1))
{var target_fn = temp__4124__auto____$1;return target_fn;
} else
{return (function (){var G__47121 = self__.method_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47121) : cljs.core.deref.call(null,G__47121));
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
var mf__$1 = this;var G__47122 = self__.method_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47122) : cljs.core.deref.call(null,G__47122));
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){var self__ = this;
var mf__$1 = this;var G__47123 = self__.prefer_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__47123) : cljs.core.deref.call(null,G__47123));
});
cljs.core.MultiFn.prototype.call = (function() {
var G__47964 = null;
var G__47964__2 = (function (self__,a){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__47124 = a;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(G__47124) : self__.dispatch_fn.call(null,G__47124));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47125 = a;return (target_fn.cljs$core$IFn$_invoke$arity$1 ? target_fn.cljs$core$IFn$_invoke$arity$1(G__47125) : target_fn.call(null,G__47125));
});
var G__47964__3 = (function (self__,a,b){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__47126 = a;var G__47127 = b;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2(G__47126,G__47127) : self__.dispatch_fn.call(null,G__47126,G__47127));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47128 = a;var G__47129 = b;return (target_fn.cljs$core$IFn$_invoke$arity$2 ? target_fn.cljs$core$IFn$_invoke$arity$2(G__47128,G__47129) : target_fn.call(null,G__47128,G__47129));
});
var G__47964__4 = (function (self__,a,b,c){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__47130 = a;var G__47131 = b;var G__47132 = c;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3(G__47130,G__47131,G__47132) : self__.dispatch_fn.call(null,G__47130,G__47131,G__47132));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47133 = a;var G__47134 = b;var G__47135 = c;return (target_fn.cljs$core$IFn$_invoke$arity$3 ? target_fn.cljs$core$IFn$_invoke$arity$3(G__47133,G__47134,G__47135) : target_fn.call(null,G__47133,G__47134,G__47135));
});
var G__47964__5 = (function (self__,a,b,c,d){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__47136 = a;var G__47137 = b;var G__47138 = c;var G__47139 = d;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4(G__47136,G__47137,G__47138,G__47139) : self__.dispatch_fn.call(null,G__47136,G__47137,G__47138,G__47139));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47140 = a;var G__47141 = b;var G__47142 = c;var G__47143 = d;return (target_fn.cljs$core$IFn$_invoke$arity$4 ? target_fn.cljs$core$IFn$_invoke$arity$4(G__47140,G__47141,G__47142,G__47143) : target_fn.call(null,G__47140,G__47141,G__47142,G__47143));
});
var G__47964__6 = (function (self__,a,b,c,d,e){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__47144 = a;var G__47145 = b;var G__47146 = c;var G__47147 = d;var G__47148 = e;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5(G__47144,G__47145,G__47146,G__47147,G__47148) : self__.dispatch_fn.call(null,G__47144,G__47145,G__47146,G__47147,G__47148));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47149 = a;var G__47150 = b;var G__47151 = c;var G__47152 = d;var G__47153 = e;return (target_fn.cljs$core$IFn$_invoke$arity$5 ? target_fn.cljs$core$IFn$_invoke$arity$5(G__47149,G__47150,G__47151,G__47152,G__47153) : target_fn.call(null,G__47149,G__47150,G__47151,G__47152,G__47153));
});
var G__47964__7 = (function (self__,a,b,c,d,e,f){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__47154 = a;var G__47155 = b;var G__47156 = c;var G__47157 = d;var G__47158 = e;var G__47159 = f;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6(G__47154,G__47155,G__47156,G__47157,G__47158,G__47159) : self__.dispatch_fn.call(null,G__47154,G__47155,G__47156,G__47157,G__47158,G__47159));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47160 = a;var G__47161 = b;var G__47162 = c;var G__47163 = d;var G__47164 = e;var G__47165 = f;return (target_fn.cljs$core$IFn$_invoke$arity$6 ? target_fn.cljs$core$IFn$_invoke$arity$6(G__47160,G__47161,G__47162,G__47163,G__47164,G__47165) : target_fn.call(null,G__47160,G__47161,G__47162,G__47163,G__47164,G__47165));
});
var G__47964__8 = (function (self__,a,b,c,d,e,f,g){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__47166 = a;var G__47167 = b;var G__47168 = c;var G__47169 = d;var G__47170 = e;var G__47171 = f;var G__47172 = g;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7(G__47166,G__47167,G__47168,G__47169,G__47170,G__47171,G__47172) : self__.dispatch_fn.call(null,G__47166,G__47167,G__47168,G__47169,G__47170,G__47171,G__47172));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47173 = a;var G__47174 = b;var G__47175 = c;var G__47176 = d;var G__47177 = e;var G__47178 = f;var G__47179 = g;return (target_fn.cljs$core$IFn$_invoke$arity$7 ? target_fn.cljs$core$IFn$_invoke$arity$7(G__47173,G__47174,G__47175,G__47176,G__47177,G__47178,G__47179) : target_fn.call(null,G__47173,G__47174,G__47175,G__47176,G__47177,G__47178,G__47179));
});
var G__47964__9 = (function (self__,a,b,c,d,e,f,g,h){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__47180 = a;var G__47181 = b;var G__47182 = c;var G__47183 = d;var G__47184 = e;var G__47185 = f;var G__47186 = g;var G__47187 = h;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8(G__47180,G__47181,G__47182,G__47183,G__47184,G__47185,G__47186,G__47187) : self__.dispatch_fn.call(null,G__47180,G__47181,G__47182,G__47183,G__47184,G__47185,G__47186,G__47187));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47188 = a;var G__47189 = b;var G__47190 = c;var G__47191 = d;var G__47192 = e;var G__47193 = f;var G__47194 = g;var G__47195 = h;return (target_fn.cljs$core$IFn$_invoke$arity$8 ? target_fn.cljs$core$IFn$_invoke$arity$8(G__47188,G__47189,G__47190,G__47191,G__47192,G__47193,G__47194,G__47195) : target_fn.call(null,G__47188,G__47189,G__47190,G__47191,G__47192,G__47193,G__47194,G__47195));
});
var G__47964__10 = (function (self__,a,b,c,d,e,f,g,h,i){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__47196 = a;var G__47197 = b;var G__47198 = c;var G__47199 = d;var G__47200 = e;var G__47201 = f;var G__47202 = g;var G__47203 = h;var G__47204 = i;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9(G__47196,G__47197,G__47198,G__47199,G__47200,G__47201,G__47202,G__47203,G__47204) : self__.dispatch_fn.call(null,G__47196,G__47197,G__47198,G__47199,G__47200,G__47201,G__47202,G__47203,G__47204));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47205 = a;var G__47206 = b;var G__47207 = c;var G__47208 = d;var G__47209 = e;var G__47210 = f;var G__47211 = g;var G__47212 = h;var G__47213 = i;return (target_fn.cljs$core$IFn$_invoke$arity$9 ? target_fn.cljs$core$IFn$_invoke$arity$9(G__47205,G__47206,G__47207,G__47208,G__47209,G__47210,G__47211,G__47212,G__47213) : target_fn.call(null,G__47205,G__47206,G__47207,G__47208,G__47209,G__47210,G__47211,G__47212,G__47213));
});
var G__47964__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__47214 = a;var G__47215 = b;var G__47216 = c;var G__47217 = d;var G__47218 = e;var G__47219 = f;var G__47220 = g;var G__47221 = h;var G__47222 = i;var G__47223 = j;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10(G__47214,G__47215,G__47216,G__47217,G__47218,G__47219,G__47220,G__47221,G__47222,G__47223) : self__.dispatch_fn.call(null,G__47214,G__47215,G__47216,G__47217,G__47218,G__47219,G__47220,G__47221,G__47222,G__47223));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47224 = a;var G__47225 = b;var G__47226 = c;var G__47227 = d;var G__47228 = e;var G__47229 = f;var G__47230 = g;var G__47231 = h;var G__47232 = i;var G__47233 = j;return (target_fn.cljs$core$IFn$_invoke$arity$10 ? target_fn.cljs$core$IFn$_invoke$arity$10(G__47224,G__47225,G__47226,G__47227,G__47228,G__47229,G__47230,G__47231,G__47232,G__47233) : target_fn.call(null,G__47224,G__47225,G__47226,G__47227,G__47228,G__47229,G__47230,G__47231,G__47232,G__47233));
});
var G__47964__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__47234 = a;var G__47235 = b;var G__47236 = c;var G__47237 = d;var G__47238 = e;var G__47239 = f;var G__47240 = g;var G__47241 = h;var G__47242 = i;var G__47243 = j;var G__47244 = k;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11(G__47234,G__47235,G__47236,G__47237,G__47238,G__47239,G__47240,G__47241,G__47242,G__47243,G__47244) : self__.dispatch_fn.call(null,G__47234,G__47235,G__47236,G__47237,G__47238,G__47239,G__47240,G__47241,G__47242,G__47243,G__47244));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47245 = a;var G__47246 = b;var G__47247 = c;var G__47248 = d;var G__47249 = e;var G__47250 = f;var G__47251 = g;var G__47252 = h;var G__47253 = i;var G__47254 = j;var G__47255 = k;return (target_fn.cljs$core$IFn$_invoke$arity$11 ? target_fn.cljs$core$IFn$_invoke$arity$11(G__47245,G__47246,G__47247,G__47248,G__47249,G__47250,G__47251,G__47252,G__47253,G__47254,G__47255) : target_fn.call(null,G__47245,G__47246,G__47247,G__47248,G__47249,G__47250,G__47251,G__47252,G__47253,G__47254,G__47255));
});
var G__47964__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__47256 = a;var G__47257 = b;var G__47258 = c;var G__47259 = d;var G__47260 = e;var G__47261 = f;var G__47262 = g;var G__47263 = h;var G__47264 = i;var G__47265 = j;var G__47266 = k;var G__47267 = l;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12(G__47256,G__47257,G__47258,G__47259,G__47260,G__47261,G__47262,G__47263,G__47264,G__47265,G__47266,G__47267) : self__.dispatch_fn.call(null,G__47256,G__47257,G__47258,G__47259,G__47260,G__47261,G__47262,G__47263,G__47264,G__47265,G__47266,G__47267));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47268 = a;var G__47269 = b;var G__47270 = c;var G__47271 = d;var G__47272 = e;var G__47273 = f;var G__47274 = g;var G__47275 = h;var G__47276 = i;var G__47277 = j;var G__47278 = k;var G__47279 = l;return (target_fn.cljs$core$IFn$_invoke$arity$12 ? target_fn.cljs$core$IFn$_invoke$arity$12(G__47268,G__47269,G__47270,G__47271,G__47272,G__47273,G__47274,G__47275,G__47276,G__47277,G__47278,G__47279) : target_fn.call(null,G__47268,G__47269,G__47270,G__47271,G__47272,G__47273,G__47274,G__47275,G__47276,G__47277,G__47278,G__47279));
});
var G__47964__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__47280 = a;var G__47281 = b;var G__47282 = c;var G__47283 = d;var G__47284 = e;var G__47285 = f;var G__47286 = g;var G__47287 = h;var G__47288 = i;var G__47289 = j;var G__47290 = k;var G__47291 = l;var G__47292 = m;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13(G__47280,G__47281,G__47282,G__47283,G__47284,G__47285,G__47286,G__47287,G__47288,G__47289,G__47290,G__47291,G__47292) : self__.dispatch_fn.call(null,G__47280,G__47281,G__47282,G__47283,G__47284,G__47285,G__47286,G__47287,G__47288,G__47289,G__47290,G__47291,G__47292));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47293 = a;var G__47294 = b;var G__47295 = c;var G__47296 = d;var G__47297 = e;var G__47298 = f;var G__47299 = g;var G__47300 = h;var G__47301 = i;var G__47302 = j;var G__47303 = k;var G__47304 = l;var G__47305 = m;return (target_fn.cljs$core$IFn$_invoke$arity$13 ? target_fn.cljs$core$IFn$_invoke$arity$13(G__47293,G__47294,G__47295,G__47296,G__47297,G__47298,G__47299,G__47300,G__47301,G__47302,G__47303,G__47304,G__47305) : target_fn.call(null,G__47293,G__47294,G__47295,G__47296,G__47297,G__47298,G__47299,G__47300,G__47301,G__47302,G__47303,G__47304,G__47305));
});
var G__47964__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__47306 = a;var G__47307 = b;var G__47308 = c;var G__47309 = d;var G__47310 = e;var G__47311 = f;var G__47312 = g;var G__47313 = h;var G__47314 = i;var G__47315 = j;var G__47316 = k;var G__47317 = l;var G__47318 = m;var G__47319 = n;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14(G__47306,G__47307,G__47308,G__47309,G__47310,G__47311,G__47312,G__47313,G__47314,G__47315,G__47316,G__47317,G__47318,G__47319) : self__.dispatch_fn.call(null,G__47306,G__47307,G__47308,G__47309,G__47310,G__47311,G__47312,G__47313,G__47314,G__47315,G__47316,G__47317,G__47318,G__47319));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47320 = a;var G__47321 = b;var G__47322 = c;var G__47323 = d;var G__47324 = e;var G__47325 = f;var G__47326 = g;var G__47327 = h;var G__47328 = i;var G__47329 = j;var G__47330 = k;var G__47331 = l;var G__47332 = m;var G__47333 = n;return (target_fn.cljs$core$IFn$_invoke$arity$14 ? target_fn.cljs$core$IFn$_invoke$arity$14(G__47320,G__47321,G__47322,G__47323,G__47324,G__47325,G__47326,G__47327,G__47328,G__47329,G__47330,G__47331,G__47332,G__47333) : target_fn.call(null,G__47320,G__47321,G__47322,G__47323,G__47324,G__47325,G__47326,G__47327,G__47328,G__47329,G__47330,G__47331,G__47332,G__47333));
});
var G__47964__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__47334 = a;var G__47335 = b;var G__47336 = c;var G__47337 = d;var G__47338 = e;var G__47339 = f;var G__47340 = g;var G__47341 = h;var G__47342 = i;var G__47343 = j;var G__47344 = k;var G__47345 = l;var G__47346 = m;var G__47347 = n;var G__47348 = o;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15(G__47334,G__47335,G__47336,G__47337,G__47338,G__47339,G__47340,G__47341,G__47342,G__47343,G__47344,G__47345,G__47346,G__47347,G__47348) : self__.dispatch_fn.call(null,G__47334,G__47335,G__47336,G__47337,G__47338,G__47339,G__47340,G__47341,G__47342,G__47343,G__47344,G__47345,G__47346,G__47347,G__47348));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47349 = a;var G__47350 = b;var G__47351 = c;var G__47352 = d;var G__47353 = e;var G__47354 = f;var G__47355 = g;var G__47356 = h;var G__47357 = i;var G__47358 = j;var G__47359 = k;var G__47360 = l;var G__47361 = m;var G__47362 = n;var G__47363 = o;return (target_fn.cljs$core$IFn$_invoke$arity$15 ? target_fn.cljs$core$IFn$_invoke$arity$15(G__47349,G__47350,G__47351,G__47352,G__47353,G__47354,G__47355,G__47356,G__47357,G__47358,G__47359,G__47360,G__47361,G__47362,G__47363) : target_fn.call(null,G__47349,G__47350,G__47351,G__47352,G__47353,G__47354,G__47355,G__47356,G__47357,G__47358,G__47359,G__47360,G__47361,G__47362,G__47363));
});
var G__47964__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__47364 = a;var G__47365 = b;var G__47366 = c;var G__47367 = d;var G__47368 = e;var G__47369 = f;var G__47370 = g;var G__47371 = h;var G__47372 = i;var G__47373 = j;var G__47374 = k;var G__47375 = l;var G__47376 = m;var G__47377 = n;var G__47378 = o;var G__47379 = p;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16(G__47364,G__47365,G__47366,G__47367,G__47368,G__47369,G__47370,G__47371,G__47372,G__47373,G__47374,G__47375,G__47376,G__47377,G__47378,G__47379) : self__.dispatch_fn.call(null,G__47364,G__47365,G__47366,G__47367,G__47368,G__47369,G__47370,G__47371,G__47372,G__47373,G__47374,G__47375,G__47376,G__47377,G__47378,G__47379));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47380 = a;var G__47381 = b;var G__47382 = c;var G__47383 = d;var G__47384 = e;var G__47385 = f;var G__47386 = g;var G__47387 = h;var G__47388 = i;var G__47389 = j;var G__47390 = k;var G__47391 = l;var G__47392 = m;var G__47393 = n;var G__47394 = o;var G__47395 = p;return (target_fn.cljs$core$IFn$_invoke$arity$16 ? target_fn.cljs$core$IFn$_invoke$arity$16(G__47380,G__47381,G__47382,G__47383,G__47384,G__47385,G__47386,G__47387,G__47388,G__47389,G__47390,G__47391,G__47392,G__47393,G__47394,G__47395) : target_fn.call(null,G__47380,G__47381,G__47382,G__47383,G__47384,G__47385,G__47386,G__47387,G__47388,G__47389,G__47390,G__47391,G__47392,G__47393,G__47394,G__47395));
});
var G__47964__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__47396 = a;var G__47397 = b;var G__47398 = c;var G__47399 = d;var G__47400 = e;var G__47401 = f;var G__47402 = g;var G__47403 = h;var G__47404 = i;var G__47405 = j;var G__47406 = k;var G__47407 = l;var G__47408 = m;var G__47409 = n;var G__47410 = o;var G__47411 = p;var G__47412 = q;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17(G__47396,G__47397,G__47398,G__47399,G__47400,G__47401,G__47402,G__47403,G__47404,G__47405,G__47406,G__47407,G__47408,G__47409,G__47410,G__47411,G__47412) : self__.dispatch_fn.call(null,G__47396,G__47397,G__47398,G__47399,G__47400,G__47401,G__47402,G__47403,G__47404,G__47405,G__47406,G__47407,G__47408,G__47409,G__47410,G__47411,G__47412));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47413 = a;var G__47414 = b;var G__47415 = c;var G__47416 = d;var G__47417 = e;var G__47418 = f;var G__47419 = g;var G__47420 = h;var G__47421 = i;var G__47422 = j;var G__47423 = k;var G__47424 = l;var G__47425 = m;var G__47426 = n;var G__47427 = o;var G__47428 = p;var G__47429 = q;return (target_fn.cljs$core$IFn$_invoke$arity$17 ? target_fn.cljs$core$IFn$_invoke$arity$17(G__47413,G__47414,G__47415,G__47416,G__47417,G__47418,G__47419,G__47420,G__47421,G__47422,G__47423,G__47424,G__47425,G__47426,G__47427,G__47428,G__47429) : target_fn.call(null,G__47413,G__47414,G__47415,G__47416,G__47417,G__47418,G__47419,G__47420,G__47421,G__47422,G__47423,G__47424,G__47425,G__47426,G__47427,G__47428,G__47429));
});
var G__47964__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__47430 = a;var G__47431 = b;var G__47432 = c;var G__47433 = d;var G__47434 = e;var G__47435 = f;var G__47436 = g;var G__47437 = h;var G__47438 = i;var G__47439 = j;var G__47440 = k;var G__47441 = l;var G__47442 = m;var G__47443 = n;var G__47444 = o;var G__47445 = p;var G__47446 = q;var G__47447 = r;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18(G__47430,G__47431,G__47432,G__47433,G__47434,G__47435,G__47436,G__47437,G__47438,G__47439,G__47440,G__47441,G__47442,G__47443,G__47444,G__47445,G__47446,G__47447) : self__.dispatch_fn.call(null,G__47430,G__47431,G__47432,G__47433,G__47434,G__47435,G__47436,G__47437,G__47438,G__47439,G__47440,G__47441,G__47442,G__47443,G__47444,G__47445,G__47446,G__47447));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47448 = a;var G__47449 = b;var G__47450 = c;var G__47451 = d;var G__47452 = e;var G__47453 = f;var G__47454 = g;var G__47455 = h;var G__47456 = i;var G__47457 = j;var G__47458 = k;var G__47459 = l;var G__47460 = m;var G__47461 = n;var G__47462 = o;var G__47463 = p;var G__47464 = q;var G__47465 = r;return (target_fn.cljs$core$IFn$_invoke$arity$18 ? target_fn.cljs$core$IFn$_invoke$arity$18(G__47448,G__47449,G__47450,G__47451,G__47452,G__47453,G__47454,G__47455,G__47456,G__47457,G__47458,G__47459,G__47460,G__47461,G__47462,G__47463,G__47464,G__47465) : target_fn.call(null,G__47448,G__47449,G__47450,G__47451,G__47452,G__47453,G__47454,G__47455,G__47456,G__47457,G__47458,G__47459,G__47460,G__47461,G__47462,G__47463,G__47464,G__47465));
});
var G__47964__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__47466 = a;var G__47467 = b;var G__47468 = c;var G__47469 = d;var G__47470 = e;var G__47471 = f;var G__47472 = g;var G__47473 = h;var G__47474 = i;var G__47475 = j;var G__47476 = k;var G__47477 = l;var G__47478 = m;var G__47479 = n;var G__47480 = o;var G__47481 = p;var G__47482 = q;var G__47483 = r;var G__47484 = s;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19(G__47466,G__47467,G__47468,G__47469,G__47470,G__47471,G__47472,G__47473,G__47474,G__47475,G__47476,G__47477,G__47478,G__47479,G__47480,G__47481,G__47482,G__47483,G__47484) : self__.dispatch_fn.call(null,G__47466,G__47467,G__47468,G__47469,G__47470,G__47471,G__47472,G__47473,G__47474,G__47475,G__47476,G__47477,G__47478,G__47479,G__47480,G__47481,G__47482,G__47483,G__47484));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47485 = a;var G__47486 = b;var G__47487 = c;var G__47488 = d;var G__47489 = e;var G__47490 = f;var G__47491 = g;var G__47492 = h;var G__47493 = i;var G__47494 = j;var G__47495 = k;var G__47496 = l;var G__47497 = m;var G__47498 = n;var G__47499 = o;var G__47500 = p;var G__47501 = q;var G__47502 = r;var G__47503 = s;return (target_fn.cljs$core$IFn$_invoke$arity$19 ? target_fn.cljs$core$IFn$_invoke$arity$19(G__47485,G__47486,G__47487,G__47488,G__47489,G__47490,G__47491,G__47492,G__47493,G__47494,G__47495,G__47496,G__47497,G__47498,G__47499,G__47500,G__47501,G__47502,G__47503) : target_fn.call(null,G__47485,G__47486,G__47487,G__47488,G__47489,G__47490,G__47491,G__47492,G__47493,G__47494,G__47495,G__47496,G__47497,G__47498,G__47499,G__47500,G__47501,G__47502,G__47503));
});
var G__47964__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__47504 = a;var G__47505 = b;var G__47506 = c;var G__47507 = d;var G__47508 = e;var G__47509 = f;var G__47510 = g;var G__47511 = h;var G__47512 = i;var G__47513 = j;var G__47514 = k;var G__47515 = l;var G__47516 = m;var G__47517 = n;var G__47518 = o;var G__47519 = p;var G__47520 = q;var G__47521 = r;var G__47522 = s;var G__47523 = t;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20(G__47504,G__47505,G__47506,G__47507,G__47508,G__47509,G__47510,G__47511,G__47512,G__47513,G__47514,G__47515,G__47516,G__47517,G__47518,G__47519,G__47520,G__47521,G__47522,G__47523) : self__.dispatch_fn.call(null,G__47504,G__47505,G__47506,G__47507,G__47508,G__47509,G__47510,G__47511,G__47512,G__47513,G__47514,G__47515,G__47516,G__47517,G__47518,G__47519,G__47520,G__47521,G__47522,G__47523));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47524 = a;var G__47525 = b;var G__47526 = c;var G__47527 = d;var G__47528 = e;var G__47529 = f;var G__47530 = g;var G__47531 = h;var G__47532 = i;var G__47533 = j;var G__47534 = k;var G__47535 = l;var G__47536 = m;var G__47537 = n;var G__47538 = o;var G__47539 = p;var G__47540 = q;var G__47541 = r;var G__47542 = s;var G__47543 = t;return (target_fn.cljs$core$IFn$_invoke$arity$20 ? target_fn.cljs$core$IFn$_invoke$arity$20(G__47524,G__47525,G__47526,G__47527,G__47528,G__47529,G__47530,G__47531,G__47532,G__47533,G__47534,G__47535,G__47536,G__47537,G__47538,G__47539,G__47540,G__47541,G__47542,G__47543) : target_fn.call(null,G__47524,G__47525,G__47526,G__47527,G__47528,G__47529,G__47530,G__47531,G__47532,G__47533,G__47534,G__47535,G__47536,G__47537,G__47538,G__47539,G__47540,G__47541,G__47542,G__47543));
});
var G__47964__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.dispatch_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(target_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__47964 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 2:
return G__47964__2.call(this,self__,a);
case 3:
return G__47964__3.call(this,self__,a,b);
case 4:
return G__47964__4.call(this,self__,a,b,c);
case 5:
return G__47964__5.call(this,self__,a,b,c,d);
case 6:
return G__47964__6.call(this,self__,a,b,c,d,e);
case 7:
return G__47964__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__47964__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__47964__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__47964__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__47964__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__47964__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__47964__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__47964__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__47964__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__47964__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__47964__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__47964__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__47964__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__47964__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__47964__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__47964__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47964.cljs$core$IFn$_invoke$arity$2 = G__47964__2;
G__47964.cljs$core$IFn$_invoke$arity$3 = G__47964__3;
G__47964.cljs$core$IFn$_invoke$arity$4 = G__47964__4;
G__47964.cljs$core$IFn$_invoke$arity$5 = G__47964__5;
G__47964.cljs$core$IFn$_invoke$arity$6 = G__47964__6;
G__47964.cljs$core$IFn$_invoke$arity$7 = G__47964__7;
G__47964.cljs$core$IFn$_invoke$arity$8 = G__47964__8;
G__47964.cljs$core$IFn$_invoke$arity$9 = G__47964__9;
G__47964.cljs$core$IFn$_invoke$arity$10 = G__47964__10;
G__47964.cljs$core$IFn$_invoke$arity$11 = G__47964__11;
G__47964.cljs$core$IFn$_invoke$arity$12 = G__47964__12;
G__47964.cljs$core$IFn$_invoke$arity$13 = G__47964__13;
G__47964.cljs$core$IFn$_invoke$arity$14 = G__47964__14;
G__47964.cljs$core$IFn$_invoke$arity$15 = G__47964__15;
G__47964.cljs$core$IFn$_invoke$arity$16 = G__47964__16;
G__47964.cljs$core$IFn$_invoke$arity$17 = G__47964__17;
G__47964.cljs$core$IFn$_invoke$arity$18 = G__47964__18;
G__47964.cljs$core$IFn$_invoke$arity$19 = G__47964__19;
G__47964.cljs$core$IFn$_invoke$arity$20 = G__47964__20;
G__47964.cljs$core$IFn$_invoke$arity$21 = G__47964__21;
G__47964.cljs$core$IFn$_invoke$arity$22 = G__47964__22;
return G__47964;
})()
;
cljs.core.MultiFn.prototype.apply = (function (self__,args47116){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47116)));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__47544 = a;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(G__47544) : self__.dispatch_fn.call(null,G__47544));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47545 = a;return (target_fn.cljs$core$IFn$_invoke$arity$1 ? target_fn.cljs$core$IFn$_invoke$arity$1(G__47545) : target_fn.call(null,G__47545));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__47546 = a;var G__47547 = b;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2(G__47546,G__47547) : self__.dispatch_fn.call(null,G__47546,G__47547));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47548 = a;var G__47549 = b;return (target_fn.cljs$core$IFn$_invoke$arity$2 ? target_fn.cljs$core$IFn$_invoke$arity$2(G__47548,G__47549) : target_fn.call(null,G__47548,G__47549));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__47550 = a;var G__47551 = b;var G__47552 = c;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3(G__47550,G__47551,G__47552) : self__.dispatch_fn.call(null,G__47550,G__47551,G__47552));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47553 = a;var G__47554 = b;var G__47555 = c;return (target_fn.cljs$core$IFn$_invoke$arity$3 ? target_fn.cljs$core$IFn$_invoke$arity$3(G__47553,G__47554,G__47555) : target_fn.call(null,G__47553,G__47554,G__47555));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__47556 = a;var G__47557 = b;var G__47558 = c;var G__47559 = d;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4(G__47556,G__47557,G__47558,G__47559) : self__.dispatch_fn.call(null,G__47556,G__47557,G__47558,G__47559));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47560 = a;var G__47561 = b;var G__47562 = c;var G__47563 = d;return (target_fn.cljs$core$IFn$_invoke$arity$4 ? target_fn.cljs$core$IFn$_invoke$arity$4(G__47560,G__47561,G__47562,G__47563) : target_fn.call(null,G__47560,G__47561,G__47562,G__47563));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__47564 = a;var G__47565 = b;var G__47566 = c;var G__47567 = d;var G__47568 = e;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5(G__47564,G__47565,G__47566,G__47567,G__47568) : self__.dispatch_fn.call(null,G__47564,G__47565,G__47566,G__47567,G__47568));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47569 = a;var G__47570 = b;var G__47571 = c;var G__47572 = d;var G__47573 = e;return (target_fn.cljs$core$IFn$_invoke$arity$5 ? target_fn.cljs$core$IFn$_invoke$arity$5(G__47569,G__47570,G__47571,G__47572,G__47573) : target_fn.call(null,G__47569,G__47570,G__47571,G__47572,G__47573));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__47574 = a;var G__47575 = b;var G__47576 = c;var G__47577 = d;var G__47578 = e;var G__47579 = f;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6(G__47574,G__47575,G__47576,G__47577,G__47578,G__47579) : self__.dispatch_fn.call(null,G__47574,G__47575,G__47576,G__47577,G__47578,G__47579));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47580 = a;var G__47581 = b;var G__47582 = c;var G__47583 = d;var G__47584 = e;var G__47585 = f;return (target_fn.cljs$core$IFn$_invoke$arity$6 ? target_fn.cljs$core$IFn$_invoke$arity$6(G__47580,G__47581,G__47582,G__47583,G__47584,G__47585) : target_fn.call(null,G__47580,G__47581,G__47582,G__47583,G__47584,G__47585));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__47586 = a;var G__47587 = b;var G__47588 = c;var G__47589 = d;var G__47590 = e;var G__47591 = f;var G__47592 = g;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7(G__47586,G__47587,G__47588,G__47589,G__47590,G__47591,G__47592) : self__.dispatch_fn.call(null,G__47586,G__47587,G__47588,G__47589,G__47590,G__47591,G__47592));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47593 = a;var G__47594 = b;var G__47595 = c;var G__47596 = d;var G__47597 = e;var G__47598 = f;var G__47599 = g;return (target_fn.cljs$core$IFn$_invoke$arity$7 ? target_fn.cljs$core$IFn$_invoke$arity$7(G__47593,G__47594,G__47595,G__47596,G__47597,G__47598,G__47599) : target_fn.call(null,G__47593,G__47594,G__47595,G__47596,G__47597,G__47598,G__47599));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__47600 = a;var G__47601 = b;var G__47602 = c;var G__47603 = d;var G__47604 = e;var G__47605 = f;var G__47606 = g;var G__47607 = h;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8(G__47600,G__47601,G__47602,G__47603,G__47604,G__47605,G__47606,G__47607) : self__.dispatch_fn.call(null,G__47600,G__47601,G__47602,G__47603,G__47604,G__47605,G__47606,G__47607));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47608 = a;var G__47609 = b;var G__47610 = c;var G__47611 = d;var G__47612 = e;var G__47613 = f;var G__47614 = g;var G__47615 = h;return (target_fn.cljs$core$IFn$_invoke$arity$8 ? target_fn.cljs$core$IFn$_invoke$arity$8(G__47608,G__47609,G__47610,G__47611,G__47612,G__47613,G__47614,G__47615) : target_fn.call(null,G__47608,G__47609,G__47610,G__47611,G__47612,G__47613,G__47614,G__47615));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__47616 = a;var G__47617 = b;var G__47618 = c;var G__47619 = d;var G__47620 = e;var G__47621 = f;var G__47622 = g;var G__47623 = h;var G__47624 = i;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9(G__47616,G__47617,G__47618,G__47619,G__47620,G__47621,G__47622,G__47623,G__47624) : self__.dispatch_fn.call(null,G__47616,G__47617,G__47618,G__47619,G__47620,G__47621,G__47622,G__47623,G__47624));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47625 = a;var G__47626 = b;var G__47627 = c;var G__47628 = d;var G__47629 = e;var G__47630 = f;var G__47631 = g;var G__47632 = h;var G__47633 = i;return (target_fn.cljs$core$IFn$_invoke$arity$9 ? target_fn.cljs$core$IFn$_invoke$arity$9(G__47625,G__47626,G__47627,G__47628,G__47629,G__47630,G__47631,G__47632,G__47633) : target_fn.call(null,G__47625,G__47626,G__47627,G__47628,G__47629,G__47630,G__47631,G__47632,G__47633));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__47634 = a;var G__47635 = b;var G__47636 = c;var G__47637 = d;var G__47638 = e;var G__47639 = f;var G__47640 = g;var G__47641 = h;var G__47642 = i;var G__47643 = j;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10(G__47634,G__47635,G__47636,G__47637,G__47638,G__47639,G__47640,G__47641,G__47642,G__47643) : self__.dispatch_fn.call(null,G__47634,G__47635,G__47636,G__47637,G__47638,G__47639,G__47640,G__47641,G__47642,G__47643));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47644 = a;var G__47645 = b;var G__47646 = c;var G__47647 = d;var G__47648 = e;var G__47649 = f;var G__47650 = g;var G__47651 = h;var G__47652 = i;var G__47653 = j;return (target_fn.cljs$core$IFn$_invoke$arity$10 ? target_fn.cljs$core$IFn$_invoke$arity$10(G__47644,G__47645,G__47646,G__47647,G__47648,G__47649,G__47650,G__47651,G__47652,G__47653) : target_fn.call(null,G__47644,G__47645,G__47646,G__47647,G__47648,G__47649,G__47650,G__47651,G__47652,G__47653));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__47654 = a;var G__47655 = b;var G__47656 = c;var G__47657 = d;var G__47658 = e;var G__47659 = f;var G__47660 = g;var G__47661 = h;var G__47662 = i;var G__47663 = j;var G__47664 = k;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11(G__47654,G__47655,G__47656,G__47657,G__47658,G__47659,G__47660,G__47661,G__47662,G__47663,G__47664) : self__.dispatch_fn.call(null,G__47654,G__47655,G__47656,G__47657,G__47658,G__47659,G__47660,G__47661,G__47662,G__47663,G__47664));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47665 = a;var G__47666 = b;var G__47667 = c;var G__47668 = d;var G__47669 = e;var G__47670 = f;var G__47671 = g;var G__47672 = h;var G__47673 = i;var G__47674 = j;var G__47675 = k;return (target_fn.cljs$core$IFn$_invoke$arity$11 ? target_fn.cljs$core$IFn$_invoke$arity$11(G__47665,G__47666,G__47667,G__47668,G__47669,G__47670,G__47671,G__47672,G__47673,G__47674,G__47675) : target_fn.call(null,G__47665,G__47666,G__47667,G__47668,G__47669,G__47670,G__47671,G__47672,G__47673,G__47674,G__47675));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__47676 = a;var G__47677 = b;var G__47678 = c;var G__47679 = d;var G__47680 = e;var G__47681 = f;var G__47682 = g;var G__47683 = h;var G__47684 = i;var G__47685 = j;var G__47686 = k;var G__47687 = l;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12(G__47676,G__47677,G__47678,G__47679,G__47680,G__47681,G__47682,G__47683,G__47684,G__47685,G__47686,G__47687) : self__.dispatch_fn.call(null,G__47676,G__47677,G__47678,G__47679,G__47680,G__47681,G__47682,G__47683,G__47684,G__47685,G__47686,G__47687));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47688 = a;var G__47689 = b;var G__47690 = c;var G__47691 = d;var G__47692 = e;var G__47693 = f;var G__47694 = g;var G__47695 = h;var G__47696 = i;var G__47697 = j;var G__47698 = k;var G__47699 = l;return (target_fn.cljs$core$IFn$_invoke$arity$12 ? target_fn.cljs$core$IFn$_invoke$arity$12(G__47688,G__47689,G__47690,G__47691,G__47692,G__47693,G__47694,G__47695,G__47696,G__47697,G__47698,G__47699) : target_fn.call(null,G__47688,G__47689,G__47690,G__47691,G__47692,G__47693,G__47694,G__47695,G__47696,G__47697,G__47698,G__47699));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__47700 = a;var G__47701 = b;var G__47702 = c;var G__47703 = d;var G__47704 = e;var G__47705 = f;var G__47706 = g;var G__47707 = h;var G__47708 = i;var G__47709 = j;var G__47710 = k;var G__47711 = l;var G__47712 = m;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13(G__47700,G__47701,G__47702,G__47703,G__47704,G__47705,G__47706,G__47707,G__47708,G__47709,G__47710,G__47711,G__47712) : self__.dispatch_fn.call(null,G__47700,G__47701,G__47702,G__47703,G__47704,G__47705,G__47706,G__47707,G__47708,G__47709,G__47710,G__47711,G__47712));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47713 = a;var G__47714 = b;var G__47715 = c;var G__47716 = d;var G__47717 = e;var G__47718 = f;var G__47719 = g;var G__47720 = h;var G__47721 = i;var G__47722 = j;var G__47723 = k;var G__47724 = l;var G__47725 = m;return (target_fn.cljs$core$IFn$_invoke$arity$13 ? target_fn.cljs$core$IFn$_invoke$arity$13(G__47713,G__47714,G__47715,G__47716,G__47717,G__47718,G__47719,G__47720,G__47721,G__47722,G__47723,G__47724,G__47725) : target_fn.call(null,G__47713,G__47714,G__47715,G__47716,G__47717,G__47718,G__47719,G__47720,G__47721,G__47722,G__47723,G__47724,G__47725));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__47726 = a;var G__47727 = b;var G__47728 = c;var G__47729 = d;var G__47730 = e;var G__47731 = f;var G__47732 = g;var G__47733 = h;var G__47734 = i;var G__47735 = j;var G__47736 = k;var G__47737 = l;var G__47738 = m;var G__47739 = n;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14(G__47726,G__47727,G__47728,G__47729,G__47730,G__47731,G__47732,G__47733,G__47734,G__47735,G__47736,G__47737,G__47738,G__47739) : self__.dispatch_fn.call(null,G__47726,G__47727,G__47728,G__47729,G__47730,G__47731,G__47732,G__47733,G__47734,G__47735,G__47736,G__47737,G__47738,G__47739));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47740 = a;var G__47741 = b;var G__47742 = c;var G__47743 = d;var G__47744 = e;var G__47745 = f;var G__47746 = g;var G__47747 = h;var G__47748 = i;var G__47749 = j;var G__47750 = k;var G__47751 = l;var G__47752 = m;var G__47753 = n;return (target_fn.cljs$core$IFn$_invoke$arity$14 ? target_fn.cljs$core$IFn$_invoke$arity$14(G__47740,G__47741,G__47742,G__47743,G__47744,G__47745,G__47746,G__47747,G__47748,G__47749,G__47750,G__47751,G__47752,G__47753) : target_fn.call(null,G__47740,G__47741,G__47742,G__47743,G__47744,G__47745,G__47746,G__47747,G__47748,G__47749,G__47750,G__47751,G__47752,G__47753));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__47754 = a;var G__47755 = b;var G__47756 = c;var G__47757 = d;var G__47758 = e;var G__47759 = f;var G__47760 = g;var G__47761 = h;var G__47762 = i;var G__47763 = j;var G__47764 = k;var G__47765 = l;var G__47766 = m;var G__47767 = n;var G__47768 = o;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15(G__47754,G__47755,G__47756,G__47757,G__47758,G__47759,G__47760,G__47761,G__47762,G__47763,G__47764,G__47765,G__47766,G__47767,G__47768) : self__.dispatch_fn.call(null,G__47754,G__47755,G__47756,G__47757,G__47758,G__47759,G__47760,G__47761,G__47762,G__47763,G__47764,G__47765,G__47766,G__47767,G__47768));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47769 = a;var G__47770 = b;var G__47771 = c;var G__47772 = d;var G__47773 = e;var G__47774 = f;var G__47775 = g;var G__47776 = h;var G__47777 = i;var G__47778 = j;var G__47779 = k;var G__47780 = l;var G__47781 = m;var G__47782 = n;var G__47783 = o;return (target_fn.cljs$core$IFn$_invoke$arity$15 ? target_fn.cljs$core$IFn$_invoke$arity$15(G__47769,G__47770,G__47771,G__47772,G__47773,G__47774,G__47775,G__47776,G__47777,G__47778,G__47779,G__47780,G__47781,G__47782,G__47783) : target_fn.call(null,G__47769,G__47770,G__47771,G__47772,G__47773,G__47774,G__47775,G__47776,G__47777,G__47778,G__47779,G__47780,G__47781,G__47782,G__47783));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__47784 = a;var G__47785 = b;var G__47786 = c;var G__47787 = d;var G__47788 = e;var G__47789 = f;var G__47790 = g;var G__47791 = h;var G__47792 = i;var G__47793 = j;var G__47794 = k;var G__47795 = l;var G__47796 = m;var G__47797 = n;var G__47798 = o;var G__47799 = p;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16(G__47784,G__47785,G__47786,G__47787,G__47788,G__47789,G__47790,G__47791,G__47792,G__47793,G__47794,G__47795,G__47796,G__47797,G__47798,G__47799) : self__.dispatch_fn.call(null,G__47784,G__47785,G__47786,G__47787,G__47788,G__47789,G__47790,G__47791,G__47792,G__47793,G__47794,G__47795,G__47796,G__47797,G__47798,G__47799));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47800 = a;var G__47801 = b;var G__47802 = c;var G__47803 = d;var G__47804 = e;var G__47805 = f;var G__47806 = g;var G__47807 = h;var G__47808 = i;var G__47809 = j;var G__47810 = k;var G__47811 = l;var G__47812 = m;var G__47813 = n;var G__47814 = o;var G__47815 = p;return (target_fn.cljs$core$IFn$_invoke$arity$16 ? target_fn.cljs$core$IFn$_invoke$arity$16(G__47800,G__47801,G__47802,G__47803,G__47804,G__47805,G__47806,G__47807,G__47808,G__47809,G__47810,G__47811,G__47812,G__47813,G__47814,G__47815) : target_fn.call(null,G__47800,G__47801,G__47802,G__47803,G__47804,G__47805,G__47806,G__47807,G__47808,G__47809,G__47810,G__47811,G__47812,G__47813,G__47814,G__47815));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__47816 = a;var G__47817 = b;var G__47818 = c;var G__47819 = d;var G__47820 = e;var G__47821 = f;var G__47822 = g;var G__47823 = h;var G__47824 = i;var G__47825 = j;var G__47826 = k;var G__47827 = l;var G__47828 = m;var G__47829 = n;var G__47830 = o;var G__47831 = p;var G__47832 = q;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17(G__47816,G__47817,G__47818,G__47819,G__47820,G__47821,G__47822,G__47823,G__47824,G__47825,G__47826,G__47827,G__47828,G__47829,G__47830,G__47831,G__47832) : self__.dispatch_fn.call(null,G__47816,G__47817,G__47818,G__47819,G__47820,G__47821,G__47822,G__47823,G__47824,G__47825,G__47826,G__47827,G__47828,G__47829,G__47830,G__47831,G__47832));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47833 = a;var G__47834 = b;var G__47835 = c;var G__47836 = d;var G__47837 = e;var G__47838 = f;var G__47839 = g;var G__47840 = h;var G__47841 = i;var G__47842 = j;var G__47843 = k;var G__47844 = l;var G__47845 = m;var G__47846 = n;var G__47847 = o;var G__47848 = p;var G__47849 = q;return (target_fn.cljs$core$IFn$_invoke$arity$17 ? target_fn.cljs$core$IFn$_invoke$arity$17(G__47833,G__47834,G__47835,G__47836,G__47837,G__47838,G__47839,G__47840,G__47841,G__47842,G__47843,G__47844,G__47845,G__47846,G__47847,G__47848,G__47849) : target_fn.call(null,G__47833,G__47834,G__47835,G__47836,G__47837,G__47838,G__47839,G__47840,G__47841,G__47842,G__47843,G__47844,G__47845,G__47846,G__47847,G__47848,G__47849));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__47850 = a;var G__47851 = b;var G__47852 = c;var G__47853 = d;var G__47854 = e;var G__47855 = f;var G__47856 = g;var G__47857 = h;var G__47858 = i;var G__47859 = j;var G__47860 = k;var G__47861 = l;var G__47862 = m;var G__47863 = n;var G__47864 = o;var G__47865 = p;var G__47866 = q;var G__47867 = r;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18(G__47850,G__47851,G__47852,G__47853,G__47854,G__47855,G__47856,G__47857,G__47858,G__47859,G__47860,G__47861,G__47862,G__47863,G__47864,G__47865,G__47866,G__47867) : self__.dispatch_fn.call(null,G__47850,G__47851,G__47852,G__47853,G__47854,G__47855,G__47856,G__47857,G__47858,G__47859,G__47860,G__47861,G__47862,G__47863,G__47864,G__47865,G__47866,G__47867));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47868 = a;var G__47869 = b;var G__47870 = c;var G__47871 = d;var G__47872 = e;var G__47873 = f;var G__47874 = g;var G__47875 = h;var G__47876 = i;var G__47877 = j;var G__47878 = k;var G__47879 = l;var G__47880 = m;var G__47881 = n;var G__47882 = o;var G__47883 = p;var G__47884 = q;var G__47885 = r;return (target_fn.cljs$core$IFn$_invoke$arity$18 ? target_fn.cljs$core$IFn$_invoke$arity$18(G__47868,G__47869,G__47870,G__47871,G__47872,G__47873,G__47874,G__47875,G__47876,G__47877,G__47878,G__47879,G__47880,G__47881,G__47882,G__47883,G__47884,G__47885) : target_fn.call(null,G__47868,G__47869,G__47870,G__47871,G__47872,G__47873,G__47874,G__47875,G__47876,G__47877,G__47878,G__47879,G__47880,G__47881,G__47882,G__47883,G__47884,G__47885));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__47886 = a;var G__47887 = b;var G__47888 = c;var G__47889 = d;var G__47890 = e;var G__47891 = f;var G__47892 = g;var G__47893 = h;var G__47894 = i;var G__47895 = j;var G__47896 = k;var G__47897 = l;var G__47898 = m;var G__47899 = n;var G__47900 = o;var G__47901 = p;var G__47902 = q;var G__47903 = r;var G__47904 = s;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19(G__47886,G__47887,G__47888,G__47889,G__47890,G__47891,G__47892,G__47893,G__47894,G__47895,G__47896,G__47897,G__47898,G__47899,G__47900,G__47901,G__47902,G__47903,G__47904) : self__.dispatch_fn.call(null,G__47886,G__47887,G__47888,G__47889,G__47890,G__47891,G__47892,G__47893,G__47894,G__47895,G__47896,G__47897,G__47898,G__47899,G__47900,G__47901,G__47902,G__47903,G__47904));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47905 = a;var G__47906 = b;var G__47907 = c;var G__47908 = d;var G__47909 = e;var G__47910 = f;var G__47911 = g;var G__47912 = h;var G__47913 = i;var G__47914 = j;var G__47915 = k;var G__47916 = l;var G__47917 = m;var G__47918 = n;var G__47919 = o;var G__47920 = p;var G__47921 = q;var G__47922 = r;var G__47923 = s;return (target_fn.cljs$core$IFn$_invoke$arity$19 ? target_fn.cljs$core$IFn$_invoke$arity$19(G__47905,G__47906,G__47907,G__47908,G__47909,G__47910,G__47911,G__47912,G__47913,G__47914,G__47915,G__47916,G__47917,G__47918,G__47919,G__47920,G__47921,G__47922,G__47923) : target_fn.call(null,G__47905,G__47906,G__47907,G__47908,G__47909,G__47910,G__47911,G__47912,G__47913,G__47914,G__47915,G__47916,G__47917,G__47918,G__47919,G__47920,G__47921,G__47922,G__47923));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__47924 = a;var G__47925 = b;var G__47926 = c;var G__47927 = d;var G__47928 = e;var G__47929 = f;var G__47930 = g;var G__47931 = h;var G__47932 = i;var G__47933 = j;var G__47934 = k;var G__47935 = l;var G__47936 = m;var G__47937 = n;var G__47938 = o;var G__47939 = p;var G__47940 = q;var G__47941 = r;var G__47942 = s;var G__47943 = t;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20(G__47924,G__47925,G__47926,G__47927,G__47928,G__47929,G__47930,G__47931,G__47932,G__47933,G__47934,G__47935,G__47936,G__47937,G__47938,G__47939,G__47940,G__47941,G__47942,G__47943) : self__.dispatch_fn.call(null,G__47924,G__47925,G__47926,G__47927,G__47928,G__47929,G__47930,G__47931,G__47932,G__47933,G__47934,G__47935,G__47936,G__47937,G__47938,G__47939,G__47940,G__47941,G__47942,G__47943));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__47944 = a;var G__47945 = b;var G__47946 = c;var G__47947 = d;var G__47948 = e;var G__47949 = f;var G__47950 = g;var G__47951 = h;var G__47952 = i;var G__47953 = j;var G__47954 = k;var G__47955 = l;var G__47956 = m;var G__47957 = n;var G__47958 = o;var G__47959 = p;var G__47960 = q;var G__47961 = r;var G__47962 = s;var G__47963 = t;return (target_fn.cljs$core$IFn$_invoke$arity$20 ? target_fn.cljs$core$IFn$_invoke$arity$20(G__47944,G__47945,G__47946,G__47947,G__47948,G__47949,G__47950,G__47951,G__47952,G__47953,G__47954,G__47955,G__47956,G__47957,G__47958,G__47959,G__47960,G__47961,G__47962,G__47963) : target_fn.call(null,G__47944,G__47945,G__47946,G__47947,G__47948,G__47949,G__47950,G__47951,G__47952,G__47953,G__47954,G__47955,G__47956,G__47957,G__47958,G__47959,G__47960,G__47961,G__47962,G__47963));
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
cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__47965 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([this$__$1], 0));return goog.string.hashCode(G__47965);
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
cljs.core.ExceptionInfo.cljs$lang$ctorPrWriter = (function (this__20755__auto__,writer__20756__auto__,opts__20757__auto__){return cljs.core._write(writer__20756__auto__,"cljs.core/ExceptionInfo");
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
cljs.core.comparator = (function comparator(pred){return (function (x,y){if(cljs.core.truth_((function (){var G__47970 = x;var G__47971 = y;return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__47970,G__47971) : pred.call(null,G__47970,G__47971));
})()))
{return (-1);
} else
{if(cljs.core.truth_((function (){var G__47972 = y;var G__47973 = x;return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__47972,G__47973) : pred.call(null,G__47972,G__47973));
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