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
var G__25148__delegate = function (args){return console.log.apply(console,(function (){var G__25147 = args;return (cljs.core.into_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(G__25147) : cljs.core.into_array.call(null,G__25147));
})());
};
var G__25148 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__25148__delegate.call(this,args);};
G__25148.cljs$lang$maxFixedArity = 0;
G__25148.cljs$lang$applyTo = (function (arglist__25149){
var args = cljs.core.seq(arglist__25149);
return G__25148__delegate(args);
});
G__25148.cljs$core$IFn$_invoke$arity$variadic = G__25148__delegate;
return G__25148;
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
cljs.core.string_QMARK_ = (function string_QMARK_(x){var G__25151 = x;return goog.isString(G__25151);
});
/**
* Internal - do not use!
*/
cljs.core.native_satisfies_QMARK_ = (function native_satisfies_QMARK_(p,x){var x__$1 = (((x == null))?null:x);if((p[(function (){var G__25153 = x__$1;return goog.typeOf(G__25153);
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
cljs.core.missing_protocol = (function missing_protocol(proto,obj){var ty = cljs.core.type(obj);var ty__$1 = (cljs.core.truth_((function (){var and__19621__auto__ = ty;if(cljs.core.truth_(and__19621__auto__))
{return ty.cljs$lang$type;
} else
{return and__19621__auto__;
}
})())?ty.cljs$lang$ctorStr:(function (){var G__25155 = obj;return goog.typeOf(G__25155);
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
cljs.core.aclone = (function aclone(arr){var len = arr.length;var new_arr = (new Array(len));var n__21341__auto___25157 = len;var i_25158 = (0);while(true){
if((i_25158 < n__21341__auto___25157))
{(new_arr[i_25158] = (arr[i_25158]));
{
var G__25159 = (i_25158 + (1));
i_25158 = G__25159;
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
var G__25168__delegate = function (array,i,idxs){var G__25165 = aget;var G__25166 = aget.cljs$core$IFn$_invoke$arity$2(array,i);var G__25167 = idxs;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$3 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__25165,G__25166,G__25167) : cljs.core.apply.call(null,G__25165,G__25166,G__25167));
};
var G__25168 = function (array,i,var_args){
var idxs = null;if (arguments.length > 2) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__25168__delegate.call(this,array,i,idxs);};
G__25168.cljs$lang$maxFixedArity = 2;
G__25168.cljs$lang$applyTo = (function (arglist__25169){
var array = cljs.core.first(arglist__25169);
arglist__25169 = cljs.core.next(arglist__25169);
var i = cljs.core.first(arglist__25169);
var idxs = cljs.core.rest(arglist__25169);
return G__25168__delegate(array,i,idxs);
});
G__25168.cljs$core$IFn$_invoke$arity$variadic = G__25168__delegate;
return G__25168;
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
var G__25178__delegate = function (array,idx,idx2,idxv){var G__25174 = aset;var G__25175 = (array[idx]);var G__25176 = idx2;var G__25177 = idxv;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$4(G__25174,G__25175,G__25176,G__25177) : cljs.core.apply.call(null,G__25174,G__25175,G__25176,G__25177));
};
var G__25178 = function (array,idx,idx2,var_args){
var idxv = null;if (arguments.length > 3) {
  idxv = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__25178__delegate.call(this,array,idx,idx2,idxv);};
G__25178.cljs$lang$maxFixedArity = 3;
G__25178.cljs$lang$applyTo = (function (arglist__25179){
var array = cljs.core.first(arglist__25179);
arglist__25179 = cljs.core.next(arglist__25179);
var idx = cljs.core.first(arglist__25179);
arglist__25179 = cljs.core.next(arglist__25179);
var idx2 = cljs.core.first(arglist__25179);
var idxv = cljs.core.rest(arglist__25179);
return G__25178__delegate(array,idx,idx2,idxv);
});
G__25178.cljs$core$IFn$_invoke$arity$variadic = G__25178__delegate;
return G__25178;
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
var into_array__2 = (function (type,aseq){var G__25185 = (function (a,x){a.push(x);
return a;
});var G__25186 = [];var G__25187 = aseq;return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(G__25185,G__25186,G__25187) : cljs.core.reduce.call(null,G__25185,G__25186,G__25187));
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
cljs.core.Fn = (function (){var obj25189 = {};return obj25189;
})();
cljs.core.IFn = (function (){var obj25191 = {};return obj25191;
})();
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){if((function (){var and__19621__auto__ = this$;if(and__19621__auto__)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__19621__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__20845__auto__ = (((this$ == null))?null:this$);return (function (){var or__19663__auto__ = (cljs.core._invoke[(function (){var G__25237 = x__20845__auto__;return goog.typeOf(G__25237);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._invoke["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){if((function (){var and__19621__auto__ = this$;if(and__19621__auto__)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__19621__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__20845__auto__ = (((this$ == null))?null:this$);return (function (){var or__19663__auto__ = (cljs.core._invoke[(function (){var G__25239 = x__20845__auto__;return goog.typeOf(G__25239);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._invoke["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){if((function (){var and__19621__auto__ = this$;if(and__19621__auto__)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__19621__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__20845__auto__ = (((this$ == null))?null:this$);return (function (){var or__19663__auto__ = (cljs.core._invoke[(function (){var G__25241 = x__20845__auto__;return goog.typeOf(G__25241);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._invoke["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){if((function (){var and__19621__auto__ = this$;if(and__19621__auto__)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__19621__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__20845__auto__ = (((this$ == null))?null:this$);return (function (){var or__19663__auto__ = (cljs.core._invoke[(function (){var G__25243 = x__20845__auto__;return goog.typeOf(G__25243);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._invoke["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){if((function (){var and__19621__auto__ = this$;if(and__19621__auto__)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__19621__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__20845__auto__ = (((this$ == null))?null:this$);return (function (){var or__19663__auto__ = (cljs.core._invoke[(function (){var G__25245 = x__20845__auto__;return goog.typeOf(G__25245);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._invoke["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){if((function (){var and__19621__auto__ = this$;if(and__19621__auto__)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__19621__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__20845__auto__ = (((this$ == null))?null:this$);return (function (){var or__19663__auto__ = (cljs.core._invoke[(function (){var G__25247 = x__20845__auto__;return goog.typeOf(G__25247);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._invoke["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){if((function (){var and__19621__auto__ = this$;if(and__19621__auto__)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__19621__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__20845__auto__ = (((this$ == null))?null:this$);return (function (){var or__19663__auto__ = (cljs.core._invoke[(function (){var G__25249 = x__20845__auto__;return goog.typeOf(G__25249);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._invoke["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){if((function (){var and__19621__auto__ = this$;if(and__19621__auto__)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__19621__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__20845__auto__ = (((this$ == null))?null:this$);return (function (){var or__19663__auto__ = (cljs.core._invoke[(function (){var G__25251 = x__20845__auto__;return goog.typeOf(G__25251);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._invoke["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){if((function (){var and__19621__auto__ = this$;if(and__19621__auto__)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__19621__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__20845__auto__ = (((this$ == null))?null:this$);return (function (){var or__19663__auto__ = (cljs.core._invoke[(function (){var G__25253 = x__20845__auto__;return goog.typeOf(G__25253);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._invoke["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){if((function (){var and__19621__auto__ = this$;if(and__19621__auto__)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__19621__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__20845__auto__ = (((this$ == null))?null:this$);return (function (){var or__19663__auto__ = (cljs.core._invoke[(function (){var G__25255 = x__20845__auto__;return goog.typeOf(G__25255);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._invoke["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){if((function (){var and__19621__auto__ = this$;if(and__19621__auto__)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__19621__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__20845__auto__ = (((this$ == null))?null:this$);return (function (){var or__19663__auto__ = (cljs.core._invoke[(function (){var G__25257 = x__20845__auto__;return goog.typeOf(G__25257);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._invoke["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){if((function (){var and__19621__auto__ = this$;if(and__19621__auto__)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__19621__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__20845__auto__ = (((this$ == null))?null:this$);return (function (){var or__19663__auto__ = (cljs.core._invoke[(function (){var G__25259 = x__20845__auto__;return goog.typeOf(G__25259);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._invoke["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){if((function (){var and__19621__auto__ = this$;if(and__19621__auto__)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__19621__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__20845__auto__ = (((this$ == null))?null:this$);return (function (){var or__19663__auto__ = (cljs.core._invoke[(function (){var G__25261 = x__20845__auto__;return goog.typeOf(G__25261);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._invoke["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){if((function (){var and__19621__auto__ = this$;if(and__19621__auto__)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__19621__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__20845__auto__ = (((this$ == null))?null:this$);return (function (){var or__19663__auto__ = (cljs.core._invoke[(function (){var G__25263 = x__20845__auto__;return goog.typeOf(G__25263);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._invoke["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){if((function (){var and__19621__auto__ = this$;if(and__19621__auto__)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__19621__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__20845__auto__ = (((this$ == null))?null:this$);return (function (){var or__19663__auto__ = (cljs.core._invoke[(function (){var G__25265 = x__20845__auto__;return goog.typeOf(G__25265);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._invoke["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){if((function (){var and__19621__auto__ = this$;if(and__19621__auto__)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__19621__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__20845__auto__ = (((this$ == null))?null:this$);return (function (){var or__19663__auto__ = (cljs.core._invoke[(function (){var G__25267 = x__20845__auto__;return goog.typeOf(G__25267);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._invoke["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if((function (){var and__19621__auto__ = this$;if(and__19621__auto__)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__19621__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__20845__auto__ = (((this$ == null))?null:this$);return (function (){var or__19663__auto__ = (cljs.core._invoke[(function (){var G__25269 = x__20845__auto__;return goog.typeOf(G__25269);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._invoke["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if((function (){var and__19621__auto__ = this$;if(and__19621__auto__)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__19621__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__20845__auto__ = (((this$ == null))?null:this$);return (function (){var or__19663__auto__ = (cljs.core._invoke[(function (){var G__25271 = x__20845__auto__;return goog.typeOf(G__25271);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._invoke["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if((function (){var and__19621__auto__ = this$;if(and__19621__auto__)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__19621__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
} else
{var x__20845__auto__ = (((this$ == null))?null:this$);return (function (){var or__19663__auto__ = (cljs.core._invoke[(function (){var G__25273 = x__20845__auto__;return goog.typeOf(G__25273);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._invoke["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if((function (){var and__19621__auto__ = this$;if(and__19621__auto__)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__19621__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
} else
{var x__20845__auto__ = (((this$ == null))?null:this$);return (function (){var or__19663__auto__ = (cljs.core._invoke[(function (){var G__25275 = x__20845__auto__;return goog.typeOf(G__25275);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._invoke["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){if((function (){var and__19621__auto__ = this$;if(and__19621__auto__)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__19621__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
} else
{var x__20845__auto__ = (((this$ == null))?null:this$);return (function (){var or__19663__auto__ = (cljs.core._invoke[(function (){var G__25277 = x__20845__auto__;return goog.typeOf(G__25277);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._invoke["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}
});
var _invoke__22 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){if((function (){var and__19621__auto__ = this$;if(and__19621__auto__)
{return this$.cljs$core$IFn$_invoke$arity$22;
} else
{return and__19621__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$22(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
} else
{var x__20845__auto__ = (((this$ == null))?null:this$);return (function (){var or__19663__auto__ = (cljs.core._invoke[(function (){var G__25279 = x__20845__auto__;return goog.typeOf(G__25279);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._invoke["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
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
cljs.core.ICloneable = (function (){var obj25281 = {};return obj25281;
})();
cljs.core._clone = (function _clone(value){if((function (){var and__19621__auto__ = value;if(and__19621__auto__)
{return value.cljs$core$ICloneable$_clone$arity$1;
} else
{return and__19621__auto__;
}
})())
{return value.cljs$core$ICloneable$_clone$arity$1(value);
} else
{var x__20845__auto__ = (((value == null))?null:value);return (function (){var or__19663__auto__ = (cljs.core._clone[(function (){var G__25285 = x__20845__auto__;return goog.typeOf(G__25285);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._clone["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("ICloneable.-clone",value);
}
}
})().call(null,value);
}
});
cljs.core.ICounted = (function (){var obj25287 = {};return obj25287;
})();
cljs.core._count = (function _count(coll){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._count[(function (){var G__25291 = x__20845__auto__;return goog.typeOf(G__25291);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._count["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = (function (){var obj25293 = {};return obj25293;
})();
cljs.core._empty = (function _empty(coll){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._empty[(function (){var G__25297 = x__20845__auto__;return goog.typeOf(G__25297);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._empty["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = (function (){var obj25299 = {};return obj25299;
})();
cljs.core._conj = (function _conj(coll,o){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._conj[(function (){var G__25303 = x__20845__auto__;return goog.typeOf(G__25303);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._conj["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = (function (){var obj25305 = {};return obj25305;
})();
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._nth[(function (){var G__25311 = x__20845__auto__;return goog.typeOf(G__25311);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._nth["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._nth[(function (){var G__25313 = x__20845__auto__;return goog.typeOf(G__25313);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._nth["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
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
cljs.core.ASeq = (function (){var obj25315 = {};return obj25315;
})();
cljs.core.ISeq = (function (){var obj25317 = {};return obj25317;
})();
cljs.core._first = (function _first(coll){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._first[(function (){var G__25321 = x__20845__auto__;return goog.typeOf(G__25321);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._first["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._rest[(function (){var G__25325 = x__20845__auto__;return goog.typeOf(G__25325);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._rest["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = (function (){var obj25327 = {};return obj25327;
})();
cljs.core._next = (function _next(coll){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._next[(function (){var G__25331 = x__20845__auto__;return goog.typeOf(G__25331);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._next["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = (function (){var obj25333 = {};return obj25333;
})();
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){if((function (){var and__19621__auto__ = o;if(and__19621__auto__)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__19621__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__20845__auto__ = (((o == null))?null:o);return (function (){var or__19663__auto__ = (cljs.core._lookup[(function (){var G__25339 = x__20845__auto__;return goog.typeOf(G__25339);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._lookup["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){if((function (){var and__19621__auto__ = o;if(and__19621__auto__)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__19621__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__20845__auto__ = (((o == null))?null:o);return (function (){var or__19663__auto__ = (cljs.core._lookup[(function (){var G__25341 = x__20845__auto__;return goog.typeOf(G__25341);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._lookup["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
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
cljs.core.IAssociative = (function (){var obj25343 = {};return obj25343;
})();
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._contains_key_QMARK_[(function (){var G__25347 = x__20845__auto__;return goog.typeOf(G__25347);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._contains_key_QMARK_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._assoc[(function (){var G__25351 = x__20845__auto__;return goog.typeOf(G__25351);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._assoc["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = (function (){var obj25353 = {};return obj25353;
})();
cljs.core._dissoc = (function _dissoc(coll,k){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._dissoc[(function (){var G__25357 = x__20845__auto__;return goog.typeOf(G__25357);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._dissoc["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = (function (){var obj25359 = {};return obj25359;
})();
cljs.core._key = (function _key(coll){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._key[(function (){var G__25363 = x__20845__auto__;return goog.typeOf(G__25363);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._key["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._val[(function (){var G__25367 = x__20845__auto__;return goog.typeOf(G__25367);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._val["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = (function (){var obj25369 = {};return obj25369;
})();
cljs.core._disjoin = (function _disjoin(coll,v){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._disjoin[(function (){var G__25373 = x__20845__auto__;return goog.typeOf(G__25373);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._disjoin["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = (function (){var obj25375 = {};return obj25375;
})();
cljs.core._peek = (function _peek(coll){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._peek[(function (){var G__25379 = x__20845__auto__;return goog.typeOf(G__25379);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._peek["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._pop[(function (){var G__25383 = x__20845__auto__;return goog.typeOf(G__25383);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._pop["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = (function (){var obj25385 = {};return obj25385;
})();
cljs.core._assoc_n = (function _assoc_n(coll,n,val){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._assoc_n[(function (){var G__25389 = x__20845__auto__;return goog.typeOf(G__25389);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._assoc_n["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = (function (){var obj25391 = {};return obj25391;
})();
cljs.core._deref = (function _deref(o){if((function (){var and__19621__auto__ = o;if(and__19621__auto__)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__19621__auto__;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__20845__auto__ = (((o == null))?null:o);return (function (){var or__19663__auto__ = (cljs.core._deref[(function (){var G__25395 = x__20845__auto__;return goog.typeOf(G__25395);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._deref["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = (function (){var obj25397 = {};return obj25397;
})();
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){if((function (){var and__19621__auto__ = o;if(and__19621__auto__)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__19621__auto__;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__20845__auto__ = (((o == null))?null:o);return (function (){var or__19663__auto__ = (cljs.core._deref_with_timeout[(function (){var G__25401 = x__20845__auto__;return goog.typeOf(G__25401);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._deref_with_timeout["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = (function (){var obj25403 = {};return obj25403;
})();
cljs.core._meta = (function _meta(o){if((function (){var and__19621__auto__ = o;if(and__19621__auto__)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__19621__auto__;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__20845__auto__ = (((o == null))?null:o);return (function (){var or__19663__auto__ = (cljs.core._meta[(function (){var G__25407 = x__20845__auto__;return goog.typeOf(G__25407);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._meta["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = (function (){var obj25409 = {};return obj25409;
})();
cljs.core._with_meta = (function _with_meta(o,meta){if((function (){var and__19621__auto__ = o;if(and__19621__auto__)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__19621__auto__;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__20845__auto__ = (((o == null))?null:o);return (function (){var or__19663__auto__ = (cljs.core._with_meta[(function (){var G__25413 = x__20845__auto__;return goog.typeOf(G__25413);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._with_meta["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = (function (){var obj25415 = {};return obj25415;
})();
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._reduce[(function (){var G__25421 = x__20845__auto__;return goog.typeOf(G__25421);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._reduce["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._reduce[(function (){var G__25423 = x__20845__auto__;return goog.typeOf(G__25423);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._reduce["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
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
cljs.core.IKVReduce = (function (){var obj25425 = {};return obj25425;
})();
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._kv_reduce[(function (){var G__25429 = x__20845__auto__;return goog.typeOf(G__25429);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._kv_reduce["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = (function (){var obj25431 = {};return obj25431;
})();
cljs.core._equiv = (function _equiv(o,other){if((function (){var and__19621__auto__ = o;if(and__19621__auto__)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__19621__auto__;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__20845__auto__ = (((o == null))?null:o);return (function (){var or__19663__auto__ = (cljs.core._equiv[(function (){var G__25435 = x__20845__auto__;return goog.typeOf(G__25435);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._equiv["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = (function (){var obj25437 = {};return obj25437;
})();
cljs.core._hash = (function _hash(o){if((function (){var and__19621__auto__ = o;if(and__19621__auto__)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__19621__auto__;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__20845__auto__ = (((o == null))?null:o);return (function (){var or__19663__auto__ = (cljs.core._hash[(function (){var G__25441 = x__20845__auto__;return goog.typeOf(G__25441);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._hash["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = (function (){var obj25443 = {};return obj25443;
})();
cljs.core._seq = (function _seq(o){if((function (){var and__19621__auto__ = o;if(and__19621__auto__)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__19621__auto__;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__20845__auto__ = (((o == null))?null:o);return (function (){var or__19663__auto__ = (cljs.core._seq[(function (){var G__25447 = x__20845__auto__;return goog.typeOf(G__25447);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._seq["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = (function (){var obj25449 = {};return obj25449;
})();
cljs.core.IList = (function (){var obj25451 = {};return obj25451;
})();
cljs.core.IRecord = (function (){var obj25453 = {};return obj25453;
})();
cljs.core.IReversible = (function (){var obj25455 = {};return obj25455;
})();
cljs.core._rseq = (function _rseq(coll){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._rseq[(function (){var G__25459 = x__20845__auto__;return goog.typeOf(G__25459);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._rseq["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = (function (){var obj25461 = {};return obj25461;
})();
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._sorted_seq[(function (){var G__25465 = x__20845__auto__;return goog.typeOf(G__25465);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._sorted_seq["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._sorted_seq_from[(function (){var G__25469 = x__20845__auto__;return goog.typeOf(G__25469);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._sorted_seq_from["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._entry_key[(function (){var G__25473 = x__20845__auto__;return goog.typeOf(G__25473);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._entry_key["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._comparator[(function (){var G__25477 = x__20845__auto__;return goog.typeOf(G__25477);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._comparator["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IWriter = (function (){var obj25479 = {};return obj25479;
})();
cljs.core._write = (function _write(writer,s){if((function (){var and__19621__auto__ = writer;if(and__19621__auto__)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__19621__auto__;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__20845__auto__ = (((writer == null))?null:writer);return (function (){var or__19663__auto__ = (cljs.core._write[(function (){var G__25483 = x__20845__auto__;return goog.typeOf(G__25483);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._write["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){if((function (){var and__19621__auto__ = writer;if(and__19621__auto__)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__19621__auto__;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__20845__auto__ = (((writer == null))?null:writer);return (function (){var or__19663__auto__ = (cljs.core._flush[(function (){var G__25487 = x__20845__auto__;return goog.typeOf(G__25487);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._flush["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = (function (){var obj25489 = {};return obj25489;
})();
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){if((function (){var and__19621__auto__ = o;if(and__19621__auto__)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__19621__auto__;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__20845__auto__ = (((o == null))?null:o);return (function (){var or__19663__auto__ = (cljs.core._pr_writer[(function (){var G__25493 = x__20845__auto__;return goog.typeOf(G__25493);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._pr_writer["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = (function (){var obj25495 = {};return obj25495;
})();
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){if((function (){var and__19621__auto__ = d;if(and__19621__auto__)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__19621__auto__;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__20845__auto__ = (((d == null))?null:d);return (function (){var or__19663__auto__ = (cljs.core._realized_QMARK_[(function (){var G__25499 = x__20845__auto__;return goog.typeOf(G__25499);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._realized_QMARK_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = (function (){var obj25501 = {};return obj25501;
})();
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){if((function (){var and__19621__auto__ = this$;if(and__19621__auto__)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__19621__auto__;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__20845__auto__ = (((this$ == null))?null:this$);return (function (){var or__19663__auto__ = (cljs.core._notify_watches[(function (){var G__25505 = x__20845__auto__;return goog.typeOf(G__25505);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._notify_watches["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){if((function (){var and__19621__auto__ = this$;if(and__19621__auto__)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__19621__auto__;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__20845__auto__ = (((this$ == null))?null:this$);return (function (){var or__19663__auto__ = (cljs.core._add_watch[(function (){var G__25509 = x__20845__auto__;return goog.typeOf(G__25509);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._add_watch["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){if((function (){var and__19621__auto__ = this$;if(and__19621__auto__)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__19621__auto__;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__20845__auto__ = (((this$ == null))?null:this$);return (function (){var or__19663__auto__ = (cljs.core._remove_watch[(function (){var G__25513 = x__20845__auto__;return goog.typeOf(G__25513);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._remove_watch["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = (function (){var obj25515 = {};return obj25515;
})();
cljs.core._as_transient = (function _as_transient(coll){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._as_transient[(function (){var G__25519 = x__20845__auto__;return goog.typeOf(G__25519);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._as_transient["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = (function (){var obj25521 = {};return obj25521;
})();
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){if((function (){var and__19621__auto__ = tcoll;if(and__19621__auto__)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__19621__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__20845__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__19663__auto__ = (cljs.core._conj_BANG_[(function (){var G__25525 = x__20845__auto__;return goog.typeOf(G__25525);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._conj_BANG_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){if((function (){var and__19621__auto__ = tcoll;if(and__19621__auto__)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__19621__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__20845__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__19663__auto__ = (cljs.core._persistent_BANG_[(function (){var G__25529 = x__20845__auto__;return goog.typeOf(G__25529);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._persistent_BANG_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = (function (){var obj25531 = {};return obj25531;
})();
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){if((function (){var and__19621__auto__ = tcoll;if(and__19621__auto__)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__19621__auto__;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__20845__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__19663__auto__ = (cljs.core._assoc_BANG_[(function (){var G__25535 = x__20845__auto__;return goog.typeOf(G__25535);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._assoc_BANG_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = (function (){var obj25537 = {};return obj25537;
})();
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){if((function (){var and__19621__auto__ = tcoll;if(and__19621__auto__)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__19621__auto__;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__20845__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__19663__auto__ = (cljs.core._dissoc_BANG_[(function (){var G__25541 = x__20845__auto__;return goog.typeOf(G__25541);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._dissoc_BANG_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = (function (){var obj25543 = {};return obj25543;
})();
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){if((function (){var and__19621__auto__ = tcoll;if(and__19621__auto__)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__19621__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__20845__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__19663__auto__ = (cljs.core._assoc_n_BANG_[(function (){var G__25547 = x__20845__auto__;return goog.typeOf(G__25547);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._assoc_n_BANG_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){if((function (){var and__19621__auto__ = tcoll;if(and__19621__auto__)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__19621__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__20845__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__19663__auto__ = (cljs.core._pop_BANG_[(function (){var G__25551 = x__20845__auto__;return goog.typeOf(G__25551);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._pop_BANG_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = (function (){var obj25553 = {};return obj25553;
})();
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){if((function (){var and__19621__auto__ = tcoll;if(and__19621__auto__)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__19621__auto__;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__20845__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__19663__auto__ = (cljs.core._disjoin_BANG_[(function (){var G__25557 = x__20845__auto__;return goog.typeOf(G__25557);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._disjoin_BANG_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = (function (){var obj25559 = {};return obj25559;
})();
cljs.core._compare = (function _compare(x,y){if((function (){var and__19621__auto__ = x;if(and__19621__auto__)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__19621__auto__;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__20845__auto__ = (((x == null))?null:x);return (function (){var or__19663__auto__ = (cljs.core._compare[(function (){var G__25563 = x__20845__auto__;return goog.typeOf(G__25563);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._compare["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = (function (){var obj25565 = {};return obj25565;
})();
cljs.core._drop_first = (function _drop_first(coll){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._drop_first[(function (){var G__25569 = x__20845__auto__;return goog.typeOf(G__25569);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._drop_first["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = (function (){var obj25571 = {};return obj25571;
})();
cljs.core._chunked_first = (function _chunked_first(coll){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._chunked_first[(function (){var G__25575 = x__20845__auto__;return goog.typeOf(G__25575);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._chunked_first["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._chunked_rest[(function (){var G__25579 = x__20845__auto__;return goog.typeOf(G__25579);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._chunked_rest["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = (function (){var obj25581 = {};return obj25581;
})();
cljs.core._chunked_next = (function _chunked_next(coll){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._chunked_next[(function (){var G__25585 = x__20845__auto__;return goog.typeOf(G__25585);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._chunked_next["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INamed = (function (){var obj25587 = {};return obj25587;
})();
cljs.core._name = (function _name(x){if((function (){var and__19621__auto__ = x;if(and__19621__auto__)
{return x.cljs$core$INamed$_name$arity$1;
} else
{return and__19621__auto__;
}
})())
{return x.cljs$core$INamed$_name$arity$1(x);
} else
{var x__20845__auto__ = (((x == null))?null:x);return (function (){var or__19663__auto__ = (cljs.core._name[(function (){var G__25591 = x__20845__auto__;return goog.typeOf(G__25591);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._name["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("INamed.-name",x);
}
}
})().call(null,x);
}
});
cljs.core._namespace = (function _namespace(x){if((function (){var and__19621__auto__ = x;if(and__19621__auto__)
{return x.cljs$core$INamed$_namespace$arity$1;
} else
{return and__19621__auto__;
}
})())
{return x.cljs$core$INamed$_namespace$arity$1(x);
} else
{var x__20845__auto__ = (((x == null))?null:x);return (function (){var or__19663__auto__ = (cljs.core._namespace[(function (){var G__25595 = x__20845__auto__;return goog.typeOf(G__25595);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._namespace["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("INamed.-namespace",x);
}
}
})().call(null,x);
}
});
cljs.core.IAtom = (function (){var obj25597 = {};return obj25597;
})();
cljs.core.IReset = (function (){var obj25599 = {};return obj25599;
})();
cljs.core._reset_BANG_ = (function _reset_BANG_(o,new_value){if((function (){var and__19621__auto__ = o;if(and__19621__auto__)
{return o.cljs$core$IReset$_reset_BANG_$arity$2;
} else
{return and__19621__auto__;
}
})())
{return o.cljs$core$IReset$_reset_BANG_$arity$2(o,new_value);
} else
{var x__20845__auto__ = (((o == null))?null:o);return (function (){var or__19663__auto__ = (cljs.core._reset_BANG_[(function (){var G__25603 = x__20845__auto__;return goog.typeOf(G__25603);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._reset_BANG_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IReset.-reset!",o);
}
}
})().call(null,o,new_value);
}
});
cljs.core.ISwap = (function (){var obj25605 = {};return obj25605;
})();
cljs.core._swap_BANG_ = (function() {
var _swap_BANG_ = null;
var _swap_BANG___2 = (function (o,f){if((function (){var and__19621__auto__ = o;if(and__19621__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$2;
} else
{return and__19621__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$2(o,f);
} else
{var x__20845__auto__ = (((o == null))?null:o);return (function (){var or__19663__auto__ = (cljs.core._swap_BANG_[(function (){var G__25615 = x__20845__auto__;return goog.typeOf(G__25615);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f);
}
});
var _swap_BANG___3 = (function (o,f,a){if((function (){var and__19621__auto__ = o;if(and__19621__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$3;
} else
{return and__19621__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$3(o,f,a);
} else
{var x__20845__auto__ = (((o == null))?null:o);return (function (){var or__19663__auto__ = (cljs.core._swap_BANG_[(function (){var G__25617 = x__20845__auto__;return goog.typeOf(G__25617);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a);
}
});
var _swap_BANG___4 = (function (o,f,a,b){if((function (){var and__19621__auto__ = o;if(and__19621__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$4;
} else
{return and__19621__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$4(o,f,a,b);
} else
{var x__20845__auto__ = (((o == null))?null:o);return (function (){var or__19663__auto__ = (cljs.core._swap_BANG_[(function (){var G__25619 = x__20845__auto__;return goog.typeOf(G__25619);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b);
}
});
var _swap_BANG___5 = (function (o,f,a,b,xs){if((function (){var and__19621__auto__ = o;if(and__19621__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$5;
} else
{return and__19621__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$5(o,f,a,b,xs);
} else
{var x__20845__auto__ = (((o == null))?null:o);return (function (){var or__19663__auto__ = (cljs.core._swap_BANG_[(function (){var G__25621 = x__20845__auto__;return goog.typeOf(G__25621);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
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
cljs.core.IIterable = (function (){var obj25623 = {};return obj25623;
})();
cljs.core._iterator = (function _iterator(coll){if((function (){var and__19621__auto__ = coll;if(and__19621__auto__)
{return coll.cljs$core$IIterable$_iterator$arity$1;
} else
{return and__19621__auto__;
}
})())
{return coll.cljs$core$IIterable$_iterator$arity$1(coll);
} else
{var x__20845__auto__ = (((coll == null))?null:coll);return (function (){var or__19663__auto__ = (cljs.core._iterator[(function (){var G__25627 = x__20845__auto__;return goog.typeOf(G__25627);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._iterator["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
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
cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/StringBufferWriter");
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
if((typeof Math.imul !== 'undefined') && (!(((function (){var G__25630 = (4294967295);var G__25631 = (5);return (Math.imul.cljs$core$IFn$_invoke$arity$2 ? Math.imul.cljs$core$IFn$_invoke$arity$2(G__25630,G__25631) : Math.imul.call(null,G__25630,G__25631));
})() === (0)))))
{cljs.core.imul = (function imul(a,b){var G__25634 = a;var G__25635 = b;return (Math.imul.cljs$core$IFn$_invoke$arity$2 ? Math.imul.cljs$core$IFn$_invoke$arity$2(G__25634,G__25635) : Math.imul.call(null,G__25634,G__25635));
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
var G__25636 = (i + (2));
var G__25637 = cljs.core.m3_mix_H1(h1,cljs.core.m3_mix_K1((in$.charCodeAt((i - (1))) | (in$.charCodeAt(i) << (16)))));
i = G__25636;
h1 = G__25637;
continue;
}
} else
{return h1;
}
break;
}
})();var h1__$1 = ((((in$.length & (1)) === (1)))?(h1 ^ cljs.core.m3_mix_K1(in$.charCodeAt((in$.length - (1))))):h1);return cljs.core.m3_fmix(h1__$1,cljs.core.imul((2),in$.length));
});
cljs.core.string_hash_cache = (function (){var obj25639 = {};return obj25639;
})();
cljs.core.string_hash_cache_count = (0);
cljs.core.hash_string_STAR_ = (function hash_string_STAR_(s){if(!((s == null)))
{var len = s.length;if((len > (0)))
{var i = (0);var hash = (0);while(true){
if((i < len))
{{
var G__25640 = (i + (1));
var G__25641 = (cljs.core.imul((31),hash) + s.charCodeAt(i));
i = G__25640;
hash = G__25641;
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
{cljs.core.string_hash_cache = (function (){var obj25645 = {};return obj25645;
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
cljs.core.hash = (function hash(o){if((function (){var G__25648 = o;if(G__25648)
{var bit__20884__auto__ = (G__25648.cljs$lang$protocol_mask$partition0$ & (4194304));if((bit__20884__auto__) || (G__25648.cljs$core$IHash$))
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
{return ((function (){var G__25649 = o;return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__25649) : Math.floor.call(null,G__25649));
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
cljs.core.compare_symbols = (function compare_symbols(a,b){if(cljs.core.truth_((function (){var G__25658 = a;var G__25659 = b;return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__25658,G__25659) : cljs.core._EQ_.call(null,G__25658,G__25659));
})()))
{return (0);
} else
{if(cljs.core.truth_((function (){var and__19621__auto__ = cljs.core.not(a.ns);if(and__19621__auto__)
{return b.ns;
} else
{return and__19621__auto__;
}
})()))
{return (-1);
} else
{if(cljs.core.truth_(a.ns))
{if(cljs.core.not(b.ns))
{return (1);
} else
{var nsc = (function (){var G__25660 = a.ns;var G__25661 = b.ns;return (cljs.core.compare.cljs$core$IFn$_invoke$arity$2 ? cljs.core.compare.cljs$core$IFn$_invoke$arity$2(G__25660,G__25661) : cljs.core.compare.call(null,G__25660,G__25661));
})();if((nsc === (0)))
{var G__25662 = a.name;var G__25663 = b.name;return (cljs.core.compare.cljs$core$IFn$_invoke$arity$2 ? cljs.core.compare.cljs$core$IFn$_invoke$arity$2(G__25662,G__25663) : cljs.core.compare.call(null,G__25662,G__25663));
} else
{return nsc;
}
}
} else
{var G__25664 = a.name;var G__25665 = b.name;return (cljs.core.compare.cljs$core$IFn$_invoke$arity$2 ? cljs.core.compare.cljs$core$IFn$_invoke$arity$2(G__25664,G__25665) : cljs.core.compare.call(null,G__25664,G__25665));

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
cljs.core.Symbol.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/Symbol");
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
var sym__$1 = this;var h__20522__auto__ = self__._hash;if(!((h__20522__auto__ == null)))
{return h__20522__auto__;
} else
{var h__20522__auto____$1 = cljs.core.hash_symbol(sym__$1);self__._hash = h__20522__auto____$1;
return h__20522__auto____$1;
}
});
cljs.core.Symbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new cljs.core.Symbol(self__.ns,self__.name,self__.str,self__._hash,new_meta));
});
cljs.core.Symbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__._meta;
});
cljs.core.Symbol.prototype.call = (function() {
var G__25667 = null;
var G__25667__2 = (function (self__,coll){var self__ = this;
var self____$1 = this;var sym = self____$1;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,null);
});
var G__25667__3 = (function (self__,coll,not_found){var self__ = this;
var self____$1 = this;var sym = self____$1;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,not_found);
});
G__25667 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__25667__2.call(this,self__,coll);
case 3:
return G__25667__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25667.cljs$core$IFn$_invoke$arity$2 = G__25667__2;
G__25667.cljs$core$IFn$_invoke$arity$3 = G__25667__3;
return G__25667;
})()
;
cljs.core.Symbol.prototype.apply = (function (self__,args25666){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args25666)));
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
cljs.core.iterable_QMARK_ = (function iterable_QMARK_(x){var G__25671 = x;if(G__25671)
{var bit__20917__auto__ = null;if(cljs.core.truth_((function (){var or__19663__auto__ = bit__20917__auto__;if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return G__25671.cljs$core$IIterable$;
}
})()))
{return true;
} else
{if((!G__25671.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IIterable,G__25671);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IIterable,G__25671);
}
});
cljs.core.clone = (function clone(value){return cljs.core._clone(value);
});
cljs.core.cloneable_QMARK_ = (function cloneable_QMARK_(value){var G__25673 = value;if(G__25673)
{var bit__20917__auto__ = (G__25673.cljs$lang$protocol_mask$partition1$ & (8192));if((bit__20917__auto__) || (G__25673.cljs$core$ICloneable$))
{return true;
} else
{if((!G__25673.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__25673);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__25673);
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
{if((function (){var G__25675 = coll;if(G__25675)
{var bit__20884__auto__ = (G__25675.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__20884__auto__) || (G__25675.cljs$core$ISeqable$))
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
{if((function (){var G__25677 = coll;if(G__25677)
{var bit__20884__auto__ = (G__25677.cljs$lang$protocol_mask$partition0$ & (64));if((bit__20884__auto__) || (G__25677.cljs$core$ISeq$))
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
{if((function (){var G__25679 = coll;if(G__25679)
{var bit__20884__auto__ = (G__25679.cljs$lang$protocol_mask$partition0$ & (64));if((bit__20884__auto__) || (G__25679.cljs$core$ISeq$))
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
{if((function (){var G__25681 = coll;if(G__25681)
{var bit__20884__auto__ = (G__25681.cljs$lang$protocol_mask$partition0$ & (128));if((bit__20884__auto__) || (G__25681.cljs$core$INext$))
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
var G__25686__delegate = function (x,y,more){while(true){
if(_EQ_.cljs$core$IFn$_invoke$arity$2(x,y))
{if(cljs.core.next(more))
{{
var G__25687 = y;
var G__25688 = cljs.core.first(more);
var G__25689 = cljs.core.next(more);
x = G__25687;
y = G__25688;
more = G__25689;
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
var G__25686 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__25686__delegate.call(this,x,y,more);};
G__25686.cljs$lang$maxFixedArity = 2;
G__25686.cljs$lang$applyTo = (function (arglist__25690){
var x = cljs.core.first(arglist__25690);
arglist__25690 = cljs.core.next(arglist__25690);
var y = cljs.core.first(arglist__25690);
var more = cljs.core.rest(arglist__25690);
return G__25686__delegate(x,y,more);
});
G__25686.cljs$core$IFn$_invoke$arity$variadic = G__25686__delegate;
return G__25686;
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
var G__25691 = (n + (1));
var G__25692 = ((cljs.core.imul((31),hash_code) + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__25693 = cljs.core.next(coll__$1);
n = G__25691;
hash_code = G__25692;
coll__$1 = G__25693;
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
var G__25694 = (n + (1));
var G__25695 = ((hash_code + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__25696 = cljs.core.next(coll__$1);
n = G__25694;
hash_code = G__25695;
coll__$1 = G__25696;
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
(cljs.core._hash["_"] = (function (o){var G__25697 = o;return goog.getUid(G__25697);
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
cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/Reduced");
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
{var nval = (function (){var G__25704 = val;var G__25705 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25704,G__25705) : f.call(null,G__25704,G__25705));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__25710 = nval;
var G__25711 = (n + (1));
val = G__25710;
n = G__25711;
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
{var nval = (function (){var G__25706 = val__$1;var G__25707 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25706,G__25707) : f.call(null,G__25706,G__25707));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__25712 = nval;
var G__25713 = (n + (1));
val__$1 = G__25712;
n = G__25713;
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
{var nval = (function (){var G__25708 = val__$1;var G__25709 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25708,G__25709) : f.call(null,G__25708,G__25709));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__25714 = nval;
var G__25715 = (n + (1));
val__$1 = G__25714;
n = G__25715;
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
{var nval = (function (){var G__25722 = val;var G__25723 = (arr[n]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25722,G__25723) : f.call(null,G__25722,G__25723));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__25728 = nval;
var G__25729 = (n + (1));
val = G__25728;
n = G__25729;
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
{var nval = (function (){var G__25724 = val__$1;var G__25725 = (arr[n]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25724,G__25725) : f.call(null,G__25724,G__25725));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__25730 = nval;
var G__25731 = (n + (1));
val__$1 = G__25730;
n = G__25731;
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
{var nval = (function (){var G__25726 = val__$1;var G__25727 = (arr[n]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25726,G__25727) : f.call(null,G__25726,G__25727));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__25732 = nval;
var G__25733 = (n + (1));
val__$1 = G__25732;
n = G__25733;
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
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){var G__25735 = x;if(G__25735)
{var bit__20917__auto__ = (G__25735.cljs$lang$protocol_mask$partition0$ & (2));if((bit__20917__auto__) || (G__25735.cljs$core$ICounted$))
{return true;
} else
{if((!G__25735.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__25735);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__25735);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){var G__25737 = x;if(G__25737)
{var bit__20917__auto__ = (G__25737.cljs$lang$protocol_mask$partition0$ & (16));if((bit__20917__auto__) || (G__25737.cljs$core$IIndexed$))
{return true;
} else
{if((!G__25737.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__25737);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__25737);
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
cljs.core.IndexedSeqIterator.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/IndexedSeqIterator");
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
cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/IndexedSeq");
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
var coll__$1 = this;var G__25738 = coll__$1;var G__25739 = other;return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(G__25738,G__25739) : cljs.core.equiv_sequential.call(null,G__25738,G__25739));
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
var coll__$1 = this;var G__25740 = o;var G__25741 = coll__$1;return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(G__25740,G__25741) : cljs.core.cons.call(null,G__25740,G__25741));
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
cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/RSeq");
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
var coll__$1 = this;var G__25744 = coll__$1;var G__25745 = other;return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(G__25744,G__25745) : cljs.core.equiv_sequential.call(null,G__25744,G__25745));
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var G__25746 = cljs.core.List.EMPTY;var G__25747 = self__.meta;return (cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2(G__25746,G__25747) : cljs.core.with_meta.call(null,G__25746,G__25747));
});
cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (col,f){var self__ = this;
var col__$1 = this;var G__25748 = f;var G__25749 = col__$1;return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(G__25748,G__25749) : cljs.core.seq_reduce.call(null,G__25748,G__25749));
});
cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (col,f,start){var self__ = this;
var col__$1 = this;var G__25750 = f;var G__25751 = start;var G__25752 = col__$1;return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(G__25750,G__25751,G__25752) : cljs.core.seq_reduce.call(null,G__25750,G__25751,G__25752));
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
var coll__$1 = this;var G__25753 = o;var G__25754 = coll__$1;return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(G__25753,G__25754) : cljs.core.cons.call(null,G__25753,G__25754));
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
var G__25755 = sn;
s = G__25755;
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
var G__25760__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__25761 = conj.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__25762 = cljs.core.first(xs);
var G__25763 = cljs.core.next(xs);
coll = G__25761;
x = G__25762;
xs = G__25763;
continue;
}
} else
{return conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__25760 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__25760__delegate.call(this,coll,x,xs);};
G__25760.cljs$lang$maxFixedArity = 2;
G__25760.cljs$lang$applyTo = (function (arglist__25764){
var coll = cljs.core.first(arglist__25764);
arglist__25764 = cljs.core.next(arglist__25764);
var x = cljs.core.first(arglist__25764);
var xs = cljs.core.rest(arglist__25764);
return G__25760__delegate(coll,x,xs);
});
G__25760.cljs$core$IFn$_invoke$arity$variadic = G__25760__delegate;
return G__25760;
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
var G__25765 = cljs.core.next(s);
var G__25766 = (acc + (1));
s = G__25765;
acc = G__25766;
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
{if((function (){var G__25768 = coll;if(G__25768)
{var bit__20884__auto__ = (G__25768.cljs$lang$protocol_mask$partition0$ & (2));if((bit__20884__auto__) || (G__25768.cljs$core$ICounted$))
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
var G__25769 = cljs.core.next(coll);
var G__25770 = (n - (1));
coll = G__25769;
n = G__25770;
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
var G__25771 = cljs.core.next(coll);
var G__25772 = (n - (1));
var G__25773 = not_found;
coll = G__25771;
n = G__25772;
not_found = G__25773;
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
{if((function (){var G__25778 = coll;if(G__25778)
{var bit__20884__auto__ = (G__25778.cljs$lang$protocol_mask$partition0$ & (16));if((bit__20884__auto__) || (G__25778.cljs$core$IIndexed$))
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
{if((function (){var G__25779 = coll;if(G__25779)
{var bit__20917__auto__ = (G__25779.cljs$lang$protocol_mask$partition0$ & (64));if((bit__20917__auto__) || (G__25779.cljs$core$ISeq$))
{return true;
} else
{if((!G__25779.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__25779);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__25779);
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
{if((function (){var G__25780 = coll;if(G__25780)
{var bit__20884__auto__ = (G__25780.cljs$lang$protocol_mask$partition0$ & (16));if((bit__20884__auto__) || (G__25780.cljs$core$IIndexed$))
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
{if((function (){var G__25781 = coll;if(G__25781)
{var bit__20917__auto__ = (G__25781.cljs$lang$protocol_mask$partition0$ & (64));if((bit__20917__auto__) || (G__25781.cljs$core$ISeq$))
{return true;
} else
{if((!G__25781.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__25781);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__25781);
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
{if((function (){var G__25784 = o;if(G__25784)
{var bit__20884__auto__ = (G__25784.cljs$lang$protocol_mask$partition0$ & (256));if((bit__20884__auto__) || (G__25784.cljs$core$ILookup$))
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
{if((function (){var G__25785 = o;if(G__25785)
{var bit__20884__auto__ = (G__25785.cljs$lang$protocol_mask$partition0$ & (256));if((bit__20884__auto__) || (G__25785.cljs$core$ILookup$))
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
var G__25789__delegate = function (coll,k,v,kvs){while(true){
var ret = assoc.cljs$core$IFn$_invoke$arity$3(coll,k,v);if(cljs.core.truth_(kvs))
{{
var G__25790 = ret;
var G__25791 = cljs.core.first(kvs);
var G__25792 = cljs.core.second(kvs);
var G__25793 = cljs.core.nnext(kvs);
coll = G__25790;
k = G__25791;
v = G__25792;
kvs = G__25793;
continue;
}
} else
{return ret;
}
break;
}
};
var G__25789 = function (coll,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__25789__delegate.call(this,coll,k,v,kvs);};
G__25789.cljs$lang$maxFixedArity = 3;
G__25789.cljs$lang$applyTo = (function (arglist__25794){
var coll = cljs.core.first(arglist__25794);
arglist__25794 = cljs.core.next(arglist__25794);
var k = cljs.core.first(arglist__25794);
arglist__25794 = cljs.core.next(arglist__25794);
var v = cljs.core.first(arglist__25794);
var kvs = cljs.core.rest(arglist__25794);
return G__25789__delegate(coll,k,v,kvs);
});
G__25789.cljs$core$IFn$_invoke$arity$variadic = G__25789__delegate;
return G__25789;
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
var G__25797__delegate = function (coll,k,ks){while(true){
if((coll == null))
{return null;
} else
{var ret = dissoc.cljs$core$IFn$_invoke$arity$2(coll,k);if(cljs.core.truth_(ks))
{{
var G__25798 = ret;
var G__25799 = cljs.core.first(ks);
var G__25800 = cljs.core.next(ks);
coll = G__25798;
k = G__25799;
ks = G__25800;
continue;
}
} else
{return ret;
}
}
break;
}
};
var G__25797 = function (coll,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__25797__delegate.call(this,coll,k,ks);};
G__25797.cljs$lang$maxFixedArity = 2;
G__25797.cljs$lang$applyTo = (function (arglist__25801){
var coll = cljs.core.first(arglist__25801);
arglist__25801 = cljs.core.next(arglist__25801);
var k = cljs.core.first(arglist__25801);
var ks = cljs.core.rest(arglist__25801);
return G__25797__delegate(coll,k,ks);
});
G__25797.cljs$core$IFn$_invoke$arity$variadic = G__25797__delegate;
return G__25797;
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
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){var or__19663__auto__ = (function (){var G__25806 = f;return goog.isFunction(G__25806);
})();if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{var G__25807 = f;if(G__25807)
{var bit__20917__auto__ = null;if(cljs.core.truth_((function (){var or__19663__auto____$1 = bit__20917__auto__;if(cljs.core.truth_(or__19663__auto____$1))
{return or__19663__auto____$1;
} else
{return G__25807.cljs$core$Fn$;
}
})()))
{return true;
} else
{if((!G__25807.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__25807);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__25807);
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
cljs.core.MetaFn.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/MetaFn");
});
cljs.core.MetaFn.prototype.call = (function() {
var G__26273 = null;
var G__26273__1 = (function (self__){var self__ = this;
var self____$1 = this;var _ = self____$1;return (self__.afn.cljs$core$IFn$_invoke$arity$0 ? self__.afn.cljs$core$IFn$_invoke$arity$0() : self__.afn.call(null));
});
var G__26273__2 = (function (self__,a){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25809 = a;return (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(G__25809) : self__.afn.call(null,G__25809));
});
var G__26273__3 = (function (self__,a,b){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25810 = a;var G__25811 = b;return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(G__25810,G__25811) : self__.afn.call(null,G__25810,G__25811));
});
var G__26273__4 = (function (self__,a,b,c){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25812 = a;var G__25813 = b;var G__25814 = c;return (self__.afn.cljs$core$IFn$_invoke$arity$3 ? self__.afn.cljs$core$IFn$_invoke$arity$3(G__25812,G__25813,G__25814) : self__.afn.call(null,G__25812,G__25813,G__25814));
});
var G__26273__5 = (function (self__,a,b,c,d){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25815 = a;var G__25816 = b;var G__25817 = c;var G__25818 = d;return (self__.afn.cljs$core$IFn$_invoke$arity$4 ? self__.afn.cljs$core$IFn$_invoke$arity$4(G__25815,G__25816,G__25817,G__25818) : self__.afn.call(null,G__25815,G__25816,G__25817,G__25818));
});
var G__26273__6 = (function (self__,a,b,c,d,e){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25819 = a;var G__25820 = b;var G__25821 = c;var G__25822 = d;var G__25823 = e;return (self__.afn.cljs$core$IFn$_invoke$arity$5 ? self__.afn.cljs$core$IFn$_invoke$arity$5(G__25819,G__25820,G__25821,G__25822,G__25823) : self__.afn.call(null,G__25819,G__25820,G__25821,G__25822,G__25823));
});
var G__26273__7 = (function (self__,a,b,c,d,e,f){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25824 = a;var G__25825 = b;var G__25826 = c;var G__25827 = d;var G__25828 = e;var G__25829 = f;return (self__.afn.cljs$core$IFn$_invoke$arity$6 ? self__.afn.cljs$core$IFn$_invoke$arity$6(G__25824,G__25825,G__25826,G__25827,G__25828,G__25829) : self__.afn.call(null,G__25824,G__25825,G__25826,G__25827,G__25828,G__25829));
});
var G__26273__8 = (function (self__,a,b,c,d,e,f,g){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25830 = a;var G__25831 = b;var G__25832 = c;var G__25833 = d;var G__25834 = e;var G__25835 = f;var G__25836 = g;return (self__.afn.cljs$core$IFn$_invoke$arity$7 ? self__.afn.cljs$core$IFn$_invoke$arity$7(G__25830,G__25831,G__25832,G__25833,G__25834,G__25835,G__25836) : self__.afn.call(null,G__25830,G__25831,G__25832,G__25833,G__25834,G__25835,G__25836));
});
var G__26273__9 = (function (self__,a,b,c,d,e,f,g,h){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25837 = a;var G__25838 = b;var G__25839 = c;var G__25840 = d;var G__25841 = e;var G__25842 = f;var G__25843 = g;var G__25844 = h;return (self__.afn.cljs$core$IFn$_invoke$arity$8 ? self__.afn.cljs$core$IFn$_invoke$arity$8(G__25837,G__25838,G__25839,G__25840,G__25841,G__25842,G__25843,G__25844) : self__.afn.call(null,G__25837,G__25838,G__25839,G__25840,G__25841,G__25842,G__25843,G__25844));
});
var G__26273__10 = (function (self__,a,b,c,d,e,f,g,h,i){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25845 = a;var G__25846 = b;var G__25847 = c;var G__25848 = d;var G__25849 = e;var G__25850 = f;var G__25851 = g;var G__25852 = h;var G__25853 = i;return (self__.afn.cljs$core$IFn$_invoke$arity$9 ? self__.afn.cljs$core$IFn$_invoke$arity$9(G__25845,G__25846,G__25847,G__25848,G__25849,G__25850,G__25851,G__25852,G__25853) : self__.afn.call(null,G__25845,G__25846,G__25847,G__25848,G__25849,G__25850,G__25851,G__25852,G__25853));
});
var G__26273__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25854 = a;var G__25855 = b;var G__25856 = c;var G__25857 = d;var G__25858 = e;var G__25859 = f;var G__25860 = g;var G__25861 = h;var G__25862 = i;var G__25863 = j;return (self__.afn.cljs$core$IFn$_invoke$arity$10 ? self__.afn.cljs$core$IFn$_invoke$arity$10(G__25854,G__25855,G__25856,G__25857,G__25858,G__25859,G__25860,G__25861,G__25862,G__25863) : self__.afn.call(null,G__25854,G__25855,G__25856,G__25857,G__25858,G__25859,G__25860,G__25861,G__25862,G__25863));
});
var G__26273__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25864 = a;var G__25865 = b;var G__25866 = c;var G__25867 = d;var G__25868 = e;var G__25869 = f;var G__25870 = g;var G__25871 = h;var G__25872 = i;var G__25873 = j;var G__25874 = k;return (self__.afn.cljs$core$IFn$_invoke$arity$11 ? self__.afn.cljs$core$IFn$_invoke$arity$11(G__25864,G__25865,G__25866,G__25867,G__25868,G__25869,G__25870,G__25871,G__25872,G__25873,G__25874) : self__.afn.call(null,G__25864,G__25865,G__25866,G__25867,G__25868,G__25869,G__25870,G__25871,G__25872,G__25873,G__25874));
});
var G__26273__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25875 = a;var G__25876 = b;var G__25877 = c;var G__25878 = d;var G__25879 = e;var G__25880 = f;var G__25881 = g;var G__25882 = h;var G__25883 = i;var G__25884 = j;var G__25885 = k;var G__25886 = l;return (self__.afn.cljs$core$IFn$_invoke$arity$12 ? self__.afn.cljs$core$IFn$_invoke$arity$12(G__25875,G__25876,G__25877,G__25878,G__25879,G__25880,G__25881,G__25882,G__25883,G__25884,G__25885,G__25886) : self__.afn.call(null,G__25875,G__25876,G__25877,G__25878,G__25879,G__25880,G__25881,G__25882,G__25883,G__25884,G__25885,G__25886));
});
var G__26273__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25887 = a;var G__25888 = b;var G__25889 = c;var G__25890 = d;var G__25891 = e;var G__25892 = f;var G__25893 = g;var G__25894 = h;var G__25895 = i;var G__25896 = j;var G__25897 = k;var G__25898 = l;var G__25899 = m;return (self__.afn.cljs$core$IFn$_invoke$arity$13 ? self__.afn.cljs$core$IFn$_invoke$arity$13(G__25887,G__25888,G__25889,G__25890,G__25891,G__25892,G__25893,G__25894,G__25895,G__25896,G__25897,G__25898,G__25899) : self__.afn.call(null,G__25887,G__25888,G__25889,G__25890,G__25891,G__25892,G__25893,G__25894,G__25895,G__25896,G__25897,G__25898,G__25899));
});
var G__26273__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25900 = a;var G__25901 = b;var G__25902 = c;var G__25903 = d;var G__25904 = e;var G__25905 = f;var G__25906 = g;var G__25907 = h;var G__25908 = i;var G__25909 = j;var G__25910 = k;var G__25911 = l;var G__25912 = m;var G__25913 = n;return (self__.afn.cljs$core$IFn$_invoke$arity$14 ? self__.afn.cljs$core$IFn$_invoke$arity$14(G__25900,G__25901,G__25902,G__25903,G__25904,G__25905,G__25906,G__25907,G__25908,G__25909,G__25910,G__25911,G__25912,G__25913) : self__.afn.call(null,G__25900,G__25901,G__25902,G__25903,G__25904,G__25905,G__25906,G__25907,G__25908,G__25909,G__25910,G__25911,G__25912,G__25913));
});
var G__26273__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25914 = a;var G__25915 = b;var G__25916 = c;var G__25917 = d;var G__25918 = e;var G__25919 = f;var G__25920 = g;var G__25921 = h;var G__25922 = i;var G__25923 = j;var G__25924 = k;var G__25925 = l;var G__25926 = m;var G__25927 = n;var G__25928 = o;return (self__.afn.cljs$core$IFn$_invoke$arity$15 ? self__.afn.cljs$core$IFn$_invoke$arity$15(G__25914,G__25915,G__25916,G__25917,G__25918,G__25919,G__25920,G__25921,G__25922,G__25923,G__25924,G__25925,G__25926,G__25927,G__25928) : self__.afn.call(null,G__25914,G__25915,G__25916,G__25917,G__25918,G__25919,G__25920,G__25921,G__25922,G__25923,G__25924,G__25925,G__25926,G__25927,G__25928));
});
var G__26273__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25929 = a;var G__25930 = b;var G__25931 = c;var G__25932 = d;var G__25933 = e;var G__25934 = f;var G__25935 = g;var G__25936 = h;var G__25937 = i;var G__25938 = j;var G__25939 = k;var G__25940 = l;var G__25941 = m;var G__25942 = n;var G__25943 = o;var G__25944 = p;return (self__.afn.cljs$core$IFn$_invoke$arity$16 ? self__.afn.cljs$core$IFn$_invoke$arity$16(G__25929,G__25930,G__25931,G__25932,G__25933,G__25934,G__25935,G__25936,G__25937,G__25938,G__25939,G__25940,G__25941,G__25942,G__25943,G__25944) : self__.afn.call(null,G__25929,G__25930,G__25931,G__25932,G__25933,G__25934,G__25935,G__25936,G__25937,G__25938,G__25939,G__25940,G__25941,G__25942,G__25943,G__25944));
});
var G__26273__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25945 = a;var G__25946 = b;var G__25947 = c;var G__25948 = d;var G__25949 = e;var G__25950 = f;var G__25951 = g;var G__25952 = h;var G__25953 = i;var G__25954 = j;var G__25955 = k;var G__25956 = l;var G__25957 = m;var G__25958 = n;var G__25959 = o;var G__25960 = p;var G__25961 = q;return (self__.afn.cljs$core$IFn$_invoke$arity$17 ? self__.afn.cljs$core$IFn$_invoke$arity$17(G__25945,G__25946,G__25947,G__25948,G__25949,G__25950,G__25951,G__25952,G__25953,G__25954,G__25955,G__25956,G__25957,G__25958,G__25959,G__25960,G__25961) : self__.afn.call(null,G__25945,G__25946,G__25947,G__25948,G__25949,G__25950,G__25951,G__25952,G__25953,G__25954,G__25955,G__25956,G__25957,G__25958,G__25959,G__25960,G__25961));
});
var G__26273__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25962 = a;var G__25963 = b;var G__25964 = c;var G__25965 = d;var G__25966 = e;var G__25967 = f;var G__25968 = g;var G__25969 = h;var G__25970 = i;var G__25971 = j;var G__25972 = k;var G__25973 = l;var G__25974 = m;var G__25975 = n;var G__25976 = o;var G__25977 = p;var G__25978 = q;var G__25979 = r;return (self__.afn.cljs$core$IFn$_invoke$arity$18 ? self__.afn.cljs$core$IFn$_invoke$arity$18(G__25962,G__25963,G__25964,G__25965,G__25966,G__25967,G__25968,G__25969,G__25970,G__25971,G__25972,G__25973,G__25974,G__25975,G__25976,G__25977,G__25978,G__25979) : self__.afn.call(null,G__25962,G__25963,G__25964,G__25965,G__25966,G__25967,G__25968,G__25969,G__25970,G__25971,G__25972,G__25973,G__25974,G__25975,G__25976,G__25977,G__25978,G__25979));
});
var G__26273__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25980 = a;var G__25981 = b;var G__25982 = c;var G__25983 = d;var G__25984 = e;var G__25985 = f;var G__25986 = g;var G__25987 = h;var G__25988 = i;var G__25989 = j;var G__25990 = k;var G__25991 = l;var G__25992 = m;var G__25993 = n;var G__25994 = o;var G__25995 = p;var G__25996 = q;var G__25997 = r;var G__25998 = s;return (self__.afn.cljs$core$IFn$_invoke$arity$19 ? self__.afn.cljs$core$IFn$_invoke$arity$19(G__25980,G__25981,G__25982,G__25983,G__25984,G__25985,G__25986,G__25987,G__25988,G__25989,G__25990,G__25991,G__25992,G__25993,G__25994,G__25995,G__25996,G__25997,G__25998) : self__.afn.call(null,G__25980,G__25981,G__25982,G__25983,G__25984,G__25985,G__25986,G__25987,G__25988,G__25989,G__25990,G__25991,G__25992,G__25993,G__25994,G__25995,G__25996,G__25997,G__25998));
});
var G__26273__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__25999 = a;var G__26000 = b;var G__26001 = c;var G__26002 = d;var G__26003 = e;var G__26004 = f;var G__26005 = g;var G__26006 = h;var G__26007 = i;var G__26008 = j;var G__26009 = k;var G__26010 = l;var G__26011 = m;var G__26012 = n;var G__26013 = o;var G__26014 = p;var G__26015 = q;var G__26016 = r;var G__26017 = s;var G__26018 = t;return (self__.afn.cljs$core$IFn$_invoke$arity$20 ? self__.afn.cljs$core$IFn$_invoke$arity$20(G__25999,G__26000,G__26001,G__26002,G__26003,G__26004,G__26005,G__26006,G__26007,G__26008,G__26009,G__26010,G__26011,G__26012,G__26013,G__26014,G__26015,G__26016,G__26017,G__26018) : self__.afn.call(null,G__25999,G__26000,G__26001,G__26002,G__26003,G__26004,G__26005,G__26006,G__26007,G__26008,G__26009,G__26010,G__26011,G__26012,G__26013,G__26014,G__26015,G__26016,G__26017,G__26018));
});
var G__26273__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__26019 = self__.afn;var G__26020 = a;var G__26021 = b;var G__26022 = c;var G__26023 = d;var G__26024 = e;var G__26025 = f;var G__26026 = g;var G__26027 = h;var G__26028 = i;var G__26029 = j;var G__26030 = k;var G__26031 = l;var G__26032 = m;var G__26033 = n;var G__26034 = o;var G__26035 = p;var G__26036 = q;var G__26037 = r;var G__26038 = s;var G__26039 = t;var G__26040 = rest;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$22 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$22(G__26019,G__26020,G__26021,G__26022,G__26023,G__26024,G__26025,G__26026,G__26027,G__26028,G__26029,G__26030,G__26031,G__26032,G__26033,G__26034,G__26035,G__26036,G__26037,G__26038,G__26039,G__26040) : cljs.core.apply.call(null,G__26019,G__26020,G__26021,G__26022,G__26023,G__26024,G__26025,G__26026,G__26027,G__26028,G__26029,G__26030,G__26031,G__26032,G__26033,G__26034,G__26035,G__26036,G__26037,G__26038,G__26039,G__26040));
});
G__26273 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__26273__1.call(this,self__);
case 2:
return G__26273__2.call(this,self__,a);
case 3:
return G__26273__3.call(this,self__,a,b);
case 4:
return G__26273__4.call(this,self__,a,b,c);
case 5:
return G__26273__5.call(this,self__,a,b,c,d);
case 6:
return G__26273__6.call(this,self__,a,b,c,d,e);
case 7:
return G__26273__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__26273__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__26273__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__26273__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__26273__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__26273__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__26273__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__26273__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__26273__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__26273__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__26273__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__26273__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__26273__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__26273__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__26273__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__26273__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26273.cljs$core$IFn$_invoke$arity$1 = G__26273__1;
G__26273.cljs$core$IFn$_invoke$arity$2 = G__26273__2;
G__26273.cljs$core$IFn$_invoke$arity$3 = G__26273__3;
G__26273.cljs$core$IFn$_invoke$arity$4 = G__26273__4;
G__26273.cljs$core$IFn$_invoke$arity$5 = G__26273__5;
G__26273.cljs$core$IFn$_invoke$arity$6 = G__26273__6;
G__26273.cljs$core$IFn$_invoke$arity$7 = G__26273__7;
G__26273.cljs$core$IFn$_invoke$arity$8 = G__26273__8;
G__26273.cljs$core$IFn$_invoke$arity$9 = G__26273__9;
G__26273.cljs$core$IFn$_invoke$arity$10 = G__26273__10;
G__26273.cljs$core$IFn$_invoke$arity$11 = G__26273__11;
G__26273.cljs$core$IFn$_invoke$arity$12 = G__26273__12;
G__26273.cljs$core$IFn$_invoke$arity$13 = G__26273__13;
G__26273.cljs$core$IFn$_invoke$arity$14 = G__26273__14;
G__26273.cljs$core$IFn$_invoke$arity$15 = G__26273__15;
G__26273.cljs$core$IFn$_invoke$arity$16 = G__26273__16;
G__26273.cljs$core$IFn$_invoke$arity$17 = G__26273__17;
G__26273.cljs$core$IFn$_invoke$arity$18 = G__26273__18;
G__26273.cljs$core$IFn$_invoke$arity$19 = G__26273__19;
G__26273.cljs$core$IFn$_invoke$arity$20 = G__26273__20;
G__26273.cljs$core$IFn$_invoke$arity$21 = G__26273__21;
G__26273.cljs$core$IFn$_invoke$arity$22 = G__26273__22;
return G__26273;
})()
;
cljs.core.MetaFn.prototype.apply = (function (self__,args25808){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args25808)));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){var self__ = this;
var _ = this;return (self__.afn.cljs$core$IFn$_invoke$arity$0 ? self__.afn.cljs$core$IFn$_invoke$arity$0() : self__.afn.call(null));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){var self__ = this;
var _ = this;var G__26041 = a;return (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(G__26041) : self__.afn.call(null,G__26041));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){var self__ = this;
var _ = this;var G__26042 = a;var G__26043 = b;return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(G__26042,G__26043) : self__.afn.call(null,G__26042,G__26043));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){var self__ = this;
var _ = this;var G__26044 = a;var G__26045 = b;var G__26046 = c;return (self__.afn.cljs$core$IFn$_invoke$arity$3 ? self__.afn.cljs$core$IFn$_invoke$arity$3(G__26044,G__26045,G__26046) : self__.afn.call(null,G__26044,G__26045,G__26046));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){var self__ = this;
var _ = this;var G__26047 = a;var G__26048 = b;var G__26049 = c;var G__26050 = d;return (self__.afn.cljs$core$IFn$_invoke$arity$4 ? self__.afn.cljs$core$IFn$_invoke$arity$4(G__26047,G__26048,G__26049,G__26050) : self__.afn.call(null,G__26047,G__26048,G__26049,G__26050));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){var self__ = this;
var _ = this;var G__26051 = a;var G__26052 = b;var G__26053 = c;var G__26054 = d;var G__26055 = e;return (self__.afn.cljs$core$IFn$_invoke$arity$5 ? self__.afn.cljs$core$IFn$_invoke$arity$5(G__26051,G__26052,G__26053,G__26054,G__26055) : self__.afn.call(null,G__26051,G__26052,G__26053,G__26054,G__26055));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){var self__ = this;
var _ = this;var G__26056 = a;var G__26057 = b;var G__26058 = c;var G__26059 = d;var G__26060 = e;var G__26061 = f;return (self__.afn.cljs$core$IFn$_invoke$arity$6 ? self__.afn.cljs$core$IFn$_invoke$arity$6(G__26056,G__26057,G__26058,G__26059,G__26060,G__26061) : self__.afn.call(null,G__26056,G__26057,G__26058,G__26059,G__26060,G__26061));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){var self__ = this;
var _ = this;var G__26062 = a;var G__26063 = b;var G__26064 = c;var G__26065 = d;var G__26066 = e;var G__26067 = f;var G__26068 = g;return (self__.afn.cljs$core$IFn$_invoke$arity$7 ? self__.afn.cljs$core$IFn$_invoke$arity$7(G__26062,G__26063,G__26064,G__26065,G__26066,G__26067,G__26068) : self__.afn.call(null,G__26062,G__26063,G__26064,G__26065,G__26066,G__26067,G__26068));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){var self__ = this;
var _ = this;var G__26069 = a;var G__26070 = b;var G__26071 = c;var G__26072 = d;var G__26073 = e;var G__26074 = f;var G__26075 = g;var G__26076 = h;return (self__.afn.cljs$core$IFn$_invoke$arity$8 ? self__.afn.cljs$core$IFn$_invoke$arity$8(G__26069,G__26070,G__26071,G__26072,G__26073,G__26074,G__26075,G__26076) : self__.afn.call(null,G__26069,G__26070,G__26071,G__26072,G__26073,G__26074,G__26075,G__26076));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){var self__ = this;
var _ = this;var G__26077 = a;var G__26078 = b;var G__26079 = c;var G__26080 = d;var G__26081 = e;var G__26082 = f;var G__26083 = g;var G__26084 = h;var G__26085 = i;return (self__.afn.cljs$core$IFn$_invoke$arity$9 ? self__.afn.cljs$core$IFn$_invoke$arity$9(G__26077,G__26078,G__26079,G__26080,G__26081,G__26082,G__26083,G__26084,G__26085) : self__.afn.call(null,G__26077,G__26078,G__26079,G__26080,G__26081,G__26082,G__26083,G__26084,G__26085));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){var self__ = this;
var _ = this;var G__26086 = a;var G__26087 = b;var G__26088 = c;var G__26089 = d;var G__26090 = e;var G__26091 = f;var G__26092 = g;var G__26093 = h;var G__26094 = i;var G__26095 = j;return (self__.afn.cljs$core$IFn$_invoke$arity$10 ? self__.afn.cljs$core$IFn$_invoke$arity$10(G__26086,G__26087,G__26088,G__26089,G__26090,G__26091,G__26092,G__26093,G__26094,G__26095) : self__.afn.call(null,G__26086,G__26087,G__26088,G__26089,G__26090,G__26091,G__26092,G__26093,G__26094,G__26095));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var _ = this;var G__26096 = a;var G__26097 = b;var G__26098 = c;var G__26099 = d;var G__26100 = e;var G__26101 = f;var G__26102 = g;var G__26103 = h;var G__26104 = i;var G__26105 = j;var G__26106 = k;return (self__.afn.cljs$core$IFn$_invoke$arity$11 ? self__.afn.cljs$core$IFn$_invoke$arity$11(G__26096,G__26097,G__26098,G__26099,G__26100,G__26101,G__26102,G__26103,G__26104,G__26105,G__26106) : self__.afn.call(null,G__26096,G__26097,G__26098,G__26099,G__26100,G__26101,G__26102,G__26103,G__26104,G__26105,G__26106));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var _ = this;var G__26107 = a;var G__26108 = b;var G__26109 = c;var G__26110 = d;var G__26111 = e;var G__26112 = f;var G__26113 = g;var G__26114 = h;var G__26115 = i;var G__26116 = j;var G__26117 = k;var G__26118 = l;return (self__.afn.cljs$core$IFn$_invoke$arity$12 ? self__.afn.cljs$core$IFn$_invoke$arity$12(G__26107,G__26108,G__26109,G__26110,G__26111,G__26112,G__26113,G__26114,G__26115,G__26116,G__26117,G__26118) : self__.afn.call(null,G__26107,G__26108,G__26109,G__26110,G__26111,G__26112,G__26113,G__26114,G__26115,G__26116,G__26117,G__26118));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var _ = this;var G__26119 = a;var G__26120 = b;var G__26121 = c;var G__26122 = d;var G__26123 = e;var G__26124 = f;var G__26125 = g;var G__26126 = h;var G__26127 = i;var G__26128 = j;var G__26129 = k;var G__26130 = l;var G__26131 = m;return (self__.afn.cljs$core$IFn$_invoke$arity$13 ? self__.afn.cljs$core$IFn$_invoke$arity$13(G__26119,G__26120,G__26121,G__26122,G__26123,G__26124,G__26125,G__26126,G__26127,G__26128,G__26129,G__26130,G__26131) : self__.afn.call(null,G__26119,G__26120,G__26121,G__26122,G__26123,G__26124,G__26125,G__26126,G__26127,G__26128,G__26129,G__26130,G__26131));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var _ = this;var G__26132 = a;var G__26133 = b;var G__26134 = c;var G__26135 = d;var G__26136 = e;var G__26137 = f;var G__26138 = g;var G__26139 = h;var G__26140 = i;var G__26141 = j;var G__26142 = k;var G__26143 = l;var G__26144 = m;var G__26145 = n;return (self__.afn.cljs$core$IFn$_invoke$arity$14 ? self__.afn.cljs$core$IFn$_invoke$arity$14(G__26132,G__26133,G__26134,G__26135,G__26136,G__26137,G__26138,G__26139,G__26140,G__26141,G__26142,G__26143,G__26144,G__26145) : self__.afn.call(null,G__26132,G__26133,G__26134,G__26135,G__26136,G__26137,G__26138,G__26139,G__26140,G__26141,G__26142,G__26143,G__26144,G__26145));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var _ = this;var G__26146 = a;var G__26147 = b;var G__26148 = c;var G__26149 = d;var G__26150 = e;var G__26151 = f;var G__26152 = g;var G__26153 = h;var G__26154 = i;var G__26155 = j;var G__26156 = k;var G__26157 = l;var G__26158 = m;var G__26159 = n;var G__26160 = o;return (self__.afn.cljs$core$IFn$_invoke$arity$15 ? self__.afn.cljs$core$IFn$_invoke$arity$15(G__26146,G__26147,G__26148,G__26149,G__26150,G__26151,G__26152,G__26153,G__26154,G__26155,G__26156,G__26157,G__26158,G__26159,G__26160) : self__.afn.call(null,G__26146,G__26147,G__26148,G__26149,G__26150,G__26151,G__26152,G__26153,G__26154,G__26155,G__26156,G__26157,G__26158,G__26159,G__26160));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var _ = this;var G__26161 = a;var G__26162 = b;var G__26163 = c;var G__26164 = d;var G__26165 = e;var G__26166 = f;var G__26167 = g;var G__26168 = h;var G__26169 = i;var G__26170 = j;var G__26171 = k;var G__26172 = l;var G__26173 = m;var G__26174 = n;var G__26175 = o;var G__26176 = p;return (self__.afn.cljs$core$IFn$_invoke$arity$16 ? self__.afn.cljs$core$IFn$_invoke$arity$16(G__26161,G__26162,G__26163,G__26164,G__26165,G__26166,G__26167,G__26168,G__26169,G__26170,G__26171,G__26172,G__26173,G__26174,G__26175,G__26176) : self__.afn.call(null,G__26161,G__26162,G__26163,G__26164,G__26165,G__26166,G__26167,G__26168,G__26169,G__26170,G__26171,G__26172,G__26173,G__26174,G__26175,G__26176));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var _ = this;var G__26177 = a;var G__26178 = b;var G__26179 = c;var G__26180 = d;var G__26181 = e;var G__26182 = f;var G__26183 = g;var G__26184 = h;var G__26185 = i;var G__26186 = j;var G__26187 = k;var G__26188 = l;var G__26189 = m;var G__26190 = n;var G__26191 = o;var G__26192 = p;var G__26193 = q;return (self__.afn.cljs$core$IFn$_invoke$arity$17 ? self__.afn.cljs$core$IFn$_invoke$arity$17(G__26177,G__26178,G__26179,G__26180,G__26181,G__26182,G__26183,G__26184,G__26185,G__26186,G__26187,G__26188,G__26189,G__26190,G__26191,G__26192,G__26193) : self__.afn.call(null,G__26177,G__26178,G__26179,G__26180,G__26181,G__26182,G__26183,G__26184,G__26185,G__26186,G__26187,G__26188,G__26189,G__26190,G__26191,G__26192,G__26193));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var _ = this;var G__26194 = a;var G__26195 = b;var G__26196 = c;var G__26197 = d;var G__26198 = e;var G__26199 = f;var G__26200 = g;var G__26201 = h;var G__26202 = i;var G__26203 = j;var G__26204 = k;var G__26205 = l;var G__26206 = m;var G__26207 = n;var G__26208 = o;var G__26209 = p;var G__26210 = q;var G__26211 = r;return (self__.afn.cljs$core$IFn$_invoke$arity$18 ? self__.afn.cljs$core$IFn$_invoke$arity$18(G__26194,G__26195,G__26196,G__26197,G__26198,G__26199,G__26200,G__26201,G__26202,G__26203,G__26204,G__26205,G__26206,G__26207,G__26208,G__26209,G__26210,G__26211) : self__.afn.call(null,G__26194,G__26195,G__26196,G__26197,G__26198,G__26199,G__26200,G__26201,G__26202,G__26203,G__26204,G__26205,G__26206,G__26207,G__26208,G__26209,G__26210,G__26211));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var _ = this;var G__26212 = a;var G__26213 = b;var G__26214 = c;var G__26215 = d;var G__26216 = e;var G__26217 = f;var G__26218 = g;var G__26219 = h;var G__26220 = i;var G__26221 = j;var G__26222 = k;var G__26223 = l;var G__26224 = m;var G__26225 = n;var G__26226 = o;var G__26227 = p;var G__26228 = q;var G__26229 = r;var G__26230 = s;return (self__.afn.cljs$core$IFn$_invoke$arity$19 ? self__.afn.cljs$core$IFn$_invoke$arity$19(G__26212,G__26213,G__26214,G__26215,G__26216,G__26217,G__26218,G__26219,G__26220,G__26221,G__26222,G__26223,G__26224,G__26225,G__26226,G__26227,G__26228,G__26229,G__26230) : self__.afn.call(null,G__26212,G__26213,G__26214,G__26215,G__26216,G__26217,G__26218,G__26219,G__26220,G__26221,G__26222,G__26223,G__26224,G__26225,G__26226,G__26227,G__26228,G__26229,G__26230));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var _ = this;var G__26231 = a;var G__26232 = b;var G__26233 = c;var G__26234 = d;var G__26235 = e;var G__26236 = f;var G__26237 = g;var G__26238 = h;var G__26239 = i;var G__26240 = j;var G__26241 = k;var G__26242 = l;var G__26243 = m;var G__26244 = n;var G__26245 = o;var G__26246 = p;var G__26247 = q;var G__26248 = r;var G__26249 = s;var G__26250 = t;return (self__.afn.cljs$core$IFn$_invoke$arity$20 ? self__.afn.cljs$core$IFn$_invoke$arity$20(G__26231,G__26232,G__26233,G__26234,G__26235,G__26236,G__26237,G__26238,G__26239,G__26240,G__26241,G__26242,G__26243,G__26244,G__26245,G__26246,G__26247,G__26248,G__26249,G__26250) : self__.afn.call(null,G__26231,G__26232,G__26233,G__26234,G__26235,G__26236,G__26237,G__26238,G__26239,G__26240,G__26241,G__26242,G__26243,G__26244,G__26245,G__26246,G__26247,G__26248,G__26249,G__26250));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var _ = this;var G__26251 = self__.afn;var G__26252 = a;var G__26253 = b;var G__26254 = c;var G__26255 = d;var G__26256 = e;var G__26257 = f;var G__26258 = g;var G__26259 = h;var G__26260 = i;var G__26261 = j;var G__26262 = k;var G__26263 = l;var G__26264 = m;var G__26265 = n;var G__26266 = o;var G__26267 = p;var G__26268 = q;var G__26269 = r;var G__26270 = s;var G__26271 = t;var G__26272 = rest;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$22 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$22(G__26251,G__26252,G__26253,G__26254,G__26255,G__26256,G__26257,G__26258,G__26259,G__26260,G__26261,G__26262,G__26263,G__26264,G__26265,G__26266,G__26267,G__26268,G__26269,G__26270,G__26271,G__26272) : cljs.core.apply.call(null,G__26251,G__26252,G__26253,G__26254,G__26255,G__26256,G__26257,G__26258,G__26259,G__26260,G__26261,G__26262,G__26263,G__26264,G__26265,G__26266,G__26267,G__26268,G__26269,G__26270,G__26271,G__26272));
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
cljs.core.with_meta = (function with_meta(o,meta){if((cljs.core.fn_QMARK_(o)) && (!((function (){var G__26277 = o;if(G__26277)
{var bit__20917__auto__ = (G__26277.cljs$lang$protocol_mask$partition0$ & (262144));if((bit__20917__auto__) || (G__26277.cljs$core$IWithMeta$))
{return true;
} else
{if((!G__26277.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__26277);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__26277);
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
cljs.core.meta = (function meta(o){if((function (){var and__19621__auto__ = !((o == null));if(and__19621__auto__)
{var G__26281 = o;if(G__26281)
{var bit__20917__auto__ = (G__26281.cljs$lang$protocol_mask$partition0$ & (131072));if((bit__20917__auto__) || (G__26281.cljs$core$IMeta$))
{return true;
} else
{if((!G__26281.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__26281);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__26281);
}
} else
{return and__19621__auto__;
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
var G__26284__delegate = function (coll,k,ks){while(true){
if((coll == null))
{return null;
} else
{var ret = disj.cljs$core$IFn$_invoke$arity$2(coll,k);if(cljs.core.truth_(ks))
{{
var G__26285 = ret;
var G__26286 = cljs.core.first(ks);
var G__26287 = cljs.core.next(ks);
coll = G__26285;
k = G__26286;
ks = G__26287;
continue;
}
} else
{return ret;
}
}
break;
}
};
var G__26284 = function (coll,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26284__delegate.call(this,coll,k,ks);};
G__26284.cljs$lang$maxFixedArity = 2;
G__26284.cljs$lang$applyTo = (function (arglist__26288){
var coll = cljs.core.first(arglist__26288);
arglist__26288 = cljs.core.next(arglist__26288);
var k = cljs.core.first(arglist__26288);
var ks = cljs.core.rest(arglist__26288);
return G__26284__delegate(coll,k,ks);
});
G__26284.cljs$core$IFn$_invoke$arity$variadic = G__26284__delegate;
return G__26284;
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
{var G__26290 = x;if(G__26290)
{var bit__20917__auto__ = (G__26290.cljs$lang$protocol_mask$partition0$ & (8));if((bit__20917__auto__) || (G__26290.cljs$core$ICollection$))
{return true;
} else
{if((!G__26290.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__26290);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__26290);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){if((x == null))
{return false;
} else
{var G__26292 = x;if(G__26292)
{var bit__20917__auto__ = (G__26292.cljs$lang$protocol_mask$partition0$ & (4096));if((bit__20917__auto__) || (G__26292.cljs$core$ISet$))
{return true;
} else
{if((!G__26292.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__26292);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__26292);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){var G__26294 = x;if(G__26294)
{var bit__20917__auto__ = (G__26294.cljs$lang$protocol_mask$partition0$ & (512));if((bit__20917__auto__) || (G__26294.cljs$core$IAssociative$))
{return true;
} else
{if((!G__26294.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__26294);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__26294);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){var G__26296 = x;if(G__26296)
{var bit__20917__auto__ = (G__26296.cljs$lang$protocol_mask$partition0$ & (16777216));if((bit__20917__auto__) || (G__26296.cljs$core$ISequential$))
{return true;
} else
{if((!G__26296.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__26296);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__26296);
}
});
/**
* Returns true if coll satisfies ISorted
*/
cljs.core.sorted_QMARK_ = (function sorted_QMARK_(x){var G__26298 = x;if(G__26298)
{var bit__20917__auto__ = (G__26298.cljs$lang$protocol_mask$partition0$ & (268435456));if((bit__20917__auto__) || (G__26298.cljs$core$ISorted$))
{return true;
} else
{if((!G__26298.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__26298);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__26298);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){var G__26300 = x;if(G__26300)
{var bit__20917__auto__ = (G__26300.cljs$lang$protocol_mask$partition0$ & (524288));if((bit__20917__auto__) || (G__26300.cljs$core$IReduce$))
{return true;
} else
{if((!G__26300.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__26300);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__26300);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){if((x == null))
{return false;
} else
{var G__26302 = x;if(G__26302)
{var bit__20917__auto__ = (G__26302.cljs$lang$protocol_mask$partition0$ & (1024));if((bit__20917__auto__) || (G__26302.cljs$core$IMap$))
{return true;
} else
{if((!G__26302.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__26302);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__26302);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){var G__26304 = x;if(G__26304)
{var bit__20917__auto__ = (G__26304.cljs$lang$protocol_mask$partition0$ & (16384));if((bit__20917__auto__) || (G__26304.cljs$core$IVector$))
{return true;
} else
{if((!G__26304.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__26304);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__26304);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){var G__26306 = x;if(G__26306)
{var bit__20884__auto__ = (G__26306.cljs$lang$protocol_mask$partition1$ & (512));if((bit__20884__auto__) || (G__26306.cljs$core$IChunkedSeq$))
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
var js_obj__0 = (function (){var obj26312 = {};return obj26312;
});
var js_obj__1 = (function() { 
var G__26315__delegate = function (keyvals){var G__26313 = goog.object.create;var G__26314 = keyvals;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__26313,G__26314) : cljs.core.apply.call(null,G__26313,G__26314));
};
var G__26315 = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26315__delegate.call(this,keyvals);};
G__26315.cljs$lang$maxFixedArity = 0;
G__26315.cljs$lang$applyTo = (function (arglist__26316){
var keyvals = cljs.core.seq(arglist__26316);
return G__26315__delegate(keyvals);
});
G__26315.cljs$core$IFn$_invoke$arity$variadic = G__26315__delegate;
return G__26315;
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
cljs.core.js_keys = (function js_keys(obj){var keys = [];var G__26319_26321 = obj;var G__26320_26322 = ((function (G__26319_26321,keys){
return (function (val,key,obj__$1){return keys.push(key);
});})(G__26319_26321,keys))
;goog.object.forEach(G__26319_26321,G__26320_26322);
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
var G__26323 = (i__$1 + (1));
var G__26324 = (j__$1 + (1));
var G__26325 = (len__$1 - (1));
i__$1 = G__26323;
j__$1 = G__26324;
len__$1 = G__26325;
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
var G__26326 = (i__$1 - (1));
var G__26327 = (j__$1 - (1));
var G__26328 = (len__$1 - (1));
i__$1 = G__26326;
j__$1 = G__26327;
len__$1 = G__26328;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = (function (){var obj26330 = {};return obj26330;
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
{var G__26332 = s;if(G__26332)
{var bit__20917__auto__ = (G__26332.cljs$lang$protocol_mask$partition0$ & (64));if((bit__20917__auto__) || (G__26332.cljs$core$ISeq$))
{return true;
} else
{if((!G__26332.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__26332);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__26332);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){var G__26334 = s;if(G__26334)
{var bit__20917__auto__ = (G__26334.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__20917__auto__) || (G__26334.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26334.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26334);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26334);
}
});
cljs.core.boolean$ = (function boolean$(x){if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){var or__19663__auto__ = cljs.core.fn_QMARK_(f);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var G__26338 = f;if(G__26338)
{var bit__20917__auto__ = (G__26338.cljs$lang$protocol_mask$partition0$ & (1));if((bit__20917__auto__) || (G__26338.cljs$core$IFn$))
{return true;
} else
{if((!G__26338.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__26338);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__26338);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){return (typeof n === 'number') && (cljs.core.not((function (){var G__26351 = n;return isNaN(G__26351);
})())) && (!((n === Infinity))) && (((function (){var G__26352 = n;return parseFloat(G__26352);
})() === (function (){var G__26353 = n;var G__26354 = (10);return parseInt(G__26353,G__26354);
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
var G__26355__delegate = function (x,y,more){if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)))
{var s = cljs.core.PersistentHashSet.fromArray([x,y], true);var xs = more;while(true){
var x__$1 = cljs.core.first(xs);var etc = cljs.core.next(xs);if(cljs.core.truth_(xs))
{if(cljs.core.contains_QMARK_(s,x__$1))
{return false;
} else
{{
var G__26356 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,x__$1);
var G__26357 = etc;
s = G__26356;
xs = G__26357;
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
var G__26355 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26355__delegate.call(this,x,y,more);};
G__26355.cljs$lang$maxFixedArity = 2;
G__26355.cljs$lang$applyTo = (function (arglist__26358){
var x = cljs.core.first(arglist__26358);
arglist__26358 = cljs.core.next(arglist__26358);
var y = cljs.core.first(arglist__26358);
var more = cljs.core.rest(arglist__26358);
return G__26355__delegate(x,y,more);
});
G__26355.cljs$core$IFn$_invoke$arity$variadic = G__26355__delegate;
return G__26355;
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
{var or__19663__auto__ = cljs.core.seq(coll);if(or__19663__auto__)
{return or__19663__auto__;
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
{if((function (){var G__26362 = x;if(G__26362)
{var bit__20884__auto__ = (G__26362.cljs$lang$protocol_mask$partition1$ & (2048));if((bit__20884__auto__) || (G__26362.cljs$core$IComparable$))
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
{var G__26363 = x;var G__26364 = y;return goog.array.defaultCompare(G__26363,G__26364);
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
var G__26369 = xs;
var G__26370 = ys;
var G__26371 = len;
var G__26372 = (n + (1));
xs = G__26369;
ys = G__26370;
len = G__26371;
n = G__26372;
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
{return (function (x,y){var r = (function (){var G__26377 = x;var G__26378 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26377,G__26378) : f.call(null,G__26377,G__26378));
})();if(typeof r === 'number')
{return r;
} else
{if(cljs.core.truth_(r))
{return (-1);
} else
{if(cljs.core.truth_((function (){var G__26379 = y;var G__26380 = x;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26379,G__26380) : f.call(null,G__26379,G__26380));
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
{var a = (function (){var G__26386 = coll;return (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(G__26386) : cljs.core.to_array.call(null,G__26386));
})();var G__26387_26389 = a;var G__26388_26390 = cljs.core.fn__GT_comparator(comp);goog.array.stableSort(G__26387_26389,G__26388_26390);
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
var sort_by__3 = (function (keyfn,comp,coll){return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (x,y){return cljs.core.fn__GT_comparator(comp).call(null,(function (){var G__26396 = x;return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__26396) : keyfn.call(null,G__26396));
})(),(function (){var G__26397 = y;return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__26397) : keyfn.call(null,G__26397));
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
{var s = temp__4124__auto__;var G__26403 = f;var G__26404 = cljs.core.first(s);var G__26405 = cljs.core.next(s);return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(G__26403,G__26404,G__26405) : cljs.core.reduce.call(null,G__26403,G__26404,G__26405));
} else
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
var seq_reduce__3 = (function (f,val,coll){var val__$1 = val;var coll__$1 = cljs.core.seq(coll);while(true){
if(coll__$1)
{var nval = (function (){var G__26406 = val__$1;var G__26407 = cljs.core.first(coll__$1);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26406,G__26407) : f.call(null,G__26406,G__26407));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__26408 = nval;
var G__26409 = cljs.core.next(coll__$1);
val__$1 = G__26408;
coll__$1 = G__26409;
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
cljs.core.shuffle = (function shuffle(coll){var a = (function (){var G__26413 = coll;return (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(G__26413) : cljs.core.to_array.call(null,G__26413));
})();var G__26414_26416 = a;goog.array.shuffle(G__26414_26416);
var G__26415 = a;return (cljs.core.vec.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vec.cljs$core$IFn$_invoke$arity$1(G__26415) : cljs.core.vec.call(null,G__26415));
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
var reduce__2 = (function (f,coll){if((function (){var G__26419 = coll;if(G__26419)
{var bit__20884__auto__ = (G__26419.cljs$lang$protocol_mask$partition0$ & (524288));if((bit__20884__auto__) || (G__26419.cljs$core$IReduce$))
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
var reduce__3 = (function (f,val,coll){if((function (){var G__26420 = coll;if(G__26420)
{var bit__20884__auto__ = (G__26420.cljs$lang$protocol_mask$partition0$ & (524288));if((bit__20884__auto__) || (G__26420.cljs$core$IReduce$))
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
var G__26429 = null;
var G__26429__0 = (function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__26429__1 = (function (x){var G__26426 = x;return (cf.cljs$core$IFn$_invoke$arity$1 ? cf.cljs$core$IFn$_invoke$arity$1(G__26426) : cf.call(null,G__26426));
});
var G__26429__2 = (function (x,y){var G__26427 = x;var G__26428 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26427,G__26428) : f.call(null,G__26427,G__26428));
});
G__26429 = function(x,y){
switch(arguments.length){
case 0:
return G__26429__0.call(this);
case 1:
return G__26429__1.call(this,x);
case 2:
return G__26429__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26429.cljs$core$IFn$_invoke$arity$0 = G__26429__0;
G__26429.cljs$core$IFn$_invoke$arity$1 = G__26429__1;
G__26429.cljs$core$IFn$_invoke$arity$2 = G__26429__2;
return G__26429;
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
var transduce__4 = (function (xform,f,init,coll){var f__$1 = (function (){var G__26436 = f;return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__26436) : xform.call(null,G__26436));
})();var ret = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f__$1,init,coll);var G__26437 = ret;return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__26437) : f__$1.call(null,G__26437));
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
var G__26438__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_PLUS_,(x + y),more);
};
var G__26438 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26438__delegate.call(this,x,y,more);};
G__26438.cljs$lang$maxFixedArity = 2;
G__26438.cljs$lang$applyTo = (function (arglist__26439){
var x = cljs.core.first(arglist__26439);
arglist__26439 = cljs.core.next(arglist__26439);
var y = cljs.core.first(arglist__26439);
var more = cljs.core.rest(arglist__26439);
return G__26438__delegate(x,y,more);
});
G__26438.cljs$core$IFn$_invoke$arity$variadic = G__26438__delegate;
return G__26438;
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
var G__26440__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_,(x - y),more);
};
var G__26440 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26440__delegate.call(this,x,y,more);};
G__26440.cljs$lang$maxFixedArity = 2;
G__26440.cljs$lang$applyTo = (function (arglist__26441){
var x = cljs.core.first(arglist__26441);
arglist__26441 = cljs.core.next(arglist__26441);
var y = cljs.core.first(arglist__26441);
var more = cljs.core.rest(arglist__26441);
return G__26440__delegate(x,y,more);
});
G__26440.cljs$core$IFn$_invoke$arity$variadic = G__26440__delegate;
return G__26440;
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
var G__26442__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_STAR_,(x * y),more);
};
var G__26442 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26442__delegate.call(this,x,y,more);};
G__26442.cljs$lang$maxFixedArity = 2;
G__26442.cljs$lang$applyTo = (function (arglist__26443){
var x = cljs.core.first(arglist__26443);
arglist__26443 = cljs.core.next(arglist__26443);
var y = cljs.core.first(arglist__26443);
var more = cljs.core.rest(arglist__26443);
return G__26442__delegate(x,y,more);
});
G__26442.cljs$core$IFn$_invoke$arity$variadic = G__26442__delegate;
return G__26442;
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
var G__26448__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_SLASH_,_SLASH_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__26448 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26448__delegate.call(this,x,y,more);};
G__26448.cljs$lang$maxFixedArity = 2;
G__26448.cljs$lang$applyTo = (function (arglist__26449){
var x = cljs.core.first(arglist__26449);
arglist__26449 = cljs.core.next(arglist__26449);
var y = cljs.core.first(arglist__26449);
var more = cljs.core.rest(arglist__26449);
return G__26448__delegate(x,y,more);
});
G__26448.cljs$core$IFn$_invoke$arity$variadic = G__26448__delegate;
return G__26448;
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
var G__26450__delegate = function (x,y,more){while(true){
if((x < y))
{if(cljs.core.next(more))
{{
var G__26451 = y;
var G__26452 = cljs.core.first(more);
var G__26453 = cljs.core.next(more);
x = G__26451;
y = G__26452;
more = G__26453;
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
var G__26450 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26450__delegate.call(this,x,y,more);};
G__26450.cljs$lang$maxFixedArity = 2;
G__26450.cljs$lang$applyTo = (function (arglist__26454){
var x = cljs.core.first(arglist__26454);
arglist__26454 = cljs.core.next(arglist__26454);
var y = cljs.core.first(arglist__26454);
var more = cljs.core.rest(arglist__26454);
return G__26450__delegate(x,y,more);
});
G__26450.cljs$core$IFn$_invoke$arity$variadic = G__26450__delegate;
return G__26450;
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
var G__26455__delegate = function (x,y,more){while(true){
if((x <= y))
{if(cljs.core.next(more))
{{
var G__26456 = y;
var G__26457 = cljs.core.first(more);
var G__26458 = cljs.core.next(more);
x = G__26456;
y = G__26457;
more = G__26458;
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
var G__26455 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26455__delegate.call(this,x,y,more);};
G__26455.cljs$lang$maxFixedArity = 2;
G__26455.cljs$lang$applyTo = (function (arglist__26459){
var x = cljs.core.first(arglist__26459);
arglist__26459 = cljs.core.next(arglist__26459);
var y = cljs.core.first(arglist__26459);
var more = cljs.core.rest(arglist__26459);
return G__26455__delegate(x,y,more);
});
G__26455.cljs$core$IFn$_invoke$arity$variadic = G__26455__delegate;
return G__26455;
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
var G__26460__delegate = function (x,y,more){while(true){
if((x > y))
{if(cljs.core.next(more))
{{
var G__26461 = y;
var G__26462 = cljs.core.first(more);
var G__26463 = cljs.core.next(more);
x = G__26461;
y = G__26462;
more = G__26463;
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
var G__26460 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26460__delegate.call(this,x,y,more);};
G__26460.cljs$lang$maxFixedArity = 2;
G__26460.cljs$lang$applyTo = (function (arglist__26464){
var x = cljs.core.first(arglist__26464);
arglist__26464 = cljs.core.next(arglist__26464);
var y = cljs.core.first(arglist__26464);
var more = cljs.core.rest(arglist__26464);
return G__26460__delegate(x,y,more);
});
G__26460.cljs$core$IFn$_invoke$arity$variadic = G__26460__delegate;
return G__26460;
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
var G__26465__delegate = function (x,y,more){while(true){
if((x >= y))
{if(cljs.core.next(more))
{{
var G__26466 = y;
var G__26467 = cljs.core.first(more);
var G__26468 = cljs.core.next(more);
x = G__26466;
y = G__26467;
more = G__26468;
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
var G__26465 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26465__delegate.call(this,x,y,more);};
G__26465.cljs$lang$maxFixedArity = 2;
G__26465.cljs$lang$applyTo = (function (arglist__26469){
var x = cljs.core.first(arglist__26469);
arglist__26469 = cljs.core.next(arglist__26469);
var y = cljs.core.first(arglist__26469);
var more = cljs.core.rest(arglist__26469);
return G__26465__delegate(x,y,more);
});
G__26465.cljs$core$IFn$_invoke$arity$variadic = G__26465__delegate;
return G__26465;
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
var max__2 = (function (x,y){var x__20308__auto__ = x;var y__20309__auto__ = y;return ((x__20308__auto__ > y__20309__auto__) ? x__20308__auto__ : y__20309__auto__);
});
var max__3 = (function() { 
var G__26470__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(max,(function (){var x__20308__auto__ = x;var y__20309__auto__ = y;return ((x__20308__auto__ > y__20309__auto__) ? x__20308__auto__ : y__20309__auto__);
})(),more);
};
var G__26470 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26470__delegate.call(this,x,y,more);};
G__26470.cljs$lang$maxFixedArity = 2;
G__26470.cljs$lang$applyTo = (function (arglist__26471){
var x = cljs.core.first(arglist__26471);
arglist__26471 = cljs.core.next(arglist__26471);
var y = cljs.core.first(arglist__26471);
var more = cljs.core.rest(arglist__26471);
return G__26470__delegate(x,y,more);
});
G__26470.cljs$core$IFn$_invoke$arity$variadic = G__26470__delegate;
return G__26470;
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
var min__2 = (function (x,y){var x__20315__auto__ = x;var y__20316__auto__ = y;return ((x__20315__auto__ < y__20316__auto__) ? x__20315__auto__ : y__20316__auto__);
});
var min__3 = (function() { 
var G__26472__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(min,(function (){var x__20315__auto__ = x;var y__20316__auto__ = y;return ((x__20315__auto__ < y__20316__auto__) ? x__20315__auto__ : y__20316__auto__);
})(),more);
};
var G__26472 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26472__delegate.call(this,x,y,more);};
G__26472.cljs$lang$maxFixedArity = 2;
G__26472.cljs$lang$applyTo = (function (arglist__26473){
var x = cljs.core.first(arglist__26473);
arglist__26473 = cljs.core.next(arglist__26473);
var y = cljs.core.first(arglist__26473);
var more = cljs.core.rest(arglist__26473);
return G__26472__delegate(x,y,more);
});
G__26472.cljs$core$IFn$_invoke$arity$variadic = G__26472__delegate;
return G__26472;
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
var G__26474__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_add,(x + y),more);
};
var G__26474 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26474__delegate.call(this,x,y,more);};
G__26474.cljs$lang$maxFixedArity = 2;
G__26474.cljs$lang$applyTo = (function (arglist__26475){
var x = cljs.core.first(arglist__26475);
arglist__26475 = cljs.core.next(arglist__26475);
var y = cljs.core.first(arglist__26475);
var more = cljs.core.rest(arglist__26475);
return G__26474__delegate(x,y,more);
});
G__26474.cljs$core$IFn$_invoke$arity$variadic = G__26474__delegate;
return G__26474;
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
var G__26476__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_add_int,(x + y),more);
};
var G__26476 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26476__delegate.call(this,x,y,more);};
G__26476.cljs$lang$maxFixedArity = 2;
G__26476.cljs$lang$applyTo = (function (arglist__26477){
var x = cljs.core.first(arglist__26477);
arglist__26477 = cljs.core.next(arglist__26477);
var y = cljs.core.first(arglist__26477);
var more = cljs.core.rest(arglist__26477);
return G__26476__delegate(x,y,more);
});
G__26476.cljs$core$IFn$_invoke$arity$variadic = G__26476__delegate;
return G__26476;
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
var G__26482__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_divide_int,unchecked_divide_int.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__26482 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26482__delegate.call(this,x,y,more);};
G__26482.cljs$lang$maxFixedArity = 2;
G__26482.cljs$lang$applyTo = (function (arglist__26483){
var x = cljs.core.first(arglist__26483);
arglist__26483 = cljs.core.next(arglist__26483);
var y = cljs.core.first(arglist__26483);
var more = cljs.core.rest(arglist__26483);
return G__26482__delegate(x,y,more);
});
G__26482.cljs$core$IFn$_invoke$arity$variadic = G__26482__delegate;
return G__26482;
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
var G__26484__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_multiply,(x * y),more);
};
var G__26484 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26484__delegate.call(this,x,y,more);};
G__26484.cljs$lang$maxFixedArity = 2;
G__26484.cljs$lang$applyTo = (function (arglist__26485){
var x = cljs.core.first(arglist__26485);
arglist__26485 = cljs.core.next(arglist__26485);
var y = cljs.core.first(arglist__26485);
var more = cljs.core.rest(arglist__26485);
return G__26484__delegate(x,y,more);
});
G__26484.cljs$core$IFn$_invoke$arity$variadic = G__26484__delegate;
return G__26484;
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
var G__26486__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_multiply_int,(x * y),more);
};
var G__26486 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26486__delegate.call(this,x,y,more);};
G__26486.cljs$lang$maxFixedArity = 2;
G__26486.cljs$lang$applyTo = (function (arglist__26487){
var x = cljs.core.first(arglist__26487);
arglist__26487 = cljs.core.next(arglist__26487);
var y = cljs.core.first(arglist__26487);
var more = cljs.core.rest(arglist__26487);
return G__26486__delegate(x,y,more);
});
G__26486.cljs$core$IFn$_invoke$arity$variadic = G__26486__delegate;
return G__26486;
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
cljs.core.unchecked_remainder_int = (function unchecked_remainder_int(x,n){var G__26490 = x;var G__26491 = n;return (cljs.core.mod.cljs$core$IFn$_invoke$arity$2 ? cljs.core.mod.cljs$core$IFn$_invoke$arity$2(G__26490,G__26491) : cljs.core.mod.call(null,G__26490,G__26491));
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
var G__26492__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_subtract,(x - y),more);
};
var G__26492 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26492__delegate.call(this,x,y,more);};
G__26492.cljs$lang$maxFixedArity = 2;
G__26492.cljs$lang$applyTo = (function (arglist__26493){
var x = cljs.core.first(arglist__26493);
arglist__26493 = cljs.core.next(arglist__26493);
var y = cljs.core.first(arglist__26493);
var more = cljs.core.rest(arglist__26493);
return G__26492__delegate(x,y,more);
});
G__26492.cljs$core$IFn$_invoke$arity$variadic = G__26492__delegate;
return G__26492;
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
var G__26494__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_subtract_int,(x - y),more);
};
var G__26494 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26494__delegate.call(this,x,y,more);};
G__26494.cljs$lang$maxFixedArity = 2;
G__26494.cljs$lang$applyTo = (function (arglist__26495){
var x = cljs.core.first(arglist__26495);
arglist__26495 = cljs.core.next(arglist__26495);
var y = cljs.core.first(arglist__26495);
var more = cljs.core.rest(arglist__26495);
return G__26494__delegate(x,y,more);
});
G__26494.cljs$core$IFn$_invoke$arity$variadic = G__26494__delegate;
return G__26494;
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
{var G__26498 = q;return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__26498) : Math.floor.call(null,G__26498));
} else
{var G__26499 = q;return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__26499) : Math.ceil.call(null,G__26499));
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
var G__26504__delegate = function (x,y,more){while(true){
if(_EQ__EQ_.cljs$core$IFn$_invoke$arity$2(x,y))
{if(cljs.core.next(more))
{{
var G__26505 = y;
var G__26506 = cljs.core.first(more);
var G__26507 = cljs.core.next(more);
x = G__26505;
y = G__26506;
more = G__26507;
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
var G__26504 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26504__delegate.call(this,x,y,more);};
G__26504.cljs$lang$maxFixedArity = 2;
G__26504.cljs$lang$applyTo = (function (arglist__26508){
var x = cljs.core.first(arglist__26508);
arglist__26508 = cljs.core.next(arglist__26508);
var y = cljs.core.first(arglist__26508);
var more = cljs.core.rest(arglist__26508);
return G__26504__delegate(x,y,more);
});
G__26504.cljs$core$IFn$_invoke$arity$variadic = G__26504__delegate;
return G__26504;
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
var G__26509 = (n__$1 - (1));
var G__26510 = cljs.core.next(xs);
n__$1 = G__26509;
xs = G__26510;
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
var G__26513__delegate = function (x,ys){var sb = (new goog.string.StringBuffer(str.cljs$core$IFn$_invoke$arity$1(x)));var more = ys;while(true){
if(cljs.core.truth_(more))
{{
var G__26514 = sb.append(str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(more)));
var G__26515 = cljs.core.next(more);
sb = G__26514;
more = G__26515;
continue;
}
} else
{return sb.toString();
}
break;
}
};
var G__26513 = function (x,var_args){
var ys = null;if (arguments.length > 1) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__26513__delegate.call(this,x,ys);};
G__26513.cljs$lang$maxFixedArity = 1;
G__26513.cljs$lang$applyTo = (function (arglist__26516){
var x = cljs.core.first(arglist__26516);
var ys = cljs.core.rest(arglist__26516);
return G__26513__delegate(x,ys);
});
G__26513.cljs$core$IFn$_invoke$arity$variadic = G__26513__delegate;
return G__26513;
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
var G__26517 = cljs.core.next(xs);
var G__26518 = cljs.core.next(ys);
xs = G__26517;
ys = G__26518;
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
var G__26519 = cljs.core.hash_combine(res,cljs.core.hash(cljs.core.first(s)));
var G__26520 = cljs.core.next(s);
res = G__26519;
s = G__26520;
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
var G__26525 = ((h + (cljs.core.hash((function (){var G__26523 = e;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__26523) : cljs.core.key.call(null,G__26523));
})()) ^ cljs.core.hash((function (){var G__26524 = e;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__26524) : cljs.core.val.call(null,G__26524));
})()))) % (4503599627370496));
var G__26526 = cljs.core.next(s);
h = G__26525;
s = G__26526;
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
var G__26527 = ((h + cljs.core.hash(e)) % (4503599627370496));
var G__26528 = cljs.core.next(s__$1);
h = G__26527;
s__$1 = G__26528;
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
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){var seq__26539_26549 = cljs.core.seq(fn_map);var chunk__26540_26550 = null;var count__26541_26551 = (0);var i__26542_26552 = (0);while(true){
if((i__26542_26552 < count__26541_26551))
{var vec__26543_26553 = chunk__26540_26550.cljs$core$IIndexed$_nth$arity$2(null,i__26542_26552);var key_name_26554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26543_26553,(0),null);var f_26555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26543_26553,(1),null);var str_name_26556 = (function (){var G__26544 = key_name_26554;return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__26544) : cljs.core.name.call(null,G__26544));
})();(obj[str_name_26556] = f_26555);
{
var G__26557 = seq__26539_26549;
var G__26558 = chunk__26540_26550;
var G__26559 = count__26541_26551;
var G__26560 = (i__26542_26552 + (1));
seq__26539_26549 = G__26557;
chunk__26540_26550 = G__26558;
count__26541_26551 = G__26559;
i__26542_26552 = G__26560;
continue;
}
} else
{var temp__4126__auto___26561 = cljs.core.seq(seq__26539_26549);if(temp__4126__auto___26561)
{var seq__26539_26562__$1 = temp__4126__auto___26561;if(cljs.core.chunked_seq_QMARK_(seq__26539_26562__$1))
{var c__21126__auto___26563 = (function (){var G__26545 = seq__26539_26562__$1;return (cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1(G__26545) : cljs.core.chunk_first.call(null,G__26545));
})();{
var G__26564 = (function (){var G__26546 = seq__26539_26562__$1;return (cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1(G__26546) : cljs.core.chunk_rest.call(null,G__26546));
})();
var G__26565 = c__21126__auto___26563;
var G__26566 = cljs.core.count(c__21126__auto___26563);
var G__26567 = (0);
seq__26539_26549 = G__26564;
chunk__26540_26550 = G__26565;
count__26541_26551 = G__26566;
i__26542_26552 = G__26567;
continue;
}
} else
{var vec__26547_26568 = cljs.core.first(seq__26539_26562__$1);var key_name_26569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26547_26568,(0),null);var f_26570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26547_26568,(1),null);var str_name_26571 = (function (){var G__26548 = key_name_26569;return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__26548) : cljs.core.name.call(null,G__26548));
})();(obj[str_name_26571] = f_26570);
{
var G__26572 = cljs.core.next(seq__26539_26562__$1);
var G__26573 = null;
var G__26574 = (0);
var G__26575 = (0);
seq__26539_26549 = G__26572;
chunk__26540_26550 = G__26573;
count__26541_26551 = G__26574;
i__26542_26552 = G__26575;
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
cljs.core.List.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/List");
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
var coll__$1 = this;var h__20522__auto__ = self__.__hash;if(!((h__20522__auto__ == null)))
{return h__20522__auto__;
} else
{var h__20522__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20522__auto____$1;
return h__20522__auto____$1;
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
cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/EmptyList");
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
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){var G__26577 = coll;if(G__26577)
{var bit__20917__auto__ = (G__26577.cljs$lang$protocol_mask$partition0$ & (134217728));if((bit__20917__auto__) || (G__26577.cljs$core$IReversible$))
{return true;
} else
{if((!G__26577.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__26577);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__26577);
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
var G__26578 = xs__$1.cljs$core$INext$_next$arity$1(null);
xs__$1 = G__26578;
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
var G__26579 = (i - (1));
var G__26580 = r.cljs$core$ICollection$_conj$arity$2(null,(arr[(i - (1))]));
i = G__26579;
r = G__26580;
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
list.cljs$lang$applyTo = (function (arglist__26581){
var xs = cljs.core.seq(arglist__26581);
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
cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/Cons");
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
var coll__$1 = this;var h__20522__auto__ = self__.__hash;if(!((h__20522__auto__ == null)))
{return h__20522__auto__;
} else
{var h__20522__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20522__auto____$1;
return h__20522__auto____$1;
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
cljs.core.cons = (function cons(x,coll){if((function (){var or__19663__auto__ = (coll == null);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var G__26585 = coll;if(G__26585)
{var bit__20884__auto__ = (G__26585.cljs$lang$protocol_mask$partition0$ & (64));if((bit__20884__auto__) || (G__26585.cljs$core$ISeq$))
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
cljs.core.list_QMARK_ = (function list_QMARK_(x){var G__26587 = x;if(G__26587)
{var bit__20917__auto__ = (G__26587.cljs$lang$protocol_mask$partition0$ & (33554432));if((bit__20917__auto__) || (G__26587.cljs$core$IList$))
{return true;
} else
{if((!G__26587.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__26587);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__26587);
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
cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/Keyword");
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
var this$__$1 = this;var h__20522__auto__ = self__._hash;if(!((h__20522__auto__ == null)))
{return h__20522__auto__;
} else
{var h__20522__auto____$1 = cljs.core.hash_keyword(this$__$1);self__._hash = h__20522__auto____$1;
return h__20522__auto____$1;
}
});
cljs.core.Keyword.prototype.call = (function() {
var G__26589 = null;
var G__26589__2 = (function (self__,coll){var self__ = this;
var self____$1 = this;var kw = self____$1;return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,kw);
});
var G__26589__3 = (function (self__,coll,not_found){var self__ = this;
var self____$1 = this;var kw = self____$1;return cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,kw,not_found);
});
G__26589 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__26589__2.call(this,self__,coll);
case 3:
return G__26589__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26589.cljs$core$IFn$_invoke$arity$2 = G__26589__2;
G__26589.cljs$core$IFn$_invoke$arity$3 = G__26589__3;
return G__26589;
})()
;
cljs.core.Keyword.prototype.apply = (function (self__,args26588){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args26588)));
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
cljs.core.namespace = (function namespace(x){if((function (){var G__26591 = x;if(G__26591)
{var bit__20884__auto__ = (G__26591.cljs$lang$protocol_mask$partition1$ & (4096));if((bit__20884__auto__) || (G__26591.cljs$core$INamed$))
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
{return (new cljs.core.Keyword(cljs.core.namespace(name),(function (){var G__26593 = name;return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__26593) : cljs.core.name.call(null,G__26593));
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
cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/LazySeq");
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
var coll__$1 = this;var h__20522__auto__ = self__.__hash;if(!((h__20522__auto__ == null)))
{return h__20522__auto__;
} else
{var h__20522__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20522__auto____$1;
return h__20522__auto____$1;
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
var G__26594 = ls.sval();
ls = G__26594;
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
cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/ChunkBuffer");
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
cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/ArrayChunk");
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
cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/ChunkedCons");
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
var coll__$1 = this;var h__20522__auto__ = self__.__hash;if(!((h__20522__auto__ == null)))
{return h__20522__auto__;
} else
{var h__20522__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20522__auto____$1;
return h__20522__auto____$1;
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
cljs.core.chunk_next = (function chunk_next(s){if((function (){var G__26596 = s;if(G__26596)
{var bit__20884__auto__ = (G__26596.cljs$lang$protocol_mask$partition1$ & (1024));if((bit__20884__auto__) || (G__26596.cljs$core$IChunkedNext$))
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
var G__26597 = cljs.core.next(s__$1);
s__$1 = G__26597;
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
cljs.core.to_array_2d = (function to_array_2d(coll){var ret = (new Array(cljs.core.count(coll)));var i_26598 = (0);var xs_26599 = cljs.core.seq(coll);while(true){
if(xs_26599)
{(ret[i_26598] = cljs.core.to_array(cljs.core.first(xs_26599)));
{
var G__26600 = (i_26598 + (1));
var G__26601 = cljs.core.next(xs_26599);
i_26598 = G__26600;
xs_26599 = G__26601;
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
var G__26604 = (i + (1));
var G__26605 = cljs.core.next(s__$1);
i = G__26604;
s__$1 = G__26605;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__21341__auto___26606 = size;var i_26607 = (0);while(true){
if((i_26607 < n__21341__auto___26606))
{(a[i_26607] = init_val_or_seq);
{
var G__26608 = (i_26607 + (1));
i_26607 = G__26608;
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
var G__26611 = (i + (1));
var G__26612 = cljs.core.next(s__$1);
i = G__26611;
s__$1 = G__26612;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__21341__auto___26613 = size;var i_26614 = (0);while(true){
if((i_26614 < n__21341__auto___26613))
{(a[i_26614] = init_val_or_seq);
{
var G__26615 = (i_26614 + (1));
i_26614 = G__26615;
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
var G__26618 = (i + (1));
var G__26619 = cljs.core.next(s__$1);
i = G__26618;
s__$1 = G__26619;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__21341__auto___26620 = size;var i_26621 = (0);while(true){
if((i_26621 < n__21341__auto___26620))
{(a[i_26621] = init_val_or_seq);
{
var G__26622 = (i_26621 + (1));
i_26621 = G__26622;
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
var G__26625 = (i + (1));
var G__26626 = cljs.core.next(s__$1);
i = G__26625;
s__$1 = G__26626;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__21341__auto___26627 = size;var i_26628 = (0);while(true){
if((i_26628 < n__21341__auto___26627))
{(a[i_26628] = init_val_or_seq);
{
var G__26629 = (i_26628 + (1));
i_26628 = G__26629;
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
var G__26630 = cljs.core.next(s__$1);
var G__26631 = (i - (1));
var G__26632 = (sum + (1));
s__$1 = G__26630;
i = G__26631;
sum = G__26632;
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
var G__26652__delegate = function (x,y,zs){var cat = (function cat(xys,zs__$1){return (new cljs.core.LazySeq(null,(function (){var xys__$1 = cljs.core.seq(xys);if(xys__$1)
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
var G__26652 = function (x,y,var_args){
var zs = null;if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26652__delegate.call(this,x,y,zs);};
G__26652.cljs$lang$maxFixedArity = 2;
G__26652.cljs$lang$applyTo = (function (arglist__26653){
var x = cljs.core.first(arglist__26653);
arglist__26653 = cljs.core.next(arglist__26653);
var y = cljs.core.first(arglist__26653);
var zs = cljs.core.rest(arglist__26653);
return G__26652__delegate(x,y,zs);
});
G__26652.cljs$core$IFn$_invoke$arity$variadic = G__26652__delegate;
return G__26652;
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
var G__26654__delegate = function (a,b,c,d,more){return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(more)))));
};
var G__26654 = function (a,b,c,d,var_args){
var more = null;if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__26654__delegate.call(this,a,b,c,d,more);};
G__26654.cljs$lang$maxFixedArity = 4;
G__26654.cljs$lang$applyTo = (function (arglist__26655){
var a = cljs.core.first(arglist__26655);
arglist__26655 = cljs.core.next(arglist__26655);
var b = cljs.core.first(arglist__26655);
arglist__26655 = cljs.core.next(arglist__26655);
var c = cljs.core.first(arglist__26655);
arglist__26655 = cljs.core.next(arglist__26655);
var d = cljs.core.first(arglist__26655);
var more = cljs.core.rest(arglist__26655);
return G__26654__delegate(a,b,c,d,more);
});
G__26654.cljs$core$IFn$_invoke$arity$variadic = G__26654__delegate;
return G__26654;
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
var G__26656__delegate = function (tcoll,val,vals){while(true){
var ntcoll = cljs.core._conj_BANG_(tcoll,val);if(cljs.core.truth_(vals))
{{
var G__26657 = ntcoll;
var G__26658 = cljs.core.first(vals);
var G__26659 = cljs.core.next(vals);
tcoll = G__26657;
val = G__26658;
vals = G__26659;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__26656 = function (tcoll,val,var_args){
var vals = null;if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26656__delegate.call(this,tcoll,val,vals);};
G__26656.cljs$lang$maxFixedArity = 2;
G__26656.cljs$lang$applyTo = (function (arglist__26660){
var tcoll = cljs.core.first(arglist__26660);
arglist__26660 = cljs.core.next(arglist__26660);
var val = cljs.core.first(arglist__26660);
var vals = cljs.core.rest(arglist__26660);
return G__26656__delegate(tcoll,val,vals);
});
G__26656.cljs$core$IFn$_invoke$arity$variadic = G__26656__delegate;
return G__26656;
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
var G__26661__delegate = function (tcoll,key,val,kvs){while(true){
var ntcoll = cljs.core._assoc_BANG_(tcoll,key,val);if(cljs.core.truth_(kvs))
{{
var G__26662 = ntcoll;
var G__26663 = cljs.core.first(kvs);
var G__26664 = cljs.core.second(kvs);
var G__26665 = cljs.core.nnext(kvs);
tcoll = G__26662;
key = G__26663;
val = G__26664;
kvs = G__26665;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__26661 = function (tcoll,key,val,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__26661__delegate.call(this,tcoll,key,val,kvs);};
G__26661.cljs$lang$maxFixedArity = 3;
G__26661.cljs$lang$applyTo = (function (arglist__26666){
var tcoll = cljs.core.first(arglist__26666);
arglist__26666 = cljs.core.next(arglist__26666);
var key = cljs.core.first(arglist__26666);
arglist__26666 = cljs.core.next(arglist__26666);
var val = cljs.core.first(arglist__26666);
var kvs = cljs.core.rest(arglist__26666);
return G__26661__delegate(tcoll,key,val,kvs);
});
G__26661.cljs$core$IFn$_invoke$arity$variadic = G__26661__delegate;
return G__26661;
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
var G__26667__delegate = function (tcoll,key,ks){while(true){
var ntcoll = cljs.core._dissoc_BANG_(tcoll,key);if(cljs.core.truth_(ks))
{{
var G__26668 = ntcoll;
var G__26669 = cljs.core.first(ks);
var G__26670 = cljs.core.next(ks);
tcoll = G__26668;
key = G__26669;
ks = G__26670;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__26667 = function (tcoll,key,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26667__delegate.call(this,tcoll,key,ks);};
G__26667.cljs$lang$maxFixedArity = 2;
G__26667.cljs$lang$applyTo = (function (arglist__26671){
var tcoll = cljs.core.first(arglist__26671);
arglist__26671 = cljs.core.next(arglist__26671);
var key = cljs.core.first(arglist__26671);
var ks = cljs.core.rest(arglist__26671);
return G__26667__delegate(tcoll,key,ks);
});
G__26667.cljs$core$IFn$_invoke$arity$variadic = G__26667__delegate;
return G__26667;
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
var G__26672__delegate = function (tcoll,val,vals){while(true){
var ntcoll = cljs.core._disjoin_BANG_(tcoll,val);if(cljs.core.truth_(vals))
{{
var G__26673 = ntcoll;
var G__26674 = cljs.core.first(vals);
var G__26675 = cljs.core.next(vals);
tcoll = G__26673;
val = G__26674;
vals = G__26675;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__26672 = function (tcoll,val,var_args){
var vals = null;if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26672__delegate.call(this,tcoll,val,vals);};
G__26672.cljs$lang$maxFixedArity = 2;
G__26672.cljs$lang$applyTo = (function (arglist__26676){
var tcoll = cljs.core.first(arglist__26676);
arglist__26676 = cljs.core.next(arglist__26676);
var val = cljs.core.first(arglist__26676);
var vals = cljs.core.rest(arglist__26676);
return G__26672__delegate(tcoll,val,vals);
});
G__26672.cljs$core$IFn$_invoke$arity$variadic = G__26672__delegate;
return G__26672;
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
{var a21407 = cljs.core._first(args__$1);var args__$2 = cljs.core._rest(args__$1);if((argc === (1)))
{if(f.cljs$core$IFn$_invoke$arity$1)
{return f.cljs$core$IFn$_invoke$arity$1(a21407);
} else
{var G__26887 = a21407;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26887) : f.call(null,G__26887));
}
} else
{var b21408 = cljs.core._first(args__$2);var args__$3 = cljs.core._rest(args__$2);if((argc === (2)))
{if(f.cljs$core$IFn$_invoke$arity$2)
{return f.cljs$core$IFn$_invoke$arity$2(a21407,b21408);
} else
{var G__26888 = a21407;var G__26889 = b21408;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26888,G__26889) : f.call(null,G__26888,G__26889));
}
} else
{var c21409 = cljs.core._first(args__$3);var args__$4 = cljs.core._rest(args__$3);if((argc === (3)))
{if(f.cljs$core$IFn$_invoke$arity$3)
{return f.cljs$core$IFn$_invoke$arity$3(a21407,b21408,c21409);
} else
{var G__26890 = a21407;var G__26891 = b21408;var G__26892 = c21409;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__26890,G__26891,G__26892) : f.call(null,G__26890,G__26891,G__26892));
}
} else
{var d21410 = cljs.core._first(args__$4);var args__$5 = cljs.core._rest(args__$4);if((argc === (4)))
{if(f.cljs$core$IFn$_invoke$arity$4)
{return f.cljs$core$IFn$_invoke$arity$4(a21407,b21408,c21409,d21410);
} else
{var G__26893 = a21407;var G__26894 = b21408;var G__26895 = c21409;var G__26896 = d21410;return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__26893,G__26894,G__26895,G__26896) : f.call(null,G__26893,G__26894,G__26895,G__26896));
}
} else
{var e21411 = cljs.core._first(args__$5);var args__$6 = cljs.core._rest(args__$5);if((argc === (5)))
{if(f.cljs$core$IFn$_invoke$arity$5)
{return f.cljs$core$IFn$_invoke$arity$5(a21407,b21408,c21409,d21410,e21411);
} else
{var G__26897 = a21407;var G__26898 = b21408;var G__26899 = c21409;var G__26900 = d21410;var G__26901 = e21411;return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__26897,G__26898,G__26899,G__26900,G__26901) : f.call(null,G__26897,G__26898,G__26899,G__26900,G__26901));
}
} else
{var f21412 = cljs.core._first(args__$6);var args__$7 = cljs.core._rest(args__$6);if((argc === (6)))
{if(f.cljs$core$IFn$_invoke$arity$6)
{return f.cljs$core$IFn$_invoke$arity$6(a21407,b21408,c21409,d21410,e21411,f21412);
} else
{var G__26902 = a21407;var G__26903 = b21408;var G__26904 = c21409;var G__26905 = d21410;var G__26906 = e21411;var G__26907 = f21412;return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__26902,G__26903,G__26904,G__26905,G__26906,G__26907) : f.call(null,G__26902,G__26903,G__26904,G__26905,G__26906,G__26907));
}
} else
{var g21413 = cljs.core._first(args__$7);var args__$8 = cljs.core._rest(args__$7);if((argc === (7)))
{if(f.cljs$core$IFn$_invoke$arity$7)
{return f.cljs$core$IFn$_invoke$arity$7(a21407,b21408,c21409,d21410,e21411,f21412,g21413);
} else
{var G__26908 = a21407;var G__26909 = b21408;var G__26910 = c21409;var G__26911 = d21410;var G__26912 = e21411;var G__26913 = f21412;var G__26914 = g21413;return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__26908,G__26909,G__26910,G__26911,G__26912,G__26913,G__26914) : f.call(null,G__26908,G__26909,G__26910,G__26911,G__26912,G__26913,G__26914));
}
} else
{var h21414 = cljs.core._first(args__$8);var args__$9 = cljs.core._rest(args__$8);if((argc === (8)))
{if(f.cljs$core$IFn$_invoke$arity$8)
{return f.cljs$core$IFn$_invoke$arity$8(a21407,b21408,c21409,d21410,e21411,f21412,g21413,h21414);
} else
{var G__26915 = a21407;var G__26916 = b21408;var G__26917 = c21409;var G__26918 = d21410;var G__26919 = e21411;var G__26920 = f21412;var G__26921 = g21413;var G__26922 = h21414;return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__26915,G__26916,G__26917,G__26918,G__26919,G__26920,G__26921,G__26922) : f.call(null,G__26915,G__26916,G__26917,G__26918,G__26919,G__26920,G__26921,G__26922));
}
} else
{var i21415 = cljs.core._first(args__$9);var args__$10 = cljs.core._rest(args__$9);if((argc === (9)))
{if(f.cljs$core$IFn$_invoke$arity$9)
{return f.cljs$core$IFn$_invoke$arity$9(a21407,b21408,c21409,d21410,e21411,f21412,g21413,h21414,i21415);
} else
{var G__26923 = a21407;var G__26924 = b21408;var G__26925 = c21409;var G__26926 = d21410;var G__26927 = e21411;var G__26928 = f21412;var G__26929 = g21413;var G__26930 = h21414;var G__26931 = i21415;return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__26923,G__26924,G__26925,G__26926,G__26927,G__26928,G__26929,G__26930,G__26931) : f.call(null,G__26923,G__26924,G__26925,G__26926,G__26927,G__26928,G__26929,G__26930,G__26931));
}
} else
{var j21416 = cljs.core._first(args__$10);var args__$11 = cljs.core._rest(args__$10);if((argc === (10)))
{if(f.cljs$core$IFn$_invoke$arity$10)
{return f.cljs$core$IFn$_invoke$arity$10(a21407,b21408,c21409,d21410,e21411,f21412,g21413,h21414,i21415,j21416);
} else
{var G__26932 = a21407;var G__26933 = b21408;var G__26934 = c21409;var G__26935 = d21410;var G__26936 = e21411;var G__26937 = f21412;var G__26938 = g21413;var G__26939 = h21414;var G__26940 = i21415;var G__26941 = j21416;return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__26932,G__26933,G__26934,G__26935,G__26936,G__26937,G__26938,G__26939,G__26940,G__26941) : f.call(null,G__26932,G__26933,G__26934,G__26935,G__26936,G__26937,G__26938,G__26939,G__26940,G__26941));
}
} else
{var k21417 = cljs.core._first(args__$11);var args__$12 = cljs.core._rest(args__$11);if((argc === (11)))
{if(f.cljs$core$IFn$_invoke$arity$11)
{return f.cljs$core$IFn$_invoke$arity$11(a21407,b21408,c21409,d21410,e21411,f21412,g21413,h21414,i21415,j21416,k21417);
} else
{var G__26942 = a21407;var G__26943 = b21408;var G__26944 = c21409;var G__26945 = d21410;var G__26946 = e21411;var G__26947 = f21412;var G__26948 = g21413;var G__26949 = h21414;var G__26950 = i21415;var G__26951 = j21416;var G__26952 = k21417;return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__26942,G__26943,G__26944,G__26945,G__26946,G__26947,G__26948,G__26949,G__26950,G__26951,G__26952) : f.call(null,G__26942,G__26943,G__26944,G__26945,G__26946,G__26947,G__26948,G__26949,G__26950,G__26951,G__26952));
}
} else
{var l21418 = cljs.core._first(args__$12);var args__$13 = cljs.core._rest(args__$12);if((argc === (12)))
{if(f.cljs$core$IFn$_invoke$arity$12)
{return f.cljs$core$IFn$_invoke$arity$12(a21407,b21408,c21409,d21410,e21411,f21412,g21413,h21414,i21415,j21416,k21417,l21418);
} else
{var G__26953 = a21407;var G__26954 = b21408;var G__26955 = c21409;var G__26956 = d21410;var G__26957 = e21411;var G__26958 = f21412;var G__26959 = g21413;var G__26960 = h21414;var G__26961 = i21415;var G__26962 = j21416;var G__26963 = k21417;var G__26964 = l21418;return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__26953,G__26954,G__26955,G__26956,G__26957,G__26958,G__26959,G__26960,G__26961,G__26962,G__26963,G__26964) : f.call(null,G__26953,G__26954,G__26955,G__26956,G__26957,G__26958,G__26959,G__26960,G__26961,G__26962,G__26963,G__26964));
}
} else
{var m21419 = cljs.core._first(args__$13);var args__$14 = cljs.core._rest(args__$13);if((argc === (13)))
{if(f.cljs$core$IFn$_invoke$arity$13)
{return f.cljs$core$IFn$_invoke$arity$13(a21407,b21408,c21409,d21410,e21411,f21412,g21413,h21414,i21415,j21416,k21417,l21418,m21419);
} else
{var G__26965 = a21407;var G__26966 = b21408;var G__26967 = c21409;var G__26968 = d21410;var G__26969 = e21411;var G__26970 = f21412;var G__26971 = g21413;var G__26972 = h21414;var G__26973 = i21415;var G__26974 = j21416;var G__26975 = k21417;var G__26976 = l21418;var G__26977 = m21419;return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__26965,G__26966,G__26967,G__26968,G__26969,G__26970,G__26971,G__26972,G__26973,G__26974,G__26975,G__26976,G__26977) : f.call(null,G__26965,G__26966,G__26967,G__26968,G__26969,G__26970,G__26971,G__26972,G__26973,G__26974,G__26975,G__26976,G__26977));
}
} else
{var n21420 = cljs.core._first(args__$14);var args__$15 = cljs.core._rest(args__$14);if((argc === (14)))
{if(f.cljs$core$IFn$_invoke$arity$14)
{return f.cljs$core$IFn$_invoke$arity$14(a21407,b21408,c21409,d21410,e21411,f21412,g21413,h21414,i21415,j21416,k21417,l21418,m21419,n21420);
} else
{var G__26978 = a21407;var G__26979 = b21408;var G__26980 = c21409;var G__26981 = d21410;var G__26982 = e21411;var G__26983 = f21412;var G__26984 = g21413;var G__26985 = h21414;var G__26986 = i21415;var G__26987 = j21416;var G__26988 = k21417;var G__26989 = l21418;var G__26990 = m21419;var G__26991 = n21420;return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__26978,G__26979,G__26980,G__26981,G__26982,G__26983,G__26984,G__26985,G__26986,G__26987,G__26988,G__26989,G__26990,G__26991) : f.call(null,G__26978,G__26979,G__26980,G__26981,G__26982,G__26983,G__26984,G__26985,G__26986,G__26987,G__26988,G__26989,G__26990,G__26991));
}
} else
{var o21421 = cljs.core._first(args__$15);var args__$16 = cljs.core._rest(args__$15);if((argc === (15)))
{if(f.cljs$core$IFn$_invoke$arity$15)
{return f.cljs$core$IFn$_invoke$arity$15(a21407,b21408,c21409,d21410,e21411,f21412,g21413,h21414,i21415,j21416,k21417,l21418,m21419,n21420,o21421);
} else
{var G__26992 = a21407;var G__26993 = b21408;var G__26994 = c21409;var G__26995 = d21410;var G__26996 = e21411;var G__26997 = f21412;var G__26998 = g21413;var G__26999 = h21414;var G__27000 = i21415;var G__27001 = j21416;var G__27002 = k21417;var G__27003 = l21418;var G__27004 = m21419;var G__27005 = n21420;var G__27006 = o21421;return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__26992,G__26993,G__26994,G__26995,G__26996,G__26997,G__26998,G__26999,G__27000,G__27001,G__27002,G__27003,G__27004,G__27005,G__27006) : f.call(null,G__26992,G__26993,G__26994,G__26995,G__26996,G__26997,G__26998,G__26999,G__27000,G__27001,G__27002,G__27003,G__27004,G__27005,G__27006));
}
} else
{var p21422 = cljs.core._first(args__$16);var args__$17 = cljs.core._rest(args__$16);if((argc === (16)))
{if(f.cljs$core$IFn$_invoke$arity$16)
{return f.cljs$core$IFn$_invoke$arity$16(a21407,b21408,c21409,d21410,e21411,f21412,g21413,h21414,i21415,j21416,k21417,l21418,m21419,n21420,o21421,p21422);
} else
{var G__27007 = a21407;var G__27008 = b21408;var G__27009 = c21409;var G__27010 = d21410;var G__27011 = e21411;var G__27012 = f21412;var G__27013 = g21413;var G__27014 = h21414;var G__27015 = i21415;var G__27016 = j21416;var G__27017 = k21417;var G__27018 = l21418;var G__27019 = m21419;var G__27020 = n21420;var G__27021 = o21421;var G__27022 = p21422;return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__27007,G__27008,G__27009,G__27010,G__27011,G__27012,G__27013,G__27014,G__27015,G__27016,G__27017,G__27018,G__27019,G__27020,G__27021,G__27022) : f.call(null,G__27007,G__27008,G__27009,G__27010,G__27011,G__27012,G__27013,G__27014,G__27015,G__27016,G__27017,G__27018,G__27019,G__27020,G__27021,G__27022));
}
} else
{var q21423 = cljs.core._first(args__$17);var args__$18 = cljs.core._rest(args__$17);if((argc === (17)))
{if(f.cljs$core$IFn$_invoke$arity$17)
{return f.cljs$core$IFn$_invoke$arity$17(a21407,b21408,c21409,d21410,e21411,f21412,g21413,h21414,i21415,j21416,k21417,l21418,m21419,n21420,o21421,p21422,q21423);
} else
{var G__27023 = a21407;var G__27024 = b21408;var G__27025 = c21409;var G__27026 = d21410;var G__27027 = e21411;var G__27028 = f21412;var G__27029 = g21413;var G__27030 = h21414;var G__27031 = i21415;var G__27032 = j21416;var G__27033 = k21417;var G__27034 = l21418;var G__27035 = m21419;var G__27036 = n21420;var G__27037 = o21421;var G__27038 = p21422;var G__27039 = q21423;return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__27023,G__27024,G__27025,G__27026,G__27027,G__27028,G__27029,G__27030,G__27031,G__27032,G__27033,G__27034,G__27035,G__27036,G__27037,G__27038,G__27039) : f.call(null,G__27023,G__27024,G__27025,G__27026,G__27027,G__27028,G__27029,G__27030,G__27031,G__27032,G__27033,G__27034,G__27035,G__27036,G__27037,G__27038,G__27039));
}
} else
{var r21424 = cljs.core._first(args__$18);var args__$19 = cljs.core._rest(args__$18);if((argc === (18)))
{if(f.cljs$core$IFn$_invoke$arity$18)
{return f.cljs$core$IFn$_invoke$arity$18(a21407,b21408,c21409,d21410,e21411,f21412,g21413,h21414,i21415,j21416,k21417,l21418,m21419,n21420,o21421,p21422,q21423,r21424);
} else
{var G__27040 = a21407;var G__27041 = b21408;var G__27042 = c21409;var G__27043 = d21410;var G__27044 = e21411;var G__27045 = f21412;var G__27046 = g21413;var G__27047 = h21414;var G__27048 = i21415;var G__27049 = j21416;var G__27050 = k21417;var G__27051 = l21418;var G__27052 = m21419;var G__27053 = n21420;var G__27054 = o21421;var G__27055 = p21422;var G__27056 = q21423;var G__27057 = r21424;return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__27040,G__27041,G__27042,G__27043,G__27044,G__27045,G__27046,G__27047,G__27048,G__27049,G__27050,G__27051,G__27052,G__27053,G__27054,G__27055,G__27056,G__27057) : f.call(null,G__27040,G__27041,G__27042,G__27043,G__27044,G__27045,G__27046,G__27047,G__27048,G__27049,G__27050,G__27051,G__27052,G__27053,G__27054,G__27055,G__27056,G__27057));
}
} else
{var s21425 = cljs.core._first(args__$19);var args__$20 = cljs.core._rest(args__$19);if((argc === (19)))
{if(f.cljs$core$IFn$_invoke$arity$19)
{return f.cljs$core$IFn$_invoke$arity$19(a21407,b21408,c21409,d21410,e21411,f21412,g21413,h21414,i21415,j21416,k21417,l21418,m21419,n21420,o21421,p21422,q21423,r21424,s21425);
} else
{var G__27058 = a21407;var G__27059 = b21408;var G__27060 = c21409;var G__27061 = d21410;var G__27062 = e21411;var G__27063 = f21412;var G__27064 = g21413;var G__27065 = h21414;var G__27066 = i21415;var G__27067 = j21416;var G__27068 = k21417;var G__27069 = l21418;var G__27070 = m21419;var G__27071 = n21420;var G__27072 = o21421;var G__27073 = p21422;var G__27074 = q21423;var G__27075 = r21424;var G__27076 = s21425;return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__27058,G__27059,G__27060,G__27061,G__27062,G__27063,G__27064,G__27065,G__27066,G__27067,G__27068,G__27069,G__27070,G__27071,G__27072,G__27073,G__27074,G__27075,G__27076) : f.call(null,G__27058,G__27059,G__27060,G__27061,G__27062,G__27063,G__27064,G__27065,G__27066,G__27067,G__27068,G__27069,G__27070,G__27071,G__27072,G__27073,G__27074,G__27075,G__27076));
}
} else
{var t21426 = cljs.core._first(args__$20);var args__$21 = cljs.core._rest(args__$20);if((argc === (20)))
{if(f.cljs$core$IFn$_invoke$arity$20)
{return f.cljs$core$IFn$_invoke$arity$20(a21407,b21408,c21409,d21410,e21411,f21412,g21413,h21414,i21415,j21416,k21417,l21418,m21419,n21420,o21421,p21422,q21423,r21424,s21425,t21426);
} else
{var G__27077 = a21407;var G__27078 = b21408;var G__27079 = c21409;var G__27080 = d21410;var G__27081 = e21411;var G__27082 = f21412;var G__27083 = g21413;var G__27084 = h21414;var G__27085 = i21415;var G__27086 = j21416;var G__27087 = k21417;var G__27088 = l21418;var G__27089 = m21419;var G__27090 = n21420;var G__27091 = o21421;var G__27092 = p21422;var G__27093 = q21423;var G__27094 = r21424;var G__27095 = s21425;var G__27096 = t21426;return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(G__27077,G__27078,G__27079,G__27080,G__27081,G__27082,G__27083,G__27084,G__27085,G__27086,G__27087,G__27088,G__27089,G__27090,G__27091,G__27092,G__27093,G__27094,G__27095,G__27096) : f.call(null,G__27077,G__27078,G__27079,G__27080,G__27081,G__27082,G__27083,G__27084,G__27085,G__27086,G__27087,G__27088,G__27089,G__27090,G__27091,G__27092,G__27093,G__27094,G__27095,G__27096));
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
var G__27097__delegate = function (f,a,b,c,d,args){var arglist = cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(args)))));var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array(arglist));
}
};
var G__27097 = function (f,a,b,c,d,var_args){
var args = null;if (arguments.length > 5) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__27097__delegate.call(this,f,a,b,c,d,args);};
G__27097.cljs$lang$maxFixedArity = 5;
G__27097.cljs$lang$applyTo = (function (arglist__27098){
var f = cljs.core.first(arglist__27098);
arglist__27098 = cljs.core.next(arglist__27098);
var a = cljs.core.first(arglist__27098);
arglist__27098 = cljs.core.next(arglist__27098);
var b = cljs.core.first(arglist__27098);
arglist__27098 = cljs.core.next(arglist__27098);
var c = cljs.core.first(arglist__27098);
arglist__27098 = cljs.core.next(arglist__27098);
var d = cljs.core.first(arglist__27098);
var args = cljs.core.rest(arglist__27098);
return G__27097__delegate(f,a,b,c,d,args);
});
G__27097.cljs$core$IFn$_invoke$arity$variadic = G__27097__delegate;
return G__27097;
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
var vary_meta__2 = (function (obj,f){return cljs.core.with_meta(obj,(function (){var G__27114 = cljs.core.meta(obj);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27114) : f.call(null,G__27114));
})());
});
var vary_meta__3 = (function (obj,f,a){return cljs.core.with_meta(obj,(function (){var G__27115 = cljs.core.meta(obj);var G__27116 = a;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27115,G__27116) : f.call(null,G__27115,G__27116));
})());
});
var vary_meta__4 = (function (obj,f,a,b){return cljs.core.with_meta(obj,(function (){var G__27117 = cljs.core.meta(obj);var G__27118 = a;var G__27119 = b;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__27117,G__27118,G__27119) : f.call(null,G__27117,G__27118,G__27119));
})());
});
var vary_meta__5 = (function (obj,f,a,b,c){return cljs.core.with_meta(obj,(function (){var G__27120 = cljs.core.meta(obj);var G__27121 = a;var G__27122 = b;var G__27123 = c;return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__27120,G__27121,G__27122,G__27123) : f.call(null,G__27120,G__27121,G__27122,G__27123));
})());
});
var vary_meta__6 = (function (obj,f,a,b,c,d){return cljs.core.with_meta(obj,(function (){var G__27124 = cljs.core.meta(obj);var G__27125 = a;var G__27126 = b;var G__27127 = c;var G__27128 = d;return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__27124,G__27125,G__27126,G__27127,G__27128) : f.call(null,G__27124,G__27125,G__27126,G__27127,G__27128));
})());
});
var vary_meta__7 = (function() { 
var G__27129__delegate = function (obj,f,a,b,c,d,args){return cljs.core.with_meta(obj,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.meta(obj),a,b,c,cljs.core.array_seq([d,args], 0)));
};
var G__27129 = function (obj,f,a,b,c,d,var_args){
var args = null;if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return G__27129__delegate.call(this,obj,f,a,b,c,d,args);};
G__27129.cljs$lang$maxFixedArity = 6;
G__27129.cljs$lang$applyTo = (function (arglist__27130){
var obj = cljs.core.first(arglist__27130);
arglist__27130 = cljs.core.next(arglist__27130);
var f = cljs.core.first(arglist__27130);
arglist__27130 = cljs.core.next(arglist__27130);
var a = cljs.core.first(arglist__27130);
arglist__27130 = cljs.core.next(arglist__27130);
var b = cljs.core.first(arglist__27130);
arglist__27130 = cljs.core.next(arglist__27130);
var c = cljs.core.first(arglist__27130);
arglist__27130 = cljs.core.next(arglist__27130);
var d = cljs.core.first(arglist__27130);
var args = cljs.core.rest(arglist__27130);
return G__27129__delegate(obj,f,a,b,c,d,args);
});
G__27129.cljs$core$IFn$_invoke$arity$variadic = G__27129__delegate;
return G__27129;
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
var G__27131__delegate = function (x,y,more){return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._EQ_,x,y,more));
};
var G__27131 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__27131__delegate.call(this,x,y,more);};
G__27131.cljs$lang$maxFixedArity = 2;
G__27131.cljs$lang$applyTo = (function (arglist__27132){
var x = cljs.core.first(arglist__27132);
arglist__27132 = cljs.core.next(arglist__27132);
var y = cljs.core.first(arglist__27132);
var more = cljs.core.rest(arglist__27132);
return G__27131__delegate(x,y,more);
});
G__27131.cljs$core$IFn$_invoke$arity$variadic = G__27131__delegate;
return G__27131;
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
cljs.core.nil_iter = (function nil_iter(){if(typeof cljs.core.t27136 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.t27136 = (function (nil_iter,meta27137){
this.nil_iter = nil_iter;
this.meta27137 = meta27137;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.t27136.cljs$lang$type = true;
cljs.core.t27136.cljs$lang$ctorStr = "cljs.core/t27136";
cljs.core.t27136.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/t27136");
});
cljs.core.t27136.prototype.hasNext = (function (){var self__ = this;
var _ = this;return false;
});
cljs.core.t27136.prototype.next = (function (){var self__ = this;
var _ = this;return (new Error("No such element"));
});
cljs.core.t27136.prototype.remove = (function (){var self__ = this;
var _ = this;return (new Error("Unsupported operation"));
});
cljs.core.t27136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27138){var self__ = this;
var _27138__$1 = this;return self__.meta27137;
});
cljs.core.t27136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27138,meta27137__$1){var self__ = this;
var _27138__$1 = this;return (new cljs.core.t27136(self__.nil_iter,meta27137__$1));
});
cljs.core.__GT_t27136 = (function __GT_t27136(nil_iter__$1,meta27137){return (new cljs.core.t27136(nil_iter__$1,meta27137));
});
}
return (new cljs.core.t27136(nil_iter,null));
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
cljs.core.StringIter.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/StringIter");
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
cljs.core.ArrayIter.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/ArrayIter");
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
cljs.core.SeqIter.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/SeqIter");
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
cljs.core.Stepper.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/Stepper");
});
cljs.core.Stepper.prototype.step = (function (lt){var self__ = this;
var this$ = this;while(true){
if(cljs.core.truth_((function (){var and__19621__auto__ = !((lt.stepper == null));if(and__19621__auto__)
{return self__.iter.hasNext();
} else
{return and__19621__auto__;
}
})()))
{if(cljs.core.reduced_QMARK_((function (){var G__27139 = lt;var G__27140 = self__.iter.next();return (self__.xform.cljs$core$IFn$_invoke$arity$2 ? self__.xform.cljs$core$IFn$_invoke$arity$2(G__27139,G__27140) : self__.xform.call(null,G__27139,G__27140));
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
{var G__27141 = lt;return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__27141) : self__.xform.call(null,G__27141));
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
return (new cljs.core.Stepper((function (){var G__27143 = stepfn;return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__27143) : xform.call(null,G__27143));
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
cljs.core.MultiStepper.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/MultiStepper");
});
cljs.core.MultiStepper.prototype.hasNext = (function (){var self__ = this;
var _ = this;var iters__$1 = cljs.core.seq(self__.iters);while(true){
if(!((iters__$1 == null)))
{var iter = cljs.core.first(iters__$1);if(cljs.core.not(iter.hasNext()))
{return false;
} else
{{
var G__27145 = cljs.core.next(iters__$1);
iters__$1 = G__27145;
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
var _ = this;var n__21341__auto___27146 = self__.iters.length;var i_27147 = (0);while(true){
if((i_27147 < n__21341__auto___27146))
{(self__.nexts[i_27147] = (self__.iters[i_27147]).next());
{
var G__27148 = (i_27147 + (1));
i_27147 = G__27148;
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
if(cljs.core.truth_((function (){var and__19621__auto__ = !((lt.stepper == null));if(and__19621__auto__)
{return this$.hasNext();
} else
{return and__19621__auto__;
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
{var G__27144 = lt;return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__27144) : self__.xform.call(null,G__27144));
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
return (new cljs.core.MultiStepper((function (){var G__27153 = stepfn;return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__27153) : xform.call(null,G__27153));
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
cljs.core.LazyTransformer.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/LazyTransformer");
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
cljs.core.LazyTransformer.createMulti = (function (xform,colls){var iters = [];var seq__27154_27158 = cljs.core.seq(colls);var chunk__27155_27159 = null;var count__27156_27160 = (0);var i__27157_27161 = (0);while(true){
if((i__27157_27161 < count__27156_27160))
{var coll_27162 = chunk__27155_27159.cljs$core$IIndexed$_nth$arity$2(null,i__27157_27161);iters.push(cljs.core.iter(coll_27162));
{
var G__27163 = seq__27154_27158;
var G__27164 = chunk__27155_27159;
var G__27165 = count__27156_27160;
var G__27166 = (i__27157_27161 + (1));
seq__27154_27158 = G__27163;
chunk__27155_27159 = G__27164;
count__27156_27160 = G__27165;
i__27157_27161 = G__27166;
continue;
}
} else
{var temp__4126__auto___27167 = cljs.core.seq(seq__27154_27158);if(temp__4126__auto___27167)
{var seq__27154_27168__$1 = temp__4126__auto___27167;if(cljs.core.chunked_seq_QMARK_(seq__27154_27168__$1))
{var c__21126__auto___27169 = cljs.core.chunk_first(seq__27154_27168__$1);{
var G__27170 = cljs.core.chunk_rest(seq__27154_27168__$1);
var G__27171 = c__21126__auto___27169;
var G__27172 = cljs.core.count(c__21126__auto___27169);
var G__27173 = (0);
seq__27154_27158 = G__27170;
chunk__27155_27159 = G__27171;
count__27156_27160 = G__27172;
i__27157_27161 = G__27173;
continue;
}
} else
{var coll_27174 = cljs.core.first(seq__27154_27168__$1);iters.push(cljs.core.iter(coll_27174));
{
var G__27175 = cljs.core.next(seq__27154_27168__$1);
var G__27176 = null;
var G__27177 = (0);
var G__27178 = (0);
seq__27154_27158 = G__27175;
chunk__27155_27159 = G__27176;
count__27156_27160 = G__27177;
i__27157_27161 = G__27178;
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
{var or__19663__auto__ = cljs.core.seq(coll);if(or__19663__auto__)
{return or__19663__auto__;
} else
{return cljs.core.List.EMPTY;
}
}
});
var sequence__2 = (function (xform,coll){return cljs.core.LazyTransformer.create(xform,coll);
});
var sequence__3 = (function() { 
var G__27179__delegate = function (xform,coll,colls){return cljs.core.LazyTransformer.createMulti(xform,cljs.core.to_array(cljs.core.cons(coll,colls)));
};
var G__27179 = function (xform,coll,var_args){
var colls = null;if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__27179__delegate.call(this,xform,coll,colls);};
G__27179.cljs$lang$maxFixedArity = 2;
G__27179.cljs$lang$applyTo = (function (arglist__27180){
var xform = cljs.core.first(arglist__27180);
arglist__27180 = cljs.core.next(arglist__27180);
var coll = cljs.core.first(arglist__27180);
var colls = cljs.core.rest(arglist__27180);
return G__27179__delegate(xform,coll,colls);
});
G__27179.cljs$core$IFn$_invoke$arity$variadic = G__27179__delegate;
return G__27179;
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
{if(cljs.core.truth_((function (){var G__27182 = cljs.core.first(coll);return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__27182) : pred.call(null,G__27182));
})()))
{{
var G__27183 = pred;
var G__27184 = cljs.core.next(coll);
pred = G__27183;
coll = G__27184;
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
{var or__19663__auto__ = (function (){var G__27188 = cljs.core.first(coll);return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__27188) : pred.call(null,G__27188));
})();if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{{
var G__27189 = pred;
var G__27190 = cljs.core.next(coll);
pred = G__27189;
coll = G__27190;
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
var G__27197 = null;
var G__27197__0 = (function (){return cljs.core.not((function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})());
});
var G__27197__1 = (function (x){return cljs.core.not((function (){var G__27194 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27194) : f.call(null,G__27194));
})());
});
var G__27197__2 = (function (x,y){return cljs.core.not((function (){var G__27195 = x;var G__27196 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27195,G__27196) : f.call(null,G__27195,G__27196));
})());
});
var G__27197__3 = (function() { 
var G__27198__delegate = function (x,y,zs){return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,x,y,zs));
};
var G__27198 = function (x,y,var_args){
var zs = null;if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__27198__delegate.call(this,x,y,zs);};
G__27198.cljs$lang$maxFixedArity = 2;
G__27198.cljs$lang$applyTo = (function (arglist__27199){
var x = cljs.core.first(arglist__27199);
arglist__27199 = cljs.core.next(arglist__27199);
var y = cljs.core.first(arglist__27199);
var zs = cljs.core.rest(arglist__27199);
return G__27198__delegate(x,y,zs);
});
G__27198.cljs$core$IFn$_invoke$arity$variadic = G__27198__delegate;
return G__27198;
})()
;
G__27197 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__27197__0.call(this);
case 1:
return G__27197__1.call(this,x);
case 2:
return G__27197__2.call(this,x,y);
default:
return G__27197__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27197.cljs$lang$maxFixedArity = 2;
G__27197.cljs$lang$applyTo = G__27197__3.cljs$lang$applyTo;
G__27197.cljs$core$IFn$_invoke$arity$0 = G__27197__0;
G__27197.cljs$core$IFn$_invoke$arity$1 = G__27197__1;
G__27197.cljs$core$IFn$_invoke$arity$2 = G__27197__2;
G__27197.cljs$core$IFn$_invoke$arity$variadic = G__27197__3.cljs$core$IFn$_invoke$arity$variadic;
return G__27197;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){return (function() { 
var G__27200__delegate = function (args){return x;
};
var G__27200 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27200__delegate.call(this,args);};
G__27200.cljs$lang$maxFixedArity = 0;
G__27200.cljs$lang$applyTo = (function (arglist__27201){
var args = cljs.core.seq(arglist__27201);
return G__27200__delegate(args);
});
G__27200.cljs$core$IFn$_invoke$arity$variadic = G__27200__delegate;
return G__27200;
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
var G__27256 = null;
var G__27256__0 = (function (){var G__27229 = (function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27229) : f.call(null,G__27229));
});
var G__27256__1 = (function (x){var G__27230 = (function (){var G__27231 = x;return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__27231) : g.call(null,G__27231));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27230) : f.call(null,G__27230));
});
var G__27256__2 = (function (x,y){var G__27232 = (function (){var G__27233 = x;var G__27234 = y;return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__27233,G__27234) : g.call(null,G__27233,G__27234));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27232) : f.call(null,G__27232));
});
var G__27256__3 = (function (x,y,z){var G__27235 = (function (){var G__27236 = x;var G__27237 = y;var G__27238 = z;return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__27236,G__27237,G__27238) : g.call(null,G__27236,G__27237,G__27238));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27235) : f.call(null,G__27235));
});
var G__27256__4 = (function() { 
var G__27257__delegate = function (x,y,z,args){var G__27239 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27239) : f.call(null,G__27239));
};
var G__27257 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__27257__delegate.call(this,x,y,z,args);};
G__27257.cljs$lang$maxFixedArity = 3;
G__27257.cljs$lang$applyTo = (function (arglist__27258){
var x = cljs.core.first(arglist__27258);
arglist__27258 = cljs.core.next(arglist__27258);
var y = cljs.core.first(arglist__27258);
arglist__27258 = cljs.core.next(arglist__27258);
var z = cljs.core.first(arglist__27258);
var args = cljs.core.rest(arglist__27258);
return G__27257__delegate(x,y,z,args);
});
G__27257.cljs$core$IFn$_invoke$arity$variadic = G__27257__delegate;
return G__27257;
})()
;
G__27256 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__27256__0.call(this);
case 1:
return G__27256__1.call(this,x);
case 2:
return G__27256__2.call(this,x,y);
case 3:
return G__27256__3.call(this,x,y,z);
default:
return G__27256__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27256.cljs$lang$maxFixedArity = 3;
G__27256.cljs$lang$applyTo = G__27256__4.cljs$lang$applyTo;
G__27256.cljs$core$IFn$_invoke$arity$0 = G__27256__0;
G__27256.cljs$core$IFn$_invoke$arity$1 = G__27256__1;
G__27256.cljs$core$IFn$_invoke$arity$2 = G__27256__2;
G__27256.cljs$core$IFn$_invoke$arity$3 = G__27256__3;
G__27256.cljs$core$IFn$_invoke$arity$variadic = G__27256__4.cljs$core$IFn$_invoke$arity$variadic;
return G__27256;
})()
});
var comp__3 = (function (f,g,h){return (function() {
var G__27259 = null;
var G__27259__0 = (function (){var G__27240 = (function (){var G__27241 = (function (){return (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
})();return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__27241) : g.call(null,G__27241));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27240) : f.call(null,G__27240));
});
var G__27259__1 = (function (x){var G__27242 = (function (){var G__27243 = (function (){var G__27244 = x;return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__27244) : h.call(null,G__27244));
})();return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__27243) : g.call(null,G__27243));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27242) : f.call(null,G__27242));
});
var G__27259__2 = (function (x,y){var G__27245 = (function (){var G__27246 = (function (){var G__27247 = x;var G__27248 = y;return (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(G__27247,G__27248) : h.call(null,G__27247,G__27248));
})();return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__27246) : g.call(null,G__27246));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27245) : f.call(null,G__27245));
});
var G__27259__3 = (function (x,y,z){var G__27249 = (function (){var G__27250 = (function (){var G__27251 = x;var G__27252 = y;var G__27253 = z;return (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(G__27251,G__27252,G__27253) : h.call(null,G__27251,G__27252,G__27253));
})();return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__27250) : g.call(null,G__27250));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27249) : f.call(null,G__27249));
});
var G__27259__4 = (function() { 
var G__27260__delegate = function (x,y,z,args){var G__27254 = (function (){var G__27255 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args);return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__27255) : g.call(null,G__27255));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27254) : f.call(null,G__27254));
};
var G__27260 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__27260__delegate.call(this,x,y,z,args);};
G__27260.cljs$lang$maxFixedArity = 3;
G__27260.cljs$lang$applyTo = (function (arglist__27261){
var x = cljs.core.first(arglist__27261);
arglist__27261 = cljs.core.next(arglist__27261);
var y = cljs.core.first(arglist__27261);
arglist__27261 = cljs.core.next(arglist__27261);
var z = cljs.core.first(arglist__27261);
var args = cljs.core.rest(arglist__27261);
return G__27260__delegate(x,y,z,args);
});
G__27260.cljs$core$IFn$_invoke$arity$variadic = G__27260__delegate;
return G__27260;
})()
;
G__27259 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__27259__0.call(this);
case 1:
return G__27259__1.call(this,x);
case 2:
return G__27259__2.call(this,x,y);
case 3:
return G__27259__3.call(this,x,y,z);
default:
return G__27259__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27259.cljs$lang$maxFixedArity = 3;
G__27259.cljs$lang$applyTo = G__27259__4.cljs$lang$applyTo;
G__27259.cljs$core$IFn$_invoke$arity$0 = G__27259__0;
G__27259.cljs$core$IFn$_invoke$arity$1 = G__27259__1;
G__27259.cljs$core$IFn$_invoke$arity$2 = G__27259__2;
G__27259.cljs$core$IFn$_invoke$arity$3 = G__27259__3;
G__27259.cljs$core$IFn$_invoke$arity$variadic = G__27259__4.cljs$core$IFn$_invoke$arity$variadic;
return G__27259;
})()
});
var comp__4 = (function() { 
var G__27262__delegate = function (f1,f2,f3,fs){var fs__$1 = cljs.core.reverse(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f1,f2,f3,fs));return ((function (fs__$1){
return (function() { 
var G__27263__delegate = function (args){var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fs__$1),args);var fs__$2 = cljs.core.next(fs__$1);while(true){
if(fs__$2)
{{
var G__27264 = cljs.core.first(fs__$2).call(null,ret);
var G__27265 = cljs.core.next(fs__$2);
ret = G__27264;
fs__$2 = G__27265;
continue;
}
} else
{return ret;
}
break;
}
};
var G__27263 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27263__delegate.call(this,args);};
G__27263.cljs$lang$maxFixedArity = 0;
G__27263.cljs$lang$applyTo = (function (arglist__27266){
var args = cljs.core.seq(arglist__27266);
return G__27263__delegate(args);
});
G__27263.cljs$core$IFn$_invoke$arity$variadic = G__27263__delegate;
return G__27263;
})()
;
;})(fs__$1))
};
var G__27262 = function (f1,f2,f3,var_args){
var fs = null;if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__27262__delegate.call(this,f1,f2,f3,fs);};
G__27262.cljs$lang$maxFixedArity = 3;
G__27262.cljs$lang$applyTo = (function (arglist__27267){
var f1 = cljs.core.first(arglist__27267);
arglist__27267 = cljs.core.next(arglist__27267);
var f2 = cljs.core.first(arglist__27267);
arglist__27267 = cljs.core.next(arglist__27267);
var f3 = cljs.core.first(arglist__27267);
var fs = cljs.core.rest(arglist__27267);
return G__27262__delegate(f1,f2,f3,fs);
});
G__27262.cljs$core$IFn$_invoke$arity$variadic = G__27262__delegate;
return G__27262;
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
var G__27268__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg1,args);
};
var G__27268 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27268__delegate.call(this,args);};
G__27268.cljs$lang$maxFixedArity = 0;
G__27268.cljs$lang$applyTo = (function (arglist__27269){
var args = cljs.core.seq(arglist__27269);
return G__27268__delegate(args);
});
G__27268.cljs$core$IFn$_invoke$arity$variadic = G__27268__delegate;
return G__27268;
})()
;
});
var partial__3 = (function (f,arg1,arg2){return (function() { 
var G__27270__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,arg1,arg2,args);
};
var G__27270 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27270__delegate.call(this,args);};
G__27270.cljs$lang$maxFixedArity = 0;
G__27270.cljs$lang$applyTo = (function (arglist__27271){
var args = cljs.core.seq(arglist__27271);
return G__27270__delegate(args);
});
G__27270.cljs$core$IFn$_invoke$arity$variadic = G__27270__delegate;
return G__27270;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){return (function() { 
var G__27272__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,arg1,arg2,arg3,args);
};
var G__27272 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27272__delegate.call(this,args);};
G__27272.cljs$lang$maxFixedArity = 0;
G__27272.cljs$lang$applyTo = (function (arglist__27273){
var args = cljs.core.seq(arglist__27273);
return G__27272__delegate(args);
});
G__27272.cljs$core$IFn$_invoke$arity$variadic = G__27272__delegate;
return G__27272;
})()
;
});
var partial__5 = (function() { 
var G__27274__delegate = function (f,arg1,arg2,arg3,more){return (function() { 
var G__27275__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,arg1,arg2,arg3,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(more,args));
};
var G__27275 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27275__delegate.call(this,args);};
G__27275.cljs$lang$maxFixedArity = 0;
G__27275.cljs$lang$applyTo = (function (arglist__27276){
var args = cljs.core.seq(arglist__27276);
return G__27275__delegate(args);
});
G__27275.cljs$core$IFn$_invoke$arity$variadic = G__27275__delegate;
return G__27275;
})()
;
};
var G__27274 = function (f,arg1,arg2,arg3,var_args){
var more = null;if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__27274__delegate.call(this,f,arg1,arg2,arg3,more);};
G__27274.cljs$lang$maxFixedArity = 4;
G__27274.cljs$lang$applyTo = (function (arglist__27277){
var f = cljs.core.first(arglist__27277);
arglist__27277 = cljs.core.next(arglist__27277);
var arg1 = cljs.core.first(arglist__27277);
arglist__27277 = cljs.core.next(arglist__27277);
var arg2 = cljs.core.first(arglist__27277);
arglist__27277 = cljs.core.next(arglist__27277);
var arg3 = cljs.core.first(arglist__27277);
var more = cljs.core.rest(arglist__27277);
return G__27274__delegate(f,arg1,arg2,arg3,more);
});
G__27274.cljs$core$IFn$_invoke$arity$variadic = G__27274__delegate;
return G__27274;
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
var G__27310 = null;
var G__27310__1 = (function (a){var G__27294 = (((a == null))?x:a);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27294) : f.call(null,G__27294));
});
var G__27310__2 = (function (a,b){var G__27295 = (((a == null))?x:a);var G__27296 = b;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27295,G__27296) : f.call(null,G__27295,G__27296));
});
var G__27310__3 = (function (a,b,c){var G__27297 = (((a == null))?x:a);var G__27298 = b;var G__27299 = c;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__27297,G__27298,G__27299) : f.call(null,G__27297,G__27298,G__27299));
});
var G__27310__4 = (function() { 
var G__27311__delegate = function (a,b,c,ds){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),b,c,ds);
};
var G__27311 = function (a,b,c,var_args){
var ds = null;if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__27311__delegate.call(this,a,b,c,ds);};
G__27311.cljs$lang$maxFixedArity = 3;
G__27311.cljs$lang$applyTo = (function (arglist__27312){
var a = cljs.core.first(arglist__27312);
arglist__27312 = cljs.core.next(arglist__27312);
var b = cljs.core.first(arglist__27312);
arglist__27312 = cljs.core.next(arglist__27312);
var c = cljs.core.first(arglist__27312);
var ds = cljs.core.rest(arglist__27312);
return G__27311__delegate(a,b,c,ds);
});
G__27311.cljs$core$IFn$_invoke$arity$variadic = G__27311__delegate;
return G__27311;
})()
;
G__27310 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__27310__1.call(this,a);
case 2:
return G__27310__2.call(this,a,b);
case 3:
return G__27310__3.call(this,a,b,c);
default:
return G__27310__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27310.cljs$lang$maxFixedArity = 3;
G__27310.cljs$lang$applyTo = G__27310__4.cljs$lang$applyTo;
G__27310.cljs$core$IFn$_invoke$arity$1 = G__27310__1;
G__27310.cljs$core$IFn$_invoke$arity$2 = G__27310__2;
G__27310.cljs$core$IFn$_invoke$arity$3 = G__27310__3;
G__27310.cljs$core$IFn$_invoke$arity$variadic = G__27310__4.cljs$core$IFn$_invoke$arity$variadic;
return G__27310;
})()
});
var fnil__3 = (function (f,x,y){return (function() {
var G__27313 = null;
var G__27313__2 = (function (a,b){var G__27300 = (((a == null))?x:a);var G__27301 = (((b == null))?y:b);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27300,G__27301) : f.call(null,G__27300,G__27301));
});
var G__27313__3 = (function (a,b,c){var G__27302 = (((a == null))?x:a);var G__27303 = (((b == null))?y:b);var G__27304 = c;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__27302,G__27303,G__27304) : f.call(null,G__27302,G__27303,G__27304));
});
var G__27313__4 = (function() { 
var G__27314__delegate = function (a,b,c,ds){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__27314 = function (a,b,c,var_args){
var ds = null;if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__27314__delegate.call(this,a,b,c,ds);};
G__27314.cljs$lang$maxFixedArity = 3;
G__27314.cljs$lang$applyTo = (function (arglist__27315){
var a = cljs.core.first(arglist__27315);
arglist__27315 = cljs.core.next(arglist__27315);
var b = cljs.core.first(arglist__27315);
arglist__27315 = cljs.core.next(arglist__27315);
var c = cljs.core.first(arglist__27315);
var ds = cljs.core.rest(arglist__27315);
return G__27314__delegate(a,b,c,ds);
});
G__27314.cljs$core$IFn$_invoke$arity$variadic = G__27314__delegate;
return G__27314;
})()
;
G__27313 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__27313__2.call(this,a,b);
case 3:
return G__27313__3.call(this,a,b,c);
default:
return G__27313__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27313.cljs$lang$maxFixedArity = 3;
G__27313.cljs$lang$applyTo = G__27313__4.cljs$lang$applyTo;
G__27313.cljs$core$IFn$_invoke$arity$2 = G__27313__2;
G__27313.cljs$core$IFn$_invoke$arity$3 = G__27313__3;
G__27313.cljs$core$IFn$_invoke$arity$variadic = G__27313__4.cljs$core$IFn$_invoke$arity$variadic;
return G__27313;
})()
});
var fnil__4 = (function (f,x,y,z){return (function() {
var G__27316 = null;
var G__27316__2 = (function (a,b){var G__27305 = (((a == null))?x:a);var G__27306 = (((b == null))?y:b);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27305,G__27306) : f.call(null,G__27305,G__27306));
});
var G__27316__3 = (function (a,b,c){var G__27307 = (((a == null))?x:a);var G__27308 = (((b == null))?y:b);var G__27309 = (((c == null))?z:c);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__27307,G__27308,G__27309) : f.call(null,G__27307,G__27308,G__27309));
});
var G__27316__4 = (function() { 
var G__27317__delegate = function (a,b,c,ds){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__27317 = function (a,b,c,var_args){
var ds = null;if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__27317__delegate.call(this,a,b,c,ds);};
G__27317.cljs$lang$maxFixedArity = 3;
G__27317.cljs$lang$applyTo = (function (arglist__27318){
var a = cljs.core.first(arglist__27318);
arglist__27318 = cljs.core.next(arglist__27318);
var b = cljs.core.first(arglist__27318);
arglist__27318 = cljs.core.next(arglist__27318);
var c = cljs.core.first(arglist__27318);
var ds = cljs.core.rest(arglist__27318);
return G__27317__delegate(a,b,c,ds);
});
G__27317.cljs$core$IFn$_invoke$arity$variadic = G__27317__delegate;
return G__27317;
})()
;
G__27316 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__27316__2.call(this,a,b);
case 3:
return G__27316__3.call(this,a,b,c);
default:
return G__27316__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27316.cljs$lang$maxFixedArity = 3;
G__27316.cljs$lang$applyTo = G__27316__4.cljs$lang$applyTo;
G__27316.cljs$core$IFn$_invoke$arity$2 = G__27316__2;
G__27316.cljs$core$IFn$_invoke$arity$3 = G__27316__3;
G__27316.cljs$core$IFn$_invoke$arity$variadic = G__27316__4.cljs$core$IFn$_invoke$arity$variadic;
return G__27316;
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
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__21341__auto___27367 = size;var i_27368 = (0);while(true){
if((i_27368 < n__21341__auto___27367))
{cljs.core.chunk_append(b,(function (){var G__27363 = (idx + i_27368);var G__27364 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_27368);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27363,G__27364) : f.call(null,G__27363,G__27364));
})());
{
var G__27369 = (i_27368 + (1));
i_27368 = G__27369;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),mapi((idx + size),cljs.core.chunk_rest(s)));
} else
{return cljs.core.cons((function (){var G__27365 = idx;var G__27366 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27365,G__27366) : f.call(null,G__27365,G__27366));
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
var G__27388 = null;
var G__27388__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__27388__1 = (function (result){var G__27382 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__27382) : rf.call(null,G__27382));
});
var G__27388__2 = (function (result,input){var v = (function (){var G__27383 = input;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27383) : f.call(null,G__27383));
})();if((v == null))
{return result;
} else
{var G__27384 = result;var G__27385 = v;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__27384,G__27385) : rf.call(null,G__27384,G__27385));
}
});
G__27388 = function(result,input){
switch(arguments.length){
case 0:
return G__27388__0.call(this);
case 1:
return G__27388__1.call(this,result);
case 2:
return G__27388__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27388.cljs$core$IFn$_invoke$arity$0 = G__27388__0;
G__27388.cljs$core$IFn$_invoke$arity$1 = G__27388__1;
G__27388.cljs$core$IFn$_invoke$arity$2 = G__27388__2;
return G__27388;
})()
});
});
var keep__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__21341__auto___27389 = size;var i_27390 = (0);while(true){
if((i_27390 < n__21341__auto___27389))
{var x_27391 = (function (){var G__27386 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_27390);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27386) : f.call(null,G__27386));
})();if((x_27391 == null))
{} else
{cljs.core.chunk_append(b,x_27391);
}
{
var G__27392 = (i_27390 + (1));
i_27390 = G__27392;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else
{var x = (function (){var G__27387 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27387) : f.call(null,G__27387));
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
cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__27393 = this$__$1;return goog.getUid(G__27393);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__27394 = cljs.core.seq(self__.watches);var chunk__27395 = null;var count__27396 = (0);var i__27397 = (0);while(true){
if((i__27397 < count__27396))
{var vec__27398 = chunk__27395.cljs$core$IIndexed$_nth$arity$2(null,i__27397);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27398,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27398,(1),null);var G__27399_27408 = key;var G__27400_27409 = this$__$1;var G__27401_27410 = oldval;var G__27402_27411 = newval;(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__27399_27408,G__27400_27409,G__27401_27410,G__27402_27411) : f.call(null,G__27399_27408,G__27400_27409,G__27401_27410,G__27402_27411));
{
var G__27412 = seq__27394;
var G__27413 = chunk__27395;
var G__27414 = count__27396;
var G__27415 = (i__27397 + (1));
seq__27394 = G__27412;
chunk__27395 = G__27413;
count__27396 = G__27414;
i__27397 = G__27415;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__27394);if(temp__4126__auto__)
{var seq__27394__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27394__$1))
{var c__21126__auto__ = cljs.core.chunk_first(seq__27394__$1);{
var G__27416 = cljs.core.chunk_rest(seq__27394__$1);
var G__27417 = c__21126__auto__;
var G__27418 = cljs.core.count(c__21126__auto__);
var G__27419 = (0);
seq__27394 = G__27416;
chunk__27395 = G__27417;
count__27396 = G__27418;
i__27397 = G__27419;
continue;
}
} else
{var vec__27403 = cljs.core.first(seq__27394__$1);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27403,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27403,(1),null);var G__27404_27420 = key;var G__27405_27421 = this$__$1;var G__27406_27422 = oldval;var G__27407_27423 = newval;(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__27404_27420,G__27405_27421,G__27406_27422,G__27407_27423) : f.call(null,G__27404_27420,G__27405_27421,G__27406_27422,G__27407_27423));
{
var G__27424 = cljs.core.next(seq__27394__$1);
var G__27425 = null;
var G__27426 = (0);
var G__27427 = (0);
seq__27394 = G__27424;
chunk__27395 = G__27425;
count__27396 = G__27426;
i__27397 = G__27427;
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
var G__27431__delegate = function (x,p__27428){var map__27430 = p__27428;var map__27430__$1 = ((cljs.core.seq_QMARK_(map__27430))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27430):map__27430);var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27430__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27430__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));return (new cljs.core.Atom(x,meta,validator,null));
};
var G__27431 = function (x,var_args){
var p__27428 = null;if (arguments.length > 1) {
  p__27428 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__27431__delegate.call(this,x,p__27428);};
G__27431.cljs$lang$maxFixedArity = 1;
G__27431.cljs$lang$applyTo = (function (arglist__27432){
var x = cljs.core.first(arglist__27432);
var p__27428 = cljs.core.rest(arglist__27432);
return G__27431__delegate(x,p__27428);
});
G__27431.cljs$core$IFn$_invoke$arity$variadic = G__27431__delegate;
return G__27431;
})()
;
atom = function(x,var_args){
var p__27428 = var_args;
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
{if(cljs.core.truth_((function (){var G__27435 = new_value;return (validate.cljs$core$IFn$_invoke$arity$1 ? validate.cljs$core$IFn$_invoke$arity$1(G__27435) : validate.call(null,G__27435));
})()))
{} else
{throw (new Error(("Assert failed: Validator rejected reference state\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__27436 = cljs.core.list(new cljs.core.Symbol(null,"validate","validate",1439230700,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null));return (cljs.core.pr_str.cljs$core$IFn$_invoke$arity$1 ? cljs.core.pr_str.cljs$core$IFn$_invoke$arity$1(G__27436) : cljs.core.pr_str.call(null,G__27436));
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
{return cljs.core.reset_BANG_(a,(function (){var G__27443 = a.state;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27443) : f.call(null,G__27443));
})());
} else
{return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$2(a,f);
}
});
var swap_BANG___3 = (function (a,f,x){if((a instanceof cljs.core.Atom))
{return cljs.core.reset_BANG_(a,(function (){var G__27444 = a.state;var G__27445 = x;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27444,G__27445) : f.call(null,G__27444,G__27445));
})());
} else
{return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,f,x);
}
});
var swap_BANG___4 = (function (a,f,x,y){if((a instanceof cljs.core.Atom))
{return cljs.core.reset_BANG_(a,(function (){var G__27446 = a.state;var G__27447 = x;var G__27448 = y;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__27446,G__27447,G__27448) : f.call(null,G__27446,G__27447,G__27448));
})());
} else
{return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,f,x,y);
}
});
var swap_BANG___5 = (function() { 
var G__27449__delegate = function (a,f,x,y,more){if((a instanceof cljs.core.Atom))
{return cljs.core.reset_BANG_(a,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,a.state,x,y,more));
} else
{return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$5(a,f,x,y,more);
}
};
var G__27449 = function (a,f,x,y,var_args){
var more = null;if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__27449__delegate.call(this,a,f,x,y,more);};
G__27449.cljs$lang$maxFixedArity = 4;
G__27449.cljs$lang$applyTo = (function (arglist__27450){
var a = cljs.core.first(arglist__27450);
arglist__27450 = cljs.core.next(arglist__27450);
var f = cljs.core.first(arglist__27450);
arglist__27450 = cljs.core.next(arglist__27450);
var x = cljs.core.first(arglist__27450);
arglist__27450 = cljs.core.next(arglist__27450);
var y = cljs.core.first(arglist__27450);
var more = cljs.core.rest(arglist__27450);
return G__27449__delegate(a,f,x,y,more);
});
G__27449.cljs$core$IFn$_invoke$arity$variadic = G__27449__delegate;
return G__27449;
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
var G__27517 = null;
var G__27517__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__27517__1 = (function (result){var G__27484 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__27484) : rf.call(null,G__27484));
});
var G__27517__2 = (function (result,input){var i = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ia,cljs.core.inc);var v = (function (){var G__27485 = i;var G__27486 = input;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27485,G__27486) : f.call(null,G__27485,G__27486));
})();if((v == null))
{return result;
} else
{var G__27487 = result;var G__27488 = v;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__27487,G__27488) : rf.call(null,G__27487,G__27488));
}
});
G__27517 = function(result,input){
switch(arguments.length){
case 0:
return G__27517__0.call(this);
case 1:
return G__27517__1.call(this,result);
case 2:
return G__27517__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27517.cljs$core$IFn$_invoke$arity$0 = G__27517__0;
G__27517.cljs$core$IFn$_invoke$arity$1 = G__27517__1;
G__27517.cljs$core$IFn$_invoke$arity$2 = G__27517__2;
return G__27517;
})()
;})(ia))
});
});
var keep_indexed__2 = (function (f,coll){var keepi = (function keepi(idx,coll__$1){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll__$1);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__21341__auto___27518 = size;var i_27519 = (0);while(true){
if((i_27519 < n__21341__auto___27518))
{var x_27520 = (function (){var G__27513 = (idx + i_27519);var G__27514 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_27519);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27513,G__27514) : f.call(null,G__27513,G__27514));
})();if((x_27520 == null))
{} else
{cljs.core.chunk_append(b,x_27520);
}
{
var G__27521 = (i_27519 + (1));
i_27519 = G__27521;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),keepi((idx + size),cljs.core.chunk_rest(s)));
} else
{var x = (function (){var G__27515 = idx;var G__27516 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27515,G__27516) : f.call(null,G__27515,G__27516));
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
var ep1__1 = (function (x){return cljs.core.boolean$((function (){var G__27735 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__27735) : p.call(null,G__27735));
})());
});
var ep1__2 = (function (x,y){return cljs.core.boolean$((function (){var and__19621__auto__ = (function (){var G__27737 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__27737) : p.call(null,G__27737));
})();if(cljs.core.truth_(and__19621__auto__))
{var G__27738 = y;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__27738) : p.call(null,G__27738));
} else
{return and__19621__auto__;
}
})());
});
var ep1__3 = (function (x,y,z){return cljs.core.boolean$((function (){var and__19621__auto__ = (function (){var G__27740 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__27740) : p.call(null,G__27740));
})();if(cljs.core.truth_(and__19621__auto__))
{var and__19621__auto____$1 = (function (){var G__27742 = y;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__27742) : p.call(null,G__27742));
})();if(cljs.core.truth_(and__19621__auto____$1))
{var G__27743 = z;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__27743) : p.call(null,G__27743));
} else
{return and__19621__auto____$1;
}
} else
{return and__19621__auto__;
}
})());
});
var ep1__4 = (function() { 
var G__27912__delegate = function (x,y,z,args){return cljs.core.boolean$((ep1.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_(p,args)));
};
var G__27912 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__27912__delegate.call(this,x,y,z,args);};
G__27912.cljs$lang$maxFixedArity = 3;
G__27912.cljs$lang$applyTo = (function (arglist__27913){
var x = cljs.core.first(arglist__27913);
arglist__27913 = cljs.core.next(arglist__27913);
var y = cljs.core.first(arglist__27913);
arglist__27913 = cljs.core.next(arglist__27913);
var z = cljs.core.first(arglist__27913);
var args = cljs.core.rest(arglist__27913);
return G__27912__delegate(x,y,z,args);
});
G__27912.cljs$core$IFn$_invoke$arity$variadic = G__27912__delegate;
return G__27912;
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
var ep2__1 = (function (x){return cljs.core.boolean$((function (){var and__19621__auto__ = (function (){var G__27775 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27775) : p1.call(null,G__27775));
})();if(cljs.core.truth_(and__19621__auto__))
{var G__27776 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27776) : p2.call(null,G__27776));
} else
{return and__19621__auto__;
}
})());
});
var ep2__2 = (function (x,y){return cljs.core.boolean$((function (){var and__19621__auto__ = (function (){var G__27778 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27778) : p1.call(null,G__27778));
})();if(cljs.core.truth_(and__19621__auto__))
{var and__19621__auto____$1 = (function (){var G__27780 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27780) : p1.call(null,G__27780));
})();if(cljs.core.truth_(and__19621__auto____$1))
{var and__19621__auto____$2 = (function (){var G__27782 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27782) : p2.call(null,G__27782));
})();if(cljs.core.truth_(and__19621__auto____$2))
{var G__27783 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27783) : p2.call(null,G__27783));
} else
{return and__19621__auto____$2;
}
} else
{return and__19621__auto____$1;
}
} else
{return and__19621__auto__;
}
})());
});
var ep2__3 = (function (x,y,z){return cljs.core.boolean$((function (){var and__19621__auto__ = (function (){var G__27785 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27785) : p1.call(null,G__27785));
})();if(cljs.core.truth_(and__19621__auto__))
{var and__19621__auto____$1 = (function (){var G__27787 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27787) : p1.call(null,G__27787));
})();if(cljs.core.truth_(and__19621__auto____$1))
{var and__19621__auto____$2 = (function (){var G__27789 = z;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27789) : p1.call(null,G__27789));
})();if(cljs.core.truth_(and__19621__auto____$2))
{var and__19621__auto____$3 = (function (){var G__27791 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27791) : p2.call(null,G__27791));
})();if(cljs.core.truth_(and__19621__auto____$3))
{var and__19621__auto____$4 = (function (){var G__27793 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27793) : p2.call(null,G__27793));
})();if(cljs.core.truth_(and__19621__auto____$4))
{var G__27794 = z;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27794) : p2.call(null,G__27794));
} else
{return and__19621__auto____$4;
}
} else
{return and__19621__auto____$3;
}
} else
{return and__19621__auto____$2;
}
} else
{return and__19621__auto____$1;
}
} else
{return and__19621__auto__;
}
})());
});
var ep2__4 = (function() { 
var G__27914__delegate = function (x,y,z,args){return cljs.core.boolean$((ep2.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__27522_SHARP_){var and__19621__auto__ = (function (){var G__27799 = p1__27522_SHARP_;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27799) : p1.call(null,G__27799));
})();if(cljs.core.truth_(and__19621__auto__))
{var G__27800 = p1__27522_SHARP_;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27800) : p2.call(null,G__27800));
} else
{return and__19621__auto__;
}
}),args)));
};
var G__27914 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__27914__delegate.call(this,x,y,z,args);};
G__27914.cljs$lang$maxFixedArity = 3;
G__27914.cljs$lang$applyTo = (function (arglist__27915){
var x = cljs.core.first(arglist__27915);
arglist__27915 = cljs.core.next(arglist__27915);
var y = cljs.core.first(arglist__27915);
arglist__27915 = cljs.core.next(arglist__27915);
var z = cljs.core.first(arglist__27915);
var args = cljs.core.rest(arglist__27915);
return G__27914__delegate(x,y,z,args);
});
G__27914.cljs$core$IFn$_invoke$arity$variadic = G__27914__delegate;
return G__27914;
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
var ep3__1 = (function (x){return cljs.core.boolean$((function (){var and__19621__auto__ = (function (){var G__27846 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27846) : p1.call(null,G__27846));
})();if(cljs.core.truth_(and__19621__auto__))
{var and__19621__auto____$1 = (function (){var G__27848 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27848) : p2.call(null,G__27848));
})();if(cljs.core.truth_(and__19621__auto____$1))
{var G__27849 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__27849) : p3.call(null,G__27849));
} else
{return and__19621__auto____$1;
}
} else
{return and__19621__auto__;
}
})());
});
var ep3__2 = (function (x,y){return cljs.core.boolean$((function (){var and__19621__auto__ = (function (){var G__27851 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27851) : p1.call(null,G__27851));
})();if(cljs.core.truth_(and__19621__auto__))
{var and__19621__auto____$1 = (function (){var G__27853 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27853) : p2.call(null,G__27853));
})();if(cljs.core.truth_(and__19621__auto____$1))
{var and__19621__auto____$2 = (function (){var G__27855 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__27855) : p3.call(null,G__27855));
})();if(cljs.core.truth_(and__19621__auto____$2))
{var and__19621__auto____$3 = (function (){var G__27857 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27857) : p1.call(null,G__27857));
})();if(cljs.core.truth_(and__19621__auto____$3))
{var and__19621__auto____$4 = (function (){var G__27859 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27859) : p2.call(null,G__27859));
})();if(cljs.core.truth_(and__19621__auto____$4))
{var G__27860 = y;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__27860) : p3.call(null,G__27860));
} else
{return and__19621__auto____$4;
}
} else
{return and__19621__auto____$3;
}
} else
{return and__19621__auto____$2;
}
} else
{return and__19621__auto____$1;
}
} else
{return and__19621__auto__;
}
})());
});
var ep3__3 = (function (x,y,z){return cljs.core.boolean$((function (){var and__19621__auto__ = (function (){var G__27862 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27862) : p1.call(null,G__27862));
})();if(cljs.core.truth_(and__19621__auto__))
{var and__19621__auto____$1 = (function (){var G__27864 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27864) : p2.call(null,G__27864));
})();if(cljs.core.truth_(and__19621__auto____$1))
{var and__19621__auto____$2 = (function (){var G__27866 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__27866) : p3.call(null,G__27866));
})();if(cljs.core.truth_(and__19621__auto____$2))
{var and__19621__auto____$3 = (function (){var G__27868 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27868) : p1.call(null,G__27868));
})();if(cljs.core.truth_(and__19621__auto____$3))
{var and__19621__auto____$4 = (function (){var G__27870 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27870) : p2.call(null,G__27870));
})();if(cljs.core.truth_(and__19621__auto____$4))
{var and__19621__auto____$5 = (function (){var G__27872 = y;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__27872) : p3.call(null,G__27872));
})();if(cljs.core.truth_(and__19621__auto____$5))
{var and__19621__auto____$6 = (function (){var G__27874 = z;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27874) : p1.call(null,G__27874));
})();if(cljs.core.truth_(and__19621__auto____$6))
{var and__19621__auto____$7 = (function (){var G__27876 = z;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27876) : p2.call(null,G__27876));
})();if(cljs.core.truth_(and__19621__auto____$7))
{var G__27877 = z;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__27877) : p3.call(null,G__27877));
} else
{return and__19621__auto____$7;
}
} else
{return and__19621__auto____$6;
}
} else
{return and__19621__auto____$5;
}
} else
{return and__19621__auto____$4;
}
} else
{return and__19621__auto____$3;
}
} else
{return and__19621__auto____$2;
}
} else
{return and__19621__auto____$1;
}
} else
{return and__19621__auto__;
}
})());
});
var ep3__4 = (function() { 
var G__27916__delegate = function (x,y,z,args){return cljs.core.boolean$((ep3.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__27523_SHARP_){var and__19621__auto__ = (function (){var G__27884 = p1__27523_SHARP_;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__27884) : p1.call(null,G__27884));
})();if(cljs.core.truth_(and__19621__auto__))
{var and__19621__auto____$1 = (function (){var G__27886 = p1__27523_SHARP_;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__27886) : p2.call(null,G__27886));
})();if(cljs.core.truth_(and__19621__auto____$1))
{var G__27887 = p1__27523_SHARP_;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__27887) : p3.call(null,G__27887));
} else
{return and__19621__auto____$1;
}
} else
{return and__19621__auto__;
}
}),args)));
};
var G__27916 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__27916__delegate.call(this,x,y,z,args);};
G__27916.cljs$lang$maxFixedArity = 3;
G__27916.cljs$lang$applyTo = (function (arglist__27917){
var x = cljs.core.first(arglist__27917);
arglist__27917 = cljs.core.next(arglist__27917);
var y = cljs.core.first(arglist__27917);
arglist__27917 = cljs.core.next(arglist__27917);
var z = cljs.core.first(arglist__27917);
var args = cljs.core.rest(arglist__27917);
return G__27916__delegate(x,y,z,args);
});
G__27916.cljs$core$IFn$_invoke$arity$variadic = G__27916__delegate;
return G__27916;
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
var G__27918__delegate = function (p1,p2,p3,ps){var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);return ((function (ps__$1){
return (function() {
var epn = null;
var epn__0 = (function (){return true;
});
var epn__1 = (function (x){return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__27524_SHARP_){var G__27903 = x;return (p1__27524_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27524_SHARP_.cljs$core$IFn$_invoke$arity$1(G__27903) : p1__27524_SHARP_.call(null,G__27903));
});})(ps__$1))
,ps__$1);
});
var epn__2 = (function (x,y){return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__27525_SHARP_){var and__19621__auto__ = (function (){var G__27905 = x;return (p1__27525_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27525_SHARP_.cljs$core$IFn$_invoke$arity$1(G__27905) : p1__27525_SHARP_.call(null,G__27905));
})();if(cljs.core.truth_(and__19621__auto__))
{var G__27906 = y;return (p1__27525_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27525_SHARP_.cljs$core$IFn$_invoke$arity$1(G__27906) : p1__27525_SHARP_.call(null,G__27906));
} else
{return and__19621__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__3 = (function (x,y,z){return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__27526_SHARP_){var and__19621__auto__ = (function (){var G__27908 = x;return (p1__27526_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27526_SHARP_.cljs$core$IFn$_invoke$arity$1(G__27908) : p1__27526_SHARP_.call(null,G__27908));
})();if(cljs.core.truth_(and__19621__auto__))
{var and__19621__auto____$1 = (function (){var G__27910 = y;return (p1__27526_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27526_SHARP_.cljs$core$IFn$_invoke$arity$1(G__27910) : p1__27526_SHARP_.call(null,G__27910));
})();if(cljs.core.truth_(and__19621__auto____$1))
{var G__27911 = z;return (p1__27526_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27526_SHARP_.cljs$core$IFn$_invoke$arity$1(G__27911) : p1__27526_SHARP_.call(null,G__27911));
} else
{return and__19621__auto____$1;
}
} else
{return and__19621__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__4 = (function() { 
var G__27919__delegate = function (x,y,z,args){return cljs.core.boolean$((epn.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__27527_SHARP_){return cljs.core.every_QMARK_(p1__27527_SHARP_,args);
});})(ps__$1))
,ps__$1)));
};
var G__27919 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__27919__delegate.call(this,x,y,z,args);};
G__27919.cljs$lang$maxFixedArity = 3;
G__27919.cljs$lang$applyTo = (function (arglist__27920){
var x = cljs.core.first(arglist__27920);
arglist__27920 = cljs.core.next(arglist__27920);
var y = cljs.core.first(arglist__27920);
arglist__27920 = cljs.core.next(arglist__27920);
var z = cljs.core.first(arglist__27920);
var args = cljs.core.rest(arglist__27920);
return G__27919__delegate(x,y,z,args);
});
G__27919.cljs$core$IFn$_invoke$arity$variadic = G__27919__delegate;
return G__27919;
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
var G__27918 = function (p1,p2,p3,var_args){
var ps = null;if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__27918__delegate.call(this,p1,p2,p3,ps);};
G__27918.cljs$lang$maxFixedArity = 3;
G__27918.cljs$lang$applyTo = (function (arglist__27921){
var p1 = cljs.core.first(arglist__27921);
arglist__27921 = cljs.core.next(arglist__27921);
var p2 = cljs.core.first(arglist__27921);
arglist__27921 = cljs.core.next(arglist__27921);
var p3 = cljs.core.first(arglist__27921);
var ps = cljs.core.rest(arglist__27921);
return G__27918__delegate(p1,p2,p3,ps);
});
G__27918.cljs$core$IFn$_invoke$arity$variadic = G__27918__delegate;
return G__27918;
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
var sp1__1 = (function (x){var G__28127 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__28127) : p.call(null,G__28127));
});
var sp1__2 = (function (x,y){var or__19663__auto__ = (function (){var G__28129 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__28129) : p.call(null,G__28129));
})();if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{var G__28130 = y;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__28130) : p.call(null,G__28130));
}
});
var sp1__3 = (function (x,y,z){var or__19663__auto__ = (function (){var G__28132 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__28132) : p.call(null,G__28132));
})();if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (function (){var G__28134 = y;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__28134) : p.call(null,G__28134));
})();if(cljs.core.truth_(or__19663__auto____$1))
{return or__19663__auto____$1;
} else
{var G__28135 = z;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__28135) : p.call(null,G__28135));
}
}
});
var sp1__4 = (function() { 
var G__28296__delegate = function (x,y,z,args){var or__19663__auto__ = sp1.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return cljs.core.some(p,args);
}
};
var G__28296 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__28296__delegate.call(this,x,y,z,args);};
G__28296.cljs$lang$maxFixedArity = 3;
G__28296.cljs$lang$applyTo = (function (arglist__28297){
var x = cljs.core.first(arglist__28297);
arglist__28297 = cljs.core.next(arglist__28297);
var y = cljs.core.first(arglist__28297);
arglist__28297 = cljs.core.next(arglist__28297);
var z = cljs.core.first(arglist__28297);
var args = cljs.core.rest(arglist__28297);
return G__28296__delegate(x,y,z,args);
});
G__28296.cljs$core$IFn$_invoke$arity$variadic = G__28296__delegate;
return G__28296;
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
var sp2__1 = (function (x){var or__19663__auto__ = (function (){var G__28167 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28167) : p1.call(null,G__28167));
})();if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{var G__28168 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28168) : p2.call(null,G__28168));
}
});
var sp2__2 = (function (x,y){var or__19663__auto__ = (function (){var G__28170 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28170) : p1.call(null,G__28170));
})();if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (function (){var G__28172 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28172) : p1.call(null,G__28172));
})();if(cljs.core.truth_(or__19663__auto____$1))
{return or__19663__auto____$1;
} else
{var or__19663__auto____$2 = (function (){var G__28174 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28174) : p2.call(null,G__28174));
})();if(cljs.core.truth_(or__19663__auto____$2))
{return or__19663__auto____$2;
} else
{var G__28175 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28175) : p2.call(null,G__28175));
}
}
}
});
var sp2__3 = (function (x,y,z){var or__19663__auto__ = (function (){var G__28177 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28177) : p1.call(null,G__28177));
})();if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (function (){var G__28179 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28179) : p1.call(null,G__28179));
})();if(cljs.core.truth_(or__19663__auto____$1))
{return or__19663__auto____$1;
} else
{var or__19663__auto____$2 = (function (){var G__28181 = z;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28181) : p1.call(null,G__28181));
})();if(cljs.core.truth_(or__19663__auto____$2))
{return or__19663__auto____$2;
} else
{var or__19663__auto____$3 = (function (){var G__28183 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28183) : p2.call(null,G__28183));
})();if(cljs.core.truth_(or__19663__auto____$3))
{return or__19663__auto____$3;
} else
{var or__19663__auto____$4 = (function (){var G__28185 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28185) : p2.call(null,G__28185));
})();if(cljs.core.truth_(or__19663__auto____$4))
{return or__19663__auto____$4;
} else
{var G__28186 = z;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28186) : p2.call(null,G__28186));
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__28298__delegate = function (x,y,z,args){var or__19663__auto__ = sp2.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return cljs.core.some(((function (or__19663__auto__){
return (function (p1__27922_SHARP_){var or__19663__auto____$1 = (function (){var G__28188 = p1__27922_SHARP_;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28188) : p1.call(null,G__28188));
})();if(cljs.core.truth_(or__19663__auto____$1))
{return or__19663__auto____$1;
} else
{var G__28189 = p1__27922_SHARP_;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28189) : p2.call(null,G__28189));
}
});})(or__19663__auto__))
,args);
}
};
var G__28298 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__28298__delegate.call(this,x,y,z,args);};
G__28298.cljs$lang$maxFixedArity = 3;
G__28298.cljs$lang$applyTo = (function (arglist__28299){
var x = cljs.core.first(arglist__28299);
arglist__28299 = cljs.core.next(arglist__28299);
var y = cljs.core.first(arglist__28299);
arglist__28299 = cljs.core.next(arglist__28299);
var z = cljs.core.first(arglist__28299);
var args = cljs.core.rest(arglist__28299);
return G__28298__delegate(x,y,z,args);
});
G__28298.cljs$core$IFn$_invoke$arity$variadic = G__28298__delegate;
return G__28298;
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
var sp3__1 = (function (x){var or__19663__auto__ = (function (){var G__28235 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28235) : p1.call(null,G__28235));
})();if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (function (){var G__28237 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28237) : p2.call(null,G__28237));
})();if(cljs.core.truth_(or__19663__auto____$1))
{return or__19663__auto____$1;
} else
{var G__28238 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__28238) : p3.call(null,G__28238));
}
}
});
var sp3__2 = (function (x,y){var or__19663__auto__ = (function (){var G__28240 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28240) : p1.call(null,G__28240));
})();if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (function (){var G__28242 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28242) : p2.call(null,G__28242));
})();if(cljs.core.truth_(or__19663__auto____$1))
{return or__19663__auto____$1;
} else
{var or__19663__auto____$2 = (function (){var G__28244 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__28244) : p3.call(null,G__28244));
})();if(cljs.core.truth_(or__19663__auto____$2))
{return or__19663__auto____$2;
} else
{var or__19663__auto____$3 = (function (){var G__28246 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28246) : p1.call(null,G__28246));
})();if(cljs.core.truth_(or__19663__auto____$3))
{return or__19663__auto____$3;
} else
{var or__19663__auto____$4 = (function (){var G__28248 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28248) : p2.call(null,G__28248));
})();if(cljs.core.truth_(or__19663__auto____$4))
{return or__19663__auto____$4;
} else
{var G__28249 = y;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__28249) : p3.call(null,G__28249));
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){var or__19663__auto__ = (function (){var G__28251 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28251) : p1.call(null,G__28251));
})();if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (function (){var G__28253 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28253) : p2.call(null,G__28253));
})();if(cljs.core.truth_(or__19663__auto____$1))
{return or__19663__auto____$1;
} else
{var or__19663__auto____$2 = (function (){var G__28255 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__28255) : p3.call(null,G__28255));
})();if(cljs.core.truth_(or__19663__auto____$2))
{return or__19663__auto____$2;
} else
{var or__19663__auto____$3 = (function (){var G__28257 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28257) : p1.call(null,G__28257));
})();if(cljs.core.truth_(or__19663__auto____$3))
{return or__19663__auto____$3;
} else
{var or__19663__auto____$4 = (function (){var G__28259 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28259) : p2.call(null,G__28259));
})();if(cljs.core.truth_(or__19663__auto____$4))
{return or__19663__auto____$4;
} else
{var or__19663__auto____$5 = (function (){var G__28261 = y;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__28261) : p3.call(null,G__28261));
})();if(cljs.core.truth_(or__19663__auto____$5))
{return or__19663__auto____$5;
} else
{var or__19663__auto____$6 = (function (){var G__28263 = z;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28263) : p1.call(null,G__28263));
})();if(cljs.core.truth_(or__19663__auto____$6))
{return or__19663__auto____$6;
} else
{var or__19663__auto____$7 = (function (){var G__28265 = z;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28265) : p2.call(null,G__28265));
})();if(cljs.core.truth_(or__19663__auto____$7))
{return or__19663__auto____$7;
} else
{var G__28266 = z;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__28266) : p3.call(null,G__28266));
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
var G__28300__delegate = function (x,y,z,args){var or__19663__auto__ = sp3.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return cljs.core.some(((function (or__19663__auto__){
return (function (p1__27923_SHARP_){var or__19663__auto____$1 = (function (){var G__28268 = p1__27923_SHARP_;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__28268) : p1.call(null,G__28268));
})();if(cljs.core.truth_(or__19663__auto____$1))
{return or__19663__auto____$1;
} else
{var or__19663__auto____$2 = (function (){var G__28270 = p1__27923_SHARP_;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__28270) : p2.call(null,G__28270));
})();if(cljs.core.truth_(or__19663__auto____$2))
{return or__19663__auto____$2;
} else
{var G__28271 = p1__27923_SHARP_;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__28271) : p3.call(null,G__28271));
}
}
});})(or__19663__auto__))
,args);
}
};
var G__28300 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__28300__delegate.call(this,x,y,z,args);};
G__28300.cljs$lang$maxFixedArity = 3;
G__28300.cljs$lang$applyTo = (function (arglist__28301){
var x = cljs.core.first(arglist__28301);
arglist__28301 = cljs.core.next(arglist__28301);
var y = cljs.core.first(arglist__28301);
arglist__28301 = cljs.core.next(arglist__28301);
var z = cljs.core.first(arglist__28301);
var args = cljs.core.rest(arglist__28301);
return G__28300__delegate(x,y,z,args);
});
G__28300.cljs$core$IFn$_invoke$arity$variadic = G__28300__delegate;
return G__28300;
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
var G__28302__delegate = function (p1,p2,p3,ps){var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);return ((function (ps__$1){
return (function() {
var spn = null;
var spn__0 = (function (){return null;
});
var spn__1 = (function (x){return cljs.core.some(((function (ps__$1){
return (function (p1__27924_SHARP_){var G__28287 = x;return (p1__27924_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27924_SHARP_.cljs$core$IFn$_invoke$arity$1(G__28287) : p1__27924_SHARP_.call(null,G__28287));
});})(ps__$1))
,ps__$1);
});
var spn__2 = (function (x,y){return cljs.core.some(((function (ps__$1){
return (function (p1__27925_SHARP_){var or__19663__auto__ = (function (){var G__28289 = x;return (p1__27925_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27925_SHARP_.cljs$core$IFn$_invoke$arity$1(G__28289) : p1__27925_SHARP_.call(null,G__28289));
})();if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{var G__28290 = y;return (p1__27925_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27925_SHARP_.cljs$core$IFn$_invoke$arity$1(G__28290) : p1__27925_SHARP_.call(null,G__28290));
}
});})(ps__$1))
,ps__$1);
});
var spn__3 = (function (x,y,z){return cljs.core.some(((function (ps__$1){
return (function (p1__27926_SHARP_){var or__19663__auto__ = (function (){var G__28292 = x;return (p1__27926_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27926_SHARP_.cljs$core$IFn$_invoke$arity$1(G__28292) : p1__27926_SHARP_.call(null,G__28292));
})();if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (function (){var G__28294 = y;return (p1__27926_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27926_SHARP_.cljs$core$IFn$_invoke$arity$1(G__28294) : p1__27926_SHARP_.call(null,G__28294));
})();if(cljs.core.truth_(or__19663__auto____$1))
{return or__19663__auto____$1;
} else
{var G__28295 = z;return (p1__27926_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27926_SHARP_.cljs$core$IFn$_invoke$arity$1(G__28295) : p1__27926_SHARP_.call(null,G__28295));
}
}
});})(ps__$1))
,ps__$1);
});
var spn__4 = (function() { 
var G__28303__delegate = function (x,y,z,args){var or__19663__auto__ = spn.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return cljs.core.some(((function (or__19663__auto__,ps__$1){
return (function (p1__27927_SHARP_){return cljs.core.some(p1__27927_SHARP_,args);
});})(or__19663__auto__,ps__$1))
,ps__$1);
}
};
var G__28303 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__28303__delegate.call(this,x,y,z,args);};
G__28303.cljs$lang$maxFixedArity = 3;
G__28303.cljs$lang$applyTo = (function (arglist__28304){
var x = cljs.core.first(arglist__28304);
arglist__28304 = cljs.core.next(arglist__28304);
var y = cljs.core.first(arglist__28304);
arglist__28304 = cljs.core.next(arglist__28304);
var z = cljs.core.first(arglist__28304);
var args = cljs.core.rest(arglist__28304);
return G__28303__delegate(x,y,z,args);
});
G__28303.cljs$core$IFn$_invoke$arity$variadic = G__28303__delegate;
return G__28303;
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
var G__28302 = function (p1,p2,p3,var_args){
var ps = null;if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__28302__delegate.call(this,p1,p2,p3,ps);};
G__28302.cljs$lang$maxFixedArity = 3;
G__28302.cljs$lang$applyTo = (function (arglist__28305){
var p1 = cljs.core.first(arglist__28305);
arglist__28305 = cljs.core.next(arglist__28305);
var p2 = cljs.core.first(arglist__28305);
arglist__28305 = cljs.core.next(arglist__28305);
var p3 = cljs.core.first(arglist__28305);
var ps = cljs.core.rest(arglist__28305);
return G__28302__delegate(p1,p2,p3,ps);
});
G__28302.cljs$core$IFn$_invoke$arity$variadic = G__28302__delegate;
return G__28302;
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
var G__28360 = null;
var G__28360__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__28360__1 = (function (result){var G__28346 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__28346) : rf.call(null,G__28346));
});
var G__28360__2 = (function (result,input){var G__28347 = result;var G__28348 = (function (){var G__28349 = input;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28349) : f.call(null,G__28349));
})();return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__28347,G__28348) : rf.call(null,G__28347,G__28348));
});
var G__28360__3 = (function() { 
var G__28361__delegate = function (result,input,inputs){var G__28350 = result;var G__28351 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,input,inputs);return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__28350,G__28351) : rf.call(null,G__28350,G__28351));
};
var G__28361 = function (result,input,var_args){
var inputs = null;if (arguments.length > 2) {
  inputs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__28361__delegate.call(this,result,input,inputs);};
G__28361.cljs$lang$maxFixedArity = 2;
G__28361.cljs$lang$applyTo = (function (arglist__28362){
var result = cljs.core.first(arglist__28362);
arglist__28362 = cljs.core.next(arglist__28362);
var input = cljs.core.first(arglist__28362);
var inputs = cljs.core.rest(arglist__28362);
return G__28361__delegate(result,input,inputs);
});
G__28361.cljs$core$IFn$_invoke$arity$variadic = G__28361__delegate;
return G__28361;
})()
;
G__28360 = function(result,input,var_args){
var inputs = var_args;
switch(arguments.length){
case 0:
return G__28360__0.call(this);
case 1:
return G__28360__1.call(this,result);
case 2:
return G__28360__2.call(this,result,input);
default:
return G__28360__3.cljs$core$IFn$_invoke$arity$variadic(result,input, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28360.cljs$lang$maxFixedArity = 2;
G__28360.cljs$lang$applyTo = G__28360__3.cljs$lang$applyTo;
G__28360.cljs$core$IFn$_invoke$arity$0 = G__28360__0;
G__28360.cljs$core$IFn$_invoke$arity$1 = G__28360__1;
G__28360.cljs$core$IFn$_invoke$arity$2 = G__28360__2;
G__28360.cljs$core$IFn$_invoke$arity$variadic = G__28360__3.cljs$core$IFn$_invoke$arity$variadic;
return G__28360;
})()
});
});
var map__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__21341__auto___28363 = size;var i_28364 = (0);while(true){
if((i_28364 < n__21341__auto___28363))
{cljs.core.chunk_append(b,(function (){var G__28352 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_28364);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28352) : f.call(null,G__28352));
})());
{
var G__28365 = (i_28364 + (1));
i_28364 = G__28365;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else
{return cljs.core.cons((function (){var G__28353 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28353) : f.call(null,G__28353));
})(),map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s)));
}
} else
{return null;
}
}),null,null));
});
var map__3 = (function (f,c1,c2){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq(c1);var s2 = cljs.core.seq(c2);if((s1) && (s2))
{return cljs.core.cons((function (){var G__28354 = cljs.core.first(s1);var G__28355 = cljs.core.first(s2);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28354,G__28355) : f.call(null,G__28354,G__28355));
})(),map.cljs$core$IFn$_invoke$arity$3(f,cljs.core.rest(s1),cljs.core.rest(s2)));
} else
{return null;
}
}),null,null));
});
var map__4 = (function (f,c1,c2,c3){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq(c1);var s2 = cljs.core.seq(c2);var s3 = cljs.core.seq(c3);if((s1) && (s2) && (s3))
{return cljs.core.cons((function (){var G__28356 = cljs.core.first(s1);var G__28357 = cljs.core.first(s2);var G__28358 = cljs.core.first(s3);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__28356,G__28357,G__28358) : f.call(null,G__28356,G__28357,G__28358));
})(),map.cljs$core$IFn$_invoke$arity$4(f,cljs.core.rest(s1),cljs.core.rest(s2),cljs.core.rest(s3)));
} else
{return null;
}
}),null,null));
});
var map__5 = (function() { 
var G__28366__delegate = function (f,c1,c2,c3,colls){var step = (function step(cs){return (new cljs.core.LazySeq(null,(function (){var ss = map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cs);if(cljs.core.every_QMARK_(cljs.core.identity,ss))
{return cljs.core.cons(map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),step(map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else
{return null;
}
}),null,null));
});return map.cljs$core$IFn$_invoke$arity$2(((function (step){
return (function (p1__28306_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,p1__28306_SHARP_);
});})(step))
,step(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c3,cljs.core.array_seq([c2,c1], 0))));
};
var G__28366 = function (f,c1,c2,c3,var_args){
var colls = null;if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__28366__delegate.call(this,f,c1,c2,c3,colls);};
G__28366.cljs$lang$maxFixedArity = 4;
G__28366.cljs$lang$applyTo = (function (arglist__28367){
var f = cljs.core.first(arglist__28367);
arglist__28367 = cljs.core.next(arglist__28367);
var c1 = cljs.core.first(arglist__28367);
arglist__28367 = cljs.core.next(arglist__28367);
var c2 = cljs.core.first(arglist__28367);
arglist__28367 = cljs.core.next(arglist__28367);
var c3 = cljs.core.first(arglist__28367);
var colls = cljs.core.rest(arglist__28367);
return G__28366__delegate(f,c1,c2,c3,colls);
});
G__28366.cljs$core$IFn$_invoke$arity$variadic = G__28366__delegate;
return G__28366;
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
var G__28376 = null;
var G__28376__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__28376__1 = (function (result){var G__28373 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__28373) : rf.call(null,G__28373));
});
var G__28376__2 = (function (result,input){var n__$1 = cljs.core.deref(na);var nn = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(na,cljs.core.dec);var result__$1 = (((n__$1 > (0)))?(function (){var G__28374 = result;var G__28375 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__28374,G__28375) : rf.call(null,G__28374,G__28375));
})():result);if(!((nn > (0))))
{return cljs.core.reduced(result__$1);
} else
{return result__$1;
}
});
G__28376 = function(result,input){
switch(arguments.length){
case 0:
return G__28376__0.call(this);
case 1:
return G__28376__1.call(this,result);
case 2:
return G__28376__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28376.cljs$core$IFn$_invoke$arity$0 = G__28376__0;
G__28376.cljs$core$IFn$_invoke$arity$1 = G__28376__1;
G__28376.cljs$core$IFn$_invoke$arity$2 = G__28376__2;
return G__28376;
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
var G__28383 = null;
var G__28383__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__28383__1 = (function (result){var G__28380 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__28380) : rf.call(null,G__28380));
});
var G__28383__2 = (function (result,input){var n__$1 = cljs.core.deref(na);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(na,cljs.core.dec);
if((n__$1 > (0)))
{return result;
} else
{var G__28381 = result;var G__28382 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__28381,G__28382) : rf.call(null,G__28381,G__28382));
}
});
G__28383 = function(result,input){
switch(arguments.length){
case 0:
return G__28383__0.call(this);
case 1:
return G__28383__1.call(this,result);
case 2:
return G__28383__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28383.cljs$core$IFn$_invoke$arity$0 = G__28383__0;
G__28383.cljs$core$IFn$_invoke$arity$1 = G__28383__1;
G__28383.cljs$core$IFn$_invoke$arity$2 = G__28383__2;
return G__28383;
})()
;})(na))
});
});
var drop__2 = (function (n,coll){var step = (function (n__$1,coll__$1){while(true){
var s = cljs.core.seq(coll__$1);if(((n__$1 > (0))) && (s))
{{
var G__28384 = (n__$1 - (1));
var G__28385 = cljs.core.rest(s);
n__$1 = G__28384;
coll__$1 = G__28385;
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
var G__28388 = cljs.core.next(s);
var G__28389 = cljs.core.next(lead);
s = G__28388;
lead = G__28389;
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
var G__28402 = null;
var G__28402__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__28402__1 = (function (result){var G__28396 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__28396) : rf.call(null,G__28396));
});
var G__28402__2 = (function (result,input){var drop_QMARK_ = cljs.core.deref(da);if(cljs.core.truth_((function (){var and__19621__auto__ = drop_QMARK_;if(cljs.core.truth_(and__19621__auto__))
{var G__28397 = input;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__28397) : pred.call(null,G__28397));
} else
{return and__19621__auto__;
}
})()))
{return result;
} else
{cljs.core.reset_BANG_(da,null);
var G__28398 = result;var G__28399 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__28398,G__28399) : rf.call(null,G__28398,G__28399));
}
});
G__28402 = function(result,input){
switch(arguments.length){
case 0:
return G__28402__0.call(this);
case 1:
return G__28402__1.call(this,result);
case 2:
return G__28402__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28402.cljs$core$IFn$_invoke$arity$0 = G__28402__0;
G__28402.cljs$core$IFn$_invoke$arity$1 = G__28402__1;
G__28402.cljs$core$IFn$_invoke$arity$2 = G__28402__2;
return G__28402;
})()
;})(da))
});
});
var drop_while__2 = (function (pred,coll){var step = (function (pred__$1,coll__$1){while(true){
var s = cljs.core.seq(coll__$1);if(cljs.core.truth_((function (){var and__19621__auto__ = s;if(and__19621__auto__)
{var G__28401 = cljs.core.first(s);return (pred__$1.cljs$core$IFn$_invoke$arity$1 ? pred__$1.cljs$core$IFn$_invoke$arity$1(G__28401) : pred__$1.call(null,G__28401));
} else
{return and__19621__auto__;
}
})()))
{{
var G__28403 = pred__$1;
var G__28404 = cljs.core.rest(s);
pred__$1 = G__28403;
coll__$1 = G__28404;
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
cljs.core.iterate = (function iterate(f,x){return cljs.core.cons(x,(new cljs.core.LazySeq(null,(function (){return iterate(f,(function (){var G__28413 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28413) : f.call(null,G__28413));
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
var G__28416__delegate = function (c1,c2,colls){return (new cljs.core.LazySeq(null,(function (){var ss = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.array_seq([c1], 0)));if(cljs.core.every_QMARK_(cljs.core.identity,ss))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(interleave,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else
{return null;
}
}),null,null));
};
var G__28416 = function (c1,c2,var_args){
var colls = null;if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__28416__delegate.call(this,c1,c2,colls);};
G__28416.cljs$lang$maxFixedArity = 2;
G__28416.cljs$lang$applyTo = (function (arglist__28417){
var c1 = cljs.core.first(arglist__28417);
arglist__28417 = cljs.core.next(arglist__28417);
var c2 = cljs.core.first(arglist__28417);
var colls = cljs.core.rest(arglist__28417);
return G__28416__delegate(c1,c2,colls);
});
G__28416.cljs$core$IFn$_invoke$arity$variadic = G__28416__delegate;
return G__28416;
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
var G__28426__delegate = function (f,colls){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,f,colls));
};
var G__28426 = function (f,var_args){
var colls = null;if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__28426__delegate.call(this,f,colls);};
G__28426.cljs$lang$maxFixedArity = 1;
G__28426.cljs$lang$applyTo = (function (arglist__28427){
var f = cljs.core.first(arglist__28427);
var colls = cljs.core.rest(arglist__28427);
return G__28426__delegate(f,colls);
});
G__28426.cljs$core$IFn$_invoke$arity$variadic = G__28426__delegate;
return G__28426;
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
var G__28446 = null;
var G__28446__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__28446__1 = (function (result){var G__28440 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__28440) : rf.call(null,G__28440));
});
var G__28446__2 = (function (result,input){if(cljs.core.truth_((function (){var G__28441 = input;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__28441) : pred.call(null,G__28441));
})()))
{var G__28442 = result;var G__28443 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__28442,G__28443) : rf.call(null,G__28442,G__28443));
} else
{return result;
}
});
G__28446 = function(result,input){
switch(arguments.length){
case 0:
return G__28446__0.call(this);
case 1:
return G__28446__1.call(this,result);
case 2:
return G__28446__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28446.cljs$core$IFn$_invoke$arity$0 = G__28446__0;
G__28446.cljs$core$IFn$_invoke$arity$1 = G__28446__1;
G__28446.cljs$core$IFn$_invoke$arity$2 = G__28446__2;
return G__28446;
})()
});
});
var filter__2 = (function (pred,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__21341__auto___28447 = size;var i_28448 = (0);while(true){
if((i_28448 < n__21341__auto___28447))
{if(cljs.core.truth_((function (){var G__28444 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_28448);return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__28444) : pred.call(null,G__28444));
})()))
{cljs.core.chunk_append(b,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_28448));
} else
{}
{
var G__28449 = (i_28448 + (1));
i_28448 = G__28449;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),filter.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.chunk_rest(s)));
} else
{var f = cljs.core.first(s);var r = cljs.core.rest(s);if(cljs.core.truth_((function (){var G__28445 = f;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__28445) : pred.call(null,G__28445));
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
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){var walk = (function walk(node){return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(node,(cljs.core.truth_((function (){var G__28456 = node;return (branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(G__28456) : branch_QMARK_.call(null,G__28456));
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(walk,cljs.core.array_seq([(function (){var G__28457 = node;return (children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(G__28457) : children.call(null,G__28457));
})()], 0)):null));
}),null,null));
});return walk(root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28458_SHARP_){return !(cljs.core.sequential_QMARK_(p1__28458_SHARP_));
}),cljs.core.rest(cljs.core.tree_seq(cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined. A transducer may be supplied.
*/
cljs.core.into = (function() {
var into = null;
var into__2 = (function (to,from){if(!((to == null)))
{if((function (){var G__28461 = to;if(G__28461)
{var bit__20884__auto__ = (G__28461.cljs$lang$protocol_mask$partition1$ & (4));if((bit__20884__auto__) || (G__28461.cljs$core$IEditableCollection$))
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
var into__3 = (function (to,xform,from){if((function (){var G__28462 = to;if(G__28462)
{var bit__20884__auto__ = (G__28462.cljs$lang$protocol_mask$partition1$ & (4));if((bit__20884__auto__) || (G__28462.cljs$core$IEditableCollection$))
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
var mapv__2 = (function (f,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__28464 = o;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28464) : f.call(null,G__28464));
})());
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$4(f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__28465__delegate = function (f,c1,c2,c3,colls){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map,f,c1,c2,c3,cljs.core.array_seq([colls], 0)));
};
var G__28465 = function (f,c1,c2,c3,var_args){
var colls = null;if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__28465__delegate.call(this,f,c1,c2,c3,colls);};
G__28465.cljs$lang$maxFixedArity = 4;
G__28465.cljs$lang$applyTo = (function (arglist__28466){
var f = cljs.core.first(arglist__28466);
arglist__28466 = cljs.core.next(arglist__28466);
var c1 = cljs.core.first(arglist__28466);
arglist__28466 = cljs.core.next(arglist__28466);
var c2 = cljs.core.first(arglist__28466);
arglist__28466 = cljs.core.next(arglist__28466);
var c3 = cljs.core.first(arglist__28466);
var colls = cljs.core.rest(arglist__28466);
return G__28465__delegate(f,c1,c2,c3,colls);
});
G__28465.cljs$core$IFn$_invoke$arity$variadic = G__28465__delegate;
return G__28465;
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
cljs.core.filterv = (function filterv(pred,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){if(cljs.core.truth_((function (){var G__28468 = o;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__28468) : pred.call(null,G__28468));
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
{if(!((function (){var G__28483 = m__$1;if(G__28483)
{var bit__20917__auto__ = (G__28483.cljs$lang$protocol_mask$partition0$ & (256));if((bit__20917__auto__) || (G__28483.cljs$core$ILookup$))
{return true;
} else
{if((!G__28483.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__28483);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__28483);
}
})()))
{return not_found;
} else
{var m__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core.first(ks__$1),sentinel);if((sentinel === m__$2))
{return not_found;
} else
{{
var G__28484 = sentinel;
var G__28485 = m__$2;
var G__28486 = cljs.core.next(ks__$1);
sentinel = G__28484;
m__$1 = G__28485;
ks__$1 = G__28486;
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
cljs.core.assoc_in = (function assoc_in(m,p__28487,v){var vec__28492 = p__28487;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28492,(0),null);var ks = cljs.core.nthnext(vec__28492,(1));if(ks)
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
var update_in__3 = (function (m,p__28493,f){var vec__28531 = p__28493;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28531,(0),null);var ks = cljs.core.nthnext(vec__28531,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__28532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28532) : f.call(null,G__28532));
})());
}
});
var update_in__4 = (function (m,p__28494,f,a){var vec__28533 = p__28494;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28533,(0),null);var ks = cljs.core.nthnext(vec__28533,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__28534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__28535 = a;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28534,G__28535) : f.call(null,G__28534,G__28535));
})());
}
});
var update_in__5 = (function (m,p__28495,f,a,b){var vec__28536 = p__28495;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28536,(0),null);var ks = cljs.core.nthnext(vec__28536,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__28537 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__28538 = a;var G__28539 = b;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__28537,G__28538,G__28539) : f.call(null,G__28537,G__28538,G__28539));
})());
}
});
var update_in__6 = (function (m,p__28496,f,a,b,c){var vec__28540 = p__28496;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28540,(0),null);var ks = cljs.core.nthnext(vec__28540,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$6(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b,c));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__28541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__28542 = a;var G__28543 = b;var G__28544 = c;return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__28541,G__28542,G__28543,G__28544) : f.call(null,G__28541,G__28542,G__28543,G__28544));
})());
}
});
var update_in__7 = (function() { 
var G__28546__delegate = function (m,p__28497,f,a,b,c,args){var vec__28545 = p__28497;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28545,(0),null);var ks = cljs.core.nthnext(vec__28545,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(update_in,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,cljs.core.array_seq([b,c,args], 0)));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),a,b,c,cljs.core.array_seq([args], 0)));
}
};
var G__28546 = function (m,p__28497,f,a,b,c,var_args){
var args = null;if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return G__28546__delegate.call(this,m,p__28497,f,a,b,c,args);};
G__28546.cljs$lang$maxFixedArity = 6;
G__28546.cljs$lang$applyTo = (function (arglist__28547){
var m = cljs.core.first(arglist__28547);
arglist__28547 = cljs.core.next(arglist__28547);
var p__28497 = cljs.core.first(arglist__28547);
arglist__28547 = cljs.core.next(arglist__28547);
var f = cljs.core.first(arglist__28547);
arglist__28547 = cljs.core.next(arglist__28547);
var a = cljs.core.first(arglist__28547);
arglist__28547 = cljs.core.next(arglist__28547);
var b = cljs.core.first(arglist__28547);
arglist__28547 = cljs.core.next(arglist__28547);
var c = cljs.core.first(arglist__28547);
var args = cljs.core.rest(arglist__28547);
return G__28546__delegate(m,p__28497,f,a,b,c,args);
});
G__28546.cljs$core$IFn$_invoke$arity$variadic = G__28546__delegate;
return G__28546;
})()
;
update_in = function(m,p__28497,f,a,b,c,var_args){
var args = var_args;
switch(arguments.length){
case 3:
return update_in__3.call(this,m,p__28497,f);
case 4:
return update_in__4.call(this,m,p__28497,f,a);
case 5:
return update_in__5.call(this,m,p__28497,f,a,b);
case 6:
return update_in__6.call(this,m,p__28497,f,a,b,c);
default:
return update_in__7.cljs$core$IFn$_invoke$arity$variadic(m,p__28497,f,a,b,c, cljs.core.array_seq(arguments, 6));
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
cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__20769__auto__,writer__20770__auto__,opts__20771__auto__){return cljs.core._write(writer__20770__auto__,"cljs.core/VectorNode");
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
var G__28548 = (ll - (5));
var G__28549 = r;
ll = G__28548;
ret = G__28549;
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
var G__28554 = cljs.core.pv_aget(node,(0));
var G__28555 = (level - (5));
node = G__28554;
level = G__28555;
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
var G__28556 = cljs.core.pv_aget(node,((i >>> level) & (31)));
var G__28557 = (level - (5));
node = G__28556;
level = G__28557;
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
cljs.core.RangedIterator.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/RangedIterator");
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
cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/PersistentVector");
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
{var init__$3 = (function (){var G__28567 = init__$2;var G__28568 = (j + i);var G__28569 = (arr[j]);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__28567,G__28568,G__28569) : f.call(null,G__28567,G__28568,G__28569));
})();if(cljs.core.reduced_QMARK_(init__$3))
{return init__$3;
} else
{{
var G__28580 = (j + (1));
var G__28581 = init__$3;
j = G__28580;
init__$2 = G__28581;
continue;
}
}
} else
{return init__$2;
}
break;
}
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__28570 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28570) : cljs.core.deref.call(null,G__28570));
} else
{{
var G__28582 = (i + len);
var G__28583 = init__$2;
i = G__28582;
init__$1 = G__28583;
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
var coll__$1 = this;var h__20522__auto__ = self__.__hash;if(!((h__20522__auto__ == null)))
{return h__20522__auto__;
} else
{var h__20522__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20522__auto____$1;
return h__20522__auto____$1;
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
var coll__$1 = this;return (new cljs.core.TransientVector(self__.cnt,self__.shift,(function (){var G__28571 = self__.root;return (cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1(G__28571) : cljs.core.tv_editable_root.call(null,G__28571));
})(),(function (){var G__28572 = self__.tail;return (cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1(G__28572) : cljs.core.tv_editable_tail.call(null,G__28572));
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
{var init__$3 = (function (){var G__28573 = init__$2;var G__28574 = (arr[j]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28573,G__28574) : f.call(null,G__28573,G__28574));
})();if(cljs.core.reduced_QMARK_(init__$3))
{return init__$3;
} else
{{
var G__28584 = (j + (1));
var G__28585 = init__$3;
j = G__28584;
init__$2 = G__28585;
continue;
}
}
} else
{return init__$2;
}
break;
}
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__28575 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28575) : cljs.core.deref.call(null,G__28575));
} else
{{
var G__28586 = (i + len);
var G__28587 = init__$2;
i = G__28586;
init__$1 = G__28587;
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
{var G__28576 = coll__$1;var G__28577 = cljs.core.first_array_for_longvec(coll__$1);var G__28578 = (0);var G__28579 = (0);return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__28576,G__28577,G__28578,G__28579) : cljs.core.chunked_seq.call(null,G__28576,G__28577,G__28578,G__28579));

}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentVector(meta__$1,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;if(((self__.cnt - cljs.core.tail_off(coll__$1)) < (32)))
{var len = self__.tail.length;var new_tail = (new Array((len + (1))));var n__21341__auto___28588 = len;var i_28589 = (0);while(true){
if((i_28589 < n__21341__auto___28588))
{(new_tail[i_28589] = (self__.tail[i_28589]));
{
var G__28590 = (i_28589 + (1));
i_28589 = G__28590;
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
var G__28591 = null;
var G__28591__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__28591__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__28591 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__28591__2.call(this,self__,k);
case 3:
return G__28591__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28591.cljs$core$IFn$_invoke$arity$2 = G__28591__2;
G__28591.cljs$core$IFn$_invoke$arity$3 = G__28591__3;
return G__28591;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (self__,args28566){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28566)));
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
var G__28592 = (i + (1));
var G__28593 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,(xs__$1[i]));
i = G__28592;
out = G__28593;
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
vector.cljs$lang$applyTo = (function (arglist__28594){
var args = cljs.core.seq(arglist__28594);
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
cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/ChunkedSeq");
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
{var s = (function (){var G__28595 = self__.vec;var G__28596 = self__.node;var G__28597 = self__.i;var G__28598 = (self__.off + (1));return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__28595,G__28596,G__28597,G__28598) : cljs.core.chunked_seq.call(null,G__28595,G__28596,G__28597,G__28598));
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
var coll__$1 = this;var h__20522__auto__ = self__.__hash;if(!((h__20522__auto__ == null)))
{return h__20522__auto__;
} else
{var h__20522__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20522__auto____$1;
return h__20522__auto____$1;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2((function (){var G__28599 = self__.vec;var G__28600 = (self__.i + self__.off);var G__28601 = cljs.core.count(self__.vec);return (cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__28599,G__28600,G__28601) : cljs.core.subvec.call(null,G__28599,G__28600,G__28601));
})(),f);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3((function (){var G__28602 = self__.vec;var G__28603 = (self__.i + self__.off);var G__28604 = cljs.core.count(self__.vec);return (cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__28602,G__28603,G__28604) : cljs.core.subvec.call(null,G__28602,G__28603,G__28604));
})(),f,start);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (self__.node[self__.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(((self__.off + (1)) < self__.node.length))
{var s = (function (){var G__28605 = self__.vec;var G__28606 = self__.node;var G__28607 = self__.i;var G__28608 = (self__.off + (1));return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__28605,G__28606,G__28607,G__28608) : cljs.core.chunked_seq.call(null,G__28605,G__28606,G__28607,G__28608));
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
{var G__28609 = self__.vec;var G__28610 = cljs.core.unchecked_array_for(self__.vec,end);var G__28611 = end;var G__28612 = (0);return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__28609,G__28610,G__28611,G__28612) : cljs.core.chunked_seq.call(null,G__28609,G__28610,G__28611,G__28612));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){var self__ = this;
var coll__$1 = this;var G__28613 = self__.vec;var G__28614 = self__.node;var G__28615 = self__.i;var G__28616 = self__.off;var G__28617 = m;return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5(G__28613,G__28614,G__28615,G__28616,G__28617) : cljs.core.chunked_seq.call(null,G__28613,G__28614,G__28615,G__28616,G__28617));
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var end = (self__.i + self__.node.length);if((end < cljs.core._count(self__.vec)))
{var G__28618 = self__.vec;var G__28619 = cljs.core.unchecked_array_for(self__.vec,end);var G__28620 = end;var G__28621 = (0);return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__28618,G__28619,G__28620,G__28621) : cljs.core.chunked_seq.call(null,G__28618,G__28619,G__28620,G__28621));
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
cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/Subvec");
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
var coll__$1 = this;var v_pos = (self__.start + n);var G__28623 = self__.meta;var G__28624 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.v,v_pos,val);var G__28625 = self__.start;var G__28626 = (function (){var x__20308__auto__ = self__.end;var y__20309__auto__ = (v_pos + (1));return ((x__20308__auto__ > y__20309__auto__) ? x__20308__auto__ : y__20309__auto__);
})();var G__28627 = null;return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__28623,G__28624,G__28625,G__28626,G__28627) : cljs.core.build_subvec.call(null,G__28623,G__28624,G__28625,G__28626,G__28627));
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
{var G__28628 = self__.meta;var G__28629 = self__.v;var G__28630 = self__.start;var G__28631 = (self__.end - (1));var G__28632 = null;return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__28628,G__28629,G__28630,G__28631,G__28632) : cljs.core.build_subvec.call(null,G__28628,G__28629,G__28630,G__28631,G__28632));
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
var coll__$1 = this;var h__20522__auto__ = self__.__hash;if(!((h__20522__auto__ == null)))
{return h__20522__auto__;
} else
{var h__20522__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20522__auto____$1;
return h__20522__auto____$1;
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
var coll__$1 = this;var G__28634 = meta__$1;var G__28635 = self__.v;var G__28636 = self__.start;var G__28637 = self__.end;var G__28638 = self__.__hash;return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__28634,G__28635,G__28636,G__28637,G__28638) : cljs.core.build_subvec.call(null,G__28634,G__28635,G__28636,G__28637,G__28638));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;var G__28639 = self__.meta;var G__28640 = cljs.core._assoc_n(self__.v,self__.end,o);var G__28641 = self__.start;var G__28642 = (self__.end + (1));var G__28643 = null;return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__28639,G__28640,G__28641,G__28642,G__28643) : cljs.core.build_subvec.call(null,G__28639,G__28640,G__28641,G__28642,G__28643));
});
cljs.core.Subvec.prototype.call = (function() {
var G__28644 = null;
var G__28644__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__28644__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__28644 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__28644__2.call(this,self__,k);
case 3:
return G__28644__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28644.cljs$core$IFn$_invoke$arity$2 = G__28644__2;
G__28644.cljs$core$IFn$_invoke$arity$3 = G__28644__3;
return G__28644;
})()
;
cljs.core.Subvec.prototype.apply = (function (self__,args28622){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28622)));
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
var G__28645 = meta;
var G__28646 = v.v;
var G__28647 = (v.start + start);
var G__28648 = (v.start + end);
var G__28649 = __hash;
meta = G__28645;
v = G__28646;
start = G__28647;
end = G__28648;
__hash = G__28649;
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
cljs.core.tv_editable_root = (function tv_editable_root(node){return (new cljs.core.VectorNode((function (){var obj28656 = {};return obj28656;
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
var G__28664 = cljs.core.tv_ensure_editable(root.edit,cljs.core.pv_aget(node,((i >>> level) & (31))));
var G__28665 = (level - (5));
node = G__28664;
level = G__28665;
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
cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__28669 = null;
var G__28669__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__28669__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__28669 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__28669__2.call(this,self__,k);
case 3:
return G__28669__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28669.cljs$core$IFn$_invoke$arity$2 = G__28669__2;
G__28669.cljs$core$IFn$_invoke$arity$3 = G__28669__3;
return G__28669;
})()
;
cljs.core.TransientVector.prototype.apply = (function (self__,args28666){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28666)));
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
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/PersistentQueueSeq");
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
var coll__$1 = this;var h__20522__auto__ = self__.__hash;if(!((h__20522__auto__ == null)))
{return h__20522__auto__;
} else
{var h__20522__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20522__auto____$1;
return h__20522__auto____$1;
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
cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/PersistentQueue");
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
var coll__$1 = this;var h__20522__auto__ = self__.__hash;if(!((h__20522__auto__ == null)))
{return h__20522__auto__;
} else
{var h__20522__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20522__auto____$1;
return h__20522__auto____$1;
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
var coll__$1 = this;var rear__$1 = cljs.core.seq(self__.rear);if(cljs.core.truth_((function (){var or__19663__auto__ = self__.front;if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
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
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),self__.front,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__19663__auto__ = self__.rear;if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
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
cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/NeverEquiv");
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
var G__28670 = (i + incr);
i = G__28670;
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
var G__28671 = (i + (1));
var G__28672 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,k__$1,(so[k__$1]));
i = G__28671;
out = G__28672;
continue;
}
} else
{return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,k,v)),mm);
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){var new_obj = (function (){var obj28676 = {};return obj28676;
})();var l = ks.length;var i_28677 = (0);while(true){
if((i_28677 < l))
{var k_28678 = (ks[i_28677]);(new_obj[k_28678] = (obj[k_28678]));
{
var G__28679 = (i_28677 + (1));
i_28677 = G__28679;
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
cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/ObjMap");
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
var coll__$1 = this;if(cljs.core.truth_((function (){var and__19621__auto__ = (function (){var G__28683 = k;return goog.isString(G__28683);
})();if(cljs.core.truth_(and__19621__auto__))
{return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else
{return and__19621__auto__;
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
{var k = cljs.core.first(keys__$1);var init__$2 = (function (){var G__28684 = init__$1;var G__28685 = k;var G__28686 = (self__.strobj[k]);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__28684,G__28685,G__28686) : f.call(null,G__28684,G__28685,G__28686));
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__28687 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28687) : cljs.core.deref.call(null,G__28687));
} else
{{
var G__28693 = cljs.core.rest(keys__$1);
var G__28694 = init__$2;
keys__$1 = G__28693;
init__$1 = G__28694;
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
var coll__$1 = this;var h__20522__auto__ = self__.__hash;if(!((h__20522__auto__ == null)))
{return h__20522__auto__;
} else
{var h__20522__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__20522__auto____$1;
return h__20522__auto____$1;
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
var coll__$1 = this;if(cljs.core.truth_((function (){var and__19621__auto__ = (function (){var G__28689 = k;return goog.isString(G__28689);
})();if(cljs.core.truth_(and__19621__auto__))
{return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else
{return and__19621__auto__;
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
var coll__$1 = this;if(cljs.core.truth_((function (){var G__28690 = k;return goog.isString(G__28690);
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
var coll__$1 = this;if(cljs.core.truth_((function (){var and__19621__auto__ = (function (){var G__28692 = k;return goog.isString(G__28692);
})();if(cljs.core.truth_(and__19621__auto__))
{return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else
{return and__19621__auto__;
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
return (function (p1__28680_SHARP_){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__28680_SHARP_,(self__.strobj[p1__28680_SHARP_])],null));
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
var G__28695 = null;
var G__28695__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__28695__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__28695 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__28695__2.call(this,self__,k);
case 3:
return G__28695__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28695.cljs$core$IFn$_invoke$arity$2 = G__28695__2;
G__28695.cljs$core$IFn$_invoke$arity$3 = G__28695__3;
return G__28695;
})()
;
cljs.core.ObjMap.prototype.apply = (function (self__,args28681){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28681)));
});
cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_ObjMap = (function __GT_ObjMap(meta,keys,strobj,update_count,__hash){return (new cljs.core.ObjMap(meta,keys,strobj,update_count,__hash));
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],(function (){var obj28697 = {};return obj28697;
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
cljs.core.ES6Iterator.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/ES6Iterator");
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
cljs.core.ES6EntriesIterator.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/ES6EntriesIterator");
});
cljs.core.ES6EntriesIterator.prototype.next = (function (){var self__ = this;
var _ = this;if(!((self__.s == null)))
{var vec__28698 = cljs.core.first(self__.s);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28698,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28698,(1),null);self__.s = cljs.core.next(self__.s);
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
cljs.core.ES6SetEntriesIterator.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/ES6SetEntriesIterator");
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
var G__28699 = (i + (2));
i = G__28699;
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
var G__28700 = (i + (2));
i = G__28700;
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
var G__28701 = (i + (2));
i = G__28701;
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
var G__28702 = (i + (2));
i = G__28702;
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
var G__28703 = (i + (2));
i = G__28703;
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
{if(cljs.core.truth_((function (){var or__19663__auto__ = (function (){var G__28707 = k;return goog.isString(G__28707);
})();if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
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
cljs.core.array_map_extend_kv = (function array_map_extend_kv(m,k,v){var arr = m.arr;var l = arr.length;var narr = (new Array((l + (2))));var i_28708 = (0);while(true){
if((i_28708 < l))
{(narr[i_28708] = (arr[i_28708]));
{
var G__28709 = (i_28708 + (1));
i_28708 = G__28709;
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
cljs.core.PersistentArrayMapSeq.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/PersistentArrayMapSeq");
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
cljs.core.PersistentArrayMapIterator.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/PersistentArrayMapIterator");
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
cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentArrayMap.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentArrayMap.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator((function (){var G__28711 = coll;return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__28711) : cljs.core.keys.call(null,G__28711));
})());
});
cljs.core.PersistentArrayMap.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentArrayMap.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator((function (){var G__28712 = coll;return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__28712) : cljs.core.vals.call(null,G__28712));
})());
});
cljs.core.PersistentArrayMap.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentArrayMap.prototype.get = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentArrayMap.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__28713 = cljs.core.seq(coll);var chunk__28714 = null;var count__28715 = (0);var i__28716 = (0);while(true){
if((i__28716 < count__28715))
{var vec__28717 = chunk__28714.cljs$core$IIndexed$_nth$arity$2(null,i__28716);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28717,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28717,(1),null);var G__28718_28731 = v;var G__28719_28732 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28718_28731,G__28719_28732) : f.call(null,G__28718_28731,G__28719_28732));
{
var G__28733 = seq__28713;
var G__28734 = chunk__28714;
var G__28735 = count__28715;
var G__28736 = (i__28716 + (1));
seq__28713 = G__28733;
chunk__28714 = G__28734;
count__28715 = G__28735;
i__28716 = G__28736;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__28713);if(temp__4126__auto__)
{var seq__28713__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__28713__$1))
{var c__21126__auto__ = cljs.core.chunk_first(seq__28713__$1);{
var G__28737 = cljs.core.chunk_rest(seq__28713__$1);
var G__28738 = c__21126__auto__;
var G__28739 = cljs.core.count(c__21126__auto__);
var G__28740 = (0);
seq__28713 = G__28737;
chunk__28714 = G__28738;
count__28715 = G__28739;
i__28716 = G__28740;
continue;
}
} else
{var vec__28720 = cljs.core.first(seq__28713__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28720,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28720,(1),null);var G__28721_28741 = v;var G__28722_28742 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28721_28741,G__28722_28742) : f.call(null,G__28721_28741,G__28722_28742));
{
var G__28743 = cljs.core.next(seq__28713__$1);
var G__28744 = null;
var G__28745 = (0);
var G__28746 = (0);
seq__28713 = G__28743;
chunk__28714 = G__28744;
count__28715 = G__28745;
i__28716 = G__28746;
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
{var init__$2 = (function (){var G__28723 = init__$1;var G__28724 = (self__.arr[i]);var G__28725 = (self__.arr[(i + (1))]);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__28723,G__28724,G__28725) : f.call(null,G__28723,G__28724,G__28725));
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__28726 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28726) : cljs.core.deref.call(null,G__28726));
} else
{{
var G__28747 = (i + (2));
var G__28748 = init__$2;
i = G__28747;
init__$1 = G__28748;
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
var coll__$1 = this;var h__20522__auto__ = self__.__hash;if(!((h__20522__auto__ == null)))
{return h__20522__auto__;
} else
{var h__20522__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__20522__auto____$1;
return h__20522__auto____$1;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;if((function (){var G__28727 = other;if(G__28727)
{var bit__20884__auto__ = (G__28727.cljs$lang$protocol_mask$partition0$ & (1024));if((bit__20884__auto__) || (G__28727.cljs$core$IMap$))
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
var G__28749 = (i + (2));
i = G__28749;
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
var coll__$1 = this;return (new cljs.core.TransientArrayMap((function (){var obj28729 = {};return obj28729;
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
var G__28750 = (s + (2));
var G__28751 = d;
s = G__28750;
d = G__28751;
continue;
}
} else
{(new_arr[d] = (self__.arr[s]));
(new_arr[(d + (1))] = (self__.arr[(s + (1))]));
{
var G__28752 = (s + (2));
var G__28753 = (d + (2));
s = G__28752;
d = G__28753;
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
{var arr__$1 = (function (){var G__28730 = cljs.core.aclone(self__.arr);(G__28730[(idx + (1))] = v);
return G__28730;
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
var G__28754 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__28755 = cljs.core.next(es);
ret = G__28754;
es = G__28755;
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
var G__28756 = null;
var G__28756__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__28756__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__28756 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__28756__2.call(this,self__,k);
case 3:
return G__28756__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28756.cljs$core$IFn$_invoke$arity$2 = G__28756__2;
G__28756.cljs$core$IFn$_invoke$arity$3 = G__28756__3;
return G__28756;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (self__,args28710){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28710)));
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
var G__28757 = (i + (2));
var G__28758 = cljs.core._assoc_BANG_(ret,(arr__$1[i]),(arr__$1[(i + (1))]));
i = G__28757;
ret = G__28758;
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
cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of(tcoll__$1,key);if((idx >= (0)))
{(self__.arr[idx] = (self__.arr[(self__.len - (2))]));
(self__.arr[(idx + (1))] = (self__.arr[(self__.len - (1))]));
var G__28759_28767 = self__.arr;G__28759_28767.pop();
G__28759_28767.pop();
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
{return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3((function (){var G__28760 = self__.len;var G__28761 = self__.arr;return (cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2 ? cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2(G__28760,G__28761) : cljs.core.array__GT_transient_hash_map.call(null,G__28760,G__28761));
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
{if((function (){var G__28762 = o;if(G__28762)
{var bit__20917__auto__ = (G__28762.cljs$lang$protocol_mask$partition0$ & (2048));if((bit__20917__auto__) || (G__28762.cljs$core$IMapEntry$))
{return true;
} else
{if((!G__28762.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__28762);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__28762);
}
})())
{return cljs.core._assoc_BANG_(tcoll__$1,(function (){var G__28763 = o;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__28763) : cljs.core.key.call(null,G__28763));
})(),(function (){var G__28764 = o;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__28764) : cljs.core.val.call(null,G__28764));
})());
} else
{var es = cljs.core.seq(o);var tcoll__$2 = tcoll__$1;while(true){
var temp__4124__auto__ = cljs.core.first(es);if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;{
var G__28768 = cljs.core.next(es);
var G__28769 = cljs.core._assoc_BANG_(tcoll__$2,(function (){var G__28765 = e;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__28765) : cljs.core.key.call(null,G__28765));
})(),(function (){var G__28766 = e;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__28766) : cljs.core.val.call(null,G__28766));
})());
es = G__28768;
tcoll__$2 = G__28769;
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
var G__28770 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,(arr[i]),(arr[(i + (1))]));
var G__28771 = (i + (2));
out = G__28770;
i = G__28771;
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
cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__20769__auto__,writer__20770__auto__,opts__20771__auto__){return cljs.core._write(writer__20770__auto__,"cljs.core/Box");
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
var clone_and_set__3 = (function (arr,i,a){var G__28774 = cljs.core.aclone(arr);(G__28774[i] = a);
return G__28774;
});
var clone_and_set__5 = (function (arr,i,a,j,b){var G__28775 = cljs.core.aclone(arr);(G__28775[i] = a);
(G__28775[j] = b);
return G__28775;
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
{var G__28780 = init__$1;var G__28781 = k;var G__28782 = (arr[(i + (1))]);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__28780,G__28781,G__28782) : f.call(null,G__28780,G__28781,G__28782));
} else
{var node = (arr[(i + (1))]);if(!((node == null)))
{return node.kv_reduce(f,init__$1);
} else
{return init__$1;
}
}
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__28783 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28783) : cljs.core.deref.call(null,G__28783));
} else
{{
var G__28784 = (i + (2));
var G__28785 = init__$2;
i = G__28784;
init__$1 = G__28785;
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
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/BitmapIndexedNode");
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
var inode = this;var G__28786 = self__.arr;return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(G__28786) : cljs.core.create_inode_seq.call(null,G__28786));
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
var i_28800 = (0);var j_28801 = (0);while(true){
if((i_28800 < (32)))
{if((((self__.bitmap >>> i_28800) & (1)) === (0)))
{{
var G__28802 = (i_28800 + (1));
var G__28803 = j_28801;
i_28800 = G__28802;
j_28801 = G__28803;
continue;
}
} else
{(nodes[i_28800] = ((!(((self__.arr[j_28801]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),cljs.core.hash((self__.arr[j_28801])),(self__.arr[j_28801]),(self__.arr[(j_28801 + (1))]),added_leaf_QMARK_):(self__.arr[(j_28801 + (1))])));
{
var G__28804 = (i_28800 + (1));
var G__28805 = (j_28801 + (2));
i_28800 = G__28804;
j_28801 = G__28805;
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
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(inode,edit__$1,((2) * idx),null,(((2) * idx) + (1)),(function (){var G__28787 = edit__$1;var G__28788 = (shift + (5));var G__28789 = key_or_nil;var G__28790 = val_or_node;var G__28791 = hash;var G__28792 = key;var G__28793 = val;return (cljs.core.create_node.cljs$core$IFn$_invoke$arity$7 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$7(G__28787,G__28788,G__28789,G__28790,G__28791,G__28792,G__28793) : cljs.core.create_node.call(null,G__28787,G__28788,G__28789,G__28790,G__28791,G__28792,G__28793));
})());

}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);if(((self__.bitmap & bit) === (0)))
{var n = cljs.core.bit_count(self__.bitmap);if((n >= (16)))
{var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var jdx = ((hash >>> shift) & 0x01f);(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_));
var i_28806 = (0);var j_28807 = (0);while(true){
if((i_28806 < (32)))
{if((((self__.bitmap >>> i_28806) & (1)) === (0)))
{{
var G__28808 = (i_28806 + (1));
var G__28809 = j_28807;
i_28806 = G__28808;
j_28807 = G__28809;
continue;
}
} else
{(nodes[i_28806] = ((!(((self__.arr[j_28807]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),cljs.core.hash((self__.arr[j_28807])),(self__.arr[j_28807]),(self__.arr[(j_28807 + (1))]),added_leaf_QMARK_):(self__.arr[(j_28807 + (1))])));
{
var G__28810 = (i_28806 + (1));
var G__28811 = (j_28807 + (2));
i_28806 = G__28810;
j_28807 = G__28811;
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
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$5(self__.arr,((2) * idx),null,(((2) * idx) + (1)),(function (){var G__28794 = (shift + (5));var G__28795 = key_or_nil;var G__28796 = val_or_node;var G__28797 = hash;var G__28798 = key;var G__28799 = val;return (cljs.core.create_node.cljs$core$IFn$_invoke$arity$6 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$6(G__28794,G__28795,G__28796,G__28797,G__28798,G__28799) : cljs.core.create_node.call(null,G__28794,G__28795,G__28796,G__28797,G__28798,G__28799));
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
var G__28812 = (i + (1));
var G__28813 = (j + (2));
var G__28814 = (bitmap | ((1) << i));
i = G__28812;
j = G__28813;
bitmap = G__28814;
continue;
}
} else
{{
var G__28815 = (i + (1));
var G__28816 = j;
var G__28817 = bitmap;
i = G__28815;
j = G__28816;
bitmap = G__28817;
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
cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/ArrayNode");
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
var inode = this;var G__28818 = self__.arr;return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1(G__28818) : cljs.core.create_array_node_seq.call(null,G__28818));
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var inode = this;var len = self__.arr.length;var i = (0);var init__$1 = init;while(true){
if((i < len))
{var node = (self__.arr[i]);if(!((node == null)))
{var init__$2 = node.kv_reduce(f,init__$1);if(cljs.core.reduced_QMARK_(init__$2))
{var G__28819 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28819) : cljs.core.deref.call(null,G__28819));
} else
{{
var G__28820 = (i + (1));
var G__28821 = init__$2;
i = G__28820;
init__$1 = G__28821;
continue;
}
}
} else
{{
var G__28822 = (i + (1));
var G__28823 = init__$1;
i = G__28822;
init__$1 = G__28823;
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
var G__28824 = (i + (2));
i = G__28824;
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
cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/HashCollisionNode");
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
var inode = this;var G__28825 = self__.arr;return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(G__28825) : cljs.core.create_inode_seq.call(null,G__28825));
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
cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/NodeSeq");
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
var coll__$1 = this;var h__20522__auto__ = self__.__hash;if(!((h__20522__auto__ == null)))
{return h__20522__auto__;
} else
{var h__20522__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20522__auto____$1;
return h__20522__auto____$1;
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
{var G__28826 = self__.nodes;var G__28827 = (self__.i + (2));var G__28828 = null;return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(G__28826,G__28827,G__28828) : cljs.core.create_inode_seq.call(null,G__28826,G__28827,G__28828));
} else
{var G__28829 = self__.nodes;var G__28830 = self__.i;var G__28831 = cljs.core.next(self__.s);return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(G__28829,G__28830,G__28831) : cljs.core.create_inode_seq.call(null,G__28829,G__28830,G__28831));
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
var G__28835 = (j + (2));
j = G__28835;
continue;
}
}
} else
{{
var G__28836 = (j + (2));
j = G__28836;
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
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/ArrayNodeSeq");
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
var coll__$1 = this;var h__20522__auto__ = self__.__hash;if(!((h__20522__auto__ == null)))
{return h__20522__auto__;
} else
{var h__20522__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20522__auto____$1;
return h__20522__auto____$1;
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
var coll__$1 = this;var G__28837 = null;var G__28838 = self__.nodes;var G__28839 = self__.i;var G__28840 = cljs.core.next(self__.s);return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4(G__28837,G__28838,G__28839,G__28840) : cljs.core.create_array_node_seq.call(null,G__28837,G__28838,G__28839,G__28840));
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
var G__28845 = (j + (1));
j = G__28845;
continue;
}
}
} else
{{
var G__28846 = (j + (1));
j = G__28846;
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
cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentHashMap.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentHashMap.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator((function (){var G__28848 = coll;return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__28848) : cljs.core.keys.call(null,G__28848));
})());
});
cljs.core.PersistentHashMap.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentHashMap.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator((function (){var G__28849 = coll;return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__28849) : cljs.core.vals.call(null,G__28849));
})());
});
cljs.core.PersistentHashMap.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentHashMap.prototype.get = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentHashMap.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__28850 = cljs.core.seq(coll);var chunk__28851 = null;var count__28852 = (0);var i__28853 = (0);while(true){
if((i__28853 < count__28852))
{var vec__28854 = chunk__28851.cljs$core$IIndexed$_nth$arity$2(null,i__28853);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28854,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28854,(1),null);var G__28855_28866 = v;var G__28856_28867 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28855_28866,G__28856_28867) : f.call(null,G__28855_28866,G__28856_28867));
{
var G__28868 = seq__28850;
var G__28869 = chunk__28851;
var G__28870 = count__28852;
var G__28871 = (i__28853 + (1));
seq__28850 = G__28868;
chunk__28851 = G__28869;
count__28852 = G__28870;
i__28853 = G__28871;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__28850);if(temp__4126__auto__)
{var seq__28850__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__28850__$1))
{var c__21126__auto__ = cljs.core.chunk_first(seq__28850__$1);{
var G__28872 = cljs.core.chunk_rest(seq__28850__$1);
var G__28873 = c__21126__auto__;
var G__28874 = cljs.core.count(c__21126__auto__);
var G__28875 = (0);
seq__28850 = G__28872;
chunk__28851 = G__28873;
count__28852 = G__28874;
i__28853 = G__28875;
continue;
}
} else
{var vec__28857 = cljs.core.first(seq__28850__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28857,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28857,(1),null);var G__28858_28876 = v;var G__28859_28877 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28858_28876,G__28859_28877) : f.call(null,G__28858_28876,G__28859_28877));
{
var G__28878 = cljs.core.next(seq__28850__$1);
var G__28879 = null;
var G__28880 = (0);
var G__28881 = (0);
seq__28850 = G__28878;
chunk__28851 = G__28879;
count__28852 = G__28880;
i__28853 = G__28881;
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
var coll__$1 = this;var init__$1 = ((self__.has_nil_QMARK_)?(function (){var G__28860 = init;var G__28861 = null;var G__28862 = self__.nil_val;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__28860,G__28861,G__28862) : f.call(null,G__28860,G__28861,G__28862));
})():init);if(cljs.core.reduced_QMARK_(init__$1))
{var G__28863 = init__$1;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28863) : cljs.core.deref.call(null,G__28863));
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
var coll__$1 = this;var h__20522__auto__ = self__.__hash;if(!((h__20522__auto__ == null)))
{return h__20522__auto__;
} else
{var h__20522__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__20522__auto____$1;
return h__20522__auto____$1;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_map(coll__$1,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientHashMap((function (){var obj28865 = {};return obj28865;
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
var G__28882 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__28883 = cljs.core.next(es);
ret = G__28882;
es = G__28883;
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
var G__28884 = null;
var G__28884__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__28884__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__28884 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__28884__2.call(this,self__,k);
case 3:
return G__28884__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28884.cljs$core$IFn$_invoke$arity$2 = G__28884__2;
G__28884.cljs$core$IFn$_invoke$arity$3 = G__28884__3;
return G__28884;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (self__,args28847){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28847)));
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
var G__28885 = (i + (1));
var G__28886 = out.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(null,(ks[i]),(vs[i]));
i = G__28885;
out = G__28886;
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
cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/TransientHashMap");
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
{if((function (){var G__28887 = o;if(G__28887)
{var bit__20917__auto__ = (G__28887.cljs$lang$protocol_mask$partition0$ & (2048));if((bit__20917__auto__) || (G__28887.cljs$core$IMapEntry$))
{return true;
} else
{if((!G__28887.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__28887);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__28887);
}
})())
{return tcoll.assoc_BANG_((function (){var G__28888 = o;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__28888) : cljs.core.key.call(null,G__28888));
})(),(function (){var G__28889 = o;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__28889) : cljs.core.val.call(null,G__28889));
})());
} else
{var es = cljs.core.seq(o);var tcoll__$1 = tcoll;while(true){
var temp__4124__auto__ = cljs.core.first(es);if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;{
var G__28892 = cljs.core.next(es);
var G__28893 = tcoll__$1.assoc_BANG_((function (){var G__28890 = e;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__28890) : cljs.core.key.call(null,G__28890));
})(),(function (){var G__28891 = e;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__28891) : cljs.core.val.call(null,G__28891));
})());
es = G__28892;
tcoll__$1 = G__28893;
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
var G__28894 = ((ascending_QMARK_)?t.left:t.right);
var G__28895 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack__$1,t);
t = G__28894;
stack__$1 = G__28895;
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
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/PersistentTreeMapSeq");
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
var coll__$1 = this;var h__20522__auto__ = self__.__hash;if(!((h__20522__auto__ == null)))
{return h__20522__auto__;
} else
{var h__20522__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20522__auto____$1;
return h__20522__auto____$1;
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
{var G__28908 = init__$1;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28908) : cljs.core.deref.call(null,G__28908));
} else
{var init__$2 = (function (){var G__28909 = init__$1;var G__28910 = node.key;var G__28911 = node.val;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__28909,G__28910,G__28911) : f.call(null,G__28909,G__28910,G__28911));
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__28912 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28912) : cljs.core.deref.call(null,G__28912));
} else
{var init__$3 = ((!((node.right == null)))?tree_map_kv_reduce(node.right,f,init__$2):init__$2);if(cljs.core.reduced_QMARK_(init__$3))
{var G__28913 = init__$3;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28913) : cljs.core.deref.call(null,G__28913));
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
cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/BlackNode");
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
var coll__$1 = this;var h__20522__auto__ = self__.__hash;if(!((h__20522__auto__ == null)))
{return h__20522__auto__;
} else
{var h__20522__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20522__auto____$1;
return h__20522__auto____$1;
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
var G__28915 = null;
var G__28915__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__28915__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__28915 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__28915__2.call(this,self__,k);
case 3:
return G__28915__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28915.cljs$core$IFn$_invoke$arity$2 = G__28915__2;
G__28915.cljs$core$IFn$_invoke$arity$3 = G__28915__3;
return G__28915;
})()
;
cljs.core.BlackNode.prototype.apply = (function (self__,args28914){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28914)));
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
cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/RedNode");
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
var coll__$1 = this;var h__20522__auto__ = self__.__hash;if(!((h__20522__auto__ == null)))
{return h__20522__auto__;
} else
{var h__20522__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__20522__auto____$1;
return h__20522__auto____$1;
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
var G__28917 = null;
var G__28917__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__28917__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__28917 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__28917__2.call(this,self__,k);
case 3:
return G__28917__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28917.cljs$core$IFn$_invoke$arity$2 = G__28917__2;
G__28917.cljs$core$IFn$_invoke$arity$3 = G__28917__3;
return G__28917;
})()
;
cljs.core.RedNode.prototype.apply = (function (self__,args28916){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28916)));
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
{var c = (function (){var G__28930 = k;var G__28931 = tree.key;return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__28930,G__28931) : comp.call(null,G__28930,G__28931));
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
{var c = (function (){var G__28950 = k;var G__28951 = tree.key;return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__28950,G__28951) : comp.call(null,G__28950,G__28951));
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
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){var tk = tree.key;var c = (function (){var G__28962 = k;var G__28963 = tk;return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__28962,G__28963) : comp.call(null,G__28962,G__28963));
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
cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__28965 = cljs.core.seq(coll);var chunk__28966 = null;var count__28967 = (0);var i__28968 = (0);while(true){
if((i__28968 < count__28967))
{var vec__28969 = chunk__28966.cljs$core$IIndexed$_nth$arity$2(null,i__28968);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28969,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28969,(1),null);var G__28970_28982 = v;var G__28971_28983 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28970_28982,G__28971_28983) : f.call(null,G__28970_28982,G__28971_28983));
{
var G__28984 = seq__28965;
var G__28985 = chunk__28966;
var G__28986 = count__28967;
var G__28987 = (i__28968 + (1));
seq__28965 = G__28984;
chunk__28966 = G__28985;
count__28967 = G__28986;
i__28968 = G__28987;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__28965);if(temp__4126__auto__)
{var seq__28965__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__28965__$1))
{var c__21126__auto__ = cljs.core.chunk_first(seq__28965__$1);{
var G__28988 = cljs.core.chunk_rest(seq__28965__$1);
var G__28989 = c__21126__auto__;
var G__28990 = cljs.core.count(c__21126__auto__);
var G__28991 = (0);
seq__28965 = G__28988;
chunk__28966 = G__28989;
count__28967 = G__28990;
i__28968 = G__28991;
continue;
}
} else
{var vec__28972 = cljs.core.first(seq__28965__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28972,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28972,(1),null);var G__28973_28992 = v;var G__28974_28993 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__28973_28992,G__28974_28993) : f.call(null,G__28973_28992,G__28974_28993));
{
var G__28994 = cljs.core.next(seq__28965__$1);
var G__28995 = null;
var G__28996 = (0);
var G__28997 = (0);
seq__28965 = G__28994;
chunk__28966 = G__28995;
count__28967 = G__28996;
i__28968 = G__28997;
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
var coll = this;return cljs.core.es6_iterator((function (){var G__28975 = coll;return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__28975) : cljs.core.keys.call(null,G__28975));
})());
});
cljs.core.PersistentTreeMap.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.es6_iterator((function (){var G__28976 = coll;return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__28976) : cljs.core.vals.call(null,G__28976));
})());
});
cljs.core.PersistentTreeMap.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){var self__ = this;
var coll = this;var t = self__.tree;while(true){
if(!((t == null)))
{var c = (function (){var G__28977 = k;var G__28978 = t.key;return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__28977,G__28978) : self__.comp.call(null,G__28977,G__28978));
})();if((c === (0)))
{return t;
} else
{if((c < (0)))
{{
var G__28998 = t.left;
t = G__28998;
continue;
}
} else
{{
var G__28999 = t.right;
t = G__28999;
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
var coll__$1 = this;var h__20522__auto__ = self__.__hash;if(!((h__20522__auto__ == null)))
{return h__20522__auto__;
} else
{var h__20522__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__20522__auto____$1;
return h__20522__auto____$1;
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
var G__29000 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__29001 = cljs.core.next(es);
ret = G__29000;
es = G__29001;
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
var G__29002 = null;
var G__29002__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__29002__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__29002 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__29002__2.call(this,self__,k);
case 3:
return G__29002__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29002.cljs$core$IFn$_invoke$arity$2 = G__29002__2;
G__29002.cljs$core$IFn$_invoke$arity$3 = G__29002__3;
return G__29002;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (self__,args28964){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28964)));
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
{var c = (function (){var G__28979 = k;var G__28980 = t.key;return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__28979,G__28980) : self__.comp.call(null,G__28979,G__28980));
})();if((c === (0)))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t),ascending_QMARK_,(-1),null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c < (0)))
{{
var G__29003 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__29004 = t.left;
stack = G__29003;
t = G__29004;
continue;
}
} else
{{
var G__29005 = stack;
var G__29006 = t.right;
stack = G__29005;
t = G__29006;
continue;
}
}
} else
{if((c > (0)))
{{
var G__29007 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__29008 = t.right;
stack = G__29007;
t = G__29008;
continue;
}
} else
{{
var G__29009 = stack;
var G__29010 = t.left;
stack = G__29009;
t = G__29010;
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
var coll__$1 = this;var G__28981 = entry;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__28981) : cljs.core.key.call(null,G__28981));
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
var G__29011 = cljs.core.nnext(in$);
var G__29012 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__29011;
out = G__29012;
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
hash_map.cljs$lang$applyTo = (function (arglist__29013){
var keyvals = cljs.core.seq(arglist__29013);
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
array_map.cljs$lang$applyTo = (function (arglist__29014){
var keyvals = cljs.core.seq(arglist__29014);
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
var obj_map__delegate = function (keyvals){var ks = [];var obj = (function (){var obj29018 = {};return obj29018;
})();var kvs = cljs.core.seq(keyvals);while(true){
if(kvs)
{ks.push(cljs.core.first(kvs));
(obj[cljs.core.first(kvs)] = cljs.core.second(kvs));
{
var G__29019 = cljs.core.nnext(kvs);
kvs = G__29019;
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
obj_map.cljs$lang$applyTo = (function (arglist__29020){
var keyvals = cljs.core.seq(arglist__29020);
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
var G__29021 = cljs.core.nnext(in$);
var G__29022 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__29021;
out = G__29022;
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
sorted_map.cljs$lang$applyTo = (function (arglist__29023){
var keyvals = cljs.core.seq(arglist__29023);
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
var G__29024 = cljs.core.nnext(in$);
var G__29025 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__29024;
out = G__29025;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__29026){
var comparator = cljs.core.first(arglist__29026);
var keyvals = cljs.core.rest(arglist__29026);
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
cljs.core.KeySeq.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/KeySeq");
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
var coll__$1 = this;var nseq = (((function (){var G__29027 = self__.mseq;if(G__29027)
{var bit__20917__auto__ = (G__29027.cljs$lang$protocol_mask$partition0$ & (128));if((bit__20917__auto__) || (G__29027.cljs$core$INext$))
{return true;
} else
{if((!G__29027.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__29027);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__29027);
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
var coll__$1 = this;var nseq = (((function (){var G__29028 = self__.mseq;if(G__29028)
{var bit__20917__auto__ = (G__29028.cljs$lang$protocol_mask$partition0$ & (128));if((bit__20917__auto__) || (G__29028.cljs$core$INext$))
{return true;
} else
{if((!G__29028.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__29028);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__29028);
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
cljs.core.ValSeq.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/ValSeq");
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
var coll__$1 = this;var nseq = (((function (){var G__29029 = self__.mseq;if(G__29029)
{var bit__20917__auto__ = (G__29029.cljs$lang$protocol_mask$partition0$ & (128));if((bit__20917__auto__) || (G__29029.cljs$core$INext$))
{return true;
} else
{if((!G__29029.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__29029);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__29029);
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
var coll__$1 = this;var nseq = (((function (){var G__29030 = self__.mseq;if(G__29030)
{var bit__20917__auto__ = (G__29030.cljs$lang$protocol_mask$partition0$ & (128));if((bit__20917__auto__) || (G__29030.cljs$core$INext$))
{return true;
} else
{if((!G__29030.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__29030);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__29030);
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
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__29031_SHARP_,p2__29032_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__19663__auto__ = p1__29031_SHARP_;if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),p2__29032_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__29033){
var maps = cljs.core.seq(arglist__29033);
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
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__29036 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__29037 = v;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29036,G__29037) : f.call(null,G__29036,G__29037));
})());
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});var merge2 = ((function (merge_entry){
return (function (m1,m2){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_entry,(function (){var or__19663__auto__ = m1;if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
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
merge_with.cljs$lang$applyTo = (function (arglist__29038){
var f = cljs.core.first(arglist__29038);
var maps = cljs.core.rest(arglist__29038);
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
var G__29039 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(entry,new cljs.core.Keyword("cljs.core","not-found","cljs.core/not-found",-1572889185)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key,entry):ret);
var G__29040 = cljs.core.next(keys);
ret = G__29039;
keys = G__29040;
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
cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/PersistentHashSet");
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
var coll = this;var seq__29043 = cljs.core.seq(coll);var chunk__29044 = null;var count__29045 = (0);var i__29046 = (0);while(true){
if((i__29046 < count__29045))
{var vec__29047 = chunk__29044.cljs$core$IIndexed$_nth$arity$2(null,i__29046);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29047,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29047,(1),null);var G__29048_29053 = v;var G__29049_29054 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29048_29053,G__29049_29054) : f.call(null,G__29048_29053,G__29049_29054));
{
var G__29055 = seq__29043;
var G__29056 = chunk__29044;
var G__29057 = count__29045;
var G__29058 = (i__29046 + (1));
seq__29043 = G__29055;
chunk__29044 = G__29056;
count__29045 = G__29057;
i__29046 = G__29058;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__29043);if(temp__4126__auto__)
{var seq__29043__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__29043__$1))
{var c__21126__auto__ = cljs.core.chunk_first(seq__29043__$1);{
var G__29059 = cljs.core.chunk_rest(seq__29043__$1);
var G__29060 = c__21126__auto__;
var G__29061 = cljs.core.count(c__21126__auto__);
var G__29062 = (0);
seq__29043 = G__29059;
chunk__29044 = G__29060;
count__29045 = G__29061;
i__29046 = G__29062;
continue;
}
} else
{var vec__29050 = cljs.core.first(seq__29043__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29050,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29050,(1),null);var G__29051_29063 = v;var G__29052_29064 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29051_29063,G__29052_29064) : f.call(null,G__29051_29063,G__29052_29064));
{
var G__29065 = cljs.core.next(seq__29043__$1);
var G__29066 = null;
var G__29067 = (0);
var G__29068 = (0);
seq__29043 = G__29065;
chunk__29044 = G__29066;
count__29045 = G__29067;
i__29046 = G__29068;
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
var coll__$1 = this;var h__20522__auto__ = self__.__hash;if(!((h__20522__auto__ == null)))
{return h__20522__auto__;
} else
{var h__20522__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__20522__auto____$1;
return h__20522__auto____$1;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (coll__$1){
return (function (p1__29041_SHARP_){return cljs.core.contains_QMARK_(coll__$1,p1__29041_SHARP_);
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
var G__29069 = null;
var G__29069__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__29069__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__29069 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__29069__2.call(this,self__,k);
case 3:
return G__29069__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29069.cljs$core$IFn$_invoke$arity$2 = G__29069__2;
G__29069.cljs$core$IFn$_invoke$arity$3 = G__29069__3;
return G__29069;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (self__,args29042){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args29042)));
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
var G__29070 = (i + (1));
var G__29071 = cljs.core._assoc_BANG_(out,(items[i]),null);
i = G__29070;
out = G__29071;
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
var G__29072 = (i + (1));
var G__29073 = cljs.core._conj_BANG_(out,(items[i]));
i = G__29072;
out = G__29073;
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
cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__29075 = null;
var G__29075__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var tcoll = self____$1;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__29075__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var tcoll = self____$1;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__29075 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__29075__2.call(this,self__,k);
case 3:
return G__29075__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29075.cljs$core$IFn$_invoke$arity$2 = G__29075__2;
G__29075.cljs$core$IFn$_invoke$arity$3 = G__29075__3;
return G__29075;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (self__,args29074){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args29074)));
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
cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/PersistentTreeSet");
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
var coll = this;var seq__29078 = cljs.core.seq(coll);var chunk__29079 = null;var count__29080 = (0);var i__29081 = (0);while(true){
if((i__29081 < count__29080))
{var vec__29082 = chunk__29079.cljs$core$IIndexed$_nth$arity$2(null,i__29081);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29082,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29082,(1),null);var G__29083_29088 = v;var G__29084_29089 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29083_29088,G__29084_29089) : f.call(null,G__29083_29088,G__29084_29089));
{
var G__29090 = seq__29078;
var G__29091 = chunk__29079;
var G__29092 = count__29080;
var G__29093 = (i__29081 + (1));
seq__29078 = G__29090;
chunk__29079 = G__29091;
count__29080 = G__29092;
i__29081 = G__29093;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__29078);if(temp__4126__auto__)
{var seq__29078__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__29078__$1))
{var c__21126__auto__ = cljs.core.chunk_first(seq__29078__$1);{
var G__29094 = cljs.core.chunk_rest(seq__29078__$1);
var G__29095 = c__21126__auto__;
var G__29096 = cljs.core.count(c__21126__auto__);
var G__29097 = (0);
seq__29078 = G__29094;
chunk__29079 = G__29095;
count__29080 = G__29096;
i__29081 = G__29097;
continue;
}
} else
{var vec__29085 = cljs.core.first(seq__29078__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29085,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29085,(1),null);var G__29086_29098 = v;var G__29087_29099 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29086_29098,G__29087_29099) : f.call(null,G__29086_29098,G__29087_29099));
{
var G__29100 = cljs.core.next(seq__29078__$1);
var G__29101 = null;
var G__29102 = (0);
var G__29103 = (0);
seq__29078 = G__29100;
chunk__29079 = G__29101;
count__29080 = G__29102;
i__29081 = G__29103;
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
var coll__$1 = this;var h__20522__auto__ = self__.__hash;if(!((h__20522__auto__ == null)))
{return h__20522__auto__;
} else
{var h__20522__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__20522__auto____$1;
return h__20522__auto____$1;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (coll__$1){
return (function (p1__29076_SHARP_){return cljs.core.contains_QMARK_(coll__$1,p1__29076_SHARP_);
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
var G__29104 = null;
var G__29104__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__29104__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__29104 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__29104__2.call(this,self__,k);
case 3:
return G__29104__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29104.cljs$core$IFn$_invoke$arity$2 = G__29104__2;
G__29104.cljs$core$IFn$_invoke$arity$3 = G__29104__3;
return G__29104;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (self__,args29077){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args29077)));
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
cljs.core.set_from_indexed_seq = (function set_from_indexed_seq(iseq){var arr = iseq.arr;var ret = (function (){var a__21335__auto__ = arr;var i = (0);var res = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);while(true){
if((i < a__21335__auto__.length))
{{
var G__29105 = (i + (1));
var G__29106 = res.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,(arr[i]));
i = G__29105;
res = G__29106;
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
var G__29107 = in$__$1.cljs$core$INext$_next$arity$1(null);
var G__29108 = out.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,in$__$1.cljs$core$ISeq$_first$arity$1(null));
in$__$1 = G__29107;
out = G__29108;
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
var G__29109__delegate = function (keys){return cljs.core.set(keys);
};
var G__29109 = function (var_args){
var keys = null;if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29109__delegate.call(this,keys);};
G__29109.cljs$lang$maxFixedArity = 0;
G__29109.cljs$lang$applyTo = (function (arglist__29110){
var keys = cljs.core.seq(arglist__29110);
return G__29109__delegate(keys);
});
G__29109.cljs$core$IFn$_invoke$arity$variadic = G__29109__delegate;
return G__29109;
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
sorted_set.cljs$lang$applyTo = (function (arglist__29111){
var keys = cljs.core.seq(arglist__29111);
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__29112){
var comparator = cljs.core.first(arglist__29112);
var keys = cljs.core.rest(arglist__29112);
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
var replace__1 = (function (smap){return cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__29113_SHARP_){var temp__4124__auto__ = cljs.core.find(smap,p1__29113_SHARP_);if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;return cljs.core.val(e);
} else
{return p1__29113_SHARP_;
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
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29114_SHARP_){var temp__4124__auto__ = cljs.core.find(smap,p1__29114_SHARP_);if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;return cljs.core.second(e);
} else
{return p1__29114_SHARP_;
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
cljs.core.distinct = (function distinct(coll){var step = (function step(xs,seen){return (new cljs.core.LazySeq(null,(function (){return (function (p__29125,seen__$1){while(true){
var vec__29126 = p__29125;var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29126,(0),null);var xs__$1 = vec__29126;var temp__4126__auto__ = cljs.core.seq(xs__$1);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.contains_QMARK_(seen__$1,f))
{{
var G__29127 = cljs.core.rest(s);
var G__29128 = seen__$1;
p__29125 = G__29127;
seen__$1 = G__29128;
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
var G__29129 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.first(s__$1));
var G__29130 = cljs.core.next(s__$1);
ret = G__29129;
s__$1 = G__29130;
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
cljs.core.name = (function name(x){if((function (){var G__29132 = x;if(G__29132)
{var bit__20884__auto__ = (G__29132.cljs$lang$protocol_mask$partition1$ & (4096));if((bit__20884__auto__) || (G__29132.cljs$core$INamed$))
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
var G__29133 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(map,cljs.core.first(ks),cljs.core.first(vs));
var G__29134 = cljs.core.next(ks);
var G__29135 = cljs.core.next(vs);
map = G__29133;
ks = G__29134;
vs = G__29135;
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
var max_key__3 = (function (k,x,y){if(((function (){var G__29146 = x;return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__29146) : k.call(null,G__29146));
})() > (function (){var G__29147 = y;return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__29147) : k.call(null,G__29147));
})()))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__29148__delegate = function (k,x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__29136_SHARP_,p2__29137_SHARP_){return max_key.cljs$core$IFn$_invoke$arity$3(k,p1__29136_SHARP_,p2__29137_SHARP_);
}),max_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__29148 = function (k,x,y,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29148__delegate.call(this,k,x,y,more);};
G__29148.cljs$lang$maxFixedArity = 3;
G__29148.cljs$lang$applyTo = (function (arglist__29149){
var k = cljs.core.first(arglist__29149);
arglist__29149 = cljs.core.next(arglist__29149);
var x = cljs.core.first(arglist__29149);
arglist__29149 = cljs.core.next(arglist__29149);
var y = cljs.core.first(arglist__29149);
var more = cljs.core.rest(arglist__29149);
return G__29148__delegate(k,x,y,more);
});
G__29148.cljs$core$IFn$_invoke$arity$variadic = G__29148__delegate;
return G__29148;
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
var min_key__3 = (function (k,x,y){if(((function (){var G__29160 = x;return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__29160) : k.call(null,G__29160));
})() < (function (){var G__29161 = y;return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__29161) : k.call(null,G__29161));
})()))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__29162__delegate = function (k,x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__29150_SHARP_,p2__29151_SHARP_){return min_key.cljs$core$IFn$_invoke$arity$3(k,p1__29150_SHARP_,p2__29151_SHARP_);
}),min_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__29162 = function (k,x,y,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29162__delegate.call(this,k,x,y,more);};
G__29162.cljs$lang$maxFixedArity = 3;
G__29162.cljs$lang$applyTo = (function (arglist__29163){
var k = cljs.core.first(arglist__29163);
arglist__29163 = cljs.core.next(arglist__29163);
var x = cljs.core.first(arglist__29163);
arglist__29163 = cljs.core.next(arglist__29163);
var y = cljs.core.first(arglist__29163);
var more = cljs.core.rest(arglist__29163);
return G__29162__delegate(k,x,y,more);
});
G__29162.cljs$core$IFn$_invoke$arity$variadic = G__29162__delegate;
return G__29162;
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
cljs.core.ArrayList.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/ArrayList");
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
var G__29180 = null;
var G__29180__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__29180__1 = (function (result){var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec(a.toArray());a.clear();
var G__29175 = result;var G__29176 = v;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__29175,G__29176) : rf.call(null,G__29175,G__29176));
})());var G__29177 = result__$1;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__29177) : rf.call(null,G__29177));
});
var G__29180__2 = (function (result,input){a.add(input);
if((n === a.size()))
{var v = cljs.core.vec(a.toArray());a.clear();
var G__29178 = result;var G__29179 = v;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__29178,G__29179) : rf.call(null,G__29178,G__29179));
} else
{return result;
}
});
G__29180 = function(result,input){
switch(arguments.length){
case 0:
return G__29180__0.call(this);
case 1:
return G__29180__1.call(this,result);
case 2:
return G__29180__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29180.cljs$core$IFn$_invoke$arity$0 = G__29180__0;
G__29180.cljs$core$IFn$_invoke$arity$1 = G__29180__1;
G__29180.cljs$core$IFn$_invoke$arity$2 = G__29180__2;
return G__29180;
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
var G__29193 = null;
var G__29193__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__29193__1 = (function (result){var G__29188 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__29188) : rf.call(null,G__29188));
});
var G__29193__2 = (function (result,input){if(cljs.core.truth_((function (){var G__29189 = input;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__29189) : pred.call(null,G__29189));
})()))
{var G__29190 = result;var G__29191 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__29190,G__29191) : rf.call(null,G__29190,G__29191));
} else
{return cljs.core.reduced(result);
}
});
G__29193 = function(result,input){
switch(arguments.length){
case 0:
return G__29193__0.call(this);
case 1:
return G__29193__1.call(this,result);
case 2:
return G__29193__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29193.cljs$core$IFn$_invoke$arity$0 = G__29193__0;
G__29193.cljs$core$IFn$_invoke$arity$1 = G__29193__1;
G__29193.cljs$core$IFn$_invoke$arity$2 = G__29193__2;
return G__29193;
})()
});
});
var take_while__2 = (function (pred,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.truth_((function (){var G__29192 = cljs.core.first(s);return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__29192) : pred.call(null,G__29192));
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
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){return (function (e){var comp = cljs.core._comparator(sc);var G__29198 = (function (){var G__29200 = cljs.core._entry_key(sc,e);var G__29201 = key;return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__29200,G__29201) : comp.call(null,G__29200,G__29201));
})();var G__29199 = (0);return (test.cljs$core$IFn$_invoke$arity$2 ? test.cljs$core$IFn$_invoke$arity$2(G__29198,G__29199) : test.call(null,G__29198,G__29199));
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
{var vec__29205 = temp__4126__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29205,(0),null);var s = vec__29205;if(cljs.core.truth_((function (){var G__29206 = e;return (include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(G__29206) : include.call(null,G__29206));
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
{var vec__29207 = temp__4126__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29207,(0),null);var s = vec__29207;return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.mk_bound_fn(sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,start_test,start_key).call(null,e))?s:cljs.core.next(s)));
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
{var vec__29211 = temp__4126__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29211,(0),null);var s = vec__29211;if(cljs.core.truth_((function (){var G__29212 = e;return (include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(G__29212) : include.call(null,G__29212));
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
{var vec__29213 = temp__4126__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29213,(0),null);var s = vec__29213;return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.mk_bound_fn(sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,end_test,end_key).call(null,e))?s:cljs.core.next(s)));
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
cljs.core.RangeIterator.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/RangeIterator");
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
cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/Range");
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
{var G__29214 = ((self__.end - self__.start) / self__.step);return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__29214) : Math.ceil.call(null,G__29214));
}
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;var h__20522__auto__ = self__.__hash;if(!((h__20522__auto__ == null)))
{return h__20522__auto__;
} else
{var h__20522__auto____$1 = cljs.core.hash_ordered_coll(rng__$1);self__.__hash = h__20522__auto____$1;
return h__20522__auto____$1;
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
{var ret__$1 = (function (){var G__29215 = ret;var G__29216 = i;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29215,G__29216) : f.call(null,G__29215,G__29216));
})();if(cljs.core.reduced_QMARK_(ret__$1))
{var G__29217 = ret__$1;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29217) : cljs.core.deref.call(null,G__29217));
} else
{{
var G__29218 = (i + self__.step);
var G__29219 = ret__$1;
i = G__29218;
ret = G__29219;
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
var take_nth__1 = (function (n){return (function (rf){var ia = (function (){var G__29235 = (-1);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29235) : cljs.core.atom.call(null,G__29235));
})();return ((function (ia){
return (function() {
var G__29239 = null;
var G__29239__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__29239__1 = (function (result){var G__29236 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__29236) : rf.call(null,G__29236));
});
var G__29239__2 = (function (result,input){var i = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ia,cljs.core.inc);if((cljs.core.rem(i,n) === (0)))
{var G__29237 = result;var G__29238 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__29237,G__29238) : rf.call(null,G__29237,G__29238));
} else
{return result;
}
});
G__29239 = function(result,input){
switch(arguments.length){
case 0:
return G__29239__0.call(this);
case 1:
return G__29239__1.call(this,result);
case 2:
return G__29239__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29239.cljs$core$IFn$_invoke$arity$0 = G__29239__0;
G__29239.cljs$core$IFn$_invoke$arity$1 = G__29239__1;
G__29239.cljs$core$IFn$_invoke$arity$2 = G__29239__2;
return G__29239;
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
var partition_by__1 = (function (f){return (function (rf){var a = cljs.core.array_list();var pa = (function (){var G__29255 = new cljs.core.Keyword("cljs.core","none","cljs.core/none",926646439);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29255) : cljs.core.atom.call(null,G__29255));
})();return ((function (a,pa){
return (function() {
var G__29267 = null;
var G__29267__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__29267__1 = (function (result){var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec(a.toArray());a.clear();
var G__29256 = result;var G__29257 = v;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__29256,G__29257) : rf.call(null,G__29256,G__29257));
})());var G__29258 = result__$1;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__29258) : rf.call(null,G__29258));
});
var G__29267__2 = (function (result,input){var pval = (function (){var G__29259 = pa;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29259) : cljs.core.deref.call(null,G__29259));
})();var val = (function (){var G__29260 = input;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29260) : f.call(null,G__29260));
})();var G__29261_29268 = pa;var G__29262_29269 = val;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__29261_29268,G__29262_29269) : cljs.core.reset_BANG_.call(null,G__29261_29268,G__29262_29269));
if((cljs.core.keyword_identical_QMARK_(pval,new cljs.core.Keyword("cljs.core","none","cljs.core/none",926646439))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,pval)))
{a.add(input);
return result;
} else
{var v = cljs.core.vec(a.toArray());a.clear();
var ret = (function (){var G__29263 = result;var G__29264 = v;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__29263,G__29264) : rf.call(null,G__29263,G__29264));
})();if(cljs.core.reduced_QMARK_(ret))
{} else
{a.add(input);
}
return ret;
}
});
G__29267 = function(result,input){
switch(arguments.length){
case 0:
return G__29267__0.call(this);
case 1:
return G__29267__1.call(this,result);
case 2:
return G__29267__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29267.cljs$core$IFn$_invoke$arity$0 = G__29267__0;
G__29267.cljs$core$IFn$_invoke$arity$1 = G__29267__1;
G__29267.cljs$core$IFn$_invoke$arity$2 = G__29267__2;
return G__29267;
})()
;})(a,pa))
});
});
var partition_by__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;var fst = cljs.core.first(s);var fv = (function (){var G__29265 = fst;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29265) : f.call(null,G__29265));
})();var run = cljs.core.cons(fst,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (fst,fv,s,temp__4126__auto__){
return (function (p1__29240_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fv,(function (){var G__29266 = p1__29240_SHARP_;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29266) : f.call(null,G__29266));
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
{var s = temp__4126__auto__;return reductions.cljs$core$IFn$_invoke$arity$3(f,(function (){var G__29278 = init;var G__29279 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29278,G__29279) : f.call(null,G__29278,G__29279));
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
var G__29374 = null;
var G__29374__0 = (function (){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})()],null));
});
var G__29374__1 = (function (x){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__29332 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29332) : f.call(null,G__29332));
})()],null));
});
var G__29374__2 = (function (x,y){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__29333 = x;var G__29334 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29333,G__29334) : f.call(null,G__29333,G__29334));
})()],null));
});
var G__29374__3 = (function (x,y,z){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__29335 = x;var G__29336 = y;var G__29337 = z;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__29335,G__29336,G__29337) : f.call(null,G__29335,G__29336,G__29337));
})()],null));
});
var G__29374__4 = (function() { 
var G__29375__delegate = function (x,y,z,args){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args)],null));
};
var G__29375 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29375__delegate.call(this,x,y,z,args);};
G__29375.cljs$lang$maxFixedArity = 3;
G__29375.cljs$lang$applyTo = (function (arglist__29376){
var x = cljs.core.first(arglist__29376);
arglist__29376 = cljs.core.next(arglist__29376);
var y = cljs.core.first(arglist__29376);
arglist__29376 = cljs.core.next(arglist__29376);
var z = cljs.core.first(arglist__29376);
var args = cljs.core.rest(arglist__29376);
return G__29375__delegate(x,y,z,args);
});
G__29375.cljs$core$IFn$_invoke$arity$variadic = G__29375__delegate;
return G__29375;
})()
;
G__29374 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__29374__0.call(this);
case 1:
return G__29374__1.call(this,x);
case 2:
return G__29374__2.call(this,x,y);
case 3:
return G__29374__3.call(this,x,y,z);
default:
return G__29374__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29374.cljs$lang$maxFixedArity = 3;
G__29374.cljs$lang$applyTo = G__29374__4.cljs$lang$applyTo;
G__29374.cljs$core$IFn$_invoke$arity$0 = G__29374__0;
G__29374.cljs$core$IFn$_invoke$arity$1 = G__29374__1;
G__29374.cljs$core$IFn$_invoke$arity$2 = G__29374__2;
G__29374.cljs$core$IFn$_invoke$arity$3 = G__29374__3;
G__29374.cljs$core$IFn$_invoke$arity$variadic = G__29374__4.cljs$core$IFn$_invoke$arity$variadic;
return G__29374;
})()
});
var juxt__2 = (function (f,g){return (function() {
var G__29377 = null;
var G__29377__0 = (function (){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),(function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})()],null));
});
var G__29377__1 = (function (x){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__29338 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29338) : f.call(null,G__29338));
})(),(function (){var G__29339 = x;return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__29339) : g.call(null,G__29339));
})()],null));
});
var G__29377__2 = (function (x,y){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__29340 = x;var G__29341 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29340,G__29341) : f.call(null,G__29340,G__29341));
})(),(function (){var G__29342 = x;var G__29343 = y;return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__29342,G__29343) : g.call(null,G__29342,G__29343));
})()],null));
});
var G__29377__3 = (function (x,y,z){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__29344 = x;var G__29345 = y;var G__29346 = z;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__29344,G__29345,G__29346) : f.call(null,G__29344,G__29345,G__29346));
})(),(function (){var G__29347 = x;var G__29348 = y;var G__29349 = z;return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__29347,G__29348,G__29349) : g.call(null,G__29347,G__29348,G__29349));
})()],null));
});
var G__29377__4 = (function() { 
var G__29378__delegate = function (x,y,z,args){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args)],null));
};
var G__29378 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29378__delegate.call(this,x,y,z,args);};
G__29378.cljs$lang$maxFixedArity = 3;
G__29378.cljs$lang$applyTo = (function (arglist__29379){
var x = cljs.core.first(arglist__29379);
arglist__29379 = cljs.core.next(arglist__29379);
var y = cljs.core.first(arglist__29379);
arglist__29379 = cljs.core.next(arglist__29379);
var z = cljs.core.first(arglist__29379);
var args = cljs.core.rest(arglist__29379);
return G__29378__delegate(x,y,z,args);
});
G__29378.cljs$core$IFn$_invoke$arity$variadic = G__29378__delegate;
return G__29378;
})()
;
G__29377 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__29377__0.call(this);
case 1:
return G__29377__1.call(this,x);
case 2:
return G__29377__2.call(this,x,y);
case 3:
return G__29377__3.call(this,x,y,z);
default:
return G__29377__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29377.cljs$lang$maxFixedArity = 3;
G__29377.cljs$lang$applyTo = G__29377__4.cljs$lang$applyTo;
G__29377.cljs$core$IFn$_invoke$arity$0 = G__29377__0;
G__29377.cljs$core$IFn$_invoke$arity$1 = G__29377__1;
G__29377.cljs$core$IFn$_invoke$arity$2 = G__29377__2;
G__29377.cljs$core$IFn$_invoke$arity$3 = G__29377__3;
G__29377.cljs$core$IFn$_invoke$arity$variadic = G__29377__4.cljs$core$IFn$_invoke$arity$variadic;
return G__29377;
})()
});
var juxt__3 = (function (f,g,h){return (function() {
var G__29380 = null;
var G__29380__0 = (function (){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),(function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})(),(function (){return (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
})()],null));
});
var G__29380__1 = (function (x){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__29350 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29350) : f.call(null,G__29350));
})(),(function (){var G__29351 = x;return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__29351) : g.call(null,G__29351));
})(),(function (){var G__29352 = x;return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__29352) : h.call(null,G__29352));
})()],null));
});
var G__29380__2 = (function (x,y){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__29353 = x;var G__29354 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29353,G__29354) : f.call(null,G__29353,G__29354));
})(),(function (){var G__29355 = x;var G__29356 = y;return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__29355,G__29356) : g.call(null,G__29355,G__29356));
})(),(function (){var G__29357 = x;var G__29358 = y;return (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(G__29357,G__29358) : h.call(null,G__29357,G__29358));
})()],null));
});
var G__29380__3 = (function (x,y,z){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__29359 = x;var G__29360 = y;var G__29361 = z;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__29359,G__29360,G__29361) : f.call(null,G__29359,G__29360,G__29361));
})(),(function (){var G__29362 = x;var G__29363 = y;var G__29364 = z;return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__29362,G__29363,G__29364) : g.call(null,G__29362,G__29363,G__29364));
})(),(function (){var G__29365 = x;var G__29366 = y;var G__29367 = z;return (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(G__29365,G__29366,G__29367) : h.call(null,G__29365,G__29366,G__29367));
})()],null));
});
var G__29380__4 = (function() { 
var G__29381__delegate = function (x,y,z,args){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args)],null));
};
var G__29381 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29381__delegate.call(this,x,y,z,args);};
G__29381.cljs$lang$maxFixedArity = 3;
G__29381.cljs$lang$applyTo = (function (arglist__29382){
var x = cljs.core.first(arglist__29382);
arglist__29382 = cljs.core.next(arglist__29382);
var y = cljs.core.first(arglist__29382);
arglist__29382 = cljs.core.next(arglist__29382);
var z = cljs.core.first(arglist__29382);
var args = cljs.core.rest(arglist__29382);
return G__29381__delegate(x,y,z,args);
});
G__29381.cljs$core$IFn$_invoke$arity$variadic = G__29381__delegate;
return G__29381;
})()
;
G__29380 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__29380__0.call(this);
case 1:
return G__29380__1.call(this,x);
case 2:
return G__29380__2.call(this,x,y);
case 3:
return G__29380__3.call(this,x,y,z);
default:
return G__29380__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29380.cljs$lang$maxFixedArity = 3;
G__29380.cljs$lang$applyTo = G__29380__4.cljs$lang$applyTo;
G__29380.cljs$core$IFn$_invoke$arity$0 = G__29380__0;
G__29380.cljs$core$IFn$_invoke$arity$1 = G__29380__1;
G__29380.cljs$core$IFn$_invoke$arity$2 = G__29380__2;
G__29380.cljs$core$IFn$_invoke$arity$3 = G__29380__3;
G__29380.cljs$core$IFn$_invoke$arity$variadic = G__29380__4.cljs$core$IFn$_invoke$arity$variadic;
return G__29380;
})()
});
var juxt__4 = (function() { 
var G__29383__delegate = function (f,g,h,fs){var fs__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f,g,h,fs);return ((function (fs__$1){
return (function() {
var G__29384 = null;
var G__29384__0 = (function (){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__29280_SHARP_,p2__29281_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__29280_SHARP_,(function (){return (p2__29281_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p2__29281_SHARP_.cljs$core$IFn$_invoke$arity$0() : p2__29281_SHARP_.call(null));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__29384__1 = (function (x){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__29282_SHARP_,p2__29283_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__29282_SHARP_,(function (){var G__29368 = x;return (p2__29283_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__29283_SHARP_.cljs$core$IFn$_invoke$arity$1(G__29368) : p2__29283_SHARP_.call(null,G__29368));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__29384__2 = (function (x,y){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__29284_SHARP_,p2__29285_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__29284_SHARP_,(function (){var G__29369 = x;var G__29370 = y;return (p2__29285_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__29285_SHARP_.cljs$core$IFn$_invoke$arity$2(G__29369,G__29370) : p2__29285_SHARP_.call(null,G__29369,G__29370));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__29384__3 = (function (x,y,z){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__29286_SHARP_,p2__29287_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__29286_SHARP_,(function (){var G__29371 = x;var G__29372 = y;var G__29373 = z;return (p2__29287_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p2__29287_SHARP_.cljs$core$IFn$_invoke$arity$3(G__29371,G__29372,G__29373) : p2__29287_SHARP_.call(null,G__29371,G__29372,G__29373));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__29384__4 = (function() { 
var G__29385__delegate = function (x,y,z,args){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__29288_SHARP_,p2__29289_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__29288_SHARP_,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(p2__29289_SHARP_,x,y,z,args));
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
};
var G__29385 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29385__delegate.call(this,x,y,z,args);};
G__29385.cljs$lang$maxFixedArity = 3;
G__29385.cljs$lang$applyTo = (function (arglist__29386){
var x = cljs.core.first(arglist__29386);
arglist__29386 = cljs.core.next(arglist__29386);
var y = cljs.core.first(arglist__29386);
arglist__29386 = cljs.core.next(arglist__29386);
var z = cljs.core.first(arglist__29386);
var args = cljs.core.rest(arglist__29386);
return G__29385__delegate(x,y,z,args);
});
G__29385.cljs$core$IFn$_invoke$arity$variadic = G__29385__delegate;
return G__29385;
})()
;
G__29384 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__29384__0.call(this);
case 1:
return G__29384__1.call(this,x);
case 2:
return G__29384__2.call(this,x,y);
case 3:
return G__29384__3.call(this,x,y,z);
default:
return G__29384__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29384.cljs$lang$maxFixedArity = 3;
G__29384.cljs$lang$applyTo = G__29384__4.cljs$lang$applyTo;
G__29384.cljs$core$IFn$_invoke$arity$0 = G__29384__0;
G__29384.cljs$core$IFn$_invoke$arity$1 = G__29384__1;
G__29384.cljs$core$IFn$_invoke$arity$2 = G__29384__2;
G__29384.cljs$core$IFn$_invoke$arity$3 = G__29384__3;
G__29384.cljs$core$IFn$_invoke$arity$variadic = G__29384__4.cljs$core$IFn$_invoke$arity$variadic;
return G__29384;
})()
;})(fs__$1))
};
var G__29383 = function (f,g,h,var_args){
var fs = null;if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29383__delegate.call(this,f,g,h,fs);};
G__29383.cljs$lang$maxFixedArity = 3;
G__29383.cljs$lang$applyTo = (function (arglist__29387){
var f = cljs.core.first(arglist__29387);
arglist__29387 = cljs.core.next(arglist__29387);
var g = cljs.core.first(arglist__29387);
arglist__29387 = cljs.core.next(arglist__29387);
var h = cljs.core.first(arglist__29387);
var fs = cljs.core.rest(arglist__29387);
return G__29383__delegate(f,g,h,fs);
});
G__29383.cljs$core$IFn$_invoke$arity$variadic = G__29383__delegate;
return G__29383;
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
var G__29388 = cljs.core.next(coll);
coll = G__29388;
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
var G__29389 = (n - (1));
var G__29390 = cljs.core.next(coll);
n = G__29389;
coll = G__29390;
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
{var vec__29394 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,s);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29394,(0),null);var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29394,(1),null);var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29394,(2),null);return (new RegExp(pattern,flags));
}
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){var _STAR_print_level_STAR_29402 = cljs.core._STAR_print_level_STAR_;try{cljs.core._STAR_print_level_STAR_ = (((cljs.core._STAR_print_level_STAR_ == null))?null:(cljs.core._STAR_print_level_STAR_ - (1)));
if((!((cljs.core._STAR_print_level_STAR_ == null))) && ((cljs.core._STAR_print_level_STAR_ < (0))))
{return cljs.core._write(writer,"#");
} else
{cljs.core._write(writer,begin);
if(cljs.core.seq(coll))
{var G__29403_29409 = cljs.core.first(coll);var G__29404_29410 = writer;var G__29405_29411 = opts;(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__29403_29409,G__29404_29410,G__29405_29411) : print_one.call(null,G__29403_29409,G__29404_29410,G__29405_29411));
} else
{}
var coll_29412__$1 = cljs.core.next(coll);var n_29413 = (new cljs.core.Keyword(null,"print-length","print-length",1931866356).cljs$core$IFn$_invoke$arity$1(opts) - (1));while(true){
if((coll_29412__$1) && (((n_29413 == null)) || (!((n_29413 === (0))))))
{cljs.core._write(writer,sep);
var G__29406_29414 = cljs.core.first(coll_29412__$1);var G__29407_29415 = writer;var G__29408_29416 = opts;(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__29406_29414,G__29407_29415,G__29408_29416) : print_one.call(null,G__29406_29414,G__29407_29415,G__29408_29416));
{
var G__29417 = cljs.core.next(coll_29412__$1);
var G__29418 = (n_29413 - (1));
coll_29412__$1 = G__29417;
n_29413 = G__29418;
continue;
}
} else
{if((cljs.core.seq(coll_29412__$1)) && ((n_29413 === (0))))
{cljs.core._write(writer,sep);
cljs.core._write(writer,"...");
} else
{}
}
break;
}
return cljs.core._write(writer,end);
}
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_29402;
}});
/**
* @param {...*} var_args
*/
cljs.core.write_all = (function() { 
var write_all__delegate = function (writer,ss){var seq__29423 = cljs.core.seq(ss);var chunk__29424 = null;var count__29425 = (0);var i__29426 = (0);while(true){
if((i__29426 < count__29425))
{var s = chunk__29424.cljs$core$IIndexed$_nth$arity$2(null,i__29426);cljs.core._write(writer,s);
{
var G__29427 = seq__29423;
var G__29428 = chunk__29424;
var G__29429 = count__29425;
var G__29430 = (i__29426 + (1));
seq__29423 = G__29427;
chunk__29424 = G__29428;
count__29425 = G__29429;
i__29426 = G__29430;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__29423);if(temp__4126__auto__)
{var seq__29423__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__29423__$1))
{var c__21126__auto__ = cljs.core.chunk_first(seq__29423__$1);{
var G__29431 = cljs.core.chunk_rest(seq__29423__$1);
var G__29432 = c__21126__auto__;
var G__29433 = cljs.core.count(c__21126__auto__);
var G__29434 = (0);
seq__29423 = G__29431;
chunk__29424 = G__29432;
count__29425 = G__29433;
i__29426 = G__29434;
continue;
}
} else
{var s = cljs.core.first(seq__29423__$1);cljs.core._write(writer,s);
{
var G__29435 = cljs.core.next(seq__29423__$1);
var G__29436 = null;
var G__29437 = (0);
var G__29438 = (0);
seq__29423 = G__29435;
chunk__29424 = G__29436;
count__29425 = G__29437;
i__29426 = G__29438;
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
write_all.cljs$lang$applyTo = (function (arglist__29439){
var writer = cljs.core.first(arglist__29439);
var ss = cljs.core.rest(arglist__29439);
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
cljs.core.char_escapes = (function (){var obj29441 = {"\"":"\\\"","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};return obj29441;
})();
cljs.core.quote_string = (function quote_string(s){return ("\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s.replace((function (){var G__29444 = "[\\\\\"\b\f\n\r\t]";var G__29445 = "g";return RegExp(G__29444,G__29445);
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
{if(cljs.core.truth_((function (){var and__19621__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"meta","meta",1499536964));if(cljs.core.truth_(and__19621__auto__))
{var and__19621__auto____$1 = (function (){var G__29459 = obj;if(G__29459)
{var bit__20917__auto__ = (G__29459.cljs$lang$protocol_mask$partition0$ & (131072));if((bit__20917__auto__) || (G__29459.cljs$core$IMeta$))
{return true;
} else
{if((!G__29459.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__29459);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__29459);
}
})();if(and__19621__auto____$1)
{return cljs.core.meta(obj);
} else
{return and__19621__auto____$1;
}
} else
{return and__19621__auto__;
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
{if((function (){var G__29460 = obj;if(G__29460)
{var bit__20884__auto__ = (G__29460.cljs$lang$protocol_mask$partition0$ & (2147483648));if((bit__20884__auto__) || (G__29460.cljs$core$IPrintWithWriter$))
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
var G__29461 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(obj[k])], null);
}),cljs.core.js_keys(obj));var G__29462 = pr_writer;var G__29463 = writer;var G__29464 = opts;return (cljs.core.print_map.cljs$core$IFn$_invoke$arity$4 ? cljs.core.print_map.cljs$core$IFn$_invoke$arity$4(G__29461,G__29462,G__29463,G__29464) : cljs.core.print_map.call(null,G__29461,G__29462,G__29463,G__29464));
} else
{if(obj instanceof Array)
{return cljs.core.pr_sequential_writer(writer,pr_writer,"#js ["," ","]",opts,obj);
} else
{if(cljs.core.truth_((function (){var G__29465 = obj;return goog.isString(G__29465);
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
var G__29467 = ("0"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns));
ns = G__29467;
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
{if((function (){var G__29466 = obj;if(G__29466)
{var bit__20917__auto__ = (G__29466.cljs$lang$protocol_mask$partition0$ & (2147483648));if((bit__20917__auto__) || (G__29466.cljs$core$IPrintWithWriter$))
{return true;
} else
{if((!G__29466.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__29466);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__29466);
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
var seq__29472 = cljs.core.seq(cljs.core.next(objs));var chunk__29473 = null;var count__29474 = (0);var i__29475 = (0);while(true){
if((i__29475 < count__29474))
{var obj = chunk__29473.cljs$core$IIndexed$_nth$arity$2(null,i__29475);cljs.core._write(writer," ");
cljs.core.pr_writer(obj,writer,opts);
{
var G__29476 = seq__29472;
var G__29477 = chunk__29473;
var G__29478 = count__29474;
var G__29479 = (i__29475 + (1));
seq__29472 = G__29476;
chunk__29473 = G__29477;
count__29474 = G__29478;
i__29475 = G__29479;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__29472);if(temp__4126__auto__)
{var seq__29472__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__29472__$1))
{var c__21126__auto__ = cljs.core.chunk_first(seq__29472__$1);{
var G__29480 = cljs.core.chunk_rest(seq__29472__$1);
var G__29481 = c__21126__auto__;
var G__29482 = cljs.core.count(c__21126__auto__);
var G__29483 = (0);
seq__29472 = G__29480;
chunk__29473 = G__29481;
count__29474 = G__29482;
i__29475 = G__29483;
continue;
}
} else
{var obj = cljs.core.first(seq__29472__$1);cljs.core._write(writer," ");
cljs.core.pr_writer(obj,writer,opts);
{
var G__29484 = cljs.core.next(seq__29472__$1);
var G__29485 = null;
var G__29486 = (0);
var G__29487 = (0);
seq__29472 = G__29484;
chunk__29473 = G__29485;
count__29474 = G__29486;
i__29475 = G__29487;
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
pr_str.cljs$lang$applyTo = (function (arglist__29488){
var objs = cljs.core.seq(arglist__29488);
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
prn_str.cljs$lang$applyTo = (function (arglist__29489){
var objs = cljs.core.seq(arglist__29489);
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
pr.cljs$lang$applyTo = (function (arglist__29490){
var objs = cljs.core.seq(arglist__29490);
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__29491){
var objs = cljs.core.seq(arglist__29491);
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
print_str.cljs$lang$applyTo = (function (arglist__29492){
var objs = cljs.core.seq(arglist__29492);
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
println.cljs$lang$applyTo = (function (arglist__29493){
var objs = cljs.core.seq(arglist__29493);
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
println_str.cljs$lang$applyTo = (function (arglist__29494){
var objs = cljs.core.seq(arglist__29494);
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
prn.cljs$lang$applyTo = (function (arglist__29495){
var objs = cljs.core.seq(arglist__29495);
return prn__delegate(objs);
});
prn.cljs$core$IFn$_invoke$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.print_map = (function print_map(m,print_one,writer,opts){return cljs.core.pr_sequential_writer(writer,(function (e,w,opts__$1){var G__29502_29508 = cljs.core.key(e);var G__29503_29509 = w;var G__29504_29510 = opts__$1;(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__29502_29508,G__29503_29509,G__29504_29510) : print_one.call(null,G__29502_29508,G__29503_29509,G__29504_29510));
cljs.core._write(w," ");
var G__29505 = cljs.core.val(e);var G__29506 = w;var G__29507 = opts__$1;return (print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__29505,G__29506,G__29507) : print_one.call(null,G__29505,G__29506,G__29507));
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__29511){
var iref = cljs.core.first(arglist__29511);
arglist__29511 = cljs.core.next(arglist__29511);
var f = cljs.core.first(arglist__29511);
var args = cljs.core.rest(arglist__29511);
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
{cljs.core.gensym_counter = (function (){var G__29514 = (0);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29514) : cljs.core.atom.call(null,G__29514));
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
cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/Delay");
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
{var G__29516 = x;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29516) : cljs.core.deref.call(null,G__29516));
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){return cljs.core._realized_QMARK_(d);
});
cljs.core.preserving_reduced = (function preserving_reduced(rf){return (function (p1__29517_SHARP_,p2__29518_SHARP_){var ret = (function (){var G__29521 = p1__29517_SHARP_;var G__29522 = p2__29518_SHARP_;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__29521,G__29522) : rf.call(null,G__29521,G__29522));
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
var G__29525 = null;
var G__29525__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__29525__1 = (function (result){var G__29524 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__29524) : rf.call(null,G__29524));
});
var G__29525__2 = (function (result,input){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf1,result,input);
});
G__29525 = function(result,input){
switch(arguments.length){
case 0:
return G__29525__0.call(this);
case 1:
return G__29525__1.call(this,result);
case 2:
return G__29525__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29525.cljs$core$IFn$_invoke$arity$0 = G__29525__0;
G__29525.cljs$core$IFn$_invoke$arity$1 = G__29525__1;
G__29525.cljs$core$IFn$_invoke$arity$2 = G__29525__2;
return G__29525;
})()
;})(rf1))
});
/**
* Returns a lazy sequence removing consecutive duplicates in coll.
* Returns a transducer when no collection is provided.
*/
cljs.core.dedupe = (function() {
var dedupe = null;
var dedupe__0 = (function (){return (function (rf){var pa = (function (){var G__29533 = new cljs.core.Keyword("cljs.core","none","cljs.core/none",926646439);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29533) : cljs.core.atom.call(null,G__29533));
})();return ((function (pa){
return (function() {
var G__29540 = null;
var G__29540__0 = (function (){return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__29540__1 = (function (result){var G__29534 = result;return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__29534) : rf.call(null,G__29534));
});
var G__29540__2 = (function (result,input){var prior = (function (){var G__29535 = pa;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29535) : cljs.core.deref.call(null,G__29535));
})();var G__29536_29541 = pa;var G__29537_29542 = input;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__29536_29541,G__29537_29542) : cljs.core.reset_BANG_.call(null,G__29536_29541,G__29537_29542));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prior,input))
{return result;
} else
{var G__29538 = result;var G__29539 = input;return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__29538,G__29539) : rf.call(null,G__29538,G__29539));
}
});
G__29540 = function(result,input){
switch(arguments.length){
case 0:
return G__29540__0.call(this);
case 1:
return G__29540__1.call(this,result);
case 2:
return G__29540__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29540.cljs$core$IFn$_invoke$arity$0 = G__29540__0;
G__29540.cljs$core$IFn$_invoke$arity$1 = G__29540__1;
G__29540.cljs$core$IFn$_invoke$arity$2 = G__29540__2;
return G__29540;
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
cljs.core.Eduction.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/Eduction");
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
cljs.core.run_BANG_ = (function run_BANG_(proc,coll){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__29544_SHARP_,p2__29543_SHARP_){var G__29546 = p2__29543_SHARP_;return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(G__29546) : proc.call(null,G__29546));
}),null,coll);
});
cljs.core.IEncodeJS = (function (){var obj29548 = {};return obj29548;
})();
cljs.core._clj__GT_js = (function _clj__GT_js(x){if((function (){var and__19621__auto__ = x;if(and__19621__auto__)
{return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1;
} else
{return and__19621__auto__;
}
})())
{return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1(x);
} else
{var x__20845__auto__ = (((x == null))?null:x);return (function (){var or__19663__auto__ = (cljs.core._clj__GT_js[(function (){var G__29552 = x__20845__auto__;return goog.typeOf(G__29552);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._clj__GT_js["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IEncodeJS.-clj->js",x);
}
}
})().call(null,x);
}
});
cljs.core._key__GT_js = (function _key__GT_js(x){if((function (){var and__19621__auto__ = x;if(and__19621__auto__)
{return x.cljs$core$IEncodeJS$_key__GT_js$arity$1;
} else
{return and__19621__auto__;
}
})())
{return x.cljs$core$IEncodeJS$_key__GT_js$arity$1(x);
} else
{var x__20845__auto__ = (((x == null))?null:x);return (function (){var or__19663__auto__ = (cljs.core._key__GT_js[(function (){var G__29556 = x__20845__auto__;return goog.typeOf(G__29556);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._key__GT_js["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IEncodeJS.-key->js",x);
}
}
})().call(null,x);
}
});
cljs.core.key__GT_js = (function key__GT_js(k){if((function (){var G__29559 = k;if(G__29559)
{var bit__20917__auto__ = null;if(cljs.core.truth_((function (){var or__19663__auto__ = bit__20917__auto__;if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return G__29559.cljs$core$IEncodeJS$;
}
})()))
{return true;
} else
{if((!G__29559.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__29559);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__29559);
}
})())
{return cljs.core._clj__GT_js(k);
} else
{if((typeof k === 'string') || (typeof k === 'number') || ((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol)))
{var G__29560 = k;return (cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1 ? cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1(G__29560) : cljs.core.clj__GT_js.call(null,G__29560));
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
{if((function (){var G__29576 = x;if(G__29576)
{var bit__20917__auto__ = null;if(cljs.core.truth_((function (){var or__19663__auto__ = bit__20917__auto__;if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return G__29576.cljs$core$IEncodeJS$;
}
})()))
{return true;
} else
{if((!G__29576.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__29576);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__29576);
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
{var m = (function (){var obj29578 = {};return obj29578;
})();var seq__29579_29589 = cljs.core.seq(x);var chunk__29580_29590 = null;var count__29581_29591 = (0);var i__29582_29592 = (0);while(true){
if((i__29582_29592 < count__29581_29591))
{var vec__29583_29593 = chunk__29580_29590.cljs$core$IIndexed$_nth$arity$2(null,i__29582_29592);var k_29594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29583_29593,(0),null);var v_29595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29583_29593,(1),null);(m[cljs.core.key__GT_js(k_29594)] = clj__GT_js(v_29595));
{
var G__29596 = seq__29579_29589;
var G__29597 = chunk__29580_29590;
var G__29598 = count__29581_29591;
var G__29599 = (i__29582_29592 + (1));
seq__29579_29589 = G__29596;
chunk__29580_29590 = G__29597;
count__29581_29591 = G__29598;
i__29582_29592 = G__29599;
continue;
}
} else
{var temp__4126__auto___29600 = cljs.core.seq(seq__29579_29589);if(temp__4126__auto___29600)
{var seq__29579_29601__$1 = temp__4126__auto___29600;if(cljs.core.chunked_seq_QMARK_(seq__29579_29601__$1))
{var c__21126__auto___29602 = cljs.core.chunk_first(seq__29579_29601__$1);{
var G__29603 = cljs.core.chunk_rest(seq__29579_29601__$1);
var G__29604 = c__21126__auto___29602;
var G__29605 = cljs.core.count(c__21126__auto___29602);
var G__29606 = (0);
seq__29579_29589 = G__29603;
chunk__29580_29590 = G__29604;
count__29581_29591 = G__29605;
i__29582_29592 = G__29606;
continue;
}
} else
{var vec__29584_29607 = cljs.core.first(seq__29579_29601__$1);var k_29608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29584_29607,(0),null);var v_29609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29584_29607,(1),null);(m[cljs.core.key__GT_js(k_29608)] = clj__GT_js(v_29609));
{
var G__29610 = cljs.core.next(seq__29579_29601__$1);
var G__29611 = null;
var G__29612 = (0);
var G__29613 = (0);
seq__29579_29589 = G__29610;
chunk__29580_29590 = G__29611;
count__29581_29591 = G__29612;
i__29582_29592 = G__29613;
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
{var arr = [];var seq__29585_29614 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clj__GT_js,x));var chunk__29586_29615 = null;var count__29587_29616 = (0);var i__29588_29617 = (0);while(true){
if((i__29588_29617 < count__29587_29616))
{var x_29618__$1 = chunk__29586_29615.cljs$core$IIndexed$_nth$arity$2(null,i__29588_29617);arr.push(x_29618__$1);
{
var G__29619 = seq__29585_29614;
var G__29620 = chunk__29586_29615;
var G__29621 = count__29587_29616;
var G__29622 = (i__29588_29617 + (1));
seq__29585_29614 = G__29619;
chunk__29586_29615 = G__29620;
count__29587_29616 = G__29621;
i__29588_29617 = G__29622;
continue;
}
} else
{var temp__4126__auto___29623 = cljs.core.seq(seq__29585_29614);if(temp__4126__auto___29623)
{var seq__29585_29624__$1 = temp__4126__auto___29623;if(cljs.core.chunked_seq_QMARK_(seq__29585_29624__$1))
{var c__21126__auto___29625 = cljs.core.chunk_first(seq__29585_29624__$1);{
var G__29626 = cljs.core.chunk_rest(seq__29585_29624__$1);
var G__29627 = c__21126__auto___29625;
var G__29628 = cljs.core.count(c__21126__auto___29625);
var G__29629 = (0);
seq__29585_29614 = G__29626;
chunk__29586_29615 = G__29627;
count__29587_29616 = G__29628;
i__29588_29617 = G__29629;
continue;
}
} else
{var x_29630__$1 = cljs.core.first(seq__29585_29624__$1);arr.push(x_29630__$1);
{
var G__29631 = cljs.core.next(seq__29585_29624__$1);
var G__29632 = null;
var G__29633 = (0);
var G__29634 = (0);
seq__29585_29614 = G__29631;
chunk__29586_29615 = G__29632;
count__29587_29616 = G__29633;
i__29588_29617 = G__29634;
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
cljs.core.IEncodeClojure = (function (){var obj29636 = {};return obj29636;
})();
cljs.core._js__GT_clj = (function _js__GT_clj(x,options){if((function (){var and__19621__auto__ = x;if(and__19621__auto__)
{return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2;
} else
{return and__19621__auto__;
}
})())
{return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2(x,options);
} else
{var x__20845__auto__ = (((x == null))?null:x);return (function (){var or__19663__auto__ = (cljs.core._js__GT_clj[(function (){var G__29640 = x__20845__auto__;return goog.typeOf(G__29640);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._js__GT_clj["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
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
var G__29695__delegate = function (x,opts){if((function (){var G__29669 = x;if(G__29669)
{var bit__20917__auto__ = null;if(cljs.core.truth_((function (){var or__19663__auto__ = bit__20917__auto__;if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return G__29669.cljs$core$IEncodeClojure$;
}
})()))
{return true;
} else
{if((!G__29669.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__29669);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__29669);
}
})())
{return cljs.core._js__GT_clj(x,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,opts));
} else
{if(cljs.core.seq(opts))
{var map__29670 = opts;var map__29670__$1 = ((cljs.core.seq_QMARK_(map__29670))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29670):map__29670);var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29670__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252));var keyfn = (cljs.core.truth_(keywordize_keys)?cljs.core.keyword:cljs.core.str);var f = ((function (map__29670,map__29670__$1,keywordize_keys,keyfn){
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
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__21074__auto__ = ((function (map__29670,map__29670__$1,keywordize_keys,keyfn){
return (function iter__29685(s__29686){return (new cljs.core.LazySeq(null,((function (map__29670,map__29670__$1,keywordize_keys,keyfn){
return (function (){var s__29686__$1 = s__29686;while(true){
var temp__4126__auto__ = cljs.core.seq(s__29686__$1);if(temp__4126__auto__)
{var s__29686__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__29686__$2))
{var c__21072__auto__ = cljs.core.chunk_first(s__29686__$2);var size__21073__auto__ = cljs.core.count(c__21072__auto__);var b__29688 = cljs.core.chunk_buffer(size__21073__auto__);if((function (){var i__29687 = (0);while(true){
if((i__29687 < size__21073__auto__))
{var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21072__auto__,i__29687);cljs.core.chunk_append(b__29688,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29693 = k;return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__29693) : keyfn.call(null,G__29693));
})(),thisfn((x__$1[k]))], null));
{
var G__29696 = (i__29687 + (1));
i__29687 = G__29696;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__29688),iter__29685(cljs.core.chunk_rest(s__29686__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__29688),null);
}
} else
{var k = cljs.core.first(s__29686__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29694 = k;return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__29694) : keyfn.call(null,G__29694));
})(),thisfn((x__$1[k]))], null),iter__29685(cljs.core.rest(s__29686__$2)));
}
} else
{return null;
}
break;
}
});})(map__29670,map__29670__$1,keywordize_keys,keyfn))
,null,null));
});})(map__29670,map__29670__$1,keywordize_keys,keyfn))
;return iter__21074__auto__(cljs.core.js_keys(x__$1));
})());
} else
{return x__$1;

}
}
}
}
});})(map__29670,map__29670__$1,keywordize_keys,keyfn))
;return f(x);
} else
{return null;
}
}
};
var G__29695 = function (x,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__29695__delegate.call(this,x,opts);};
G__29695.cljs$lang$maxFixedArity = 1;
G__29695.cljs$lang$applyTo = (function (arglist__29697){
var x = cljs.core.first(arglist__29697);
var opts = cljs.core.rest(arglist__29697);
return G__29695__delegate(x,opts);
});
G__29695.cljs$core$IFn$_invoke$arity$variadic = G__29695__delegate;
return G__29695;
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
cljs.core.memoize = (function memoize(f){var mem = (function (){var G__29700 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29700) : cljs.core.atom.call(null,G__29700));
})();return ((function (mem){
return (function() { 
var G__29702__delegate = function (args){var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var G__29701 = mem;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29701) : cljs.core.deref.call(null,G__29701));
})(),args,cljs.core.lookup_sentinel);if((v === cljs.core.lookup_sentinel))
{var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,args,ret);
return ret;
} else
{return v;
}
};
var G__29702 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29702__delegate.call(this,args);};
G__29702.cljs$lang$maxFixedArity = 0;
G__29702.cljs$lang$applyTo = (function (arglist__29703){
var args = cljs.core.seq(arglist__29703);
return G__29702__delegate(args);
});
G__29702.cljs$core$IFn$_invoke$arity$variadic = G__29702__delegate;
return G__29702;
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
var G__29705 = ret;
f = G__29705;
continue;
}
} else
{return ret;
}
break;
}
});
var trampoline__2 = (function() { 
var G__29706__delegate = function (f,args){return trampoline.cljs$core$IFn$_invoke$arity$1((function (){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}));
};
var G__29706 = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__29706__delegate.call(this,f,args);};
G__29706.cljs$lang$maxFixedArity = 1;
G__29706.cljs$lang$applyTo = (function (arglist__29707){
var f = cljs.core.first(arglist__29707);
var args = cljs.core.rest(arglist__29707);
return G__29706__delegate(f,args);
});
G__29706.cljs$core$IFn$_invoke$arity$variadic = G__29706__delegate;
return G__29706;
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
cljs.core.rand_int = (function rand_int(n){var G__29710 = ((function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})() * n);return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__29710) : Math.floor.call(null,G__29710));
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
cljs.core.group_by = (function group_by(f,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){var k = (function (){var G__29712 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29712) : f.call(null,G__29712));
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
{cljs.core._global_hierarchy = (function (){var G__29714 = cljs.core.make_hierarchy();return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29714) : cljs.core.atom.call(null,G__29714));
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
swap_global_hierarchy_BANG_.cljs$lang$applyTo = (function (arglist__29715){
var f = cljs.core.first(arglist__29715);
var args = cljs.core.rest(arglist__29715);
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
var isa_QMARK___2 = (function (child,parent){return isa_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__29780 = cljs.core.get_global_hierarchy();return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29780) : cljs.core.deref.call(null,G__29780));
})(),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){var or__19663__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child,parent);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"ancestors","ancestors",-776045424).cljs$core$IFn$_invoke$arity$1(h).call(null,child),parent);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{var and__19621__auto__ = cljs.core.vector_QMARK_(parent);if(and__19621__auto__)
{var and__19621__auto____$1 = cljs.core.vector_QMARK_(child);if(and__19621__auto____$1)
{var and__19621__auto____$2 = (cljs.core.count(parent) === cljs.core.count(child));if(and__19621__auto____$2)
{var ret = true;var i = (0);while(true){
if((!(ret)) || ((i === cljs.core.count(parent))))
{return ret;
} else
{{
var G__29805 = isa_QMARK_.cljs$core$IFn$_invoke$arity$3(h,(function (){var G__29803 = i;return (child.cljs$core$IFn$_invoke$arity$1 ? child.cljs$core$IFn$_invoke$arity$1(G__29803) : child.call(null,G__29803));
})(),(function (){var G__29804 = i;return (parent.cljs$core$IFn$_invoke$arity$1 ? parent.cljs$core$IFn$_invoke$arity$1(G__29804) : parent.call(null,G__29804));
})());
var G__29806 = (i + (1));
ret = G__29805;
i = G__29806;
continue;
}
}
break;
}
} else
{return and__19621__auto____$2;
}
} else
{return and__19621__auto____$1;
}
} else
{return and__19621__auto__;
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
var parents__1 = (function (tag){return parents.cljs$core$IFn$_invoke$arity$2((function (){var G__29810 = cljs.core.get_global_hierarchy();return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29810) : cljs.core.deref.call(null,G__29810));
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
var ancestors__1 = (function (tag){return ancestors.cljs$core$IFn$_invoke$arity$2((function (){var G__29814 = cljs.core.get_global_hierarchy();return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29814) : cljs.core.deref.call(null,G__29814));
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
var descendants__1 = (function (tag){return descendants.cljs$core$IFn$_invoke$arity$2((function (){var G__29818 = cljs.core.get_global_hierarchy();return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29818) : cljs.core.deref.call(null,G__29818));
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
return (function (ret,k){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.get.cljs$core$IFn$_invoke$arity$3(targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons(target,(function (){var G__29827 = target;return (targets.cljs$core$IFn$_invoke$arity$1 ? targets.cljs$core$IFn$_invoke$arity$1(G__29827) : targets.call(null,G__29827));
})())));
});})(tp,td,ta))
,m,cljs.core.cons(source,(function (){var G__29828 = source;return (sources.cljs$core$IFn$_invoke$arity$1 ? sources.cljs$core$IFn$_invoke$arity$1(G__29828) : sources.call(null,G__29828));
})()));
});})(tp,td,ta))
;var or__19663__auto__ = ((cljs.core.contains_QMARK_((function (){var G__29832 = tag;return (tp.cljs$core$IFn$_invoke$arity$1 ? tp.cljs$core$IFn$_invoke$arity$1(G__29832) : tp.call(null,G__29832));
})(),parent))?null:(function (){if(cljs.core.contains_QMARK_((function (){var G__29833 = tag;return (ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(G__29833) : ta.call(null,G__29833));
})(),parent))
{throw (new Error((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+"already has"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent)+"as ancestor")));
} else
{}
if(cljs.core.contains_QMARK_((function (){var G__29834 = parent;return (ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(G__29834) : ta.call(null,G__29834));
})(),tag))
{throw (new Error(("Cyclic derivation:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent)+"has"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+"as ancestor")));
} else
{}
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parents","parents",-2027538891),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(h),tag,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(tp,tag,cljs.core.PersistentHashSet.EMPTY),parent)),new cljs.core.Keyword(null,"ancestors","ancestors",-776045424),tf(new cljs.core.Keyword(null,"ancestors","ancestors",-776045424).cljs$core$IFn$_invoke$arity$1(h),tag,td,parent,ta),new cljs.core.Keyword(null,"descendants","descendants",1824886031),tf(new cljs.core.Keyword(null,"descendants","descendants",1824886031).cljs$core$IFn$_invoke$arity$1(h),parent,ta,tag,td)], null);
})());if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
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
var underive__3 = (function (h,tag,parent){var parentMap = new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(h);var childsParents = (cljs.core.truth_((function (){var G__29841 = tag;return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__29841) : parentMap.call(null,G__29841));
})())?cljs.core.disj.cljs$core$IFn$_invoke$arity$2((function (){var G__29842 = tag;return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__29842) : parentMap.call(null,G__29842));
})(),parent):cljs.core.PersistentHashSet.EMPTY);var newParents = (cljs.core.truth_(cljs.core.not_empty(childsParents))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parentMap,tag,childsParents):cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parentMap,tag));var deriv_seq = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parentMap,childsParents,newParents){
return (function (p1__29835_SHARP_){return cljs.core.cons(cljs.core.first(p1__29835_SHARP_),cljs.core.interpose(cljs.core.first(p1__29835_SHARP_),cljs.core.second(p1__29835_SHARP_)));
});})(parentMap,childsParents,newParents))
,cljs.core.seq(newParents)));if(cljs.core.contains_QMARK_((function (){var G__29843 = tag;return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__29843) : parentMap.call(null,G__29843));
})(),parent))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (parentMap,childsParents,newParents,deriv_seq){
return (function (p1__29836_SHARP_,p2__29837_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.derive,p1__29836_SHARP_,p2__29837_SHARP_);
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
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(method_cache,(function (_){var G__29846 = method_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29846) : cljs.core.deref.call(null,G__29846));
}));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cached_hierarchy,(function (_){var G__29847 = hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29847) : cljs.core.deref.call(null,G__29847));
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){var xprefs = (function (){var G__29863 = prefer_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29863) : cljs.core.deref.call(null,G__29863));
})().call(null,x);var or__19663__auto__ = (cljs.core.truth_((function (){var and__19621__auto__ = xprefs;if(cljs.core.truth_(and__19621__auto__))
{var G__29865 = y;return (xprefs.cljs$core$IFn$_invoke$arity$1 ? xprefs.cljs$core$IFn$_invoke$arity$1(G__29865) : xprefs.call(null,G__29865));
} else
{return and__19621__auto__;
}
})())?true:null);if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(y);while(true){
if((cljs.core.count(ps) > (0)))
{if(cljs.core.truth_(prefers_STAR_(x,cljs.core.first(ps),prefer_table)))
{} else
{}
{
var G__29866 = cljs.core.rest(ps);
ps = G__29866;
continue;
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(or__19663__auto____$1))
{return or__19663__auto____$1;
} else
{var or__19663__auto____$2 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(x);while(true){
if((cljs.core.count(ps) > (0)))
{if(cljs.core.truth_(prefers_STAR_(cljs.core.first(ps),y,prefer_table)))
{} else
{}
{
var G__29867 = cljs.core.rest(ps);
ps = G__29867;
continue;
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(or__19663__auto____$2))
{return or__19663__auto____$2;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){var or__19663__auto__ = cljs.core.prefers_STAR_(x,y,prefer_table);if(cljs.core.truth_(or__19663__auto__))
{return or__19663__auto__;
} else
{return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){var best_entry = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (be,p__29881){var vec__29882 = p__29881;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29882,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29882,(1),null);var e = vec__29882;if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__29883 = hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29883) : cljs.core.deref.call(null,G__29883));
})(),dispatch_val,k))
{var be2 = (cljs.core.truth_((function (){var or__19663__auto__ = (be == null);if(or__19663__auto__)
{return or__19663__auto__;
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
}),null,(function (){var G__29884 = method_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29884) : cljs.core.deref.call(null,G__29884));
})());if(cljs.core.truth_(best_entry))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__29885 = cached_hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29885) : cljs.core.deref.call(null,G__29885));
})(),(function (){var G__29886 = hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29886) : cljs.core.deref.call(null,G__29886));
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
cljs.core.IMultiFn = (function (){var obj29888 = {};return obj29888;
})();
cljs.core._reset = (function _reset(mf){if((function (){var and__19621__auto__ = mf;if(and__19621__auto__)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__19621__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__20845__auto__ = (((mf == null))?null:mf);return (function (){var or__19663__auto__ = (cljs.core._reset[(function (){var G__29892 = x__20845__auto__;return goog.typeOf(G__29892);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._reset["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){if((function (){var and__19621__auto__ = mf;if(and__19621__auto__)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__19621__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__20845__auto__ = (((mf == null))?null:mf);return (function (){var or__19663__auto__ = (cljs.core._add_method[(function (){var G__29896 = x__20845__auto__;return goog.typeOf(G__29896);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._add_method["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){if((function (){var and__19621__auto__ = mf;if(and__19621__auto__)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__19621__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__20845__auto__ = (((mf == null))?null:mf);return (function (){var or__19663__auto__ = (cljs.core._remove_method[(function (){var G__29900 = x__20845__auto__;return goog.typeOf(G__29900);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._remove_method["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){if((function (){var and__19621__auto__ = mf;if(and__19621__auto__)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__19621__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__20845__auto__ = (((mf == null))?null:mf);return (function (){var or__19663__auto__ = (cljs.core._prefer_method[(function (){var G__29904 = x__20845__auto__;return goog.typeOf(G__29904);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._prefer_method["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){if((function (){var and__19621__auto__ = mf;if(and__19621__auto__)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__19621__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__20845__auto__ = (((mf == null))?null:mf);return (function (){var or__19663__auto__ = (cljs.core._get_method[(function (){var G__29908 = x__20845__auto__;return goog.typeOf(G__29908);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._get_method["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){if((function (){var and__19621__auto__ = mf;if(and__19621__auto__)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__19621__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__20845__auto__ = (((mf == null))?null:mf);return (function (){var or__19663__auto__ = (cljs.core._methods[(function (){var G__29912 = x__20845__auto__;return goog.typeOf(G__29912);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._methods["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){if((function (){var and__19621__auto__ = mf;if(and__19621__auto__)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__19621__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__20845__auto__ = (((mf == null))?null:mf);return (function (){var or__19663__auto__ = (cljs.core._prefers[(function (){var G__29916 = x__20845__auto__;return goog.typeOf(G__29916);
})()]);if(or__19663__auto__)
{return or__19663__auto__;
} else
{var or__19663__auto____$1 = (cljs.core._prefers["_"]);if(or__19663__auto____$1)
{return or__19663__auto____$1;
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
cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__29918 = this$__$1;return goog.getUid(G__29918);
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
var mf__$1 = this;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__29919 = self__.cached_hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29919) : cljs.core.deref.call(null,G__29919));
})(),(function (){var G__29920 = self__.hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29920) : cljs.core.deref.call(null,G__29920));
})()))
{} else
{cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
}
var temp__4124__auto__ = (function (){var G__29921 = self__.method_cache;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29921) : cljs.core.deref.call(null,G__29921));
})().call(null,dispatch_val);if(cljs.core.truth_(temp__4124__auto__))
{var target_fn = temp__4124__auto__;return target_fn;
} else
{var temp__4124__auto____$1 = cljs.core.find_and_cache_best_method(self__.name,dispatch_val,self__.hierarchy,self__.method_table,self__.prefer_table,self__.method_cache,self__.cached_hierarchy);if(cljs.core.truth_(temp__4124__auto____$1))
{var target_fn = temp__4124__auto____$1;return target_fn;
} else
{return (function (){var G__29922 = self__.method_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29922) : cljs.core.deref.call(null,G__29922));
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
var mf__$1 = this;var G__29923 = self__.method_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29923) : cljs.core.deref.call(null,G__29923));
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){var self__ = this;
var mf__$1 = this;var G__29924 = self__.prefer_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29924) : cljs.core.deref.call(null,G__29924));
});
cljs.core.MultiFn.prototype.call = (function() {
var G__30765 = null;
var G__30765__2 = (function (self__,a){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__29925 = a;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(G__29925) : self__.dispatch_fn.call(null,G__29925));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__29926 = a;return (target_fn.cljs$core$IFn$_invoke$arity$1 ? target_fn.cljs$core$IFn$_invoke$arity$1(G__29926) : target_fn.call(null,G__29926));
});
var G__30765__3 = (function (self__,a,b){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__29927 = a;var G__29928 = b;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2(G__29927,G__29928) : self__.dispatch_fn.call(null,G__29927,G__29928));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__29929 = a;var G__29930 = b;return (target_fn.cljs$core$IFn$_invoke$arity$2 ? target_fn.cljs$core$IFn$_invoke$arity$2(G__29929,G__29930) : target_fn.call(null,G__29929,G__29930));
});
var G__30765__4 = (function (self__,a,b,c){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__29931 = a;var G__29932 = b;var G__29933 = c;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3(G__29931,G__29932,G__29933) : self__.dispatch_fn.call(null,G__29931,G__29932,G__29933));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__29934 = a;var G__29935 = b;var G__29936 = c;return (target_fn.cljs$core$IFn$_invoke$arity$3 ? target_fn.cljs$core$IFn$_invoke$arity$3(G__29934,G__29935,G__29936) : target_fn.call(null,G__29934,G__29935,G__29936));
});
var G__30765__5 = (function (self__,a,b,c,d){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__29937 = a;var G__29938 = b;var G__29939 = c;var G__29940 = d;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4(G__29937,G__29938,G__29939,G__29940) : self__.dispatch_fn.call(null,G__29937,G__29938,G__29939,G__29940));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__29941 = a;var G__29942 = b;var G__29943 = c;var G__29944 = d;return (target_fn.cljs$core$IFn$_invoke$arity$4 ? target_fn.cljs$core$IFn$_invoke$arity$4(G__29941,G__29942,G__29943,G__29944) : target_fn.call(null,G__29941,G__29942,G__29943,G__29944));
});
var G__30765__6 = (function (self__,a,b,c,d,e){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__29945 = a;var G__29946 = b;var G__29947 = c;var G__29948 = d;var G__29949 = e;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5(G__29945,G__29946,G__29947,G__29948,G__29949) : self__.dispatch_fn.call(null,G__29945,G__29946,G__29947,G__29948,G__29949));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__29950 = a;var G__29951 = b;var G__29952 = c;var G__29953 = d;var G__29954 = e;return (target_fn.cljs$core$IFn$_invoke$arity$5 ? target_fn.cljs$core$IFn$_invoke$arity$5(G__29950,G__29951,G__29952,G__29953,G__29954) : target_fn.call(null,G__29950,G__29951,G__29952,G__29953,G__29954));
});
var G__30765__7 = (function (self__,a,b,c,d,e,f){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__29955 = a;var G__29956 = b;var G__29957 = c;var G__29958 = d;var G__29959 = e;var G__29960 = f;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6(G__29955,G__29956,G__29957,G__29958,G__29959,G__29960) : self__.dispatch_fn.call(null,G__29955,G__29956,G__29957,G__29958,G__29959,G__29960));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__29961 = a;var G__29962 = b;var G__29963 = c;var G__29964 = d;var G__29965 = e;var G__29966 = f;return (target_fn.cljs$core$IFn$_invoke$arity$6 ? target_fn.cljs$core$IFn$_invoke$arity$6(G__29961,G__29962,G__29963,G__29964,G__29965,G__29966) : target_fn.call(null,G__29961,G__29962,G__29963,G__29964,G__29965,G__29966));
});
var G__30765__8 = (function (self__,a,b,c,d,e,f,g){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__29967 = a;var G__29968 = b;var G__29969 = c;var G__29970 = d;var G__29971 = e;var G__29972 = f;var G__29973 = g;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7(G__29967,G__29968,G__29969,G__29970,G__29971,G__29972,G__29973) : self__.dispatch_fn.call(null,G__29967,G__29968,G__29969,G__29970,G__29971,G__29972,G__29973));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__29974 = a;var G__29975 = b;var G__29976 = c;var G__29977 = d;var G__29978 = e;var G__29979 = f;var G__29980 = g;return (target_fn.cljs$core$IFn$_invoke$arity$7 ? target_fn.cljs$core$IFn$_invoke$arity$7(G__29974,G__29975,G__29976,G__29977,G__29978,G__29979,G__29980) : target_fn.call(null,G__29974,G__29975,G__29976,G__29977,G__29978,G__29979,G__29980));
});
var G__30765__9 = (function (self__,a,b,c,d,e,f,g,h){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__29981 = a;var G__29982 = b;var G__29983 = c;var G__29984 = d;var G__29985 = e;var G__29986 = f;var G__29987 = g;var G__29988 = h;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8(G__29981,G__29982,G__29983,G__29984,G__29985,G__29986,G__29987,G__29988) : self__.dispatch_fn.call(null,G__29981,G__29982,G__29983,G__29984,G__29985,G__29986,G__29987,G__29988));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__29989 = a;var G__29990 = b;var G__29991 = c;var G__29992 = d;var G__29993 = e;var G__29994 = f;var G__29995 = g;var G__29996 = h;return (target_fn.cljs$core$IFn$_invoke$arity$8 ? target_fn.cljs$core$IFn$_invoke$arity$8(G__29989,G__29990,G__29991,G__29992,G__29993,G__29994,G__29995,G__29996) : target_fn.call(null,G__29989,G__29990,G__29991,G__29992,G__29993,G__29994,G__29995,G__29996));
});
var G__30765__10 = (function (self__,a,b,c,d,e,f,g,h,i){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__29997 = a;var G__29998 = b;var G__29999 = c;var G__30000 = d;var G__30001 = e;var G__30002 = f;var G__30003 = g;var G__30004 = h;var G__30005 = i;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9(G__29997,G__29998,G__29999,G__30000,G__30001,G__30002,G__30003,G__30004,G__30005) : self__.dispatch_fn.call(null,G__29997,G__29998,G__29999,G__30000,G__30001,G__30002,G__30003,G__30004,G__30005));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30006 = a;var G__30007 = b;var G__30008 = c;var G__30009 = d;var G__30010 = e;var G__30011 = f;var G__30012 = g;var G__30013 = h;var G__30014 = i;return (target_fn.cljs$core$IFn$_invoke$arity$9 ? target_fn.cljs$core$IFn$_invoke$arity$9(G__30006,G__30007,G__30008,G__30009,G__30010,G__30011,G__30012,G__30013,G__30014) : target_fn.call(null,G__30006,G__30007,G__30008,G__30009,G__30010,G__30011,G__30012,G__30013,G__30014));
});
var G__30765__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__30015 = a;var G__30016 = b;var G__30017 = c;var G__30018 = d;var G__30019 = e;var G__30020 = f;var G__30021 = g;var G__30022 = h;var G__30023 = i;var G__30024 = j;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10(G__30015,G__30016,G__30017,G__30018,G__30019,G__30020,G__30021,G__30022,G__30023,G__30024) : self__.dispatch_fn.call(null,G__30015,G__30016,G__30017,G__30018,G__30019,G__30020,G__30021,G__30022,G__30023,G__30024));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30025 = a;var G__30026 = b;var G__30027 = c;var G__30028 = d;var G__30029 = e;var G__30030 = f;var G__30031 = g;var G__30032 = h;var G__30033 = i;var G__30034 = j;return (target_fn.cljs$core$IFn$_invoke$arity$10 ? target_fn.cljs$core$IFn$_invoke$arity$10(G__30025,G__30026,G__30027,G__30028,G__30029,G__30030,G__30031,G__30032,G__30033,G__30034) : target_fn.call(null,G__30025,G__30026,G__30027,G__30028,G__30029,G__30030,G__30031,G__30032,G__30033,G__30034));
});
var G__30765__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__30035 = a;var G__30036 = b;var G__30037 = c;var G__30038 = d;var G__30039 = e;var G__30040 = f;var G__30041 = g;var G__30042 = h;var G__30043 = i;var G__30044 = j;var G__30045 = k;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11(G__30035,G__30036,G__30037,G__30038,G__30039,G__30040,G__30041,G__30042,G__30043,G__30044,G__30045) : self__.dispatch_fn.call(null,G__30035,G__30036,G__30037,G__30038,G__30039,G__30040,G__30041,G__30042,G__30043,G__30044,G__30045));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30046 = a;var G__30047 = b;var G__30048 = c;var G__30049 = d;var G__30050 = e;var G__30051 = f;var G__30052 = g;var G__30053 = h;var G__30054 = i;var G__30055 = j;var G__30056 = k;return (target_fn.cljs$core$IFn$_invoke$arity$11 ? target_fn.cljs$core$IFn$_invoke$arity$11(G__30046,G__30047,G__30048,G__30049,G__30050,G__30051,G__30052,G__30053,G__30054,G__30055,G__30056) : target_fn.call(null,G__30046,G__30047,G__30048,G__30049,G__30050,G__30051,G__30052,G__30053,G__30054,G__30055,G__30056));
});
var G__30765__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__30057 = a;var G__30058 = b;var G__30059 = c;var G__30060 = d;var G__30061 = e;var G__30062 = f;var G__30063 = g;var G__30064 = h;var G__30065 = i;var G__30066 = j;var G__30067 = k;var G__30068 = l;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12(G__30057,G__30058,G__30059,G__30060,G__30061,G__30062,G__30063,G__30064,G__30065,G__30066,G__30067,G__30068) : self__.dispatch_fn.call(null,G__30057,G__30058,G__30059,G__30060,G__30061,G__30062,G__30063,G__30064,G__30065,G__30066,G__30067,G__30068));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30069 = a;var G__30070 = b;var G__30071 = c;var G__30072 = d;var G__30073 = e;var G__30074 = f;var G__30075 = g;var G__30076 = h;var G__30077 = i;var G__30078 = j;var G__30079 = k;var G__30080 = l;return (target_fn.cljs$core$IFn$_invoke$arity$12 ? target_fn.cljs$core$IFn$_invoke$arity$12(G__30069,G__30070,G__30071,G__30072,G__30073,G__30074,G__30075,G__30076,G__30077,G__30078,G__30079,G__30080) : target_fn.call(null,G__30069,G__30070,G__30071,G__30072,G__30073,G__30074,G__30075,G__30076,G__30077,G__30078,G__30079,G__30080));
});
var G__30765__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__30081 = a;var G__30082 = b;var G__30083 = c;var G__30084 = d;var G__30085 = e;var G__30086 = f;var G__30087 = g;var G__30088 = h;var G__30089 = i;var G__30090 = j;var G__30091 = k;var G__30092 = l;var G__30093 = m;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13(G__30081,G__30082,G__30083,G__30084,G__30085,G__30086,G__30087,G__30088,G__30089,G__30090,G__30091,G__30092,G__30093) : self__.dispatch_fn.call(null,G__30081,G__30082,G__30083,G__30084,G__30085,G__30086,G__30087,G__30088,G__30089,G__30090,G__30091,G__30092,G__30093));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30094 = a;var G__30095 = b;var G__30096 = c;var G__30097 = d;var G__30098 = e;var G__30099 = f;var G__30100 = g;var G__30101 = h;var G__30102 = i;var G__30103 = j;var G__30104 = k;var G__30105 = l;var G__30106 = m;return (target_fn.cljs$core$IFn$_invoke$arity$13 ? target_fn.cljs$core$IFn$_invoke$arity$13(G__30094,G__30095,G__30096,G__30097,G__30098,G__30099,G__30100,G__30101,G__30102,G__30103,G__30104,G__30105,G__30106) : target_fn.call(null,G__30094,G__30095,G__30096,G__30097,G__30098,G__30099,G__30100,G__30101,G__30102,G__30103,G__30104,G__30105,G__30106));
});
var G__30765__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__30107 = a;var G__30108 = b;var G__30109 = c;var G__30110 = d;var G__30111 = e;var G__30112 = f;var G__30113 = g;var G__30114 = h;var G__30115 = i;var G__30116 = j;var G__30117 = k;var G__30118 = l;var G__30119 = m;var G__30120 = n;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14(G__30107,G__30108,G__30109,G__30110,G__30111,G__30112,G__30113,G__30114,G__30115,G__30116,G__30117,G__30118,G__30119,G__30120) : self__.dispatch_fn.call(null,G__30107,G__30108,G__30109,G__30110,G__30111,G__30112,G__30113,G__30114,G__30115,G__30116,G__30117,G__30118,G__30119,G__30120));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30121 = a;var G__30122 = b;var G__30123 = c;var G__30124 = d;var G__30125 = e;var G__30126 = f;var G__30127 = g;var G__30128 = h;var G__30129 = i;var G__30130 = j;var G__30131 = k;var G__30132 = l;var G__30133 = m;var G__30134 = n;return (target_fn.cljs$core$IFn$_invoke$arity$14 ? target_fn.cljs$core$IFn$_invoke$arity$14(G__30121,G__30122,G__30123,G__30124,G__30125,G__30126,G__30127,G__30128,G__30129,G__30130,G__30131,G__30132,G__30133,G__30134) : target_fn.call(null,G__30121,G__30122,G__30123,G__30124,G__30125,G__30126,G__30127,G__30128,G__30129,G__30130,G__30131,G__30132,G__30133,G__30134));
});
var G__30765__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__30135 = a;var G__30136 = b;var G__30137 = c;var G__30138 = d;var G__30139 = e;var G__30140 = f;var G__30141 = g;var G__30142 = h;var G__30143 = i;var G__30144 = j;var G__30145 = k;var G__30146 = l;var G__30147 = m;var G__30148 = n;var G__30149 = o;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15(G__30135,G__30136,G__30137,G__30138,G__30139,G__30140,G__30141,G__30142,G__30143,G__30144,G__30145,G__30146,G__30147,G__30148,G__30149) : self__.dispatch_fn.call(null,G__30135,G__30136,G__30137,G__30138,G__30139,G__30140,G__30141,G__30142,G__30143,G__30144,G__30145,G__30146,G__30147,G__30148,G__30149));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30150 = a;var G__30151 = b;var G__30152 = c;var G__30153 = d;var G__30154 = e;var G__30155 = f;var G__30156 = g;var G__30157 = h;var G__30158 = i;var G__30159 = j;var G__30160 = k;var G__30161 = l;var G__30162 = m;var G__30163 = n;var G__30164 = o;return (target_fn.cljs$core$IFn$_invoke$arity$15 ? target_fn.cljs$core$IFn$_invoke$arity$15(G__30150,G__30151,G__30152,G__30153,G__30154,G__30155,G__30156,G__30157,G__30158,G__30159,G__30160,G__30161,G__30162,G__30163,G__30164) : target_fn.call(null,G__30150,G__30151,G__30152,G__30153,G__30154,G__30155,G__30156,G__30157,G__30158,G__30159,G__30160,G__30161,G__30162,G__30163,G__30164));
});
var G__30765__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__30165 = a;var G__30166 = b;var G__30167 = c;var G__30168 = d;var G__30169 = e;var G__30170 = f;var G__30171 = g;var G__30172 = h;var G__30173 = i;var G__30174 = j;var G__30175 = k;var G__30176 = l;var G__30177 = m;var G__30178 = n;var G__30179 = o;var G__30180 = p;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16(G__30165,G__30166,G__30167,G__30168,G__30169,G__30170,G__30171,G__30172,G__30173,G__30174,G__30175,G__30176,G__30177,G__30178,G__30179,G__30180) : self__.dispatch_fn.call(null,G__30165,G__30166,G__30167,G__30168,G__30169,G__30170,G__30171,G__30172,G__30173,G__30174,G__30175,G__30176,G__30177,G__30178,G__30179,G__30180));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30181 = a;var G__30182 = b;var G__30183 = c;var G__30184 = d;var G__30185 = e;var G__30186 = f;var G__30187 = g;var G__30188 = h;var G__30189 = i;var G__30190 = j;var G__30191 = k;var G__30192 = l;var G__30193 = m;var G__30194 = n;var G__30195 = o;var G__30196 = p;return (target_fn.cljs$core$IFn$_invoke$arity$16 ? target_fn.cljs$core$IFn$_invoke$arity$16(G__30181,G__30182,G__30183,G__30184,G__30185,G__30186,G__30187,G__30188,G__30189,G__30190,G__30191,G__30192,G__30193,G__30194,G__30195,G__30196) : target_fn.call(null,G__30181,G__30182,G__30183,G__30184,G__30185,G__30186,G__30187,G__30188,G__30189,G__30190,G__30191,G__30192,G__30193,G__30194,G__30195,G__30196));
});
var G__30765__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__30197 = a;var G__30198 = b;var G__30199 = c;var G__30200 = d;var G__30201 = e;var G__30202 = f;var G__30203 = g;var G__30204 = h;var G__30205 = i;var G__30206 = j;var G__30207 = k;var G__30208 = l;var G__30209 = m;var G__30210 = n;var G__30211 = o;var G__30212 = p;var G__30213 = q;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17(G__30197,G__30198,G__30199,G__30200,G__30201,G__30202,G__30203,G__30204,G__30205,G__30206,G__30207,G__30208,G__30209,G__30210,G__30211,G__30212,G__30213) : self__.dispatch_fn.call(null,G__30197,G__30198,G__30199,G__30200,G__30201,G__30202,G__30203,G__30204,G__30205,G__30206,G__30207,G__30208,G__30209,G__30210,G__30211,G__30212,G__30213));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30214 = a;var G__30215 = b;var G__30216 = c;var G__30217 = d;var G__30218 = e;var G__30219 = f;var G__30220 = g;var G__30221 = h;var G__30222 = i;var G__30223 = j;var G__30224 = k;var G__30225 = l;var G__30226 = m;var G__30227 = n;var G__30228 = o;var G__30229 = p;var G__30230 = q;return (target_fn.cljs$core$IFn$_invoke$arity$17 ? target_fn.cljs$core$IFn$_invoke$arity$17(G__30214,G__30215,G__30216,G__30217,G__30218,G__30219,G__30220,G__30221,G__30222,G__30223,G__30224,G__30225,G__30226,G__30227,G__30228,G__30229,G__30230) : target_fn.call(null,G__30214,G__30215,G__30216,G__30217,G__30218,G__30219,G__30220,G__30221,G__30222,G__30223,G__30224,G__30225,G__30226,G__30227,G__30228,G__30229,G__30230));
});
var G__30765__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__30231 = a;var G__30232 = b;var G__30233 = c;var G__30234 = d;var G__30235 = e;var G__30236 = f;var G__30237 = g;var G__30238 = h;var G__30239 = i;var G__30240 = j;var G__30241 = k;var G__30242 = l;var G__30243 = m;var G__30244 = n;var G__30245 = o;var G__30246 = p;var G__30247 = q;var G__30248 = r;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18(G__30231,G__30232,G__30233,G__30234,G__30235,G__30236,G__30237,G__30238,G__30239,G__30240,G__30241,G__30242,G__30243,G__30244,G__30245,G__30246,G__30247,G__30248) : self__.dispatch_fn.call(null,G__30231,G__30232,G__30233,G__30234,G__30235,G__30236,G__30237,G__30238,G__30239,G__30240,G__30241,G__30242,G__30243,G__30244,G__30245,G__30246,G__30247,G__30248));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30249 = a;var G__30250 = b;var G__30251 = c;var G__30252 = d;var G__30253 = e;var G__30254 = f;var G__30255 = g;var G__30256 = h;var G__30257 = i;var G__30258 = j;var G__30259 = k;var G__30260 = l;var G__30261 = m;var G__30262 = n;var G__30263 = o;var G__30264 = p;var G__30265 = q;var G__30266 = r;return (target_fn.cljs$core$IFn$_invoke$arity$18 ? target_fn.cljs$core$IFn$_invoke$arity$18(G__30249,G__30250,G__30251,G__30252,G__30253,G__30254,G__30255,G__30256,G__30257,G__30258,G__30259,G__30260,G__30261,G__30262,G__30263,G__30264,G__30265,G__30266) : target_fn.call(null,G__30249,G__30250,G__30251,G__30252,G__30253,G__30254,G__30255,G__30256,G__30257,G__30258,G__30259,G__30260,G__30261,G__30262,G__30263,G__30264,G__30265,G__30266));
});
var G__30765__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__30267 = a;var G__30268 = b;var G__30269 = c;var G__30270 = d;var G__30271 = e;var G__30272 = f;var G__30273 = g;var G__30274 = h;var G__30275 = i;var G__30276 = j;var G__30277 = k;var G__30278 = l;var G__30279 = m;var G__30280 = n;var G__30281 = o;var G__30282 = p;var G__30283 = q;var G__30284 = r;var G__30285 = s;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19(G__30267,G__30268,G__30269,G__30270,G__30271,G__30272,G__30273,G__30274,G__30275,G__30276,G__30277,G__30278,G__30279,G__30280,G__30281,G__30282,G__30283,G__30284,G__30285) : self__.dispatch_fn.call(null,G__30267,G__30268,G__30269,G__30270,G__30271,G__30272,G__30273,G__30274,G__30275,G__30276,G__30277,G__30278,G__30279,G__30280,G__30281,G__30282,G__30283,G__30284,G__30285));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30286 = a;var G__30287 = b;var G__30288 = c;var G__30289 = d;var G__30290 = e;var G__30291 = f;var G__30292 = g;var G__30293 = h;var G__30294 = i;var G__30295 = j;var G__30296 = k;var G__30297 = l;var G__30298 = m;var G__30299 = n;var G__30300 = o;var G__30301 = p;var G__30302 = q;var G__30303 = r;var G__30304 = s;return (target_fn.cljs$core$IFn$_invoke$arity$19 ? target_fn.cljs$core$IFn$_invoke$arity$19(G__30286,G__30287,G__30288,G__30289,G__30290,G__30291,G__30292,G__30293,G__30294,G__30295,G__30296,G__30297,G__30298,G__30299,G__30300,G__30301,G__30302,G__30303,G__30304) : target_fn.call(null,G__30286,G__30287,G__30288,G__30289,G__30290,G__30291,G__30292,G__30293,G__30294,G__30295,G__30296,G__30297,G__30298,G__30299,G__30300,G__30301,G__30302,G__30303,G__30304));
});
var G__30765__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__30305 = a;var G__30306 = b;var G__30307 = c;var G__30308 = d;var G__30309 = e;var G__30310 = f;var G__30311 = g;var G__30312 = h;var G__30313 = i;var G__30314 = j;var G__30315 = k;var G__30316 = l;var G__30317 = m;var G__30318 = n;var G__30319 = o;var G__30320 = p;var G__30321 = q;var G__30322 = r;var G__30323 = s;var G__30324 = t;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20(G__30305,G__30306,G__30307,G__30308,G__30309,G__30310,G__30311,G__30312,G__30313,G__30314,G__30315,G__30316,G__30317,G__30318,G__30319,G__30320,G__30321,G__30322,G__30323,G__30324) : self__.dispatch_fn.call(null,G__30305,G__30306,G__30307,G__30308,G__30309,G__30310,G__30311,G__30312,G__30313,G__30314,G__30315,G__30316,G__30317,G__30318,G__30319,G__30320,G__30321,G__30322,G__30323,G__30324));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30325 = a;var G__30326 = b;var G__30327 = c;var G__30328 = d;var G__30329 = e;var G__30330 = f;var G__30331 = g;var G__30332 = h;var G__30333 = i;var G__30334 = j;var G__30335 = k;var G__30336 = l;var G__30337 = m;var G__30338 = n;var G__30339 = o;var G__30340 = p;var G__30341 = q;var G__30342 = r;var G__30343 = s;var G__30344 = t;return (target_fn.cljs$core$IFn$_invoke$arity$20 ? target_fn.cljs$core$IFn$_invoke$arity$20(G__30325,G__30326,G__30327,G__30328,G__30329,G__30330,G__30331,G__30332,G__30333,G__30334,G__30335,G__30336,G__30337,G__30338,G__30339,G__30340,G__30341,G__30342,G__30343,G__30344) : target_fn.call(null,G__30325,G__30326,G__30327,G__30328,G__30329,G__30330,G__30331,G__30332,G__30333,G__30334,G__30335,G__30336,G__30337,G__30338,G__30339,G__30340,G__30341,G__30342,G__30343,G__30344));
});
var G__30765__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.dispatch_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(target_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__30765 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 2:
return G__30765__2.call(this,self__,a);
case 3:
return G__30765__3.call(this,self__,a,b);
case 4:
return G__30765__4.call(this,self__,a,b,c);
case 5:
return G__30765__5.call(this,self__,a,b,c,d);
case 6:
return G__30765__6.call(this,self__,a,b,c,d,e);
case 7:
return G__30765__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__30765__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__30765__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__30765__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__30765__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__30765__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__30765__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__30765__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__30765__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__30765__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__30765__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__30765__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__30765__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__30765__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__30765__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__30765__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30765.cljs$core$IFn$_invoke$arity$2 = G__30765__2;
G__30765.cljs$core$IFn$_invoke$arity$3 = G__30765__3;
G__30765.cljs$core$IFn$_invoke$arity$4 = G__30765__4;
G__30765.cljs$core$IFn$_invoke$arity$5 = G__30765__5;
G__30765.cljs$core$IFn$_invoke$arity$6 = G__30765__6;
G__30765.cljs$core$IFn$_invoke$arity$7 = G__30765__7;
G__30765.cljs$core$IFn$_invoke$arity$8 = G__30765__8;
G__30765.cljs$core$IFn$_invoke$arity$9 = G__30765__9;
G__30765.cljs$core$IFn$_invoke$arity$10 = G__30765__10;
G__30765.cljs$core$IFn$_invoke$arity$11 = G__30765__11;
G__30765.cljs$core$IFn$_invoke$arity$12 = G__30765__12;
G__30765.cljs$core$IFn$_invoke$arity$13 = G__30765__13;
G__30765.cljs$core$IFn$_invoke$arity$14 = G__30765__14;
G__30765.cljs$core$IFn$_invoke$arity$15 = G__30765__15;
G__30765.cljs$core$IFn$_invoke$arity$16 = G__30765__16;
G__30765.cljs$core$IFn$_invoke$arity$17 = G__30765__17;
G__30765.cljs$core$IFn$_invoke$arity$18 = G__30765__18;
G__30765.cljs$core$IFn$_invoke$arity$19 = G__30765__19;
G__30765.cljs$core$IFn$_invoke$arity$20 = G__30765__20;
G__30765.cljs$core$IFn$_invoke$arity$21 = G__30765__21;
G__30765.cljs$core$IFn$_invoke$arity$22 = G__30765__22;
return G__30765;
})()
;
cljs.core.MultiFn.prototype.apply = (function (self__,args29917){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args29917)));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30345 = a;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(G__30345) : self__.dispatch_fn.call(null,G__30345));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30346 = a;return (target_fn.cljs$core$IFn$_invoke$arity$1 ? target_fn.cljs$core$IFn$_invoke$arity$1(G__30346) : target_fn.call(null,G__30346));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30347 = a;var G__30348 = b;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2(G__30347,G__30348) : self__.dispatch_fn.call(null,G__30347,G__30348));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30349 = a;var G__30350 = b;return (target_fn.cljs$core$IFn$_invoke$arity$2 ? target_fn.cljs$core$IFn$_invoke$arity$2(G__30349,G__30350) : target_fn.call(null,G__30349,G__30350));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30351 = a;var G__30352 = b;var G__30353 = c;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3(G__30351,G__30352,G__30353) : self__.dispatch_fn.call(null,G__30351,G__30352,G__30353));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30354 = a;var G__30355 = b;var G__30356 = c;return (target_fn.cljs$core$IFn$_invoke$arity$3 ? target_fn.cljs$core$IFn$_invoke$arity$3(G__30354,G__30355,G__30356) : target_fn.call(null,G__30354,G__30355,G__30356));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30357 = a;var G__30358 = b;var G__30359 = c;var G__30360 = d;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4(G__30357,G__30358,G__30359,G__30360) : self__.dispatch_fn.call(null,G__30357,G__30358,G__30359,G__30360));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30361 = a;var G__30362 = b;var G__30363 = c;var G__30364 = d;return (target_fn.cljs$core$IFn$_invoke$arity$4 ? target_fn.cljs$core$IFn$_invoke$arity$4(G__30361,G__30362,G__30363,G__30364) : target_fn.call(null,G__30361,G__30362,G__30363,G__30364));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30365 = a;var G__30366 = b;var G__30367 = c;var G__30368 = d;var G__30369 = e;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5(G__30365,G__30366,G__30367,G__30368,G__30369) : self__.dispatch_fn.call(null,G__30365,G__30366,G__30367,G__30368,G__30369));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30370 = a;var G__30371 = b;var G__30372 = c;var G__30373 = d;var G__30374 = e;return (target_fn.cljs$core$IFn$_invoke$arity$5 ? target_fn.cljs$core$IFn$_invoke$arity$5(G__30370,G__30371,G__30372,G__30373,G__30374) : target_fn.call(null,G__30370,G__30371,G__30372,G__30373,G__30374));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30375 = a;var G__30376 = b;var G__30377 = c;var G__30378 = d;var G__30379 = e;var G__30380 = f;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6(G__30375,G__30376,G__30377,G__30378,G__30379,G__30380) : self__.dispatch_fn.call(null,G__30375,G__30376,G__30377,G__30378,G__30379,G__30380));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30381 = a;var G__30382 = b;var G__30383 = c;var G__30384 = d;var G__30385 = e;var G__30386 = f;return (target_fn.cljs$core$IFn$_invoke$arity$6 ? target_fn.cljs$core$IFn$_invoke$arity$6(G__30381,G__30382,G__30383,G__30384,G__30385,G__30386) : target_fn.call(null,G__30381,G__30382,G__30383,G__30384,G__30385,G__30386));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30387 = a;var G__30388 = b;var G__30389 = c;var G__30390 = d;var G__30391 = e;var G__30392 = f;var G__30393 = g;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7(G__30387,G__30388,G__30389,G__30390,G__30391,G__30392,G__30393) : self__.dispatch_fn.call(null,G__30387,G__30388,G__30389,G__30390,G__30391,G__30392,G__30393));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30394 = a;var G__30395 = b;var G__30396 = c;var G__30397 = d;var G__30398 = e;var G__30399 = f;var G__30400 = g;return (target_fn.cljs$core$IFn$_invoke$arity$7 ? target_fn.cljs$core$IFn$_invoke$arity$7(G__30394,G__30395,G__30396,G__30397,G__30398,G__30399,G__30400) : target_fn.call(null,G__30394,G__30395,G__30396,G__30397,G__30398,G__30399,G__30400));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30401 = a;var G__30402 = b;var G__30403 = c;var G__30404 = d;var G__30405 = e;var G__30406 = f;var G__30407 = g;var G__30408 = h;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8(G__30401,G__30402,G__30403,G__30404,G__30405,G__30406,G__30407,G__30408) : self__.dispatch_fn.call(null,G__30401,G__30402,G__30403,G__30404,G__30405,G__30406,G__30407,G__30408));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30409 = a;var G__30410 = b;var G__30411 = c;var G__30412 = d;var G__30413 = e;var G__30414 = f;var G__30415 = g;var G__30416 = h;return (target_fn.cljs$core$IFn$_invoke$arity$8 ? target_fn.cljs$core$IFn$_invoke$arity$8(G__30409,G__30410,G__30411,G__30412,G__30413,G__30414,G__30415,G__30416) : target_fn.call(null,G__30409,G__30410,G__30411,G__30412,G__30413,G__30414,G__30415,G__30416));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30417 = a;var G__30418 = b;var G__30419 = c;var G__30420 = d;var G__30421 = e;var G__30422 = f;var G__30423 = g;var G__30424 = h;var G__30425 = i;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9(G__30417,G__30418,G__30419,G__30420,G__30421,G__30422,G__30423,G__30424,G__30425) : self__.dispatch_fn.call(null,G__30417,G__30418,G__30419,G__30420,G__30421,G__30422,G__30423,G__30424,G__30425));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30426 = a;var G__30427 = b;var G__30428 = c;var G__30429 = d;var G__30430 = e;var G__30431 = f;var G__30432 = g;var G__30433 = h;var G__30434 = i;return (target_fn.cljs$core$IFn$_invoke$arity$9 ? target_fn.cljs$core$IFn$_invoke$arity$9(G__30426,G__30427,G__30428,G__30429,G__30430,G__30431,G__30432,G__30433,G__30434) : target_fn.call(null,G__30426,G__30427,G__30428,G__30429,G__30430,G__30431,G__30432,G__30433,G__30434));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30435 = a;var G__30436 = b;var G__30437 = c;var G__30438 = d;var G__30439 = e;var G__30440 = f;var G__30441 = g;var G__30442 = h;var G__30443 = i;var G__30444 = j;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10(G__30435,G__30436,G__30437,G__30438,G__30439,G__30440,G__30441,G__30442,G__30443,G__30444) : self__.dispatch_fn.call(null,G__30435,G__30436,G__30437,G__30438,G__30439,G__30440,G__30441,G__30442,G__30443,G__30444));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30445 = a;var G__30446 = b;var G__30447 = c;var G__30448 = d;var G__30449 = e;var G__30450 = f;var G__30451 = g;var G__30452 = h;var G__30453 = i;var G__30454 = j;return (target_fn.cljs$core$IFn$_invoke$arity$10 ? target_fn.cljs$core$IFn$_invoke$arity$10(G__30445,G__30446,G__30447,G__30448,G__30449,G__30450,G__30451,G__30452,G__30453,G__30454) : target_fn.call(null,G__30445,G__30446,G__30447,G__30448,G__30449,G__30450,G__30451,G__30452,G__30453,G__30454));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30455 = a;var G__30456 = b;var G__30457 = c;var G__30458 = d;var G__30459 = e;var G__30460 = f;var G__30461 = g;var G__30462 = h;var G__30463 = i;var G__30464 = j;var G__30465 = k;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11(G__30455,G__30456,G__30457,G__30458,G__30459,G__30460,G__30461,G__30462,G__30463,G__30464,G__30465) : self__.dispatch_fn.call(null,G__30455,G__30456,G__30457,G__30458,G__30459,G__30460,G__30461,G__30462,G__30463,G__30464,G__30465));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30466 = a;var G__30467 = b;var G__30468 = c;var G__30469 = d;var G__30470 = e;var G__30471 = f;var G__30472 = g;var G__30473 = h;var G__30474 = i;var G__30475 = j;var G__30476 = k;return (target_fn.cljs$core$IFn$_invoke$arity$11 ? target_fn.cljs$core$IFn$_invoke$arity$11(G__30466,G__30467,G__30468,G__30469,G__30470,G__30471,G__30472,G__30473,G__30474,G__30475,G__30476) : target_fn.call(null,G__30466,G__30467,G__30468,G__30469,G__30470,G__30471,G__30472,G__30473,G__30474,G__30475,G__30476));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30477 = a;var G__30478 = b;var G__30479 = c;var G__30480 = d;var G__30481 = e;var G__30482 = f;var G__30483 = g;var G__30484 = h;var G__30485 = i;var G__30486 = j;var G__30487 = k;var G__30488 = l;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12(G__30477,G__30478,G__30479,G__30480,G__30481,G__30482,G__30483,G__30484,G__30485,G__30486,G__30487,G__30488) : self__.dispatch_fn.call(null,G__30477,G__30478,G__30479,G__30480,G__30481,G__30482,G__30483,G__30484,G__30485,G__30486,G__30487,G__30488));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30489 = a;var G__30490 = b;var G__30491 = c;var G__30492 = d;var G__30493 = e;var G__30494 = f;var G__30495 = g;var G__30496 = h;var G__30497 = i;var G__30498 = j;var G__30499 = k;var G__30500 = l;return (target_fn.cljs$core$IFn$_invoke$arity$12 ? target_fn.cljs$core$IFn$_invoke$arity$12(G__30489,G__30490,G__30491,G__30492,G__30493,G__30494,G__30495,G__30496,G__30497,G__30498,G__30499,G__30500) : target_fn.call(null,G__30489,G__30490,G__30491,G__30492,G__30493,G__30494,G__30495,G__30496,G__30497,G__30498,G__30499,G__30500));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30501 = a;var G__30502 = b;var G__30503 = c;var G__30504 = d;var G__30505 = e;var G__30506 = f;var G__30507 = g;var G__30508 = h;var G__30509 = i;var G__30510 = j;var G__30511 = k;var G__30512 = l;var G__30513 = m;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13(G__30501,G__30502,G__30503,G__30504,G__30505,G__30506,G__30507,G__30508,G__30509,G__30510,G__30511,G__30512,G__30513) : self__.dispatch_fn.call(null,G__30501,G__30502,G__30503,G__30504,G__30505,G__30506,G__30507,G__30508,G__30509,G__30510,G__30511,G__30512,G__30513));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30514 = a;var G__30515 = b;var G__30516 = c;var G__30517 = d;var G__30518 = e;var G__30519 = f;var G__30520 = g;var G__30521 = h;var G__30522 = i;var G__30523 = j;var G__30524 = k;var G__30525 = l;var G__30526 = m;return (target_fn.cljs$core$IFn$_invoke$arity$13 ? target_fn.cljs$core$IFn$_invoke$arity$13(G__30514,G__30515,G__30516,G__30517,G__30518,G__30519,G__30520,G__30521,G__30522,G__30523,G__30524,G__30525,G__30526) : target_fn.call(null,G__30514,G__30515,G__30516,G__30517,G__30518,G__30519,G__30520,G__30521,G__30522,G__30523,G__30524,G__30525,G__30526));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30527 = a;var G__30528 = b;var G__30529 = c;var G__30530 = d;var G__30531 = e;var G__30532 = f;var G__30533 = g;var G__30534 = h;var G__30535 = i;var G__30536 = j;var G__30537 = k;var G__30538 = l;var G__30539 = m;var G__30540 = n;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14(G__30527,G__30528,G__30529,G__30530,G__30531,G__30532,G__30533,G__30534,G__30535,G__30536,G__30537,G__30538,G__30539,G__30540) : self__.dispatch_fn.call(null,G__30527,G__30528,G__30529,G__30530,G__30531,G__30532,G__30533,G__30534,G__30535,G__30536,G__30537,G__30538,G__30539,G__30540));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30541 = a;var G__30542 = b;var G__30543 = c;var G__30544 = d;var G__30545 = e;var G__30546 = f;var G__30547 = g;var G__30548 = h;var G__30549 = i;var G__30550 = j;var G__30551 = k;var G__30552 = l;var G__30553 = m;var G__30554 = n;return (target_fn.cljs$core$IFn$_invoke$arity$14 ? target_fn.cljs$core$IFn$_invoke$arity$14(G__30541,G__30542,G__30543,G__30544,G__30545,G__30546,G__30547,G__30548,G__30549,G__30550,G__30551,G__30552,G__30553,G__30554) : target_fn.call(null,G__30541,G__30542,G__30543,G__30544,G__30545,G__30546,G__30547,G__30548,G__30549,G__30550,G__30551,G__30552,G__30553,G__30554));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30555 = a;var G__30556 = b;var G__30557 = c;var G__30558 = d;var G__30559 = e;var G__30560 = f;var G__30561 = g;var G__30562 = h;var G__30563 = i;var G__30564 = j;var G__30565 = k;var G__30566 = l;var G__30567 = m;var G__30568 = n;var G__30569 = o;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15(G__30555,G__30556,G__30557,G__30558,G__30559,G__30560,G__30561,G__30562,G__30563,G__30564,G__30565,G__30566,G__30567,G__30568,G__30569) : self__.dispatch_fn.call(null,G__30555,G__30556,G__30557,G__30558,G__30559,G__30560,G__30561,G__30562,G__30563,G__30564,G__30565,G__30566,G__30567,G__30568,G__30569));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30570 = a;var G__30571 = b;var G__30572 = c;var G__30573 = d;var G__30574 = e;var G__30575 = f;var G__30576 = g;var G__30577 = h;var G__30578 = i;var G__30579 = j;var G__30580 = k;var G__30581 = l;var G__30582 = m;var G__30583 = n;var G__30584 = o;return (target_fn.cljs$core$IFn$_invoke$arity$15 ? target_fn.cljs$core$IFn$_invoke$arity$15(G__30570,G__30571,G__30572,G__30573,G__30574,G__30575,G__30576,G__30577,G__30578,G__30579,G__30580,G__30581,G__30582,G__30583,G__30584) : target_fn.call(null,G__30570,G__30571,G__30572,G__30573,G__30574,G__30575,G__30576,G__30577,G__30578,G__30579,G__30580,G__30581,G__30582,G__30583,G__30584));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30585 = a;var G__30586 = b;var G__30587 = c;var G__30588 = d;var G__30589 = e;var G__30590 = f;var G__30591 = g;var G__30592 = h;var G__30593 = i;var G__30594 = j;var G__30595 = k;var G__30596 = l;var G__30597 = m;var G__30598 = n;var G__30599 = o;var G__30600 = p;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16(G__30585,G__30586,G__30587,G__30588,G__30589,G__30590,G__30591,G__30592,G__30593,G__30594,G__30595,G__30596,G__30597,G__30598,G__30599,G__30600) : self__.dispatch_fn.call(null,G__30585,G__30586,G__30587,G__30588,G__30589,G__30590,G__30591,G__30592,G__30593,G__30594,G__30595,G__30596,G__30597,G__30598,G__30599,G__30600));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30601 = a;var G__30602 = b;var G__30603 = c;var G__30604 = d;var G__30605 = e;var G__30606 = f;var G__30607 = g;var G__30608 = h;var G__30609 = i;var G__30610 = j;var G__30611 = k;var G__30612 = l;var G__30613 = m;var G__30614 = n;var G__30615 = o;var G__30616 = p;return (target_fn.cljs$core$IFn$_invoke$arity$16 ? target_fn.cljs$core$IFn$_invoke$arity$16(G__30601,G__30602,G__30603,G__30604,G__30605,G__30606,G__30607,G__30608,G__30609,G__30610,G__30611,G__30612,G__30613,G__30614,G__30615,G__30616) : target_fn.call(null,G__30601,G__30602,G__30603,G__30604,G__30605,G__30606,G__30607,G__30608,G__30609,G__30610,G__30611,G__30612,G__30613,G__30614,G__30615,G__30616));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30617 = a;var G__30618 = b;var G__30619 = c;var G__30620 = d;var G__30621 = e;var G__30622 = f;var G__30623 = g;var G__30624 = h;var G__30625 = i;var G__30626 = j;var G__30627 = k;var G__30628 = l;var G__30629 = m;var G__30630 = n;var G__30631 = o;var G__30632 = p;var G__30633 = q;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17(G__30617,G__30618,G__30619,G__30620,G__30621,G__30622,G__30623,G__30624,G__30625,G__30626,G__30627,G__30628,G__30629,G__30630,G__30631,G__30632,G__30633) : self__.dispatch_fn.call(null,G__30617,G__30618,G__30619,G__30620,G__30621,G__30622,G__30623,G__30624,G__30625,G__30626,G__30627,G__30628,G__30629,G__30630,G__30631,G__30632,G__30633));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30634 = a;var G__30635 = b;var G__30636 = c;var G__30637 = d;var G__30638 = e;var G__30639 = f;var G__30640 = g;var G__30641 = h;var G__30642 = i;var G__30643 = j;var G__30644 = k;var G__30645 = l;var G__30646 = m;var G__30647 = n;var G__30648 = o;var G__30649 = p;var G__30650 = q;return (target_fn.cljs$core$IFn$_invoke$arity$17 ? target_fn.cljs$core$IFn$_invoke$arity$17(G__30634,G__30635,G__30636,G__30637,G__30638,G__30639,G__30640,G__30641,G__30642,G__30643,G__30644,G__30645,G__30646,G__30647,G__30648,G__30649,G__30650) : target_fn.call(null,G__30634,G__30635,G__30636,G__30637,G__30638,G__30639,G__30640,G__30641,G__30642,G__30643,G__30644,G__30645,G__30646,G__30647,G__30648,G__30649,G__30650));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30651 = a;var G__30652 = b;var G__30653 = c;var G__30654 = d;var G__30655 = e;var G__30656 = f;var G__30657 = g;var G__30658 = h;var G__30659 = i;var G__30660 = j;var G__30661 = k;var G__30662 = l;var G__30663 = m;var G__30664 = n;var G__30665 = o;var G__30666 = p;var G__30667 = q;var G__30668 = r;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18(G__30651,G__30652,G__30653,G__30654,G__30655,G__30656,G__30657,G__30658,G__30659,G__30660,G__30661,G__30662,G__30663,G__30664,G__30665,G__30666,G__30667,G__30668) : self__.dispatch_fn.call(null,G__30651,G__30652,G__30653,G__30654,G__30655,G__30656,G__30657,G__30658,G__30659,G__30660,G__30661,G__30662,G__30663,G__30664,G__30665,G__30666,G__30667,G__30668));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30669 = a;var G__30670 = b;var G__30671 = c;var G__30672 = d;var G__30673 = e;var G__30674 = f;var G__30675 = g;var G__30676 = h;var G__30677 = i;var G__30678 = j;var G__30679 = k;var G__30680 = l;var G__30681 = m;var G__30682 = n;var G__30683 = o;var G__30684 = p;var G__30685 = q;var G__30686 = r;return (target_fn.cljs$core$IFn$_invoke$arity$18 ? target_fn.cljs$core$IFn$_invoke$arity$18(G__30669,G__30670,G__30671,G__30672,G__30673,G__30674,G__30675,G__30676,G__30677,G__30678,G__30679,G__30680,G__30681,G__30682,G__30683,G__30684,G__30685,G__30686) : target_fn.call(null,G__30669,G__30670,G__30671,G__30672,G__30673,G__30674,G__30675,G__30676,G__30677,G__30678,G__30679,G__30680,G__30681,G__30682,G__30683,G__30684,G__30685,G__30686));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30687 = a;var G__30688 = b;var G__30689 = c;var G__30690 = d;var G__30691 = e;var G__30692 = f;var G__30693 = g;var G__30694 = h;var G__30695 = i;var G__30696 = j;var G__30697 = k;var G__30698 = l;var G__30699 = m;var G__30700 = n;var G__30701 = o;var G__30702 = p;var G__30703 = q;var G__30704 = r;var G__30705 = s;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19(G__30687,G__30688,G__30689,G__30690,G__30691,G__30692,G__30693,G__30694,G__30695,G__30696,G__30697,G__30698,G__30699,G__30700,G__30701,G__30702,G__30703,G__30704,G__30705) : self__.dispatch_fn.call(null,G__30687,G__30688,G__30689,G__30690,G__30691,G__30692,G__30693,G__30694,G__30695,G__30696,G__30697,G__30698,G__30699,G__30700,G__30701,G__30702,G__30703,G__30704,G__30705));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30706 = a;var G__30707 = b;var G__30708 = c;var G__30709 = d;var G__30710 = e;var G__30711 = f;var G__30712 = g;var G__30713 = h;var G__30714 = i;var G__30715 = j;var G__30716 = k;var G__30717 = l;var G__30718 = m;var G__30719 = n;var G__30720 = o;var G__30721 = p;var G__30722 = q;var G__30723 = r;var G__30724 = s;return (target_fn.cljs$core$IFn$_invoke$arity$19 ? target_fn.cljs$core$IFn$_invoke$arity$19(G__30706,G__30707,G__30708,G__30709,G__30710,G__30711,G__30712,G__30713,G__30714,G__30715,G__30716,G__30717,G__30718,G__30719,G__30720,G__30721,G__30722,G__30723,G__30724) : target_fn.call(null,G__30706,G__30707,G__30708,G__30709,G__30710,G__30711,G__30712,G__30713,G__30714,G__30715,G__30716,G__30717,G__30718,G__30719,G__30720,G__30721,G__30722,G__30723,G__30724));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__30725 = a;var G__30726 = b;var G__30727 = c;var G__30728 = d;var G__30729 = e;var G__30730 = f;var G__30731 = g;var G__30732 = h;var G__30733 = i;var G__30734 = j;var G__30735 = k;var G__30736 = l;var G__30737 = m;var G__30738 = n;var G__30739 = o;var G__30740 = p;var G__30741 = q;var G__30742 = r;var G__30743 = s;var G__30744 = t;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20(G__30725,G__30726,G__30727,G__30728,G__30729,G__30730,G__30731,G__30732,G__30733,G__30734,G__30735,G__30736,G__30737,G__30738,G__30739,G__30740,G__30741,G__30742,G__30743,G__30744) : self__.dispatch_fn.call(null,G__30725,G__30726,G__30727,G__30728,G__30729,G__30730,G__30731,G__30732,G__30733,G__30734,G__30735,G__30736,G__30737,G__30738,G__30739,G__30740,G__30741,G__30742,G__30743,G__30744));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__30745 = a;var G__30746 = b;var G__30747 = c;var G__30748 = d;var G__30749 = e;var G__30750 = f;var G__30751 = g;var G__30752 = h;var G__30753 = i;var G__30754 = j;var G__30755 = k;var G__30756 = l;var G__30757 = m;var G__30758 = n;var G__30759 = o;var G__30760 = p;var G__30761 = q;var G__30762 = r;var G__30763 = s;var G__30764 = t;return (target_fn.cljs$core$IFn$_invoke$arity$20 ? target_fn.cljs$core$IFn$_invoke$arity$20(G__30745,G__30746,G__30747,G__30748,G__30749,G__30750,G__30751,G__30752,G__30753,G__30754,G__30755,G__30756,G__30757,G__30758,G__30759,G__30760,G__30761,G__30762,G__30763,G__30764) : target_fn.call(null,G__30745,G__30746,G__30747,G__30748,G__30749,G__30750,G__30751,G__30752,G__30753,G__30754,G__30755,G__30756,G__30757,G__30758,G__30759,G__30760,G__30761,G__30762,G__30763,G__30764));
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
cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__30766 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([this$__$1], 0));return goog.string.hashCode(G__30766);
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
cljs.core.ExceptionInfo.cljs$lang$ctorPrWriter = (function (this__20769__auto__,writer__20770__auto__,opts__20771__auto__){return cljs.core._write(writer__20770__auto__,"cljs.core/ExceptionInfo");
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
cljs.core.comparator = (function comparator(pred){return (function (x,y){if(cljs.core.truth_((function (){var G__30771 = x;var G__30772 = y;return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__30771,G__30772) : pred.call(null,G__30771,G__30772));
})()))
{return (-1);
} else
{if(cljs.core.truth_((function (){var G__30773 = y;var G__30774 = x;return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__30773,G__30774) : pred.call(null,G__30773,G__30774));
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