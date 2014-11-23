goog.provide('cemerick.url');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.Uri');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('pathetic.core');
goog.require('pathetic.core');
cemerick.url.url_encode = (function url_encode(string){var G__67068 = string;var G__67068__$1 = (((G__67068 == null))?null:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67068)));var G__67068__$2 = (((G__67068__$1 == null))?null:(function (){var G__67069 = G__67068__$1;return encodeURIComponent(G__67069);
})());var G__67068__$3 = (((G__67068__$2 == null))?null:G__67068__$2.replace("+","%20"));return G__67068__$3;
});
cemerick.url.url_decode = (function url_decode(string){var G__67072 = string;var G__67072__$1 = (((G__67072 == null))?null:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67072)));var G__67072__$2 = (((G__67072__$1 == null))?null:(function (){var G__67073 = G__67072__$1;return decodeURIComponent(G__67073);
})());return G__67072__$2;
});
cemerick.url.map__GT_query = (function map__GT_query(m){var G__67077 = cljs.core.seq(m);var G__67077__$1 = (((G__67077 == null))?null:cljs.core.sort.cljs$core$IFn$_invoke$arity$1(G__67077));var G__67077__$2 = (((G__67077__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__67077,G__67077__$1){
return (function (p__67078){var vec__67079 = p__67078;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67079,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67079,(1),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cemerick.url.url_encode(cljs.core.name(k)),"=",cemerick.url.url_encode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))], null);
});})(G__67077,G__67077__$1))
,G__67077__$1));var G__67077__$3 = (((G__67077__$2 == null))?null:cljs.core.interpose("&",G__67077__$2));var G__67077__$4 = (((G__67077__$3 == null))?null:cljs.core.flatten(G__67077__$3));var G__67077__$5 = (((G__67077__$4 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,G__67077__$4));return G__67077__$5;
});
cemerick.url.split_param = (function split_param(param){return cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(param,/=/),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("")));
});
cemerick.url.query__GT_map = (function query__GT_map(qstr){if(cljs.core.not(clojure.string.blank_QMARK_(qstr)))
{var G__67081 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(qstr,/&/);var G__67081__$1 = (((G__67081 == null))?null:cljs.core.seq(G__67081));var G__67081__$2 = (((G__67081__$1 == null))?null:cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cemerick.url.split_param,cljs.core.array_seq([G__67081__$1], 0)));var G__67081__$3 = (((G__67081__$2 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cemerick.url.url_decode,G__67081__$2));var G__67081__$4 = (((G__67081__$3 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,G__67081__$3));return G__67081__$4;
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
cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20835__auto__,k__20836__auto__){var self__ = this;
var this__20835__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20835__auto____$1,k__20836__auto__,null);
});
cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20837__auto__,k67083,else__20838__auto__){var self__ = this;
var this__20837__auto____$1 = this;var G__67085 = (((k67083 instanceof cljs.core.Keyword))?k67083.fqn:null);switch (G__67085) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k67083,else__20838__auto__);

}
});
cemerick.url.URL.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20851__auto__,writer__20852__auto__,opts__20853__auto__){var self__ = this;
var this__20851__auto____$1 = this;var pr_pair__20854__auto__ = ((function (this__20851__auto____$1){
return (function (keyval__20855__auto__){return cljs.core.pr_sequential_writer(writer__20852__auto__,cljs.core.pr_writer,""," ","",opts__20853__auto__,keyval__20855__auto__);
});})(this__20851__auto____$1))
;return cljs.core.pr_sequential_writer(writer__20852__auto__,pr_pair__20854__auto__,"#cemerick.url.URL{",", ","}",opts__20853__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"protocol","protocol",652470118),self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"username","username",1605666410),self__.username],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"password","password",417022471),self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query","query",-1288509510),self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"anchor","anchor",1549638489),self__.anchor],null))], null),self__.__extmap));
});
cemerick.url.URL.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20833__auto__){var self__ = this;
var this__20833__auto____$1 = this;return self__.__meta;
});
cemerick.url.URL.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20828__auto__){var self__ = this;
var this__20828__auto____$1 = this;return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,self__.__hash));
});
cemerick.url.URL.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20839__auto__){var self__ = this;
var this__20839__auto____$1 = this;return (8 + cljs.core.count(self__.__extmap));
});
cemerick.url.URL.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20830__auto__){var self__ = this;
var this__20830__auto____$1 = this;var h__20502__auto__ = self__.__hash;if(!((h__20502__auto__ == null)))
{return h__20502__auto__;
} else
{var h__20502__auto____$1 = cljs.core.hash_imap(this__20830__auto____$1);self__.__hash = h__20502__auto____$1;
return h__20502__auto____$1;
}
});
cemerick.url.URL.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20831__auto__,other__20832__auto__){var self__ = this;
var this__20831__auto____$1 = this;if(cljs.core.truth_((function (){var and__19697__auto__ = other__20832__auto__;if(cljs.core.truth_(and__19697__auto__))
{return ((this__20831__auto____$1.constructor === other__20832__auto__.constructor)) && (cljs.core.equiv_map(this__20831__auto____$1,other__20832__auto__));
} else
{return and__19697__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cemerick.url.URL.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20844__auto__,k__20846__auto__){var self__ = this;
var this__20844__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"protocol","protocol",652470118),null,new cljs.core.Keyword(null,"password","password",417022471),null,new cljs.core.Keyword(null,"username","username",1605666410),null,new cljs.core.Keyword(null,"port","port",1534937262),null,new cljs.core.Keyword(null,"host","host",-1558485167),null,new cljs.core.Keyword(null,"anchor","anchor",1549638489),null,new cljs.core.Keyword(null,"query","query",-1288509510),null], null), null),k__20846__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20844__auto____$1),self__.__meta),k__20846__auto__);
} else
{return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20846__auto__)),null));
}
});
cemerick.url.URL.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20842__auto__,k__20843__auto__,G__67082){var self__ = this;
var this__20842__auto____$1 = this;var pred__67086 = cljs.core.keyword_identical_QMARK_;var expr__67087 = k__20843__auto__;if(cljs.core.truth_((function (){var G__67089 = new cljs.core.Keyword(null,"protocol","protocol",652470118);var G__67090 = expr__67087;return (pred__67086.cljs$core$IFn$_invoke$arity$2 ? pred__67086.cljs$core$IFn$_invoke$arity$2(G__67089,G__67090) : pred__67086.call(null,G__67089,G__67090));
})()))
{return (new cemerick.url.URL(G__67082,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__67091 = new cljs.core.Keyword(null,"username","username",1605666410);var G__67092 = expr__67087;return (pred__67086.cljs$core$IFn$_invoke$arity$2 ? pred__67086.cljs$core$IFn$_invoke$arity$2(G__67091,G__67092) : pred__67086.call(null,G__67091,G__67092));
})()))
{return (new cemerick.url.URL(self__.protocol,G__67082,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__67093 = new cljs.core.Keyword(null,"password","password",417022471);var G__67094 = expr__67087;return (pred__67086.cljs$core$IFn$_invoke$arity$2 ? pred__67086.cljs$core$IFn$_invoke$arity$2(G__67093,G__67094) : pred__67086.call(null,G__67093,G__67094));
})()))
{return (new cemerick.url.URL(self__.protocol,self__.username,G__67082,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__67095 = new cljs.core.Keyword(null,"host","host",-1558485167);var G__67096 = expr__67087;return (pred__67086.cljs$core$IFn$_invoke$arity$2 ? pred__67086.cljs$core$IFn$_invoke$arity$2(G__67095,G__67096) : pred__67086.call(null,G__67095,G__67096));
})()))
{return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,G__67082,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__67097 = new cljs.core.Keyword(null,"port","port",1534937262);var G__67098 = expr__67087;return (pred__67086.cljs$core$IFn$_invoke$arity$2 ? pred__67086.cljs$core$IFn$_invoke$arity$2(G__67097,G__67098) : pred__67086.call(null,G__67097,G__67098));
})()))
{return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,G__67082,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__67099 = new cljs.core.Keyword(null,"path","path",-188191168);var G__67100 = expr__67087;return (pred__67086.cljs$core$IFn$_invoke$arity$2 ? pred__67086.cljs$core$IFn$_invoke$arity$2(G__67099,G__67100) : pred__67086.call(null,G__67099,G__67100));
})()))
{return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,G__67082,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__67101 = new cljs.core.Keyword(null,"query","query",-1288509510);var G__67102 = expr__67087;return (pred__67086.cljs$core$IFn$_invoke$arity$2 ? pred__67086.cljs$core$IFn$_invoke$arity$2(G__67101,G__67102) : pred__67086.call(null,G__67101,G__67102));
})()))
{return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,G__67082,self__.anchor,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__67103 = new cljs.core.Keyword(null,"anchor","anchor",1549638489);var G__67104 = expr__67087;return (pred__67086.cljs$core$IFn$_invoke$arity$2 ? pred__67086.cljs$core$IFn$_invoke$arity$2(G__67103,G__67104) : pred__67086.call(null,G__67103,G__67104));
})()))
{return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,G__67082,self__.__meta,self__.__extmap,null));
} else
{return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20843__auto__,G__67082),null));
}
}
}
}
}
}
}
}
});
cemerick.url.URL.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20849__auto__){var self__ = this;
var this__20849__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"protocol","protocol",652470118),self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"username","username",1605666410),self__.username],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"password","password",417022471),self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query","query",-1288509510),self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"anchor","anchor",1549638489),self__.anchor],null))], null),self__.__extmap));
});
cemerick.url.URL.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20834__auto__,G__67082){var self__ = this;
var this__20834__auto____$1 = this;return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,G__67082,self__.__extmap,self__.__hash));
});
cemerick.url.URL.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20840__auto__,entry__20841__auto__){var self__ = this;
var this__20840__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__20841__auto__))
{return cljs.core._assoc(this__20840__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20841__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20841__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20840__auto____$1,entry__20841__auto__);
}
});
cemerick.url.URL.cljs$lang$type = true;
cemerick.url.URL.cljs$lang$ctorPrSeq = (function (this__20898__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cemerick.url/URL");
});
cemerick.url.URL.cljs$lang$ctorPrWriter = (function (this__20898__auto__,writer__20899__auto__){return cljs.core._write(writer__20899__auto__,"cemerick.url/URL");
});
cemerick.url.__GT_URL = (function __GT_URL(protocol,username,password,host,port,path,query,anchor){return (new cemerick.url.URL(protocol,username,password,host,port,path,query,anchor));
});
cemerick.url.map__GT_URL = (function map__GT_URL(G__67084){return (new cemerick.url.URL(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(G__67084),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(G__67084),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(G__67084),new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(G__67084),new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(G__67084),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__67084),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(G__67084),new cljs.core.Keyword(null,"anchor","anchor",1549638489).cljs$core$IFn$_invoke$arity$1(G__67084),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__67084,new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.array_seq([new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"anchor","anchor",1549638489)], 0))));
});
cemerick.url.translate_default = (function translate_default(s,old_default,new_default){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,old_default))
{return new_default;
} else
{return s;
}
});
cemerick.url.url_STAR_ = (function url_STAR_(url){var url__$1 = (new goog.Uri(url));var vec__67107 = clojure.string.split.cljs$core$IFn$_invoke$arity$3((function (){var or__19711__auto__ = url__$1.getUserInfo();if(cljs.core.truth_(or__19711__auto__))
{return or__19711__auto__;
} else
{return "";
}
})(),/:/,(2));var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67107,(0),null);var pass = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67107,(1),null);return (new cemerick.url.URL(url__$1.getScheme(),(function (){var and__19697__auto__ = cljs.core.seq(user);if(and__19697__auto__)
{return user;
} else
{return and__19697__auto__;
}
})(),(function (){var and__19697__auto__ = cljs.core.seq(pass);if(and__19697__auto__)
{return pass;
} else
{return and__19697__auto__;
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
var G__67109__delegate = function (base_url,path_segments){var base_url__$1 = (((base_url instanceof cemerick.url.URL))?base_url:url.cljs$core$IFn$_invoke$arity$1(base_url));return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base_url__$1,new cljs.core.Keyword(null,"path","path",-188191168),pathetic.core.normalize(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(pathetic.core.resolve,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(base_url__$1),path_segments)));
};
var G__67109 = function (base_url,var_args){
var path_segments = null;if (arguments.length > 1) {
  path_segments = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__67109__delegate.call(this,base_url,path_segments);};
G__67109.cljs$lang$maxFixedArity = 1;
G__67109.cljs$lang$applyTo = (function (arglist__67110){
var base_url = cljs.core.first(arglist__67110);
var path_segments = cljs.core.rest(arglist__67110);
return G__67109__delegate(base_url,path_segments);
});
G__67109.cljs$core$IFn$_invoke$arity$variadic = G__67109__delegate;
return G__67109;
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