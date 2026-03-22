(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [11],
  {
    1639: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return y;
          },
        });
      let n = r(4252),
        o = r(7876),
        l = n._(r(4232)),
        a = r(6658),
        i = r(1851),
        s = r(6225),
        u = r(8407),
        c = r(2696),
        f = r(8265),
        d = r(2343),
        p = r(8940),
        h = r(7469),
        m = r(1026),
        b = new Set();
      function x(e, t, r, n) {
        if ((0, i.isLocalURL)(t)) {
          if (!n.bypassPrefetchedCheck) {
            let o =
              t +
              "%" +
              r +
              "%" +
              (void 0 !== n.locale
                ? n.locale
                : "locale" in e
                ? e.locale
                : void 0);
            if (b.has(o)) return;
            b.add(o);
          }
          e.prefetch(t, r, n).catch((e) => {});
        }
      }
      function g(e) {
        return "string" == typeof e ? e : (0, s.formatUrl)(e);
      }
      let y = l.default.forwardRef(function (e, t) {
        let r, n;
        let {
          href: s,
          as: b,
          children: y,
          prefetch: v = null,
          passHref: j,
          replace: w,
          shallow: C,
          scroll: k,
          locale: P,
          onClick: E,
          onMouseEnter: M,
          onTouchStart: _,
          legacyBehavior: N = !1,
          ...R
        } = e;
        (r = y),
          N &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = (0, o.jsx)("a", { children: r }));
        let L = l.default.useContext(f.RouterContext),
          S = !1 !== v,
          { href: H, as: T } = l.default.useMemo(() => {
            if (!L) {
              let e = g(s);
              return { href: e, as: b ? g(b) : e };
            }
            let [e, t] = (0, a.resolveHref)(L, s, !0);
            return { href: e, as: b ? (0, a.resolveHref)(L, b) : t || e };
          }, [L, s, b]),
          O = l.default.useRef(H),
          F = l.default.useRef(T);
        N && (n = l.default.Children.only(r));
        let D = N ? n && "object" == typeof n && n.ref : t,
          [I, A, z] = (0, d.useIntersection)({ rootMargin: "200px" }),
          K = l.default.useCallback(
            (e) => {
              (F.current !== T || O.current !== H) &&
                (z(), (F.current = T), (O.current = H)),
                I(e);
            },
            [T, H, z, I]
          ),
          B = (0, m.useMergedRef)(K, D);
        l.default.useEffect(() => {
          L && A && S && x(L, H, T, { locale: P });
        }, [T, H, A, P, S, null == L ? void 0 : L.locale, L]);
        let U = {
          ref: B,
          onClick(e) {
            N || "function" != typeof E || E(e),
              N &&
                n.props &&
                "function" == typeof n.props.onClick &&
                n.props.onClick(e),
              L &&
                !e.defaultPrevented &&
                !(function (e, t, r, n, o, l, a, s) {
                  let { nodeName: u } = e.currentTarget;
                  !(
                    "A" === u.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      !(0, i.isLocalURL)(r))
                  ) &&
                    (e.preventDefault(),
                    (() => {
                      let e = null == a || a;
                      "beforePopState" in t
                        ? t[o ? "replace" : "push"](r, n, {
                            shallow: l,
                            locale: s,
                            scroll: e,
                          })
                        : t[o ? "replace" : "push"](n || r, { scroll: e });
                    })());
                })(e, L, H, T, w, C, k, P);
          },
          onMouseEnter(e) {
            N || "function" != typeof M || M(e),
              N &&
                n.props &&
                "function" == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e),
              L &&
                x(L, H, T, {
                  locale: P,
                  priority: !0,
                  bypassPrefetchedCheck: !0,
                });
          },
          onTouchStart: function (e) {
            N || "function" != typeof _ || _(e),
              N &&
                n.props &&
                "function" == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e),
              L &&
                x(L, H, T, {
                  locale: P,
                  priority: !0,
                  bypassPrefetchedCheck: !0,
                });
          },
        };
        if ((0, u.isAbsoluteUrl)(T)) U.href = T;
        else if (!N || j || ("a" === n.type && !("href" in n.props))) {
          let e = void 0 !== P ? P : null == L ? void 0 : L.locale;
          U.href =
            ((null == L ? void 0 : L.isLocaleDomain) &&
              (0, p.getDomainLocale)(
                T,
                e,
                null == L ? void 0 : L.locales,
                null == L ? void 0 : L.domainLocales
              )) ||
            (0, h.addBasePath)(
              (0, c.addLocale)(T, e, null == L ? void 0 : L.defaultLocale)
            );
        }
        return N
          ? l.default.cloneElement(n, U)
          : (0, o.jsx)("a", { ...R, ...U, children: r });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2343: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = r(4232),
        o = r(4754),
        l = "function" == typeof IntersectionObserver,
        a = new Map(),
        i = [];
      function s(e) {
        let { rootRef: t, rootMargin: r, disabled: s } = e,
          u = s || !l,
          [c, f] = (0, n.useState)(!1),
          d = (0, n.useRef)(null),
          p = (0, n.useCallback)((e) => {
            d.current = e;
          }, []);
        return (
          (0, n.useEffect)(() => {
            if (l) {
              if (u || c) return;
              let e = d.current;
              if (e && e.tagName)
                return (function (e, t, r) {
                  let {
                    id: n,
                    observer: o,
                    elements: l,
                  } = (function (e) {
                    let t;
                    let r = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      n = i.find(
                        (e) => e.root === r.root && e.margin === r.margin
                      );
                    if (n && (t = a.get(n))) return t;
                    let o = new Map();
                    return (
                      (t = {
                        id: r,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = o.get(e.target),
                              r = e.isIntersecting || e.intersectionRatio > 0;
                            t && r && t(r);
                          });
                        }, e),
                        elements: o,
                      }),
                      i.push(r),
                      a.set(r, t),
                      t
                    );
                  })(r);
                  return (
                    l.set(e, t),
                    o.observe(e),
                    function () {
                      if ((l.delete(e), o.unobserve(e), 0 === l.size)) {
                        o.disconnect(), a.delete(n);
                        let e = i.findIndex(
                          (e) => e.root === n.root && e.margin === n.margin
                        );
                        e > -1 && i.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && f(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: r,
                });
            } else if (!c) {
              let e = (0, o.requestIdleCallback)(() => f(!0));
              return () => (0, o.cancelIdleCallback)(e);
            }
          }, [u, r, t, c, d.current]),
          [
            p,
            c,
            (0, n.useCallback)(() => {
              f(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6011: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => P });
      var n = r(7876),
        o = r(4232),
        l = r(2594),
        a = r(5048),
        i = r(1200),
        s = r(181),
        u = r(3866),
        c = r(9751);
      class f extends o.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = t.offsetParent,
              r = (e instanceof HTMLElement && e.offsetWidth) || 0,
              n = this.props.sizeRef.current;
            (n.height = t.offsetHeight || 0),
              (n.width = t.offsetWidth || 0),
              (n.top = t.offsetTop),
              (n.left = t.offsetLeft),
              (n.right = r - n.width - n.left);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function d({ children: e, isPresent: t, anchorX: r }) {
        let l = (0, o.useId)(),
          a = (0, o.useRef)(null),
          i = (0, o.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
          { nonce: s } = (0, o.useContext)(c.Q);
        return (
          (0, o.useInsertionEffect)(() => {
            let { width: e, height: n, top: o, left: u, right: c } = i.current;
            if (t || !a.current || !e || !n) return;
            let f = "left" === r ? `left: ${u}` : `right: ${c}`;
            a.current.dataset.motionPopId = l;
            let d = document.createElement("style");
            return (
              s && (d.nonce = s),
              document.head.appendChild(d),
              d.sheet &&
                d.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${n}px !important;
            ${f}px !important;
            top: ${o}px !important;
          }
        `),
              () => {
                document.head.removeChild(d);
              }
            );
          }, [t]),
          (0, n.jsx)(f, {
            isPresent: t,
            childRef: a,
            sizeRef: i,
            children: o.cloneElement(e, { ref: a }),
          })
        );
      }
      let p = ({
        children: e,
        initial: t,
        isPresent: r,
        onExitComplete: l,
        custom: a,
        presenceAffectsLayout: s,
        mode: c,
        anchorX: f,
      }) => {
        let p = (0, i.M)(h),
          m = (0, o.useId)(),
          b = (0, o.useCallback)(
            (e) => {
              for (let t of (p.set(e, !0), p.values())) if (!t) return;
              l && l();
            },
            [p, l]
          ),
          x = (0, o.useMemo)(
            () => ({
              id: m,
              initial: t,
              isPresent: r,
              custom: a,
              onExitComplete: b,
              register: (e) => (p.set(e, !1), () => p.delete(e)),
            }),
            s ? [Math.random(), b] : [r, b]
          );
        return (
          (0, o.useMemo)(() => {
            p.forEach((e, t) => p.set(t, !1));
          }, [r]),
          o.useEffect(() => {
            r || p.size || !l || l();
          }, [r]),
          "popLayout" === c &&
            (e = (0, n.jsx)(d, { isPresent: r, anchorX: f, children: e })),
          (0, n.jsx)(u.t.Provider, { value: x, children: e })
        );
      };
      function h() {
        return new Map();
      }
      var m = r(3885);
      let b = (e) => e.key || "";
      function x(e) {
        let t = [];
        return (
          o.Children.forEach(e, (e) => {
            (0, o.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      let g = ({
        children: e,
        custom: t,
        initial: r = !0,
        onExitComplete: l,
        presenceAffectsLayout: u = !0,
        mode: c = "sync",
        propagate: f = !1,
        anchorX: d = "left",
      }) => {
        let [h, g] = (0, m.xQ)(f),
          y = (0, o.useMemo)(() => x(e), [e]),
          v = f && !h ? [] : y.map(b),
          j = (0, o.useRef)(!0),
          w = (0, o.useRef)(y),
          C = (0, i.M)(() => new Map()),
          [k, P] = (0, o.useState)(y),
          [E, M] = (0, o.useState)(y);
        (0, s.E)(() => {
          (j.current = !1), (w.current = y);
          for (let e = 0; e < E.length; e++) {
            let t = b(E[e]);
            v.includes(t) ? C.delete(t) : !0 !== C.get(t) && C.set(t, !1);
          }
        }, [E, v.length, v.join("-")]);
        let _ = [];
        if (y !== k) {
          let e = [...y];
          for (let t = 0; t < E.length; t++) {
            let r = E[t],
              n = b(r);
            v.includes(n) || (e.splice(t, 0, r), _.push(r));
          }
          return "wait" === c && _.length && (e = _), M(x(e)), P(y), null;
        }
        let { forceRender: N } = (0, o.useContext)(a.L);
        return (0, n.jsx)(n.Fragment, {
          children: E.map((e) => {
            let o = b(e),
              a = (!f || !!h) && (y === E || v.includes(o));
            return (0, n.jsx)(
              p,
              {
                isPresent: a,
                initial: (!j.current || !!r) && void 0,
                custom: t,
                presenceAffectsLayout: u,
                mode: c,
                onExitComplete: a
                  ? void 0
                  : () => {
                      if (!C.has(o)) return;
                      C.set(o, !0);
                      let e = !0;
                      C.forEach((t) => {
                        t || (e = !1);
                      }),
                        e &&
                          (null == N || N(),
                          M(w.current),
                          f && (null == g || g()),
                          l && l());
                    },
                anchorX: d,
                children: e,
              },
              o
            );
          }),
        });
      };
      var y = r(8230),
        v = r.n(y),
        j = r(3679),
        w = r(9749),
        C = r(2622),
        k = r(1944);
      let P = () => {
        let [e, t] = (0, o.useState)(!1),
          [r, a] = (0, o.useState)(!1);
        (0, o.useEffect)(() => {
          let e = () => {
            let e = window.scrollY > 10;
            e !== r && a(e);
          };
          return (
            document.addEventListener("scroll", e, { passive: !0 }),
            () => {
              document.removeEventListener("scroll", e);
            }
          );
        }, [r]);
        let i = [
            { name: "Home", href: "#home" },
            { name: "About", href: "#about" },
            { name: "How to Buy", href: "#how-to-buy" },
            { name: "Tokenomics", href: "#tokenomics" },
            { name: "Roadmap", href: "#roadmap" },
          ],
          s = {
            hidden: { opacity: 0, y: -10 },
            visible: (e) => ({
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.1 * e + 0.3,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              },
            }),
          },
          u = { closed: { opacity: 0, y: -10 }, open: { opacity: 1, y: 0 } };
        return (0, n.jsxs)(l.P.header, {
          className:
            "fixed top-0 left-0 right-0 z-50 px-4 md:px-12 py-3 transition-all duration-300 ".concat(
              r ? "bg-opacity-95" : "bg-opacity-80"
            ),
          style: {
            background: r
              ? "linear-gradient(135deg, rgba(253, 138, 27, 0.95) 0%, rgba(255, 215, 0, 0.95) 100%)"
              : "transparent",
            backdropFilter: r ? "blur(10px)" : "none",
            boxShadow: r ? "0 4px 20px rgba(253, 138, 27, 0.3)" : "none",
          },
          initial: "initial",
          animate: "animate",
          variants: {
            initial: { y: -100, opacity: 0 },
            animate: {
              y: 0,
              opacity: 1,
              transition: { type: "spring", stiffness: 100, damping: 15 },
            },
          },
          children: [
            (0, n.jsxs)("div", {
              className: "container mx-auto flex items-center justify-between",
              children: [
                (0, n.jsx)(v(), {
                  href: "/",
                  className: "flex items-center cursor-pointer group",
                  children: (0, n.jsx)(l.P.div, {
                    className: "w-14 relative overflow-hidden rounded-full ",
                    whileHover: { scale: 1.1, rotate: [0, -5, 5, 0] },
                    transition: { duration: 0.5 },
                    style: {
                      background: "#FF8C00",
                      border: "3px solid #fff",
                      boxShadow: "3px 3px 0 #D45500",
                    },
                    children: (0, n.jsx)(C.A, {
                      src: k.A,
                      alt: "ASPEN Logo",
                      layout: "responsive",
                      objectFit: "cover rounded-full",
                    }),
                  }),
                }),
                (0, n.jsxs)("nav", {
                  className: "hidden md:flex items-center",
                  children: [
                    (0, n.jsx)("ul", {
                      className: "flex items-center gap-1",
                      children: i.map((e, t) =>
                        (0, n.jsx)(
                          l.P.li,
                          {
                            custom: t,
                            initial: "hidden",
                            animate: "visible",
                            variants: s,
                            children: (0, n.jsxs)(v(), {
                              href: e.href,
                              className:
                                "px-4 py-2 mx-1 rounded-lg text-white font-bold transition-all relative",
                              whileHover: {
                                scale: 1.05,
                                backgroundColor: "rgba(255, 140, 0, 0.3)",
                                transition: { duration: 0.2 },
                              },
                              whileTap: { scale: 0.95 },
                              children: [
                                e.name,
                                (0, n.jsx)(l.P.div, {
                                  className:
                                    "absolute bottom-0 left-0 right-0 h-0.5 bg-white",
                                  initial: { scaleX: 0 },
                                  whileHover: { scaleX: 1 },
                                  transition: { duration: 0.3 },
                                }),
                              ],
                            }),
                          },
                          e.name
                        )
                      ),
                    }),
                    (0, n.jsxs)("div", {
                      className: "flex ml-6 gap-3",
                      children: [
                        (0, n.jsx)(l.P.a, {
                          href: "https://t.me/aspen_eth",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "flex items-center justify-center w-10 h-10 rounded-full relative",
                          whileHover: {
                            scale: 1.15,
                            rotate: [0, -5, 5, 0],
                            backgroundColor: "#FD8A1B",
                          },
                          style: {
                            background: "rgba(253, 138, 27, 0.5)",
                            border: "2px solid #fff",
                            transition: "all 0.3s ease",
                          },
                          children: (0, n.jsx)(j.hFS, {
                            size: 18,
                            color: "#fff",
                          }),
                        }),
                        (0, n.jsx)(l.P.a, {
                          href: "https://x.com/Aspeneth_X",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "flex items-center justify-center w-10 h-10 rounded-full relative",
                          whileHover: {
                            scale: 1.15,
                            rotate: [0, 5, -5, 0],
                            backgroundColor: "#FD8A1B",
                          },
                          style: {
                            background: "rgba(253, 138, 27, 0.5)",
                            border: "2px solid #fff",
                            transition: "all 0.3s ease",
                          },
                          children: (0, n.jsx)(w.tZq, {
                            size: 16,
                            color: "#fff",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)(l.P.button, {
                  className:
                    "md:hidden flex items-center justify-center w-12 h-12 rounded-full",
                  onClick: () => t(!e),
                  whileHover: { scale: 1.1 },
                  whileTap: { scale: 0.9 },
                  style: {
                    background: "#FF8C00",
                    border: "2px solid #fff",
                    boxShadow: "3px 3px 0 #D45500",
                  },
                  children: (0, n.jsxs)("div", {
                    className:
                      "w-6 h-6 relative flex justify-center items-center",
                    children: [
                      (0, n.jsx)(l.P.span, {
                        className: "absolute w-6 h-0.5 bg-white rounded-full",
                        animate: { rotate: 45 * !!e, y: e ? 0 : -8 },
                      }),
                      (0, n.jsx)(l.P.span, {
                        className: "absolute w-6 h-0.5 bg-white rounded-full",
                        animate: { opacity: +!e },
                      }),
                      (0, n.jsx)(l.P.span, {
                        className: "absolute w-6 h-0.5 bg-white rounded-full",
                        animate: { rotate: e ? -45 : 0, y: 8 * !e },
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, n.jsx)(g, {
              children:
                e &&
                (0, n.jsx)(l.P.div, {
                  className: "md:hidden overflow-hidden",
                  variants: {
                    closed: {
                      opacity: 0,
                      y: -20,
                      height: 0,
                      transition: { duration: 0.2, when: "afterChildren" },
                    },
                    open: {
                      opacity: 1,
                      y: 0,
                      height: "auto",
                      transition: {
                        duration: 0.3,
                        when: "beforeChildren",
                        staggerChildren: 0.1,
                      },
                    },
                  },
                  initial: "closed",
                  animate: "open",
                  exit: "closed",
                  children: (0, n.jsx)(l.P.nav, {
                    className:
                      "container mx-auto mt-4 mb-2 bg-white bg-opacity-95 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden",
                    style: {
                      border: "3px solid #D45500",
                      boxShadow: "5px 5px 0 #662200",
                    },
                    children: (0, n.jsxs)("ul", {
                      className: "py-2",
                      children: [
                        i.map((e) =>
                          (0, n.jsx)(
                            l.P.li,
                            {
                              variants: u,
                              children: (0, n.jsx)(v(), {
                                href: e.href,
                                className:
                                  "block px-6 py-4 font-bold text-orange-700 border-b border-orange-100 last:border-b-0 hover:bg-orange-50 transition-colors",
                                onClick: () => t(!1),
                                children: e.name,
                              }),
                            },
                            e.name
                          )
                        ),
                        (0, n.jsxs)(l.P.div, {
                          variants: u,
                          className:
                            "flex gap-3 justify-center items-center py-4",
                          children: [
                            (0, n.jsx)("a", {
                              href: "https://t.me/aspen_eth",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "flex items-center justify-center w-10 h-10 rounded-full bg-[#FD8A1B]",
                              children: (0, n.jsx)(j.hFS, {
                                size: 18,
                                color: "#fff",
                              }),
                            }),
                            (0, n.jsx)("a", {
                              href: "https://x.com/Aspeneth_X",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "flex items-center justify-center w-10 h-10 rounded-full bg-[#FD8A1B]",
                              children: (0, n.jsx)(w.tZq, {
                                size: 16,
                                color: "#fff",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
            }),
          ],
        });
      };
    },
    8230: (e, t, r) => {
      e.exports = r(1639);
    },
    8940: (e, t, r) => {
      "use strict";
      function n(e, t, r, n) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(7810),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
  },
]);
