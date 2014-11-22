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
datascript.tx0 = datascript.core.tx0;
datascript.refs = (function refs(schema__$1){return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__46413){var vec__46414 = p__46413;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46414,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46414,(1),null);return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
}),schema__$1));
});
/**
* @param {...*} var_args
*/
datascript.empty_db = (function() { 
var empty_db__delegate = function (p__46415){var vec__46417 = p__46415;var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46417,(0),null);return datascript.core.map__GT_DB(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"eavt","eavt",-666437073),datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.core.cmp_datoms_eavt),new cljs.core.Keyword(null,"aevt","aevt",-585148059),datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.core.cmp_datoms_aevt),new cljs.core.Keyword(null,"avet","avet",1383857032),datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.core.cmp_datoms_avet),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),(0),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),datascript.tx0,new cljs.core.Keyword(null,"refs","refs",-1560051448),datascript.refs(schema__$1)], null));
};
var empty_db = function (var_args){
var p__46415 = null;if (arguments.length > 0) {
  p__46415 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return empty_db__delegate.call(this,p__46415);};
empty_db.cljs$lang$maxFixedArity = 0;
empty_db.cljs$lang$applyTo = (function (arglist__46418){
var p__46415 = cljs.core.seq(arglist__46418);
return empty_db__delegate(p__46415);
});
empty_db.cljs$core$IFn$_invoke$arity$variadic = empty_db__delegate;
return empty_db;
})()
;
/**
* @param {...*} var_args
*/
datascript.create_conn = (function() { 
var create_conn__delegate = function (p__46419){var vec__46425 = p__46419;var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46425,(0),null);var G__46426 = datascript.empty_db.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema__$1], 0));var G__46427 = new cljs.core.Keyword(null,"meta","meta",1499536964);var G__46428 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),(function (){var G__46429 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46429) : cljs.core.atom.call(null,G__46429));
})()], null);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$3 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$3(G__46426,G__46427,G__46428) : cljs.core.atom.call(null,G__46426,G__46427,G__46428));
};
var create_conn = function (var_args){
var p__46419 = null;if (arguments.length > 0) {
  p__46419 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return create_conn__delegate.call(this,p__46419);};
create_conn.cljs$lang$maxFixedArity = 0;
create_conn.cljs$lang$applyTo = (function (arglist__46430){
var p__46419 = cljs.core.seq(arglist__46430);
return create_conn__delegate(p__46419);
});
create_conn.cljs$core$IFn$_invoke$arity$variadic = create_conn__delegate;
return create_conn;
})()
;
/**
* @param {...*} var_args
*/
datascript.with$ = (function() { 
var with$__delegate = function (db,tx_data,p__46431){var vec__46433 = p__46431;var tx_meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46433,(0),null);return datascript.core.transact_tx_data(datascript.core.map__GT_TxReport(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null)),tx_data);
};
var with$ = function (db,tx_data,var_args){
var p__46431 = null;if (arguments.length > 2) {
  p__46431 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return with$__delegate.call(this,db,tx_data,p__46431);};
with$.cljs$lang$maxFixedArity = 2;
with$.cljs$lang$applyTo = (function (arglist__46434){
var db = cljs.core.first(arglist__46434);
arglist__46434 = cljs.core.next(arglist__46434);
var tx_data = cljs.core.first(arglist__46434);
var p__46431 = cljs.core.rest(arglist__46434);
return with$__delegate(db,tx_data,p__46431);
});
with$.cljs$core$IFn$_invoke$arity$variadic = with$__delegate;
return with$;
})()
;
datascript.db_with = (function db_with(db,tx_data){return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.with$(db,tx_data));
});
datascript._transact_BANG_ = (function _transact_BANG_(conn,tx_data,tx_meta){var report = (function (){var G__46439 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46439) : cljs.core.atom.call(null,G__46439));
})();cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(conn,((function (report){
return (function (db){var r = datascript.with$.cljs$core$IFn$_invoke$arity$variadic(db,tx_data,cljs.core.array_seq([tx_meta], 0));var G__46440_46443 = report;var G__46441_46444 = r;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46440_46443,G__46441_46444) : cljs.core.reset_BANG_.call(null,G__46440_46443,G__46441_46444));
return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);
var G__46442 = report;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46442) : cljs.core.deref.call(null,G__46442));
});
/**
* @param {...*} var_args
*/
datascript.transact_BANG_ = (function() { 
var transact_BANG___delegate = function (conn,tx_data,p__46445){var vec__46456 = p__46445;var tx_meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46456,(0),null);var report = datascript._transact_BANG_(conn,tx_data,tx_meta);var seq__46457_46466 = cljs.core.seq((function (){var G__46461 = new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn));return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46461) : cljs.core.deref.call(null,G__46461));
})());var chunk__46458_46467 = null;var count__46459_46468 = (0);var i__46460_46469 = (0);while(true){
if((i__46460_46469 < count__46459_46468))
{var vec__46462_46470 = chunk__46458_46467.cljs$core$IIndexed$_nth$arity$2(null,i__46460_46469);var __46471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46462_46470,(0),null);var callback_46472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46462_46470,(1),null);var G__46463_46473 = report;(callback_46472.cljs$core$IFn$_invoke$arity$1 ? callback_46472.cljs$core$IFn$_invoke$arity$1(G__46463_46473) : callback_46472.call(null,G__46463_46473));
{
var G__46474 = seq__46457_46466;
var G__46475 = chunk__46458_46467;
var G__46476 = count__46459_46468;
var G__46477 = (i__46460_46469 + (1));
seq__46457_46466 = G__46474;
chunk__46458_46467 = G__46475;
count__46459_46468 = G__46476;
i__46460_46469 = G__46477;
continue;
}
} else
{var temp__4126__auto___46478 = cljs.core.seq(seq__46457_46466);if(temp__4126__auto___46478)
{var seq__46457_46479__$1 = temp__4126__auto___46478;if(cljs.core.chunked_seq_QMARK_(seq__46457_46479__$1))
{var c__20965__auto___46480 = cljs.core.chunk_first(seq__46457_46479__$1);{
var G__46481 = cljs.core.chunk_rest(seq__46457_46479__$1);
var G__46482 = c__20965__auto___46480;
var G__46483 = cljs.core.count(c__20965__auto___46480);
var G__46484 = (0);
seq__46457_46466 = G__46481;
chunk__46458_46467 = G__46482;
count__46459_46468 = G__46483;
i__46460_46469 = G__46484;
continue;
}
} else
{var vec__46464_46485 = cljs.core.first(seq__46457_46479__$1);var __46486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46464_46485,(0),null);var callback_46487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46464_46485,(1),null);var G__46465_46488 = report;(callback_46487.cljs$core$IFn$_invoke$arity$1 ? callback_46487.cljs$core$IFn$_invoke$arity$1(G__46465_46488) : callback_46487.call(null,G__46465_46488));
{
var G__46489 = cljs.core.next(seq__46457_46479__$1);
var G__46490 = null;
var G__46491 = (0);
var G__46492 = (0);
seq__46457_46466 = G__46489;
chunk__46458_46467 = G__46490;
count__46459_46468 = G__46491;
i__46460_46469 = G__46492;
continue;
}
}
} else
{}
}
break;
}
return report;
};
var transact_BANG_ = function (conn,tx_data,var_args){
var p__46445 = null;if (arguments.length > 2) {
  p__46445 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return transact_BANG___delegate.call(this,conn,tx_data,p__46445);};
transact_BANG_.cljs$lang$maxFixedArity = 2;
transact_BANG_.cljs$lang$applyTo = (function (arglist__46493){
var conn = cljs.core.first(arglist__46493);
arglist__46493 = cljs.core.next(arglist__46493);
var tx_data = cljs.core.first(arglist__46493);
var p__46445 = cljs.core.rest(arglist__46493);
return transact_BANG___delegate(conn,tx_data,p__46445);
});
transact_BANG_.cljs$core$IFn$_invoke$arity$variadic = transact_BANG___delegate;
return transact_BANG_;
})()
;
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
datascript.components__GT_pattern = (function components__GT_pattern(index,p__46497){var vec__46500 = p__46497;var c0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46500,(0),null);var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46500,(1),null);var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46500,(2),null);var c3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46500,(3),null);var G__46501 = (((index instanceof cljs.core.Keyword))?index.fqn:null);switch (G__46501) {
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
datoms.cljs$lang$applyTo = (function (arglist__46503){
var db = cljs.core.first(arglist__46503);
arglist__46503 = cljs.core.next(arglist__46503);
var index = cljs.core.first(arglist__46503);
var cs = cljs.core.rest(arglist__46503);
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
seek_datoms.cljs$lang$applyTo = (function (arglist__46504){
var db = cljs.core.first(arglist__46504);
arglist__46504 = cljs.core.next(arglist__46504);
var index = cljs.core.first(arglist__46504);
var cs = cljs.core.rest(arglist__46504);
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
datascript.datom_from_reader = (function datom_from_reader(p__46505){var vec__46507 = p__46505;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46507,(0),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46507,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46507,(2),null);var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46507,(3),null);var added = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46507,(4),null);return (new datascript.core.Datom(e,a,v,tx,added));
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
datascript.db_from_reader = (function db_from_reader(p__46508){var map__46512 = p__46508;var map__46512__$1 = ((cljs.core.seq_QMARK_(map__46512))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46512):map__46512);var datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46512__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46512__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));var datoms__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__46512,map__46512__$1,datoms,schema__$1){
return (function (p__46513){var vec__46514 = p__46513;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46514,(0),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46514,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46514,(2),null);var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46514,(3),null);return (new datascript.core.Datom(e,a,v,tx,true));
});})(map__46512,map__46512__$1,datoms,schema__$1))
,datoms);return datascript.core.map__GT_DB(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(datascript.btset.btset_by,datascript.core.cmp_datoms_eavt,datoms__$1),new cljs.core.Keyword(null,"aevt","aevt",-585148059),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(datascript.btset.btset_by,datascript.core.cmp_datoms_aevt,datoms__$1),new cljs.core.Keyword(null,"avet","avet",1383857032),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(datascript.btset.btset_by,datascript.core.cmp_datoms_avet,datoms__$1),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),datoms__$1)),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,datascript.tx0,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx","tx",466630418),datoms__$1)),new cljs.core.Keyword(null,"refs","refs",-1560051448),datascript.refs(schema__$1)], null));
});
datascript.last_tempid = (function (){var G__46515 = (-1000000);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46515) : cljs.core.atom.call(null,G__46515));
})();
datascript.tempid = (function() {
var tempid = null;
var tempid__1 = (function (part){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213)))
{return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.last_tempid,cljs.core.dec);
}
});
var tempid__2 = (function (part,x){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213)))
{return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else
{return x;
}
});
tempid = function(part,x){
switch(arguments.length){
case 1:
return tempid__1.call(this,part);
case 2:
return tempid__2.call(this,part,x);
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
/**
* @param {...*} var_args
*/
datascript.transact = (function() { 
var transact__delegate = function (conn,tx_data,p__46516){var vec__46521 = p__46516;var tx_meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46521,(0),null);var res = datascript.transact_BANG_.cljs$core$IFn$_invoke$arity$variadic(conn,tx_data,cljs.core.array_seq([tx_meta], 0));if(typeof datascript.t46522 !== 'undefined')
{} else
{
/**
* @constructor
*/
datascript.t46522 = (function (res,tx_meta,vec__46521,p__46516,tx_data,conn,transact,meta46523){
this.res = res;
this.tx_meta = tx_meta;
this.vec__46521 = vec__46521;
this.p__46516 = p__46516;
this.tx_data = tx_data;
this.conn = conn;
this.transact = transact;
this.meta46523 = meta46523;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 491520;
})
datascript.t46522.cljs$lang$type = true;
datascript.t46522.cljs$lang$ctorStr = "datascript/t46522";
datascript.t46522.cljs$lang$ctorPrWriter = ((function (res,vec__46521,tx_meta){
return (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"datascript/t46522");
});})(res,vec__46521,tx_meta))
;
datascript.t46522.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,vec__46521,tx_meta){
return (function (_){var self__ = this;
var ___$1 = this;return true;
});})(res,vec__46521,tx_meta))
;
datascript.t46522.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,vec__46521,tx_meta){
return (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;return self__.res;
});})(res,vec__46521,tx_meta))
;
datascript.t46522.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,vec__46521,tx_meta){
return (function (_){var self__ = this;
var ___$1 = this;return self__.res;
});})(res,vec__46521,tx_meta))
;
datascript.t46522.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,vec__46521,tx_meta){
return (function (_46524){var self__ = this;
var _46524__$1 = this;return self__.meta46523;
});})(res,vec__46521,tx_meta))
;
datascript.t46522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,vec__46521,tx_meta){
return (function (_46524,meta46523__$1){var self__ = this;
var _46524__$1 = this;return (new datascript.t46522(self__.res,self__.tx_meta,self__.vec__46521,self__.p__46516,self__.tx_data,self__.conn,self__.transact,meta46523__$1));
});})(res,vec__46521,tx_meta))
;
datascript.__GT_t46522 = ((function (res,vec__46521,tx_meta){
return (function __GT_t46522(res__$1,tx_meta__$1,vec__46521__$1,p__46516__$1,tx_data__$1,conn__$1,transact__$1,meta46523){return (new datascript.t46522(res__$1,tx_meta__$1,vec__46521__$1,p__46516__$1,tx_data__$1,conn__$1,transact__$1,meta46523));
});})(res,vec__46521,tx_meta))
;
}
return (new datascript.t46522(res,tx_meta,vec__46521,p__46516,tx_data,conn,transact,null));
};
var transact = function (conn,tx_data,var_args){
var p__46516 = null;if (arguments.length > 2) {
  p__46516 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return transact__delegate.call(this,conn,tx_data,p__46516);};
transact.cljs$lang$maxFixedArity = 2;
transact.cljs$lang$applyTo = (function (arglist__46525){
var conn = cljs.core.first(arglist__46525);
arglist__46525 = cljs.core.next(arglist__46525);
var tx_data = cljs.core.first(arglist__46525);
var p__46516 = cljs.core.rest(arglist__46525);
return transact__delegate(conn,tx_data,p__46516);
});
transact.cljs$core$IFn$_invoke$arity$variadic = transact__delegate;
return transact;
})()
;
datascript.future_call = (function future_call(f){var res = (function (){var G__46541 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46541) : cljs.core.atom.call(null,G__46541));
})();var realized = (function (){var G__46542 = false;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46542) : cljs.core.atom.call(null,G__46542));
})();var G__46543_46556 = ((function (res,realized){
return (function (){var G__46545_46558 = res;var G__46546_46559 = (function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})();(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46545_46558,G__46546_46559) : cljs.core.reset_BANG_.call(null,G__46545_46558,G__46546_46559));
var G__46547 = realized;var G__46548 = true;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__46547,G__46548) : cljs.core.reset_BANG_.call(null,G__46547,G__46548));
});})(res,realized))
;var G__46544_46557 = (0);setTimeout(G__46543_46556,G__46544_46557);
if(typeof datascript.t46549 !== 'undefined')
{} else
{
/**
* @constructor
*/
datascript.t46549 = (function (realized,res,f,future_call,meta46550){
this.realized = realized;
this.res = res;
this.f = f;
this.future_call = future_call;
this.meta46550 = meta46550;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 491520;
})
datascript.t46549.cljs$lang$type = true;
datascript.t46549.cljs$lang$ctorStr = "datascript/t46549";
datascript.t46549.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__20623__auto__,writer__20624__auto__,opt__20625__auto__){return cljs.core._write(writer__20624__auto__,"datascript/t46549");
});})(res,realized))
;
datascript.t46549.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){var self__ = this;
var ___$1 = this;var G__46552 = self__.realized;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46552) : cljs.core.deref.call(null,G__46552));
});})(res,realized))
;
datascript.t46549.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){var self__ = this;
var ___$2 = this;if(cljs.core.truth_((function (){var G__46553 = self__.realized;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46553) : cljs.core.deref.call(null,G__46553));
})()))
{var G__46554 = self__.res;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46554) : cljs.core.deref.call(null,G__46554));
} else
{return timeout_val;
}
});})(res,realized))
;
datascript.t46549.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){var self__ = this;
var ___$1 = this;var G__46555 = self__.res;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__46555) : cljs.core.deref.call(null,G__46555));
});})(res,realized))
;
datascript.t46549.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_46551){var self__ = this;
var _46551__$1 = this;return self__.meta46550;
});})(res,realized))
;
datascript.t46549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_46551,meta46550__$1){var self__ = this;
var _46551__$1 = this;return (new datascript.t46549(self__.realized,self__.res,self__.f,self__.future_call,meta46550__$1));
});})(res,realized))
;
datascript.__GT_t46549 = ((function (res,realized){
return (function __GT_t46549(realized__$1,res__$1,f__$1,future_call__$1,meta46550){return (new datascript.t46549(realized__$1,res__$1,f__$1,future_call__$1,meta46550));
});})(res,realized))
;
}
return (new datascript.t46549(realized,res,f,future_call,null));
});
/**
* @param {...*} var_args
*/
datascript.transact_async = (function() { 
var transact_async__delegate = function (conn,tx_data,p__46560){var vec__46562 = p__46560;var tx_meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46562,(0),null);return datascript.future_call(((function (vec__46562,tx_meta){
return (function (){return datascript.transact_BANG_.cljs$core$IFn$_invoke$arity$variadic(conn,tx_data,cljs.core.array_seq([tx_meta], 0));
});})(vec__46562,tx_meta))
);
};
var transact_async = function (conn,tx_data,var_args){
var p__46560 = null;if (arguments.length > 2) {
  p__46560 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return transact_async__delegate.call(this,conn,tx_data,p__46560);};
transact_async.cljs$lang$maxFixedArity = 2;
transact_async.cljs$lang$applyTo = (function (arglist__46563){
var conn = cljs.core.first(arglist__46563);
arglist__46563 = cljs.core.next(arglist__46563);
var tx_data = cljs.core.first(arglist__46563);
var p__46560 = cljs.core.rest(arglist__46563);
return transact_async__delegate(conn,tx_data,p__46560);
});
transact_async.cljs$core$IFn$_invoke$arity$variadic = transact_async__delegate;
return transact_async;
})()
;
datascript.rand_bits = (function rand_bits(pow){return cljs.core.rand_int(((1) << pow));
});
datascript.squuid = (function squuid(){return (new cljs.core.UUID((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__46565 = ((new Date()).getTime() / (1000));return (Math.round.cljs$core$IFn$_invoke$arity$1 ? Math.round.cljs$core$IFn$_invoke$arity$1(G__46565) : Math.round.call(null,G__46565));
})().toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((datascript.rand_bits((16)) & (4095)) | (16384)).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((datascript.rand_bits((16)) & (16383)) | (32768)).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16))))));
});
datascript.squuid_time_millis = (function squuid_time_millis(uuid){return ((function (){var G__46568 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(uuid.uuid,(0),(8));var G__46569 = (16);return parseInt(G__46568,G__46569);
})() * (1000));
});
//# sourceMappingURL=datascript.js.map