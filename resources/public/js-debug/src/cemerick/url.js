goog.provide('cemerick.url');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.Uri');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('pathetic.core');
goog.require('pathetic.core');
cemerick.url.url_encode = (function url_encode(string){var G__30605 = string;var G__30605__$1 = (((G__30605 == null))?null:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30605)));var G__30605__$2 = (((G__30605__$1 == null))?null:(function (){var G__30606 = G__30605__$1;return encodeURIComponent(G__30606);
})());var G__30605__$3 = (((G__30605__$2 == null))?null:G__30605__$2.replace("+","%20"));return G__30605__$3;
});
cemerick.url.url_decode = (function url_decode(string){var G__30609 = string;var G__30609__$1 = (((G__30609 == null))?null:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30609)));var G__30609__$2 = (((G__30609__$1 == null))?null:(function (){var G__30610 = G__30609__$1;return decodeURIComponent(G__30610);
})());return G__30609__$2;
});
cemerick.url.map__GT_query = (function map__GT_query(m){var G__30614 = cljs.core.seq(m);var G__30614__$1 = (((G__30614 == null))?null:cljs.core.sort.cljs$core$IFn$_invoke$arity$1(G__30614));var G__30614__$2 = (((G__30614__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__30614,G__30614__$1){
return (function (p__30615){var vec__30616 = p__30615;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30616,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30616,(1),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cemerick.url.url_encode(cljs.core.name(k)),"=",cemerick.url.url_encode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))], null);
});})(G__30614,G__30614__$1))
,G__30614__$1));var G__30614__$3 = (((G__30614__$2 == null))?null:cljs.core.interpose("&",G__30614__$2));var G__30614__$4 = (((G__30614__$3 == null))?null:cljs.core.flatten(G__30614__$3));var G__30614__$5 = (((G__30614__$4 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,G__30614__$4));return G__30614__$5;
});
cemerick.url.split_param = (function split_param(param){return cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(param,/=/),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("")));
});
cemerick.url.query__GT_map = (function query__GT_map(qstr){if(cljs.core.not(clojure.string.blank_QMARK_(qstr)))
{var G__30618 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(qstr,/&/);var G__30618__$1 = (((G__30618 == null))?null:cljs.core.seq(G__30618));var G__30618__$2 = (((G__30618__$1 == null))?null:cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cemerick.url.split_param,cljs.core.array_seq([G__30618__$1], 0)));var G__30618__$3 = (((G__30618__$2 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cemerick.url.url_decode,G__30618__$2));var G__30618__$4 = (((G__30618__$3 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,G__30618__$3));return G__30618__$4;
} else
{return null;
}
});
cemerick.url.port_str = (function port_str(protocol,port){if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,port)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),port)) && (!(((port === (80))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"http")))) && (!(((port === (443))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https")))))
{return (":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(port));
} else
{return null;
}
});
cemerick.url.url_creds = (function url_creds(username,password){if(cljs.core.truth_(username))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(username)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(password));
} else
{return null;
}
});

