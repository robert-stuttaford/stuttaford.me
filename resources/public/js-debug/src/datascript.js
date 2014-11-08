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
datascript.refs = (function refs(schema__$1){return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__55091){var vec__55092 = p__55091;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55092,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55092,(1),null);return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
}),schema__$1));
});
/**
* @param {...*} var_args
*/
datascript.empty_db = (function() { 
var empty_db__delegate = function (p__55093){var vec__55095 = p__55093;var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55095,(0),null);return datascript.core.map__GT_DB(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"eavt","eavt",-666437073),datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.core.cmp_datoms_eavt),new cljs.core.Keyword(null,"aevt","aevt",-585148059),datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.core.cmp_datoms_aevt),new cljs.core.Keyword(null,"avet","avet",1383857032),datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.core.cmp_datoms_avet),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),(0),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),datascript.tx0,new cljs.core.Keyword(null,"refs","refs",-1560051448),datascript.refs(schema__$1)], null));
};
var empty_db = function (var_args){
var p__55093 = null;if (arguments.length > 0) {
  p__55093 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return empty_db__delegate.call(this,p__55093);};
empty_db.cljs$lang$maxFixedArity = 0;
empty_db.cljs$lang$applyTo = (function (arglist__55096){
var p__55093 = cljs.core.seq(arglist__55096);
return empty_db__delegate(p__55093);
});
empty_db.cljs$core$IFn$_invoke$arity$variadic = empty_db__delegate;
return empty_db;
})()
;
/**
* @param {...*} var_args
*/
datascript.create_conn = (function() { 
var create_conn__delegate = function (p__55097){var vec__55103 = p__55097;var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55103,(0),null);var G__55104 = datascript.empty_db.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema__$1], 0));var G__55105 = new cljs.core.Keyword(null,"meta","meta",1499536964);var G__55106 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),(function (){var G__55107 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__55107) : cljs.core.atom.call(null,G__55107));
})()], null);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$3 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$3(G__55104,G__55105,G__55106) : cljs.core.atom.call(null,G__55104,G__55105,G__55106));
};
var create_conn = function (var_args){
var p__55097 = null;if (arguments.length > 0) {
  p__55097 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return create_conn__delegate.call(this,p__55097);};
create_conn.cljs$lang$maxFixedArity = 0;
create_conn.cljs$lang$applyTo = (function (arglist__55108){
var p__55097 = cljs.core.seq(arglist__55108);
return create_conn__delegate(p__55097);
});
create_conn.cljs$core$IFn$_invoke$arity$variadic = create_conn__delegate;
return create_conn;
})()
;
/**
* @param {...*} var_args
*/
datascript.with$ = (function() { 
var with$__delegate = function (db,tx_data,p__55109){var vec__55111 = p__55109;var tx_meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55111,(0),null);return datascript.core.transact_tx_data(datascript.core.map__GT_TxReport(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null)),tx_data);
};
var with$ = function (db,tx_data,var_args){
var p__55109 = null;if (arguments.length > 2) {
  p__55109 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return with$__delegate.call(this,db,tx_data,p__55109);};
with$.cljs$lang$maxFixedArity = 2;
with$.cljs$lang$applyTo = (function (arglist__55112){
var db = cljs.core.first(arglist__55112);
arglist__55112 = cljs.core.next(arglist__55112);
var tx_data = cljs.core.first(arglist__55112);
var p__55109 = cljs.core.rest(arglist__55112);
return with$__delegate(db,tx_data,p__55109);
});
with$.cljs$core$IFn$_invoke$arity$variadic = with$__delegate;
return with$;
})()
;
datascript.db_with = (function db_with(db,tx_data){return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.with$(db,tx_data));
});
datascript._transact_BANG_ = (function _transact_BANG_(conn,tx_data,tx_meta){var report = (function (){var G__55117 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__55117) : cljs.core.atom.call(null,G__55117));
})();cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(conn,((function (report){
return (function (db){var r = datascript.with$.cljs$core$IFn$_invoke$arity$variadic(db,tx_data,cljs.core.array_seq([tx_meta], 0));var G__55118_55121 = report;var G__55119_55122 = r;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__55118_55121,G__55119_55122) : cljs.core.reset_BANG_.call(null,G__55118_55121,G__55119_55122));
return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);
var G__55120 = report;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__55120) : cljs.core.deref.call(null,G__55120));
});
/**
* @param {...*} var_args
*/
datascript.transact_BANG_ = (function() { 
var transact_BANG___delegate = function (conn,tx_data,p__55123){var vec__55134 = p__55123;var tx_meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55134,(0),null);var report = datascript._transact_BANG_(conn,tx_data,tx_meta);var seq__55135_55144 = cljs.core.seq((function (){var G__55139 = new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn));return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__55139) : cljs.core.deref.call(null,G__55139));
})());var chunk__55136_55145 = null;var count__55137_55146 = (0);var i__55138_55147 = (0);while(true){
if((i__55138_55147 < count__55137_55146))
{var vec__55140_55148 = chunk__55136_55145.cljs$core$IIndexed$_nth$arity$2(null,i__55138_55147);var __55149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55140_55148,(0),null);var callback_55150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55140_55148,(1),null);var G__55141_55151 = report;(callback_55150.cljs$core$IFn$_invoke$arity$1 ? callback_55150.cljs$core$IFn$_invoke$arity$1(G__55141_55151) : callback_55150.call(null,G__55141_55151));
{
var G__55152 = seq__55135_55144;
var G__55153 = chunk__55136_55145;
var G__55154 = count__55137_55146;
var G__55155 = (i__55138_55147 + (1));
seq__55135_55144 = G__55152;
chunk__55136_55145 = G__55153;
count__55137_55146 = G__55154;
i__55138_55147 = G__55155;
continue;
}
} else
{var temp__4126__auto___55156 = cljs.core.seq(seq__55135_55144);if(temp__4126__auto___55156)
{var seq__55135_55157__$1 = temp__4126__auto___55156;if(cljs.core.chunked_seq_QMARK_(seq__55135_55157__$1))
{var c__21046__auto___55158 = cljs.core.chunk_first(seq__55135_55157__$1);{
var G__55159 = cljs.core.chunk_rest(seq__55135_55157__$1);
var G__55160 = c__21046__auto___55158;
var G__55161 = cljs.core.count(c__21046__auto___55158);
var G__55162 = (0);
seq__55135_55144 = G__55159;
chunk__55136_55145 = G__55160;
count__55137_55146 = G__55161;
i__55138_55147 = G__55162;
continue;
}
} else
{var vec__55142_55163 = cljs.core.first(seq__55135_55157__$1);var __55164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55142_55163,(0),null);var callback_55165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55142_55163,(1),null);var G__55143_55166 = report;(callback_55165.cljs$core$IFn$_invoke$arity$1 ? callback_55165.cljs$core$IFn$_invoke$arity$1(G__55143_55166) : callback_55165.call(null,G__55143_55166));
{
var G__55167 = cljs.core.next(seq__55135_55157__$1);
var G__55168 = null;
var G__55169 = (0);
var G__55170 = (0);
seq__55135_55144 = G__55167;
chunk__55136_55145 = G__55168;
count__55137_55146 = G__55169;
i__55138_55147 = G__55170;
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
var p__55123 = null;if (arguments.length > 2) {
  p__55123 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return transact_BANG___delegate.call(this,conn,tx_data,p__55123);};
transact_BANG_.cljs$lang$maxFixedArity = 2;
transact_BANG_.cljs$lang$applyTo = (function (arglist__55171){
var conn = cljs.core.first(arglist__55171);
arglist__55171 = cljs.core.next(arglist__55171);
var tx_data = cljs.core.first(arglist__55171);
var p__55123 = cljs.core.rest(arglist__55171);
return transact_BANG___delegate(conn,tx_data,p__55123);
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
datascript.components__GT_pattern = (function components__GT_pattern(index,p__55175){var vec__55178 = p__55175;var c0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55178,(0),null);var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55178,(1),null);var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55178,(2),null);var c3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55178,(3),null);var G__55179 = (((index instanceof cljs.core.Keyword))?index.fqn:null);switch (G__55179) {
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
datoms.cljs$lang$applyTo = (function (arglist__55181){
var db = cljs.core.first(arglist__55181);
arglist__55181 = cljs.core.next(arglist__55181);
var index = cljs.core.first(arglist__55181);
var cs = cljs.core.rest(arglist__55181);
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
seek_datoms.cljs$lang$applyTo = (function (arglist__55182){
var db = cljs.core.first(arglist__55182);
arglist__55182 = cljs.core.next(arglist__55182);
var index = cljs.core.first(arglist__55182);
var cs = cljs.core.rest(arglist__55182);
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
datascript.datom_from_reader = (function datom_from_reader(p__55183){var vec__55185 = p__55183;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55185,(0),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55185,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55185,(2),null);var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55185,(3),null);var added = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55185,(4),null);return (new datascript.core.Datom(e,a,v,tx,added));
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
datascript.db_from_reader = (function db_from_reader(p__55186){var map__55190 = p__55186;var map__55190__$1 = ((cljs.core.seq_QMARK_(map__55190))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55190):map__55190);var datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55190__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55190__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));var datoms__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__55190,map__55190__$1,datoms,schema__$1){
return (function (p__55191){var vec__55192 = p__55191;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55192,(0),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55192,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55192,(2),null);var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55192,(3),null);return (new datascript.core.Datom(e,a,v,tx,true));
});})(map__55190,map__55190__$1,datoms,schema__$1))
,datoms);return datascript.core.map__GT_DB(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(datascript.btset.btset_by,datascript.core.cmp_datoms_eavt,datoms__$1),new cljs.core.Keyword(null,"aevt","aevt",-585148059),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(datascript.btset.btset_by,datascript.core.cmp_datoms_aevt,datoms__$1),new cljs.core.Keyword(null,"avet","avet",1383857032),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(datascript.btset.btset_by,datascript.core.cmp_datoms_avet,datoms__$1),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),datoms__$1)),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,datascript.tx0,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx","tx",466630418),datoms__$1)),new cljs.core.Keyword(null,"refs","refs",-1560051448),datascript.refs(schema__$1)], null));
});
datascript.last_tempid = (function (){var G__55193 = (-1000000);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__55193) : cljs.core.atom.call(null,G__55193));
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
var transact__delegate = function (conn,tx_data,p__55194){var vec__55199 = p__55194;var tx_meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55199,(0),null);var res = datascript.transact_BANG_.cljs$core$IFn$_invoke$arity$variadic(conn,tx_data,cljs.core.array_seq([tx_meta], 0));if(typeof datascript.t55200 !== 'undefined')
{} else
{
/**
* @constructor
*/
datascript.t55200 = (function (res,tx_meta,vec__55199,p__55194,tx_data,conn,transact,meta55201){
this.res = res;
this.tx_meta = tx_meta;
this.vec__55199 = vec__55199;
this.p__55194 = p__55194;
this.tx_data = tx_data;
this.conn = conn;
this.transact = transact;
this.meta55201 = meta55201;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 491520;
})
datascript.t55200.cljs$lang$type = true;
datascript.t55200.cljs$lang$ctorStr = "datascript/t55200";
datascript.t55200.cljs$lang$ctorPrWriter = ((function (res,vec__55199,tx_meta){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"datascript/t55200");
});})(res,vec__55199,tx_meta))
;
datascript.t55200.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,vec__55199,tx_meta){
return (function (_){var self__ = this;
var ___$1 = this;return true;
});})(res,vec__55199,tx_meta))
;
datascript.t55200.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,vec__55199,tx_meta){
return (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;return self__.res;
});})(res,vec__55199,tx_meta))
;
datascript.t55200.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,vec__55199,tx_meta){
return (function (_){var self__ = this;
var ___$1 = this;return self__.res;
});})(res,vec__55199,tx_meta))
;
datascript.t55200.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,vec__55199,tx_meta){
return (function (_55202){var self__ = this;
var _55202__$1 = this;return self__.meta55201;
});})(res,vec__55199,tx_meta))
;
datascript.t55200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,vec__55199,tx_meta){
return (function (_55202,meta55201__$1){var self__ = this;
var _55202__$1 = this;return (new datascript.t55200(self__.res,self__.tx_meta,self__.vec__55199,self__.p__55194,self__.tx_data,self__.conn,self__.transact,meta55201__$1));
});})(res,vec__55199,tx_meta))
;
datascript.__GT_t55200 = ((function (res,vec__55199,tx_meta){
return (function __GT_t55200(res__$1,tx_meta__$1,vec__55199__$1,p__55194__$1,tx_data__$1,conn__$1,transact__$1,meta55201){return (new datascript.t55200(res__$1,tx_meta__$1,vec__55199__$1,p__55194__$1,tx_data__$1,conn__$1,transact__$1,meta55201));
});})(res,vec__55199,tx_meta))
;
}
return (new datascript.t55200(res,tx_meta,vec__55199,p__55194,tx_data,conn,transact,null));
};
var transact = function (conn,tx_data,var_args){
var p__55194 = null;if (arguments.length > 2) {
  p__55194 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return transact__delegate.call(this,conn,tx_data,p__55194);};
transact.cljs$lang$maxFixedArity = 2;
transact.cljs$lang$applyTo = (function (arglist__55203){
var conn = cljs.core.first(arglist__55203);
arglist__55203 = cljs.core.next(arglist__55203);
var tx_data = cljs.core.first(arglist__55203);
var p__55194 = cljs.core.rest(arglist__55203);
return transact__delegate(conn,tx_data,p__55194);
});
transact.cljs$core$IFn$_invoke$arity$variadic = transact__delegate;
return transact;
})()
;
datascript.future_call = (function future_call(f){var res = (function (){var G__55219 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__55219) : cljs.core.atom.call(null,G__55219));
})();var realized = (function (){var G__55220 = false;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__55220) : cljs.core.atom.call(null,G__55220));
})();var G__55221_55234 = ((function (res,realized){
return (function (){var G__55223_55236 = res;var G__55224_55237 = (function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})();(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__55223_55236,G__55224_55237) : cljs.core.reset_BANG_.call(null,G__55223_55236,G__55224_55237));
var G__55225 = realized;var G__55226 = true;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__55225,G__55226) : cljs.core.reset_BANG_.call(null,G__55225,G__55226));
});})(res,realized))
;var G__55222_55235 = (0);setTimeout(G__55221_55234,G__55222_55235);
if(typeof datascript.t55227 !== 'undefined')
{} else
{
/**
* @constructor
*/
datascript.t55227 = (function (realized,res,f,future_call,meta55228){
this.realized = realized;
this.res = res;
this.f = f;
this.future_call = future_call;
this.meta55228 = meta55228;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 491520;
})
datascript.t55227.cljs$lang$type = true;
datascript.t55227.cljs$lang$ctorStr = "datascript/t55227";
datascript.t55227.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__20752__auto__,writer__20753__auto__,opt__20754__auto__){return cljs.core._write(writer__20753__auto__,"datascript/t55227");
});})(res,realized))
;
datascript.t55227.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){var self__ = this;
var ___$1 = this;var G__55230 = self__.realized;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__55230) : cljs.core.deref.call(null,G__55230));
});})(res,realized))
;
datascript.t55227.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){var self__ = this;
var ___$2 = this;if(cljs.core.truth_((function (){var G__55231 = self__.realized;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__55231) : cljs.core.deref.call(null,G__55231));
})()))
{var G__55232 = self__.res;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__55232) : cljs.core.deref.call(null,G__55232));
} else
{return timeout_val;
}
});})(res,realized))
;
datascript.t55227.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){var self__ = this;
var ___$1 = this;var G__55233 = self__.res;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__55233) : cljs.core.deref.call(null,G__55233));
});})(res,realized))
;
datascript.t55227.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_55229){var self__ = this;
var _55229__$1 = this;return self__.meta55228;
});})(res,realized))
;
datascript.t55227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_55229,meta55228__$1){var self__ = this;
var _55229__$1 = this;return (new datascript.t55227(self__.realized,self__.res,self__.f,self__.future_call,meta55228__$1));
});})(res,realized))
;
datascript.__GT_t55227 = ((function (res,realized){
return (function __GT_t55227(realized__$1,res__$1,f__$1,future_call__$1,meta55228){return (new datascript.t55227(realized__$1,res__$1,f__$1,future_call__$1,meta55228));
});})(res,realized))
;
}
return (new datascript.t55227(realized,res,f,future_call,null));
});
/**
* @param {...*} var_args
*/
datascript.transact_async = (function() { 
var transact_async__delegate = function (conn,tx_data,p__55238){var vec__55240 = p__55238;var tx_meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55240,(0),null);return datascript.future_call(((function (vec__55240,tx_meta){
return (function (){return datascript.transact_BANG_.cljs$core$IFn$_invoke$arity$variadic(conn,tx_data,cljs.core.array_seq([tx_meta], 0));
});})(vec__55240,tx_meta))
);
};
var transact_async = function (conn,tx_data,var_args){
var p__55238 = null;if (arguments.length > 2) {
  p__55238 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return transact_async__delegate.call(this,conn,tx_data,p__55238);};
transact_async.cljs$lang$maxFixedArity = 2;
transact_async.cljs$lang$applyTo = (function (arglist__55241){
var conn = cljs.core.first(arglist__55241);
arglist__55241 = cljs.core.next(arglist__55241);
var tx_data = cljs.core.first(arglist__55241);
var p__55238 = cljs.core.rest(arglist__55241);
return transact_async__delegate(conn,tx_data,p__55238);
});
transact_async.cljs$core$IFn$_invoke$arity$variadic = transact_async__delegate;
return transact_async;
})()
;
datascript.rand_bits = (function rand_bits(pow){return cljs.core.rand_int(((1) << pow));
});
datascript.squuid = (function squuid(){return (new cljs.core.UUID((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__55243 = ((new Date()).getTime() / (1000));return (Math.round.cljs$core$IFn$_invoke$arity$1 ? Math.round.cljs$core$IFn$_invoke$arity$1(G__55243) : Math.round.call(null,G__55243));
})().toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((datascript.rand_bits((16)) & (4095)) | (16384)).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((datascript.rand_bits((16)) & (16383)) | (32768)).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16))))));
});
datascript.squuid_time_millis = (function squuid_time_millis(uuid){return ((function (){var G__55246 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(uuid.uuid,(0),(8));var G__55247 = (16);return parseInt(G__55246,G__55247);
})() * (1000));
});
//# sourceMappingURL=datascript.js.map