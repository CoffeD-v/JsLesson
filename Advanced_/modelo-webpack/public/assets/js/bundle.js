(() => {
  "use strict";
  var r,
    n,
    t,
    e,
    o,
    a,
    i,
    s,
    c,
    u,
    A,
    p,
    f,
    l,
    d = {
      122: (r, n, t) => {
        t.d(n, { Z: () => s });
        var e = t(15),
          o = t.n(e),
          a = t(645),
          i = t.n(a)()(o());
        i.push([
          r.id,
          "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap);",
        ]),
          i.push([
            r.id,
            ":root{\r\n    --primary-color: rgb(17, 86, 106);\r\n    --primary-color-darker: rgb(9, 48, 56);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: var(--primary-color);\r\n    font-family: 'Open-sans', sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background: #fff;\r\n    padding: 20px;\r\n    border-radius: 10px; \r\n}\r\n\r\nform imput, form label, form button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n    font-size: 24px;\r\n    height: 50px;\r\n    padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n    outline: 1px solid var(--primary-color)\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    background: var(--primary-color);\r\n    color: #fff;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    height: 50px;\r\n    cursor: pointer;\r\n    margin-top: 30px\r\n}\r\n\r\nform button:hover {\r\n    background: var(--primary-color-darker);\r\n}\r\n",
            "",
            {
              version: 3,
              sources: ["webpack://./src/assets/css/style.css"],
              names: [],
              mappings:
                "AACA;IACI,iCAAiC;IACjC,sCAAsC;AAC1C;;AAEA;IACI,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,SAAS;IACT,UAAU;IACV,gCAAgC;IAChC,oCAAoC;IACpC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI;AACJ;;AAEA;IACI,YAAY;IACZ,gCAAgC;IAChC,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf;AACJ;;AAEA;IACI,uCAAuC;AAC3C",
              sourcesContent: [
                "@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');\r\n:root{\r\n    --primary-color: rgb(17, 86, 106);\r\n    --primary-color-darker: rgb(9, 48, 56);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: var(--primary-color);\r\n    font-family: 'Open-sans', sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background: #fff;\r\n    padding: 20px;\r\n    border-radius: 10px; \r\n}\r\n\r\nform imput, form label, form button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n    font-size: 24px;\r\n    height: 50px;\r\n    padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n    outline: 1px solid var(--primary-color)\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    background: var(--primary-color);\r\n    color: #fff;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    height: 50px;\r\n    cursor: pointer;\r\n    margin-top: 30px\r\n}\r\n\r\nform button:hover {\r\n    background: var(--primary-color-darker);\r\n}\r\n",
              ],
              sourceRoot: "",
            },
          ]);
        const s = i;
      },
      645: (r) => {
        r.exports = function (r) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = r(n);
                return n[2] ? "@media ".concat(n[2], " {").concat(t, "}") : t;
              }).join("");
            }),
            (n.i = function (r, t, e) {
              "string" == typeof r && (r = [[null, r, ""]]);
              var o = {};
              if (e)
                for (var a = 0; a < this.length; a++) {
                  var i = this[a][0];
                  null != i && (o[i] = !0);
                }
              for (var s = 0; s < r.length; s++) {
                var c = [].concat(r[s]);
                (e && o[c[0]]) ||
                  (t &&
                    (c[2]
                      ? (c[2] = "".concat(t, " and ").concat(c[2]))
                      : (c[2] = t)),
                  n.push(c));
              }
            }),
            n
          );
        };
      },
      15: (r) => {
        function n(r, n) {
          (null == n || n > r.length) && (n = r.length);
          for (var t = 0, e = new Array(n); t < n; t++) e[t] = r[t];
          return e;
        }
        r.exports = function (r) {
          var t,
            e,
            o =
              ((e = 4),
              (function (r) {
                if (Array.isArray(r)) return r;
              })((t = r)) ||
                (function (r, n) {
                  var t =
                    null == r
                      ? null
                      : ("undefined" != typeof Symbol && r[Symbol.iterator]) ||
                        r["@@iterator"];
                  if (null != t) {
                    var e,
                      o,
                      a = [],
                      i = !0,
                      s = !1;
                    try {
                      for (
                        t = t.call(r);
                        !(i = (e = t.next()).done) &&
                        (a.push(e.value), !n || a.length !== n);
                        i = !0
                      );
                    } catch (r) {
                      (s = !0), (o = r);
                    } finally {
                      try {
                        i || null == t.return || t.return();
                      } finally {
                        if (s) throw o;
                      }
                    }
                    return a;
                  }
                })(t, e) ||
                (function (r, t) {
                  if (r) {
                    if ("string" == typeof r) return n(r, t);
                    var e = Object.prototype.toString.call(r).slice(8, -1);
                    return (
                      "Object" === e &&
                        r.constructor &&
                        (e = r.constructor.name),
                      "Map" === e || "Set" === e
                        ? Array.from(r)
                        : "Arguments" === e ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                        ? n(r, t)
                        : void 0
                    );
                  }
                })(t, e) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()),
            a = o[1],
            i = o[3];
          if (!i) return a;
          if ("function" == typeof btoa) {
            var s = btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
              c =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  s
                ),
              u = "/*# ".concat(c, " */"),
              A = i.sources.map(function (r) {
                return "/*# sourceURL="
                  .concat(i.sourceRoot || "")
                  .concat(r, " */");
              });
            return [a].concat(A).concat([u]).join("\n");
          }
          return [a].join("\n");
        };
      },
      379: (r) => {
        var n = [];
        function t(r) {
          for (var t = -1, e = 0; e < n.length; e++)
            if (n[e].identifier === r) {
              t = e;
              break;
            }
          return t;
        }
        function e(r, e) {
          for (var a = {}, i = [], s = 0; s < r.length; s++) {
            var c = r[s],
              u = e.base ? c[0] + e.base : c[0],
              A = a[u] || 0,
              p = "".concat(u, " ").concat(A);
            a[u] = A + 1;
            var f = t(p),
              l = { css: c[1], media: c[2], sourceMap: c[3] };
            -1 !== f
              ? (n[f].references++, n[f].updater(l))
              : n.push({ identifier: p, updater: o(l, e), references: 1 }),
              i.push(p);
          }
          return i;
        }
        function o(r, n) {
          var t = n.domAPI(n);
          return (
            t.update(r),
            function (n) {
              if (n) {
                if (
                  n.css === r.css &&
                  n.media === r.media &&
                  n.sourceMap === r.sourceMap
                )
                  return;
                t.update((r = n));
              } else t.remove();
            }
          );
        }
        r.exports = function (r, o) {
          var a = e((r = r || []), (o = o || {}));
          return function (r) {
            r = r || [];
            for (var i = 0; i < a.length; i++) {
              var s = t(a[i]);
              n[s].references--;
            }
            for (var c = e(r, o), u = 0; u < a.length; u++) {
              var A = t(a[u]);
              0 === n[A].references && (n[A].updater(), n.splice(A, 1));
            }
            a = c;
          };
        };
      },
      569: (r) => {
        var n = {};
        r.exports = function (r, t) {
          var e = (function (r) {
            if (void 0 === n[r]) {
              var t = document.querySelector(r);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (r) {
                  t = null;
                }
              n[r] = t;
            }
            return n[r];
          })(r);
          if (!e)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          e.appendChild(t);
        };
      },
      216: (r) => {
        r.exports = function (r) {
          var n = document.createElement("style");
          return r.setAttributes(n, r.attributes), r.insert(n), n;
        };
      },
      565: (r, n, t) => {
        r.exports = function (r) {
          var n = t.nc;
          n && r.setAttribute("nonce", n);
        };
      },
      795: (r) => {
        r.exports = function (r) {
          var n = r.insertStyleElement(r);
          return {
            update: function (t) {
              !(function (r, n, t) {
                var e = t.css,
                  o = t.media,
                  a = t.sourceMap;
                o ? r.setAttribute("media", o) : r.removeAttribute("media"),
                  a &&
                    "undefined" != typeof btoa &&
                    (e +=
                      "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                        btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                        " */"
                      )),
                  n.styleTagTransform(e, r);
              })(n, r, t);
            },
            remove: function () {
              !(function (r) {
                if (null === r.parentNode) return !1;
                r.parentNode.removeChild(r);
              })(n);
            },
          };
        };
      },
      589: (r) => {
        r.exports = function (r, n) {
          if (n.styleSheet) n.styleSheet.cssText = r;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(r));
          }
        };
      },
    },
    m = {};
  function g(r) {
    var n = m[r];
    if (void 0 !== n) return n.exports;
    var t = (m[r] = { id: r, exports: {} });
    return d[r](t, t.exports, g), t.exports;
  }
  (g.n = (r) => {
    var n = r && r.__esModule ? () => r.default : () => r;
    return g.d(n, { a: n }), n;
  }),
    (g.d = (r, n) => {
      for (var t in n)
        g.o(n, t) &&
          !g.o(r, t) &&
          Object.defineProperty(r, t, { enumerable: !0, get: n[t] });
    }),
    (g.o = (r, n) => Object.prototype.hasOwnProperty.call(r, n)),
    (r = g(379)),
    (n = g.n(r)),
    (t = g(795)),
    (e = g.n(t)),
    (o = g(569)),
    (a = g.n(o)),
    (i = g(565)),
    (s = g.n(i)),
    (c = g(216)),
    (u = g.n(c)),
    (A = g(589)),
    (p = g.n(A)),
    (f = g(122)),
    ((l = {}).styleTagTransform = p()),
    (l.setAttributes = s()),
    (l.insert = a().bind(null, "head")),
    (l.domAPI = e()),
    (l.insertStyleElement = u()),
    n()(f.Z, l),
    f.Z && f.Z.locals && f.Z.locals;
})();
//# sourceMappingURL=bundle.js.map
