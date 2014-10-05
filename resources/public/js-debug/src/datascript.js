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
var empty_db__delegate = function (p__48259){var vec__48261 = p__48259;var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48261,(0),null);return (new datascript.core.DB(schema__$1,datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.core.cmp_datoms_eavt),datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.core.cmp_datoms_aevt),datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.core.cmp_datoms_avet),(0),datascript.tx0));
};
var empty_db = function (var_args){
var p__48259 = null;if (arguments.length > 0) {
  p__48259 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return empty_db__delegate.call(this,p__48259);};
empty_db.cljs$lang$maxFixedArity = 0;
empty_db.cljs$lang$applyTo = (function (arglist__48262){
var p__48259 = cljs.core.seq(arglist__48262);
return empty_db__delegate(p__48259);
});
empty_db.cljs$core$IFn$_invoke$arity$variadic = empty_db__delegate;
return empty_db;
})()
;
/**
* @param {...*} var_args
*/
datascript.create_conn = (function() { 
var create_conn__delegate = function (p__48263){var vec__48269 = p__48263;var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48269,(0),null);var G__48270 = datascript.empty_db.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema__$1], 0));var G__48271 = new cljs.core.Keyword(null,"meta","meta",1499536964);var G__48272 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),(function (){var G__48273 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__48273) : cljs.core.atom.call(null,G__48273));
})()], null);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$3 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$3(G__48270,G__48271,G__48272) : cljs.core.atom.call(null,G__48270,G__48271,G__48272));
};
var create_conn = function (var_args){
var p__48263 = null;if (arguments.length > 0) {
  p__48263 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return create_conn__delegate.call(this,p__48263);};
create_conn.cljs$lang$maxFixedArity = 0;
create_conn.cljs$lang$applyTo = (function (arglist__48274){
var p__48263 = cljs.core.seq(arglist__48274);
return create_conn__delegate(p__48263);
});
create_conn.cljs$core$IFn$_invoke$arity$variadic = create_conn__delegate;
return create_conn;
})()
;
datascript.with$ = (function with$(db,tx_data){return datascript.core.transact_tx_data((new datascript.core.TxReport(db,db,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY)),tx_data);
});
datascript.db_with = (function db_with(db,tx_data){return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.with$(db,tx_data));
});
datascript._transact_BANG_ = (function _transact_BANG_(conn,tx_data){var report = (function (){var G__48279 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__48279) : cljs.core.atom.call(null,G__48279));
})();cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(conn,((function (report){
return (function (db){var r = datascript.with$(db,tx_data);var G__48280_48283 = report;var G__48281_48284 = r;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__48280_48283,G__48281_48284) : cljs.core.reset_BANG_.call(null,G__48280_48283,G__48281_48284));
return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);
var G__48282 = report;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48282) : cljs.core.deref.call(null,G__48282));
});
datascript.transact_BANG_ = (function transact_BANG_(conn,tx_data){var report = datascript._transact_BANG_(conn,tx_data);var seq__48294_48303 = cljs.core.seq((function (){var G__48298 = new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn));return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48298) : cljs.core.deref.call(null,G__48298));
})());var chunk__48295_48304 = null;var count__48296_48305 = (0);var i__48297_48306 = (0);while(true){
if((i__48297_48306 < count__48296_48305))
{var vec__48299_48307 = chunk__48295_48304.cljs$core$IIndexed$_nth$arity$2(null,i__48297_48306);var __48308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48299_48307,(0),null);var callback_48309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48299_48307,(1),null);var G__48300_48310 = report;(callback_48309.cljs$core$IFn$_invoke$arity$1 ? callback_48309.cljs$core$IFn$_invoke$arity$1(G__48300_48310) : callback_48309.call(null,G__48300_48310));
{
var G__48311 = seq__48294_48303;
var G__48312 = chunk__48295_48304;
var G__48313 = count__48296_48305;
var G__48314 = (i__48297_48306 + (1));
seq__48294_48303 = G__48311;
chunk__48295_48304 = G__48312;
count__48296_48305 = G__48313;
i__48297_48306 = G__48314;
continue;
}
} else
{var temp__4126__auto___48315 = cljs.core.seq(seq__48294_48303);if(temp__4126__auto___48315)
{var seq__48294_48316__$1 = temp__4126__auto___48315;if(cljs.core.chunked_seq_QMARK_(seq__48294_48316__$1))
{var c__20721__auto___48317 = cljs.core.chunk_first(seq__48294_48316__$1);{
var G__48318 = cljs.core.chunk_rest(seq__48294_48316__$1);
var G__48319 = c__20721__auto___48317;
var G__48320 = cljs.core.count(c__20721__auto___48317);
var G__48321 = (0);
seq__48294_48303 = G__48318;
chunk__48295_48304 = G__48319;
count__48296_48305 = G__48320;
i__48297_48306 = G__48321;
continue;
}
} else
{var vec__48301_48322 = cljs.core.first(seq__48294_48316__$1);var __48323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48301_48322,(0),null);var callback_48324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48301_48322,(1),null);var G__48302_48325 = report;(callback_48324.cljs$core$IFn$_invoke$arity$1 ? callback_48324.cljs$core$IFn$_invoke$arity$1(G__48302_48325) : callback_48324.call(null,G__48302_48325));
{
var G__48326 = cljs.core.next(seq__48294_48316__$1);
var G__48327 = null;
var G__48328 = (0);
var G__48329 = (0);
seq__48294_48303 = G__48326;
chunk__48295_48304 = G__48327;
count__48296_48305 = G__48328;
i__48297_48306 = G__48329;
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
datascript.components__GT_pattern = (function components__GT_pattern(index,p__48333){var vec__48336 = p__48333;var c0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48336,(0),null);var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48336,(1),null);var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48336,(2),null);var c3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48336,(3),null);var G__48337 = (((index instanceof cljs.core.Keyword))?index.fqn:null);switch (G__48337) {
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
datoms.cljs$lang$applyTo = (function (arglist__48339){
var db = cljs.core.first(arglist__48339);
arglist__48339 = cljs.core.next(arglist__48339);
var index = cljs.core.first(arglist__48339);
var cs = cljs.core.rest(arglist__48339);
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
seek_datoms.cljs$lang$applyTo = (function (arglist__48340){
var db = cljs.core.first(arglist__48340);
arglist__48340 = cljs.core.next(arglist__48340);
var index = cljs.core.first(arglist__48340);
var cs = cljs.core.rest(arglist__48340);
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
datascript.datom_from_reader = (function datom_from_reader(p__48341){var vec__48343 = p__48341;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48343,(0),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48343,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48343,(2),null);var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48343,(3),null);var added = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48343,(4),null);return (new datascript.core.Datom(e,a,v,tx,added));
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
datascript.db_from_reader = (function db_from_reader(p__48344){var map__48348 = p__48344;var map__48348__$1 = ((cljs.core.seq_QMARK_(map__48348))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48348):map__48348);var datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48348__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48348__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));var datoms__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__48348,map__48348__$1,datoms,schema__$1){
return (function (p__48349){var vec__48350 = p__48349;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48350,(0),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48350,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48350,(2),null);var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48350,(3),null);return (new datascript.core.Datom(e,a,v,tx,true));
});})(map__48348,map__48348__$1,datoms,schema__$1))
,datoms);return (new datascript.core.DB(schema__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(datascript.btset.btset_by,datascript.core.cmp_datoms_eavt,datoms__$1),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(datascript.btset.btset_by,datascript.core.cmp_datoms_aevt,datoms__$1),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(datascript.btset.btset_by,datascript.core.cmp_datoms_avet,datoms__$1),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),datoms__$1)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,datascript.tx0,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx","tx",466630418),datoms__$1))));
});
datascript.last_tempid = (function (){var G__48351 = (-1000000);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__48351) : cljs.core.atom.call(null,G__48351));
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
datascript.transact = (function transact(conn,tx_data){var res = datascript.transact_BANG_(conn,tx_data);if(typeof datascript.t48355 !== 'undefined')
{} else
{
/**
* @constructor
*/
datascript.t48355 = (function (res,tx_data,conn,transact,meta48356){
this.res = res;
this.tx_data = tx_data;
this.conn = conn;
this.transact = transact;
this.meta48356 = meta48356;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 491520;
})
datascript.t48355.cljs$lang$type = true;
datascript.t48355.cljs$lang$ctorStr = "datascript/t48355";
datascript.t48355.cljs$lang$ctorPrWriter = ((function (res){
return (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"datascript/t48355");
});})(res))
;
datascript.t48355.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res){
return (function (_){var self__ = this;
var ___$1 = this;return true;
});})(res))
;
datascript.t48355.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res){
return (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;return self__.res;
});})(res))
;
datascript.t48355.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res){
return (function (_){var self__ = this;
var ___$1 = this;return self__.res;
});})(res))
;
datascript.t48355.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res){
return (function (_48357){var self__ = this;
var _48357__$1 = this;return self__.meta48356;
});})(res))
;
datascript.t48355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res){
return (function (_48357,meta48356__$1){var self__ = this;
var _48357__$1 = this;return (new datascript.t48355(self__.res,self__.tx_data,self__.conn,self__.transact,meta48356__$1));
});})(res))
;
datascript.__GT_t48355 = ((function (res){
return (function __GT_t48355(res__$1,tx_data__$1,conn__$1,transact__$1,meta48356){return (new datascript.t48355(res__$1,tx_data__$1,conn__$1,transact__$1,meta48356));
});})(res))
;
}
return (new datascript.t48355(res,tx_data,conn,transact,null));
});
datascript.future_call = (function future_call(f){var res = (function (){var G__48373 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__48373) : cljs.core.atom.call(null,G__48373));
})();var realized = (function (){var G__48374 = false;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__48374) : cljs.core.atom.call(null,G__48374));
})();var G__48375_48388 = ((function (res,realized){
return (function (){var G__48377_48390 = res;var G__48378_48391 = (function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})();(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__48377_48390,G__48378_48391) : cljs.core.reset_BANG_.call(null,G__48377_48390,G__48378_48391));
var G__48379 = realized;var G__48380 = true;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__48379,G__48380) : cljs.core.reset_BANG_.call(null,G__48379,G__48380));
});})(res,realized))
;var G__48376_48389 = (0);setTimeout(G__48375_48388,G__48376_48389);
if(typeof datascript.t48381 !== 'undefined')
{} else
{
/**
* @constructor
*/
datascript.t48381 = (function (realized,res,f,future_call,meta48382){
this.realized = realized;
this.res = res;
this.f = f;
this.future_call = future_call;
this.meta48382 = meta48382;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 491520;
})
datascript.t48381.cljs$lang$type = true;
datascript.t48381.cljs$lang$ctorStr = "datascript/t48381";
datascript.t48381.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__20439__auto__,writer__20440__auto__,opt__20441__auto__){return cljs.core._write(writer__20440__auto__,"datascript/t48381");
});})(res,realized))
;
datascript.t48381.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){var self__ = this;
var ___$1 = this;var G__48384 = self__.realized;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48384) : cljs.core.deref.call(null,G__48384));
});})(res,realized))
;
datascript.t48381.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){var self__ = this;
var ___$2 = this;if(cljs.core.truth_((function (){var G__48385 = self__.realized;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48385) : cljs.core.deref.call(null,G__48385));
})()))
{var G__48386 = self__.res;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48386) : cljs.core.deref.call(null,G__48386));
} else
{return timeout_val;
}
});})(res,realized))
;
datascript.t48381.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){var self__ = this;
var ___$1 = this;var G__48387 = self__.res;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48387) : cljs.core.deref.call(null,G__48387));
});})(res,realized))
;
datascript.t48381.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_48383){var self__ = this;
var _48383__$1 = this;return self__.meta48382;
});})(res,realized))
;
datascript.t48381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_48383,meta48382__$1){var self__ = this;
var _48383__$1 = this;return (new datascript.t48381(self__.realized,self__.res,self__.f,self__.future_call,meta48382__$1));
});})(res,realized))
;
datascript.__GT_t48381 = ((function (res,realized){
return (function __GT_t48381(realized__$1,res__$1,f__$1,future_call__$1,meta48382){return (new datascript.t48381(realized__$1,res__$1,f__$1,future_call__$1,meta48382));
});})(res,realized))
;
}
return (new datascript.t48381(realized,res,f,future_call,null));
});
datascript.transact_async = (function transact_async(conn,tx_data){return datascript.future_call((function (){return datascript.transact_BANG_(conn,tx_data);
}));
});
datascript.rand_bits = (function rand_bits(pow){return cljs.core.rand_int(((1) << pow));
});
datascript.squuid = (function squuid(){return (new cljs.core.UUID((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__48393 = ((new Date()).getTime() / (1000));return (Math.round.cljs$core$IFn$_invoke$arity$1 ? Math.round.cljs$core$IFn$_invoke$arity$1(G__48393) : Math.round.call(null,G__48393));
})().toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((datascript.rand_bits((16)) & (4095)) | (16384)).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((datascript.rand_bits((16)) & (16383)) | (32768)).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16))))));
});
datascript.squuid_time_millis = (function squuid_time_millis(uuid){return ((function (){var G__48396 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(uuid.uuid,(0),(8));var G__48397 = (16);return parseInt(G__48396,G__48397);
})() * (1000));
});
//# sourceMappingURL=datascript.js.map