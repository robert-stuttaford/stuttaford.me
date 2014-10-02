goog.provide('datascript');
goog.require('cljs.core');
goog.require('datascript.btset');
goog.require('datascript.btset');
goog.require('datascript.impl.entity');
goog.require('datascript.impl.entity');
goog.require('datascript.query');
goog.require('datascript.query');
goog.require('datascript.core');
goog.require('datascript.core');
datascript.q = datascript.query.q;
datascript.entity = datascript.impl.entity.entity;
datascript.entity_db = (function entity_db(entity){return entity.db;
});
datascript.touch = datascript.impl.entity.touch;
datascript.tx0 = (536870912);
/**
* @param {...*} var_args
*/
datascript.empty_db = (function() { 
var empty_db__delegate = function (p__37583){var vec__37585 = p__37583;var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37585,(0),null);return (new datascript.core.DB(schema__$1,datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.core.cmp_datoms_eavt),datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.core.cmp_datoms_aevt),datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.core.cmp_datoms_avet),(0),datascript.tx0));
};
var empty_db = function (var_args){
var p__37583 = null;if (arguments.length > 0) {
  p__37583 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return empty_db__delegate.call(this,p__37583);};
empty_db.cljs$lang$maxFixedArity = 0;
empty_db.cljs$lang$applyTo = (function (arglist__37586){
var p__37583 = cljs.core.seq(arglist__37586);
return empty_db__delegate(p__37583);
});
empty_db.cljs$core$IFn$_invoke$arity$variadic = empty_db__delegate;
return empty_db;
})()
;
/**
* @param {...*} var_args
*/
datascript.create_conn = (function() { 
var create_conn__delegate = function (p__37587){var vec__37593 = p__37587;var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37593,(0),null);var G__37594 = datascript.empty_db.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema__$1], 0));var G__37595 = new cljs.core.Keyword(null,"meta","meta",1499536964);var G__37596 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),(function (){var G__37597 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37597) : cljs.core.atom.call(null,G__37597));
})()], null);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$3 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$3(G__37594,G__37595,G__37596) : cljs.core.atom.call(null,G__37594,G__37595,G__37596));
};
var create_conn = function (var_args){
var p__37587 = null;if (arguments.length > 0) {
  p__37587 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return create_conn__delegate.call(this,p__37587);};
create_conn.cljs$lang$maxFixedArity = 0;
create_conn.cljs$lang$applyTo = (function (arglist__37598){
var p__37587 = cljs.core.seq(arglist__37598);
return create_conn__delegate(p__37587);
});
create_conn.cljs$core$IFn$_invoke$arity$variadic = create_conn__delegate;
return create_conn;
})()
;
datascript.with$ = (function with$(db,tx_data){return datascript.core.transact_tx_data((new datascript.core.TxReport(db,db,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY)),tx_data);
});
datascript.db_with = (function db_with(db,tx_data){return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.with$(db,tx_data));
});
datascript._transact_BANG_ = (function _transact_BANG_(conn,tx_data){var report = (function (){var G__37603 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37603) : cljs.core.atom.call(null,G__37603));
})();cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(conn,((function (report){
return (function (db){var r = datascript.with$(db,tx_data);var G__37604_37607 = report;var G__37605_37608 = r;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__37604_37607,G__37605_37608) : cljs.core.reset_BANG_.call(null,G__37604_37607,G__37605_37608));
return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);
var G__37606 = report;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__37606) : cljs.core.deref.call(null,G__37606));
});
datascript.transact_BANG_ = (function transact_BANG_(conn,tx_data){var report = datascript._transact_BANG_(conn,tx_data);var seq__37618_37627 = cljs.core.seq((function (){var G__37622 = new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn));return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__37622) : cljs.core.deref.call(null,G__37622));
})());var chunk__37619_37628 = null;var count__37620_37629 = (0);var i__37621_37630 = (0);while(true){
if((i__37621_37630 < count__37620_37629))
{var vec__37623_37631 = chunk__37619_37628.cljs$core$IIndexed$_nth$arity$2(null,i__37621_37630);var __37632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37623_37631,(0),null);var callback_37633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37623_37631,(1),null);var G__37624_37634 = report;(callback_37633.cljs$core$IFn$_invoke$arity$1 ? callback_37633.cljs$core$IFn$_invoke$arity$1(G__37624_37634) : callback_37633.call(null,G__37624_37634));
{
var G__37635 = seq__37618_37627;
var G__37636 = chunk__37619_37628;
var G__37637 = count__37620_37629;
var G__37638 = (i__37621_37630 + (1));
seq__37618_37627 = G__37635;
chunk__37619_37628 = G__37636;
count__37620_37629 = G__37637;
i__37621_37630 = G__37638;
continue;
}
} else
{var temp__4126__auto___37639 = cljs.core.seq(seq__37618_37627);if(temp__4126__auto___37639)
{var seq__37618_37640__$1 = temp__4126__auto___37639;if(cljs.core.chunked_seq_QMARK_(seq__37618_37640__$1))
{var c__20813__auto___37641 = cljs.core.chunk_first(seq__37618_37640__$1);{
var G__37642 = cljs.core.chunk_rest(seq__37618_37640__$1);
var G__37643 = c__20813__auto___37641;
var G__37644 = cljs.core.count(c__20813__auto___37641);
var G__37645 = (0);
seq__37618_37627 = G__37642;
chunk__37619_37628 = G__37643;
count__37620_37629 = G__37644;
i__37621_37630 = G__37645;
continue;
}
} else
{var vec__37625_37646 = cljs.core.first(seq__37618_37640__$1);var __37647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37625_37646,(0),null);var callback_37648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37625_37646,(1),null);var G__37626_37649 = report;(callback_37648.cljs$core$IFn$_invoke$arity$1 ? callback_37648.cljs$core$IFn$_invoke$arity$1(G__37626_37649) : callback_37648.call(null,G__37626_37649));
{
var G__37650 = cljs.core.next(seq__37618_37640__$1);
var G__37651 = null;
var G__37652 = (0);
var G__37653 = (0);
seq__37618_37627 = G__37650;
chunk__37619_37628 = G__37651;
count__37620_37629 = G__37652;
i__37621_37630 = G__37653;
continue;
}
}
} else
{}
}
break;
}
return report;
});
datascript.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (conn,callback){return listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),callback);
});
var listen_BANG___3 = (function (conn,key,callback){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn)),cljs.core.assoc,key,callback);
return key;
});
listen_BANG_ = function(conn,key,callback){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,conn,key);
case 3:
return listen_BANG___3.call(this,conn,key,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
datascript.unlisten_BANG_ = (function unlisten_BANG_(conn,key){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn)),cljs.core.dissoc,key);
});
datascript.components__GT_pattern = (function components__GT_pattern(index,p__37657){var vec__37660 = p__37657;var c0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37660,(0),null);var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37660,(1),null);var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37660,(2),null);var c3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37660,(3),null);var G__37661 = (((index instanceof cljs.core.Keyword))?index.fqn:null);switch (G__37661) {
case "avet":
return (new datascript.core.Datom(c2,c0,c1,c3,null));

break;
case "aevt":
return (new datascript.core.Datom(c1,c0,c2,c3,null));

break;
case "eavt":
return (new datascript.core.Datom(c0,c1,c2,c3,null));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index))));

}
});
/**
* @param {...*} var_args
*/
datascript.datoms = (function() { 
var datoms__delegate = function (db,index,cs){return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,index),datascript.components__GT_pattern(index,cs));
};
var datoms = function (db,index,var_args){
var cs = null;if (arguments.length > 2) {
  cs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datoms__delegate.call(this,db,index,cs);};
datoms.cljs$lang$maxFixedArity = 2;
datoms.cljs$lang$applyTo = (function (arglist__37663){
var db = cljs.core.first(arglist__37663);
arglist__37663 = cljs.core.next(arglist__37663);
var index = cljs.core.first(arglist__37663);
var cs = cljs.core.rest(arglist__37663);
return datoms__delegate(db,index,cs);
});
datoms.cljs$core$IFn$_invoke$arity$variadic = datoms__delegate;
return datoms;
})()
;
/**
* @param {...*} var_args
*/
datascript.seek_datoms = (function() { 
var seek_datoms__delegate = function (db,index,cs){return datascript.btset.slice.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,index),datascript.components__GT_pattern(index,cs),(new datascript.core.Datom(null,null,null,null,null)));
};
var seek_datoms = function (db,index,var_args){
var cs = null;if (arguments.length > 2) {
  cs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return seek_datoms__delegate.call(this,db,index,cs);};
seek_datoms.cljs$lang$maxFixedArity = 2;
seek_datoms.cljs$lang$applyTo = (function (arglist__37664){
var db = cljs.core.first(arglist__37664);
arglist__37664 = cljs.core.next(arglist__37664);
var index = cljs.core.first(arglist__37664);
var cs = cljs.core.rest(arglist__37664);
return seek_datoms__delegate(db,index,cs);
});
seek_datoms.cljs$core$IFn$_invoke$arity$variadic = seek_datoms__delegate;
return seek_datoms;
})()
;
datascript.index_range = (function index_range(db,attr,start,end){return datascript.btset.slice.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"avet","avet",1383857032).cljs$core$IFn$_invoke$arity$1(db),(new datascript.core.Datom(null,attr,start,null,null)),(new datascript.core.Datom(null,attr,end,null,null)));
});
datascript.core.Datom.prototype.cljs$core$IPrintWithWriter$ = true;
datascript.core.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,w,opts){var d__$1 = this;return cljs.core.pr_sequential_writer(w,cljs.core.pr_writer,"#datascript/Datom ["," ","]",opts,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d__$1.e,d__$1.a,d__$1.v,d__$1.tx,d__$1.added], null));
});
datascript.datom_from_reader = (function datom_from_reader(p__37665){var vec__37667 = p__37665;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37667,(0),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37667,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37667,(2),null);var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37667,(3),null);var added = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37667,(4),null);return (new datascript.core.Datom(e,a,v,tx,added));
});
datascript.core.DB.prototype.cljs$core$IPrintWithWriter$ = true;
datascript.core.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){var db__$1 = this;cljs.core._write(w,"#datascript/DB {");
cljs.core._write(w,":schema ");
cljs.core.pr_writer(db__$1.schema,w,opts);
cljs.core._write(w,", :datoms ");
cljs.core.pr_sequential_writer(w,((function (db__$1){
return (function (d,w__$1,opts__$1){return cljs.core.pr_sequential_writer(w__$1,cljs.core.pr_writer,"["," ","]",opts__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.e,d.a,d.v,d.tx], null));
});})(db__$1))
,"["," ","]",opts,db__$1.eavt);
return cljs.core._write(w,"}");
});
datascript.db_from_reader = (function db_from_reader(p__37668){var map__37672 = p__37668;var map__37672__$1 = ((cljs.core.seq_QMARK_(map__37672))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37672):map__37672);var datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37672__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37672__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));var datoms__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__37672,map__37672__$1,datoms,schema__$1){
return (function (p__37673){var vec__37674 = p__37673;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37674,(0),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37674,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37674,(2),null);var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37674,(3),null);return (new datascript.core.Datom(e,a,v,tx,true));
});})(map__37672,map__37672__$1,datoms,schema__$1))
,datoms);return (new datascript.core.DB(schema__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(datascript.btset.btset_by,datascript.core.cmp_datoms_eavt,datoms__$1),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(datascript.btset.btset_by,datascript.core.cmp_datoms_aevt,datoms__$1),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(datascript.btset.btset_by,datascript.core.cmp_datoms_avet,datoms__$1),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),datoms__$1)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,datascript.tx0,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx","tx",466630418),datoms__$1))));
});
datascript.last_tempid = (function (){var G__37675 = (-1000000);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37675) : cljs.core.atom.call(null,G__37675));
})();
datascript.tempid = (function() {
var tempid = null;
var tempid__1 = (function (_part){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.last_tempid,cljs.core.dec);
});
var tempid__2 = (function (_part,x){return x;
});
tempid = function(_part,x){
switch(arguments.length){
case 1:
return tempid__1.call(this,_part);
case 2:
return tempid__2.call(this,_part,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tempid.cljs$core$IFn$_invoke$arity$1 = tempid__1;
tempid.cljs$core$IFn$_invoke$arity$2 = tempid__2;
return tempid;
})()
;
datascript.resolve_tempid = (function resolve_tempid(_db,tempids,tempid){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(tempids,tempid);
});
datascript.db = cljs.core.deref;
datascript.transact = (function transact(conn,tx_data){var res = datascript.transact_BANG_(conn,tx_data);if(typeof datascript.t37679 !== 'undefined')
{} else
{
/**
* @constructor
*/
datascript.t37679 = (function (res,tx_data,conn,transact,meta37680){
this.res = res;
this.tx_data = tx_data;
this.conn = conn;
this.transact = transact;
this.meta37680 = meta37680;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 491520;
})
datascript.t37679.cljs$lang$type = true;
datascript.t37679.cljs$lang$ctorStr = "datascript/t37679";
datascript.t37679.cljs$lang$ctorPrWriter = ((function (res){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"datascript/t37679");
});})(res))
;
datascript.t37679.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res){
return (function (_){var self__ = this;
var ___$1 = this;return true;
});})(res))
;
datascript.t37679.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res){
return (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;return self__.res;
});})(res))
;
datascript.t37679.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res){
return (function (_){var self__ = this;
var ___$1 = this;return self__.res;
});})(res))
;
datascript.t37679.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res){
return (function (_37681){var self__ = this;
var _37681__$1 = this;return self__.meta37680;
});})(res))
;
datascript.t37679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res){
return (function (_37681,meta37680__$1){var self__ = this;
var _37681__$1 = this;return (new datascript.t37679(self__.res,self__.tx_data,self__.conn,self__.transact,meta37680__$1));
});})(res))
;
datascript.__GT_t37679 = ((function (res){
return (function __GT_t37679(res__$1,tx_data__$1,conn__$1,transact__$1,meta37680){return (new datascript.t37679(res__$1,tx_data__$1,conn__$1,transact__$1,meta37680));
});})(res))
;
}
return (new datascript.t37679(res,tx_data,conn,transact,null));
});
datascript.future_call = (function future_call(f){var res = (function (){var G__37697 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37697) : cljs.core.atom.call(null,G__37697));
})();var realized = (function (){var G__37698 = false;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37698) : cljs.core.atom.call(null,G__37698));
})();var G__37699_37712 = ((function (res,realized){
return (function (){var G__37701_37714 = res;var G__37702_37715 = (function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})();(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__37701_37714,G__37702_37715) : cljs.core.reset_BANG_.call(null,G__37701_37714,G__37702_37715));
var G__37703 = realized;var G__37704 = true;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__37703,G__37704) : cljs.core.reset_BANG_.call(null,G__37703,G__37704));
});})(res,realized))
;var G__37700_37713 = (0);setTimeout(G__37699_37712,G__37700_37713);
if(typeof datascript.t37705 !== 'undefined')
{} else
{
/**
* @constructor
*/
datascript.t37705 = (function (realized,res,f,future_call,meta37706){
this.realized = realized;
this.res = res;
this.f = f;
this.future_call = future_call;
this.meta37706 = meta37706;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 491520;
})
datascript.t37705.cljs$lang$type = true;
datascript.t37705.cljs$lang$ctorStr = "datascript/t37705";
datascript.t37705.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__20497__auto__,writer__20498__auto__,opt__20499__auto__){return cljs.core._write(writer__20498__auto__,"datascript/t37705");
});})(res,realized))
;
datascript.t37705.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){var self__ = this;
var ___$1 = this;var G__37708 = self__.realized;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__37708) : cljs.core.deref.call(null,G__37708));
});})(res,realized))
;
datascript.t37705.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){var self__ = this;
var ___$2 = this;if(cljs.core.truth_((function (){var G__37709 = self__.realized;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__37709) : cljs.core.deref.call(null,G__37709));
})()))
{var G__37710 = self__.res;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__37710) : cljs.core.deref.call(null,G__37710));
} else
{return timeout_val;
}
});})(res,realized))
;
datascript.t37705.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){var self__ = this;
var ___$1 = this;var G__37711 = self__.res;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__37711) : cljs.core.deref.call(null,G__37711));
});})(res,realized))
;
datascript.t37705.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_37707){var self__ = this;
var _37707__$1 = this;return self__.meta37706;
});})(res,realized))
;
datascript.t37705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_37707,meta37706__$1){var self__ = this;
var _37707__$1 = this;return (new datascript.t37705(self__.realized,self__.res,self__.f,self__.future_call,meta37706__$1));
});})(res,realized))
;
datascript.__GT_t37705 = ((function (res,realized){
return (function __GT_t37705(realized__$1,res__$1,f__$1,future_call__$1,meta37706){return (new datascript.t37705(realized__$1,res__$1,f__$1,future_call__$1,meta37706));
});})(res,realized))
;
}
return (new datascript.t37705(realized,res,f,future_call,null));
});
datascript.transact_async = (function transact_async(conn,tx_data){return datascript.future_call((function (){return datascript.transact_BANG_(conn,tx_data);
}));
});
datascript.rand_bits = (function rand_bits(pow){return cljs.core.rand_int(((1) << pow));
});
datascript.squuid = (function squuid(){return (new cljs.core.UUID((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__37717 = ((new Date()).getTime() / (1000));return (Math.round.cljs$core$IFn$_invoke$arity$1 ? Math.round.cljs$core$IFn$_invoke$arity$1(G__37717) : Math.round.call(null,G__37717));
})().toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((datascript.rand_bits((16)) & (4095)) | (16384)).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((datascript.rand_bits((16)) & (16383)) | (32768)).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16))))));
});
datascript.squuid_time_millis = (function squuid_time_millis(uuid){return ((function (){var G__37720 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(uuid.uuid,(0),(8));var G__37721 = (16);return parseInt(G__37720,G__37721);
})() * (1000));
});
//# sourceMappingURL=datascript.js.map