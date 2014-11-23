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
datascript.refs = (function refs(schema__$1){return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__74063){var vec__74064 = p__74063;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74064,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74064,(1),null);return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
}),schema__$1));
});
/**
* @param {...*} var_args
*/
datascript.empty_db = (function() { 
var empty_db__delegate = function (p__74065){var vec__74067 = p__74065;var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74067,(0),null);return datascript.core.map__GT_DB(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"eavt","eavt",-666437073),datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.core.cmp_datoms_eavt),new cljs.core.Keyword(null,"aevt","aevt",-585148059),datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.core.cmp_datoms_aevt),new cljs.core.Keyword(null,"avet","avet",1383857032),datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.core.cmp_datoms_avet),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),(0),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),datascript.tx0,new cljs.core.Keyword(null,"refs","refs",-1560051448),datascript.refs(schema__$1)], null));
};
var empty_db = function (var_args){
var p__74065 = null;if (arguments.length > 0) {
  p__74065 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return empty_db__delegate.call(this,p__74065);};
empty_db.cljs$lang$maxFixedArity = 0;
empty_db.cljs$lang$applyTo = (function (arglist__74068){
var p__74065 = cljs.core.seq(arglist__74068);
return empty_db__delegate(p__74065);
});
empty_db.cljs$core$IFn$_invoke$arity$variadic = empty_db__delegate;
return empty_db;
})()
;
/**
* @param {...*} var_args
*/
datascript.create_conn = (function() { 
var create_conn__delegate = function (p__74069){var vec__74075 = p__74069;var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74075,(0),null);var G__74076 = datascript.empty_db.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema__$1], 0));var G__74077 = new cljs.core.Keyword(null,"meta","meta",1499536964);var G__74078 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),(function (){var G__74079 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__74079) : cljs.core.atom.call(null,G__74079));
})()], null);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$3 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$3(G__74076,G__74077,G__74078) : cljs.core.atom.call(null,G__74076,G__74077,G__74078));
};
var create_conn = function (var_args){
var p__74069 = null;if (arguments.length > 0) {
  p__74069 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return create_conn__delegate.call(this,p__74069);};
create_conn.cljs$lang$maxFixedArity = 0;
create_conn.cljs$lang$applyTo = (function (arglist__74080){
var p__74069 = cljs.core.seq(arglist__74080);
return create_conn__delegate(p__74069);
});
create_conn.cljs$core$IFn$_invoke$arity$variadic = create_conn__delegate;
return create_conn;
})()
;
/**
* @param {...*} var_args
*/
datascript.with$ = (function() { 
var with$__delegate = function (db,tx_data,p__74081){var vec__74083 = p__74081;var tx_meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74083,(0),null);return datascript.core.transact_tx_data(datascript.core.map__GT_TxReport(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null)),tx_data);
};
var with$ = function (db,tx_data,var_args){
var p__74081 = null;if (arguments.length > 2) {
  p__74081 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return with$__delegate.call(this,db,tx_data,p__74081);};
with$.cljs$lang$maxFixedArity = 2;
with$.cljs$lang$applyTo = (function (arglist__74084){
var db = cljs.core.first(arglist__74084);
arglist__74084 = cljs.core.next(arglist__74084);
var tx_data = cljs.core.first(arglist__74084);
var p__74081 = cljs.core.rest(arglist__74084);
return with$__delegate(db,tx_data,p__74081);
});
with$.cljs$core$IFn$_invoke$arity$variadic = with$__delegate;
return with$;
})()
;
datascript.db_with = (function db_with(db,tx_data){return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.with$(db,tx_data));
});
datascript._transact_BANG_ = (function _transact_BANG_(conn,tx_data,tx_meta){var report = (function (){var G__74089 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__74089) : cljs.core.atom.call(null,G__74089));
})();cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(conn,((function (report){
return (function (db){var r = datascript.with$.cljs$core$IFn$_invoke$arity$variadic(db,tx_data,cljs.core.array_seq([tx_meta], 0));var G__74090_74093 = report;var G__74091_74094 = r;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__74090_74093,G__74091_74094) : cljs.core.reset_BANG_.call(null,G__74090_74093,G__74091_74094));
return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);
var G__74092 = report;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__74092) : cljs.core.deref.call(null,G__74092));
});
/**
* @param {...*} var_args
*/
datascript.transact_BANG_ = (function() { 
var transact_BANG___delegate = function (conn,tx_data,p__74095){var vec__74106 = p__74095;var tx_meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74106,(0),null);var report = datascript._transact_BANG_(conn,tx_data,tx_meta);var seq__74107_74116 = cljs.core.seq((function (){var G__74111 = new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn));return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__74111) : cljs.core.deref.call(null,G__74111));
})());var chunk__74108_74117 = null;var count__74109_74118 = (0);var i__74110_74119 = (0);while(true){
if((i__74110_74119 < count__74109_74118))
{var vec__74112_74120 = chunk__74108_74117.cljs$core$IIndexed$_nth$arity$2(null,i__74110_74119);var __74121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74112_74120,(0),null);var callback_74122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74112_74120,(1),null);var G__74113_74123 = report;(callback_74122.cljs$core$IFn$_invoke$arity$1 ? callback_74122.cljs$core$IFn$_invoke$arity$1(G__74113_74123) : callback_74122.call(null,G__74113_74123));
{
var G__74124 = seq__74107_74116;
var G__74125 = chunk__74108_74117;
var G__74126 = count__74109_74118;
var G__74127 = (i__74110_74119 + (1));
seq__74107_74116 = G__74124;
chunk__74108_74117 = G__74125;
count__74109_74118 = G__74126;
i__74110_74119 = G__74127;
continue;
}
} else
{var temp__4126__auto___74128 = cljs.core.seq(seq__74107_74116);if(temp__4126__auto___74128)
{var seq__74107_74129__$1 = temp__4126__auto___74128;if(cljs.core.chunked_seq_QMARK_(seq__74107_74129__$1))
{var c__21100__auto___74130 = cljs.core.chunk_first(seq__74107_74129__$1);{
var G__74131 = cljs.core.chunk_rest(seq__74107_74129__$1);
var G__74132 = c__21100__auto___74130;
var G__74133 = cljs.core.count(c__21100__auto___74130);
var G__74134 = (0);
seq__74107_74116 = G__74131;
chunk__74108_74117 = G__74132;
count__74109_74118 = G__74133;
i__74110_74119 = G__74134;
continue;
}
} else
{var vec__74114_74135 = cljs.core.first(seq__74107_74129__$1);var __74136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74114_74135,(0),null);var callback_74137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74114_74135,(1),null);var G__74115_74138 = report;(callback_74137.cljs$core$IFn$_invoke$arity$1 ? callback_74137.cljs$core$IFn$_invoke$arity$1(G__74115_74138) : callback_74137.call(null,G__74115_74138));
{
var G__74139 = cljs.core.next(seq__74107_74129__$1);
var G__74140 = null;
var G__74141 = (0);
var G__74142 = (0);
seq__74107_74116 = G__74139;
chunk__74108_74117 = G__74140;
count__74109_74118 = G__74141;
i__74110_74119 = G__74142;
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
var p__74095 = null;if (arguments.length > 2) {
  p__74095 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return transact_BANG___delegate.call(this,conn,tx_data,p__74095);};
transact_BANG_.cljs$lang$maxFixedArity = 2;
transact_BANG_.cljs$lang$applyTo = (function (arglist__74143){
var conn = cljs.core.first(arglist__74143);
arglist__74143 = cljs.core.next(arglist__74143);
var tx_data = cljs.core.first(arglist__74143);
var p__74095 = cljs.core.rest(arglist__74143);
return transact_BANG___delegate(conn,tx_data,p__74095);
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
datascript.components__GT_pattern = (function components__GT_pattern(index,p__74147){var vec__74150 = p__74147;var c0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74150,(0),null);var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74150,(1),null);var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74150,(2),null);var c3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74150,(3),null);var G__74151 = (((index instanceof cljs.core.Keyword))?index.fqn:null);switch (G__74151) {
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
datoms.cljs$lang$applyTo = (function (arglist__74153){
var db = cljs.core.first(arglist__74153);
arglist__74153 = cljs.core.next(arglist__74153);
var index = cljs.core.first(arglist__74153);
var cs = cljs.core.rest(arglist__74153);
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
seek_datoms.cljs$lang$applyTo = (function (arglist__74154){
var db = cljs.core.first(arglist__74154);
arglist__74154 = cljs.core.next(arglist__74154);
var index = cljs.core.first(arglist__74154);
var cs = cljs.core.rest(arglist__74154);
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
datascript.datom_from_reader = (function datom_from_reader(p__74155){var vec__74157 = p__74155;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74157,(0),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74157,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74157,(2),null);var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74157,(3),null);var added = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74157,(4),null);return (new datascript.core.Datom(e,a,v,tx,added));
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
datascript.db_from_reader = (function db_from_reader(p__74158){var map__74162 = p__74158;var map__74162__$1 = ((cljs.core.seq_QMARK_(map__74162))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74162):map__74162);var datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74162__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74162__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));var datoms__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__74162,map__74162__$1,datoms,schema__$1){
return (function (p__74163){var vec__74164 = p__74163;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74164,(0),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74164,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74164,(2),null);var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74164,(3),null);return (new datascript.core.Datom(e,a,v,tx,true));
});})(map__74162,map__74162__$1,datoms,schema__$1))
,datoms);return datascript.core.map__GT_DB(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(datascript.btset.btset_by,datascript.core.cmp_datoms_eavt,datoms__$1),new cljs.core.Keyword(null,"aevt","aevt",-585148059),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(datascript.btset.btset_by,datascript.core.cmp_datoms_aevt,datoms__$1),new cljs.core.Keyword(null,"avet","avet",1383857032),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(datascript.btset.btset_by,datascript.core.cmp_datoms_avet,datoms__$1),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),datoms__$1)),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,datascript.tx0,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx","tx",466630418),datoms__$1)),new cljs.core.Keyword(null,"refs","refs",-1560051448),datascript.refs(schema__$1)], null));
});
datascript.last_tempid = (function (){var G__74165 = (-1000000);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__74165) : cljs.core.atom.call(null,G__74165));
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
var transact__delegate = function (conn,tx_data,p__74166){var vec__74171 = p__74166;var tx_meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74171,(0),null);var res = datascript.transact_BANG_.cljs$core$IFn$_invoke$arity$variadic(conn,tx_data,cljs.core.array_seq([tx_meta], 0));if(typeof datascript.t74172 !== 'undefined')
{} else
{
/**
* @constructor
*/
datascript.t74172 = (function (res,tx_meta,vec__74171,p__74166,tx_data,conn,transact,meta74173){
this.res = res;
this.tx_meta = tx_meta;
this.vec__74171 = vec__74171;
this.p__74166 = p__74166;
this.tx_data = tx_data;
this.conn = conn;
this.transact = transact;
this.meta74173 = meta74173;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 491520;
})
datascript.t74172.cljs$lang$type = true;
datascript.t74172.cljs$lang$ctorStr = "datascript/t74172";
datascript.t74172.cljs$lang$ctorPrWriter = ((function (res,vec__74171,tx_meta){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"datascript/t74172");
});})(res,vec__74171,tx_meta))
;
datascript.t74172.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,vec__74171,tx_meta){
return (function (_){var self__ = this;
var ___$1 = this;return true;
});})(res,vec__74171,tx_meta))
;
datascript.t74172.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,vec__74171,tx_meta){
return (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;return self__.res;
});})(res,vec__74171,tx_meta))
;
datascript.t74172.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,vec__74171,tx_meta){
return (function (_){var self__ = this;
var ___$1 = this;return self__.res;
});})(res,vec__74171,tx_meta))
;
datascript.t74172.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,vec__74171,tx_meta){
return (function (_74174){var self__ = this;
var _74174__$1 = this;return self__.meta74173;
});})(res,vec__74171,tx_meta))
;
datascript.t74172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,vec__74171,tx_meta){
return (function (_74174,meta74173__$1){var self__ = this;
var _74174__$1 = this;return (new datascript.t74172(self__.res,self__.tx_meta,self__.vec__74171,self__.p__74166,self__.tx_data,self__.conn,self__.transact,meta74173__$1));
});})(res,vec__74171,tx_meta))
;
datascript.__GT_t74172 = ((function (res,vec__74171,tx_meta){
return (function __GT_t74172(res__$1,tx_meta__$1,vec__74171__$1,p__74166__$1,tx_data__$1,conn__$1,transact__$1,meta74173){return (new datascript.t74172(res__$1,tx_meta__$1,vec__74171__$1,p__74166__$1,tx_data__$1,conn__$1,transact__$1,meta74173));
});})(res,vec__74171,tx_meta))
;
}
return (new datascript.t74172(res,tx_meta,vec__74171,p__74166,tx_data,conn,transact,null));
};
var transact = function (conn,tx_data,var_args){
var p__74166 = null;if (arguments.length > 2) {
  p__74166 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return transact__delegate.call(this,conn,tx_data,p__74166);};
transact.cljs$lang$maxFixedArity = 2;
transact.cljs$lang$applyTo = (function (arglist__74175){
var conn = cljs.core.first(arglist__74175);
arglist__74175 = cljs.core.next(arglist__74175);
var tx_data = cljs.core.first(arglist__74175);
var p__74166 = cljs.core.rest(arglist__74175);
return transact__delegate(conn,tx_data,p__74166);
});
transact.cljs$core$IFn$_invoke$arity$variadic = transact__delegate;
return transact;
})()
;
datascript.future_call = (function future_call(f){var res = (function (){var G__74191 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__74191) : cljs.core.atom.call(null,G__74191));
})();var realized = (function (){var G__74192 = false;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__74192) : cljs.core.atom.call(null,G__74192));
})();var G__74193_74206 = ((function (res,realized){
return (function (){var G__74195_74208 = res;var G__74196_74209 = (function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})();(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__74195_74208,G__74196_74209) : cljs.core.reset_BANG_.call(null,G__74195_74208,G__74196_74209));
var G__74197 = realized;var G__74198 = true;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__74197,G__74198) : cljs.core.reset_BANG_.call(null,G__74197,G__74198));
});})(res,realized))
;var G__74194_74207 = (0);setTimeout(G__74193_74206,G__74194_74207);
if(typeof datascript.t74199 !== 'undefined')
{} else
{
/**
* @constructor
*/
datascript.t74199 = (function (realized,res,f,future_call,meta74200){
this.realized = realized;
this.res = res;
this.f = f;
this.future_call = future_call;
this.meta74200 = meta74200;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 491520;
})
datascript.t74199.cljs$lang$type = true;
datascript.t74199.cljs$lang$ctorStr = "datascript/t74199";
datascript.t74199.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__20803__auto__,writer__20804__auto__,opt__20805__auto__){return cljs.core._write(writer__20804__auto__,"datascript/t74199");
});})(res,realized))
;
datascript.t74199.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){var self__ = this;
var ___$1 = this;var G__74202 = self__.realized;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__74202) : cljs.core.deref.call(null,G__74202));
});})(res,realized))
;
datascript.t74199.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){var self__ = this;
var ___$2 = this;if(cljs.core.truth_((function (){var G__74203 = self__.realized;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__74203) : cljs.core.deref.call(null,G__74203));
})()))
{var G__74204 = self__.res;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__74204) : cljs.core.deref.call(null,G__74204));
} else
{return timeout_val;
}
});})(res,realized))
;
datascript.t74199.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){var self__ = this;
var ___$1 = this;var G__74205 = self__.res;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__74205) : cljs.core.deref.call(null,G__74205));
});})(res,realized))
;
datascript.t74199.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_74201){var self__ = this;
var _74201__$1 = this;return self__.meta74200;
});})(res,realized))
;
datascript.t74199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_74201,meta74200__$1){var self__ = this;
var _74201__$1 = this;return (new datascript.t74199(self__.realized,self__.res,self__.f,self__.future_call,meta74200__$1));
});})(res,realized))
;
datascript.__GT_t74199 = ((function (res,realized){
return (function __GT_t74199(realized__$1,res__$1,f__$1,future_call__$1,meta74200){return (new datascript.t74199(realized__$1,res__$1,f__$1,future_call__$1,meta74200));
});})(res,realized))
;
}
return (new datascript.t74199(realized,res,f,future_call,null));
});
/**
* @param {...*} var_args
*/
datascript.transact_async = (function() { 
var transact_async__delegate = function (conn,tx_data,p__74210){var vec__74212 = p__74210;var tx_meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74212,(0),null);return datascript.future_call(((function (vec__74212,tx_meta){
return (function (){return datascript.transact_BANG_.cljs$core$IFn$_invoke$arity$variadic(conn,tx_data,cljs.core.array_seq([tx_meta], 0));
});})(vec__74212,tx_meta))
);
};
var transact_async = function (conn,tx_data,var_args){
var p__74210 = null;if (arguments.length > 2) {
  p__74210 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return transact_async__delegate.call(this,conn,tx_data,p__74210);};
transact_async.cljs$lang$maxFixedArity = 2;
transact_async.cljs$lang$applyTo = (function (arglist__74213){
var conn = cljs.core.first(arglist__74213);
arglist__74213 = cljs.core.next(arglist__74213);
var tx_data = cljs.core.first(arglist__74213);
var p__74210 = cljs.core.rest(arglist__74213);
return transact_async__delegate(conn,tx_data,p__74210);
});
transact_async.cljs$core$IFn$_invoke$arity$variadic = transact_async__delegate;
return transact_async;
})()
;
datascript.rand_bits = (function rand_bits(pow){return cljs.core.rand_int(((1) << pow));
});
datascript.squuid = (function squuid(){return (new cljs.core.UUID((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__74215 = ((new Date()).getTime() / (1000));return (Math.round.cljs$core$IFn$_invoke$arity$1 ? Math.round.cljs$core$IFn$_invoke$arity$1(G__74215) : Math.round.call(null,G__74215));
})().toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((datascript.rand_bits((16)) & (4095)) | (16384)).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((datascript.rand_bits((16)) & (16383)) | (32768)).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16))))));
});
datascript.squuid_time_millis = (function squuid_time_millis(uuid){return ((function (){var G__74218 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(uuid.uuid,(0),(8));var G__74219 = (16);return parseInt(G__74218,G__74219);
})() * (1000));
});
//# sourceMappingURL=datascript.js.map