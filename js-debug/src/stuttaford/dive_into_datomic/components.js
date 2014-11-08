goog.provide('stuttaford.dive_into_datomic.components');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om_bootstrap.random');
goog.require('stuttaford.om.common');
goog.require('om_bootstrap.panel');
goog.require('sablono.core');
goog.require('om_bootstrap.grid');
goog.require('om_tools.core');
goog.require('om_bootstrap.panel');
goog.require('stuttaford.om.common');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
goog.require('stuttaford.om.common');
goog.require('om_bootstrap.grid');
goog.require('om_bootstrap.button');
goog.require('om_bootstrap.button');
goog.require('om_bootstrap.random');
/**
* @param {...*} var_args
*/
stuttaford.dive_into_datomic.components.top_nav = (function() { 
var top_nav__delegate = function (data__24197__auto__,owner58024,p__58026){var vec__58083 = p__58026;var opts__24198__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58083,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema58088 = schema.core.Any;var input_schema58089 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),schema.core.Any], true, false),new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"view","view",1247994814),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map58084","map58084",-929476556,null))], null);var input_checker58090 = schema.core.checker(input_schema58089);var output_checker58091 = schema.core.checker(output_schema58088);return schema.core.schematize_fn(((function (ufv__,output_schema58088,input_schema58089,input_checker58090,output_checker58091,vec__58083,opts__24198__auto__){
return (function fnk58087(G__58092){var validate__837__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__837__auto__))
{var args__838__auto___58139 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__58092], null);var temp__4126__auto___58140 = (function (){var G__58116 = args__838__auto___58139;return (input_checker58090.cljs$core$IFn$_invoke$arity$1 ? input_checker58090.cljs$core$IFn$_invoke$arity$1(G__58116) : input_checker58090.call(null,G__58116));
})();if(cljs.core.truth_(temp__4126__auto___58140))
{var error__839__auto___58141 = temp__4126__auto___58140;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk58087","fnk58087",1001589564,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___58141], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema58089,new cljs.core.Keyword(null,"value","value",305978217),args__838__auto___58139,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___58141], null));
} else
{}
} else
{}
var o__840__auto__ = (function (){var map58084 = G__58092;while(true){
if(cljs.core.map_QMARK_(map58084))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map58084], 0))));
}
var map58086 = plumbing.fnk.schema.safe_get(map58084,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var view = plumbing.fnk.schema.safe_get(map58086,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get(map58084,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var map58085 = plumbing.fnk.schema.safe_get(map58084,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var nav_items = plumbing.fnk.schema.safe_get(map58085,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));if(typeof stuttaford.dive_into_datomic.components.t58117 !== 'undefined')
{} else
{
/**
* @constructor
*/
stuttaford.dive_into_datomic.components.t58117 = (function (output_schema58088,input_checker58090,data__24197__auto__,owner,view,map58085,map58086,nav_items,owner58024,opts__24198__auto__,top_nav,map58084,vec__58083,input_schema58089,validate__837__auto__,fnk58087,G__58092,ufv__,p__58026,output_checker58091,meta58118){
this.output_schema58088 = output_schema58088;
this.input_checker58090 = input_checker58090;
this.data__24197__auto__ = data__24197__auto__;
this.owner = owner;
this.view = view;
this.map58085 = map58085;
this.map58086 = map58086;
this.nav_items = nav_items;
this.owner58024 = owner58024;
this.opts__24198__auto__ = opts__24198__auto__;
this.top_nav = top_nav;
this.map58084 = map58084;
this.vec__58083 = vec__58083;
this.input_schema58089 = input_schema58089;
this.validate__837__auto__ = validate__837__auto__;
this.fnk58087 = fnk58087;
this.G__58092 = G__58092;
this.ufv__ = ufv__;
this.p__58026 = p__58026;
this.output_checker58091 = output_checker58091;
this.meta58118 = meta58118;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
stuttaford.dive_into_datomic.components.t58117.cljs$lang$type = true;
stuttaford.dive_into_datomic.components.t58117.cljs$lang$ctorStr = "stuttaford.dive-into-datomic.components/t58117";
stuttaford.dive_into_datomic.components.t58117.cljs$lang$ctorPrWriter = ((function (nav_items,map58085,owner,view,map58086,validate__837__auto__,ufv__,output_schema58088,input_schema58089,input_checker58090,output_checker58091,vec__58083,opts__24198__auto__){
return (function (this__20538__auto__,writer__20539__auto__,opt__20540__auto__){return cljs.core._write(writer__20539__auto__,"stuttaford.dive-into-datomic.components/t58117");
});})(nav_items,map58085,owner,view,map58086,validate__837__auto__,ufv__,output_schema58088,input_schema58089,input_checker58090,output_checker58091,vec__58083,opts__24198__auto__))
;
stuttaford.dive_into_datomic.components.t58117.prototype.om$core$IDisplayName$ = true;
stuttaford.dive_into_datomic.components.t58117.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (nav_items,map58085,owner,view,map58086,validate__837__auto__,ufv__,output_schema58088,input_schema58089,input_checker58090,output_checker58091,vec__58083,opts__24198__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "top-nav";
});})(nav_items,map58085,owner,view,map58086,validate__837__auto__,ufv__,output_schema58088,input_schema58089,input_checker58090,output_checker58091,vec__58083,opts__24198__auto__))
;
stuttaford.dive_into_datomic.components.t58117.prototype.om$core$IRenderState$ = true;
stuttaford.dive_into_datomic.components.t58117.prototype.om$core$IRenderState$render_state$arity$2 = ((function (nav_items,map58085,owner,view,map58086,validate__837__auto__,ufv__,output_schema58088,input_schema58089,input_checker58090,output_checker58091,vec__58083,opts__24198__auto__){
return (function (_,state){var self__ = this;
var ___$1 = this;var c = stuttaford.om.common.control_chan(self__.owner);return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([(function (){var iter__20844__auto__ = ((function (c,___$1,nav_items,map58085,owner,view,map58086,validate__837__auto__,ufv__,output_schema58088,input_schema58089,input_checker58090,output_checker58091,vec__58083,opts__24198__auto__){
return (function iter__58120(s__58121){return (new cljs.core.LazySeq(null,((function (c,___$1,nav_items,map58085,owner,view,map58086,validate__837__auto__,ufv__,output_schema58088,input_schema58089,input_checker58090,output_checker58091,vec__58083,opts__24198__auto__){
return (function (){var s__58121__$1 = s__58121;while(true){
var temp__4126__auto__ = cljs.core.seq(s__58121__$1);if(temp__4126__auto__)
{var s__58121__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__58121__$2))
{var c__20842__auto__ = cljs.core.chunk_first(s__58121__$2);var size__20843__auto__ = cljs.core.count(c__20842__auto__);var b__58123 = cljs.core.chunk_buffer(size__20843__auto__);if((function (){var i__58122 = (0);while(true){
if((i__58122 < size__20843__auto__))
{var vec__58132 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__20842__auto__,i__58122);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58132,(0),null);var vec__58133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58132,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58133,(0),null);cljs.core.chunk_append(b__58123,om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__58134 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58122,vec__58132,id,vec__58133,label,c__20842__auto__,size__20843__auto__,b__58123,s__58121__$2,temp__4126__auto__,c,___$1,nav_items,map58085,owner,view,map58086,validate__837__auto__,ufv__,output_schema58088,input_schema58089,input_checker58090,output_checker58091,vec__58083,opts__24198__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(i__58122,vec__58132,id,vec__58133,label,c__20842__auto__,size__20843__auto__,b__58123,s__58121__$2,temp__4126__auto__,c,___$1,nav_items,map58085,owner,view,map58086,validate__837__auto__,ufv__,output_schema58088,input_schema58089,input_checker58090,output_checker58091,vec__58083,opts__24198__auto__))
], null);var G__58134__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58134,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__58134);return G__58134__$1;
})(),cljs.core.array_seq([label], 0)));
{
var G__58142 = (i__58122 + (1));
i__58122 = G__58142;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__58123),iter__58120(cljs.core.chunk_rest(s__58121__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__58123),null);
}
} else
{var vec__58135 = cljs.core.first(s__58121__$2);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58135,(0),null);var vec__58136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58135,(1),null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58136,(0),null);return cljs.core.cons(om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((function (){var G__58137 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58135,id,vec__58136,label,s__58121__$2,temp__4126__auto__,c,___$1,nav_items,map58085,owner,view,map58086,validate__837__auto__,ufv__,output_schema58088,input_schema58089,input_checker58090,output_checker58091,vec__58083,opts__24198__auto__){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-view","set-view",356827761),id], null));
});})(vec__58135,id,vec__58136,label,s__58121__$2,temp__4126__auto__,c,___$1,nav_items,map58085,owner,view,map58086,validate__837__auto__,ufv__,output_schema58088,input_schema58089,input_checker58090,output_checker58091,vec__58083,opts__24198__auto__))
], null);var G__58137__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.view,id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58137,new cljs.core.Keyword(null,"class","class",-2030961996),"active"):G__58137);return G__58137__$1;
})(),cljs.core.array_seq([label], 0)),iter__58120(cljs.core.rest(s__58121__$2)));
}
} else
{return null;
}
break;
}
});})(c,___$1,nav_items,map58085,owner,view,map58086,validate__837__auto__,ufv__,output_schema58088,input_schema58089,input_checker58090,output_checker58091,vec__58083,opts__24198__auto__))
,null,null));
});})(c,___$1,nav_items,map58085,owner,view,map58086,validate__837__auto__,ufv__,output_schema58088,input_schema58089,input_checker58090,output_checker58091,vec__58083,opts__24198__auto__))
;return iter__20844__auto__(self__.nav_items);
})()], 0))], 0));
});})(nav_items,map58085,owner,view,map58086,validate__837__auto__,ufv__,output_schema58088,input_schema58089,input_checker58090,output_checker58091,vec__58083,opts__24198__auto__))
;
stuttaford.dive_into_datomic.components.t58117.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (nav_items,map58085,owner,view,map58086,validate__837__auto__,ufv__,output_schema58088,input_schema58089,input_checker58090,output_checker58091,vec__58083,opts__24198__auto__){
return (function (_58119){var self__ = this;
var _58119__$1 = this;return self__.meta58118;
});})(nav_items,map58085,owner,view,map58086,validate__837__auto__,ufv__,output_schema58088,input_schema58089,input_checker58090,output_checker58091,vec__58083,opts__24198__auto__))
;
stuttaford.dive_into_datomic.components.t58117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (nav_items,map58085,owner,view,map58086,validate__837__auto__,ufv__,output_schema58088,input_schema58089,input_checker58090,output_checker58091,vec__58083,opts__24198__auto__){
return (function (_58119,meta58118__$1){var self__ = this;
var _58119__$1 = this;return (new stuttaford.dive_into_datomic.components.t58117(self__.output_schema58088,self__.input_checker58090,self__.data__24197__auto__,self__.owner,self__.view,self__.map58085,self__.map58086,self__.nav_items,self__.owner58024,self__.opts__24198__auto__,self__.top_nav,self__.map58084,self__.vec__58083,self__.input_schema58089,self__.validate__837__auto__,self__.fnk58087,self__.G__58092,self__.ufv__,self__.p__58026,self__.output_checker58091,meta58118__$1));
});})(nav_items,map58085,owner,view,map58086,validate__837__auto__,ufv__,output_schema58088,input_schema58089,input_checker58090,output_checker58091,vec__58083,opts__24198__auto__))
;
stuttaford.dive_into_datomic.components.__GT_t58117 = ((function (nav_items,map58085,owner,view,map58086,validate__837__auto__,ufv__,output_schema58088,input_schema58089,input_checker58090,output_checker58091,vec__58083,opts__24198__auto__){
return (function __GT_t58117(output_schema58088__$1,input_checker58090__$1,data__24197__auto____$1,owner__$1,view__$1,map58085__$1,map58086__$1,nav_items__$1,owner58024__$1,opts__24198__auto____$1,top_nav__$1,map58084__$1,vec__58083__$1,input_schema58089__$1,validate__837__auto____$1,fnk58087__$1,G__58092__$1,ufv____$1,p__58026__$1,output_checker58091__$1,meta58118){return (new stuttaford.dive_into_datomic.components.t58117(output_schema58088__$1,input_checker58090__$1,data__24197__auto____$1,owner__$1,view__$1,map58085__$1,map58086__$1,nav_items__$1,owner58024__$1,opts__24198__auto____$1,top_nav__$1,map58084__$1,vec__58083__$1,input_schema58089__$1,validate__837__auto____$1,fnk58087__$1,G__58092__$1,ufv____$1,p__58026__$1,output_checker58091__$1,meta58118));
});})(nav_items,map58085,owner,view,map58086,validate__837__auto__,ufv__,output_schema58088,input_schema58089,input_checker58090,output_checker58091,vec__58083,opts__24198__auto__))
;
}
return (new stuttaford.dive_into_datomic.components.t58117(output_schema58088,input_checker58090,data__24197__auto__,owner,view,map58085,map58086,nav_items,owner58024,opts__24198__auto__,top_nav,map58084,vec__58083,input_schema58089,validate__837__auto__,fnk58087,G__58092,ufv__,p__58026,output_checker58091,null));
break;
}
})();if(cljs.core.truth_(validate__837__auto__))
{var temp__4126__auto___58143 = (function (){var G__58138 = o__840__auto__;return (output_checker58091.cljs$core$IFn$_invoke$arity$1 ? output_checker58091.cljs$core$IFn$_invoke$arity$1(G__58138) : output_checker58091.call(null,G__58138));
})();if(cljs.core.truth_(temp__4126__auto___58143))
{var error__839__auto___58144 = temp__4126__auto___58143;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"fnk58087","fnk58087",1001589564,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__839__auto___58144], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema58088,new cljs.core.Keyword(null,"value","value",305978217),o__840__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__839__auto___58144], null));
} else
{}
} else
{}
return o__840__auto__;
});})(ufv__,output_schema58088,input_schema58089,input_checker58090,output_checker58091,vec__58083,opts__24198__auto__))
,schema.core.make_fn_schema(output_schema58088,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema58089], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__24198__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner58024,new cljs.core.Keyword(null,"data","data",-232669377),data__24197__auto__], null));
};
var top_nav = function (data__24197__auto__,owner58024,var_args){
var p__58026 = null;if (arguments.length > 2) {
  p__58026 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return top_nav__delegate.call(this,data__24197__auto__,owner58024,p__58026);};
top_nav.cljs$lang$maxFixedArity = 2;
top_nav.cljs$lang$applyTo = (function (arglist__58145){
var data__24197__auto__ = cljs.core.first(arglist__58145);
arglist__58145 = cljs.core.next(arglist__58145);
var owner58024 = cljs.core.first(arglist__58145);
var p__58026 = cljs.core.rest(arglist__58145);
return top_nav__delegate(data__24197__auto__,owner58024,p__58026);
});
top_nav.cljs$core$IFn$_invoke$arity$variadic = top_nav__delegate;
return top_nav;
})()
;
stuttaford.dive_into_datomic.components.__GT_top_nav = (function() {
var __GT_top_nav = null;
var __GT_top_nav__1 = (function (cursor__24166__auto__){return om.core.build.cljs$core$IFn$_invoke$arity$2(stuttaford.dive_into_datomic.components.top_nav,cursor__24166__auto__);
});
var __GT_top_nav__2 = (function (cursor__24166__auto__,m58025){return om.core.build.cljs$core$IFn$_invoke$arity$3(stuttaford.dive_into_datomic.components.top_nav,cursor__24166__auto__,m58025);
});
__GT_top_nav = function(cursor__24166__auto__,m58025){
switch(arguments.length){
case 1:
return __GT_top_nav__1.call(this,cursor__24166__auto__);
case 2:
return __GT_top_nav__2.call(this,cursor__24166__auto__,m58025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_top_nav.cljs$core$IFn$_invoke$arity$1 = __GT_top_nav__1;
__GT_top_nav.cljs$core$IFn$_invoke$arity$2 = __GT_top_nav__2;
return __GT_top_nav;
})()
;
//# sourceMappingURL=components.js.map