!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    E = C.document,
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.concat,
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var f = "3.4.1",
    k = function (e, t) {
      return new k.fn.init(e, t);
    },
    p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function d(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (k.fn = k.prototype =
    {
      jquery: f,
      constructor: k,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = k.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return k.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          k.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (k.extend = k.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (k.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || k.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = k.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    k.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = v.call(t, "constructor") && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t) {
        b(e, { nonce: t && t.nonce });
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (d(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(p, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (d(Object(e))
              ? k.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (d(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g.apply([], a);
      },
      guid: 1,
      support: y,
    }),
    "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]),
    k.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var h = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      k = "sizzle" + 1 * new Date(),
      m = n.document,
      S = 0,
      r = 0,
      p = ue(),
      x = ue(),
      N = ue(),
      A = ue(),
      D = function (e, t) {
        return e === t && (l = !0), 0;
      },
      j = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      W =
        "\\[" +
        M +
        "*(" +
        I +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        M +
        "*\\]",
      $ =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      F = new RegExp(M + "+", "g"),
      B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp($),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + $),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
      ne = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n
          ? t
          : r < 0
          ? String.fromCharCode(r + 65536)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      H.apply((t = O.call(m.childNodes)), m.childNodes),
        t[m.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (
        !r &&
        ((e ? e.ownerDocument || e : m) !== C && T(e), (e = e || C), E)
      ) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !A[t + " "] &&
          (!v || !v.test(t)) &&
          (1 !== p || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && U.test(t))) {
            (s = e.getAttribute("id"))
              ? (s = s.replace(re, ie))
              : e.setAttribute("id", (s = k)),
              (o = (l = h(t)).length);
            while (o--) l[o] = "#" + s + " " + xe(l[o]);
            (c = l.join(",")), (f = (ee.test(t) && ye(e.parentNode)) || e);
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            A(t, !0);
          } finally {
            s === k && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace(B, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[k] = !0), e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : m;
        return (
          r !== C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            m !== C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (d.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = k),
                !C.getElementsByName || !C.getElementsByName(k).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  k +
                  "'></a><select id='" +
                  k +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + M + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + k + "+*").length ||
                    v.push(".#.+[+~]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    v.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  s.push("!=", $);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = K.test(a.compareDocumentPosition)),
            (y =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (D = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e === C || (e.ownerDocument === m && y(m, e))
                        ? -1
                        : t === C || (t.ownerDocument === m && y(m, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e === C
                      ? -1
                      : t === C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] === m
                    ? -1
                    : s[r] === m
                    ? 1
                    : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        ((e.ownerDocument || e) !== C && T(e),
        d.matchesSelector &&
          E &&
          !A[t + " "] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          A(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) !== C && T(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) !== C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(D),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = p[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                p(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === S &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [S, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[k] || (a[k] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [S, d]),
                          a === e)
                        )
                          break;
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return a[k]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace(B, "$1"));
            return s[k]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [S, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[k] || (e[k] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === S && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return (
        v && !v[k] && (v = Ce(v)),
        y && !y[k] && (y = Ce(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f;
          if ((g && g(f, p, n, r), v)) {
            (i = Te(p, u)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                y(null, (p = []), i, r);
              }
              o = p.length;
              while (o--)
                (a = p[o]) &&
                  -1 < (i = y ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace(B, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace(B, " ") }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            x,
            r,
            i = [],
            o = [],
            a = N[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
            (a = N(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (x = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG("*", i)),
                  h = (S += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t === C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument === C || (T(o), (n = !E));
                    while ((s = v[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (S = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = y[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + y.length &&
                      se.uniqueSort(r);
                }
                return i && ((S = h), (w = p)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ye(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = k.split("").sort(D).join("") === k),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(C);
  (k.find = h),
    (k.expr = h.selectors),
    (k.expr[":"] = k.expr.pseudos),
    (k.uniqueSort = k.unique = h.uniqueSort),
    (k.text = h.getText),
    (k.isXMLDoc = h.isXML),
    (k.contains = h.contains),
    (k.escapeSelector = h.escape);
  var T = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && k(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    S = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    N = k.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, n, r) {
    return m(n)
      ? k.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? k.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? k.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : k.filter(n, e, r);
  }
  (k.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? k.find.matchesSelector(r, e)
          ? [r]
          : []
        : k.find.matches(
            e,
            k.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    k.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            k(e).filter(function () {
              for (t = 0; t < r; t++) if (k.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
        return 1 < r ? k.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1)
          .length;
      },
    });
  var q,
    L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((k.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || q), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : L.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof k ? t[0] : t),
          k.merge(
            this,
            k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
          ),
          D.test(r[1]) && k.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(k)
      : k.makeArray(e, this);
  }).prototype = k.fn),
    (q = k(E));
  var H = /^(?:parents|prev(?:Until|All))/,
    O = { children: !0, contents: !0, next: !0, prev: !0 };
  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  k.fn.extend({
    has: function (e) {
      var t = k(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && k(e);
      if (!N.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && k.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? k.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(k(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    k.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return T(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return T(e, "parentNode", n);
        },
        next: function (e) {
          return P(e, "nextSibling");
        },
        prev: function (e) {
          return P(e, "previousSibling");
        },
        nextAll: function (e) {
          return T(e, "nextSibling");
        },
        prevAll: function (e) {
          return T(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return T(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return T(e, "previousSibling", n);
        },
        siblings: function (e) {
          return S((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return S(e.firstChild);
        },
        contents: function (e) {
          return "undefined" != typeof e.contentDocument
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              k.merge([], e.childNodes));
        },
      },
      function (r, i) {
        k.fn[r] = function (e, t) {
          var n = k.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = k.filter(t, n)),
            1 < this.length &&
              (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var R = /[^\x20\t\r\n\f]+/g;
  function M(e) {
    return e;
  }
  function I(e) {
    throw e;
  }
  function W(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (k.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          k.each(e.match(R) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : k.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                k.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            k.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = k.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < k.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    k.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              k.Callbacks("memory"),
              k.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              k.Callbacks("once memory"),
              k.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              k.Callbacks("once memory"),
              k.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return k
                .Deferred(function (r) {
                  k.each(o, function (e, t) {
                    var n = m(i[t[4]]) && i[t[4]];
                    s[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && m(e.promise)
                        ? e
                            .promise()
                            .progress(r.notify)
                            .done(r.resolve)
                            .fail(r.reject)
                        : r[t[0] + "With"](this, n ? [e] : arguments);
                    });
                  }),
                    (i = null);
                })
                .promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, M, s), l(u, o, I, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, M, s),
                                  l(u, o, I, s),
                                  l(u, o, M, o.notifyWith)
                                ))
                            : (a !== M && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            k.Deferred.exceptionHook &&
                              k.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== I && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (k.Deferred.getStackHook &&
                        (t.stackTrace = k.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return k
                .Deferred(function (e) {
                  o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)),
                    o[1][3].add(l(0, e, m(t) ? t : M)),
                    o[2][3].add(l(0, e, m(n) ? n : I));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? k.extend(e, a) : a;
            },
          },
          s = {};
        return (
          k.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = k.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (W(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) W(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (k.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      $.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (k.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = k.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B),
      C.removeEventListener("load", B),
      k.ready();
  }
  (k.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        k.readyException(e);
      }),
      this
    );
  }),
    k.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --k.readyWait : k.isReady) ||
          ((k.isReady = !0) !== e && 0 < --k.readyWait) ||
          F.resolveWith(E, [k]);
      },
    }),
    (k.ready.then = F.then),
    "complete" === E.readyState ||
    ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(k.ready)
      : (E.addEventListener("DOMContentLoaded", B),
        C.addEventListener("load", B));
  var _ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in ((i = !0), n)) _(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(k(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    z = /^-ms-/,
    U = /-([a-z])/g;
  function X(e, t) {
    return t.toUpperCase();
  }
  function V(e) {
    return e.replace(z, "ms-").replace(U, X);
  }
  var G = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Y() {
    this.expando = k.expando + Y.uid++;
  }
  (Y.uid = 1),
    (Y.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            G(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[V(t)] = n;
        else for (r in t) i[V(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][V(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(V)
              : (t = V(t)) in r
              ? [t]
              : t.match(R) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || k.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !k.isEmptyObject(t);
      },
    });
  var Q = new Y(),
    J = new Y(),
    K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Z = /[A-Z]/g;
  function ee(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(Z, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : K.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        J.set(e, t, n);
      } else n = void 0;
    return n;
  }
  k.extend({
    hasData: function (e) {
      return J.hasData(e) || Q.hasData(e);
    },
    data: function (e, t, n) {
      return J.access(e, t, n);
    },
    removeData: function (e, t) {
      J.remove(e, t);
    },
    _data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    _removeData: function (e, t) {
      Q.remove(e, t);
    },
  }),
    k.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = J.get(o)), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = V(r.slice(5))), ee(o, r, i[r]));
            Q.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              J.set(this, n);
            })
          : _(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = J.get(o, n))
                    ? t
                    : void 0 !== (t = ee(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  J.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          J.remove(this, e);
        });
      },
    }),
    k.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Q.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Q.access(e, t, k.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = k.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = k._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                k.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Q.get(e, n) ||
          Q.access(e, n, {
            empty: k.Callbacks("once memory").add(function () {
              Q.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    k.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? k.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          k.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = k.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Q.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
    re = ["Top", "Right", "Bottom", "Left"],
    ie = E.documentElement,
    oe = function (e) {
      return k.contains(e.ownerDocument, e);
    },
    ae = { composed: !0 };
  ie.getRootNode &&
    (oe = function (e) {
      return (
        k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
      );
    });
  var se = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display && oe(e) && "none" === k.css(e, "display"))
      );
    },
    ue = function (e, t, n, r) {
      var i,
        o,
        a = {};
      for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
      for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
      return i;
    };
  function le(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return k.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (k.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (k.cssNumber[t] || ("px" !== l && +u)) &&
        ne.exec(k.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        k.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), k.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ce = {};
  function fe(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Q.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              se(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ce[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = k.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ce[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Q.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  k.fn.extend({
    show: function () {
      return fe(this, !0);
    },
    hide: function () {
      return fe(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            se(this) ? k(this).show() : k(this).hide();
          });
    },
  });
  var pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i,
    ge = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  function ve(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && A(e, t)) ? k.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
  }
  (ge.optgroup = ge.option),
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td);
  var me,
    xe,
    be = /<|&#?\w+;/;
  function we(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);
        else if (be.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          k.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < k.inArray(o, r)) i && i.push(o);
      else if (
        ((l = oe(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  (me = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (xe = E.createElement("input")).setAttribute("type", "radio"),
    xe.setAttribute("checked", "checked"),
    xe.setAttribute("name", "t"),
    me.appendChild(xe),
    (y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (me.innerHTML = "<textarea>x</textarea>"),
    (y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue);
  var Te = /^key/,
    Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Ee = /^([^.]*)(?:\.(.+)|)/;
  function ke() {
    return !0;
  }
  function Se() {
    return !1;
  }
  function Ne(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Ae(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Ae(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Se;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return k().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = k.guid++))),
      e.each(function () {
        k.event.add(this, t, i, r, n);
      })
    );
  }
  function De(e, i, o) {
    o
      ? (Q.set(e, i, !1),
        k.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Q.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (k.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Q.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n.value
                );
            } else
              r.length &&
                (Q.set(this, i, {
                  value: k.event.trigger(
                    k.extend(r[0], k.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Q.get(e, i) && k.event.add(e, i, ke);
  }
  (k.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Q.get(t);
      if (v) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && k.find.matchesSelector(ie, i),
          n.guid || (n.guid = k.guid++),
          (u = v.events) || (u = v.events = {}),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof k && k.event.triggered !== e.type
                  ? k.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(R) || [""]).length);
        while (l--)
          (d = g = (s = Ee.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = k.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = k.event.special[d] || {}),
              (c = k.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && k.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (k.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Q.hasData(e) && Q.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(R) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = Ee.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = k.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                k.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) k.event.remove(e, d + t[l], n, r, !0);
        k.isEmptyObject(u) && Q.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = k.event.fix(e),
        u = new Array(arguments.length),
        l = (Q.get(this, "events") || {})[s.type] || [],
        c = k.event.special[s.type] || {};
      for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
      if (
        ((s.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, s))
      ) {
        (a = k.event.handlers.call(this, s, l)), (t = 0);
        while ((i = a[t++]) && !s.isPropagationStopped()) {
          (s.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped())
            (s.rnamespace &&
              !1 !== o.namespace &&
              !s.rnamespace.test(o.namespace)) ||
              ((s.handleObj = o),
              (s.data = o.data),
              void 0 !==
                (r = (
                  (k.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, u)) &&
                !1 === (s.result = r) &&
                (s.preventDefault(), s.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < k(i, this).index(l)
                  : k.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(k.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[k.expando] ? e : new k.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Q.get(t, "click")) ||
            A(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (k.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (k.Event = function (e, t) {
      if (!(this instanceof k.Event)) return new k.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? ke
              : Se),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && k.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[k.expando] = !0);
    }),
    (k.Event.prototype = {
      constructor: k.Event,
      isDefaultPrevented: Se,
      isPropagationStopped: Se,
      isImmediatePropagationStopped: Se,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = ke),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = ke),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = ke),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    k.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && Te.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && Ce.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      k.event.addProp
    ),
    k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      k.event.special[e] = {
        setup: function () {
          return De(this, e, Ne), !1;
        },
        trigger: function () {
          return De(this, e), !0;
        },
        delegateType: t,
      };
    }),
    k.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        k.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || k.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    k.fn.extend({
      on: function (e, t, n, r) {
        return Ae(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Ae(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            k(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Se),
          this.each(function () {
            k.event.remove(this, e, n, t);
          })
        );
      },
    });
  var je =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    qe = /<script|<style|<link/i,
    Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
    He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Oe(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        k(e).children("tbody")[0]) ||
      e
    );
  }
  function Pe(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Re(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Me(e, t) {
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (
        Q.hasData(e) &&
        ((o = Q.access(e)), (a = Q.set(t, o)), (l = o.events))
      )
        for (i in (delete a.handle, (a.events = {}), l))
          for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
      J.hasData(e) && ((s = J.access(e)), (u = k.extend({}, s)), J.set(t, u));
    }
  }
  function Ie(n, r, i, o) {
    r = g.apply([], r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && "string" == typeof d && !y.checkClone && Le.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = k.clone(u, !0, !0)), s && k.merge(a, ve(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || "") &&
              !Q.access(u, "globalEval") &&
              k.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? k._evalUrl &&
                  !u.noModule &&
                  k._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce"),
                  })
                : b(u.textContent.replace(He, ""), u, l));
    }
    return n;
  }
  function We(e, t, n) {
    for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || k.cleanData(ve(r)),
        r.parentNode &&
          (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  k.extend({
    htmlPrefilter: function (e) {
      return e.replace(je, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = oe(e);
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          k.isXMLDoc(e)
        )
      )
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
            Me(o[r], a[r]);
        else Me(e, c);
      return (
        0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (G(n)) {
          if ((t = n[Q.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
            n[Q.expando] = void 0;
          }
          n[J.expando] && (n[J.expando] = void 0);
        }
    },
  }),
    k.fn.extend({
      detach: function (e) {
        return We(this, e, !0);
      },
      remove: function (e) {
        return We(this, e);
      },
      text: function (e) {
        return _(
          this,
          function (e) {
            return void 0 === e
              ? k.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Ie(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Oe(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Ie(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Oe(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Ie(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Ie(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (k.cleanData(ve(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return k.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return _(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !qe.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = k.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (k.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return Ie(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            k.inArray(this, n) < 0 &&
              (k.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    k.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        k.fn[e] = function (e) {
          for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              k(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
    Fe = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    Be = new RegExp(re.join("|"), "i");
  function _e(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Fe(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          oe(e) ||
          (a = k.style(e, t)),
        !y.pixelBoxStyles() &&
          $e.test(a) &&
          Be.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function ze(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (u) {
        (s.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (u.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          ie.appendChild(s).appendChild(u);
        var e = C.getComputedStyle(u);
        (n = "1%" !== e.top),
          (a = 12 === t(e.marginLeft)),
          (u.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (u.style.position = "absolute"),
          (i = 12 === t(u.offsetWidth / 3)),
          ie.removeChild(s),
          (u = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s = E.createElement("div"),
      u = E.createElement("div");
    u.style &&
      ((u.style.backgroundClip = "content-box"),
      (u.cloneNode(!0).style.backgroundClip = ""),
      (y.clearCloneStyle = "content-box" === u.style.backgroundClip),
      k.extend(y, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), a;
        },
        scrollboxSize: function () {
          return e(), i;
        },
      }));
  })();
  var Ue = ["Webkit", "Moz", "ms"],
    Xe = E.createElement("div").style,
    Ve = {};
  function Ge(e) {
    var t = k.cssProps[e] || Ve[e];
    return (
      t ||
      (e in Xe
        ? e
        : (Ve[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Ue.length;
              while (n--) if ((e = Ue[n] + t) in Xe) return e;
            })(e) || e))
    );
  }
  var Ye = /^(none|table(?!-c[ea]).+)/,
    Qe = /^--/,
    Je = { position: "absolute", visibility: "hidden", display: "block" },
    Ke = { letterSpacing: "0", fontWeight: "400" };
  function Ze(e, t, n) {
    var r = ne.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function et(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += k.css(e, n + re[a], !0, i)),
        r
          ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)),
            "margin" !== n &&
              (u -= k.css(e, "border" + re[a] + "Width", !0, i)))
          : ((u += k.css(e, "padding" + re[a], !0, i)),
            "padding" !== n
              ? (u += k.css(e, "border" + re[a] + "Width", !0, i))
              : (s += k.css(e, "border" + re[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function tt(e, t, n) {
    var r = Fe(e),
      i =
        (!y.boxSizingReliable() || n) &&
        "border-box" === k.css(e, "boxSizing", !1, r),
      o = i,
      a = _e(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if ($e.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === k.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === k.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        et(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function nt(e, t, n, r, i) {
    return new nt.prototype.init(e, t, n, r, i);
  }
  k.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = _e(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = V(t),
          u = Qe.test(t),
          l = e.style;
        if (
          (u || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = ne.exec(n)) &&
          i[1] &&
          ((n = le(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (k.cssNumber[s] ? "" : "px")),
            y.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = V(t);
      return (
        Qe.test(t) || (t = Ge(s)),
        (a = k.cssHooks[t] || k.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = _e(e, t, r)),
        "normal" === i && t in Ke && (i = Ke[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    k.each(["height", "width"], function (e, u) {
      k.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ye.test(k.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? tt(e, u, n)
              : ue(e, Je, function () {
                  return tt(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Fe(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
            s = n ? et(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  et(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = ne.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = k.css(e, u))),
            Ze(0, t, s)
          );
        },
      };
    }),
    (k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(_e(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              ue(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    k.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (k.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (k.cssHooks[i + o].set = Ze);
    }),
    k.fn.extend({
      css: function (e, t) {
        return _(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Fe(e), i = t.length; a < i; a++)
                o[t[a]] = k.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((k.Tween = nt).prototype = {
      constructor: nt,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || k.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (k.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = nt.propHooks[this.prop];
        return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = nt.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                k.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : nt.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = nt.prototype),
    ((nt.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = k.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          k.fx.step[e.prop]
            ? k.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : k.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = nt.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (k.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (k.fx = nt.prototype.init),
    (k.fx.step = {});
  var rt,
    it,
    ot,
    at,
    st = /^(?:toggle|show|hide)$/,
    ut = /queueHooks$/;
  function lt() {
    it &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(lt)
        : C.setTimeout(lt, k.fx.interval),
      k.fx.tick());
  }
  function ct() {
    return (
      C.setTimeout(function () {
        rt = void 0;
      }),
      (rt = Date.now())
    );
  }
  function ft(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = re[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function pt(e, t, n) {
    for (
      var r,
        i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function dt(o, e, t) {
    var n,
      a,
      r = 0,
      i = dt.prefilters.length,
      s = k.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = rt || ct(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: k.extend({}, e),
        opts: k.extend(!0, { specialEasing: {}, easing: k.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: rt || ct(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = k.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = V(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = k.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = dt.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      k.map(c, pt, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      k.fx.timer(k.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (k.Animation = k.extend(dt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return le(n.elem, e, ne.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(R));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (dt.tweeners[n] = dt.tweeners[n] || []),
          dt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && se(e),
          v = Q.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = k._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), st.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || k.style(e, r);
          }
        if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Q.get(e, "display")),
            "none" === (c = k.css(e, "display")) &&
              (l
                ? (c = l)
                : (fe([e], !0),
                  (l = e.style.display || l),
                  (c = k.css(e, "display")),
                  fe([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === k.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = Q.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && fe([e], !0),
              p.done(function () {
                for (r in (g || fe([e]), Q.remove(e, "fxshow"), d))
                  k.style(e, r, d[r]);
              })),
              (u = pt(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
    },
  })),
    (k.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? k.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        k.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in k.fx.speeds
              ? (r.duration = k.fx.speeds[r.duration])
              : (r.duration = k.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
        }),
        r
      );
    }),
    k.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(se)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = k.isEmptyObject(t),
          o = k.speed(e, n, r),
          a = function () {
            var e = dt(this, k.extend({}, t), o);
            (i || Q.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && !1 !== i && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = k.timers,
              r = Q.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && ut.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || k.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Q.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = k.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                k.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    k.each(["toggle", "show", "hide"], function (e, r) {
      var i = k.fn[r];
      k.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(ft(r, !0), e, t, n);
      };
    }),
    k.each(
      {
        slideDown: ft("show"),
        slideUp: ft("hide"),
        slideToggle: ft("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        k.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (k.timers = []),
    (k.fx.tick = function () {
      var e,
        t = 0,
        n = k.timers;
      for (rt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || k.fx.stop(), (rt = void 0);
    }),
    (k.fx.timer = function (e) {
      k.timers.push(e), k.fx.start();
    }),
    (k.fx.interval = 13),
    (k.fx.start = function () {
      it || ((it = !0), lt());
    }),
    (k.fx.stop = function () {
      it = null;
    }),
    (k.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (k.fn.delay = function (r, e) {
      return (
        (r = (k.fx && k.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (ot = E.createElement("input")),
    (at = E.createElement("select").appendChild(E.createElement("option"))),
    (ot.type = "checkbox"),
    (y.checkOn = "" !== ot.value),
    (y.optSelected = at.selected),
    ((ot = E.createElement("input")).value = "t"),
    (ot.type = "radio"),
    (y.radioValue = "t" === ot.value);
  var ht,
    gt = k.expr.attrHandle;
  k.fn.extend({
    attr: function (e, t) {
      return _(this, k.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        k.removeAttr(this, e);
      });
    },
  }),
    k.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? k.prop(e, t, n)
            : ((1 === o && k.isXMLDoc(e)) ||
                (i =
                  k.attrHooks[t.toLowerCase()] ||
                  (k.expr.match.bool.test(t) ? ht : void 0)),
              void 0 !== n
                ? null === n
                  ? void k.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = k.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(R);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (ht = {
      set: function (e, t, n) {
        return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = gt[t] || k.find.attr;
      gt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = gt[o]),
            (gt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (gt[o] = i)),
          r
        );
      };
    });

  function mt(e) {
    return (e.match(R) || []).join(" ");
  }
  function xt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function bt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(R)) || [];
  }
  k.fn.extend({
    prop: function (e, t) {
      return _(this, k.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[k.propFix[e] || e];
      });
    },
  }),
    k.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && k.isXMLDoc(e)) ||
              ((t = k.propFix[t] || t), (i = k.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = k.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : vt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    y.optSelected ||
      (k.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    k.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        k.propFix[this.toLowerCase()] = this;
      }
    ),
    k.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            k(this).addClass(t.call(this, e, xt(this)));
          });
        if ((e = bt(t)).length)
          while ((n = this[u++]))
            if (((i = xt(n)), (r = 1 === n.nodeType && " " + mt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = mt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            k(this).removeClass(t.call(this, e, xt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = bt(t)).length)
          while ((n = this[u++]))
            if (((i = xt(n)), (r = 1 === n.nodeType && " " + mt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                while (-1 < r.indexOf(" " + o + " "))
                  r = r.replace(" " + o + " ", " ");
              i !== (s = mt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = "string" === o || Array.isArray(i);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
          ? this.each(function (e) {
              k(this).toggleClass(i.call(this, e, xt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a) {
                (t = 0), (n = k(this)), (r = bt(i));
                while ((e = r[t++]))
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              } else (void 0 !== i && "boolean" !== o) || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var wt = /\r/g;
  k.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, k(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = k.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                k.valHooks[this.type] ||
                k.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(wt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    k.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = k.find.attr(e, "value");
            return null != t ? t : mt(k.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = k(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = k.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    k.each(["radio", "checkbox"], function () {
      (k.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < k.inArray(k(e).val(), t));
        },
      }),
        y.checkOn ||
          (k.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (y.focusin = "onfocusin" in C);
  var Tt = /^(?:focusinfocus|focusoutblur)$/,
    Ct = function (e) {
      e.stopPropagation();
    };
  k.extend(k.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !Tt.test(d + k.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[k.expando]
            ? e
            : new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : k.makeArray(t, [e])),
          (c = k.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) &&
              l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              G(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !G(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (k.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, Ct),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, Ct),
              (k.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = k.extend(new k.Event(), n, { type: e, isSimulated: !0 });
      k.event.trigger(r, null, t);
    },
  }),
    k.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          k.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return k.event.trigger(e, t, n, !0);
      },
    }),
    y.focusin ||
      k.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          k.event.simulate(r, e.target, k.event.fix(e));
        };
        k.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this,
              t = Q.access(e, r);
            t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this,
              t = Q.access(e, r) - 1;
            t
              ? Q.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Q.remove(e, r));
          },
        };
      });
  var Et = C.location,
    kt = Date.now(),
    St = /\?/;
  k.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }
    return (
      (t && !t.getElementsByTagName("parsererror").length) ||
        k.error("Invalid XML: " + e),
      t
    );
  };
  var Nt = /\[\]$/,
    At = /\r?\n/g,
    Dt = /^(?:submit|button|image|reset|file)$/i,
    jt = /^(?:input|select|textarea|keygen)/i;
  function qt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      k.each(e, function (e, t) {
        r || Nt.test(n)
          ? i(n, t)
          : qt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== w(e)) i(n, e);
    else for (t in e) qt(n + "[" + t + "]", e[t], r, i);
  }
  (k.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !k.isPlainObject(e)))
      k.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) qt(n, e[n], t, i);
    return r.join("&");
  }),
    k.fn.extend({
      serialize: function () {
        return k.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = k.prop(this, "elements");
          return e ? k.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !k(this).is(":disabled") &&
              jt.test(this.nodeName) &&
              !Dt.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = k(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? k.map(n, function (e) {
                  return { name: t.name, value: e.replace(At, "\r\n") };
                })
              : { name: t.name, value: n.replace(At, "\r\n") };
          })
          .get();
      },
    });
  var Lt = /%20/g,
    Ht = /#.*$/,
    Ot = /([?&])_=[^&]*/,
    Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Rt = /^(?:GET|HEAD)$/,
    Mt = /^\/\//,
    It = {},
    Wt = {},
    $t = "*/".concat("*"),
    Ft = E.createElement("a");
  function Bt(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(R) || [];
      if (m(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function _t(t, i, o, a) {
    var s = {},
      u = t === Wt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        k.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function zt(e, t) {
    var n,
      r,
      i = k.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && k.extend(!0, e, r), e;
  }
  (Ft.href = Et.href),
    k.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Et.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Et.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": $t,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": k.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e);
      },
      ajaxPrefilter: Bt(It),
      ajaxTransport: Bt(Wt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = k.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
          x = k.Deferred(),
          b = k.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Pt.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || Et.href) + "").replace(
            Mt,
            Et.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""]),
          null == v.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = k.param(v.data, v.traditional)),
          _t(It, v, t, T),
          h)
        )
          return T;
        for (i in ((g = k.event && v.global) &&
          0 == k.active++ &&
          k.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Rt.test(v.type)),
        (f = v.url.replace(Ht, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(Lt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (St.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(Ot, "$1")),
              (o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (k.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", k.lastModified[f]),
          k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = _t(Wt, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (k.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (k.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --k.active || k.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return k.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return k.get(e, void 0, t, "script");
      },
    }),
    k.each(["get", "post"], function (e, i) {
      k[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          k.ajax(
            k.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              k.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (k._evalUrl = function (e, t) {
      return k.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          k.globalEval(e, t);
        },
      });
    }),
    k.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = k(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              k(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = k(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          k(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              k(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (k.expr.pseudos.hidden = function (e) {
      return !k.expr.pseudos.visible(e);
    }),
    (k.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (k.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var Ut = { 0: 200, 1223: 204 },
    Xt = k.ajaxSettings.xhr();
  (y.cors = !!Xt && "withCredentials" in Xt),
    (y.ajax = Xt = !!Xt),
    k.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || (Xt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        Ut[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    k.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    k.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return k.globalEval(e), e;
        },
      },
    }),
    k.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    k.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = k("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Vt,
    Gt = [],
    Yt = /(=)\?(?=&|$)|\?\?/;
  k.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Gt.pop() || k.expando + "_" + kt++;
      return (this[e] = !0), e;
    },
  }),
    k.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Yt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Yt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Yt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || k.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? k(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Gt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (y.createHTMLDocument =
      (((Vt = E.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Vt.childNodes.length)),
    (k.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (y.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = D.exec(e))
            ? [t.createElement(i[1])]
            : ((i = we([e], t, o)),
              o && o.length && k(o).remove(),
              k.merge([], i.childNodes)));
      var r, i, o;
    }),
    (k.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = mt(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          k
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    k.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        k.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (k.expr.pseudos.animated = function (t) {
      return k.grep(k.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (k.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = k.css(e, "position"),
          c = k(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = k.css(e, "top")),
          (u = k.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, k.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    k.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                k.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === k.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0)),
              (i.left += k.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - k.css(r, "marginTop", !0),
            left: t.left - i.left - k.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === k.css(e, "position")) e = e.offsetParent;
          return e || ie;
        });
      },
    }),
    k.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function (e) {
          return _(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    k.each(["top", "left"], function (e, n) {
      k.cssHooks[n] = ze(y.pixelPosition, function (e, t) {
        if (t)
          return (t = _e(e, n)), $e.test(t) ? k(e).position()[n] + "px" : t;
      });
    }),
    k.each({ Height: "height", Width: "width" }, function (a, s) {
      k.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          k.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return _(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? k.css(e, t, i)
                  : k.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    k.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        k.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    ),
    k.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    k.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (k.proxy = function (e, t) {
      var n, r, i;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
        return (
          (r = s.call(arguments, 2)),
          ((i = function () {
            return e.apply(t || this, r.concat(s.call(arguments)));
          }).guid = e.guid =
            e.guid || k.guid++),
          i
        );
    }),
    (k.holdReady = function (e) {
      e ? k.readyWait++ : k.ready(!0);
    }),
    (k.isArray = Array.isArray),
    (k.parseJSON = JSON.parse),
    (k.nodeName = A),
    (k.isFunction = m),
    (k.isWindow = x),
    (k.camelCase = V),
    (k.type = w),
    (k.now = Date.now),
    (k.isNumeric = function (e) {
      var t = k.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return k;
      });
  var Qt = C.jQuery,
    Jt = C.$;
  return (
    (k.noConflict = function (e) {
      return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k;
    }),
    e || (C.jQuery = C.$ = k),
    k
  );
});

/*!
 * parallax.js v1.5.0 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 * 
 * The MIT License (MIT)

Copyright (c) 2016 PixelCog Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

 */
!(function (t, i, e, s) {
  function o(i, e) {
    var h = this;
    "object" == typeof e &&
      (delete e.refresh, delete e.render, t.extend(this, e)),
      (this.$element = t(i)),
      !this.imageSrc &&
        this.$element.is("img") &&
        (this.imageSrc = this.$element.attr("src"));
    var r = (this.position + "").toLowerCase().match(/\S+/g) || [];
    if (
      (r.length < 1 && r.push("center"),
      1 == r.length && r.push(r[0]),
      ("top" != r[0] &&
        "bottom" != r[0] &&
        "left" != r[1] &&
        "right" != r[1]) ||
        (r = [r[1], r[0]]),
      this.positionX !== s && (r[0] = this.positionX.toLowerCase()),
      this.positionY !== s && (r[1] = this.positionY.toLowerCase()),
      (h.positionX = r[0]),
      (h.positionY = r[1]),
      "left" != this.positionX &&
        "right" != this.positionX &&
        (isNaN(parseInt(this.positionX))
          ? (this.positionX = "center")
          : (this.positionX = parseInt(this.positionX))),
      "top" != this.positionY &&
        "bottom" != this.positionY &&
        (isNaN(parseInt(this.positionY))
          ? (this.positionY = "center")
          : (this.positionY = parseInt(this.positionY))),
      (this.position =
        this.positionX +
        (isNaN(this.positionX) ? "" : "px") +
        " " +
        this.positionY +
        (isNaN(this.positionY) ? "" : "px")),
      navigator.userAgent.match(/(iPod|iPhone|iPad)/))
    )
      return (
        this.imageSrc &&
          this.iosFix &&
          !this.$element.is("img") &&
          this.$element.css({
            backgroundImage: "url(" + this.imageSrc + ")",
            backgroundSize: "cover",
            backgroundPosition: this.position,
          }),
        this
      );
    if (navigator.userAgent.match(/(Android)/))
      return (
        this.imageSrc &&
          this.androidFix &&
          !this.$element.is("img") &&
          this.$element.css({
            backgroundImage: "url(" + this.imageSrc + ")",
            backgroundSize: "cover",
            backgroundPosition: this.position,
          }),
        this
      );
    this.$mirror = t("<div />").prependTo(this.mirrorContainer);
    var a = this.$element.find(">.parallax-slider"),
      n = !1;
    0 == a.length
      ? (this.$slider = t("<img />").prependTo(this.$mirror))
      : ((this.$slider = a.prependTo(this.$mirror)), (n = !0)),
      this.$mirror.addClass("parallax-mirror").css({
        visibility: "hidden",
        zIndex: this.zIndex,
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "hidden",
      }),
      this.$slider.addClass("parallax-slider").one("load", function () {
        (h.naturalHeight && h.naturalWidth) ||
          ((h.naturalHeight = this.naturalHeight || this.height || 1),
          (h.naturalWidth = this.naturalWidth || this.width || 1)),
          (h.aspectRatio = h.naturalWidth / h.naturalHeight),
          o.isSetup || o.setup(),
          o.sliders.push(h),
          (o.isFresh = !1),
          o.requestRender();
      }),
      n || (this.$slider[0].src = this.imageSrc),
      ((this.naturalHeight && this.naturalWidth) ||
        this.$slider[0].complete ||
        a.length > 0) &&
        this.$slider.trigger("load");
  }
  !(function () {
    for (
      var t = 0, e = ["ms", "moz", "webkit", "o"], s = 0;
      s < e.length && !i.requestAnimationFrame;
      ++s
    )
      (i.requestAnimationFrame = i[e[s] + "RequestAnimationFrame"]),
        (i.cancelAnimationFrame =
          i[e[s] + "CancelAnimationFrame"] ||
          i[e[s] + "CancelRequestAnimationFrame"]);
    i.requestAnimationFrame ||
      (i.requestAnimationFrame = function (e) {
        var s = new Date().getTime(),
          o = Math.max(0, 16 - (s - t)),
          h = i.setTimeout(function () {
            e(s + o);
          }, o);
        return (t = s + o), h;
      }),
      i.cancelAnimationFrame ||
        (i.cancelAnimationFrame = function (t) {
          clearTimeout(t);
        });
  })(),
    t.extend(o.prototype, {
      speed: 0.2,
      bleed: 0,
      zIndex: -100,
      iosFix: !0,
      androidFix: !0,
      position: "center",
      overScrollFix: !1,
      mirrorContainer: "body",
      refresh: function () {
        (this.boxWidth = this.$element.outerWidth()),
          (this.boxHeight = this.$element.outerHeight() + 2 * this.bleed),
          (this.boxOffsetTop = this.$element.offset().top - this.bleed),
          (this.boxOffsetLeft = this.$element.offset().left),
          (this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight);
        var t,
          i = o.winHeight,
          e = o.docHeight,
          s = Math.min(this.boxOffsetTop, e - i),
          h = Math.max(this.boxOffsetTop + this.boxHeight - i, 0),
          r = (this.boxHeight + (s - h) * (1 - this.speed)) | 0,
          a = ((this.boxOffsetTop - s) * (1 - this.speed)) | 0;
        r * this.aspectRatio >= this.boxWidth
          ? ((this.imageWidth = (r * this.aspectRatio) | 0),
            (this.imageHeight = r),
            (this.offsetBaseTop = a),
            (t = this.imageWidth - this.boxWidth),
            "left" == this.positionX
              ? (this.offsetLeft = 0)
              : "right" == this.positionX
              ? (this.offsetLeft = -t)
              : isNaN(this.positionX)
              ? (this.offsetLeft = (-t / 2) | 0)
              : (this.offsetLeft = Math.max(this.positionX, -t)))
          : ((this.imageWidth = this.boxWidth),
            (this.imageHeight = (this.boxWidth / this.aspectRatio) | 0),
            (this.offsetLeft = 0),
            (t = this.imageHeight - r),
            "top" == this.positionY
              ? (this.offsetBaseTop = a)
              : "bottom" == this.positionY
              ? (this.offsetBaseTop = a - t)
              : isNaN(this.positionY)
              ? (this.offsetBaseTop = (a - t / 2) | 0)
              : (this.offsetBaseTop = a + Math.max(this.positionY, -t)));
      },
      render: function () {
        var t = o.scrollTop,
          i = o.scrollLeft,
          e = this.overScrollFix ? o.overScroll : 0,
          s = t + o.winHeight;
        this.boxOffsetBottom > t && this.boxOffsetTop <= s
          ? ((this.visibility = "visible"),
            (this.mirrorTop = this.boxOffsetTop - t),
            (this.mirrorLeft = this.boxOffsetLeft - i),
            (this.offsetTop =
              this.offsetBaseTop - this.mirrorTop * (1 - this.speed)))
          : (this.visibility = "hidden"),
          this.$mirror.css({
            transform:
              "translate3d(" +
              this.mirrorLeft +
              "px, " +
              (this.mirrorTop - e) +
              "px, 0px)",
            visibility: this.visibility,
            height: this.boxHeight,
            width: this.boxWidth,
          }),
          this.$slider.css({
            transform:
              "translate3d(" +
              this.offsetLeft +
              "px, " +
              this.offsetTop +
              "px, 0px)",
            position: "absolute",
            height: this.imageHeight,
            width: this.imageWidth,
            maxWidth: "none",
          });
      },
    }),
    t.extend(o, {
      scrollTop: 0,
      scrollLeft: 0,
      winHeight: 0,
      winWidth: 0,
      docHeight: 1 << 30,
      docWidth: 1 << 30,
      sliders: [],
      isReady: !1,
      isFresh: !1,
      isBusy: !1,
      setup: function () {
        function s() {
          if (p == i.pageYOffset) return i.requestAnimationFrame(s), !1;
          (p = i.pageYOffset), h.render(), i.requestAnimationFrame(s);
        }
        if (!this.isReady) {
          var h = this,
            r = t(e),
            a = t(i),
            n = function () {
              (o.winHeight = a.height()),
                (o.winWidth = a.width()),
                (o.docHeight = r.height()),
                (o.docWidth = r.width());
            },
            l = function () {
              var t = a.scrollTop(),
                i = o.docHeight - o.winHeight,
                e = o.docWidth - o.winWidth;
              (o.scrollTop = Math.max(0, Math.min(i, t))),
                (o.scrollLeft = Math.max(0, Math.min(e, a.scrollLeft()))),
                (o.overScroll = Math.max(t - i, Math.min(t, 0)));
            };
          a
            .on("resize.px.parallax load.px.parallax", function () {
              n(), h.refresh(), (o.isFresh = !1), o.requestRender();
            })
            .on("scroll.px.parallax load.px.parallax", function () {
              l(), o.requestRender();
            }),
            n(),
            l(),
            (this.isReady = !0);
          var p = -1;
          s();
        }
      },
      configure: function (i) {
        "object" == typeof i &&
          (delete i.refresh, delete i.render, t.extend(this.prototype, i));
      },
      refresh: function () {
        t.each(this.sliders, function () {
          this.refresh();
        }),
          (this.isFresh = !0);
      },
      render: function () {
        this.isFresh || this.refresh(),
          t.each(this.sliders, function () {
            this.render();
          });
      },
      requestRender: function () {
        var t = this;
        t.render(), (t.isBusy = !1);
      },
      destroy: function (e) {
        var s,
          h = t(e).data("px.parallax");
        for (h.$mirror.remove(), s = 0; s < this.sliders.length; s += 1)
          this.sliders[s] == h && this.sliders.splice(s, 1);
        t(e).data("px.parallax", !1),
          0 === this.sliders.length &&
            (t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"),
            (this.isReady = !1),
            (o.isSetup = !1));
      },
    });
  var h = t.fn.parallax;
  (t.fn.parallax = function (s) {
    return this.each(function () {
      var h = t(this),
        r = "object" == typeof s && s;
      this == i || this == e || h.is("body")
        ? o.configure(r)
        : h.data("px.parallax")
        ? "object" == typeof s && t.extend(h.data("px.parallax"), r)
        : ((r = t.extend({}, h.data(), r)),
          h.data("px.parallax", new o(this, r))),
        "string" == typeof s && ("destroy" == s ? o.destroy(this) : o[s]());
    });
  }),
    (t.fn.parallax.Constructor = o),
    (t.fn.parallax.noConflict = function () {
      return (t.fn.parallax = h), this;
    }),
    t(function () {
      t('[data-parallax="scroll"]').parallax();
    });
})(jQuery, window, document);

/*!
 * Bootstrap v5.0.0-alpha2 (https://getbootstrap.com/)
 * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t =
        "undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
        e());
})(this, function () {
  "use strict";
  function t(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function e(e, n, i) {
    return n && t(e.prototype, n), i && t(e, i), e;
  }
  function n() {
    return (n =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }).apply(this, arguments);
  }
  var i,
    o,
    r,
    s,
    a = function (t) {
      do {
        t += Math.floor(1e6 * Math.random());
      } while (document.getElementById(t));
      return t;
    },
    l = function (t) {
      var e = t.getAttribute("data-target");
      if (!e || "#" === e) {
        var n = t.getAttribute("href");
        e = n && "#" !== n ? n.trim() : null;
      }
      return e;
    },
    c = function (t) {
      var e = l(t);
      return e && document.querySelector(e) ? e : null;
    },
    u = function (t) {
      var e = l(t);
      return e ? document.querySelector(e) : null;
    },
    f = function (t) {
      if (!t) return 0;
      var e = window.getComputedStyle(t),
        n = e.transitionDuration,
        i = e.transitionDelay,
        o = parseFloat(n),
        r = parseFloat(i);
      return o || r
        ? ((n = n.split(",")[0]),
          (i = i.split(",")[0]),
          1e3 * (parseFloat(n) + parseFloat(i)))
        : 0;
    },
    h = function (t) {
      t.dispatchEvent(new Event("transitionend"));
    },
    d = function (t) {
      return (t[0] || t).nodeType;
    },
    p = function (t, e) {
      var n = !1,
        i = e + 5;
      t.addEventListener("transitionend", function e() {
        (n = !0), t.removeEventListener("transitionend", e);
      }),
        setTimeout(function () {
          n || h(t);
        }, i);
    },
    g = function (t, e, n) {
      Object.keys(n).forEach(function (i) {
        var o,
          r = n[i],
          s = e[i],
          a =
            s && d(s)
              ? "element"
              : null == (o = s)
              ? "" + o
              : {}.toString
                  .call(o)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase();
        if (!new RegExp(r).test(a))
          throw new Error(
            t.toUpperCase() +
              ': Option "' +
              i +
              '" provided type "' +
              a +
              '" but expected type "' +
              r +
              '".'
          );
      });
    },
    m = function (t) {
      if (!t) return !1;
      if (t.style && t.parentNode && t.parentNode.style) {
        var e = getComputedStyle(t),
          n = getComputedStyle(t.parentNode);
        return (
          "none" !== e.display &&
          "none" !== n.display &&
          "hidden" !== e.visibility
        );
      }
      return !1;
    },
    v = function () {
      return function () {};
    },
    _ = function (t) {
      return t.offsetHeight;
    },
    b = function () {
      var t = window.jQuery;
      return t && !document.body.hasAttribute("data-no-jquery") ? t : null;
    },
    y =
      ((i = {}),
      (o = 1),
      {
        set: function (t, e, n) {
          void 0 === t.bsKey && ((t.bsKey = { key: e, id: o }), o++),
            (i[t.bsKey.id] = n);
        },
        get: function (t, e) {
          if (!t || void 0 === t.bsKey) return null;
          var n = t.bsKey;
          return n.key === e ? i[n.id] : null;
        },
        delete: function (t, e) {
          if (void 0 !== t.bsKey) {
            var n = t.bsKey;
            n.key === e && (delete i[n.id], delete t.bsKey);
          }
        },
      }),
    w = function (t, e, n) {
      y.set(t, e, n);
    },
    E = function (t, e) {
      return y.get(t, e);
    },
    T = function (t, e) {
      y.delete(t, e);
    },
    L = Element.prototype.querySelectorAll,
    k = Element.prototype.querySelector,
    C =
      ((r = new CustomEvent("Bootstrap", { cancelable: !0 })),
      (s = document.createElement("div")).addEventListener(
        "Bootstrap",
        function () {
          return null;
        }
      ),
      r.preventDefault(),
      s.dispatchEvent(r),
      r.defaultPrevented),
    A = /:scope\b/;
  (function () {
    var t = document.createElement("div");
    try {
      t.querySelectorAll(":scope *");
    } catch (t) {
      return !1;
    }
    return !0;
  })() ||
    ((L = function (t) {
      if (!A.test(t)) return this.querySelectorAll(t);
      var e = Boolean(this.id);
      e || (this.id = a("scope"));
      var n = null;
      try {
        (t = t.replace(A, "#" + this.id)), (n = this.querySelectorAll(t));
      } finally {
        e || this.removeAttribute("id");
      }
      return n;
    }),
    (k = function (t) {
      if (!A.test(t)) return this.querySelector(t);
      var e = L.call(this, t);
      return void 0 !== e[0] ? e[0] : null;
    }));
  var O = b(),
    S = /[^.]*(?=\..*)\.|.*/,
    D = /\..*/,
    x = /::\d+$/,
    N = {},
    I = 1,
    j = { mouseenter: "mouseover", mouseleave: "mouseout" },
    P = [
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ];
  function M(t, e) {
    return (e && e + "::" + I++) || t.uidEvent || I++;
  }
  function H(t) {
    var e = M(t);
    return (t.uidEvent = e), (N[e] = N[e] || {}), N[e];
  }
  function B(t, e, n) {
    void 0 === n && (n = null);
    for (var i = Object.keys(t), o = 0, r = i.length; o < r; o++) {
      var s = t[i[o]];
      if (s.originalHandler === e && s.delegationSelector === n) return s;
    }
    return null;
  }
  function R(t, e, n) {
    var i = "string" == typeof e,
      o = i ? n : e,
      r = t.replace(D, ""),
      s = j[r];
    return s && (r = s), P.indexOf(r) > -1 || (r = t), [i, o, r];
  }
  function F(t, e, n, i, o) {
    if ("string" == typeof e && t) {
      n || ((n = i), (i = null));
      var r = R(e, n, i),
        s = r[0],
        a = r[1],
        l = r[2],
        c = H(t),
        u = c[l] || (c[l] = {}),
        f = B(u, a, s ? n : null);
      if (f) f.oneOff = f.oneOff && o;
      else {
        var h = M(a, e.replace(S, "")),
          d = s
            ? (function (t, e, n) {
                return function i(o) {
                  for (
                    var r = t.querySelectorAll(e), s = o.target;
                    s && s !== this;
                    s = s.parentNode
                  )
                    for (var a = r.length; a--; )
                      if (r[a] === s)
                        return (
                          (o.delegateTarget = s),
                          i.oneOff && U.off(t, o.type, n),
                          n.apply(s, [o])
                        );
                  return null;
                };
              })(t, n, i)
            : (function (t, e) {
                return function n(i) {
                  return (
                    (i.delegateTarget = t),
                    n.oneOff && U.off(t, i.type, e),
                    e.apply(t, [i])
                  );
                };
              })(t, n);
        (d.delegationSelector = s ? n : null),
          (d.originalHandler = a),
          (d.oneOff = o),
          (d.uidEvent = h),
          (u[h] = d),
          t.addEventListener(l, d, s);
      }
    }
  }
  function W(t, e, n, i, o) {
    var r = B(e[n], i, o);
    r && (t.removeEventListener(n, r, Boolean(o)), delete e[n][r.uidEvent]);
  }
  var U = {
      on: function (t, e, n, i) {
        F(t, e, n, i, !1);
      },
      one: function (t, e, n, i) {
        F(t, e, n, i, !0);
      },
      off: function (t, e, n, i) {
        if ("string" == typeof e && t) {
          var o = R(e, n, i),
            r = o[0],
            s = o[1],
            a = o[2],
            l = a !== e,
            c = H(t),
            u = "." === e.charAt(0);
          if (void 0 === s) {
            u &&
              Object.keys(c).forEach(function (n) {
                !(function (t, e, n, i) {
                  var o = e[n] || {};
                  Object.keys(o).forEach(function (r) {
                    if (r.indexOf(i) > -1) {
                      var s = o[r];
                      W(t, e, n, s.originalHandler, s.delegationSelector);
                    }
                  });
                })(t, c, n, e.slice(1));
              });
            var f = c[a] || {};
            Object.keys(f).forEach(function (n) {
              var i = n.replace(x, "");
              if (!l || e.indexOf(i) > -1) {
                var o = f[n];
                W(t, c, a, o.originalHandler, o.delegationSelector);
              }
            });
          } else {
            if (!c || !c[a]) return;
            W(t, c, a, s, r ? n : null);
          }
        }
      },
      trigger: function (t, e, n) {
        if ("string" != typeof e || !t) return null;
        var i,
          o = e.replace(D, ""),
          r = e !== o,
          s = P.indexOf(o) > -1,
          a = !0,
          l = !0,
          c = !1,
          u = null;
        return (
          r &&
            O &&
            ((i = O.Event(e, n)),
            O(t).trigger(i),
            (a = !i.isPropagationStopped()),
            (l = !i.isImmediatePropagationStopped()),
            (c = i.isDefaultPrevented())),
          s
            ? (u = document.createEvent("HTMLEvents")).initEvent(o, a, !0)
            : (u = new CustomEvent(e, { bubbles: a, cancelable: !0 })),
          void 0 !== n &&
            Object.keys(n).forEach(function (t) {
              Object.defineProperty(u, t, {
                get: function () {
                  return n[t];
                },
              });
            }),
          c &&
            (u.preventDefault(),
            C ||
              Object.defineProperty(u, "defaultPrevented", {
                get: function () {
                  return !0;
                },
              })),
          l && t.dispatchEvent(u),
          u.defaultPrevented && void 0 !== i && i.preventDefault(),
          u
        );
      },
    },
    Q = "alert",
    V = (function () {
      function t(t) {
        (this._element = t), this._element && w(t, "bs.alert", this);
      }
      var n = t.prototype;
      return (
        (n.close = function (t) {
          var e = t ? this._getRootElement(t) : this._element,
            n = this._triggerCloseEvent(e);
          null === n || n.defaultPrevented || this._removeElement(e);
        }),
        (n.dispose = function () {
          T(this._element, "bs.alert"), (this._element = null);
        }),
        (n._getRootElement = function (t) {
          return u(t) || t.closest(".alert");
        }),
        (n._triggerCloseEvent = function (t) {
          return U.trigger(t, "close.bs.alert");
        }),
        (n._removeElement = function (t) {
          var e = this;
          if ((t.classList.remove("show"), t.classList.contains("fade"))) {
            var n = f(t);
            U.one(t, "transitionend", function () {
              return e._destroyElement(t);
            }),
              p(t, n);
          } else this._destroyElement(t);
        }),
        (n._destroyElement = function (t) {
          t.parentNode && t.parentNode.removeChild(t),
            U.trigger(t, "closed.bs.alert");
        }),
        (t.jQueryInterface = function (e) {
          return this.each(function () {
            var n = E(this, "bs.alert");
            n || (n = new t(this)), "close" === e && n[e](this);
          });
        }),
        (t.handleDismiss = function (t) {
          return function (e) {
            e && e.preventDefault(), t.close(this);
          };
        }),
        (t.getInstance = function (t) {
          return E(t, "bs.alert");
        }),
        e(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "5.0.0-alpha2";
            },
          },
        ]),
        t
      );
    })();
  U.on(
    document,
    "click.bs.alert.data-api",
    '[data-dismiss="alert"]',
    V.handleDismiss(new V())
  );
  var K = b();
  if (K) {
    var Y = K.fn[Q];
    (K.fn[Q] = V.jQueryInterface),
      (K.fn[Q].Constructor = V),
      (K.fn[Q].noConflict = function () {
        return (K.fn[Q] = Y), V.jQueryInterface;
      });
  }
  var q = (function () {
    function t(t) {
      (this._element = t), w(t, "bs.button", this);
    }
    var n = t.prototype;
    return (
      (n.toggle = function () {
        this._element.setAttribute(
          "aria-pressed",
          this._element.classList.toggle("active")
        );
      }),
      (n.dispose = function () {
        T(this._element, "bs.button"), (this._element = null);
      }),
      (t.jQueryInterface = function (e) {
        return this.each(function () {
          var n = E(this, "bs.button");
          n || (n = new t(this)), "toggle" === e && n[e]();
        });
      }),
      (t.getInstance = function (t) {
        return E(t, "bs.button");
      }),
      e(t, null, [
        {
          key: "VERSION",
          get: function () {
            return "5.0.0-alpha2";
          },
        },
      ]),
      t
    );
  })();
  U.on(
    document,
    "click.bs.button.data-api",
    '[data-toggle="button"]',
    function (t) {
      t.preventDefault();
      var e = t.target.closest('[data-toggle="button"]'),
        n = E(e, "bs.button");
      n || (n = new q(e)), n.toggle();
    }
  );
  var z = b();
  if (z) {
    var X = z.fn.button;
    (z.fn.button = q.jQueryInterface),
      (z.fn.button.Constructor = q),
      (z.fn.button.noConflict = function () {
        return (z.fn.button = X), q.jQueryInterface;
      });
  }
  function G(t) {
    return (
      "true" === t ||
      ("false" !== t &&
        (t === Number(t).toString()
          ? Number(t)
          : "" === t || "null" === t
          ? null
          : t))
    );
  }
  function $(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-" + t.toLowerCase();
    });
  }
  var Z = {
      setDataAttribute: function (t, e, n) {
        t.setAttribute("data-" + $(e), n);
      },
      removeDataAttribute: function (t, e) {
        t.removeAttribute("data-" + $(e));
      },
      getDataAttributes: function (t) {
        if (!t) return {};
        var e = n({}, t.dataset);
        return (
          Object.keys(e).forEach(function (t) {
            e[t] = G(e[t]);
          }),
          e
        );
      },
      getDataAttribute: function (t, e) {
        return G(t.getAttribute("data-" + $(e)));
      },
      offset: function (t) {
        var e = t.getBoundingClientRect();
        return {
          top: e.top + document.body.scrollTop,
          left: e.left + document.body.scrollLeft,
        };
      },
      position: function (t) {
        return { top: t.offsetTop, left: t.offsetLeft };
      },
      toggleClass: function (t, e) {
        t &&
          (t.classList.contains(e)
            ? t.classList.remove(e)
            : t.classList.add(e));
      },
    },
    J = {
      matches: function (t, e) {
        return t.matches(e);
      },
      find: function (t, e) {
        var n;
        return (
          void 0 === e && (e = document.documentElement),
          (n = []).concat.apply(n, L.call(e, t))
        );
      },
      findOne: function (t, e) {
        return void 0 === e && (e = document.documentElement), k.call(e, t);
      },
      children: function (t, e) {
        var n,
          i = (n = []).concat.apply(n, t.children);
        return i.filter(function (t) {
          return t.matches(e);
        });
      },
      parents: function (t, e) {
        for (
          var n = [], i = t.parentNode;
          i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;

        )
          this.matches(i, e) && n.push(i), (i = i.parentNode);
        return n;
      },
      prev: function (t, e) {
        for (var n = t.previousElementSibling; n; ) {
          if (n.matches(e)) return [n];
          n = n.previousElementSibling;
        }
        return [];
      },
      next: function (t, e) {
        for (var n = t.nextElementSibling; n; ) {
          if (this.matches(n, e)) return [n];
          n = n.nextElementSibling;
        }
        return [];
      },
    },
    tt = "carousel",
    et = ".bs.carousel",
    nt = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    it = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    ot = { TOUCH: "touch", PEN: "pen" },
    rt = (function () {
      function t(t, e) {
        (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(e)),
          (this._element = t),
          (this._indicatorsElement = J.findOne(
            ".carousel-indicators",
            this._element
          )),
          (this._touchSupported =
            "ontouchstart" in document.documentElement ||
            navigator.maxTouchPoints > 0),
          (this._pointerEvent = Boolean(window.PointerEvent)),
          this._addEventListeners(),
          w(t, "bs.carousel", this);
      }
      var i = t.prototype;
      return (
        (i.next = function () {
          this._isSliding || this._slide("next");
        }),
        (i.nextWhenVisible = function () {
          !document.hidden && m(this._element) && this.next();
        }),
        (i.prev = function () {
          this._isSliding || this._slide("prev");
        }),
        (i.pause = function (t) {
          t || (this._isPaused = !0),
            J.findOne(
              ".carousel-item-next, .carousel-item-prev",
              this._element
            ) && (h(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }),
        (i.cycle = function (t) {
          t || (this._isPaused = !1),
            this._interval &&
              (clearInterval(this._interval), (this._interval = null)),
            this._config &&
              this._config.interval &&
              !this._isPaused &&
              (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval
              ));
        }),
        (i.to = function (t) {
          var e = this;
          this._activeElement = J.findOne(
            ".active.carousel-item",
            this._element
          );
          var n = this._getItemIndex(this._activeElement);
          if (!(t > this._items.length - 1 || t < 0))
            if (this._isSliding)
              U.one(this._element, "slid.bs.carousel", function () {
                return e.to(t);
              });
            else {
              if (n === t) return this.pause(), void this.cycle();
              var i = t > n ? "next" : "prev";
              this._slide(i, this._items[t]);
            }
        }),
        (i.dispose = function () {
          U.off(this._element, et),
            T(this._element, "bs.carousel"),
            (this._items = null),
            (this._config = null),
            (this._element = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null);
        }),
        (i._getConfig = function (t) {
          return (t = n({}, nt, t)), g(tt, t, it), t;
        }),
        (i._handleSwipe = function () {
          var t = Math.abs(this.touchDeltaX);
          if (!(t <= 40)) {
            var e = t / this.touchDeltaX;
            (this.touchDeltaX = 0), e > 0 && this.prev(), e < 0 && this.next();
          }
        }),
        (i._addEventListeners = function () {
          var t = this;
          this._config.keyboard &&
            U.on(this._element, "keydown.bs.carousel", function (e) {
              return t._keydown(e);
            }),
            "hover" === this._config.pause &&
              (U.on(this._element, "mouseenter.bs.carousel", function (e) {
                return t.pause(e);
              }),
              U.on(this._element, "mouseleave.bs.carousel", function (e) {
                return t.cycle(e);
              })),
            this._config.touch &&
              this._touchSupported &&
              this._addTouchEventListeners();
        }),
        (i._addTouchEventListeners = function () {
          var t = this,
            e = function (e) {
              t._pointerEvent && ot[e.pointerType.toUpperCase()]
                ? (t.touchStartX = e.clientX)
                : t._pointerEvent || (t.touchStartX = e.touches[0].clientX);
            },
            n = function (e) {
              t._pointerEvent &&
                ot[e.pointerType.toUpperCase()] &&
                (t.touchDeltaX = e.clientX - t.touchStartX),
                t._handleSwipe(),
                "hover" === t._config.pause &&
                  (t.pause(),
                  t.touchTimeout && clearTimeout(t.touchTimeout),
                  (t.touchTimeout = setTimeout(function (e) {
                    return t.cycle(e);
                  }, 500 + t._config.interval)));
            };
          J.find(".carousel-item img", this._element).forEach(function (t) {
            U.on(t, "dragstart.bs.carousel", function (t) {
              return t.preventDefault();
            });
          }),
            this._pointerEvent
              ? (U.on(this._element, "pointerdown.bs.carousel", function (t) {
                  return e(t);
                }),
                U.on(this._element, "pointerup.bs.carousel", function (t) {
                  return n(t);
                }),
                this._element.classList.add("pointer-event"))
              : (U.on(this._element, "touchstart.bs.carousel", function (t) {
                  return e(t);
                }),
                U.on(this._element, "touchmove.bs.carousel", function (e) {
                  return (function (e) {
                    e.touches && e.touches.length > 1
                      ? (t.touchDeltaX = 0)
                      : (t.touchDeltaX = e.touches[0].clientX - t.touchStartX);
                  })(e);
                }),
                U.on(this._element, "touchend.bs.carousel", function (t) {
                  return n(t);
                }));
        }),
        (i._keydown = function (t) {
          if (!/input|textarea/i.test(t.target.tagName))
            switch (t.key) {
              case "ArrowLeft":
                t.preventDefault(), this.prev();
                break;
              case "ArrowRight":
                t.preventDefault(), this.next();
            }
        }),
        (i._getItemIndex = function (t) {
          return (
            (this._items =
              t && t.parentNode ? J.find(".carousel-item", t.parentNode) : []),
            this._items.indexOf(t)
          );
        }),
        (i._getItemByDirection = function (t, e) {
          var n = "next" === t,
            i = "prev" === t,
            o = this._getItemIndex(e),
            r = this._items.length - 1;
          if (((i && 0 === o) || (n && o === r)) && !this._config.wrap)
            return e;
          var s = (o + ("prev" === t ? -1 : 1)) % this._items.length;
          return -1 === s
            ? this._items[this._items.length - 1]
            : this._items[s];
        }),
        (i._triggerSlideEvent = function (t, e) {
          var n = this._getItemIndex(t),
            i = this._getItemIndex(
              J.findOne(".active.carousel-item", this._element)
            );
          return U.trigger(this._element, "slide.bs.carousel", {
            relatedTarget: t,
            direction: e,
            from: i,
            to: n,
          });
        }),
        (i._setActiveIndicatorElement = function (t) {
          if (this._indicatorsElement) {
            for (
              var e = J.find(".active", this._indicatorsElement), n = 0;
              n < e.length;
              n++
            )
              e[n].classList.remove("active");
            var i = this._indicatorsElement.children[this._getItemIndex(t)];
            i && i.classList.add("active");
          }
        }),
        (i._slide = function (t, e) {
          var n,
            i,
            o,
            r = this,
            s = J.findOne(".active.carousel-item", this._element),
            a = this._getItemIndex(s),
            l = e || (s && this._getItemByDirection(t, s)),
            c = this._getItemIndex(l),
            u = Boolean(this._interval);
          if (
            ("next" === t
              ? ((n = "carousel-item-left"),
                (i = "carousel-item-next"),
                (o = "left"))
              : ((n = "carousel-item-right"),
                (i = "carousel-item-prev"),
                (o = "right")),
            l && l.classList.contains("active"))
          )
            this._isSliding = !1;
          else if (!this._triggerSlideEvent(l, o).defaultPrevented && s && l) {
            if (
              ((this._isSliding = !0),
              u && this.pause(),
              this._setActiveIndicatorElement(l),
              this._element.classList.contains("slide"))
            ) {
              l.classList.add(i), _(l), s.classList.add(n), l.classList.add(n);
              var h = parseInt(l.getAttribute("data-interval"), 10);
              h
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval || this._config.interval),
                  (this._config.interval = h))
                : (this._config.interval =
                    this._config.defaultInterval || this._config.interval);
              var d = f(s);
              U.one(s, "transitionend", function () {
                l.classList.remove(n, i),
                  l.classList.add("active"),
                  s.classList.remove("active", i, n),
                  (r._isSliding = !1),
                  setTimeout(function () {
                    U.trigger(r._element, "slid.bs.carousel", {
                      relatedTarget: l,
                      direction: o,
                      from: a,
                      to: c,
                    });
                  }, 0);
              }),
                p(s, d);
            } else
              s.classList.remove("active"),
                l.classList.add("active"),
                (this._isSliding = !1),
                U.trigger(this._element, "slid.bs.carousel", {
                  relatedTarget: l,
                  direction: o,
                  from: a,
                  to: c,
                });
            u && this.cycle();
          }
        }),
        (t.carouselInterface = function (e, i) {
          var o = E(e, "bs.carousel"),
            r = n({}, nt, Z.getDataAttributes(e));
          "object" == typeof i && (r = n({}, r, i));
          var s = "string" == typeof i ? i : r.slide;
          if ((o || (o = new t(e, r)), "number" == typeof i)) o.to(i);
          else if ("string" == typeof s) {
            if (void 0 === o[s])
              throw new TypeError('No method named "' + s + '"');
            o[s]();
          } else r.interval && r.ride && (o.pause(), o.cycle());
        }),
        (t.jQueryInterface = function (e) {
          return this.each(function () {
            t.carouselInterface(this, e);
          });
        }),
        (t.dataApiClickHandler = function (e) {
          var i = u(this);
          if (i && i.classList.contains("carousel")) {
            var o = n({}, Z.getDataAttributes(i), Z.getDataAttributes(this)),
              r = this.getAttribute("data-slide-to");
            r && (o.interval = !1),
              t.carouselInterface(i, o),
              r && E(i, "bs.carousel").to(r),
              e.preventDefault();
          }
        }),
        (t.getInstance = function (t) {
          return E(t, "bs.carousel");
        }),
        e(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "5.0.0-alpha2";
            },
          },
          {
            key: "Default",
            get: function () {
              return nt;
            },
          },
        ]),
        t
      );
    })();
  U.on(
    document,
    "click.bs.carousel.data-api",
    "[data-slide], [data-slide-to]",
    rt.dataApiClickHandler
  ),
    U.on(window, "load.bs.carousel.data-api", function () {
      for (
        var t = J.find('[data-ride="carousel"]'), e = 0, n = t.length;
        e < n;
        e++
      )
        rt.carouselInterface(t[e], E(t[e], "bs.carousel"));
    });
  var st = b();
  if (st) {
    var at = st.fn[tt];
    (st.fn[tt] = rt.jQueryInterface),
      (st.fn[tt].Constructor = rt),
      (st.fn[tt].noConflict = function () {
        return (st.fn[tt] = at), rt.jQueryInterface;
      });
  }
  var lt = "collapse",
    ct = { toggle: !0, parent: "" },
    ut = { toggle: "boolean", parent: "(string|element)" },
    ft = (function () {
      function t(t, e) {
        (this._isTransitioning = !1),
          (this._element = t),
          (this._config = this._getConfig(e)),
          (this._triggerArray = J.find(
            '[data-toggle="collapse"][href="#' +
              t.id +
              '"],[data-toggle="collapse"][data-target="#' +
              t.id +
              '"]'
          ));
        for (
          var n = J.find('[data-toggle="collapse"]'), i = 0, o = n.length;
          i < o;
          i++
        ) {
          var r = n[i],
            s = c(r),
            a = J.find(s).filter(function (e) {
              return e === t;
            });
          null !== s &&
            a.length &&
            ((this._selector = s), this._triggerArray.push(r));
        }
        (this._parent = this._config.parent ? this._getParent() : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle(),
          w(t, "bs.collapse", this);
      }
      var i = t.prototype;
      return (
        (i.toggle = function () {
          this._element.classList.contains("show") ? this.hide() : this.show();
        }),
        (i.show = function () {
          var e = this;
          if (
            !this._isTransitioning &&
            !this._element.classList.contains("show")
          ) {
            var n, i;
            this._parent &&
              0 ===
                (n = J.find(".show, .collapsing", this._parent).filter(
                  function (t) {
                    return "string" == typeof e._config.parent
                      ? t.getAttribute("data-parent") === e._config.parent
                      : t.classList.contains("collapse");
                  }
                )).length &&
              (n = null);
            var o = J.findOne(this._selector);
            if (n) {
              var r = n.filter(function (t) {
                return o !== t;
              });
              if (
                (i = r[0] ? E(r[0], "bs.collapse") : null) &&
                i._isTransitioning
              )
                return;
            }
            if (
              !U.trigger(this._element, "show.bs.collapse").defaultPrevented
            ) {
              n &&
                n.forEach(function (e) {
                  o !== e && t.collapseInterface(e, "hide"),
                    i || w(e, "bs.collapse", null);
                });
              var s = this._getDimension();
              this._element.classList.remove("collapse"),
                this._element.classList.add("collapsing"),
                (this._element.style[s] = 0),
                this._triggerArray.length &&
                  this._triggerArray.forEach(function (t) {
                    t.classList.remove("collapsed"),
                      t.setAttribute("aria-expanded", !0);
                  }),
                this.setTransitioning(!0);
              var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                l = f(this._element);
              U.one(this._element, "transitionend", function () {
                e._element.classList.remove("collapsing"),
                  e._element.classList.add("collapse", "show"),
                  (e._element.style[s] = ""),
                  e.setTransitioning(!1),
                  U.trigger(e._element, "shown.bs.collapse");
              }),
                p(this._element, l),
                (this._element.style[s] = this._element[a] + "px");
            }
          }
        }),
        (i.hide = function () {
          var t = this;
          if (
            !this._isTransitioning &&
            this._element.classList.contains("show") &&
            !U.trigger(this._element, "hide.bs.collapse").defaultPrevented
          ) {
            var e = this._getDimension();
            (this._element.style[e] =
              this._element.getBoundingClientRect()[e] + "px"),
              _(this._element),
              this._element.classList.add("collapsing"),
              this._element.classList.remove("collapse", "show");
            var n = this._triggerArray.length;
            if (n > 0)
              for (var i = 0; i < n; i++) {
                var o = this._triggerArray[i],
                  r = u(o);
                r &&
                  !r.classList.contains("show") &&
                  (o.classList.add("collapsed"),
                  o.setAttribute("aria-expanded", !1));
              }
            this.setTransitioning(!0);
            this._element.style[e] = "";
            var s = f(this._element);
            U.one(this._element, "transitionend", function () {
              t.setTransitioning(!1),
                t._element.classList.remove("collapsing"),
                t._element.classList.add("collapse"),
                U.trigger(t._element, "hidden.bs.collapse");
            }),
              p(this._element, s);
          }
        }),
        (i.setTransitioning = function (t) {
          this._isTransitioning = t;
        }),
        (i.dispose = function () {
          T(this._element, "bs.collapse"),
            (this._config = null),
            (this._parent = null),
            (this._element = null),
            (this._triggerArray = null),
            (this._isTransitioning = null);
        }),
        (i._getConfig = function (t) {
          return (
            ((t = n({}, ct, t)).toggle = Boolean(t.toggle)), g(lt, t, ut), t
          );
        }),
        (i._getDimension = function () {
          return this._element.classList.contains("width") ? "width" : "height";
        }),
        (i._getParent = function () {
          var t = this,
            e = this._config.parent;
          d(e)
            ? (void 0 === e.jquery && void 0 === e[0]) || (e = e[0])
            : (e = J.findOne(e));
          var n = '[data-toggle="collapse"][data-parent="' + e + '"]';
          return (
            J.find(n, e).forEach(function (e) {
              var n = u(e);
              t._addAriaAndCollapsedClass(n, [e]);
            }),
            e
          );
        }),
        (i._addAriaAndCollapsedClass = function (t, e) {
          if (t && e.length) {
            var n = t.classList.contains("show");
            e.forEach(function (t) {
              n
                ? t.classList.remove("collapsed")
                : t.classList.add("collapsed"),
                t.setAttribute("aria-expanded", n);
            });
          }
        }),
        (t.collapseInterface = function (e, i) {
          var o = E(e, "bs.collapse"),
            r = n(
              {},
              ct,
              Z.getDataAttributes(e),
              "object" == typeof i && i ? i : {}
            );
          if (
            (!o &&
              r.toggle &&
              "string" == typeof i &&
              /show|hide/.test(i) &&
              (r.toggle = !1),
            o || (o = new t(e, r)),
            "string" == typeof i)
          ) {
            if (void 0 === o[i])
              throw new TypeError('No method named "' + i + '"');
            o[i]();
          }
        }),
        (t.jQueryInterface = function (e) {
          return this.each(function () {
            t.collapseInterface(this, e);
          });
        }),
        (t.getInstance = function (t) {
          return E(t, "bs.collapse");
        }),
        e(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "5.0.0-alpha2";
            },
          },
          {
            key: "Default",
            get: function () {
              return ct;
            },
          },
        ]),
        t
      );
    })();
  U.on(
    document,
    "click.bs.collapse.data-api",
    '[data-toggle="collapse"]',
    function (t) {
      "A" === t.target.tagName && t.preventDefault();
      var e = Z.getDataAttributes(this),
        n = c(this);
      J.find(n).forEach(function (t) {
        var n,
          i = E(t, "bs.collapse");
        i
          ? (null === i._parent &&
              "string" == typeof e.parent &&
              ((i._config.parent = e.parent), (i._parent = i._getParent())),
            (n = "toggle"))
          : (n = e),
          ft.collapseInterface(t, n);
      });
    }
  );
  var ht = b();
  if (ht) {
    var dt = ht.fn[lt];
    (ht.fn[lt] = ft.jQueryInterface),
      (ht.fn[lt].Constructor = ft),
      (ht.fn[lt].noConflict = function () {
        return (ht.fn[lt] = dt), ft.jQueryInterface;
      });
  }
  var pt =
      "undefined" != typeof window &&
      "undefined" != typeof document &&
      "undefined" != typeof navigator,
    gt = (function () {
      for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1)
        if (pt && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
      return 0;
    })();
  var mt =
    pt && window.Promise
      ? function (t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              window.Promise.resolve().then(function () {
                (e = !1), t();
              }));
          };
        }
      : function (t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              setTimeout(function () {
                (e = !1), t();
              }, gt));
          };
        };
  function vt(t) {
    return t && "[object Function]" === {}.toString.call(t);
  }
  function _t(t, e) {
    if (1 !== t.nodeType) return [];
    var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
    return e ? n[e] : n;
  }
  function bt(t) {
    return "HTML" === t.nodeName ? t : t.parentNode || t.host;
  }
  function yt(t) {
    if (!t) return document.body;
    switch (t.nodeName) {
      case "HTML":
      case "BODY":
        return t.ownerDocument.body;
      case "#document":
        return t.body;
    }
    var e = _t(t),
      n = e.overflow,
      i = e.overflowX,
      o = e.overflowY;
    return /(auto|scroll|overlay)/.test(n + o + i) ? t : yt(bt(t));
  }
  function wt(t) {
    return t && t.referenceNode ? t.referenceNode : t;
  }
  var Et = pt && !(!window.MSInputMethodContext || !document.documentMode),
    Tt = pt && /MSIE 10/.test(navigator.userAgent);
  function Lt(t) {
    return 11 === t ? Et : 10 === t ? Tt : Et || Tt;
  }
  function kt(t) {
    if (!t) return document.documentElement;
    for (
      var e = Lt(10) ? document.body : null, n = t.offsetParent || null;
      n === e && t.nextElementSibling;

    )
      n = (t = t.nextElementSibling).offsetParent;
    var i = n && n.nodeName;
    return i && "BODY" !== i && "HTML" !== i
      ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
        "static" === _t(n, "position")
        ? kt(n)
        : n
      : t
      ? t.ownerDocument.documentElement
      : document.documentElement;
  }
  function Ct(t) {
    return null !== t.parentNode ? Ct(t.parentNode) : t;
  }
  function At(t, e) {
    if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
    var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = n ? t : e,
      o = n ? e : t,
      r = document.createRange();
    r.setStart(i, 0), r.setEnd(o, 0);
    var s = r.commonAncestorContainer;
    if ((t !== s && e !== s) || i.contains(o))
      return (function (t) {
        var e = t.nodeName;
        return "BODY" !== e && ("HTML" === e || kt(t.firstElementChild) === t);
      })(s)
        ? s
        : kt(s);
    var a = Ct(t);
    return a.host ? At(a.host, e) : At(t, Ct(e).host);
  }
  function Ot(t) {
    var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
      n = "top" === e ? "scrollTop" : "scrollLeft",
      i = t.nodeName;
    if ("BODY" === i || "HTML" === i) {
      var o = t.ownerDocument.documentElement,
        r = t.ownerDocument.scrollingElement || o;
      return r[n];
    }
    return t[n];
  }
  function St(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = Ot(e, "top"),
      o = Ot(e, "left"),
      r = n ? -1 : 1;
    return (
      (t.top += i * r),
      (t.bottom += i * r),
      (t.left += o * r),
      (t.right += o * r),
      t
    );
  }
  function Dt(t, e) {
    var n = "x" === e ? "Left" : "Top",
      i = "Left" === n ? "Right" : "Bottom";
    return (
      parseFloat(t["border" + n + "Width"]) +
      parseFloat(t["border" + i + "Width"])
    );
  }
  function xt(t, e, n, i) {
    return Math.max(
      e["offset" + t],
      e["scroll" + t],
      n["client" + t],
      n["offset" + t],
      n["scroll" + t],
      Lt(10)
        ? parseInt(n["offset" + t]) +
            parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) +
            parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")])
        : 0
    );
  }
  function Nt(t) {
    var e = t.body,
      n = t.documentElement,
      i = Lt(10) && getComputedStyle(n);
    return { height: xt("Height", e, n, i), width: xt("Width", e, n, i) };
  }
  var It = function (t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    },
    jt = (function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
      };
    })(),
    Pt = function (t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    },
    Mt =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      };
  function Ht(t) {
    return Mt({}, t, { right: t.left + t.width, bottom: t.top + t.height });
  }
  function Bt(t) {
    var e = {};
    try {
      if (Lt(10)) {
        e = t.getBoundingClientRect();
        var n = Ot(t, "top"),
          i = Ot(t, "left");
        (e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
      } else e = t.getBoundingClientRect();
    } catch (t) {}
    var o = {
        left: e.left,
        top: e.top,
        width: e.right - e.left,
        height: e.bottom - e.top,
      },
      r = "HTML" === t.nodeName ? Nt(t.ownerDocument) : {},
      s = r.width || t.clientWidth || o.width,
      a = r.height || t.clientHeight || o.height,
      l = t.offsetWidth - s,
      c = t.offsetHeight - a;
    if (l || c) {
      var u = _t(t);
      (l -= Dt(u, "x")), (c -= Dt(u, "y")), (o.width -= l), (o.height -= c);
    }
    return Ht(o);
  }
  function Rt(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = Lt(10),
      o = "HTML" === e.nodeName,
      r = Bt(t),
      s = Bt(e),
      a = yt(t),
      l = _t(e),
      c = parseFloat(l.borderTopWidth),
      u = parseFloat(l.borderLeftWidth);
    n && o && ((s.top = Math.max(s.top, 0)), (s.left = Math.max(s.left, 0)));
    var f = Ht({
      top: r.top - s.top - c,
      left: r.left - s.left - u,
      width: r.width,
      height: r.height,
    });
    if (((f.marginTop = 0), (f.marginLeft = 0), !i && o)) {
      var h = parseFloat(l.marginTop),
        d = parseFloat(l.marginLeft);
      (f.top -= c - h),
        (f.bottom -= c - h),
        (f.left -= u - d),
        (f.right -= u - d),
        (f.marginTop = h),
        (f.marginLeft = d);
    }
    return (
      (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) &&
        (f = St(f, e)),
      f
    );
  }
  function Ft(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = t.ownerDocument.documentElement,
      i = Rt(t, n),
      o = Math.max(n.clientWidth, window.innerWidth || 0),
      r = Math.max(n.clientHeight, window.innerHeight || 0),
      s = e ? 0 : Ot(n),
      a = e ? 0 : Ot(n, "left"),
      l = {
        top: s - i.top + i.marginTop,
        left: a - i.left + i.marginLeft,
        width: o,
        height: r,
      };
    return Ht(l);
  }
  function Wt(t) {
    var e = t.nodeName;
    if ("BODY" === e || "HTML" === e) return !1;
    if ("fixed" === _t(t, "position")) return !0;
    var n = bt(t);
    return !!n && Wt(n);
  }
  function Ut(t) {
    if (!t || !t.parentElement || Lt()) return document.documentElement;
    for (var e = t.parentElement; e && "none" === _t(e, "transform"); )
      e = e.parentElement;
    return e || document.documentElement;
  }
  function Qt(t, e, n, i) {
    var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
      r = { top: 0, left: 0 },
      s = o ? Ut(t) : At(t, wt(e));
    if ("viewport" === i) r = Ft(s, o);
    else {
      var a = void 0;
      "scrollParent" === i
        ? "BODY" === (a = yt(bt(e))).nodeName &&
          (a = t.ownerDocument.documentElement)
        : (a = "window" === i ? t.ownerDocument.documentElement : i);
      var l = Rt(a, s, o);
      if ("HTML" !== a.nodeName || Wt(s)) r = l;
      else {
        var c = Nt(t.ownerDocument),
          u = c.height,
          f = c.width;
        (r.top += l.top - l.marginTop),
          (r.bottom = u + l.top),
          (r.left += l.left - l.marginLeft),
          (r.right = f + l.left);
      }
    }
    var h = "number" == typeof (n = n || 0);
    return (
      (r.left += h ? n : n.left || 0),
      (r.top += h ? n : n.top || 0),
      (r.right -= h ? n : n.right || 0),
      (r.bottom -= h ? n : n.bottom || 0),
      r
    );
  }
  function Vt(t) {
    return t.width * t.height;
  }
  function Kt(t, e, n, i, o) {
    var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === t.indexOf("auto")) return t;
    var s = Qt(n, i, r, o),
      a = {
        top: { width: s.width, height: e.top - s.top },
        right: { width: s.right - e.right, height: s.height },
        bottom: { width: s.width, height: s.bottom - e.bottom },
        left: { width: e.left - s.left, height: s.height },
      },
      l = Object.keys(a)
        .map(function (t) {
          return Mt({ key: t }, a[t], { area: Vt(a[t]) });
        })
        .sort(function (t, e) {
          return e.area - t.area;
        }),
      c = l.filter(function (t) {
        var e = t.width,
          i = t.height;
        return e >= n.clientWidth && i >= n.clientHeight;
      }),
      u = c.length > 0 ? c[0].key : l[0].key,
      f = t.split("-")[1];
    return u + (f ? "-" + f : "");
  }
  function Yt(t, e, n) {
    var i =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
      o = i ? Ut(e) : At(e, wt(n));
    return Rt(n, o, i);
  }
  function qt(t) {
    var e = t.ownerDocument.defaultView.getComputedStyle(t),
      n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
      i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
    return { width: t.offsetWidth + i, height: t.offsetHeight + n };
  }
  function zt(t) {
    var e = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return t.replace(/left|right|bottom|top/g, function (t) {
      return e[t];
    });
  }
  function Xt(t, e, n) {
    n = n.split("-")[0];
    var i = qt(t),
      o = { width: i.width, height: i.height },
      r = -1 !== ["right", "left"].indexOf(n),
      s = r ? "top" : "left",
      a = r ? "left" : "top",
      l = r ? "height" : "width",
      c = r ? "width" : "height";
    return (
      (o[s] = e[s] + e[l] / 2 - i[l] / 2),
      (o[a] = n === a ? e[a] - i[c] : e[zt(a)]),
      o
    );
  }
  function Gt(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }
  function $t(t, e, n) {
    return (
      (void 0 === n
        ? t
        : t.slice(
            0,
            (function (t, e, n) {
              if (Array.prototype.findIndex)
                return t.findIndex(function (t) {
                  return t[e] === n;
                });
              var i = Gt(t, function (t) {
                return t[e] === n;
              });
              return t.indexOf(i);
            })(t, "name", n)
          )
      ).forEach(function (t) {
        t.function &&
          console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var n = t.function || t.fn;
        t.enabled &&
          vt(n) &&
          ((e.offsets.popper = Ht(e.offsets.popper)),
          (e.offsets.reference = Ht(e.offsets.reference)),
          (e = n(e, t)));
      }),
      e
    );
  }
  function Zt() {
    if (!this.state.isDestroyed) {
      var t = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {},
      };
      (t.offsets.reference = Yt(
        this.state,
        this.popper,
        this.reference,
        this.options.positionFixed
      )),
        (t.placement = Kt(
          this.options.placement,
          t.offsets.reference,
          this.popper,
          this.reference,
          this.options.modifiers.flip.boundariesElement,
          this.options.modifiers.flip.padding
        )),
        (t.originalPlacement = t.placement),
        (t.positionFixed = this.options.positionFixed),
        (t.offsets.popper = Xt(this.popper, t.offsets.reference, t.placement)),
        (t.offsets.popper.position = this.options.positionFixed
          ? "fixed"
          : "absolute"),
        (t = $t(this.modifiers, t)),
        this.state.isCreated
          ? this.options.onUpdate(t)
          : ((this.state.isCreated = !0), this.options.onCreate(t));
    }
  }
  function Jt(t, e) {
    return t.some(function (t) {
      var n = t.name;
      return t.enabled && n === e;
    });
  }
  function te(t) {
    for (
      var e = [!1, "ms", "Webkit", "Moz", "O"],
        n = t.charAt(0).toUpperCase() + t.slice(1),
        i = 0;
      i < e.length;
      i++
    ) {
      var o = e[i],
        r = o ? "" + o + n : t;
      if (void 0 !== document.body.style[r]) return r;
    }
    return null;
  }
  function ee() {
    return (
      (this.state.isDestroyed = !0),
      Jt(this.modifiers, "applyStyle") &&
        (this.popper.removeAttribute("x-placement"),
        (this.popper.style.position = ""),
        (this.popper.style.top = ""),
        (this.popper.style.left = ""),
        (this.popper.style.right = ""),
        (this.popper.style.bottom = ""),
        (this.popper.style.willChange = ""),
        (this.popper.style[te("transform")] = "")),
      this.disableEventListeners(),
      this.options.removeOnDestroy &&
        this.popper.parentNode.removeChild(this.popper),
      this
    );
  }
  function ne(t) {
    var e = t.ownerDocument;
    return e ? e.defaultView : window;
  }
  function ie(t, e, n, i) {
    (n.updateBound = i),
      ne(t).addEventListener("resize", n.updateBound, { passive: !0 });
    var o = yt(t);
    return (
      (function t(e, n, i, o) {
        var r = "BODY" === e.nodeName,
          s = r ? e.ownerDocument.defaultView : e;
        s.addEventListener(n, i, { passive: !0 }),
          r || t(yt(s.parentNode), n, i, o),
          o.push(s);
      })(o, "scroll", n.updateBound, n.scrollParents),
      (n.scrollElement = o),
      (n.eventsEnabled = !0),
      n
    );
  }
  function oe() {
    this.state.eventsEnabled ||
      (this.state = ie(
        this.reference,
        this.options,
        this.state,
        this.scheduleUpdate
      ));
  }
  function re() {
    var t, e;
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate),
      (this.state =
        ((t = this.reference),
        (e = this.state),
        ne(t).removeEventListener("resize", e.updateBound),
        e.scrollParents.forEach(function (t) {
          t.removeEventListener("scroll", e.updateBound);
        }),
        (e.updateBound = null),
        (e.scrollParents = []),
        (e.scrollElement = null),
        (e.eventsEnabled = !1),
        e)));
  }
  function se(t) {
    return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
  }
  function ae(t, e) {
    Object.keys(e).forEach(function (n) {
      var i = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) &&
        se(e[n]) &&
        (i = "px"),
        (t.style[n] = e[n] + i);
    });
  }
  var le = pt && /Firefox/i.test(navigator.userAgent);
  function ce(t, e, n) {
    var i = Gt(t, function (t) {
        return t.name === e;
      }),
      o =
        !!i &&
        t.some(function (t) {
          return t.name === n && t.enabled && t.order < i.order;
        });
    if (!o) {
      var r = "`" + e + "`",
        s = "`" + n + "`";
      console.warn(
        s +
          " modifier is required by " +
          r +
          " modifier in order to work, be sure to include it before " +
          r +
          "!"
      );
    }
    return o;
  }
  var ue = [
      "auto-start",
      "auto",
      "auto-end",
      "top-start",
      "top",
      "top-end",
      "right-start",
      "right",
      "right-end",
      "bottom-end",
      "bottom",
      "bottom-start",
      "left-end",
      "left",
      "left-start",
    ],
    fe = ue.slice(3);
  function he(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = fe.indexOf(t),
      i = fe.slice(n + 1).concat(fe.slice(0, n));
    return e ? i.reverse() : i;
  }
  var de = "flip",
    pe = "clockwise",
    ge = "counterclockwise";
  function me(t, e, n, i) {
    var o = [0, 0],
      r = -1 !== ["right", "left"].indexOf(i),
      s = t.split(/(\+|\-)/).map(function (t) {
        return t.trim();
      }),
      a = s.indexOf(
        Gt(s, function (t) {
          return -1 !== t.search(/,|\s/);
        })
      );
    s[a] &&
      -1 === s[a].indexOf(",") &&
      console.warn(
        "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
      );
    var l = /\s*,\s*|\s+/,
      c =
        -1 !== a
          ? [
              s.slice(0, a).concat([s[a].split(l)[0]]),
              [s[a].split(l)[1]].concat(s.slice(a + 1)),
            ]
          : [s];
    return (
      (c = c.map(function (t, i) {
        var o = (1 === i ? !r : r) ? "height" : "width",
          s = !1;
        return t
          .reduce(function (t, e) {
            return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e)
              ? ((t[t.length - 1] = e), (s = !0), t)
              : s
              ? ((t[t.length - 1] += e), (s = !1), t)
              : t.concat(e);
          }, [])
          .map(function (t) {
            return (function (t, e, n, i) {
              var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                r = +o[1],
                s = o[2];
              if (!r) return t;
              if (0 === s.indexOf("%")) {
                var a = void 0;
                switch (s) {
                  case "%p":
                    a = n;
                    break;
                  case "%":
                  case "%r":
                  default:
                    a = i;
                }
                return (Ht(a)[e] / 100) * r;
              }
              if ("vh" === s || "vw" === s)
                return (
                  (("vh" === s
                    ? Math.max(
                        document.documentElement.clientHeight,
                        window.innerHeight || 0
                      )
                    : Math.max(
                        document.documentElement.clientWidth,
                        window.innerWidth || 0
                      )) /
                    100) *
                  r
                );
              return r;
            })(t, o, e, n);
          });
      })).forEach(function (t, e) {
        t.forEach(function (n, i) {
          se(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1));
        });
      }),
      o
    );
  }
  var ve = {
      placement: "bottom",
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function (t) {
            var e = t.placement,
              n = e.split("-")[0],
              i = e.split("-")[1];
            if (i) {
              var o = t.offsets,
                r = o.reference,
                s = o.popper,
                a = -1 !== ["bottom", "top"].indexOf(n),
                l = a ? "left" : "top",
                c = a ? "width" : "height",
                u = {
                  start: Pt({}, l, r[l]),
                  end: Pt({}, l, r[l] + r[c] - s[c]),
                };
              t.offsets.popper = Mt({}, s, u[i]);
            }
            return t;
          },
        },
        offset: {
          order: 200,
          enabled: !0,
          fn: function (t, e) {
            var n = e.offset,
              i = t.placement,
              o = t.offsets,
              r = o.popper,
              s = o.reference,
              a = i.split("-")[0],
              l = void 0;
            return (
              (l = se(+n) ? [+n, 0] : me(n, r, s, a)),
              "left" === a
                ? ((r.top += l[0]), (r.left -= l[1]))
                : "right" === a
                ? ((r.top += l[0]), (r.left += l[1]))
                : "top" === a
                ? ((r.left += l[0]), (r.top -= l[1]))
                : "bottom" === a && ((r.left += l[0]), (r.top += l[1])),
              (t.popper = r),
              t
            );
          },
          offset: 0,
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function (t, e) {
            var n = e.boundariesElement || kt(t.instance.popper);
            t.instance.reference === n && (n = kt(n));
            var i = te("transform"),
              o = t.instance.popper.style,
              r = o.top,
              s = o.left,
              a = o[i];
            (o.top = ""), (o.left = ""), (o[i] = "");
            var l = Qt(
              t.instance.popper,
              t.instance.reference,
              e.padding,
              n,
              t.positionFixed
            );
            (o.top = r), (o.left = s), (o[i] = a), (e.boundaries = l);
            var c = e.priority,
              u = t.offsets.popper,
              f = {
                primary: function (t) {
                  var n = u[t];
                  return (
                    u[t] < l[t] &&
                      !e.escapeWithReference &&
                      (n = Math.max(u[t], l[t])),
                    Pt({}, t, n)
                  );
                },
                secondary: function (t) {
                  var n = "right" === t ? "left" : "top",
                    i = u[n];
                  return (
                    u[t] > l[t] &&
                      !e.escapeWithReference &&
                      (i = Math.min(
                        u[n],
                        l[t] - ("right" === t ? u.width : u.height)
                      )),
                    Pt({}, n, i)
                  );
                },
              };
            return (
              c.forEach(function (t) {
                var e =
                  -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                u = Mt({}, u, f[e](t));
              }),
              (t.offsets.popper = u),
              t
            );
          },
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent",
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function (t) {
            var e = t.offsets,
              n = e.popper,
              i = e.reference,
              o = t.placement.split("-")[0],
              r = Math.floor,
              s = -1 !== ["top", "bottom"].indexOf(o),
              a = s ? "right" : "bottom",
              l = s ? "left" : "top",
              c = s ? "width" : "height";
            return (
              n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]),
              n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])),
              t
            );
          },
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function (t, e) {
            var n;
            if (!ce(t.instance.modifiers, "arrow", "keepTogether")) return t;
            var i = e.element;
            if ("string" == typeof i) {
              if (!(i = t.instance.popper.querySelector(i))) return t;
            } else if (!t.instance.popper.contains(i))
              return (
                console.warn(
                  "WARNING: `arrow.element` must be child of its popper element!"
                ),
                t
              );
            var o = t.placement.split("-")[0],
              r = t.offsets,
              s = r.popper,
              a = r.reference,
              l = -1 !== ["left", "right"].indexOf(o),
              c = l ? "height" : "width",
              u = l ? "Top" : "Left",
              f = u.toLowerCase(),
              h = l ? "left" : "top",
              d = l ? "bottom" : "right",
              p = qt(i)[c];
            a[d] - p < s[f] && (t.offsets.popper[f] -= s[f] - (a[d] - p)),
              a[f] + p > s[d] && (t.offsets.popper[f] += a[f] + p - s[d]),
              (t.offsets.popper = Ht(t.offsets.popper));
            var g = a[f] + a[c] / 2 - p / 2,
              m = _t(t.instance.popper),
              v = parseFloat(m["margin" + u]),
              _ = parseFloat(m["border" + u + "Width"]),
              b = g - t.offsets.popper[f] - v - _;
            return (
              (b = Math.max(Math.min(s[c] - p, b), 0)),
              (t.arrowElement = i),
              (t.offsets.arrow =
                (Pt((n = {}), f, Math.round(b)), Pt(n, h, ""), n)),
              t
            );
          },
          element: "[x-arrow]",
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function (t, e) {
            if (Jt(t.instance.modifiers, "inner")) return t;
            if (t.flipped && t.placement === t.originalPlacement) return t;
            var n = Qt(
                t.instance.popper,
                t.instance.reference,
                e.padding,
                e.boundariesElement,
                t.positionFixed
              ),
              i = t.placement.split("-")[0],
              o = zt(i),
              r = t.placement.split("-")[1] || "",
              s = [];
            switch (e.behavior) {
              case de:
                s = [i, o];
                break;
              case pe:
                s = he(i);
                break;
              case ge:
                s = he(i, !0);
                break;
              default:
                s = e.behavior;
            }
            return (
              s.forEach(function (a, l) {
                if (i !== a || s.length === l + 1) return t;
                (i = t.placement.split("-")[0]), (o = zt(i));
                var c = t.offsets.popper,
                  u = t.offsets.reference,
                  f = Math.floor,
                  h =
                    ("left" === i && f(c.right) > f(u.left)) ||
                    ("right" === i && f(c.left) < f(u.right)) ||
                    ("top" === i && f(c.bottom) > f(u.top)) ||
                    ("bottom" === i && f(c.top) < f(u.bottom)),
                  d = f(c.left) < f(n.left),
                  p = f(c.right) > f(n.right),
                  g = f(c.top) < f(n.top),
                  m = f(c.bottom) > f(n.bottom),
                  v =
                    ("left" === i && d) ||
                    ("right" === i && p) ||
                    ("top" === i && g) ||
                    ("bottom" === i && m),
                  _ = -1 !== ["top", "bottom"].indexOf(i),
                  b =
                    !!e.flipVariations &&
                    ((_ && "start" === r && d) ||
                      (_ && "end" === r && p) ||
                      (!_ && "start" === r && g) ||
                      (!_ && "end" === r && m)),
                  y =
                    !!e.flipVariationsByContent &&
                    ((_ && "start" === r && p) ||
                      (_ && "end" === r && d) ||
                      (!_ && "start" === r && m) ||
                      (!_ && "end" === r && g)),
                  w = b || y;
                (h || v || w) &&
                  ((t.flipped = !0),
                  (h || v) && (i = s[l + 1]),
                  w &&
                    (r = (function (t) {
                      return "end" === t ? "start" : "start" === t ? "end" : t;
                    })(r)),
                  (t.placement = i + (r ? "-" + r : "")),
                  (t.offsets.popper = Mt(
                    {},
                    t.offsets.popper,
                    Xt(t.instance.popper, t.offsets.reference, t.placement)
                  )),
                  (t = $t(t.instance.modifiers, t, "flip")));
              }),
              t
            );
          },
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport",
          flipVariations: !1,
          flipVariationsByContent: !1,
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function (t) {
            var e = t.placement,
              n = e.split("-")[0],
              i = t.offsets,
              o = i.popper,
              r = i.reference,
              s = -1 !== ["left", "right"].indexOf(n),
              a = -1 === ["top", "left"].indexOf(n);
            return (
              (o[s ? "left" : "top"] =
                r[n] - (a ? o[s ? "width" : "height"] : 0)),
              (t.placement = zt(e)),
              (t.offsets.popper = Ht(o)),
              t
            );
          },
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function (t) {
            if (!ce(t.instance.modifiers, "hide", "preventOverflow")) return t;
            var e = t.offsets.reference,
              n = Gt(t.instance.modifiers, function (t) {
                return "preventOverflow" === t.name;
              }).boundaries;
            if (
              e.bottom < n.top ||
              e.left > n.right ||
              e.top > n.bottom ||
              e.right < n.left
            ) {
              if (!0 === t.hide) return t;
              (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
            } else {
              if (!1 === t.hide) return t;
              (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
            }
            return t;
          },
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function (t, e) {
            var n = e.x,
              i = e.y,
              o = t.offsets.popper,
              r = Gt(t.instance.modifiers, function (t) {
                return "applyStyle" === t.name;
              }).gpuAcceleration;
            void 0 !== r &&
              console.warn(
                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
              );
            var s = void 0 !== r ? r : e.gpuAcceleration,
              a = kt(t.instance.popper),
              l = Bt(a),
              c = { position: o.position },
              u = (function (t, e) {
                var n = t.offsets,
                  i = n.popper,
                  o = n.reference,
                  r = Math.round,
                  s = Math.floor,
                  a = function (t) {
                    return t;
                  },
                  l = r(o.width),
                  c = r(i.width),
                  u = -1 !== ["left", "right"].indexOf(t.placement),
                  f = -1 !== t.placement.indexOf("-"),
                  h = e ? (u || f || l % 2 == c % 2 ? r : s) : a,
                  d = e ? r : a;
                return {
                  left: h(
                    l % 2 == 1 && c % 2 == 1 && !f && e ? i.left - 1 : i.left
                  ),
                  top: d(i.top),
                  bottom: d(i.bottom),
                  right: h(i.right),
                };
              })(t, window.devicePixelRatio < 2 || !le),
              f = "bottom" === n ? "top" : "bottom",
              h = "right" === i ? "left" : "right",
              d = te("transform"),
              p = void 0,
              g = void 0;
            if (
              ((g =
                "bottom" === f
                  ? "HTML" === a.nodeName
                    ? -a.clientHeight + u.bottom
                    : -l.height + u.bottom
                  : u.top),
              (p =
                "right" === h
                  ? "HTML" === a.nodeName
                    ? -a.clientWidth + u.right
                    : -l.width + u.right
                  : u.left),
              s && d)
            )
              (c[d] = "translate3d(" + p + "px, " + g + "px, 0)"),
                (c[f] = 0),
                (c[h] = 0),
                (c.willChange = "transform");
            else {
              var m = "bottom" === f ? -1 : 1,
                v = "right" === h ? -1 : 1;
              (c[f] = g * m), (c[h] = p * v), (c.willChange = f + ", " + h);
            }
            var _ = { "x-placement": t.placement };
            return (
              (t.attributes = Mt({}, _, t.attributes)),
              (t.styles = Mt({}, c, t.styles)),
              (t.arrowStyles = Mt({}, t.offsets.arrow, t.arrowStyles)),
              t
            );
          },
          gpuAcceleration: !0,
          x: "bottom",
          y: "right",
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function (t) {
            return (
              ae(t.instance.popper, t.styles),
              (function (t, e) {
                Object.keys(e).forEach(function (n) {
                  !1 !== e[n] ? t.setAttribute(n, e[n]) : t.removeAttribute(n);
                });
              })(t.instance.popper, t.attributes),
              t.arrowElement &&
                Object.keys(t.arrowStyles).length &&
                ae(t.arrowElement, t.arrowStyles),
              t
            );
          },
          onLoad: function (t, e, n, i, o) {
            var r = Yt(o, e, t, n.positionFixed),
              s = Kt(
                n.placement,
                r,
                e,
                t,
                n.modifiers.flip.boundariesElement,
                n.modifiers.flip.padding
              );
            return (
              e.setAttribute("x-placement", s),
              ae(e, { position: n.positionFixed ? "fixed" : "absolute" }),
              n
            );
          },
          gpuAcceleration: void 0,
        },
      },
    },
    _e = (function () {
      function t(e, n) {
        var i = this,
          o =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        It(this, t),
          (this.scheduleUpdate = function () {
            return requestAnimationFrame(i.update);
          }),
          (this.update = mt(this.update.bind(this))),
          (this.options = Mt({}, t.Defaults, o)),
          (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
          (this.reference = e && e.jquery ? e[0] : e),
          (this.popper = n && n.jquery ? n[0] : n),
          (this.options.modifiers = {}),
          Object.keys(Mt({}, t.Defaults.modifiers, o.modifiers)).forEach(
            function (e) {
              i.options.modifiers[e] = Mt(
                {},
                t.Defaults.modifiers[e] || {},
                o.modifiers ? o.modifiers[e] : {}
              );
            }
          ),
          (this.modifiers = Object.keys(this.options.modifiers)
            .map(function (t) {
              return Mt({ name: t }, i.options.modifiers[t]);
            })
            .sort(function (t, e) {
              return t.order - e.order;
            })),
          this.modifiers.forEach(function (t) {
            t.enabled &&
              vt(t.onLoad) &&
              t.onLoad(i.reference, i.popper, i.options, t, i.state);
          }),
          this.update();
        var r = this.options.eventsEnabled;
        r && this.enableEventListeners(), (this.state.eventsEnabled = r);
      }
      return (
        jt(t, [
          {
            key: "update",
            value: function () {
              return Zt.call(this);
            },
          },
          {
            key: "destroy",
            value: function () {
              return ee.call(this);
            },
          },
          {
            key: "enableEventListeners",
            value: function () {
              return oe.call(this);
            },
          },
          {
            key: "disableEventListeners",
            value: function () {
              return re.call(this);
            },
          },
        ]),
        t
      );
    })();
  (_e.Utils = ("undefined" != typeof window ? window : global).PopperUtils),
    (_e.placements = ue),
    (_e.Defaults = ve);
  var be = "dropdown",
    ye = new RegExp("ArrowUp|ArrowDown|Escape"),
    we = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
    },
    Ee = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string",
      popperConfig: "(null|object)",
    },
    Te = (function () {
      function t(t, e) {
        (this._element = t),
          (this._popper = null),
          (this._config = this._getConfig(e)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners(),
          w(t, "bs.dropdown", this);
      }
      var i = t.prototype;
      return (
        (i.toggle = function () {
          if (
            !this._element.disabled &&
            !this._element.classList.contains("disabled")
          ) {
            var e = this._element.classList.contains("show");
            t.clearMenus(), e || this.show();
          }
        }),
        (i.show = function () {
          if (
            !(
              this._element.disabled ||
              this._element.classList.contains("disabled") ||
              this._menu.classList.contains("show")
            )
          ) {
            var e = t.getParentFromElement(this._element),
              n = { relatedTarget: this._element };
            if (
              !U.trigger(this._element, "show.bs.dropdown", n).defaultPrevented
            ) {
              if (!this._inNavbar) {
                if (void 0 === _e)
                  throw new TypeError(
                    "Bootstrap's dropdowns require Popper.js (https://popper.js.org)"
                  );
                var i = this._element;
                "parent" === this._config.reference
                  ? (i = e)
                  : d(this._config.reference) &&
                    ((i = this._config.reference),
                    void 0 !== this._config.reference.jquery &&
                      (i = this._config.reference[0])),
                  "scrollParent" !== this._config.boundary &&
                    e.classList.add("position-static"),
                  (this._popper = new _e(
                    i,
                    this._menu,
                    this._getPopperConfig()
                  ));
              }
              var o;
              if (
                "ontouchstart" in document.documentElement &&
                !e.closest(".navbar-nav")
              )
                (o = []).concat
                  .apply(o, document.body.children)
                  .forEach(function (t) {
                    return U.on(t, "mouseover", null, function () {});
                  });
              this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                Z.toggleClass(this._menu, "show"),
                Z.toggleClass(this._element, "show"),
                U.trigger(e, "shown.bs.dropdown", n);
            }
          }
        }),
        (i.hide = function () {
          if (
            !this._element.disabled &&
            !this._element.classList.contains("disabled") &&
            this._menu.classList.contains("show")
          ) {
            var e = t.getParentFromElement(this._element),
              n = { relatedTarget: this._element };
            U.trigger(e, "hide.bs.dropdown", n).defaultPrevented ||
              (this._popper && this._popper.destroy(),
              Z.toggleClass(this._menu, "show"),
              Z.toggleClass(this._element, "show"),
              U.trigger(e, "hidden.bs.dropdown", n));
          }
        }),
        (i.dispose = function () {
          T(this._element, "bs.dropdown"),
            U.off(this._element, ".bs.dropdown"),
            (this._element = null),
            (this._menu = null),
            this._popper && (this._popper.destroy(), (this._popper = null));
        }),
        (i.update = function () {
          (this._inNavbar = this._detectNavbar()),
            this._popper && this._popper.scheduleUpdate();
        }),
        (i._addEventListeners = function () {
          var t = this;
          U.on(this._element, "click.bs.dropdown", function (e) {
            e.preventDefault(), e.stopPropagation(), t.toggle();
          });
        }),
        (i._getConfig = function (t) {
          return (
            (t = n(
              {},
              this.constructor.Default,
              Z.getDataAttributes(this._element),
              t
            )),
            g(be, t, this.constructor.DefaultType),
            t
          );
        }),
        (i._getMenuElement = function () {
          return J.next(this._element, ".dropdown-menu")[0];
        }),
        (i._getPlacement = function () {
          var t = this._element.parentNode,
            e = "bottom-start";
          return (
            t.classList.contains("dropup")
              ? ((e = "top-start"),
                this._menu.classList.contains("dropdown-menu-right") &&
                  (e = "top-end"))
              : t.classList.contains("dropright")
              ? (e = "right-start")
              : t.classList.contains("dropleft")
              ? (e = "left-start")
              : this._menu.classList.contains("dropdown-menu-right") &&
                (e = "bottom-end"),
            e
          );
        }),
        (i._detectNavbar = function () {
          return Boolean(this._element.closest(".navbar"));
        }),
        (i._getOffset = function () {
          var t = this,
            e = {};
          return (
            "function" == typeof this._config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = n(
                      {},
                      e.offsets,
                      t._config.offset(e.offsets, t._element) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this._config.offset),
            e
          );
        }),
        (i._getPopperConfig = function () {
          var t = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: { enabled: this._config.flip },
              preventOverflow: { boundariesElement: this._config.boundary },
            },
          };
          return (
            "static" === this._config.display &&
              (t.modifiers.applyStyle = { enabled: !1 }),
            n({}, t, this._config.popperConfig)
          );
        }),
        (t.dropdownInterface = function (e, n) {
          var i = E(e, "bs.dropdown");
          if (
            (i || (i = new t(e, "object" == typeof n ? n : null)),
            "string" == typeof n)
          ) {
            if (void 0 === i[n])
              throw new TypeError('No method named "' + n + '"');
            i[n]();
          }
        }),
        (t.jQueryInterface = function (e) {
          return this.each(function () {
            t.dropdownInterface(this, e);
          });
        }),
        (t.clearMenus = function (e) {
          if (!e || (2 !== e.button && ("keyup" !== e.type || "Tab" === e.key)))
            for (
              var n = J.find('[data-toggle="dropdown"]'), i = 0, o = n.length;
              i < o;
              i++
            ) {
              var r = t.getParentFromElement(n[i]),
                s = E(n[i], "bs.dropdown"),
                a = { relatedTarget: n[i] };
              if ((e && "click" === e.type && (a.clickEvent = e), s)) {
                var l = s._menu;
                if (n[i].classList.contains("show"))
                  if (
                    !(
                      e &&
                      (("click" === e.type &&
                        /input|textarea/i.test(e.target.tagName)) ||
                        ("keyup" === e.type && "Tab" === e.key)) &&
                      l.contains(e.target)
                    )
                  )
                    if (!U.trigger(r, "hide.bs.dropdown", a).defaultPrevented) {
                      var c;
                      if ("ontouchstart" in document.documentElement)
                        (c = []).concat
                          .apply(c, document.body.children)
                          .forEach(function (t) {
                            return U.off(t, "mouseover", null, function () {});
                          });
                      n[i].setAttribute("aria-expanded", "false"),
                        s._popper && s._popper.destroy(),
                        l.classList.remove("show"),
                        n[i].classList.remove("show"),
                        U.trigger(r, "hidden.bs.dropdown", a);
                    }
              }
            }
        }),
        (t.getParentFromElement = function (t) {
          return u(t) || t.parentNode;
        }),
        (t.dataApiKeydownHandler = function (e) {
          if (
            !(/input|textarea/i.test(e.target.tagName)
              ? "Space" === e.key ||
                ("Escape" !== e.key &&
                  (("ArrowDown" !== e.key && "ArrowUp" !== e.key) ||
                    e.target.closest(".dropdown-menu")))
              : !ye.test(e.key)) &&
            (e.preventDefault(),
            e.stopPropagation(),
            !this.disabled && !this.classList.contains("disabled"))
          ) {
            var n = t.getParentFromElement(this),
              i = this.classList.contains("show");
            if ("Escape" === e.key)
              return (
                (this.matches('[data-toggle="dropdown"]')
                  ? this
                  : J.prev(this, '[data-toggle="dropdown"]')[0]
                ).focus(),
                void t.clearMenus()
              );
            if (i && "Space" !== e.key) {
              var o = J.find(
                ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                n
              ).filter(m);
              if (o.length) {
                var r = o.indexOf(e.target);
                "ArrowUp" === e.key && r > 0 && r--,
                  "ArrowDown" === e.key && r < o.length - 1 && r++,
                  o[(r = -1 === r ? 0 : r)].focus();
              }
            } else t.clearMenus();
          }
        }),
        (t.getInstance = function (t) {
          return E(t, "bs.dropdown");
        }),
        e(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "5.0.0-alpha2";
            },
          },
          {
            key: "Default",
            get: function () {
              return we;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return Ee;
            },
          },
        ]),
        t
      );
    })();
  U.on(
    document,
    "keydown.bs.dropdown.data-api",
    '[data-toggle="dropdown"]',
    Te.dataApiKeydownHandler
  ),
    U.on(
      document,
      "keydown.bs.dropdown.data-api",
      ".dropdown-menu",
      Te.dataApiKeydownHandler
    ),
    U.on(document, "click.bs.dropdown.data-api", Te.clearMenus),
    U.on(document, "keyup.bs.dropdown.data-api", Te.clearMenus),
    U.on(
      document,
      "click.bs.dropdown.data-api",
      '[data-toggle="dropdown"]',
      function (t) {
        t.preventDefault(),
          t.stopPropagation(),
          Te.dropdownInterface(this, "toggle");
      }
    ),
    U.on(
      document,
      "click.bs.dropdown.data-api",
      ".dropdown form",
      function (t) {
        return t.stopPropagation();
      }
    );
  var Le = b();
  if (Le) {
    var ke = Le.fn[be];
    (Le.fn[be] = Te.jQueryInterface),
      (Le.fn[be].Constructor = Te),
      (Le.fn[be].noConflict = function () {
        return (Le.fn[be] = ke), Te.jQueryInterface;
      });
  }
  var Ce = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
    Ae = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean",
    },
    Oe = (function () {
      function t(t, e) {
        (this._config = this._getConfig(e)),
          (this._element = t),
          (this._dialog = J.findOne(".modal-dialog", t)),
          (this._backdrop = null),
          (this._isShown = !1),
          (this._isBodyOverflowing = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollbarWidth = 0),
          w(t, "bs.modal", this);
      }
      var i = t.prototype;
      return (
        (i.toggle = function (t) {
          return this._isShown ? this.hide() : this.show(t);
        }),
        (i.show = function (t) {
          var e = this;
          if (!this._isShown && !this._isTransitioning) {
            this._element.classList.contains("fade") &&
              (this._isTransitioning = !0);
            var n = U.trigger(this._element, "show.bs.modal", {
              relatedTarget: t,
            });
            this._isShown ||
              n.defaultPrevented ||
              ((this._isShown = !0),
              this._checkScrollbar(),
              this._setScrollbar(),
              this._adjustDialog(),
              this._setEscapeEvent(),
              this._setResizeEvent(),
              U.on(
                this._element,
                "click.dismiss.bs.modal",
                '[data-dismiss="modal"]',
                function (t) {
                  return e.hide(t);
                }
              ),
              U.on(this._dialog, "mousedown.dismiss.bs.modal", function () {
                U.one(e._element, "mouseup.dismiss.bs.modal", function (t) {
                  t.target === e._element && (e._ignoreBackdropClick = !0);
                });
              }),
              this._showBackdrop(function () {
                return e._showElement(t);
              }));
          }
        }),
        (i.hide = function (t) {
          var e = this;
          if (
            (t && t.preventDefault(),
            this._isShown && !this._isTransitioning) &&
            !U.trigger(this._element, "hide.bs.modal").defaultPrevented
          ) {
            this._isShown = !1;
            var n = this._element.classList.contains("fade");
            if (
              (n && (this._isTransitioning = !0),
              this._setEscapeEvent(),
              this._setResizeEvent(),
              U.off(document, "focusin.bs.modal"),
              this._element.classList.remove("show"),
              U.off(this._element, "click.dismiss.bs.modal"),
              U.off(this._dialog, "mousedown.dismiss.bs.modal"),
              n)
            ) {
              var i = f(this._element);
              U.one(this._element, "transitionend", function (t) {
                return e._hideModal(t);
              }),
                p(this._element, i);
            } else this._hideModal();
          }
        }),
        (i.dispose = function () {
          [window, this._element, this._dialog].forEach(function (t) {
            return U.off(t, ".bs.modal");
          }),
            U.off(document, "focusin.bs.modal"),
            T(this._element, "bs.modal"),
            (this._config = null),
            (this._element = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._isTransitioning = null),
            (this._scrollbarWidth = null);
        }),
        (i.handleUpdate = function () {
          this._adjustDialog();
        }),
        (i._getConfig = function (t) {
          return (t = n({}, Ce, t)), g("modal", t, Ae), t;
        }),
        (i._showElement = function (t) {
          var e = this,
            n = this._element.classList.contains("fade"),
            i = J.findOne(".modal-body", this._dialog);
          (this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = "block"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            (this._element.scrollTop = 0),
            i && (i.scrollTop = 0),
            n && _(this._element),
            this._element.classList.add("show"),
            this._config.focus && this._enforceFocus();
          var o = function () {
            e._config.focus && e._element.focus(),
              (e._isTransitioning = !1),
              U.trigger(e._element, "shown.bs.modal", { relatedTarget: t });
          };
          if (n) {
            var r = f(this._dialog);
            U.one(this._dialog, "transitionend", o), p(this._dialog, r);
          } else o();
        }),
        (i._enforceFocus = function () {
          var t = this;
          U.off(document, "focusin.bs.modal"),
            U.on(document, "focusin.bs.modal", function (e) {
              document === e.target ||
                t._element === e.target ||
                t._element.contains(e.target) ||
                t._element.focus();
            });
        }),
        (i._setEscapeEvent = function () {
          var t = this;
          this._isShown
            ? U.on(this._element, "keydown.dismiss.bs.modal", function (e) {
                t._config.keyboard && "Escape" === e.key
                  ? (e.preventDefault(), t.hide())
                  : t._config.keyboard ||
                    "Escape" !== e.key ||
                    t._triggerBackdropTransition();
              })
            : U.off(this._element, "keydown.dismiss.bs.modal");
        }),
        (i._setResizeEvent = function () {
          var t = this;
          this._isShown
            ? U.on(window, "resize.bs.modal", function () {
                return t._adjustDialog();
              })
            : U.off(window, "resize.bs.modal");
        }),
        (i._hideModal = function () {
          var t = this;
          (this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            (this._isTransitioning = !1),
            this._showBackdrop(function () {
              document.body.classList.remove("modal-open"),
                t._resetAdjustments(),
                t._resetScrollbar(),
                U.trigger(t._element, "hidden.bs.modal");
            });
        }),
        (i._removeBackdrop = function () {
          this._backdrop.parentNode.removeChild(this._backdrop),
            (this._backdrop = null);
        }),
        (i._showBackdrop = function (t) {
          var e = this,
            n = this._element.classList.contains("fade") ? "fade" : "";
          if (this._isShown && this._config.backdrop) {
            if (
              ((this._backdrop = document.createElement("div")),
              (this._backdrop.className = "modal-backdrop"),
              n && this._backdrop.classList.add(n),
              document.body.appendChild(this._backdrop),
              U.on(this._element, "click.dismiss.bs.modal", function (t) {
                e._ignoreBackdropClick
                  ? (e._ignoreBackdropClick = !1)
                  : t.target === t.currentTarget &&
                    e._triggerBackdropTransition();
              }),
              n && _(this._backdrop),
              this._backdrop.classList.add("show"),
              !n)
            )
              return void t();
            var i = f(this._backdrop);
            U.one(this._backdrop, "transitionend", t), p(this._backdrop, i);
          } else if (!this._isShown && this._backdrop) {
            this._backdrop.classList.remove("show");
            var o = function () {
              e._removeBackdrop(), t();
            };
            if (this._element.classList.contains("fade")) {
              var r = f(this._backdrop);
              U.one(this._backdrop, "transitionend", o), p(this._backdrop, r);
            } else o();
          } else t();
        }),
        (i._triggerBackdropTransition = function () {
          var t = this;
          if ("static" === this._config.backdrop) {
            if (
              U.trigger(this._element, "hidePrevented.bs.modal")
                .defaultPrevented
            )
              return;
            var e =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            e || (this._element.style.overflowY = "hidden"),
              this._element.classList.add("modal-static");
            var n = f(this._dialog);
            U.off(this._element, "transitionend"),
              U.one(this._element, "transitionend", function () {
                t._element.classList.remove("modal-static"),
                  e ||
                    (U.one(t._element, "transitionend", function () {
                      t._element.style.overflowY = "";
                    }),
                    p(t._element, n));
              }),
              p(this._element, n),
              this._element.focus();
          } else this.hide();
        }),
        (i._adjustDialog = function () {
          var t =
            this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing &&
            t &&
            (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing &&
              !t &&
              (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }),
        (i._resetAdjustments = function () {
          (this._element.style.paddingLeft = ""),
            (this._element.style.paddingRight = "");
        }),
        (i._checkScrollbar = function () {
          var t = document.body.getBoundingClientRect();
          (this._isBodyOverflowing =
            Math.round(t.left + t.right) < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth());
        }),
        (i._setScrollbar = function () {
          var t = this;
          if (this._isBodyOverflowing) {
            J.find(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top").forEach(
              function (e) {
                var n = e.style.paddingRight,
                  i = window.getComputedStyle(e)["padding-right"];
                Z.setDataAttribute(e, "padding-right", n),
                  (e.style.paddingRight =
                    parseFloat(i) + t._scrollbarWidth + "px");
              }
            ),
              J.find(".sticky-top").forEach(function (e) {
                var n = e.style.marginRight,
                  i = window.getComputedStyle(e)["margin-right"];
                Z.setDataAttribute(e, "margin-right", n),
                  (e.style.marginRight =
                    parseFloat(i) - t._scrollbarWidth + "px");
              });
            var e = document.body.style.paddingRight,
              n = window.getComputedStyle(document.body)["padding-right"];
            Z.setDataAttribute(document.body, "padding-right", e),
              (document.body.style.paddingRight =
                parseFloat(n) + this._scrollbarWidth + "px");
          }
          document.body.classList.add("modal-open");
        }),
        (i._resetScrollbar = function () {
          J.find(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top").forEach(
            function (t) {
              var e = Z.getDataAttribute(t, "padding-right");
              void 0 !== e &&
                (Z.removeDataAttribute(t, "padding-right"),
                (t.style.paddingRight = e));
            }
          ),
            J.find(".sticky-top").forEach(function (t) {
              var e = Z.getDataAttribute(t, "margin-right");
              void 0 !== e &&
                (Z.removeDataAttribute(t, "margin-right"),
                (t.style.marginRight = e));
            });
          var t = Z.getDataAttribute(document.body, "padding-right");
          void 0 === t
            ? (document.body.style.paddingRight = "")
            : (Z.removeDataAttribute(document.body, "padding-right"),
              (document.body.style.paddingRight = t));
        }),
        (i._getScrollbarWidth = function () {
          var t = document.createElement("div");
          (t.className = "modal-scrollbar-measure"),
            document.body.appendChild(t);
          var e = t.getBoundingClientRect().width - t.clientWidth;
          return document.body.removeChild(t), e;
        }),
        (t.jQueryInterface = function (e, i) {
          return this.each(function () {
            var o = E(this, "bs.modal"),
              r = n(
                {},
                Ce,
                Z.getDataAttributes(this),
                "object" == typeof e && e ? e : {}
              );
            if ((o || (o = new t(this, r)), "string" == typeof e)) {
              if (void 0 === o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e](i);
            } else r.show && o.show(i);
          });
        }),
        (t.getInstance = function (t) {
          return E(t, "bs.modal");
        }),
        e(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "5.0.0-alpha2";
            },
          },
          {
            key: "Default",
            get: function () {
              return Ce;
            },
          },
        ]),
        t
      );
    })();
  U.on(
    document,
    "click.bs.modal.data-api",
    '[data-toggle="modal"]',
    function (t) {
      var e = this,
        i = u(this);
      ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault(),
        U.one(i, "show.bs.modal", function (t) {
          t.defaultPrevented ||
            U.one(i, "hidden.bs.modal", function () {
              m(e) && e.focus();
            });
        });
      var o = E(i, "bs.modal");
      if (!o) {
        var r = n({}, Z.getDataAttributes(i), Z.getDataAttributes(this));
        o = new Oe(i, r);
      }
      o.show(this);
    }
  );
  var Se = b();
  if (Se) {
    var De = Se.fn.modal;
    (Se.fn.modal = Oe.jQueryInterface),
      (Se.fn.modal.Constructor = Oe),
      (Se.fn.modal.noConflict = function () {
        return (Se.fn.modal = De), Oe.jQueryInterface;
      });
  }
  var xe = [
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ],
    Ne = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
    Ie =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    je = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    };
  function Pe(t, e, n) {
    var i;
    if (!t.length) return t;
    if (n && "function" == typeof n) return n(t);
    for (
      var o = new window.DOMParser().parseFromString(t, "text/html"),
        r = Object.keys(e),
        s = (i = []).concat.apply(i, o.body.querySelectorAll("*")),
        a = function (t, n) {
          var i,
            o = s[t],
            a = o.nodeName.toLowerCase();
          if (-1 === r.indexOf(a))
            return o.parentNode.removeChild(o), "continue";
          var l = (i = []).concat.apply(i, o.attributes),
            c = [].concat(e["*"] || [], e[a] || []);
          l.forEach(function (t) {
            (function (t, e) {
              var n = t.nodeName.toLowerCase();
              if (-1 !== e.indexOf(n))
                return (
                  -1 === xe.indexOf(n) ||
                  Boolean(t.nodeValue.match(Ne) || t.nodeValue.match(Ie))
                );
              for (
                var i = e.filter(function (t) {
                    return t instanceof RegExp;
                  }),
                  o = 0,
                  r = i.length;
                o < r;
                o++
              )
                if (n.match(i[o])) return !0;
              return !1;
            })(t, c) || o.removeAttribute(t.nodeName);
          });
        },
        l = 0,
        c = s.length;
      l < c;
      l++
    )
      a(l);
    return o.body.innerHTML;
  }
  var Me = "tooltip",
    He = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
    Be = ["sanitize", "allowList", "sanitizeFn"],
    Re = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      allowList: "object",
      popperConfig: "(null|object)",
    },
    Fe = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left",
    },
    We = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent",
      sanitize: !0,
      sanitizeFn: null,
      allowList: je,
      popperConfig: null,
    },
    Ue = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip",
    },
    Qe = (function () {
      function t(t, e) {
        if (void 0 === _e)
          throw new TypeError(
            "Bootstrap's tooltips require Popper.js (https://popper.js.org)"
          );
        (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ""),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this.element = t),
          (this.config = this._getConfig(e)),
          (this.tip = null),
          this._setListeners(),
          w(t, this.constructor.DATA_KEY, this);
      }
      var i = t.prototype;
      return (
        (i.enable = function () {
          this._isEnabled = !0;
        }),
        (i.disable = function () {
          this._isEnabled = !1;
        }),
        (i.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled;
        }),
        (i.toggle = function (t) {
          if (this._isEnabled)
            if (t) {
              var e = this.constructor.DATA_KEY,
                n = E(t.delegateTarget, e);
              n ||
                ((n = new this.constructor(
                  t.delegateTarget,
                  this._getDelegateConfig()
                )),
                w(t.delegateTarget, e, n)),
                (n._activeTrigger.click = !n._activeTrigger.click),
                n._isWithActiveTrigger()
                  ? n._enter(null, n)
                  : n._leave(null, n);
            } else {
              if (this.getTipElement().classList.contains("show"))
                return void this._leave(null, this);
              this._enter(null, this);
            }
        }),
        (i.dispose = function () {
          clearTimeout(this._timeout),
            T(this.element, this.constructor.DATA_KEY),
            U.off(this.element, this.constructor.EVENT_KEY),
            U.off(
              this.element.closest(".modal"),
              "hide.bs.modal",
              this._hideModalHandler
            ),
            this.tip && this.tip.parentNode.removeChild(this.tip),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null),
            this._popper && this._popper.destroy(),
            (this._popper = null),
            (this.element = null),
            (this.config = null),
            (this.tip = null);
        }),
        (i.show = function () {
          var t = this;
          if ("none" === this.element.style.display)
            throw new Error("Please use show on visible elements");
          if (this.isWithContent() && this._isEnabled) {
            var e = U.trigger(this.element, this.constructor.Event.SHOW),
              n = (function t(e) {
                if (!document.documentElement.attachShadow) return null;
                if ("function" == typeof e.getRootNode) {
                  var n = e.getRootNode();
                  return n instanceof ShadowRoot ? n : null;
                }
                return e instanceof ShadowRoot
                  ? e
                  : e.parentNode
                  ? t(e.parentNode)
                  : null;
              })(this.element),
              i =
                null === n
                  ? this.element.ownerDocument.documentElement.contains(
                      this.element
                    )
                  : n.contains(this.element);
            if (e.defaultPrevented || !i) return;
            var o = this.getTipElement(),
              r = a(this.constructor.NAME);
            o.setAttribute("id", r),
              this.element.setAttribute("aria-describedby", r),
              this.setContent(),
              this.config.animation && o.classList.add("fade");
            var s =
                "function" == typeof this.config.placement
                  ? this.config.placement.call(this, o, this.element)
                  : this.config.placement,
              l = this._getAttachment(s);
            this._addAttachmentClass(l);
            var c,
              u = this._getContainer();
            if (
              (w(o, this.constructor.DATA_KEY, this),
              this.element.ownerDocument.documentElement.contains(this.tip) ||
                u.appendChild(o),
              U.trigger(this.element, this.constructor.Event.INSERTED),
              (this._popper = new _e(
                this.element,
                o,
                this._getPopperConfig(l)
              )),
              o.classList.add("show"),
              "ontouchstart" in document.documentElement)
            )
              (c = []).concat
                .apply(c, document.body.children)
                .forEach(function (t) {
                  U.on(t, "mouseover", function () {});
                });
            var h = function () {
              t.config.animation && t._fixTransition();
              var e = t._hoverState;
              (t._hoverState = null),
                U.trigger(t.element, t.constructor.Event.SHOWN),
                "out" === e && t._leave(null, t);
            };
            if (this.tip.classList.contains("fade")) {
              var d = f(this.tip);
              U.one(this.tip, "transitionend", h), p(this.tip, d);
            } else h();
          }
        }),
        (i.hide = function () {
          var t = this;
          if (this._popper) {
            var e = this.getTipElement(),
              n = function () {
                "show" !== t._hoverState &&
                  e.parentNode &&
                  e.parentNode.removeChild(e),
                  t._cleanTipClass(),
                  t.element.removeAttribute("aria-describedby"),
                  U.trigger(t.element, t.constructor.Event.HIDDEN),
                  t._popper.destroy();
              };
            if (
              !U.trigger(this.element, this.constructor.Event.HIDE)
                .defaultPrevented
            ) {
              var i;
              if (
                (e.classList.remove("show"),
                "ontouchstart" in document.documentElement)
              )
                (i = []).concat
                  .apply(i, document.body.children)
                  .forEach(function (t) {
                    return U.off(t, "mouseover", v);
                  });
              if (
                ((this._activeTrigger.click = !1),
                (this._activeTrigger.focus = !1),
                (this._activeTrigger.hover = !1),
                this.tip.classList.contains("fade"))
              ) {
                var o = f(e);
                U.one(e, "transitionend", n), p(e, o);
              } else n();
              this._hoverState = "";
            }
          }
        }),
        (i.update = function () {
          null !== this._popper && this._popper.scheduleUpdate();
        }),
        (i.isWithContent = function () {
          return Boolean(this.getTitle());
        }),
        (i.getTipElement = function () {
          if (this.tip) return this.tip;
          var t = document.createElement("div");
          return (
            (t.innerHTML = this.config.template),
            (this.tip = t.children[0]),
            this.tip
          );
        }),
        (i.setContent = function () {
          var t = this.getTipElement();
          this.setElementContent(
            J.findOne(".tooltip-inner", t),
            this.getTitle()
          ),
            t.classList.remove("fade", "show");
        }),
        (i.setElementContent = function (t, e) {
          if (null !== t)
            return "object" == typeof e && d(e)
              ? (e.jquery && (e = e[0]),
                void (this.config.html
                  ? e.parentNode !== t && ((t.innerHTML = ""), t.appendChild(e))
                  : (t.textContent = e.textContent)))
              : void (this.config.html
                  ? (this.config.sanitize &&
                      (e = Pe(
                        e,
                        this.config.allowList,
                        this.config.sanitizeFn
                      )),
                    (t.innerHTML = e))
                  : (t.textContent = e));
        }),
        (i.getTitle = function () {
          var t = this.element.getAttribute("data-original-title");
          return (
            t ||
              (t =
                "function" == typeof this.config.title
                  ? this.config.title.call(this.element)
                  : this.config.title),
            t
          );
        }),
        (i._getPopperConfig = function (t) {
          var e = this;
          return n(
            {},
            {
              placement: t,
              modifiers: {
                offset: this._getOffset(),
                flip: { behavior: this.config.fallbackPlacement },
                arrow: { element: "." + this.constructor.NAME + "-arrow" },
                preventOverflow: { boundariesElement: this.config.boundary },
              },
              onCreate: function (t) {
                t.originalPlacement !== t.placement &&
                  e._handlePopperPlacementChange(t);
              },
              onUpdate: function (t) {
                return e._handlePopperPlacementChange(t);
              },
            },
            this.config.popperConfig
          );
        }),
        (i._addAttachmentClass = function (t) {
          this.getTipElement().classList.add("bs-tooltip-" + t);
        }),
        (i._getOffset = function () {
          var t = this,
            e = {};
          return (
            "function" == typeof this.config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = n(
                      {},
                      e.offsets,
                      t.config.offset(e.offsets, t.element) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this.config.offset),
            e
          );
        }),
        (i._getContainer = function () {
          return !1 === this.config.container
            ? document.body
            : d(this.config.container)
            ? this.config.container
            : J.findOne(this.config.container);
        }),
        (i._getAttachment = function (t) {
          return Fe[t.toUpperCase()];
        }),
        (i._setListeners = function () {
          var t = this;
          this.config.trigger.split(" ").forEach(function (e) {
            if ("click" === e)
              U.on(
                t.element,
                t.constructor.Event.CLICK,
                t.config.selector,
                function (e) {
                  return t.toggle(e);
                }
              );
            else if ("manual" !== e) {
              var n =
                  "hover" === e
                    ? t.constructor.Event.MOUSEENTER
                    : t.constructor.Event.FOCUSIN,
                i =
                  "hover" === e
                    ? t.constructor.Event.MOUSELEAVE
                    : t.constructor.Event.FOCUSOUT;
              U.on(t.element, n, t.config.selector, function (e) {
                return t._enter(e);
              }),
                U.on(t.element, i, t.config.selector, function (e) {
                  return t._leave(e);
                });
            }
          }),
            (this._hideModalHandler = function () {
              t.element && t.hide();
            }),
            U.on(
              this.element.closest(".modal"),
              "hide.bs.modal",
              this._hideModalHandler
            ),
            this.config.selector
              ? (this.config = n({}, this.config, {
                  trigger: "manual",
                  selector: "",
                }))
              : this._fixTitle();
        }),
        (i._fixTitle = function () {
          var t = typeof this.element.getAttribute("data-original-title");
          (this.element.getAttribute("title") || "string" !== t) &&
            (this.element.setAttribute(
              "data-original-title",
              this.element.getAttribute("title") || ""
            ),
            this.element.setAttribute("title", ""));
        }),
        (i._enter = function (t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || E(t.delegateTarget, n)) ||
            ((e = new this.constructor(
              t.delegateTarget,
              this._getDelegateConfig()
            )),
            w(t.delegateTarget, n, e)),
            t &&
              (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
            e.getTipElement().classList.contains("show") ||
            "show" === e._hoverState
              ? (e._hoverState = "show")
              : (clearTimeout(e._timeout),
                (e._hoverState = "show"),
                e.config.delay && e.config.delay.show
                  ? (e._timeout = setTimeout(function () {
                      "show" === e._hoverState && e.show();
                    }, e.config.delay.show))
                  : e.show());
        }),
        (i._leave = function (t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || E(t.delegateTarget, n)) ||
            ((e = new this.constructor(
              t.delegateTarget,
              this._getDelegateConfig()
            )),
            w(t.delegateTarget, n, e)),
            t &&
              (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] =
                !1),
            e._isWithActiveTrigger() ||
              (clearTimeout(e._timeout),
              (e._hoverState = "out"),
              e.config.delay && e.config.delay.hide
                ? (e._timeout = setTimeout(function () {
                    "out" === e._hoverState && e.hide();
                  }, e.config.delay.hide))
                : e.hide());
        }),
        (i._isWithActiveTrigger = function () {
          for (var t in this._activeTrigger)
            if (this._activeTrigger[t]) return !0;
          return !1;
        }),
        (i._getConfig = function (t) {
          var e = Z.getDataAttributes(this.element);
          return (
            Object.keys(e).forEach(function (t) {
              -1 !== Be.indexOf(t) && delete e[t];
            }),
            t &&
              "object" == typeof t.container &&
              t.container.jquery &&
              (t.container = t.container[0]),
            "number" ==
              typeof (t = n(
                {},
                this.constructor.Default,
                e,
                "object" == typeof t && t ? t : {}
              )).delay && (t.delay = { show: t.delay, hide: t.delay }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            g(Me, t, this.constructor.DefaultType),
            t.sanitize &&
              (t.template = Pe(t.template, t.allowList, t.sanitizeFn)),
            t
          );
        }),
        (i._getDelegateConfig = function () {
          var t = {};
          if (this.config)
            for (var e in this.config)
              this.constructor.Default[e] !== this.config[e] &&
                (t[e] = this.config[e]);
          return t;
        }),
        (i._cleanTipClass = function () {
          var t = this.getTipElement(),
            e = t.getAttribute("class").match(He);
          null !== e &&
            e.length > 0 &&
            e
              .map(function (t) {
                return t.trim();
              })
              .forEach(function (e) {
                return t.classList.remove(e);
              });
        }),
        (i._handlePopperPlacementChange = function (t) {
          (this.tip = t.instance.popper),
            this._cleanTipClass(),
            this._addAttachmentClass(this._getAttachment(t.placement));
        }),
        (i._fixTransition = function () {
          var t = this.getTipElement(),
            e = this.config.animation;
          null === t.getAttribute("x-placement") &&
            (t.classList.remove("fade"),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = e));
        }),
        (t.jQueryInterface = function (e) {
          return this.each(function () {
            var n = E(this, "bs.tooltip"),
              i = "object" == typeof e && e;
            if (
              (n || !/dispose|hide/.test(e)) &&
              (n || (n = new t(this, i)), "string" == typeof e)
            ) {
              if (void 0 === n[e])
                throw new TypeError('No method named "' + e + '"');
              n[e]();
            }
          });
        }),
        (t.getInstance = function (t) {
          return E(t, "bs.tooltip");
        }),
        e(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "5.0.0-alpha2";
            },
          },
          {
            key: "Default",
            get: function () {
              return We;
            },
          },
          {
            key: "NAME",
            get: function () {
              return Me;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.tooltip";
            },
          },
          {
            key: "Event",
            get: function () {
              return Ue;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return ".bs.tooltip";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return Re;
            },
          },
        ]),
        t
      );
    })(),
    Ve = b();
  if (Ve) {
    var Ke = Ve.fn[Me];
    (Ve.fn[Me] = Qe.jQueryInterface),
      (Ve.fn[Me].Constructor = Qe),
      (Ve.fn[Me].noConflict = function () {
        return (Ve.fn[Me] = Ke), Qe.jQueryInterface;
      });
  }
  var Ye = "popover",
    qe = new RegExp("(^|\\s)bs-popover\\S+", "g"),
    ze = n({}, Qe.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    }),
    Xe = n({}, Qe.DefaultType, { content: "(string|element|function)" }),
    Ge = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover",
    },
    $e = (function (t) {
      var n, i;
      function o() {
        return t.apply(this, arguments) || this;
      }
      (i = t),
        ((n = o).prototype = Object.create(i.prototype)),
        (n.prototype.constructor = n),
        (n.__proto__ = i);
      var r = o.prototype;
      return (
        (r.isWithContent = function () {
          return this.getTitle() || this._getContent();
        }),
        (r.setContent = function () {
          var t = this.getTipElement();
          this.setElementContent(
            J.findOne(".popover-header", t),
            this.getTitle()
          );
          var e = this._getContent();
          "function" == typeof e && (e = e.call(this.element)),
            this.setElementContent(J.findOne(".popover-body", t), e),
            t.classList.remove("fade", "show");
        }),
        (r._addAttachmentClass = function (t) {
          this.getTipElement().classList.add("bs-popover-" + t);
        }),
        (r._getContent = function () {
          return (
            this.element.getAttribute("data-content") || this.config.content
          );
        }),
        (r._cleanTipClass = function () {
          var t = this.getTipElement(),
            e = t.getAttribute("class").match(qe);
          null !== e &&
            e.length > 0 &&
            e
              .map(function (t) {
                return t.trim();
              })
              .forEach(function (e) {
                return t.classList.remove(e);
              });
        }),
        (o.jQueryInterface = function (t) {
          return this.each(function () {
            var e = E(this, "bs.popover"),
              n = "object" == typeof t ? t : null;
            if (
              (e || !/dispose|hide/.test(t)) &&
              (e || ((e = new o(this, n)), w(this, "bs.popover", e)),
              "string" == typeof t)
            ) {
              if (void 0 === e[t])
                throw new TypeError('No method named "' + t + '"');
              e[t]();
            }
          });
        }),
        (o.getInstance = function (t) {
          return E(t, "bs.popover");
        }),
        e(o, null, [
          {
            key: "VERSION",
            get: function () {
              return "5.0.0-alpha2";
            },
          },
          {
            key: "Default",
            get: function () {
              return ze;
            },
          },
          {
            key: "NAME",
            get: function () {
              return Ye;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.popover";
            },
          },
          {
            key: "Event",
            get: function () {
              return Ge;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return ".bs.popover";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return Xe;
            },
          },
        ]),
        o
      );
    })(Qe),
    Ze = b();
  if (Ze) {
    var Je = Ze.fn[Ye];
    (Ze.fn[Ye] = $e.jQueryInterface),
      (Ze.fn[Ye].Constructor = $e),
      (Ze.fn[Ye].noConflict = function () {
        return (Ze.fn[Ye] = Je), $e.jQueryInterface;
      });
  }
  var tn = "scrollspy",
    en = { offset: 10, method: "auto", target: "" },
    nn = { offset: "number", method: "string", target: "(string|element)" },
    on = (function () {
      function t(t, e) {
        var n = this;
        (this._element = t),
          (this._scrollElement = "BODY" === t.tagName ? window : t),
          (this._config = this._getConfig(e)),
          (this._selector =
            this._config.target +
            " .nav-link, " +
            this._config.target +
            " .list-group-item, " +
            this._config.target +
            " .dropdown-item"),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          U.on(this._scrollElement, "scroll.bs.scrollspy", function (t) {
            return n._process(t);
          }),
          this.refresh(),
          this._process(),
          w(t, "bs.scrollspy", this);
      }
      var i = t.prototype;
      return (
        (i.refresh = function () {
          var t = this,
            e =
              this._scrollElement === this._scrollElement.window
                ? "offset"
                : "position",
            n = "auto" === this._config.method ? e : this._config.method,
            i = "position" === n ? this._getScrollTop() : 0;
          (this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight()),
            J.find(this._selector)
              .map(function (t) {
                var e = c(t),
                  o = e ? J.findOne(e) : null;
                if (o) {
                  var r = o.getBoundingClientRect();
                  if (r.width || r.height) return [Z[n](o).top + i, e];
                }
                return null;
              })
              .filter(function (t) {
                return t;
              })
              .sort(function (t, e) {
                return t[0] - e[0];
              })
              .forEach(function (e) {
                t._offsets.push(e[0]), t._targets.push(e[1]);
              });
        }),
        (i.dispose = function () {
          T(this._element, "bs.scrollspy"),
            U.off(this._scrollElement, ".bs.scrollspy"),
            (this._element = null),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null);
        }),
        (i._getConfig = function (t) {
          if (
            "string" !=
              typeof (t = n({}, en, "object" == typeof t && t ? t : {}))
                .target &&
            d(t.target)
          ) {
            var e = t.target.id;
            e || ((e = a(tn)), (t.target.id = e)), (t.target = "#" + e);
          }
          return g(tn, t, nn), t;
        }),
        (i._getScrollTop = function () {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }),
        (i._getScrollHeight = function () {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            )
          );
        }),
        (i._getOffsetHeight = function () {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }),
        (i._process = function () {
          var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();
          if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i);
          } else {
            if (
              this._activeTarget &&
              t < this._offsets[0] &&
              this._offsets[0] > 0
            )
              return (this._activeTarget = null), void this._clear();
            for (var o = this._offsets.length; o--; ) {
              this._activeTarget !== this._targets[o] &&
                t >= this._offsets[o] &&
                (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) &&
                this._activate(this._targets[o]);
            }
          }
        }),
        (i._activate = function (t) {
          (this._activeTarget = t), this._clear();
          var e = this._selector.split(",").map(function (e) {
              return (
                e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
              );
            }),
            n = J.findOne(e.join(","));
          n.classList.contains("dropdown-item")
            ? (J.findOne(
                ".dropdown-toggle",
                n.closest(".dropdown")
              ).classList.add("active"),
              n.classList.add("active"))
            : (n.classList.add("active"),
              J.parents(n, ".nav, .list-group").forEach(function (t) {
                J.prev(t, ".nav-link, .list-group-item").forEach(function (t) {
                  return t.classList.add("active");
                }),
                  J.prev(t, ".nav-item").forEach(function (t) {
                    J.children(t, ".nav-link").forEach(function (t) {
                      return t.classList.add("active");
                    });
                  });
              })),
            U.trigger(this._scrollElement, "activate.bs.scrollspy", {
              relatedTarget: t,
            });
        }),
        (i._clear = function () {
          J.find(this._selector)
            .filter(function (t) {
              return t.classList.contains("active");
            })
            .forEach(function (t) {
              return t.classList.remove("active");
            });
        }),
        (t.jQueryInterface = function (e) {
          return this.each(function () {
            var n = E(this, "bs.scrollspy");
            if (
              (n || (n = new t(this, "object" == typeof e && e)),
              "string" == typeof e)
            ) {
              if (void 0 === n[e])
                throw new TypeError('No method named "' + e + '"');
              n[e]();
            }
          });
        }),
        (t.getInstance = function (t) {
          return E(t, "bs.scrollspy");
        }),
        e(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "5.0.0-alpha2";
            },
          },
          {
            key: "Default",
            get: function () {
              return en;
            },
          },
        ]),
        t
      );
    })();
  U.on(window, "load.bs.scrollspy.data-api", function () {
    J.find('[data-spy="scroll"]').forEach(function (t) {
      return new on(t, Z.getDataAttributes(t));
    });
  });
  var rn = b();
  if (rn) {
    var sn = rn.fn[tn];
    (rn.fn[tn] = on.jQueryInterface),
      (rn.fn[tn].Constructor = on),
      (rn.fn[tn].noConflict = function () {
        return (rn.fn[tn] = sn), on.jQueryInterface;
      });
  }
  var an = (function () {
    function t(t) {
      (this._element = t), w(this._element, "bs.tab", this);
    }
    var n = t.prototype;
    return (
      (n.show = function () {
        var t = this;
        if (
          !(
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
              this._element.classList.contains("active")) ||
            this._element.classList.contains("disabled")
          )
        ) {
          var e,
            n = u(this._element),
            i = this._element.closest(".nav, .list-group");
          if (i) {
            var o =
              "UL" === i.nodeName || "OL" === i.nodeName
                ? ":scope > li > .active"
                : ".active";
            e = (e = J.find(o, i))[e.length - 1];
          }
          var r = null;
          if (
            (e &&
              (r = U.trigger(e, "hide.bs.tab", {
                relatedTarget: this._element,
              })),
            !(
              U.trigger(this._element, "show.bs.tab", { relatedTarget: e })
                .defaultPrevented ||
              (null !== r && r.defaultPrevented)
            ))
          ) {
            this._activate(this._element, i);
            var s = function () {
              U.trigger(e, "hidden.bs.tab", { relatedTarget: t._element }),
                U.trigger(t._element, "shown.bs.tab", { relatedTarget: e });
            };
            n ? this._activate(n, n.parentNode, s) : s();
          }
        }
      }),
      (n.dispose = function () {
        T(this._element, "bs.tab"), (this._element = null);
      }),
      (n._activate = function (t, e, n) {
        var i = this,
          o = (
            !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
              ? J.children(e, ".active")
              : J.find(":scope > li > .active", e)
          )[0],
          r = n && o && o.classList.contains("fade"),
          s = function () {
            return i._transitionComplete(t, o, n);
          };
        if (o && r) {
          var a = f(o);
          o.classList.remove("show"), U.one(o, "transitionend", s), p(o, a);
        } else s();
      }),
      (n._transitionComplete = function (t, e, n) {
        if (e) {
          e.classList.remove("active");
          var i = J.findOne(":scope > .dropdown-menu .active", e.parentNode);
          i && i.classList.remove("active"),
            "tab" === e.getAttribute("role") &&
              e.setAttribute("aria-selected", !1);
        }
        (t.classList.add("active"),
        "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
        _(t),
        t.classList.contains("fade") && t.classList.add("show"),
        t.parentNode && t.parentNode.classList.contains("dropdown-menu")) &&
          (t.closest(".dropdown") &&
            J.find(".dropdown-toggle").forEach(function (t) {
              return t.classList.add("active");
            }),
          t.setAttribute("aria-expanded", !0));
        n && n();
      }),
      (t.jQueryInterface = function (e) {
        return this.each(function () {
          var n = E(this, "bs.tab") || new t(this);
          if ("string" == typeof e) {
            if (void 0 === n[e])
              throw new TypeError('No method named "' + e + '"');
            n[e]();
          }
        });
      }),
      (t.getInstance = function (t) {
        return E(t, "bs.tab");
      }),
      e(t, null, [
        {
          key: "VERSION",
          get: function () {
            return "5.0.0-alpha2";
          },
        },
      ]),
      t
    );
  })();
  U.on(
    document,
    "click.bs.tab.data-api",
    '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    function (t) {
      t.preventDefault(), (E(this, "bs.tab") || new an(this)).show();
    }
  );
  var ln = b();
  if (ln) {
    var cn = ln.fn.tab;
    (ln.fn.tab = an.jQueryInterface),
      (ln.fn.tab.Constructor = an),
      (ln.fn.tab.noConflict = function () {
        return (ln.fn.tab = cn), an.jQueryInterface;
      });
  }
  var un = { animation: "boolean", autohide: "boolean", delay: "number" },
    fn = { animation: !0, autohide: !0, delay: 5e3 },
    hn = (function () {
      function t(t, e) {
        (this._element = t),
          (this._config = this._getConfig(e)),
          (this._timeout = null),
          this._setListeners(),
          w(t, "bs.toast", this);
      }
      var i = t.prototype;
      return (
        (i.show = function () {
          var t = this;
          if (!U.trigger(this._element, "show.bs.toast").defaultPrevented) {
            this._clearTimeout(),
              this._config.animation && this._element.classList.add("fade");
            var e = function () {
              t._element.classList.remove("showing"),
                t._element.classList.add("show"),
                U.trigger(t._element, "shown.bs.toast"),
                t._config.autohide &&
                  (t._timeout = setTimeout(function () {
                    t.hide();
                  }, t._config.delay));
            };
            if (
              (this._element.classList.remove("hide"),
              _(this._element),
              this._element.classList.add("showing"),
              this._config.animation)
            ) {
              var n = f(this._element);
              U.one(this._element, "transitionend", e), p(this._element, n);
            } else e();
          }
        }),
        (i.hide = function () {
          var t = this;
          if (
            this._element.classList.contains("show") &&
            !U.trigger(this._element, "hide.bs.toast").defaultPrevented
          ) {
            var e = function () {
              t._element.classList.add("hide"),
                U.trigger(t._element, "hidden.bs.toast");
            };
            if (
              (this._element.classList.remove("show"), this._config.animation)
            ) {
              var n = f(this._element);
              U.one(this._element, "transitionend", e), p(this._element, n);
            } else e();
          }
        }),
        (i.dispose = function () {
          this._clearTimeout(),
            this._element.classList.contains("show") &&
              this._element.classList.remove("show"),
            U.off(this._element, "click.dismiss.bs.toast"),
            T(this._element, "bs.toast"),
            (this._element = null),
            (this._config = null);
        }),
        (i._getConfig = function (t) {
          return (
            (t = n(
              {},
              fn,
              Z.getDataAttributes(this._element),
              "object" == typeof t && t ? t : {}
            )),
            g("toast", t, this.constructor.DefaultType),
            t
          );
        }),
        (i._setListeners = function () {
          var t = this;
          U.on(
            this._element,
            "click.dismiss.bs.toast",
            '[data-dismiss="toast"]',
            function () {
              return t.hide();
            }
          );
        }),
        (i._clearTimeout = function () {
          clearTimeout(this._timeout), (this._timeout = null);
        }),
        (t.jQueryInterface = function (e) {
          return this.each(function () {
            var n = E(this, "bs.toast");
            if (
              (n || (n = new t(this, "object" == typeof e && e)),
              "string" == typeof e)
            ) {
              if (void 0 === n[e])
                throw new TypeError('No method named "' + e + '"');
              n[e](this);
            }
          });
        }),
        (t.getInstance = function (t) {
          return E(t, "bs.toast");
        }),
        e(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "5.0.0-alpha2";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return un;
            },
          },
          {
            key: "Default",
            get: function () {
              return fn;
            },
          },
        ]),
        t
      );
    })(),
    dn = b();
  if (dn) {
    var pn = dn.fn.toast;
    (dn.fn.toast = hn.jQueryInterface),
      (dn.fn.toast.Constructor = hn),
      (dn.fn.toast.noConflict = function () {
        return (dn.fn.toast = pn), hn.jQueryInterface;
      });
  }
  return {
    Alert: V,
    Button: q,
    Carousel: rt,
    Collapse: ft,
    Dropdown: Te,
    Modal: Oe,
    Popover: $e,
    ScrollSpy: on,
    Tab: an,
    Toast: hn,
    Tooltip: Qe,
  };
});
