goog.provide('pathetic.core');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.Uri');
goog.require('clojure.string');
goog.require('clojure.string');
pathetic.core.separator = "/";
pathetic.core.separator_pattern = cljs.core.re_pattern(pathetic.core.separator);
/**
* Given two collections, returns a sequence containing the prefix they
* share. Example: (common-prefix [\a \b] [\a \b \c \d]) -> (\a \b)
*/
pathetic.core.common_prefix = (function common_prefix(coll1,coll2){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__48009_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__48009_SHARP_),cljs.core.second(p1__48009_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__48010_SHARP_,p2__48011_SHARP_){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__48010_SHARP_,p2__48011_SHARP_],null));
}),coll1,coll2)));
});
/**
* Returns the elements of interesting-coll that are not part of the common
* prefix with uninteresting-coll.
*/
pathetic.core.unique_suffix = (function unique_suffix(uninteresting_coll,interesting_coll){var common_parts = pathetic.core.common_prefix(uninteresting_coll,interesting_coll);return cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(common_parts),interesting_coll);
});
pathetic.core.split = (function split(path){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,pathetic.core.separator))
{return cljs.core.PersistentVector.EMPTY;
} else
{return clojure.string.split.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)),pathetic.core.separator_pattern);
}
});
/**
* Given a j.io.File or string containing a relative or absolute path,
* returns the corresponding path vector data structure described at
* the top of the file.
* 
* This function does not do any normalization or simplification. However,
* because there is more than one way to write some paths, some simplification
* might happen anyways, such as if the path starts with a (redundant) ".".
*/
pathetic.core.parse_path = (function parse_path(path){if(cljs.core.empty_QMARK_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path))))
{return null;
} else
{var path_pieces = pathetic.core.split(path);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(path_pieces)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453)], null);
} else
{var G__48013 = cljs.core.first(path_pieces);switch (G__48013) {
case "":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"root","root",-448657453),cljs.core.rest(path_pieces));

break;
case ".":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"cwd","cwd",14056523),cljs.core.rest(path_pieces));

break;
default:
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"cwd","cwd",14056523),path_pieces);

}
}
}
});
/**
* Given a seq of path elements as created by parse-path, returns a string
* containing the path represented. This function will only
* ever use unix-style path rules, so an absolute path will always start with
* the "/" separator.
* 
* NOTE: It is NOT the goal of this function to perform normalization, it just
* renders what it is given. HOWEVER, that does NOT mean that it is always true
* that (= (render-path (parse-path some-path)) some-path). That is, you may not
* render the exact same string you parsed. This is because the path syntax does
* not have exactly one way to write every path.
*/
pathetic.core.render_path = (function render_path(path_pieces){var G__48016 = (((cljs.core.first(path_pieces) instanceof cljs.core.Keyword))?cljs.core.first(path_pieces).fqn:null);switch (G__48016) {
case "cwd":
if(cljs.core.next(path_pieces))
{return clojure.string.join.cljs$core$IFn$_invoke$arity$2(pathetic.core.separator,cljs.core.rest(path_pieces));
} else
{return ".";
}

break;
case "root":
return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pathetic.core.separator)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(pathetic.core.separator,cljs.core.rest(path_pieces))));

