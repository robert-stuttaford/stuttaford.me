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
datascript.refs = (function refs(schema__$1){return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__37949){var vec__37950 = p__37949;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37950,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37950,(1),null);return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
}),schema__$1));
});
/**
* @param {...*} var_args
*/
datascript.empty_db = (function() { 
var empty_db__delegate = function (p__37951){var vec__37953 = p__37951;var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37953,(0),null);return datascript.core.map__GT_DB(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"eavt","eavt",-666437073),datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.core.cmp_datoms_eavt),new cljs.core.Keyword(null,"aevt","aevt",-585148059),datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.core.cmp_datoms_aevt),new cljs.core.Keyword(null,"avet","avet",1383857032),datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.core.cmp_datoms_avet),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),(0),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),datascript.tx0,new cljs.core.Keyword(null,"refs","refs",-1560051448),datascript.refs(schema__$1)], null));
};
var empty_db = function (var_args){
var p__37951 = null;if (arguments.length > 0) {
  p__37951 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return empty_db__delegate.call(this,p__37951);};
empty_db.cljs$lang$maxFixedArity = 0;
empty_db.cljs$lang$applyTo = (function (arglist__37954){
var p__37951 = cljs.core.seq(arglist__37954);
return empty_db__delegate(p__37951);
});
empty_db.cljs$core$IFn$_invoke$arity$variadic = empty_db__delegate;
return empty_db;
})()
;
/**
* @param {...*} var_args
*/
datascript.create_conn = (function() { 
var create_conn__delegate = function (p__37955){var vec__37961 = p__37955;var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37961,(0),null);var G__37962 = datascript.empty_db.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema__$1], 0));var G__37963 = new cljs.core.Keyword(null,"meta","meta",1499536964);var G__37964 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),(function (){var G__37965 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37965) : cljs.core.atom.call(null,G__37965));
})()], null);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$3 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$3(G__37962,G__37963,G__37964) : cljs.core.atom.call(null,G__37962,G__37963,G__37964));
};
var create_conn = function (var_args){
var p__37955 = null;if (arguments.length > 0) {
  p__37955 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return create_conn__delegate.call(this,p__37955);};
create_conn.cljs$lang$maxFixedArity = 0;
create_conn.cljs$lang$applyTo = (function (arglist__37966){
var p__37955 = cljs.core.seq(arglist__37966);
return create_conn__delegate(p__37955);
});
create_conn.cljs$core$IFn$_invoke$arity$variadic = create_conn__delegate;
return create_conn;
})()
;
/**
* @param {...*} var_args
*/
datascript.with$ = (function() { 
var with$__delegate = function (db,tx_data,p__37967){var vec__37969 = p__37967;var tx_meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37969,(0),null);return datascript.core.transact_tx_data(datascript.core.map__GT_TxReport(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null)),tx_data);
};
var with$ = function (db,tx_data,var_args){
var p__37967 = null;if (arguments.length > 2) {
  p__37967 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return with$__delegate.call(this,db,tx_data,p__37967);};
with$.cljs$lang$maxFixedArity = 2;
with$.cljs$lang$applyTo = (function (arglist__37970){
var db = cljs.core.first(arglist__37970);
arglist__37970 = cljs.core.next(arglist__37970);
var tx_data = cljs.core.first(arglist__37970);
var p__37967 = cljs.core.rest(arglist__37970);
return with$__delegate(db,tx_data,p__37967);
});
with$.cljs$core$IFn$_invoke$arity$variadic = with$__delegate;
return with$;
})()
;
datascript.db_with = (function db_with(db,tx_data){return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.with$(db,tx_data));
});
datascript._transact_BANG_ = (function _transact_BANG_(conn,tx_data,tx_meta){var report = (function (){var G__37975 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37975) : cljs.core.atom.call(null,G__37975));
})();cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(conn,((function (report){
return (function (db){var r = datascript.with$.cljs$core$IFn$_invoke$arity$variadic(db,tx_data,cljs.core.array_seq([tx_meta], 0));var G__37976_37979 = report;var G__37977_37980 = r;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__37976_37979,G__37977_37980) : cljs.core.reset_BANG_.call(null,G__37976_37979,G__37977_37980));
return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);
var G__37978 = report;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__37978) : cljs.core.deref.call(null,G__37978));
});
/**
* @param {...*} var_args
*/
datascript.transact_BANG_ = (function() { 
var transact_BANG___delegate = function (conn,tx_data,p__37981){var vec__37992 = p__37981;var tx_meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37992,(0),null);var report = datascript._transact_BANG_(conn,tx_data,tx_meta);var seq__37993_38002 = cljs.core.seq((function (){var G__37997 = new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn));return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__37997) : cljs.core.deref.call(null,G__37997));
})());var chunk__37994_38003 = null;var count__37995_38004 = (0);var i__37996_38005 = (0);while(true){
if((i__37996_38005 < count__37995_38004))
{var vec__37998_38006 = chunk__37994_38003.cljs$core$IIndexed$_nth$arity$2(null,i__37996_38005);var __38007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37998_38006,(0),null);var callback_38008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37998_38006,(1),null);var G__37999_38009 = report;(callback_38008.cljs$core$IFn$_invoke$arity$1 ? callback_38008.cljs$core$IFn$_invoke$arity$1(G__37999_38009) : callback_38008.call(null,G__37999_38009));
{
var G__38010 = seq__37993_38002;
var G__38011 = chunk__37994_38003;
var G__38012 = count__37995_38004;
var G__38013 = (i__37996_38005 + (1));
seq__37993_38002 = G__38010;
chunk__37994_38003 = G__38011;
count__37995_38004 = G__38012;
i__37996_38005 = G__38013;
continue;
}
} else
{var temp__4126__auto___38014 = cljs.core.seq(seq__37993_38002);if(temp__4126__auto___38014)
{var seq__37993_38015__$1 = temp__4126__auto___38014;if(cljs.core.chunked_seq_QMARK_(seq__37993_38015__$1))
{var c__21126__auto___38016 = cljs.core.chunk_first(seq__37993_38015__$1);{
var G__38017 = cljs.core.chunk_rest(seq__37993_38015__$1);
var G__38018 = c__21126__auto___38016;
var G__38019 = cljs.core.count(c__21126__auto___38016);
var G__38020 = (0);
seq__37993_38002 = G__38017;
chunk__37994_38003 = G__38018;
count__37995_38004 = G__38019;
i__37996_38005 = G__38020;
continue;
}
} else
{var vec__38000_38021 = cljs.core.first(seq__37993_38015__$1);var __38022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38000_38021,(0),null);var callback_38023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38000_38021,(1),null);var G__38001_38024 = report;(callback_38023.cljs$core$IFn$_invoke$arity$1 ? callback_38023.cljs$core$IFn$_invoke$arity$1(G__38001_38024) : callback_38023.call(null,G__38001_38024));
{
var G__38025 = cljs.core.next(seq__37993_38015__$1);
var G__38026 = null;
var G__38027 = (0);
var G__38028 = (0);
seq__37993_38002 = G__38025;
chunk__37994_38003 = G__38026;
count__37995_38004 = G__38027;
i__37996_38005 = G__38028;
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
var p__37981 = null;if (arguments.length > 2) {
  p__37981 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return transact_BANG___delegate.call(this,conn,tx_data,p__37981);};
transact_BANG_.cljs$lang$maxFixedArity = 2;
transact_BANG_.cljs$lang$applyTo = (function (arglist__38029){
var conn = cljs.core.first(arglist__38029);
arglist__38029 = cljs.core.next(arglist__38029);
var tx_data = cljs.core.first(arglist__38029);
var p__37981 = cljs.core.rest(arglist__38029);
return transact_BANG___delegate(conn,tx_data,p__37981);
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
datascript.components__GT_pattern = (function components__GT_pattern(index,p__38033){var vec__38036 = p__38033;var c0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38036,(0),null);var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38036,(1),null);var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38036,(2),null);var c3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38036,(3),null);var G__38037 = (((index instanceof cljs.core.Keyword))?index.fqn:null);switch (G__38037) {
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
datoms.cljs$lang$applyTo = (function (arglist__38039){
var db = cljs.core.first(arglist__38039);
arglist__38039 = cljs.core.next(arglist__38039);
var index = cljs.core.first(arglist__38039);
var cs = cljs.core.rest(arglist__38039);
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
seek_datoms.cljs$lang$applyTo = (function (arglist__38040){
var db = cljs.core.first(arglist__38040);
arglist__38040 = cljs.core.next(arglist__38040);
var index = cljs.core.first(arglist__38040);
var cs = cljs.core.rest(arglist__38040);
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
datascript.datom_from_reader = (function datom_from_reader(p__38041){var vec__38043 = p__38041;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38043,(0),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38043,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38043,(2),null);var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38043,(3),null);var added = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38043,(4),null);return (new datascript.core.Datom(e,a,v,tx,added));
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
datascript.db_from_reader = (function db_from_reader(p__38044){var map__38048 = p__38044;var map__38048__$1 = ((cljs.core.seq_QMARK_(map__38048))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38048):map__38048);var datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38048__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38048__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));var datoms__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__38048,map__38048__$1,datoms,schema__$1){
return (function (p__38049){var vec__38050 = p__38049;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38050,(0),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38050,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38050,(2),null);var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38050,(3),null);return (new datascript.core.Datom(e,a,v,tx,true));
});})(map__38048,map__38048__$1,datoms,schema__$1))
,datoms);return datascript.core.map__GT_DB(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(datascript.btset.btset_by,datascript.core.cmp_datoms_eavt,datoms__$1),new cljs.core.Keyword(null,"aevt","aevt",-585148059),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(datascript.btset.btset_by,datascript.core.cmp_datoms_aevt,datoms__$1),new cljs.core.Keyword(null,"avet","avet",1383857032),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(datascript.btset.btset_by,datascript.core.cmp_datoms_avet,datoms__$1),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),datoms__$1)),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,datascript.tx0,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx","tx",466630418),datoms__$1)),new cljs.core.Keyword(null,"refs","refs",-1560051448),datascript.refs(schema__$1)], null));
});
datascript.last_tempid = (function (){var G__38051 = (-1000000);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38051) : cljs.core.atom.call(null,G__38051));
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
var transact__delegate = function (conn,tx_data,p__38052){var vec__38057 = p__38052;var tx_meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38057,(0),null);var res = datascript.transact_BANG_.cljs$core$IFn$_invoke$arity$variadic(conn,tx_data,cljs.core.array_seq([tx_meta], 0));if(typeof datascript.t38058 !== 'undefined')
{} else
{
/**
* @constructor
*/
datascript.t38058 = (function (res,tx_meta,vec__38057,p__38052,tx_data,conn,transact,meta38059){
this.res = res;
this.tx_meta = tx_meta;
this.vec__38057 = vec__38057;
this.p__38052 = p__38052;
this.tx_data = tx_data;
this.conn = conn;
this.transact = transact;
this.meta38059 = meta38059;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 491520;
})
datascript.t38058.cljs$lang$type = true;
datascript.t38058.cljs$lang$ctorStr = "datascript/t38058";
datascript.t38058.cljs$lang$ctorPrWriter = ((function (res,vec__38057,tx_meta){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"datascript/t38058");
});})(res,vec__38057,tx_meta))
;
datascript.t38058.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,vec__38057,tx_meta){
return (function (_){var self__ = this;
var ___$1 = this;return true;
});})(res,vec__38057,tx_meta))
;
datascript.t38058.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,vec__38057,tx_meta){
return (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;return self__.res;
});})(res,vec__38057,tx_meta))
;
datascript.t38058.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,vec__38057,tx_meta){
return (function (_){var self__ = this;
var ___$1 = this;return self__.res;
});})(res,vec__38057,tx_meta))
;
datascript.t38058.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,vec__38057,tx_meta){
return (function (_38060){var self__ = this;
var _38060__$1 = this;return self__.meta38059;
});})(res,vec__38057,tx_meta))
;
datascript.t38058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,vec__38057,tx_meta){
return (function (_38060,meta38059__$1){var self__ = this;
var _38060__$1 = this;return (new datascript.t38058(self__.res,self__.tx_meta,self__.vec__38057,self__.p__38052,self__.tx_data,self__.conn,self__.transact,meta38059__$1));
});})(res,vec__38057,tx_meta))
;
datascript.__GT_t38058 = ((function (res,vec__38057,tx_meta){
return (function __GT_t38058(res__$1,tx_meta__$1,vec__38057__$1,p__38052__$1,tx_data__$1,conn__$1,transact__$1,meta38059){return (new datascript.t38058(res__$1,tx_meta__$1,vec__38057__$1,p__38052__$1,tx_data__$1,conn__$1,transact__$1,meta38059));
});})(res,vec__38057,tx_meta))
;
}
return (new datascript.t38058(res,tx_meta,vec__38057,p__38052,tx_data,conn,transact,null));
};
var transact = function (conn,tx_data,var_args){
var p__38052 = null;if (arguments.length > 2) {
  p__38052 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return transact__delegate.call(this,conn,tx_data,p__38052);};
transact.cljs$lang$maxFixedArity = 2;
transact.cljs$lang$applyTo = (function (arglist__38061){
var conn = cljs.core.first(arglist__38061);
arglist__38061 = cljs.core.next(arglist__38061);
var tx_data = cljs.core.first(arglist__38061);
var p__38052 = cljs.core.rest(arglist__38061);
return transact__delegate(conn,tx_data,p__38052);
});
transact.cljs$core$IFn$_invoke$arity$variadic = transact__delegate;
return transact;
})()
;
datascript.future_call = (function future_call(f){var res = (function (){var G__38077 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38077) : cljs.core.atom.call(null,G__38077));
})();var realized = (function (){var G__38078 = false;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38078) : cljs.core.atom.call(null,G__38078));
})();var G__38079_38092 = ((function (res,realized){
return (function (){var G__38081_38094 = res;var G__38082_38095 = (function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})();(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__38081_38094,G__38082_38095) : cljs.core.reset_BANG_.call(null,G__38081_38094,G__38082_38095));
var G__38083 = realized;var G__38084 = true;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__38083,G__38084) : cljs.core.reset_BANG_.call(null,G__38083,G__38084));
});})(res,realized))
;var G__38080_38093 = (0);setTimeout(G__38079_38092,G__38080_38093);
if(typeof datascript.t38085 !== 'undefined')
{} else
{
/**
* @constructor
*/
datascript.t38085 = (function (realized,res,f,future_call,meta38086){
this.realized = realized;
this.res = res;
this.f = f;
this.future_call = future_call;
this.meta38086 = meta38086;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 491520;
})
datascript.t38085.cljs$lang$type = true;
datascript.t38085.cljs$lang$ctorStr = "datascript/t38085";
datascript.t38085.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__20766__auto__,writer__20767__auto__,opt__20768__auto__){return cljs.core._write(writer__20767__auto__,"datascript/t38085");
});})(res,realized))
;
datascript.t38085.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){var self__ = this;
var ___$1 = this;var G__38088 = self__.realized;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__38088) : cljs.core.deref.call(null,G__38088));
});})(res,realized))
;
datascript.t38085.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){var self__ = this;
var ___$2 = this;if(cljs.core.truth_((function (){var G__38089 = self__.realized;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__38089) : cljs.core.deref.call(null,G__38089));
})()))
{var G__38090 = self__.res;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__38090) : cljs.core.deref.call(null,G__38090));
} else
{return timeout_val;
}
});})(res,realized))
;
datascript.t38085.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){var self__ = this;
var ___$1 = this;var G__38091 = self__.res;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__38091) : cljs.core.deref.call(null,G__38091));
});})(res,realized))
;
datascript.t38085.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_38087){var self__ = this;
var _38087__$1 = this;return self__.meta38086;
});})(res,realized))
;
datascript.t38085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_38087,meta38086__$1){var self__ = this;
var _38087__$1 = this;return (new datascript.t38085(self__.realized,self__.res,self__.f,self__.future_call,meta38086__$1));
});})(res,realized))
;
datascript.__GT_t38085 = ((function (res,realized){
return (function __GT_t38085(realized__$1,res__$1,f__$1,future_call__$1,meta38086){return (new datascript.t38085(realized__$1,res__$1,f__$1,future_call__$1,meta38086));
});})(res,realized))
;
}
return (new datascript.t38085(realized,res,f,future_call,null));
});
/**
* @param {...*} var_args
*/
datascript.transact_async = (function() { 
var transact_async__delegate = function (conn,tx_data,p__38096){var vec__38098 = p__38096;var tx_meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38098,(0),null);return datascript.future_call(((function (vec__38098,tx_meta){
return (function (){return datascript.transact_BANG_.cljs$core$IFn$_invoke$arity$variadic(conn,tx_data,cljs.core.array_seq([tx_meta], 0));
});})(vec__38098,tx_meta))
);
};
var transact_async = function (conn,tx_data,var_args){
var p__38096 = null;if (arguments.length > 2) {
  p__38096 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return transact_async__delegate.call(this,conn,tx_data,p__38096);};
transact_async.cljs$lang$maxFixedArity = 2;
transact_async.cljs$lang$applyTo = (function (arglist__38099){
var conn = cljs.core.first(arglist__38099);
arglist__38099 = cljs.core.next(arglist__38099);
var tx_data = cljs.core.first(arglist__38099);
var p__38096 = cljs.core.rest(arglist__38099);
return transact_async__delegate(conn,tx_data,p__38096);
});
transact_async.cljs$core$IFn$_invoke$arity$variadic = transact_async__delegate;
return transact_async;
})()
;
datascript.rand_bits = (function rand_bits(pow){return cljs.core.rand_int(((1) << pow));
});
datascript.squuid = (function squuid(){return (new cljs.core.UUID((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__38101 = ((new Date()).getTime() / (1000));return (Math.round.cljs$core$IFn$_invoke$arity$1 ? Math.round.cljs$core$IFn$_invoke$arity$1(G__38101) : Math.round.call(null,G__38101));
})().toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((datascript.rand_bits((16)) & (4095)) | (16384)).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((datascript.rand_bits((16)) & (16383)) | (32768)).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16))))));
});
datascript.squuid_time_millis = (function squuid_time_millis(uuid){return ((function (){var G__38104 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(uuid.uuid,(0),(8));var G__38105 = (16);return parseInt(G__38104,G__38105);
})() * (1000));
});
//# sourceMappingURL=datascript.js.map