/**
* @constructor
* @param {*} protocol
* @param {*} username
* @param {*} password
* @param {*} host
* @param {*} port
* @param {*} path
* @param {*} query
* @param {*} anchor
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cemerick.url.URL = (function (protocol,username,password,host,port,path,query,anchor,__meta,__extmap){
this.protocol = protocol;
this.username = username;
this.password = password;
this.host = host;
this.port = port;
this.path = path;
this.query = query;
this.anchor = anchor;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>8){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cemerick.url.URL.prototype.toString = (function (){var self__ = this;
var this$ = this;var creds = cemerick.url.url_creds(self__.username,self__.password);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.protocol)+"://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(creds)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(creds)?"@":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.host)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cemerick.url.port_str(self__.protocol,self__.port))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.seq(self__.query))?("?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((typeof self__.query === 'string')?self__.query:cemerick.url.map__GT_query(self__.query)))):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(self__.anchor)?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.anchor)):null)));
});
cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20516__auto__,k__20517__auto__){var self__ = this;
var this__20516__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20516__auto____$1,k__20517__auto__,null);
});
cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20518__auto__,k30620,else__20519__auto__){var self__ = this;
var this__20518__auto____$1 = this;var G__30622 = (((k30620 instanceof cljs.core.Keyword))?k30620.fqn:null);switch (G__30622) {
case "anchor":
return self__.anchor;

break;
case "query":
return self__.query;

break;
case "path":
return self__.path;

break;
case "port":
return self__.port;

break;
case "host":
return self__.host;

break;
case "password":
return self__.password;

break;
case "username":
return self__.username;

break;
case "protocol":
return self__.protocol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30620,else__20519__auto__);

}
});
cemerick.url.URL.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20530__auto__,writer__20531__auto__,opts__20532__auto__){var self__ = this;
var this__20530__auto____$1 = this;var pr_pair__20533__auto__ = ((function (this__20530__auto____$1){
return (function (keyval__20534__auto__){return cljs.core.pr_sequential_writer(writer__20531__auto__,cljs.core.pr_writer,""," ","",opts__20532__auto__,keyval__20534__auto__);
});})(this__20530__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20531__auto__,pr_pair__20533__auto__,"#cemerick.url.URL{",", ","}",opts__20532__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"protocol","protocol",652470118),self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"username","username",1605666410),self__.username],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"password","password",417022471),self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query","query",-1288509510),self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"anchor","anchor",1549638489),self__.anchor],null))], null),self__.__extmap));
});
cemerick.url.URL.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20514__auto__){var self__ = this;
var this__20514__auto____$1 = this;return self__.__meta;
});
cemerick.url.URL.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20510__auto__){var self__ = this;
var this__20510__auto____$1 = this;return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,self__.__hash));
});
cemerick.url.URL.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20520__auto__){var self__ = this;
var this__20520__auto____$1 = this;return (8 + cljs.core.count(self__.__extmap));
});
cemerick.url.URL.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20511__auto__){var self__ = this;
var this__20511__auto____$1 = this;var h__20173__auto__ = self__.__hash;if(!((h__20173__auto__ == null)))
{return h__20173__auto__;
} else
{var h__20173__auto____$1 = cljs.core.hash_imap(this__20511__auto____$1);self__.__hash = h__20173__auto____$1;
return h__20173__auto____$1;
}
});
cemerick.url.URL.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20512__auto__,other__20513__auto__){var self__ = this;
var this__20512__auto____$1 = this;if(cljs.core.truth_((function (){var and__19335__auto__ = other__20513__auto__;if(cljs.core.truth_(and__19335__auto__))
{return ((this__20512__auto____$1.constructor === other__20513__auto__.constructor)) && (cljs.core.equiv_map(this__20512__auto____$1,other__20513__auto__));
} else
{return and__19335__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cemerick.url.URL.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20525__auto__,k__20526__auto__){var self__ = this;
var this__20525__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"protocol","protocol",652470118),null,new cljs.core.Keyword(null,"password","password",417022471),null,new cljs.core.Keyword(null,"username","username",1605666410),null,new cljs.core.Keyword(null,"port","port",1534937262),null,new cljs.core.Keyword(null,"host","host",-1558485167),null,new cljs.core.Keyword(null,"anchor","anchor",1549638489),null,new cljs.core.Keyword(null,"query","query",-1288509510),null], null), null),k__20526__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20525__auto____$1),self__.__meta),k__20526__auto__);
} else
{return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20526__auto__)),null));
}
});
cemerick.url.URL.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20523__auto__,k__20524__auto__,G__30619){var self__ = this;
var this__20523__auto____$1 = this;var pred__30623 = cljs.core.keyword_identical_QMARK_;var expr__30624 = k__20524__auto__;if(cljs.core.truth_((function (){var G__30626 = new cljs.core.Keyword(null,"protocol","protocol",652470118);var G__30627 = expr__30624;return (pred__30623.cljs$core$IFn$_invoke$arity$2 ? pred__30623.cljs$core$IFn$_invoke$arity$2(G__30626,G__30627) : pred__30623.call(null,G__30626,G__30627));
})()))
{return (new cemerick.url.URL(G__30619,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__30628 = new cljs.core.Keyword(null,"username","username",1605666410);var G__30629 = expr__30624;return (pred__30623.cljs$core$IFn$_invoke$arity$2 ? pred__30623.cljs$core$IFn$_invoke$arity$2(G__30628,G__30629) : pred__30623.call(null,G__30628,G__30629));
})()))
{return (new cemerick.url.URL(self__.protocol,G__30619,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__30630 = new cljs.core.Keyword(null,"password","password",417022471);var G__30631 = expr__30624;return (pred__30623.cljs$core$IFn$_invoke$arity$2 ? pred__30623.cljs$core$IFn$_invoke$arity$2(G__30630,G__30631) : pred__30623.call(null,G__30630,G__30631));
})()))
{return (new cemerick.url.URL(self__.protocol,self__.username,G__30619,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__30632 = new cljs.core.Keyword(null,"host","host",-1558485167);var G__30633 = expr__30624;return (pred__30623.cljs$core$IFn$_invoke$arity$2 ? pred__30623.cljs$core$IFn$_invoke$arity$2(G__30632,G__30633) : pred__30623.call(null,G__30632,G__30633));
})()))
{return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,G__30619,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__30634 = new cljs.core.Keyword(null,"port","port",1534937262);var G__30635 = expr__30624;return (pred__30623.cljs$core$IFn$_invoke$arity$2 ? pred__30623.cljs$core$IFn$_invoke$arity$2(G__30634,G__30635) : pred__30623.call(null,G__30634,G__30635));
})()))
{return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,G__30619,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__30636 = new cljs.core.Keyword(null,"path","path",-188191168);var G__30637 = expr__30624;return (pred__30623.cljs$core$IFn$_invoke$arity$2 ? pred__30623.cljs$core$IFn$_invoke$arity$2(G__30636,G__30637) : pred__30623.call(null,G__30636,G__30637));
})()))
{return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,G__30619,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__30638 = new cljs.core.Keyword(null,"query","query",-1288509510);var G__30639 = expr__30624;return (pred__30623.cljs$core$IFn$_invoke$arity$2 ? pred__30623.cljs$core$IFn$_invoke$arity$2(G__30638,G__30639) : pred__30623.call(null,G__30638,G__30639));
})()))
{return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,G__30619,self__.anchor,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__30640 = new cljs.core.Keyword(null,"anchor","anchor",1549638489);var G__30641 = expr__30624;return (pred__30623.cljs$core$IFn$_invoke$arity$2 ? pred__30623.cljs$core$IFn$_invoke$arity$2(G__30640,G__30641) : pred__30623.call(null,G__30640,G__30641));
})()))
{return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,G__30619,self__.__meta,self__.__extmap,null));
} else
{return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20524__auto__,G__30619),null));
}
}
}
}
}
}
}
}
});
cemerick.url.URL.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20528__auto__){var self__ = this;
var this__20528__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"protocol","protocol",652470118),self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"username","username",1605666410),self__.username],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"password","password",417022471),self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query","query",-1288509510),self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"anchor","anchor",1549638489),self__.anchor],null))], null),self__.__extmap));
});
cemerick.url.URL.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20515__auto__,G__30619){var self__ = this;
var this__20515__auto____$1 = this;return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,G__30619,self__.__extmap,self__.__hash));
});
cemerick.url.URL.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20521__auto__,entry__20522__auto__){var self__ = this;
var this__20521__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20522__auto__))
{return cljs.core._assoc(this__20521__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20522__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20522__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20521__auto____$1,entry__20522__auto__);
}
});
cemerick.url.URL.cljs$lang$type = true;
cemerick.url.URL.cljs$lang$ctorPrSeq = (function (this__20550__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cemerick.url/URL");
});
cemerick.url.URL.cljs$lang$ctorPrWriter = (function (this__20550__auto__,writer__20551__auto__){return cljs.core._write(writer__20551__auto__,"cemerick.url/URL");
});
cemerick.url.__GT_URL = (function __GT_URL(protocol,username,password,host,port,path,query,anchor){return (new cemerick.url.URL(protocol,username,password,host,port,path,query,anchor));
});
cemerick.url.map__GT_URL = (function map__GT_URL(G__30621){return (new cemerick.url.URL(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(G__30621),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(G__30621),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(G__30621),new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(G__30621),new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(G__30621),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__30621),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(G__30621),new cljs.core.Keyword(null,"anchor","anchor",1549638489).cljs$core$IFn$_invoke$arity$1(G__30621),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30621,new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.array_seq([new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"anchor","anchor",1549638489)], 0))));
});
cemerick.url.translate_default = (function translate_default(s,old_default,new_default){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,old_default))
{return new_default;
} else
{return s;
}
});
cemerick.url.url_STAR_ = (function url_STAR_(url){var url__$1 = (new goog.Uri(url));var vec__30644 = clojure.string.split.cljs$core$IFn$_invoke$arity$3((function (){var or__19357__auto__ = url__$1.getUserInfo();if(cljs.core.truth_(or__19357__auto__))
{return or__19357__auto__;
} else
{return "";
}
})(),/:/,(2));var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30644,(0),null);var pass = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30644,(1),null);return (new cemerick.url.URL(url__$1.getScheme(),(function (){var and__19335__auto__ = cljs.core.seq(user);if(and__19335__auto__)
{return user;
} else
{return and__19335__auto__;
}
})(),(function (){var and__19335__auto__ = cljs.core.seq(pass);if(and__19335__auto__)
{return pass;
} else
{return and__19335__auto__;
}
})(),url__$1.getDomain(),cemerick.url.translate_default(url__$1.getPort(),null,(-1)),pathetic.core.normalize(url__$1.getPath()),cemerick.url.query__GT_map(cemerick.url.translate_default(url__$1.getQuery(),"",null)),cemerick.url.translate_default(url__$1.getFragment(),"",null)));
});
/**
* Returns a new URL record for the given url string(s).
* 
* The first argument must be a base url — either a complete url string, or
* a pre-existing URL record instance that will serve as the basis for the new
* URL.  Any additional arguments must be strings, which are interpreted as
* relative paths that are successively resolved against the base url's path
* to construct the final :path in the returned URL record.
* 
* This function does not perform any url-encoding.  Use `url-encode` to encode
* URL path segments as desired before passing them into this fn.
* @param {...*} var_args
*/
cemerick.url.url = (function() {
var url = null;
var url__1 = (function (url__$1){if((url__$1 instanceof cemerick.url.URL))
{return url__$1;
} else
{return cemerick.url.url_STAR_(url__$1);
}
});
var url__2 = (function() { 
var G__30646__delegate = function (base_url,path_segments){var base_url__$1 = (((base_url instanceof cemerick.url.URL))?base_url:url.cljs$core$IFn$_invoke$arity$1(base_url));return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base_url__$1,new cljs.core.Keyword(null,"path","path",-188191168),pathetic.core.normalize(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(pathetic.core.resolve,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(base_url__$1),path_segments)));
};
var G__30646 = function (base_url,var_args){
var path_segments = null;if (arguments.length > 1) {
  path_segments = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__30646__delegate.call(this,base_url,path_segments);};
G__30646.cljs$lang$maxFixedArity = 1;
G__30646.cljs$lang$applyTo = (function (arglist__30647){
var base_url = cljs.core.first(arglist__30647);
var path_segments = cljs.core.rest(arglist__30647);
return G__30646__delegate(base_url,path_segments);
});
G__30646.cljs$core$IFn$_invoke$arity$variadic = G__30646__delegate;
return G__30646;
})()
;
url = function(base_url,var_args){
var path_segments = var_args;
switch(arguments.length){
case 1:
return url__1.call(this,base_url);
default:
return url__2.cljs$core$IFn$_invoke$arity$variadic(base_url, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url.cljs$lang$maxFixedArity = 1;
url.cljs$lang$applyTo = url__2.cljs$lang$applyTo;
url.cljs$core$IFn$_invoke$arity$1 = url__1;
url.cljs$core$IFn$_invoke$arity$variadic = url__2.cljs$core$IFn$_invoke$arity$variadic;
return url;
})()
;
//# sourceMappingURL=url.js.map