break;
default:
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(pathetic.core.separator,path_pieces);

}
});
pathetic.core.starts_with = (function starts_with(s,prefix){var G__48020 = s;var G__48021 = prefix;return goog.string.startsWith(G__48020,G__48021);
});
/**
* Returns true if the given argument is an absolute path.
*/
pathetic.core.absolute_path_QMARK_ = (function absolute_path_QMARK_(path){return pathetic.core.starts_with(path,pathetic.core.separator);
});
/**
* Given a seq of path elements as created by parse-path, returns a new
* seq of path elements, but having gone "up" one directory. That is,
* applies a ".." component to the path.
*/
pathetic.core.up_dir = (function up_dir(path_pieces){var G__48023 = cljs.core.last(path_pieces);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),G__48023))
{return path_pieces;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("..",G__48023))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path_pieces,"..");
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cwd","cwd",14056523),G__48023))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path_pieces,"..");
} else
{return cljs.core.pop(path_pieces);

}
}
}
});
/**
* Cleans up a path so that it has no leading/trailing whitespace, and
* removes any removable same-/parent-dir references. path-pieces
* should be a path vector in the format returned by parse-path;
* return value is a vector in the same format.
*/
pathetic.core.normalize_STAR_ = (function normalize_STAR_(path_pieces){var result = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(path_pieces)], null);var remaining_path = cljs.core.rest(path_pieces);while(true){
var vec__48036 = remaining_path;var curr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48036,(0),null);var remainder = cljs.core.nthnext(vec__48036,(1));var pred__48037 = cljs.core._EQ_;var expr__48038 = curr;if(cljs.core.truth_((function (){var G__48040 = null;var G__48041 = expr__48038;return (pred__48037.cljs$core$IFn$_invoke$arity$2 ? pred__48037.cljs$core$IFn$_invoke$arity$2(G__48040,G__48041) : pred__48037.call(null,G__48040,G__48041));
})()))
{return result;
} else
{if(cljs.core.truth_((function (){var G__48042 = "";var G__48043 = expr__48038;return (pred__48037.cljs$core$IFn$_invoke$arity$2 ? pred__48037.cljs$core$IFn$_invoke$arity$2(G__48042,G__48043) : pred__48037.call(null,G__48042,G__48043));
})()))
{{
var G__48048 = result;
var G__48049 = remainder;
result = G__48048;
remaining_path = G__48049;
continue;
}
} else
{if(cljs.core.truth_((function (){var G__48044 = ".";var G__48045 = expr__48038;return (pred__48037.cljs$core$IFn$_invoke$arity$2 ? pred__48037.cljs$core$IFn$_invoke$arity$2(G__48044,G__48045) : pred__48037.call(null,G__48044,G__48045));
})()))
{{
var G__48050 = result;
var G__48051 = remainder;
result = G__48050;
remaining_path = G__48051;
continue;
}
} else
{if(cljs.core.truth_((function (){var G__48046 = "..";var G__48047 = expr__48038;return (pred__48037.cljs$core$IFn$_invoke$arity$2 ? pred__48037.cljs$core$IFn$_invoke$arity$2(G__48046,G__48047) : pred__48037.call(null,G__48046,G__48047));
})()))
{{
var G__48052 = pathetic.core.up_dir(result);
var G__48053 = remainder;
result = G__48052;
remaining_path = G__48053;
continue;
}
} else
{{
var G__48054 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,curr);
var G__48055 = remainder;
result = G__48054;
remaining_path = G__48055;
continue;
}
}
}
}
}
break;
}
});
/**
* Cleans up a path so that it has no leading/trailing whitespace, and
* removes any unremovable same-/parent-dir references. Takes the path
* argument as a string and returns its result as a string.
*/
pathetic.core.normalize = (function normalize(path){return pathetic.core.render_path(pathetic.core.normalize_STAR_(pathetic.core.parse_path(path)));
});
/**
* Takes two absolute paths or two relative paths, and returns a relative path
* that indicates the same file system location as dest-path, but
* relative to base-path. Paths should be path vectors, and the return
* value is also a path vector.
*/
pathetic.core.relativize_STAR_ = (function relativize_STAR_(base_path,dest_path){var common_path = pathetic.core.common_prefix(base_path,dest_path);var base_suffix = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(common_path),base_path);var dest_suffix = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(common_path),dest_path);if((common_path == null))
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Paths contain no common components.",cljs.core.PersistentArrayMap.EMPTY);
} else
{}
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cwd","cwd",14056523)], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(base_suffix),".."),cljs.core.array_seq([(function (){var suffix = cljs.core.PersistentVector.EMPTY;var remainder = dest_suffix;while(true){
var curr = cljs.core.first(remainder);var pred__48067 = cljs.core._EQ_;var expr__48068 = curr;if(cljs.core.truth_((function (){var G__48070 = null;var G__48071 = expr__48068;return (pred__48067.cljs$core$IFn$_invoke$arity$2 ? pred__48067.cljs$core$IFn$_invoke$arity$2(G__48070,G__48071) : pred__48067.call(null,G__48070,G__48071));
})()))
{return suffix;
} else
{if(cljs.core.truth_((function (){var G__48072 = "";var G__48073 = expr__48068;return (pred__48067.cljs$core$IFn$_invoke$arity$2 ? pred__48067.cljs$core$IFn$_invoke$arity$2(G__48072,G__48073) : pred__48067.call(null,G__48072,G__48073));
})()))
{{
var G__48078 = suffix;
var G__48079 = cljs.core.rest(remainder);
suffix = G__48078;
remainder = G__48079;
continue;
}
} else
{if(cljs.core.truth_((function (){var G__48074 = ".";var G__48075 = expr__48068;return (pred__48067.cljs$core$IFn$_invoke$arity$2 ? pred__48067.cljs$core$IFn$_invoke$arity$2(G__48074,G__48075) : pred__48067.call(null,G__48074,G__48075));
})()))
{{
var G__48080 = suffix;
var G__48081 = cljs.core.rest(remainder);
suffix = G__48080;
remainder = G__48081;
continue;
}
} else
{if(cljs.core.truth_((function (){var G__48076 = "..";var G__48077 = expr__48068;return (pred__48067.cljs$core$IFn$_invoke$arity$2 ? pred__48067.cljs$core$IFn$_invoke$arity$2(G__48076,G__48077) : pred__48067.call(null,G__48076,G__48077));
})()))
{{
var G__48082 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(suffix,"..");
var G__48083 = cljs.core.rest(remainder);
suffix = G__48082;
remainder = G__48083;
continue;
}
} else
{{
var G__48084 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(suffix,curr);
var G__48085 = cljs.core.rest(remainder);
suffix = G__48084;
remainder = G__48085;
continue;
}
}
}
}
}
break;
}
})()], 0));
});
/**
* Takes two absolute paths or two relative paths, and returns a relative path
* that indicates the same file system location as destination-path, but
* relative to base-path.
*/
pathetic.core.relativize = (function relativize(base_path,dest_path){var base_path__$1 = pathetic.core.normalize_STAR_(pathetic.core.parse_path(base_path));var dest_path__$1 = pathetic.core.normalize_STAR_(pathetic.core.parse_path(dest_path));return pathetic.core.render_path(pathetic.core.relativize_STAR_(base_path__$1,dest_path__$1));
});
/**
* Resolve the other-path against the base-path. If other-path is absolute,
* the result is other-path. If other-path is nil, the result is base-path.
* Otherwise, the result is other-path concatenated onto base-path. Does not
* normalize its output. All inputs and outputs are path vectors.
*/
pathetic.core.resolve_STAR_ = (function resolve_STAR_(base_path,other_path){if((other_path == null))
{return base_path;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),cljs.core.first(other_path)))
{return other_path;
} else
{var base_components = pathetic.core.normalize_STAR_(base_path);var other_components = cljs.core.rest(pathetic.core.normalize_STAR_(other_path));return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(base_components,other_components);

}
}
});
/**
* Resolve the other-path against the base-path. If other-path is absolute,
* the result is other-path. If other-path is nil, the result is base-path.
* Otherwise, the result is other-path concatenated onto base-path. Does not
* normalize its output. Accepts an optional third argument containing a string
* with the path separator to use.
*/
pathetic.core.resolve = (function resolve(base_path,other_path){return pathetic.core.render_path(pathetic.core.resolve_STAR_(pathetic.core.parse_path(base_path),pathetic.core.parse_path(other_path)));
});
pathetic.core.ends_with = (function ends_with(s,suffix){var G__48088 = s;var G__48089 = suffix;return goog.string.endsWith(G__48088,G__48089);
});
/**
* If the path given does not have a trailing separator, returns a new path
* that has one.
*/
pathetic.core.ensure_trailing_separator = (function ensure_trailing_separator(path){if(cljs.core.truth_(pathetic.core.ends_with(path,pathetic.core.separator)))
{return path;
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pathetic.core.separator));
}
});
pathetic.core.as_url = (function as_url(url_or_string){if((url_or_string instanceof goog.Uri))
{return url_or_string;
} else
{return (new goog.Uri(url_or_string));
}
});
/**
* Given a URL or string containing a URL, returns a vector of the three
* component strings: the stuff before the path, the path, and the stuff
* after the path. Useful for destructuring.
*/
pathetic.core.split_url_on_path = (function split_url_on_path(url_or_string){var url = pathetic.core.as_url(url_or_string);var url_string = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url));var path = url.getPath();var path_idx = url_string.lastIndexOf(path);var pre_path = url_string.substring((0),path_idx);var post_path = url_string.substring((path_idx + cljs.core.count(path)));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre_path,path,post_path], null);
});
/**
* Behaves like normalize on the path part of a URL, but takes a j.n.URL or
* string containing a URL, and returns a string containing the same URL
* instead of just a path. Everything but the path part of the URL is unchanged
* (query, anchor, protocol, etc).
*/
pathetic.core.url_normalize = (function url_normalize(url_or_string){var vec__48091 = pathetic.core.split_url_on_path(url_or_string);var pre_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48091,(0),null);var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48091,(1),null);var post_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48091,(2),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre_path)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pathetic.core.normalize(path))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(post_path));
});
/**
* Behaves like ensure-trailing-separator on the path part of a URL, but takes
* a j.n.URL or string containing a URL, and returns a string containing the
* same URL instead of just a path. Everything but the path part of the URL is
* unchanged (query, anchor, protocol, etc).
*/
pathetic.core.url_ensure_trailing_separator = (function url_ensure_trailing_separator(url_or_string){var vec__48093 = pathetic.core.split_url_on_path(url_or_string);var pre_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48093,(0),null);var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48093,(1),null);var post_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48093,(2),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre_path)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pathetic.core.ensure_trailing_separator(path))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(post_path));
});
//# sourceMappingURL=core.js.map