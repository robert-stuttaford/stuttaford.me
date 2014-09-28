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
var empty_db__delegate = function (p__54888){var vec__54890 = p__54888;var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54890,(0),null);return (new datascript.core.DB(schema__$1,datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.core.cmp_datoms_eavt),datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.core.cmp_datoms_aevt),datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.core.cmp_datoms_avet),(0),datascript.tx0));
};
var empty_db = function (var_args){
var p__54888 = null;if (arguments.length > 0) {
  p__54888 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return empty_db__delegate.call(this,p__54888);};
empty_db.cljs$lang$maxFixedArity = 0;
empty_db.cljs$lang$applyTo = (function (arglist__54891){
var p__54888 = cljs.core.seq(arglist__54891);
return empty_db__delegate(p__54888);
});
empty_db.cljs$core$IFn$_invoke$arity$variadic = empty_db__delegate;
return empty_db;
})()
;
/**
* @param {...*} var_args
*/
datascript.create_conn = (function() { 
var create_conn__delegate = function (p__54892){var vec__54898 = p__54892;var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54898,(0),null);var G__54899 = datascript.empty_db.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema__$1], 0));var G__54900 = new cljs.core.Keyword(null,"meta","meta",1499536964);var G__54901 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),(function (){var G__54902 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__54902) : cljs.core.atom.call(null,G__54902));
})()], null);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$3 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$3(G__54899,G__54900,G__54901) : cljs.core.atom.call(null,G__54899,G__54900,G__54901));
};
var create_conn = function (var_args){
var p__54892 = null;if (arguments.length > 0) {
  p__54892 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return create_conn__delegate.call(this,p__54892);};
create_conn.cljs$lang$maxFixedArity = 0;
create_conn.cljs$lang$applyTo = (function (arglist__54903){
var p__54892 = cljs.core.seq(arglist__54903);
return create_conn__delegate(p__54892);
});
create_conn.cljs$core$IFn$_invoke$arity$variadic = create_conn__delegate;
return create_conn;
})()
;
datascript.with$ = (function with$(db,tx_data){return datascript.core.transact_tx_data((new datascript.core.TxReport(db,db,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY)),tx_data);
});
datascript.db_with = (function db_with(db,tx_data){return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.with$(db,tx_data));
});
datascript._transact_BANG_ = (function _transact_BANG_(conn,tx_data){var report = (function (){var G__54908 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__54908) : cljs.core.atom.call(null,G__54908));
})();cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(conn,((function (report){
return (function (db){var r = datascript.with$(db,tx_data);var G__54909_54912 = report;var G__54910_54913 = r;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__54909_54912,G__54910_54913) : cljs.core.reset_BANG_.call(null,G__54909_54912,G__54910_54913));
return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);
var G__54911 = report;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__54911) : cljs.core.deref.call(null,G__54911));
});
datascript.transact_BANG_ = (function transact_BANG_(conn,tx_data){var report = datascript._transact_BANG_(conn,tx_data);var seq__54923_54932 = cljs.core.seq((function (){var G__54927 = new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn));return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__54927) : cljs.core.deref.call(null,G__54927));
})());var chunk__54924_54933 = null;var count__54925_54934 = (0);var i__54926_54935 = (0);while(true){
if((i__54926_54935 < count__54925_54934))
{var vec__54928_54936 = chunk__54924_54933.cljs$core$IIndexed$_nth$arity$2(null,i__54926_54935);var __54937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54928_54936,(0),null);var callback_54938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54928_54936,(1),null);var G__54929_54939 = report;(callback_54938.cljs$core$IFn$_invoke$arity$1 ? callback_54938.cljs$core$IFn$_invoke$arity$1(G__54929_54939) : callback_54938.call(null,G__54929_54939));
{
var G__54940 = seq__54923_54932;
var G__54941 = chunk__54924_54933;
var G__54942 = count__54925_54934;
var G__54943 = (i__54926_54935 + (1));
seq__54923_54932 = G__54940;
chunk__54924_54933 = G__54941;
count__54925_54934 = G__54942;
i__54926_54935 = G__54943;
continue;
}
} else
{var temp__4126__auto___54944 = cljs.core.seq(seq__54923_54932);if(temp__4126__auto___54944)
{var seq__54923_54945__$1 = temp__4126__auto___54944;if(cljs.core.chunked_seq_QMARK_(seq__54923_54945__$1))
{var c__20735__auto___54946 = cljs.core.chunk_first(seq__54923_54945__$1);{
var G__54947 = cljs.core.chunk_rest(seq__54923_54945__$1);
var G__54948 = c__20735__auto___54946;
var G__54949 = cljs.core.count(c__20735__auto___54946);
var G__54950 = (0);
seq__54923_54932 = G__54947;
chunk__54924_54933 = G__54948;
count__54925_54934 = G__54949;
i__54926_54935 = G__54950;
continue;
}
} else
{var vec__54930_54951 = cljs.core.first(seq__54923_54945__$1);var __54952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54930_54951,(0),null);var callback_54953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54930_54951,(1),null);var G__54931_54954 = report;(callback_54953.cljs$core$IFn$_invoke$arity$1 ? callback_54953.cljs$core$IFn$_invoke$arity$1(G__54931_54954) : callback_54953.call(null,G__54931_54954));
{
var G__54955 = cljs.core.next(seq__54923_54945__$1);
var G__54956 = null;
var G__54957 = (0);
var G__54958 = (0);
seq__54923_54932 = G__54955;
chunk__54924_54933 = G__54956;
count__54925_54934 = G__54957;
i__54926_54935 = G__54958;
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
datascript.components__GT_pattern = (function components__GT_pattern(index,p__54962){var vec__54965 = p__54962;var c0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54965,(0),null);var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54965,(1),null);var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54965,(2),null);var c3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54965,(3),null);var G__54966 = (((index instanceof cljs.core.Keyword))?index.fqn:null);switch (G__54966) {
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
datoms.cljs$lang$applyTo = (function (arglist__54968){
var db = cljs.core.first(arglist__54968);
arglist__54968 = cljs.core.next(arglist__54968);
var index = cljs.core.first(arglist__54968);
var cs = cljs.core.rest(arglist__54968);
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
seek_datoms.cljs$lang$applyTo = (function (arglist__54969){
var db = cljs.core.first(arglist__54969);
arglist__54969 = cljs.core.next(arglist__54969);
var index = cljs.core.first(arglist__54969);
var cs = cljs.core.rest(arglist__54969);
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
datascript.datom_from_reader = (function datom_from_reader(p__54970){var vec__54972 = p__54970;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54972,(0),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54972,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54972,(2),null);var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54972,(3),null);var added = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54972,(4),null);return (new datascript.core.Datom(e,a,v,tx,added));
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
datascript.db_from_reader = (function db_from_reader(p__54973){var map__54977 = p__54973;var map__54977__$1 = ((cljs.core.seq_QMARK_(map__54977))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54977):map__54977);var datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54977__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54977__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));var datoms__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__54977,map__54977__$1,datoms,schema__$1){
return (function (p__54978){var vec__54979 = p__54978;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54979,(0),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54979,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54979,(2),null);var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54979,(3),null);return (new datascript.core.Datom(e,a,v,tx,true));
});})(map__54977,map__54977__$1,datoms,schema__$1))
,datoms);return (new datascript.core.DB(schema__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(datascript.btset.btset_by,datascript.core.cmp_datoms_eavt,datoms__$1),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(datascript.btset.btset_by,datascript.core.cmp_datoms_aevt,datoms__$1),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(datascript.btset.btset_by,datascript.core.cmp_datoms_avet,datoms__$1),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),datoms__$1)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,datascript.tx0,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx","tx",466630418),datoms__$1))));
});
datascript.last_tempid = (function (){var G__54980 = (-1000000);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__54980) : cljs.core.atom.call(null,G__54980));
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
datascript.transact = (function transact(conn,tx_data){var res = datascript.transact_BANG_(conn,tx_data);if(typeof datascript.t54984 !== 'undefined')
{} else
{
/**
* @constructor
*/
datascript.t54984 = (function (res,tx_data,conn,transact,meta54985){
this.res = res;
this.tx_data = tx_data;
this.conn = conn;
this.transact = transact;
this.meta54985 = meta54985;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 491520;
})
datascript.t54984.cljs$lang$type = true;
datascript.t54984.cljs$lang$ctorStr = "datascript/t54984";
datascript.t54984.cljs$lang$ctorPrWriter = ((function (res){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"datascript/t54984");
});})(res))
;
datascript.t54984.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res){
return (function (_){var self__ = this;
var ___$1 = this;return true;
});})(res))
;
datascript.t54984.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res){
return (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;return self__.res;
});})(res))
;
datascript.t54984.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res){
return (function (_){var self__ = this;
var ___$1 = this;return self__.res;
});})(res))
;
datascript.t54984.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res){
return (function (_54986){var self__ = this;
var _54986__$1 = this;return self__.meta54985;
});})(res))
;
datascript.t54984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res){
return (function (_54986,meta54985__$1){var self__ = this;
var _54986__$1 = this;return (new datascript.t54984(self__.res,self__.tx_data,self__.conn,self__.transact,meta54985__$1));
});})(res))
;
datascript.__GT_t54984 = ((function (res){
return (function __GT_t54984(res__$1,tx_data__$1,conn__$1,transact__$1,meta54985){return (new datascript.t54984(res__$1,tx_data__$1,conn__$1,transact__$1,meta54985));
});})(res))
;
}
return (new datascript.t54984(res,tx_data,conn,transact,null));
});
datascript.future_call = (function future_call(f){var res = (function (){var G__55002 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__55002) : cljs.core.atom.call(null,G__55002));
})();var realized = (function (){var G__55003 = false;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__55003) : cljs.core.atom.call(null,G__55003));
})();var G__55004_55017 = ((function (res,realized){
return (function (){var G__55006_55019 = res;var G__55007_55020 = (function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})();(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__55006_55019,G__55007_55020) : cljs.core.reset_BANG_.call(null,G__55006_55019,G__55007_55020));
var G__55008 = realized;var G__55009 = true;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__55008,G__55009) : cljs.core.reset_BANG_.call(null,G__55008,G__55009));
});})(res,realized))
;var G__55005_55018 = (0);setTimeout(G__55004_55017,G__55005_55018);
if(typeof datascript.t55010 !== 'undefined')
{} else
{
/**
* @constructor
*/
datascript.t55010 = (function (realized,res,f,future_call,meta55011){
this.realized = realized;
this.res = res;
this.f = f;
this.future_call = future_call;
this.meta55011 = meta55011;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 491520;
})
datascript.t55010.cljs$lang$type = true;
datascript.t55010.cljs$lang$ctorStr = "datascript/t55010";
datascript.t55010.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__20455__auto__,writer__20456__auto__,opt__20457__auto__){return cljs.core._write(writer__20456__auto__,"datascript/t55010");
});})(res,realized))
;
datascript.t55010.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){var self__ = this;
var ___$1 = this;var G__55013 = self__.realized;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__55013) : cljs.core.deref.call(null,G__55013));
});})(res,realized))
;
datascript.t55010.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){var self__ = this;
var ___$2 = this;if(cljs.core.truth_((function (){var G__55014 = self__.realized;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__55014) : cljs.core.deref.call(null,G__55014));
})()))
{var G__55015 = self__.res;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__55015) : cljs.core.deref.call(null,G__55015));
} else
{return timeout_val;
}
});})(res,realized))
;
datascript.t55010.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){var self__ = this;
var ___$1 = this;var G__55016 = self__.res;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__55016) : cljs.core.deref.call(null,G__55016));
});})(res,realized))
;
datascript.t55010.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_55012){var self__ = this;
var _55012__$1 = this;return self__.meta55011;
});})(res,realized))
;
datascript.t55010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_55012,meta55011__$1){var self__ = this;
var _55012__$1 = this;return (new datascript.t55010(self__.realized,self__.res,self__.f,self__.future_call,meta55011__$1));
});})(res,realized))
;
datascript.__GT_t55010 = ((function (res,realized){
return (function __GT_t55010(realized__$1,res__$1,f__$1,future_call__$1,meta55011){return (new datascript.t55010(realized__$1,res__$1,f__$1,future_call__$1,meta55011));
});})(res,realized))
;
}
return (new datascript.t55010(realized,res,f,future_call,null));
});
datascript.transact_async = (function transact_async(conn,tx_data){return datascript.future_call((function (){return datascript.transact_BANG_(conn,tx_data);
}));
});
datascript.rand_bits = (function rand_bits(pow){return cljs.core.rand_int(((1) << pow));
});
datascript.squuid = (function squuid(){return (new cljs.core.UUID((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__55022 = ((new Date()).getTime() / (1000));return (Math.round.cljs$core$IFn$_invoke$arity$1 ? Math.round.cljs$core$IFn$_invoke$arity$1(G__55022) : Math.round.call(null,G__55022));
})().toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((datascript.rand_bits((16)) & (4095)) | (16384)).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((datascript.rand_bits((16)) & (16383)) | (32768)).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16))))));
});
datascript.squuid_time_millis = (function squuid_time_millis(uuid){return ((function (){var G__55025 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(uuid.uuid,(0),(8));var G__55026 = (16);return parseInt(G__55025,G__55026);
})() * (1000));
});
//# sourceMappingURL=datascript.js.map